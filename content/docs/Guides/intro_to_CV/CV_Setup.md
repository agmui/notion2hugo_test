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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR7B5WC2%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC%2F9bSrumQETGJmvjkN7wpUttBQMobCASiUT2lluXp8rwIgPbknoBV0JtNIzdjw1GLweBW4dUCGiydKwj70J02MXPcqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKS6EGObnWyoXIkczyrcA0H0WaazkfFf%2FDXQyi8DCuWReVPoWyqHX5rcuNXxvhKIbflyPsMaqTttCccREBGpFkZqJM5kNEj9DPM4tUgjwmJR7MBqcrLBaAkNCpstwHQux2ldnjNDpYshstXehXcVq7hoJ0QehG4WOmqQ1doVlOAAgRbDT32mbLGsBaPpIrU2SDN77k2h0gaj9KTkCAkpSXhSebp6fHo5807i583%2Bohhs%2FhKg7sHBBoVKFezCz7GXaQ%2BTmRbhqdIuSDBwfV6%2Fm8miuJd1rkfJAU6uXElIORSl5uaO7jYFchb2ds2yvSbySnGW54ZC3cVjVVuRUq5Tz%2FtkGVx8DWMFhHQaphM6LrMfQ1T3zweOqHBJrAJk%2Bnr6eMdMZ%2FM1IGtRbf3R%2FKcuoucJaToSgDHAc0%2F1x2loBCaxldDBMK9umExmNCiYUxr2nBxFkkroE7DMQmdl7op7BUClwstLyWIwt7hongnmM3u7hIr0r1iQeh6cJabTNa10RhUbkVK2RweCUeg3NN8c61pw51fxhJMoxSJKUquc4010PprsfiIWl4WAu0c40Wj%2BIoIIwduMcFQ3HDTikmmDQN0Ht702YWnYYvyaVW%2BGr5zlBzDlGOEGG5ttD84emXhcWBsW0n14CBOoKLIaMPryoMAGOqUBD9JW5R60DxcjuJzNEn6b09i2HIduknbdafJWhuEiyZ4a5533%2BqaDSSWcCy3cVrCLAx0WP%2Bgh5UMHufbr28IImFZ2QxUxzkremJ%2BDKZh9cWJJcpdzIJJGIX7PsVtR22ES30eFAez1MvWVBdufhV9YKDsrBZs3jZ4csiA0rtjBuluWKdNNQhch2ZOfucgMoMFoDCdznvi07aIRsVIxexB2LQasNj8C&X-Amz-Signature=8b09c5008b180a4c3038be3ec159e6eda01a72ee229060c4b0a59a97e643250f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FR2QT6V%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCfYVy3sjCg2ufM%2FEmeBs%2F%2FagnURkErGbCsg%2B8bFQamFgIhAO%2FNXGh5uN1B5nDb0FN%2BWoDyFpGQpUB2YsaPrT%2FrRVlvKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2Jr7AuJKqShxFIHQq3AN8HOG98JtRdab5A%2FSmmjnytV8%2FQ15qJNEk2DWkIwoyFJ2WjZcIAUw3QQOUGflRB6EqWSrs1WCzRQ%2FFzdIYyCy5llyNdLqWy8Po2uFQmUfvQDQ%2BKKM%2BQm%2BFlRgebwZXQM%2FCzLllhGS%2Fr6Mpm2r8yzN2skILJsVlTbgv1XAwhRx%2F0BpWiqe3NMMOXTtg0Pfkc111r7nH3VoeAJobzahjWQ8mwvveIO1iNdUSaf7wjYWH5EkT1rdt9s4WWcVOWiGNiu6V792f0mfRx7SMX38TAvvrm3u3FC9guR7eVfuSxFBiutGYy2aZrzKvDl%2B3cuJMbAthNS%2FHqoDo1T1xsFF9VMiukm2iVd39zqzaNydL1FycAkKQMM1SavB4fVDRh88rreXkvSD23IkHnCg7SsMf3FTo6YRSrG1pcWxN%2BCz1pJ03r0uzLnNRQvNQObgXsJPxxyL7PhlyLSMdryTWHktlxCDB881esg%2BypKS3TFs%2Bahj4HGpUAlVMWDcuVWPq1ue24fo%2BF4gnKfAeEAfwrOyLI7fqW0Pr1fF5Cq2sfMsz%2FD1jUJJRrVhwJEH2bU%2FxVdvxswRGQ%2BiJpthaMs3HDUdheBXw8hkMxM4pq9Ij6FapyQJI6eF2KezUL7MwOJb3UTDD8qDABjqkAUnpfH%2BGF8jByBfy2gQPnx45FV3KzFNb1cHgyFEFGfwkFx0bEikzYhPjQIHon%2BdkUPeOZ2ONHqWFr4d%2FoYKuKseTRVF%2FCvO%2B4jkWVDW3BOkOYm%2FRJ%2Br3pd%2BXYnMKZQgZQY8ZZDaWz0KQ2zvX5Sb7kFfxWfHKE3BxmM2yvs%2FQxtZqxR27PJnPevKuWxlabfdwLWJlzFxqp4c%2BPDS8LgcavygTQYl3&X-Amz-Signature=83c8bf76d9d5fafb4e08ca1834ab9168a34404feafd0fe94497eef6a2c20195b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
