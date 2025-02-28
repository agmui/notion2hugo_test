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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFUXXOV%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDaq4QWgnHcKhx5GnCitM8TqJa6KsANAp1iXLZmpBXT%2FgIhAKSFXUJ2HvmPpRemHJAr6i5vjUe0LNbXmU29r%2BulGWGhKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyWwaaUVypAeD6byYq3ANUAoMwyG%2BFDHUqrVKceQ0IAHjCwnG0T52liZ%2FOhGoVNtnygC5YoTVmyH06tpP%2F7E29sxPgou2qgqePCCOaIYLfMX0bgTmj5773rQgUsxE1suKZpEfRo8glhfLxl56o06yPpbgXL%2FsrA68DCRgwnjQ2rOx1DTFXdlkXQSkGm0AzCOK8ZEt%2B89baRyTmdV65Z%2FAXVec%2BQVezWJx%2FgmHxF8Op4qztJybMfFR69WJu72TDPh0V3%2BNKjiAJgHOgJzaKyiKzgmr%2BFw4E%2Birmlch3t4iBs7kaxZKyXNTapCLSoIQWNMl5Z4wGw3IcGJrQ2AjvLDUzSRiL5jCl3NOI33%2Beb%2BQq3%2FZfLY%2B%2BIhUDFgT5%2B6MBQsGMhcg2sQ0CeoQ8ljR2O5iR3JurW0lZIOUSecd6ZYenXvDIKBy3%2FyGIUvo5Ob%2Bw07DnMK5ZZRQfYoZ59oLlGUh2Bpwrpzl3eCqqL8aNMQ61AWF6SNSNUqLCUO%2FT1b2xEau2QO5aKuI%2F8FbYoxVZW8yUca7TCzne7kgeXayqTgzyPoEgvSgc1rdwF2Vq3AXe0YMYsGgEvpZ7Dg6U%2FYwXe9CCn%2BTfBQrqgNruj41GhJ24Fs9TMzLqQhqzXVOXDVa9jjQi7ab8Ss7a3cgrqzCEk4a%2BBjqkAYkmqe6vHqXs6P8bSBHHhCjiyQ2kklIvtVGSqaBjEzYEBkV5Xk4o68nkw9o0gn71aQ5VuSmpCswNibWHHSga5deBMJZMyYf1Uxz2xcSozLn8b0Rwsc5%2FU%2BuX%2BfOQIO%2BsdvHELsjUiKKPbKAzTm2s2a5%2BOJzDZNoTGULtTfLyO8pWITWI0PfS69RbokKnA3YD8Cl9bbHzcgD2eREN8DbfkkoKFFWS&X-Amz-Signature=d85426467eaa43a2e491ce8a425e42c028213988a299e23182cec4abb51c5c00&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UATFOWTC%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIEW4quMOJbnqo2H7YktOSHDG1dJqmSNCZhSGc8UqrtxTAiEA6aNgHbIYm7k3UTQH4PwkB7zTbgxRydwwq%2B18Z4E03jIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM44qXqeDYszKCqHCircAxQITFyCatLeHr746Y5Y5rO%2F8nBpV54XmMPHbuuE9WmCRpqqAMXgQZaAg47h9prxvxQMC38Sxo3q9qtaa4hL3OEPVp7ApuVodLOq1dfKP4RhgVRo5Bc4w2fgKZ4yJK0HDVv8VFdWRhRWET6Z0PLXtEmmO8z66NOxv%2BKlH8VPLmlA75kkS6qsErR%2B3gLZo5HDlhpV4Iz%2FO1PC22woiEOFCf%2BSDIRBG7qTaChesOroSxn8nX9gwIijbe3%2FR1h1eZDMz7wsBv%2FsA6OOVl5AbLWyghLXgS9SlovaTd%2FEKlV2AVXHscY%2BNl3ziwHWiwW%2Bos6zosRRGYO3UTYtWCRltt6W4HZCQiBsuXnjiTPtnTeE5%2FE4Cr9an9Viflm0fdi0QNmMgKP6V1C8W%2Fqudc3Hx%2Bm0aVIZx6rQpIq8tYluUjpRihQQfbHlgBkYc4QkZPVpcdLWXs%2FmD%2BJi3JJ53Ti3PoyRICUBtN0o1mtgasZMkCpoLHsJ8eNWO3%2FcHHxN3vNQOQCyjtynHVirHJPUTpZVxHmtOsPAvxyb%2FiWBDM73YlmnnGS%2FJdsk3uVPZ4PFYuaZzR63iSR0KDU%2FAttaf1MuofsZhu7OXSG%2FhlK8YDYXiUdzTdtmV%2B8L997Aci5L0iVCMPuShr4GOqUBqYfUFPfs8GGXutkkr%2F44nRX%2BYVYh3O3ADbXA2a85uA1irEWqJm7nS0Ij%2F1ymjyPwWRf9fKGZkkjsEvFUf57sIsljGJ2ALVAmSYAWboy2FL7vWArqLQm%2Bxizg9n9%2Ff%2B1rE9d27AyXfm8Yud2iaPHQbGHB3%2BRaZOTb1Oheeg5IWmZk1CIOTgRHVvSU0%2Bj3Tz5TuNPoXNmGo2hG%2FV3xbZpFTCcWjZFe&X-Amz-Signature=e29f7802525ad6f1ed402201cbcf82ccd1d9b6daf897332b5f36d83a647b48f7&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
