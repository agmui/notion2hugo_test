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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662UU2E3B%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEwrAJs1gvAhJwR19iabINr3Ie1nnNym5gXNa4IY3q5sAiEAwRjEvZNMAAIpS4VNm2wWl8pJFus96ons%2B%2BwTGPqyXukqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAM%2BGrMy4kvB44YTcCrcA99MKqXM7ai39jjkC0c3fQeSSUUAXk4FKPh14n9m%2BeesC0RVNwgtL%2BX0X5Nix61IgwD5dDdG84xjWlW9HbV1PxlstN5OKsQ0T%2F%2B4M6dvCunJwSVAI68S2g92Ng%2FTW96BFoFB9W%2FmRIOezkt%2BUWeIeOv8ERlo50vqAWOlGFFU1%2BhkmTxOQ5iE19xEYg3sCUfvvYsP3u2jX1LEtiEZB14NVWqjzcAubP2HQEyneAl%2B8GXihyA4QPxBckTyLUJ5MOhnM1W7oSXRfSyAm8hAMsuZtL7HZHjYuXVAdWhSW97IXgod3FpSUgCEs5Fx8i8qr0aqdpSWGJHv5Mda1jVVoN83Er5HNHXoG4uw%2BdVdlatThTJQ%2BbSdBlPanwiUVOynOdY2XmjSNI1djaehQsxaukPL5epaXJINKg%2FgpUKawj7rOaaXuiTDvHKjkNtqNUCNhQe4d3B8m7PdLf%2BTnJ%2BfDwBartJuInXO456%2BxX%2FjsRxEvnDZEcFmPKhKHufmz7LSag2qJuK9A%2FHpDpRDBCPh3gYCTPk3pBuK6y1b0%2B15%2FwsUiWdJrjfksBPJfk0AHzCByl7%2BdAvG3remQ%2FMOI4hdviePlt41%2F8zWzqYRbE%2FJWkdGQCNAjc5FMLkEwWsC33yvMJ3lqL8GOqUBIMSrj7T6AroHLGKWBGprPsX%2B7AUH%2FBzilMhDvbJWNbvxrIpX5AO3F6b46HRk9tnV7W3FizWf6tZ2Yt6Xmuu%2BAmJ4Ke4Y7%2BpxwTz%2BG0KSjvbbKRVE3HJYAru3eH6RakJQsR0fY4DqiccjKN9l6zbDZRMXeJl5NM%2F1exx%2BHeJD19%2FgYu17yq9PKK%2FD2Q7duKB1DIvmzdpyoEN7IafOmQ1d3bsflQx8&X-Amz-Signature=d2930353753849fa92a9d14792bfbed949a2d56258c5a30ae0e779d9f042aff6&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE3KZLMQ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDnMVri7pfps0cJe33VhE0Xv%2BIgoTpoc93oXvz5AJ2boQIgcA47thd1FnxtSnDctbU6teb0HgaQWEW%2BtUN8eWznvKwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaSSFig2tvVkeECLyrcA84c%2BRtf6HUIxrybyNVTio73Qm5ZIcGGjV9je4apMVGQ5y0puLel3WAP6INwMGeNQqJ7HzR%2FCjdIHqYfgQue50ZKn6fMIkqy3m2Vk402Q71o6kYCA9a3OYi1IAHHc5j5R%2FdGzT%2BUgmmssgVU7RrntuilSBmDXpz54lL9ENAW0m%2B5xSCDbiFzJ5p%2Fsp553z3bfzbuzafS7cp3UlQ80OgTqQt9JSPvu8vDOrBYx5QxoVVhAssmjc%2FILEst%2BU5Ngd1fdZgbVECLk2HSaHX3nj5tSVe7P%2B1T26VF1hcYOtYDESIYbcdBHzaBlQKsLzT43%2B8h8m9Uacjse0vBUUqoV7KvBq1WTnXo2fVELu0PEwEgnmRU9qIUcmy6iU5pcpWEaW52A%2F8Up0J4zUDS1UucmARF7VZg%2FQKtsvnCceuKATxC1yi3cYx%2BS0Nr5%2BHQHSRG%2B7zehm3439m4a%2FyQf5UJH4kVnTrdeVofSZDpAFfEywx%2BwALDtDg9daCrb74CpnrBJjQi3epKTLE%2Be6Q1Zp0N7mjwTVnyQGM7tIRxajaxZfbvXNWBpClIGDVHNgXq%2FbweQfBOroPlQL1CUfQKKJ803wj%2BxFJ8ugLDIrNfcQ5o8C9BheJ%2FTEZVAAbjgGH7yrCYMOHnqL8GOqUBvP8nGBP%2BFQso8Uke6gU2G0B6QHtAP1hAVymyYSqhg50sW9CHmXrSbcjXBT%2FRXLr4AX9JFlUSny7G2I1JLztKUVfo7IjNTjImuhKxaqwTwvH3Bp4zGMyGhzJFKXnvn0sJoK2teS3txZOQNMXQTpSMVSdNLPV6FBvpV25zaDk5aOHBOTt30oDRMEvTe4cq3utZqFbnIC7TzIc5qplvHKPtE1wXTIQI&X-Amz-Signature=6db4fa5113ee1bc297ac7246bcfadffed2b1ca7adb82fb6a8e9a52ad9b94eb12&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
