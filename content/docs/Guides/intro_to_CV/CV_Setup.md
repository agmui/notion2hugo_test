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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I3ZJF72%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrASbYzHqqt0NEaP6vjo5udWc07GGb0z58kBmp2wp40AIhAOK6qqKav2K7zAapchgPLnV6En0ZgFXbcn4QUDfnvpn4KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSV%2FNcTNRl%2BnVo%2Ft8q3AMHyqRIWmdB8E9YY6omjdj2SpvR6Msy2yep1b5MbGnHKacN7sEDov%2BbnTpiSbMpBil0efy5t3UVecK1b2s%2B2HL0%2BRwuzidCk3bHL22SM2zsHXC3MuJGGNPcyS7GDB0ABGTign9ulNpH84wYaeyv8d%2FacLq0%2BJw9FHtKoYyN1jVg8dQ3CRpcrtzPvy72XGZfH%2Bv5iYIO0xasSidN5SIsgMOk2td%2FQLuIN3Laq3lovjNLGImyurTmDXjyEQcg3G%2F7o4SZvjjk7wMaBjZmtmYbcqIlAVcjSsQo%2F5O1vwcQDWdXKfvvPC56%2FXJVOFvdUSWhGobfBogVlLifP7uI08JcFUB9jYEUMg0UE7Zbz6%2BJghtsVcXhWvP5%2B0gWGB%2F4TjS57PuujBzH%2BdorrZBDlkGduWB0BL0002T2WWUKsi5ndKaq6bPPSwLR0vVZjA0E5ZUn79PUsGDg%2B04lAqh7Lbl%2FW96oOUnH7%2B2xQelOepqMmwkrQ7e9vO8QYTnQPigT6DqtlrIm7BEdK5Thu04PZmc7Brt3i4mopryp85d4utMrY1JjMSj5lj3hgRufFRKgqDH372WpfuTqU02zKSPPnkDANBZ%2FtHEcZj1aAbTPkw8xClQhj4OJJBW0DggAyPaDdTCosvq8BjqkAe3bttstnMK%2FOnySVahc1FhBQbkWal1SErG8UMKjNqAZiAxVoU7w%2BMnv7nRhCXBv%2F28NLFIBUl3jQhyOJ7zSKLpRPwatxrrraEMLa594oLmzf1TDZonpOfwWtb42hd8DRS5sCBLWO%2F33E4riW0TnZknWq2U1yU2DFlM3OX9Gsmk2BFYFJ5MrX42UkyQZY1mgu0rSyCJoPSL9E9beeihzrQwa5vVM&X-Amz-Signature=d5d11fc888092a83d5c98ddaea8fd579af14e6b6362f28b4f0a9e54db9d006b6&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AU3PYXF%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDXmQtXLOGFjYZvh4T7jQ2vbAlg%2FUJ7q43MbrXpt5w0AiEAmh8K9eoXSy32jIrkRoot9WzFuACa0R9P37SJZVUBcAwqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYjdllCz0tkO%2FbwICrcA%2F4Q1%2BVz6iBvdORgzvKX1NiPGKCiqiqnhQehOEauxabFMzcPMu1B5YdsOtnWeStFmLCpGM2vOIeeNGSnXzlrGJgvdqU48b6soO3A7wBbeOA1GaN%2FJgiIM5ikexfDwKKP7fCZIooMuoB775RnZD1tDgHK5d4R6EnL51hpZlU9kHnb014nHiVotOe8R3w6jZKdXA50Iu%2BYoI%2Bf8uUmSWzUi4PKz3AVO1ySurc%2B2vlVNjRNAPdtE5OAkqzgZcxubkTJXULqMYcTSSQKYoaA1y9oXZKVc9ITW9DGIKp9A0jismHvz9bnu5c4EvQAEp%2Bglqa%2Bq86ZIC5d%2BCJNlplb%2FLH%2B4uIodnBR3A1XC54YE%2FVHc9Z0MH8V929fcnLhiDUOZI%2B6ST5Ig1JZ2THuUrsLS8aGOgVtpcNKAane6YECUAp8Fd1EEd4zKHOPNF4x%2F6lgt537ifSNMhh6Len4DqFaWgTKHuS3nlgUnGF3LjPwpT%2BwMfoZJID2%2Fr0VhzOpixtUA2denA24HZ1x5gp9I83BcflEpriuN7aIadjlkDPBNz0WaLwbt9pHgfDvQOBnPw8pyF9nCvpd2Ql0QB460BxNDXRLo9vBQ6gfTWcIs8oGviegwgCzG2lm0nP6nCKCwstWMPCy%2BrwGOqUBzFuzjszRh0BsiWPGTkgNYTzbcku0UJi1zTP9%2BrJLR%2BOxh9u%2F7uTEuQ%2FsOW7UPeQ4w61%2BCBpoi%2BPYG4pu1TiOASsOoUDqQIfEGTTNR3Y224fMLIfHekqe1RuK6oeBHUgEWWU9L7lEYvLTQ%2BdZnafoOh1SA9EcEsoY6LDyp9c0zeURmSIv%2FiJj9qkcaXFXHpzH6svFDpZFB2%2Bc36Av9%2FDGnYYN0rFX&X-Amz-Signature=db4cc0f32a919ecefa21baa236d211e02ca6f67a2f5d74c54858c0c83f571df6&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
