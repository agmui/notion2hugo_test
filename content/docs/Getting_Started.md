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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQLQUXDZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIG4PfO9KUFRpbiqDQM%2Fbr%2F4dewjWsZomfJBRnm7c%2BJIUAiBI7SKXGER1du80a2pN9eJHg9bFv8r0oTR8%2BKPMQFSsliqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMukOy%2BkCEnEtkcG8hKtwDaVEXAINgIpQbfxELSp9Qa3MIMbEEw1duoPLEyre6pkk0mDx6L%2FIoani867Y6CNuRda%2Bt4FxRDwAuSgdSBXnyUwWYIxjf6OAQOVPi9skbC1hCnmPQTcfsD%2FGVg5RlXj%2B5MmoS28NM91q9aBAqTYWq1xzV9xJrTWe0RbA5X4ozHzmM9kIlQmA3t9W1V8N3O5HMcIucZN09GCwre587NAaxL%2B9TXpbN%2Bb1ZdtlXYsGYCFmKNr7xq0t4iL5LS8UpJbN8S6JB9vwwij8PtLufGv2SO3ngM8AnreNGhCOhlhTPWWjOrXF1fDwBzX%2FurSO6yu9WwBkpVkbQTQZgtfz5Y7hhXo8mcYLiZSoVJmgA3uFlfWgvSQcwcO%2Fjcj2kRBYvSiraxZhukdrgq%2FccmDdEn7g5fM%2FUPA6VmgY8QnYOz7ribHLXg52eXGMJY7HYTJPO2AX6VAWlR7BcmZLD%2BN3bVbueWTYpjo90ZMi%2F91M6rtSfrFmQoY8gu6L9PcazBs4sUWoCh%2Bs43Nx6EGsVJ24WKK%2FzKoRyMhpDG7MtHgNNmerVc2Jv1eOoJArn9CSXqT7tdfA3Ft3TmpY4oPwjIeCElvxNXDoU71VmKPbEsD3J5mcgxqyOEKYor595anDHjBwwh7GixAY6pgGJG4%2BRy104sRuAiFEymb1z%2FNoYWCWBQgdo9iO11M0cxSSAB398G85p1bwW4bytEYRsr9EswxM0p%2BI5bBWMvQm2iib9JM5%2BL%2BxM6cCGVaiYpOpEW5eowVooQRH0Wk3aXVvrRomfec4CaNMxN5%2BVvcOg6mXIgW2TC4A%2FNEnDMvCn955wwxLu5YGc42SXv5l7Kto9ynTbZ3tMOoSUQ7J%2FiitprndQ%2FWIf&X-Amz-Signature=ad9032a2e90ef7cae9725e70f7d379e608045205cadb691abb3e2e60cdd7d9bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQLQUXDZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIG4PfO9KUFRpbiqDQM%2Fbr%2F4dewjWsZomfJBRnm7c%2BJIUAiBI7SKXGER1du80a2pN9eJHg9bFv8r0oTR8%2BKPMQFSsliqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMukOy%2BkCEnEtkcG8hKtwDaVEXAINgIpQbfxELSp9Qa3MIMbEEw1duoPLEyre6pkk0mDx6L%2FIoani867Y6CNuRda%2Bt4FxRDwAuSgdSBXnyUwWYIxjf6OAQOVPi9skbC1hCnmPQTcfsD%2FGVg5RlXj%2B5MmoS28NM91q9aBAqTYWq1xzV9xJrTWe0RbA5X4ozHzmM9kIlQmA3t9W1V8N3O5HMcIucZN09GCwre587NAaxL%2B9TXpbN%2Bb1ZdtlXYsGYCFmKNr7xq0t4iL5LS8UpJbN8S6JB9vwwij8PtLufGv2SO3ngM8AnreNGhCOhlhTPWWjOrXF1fDwBzX%2FurSO6yu9WwBkpVkbQTQZgtfz5Y7hhXo8mcYLiZSoVJmgA3uFlfWgvSQcwcO%2Fjcj2kRBYvSiraxZhukdrgq%2FccmDdEn7g5fM%2FUPA6VmgY8QnYOz7ribHLXg52eXGMJY7HYTJPO2AX6VAWlR7BcmZLD%2BN3bVbueWTYpjo90ZMi%2F91M6rtSfrFmQoY8gu6L9PcazBs4sUWoCh%2Bs43Nx6EGsVJ24WKK%2FzKoRyMhpDG7MtHgNNmerVc2Jv1eOoJArn9CSXqT7tdfA3Ft3TmpY4oPwjIeCElvxNXDoU71VmKPbEsD3J5mcgxqyOEKYor595anDHjBwwh7GixAY6pgGJG4%2BRy104sRuAiFEymb1z%2FNoYWCWBQgdo9iO11M0cxSSAB398G85p1bwW4bytEYRsr9EswxM0p%2BI5bBWMvQm2iib9JM5%2BL%2BxM6cCGVaiYpOpEW5eowVooQRH0Wk3aXVvrRomfec4CaNMxN5%2BVvcOg6mXIgW2TC4A%2FNEnDMvCn955wwxLu5YGc42SXv5l7Kto9ynTbZ3tMOoSUQ7J%2FiitprndQ%2FWIf&X-Amz-Signature=3b295dd12ecb2f0a6b216358a75494a5371c77428a87e2f43397c198d107bb91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQLQUXDZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIG4PfO9KUFRpbiqDQM%2Fbr%2F4dewjWsZomfJBRnm7c%2BJIUAiBI7SKXGER1du80a2pN9eJHg9bFv8r0oTR8%2BKPMQFSsliqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMukOy%2BkCEnEtkcG8hKtwDaVEXAINgIpQbfxELSp9Qa3MIMbEEw1duoPLEyre6pkk0mDx6L%2FIoani867Y6CNuRda%2Bt4FxRDwAuSgdSBXnyUwWYIxjf6OAQOVPi9skbC1hCnmPQTcfsD%2FGVg5RlXj%2B5MmoS28NM91q9aBAqTYWq1xzV9xJrTWe0RbA5X4ozHzmM9kIlQmA3t9W1V8N3O5HMcIucZN09GCwre587NAaxL%2B9TXpbN%2Bb1ZdtlXYsGYCFmKNr7xq0t4iL5LS8UpJbN8S6JB9vwwij8PtLufGv2SO3ngM8AnreNGhCOhlhTPWWjOrXF1fDwBzX%2FurSO6yu9WwBkpVkbQTQZgtfz5Y7hhXo8mcYLiZSoVJmgA3uFlfWgvSQcwcO%2Fjcj2kRBYvSiraxZhukdrgq%2FccmDdEn7g5fM%2FUPA6VmgY8QnYOz7ribHLXg52eXGMJY7HYTJPO2AX6VAWlR7BcmZLD%2BN3bVbueWTYpjo90ZMi%2F91M6rtSfrFmQoY8gu6L9PcazBs4sUWoCh%2Bs43Nx6EGsVJ24WKK%2FzKoRyMhpDG7MtHgNNmerVc2Jv1eOoJArn9CSXqT7tdfA3Ft3TmpY4oPwjIeCElvxNXDoU71VmKPbEsD3J5mcgxqyOEKYor595anDHjBwwh7GixAY6pgGJG4%2BRy104sRuAiFEymb1z%2FNoYWCWBQgdo9iO11M0cxSSAB398G85p1bwW4bytEYRsr9EswxM0p%2BI5bBWMvQm2iib9JM5%2BL%2BxM6cCGVaiYpOpEW5eowVooQRH0Wk3aXVvrRomfec4CaNMxN5%2BVvcOg6mXIgW2TC4A%2FNEnDMvCn955wwxLu5YGc42SXv5l7Kto9ynTbZ3tMOoSUQ7J%2FiitprndQ%2FWIf&X-Amz-Signature=49121309b47372ca7432c20f72241c5d2d27d97023064eacca01377c7ab40678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKIWDH2R%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDyp8ToBJ51lea%2BumqExAniqJoOg5hVgJXXBSjdaunhagIhAJj9KSjKpGj9HvADYPgUkDe63ElPjqQZqe4qGEt4cPSNKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Ff5soi5pVNyr4z1Iq3AOQh4g9fSNOJ2gPpIz2pB%2BkzsgwuZdEpfUO0ErYArSpJrcFjJ7mQ%2B8dEuPSNEAjTqVW3p0vFj6wGEKDxNYAwjmcFtMrYpa0ZkLyXHea9ycEvlun6LYUv%2B94LgOyLPmYKKurztrTpt4cQt%2Fe9NzrBmLEdmNF6Exd4fZlGZxfYq1HXzhOVNVWK%2BvbSU4dVrUjgTrf4u0mIleRaYKcj3CJgwchyXNltynuLUBPIxFcR7Ts5EDoWS%2F7z7SBSnE5miAw%2BMIHI4wxA0PXWZ%2BF%2FjsU6nIKhgimOXpyS%2FPQlYf%2Bpi%2BmYtrOyr3Na3CrDKTX3aak0Ry9zyW9dtvXPCUYvwZGaVaYO6YjbaBXQNvgGdfhV5N9LOixiGx02jtmRYeQx6dcDD%2Bv8CjCU%2FqLXvzE1BXzqaPzw9%2FKSNVUn5wgaHSEQzk3iayCsG52SeNEWgGtBIziv1jQBxYt1BAuAOA0N%2BksYklBIsNt2MZ1dsltZB3Ux0NgoSmz3%2F3aDqQtYzg2iyp1ms%2B0fnnTj%2BXrVUOuajR7NYJWQyzBn7B2c8dy%2BJ7ucc6neV2SrWnAIAZx%2FdomVUTX2mRs1iM0cDK0oDnD8b0sdH%2FwTEQP%2FZovocR9UzM%2Fb1TW22D90coOhrM7Yv01xzDUsaLEBjqkAaesMlEZpg36pzcIjGbZhW0%2FG2WngbfA3%2BlKVybbMfWW2pmxB%2F2uZ8KTJRSWQCqcmu9l48rQKo5o%2FKzdbMP0zMnx%2F5x2BE2kJk2y0jFXh4eELoebejrsrz4a%2BVov4lVQhgN%2F635fN9sr6J77P7TsT73S1Dc7KMKc2l8QmdZFRnaDOQOGpQJO4mtAKJDnj4Mnx%2B0zCBlDqhJ7S4GcOil2KePVdAVx&X-Amz-Signature=cdc9f1ce51159413cdbc3b8f1aa65a775e8e3fe9a9e52273ceb6adc6a9b376ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCY5KSNP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDKxs3xkr9xOD3R0UCxAAxHYTT7roVJpN8SgyEFvuulOwIhAJzTdNGMDJVfrHT0ySsh1bi7oq%2BGrr9eh1i8mVyKTmPcKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FvyKRNBSN9W050XQq3APmR00VWipAlllGLviOnq%2BgAqhnLDhduJqOHtM2rHU1SfVqSYJPNjuNZknU%2FnW79VifwNbhiLM4Rrj9q10T1vBBg01gphZ9rkC%2BOXfweVibRN7t1reSkZSIqEz8kveH2cAKMrx%2FoUOooCpdbgD545jWdYVt7AvRCFzHN5SS5ObJ1qjxDRHsQB5ZP3C4ZsMjlFbi19MgrgDDewlgxet%2BIjCGQDFFcNAH6iRyO%2BpI9l36GaMi%2BtVnAUoofYuIjC0YhIkrbU55tk1A0RSCllYGuaTm2cAgkncD2mq3FLTo1yWLmcnC0yoe3p1mmOjpQ2OJfRzdvnI9aUA8IaxKXXvkqTOPjPJTLuRpTqTgDnrIvE6B0ttR%2FgT7qVlCOWv2VOoXutsNnxRa0wTmT%2B7EOKSyFswXj7SPh3QxqYjxYBt50k4Lk47TgY7q%2F%2B0CY71WrfE1y3%2Fl4ztChIelr2EVRC%2FSUJSARGA9qFu1hHih69Gkee5gc1bZHWgePJBYoB9wGx85oAQIqcfOMS57nQQfPbwrcE880CJJ9iuiXuxSgErs7HZNbSMXVTy%2FICkKiPEZSIFqCOVEYxGagmQA%2B5eHOLjIo3E9NBLUf3RQvmv5N30BOcsZUAJFyhnFSrD6IBDHmjDIsaLEBjqkAR8KWZXhhMLKWVhM2O8H0OovUjZ4sPvbU1aP29I7ZvVZ1Jkef0dGiDmLbZ1%2BVa5oIMN5gmx3zXYu2LsVbRp%2FWr%2Bd84glUFydU7QG7HrJ8F%2F%2Bw8YFfmbbIS9ylIYjypxMB3Q7zYCAwWAaiN%2FGPWe0UU8zwg36cPvqBI7MdtKasIS6pfuUCoaSYBNaOvcOaG161%2Fe6v48H9tPC7y5hqbiIoDCT9zdG&X-Amz-Signature=6f50fac7ae5ebc6dce4d998a1cda903026e6508d7c64c420f4f1ecd47eeb476c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQLQUXDZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIG4PfO9KUFRpbiqDQM%2Fbr%2F4dewjWsZomfJBRnm7c%2BJIUAiBI7SKXGER1du80a2pN9eJHg9bFv8r0oTR8%2BKPMQFSsliqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMukOy%2BkCEnEtkcG8hKtwDaVEXAINgIpQbfxELSp9Qa3MIMbEEw1duoPLEyre6pkk0mDx6L%2FIoani867Y6CNuRda%2Bt4FxRDwAuSgdSBXnyUwWYIxjf6OAQOVPi9skbC1hCnmPQTcfsD%2FGVg5RlXj%2B5MmoS28NM91q9aBAqTYWq1xzV9xJrTWe0RbA5X4ozHzmM9kIlQmA3t9W1V8N3O5HMcIucZN09GCwre587NAaxL%2B9TXpbN%2Bb1ZdtlXYsGYCFmKNr7xq0t4iL5LS8UpJbN8S6JB9vwwij8PtLufGv2SO3ngM8AnreNGhCOhlhTPWWjOrXF1fDwBzX%2FurSO6yu9WwBkpVkbQTQZgtfz5Y7hhXo8mcYLiZSoVJmgA3uFlfWgvSQcwcO%2Fjcj2kRBYvSiraxZhukdrgq%2FccmDdEn7g5fM%2FUPA6VmgY8QnYOz7ribHLXg52eXGMJY7HYTJPO2AX6VAWlR7BcmZLD%2BN3bVbueWTYpjo90ZMi%2F91M6rtSfrFmQoY8gu6L9PcazBs4sUWoCh%2Bs43Nx6EGsVJ24WKK%2FzKoRyMhpDG7MtHgNNmerVc2Jv1eOoJArn9CSXqT7tdfA3Ft3TmpY4oPwjIeCElvxNXDoU71VmKPbEsD3J5mcgxqyOEKYor595anDHjBwwh7GixAY6pgGJG4%2BRy104sRuAiFEymb1z%2FNoYWCWBQgdo9iO11M0cxSSAB398G85p1bwW4bytEYRsr9EswxM0p%2BI5bBWMvQm2iib9JM5%2BL%2BxM6cCGVaiYpOpEW5eowVooQRH0Wk3aXVvrRomfec4CaNMxN5%2BVvcOg6mXIgW2TC4A%2FNEnDMvCn955wwxLu5YGc42SXv5l7Kto9ynTbZ3tMOoSUQ7J%2FiitprndQ%2FWIf&X-Amz-Signature=d21a6098e99067df8dc457d616f4e78ee296c1e66255fb8f3fce1ee038dc3424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
