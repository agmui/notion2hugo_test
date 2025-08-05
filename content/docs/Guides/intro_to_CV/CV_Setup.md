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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX2UPLYG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDL%2B2VR8JGFsS00vsa%2BqYQKGbJ3JOW0TGuvfXiRyCapYAIhANDNTArY%2FtA2b1Wp7JtwInL4AS5BzrVAK3qrm%2B46lJ9uKv8DCFcQABoMNjM3NDIzMTgzODA1Igwbkv6IdIeDsAmLHiAq3APcoPBGYDM1o1JhzHEC1Y%2FKu4xVF8xoKnMjZdAf3mUtHxUnaFihvzZDrmhV8kynxggT9C81s6HZkZnhHLS7eDwRIRFcMJDBgXrNNSxJLWBznFrd3Ee84z7mI%2FEVeEuvTDRYiAVTmQf1dd4PGmRX7FBNhiJcIhz1MZdkUQ69JgkL3yW%2FFVrdREscryH2%2B%2BQYNwoo0xo5r6LK15Z8RX3ZDWdnV2C3iCu8PulXvorMJCCEjPRewXPEpS5Q3jIK3fq%2FF05LM1D%2BX3onZ6RU%2Fn%2B1N%2Bpf%2FB3f3o%2BRYu%2BPlEGj8oEtTCTWQfZ6U13p%2B0XbdOXv0w0QXLoXRV7HQAKOW0%2BwcwLYyh6UR73I1xQS%2FdFoUcX8x%2B5sjBCuyaOmXevBftzW95jeZhHJdMibRWWu5GOKLu2GZFYesIRAI8nOY4dnHHj019uSuM9AX2ARQ%2BJaCs6hU2YBnhqgfdg9NUqRA480rm5r4OO%2FZuXX6B1MuhL1jadnJeqPbWYsdCtu9B7V%2Fw5Px0c2H5bkHj99%2FLixDprWMbw8q0ZuSTBCGmFlwin4jmnUuoM79n1qiDCgnpIxSpe1fVkwtEz%2Bq3hy5%2B1RIkZPiu3HCglshEIzdz0efiMbGQvJB1cOVJYM%2FMO1mGf5hDCMs8bEBjqkAUjzjX%2B0B80CSgF3Y0Jc7vici%2FpJSWREA6lwLmWwUZA%2FRPRVZu8T4rpVpy1zD%2Fo%2FXWwfKW7rL08gb6GLmXAq%2Byuf%2F7qUKg593XYoDnX7R6cnfO1YZeBcRJaqM0kge%2F1ggRtwsJRH6qI%2F%2FJsJ6F804BnDUptaDxzjDNm2Sybp5dtSMoEqF8hqAzEpMeZnQPHgHYMp7WeDNGjfzmPURA%2BuU69%2Bf4Lr&X-Amz-Signature=ebacd06b214be5c6821551f28ecca0703a99efe36df79dd3beebc975d6bc6d21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXY4SQEE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCdhxcEA2nLPj5JzNO06VjZ5xJaVRZGknf4OjFh0AARgwIgQDsijvlAVSl0SnmGgyoo2DshtOPpqVifBWkA4huhBAYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDGDtC8dFMQTITHUZ4yrcAzsOziIfnmEEDf0FBqpmOu%2B7C5KCIeJmJEr7fiKOELKrsyrmRa5aVCtYN0CbaGwaCruD9aZn1KhGQgqdKZ5QZsdIAyLiuF8WT0dquotJgkgkzoYAevUpNpcCvl4%2F1ywarho7laH2gVG4USuLxLfbK4nrMY2G6quynqAFcSzBtihMxw3g8iq6YBtU3lYPre9elJqVRK%2BIAgeRjVFJCAxQUQUqJs%2B3IxpkiJJFThEo3577LV0ncSXx78SO6RvBdxvOaFFFPV7Hh8bq0oC%2Fsl29Aab8OtzyoZOqtZbVI2UarjG29VONbVKCfZiFzDNfXlC%2FKIEDT5uwPDYRLYn96ZNlTFKJ%2FXLVM6LGmfIpA1ZT8FFQVqE1BYbupzIJ25K%2FBIy1HfFBszRC7woIlcXe9hWnkGi5a65ExVKv%2FnzkTvKxcqXORIcncpxOLfcylN1%2BHoA3qnXmCa4f2IHzfkSMV%2BgUX1%2FmHSTe9gAF6aoBeK5k5GDPdrU4faa8gzAstIhC60KPYH7UjLz0quY4vDbvkJo%2FqI1PZdLsmqT%2F0YSXbf9rjH7Ep9d%2F%2FsAkJ4vtrXlfNsJ1fHUCuOVfe5AnxZptGRId11XY2n%2F8nx6cR6sYP%2Fka6Qh41YZbOUM6gEwVxLzOMLi0xsQGOqUBWagM2pPHAi5py1Yn9vRrH53EFpwWHJw7yKvrGqA8jRheMDuwY1sggRCjsYqSBOt6HI8dz9eOJWA8s005I%2FsrOq5jpuv0q0r71PTAiL51Ov3LVIT1CN5Amu9kAZDSGyZ9OrOA76HvdkMWNC0QU5no%2Ff1j9yKGOlJFVG%2FarroqH%2FHNeOsW7QtpqT3WwyS7jwFTgQVi8qCqqOwO7p5pLQcmTPaN2nOc&X-Amz-Signature=31ee06edc2678a248a2cea9c4e56536c11780e603aaa7a4a72c711b5ebe84859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
