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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6GF75ZI%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDjYK13%2F5KVZ0ktCykW0vhQ6qxHn%2FhbJSbt71Puu5tILAIhAKvjtGxA5S%2F24uQNH8qsrDVLNIRogrMmoxvfMCXRYj34Kv8DCCgQABoMNjM3NDIzMTgzODA1IgzwlSc3ByxtPuamkvYq3AMN%2BEd20G1OYi6RGAuydVnj7C07dHC0CSb14SyBPMBVbi12WoPDKw1FVIt335QwtAC%2FeJwiUmOQsxVfd0oQGKgl6xs1aZ1XXqikbJU3q4lCk%2F9MtDtbHFlpUJhwEBh611aLq8Rm904i6k0MXgeL5DIoAZoJ9%2BBkTgeFpYuoT5WND5F2kCn0waYxVcbxzMbHV5hBX2WIo7AxHW2TjGTEu%2FehlKXi5W40dNQE6vO%2BM2kpvTvpZDc2ws7djKY2u66dLPN3hrqxpBtWvk5L3PLG18Hq2dzhjyIaEpMiy7V0y4AxH7sxsuMHadEg8VP7tIjqUY98eDeiDMcnfxGKihR0%2B81qnguOHJBgYtvhT3rGaJmaZ9PhFoDy586%2BfEMUxhyj11m5Cl7M9CClSflg45S%2B7cBVl3uqv00DGT5Jbjn68HuH9Hxb1qP56Xer6CqhLJwwi0V3izaTGfjylzW0eUbV4bP6%2BrSXcTLGm%2Bohhxh%2BSinBYM9wzIwGU1pp%2BVqM6bbbE4uWdRCPd022FVupwokKyTN%2BPS222p1b44fblCGnw5Z2Cnmsgc57gYLxecIIf1mvNhAtTSTk3%2BWPKIlbSECWGVaFZcC0F8PS2x5CUw0LuTav5kPpUwyG6sVLyn3L6jCb3NLDBjqkAdonvMqslzkmN40JvqafFA9exClrf0SxU%2BHF6IiIY8l8m1iIjaZRgIk4XL%2BuBiwZUZ6AqvkbOC%2FhCtEutkjXqj7mp7MEC2yCxMiVrY1f2rIFEG9Le81ZMNqNI45r%2BerkFVS9nzpKoq3PUGytKhVkBxiE9XC91rTvW8ZAMnbHB4onubgesbwuKG9LM6y97gpePXcXOLAXI%2Bphp1CB8%2FkZ%2BZ7Qmh%2BE&X-Amz-Signature=c2aebe37eb74bfc88b74890a17a7609189c06c728c417ec2fb4f57218070c920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEDV2AU2%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIGiHibfRJck2kHbAghpAoFCmi%2B0dCLc3C5jAZ5Q0u14oAiEA5EekUD%2FZOPH0bp6nYHqS2GNJOEMwY7Eb8a%2FVtI%2BA%2FQcq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDShzoHslntBZ9s6ZircA%2FZ9jpN3sclnMM1O%2BJVX%2BbBVMY9Veot724OvDdXiuYRLpDudcq9T6Vh4BKWS8%2FPhDLbhb25bYitKkQZrEzIkBTb5FCAmKZxi%2Boh9FSYUTNykVz7sHBlGWHjmot6z%2BlmKDIXNWxJ%2BkZ0nR06Z9apz9%2BrlxBdkQX7p4A1t9S8U8Y7EKVOJJIphlbflp%2FSdm0I3rAOzCACXsWLCkXr9XYScQmd4gmwpatSo4ZM7vaP8l7%2Fvpt3%2BKc%2FhNi9DYvgSi5kSrGneKq1Haxp0FQGIhFrVXWYHUnKh9xAotlEzgOkhUIOZnJyWC8Zg3D%2FBRLHMaaCowb%2Bc%2F8fxkUb2Xt1UFCVINtb1su9HVXT3bGxgTjk1DiRn%2FVx5ickX9dQhyxOpObxcSax7%2FctyzM51U2mWroW3giuMeYypOkiKSGQ2jlWGmQgevuEeyi0av6QjvoIpxkOAU75qMwlHMX7FSmLEBseln2VVEJmrUyz%2BjpvmQs0Blym3zGr7WJMSJ8xxRUI6jByMEO%2FO8JVmZy5j3dvcyMzmDosoNCYiwet4HN0NltQ5%2BZFH0M58RpiLnotqG3vao3r0DdguMfegx0iqJ%2FcQ7rtfVKvEO3oVC1D9hcwY%2BypuD0nLA78tGWhHh6C6X%2B7YMJjd0sMGOqUB21EIOLL1Yf32%2Bls7aQWL1jYyxFtBfguR5KxKV6fIimP2fei3Mojgs8V17oya4%2F4GNDLZgP56XmjD39qJgtbW%2BwzBBovXAeOT%2BcgTS4MC3CuiAOP2WVRGuSj4ljYd1%2FzCYrLB%2BL2ioIaIYCXoZnp%2B9oMPQadYH29C8ZyUMxpnNJAYYK35vCS4zhzdk39mndOcI3DlnNJ8rCWEVUmCdQj3jGdM3Q6U&X-Amz-Signature=1c9ab2de73fb883797ee410cc2f8f12d0bd916c3ea8693c618b11653ae57133d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
