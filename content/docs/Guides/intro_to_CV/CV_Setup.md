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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ATYX5CB%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIBxInIwQRAAnf%2Fy4mCRCGQbq3E2Vz7yAxoDjYdMUXonwAiAu8eUEAxbBjAsffTjSdC%2BJMT9CX0ZlvdmjkxS8JZcVjir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMXoXrI8fu0lG27Ef9KtwD6doXzW%2B20QO0MOR8Nz%2BAQooTkAzoHu4KjLZMyBWabBp2ReCmCdjQPdg27jDTgPFS4DjXHb7UGaIMCUgeNJ4PgpdEWwazcCHQqXJzW59oV0QaALmYk5BcxGL0hXiSy9ZrD9n9UwSAzTEy3%2BUQ4l8YgXIh9NXkCS2q%2FNdqqU6SH2AA3SBj9Lp0xCW3RDQOc6zwvoxEoNpnWliyghX3Pu59LoMAXkG272M2ZLqd4WhGT2V3m7F5qyJhs2YCAgMKSbO59%2BbfGf20Fal2m5oM6u4Yc5vgGBsHxs5x76JGmOPCgDuD1amI2%2FezcauCAbabU6cKLUUuKpx1oYU77IuoElCkm9sqZvmOygBVZtqVEKGcBfpmRiwzeXCj8OQpstdZnhpMsQzqIzEy4hlfMDbgAu0IwAaNpkvd9YxM9iVSUW59fAy7VG%2F7ewg4DgksbtiD0R460g5xq1L2ZZSuXRTDrXSaWIQ8KXolMzuF6TR66hvJu%2BA6luZSfDBaD58PJ8Sz1JlKa%2BEjNPMj46W%2Ft37DWYRFr5Ai%2F9Ut%2BcflQo6medoLunaDcNk3nt3hUs6e1AButQIkzGxy2R3n9dzODOEN4nmkRUp1MsQzb2wstxvPvuiCaWPoooXr4U0RMB2j3GcwiLOCvgY6pgEDD3NHnklYCrRMeEYZwzn8jqQMtBrxSDH%2B4ell%2B8PG3hPtl5jFFyfRVTCmlrx5MwPVsEOOLmD1o38aiF5gX69nC42XwD5T2JMOGPI9PGSNuDWtRoneJZmTAb9IvyDfdcTMZUU20Twgow4eqfE6AD6YwxRWWOjDR%2FDgW9w5jiV4vZEbZ7fMaq6pJVNStAfk39gqRu%2F%2BFLeE4XpKwHVHhg7PARPwhNOs&X-Amz-Signature=dbced07861d9465fe54cd67fa41b107c5877ede57ef086d39ae6cb2c813e6a66&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654UBX6GX%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCcwE7nVyoID1uC5%2F8AtXcLw3lsSPus4rmE0exCvsFIHAIgJJZPREod8aIXw%2Bs6vIUgrL%2BISsAlHI2vXe5KLeH1t1oq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNXvJK5osYAOiG7v4ircA1J7JJ5Em40EoXL70RvJTLtWfpl2S2CG1OU7V9326%2BkWTk2Xt5IKQLaiGuyhoLjKoR99%2BA1k9k08e9F9PeAu5d8tHgyN61hqkOUlnZQuLEfudeLhhjht4oMlsUlgnJgQ493KrjdhQbtzEwrGkN0GV5xa087kkjvfTV5fpqfS9%2Bbb0bsEyLr%2FB1cHng1HbrML1rvRyI3TjzeHvt7cLxrFNrvigF9grfFgplKNUTZfZyC599Gs0ilgG2qRJcKVPyDtsxqd7DIrUKx4chVezG9Ea1UhP2XjZ5uGFwEp1I%2B4H%2B9qJINC7JilnZpSFgf7dJON1nMWXcvk4NLhK1S4y0bf6PgylGjX9OS1jYQ5U3zVv4vy4kBuOplrY94y8ua1bhFRr4GYINPDGQUPl2QZocNt4m%2BTtYWEID345uiQZgTx%2BSWY61B5wAZnUw5ZIQaIszC7s8po%2FzuUkexvCy2loh6hOrNiFEStDJ3JAD7p%2Ffh0qiSdIzAB3nUHdru69k4T3d5AMMuy%2Fu%2FX52JgB3Sfs7InZkTWLjJ9Fkt7ekmLv4P96UTtF6HlKNwWj81Sas3IPU4dx0UJfzYIfs9nnqSf0p4QsbO%2F4WU91Uyda48erhhdFSSNR4dgR1qUgdiqUTnXMN20gr4GOqUBU0ZhzucJbr8pCv8p15sAHGw5PbF4bd0lw3tI38PvLNuWxp5sCc8G2W576h%2FhG1cCHG5ONFHw6e9lTPCvDkrkSbsyOEQP%2BrcI1zLnJSD2lagZR1%2BaxAV69uUELb44rptI03BlvcNv3UZ%2BsGyJQve7LpAp0BQ01d3QileXl44jKBsLO9kb0YxTHU8toULGnTHEICsc%2FMOLuPxmkoaBGq3x68yjCpu6&X-Amz-Signature=12f3d87ab627af5d13eff7ae8ba19cb68abe3e89b5fa39d182b480ad57f507e4&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
