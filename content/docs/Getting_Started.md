---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GQIUEHO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFpXxt8LDPwTJCVf2GFdCU0MZ5Ag5eMY6fBZoBhTaPR9AiEA3vp0Zljj2XSUyplpcc4sEhDBAL505edRnelv3tJcJ%2BQqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBurrnuExL03MZqjjircAx9Z%2BoAiWI7DwM3rzR5v7J%2FNS7P58ZnHvAF%2FgjlsVvia4CBtlJP%2FJbiTcd7hCDiVSf8rCA%2FHLgqB%2F2nz5rJcGYHpsJFI4l7b4UZO3q%2Fyr8kdTWj%2FrGXXBmOuGSkY%2BUJibpGcPn39JnDCNSlFb9Md1%2FeD8vdunB%2BFWT3s%2FPLz6uQShuLtq3v6pvvnCAkBwr%2BRobP5k4uMCeo10X1Zwj%2FRr20D7MvMo1yeODFwbyylSYRDJxd72122l1lhauQWiHg8ZrbroCZwyRv9BVspFDwFCSNZIQUos95%2FmjbDfJzXpzydN0bk7ieqamst28sXs%2FLE4YgYgtlThJPGua5ReYoIrJMM70aKsQ5RHgUe7D8E2OGAKYL1SPJJ4tcyZ6XllEA07er5%2Fpmv4bAVNdTUfMkv5BmuYbtYRTctteI8e4LCuHSMLPc%2Fj2kWBbmhUbWGTvFnDbpa51pB5idlvXsAtogpr42iK3cPRQvdjc7ZKiE86FnS5YmcSbpACsESXMY3YeuE6zp5%2F8xLw7LrYwDoBdZUWO3yqglykdkQSAyQe79ZzfgGrIz7Wtf9bcDAjC230zii41zuV0YCiYJSJ%2BSU9pVuUf2eqVOabDGl6Vgg4MCHmtGpCDTyoYzNFVXuV%2FwdMOqvh74GOqUB2bv4VFJW80knQw9OUHC%2FCa4N%2Fa38DTRcz1L1Fx3kZ75UQjW5IFoIB4p9wUT5NFqPgh98Ip3ctw7ccD9SunukFnOiaDnpQkUZPj6BMDD%2B7Dpnwm1StMluwEPQ1Am%2BNFphoPx0o6rd4DaoozPApPSDuk4BgcsSVx9HyzGYEurzuBv3P8KSdJ3krBzz72iRZsaknMLo7QIMXdtp67COCPljS1TxAYt0&X-Amz-Signature=73284e6b6779505178a48a70e3121d6491fe3fa395644b7965dedded0e5951af&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GQIUEHO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFpXxt8LDPwTJCVf2GFdCU0MZ5Ag5eMY6fBZoBhTaPR9AiEA3vp0Zljj2XSUyplpcc4sEhDBAL505edRnelv3tJcJ%2BQqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBurrnuExL03MZqjjircAx9Z%2BoAiWI7DwM3rzR5v7J%2FNS7P58ZnHvAF%2FgjlsVvia4CBtlJP%2FJbiTcd7hCDiVSf8rCA%2FHLgqB%2F2nz5rJcGYHpsJFI4l7b4UZO3q%2Fyr8kdTWj%2FrGXXBmOuGSkY%2BUJibpGcPn39JnDCNSlFb9Md1%2FeD8vdunB%2BFWT3s%2FPLz6uQShuLtq3v6pvvnCAkBwr%2BRobP5k4uMCeo10X1Zwj%2FRr20D7MvMo1yeODFwbyylSYRDJxd72122l1lhauQWiHg8ZrbroCZwyRv9BVspFDwFCSNZIQUos95%2FmjbDfJzXpzydN0bk7ieqamst28sXs%2FLE4YgYgtlThJPGua5ReYoIrJMM70aKsQ5RHgUe7D8E2OGAKYL1SPJJ4tcyZ6XllEA07er5%2Fpmv4bAVNdTUfMkv5BmuYbtYRTctteI8e4LCuHSMLPc%2Fj2kWBbmhUbWGTvFnDbpa51pB5idlvXsAtogpr42iK3cPRQvdjc7ZKiE86FnS5YmcSbpACsESXMY3YeuE6zp5%2F8xLw7LrYwDoBdZUWO3yqglykdkQSAyQe79ZzfgGrIz7Wtf9bcDAjC230zii41zuV0YCiYJSJ%2BSU9pVuUf2eqVOabDGl6Vgg4MCHmtGpCDTyoYzNFVXuV%2FwdMOqvh74GOqUB2bv4VFJW80knQw9OUHC%2FCa4N%2Fa38DTRcz1L1Fx3kZ75UQjW5IFoIB4p9wUT5NFqPgh98Ip3ctw7ccD9SunukFnOiaDnpQkUZPj6BMDD%2B7Dpnwm1StMluwEPQ1Am%2BNFphoPx0o6rd4DaoozPApPSDuk4BgcsSVx9HyzGYEurzuBv3P8KSdJ3krBzz72iRZsaknMLo7QIMXdtp67COCPljS1TxAYt0&X-Amz-Signature=2a3677c62c8da0455c89140c5dd31adc7f5a286ac1766cb2dcfd82c9e37e76f6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LOAIAIN%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIE9Jp6WnBRIoVhEKRfBOIvEHjDf8eXbZP6mKlJmIV01XAiEA5bSvlvU%2F94Y%2Bmqc6b56%2F9yQSVaAX%2BYGhxfk%2FoqrevE4qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJrdoiHC7t5xU7YECrcA6JVdekNLMI2joP%2FtAY5y0Po2XdW1e%2FXCqsvsQNJy5FHJlUsO%2FjklaKp3YMDv%2FZ5hHh1CHpytrcolLKUd5H5%2FcUbn7lcNgAnB1AS29qKsk3ct1dlUK0r3N7tOtWg2WcJ8%2FnJggfbj2UkbWCDU5sV9pDipoeVKOPJYiWArUOl6aYDKPvB7VvPH0mfk6zNWJIFykKTofC%2BlaXi%2Fsirq3tHiAgFnzMZhkE22d5piUAvipCp03dwSSLfhuZQghUTWmrh1hFiA6rJSE1CaF0bCRv9%2FuEyoeNghjUdTzz3v1Y%2Fcj7oGOnZR2eyc6YC3iwAZU2QDRgsnRucmWjGtcukRpUUTPTMmecj0QqQZnVbBzPjN36O1819lfEyUQ1mmbtKDSSAbU4Dwc2QzfnHGTNb9hh54pxpZ6j9%2FAuHgNgNYTOb39tFU2hNozwtoBczKGXzeJS%2FVPxgYC703fCdCHR3Cblj9C0C7YlF3HWI34vaBEYQ4%2BHxdyU9FahHN9q1mkvEeFunZ6Nqu5Ftgz6gPL%2BHnD%2BLSeQuTtZsnRW6FT4uXdBZGAdGUejbNJ5VYx4RrgT%2FeHtsS88TZebYGLpflixH3pSgkHYFScir4o6Y0dh9aAe%2FEIXvRXElxJEHvSLBvU%2F%2BMLiuh74GOqUBInqeg0VOTa898l3TvSBNnVfBKwmEgSxjJNUtl2LDV3mqXM%2FyKgOXFTP%2Bfg1F1TXBjr5eT%2Fahvl6CZj3A3ILkKMF%2BubF8Cg96gLBL3opVlAprSWk40OhuuYIJUirTjs5LpQkLlJYIzcWkm6rPnEkP6FU090ybGUHf4SjE%2FDiUW9RNyNcm7c6oPyIRLpmgUC9ERr14Uge0f8OQZbTJ9nGKxeCpuXPH&X-Amz-Signature=f63b48cfea1e70b1465b71fea399350089d75564bdd4c4c375e5cf8d7e7bc6ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLTBVDDV%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCICoeu9eFr7Ua%2BfwGc1pnlc4lUc9r%2BV8suHcxspEDAxwrAiBYMBkNtmZORqtiekK%2Blh%2FGyzmKbaxNbI9vSA9VCsr1%2ByqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGfb4QqsCq5k7afkjKtwD91tNmGvVsiNzLnELsNbcdvDGal8Hh%2FjKOoJFirOg0jhVyjc1%2F1K%2BSzbeOe2Q7yTGu68PIaAGTPI4ZQiVszULwnTBWz6f90DjvOBFSPQz%2BPfzEuaDkQMtAOKUX8melVnyPqGw6cN0UPy6%2BhsHqaWTp1NA4ySdAsMafqSS%2FXUFn0JB7CEkB0kBCHMrNJqnNnR9pTEvLPoKB77zLGWrr5V7DWTn6muuh%2BWs0tOCb%2F%2BTcCwWyQluf%2BkKE%2Fu5EsON9Eu6yIxB3xe60gNBKdMx57U180vaYum3O%2BZBwsFG1j0IqbpdcdJNuXEX4%2BQsp3WdEahFb0CTtCFAeoUeU05aJR4w3nox9DD79tqPBe0WtAgdukubcBeb0zDSepYtu3uVbr7VU6HryX%2BDxHTm8L7WM4za3sGXPn9Q1dQDODQUrP92kpVTokk3xhFEXnjCU7HtBEMYiAw4CuX5kZ%2ByH%2FATY27I2iqe%2FERIuAcb1kLm75Lpp4NYk9mlwZXdu6QRzzYgeB5Y%2FOu1nHuqTe2pYLSsBkCxAxcTRPfF5fhyZdz9utH9ccDzk%2FqYvVTUXLKmDPumKp0GHAeB7tp8eT2hT1GaLNYAZ7RJuv7hZRkPk%2BncA4e6cBHiZ9VDlAWxRXhMFWEwoa%2BHvgY6pgHxpHg1k7QsyL84XzIT3s0b7ONLGt0b8JtnYopaKy%2BI4eQWHUN4H90SCeTxPbLjhoiLUahAckwH7CJsLxK8gH3zAoePcsxn9rzz090IL2T8jloifcjJJZNDisaCSWmlxOLwYoVEXOCGZ38iAqtyBLWVYg4iR3UqwreON5D2s2ZiG7799Cg7VFcNpAfcLhBeeQaAFCJWOUyl%2FqgyXB4KqmweBRzx%2F0AC&X-Amz-Signature=5cbc7169d1e3cb151477d12de616ab8435513a8b3ad2761c36837763c802d199&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GQIUEHO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFpXxt8LDPwTJCVf2GFdCU0MZ5Ag5eMY6fBZoBhTaPR9AiEA3vp0Zljj2XSUyplpcc4sEhDBAL505edRnelv3tJcJ%2BQqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBurrnuExL03MZqjjircAx9Z%2BoAiWI7DwM3rzR5v7J%2FNS7P58ZnHvAF%2FgjlsVvia4CBtlJP%2FJbiTcd7hCDiVSf8rCA%2FHLgqB%2F2nz5rJcGYHpsJFI4l7b4UZO3q%2Fyr8kdTWj%2FrGXXBmOuGSkY%2BUJibpGcPn39JnDCNSlFb9Md1%2FeD8vdunB%2BFWT3s%2FPLz6uQShuLtq3v6pvvnCAkBwr%2BRobP5k4uMCeo10X1Zwj%2FRr20D7MvMo1yeODFwbyylSYRDJxd72122l1lhauQWiHg8ZrbroCZwyRv9BVspFDwFCSNZIQUos95%2FmjbDfJzXpzydN0bk7ieqamst28sXs%2FLE4YgYgtlThJPGua5ReYoIrJMM70aKsQ5RHgUe7D8E2OGAKYL1SPJJ4tcyZ6XllEA07er5%2Fpmv4bAVNdTUfMkv5BmuYbtYRTctteI8e4LCuHSMLPc%2Fj2kWBbmhUbWGTvFnDbpa51pB5idlvXsAtogpr42iK3cPRQvdjc7ZKiE86FnS5YmcSbpACsESXMY3YeuE6zp5%2F8xLw7LrYwDoBdZUWO3yqglykdkQSAyQe79ZzfgGrIz7Wtf9bcDAjC230zii41zuV0YCiYJSJ%2BSU9pVuUf2eqVOabDGl6Vgg4MCHmtGpCDTyoYzNFVXuV%2FwdMOqvh74GOqUB2bv4VFJW80knQw9OUHC%2FCa4N%2Fa38DTRcz1L1Fx3kZ75UQjW5IFoIB4p9wUT5NFqPgh98Ip3ctw7ccD9SunukFnOiaDnpQkUZPj6BMDD%2B7Dpnwm1StMluwEPQ1Am%2BNFphoPx0o6rd4DaoozPApPSDuk4BgcsSVx9HyzGYEurzuBv3P8KSdJ3krBzz72iRZsaknMLo7QIMXdtp67COCPljS1TxAYt0&X-Amz-Signature=21b675c29d737fec05e699a807e66e973bf34205544f85b7ee1d75bc14ae79a1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
