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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EZQ7OFS%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIGTzsP178d8oL0BIbBcFD7xPEbbH7dTp8AtrAKm7US8nAiEAyBDT5ojqn7NJeG7tPPl%2F6iYiBkk5zQrHSqR8qBaMBIcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNVvtAxE4yyrn8GiIyrcAxhXSLCqbelv9%2BEPuXKnJXkLsFc3jBrAzjiW4UDgurU2n%2BH5HxQZ%2FUsr8zitesNN9ZvogQ5JIxbpJBaLlO00o0olb9Ic5vu8gdkHtStPpeuCWO5rDQMCfTnhKGVZKH2dRW9cM7706dGgtgq7BS5H7kYEzcuHqduWfyRwLVRDIyOnGSiv3lCIfCQF6WfELnhBNCTzUJzJcPGQ5VIClXFtHjWTCpoWT0l31KCBRJ5jL6CWwhu%2FNm6vNgQAlMuh%2FH4VzBzwp4IqrVX%2FYMYbrMjHPilwF6AcJZHlL1ymWfBbQpNszLhsyt%2FxoalaJP1krqg%2BN1PtOb8j9yKG1RcT%2FRnSNrkfju6nyO1ctindls%2BXvRp%2BvQazMhyY6qFSp%2FL4HFY5pvJTe5HhZlEdi8WsEsAofCzi%2FK16%2FM%2Brn6Xehl5%2FWBUElY3sUE72ev0cRZNShpaPoVA3GYiyJWMzQ7K%2FJWBnYgaDBfi4M7LcOjyPPVCF1yoxBR6Dx3cBXkqSBlLj66NVDjQiGjyQbDo6HIOD6RnUKu%2BPz6JBkWz2%2FVv2BK6jLRcnOWQcsAF6fIIPN%2BJMLQBDPVtN42QlUDeIKkBwV1Gv6cM8A5pKQ%2BCWYDVkQf3NzUEnSYsonAU0t2xdrqHjMJfy178GOqUB0VmgEUxUY3BKo6syBD2EOKyhq%2Bze48KwgKu1WKVfSIgu40PVdbmhy3usUUYX8qwYzYy7kMkZ%2Bwsizo26fkblMB15unOTUVtWTJMGvNcJWqa26fzFMuRYq%2FMrQFEo22ncVS2rrcHNSh3XFhzRxdEEFY19oncaz1tWljeMSrsMZWclUpQTvYU5EEKw8igDdCBf0YOOhDC9Qs1VC97gikxnCURfasqv&X-Amz-Signature=fd00f3d034292ef32c23acb4b01ff4a1b02a69884c81192fe83c32838fb1aee4&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE3CY55W%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCKShCY1kTWShuQvzVV3KGKaeZu%2B9RKFJbp0bv27uCiQgIgSPi7vZSmVBcDl%2BuETFho8%2FwJBtpL1v2qUXTB%2BwfBUykqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAVv4BHLrscphPjLSrcA97yNl2IKLh%2Fdl5uPLp12vqnfHj1FwnYwv832w4Y3iF2jW2%2FaKd8jv6GhOzjVldW3rHwvlaQRJyUttSdoxZmwlT7xJ%2F2XNr3NLg2BNsbq2ykb6zL7RU4V0srvOFWn2bDzGNY2WatiPKNu5%2BgOLZucoFOD1ze2wlXHhjhAl9NDpBVit1Zo0wxTJwC%2F4zcXimKJFXDUnlBbqoLJKds3spVRduj%2BS9vTWhI3Ew4cYyG3YtcoeQlPE9AwOn537WAQStXjfKd6QeBJbgTs8BIKGk2gfYjuIDL4PGvhzDAzTFWVJZOa%2BPWCyWy4mqeWyoemwchMlBdRCcqokHfZjYix1X0Ov9DR1%2BOdBwvg0cVV6ttuTIIWjV5260dA%2F087YN12HNB3ucoLyDROOLlrcfSoVIzkszjrTNYV9QdJZ%2FKhGoGKRcFJ8NbMBn7k2%2F0EeLjK8SEOs1cc6UsJCGV%2Bxq0rkbUae8jiKVjmFTTWPN%2FL1hZmX6QRZwOsAWbrv5Bhy9N7L9GWjvrBT2KG%2FkS1AmnfP82%2FfDhX1bvnBWkoIlNcUPhdhyJ0LMfJZy7WthRa2wnN0GF7zUDeOFBJdMxeKZt0CKFO8c74inj4llWfb6PAYZo%2FXTEL%2BzIYlIZyL8hLeM%2FMJHy178GOqUBMvm1%2BMQ9a09px1g8FhP8CzJ9BvBG%2BAbNL6G8uHaH2hEKlkYeMmB7QBEoAfl%2BYW8YTWRKccLAyPez6CXtjCFdyNfvPArb8%2FsqkisGZm1OgrNuQaKXpGiLwMZPYBGZA%2Ff0l7ez8JWGK8HofVN3z1ogg4ja%2FaQAikVLugtPyfn%2B6%2ByBmQZ5KR%2BatkyJXgnweJzxP9jQsqMNhdeZmzhnUlVx8YnDQUWL&X-Amz-Signature=396146af9ef93a5760597269639dcd0724b3bfcb0c7ed509622ee3a76f47b097&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
