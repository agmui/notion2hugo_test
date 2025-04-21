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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VZMEACN%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCQ1czCvfyg7ONqlF%2BCccwnt63dc6DPD0xEbs6%2BxiqTxAIgeRhDOFX51xcmzcJDamtwUXfSDQ4htzceBiCYx8ICi7QqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDj4%2B%2Fw39yurLqH5yrcA%2FuTTL81vEXaHyM0s%2BP6Ugf5kQp3E15KO20uRHx%2F2bgVjGscrlAg47zkBJ8Z3W64mpN3Icmgi0lQFQCXJBgPlimKtDKlOJeNhiD%2FaEoiEzWcXvyTURJ%2B3KDXWIg6S81qYMExZoVqQHOgNySuUP%2FGUW%2FM2muQuocpPQKmf4sSoqq4SrQT3PNllAqL3tW8F49ZPa88s1YXly1cXmt6bNmMBAk9FjJAKVeeHVCMtx%2FmEAISlacJSRNAdKf%2FVv5d3SOHmbnd8rkwqgKSsadpdDyzZ3%2F0qZHUe99kJJ2mf0DQ5EMNkaw6FqD3jg9AXfW6IbrUcb%2BE2ow0P1kG9MsbdkMjlc4a35iDzIZPQBTu3pjXBlw%2F9gmj55BD2oHGgk0uMAHmj1u9%2BOrjYVKZpwSGBADtg3A2rBnUiK5QO%2FL5I3iwUCTTJ%2B5hc4NWMgySuFpS4wIG5d5GWzI6wFp3Cd05%2B7IcxMjSlmCpNgqMZtu6qDFGH9Pvj8mkPn21vxM88tobKvMNbrfWOjlsG7DGTgJQT6KHy4reg9LQQEq4JuaOK9U9CNjoRnTSPNsrmf7UvMRHEQSYb0xsMkq7ELBE0U4nHGjiPS1fF1IqLH%2FwNcYLHVY38Y7%2F3saB64avNag8y9E8MMLYl8AGOqUBvtlLdRRgtEgFMjXCNOlyrXEPDzXMAe2YEtN7iozXeLA3qD2c%2B3oQQ3imNdNrqhpOGTKhdPljIOm195B%2Bp8YAa9Xiu%2BMzaG3VIZBSwfU9OhoqZGeEPfVoyckQOpKBDjfnfD7oEUwi0YBshRVORMw5zqe%2B0hdSvoH9zFw8UpzoMbnOtcnvNk5wCV31XqgBwUq89ra4YjDfcSmlROdlSMwti0tHRcpz&X-Amz-Signature=9cb29914eecbf357d7dd6e49713676bc816c0051fd15ea86fa2f68aa54cb4b2f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTTESVGR%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCn%2BmvytDEjU0udadQNGR6c7ZeJkn3lFm%2BlSUZAGPo8nQIhAOk8Ko2930l5E0rNcT37XgyQtm1szio91HY62p5kxoR7KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5qqY5e7EhT9Bti8kq3AOm2r4618aXIszOS8t%2FkSUkEPg%2FRvj0OjvfS3QRxs3i8wxucFgaWUOpa9JV2wmyXvDHiGQZxcwA77XAGSBfr5nIV2QBKen6mEx1xZ%2B%2FCo2ADSW4N1Tqem8d%2FiCP6DvN2%2B5FgoWXIIbDhq8HKlO2cosjarHz7z8tPd6Q4Vs3Et9tmAlIetifK8sZlK0yiLA6%2B3vD8jVX%2FynI0%2FHUQ8gcOtlSGlOe3KFElCYmlp9Jk28f2X1eXLuaUB9HGvk5ypGhWYnO%2BR3yy%2Fi3rjkEjsFgvgsTmCegigUIsAD%2FaM6n1A3JtPhOhsSLHez3jPP9dZ98M4BVf4rm4gZC5JnnxVZSWf5vtSv6YvQIAKtMJztxXFyZVIYjl%2Fqf7eC7wK2WCdTd6ljNvdYSYBynt6m7vNxDb9QrbRdB1OU57Mv8jugpNYx%2BWtO27Fl2MnXHji5D%2Fh88BY8JoAzpqpUd5AxBFJTNjQ01KbKO6FCbPB6wAx%2FSSxmCfKMbW2QBt%2BApGy%2FAfr0F6eP29u2vAn834mjwYTPwXyG3nn4DnQqo7T%2F%2B7ZU7gkfn2K%2B8cihuvLp%2FkFnVcmIBCeLxCKl%2BqgdxGh%2FhiFGXGdglHM97boTdjkuTEpccqMElVABGDZfoAM5B%2BfN15zCZ2JfABjqkAaTuU9S4LKa8yTcXHxTnCOiSa4wXHrN04ICyfkfZlnXte6EcAUXF6NumfUSC4eubjE3G5sMy%2BbXOIY9FIdANLyFJXqv2yuD84Zv4sXy00%2BNrHeZlE%2F62na2C7Do8YzC2UiN4KW19f4ZS%2FpQudkEZMFvXwB5URt3vGm%2F9iv3BSqfMVD6u9Lk7Dom75EnayjTC7e0IsM9hjbRX1PrBGzrq65chtMaE&X-Amz-Signature=f6a4cc972577f96bd5d9a949d69a3ed9bb618f2ddd99d1a5dba5d73c5c797359&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
