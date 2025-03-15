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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634NKRNR6%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACr%2Btupn5kiUtTyXu1J3rfTSHwQh7kjvQ9fRapfxTkWAiAlzUcmG3w4PfqNwMchdRDel0OsK6y%2B30le1bLn22VYsSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMu%2FODkpFdn4%2FTe7yBKtwDewlNiNCsjrkEWpoBs8pSwyNG8bVFf04f%2FKISsM0C2%2BlBcPLNQC%2Bdr99mML%2FXit%2B6eYyQfKv3iqa4a8n2nEMMFswjzJUfKiE5vL%2Fl1O4srweQThN%2Fpgs6efCbZuGO8IQLQjCgYwOp19kA2lwU5lCvJewrSxfbrh7bsWxAEFy1eaQI633s0qOZhZJP2lzZHICpb7CAppING6GrvYiay%2BynA1Royvy%2FARMEu0zPkb0p5N3smnu9%2B1FpB214AvIy2gd36VZguivR8DArkPTY2uCWYClDuUVIgiCgX%2FFM%2BNsCoqIeCsj98sl7zPSPo2Ho6SH49diXmDfzw81WpHhT64EizHBCzZqGr3RHUIv%2FxuzOB0jHZUb9r001stgLbhpkSXIyKTcgTJTw4GZRv9PXzcMstklK%2BakBh3Z0oMbkzXoBrjSHs1XRkoV90bCC6TiiFJxKaK1sYAl42A3xpcNeE%2F%2Fy5A1Qv3mriWTg6cQtREwtx%2FE8TP26EiigxgH2jc3Vd5%2Bh%2FdD2yDXYKwu9l%2ByQxNj9FlHauEcC%2B2HbAAqZ%2Ff7QrBZbvqqPKXpoqU1dbp5n0VGP6KVXW3zS5kH8DAXb1ThtxVUQNiuoiC6bGanw5apbJ%2BICfliwdaH%2FIHec7qow89DVvgY6pgH2eaFoLnQs%2FgT4PyhzPU2DNjogJ4WhX2j8mDXowzI48xexmhmlUAubkM6gyV9hfVTuhlMXjcCopYC9PF2h9Z6bpx6lmJj9PSLxmWC0I8TERUzWZrIvyDHk1tpC2SX1T1gAn8ozbIUYgGWy0zFzyvO7uIdo4wUsHKrWeEM2dvy50LzIp%2F0diY9kv2fW32YM3KLTTkfoGf7t4vhhXghg3YnOA1SDrchI&X-Amz-Signature=099fe3272eea8abf63189cc1fef15ae5df40fba0b4871a9fc9655639fca66e57&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634NKRNR6%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACr%2Btupn5kiUtTyXu1J3rfTSHwQh7kjvQ9fRapfxTkWAiAlzUcmG3w4PfqNwMchdRDel0OsK6y%2B30le1bLn22VYsSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMu%2FODkpFdn4%2FTe7yBKtwDewlNiNCsjrkEWpoBs8pSwyNG8bVFf04f%2FKISsM0C2%2BlBcPLNQC%2Bdr99mML%2FXit%2B6eYyQfKv3iqa4a8n2nEMMFswjzJUfKiE5vL%2Fl1O4srweQThN%2Fpgs6efCbZuGO8IQLQjCgYwOp19kA2lwU5lCvJewrSxfbrh7bsWxAEFy1eaQI633s0qOZhZJP2lzZHICpb7CAppING6GrvYiay%2BynA1Royvy%2FARMEu0zPkb0p5N3smnu9%2B1FpB214AvIy2gd36VZguivR8DArkPTY2uCWYClDuUVIgiCgX%2FFM%2BNsCoqIeCsj98sl7zPSPo2Ho6SH49diXmDfzw81WpHhT64EizHBCzZqGr3RHUIv%2FxuzOB0jHZUb9r001stgLbhpkSXIyKTcgTJTw4GZRv9PXzcMstklK%2BakBh3Z0oMbkzXoBrjSHs1XRkoV90bCC6TiiFJxKaK1sYAl42A3xpcNeE%2F%2Fy5A1Qv3mriWTg6cQtREwtx%2FE8TP26EiigxgH2jc3Vd5%2Bh%2FdD2yDXYKwu9l%2ByQxNj9FlHauEcC%2B2HbAAqZ%2Ff7QrBZbvqqPKXpoqU1dbp5n0VGP6KVXW3zS5kH8DAXb1ThtxVUQNiuoiC6bGanw5apbJ%2BICfliwdaH%2FIHec7qow89DVvgY6pgH2eaFoLnQs%2FgT4PyhzPU2DNjogJ4WhX2j8mDXowzI48xexmhmlUAubkM6gyV9hfVTuhlMXjcCopYC9PF2h9Z6bpx6lmJj9PSLxmWC0I8TERUzWZrIvyDHk1tpC2SX1T1gAn8ozbIUYgGWy0zFzyvO7uIdo4wUsHKrWeEM2dvy50LzIp%2F0diY9kv2fW32YM3KLTTkfoGf7t4vhhXghg3YnOA1SDrchI&X-Amz-Signature=a7d1ecfd2d55dc3d3609e3e3878a147b86eadddbecff9e339338d3dfd3e26dcf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY2G5U3K%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxSN7PpksX9Z1eWrrOMygly%2FzB1sGdqjNMiC0Q0prQdAiB1gFlLQ%2Bg0At0MTsSMNKf8sIvCpDgno5iPoghQ7FqEVyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIM5ESKSk%2Fy3xdM79OQKtwDqAjKJxfYbe5OffJanQVhRI3wsvg88QhWWecIdQF8nKIHcAVhG%2Fr8tXBXXkhnGyXKSbslk6SHvzvL2McbvO%2Fa644BDto2V1k1m%2B%2BGdNUW64x21QTgfg34E5cWP5udFJN%2FgCA7TGcQc2%2BCbsv58JMhW0C58QUAuRDHCiS2mvaKhzYdQ8tNJGTq%2Br1cStkCCgE0wD1U6jL1b5OQbYDpMJGTeTyfCZZN9tnMJa%2F5I3H%2BXg34nvkRQE7vppLadnP0g3Jtmut3AD2HzmjbjuwUQJSYegzf6anAusIgaAlhb0F4KEp4lYjqONCZrnWWhON7laLi3E636TKaAZPgsLV7Lj38Cyuh9Hs%2BBg%2BA9cJvXoNM8NV1SUNubRFGYZr7%2BGO9xRy916q%2BQtYCGrlhGoSo2%2F7kEg3MeOxB5qzOWkfIthfDGrmcKxoVnjZfg%2FC7ejfFg1%2BODmCBNeIos1PIT%2FNn%2FBVdxrs8rUUl0VPfnTR0%2BfJUVXthygEXFY4wYEbqN7wMcb2iuxQjjVavmn5FheafuP8SkIn8tzyllnIqEbOl%2ByhH4%2FeQ22PqWuSmX7OjECctjjLcnm3tuXcJLA1p%2FACeruR4p8UD7pA55oVuDF1wKFN65aSlLUnCjAPV%2BVTBY8kw69DVvgY6pgEcf3OAOcq9BlaFClHsL%2FqnLBp8mJ4Y2xg5kktbRVSZxEqyj4lhH5ASHVuZSbKUdUkBmIcw5w%2BfxLTc1h0arKPP2NCzvbEj5mW0oTWKqQ9eKVi4HtOlNlD5DsC6z5fK7EeqcAyV25Hw6h44A8S3XCkuvUQTstDOb%2FKlV4XWnav4Wk%2FGXH3%2B3x74ukwTA5DLOCXjj%2Bbl1Zqdcm%2Fw%2F7RMao3Swao9z1y3&X-Amz-Signature=42f7002136c994098a0076b15a180f047bc2c5a6b505afe08740da25c33ededf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666THB22WD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3P%2BFRLSbA0JhEc6Fq6sFw0IxhIhfQ0N65CYQZcadG5AiEA%2FvwjthIDkT9YrD41GSfZFV4u93Wt%2Bil0NSiKyd69nv0q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDICZVse3v0LimVJhQCrcAzDDqPNOiObAeGZ6U1ljqQjwMIg6mMWFTMYMB7BJmYR4EUTucAWUwlgLD%2B24jmz6dyGCEExEacQE2C8sgKCzSLKNJ7W26%2F6cbzfiQVMOob3aBlM12YtyJr8Y4EVwEaMzakL7RHaiTRLB9Cr0a02Q8Y1zGlQThzb4%2FHSQu7u0rqJYhzcGD3EvpLOAZQG89GQ2TKw3Qd0jLNTshqoSOemf%2FfR1UI9J%2BfC4WZtaCWwuR68uZbwAOMjkjWI0pqvuQLoezxmgEK2OQtN1aaUa4vJ6h1spzT474IC%2FxDviE2G8RuF5SO1pzJbU8EV%2B5IKP7DLqCC3lw8lA6eHtHuTC8z%2FY4MGhQC3zBQxJnCIcBeI7n7vRib9KDoX8DuoBHDfevQT8MOwFKZkxr8edI06utB7%2BqJxmR1UUgmBn1yFQS4ByKqPOPyyQ6ByvjUCllu2wR%2FhHg6vCpaJBHh7J6%2BsRHj6SDUUTzZPFx9jo%2FYN6CMOS63SG0dWFZa7L6yt2g0cFE%2B2fR1zAGiBmqk1B024Q%2FsR%2F9ySZlbZLZ8jRVao2Lis0%2B2ZFnAQuVIfXcYS%2FSNceHYyXHeIUzXPS6ZS6c3EqZDbo4xRN%2BhgXbsSo2O%2BkA%2FYg%2BMJx%2BxMi72NiJP4QKm7eMMPQ1b4GOqUB9gVrd4n%2BnUV4brSHKdRuciZIql3w%2FAKhLZhyh%2B9%2FQcIS15mmC8Mu1gdfM%2F0QJXaOVCXXuaUU4n89Cmy%2F2rXFTn%2BAoaJ8laKJN3XF%2B2%2FGXw7c6YUTn6dD8apgsdlUWsi60sfsD0Q%2FEaxaagpGKk2WiONLyYhcqVeB2eBsSygasWLhlzsVcbFP5QunNHMOrlzJwPTa9GFKaTAGjfXpLVoA%2BSYLkpTI&X-Amz-Signature=ee15764bda88c58e0fee3f158ac934dad9ff8ff2ed4b2309d0459c907feb4504&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634NKRNR6%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACr%2Btupn5kiUtTyXu1J3rfTSHwQh7kjvQ9fRapfxTkWAiAlzUcmG3w4PfqNwMchdRDel0OsK6y%2B30le1bLn22VYsSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMu%2FODkpFdn4%2FTe7yBKtwDewlNiNCsjrkEWpoBs8pSwyNG8bVFf04f%2FKISsM0C2%2BlBcPLNQC%2Bdr99mML%2FXit%2B6eYyQfKv3iqa4a8n2nEMMFswjzJUfKiE5vL%2Fl1O4srweQThN%2Fpgs6efCbZuGO8IQLQjCgYwOp19kA2lwU5lCvJewrSxfbrh7bsWxAEFy1eaQI633s0qOZhZJP2lzZHICpb7CAppING6GrvYiay%2BynA1Royvy%2FARMEu0zPkb0p5N3smnu9%2B1FpB214AvIy2gd36VZguivR8DArkPTY2uCWYClDuUVIgiCgX%2FFM%2BNsCoqIeCsj98sl7zPSPo2Ho6SH49diXmDfzw81WpHhT64EizHBCzZqGr3RHUIv%2FxuzOB0jHZUb9r001stgLbhpkSXIyKTcgTJTw4GZRv9PXzcMstklK%2BakBh3Z0oMbkzXoBrjSHs1XRkoV90bCC6TiiFJxKaK1sYAl42A3xpcNeE%2F%2Fy5A1Qv3mriWTg6cQtREwtx%2FE8TP26EiigxgH2jc3Vd5%2Bh%2FdD2yDXYKwu9l%2ByQxNj9FlHauEcC%2B2HbAAqZ%2Ff7QrBZbvqqPKXpoqU1dbp5n0VGP6KVXW3zS5kH8DAXb1ThtxVUQNiuoiC6bGanw5apbJ%2BICfliwdaH%2FIHec7qow89DVvgY6pgH2eaFoLnQs%2FgT4PyhzPU2DNjogJ4WhX2j8mDXowzI48xexmhmlUAubkM6gyV9hfVTuhlMXjcCopYC9PF2h9Z6bpx6lmJj9PSLxmWC0I8TERUzWZrIvyDHk1tpC2SX1T1gAn8ozbIUYgGWy0zFzyvO7uIdo4wUsHKrWeEM2dvy50LzIp%2F0diY9kv2fW32YM3KLTTkfoGf7t4vhhXghg3YnOA1SDrchI&X-Amz-Signature=88839942c6a39ed0ca9a1ab556ae16b13d43f1efd1a3a9ce086668f81fb41b7c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
