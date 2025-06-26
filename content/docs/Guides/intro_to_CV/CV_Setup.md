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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEIMOWDS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDPcWeJR8luOcA8X8akVifsmms824epaxPgVaPBbayu2wIgaikBD6XAUJSw%2BmOH4X2FSzrHOrJLwyrADh%2FTfq2uKh0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDQttYhyN2rHuqXyXyrcA3W0i%2BxR%2BQ1K0TSS2273rxH4lBoQr1Dw95aheKDx4VYWsp2OVVEPbO9UqEltw2AjClepIzcZEhMVS3C7uD1EqBOTnB5Mj6ABG3hJc89r5eNvEpKw%2Ft0qmA2QsNGCAHwfBU1WaX9QH0Wek5VGo42fFQj6t9bsUZc%2FDlzDjxiRnIclUV3NP5GDKz%2FKYNK4NITV6BsXSImXUMjWsKe621EW%2FVuNcIJfHVEnqqADeGMgS9Psy%2BjES4G5MNMeH7NzTokUXr2ZhbYhkhB10Qp%2BtgD7OqTggYMUx%2FlqqhzmHo9%2FAjmYjV1%2FNO0ZKJ63M02rBzHuATKSghIzUCQaFNqO%2FHOqQWGRz%2Bvs3eAVGkujrYXB4ptfRtOycOoX8UyqFZaLGCWixu%2BAZ4ts3i7%2BxnEQre2GAweryyHUO2aboMYdahiLZt8f%2B5xeKVx0dSvOtOIT9PaU9c2t7veDGkm6prtqpBjGftRZBx8cIS0lASBXO%2B9%2F1a4jFfpFk5nGGEJbyxYg3BJsV%2FohMqd1kv80yl%2BMIHrrWOGVZ1e5Im18M6todwOZBRV6claerQ8XyoHu9KqUqShXKIVHtiPWeJ%2F%2B8F02%2FN8LrDaOQVaHOinX%2BeeNSn%2F%2F4f%2FkSqg%2F0097yZ4wgrekMPeW9MIGOqUBWUtuQH%2FmUTfYpaV0ldy8xDpuzWcKERErOPIufcb2iXKtED4svuAlpBpWamtoCsMnXXrAZO7OSnasjJLd9iTxyxofQ%2Ft29MZGI56%2F%2F5UQzfAruTxebbZ5PyeLVZ%2B26pAOj%2BBdZUUkgTN9cyRvkYnNDdIWtfvM4JQleHwmvG%2BVAY4gIbmuTD42N1G89VAp49og4OA3zSfKz%2BITlz%2B%2FPtBSKbhLJXVT&X-Amz-Signature=a9f53261d6aaddc96891d784ee48a50167138704b8813595cbd57964097c33cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRXUYRCX%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIA0gasm1IUrAKS5tv7j6YsZfS1IDO9LESLq%2B9ouAltH9AiEA2Wu51aINmRHFpNYsJp%2B2AlsXmT4DNCP8QzSXOr3PQB0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDPazfIFt%2FBQdCs0qfSrcAwgQDBQN3Lz1sfHnxUB68Cbflb0D0JZn2DP%2FMaaSJArpED%2BSa9iSQbELfQ1ifthh7iiBaVS5COH6CiIn1YaJOzZ6JxFpbTdWfGAQuSFnyOINIUxIwF%2FYe%2BBMDzXyxsL%2F63WXq4dvQoSxmYrsQ3TpCQTkgy3HMUKuPgSzsN4d9WIHS39V5C7Gg2OsAx5M0nKeRzwOb7aF3JDBLcKLcA5wysfzgaBdFSLPQ2xmfu%2FMo49BWkKDSzy0OC8yOmg1MydUf3j1O5SPfOG9e4IaR7ngfvZlEz7LNW5QTvjhgsTA3QrrMpAeuBF4gbW5zLVcWFVItwc2DZwGxmQuFWpy6YCGEgz8Q9csUq6V5GH9HHsFc7gHsC5MWp2SV9gKuzK2zhKzlCpYTQMVhw9J6HmEpPV0u5rY2bo50iKYcqFgbfAu1ngd6RawD1DIX6Dr%2BGeCH%2FrWEpn7xC7SAMsv4kRwFJqT3zLbc0d0iuuC8oepvWUipNzN94b5yF8%2BesUzDao%2BvxQoSmU5I445ICPx7KIx%2Buqlbq3GWgo1AMAACD8GUXx8%2BLkMrht1J6eRbwLx4f7uH63o64IT3eiaaSStcEh%2FlmvOtCHp90eSHXSkCDGOPtTzggGAqzsD2PKOUZFfnWA3MKiX9MIGOqUB%2FdJdmmv7XRXIXJQolo89TNQuU%2BzNOXyCEBU0nVzCyju%2F%2BiFxw0XEUmYZB6qhtggKWLxLfQsjsBZHFhqEVSYQvp%2BfJ7AXWW3tljNjDuIiMwhwKJJMdGBWXIw6KG8wcITqNjL%2Fim2GXAS%2FmrR3aoKVrn7b9%2F%2FuLJ%2BoTK4OAjbRWEAZKH5rU8w2FLxVhNsCSYnuL5ZDnlFV6mSWI8ZlQKO%2FEbLesMwV&X-Amz-Signature=0935e32e80aac1d5ee82078a8621ad5fb2395e40ced48e74be132f80660ede33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
