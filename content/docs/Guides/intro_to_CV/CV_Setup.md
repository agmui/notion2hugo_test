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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652K6IARR%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCICRRSd015Mb4v%2B1FSLPXRZgkM3Z%2FyKeou3zxP3ucI1KAAiEAsF9nOwQQbG5NXPLEF61nmTJgrHShyB3txOQ%2Fo655%2BDAqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkJM6jB%2BdtMQtRHsCrcA4nkrmMX%2BQWZvyPBjrSdSqEGuLMv4hSbejX%2FkSpspwg381Fk31oXK6MkR%2F067unwcK1uK48iD8mWrjUPIPlfNuwA9JOPE5le39VoP221303LyyrlvV%2FHVhPUBnGSF01h5h8hOAI8FNiB%2FVbnLK7j%2FJGOoT6XcUljT61Mq3KlyhUjCNDZys5oxCIGJMOspYVTloZnc2G%2BeQLFz%2B%2FVIq7dkQXK7xkAH97EXJDK2NE1Q3RgIibBrgxPJLM11xk4Lcky%2BihEUpzcZGwCeHe1GjklGUHY31oJz07DDmfEy2JBbKDOLQDd6GUPGKIxg51SryFGNnoUEc7Q1%2FoU8vV5XGQxY7RfrZ5mJ96uAX3KJGJCFST2Db9SyZ%2FfTIRZHY%2Bm9MiaGly8PL%2ButbYoBHHc3yAge1Gfvza%2F0sYw6nuXbwq3mj4tdVqQbKh5wUA35sPizurFP4eOQePunv8LvaPcx2JOG7v%2BoyVvqObhLLamC9YRbxnz5VRod4WG1RqMXQeK3oYYi9zT%2BI22frgXbgwrM7Ohjw9lEnBlJrgXHzqGvvCJW67LoEbMQbCl2Lw9Smkg%2BRk2B3%2BMTj53KbhewSyF4WuNjSrPNYfstgFGvmURR5YFBXgd%2FD3cE9qePnuJbpTKMN3K478GOqUBb5%2F7jEbDLbFxXTb%2F9MxgTF6BQhm49LYYX0gncyoPFwdvLLOyWfGNPvekEZXhsQ%2F3CLjdAal92DxpREm0nRYICt8eTsMdLQ55eq2iCiUdGLFXwc6zq4FzT4wNdoc6gsAky3y5ljOiNJcW%2FRDoCuFST7rBQH13ginN6RW3HkJa7pBFk5TW6kzX0duT3%2B1tlbxo2M7CzgdYbbVOLz5oYwurvThVclBO&X-Amz-Signature=39f321c91aa3abfd6fa3a9d45ab3167887e3c33a9cd949d437652070d80573f8&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TAGYGOG%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDL1nRy7J%2BZnqcsSbavWTtbMKD8H7Fs6n9D0CTfsFdp0gIhAOwlnNRKaHCrxkNCrHTefgX%2Bk2xJX7gXZP18DLvKWl%2BrKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzguFqicmrBJvYfyWYq3AMzrmfFj7yWgkDFrGX0PVxaaYsRSETXl10ZaOszZtuZmEp7UQ9lEIt8FYTTbz6CYjvc7u09XXznDgjg7R1I%2FvhOlPhzUDAE%2BDuEor1w8zjUAkqQd4Pho%2B8ZZ96lXO4Iv%2Fjecf41Y4MNtf1i%2F00%2FxNDwkyvQv3Lnzrm24keZ79wPmg4xLI386B26AwaXvLX8vlT0k04jdmDRKApPZTvorLVM6LW3Hp40l5WCIfzrerfL19UmFW29xKlD5FTQY2e2qNig6LRFm%2FfFnKpQjtD5qeHux%2FcwplQ0BMu4fi%2BVNyuyRAZOnZ2rwqzynMifJtleIkhRrnWHTJ3azH3ezs1ylkY3dSoiVzdszHm5YFV2LE6owmuPOlzqT0Y2FijOuUy1NbxMCIsWerT33f97EMmc7K%2FjYiN1PHHrzmK%2FSdQnK%2BQMY%2BgB%2FHUwvcMvhDupia5SxILUTSVkWuZxVTn7Ud%2BlK8SiqPqJSScsKokCwfcas3a6JRN1v2gAVgj5FNdEAfPLjFNQ9uWZWzmyhZLmPZ3DCXVxpH0cf0ixSi1oMIIROLdEIS%2Fy1aD%2BbK6YXs%2BMvNNsCWwmrC0BWR0GjsJM%2BBq%2FnIvuSfjHKmDyT7vTIzrvGx2RYDN5BP346uuvyx3MkDDMyuO%2FBjqkAWDabI04oxa%2FD3oHbJr9MNPCtZnHS1gSd0XnAgG%2BEbqeotwd%2FB5SvEzqL7ivV8CRgBkSQyBTGitr3eNPm5zlX9FWo6Ba1Et2OyGkwDx%2FOJ9LIQz4cZeBGtYLbNH%2BO4pyPX%2F%2BXF3y3UflH0R%2FYkC0p4btWwj0rNhaU%2B9ehHx5KA23mY29Xprgww%2BVg%2F5XTHKVw4rRmaCav%2BpiGjJHOlh8%2FoVTHJxE&X-Amz-Signature=19dc2873c928d6a5114a4037d9b78fc8248e20233804ddf2290c25b5f4414e51&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
