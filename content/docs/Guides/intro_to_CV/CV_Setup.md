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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466336TU4MW%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKqPXsd8JzBx7G58Ppg61euDM38aeS9UV65yFF4xEVIgIgPbNZ8tYbjIliReb5k66yuychJC5H8X7Cxd%2FodZLCCAoqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFo%2BZj3DoFh6kJ7jSrcA5xR2iP9omeEx4%2BHOp3gpSofmSnkVRQpwClbaIP85R%2FdV0emG6DttYndvdcomXDs8YnVztbD97XIS0nXWUuM%2BSG9ZgTlTn0sfFLrlOqLxh0V2eOxq7h23HnKzTuJj1ISP%2BL4gkKzqV1PtmGby4G4BDEX9zC3cnZvXipZlGULP8%2FLkA5mPROl6BBIMpQXl6Amltt%2FnWjrHf9%2F2bxs4tTlYViX6T%2BUu3mWCWHDdqwGneGj%2BBfiWuTHBZxmNZGc%2BEJAPuc9NDQOmfuGu3yIHW2gJuX%2BChYMag1dXlM8iZ8Mbh%2F3duLUyuLs3Spox%2BGveMN0OnoT5%2F%2FP3o7eqaJPop3QeFz7BvVAZLEcIPmjKXu43DpAwiW05MhVnkSJ7OFIFdkUAEHhxujOQ4nmqz%2Bp6PctUN1UO5Mn%2Bz3gUPIpa8jkFeaDYaAJVcJuyOv8DXvifgo%2BFOfdYMzNPAlse9b48CaL%2F2jPbkkTyLugV%2FGZ9xx8P7iXUTQRFm%2BrEeE0sM944M6GPUg2C%2BDSbyxdGSrbdbK8MRVcg7IPfl%2B7N3ky2rcy8oiTS9Ew17qNJtzqulWfQA4dirQMTAYmmCDZpZk64neuTiSceU7wCHpvFRB7H3j0PRjPgfaREYMU4uV0RobAMLimtMMGOqUBhfw8ouoVuuDfQ6pbzx%2F7RoTmyMd%2BlZT%2FElQBYuysfPhGvkhGdZbDRZF%2BLsobW0Qg0YyGPw4f%2BWyIwR%2B%2FvntdyUZzPeayVpp%2B3%2FS1CtokhDrvfTzeYAbvsiYkbtEJM6wEtzl7vICxDsodpCCrFuYUJSrwYWBx0F0iUl2UWeaQfEjUz2UEub0gEJKe%2BBMcrArxGtiws68eaqswiwWOPGNRAB0ZQGA6&X-Amz-Signature=81bda4f641a076e79adf0a54b61726e3de964cc8f2dc421377f70eb430146ee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7U4TZ3%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC97d81HES13K%2BOZcYAmVY41xfKpCIGNt%2F%2BLdNABgt%2FwAIgSiSdR7HvO3mBOb3EFTwqq%2BqjWeJv45FtiyA2eIZEbwoqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpaQZ8WFh0Os2x07CrcA4SRPxWI6JU3qj9ryvbZWZsmjOvaDU1RwxFlboBj6UgXkXm8agUAzfj265pelMivK4JoE5njqOaUrgTLDWYZQ6hX8WGzvWv6WH2I309M85sxmrVI5wfCLp91nnAr2TH0jCRuKylAuxDgosZOMNbqL5hLpQ7%2Bhadgsg8Ac9GA386hG%2B5NQOltxtd6PiGnhkUXkx8fw2H7AVuzWC8qOZPZyGvbi02SAHrRj5VG16HdBdqUNoI2o6DVDMRKm1PlF%2FS6fm1vJZHm03RNlpaZGZariKr3Yzas8nR5%2BCovjHU3%2BEVG5AZfM0pnO%2BPMcSG19e42cN0ouDs%2B5ibUx2gPxA%2Feou7kbLZypTzlfEod%2BaAuhIv%2BdTHGp09ntw04Dbi5et8lZ4t9DBcXXOlM50N62CrL51ZnHixnYWS8qB94GewqcjYQ1p3X4aWI%2BBKe4PtDnOr2DvCQRz%2Fjntsja3GceAVevuH473uWBO6wJrzoc9xttL%2BUTULx32omeZStL%2ByNhB2Eko4lnBuY%2Bm02XyWuMJNG0zjfA8%2F5Ediq0HMbs5KizWI8Ma%2FPA6AYv6g837zOobo0vWFs52N2MBkNtnj6qwatVmducFHkak%2B35zBHyup7OLdiVZPqda0abNBBcQYKML2ntMMGOqUBmLbBQlrABdq60ENf7JIxk2q4ACRTNPoT3pF9qBV2t1esJp9JfCftux0gWPkTvmsibCmlF6rDLacjBwJgU%2FiQpeTtbYiA0TyMM8CFKc7gaw%2FFcIWJiCe%2BigYGGw3dMG0vTEfeuLfPjVbODQzUuEdUnr5WR9EX5v%2BKnPELMInl2WimoBkFpEzVpT9NnNwJVB%2BrlqEPaEw5AXI9Is%2BQZtKer61mAjuz&X-Amz-Signature=688155d18a2704af5887cf564326b5d88b6e11497411893649e3202766d0a5f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
