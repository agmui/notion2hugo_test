---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-19T10:24:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-19T10:24:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 171
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOTOHKLK%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD27RPc48bOUS93qdTz%2BxVDF5P8L36ZrAyHGrxwczTh4wIhAIclSYnO%2BuXiLkLV1DnuxRTkIimOnG28qO4VagUznHHSKv8DCEMQABoMNjM3NDIzMTgzODA1IgwZW10HcgJ21ob6YhUq3ANtT8I6p81M4bGFag8g5Xi%2BWD0QSTcImzla038vaJYfAwqTUPo%2BBQUkIfzqUllBDefTQFnTF58itps2GTfF73rxCtn7uoJA84GkS3zwdv%2BSGepK9qrnC8bfZjyH6HtMh26puS0NDPJIH9SnOVFd%2F8i7kNT%2BAht1DbBDsu66XrV3WfAXDO235fLp2iFojQvc9A26Vu8Dt4GTMZ2fgT3pHkAfFdkEQ%2BD8PXNJOQBvy3l9jF0KcOVDxPbCdnS8TVyc2zqwqIF%2FlBrejtMDx7H8ZrswpW6dNMKAYlEaGUEMS3TixktQau%2FzIwCtJCgwjAmqXP5Ed%2B3Lj2EMLUWO8ASPaED%2FPrqH0mxgJIFPx2FQuEDqK0WFNBs8JRGM8y423eSra6U61wd%2B4O2V2JbqhJVvZYdJRXwN3LkRCgyY%2Fd2zKBU6sjp1IB8Q%2FOai2TEKzeH9mpJdQ4kEjgGOEvw3BjQyDO7%2BmLOrx%2B9dEtWbcDDOFMro9q2rXiPnxq2v%2BrAfkzR3MUVegCn112jdI%2FLfzCyrj8E8Jz162i1LV%2F0PzgV%2B%2BWM6r8UDA9wra9PmaqPlMm4ESJn8Ls2EUZjIAi1TEpYTNHNb2eDcBhY%2FHonhgsMcd8l4pqPpiE82QLNt2dm4LDC%2Fl8%2FMBjqkAWHbRWWu2nImukZKQSqgqLJqcUbD0LmgnprUeoy2OuNeFon1fPOt4GpkFBZ%2F0NGSGPzX7mwMqkfpuUpkkjQJc037%2FSBZ6tM2%2B40cTAI%2FQsPQXfK4AXAzXxAshKJ5RxmruCjd6axmmfwjHDBTwtLlyz2hvF4pHKvXagQA1O5c2IE8s40OggUWXP3or9W6Y%2FDRDQi3uncl82FTQDXB%2BDTadVsc%2BGi%2F&X-Amz-Signature=feb03d29b17cdc1488363f780a7d925730107323e2577a6f63397947799ae4ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEZQC6XQ%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDa61NynIsOMTO4aOsxkwVdqBCehBhqkOuOQ2nY1VeJxAIgU6DHGfl5%2BW8TE%2FCaP067WHOlXIr%2BBDIS%2F9XLHrY1yw0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDBbsFjKIzMwdZmkltSrcA12dJdjePQIYPxneo%2F6n4HITHveIe4HNvD4Qx0NwMQbgksrpvqItDXnAUkmvPVqxC%2BEOxNfdLituFLcH2KHKtKh04ObAM0FmVlHNu9r%2BIkc2q%2Bf%2FIsnaqedhSD8c%2Bfe8kqPpP1w47ueZ%2BEPUhK7eyrUFZUZybcCnNTvnOQzOtQckqAnzDWzYtNPHyJe84fYsoylKNjy0A22UCxwnp%2Bo%2FIiRM1n%2B2cAhrZTNNMz1YjAUhvKeuWaZY%2FnOHvI3H8uLNAkxiPqutpnQE1bFVAKwvznbHYNEoUVJdvcri%2Bv44OZJ6sYR5TO9f6lEQJp8f%2FNl3DtvnmO756T314CtZF8N4YUy%2BGVXHJpnn2xFg9qHD8YfYJHcybijzjzHbyKeRk4Tm0pcPgTU5Jbqm51zkGdgu0KUBo5tsRrbEXfKrddFu48maYm5F5aFHUlTeMzutIJ6TXqdlbjFwJAVh5fghCE8hHIXzarWrdNFSNSQnlLxDR42lQKaE8sGDnjVutk2USfBPhNP74PYxqxCF7o6jij23CJFqWDnqQ9W4q3xy%2FUgS%2BhQH52wnmC2jzgaUeX3%2BvOoiUCjJ3W942tPOOZVKIcUWyO7UH99TSQU09rFa71Enh%2BPDgTIZVTJWyZ%2BQyfbPMMmXz8wGOqUBglk8CCneb5HOJ26WanooO8yxuavq%2FK1VYGzDSWdc4%2F6KpIhnrJV1lFtzdtk50fdxlYjW7wzNGwuRPgv0VfZq1Ha9hFGnx4RUrR%2FokVCID3zaigU7fvWWpv3UlegcqbELdrUnpDVRiluJDrUFrJrSCcEhFTfgWty0UN94WFqFzaW4nSA51Wp%2BvsIn3epU6Q4xRXUp51hs8eTpVYb33jbojPEP8GP7&X-Amz-Signature=1ac9dab957039094972024a27b965bbbdff56c9ee470312fa15a59ea1fd6ee4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
