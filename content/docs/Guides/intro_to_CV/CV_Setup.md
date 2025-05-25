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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5OFVSP5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIHzJTvKdDToxvNnfAt1aCZw0ghnzlrGflqqsZ9%2Bs7n%2FNAiEAnoh%2BTagCuMUXvr1BO1DpsY9ibzUrh08VJYbgj2YsGUcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDIBe1nYPNzpLvZSblyrcA8%2F3ENd7TFnJUT1z%2B1yuhm09KEE9EZsFq6t4rCc0O72l8hhTfooxP18aY726NbEdEPJdnKltSORp%2B%2BAiXt7yKWZc3sqoGmiK124%2Fyl9g1WxKLDWpLFbHOg6Rodjow3kbXckmy9uSG1kLU1V1u5C4u8d%2F%2FvZghkIIu8%2BnEmeeeIsZN%2BeSViF%2BLI90tROrW3Xf8LS7qaOaWUUysfEQiN7vnHXH%2BBdF1j3aV3M0xfuBG1ihP55SKoAyzk2BPPXPBbMh7QVsRWMZRm0PeVGTl6s0GsMhXdqUp5lZA31%2FjYLParkb69A0LHs3YLPzR1uLhAiwZl8mIv1vT4GsGpKk8FEyDY6WbDd0GmKptj%2FSxJtMw6o0tPOu31kXKb4p8%2B%2FuX4thl4NL%2FDn2OP%2BYi22OB3cvDYzxrbESNgnQL%2BEdfKn7j04y2eNuWN9tIKsi01XZvn%2F2FqGIO%2B7XK%2FBmLVLb8L2n4H3NOId3YY95aP4rNGIAFWXix1qdfQ6FMIuzUMeqQTJ9g4A3uu3CyKrCr%2BOkexA6ts3PlhY%2FTCCTMeSpUQMaj12CNqGtMVotxrLYDm2Em76h48P0UEWREjoTb%2BLWxST5ps%2FsoITkM91vs%2FfPHStmbeh4X9V5QqmHpqS43iRoMO70zcEGOqUBymaQCY8zRksUF4YE9DuQQlZL5Hi6kNwpiuuBXRP0toN%2B3yddJgzmOZd%2BdRPOiIzR2zKjKLev11Uaat82P9iwLen7KfueO7fr1uqULAtu%2FKQYg3BLYX0Z7rutlJ9BoFOdq80yJqmhdjnHouIh0FpbBfJOlqr4bz%2BOkKbG93UUunMOgpyyg2mb0%2BvXSqdOWWgGB7T%2B%2BcWIyP%2BIDSpjbocc0jADFugU&X-Amz-Signature=3258be1f0594a7d4b7b791b3dce350d2e90bec9169dab2fdf0ee6f2bb3c86191&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4Z342OR%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCeL5ghtALKfepY6xIgKS2jvgeKflivn%2BDd8eEMSRIuVAIhAP2Ki33iSJk6gDmjNTfVclOUloGt3jmu1HOZrfGn24lrKv8DCDUQABoMNjM3NDIzMTgzODA1IgzzyQhc7%2BzXlVJopJQq3AMXqDurVQWI%2BkmAlWbNGZUFlMSPXvWShP4b6Vv0n%2Bj%2BfEMAn%2Fmp4UM3QC6rmnfxqagyuxM8GrJGYbUiVuyzZjiF%2BsYynDiCxBss59TVVnM5saIEwvz7WKNogiZH%2BAPZ9k%2BWudPsVwKge7dZksPV84WKTMgd2yVFmoTkzrp%2BKxxdgpeDbEipDmPUYTXfzVNJMvxLT%2Bo9DM1B8VtxwBn03WfBcDKN9WfPM1gr1utVIePpeQEPJ6obTtdCYC4SK2I0UdEXoGMiqUi9ffocdC3JfAzuZfJSluXrVN4HORLPH8Wf3UeXB%2Fw7Y3FB0k3NusqGstVz%2BBSibMv0NQ80KoQy29PS3Z5u2NrQqY3KdNYNMnR%2B0dVxFDDqKu%2FsHqFey7qwUFKEjQl0BctsfT7vhcYfmc7z8GGvUJJLMVd9a46QfBOGaKVRAiqpjeM8eO%2FCdSxJlExDZ%2FtcIIcLWaWmTyTHheHjnzdEJ7WG2l0KLXkiLTLvs8AMwOXnMEK7PmN1c2QWfr%2FghiUrqcZZevaPZGgrm5XGD0CA5ToUlSDRG%2Fu1NFE767emuPsF6PtfCWvfkt6Maq6TnqrwQGwPjkbZL%2FFktJFCeK2sCBq4gHoL8Nuo%2BxdtKrhTLRhQFrSvOzVNrjD29M3BBjqkAfyeNqUDrD%2Fcg9KsTBeN4JYtu0PfjO4Im%2BlVWa9gw6e1K7dTJPEgqNEToDQa1Be7grcyeU7TCivZMaBKhcUyIhjA4%2FLIlc1J9OnZTP7V4UeL6eXf3IX3w1wAnlJUVpZ6dMllgE%2Byq29gus1r%2FiDShmTjy%2FjFYMw7DqJoRoRIi6OujdPdsH0l5x24HPSw9tZutwuRDWOxDLddzM1kywooIBegJjSo&X-Amz-Signature=2a8724657c139818ecb18bc4f104d68787aefb74c8aa8165ec770ccf8659dd9c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
