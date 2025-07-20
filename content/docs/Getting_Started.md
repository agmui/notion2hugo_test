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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWA5SCVQ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCc40nhRw%2BHI%2FU2tm19%2BcOrqoHc1refDUcRL%2FIhrpArWAIgVkmhrA5r07TzpCDHeSjSpx9pNx7wvGP9ZFhOclF4O%2BEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKL8To%2BCrWPl0Q0oqyrcA6tYMB%2FkF783Kg9lyaUswOEF7Rr4vjFpzD9paX8BCUSW5AWLy6E%2FQfMgkjWJFaeQaCEMVq3ke9Hw8m8G76Qge4LHJ2ZUicaEPo5COJUw639ip6CTszcV7updYcBNYetJUgo9Yg%2FKoMH11joA9wznHgyu2jurfeLkj1MJ6Ui503ZW%2FdYSJYg1CL2Al23L4EUFDizOjoNMBRQINBod5rZDQRGZ8D6zAZc75yRnFHw%2FiL5nSEqu2oCzfqqaYOGMl8f1aoG10LIzpPil4GcUy30j1TdhdtDXYm9xqu1ovCojsic278rLsDUSYMz6%2FZ4c%2BHWTKraMn8e6UUC3R%2F70W2i8yeK%2BpwAVuyu5LR7gkSqSQbmMgKpTkTJzn4zRgOBZzhZ45AihQZhV1wHQhVppwc8Y7VrSCASkHKirrlh7u6tHYNT99pQFBaWvtxtd0mNdPQY2nvV4iSuyQH2exH1RedpO8abXRyfHU8OtfPDaD1WW1uG5RaHx1xJ0TbU8KLsYxRuALqAaczSBrTwxyEH5tgHrTerDYrzUYIyJVwa2ckNxHpCui3Fp5tYfpVlVzkyh%2FiaHchqK7D7K0oK701%2BcBC1OLxPQR7ZPfklOAmTBPdtT9fOaDzqJN9HQ5GfrhpQ6MND99MMGOqUB%2F4Txr07%2B5GiqXqaGcetmSxMft5ODB3IWTwEcoFpZY8xvUS83oofoKCa%2Fi4EnKTSU5m7GuL%2B4GEcfBIRJ618qQ1U5PR3ZPSsFFgpFoAR2I5Vro5upd6JBl75l4m%2FGnib3u1t6GpEOBi9EOqPj%2BKfM32hy8XPBS0ojvB%2Fiw25GVTS8ohiyv9jgXlvqPG3FfMcJ1tqnC%2B7wy%2B%2Bmyimx%2FWPybxJ4Pu9q&X-Amz-Signature=2e99580b5d8458c65967b202ddfb1ee034857f9dff806f12328dd18eadfab1c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWA5SCVQ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCc40nhRw%2BHI%2FU2tm19%2BcOrqoHc1refDUcRL%2FIhrpArWAIgVkmhrA5r07TzpCDHeSjSpx9pNx7wvGP9ZFhOclF4O%2BEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKL8To%2BCrWPl0Q0oqyrcA6tYMB%2FkF783Kg9lyaUswOEF7Rr4vjFpzD9paX8BCUSW5AWLy6E%2FQfMgkjWJFaeQaCEMVq3ke9Hw8m8G76Qge4LHJ2ZUicaEPo5COJUw639ip6CTszcV7updYcBNYetJUgo9Yg%2FKoMH11joA9wznHgyu2jurfeLkj1MJ6Ui503ZW%2FdYSJYg1CL2Al23L4EUFDizOjoNMBRQINBod5rZDQRGZ8D6zAZc75yRnFHw%2FiL5nSEqu2oCzfqqaYOGMl8f1aoG10LIzpPil4GcUy30j1TdhdtDXYm9xqu1ovCojsic278rLsDUSYMz6%2FZ4c%2BHWTKraMn8e6UUC3R%2F70W2i8yeK%2BpwAVuyu5LR7gkSqSQbmMgKpTkTJzn4zRgOBZzhZ45AihQZhV1wHQhVppwc8Y7VrSCASkHKirrlh7u6tHYNT99pQFBaWvtxtd0mNdPQY2nvV4iSuyQH2exH1RedpO8abXRyfHU8OtfPDaD1WW1uG5RaHx1xJ0TbU8KLsYxRuALqAaczSBrTwxyEH5tgHrTerDYrzUYIyJVwa2ckNxHpCui3Fp5tYfpVlVzkyh%2FiaHchqK7D7K0oK701%2BcBC1OLxPQR7ZPfklOAmTBPdtT9fOaDzqJN9HQ5GfrhpQ6MND99MMGOqUB%2F4Txr07%2B5GiqXqaGcetmSxMft5ODB3IWTwEcoFpZY8xvUS83oofoKCa%2Fi4EnKTSU5m7GuL%2B4GEcfBIRJ618qQ1U5PR3ZPSsFFgpFoAR2I5Vro5upd6JBl75l4m%2FGnib3u1t6GpEOBi9EOqPj%2BKfM32hy8XPBS0ojvB%2Fiw25GVTS8ohiyv9jgXlvqPG3FfMcJ1tqnC%2B7wy%2B%2Bmyimx%2FWPybxJ4Pu9q&X-Amz-Signature=da0c5891ceadc2a40973a1a7831f8d99263fb92ef5143ff380b8fece24d242f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWA5SCVQ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCc40nhRw%2BHI%2FU2tm19%2BcOrqoHc1refDUcRL%2FIhrpArWAIgVkmhrA5r07TzpCDHeSjSpx9pNx7wvGP9ZFhOclF4O%2BEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKL8To%2BCrWPl0Q0oqyrcA6tYMB%2FkF783Kg9lyaUswOEF7Rr4vjFpzD9paX8BCUSW5AWLy6E%2FQfMgkjWJFaeQaCEMVq3ke9Hw8m8G76Qge4LHJ2ZUicaEPo5COJUw639ip6CTszcV7updYcBNYetJUgo9Yg%2FKoMH11joA9wznHgyu2jurfeLkj1MJ6Ui503ZW%2FdYSJYg1CL2Al23L4EUFDizOjoNMBRQINBod5rZDQRGZ8D6zAZc75yRnFHw%2FiL5nSEqu2oCzfqqaYOGMl8f1aoG10LIzpPil4GcUy30j1TdhdtDXYm9xqu1ovCojsic278rLsDUSYMz6%2FZ4c%2BHWTKraMn8e6UUC3R%2F70W2i8yeK%2BpwAVuyu5LR7gkSqSQbmMgKpTkTJzn4zRgOBZzhZ45AihQZhV1wHQhVppwc8Y7VrSCASkHKirrlh7u6tHYNT99pQFBaWvtxtd0mNdPQY2nvV4iSuyQH2exH1RedpO8abXRyfHU8OtfPDaD1WW1uG5RaHx1xJ0TbU8KLsYxRuALqAaczSBrTwxyEH5tgHrTerDYrzUYIyJVwa2ckNxHpCui3Fp5tYfpVlVzkyh%2FiaHchqK7D7K0oK701%2BcBC1OLxPQR7ZPfklOAmTBPdtT9fOaDzqJN9HQ5GfrhpQ6MND99MMGOqUB%2F4Txr07%2B5GiqXqaGcetmSxMft5ODB3IWTwEcoFpZY8xvUS83oofoKCa%2Fi4EnKTSU5m7GuL%2B4GEcfBIRJ618qQ1U5PR3ZPSsFFgpFoAR2I5Vro5upd6JBl75l4m%2FGnib3u1t6GpEOBi9EOqPj%2BKfM32hy8XPBS0ojvB%2Fiw25GVTS8ohiyv9jgXlvqPG3FfMcJ1tqnC%2B7wy%2B%2Bmyimx%2FWPybxJ4Pu9q&X-Amz-Signature=ad55b8998b80f92f9e6102ff292f20eef943f837a6911a1b1d6822c9d4774391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKD4NLTQ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYN0VLRQXHu2T909mBHsTdom5UxiHZMedH72LRXDIJ5AiAkX8ShNIb8EwZGSVjEOu9BCpKY8oliIgxmouYhZZleVyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPZzNn0Dj59XCfFQvKtwDynGWv4dtNhylo2%2FHQP%2BOIhT0fMRMGuswD9hRNWZWIbvQ%2BWMbvuLKUoh7WBSYJGyJ7gtT4hZr5RoRu%2BdILdfgnGXaI6wdQdfKyP1pXmHPj%2BV%2BVpNPXJ%2FN5%2F7nn%2FK64QDkDT5ShQqXcgLxziYUKNnG53%2BGipEsylpI29gvXElyZ91A0XATQvgXVavJpvYu32cAs7pLzQ7R5v8cOgnYiPxKh8fDbmBfBmZQjFSJ17Kd1b%2BllI3uywGchxiCI6QrsAdEmOp0vkJrvYHID9wib8vG0L6UDHD%2FOF4b3fUcUcmN%2B4Z8dJ%2Bm5yOu86J%2FGQ2lx46zKDfosxrRn3OhUu0t2V2cgj024HBfQklkcA3%2FE0tMHlYP6Gkwn3yTgTGBF5nZzFF7Msn3isZjxNw3x3Vr%2Bwrc6HESNIrcv5bTolcsPx2hrqkeqVRr8UkN7GOu9Zp0ebacgfz7eCbNrur65%2FKdpUn4wkay7v9ExH4%2Fs29xKNwOcT%2FyMZQOwLYWuUlpCUV3eVdL6hryoMNTj0FGHdhCdrNe%2BGSW%2BpGj%2FXUaikc%2FVSYS7EiltDaxE%2BltGBiYHAlvNIEeiX6JrE%2FrOMebjhrwDZ5xSimB7RgwkrTiWePYQHkrDHA3HDYMrZc22Mxx84Iw0%2F%2F0wwY6pgHe%2FXDIfTIAXYeECB7%2FvuiIBXlXXCcpZ7WCzoL8VGtzY2IG4N5pGYWV5p4zO7pDgPS%2F3%2FvgWtZEuED5p9ZwmluEzkW77VOzxk0ihfkCfKORCrdHZduqPOBRtDyjNUvlvhix%2FMM%2BnGKLQoxslxyuZ3AyTJnxUmJZ%2F710kIy9DWUGy9SHFAkGyiAgFTy6GQf0lquuaoMUM1KWZ1ei7QcdslrX2%2BaW%2F9s3&X-Amz-Signature=96db17336176666199d3e4a5fcfb3d8a94a5505fbef26bf529baa3a965bb3c63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYFPQODB%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHzlKp8midrystiO1IbpYiwpxEzcPas9bynn94v17PJAiAWie7lzEB9UHH1r0Cyol4UfhYYZxhuSBH1zsLM%2FhXq9CqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeqUV5x8YATeVhTYYKtwD%2B6cGM9SBd2QWUDTJ26wOCw%2FiRbECT%2FCLggpTjVHz3Vof%2BGScXHlQLi1f7HsOa8dLLPebpy4efPBV8UZ8t07eZc5u4uhdFA71BNRoHbxbgjwPdH%2B5P2pSZ1GkCkApHICpg6%2BasIeSjb77rUNSByO%2FfjESWr2a2n5YIHU0yFLB%2BVozZucw6TjIlO3WQXZ2xi9l4lh%2BOz%2Bc4tWwtndE78NNkV%2BpESyox%2BaoN1JjK%2BZ7XYqeC5yQetebe9i0Ov%2F%2F2A5QwZa39Ndk6DcluTL7XeZXf5be2IPMXnkEWbEE871YCFOJSiwlkQGE9O14ve3%2BbJpGJln8eExG0o1LGKZyGjrglFv6Ohf7yf0JFQ%2Br644wixJmTpLPx%2BBEbu%2BLgOCZVFHIOCXMV6N9%2FzyEZOvtCu5nNijtU%2Bg0WbxP5XhPS%2Buui%2F2gHDZZl2cL6esyGvcTpzo0n%2BzU5C7hY0y4TMtkc7a%2Bp4FiUcZy%2B%2F15F7UlZ2YRYSRaN6EIGrXY1J7xve4i4%2BEkVZG4kwKcQQ%2FBpiJw5PTJZRJS563Fqv3C5tuerZ0ZmxMs0uBVYR7cogd8zhZm%2FVxMLKp2T6B5VfdL8v86H1BcjhqnN51GU5Kcm3GUtIQ0NOTDMgPL7zqInW7po3Uwquv0wwY6pgHWjkK5wUEGiky%2BNrLQ2E254JBoOErAqeSfmlC2y3yjbbBaXiLBm%2BZm3stCZLu%2BKQzFszkhWU4ju6vkexeZJV4TIURvAYDkpq2b1xotcK%2F4UmcaA5yB9EqR7NefKtyagZz4lVhZjjlTc%2BddnrRZXPVGrI30mNFEmEW6Mu6OCIA6jtnfYWw9Zq5Ayw%2FcaYPleyL9zGc%2FIYVPkdhXjO609YgCACaQ4w50&X-Amz-Signature=4634a75e7197e75bfeb4f3fc67ce3b4003b21a03fe32ec79672ad54f8cf19bad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWA5SCVQ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCc40nhRw%2BHI%2FU2tm19%2BcOrqoHc1refDUcRL%2FIhrpArWAIgVkmhrA5r07TzpCDHeSjSpx9pNx7wvGP9ZFhOclF4O%2BEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKL8To%2BCrWPl0Q0oqyrcA6tYMB%2FkF783Kg9lyaUswOEF7Rr4vjFpzD9paX8BCUSW5AWLy6E%2FQfMgkjWJFaeQaCEMVq3ke9Hw8m8G76Qge4LHJ2ZUicaEPo5COJUw639ip6CTszcV7updYcBNYetJUgo9Yg%2FKoMH11joA9wznHgyu2jurfeLkj1MJ6Ui503ZW%2FdYSJYg1CL2Al23L4EUFDizOjoNMBRQINBod5rZDQRGZ8D6zAZc75yRnFHw%2FiL5nSEqu2oCzfqqaYOGMl8f1aoG10LIzpPil4GcUy30j1TdhdtDXYm9xqu1ovCojsic278rLsDUSYMz6%2FZ4c%2BHWTKraMn8e6UUC3R%2F70W2i8yeK%2BpwAVuyu5LR7gkSqSQbmMgKpTkTJzn4zRgOBZzhZ45AihQZhV1wHQhVppwc8Y7VrSCASkHKirrlh7u6tHYNT99pQFBaWvtxtd0mNdPQY2nvV4iSuyQH2exH1RedpO8abXRyfHU8OtfPDaD1WW1uG5RaHx1xJ0TbU8KLsYxRuALqAaczSBrTwxyEH5tgHrTerDYrzUYIyJVwa2ckNxHpCui3Fp5tYfpVlVzkyh%2FiaHchqK7D7K0oK701%2BcBC1OLxPQR7ZPfklOAmTBPdtT9fOaDzqJN9HQ5GfrhpQ6MND99MMGOqUB%2F4Txr07%2B5GiqXqaGcetmSxMft5ODB3IWTwEcoFpZY8xvUS83oofoKCa%2Fi4EnKTSU5m7GuL%2B4GEcfBIRJ618qQ1U5PR3ZPSsFFgpFoAR2I5Vro5upd6JBl75l4m%2FGnib3u1t6GpEOBi9EOqPj%2BKfM32hy8XPBS0ojvB%2Fiw25GVTS8ohiyv9jgXlvqPG3FfMcJ1tqnC%2B7wy%2B%2Bmyimx%2FWPybxJ4Pu9q&X-Amz-Signature=e9767554fd106011338c56e9d9850e3559922474828c51ef2d73b7e5c95a9367&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
