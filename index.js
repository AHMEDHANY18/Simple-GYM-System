//look at README file and give me some feedback about it 
const express = require('express')
const app = express()
const port = 3001
app.use(express.json());
const members=

    [
    {
        "id": "1",
        "Name": "Ahmed",
        "Nationalid": "30303262105533",
        "PhoneNumber": "01151117044",
        "Membership": {
            "From": "2024-01-01",
            "To": "2025-01-01",
            "Cost": 1500
        },
        "Status": {
            "Active": true,
            "Frozen": false
        },
        "Trainerid": "1"
    },
    {
        "id": "2",
        "Name": "hany",
        "Nationalid": "30303262108533",
        "PhoneNumber": "01226171610",
        "Membership": {
            "From": "2024-01-01",
            "To": "2024-04-15",
            "Cost": 750
        },
        "Status": {
            "Active": false,
            "Frozen": true
        },
        "Trainerid": "2"
    },
    {
        "id": "3",
        "Name": "sayed",
        "Nationalid": "30303762108533",
        "PhoneNumber": "01296171610",
        "Membership": {
            "From": "2024-01-01",
            "To": "2024-08-15",
            "Cost": 1000
        },
        "Status": {
            "Active": true,
            "Frozen": false
        },
        "Trainerid": "1"
    },
        {
        "id": "4",
        "Name": "mahmoud",
        "Nationalid": "30373262108533",
        "PhoneNumber": "01226171618",
        "Membership": {
            "From": "2024-01-01",
            "To": "2024-03-15",
            "Cost": 250
        },
        "Status": {
            "Active": false,
            "Frozen": true
        },
        "Trainerid": "2"
    },
    {
        "id": "5",
        "Name": "hamada",
        "Nationalid": "30309262108533",
        "PhoneNumber": "01226171610",
        "Membership": {
            "From": "2024-01-01",
            "To": "2024-12-15",
            "Cost": 1200
        },
        "Status": {
            "Active": true,
            "Frozen": false
        },
        "Trainerid": "2"
    },
    {
        "id": "6",
        "Name": "samy",
        "Nationalid": "30309262108533",
        "PhoneNumber": "01022327715",
        "Membership": {
            "From": "2023-01-01",
            "To": "2025-12-15",
            "Cost": 2500
        },
        "Status": {
            "Active": true,
            "Frozen": false
        },
        "Trainerid": "1"
    }
];

const trainers=[
    {
        "id":"1",
        "name": "saad",
        "Duration":{
            "from":"12pm",
            "to":"6pm"
        }
    },
    {
        "id":"2",
        "name": "gamal",
        "Duration":{
            "from":"6pm",
            "to":"12am"
        }
    }
]
/////////////////////////////////////////////////////////////////////////////////////////
//1- Get all revenues of all members.
let totalRevenue = 0;
const calculateTotalRevenue = () => {
    let totalRevenue = 0;
    members.forEach(member => {
        if (member.Status.Active) {
            totalRevenue += member.Membership.Cost;
        }
    });
    return totalRevenue;
};
app.get('/totalRevenue', (req, res) => {
    const totalRevenue = calculateTotalRevenue();
    res.json({ totalRevenue });
});
/////////////////////////////////////////////////////////////////////////////////////////
//2- Get the revenues of a specific trainer
/*The first thing to do is through the id, I will get the trainer,
after that I will see how many members the trainer has, and after that I will see how much money each member pays.*/
app.get('/trainer/:id', (req, res) => {
let totalRevenueForSpecificTrainer = 0;
    members.map(e => {
        if (e.Trainerid===req.params.id) {
            totalRevenueForSpecificTrainer += e.Membership.Cost;
        }
    });
        res.json({ totalRevenueForSpecificTrainer });
});
/////////////////////////////////////////////////////////////////////////////////////////
//1- Add Member (must be unique)
app.post('/addmember', (req, res) => {
    const newMember = req.body;
    const findMember = members.find(member => member.id === newMember.id);
    if (findMember) {
        res.status(400).json({ message: "Member with the same id already exists." });
    } else {
        members.push(newMember);
        res.json({newMember });
    }
});
////////////////////////////////////////////////////////////////////////////////////////
//2- Get all Members and Member’s Trainer
app.get('/member', (req, res) => {
    res.json({ members });
});
//2.1 get Member’s Trainer
app.get('/members/trainers', (req, res) => {
    const membersWithTrainers = members.map(member => {
        const trainer = trainers.find(trainer => trainer.id === member.Trainerid);
        return { member, trainer };
    });
    res.json(membersWithTrainers);
});
////////////////////////////////////////////////////////////////////////////////////////
//3- Get a specific Member (if hismembership expired return “thismember is not allowed to enterthe gym”)
//Thanks,eng/omnia for your help to solve this part
app.get('/member/:id', (req, res) => {
    const memberId = req.params.id;
    const allowedMembers = members.find(e => e.id === memberId);

    if (allowedMembers.Status.Frozen && !allowedMembers.Status.Active) {
        return res.json({ message: 'This member is not allowed to enter the gym' });
    }
    res.send(allowedMembers);
});
/////////////////////////////////////////////////////////////////////////////////////////////////
//3- Update member.
app.put('/member/:id', (req, res) => {
    const member = members.find(e => e.id === (req.params.id));
    if (!member) {
        return send('member not found');
    }
    const { Name, Membership, Trainerid} = req.body;
    member.Name = Name || member.Name;
    member.Membership = Membership || member.Membership;
    member.Trainerid = Trainerid || member.Trainerid;
    res.send(member);
});
///////////////////////////////////////////////////////////////////////////////
// 5- Delete Member (soft delete)
app.delete('/DeleteMember/:id', (req, res) => {
    const memberIndex = members.findIndex(e => e.id === (req.params.id));
    if (memberIndex === -1) {
    return send('member not found');
    }

    members[memberIndex].deleted = true; // هوا كده اتحذف بس مش بشكل فعلي بمعني اني اقدر ارجعه تاني
    res.json({ message: 'Member soft deleted successfully', members });
});
////////////////////////////////////////////////////////////////////////////////////////////////
//1- Add a trainer.
app.post('/addtrainer', (req, res) => {
    const newtrainer = req.body;
    const findtrainer = trainers.find(trainer => trainer.id === newtrainer.id);
    if (findtrainer) {
        res.status(400).json({ message: "trainer with the same id already exists." });
    } else {
        trainers.push(newtrainer);
        res.json({newtrainer });
    }
});
/////////////////////////////////////////////////////////////////////////////////////////////////
//2- Get all trainers and trainer’s members.
app.get('/trainer', (req, res) => {
    res.json({ trainers });
});
//2.1 get trainer’s Trainer
app.get('/trainers/members', (req, res) => {
    const trainersWithmember = trainers.map(trainer => {
        const member = members.find(member => members.id === trainer.Trainerid);
        return { trainer, member };
    });
    res.json(trainersWithmember);
});
/////////////////////////////////////////////////////////////////////////////////////////////////
//3- Update trainer.
app.put('/trainerName/:id', (req, res) => {
    const trainer = trainers.find(e => e.id === (req.params.id));
    if (!trainer) {
        return ('trainer not found');
    }
    const { name} = req.body;
    trainer.name = name || trainers.name;
    res.json(trainer);
});
/////////////////////////////////////////////////////////////////////////////////////////////////
//4- Delete trainer.
app.delete('/Deletetrainer/:id', (req, res) => {
    const trainerIndex = trainers.findIndex(e => e.id === (req.params.id));
    if (trainerIndex === -1) {
    return ('trainer not found');
    }

    trainers[trainerIndex].deleted = true; // (هوا كده اتحذف بس مش بشكل فعلي بمعني اني اقدر ارجعه تاني عملتها زي (الجدول اللي فات علشان الافضل اني ممسحهوش كله
    res.json({ message: 'trainer soft deleted successfully', trainers });
});
/////////////////////////////////////////////////////////////////////////////////////////////////
//5- Get a specific trainer and trainer’s members
app.get('/trainerAndMember/:id', (req, res) => {
    const trainerId = req.params.id;
    const trainer = trainers.find(trainer => trainer.id === (trainerId));

    if (!trainer) {
        return res.status(404).json({ message: 'Trainer not found' });
    }

    const trainerMembers = members.filter(member => member.Trainerid === trainerId);
    res.json({ trainer, members: trainerMembers });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
