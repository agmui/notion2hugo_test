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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EEYJLAR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDaGIsXbmCOqzxtwsjKq5ZpodsWh9UNXXu1e9nfzmiVPgIgHrpbTyfvV8BlCa%2BCYPlpnY%2BZLI1ammW0Z%2BbcxTiLSPEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDLDVS41G0V6HZekwUircA6mceClY5TMpfxfv2kI6ar6LeaAMuQJqdRoZ27olMcPfTSz3MuLVKazmdXgCXDAxuWZ8j%2BOYeMe%2FgKCDBsTLcDKJWjKvtPJKEzvqpSRkwvAyqHh27CKHOLnbyuR7AV%2F5%2BJRO15ytRT8nsBapjayyEGu1hXDTItRN%2Fn0UHQ%2Bjnu3obld6gotAZtafNXygPnICt2Me92BA4WEzs5D89BFCxRVdYdDhw7aA3c4f2xNx8Tzm1XIOtz2aSYKLIhWq4ezX%2FSmX42kKSEtOnBfLEAtln0LFRsIoT5PVY5LnANjVj83nCPtfGwm5wrx92d4hnAc2HY24rDnYpMZVLNEOpkV2MRFPbeg8tGSLyqebbR3dc7zLM9j7pAEEvpbDwaQHz8OwR8NDAQN7bN2C0DcQ6vEPr7foqevAEeVh0vBKwN3XI0eOeN0XnS9vMTJRn%2FsATRr7%2B6FF3X12GpoqnRUPZxNGkN2cyalbmdEoOXN%2FLfTUycpwXBSAEf4INYEFDWOahHWbliaUi7wvDYGhAsUbLsAPCTOWDh%2BooIGveY6Y4J29LFqGAjp5WTE9ZkQA%2FvL4zTqpjEkwLLwVpmL5CY8HoSssA5%2B0s5poTfUBwHkc4viDKrLamgkWaHA%2FXrx9x6GhMJCJ%2FL0GOqUBpK97QbNjyIor6gJqkWD1n7RFSntb4NxRS57Qn0YGVzl2wglIOCyPHxenx5tkvl4JpeCQqoIl3fYMrVH9o%2BoP1D4yAtHOFNALKAWqy38p3yhCNvNhDDngYAkP0gHdnxCsYoFDHwZYYDs%2Fw0wJqy80Cw%2FI%2Bn5%2FBCF7ieLVk2cP0%2F3amv48NsVY3teqq5YxMyhMl6UO6AjthwW3VPSuFsd04n%2B3P2Fa&X-Amz-Signature=e1439de42d65a000be24e8e33b13eaac43df36c160061bfdb4fccba536e44a97&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDNTOFFO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGD12SapoObK7cgngvP1XkBxMdkpakM2IkhRlteLr8NgAiAEKZS3oGqNP%2FrC%2FSXOKL90VmBRPu9LDLxP6XLoGpa%2Bgir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMUfbhYuIX1pUJgQt%2BKtwDofZqXCIiChb5QADyrpz4%2BLmTxrrq8kjD%2B2lTWba7yC9yWFcTXLKeDbDw0lBfNAd3wLjCJcQeT1ACUyzOFt0KV9iduNTTqJnalHYfd49VUL28skXeaFVi9NuEoZsMTIRkeBBPTaJLeY8pk2juOuUOcbAPffWPAgJA7I76B1QRDZJLZ1pWwS8zecILDzav5oNjW3UW2pBAP3tZYJTjGD8v3FxBosQm0lzwbtAr%2FVqPkJoav2P1o44mb%2FjgjOxO7ipOL%2Bct%2Blbdf8XATY%2BO%2BEsXGZBJpv6Ok8qxIdbv7tHyQE1eOP7xAkNeACoT2KN33kD9bn2l7Q%2FqWOHpjCco3P9dQf3y%2BBFXCID2acTQxfROylLyR3jbU9h%2Bkq93jqtDAfL%2F2EeZ2dBFRz4yI5ZTBiIJKjKE9pZPZANOJDZeSD%2FWW7UqoIArfH9svJlALd6mTBFpoUxYHNA4Tdn7ITx5G87BDZKQlk%2Fl3rZO5UykJAANkJoKgVENcCjtJYriSEzcbrxLZjwmNrTdzz8kDd8fXtyWUxwyTcVCfmCKYjozzydWYKG8w5sdZSLi1OzRaSbCDqtb8jPeBxsNFpW%2Fe0wuPNxRAeBnD6fzccDSj7WLz99ppm5JiWvBEz5S%2Fi15G4IwkYj8vQY6pgGQjMxx0v%2FaxQw5SIf3Qvth%2F4J3PBSuMXnnEymc4kJB0wG18CMKMGfigVZIhyhnEguNzWcUyNIKIh0qlZ3Oy9skB9xyLV5IgUn6lr%2FarB7LRjzyCatJI%2BvWdplOpHOWs%2F3dVogyxaK7bPrZ4Y3xSukY37CJqhyxH6TJKEcdXz3FhBBUO4rEhjv1ZyKvA7hczTmV76gCAFUW74Bwck9MAtmzVXx9PBQU&X-Amz-Signature=a0795d4cb294196d74dc499add0d37df072b0e27f0e5f77c75e842e35664c400&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
