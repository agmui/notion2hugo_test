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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NEN7VL3%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrvBStIQBFht0ynMZZm5CZL%2Br5mBdY183LVElFvw95oAIhAOCTBBB5dbg9eck309sZBT2ek72plylTDOMydVrywpeYKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVWsMzl7KamE9SYf4q3AMDJI6qjteXMZgygqNpccR61xSBHidzKpIbohaGdzOyPr%2FtizBGZ7sDuhadaOesyoWODgK1KaiociRieF5iyjCX1jvlgbVJgktvgwXP5tLh5dA2hPzOdTs8CcNHi9rjTEQ9pLg96fvstlBBOpBO62rLVoD%2FoLRyr4kbeRFxEEDjKLMA1lw2OGDSMI6qe2%2Bpd4e0lA8aEzL7IQ6UU32a34CTWFKqp7kRPRqPrctMdgsvPFCGjabEVSHw83CO4paG1w3cLQcYsVbbz5EVnDKWhtedTYnR84NGJwZbcJIAV%2FEMojMf%2B5WJk9PRjRj%2FTfwWe4dlhsA3NC7ZiFBJjZftxdG%2Fdf3DIRgZSZUlevqMBrV2z4QXnllno8E%2BXCYAAdf6twzOuGYc86P1GZRfZvSHM9HFwwS0fb8xj4Z8BHoRrq4aAw14gWDDooq2x%2BYt%2BAzAFJEwFrFjRaHsV11MKCmAQIuE%2BMMdsFGkWJFhuKBZbKURAads7C0wRakjjNpqvovBGqrr2HbCCRwQPvosdv%2FTycjLhT9PBLaIve0WvSkbhVbB2UXR9wkVyHP8cwsCEq7lQam03X9vNHhXT7%2BkdGcbe6jzKFmR8uUSv3Xl2SJBxLlH6d0ZPLpD67unoxuvDTC4gLXDBjqkAQIX94H2H9rZPpdT4KK04KwyzCGh%2B%2FKV%2BYkCbsv0ie8WEC38wnQg2yp2%2F%2BHxU6uG7EF2bnf2QsM946Jq1RE6h0S7M%2B6Pw3DDR82BQNntn8qPCe94jvR2Lp6pKp81wzPl%2B524kcKCOtuAdIq7uOeUcm0sYWPzLxOKdnWRL437QYJB7E4eWZgxdivMPH1WR%2FJtcgr2n%2BjolnT%2Fux5O1%2F7TyC3k61Rv&X-Amz-Signature=f7bb9af53d263b32af1f621127e8332b2ba68b7b5529dee708347f99681a1af0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NEN7VL3%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrvBStIQBFht0ynMZZm5CZL%2Br5mBdY183LVElFvw95oAIhAOCTBBB5dbg9eck309sZBT2ek72plylTDOMydVrywpeYKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVWsMzl7KamE9SYf4q3AMDJI6qjteXMZgygqNpccR61xSBHidzKpIbohaGdzOyPr%2FtizBGZ7sDuhadaOesyoWODgK1KaiociRieF5iyjCX1jvlgbVJgktvgwXP5tLh5dA2hPzOdTs8CcNHi9rjTEQ9pLg96fvstlBBOpBO62rLVoD%2FoLRyr4kbeRFxEEDjKLMA1lw2OGDSMI6qe2%2Bpd4e0lA8aEzL7IQ6UU32a34CTWFKqp7kRPRqPrctMdgsvPFCGjabEVSHw83CO4paG1w3cLQcYsVbbz5EVnDKWhtedTYnR84NGJwZbcJIAV%2FEMojMf%2B5WJk9PRjRj%2FTfwWe4dlhsA3NC7ZiFBJjZftxdG%2Fdf3DIRgZSZUlevqMBrV2z4QXnllno8E%2BXCYAAdf6twzOuGYc86P1GZRfZvSHM9HFwwS0fb8xj4Z8BHoRrq4aAw14gWDDooq2x%2BYt%2BAzAFJEwFrFjRaHsV11MKCmAQIuE%2BMMdsFGkWJFhuKBZbKURAads7C0wRakjjNpqvovBGqrr2HbCCRwQPvosdv%2FTycjLhT9PBLaIve0WvSkbhVbB2UXR9wkVyHP8cwsCEq7lQam03X9vNHhXT7%2BkdGcbe6jzKFmR8uUSv3Xl2SJBxLlH6d0ZPLpD67unoxuvDTC4gLXDBjqkAQIX94H2H9rZPpdT4KK04KwyzCGh%2B%2FKV%2BYkCbsv0ie8WEC38wnQg2yp2%2F%2BHxU6uG7EF2bnf2QsM946Jq1RE6h0S7M%2B6Pw3DDR82BQNntn8qPCe94jvR2Lp6pKp81wzPl%2B524kcKCOtuAdIq7uOeUcm0sYWPzLxOKdnWRL437QYJB7E4eWZgxdivMPH1WR%2FJtcgr2n%2BjolnT%2Fux5O1%2F7TyC3k61Rv&X-Amz-Signature=ce54d647a68e57c55d3a8abcef47347da7e5f63b594837ec4a2c9898c3f1a7cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NEN7VL3%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrvBStIQBFht0ynMZZm5CZL%2Br5mBdY183LVElFvw95oAIhAOCTBBB5dbg9eck309sZBT2ek72plylTDOMydVrywpeYKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVWsMzl7KamE9SYf4q3AMDJI6qjteXMZgygqNpccR61xSBHidzKpIbohaGdzOyPr%2FtizBGZ7sDuhadaOesyoWODgK1KaiociRieF5iyjCX1jvlgbVJgktvgwXP5tLh5dA2hPzOdTs8CcNHi9rjTEQ9pLg96fvstlBBOpBO62rLVoD%2FoLRyr4kbeRFxEEDjKLMA1lw2OGDSMI6qe2%2Bpd4e0lA8aEzL7IQ6UU32a34CTWFKqp7kRPRqPrctMdgsvPFCGjabEVSHw83CO4paG1w3cLQcYsVbbz5EVnDKWhtedTYnR84NGJwZbcJIAV%2FEMojMf%2B5WJk9PRjRj%2FTfwWe4dlhsA3NC7ZiFBJjZftxdG%2Fdf3DIRgZSZUlevqMBrV2z4QXnllno8E%2BXCYAAdf6twzOuGYc86P1GZRfZvSHM9HFwwS0fb8xj4Z8BHoRrq4aAw14gWDDooq2x%2BYt%2BAzAFJEwFrFjRaHsV11MKCmAQIuE%2BMMdsFGkWJFhuKBZbKURAads7C0wRakjjNpqvovBGqrr2HbCCRwQPvosdv%2FTycjLhT9PBLaIve0WvSkbhVbB2UXR9wkVyHP8cwsCEq7lQam03X9vNHhXT7%2BkdGcbe6jzKFmR8uUSv3Xl2SJBxLlH6d0ZPLpD67unoxuvDTC4gLXDBjqkAQIX94H2H9rZPpdT4KK04KwyzCGh%2B%2FKV%2BYkCbsv0ie8WEC38wnQg2yp2%2F%2BHxU6uG7EF2bnf2QsM946Jq1RE6h0S7M%2B6Pw3DDR82BQNntn8qPCe94jvR2Lp6pKp81wzPl%2B524kcKCOtuAdIq7uOeUcm0sYWPzLxOKdnWRL437QYJB7E4eWZgxdivMPH1WR%2FJtcgr2n%2BjolnT%2Fux5O1%2F7TyC3k61Rv&X-Amz-Signature=f4db55cb8be563eb1d3b13e5bb219b8124eb14f5ed8ec4fdbb9540b6437adaf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T32BXVV%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBITwNN%2BrdXLjdF5HwCEInfWhwHTDtxHjrRk8%2FnGk0XTAiAtIAULg2KVRFnUYl1MAvvyY9nNzUTWnwPxRpt1IX5F3SqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbvDTaKKWYpP85umpKtwD%2FyarwvocV7WNvU9S54YnSfSNf0hPpWroqm1k7GnrzD4wrYRyZPxCoqeYdffzt5YGjx02GwWAHT%2Fqhfx1Dg7CT4EeGKDhaQve%2FQzbt76le9045iuH1d4yWXY%2BiwtPwcmTc4TVVjJNdXOq3bHx%2Fr0%2BJHlcfoo9lgTiEs1868P81BiAGqB09Hv2yD7%2FSbNKBIpEyZV%2FDj6oCzGvvVfvE7iUY1vWz7cS%2BVaPXyXSOdZ3k2FM2cIk%2BIKlSQd4AYpVZ2C7C1oEajPfcEbBG5KzpK%2FOC2CKp3n5Sx6x%2Bhqh8xPQBb4ekMzrhqPBv0Nye0OrkGVilN950UR1rRnJxhMRPGUTPwRamTn%2BIsDBOkOJL6VkOxYBuIvWrKzpQ5RCZdI9AuqNCjjFynB%2FbzuriP8OrDKv7uN3Q5X8HLaw7nATlybjDCMJ%2BiMyJvis3ZdAYBxTTLv0t0eIyJ4B%2BW6MXcK4zAFxTvXqVFp7ttDXdylE618n0h85BResbHBfImLNS5WwLA%2FRp2MptygLMIp5YOyCBdj1%2B1aw3FHL5SS17bO5xU9ySMI5PU0jKVfZs%2FEZ99DCXUBSlRxHWDPnKs6lJjyazPdAtbpYA8Mv8s5bQoD8RULzWkJF1xTT%2FwsTzP1Il0cwnoC1wwY6pgFIuaYqO0jmtcDWoC4wTf3qEgE8n%2BDYCCE1R2UR2nqVlF%2B2rDq1%2BLB7yBYVOv7nVwLXuVMp2hThsFOAhNFnlKEQjI3C3MeikReDilxLrB2rSaRoyvCiTG8KL5sUKEVQXcosJngfrOD5MWCj8op%2B0wjUXs%2BJ%2B9KiRFVU%2FP2pNwbJeNJRCBPNmn7kuNmFA%2BalEFcZogZvl8b0GMqB14vJbufqI57hdclM&X-Amz-Signature=b3a418f4e3d0ba0df491628e2b2984f4dc30594663b5fc3ab032cd080f711fc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNMRAWET%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgGYy%2FNGxRBTTwdyrUgAFbjJYf14%2BR%2BeagnepsYeMyygIgFr3I0o1zs8rkh5p%2BNITqwqNYDCavdG%2FYGwterecnJbkqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJi%2FVhSbiV73vkDDKCrcA5loZeRxG7y7ECnL1EsDta5Zy983faDulT9K8fjQxtYpgTi%2FPb7J7giF9dPQIG1lyqlNE4b96y6Btc25NA9CbwVjSbwVuMSg7Ik5kQrZYf0kpyQGtWstQJe0V%2FDIyajWRf7W%2BYDaxA3Ze4erkEvO8bQkGkw4NW9J5K78mEMuSrryb6GkWYW1ogi0QC1St476ZKLdsiyc7HikQkqqw6d3eA2z9yOzQfR2zwDgLEQ6N2OW2dXb5Ac0mMG0UK4RRESLAFz9fod3SmH4JFEXHEluUik7jFficR9iaRhPL5AfkxnhB0BghEY8hfBVfuKRvxiC0urzW3FNlVljbTmN2bB3Sdrz4IFkA5r5RFf0UOB9rp24lf65rBLbE7kJSPsd%2FQTxN088JwRWG%2BaePiXsmfCrQ6d5QKE%2FkfQ3nYL05LBvxPbWAmz7kqzx29pmPUpoTQJNITq%2Bm7g%2BoX5ln1qW64wH9PHY46vpIa73mdXEqZrSCnXfPryxKOxthIf8PiIo6TZ76Hr6vQ60Rhmpp6dGOxRiRStbbFo9r7Oso1gv5YrHl7foVXjzovGFo13KUi7bqUsNYLupPFPnNHJs5UJ0ZtOW1r5InyWV6E1UFOFmw8C04HxTylZCgW7heh7jHAVjMLiAtcMGOqUBTZRwl%2Bsn2Hr2P6nXwSwxlny6Hfi117dYfF5wtmtoZW4nMJEufYYU8YBBF6%2BjpzrW6kiWYzXoqIOHjkN8E9%2Fu20Ixfd3eQx5dsTf%2FfEtrLz3jo1Dy2%2Bg1g8krQctHB2WpX6H81j1V5m3rJ%2B%2BFAVWRAZb562QasZuyfv30gm%2BDPRf2ACvoxg5Q3VQbLTyDpM6UXgYolTHPzqF78%2BlGRiC1dUCnzuYK&X-Amz-Signature=0ccf84a3db7682e48fc6b861b8d61165776e5126da459ff266545e9c2e8af021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NEN7VL3%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrvBStIQBFht0ynMZZm5CZL%2Br5mBdY183LVElFvw95oAIhAOCTBBB5dbg9eck309sZBT2ek72plylTDOMydVrywpeYKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVWsMzl7KamE9SYf4q3AMDJI6qjteXMZgygqNpccR61xSBHidzKpIbohaGdzOyPr%2FtizBGZ7sDuhadaOesyoWODgK1KaiociRieF5iyjCX1jvlgbVJgktvgwXP5tLh5dA2hPzOdTs8CcNHi9rjTEQ9pLg96fvstlBBOpBO62rLVoD%2FoLRyr4kbeRFxEEDjKLMA1lw2OGDSMI6qe2%2Bpd4e0lA8aEzL7IQ6UU32a34CTWFKqp7kRPRqPrctMdgsvPFCGjabEVSHw83CO4paG1w3cLQcYsVbbz5EVnDKWhtedTYnR84NGJwZbcJIAV%2FEMojMf%2B5WJk9PRjRj%2FTfwWe4dlhsA3NC7ZiFBJjZftxdG%2Fdf3DIRgZSZUlevqMBrV2z4QXnllno8E%2BXCYAAdf6twzOuGYc86P1GZRfZvSHM9HFwwS0fb8xj4Z8BHoRrq4aAw14gWDDooq2x%2BYt%2BAzAFJEwFrFjRaHsV11MKCmAQIuE%2BMMdsFGkWJFhuKBZbKURAads7C0wRakjjNpqvovBGqrr2HbCCRwQPvosdv%2FTycjLhT9PBLaIve0WvSkbhVbB2UXR9wkVyHP8cwsCEq7lQam03X9vNHhXT7%2BkdGcbe6jzKFmR8uUSv3Xl2SJBxLlH6d0ZPLpD67unoxuvDTC4gLXDBjqkAQIX94H2H9rZPpdT4KK04KwyzCGh%2B%2FKV%2BYkCbsv0ie8WEC38wnQg2yp2%2F%2BHxU6uG7EF2bnf2QsM946Jq1RE6h0S7M%2B6Pw3DDR82BQNntn8qPCe94jvR2Lp6pKp81wzPl%2B524kcKCOtuAdIq7uOeUcm0sYWPzLxOKdnWRL437QYJB7E4eWZgxdivMPH1WR%2FJtcgr2n%2BjolnT%2Fux5O1%2F7TyC3k61Rv&X-Amz-Signature=3734a05620e279508c10b723293a392828537504caab26ab0862851d51aa70f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
