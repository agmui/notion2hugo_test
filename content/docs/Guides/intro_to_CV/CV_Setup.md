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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVPO636M%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx6OYtaUSEzivOvVZuQsSD46LQKjjAB2RpgdSPVuD9DwIgXkOn6ifR%2FBChnWOXT4DvuvPdO1Ec8Pz%2BzBugCBN%2FYEoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDAd%2FjBWHmPfjc%2BK1lircAzO3gJ0hvTkdZSBrax9j9iaiiSmvh74hWJIhpllYYB8YHz2H0e1%2BdOSJCrj3Wq2tautnspmwMv8IPVeEJsWCw%2BPsLgz%2FeFZ5Pg%2BrgGoBt7Q9z0OR50Cz3qvQPlGgYf58AxjZqnMLj5p%2BdtRn7SbtopauxKvXAcrTOEabWYSW7Nwvp3Z0cOXwGN3jXM0JcHw9YfFTDrUENTgI5t0J59%2FFrRBn2OAQQMpYntU67hmYFgkzoI81YJpON7%2FAhU8XdnwMO3TpQoBH80WysFtap%2Fv%2BetQzDb1%2BCvcINaXxEeQvNMsB1VyFjy5SOAFVRtLUQt8P4ljhR%2BqQBfjaRTRQJwtyxzhgIA%2BMuaKSiHT8ehMGmuCfnXnfkRnGguU4aFEVk039TaIVKm0hqnToYWYG5AXfQKMEJKSvoQ%2Bn8qvnEmqk4BTPpOSvIoQ9tIlEajWvlKH1KerfnzpjrRjZBhqbna2mGlNq9h3kXyr1d8e37ontbPtDyb%2B%2BTI8RGduiUBjwBqItLUPp%2FoSMYVZ0WSfQOEW215tLbDX533lo5o26rwyS0ZrTwi5BPO3z0%2BHXmUKbR0drmahxLprKCtZb0OoQ7O5%2BZ7auvxb9IB4nvwlj687EHtQ%2BrAtcTIaLnoPAxdGMMPDSksIGOqUBgpbpDKCalky7jAQ%2BToC%2FRzbOT91dgN%2B3bzE5Km01CemyfNKa1zccHPJwMMi4vGuAJrf4FPZMmrPEvCN9KzZjSoj4Q99rmhHyS5rftwe8TXoqaL7W5QIbAJlb0TPSXtwMIsH83WhvWX6bNg60Ds852RGTN%2FxBgQ0cIvzH7V3RI%2F%2BuTr9EZ2Dm3%2F5g%2BQghRMp%2BbD4NHMipK7o9IYpJBkLQtLTcqQD1&X-Amz-Signature=162e55e8e85b5da9bfcc8317fe79b3ecfb0d974895e9e20674efdb8b63eeab9d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYIOW2B2%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTKexgiZghS98eC9wsaoqPzzkqA9gqbyFEkf0mJRywswIgEMBWyYOcJ6PjK1XoYwZdIQ2DkGkr8jaWjaQe5VbpZ8Qq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNcyGjHHchNhSdqA3ircA1cX69eYn0ID1Gu3tOAjQlyephlCC%2FNc7vnPJ%2FsBhTUsduvpn%2F4v8tkJcORF2JNXL9ihy6BtmL7zqA1ttI9IF4BIrnLQYIpVe1YLn%2Fi8Tw7cuC6ZGMqCemrM45du7po4G9NSdvIzEtOZnP9N8Wyf72YO%2BbfZARbFiu8JizMU9%2Fvdu%2BhiNtSe%2FzjS%2BMObgkQQoeNEW%2FYr2HllyLJszPTS6PzXBiSCkW40mWNdIohcmb%2F3dun%2FOfcFeo1dxO%2FajscTH33E0Hh%2B8d21xls8J3QNkMr74TC1AoI9G9hXOeW2aa2bALXDFoPHWVYgJRU8IOG17H2sRMYaU1qphaX6wGquG3duCCNALihzmeazeigayxvBtCCCcfenVG92AK55vrK8b5iFI4U3ZhROK0IOJy5cUctXTOKKFQPceBe2qrDOnmqVHUafL%2FCI%2Bkxml2nSnCGdGoCrcu3n5CWTdWO9szZrj42xu6UH6Fb4O8VXzMmP%2F6nWteZ0W1FxwTT%2BF%2FDLhpRGlu0NctA0AZ9Q03lLlJU3hOtjongkDYIDPKN5Htpy1ThSPH1ix9Bv6LmKYPo8TwD%2FzUSli7LWQKfzCtlYlOCTP3D3OwDOSWQ7jNor3P2%2Fy4n3F9zOljSCFgtaXCR4MLbTksIGOqUBWmzPnvc3hTug0IAOcsEQdAiZ%2Bd4k91OEen%2BgnrMcWeJlr23Uu8zkNPWlq3wQ6KTW4TUdaS7rYI8EYDEfcvG2zp%2FNvz69ct7EM6C1%2BDedsJGKNHa3FFY3JWtYgqwahlrNHKOdTsdO2pjAUO2f8GK0RGKgvGjvJ1NPXx%2FUcRX4FIwHaeAG1ZkVXxc3lIzzeLNg%2FRszYd5epJrN0xGEmsXyTu4ck9z9&X-Amz-Signature=0af06fb43e46f2f21349a249c9f0b6a226446a7e3f1bccd7caa96878a56f2d91&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
