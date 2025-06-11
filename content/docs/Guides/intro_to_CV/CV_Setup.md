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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KPPXO6P%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIEbFjFhfQIpUTLgLj1ueOjSZ6yiyuOepQgH1FhJn8u3DAiA0v9olmTeFVR4AKEWT2sPWug%2BgTj3gGNr1pwFKX97V2yqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6IbluLCoR8Fg8lQ1KtwD5A1l%2BFViFPkKhkUJ2agARZ2kTuMGYF16wPQ6uAFPsRVKTToZPPG7rEsbIsKdgOWoQWnOfmZILsHdcPO31y1vWuj%2B4%2F28hpXnIDjZWtxx0aYQPK5gD5TvJXq7knj7hFbrd6uHSbh9TiMhhCBsRHWaUAsjOCzCtPrKvwoHr2o2XnkAnfkB8HeKeeWnq6gZuV1Af2%2FjRt3NnvRVR8puOlcI6QsGZkNy9fcqxaSRqcPk68bDr%2FEZLDXn1hac8Ku%2FJ%2FSmuamErMeucCHPGbSiVLVPdzSXl5lmOaVHKO6seFZieTaBLnol%2Fak0Yb1TjMsAufztpYD0WifcdhIUSw59YO6sgPTPeU%2F1snsHTtasfCr4TdfDFkBUuahYMrnT41Acyns9BonB5C7dMX6wEcRw28muIoSUBP1KYVRBVmmUQmVyrEqlIDA5jJqf8z5xlq5c9JxvpOP7bIryo6m6%2Fd6XBkvr4q0P4IhtTavxG%2Fdx5fjuPDAIVPiR9d1CP0fjkt06CJdLgT7mH8rqiXzZS336sl643LSOai8kL%2FbsAtAycRa75YJtrfyS6SLmjGX8x69j7qQfdfR0C8JHlK7F1tcuBgSFnnm78BzJ%2FW4S8DnEo8wQixTPmgQ7JeYVgpNRJaYwgpqnwgY6pgEQ5pYQl4nGbMGhilDAl%2B%2FSeannn9OjSTfiPZuTgvDLOUwZ1gg9yNtKiGukKcPT%2BBIcsa4MUqGUg%2FIU6blEjdAE8V13lb4mY9fWy74vq2h4AeNRk2hEw6ke%2BtODMk2lstajTSDSJX4tj%2FZMIwcVjxJEUjsfKe64QqDDJJR1zGnHr2nUOKE2hhFiYVpmZeSwqifFJAaI9Vy1ifm3Wz2zlgX1e%2B5dC%2B7m&X-Amz-Signature=efb10f73606021ea2f0aad001396689d3b8c77cdc70452f595770bbcfeb2276c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MA2NHGG%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIC%2B34Iozv6RRCg4RAguGRCuvT6nL7CQlKVoyICmJSxIKAiEA2ULf%2Fm2qYT%2BDlrWL9%2FAPfq8ZRPHVlleYHGjg319BTIYqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeAn4BdoFlmH0f9qyrcA%2F5Jv8aHbeb7kcsATKid8FObNLid%2FBa%2BOpjUtHOSx1vDSRL%2F2yn1LpVfGKJLLq%2F9RVAYPyiBcpnyenYCeQ8pHaWQKL0btWdQFwxpFX7zXCKF8sDshYUclAt%2FKkCGSWaZqfYh%2BABNMv9xjL8MYxsIX9R%2FOOqazDHAM82y1Rhi1cMLlhSGaKQURRMMPKDN3oKoGnwxwxAz%2FhfzbVy1tS0F6F02mlx6evY17KjaR3KrvV07h9H%2B4QbrM9nw6hs%2FsL4dtNfDW%2F3jGG12n%2BTJ%2FcHnSnFPnu%2BisD%2FPjWse53LUSkXHm8tMLauenKxXYEYaA%2Fddjd%2Fy36yHgZVDyljEs1LMJZEVPdzKPD4apXIjcoF%2FRq91SH5lMrfYIjDw9HhOox34XtUGTUTuXHTsZCdXMDvMgs6x8Ext65kmNlcQm7eWPBIDQJ1RQCfFu8aA%2B3dkfalGik0YF2IhIHvj4CpAxfgXqGXfNyvrF8dsHqgAbTKkp%2F1Xgdq1OLZAgS810Iv7BNtne6TCCTNzXqPBmNHJcqL438BEspCzYBDNm%2FT0xdz84P46EbhioRUs1IJd3JSoor7Uy%2FP0O2J1ALeFCC5QNW%2BYoGUnp8lwGgD5%2FGQEt2y3hctGTceGAvV4QACsI3jGMI2ap8IGOqUBe%2FzwUR4rEKDWOWqWaSqy67tOsl6id94Z4fAtjn27CApoFHYJVgy6%2BQRymzl0ueyLFULEmXcpuWzPUfRMziCte0ITbuE8ZMeoIs%2BBVKrYwt9gL4NvGsh1XFqHKMrwUX2HWXzMByK%2FdcUaknsf3HFzTTFSuISUAFDwVeTV6EfYd1QBntMMuYPeVcmsCP7%2Bd5fP8hur0LRECu0YG272ylMv6V5FwBiV&X-Amz-Signature=9f0cc656fdb7949bf48cab0df172de8c0a50b37e13fdd4bbf7124d6c5219b9f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
