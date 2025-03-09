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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK435FUZ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCROVjWBKqecLipHGVz6APFYlS0rF7XYxQ%2FScCKkwqU2QIgDMwVgpVIuxnDB690weD13ari9qTZOV3DASyJ8jyxnlAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDN6Km8nD9iEwQXhzfyrcA6S6JyafC%2FQzm2GjRRKxXTEbtXFiDBiI8o%2B4P5dZPxHPzvimXBphk2Z4kQnVPCDA%2BhePAAuGKUlzq%2FHJDOCWnl5jIpK%2BKcWtlHN%2Fx97ojgidWmZenoQdDA1vQZCiJQi7hkz%2Fjuwr70%2FD%2FUmYrQW0TJmm5URsAbal4UQfanUnvcllQ3e88goNlhAHhbI62i%2BGB1qT79mP3BhhGY06Ip%2BuH2tkIZRamzH6QUm960xh9yO%2B9%2BbF6tTf4vBZrEmUDkhOLjad1uDNbtUFkoJaRCWUfv0fI8AxDm17r7PNSSP5X4RDNxeSbdUS%2FcWMBeHcC61YMKNZg7fRS4lwhMfHhwzAtZhjpaQVL0naOc5oRrcFGXQdMgzF2NSwd13OsSMtuSOjt1ER5Wm9UVUCzK8RvF3cLY6wdjKqUzO9CX64G3m7Umk5lgB2Aq4vqSHDJgJjdO99d4Q%2B%2FJH3FM%2Bk%2FLOwumNytaF3iG5An7hVenNTHksL35caVdSvBQxooIkfisBNI3uLrt52WwtTkrqn%2FWGyB%2BJ2LE%2FBrN3GnfD3jiisdO2%2BH268tznPBL3bN8LxPYbYhYHTpgZwI9POTDsCyPl%2BejYRk7t89%2B8%2FrJZTlD7oPKOy4H6maVmDtRWI4l1feWWeMLvrtL4GOqUBe%2FbSHJtrG%2BHlHI88Gso0Qp7PC4slSAtE%2FitMI1pYKP0tvGI1hSizdcw2eYpq2dWdGC9bgWsCFukgipAcD60HZHtapXe3WIvI8OfB3oPmuy7dvDr1zrs2OBS9FRLG46zRnhqziqf1uVCH4hmhzcTY9Un2mguKc%2Fe9RZWHi3k%2BQ6ZbPUJjbU%2FuerTw7AyuvTGmMZiQM%2BNsUk2s0kpdkXk4xB7nJFXz&X-Amz-Signature=e3ebb0bca38867ec6606dc5bfd311daba5a08a39a77c4b4bb6507333b49d7b97&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK435FUZ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCROVjWBKqecLipHGVz6APFYlS0rF7XYxQ%2FScCKkwqU2QIgDMwVgpVIuxnDB690weD13ari9qTZOV3DASyJ8jyxnlAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDN6Km8nD9iEwQXhzfyrcA6S6JyafC%2FQzm2GjRRKxXTEbtXFiDBiI8o%2B4P5dZPxHPzvimXBphk2Z4kQnVPCDA%2BhePAAuGKUlzq%2FHJDOCWnl5jIpK%2BKcWtlHN%2Fx97ojgidWmZenoQdDA1vQZCiJQi7hkz%2Fjuwr70%2FD%2FUmYrQW0TJmm5URsAbal4UQfanUnvcllQ3e88goNlhAHhbI62i%2BGB1qT79mP3BhhGY06Ip%2BuH2tkIZRamzH6QUm960xh9yO%2B9%2BbF6tTf4vBZrEmUDkhOLjad1uDNbtUFkoJaRCWUfv0fI8AxDm17r7PNSSP5X4RDNxeSbdUS%2FcWMBeHcC61YMKNZg7fRS4lwhMfHhwzAtZhjpaQVL0naOc5oRrcFGXQdMgzF2NSwd13OsSMtuSOjt1ER5Wm9UVUCzK8RvF3cLY6wdjKqUzO9CX64G3m7Umk5lgB2Aq4vqSHDJgJjdO99d4Q%2B%2FJH3FM%2Bk%2FLOwumNytaF3iG5An7hVenNTHksL35caVdSvBQxooIkfisBNI3uLrt52WwtTkrqn%2FWGyB%2BJ2LE%2FBrN3GnfD3jiisdO2%2BH268tznPBL3bN8LxPYbYhYHTpgZwI9POTDsCyPl%2BejYRk7t89%2B8%2FrJZTlD7oPKOy4H6maVmDtRWI4l1feWWeMLvrtL4GOqUBe%2FbSHJtrG%2BHlHI88Gso0Qp7PC4slSAtE%2FitMI1pYKP0tvGI1hSizdcw2eYpq2dWdGC9bgWsCFukgipAcD60HZHtapXe3WIvI8OfB3oPmuy7dvDr1zrs2OBS9FRLG46zRnhqziqf1uVCH4hmhzcTY9Un2mguKc%2Fe9RZWHi3k%2BQ6ZbPUJjbU%2FuerTw7AyuvTGmMZiQM%2BNsUk2s0kpdkXk4xB7nJFXz&X-Amz-Signature=0366abe01cee3885b4fdbe8e56fddac86a1672f6e63ba32154a31dcc27b4bc43&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RELWOPFH%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDmhNj7aPAtLh8ZS64cTlNuKgMz0wjotuI9O0ECxZLN1gIhALUaA4sRuPzNZBDw6iQWRXZXhp0mlnX60VHvSz5Z5ldRKv8DCHAQABoMNjM3NDIzMTgzODA1Igw9wstqltXZpKuJo5gq3AM4bbTmAe%2BU3tHC8ycbFWmiCBYD%2FG8OThW87069CdC1Fkg6F62%2FE0f%2BVnZ456ti%2F1LLiPNyvNudY5FHEOr6z%2FbxdA2I872gOxMbbIaO01PlHOygs5wymetRARTVKC4Xg2M1X8FtqT55BT9R5J9m2dAsfXG7FHMERCajcJ4%2FDshv6CQNve38bIhFfd6GaiDYGd24hriUhbO5gjLrWk4WiUpyL9PdYcjkhjHvab5vyRIBZ%2B7wxCOUfiAzclobzpiJY3fDMB9XjfT9XRDnrtzv7KjklBKOZuFm2Xcqae1kHLK%2BjRlL9TxEiIgMc%2B%2FgNaKXfntK2iFFpq6BFEk9Ub%2FQ9vDUlfIr2q7iOAEH%2FO70gqtkxjewKJt3rnnqRy%2F2F7I2941kJQTNDLLAjGQwtjwhsFLIKGl6oFmpzjmv9xqZa88LjNRpYUZOg1eFYMq6RrGeiD30fN7qrcFgWOKSfo6LXv1sVKdy7ljTqXfxdmm9EcH%2FDj4vE0CGVMav1V8z7VA6pncgV2kqXsJGJ%2BdWkm9jMwY72MdAEdY905W3l5O0mJKOT1kEfdnXiEUVIADqpcYcPeFUjS8aNLTtCKV2hiaoKTID06qQ0CmqOg%2Fbq8dW92zxtUpVg9zFDvuisWNMhzDf67S%2BBjqkAdas2%2BgCFpZE0FMo6OMJAzUtI%2FHHuHulb4gb9PNm21GIJxRZRrQbPkW05XisfpaMME5UCOkwmq3n7TpB2UbzCRMQ%2Bq%2FsbBkq1Em8XMCnJX3UF8LHEgK6ZUBXJgdWNqwzfdlgljYrRyywvpLW7OUpKFVFcHl5HifV5VH2PU2itfB42skLFSBROqyMD70E9945PuquskX6WLnWa4ZZwId3Hgb01rMf&X-Amz-Signature=3ab5991e186ea861fa9ac5ad3117e9a7d3315cc2a6e11d0606f1cc7f91571266&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U545PQKV%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICdrvp%2BPgJPI4QsPvOxxaSS1NHwfWsyW7SSV%2FXxrFBaqAiAZdZ54wDyHKGTCh7bGvEOFRczGERRma%2B4Ag7MR5DZq4Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMgKvuarzssdTnPuU%2FKtwDqPSPHTVI5wlzc9rk8mGjIAIwHivNi2fy3J99lMt49gXH%2BlwgC4Otm5KdckAMC5XfMXOjHpY9VcBHPa%2FDSU%2Bcqlzzk8QZkgHLqz9LDLpXW82pyDZzw6S38rxE%2FFtTILqFpBItt3rCfaovqDwXIzPcwqBSUCHmyZKYUeJ0J1jxSy6gItCjos3Gsgq1CHm3HX85O9bAXc14D%2B1hIYc58WUQdkbQXpP9B6I%2Fewnmjuy7yOUTPvjvqIVskBPKeNiBk%2BE0ORRLyRsnJV7h98xnD3vdij0gjzjcsteiMabxgso1FmJE7%2B6BA2cC29p9ZU2ptAuGIJm7AorRXA2D9VHze%2F7W68YmynAumw42bCCGAg7%2Ffbu6VjwWnRUxluXE%2BatVv9hTRrC79Mqn%2BE2I%2FdFQN7Bv6tP29TXWjR1L3CTd5gbDT9S1gTGgsDHveTWT8N%2BLg9Jx8WeuWv5t0mWzOOjlqJiPCsb8KP%2BheLzHoXwexhch45y70JhTVryVW2D%2BT3yMuHuAMpjNq0hi92%2FV54N86ghhwzfa1xNqVjZlPP%2Fc18DitxYUOPX2V3fco9CvK2ZNhvhHx2leoLK1e%2F6KAfan7nFzrfsZX4awF2UJM6Kj6TBHNJq7%2BMGmmSxfJlxSCikwjOu0vgY6pgF44mLfTiB3kb6HE27z%2Fx64%2FEs62YIa0Tiha2GnhSYiA1x%2FxjHgpk82VU3TNktPYhr%2BTHjALEHOukUgOHVjCSRYhzzDnD24rYf7uHR%2Bg9%2FhvvMjuj3FqLs4GGtFwVgiJyIXldZkV055Q3CvnAedFp%2FJRWnxHX87Ubl91jwXkko5ZrI3hW8Pe3%2F6ALTuxWpCN%2BJiF4cuoq9HZCq5HVsJ1wuXZOgA4qiX&X-Amz-Signature=f030b2220d5206525be4657715e2e94b486369b52bc604c16b134de771bddc0c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK435FUZ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCROVjWBKqecLipHGVz6APFYlS0rF7XYxQ%2FScCKkwqU2QIgDMwVgpVIuxnDB690weD13ari9qTZOV3DASyJ8jyxnlAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDN6Km8nD9iEwQXhzfyrcA6S6JyafC%2FQzm2GjRRKxXTEbtXFiDBiI8o%2B4P5dZPxHPzvimXBphk2Z4kQnVPCDA%2BhePAAuGKUlzq%2FHJDOCWnl5jIpK%2BKcWtlHN%2Fx97ojgidWmZenoQdDA1vQZCiJQi7hkz%2Fjuwr70%2FD%2FUmYrQW0TJmm5URsAbal4UQfanUnvcllQ3e88goNlhAHhbI62i%2BGB1qT79mP3BhhGY06Ip%2BuH2tkIZRamzH6QUm960xh9yO%2B9%2BbF6tTf4vBZrEmUDkhOLjad1uDNbtUFkoJaRCWUfv0fI8AxDm17r7PNSSP5X4RDNxeSbdUS%2FcWMBeHcC61YMKNZg7fRS4lwhMfHhwzAtZhjpaQVL0naOc5oRrcFGXQdMgzF2NSwd13OsSMtuSOjt1ER5Wm9UVUCzK8RvF3cLY6wdjKqUzO9CX64G3m7Umk5lgB2Aq4vqSHDJgJjdO99d4Q%2B%2FJH3FM%2Bk%2FLOwumNytaF3iG5An7hVenNTHksL35caVdSvBQxooIkfisBNI3uLrt52WwtTkrqn%2FWGyB%2BJ2LE%2FBrN3GnfD3jiisdO2%2BH268tznPBL3bN8LxPYbYhYHTpgZwI9POTDsCyPl%2BejYRk7t89%2B8%2FrJZTlD7oPKOy4H6maVmDtRWI4l1feWWeMLvrtL4GOqUBe%2FbSHJtrG%2BHlHI88Gso0Qp7PC4slSAtE%2FitMI1pYKP0tvGI1hSizdcw2eYpq2dWdGC9bgWsCFukgipAcD60HZHtapXe3WIvI8OfB3oPmuy7dvDr1zrs2OBS9FRLG46zRnhqziqf1uVCH4hmhzcTY9Un2mguKc%2Fe9RZWHi3k%2BQ6ZbPUJjbU%2FuerTw7AyuvTGmMZiQM%2BNsUk2s0kpdkXk4xB7nJFXz&X-Amz-Signature=dba8cb41bb74ecdacd954367e51934407e8ab4b1925bc16c6447bdf1fe344f99&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
