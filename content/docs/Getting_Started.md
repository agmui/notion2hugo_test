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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GM7MLQQ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIBX7yYi6jkfqZEgiTjbZta3LOyJ%2BUcjEGVot5x1DdaEmAiEA7VPNFE5wMFnqH03F%2B4ccIpotnlskcz7UVEN%2BL%2B2FFoYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBdef%2FSFUXygAigxSrcA2EN%2Bs8pYz7xRlyecQWyHKNv2ZeyvCC28MS4yCgz%2BEOeVQMMWfPNWV8mOKpBZsTXDR5%2FH7QBdNBBVog7h6QfLSXPPt31GUaElGKv36lYCtSW2HqY6KSxaz4ykq0lDBptwF8ZPd%2FUxWUZpWFMZiU9hPL6qmQ2eYRdVPGoW2DbQO98Qi25LGV0myjUBE2RG0Y74t4LEkE9lOl0ZQEHm8PscQ7LPe%2FnrW0qIqN%2Fwewqrdnkw1w9n7BchQHpO7og3zLwzV5YKbCWyREavkZJyK4YrUipag3XROmyKEG3k1IGFRyvHHts7j3%2ForOCCfUEWatFLXrqWfctoapcOewgLkcUIQIWclZaRO5Akmzz8DER0Gv4Grnw%2Fh3hW2WePPEz6CsvfAsko86UUx2P9y44w0oAA1GUU3foLWGa11vkFex8F7B15rFRe19rPUetehdTnSrZOPbnqxWTEqfTUXYftIyecx0iV6GdndN652wldrH1sBc5mUGLUBQY2IbNNtMhfomobDGofCOAZNasEYuAIlbMvVW9lLHuqwZxkVbUwrz%2B5RLqDrVx%2BR5%2FgAoOZBK3jaZlfyxPithkJSll391n2H7oMJOoyDi4%2BAxO92dNL31IY3%2BOGNHODC1F5NYPv1ZYMK%2F%2Bxb4GOqUBD1iNG%2BG%2BJRcVx6A%2FBxydOzd9moAucI32j8Eid1F9vpEU93DI9BkmccByYbBRSjLjbBeKw2X4fk8sQBQA0%2FScdX6Uarpq3zspmCXo3goYkYI%2FnqcLOkmr6OD2qbhlR8pE%2FkJWP2EBpsfVOY9XVZFmLYeVTZ9LHAnGSOwSVKDem%2FQ8nJXPWYzaQt90QQmTSOYnLkarEzHz1%2F4psoaRjNMiKQXUGLky&X-Amz-Signature=50d37d48125d2326bbc31c316707fb71d7969509236cad42303336d8ec3ad2e3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GM7MLQQ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIBX7yYi6jkfqZEgiTjbZta3LOyJ%2BUcjEGVot5x1DdaEmAiEA7VPNFE5wMFnqH03F%2B4ccIpotnlskcz7UVEN%2BL%2B2FFoYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBdef%2FSFUXygAigxSrcA2EN%2Bs8pYz7xRlyecQWyHKNv2ZeyvCC28MS4yCgz%2BEOeVQMMWfPNWV8mOKpBZsTXDR5%2FH7QBdNBBVog7h6QfLSXPPt31GUaElGKv36lYCtSW2HqY6KSxaz4ykq0lDBptwF8ZPd%2FUxWUZpWFMZiU9hPL6qmQ2eYRdVPGoW2DbQO98Qi25LGV0myjUBE2RG0Y74t4LEkE9lOl0ZQEHm8PscQ7LPe%2FnrW0qIqN%2Fwewqrdnkw1w9n7BchQHpO7og3zLwzV5YKbCWyREavkZJyK4YrUipag3XROmyKEG3k1IGFRyvHHts7j3%2ForOCCfUEWatFLXrqWfctoapcOewgLkcUIQIWclZaRO5Akmzz8DER0Gv4Grnw%2Fh3hW2WePPEz6CsvfAsko86UUx2P9y44w0oAA1GUU3foLWGa11vkFex8F7B15rFRe19rPUetehdTnSrZOPbnqxWTEqfTUXYftIyecx0iV6GdndN652wldrH1sBc5mUGLUBQY2IbNNtMhfomobDGofCOAZNasEYuAIlbMvVW9lLHuqwZxkVbUwrz%2B5RLqDrVx%2BR5%2FgAoOZBK3jaZlfyxPithkJSll391n2H7oMJOoyDi4%2BAxO92dNL31IY3%2BOGNHODC1F5NYPv1ZYMK%2F%2Bxb4GOqUBD1iNG%2BG%2BJRcVx6A%2FBxydOzd9moAucI32j8Eid1F9vpEU93DI9BkmccByYbBRSjLjbBeKw2X4fk8sQBQA0%2FScdX6Uarpq3zspmCXo3goYkYI%2FnqcLOkmr6OD2qbhlR8pE%2FkJWP2EBpsfVOY9XVZFmLYeVTZ9LHAnGSOwSVKDem%2FQ8nJXPWYzaQt90QQmTSOYnLkarEzHz1%2F4psoaRjNMiKQXUGLky&X-Amz-Signature=99f6dd138e55ce337f8b3a02c5564f810776dabaad9cc26b888789cad9614026&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZE6EEYG%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIBsDN74OWmIFPxDBS722SwaWnLEH1CS0WvtSjVJ7jvuCAiEA%2BeG6kl%2BD0zDj6pQnuiaRdSgG5o5fIo3wno3hqkO8dPQqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSIJPNyhmT3EaStZSrcAxhcVy%2FxhKXbPQAOC2iq%2BNN%2B0brDlZoCwoMin08frVMUBsFkKwEAXLC2hlvaWNPqEk33BBgR2tFRqIO8GG2hyiMyfE0GQIZ4R2yId%2BGFvESxpRbrBoGp1CznkCaIIjQwVojhu6ToCw%2FWvxgc7EYkktVlbjbaoxv%2BvJt87FVQnYXEp27Lk2CmFCv42IAY0h7zMcH3%2BAXEwF2ByUl2AlEi8vH0j71G8hqrLQILbvnwQlsWzyoHEDUq%2Bi334QVm01FtVdwXEvce5CiSQlgGwC0z%2F7vbCvhFAxHDgiRD8rXLX3HXQiJUFfTdnfjcQh09dDES0xsd%2FQvpiIrf2LWAtWM%2FxKKqzyv04m%2FZPLpHuY29Ftgr7vPc9fdTW0cigoLHejqIfi9jfLEYFLN1RjgZwwnotvWaKgcDuYIluQ0udRy4qvoPi9EXbqiwNGdsYKHrTg31LBdDbY9nxVKfyBHLDx%2Fape56DnURstGzdwgAJrDY15Ii%2FQnMlC%2FzEY1MbbILRS%2F2Kn8k0HDqtZq7jVJwS24fPF%2BSSnHcw0%2B5Cc8W9XgLnZ5PsHSgnkqlLqyfn0PowBZMUTTNT8imKIKUMGRaMQ5qgjTEuZ08LRFfQtXGiCGHDcS3Mh98K0vysFo5ozrvMPX%2Bxb4GOqUBB9swhNfEBdglxaMKvlDYrjwwOeabG1A%2Bpf44imNfSUoGuB5F8d9eiSqsQBrMTomKXgAim%2B4%2Bds%2FnP%2BRW7F%2B%2B0uGwq8lk6NLT%2FtGk1FN%2FVMZF8%2Fu8Plf8%2BdJUs%2Bx5zubZCiMu7dl9QRrjwkki%2FXf%2BVb%2BEIALkt%2BNvdAGKXJnJ6AObHgXh%2FkzXe4WBznjWuxGz2UUSShYuIBuloJCrBV8HRFv%2FH8tz&X-Amz-Signature=962bd9667ba1e90d95abff9e811fd3fab43a542348d63fc36664f21d54d4217b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KM6STEQ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIEhyBZvghier45CaDvtYG6K8zgeOs88VUjptGuTbv7h%2FAiB2VsgPHumQS9KON2SXoWVwIKMGjS9GnVRfzz%2B16jZH2iqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO9WJfOoYYiC1OZy%2FKtwDWA5vDJZm9mykb%2BiGTR4%2B5n%2BUeqXTq0vrpQ9o4%2BOzsX2yXyi122pvXSNYmZWqhQaC8KHDIDcvfxbb2ilb%2FMDLkWu%2FD%2FWSirTYsqzhqJN4%2FGokIPOgNDJ0K9MXRBtoid7%2Bu2S4R3g6BdAB%2BbfcRRPd5GeXvNRrW3mhWBVY9W67Y9yArvvlcd7lDV2tBhSWeyIbS4NBmOdtmMIk7yiXwuICEc5a4D39Da4PJNQWPQmSFd%2BkI44LgDC4Bi3py4Y63qUJRCQ9u115HPsYAyd9PkOfdF1Nd6n7ZP5HMhAKJbYrqtw1PBWpjRsuRUCSeVDPxfx2D9TTqnDnVqm%2BTP9ZjVhojBqSYecOMCSuc1RaQxXqlI6ZXg0S4z%2FBjRg7I2vNpjuTpEIuezg0Xm7sL7gbz2OplgO9Vk9vXQ6E4j8FMIORc7fEoLGllpOskCJiVYUj4TScGKyyIV2fV4OtnudoMbr9Tp7WMX%2FX6UMTh8GTGe3SsXb0onAwyp6LGQwDtNFioLcXyRCOIRFfgkarnMcKOhHJAMNLQ8koC7MRTesds6yQH%2BgTj4VJDJ2o2LLbJaaURayj1%2B1CB%2BmETlDcBY3zBZO2yRWYzp3MveJ3OiGREC9IPy%2FWCPN67xg7feRdvpgwtP7FvgY6pgE789DeNeVd9mRswI94qGLNodfBAdEayXk2l24hYIz4a9sHK1U7arhv3xlhiaWzY2Ex7VKNX9Oo3sjCju5E%2FOxXs%2Bn2mt8sSW6%2F3Yvg7Ug0wZxqE%2F3QQdvoeCnyMeVXSF9jcvW5kgYIcL1KOIP4bynKGo4wdDOC%2Fw66xbEcPf0JitTesqxUBYfVnXHSONk8lmg5gE0U99ljb3hTyG3HWFO%2BuIYc2Y1f&X-Amz-Signature=348f5019d5fe4f6bd936f6e6aace900c6eece3e60dc5cc55556980cbbd2960f9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GM7MLQQ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIBX7yYi6jkfqZEgiTjbZta3LOyJ%2BUcjEGVot5x1DdaEmAiEA7VPNFE5wMFnqH03F%2B4ccIpotnlskcz7UVEN%2BL%2B2FFoYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBdef%2FSFUXygAigxSrcA2EN%2Bs8pYz7xRlyecQWyHKNv2ZeyvCC28MS4yCgz%2BEOeVQMMWfPNWV8mOKpBZsTXDR5%2FH7QBdNBBVog7h6QfLSXPPt31GUaElGKv36lYCtSW2HqY6KSxaz4ykq0lDBptwF8ZPd%2FUxWUZpWFMZiU9hPL6qmQ2eYRdVPGoW2DbQO98Qi25LGV0myjUBE2RG0Y74t4LEkE9lOl0ZQEHm8PscQ7LPe%2FnrW0qIqN%2Fwewqrdnkw1w9n7BchQHpO7og3zLwzV5YKbCWyREavkZJyK4YrUipag3XROmyKEG3k1IGFRyvHHts7j3%2ForOCCfUEWatFLXrqWfctoapcOewgLkcUIQIWclZaRO5Akmzz8DER0Gv4Grnw%2Fh3hW2WePPEz6CsvfAsko86UUx2P9y44w0oAA1GUU3foLWGa11vkFex8F7B15rFRe19rPUetehdTnSrZOPbnqxWTEqfTUXYftIyecx0iV6GdndN652wldrH1sBc5mUGLUBQY2IbNNtMhfomobDGofCOAZNasEYuAIlbMvVW9lLHuqwZxkVbUwrz%2B5RLqDrVx%2BR5%2FgAoOZBK3jaZlfyxPithkJSll391n2H7oMJOoyDi4%2BAxO92dNL31IY3%2BOGNHODC1F5NYPv1ZYMK%2F%2Bxb4GOqUBD1iNG%2BG%2BJRcVx6A%2FBxydOzd9moAucI32j8Eid1F9vpEU93DI9BkmccByYbBRSjLjbBeKw2X4fk8sQBQA0%2FScdX6Uarpq3zspmCXo3goYkYI%2FnqcLOkmr6OD2qbhlR8pE%2FkJWP2EBpsfVOY9XVZFmLYeVTZ9LHAnGSOwSVKDem%2FQ8nJXPWYzaQt90QQmTSOYnLkarEzHz1%2F4psoaRjNMiKQXUGLky&X-Amz-Signature=c05c894994294c9409d3797ba058c6db49403aca14cfa1acf8276b8021187db0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
