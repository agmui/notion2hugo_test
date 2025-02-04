---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "null/Getting_Started.md"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN4W52HU%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCdghuA4K%2FWLBKAifirsLT8wumZ6Q3mM4GK5Df4wAvvswIgBa0NXT6mAPXwxk%2B%2BDjaB5rZoa3pbSJypkwckqtvEFYEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDI7qAYyH1b0NCWjC1yrcA6I5kbrnR316THjHGJtaAksWclKrHziFYQCt56E6OGNC1WJ1moJtbPqc2rMeTe1PZLl0KdHyXeL%2B5sEHyQajeJReBgtMcQb%2BWypsEhCslrsTuGIx8TOVwFL%2BJHe2bvKkMGp1uSfx7wYqjXE1dB1mw7tY0l6qtl53ULc1Q0UQDAXLuPcuf5L5qGZe2Lyrk%2BLp4xcU%2BRWR16SD3wUUFa4tl3SoUEsYn9CQl76ENgNvEcxmzWXAvvtTj5ZVXF%2FDQmYW1plrE7zcwLJbYqRESn32Zc6hXKbelaNOFWmWpCSTUX7kjRUx%2FeDmzZB40S0fk2B%2B8af83g4A%2BD3lP%2B7fCKO4pRRuAR%2FEPcu58ITMLTfUXA1WL8SA6WsaDDTxAqG6qTqNfuVfkTGgp%2FSP5AAD9RPu8HiZDMhHbG1FNGXw3EX5A6AvVVFcMymwib%2Fd6CrgIMdANbTZzT0b%2B6gfrzjp7yOFfL7A%2BtvNlbSyp1CgtWmVqB4pnIjsOnrl2jX7hRoWaFZP%2F5zgz0IGR%2BLSs9gu6Py3YMqJ79el8%2B3n%2BVvDUnUgwConU%2B65RW0JeYpQkVYzajnIAMNs1u2a1ERd03dDcZ7QZJjRiStXVHPUPCOVm%2Bs2sMkQ2F0qNAZ84idQ9fsPMLH%2Bib0GOqUB%2Brpmlb4MT34iKlpxFD2JYf62taZt7PnLlfuvoYShXL4u%2F3rYjBvVO9B%2BFk%2BnmFTLCAbYUimyyCdzoQuzc9xSseNDeo%2BpCfIlDenHO797EjJHJnOk8SaxFDZOVJan8ZxjTLy%2BtmuC9dslO5TZbMwFOPxH%2BAUESCRcGmGCfQH%2FxK%2ByXQwRcYFz5kjolQzNEye5hsJ2wKjGMEH%2FSKvLsD67%2Fzcuiprq&X-Amz-Signature=b04386db228da3b93331c1e77ae1887a542d7784b9b6bc8aab9f96c2fc5f3efc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN4W52HU%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCdghuA4K%2FWLBKAifirsLT8wumZ6Q3mM4GK5Df4wAvvswIgBa0NXT6mAPXwxk%2B%2BDjaB5rZoa3pbSJypkwckqtvEFYEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDI7qAYyH1b0NCWjC1yrcA6I5kbrnR316THjHGJtaAksWclKrHziFYQCt56E6OGNC1WJ1moJtbPqc2rMeTe1PZLl0KdHyXeL%2B5sEHyQajeJReBgtMcQb%2BWypsEhCslrsTuGIx8TOVwFL%2BJHe2bvKkMGp1uSfx7wYqjXE1dB1mw7tY0l6qtl53ULc1Q0UQDAXLuPcuf5L5qGZe2Lyrk%2BLp4xcU%2BRWR16SD3wUUFa4tl3SoUEsYn9CQl76ENgNvEcxmzWXAvvtTj5ZVXF%2FDQmYW1plrE7zcwLJbYqRESn32Zc6hXKbelaNOFWmWpCSTUX7kjRUx%2FeDmzZB40S0fk2B%2B8af83g4A%2BD3lP%2B7fCKO4pRRuAR%2FEPcu58ITMLTfUXA1WL8SA6WsaDDTxAqG6qTqNfuVfkTGgp%2FSP5AAD9RPu8HiZDMhHbG1FNGXw3EX5A6AvVVFcMymwib%2Fd6CrgIMdANbTZzT0b%2B6gfrzjp7yOFfL7A%2BtvNlbSyp1CgtWmVqB4pnIjsOnrl2jX7hRoWaFZP%2F5zgz0IGR%2BLSs9gu6Py3YMqJ79el8%2B3n%2BVvDUnUgwConU%2B65RW0JeYpQkVYzajnIAMNs1u2a1ERd03dDcZ7QZJjRiStXVHPUPCOVm%2Bs2sMkQ2F0qNAZ84idQ9fsPMLH%2Bib0GOqUB%2Brpmlb4MT34iKlpxFD2JYf62taZt7PnLlfuvoYShXL4u%2F3rYjBvVO9B%2BFk%2BnmFTLCAbYUimyyCdzoQuzc9xSseNDeo%2BpCfIlDenHO797EjJHJnOk8SaxFDZOVJan8ZxjTLy%2BtmuC9dslO5TZbMwFOPxH%2BAUESCRcGmGCfQH%2FxK%2ByXQwRcYFz5kjolQzNEye5hsJ2wKjGMEH%2FSKvLsD67%2Fzcuiprq&X-Amz-Signature=c57d3253da421571549f74f6366fc8950c76cf7c8830d7edd170d3b30bbb7e23&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYWV2CPB%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC2Td0HgRwAwlfLSD%2F%2FFgbds%2BToipL%2B67%2FK4GHt%2BcMWZQIhAPRk4KJzBcMGhy3Ijc7o%2BtqLUkoEfZ%2BYpHL10flzcmKPKv8DCDYQABoMNjM3NDIzMTgzODA1IgwRDEMu%2Bcf%2FKSWzr6wq3AOkgqxMBju664XWxrSKfBWJngjo9Gaqe2HzrZkqKNuKqzaJnro%2FOn4Oz2%2FLGzhYz1sj6lkzesRmKJ88dbHlEWngE4cN8SRaZ%2FmiKLQQhuWLvS7mVoCfbUrtHtC4o2YUARAd66CFhVf%2FdEHMamFqkoJFeAuuUym%2FlAem8vOMhDp6%2FEoXD85pELqjvIIkb8UPeDIjSpPtTHaMkS9hiDWgUa2IIgMd3CAOkLfCgcLnXJd5NCqe0FIRHTX1NHZYnY7uGlZMKIiv3TLpZ4D%2FDcnaKWW2EPSvZab3e%2BspbnMk%2Bg6WKymLSw0c8J1Nc96RPtZ2dQERXF0nAbexRZlYH%2BmPmPNdXovpXzIyB7sQ4wvuzyu%2FtjCl%2By3CFdy0nafws4kUNjjUAlDCbBu%2BAzpRaBR%2B%2B91LTdmLLkOu4HgopdgigmWV11rcewvYPxiPC45oj7wIwpbC%2Bh4pnj0FMdOTibhSiz4%2FEBiz56jNhhDHuFID3%2F0dG0Ad%2Fk97sYoHWFRqqx70a1g3sz1qfPX6w1%2FUyQ31owKwezM%2Fr1pQ4DuHvAQD82h6CDioTFu0cC8pgrb0KmBkzKFDzpbS4Z4kMOGrNv%2F2a0G%2Bwmfayt6LXrsJq5Ll9l3xuiPZyil8gwgd8nyaQTC7%2Fom9BjqkAeRG2PjsIJj3vbiPch6gNEowVXK7mqJCqWZ1x1lGhQNnk5K2A3g9FQJ51OeWMxyYtbCDQZGU1r3ZSKb%2BiT%2FG%2FXSA47LMsjY0zkf2DqYAXhbglPRRW8lYmGwwX2zbqFvjL%2FNGYIov3kX25bI1S8rB01Tj1ZRFb1GQjZkIwcws7NeBpaBlnJxQmDIIQ%2F8eAFRcZt49jdCA87Obdpui1%2ByJAbZanKQq&X-Amz-Signature=f6b61c033a39111669e061e4bee190bb2028a1f05f2a2d2b8883594d3d6b3c2b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2RO4OQG%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIAQje9%2Br5m4kh7UwSjEPZabLaPpKmOnBSaIk6POic9lpAiAxsQivFlvxtz3o7bJkD72iPo%2BxcgiDid3UHT7Zm8XQCir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMWIMA3itpoMoOt02KKtwDmJV9RVWhrA0ZWYkyI3kD51YL6rm31lgw4UB5iVyeF6AvLHIeSxTUt1SoGOusAvWEq3raoT%2FJo8C7cUbOoEBitXR4BjhhHs%2BoO3tfbjg6jrC18DSLjuCsh6Ckmrvd7Evo4pq93tsQFFfAWnjU7I7iaDceVmzO7pae%2FXQS6Te1fGN0UBvMFm2vP7wVnpgSG%2FsFpUtCGV97QATrNVWevSJF7mqloGf74z8oWOD5LoytRwFvysnE2o2yJ8CzYGX%2BFcbM1Me92T8WcNpU9SuN9Ldtq0qJYAvyaaagY%2BAqYHK%2FYAb6x15z1BuBc4GGRvHLkLVDtQFA%2BHnPYtyOqjyw2ZbtFgSOB%2Fk8NlRG%2BLohWVQryStwN28U2vND3prcucR%2FQtmuN3n%2BF%2FI2eXPgUPCtmNUOT99XBKjaNmIidpwtYLkH7GKOXIaECAS9XI5lOSonCJbgoSiRbjjzfIkJjno%2BOf4b0kDL7n4jpZZsfTEgCJCHUrMwJLNHkY5CnummlY0zJJkR8rnh9stYqbKi2xwd4H7bo9%2FdY0hBEnL2gQUFKXCHdRHhIF6WQA%2FOB3L4ORlBUeptXDpPyyN7mCWYgd9b46e49yaCaRR2bVfowra6ReLIwShLNG00mmK6S9ywJc4w%2F%2F2JvQY6pgEHxbpSfR2KbeoWxPmR6BcPaN7vOSyoh18yYCaps5yiC5OhcY790xyk5X3y9jLWORG9sgqk7FigAsvVV%2FuyHVjHBsG2881u%2FhFiWIVuxl4xJGJaY3cr3pAYnzOlFdrlOXJh%2B2UycMG9PaFV%2F6v6uYMqvmYkaEHFTc8lbgiEBP8mGexdHljZQ%2Fi%2FiQpmvh7MtGTCmkzOjMU%2BwmI8r1mQuzdk3EZR9Tnw&X-Amz-Signature=e68727874e7b041cd18a5b9dafdca4ace084b82b6e0a01f8c7b801523d55e556&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN4W52HU%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCdghuA4K%2FWLBKAifirsLT8wumZ6Q3mM4GK5Df4wAvvswIgBa0NXT6mAPXwxk%2B%2BDjaB5rZoa3pbSJypkwckqtvEFYEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDI7qAYyH1b0NCWjC1yrcA6I5kbrnR316THjHGJtaAksWclKrHziFYQCt56E6OGNC1WJ1moJtbPqc2rMeTe1PZLl0KdHyXeL%2B5sEHyQajeJReBgtMcQb%2BWypsEhCslrsTuGIx8TOVwFL%2BJHe2bvKkMGp1uSfx7wYqjXE1dB1mw7tY0l6qtl53ULc1Q0UQDAXLuPcuf5L5qGZe2Lyrk%2BLp4xcU%2BRWR16SD3wUUFa4tl3SoUEsYn9CQl76ENgNvEcxmzWXAvvtTj5ZVXF%2FDQmYW1plrE7zcwLJbYqRESn32Zc6hXKbelaNOFWmWpCSTUX7kjRUx%2FeDmzZB40S0fk2B%2B8af83g4A%2BD3lP%2B7fCKO4pRRuAR%2FEPcu58ITMLTfUXA1WL8SA6WsaDDTxAqG6qTqNfuVfkTGgp%2FSP5AAD9RPu8HiZDMhHbG1FNGXw3EX5A6AvVVFcMymwib%2Fd6CrgIMdANbTZzT0b%2B6gfrzjp7yOFfL7A%2BtvNlbSyp1CgtWmVqB4pnIjsOnrl2jX7hRoWaFZP%2F5zgz0IGR%2BLSs9gu6Py3YMqJ79el8%2B3n%2BVvDUnUgwConU%2B65RW0JeYpQkVYzajnIAMNs1u2a1ERd03dDcZ7QZJjRiStXVHPUPCOVm%2Bs2sMkQ2F0qNAZ84idQ9fsPMLH%2Bib0GOqUB%2Brpmlb4MT34iKlpxFD2JYf62taZt7PnLlfuvoYShXL4u%2F3rYjBvVO9B%2BFk%2BnmFTLCAbYUimyyCdzoQuzc9xSseNDeo%2BpCfIlDenHO797EjJHJnOk8SaxFDZOVJan8ZxjTLy%2BtmuC9dslO5TZbMwFOPxH%2BAUESCRcGmGCfQH%2FxK%2ByXQwRcYFz5kjolQzNEye5hsJ2wKjGMEH%2FSKvLsD67%2Fzcuiprq&X-Amz-Signature=59de4b5a69f4e7765ca3d4062f422ec54756843e98f840b6451de04c328fa642&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
