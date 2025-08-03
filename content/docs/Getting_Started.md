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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTSBK2L7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDR%2F%2FLSriRXf%2B2BOVaw2CxVxCBK0TL74e2YIF5zSnXnmAiEArvT6zHFnSTAL06%2BH3g2mECt72ppw1uygXbuK6cTCKn8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFmhMU%2FphVTtGT1efircA7zA%2B99H6mbZ62mJId%2BlRj3PaJ674Z2%2FmPyl3ZsePatLUbcQc8QkwiUB6qrX2EOKsGlfLZGbU7uAqrlIXd3KbGjkwJ3d3oSDYXonjcDi0pc6infyGXY%2BLEbFGd4idEzcxbFJE9oV%2BLOuTwkehA0kK21WiThRbQrlhEIzI3t%2FhDEBorNe6rju35bJwZxuiDYh7k0mXY9a1dVrYDBef6R4p%2FdbpGKOrMxo6pAbON%2BGx1fypCdp525UYUPFpGjYxdfd5n8kOuDDlDN9XCoCcDLlrhatY7ahkyIq01RsZSONY5kO0U8hqn5BTYHEQ9j04WnZyuBuJMd2JhzJo%2FZ9b%2F0smMx3ExV%2B3gxlJozf7nLI9jnhNWDiYuaKr1oIrjUj28PamskuAQ4kEoeG8QG4sUGd9tRV37O0LaPReBrl4EwYo%2FLBgjakUtswTmD5Hq%2FxDY46DCgxYhaixPQcRUkpHMTJ7%2BGaX77joiGJk%2B%2BkCw6m%2BtUoproqk9rQYEgVnMHCg1TD6y3MSmluCVAaYbYAejb12IOImfs1YzUKfSLv%2F9W3OY9XX1BfTHvIuIXUYx8xcwybU2ljqRy6%2BwJ4EptAOCJQ5AA%2BWLmvm%2BQK9Te5i49y6GgOGSgG2uXDCvEu1VYkMNDEvMQGOqUBf1PLJscRaEZftHJkoILSGrZs0LMarEQxKVopVMj6xZBFLXPe7tXfG96eK71ghrSmuy9Puu4tEsGeMpv3P5gaAZbq5ioX9BEToInUYKmLEjsKTLYnA47645VvY0YEX7siqrqsW3h9YyBcHmGUEQ%2BxEuDqmfXm6hBHWyik5X%2Bikha26RGPAitXmCUkbUXaAK1nEKu5eP2zl%2BmAgGl2adZAnZKQqYdy&X-Amz-Signature=e5a9387f1c30149c6017ac602f4cf3208c97fd79791dde49df5f800d0bffd238&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTSBK2L7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDR%2F%2FLSriRXf%2B2BOVaw2CxVxCBK0TL74e2YIF5zSnXnmAiEArvT6zHFnSTAL06%2BH3g2mECt72ppw1uygXbuK6cTCKn8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFmhMU%2FphVTtGT1efircA7zA%2B99H6mbZ62mJId%2BlRj3PaJ674Z2%2FmPyl3ZsePatLUbcQc8QkwiUB6qrX2EOKsGlfLZGbU7uAqrlIXd3KbGjkwJ3d3oSDYXonjcDi0pc6infyGXY%2BLEbFGd4idEzcxbFJE9oV%2BLOuTwkehA0kK21WiThRbQrlhEIzI3t%2FhDEBorNe6rju35bJwZxuiDYh7k0mXY9a1dVrYDBef6R4p%2FdbpGKOrMxo6pAbON%2BGx1fypCdp525UYUPFpGjYxdfd5n8kOuDDlDN9XCoCcDLlrhatY7ahkyIq01RsZSONY5kO0U8hqn5BTYHEQ9j04WnZyuBuJMd2JhzJo%2FZ9b%2F0smMx3ExV%2B3gxlJozf7nLI9jnhNWDiYuaKr1oIrjUj28PamskuAQ4kEoeG8QG4sUGd9tRV37O0LaPReBrl4EwYo%2FLBgjakUtswTmD5Hq%2FxDY46DCgxYhaixPQcRUkpHMTJ7%2BGaX77joiGJk%2B%2BkCw6m%2BtUoproqk9rQYEgVnMHCg1TD6y3MSmluCVAaYbYAejb12IOImfs1YzUKfSLv%2F9W3OY9XX1BfTHvIuIXUYx8xcwybU2ljqRy6%2BwJ4EptAOCJQ5AA%2BWLmvm%2BQK9Te5i49y6GgOGSgG2uXDCvEu1VYkMNDEvMQGOqUBf1PLJscRaEZftHJkoILSGrZs0LMarEQxKVopVMj6xZBFLXPe7tXfG96eK71ghrSmuy9Puu4tEsGeMpv3P5gaAZbq5ioX9BEToInUYKmLEjsKTLYnA47645VvY0YEX7siqrqsW3h9YyBcHmGUEQ%2BxEuDqmfXm6hBHWyik5X%2Bikha26RGPAitXmCUkbUXaAK1nEKu5eP2zl%2BmAgGl2adZAnZKQqYdy&X-Amz-Signature=a2cc11f8d065629fd58f85e83f0fdc65b951e2669d0752379aa101a36377e722&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTSBK2L7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDR%2F%2FLSriRXf%2B2BOVaw2CxVxCBK0TL74e2YIF5zSnXnmAiEArvT6zHFnSTAL06%2BH3g2mECt72ppw1uygXbuK6cTCKn8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFmhMU%2FphVTtGT1efircA7zA%2B99H6mbZ62mJId%2BlRj3PaJ674Z2%2FmPyl3ZsePatLUbcQc8QkwiUB6qrX2EOKsGlfLZGbU7uAqrlIXd3KbGjkwJ3d3oSDYXonjcDi0pc6infyGXY%2BLEbFGd4idEzcxbFJE9oV%2BLOuTwkehA0kK21WiThRbQrlhEIzI3t%2FhDEBorNe6rju35bJwZxuiDYh7k0mXY9a1dVrYDBef6R4p%2FdbpGKOrMxo6pAbON%2BGx1fypCdp525UYUPFpGjYxdfd5n8kOuDDlDN9XCoCcDLlrhatY7ahkyIq01RsZSONY5kO0U8hqn5BTYHEQ9j04WnZyuBuJMd2JhzJo%2FZ9b%2F0smMx3ExV%2B3gxlJozf7nLI9jnhNWDiYuaKr1oIrjUj28PamskuAQ4kEoeG8QG4sUGd9tRV37O0LaPReBrl4EwYo%2FLBgjakUtswTmD5Hq%2FxDY46DCgxYhaixPQcRUkpHMTJ7%2BGaX77joiGJk%2B%2BkCw6m%2BtUoproqk9rQYEgVnMHCg1TD6y3MSmluCVAaYbYAejb12IOImfs1YzUKfSLv%2F9W3OY9XX1BfTHvIuIXUYx8xcwybU2ljqRy6%2BwJ4EptAOCJQ5AA%2BWLmvm%2BQK9Te5i49y6GgOGSgG2uXDCvEu1VYkMNDEvMQGOqUBf1PLJscRaEZftHJkoILSGrZs0LMarEQxKVopVMj6xZBFLXPe7tXfG96eK71ghrSmuy9Puu4tEsGeMpv3P5gaAZbq5ioX9BEToInUYKmLEjsKTLYnA47645VvY0YEX7siqrqsW3h9YyBcHmGUEQ%2BxEuDqmfXm6hBHWyik5X%2Bikha26RGPAitXmCUkbUXaAK1nEKu5eP2zl%2BmAgGl2adZAnZKQqYdy&X-Amz-Signature=442bf60a612a9f47878cd05ce9eff3c760e61159378c7733a1bbb5708e2f40d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD4GFVDM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FRqawENgSkHGe75YOXfFZikdaniMK0rPtOPtHjCn15AiEAyXYrOkqipBZoUmE8WJQUa97jQrokRscRANOp2I2382wq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDaMkIXcWEojn%2BSGXSrcA6T7cA4da%2FMroK6SsiH1Jy8GBvq3Tgsqzx6vWoBQp6JvSNEm%2BnEpsE9yG8JQDe2xhfzCEDlqHMU%2BilnDztnuYNb6NeaGc1jJSxDqpXTmC5p9wjYEsKIdoX0CC1%2BXwdtkuWvaDKQ18bAawyqyOJd3geDQ3H6RpKsfrCtoyT2B9bZtFHuW9QWrM0BYPLVnJytE6OnZUvL0hhW4JEyAEM0ODuUjajVwCLa3Dj0pkpX%2BHNXp6wIbOzQZadzZPuFNu6cOSrAueopxBB2z%2BwCzWLxlxG8zIeXnzYtpwhf2MzIhxD6ONY81mXQtlF%2BNN%2BOEnczhfe03hC%2BrX1kjkR4ySbZNXOEvfYd0Np9EpaRBj2mqa%2FI%2Fa32uhPDEQrsHAb5ZxSIVCHOSeFcqGbkLgfDUr5nzTHFlEoS%2BfXD9ON%2Bohcs7kpxKmQB0vVzQA1W1sPVTOOT%2FiOILv2mq748Evbk6RooR9HhmNYFdph6afgGBE00VvoDP3UHonuk6BbSL%2BW3h%2ByJuDJvZCdB6iExRFrzcAdzVlRIlJIJ8NdJtwtvPYb37zoElZAn%2FV6YxUP5q9DBfRnIjvPlJhnlf1erL%2BHLZbSDabUhVZzhk2r1%2F7b1vjv1ZMfyPdgrxhoTySlpuJTCbMK%2B3vMQGOqUBvJr%2BcWjsoHs%2BNVIJw7gLl%2F3CjkP5kKkFpGHySfhRVoJKnYYKv1vwvaR%2FiiIFSSbxYpan6wupUH%2FfShtFiFW2FyRbgoNrYaV%2B1u7wKdsOYAByx6w7K4dAKip7WrOPxCFlITFVR2O7GpPG9oB70qDW88EUByz7hyMdzd1EEwzSZx2j6T1T9JSIaUadIlx2VFoQuZryksRZjYdouPlk8RePgD%2BlSNca&X-Amz-Signature=25a881b86386ea01a5ce60cde5111ecbee59fe628f0d1e422baab8ff5cc56dfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQKKK3A2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE%2BRQmxmBtDqaUPU2W95Hg4eq0m%2B%2BPIfysyOFFMjT3YgIgM47x%2BdJBEZrb%2BWaO7y2LvkJUrGXGMlq9Nn8zrDQvK3Yq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMiGgsPRdQfFWY4yuircA3%2FMPaac06pP8xFqYV%2FMQLKQ8MXK1v4cd1nqe1cKcoM%2BG2oQqoZZfF%2FtfZgSs0qAc0PiYQzOT4b3arzS2iUhqmFWT%2FU29kM0pzfSrcSx6WuFdwOdUKQNwR20J4lHR8RjeRdhcePRAX6uPlReAANpXBcG29aNWgrdqULox48O4AbjmXNNhsQW0L%2B9N9EM6NJE9VJ7Aol%2B0SUtyiq6niPcCH6CArFH9x67Lep%2FuBAIcvNQQN6aIrqtwp4Yjeghdcl6%2B413D5R0F6YYJt0AYhoez2oauLcXHK0o7lUmRmMHIMhbYSdYpezGqxVACuzCo4bkIe9baxDvRXyw2b2ohj%2BFwp9fq6jwZopEgvYg8w2%2F9jJsnlA1TKZ1vdEyGA9D3jCZaBASngiLIC%2FcOULB5FfbSsTqLL1DiitVP%2BVBJZoCPIbR%2BFU3Qa%2BscKbbB%2BZCXDX6Wgu0F%2FUvnyEsaNC86shuu9Xy8jK3987a6y6EK38OQCO%2Bj3rngdMto0c3iMsBveCAtQmH%2FKjIUSXPjO7UkQkMSs%2BlwYoJNKjKqHEYJICNBD30SPC9nwtAo8MWGh59IfdYU9rAIFsNn0W6q6VO65fgOa0WUuDNtGuTV43nr7J2k5MbIh4GCz27dwVJGeeTMLrMvMQGOqUBSB9Cng4LPqElxaqGGFqAiRyiY3NsH9vzUxj6zB0XtlmIF1IoqfvcVFJlet4%2Fx9RPp%2FNAF3HCYkd%2F0CTlh%2B%2B4zjONiAg%2Bz0Ff%2B4kHw4T5DiFIr1a69mF0QWuuJJ0TPZHxFX5C7KfP3iORmnP31pk20Vc1NSFyk2TMZRoNxx4hBAu4j5F0q7ce4Na90iZHsaSBp89mEtn7f4q6Y0vaDpDpPgXxm8ea&X-Amz-Signature=645bc4fe8506272c5b2c5fbe929fa4fda15d2dca3522bc61c2b1e30319e46dd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTSBK2L7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDR%2F%2FLSriRXf%2B2BOVaw2CxVxCBK0TL74e2YIF5zSnXnmAiEArvT6zHFnSTAL06%2BH3g2mECt72ppw1uygXbuK6cTCKn8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFmhMU%2FphVTtGT1efircA7zA%2B99H6mbZ62mJId%2BlRj3PaJ674Z2%2FmPyl3ZsePatLUbcQc8QkwiUB6qrX2EOKsGlfLZGbU7uAqrlIXd3KbGjkwJ3d3oSDYXonjcDi0pc6infyGXY%2BLEbFGd4idEzcxbFJE9oV%2BLOuTwkehA0kK21WiThRbQrlhEIzI3t%2FhDEBorNe6rju35bJwZxuiDYh7k0mXY9a1dVrYDBef6R4p%2FdbpGKOrMxo6pAbON%2BGx1fypCdp525UYUPFpGjYxdfd5n8kOuDDlDN9XCoCcDLlrhatY7ahkyIq01RsZSONY5kO0U8hqn5BTYHEQ9j04WnZyuBuJMd2JhzJo%2FZ9b%2F0smMx3ExV%2B3gxlJozf7nLI9jnhNWDiYuaKr1oIrjUj28PamskuAQ4kEoeG8QG4sUGd9tRV37O0LaPReBrl4EwYo%2FLBgjakUtswTmD5Hq%2FxDY46DCgxYhaixPQcRUkpHMTJ7%2BGaX77joiGJk%2B%2BkCw6m%2BtUoproqk9rQYEgVnMHCg1TD6y3MSmluCVAaYbYAejb12IOImfs1YzUKfSLv%2F9W3OY9XX1BfTHvIuIXUYx8xcwybU2ljqRy6%2BwJ4EptAOCJQ5AA%2BWLmvm%2BQK9Te5i49y6GgOGSgG2uXDCvEu1VYkMNDEvMQGOqUBf1PLJscRaEZftHJkoILSGrZs0LMarEQxKVopVMj6xZBFLXPe7tXfG96eK71ghrSmuy9Puu4tEsGeMpv3P5gaAZbq5ioX9BEToInUYKmLEjsKTLYnA47645VvY0YEX7siqrqsW3h9YyBcHmGUEQ%2BxEuDqmfXm6hBHWyik5X%2Bikha26RGPAitXmCUkbUXaAK1nEKu5eP2zl%2BmAgGl2adZAnZKQqYdy&X-Amz-Signature=64517faa503eeb7dd98afc1665ea3450c8c9825d13d356960a068c869070dc88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
