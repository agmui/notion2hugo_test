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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP42H65M%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDH2h%2FHHNlsFBefBVUZVKcDk%2F2FOmteTgeOQfoIG%2FyRLAIhALHW7s2uRJbB5f391C2OrVldoaWDGjKjrY5WJ4alxTUPKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZXBuTfoCBvd%2B3W4Mq3AOVJutv8NPc1l%2BEznY%2Fh7mzefkVLRCIMrZsv9bOV1yoQer005LFoB400U8oEMdSbPwIpro9XIuJJOxCALi5T%2BVXyuofG1OV4rOcLdVaSHBPV0Ty2PqYA9BCeEN8qlDOt2fOGuHOw%2BR%2FWN7GQoDKK5fOrm9IKGFN2jRM8S5r%2BQSG5vZqif2JEZGbD1CqLM4%2F9jpG10vf812toBfu1c4K%2BVHO1AqLD1d0hYcd03yL7nGYEiOd%2B3TfeRDMqfi8bhZD8GMeDW7YVkxRJAp%2FS5XLuF0OZycBE4MRXmcTiyT9d7EagXExwtlfPOWduRffQvTnicpYOtDYeHYglkcfQH7rFiU5qo8Rc%2FejpmgmljiX7C1XS1SfghpADBNHhX5O2XWNuGkktulI3GDwEifwr0c7uP0zhx%2Ftxu7kowh9qMqyFr6clYuie2JthM7iZ3YaOxwHuD%2B%2FhSJZ%2BbJFpxLx6KDRCEMgbGlCZzLkc76BdnJMBv%2BDFrhYHNmLnpwSVmUbtNnAHSYzj4fAvx1pXb7mPqw4Jl5MR%2FdGntoJaQFe%2Bb4YXDCDsoV05YmAeGYMVMq4YiXcJDucMozpoJiH1S58YI%2F%2F99WauPfSy2qBhKkDTHXFMiGx6%2BUdWxQU5SVnltc84TDKjpzEBjqkAcvMI3zpj7eGayPAu%2BOmQEOUt8tkhflH76McuYDSYndLYlZzARLhon80THl1MfiG94434KMFmjC5K9w%2FKVYOh6ZXjwzrDG6CGAtZqgePSvoO45F50JfmNxw0rx7sNadCGnT6AvDpMYxg%2BZNZcG%2FHFEAagaCOZrXq6pCeZHdQCSc7wO%2FsMhwiQvXltVtHXwOXEsO3OuN2PkOJpHx0j6lXlSrjF4Bn&X-Amz-Signature=d18cbf05ba47195f60fb3803350704e52a0ba06145a986f19674d4673b91c1b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKKHG3IJ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIBHvDaRrsTxGz3ubzNtd33tJwDM1K%2Bnu95wua1DafZs%2FAiEAqeGmvC1lowfhEIPlHrcL1i7EoKHxj9G2Hh%2BAmxJfnpMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHo2EtQ3AbTESw6KNSrcAykifl7MSt8hqZzJq2eTqGVBuSKemUCRk%2FbcUnrkb5jsx2JGsXR1Nvq%2FSaS7Xe%2BjJ%2Bpzgz7MMBzxPUahU7s3JpbKmT1q8urQX7n%2BtsS0A0FHsT0Oh3iDrFOo%2FmxSu3RFMOXZI5IbV5Ku8X1rBGspSzBLREHXnJXbDuCcRXn69iMQ6l%2Bf%2FVAc%2Fu3V3jCLsnchbT3dn2379HC9u%2Blm5nxDL%2FGsq3KlU1Xkq7u9Bl1zpYPIgndsJyWj1A9zDHOonkwFQUz0H27s69CKBcF0U5gmEp6YKfdO3%2Fp5JxC5oRRXKzLuQcAgZcnp%2BR6GxmO0%2BLkabDST39%2FIsiiK2nUXaP0YRWE0Kr8VYDHcGZULhHW3KTfysQkix7vl0TBmkQpuWUyisUi8iOXk7OTWtHt0HWO7kLJCnQsikxOps5AUkpyWAOSr09YXkegQpgTjom9TOmG9QqqjthzPNE6xHQv%2BD8DorSGIT1NoVLFl%2FlH4V%2BluSfuvakMZdUTKxsAZ56AWHAN%2Fo8m5R%2Fg5bIKK8o0Fgvf8mzRLVjSUcdBtKbHM9irGmnDldI%2BftvBXfXerSd4a0ME11jW0smqc4hXHAmv2l6QXLm2Y18098ye%2F1gvXb2ZpDXT482L1XUZ0OXcmeqJfMOCPnMQGOqUBunfOZwDqZwssTyF8ECIaMhzHGl9nMvVVnBCXjQQq9CERFyGEXzzS5YA7vyNIqMn86093Gr2pvn%2B6QfQ40g%2FGCBT5QVSIuY%2ByArsMCiQmZzNvjPdfhqbokQ95rQmZezc1BpGLD%2FH2aMYLNQb93a9bCpCAVj8zDdEZOm77S06hsAqEldihKVWU17pL9gROMAO2z5kx7Tr16KdD1AsD7JkqHSSQyoDy&X-Amz-Signature=bc0ae22ef2671954c841b053cd2b3869868e5be135635fd6366c02f39d6f2645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
