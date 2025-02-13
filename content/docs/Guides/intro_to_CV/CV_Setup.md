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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJC55ZLG%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg0jw9oUN8IfiutCCrZpBpEPQSYzhZ0S56zJ7%2B9qQePAiEAl3UdveSzace3Iv%2F9kPMG3FEsWThOSZ0FpEPi2aAroVwq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDFR2YSOfZvVA4yrH5ircA1y%2ByQgBFi0LsmUOEWd3u3ZDCqiJfyEJbY4EjuBWcJysGkIBwE7h0qXC2%2BPMNhmQEFIz%2B5UPEw4NfL8hZ1hXEltZ2OijsitDmY5JrLURLfbcdYV9a1Yi0Yvhdm16YLouG95wpUmkoS7%2FVpW4HCm%2BnCNTU0hrf65Jhta%2Bhn%2BwUt3RJaWSaP%2BYpt%2BDOi4MZYSul4hnTjK6DWezpUj8FnZx4Q1P9d2zugiIx0ftGRvIC7L2iRqS0NRR8gFe%2BWM%2FITMfin36dh0SRXD%2Fct8WZTHHo%2BKMuKLuRdMaP%2BxrcUZ5RfhnpqkSXWOxKfStJaMloYp8WjpqXyShtkflTtlAFcFz%2F8ir8EAH5k2uPYhTUfqFM4SLIxG3xZE6zmQGqj1gJ1VS2mewWKiR51MisPZZ8%2BFU%2BduzE3pSOWOvIWJ9Chjh0F%2BxZ29gshGme2rfKdbSjGgLBaPP9Hdd3Wv8qDLsbDHznZdRlMNSPhJwOLaojYzDDhy6I312u40xuLf9tyuv0oyvQP3iP5NN6raYd8SJiiiyoigZ%2FWeHLSTUJNcVsBKYSHOPulfJP71m6%2FgtU65L4bm85XcMjYcf6cEuGTkVwPeD43MVSzWY0mkatFSfT39f2h1OdZSYV4sGuknCVuxCMOTBt70GOqUBv2PsIwBn2ZC1AtEKNYRW3bepdXThvxRvYdc2Ku%2F%2FlcMYfZ2buE17e5pRA0%2FSHElVkBHRlMKreESoqSGhqIZceHYPYNzQEibt9WTjNbRoldnT6cE7gZ9UtlcJJTu0L%2ByWD5oSvJUXQGNZLIwMHMJXr4E93nX5wv5PpcNFPvGDL2BshHqNP41zIoltesiWdrHAm6Q%2B46du1D2oXoA4B%2F5OIOuTNBOH&X-Amz-Signature=fad4c321c721bf190e185bb005615cb6a2c74f585eccb5e10b2339f8009a746f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4JI6G3C%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwY0SyN%2BAMaC8Yp1hSLhf2eaWcAZj0fxE%2BWDViv51F5AiEA1sC3nljI5pzY4q7xRuVvRKAXsHbUkXkTItcWjOoC5cAq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDA83rYm4n2fUWntKuCrcA7xTWi993r1vUGyWFs%2F3Wq5zQ5v1ClwRYJwo4eJ3XGj4WuznzscvdbwTx4cXn6C2oyxlouhuODzkE8f70eekDgBgI0E0DnZJd8vyLIMvfKHaCq%2FqU%2FUrOq85dKDg5ppHz5dDMJ1feThARHO255IK9Yb9tu%2Be91mnTKZhC6Kuol21N5bicQ%2FVS4w%2BSDXpCoXQQ47YPfevIJqFP89P0lfPAaGBy7A0m53XDr4AFmUhruA2iP8cND%2BTnQ%2BcKBOzUkFtx0VXWc4OWBTNVJWB1eYESgP1EFprfuCTFKoGSEhCdn0u9%2BuVaJ1zKVxvSaFcQoWyKqvfGVXd6uRmsMB%2B3d%2FfkHFwhiyyZ5jsK7iZplawKar%2FXKXloQ54EJ%2BBdnQ2Bcj6MzHeSll8kzrDnWQMR7SF9gJg%2BVZF%2BEQypEImwNS3tE8TXnMVUrw180yib02BZfJA%2BuHQga%2FHPaffUYDIJwyOJWvr%2BVk5QmwnMjM5xLQCUw7tEv73RGAFHt7qQ0rPkw5Hxn3SoQllvIHncEh3GZmL3jOipW5x2T6o0e1qcfJW46l%2BfpJGx2M6bWE1j3clKTOjtHj2U8Ql6d%2FM3SHfjLh41ROguaS45GcwVEleNQEf8oJ6oYDd%2FvrDdc9E9NxjMOPBt70GOqUBviKnpQmfxeEu3WyY0mZaL0Vhhn5rQ1Amkt4j%2BP%2BwUH3lYF5Ke%2Bd%2Bf2WrA7E6jW7DW%2F7xfTLzWyLs8s%2BI7vBhJAK7vBQaFXynPi30l3GeeKbYqP8vGrYnoUSE978ovh1KC%2F21A2sGnFFADugBhHMnL0Wfu%2FgHgsUQuXC8ql0wl4DDutNQ55%2BisNHmrNveOU%2FnII5N3q2FbDPUwSYVvVChKy6jj3zS&X-Amz-Signature=99024efb0c047727e33b9ffb664b408d470b9673cf46747e07c0f362b72adebd&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
