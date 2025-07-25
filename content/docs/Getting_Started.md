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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO4VQAPQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBo4L55P1KDGKLUecVuT90KO7vBI7fouTBqxnln4DDrMAiA4XBk7wkqC4V0tqVxFAarj3oK3sKBH0NSv064okybMcSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIME4Nf5GPTiTEcNWXYKtwDOzyXXE48UQUG4Gb6r%2Fg5nlyarDnOv%2FZ%2BzH3QVTzG9fUgh4eawqnryepQk8C25xbxAPVXb0C2oNKhjeXqisNjmmp2FINDNFWlVINvGvlAPWEBwtfFOGo40vr4QB3qwy43YOH9wlI8Q2%2BW4NOa930jx%2FZ6WDPnDY%2BgzQQDkpw9tExkWtE6G%2FWEG4lvp77ykDH3fNbyi8rbVvbLc3Q0C8PklEXvtIbCsgC8dlaSQjsFgjovfGD%2FemhEW6iQanZtMr8tNajX2AXeVVBgQcINrsbvkXCeCOn%2FH45Jx3D%2B7FQm%2BT9jnXNbkzCiMlDGpvx%2FDd2QHehuSIUBb%2BFLcBcuXBIqIF7KmXtV%2F27lZHt3rl6vAHksF2DjKCwJ5TBjbDlCbsGAwdFV3cN2RZW7mBNzJI%2B26eRyr1CodY2SEhDyvUgEFsotx7r8Nl%2FX56t7ZQ93Y%2F8xdkhU5ZpaNNcJfWfpKHebmr%2BUU%2Fo9SR1VE36NGl6NaHOzsmE1rhGQCTbAApBWBu1wIHRTzG5ZURT%2FSHrGqKlgSoCwbPVoFKmD6kJYzjjSL92omsp9zssQtpQm%2Bda2UaCceUDNfLDW%2BOk8PhQ%2BPq0nv%2BgN%2BhPW8cqCQ17VPEjRFAOqoEqyOr8MrJQPIecwvLyOxAY6pgFypZYeo3arpiFvct%2BJ%2BUgW7O7sdDvDxz24%2F07btHJLh0ly%2Fj%2FAjAhTtLAA9SsVgak1lotg4xsO83rBHiMBkBr203oemeh4JZ%2BmApAbUTF7E4ZxTTQfpdEcx6GzMDvnXrRrA1n%2BakdWIzXB0el%2F5p8vTBlEwEIYDmJu5sU2e%2FtVm5zH946wAkaRIGSxIbeN1gQWlQD7ujDRVx7wFjiJN709XIAZl5UG&X-Amz-Signature=d4c6353f59d980ba3e0222b81493dee6f8449dc195b252a67d6b9f33cdb21eec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO4VQAPQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBo4L55P1KDGKLUecVuT90KO7vBI7fouTBqxnln4DDrMAiA4XBk7wkqC4V0tqVxFAarj3oK3sKBH0NSv064okybMcSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIME4Nf5GPTiTEcNWXYKtwDOzyXXE48UQUG4Gb6r%2Fg5nlyarDnOv%2FZ%2BzH3QVTzG9fUgh4eawqnryepQk8C25xbxAPVXb0C2oNKhjeXqisNjmmp2FINDNFWlVINvGvlAPWEBwtfFOGo40vr4QB3qwy43YOH9wlI8Q2%2BW4NOa930jx%2FZ6WDPnDY%2BgzQQDkpw9tExkWtE6G%2FWEG4lvp77ykDH3fNbyi8rbVvbLc3Q0C8PklEXvtIbCsgC8dlaSQjsFgjovfGD%2FemhEW6iQanZtMr8tNajX2AXeVVBgQcINrsbvkXCeCOn%2FH45Jx3D%2B7FQm%2BT9jnXNbkzCiMlDGpvx%2FDd2QHehuSIUBb%2BFLcBcuXBIqIF7KmXtV%2F27lZHt3rl6vAHksF2DjKCwJ5TBjbDlCbsGAwdFV3cN2RZW7mBNzJI%2B26eRyr1CodY2SEhDyvUgEFsotx7r8Nl%2FX56t7ZQ93Y%2F8xdkhU5ZpaNNcJfWfpKHebmr%2BUU%2Fo9SR1VE36NGl6NaHOzsmE1rhGQCTbAApBWBu1wIHRTzG5ZURT%2FSHrGqKlgSoCwbPVoFKmD6kJYzjjSL92omsp9zssQtpQm%2Bda2UaCceUDNfLDW%2BOk8PhQ%2BPq0nv%2BgN%2BhPW8cqCQ17VPEjRFAOqoEqyOr8MrJQPIecwvLyOxAY6pgFypZYeo3arpiFvct%2BJ%2BUgW7O7sdDvDxz24%2F07btHJLh0ly%2Fj%2FAjAhTtLAA9SsVgak1lotg4xsO83rBHiMBkBr203oemeh4JZ%2BmApAbUTF7E4ZxTTQfpdEcx6GzMDvnXrRrA1n%2BakdWIzXB0el%2F5p8vTBlEwEIYDmJu5sU2e%2FtVm5zH946wAkaRIGSxIbeN1gQWlQD7ujDRVx7wFjiJN709XIAZl5UG&X-Amz-Signature=8100da7555c1d660419e04194e667e5bd2d573303b105a55ed2c3a53688cdb13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO4VQAPQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBo4L55P1KDGKLUecVuT90KO7vBI7fouTBqxnln4DDrMAiA4XBk7wkqC4V0tqVxFAarj3oK3sKBH0NSv064okybMcSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIME4Nf5GPTiTEcNWXYKtwDOzyXXE48UQUG4Gb6r%2Fg5nlyarDnOv%2FZ%2BzH3QVTzG9fUgh4eawqnryepQk8C25xbxAPVXb0C2oNKhjeXqisNjmmp2FINDNFWlVINvGvlAPWEBwtfFOGo40vr4QB3qwy43YOH9wlI8Q2%2BW4NOa930jx%2FZ6WDPnDY%2BgzQQDkpw9tExkWtE6G%2FWEG4lvp77ykDH3fNbyi8rbVvbLc3Q0C8PklEXvtIbCsgC8dlaSQjsFgjovfGD%2FemhEW6iQanZtMr8tNajX2AXeVVBgQcINrsbvkXCeCOn%2FH45Jx3D%2B7FQm%2BT9jnXNbkzCiMlDGpvx%2FDd2QHehuSIUBb%2BFLcBcuXBIqIF7KmXtV%2F27lZHt3rl6vAHksF2DjKCwJ5TBjbDlCbsGAwdFV3cN2RZW7mBNzJI%2B26eRyr1CodY2SEhDyvUgEFsotx7r8Nl%2FX56t7ZQ93Y%2F8xdkhU5ZpaNNcJfWfpKHebmr%2BUU%2Fo9SR1VE36NGl6NaHOzsmE1rhGQCTbAApBWBu1wIHRTzG5ZURT%2FSHrGqKlgSoCwbPVoFKmD6kJYzjjSL92omsp9zssQtpQm%2Bda2UaCceUDNfLDW%2BOk8PhQ%2BPq0nv%2BgN%2BhPW8cqCQ17VPEjRFAOqoEqyOr8MrJQPIecwvLyOxAY6pgFypZYeo3arpiFvct%2BJ%2BUgW7O7sdDvDxz24%2F07btHJLh0ly%2Fj%2FAjAhTtLAA9SsVgak1lotg4xsO83rBHiMBkBr203oemeh4JZ%2BmApAbUTF7E4ZxTTQfpdEcx6GzMDvnXrRrA1n%2BakdWIzXB0el%2F5p8vTBlEwEIYDmJu5sU2e%2FtVm5zH946wAkaRIGSxIbeN1gQWlQD7ujDRVx7wFjiJN709XIAZl5UG&X-Amz-Signature=fdd1b79164c3affa50eb0209662216f6e4a7dcda30316f4979f4eaa404bd9bf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCSH3EFH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDyhE2MQ5W2kKYakBKNhRqLheRt56tHZlkDnb%2Br%2BqiHEAIgSoy%2BmVQQ5DaucCXGvWVTDesQwfZCKhOB6%2FKSVCzJJDEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDAQs6ovslu%2FgC0bHvircA04kc11Cx3jyPOOVAL3UTZew828eKkPrGD6SqYpMGj4DKPW3YxBcPBIf2n7vDXt3CY6q1oEeRxZ6D8W9HbN4R8MyD30dyRGiFofwclG5JUZBvAnGZBKpgItB3ODfy56v51Tuad6pZ5Hch0oa%2FxnNhmUC70VkiCUfX0i%2FvwB3oKV3DzO3h0T16FG%2FJ2G3UegbeMw%2FyKsp2rnG%2FRSET2IHnrKW6B04ye8yYMC8R0k94AmwtP7%2FCVaa3CN1eUgx7mASbIuEnBX3t7uESGh4axHB5WpOp%2BLC4CydRvTHX67c7ViQnxUUTMVKJyiz0QD8nAlbb5zm%2BSZFsU2fVjeD%2BRSPAKjuF55DkLQ7qsmJbo7Ow0XBjUlYnb2USm%2FuIUaV9uDoOPGReyGq1KxpFa1eFOi5HSkvzWrnrZl1I4GWbxAcjKJE1hodpMQiHUeu9IbXwPzhEbxzIpFL%2ByBUM%2BTLV%2FUAddMtXsJkyBsge9mrgC2GFpMkhmQ7S4HSJfA4myoIzkKbmd2X53yk3HH4MdtDBtMpXLq0WLwp3cMJGmMGqNs3bcZ%2Fn0Ie2jd42Cbq9pqdHIj5kD%2B1eVjSiFBcjh9roQUXKlAMIFsTSY6mM8tEWAVlWpMKIspAuo6zvqH%2BnqBaMNG8jsQGOqUBVeKh8Aw%2Fdyut4LRj3WCC0zkeOwAkZqT%2FOS3IdMRJh0f7a3kLE6noncCqOUdpTRfvuFV5P5zmjHzfxljn0WkpsYh5JSwmVAoPeVbu9wBSA%2BJQIA7Gn3ntxYfCZuXzSuGht%2Fw427ogPAkLVc%2Fmiy%2B5VZILU2U%2BP5FI5Vv6WUpfPROU9ksZwKxf3LxksJyIX0iV80Q7Aj0AXoMUKAGmb9Xl0KUulm%2Bn&X-Amz-Signature=01bfc9fb099d779d61c951f24d959ac941c973942cf7f3fd6b3d45521f791045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6HI6DGG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCHYOgS92Z40F5b59DyuKThdyyhSxpt1xN8TwT9kCGEsAIhAPayeommEEuE0XxKOghIctZvBlWAjHd%2B6hLa2yZ1ws6zKv8DCEgQABoMNjM3NDIzMTgzODA1Igxh8ZWPg0%2B4gWjofnMq3AOyoHLS1DBPBKTQ82NOGoZEY1A59wazWUjFvpzuKDFTEFJw%2FsA2PD35%2BkwkU2z8sBZm%2B2CKLgK5Nh1hdM8BFVA8jN%2BLHJJJ5br9cQDXSSe7CYuRn8t4hGryVs4toFDScoKdLNUWRVLPEnQnT8%2FJG28jop5mxrsrOAclyVvbaiob7mEJHyENJ6kN4XFgVBcmR09TjFWysliEoj0VZ%2F8QjzBEDXH72lfbERFNZm2XxfJWBBg3iGJhu%2B5tSUKHle4BJq51azbqc3n4vGeynpHXHO9%2BXRGbMff1i%2BokWESPnuLrJTWptMh8f%2F3Y67RaczNAVnjO3gsoNh17TJov0vnuoFCjA8dQRSOLaOHhi2JFfcBQnqK7FBhJQoZlOlkaSzDdrK7scSq0ccXb7UzUCwOH3ZmpxiOWYJEls0t3Nx95LTG%2BeXnX7FVZuCV5mT%2BmbOqhSz7RIGgMYPQzziFX7gcmNDVkPXLxn%2BVpaFHaIz8GQ274nuQXK3BVk0JZgp2Eww17EsBBtKgUQVPTrm%2FI8hGLTLDZSUlqCRYCYxyVG4rJq4IaxHDGwi2INWAiB7xsCapAn0gtQ8oxi1ug3bu9vvcLMKH3ysAHjNlwzeRd%2Fg8rgYv4y1eHX1CS7z04Rdcc%2FjCLvI7EBjqkAaB6LqXUbEYZ%2FMHn%2FfH%2BPni6iVRT8n8dM%2F3DbJvuiC8gke%2BUIjG24LEPLgYlSpsgFAQwTkgnFPN7kI0H9PXh8R%2FEiJrfB0tfKMj2KFRVrZxeHxXU89KKBFZ5n4beuXZ%2BKo%2FAXkPH14iJMyo%2BVhpHUneW1MbwiuH6pYsdKVlnMjcMPkprOfFb50WBjh80ZBpvc%2FRDBOJVMU0sCUBIC8segYwFzK9V&X-Amz-Signature=2a2288febdda8fe7c7d2c124141146cc67f48583afc0c808f68c4931cee6a641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO4VQAPQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBo4L55P1KDGKLUecVuT90KO7vBI7fouTBqxnln4DDrMAiA4XBk7wkqC4V0tqVxFAarj3oK3sKBH0NSv064okybMcSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIME4Nf5GPTiTEcNWXYKtwDOzyXXE48UQUG4Gb6r%2Fg5nlyarDnOv%2FZ%2BzH3QVTzG9fUgh4eawqnryepQk8C25xbxAPVXb0C2oNKhjeXqisNjmmp2FINDNFWlVINvGvlAPWEBwtfFOGo40vr4QB3qwy43YOH9wlI8Q2%2BW4NOa930jx%2FZ6WDPnDY%2BgzQQDkpw9tExkWtE6G%2FWEG4lvp77ykDH3fNbyi8rbVvbLc3Q0C8PklEXvtIbCsgC8dlaSQjsFgjovfGD%2FemhEW6iQanZtMr8tNajX2AXeVVBgQcINrsbvkXCeCOn%2FH45Jx3D%2B7FQm%2BT9jnXNbkzCiMlDGpvx%2FDd2QHehuSIUBb%2BFLcBcuXBIqIF7KmXtV%2F27lZHt3rl6vAHksF2DjKCwJ5TBjbDlCbsGAwdFV3cN2RZW7mBNzJI%2B26eRyr1CodY2SEhDyvUgEFsotx7r8Nl%2FX56t7ZQ93Y%2F8xdkhU5ZpaNNcJfWfpKHebmr%2BUU%2Fo9SR1VE36NGl6NaHOzsmE1rhGQCTbAApBWBu1wIHRTzG5ZURT%2FSHrGqKlgSoCwbPVoFKmD6kJYzjjSL92omsp9zssQtpQm%2Bda2UaCceUDNfLDW%2BOk8PhQ%2BPq0nv%2BgN%2BhPW8cqCQ17VPEjRFAOqoEqyOr8MrJQPIecwvLyOxAY6pgFypZYeo3arpiFvct%2BJ%2BUgW7O7sdDvDxz24%2F07btHJLh0ly%2Fj%2FAjAhTtLAA9SsVgak1lotg4xsO83rBHiMBkBr203oemeh4JZ%2BmApAbUTF7E4ZxTTQfpdEcx6GzMDvnXrRrA1n%2BakdWIzXB0el%2F5p8vTBlEwEIYDmJu5sU2e%2FtVm5zH946wAkaRIGSxIbeN1gQWlQD7ujDRVx7wFjiJN709XIAZl5UG&X-Amz-Signature=77668cd73d9781ffb0429a8bcfd98a84cfe1f87ee81c3558de10c22ddc414c02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
