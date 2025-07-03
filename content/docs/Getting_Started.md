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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDKDWCZI%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDRdNcn0TWszv1MmnLItGBhIIg6Usp3n4A%2BUFp9gXA7DgIgRYH%2FKN34LbduivXidmPjNN4CQMALmiPLgSzPaH%2FHKK0q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDEvb78XIFIk4iW3PVCrcA1SOSbmVON%2FOaEoY%2F7tpz8dhWYSG2gfDrpsK5g4WqL6FADyBKVx0PmZ4KGdci5u6wzvgTzrGlMTxDpE0LPr1KWZN9A%2FfEeKUD0tA%2BdN12JNBc5PeVg51oWbKQwdhuij42xWPxEJHXjqKQ2EFsS1ailuNYJ%2FTa%2FpyCrE8kRgK%2F7UwefxIJZ14a%2BQcT%2BjK%2BfHh0p%2BZD7REkRYjyeU0n5F%2BKt0TfwucHIkRB15jKrLBrZLw1r5sPIhXsSEjny4oYyk6rs0lQ%2FniweOVIeanzMhvM%2FMxTVQ%2BVxKAMJ5cxffsTbKxGs3GCZ%2B64T4MN0n6qvQb4DJVbRoajUZgleIHt7M%2BEThCPpGL5uUdxMUMotyxZ63MPOf%2B3fTzWpN2kdvZ46oDdPJG9vWoIRiHavO%2FG%2BuMQdY98VSBQx2FRwh8nds8zCsR2TEAWEgl4EGZxnQG5QtNsq2RdTIymvQxiMO7oSIL1kWCMpsldS8t6sqZYJGE3i0AEIPlEZE%2FRbZKddXoQYZ3B9JQCHwNN24e9y7QvfAYf7bJku8hWKeg836I%2F3ZZPYHcAxio4x1wnaUuRjANuoMuNGNqIJ3hatADEV9IfFVNjykWGgjH16Fphi9QtP5UK9cYtIxESP%2BNqCqQDu6BMLHimcMGOqUBCUoajmTxptkfkeNX7qLt9I44%2BKE%2FVjR3C5kx6%2FsZww0iurHmoYem27jM%2BihImVs8T2ZDUb4OGPG0YiATjzghnXbyXZLBtmAPqxhMTKjdQOA3ihaJCOY3T7jwwOFV8%2F52IuoUHf5z4%2Fqe0zPbT4eq4VCe0eDnLo2VxaZ5x3ZH4wGInvyHIalD2%2FdFGCZqm3%2BBAQbK2q0LYkm0grl37kYGhiHqd2rv&X-Amz-Signature=bcb071135dc9add19409b985c38ce5b9675f870deeb0f62ba8129728e1c5732f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDKDWCZI%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDRdNcn0TWszv1MmnLItGBhIIg6Usp3n4A%2BUFp9gXA7DgIgRYH%2FKN34LbduivXidmPjNN4CQMALmiPLgSzPaH%2FHKK0q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDEvb78XIFIk4iW3PVCrcA1SOSbmVON%2FOaEoY%2F7tpz8dhWYSG2gfDrpsK5g4WqL6FADyBKVx0PmZ4KGdci5u6wzvgTzrGlMTxDpE0LPr1KWZN9A%2FfEeKUD0tA%2BdN12JNBc5PeVg51oWbKQwdhuij42xWPxEJHXjqKQ2EFsS1ailuNYJ%2FTa%2FpyCrE8kRgK%2F7UwefxIJZ14a%2BQcT%2BjK%2BfHh0p%2BZD7REkRYjyeU0n5F%2BKt0TfwucHIkRB15jKrLBrZLw1r5sPIhXsSEjny4oYyk6rs0lQ%2FniweOVIeanzMhvM%2FMxTVQ%2BVxKAMJ5cxffsTbKxGs3GCZ%2B64T4MN0n6qvQb4DJVbRoajUZgleIHt7M%2BEThCPpGL5uUdxMUMotyxZ63MPOf%2B3fTzWpN2kdvZ46oDdPJG9vWoIRiHavO%2FG%2BuMQdY98VSBQx2FRwh8nds8zCsR2TEAWEgl4EGZxnQG5QtNsq2RdTIymvQxiMO7oSIL1kWCMpsldS8t6sqZYJGE3i0AEIPlEZE%2FRbZKddXoQYZ3B9JQCHwNN24e9y7QvfAYf7bJku8hWKeg836I%2F3ZZPYHcAxio4x1wnaUuRjANuoMuNGNqIJ3hatADEV9IfFVNjykWGgjH16Fphi9QtP5UK9cYtIxESP%2BNqCqQDu6BMLHimcMGOqUBCUoajmTxptkfkeNX7qLt9I44%2BKE%2FVjR3C5kx6%2FsZww0iurHmoYem27jM%2BihImVs8T2ZDUb4OGPG0YiATjzghnXbyXZLBtmAPqxhMTKjdQOA3ihaJCOY3T7jwwOFV8%2F52IuoUHf5z4%2Fqe0zPbT4eq4VCe0eDnLo2VxaZ5x3ZH4wGInvyHIalD2%2FdFGCZqm3%2BBAQbK2q0LYkm0grl37kYGhiHqd2rv&X-Amz-Signature=c289a48c0d53b2f25c1747b9e72511e846871d4a080c44fe0d36dbe3423e18c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDKDWCZI%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDRdNcn0TWszv1MmnLItGBhIIg6Usp3n4A%2BUFp9gXA7DgIgRYH%2FKN34LbduivXidmPjNN4CQMALmiPLgSzPaH%2FHKK0q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDEvb78XIFIk4iW3PVCrcA1SOSbmVON%2FOaEoY%2F7tpz8dhWYSG2gfDrpsK5g4WqL6FADyBKVx0PmZ4KGdci5u6wzvgTzrGlMTxDpE0LPr1KWZN9A%2FfEeKUD0tA%2BdN12JNBc5PeVg51oWbKQwdhuij42xWPxEJHXjqKQ2EFsS1ailuNYJ%2FTa%2FpyCrE8kRgK%2F7UwefxIJZ14a%2BQcT%2BjK%2BfHh0p%2BZD7REkRYjyeU0n5F%2BKt0TfwucHIkRB15jKrLBrZLw1r5sPIhXsSEjny4oYyk6rs0lQ%2FniweOVIeanzMhvM%2FMxTVQ%2BVxKAMJ5cxffsTbKxGs3GCZ%2B64T4MN0n6qvQb4DJVbRoajUZgleIHt7M%2BEThCPpGL5uUdxMUMotyxZ63MPOf%2B3fTzWpN2kdvZ46oDdPJG9vWoIRiHavO%2FG%2BuMQdY98VSBQx2FRwh8nds8zCsR2TEAWEgl4EGZxnQG5QtNsq2RdTIymvQxiMO7oSIL1kWCMpsldS8t6sqZYJGE3i0AEIPlEZE%2FRbZKddXoQYZ3B9JQCHwNN24e9y7QvfAYf7bJku8hWKeg836I%2F3ZZPYHcAxio4x1wnaUuRjANuoMuNGNqIJ3hatADEV9IfFVNjykWGgjH16Fphi9QtP5UK9cYtIxESP%2BNqCqQDu6BMLHimcMGOqUBCUoajmTxptkfkeNX7qLt9I44%2BKE%2FVjR3C5kx6%2FsZww0iurHmoYem27jM%2BihImVs8T2ZDUb4OGPG0YiATjzghnXbyXZLBtmAPqxhMTKjdQOA3ihaJCOY3T7jwwOFV8%2F52IuoUHf5z4%2Fqe0zPbT4eq4VCe0eDnLo2VxaZ5x3ZH4wGInvyHIalD2%2FdFGCZqm3%2BBAQbK2q0LYkm0grl37kYGhiHqd2rv&X-Amz-Signature=88b5959d12a9fb4959dfd100dac4e2a69e0ec2a719d9f54ed48ea9d383b5705a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XPEL6KS%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDXctr%2BCoNMCcNXiTXWvpeA2kruoeDeNgT8hQ2JrBLzcgIhAJ4b64TYVY6Gz4avTS7twTGRBQ%2B1SNiuhnefYuGXojwYKv8DCBUQABoMNjM3NDIzMTgzODA1IgxxZ3KRh7tQf5YJJGsq3AOseJOyfE3WZSL0LZPxKsGlGfDN44u4vAwIDhs9D0DH7e4sxnvDJwdplvw73dWHgynLj0nYJqr%2FztAO%2FtNnRIyR%2BxTqe0OBlGRsQW7XJNt9gzikQgAnL1Y7pMu%2FE1kS493Sm2KB9sT2xfn5Nl0EcqKH%2B8JfHaCRyGSdfjEI0r8AtcrzX4N2LyB5cLNUUow0rZ8x1zukjp%2F2nSbiWBpTb1Pda%2FudRee%2BCXeOMc%2B7GbnZpVjwPStEIc5s542zwskBVlb4hlBtfIyBgFoZtBmvKrID5d26lFZ4k2spDOH4STfwFMnKvYVT8HdiSBa1E6qaVez2%2FGH54h%2ByvJqGSu2fhaBESmrmjbKwLTXYmLOsbxXp25cKg%2BU5jO%2F1zBYft2dBE7suk3mFIo0Z2nMQkX4CIhq%2BDq1nb7GiaLEfVgupFiQA6Qr3ZldCvtf2GO3GNp1SkGObQteBJyVN8UYg6Br7534OAruY5H%2Fh%2Fh86ulQmxxfcv5HYS5YNvzmZaYuf8tklIpaMFMmMMpp1j%2BeSLP9yeLjpO1wLOXrq3vWTluihAz9aGU7rQ4KUV%2FSIuzcGMR2dEqB54%2FtWFOGBReWOixziswuDD1yuAf%2Fo5fSDfMvdNoFO8FtT13m%2FF2Xxx05ZEjCa4pnDBjqkAfaCNMSxLEiHZh%2B0a0av8Dag%2FsQpyrK90Xb2exN93KwjC7MOqYwmgoNc3W98Qt7xqtJYLtE0RDxV94AW4E6V9LJ0RNA4%2Fk7BkawsP05OoozlgjUlGcHoIwChjuQ%2Fs4bXm9xv807R69tOaCvz1XUceOOszJnDZl59J1H0EbW7KCBSgCU97Ui%2B3qkIuhtwbxQBOLCCPPnU0UYS0HmDNgu8qL0IK%2FgG&X-Amz-Signature=e1a2c7d717097202cf6e768dac0cd2d1c70bf594836097fd84de99b7242c36f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NVUDWJH%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIGHQ3VIyBu9icMH%2Fh%2BPI5cYR1O6BvZb7em%2BpcjmNz4nYAiBv15o5EmdYpsL1XwlMgHKdlG6GTqp%2BzMiRNnW4JL0wAir%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMqH0iHbbW5UgbCvYEKtwDulmWTHZ4qO%2FR6P3eFk5NdPBJ4dJSTUxpo42V2FXBfOgj82NGj2x4NexEVdC%2FaQuYU2NadKXaqKv%2BHK%2BDAabEdTrHe4L2Fm5JZ0P7KfOg3foFPn0INw4YFfRJwpuQqADnfdYQm7%2Fdkd6jgtEKe7UcxMc2fylkcL0wYGYjjIsUs7Q2TELVunlh8jvsf9pYMDhWkvnjYLqmEVISGVthJD8%2FBUHQccjOapVLoqTUw8tYAgQxSV8M%2B0BhsPbLpwTYzt77xhO7jIS%2Bs6J0jye9CzbbqBWxBE1Kp8gcy2ju%2Bjx9N4VWdutyp1auRSGyboOn0cC7UWBxUdoM%2FOUwctl8gdwFWeP9UecoMC%2BC8zQxM0e6Bo8Os44%2FPpL9GMHjI2x9o8byrGUDHEVGn47%2F08%2FoX9GYuzCHVl1oCIxMVXFHABnPkHNA2T%2BtLD1F0bubrR2ecW6cJUr9K1G1jfJBgwxW7UJZW0wF7NiS4c0T9EEgxbTAlgf07%2FUBfd9QwM9tleNxRr5EUpjKBxJviXoxK7ZaT0hqnAMwgVp%2BPlQzHrWEiHJ6U1zgbvl3N1BpDJfRplLlKh5t9XeLH8pYS5v7VB4IPQeg5PFJ65ceZKwGDA4%2BojeU5YtctJ1BT%2FOde7dSoZAwveKZwwY6pgFDyGfNKoKhKbKravqLPW4q07mDElloO5qRuMCYA403HNOOECUJUuApSqhcjVIIT0I56MunbfmF3mmxln6gvz4s1EAG4jC%2FPlcOka4SiRQFgQ0UBTBBc0Ua3POfPt0VU%2B%2FiXR5rXjsaoxxhY%2B8%2BT7XEf3EPYYp8oDXPFAdfOkChiytzOEJBmmGD4T1kSdIE0kyMe5IORqt%2BbDbh0N8ffPBQar%2BQD5mX&X-Amz-Signature=9ce05c8468d0a93c5e30502ec75ad7f665355936287bce82a3283cad10a4e6f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDKDWCZI%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDRdNcn0TWszv1MmnLItGBhIIg6Usp3n4A%2BUFp9gXA7DgIgRYH%2FKN34LbduivXidmPjNN4CQMALmiPLgSzPaH%2FHKK0q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDEvb78XIFIk4iW3PVCrcA1SOSbmVON%2FOaEoY%2F7tpz8dhWYSG2gfDrpsK5g4WqL6FADyBKVx0PmZ4KGdci5u6wzvgTzrGlMTxDpE0LPr1KWZN9A%2FfEeKUD0tA%2BdN12JNBc5PeVg51oWbKQwdhuij42xWPxEJHXjqKQ2EFsS1ailuNYJ%2FTa%2FpyCrE8kRgK%2F7UwefxIJZ14a%2BQcT%2BjK%2BfHh0p%2BZD7REkRYjyeU0n5F%2BKt0TfwucHIkRB15jKrLBrZLw1r5sPIhXsSEjny4oYyk6rs0lQ%2FniweOVIeanzMhvM%2FMxTVQ%2BVxKAMJ5cxffsTbKxGs3GCZ%2B64T4MN0n6qvQb4DJVbRoajUZgleIHt7M%2BEThCPpGL5uUdxMUMotyxZ63MPOf%2B3fTzWpN2kdvZ46oDdPJG9vWoIRiHavO%2FG%2BuMQdY98VSBQx2FRwh8nds8zCsR2TEAWEgl4EGZxnQG5QtNsq2RdTIymvQxiMO7oSIL1kWCMpsldS8t6sqZYJGE3i0AEIPlEZE%2FRbZKddXoQYZ3B9JQCHwNN24e9y7QvfAYf7bJku8hWKeg836I%2F3ZZPYHcAxio4x1wnaUuRjANuoMuNGNqIJ3hatADEV9IfFVNjykWGgjH16Fphi9QtP5UK9cYtIxESP%2BNqCqQDu6BMLHimcMGOqUBCUoajmTxptkfkeNX7qLt9I44%2BKE%2FVjR3C5kx6%2FsZww0iurHmoYem27jM%2BihImVs8T2ZDUb4OGPG0YiATjzghnXbyXZLBtmAPqxhMTKjdQOA3ihaJCOY3T7jwwOFV8%2F52IuoUHf5z4%2Fqe0zPbT4eq4VCe0eDnLo2VxaZ5x3ZH4wGInvyHIalD2%2FdFGCZqm3%2BBAQbK2q0LYkm0grl37kYGhiHqd2rv&X-Amz-Signature=f227e60f62287629677d6d8337a999c0042aa356eea9980dc8b041108e8ae971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
