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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TZFRGTB%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD7Q%2Ba0kn6NnnzockeguHV%2BrJJ6cUWa0KUjUDtOh3K8QIgBcJa4DcYNcSLzo64yn4zrR0gOJ8EmhBkZDyAozQDnfcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGUgi4BLhvB0sVBrxSrcA1ZH%2BvMMppvlRh0rFuef%2BBxjWaPthF%2FrpCjhP14mLMUwgYupP0epyqBcBTzkiQ64a5oD1u1OwQKjYCkAhCOjPcJ1nQhIUhWUOGIjMMCOHjNc7uUpv5qRT7GBlKLAu7DmE4ev80hqtuPERYBwPzWUwhLxkaOh%2FVNlBPCLEJpy42C1Kf3%2B7dLQdlw5ojvb9CkWPMR7iyvhxi36xphV5g3T8yAJcuuVmKL371xk5scQg4pLNOcvigW3QPyDlF04xCinfrvT6kvB81c1bFY66un0ZbsmYCyw1r%2FPBDNEjZ1WFRt8sOFsyiHB6HJADjhfPm5hj6flRBT2ClO8sB4ouNvu07oJlzJe30qu8GTXrOnhmHqkqkSSxtrUtatR9MFja46SERRYEmGYvXFVP1BmlbwTC3Qss0HeoLSX%2F3QtvCfs7YlLXsyBFBjk38DAxHmnUVf24FAChbbeSvRgraWJ19eOJU2mU%2BYd8HKZpBpFAG1nCpI7b5GqvOX%2BBE6AMGaOWrUF7gD22rx5t5Wt2S3aQiCEWWx7bzRAbI5D0G1EhRYhE8d%2BSt7xBfpmjmECVaMBqazNEIvjG2VQu%2FcxKx5cHsoaEQQX7dzbdDvWKkEAiR4jr1zcwyG0X7f3BDc43b9RMKvL4sAGOqUBriS9LpRZAjW16zB10J2wnpFIYgStxmOHE4sqEePPWYIlUi9vc%2BxO0rV7UlAHButgGACSCveT%2BnW4m6dJ62OZ%2FA2tlCcW4ltfAOaWupuI9Cz%2BaYaW8tZW8LnD7%2Bd8Jq50d%2FTO7aXyFuAB3h4HpxwNPDF8TQEWv1ihBYo56V22OjQgrCwz%2BJ5DgrtYgiquI39JPaAmhrTPXw2sWcAl4hSSCKpdaF1z&X-Amz-Signature=c58d8694fcfd5851449fe226fe1de21ac8088a9b3afce2a01ca322f7eba73788&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TZFRGTB%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD7Q%2Ba0kn6NnnzockeguHV%2BrJJ6cUWa0KUjUDtOh3K8QIgBcJa4DcYNcSLzo64yn4zrR0gOJ8EmhBkZDyAozQDnfcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGUgi4BLhvB0sVBrxSrcA1ZH%2BvMMppvlRh0rFuef%2BBxjWaPthF%2FrpCjhP14mLMUwgYupP0epyqBcBTzkiQ64a5oD1u1OwQKjYCkAhCOjPcJ1nQhIUhWUOGIjMMCOHjNc7uUpv5qRT7GBlKLAu7DmE4ev80hqtuPERYBwPzWUwhLxkaOh%2FVNlBPCLEJpy42C1Kf3%2B7dLQdlw5ojvb9CkWPMR7iyvhxi36xphV5g3T8yAJcuuVmKL371xk5scQg4pLNOcvigW3QPyDlF04xCinfrvT6kvB81c1bFY66un0ZbsmYCyw1r%2FPBDNEjZ1WFRt8sOFsyiHB6HJADjhfPm5hj6flRBT2ClO8sB4ouNvu07oJlzJe30qu8GTXrOnhmHqkqkSSxtrUtatR9MFja46SERRYEmGYvXFVP1BmlbwTC3Qss0HeoLSX%2F3QtvCfs7YlLXsyBFBjk38DAxHmnUVf24FAChbbeSvRgraWJ19eOJU2mU%2BYd8HKZpBpFAG1nCpI7b5GqvOX%2BBE6AMGaOWrUF7gD22rx5t5Wt2S3aQiCEWWx7bzRAbI5D0G1EhRYhE8d%2BSt7xBfpmjmECVaMBqazNEIvjG2VQu%2FcxKx5cHsoaEQQX7dzbdDvWKkEAiR4jr1zcwyG0X7f3BDc43b9RMKvL4sAGOqUBriS9LpRZAjW16zB10J2wnpFIYgStxmOHE4sqEePPWYIlUi9vc%2BxO0rV7UlAHButgGACSCveT%2BnW4m6dJ62OZ%2FA2tlCcW4ltfAOaWupuI9Cz%2BaYaW8tZW8LnD7%2Bd8Jq50d%2FTO7aXyFuAB3h4HpxwNPDF8TQEWv1ihBYo56V22OjQgrCwz%2BJ5DgrtYgiquI39JPaAmhrTPXw2sWcAl4hSSCKpdaF1z&X-Amz-Signature=0880c4563a16a2415148d653b389eab63bb1d2f39e724658c76c7d410698c7fd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TZFRGTB%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD7Q%2Ba0kn6NnnzockeguHV%2BrJJ6cUWa0KUjUDtOh3K8QIgBcJa4DcYNcSLzo64yn4zrR0gOJ8EmhBkZDyAozQDnfcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGUgi4BLhvB0sVBrxSrcA1ZH%2BvMMppvlRh0rFuef%2BBxjWaPthF%2FrpCjhP14mLMUwgYupP0epyqBcBTzkiQ64a5oD1u1OwQKjYCkAhCOjPcJ1nQhIUhWUOGIjMMCOHjNc7uUpv5qRT7GBlKLAu7DmE4ev80hqtuPERYBwPzWUwhLxkaOh%2FVNlBPCLEJpy42C1Kf3%2B7dLQdlw5ojvb9CkWPMR7iyvhxi36xphV5g3T8yAJcuuVmKL371xk5scQg4pLNOcvigW3QPyDlF04xCinfrvT6kvB81c1bFY66un0ZbsmYCyw1r%2FPBDNEjZ1WFRt8sOFsyiHB6HJADjhfPm5hj6flRBT2ClO8sB4ouNvu07oJlzJe30qu8GTXrOnhmHqkqkSSxtrUtatR9MFja46SERRYEmGYvXFVP1BmlbwTC3Qss0HeoLSX%2F3QtvCfs7YlLXsyBFBjk38DAxHmnUVf24FAChbbeSvRgraWJ19eOJU2mU%2BYd8HKZpBpFAG1nCpI7b5GqvOX%2BBE6AMGaOWrUF7gD22rx5t5Wt2S3aQiCEWWx7bzRAbI5D0G1EhRYhE8d%2BSt7xBfpmjmECVaMBqazNEIvjG2VQu%2FcxKx5cHsoaEQQX7dzbdDvWKkEAiR4jr1zcwyG0X7f3BDc43b9RMKvL4sAGOqUBriS9LpRZAjW16zB10J2wnpFIYgStxmOHE4sqEePPWYIlUi9vc%2BxO0rV7UlAHButgGACSCveT%2BnW4m6dJ62OZ%2FA2tlCcW4ltfAOaWupuI9Cz%2BaYaW8tZW8LnD7%2Bd8Jq50d%2FTO7aXyFuAB3h4HpxwNPDF8TQEWv1ihBYo56V22OjQgrCwz%2BJ5DgrtYgiquI39JPaAmhrTPXw2sWcAl4hSSCKpdaF1z&X-Amz-Signature=e1a9cd3621770c3f8afd8401f18682080dbc08a3c35e5d066cc15618b4ebd474&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSNKJRWM%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3sDlxUKCRthIqR81Wym1qvwYQzlxDJIZ5LuAJ%2F%2FEXYAiEArW8CwSCeeKLoG5ta9YOXsKtSWQCG1E8RwOr%2B%2B5enk4Yq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEwKZVCZNUbNjdn2tircA4Axya%2FKwIeNG1HLZ%2FLLYE8ZSnVyCc5l98YlAvyQOOvJKk4%2FPdvOX8f%2Fh3Vbnrnl%2FkIyn7k4O0FhsAlhrrNHz200L3CtEaHdf5lGtITMqFnVR0V9umahRJTdWe0GZ8binoFFrGPR3jXnNJWj348zisaHhd%2FDeLY4iCkCWwYMB0Nq1wLZ9Yfq2UPbCjOOTrlW36fv%2FjDbbePOHl3T0fEhpphwHTtgofg8V7dRT3cD2cWhznt%2FAXr2s5pku9gnSRCqRlNfoCBpeNBFrzlZlwfuGGY0esJ6svdzmuGqFGwq8GR0cX4X%2F%2B0RVsZLKLoDSXqvU0zASyEiRI0IWhqnmfFFSay2eAuVZDL2FibW1BbOOLdThDyMZSWSEyugDVTW3UYdug55i4UjxDlOArKVhNZJddNS8%2FL2cUzN%2FsMQS3c4kLdZLrykM9nxwtGPFxJyoNCXPBdKW4Oe9ye9RoNFi9%2FN62Q9H0kP4PvcaeUUVt1ryXOAxZOtrRS8pTEgA%2BOLHEyV1HSs6NSGonkLB2wwzy8F3fI20%2F6HoU6Zs9O3pkpYQnPFAETosVS1P3WIKfJ9Qcj7ISOeZk2riVMoXl9MUvOuvB%2BrhlMfRXmRWrvVAOQonkxbG4fpdg0bWcfA1tqzMMHM4sAGOqUBvY5q6%2FxsChBncJPTvpezrDB6GXgF8PHGxc09LAJ4Tpc%2F3ibC2Z4MRBG9ZQU3GOERMCZe1wjA7Y00bngYwcJ5dTim6%2FLB4Or9jARg2yuupodFWALeiM0avxkrdFsS4zgwFdOwbggorqo9%2FT5KlS%2BIpJkj40M2PrHFX8vd0iVlsfcmQdHTv34MaiLVXjYEmMWxYMcV6Z6U1e8vLFMtSrr0e4s%2FgtjZ&X-Amz-Signature=876d28b80fa4dd4aa5e26a3cb4ff106d583002035ac865333121dbaeb116ac13&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFNB2AXZ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BNTf0JjmplVL2ygxnzMEuWDVNG%2B71EMJmyadqttrT5AiBVTvgGE3R%2BktPCJ7N9tJo6RrBvaE1L53TOsvJAuRUfSir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMC3u%2FYN4YlLSOcjbGKtwDg2fCYlrmp4cXFJTiVqoBI5l5dM6rvpuaCD2VERXaTrNd6ol3Uj5%2BvLii4mQt1J6GxAjMNOUaJiNT%2FyPJZEBG%2F%2FbR1dO6n8kokPQrDe%2FwP4PrSUcJzuhJ4tK38%2FUauTBuDwM8htRK7ScqaJpB3hrRHbet1T2PZ1%2B2nH7yMqzjvFkd6KF2LpiYJm44IB9EBeqoYkkn%2FjkQH5Gp%2FyTd8AJ8o1S1xRZqX5Tx1nOtbkrc5vCSyL54xCxON%2FWLiZgv08OC31idBKAwqVyPvVNfSil1arv1A6y5i%2Bivp0KL2EwnGOdlGMmCsFwWtIL2UY5NkLKK%2F%2FOc8Ae8PHWad%2FmaZnpsEyf0DlDcmJolfCGbSj%2Fm6zL20FEG7Ns0hghPL9xY8cMFGzrrJYpKGPR2wizpzJP50nnXhAYYpO93Wl7ul%2BIId0w4uuqHZ6ZbhVHG7MUPHLoZ435vxmHoPxWur5%2BXQhhDnPu6%2BEUaYMKLsbcOkBg0NJNyggRaNsw%2BiO3uFnFD9XH6ABqx4jSr9AkutTNWCR1C%2FQl99r3Fv7TfuR3MDNExqAS5uM4zl314RaYvS7aCVGsDbvqDCxwPnsvaYe9Q83JqDte5iErAA3TItqSs7krqYCuvQbA3cCduZrt6yLcwmMviwAY6pgHkOSib%2FTESYLYK2MKGqRQcuD4D9KN5egzBiMOLeWu9KppTfc4KEc6oN%2F9ykTKGi14GGZCqqubaYUKExAlMAuJ1pMWaLs1QXajjmxu%2FsNk%2BvQFUvu7%2Br6QPJViLj%2F4xnAqGI6L4YZ%2BVZZKpAE80ymjwePLs42iTGkBS9R0QXN8uI3MfzD%2BRi0bLB7ZdijwxCV5Cri0RlzY%2FyoiE6XdaQkGgIPRewkBO&X-Amz-Signature=4c2ba887577437c5c03af5ef793f76aa191323848730af69be5f6ebfaa8e2e31&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TZFRGTB%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD7Q%2Ba0kn6NnnzockeguHV%2BrJJ6cUWa0KUjUDtOh3K8QIgBcJa4DcYNcSLzo64yn4zrR0gOJ8EmhBkZDyAozQDnfcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGUgi4BLhvB0sVBrxSrcA1ZH%2BvMMppvlRh0rFuef%2BBxjWaPthF%2FrpCjhP14mLMUwgYupP0epyqBcBTzkiQ64a5oD1u1OwQKjYCkAhCOjPcJ1nQhIUhWUOGIjMMCOHjNc7uUpv5qRT7GBlKLAu7DmE4ev80hqtuPERYBwPzWUwhLxkaOh%2FVNlBPCLEJpy42C1Kf3%2B7dLQdlw5ojvb9CkWPMR7iyvhxi36xphV5g3T8yAJcuuVmKL371xk5scQg4pLNOcvigW3QPyDlF04xCinfrvT6kvB81c1bFY66un0ZbsmYCyw1r%2FPBDNEjZ1WFRt8sOFsyiHB6HJADjhfPm5hj6flRBT2ClO8sB4ouNvu07oJlzJe30qu8GTXrOnhmHqkqkSSxtrUtatR9MFja46SERRYEmGYvXFVP1BmlbwTC3Qss0HeoLSX%2F3QtvCfs7YlLXsyBFBjk38DAxHmnUVf24FAChbbeSvRgraWJ19eOJU2mU%2BYd8HKZpBpFAG1nCpI7b5GqvOX%2BBE6AMGaOWrUF7gD22rx5t5Wt2S3aQiCEWWx7bzRAbI5D0G1EhRYhE8d%2BSt7xBfpmjmECVaMBqazNEIvjG2VQu%2FcxKx5cHsoaEQQX7dzbdDvWKkEAiR4jr1zcwyG0X7f3BDc43b9RMKvL4sAGOqUBriS9LpRZAjW16zB10J2wnpFIYgStxmOHE4sqEePPWYIlUi9vc%2BxO0rV7UlAHButgGACSCveT%2BnW4m6dJ62OZ%2FA2tlCcW4ltfAOaWupuI9Cz%2BaYaW8tZW8LnD7%2Bd8Jq50d%2FTO7aXyFuAB3h4HpxwNPDF8TQEWv1ihBYo56V22OjQgrCwz%2BJ5DgrtYgiquI39JPaAmhrTPXw2sWcAl4hSSCKpdaF1z&X-Amz-Signature=e8a94194caa27f4308cae38e40f01295e815a321acc7e46682d591aec81419e8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
