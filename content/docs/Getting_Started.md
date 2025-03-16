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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WQVIBFI%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAA7VWpxqGP1XSPnXvzMFTBx6FlRPiybCq2l4%2FArcyRAIgd1VTKO26TAScd3TBjBNvkCeZLvk4DJjaNluS9F2U%2Bekq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDSCjdyY3w70589CDCrcA1fXQz%2F2EbnZbnU%2BHdduh9rNJF%2FXAL2NAJJoPVzaGr3isV%2ByAUyNj8PSU1%2BJYVnlev%2FAc%2FYxdVpyzrp0G5cIsEOZW%2BkzBBRFNjA8I%2BGVGgq4xgprr%2BJQVUdm55fGIBZWgv95jL5x8H%2BErtEpbp6dx5z22hzzvOKd0bAA8nMB%2FUfM9zy0VMlGXkAxd9tRDAVLUWBv0SmXzDxCePg0PYZDYJmpojG8XYPixYtpAjr9iLjTycbILFfFr7ACAN5rw3ligtlv6yyVoo4JDMF7WiTTPJmqvtHAwKEBBP%2Bxd7Ge5mlsiQQ8R1Vl2%2FSm%2FoDez3ciW7ZyUauYViobNPnKbQUUJHsOrwzaNHNQRsR9LOvOQjiAvmHn32eZU329HakKr3fpSx0VGB4FiYqYOn%2FbnilZavKDhnTgaUphSI5UzCoc6JL2gfK8w0f%2BhVHE91kt9MB%2FXc%2Fm%2BYYY9w5SqGxrLdOHNkh8NkxR%2BeOjCq03H50Wr4edZ67i2ICsHroVQTLwdKo22UYm2XHNkCQVqq8ajSvStaQHFX6HuKcbDQ06sZuy05rNm1rhbw1q0tk8v9QcH0SdlJenoRS35Cs1%2B2wZYVxCbJROkf98ARkiTZMLsloN6i08NDVRqI5Xr9W%2B4dE7MKeT2r4GOqUBd1msTwNGlMYjLbYZNao%2BiyYf2OIuaFRjVtiPjLOTsz4eriF8u2aLL6Agyd2pMRcyCj2BVSs52bWj597CfCqos09epwUiCTTqIt9HQLngpeLz75IHErzhggDAdMP2RHGro0SlZqTBygtu%2FpHZIpquzZBPEYowienM3sjqBzUtNCcIpvL9jK%2BSHSdjs7De%2BoDWdCGwndiKFXhqNy1BLNwNW2DNR0mh&X-Amz-Signature=294082cc0297debe8c61f6f1e48d3e52a8fe82190a5834edd0bb6eed0650077f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WQVIBFI%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAA7VWpxqGP1XSPnXvzMFTBx6FlRPiybCq2l4%2FArcyRAIgd1VTKO26TAScd3TBjBNvkCeZLvk4DJjaNluS9F2U%2Bekq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDSCjdyY3w70589CDCrcA1fXQz%2F2EbnZbnU%2BHdduh9rNJF%2FXAL2NAJJoPVzaGr3isV%2ByAUyNj8PSU1%2BJYVnlev%2FAc%2FYxdVpyzrp0G5cIsEOZW%2BkzBBRFNjA8I%2BGVGgq4xgprr%2BJQVUdm55fGIBZWgv95jL5x8H%2BErtEpbp6dx5z22hzzvOKd0bAA8nMB%2FUfM9zy0VMlGXkAxd9tRDAVLUWBv0SmXzDxCePg0PYZDYJmpojG8XYPixYtpAjr9iLjTycbILFfFr7ACAN5rw3ligtlv6yyVoo4JDMF7WiTTPJmqvtHAwKEBBP%2Bxd7Ge5mlsiQQ8R1Vl2%2FSm%2FoDez3ciW7ZyUauYViobNPnKbQUUJHsOrwzaNHNQRsR9LOvOQjiAvmHn32eZU329HakKr3fpSx0VGB4FiYqYOn%2FbnilZavKDhnTgaUphSI5UzCoc6JL2gfK8w0f%2BhVHE91kt9MB%2FXc%2Fm%2BYYY9w5SqGxrLdOHNkh8NkxR%2BeOjCq03H50Wr4edZ67i2ICsHroVQTLwdKo22UYm2XHNkCQVqq8ajSvStaQHFX6HuKcbDQ06sZuy05rNm1rhbw1q0tk8v9QcH0SdlJenoRS35Cs1%2B2wZYVxCbJROkf98ARkiTZMLsloN6i08NDVRqI5Xr9W%2B4dE7MKeT2r4GOqUBd1msTwNGlMYjLbYZNao%2BiyYf2OIuaFRjVtiPjLOTsz4eriF8u2aLL6Agyd2pMRcyCj2BVSs52bWj597CfCqos09epwUiCTTqIt9HQLngpeLz75IHErzhggDAdMP2RHGro0SlZqTBygtu%2FpHZIpquzZBPEYowienM3sjqBzUtNCcIpvL9jK%2BSHSdjs7De%2BoDWdCGwndiKFXhqNy1BLNwNW2DNR0mh&X-Amz-Signature=e70e77b9d2af9dab18a62066eeae89b184da502f85d9973e2fbb7762b65ac919&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSNJ6Z25%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHth6qAHury4PjkyI0CRgiFqlpjKPG%2FB6O5ZFeNsrsrfAiEA%2Bc9T4J%2BDEBQr0aTdXRbKk3c54YT8xFF%2BqupwEru3ihEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDBFe8JK29sU5RXekQircA1PRwAnpHP%2FtVn11cUvCwwf3j57jw4mvr1h73McmYC0wlv81cIsiaHa1fS5TonVHlt0HSTFji9zroOv%2FQMZkEYEv20E%2BFF0KTHb5Fn1Vf59izCC14c9Q2uIiy2N0radxtcvn0OrYjTOt10bnHqoEfizZ3ZPpyBLM0WRg9e%2FJbctoHu5SXohkQoUTF0FTwIvisqsI1XbmGgjQclfL7pSYc2M7utDRK1J28kb4Vfv3AOIVeb7NfgxYlTFpd2c2ol61OV9q43S1nAfHKBJ2MVvlxeyE6UDLNuDNMNdvSiPNkQ2PUi6S3AT0FjVTXnFrhaK6hxDZHA8XwXdDS7M4UR9j7O7z6%2Fdq7AI4qiuGJtFt2UFsq2ifpDf8VS4Zc9YWKH%2Bo3JbNfR6texV%2FiBV49qYSrdNoN7NDTTRpYtEQgNvwshwvx8opBL%2FB8czKjQJmhIyplntCoIBf0j9Ref%2FVk%2F9Eyrhu70CiTRdt%2BL2LITFbiOR40IH%2Fvfoi2Vv5dW2FXmkWwmU48SjC00rZWuIspPO4F%2BM%2F6V3P%2BRE0I8hVw02uK3iZTZLKbavLdZBBK%2ByIJA8nZ27hE1OhLMqOeAxjLdqkp%2FAgwrrIbs8dU%2B%2FeSz%2BYHQk%2BvH9uttn7mLOm5uesMKi32r4GOqUBb3mqZSBQtKmzupxGNDMTxTe3WBPOlb4UG54CjuwNpO2nZ8cT4iXm12fnfcrO7EOyR33enQ%2BRYZzU60x5ncOn%2FLQ1acH57Qi3WYIqU7N3EQ1CkQ%2BBhpPyRtbZalbwfcUUbD5Mn5NpmFFTP9cvbgO25LGVAbtK2y4yCzDfM0QICO2nqy%2BfMR8whUyDjqJLs87S%2B%2FBBQjBp%2FfF4aAEmLFpPOORF7BAO&X-Amz-Signature=bac41ee4ab09421ccb9c01f694588ad3f46dfea7f00b591299da9d6463f4ea13&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZMXPWR7%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGiC5UKhvizbtzoI2AELbivdBnrCafvfpoBzQsmVuz%2BwIhALPmFRysj7zBH7KvrhwxnaKko7idrxcslZWpuLlIgEmdKv8DCCkQABoMNjM3NDIzMTgzODA1IgxpU2P6PKwfXxtDjhoq3AMTPLZJFPOHnpw39oTno8Kkphs8k1R5Mhwh4j4Az%2FSmQ8xqXCWDVsbSO96LX%2BVGPKU6SPGOeU%2BEn74dV%2BzIEaxbWkW790VtQXC0SC8F%2FweSejGg4dRnI4ZH0opabvQdEin4mAMl3q568JvB%2F3VSI9OfmUfnrgGNde7F9ggpyP8hV5VQrjkZYGalzYmJmOjD5sWFb5K9QvdasqEyZhAlBdgu%2Bh9F%2BHca177Kle5OV%2Fd8fLnU%2Fn4x46d9GXW3oVOZL8PX%2BwE9t%2FY2US5UW3GzShYsxcTXEjPCu6A9CDbFVbB1l5MIEddN8JPimKXTVk12xSfHzFFiwykqwuRwZa2E6IVpLhh4Yoe%2BKWceq66eQ0wKT6Dr2LWRc1PcKe5EB9VdMpW6ns1%2F6Pej8NPMPYzu9lvvVVoKiNxinNdK%2B557Y57MqsppyWTzMEEF3MOEhTROGfR8ePDQ%2FkgVfjuce57zFAt0eSayb6BhlxyBdly%2BeXptU8XapZkITQX7sBDhVJq2MiZfGEbj%2FQRYv2vesW81dZdQPlQR868msHhnmCL7QYAtpR3eHJX6OBBA6FI09yeXJC4QcCnnQxDtZjNRWXSi4ValiH%2FzC9cS%2FXFSxiyfKLUjlSZeNrTvvtN7AJaclDDfk9q%2BBjqkARPnjsqvcNokJcv5%2FjM84KnAWXHsRjU7HlULkrgw5SXCh%2B3sUVgfJMk915CTL%2BjSHOyTa2XXhe8Q6DWTcSTtKpEca5QqZJUFv5%2BXHgoeMFWIb6lQG1hu6W95ADWm0t4s3LpIq5R0vhypDiT9%2B4Eia%2BmzHUop4SfWHbOoijhrxjDaywZKOAiYGKfuacEDOuewZYtJ3ZhmPXn13IJ%2BOtMywqz1bbbQ&X-Amz-Signature=2a50878d567ade5976a080db15abab3c3b653455674937a3ea532fedf6d04ad4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WQVIBFI%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAA7VWpxqGP1XSPnXvzMFTBx6FlRPiybCq2l4%2FArcyRAIgd1VTKO26TAScd3TBjBNvkCeZLvk4DJjaNluS9F2U%2Bekq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDSCjdyY3w70589CDCrcA1fXQz%2F2EbnZbnU%2BHdduh9rNJF%2FXAL2NAJJoPVzaGr3isV%2ByAUyNj8PSU1%2BJYVnlev%2FAc%2FYxdVpyzrp0G5cIsEOZW%2BkzBBRFNjA8I%2BGVGgq4xgprr%2BJQVUdm55fGIBZWgv95jL5x8H%2BErtEpbp6dx5z22hzzvOKd0bAA8nMB%2FUfM9zy0VMlGXkAxd9tRDAVLUWBv0SmXzDxCePg0PYZDYJmpojG8XYPixYtpAjr9iLjTycbILFfFr7ACAN5rw3ligtlv6yyVoo4JDMF7WiTTPJmqvtHAwKEBBP%2Bxd7Ge5mlsiQQ8R1Vl2%2FSm%2FoDez3ciW7ZyUauYViobNPnKbQUUJHsOrwzaNHNQRsR9LOvOQjiAvmHn32eZU329HakKr3fpSx0VGB4FiYqYOn%2FbnilZavKDhnTgaUphSI5UzCoc6JL2gfK8w0f%2BhVHE91kt9MB%2FXc%2Fm%2BYYY9w5SqGxrLdOHNkh8NkxR%2BeOjCq03H50Wr4edZ67i2ICsHroVQTLwdKo22UYm2XHNkCQVqq8ajSvStaQHFX6HuKcbDQ06sZuy05rNm1rhbw1q0tk8v9QcH0SdlJenoRS35Cs1%2B2wZYVxCbJROkf98ARkiTZMLsloN6i08NDVRqI5Xr9W%2B4dE7MKeT2r4GOqUBd1msTwNGlMYjLbYZNao%2BiyYf2OIuaFRjVtiPjLOTsz4eriF8u2aLL6Agyd2pMRcyCj2BVSs52bWj597CfCqos09epwUiCTTqIt9HQLngpeLz75IHErzhggDAdMP2RHGro0SlZqTBygtu%2FpHZIpquzZBPEYowienM3sjqBzUtNCcIpvL9jK%2BSHSdjs7De%2BoDWdCGwndiKFXhqNy1BLNwNW2DNR0mh&X-Amz-Signature=ec52f38a0b21ebca3ed80022f58c13a114211150c259434660f6cc2b2e764dbb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
