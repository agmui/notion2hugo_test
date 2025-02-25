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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLUDRXHA%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIC9LiLeG0fbYc%2BfZIe5A06VoOIt22X3IN1I4isfzW%2FiPAiEA0voI7gj07n5G30eD47Ypwx3M3NSCkekzX808oHvchYcq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDLr4MPS3H8C9pYhfWircA58GNNeR1eMrRpbQs9czullcRBLkR4bshQWp4Co3y8ejdncM7qcCnvgWPPnqs1EUQMXGR%2B%2FqKoPw4LPn86dE0yYupvMmiTXpKAYYhRSmh7nAaq8r6z22E63%2F7aUEOB8i2HbbTeQcbdPo2UyWAJyynV8MzrfeHrJiODvmfinKdPqSAu9VA6PTffT73HddS9cw2qfYo77kXbbaevarAiKBX8hSNsrS8mjbX5qiIZwUPxM9xaGJH6Uznyk4uu%2Fq0ceMOEcLWQbot4xlZNvd24ya0oom7y6e0e5jlsVmIH7Zk8AHBYPVPz0a8a70%2FSHvK2oj4wye1JXEDWVQPajdOVNFkPbV3TE8jymHI8G0XW4AwmMpkmm%2B%2BKe%2FqxGmPIcy0HsRPUXvbXvW3%2FvQUN0JWulfP568wdV0%2BSikUPok99EpfLwtLr8w1uFlgHbKkFDlFq9Y9ef3gCVYfp%2BNpCUMFV77ZZa52%2FHs9vVqTyCnPLJAOaK3wMLEoIFvmOhGkMDQ7ZYu34to8LuKf%2F5Po3BYiwltCb3FNjmtQizPjYKXwpFNFrKXUSQXGTuBaji%2BEx%2BpbFoYpYXgdLfL5KHQbR4wLVDWnHkpXNBwURkDFeRXeMPRFtYrMky3GHSPPJGvOdWJMMTL9b0GOqUBI6d8m4ITuUcXZ3TKkFJf7JH8%2FsBAeJWAYnF8LYlAbOMLlfCZu%2BCDHDrRD5cBRnQG5lecuV5DOtAC0RBvgPr58CIIIN4E8L%2FuueqKLvgmepaY2lL8N6Tlt95miSyRc9qMYWC%2F8gQTY%2B4XOAWJT64gHIjA5RoYDUCy0b6IlbsL%2FSXpm15lSG3Je1nX8oRKdGkLjBskuqaLYGQPnbYOu6hWb88mpSYB&X-Amz-Signature=b3d8aac108807dbd92c538a2e14f90fafb5b3dad23789e0e389996a1893031c1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLUDRXHA%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIC9LiLeG0fbYc%2BfZIe5A06VoOIt22X3IN1I4isfzW%2FiPAiEA0voI7gj07n5G30eD47Ypwx3M3NSCkekzX808oHvchYcq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDLr4MPS3H8C9pYhfWircA58GNNeR1eMrRpbQs9czullcRBLkR4bshQWp4Co3y8ejdncM7qcCnvgWPPnqs1EUQMXGR%2B%2FqKoPw4LPn86dE0yYupvMmiTXpKAYYhRSmh7nAaq8r6z22E63%2F7aUEOB8i2HbbTeQcbdPo2UyWAJyynV8MzrfeHrJiODvmfinKdPqSAu9VA6PTffT73HddS9cw2qfYo77kXbbaevarAiKBX8hSNsrS8mjbX5qiIZwUPxM9xaGJH6Uznyk4uu%2Fq0ceMOEcLWQbot4xlZNvd24ya0oom7y6e0e5jlsVmIH7Zk8AHBYPVPz0a8a70%2FSHvK2oj4wye1JXEDWVQPajdOVNFkPbV3TE8jymHI8G0XW4AwmMpkmm%2B%2BKe%2FqxGmPIcy0HsRPUXvbXvW3%2FvQUN0JWulfP568wdV0%2BSikUPok99EpfLwtLr8w1uFlgHbKkFDlFq9Y9ef3gCVYfp%2BNpCUMFV77ZZa52%2FHs9vVqTyCnPLJAOaK3wMLEoIFvmOhGkMDQ7ZYu34to8LuKf%2F5Po3BYiwltCb3FNjmtQizPjYKXwpFNFrKXUSQXGTuBaji%2BEx%2BpbFoYpYXgdLfL5KHQbR4wLVDWnHkpXNBwURkDFeRXeMPRFtYrMky3GHSPPJGvOdWJMMTL9b0GOqUBI6d8m4ITuUcXZ3TKkFJf7JH8%2FsBAeJWAYnF8LYlAbOMLlfCZu%2BCDHDrRD5cBRnQG5lecuV5DOtAC0RBvgPr58CIIIN4E8L%2FuueqKLvgmepaY2lL8N6Tlt95miSyRc9qMYWC%2F8gQTY%2B4XOAWJT64gHIjA5RoYDUCy0b6IlbsL%2FSXpm15lSG3Je1nX8oRKdGkLjBskuqaLYGQPnbYOu6hWb88mpSYB&X-Amz-Signature=26dee71f05fc3329186467a3443e4f39fd5ae06abc73b94ceb5842175af69261&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP2GVX37%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQC%2FJ5uOhfn1fOwwo2IcgzvInkM3cOqY4BVXBC93RxARSgIhAOq9vbTotuLO%2FU9TdLUJZ3XN7KW63NIw%2BTOIuWKfj9JgKv8DCEAQABoMNjM3NDIzMTgzODA1IgzSQ6qYZLAgRST%2BItIq3AO98exXdGcHkFWKiBHyPglFmGcEeuP6z3ugIbhAZxuNJOnBn6vJEPQpajjkeA2ren%2BgjxvGb191%2BVIR34CZcICPmGr4zL%2FpDk9mMK4nnFEmhxg4u1zeXhDeki7K4Y7bk3hL5EfOw%2F1PhCBSmSlJkCbQ4Rlvfs%2FT6k0lA3vYixfHAlIM5mk1M7VF7OzgOjFJwC0fbybqq4h9PLxlYcinjUnC1j7YsKIEgFGpEtHYO0ZyCjRxO3%2FRbYcDnPVndy62wvSrmAG0h6GCqZaWgfFhz8S3NgW42%2BkhSr9pOU90cCE%2FDcJvVVXQMtnE8LAaQz7UM2kCdD6u6qCjNd%2FRaT12qMn3JatiBNMauKu%2BpTUZgNxR9ataMPxrcVZlEqY6kuBf5I35lvLg5uGLLUQy5Z5LHOIs7IhoxYbDrLpr6OEZezQS1qD15Yko0RWS%2BvJLyW43BfmQfBKuI9lmHMZiSI4NdtaKvLmqOk0kh314M4myCtAF1Joesa8FtU1ZCH4nmn2nocLp8M%2F5JJ%2BvSvULoNBGMKABXmMlhZdBWfzB8w2WdO7XSSpEfQOAsojlxynPid4RbDrT8on2Klngm0xdlqws1cNzEaBxWZ%2BSO3%2Fl5q7Eh6ztagTbXEMcKlWT%2BLEzozCKyvW9BjqkAf%2B1H5SeYVKIXjTl67kOffAWakIBhWRAWqb9sdD4qxnmLOTnKPTSVg6cYaFUJVkyUde8eoJTXTE%2Bh4HP4ISFln19jhI0zS6D1MNj9HJh5Een%2B5QxDeBnnpR5lJXadb6%2FwBPjeZWeObb6mNRPPSwp%2BHYlxdJSYlu2CcIRyPViJCPCdzNe%2BBApXxtaxsH4ejJBPvEcyNYofs%2Fek4jTVMY%2FQGyfqrc3&X-Amz-Signature=9c4d6d25c911496f94ff906dbd5d5cc25185cd32f764767413ebf5ec7a2cb453&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAVQ67VW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDFX7i3OtDjCq0rD75HfQ9GB5zY3GMvo725P4vG2ThgxQIhAP6ySYZshqSXrKmxAPNIU381KfmIqjvwsb1YK9WAXhP0Kv8DCEAQABoMNjM3NDIzMTgzODA1IgzPzNt8cWY5pK4DioIq3ANg1Emc2dz9zX%2BP8EnkYDrE8ZGX9FLLnNBwvPO0a4KdQiIpB6oKes6oIBzc%2BT9Doarv5vxfCgFr1%2Bmm6DVG59yeTIkyOt7USq%2BtQ0OOiU%2FXBobc70wHBarZasWNXgfAjKysvSlEYzaE3O5JnZwhYfRoD511527k4nTPOXgAAI7oi6%2F9E6DfqJIFE5BNY7ZueB%2BK%2BXCd0QhSZfTHBrbWK4eUz%2FOqw7FMIiOKjiSMpnx8D2LSfU7SjKpL7s4FA2KsEB8OodT32GHpIdlqOsPIEqppPzhjPcprRAG%2FM%2FQJQcuLPPGuvDIsg0bVy1L0%2Biu4AeFoxP45A0426KItnQi5Ctw3I0dr5qrmDz%2Bsdc08uGb915Qv5SS5fqTn0sfdfjXbf2fUQc1NnRa%2FAXbSbSI8d152PnRfff18vOQ9al7UoDo4OxCuuILw6ynZjmT6UEew1nJxXyigLlIs3vtXvSRuMwp%2Bd8zpfbTjv9N4fTosBQxsj3SZ6V0X0efzFt6CHMOtXF4Pd6qVJY4bSLbVFTzEAAPrdECEaL8%2BMuHbM5K3lw7NEMvhe8W%2Fh1hBwMqo4xXoHv7gGDIMUYVWM%2B%2BAUxLcWzjGHhrWC55izKwa3DGIrgV1Xj6HaAde7dJZqtHxRzCSyvW9BjqkATtPBePSFjhIe%2BqpJ4jOQzo1yG1Sf%2FPHIvZmddo%2Fn%2FgeeySAcYVFZhyvS154yqKkbt0Wlhw2ex4IRYmqHq0kwxpIVkLlIr%2B5kxXv%2BczOx1bpCn040SzCeLodlbeuW6RnquTy7992CYfHPl3FNTxHcl1cHCWeRVMpdoygESAlaYywMFFCWjKOpXoCAxuzB58vR%2BTCDqx5ViONkQTAsq5GReQlxxPB&X-Amz-Signature=3b4cf686f235c1b55ddb64cb6e4923d31afeb017d0255b7c984990ee512271ee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLUDRXHA%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIC9LiLeG0fbYc%2BfZIe5A06VoOIt22X3IN1I4isfzW%2FiPAiEA0voI7gj07n5G30eD47Ypwx3M3NSCkekzX808oHvchYcq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDLr4MPS3H8C9pYhfWircA58GNNeR1eMrRpbQs9czullcRBLkR4bshQWp4Co3y8ejdncM7qcCnvgWPPnqs1EUQMXGR%2B%2FqKoPw4LPn86dE0yYupvMmiTXpKAYYhRSmh7nAaq8r6z22E63%2F7aUEOB8i2HbbTeQcbdPo2UyWAJyynV8MzrfeHrJiODvmfinKdPqSAu9VA6PTffT73HddS9cw2qfYo77kXbbaevarAiKBX8hSNsrS8mjbX5qiIZwUPxM9xaGJH6Uznyk4uu%2Fq0ceMOEcLWQbot4xlZNvd24ya0oom7y6e0e5jlsVmIH7Zk8AHBYPVPz0a8a70%2FSHvK2oj4wye1JXEDWVQPajdOVNFkPbV3TE8jymHI8G0XW4AwmMpkmm%2B%2BKe%2FqxGmPIcy0HsRPUXvbXvW3%2FvQUN0JWulfP568wdV0%2BSikUPok99EpfLwtLr8w1uFlgHbKkFDlFq9Y9ef3gCVYfp%2BNpCUMFV77ZZa52%2FHs9vVqTyCnPLJAOaK3wMLEoIFvmOhGkMDQ7ZYu34to8LuKf%2F5Po3BYiwltCb3FNjmtQizPjYKXwpFNFrKXUSQXGTuBaji%2BEx%2BpbFoYpYXgdLfL5KHQbR4wLVDWnHkpXNBwURkDFeRXeMPRFtYrMky3GHSPPJGvOdWJMMTL9b0GOqUBI6d8m4ITuUcXZ3TKkFJf7JH8%2FsBAeJWAYnF8LYlAbOMLlfCZu%2BCDHDrRD5cBRnQG5lecuV5DOtAC0RBvgPr58CIIIN4E8L%2FuueqKLvgmepaY2lL8N6Tlt95miSyRc9qMYWC%2F8gQTY%2B4XOAWJT64gHIjA5RoYDUCy0b6IlbsL%2FSXpm15lSG3Je1nX8oRKdGkLjBskuqaLYGQPnbYOu6hWb88mpSYB&X-Amz-Signature=0764f74b33e393fffb87d946e22180e244d02405e10cdd3ae4d49fc68a1107b7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
