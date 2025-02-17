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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EOQSRDY%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEK3SShQosq%2FQjVVEb38mnfoRfrP4PcI9rKaYBKZZwh7AiEAxWUW0c80Yh1X6Wfg4hL5ZPfvzVLMzUCyOSpdvPodg%2FMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHd1F6BBECCYfpb8wircA4n5BefPxgLjFBdX9doV2r4XoyWhQluRxsn2ZhwigAakFqoJ3FURJtfOl3YdKLZYXuXXDIneEIvUwyQ3M2PynJ7aVs8EizWpUGbhaXIO7Vq%2BAhwsge1FBBP0EOviWdxFPilBiVidhZgtid55cTJUAZA%2Fl%2B5gerexFPwsCpOa6YLGkKvXsqH92OcxcyOZL3gHTPdwmzAHW7VTOYM2t9ks4o3Efo5qGq1rysm6h8b6U8ASJWv5x7kmNcmEaTO4XJCYEY3JsamouRPr3ut%2Ba3kj5kziJuZ0EUF6GbzmGYrBvLsF0SWiB0dFz2sgMkVq9frl7ymlDf0iRD2QBktNdO0rPk3svc2fyWU7BqltONqMo9VcT8qp4o0EBXR3iIXFsxrbmeTtUIPbpvGcpggFJOgoeFNxwZ67Xf9o6zncSmlxbg6K3C46oENYgeDGPAejXp%2BnCGgBMu%2B1tUkECTV9TtmjjaXbttX4%2BuI%2FW19asGMbQmVSF0zwv0SXuDCEYEVMc5%2FZs%2BAtBA3eiu22iL2WBsfoQF%2Fk0sh816CpNCc31y53z5qoxVT513hBROfSfek9hylcdIxUf3ot1xEo1T963DNmn3FTFdJjfxnuQ8JEX8HkSdJsDpU8L9L89F2Z3lQOMKqWzb0GOqUBYi44uIMfoHxjT8qPtvcFoOsCeCCKFHppY5YFSz0xKR1TTmrko1vrBBQTv8W5iQNDtDXKa0n29QgKo0WBFDlgpVXPXpi3457HLdYYjJYJZWTYFDcQBQoDAxtu9Sjx64USVNJ%2FPvX5xXMo2v6a2iPhORmIFzoUldWpRJBeb890sPo23IZb2oA80ahgq%2FuqeoBZM%2BqXBy4AT7vChTCi7LGDVc6E092p&X-Amz-Signature=8b56b3d657014c76bd188ffa0f0397fe8420ff21a9f51cb88c4cbf83d7dcd316&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMBS5XRO%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGubifSDpoef%2Bza9w11RkzUeQP03vQDmUUWFRSB0C7AXAiEAzhOs0zG%2BDDj%2Fr5Hd36Sfd8sZKHuTYa7kXLl4e5z8R7oq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDL0JghOYBN71grtx8ircAy7zEZL0MwFuASRoLvb8QD3PrppXZ9iBPaTpv8%2Bn2HFQXi1PHP5ipai3xnUfetHUarDBX4eOWZYs151elwPnllntMTETfNLQG7su0H2ZhO7%2B1BAs4I6Er1AnOG4ytIi0eV9c%2B5Pn8j8q%2BSI45kHHco777VqRvuonPw6UgljIaZZrLaz7tfrWYLj9k8ELP1K%2FggnyeTzXBW0rvS3HirrRPlP8cMZIi17MiTnT2EhhsEE9WM%2FVcVWz%2Bg0lugdR197U%2BYgktxOVo3oOsJLpunJjpiUJZdm5520SSN%2B3s4iizTS7tkF1YRgpkZpyc%2F7rUD%2BNyTi7H9SPP6STAiDisSb0FrQkdRJ4amEH44Zmt9WQz%2BwammLQH9u%2FPfPkjcszOere5GNIcYm9Ek3bJb9GrDx7r1IZC4QDMuIZL6btw1nedcu0vWfydRkKNbHha9d%2BLXv8JQd7ASgrpcQEN7KtjvIWXoqEQ%2FHvQu0uWxgm%2FLwYaZxptGU1F4KXrQ%2Fru0ragNu9JyKe%2FplHrEN5fR40IaOxmrMuU7FBhP0SvuubCy2%2BHZJahxrbG1ewkA%2BOwIgR0p5gPSG2NgjDDsiyr%2Bx%2FEVLNlEg%2FUsLHBlZKbcqj6XKktUQqv46nr%2B0o6bZ4CCpTMKeWzb0GOqUBgtK7k2%2FP97tOa1TtIK3Mnw5IkoHcMNM%2BcXhebWCBqgVOp3elvcIPSLsLZNLSBVrmsLMuOI3OzOYmJijHHXkrfsJiNG1t%2FzMiFIVGkeOpyFkCvE6mVUatWPhIQfK2YPiDttLe49NlT%2FdLaw7CKBtyZDWg7AJOYeoHSwiAJ48meiP9igBRajy2BQpw9GohkEHdv6u7UwP5FxKKSfIBUCPhv98J79Jw&X-Amz-Signature=9acbec0c7c61aef5a6e6ff8a5628c75e2474f7b1264b79ed9128594b19fa1821&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
