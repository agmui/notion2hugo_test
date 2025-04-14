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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E2GLXJH%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq2Q%2Fayaexl7c2i36Z99cTPCNKv0nOUcJ8EXgHk54TPAiEAz5QCzvAJ2obWX1eK671oMr30lFhChzOnqNNgMTxF1asq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDBkIHaNCAghGiSkfySrcA7l%2FJIgA2y7kIbHohIOiKgdf905zcTIlNPLzwRBElxcOTLM2EBUHFM%2F2k7CUWxese8jynixz0hBSPRS2ToYFiilrQpPfp1PU4D%2BfhS3TxdOPdmxskusq7sI4cIMSDOYt89O9hz%2BKaR4L4OjQHRYyhFyl9AvI6bdJCSE0pgS44CIhMpTmLWF614kXMYk2TRNGaRBAi%2F9NNlTJSVbmO0woTyovHZaxdhrVyvxYwNvfLsFZ3ceZIkhD6Pjf6jq8cLvJluR1ZrXZkF5IxeRVGK4wjBUyJCFnO0nGBqZB1a23JCsbKBJQsTRsvuNDG2X9cDJ86Kwdupn0EEElDQLjQH5PRlHRfI3y2TbeRf2Tsu2Lq6qq8y%2FHMYk4fKS2pIFYtQMzognKDyMvBJ5besUztHdILYHt6qZtvLar%2F5pw5qGV17KC74i4C6S%2BX0scxbMNJdW6el3lqkX3Sl6NECN4%2Fem%2FJt8yvuIeUcW4tDlXAKVlmtaYLRYb4NnGonfyFq96irG6DT3qIeSUfyG3y%2BVYP9KZvYlpvgOviwkqnEZ%2F2yTPO7%2B6ZK%2BnbIgH8L07xM%2FLKqZBRZL1eg80TUFlBEc3yxPMd9Qq1Fxz5VxgikU4t8rY4MBt5wndArTRnBn8OfxYMLmo9L8GOqUBsvHub%2FfcYtBp31uMFYz6PEOnkKbmBnSxMc2G2fvsfi2ei5cTkSRm16yjKDTHlNo6AIETdgKAp33e0KD2jJq8snX4DAEDYoBNxcXIXkSCmX1AidImSq%2FRcwTZ1v1fQNLko6xDjo%2BMVErpx16FmInN6HfUoQe6tSBcC3KQRntGQqo1CRs2i6kaNcZ4TEySBDOjOvHqtxzkJVeqE8XEKjVGBiEC%2BBSY&X-Amz-Signature=2e2da0115cf832a5616834574dc8a50cda0503e53bb22a2286e0b19de6a2269e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E2GLXJH%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq2Q%2Fayaexl7c2i36Z99cTPCNKv0nOUcJ8EXgHk54TPAiEAz5QCzvAJ2obWX1eK671oMr30lFhChzOnqNNgMTxF1asq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDBkIHaNCAghGiSkfySrcA7l%2FJIgA2y7kIbHohIOiKgdf905zcTIlNPLzwRBElxcOTLM2EBUHFM%2F2k7CUWxese8jynixz0hBSPRS2ToYFiilrQpPfp1PU4D%2BfhS3TxdOPdmxskusq7sI4cIMSDOYt89O9hz%2BKaR4L4OjQHRYyhFyl9AvI6bdJCSE0pgS44CIhMpTmLWF614kXMYk2TRNGaRBAi%2F9NNlTJSVbmO0woTyovHZaxdhrVyvxYwNvfLsFZ3ceZIkhD6Pjf6jq8cLvJluR1ZrXZkF5IxeRVGK4wjBUyJCFnO0nGBqZB1a23JCsbKBJQsTRsvuNDG2X9cDJ86Kwdupn0EEElDQLjQH5PRlHRfI3y2TbeRf2Tsu2Lq6qq8y%2FHMYk4fKS2pIFYtQMzognKDyMvBJ5besUztHdILYHt6qZtvLar%2F5pw5qGV17KC74i4C6S%2BX0scxbMNJdW6el3lqkX3Sl6NECN4%2Fem%2FJt8yvuIeUcW4tDlXAKVlmtaYLRYb4NnGonfyFq96irG6DT3qIeSUfyG3y%2BVYP9KZvYlpvgOviwkqnEZ%2F2yTPO7%2B6ZK%2BnbIgH8L07xM%2FLKqZBRZL1eg80TUFlBEc3yxPMd9Qq1Fxz5VxgikU4t8rY4MBt5wndArTRnBn8OfxYMLmo9L8GOqUBsvHub%2FfcYtBp31uMFYz6PEOnkKbmBnSxMc2G2fvsfi2ei5cTkSRm16yjKDTHlNo6AIETdgKAp33e0KD2jJq8snX4DAEDYoBNxcXIXkSCmX1AidImSq%2FRcwTZ1v1fQNLko6xDjo%2BMVErpx16FmInN6HfUoQe6tSBcC3KQRntGQqo1CRs2i6kaNcZ4TEySBDOjOvHqtxzkJVeqE8XEKjVGBiEC%2BBSY&X-Amz-Signature=b028c86806b8c1d86496502d9848c9272d79d2755f0f630d6b6edd88c0daffe9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBEJZYXK%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpeHZB9tZVoS09LM%2B3X8P8F%2FaSzwNRQT%2FFb3gDHZL7oAiEApim7NX%2BQ7knVlmw1UItK9WmaqqjgFEchz6edDNT06ZUq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDNOltNuVT3O5Styg7SrcAwlhKJNFkPZ0x%2FvwxruhS8emXTSPQLof0LhuQP4Zryk8PSCxwJ5%2Fx2AykojJ332ZdPkHUwUeZI7Kv9hQdmEpkMN7%2BGMJvCoPfKyunatEkksyp%2FiVNA2ajNWiE5drN4KVCqEx8rXbOnGqb%2BVhYX33Ldn4P4QIw%2FXaD7dcdBQy2NrXxZCQYDub5L6G0UF2wiWGaSQOyA%2FFt9xGYd49OWGHsXQxjaIVYvaHq7gmPe6Yj85a5xSACObg4Jn3NqsDp1CwL%2F3xksnfSUOph7LDusTqCaRByldHNoACtits3BhHcDbGVhTjgn0W1fbItkX%2Bgpy2Yl148O5owL7TyE7bkXLS7%2BTutjOJh0FlRqcNZhGm4L3fsS63Ey9sBHtmloGPZsYCP7Z8XuuIT%2FBJwSN66P2LVHG5X%2B4TFxEwI%2FTZY7Qh80SfzpbkU3qFMLLCM8sKueI70R%2B%2BUlVDUEeqHRLtf4fbJoenx%2BN7anSSHblxYSmJ6p1Lu29aavVC0NcDP%2FmuyozwwRMOpAziiRaN8ltZMgI2HSe53vS%2B7vxzG6PzHjskhmwW9aERgf0tTFGRsHqJz6P8uPsMIYTRRS%2B6VUOI7SIwRAlOuyyIO9XKQPae2ZejZTdaVPKombvTR8izJwYUMLyo9L8GOqUBPXPIz2IiSsRFQ0PTyd1SOCIQ9By7n5J8c1F6dlZVJBRHwwlsxuSqErKYQIhNUK3TCsfOXe8bL4CxB2iNY5FZg57Z4IvAJJ5gdbD%2BeB55Ry1oIMACYZ%2Fs1fBr6gvNJ2X5T%2B9Z%2F5%2BhLRveEbS918zgNbY8Nfha8QS3KTIr1DjJrlwoD1RimIR1L8LxO%2Bg91cjfQNkjqH%2Bteiu26WTfN49rCYhCq0%2FM&X-Amz-Signature=ee0fb7770542ae7361f605e3ac4cb95dd1230a4e03e68f8c3624948f861c0ef0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LG227XL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8tSn46H7Tqnex0FDx6u1R%2Bo3oH5UbBOY7syVENuHBowIgOwzHqrhma5lxrsifhrGNy6FQWZNepgOSgHzN0zMw9xMq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDHbHz%2F0XeXtVL%2FalOCrcAyjSFUG1YWBiWER1kkPluRscRa3Zd7Tgb8SfDv3FD1H%2FOjvirjHC9vMRmG9aeIhHr2reeJ5fgNHCN%2BEsXHURz3RbPTC3q4ReYKCZd1ptExyxgAq3gIA1%2F%2B7D6cTy1ORHdnOt1a013jZDIE02mvsDFzRyG8FrtTJMyU7GkaOcuwY2eiqtebF5wtQlmXM2h6JxhhhyZXK2f%2BICC41FOy1Gc4hyi7C131Y%2BRUYmHvvbEsQ0vXJHqE3RRSN64TEGpIr%2Brgn%2F5wycHmJG23EuWY6gXaOgADDUkUy4QfGTbJ525CpZwXzYJJu6VkLZCx37aShjFuSMFdLywveaEYr1RCjOJKbhcztWQnvnEMVmnYT1ZG%2BYc9qaRGYTUUYpBb2NM%2FrK8%2BAL2Wk77poRAPBK5UmszaqkniAg3LZGAyZ0RUOQTGj8VMcXKsDoNahg7QY7RBZfVrjIRzUliYEJMSmd0oVNhmL00rCDnVVoEO7vjv4cVsTsEVp%2BDnSscP5ct1qQWuxRzCnxQi7fmnpspiHfKHy5GqGYTQKGbJbkOtnLSxwYBnFCTVnwTENevLE0T47POFUu6BAqp834lmnx5si%2FBy8WFwkHZZclHuafBK5r5tQ7mAP%2Fwd2lOScViY5%2FY6s2MMSo9L8GOqUB7ohH5BVnkmJo11JImCqUw9rEOMOmlClGsJL44%2FJXS77h6HOPD0IPwmgjdAE3ktkmrS6Wsn%2Bxm2lAxRjuWSbS7qDe7KBjN7F5So4U1Rf16Fo8P8FOTKRatiKDdsgLpo3%2BpmHZnhnVUVHMubM2VhnlexkiXxIGhoQAYc61RWAM%2BUrf3oz3Z1MYOG7K7u%2FJ0OjIrxzJ7Cw2VdwgUFmNbB4swvONtprR&X-Amz-Signature=90e20e234e363282fed1088bd8fc0c759d7ca37b5354e473c9385798ebd03db3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E2GLXJH%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq2Q%2Fayaexl7c2i36Z99cTPCNKv0nOUcJ8EXgHk54TPAiEAz5QCzvAJ2obWX1eK671oMr30lFhChzOnqNNgMTxF1asq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDBkIHaNCAghGiSkfySrcA7l%2FJIgA2y7kIbHohIOiKgdf905zcTIlNPLzwRBElxcOTLM2EBUHFM%2F2k7CUWxese8jynixz0hBSPRS2ToYFiilrQpPfp1PU4D%2BfhS3TxdOPdmxskusq7sI4cIMSDOYt89O9hz%2BKaR4L4OjQHRYyhFyl9AvI6bdJCSE0pgS44CIhMpTmLWF614kXMYk2TRNGaRBAi%2F9NNlTJSVbmO0woTyovHZaxdhrVyvxYwNvfLsFZ3ceZIkhD6Pjf6jq8cLvJluR1ZrXZkF5IxeRVGK4wjBUyJCFnO0nGBqZB1a23JCsbKBJQsTRsvuNDG2X9cDJ86Kwdupn0EEElDQLjQH5PRlHRfI3y2TbeRf2Tsu2Lq6qq8y%2FHMYk4fKS2pIFYtQMzognKDyMvBJ5besUztHdILYHt6qZtvLar%2F5pw5qGV17KC74i4C6S%2BX0scxbMNJdW6el3lqkX3Sl6NECN4%2Fem%2FJt8yvuIeUcW4tDlXAKVlmtaYLRYb4NnGonfyFq96irG6DT3qIeSUfyG3y%2BVYP9KZvYlpvgOviwkqnEZ%2F2yTPO7%2B6ZK%2BnbIgH8L07xM%2FLKqZBRZL1eg80TUFlBEc3yxPMd9Qq1Fxz5VxgikU4t8rY4MBt5wndArTRnBn8OfxYMLmo9L8GOqUBsvHub%2FfcYtBp31uMFYz6PEOnkKbmBnSxMc2G2fvsfi2ei5cTkSRm16yjKDTHlNo6AIETdgKAp33e0KD2jJq8snX4DAEDYoBNxcXIXkSCmX1AidImSq%2FRcwTZ1v1fQNLko6xDjo%2BMVErpx16FmInN6HfUoQe6tSBcC3KQRntGQqo1CRs2i6kaNcZ4TEySBDOjOvHqtxzkJVeqE8XEKjVGBiEC%2BBSY&X-Amz-Signature=ba55231bb5b8fd56a5c78e8fedb65bf39810b0ae19be6963dd2f653eaadfed17&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
