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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW53MDWL%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDGTvnG2PxFJ8%2FdjbLjkrITZpeAXcL5n5D7kNCr8LIw6AiEAidtaSTYy%2F%2FyRADojgeZGgM8kXMGFh52bKneJV1nhVpQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPD83df2Bj5Ehro2zircA29w4PnkTzn5EmOSKVeid1GkBoy5154W%2B9CWKMpFkSyhuogD1fFqceSw%2F6D8khGjjPa11EVJ5Dw06gfpYTbiAhXMNlrHQhvFf9lzQLHyocOInID6392XXTqcRyLV4OnEiTjsP2yZZs%2F214CphcLkiQI6LwBa4j1ZfPcoNnfgGuPiA9Poir5kGVhp%2Fg8%2BQtoC9TSCgw4Z%2F3oESN0xdQVwJFmgECzAM8hB71ubwGTOfCsW1P4NR%2B34m9%2BSTgt%2FyRyGfHkPUv6hBwBM0MImsWk6HnswtSbmjizWUENlh2mVN5TcsZ2u8K%2FdEZ3uzWbJwsXwAXKhYPCaTyamEwHpUMidncyEuuGTSW0TMfrRz4u3%2FFqAWXk3dl%2BGen%2BW%2FsQA137RpUYRNNQQk4U5mbPaucb8MCBKh7%2BFcTnIWA3uzlRxWjyaNJtuCPPPv9jmekq2clWV9XZMJZULAkhKg8OMty%2B%2BHI4bRw%2FpV24EFGCGksCBA7mochCbmh6hpSxu%2BLpZYRKvteX87WSBEVdspMab0YvnnnC%2BLj4t0z8L7GlfimRAvTNRiCsAaEaaosslH2x1xv0eodORqcFUC9krEEmY3HGNd2TjdSAzpLyjQ43z%2BKCV5so5RbyYjXs4Fo0ZgHIjMM26i74GOqUBHNuZ1PGgzC44rSYI%2FzvmNW8sJ8X9vhcqu%2B6rmc%2B1edKB44KBc4KIsEgfF%2FLbnkCAceOMjXxBnjgYzZ5OjmTIgJFqCoPipljWs4h2qWJ5TAHd8ful2K1eHcQv%2F%2BBNfEjIVzR23U9T3C38oX44H776D3WEQAn8n%2Foicegyl%2B5PNBKZoykvpLXP0Uj10QohdLPmuytfvFT019YpD3M4M5PT%2FzXGyAj8&X-Amz-Signature=c57ab85a69e1fe33f20458c1bb768b9f32b0885caa2be4fe472026140e5aeea6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW53MDWL%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDGTvnG2PxFJ8%2FdjbLjkrITZpeAXcL5n5D7kNCr8LIw6AiEAidtaSTYy%2F%2FyRADojgeZGgM8kXMGFh52bKneJV1nhVpQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPD83df2Bj5Ehro2zircA29w4PnkTzn5EmOSKVeid1GkBoy5154W%2B9CWKMpFkSyhuogD1fFqceSw%2F6D8khGjjPa11EVJ5Dw06gfpYTbiAhXMNlrHQhvFf9lzQLHyocOInID6392XXTqcRyLV4OnEiTjsP2yZZs%2F214CphcLkiQI6LwBa4j1ZfPcoNnfgGuPiA9Poir5kGVhp%2Fg8%2BQtoC9TSCgw4Z%2F3oESN0xdQVwJFmgECzAM8hB71ubwGTOfCsW1P4NR%2B34m9%2BSTgt%2FyRyGfHkPUv6hBwBM0MImsWk6HnswtSbmjizWUENlh2mVN5TcsZ2u8K%2FdEZ3uzWbJwsXwAXKhYPCaTyamEwHpUMidncyEuuGTSW0TMfrRz4u3%2FFqAWXk3dl%2BGen%2BW%2FsQA137RpUYRNNQQk4U5mbPaucb8MCBKh7%2BFcTnIWA3uzlRxWjyaNJtuCPPPv9jmekq2clWV9XZMJZULAkhKg8OMty%2B%2BHI4bRw%2FpV24EFGCGksCBA7mochCbmh6hpSxu%2BLpZYRKvteX87WSBEVdspMab0YvnnnC%2BLj4t0z8L7GlfimRAvTNRiCsAaEaaosslH2x1xv0eodORqcFUC9krEEmY3HGNd2TjdSAzpLyjQ43z%2BKCV5so5RbyYjXs4Fo0ZgHIjMM26i74GOqUBHNuZ1PGgzC44rSYI%2FzvmNW8sJ8X9vhcqu%2B6rmc%2B1edKB44KBc4KIsEgfF%2FLbnkCAceOMjXxBnjgYzZ5OjmTIgJFqCoPipljWs4h2qWJ5TAHd8ful2K1eHcQv%2F%2BBNfEjIVzR23U9T3C38oX44H776D3WEQAn8n%2Foicegyl%2B5PNBKZoykvpLXP0Uj10QohdLPmuytfvFT019YpD3M4M5PT%2FzXGyAj8&X-Amz-Signature=9936de2bda54a799419de02f46d0a273c93be5dd32e3bf6baa4e5113628947ee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBPC7VTQ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIEfZdjWkS2ECTorJtxvTSMIdgepiwmbJLeXhtu5LqitDAiEAmmppJYozi3EOhd%2FLEW5PGPeC9JYphD%2F4eJ1%2BhJByPEsqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD518kzw%2FrRQKhC9ByrcAzOH5x3asMBnGglJaGf6hZj6QGT2TjQaVs5rF0%2BGssABDBeTKXMOAbpaDtRI1s4jDhYMA40gialZ4%2FKWNR1r%2FNPce3qJLiuCiJWnoANVfrK%2F6ISSa7M3R9bBnZHfBTAa%2F02JYuKVct2WOEPUbLQjCH1TNmNcIHgUt4orkBKxIBmhX7DOmu1KtGaV2lnQ2mDQk0ZtJ8u0CoQXKwSuiV5vVBbqzV9Ff3on5FCw90aon86n0seih5V79pm0FeuKm2HKigKfd%2FvAIDEg%2BU3ZLYzNZVl7%2F%2Fe%2Fkpo8oIFOTYlVaqDnLQBBcP8rVH%2Brl2MAjt9NNZsO9FMhnYonCEyDC7%2B1EdJkMXymRSW6uKYqx4Iix2yBOxEk92XKUgfmIfhE4vCXgRo5Kb5nNBV8IAwyWTN%2FLMHPkwKfYlFNWFxpJhnZjpRIbqq%2Fgywxo5VIXvUIfVY9LgQEhlS3JDwTMNoc5kkSQkuwVhye4SRJ8r5hIxMTCO9L3PJe0hBC2TmxTHwjs7T%2BvMhLG8RFl%2FiRRBcEeALBwcDT476U5IY%2FZSwzRXyr2F%2B%2FeLRuGaW%2FcafEJFhmp9lM%2F9HnXQP8wtdaDPWNVRegjKhHwD6V8uURIx35TTQ47pCKSyXSgj%2FQ92BRFtLkMI%2B6i74GOqUByZ8okuvaxIo2%2FG5ZfenRi%2BvpPxpLlk8JmNY0el7%2FaOWKwYgb6lcz2e9fz8wz6woXy4PBk2W3S6eDrjAJDceCCpeNq1A5dtfEyJO0dUC8%2FHtm%2BfdUmpuwu%2BvUb4R1BpCrTsI6ciTfZa5FLKJUGCmFi%2B5lk2gpNh%2FQ765eMRoNbC4A%2BGkJIHlFSAP4HxMVw87d1YV3gYYoePTdzcUeC4DsBd01iOA9&X-Amz-Signature=a9edf167506c63f9e9b3ae3e1e84cdfc77e82a353dbf8731fcd294e1dcbc8fa4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP4ERQ46%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDebmcnMMtob4WobBu3EWU1bCErwLiDZYorv1YnmQpm%2FAIhAII0aDIfQS2gEoGBa0fede0ZlTkew4528FqiYREE9qZvKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkBengUluSkuc%2BN5Qq3ANEXGkekXKA5g%2BQHoYST3sM8AZ7Qys%2BjMFnnS9sqIMKaAKDiAWcBnPjhswN%2FhxB9ecGDtU4pWDHCMm8gvY%2BjGbkccpGbMvTaejD8BuFqiwApj9CT61XjbKzuHzPqPWn9jgzqCf8JZDCMhfOC4xBKClpWWiFhtMTdcXCARO4E3aGGFm4p7fD8L9xDJiit7NdHhaH2O7Ui2iYCR5SIdOL0Rc4SOqAlLa9OEK7l%2F6sPRhMYk4r3LSILxhnz%2FpErqB2QPRBiiug8VfEqzgMXPe9I9BS6MtQd850iTUB5ofkupIZXQiABuf2fUHOmpaMBepAyb5cvWPMg36DZz77uIIAXSVzaZB0wQ%2FH9ewAOUvcBPqqyeA8wS6wB8eyWLsk%2FzOFXPRx5UIeJqNw9e%2BL%2FEYYwE%2FFh161wyWSiZl680xAgAhgA8Xt7VHUmkkbyaFKW4Pj6cDk4mulDUv0D7DPUgil0xR1qm2Cx%2BtXtNbAi2Cu0ZESyAiSwCm%2B4OYoomKhN%2B%2BwvF4UQlkM0T8MfCCg7MU2%2FU%2FLD0IY3NWPYEv7EqfiheL1TI4MBCCs3RfwWCEITPHvKr9kTNVE8DcJzoEeOHilpTnN%2Bp3B8oDonWHyMmN2iLstzEBN2Jx2InHyh%2BWd4TCIuou%2BBjqkAdm1Oa3YialJPQKFuzR25C9YhUAUfwjZ6D8pFlzu9tcXaw5WHxFzLxgjeL7T%2B4tCg8ahZxpn%2BEmcVTlQLIIlwOkP133zZF0dnJ6AG69H6evgsMyDNZgTEVKjYfehGqa9g7B3hOWKFb7cjU6e0VOSgt60ioPL%2BOs95ZY10yt42f24foUqZ8Qb3Ef85D8QGhGGyXn2fVS4rLCh4%2BggD6XWVk3c5jSL&X-Amz-Signature=d196e98d17d74f703603b02716f0798d87abf9f689ca560a2e980699fad9e7c9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW53MDWL%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDGTvnG2PxFJ8%2FdjbLjkrITZpeAXcL5n5D7kNCr8LIw6AiEAidtaSTYy%2F%2FyRADojgeZGgM8kXMGFh52bKneJV1nhVpQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPD83df2Bj5Ehro2zircA29w4PnkTzn5EmOSKVeid1GkBoy5154W%2B9CWKMpFkSyhuogD1fFqceSw%2F6D8khGjjPa11EVJ5Dw06gfpYTbiAhXMNlrHQhvFf9lzQLHyocOInID6392XXTqcRyLV4OnEiTjsP2yZZs%2F214CphcLkiQI6LwBa4j1ZfPcoNnfgGuPiA9Poir5kGVhp%2Fg8%2BQtoC9TSCgw4Z%2F3oESN0xdQVwJFmgECzAM8hB71ubwGTOfCsW1P4NR%2B34m9%2BSTgt%2FyRyGfHkPUv6hBwBM0MImsWk6HnswtSbmjizWUENlh2mVN5TcsZ2u8K%2FdEZ3uzWbJwsXwAXKhYPCaTyamEwHpUMidncyEuuGTSW0TMfrRz4u3%2FFqAWXk3dl%2BGen%2BW%2FsQA137RpUYRNNQQk4U5mbPaucb8MCBKh7%2BFcTnIWA3uzlRxWjyaNJtuCPPPv9jmekq2clWV9XZMJZULAkhKg8OMty%2B%2BHI4bRw%2FpV24EFGCGksCBA7mochCbmh6hpSxu%2BLpZYRKvteX87WSBEVdspMab0YvnnnC%2BLj4t0z8L7GlfimRAvTNRiCsAaEaaosslH2x1xv0eodORqcFUC9krEEmY3HGNd2TjdSAzpLyjQ43z%2BKCV5so5RbyYjXs4Fo0ZgHIjMM26i74GOqUBHNuZ1PGgzC44rSYI%2FzvmNW8sJ8X9vhcqu%2B6rmc%2B1edKB44KBc4KIsEgfF%2FLbnkCAceOMjXxBnjgYzZ5OjmTIgJFqCoPipljWs4h2qWJ5TAHd8ful2K1eHcQv%2F%2BBNfEjIVzR23U9T3C38oX44H776D3WEQAn8n%2Foicegyl%2B5PNBKZoykvpLXP0Uj10QohdLPmuytfvFT019YpD3M4M5PT%2FzXGyAj8&X-Amz-Signature=05c7ab3c33947ad0f34c03bab5e2d0ce3e24d85ee646f951c10d1851a6f4174b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
