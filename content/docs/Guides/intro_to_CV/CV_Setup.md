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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7P4TIV7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCRjyg1VUi7U7xYpCirg9IoI1XM0O5cyZOteZqrHDH1PAIhAKCymN%2F%2FGFpn%2FHsrhTI3Ry0nzNIdEYyOgZIuaHsJT0O3KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKiWx0J031sSg01Sgq3ANs3O1NHDsclDjyAO69MkQ0nM1aLKyszSuNAh9tx3gDPH3F51BQDwR%2FZDKm4k32SOHLlFs5S1G5JgWPFjQtvFA2MdUpr2SSjlUGwghAs9HWa%2BAHXYX1CyB8koY6CC3tECEQvDJsnG9nJII6U9jI%2F3t2%2FoaiayD43%2BPb6SA9einomWa7SFS7lqUCCIxx5TaEddJExgwwMP4amO1g3d2TFpq0afJuYVa38D%2B9puJ5SgFYPU%2B3ps%2FXHizOb2XXiajuyk42pUBmzb%2BWbnNznZMPuS2eKF52va9elaZcV5OC8wLZGF1SDOajd86hxoC%2BhLCNPU7%2B0VSYByCwEDFut%2Ba9TYdX7xIAB8BOAzLdicEKED1aT4daeiK9IAgfvJUS87pXuNeC1hjwJT8Vrj3fhWUDEiT1V6rH7zMvbZD0Ew6e1jcgTvc8Yh%2FmeqEvf6c8f%2BJZ6qNq90VDrLMH652oqrPTpq0Q56hD26ygaQQlC2vUqdAF5GfenciLR%2B5flR1ILMed0bCdTl8CtLoaE6SwntosdTuLBmuQiuya1JPknzyLuY5OR1MgknIBrqhoNtAdNWDPXwTDycJXyTL0Wi97ILsN6oAqp6BSTJYOO%2FC8F6h%2BVmixPFA60V6TiNLgrJAT6zDqxpzEBjqkAWp%2FWAq1zylx1w%2BE4FqS5iCgl4GSOwCiC94NY0J2YZLUZtaa9P4iJrY5J1pHZiBmtKoyChFEOXUHuytmUDy5lDOG%2BJpbMdG4CTEzV%2BcR9qR2ggtWUCWvA3A7TueP5vQISX%2BVPFWn1qmfCz%2F%2BeTjZNERd2%2BF1zWXGvy22aPcR3qKRqnPTG1CC7AxKdAqvt3Bw2s2mfqmWUWirNITjd6rD8fEGZkvx&X-Amz-Signature=f0cdc3f4d7a4ffac2c87988fa7de8ea6cf89156e28491bc20032daf9bd9d282e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGYJO5CH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDo7JDX%2BZmyM%2Bo2oO%2F0iB9qefgy6MR0viFm5BqtJDtC%2FgIhAK2S65dfAqXe9frj1lA6TOiawaZYCv9vmQ62xwOVK3yUKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1VGrZ0YiaaXuJ88kq3AOAIvnygsDzw%2F6sRPD2ZBZgBbGnJqJ0tqIz0A04dJ%2BlhhH6wJpjzbHWUYFyNi57hFI1xP3XOvf3Sk0YxZgWlJfkSIOfQB2zFKrL1o8Y%2B9o5A48U8759ZcgM2lZd9kEFgvB84BOmnsOW3TbemF%2Bd1C61yDIm%2Bwyk%2FPjFhpKgByH0AWm9l4a5EPYtXYT9vNaYKSnze%2Fbo7CcEWBcrPG42yO9PKS2F8z%2FRewxuv2bxK0m0UV%2FQAQkSDXxpSjgRirt7nyLy3GqtsYuwNud0WSY4hbCW%2FjPakGA3UvOPkxB4pW0e%2BJUAbWbKRtOanAhWu69NHRcWZ8XvdPhrjvAxwyCFCMIX3j%2FwQESfeOIR4F5TwyKyJQkgoSKQzrWtMrlK5tAwLj3up9B35UhvHoik9471g4FqtbGcJOx48sJ7cgubjflDxUVBoY%2F00YNz34Dn6E3B6nOdCFUxmy%2FZo%2F1ndTrvj%2B7XbaHGh8DCzAtMSx5vheFzPrc%2Bw4OiE5McflcraM5fqPs81%2FBU9j53%2FgMmqFtGIzy8HiDpDOIm2464ZyGdDUzsQYgTiwAMUVmnoMzvdE%2Byof1ojnDp47EavvXekgt6811NbP%2Bbmvt%2Bjr0ozEoqVHT52Zwrt1YSOHsHOPB4bjC1x5zEBjqkAbnDyiv0ZXJyZktvhAJAuulPxBmxDLjCevulOO7UNOLJ1%2Bzf1blpUE%2Bb5%2Fj6DS%2FDaQ%2Fxnqo1yuQ9fJcfqpFMKqHfrEnUN98dsjkLsBMS%2Fxz05tJOTjk%2BQMyPl%2BPo5TvCq25oeTHSwwKTOlTI1TpC3qp75izTrus4LkDO72z9XJQREZayusgbqnsROIozbbRjLupFlvQ6Ek1H1lITPSfgFsTT3Fnn&X-Amz-Signature=70bf55139dadce5b5534fa0162c7f49126529f00cf666e484ad442dad428f67e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
