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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645WCNUUL%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIFAELOE%2BfPEECaKkeC8G3uAWUEiyXLy2RzxrCZezXxmsAiEAqWDqOWf3L06dySPvU%2B4w1bPInNLwzi0Pl955FiE7NvQqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcQsrjPdlzLyTeeMSrcAzLaVUip9LggWKxaG%2F0ct2Kyxb%2FZAleO6VH2t8vtF6CLYdLGWGAFAgaMS2lcjIj%2BNPA9cFlu1P8oRBfk4teaph2S7sE4QpYWCSXhZGkp0WpGPxJZ7j6BFJMDNlSEeBMu%2Fbusu4y7YPpZznMj9pBG%2BGymUqOFUMidaT84viVSyyXOMXtI%2FF%2BvQFpBLldDojKD7OldL%2BmXV9j%2Fk%2F7SUTRTZkLUfjGMfzqf%2F3AQT%2BkchyZWpfs4mAJrFBFhTQ4X61tkjYF%2BsnBnWPGcbPEv5nTYZA%2FPKcebMhifJZyDUx8pXl6o2QwixRJ2weu0klVjbMgBOwEtPK2SmGOuKYobk%2FpSxhmbmozMMJsidmwJdI0cJBmtn6XcAsTtsFA0JoA0O8UxtgK5%2F16zzLsKML2C%2BHI2n2MdqOjEOFmfWUeGYmdn5VjqMVmXVhsyGYxNJCKHayUA8drMuwI%2BSnynZhIdx2ifzHs%2BDUGeLblEgYJrBSL4VeHB4RMPvxPZyPi03SM%2FWv6qmKGy0ZYfS%2FDXI3BXzdIwUZq91apZf7%2F6jOYitqnZHAv8u4Zln7xeQRO%2FgEd8AWR6zbNpewm%2FB6I3NL6jj%2FnzsM2crBQhDuG5gpdOmgELZa5StwpOYqWo8TPj6Hi8MPj2usEGOqUB8x0DXilPNJY7eBvfthO3dbgZOn1RZ4S4RmlRvDy4nmggAlJ8Jupwx379XRThAi38MnOP4eC4t1%2FazU95ZbzzA%2BTepyAM24chECQiHwGlAP0lMlGfpSthyAvVj5ilvvdNgXRFOPAVhEoZ41bABlBCYbCLrhYKFjFOkY8ilbDtDHvoi75wdoUSDsCym8Vbv9%2F0TI6nbGAAEoSAxcsIpealeAjC2CDk&X-Amz-Signature=47716d18c06f872dd3c7bce321d9278ae23e365bd2f896d369e603822020b79b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645WCNUUL%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIFAELOE%2BfPEECaKkeC8G3uAWUEiyXLy2RzxrCZezXxmsAiEAqWDqOWf3L06dySPvU%2B4w1bPInNLwzi0Pl955FiE7NvQqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcQsrjPdlzLyTeeMSrcAzLaVUip9LggWKxaG%2F0ct2Kyxb%2FZAleO6VH2t8vtF6CLYdLGWGAFAgaMS2lcjIj%2BNPA9cFlu1P8oRBfk4teaph2S7sE4QpYWCSXhZGkp0WpGPxJZ7j6BFJMDNlSEeBMu%2Fbusu4y7YPpZznMj9pBG%2BGymUqOFUMidaT84viVSyyXOMXtI%2FF%2BvQFpBLldDojKD7OldL%2BmXV9j%2Fk%2F7SUTRTZkLUfjGMfzqf%2F3AQT%2BkchyZWpfs4mAJrFBFhTQ4X61tkjYF%2BsnBnWPGcbPEv5nTYZA%2FPKcebMhifJZyDUx8pXl6o2QwixRJ2weu0klVjbMgBOwEtPK2SmGOuKYobk%2FpSxhmbmozMMJsidmwJdI0cJBmtn6XcAsTtsFA0JoA0O8UxtgK5%2F16zzLsKML2C%2BHI2n2MdqOjEOFmfWUeGYmdn5VjqMVmXVhsyGYxNJCKHayUA8drMuwI%2BSnynZhIdx2ifzHs%2BDUGeLblEgYJrBSL4VeHB4RMPvxPZyPi03SM%2FWv6qmKGy0ZYfS%2FDXI3BXzdIwUZq91apZf7%2F6jOYitqnZHAv8u4Zln7xeQRO%2FgEd8AWR6zbNpewm%2FB6I3NL6jj%2FnzsM2crBQhDuG5gpdOmgELZa5StwpOYqWo8TPj6Hi8MPj2usEGOqUB8x0DXilPNJY7eBvfthO3dbgZOn1RZ4S4RmlRvDy4nmggAlJ8Jupwx379XRThAi38MnOP4eC4t1%2FazU95ZbzzA%2BTepyAM24chECQiHwGlAP0lMlGfpSthyAvVj5ilvvdNgXRFOPAVhEoZ41bABlBCYbCLrhYKFjFOkY8ilbDtDHvoi75wdoUSDsCym8Vbv9%2F0TI6nbGAAEoSAxcsIpealeAjC2CDk&X-Amz-Signature=4fce6c521345667cd576836264006c1fceac1f3296865b1352091fbab47de171&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645WCNUUL%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIFAELOE%2BfPEECaKkeC8G3uAWUEiyXLy2RzxrCZezXxmsAiEAqWDqOWf3L06dySPvU%2B4w1bPInNLwzi0Pl955FiE7NvQqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcQsrjPdlzLyTeeMSrcAzLaVUip9LggWKxaG%2F0ct2Kyxb%2FZAleO6VH2t8vtF6CLYdLGWGAFAgaMS2lcjIj%2BNPA9cFlu1P8oRBfk4teaph2S7sE4QpYWCSXhZGkp0WpGPxJZ7j6BFJMDNlSEeBMu%2Fbusu4y7YPpZznMj9pBG%2BGymUqOFUMidaT84viVSyyXOMXtI%2FF%2BvQFpBLldDojKD7OldL%2BmXV9j%2Fk%2F7SUTRTZkLUfjGMfzqf%2F3AQT%2BkchyZWpfs4mAJrFBFhTQ4X61tkjYF%2BsnBnWPGcbPEv5nTYZA%2FPKcebMhifJZyDUx8pXl6o2QwixRJ2weu0klVjbMgBOwEtPK2SmGOuKYobk%2FpSxhmbmozMMJsidmwJdI0cJBmtn6XcAsTtsFA0JoA0O8UxtgK5%2F16zzLsKML2C%2BHI2n2MdqOjEOFmfWUeGYmdn5VjqMVmXVhsyGYxNJCKHayUA8drMuwI%2BSnynZhIdx2ifzHs%2BDUGeLblEgYJrBSL4VeHB4RMPvxPZyPi03SM%2FWv6qmKGy0ZYfS%2FDXI3BXzdIwUZq91apZf7%2F6jOYitqnZHAv8u4Zln7xeQRO%2FgEd8AWR6zbNpewm%2FB6I3NL6jj%2FnzsM2crBQhDuG5gpdOmgELZa5StwpOYqWo8TPj6Hi8MPj2usEGOqUB8x0DXilPNJY7eBvfthO3dbgZOn1RZ4S4RmlRvDy4nmggAlJ8Jupwx379XRThAi38MnOP4eC4t1%2FazU95ZbzzA%2BTepyAM24chECQiHwGlAP0lMlGfpSthyAvVj5ilvvdNgXRFOPAVhEoZ41bABlBCYbCLrhYKFjFOkY8ilbDtDHvoi75wdoUSDsCym8Vbv9%2F0TI6nbGAAEoSAxcsIpealeAjC2CDk&X-Amz-Signature=1a7483c06b808fbee24fb28b9c4f61afd3fe86545a329c588bce6d568d6d4d5a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQED6ITX%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCltA0lbR9DV3a9MbJ%2BD69slQuo%2BnZ0RSl0RDgQ%2F52eMgIhAJvhen5hpkeqBIyOUz1kBGFznEYHZaDs2fyQtzs43PXsKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzA5P8FTxyItCBUZc8q3APJvT5S3qXXrisVVmVs5o0%2BD7EkhPOcIYUuREqomg0hH%2FPZcK7266r1xRpsHbFMYlCQpjQxotDlPMHOTb9uYjzBSaE%2Fiv%2BDPCFzrWSPZ4UY7gPpFlFqF5vJ0Lpw5we7l62rtp1ABW2E4bQhb%2F4Tj%2F%2B2bPJuF4ITbqbXuOYuMOtOQ6NJ4l3Lmn0AP0N0IyS4R9HHEOu8feZgMo47E4SH29%2BbQ%2BpObzNAl%2FAqT8BtsyB%2Bubrrk4LDVlcjEoZOAPp6vrgKdcl5%2FE8fGldl3XthM%2Bv0bOk5Q9%2FUVOrY5lttexg0Jiqx2kITdANXXkNkHFGK5DHYyqJIUAG911hN99rCRQnDKxtBOpGb7Jy%2B39%2BLTvMgDHu3Iova4hc3ZV7aWJWcpdk%2FkzRzQaz1GZwOXowH%2F5u1Tq1CMCnqntRPW5m9%2FDaOdPABXGmVUxhJ1HXCT5VjdArZfexIFwzxf%2FTm%2FSIKMfG1wg33nUBTHw%2BYn%2FMJ%2Ble09ZKUNAkta1De%2F6jvocXWMsgurkWkZxyaLJl%2FJVvQujKuGA9Oks%2Bxr3hojWlt7jEOGJ3kZF9yuEjiXCvkeVogactA3fx2rf71aNYxjaJDVZ0laZYeMKTxtHuNNEp6Ya3ApctkhNIKmZ7v3jwl4DCN97rBBjqkAT5o0tu57MScNu9dZwedQE0vDzc0XyiEhzICscwbzIeV9phyMAUMju3QOnkwsTVgHWbuL%2B%2FC61vNyvK53X%2FJuPVg7EFYyilxwPMOBEnPNjez46QQITuu0p1JxnbPjNURe9NoNx4ilIJIAMHxbnM5md4m%2BraqpWrbJi4%2FR3e8B27IMV96tFsq%2BuyYE4W6tgXOsGpr3rbfQbAHBGQgOXT1iXcJu6TH&X-Amz-Signature=5e66ba98c0f10513a3eebd8c93faf2d5c4ad8f5bc9734a5c39b8d2e6f8aee757&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BZI4YJC%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIFtHLW1A3iHj%2FsZ%2Fk%2FAElPky8QGIB871WT%2BJadOKGzelAiEAgcFVu32Iri6S44UgC%2BkoCVqKSqYd%2BwEg%2Bp2K3ZP%2BAG8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJMPYx0PeIRRmV8tyrcAzjXFNmoFDmuQWFyIuZpUCZMpCUp%2B1B9kaBJtR1Uy9W2jXODu%2BtqRsWAVTgFoSXcamqYhE8g3N5eVWIKXkGEd1LxxCLjyd78qbCIMX2DSN3HUgiYE5cGTaLvC7H0nMepW%2BmC6PWLszTUmbJKkG5HSK9eno%2Bq0YHgl3CS9NszUocH3ITAD%2Fzyhdlvi0egi6ZiyhR4bdfus2F52Mazfv7tuFC6s35whBNYBn%2FtADKyARecH6inhzOgaFZ2%2BDNyPgz96Eu54Ro9VOFmex5LEkgALKdp9XYM4TBKvLZCje1XIgKj9ds3fLuDrTiumbkjusAKwhLq9gZI46xXR9Fug27iiOPqAZgefnP8eq9L47UTmO%2FpHIzjLHNa4p2S97A6Mcu%2FY%2FBCMSR9QUZr80VHegyWiby22BGgWBumvJcSSludKTSP8rLnUaKdZXjhnudW40FSqVUTqR3FUY1CD1w8Zb6EGdXiRSjXnCPzzjTqSHI9q4Vf%2BMn4FegYcOyfWKpPoKNQ7P8CHCKcpbN4%2BjtGYUrZmLdshDFUXdrewNSgglS0MQB1NCwbCCN6UheiMnAnqoMf5jkRTjY%2BJ5ebYvqeTEwqgS3e3qBBvQPpOii106LyLCEpoYK6rJDBMorG888jMPP2usEGOqUB1IeTb13%2BjZMbYqEcfPgPrUZy01lBc4YFC6V95dWOodNyqOhej3gNo%2BGIxNQMTZAXebwgrCb%2FT2XEPOPu2YkwonmmfAmS8VCMVedpyp6b3w1e8N9SLKps9AYDGjdepTzPudbsjFzmAcv0ciY%2F0MeqtJSJimII%2FflvtQSGOpZh6352yTqsj5z5V490b%2BcegGKcHEi%2FSI%2FowZxQvpD%2FXkQugEtipO2B&X-Amz-Signature=01a8d7b5b910e7f50ac35b0a0eb3b8556fc16e219a7792a185b594c78856aa38&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645WCNUUL%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIFAELOE%2BfPEECaKkeC8G3uAWUEiyXLy2RzxrCZezXxmsAiEAqWDqOWf3L06dySPvU%2B4w1bPInNLwzi0Pl955FiE7NvQqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcQsrjPdlzLyTeeMSrcAzLaVUip9LggWKxaG%2F0ct2Kyxb%2FZAleO6VH2t8vtF6CLYdLGWGAFAgaMS2lcjIj%2BNPA9cFlu1P8oRBfk4teaph2S7sE4QpYWCSXhZGkp0WpGPxJZ7j6BFJMDNlSEeBMu%2Fbusu4y7YPpZznMj9pBG%2BGymUqOFUMidaT84viVSyyXOMXtI%2FF%2BvQFpBLldDojKD7OldL%2BmXV9j%2Fk%2F7SUTRTZkLUfjGMfzqf%2F3AQT%2BkchyZWpfs4mAJrFBFhTQ4X61tkjYF%2BsnBnWPGcbPEv5nTYZA%2FPKcebMhifJZyDUx8pXl6o2QwixRJ2weu0klVjbMgBOwEtPK2SmGOuKYobk%2FpSxhmbmozMMJsidmwJdI0cJBmtn6XcAsTtsFA0JoA0O8UxtgK5%2F16zzLsKML2C%2BHI2n2MdqOjEOFmfWUeGYmdn5VjqMVmXVhsyGYxNJCKHayUA8drMuwI%2BSnynZhIdx2ifzHs%2BDUGeLblEgYJrBSL4VeHB4RMPvxPZyPi03SM%2FWv6qmKGy0ZYfS%2FDXI3BXzdIwUZq91apZf7%2F6jOYitqnZHAv8u4Zln7xeQRO%2FgEd8AWR6zbNpewm%2FB6I3NL6jj%2FnzsM2crBQhDuG5gpdOmgELZa5StwpOYqWo8TPj6Hi8MPj2usEGOqUB8x0DXilPNJY7eBvfthO3dbgZOn1RZ4S4RmlRvDy4nmggAlJ8Jupwx379XRThAi38MnOP4eC4t1%2FazU95ZbzzA%2BTepyAM24chECQiHwGlAP0lMlGfpSthyAvVj5ilvvdNgXRFOPAVhEoZ41bABlBCYbCLrhYKFjFOkY8ilbDtDHvoi75wdoUSDsCym8Vbv9%2F0TI6nbGAAEoSAxcsIpealeAjC2CDk&X-Amz-Signature=ca3510ea204e9f234240802305f4ba66b370e1612b94bb9db33ec924855e91af&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
