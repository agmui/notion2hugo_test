---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-14T09:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-14T09:43:00.000Z"
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

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVH5MCHS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDbd%2BnXdFNCt1rIxiZ%2Ft1uWq71mboIKlwpChEy%2BE%2FTRfwIgOUBImesLZbQnbdifQqhgAobLVt75Trr5oob3IDnAJ6Iq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDOhA2bh0JemDcdyKCCrcAweHdeltrhu0Edbafl1DTrYCYVwEeJ8V0YPdq0vh3dfW9D%2FvjQq4BnKu1cixkax9%2ByNrhmzaVKczfpLN6MpUSW8k39aBzeIOomyOZqVdFz%2Fw8WxqaECh5C9qjZKDXIb70I35HAhw%2F1MmfmakAdeAf8XMu%2B1DWoGlQv6co3uiV8u%2Fs0oPJajUOKCSa7T1yF14Iy3zGawG7e6m6sLtcRx8y9tkW8Bf39kS6RYk7RXYTvLUBAoBvjCBUYGOkdJelqBlM12iqHX7b5VviLHUt0es9hO%2BYEPjDQjEIKxS5RAmGO7m1mKqREiBJXeXGJFKJhR0jJmNDxX5A1DG3Rngl5htVxTu3wDVl58qJ9vVvCNgJzmMTKhPOLWX5eRbUup%2FhSEkwl4WcRz1aW8xKo6GEp150rErSOjFkJRhUo7CL8EK0HNieAM42wp4a68VyC%2FV5Ve64PlBNhTlG%2BF3mzTfrXhbe0bbzkCiF%2BME8iWzbz2E2KBFUQx2cuNxyiEqe3ig0plJ4ayXp%2F%2BmKiw9lmTZdBlqykRb6TQ2Xem6my4It5BtAsWWMMfhKvablruUQLekKiMZRoVSLifLBHgqjL6gMmQTVF6Qm%2BjHnSJIOd%2BxDvURsVCtF9nhGymPM1cNJepdMMnj%2F8QGOqUBQYBVVKMZkVtYYibfTpyegGlOmLxpuPv33SHsjOg3ZTpnOIxhPqJlP6gfkEa6btN2xha8ocmKDoOuacDJG%2BER1tug%2FnBbi22Ky%2F6lMVNswveTehiKnFseCmRV6osRNwd6K%2FPzOSDhf2ag66KVtrwz0wMlAVPlInPmPsqIxJXGGnLiu67K0TemLN1V7aL2y2t4zNJ6KfvWgwLwCokuI5hSK8O%2F4DtA&X-Amz-Signature=4efbe4a5f4dda5610524e659fa52358a37fceee021d96763d53f51f3f69db442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBQGWEHU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIC41ppTWm9iepRzc5iv5I%2BMSdyCqmoPeOR8mkRpVOJZoAiEAvpOkesVvNMPyjlxpWUZbFIgMvPS%2BVS5BFWVw2YsFm5Iq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDP83cNcfFOsKEgG7vyrcA1cDXxDFdnS6zV9HB38TA4R0HST6IJgUJtAwrn%2FJbbMQxYRi1J9u%2FQhPOD6o8y7tiqgKKHZiU%2FpYsSITDMORL2EkeOWS5ElA3fCZXaGGvSmEFON6iOzb80O9gaq6QaNGP8SFDYi0WaKcRgIQCPpaHBpoUiPrAej2dkW2HZtcyLfMq5WsFfBd684hZUkrap0V2S62u5I5K%2Bdh4jWaXOsNaielnz3a5Qu0iMair9SsEClUhrW%2F50rI64epEE%2FrcVwkhxde8SQqWB97UMllndRmE95hQ8rMSDvDYnN7d0CE53ahGSb0Dc7eU4%2FdjeGNipMTgrjBrDF7JWocDRlGg3WMQkIrD0gIzTnh%2F5YRkNcMxDJdg8M15UhEFkwhNKeM2ris1GWwtjomv7ehmV33igZpeAcI4AYL%2FoER8%2BHJIM5%2BRf1nHJvlnOmt9oCENvqc7bLq8pguNPdL26vQ48G5eRYySxMvbkWZtNT%2BpSVHXk7SVepTb69TMg3Mi7fDFBIzll8M%2FOOcruUwpJ%2FH8TZpX3OJBVqXOIZSuoGsFheJc5xsMKYxOtY8MmwlULSTd1SAHXfZ3x%2BzhkKme8aBjnbJBCXzvHBnji5rnKSoX6%2B5rILSVsMUE07OAsvYvTI9RlNNMI6LgMUGOqUBuIpFOvD%2FuEMxurL%2FtGw6C22cQOrvVKpZ1EYwGZPP45Ah8PSgovYS0WqnBBpHSKjqLrUlEEAxRz7qhQMPtADHYLLdQ45mBholR23fhLekvo4hK9xiS%2Bx735Gh75%2BiSaeew6lZ3rTjCkhz9hEtUo7q6lI3qTb3vQGZcuYqZK9vLNS%2FzU8xr%2FLvxwI5v5ly21DHO6Hz%2BS%2FALswzLblxAdaM8NT5xSR5&X-Amz-Signature=d4803020d7e76e5e7ddf9d4513e249879daf616b1ae8a5b9ccb2284c088de41e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
