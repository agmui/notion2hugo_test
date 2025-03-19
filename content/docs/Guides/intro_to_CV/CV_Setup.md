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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KYZW4GJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDnq3DPB0wDW6hbHF2O6Gg8bXCwrdOp4ALmiw6Jm4CT9wIgR48GB4X%2FwtYfPNjzRkirVFfxIOIf%2Bq9LS4w08%2FveMlwq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDFqLdS2N8qvvXc8oyyrcAxHm6etjym9t7wvKMzfDRhG6OWZR6O3k776uxEuxiXAbSlje1%2FsGaRNPYyXhDW8R%2Ba85eG6Qu4ErLjRKdBOIHQJokGcADS%2Bh0cRl9%2Fzi6uiUlIPm6LcP2%2B7i8hgDoEvOJ2DJhRx2H8HgN5upcfTNj6Sps%2BOFxrREZzZAi89w%2BYRa%2BF8ItT6q4IF0h7SxBU7%2FlglxDdt5qi3smqJMeuztzgHLSLOzVFL%2Bjp7xQjNk80q7ijIZlyZ7jjiivJ6J%2Fq%2FoRwz60Hw8tJpdULeFt5pvwvvHVgJYRluu45b2NZ60CwUp52Al2KGedaeUTIKDAUK%2B4%2Bv2bFUsqF9cvC9ukRX0TMFF%2FBbvzYw%2BwHI25CBUI80ZunjtLJygpoW3M%2BcHD4SB8Rb7wNavyxsz43p8K%2FfV%2BcNynU6KvNWdYHq2qaIHcIIcttyHqwwMAVMqecEiEp6n0FwPoR1OM5Mg1YgNC0R4B%2Fxqs1a7TNBmr9P6E0Im5LaRT3SYKMD5M7Sn9WFKXqH5lI712d8zGIt1WNjTaQ6AIIu0oRvvNxdvfBD1gIjn12zUUivRdM09m6VOPmNr%2Feaxz%2BPKabZPAwuInVupJ0JI%2FgtLHlGebJG9lC3LVli5vKVFDgjQ8oafIrF774L7MKG9674GOqUBOAHbGYm0h1xpLIoOYJyUIkzDILJ%2FNixxc1RRhsEo1KmDWGyk8ySR0d2gK6y5sYkjMeRKB5TdMYJ6A1ZORKXNv1VUClzHf5DKIJS5RSBmj2onTQQ98sMybc4LEnOu3Cd5j7PKDw07fcNXhIGvUpK5GlaiZB0qW%2BTEEjB5hO6ZknhVxEt%2BTAr63Ja%2FE1Or4r4LkgYRVVkKnriq7G6J%2FRD%2F%2FmHVdUCA&X-Amz-Signature=339f6f7e2b1be544c85e51765dc339be392e144186f2f0a9edc6d5c64a25d0dc&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ER26IK5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQC5AjJHQcZA8EbilNn3QXWBX947PHITRDgf4dy2KfMffQIgfj1Rt5KV6mdBj7B9UcJ3prG4KmDfLS5AAeoqsrOAsG0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDJ3z314eyPvEsaK%2BPSrcA7rO0jgAIV%2BQvnCrUCvoUQwWp01gVqMaTBse9K8QxKnoUWwPhOakYxZ9qUYijP9s%2Blc2JW5%2FCjzzJ4PGeCz1zwJRZHlxWkfTPNOhKtSDkNDGLpozRjEQj4ZKoaUb%2B%2FWW2RNN9pbRLBYPEpcUrT%2BY72%2FRjbKAu7gvTIDsuvstaUHT%2BysQP1w9T7igzg7AWwmHglIQk0yqRIbhE1tgDXt1FKvG81oDiaK7EUrhzgOHpCTguJmNv67JLOlj6hQX72l86csi93Po9TMFrOUULYf74%2BqXMi169hJJNbyz8LO6l5JCYD1Upzsp28%2B8yAm42xe4ARLA0%2FZOClFC9pzrYRNEWT6XjyzSZaf4SnAgL%2FAD3Zd0%2BKDPchEyL59Q%2FTJEQTVdOZk78xhtBOl0EFdrS1Hu3fQk5WncOR8QGGAI93XGYCW6JJ%2B%2FpH6Tk3iiX8RThhVRMy2%2F0sDW1oAGuTiNS84qeZxKD4klS3prwn3nerF5Pwxwm%2BFNnQbCZ3rSOtTiJ426o8bCY1lgAbWFO5nRAcJMlhNfva4CfaDaFY5s81fXyYZ3fnb1LEsFRZwgZTRCxupFdmUJ937rMnZ1aNwxbU1wApqaLytYXNubOeaX8hyXAVOXM%2FEGVHac0ozZkjf4MJy8674GOqUBkYAAPGr4gqAc3MWoeG8LxeWoxiyoh6mcuXS3%2BzRHUYUlB0pkCrlAn%2FCwXxj0GuN7RneRxylQ7YN%2BHFhJBw1A0BD4QtyedqPpDb83UJJQrjom0HGeZDBRrMvVVRKXGG6FImV%2FtD38%2B%2F1W0cAqhedzWMg4FbQqeB7%2FtMGhrMxdq1CBWu%2FMVxaydnMcS2pKYoZ1M0%2FCShZ1lxn5zkZwIaNE2PPl225p&X-Amz-Signature=491fdc9fe5f0225dda7d3ce799568f069219d6cb4e51c64a1481646aa1db45bb&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
