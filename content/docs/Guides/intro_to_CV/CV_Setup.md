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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHDY2WSW%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCICY6k2nHCCH4auqcjt3uwcNB2VWBgQis5ZxJiTZwa9WsAiEAquVsz5SmwO8TWNtnzBEUyqNDS6vr1rFjXERDdieYGPQqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYlsXsn4sZhVjW4wircA76LlqUsSpNDcKbfih%2BTw7tTHdj9KrdfmZuP3oXYwv%2B5ptYT%2BHLFpgYpAyprUqUJOaSDSzoTs07Mg12%2FgJckphc8T5Zgx6Bp5gtcwE0wzv%2BaTz8xNTuTHwqKtvxoVvPsDQlHENknFGcMqOXGTW2KYKb3VOJMz44h%2F6eAdFRbd%2FnfyRaiQhhpKjuQcxhKWXxcX3VzOPF9UE54ARMIu1kZ1O23roa5UGhTLngrTSlO%2F7nPNzYHsGtf9A89PpTQRV0a2n5LcvJ0BkzvRsGurSx1cHCw4Ulnno0KGvufoA%2BRO8DlCOraU1lMcIP7nSRFkBa5VfmCDGpS6nRII6530kynUFn04kiTis7A8G9yJ7wBxaVmrfHSPrwVBJM8MbUcimTO%2FjmMfm5c4ri3TCtvUyuYZaPaBS5mY%2BUsFuOsYVeNw6q%2FoeJzFPP67xo5t2LwPmPCXpg4DYYbGMaVOW2j5nyUesROKW6RqV%2Fnpb%2BO6uWqEflXSfM3NxdRDDAG3Zjo8nCipGK%2FePc4RZvCsYi3PhUX3hsZuHUo1GGnD2%2FUGE%2BYJzy5ILPj1f2fA3qQ9ghUSSZ4RSQqHHjoUrq40VbCKozaVksIpHtQ%2BU2KDk4j%2FpuEdhr6P50kEbHEnrOim43rMOqAx74GOqUBVUvSLxRNISxhfQUJQdjHvdtwZzisB0hwmZEes7n8kysDgzyrdku1gLJy%2BUp8u6bQrwHZYaHaZ5w7JnbHYMyiNuP6eDgZux2ZrmYqN8zLEcGDt6ZoSAYJ0qS27BuCpl%2FGKvfiE4LycArGm2eCQGlyhbNOIaJrC8DF4P%2FJXuZI4cazfmx1JjCfpcGpcufuP4DkWwuEFYo80QI159ZLEF1OQLgr95jp&X-Amz-Signature=85ecdd61c19d3ae3c6b4364c597f6d1af26f85577ea432c08bda61d1f36df208&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX2PCWEY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCICIW7wpDnvDXqWwSzaM%2B4J3OGOjf8o10c3pDPsZxvXtXAiEA0wmj5Z8UXKHM4jGWv1j7E3RGFFh7%2FihnoJ91AHQc5TMqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1RZM89saY9n8r%2BWCrcA%2B9kn0GhBCpdbmH26TgoldR%2F7FUm0NhyXN2bqR4u5Ga0HdXEGvdj3%2FmOniXumZ7dBySiIWSv1Twj1AnSMN%2BebMMOi8sUEDftjgavN2derLz0Koc%2B4QoimmZakrkRp0zr6Ej7qcc%2FDsPY2nezkL4C4qiDdmUCtBSA90898cUK3a%2F7NLAYn6NZce0dCYyuE1mAQbWy%2F90j%2BtqDNN3vMzg%2FSHRx8fxVL7VIiki6tOiU3hsF6C2cB0z%2Bznhy1tirOTyblMRmKGGsUb24%2BocI9xxuZceSxCvQ1fdMxLtx0Z%2Bt9KPLdTa%2BAlihUp7VKMyvBBa7ZELi9wTho9w9CcxSHPKNm%2B0kGGzMSugx%2FJPwhTnwCRqWUsTDRdprOuhkTkkhFkkJOhv9Wk5%2BMDvXhZ8cKh%2FjLdvj4htEQYhdkUbOhyr8AMHNhAHdYnvR3MjZBOkF%2BB1lOIDbsP3u3v5YVAemwl8E%2BAegrlaYGe1hnWwxr%2FijMSIEQ8UZLQo59O56bs0ZzFWbIfsDFVM6jLskHUUAe6YqJbxi%2Bj5h55k%2FWkPYyiYD2%2BjUOzWF8dGBuK0XaL%2BgIFaidMk4cH6Uu0uUMdJjHkoSiBvu%2FYTjP9Jb7OwU8FUO%2FEuo%2BBIOPPFuhptMXyCKMIeBx74GOqUBYBG49ZiC9yqXB%2Fjmj9mbDFIKoFpRoIt5AjTcVRwCsDRRhqg2qt8TidxwtLzwp3irAzO%2FBuGx9lAONnE4lOi6S0Jm0EFexn87mwIMfuATqbVyOHk93AxWokTL2iwsjprzm9hMOAJR7pwbMQ9%2FpGQ5bMk3TAvsyWRmLIvKxSeFUWCTbhSFomKFx2pZGaW3hPuP%2FbB4lomEEs8ZSVI4LbkrEZw%2B8AHP&X-Amz-Signature=8c9b493ebd7c6c249fc9996cd83b44e8b3851c3ae981c19e1ad0bb12d170c277&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
