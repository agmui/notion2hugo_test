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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627LWRXHE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeGhMoTaeTPxAXysQ6uUX523SBJEE9XHff0EJ7wYTrAAiEA%2FoeXVIX2Ce6SbRq4xPYzWd6Z4MyxJfl7cD%2FwZSGApzEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsWL%2BODGj7vuJPGwircA%2BfcDNyZl0js1U16E9eO18xOl%2FeewSEi0X%2FmOqAt5R671sGtBZsF3lfb6som%2BDEyBnw2k9leLDfUoceJcMMBYVT6fkVvNP5eqy%2BpuZH2zgzCeJX49L2ek8mf%2BySLI0v9dZEIpsrrIIJqv4dYElVresWF6A3rps1jPtDy8M%2FSt5%2FkY8coCN8WI4UENGuW0KFDmqOYcrXuUMWsy62qf48PDa4hA%2FdWldeo0m5EX6SfKKfvgixHcpGFLBDCtIukPsqio8Xx0sZ4CTUWjiCJwmgyS9dXY5Yqhrqw7djq8GJy5s55ZAipelslioYe9FUR8YcSyscdxR40%2B4GPiDYoZ7Gs8FC4IBVuTFiCFPsU28S72%2BYFD%2BvEENUKbXcnTBZfP5YJigorjzye8H98JrP3Tppp7u2M9Iu9HKhsMreGlwt4Zsg6ryQnGltfcrqe0tdfnveY1bb5wYypsLU3s1hHzGxEVo4wCPYUBpzhKULN55KW66lP83hQw3BzW6RvaLr06c9tLM1ljagO8RqWVFb2LsTf2P3ADlJ362w09kD2atChGiYFHjDUqJ3bm3ipBBsWbs3U8ZDj3UE%2Bf6hykY1gWfV0xlij8vEQ%2FLmvXoTue5zXtGlPrAOjqP%2FggTFLE5JEMLLzysIGOqUBjxEwX9tEzL%2Fyv%2FO127b%2B5evVtCBWVZSya%2BhcAf%2F6PnvOjrC4z%2BFrL4wuoEuEtwRUVXgKRgOjkxyhumxj%2Fs2U3m3eBORU6v6n2vvWYVyvDGHMWwkglUub2fAfqUhWJ6eq3PFVFYZO%2BR%2BFw9mX5YVX46o%2BYlblOgCS%2B%2BXb4dcZGgBHNYU%2FX7ZwwVdLrPyObxcXdRF%2BPhh49TXc69anp9HjkmH0a0bf&X-Amz-Signature=7ba2b948e95ecab8b5e543a5b6c7029d675d2accd2a596bd9dffeca64154b8d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627LWRXHE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeGhMoTaeTPxAXysQ6uUX523SBJEE9XHff0EJ7wYTrAAiEA%2FoeXVIX2Ce6SbRq4xPYzWd6Z4MyxJfl7cD%2FwZSGApzEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsWL%2BODGj7vuJPGwircA%2BfcDNyZl0js1U16E9eO18xOl%2FeewSEi0X%2FmOqAt5R671sGtBZsF3lfb6som%2BDEyBnw2k9leLDfUoceJcMMBYVT6fkVvNP5eqy%2BpuZH2zgzCeJX49L2ek8mf%2BySLI0v9dZEIpsrrIIJqv4dYElVresWF6A3rps1jPtDy8M%2FSt5%2FkY8coCN8WI4UENGuW0KFDmqOYcrXuUMWsy62qf48PDa4hA%2FdWldeo0m5EX6SfKKfvgixHcpGFLBDCtIukPsqio8Xx0sZ4CTUWjiCJwmgyS9dXY5Yqhrqw7djq8GJy5s55ZAipelslioYe9FUR8YcSyscdxR40%2B4GPiDYoZ7Gs8FC4IBVuTFiCFPsU28S72%2BYFD%2BvEENUKbXcnTBZfP5YJigorjzye8H98JrP3Tppp7u2M9Iu9HKhsMreGlwt4Zsg6ryQnGltfcrqe0tdfnveY1bb5wYypsLU3s1hHzGxEVo4wCPYUBpzhKULN55KW66lP83hQw3BzW6RvaLr06c9tLM1ljagO8RqWVFb2LsTf2P3ADlJ362w09kD2atChGiYFHjDUqJ3bm3ipBBsWbs3U8ZDj3UE%2Bf6hykY1gWfV0xlij8vEQ%2FLmvXoTue5zXtGlPrAOjqP%2FggTFLE5JEMLLzysIGOqUBjxEwX9tEzL%2Fyv%2FO127b%2B5evVtCBWVZSya%2BhcAf%2F6PnvOjrC4z%2BFrL4wuoEuEtwRUVXgKRgOjkxyhumxj%2Fs2U3m3eBORU6v6n2vvWYVyvDGHMWwkglUub2fAfqUhWJ6eq3PFVFYZO%2BR%2BFw9mX5YVX46o%2BYlblOgCS%2B%2BXb4dcZGgBHNYU%2FX7ZwwVdLrPyObxcXdRF%2BPhh49TXc69anp9HjkmH0a0bf&X-Amz-Signature=9c8ba7f285a7b05f0a653224453af647e39f75991469312fa105ab85e3bbd230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627LWRXHE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeGhMoTaeTPxAXysQ6uUX523SBJEE9XHff0EJ7wYTrAAiEA%2FoeXVIX2Ce6SbRq4xPYzWd6Z4MyxJfl7cD%2FwZSGApzEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsWL%2BODGj7vuJPGwircA%2BfcDNyZl0js1U16E9eO18xOl%2FeewSEi0X%2FmOqAt5R671sGtBZsF3lfb6som%2BDEyBnw2k9leLDfUoceJcMMBYVT6fkVvNP5eqy%2BpuZH2zgzCeJX49L2ek8mf%2BySLI0v9dZEIpsrrIIJqv4dYElVresWF6A3rps1jPtDy8M%2FSt5%2FkY8coCN8WI4UENGuW0KFDmqOYcrXuUMWsy62qf48PDa4hA%2FdWldeo0m5EX6SfKKfvgixHcpGFLBDCtIukPsqio8Xx0sZ4CTUWjiCJwmgyS9dXY5Yqhrqw7djq8GJy5s55ZAipelslioYe9FUR8YcSyscdxR40%2B4GPiDYoZ7Gs8FC4IBVuTFiCFPsU28S72%2BYFD%2BvEENUKbXcnTBZfP5YJigorjzye8H98JrP3Tppp7u2M9Iu9HKhsMreGlwt4Zsg6ryQnGltfcrqe0tdfnveY1bb5wYypsLU3s1hHzGxEVo4wCPYUBpzhKULN55KW66lP83hQw3BzW6RvaLr06c9tLM1ljagO8RqWVFb2LsTf2P3ADlJ362w09kD2atChGiYFHjDUqJ3bm3ipBBsWbs3U8ZDj3UE%2Bf6hykY1gWfV0xlij8vEQ%2FLmvXoTue5zXtGlPrAOjqP%2FggTFLE5JEMLLzysIGOqUBjxEwX9tEzL%2Fyv%2FO127b%2B5evVtCBWVZSya%2BhcAf%2F6PnvOjrC4z%2BFrL4wuoEuEtwRUVXgKRgOjkxyhumxj%2Fs2U3m3eBORU6v6n2vvWYVyvDGHMWwkglUub2fAfqUhWJ6eq3PFVFYZO%2BR%2BFw9mX5YVX46o%2BYlblOgCS%2B%2BXb4dcZGgBHNYU%2FX7ZwwVdLrPyObxcXdRF%2BPhh49TXc69anp9HjkmH0a0bf&X-Amz-Signature=a17d8525ce5f95225082cee239634ce3b663b59175a41627716d3899c33998e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6HOIKXQ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICt62%2BSJ3VP%2BHJz0BdMxSlRMO6P7%2Fu0W8GRkF2UidC9FAiAYrBHufQ20uEJPCidKGZ7j6GytOgXWhMJkHHma2ZGlRiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk0lAZBEhOvqGedrrKtwDfOHtyKiWbOtY6P9YrTgfph7XYSKu%2FBn9kSq2zbNBpLMGW1nF%2BWj9KYqQLf4yeSa9YCnwderQ8UOi%2BF%2FfJHNRUKQakvnPIaShnQcjRYY1WsxATbyyTkfbi5dgXIZQVgW9CixKomMdfTd25pmeZ2gDYRzTrbsCCelsH2lUfzJiLGXFotplHCgpzRDB1FlUgnDYRI7VX79ZivqqC3xhf%2Ft%2Bvn38T5d7lmPx3xY0Se%2Fn9HIlWbKleRlckgD%2Bm5YCWpfdqSFJEScotVZDFxHCALZmBXgwaBlZ9wzV6q%2FMVOeeqmdwZz0AGaVDb1nqQKv%2BEO5QWJnUtqTCpWcZFZp%2FOFdH1w8I3H2s5PippHqsc33tlf%2F%2BtN1jThCDDcdop1H7jWe26jSq3R8nu79vYAgVg29FymjFp1pkZY56WFgFMf8xCUFkRXPw6GOWvMh6D4XJE9CFaePCY4Tx0nJLuzLmPw4m24YG5VpS1KUwIPJPzP4cs7BkshzkYs5wkcO%2FSZFlTJaZ%2FvDJMQGvrHZJBM6BRaMvDU2K8NpR8w%2B9jLpbA6jbPMEQ8kQOpTXZgep7ulK5ixfAFRNNNjDrMHwr8Uqwa34je%2FfB1DCVNXAb9KADq8voQ6457rhrgTyKQ2PP6iUwn%2FTKwgY6pgGMOEYMCKWYmfOTsmMqDSIE9b15ZQwxiOV7HdGo6MquUDySXTJQWjcI11y6yfN%2FSna4pvaK9q14xdzmrwUVeUEp0PN5dbj7SqcvB%2Fv7uvjzYRFO3qxg%2FryH9OYuWEhhQ%2FPfGiFtuYPT84rHwa6QGhUw9JDtpVVNvXnE7MrfhYNMNng%2BhXYjsThNTN4niLky5D9LPEJlIFjQcRa1pS6VC5FpPfX89T%2BA&X-Amz-Signature=3162a2eac7abb7a88c5f9a4b61a63386f26e10783145e40750c93958587b8d86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z2GWY23%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXu3rbBRpzcl5O0zMNDCaAB4fIIJpHRgn%2FpeQRQAR4ZAiAOYGbpxLaXkB%2B%2F1s%2FujzjKeEB1La62zerwVW7qb5h5DiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiSI3YC3Djx%2BlBjwpKtwDeNrQmjEGo4glcy5xpN%2FiXCVX8paR%2FH278VtE%2FUBaw3tzNywX%2FpUxBaOTI%2FBFYFT7I6zqfB6H%2Br2DWTN45596H1uLd1NnNqqDRKYWNo%2BqCqocbYZ1ejbUmxj6rrm%2BebcnbxzJmvE7MTb7fslMdghi75ZEaRek71iaCj80h%2FM9uWMaPvgbe1kTh0At3hp5HTgYPzeTGKhnLP4vDHb8ANMLVAkQO3c6FZ%2BokKDwZSUmuNpDBpkq0tmy5VmXckmrQbxCcuUD41JexCqtX1tx%2FYXLXr53WAPs%2FRmqlbOEpXQy%2BUBVESB%2FZe62Xn4s%2BGs1kP3HzOxANGLsIid290P3HHv6jCyJQT9kTeSAnCjztKWbuo%2F%2Bhju0NtDdH9rDsTvEH502UfinaIuf6YfSuwsBG2nv1Pjqb3yZCtvv3OItNBArTvUJo80AWXnovLSthB%2BWo2mwXUAHQ%2FtuYhSlsvcBR4VV%2FCdPPuIfvIPWrRCQ8YGPVpVRycrcJx4Q9kyOxP4tC8gM4oBjLx4zLJyYPlIpRHwT4Z6avsvVXfruHku8VS%2FSGzPBXQmmDZGSL8irZjPimGlzylmnpPapDQw0HU%2Fwl60hPYozuULsN9mwjZOdCnyYAgF8KjzCe6FKbtZGd1Ew2vPKwgY6pgH4ogyDNqo3nHTLHYgU0aXf0oVPZGkqpxj5IIINYzzFTr6bcyg%2BSyq5xber5PYBzT1qdspfplgMKLonTWIny4WDAT9i71ZrzuzgkoJ2gbEozm6nToLuC9C3bo4uSWMwTL80NzDhK7DcZz%2FBRHUBAbog8OEDiSr3EoTuRjGZKOHCwskWkVDkJipCDC0tdZsLElH0OKrz185sNj4YJ9TReUWfYzQyYzfg&X-Amz-Signature=fbddbcf11496aab05a0d7722015bc990437818c8db61d8eba6a8c021150e88aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627LWRXHE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeGhMoTaeTPxAXysQ6uUX523SBJEE9XHff0EJ7wYTrAAiEA%2FoeXVIX2Ce6SbRq4xPYzWd6Z4MyxJfl7cD%2FwZSGApzEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsWL%2BODGj7vuJPGwircA%2BfcDNyZl0js1U16E9eO18xOl%2FeewSEi0X%2FmOqAt5R671sGtBZsF3lfb6som%2BDEyBnw2k9leLDfUoceJcMMBYVT6fkVvNP5eqy%2BpuZH2zgzCeJX49L2ek8mf%2BySLI0v9dZEIpsrrIIJqv4dYElVresWF6A3rps1jPtDy8M%2FSt5%2FkY8coCN8WI4UENGuW0KFDmqOYcrXuUMWsy62qf48PDa4hA%2FdWldeo0m5EX6SfKKfvgixHcpGFLBDCtIukPsqio8Xx0sZ4CTUWjiCJwmgyS9dXY5Yqhrqw7djq8GJy5s55ZAipelslioYe9FUR8YcSyscdxR40%2B4GPiDYoZ7Gs8FC4IBVuTFiCFPsU28S72%2BYFD%2BvEENUKbXcnTBZfP5YJigorjzye8H98JrP3Tppp7u2M9Iu9HKhsMreGlwt4Zsg6ryQnGltfcrqe0tdfnveY1bb5wYypsLU3s1hHzGxEVo4wCPYUBpzhKULN55KW66lP83hQw3BzW6RvaLr06c9tLM1ljagO8RqWVFb2LsTf2P3ADlJ362w09kD2atChGiYFHjDUqJ3bm3ipBBsWbs3U8ZDj3UE%2Bf6hykY1gWfV0xlij8vEQ%2FLmvXoTue5zXtGlPrAOjqP%2FggTFLE5JEMLLzysIGOqUBjxEwX9tEzL%2Fyv%2FO127b%2B5evVtCBWVZSya%2BhcAf%2F6PnvOjrC4z%2BFrL4wuoEuEtwRUVXgKRgOjkxyhumxj%2Fs2U3m3eBORU6v6n2vvWYVyvDGHMWwkglUub2fAfqUhWJ6eq3PFVFYZO%2BR%2BFw9mX5YVX46o%2BYlblOgCS%2B%2BXb4dcZGgBHNYU%2FX7ZwwVdLrPyObxcXdRF%2BPhh49TXc69anp9HjkmH0a0bf&X-Amz-Signature=e36811cb681b0494c82ead6d3abe74f405bd2193f7daa643d195f3a3af205625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
