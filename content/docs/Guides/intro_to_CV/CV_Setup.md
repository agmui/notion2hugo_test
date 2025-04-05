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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RN5IMVB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BHCwvBDI0G7D3XBtgzPsrtqD05rHmt7GlXozYP01nxwIhAIEZlIyWEtR31M8UcBnOl4dFbSWwHyfzNoGDgDATOfwiKv8DCCoQABoMNjM3NDIzMTgzODA1IgxFO8pNeClkn3USuWAq3AMhIemRmtj70LqbWeoQlH5oWmd3UJQeryItHhdnXSQwgjzzU9313EAVPsikd9zZhQQQ%2FWoZHfIgr5sWA9AbPS2ShuIAhP3C0dGYH%2FNDaG6upBrOMap5O3jsbdUK80ecvdiPMSpUzM5DZGa8mHBSYZEWUh%2BdszwCbapQxb4mRelWFQ09LqDdfB6MbcvYyJtezsWcZ%2B%2FWSPUkQzkyreLOVKhf6M3Ta5kpmDPdNuMNdnyX5zAbInwbVu2%2BKcR1EpzDta11Ola79eTIivG30MPZnymIyIkGLGqloRsfDmuvWNp6ADZ%2BJtRwkP%2FlStZWEb0jHy7Tlg6ioONOWZ65SMGnQjXTlW6bJSt4FbVlhuLNWfR7zylSNV%2B5k3IAAjEPFOgB1sd10hFpnmQVc9ypogkimC1eGpSMcYuNRplfSOqClkutd01I9OXiXChATtLGzX%2FxMyR4dNkayVn9mRLXXlJde6aIQsF4kys2zp2tdkBsZsYWJXzlHJxu3y%2FSIiX2P5dTzPDI%2BN5l9MGdK9luwdvXDCWwy%2FzKmgcrX5IVwzdXNcj4NwLDJ0z6FxXZpnTeb8CrEr0xTTo14F0C1bS4KuemKjrDhjLkLGmTY8x8ImwMnL7LkUUMgBNA%2FZ15irJDQDDr5MO%2FBjqkAY%2Fn3CDrNN%2BXeV4Y3WEfXV8Hg1JSt2oC7YKi6wtupcbwVRlhugjQrSeQqMkAgciDQzLRIziUlw59GPEfnkQy4mEZDVE1Tj5WR0dPGZtfDaB7fWubowLLWcKFf0Br5Iv6T0JBbOXxAu2DeC4JpaU13pRNQF%2BwcM2pDn3X9VN%2BS3orfV5FGN0Xx5zZyENuY4MiKzMc%2FVJzR1wHg7%2BD2ogtV0b4n0IJ&X-Amz-Signature=d8ac25d24c823a07f55fd47dab2117deed1eed234c2d72983cce5bc2326ce747&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674TSRMS2%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMuB%2F%2BpNRt4Q%2FtBqJsD6I5OHIVqPNG6OUsg3yGgy4NUQIgRfahZ%2B8HpClm0%2FT1b%2FjvySDhJIFy80HKiBUZUgm%2B42Mq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDP46S20LGIChWIAHJSrcAyD6mhJy6y9IUJRUK5%2FWkFMVsXe33RdteigsPA7SFpdbVd%2Bg%2Bt%2FGMbSJVWJENFfbV02ef6miSv17Gkw6ql0GwUwKxr1opNhSS41sN%2B%2FsuJziFFh9HyDXa7gEt4KvS99kOWfDwy6NZSZKjHj1qf5DFSxVlwQHcSkcw4lqmRDggBhVwrQTaMOReqs5pV735qlqRBt%2Fc%2BDpuKhEanDrTF16gusPs46iDpciw1e1Odw2mMKaES22675qOxtqeXOAqnyCT8fVFdQk%2BR2OShT3WUI4RS%2BfoaUHVu20xyxcUOwRWK%2FV98XcF65pUSp1qZtNYXMgsyGHUv8%2BXyasgcnGt54LcoMv1UTWFGaLxZMk3evfCYOF8RkDYmW9kKHj9H1i7WbxyV2P%2FAw3Idsg2bYWci06ppHjQgDrKA5bQizlbnt85dddD2aizkoUelMhUwsBjXUCCzeVBwNtB6q6pUQBcJw6WoMdTGwroDAUpv0LqmQARC1dFzODY5SxlwmSRBZST9wUhI5EvcytMhTOKRScmd08vteKRCn4nAwIlmMuxNmFMUEki2%2BQeyUoD98q9ifQoHwIUpt17mqWSqNUxamwtedtV4oVs6TD0MMZhrCIN%2BgoLLxiOOhC4MCeQx5da4urMMfkw78GOqUBiLqNjMtHgXWEb43TKT5eeWLiygEw3rU6kZ8VG84OJq2B%2BOOLfse7hZG1H6PkgkoJ%2F3g8Ij%2FXmYa%2FbvQt%2BICdk5VQR7FJE57Hqex3UQwjL%2F2vcPkPffCQfBMwoZWSy81ooeg8bXA%2BLslCvk51hltziowm33kHdbA8kJTcfTwKUNdJhknBygVDoQLiCKaka%2F5NKrcVwe1LBK9faBMiFZp2RS4MHy0u&X-Amz-Signature=2313b781fa28e2a8137c7a37929fc960281c8561d41f66b026cd54e6d319cdf0&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
