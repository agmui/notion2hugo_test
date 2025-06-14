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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LA7ZQC%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICIFHs2bpfZbKAXR9Ku1TSrUR%2BmmxdchdiPSsdrVHyh8AiEA05av5wAO1csTwoTtixlyzBoohLH2MV0g2Z%2FPTpNFzLMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBnOnqQTA1BvV%2BPs5CrcAzA%2FL4wE3%2BvWNMV0JunxcLCXHH%2F%2B6FG1Z2DhPGnUBr%2BHJI3y5tJXZWbv1FrZ8HA49UTTPrJZ4cwJaCm1JRz2Ncj1ec%2FvuwWOzq7nWcqIVi%2F33o%2BwnFEWOR6bqAv2bADGkZMNkRxAciLCq%2BOUez9SiMZwVxIMteFTkeJ51iO%2B%2Bjsdd4QT%2BDVyzb1JwWN3atgClMfmlaS6FDY0KsKKiP0y%2BPlScwfwbQrjvuX2GHtddD%2FUHaxb8ZH%2BUkWZogkVwtdTP8JYBbKE5eRGz1FIHMup2SG3orTzy%2BlIQLIsaF4k9jDnhgjPgoTSUHtV1Arp3JyTOKvf9TXfI3yyDgzQWGEM578kGasBEZ6scs7V0%2B2lI5UwW4yHQ39bSviNKSArS6WB0oIE7QsAJuzjhxcQ67pjzpAvdOQHGH%2FbUHlxxg6aoz7vSaeNC2mXJT54H4KImyqpnqJRRFjH%2BE2hE2ygK4iEwbe6Xk5nrZMmkPGuCzwZqJQoxooqrsxKZG%2FZq1Q%2BFH%2BnLcrSUGg2nAsBmouU%2FKW0AFflriKsYcZQPrpP3UVJg7KDLxcRVbSbIb4xGkdxzXFMbI6ctF0sjbGpXgIraV7b%2BvnHOaiWBAcayErYCeC%2BnusJ%2By6yQ%2FPnB9nsIjnYMPeMs8IGOqUBflTURuaDiiaUX1VDUmOtipPctuvyiZwL0ytk2nDAHc1dlgOtEjZj3Vw4uFWdB4bEgX8XPM0HcYQBNsbYMV%2F1J6bMtgZ8g2%2FSBkpHZj6upjNjSBCX2jumKzhEWJ8TLZgipKffKhxJ2hSGtAUFW6YA%2B6cCzDikz7VLjCUvW1JTA33ljwKAQuRmwbhR8zUw1UDQW2w8CFQYnTewUG2QllBHfyv9C6MJ&X-Amz-Signature=9472907c2050668b7e2b3bd5bb7d8fbaf759f3d39b141bb803fd441ebb947a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK4C3MN4%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCRoUaks%2Fn%2F9MZewzN63NHYYkI9YNxyTj%2BN7QrKVftnwwIgBo0PIUuXWmTTDdTy1OF3hFeXH35YArW7xZwxhSH0VZIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDGWKOj4duKyyFpNokCrcA9RpvtQvmHrGEcHEOxu613BnwTWX6YUgp8ScDOHN55muoLGVVO2qzk5qePWC%2BXxFBTx7DpMRlKtxd6v07w3SUjXXQyfI%2B5OaLSnlx7uFa48L5NqKQBnUcmxvGmzVzqHauRTjnjoPB0hPw%2FmcAz%2BBrQ1tU%2BhUAcbNa0xb3JdLAxH%2FhMXb0at4X8cozPkeNDUexkydJL%2FAII6nUE68pY5fy5anE5LyD%2BUBNWFfe0Urj11nTR2DQcyYoyaQQWfNdbIGOcWrnt625XMTnslPMpRvhtc5yfDIXVflaHqhzRVsCXKoUtbqCPlufn96iK7nVdqa0fRMh2PEpHlF7XVy25UAOw3Dx4DnoQp15gbowVFKb7uBx2mennL4QoluERN3d3SVg1NfmQvDTOuPRHKLu8YOHva9BuzN89A5G572TK268X0JUv3Q4a6nwat%2B9UtdLOtlc%2BeWf89%2BdtPUlRb9Kodh8satX%2FlH8rmlJWzdNX2xfzmMUNowsU62j67hjGIZ7mZBvggnLx9Pdbgk0eyyXUIxaIRJiUA%2BZ76CUVn9V0LBJgcxHBdI0Qu2KpDQIkeyka9cKyTyHjqoMHLzbA2bty4T8cNbBjUdcrT1hLULqRMPKteY0DOqjPSWYX%2F%2BaasSMPmMs8IGOqUBNeJ7%2Fe1NMt2JycQxSISuvAPBYRufDtA7cSIVUsqLnmyiOFu%2F9kgiBq5cmdsK3DIzvJMFETriOxTOihvLeUIrSj3xkSrMf3y2VWzKtpHafdZO8YqkZ3KudpSLJvTO4CPVAOTFTkaPpiWyC8ZwyXjymfXiJREAn6PLuxY4l8A8J94Uo5V%2Ba9KwxyHf%2FxSX8N5kg2sfJdLfdRr4s3FZ6wbVHz7FAfCI&X-Amz-Signature=02c502ff3c1a6a8124d3d0d263eca6aedc42bdf92ecbe4e991d434726f3dd173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
