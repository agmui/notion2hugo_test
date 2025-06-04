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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWILDITA%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDJ1XjusdncWrPu43WVXB1oRzBkvOEiEWhcCVnaSCT%2BMAIgPwuZlvf9%2F%2Fs8vIZMVYbF4drj5UWJnjKg1N1fiY51tmUq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDEsjftZNxm2w94rRrCrcA1c871QVbYGG4SQyC%2B2pft2trYt6EYQhq5jTD%2FboGQyja4WQJNAPWTjIE7jGOx4B5ZqzhDmM%2B9t%2BISBpNvSPXDL2upbsdahC7SEIxOK6EC39BjAfVGJub8McO%2FG4ci6m%2Ftl0TAik5klp5mgwzgjSLRsPlvm%2FXFaaIXjP7SqselfeZioE5wcxDGfoiwjS%2FV9Nnjoo8vfLmugwSSc3QbfV3XLJdXDHylXi3tP95aMFEXC3uWkIBCos1TohsCOnzbVmZ263CEGo142EPBtfH6YmypDRnwG7DOG0epLNOxlsTdyAkZFkNebRbqqN%2F60df%2Ffm%2Bfx%2BIq8GVCHmwIIJKQtit4prH4COerPxf9wT6s3zb1bqjgKT8zi1AfBNDmFkwDQA26OXlaFjiPKZgK3ZCee1PKiKgdgUA88OHG3alnpvV0ywNN2zKinIz020y5Wym%2FHyJ6%2BrFsGpjfKM1lPUv0sKHv0OZ%2BaAKss4dEDNSktSiHN4Irb4LAz3ZBtcA08zOrmqxoiwt0kfhQnudPmxT4naBAU%2B2%2FwrPohJbWX%2FTlOniWJwWbYJGl5TSk0URiYA%2BBVdyQSD8WitPwPw3AFinip3Kr275GaKlwtB70OmFnuBHMGXSWT8VLl24eKnLrMAMJ7egcIGOqUBiF09UwZP%2BbG4ilsS%2BljcpGk42wDPUQR0tMpC6vym8dOLuiY2NTOLK3sDUw9U9UR5s6JkvA9ISMTGGPACtpELM%2FcB5cqOX0ks%2F%2BBiV6%2Fgmxa6XbNk01D2G5OJ%2BH%2BhMK4Utyp9pK7ChgP5k3%2BFsXKc3V6pDUEJiivEveWWQLTSsojYYjVayv7%2Fc6ljvnqdIeylELeXPi%2F4mTLvDFst0KggUBNoau1O&X-Amz-Signature=0ae325d34ee6b56926d7a2da8e4cc4ae9cc352f1b03010107cfdd1645f07800b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWILDITA%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDJ1XjusdncWrPu43WVXB1oRzBkvOEiEWhcCVnaSCT%2BMAIgPwuZlvf9%2F%2Fs8vIZMVYbF4drj5UWJnjKg1N1fiY51tmUq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDEsjftZNxm2w94rRrCrcA1c871QVbYGG4SQyC%2B2pft2trYt6EYQhq5jTD%2FboGQyja4WQJNAPWTjIE7jGOx4B5ZqzhDmM%2B9t%2BISBpNvSPXDL2upbsdahC7SEIxOK6EC39BjAfVGJub8McO%2FG4ci6m%2Ftl0TAik5klp5mgwzgjSLRsPlvm%2FXFaaIXjP7SqselfeZioE5wcxDGfoiwjS%2FV9Nnjoo8vfLmugwSSc3QbfV3XLJdXDHylXi3tP95aMFEXC3uWkIBCos1TohsCOnzbVmZ263CEGo142EPBtfH6YmypDRnwG7DOG0epLNOxlsTdyAkZFkNebRbqqN%2F60df%2Ffm%2Bfx%2BIq8GVCHmwIIJKQtit4prH4COerPxf9wT6s3zb1bqjgKT8zi1AfBNDmFkwDQA26OXlaFjiPKZgK3ZCee1PKiKgdgUA88OHG3alnpvV0ywNN2zKinIz020y5Wym%2FHyJ6%2BrFsGpjfKM1lPUv0sKHv0OZ%2BaAKss4dEDNSktSiHN4Irb4LAz3ZBtcA08zOrmqxoiwt0kfhQnudPmxT4naBAU%2B2%2FwrPohJbWX%2FTlOniWJwWbYJGl5TSk0URiYA%2BBVdyQSD8WitPwPw3AFinip3Kr275GaKlwtB70OmFnuBHMGXSWT8VLl24eKnLrMAMJ7egcIGOqUBiF09UwZP%2BbG4ilsS%2BljcpGk42wDPUQR0tMpC6vym8dOLuiY2NTOLK3sDUw9U9UR5s6JkvA9ISMTGGPACtpELM%2FcB5cqOX0ks%2F%2BBiV6%2Fgmxa6XbNk01D2G5OJ%2BH%2BhMK4Utyp9pK7ChgP5k3%2BFsXKc3V6pDUEJiivEveWWQLTSsojYYjVayv7%2Fc6ljvnqdIeylELeXPi%2F4mTLvDFst0KggUBNoau1O&X-Amz-Signature=1d337c38772094f796ffb6191d32e9efe6dcb4f1a30644e0fc4f68b4d2fc3fd3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWILDITA%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDJ1XjusdncWrPu43WVXB1oRzBkvOEiEWhcCVnaSCT%2BMAIgPwuZlvf9%2F%2Fs8vIZMVYbF4drj5UWJnjKg1N1fiY51tmUq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDEsjftZNxm2w94rRrCrcA1c871QVbYGG4SQyC%2B2pft2trYt6EYQhq5jTD%2FboGQyja4WQJNAPWTjIE7jGOx4B5ZqzhDmM%2B9t%2BISBpNvSPXDL2upbsdahC7SEIxOK6EC39BjAfVGJub8McO%2FG4ci6m%2Ftl0TAik5klp5mgwzgjSLRsPlvm%2FXFaaIXjP7SqselfeZioE5wcxDGfoiwjS%2FV9Nnjoo8vfLmugwSSc3QbfV3XLJdXDHylXi3tP95aMFEXC3uWkIBCos1TohsCOnzbVmZ263CEGo142EPBtfH6YmypDRnwG7DOG0epLNOxlsTdyAkZFkNebRbqqN%2F60df%2Ffm%2Bfx%2BIq8GVCHmwIIJKQtit4prH4COerPxf9wT6s3zb1bqjgKT8zi1AfBNDmFkwDQA26OXlaFjiPKZgK3ZCee1PKiKgdgUA88OHG3alnpvV0ywNN2zKinIz020y5Wym%2FHyJ6%2BrFsGpjfKM1lPUv0sKHv0OZ%2BaAKss4dEDNSktSiHN4Irb4LAz3ZBtcA08zOrmqxoiwt0kfhQnudPmxT4naBAU%2B2%2FwrPohJbWX%2FTlOniWJwWbYJGl5TSk0URiYA%2BBVdyQSD8WitPwPw3AFinip3Kr275GaKlwtB70OmFnuBHMGXSWT8VLl24eKnLrMAMJ7egcIGOqUBiF09UwZP%2BbG4ilsS%2BljcpGk42wDPUQR0tMpC6vym8dOLuiY2NTOLK3sDUw9U9UR5s6JkvA9ISMTGGPACtpELM%2FcB5cqOX0ks%2F%2BBiV6%2Fgmxa6XbNk01D2G5OJ%2BH%2BhMK4Utyp9pK7ChgP5k3%2BFsXKc3V6pDUEJiivEveWWQLTSsojYYjVayv7%2Fc6ljvnqdIeylELeXPi%2F4mTLvDFst0KggUBNoau1O&X-Amz-Signature=152f6f555639410765f90ff782b2cbc037ef51371d9529ec18a5d14b8b586629&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNTZ7MNJ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJFMEMCH2p3unjq9Z%2B77jnvSULuklzfHs7JvvmiFZHiXoagRdACIHVYqFeLHCF4z1e0r9f9OzG9Sy5INVtf3I364vqcpv3YKv8DCDEQABoMNjM3NDIzMTgzODA1IgxjdrGmgCx8UY%2BVrPcq3AP5LoQpoBvxbizt9KP4N1OUo3%2FPUEsKelf7uQJPeiFfB3idSMoirQAdqVDhIKcuhPOjhtO%2FPsxMZVL7zYYAF83ybK8ccmZ3Ar5u039Ki71dtLhkL4iB%2FwTCilQPa8mxRIm8DkIZ4Cm3uxJ%2BOa8rleXmeROcGFNuIvn6XXkMniX%2BSZz5rox8iHZPTQMQd6rVlVoTF06Cf1tT%2Fl03JXWhQ2Lu2VVQfg5GoPXUvFu5L9SmoQg4%2FvVm60ffJ2AWV9fQ6yvZ7hWlrhzXJMmaMcGyRge8sxnBcf3wxAAPAV1IerRWvfF7mzW2ArS6NRtNHkQEHk60pxg89uEWkVtwSsz5XrV0232Xn%2B3DF7cD5a5bRjwaQQ4mGQYg%2B0%2FANDeaaCUDyoXPaClBJHKqM5TdWupnoxmtRZAAcD12anVpXqnV59hX8LYWl1EP4vq11c9Pnw6ch%2Bqd3oNkuG2RHYHVvH07HkCfZ1Q1yrpVwi0Qm%2FKym3oY5TBIO6tHhjxDxsyoWOxkHnUAp9uGKd2CG7%2FTyez6dMP4lfMN%2FjkUE0Je%2Bj9aHFtyQSclRP99I1UoFyK%2FZh7NYYrrR4CziUa7uGqLStKMCWZE2lkd%2FE0CoaRvbn0dvq88U%2B0LrwLHpg1HBRV9NDCp3oHCBjqnAcMPZbrlWIoPMnrthNBqbRZbtXFLllAjABjqCS0z0umLHBHlIKysqLdfQwfxh4PRBO4XXvNXnUaD5qguhZxACxi9WfIimZVV3Nr2PAkY2c87RgDnY%2FJgAIwU96Eov%2BMpODoKp%2FCnl0VeKTK6P85hhJV5Ywu17p0Lm%2BJWs3NnIoTiteJ7E3JFUavli3pyrww30x38D018%2BZW50GiNkre5h%2Bw2RMkDd7mV&X-Amz-Signature=a782be5784c747b583fe274657836eea280f72b8fe39c7ab5cde48fae0f3c6e9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FY75ZDK%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICGNndokzRS4eub1wtesd0wvDPo%2FMnjF5OhYr%2BGzCbN%2FAiEAvIgKF6%2B7R27UkiqpaCuWNdkbl3En%2BtaAiqxKO7%2BNqiEq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDElFQ4s8e1Z2jAANQCrcA9k7MsKRWdkO%2BSMGbZCvDpkc7f1VnnRmaB3zRv0yTEl4LNVbPCGE4H5lHfq8ZOo1DP9LUF3hDQNhaWZOLZEZLjNleY62SKcRyn3ogL25Tyxd67%2B4K9P0Vmh38kmAKSaX9FW1cpmWxkIQ4CI3hDTgTi1VsEsA1i4eAa8cRDxsHV5%2BwQgdEWUkhj9ccC%2FBL1A89ihZPAt%2Bu5IW2ZQRAVnPRhH7CqiXs3sRgI%2BeiIwdkZQTxxrjPhSaqmu5YY0w3bwFKHQIPoIuvPe9wBkXDYd%2BpuZ1VUf8qqWh4vvhJhsV1W2KRmD7BH3AMQeOg0nL9qMMYxeLVuWTKzx80iJMZwTY%2BpJhdR%2Fzat8VZAEPLvXFpeuPzIrYCqwj8N%2BAr%2FUwXXUXzklbi5PjoacUJjVdwKYMTxB14zfLB9RZ3n7aWVrp2JMgmEvFzeOzdublUgkHpzSBu1F27kBnXWX9NgMQVFsOOzDTxmlyFnex9oiI5UpUiY3GD6vS28Ql0IeKVY0KR5%2BaSLiY6dX1Zdl9h%2FhHHsegJPgng7Y8exJTc9yPwyKljS%2Bymrs6GNSTlYNXDObSY8bjjeXnRrasymQx6Mn1mMAZ8WOMLYe0wOK2D5TGURdZ7FnqLu%2BHiXvidXS7bBwkMI%2FegcIGOqUBlhhIZtp3X1DnBlnuF1z%2F1CTcEIgSOJCHfbMkCYNXqmph0weN9HmXAC6geQgwDHAOQST8vc%2F0jwBiVwHyITRaN6tlMRNqnEbhffWeJ2fFWWp3DRGh4lPxmpnFv%2B0BuxhYW7CZubb4DgynIvh4sWACcdG4j%2F2f1g6fxJwitrNEDq6YIYipydzFSvdLUidcL8sXcC7aZvzFwPJNVyvDQvQvmoUXE8nM&X-Amz-Signature=72721b3ef4d5597a87a676c5e4216daeeb55b477ae0b723f1c5f154325fb20e0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWILDITA%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDJ1XjusdncWrPu43WVXB1oRzBkvOEiEWhcCVnaSCT%2BMAIgPwuZlvf9%2F%2Fs8vIZMVYbF4drj5UWJnjKg1N1fiY51tmUq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDEsjftZNxm2w94rRrCrcA1c871QVbYGG4SQyC%2B2pft2trYt6EYQhq5jTD%2FboGQyja4WQJNAPWTjIE7jGOx4B5ZqzhDmM%2B9t%2BISBpNvSPXDL2upbsdahC7SEIxOK6EC39BjAfVGJub8McO%2FG4ci6m%2Ftl0TAik5klp5mgwzgjSLRsPlvm%2FXFaaIXjP7SqselfeZioE5wcxDGfoiwjS%2FV9Nnjoo8vfLmugwSSc3QbfV3XLJdXDHylXi3tP95aMFEXC3uWkIBCos1TohsCOnzbVmZ263CEGo142EPBtfH6YmypDRnwG7DOG0epLNOxlsTdyAkZFkNebRbqqN%2F60df%2Ffm%2Bfx%2BIq8GVCHmwIIJKQtit4prH4COerPxf9wT6s3zb1bqjgKT8zi1AfBNDmFkwDQA26OXlaFjiPKZgK3ZCee1PKiKgdgUA88OHG3alnpvV0ywNN2zKinIz020y5Wym%2FHyJ6%2BrFsGpjfKM1lPUv0sKHv0OZ%2BaAKss4dEDNSktSiHN4Irb4LAz3ZBtcA08zOrmqxoiwt0kfhQnudPmxT4naBAU%2B2%2FwrPohJbWX%2FTlOniWJwWbYJGl5TSk0URiYA%2BBVdyQSD8WitPwPw3AFinip3Kr275GaKlwtB70OmFnuBHMGXSWT8VLl24eKnLrMAMJ7egcIGOqUBiF09UwZP%2BbG4ilsS%2BljcpGk42wDPUQR0tMpC6vym8dOLuiY2NTOLK3sDUw9U9UR5s6JkvA9ISMTGGPACtpELM%2FcB5cqOX0ks%2F%2BBiV6%2Fgmxa6XbNk01D2G5OJ%2BH%2BhMK4Utyp9pK7ChgP5k3%2BFsXKc3V6pDUEJiivEveWWQLTSsojYYjVayv7%2Fc6ljvnqdIeylELeXPi%2F4mTLvDFst0KggUBNoau1O&X-Amz-Signature=84281a06d1de51ffdc58251e8179917691cf98b2a581df866a09ab551ff7a72e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
