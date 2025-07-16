---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MQRTOXZ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIDUYgMm6b%2BJJBPqgTLgKlc0QR5t8s8lItTwLulMVPwKAAiEA3ZUhbkXe4pcGpYQOtqsyEau3o7MRxuRWQVb9ayPkitIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDKjK34bqR88zVL0G1ircA1t4%2BJVcAEERRT%2BnuRCfOet7oFfl%2F2%2FleHaN5fSERbVIWCT42g8yejTHuJrT7WuE5TnyHVB4jUbehDRKG%2Fhfvbe2YSOf0reHG%2BXPmc4fJNtnHJSXiesxaAOWU7bGTtBzifhFcWyaDTg%2F5k9UqckEkVyA%2BtJ3j9lcHVSAl0EGmQTVcvnARijX2bCxxfjAqC82nBUeF%2FKw36ygXbCAr4kLAod1ssIkUrenBwqBHr%2B5UzcdURKuln1X6LA%2BlRaW6Tsc4auSvZWTdxjkoP6DX1odZpjAc92c5bvy27P%2FYEHVFkQn6g7AJP4fRfqdrFeOO1fxKh%2FvuT65pkuTtbRRSykHzllWplXdy6Ruz6ikzjxxRsKfs59HLU6l2ucxhqgS5aawY6%2BGEWW2wcuNEUfrBXGrIffVwoW6Jech2JI0pjSuHiyqqDWKLgEzFzbqN4svkd72omDrl%2FK7UQHWc%2BtP4TnB5G4aBnqiLtLea8pF2okDwNwvDlRETtCJxC67jZmNmo6STN3yrZ8h6C5ThILAlxpLcUFEb%2FBCUkrHJwAE2qELjttOrtqVkqE5msuKAvGnMU8%2BY%2BMpGDHciwHQvoG9fiCoLdhM6bOP9tjI2SrRCix1ECqgNs1wLrVfoG%2B8BeqrMKbQ28MGOqUBrn2nRzqqWNDvtMOPuVyrrPVvWhNOHqljaNOFtrd5pAq2yoF%2FIt1jyJdFTOULjS5OW%2B1r7NT2D8x1TPBtDd1UbSyhitTFkvnbpr%2BLpIxeArErDMbVl0THiDwxU5qNReD9KACMUWI9B%2BBk%2BovIXE4xT%2B05dC5gKlbPQWmCYF8SjFgSJ8fnpMX6yaSfSrSoE8NhwOSqS%2FAPAXdc1407Zg12es3i%2B%2Fgg&X-Amz-Signature=03e702e0e84d182f07d7437d501310fb1ecc1431f2031afc18de89613682edd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MQRTOXZ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIDUYgMm6b%2BJJBPqgTLgKlc0QR5t8s8lItTwLulMVPwKAAiEA3ZUhbkXe4pcGpYQOtqsyEau3o7MRxuRWQVb9ayPkitIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDKjK34bqR88zVL0G1ircA1t4%2BJVcAEERRT%2BnuRCfOet7oFfl%2F2%2FleHaN5fSERbVIWCT42g8yejTHuJrT7WuE5TnyHVB4jUbehDRKG%2Fhfvbe2YSOf0reHG%2BXPmc4fJNtnHJSXiesxaAOWU7bGTtBzifhFcWyaDTg%2F5k9UqckEkVyA%2BtJ3j9lcHVSAl0EGmQTVcvnARijX2bCxxfjAqC82nBUeF%2FKw36ygXbCAr4kLAod1ssIkUrenBwqBHr%2B5UzcdURKuln1X6LA%2BlRaW6Tsc4auSvZWTdxjkoP6DX1odZpjAc92c5bvy27P%2FYEHVFkQn6g7AJP4fRfqdrFeOO1fxKh%2FvuT65pkuTtbRRSykHzllWplXdy6Ruz6ikzjxxRsKfs59HLU6l2ucxhqgS5aawY6%2BGEWW2wcuNEUfrBXGrIffVwoW6Jech2JI0pjSuHiyqqDWKLgEzFzbqN4svkd72omDrl%2FK7UQHWc%2BtP4TnB5G4aBnqiLtLea8pF2okDwNwvDlRETtCJxC67jZmNmo6STN3yrZ8h6C5ThILAlxpLcUFEb%2FBCUkrHJwAE2qELjttOrtqVkqE5msuKAvGnMU8%2BY%2BMpGDHciwHQvoG9fiCoLdhM6bOP9tjI2SrRCix1ECqgNs1wLrVfoG%2B8BeqrMKbQ28MGOqUBrn2nRzqqWNDvtMOPuVyrrPVvWhNOHqljaNOFtrd5pAq2yoF%2FIt1jyJdFTOULjS5OW%2B1r7NT2D8x1TPBtDd1UbSyhitTFkvnbpr%2BLpIxeArErDMbVl0THiDwxU5qNReD9KACMUWI9B%2BBk%2BovIXE4xT%2B05dC5gKlbPQWmCYF8SjFgSJ8fnpMX6yaSfSrSoE8NhwOSqS%2FAPAXdc1407Zg12es3i%2B%2Fgg&X-Amz-Signature=ca2dbbc14b580a42c72b86e5a8e108c8653d1ffd1982d8211bada53e45a24422&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MQRTOXZ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIDUYgMm6b%2BJJBPqgTLgKlc0QR5t8s8lItTwLulMVPwKAAiEA3ZUhbkXe4pcGpYQOtqsyEau3o7MRxuRWQVb9ayPkitIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDKjK34bqR88zVL0G1ircA1t4%2BJVcAEERRT%2BnuRCfOet7oFfl%2F2%2FleHaN5fSERbVIWCT42g8yejTHuJrT7WuE5TnyHVB4jUbehDRKG%2Fhfvbe2YSOf0reHG%2BXPmc4fJNtnHJSXiesxaAOWU7bGTtBzifhFcWyaDTg%2F5k9UqckEkVyA%2BtJ3j9lcHVSAl0EGmQTVcvnARijX2bCxxfjAqC82nBUeF%2FKw36ygXbCAr4kLAod1ssIkUrenBwqBHr%2B5UzcdURKuln1X6LA%2BlRaW6Tsc4auSvZWTdxjkoP6DX1odZpjAc92c5bvy27P%2FYEHVFkQn6g7AJP4fRfqdrFeOO1fxKh%2FvuT65pkuTtbRRSykHzllWplXdy6Ruz6ikzjxxRsKfs59HLU6l2ucxhqgS5aawY6%2BGEWW2wcuNEUfrBXGrIffVwoW6Jech2JI0pjSuHiyqqDWKLgEzFzbqN4svkd72omDrl%2FK7UQHWc%2BtP4TnB5G4aBnqiLtLea8pF2okDwNwvDlRETtCJxC67jZmNmo6STN3yrZ8h6C5ThILAlxpLcUFEb%2FBCUkrHJwAE2qELjttOrtqVkqE5msuKAvGnMU8%2BY%2BMpGDHciwHQvoG9fiCoLdhM6bOP9tjI2SrRCix1ECqgNs1wLrVfoG%2B8BeqrMKbQ28MGOqUBrn2nRzqqWNDvtMOPuVyrrPVvWhNOHqljaNOFtrd5pAq2yoF%2FIt1jyJdFTOULjS5OW%2B1r7NT2D8x1TPBtDd1UbSyhitTFkvnbpr%2BLpIxeArErDMbVl0THiDwxU5qNReD9KACMUWI9B%2BBk%2BovIXE4xT%2B05dC5gKlbPQWmCYF8SjFgSJ8fnpMX6yaSfSrSoE8NhwOSqS%2FAPAXdc1407Zg12es3i%2B%2Fgg&X-Amz-Signature=ebb31ddedfde580d3c70984393a14c75a59f83216b854667168e736a2ae56005&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEKV5JBZ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDxutYXR3Kipevl8QRJh5UFHO8JYVxb%2BkRCxM1CXn3VQgIhAKAfAElMy0fiqVbUP%2FmaQ7RySATXaAxs5TJMk7GsqTpgKv8DCFEQABoMNjM3NDIzMTgzODA1Igzh8IV8OuU49cWnQBAq3APZuNPu6WzN3aqFc%2BWjbxGw1t21RiUY9Ri8q7TJzzSl0XSacdJFOEHGKJIJKM4i9TZ8p%2FwcAU97t2KByCCXPdOSgfOcVMZkwSD1HXS6ACNN6pDTNr8cXs9Nj0LqlPLIDWV1GeEDvXvCYE6fYFKmX1vstGsW93lhg%2BhVvw8isKCj5el4jIaND69NxSE4FIRTKWO1aMUg3lN8D55ls0MiXy3q11jHYgMH4WUREmUm63h0JIGSzuv6ImL7AbCgmH2vOj2ibm1P469NQGeLwmOUlfrf9msXIglokBD6jLIJ9qVpf1U4u%2Feym78DEALB4VEcQNqB4R6MS9vwPE44Xarp0q%2B31dFFz8k8WPoTpRgcuIAjwB%2FrxBG8A69vsViFs0fnJf%2B8mv%2FyeTkFsYUOfexag47u52%2Fz2aDkwAijjgXgb84%2FQTbkevemAC6r0kMRkXrHC47iq9MR0XgrIyTnPF6augCpiYomOUDhdEMZl6S58dn%2BjoGxckt8tCtoseFzqmgbzUly4jsx%2BL%2B5qFAWpvsccbyNlYNrlkMOCf8P2W%2FRH5V%2BXvizILkZlnifC26x5yAplscIdttzEvG4XxKNJH5YZZxrmADmXVzIUKfpOT0NePWb8A4DgwNLKGmPeGW3ZDDL0NvDBjqkAR9P8VPZJmRdCtPvMc6nI9Sogdk10XA4lYoegBnRQsNewCob4xuJVuXrvW7r7QyCQ9xy6HMahiQzgVw0k47RyC80yitEUcHyZLDokL7%2BiNTYKHlGrNTA7tByHr05ux0I9i6wC9BANTo3wVsW9rpLEiY%2FMDOwaostFCcLj8M9pAaONbx2tuda374Rphoyp6IhmAAUSpBIVtKrOEU2GWwASy0AnwIQ&X-Amz-Signature=60b686f4b3645154064fc1f887d3512202bd8908f879a17ef792ad6718d893e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6QML2TR%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQClS0XTcXuLR76VXav8X96eoUK0ZgoY94075cAkYXuAhAIhAJ9gHYuRO1YVmJkoBeOAOM27g5B7572iHCvS2xKZ54RUKv8DCFEQABoMNjM3NDIzMTgzODA1IgwwVn2ixwCRLrLvAl0q3AOxzupO0J8A34ZYwtpHGEeJMsB7X7aKi%2FL19U0dnvaf5fnoZaf2BmyzZYzv4biVbppGuTeIEJfdP5%2B%2FyhfsebToQ%2BzsT4zJJnFATRooCntACEj6BxoI0HdGUjQfC0RZL8mmM1gxHhzGWhDyNXrtqWve3jrSJADlq%2FPPIBHcbd%2FMcG8nfXH5XehUdKdtFKBevFRNZ7VNw5dk1TunVk4pbaW%2FnFjAWCMtc1s3%2BQHUbVT7M897ojtGLl4miho3HmQz60cU1RnU48NbZLTm9RQ0IXSp8j7aMFgEBLSKbIt8zw55O%2BBZkM3UQV1gvAqwmj686T1sSqTWwt7DPe1BD8rqVHpiZBLmtH7EoXrmx2s0Nat4cxfuSaTZSIoT8T%2B6Mk%2FnCm07QiIXFFCrD8KtYzidgOP61cwIBEFHiFFQ3ndm5fZQR2TPb1LcqzfpK%2Fkeu0PSCmCX8L5aZiQS29zUpCFTAgrnvkdHMpnVDyAiKbVS0znlc8g8PQxoGma6BVHn6dWx8EvnfqG5OXcYHqF%2FyXTWKNsYQH6vRnwpDCNpDtlCYzP3SZ16Y2wqvg2mN8Rr2HPbt4ufmvxTuZRdMn88Kjwfx8VYamA5k0%2BqDYQD1azcVLFZ3qbs7f3Ud9GTDaIKHDDz0NvDBjqkAbbIGaYKAD%2FXo5r8ddaQ390r23NoQrHYNW1ntoVJDddrFPAWYn8OpwrAzVHA8aGEe8%2Bkswsxxp62h8GTAzduSNGrSpzek%2BO5MCkZS5LcURR5oqdD8PyjXwjDVPnB7ZGGqyB5HmK1dnIZ%2B0Hq220%2FKo2cj0DEuBg4Ed5pbOnjPxnlbhPw2DL8wSjxtXJgOwyh4meAsu7VQ7Pw5mc9sKUSZXNudpmS&X-Amz-Signature=599bf33ddc1660b423747ae9ed1ac5cf308637f447e63e7f6f211b2e505b04ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MQRTOXZ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIDUYgMm6b%2BJJBPqgTLgKlc0QR5t8s8lItTwLulMVPwKAAiEA3ZUhbkXe4pcGpYQOtqsyEau3o7MRxuRWQVb9ayPkitIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDKjK34bqR88zVL0G1ircA1t4%2BJVcAEERRT%2BnuRCfOet7oFfl%2F2%2FleHaN5fSERbVIWCT42g8yejTHuJrT7WuE5TnyHVB4jUbehDRKG%2Fhfvbe2YSOf0reHG%2BXPmc4fJNtnHJSXiesxaAOWU7bGTtBzifhFcWyaDTg%2F5k9UqckEkVyA%2BtJ3j9lcHVSAl0EGmQTVcvnARijX2bCxxfjAqC82nBUeF%2FKw36ygXbCAr4kLAod1ssIkUrenBwqBHr%2B5UzcdURKuln1X6LA%2BlRaW6Tsc4auSvZWTdxjkoP6DX1odZpjAc92c5bvy27P%2FYEHVFkQn6g7AJP4fRfqdrFeOO1fxKh%2FvuT65pkuTtbRRSykHzllWplXdy6Ruz6ikzjxxRsKfs59HLU6l2ucxhqgS5aawY6%2BGEWW2wcuNEUfrBXGrIffVwoW6Jech2JI0pjSuHiyqqDWKLgEzFzbqN4svkd72omDrl%2FK7UQHWc%2BtP4TnB5G4aBnqiLtLea8pF2okDwNwvDlRETtCJxC67jZmNmo6STN3yrZ8h6C5ThILAlxpLcUFEb%2FBCUkrHJwAE2qELjttOrtqVkqE5msuKAvGnMU8%2BY%2BMpGDHciwHQvoG9fiCoLdhM6bOP9tjI2SrRCix1ECqgNs1wLrVfoG%2B8BeqrMKbQ28MGOqUBrn2nRzqqWNDvtMOPuVyrrPVvWhNOHqljaNOFtrd5pAq2yoF%2FIt1jyJdFTOULjS5OW%2B1r7NT2D8x1TPBtDd1UbSyhitTFkvnbpr%2BLpIxeArErDMbVl0THiDwxU5qNReD9KACMUWI9B%2BBk%2BovIXE4xT%2B05dC5gKlbPQWmCYF8SjFgSJ8fnpMX6yaSfSrSoE8NhwOSqS%2FAPAXdc1407Zg12es3i%2B%2Fgg&X-Amz-Signature=d568ab806d2cbfcbcde3138220bcc96a9b3ff02d3deaa55f0d0a7d2f5ff350d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
