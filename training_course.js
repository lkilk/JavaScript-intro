
        let trainees = [
            "Liam",
            "Chesca",
            "Rob",
            "Emily",
            "Matt",
            "Jay",
            "Will",
        ];

        let allTrainees = [];

        for (let name of trainees) {
            allTrainees.append(name + '\n');
        }

        alert(allTrainees);

        trainees.append("Alan");

        console.log(allTrainees);

        console.log(trainees);

