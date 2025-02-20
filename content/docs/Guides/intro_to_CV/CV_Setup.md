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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUSD6F4Q%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCSWBvguI2Uek9Ao6ufIHbb70YntfewgA4VRNpmE3gCAIgFWwFtMSlMrm4aNL6BsEwSXSlzkwzfVjlEnYw60vowTkqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOFXjXw80RGRIpjQsCrcAwFBrn%2FP%2BZbHW%2FtVUn7hw4uRUw%2B8Iae1I%2Byvuf5kzqdJ6uV96txBgvKZZHrLYx58qqKzfTEF6YI8JPjxGzeeETsaVg7ZDPjlWfMDuVxU0K2c0lpPlJmxbHR7rTjUq20B1kHB4ojfU%2B1yDP1rEf%2BovJJ1Et5QQsN78OGMdZBwL%2BGuUFPH0xyHkvGnzfmF3IDN0ta1aF1c%2BgbO%2B9jWIJV5p%2FCflslh5I3%2FYKLmQrT5jUeGDX2zPBwavep9Gv5GcyC%2FVA6SiqclHOWtAuG7xp98Y%2F3k12a4q6zJUbzmN7VyYzva8y7onufvyzkK5j3Lax%2BwF64RHWX2bgLryfBgtc2oXSv9GpWylxaOGQUrM2o20CKz7mlZBZTGrSPsbWDt8gn8u3PloVGl%2BS%2F4Frx%2FE%2B4R1EFfAqyh6X1MhjMBYX%2BUqMHMge45QI24%2Fis9voI%2FUf1BnhCO3X87LNRyjC26PFumS85DKt8aZS%2FISxb6pFTiJ2yJ3JiOC%2BRHKG%2Bf5e0vgAYyOriTELj95KdnVloE88iXNBAu0HCD515TT6iAcJB43Pz7hK5V7wckkjZtuNOX0%2FL17kOMEFP67kgRFnMpe86Bfu8S6HQIgCOmzxe37JvsHAh4POOYiVvHnJC4bKbTMM3w3b0GOqUBTXQzLEBWRLXXy8bZMpNHCUl2i8%2FqZFSPI3wcevu6N299r228SyrwJi9lIxo1KGBDfERGvBQbloe3Ej4N7GvAHhtFQEXAMZBPYEf2oFjAgGc8vmJQwtKysgh87zBlvOlzGOFOnaAqYvfuPcJCDVr3iRNndwfSJQt9H%2BaglZqHlOU191kYPsGdjdS4HvRn1r7r5xcTVEmeC%2FonnyDsZhvf%2FjhZYytN&X-Amz-Signature=5ff65c89081fc88a6648c02319d57c8c2b3bd3f592718f591b99fb09e7b5a967&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMBYZVLY%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5DojB0F46Y9HeGP1SUvEiiotSSMKav1iPnk0QP35CUAiBsbB3PIJjnXn%2FD%2BrnHFm70HY9%2FxoxkB2tHhwIZFsfcVyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV3IdcalOgezoCa6pKtwDQTWVD1XKRVsmcn%2FR%2Bn%2FBLN8vaMbHDE4NrvrbUeI9fIcw2FSC1xF3gw8blKKO6rURjwJ3gNMA%2FOxUtD2%2BYBXjQ3bUuGmjnF0yu%2F1uO1kOzjm9lEUIFB%2BHxP32K%2FgspnNKZaaNOHnUHKkPBDRbHwCofr2XxaJcwCoYuoj0YVRq%2FgfcTIJKdaYs5x99vvf2qh2r135gbpU2Us48uOFiwCECxhFDX%2B0HM8J8VH1hmLWxVNoP6NUA1qB0gtD5ynA41TZwVDidTNPgZvawy4cE8MTAUSRerqret6Li5aRTMuMOlXUy7MKT1HOxAc9Iv1AYPjxUONo6eYHZkOaxnhe1rLuzMJ2aHH8B81p1FLcvk9nfPVMeSK%2FUkj2bcr6FkAHbgx%2B6oAIjIeBBLm3Fm1F3wXDcR34Uw3268UmM0i1LU4nSD%2F8rGuIybmia9a8U04zrTuOLHMHEhPbY9qSiFdAIVNGAVsQG42l4FO06pZFpgV8H64jncVOh7odYpBmChCO%2BcaR3OvUnYEvyL4s%2BKPEEzFufX4IglnSvdSb468%2B9Gikd5SPF%2FBFVUbBfbZt7iA2EXynNKSonrFvtB3oQ1tuFwXmQC3ilxf6OZqwHUwfeXlORPsP0mkrolRB52EQLyOwwsPHdvQY6pgF3nb8YfAq489I5J0PUuFs1SKg3pWhlvG%2BxUOpN5jPJ7weBrsoucM5JWcA%2BeH%2BuTNbC0b2B02%2BvM059KS%2BnAet1h6Bj7rBWaiFzSnhDHpF9b8xFaFnh9hWgxE%2Fj3NA8%2BzSZdgR%2B6uq141vviEH18bZzldF2J8gExSxQBAHrdQoqt%2BPiAYCt%2Fk4VR9IXW95y1eXj8DPzMRVaPk0BmclKgfqXIt38AShK&X-Amz-Signature=0c1c0e7b467a7e0722f82ce3173ae4107c388c62ce20adf0da519ebb605cc32e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
