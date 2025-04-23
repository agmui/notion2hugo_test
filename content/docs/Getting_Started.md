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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS7KJ5AY%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T200948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD9JgSOifX8tNRfQcd4XFPhDn9hm%2BSFaLf8cJuDj63CBwIgWniWIphYYnaw8V7nRJyqubse4TialQt2aJB89715V8UqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhK7DwBjrM5mnTJ6yrcA4Fxk4tny8UNU6HM3h4MiBXX86pdIZgUEQfcitEtBYpX9B%2FBfO4lrpI1ro3%2BQpa14Lcw5NkYRhW0SQC5yGeTT9oA7QD9fCcXd09KOVmlKES2D5p1y77rBIHQsrjWFVC%2Fj7ahjtDOUKodANOtyZkJf%2BZMd3lLzFGCRFUGwsQkGw%2FjArJAtD4Kw5biFikwUiF3jOq3qdxLHnXmrvhL3Y%2FKBE%2BYp8Qo%2BIjGqWZY107jBRkMc4nwBeFyk2w7LSkogR9lBNyoTis9u4Be95gvozu%2BasY9tVOfn545B%2BlEX8kTY3COeltdBB8xpQ3nB4rN9MUewcGHik9NQHRm0cHKOHc7w8mjRV8yYi57OvZyPgomGuMHJIRBPO3iBIQ%2Bdq%2FJpeuL442xNqmOjAnR%2BOT8%2B7pbVjhoKgBVEOZuTR%2BAbHTWrg4ADzesQGCYLHRLQ0d%2FZMFTPzOxwyf%2FMKMSClEgpWeOXDiCuYEEku3HBKQ3FDtfcnVMoZlijhE1tkJ2JQlpnQlYIqs5Cqy3Pl%2FWdUGoF8bi5ViY7GB2Srz2alc9HfUkXkpytdOL7JvYnEB3mwTViQ7ETzg6c4xaPADMwB68axAdAJuPpMKnNhyIyV44%2BKZbxKJD%2FxP2zhuoGaK0tJ3lMNqNpcAGOqUBk%2B38XTkILq03qM6qZfyKyybuht3PXj0NsyZoqapflLZasiWJAVw8yydy7xvJw56jt6vr9W7efueoeWYqa7DU5i9bXtm%2FQUA%2BT%2FMcyVP3UM40bMhUPvlJxw2WtopRgveGZIxi5BXMNEPIxg%2FEkk6%2F%2BakCrJOWmNGEc1UDZrhOqO3ZLG2AHdKJcmOL1LDhqEAzJti81ygTOvguYyuD%2FmiaxF1dnZfZ&X-Amz-Signature=567669eb57e2b21f20f1f5c24d3656051ddd5d50217512bafa441bb5cc77b26d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS7KJ5AY%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T200948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD9JgSOifX8tNRfQcd4XFPhDn9hm%2BSFaLf8cJuDj63CBwIgWniWIphYYnaw8V7nRJyqubse4TialQt2aJB89715V8UqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhK7DwBjrM5mnTJ6yrcA4Fxk4tny8UNU6HM3h4MiBXX86pdIZgUEQfcitEtBYpX9B%2FBfO4lrpI1ro3%2BQpa14Lcw5NkYRhW0SQC5yGeTT9oA7QD9fCcXd09KOVmlKES2D5p1y77rBIHQsrjWFVC%2Fj7ahjtDOUKodANOtyZkJf%2BZMd3lLzFGCRFUGwsQkGw%2FjArJAtD4Kw5biFikwUiF3jOq3qdxLHnXmrvhL3Y%2FKBE%2BYp8Qo%2BIjGqWZY107jBRkMc4nwBeFyk2w7LSkogR9lBNyoTis9u4Be95gvozu%2BasY9tVOfn545B%2BlEX8kTY3COeltdBB8xpQ3nB4rN9MUewcGHik9NQHRm0cHKOHc7w8mjRV8yYi57OvZyPgomGuMHJIRBPO3iBIQ%2Bdq%2FJpeuL442xNqmOjAnR%2BOT8%2B7pbVjhoKgBVEOZuTR%2BAbHTWrg4ADzesQGCYLHRLQ0d%2FZMFTPzOxwyf%2FMKMSClEgpWeOXDiCuYEEku3HBKQ3FDtfcnVMoZlijhE1tkJ2JQlpnQlYIqs5Cqy3Pl%2FWdUGoF8bi5ViY7GB2Srz2alc9HfUkXkpytdOL7JvYnEB3mwTViQ7ETzg6c4xaPADMwB68axAdAJuPpMKnNhyIyV44%2BKZbxKJD%2FxP2zhuoGaK0tJ3lMNqNpcAGOqUBk%2B38XTkILq03qM6qZfyKyybuht3PXj0NsyZoqapflLZasiWJAVw8yydy7xvJw56jt6vr9W7efueoeWYqa7DU5i9bXtm%2FQUA%2BT%2FMcyVP3UM40bMhUPvlJxw2WtopRgveGZIxi5BXMNEPIxg%2FEkk6%2F%2BakCrJOWmNGEc1UDZrhOqO3ZLG2AHdKJcmOL1LDhqEAzJti81ygTOvguYyuD%2FmiaxF1dnZfZ&X-Amz-Signature=a9f5d7482195341322cac57a1778b5a3a954a557f79ff6276b2f6ed31c77845c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB2W7PLU%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCdRIquOAsr74zNzmskzsHL5ulwa3ywRnxJDL60Onon7QIgHg2n6ldc1TOPwA1R5EY5QMZUUCbgozD%2FFNPBPqhcbNIqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWrLom7zuRSC6hncircA5R8F%2BZ5nY3h3r4NMH057hgY4pcuotYjJwS4MkRAMoVCTFytnv5TybrU%2FEuYUOTP7o1LhB7DXqrWyDu22W0l20v5cVfrAAfuDE6bwlqeIH23DN5NCFOUpcgs%2FATwuWzN1vc80LZcZ%2BVu%2Blo47TMQJDljfvOlfx%2FHos1peXRosq9QVAL7hRPOpuyNnbHf3Sdj49e%2FRLnSZ6DVCYGClqLDPax9D3gUnKiVmKN24L4rPuSamlI1YzT3R%2Bh%2FKxdGjm5NkffJ8f%2F7UZumW0Wxd8d9wu4qExzO%2FmptBRL9lObU1hRAx3REw%2FGLpN4AAb9lDQ79ysvL9bmgUInCNoaeVnSMw%2B5ke%2Fn1bYn19fJ6FmAurIuvpaTpdqbZo7aBl90wafCWuQ%2B5LSFXEyChM1SAxgmug7flwxCM8EHWisA00hN8f1nnU2UBxKpotaZKSY7JOUlpOQTHMBJ%2F5jbmOiQgWKMU5rhQxlr5%2BUnmdNFGesBL1HardkaqhK1YZmazGiQvmrqVXt8yRTBp%2BZ2AFwlEN%2FnJSj4zTAMdzVblyJhHdbS%2B%2F%2BrrKlFAfcsPcqDwmWSIAT08iRZ7SIRuQCM1hvpOWWOUiGDBb6BBLPQvocW73D7gjkz2E19O8jLuM%2BuEz6DvMMuNpcAGOqUB912INVdAFe10Qc3GfOoYHm0ugAFt%2BuNjaCC3YteWq6tJkAliIF2VzWwoDzccwGxJUaWrOWItCzHmzTNErRlA63ComrtU2GUqQR1V4iRTxePH6FDndOtF31RjSyoIeJGNpsUi4zRcoQZ4VNhzIt4j%2Fed8Px7Bjtjrr1kYivm4RKdNc9y8Xwtnbq68%2FCguZQTDCLMYgMdXoKyVDdTTgHkx1%2FzOwcSv&X-Amz-Signature=5ed2a070a003d61d2b06a9a860e703cc4246cf9cf951c6d58c909125c1075b0f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634TBPT2N%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDqqpW6yuRKElprGRfJdAvdXdEFyvwsMIWSei5SY8sUCwIgFLc8JzVNB%2BVov2rfgGT2jXpML2m8b2wvU5AOYIooLB4qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3OKXS2iRS%2B7C0n1SrcA%2FGqjyyZ1cEt6WWwS3bWRDZuMo6u4ZeR3l6nEnju5pgsBup5RX%2FzMdL%2BWmE%2F7CEW2aInSyVP1NanwaF2q3gY51YQWTznsQWIQJnUNrk%2FLKExn6I6TY%2Fs8m2ToIznIjvtQSO3GG7aJYxjeNOn4Qqj7u0CMQDAZ3XCqznpGImaWyVkk40wLR%2F%2FXEhWdCwR9R6dok4cNXqeckJ5GMUyB0CMeJ%2Biiby%2BOi%2FzsbnoY%2BCM4%2B3He%2Bn%2BtvU2QX6stvfY%2FvCTfXK9F5DFpcXswr%2BRuKEJgTDd78iiIQ2EqXgzMaeHiWOmJ%2B535XWzFxM0zOT2HPyVG18kPoyZ0PHWfijFtWYgYY8S7EzFvyjEZLkij5753Aa4f4sn6r5DJaa0ijQRpATtCrqGdahwdCGunFYJCAHDpiX27JjWKjbmDvw48xhUq7ZF0%2F4yHjz%2BpXfh%2B5ezyWj1MbDQyb48as9r9GRTUb5dVO4o98zEtQO0Ec2KfeeFQQ8%2FC%2BjLAd1%2Fh2lWvFk6j4Jlm2bl4sho5%2FTaujzDdzO9x2QWyGOwrr9XzU83mtDPU1myZcGYpiBNfkk5Hq9EySDcPjNs5rUOVXIiO2FEJreAk3LobdW3UVzASCJ42czakNR%2BuDteiupiMbIeNdARMJ2QpcAGOqUBBFj3Z5CWkh8pFtfVZpVYJCF1w%2FSur2O1T8FLsC5OLg%2FWdW842WIEKsgEUYmqx0mGXdz8cfrt%2Fm0BSbGBJtDAHT9MoikSNjFSVq%2F%2BIE9FawmuvhQjnWJm88e22SKtCPLVwW6O2Knml60pN%2FQ0JzR%2FDdCN9ekgBjjidTmah55YoDd3aWL15psFMxrdMRv24N0Kk1DmO2L0ZfbTghI1L2D4jx%2F0Mrze&X-Amz-Signature=81c3b196119eba8c7a56f6c3788d11db86eadeeac461bd26370393fb4bc79d04&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS7KJ5AY%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T200948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD9JgSOifX8tNRfQcd4XFPhDn9hm%2BSFaLf8cJuDj63CBwIgWniWIphYYnaw8V7nRJyqubse4TialQt2aJB89715V8UqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhK7DwBjrM5mnTJ6yrcA4Fxk4tny8UNU6HM3h4MiBXX86pdIZgUEQfcitEtBYpX9B%2FBfO4lrpI1ro3%2BQpa14Lcw5NkYRhW0SQC5yGeTT9oA7QD9fCcXd09KOVmlKES2D5p1y77rBIHQsrjWFVC%2Fj7ahjtDOUKodANOtyZkJf%2BZMd3lLzFGCRFUGwsQkGw%2FjArJAtD4Kw5biFikwUiF3jOq3qdxLHnXmrvhL3Y%2FKBE%2BYp8Qo%2BIjGqWZY107jBRkMc4nwBeFyk2w7LSkogR9lBNyoTis9u4Be95gvozu%2BasY9tVOfn545B%2BlEX8kTY3COeltdBB8xpQ3nB4rN9MUewcGHik9NQHRm0cHKOHc7w8mjRV8yYi57OvZyPgomGuMHJIRBPO3iBIQ%2Bdq%2FJpeuL442xNqmOjAnR%2BOT8%2B7pbVjhoKgBVEOZuTR%2BAbHTWrg4ADzesQGCYLHRLQ0d%2FZMFTPzOxwyf%2FMKMSClEgpWeOXDiCuYEEku3HBKQ3FDtfcnVMoZlijhE1tkJ2JQlpnQlYIqs5Cqy3Pl%2FWdUGoF8bi5ViY7GB2Srz2alc9HfUkXkpytdOL7JvYnEB3mwTViQ7ETzg6c4xaPADMwB68axAdAJuPpMKnNhyIyV44%2BKZbxKJD%2FxP2zhuoGaK0tJ3lMNqNpcAGOqUBk%2B38XTkILq03qM6qZfyKyybuht3PXj0NsyZoqapflLZasiWJAVw8yydy7xvJw56jt6vr9W7efueoeWYqa7DU5i9bXtm%2FQUA%2BT%2FMcyVP3UM40bMhUPvlJxw2WtopRgveGZIxi5BXMNEPIxg%2FEkk6%2F%2BakCrJOWmNGEc1UDZrhOqO3ZLG2AHdKJcmOL1LDhqEAzJti81ygTOvguYyuD%2FmiaxF1dnZfZ&X-Amz-Signature=e73fa7d661a8b5c29e3a0b63498685c8c47bd41311e688d8e1c7a075a20a043e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
