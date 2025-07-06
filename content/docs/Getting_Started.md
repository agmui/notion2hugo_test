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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSDPWQPQ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIF2R%2FJBb%2FKwYp1oSNdaosGZiVsxhrUqF5kgJKGaXKIgOAiEAr6CNFnM4DF8WaRr0VOcXvfQ8AnKHGy9Ar6rQi6YoHz4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBNuhbNG8j0jZSJKVCrcA1mJkrwdHcYFJVLdvbqDMtQEIgVk5gwPWpoRZQCF6f52Sd0zsTECnD5Ty9o9%2Beqw5iCgiB415gcxWmCe0hEHzaEisCXCSXCEQfuMi%2Bm1MVNHk1r7%2BAMxOSgBReuOUROwQAKIeSrXJDTLXAaK9m7btGlPTIoryjQ0ccTH4gM%2FV2R6DKd17leN%2BftkZReQ8pN2p4LcfdyCW1Rag5c%2Bna%2F92FtwFnihxdpcfOc1tZuop%2FZ%2BkPTvCw0ecqqkDzfP9QK23cVJ1NsvZcSDyinhCmXg4ybasLnQxAIfa%2BWdpbjge%2FUUo5QNEf8wf%2F6zKVCOmOaVKNFwSJzA6VmkcbGHbGqM4hjSnxvHJiXdAMYeBy5LKAOiU7lXDdpylYvxibBy%2FXPqVupkEDw0%2FGutUsRpGcOStLH41dnEQwE%2F8dbZ8ne55WTiEmRLIY6vZ2gfxqFi3VKGFmZHzq09Lx0hi5RwK6B3mtOl8NKNSYV%2FLB5sVsFaRH3lmpWwtbxJhDOp8EPBf8or28v6kdQ1pO1%2BH4%2FwW4bx64e8mYTCzKOK9WyZBBbgmrnY2FUb62SNRbXuM8HyVGjztIM40IIVvOKXbeOMv5c2%2FnKEPhOz6fNLn0vvBuImMoP3ueoE6GFfiTPU%2B3gEMK3%2BpsMGOqUB%2BnCCsN476H0MepJgPnAymQEsEBTHGrDGyK6KkD9bTOat4rRea2YbZf7l6JV8mmMnEOsL2hC0sU1iLcbjaVkI35DkFCI4VqJW5fvaVjYFAOmw%2BSfawUXk2feGTXN789JvVaMZBMZTgwyxYQXDbzbCIthmdZ%2B6iG%2Fe05fznX8KQJDHclU5njp2VxT38YYZeAAVXybbMqRNHcmvszzXiv%2BJ1RBVNTok&X-Amz-Signature=c3c782114d807023c5eae87c7b5fef5c8bbf5cddd9a5517e8f363ef3caa5469a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSDPWQPQ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIF2R%2FJBb%2FKwYp1oSNdaosGZiVsxhrUqF5kgJKGaXKIgOAiEAr6CNFnM4DF8WaRr0VOcXvfQ8AnKHGy9Ar6rQi6YoHz4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBNuhbNG8j0jZSJKVCrcA1mJkrwdHcYFJVLdvbqDMtQEIgVk5gwPWpoRZQCF6f52Sd0zsTECnD5Ty9o9%2Beqw5iCgiB415gcxWmCe0hEHzaEisCXCSXCEQfuMi%2Bm1MVNHk1r7%2BAMxOSgBReuOUROwQAKIeSrXJDTLXAaK9m7btGlPTIoryjQ0ccTH4gM%2FV2R6DKd17leN%2BftkZReQ8pN2p4LcfdyCW1Rag5c%2Bna%2F92FtwFnihxdpcfOc1tZuop%2FZ%2BkPTvCw0ecqqkDzfP9QK23cVJ1NsvZcSDyinhCmXg4ybasLnQxAIfa%2BWdpbjge%2FUUo5QNEf8wf%2F6zKVCOmOaVKNFwSJzA6VmkcbGHbGqM4hjSnxvHJiXdAMYeBy5LKAOiU7lXDdpylYvxibBy%2FXPqVupkEDw0%2FGutUsRpGcOStLH41dnEQwE%2F8dbZ8ne55WTiEmRLIY6vZ2gfxqFi3VKGFmZHzq09Lx0hi5RwK6B3mtOl8NKNSYV%2FLB5sVsFaRH3lmpWwtbxJhDOp8EPBf8or28v6kdQ1pO1%2BH4%2FwW4bx64e8mYTCzKOK9WyZBBbgmrnY2FUb62SNRbXuM8HyVGjztIM40IIVvOKXbeOMv5c2%2FnKEPhOz6fNLn0vvBuImMoP3ueoE6GFfiTPU%2B3gEMK3%2BpsMGOqUB%2BnCCsN476H0MepJgPnAymQEsEBTHGrDGyK6KkD9bTOat4rRea2YbZf7l6JV8mmMnEOsL2hC0sU1iLcbjaVkI35DkFCI4VqJW5fvaVjYFAOmw%2BSfawUXk2feGTXN789JvVaMZBMZTgwyxYQXDbzbCIthmdZ%2B6iG%2Fe05fznX8KQJDHclU5njp2VxT38YYZeAAVXybbMqRNHcmvszzXiv%2BJ1RBVNTok&X-Amz-Signature=202ebe0bbae4169bc9ecfebeae2d1c9fb23c42db5b8cad348f1c0c841fb0e298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSDPWQPQ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIF2R%2FJBb%2FKwYp1oSNdaosGZiVsxhrUqF5kgJKGaXKIgOAiEAr6CNFnM4DF8WaRr0VOcXvfQ8AnKHGy9Ar6rQi6YoHz4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBNuhbNG8j0jZSJKVCrcA1mJkrwdHcYFJVLdvbqDMtQEIgVk5gwPWpoRZQCF6f52Sd0zsTECnD5Ty9o9%2Beqw5iCgiB415gcxWmCe0hEHzaEisCXCSXCEQfuMi%2Bm1MVNHk1r7%2BAMxOSgBReuOUROwQAKIeSrXJDTLXAaK9m7btGlPTIoryjQ0ccTH4gM%2FV2R6DKd17leN%2BftkZReQ8pN2p4LcfdyCW1Rag5c%2Bna%2F92FtwFnihxdpcfOc1tZuop%2FZ%2BkPTvCw0ecqqkDzfP9QK23cVJ1NsvZcSDyinhCmXg4ybasLnQxAIfa%2BWdpbjge%2FUUo5QNEf8wf%2F6zKVCOmOaVKNFwSJzA6VmkcbGHbGqM4hjSnxvHJiXdAMYeBy5LKAOiU7lXDdpylYvxibBy%2FXPqVupkEDw0%2FGutUsRpGcOStLH41dnEQwE%2F8dbZ8ne55WTiEmRLIY6vZ2gfxqFi3VKGFmZHzq09Lx0hi5RwK6B3mtOl8NKNSYV%2FLB5sVsFaRH3lmpWwtbxJhDOp8EPBf8or28v6kdQ1pO1%2BH4%2FwW4bx64e8mYTCzKOK9WyZBBbgmrnY2FUb62SNRbXuM8HyVGjztIM40IIVvOKXbeOMv5c2%2FnKEPhOz6fNLn0vvBuImMoP3ueoE6GFfiTPU%2B3gEMK3%2BpsMGOqUB%2BnCCsN476H0MepJgPnAymQEsEBTHGrDGyK6KkD9bTOat4rRea2YbZf7l6JV8mmMnEOsL2hC0sU1iLcbjaVkI35DkFCI4VqJW5fvaVjYFAOmw%2BSfawUXk2feGTXN789JvVaMZBMZTgwyxYQXDbzbCIthmdZ%2B6iG%2Fe05fznX8KQJDHclU5njp2VxT38YYZeAAVXybbMqRNHcmvszzXiv%2BJ1RBVNTok&X-Amz-Signature=9f34a5d0256cc56907e82aac083cbdfd5d6d5b8a2540475f1f0435a2fffb5e37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663JZKJS7%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC2QCyV3f4OIe%2FDXRRye6UOvXC8CO0p%2FxRmJ6IN9P26AwIgIej2Mu1poUY%2F1UsOIbK9FCqL2rPW3xbd5FgOsuFDc0Yq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNrWCYxMsgQwDzjMHCrcA%2FTINCw%2Ba3E0jJNWxIabSaABJPIYNvc673TlGYYjIz87b83Mazjr54DW93h9yCAlM3D2DX0Xu5oKjtzPXS6GtfMmXN0yN7NuXeOPSChYgkPzqfZHKr%2F0qSRbIyuyqa6FydUvgXiWvgxADn5rRN6Q4Ba24NtNBpB9WLSFjD3b4MXTnFXghnV1PZDR63GBVZ%2FKiec0YbjOgMFXVAbOH2rphM%2Br5WJCzTyh%2BVB1XvK3r6lxLcJPVPMqkdTRrAqlktaGdKiIzJdL6SuEadPa5Cxu0jfo2bbINmzcVqDkDCO4Yuc7TVc9MksRD57k6bNFfNI2ef7dLDSE5kdhddVqpqtI3eLI%2BZdVuQWimeh9xZwaNusldSQXS%2F1C6yA1OhQNqTM93U5ZV%2Be07o9u0Wd3BGOaQKj08H94zRRVaF1M9Pl3IXtZOCaPrcyVtEjpm34BVFPIjAnODcLCZdPkkT21oEwWG%2BBCjx4hoNQ8TXL9JVqQhVWNVrgJnat4SF0UsUZKfH0CUhOv93EanrPAqyLOaxV2LsDFvCnFW0fm6as6rrF6Hm0N%2BmXtJy0NWIVUEcJnGSLxM3vhR7T3RIQ2sVaY2cxzyc6l6cfoehCzqYhXUIsbL9UaysqXAL3KwR%2F2rRBNMIuNp8MGOqUBXN%2Bu6RP4sckYI89kW2ukEZC8lRhFhdZMZ7eg41QKfN2VNpOAkKDOO1StowX9fxJDwbVNRZL%2F%2BgEC%2Bdt11oYNuVyxgkxSM1OQ82rZc7NPz9Ez5IqJVQPlpWJry5luqfnrRgU6hwgi5qQI%2FZatLe1l7AVb7iVuOy0YyRLoWpoS1sCcpWm98sgnPzWzVyGBx%2BYQQr3qTqaWtMCLwbD0ihdzcvOwwtAq&X-Amz-Signature=c7cc070ba30448adc9bd34b7a4f972ef67905e92ac2577eeaa0388eec9816919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XX7J2JJ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCiyoVBWfu6kIQLGYXJb9MFxqoHs0jxjaWlE15xQsWjagIgWVbf581P2UbgidNV97qlotsJPn8NnuArtWiuT0U%2BZIAq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNSvr7087cXmGWpN2ircA3nEFEORSJuHebjRnBQpGBlTcaTyWgt92BGGxGeZbJo1Pgu8vUD6kAP51N8lrXuJeY6uk9EA1Aw6efDZsZ2GLNf2Yj%2BNliGQ0LERmhoDdHh5pkkpm4X5HO00KhPz42DRJuetCZ%2BiKhK8FGEXeN2du%2BUWU%2BIiaSB4vU%2BETf44WqvfY%2FlnV4bVuJoEh5cXwPMfpuqNZGqhRHqVsIhlJw2f2iQWmZ2J422u87F5tyCkQikv6lmHpIVzZCtQMU0%2BLhfnGzlSLQjMJ3debtGZeXWvUYjNfweeh%2BY2QoyzPWv1PzlPyzMxdZfKeLa8LUfr9RP0WAitrOcNopoL5oa4QyRpYzG7W9nLULqYoEACpOgwZMmWQasE%2ByKGPRmEwaL656p3IauVkX51RSVA9fsg1jp939ikfWGwbVzKL6kihPsjfRBHX7xxG6439%2F3uPiZECu4vVFBqFPncOJ1thuwSzNPu5FHCnG6R%2FXBOPWh%2FgOsVNS6x68wYJV8guxYOpqWT1tUksKBiepS0pl9AxHtBdVUNW9KRSmKk6ThVP1vsVGh%2FmX0zhMW58OdvqLGKEddu2hiZLpZ5p43aeSJXVQJj9Q4xnP7ssa3uBQ%2Byw1%2FIvPM7PaZ1g3sdSxjrSpMpGzhaMIqXp8MGOqUBqEswlhCL%2BUarAtno5E%2BK71dKazP0QU3j7upFCDi269Mm4Nb66EGaI7f8vkyJRf9KF1X53jtjoCBhzsNWVjDCBoN3ECZIeqp9M6PCX8L06UjJAl2f%2FNEY%2F5SHv4TGiXy2Xl9zdc4OfCePXJlQsW%2Bw6nKkZUWkHiuB1QyXvi9hL39a3zBVdP8qCcP089PFDswWm375wQieWSxs7L3gSV27YweyN0OJ&X-Amz-Signature=a1f146f590bf49f13fc147e7160301770d5d16eb3cf2e4d8bc585ec8d6576655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSDPWQPQ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIF2R%2FJBb%2FKwYp1oSNdaosGZiVsxhrUqF5kgJKGaXKIgOAiEAr6CNFnM4DF8WaRr0VOcXvfQ8AnKHGy9Ar6rQi6YoHz4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBNuhbNG8j0jZSJKVCrcA1mJkrwdHcYFJVLdvbqDMtQEIgVk5gwPWpoRZQCF6f52Sd0zsTECnD5Ty9o9%2Beqw5iCgiB415gcxWmCe0hEHzaEisCXCSXCEQfuMi%2Bm1MVNHk1r7%2BAMxOSgBReuOUROwQAKIeSrXJDTLXAaK9m7btGlPTIoryjQ0ccTH4gM%2FV2R6DKd17leN%2BftkZReQ8pN2p4LcfdyCW1Rag5c%2Bna%2F92FtwFnihxdpcfOc1tZuop%2FZ%2BkPTvCw0ecqqkDzfP9QK23cVJ1NsvZcSDyinhCmXg4ybasLnQxAIfa%2BWdpbjge%2FUUo5QNEf8wf%2F6zKVCOmOaVKNFwSJzA6VmkcbGHbGqM4hjSnxvHJiXdAMYeBy5LKAOiU7lXDdpylYvxibBy%2FXPqVupkEDw0%2FGutUsRpGcOStLH41dnEQwE%2F8dbZ8ne55WTiEmRLIY6vZ2gfxqFi3VKGFmZHzq09Lx0hi5RwK6B3mtOl8NKNSYV%2FLB5sVsFaRH3lmpWwtbxJhDOp8EPBf8or28v6kdQ1pO1%2BH4%2FwW4bx64e8mYTCzKOK9WyZBBbgmrnY2FUb62SNRbXuM8HyVGjztIM40IIVvOKXbeOMv5c2%2FnKEPhOz6fNLn0vvBuImMoP3ueoE6GFfiTPU%2B3gEMK3%2BpsMGOqUB%2BnCCsN476H0MepJgPnAymQEsEBTHGrDGyK6KkD9bTOat4rRea2YbZf7l6JV8mmMnEOsL2hC0sU1iLcbjaVkI35DkFCI4VqJW5fvaVjYFAOmw%2BSfawUXk2feGTXN789JvVaMZBMZTgwyxYQXDbzbCIthmdZ%2B6iG%2Fe05fznX8KQJDHclU5njp2VxT38YYZeAAVXybbMqRNHcmvszzXiv%2BJ1RBVNTok&X-Amz-Signature=912841d8aecf23d6c243b7d65d5bc759367f240aaf50b645afb360fe09288b1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
