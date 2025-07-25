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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMSIQACD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCPkHAKD%2Bhxl0Yf4AC3LFgqML2o4n2gkV0m6XyKMSn%2BswIgEVjKUFAgL%2B1kcpn%2FygtvzZs1Zfh87nCB60CsbYAUvscq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKNl5e3UEMXVVvlMpSrcA70s7DGQuTwR6D428BPzskd%2FvAiptaXUtcE5AsvE%2FEVMYQo6edx9b7YCkqTKp2NWZE%2FVTxG5Jz9ixhTNYcUnyCpKYOZih4lilWDw1oKW%2Bqh9sCeyYSqxiD6yhlPGAlI9be8ACgiawKz2qwhfvGD4H75TMDmUFLwxX2LAAD8cuf5Uv4QO1SdO604RsMSnQNWfq%2BOGGDqnWFKX%2BTOY520Uea5DlGF6nyn4Lv8DM%2FoDT3ZE3YvTGEE%2Bb%2BxzqzYhDwfjHg56KnP3JlufUvIXH%2B8WblIYsmbT9GvGkD9kg1VZDDkdZFEIZ%2Bwqk38n0u34LTMDf1Mgsymhd6dSX2YwCQuEHgiPTIHzS7wXOpGRXwjrUcqF%2FQWxtLbW3UtMxySxJzDbGnLPEd2aeoc3xeLsEOOFyvZZRRvzSnRx%2FsYmetP4HzIJ2dl0ON1VNpuCODyR7YOLKKePxon0fg5u2HdlhXNudZItkMO1giPQwj2djQsRfd3SqOfZ%2FbKhq0LRheYeB8aub4QAb%2BSD1Vz16Iw6Y%2BtW%2F8ghjbS1c1ObTnTsFKTtzzkYGzk6TwfZLKAPejIpP92GDmrQx9wrNI3ZvzEcvJww5969qmcVDH7NJE9wzhpshiP8aGWtuVZbY2fk8%2BttMMOqj8QGOqUB%2F5SA39tD%2FNE6hta2QAEebFbthWrUfvgHXQXGyc%2BCWj%2F6ukz3ZqpuauGAANm3zhBy%2F8k%2FKAlAPWeX2BbwwQBwq6O8OOqvK0LsiQrbwaOqXMX0DDoOlD8%2FLuWwfP9kbX5XVwSgy89Wi2YZqZxmrE%2BKCZq53VIy26fc7XIL4Y6fJ1Ktf5RExBd7rB7wD8hwQOC0CbzSL1wTfaj97bytRaTa14fh64Ae&X-Amz-Signature=492671818e601c772f4b749eba34cf3907da89a6c0b750a8a44edef0d864a854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634PIUWL7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDu7SOVbvOVFQl8nXwP9RMlqgc%2FvrOjDd0muKP4L3P3LwIhAOOd3JVQ43P2dbjbdWHkOGqszg371XzmuckRzbe7lb56Kv8DCEwQABoMNjM3NDIzMTgzODA1IgwrjYJ2rViaD0luzagq3APHssXpKDDnRW77yOcnIzdfJU9pqZDp46mOuUpBbJrdksU43RPccvW27qv%2FulpcF%2BI9GDBgGYJ58eZvDMlnICoSfdc5CY1ayuIopXLW8A6N1V7vqwPDxBnkxBEZRIODinjHO4jGQou%2F9x2Hsay0lcstyk7igLN1g8rZZyQdJW9j8CoAKoVP%2Bl%2BpY82ITt1JzIe1AUkCtuUXdVfekOkJ2Aw%2FSkd%2F7D0pmEBj4CuJtkfyklLBSqPtLkU2kJHza57O3qDaeAOtS6dZ8Qu8mh5ziJPHgj8fxfuglusZWorBSXrXy5YB7Qdzk8Mbl9bDdCz99uf5mSwBw%2BD4OSMQLKxKtsj6ttQUqBPJpwopPgGie6Hmbl6RDZHA2QATfNMtlZ1%2FDMdYb0ohi%2BwE51KSEdzsEhlopYljZMAxddLzrUfD39hamwaAtYHtUYK4bSoi4YaQl8PPqSMM%2BJmTsaTgKGAOACK1Mi6hVvDdzk6EFft1HZepEqkhqPJbecWhm48fuuwp%2ByWk1Wi4V7CrM6EVbVTAWSIsWcx10oAvlvhWYjnThg1hI3D%2F3vGpbLApy40YLGnmLJuCLYqhImXYQdQK23jzrylNbVkzEf4FIMT4GV8zQliQtFN0vJSLnfxg50nydDC4qo%2FEBjqkAXNCJEV2HlZe4bJmqLXBJmRRQ4CjUb8Gwzvlp8P40Dv1XC2PrHTOZdawpSHoNfcKBQdsVb2aimHDxha4NVZ5rKZP9Y2rMUPv4%2ByJgAnWBE0C5oRAVb%2BEq690sxMT9w6i9T7sw%2BY1cQAPYKJYxEwRTIyfxh0vJCp026Jfy6YfpQfSK3um%2B7HqjnWbVuf8yIcCHjBNa8jHaefKEb8rGcH4o5Kr5KVG&X-Amz-Signature=8977b687ef23d9d9d60b26a2ec5be8895e4d4d943261943a18bdd1c56e6fdfe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
