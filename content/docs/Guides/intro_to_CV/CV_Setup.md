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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFTPAE5R%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIDi9r4jXyoj78k5V4Qrlf8gVMoYH638ollEawIUXotkUAiEAi6BYKtG5QHDYc3dZoHnG%2B0F76SsZwAq5VMtLlYDmxk4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHlHS0uedKcRQ3xThircAy2%2BEPBaQuuBheeI%2FxAzrooFLF2IRbNn2s9lKtx5aXx3xpo8%2FTHRPJ1k%2F9%2FF1uxApNGb8Dg8Xd0yiOe7SLM7OFIgmHUx8%2Bw8n4WvGzhSBvbl01obAu4qPBoxi4526Icb8YBfdhzGezEWqGxRgbiBMlaI9SXKjrSkX4hDO3BqLfTPTRH%2Fbj%2BSUk8vdphQWDy26dhdM%2FVoXgFkBETS3lTQsZd%2BWkn789jTyS3uDKLawx35O0xU3FvLtH26eiSsMXhgGlVqEL2NocbMgg5O7SneVTYgdiYycSOBhtMcWXHmxRhHVg080nA%2B1Sm4LQDGh2u%2BG7N6ALRVlTiCKoMlQFk7nGxn7Tb4MGi0ekfCbXFhCNNv0huxdxNTIQ4%2F0QXjii38k29jYxdVgs4t1HbFQlPRIcYKnhZmTfMxHSggdJYPe0UkpoNnpJIevx9POrqU1xCtoK7AOaxIbW4QVLdI%2Buhs2S9sNg6AOuPMxhC13sD2LdvEC1HmueZ2YKlllCDcDMWNPfp%2Fqb%2FWK9%2BnOnYSKBjiOXJfQ0pBS5lctecWRABNuyCG2Tu66JjpPOccru1ev6ACkKApst7YWkV1FT%2BOKBncwPXvN0JGCvFtapI0sdNETHXCMShdK9CvqLtWrWtOML%2FFnr8GOqUB3uqicPaTBtjklOYETk7xWMW0BHEJoZn6hqZCyg7Xh1uXzWm9lKcM6d2UM2Qz9YlRxdqazGPCpDZcibLG6qBCflICZBoJb6klU4BMYfklDiijbF6mpkpIGMREXpDsWakTh%2BctC3lv0aMWYLa3zX9yg3YjlXdkkezNxdHYaWwqqqY9SiPfj%2BYbOfXo3m7bAW0I0G0R%2F3D202luLaIcg5hthe17y%2BRV&X-Amz-Signature=894b6c406a540b4082ee6763b71ec87c3c4d4eef5fa2f049688ea0d7de04b902&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z2JGXYF%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCID7jmcPE7Owzazi0z2G4gnDe3cuf%2FAwNmchsGrXg%2FEd0AiEA1gZnghBNw6olsEWZTd9fqty%2B6qxKp9H9WAlLzR%2FG7Zgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNrT25To3RSfk6U2LSrcA7kdXPiV8%2BgOUICNoqAClACM7ZxYdlNdZKIq%2BnhChFXPFzq8WdW5KQI6Iy7vsyuMOo9W2d%2F99E0oLVNCNVo%2BWe6qOXGxX8SjfGu1hp6ztHQH50tcLQEmIBObcXgoIud57SLNPhlOyy9YE%2Bz8T5DI%2BAcf3IRmKpchktr1zyKG%2B6tIuxuvlirnd6i%2BGAk6DDhbkcRKfrB73Q6z4ZU8DSfb896NujIWXEafJvNQ49a9KkslrqfMLe6DyUWeo3Wj9hEQWS2%2FEty5VqMyZpNHTIdDmPMKo%2BvTcjBOSPf0MuAI98A4NezhpBM2%2FrOv3fOfHXXxnZAwP2iyBnZA4%2FReMQdiOhMhowzuAasKiYnwkWOzKUIWtcADtO2C6PwERRuCus0G7WnumLF4oMXKlA6%2FuUQTvZXcOZzXarMJEZUZBoL7VtaayLNM1MagKbmC5JH%2FfOvndcwNZmDtVm5Ygv5VrCZ%2BCiyXj8YLs8ia0K%2F5m19i013OQkWAd4%2Fg5iw2mlgop2G5DJyjn78SidnTbWjtVLRkNLO12AArYgmtBwn2pZUThnuUttZh%2FaTckVmUaCJDIVe%2BKd0hir%2FtrVVssxaiIchMNYiLVMYGWhy%2F4Fyl0DKpnHalbkZiAgVaLq1VTspxMKPFnr8GOqUBFvOcPocY8W%2Bim7mhhljih8WCXXecRobcZfaa9aGig9QTE4jkhy1tMVFLXiGzZpkzrFCunqZn3VQT%2BTxkvZsXSU%2FvbQS6Qd9v15tuR9OrVQB%2BramAby0QkEyx8SG%2FB1T6%2BWYWW9S0sjLVzB3qHHvpjKoN%2BmTDq6ZysIkLXmu6msCKhmgtDY9OfH1D%2BCF6EtImF%2BVn%2FTvjFZDl6PhPJ8d541cTmXVW&X-Amz-Signature=cdc2a6cb56eedafac797656e033c543ca32dabb93f2188c3f9e2073980bb87ac&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
