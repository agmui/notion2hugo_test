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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVW4VUZ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC%2BvReJ8K4T5uclSOdRD445qdfCUGkq89NehDa%2BZPnNKgIhAP%2BMNVxHniMDd9JfgW0c598VNh6MbZC4ObJ0Wy7DZ5zPKv8DCEEQABoMNjM3NDIzMTgzODA1Igzyv5BRl%2BqQ3nQqQpUq3APHE57b0bEO5TEKKxZIDawv7jmK6UskNtBskSfN8gpx2w9c0IMVKwmW8E3KVUBUI5NYo%2BbjS8rH4OBKn7fQnysrkWpZxrss8mE0udbrxNKBdmhtOa%2FigWuRRptpL%2BD5hYJoc%2FnUOWmN9FjtDAJXdNKuh%2BtauN7ciaGha42pjbc4WDgoHuqlEUuWXjELvw%2BS1BGh4MbhwpajdAngqO8qMVJSGuHMSb5NR%2Ft7V%2FVUdhhNj6fzOxr%2F7IJigkRNoTFvD0MRs6KrsSUwURhqyaiLLpE8aXX53DFEimSv1mwp9prZkAu9sQGB9DAmIvktiFqnsiPYOWh%2Fw2KkknJe65wPgGKxL%2FlEyt38i4KFJFgxD2L2lMmJ753c6qkIvyH8bbwb5jvyBmJ2tVNccvxhjbistRcIQY0%2B1Icgnj0Q3olUKGsJHDq5At2TosVIht%2BWJhuLvasAvAMFkKVWh073trPIGH0zeZvQyTOxGofgUr88MipfFIUSIZ03TYafTUbMsHN51Dl5O%2FeGakPMvj2xo4oXJqvxztzV06nPDfN%2FFz8W1fjIqyIaGpOS%2BkPvFeZSXCGAFlmBdKXw7IlcIrMCZgr1HPitxoV3lhokxz6FtAjx%2BbD31WhE9oc21amK5M1Q8zCQhbrCBjqkAbKTMiSAkqpXwXgvv8QMbbMPmnxC0%2FZ9ivZer2PAYZnnXpCIXcBDBF%2FSZz5yzHVL4dhUk%2Bh2tEjWrtlWuQNCSzRfxIy%2BRw2IuJmCST5chZjKZulJmAwMDnIV4Oh6HLmnaD3fUb4cshamkMIG8OyhRROagF%2BKRge4kFikdqNI5NsAp7BnTF%2F9Onh7TwlmODjT1VeXW2dYG6lg4GA%2FX%2FvXK0mDyL5Z&X-Amz-Signature=2acef03792920ae3cb403e988d424adf0cb8e082248984c6bcfae8dab98b3b88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVW4VUZ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC%2BvReJ8K4T5uclSOdRD445qdfCUGkq89NehDa%2BZPnNKgIhAP%2BMNVxHniMDd9JfgW0c598VNh6MbZC4ObJ0Wy7DZ5zPKv8DCEEQABoMNjM3NDIzMTgzODA1Igzyv5BRl%2BqQ3nQqQpUq3APHE57b0bEO5TEKKxZIDawv7jmK6UskNtBskSfN8gpx2w9c0IMVKwmW8E3KVUBUI5NYo%2BbjS8rH4OBKn7fQnysrkWpZxrss8mE0udbrxNKBdmhtOa%2FigWuRRptpL%2BD5hYJoc%2FnUOWmN9FjtDAJXdNKuh%2BtauN7ciaGha42pjbc4WDgoHuqlEUuWXjELvw%2BS1BGh4MbhwpajdAngqO8qMVJSGuHMSb5NR%2Ft7V%2FVUdhhNj6fzOxr%2F7IJigkRNoTFvD0MRs6KrsSUwURhqyaiLLpE8aXX53DFEimSv1mwp9prZkAu9sQGB9DAmIvktiFqnsiPYOWh%2Fw2KkknJe65wPgGKxL%2FlEyt38i4KFJFgxD2L2lMmJ753c6qkIvyH8bbwb5jvyBmJ2tVNccvxhjbistRcIQY0%2B1Icgnj0Q3olUKGsJHDq5At2TosVIht%2BWJhuLvasAvAMFkKVWh073trPIGH0zeZvQyTOxGofgUr88MipfFIUSIZ03TYafTUbMsHN51Dl5O%2FeGakPMvj2xo4oXJqvxztzV06nPDfN%2FFz8W1fjIqyIaGpOS%2BkPvFeZSXCGAFlmBdKXw7IlcIrMCZgr1HPitxoV3lhokxz6FtAjx%2BbD31WhE9oc21amK5M1Q8zCQhbrCBjqkAbKTMiSAkqpXwXgvv8QMbbMPmnxC0%2FZ9ivZer2PAYZnnXpCIXcBDBF%2FSZz5yzHVL4dhUk%2Bh2tEjWrtlWuQNCSzRfxIy%2BRw2IuJmCST5chZjKZulJmAwMDnIV4Oh6HLmnaD3fUb4cshamkMIG8OyhRROagF%2BKRge4kFikdqNI5NsAp7BnTF%2F9Onh7TwlmODjT1VeXW2dYG6lg4GA%2FX%2FvXK0mDyL5Z&X-Amz-Signature=af7fad3abf67a645a4d2b2035f04307ec705ed8bcb82d7d0a580240487224816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVW4VUZ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC%2BvReJ8K4T5uclSOdRD445qdfCUGkq89NehDa%2BZPnNKgIhAP%2BMNVxHniMDd9JfgW0c598VNh6MbZC4ObJ0Wy7DZ5zPKv8DCEEQABoMNjM3NDIzMTgzODA1Igzyv5BRl%2BqQ3nQqQpUq3APHE57b0bEO5TEKKxZIDawv7jmK6UskNtBskSfN8gpx2w9c0IMVKwmW8E3KVUBUI5NYo%2BbjS8rH4OBKn7fQnysrkWpZxrss8mE0udbrxNKBdmhtOa%2FigWuRRptpL%2BD5hYJoc%2FnUOWmN9FjtDAJXdNKuh%2BtauN7ciaGha42pjbc4WDgoHuqlEUuWXjELvw%2BS1BGh4MbhwpajdAngqO8qMVJSGuHMSb5NR%2Ft7V%2FVUdhhNj6fzOxr%2F7IJigkRNoTFvD0MRs6KrsSUwURhqyaiLLpE8aXX53DFEimSv1mwp9prZkAu9sQGB9DAmIvktiFqnsiPYOWh%2Fw2KkknJe65wPgGKxL%2FlEyt38i4KFJFgxD2L2lMmJ753c6qkIvyH8bbwb5jvyBmJ2tVNccvxhjbistRcIQY0%2B1Icgnj0Q3olUKGsJHDq5At2TosVIht%2BWJhuLvasAvAMFkKVWh073trPIGH0zeZvQyTOxGofgUr88MipfFIUSIZ03TYafTUbMsHN51Dl5O%2FeGakPMvj2xo4oXJqvxztzV06nPDfN%2FFz8W1fjIqyIaGpOS%2BkPvFeZSXCGAFlmBdKXw7IlcIrMCZgr1HPitxoV3lhokxz6FtAjx%2BbD31WhE9oc21amK5M1Q8zCQhbrCBjqkAbKTMiSAkqpXwXgvv8QMbbMPmnxC0%2FZ9ivZer2PAYZnnXpCIXcBDBF%2FSZz5yzHVL4dhUk%2Bh2tEjWrtlWuQNCSzRfxIy%2BRw2IuJmCST5chZjKZulJmAwMDnIV4Oh6HLmnaD3fUb4cshamkMIG8OyhRROagF%2BKRge4kFikdqNI5NsAp7BnTF%2F9Onh7TwlmODjT1VeXW2dYG6lg4GA%2FX%2FvXK0mDyL5Z&X-Amz-Signature=eb4e33a798edb1474ea908b12aa307481c1803593f88a5733aa7fdbf8091850b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP2JKJEB%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIALXBHS9umaO5HSsNqmyZrEZSDFHwN9KAqG8O6tnWpVMAiEAqc8NkrBP33ifi5d%2BguV7G%2FXGlRszQ4WrE1ic3SZKAOUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDK%2FIHiBI9Z8TbYwvaSrcAzeIAUx%2F4HI0BGmMD%2BcXB%2B%2BX1OfQlzghMEKNv50ndaZAjAyznChYFohdBkFH0PmSCJL7RsXRoIPVZUe2zxwIOysYIiR0bIyOtRNeEyebUYeT%2F%2FWvOABhRVdkPq0yy0tJsZdUbDDgsEG30aLw%2FRLjCNDm0MEZGMNZd06jiPlqwE8QE2jY5RA22X7buH2JBHP4NPFXcQby9sXv5m2Mz12%2BK8KT4ZzVrxb2%2Bd3NatYKjO0ECvnJrNRAtrbDNfbZIPd1YybnXFlX3L5iIP%2BA8VH%2FjEfveZvLN1XnHKPsEPruzlvUmxrhSrm22ho%2BtcnWBUZ9Kg6coMx0OawqxPBjJfKFQatHq3MHKCvl3x4PNUv4DgpI13ruJcd5X%2B3KFUNF9XSuBsNgp0tNV%2BbkpBgiuTQEUHMo5ZyuZp%2FrOhMGNmGyfOaPiHwJsYcd0EXUl6Xw%2B0lBFg3DjnrkCZa6zn3Ym5V13Fn45BG1jJYvrV32jA1e8zE4J2vUc8nfnBorK9jBS85zMBXJrGEuVWfFzlMg9ywmJnQReDU%2B59S4W9WGQO0Mtfc8NQE4dcgAe%2BuDLobWcOVCsviTmjX6QhheHiVqo1Rvz6LY4DqB8fL26bldza9kEkrlTNyqIAUdRAOAM20DMNaEusIGOqUBx36HYIqpaYl3wVtANPB1kS5fe67Br%2FmfXDyVwdDSLl5uJ3teCr%2FOpB0W0i7wvH08xU138LI5KmT8K3Y9lG1bExx6OsRqib%2BLepQiisM4R6ioAm2G2JlnXlW2B8CVjNTnHW5Kk8nufoY661pBVhBE14PXIoN9046UtfTKYxOt7sz7mogrsH2g2Oj9dXUtKD6yaJyjweDdi27yh0%2BVxUU%2Bj6%2F9Mgp7&X-Amz-Signature=df8afeccc7bde0c61de484e855cad58241c1ddee1f5cb3b0aecf87e947156af8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3X5HCJJ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAaAFnzbqZSdDiJPXMwj%2Fve9B1HtGiyzqQxemnNhu9ANAiByO31kF%2BSC4udGNe4t1Mu3cdYFHgkj4ViODT0cF2SQLSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMX3HI9l6%2F%2BWUcTZWlKtwDtEgEh6bC6N0%2FZmXHmAKduoO1DT%2Blx%2FU%2B2kZZusOvRq3wgrgY3RNRqRmHGD7cq9nZiTowQXAIrkzpaO%2BicA3oS2S1Ao%2B%2BSPVlg5yrBSaUQLQz0mo29GzipxZti3IWHAG8V6rlai5r2%2FiIa4Tnj3HaijirthxK6Hnitt2Ylk3m0eVkYAgINT5ZGXtlBlgR5pyHi%2BdoRWL%2F6DJVy7ZB8vt4v8ngW%2BygYS1Bi944oqj%2FSmQVGcDPT3x9P6%2BSNP9XcUkNyQizK9ecJSB3EVmWjOJi2NjoC295tMnj%2FtHLfP1l6SCgqJpa0aELAnXOyEUCHAGG8Pxm0y%2BlAn0rxAwJRmCorPhuhRaK3v2PKXNM5Kph1Yen%2B8yxi2NtSqRTi508Y1nrsD0inAymBwxUaqnkgPdoY%2FxxnnK7nZwwQQ2BLdGWM%2FasWu%2BgY4%2Bmra0GEHLx9HyIzacZNdIKitvcrF9iTi15bFXcB2qQM4KI5Aj%2FsS%2FxQoyZchnEkPzXkZ%2F5kp0j2n3pIMsFPvzkumJJwAcMCZMVuw1%2Bw%2F%2F3fRBXs8DV0Bis85K%2BdNCz6nWGhn50A94hhDR93cEbTCDyPvse%2FiDeEjIhDBJfx29aXLvF9Oc0rE%2F4ARPNJaeFEUUPzesfMegw9o26wgY6pgHtqXSRTkIVJ5n6OD3FBDk3cFWk%2B2r%2Ftg0mUec1NnsLwuR4lIS6GEAKfiDf%2F6dhsqgJqbmjVSnDYWJ5a46%2BDsaX1CAiHUbNa5bd4tT%2BgHBTQy59s0qIjjvY0HmpVC42veA99CwnbdTCDhTFVYnG0vrPHL4RSaKrxCXW5D4gPfVfoqC57wz5ePI4od%2BWQagwaMsrCu%2B7FFHYKdpEU0tJY11NoP3F%2B3m8&X-Amz-Signature=d3f39c72feed7fd5dd88f79229911d4b9ebb79ae8ce95b42009e688ede2476a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVW4VUZ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC%2BvReJ8K4T5uclSOdRD445qdfCUGkq89NehDa%2BZPnNKgIhAP%2BMNVxHniMDd9JfgW0c598VNh6MbZC4ObJ0Wy7DZ5zPKv8DCEEQABoMNjM3NDIzMTgzODA1Igzyv5BRl%2BqQ3nQqQpUq3APHE57b0bEO5TEKKxZIDawv7jmK6UskNtBskSfN8gpx2w9c0IMVKwmW8E3KVUBUI5NYo%2BbjS8rH4OBKn7fQnysrkWpZxrss8mE0udbrxNKBdmhtOa%2FigWuRRptpL%2BD5hYJoc%2FnUOWmN9FjtDAJXdNKuh%2BtauN7ciaGha42pjbc4WDgoHuqlEUuWXjELvw%2BS1BGh4MbhwpajdAngqO8qMVJSGuHMSb5NR%2Ft7V%2FVUdhhNj6fzOxr%2F7IJigkRNoTFvD0MRs6KrsSUwURhqyaiLLpE8aXX53DFEimSv1mwp9prZkAu9sQGB9DAmIvktiFqnsiPYOWh%2Fw2KkknJe65wPgGKxL%2FlEyt38i4KFJFgxD2L2lMmJ753c6qkIvyH8bbwb5jvyBmJ2tVNccvxhjbistRcIQY0%2B1Icgnj0Q3olUKGsJHDq5At2TosVIht%2BWJhuLvasAvAMFkKVWh073trPIGH0zeZvQyTOxGofgUr88MipfFIUSIZ03TYafTUbMsHN51Dl5O%2FeGakPMvj2xo4oXJqvxztzV06nPDfN%2FFz8W1fjIqyIaGpOS%2BkPvFeZSXCGAFlmBdKXw7IlcIrMCZgr1HPitxoV3lhokxz6FtAjx%2BbD31WhE9oc21amK5M1Q8zCQhbrCBjqkAbKTMiSAkqpXwXgvv8QMbbMPmnxC0%2FZ9ivZer2PAYZnnXpCIXcBDBF%2FSZz5yzHVL4dhUk%2Bh2tEjWrtlWuQNCSzRfxIy%2BRw2IuJmCST5chZjKZulJmAwMDnIV4Oh6HLmnaD3fUb4cshamkMIG8OyhRROagF%2BKRge4kFikdqNI5NsAp7BnTF%2F9Onh7TwlmODjT1VeXW2dYG6lg4GA%2FX%2FvXK0mDyL5Z&X-Amz-Signature=c548bb5e2884d667aa7e475e04aa88662fe4afb883d89417ef1433634634ab45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
