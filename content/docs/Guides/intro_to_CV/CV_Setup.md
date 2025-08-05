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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USKR6DLU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICiYvw5Ea%2B7DjPcXE0xWOdJzcUDkQLMecxw3wo7BddhUAiEAoLoJlSU%2F2203t%2BMdjLSDEJL7kQKXB1Z1P7NlUgSKhsMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMcTBKEdrtFQKZcCcircA4BeNbaEDondVozNJvAWmiyOx6y2s2cxVeRAU9J%2F71QRbUnidLVHeBWCpqlL7ZOIA%2ByC%2BVJ%2FUTRWh00R7LcpW%2BHMxvVtIjGY6w9I2H519wWJP2z0IwBbsVCIfvygjGjWkEMJ2R7WKO3h4TfvtawZ69n5CRIX5g%2FXgOLQhZk78KYu9%2Fu3SHOuxzTTQUzuqZDUb9e7b%2B0zGdiHKVQJpX%2Br1A4W%2FdpI7s02g90Lc2GLUf4WV0dXymGS1ao85XDMYsQ4Cw1C2nv1LnKWa2QR4mgpAJa9DCNuYBZD7Tf9WKfDuR0ZYxBRxcwftxVStpPGO5YFBxidJ4IDEMmKxW%2BGL1RYYSjtep2QCnx0OXmxLbj1wkh2HpgHSGWm2Zvv%2BJydM4dBxBxa9iXbG8G3YBi4gNSqCAV9IPAHc22zQaQjLv%2BRjPqve6EjpTNqmhRhizT4P0gh5rkNLtiwKD0XXsSTgW0iDohUbcM3M98j8Bc1po17jxg0PHDR2CsQaqKqTWShJ4Jumb0kEMRfwhNgP%2FwmZnokwTsS60%2FjzJrqTSdlpxYdxDamCK3NxRbI48ij3FZ7qOHFU3a5awWXUEIHQVqGp%2Fl3Kr64Sm92theAarcQeSLNSeOxVc7bUrtcilEy5EjMMOrMyMQGOqUBeQl8iSZ61b3IZkDZxyl7UfA3Rpafbt9B1ML2lqoOAqT3qzsnvyka6ySnydBIlDZSXLlphn0ozjKfcmJGW42ACv3bw2G8ZX7qQ3MwNhIf1bvOsDN9C99V%2B6Pq%2F3Oiru39LjglGYIZbazjWpb36WPWjBkzcChOwX30AZc1HbFCrXWEYNabhJV8jxoc2hpL0ti7yP6M6jT%2FoVaF3h2%2Bj%2BFvXZUT%2FaLn&X-Amz-Signature=9a9e51a3b2850ebd19052a1a3f2574202f782aab716640502cc1f7725b0173fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TCBAFLH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGkaR6t6Mlx2oNfWDrEmM5qQpDXxhAi2P%2F%2BVxkrUd62uAiEAsVv7KUoQi%2BuiykaswP3KB6ZbLDlzGFgWf2PSZulTDy0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKxNVEkgNwSxk3bA6SrcAxp90FPlJSEMfUn1bRMC1LoYtXysDh%2BioA%2BcZQk6gbi9ZpiKUtpFlKBcSbqw80bZ1rexiQlX8CCaIUMsrzHUGWLzOu9ITNYa20mxB%2BhQU3hN6zDP%2BvzD2BPOFqhwK5ITXm7pDhFHQKmAdbGQatgng7akfi08D4vqoI%2BalZjHB5gS99rnlLGQfpcRd9yUPHKcxZSqfmJ2hh61pg28nNKZylU3p1pM54UAXyTXTbCJofZ5DAQv32bJZemMZwl0TxKBclLVTL2mDRjBeb4gIGq8QImTifiVF4Kc9Nt4PAZWWoM2UQjJtPrabzZZvK%2FgniAVyKDNhBFGXp6cW2SxDTx74sKiqg2RC6Vvl3GB58T3Mi3HLIlTUpTEJEwULH1lDtmHAPlFPbawzG6Rbt%2FN6ukXR4Ppfl0%2BFYOCX%2FzjnxNygapyAq4IuFBNnj4KGZM6zZ2GWWMzvrzI6EZZbNHDDTVyvLXtYDuGdD6sjE0VH45aBWdUH43UiHrNAx8TrjvtSubf2BopXa5QN5rMIaNvMkaVux9h88umkTVzi%2FkKGQXEynJ%2Fm6nuHUbzs8Ic2UKBPnUCpGLoWTNYSV%2FQ2imN7C4ypzWY%2BzmGGACziqlu5HqH%2BkRxxEgelJ%2FZHDaib%2F0lMM%2FMyMQGOqUBmG3sWEcJ%2FN55EIZQFDICFZB6ptWnvlkwZyp9IfvrpJfjONDPmCym%2BJBT9qkFNAK9l%2BmRb1XFBT%2FRid3M79XtGkCL9uVfB%2FZ9XeD%2FOJmigwJbQTt8Ws2z7jPjfR6pgapeVqDCNMfcyYFMVQ8PuYjbu0ZY2d9zDgc7p1UEuGrW1CmxC4UfIhZ619RJsc8a9Hk2X0jUAvA%2BQNJCACfYzIvqOjklE5JR&X-Amz-Signature=4aa9f551f5f89e5d7abf9c9f261c7f625a9cf3594172a44ea83d53185219df4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
