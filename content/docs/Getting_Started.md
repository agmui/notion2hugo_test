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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTOARFP2%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAjdwHlImsUR0rx%2BsbzLOzjWp5vOFYhWz7m5DGZ%2FtifAiEAgPWQ1Fb%2FXYXy9AAlv2fwxwb5%2FG0qoJ1AZ7H4tYg25ogqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWZ8Rv6ptRC0jFygCrcA8wCEF5wdlfvzhAQo50ZHzt%2Fkv1JRlhX16hqZZ7DxnysiayIc1E8mr7mNeliPyZOPE678i%2B9I9T8bQv7uRIfsLD8j6iz3T0HiqsAV4xIrpiGvuHDur7eQyhtN2HoPAwBHQGJgPBKGXSYaqmh%2F7E%2FC7%2B9f%2FEPC8aeHuU2LDMz2x8ihw23pKlOd4%2BIXrhomibqrWkG%2FB455J4ayJIpo8VjSaT%2FeyCPuJEmBp6Mm8fQJh0W9y9AU7asd6bZmbegIqcgvmzlF8m2AQfVRll2Peg8GUeR2Oiv3T1C49Hufp8KDESBcIEQg%2FtaPr8cLjl7Kx%2BnxxZxM3CgVFLKFWDbI%2Bk4r5N2TWUQ%2BK%2BbJiTWaYylFLO1rSAB2v%2Bm6ikFO1qxbtkaK1ccBneC%2BWPEyGGmrn8rBtA6L8t1ph41oLYeNggNTV6gkpKxTj1JAnK4AHNGABzf0EiLG%2BqfVkbTl1I%2B2XSpiS9sdKeZ99ps%2F2TjunjIfwpOfVm7FnVfDKnLhbDATzjf%2B1WudRw2wFfYEvIgA1iE253xyrBXhbOlSOddTww%2F7SkQEGv40UyzsWTBNruvfaY7yC0aUVW2K9t7bxTozX9mup9RXCWeQ3PmLISqlfS%2FmvOJoudJtZYxgQ6bjcd%2BMJWursEGOqUBSpySMvvPMSYDhZeMkNXhX0AcwFprcxBPqHtj9TOevmSaU%2BexyN5MzGJ8Hal9WTUtgkXTe3Q%2BmMI2nQK1Hwy1fDb4vLyhWr%2FFp2ume3XgNv3V0Y1uMH38mSgmCCK%2FVj23HFx8bBUM1Lo8XzgFX1npI4QR0zeObeyuHn7QB1Xlk7Ar0qeh3ga%2FddGogHIHfnYrW%2F9uB0LGhyFsJq0TwJ7DR4XJyShj&X-Amz-Signature=a0e4fa880c20d33c03899eb11b5abdc28fcaae17dd9c20be50364d2f9b640cb9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTOARFP2%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAjdwHlImsUR0rx%2BsbzLOzjWp5vOFYhWz7m5DGZ%2FtifAiEAgPWQ1Fb%2FXYXy9AAlv2fwxwb5%2FG0qoJ1AZ7H4tYg25ogqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWZ8Rv6ptRC0jFygCrcA8wCEF5wdlfvzhAQo50ZHzt%2Fkv1JRlhX16hqZZ7DxnysiayIc1E8mr7mNeliPyZOPE678i%2B9I9T8bQv7uRIfsLD8j6iz3T0HiqsAV4xIrpiGvuHDur7eQyhtN2HoPAwBHQGJgPBKGXSYaqmh%2F7E%2FC7%2B9f%2FEPC8aeHuU2LDMz2x8ihw23pKlOd4%2BIXrhomibqrWkG%2FB455J4ayJIpo8VjSaT%2FeyCPuJEmBp6Mm8fQJh0W9y9AU7asd6bZmbegIqcgvmzlF8m2AQfVRll2Peg8GUeR2Oiv3T1C49Hufp8KDESBcIEQg%2FtaPr8cLjl7Kx%2BnxxZxM3CgVFLKFWDbI%2Bk4r5N2TWUQ%2BK%2BbJiTWaYylFLO1rSAB2v%2Bm6ikFO1qxbtkaK1ccBneC%2BWPEyGGmrn8rBtA6L8t1ph41oLYeNggNTV6gkpKxTj1JAnK4AHNGABzf0EiLG%2BqfVkbTl1I%2B2XSpiS9sdKeZ99ps%2F2TjunjIfwpOfVm7FnVfDKnLhbDATzjf%2B1WudRw2wFfYEvIgA1iE253xyrBXhbOlSOddTww%2F7SkQEGv40UyzsWTBNruvfaY7yC0aUVW2K9t7bxTozX9mup9RXCWeQ3PmLISqlfS%2FmvOJoudJtZYxgQ6bjcd%2BMJWursEGOqUBSpySMvvPMSYDhZeMkNXhX0AcwFprcxBPqHtj9TOevmSaU%2BexyN5MzGJ8Hal9WTUtgkXTe3Q%2BmMI2nQK1Hwy1fDb4vLyhWr%2FFp2ume3XgNv3V0Y1uMH38mSgmCCK%2FVj23HFx8bBUM1Lo8XzgFX1npI4QR0zeObeyuHn7QB1Xlk7Ar0qeh3ga%2FddGogHIHfnYrW%2F9uB0LGhyFsJq0TwJ7DR4XJyShj&X-Amz-Signature=fc973659d5fa8bef8b357c2a564c36acd2322b6d5eb0c7edab7c2e7be3fc1ef0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTOARFP2%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAjdwHlImsUR0rx%2BsbzLOzjWp5vOFYhWz7m5DGZ%2FtifAiEAgPWQ1Fb%2FXYXy9AAlv2fwxwb5%2FG0qoJ1AZ7H4tYg25ogqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWZ8Rv6ptRC0jFygCrcA8wCEF5wdlfvzhAQo50ZHzt%2Fkv1JRlhX16hqZZ7DxnysiayIc1E8mr7mNeliPyZOPE678i%2B9I9T8bQv7uRIfsLD8j6iz3T0HiqsAV4xIrpiGvuHDur7eQyhtN2HoPAwBHQGJgPBKGXSYaqmh%2F7E%2FC7%2B9f%2FEPC8aeHuU2LDMz2x8ihw23pKlOd4%2BIXrhomibqrWkG%2FB455J4ayJIpo8VjSaT%2FeyCPuJEmBp6Mm8fQJh0W9y9AU7asd6bZmbegIqcgvmzlF8m2AQfVRll2Peg8GUeR2Oiv3T1C49Hufp8KDESBcIEQg%2FtaPr8cLjl7Kx%2BnxxZxM3CgVFLKFWDbI%2Bk4r5N2TWUQ%2BK%2BbJiTWaYylFLO1rSAB2v%2Bm6ikFO1qxbtkaK1ccBneC%2BWPEyGGmrn8rBtA6L8t1ph41oLYeNggNTV6gkpKxTj1JAnK4AHNGABzf0EiLG%2BqfVkbTl1I%2B2XSpiS9sdKeZ99ps%2F2TjunjIfwpOfVm7FnVfDKnLhbDATzjf%2B1WudRw2wFfYEvIgA1iE253xyrBXhbOlSOddTww%2F7SkQEGv40UyzsWTBNruvfaY7yC0aUVW2K9t7bxTozX9mup9RXCWeQ3PmLISqlfS%2FmvOJoudJtZYxgQ6bjcd%2BMJWursEGOqUBSpySMvvPMSYDhZeMkNXhX0AcwFprcxBPqHtj9TOevmSaU%2BexyN5MzGJ8Hal9WTUtgkXTe3Q%2BmMI2nQK1Hwy1fDb4vLyhWr%2FFp2ume3XgNv3V0Y1uMH38mSgmCCK%2FVj23HFx8bBUM1Lo8XzgFX1npI4QR0zeObeyuHn7QB1Xlk7Ar0qeh3ga%2FddGogHIHfnYrW%2F9uB0LGhyFsJq0TwJ7DR4XJyShj&X-Amz-Signature=456d2678702b13504230df0fb3352d843eccf86f225a957a04175a87e3df96de&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFR4CSYY%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuFsaTAyDc5QkIoIYX%2Bu3h0ljh0dzxAXvA3RQ56CFbzQIhAOLoIKVGcbFxyN0wAoHxGRU3P6gaZnjDEGdigDaCBEi7KogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynEL6jSVo5qIkWlw8q3AOLwpc9jHziSMv1CiIiOyukZstcm9YPwm7UBiT93IJqCfVeHv4JCcA8DCiHH9GLh5Uh0EUG5K51FdudZ4MLxB1gzVu2boC4u9e1ZEk0yNBNjc2ZphFIx4x3eJk7%2BfcbIvE1L3PrBay6JYsZDVvM%2FtTPG2FTY1D%2FkfCXMTlYlsYJ1Y1hboSHfHf2x%2ByangjSU3aOKo3HtQXSP%2Bp%2BNC1u89ftltIFwgbL3QvnYvDcofjO9wXbfZamk6cPHe%2FGBsSvoa4yJhMpy0TR7HJhrFsFkVDvZy0DcWxI%2FuS3hPYrol7glhvSsa2H8qOF4rAyE6JXT5gn%2B1vM769f94tz%2BS8UuK1ZMEN%2BDPg%2FOHzQAm80fIDTWS4L8yeJwa75VEZP%2F7zbrLHL47qq6BPe6V3KtJqUEv84tWBw%2Bxnm7liAzHA5MbaAeJ2Xj1yK9S0ZI86%2F1nhYtDySA3nQhdS9gIcuRbIox%2Fto3DWGmMJO6%2FyvNSUGMivMhBsXmXvFg0DzvkX%2BSueeD7hdUhr3OLvcfNCXNZNU%2B%2FpoWCRSdj4vCSbRs33FU4nTaIfMkdBXMYhuQC1SymlblkuZqci7DEPNUOA2XGllRCrWTLsx79cE%2FarRnCYFBGcjdInySkl4mDNO4EzWBjD8ra7BBjqkAVqmhTU%2Fjt5zLq9pSEw3IFWiLyR5tj2Bh4eTPQQrhF0kniAL7OKsp9EjpCZjJ9p66eA04gseGWJtKYvGQxN5pnKyhUI%2FKO9TlVy1b8slRIyJgMQQtyMPpxrOfTPALk8JWbTJvGW59mDaZV%2F%2BBYW1QNNjAjoXi4v15x7ofBeOYs%2F8paAJYtXskQBmHxg1XKn4vZbBOhC62FJh7HirHGSpSIHEJI6e&X-Amz-Signature=d74d9612967d455d0eb9f656f88ca90e647b1267c5fd51956927160bb277553f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FF3D5RA%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9zeoUxcTwt2FNyzzDsz0Qyp5cNqjP22NKXph3bK2DGgIgH69C8Y43I4nLB0CWTaNANLdISKFHfbdN28zvxMHHQ9cqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhBXezliTrsHS1TzCrcA5%2FUg0m%2FLsgHI2weq82nKsgZOWIHv2BUwFxNqY2KiYaogY0sHFVK4A0aRdBDM99wzGJPZVUwX%2FQE28S7qMG1Os1dgpg%2FnB%2B%2Fii82c86O3QvtxrB1Ig%2FcJSkeW4aK3p6P6piIT4xWCq56W5z63HG6TVwJIGo%2BLVSO4xAqzhGbg%2Ft3dxf1%2FE18zEu2av290sfaK4y2OUxei7qKolIo0kPYDOaAtOZwDdo4YUw9%2FCh%2BPI9%2Bg9nRD8sOSCNV1adV4NEGE90LTAP1tVWZymCRVWT36i2bItdbWu9CcZ7KBeguaMLE6ea5qBasV22zrv8PsQ1%2BQ5n%2Bi8RVzO60K5GrO3dqTWyX5nxj3SOCvNbLepsqgrz7g1RoyKoxJ2h4vOroFKgqHXxLW3VjRELip1%2BAsMKwQPpx0rfUDuc0B3HVtyfJTOh1x559Z01hhq7wPx6BnzDCV0VEIRRefzV0nGTlKXYKO3%2BBV2mp3NiwlrO8BMVfXweFsvViTJo3sFWqnYgUDjGKoEY0GTNcp9sOQdeJiKZ32LD8SpvhuaDmaBT8yC9qF0Vz6I7VmSb7ChdzQ%2Fyb%2Bk34sA0WwZXIUJBH0VlisNC9lSqYVCmsyimNjvkVWwWO%2FGYUvmBMYe49CExiUx9ZMPqtrsEGOqUBjQZ0tk3GqS9D68h%2BPG9R8CFe%2F9VGNxVlKrX9QPiKpb%2FV2IFoeTYRQjsQJQmV%2BUZRUptxcp2%2FE%2BKbvSzLvIm8%2BbOGoydQUZOoF1%2BN0TrGTlYNEi%2F615fuUPns%2B332Y5Vxnv0CQQb8j3r2NtVay5mYJRyvXwtn%2B4PXoagbJRpGIDJmeG0l5348pa2R31wlSxSjisnbyzN4rg%2Fz5Utzr4xjLeXTHB%2BU&X-Amz-Signature=c2afd12e3f7e2b6b116144b89de81448ecc965b0d8c6733f4e2a95f27a48b029&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTOARFP2%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAjdwHlImsUR0rx%2BsbzLOzjWp5vOFYhWz7m5DGZ%2FtifAiEAgPWQ1Fb%2FXYXy9AAlv2fwxwb5%2FG0qoJ1AZ7H4tYg25ogqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWZ8Rv6ptRC0jFygCrcA8wCEF5wdlfvzhAQo50ZHzt%2Fkv1JRlhX16hqZZ7DxnysiayIc1E8mr7mNeliPyZOPE678i%2B9I9T8bQv7uRIfsLD8j6iz3T0HiqsAV4xIrpiGvuHDur7eQyhtN2HoPAwBHQGJgPBKGXSYaqmh%2F7E%2FC7%2B9f%2FEPC8aeHuU2LDMz2x8ihw23pKlOd4%2BIXrhomibqrWkG%2FB455J4ayJIpo8VjSaT%2FeyCPuJEmBp6Mm8fQJh0W9y9AU7asd6bZmbegIqcgvmzlF8m2AQfVRll2Peg8GUeR2Oiv3T1C49Hufp8KDESBcIEQg%2FtaPr8cLjl7Kx%2BnxxZxM3CgVFLKFWDbI%2Bk4r5N2TWUQ%2BK%2BbJiTWaYylFLO1rSAB2v%2Bm6ikFO1qxbtkaK1ccBneC%2BWPEyGGmrn8rBtA6L8t1ph41oLYeNggNTV6gkpKxTj1JAnK4AHNGABzf0EiLG%2BqfVkbTl1I%2B2XSpiS9sdKeZ99ps%2F2TjunjIfwpOfVm7FnVfDKnLhbDATzjf%2B1WudRw2wFfYEvIgA1iE253xyrBXhbOlSOddTww%2F7SkQEGv40UyzsWTBNruvfaY7yC0aUVW2K9t7bxTozX9mup9RXCWeQ3PmLISqlfS%2FmvOJoudJtZYxgQ6bjcd%2BMJWursEGOqUBSpySMvvPMSYDhZeMkNXhX0AcwFprcxBPqHtj9TOevmSaU%2BexyN5MzGJ8Hal9WTUtgkXTe3Q%2BmMI2nQK1Hwy1fDb4vLyhWr%2FFp2ume3XgNv3V0Y1uMH38mSgmCCK%2FVj23HFx8bBUM1Lo8XzgFX1npI4QR0zeObeyuHn7QB1Xlk7Ar0qeh3ga%2FddGogHIHfnYrW%2F9uB0LGhyFsJq0TwJ7DR4XJyShj&X-Amz-Signature=3570829359e9ec04f106000d1dc7fde83cb30bbf760de59e7931c8d0cddea9bf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
