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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVMPQOW6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBL517skCMaqh453PLGNiLHkVxMTfN%2BRxhCO%2BVfLY6YAAiAPDj7wUXpytkDgXiafEDb7OBvXU%2BgIePxguMZCRNBvUCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIM%2F1Z6iUzxHs3kUL2pKtwDgQVVNzRS47U8nTlqVf2kSbW9nvIqgIfzmhMUrwK11tgWcclpe6DgpQEPB6ORw%2Bx%2BPLbWGUDgcJqQPlLOWM1%2BrKCIiBEJ88AMCKeZSuxFfDEU4rd%2FzZL8FBOzGqUOVJxsamiPSLGEJgo4QSj%2BnFztD0H6Ie02%2FfQD9Gt7Ngcsjbfy1NV6h%2FOiOOM6mLdapUGXQ4tOkekIERzDcxhuM5bxKVhB%2BxQ%2F1LcjqL%2Fq2QIfo1qjOHMQKcjGs9N911IM9B%2F7Bt8LQ4HkiLt0QN5wy7fjNTnkgSe%2BLlHTrMTWgm%2FaGgn%2FdA5MJOM0nYaE35iHKUk2Y%2BdNQHEkA5DpMHbhcqP283dPGiR4c7%2BK9xkZrqJacYpcYVgOCMwvdRR3xlvymYVJoubDOifsHvC3vRiPaxKJAKGpLmZC0F3n%2F8vDcgyNedXz1WdVVAKQGGJ%2FR52RjesuZ%2FWuBTd4NdCX1iRF%2F11k%2Bu%2FqASO6uyEzmdjKbXQAQeJmQDZYQmXuUKUq5sghYe4SUEUCSWrrwjEmx5muhe6uZ4kVNxv1YEhMrKkFGzVMKd1MUzhC5a4S9WCSQHEXmebxFA6vCl%2BXs%2FW0ChY4AxydrD3I2gJKDfOWDJdTQK7haDwYYbQiGfjNiK7MSu0wzNr9xAY6pgFvXW8hXbXCdYxqU4BGRUzyxjU1azqz9z4keKyRpJ85rm9sHL4WQQZs05z8KeKZKooCa%2Ffk%2FQQ2oUb3zShsxvcUh3mDdLH6GN4NPLGSptBlAQdh7ORTE75yxN0mn2%2BHMZsbqeDWsRA881CtgK1%2F8MPW%2FOQI5clsDMoNB8CS8h3yeRHY3c4dvLfY3Q073AzjbjNCtJ7dTPqCVpOsKzxiBRjdO44A9fIx&X-Amz-Signature=a9ff3b034f8f94ccf10e78b847a89790478a5e62dc44fd131c84c5cfb6e22bf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVMPQOW6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBL517skCMaqh453PLGNiLHkVxMTfN%2BRxhCO%2BVfLY6YAAiAPDj7wUXpytkDgXiafEDb7OBvXU%2BgIePxguMZCRNBvUCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIM%2F1Z6iUzxHs3kUL2pKtwDgQVVNzRS47U8nTlqVf2kSbW9nvIqgIfzmhMUrwK11tgWcclpe6DgpQEPB6ORw%2Bx%2BPLbWGUDgcJqQPlLOWM1%2BrKCIiBEJ88AMCKeZSuxFfDEU4rd%2FzZL8FBOzGqUOVJxsamiPSLGEJgo4QSj%2BnFztD0H6Ie02%2FfQD9Gt7Ngcsjbfy1NV6h%2FOiOOM6mLdapUGXQ4tOkekIERzDcxhuM5bxKVhB%2BxQ%2F1LcjqL%2Fq2QIfo1qjOHMQKcjGs9N911IM9B%2F7Bt8LQ4HkiLt0QN5wy7fjNTnkgSe%2BLlHTrMTWgm%2FaGgn%2FdA5MJOM0nYaE35iHKUk2Y%2BdNQHEkA5DpMHbhcqP283dPGiR4c7%2BK9xkZrqJacYpcYVgOCMwvdRR3xlvymYVJoubDOifsHvC3vRiPaxKJAKGpLmZC0F3n%2F8vDcgyNedXz1WdVVAKQGGJ%2FR52RjesuZ%2FWuBTd4NdCX1iRF%2F11k%2Bu%2FqASO6uyEzmdjKbXQAQeJmQDZYQmXuUKUq5sghYe4SUEUCSWrrwjEmx5muhe6uZ4kVNxv1YEhMrKkFGzVMKd1MUzhC5a4S9WCSQHEXmebxFA6vCl%2BXs%2FW0ChY4AxydrD3I2gJKDfOWDJdTQK7haDwYYbQiGfjNiK7MSu0wzNr9xAY6pgFvXW8hXbXCdYxqU4BGRUzyxjU1azqz9z4keKyRpJ85rm9sHL4WQQZs05z8KeKZKooCa%2Ffk%2FQQ2oUb3zShsxvcUh3mDdLH6GN4NPLGSptBlAQdh7ORTE75yxN0mn2%2BHMZsbqeDWsRA881CtgK1%2F8MPW%2FOQI5clsDMoNB8CS8h3yeRHY3c4dvLfY3Q073AzjbjNCtJ7dTPqCVpOsKzxiBRjdO44A9fIx&X-Amz-Signature=552916e556e14b3da27590cda993f4f8fd3e5faace6bce35dbe6c60029b15def&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVMPQOW6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBL517skCMaqh453PLGNiLHkVxMTfN%2BRxhCO%2BVfLY6YAAiAPDj7wUXpytkDgXiafEDb7OBvXU%2BgIePxguMZCRNBvUCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIM%2F1Z6iUzxHs3kUL2pKtwDgQVVNzRS47U8nTlqVf2kSbW9nvIqgIfzmhMUrwK11tgWcclpe6DgpQEPB6ORw%2Bx%2BPLbWGUDgcJqQPlLOWM1%2BrKCIiBEJ88AMCKeZSuxFfDEU4rd%2FzZL8FBOzGqUOVJxsamiPSLGEJgo4QSj%2BnFztD0H6Ie02%2FfQD9Gt7Ngcsjbfy1NV6h%2FOiOOM6mLdapUGXQ4tOkekIERzDcxhuM5bxKVhB%2BxQ%2F1LcjqL%2Fq2QIfo1qjOHMQKcjGs9N911IM9B%2F7Bt8LQ4HkiLt0QN5wy7fjNTnkgSe%2BLlHTrMTWgm%2FaGgn%2FdA5MJOM0nYaE35iHKUk2Y%2BdNQHEkA5DpMHbhcqP283dPGiR4c7%2BK9xkZrqJacYpcYVgOCMwvdRR3xlvymYVJoubDOifsHvC3vRiPaxKJAKGpLmZC0F3n%2F8vDcgyNedXz1WdVVAKQGGJ%2FR52RjesuZ%2FWuBTd4NdCX1iRF%2F11k%2Bu%2FqASO6uyEzmdjKbXQAQeJmQDZYQmXuUKUq5sghYe4SUEUCSWrrwjEmx5muhe6uZ4kVNxv1YEhMrKkFGzVMKd1MUzhC5a4S9WCSQHEXmebxFA6vCl%2BXs%2FW0ChY4AxydrD3I2gJKDfOWDJdTQK7haDwYYbQiGfjNiK7MSu0wzNr9xAY6pgFvXW8hXbXCdYxqU4BGRUzyxjU1azqz9z4keKyRpJ85rm9sHL4WQQZs05z8KeKZKooCa%2Ffk%2FQQ2oUb3zShsxvcUh3mDdLH6GN4NPLGSptBlAQdh7ORTE75yxN0mn2%2BHMZsbqeDWsRA881CtgK1%2F8MPW%2FOQI5clsDMoNB8CS8h3yeRHY3c4dvLfY3Q073AzjbjNCtJ7dTPqCVpOsKzxiBRjdO44A9fIx&X-Amz-Signature=3470b3660fbb4bb7ee110a7456d8603747fa7592e3368d3c076e57a117aee905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MIEIOWJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIDV9pB7sygXYnrE%2FPVtXkFxIUvyc8KK78M1xIhDLC1pzAiEA6%2FsK3Pi2AmWhmkarH%2B74Y4%2B3pRxxXu7WAJPv0De4SqIq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDDi3ZqwweNH01%2BqPQircAw0fFasmJuyPPmlB7Ax6TCOAM9seOVuX%2FBwlwUPW16Ry6YEqH6pxtrCwSdX8VeHRyP3VLfNA93G4kgZAdmxh27%2Fu0h1R%2BwcKTBDBVSaT77b6hJ%2BtgC%2FaNHq95funyvk%2BcVgWNEXf8naC%2FKIXgcPNBfqt8SbIYB2s4n%2F39S0V82OrJx%2B7qR4AtdP0DyUh4gIBjsQrx0OzibfbQ%2Fc9eGK3ZPscMph%2FPuBHYIQNvYk7%2BTS6GiA2MwLo135Q4NDn55oW38EvKEu5DcptxADih5ONnyhQ%2FKu0WPCqEIUpfjlrMA5rIm3NdmbP84I2t%2F%2FWp57%2FWN3rLyTNcTbj4F6KXfjJJVnDCRJhXIA3ild7OOtC9MAv9ouNgdu9nY3fECzlmxxSomrMi12%2FRgRhdTkEkyjxRPOQ4wULU%2ByaQMekRyvOIBzdJ1mgCxxdBpOamIRz0YOh2wpoHfH%2Fu3gCVEzCyPu5fwk4p0Vk3l1uzlkZdoNvQqtjMxLwhudKhnW7TIcfWGOoxVN6UawBuij2gNg0EvfJRKy0XS98VOuohC5CPj89GsABIjMG4TOS%2FsNsKTkXwM8DWxi7ZQ3BoLi8Gf6DmK0hpvDntorCYEVPzH2oMNRnIoWCAm4mQDbq38axmaJ%2FMMza%2FcQGOqUB9iUbYDdqwF0GJkAtFSDDCFIZt1COhRhGxja3CWj8aPhPjLt1k8hBhKMrSnuJjO7KK3e1p57iM%2FMU4tz9kdQ34rdFdOPmZOSsL2Cnts2UOrX8sVBLYgm%2FCQUk4atE9lrVRJ4mVoobS6KuCvqUHef%2B6QS2lVzAXqmuD1yaxYpk2IBj%2F6HN9GCZjcb1u5pfy3cXZCU97utYgVGhQ9QROIwIIZJiKp9q&X-Amz-Signature=1219be75d7a901342ca0480d302b768cbad364742f562fd14d263ac34b706d7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG2LMZE5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHTwI2H6UPu937gQsx7LEvgK%2F%2BTMFMhvYhoQqg1HSBfaAiArmSfB%2BTzSC5dw%2FgJ0yunroHoGO1M1GzzvjxlwaReE6Sr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMtG%2FH96ldOlOAEkyaKtwD9Mf%2BHZE3Sz7M9bxM7o9XIsEBAi2vzbe10i5ZPCSuou3Vt90lrHBjmlSjxHPUGcNMURF1vDZg58QC8%2BZcANQfAbe44b5vS7RsUbAsrVJoFkNb5SRq1Mqew4lz7yMv%2FfeYohUVQ9wX9wpZ5Z93pSuPHpgD8xdcY1S9U6gyZupqjK4OeABNoSCG6Kiy2u33Ag6aSIbq7yek57wlV%2FuZXLPnJkl038O%2FoQtBww87aN8%2F%2B5bHRShSMeDCuryYT0Go30upErN3IkZWPdPGKdowmj3eqi33Y2u1D545484C2aMaa2rNnKjKbijMzsl6Pcttf8yOe9gbT2JzyJ0JBSwMzHc6EJRpSDdpxDc16ImQfM956lIF7TaCVTnJPqLvRrI%2FOJUCAMoJvCgvk755X82WPhsbAZNYn%2FH5eiZCAVa5%2FiVr8ZrRSsysLXnn7eQpZQyoxED1l%2Fxqyh5wMsrApYtRzUQbZdmPK%2FYubnrnaSslnU7txd%2BnYy70oT9j0TC8if4Xxk2Y%2BQmIB7rBPCsq9CQaiZIawA8VTjkqQTVQFVSob00WNlHJJJzF9oLyrKTYzDHkBY1EIUUj1t6QXdj9itCvB7Vi8ccvC22%2BJjGqxBoKlnOa6p%2BrtYMb0W%2F0%2BlJWouMwzNr9xAY6pgHnYIh7Qxvwz12WgfAMMQw6pMs6gdZHiwQ0zrCBCLZrvgjOpwRsV3A06QTk8Mt9Vh0O4epuRkfestnnAniCZvr9ckMlH0KgByqqmquzP2i9co0Ys2KI6UTQyT7Dx69Dqp0A59C%2FDFjaG%2BGOQVvPIhu7%2B8TShYdhlgR8b20tWy%2FzxEJxpmYaD9%2FTdGNDfBWq%2BcuKVOp87PSBBFVvLBTKRZPzn02X%2FV9p&X-Amz-Signature=b03ed0b58e33209564cb85eb2339ef7546f457c3999f64200b88b850ed94e737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVMPQOW6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBL517skCMaqh453PLGNiLHkVxMTfN%2BRxhCO%2BVfLY6YAAiAPDj7wUXpytkDgXiafEDb7OBvXU%2BgIePxguMZCRNBvUCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIM%2F1Z6iUzxHs3kUL2pKtwDgQVVNzRS47U8nTlqVf2kSbW9nvIqgIfzmhMUrwK11tgWcclpe6DgpQEPB6ORw%2Bx%2BPLbWGUDgcJqQPlLOWM1%2BrKCIiBEJ88AMCKeZSuxFfDEU4rd%2FzZL8FBOzGqUOVJxsamiPSLGEJgo4QSj%2BnFztD0H6Ie02%2FfQD9Gt7Ngcsjbfy1NV6h%2FOiOOM6mLdapUGXQ4tOkekIERzDcxhuM5bxKVhB%2BxQ%2F1LcjqL%2Fq2QIfo1qjOHMQKcjGs9N911IM9B%2F7Bt8LQ4HkiLt0QN5wy7fjNTnkgSe%2BLlHTrMTWgm%2FaGgn%2FdA5MJOM0nYaE35iHKUk2Y%2BdNQHEkA5DpMHbhcqP283dPGiR4c7%2BK9xkZrqJacYpcYVgOCMwvdRR3xlvymYVJoubDOifsHvC3vRiPaxKJAKGpLmZC0F3n%2F8vDcgyNedXz1WdVVAKQGGJ%2FR52RjesuZ%2FWuBTd4NdCX1iRF%2F11k%2Bu%2FqASO6uyEzmdjKbXQAQeJmQDZYQmXuUKUq5sghYe4SUEUCSWrrwjEmx5muhe6uZ4kVNxv1YEhMrKkFGzVMKd1MUzhC5a4S9WCSQHEXmebxFA6vCl%2BXs%2FW0ChY4AxydrD3I2gJKDfOWDJdTQK7haDwYYbQiGfjNiK7MSu0wzNr9xAY6pgFvXW8hXbXCdYxqU4BGRUzyxjU1azqz9z4keKyRpJ85rm9sHL4WQQZs05z8KeKZKooCa%2Ffk%2FQQ2oUb3zShsxvcUh3mDdLH6GN4NPLGSptBlAQdh7ORTE75yxN0mn2%2BHMZsbqeDWsRA881CtgK1%2F8MPW%2FOQI5clsDMoNB8CS8h3yeRHY3c4dvLfY3Q073AzjbjNCtJ7dTPqCVpOsKzxiBRjdO44A9fIx&X-Amz-Signature=77af378514bacf65214e8db3cd5cd744981ccb1edfb3dab76dc2f63771e5a8f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
