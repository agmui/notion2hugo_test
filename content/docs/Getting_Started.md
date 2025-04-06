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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKYABLL%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIBnY9lSPXwHehtAyJ%2BwNAyzggPPr5UI96tRgMfPPFvAIgfNeTODbp3fvGqAoZ06b6zrbW9DT%2B2TNFbHSGPoQubSwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCHrQO5Ze%2BWPdEpoWCrcA3EEORzDzXGUeOfAyXBgubaghT0A4XHbtxLKDecgc2q6v7SpcG%2BkE0n3ouaoJGcwfoLZir3BHbBACjNHtTzAPjX1MXJsMVbYgR%2Bte8n3nYPwf4WesnOHthBOXNKryyT3%2FPCXCPnMkXeUKghroV2xAYZ54sNRvEoLV%2BpZkagUehcpGkXlXEd4ciuIXTmIgOZN70u4JMqxQDw2QHzEVvtP2T1MAkgEZEXo6JnmG9EywP9RwyAfSo9AvGNOKGRv6%2FMxsWRpjIGLVnY6Y21L%2Fwu6kj119gQPxfpneQY286HKgF2LlpJuv5Y%2F72z668nihBCcfd1GCFhcY%2BuFo6KEKtt5sZ8Funk79IC6V5LVAUbtIao86D35IOZ1TdFh8vSJNkI00CajmoQRw9jWThzO5ZQj%2FPNaJqSdy4R986Gb1ncvQ84oxGOM6%2BlexWNj5oNcNJntZ5sa95%2FVRq9LnIuNaZNGP1z%2BsKJmYWNsYB%2F8KBFfyCk9HOs3Ap92fh2M9czrxRuvoCuHpVAHabN%2BZdmASCUK0xyorB3w1%2BMEBaBeXCPPPW4BL29MaIkqAWCdBIVBOWSIYu4o3AioAy1ye8y%2F6%2Bnzhom8tjx%2FzDHVv5UA%2FW9%2BEfXY9aLEz%2BNAJw6QP%2FgIMJ7nx78GOqUBcgJ%2FZQh1T%2FR0NeLexw5e63rDxvKC%2FK1UzI7OlMZG%2FrdAsZ3lUrV%2FD1waBknNMgDmVhRg6ISXeCPmZhgkpKbycp5YHMOyBTGR%2B6HhuagkVGB260M%2Buxt5g53M%2BDipQvnAFxFvfQHqG7tBOwvXRqfUfpUSDZba9HZmQs1MolkSwttgtD2agPmzk2GyoHRS6qYI9%2BgzGl4yKsReHT9xhfs4U0f6K8Ox&X-Amz-Signature=2daf424e05b254051fa72a316f36226337b96cca002ec4ef95e4596f5ce41f92&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKYABLL%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIBnY9lSPXwHehtAyJ%2BwNAyzggPPr5UI96tRgMfPPFvAIgfNeTODbp3fvGqAoZ06b6zrbW9DT%2B2TNFbHSGPoQubSwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCHrQO5Ze%2BWPdEpoWCrcA3EEORzDzXGUeOfAyXBgubaghT0A4XHbtxLKDecgc2q6v7SpcG%2BkE0n3ouaoJGcwfoLZir3BHbBACjNHtTzAPjX1MXJsMVbYgR%2Bte8n3nYPwf4WesnOHthBOXNKryyT3%2FPCXCPnMkXeUKghroV2xAYZ54sNRvEoLV%2BpZkagUehcpGkXlXEd4ciuIXTmIgOZN70u4JMqxQDw2QHzEVvtP2T1MAkgEZEXo6JnmG9EywP9RwyAfSo9AvGNOKGRv6%2FMxsWRpjIGLVnY6Y21L%2Fwu6kj119gQPxfpneQY286HKgF2LlpJuv5Y%2F72z668nihBCcfd1GCFhcY%2BuFo6KEKtt5sZ8Funk79IC6V5LVAUbtIao86D35IOZ1TdFh8vSJNkI00CajmoQRw9jWThzO5ZQj%2FPNaJqSdy4R986Gb1ncvQ84oxGOM6%2BlexWNj5oNcNJntZ5sa95%2FVRq9LnIuNaZNGP1z%2BsKJmYWNsYB%2F8KBFfyCk9HOs3Ap92fh2M9czrxRuvoCuHpVAHabN%2BZdmASCUK0xyorB3w1%2BMEBaBeXCPPPW4BL29MaIkqAWCdBIVBOWSIYu4o3AioAy1ye8y%2F6%2Bnzhom8tjx%2FzDHVv5UA%2FW9%2BEfXY9aLEz%2BNAJw6QP%2FgIMJ7nx78GOqUBcgJ%2FZQh1T%2FR0NeLexw5e63rDxvKC%2FK1UzI7OlMZG%2FrdAsZ3lUrV%2FD1waBknNMgDmVhRg6ISXeCPmZhgkpKbycp5YHMOyBTGR%2B6HhuagkVGB260M%2Buxt5g53M%2BDipQvnAFxFvfQHqG7tBOwvXRqfUfpUSDZba9HZmQs1MolkSwttgtD2agPmzk2GyoHRS6qYI9%2BgzGl4yKsReHT9xhfs4U0f6K8Ox&X-Amz-Signature=0799413a2542dcf573e1aafeb006ec3523f8edc5751130dc276d4d5c4a744ff0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RTMUTH2%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGu7ERYYouf%2B%2FtOL2SphYxANlV265psAzLOAFazbXGVNAiA4DZjaZOcFSeL6g2SrlLO%2Brm6RZNxBG9maebV9nc2Zzyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMsN5IpZd3Vq6eBPnrKtwDBFTB9SGp4MrsHbA35Rl54f2XnJBd1eiC7DJgpPN5x6w6VPqF3I6AHfSZk2qpWUhYY5DgCgEq94cgTQc9L1JLExQ%2F3aPuLyAwKB40ArWsjKqdExaNcwT1fLkzmd1AJIqyMZKpZYL5o%2F3FAS6ErXUrmSRnqOE8%2FmG6OobOjaP1NZBt3UJBZuxXpgTi3S6v042IxE0aVWKPkD%2FR%2FMNs715iYrKzKYZrkbQ65uxiRy0NgJn4tqTNpXuyO9KDbukEFc163YxFFxeQbNRAWL0UFbg12EDWGKrHSD5wPr6ZVnQelmq1%2FdrxV5xF0iUwqoKJraN5aOevG%2BNIpiN9FvLPsRFr%2FMZQUX5oytvdPtMeM%2Fqb%2FAWefqHWeHG4z1megJmaU6h6OnrlZZkK9ypaWSHYmCYR90XUuOou0LDehgOdL6hUF7%2BEadaLsc%2FjVgPbP6HSzpws%2FMigarKS6U7b6UlAmGOXnvQeQuUpRFmkiSqkcTRx5XpIsPV1p61uw7xJEyiQUtmlaEkiyyd8lE9W3wKfAPu53xsWDhFSdZaCtyjlhEdro5wlv9HS3xDpjjjRT1ay0WgZTrDPE90znUw0Dgf%2ByFqUfL02h85l2lRmgftDTGbS04skc9kdFXYVKGTf7xswkt7HvwY6pgG8AdltSClehGsxYULwd6Y%2FENr3KxXQWRdyrEX4NOK%2FutNQTn%2BmkzQ4tJQPsBVDbHnS8VpYHjwmEU1sZJjPCSsOi%2BynPHinL5QMdeDkBPTegpTP28U5HHgKQNMqfp1mazLf%2BogsST9Gn2oVKxSUm1E%2B3Zh2KYisxiSrzucOjgY0mxSUsI%2F5bLdXBfxMY%2BY2jxjKd7Xp%2BvKSn1vLhorUAnVmILnwU6ch&X-Amz-Signature=8cd66d8d3234edd17fa2e85672f8e396c075b1d5ac92504b4e2488a3b1bb101f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YING5KUE%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwS44hO3lrfwIiGO4Smrqp6wd9xGY3MWhzAZkOEusodAiEAmOpjK8njLuw4mPS3YiF8mdWEmBuKZ1s98Ju11lQFmIcq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDN9nPLUN6xRtKs9nISrcAzetH8zZoYLNuEh0sKfl6EE4BrUQgjwaMAh5G3Mgc8ZNDb3eFZi9DQ0OkbGBDVKkmYwvDj9Y9lTUlbzKf9RnW%2BFWUIrkE3V4M1UmcIleZhPPzvjV6suj8dEtXCi9LWbHIDlpdjf4O9BdtgNCQxYVEQPuQZCTSl0tNHuVLk1y6zHHFxRl4h%2BhCg6dcDEbwJqh6il1XDJNTJ4B%2BN8YrD4uvh1S7%2BuiJ%2BbLjIr7iBEZEEwKIWeKc8iHk9NpyUnNCiuPp8riMYCuUP5HfXnCO5bg0SRUphhZKO9aDrIcQv%2Fal%2BgSYLvZwsbVBwFdRfVaAdKo%2Bo8jqFs48W6yjLl3OaP2Y5Ll1AZmMqHiW4fK4PKh%2BKCd%2FoD75JMBlZGBrFSXsjmqfEfZ3bw8seInWYZRkO7SLPBSEPdkXzTGa%2F58koywMQy21f96gfl2YS40UVDR4q3ONq%2B92HOM%2Fi6ULwYmPP7ezPaj%2FTgcnNFUh3UxOrG7cGriiHAyPYFXvPdX8DNSsSRFR1WZVG1DAWxEYot619MWHfWXoNn2NWi3WFHnG0fEuSle3bJnH%2BsPbOGLf%2FjCyNEPgE3Sv7bPm%2BY9MgsVsJlwQSbF2SsJzNGFSbdEJho%2FjGd0EG%2BQeavVTJ7zQB4HMJzix78GOqUBKy4IJg1ftHwhnZiCAS2xurDXDTFzQtp543z3f4h0DDK9aI8fbFNb7R83dPoS8EFlUSTVc8s%2Bx6o1QVswmM25RIXXsLPF26LoHzTzs2jXK7zN1Hvs7Wa99WxSGTqWN2j0KfuNIDUE0%2F6Q2W82sytdtyByOky08MehGDWg5HUWe3mivLBsq43o6x5Iaw0qZzh5aqOSFRFAY0F6GyauWL1YzlH18wvU&X-Amz-Signature=c9477c146e93894c31c0880da04bbba79061f382b04a0c2e85ba37593526d443&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKYABLL%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIBnY9lSPXwHehtAyJ%2BwNAyzggPPr5UI96tRgMfPPFvAIgfNeTODbp3fvGqAoZ06b6zrbW9DT%2B2TNFbHSGPoQubSwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCHrQO5Ze%2BWPdEpoWCrcA3EEORzDzXGUeOfAyXBgubaghT0A4XHbtxLKDecgc2q6v7SpcG%2BkE0n3ouaoJGcwfoLZir3BHbBACjNHtTzAPjX1MXJsMVbYgR%2Bte8n3nYPwf4WesnOHthBOXNKryyT3%2FPCXCPnMkXeUKghroV2xAYZ54sNRvEoLV%2BpZkagUehcpGkXlXEd4ciuIXTmIgOZN70u4JMqxQDw2QHzEVvtP2T1MAkgEZEXo6JnmG9EywP9RwyAfSo9AvGNOKGRv6%2FMxsWRpjIGLVnY6Y21L%2Fwu6kj119gQPxfpneQY286HKgF2LlpJuv5Y%2F72z668nihBCcfd1GCFhcY%2BuFo6KEKtt5sZ8Funk79IC6V5LVAUbtIao86D35IOZ1TdFh8vSJNkI00CajmoQRw9jWThzO5ZQj%2FPNaJqSdy4R986Gb1ncvQ84oxGOM6%2BlexWNj5oNcNJntZ5sa95%2FVRq9LnIuNaZNGP1z%2BsKJmYWNsYB%2F8KBFfyCk9HOs3Ap92fh2M9czrxRuvoCuHpVAHabN%2BZdmASCUK0xyorB3w1%2BMEBaBeXCPPPW4BL29MaIkqAWCdBIVBOWSIYu4o3AioAy1ye8y%2F6%2Bnzhom8tjx%2FzDHVv5UA%2FW9%2BEfXY9aLEz%2BNAJw6QP%2FgIMJ7nx78GOqUBcgJ%2FZQh1T%2FR0NeLexw5e63rDxvKC%2FK1UzI7OlMZG%2FrdAsZ3lUrV%2FD1waBknNMgDmVhRg6ISXeCPmZhgkpKbycp5YHMOyBTGR%2B6HhuagkVGB260M%2Buxt5g53M%2BDipQvnAFxFvfQHqG7tBOwvXRqfUfpUSDZba9HZmQs1MolkSwttgtD2agPmzk2GyoHRS6qYI9%2BgzGl4yKsReHT9xhfs4U0f6K8Ox&X-Amz-Signature=7b9536dbc454ad515b2e8a8af4389db850e55892bad74872291ebf5b83b6e230&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
