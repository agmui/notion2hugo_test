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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WWW64JA%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDUofmQm0Nx6eFeTtZ1cPF2YmE47nfcWWUJ3wSAoq%2BgxAIgETw4BQ%2FE0PZ85xg5ehk8BynwN2jz4QcyHscDwuHQtWkq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIXl8YYZwSlJeYHLfCrcAwYwU%2B5%2FLFtLcdk%2BguSUT7kTH1%2BkF6uELJRGnlWbvZM8vemodeOdoRdWUFjayxp8i%2FuY03oN8WruAgd0%2Bbotq3okKy1aDoiD%2BkTMYTivLzN8jGXwrRsClAmbwDaFeMSOy6WZWoV10JnR2klk6SVIklz%2BbXcvNhLlykbQOqQcBTkgfrpHvA82wn6lqMTgZUG7IUn3sl5I%2FkjVN%2FVN2lDCeTiPJ6xC2TPz30Vdfc3u%2Bl%2FfGo7xW7O4ejj8oYLOa8jZ35virEzDonL8GK7i6tjEhLZN2epSo3TSTK3H%2Fp6WMGlt%2BR8CjGnbAXKsUqBzxqvlZEH4fT7FFwgN3TS5109bQcaxFYKhOtYKvRSmmlMWcKz5KEffPDtpeE%2BoBOelDSGotaBbEvXjD7iVeNxeM9DYmaE5VW6l4LfQHaQz3fdwlGCYRKrs2GQZZNYI5RUhkMFXzzkVQxihiiiWr3Dc35B%2Fq1ZJB51Gxa07xW1JzCIHV1b3DQ%2FWaCbUcvJotuWrHzabf99t%2F2m0zl5DzzxEey7K9IWabIViUcsd1fJ5DlgqCaMyQxB%2BV1m4FqfVJPP92kbbtjtavVyNzho74Qdvqw63ChWMzu0ULWtI2CGHkeGR9%2Fij1K4mD6KG%2BeoX8aXsMMHDusIGOqUBFFA7HDSGbOZG2cgf8cA%2BXeho9v%2B%2BVrgEbPr%2F4UsKy5j2A2lL6JxDgWf9XydrV3crMWZ34gCaAyq412OCqosNSir%2BGCV7V6A%2BoT%2F9ATYahqu4C1MHYkxHCbksad20wxxPnXsPzilamS7%2Frbe4s2mNOiDVdhQSmbfJ1I69iML6NSS07UW0v%2FcMsS7VXwJYpEtLQ%2FXNG8ppP0Zcfnr0Iiws47wx9ktI&X-Amz-Signature=8f89d38aef68afba6ea0d8ad1dae98dd3b5627cc8ec2b09db02d9fe7115a34b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4CAAQKU%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCeaseU43izI2wxYEZdy5Z%2BkHQ%2BcLYRkUionBWprMWySwIhAPem4XIunUY3gLJJ1ddxynN1jWv%2B7VEBDIzSolMuwkfgKv8DCEQQABoMNjM3NDIzMTgzODA1IgwcoNx1mBeCBe4q6ooq3ANvAJ1aNcQ9qEpI30C8VMA09ZY6wnblnO0NW2TYTkbcQihOe2YkYTwyScVSImeRTCRT2pEHpR%2FF4tc4IVnzeMmIVRFbVNAEHN%2FthzNJa%2FE%2BqSfJVUmKk1G%2F9OXWO7OKRrWv0rIA5NaKeLgAgdKTsrXnceNvVXaP%2FSj6RQHGA4%2FATfbHZ1PNN85OiiF9v3QpvY9jS8IOhb1Y4X6etLQ2lWdFKB15FTa4VqUE6XwiMzsORDPo2LSISlWNDrNgWXvn6pI4T6R2saXpL1aEKh5bgxP4W%2Fq%2B72Ny93RGGMTWDF%2FMaGG%2Bqrmx34Tq1O5As6oAQ2m0KjuD1JnEJRvNg1Nrmp9uqncd6DMz9h7enhFPajJawHSiqWA9zhT6fVCnVAW%2BVNBSsFTZcJ%2BC0YDPEsPZ3tsoSaF7B1dGCK343U2mc4c%2Fc5Zeu8qGxwRf30LnqPfWqHLbQ96bmzGymJH0vAIbfKARuSdJGjvIN4ZTntpIqGgMJvcN1E%2BfRu7Yu2w10QMoBose78xwplNHmWWHgia%2FKad6Gpedr49dpTa3dyMQKKUpZ85Cb4SMpB9apsTjcKwyeNFecwou1nY8gPhsmwHQY2gGi4Ih0crLU4H7ZF7F%2BGpSjnGP77NFf4fYAuTHVjCkzrrCBjqkAbvTA6iXdKnpa7%2FXSln55cGjXpCj%2FcrNX3Kksca50c94jCJy9e44ucx9PAG%2BtKhzp%2BwgKOnBYvcba423eMWdGCKypow%2FX0v4HVhcJNNi30jvz6U8wrVqokq1%2BTFHNmgDtV0FguyNMAyauqoKX%2FYd2fjBQY2gt6E%2BVlWkNS4aXDuHoVfX3sk3QTybPAg30BGLjCaAefRVoxm3XYc15FFAdAh7yFZd&X-Amz-Signature=0a48a87a056a4fb4a70d8aeb0be78996676e0c1211e2ec1b20b6f8a9202c1748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
