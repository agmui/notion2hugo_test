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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677JABMBJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIB0ryapYI6P1HToGzOvSRLOWuepBbwORTrZ2CFIBliMGAiEA9SYVtdNgs2p1JlrCyElCpQ%2B2fCObYgMxtgCQ6MlryzMq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDrXjWw2BNbw%2Fnka1yrcA0bmiqTec8QG%2B35ueutiM%2Ft7uzZDPowDZkW19GI4j9%2BN%2Ft%2FnJjdvf%2Bzp8ao1%2F%2FSJVEvskz59rfmHqx3kwVD8TtdOBTkl%2FxP25e%2BXKkMOCRQ79wrP4oV%2Fli0iMZ9PYv7WxrAevAAJNznYtWffyq3ZLLvhUnrGNuQCTwREM%2FowBs5QTuMkGAtimDyeaRrfTo%2FWo9v26BtOzN7xl%2BqurV%2FSlPONshTTf1qPT%2BfJIjYU0pmbKJngjUrMalzDhWfg5%2Fu9C6eKoWqu764guKRl5MQ%2BKpyOWhk8RQOap1N41C1OUSW3Y%2BqJkQO6r6eUq%2B5wiRbISBLfrAUR%2FE0gVD7yxNQaqIzsMHrswL8%2FHfbZuAgp3C1Ozk3u2ENrRliMO6J2jC5UrHoYlVPcaJd16EyLcU%2BQORBTJGKQfS0ZTH1Bq34Yo0F2bmmL2Q0zMVmIntTyHjG1w8MholRUM03fTQ558%2F5D9PfWf9f%2FE7yq1UpPuqu%2F3TQOIrm0hP9nC3%2BlJAZsYD1t2A5T8Gga7zvdwlVJnsFCyYnkrlKKhJFdASSVYDgF18ljEg1rnfj5xCNnhmhmGus4WQ3oCR2WU1EcuExobFGE9gEp0jJBKYhqgb2B8h9aMQXfk%2FT8sVMo9gX1Q14QMM%2FClcQGOqUBFekesgjnTPOL0TEgGPf6xOslzAdDziiVCuGDG7meB3XV5CJXYmp7%2BNIcVmCgprBdE7QjG3rtzMaHaG2W8kH40S9oWjiSzzyclrYeSvLlPKBF4npIg8zl5wcWTAQe%2B%2FA7NZU%2BmV4S9Hd6P1sxMCh7%2BeFYqN5M9q9LcRFCx%2F%2Fy7DrmUQw4znJqCSc%2BEVDp3vCScEB%2FE38g%2Fe%2B%2Ftygp6%2FQSblH8yfcz&X-Amz-Signature=f5e6d116b3532212d6dc5338cc2981972c39a84d5493db101f31e478ca946d0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXABAC5L%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHTaJwH0n4AMJfvK0O98TPyzPI19m9cufE%2BQ5dfcL4BNAiEAlsjWz0CGMicuHOnNTEHms8et%2B1vmgiZcooh9KmVMzNkq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDGSShMmPZ%2Fw%2BzJpBQircAxvaBTwzdaHh8jYBnSP5p2yhuVvQmz2W82gcvwSJLua5oLTSHDUCBSwapQ9HzO3OK%2BO5vqChINMMeF0YXmRo9sJEf6W%2B43iGmxPXiUNbO%2F01c1A82ONQDyHSoxiYsz6TyA1exaCDoxjIWMaJicittOtXMopyrHpOkdVryLNNnUz2GoJTALLj2k7r2OpPYVDHR10vwGAVta6ifvCcZpgpFnTPAphHFh4n6yQqjJYcl19qMpPzyLT1YbqMk5ZblSoP35FgX6CRfQCxML6zmUwFzuLeacItJBKL6FGMVlSlV0OsS700YUGyPSw22MS3nk9qKNC4bCTC9Jnt0MrbVemLbYHevHQ5OrLJLTtCLlHWESQ2X7pIyJKi7oRG%2FMPvBXOksVOlc1FsJRXNWEseDtCr0jUB%2FShiCbtf%2BPgjD2zlxGu6DUBg3f%2BS0ev7uiAufiwKVhb1uBHd7EtAnN26%2Bp6grVN7RMtjUpreXepuwGTf6mAQC0eEMFdmyBUwumSbEoRcHe%2FnJmiolxPeypQnhUW1AHMq6Y7Qqfq72qAajcsSWNkh5wqL%2FHou2uYG93CVuteysYyFg8uL97IbclZ0ZJNDSC%2BdhZrLaFG18NYSRuCqLARjSYIB%2BJ7eH4eJsGtsMMTClcQGOqUBA2GPwinrG%2B6tZxqpf2htXgQeLncYFyzDVc7g0rR1o7ZJOZJP5nT%2F%2FOE058tGlr2D0KLGqbci5%2FORZ6zkDe01sefnpPwlVUmj3s30QVpL8glJ48ccvcfWrRSNQj90xQ12tGw5uDD%2FKIuLjypV62UasDECCNsuBAXigo5Qz99fZV0OIHZlhmwBauWSI0GqY%2FcOU5lzBpm9wfqgY2G4WzistdsdNZe1&X-Amz-Signature=5a7e6baeb9680acb61567529fdf747222203d52be55f31d8b0fcdaf224e17934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
