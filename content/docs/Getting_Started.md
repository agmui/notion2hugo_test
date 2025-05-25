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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JSAFY3C%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHi8GFILCnbu%2FWN5v855NQvb2IqexCNUQwBKbfQh5SsWAiAvRLr04qrAg6%2BCwH%2FN0bzNJTkKB7aASL4Gej5d3JVXXyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM8PDPGiwjB4YBlC1BKtwDP1TQ150i7M1PXUGFNQYyj7VfqCo10awbF%2BscwsYavxyi4JXJLUojojUR3FTe1esLYfZ9F862AeW1HMLjSjQ1fKbp7OU5kwZacL2wMz4TkREvh5v0OSMreu1LpOMNDqrGVlfnnlA36sNDJOSLoV2JIlOlws6grZK1nalavJiHuwOnxKZ6QYZSQNlRyLD3JSCCFC%2B%2BoXktORMarfjYLnlzAJntOf%2FnESnSLEbQ%2F5TGIqOZYnfzF75ywvcAlGct8ap2%2FA%2FSON5BKu%2B9vyA86o%2BTPS5NDjYTGXHU2iXbNuQ9DL3RQhHVMLdPoaSCYrMgg%2F2H5RfpsCvBQkQcbWN3sg14zc4H%2F7V9Y8FvVop3sT1c5pVOlzuLZhJgYCUZxkmo4g7qMDyu1Ro42QuEVcpVHU9UFlMaAsnRi3gCuqxAaP85rA8jnMn9Pj0oBCBlUbtYrt1hkE5HH8qk2rWzl9p0EQmCxIu5B4EcLs%2Frv%2FZOewXmZ6RsdGAVXEdC0Xkhuu8goTWJOy%2Bbg5uj5Enl%2FC3gyjcFIwYbsXQHvPhEUxPUceghQmTvuuwEKiOmhtp5Eie7HBnpWjv4FjDeyxkXdCWuYuXUQufKTmkt4afsTfEBHp%2FwXLA0jpVMenAgTBqOAo4wvt3LwQY6pgHH6kD15oSXjnZih7fH%2FwA9x%2BNO6bAWimvBYm%2BJkc9b8dI2EtzxmttVtPF45NuDVJSEdcXfCjaZt08TSVXP7sSmehqV8PyksdWwGd2zdJuzBrUlFvnpedvw%2FKjcSy%2FkWQcQI7tagxocakTL8nuaaF80teIhN8B48Uc60UwE3QGPnG2Vih11J7seAS4SZtvu1fOT3sfnBdxiNG4SnqUXSs3e0%2FoDvfLJ&X-Amz-Signature=c09e6cea7125f490d53b1dc07461304b02dc813c0936c15d042733621323571d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JSAFY3C%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHi8GFILCnbu%2FWN5v855NQvb2IqexCNUQwBKbfQh5SsWAiAvRLr04qrAg6%2BCwH%2FN0bzNJTkKB7aASL4Gej5d3JVXXyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM8PDPGiwjB4YBlC1BKtwDP1TQ150i7M1PXUGFNQYyj7VfqCo10awbF%2BscwsYavxyi4JXJLUojojUR3FTe1esLYfZ9F862AeW1HMLjSjQ1fKbp7OU5kwZacL2wMz4TkREvh5v0OSMreu1LpOMNDqrGVlfnnlA36sNDJOSLoV2JIlOlws6grZK1nalavJiHuwOnxKZ6QYZSQNlRyLD3JSCCFC%2B%2BoXktORMarfjYLnlzAJntOf%2FnESnSLEbQ%2F5TGIqOZYnfzF75ywvcAlGct8ap2%2FA%2FSON5BKu%2B9vyA86o%2BTPS5NDjYTGXHU2iXbNuQ9DL3RQhHVMLdPoaSCYrMgg%2F2H5RfpsCvBQkQcbWN3sg14zc4H%2F7V9Y8FvVop3sT1c5pVOlzuLZhJgYCUZxkmo4g7qMDyu1Ro42QuEVcpVHU9UFlMaAsnRi3gCuqxAaP85rA8jnMn9Pj0oBCBlUbtYrt1hkE5HH8qk2rWzl9p0EQmCxIu5B4EcLs%2Frv%2FZOewXmZ6RsdGAVXEdC0Xkhuu8goTWJOy%2Bbg5uj5Enl%2FC3gyjcFIwYbsXQHvPhEUxPUceghQmTvuuwEKiOmhtp5Eie7HBnpWjv4FjDeyxkXdCWuYuXUQufKTmkt4afsTfEBHp%2FwXLA0jpVMenAgTBqOAo4wvt3LwQY6pgHH6kD15oSXjnZih7fH%2FwA9x%2BNO6bAWimvBYm%2BJkc9b8dI2EtzxmttVtPF45NuDVJSEdcXfCjaZt08TSVXP7sSmehqV8PyksdWwGd2zdJuzBrUlFvnpedvw%2FKjcSy%2FkWQcQI7tagxocakTL8nuaaF80teIhN8B48Uc60UwE3QGPnG2Vih11J7seAS4SZtvu1fOT3sfnBdxiNG4SnqUXSs3e0%2FoDvfLJ&X-Amz-Signature=c17db38e95c83a86beaa245a1a2a90dcaca90425b291bc6ca6da4d3b5771dd05&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JSAFY3C%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHi8GFILCnbu%2FWN5v855NQvb2IqexCNUQwBKbfQh5SsWAiAvRLr04qrAg6%2BCwH%2FN0bzNJTkKB7aASL4Gej5d3JVXXyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM8PDPGiwjB4YBlC1BKtwDP1TQ150i7M1PXUGFNQYyj7VfqCo10awbF%2BscwsYavxyi4JXJLUojojUR3FTe1esLYfZ9F862AeW1HMLjSjQ1fKbp7OU5kwZacL2wMz4TkREvh5v0OSMreu1LpOMNDqrGVlfnnlA36sNDJOSLoV2JIlOlws6grZK1nalavJiHuwOnxKZ6QYZSQNlRyLD3JSCCFC%2B%2BoXktORMarfjYLnlzAJntOf%2FnESnSLEbQ%2F5TGIqOZYnfzF75ywvcAlGct8ap2%2FA%2FSON5BKu%2B9vyA86o%2BTPS5NDjYTGXHU2iXbNuQ9DL3RQhHVMLdPoaSCYrMgg%2F2H5RfpsCvBQkQcbWN3sg14zc4H%2F7V9Y8FvVop3sT1c5pVOlzuLZhJgYCUZxkmo4g7qMDyu1Ro42QuEVcpVHU9UFlMaAsnRi3gCuqxAaP85rA8jnMn9Pj0oBCBlUbtYrt1hkE5HH8qk2rWzl9p0EQmCxIu5B4EcLs%2Frv%2FZOewXmZ6RsdGAVXEdC0Xkhuu8goTWJOy%2Bbg5uj5Enl%2FC3gyjcFIwYbsXQHvPhEUxPUceghQmTvuuwEKiOmhtp5Eie7HBnpWjv4FjDeyxkXdCWuYuXUQufKTmkt4afsTfEBHp%2FwXLA0jpVMenAgTBqOAo4wvt3LwQY6pgHH6kD15oSXjnZih7fH%2FwA9x%2BNO6bAWimvBYm%2BJkc9b8dI2EtzxmttVtPF45NuDVJSEdcXfCjaZt08TSVXP7sSmehqV8PyksdWwGd2zdJuzBrUlFvnpedvw%2FKjcSy%2FkWQcQI7tagxocakTL8nuaaF80teIhN8B48Uc60UwE3QGPnG2Vih11J7seAS4SZtvu1fOT3sfnBdxiNG4SnqUXSs3e0%2FoDvfLJ&X-Amz-Signature=5a9ea56e8da5079d12347c4eaa106fe83e1b07ebe06f0d6c5366c10fb9270dec&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OOYSFKL%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIF2djvu4Hlhewd%2Bk44zRwuQNhhaJGoQslIRNM40lWqwGAiAh%2B5%2FDpyp5cjKa7j54qjeECqWuFEZHtE2A45yn8qTyjCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMV0lpBQSYY1I4%2FiaFKtwDSPzNzU8ef6JIm%2BL0LzrVkoHvSseQlfRAalseMLcJ94zdYd%2BO3loTAYkcAkU9%2BSHlkOitjf%2BhFIz7gnYDFqjfDQ%2FbacgL8ZZzFfRyevofRbtUAUITKxlYp7WniFwvtdRW6lMuy0qffFAHPdCCSh1QvcR1y7tfnb0bI41%2FwZjej%2FY6H4%2BTZOhjWupr5sraG2Bg1L0Pl4WnGByHOAZqPPtICaEc1wvF2VUhuS7gjYrNXckVfDNZLa2eJh5bKwC11hI57iQarhIwwTsxHDpoDqB14iR4cKNnlHr8EH2MwBhqBPvYneAgYRAVMvxUG1E3MqUPFoAJnMH%2FxD1%2BzYzxVu0AM4r%2BVXImZRrKc5uDTro8IDlgas6LDDokvYmYBw5gpxDrYLocJxiangusfzM8vwoiXBTI%2B4HmL2S3T3K0fvtji5oqlS%2Fz%2FOlvOryL%2BRyoL5U5UrQv0IUd0xAQApWsvUnw4G5lXFU6Z1u3z8oYjuAOjSBdqefpoKOb5ReSWEB%2FmAZiiHmVzGDcx%2FYNM%2BZVsUEwY2F1p1GdSTe9I76Pa%2FSStwDm4uF0XvtR8AlmBgS7YwRk1bbBwvpFEItyu5o5OZvzY7bHnLDP54H4L4oBJyU0HexFr1l6ld0bWKWNqKMwwtbLwQY6pgFCABAGNsBGFbUHbFnmqUHAeBIM9lFiWDfCMCGR7Z7f0WXThcGZNpvKNNVnKkfrbvrL%2F4Iz2Lc%2FvSP2SQ2Tw%2B2GePYYmFqar%2BMWJPSnm1PerK%2FOsxdidjEHC7m%2FM%2FUDmjkuk2X5hXD0O68Ok5GQE4IilCV%2FpsxMzSCy%2BYOd5Op3Z1hc9rRRcEmQ6IQrGbvZ7rNyi3b4du%2FcxOSr4VBZmlI7xy6GoIdI&X-Amz-Signature=080c2ce30a455144c87942c67951aec70c117bb800cfc1b5d8ccdb9fba245d38&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMM3FGF4%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIHIsAeRrT1aEumCb1NSHl3pHUVNAfn3hVQUKbqnXcVKTAiAtzVhewyQCSWSSdLhSNPEabc32VQ5HmeLFAEWZxpWStCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMACcqwrPf7xjfEAxOKtwDuQM9M8Egj%2BEloywxcqEAhJCmZRQ81m0K0KkcxOJWg7qvOuLV0pAghP4GOQOBIvYkgwslZrov97M3vqpS%2BVUS0S1ztai2yfFdfwf8298cncISrNHgF%2BzSB7iTamTYqT4EYUcw6wqw%2FLVngAeYgw34mmESiS6KNCzACO0MPfKbxcni1oHBIBdK8dAjRB2%2FJQf%2FKFAVLlg4SVNsTSjdAqYm6WyH19zMvcqYTY1tziMdhQKB0PMf%2B%2BEqV3LuFblaKyRPWkjVQd2zzwYXKl%2BPEqcfILcYNhGaZjGv2aYjrmUcYsmpGBe6649%2BVj5EcuMcwK7fQvkUaCA%2FwWF%2BvQxE7546wQ4t5XzIsPe88btFljebTP8Or2j9tmUMg95tVI03rSG%2BMJKMayWKdUNTTCP53eeXT%2Bw65pCDt1H2reLGU4mFIp4rYsx%2Bt3KNVMe6jINc0rK1ueyLbezHXxLJ95Z6QuHjjtnYclMfG%2B68kMxWGYMmej6fxwL9gS5qEqjkxg87znrWmNXFNLq6U63%2BQoApUCfPLzj1kqV2wBhYb%2FMRPqmYXm9n1uXcdAfSkad9HG5ob%2FIQ%2BFJ3pJhpPl5ziX%2FktL%2F9WuVTdiRJq63Kbxnnnbl3D8qXNaBkd%2FbTiKFQi1owm9nLwQY6pgHZ7jxTTuQHVl8FzF6X7kuTFIUz%2F7L0VRAX6G6DEUzdPgZaGT%2FOW8UxXI6F6DTOoK0pDLAhty5quJW7lVLYQ%2B9KxW%2Bb1sy9yqI%2BmhIPP4sZrU8bCG%2FNuGnHT6ulj5s8Vy5XIEpo7bxSC%2B9%2FkjKrx6CuAuvtT%2B3R29mNixLGlTpWks0UkHSz3gGYSuzjJ%2F93Zpir1IcuBPk4WgHV2rX7J7pN5LhDVh35&X-Amz-Signature=df5097ffe0b33f8f1efb9098066d305e0dc42e7b8b2239b48c7dad35ac4e2d06&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JSAFY3C%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHi8GFILCnbu%2FWN5v855NQvb2IqexCNUQwBKbfQh5SsWAiAvRLr04qrAg6%2BCwH%2FN0bzNJTkKB7aASL4Gej5d3JVXXyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM8PDPGiwjB4YBlC1BKtwDP1TQ150i7M1PXUGFNQYyj7VfqCo10awbF%2BscwsYavxyi4JXJLUojojUR3FTe1esLYfZ9F862AeW1HMLjSjQ1fKbp7OU5kwZacL2wMz4TkREvh5v0OSMreu1LpOMNDqrGVlfnnlA36sNDJOSLoV2JIlOlws6grZK1nalavJiHuwOnxKZ6QYZSQNlRyLD3JSCCFC%2B%2BoXktORMarfjYLnlzAJntOf%2FnESnSLEbQ%2F5TGIqOZYnfzF75ywvcAlGct8ap2%2FA%2FSON5BKu%2B9vyA86o%2BTPS5NDjYTGXHU2iXbNuQ9DL3RQhHVMLdPoaSCYrMgg%2F2H5RfpsCvBQkQcbWN3sg14zc4H%2F7V9Y8FvVop3sT1c5pVOlzuLZhJgYCUZxkmo4g7qMDyu1Ro42QuEVcpVHU9UFlMaAsnRi3gCuqxAaP85rA8jnMn9Pj0oBCBlUbtYrt1hkE5HH8qk2rWzl9p0EQmCxIu5B4EcLs%2Frv%2FZOewXmZ6RsdGAVXEdC0Xkhuu8goTWJOy%2Bbg5uj5Enl%2FC3gyjcFIwYbsXQHvPhEUxPUceghQmTvuuwEKiOmhtp5Eie7HBnpWjv4FjDeyxkXdCWuYuXUQufKTmkt4afsTfEBHp%2FwXLA0jpVMenAgTBqOAo4wvt3LwQY6pgHH6kD15oSXjnZih7fH%2FwA9x%2BNO6bAWimvBYm%2BJkc9b8dI2EtzxmttVtPF45NuDVJSEdcXfCjaZt08TSVXP7sSmehqV8PyksdWwGd2zdJuzBrUlFvnpedvw%2FKjcSy%2FkWQcQI7tagxocakTL8nuaaF80teIhN8B48Uc60UwE3QGPnG2Vih11J7seAS4SZtvu1fOT3sfnBdxiNG4SnqUXSs3e0%2FoDvfLJ&X-Amz-Signature=c724a243e81d9102cfc104b02a25607583e7b5d25240842344475fec3f06db19&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
