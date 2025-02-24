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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5KIXXZ3%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRqiT0T8mAEnXeG%2FQLYl6Qop6kQ8%2BvSQlNWizPio1ZoAiEA5JjgLLCj3nYEWywJOxGiOSdSyKK4x2L0PKs8nhpOmUUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDAHdR%2FKH77PSyPPZuCrcA7pSGAXwTHrmfvlBf9a9e5cfhAY8cOnZB0SGhw6DlxClx0GUCI12quisvk5gGt6ovggMqn0YRUHOVxSSVc8sQXGIwp4SNBJ8DydFu0ospQQZahzcvwjhhiB1LY9nbnO%2BKWPTGD4oDn8X7hpzZoJwqZz1PPasldO%2FERTFI31KmNMHKZCAibqlKGK9qIJ7luxX7rZ4Jv24xpqA91jI0pz2ir%2F4lsMq30gPf4YfyECtG1V2VM5JlWcJ55xun8qXxEGFIiw57h19RkChB4ZVD1a3nMBdytZX5csjGUy6UCDF5%2BLLH2eROe%2FGsxUpnbVKeIhlwXEDN5tyAUrz%2FsHbcmhSoJBme5tWE2A2RFikz%2FB2X5CkqhfOitqK0BiOzqdKB17835dubczdKmsEu2jLNBcm2nSpm2Sd37Ku2Vqspx9R636kk05LjoEW%2F%2Fbxsx16mFH7HEAZKizFmaB32EGyYfgEX6EGZ%2FK5Htc4N%2Fv3UDnGbRe4DMS%2B06N6bOXvjOr62jB8zLE%2FbPzcLNceHZDoWgmnWq5dt1tMHFwk4nWj5aZ%2BokdO82mcCeR%2FjRP410xg6m0ICnREFtA4KQn0M9OpVxWkNcS0xkzDP95omRNZiIOb41viPK%2FJRGVeN6glweJvMOrx7r0GOqUB1g%2FLMTzUQG87XSPEB49hLa5bwY%2BdHut4dzsLbTmNfbHzVfRvdJAD9auhypstcKSzV37Om%2Bbx2%2B3bY17Z2hY%2BuA0LYFUL%2F0f54HTuSiySE9WZP9AvuKxZvQhP4WRANH6RgYperVK%2FSw6mL5eBtduF0r1Y3D7aCF0kf640T%2BUeS%2FPLwp81aNDjC97SMRg9jszDOHaDwxqljJzFUMGLQmXT3Alt0Lxv&X-Amz-Signature=70c3b8d99b7c190053e74f36170081cee5c52c212f2f4b9fd1fa72c06dec9801&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQCZFRS7%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD49%2BJevS5frkEmKQJUS78Ka%2Fqf%2FjlQP8yRH5fRMI3cSgIhAMW7S%2BMcxIv%2B1x7R5qxcp1L7YDZZpvc1jRZcww%2FQ5bcJKv8DCCEQABoMNjM3NDIzMTgzODA1IgwlzoMHbBjiTgzbfCsq3ANiGOWJOyejRcaSiy%2BUfEQVlQToiV3zTb9ONeS6ZZcpZNkB6fav%2B3es7sHO%2Bcy25oz6xXKSO82H7CJ2YOAHhjUp2qUWWr9RWVxIApqKCaY5VOGQ0%2Bgb7EVm6Ac4tB57BmRkZXpBUxb0xhwAiF6Oso7hduKmAn%2FVhm1jRk6njYnvtcg8Gp0ucX5uy54lXDmScAFd8cF%2Bcamg5hlBst3FmGODsmtG0ctu3%2BZ1%2BC6Ds7MriFEcB%2Fjzgj4pYDUXcnnJiuWcv%2FLSYdDhtbhm3nVIKHMoFjP5cCtGindbPa1eEMCtwYNiasNtIlCvnhOC%2Fzq%2FWkaCR2xv8c1PsuqKwg1PjH1s7GdH9dV0O%2FNY3phyXFdE4BxlNqIkEv9GBiXtv6uTiJZjcb2JmW6hDZ3RVoyI64%2Fwvbp8q8UXlGUT17GAoy17cZyI7L0%2F%2FgcGXKu7CQWj2qO%2BI0E0ycy0uIMho6xsZPCnhIrZetqXUOr%2BeL4EjKrCG8YIgwHzARqNa0orSCThYHIQrCh2FmPVpl%2FROXqENoLCchIzmbspr0nw0RtXWvukysIHIJAd8COX67Ayw9YEvcCV%2Fu45Ry5Nll3pair6BG2NSKxtqMt%2F7JV%2B5ZjLTuSbuOoX96QytOBUJea2FzC68O69BjqkASJ%2FhfeXliPbcYE2bRa0zX85YynEu%2BtlkVo7%2Ft0fDuT6winT5%2FrM1IKNbrwV%2F1pUIv%2Bzbebte1cl7T2ttZOeJ9%2BTZTe4UJHuBp%2FmAD%2FUkRBSRLoFm0%2BfFqDz%2B9xu4FgMFUXWnO1w4fK%2Fxlh6Gseh2Tw%2BDDVAX3bHRA%2FADbhs5JOb3i0hHaDs%2BpNrB924CK4RQsYWs13lC2HZwGKkYmP9iNv%2Bn8Yo&X-Amz-Signature=108b1a90ec988bc299e19ca83dd23d85c49180bfa4ab8444b9217727fab2cf07&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
