---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-14T09:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-14T09:43:00.000Z"
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

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665BVNASK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIG11hsae19TIQGvRsrUf%2BySVrU8652Txu3UfFbsjffRlAiEAuaMCJLBnsBnTpCk9TTgcDQ2Nvmg73j8ka31%2FJHEIiWcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDD4A1QCEYmmswfaFyCrcA3lRuLmACBinzsJ9M3g6bj%2BLLBC7dRm2YrU%2B8kIUnGpvP7Mbrkc7o3ylUvCYvkwjh2410IkR5en2D6uwd68hfQWLMOp8Gk29btkiNNS%2FribyxzGoHh7SUxCLRnlmbQBbplEjvTWrIfko17xe5UEWgsd4tfKuckZnAMCa8aHwlWezC4pU%2FNlW17zHenGf7H7tSk%2Bb09xBTkHz7ZPEKwiUNdexJA%2FCzoH815LvVpWF6YACmnx4%2FDafD5kkKbq7q3HFUF%2FSwj5DKTXC5B68QJUCzkf0kI%2BdCMnimy8XV4E4vxbb0u4hM%2Fkb9Q9rTrYrCHqE2UETkV7CsaZbHES9AwKMYsLMBxz9uH80mTQ03g9NtOSkxTp3aNVLCnx3wUIaa7cbSGuyuNonKWyyKQJrn1t%2BwyyfcTzlw6B2ddpK6V14XbPK3CyP0wvmj7Z5opNrchkmaj8TQNCTq5HVXqmNeMxRbtf5%2FBEVKDdPZQJjA8MoWG1s49uHQ8cCme7AKzjt7mMmTmtXERU%2F%2BP2TcOSY0j%2BKI8pJNWUJzS6dZhrTfxxdexEPBZ81ge1dutgLRAPRQLKI0TLHWujNqR3ibtHHwAdtwT31%2BXUBg%2B8xqEGYwIJPupmdXnfZEgjzoqxT60veMJ34gMUGOqUB8agqinIaX2j%2FEH5qvfHPRheuC6XRKA%2FSKE%2FTCDbPS2Yrebvg5o7IUNsMYZHI%2FrjcUnVUlqDq0GdUD%2BjHRpQCI8H1517Skb2doUNdN4n7jipmMHG%2BcUOPzC3I9YL%2BXonB0L0cQa2nOopHpelthHhSWwjt7IErLTrOIMG%2F73h2DWg%2BDi6BnpPKoD6tjX6iNyM0Z%2B9mp9fq5KgZH3A5dGjKmzTLOWKG&X-Amz-Signature=4fa13531cbd84d439a38553e125dab6de76abc24022f8fcae7802648ce17b180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQSGWGK3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDZZgyIbKzY4p8AQok7HZkcmUlT0hGTJWrzpdVSB0kKxAiEAuIOATz0k%2F2U3gfspXJFBPGMkDhAjoAZa0E1rCrXejisq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDD70rJYPEYvONtlJLSrcA5%2BK%2FnByC%2Fez8vaftX6RJsTDVfsj4C7Q9g7%2F4qEZxeHzYJtXcZz%2FSpbA8ElaVdR%2BmLvpDUya0W2rNyRquAC%2BVpUj90bRsCB%2Fnvm18Z2edg7%2FKYaQ%2B6Z5Q8ahkCJ2wuyLVZGf3jJY4%2FBROOvUrU6vqGkNL1D31SrZoegZZZFLbXIiumSDULW3VjcDq%2B9Ge2vgFZXVJxJzrAyNg4wKMJN99LmRdhbdkMuTwaNePJuxzmuLy8PyNduskLTv2m5uveezcCgP1ApxtxzgBNU6v6VPDXTVXEA8GK33bmnszG%2BM9%2BxjcZX4rfmmGY4itTJRrHJunpOtKro4%2BkoQELPYNxOuPv0ptEaYzQd%2Fn%2FL45wAYD1K%2FRmQgz8jNvH1ZDwsGxv83Z8TigJSb%2B10d1%2FS2MToaRSs3FpB%2Bvr9bw1DxSdFQgInR%2F%2BSz6cAamwGEnVYPjNABU9zqAzSAhdIEEdlBd0CGpnTc2FDK7nYyrAzQulUJSRTPC2FnkOZ4PcYFwSem73BRlUCMnDWHX0Ol%2FEJv%2F0pctVUSyE87H9%2BJK4qzWDoFM%2FQ7PCd8JzyHVQtLkEtbv38E95AJn91TpthHNcL7EinZFJYTnruysNoNB%2Bz0sXFQ6K3CBnklMulqwgbbDOPfMKL4gMUGOqUBNPDEBh%2BCKg%2Fg%2FyxeQr%2FNey%2FMVNchFRgjE4CeHyJwRzcIyLxxLU2sbrv6sGqLnjjgMasAVpCQPvXb9aR9vBnxZuQmQlcuPxkfX3YX5UQ%2FZVyZGyO2cKnB9fTKjWxf5l7ATihG3FJUMPAThzWcj8WATMRPVpwMv1zxorFSaaDThkRWhzqo7xDD6LfvhUzFaxN%2Fi0GNtP0BOFbthk8PMwZ9poVslY0b&X-Amz-Signature=5c2024674ac736763371e3bb1234dfe33c1628858e7de66026982f228273113b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
