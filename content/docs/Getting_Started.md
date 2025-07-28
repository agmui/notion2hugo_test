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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2LWY2QY%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCID1RP3pe%2Fg2g6llYVh6rtU8XSkoASeVaPmwdQy8Z1qOCAiEAk0UboOYezqsHyEi0lb4RgqY75TOKFowX8wxZghS9WREqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPf4ehbacB0hDJ9OCrcAx1vnqft4OOFnXx3xpsSHno0wIsLxE4fbq%2FWUKK%2FCPdS6KyXfFnLkrOk80Y649SmubznrADQXdx0hnfM3RsJVaopvvbM%2F6j9wPpRTCatQXfsN02tQCdjjhH6CqdOZ04fZ2pyj9Tna7DpH%2BmhetksoEOJf%2B8yrqeBCMQJGCKBoR9vayvDLOcaOkXrxsSqX1Wq88ddoQXgApgMS7%2BfMNvtMQLKY9%2Fkosq25tcmjtdtQim3a%2BTjkgkialHmlHiQM9rSMKUErr3NILLCCpS4XMpjbwzSlxLYo7s6HPMOEJs6tjskjyhF5lbZhay%2FXVT6FLL%2B3OahejGTt1%2B19%2B0ZU%2BrGCHRoC5ti3UmztUk6LHYCzcJlujDnC%2FW%2FjLXiG7fxI6S8cRQgCF0ZqCoyFLL8pSpxsLK2RdBXpdhOFuy34znl8Dk%2BPleSE6v%2FLnGUGAM4QxEZ0nyIJ%2FgTqgbJd5iJsNKU6cH8i24myiItxtbCj7koq7qC2pd3L1ZEj%2BEBkpnOMpJCxOgk0%2FbU5SrM1vyrLVvVcISEETdO2PBIM8Zj%2FgHzjdp1RhoD46uX%2Bg3rjnm3KrQxI%2F1%2BbJSbYZGkmEPXuJDrDNOEKBCC9aeB1aAXlKYNvp8xYBW7NdylluMjx7WIMKqKn8QGOqUB8QTLFQyqsMvU9cjOcgGfmykkmSdB0XOW2%2Fh2UnAUMKLr6nT2MgoshkOMzYjuY18exSh7Y6dKe4Cl5q0rpKbwGjSc1luNgiYf8xDj8BjoK8%2FzrVRhAV%2FCZ7VrVzAatvNpqbeCQfXmacjzRzvBSgapU9M8lt6%2Bce5vbvjCzQH92HVJ1WHuPTclRVZgVHMmjPrJauZTuXdSVAoIK0mFNMRKFkgvPJvw&X-Amz-Signature=554ae7c3f32060da8aba505d0b5f57ff9b23d03218b0b02993b5a42957864542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2LWY2QY%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCID1RP3pe%2Fg2g6llYVh6rtU8XSkoASeVaPmwdQy8Z1qOCAiEAk0UboOYezqsHyEi0lb4RgqY75TOKFowX8wxZghS9WREqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPf4ehbacB0hDJ9OCrcAx1vnqft4OOFnXx3xpsSHno0wIsLxE4fbq%2FWUKK%2FCPdS6KyXfFnLkrOk80Y649SmubznrADQXdx0hnfM3RsJVaopvvbM%2F6j9wPpRTCatQXfsN02tQCdjjhH6CqdOZ04fZ2pyj9Tna7DpH%2BmhetksoEOJf%2B8yrqeBCMQJGCKBoR9vayvDLOcaOkXrxsSqX1Wq88ddoQXgApgMS7%2BfMNvtMQLKY9%2Fkosq25tcmjtdtQim3a%2BTjkgkialHmlHiQM9rSMKUErr3NILLCCpS4XMpjbwzSlxLYo7s6HPMOEJs6tjskjyhF5lbZhay%2FXVT6FLL%2B3OahejGTt1%2B19%2B0ZU%2BrGCHRoC5ti3UmztUk6LHYCzcJlujDnC%2FW%2FjLXiG7fxI6S8cRQgCF0ZqCoyFLL8pSpxsLK2RdBXpdhOFuy34znl8Dk%2BPleSE6v%2FLnGUGAM4QxEZ0nyIJ%2FgTqgbJd5iJsNKU6cH8i24myiItxtbCj7koq7qC2pd3L1ZEj%2BEBkpnOMpJCxOgk0%2FbU5SrM1vyrLVvVcISEETdO2PBIM8Zj%2FgHzjdp1RhoD46uX%2Bg3rjnm3KrQxI%2F1%2BbJSbYZGkmEPXuJDrDNOEKBCC9aeB1aAXlKYNvp8xYBW7NdylluMjx7WIMKqKn8QGOqUB8QTLFQyqsMvU9cjOcgGfmykkmSdB0XOW2%2Fh2UnAUMKLr6nT2MgoshkOMzYjuY18exSh7Y6dKe4Cl5q0rpKbwGjSc1luNgiYf8xDj8BjoK8%2FzrVRhAV%2FCZ7VrVzAatvNpqbeCQfXmacjzRzvBSgapU9M8lt6%2Bce5vbvjCzQH92HVJ1WHuPTclRVZgVHMmjPrJauZTuXdSVAoIK0mFNMRKFkgvPJvw&X-Amz-Signature=c32ff3a9efe65e0a91c2ea4d42ad0dcf0e96c488dc03603a2f2d21a6b732318b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2LWY2QY%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCID1RP3pe%2Fg2g6llYVh6rtU8XSkoASeVaPmwdQy8Z1qOCAiEAk0UboOYezqsHyEi0lb4RgqY75TOKFowX8wxZghS9WREqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPf4ehbacB0hDJ9OCrcAx1vnqft4OOFnXx3xpsSHno0wIsLxE4fbq%2FWUKK%2FCPdS6KyXfFnLkrOk80Y649SmubznrADQXdx0hnfM3RsJVaopvvbM%2F6j9wPpRTCatQXfsN02tQCdjjhH6CqdOZ04fZ2pyj9Tna7DpH%2BmhetksoEOJf%2B8yrqeBCMQJGCKBoR9vayvDLOcaOkXrxsSqX1Wq88ddoQXgApgMS7%2BfMNvtMQLKY9%2Fkosq25tcmjtdtQim3a%2BTjkgkialHmlHiQM9rSMKUErr3NILLCCpS4XMpjbwzSlxLYo7s6HPMOEJs6tjskjyhF5lbZhay%2FXVT6FLL%2B3OahejGTt1%2B19%2B0ZU%2BrGCHRoC5ti3UmztUk6LHYCzcJlujDnC%2FW%2FjLXiG7fxI6S8cRQgCF0ZqCoyFLL8pSpxsLK2RdBXpdhOFuy34znl8Dk%2BPleSE6v%2FLnGUGAM4QxEZ0nyIJ%2FgTqgbJd5iJsNKU6cH8i24myiItxtbCj7koq7qC2pd3L1ZEj%2BEBkpnOMpJCxOgk0%2FbU5SrM1vyrLVvVcISEETdO2PBIM8Zj%2FgHzjdp1RhoD46uX%2Bg3rjnm3KrQxI%2F1%2BbJSbYZGkmEPXuJDrDNOEKBCC9aeB1aAXlKYNvp8xYBW7NdylluMjx7WIMKqKn8QGOqUB8QTLFQyqsMvU9cjOcgGfmykkmSdB0XOW2%2Fh2UnAUMKLr6nT2MgoshkOMzYjuY18exSh7Y6dKe4Cl5q0rpKbwGjSc1luNgiYf8xDj8BjoK8%2FzrVRhAV%2FCZ7VrVzAatvNpqbeCQfXmacjzRzvBSgapU9M8lt6%2Bce5vbvjCzQH92HVJ1WHuPTclRVZgVHMmjPrJauZTuXdSVAoIK0mFNMRKFkgvPJvw&X-Amz-Signature=6e7b5e52d222d0cb2ea4c7824adb128ed2eadefb5b60365d04aee04ddc602d9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZTUMJTU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIDk2xv%2FaNkKGAK9GvvwR%2FYjjl1OwgItljes6SC%2BsPjy4AiBkh6LB6flYbeI%2BkwsUTangTcjIN3yCfhQ9B%2FuTQBIMViqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4TD30yJHIil0P%2BAKKtwDrZSnz37Ux4GHlL1Q25YovI7WMssIHtUKng3%2FbH3lU2lTKV5WYXbn5Y7Q3gyTCQCWzUOUofv5eK8VHrDhgqXy10mVcrhgNhoHP19KXWje%2BgJVpidP%2Bvbgx8cv8BWlF2FM1mvHeSm6Hzf27urhx1k%2FAtyf9WKeeLJxK%2FMkJxk41eUviBgI4PCbGgUujiVft3QWa5FVttJZNsYvDnkSkQzfErwOIQNu%2Bf6x%2Bh7DXgpamEFAXwTV2PJ%2FS2PiFlhnvdd%2FannyOLgOgUS2Ldq%2F9FOazb4q5oLGkW1ICUfS8mTq%2BDABaC%2BChYOAFwgowUfxw14qOHBjADUbareLdNaK4eRQIdgtNkd3KaL42ltAi4QvqBYfdVx9%2FmalIj0cY1gR1ndyQHl%2Bz3y%2BAFV%2FrRjgYLhjO1O1U2RmrKKXj6mWhX%2FT9Ohx2Jt1XpNnPIk1%2Bs3XU%2FH8F1L%2Fm%2BZnkKsslHp8R7iCJ%2BhOSC5vHFJE3HJMMZiGlquF%2FkNlpiyyPjSIyPZDlsSWHkmGGYoi%2FFAOJjUJn3LwG01O81lpefrJAwNpXcBEtoV%2FK7LZOFI%2BEn5QJ9jP6y3lRbrGsjE5sg1seDPIXzyz8Blm%2F1lsxudOVKOjE%2BVjwZnjuoOHFAhNljm0bxcw4oqfxAY6pgE5234aaFCLic2K%2Bjd%2BBQMQU4xvA7iW6TMXLPPprv0aoCA%2FEBgJHBpif8SAI%2BxCAzQVfi97KHjc2nWH8ya74dXG622JKHXdz6qViydJ7rKNfeXIcWprZ1RQmYZtrf4Yn0hm84MHpYdzos7tEkHuq90mXQ%2FyG5mO74RPbQViUVTcgalkWX66%2FTJt0eHV3BeaMIDZLuPLfrMFvirg22j5t8JaPDJs5DYm&X-Amz-Signature=00de43179514e577d6f41dee6931410ee59b9ac9d7bd334568ce9a9305e16dac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUGYSAZ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIDO1SzH%2F9sNv34a4BTe7594cGpG0QEpus9TYOo3NwBrtAiA1mP1ATFxa%2FTvlMWkRvDK01z2r5XZeIXeMZFjM4OtuVSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy76%2FbzJmHhtYAK69KtwDORxyhJ8EAiVOWwofnl2oEhFoUBy%2FOgNP8amoBJm3m9MI9lD690hCS%2BTrDLWyRRBbzPXabUjDhRHaaQOovqqhkdypOozAtL2TsIhqlZzob0BYclOhUdnCbAo0a%2BRZ62UtJJqoz1deA%2Bwjk8NfCtpKZBJ3PeCatD0vFZEo3Ldp%2FrEsGjH1QAsqNClnrIY6%2Fnnwk%2FzhGAfecNT3UJI5Vi1KIugn1vs2HvATfenX0upHLPfFilEk9ns1mHAi79mQHco8NFnrDeIEG%2FEDeskAplTLZeS7AwsctMdICXQAJE7BvVyRvBmpfE5v9vX47wgex46hVvPUmrfDVn5umA8KqyuzIB1aIc2LicopKGmAuAT5Zeu8OKaDEYm3H2wyeyaVtagJ59dkyes0IW%2BH0GZDnKfQ%2B65%2F8mUYO9gm8Qp2dMFlGMtoo7j%2BfJkCqvx6voePegkRidO%2BqLMvwASFnENxNYQXzAslZ237PDCNePBIGvwAfwQtBc5WWq5v%2F2zoBNpOTiTHAJL9HgC%2FVI1SR30u7HxloubofjbPoYJmsUdddV%2BCsV%2F7twOGsi%2FNmdGg5kNNiSBh3P8Z%2B9rCMQTsRb4mIzAwQWBiAZNE3siNvs5tbf46NMfLJZwiA2SgI4aQWtYw%2B4qfxAY6pgGbvTdBP91fNJBAbw5N4cTbOx5vVoTgDXU7cltjPXDaQbwbm0EgYtSI5WOBv8afXFJrhq1Yf3ghBqdn5D%2B0NVkrIzFNK6V7LQNs5%2BRX%2FhN%2FtAhUAqwGGcDpMyQcuuxlqbNkAyLRWpUsbBqNcbJ0tSCaSU8SeeQxzWijm8wtryue3jDeqdYlSuyiflTe93EtHU3ozJK6aoCq2GGu79jmt8OE7mh4tFr7&X-Amz-Signature=f1a229425dee6b18faa168af957c171f7618253555fcb1474eaecc06052b4676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2LWY2QY%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCID1RP3pe%2Fg2g6llYVh6rtU8XSkoASeVaPmwdQy8Z1qOCAiEAk0UboOYezqsHyEi0lb4RgqY75TOKFowX8wxZghS9WREqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPf4ehbacB0hDJ9OCrcAx1vnqft4OOFnXx3xpsSHno0wIsLxE4fbq%2FWUKK%2FCPdS6KyXfFnLkrOk80Y649SmubznrADQXdx0hnfM3RsJVaopvvbM%2F6j9wPpRTCatQXfsN02tQCdjjhH6CqdOZ04fZ2pyj9Tna7DpH%2BmhetksoEOJf%2B8yrqeBCMQJGCKBoR9vayvDLOcaOkXrxsSqX1Wq88ddoQXgApgMS7%2BfMNvtMQLKY9%2Fkosq25tcmjtdtQim3a%2BTjkgkialHmlHiQM9rSMKUErr3NILLCCpS4XMpjbwzSlxLYo7s6HPMOEJs6tjskjyhF5lbZhay%2FXVT6FLL%2B3OahejGTt1%2B19%2B0ZU%2BrGCHRoC5ti3UmztUk6LHYCzcJlujDnC%2FW%2FjLXiG7fxI6S8cRQgCF0ZqCoyFLL8pSpxsLK2RdBXpdhOFuy34znl8Dk%2BPleSE6v%2FLnGUGAM4QxEZ0nyIJ%2FgTqgbJd5iJsNKU6cH8i24myiItxtbCj7koq7qC2pd3L1ZEj%2BEBkpnOMpJCxOgk0%2FbU5SrM1vyrLVvVcISEETdO2PBIM8Zj%2FgHzjdp1RhoD46uX%2Bg3rjnm3KrQxI%2F1%2BbJSbYZGkmEPXuJDrDNOEKBCC9aeB1aAXlKYNvp8xYBW7NdylluMjx7WIMKqKn8QGOqUB8QTLFQyqsMvU9cjOcgGfmykkmSdB0XOW2%2Fh2UnAUMKLr6nT2MgoshkOMzYjuY18exSh7Y6dKe4Cl5q0rpKbwGjSc1luNgiYf8xDj8BjoK8%2FzrVRhAV%2FCZ7VrVzAatvNpqbeCQfXmacjzRzvBSgapU9M8lt6%2Bce5vbvjCzQH92HVJ1WHuPTclRVZgVHMmjPrJauZTuXdSVAoIK0mFNMRKFkgvPJvw&X-Amz-Signature=57c7ed54e2bdeeb2eb94d3ef2f203ed79f3457ac548c00477983e774b86b3743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
