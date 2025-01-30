function access() {
    let authorized = "No access";
    let roles = document.getElementsByName("role");

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].checked) {
            switch (roles[i].value) {
                case "Employee":
                    authorized = "Dietary Services";
                    break;
                case "EnrolledMember":
                    authorized = "Dietary Services and one-on-one interaction";
                    break;
                case "Subscriber":
                    authorized = "P Dietary Services";
                    break;
                case "NonSubscriber":
                    authorized = "No access";
                    break;
            }
            break;
        }
    }

    console.log("Person access:", authorized);
    document.getElementById("result").innerText = "Access: " + authorized;
}
