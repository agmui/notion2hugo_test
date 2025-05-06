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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PMWFMJR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7rb5p5PXBYZTFkP8X1trGq3ZfWTPtFH0QroYlh6oghwIgKOnJWciAI1qR0gyST%2Bo%2Bzq1CRQny5yHW0etbl5V4sCwq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDEnJSVA8gnco7HLIhircA4O2boAY3gEkeQYr%2F2Sd4Hac59f3bCDkHRoUOxOvyY1OaV2X4gJWUyuzxpVt82wuDv3Y24DppEhMoz22c01MUwx6XaQrTWCXbonRqmjGpyjV%2FFILWokwU%2Bu7MzsUAvQ62fIZNku8SaF1H74RrjFXSlyDxGKfSBr7cs9CwsEqD%2FIxFxBCnY6%2BMRZonFvWvsfZrXJ%2B%2FoME%2FqF3ImG4bAgYm0GTrg4U4EwOxqTTF8f4zmi23VqHcDtjMx02lTQSYwWc1KXBTAtJ9aTP0Ll0FeyW74ugXCzNUU7mGJtElHNew5yZn%2Fq9IegmfkpJ%2BSQWrVRO%2Fpq7w1kYZvjKHbFrzOoJOL1Sis%2BP3VAmOP%2BMQ%2BVHYAAfYgiY205MM3woZfsIrfaCVpYZ%2BzDdx9ajQ6pHliV9dtF2ISjPsFkTkpWj0XTvNq5trISCMjAQ3LNYJ7LISoVt3gJ9td4%2FHkUSOJ%2BKSiEd%2FOMwwUO4tijKgOhgpqevANEwE4AhbcBPq0I3vBPJp7d2bcvZBZvs5XVciQj09wejiht83Rfk3iu31ZF0mVGCuY095YyuDlSa80Q6B3%2F8LNtB5kb7Y2RwD5WoaFn6I1jJGLJ1non3U6Um2YzoSRThvDfMxtRBKP5tONlnIxs%2BMPWw5cAGOqUBCrHCYbgKDYtv1OUPU5WpRCFro9rx1gomUMEFEcqqe1vWdSWDEdqdZDPYP8bEOuJRdv3oacpQrUHj4gXxHtNFp73YuRomKEiD9J3mW25XrPqONIyeMuPou0mekbQ8fmnjQ1gE0ZDTyukFHmraVb7S6cdV48%2FDrFQK2nJuG5hyuhiSBKBzGGVru95whnz4wDJWcaUfvr%2FKF9CtN0Ly5VtOaxV%2B91JJ&X-Amz-Signature=b4be2734e7b16551489c37d5f1898c32da23409eb02d14010f3922645e8368bb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PMWFMJR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7rb5p5PXBYZTFkP8X1trGq3ZfWTPtFH0QroYlh6oghwIgKOnJWciAI1qR0gyST%2Bo%2Bzq1CRQny5yHW0etbl5V4sCwq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDEnJSVA8gnco7HLIhircA4O2boAY3gEkeQYr%2F2Sd4Hac59f3bCDkHRoUOxOvyY1OaV2X4gJWUyuzxpVt82wuDv3Y24DppEhMoz22c01MUwx6XaQrTWCXbonRqmjGpyjV%2FFILWokwU%2Bu7MzsUAvQ62fIZNku8SaF1H74RrjFXSlyDxGKfSBr7cs9CwsEqD%2FIxFxBCnY6%2BMRZonFvWvsfZrXJ%2B%2FoME%2FqF3ImG4bAgYm0GTrg4U4EwOxqTTF8f4zmi23VqHcDtjMx02lTQSYwWc1KXBTAtJ9aTP0Ll0FeyW74ugXCzNUU7mGJtElHNew5yZn%2Fq9IegmfkpJ%2BSQWrVRO%2Fpq7w1kYZvjKHbFrzOoJOL1Sis%2BP3VAmOP%2BMQ%2BVHYAAfYgiY205MM3woZfsIrfaCVpYZ%2BzDdx9ajQ6pHliV9dtF2ISjPsFkTkpWj0XTvNq5trISCMjAQ3LNYJ7LISoVt3gJ9td4%2FHkUSOJ%2BKSiEd%2FOMwwUO4tijKgOhgpqevANEwE4AhbcBPq0I3vBPJp7d2bcvZBZvs5XVciQj09wejiht83Rfk3iu31ZF0mVGCuY095YyuDlSa80Q6B3%2F8LNtB5kb7Y2RwD5WoaFn6I1jJGLJ1non3U6Um2YzoSRThvDfMxtRBKP5tONlnIxs%2BMPWw5cAGOqUBCrHCYbgKDYtv1OUPU5WpRCFro9rx1gomUMEFEcqqe1vWdSWDEdqdZDPYP8bEOuJRdv3oacpQrUHj4gXxHtNFp73YuRomKEiD9J3mW25XrPqONIyeMuPou0mekbQ8fmnjQ1gE0ZDTyukFHmraVb7S6cdV48%2FDrFQK2nJuG5hyuhiSBKBzGGVru95whnz4wDJWcaUfvr%2FKF9CtN0Ly5VtOaxV%2B91JJ&X-Amz-Signature=183c7bc5c55a5b1993b4868849ce56312d71100ff712bf22586c365b2459d605&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PMWFMJR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7rb5p5PXBYZTFkP8X1trGq3ZfWTPtFH0QroYlh6oghwIgKOnJWciAI1qR0gyST%2Bo%2Bzq1CRQny5yHW0etbl5V4sCwq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDEnJSVA8gnco7HLIhircA4O2boAY3gEkeQYr%2F2Sd4Hac59f3bCDkHRoUOxOvyY1OaV2X4gJWUyuzxpVt82wuDv3Y24DppEhMoz22c01MUwx6XaQrTWCXbonRqmjGpyjV%2FFILWokwU%2Bu7MzsUAvQ62fIZNku8SaF1H74RrjFXSlyDxGKfSBr7cs9CwsEqD%2FIxFxBCnY6%2BMRZonFvWvsfZrXJ%2B%2FoME%2FqF3ImG4bAgYm0GTrg4U4EwOxqTTF8f4zmi23VqHcDtjMx02lTQSYwWc1KXBTAtJ9aTP0Ll0FeyW74ugXCzNUU7mGJtElHNew5yZn%2Fq9IegmfkpJ%2BSQWrVRO%2Fpq7w1kYZvjKHbFrzOoJOL1Sis%2BP3VAmOP%2BMQ%2BVHYAAfYgiY205MM3woZfsIrfaCVpYZ%2BzDdx9ajQ6pHliV9dtF2ISjPsFkTkpWj0XTvNq5trISCMjAQ3LNYJ7LISoVt3gJ9td4%2FHkUSOJ%2BKSiEd%2FOMwwUO4tijKgOhgpqevANEwE4AhbcBPq0I3vBPJp7d2bcvZBZvs5XVciQj09wejiht83Rfk3iu31ZF0mVGCuY095YyuDlSa80Q6B3%2F8LNtB5kb7Y2RwD5WoaFn6I1jJGLJ1non3U6Um2YzoSRThvDfMxtRBKP5tONlnIxs%2BMPWw5cAGOqUBCrHCYbgKDYtv1OUPU5WpRCFro9rx1gomUMEFEcqqe1vWdSWDEdqdZDPYP8bEOuJRdv3oacpQrUHj4gXxHtNFp73YuRomKEiD9J3mW25XrPqONIyeMuPou0mekbQ8fmnjQ1gE0ZDTyukFHmraVb7S6cdV48%2FDrFQK2nJuG5hyuhiSBKBzGGVru95whnz4wDJWcaUfvr%2FKF9CtN0Ly5VtOaxV%2B91JJ&X-Amz-Signature=51b9aebb3acf8edbf5b26a3401371476327df7ee1eae1882d68d0e7edfe975f7&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM5OHBGF%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP39UCohwAV77WSZpafFVUtje6ivJYJkmyJDS789oX9AIhAO0avYXNil2sO%2Boeeg9X8qXGg9qGpkWWLeVMa%2Fv793PUKv8DCDoQABoMNjM3NDIzMTgzODA1IgzcYAyNXL5pzEWNV5Eq3ANtjfIj9W%2Bzrviw2uWn9IATJFL9%2B5d0DrVC%2FCRV9eqZ9bN8fvM3LfqVIGJv9nUBBwCDttx%2BXlQPRIba703P5bWF1GfFU1M4UPPsS%2BpKDH7FMv80qKwZHa6L7ifB9dAwzeFbdDdtAlYJrS4BreNdUqkqi7FqcGvc5J9roiZIn9uSDRfPSHUcKHmN2VufCpUeI9MqtOVcZ1JZ92E6GP%2FXYzs4jhIsS9xbT8CWtdEuqj4g8aLynos3yelYOp5jxCViclyuCTkA8ATt7wCtv14E%2BY7kqivkHB7GCXiZ1Cov4aCKHs6%2BjiJu3%2FPFGcUoTHyXHKK7GVOYjnAH%2F1rDbTmS7wposHnXGky%2BzxbjZtLSahzD0BxyZleaLafDSHehdrh%2Fa4GBXqEKSAYrTNc%2BVSDiqNmj0CRt1y2rpUfRpaDlwLUf%2BGkA98LZEqABu8tkmV8ZktBczg7EvrW6cV7tLD9OuVqUUQuhUoIS6U9QLT1RZ6VmLhm3ApFvq0%2Bq5FCBNfK%2FK1s25klrvXVr9ghNLkmg54K8fTApXQd92KYjkqF9fmBwnK%2BLDbAYmuB1j2hm%2FDC4rbN0OeAw2gW4jYRgiwx3gj8fqKYtb6dfJXzWNP4sYw2TyyHjYRci4YUczv46gTDpsOXABjqkAW0UrW0u%2BUsEgl%2FBtho8WebpsE%2Br3W2vL0p%2BMorEaz8%2FzHyOxssOMRmyq5U1ycPApNPrG7by2Oi%2BIUVWvHnd6piwYYCPkp1wUnpGOjj%2BASWuzcTBon7kqObWLdFy6cr8Yqw1DrEeDN4IIJ1CWZDXrsHAqoUByZld8dg3t1WXAhvRbvo0lymKQXKvbiktBf5bLB2XAwqgx55NfVswSHgqlMEeSyEI&X-Amz-Signature=c1541dc1b33d8a0ef0f01af0ddbead550e8a7a5098124254eed46494627159d7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBNKOFAW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrv0HqzGOMMw6TrKcOianNVDWFBbV8oeLmG%2BIPUOaojAIhAKUSUkSoNLKfwH%2FIVOk8V02%2BPzZp4tieQ8x8yxIfxXPRKv8DCDoQABoMNjM3NDIzMTgzODA1IgyuPBsc%2B%2BI1RPkcz08q3AMKoMbZ29%2FRwLGepgOn2gOXV7Nf2UHS%2BQ48vibSHhSDKW7i%2BLue3ACArLsyvwJTZ9%2B0FTSBM7Mrs4Yr5eOLp99rnZAittFKU0M3dP7WUeefOKndMy3Rqpp%2F6WhvNsuXpFuKwJwH1a9zg02Va2Xt%2BkhuT6mpiLJk5TwJns6iVWOcILWax%2FwHEViXiuqHSN%2FufqrxKxdsJhQKKQA5ikseW%2FEs2taf3crNEQwcTRcvaMQ8P0PjBGm7DLs0ut8%2BcSHPrsLO95ttwK%2BV3EJMwug6V1IRxxHJJpiCBXw8zvJdv%2BdDPdq%2F2yBxazfckQZOtgQRJLe35eRqhA2Q2nZ9VizLtJj%2BJbWT%2FIS4BGJ2kbKgxegFq2KuHKGUraVB7t3qneLe3v3ixCGnE1mDXtHNlB5nu8l6DgL0RCZOykCRRMbjTcgtYGOv1Y%2Bg1rsJNWDiDVlORRNXgBkThL8ekAktFO%2BJjdsw%2BnhEkY13tGmiU%2FIZ6swySE65OjS0Uq2MIEipPK6rtpy%2BtPMuIVS%2B0A0OwpdWowHneCV1N%2BYRqFgbOPl2%2FJxhVmTI3cM6ljUUze%2BZQbvfXPQLljEbdXvmrJO%2BgBUMkIJj6MydHjfZxZ3YroLu0mg0pSF83FuoC7D3lAF5LTDbsOXABjqkAeCP%2BLtLGm5XH4XCC%2FbFmtRuRa3f9LGGQ2UAjQZJz45l8whc9oaIK1cZRWh4Fz1XGCnhYg%2F7DX%2BZi%2FmghtYG7s%2FT6LiH%2BGQnSfkFEuF0xrR8UbiBCmOP1wbmC9PkHl2%2BlN%2F%2FgeMAbwj8laMDp30eDQks758jCJfsnoG%2B16kIqa2EOeXd4R%2F3sE4M9Q9qxshASaGAMrY8qXiQpyIucWiWLsWFCrZw&X-Amz-Signature=cfa4c4e60a1b9b19ec73fc25202c3e251d54562c5ed1dadb847b9bd215c9dd6f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PMWFMJR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7rb5p5PXBYZTFkP8X1trGq3ZfWTPtFH0QroYlh6oghwIgKOnJWciAI1qR0gyST%2Bo%2Bzq1CRQny5yHW0etbl5V4sCwq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDEnJSVA8gnco7HLIhircA4O2boAY3gEkeQYr%2F2Sd4Hac59f3bCDkHRoUOxOvyY1OaV2X4gJWUyuzxpVt82wuDv3Y24DppEhMoz22c01MUwx6XaQrTWCXbonRqmjGpyjV%2FFILWokwU%2Bu7MzsUAvQ62fIZNku8SaF1H74RrjFXSlyDxGKfSBr7cs9CwsEqD%2FIxFxBCnY6%2BMRZonFvWvsfZrXJ%2B%2FoME%2FqF3ImG4bAgYm0GTrg4U4EwOxqTTF8f4zmi23VqHcDtjMx02lTQSYwWc1KXBTAtJ9aTP0Ll0FeyW74ugXCzNUU7mGJtElHNew5yZn%2Fq9IegmfkpJ%2BSQWrVRO%2Fpq7w1kYZvjKHbFrzOoJOL1Sis%2BP3VAmOP%2BMQ%2BVHYAAfYgiY205MM3woZfsIrfaCVpYZ%2BzDdx9ajQ6pHliV9dtF2ISjPsFkTkpWj0XTvNq5trISCMjAQ3LNYJ7LISoVt3gJ9td4%2FHkUSOJ%2BKSiEd%2FOMwwUO4tijKgOhgpqevANEwE4AhbcBPq0I3vBPJp7d2bcvZBZvs5XVciQj09wejiht83Rfk3iu31ZF0mVGCuY095YyuDlSa80Q6B3%2F8LNtB5kb7Y2RwD5WoaFn6I1jJGLJ1non3U6Um2YzoSRThvDfMxtRBKP5tONlnIxs%2BMPWw5cAGOqUBCrHCYbgKDYtv1OUPU5WpRCFro9rx1gomUMEFEcqqe1vWdSWDEdqdZDPYP8bEOuJRdv3oacpQrUHj4gXxHtNFp73YuRomKEiD9J3mW25XrPqONIyeMuPou0mekbQ8fmnjQ1gE0ZDTyukFHmraVb7S6cdV48%2FDrFQK2nJuG5hyuhiSBKBzGGVru95whnz4wDJWcaUfvr%2FKF9CtN0Ly5VtOaxV%2B91JJ&X-Amz-Signature=a1b1c100544a574b9058d65234ea0f9b4485319dcee538d564652b3fe41fde5e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
