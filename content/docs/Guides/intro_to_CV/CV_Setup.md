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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBWAYHSL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIBXLvS9GqLnA5f6PODDihYICmw46ta8aC1xRaV4Wfx4SAiA8sEeitL0i40k5LhnxtKzQwwTKdQCf5knRW7MCN%2Ftioyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMt0pboT%2BbAct5kUEZKtwDOoIOfF%2BFf9f2OFZgYOM1A8Ds2DyU0fis9EYV9Fk%2FoNQDJMce%2Fy86jKOs9caLKIsI5VRKK8vjZujCYyL6RPetaD6Wwdlbn1ViemINrGNh6MJ%2B4E1ZmWZDxYqouFy2VAYcuejVI4bsxtn6D4hI1L4vRl0lKUCnusvUdQVnCPPG2XHAQA34H5gabfUru4T%2FvxQ8FO3%2FRR5kBy%2F5e1rgAmtruL%2BURJGn%2FrP1P0VtNajyWcY%2BiVBMeY0IdSsaFApqNHc4yY3CutUdy277SFYMy%2Bzu%2BBhDhjcz5z163Jyith4xb2eRGqT0Uoa3C1NSm9IaxjibAWy%2FHM8updTTxiVNaTb6hxYEvzoUtS0Cc6u0ziVpWD1r32kiGf%2FdToSMnrZQ6bDsHcHo8CHG23VkLf6SXmuZl3Bvgsz%2FPqJw4BTb%2BUGk7A4oZaRj1u%2B%2F%2FLZQuGu38tqd7bIA%2F96qyboFunaojlun%2FzKqJm5wrUVDODgychS4eAp274VHquXpWo9JVjib7Sw9jPegPYrWyTzA6VhNAGdbuKN7cPeTFCarC6XZr23MsNAt9%2BrynDVtJnOB%2BzchQdNmaa9r94hSrEHyjBTrINlDDoG6CYbcxQ2aMAB7%2Bmv%2B8JPbZ4DjcxCHz2583gkwkqH3wgY6pgEOHXfhHOfadMlI1AatMTxyEWmHONF0E5OEuL8rowF1auzBJed0kBydWjA2wL2LhplgrEcbB5BLjQxI6LpUqGLTRPq%2BEN9hM%2BZEAEdTAb8r9k%2F4NcmVztkVkmOhr%2F7Ad63UK%2F5ZTs2lrFmISq8ISRqvgIQ%2F9B%2BtO0JI%2BEDNTHlTHGNNCSvC%2F0V5W58AQWsYnf6T5dV4VUEAQxCipB8ohY6uGtnTTJj8&X-Amz-Signature=9b47b2f8358bc75e0f2ee620e3d24ab0bfa422700f920d61086198335ff6ad90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AQXVOLI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIDnn6rTboSQTBKhl75c%2BEVB3c5EcnLZ45UJsfC1pUzWzAiEA259G0ufJby4GjPFsA%2BDLYw8lAMjlkcMpWHRhU%2F9dzTUq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDBqWVlUGLJeQxK2xsCrcA5SfD09itwtfDWsKN23d3X70Si50adFC8zpH0J2tevJLLfS1Y1S7xOIgz%2FkKrPjRrry%2FEXErd3obr0hNEp6tKKmzU02yw3qh3nghlZ6Pb6CEQJ%2FK7xCmRUe0QfSUA%2BespvhVlTUikP5DVG95izgBPAsmfsL9qHiyWHbGCKSOP5U6%2BkDz8x%2FktveKHSLJ6V2Sz4d0tUozOL8imCORgUXHVRrwEaPmRp%2BeycbFbtiaMtiMykVcaVIpppQ9FjizTGevg11UF2M7vZQFNEaIYLRTzkIKMaS6iGdClRpSD%2FM8MdM7HcfcSKEAqdSf%2F6DrZmkLxD0TQcsYcpu0imN%2F9%2FOwgjqgKBja5sk40T2Xs4bRdR0qJqfYIxpilogP%2BEvq9hU5vVdYkw%2FmakK8FDUtI%2Fxmjrr%2BcmnWxaf9I3QKW7NlHRSe1seTM3cQUx7qfmTJ%2B5%2Fu7BNHezxd3ddYndSaxazzsA8w%2BiWax1uR%2F3nvv0WVAC0lQ%2F7qyWQVGFGAi8aAtVHM6xAy1qeUq8uUwITO14jRKW73PuA%2FB7MEuzTtn8umTVlCpjHgEO5a3k1PeZkuW4vWKzWOu5YHq4R%2F%2BNc1OI%2BspZxB2ySMoeGejIEwJeBpb7QEaWJA1pEQynhQGuLYMOah98IGOqUBtY79O6DX04LrN8mXjFnkG8p6aKXGLyBd5jXQUSN1OS7Ox9F99nNXViOl5rBmGaSkoGw0FxYOkyaD%2Fp5qX7OMViybdmLUiIBgfK1rV1%2FO8aPREwufDxfv6uHVFlQHfPyUaGDzNza4q%2B3%2BJR4iHDXXm15H%2Fj%2BF0%2FMMH%2FnEbHbB6EH1nF4AD0qhFuK8ws%2FPDxNQ1to6XHLOlJThL2eAnk6eFbPDQ3Jf&X-Amz-Signature=5dfcda5210e8a728dd187df5b7df076a35388061e2a9da8dd4105ebe6fc08e69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
