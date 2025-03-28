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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LIIWDZU%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlTT64e0Nxgnhu%2BbzbfALASzl6NOqDdpbUeTbOIeGjwAiBOtBubUId3hqvtnnvtMVbrXQMVq%2BuTcq1Lim%2Bp2Gu3Rir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMeZ03JdNFzId6rgSeKtwDeGKQWuKc3bZvj9vbJXiT0eSne36cj6FaWS026XdIoW99UD2%2BfKQ1A6Rm1Jo3lX4HBs80yV7Qy90u4ubDO7LR%2FDH5toaUdzS9aNaZ%2FidUXmdEH%2BpfrTQfQkCPzf1JOfVZij3wiG1j3OUjLcLzMj2NFHLp2kL%2FXm0oSCUTzsDbyhEZZuueOerIiR7wgXS5ih4tSnjNzZ2SrjI9mjdX6Z%2FdLfgrj6Zs37VZMr3v%2F8uBagP0lIxucTsNvP8Q1KEWPq3M%2FaF1jZ75bNW3ovZGhof4R0%2Fgm0OYeVepF81xgoFFd83c374Twthi5lJqzjb%2BK1iVyeoBaDUzRE9NJozQRx2Q%2FNi8I%2FJ%2B4Hooh8C%2BCum%2BF5uEkJnReqSH2TSDYDXDDoQFBh54dml2ZyrQ1gh6%2FToPAAo9EUINT4HlLOpfYhwBIJNqhdV3e1qX9upZ24aAOp%2BkuSKGUuggfxLk70NsXUDF99f%2B%2B8LSPPRBBrkEgB2IAoVfP0pgIoC%2FNH8rcREu3Mugp%2Bvr%2FtrMkCU6vpKC%2BOlgyUJN%2F2iqkruANcgill0216Rn0WPpm2zYqENlMgYOMc5qUQttgw572fIf%2Fvr3odUp3ydpk9aH8rR6IDXi7f09L3Q5kLjOf5HdwxBieIUwmJOYvwY6pgHh%2F4E1vqiy%2FpJHH6FcL6W5KEJMELCPblZBHqNGCNTrqpBTlu0lSSXv%2FXmPMrxEZkn2kQhGcvdvi3EBNrxcH0aWJiqyhgpMF5quAFRkss%2BUdderoshOFUOJnP0HhSQQE2V4MqXrTHxeKTns8xkl6tFz5gwgFNUsbP6I3mvFOVq09reZcZ%2B70XngPoMa5pnbGYmK0s6uj1VJDiCPpl46qySGuGTFLxVb&X-Amz-Signature=887942d5b343673e25865aea13be2ab4c056f2e701bb4f59c3541cbd21d96fc4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LIIWDZU%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlTT64e0Nxgnhu%2BbzbfALASzl6NOqDdpbUeTbOIeGjwAiBOtBubUId3hqvtnnvtMVbrXQMVq%2BuTcq1Lim%2Bp2Gu3Rir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMeZ03JdNFzId6rgSeKtwDeGKQWuKc3bZvj9vbJXiT0eSne36cj6FaWS026XdIoW99UD2%2BfKQ1A6Rm1Jo3lX4HBs80yV7Qy90u4ubDO7LR%2FDH5toaUdzS9aNaZ%2FidUXmdEH%2BpfrTQfQkCPzf1JOfVZij3wiG1j3OUjLcLzMj2NFHLp2kL%2FXm0oSCUTzsDbyhEZZuueOerIiR7wgXS5ih4tSnjNzZ2SrjI9mjdX6Z%2FdLfgrj6Zs37VZMr3v%2F8uBagP0lIxucTsNvP8Q1KEWPq3M%2FaF1jZ75bNW3ovZGhof4R0%2Fgm0OYeVepF81xgoFFd83c374Twthi5lJqzjb%2BK1iVyeoBaDUzRE9NJozQRx2Q%2FNi8I%2FJ%2B4Hooh8C%2BCum%2BF5uEkJnReqSH2TSDYDXDDoQFBh54dml2ZyrQ1gh6%2FToPAAo9EUINT4HlLOpfYhwBIJNqhdV3e1qX9upZ24aAOp%2BkuSKGUuggfxLk70NsXUDF99f%2B%2B8LSPPRBBrkEgB2IAoVfP0pgIoC%2FNH8rcREu3Mugp%2Bvr%2FtrMkCU6vpKC%2BOlgyUJN%2F2iqkruANcgill0216Rn0WPpm2zYqENlMgYOMc5qUQttgw572fIf%2Fvr3odUp3ydpk9aH8rR6IDXi7f09L3Q5kLjOf5HdwxBieIUwmJOYvwY6pgHh%2F4E1vqiy%2FpJHH6FcL6W5KEJMELCPblZBHqNGCNTrqpBTlu0lSSXv%2FXmPMrxEZkn2kQhGcvdvi3EBNrxcH0aWJiqyhgpMF5quAFRkss%2BUdderoshOFUOJnP0HhSQQE2V4MqXrTHxeKTns8xkl6tFz5gwgFNUsbP6I3mvFOVq09reZcZ%2B70XngPoMa5pnbGYmK0s6uj1VJDiCPpl46qySGuGTFLxVb&X-Amz-Signature=216a513f0124c59f00e9f556e3d74e3c9e395277a74bb2692f2d0ebbb3024aa5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B4JQBKN%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiTonzPh8TmsJ7OKTbDsf49mNyxbPFTEay%2FQ57uiFIGAiEA7fhieZJbzu3OHgBmir%2BGogBXgOnzCbYOyGWzMm4p0eUq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDMNOmzYxL0mD49pVdircA2%2BhzMWMfgHalEWaQCK%2FwYttueeP8LHwiwaaPdE%2FNEXA6p4sMP2%2FJ5r%2BF9YhKAV0GXEf2KRFUUB%2BVkf1136WUIQzcANxd7L%2B%2FdLg7iitFi7cmkFqKFFpvPT6XwZtsVVwKSsq%2FqIUNRhwd54hfUdZ7tohlMxI4Z92pc6zS7vWNCdQflYfAdZxLijxPKqth0HueVu6cP8CVSYPW3Efb7yEPS3Sr0uSIhQgPQwFFhMlCYeE%2FtZ0zsmxjyeLdbPT%2BEHDEZJnwd%2BeSf3Of%2BehXB7sPD9%2FEXXJgMf9pqNJ0CuGpAi8aFWMrwwLdv7uhkZCiskx0AN3KALuMcT3dt7de1zg2pFkG1NH9wZTRnJ0gk2zVhJqZMY15Fht0WB01qMW28XNHNppdx7LN8YLmXfPWNy9IcpwfcJCtxZ1SrvMwuwFJrgiqpc8F9mcH9dwv6%2BvaZwu0umU%2Bw3Pc59bbjX7IrfW8bee71kZ3M%2B7rvKI%2F3hBcFsDrQaic4onK1eg4cxzfySX2HhMDVXWRheav6d5iQaA0QmTlZg4OSo4YCki6DGhym2%2BsWxB1G8BPkKv9qc4dqaTnctx5Kj3rfSPw2ht%2BnYWozdZlD%2B8GYC2u73Oy8ZcIaI4cwvcAy00Z0GuUF%2FpMKiTmL8GOqUB9BIimybr5Zjnw%2FQFm730ORzDh3C8RfqR4oLnzk9LDBhF7P2Z%2BLgbVACovQOQQL0xP7oL8UgC2rBmUbMWQnusAAsuUW25D3dsmnSNa0Kt00Izra15xI779JLwPZP6Z%2FTQHJAH1qx7CBMiedno83oSyg3AFIOKzH148ulrR5HTIB3ZowgwdzMAUaVOQ4VA7oYy5KpjUYOwCigp3djc2gk4s%2B3enE%2F1&X-Amz-Signature=3ebbe3465a97690ae68eea814017a8e4600354c4f1366bf92bb9222bb7b3a485&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E26KOVA%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC52vCLep1yfBAG8GayebeqKqVlLdx8BD2yPtSgivJsKAIgcKL%2BBG6cODMAVh%2F6c9x%2BE8La5me9mzzRLyPgeTrg0iIq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDCsfnzlUpipMIScuISrcA1xCQ%2Fysn05k0zAAcgaUXQ8SN8ko17NMLfixPt%2BVYD2onk4pXxdo0YtvkWoyCIX2xKT3aUw6rtcCMm%2FUElYHKWGQlP1qZEdQcvgROYobuajCnZSKC28PDmBgi9ivi7VOZnlXb%2F4gM7ZOWNgdTkbDOWNorQBHhoDkSDSfpJHp785xEydCNKXjmfG7PU0dWCSA1sFcwXajhGQ5jtDwNZ0nAYA16NTfYLSAHjU1%2FHJ%2BuPafUjS61r5abRiIviRiqb5vvbNEYHxgGTylqrgwo4NcCNlQ2u8sTIGGXOHXc%2BJVI5nb7wOpizcxoq%2FizhvDMsXg8UBasTFzwlPddnN%2BAw2sCZjt0xunLbYpMLlohzLz1XtOMWEKw4mP6fKDj5NGrDp%2F7O9mxWlEI8kjdPa3GLj4jc7kiDTU5ZPP5PkAwyodr%2B1%2BxFRlyzInjAANjrDr40rZMmd28b0kN%2B1C27nR3VPpo5%2BNIW1dadigwiAT7Jh3Hu2TiGvEXoTCF3a8WZDXPpfgdAterm4hp0926q%2BeiF26mRXHfiJZv6aVkcJ8tWpMFx5m%2BNMzGmk%2BlizUAHHyAPB%2BrIHlZpnN%2BfgPrkNxWNCOGnrqiO7MxemTXsSynmkl6TK%2B1XSZ%2FFwBhsNJ7Q1RMKSTmL8GOqUBJqHr4fCoVnGOBvI6gHSVh1NalT9IgMfdnMv8lpRfQA%2BcTIzraaSsxybgN9NQe2IpA21pQULZAyct7KpCLZocUfY4ROg0qpYBUL5biHQDxzt7RCJr9BAn4LnYDJ%2BxZneCzLijGRj5agNw2uDlwdmX8ky%2BEIYja%2Fm3DI9kk%2FPM7t87TCjb6l9r4kWrCQYUnATtM3UDSskPLtaybR3hywYGX21KqkEc&X-Amz-Signature=520cf8f2e942044e7bb54df270075aa9b4c11429267f4312abb227b69e2dbdb7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LIIWDZU%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlTT64e0Nxgnhu%2BbzbfALASzl6NOqDdpbUeTbOIeGjwAiBOtBubUId3hqvtnnvtMVbrXQMVq%2BuTcq1Lim%2Bp2Gu3Rir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMeZ03JdNFzId6rgSeKtwDeGKQWuKc3bZvj9vbJXiT0eSne36cj6FaWS026XdIoW99UD2%2BfKQ1A6Rm1Jo3lX4HBs80yV7Qy90u4ubDO7LR%2FDH5toaUdzS9aNaZ%2FidUXmdEH%2BpfrTQfQkCPzf1JOfVZij3wiG1j3OUjLcLzMj2NFHLp2kL%2FXm0oSCUTzsDbyhEZZuueOerIiR7wgXS5ih4tSnjNzZ2SrjI9mjdX6Z%2FdLfgrj6Zs37VZMr3v%2F8uBagP0lIxucTsNvP8Q1KEWPq3M%2FaF1jZ75bNW3ovZGhof4R0%2Fgm0OYeVepF81xgoFFd83c374Twthi5lJqzjb%2BK1iVyeoBaDUzRE9NJozQRx2Q%2FNi8I%2FJ%2B4Hooh8C%2BCum%2BF5uEkJnReqSH2TSDYDXDDoQFBh54dml2ZyrQ1gh6%2FToPAAo9EUINT4HlLOpfYhwBIJNqhdV3e1qX9upZ24aAOp%2BkuSKGUuggfxLk70NsXUDF99f%2B%2B8LSPPRBBrkEgB2IAoVfP0pgIoC%2FNH8rcREu3Mugp%2Bvr%2FtrMkCU6vpKC%2BOlgyUJN%2F2iqkruANcgill0216Rn0WPpm2zYqENlMgYOMc5qUQttgw572fIf%2Fvr3odUp3ydpk9aH8rR6IDXi7f09L3Q5kLjOf5HdwxBieIUwmJOYvwY6pgHh%2F4E1vqiy%2FpJHH6FcL6W5KEJMELCPblZBHqNGCNTrqpBTlu0lSSXv%2FXmPMrxEZkn2kQhGcvdvi3EBNrxcH0aWJiqyhgpMF5quAFRkss%2BUdderoshOFUOJnP0HhSQQE2V4MqXrTHxeKTns8xkl6tFz5gwgFNUsbP6I3mvFOVq09reZcZ%2B70XngPoMa5pnbGYmK0s6uj1VJDiCPpl46qySGuGTFLxVb&X-Amz-Signature=1c01dec4a3c55ac35a8ea8c8be99315ba547bb2ad2cd754a2e074c83470cdfb6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
