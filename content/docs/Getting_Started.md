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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635RDA7OY%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIA%2BShVe9238fHqkPdvJPzfDCDRiT4UXq0z8IlupFxR9tAiADR%2B2kmYIKmarRRZTQq7cYg8K1LjRvFCjUtilPUd%2BhFSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLS9lgLzC14oA1uh%2BKtwDndVucJqoO4Q353PFOZmsZZn%2FdQarmzEkTz%2F20PpG8mzHCxobb461%2FeoyJBwN%2FMaBYMZT9KM%2FCdc4Yfzo3uuYs%2BQmf1nvyT6QTRGWIpuSg1hyFuW1idjG%2FFRDUnpS%2BafutE3YdnqxEiJ9HtZnDadyYlD9SG6KNnKw4cdFid8kD5063fJRAMgfMCBlg4sos8DJTwLJOfOIyHb6wEGJHE8G%2Fm8KX209utxolRjrNag1Wz4KIFUzsvyHw%2BXVgb4XI1LMlIEBucB78OJpbP3Qf75cnBBmOskdcF310Bg%2Fq%2FqXKdtBbfgq7lSmD6pZiftEtHRBFloBzE%2Byd22CUw2%2F5h2IxbLMfLoOklIWPmsDzYwej0u3FAYEXEk9O%2FUDqcFkiXC%2FQgVyMEx9M3Zcjy8kQGnt0WLOmsSXUBNf3OYjdO41CP9pF4zsBOyCHmWlcTV5vbFFYNFusQDuDcxMw7fH1g8WfP330gx%2Fz4M5fRmJ8uBMrNiLBiKit04WW00IB0Y690mCWS2NuqCfIt%2FKn9NHx9ATRXcGj7BL0bYKtwjdPD32dJXiBvnw3XQfBHKMXPCiGwnZN4V1swcprbTkt3xLPa2amomZPsOvJ5xVN3j5BPagbsNLeRj%2BILoCbYEOgBEwgIXnvwY6pgGc6mDQIjP9zq1BBPzqIl5pSWDLroLsoQeC4Cq%2B8%2Fd5vdMwwhE%2FN2pRm%2BPZd%2FFDauIr3zyR0mslfMvVtrkmxpUtUW4aA%2FX3VR9AyiHOtrkvSpH8fE2Gu091iKo%2FQ7XM%2B%2F0iEDye70IcTYFU%2Fr6KJuAQr6RS6qUKvyr0uxfozTr3NvIG9b75i61uBeKB5pa8jDaGML41s0XRV4pgh8RCsZKrLa5bO1Mc&X-Amz-Signature=8127a87844874406dc6155b6283eff4a1423b384d55eaf6cc91b864ff6592fcb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635RDA7OY%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIA%2BShVe9238fHqkPdvJPzfDCDRiT4UXq0z8IlupFxR9tAiADR%2B2kmYIKmarRRZTQq7cYg8K1LjRvFCjUtilPUd%2BhFSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLS9lgLzC14oA1uh%2BKtwDndVucJqoO4Q353PFOZmsZZn%2FdQarmzEkTz%2F20PpG8mzHCxobb461%2FeoyJBwN%2FMaBYMZT9KM%2FCdc4Yfzo3uuYs%2BQmf1nvyT6QTRGWIpuSg1hyFuW1idjG%2FFRDUnpS%2BafutE3YdnqxEiJ9HtZnDadyYlD9SG6KNnKw4cdFid8kD5063fJRAMgfMCBlg4sos8DJTwLJOfOIyHb6wEGJHE8G%2Fm8KX209utxolRjrNag1Wz4KIFUzsvyHw%2BXVgb4XI1LMlIEBucB78OJpbP3Qf75cnBBmOskdcF310Bg%2Fq%2FqXKdtBbfgq7lSmD6pZiftEtHRBFloBzE%2Byd22CUw2%2F5h2IxbLMfLoOklIWPmsDzYwej0u3FAYEXEk9O%2FUDqcFkiXC%2FQgVyMEx9M3Zcjy8kQGnt0WLOmsSXUBNf3OYjdO41CP9pF4zsBOyCHmWlcTV5vbFFYNFusQDuDcxMw7fH1g8WfP330gx%2Fz4M5fRmJ8uBMrNiLBiKit04WW00IB0Y690mCWS2NuqCfIt%2FKn9NHx9ATRXcGj7BL0bYKtwjdPD32dJXiBvnw3XQfBHKMXPCiGwnZN4V1swcprbTkt3xLPa2amomZPsOvJ5xVN3j5BPagbsNLeRj%2BILoCbYEOgBEwgIXnvwY6pgGc6mDQIjP9zq1BBPzqIl5pSWDLroLsoQeC4Cq%2B8%2Fd5vdMwwhE%2FN2pRm%2BPZd%2FFDauIr3zyR0mslfMvVtrkmxpUtUW4aA%2FX3VR9AyiHOtrkvSpH8fE2Gu091iKo%2FQ7XM%2B%2F0iEDye70IcTYFU%2Fr6KJuAQr6RS6qUKvyr0uxfozTr3NvIG9b75i61uBeKB5pa8jDaGML41s0XRV4pgh8RCsZKrLa5bO1Mc&X-Amz-Signature=07e80059121355b2a949560b0e84ad1e1152edf1625d6ac4ab06f319cd3d098f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSGDXEON%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCEQWQRE1hWCQ%2FZWauH0atPPwXj3VUBI2f8hi37o%2Be5JwIgb51%2BZyh9nkfLe%2FLv6sa%2Fjk5tTs1B1CaOJ%2Flw8opImjEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGeqzkOSiPg5%2F2Gf9yrcAxi1wC8Q0RnoBErKsAxTy3pDEAPJxlSMuYxy1w%2BElOopH83Q8QvCaMAOc97AQt8ctbsFScQGjbjCmelolPlbW6Ns3AJiu6MCw92QdoTjLRBsZCvdMR9We65x%2FfmUht2%2FU%2B8vTep5duhEgbgQQF3KmnzzH4imlV2Lw9p8qKYAFhmsrNHigAdd4lmp%2BQt7xCXJqBRVXNZdUipC27dSLvI%2Bh2gmfXdP7KlwiFX8YgB9PbypEjXEG3zM3AfKmOcA73%2BweEceHwl7lHvIMvYEg94fPTJfG8LWyJBeFR%2FEHE4DrHyWnrIMvxUZXJSDI8Q1OVuiFQbG4w3j6Ql3OQPhA2SFItU5DxN5rdUGklx%2BY2nvrms8L%2F5R1GtMOW%2FwN8wBEFsoxXVDtYFwhOrpa25x%2Bm%2BC41IhMLpwY%2F0mSVN73Gx1fPe1pKPRzdU8fJoMifi6HTT75bZert1nrIVU4XupXcZj0zNRkyZee6CBJPi%2FTxTQLcMm4K%2FAjpq%2BFyoXy6p%2FHrt2Grs8ThSOG6t9lUrIBPzH4t%2FY4AGIRQTYeH57dr2FZrfvYqMSvliQJQG7pNESrrkfprp86z6Xzy1wlHiuKVzmSmoU1Xfu4pqfTUU9F3e7sx65jq23ExtcYssJtlZDMPiE578GOqUBWCLfhq5druPKjLqfjbjXky0ZGc7hybZ8hgKycoeF4u0N%2F7KosyR%2BDofiVEYg8gLEdsZrE5RUw%2BICO2IGHMlCPU6ef%2BuaRSWsrG0yS%2BglTMBqxQGkav%2FBn7H0V%2B7l%2BlctlBa%2Bvy8PLuNhB2ImIkbPVvbry2msXCBjlYbyWorACsi7UsyCkRLNFlcdLf68GfEBKJMaAFR9HzMuj5VN2r9wM5zJP8O9&X-Amz-Signature=f80727ad3f00353034292916b348800aa92ccfee7f58586f01fc2c62c5682eb8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JBXKJSB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCzSHA%2BlSedUmzyoIJ%2FuXLJVA6aVgwgMViXs1gJoz7CRwIgGZiP1Eae%2B5oH0znl4Zy5ABtIUidVRE9tjm%2BYo3didn4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImyOeGJpvvI4uW%2F4ircAwDLlpKtrHlGH1ewmNLot7EXsrgLR4InqaChlI0DJRUWYnhYuzOKzCnRiK35xxkBA%2B66iluxpbrTLV1Z1EY%2FzdhWFoR4lDcjEZQSYtpr9Rt0v4kj23PEyjS1I6SAjQKb2S7BM342ja41tIKZvN8hw48ER7stPzwoALbqbNTxI6WWGh5qe0e5be%2FNVpgQuN4%2BVh4R%2BHi%2BIcZIO51eSHUdZpVK1ruk3BpnM18Zo8WcwqVpByiQeXrVyeuQ9Wfs6S3l%2BKiyXrXc5Fq1CWlF%2BGB0FC0KEn44ZKXqJn31ssu65htaMIt7KGdnAWd8Llac%2B2lWPhsmjIT4El4nZaUWSJn2OxTDTr3ImAhsnkfzBI0UwPiv2qSunqxqWOY2yH%2F6hybI%2F0uOdQr50%2BGliCUb3rQ9YUe0ctkuIl7fz39ghdhIuvIEbwpVK0LXpVxdI5CbMQuuFyWKxkLB9%2FoRve64V0dgfjppfrMreGLoAQrcvQVMLRTb57YVaUUn%2BtHO6ObYYcG8tlh%2BMIP454yxZ02hR2IfNBVK2gvmgbumskoeiVf1I1T0cOiE%2FRycAHCdmsZ6wyoqiAXReV%2F5grkaVRCi8nFQqdzoJX2bCMcaW7sQTvJc82D6zBi%2FUTMRPav%2FlciHMOCE578GOqUB5tf3UZAgmsiBKMUAcF80nOoQCTfwkGnA6XIA%2BrhDXyOtR5gHFRyrtz%2BmdCiUsi90h3pnRd6q2uJq9kyukT38ZlnZyHN0uaxHVqWFKeCeK1l%2FCO0RHqJY7SxPATANLmfZTsF8ROaMQChjydWidN%2BB5phlkjCZQMW3UA0z3OVLn%2Ba2TQXoynAAmml21OJPnurTMUC%2FZfQmk7DBp9BobZyAalJNrpXo&X-Amz-Signature=c94710d42aaa57ea7cba33b245dce3755f38a3a726736501c70d75c2a2fbce99&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635RDA7OY%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIA%2BShVe9238fHqkPdvJPzfDCDRiT4UXq0z8IlupFxR9tAiADR%2B2kmYIKmarRRZTQq7cYg8K1LjRvFCjUtilPUd%2BhFSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLS9lgLzC14oA1uh%2BKtwDndVucJqoO4Q353PFOZmsZZn%2FdQarmzEkTz%2F20PpG8mzHCxobb461%2FeoyJBwN%2FMaBYMZT9KM%2FCdc4Yfzo3uuYs%2BQmf1nvyT6QTRGWIpuSg1hyFuW1idjG%2FFRDUnpS%2BafutE3YdnqxEiJ9HtZnDadyYlD9SG6KNnKw4cdFid8kD5063fJRAMgfMCBlg4sos8DJTwLJOfOIyHb6wEGJHE8G%2Fm8KX209utxolRjrNag1Wz4KIFUzsvyHw%2BXVgb4XI1LMlIEBucB78OJpbP3Qf75cnBBmOskdcF310Bg%2Fq%2FqXKdtBbfgq7lSmD6pZiftEtHRBFloBzE%2Byd22CUw2%2F5h2IxbLMfLoOklIWPmsDzYwej0u3FAYEXEk9O%2FUDqcFkiXC%2FQgVyMEx9M3Zcjy8kQGnt0WLOmsSXUBNf3OYjdO41CP9pF4zsBOyCHmWlcTV5vbFFYNFusQDuDcxMw7fH1g8WfP330gx%2Fz4M5fRmJ8uBMrNiLBiKit04WW00IB0Y690mCWS2NuqCfIt%2FKn9NHx9ATRXcGj7BL0bYKtwjdPD32dJXiBvnw3XQfBHKMXPCiGwnZN4V1swcprbTkt3xLPa2amomZPsOvJ5xVN3j5BPagbsNLeRj%2BILoCbYEOgBEwgIXnvwY6pgGc6mDQIjP9zq1BBPzqIl5pSWDLroLsoQeC4Cq%2B8%2Fd5vdMwwhE%2FN2pRm%2BPZd%2FFDauIr3zyR0mslfMvVtrkmxpUtUW4aA%2FX3VR9AyiHOtrkvSpH8fE2Gu091iKo%2FQ7XM%2B%2F0iEDye70IcTYFU%2Fr6KJuAQr6RS6qUKvyr0uxfozTr3NvIG9b75i61uBeKB5pa8jDaGML41s0XRV4pgh8RCsZKrLa5bO1Mc&X-Amz-Signature=398b4ff8e78bf196aa3d167868057b6485efb3301cdfec5f8aa12263460f70fd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
