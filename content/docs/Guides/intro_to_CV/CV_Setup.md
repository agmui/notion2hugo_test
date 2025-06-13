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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH2ZYCCN%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQD3GP%2FgnePwyd2VyFVmQaKYYlIe3F%2Foy4o3QgxfJpZHaAIgBjJR8veh3m%2BFCNJ3JCxW%2F4leuAije5PLQ39XYtQA%2FSEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDGc1KhhdCmo7ogAz3ircAxBq5tVmfVPGEllGiWArtVDlvekHzH8h%2F7HphnD%2BxwQdwxAX%2F1Vg%2BHvI6jyyezw2yK%2BVnfSnlobACPcu8QRIiVKABVEpNLBxygUi1dpl4IR%2FcU%2BlXcxHfkmNBWTTgUFT4VVOA9RIyLd6iZLnHn8etBx%2B8Yz5g4vRXuVDfKalmXvfrQYHgpTvKr8i5Jk7x%2F7UcNVfXSP%2FHUaeHTPLcO4KHU0zgnXaGOHIhnjpRhOTXG9o0d1sz0oIEL5SsN2qpkoIHIuiEtH%2BiOKOAcouQQeuY3JxCVM5RA5ZSeQmCeB9Gb3CDn435ASGwrFsfJlqCW9%2BfPxv%2B%2B2369ZQ01HtacAu8FqdEEBaxeYOXVXza6YKNhyhYGndpD6EEVu6ELR5ccTHsF6Ch%2F3dKRWWHJHmZP67N%2FRJOuSwA0%2BjbYaUlTtLkJIJoR2EhByrBqv1ckjvM6I564x4Y6rxySOt1T6ryJTCGUUkKcrEMkrnQP7QtB%2BaU3WYacmNOT%2BuuQP4rzDqal8ktPeptidpRo20d3CgXVfOIKLMUd66AoVF3fY%2Bw9ROovhLU2RQwQQK0HPDInSFRCBBfYQypI47yCuQy%2BL6226%2FssaSDU6nzlIDG6hCq0ncF8wWkwQ064E3eSvVuXp6MITcssIGOqUBl1VSHk37h3kDSHIKfxbC9ADBLqfHpq45%2FNG0mtquGFF51dT%2B5G6atrtG7WukbJHd9X%2BkAQ6y0ED2VdIxWXqwaaWRfuzHqgCOad2n9lOcA8e9nGKwjvUzyJHUJztL4dYASUK70FEgRqsoLt1ekfHUZtv77TDcTWq9h7spgbTDUp%2B1wHUg7BB89dOWm3eXtBCMoc58SGIwOV8FnKBCX%2BD9IYpnGyD5&X-Amz-Signature=c221bf5e77c86131ba7f10c0935fa042c06fd2b2c9f24b740b73f70fd227764c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUWEEPAJ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCzTo7tJ1thZVH%2Fs9EU7hOUWfO3dWqlFot8jPSjuG3huAIgPmYa0lpaa5404eJ%2BL7EKDLq0LTEeeANq7ZiOpfx3OIIq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDKu%2FFnetDp5a%2Bg%2FFPircA0dFedRNP7OInyzEt5KCMPXALyQMXK3v9fjMc4BjmWNI2xpQykQrRljfmO8rAo9CF3WGLAFzrFxuJlSqgaZ0R8ZOqDl%2BL%2FyB3kJnkkCHSo0NEDr8fs%2FywJQd09C9Asqor9qPDwzMtUs%2BRXXHSC0X7elWtG2RCC1bz4s3xFQvePzjK%2B53zKPis5bs9yzPWfIJarln1EhMuz5jGQL4n6dqPfg78A7gveZKDrXBkpixqewPW09f0uNVXkiv3G2HawBg9y97A42ExK2SHCpNS5P%2BbN250RLnu%2FXIjH9UTMnkNoVKeKazxHgWsbIQlam%2F33qKclVSMn%2BE15kNY%2FsGGOp2L3SZW4ArORilg9rtgn3pakgaziQVmtWzdhVN9opkgll4b%2FFxbfyuFPEiMA5Z0aQwxt%2BlWZo2TI70W9Mon%2BuJri5sXLa41w79Lf8kk3bCNJCo0UhjtmznEVj4TlSM6hKJ1kpUv%2BYj8I%2FM8TLPqEDGeAQEg5wYp25mHfaArrD9urL7qepokVNFru%2BSuOURCeln%2BbLe43aoWatiWE%2Fm4o8XBCZ4HqKWzIlbM2p%2FOIrFKhHzIzNUIUyfz0eT3TjVO7tx%2Fjg6Ya8qDPn23AZrmkzbvlgfq0JEFXWfyRfyL5kPMP%2FbssIGOqUBe1Tr2SCQm%2BmllxtzKp%2FI0vlAUWcpA2Lfl%2BbDi5YLXqiNtiO538pdr%2Fwr45coSXP8FNOPKpjJ%2BorcSbA5QPw6l5%2FFGoOQWpgL1DMB3rFwlxdvS4%2F5lG0nV7%2B%2Fw3up8dmHmJ7aM2IxXSNy59ElFI56gQ3qGpn%2FbhoKZ11eqCaKoRiYU5OtqTqfAWAYedHpvG2OzYopMj84FrPqmUaq6uj6PoGDxdr7&X-Amz-Signature=a4fd36e666bd92b1a41b24a21c62c4487db5548eaab9bcc92f05e7863aef2ea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
