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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAVPU3EN%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDfDRXf1EU0Y4VLi75JnZpoEm5WppIQMCCojCQ6F%2FBk5QIhAOcPmlEAh0e6Q%2Bde8NRMbAKwFWYhRfQO1iknaWIKAkQcKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJCsaBvpfn9yO67fUq3AO%2BnnF%2FtsEjkQcoWxvvhwsxyqsmy1GPqx391iBfTED8XwmDwyVxyEUq3KYyhQLut8Mll90My1ZoWbaNgmglqKA42PLd4naDuAlBVt2JU8Z0KOZgTSiRaXLEuR%2FBs7k3Fd7SmD9%2BhQlROL0PItFDfHmb21jA0ePaZg6kSNN40LovCZk08XAhgxCf2FcTU41O41UPeD4XZNGB%2BwInOgqy%2Bvnar%2FwZT%2FznnebX%2Fn28hbi8zuhV14S1tA3Dm5RNM29V80kjCyh4jMbmQweyVoaGpNQ1dN%2Bs00oEryzmdThFl21IswwpFBlw4AjimeODTbRs1t0T%2FFmgvkSDXLBGcyQ%2BDCRTg68%2FIRNN0bzF2wqhvp0loC0bMLYPcAiQUsKm4UQ9t2oFE%2B1iqCjS2WI6%2FZ9GU2rbfznai7TokB3HOstyYesBPBczwTn8fYiv%2FeYfKNc7rHjI1pAQb77Ni2HHQBa9WLJhkX095QbHj63xTdI%2FfEcHVlWbzPBre2RmB6uljpJEQIrR89spetL2S%2F%2FWpzqBGVNtoyVvGakWrtq2KkRS1sNwFi51kSE4GQTNkU3KvdwP0%2FOdTFUt1T3WyqFrXzS9xvUetKDpzk%2F71vFWQmapKitbdozr7KMzW5rdxGTDIjDDtvy%2BBjqkAXsZOLnQf80Qp4isb%2BUBRa1vZNzI0%2BmlDUJT43nb%2FqL3uSRssxYzk0CHPvepqky%2F2N%2FAQcoPG6YOwGuu3MLTw4VmNKwGc2qZHLvhqZoefTiubfPOF7BwXtUqbdSda%2Bbm3LYDEPNyGHYH%2BOeufCJa889rSuoajYZgMNUk4ql%2FV0g9WTnu3o0HvGZ0xyxK%2FnSn4biAXIix5KxBWStGdHaWFsXbuxNR&X-Amz-Signature=23c0ebe80458dfd0005c783f3a0c0c54a37525ab7b85f583116f3bd59c02a21a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VG25GSV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD9YU6Tpe8OlzlNs4wJKaC%2BfXk45JKKNwL8BKoy3KHv2QIgO35KRq8glXGvFPn7xS3AT%2Bxr3UJaTElLTIblnggV05IqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5GuJqvwhfmjBeqySrcA%2BnvBn4AA4nSoWTlyu342lSRO6vMtuBQQ%2BrJAnEzz9B3Zfg2dS%2F23lAw%2FUy6eKYTpiRZ1JNfZMrtj7Cbym1GgZ360QQMDcmKsPQ3Re0LW1%2BigFOphMf9B71Sdy7hshui9WOz40P25Nf4I9TtlYG8f2MfFodgDEAbd4VgweqgnDuFTDIUQML3aJvFDODShhO0rZ0dIasW4ciwAhJmHYqpWZDKbTjRTHCSgrEebhqXZ2lPZGeM02nkq9ZKYTlUMbaqg7ajjBTT%2BHUthu06tDluSPySerwP8dwFoMMb4DWCpdNz1%2Bqr4%2B9mKNd50jn3Xwb%2FdmxGHCPRColGcTd%2FI4SBhZDAlQIQ%2FFbCOtxWLUitrFNmpfXzpWUasQLu13Ltn%2FeFGyIjmLIyf4CCAUOQmNeFqxepqbMl%2FwwaFikEnIZtucYKM1FolpLqSmW87Mn1KhfYHhesSPwRfeEmrdo7rSqT0O4DetK1FlN3Z7Z3Bn5RJhv1bNyU9mzZbi%2BvgK5chBCbzYZgk9LeTgON6dVX%2FcP4x7%2F%2Faq5ZWiBl%2Bavh7V0y%2B%2FRXVggFboKbKGh0FkZURRaAopbx7xlEEqEDp4pvFLK0q2Uw4vZbaASyKmthnZrSlU%2BDcz05pj2U1POIg%2FF%2BMKO2%2FL4GOqUBtljcsFCUhMpbdFQH97T%2BvviPfEWYjDxECgrUPoRMV3FByfNlPnhYI55Esm3mgeDx2oj2yoR87ST5bPeXAPL8yj4GyBuGPdJjpLCrpnC1zstvAPfOQxwv3hmcxIbOQV%2Fb%2Fx3DSWr3%2BeyUoYaMixP1dfc0owgX9yeppWxMnsADX5L9TF%2FHf6YnpMtUvFF9xVD69L35Crq%2BJPgaKtXJuQ3PJE7NJFg%2F&X-Amz-Signature=d62823eac228f49554597a6497eec1edc1e684f301ffeb587bc53648ad441137&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
