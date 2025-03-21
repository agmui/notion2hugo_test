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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDEKNKVX%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIHXxeCm%2FrsUO50%2FXYaZx9%2FsXXQoZGgflf9PiOmcipReaAiBpT4EiCyr%2B8pjJbiyG5956qCZ1iiBmnYmTsVI6vF%2FDayqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9SZS3k6YnYE1ux4oKtwDwUFMlhwpc5HMJJ411SR1pXnXF0t%2BP05HjRzXiFt0TQTfajzjTjKuM%2FoTxbhXXSchTFy4bpfN0tVCeDvyChcueMYiTFdyEjrCYFhNG0C8joC%2F%2F4y5o1oFZQYa0c9BE0aPRyla%2BEidpJwNzDEr1FWVHl8AmHsyrx%2FIDM%2BgE%2FdWXt6oQ1kpAE4OCIyztOH6LcFDZqge7fu8fuHZ2AuUJpIIDTpLveJh89lrKD37GOav%2Bx9PVQu0ScxNAjdTlPSbkyrors%2FF86kkkd7HC%2Beb7tfZskpHmJhli%2Fr6wpNkAMXTVuz1%2FkkjFEPQ1komicK8MxAO4ak3jIFN%2Bmm6lHzwi4CAAgTrlDGnwzUH9gwG734kMRFNPOGFZAuntI2AP9EUutCiVVw54BcQdSYG2Z9lH60OnSKoO6dE5QOXyBS0fXWp4kQzZIRtOaYtP2CsXvQcvKp3ukZ924boLgCVkyE8m3za0krDkL1KATCSXhJHJXLG4HvGhM0pBu%2FW87EZKgJNGG3PU2Ics3zDVpN907JJrWK9s56%2BAhTd7Iswv0lAep4tADQD%2Fkd%2FoM0tJDcACzwne8uTdiW%2Fpg53gi8hq551E%2BTZHFg%2FdjwupvELnBLYSavZ35Da6mJZMHbSAGePoD0w19f0vgY6pgGpOBC4ijCkiHWJ8pN8DukhiYJhvaHkUOJO55bN8dEoQH8%2Fgd6XobmH81Krdx2rWkklZ2%2F23Gm18U8wgFeNhGarXduvyJwtfDPjWA8esrts%2FgDLgsN5iToeFgjtji5Gwew0elNbrAYNl1bT9D5drDjk71BDIddxZry9Q4oULdSBY45P5wibeK2B8Jh1hpGclejrToVC2Zu4tAQwipHcl8b2mKyIwcwG&X-Amz-Signature=9e6cf2328b510cf411c19b928e07e34b36d99089797b2945c0fbc422b5dbeb81&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UFJWJ6A%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDCLkJ5ASnsBsfpRVlw03R%2FyAkoJOHV31qPYDD1myuqOQIhAPIPDpj0B0uytWMAuItLTtbrGjnozoJifT8eS%2FXR%2BrdTKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FBYkKKCV7a8w8ihoq3ANiEec5HwbkKBcctlZcexLljj0O1rKQzc3%2BcEt6tpoXbSNzR9jQLHP5EHpDsHcgC6Hbf%2Btk69fYhhRmBs8r6zsEUA6BQ0Zoh9g1iFTOx9vqkR9Tj1Tv0QUaqnaLBnVn3te%2FqC3sl2FSxLhy5enM2%2B8x5TAg6VzC9aHkPkKuqfcLRmDrysww7VhOQpD0D1BDt4czIMqIRx5wuayJtTnlsnVeDOEs%2BFYxa7GvJCmVaiMm6KVBBUxuxHYfpWwxQar3%2Fi54Oj%2BJuS3U9nDwjSwtgG6g6MdFmq7Q2VO0%2F1np3Thb%2Fov7aPUMn1BeZOfB25POjE2MoMnjChGnDbzjg6msS4jAjlbVG8EtR28NnaJ5nUgILk8jIXxL1t%2BjGaWBn3q%2FslIL1SqgqLZ3uVf25j2YZBikU%2BPDUJrjtpG1zZLzBcqytsX0m8aqIAgmAifsZ9AfNec6SMa%2Ff6JiJ9NFhTiY5IA00fT4MB%2FAK8AUDF5CzgSvMYZBird6h6FwnmFHSI%2B%2Bx4aE38GEvX3VTAco7Dw1Z2MhrZjbEZjfwNSd4kGApp6rGal1VeeVw1EnKoJC1yOeZq%2B0TsEzLRyWXBDnN99XddFBWqcBn6vdiwniZvxb6ZitNRnEzJIKtRsrdQ9a8TCK2PS%2BBjqkAafjIvMup3mNZCOUpvU2C5VRE2FKXagw8YwyiPrpFT8kRtTgfbYoam0hfQbZC6VvbGb5V%2B01Y1xy9uB9vcAS1x17kZYEhiBTuzqtbjY8lYX%2BhAQJrIocy%2FtWnciox6kbQC1YbDkvKH%2FvHqTtfPu60U3VlMfKFVGVFD27C7%2BpXFglM2WZmiMOgtlN3avET7MV%2BAFJPBcEl3HjEmXjSJb%2FOsgwgwxH&X-Amz-Signature=1e9641a77410af3762b25482e093decb9668c4e20dc3efa3247b6b0afcd9fbe9&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
