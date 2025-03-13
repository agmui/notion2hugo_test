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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDD6S5UD%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FTv9DzbbwI7VZyxm90dnuyD5SWPm8hvqmjcMQrevzQAiEApNYRYgv6t%2FIpHnX6oZhKL1XePi8OtKKBYLXbzUIxbqkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4QOxtFXrW4qJMpFSrcAysY2YflZlivguHFzxVQyDZy%2BrY9RVbXk4MxeeDor%2BEVXcC9GxFasCt4id4a%2BSTbjxt4BnKuOd%2BuXvQQSAS7ftZz%2FV8xi119IFC%2BVw23CJ%2BUsamhvX1aJN06XhSalWn%2FpvKVcFTlyGAhj%2BwmLP8n8%2B4DofdyO%2FE7h0wBDHnNTlZyH1XTviNLaZnjiTLCXaEsIwrRjcXuDmvFXonTxRTQ6rKIG2OUP%2B%2Brmo1LZ50P7y2FB8zHVk%2FYJ87BKPYsfcBiSsDwN%2BkO5ewnN%2FakpgWq5Ix2EEaQhHuXUmB5wVykICRrk%2BZIwzKppgq4C%2FD3xnexKKv8gY1K5YP8QCqGdGIqZHeypiSgLK2wI%2Bxh511l95mlbonHkDXiJ7%2FYivaQTmOUc2zCKVoUGOQ1gd%2BRlKk%2BTd8bs%2FMkxV8wbgacfNGkS6lLcgVoVBD70IeNqAfhzkZPrdaDko3RMq%2BzzIjDsSuxx5YG5sT4bcywixNbJcktaBBxubZbbzBhME1V0C3BqVDr75JYNfcCE%2F5oJBADoP8pDVpKFnJ6qa4FuAPNeDxNUW%2BDGwPsZCqYtvGsREnZr8dSdAZ3PY%2BsH%2FOgKOvzMrodpoGyjif5B3fN4%2BJwFdjGITK9MYervArxSUaW2cI6MJCkyr4GOqUBVEDtn%2FNR%2BiGx6%2BKfCL1MsgDhTmwyCTWMnMaPaCycrmVwhEVBuxyPdmamTeW4PDVpCoOtj7qiuYpAmNS5DocJgwB2MfMMCklQqLROYxUY1JRR4OQ3vxzIuNRRyYeAGOnzWzRQJZcgtIhjxxYybKR3xXWpqUs2anbFAuHQgc6%2BfCe4i1a4ItQkXiEFPRvVysq3CfCsYmTs4QbaG7eL0JEvRdpBvoXy&X-Amz-Signature=3ecf41a866345c1d525da99c051c4d282d8586572c2b02e9775fb588ec2b247f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZEY3ZE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvDNTxISw%2FwYkTNWPET1s%2Bhrs%2Bgq1ups0ja1kH0dwFfAiEAmVxXTrqhqYYddViJM6arv89hZK79roLzp%2B10EXKoZRQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMc5gs3g2OCzbIYs1CrcA7d%2F66txD1Wpnou4vP6IIHCy%2FsVNLyOLni0s%2F5pkZ2LIE%2B2HT4giy2wqrXhHSdmZTwdMXOeMydpBgC%2FZcLsHaOxaiYBuELbmX7OFQN9RNVuE13tjGIwljRAWimP4l7KLLXxtsV4KXlkuZBsikxZghhRpu3%2BrqzPy3D0eaM7JlLfDFNKJonerdFRMByKARFagweZdGsuYDF4%2BypkFJbkqbYrKFEM3dndMAM8ZSjLf%2FuqCQYrkx6iWi46L44Z81oj3PEwdl4oSIK%2BmFintGq00vOQm2IUNS7hYkgUQOW1ENpjF14gGbpsSA5hacIanPqxbBXBzwAsgmTdxIOn0gg6ErtDT1Vi0%2FjQOjO%2BzrJQM2u%2BnfdeOobl%2FgL80wr%2FYDZYwvu5cp8W4PT9bsfFRrDBjP1Di7rbVc5QL9HCOGed%2Bkl276KngmUJotnokpSqThghmSBT2k0NBuFdmdIk3TPPIkTF3XiVuisoYsAb2keo2Bg5iyoCCWwkTJ1pq%2B%2BSq338HmHvqrvazMaAhTlPGwmF0htmMkLNVyUTLa7fYQWQUnXwwvGXZFjhx7pQXDFFeGTEtHvVsrRQWR7XVXDorrUtg8%2BRcf7nD2NzAP9xFUI0Jv3UaT6jxeNdDZxVAzMFLMPajyr4GOqUBIgd7O2UKjE1H3%2FjBxVhUExOX3tBQ3l50fnM6DvVC13T9v3APpM8QMapyRRPXkFrjqyM4ubhwdaqQYH93uUX3R4XwhqE01TfUPEp5wJ%2Fzzi0MZAJ7ox%2BspZUnxANyIs4nGGL1Lxn1O7CsgMt0HD6RnSbk7Wkn66E8Y0tBQEVNHcqWUeu9yEIMykbLPIW4i5%2Flju7uIKOPyniEtbZ4nHbtl0gY7uBR&X-Amz-Signature=bce0e9c10a7213619516827414fea9f666a86724f3758793d370c2dee2daa8f7&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
