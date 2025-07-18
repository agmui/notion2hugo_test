---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2024-11-03T22:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2024-11-03T22:06:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 161
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

[embed](https://www.rose-hulman.edu/class/csse/csse132/2425a/labs/prelab1-wsl2.html)

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2NVARXM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIC7Qx6NiucffqTk2yL%2FMyt25gEuPn5MY0C0Zc9qYZxGgAiEAxm2SOL5OSy7213LWYUq8j%2B2NXVRSbu0kFPw0yclPaHMqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIm9fadtBEtF0PLLyrcA%2FEyIoVwALms9SWmgvyTwHBR%2Fc77xS7K7vscT08Oz3ANL2LrvDnsg0bAlESU8IZRYQKRlssRnBw35udH7PDG1I4PyRTVYZj3EdaSYRlarNw8n%2F7hTaQzscgBfk4uJQ6GYOH3r346jbgXuHXyMlwJrs1l8QfXqntbY7P4HvUNYMNgXRBv6D76nEuS7IOu44M%2BMonNEstStUvApxeg8gvoWjfdZOPnGa7Wu4jam1ksfIamO%2FN0CNn7jeosWSJPUf8QzydNLFPgeeH%2FROjF439PVsay7%2FmuDTyfqSr8EvTdXFcCP4XNDpjTzxaQz5w22ugYszSrSFblDehS67IEuizhlY%2FDzJex8IwfKA1ttmPa%2BdtDA77P8RwU9pk2pt3uwH4G0yJ9L5HxkXviy%2Fd4kxskvFw90w4TxvuCsirwisuV3hj2E6YlGVpYbHvOz50cbSt6Cv0tVJJyJaZIhq4N3sA7x18BvRU9pebreqCJyl3wHSu5KCIJSPuHoMQafGbhGYUML6gbrtQV5a8U15nJcxKH%2Fk%2FQpW%2BtxvEW0xLT1IOvEURfZBHQg1tOih69fjZfExr0thnmj%2FUiOeWmGhtiVwggEUwTGc3kPnB%2FwWrKTQQP%2FtiFCty132LGzmqZpONIMPW%2B6sMGOqUB1F7t6JWTO0I5VJVMwvmD1XDGwkTb8hcb6JLIpxF5oBgFkQNV8g9zQEjNYj1TeJkXglEpvIF%2FnDGyxyBuuAlMDn%2BhT1%2F%2FT1ofTIL2acYHTOmE%2BmVefb%2FCkoZdil2qLS7WPRuYfvL2q4k2e5rnmQRzdobiuDrFbhC4njAaGPkfMlqPvFcUXMUVeWEgj3vykOAumdBA9UGbC2F09If7wHJ7iyOCTy1h&X-Amz-Signature=1f595a42cbb97792f8aca7f871bc7290441b56a77f596a3620d006c66e5f3830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- Get people
- 

# Cloning the repo

[link_preview](https://github.com/Thornbots/CV/)

```bash
git clone https://github.com/Thornbots/CV.git
```

## install python

```bash
sudo apt install python3.10
```

## installing `requirements.txt` packages

```bash
cd CV
python3 -m venv .venv
pip install -r requirements.txt
source ./.venv/bin/activate
```

### Open the repository in VSCode

```bash
code .
```

## dataset labeling  

**TODO:**

# Running model

**TODO:**

# Congrats! You did it!

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMA3CP5W%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDdW%2BS%2FCqRoaR9eYw39SfLIwplcFt688rQb63n2FDre%2BQIhAM%2BYAunovsUEMmLnShT2choFEbrNO2fOP5GO8XCA5nFPKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7364QxW7hCkspmlYq3ANLurqZrB1ejNcHchMIa5Ti63ih0tiDcnLOpfbKJ1aFZIIiMbA%2FthjvNcHSLa%2BfkQoCON2jjmUV6FqAp8ckrpcKxb6TXYCJzzo0aMJgsfQJ1KdZGt1ff1Xc2TQu4IjH3Km35ZrE%2FXf0g6ASoCudEni8y1mnkcoUF0vXEeXi0pCPfkkpQoM6kHHEH%2FqJNBavTVfswYTAAHm74VTpgiEfzowbzEb4juRLPJ3btwxAxlo6qpIWrb1zuZW3hlwQQSWxr2ZSsnZhGrOFAl708c8P%2FmG72I7jhRMa4%2FNUwJFwmlDCSeUHnN%2FDiG%2B7j0zfK6VGzFGsYJFG3HJilFzSMZ%2FMCIzDtNZl1qRVsvHTRZQyFHOjTTNaK%2FifJ%2FNelnBDPlWIkjUEpNibZOC9uBRjDNuHPu47rNwtirehE4e1RvQK%2FXFN2pATfI%2BzszbaSA1kKxCs2AIt9OdSw%2FZpneDS%2FQcqvDXhSWZ4zgGZbhqsT6hrlnWobu4xwULbIXBk08q0Drtdpdm70gEypT7HJMHNnmCfrKSIo2KJwOhFDoNevDjrMkhGfxuMH1nQ0A8rfYmTDhqGCFSgMN9hFTn0zHE3BWzlflibIH1DoIoz45yE%2FDMfI5fBLc%2F6LKyfZKj6e3QGSTDQv%2BrDBjqkAU%2Ft6ssYyoCwnk0Cu9sPrHuaxBAUOStIidjcX%2BAtE0lI%2FFbtItqggBnNSmMQ7UW6GkPVwItnjDGsfJRkNG56l6POjp4kcCFk6aYJ4DaUWRrPS4XvyCQJJsP9Z%2F4yPL38ga9bFzjWgeyD9D6SOz9Ow29Fm5%2B5xgugAuWbBVRszVLPyj7Id8fFTAaje2gff8oeRnVP1xXduUCunfsMnUbx4oLa9B%2FO&X-Amz-Signature=b7db713beacbb73e929f378aa695fee7bdaf8b69a4360ac6c3f33f1dbb0b4282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
