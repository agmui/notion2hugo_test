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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKVCMSNR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbw5gVAROgponPY%2FfWbox2cCKtK2IBgLuJzZYioKeNPAiBPkdpMk3Kvz8q7TcYAvMxWisNz5Si7N1Z%2FJPTEgg1p4Sr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMxL8WBoFOeGfIARXiKtwDlkU0TXt6aDe3o8A%2BJBO52XpRxyO2ijaEhS%2BJj7GkMek1yrX2bIwUAMPJ8%2Fx3sgpmhC2Zn6YRewMuKK0UkGwkjNmn6UEc1luCwyAXPsu0mStrj34u2TS2mX6bVRG1Ph4Kdf6AHPhuZF9RvJXh5CM%2FQ3NmylmS%2ByFWAjR%2BMC3bviazxPviY0WRN16YmHnE4UOD1X6klaoZNe7bIjDcpKNMp2u07XyyCzoAwSdC0e8wCQgb6lsKMRq1jTV0q1w7TRNd%2F1c1xT6YdDHiQ7uTdxftxvUk4Ht5duR7omG79u7a%2BJSld0BNqAyuhzV9gkbmfjgycNM4t5jbPJ0rzDyfBgSE68JMAraC3UjX95H6ODWlBKqMpr922zjOATWaC0I%2F1Tjk%2B3l6quaKaI6bE64xmEwDScUAvGqrpyIeedM5zyQv1N1DUhF9Nut6zrS8zquggo76sSOSWPLQ1wpSFU75D45WFTnVLkYpBszCkexZN9bweMGLB02TQUd0jh5L8mC76E1A74m22Jd7WmL0PZV4XBOSHdQlJNDFwO9JBui0PzlzUYyqShwwho53Lir27K37v78BiahM43yAz7E1k3k3wE4jaPGYCzSBmIPaQLtNHP1RXQayyK%2BUz6T1ioEBGUEwh5y7xAY6pgGQD1eCSDQvgspF4t3jEIe%2FM8fPJkvnlC1i235IA2rrsKZ1dmbV%2BLYRb9%2FlXOHNbXjC9XNVwcTT7IZW9EOW8f5CfpzDUTR40kWy8uheL%2BDkG6Cq4jtYtvMAJgwyE2TD5PM13nF7MMn42Gl6tQs7mKceAyzQ49gWojMipl2gGbjqHobsomiWW9mAAgfTpf%2FLvsDU0Ibws2e3BG1Qsrpf%2BQab%2Fg35R6Ts&X-Amz-Signature=18c9efae4e2a646b77b690ca40868956d9c262cb2cb5c02b875ceb31e45170a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEH6ZFZY%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1LbpnrRKGonEK%2B6CrG29qEH8FIe9b61buRwUAn5xzJQIgLWI6b2KFLztMOzBFa92f3GKKuJh8XdzUzsEovh8mnfgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEsmx2rY%2B5YkCStP5CrcA%2BJBS17mWyK%2FeKxn%2Ba8aNX9AbVtFI%2Bt%2BgUkSfStdXElftpgPriQUg1hgTJsoH3z21udSz%2BA6KlAKJ78N505bKRP%2Fav9HEwfH%2BwBlduJHNdTV7qty80eIh6X4mVEXI5wlsz%2BhrU0ZKNoilRJHpQY3T2%2BGzENBZNWgGAaJwR20HbXlB4l8DM14NbwJKNPQwRnFCYDhZvFadKPu8AtPjdff74svIUbVq5QU%2FxChIRwmQpw%2Fm1lfS9ISqj7mRaGMFIRiRDmBvp220lXLyG3QZ6XFBU5ouwQ6gcwLJaBHEylYQ7AhJTqgEMZgYpTaKqi1ucPCwtNgdyPn3O%2BYUT%2BMzaNZTjekyR1FvRPlYIS39QSJxia5gmTbdHsn3jgubBpekXZCyb0k2vxuaTJBjnaTL6IETFSdVbxPUDEdgAAr%2FtFuTao5Nd06QGUQhOxC6IEaAilMXb1t0petMYyx0HJeqckgeZd7stBVuT7gQ2n3jgInMc2htdBT4vHcubfl9xXbJQL7Vr%2BgEtTqhKuA5memcnh96Ys5rXV%2FGVrmQlgkC9SaoVjNxLtgLZVJ0xvP7caAS4gdzER4seS8pmmp1OFvH4zNJ4XA1RJlFE%2Fhm2woBKkPkyQTmc28dS1nmHtaa2aWMKGlu8QGOqUB9UXulyEY48xBSOtlhgT6YPSQWgaU%2FotjRUbVPqekpFxeEXZouaORoJZLZOvg1ttelJn10bsh6DY5xjbKwdG%2BeBacVzR3mKyQyOdTWFlAMgyihn5URuY7zUf1jkaJ0j%2BUPnVJAg6A%2Fb9YWXl7yBXnLHs3xroK4m0jnAhb3TbmwYhLmyLuv9ILJNsBupe7c0qNRvZaQQCSOMAc1AVYGksIMEsxZAsF&X-Amz-Signature=1d34181400a9a2d5a47c1253cf3871797994be0a8b544e62c10e3ae497d4f987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
