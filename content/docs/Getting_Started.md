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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTAFW7JO%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T022209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDylmYCzSlGHmfhGtjGdVngm04jjX9tuUcKCP0%2FFQVTEAiEAhPMCQCCQZa%2BpHTVRP0AuCzFhJylHpyu%2BM88se7R66Ocq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDNFqm1%2FoWlGuoK8pFyrcAzbfxARqkrjo9bDi%2BXGAX8btrDaaLNDFWZxVjPXiWDImr9bp44DjbrTkOAe0Fyouudg6oNRPWYqr5GooAxNmigkmTNGl%2FupkPo1WcbPCs%2Fc9XKZmCCH0F%2BAOCMkVdylfeAwuSI%2FxSvueMH0EA88dd70sPhyndrtdQTurfnbfV44VBQTwqo9VeFuS7OmL4ksbxHyL2epQJp7V8dyAFhLI8GZ85Q8tKRIm9MUwqsvjliPdn4FWM%2F%2BlsfqdVviiwQur%2FTYRdhDmb9yvPPgdylTZvJq5IrOFIR7XiDYa6maDd%2FUkyjwgVcz2O%2BmnHIiJP%2FIPMOPNEayXgdbE1HUc3kSWIlCBXlgQZdOi5B0KN8M9aOpLl2aZv%2BkcWgSGl9tR5Y1iho2HuWP8MGTOVHnLeFRjibEigwkp4YOZe7dds6LDGIoGFmvG9fxf3DEORloNcN%2FTfU4Km%2Fyjl9oNsa9LvEpziljxgjBs%2F%2FfJdXcOZbKeDlrS92uSbDBcugKoQTuZNCsPS63HgWL57PbFCj4tc7a7wWV3RRVLLcUgN9IeysqgmzgEwmjlDY4ffzjAo3I7fD3u%2FfMMblRFprsjMtp7Pf5UzY3GBJElYYHEPIN8N7eOZ4MrZEjqRzu1YJu%2F3rqNMP6i%2FL8GOqUBlBPh7xt134G9R2n6e1LqZ2xobl7SYZPqB5FfYXkXof5BVWIlC3wfC891hesWPMsDTlW%2FRJCLa3xviyrk1CMwHuvZjGLmiq24UIy35a57QgMbo2L4jgHlNB0GH3XvhP0S02NTp70t%2BsrbutBZl6haQcaRs4oQmfZPFZ1uJB2t2SaVoWMXL1rpM2CqrfNYjyURr5oz9Bd4kQUl7q4eL0G%2BNJS4%2BtVe&X-Amz-Signature=0afedbba1bfa96d2b8801f1c0adf6bfd9fad5952345d50456b2b2da8ef4a6f86&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTAFW7JO%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T022209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDylmYCzSlGHmfhGtjGdVngm04jjX9tuUcKCP0%2FFQVTEAiEAhPMCQCCQZa%2BpHTVRP0AuCzFhJylHpyu%2BM88se7R66Ocq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDNFqm1%2FoWlGuoK8pFyrcAzbfxARqkrjo9bDi%2BXGAX8btrDaaLNDFWZxVjPXiWDImr9bp44DjbrTkOAe0Fyouudg6oNRPWYqr5GooAxNmigkmTNGl%2FupkPo1WcbPCs%2Fc9XKZmCCH0F%2BAOCMkVdylfeAwuSI%2FxSvueMH0EA88dd70sPhyndrtdQTurfnbfV44VBQTwqo9VeFuS7OmL4ksbxHyL2epQJp7V8dyAFhLI8GZ85Q8tKRIm9MUwqsvjliPdn4FWM%2F%2BlsfqdVviiwQur%2FTYRdhDmb9yvPPgdylTZvJq5IrOFIR7XiDYa6maDd%2FUkyjwgVcz2O%2BmnHIiJP%2FIPMOPNEayXgdbE1HUc3kSWIlCBXlgQZdOi5B0KN8M9aOpLl2aZv%2BkcWgSGl9tR5Y1iho2HuWP8MGTOVHnLeFRjibEigwkp4YOZe7dds6LDGIoGFmvG9fxf3DEORloNcN%2FTfU4Km%2Fyjl9oNsa9LvEpziljxgjBs%2F%2FfJdXcOZbKeDlrS92uSbDBcugKoQTuZNCsPS63HgWL57PbFCj4tc7a7wWV3RRVLLcUgN9IeysqgmzgEwmjlDY4ffzjAo3I7fD3u%2FfMMblRFprsjMtp7Pf5UzY3GBJElYYHEPIN8N7eOZ4MrZEjqRzu1YJu%2F3rqNMP6i%2FL8GOqUBlBPh7xt134G9R2n6e1LqZ2xobl7SYZPqB5FfYXkXof5BVWIlC3wfC891hesWPMsDTlW%2FRJCLa3xviyrk1CMwHuvZjGLmiq24UIy35a57QgMbo2L4jgHlNB0GH3XvhP0S02NTp70t%2BsrbutBZl6haQcaRs4oQmfZPFZ1uJB2t2SaVoWMXL1rpM2CqrfNYjyURr5oz9Bd4kQUl7q4eL0G%2BNJS4%2BtVe&X-Amz-Signature=0a4bbac31451e8c4203db1062bfa0693196a2a14a2fce9d1d13d345d962467b7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWSKYS7N%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T022213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVmhYCxF7NvaTftv%2BKMg0AVtByhsFfPFx4%2B1IOwTYccAiAuU%2BZZcl8dzNVO2%2BwyLet0Esvz%2BEp360nDhnZCJIUE%2Fir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMN2Z0An1PYVunDkLbKtwDUpJftQKfcPko8N4rnhtH%2BFt5zozMxJB%2FrVoBaJig6Wg6THVDKvgO%2FxxkdCj1SCJHrGu3pZNLuvahgFXubD68SRz6FVt6ciAnJba9hwfbnbnjdKowLGJgex2XjhgCCEz%2B80c8uS%2FcafRDlq2tu0dYuFWO2BMa%2BHh809oAbA2et6o7czWDs7OUwQIi5z%2B8pUx94FsZdU2XJnZJNQsm9TnhrB2MpJE5%2B4LOFtadpXSC3B92nWNkuPaUwWQoy0jSdttWAwFis3KHMqbtp3rE8i5Nyhb04iDzWiTDKc4Qrt45AMfZ5lwzBawAflzsMkCniCqv4lxdCULgfHs9ELKoEuzk9%2FYp6ush2kz%2BnN7sqwoobrKwbNzVQCn6YJIlAbuup%2FwJlFQa1j31Pj%2BBZF0gSiLLdNrJiVaO3xcrqbNXAAWUCAA6CoUF74AkFZJSk3%2B6SZ%2FbhwAVeuuZingA4ugIUhO13j%2BdwDtPo6rjhI7Rz0tPRcYV5NaJhB1Fq9buqniEgzFXD5TM%2Fo2OJ288YnCI0%2BGAInkKl2W%2FPvrvE3hj2eExYLmBlwopu2UdEhW%2FH00k%2F0sHQO2%2BBJFUQ6heSmLEvrr3TyXzDqyxjYhyI76aJ2aYKz3mAabkg2BG1KGhwtQwzqP8vwY6pgHzt0xj8A5bMq61NEFuUlRjvVUCDQTKPNz8dV8xE4eEN1WXaW%2Br7gWE9u3wxuWcfoaIO%2BpXJ9tEfTu5EKB6psJmJvhDzXPDUhLgH97BTiPzsTOPnzFXFI6FD6AtsjU3%2FIrSxcCmu1X0P%2FKAoaGhrVRJJC01Z4oMWwU3jROimXE0oml%2BFfq%2FUzNfmDJiK3LL0QpN43cF74LeK%2FGH2OeYHB73N5hL6M3Y&X-Amz-Signature=f051ad80b78a385cb1ba8884d21c6bd0d015c4df1059e0d3718d558d5ffda090&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO4R7FRV%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T022213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSIMho1ZxvzVdkzcPCCQ3WsaRzoq0PyMh%2Ffv1YIAuwgwIgX18pZeW5gaUxq%2FOT5xDbsJ0UZDo0%2Fc%2BHe0eskHDWLf8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHkJfB%2F4kAdxuGo8dCrcA03tjP1FgI%2FZQOJLssjwO3iqOvlqqdwV5yKHO%2FIHXmd3gexFayXsgrqNEJTdDWlFDGdwhJJChbNsEwDlvBF652ttorDQW5iTYZke3i%2FKgyfa4ZSNSs3Wiab9%2FXtdNq%2Fu3bSXGH9yvTGq6jmrXqNq8Ldi72G448AlmutzHchn9J74%2FmLAHOIdmp4jD1djKlS3HRdT1LOcPX%2FEjR5QaQJex8MAKnwQrV2WsEW4ucspzn4vkWRANDX5SFMzO%2Bcm0YtFHYxxgpGMUXu2PAqucctjK%2BOZo5BdORDZZHZBVQBlqdTs0m7Z7DJsVD4F71Nu3QP4%2FQsZSkHaMpn%2BB4haO6zF%2BSJZWAAOvaGBezscMD6kTHBTFnkCgd%2FXsxrl3cX8xC9oTCl35cajlbPiRzHlmHdxevUja2PZPVw2v9RzuMFcxwckiR1a%2FqfaOJIjfyeuY5F9M3SB60K4EXcWtXbP%2F0n5MfSg0Gvi5w6eJnOp%2FRed3%2Fm%2FU3OQn4Q8Kdl39307M%2F%2FvqLl7ncAu4pCld31DvZ9qGdCLBNBo8GCfiQjF8trRntSakDaxiKIm5bBWv1QI88mX1x%2Fo98clgTifkymkrcEUB3Y6MP1Pa6q8FPAGNvXLOmNfgz01tIugo4KRMzQ2MJuj%2FL8GOqUBU9C2J%2B2KJLr9LouMZotzL9Ww0t1Tx4OLOFsA03NJwQrV0aNou6ErCxwl%2FeBkSine3ARLJLvvD5BufADFnzLzTApiTC6VQ7xLLdQCEFdqKQ3hNw%2BngjdNvvIJ5W478wcGV6EIaEzz0gbTzNI2TKUhN%2Bx2vZJaY%2BSSbTH4Yd0w%2BZlhzugZ%2FKTGvZmA9oGfXfuntlmZSrQUhYQWdCWVt8pHURl4u591&X-Amz-Signature=ef641f5fc7eb817031705f8775b2998ddfbe5b655c3e2132eb5d5bb55c853992&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTAFW7JO%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T022209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDylmYCzSlGHmfhGtjGdVngm04jjX9tuUcKCP0%2FFQVTEAiEAhPMCQCCQZa%2BpHTVRP0AuCzFhJylHpyu%2BM88se7R66Ocq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDNFqm1%2FoWlGuoK8pFyrcAzbfxARqkrjo9bDi%2BXGAX8btrDaaLNDFWZxVjPXiWDImr9bp44DjbrTkOAe0Fyouudg6oNRPWYqr5GooAxNmigkmTNGl%2FupkPo1WcbPCs%2Fc9XKZmCCH0F%2BAOCMkVdylfeAwuSI%2FxSvueMH0EA88dd70sPhyndrtdQTurfnbfV44VBQTwqo9VeFuS7OmL4ksbxHyL2epQJp7V8dyAFhLI8GZ85Q8tKRIm9MUwqsvjliPdn4FWM%2F%2BlsfqdVviiwQur%2FTYRdhDmb9yvPPgdylTZvJq5IrOFIR7XiDYa6maDd%2FUkyjwgVcz2O%2BmnHIiJP%2FIPMOPNEayXgdbE1HUc3kSWIlCBXlgQZdOi5B0KN8M9aOpLl2aZv%2BkcWgSGl9tR5Y1iho2HuWP8MGTOVHnLeFRjibEigwkp4YOZe7dds6LDGIoGFmvG9fxf3DEORloNcN%2FTfU4Km%2Fyjl9oNsa9LvEpziljxgjBs%2F%2FfJdXcOZbKeDlrS92uSbDBcugKoQTuZNCsPS63HgWL57PbFCj4tc7a7wWV3RRVLLcUgN9IeysqgmzgEwmjlDY4ffzjAo3I7fD3u%2FfMMblRFprsjMtp7Pf5UzY3GBJElYYHEPIN8N7eOZ4MrZEjqRzu1YJu%2F3rqNMP6i%2FL8GOqUBlBPh7xt134G9R2n6e1LqZ2xobl7SYZPqB5FfYXkXof5BVWIlC3wfC891hesWPMsDTlW%2FRJCLa3xviyrk1CMwHuvZjGLmiq24UIy35a57QgMbo2L4jgHlNB0GH3XvhP0S02NTp70t%2BsrbutBZl6haQcaRs4oQmfZPFZ1uJB2t2SaVoWMXL1rpM2CqrfNYjyURr5oz9Bd4kQUl7q4eL0G%2BNJS4%2BtVe&X-Amz-Signature=a0421fff05d77e672a1a3948977246dbcc60a6a01dea206ad2c9e0164de234ee&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
