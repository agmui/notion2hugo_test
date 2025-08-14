---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-14T09:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-14T09:43:00.000Z"
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

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PSPQJE5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIH51PsrN30RoWqTop9mfMJuqMbS2DaNz8ac2ZWrQzXu%2BAiEAz%2B6h%2FZl3aGBgbBtdcdUXLZz9bRlJHXTRbPCV1zo88zAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDPpZJeukKeAYSvSpSrcAzKKtZdnPsdh9XaWayR0rAwNXXZvKnr54k1nepI1CuwRDYsiSpa5lnE2gGz2MvubsjrNFleIXY70j76Hq0BJOlXloa066Kh42O%2BCxdildbdfHoIlEFqN%2F%2BiV53ecIMLrXkK%2F8UQvDgD8MN0NojCyd8D4YolG%2BeNSdR21oxC3ftok4IOPlFLL%2BogRz8rGuUup0w%2BeXfWXSQdSsguPuHKzuONpPPexxRsXFNeXmtoKxBs%2BImlPJbTqYqikSHEbMGDu1yxVKJ3Tt7u7sIpIUezbFVykgvGNdF5OjwUfHXHryACPEutc0GTTqGmn7nyti%2BgAaSNd7ggMBXq%2F9TpYObjMxisMrqKcD2iJykTMjH1bOwcCwo%2FwkjclNevF6H9D8fYJN89adUVEAJ7Q1rQOJ%2FRs38GriS%2FvKFUgRJ5kE8qsv4JNsL9C06zT4j9hTw4ZTPxK9%2B1cTT8CH9rS%2B0Z1Kkv4joFu3K4x57q1%2FadnEm0Ra%2FpJReM47VLbxAykWVRfDQBj5CUmmlLTVC0GN5CV4Hkaxb1PZlxT6n4Acjnwz1vU7FeGkZEQjTnfXUcNSLUXBECyHiWm9ciWvuZ6DODYG2vhkjiz8hTqFiptxKmPdma329ydyRSjlNzjAsjSn0yWMJCN%2BcQGOqUBLTxfkn%2FjVp1sL4GgQXoTwcKbZ9H%2Bga139skpusAwAQko4vJaopnN0ilXwy6NfBPiXw21LuGPpd8sb9sK%2BS2o6AJqsKCG8nmtxrxuYhr6lzRFA%2FaHKwnRY0MKVxuc592SmLYUG7Mc7oCSzLdz2Ff%2B%2Fq1LTgJB4ANw3O72e%2FtrlJZ1taCZXua9SPZ4yrfllfOD9qVUifapU588%2BfMCiDRF45Vt71hz&X-Amz-Signature=147b1b716c3a83977297f7002d8cd937d92b0ed3f2e0fbf5c6bd7f1b651639e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7K2ZJTO%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIH2HhgvFHDy2BDaM5xN90AzmfiD%2FGS6ER7kRaucz2CtSAiAgt%2Ftdpu1iWCQRqBfJ5YeAl2fNEDxsVxGRJfUlbmPvWir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMnqSNQecWUfYPALPoKtwDIYeMBsKdRv4R73pwAT0xSg7sLdWZ6ZwxHFFw3lv%2BqJkWYRI5iTe%2BKtoEDYyFXXqpdGQYojjsSY30E%2FAI6Yx2%2FOieySycO2V2uXbSp6Igs9%2BQ7EnbAQwKn5%2BPe9ym1NY1VUL68dX%2ByS4s5upQeSeL5bwh0QydtmWha8TAx5IUeGgS1KMpI8VdFOSThpmiReJLoF2CeqHNl9TX0sRkle6bqoMxhHvRaFCLZtP0aapRY1qrkCP9%2B0hPVTx65GJ5BLxbbKyBEuezD0ooG9Rgx9egLybw%2FriE6iCb6gDjXgRIr6ClD6ZpErtx1VEpzCycbuxQdRd4lXIWe0SOXfDjeWPHUiznDfjwYkl4RfyOT9bwbOpI%2BzMe%2BYORMEzf2ymex1SiqOcRoMhjxFiRwCbopQkAfPZxZHDp0AZPTwreGtjULTdaIkXREBCy12nuIidrXbypdzPIZruAUw2W1Uq5Cw0uZuTOsRW%2FduEKAki0xXt%2F%2FsTNEzISzNp2TifweKsiV8nIIw%2FrQiq0xYV31Zfa6FCt%2FaQKOWjEcOn6MHsxtrgYNoQ5Cx4KoEbJe4MPeGNv5lROHsovHBk%2BtdhqG2ipYOyh%2F2nGWjhxANALNvwZi0REWcAutyHryAGiiaQ8AzUwoo35xAY6pgH%2FomgM0%2F5Y4%2BNcsSRIkIpKateui%2FC3rRPGWChsw%2B2RKroCZrN3mcrwdXmXDhEbtVFUuWns%2F%2BkT9pqxK59maoOavn8IwtJA8MLJeYIPajeRBn6dT2LPoovbOPIa7XV5ETKvDG%2B1rs9vEW0VMUUMejD%2BSJXvc2kY1Eh63ibOztJuYAR1vZRMPuCYgjA0qygGb8pVl%2F4E4RZfSym3BR6VpzHtjT0CWJsW&X-Amz-Signature=e6f9896cb04eba24906ffb5e597aa418ab601d05cf239b6ecf769fa0d14ef81d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
