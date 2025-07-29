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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIJAXWDA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGn3RdISKb4EDqFzmJCKLKvRtdm7DTcCiMlETU3HsQ5nAiEAgTapxkvEECjPl%2B%2B9iSYb5AKq5bTKih36KfEKBUYJxoYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeFIn4y5jr7LnvhZyrcA6vZXeZnxc8TqlN1fIogw8cXWtsHpAdQLXHcweFx5OCQjjQJ9isb6K7NxIRMnRLgcRx4I2RX3pj8iopxEyeq9PguTjjAsggDbLAaG%2Ble97UxDn0nKhpBNnUBAzjb1fyTLZGV33DAnb8J59FJoBYdnBzvyc3QVQhdbn7PhlFga6pVSMmGKlxG9zS6S1m6ao7bWfXgIFLtK2ieXGVwtxOEvNV5veK5XsqBLw%2Bl0K19z2XsSsrkH%2F2bIPvuV5s1ZxXOCom82hrJJujbqF%2FcXtIw%2B1SIhrLIl6hocCe2sPBkBLvrWPZikEowY7ffxm7fbrlkxakXIthQXC2zdIfG8wNHcGtvx431e%2FB02BTSUF5PHENTx5OsacwkhdpJcaaNsPV0qFa7i%2Bi5cQYrlI3jpjMcWJ3h5WxJwXoA%2BbWUG32VlN77QHXDIlZoKYO8a8DE0fwBZWIxs9L%2BuA2swFX5t3NNGRhLq2%2B9T8sEd%2Bor7CRyfd6g0x91TPNrFCLyAbtaarTJHdLE2ei%2B6ikTm1ioJi2XqKcLif6snHASRxrpadZwgLjmffo40vbNQa9BWDcq%2F4wQ0EQNNLfIYyjwrSJCo8w7sOcn03o4ajqX%2B8vT05rGgQs8b7Lr%2Fh4xHy72J7ysMN%2FdpMQGOqUBPablpm8HsNX9OEdwzI17T4%2FFPwd0DT5mluKPo91xcpbIgeK6eQyJJFCtgfMyfESJPbpJcDBlZ2laoRcOqEMPcph8n6bHeELn51e2Xp%2BW6RqqxkHcoLpltKt9yE6aIbshZvgTK%2Bp88JtJEQR1gnNleuFfPxKXu27qLvBvXrGhrsG%2Fg%2FL8nliAUwWj6mwUJQVHAF2HFCk4hRtbnoc9z9M7LiKUVRnb&X-Amz-Signature=232a541da52f4490d1f65271d7ea8cad5ab481eeb08aa8a204a8de144921f31e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIJAXWDA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGn3RdISKb4EDqFzmJCKLKvRtdm7DTcCiMlETU3HsQ5nAiEAgTapxkvEECjPl%2B%2B9iSYb5AKq5bTKih36KfEKBUYJxoYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeFIn4y5jr7LnvhZyrcA6vZXeZnxc8TqlN1fIogw8cXWtsHpAdQLXHcweFx5OCQjjQJ9isb6K7NxIRMnRLgcRx4I2RX3pj8iopxEyeq9PguTjjAsggDbLAaG%2Ble97UxDn0nKhpBNnUBAzjb1fyTLZGV33DAnb8J59FJoBYdnBzvyc3QVQhdbn7PhlFga6pVSMmGKlxG9zS6S1m6ao7bWfXgIFLtK2ieXGVwtxOEvNV5veK5XsqBLw%2Bl0K19z2XsSsrkH%2F2bIPvuV5s1ZxXOCom82hrJJujbqF%2FcXtIw%2B1SIhrLIl6hocCe2sPBkBLvrWPZikEowY7ffxm7fbrlkxakXIthQXC2zdIfG8wNHcGtvx431e%2FB02BTSUF5PHENTx5OsacwkhdpJcaaNsPV0qFa7i%2Bi5cQYrlI3jpjMcWJ3h5WxJwXoA%2BbWUG32VlN77QHXDIlZoKYO8a8DE0fwBZWIxs9L%2BuA2swFX5t3NNGRhLq2%2B9T8sEd%2Bor7CRyfd6g0x91TPNrFCLyAbtaarTJHdLE2ei%2B6ikTm1ioJi2XqKcLif6snHASRxrpadZwgLjmffo40vbNQa9BWDcq%2F4wQ0EQNNLfIYyjwrSJCo8w7sOcn03o4ajqX%2B8vT05rGgQs8b7Lr%2Fh4xHy72J7ysMN%2FdpMQGOqUBPablpm8HsNX9OEdwzI17T4%2FFPwd0DT5mluKPo91xcpbIgeK6eQyJJFCtgfMyfESJPbpJcDBlZ2laoRcOqEMPcph8n6bHeELn51e2Xp%2BW6RqqxkHcoLpltKt9yE6aIbshZvgTK%2Bp88JtJEQR1gnNleuFfPxKXu27qLvBvXrGhrsG%2Fg%2FL8nliAUwWj6mwUJQVHAF2HFCk4hRtbnoc9z9M7LiKUVRnb&X-Amz-Signature=a2874fa339779a771fd6abebaff6ef999b09c499434d9f92dc889c646ad3acc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIJAXWDA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGn3RdISKb4EDqFzmJCKLKvRtdm7DTcCiMlETU3HsQ5nAiEAgTapxkvEECjPl%2B%2B9iSYb5AKq5bTKih36KfEKBUYJxoYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeFIn4y5jr7LnvhZyrcA6vZXeZnxc8TqlN1fIogw8cXWtsHpAdQLXHcweFx5OCQjjQJ9isb6K7NxIRMnRLgcRx4I2RX3pj8iopxEyeq9PguTjjAsggDbLAaG%2Ble97UxDn0nKhpBNnUBAzjb1fyTLZGV33DAnb8J59FJoBYdnBzvyc3QVQhdbn7PhlFga6pVSMmGKlxG9zS6S1m6ao7bWfXgIFLtK2ieXGVwtxOEvNV5veK5XsqBLw%2Bl0K19z2XsSsrkH%2F2bIPvuV5s1ZxXOCom82hrJJujbqF%2FcXtIw%2B1SIhrLIl6hocCe2sPBkBLvrWPZikEowY7ffxm7fbrlkxakXIthQXC2zdIfG8wNHcGtvx431e%2FB02BTSUF5PHENTx5OsacwkhdpJcaaNsPV0qFa7i%2Bi5cQYrlI3jpjMcWJ3h5WxJwXoA%2BbWUG32VlN77QHXDIlZoKYO8a8DE0fwBZWIxs9L%2BuA2swFX5t3NNGRhLq2%2B9T8sEd%2Bor7CRyfd6g0x91TPNrFCLyAbtaarTJHdLE2ei%2B6ikTm1ioJi2XqKcLif6snHASRxrpadZwgLjmffo40vbNQa9BWDcq%2F4wQ0EQNNLfIYyjwrSJCo8w7sOcn03o4ajqX%2B8vT05rGgQs8b7Lr%2Fh4xHy72J7ysMN%2FdpMQGOqUBPablpm8HsNX9OEdwzI17T4%2FFPwd0DT5mluKPo91xcpbIgeK6eQyJJFCtgfMyfESJPbpJcDBlZ2laoRcOqEMPcph8n6bHeELn51e2Xp%2BW6RqqxkHcoLpltKt9yE6aIbshZvgTK%2Bp88JtJEQR1gnNleuFfPxKXu27qLvBvXrGhrsG%2Fg%2FL8nliAUwWj6mwUJQVHAF2HFCk4hRtbnoc9z9M7LiKUVRnb&X-Amz-Signature=28aecc92cd2c566a258f69e562a2b4802771597f910e3b91afef42ff0d87552c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3VC6DSP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzsohvAmaGAGK6SWOEUMd6Q%2FHN2%2B%2FDHTj9D4Ca05AdQAIgJ2hUNDpDsSuDY%2BuVp%2Bt3HHOVAJFrHZJqvlPXsPWpXdAqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOl3zAmznASMoTBsAyrcA%2Ff7Pc%2B%2FL%2BMVeSECdPYi%2BUV2soB2cq8luUhZXOXgDSQoD2O37atvnHWp0Iy4eikcX2tEBOHxsoPMJM7Z0wp5tUqKeen6Coja1fxzzL%2BTzPXm1DLdKvhqiVEme7B7NSTQ%2BvN8f0ULcpBVLlIbOL5kRNBxij%2B7%2FIEH6G5GdG4a0A8XSjPP4rOc0f0fEfNqejlPZoCe%2BDL000zBCRTY3fM96gCtk5wm5InCJJcw2%2BNkCCP6NI2VLREdAT0rUQ0DOR%2Bn6lnf1OB3cXpGK3l%2FDA396BJ7RgEhybQ9kzITl6HAcmivVkWvMq3kUhedhleUKJMh2vK3uGg9Ov7DX0qu%2Bd8L90g3y7tyEXAX%2F3BqQ8RMSPEK%2FkkFE2ffkPnyzG3m5of0KxQ8ptH%2BThP4uhBrUCpIZQz%2BosBCk9KX9hL1hXZf%2FpBAj1jRpAN0EATZhBXm6XMI6xtgu8w9JjV41h9k674jMsnA%2FfoiQ1EMIyns6NAbGnJrXsyeAranjCpV1IgE7diF2kVUctqVLj3J1lSe4Lb9dQ5vVFRMNWxUch2MnxDqc7oc1FYcA6e%2BSEK%2F%2B0Rnk%2B7yZlE50x0bWFE3UdlEw%2B%2BsXqEvlADhVU%2BBEbWJXAd4VtC8%2FalhHBMCd3SMKd%2ByMILdpMQGOqUB1rEvijNV8nGScvs4XH4Do7LzxaHgF2vTUGOJ4zo4IgkPjM3yUoDqv65PlOo21OJoFTReP6Lc7sYGlPROUCDT9WAdn%2FqGywxyZTZtfzRPpovrkK%2FUNuAu1FSu7y4IjpdlC9rUQq7fai%2BoSIvrZNUuXXkzwomS41Xrgyy1DF6NbgBNlt%2FCIJdaDwOyUuZzH81L6G75gXyHlGRwHaoaJo3kxnzlk8LK&X-Amz-Signature=95f87d85d29488588ade531cc5b0c0615bbd267bb1284b38dbacff0cb37020cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ROEZS4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxw4b5JxE%2F%2Bl4jFJWhCuKXUQPP85R74T%2Bl8fS%2B60tH0AiBVUn0er3zjvM0KrOqEX%2F6UT7Gw6AxuM34ivZMOH3K%2BmyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoCEHo%2BDwElS%2BaXwFKtwDhIEoRdZg4MlbNVK9KoSgL1DQ1kW03oh3PBVjPacdA4NyaBxuYpM2SswY5ZbV6b9vV5dJw%2Fq%2BFcKQOmq%2Frbxg5XXEsma5jhuhU2hVKYtU8K377%2BMtVX9pTgorN5LCut2XWL8%2FMKc7nLr2r1NJMz1H31IzmjwPk1xLTlMNTNz2Pysgp1%2BFU6VJq5T78njOvhO2KSxtuiXXr%2BluH%2BiLpZ%2BzlAzZUqERG4rF54ykuerbrBpEKLtRlCzF8lCMwWH%2FSATl8nUkYZCknR1imb%2BfY9vuShZa7n1vRiqcOg5EF5yl1bhHCyw0WA%2FQHxJ7j9vYTj1htygMamjisCCjJZ4zUp2PcnRxHfwCFIFwWjvZ9xcEuOvIjE%2FRqhFlgCPKBFeg2Fxiji2pn9pujDjpbcqPVpd5eDRsSCRK8F94ppi3ctMqAAzGx%2B2jlzAEmuVQ%2Fn1nDEjy42VatdUmGD0MPh5ne1GwAIIpgmEqTyTuRLhsnLLSkMIeqjkyi%2BMQUJ3wPrGu%2FrlVs10DhfoE6boos581YRssNRqCtnYJsxgjnVNvbf%2BacsThg8tZE5z4TIImAO4RnvYnaxBnP0rXivut%2BdrHIy7wY%2F99XFM8UHawL1biwyV4UvdRxYqapc2m7JTQTp8w99ykxAY6pgE1YjRO8v2tixaq0bNDIhubSO3GZeGLykE8qpB4c1ZYg47aztj1KZ1rkNsl%2BEOnjqcwv4aszNE4M%2BDnuzOzlKeE6IW1Ru3nBHW7gg9sYXNw%2FYgyumAzV67CcaFjebtwCaeXR1hIg4TsJwXaalpItSg67zwWgRWd9Qf%2FZGD94Fh5%2BDssNUTV4b0bXKjYtiSt5eJishRLFckbSxzrTbKNkHRC73Svn5%2BW&X-Amz-Signature=a4f22eea7b39745008ff5bab14f1c93adb3f0f08cd6d63ea8ce03621b5377253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIJAXWDA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGn3RdISKb4EDqFzmJCKLKvRtdm7DTcCiMlETU3HsQ5nAiEAgTapxkvEECjPl%2B%2B9iSYb5AKq5bTKih36KfEKBUYJxoYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeFIn4y5jr7LnvhZyrcA6vZXeZnxc8TqlN1fIogw8cXWtsHpAdQLXHcweFx5OCQjjQJ9isb6K7NxIRMnRLgcRx4I2RX3pj8iopxEyeq9PguTjjAsggDbLAaG%2Ble97UxDn0nKhpBNnUBAzjb1fyTLZGV33DAnb8J59FJoBYdnBzvyc3QVQhdbn7PhlFga6pVSMmGKlxG9zS6S1m6ao7bWfXgIFLtK2ieXGVwtxOEvNV5veK5XsqBLw%2Bl0K19z2XsSsrkH%2F2bIPvuV5s1ZxXOCom82hrJJujbqF%2FcXtIw%2B1SIhrLIl6hocCe2sPBkBLvrWPZikEowY7ffxm7fbrlkxakXIthQXC2zdIfG8wNHcGtvx431e%2FB02BTSUF5PHENTx5OsacwkhdpJcaaNsPV0qFa7i%2Bi5cQYrlI3jpjMcWJ3h5WxJwXoA%2BbWUG32VlN77QHXDIlZoKYO8a8DE0fwBZWIxs9L%2BuA2swFX5t3NNGRhLq2%2B9T8sEd%2Bor7CRyfd6g0x91TPNrFCLyAbtaarTJHdLE2ei%2B6ikTm1ioJi2XqKcLif6snHASRxrpadZwgLjmffo40vbNQa9BWDcq%2F4wQ0EQNNLfIYyjwrSJCo8w7sOcn03o4ajqX%2B8vT05rGgQs8b7Lr%2Fh4xHy72J7ysMN%2FdpMQGOqUBPablpm8HsNX9OEdwzI17T4%2FFPwd0DT5mluKPo91xcpbIgeK6eQyJJFCtgfMyfESJPbpJcDBlZ2laoRcOqEMPcph8n6bHeELn51e2Xp%2BW6RqqxkHcoLpltKt9yE6aIbshZvgTK%2Bp88JtJEQR1gnNleuFfPxKXu27qLvBvXrGhrsG%2Fg%2FL8nliAUwWj6mwUJQVHAF2HFCk4hRtbnoc9z9M7LiKUVRnb&X-Amz-Signature=7782b3501c78e76b6862297d14b1931ccdfd1a6d1909a53cf0407be6b23100e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
