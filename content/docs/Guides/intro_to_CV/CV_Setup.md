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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYGLW2PI%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvogh9ZsM25FhXZ2Y1d2aT%2BpLqrACR0QLxbLwO5Rs8DAiEA6Rfe40loNlKgvEaTusT9twHuI%2BRki5KHn2VI6FVAP50q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNGuux4Q%2By84JQlKsircA8i8hAYROv0MZ4atc7Z9RAbv%2Fp%2FENgSV8tgv6vY%2F%2F9jYJ01NEQ906xnQTR1CcejIrP6I9E25lRyBkGTXSK%2BgdEyDyBfqWSRQ47bAIyfbCxfHX29rGsT0i6a5E8tBK1GOohFjx0RkoOPnPifSmO2Oas2VJLifmyAoPvT7Q8fNZ%2BLnBlcCcGzYkoS6owvd%2FlezEv%2BH%2BChQSxY3uXQ17AWyuet6vNP8FSoEJcuxNNRrVDhpmA8Ta%2FtbqWm%2BBZHP7xk%2F3HMQM1GeYxRNWOddjOuiVlG5z3NSngeL%2Fs69fD2smUKhAENBZj0cJzTth6g1CAuAwqqvPiepTwwjnH%2BfUIA74EL0kCs5laVDiELVWyx976OfMO%2B3wlu6lP5hdPppZUNWvGMr3tAOTiVdbyNs7HxakxGispb11Djs0TX2veLG93C%2BqTTmO1RIRVXMdioG06oX6RIyCwtRb%2BEzbbcxBFS07%2BSGW1PxB%2F6HhUlARKWJHGoFrqaa5YC8KfoUK8amJX%2BWasFq3gSlWs%2FZjLLi840v6hEtGTMSMbWpMThepJhiV5J1QI1%2Bptvvn%2BduJVcbhWR4q617Q%2FHyH0uT%2B97FTOadaJ%2BnAOPQkMDz7ox0Efp8QyAJirliusz9AgbNGOxoMJ6M8b0GOqUBgsDHXcnjO4zbyip0FuVqy%2BHoz4DlX91imuDuwgDBuE%2BJLp5ldw%2FxBspzFgQKCDK0dWSBNyDXWNP19GhuOKDG64u7nY31jH5xN8%2Fq5yZ67f0DtIgOsTTxv2ruTZeBdhKWCam6p2mbwMQ4S20ODCHXszNdG79qSCQ9HXeTCAEqVxfppQ2dvAU%2Fa6UmzjtsPvmziRKB5D%2F2bZBeTooDmCurk7Fuy403&X-Amz-Signature=1a5f2c6f000773a42ff85d4c767ee1e01195cafc79174451159bd3e363cabfcd&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6BX5DX5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGV7BGTjGw8kBHVpYlJ0RefUEd8pRzeI6sGi9bKVdWiwIgeq1v%2BiEr1hP0LOS1WDYYouAF39caRPiHyFIFbOzVU%2B8q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJOzrXQNdyRivYps9yrcA2nSvsntz90DOCsVMCnCQmkRlv1ipB3ka4IA48YWpsl95xpfDxW8bclfJScsa6W%2Fum9kAW4acDGRHsTPd6s%2B47cDiedc39ww2OlVn7HDSEy%2F3Qdr%2FxGFRFDiNGssGTAR%2FQacFdCElhzh5QYxzI%2Fdf5BNYwrTfukmZuN3V8yPB8kXr6TiM0ifHqg3qfRHikLLUfHU9bOLJRwW5haNVlKlU8Xwg6pagdTlU1aaYHSmoB7F6B7Cz9U8Sl4rOAqOiX0rxAyjZWWidjN2I4HNlLYGn%2BvsOittg9EkPIo66WfEbuTvhMbe5I5ZeaDjlR4rJ0RwPHpU9QPQ8GaKlnNouqln0vISa8B0w7cSum1mPIX31LShIcrbFpo%2BdcvteH0mMeKcU0MnpMRVwE8uIlZwsG7%2F5OYrVygmQf8dIqncIck%2FqToKec5qatO75aV%2BeUvPSGnUQPc0tdf0A%2Fedhet7%2BrvP%2Bk3qA7mtHuCtnMu4WeT0v46FEujAJTshL5xR6%2Fi2bc%2BwrHuGn8GQ4WtGSQlGoSkxFD1UKbfX66V1uMJevLJ7vd%2FUMNBS7vAhr1v4AmNXSt1hiInIveEpJ%2BwkSarrhASatngvN%2BDSGoWT5n3r3QqeW%2B7dxWSk8Vs9Sq6bmJ2pMOeM8b0GOqUBiiMbsetLrvbfUM4REOFT4qzf7TWv4QU8msq4qBqgVqD915M8k%2BMYsBmCf7gW%2FySPLTzd%2FA9pClfUEltynzCQQkYVEjS9bJHNfM%2B%2BAXB5ukaw%2F2hGZ%2Bj4WMaBGGR1%2FHGRj608M6ypeQl%2FtmFLY6aN0yJ8YzHejdQJVloWgxZqwBCq2HQmLyYUf7AGSdnqifLw8qaXfekRpaInEQZydmGfwn4cm1%2BA&X-Amz-Signature=93f9001a8eb886f6c9cdb79a8938ae799c0ca32b34e6b07d1aa89234f68e311a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
