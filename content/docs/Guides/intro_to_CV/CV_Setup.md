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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFROBMB4%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAP3a9ghkQPk7qJ28xMAw51DZtEwxxdZgfTH8diDItmiAiBSKes%2FzIdRYKOagRVrth8bH4G14nF9sHV7tqYKg35flyqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSD6qG1SqquLI2eolKtwDWgi0TXxmili%2B%2B3df8buELKjhnVWcUuTTvpvsNwTjhczhD2hmPyOcjVznkc3B%2BwcofY31ksG%2BCtnlkZkzBweUmxSFExvBJOHjIsmwyMc%2B2949KpEHAuddw1UEKq5Ug2osof3PzcUWjKn0nGI2cdbDMOYH3P3NrDCgX16e8vYWkcOzHbx7IfLKXJNTdQys6Vguke8yXF2qVet9AtWoapK%2Bf2GJX%2BOKvs774R82rSfPjp8mKc%2Brh1Bh4eHGjmS3c5vDUaiNsH5uikChXAOqLWjeUxXGafqaMxiyBMe%2B4%2FGxJJyaud1fZDap59RlQIFB4Qtf9Pz3FAVRE06Xe1wQ2B4gFbUIAn66LWD9y4n990EHDhY7KKbPnbn1C5zvtJiMntaxzIIREffpftPLc2lFFaPSnjf7R6EEaE8d8jbI9iBgB29HfG%2BDkZVAwM9xn8MYF4Kx%2FAlES8tu27nvjt1XPYU7MmIUVT9ZTUAc2iHpyXQehHyf4EC6uqzhSv%2B73QEdBZ8%2BH7cD%2BDrY%2F2v1Q3TH5GDbdyK4l8atM%2FUMKk7%2FD1nKT8bTFCfqcdpJDonaOGoOS34lAXABq9tDoJlTNQxX2PFeJ%2FsRRzbV5x1WzEcSU15bAyhviIR8GtqhpSoW%2Bt8wmIjRwAY6pgFRlP7%2FpxLCcyAkFmzkseVnsjcXS8VwY3KpZqUg7Vu6ntNz7%2B9ga6atzYuojqLqIh4VBxrR%2FcW1D%2BxtFKMvqjTOHskIwgNKC4DxpiLSsefiGwx2D3wWJc2uPfuLS27QzLhtYx6xafP8JrRmSiUmCdOiqthXpnOrwDX%2BaEsbmPPria9hXPFc%2FtavmdBKEcRVVemVOqGEuUs1uld57%2BqgTEU5cVZb5wFw&X-Amz-Signature=5469812a2a5c6509a7f35ee045c64096440bd9790bcf2469091abbad19454013&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO5IHCSE%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCAS7mIbE4tGTjlesDM3aukashqitvn7BoxZxpOu5EJ2QIhAIYmIkcue%2F3zpNubHj0Vd7R0UlcPbRtQSwNp0jzSP%2FWJKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzcyQKHp763%2F3%2FD9kq3APubGmnCbJbCCWKNCe5q2E8GMto1ZovHsFX9om%2BfI4dAzVt6tsAUXke7Idp7NNlWJD0PgnB0%2FNfqJbOYkPOjI1oyBEtElcwrEO2gZVNvCCnDbROVcAA3CtWfj%2F23ZStsDckFRGWlY6C0Ktt7rZiFitFrhLGkElzh1pMg3JCiF8MFQb65DYXF1FrQRu%2FYF2Qo5f5gGJxzgwNwuHZZdMAtybO1dhRY2yf6xMU%2BxqdfxhCKOYGcKTzaVa%2BkVHPaaqVavgMFMC0jmHVYEeC%2F7GTf955Gk8v79mk4gPz4AEUwMHZgbowz4NXJ1MSGHp7CI73dmiJEWqlPpmwenN%2FUHadmJJVJr7G9OFReN%2FZI78Y8p9azRIHQEqnfpxfdrEo4WFV5mRNb2oSyyoJ6D7mKYeScXBK3DuJmRM%2Fj3oZb2cf0WmB5HHe259J5XJvrSWa9nid1NjAPjAqSE0mSVSvyYoyNPNeOuYArJE09Yr6CdRx%2Fj73zHDkw8OcU63vVO%2FwtcCfePE04yssUKakRmIhyoYYTRDTIuGigPHDCV1nRDPsdkuuKIgSe3cIYwtMDaZ9mTcMBvxdJn6IJrw5QfuRz88N1D8L2HkM%2B0UdVuRotutIHZ6lCnp%2FtikA3hEEAV5jPTCEiNHABjqkAfa4CNRFEMuElJXWxXF0PcuD9s5%2BO%2BaypfVcGGtuh1CILmOjp73JpuASAyKMsLVhCKvhH62V7vEH%2Bn2q2DHF7w0GKmPfR5TNU3Wic1psvh7s38Cc%2Bns0AzwO4dLLdMO71CT%2FlxN%2BAHnEZ9Fs79%2BDZdwBNKyLbuI6eUnL8ShD3RG9Yn1IiShEQj6CyT1POqDuBSLsgGY9RY%2FZvee0sD79D7ftWOkw&X-Amz-Signature=f8ef7bf5a4338e687af6a4fdca099ad43ec31cc6a7088abf2dabcf931f9a6def&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
