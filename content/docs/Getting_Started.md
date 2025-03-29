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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKPLKUY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T040943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFlrBxGM4mGJ38rSdXUAkoYgJkEnlNUdrjF%2BGaCd%2FLrIAiBplLRDJor%2FfukfZM4EL5Sy3uSCppI%2BB5kfDMGqsPMFpir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMUfh1muE9VBziBXytKtwD%2BuQJnDKm3ut%2BgSWYGxHP%2F4L3pTdc86U4ps8R9a041cgTtFfNGRgHOQNxvAcdjvpy1kO198IQ8ZmUrAkZCeT8mhk6abdqkVSyWUp68Yv5VKUiXlD%2FVkfXWUfYWHGNeWZW%2F2JvvDe49o9Dk4VhO9lfBBmIZu7Wa3c%2FKvJzzH3yNURhzhRhiPByjzuGrKL5AAKHX88xVadFWrGtEbsTdSxFdk5W4tdic%2BTAdVNK%2B%2BY6biICWXroMgb%2FoYW%2BFdpr7HZUnaBoaTDEGEk8ylc%2BE1y%2BdDn30UzxmiyfGU7Iv1fu9rIv0s%2BU6Vjbi%2BOPysrIyRPUWhONwfzpz4oXXf8MUy2MJ2zfFKiFn2zKiVzWU6EE3iW0X620vV8rRJ52FbwVn4GmcSxUzBKFX9ar%2BkFs4zToHCIGJRDMcVUiQMSIn%2BLXy6FTubjWOop4gexODgB4M60lpWZne6PQFtePND70LNBKYmqsyH4da%2F4JGCB1G0BOnegT9Vnw7rc1bwpTxnAUI%2BLtHw861QsmJ2G3XI55bHwVLencIWD6JBFxp3icT0InYoY%2Bhp6rnnOnMrTHp1kkQIK%2ByohfaHMpv3hrvsEKKS3zS0MyM0s5Ap5b%2BvtdQHwh42VhLnLtZeVAp9tJN4Qw5d6cvwY6pgGAiY3%2FfiRxWC%2FrzZcSjkHHbXH49SBhVbmlb%2BM76utySzwObZmVE2giDG8v0aMnGg9WAOZW0mSZS64vrOieoa5u1F2UBYltjymWcMDsxKxh3LRqNtNPCVV7v6%2Byd%2BSdqQjrF4Q2JJNiaQJIO0kmO%2FXxvh29rGRrfORV2y3xZIufUfRrQth6Dgdt%2FdZD%2BJNU6Ixhu%2BkbACmMkede6fFXE8x2jP1cBnhH&X-Amz-Signature=2c5bed320e9bb85a9bfa0e443dd4e5c1498a7e68961ff2a4fe28335224fbf491&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKPLKUY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T040943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFlrBxGM4mGJ38rSdXUAkoYgJkEnlNUdrjF%2BGaCd%2FLrIAiBplLRDJor%2FfukfZM4EL5Sy3uSCppI%2BB5kfDMGqsPMFpir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMUfh1muE9VBziBXytKtwD%2BuQJnDKm3ut%2BgSWYGxHP%2F4L3pTdc86U4ps8R9a041cgTtFfNGRgHOQNxvAcdjvpy1kO198IQ8ZmUrAkZCeT8mhk6abdqkVSyWUp68Yv5VKUiXlD%2FVkfXWUfYWHGNeWZW%2F2JvvDe49o9Dk4VhO9lfBBmIZu7Wa3c%2FKvJzzH3yNURhzhRhiPByjzuGrKL5AAKHX88xVadFWrGtEbsTdSxFdk5W4tdic%2BTAdVNK%2B%2BY6biICWXroMgb%2FoYW%2BFdpr7HZUnaBoaTDEGEk8ylc%2BE1y%2BdDn30UzxmiyfGU7Iv1fu9rIv0s%2BU6Vjbi%2BOPysrIyRPUWhONwfzpz4oXXf8MUy2MJ2zfFKiFn2zKiVzWU6EE3iW0X620vV8rRJ52FbwVn4GmcSxUzBKFX9ar%2BkFs4zToHCIGJRDMcVUiQMSIn%2BLXy6FTubjWOop4gexODgB4M60lpWZne6PQFtePND70LNBKYmqsyH4da%2F4JGCB1G0BOnegT9Vnw7rc1bwpTxnAUI%2BLtHw861QsmJ2G3XI55bHwVLencIWD6JBFxp3icT0InYoY%2Bhp6rnnOnMrTHp1kkQIK%2ByohfaHMpv3hrvsEKKS3zS0MyM0s5Ap5b%2BvtdQHwh42VhLnLtZeVAp9tJN4Qw5d6cvwY6pgGAiY3%2FfiRxWC%2FrzZcSjkHHbXH49SBhVbmlb%2BM76utySzwObZmVE2giDG8v0aMnGg9WAOZW0mSZS64vrOieoa5u1F2UBYltjymWcMDsxKxh3LRqNtNPCVV7v6%2Byd%2BSdqQjrF4Q2JJNiaQJIO0kmO%2FXxvh29rGRrfORV2y3xZIufUfRrQth6Dgdt%2FdZD%2BJNU6Ixhu%2BkbACmMkede6fFXE8x2jP1cBnhH&X-Amz-Signature=fc9df98dfae91591f2afaa386d47c4add78247ec13f202c63ecea3fd108a0177&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDADVRDO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDpTzPQr1nZPYqtsXh8tCFGrW1nSE6r8RggrxJspd5t9QIgJ%2FJhN1hffOGsSBPgtmyvQB3Q1jmiZHwB65lh1M9qujwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDMLbGdOBe0TLluMyqCrcA0Wm83RxGqGWbrjU4zfKiMQbq%2FxgD1xPH1uUb0dhE%2BZ0PmAdbI%2FKdbmEGVw4vOk%2BZuMTMETDSPQOsMHTZytrOzIHQOM42TtGMSSlf3AiVVl8gbP5qPr0S%2B3MlHEGqPJVZ2lXY9JPEiTQEDtWAeJgV4kEJfBkSk8qjlE4eNAOjcJ0X6GdjF%2F9Oj4PBvSnDD78VKOcXHuT1j5p49fwbUmMO5pVGB7N9M%2BnNW3xhnMA1SVNCmPZ%2Bsl0fe7321IQ%2BvxfAN0rVoYU3WGxdLF34vNxBjaZTXnuPjbPNU4fXjUTfxsrgtWYoTq1kdAyvGnlzQQQmbtAp0br%2FM03GyywHvlrtXwoePYee%2BmvnPPC2ux5yyAY583hNF5WzN68HVKm9I54YlEKRFCi0rualvGsbgAW9AuFVGWPx8ASsRZqHjygsxiaESa07%2FZWR%2BYu%2FbW00tEJ9Jx9LnvhJQFb15hvG%2BV%2Fxgqs59l6T7kOMonIV8S28EPlINuJeZFs4F9BKU1eZyhFcCg00da0sO%2Ft2aD5JRPo9hn2SQxd2hOXKndY6yWCh%2BAnKjnLYroOCQqB8tueV2L9HFKd2DRDYHploxtLSZT%2FLjEt3wWYGOfdrLgO7zHZ%2FORwFbftvYgWJAfX5N8tMLnfnL8GOqUBsFtY768AqT%2BC3YIceLOEXBBftkM2kR1JsrNZv8wnJi3GTlHMTnpHW9coCl1SvRq%2FgXSKQRCaXaMcJkilacjO56heTifdsJqfOk%2BTVmjS9d8fcvvO3QhFIg%2BYcOU4k2xTjTosiEpoqOD%2BDbh9cDneZKXxjB3%2FO7BeeVMd%2FHbrxuCKnMG7S1VakUup81bomLGIYpu3pPLPVcPDYZZsLHGqwnhuDLjf&X-Amz-Signature=3b30a84d61a1a5f47690459ddbed5506c7f855e58f6d8095b9e2fb328dd41ca2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP2UKOYU%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDAbcFIfHUaTkojIU2ZqO8LDy36vrb3a4BFpWdCrzw92QIhAKXtvJ3o3BQdya1Yc50vY%2BqLFGiDO2eTme4N7%2B%2FIY1VwKv8DCGgQABoMNjM3NDIzMTgzODA1IgzmZ88gzC6rBuhPO84q3ANsRC67ppdTOsYIqUJR3cHWB2KwB8VVO5xM0OvqFEisAHxuj%2FPsNkkWj1El4XJjIHzww7JBgl9bU%2FXWPiY2aIw%2FQs%2BOoWE7rNPMSmIVj6W1Ews6YH4VxLzsoNpVNvuzgQjeZLyXKFpUEl82neO9wf367nGuT5cwssa62ceB%2BhAfe%2BuI125B4Gjs%2BDkMwrI78GqyWiPSpKPQSGdBMt69FT%2BLB49Dhq943I411678%2FLe1NNn4SPhHWFHo2NTCKzyhMfiFnlo6I%2BTnqrqbPn5iJjsJJSs03V7F%2FaSXnkCX856SeYigBqg%2B%2Fat%2BNPFQ3HZfIoJ%2FUACBLO4epSVQk38ZTZVFkIGnbR3Wbb4GQi%2BB%2BHsvYhd4r0hxObtVMDIcEaemb%2FgIVx3Z1fUQtLHTi81bH29dU7ZnpFl%2Bo%2FxTs9iOmaHSp%2BQdalG8xnpf3kgBdkxQfnQ%2F51xMebE3cmp6pY4yC4XDMZXGHgUMf4IR7MdDcKpdV483ZiKuDtbKj9LK6QL2H1XdhGY1Hzsl0nZ4To3ynkV4n%2B0JNa7srafXVuA%2BIneYtsyAeOsTdAR88FZeeU%2B1SDyXKTzRYIYt4H3a0rWqk%2FJ5LSKg5RTVAKt1dO6g3phT2k%2BTBS6Hpo4KcBrZLTCK35y%2FBjqkAeoUWv0lXoOwBecn0XYv%2FCdgl0W1G8yz%2FbFaD%2FRwNFTOrOadGRX2mK9MRDanppkrYwb9IxjBYQF90%2Bm1oKXsMTJVYZKaGTL70NXuEEUBVmPX%2FUWxOb1f6ysww8hkysNvqeTrWzQB2p30vEycpzIAsLFlkQYIlTs6LzokbkpCMmRuotTVheW0EQZLuGLKBGIyanrkQpUN%2FnF0ACv2XLrkSete2MmB&X-Amz-Signature=51d7a28b11bed1865455b961bf67e4b020bd52fe0867b6f7bcc3da751fe7ff38&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKPLKUY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T040943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFlrBxGM4mGJ38rSdXUAkoYgJkEnlNUdrjF%2BGaCd%2FLrIAiBplLRDJor%2FfukfZM4EL5Sy3uSCppI%2BB5kfDMGqsPMFpir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMUfh1muE9VBziBXytKtwD%2BuQJnDKm3ut%2BgSWYGxHP%2F4L3pTdc86U4ps8R9a041cgTtFfNGRgHOQNxvAcdjvpy1kO198IQ8ZmUrAkZCeT8mhk6abdqkVSyWUp68Yv5VKUiXlD%2FVkfXWUfYWHGNeWZW%2F2JvvDe49o9Dk4VhO9lfBBmIZu7Wa3c%2FKvJzzH3yNURhzhRhiPByjzuGrKL5AAKHX88xVadFWrGtEbsTdSxFdk5W4tdic%2BTAdVNK%2B%2BY6biICWXroMgb%2FoYW%2BFdpr7HZUnaBoaTDEGEk8ylc%2BE1y%2BdDn30UzxmiyfGU7Iv1fu9rIv0s%2BU6Vjbi%2BOPysrIyRPUWhONwfzpz4oXXf8MUy2MJ2zfFKiFn2zKiVzWU6EE3iW0X620vV8rRJ52FbwVn4GmcSxUzBKFX9ar%2BkFs4zToHCIGJRDMcVUiQMSIn%2BLXy6FTubjWOop4gexODgB4M60lpWZne6PQFtePND70LNBKYmqsyH4da%2F4JGCB1G0BOnegT9Vnw7rc1bwpTxnAUI%2BLtHw861QsmJ2G3XI55bHwVLencIWD6JBFxp3icT0InYoY%2Bhp6rnnOnMrTHp1kkQIK%2ByohfaHMpv3hrvsEKKS3zS0MyM0s5Ap5b%2BvtdQHwh42VhLnLtZeVAp9tJN4Qw5d6cvwY6pgGAiY3%2FfiRxWC%2FrzZcSjkHHbXH49SBhVbmlb%2BM76utySzwObZmVE2giDG8v0aMnGg9WAOZW0mSZS64vrOieoa5u1F2UBYltjymWcMDsxKxh3LRqNtNPCVV7v6%2Byd%2BSdqQjrF4Q2JJNiaQJIO0kmO%2FXxvh29rGRrfORV2y3xZIufUfRrQth6Dgdt%2FdZD%2BJNU6Ixhu%2BkbACmMkede6fFXE8x2jP1cBnhH&X-Amz-Signature=a5a741dc56b6a9d9af1cb4fda18cbd883e37fc72b496b3aa641583157650d710&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
