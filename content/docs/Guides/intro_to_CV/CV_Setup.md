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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TGSESOW%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCaPz695Qodi7%2BrVKccIAGdDjRIOz0i2lcgAGHPX%2FtqRAIgQSKr1XVX62mVFZVlppf%2FAL5Xl7CaIi%2B5%2F0atxOlC6Ikq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKD4x%2F%2FWYVKFecxvBCrcA2dZgD4kbmrA9dWEL7PxpgKwNrTSzuvrgyR7dX7mcvLqYuVLtfX2GYbTmF2hqTgunRMGOD0rkhM8fm6p3myvNdyrk4iKTf8Gxb5WEKztYpzFUYqBv3C8beRcG22tn8FVqTEAAY0m6PTG0XAyXWkUtkblMhmeRCDFmwAOOVRFDJgU1C40JNds%2BrYWZHJhS2DCNL8sLGjcbF6AUjRXYRklNUVHDJjTNRGFeIephWVMQVZ4cF86j4VwU5AmrgRwGo4DV%2BR1JPmlbRatE9LHheSQMEaAWcuGYfZ%2BONIq69lvmxB%2FApZ9t4nGyoba7rUcxqY5MnHZehr8EoXcABInMxM%2B%2FcmgvPOfIqmAO3TQWQ7H2nH%2Ft%2B%2B2OGG1yc6bQ12h0okMvH0EKO57CXDbB%2B%2BfnSM0cW5cNiQJ9fCCiwrzjWW4azDGRO%2FDx8PVX3WmFYeEdDyuSaqzgL22o%2BHgupDGibwFw2p%2B%2FOJO0bdqo9%2BjmKNC5drGbmKBVlyHQ5arYqm02JugRGsV%2FkwswnGnMExeV0uOpa2SihlJk9Id3hTnGrnnLy8YdhPBQag%2FHawuHP6uuEBL48ePcCYVW16wU8D0fpsVLyzOcdhY4aHplqf0c55nzCj8H3Uh5MSKgUPQZVudMJz%2FuMIGOqUB%2Fec5IFUGMSsrhcC6FTr0w3Jj7yiHQrjUrTrCyx9001gn2o6Kg1nQL6KCz4bazs3smPbNWtjYrG1z4UFSRRfRtJEOAga7ygQ0yONJWE%2FSCJpTiSzBGdWqL9WIgYcqk%2Fij7%2F68JWt5nUqaEEoJx9uEUW%2BBPrXOVSsX7XKGU3lZNqAiWB6JVVGNeYNajnWFUWls4SD2iYhGYyk4SlAJPUDQsEnkzisj&X-Amz-Signature=23fd53b28eeb55c2b9737c936235fda69cb0b592392a5a4edd27a6c50913a443&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4V4HVSF%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFq3dXHsb13qNTUgP8zBR6uTw%2BZtiKYSB3D10i3wpKqrAiBJpgRxZNI6Hq%2BtsTzUdmccDcmxyysjYV5p0NUKxoRUbCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMV2sZAWpghUwP%2B32NKtwDIs5yBzCJJAZJ6FwxsgA98cJ3NP%2Fagim7DnXWJKn969dGIJNKJLAb3WaUzklu3dcWxKK1uKFGL9c8eq6vAwhmL2bcXPzVqH1IcEYoAfQ5zPdWqTh8S3%2BWwKaRLHnngWpn3W8ulXn3cXyzAlsa0T3ylmcVnWz4ksyAMbJGG7JAKH4sGPkfq5EjeCFzT8U%2Fvkwihvj6m4EZXdmY1Y%2FeU4RHLDm2quIXayT%2FNmgk0DyXGhXCOV%2BWlZK%2FrobIxnxXShWQexYKquoaHmMitvbnRUnuX%2FceWcSPcigsMmZ63fPfr%2FScLyzljhNnLR7q3ua3bx5g%2ByIKv9duj9GVAqZWLusAwuisja9o5Tf%2FOPar%2BgFUcp86Chxx9RiWW7Av3I4HY1zxFZ7qnD9WAF4FsnFTKpk3Fs80wMFBzTH%2Bv3jJBY2NKU2CLTQm9UrYFaMGMvRNGDKSBWF5f0B1lPyzUeyl9NHJenBvVtKBFwdPtHeodX9hZehH3Liuv%2FBf2PSRB2PNha%2FT3NpWMdKj%2FA26iqTAD%2FkeQAEx73cnsmcfoD20KfrLqsFeh7jGvJHRpR8yNXbXcBAz5BX9C7vWXfmGDrKAsZSVUn6%2Frm1xhJZnVgq0%2FDgPKSc4JZ0gSN1vsG63z9Qwi%2F%2B4wgY6pgGg2gj0%2FY7UmgAl2T1S0Cf%2F55GPM38r9lwCBAakgqSzQBllxcJau5ol3hW%2FDHASexaQZ1oR4RUx9lnxQYj950tWk1YkhKNW1oKsttc%2FwWdA%2BghjG4IFIbUn62waz3Ug%2FXC3f2N0I1IKfWA2y2M3Dp0j%2F6r6PCO9OlWTgqej6T92OXm1gjUK%2Fqq8TEBCs2FpcSHDqlKJVxY%2Fz7IBbPMt%2F2BHGH8U%2F5kf&X-Amz-Signature=9c0b2d2df09097cd346b4733bfd22d395340fed0e5ee60f25972447949ddb00f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
