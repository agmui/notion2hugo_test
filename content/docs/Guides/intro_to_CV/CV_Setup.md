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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HSSGFPH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDyPJSs%2F%2F7VpJ68CrFzfLL9qFkfCo3T1D%2Btrc6ZQVe0ygIgGkBM%2FQq2bxEJjQ0chAfhI0YDTqWyNyQwWaGRWN5GFywq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDO%2BpsuxYNhsqwte8RCrcA04hPwgtQFnfDHPYf0Jqk%2Fh7YO%2B3pw1PV%2BpqXk0uRGYvJCwZNx%2Bhrum4%2B16YFEyM%2Flt%2FqhhpQMOBIIjFwzbLddxwFEUGWkNhTmz5OI3GW8U5EyuhcoROoR3yvKipxZP8CcHlNe9vXCY7Vk7c5%2BpW26xp4L4iIf5eiCizJRofYMrBeH0bRzzp4NyYNU3hxb7Giml2IdrAMpiSq1u0L%2FJimKcU5i3svs8YezPhQpRabH%2FWJ87cd2udwHOJ8YlJRqi4DKe9nysdcMqu7l%2FP2i6QrC37KwyWYXEuci4hMQ%2F4N%2BDYL9zJhyc5AuQbVnbeLXI8Zy9NzKHs%2FnwrSsRkwsfPP4EVqpf%2FTsQk2cpThacnO2NB1sZ7zcIiGPf29mT5Y8JyxOBkzrxibRhjfmROmLxFtzPMH4P7mG0jsLbuag2eM9xaGjD3E4aY5PO1qMjlItFDbO4lgS48ddm7SIcnK3RE7wtUbE9lebMcl3OKkMHJ6czCLR8x2VaPMBe2E3UJjFRPbKfuAkHaCQRlo6Yl3ES0cpPRBExZUShL1Kl0ycHb7R%2B52lwTGTX0SnzPEBL0FIYEyP0rEFa%2F%2FFsT94Qo%2BtYbJ2Ga4BBAJyO67mLMup3R9qWBKAd%2FSlDe6ecF%2B0XRMJCWsMMGOqUBa9HTrog414ESgr70zi6qvO4atyH6SskmFerZxwmvPrTpfW56AAZTviuKl2AaH3%2FvkFWmyCZ%2BkHs70X2kIjxce6GqS%2F0h8gvxdRqqMQ5XkLXUwLXpABKJ%2BtoVj2GzptsyqlFItDvVsPd3ULwJkiVV1EzkwL860r%2FwBb%2BnrG%2FNlY%2B4qQyK1V%2Ff7IddATrQ9gXMFhVXgO2IzFwmysxLC1n56j4H8GHy&X-Amz-Signature=c280d4f74ebe593690f90e1d94fe2a3d5697d28f7b576349c913c382c8e659ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W44Q7HFI%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCtVoG0uj23jTftikIXw0esrfYlPvHL4lscXEVRB9oZ%2BgIgARUxtIB7tDFt0YQTEEgE2rR4gcwmjcJjhGWBykqs1rMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDK0TknCU8UZm7%2FWhiircA9yaot864eYO%2Bd3H5v%2BFb3BiCLsjlqV6vS9mXnxKs31BNmgnQttlvtDUqFc67bAlZNC0vc0lxq6Vg7sKQRobYrmyycrAlh2RFjz2nlY0F6Li7R2pkHhxGlDBy5ja2DWFIQhn6F3bs1KgfPwszy8EAPEm7k666Zms7rJT7kx%2BgR%2B77PMqqEy8aCF%2BjmRHSaeFCdK9Befp%2Borsc3Rm6ZrvjMsFgfWrmqJMRfZD1b0sr9qy99%2F7eZeVoLvE1oeAf0bvSb1xiEVcHywEguGeXCqbwwrV8aRH7LIguylwhgbdpHTZAmuE3zFRQ6%2F6Lm6n0B4YIU%2FeVtUB9BdKGw1incFk%2FxJHn8tp0xjnQDtRFPz8f8dymUmhD2Y1a1qP4%2FQb3DNVJVl0Z7onuTmZ3qoRQaIo%2BAELPVmFdkQD7CqjIIG5QRGsz7CmFGA26W7lkKyWp9eaKjdRyCtDfp6QeHR4TtCc2vsl5uZXohfDLcQPssyfsKsvBDf9Rc7UFJaa%2FQXDzFp3e%2Bv3%2FBB%2BV733VJJtr3ZIj53CloDFiO8dGa%2FI2HZxDAv6tGEJ9PrylD3T27JU2m53V57EdjIdpqMRU466zfFwxa%2BRXGNhBLATZ2fGz8nO246xekDPu4LfNMntVrjCMJmWsMMGOqUBAU3eRGXsHcidKGZyKhvPYIr764dTIM7L7aKmWD3Odd%2FnUezfqR6%2F0TqtvSi8y63kSuGHo%2BlTmlOdqPyo8kh%2BJfuo%2FAKBP6j1xRvdhXtc%2FcRdqx6w7x7PzhGrxOck2R819wBEY4H2HdeIweMVNuxNFFUy2uopF8Bx9oa5lbCl7%2B2WKT5SknopMKI34GG1CXUfUwUftH3jw23CIVV3dNpXTG8EVtvK&X-Amz-Signature=d8c120cdd1ce2eeb45b4b4fd352c10cf483b699aa9b30b4517cf134a3f5eb25d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
