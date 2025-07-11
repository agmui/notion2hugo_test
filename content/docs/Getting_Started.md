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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSWF24NM%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTw7f%2BzHBGpgPvR%2Bvt%2BJF3mnPwIuaQNM02prQY5XSjvQIgetpiQNiqqN1pfuJ%2BOJizhX10BhEUJwCJ5LoBaZuTJWgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYllIzFzdm5cIiOvCrcA9VMXSOj7zFVVGHsW0GEffna2epDgLHA9YrZMHlS5sapAY%2FK6NZ%2B17QiTyzeZxxt1GdadJti20neYLUar5Zmcyr5kettF6kdKZZn3TdzY9kkqsMFWNqpOYqTa%2FdDZRaVwar5bwUlPvYpdo962Quk%2BzHPHp%2B0c3p0XaQQUCluh0%2F93VrqQ0k8IwTRHYkNHC1vnLEw24j8qV4Ka2urpgXwBEDHWc66rzDmdmpDh8GJfJT0WdFlTX16y8C%2F9ulQ5lkjPDuR87gJVnD8gM5fWa3jkcRQeHBm0JeIpcwlh%2FGM9gCThBk4medKp7Gj9FkYaKaajtUPVOQdJt%2Fsplo%2FE9CBCjzZrkV%2B5uF%2BLVVhXokogul4Ncrwx4ev1tzChPGkwqIbBruowgCbIWuDhDaW96zBdYMSUAv8lupdSARNp0iM95x1Cs2CYZfvVLp2iD%2FOXTx2HLbpJfql6WPAoxDfW4ZE%2BndfSMXFdq%2B86temehGMEmErobYSANfdOWXSPV7l9dPC6wyRAEZMCLt5A2gRLLaIHKrkXy9SMOZ6ARhrQBDhiHMecp68E4Fo2fcMRzTuJjI9SwKOMfHXKuWMjNQs92bkYo8sQhNWNmRQ%2F9gULRu%2FSD9vxyZqxX8NU9%2Ftpsd6MMPVxcMGOqUB%2Fed4%2Buh9tVNe9aWpIwu36de2ElZ659hOLNfVaZzHedwildgPpjeUxFLIISIbjZwy4bJOkeYcdECf9E%2Fmqc5WMjnH%2Fb%2BjcYPbC2XMaUgx6geHpEsaf5e44%2F0KAKQXuWcCfK%2F7hQvHa3qhAVzs9pRGVFPC1w0bnZxBNcNuL9nG8e%2B0AHQKqtlP2%2BcxznHh2A4WHYu1Hkeqd2LzN6c2nZQY7P4C3DrS&X-Amz-Signature=32029c92ce3ef42016a47bb588e447b3f57b9c468384d14437fe0831bd598022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSWF24NM%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTw7f%2BzHBGpgPvR%2Bvt%2BJF3mnPwIuaQNM02prQY5XSjvQIgetpiQNiqqN1pfuJ%2BOJizhX10BhEUJwCJ5LoBaZuTJWgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYllIzFzdm5cIiOvCrcA9VMXSOj7zFVVGHsW0GEffna2epDgLHA9YrZMHlS5sapAY%2FK6NZ%2B17QiTyzeZxxt1GdadJti20neYLUar5Zmcyr5kettF6kdKZZn3TdzY9kkqsMFWNqpOYqTa%2FdDZRaVwar5bwUlPvYpdo962Quk%2BzHPHp%2B0c3p0XaQQUCluh0%2F93VrqQ0k8IwTRHYkNHC1vnLEw24j8qV4Ka2urpgXwBEDHWc66rzDmdmpDh8GJfJT0WdFlTX16y8C%2F9ulQ5lkjPDuR87gJVnD8gM5fWa3jkcRQeHBm0JeIpcwlh%2FGM9gCThBk4medKp7Gj9FkYaKaajtUPVOQdJt%2Fsplo%2FE9CBCjzZrkV%2B5uF%2BLVVhXokogul4Ncrwx4ev1tzChPGkwqIbBruowgCbIWuDhDaW96zBdYMSUAv8lupdSARNp0iM95x1Cs2CYZfvVLp2iD%2FOXTx2HLbpJfql6WPAoxDfW4ZE%2BndfSMXFdq%2B86temehGMEmErobYSANfdOWXSPV7l9dPC6wyRAEZMCLt5A2gRLLaIHKrkXy9SMOZ6ARhrQBDhiHMecp68E4Fo2fcMRzTuJjI9SwKOMfHXKuWMjNQs92bkYo8sQhNWNmRQ%2F9gULRu%2FSD9vxyZqxX8NU9%2Ftpsd6MMPVxcMGOqUB%2Fed4%2Buh9tVNe9aWpIwu36de2ElZ659hOLNfVaZzHedwildgPpjeUxFLIISIbjZwy4bJOkeYcdECf9E%2Fmqc5WMjnH%2Fb%2BjcYPbC2XMaUgx6geHpEsaf5e44%2F0KAKQXuWcCfK%2F7hQvHa3qhAVzs9pRGVFPC1w0bnZxBNcNuL9nG8e%2B0AHQKqtlP2%2BcxznHh2A4WHYu1Hkeqd2LzN6c2nZQY7P4C3DrS&X-Amz-Signature=3bb822a04f256776f204488213389f4fd4831ca049c0c31415e80f2b75d6b4af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSWF24NM%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTw7f%2BzHBGpgPvR%2Bvt%2BJF3mnPwIuaQNM02prQY5XSjvQIgetpiQNiqqN1pfuJ%2BOJizhX10BhEUJwCJ5LoBaZuTJWgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYllIzFzdm5cIiOvCrcA9VMXSOj7zFVVGHsW0GEffna2epDgLHA9YrZMHlS5sapAY%2FK6NZ%2B17QiTyzeZxxt1GdadJti20neYLUar5Zmcyr5kettF6kdKZZn3TdzY9kkqsMFWNqpOYqTa%2FdDZRaVwar5bwUlPvYpdo962Quk%2BzHPHp%2B0c3p0XaQQUCluh0%2F93VrqQ0k8IwTRHYkNHC1vnLEw24j8qV4Ka2urpgXwBEDHWc66rzDmdmpDh8GJfJT0WdFlTX16y8C%2F9ulQ5lkjPDuR87gJVnD8gM5fWa3jkcRQeHBm0JeIpcwlh%2FGM9gCThBk4medKp7Gj9FkYaKaajtUPVOQdJt%2Fsplo%2FE9CBCjzZrkV%2B5uF%2BLVVhXokogul4Ncrwx4ev1tzChPGkwqIbBruowgCbIWuDhDaW96zBdYMSUAv8lupdSARNp0iM95x1Cs2CYZfvVLp2iD%2FOXTx2HLbpJfql6WPAoxDfW4ZE%2BndfSMXFdq%2B86temehGMEmErobYSANfdOWXSPV7l9dPC6wyRAEZMCLt5A2gRLLaIHKrkXy9SMOZ6ARhrQBDhiHMecp68E4Fo2fcMRzTuJjI9SwKOMfHXKuWMjNQs92bkYo8sQhNWNmRQ%2F9gULRu%2FSD9vxyZqxX8NU9%2Ftpsd6MMPVxcMGOqUB%2Fed4%2Buh9tVNe9aWpIwu36de2ElZ659hOLNfVaZzHedwildgPpjeUxFLIISIbjZwy4bJOkeYcdECf9E%2Fmqc5WMjnH%2Fb%2BjcYPbC2XMaUgx6geHpEsaf5e44%2F0KAKQXuWcCfK%2F7hQvHa3qhAVzs9pRGVFPC1w0bnZxBNcNuL9nG8e%2B0AHQKqtlP2%2BcxznHh2A4WHYu1Hkeqd2LzN6c2nZQY7P4C3DrS&X-Amz-Signature=fcea3591f22af2b9c3da26ef0fc830e21b418be30c138fa46b089e60c6b4406f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S3A6FQ7%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMaIAOU%2F%2BKqDbCBolyWG6x%2BCyi3c9kcYJbKMTBENiy1AiA5pwP9YML%2Fg0wOQm7%2FPGszotp5VVb%2FpjqIEA9w75U6OCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQwLqjIpPH5ZW5YsZKtwDo6K2WsoQCzxGfm9SPgjjNu%2BwsyaXf4RJhL%2F6Usaj9XYDCM55ymDd3w2ZFiy2annF2ifLwdoCeJCQxADms0IgSTocPjvxnVL0NmqCSShDISXceMkuyNpRLSLFyQUMabjsoxeGM2K2ACO9zDAlCaLKbVu1MFs8evTG1P0qraWZhc3%2FpJu1IIXmA%2BJGSll4bqk5KNIgH6IOl%2FmxNKneRuNgMo94l8LnCY816YPonGZQzAFVOeqVNqNGwtw9BZp6cKWBkgS6vQNWsdnyaymIViAetrNBXhkRp%2B01WZ4pv2Yc5aUGEQrknLTtt8TI9gHyhJTcLXcF4z1k%2F%2BIyS8Bo7%2BuJgm%2FcHY2nT%2FxzxaLuTZ%2B%2FHiHeRofr55gbhK6ZPR3P9JP4NLV56rgzI9TUCf4QSeVy4uYf%2BfD7O9TSzda%2FhDtDJhXFqFE1zibo%2FUoqPLMpvzM4VV0LG2A%2BdOG%2FF%2BkftljX5tdVhQd4fGAs5vX%2FlkkA5sk9kEFBZwYh4C%2BQ4xFCH2sDR7UhB4TJoAKBIjf6QLYjMr4H1XwZwPIZFhfs%2FkeC%2Bzxb5EJQCBicfeurlEHGDEKqyWXeui2eryo9X9e5B5tmYjHkb8zzb%2BlfbueOznrrKUft6D%2FylO9LL9VoKxEw1dXFwwY6pgFBAXXzJlRsJbUVCSaSklEPkLwn9wIgwzbZTnag4Zo1A73P%2BI5lkO2cFDrgKq6rH7SdAbZnuvkJcc66qMC74MS3GfuIFsF65k8fwFsZI4HhWtYM2P1wHr3utV7839Q8s6lok9fq2wfHKs6j6pqkL5WkcZwYx8r%2F6jfx8ChbYkd7UKNia10QR1gBROZWPah68IClKKlfc2B4nrSaXlcv%2Bz3inZnxsrLL&X-Amz-Signature=4ff392115372d84d5468a6bc9a78a129114a207d3a1d5472efa4aff1008865fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFSQ7ZN2%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAKQZrvoqkwN%2FAK5JYyiddFVxKv8VH68ghZXzHTWCI3vAiEAhPHzQrtU0pkQ1g7znS3R2UbfLn2HmBy79xdt9tId8AIqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLC%2Fg3jIOcD%2FkfimyircA7k2ZP97huUfvNWs%2FjowrhphRG5gt3a7XZ%2F0c0u264%2FupqduQdz7PkuMcW1leu2Dy0EDNwrF4P3byisnGeqSnaOsYc61ZHyHeOSjZgC%2BBMFTLhdCpeKmlYyh2Ab16TAPu8wj1FXM3i7aDyE%2FvbdPPNo3%2FGbPydPEqbeGZMOzJjQyMWlu0csnBh5tOgOlY%2FFPyUIBxOT2OnbVyA2sX6vPRtGKFq884XBPdgDg5Ep59z8w29KsKxMnlVCtt3jKOqYnGQ8%2B5HU9iiTtQayoMngtpc41NsI9viNVutnMm2grB9RkyJ0QB42obWczNT6bnKz29lmTAkP09PWPus29zX%2B1fLbHEXhn%2BDhyxvAURfnePLBQofpXD%2B7vwshL4ZWeUg5SyEkG8%2FPRhLVmDc%2FvwYwCfgBlUttezMobeQXtWd2IhW58LidZViqHSTRNTZldqi5s6IPIQjhsApBiEszACH1FOmO9ct%2B1aWSwe8v3NUyfY5MPihwhT0ynV3W8M%2BK05vD4FQkcxnpmBnAifc6R4ON8u%2BDLNtuwNU1pDqd0xKGgKM%2FNFxlIET6kRuIFt58CDufZBiOgz%2B0Y2alyzO8l8jroK3ur8LFdtS4%2BgTuZNV9hDhnLN5l7buS2L99lrCZsMIPWxcMGOqUBWk1mRLBzCBmeEEU1ciZePon7hqdzV%2BV72hPij6426LQ%2F7pQa%2BRRVhGvGkMT8ljDQsA7SZGbpyNtxoC42DpyvH%2FIJzHdIYt5znVSQrKD4LD0jISz7PEkRm2pOnj4fwhDwmmJhRptrSACkKCvkAWiYEncaFVlftUd4zZ%2BUvAfsN%2Bwq1R2um3edwm5TcgrmRHygTUfaHhOFd9Fv9djhv4Xu3Mk5nFuR&X-Amz-Signature=07431760625236836d376ceeb806890b0d6cdec772dc34ea7d6c04923ebeeca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSWF24NM%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTw7f%2BzHBGpgPvR%2Bvt%2BJF3mnPwIuaQNM02prQY5XSjvQIgetpiQNiqqN1pfuJ%2BOJizhX10BhEUJwCJ5LoBaZuTJWgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYllIzFzdm5cIiOvCrcA9VMXSOj7zFVVGHsW0GEffna2epDgLHA9YrZMHlS5sapAY%2FK6NZ%2B17QiTyzeZxxt1GdadJti20neYLUar5Zmcyr5kettF6kdKZZn3TdzY9kkqsMFWNqpOYqTa%2FdDZRaVwar5bwUlPvYpdo962Quk%2BzHPHp%2B0c3p0XaQQUCluh0%2F93VrqQ0k8IwTRHYkNHC1vnLEw24j8qV4Ka2urpgXwBEDHWc66rzDmdmpDh8GJfJT0WdFlTX16y8C%2F9ulQ5lkjPDuR87gJVnD8gM5fWa3jkcRQeHBm0JeIpcwlh%2FGM9gCThBk4medKp7Gj9FkYaKaajtUPVOQdJt%2Fsplo%2FE9CBCjzZrkV%2B5uF%2BLVVhXokogul4Ncrwx4ev1tzChPGkwqIbBruowgCbIWuDhDaW96zBdYMSUAv8lupdSARNp0iM95x1Cs2CYZfvVLp2iD%2FOXTx2HLbpJfql6WPAoxDfW4ZE%2BndfSMXFdq%2B86temehGMEmErobYSANfdOWXSPV7l9dPC6wyRAEZMCLt5A2gRLLaIHKrkXy9SMOZ6ARhrQBDhiHMecp68E4Fo2fcMRzTuJjI9SwKOMfHXKuWMjNQs92bkYo8sQhNWNmRQ%2F9gULRu%2FSD9vxyZqxX8NU9%2Ftpsd6MMPVxcMGOqUB%2Fed4%2Buh9tVNe9aWpIwu36de2ElZ659hOLNfVaZzHedwildgPpjeUxFLIISIbjZwy4bJOkeYcdECf9E%2Fmqc5WMjnH%2Fb%2BjcYPbC2XMaUgx6geHpEsaf5e44%2F0KAKQXuWcCfK%2F7hQvHa3qhAVzs9pRGVFPC1w0bnZxBNcNuL9nG8e%2B0AHQKqtlP2%2BcxznHh2A4WHYu1Hkeqd2LzN6c2nZQY7P4C3DrS&X-Amz-Signature=564b64057ead6b7aa43902a208c2f79f8d1b07b52dff33e9ce8844c455abb713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
