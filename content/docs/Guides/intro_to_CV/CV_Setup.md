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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STQMWTIS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDZ5x91C5krfZ%2F9YhvOb3Pv7NilWwQWzffgBKi35Qc8AgIgH%2FbpMDXn%2B9r%2BcYeVPXw22OQXHR87fAr8DRJ0%2FA6NASoqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH61vGNpojZwPvTrGCrcA8ujB3cdMpwHCocDRuTIBtXWBFh3j2NUQvHGVCfnVzgSgoghlEeFCEBDKjHAIqdnMuXlhGRJFz5XcOACd6crZm3BJBIrGOzCkWZ4j1tt9OdAV5ivz29ePTwukDumjPPYZTl71WfDk7gzY3PZLYrI%2BrcjCMLwwXLVfbKrw8Rqqh4uMb5Hss54J0ZHeXrWSJgPfSvO8Dl3Z1XxsDWGLOrRwd%2FAhNHsgyMOcG%2FqCcaz4LXfIaIBiB%2FK4mNKiY3RFPuWzfkagBjAr0BWKbyhdKnwT2q0HDklhbryceIkvYyPyShpJZcTx7WQ%2F41BAmlBTHnNhOVBTDtcHHnFg4%2BNUNKk82hZNPYQSc%2FguQerCtUsQdOoISCF7NOa%2FXfgsSxUdsYLxSVHk9%2FfdRfUE%2B0b4CvkqoyEQ3blL5kaF3ve5wcVA4y8FL5sExAx1uPZqxbwHje%2BqXjQPHH1VTXvTpcSo1%2BHALPn6hjQN9ulprdYKO%2FIISLQ%2F0iJ0lKaz5D1BzbyaVG%2B9n3WOuvp1zCV1oJmuml8XHV9NjSgJNfK27bjf51OXAvP3cF399giu0k9A6MkB0AH18PTP7MeadMwtE2sz%2B2Y8yOHrtfmGOZEzfUdJnWY5hAgIy3WmHKR%2BM0jLhTPMPnYpr8GOqUBKw3AAnl0XcW%2BjYBJF5IerHIT%2Ft%2BhunlJUvv6ZofjdOJ%2Fj8mS%2Fu7B7uF3V1L4dSH%2BnIrsr0u3Qk8kLz1rNSt4m4HgkxDnkI7DHFH2ITn0snySJtwqD7Sx8jkxu3vEWJQ%2F1pW2%2Bsk%2FSlV3J4pDAImb8icb8cZcAjM6o2HPt%2BTp4SQUD1Q135UdCgewFZd1sxc%2BThndpcmy4nwtFNBCythswABe1Djh&X-Amz-Signature=61c7eb8e3365943014f081c5db2ff21603b91ab2450eafc28b871de491aa02c2&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBOF6AW4%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIFcPKiF0oZQNLHT4duKDmVe%2BRjm4lgPIrPgEY%2B2E4brvAiAS8%2BXGr1v5sb7h07ILaHChDzZl2kjQJeb7y6p8iQwOEyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnAtuDE8icUXxGl45KtwDHGYS6v5Ldgg%2F4cMfoRZfTGhqGoCRQBaRwyoF5xr8Ep0Isou4znZKsygrJErB4KuFeY6J3HnYGnT1CyBT93Sro6nI1IuinTHUfelI6PxjqrOENQiuZb3zRYZBC0%2FHNdkDUoKxOZGAke4RFbZVw0PRxkbTp%2FDGe093qKswxGKLbly7qKUoIR0BKS%2B%2BW8x6Gu1i10qSffzUE3hnTC5SGx8V5TRAo4n2PwZS3VKGZQQlwOqwzOWdRzumL30YPOrgMdptzRK3wJFoigql5r233oGC%2F%2Fg0k7MmQM6K6v%2F9%2F9yPe5LP%2BHen1dsYSImivDCc0RoQQOKKmmBdL%2BooL0Ed5gpLiZsFTZ9tv5zADUWXPJuMVN5sa8r3hvzaskpfJzYvw5m08bKKOUPWEXxL5vEjvCNtcqHjbqk88PAbW052ofHApm5v68%2B65lugZWlFiL0rpvJGhXR5Id%2BfO4rCMuoc5TsS8JFWDiOuTCUhosAvcIoiDTZdBqL9s2kXxq5MD%2BOD6JwCrFy7oBsBeSScivV%2BREdKJLEh8%2Fjru8JHUqEVc5IfD0I8RDRG8rxsJ4U9B8gfWX0YRt6duXTt89jh2dVv%2BFPCHg4JFiPzRxa6RdZ%2FwMm2%2FVQG%2FeYwpy4wEGNLGtUwnNimvwY6pgERaSc%2B%2FFFzCDpFn12cQO4xbejQBnm8XX3kd0EmDLSImVlSshq4BwhlqA0F3ATTwEgX7DTZbQcX0LqfFuIXdntC03H4Xm5g3c8Xh9%2FqLE99%2FXSujtmoUndXKzjZwQA%2B0qZd5aVbH%2FqTDiaDCKpApmMcOpssklP6GutCs3UQb4wfab7xurnEW%2Bf5A4qyyG%2Fns7rVdqxh5RLNlNP2OU%2Ffr475tKOLDMoB&X-Amz-Signature=72aa7c10a79f2e37f07a064af9c370e6b0fbb18caad2db5f5b142d4da14dc07b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
