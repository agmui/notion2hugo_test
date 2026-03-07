---
sys:
  pageId: "253da3bc-6297-80c8-93a9-f467dcefd643"
  createdTime: "2025-08-18T10:18:00.000Z"
  lastEditedTime: "2025-08-19T10:27:00.000Z"
  propFilepath: "docs/Guides/intro_to_SSH(for jetson)/Connect to wifi using Command line.md"
title: "Connect to wifi using Command line"
date: "2025-08-19T10:27:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 194
toc: false
icon: ""
---

# connecting to wifi with CLI

To list all wifi connections available run:

```bash
nmcli device wifi list
```

To connect to a wifi run:

```bash
sudo nmcli device wifi connect <wifi name> password <wifi password>
```

### example:

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S43NDGVS%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD4ths0RlHsz%2FrPdN7ZYHkeMBdiR8QfPIaATI2hgnnf3gIhAPxZyJAw6ofHcS9y3uLbhwVV6fAN3BRokSRCyoeXhjs5KogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4uCnaLc1hf1fCxdIq3ANY1ZZFe5jLEir6jaRmJ27TZ8zY02oOz9SeGdS1nH5vCnF2v6g22BItiPH7XYj3M2Ee6%2FVHc5mGMy2RdCt8qxoippwk1AcVHR6b2mSWd3Mhkf8cAl0zlKWnroNvGwZuXRRy0Z2b7FBMypKfYJgACwDSKROuLjB6MPBZSiQMXiP9qgTQhcBe8KiIKXWNmyoSiyVFecmPyEWjs795ONvSPCsA%2B049AxacdomV7oNtudiPvmtX1oNdjG5orRHL%2FNyEIhsiP3KShC9i3zHCuG6LpejAi4cAe7Qnw5FOulmOYjbSxnOryXsaA%2Fwa05zmLUFkUUZEpniPGR2mZRWQzsqT%2FvPfFw4AVs0q3ktPSbUo1oH6O%2F458qnwlF4wso4921R%2BqOF67pG0QRsGE4gj69tcshXFjS4QKKPPX0HJa8VknA4tfs6hcdwN8MaG5PesLxGvxEwTdlC0sNTe0SP9ZnXzDVlrzUar4kqaDHGNMKjCNYzGDG5rkxtkBkdnaL%2FePVSHaUWo%2Fdy0zs9%2B5kKNH44itgKCZcZ8x8BjrkdXyTxI1huOH59AdimBdPKRHFm7MNx3IX%2FWFjo9WqdnkwkYtF9PQkJThW8DNq%2BFqoyrhkhp%2BqrAS7aGjbnrfZdll2yY3zDq6K3NBjqkAUHL0PuKBpcJ8qkcSqenRg1aQyp2jg6X0vSdMvYoMHkWW78MGnrOaJk4EeYiPAiJoFrdwSoujt%2BoKGWLmzukZjkuzuzzvIZ0XJEDnl9IWkQ2nKMxRyFCYWYobEi0ERQqpSWEXGKul%2Bo0Fus6bbLDKkVyt9vKcalsUE8C9ObnV5won2GdO4qqWONzthFOdB0YEjk0Nv%2FH85TtlxnXHIY4rdSClCyX&X-Amz-Signature=63b5cc872598cecdc0cb201b870b86e7e3aa4278487e491bd7bd6b6c35bf539a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
