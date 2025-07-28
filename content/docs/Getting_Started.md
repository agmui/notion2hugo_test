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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NGFSG6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFvxHy2HLLSCA1Rup%2FbtZemPBSIi5VbbEZU3si1pbloBAiEA%2B%2BmR1R1ktBUnwZFFegpQhIMXl9vATK2lstPOxbE%2F5tUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXpiMuyeI%2FDg7DocSrcA90kC2CVv5ozura6AMnHxV2j8dp2pbp%2FZ6%2FT3tNtxvOmJern92MUxAgqyVWc2OcX65U2sci00VAg5cj8KWgBYXJSYZd9RryOVYzhoHkoHvnnVEHdHCGoa44QEIgonDSGRyhfeKmwa8S9eU6W2%2FiPhoS6FKbn3EwUV78miRo%2BlfbNFInIhJX%2B5tEMMyKjUTceithkiY2HkPEWziiEuJDr8KCfh%2BEdc8PwOx7sfVfHuSEwC%2BQONcwR6MzsGLrWdTRuct4H6h0yjQqucoa3UYSNZpGik7LyZCBxlSfUgESLdOborLLgw0c5PmbftXUQ9w3loVTT2eOSiP82cK198NOWjSPzdJPzrmjHVFozA%2BTICQgzL5hHNIuW70FlposYi4ZBstPMoV4qDj75odzG2sIonBDnYePOe6iinuzbMOlDORxS%2F2e17eNmOjBdarMv8bodDqeTIjwrCVA7bDhd2k4c8bMY9JidynsxgqeCFfnzk3Bx6wvx7FLrHQGtiuLoKoOKvU608kgKSf0ZrDSw20fqdgsEsxMeaOW8uaa7R0yuUeQVbTr8WsBYGU7Kyxl55FiKVopWbX6UXo3WjpC8M%2Fj1GXsyfoSkkwt0LkdTMa5SaIG561vxTV%2FLYYoB%2FCHnMPzumsQGOqUBTTZSLOMVSkk%2B8nifmfXR%2BgHpO0I3%2Biwnfz2RFBiqi2EExaG1X3SmiTnwNUs4JW4mVaKXmXfLJTlB2FIUzQAXzZVhWP9Py6zhIcjaoBedIpqfKEf5LbAU1SiJikV%2BdFEGJ0qZE%2Fg0FfMQFjswmur6z6tWTcAsUFj%2BipIUKI6p027VcZEDHk8rjRm4f4zC9eBKVQMMalt69k%2FCGWd7J4he0SqhnbCV&X-Amz-Signature=c8ebd354d2911e1cb50a87b0c2bae075e4a964737c3a4fe97941bf9ee17a79ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NGFSG6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFvxHy2HLLSCA1Rup%2FbtZemPBSIi5VbbEZU3si1pbloBAiEA%2B%2BmR1R1ktBUnwZFFegpQhIMXl9vATK2lstPOxbE%2F5tUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXpiMuyeI%2FDg7DocSrcA90kC2CVv5ozura6AMnHxV2j8dp2pbp%2FZ6%2FT3tNtxvOmJern92MUxAgqyVWc2OcX65U2sci00VAg5cj8KWgBYXJSYZd9RryOVYzhoHkoHvnnVEHdHCGoa44QEIgonDSGRyhfeKmwa8S9eU6W2%2FiPhoS6FKbn3EwUV78miRo%2BlfbNFInIhJX%2B5tEMMyKjUTceithkiY2HkPEWziiEuJDr8KCfh%2BEdc8PwOx7sfVfHuSEwC%2BQONcwR6MzsGLrWdTRuct4H6h0yjQqucoa3UYSNZpGik7LyZCBxlSfUgESLdOborLLgw0c5PmbftXUQ9w3loVTT2eOSiP82cK198NOWjSPzdJPzrmjHVFozA%2BTICQgzL5hHNIuW70FlposYi4ZBstPMoV4qDj75odzG2sIonBDnYePOe6iinuzbMOlDORxS%2F2e17eNmOjBdarMv8bodDqeTIjwrCVA7bDhd2k4c8bMY9JidynsxgqeCFfnzk3Bx6wvx7FLrHQGtiuLoKoOKvU608kgKSf0ZrDSw20fqdgsEsxMeaOW8uaa7R0yuUeQVbTr8WsBYGU7Kyxl55FiKVopWbX6UXo3WjpC8M%2Fj1GXsyfoSkkwt0LkdTMa5SaIG561vxTV%2FLYYoB%2FCHnMPzumsQGOqUBTTZSLOMVSkk%2B8nifmfXR%2BgHpO0I3%2Biwnfz2RFBiqi2EExaG1X3SmiTnwNUs4JW4mVaKXmXfLJTlB2FIUzQAXzZVhWP9Py6zhIcjaoBedIpqfKEf5LbAU1SiJikV%2BdFEGJ0qZE%2Fg0FfMQFjswmur6z6tWTcAsUFj%2BipIUKI6p027VcZEDHk8rjRm4f4zC9eBKVQMMalt69k%2FCGWd7J4he0SqhnbCV&X-Amz-Signature=2f9beaf846127e517112a65d5a5b71ee7726c4725198bdcdc78685cb3edf07de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NGFSG6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFvxHy2HLLSCA1Rup%2FbtZemPBSIi5VbbEZU3si1pbloBAiEA%2B%2BmR1R1ktBUnwZFFegpQhIMXl9vATK2lstPOxbE%2F5tUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXpiMuyeI%2FDg7DocSrcA90kC2CVv5ozura6AMnHxV2j8dp2pbp%2FZ6%2FT3tNtxvOmJern92MUxAgqyVWc2OcX65U2sci00VAg5cj8KWgBYXJSYZd9RryOVYzhoHkoHvnnVEHdHCGoa44QEIgonDSGRyhfeKmwa8S9eU6W2%2FiPhoS6FKbn3EwUV78miRo%2BlfbNFInIhJX%2B5tEMMyKjUTceithkiY2HkPEWziiEuJDr8KCfh%2BEdc8PwOx7sfVfHuSEwC%2BQONcwR6MzsGLrWdTRuct4H6h0yjQqucoa3UYSNZpGik7LyZCBxlSfUgESLdOborLLgw0c5PmbftXUQ9w3loVTT2eOSiP82cK198NOWjSPzdJPzrmjHVFozA%2BTICQgzL5hHNIuW70FlposYi4ZBstPMoV4qDj75odzG2sIonBDnYePOe6iinuzbMOlDORxS%2F2e17eNmOjBdarMv8bodDqeTIjwrCVA7bDhd2k4c8bMY9JidynsxgqeCFfnzk3Bx6wvx7FLrHQGtiuLoKoOKvU608kgKSf0ZrDSw20fqdgsEsxMeaOW8uaa7R0yuUeQVbTr8WsBYGU7Kyxl55FiKVopWbX6UXo3WjpC8M%2Fj1GXsyfoSkkwt0LkdTMa5SaIG561vxTV%2FLYYoB%2FCHnMPzumsQGOqUBTTZSLOMVSkk%2B8nifmfXR%2BgHpO0I3%2Biwnfz2RFBiqi2EExaG1X3SmiTnwNUs4JW4mVaKXmXfLJTlB2FIUzQAXzZVhWP9Py6zhIcjaoBedIpqfKEf5LbAU1SiJikV%2BdFEGJ0qZE%2Fg0FfMQFjswmur6z6tWTcAsUFj%2BipIUKI6p027VcZEDHk8rjRm4f4zC9eBKVQMMalt69k%2FCGWd7J4he0SqhnbCV&X-Amz-Signature=0db18ab26362bc773eea6e678a88b055438e7a8bdda356ca2eedd1e29b188f42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MKV2RJI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBppTIV3rPpRBpKWG1Nujrw2k7xsiCImXxaJ2737QJwuAiAlTeVirXUK7%2FU%2Fo8cdcvYzM7Mil%2BOHyAoLjYcC%2BGKPNSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrsMPpHQYrYcbF3NKKtwD9z%2B%2FoR2geg5wrgFgmLZbcqUSAND7zJufasdxNojpzQGLJmtjH686FguaXRT1gzsDrStOuR9lXRhGOyGjslshLllvtPs5k%2FCiBBiPaFHqW%2BNkp3OLSwX9%2FgjFhH4Wrz1CasnIRHT0SP%2FRQCAwuwInrK7b%2FKEPPIfMzle1O6PB3qG6%2FcVojAfjLiZMizwb6gdZ1WYS8hiz8yxgU8JfOR%2FijXQd8ff8kxXOylA1yj2P57jdgG7JevXV55ozFiBHKVES4XIEJcK7ZPA5Z593pYHHkW62IRSozlvDVotPQWbeAF79TS%2FRIaiPKJdtEkL6AmGxcLdox%2F6e8Qr4o8%2Bg3PN3FvYuWaKJYIkHz1I4X5KKbmH6qKo6V1C1%2FYVJnh21fJfHQKHOorQ4idF8BViveXUL2YXui0XQoe1YZSL5DdUwlJ8NOvS46BiKQ0m15EwCk1e8lset6PivpzOGOYxAYWsuOJmZ%2FwpQMHuTnlYRPcvuJhqQvXFWBSnqbQWlA45E46T%2BERpvRHVBmij2S4c3ZJuxmGz4mGV8Z48bPMzKz2Uvz1WZzsFaxsD%2BuQro3xbxfRDoPls9cnt%2F0AVIMxrVAUzYAo9LAi9IF%2B7%2FIFM%2BoSS%2BjxoHQ1gF5Du5oKSmkiUw6u6axAY6pgGvtvgukT3BY3REQt7R0l04Z24lhFAxZ7ZeaCQZ1OIogGU%2F%2FCZZJ%2F6N5epN61%2FkAbM4IBZ2xGWbp9GXNsetZJhWUC84Wu%2FVKrQaHDsrtjcBsWX4EmHyuENYkuGKYIOtU4ZaPs5vhyK66zynPUW4ByY9XDu5RH1ZslbL4f9RUyjqODbyOpB8XLQLKSXbNtFi0Va%2Fw6tqTbpgCVYddmVPEyeTdfrIKZ8c&X-Amz-Signature=e14683c7a50b950769e97b910132d49639fc9ade7a4573dc6f4324f4c4b23f9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SEB6WRZ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDi4S4Izb8QM35L3vFB5voOH2um7swUidBUAnCDB5ee1gIgTLYrZwKOLpXvr8XQw76rtzqEPzEAxPJ9fF89lmFe8vEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2BWpNlFGPtDTITw8ircA2hcxAlQf1PliN95mZt1RfMJj4ExbmGWNQ8Fzvwc9LNmAy0l33UHSajcGP1zmm9w5YWqefLKTxQQYc2CDbw%2BgGW%2BXxMtOk%2F2zl9essZZjD2KoK4zKJvsOOQg9fSGUxlZ2ffmhMa25soOM5GuyabWlgO1Xg5vGwSnlPnSrCFfYO7L23PKPQn1ryQCzzeouEB5yj91U6XlJIimOhw2EakDyjoZhRupYNn%2BU4tIR8y%2BnZvpsg5vdbIaHfFKxZgVd2N1phT471TbD%2B8QawASJLDH1kqkQnKX3eqb8cGg8CY5cfyA7gI5lSSf5EQvXFu1KOACRzzZSOfvHvOrTqTxdAYKsLhA%2FInQDfTJT88V5OabsiT34P%2FfkfM6J1d%2FpsjFSqtsHL1m58zn8neH%2FLa%2Bq%2BFFHAMnBprP9HNV6U%2FVODB44Bot%2Bkv%2BKX1FM8DTTXPb18b7Tb0JB%2B4LIJbNyy7XEbBwaWFB3TuST5gzMWR0X%2BHorbd6iRw%2FNVdt0YrKjinwS6yq9gdD1T3kHSQ53wZxa6Yk4sEiTTp7%2BnYP6OTdEPuqecFhoYhSzzSmc14jzjh8ouyEzrCl0oZElMZY9g%2FPzdgObN57lzVVWzp4iEoVeouSVdZ1u9VExQMtS4jpKppaMN3umsQGOqUBg4oHa%2FvHPGFxq%2FvIIK4%2F52zfF%2FAeSvjLOye7WxBR6qU7NCRImIJVUKF%2BRKVt%2FcwTJXM42gAZ%2F9ksDka3hvKLqAgDyG%2F%2BeFuW3kVCYIW1EwRSzomDilgEWEQKKvegxI00YL%2FmDTw2CIrqcdKI0vgwasPrRCWNDjgIzVDx3R%2B5jeOHEVQ8YKxg5YDdCnTJgnXw6Z8sqBaQB4CkAbWz9cjN8ihzJY5q&X-Amz-Signature=eab3ba28b1051c8d1d34c0b01d0ff85d7dc5f8d10219cd0589a095ab94ccbc78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NGFSG6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFvxHy2HLLSCA1Rup%2FbtZemPBSIi5VbbEZU3si1pbloBAiEA%2B%2BmR1R1ktBUnwZFFegpQhIMXl9vATK2lstPOxbE%2F5tUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXpiMuyeI%2FDg7DocSrcA90kC2CVv5ozura6AMnHxV2j8dp2pbp%2FZ6%2FT3tNtxvOmJern92MUxAgqyVWc2OcX65U2sci00VAg5cj8KWgBYXJSYZd9RryOVYzhoHkoHvnnVEHdHCGoa44QEIgonDSGRyhfeKmwa8S9eU6W2%2FiPhoS6FKbn3EwUV78miRo%2BlfbNFInIhJX%2B5tEMMyKjUTceithkiY2HkPEWziiEuJDr8KCfh%2BEdc8PwOx7sfVfHuSEwC%2BQONcwR6MzsGLrWdTRuct4H6h0yjQqucoa3UYSNZpGik7LyZCBxlSfUgESLdOborLLgw0c5PmbftXUQ9w3loVTT2eOSiP82cK198NOWjSPzdJPzrmjHVFozA%2BTICQgzL5hHNIuW70FlposYi4ZBstPMoV4qDj75odzG2sIonBDnYePOe6iinuzbMOlDORxS%2F2e17eNmOjBdarMv8bodDqeTIjwrCVA7bDhd2k4c8bMY9JidynsxgqeCFfnzk3Bx6wvx7FLrHQGtiuLoKoOKvU608kgKSf0ZrDSw20fqdgsEsxMeaOW8uaa7R0yuUeQVbTr8WsBYGU7Kyxl55FiKVopWbX6UXo3WjpC8M%2Fj1GXsyfoSkkwt0LkdTMa5SaIG561vxTV%2FLYYoB%2FCHnMPzumsQGOqUBTTZSLOMVSkk%2B8nifmfXR%2BgHpO0I3%2Biwnfz2RFBiqi2EExaG1X3SmiTnwNUs4JW4mVaKXmXfLJTlB2FIUzQAXzZVhWP9Py6zhIcjaoBedIpqfKEf5LbAU1SiJikV%2BdFEGJ0qZE%2Fg0FfMQFjswmur6z6tWTcAsUFj%2BipIUKI6p027VcZEDHk8rjRm4f4zC9eBKVQMMalt69k%2FCGWd7J4he0SqhnbCV&X-Amz-Signature=837e019d4f85e0f5ec8c062ccc1cf83726604ffb353810ce5cf3e9aa9d99392f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
