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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKHBRHYR%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID71alPn0B8z4JZRTDSFra8EQ%2F78ux48KMFB4fhIL1e8AiEAqwPSsTcMP9nrxGdq9ix71awy7GSGLSsuEUbzFmbJlWMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAXEtD2hgyharSA0yrcA3Y7W2FWmn%2B%2BjVXx7jKZJHvoplp1Yr3d8KZkPo4M2AkCIfpXKn6LLyYQf%2F2QE9IATfm%2FldlEPcesEpeMF6srsh0F2ilk5nI2uSIpqfibn0e%2B3YqRJ8CQ3aHrXSuE4D0ru84hhm%2FhQx9tm3C9IJw2A2jFLJsDu6F4%2B2f%2BpDNmeFeVnKeaZaQ2i5diWv1LqCXX73BiSnnE6kOs%2BX8EKWOeAYQdsBC9tjzIud31A3f4VyvmX%2FgvmEycHWIUfGUGuegY0%2BcH3tDOPNFvWmDkbyXNhN4wzIjmrhONer1DnqhDerLLV6mw2RdoYaIQ%2BYHXgo5v0U0qteGL6xUOcoDQQpeLLRCxW5LK0At77tM%2FSQ6hnKijeAYur3jU6I0O2ZQrD9wCzxfLSd4N99b0tumFrqT0YU8DzOyc3ry7JWF4tn%2FJhTcIMjKFKJWyP%2Fyc%2BrIss1pmSL4cm5OMvMPF1YBCMIVBhicC7LtrIdrHH3u90ySHLxxlsyCHKPIyikTe5%2B9MvmunBNJjnehg2bwPMsp3Jsz4xnn6xv%2BIZ2Lm52Nn8lDwwc7CN9KIzvD7%2B%2FMrMUgBy%2BGIL8wd8MYtOKlhpFHOl1YOGBrcEk1LBmBzO0THBx8A8wwEQenTwCfYeaC%2FXoMXMIuD4r0GOqUBmahAFuBC8592sWAQNgqbXOXK6ot75L8paI0Tw8BuKn6Jq8XM%2FaAh1z%2B3vwDD5fWcw5iPxRQGMHUVA%2BtH9Occ1YdnPcKY5W8cxhZsk5NTw%2FQYR3DYc7L7Vv5AjaJHfxRz8hhgF4E70aL87194fzzXRPqo3xduTMZRPWJWWXryv8Mt2YFmxI1b0U9B%2B61PL591T63Ta09XjulIDpAeGsoqgJ68kwEM&X-Amz-Signature=e482e320fb36b4e6b80e98fae9c27da3d233b283169a09f3a747c20793cea02f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFE36CN7%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFi%2BTCv0j7AnwTwLnNxw1N6KC1avI1neUTlP0y%2FDyLFwIhAIWNvytUDhteVG4DFDV%2BpIFtiiNbX2t0grUR32e1UO45KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3jXgWg6ytjFCWtKUq3AM4YwIZ5fC%2Fs%2Fd1HzHxLGL%2Fu6ZaP5yEoVtdLCdLphCNnKWu1GCsImgOIcHdM5VxVDVmjFljSO%2Bz05wtaxE5Iac7NtU%2BMoeUdLEHHHcJs2fREJ6SVgw7Ze7SuLwL4kviedVUQLDeRiM01djGLc1EbCGvZarSxPuJ4%2B6iC2ZXOkra4ddaB42YE%2B840yi3NTrTP7nS%2BvkPTP6pUETKY0C0VJ%2FSU%2BZXv9I2ZlqDrI35q6kkLKK4HBFau23V55g5zGMhPn28ksw0VQlrkMiEyDJFyMoyfX6tzuLB03OW0DwOWuChwIvQu9H5j6%2FbEU91M99%2Fiqr1ixQrUXP%2FuYA6rZ2xddvYat2GRVUPd9eQ3rfRSBgl%2Bnywl6hdGHyEZS%2FU9X2m0dk5hF5QuYccp4N9jDEeDhm3md7LQrJVVdMVRmKi0ItTfv2xCCjw3zMYjp0tYpM5560S88mZBJYPU35IEJ9QpalZtSYAS2l1ZVTgwaBYldtYSDByo0KJJ2pt1yAvxRJt9hIGwxyP8KrWZTxgahIwGh7tc3vNeZZT6Knlggn2cAYW49rhbzBPazBrtoiEC6SEkwjyAID1Fw1n82Zr7ytoD8ak0okvrKBHDOLwWfJtLqmuIrhGluI3kY%2B7vIU8mDDqgeK9BjqkAcxq151%2F9tVEgKgvGqrQVtniVE86%2BZeZN9RfBRI0mqWCa7sYknhOvdqRixZHO0AdijPArEQsHHs6xWp%2BzjvuBwxGPEGexVUqlnBzAzPNify1ODUNWseY5f1jus8d6ueJii0rzSez1BoLhVGJTCDBVo6aPoqbEcKKlrHDtGgXmbmp4vKt3aBdP75VQghQ9xGyT%2BuAfpvbLlKwIUpSzUoHDPIRr%2B9U&X-Amz-Signature=8e632219c22f3a590f07fa828a89e35296839ffe47b1d8db1b6ca9f84d8047c1&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
