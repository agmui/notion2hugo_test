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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIQZBWVE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDcNi95J8vZ2FnmVqDNl6Wbt%2Fy2rHeKRn9V2VZ2k%2FgULQIgJTG56cuPeBi9cF%2F9gAYB6kPYwnWFMWtruo2DGbNpyWAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFiWBOXc9f6Gtp2YrSrcAytpX4rfDI2SmSXjaplr13sEQdCSJ0EyjT%2BCrQi2TM%2Bk79VcrGAbnM4flBxb4sBzp6Ku8WYmLw8F5kznFJAd1yP3H6jE9FNiTxuKFv%2BHFSbvS%2BpXhxdsViMKf5Db1SJgOLZqK%2BefrwZfQ4P7iz4bE5aqRV%2F%2BA0sdUNYiu49GZ3VUjAfXUO8sllqCz2ECwJUUKahFbpzY89Uv3UZTo77Pdyq91oxbLr3ivv4LnpvGuvhLKGp6Zz03cInLQmYa7kUpCw%2Bno0p9N4JEztTjFgtmWLZur978sMI8kpx885GqUojphDRy2mV5I4xEqR8UzCSFbZmws1CQcv8MhVoIfWoiBdmoiicBiV2bqvu%2FJdDjmy4tjhufIIwF6gUuNzrgb55IJ6S8RYTr%2BLDvByb4bTRv53Wepgp4dlRhJFIK94UDJMSyJEkp1aa7gJDhxmxaXlEmENZi9ifB5K73ZYHVQN54F4tJ3oSI0Xn4P4%2Fs54SKaU0TdFwwfHUbEM6I2ZM5jVDi5PdhTUPr5p1LHMB3sM2F5cFocXEf5o8e4wFfdoxVqEXhkPsXCkrfgG5KR5njngHdyryKm7u9H8al0Y7Dlns6R4rPznjONVyKiKUhCcSQKS1RaW%2FbHdUcz3I8b9XuMJfBxMQGOqUBQJIMYzv8MTj2fXNMc8%2BKzPk0XdZyqmLbG94D9RVXhiQBglPeAWtjHNasQkc%2BB4lkl%2FTN9FHlv8rpgAOaLn2yuL3cniQUGfqxBTmMItHavRhloa2FhE78C7WkElT4cLQfzU7XCPTB1L5zXVirteexN1aD6EvsSR%2FHgYLF7hgx71aJi%2Fhva%2F1PxdM8R1ljTTh8XQzoql0Kg86hkBTSSLg2TF9Rnn6p&X-Amz-Signature=c8893cd6d5b5f3b18e00d453a33d3a4a54097f92f2000bb62ae6005d9c5de20a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIQZBWVE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDcNi95J8vZ2FnmVqDNl6Wbt%2Fy2rHeKRn9V2VZ2k%2FgULQIgJTG56cuPeBi9cF%2F9gAYB6kPYwnWFMWtruo2DGbNpyWAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFiWBOXc9f6Gtp2YrSrcAytpX4rfDI2SmSXjaplr13sEQdCSJ0EyjT%2BCrQi2TM%2Bk79VcrGAbnM4flBxb4sBzp6Ku8WYmLw8F5kznFJAd1yP3H6jE9FNiTxuKFv%2BHFSbvS%2BpXhxdsViMKf5Db1SJgOLZqK%2BefrwZfQ4P7iz4bE5aqRV%2F%2BA0sdUNYiu49GZ3VUjAfXUO8sllqCz2ECwJUUKahFbpzY89Uv3UZTo77Pdyq91oxbLr3ivv4LnpvGuvhLKGp6Zz03cInLQmYa7kUpCw%2Bno0p9N4JEztTjFgtmWLZur978sMI8kpx885GqUojphDRy2mV5I4xEqR8UzCSFbZmws1CQcv8MhVoIfWoiBdmoiicBiV2bqvu%2FJdDjmy4tjhufIIwF6gUuNzrgb55IJ6S8RYTr%2BLDvByb4bTRv53Wepgp4dlRhJFIK94UDJMSyJEkp1aa7gJDhxmxaXlEmENZi9ifB5K73ZYHVQN54F4tJ3oSI0Xn4P4%2Fs54SKaU0TdFwwfHUbEM6I2ZM5jVDi5PdhTUPr5p1LHMB3sM2F5cFocXEf5o8e4wFfdoxVqEXhkPsXCkrfgG5KR5njngHdyryKm7u9H8al0Y7Dlns6R4rPznjONVyKiKUhCcSQKS1RaW%2FbHdUcz3I8b9XuMJfBxMQGOqUBQJIMYzv8MTj2fXNMc8%2BKzPk0XdZyqmLbG94D9RVXhiQBglPeAWtjHNasQkc%2BB4lkl%2FTN9FHlv8rpgAOaLn2yuL3cniQUGfqxBTmMItHavRhloa2FhE78C7WkElT4cLQfzU7XCPTB1L5zXVirteexN1aD6EvsSR%2FHgYLF7hgx71aJi%2Fhva%2F1PxdM8R1ljTTh8XQzoql0Kg86hkBTSSLg2TF9Rnn6p&X-Amz-Signature=711e13f4504d342896522aec4f82480065d58350e96b6f7622e9e6d1a91c76d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIQZBWVE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDcNi95J8vZ2FnmVqDNl6Wbt%2Fy2rHeKRn9V2VZ2k%2FgULQIgJTG56cuPeBi9cF%2F9gAYB6kPYwnWFMWtruo2DGbNpyWAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFiWBOXc9f6Gtp2YrSrcAytpX4rfDI2SmSXjaplr13sEQdCSJ0EyjT%2BCrQi2TM%2Bk79VcrGAbnM4flBxb4sBzp6Ku8WYmLw8F5kznFJAd1yP3H6jE9FNiTxuKFv%2BHFSbvS%2BpXhxdsViMKf5Db1SJgOLZqK%2BefrwZfQ4P7iz4bE5aqRV%2F%2BA0sdUNYiu49GZ3VUjAfXUO8sllqCz2ECwJUUKahFbpzY89Uv3UZTo77Pdyq91oxbLr3ivv4LnpvGuvhLKGp6Zz03cInLQmYa7kUpCw%2Bno0p9N4JEztTjFgtmWLZur978sMI8kpx885GqUojphDRy2mV5I4xEqR8UzCSFbZmws1CQcv8MhVoIfWoiBdmoiicBiV2bqvu%2FJdDjmy4tjhufIIwF6gUuNzrgb55IJ6S8RYTr%2BLDvByb4bTRv53Wepgp4dlRhJFIK94UDJMSyJEkp1aa7gJDhxmxaXlEmENZi9ifB5K73ZYHVQN54F4tJ3oSI0Xn4P4%2Fs54SKaU0TdFwwfHUbEM6I2ZM5jVDi5PdhTUPr5p1LHMB3sM2F5cFocXEf5o8e4wFfdoxVqEXhkPsXCkrfgG5KR5njngHdyryKm7u9H8al0Y7Dlns6R4rPznjONVyKiKUhCcSQKS1RaW%2FbHdUcz3I8b9XuMJfBxMQGOqUBQJIMYzv8MTj2fXNMc8%2BKzPk0XdZyqmLbG94D9RVXhiQBglPeAWtjHNasQkc%2BB4lkl%2FTN9FHlv8rpgAOaLn2yuL3cniQUGfqxBTmMItHavRhloa2FhE78C7WkElT4cLQfzU7XCPTB1L5zXVirteexN1aD6EvsSR%2FHgYLF7hgx71aJi%2Fhva%2F1PxdM8R1ljTTh8XQzoql0Kg86hkBTSSLg2TF9Rnn6p&X-Amz-Signature=8a0fb2224e8e7fcb520dc5891f5aa9cd787fd8097bffb44e5f2f9ba03a20c7f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKEKKZVL%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCGhsbIJVs0mG9q8gD0NrppiJzd8kEI71biU%2BME%2BOBzvQIgOVRyHS2mZq8tA%2Fh4ZQ330m%2F8BpB3qAd8x5pY78ycuOcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDAkFpQ62SIbjpiRPfyrcA1BX0ARGe%2FhQfpWWqA1ln9%2FLPUqVHlv4NI4JHU96a6IX0F6VlNS66Z0wfrSqLMcAHhBs%2BDoKDFkgIC%2F5bAFC56VM7YomC4GIwVM4GPiMZcMkh5WxDcOQbqPDccJjjuk5eMHN7xlh%2BlolF1pOEKf0S4wvUvBSGpWClxM3VrejczrRolxZsU3d7QMVReV8xc7AmjV1iz7na9NtVxkua9gZO%2BgUsCfaT3foR1vo1YBMYC2ur0dMBWXpeWyj5KZtaP%2B0Hk%2BQZPiNTj8Z5yV4OiiE%2Fy%2Bwe1KMSM0gzt%2F%2BWdK%2BdhWA%2FdNGbO0b%2BE4i2ZrPDDO%2BB8tKUBT0o3hqeysDfjjOF62ak4OylqOlEV3vjTvVUvxZ7X85qRn6WQAU91lK%2BObuhfpAmfnnAdHtqLlyB3yXc3KTAiSwN99ooYuFKHuF651bsM9uK5TtJzEWCmglAbj3a3k1TrvdNQyTn7tpl%2B8a%2FTGKdnvk0LF9jtlCsV1YMbc3NwlYOTHskXE%2FX8ahqDWKRam2ePcqmsGl18als6WcClBs6FmpNn2EjssUQ7Q3Fgswba0luqmq6G1Je4AYdwS5ZjbIyDoYBuyj1jVT878wgVT87EKY%2BQQ4fjSal606IjIb%2F1%2FYwpCXzVPKRHrCMLTAxMQGOqUBhqrQiWAjZ1t7MAcvHOjEpWRChz3SbRSG228bpYCSvgsiWNyN9iEuhSU6gI1s9QGX6rjsMwdKAGw7%2FMpmjZSwbFvZFx1O6ANaMoFXOiFCHziLCaSrwupfWGnDLe%2FVy5Ef4k6zfZyXLVP5vngVsYnUHJnHwYn1baU9dw4NmCYKInw209aEX%2BQurynq8%2B5egghxHfkg%2BMgn3mOmCoPaxSnq9wHmmphD&X-Amz-Signature=e0b7f91c0b7776c4effee7f7b760ebb6cb7af91c63d62839fa4b7770be820b3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4SHSAHG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDnnhKOLb6jCnAyBxxaJzavfDr%2BmnWuULz9bJDf%2FEFAlAIgT64KQqj%2B3CXzzj2t58eAU4oGtQYSqAGExR52%2FnNvmS4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIr2LMfGi5yGqfmuwCrcA%2FVqVkItaILnh1f5DLam%2B4eADcmjfMDJNlSG0DkXLNWmGLfOpX%2BhswxT2sdsORQBfTsWiOcwt6pafpZlWKNYSafxd8zWCQQmmZwTZjmgv2iBbFgpItJGLzWbolMg5ULPYOae0XeAGsLEEidFjjGfadpiuUskXn5BZsFv3uYkrRYwNzN2Ps9OCGoFxXPqNtkoZT1g7YC7LOflfV4CaMuxVxnlZwmIQ89XA2sCvN2JvbrxW3sppedYvUrIUDM%2B0Qd8V3czKCYd52E83AJc0vIMKNA4pcVzLRKQUAyi6ciuKOhC4UGBeuwYXoolmWP5NzyY%2FK2TWd2ia7Rml2QMYXdpUQCZVWCQUTg0OhwKQayfJQBtwUXCu%2F57oaqI%2FSOaFbGQHBHo0HI6B88chqr4nL9qNusl%2BuebTfu0syG3GTpaf6Cga4PTdrQyq9mYfNRS%2BLw%2BOuk%2FjnVoL%2FX%2BWNVl%2BuX4BYK2yatbAvRKkQIfiLEZU9vnW9OAlAth5MO202P%2B8T79P7PEFAK7jjlYdbayvJY4xIL1zAVFuPsPhCkoAHSePkAyLsg0fCsInXg3SBlrtQrwgZvItLyP6UpCOizOi26hwiOpSkRMpp9cMGJZ7RZ0W%2BkMohdwd%2Fa8cSza53rNMIbBxMQGOqUBZBlWSPOd9zDnpxPKJZuMij%2B5BDBqJQ3rbwrMqOA7GC0O1KqOxeehu02q4KtT8Fg%2B12CIxRRQgltqSi5sqQ6iUF5ZOhqIgB749cK%2FsXbziZ%2B8Ka87c0JlSlag2Wd0xMphOSmwO4%2FSvl8bCr%2FgjMHrpPQaZzrQLPuBOA%2BUlMdzAuj2zMFLy%2Ff2o13jgTmOtP9JKrx5L5SWFr1YMORpKQ63B1L8qWsy&X-Amz-Signature=dfe7b339072e56d0ddb8f03fd7f8c09f30cf538168fb0504e90886893fe24ecf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIQZBWVE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDcNi95J8vZ2FnmVqDNl6Wbt%2Fy2rHeKRn9V2VZ2k%2FgULQIgJTG56cuPeBi9cF%2F9gAYB6kPYwnWFMWtruo2DGbNpyWAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFiWBOXc9f6Gtp2YrSrcAytpX4rfDI2SmSXjaplr13sEQdCSJ0EyjT%2BCrQi2TM%2Bk79VcrGAbnM4flBxb4sBzp6Ku8WYmLw8F5kznFJAd1yP3H6jE9FNiTxuKFv%2BHFSbvS%2BpXhxdsViMKf5Db1SJgOLZqK%2BefrwZfQ4P7iz4bE5aqRV%2F%2BA0sdUNYiu49GZ3VUjAfXUO8sllqCz2ECwJUUKahFbpzY89Uv3UZTo77Pdyq91oxbLr3ivv4LnpvGuvhLKGp6Zz03cInLQmYa7kUpCw%2Bno0p9N4JEztTjFgtmWLZur978sMI8kpx885GqUojphDRy2mV5I4xEqR8UzCSFbZmws1CQcv8MhVoIfWoiBdmoiicBiV2bqvu%2FJdDjmy4tjhufIIwF6gUuNzrgb55IJ6S8RYTr%2BLDvByb4bTRv53Wepgp4dlRhJFIK94UDJMSyJEkp1aa7gJDhxmxaXlEmENZi9ifB5K73ZYHVQN54F4tJ3oSI0Xn4P4%2Fs54SKaU0TdFwwfHUbEM6I2ZM5jVDi5PdhTUPr5p1LHMB3sM2F5cFocXEf5o8e4wFfdoxVqEXhkPsXCkrfgG5KR5njngHdyryKm7u9H8al0Y7Dlns6R4rPznjONVyKiKUhCcSQKS1RaW%2FbHdUcz3I8b9XuMJfBxMQGOqUBQJIMYzv8MTj2fXNMc8%2BKzPk0XdZyqmLbG94D9RVXhiQBglPeAWtjHNasQkc%2BB4lkl%2FTN9FHlv8rpgAOaLn2yuL3cniQUGfqxBTmMItHavRhloa2FhE78C7WkElT4cLQfzU7XCPTB1L5zXVirteexN1aD6EvsSR%2FHgYLF7hgx71aJi%2Fhva%2F1PxdM8R1ljTTh8XQzoql0Kg86hkBTSSLg2TF9Rnn6p&X-Amz-Signature=9dbed7fbba1bef6cd0f6d60271a9b677d59cd3941c3b40e9689dc176986a1a37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
