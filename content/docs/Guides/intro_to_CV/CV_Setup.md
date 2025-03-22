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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4HGB7OE%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDWkCO3WCb%2Biua6Bie%2BGDFVBMqdX83WCr6xMJW%2FoHZ2ggIgbLprORSuFEMiWG9nIGH0d1ht3lPP5vRtIOTPCqjXj10qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuW27ckzaVIzgZWOSrcA60uYsGWYZGP49STeewQQMelCTWqW6DK2gEoLMDsWA3pjsl2qBfW09QY%2FkQB5sopoh4b%2FNYirGE06xdk%2FQiCPq67z1k49%2B9e16vLXmeoMHmNh3flVmaZzvAHHwv2Yojk6PhPBZJDWwHyBz2lz%2FLjTjEgZPIzBiXKTSA6u2FJ%2FzqePjF24dRgr40X7ao0aQKmsZojg%2BJl7LULOXwPkmJF2XUxOwTIfd6i9VG%2F4zhnkjWvzrWwtAZ8ci3bIbBfHfZvu77fBa%2F4POalfSZAaVaAIj5xmawJQok7SxKfJosGybYdxAJghgMmeXt9ukXssG2znGzJQkX7GKMWq3JfmL1%2Bbn9XZWoW%2BiI32JEVMEAAcA7AuXqS7ppMqiocrRn4EawXXCNd%2FXPVHf6gM9%2FF7ppywfQ70Rdyr%2BMl8OhLHKWspugmZpncmtcYoUQJ1BP3leKWms%2FBzMt1evSnO7rHbOoXZ8I3phWIcyQH%2BrnJ4TEh4jtuKIIychkztXcdm3xrDJKP6KvUERebn6Ake0vxIT0PrisrIaqH0KZ5hM2iGV9d6x4HQzLrjdB8jCUzU04KbtMIulx%2B93Cf%2BBT7FVs2SwX7ll9aHJZ62YFDZCaImopUGiDPrrLFbDj88fpzSvhdMLv3974GOqUBQRpqzb%2BOy3dN2qnfUs5cGZtbN1rsFr56sq0n%2BkBLKYi47vZuVlhbkHDVelBP6n7g%2BtzEQG0MMC2IvgcY6aRg7zXuprzvsKkSVIA9diP6294WYFe1SMMfjFbiamNday4lyzvXlVe6Wsie2aq1c2%2BG3KamsafAPZpMAGkpH7kQn4c5kj3Q2ATw%2FO1fGOPJGvPJQFSzVyj5AV%2Bo%2B%2B7DiC3fbk8bCLJB&X-Amz-Signature=c70a4e47d73adcabca1038e47df15f77782935302a696c121e3705618c66a594&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULVVHQRD%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIDso3aGxBZ1oaPcSPHVrzMLjpU3XV3Z16c7Y4axvVyyFAiBAhHSMpmLVHUHXoMQFshYC%2BQn8zxwy%2FBCtXnSN4rdJlCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9JwGq8%2FWPYi3iHUsKtwDj8dpY3T5jVEBzcCa9u9h6WhKBc76CPBJ%2BYMUGfh80nr7CIXj0XZ7XhmufxbjwchKJNUqL4AvWsCrd%2BhBiHCnP6vrBykBVfk9F9z5G7u1Y8yDHO6hwWDWP7PjE%2B8o1Z6JWlZPJbi8aETfESzTfLMpzzVwbXxts9a7h52qNfQyFTJPipi9bDYSxHdM%2BqV30FMlr48ycMlIv%2Ff0Sf%2F%2ByDAWoMsJ5XhBe9rzRg1wASzFjI%2B5TJO5re6Gqb8xlWKKBBHfPOUIhKMPt%2Bsf%2BcNfCodlzPQMddUd22uXR%2B4uTl3fVaCG7vpbYGtzSYNlKyYjmaXJ4OG8fSeJNwFpg9kUQbrxM2WNv0vpMplk4qA4921eqVyCPqQA0g1zcgHY6HWur4cf8SB5%2FBCQDfT2ffGVG54D1Mo1bBNA1ji9UCW6v2w1%2F29%2FDqHqY2al4PPH3wEf3ercHZL1WX4WqKaoVOtHlB9yusihdculLy4eX7HFT2BiODNCKHvQkAMn%2Fjz7iRbBN883VcQ%2BxAftDz8KA6syPGMA02LfY0GodhPOrONnJj8t3HtSli37aBJeS8oPnKv%2FtFXACUD4osjJwdKYDCLQa02bPVd5AQbX2Ce98ssxFOkNJZUvr8KGG4JKLm1%2BHZgwuvf3vgY6pgH0oITY%2Brh8Pv09r03ul3tE9wLINJpLutrT0bz2I72f3WNcpBZP2adYditfURy1zKLdADh%2BSHLR%2B6he4SIqoCQSIENpguXssvfoDEO4ntMlGpeP9ZykDpmAbZmF9xqHuXg10dfu2ikZ8gnywzVM4sNHraQ9DFgCVPUJ2%2FG9e0LegG9lwRXY9fxoLwfzxYLlVciRDVodGLYGdPuN74fFnGNf0JwO2UBB&X-Amz-Signature=12a2b637ab45936262ceb584c3ec0c5deeab9a57a2c3af21ba3d05856c47147a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
