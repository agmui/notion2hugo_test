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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W5KE3NI%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BG9yiA2Lokj%2FGVsrzLQBenqjiTzp549fv6qFGLCjbGAiAnXiPpR6j2Kchfm5TK%2FH5llMq5PzmxiP5DYDgqdUCyBSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXKzWLe%2BFODe5vT1CKtwDIUWKBeEbTxfUyb6p3bbxyDVw8iv%2F7YxUDlwN%2B%2BcPNqGRrUHFPJM5RVBT4DmgXKcs5SQZGnW6X8rw57GHEUWb7YtIb8U6ELiMzcZD5hP0HMaEObXUYRUnDkmKsfdA1jMuuNyFiU%2BaCOkQhZJ%2F5ef1IbTldTngMzrX1oDN0fddAIxVvKK8BAvANAe1JmdLYcpYsa27QXefjPoFdMcfqDgGYiw8zZUmx3iAWFmfQRbgY5eg4dC5HArA5jZubJcuNr%2BG5%2BnOns%2FiJ8ct7jXaWwxfTuVxYV76CkBRTQR0mOoAZlDdJwgJcUxkZb%2BlrdMv8lAAUAtqqZPc5wDXZ1gCb%2BrNijLVRvJrjaFItt8qDKlX725XlnFxzce%2FldPPwdZuVl3E%2FzmjmGmNn4XEnB6ywbFWWln76Kkgqeu7%2FzPM5UNQzqMhOTe94%2BKwTJ%2Bb0fzbIjRT%2FP6a5%2FG0LQCDBgcGKX4ze9kD8l2Qq7NSlP6DXVAkvxqAwM1aNZ%2FKPW2REJQdo1QKpu3ePV125IPTvHuIj0SjjjU%2BaZYrVkTtRZblLO%2BhoGbxSuS0IOCwusCGiiBi4JZ66DJaMiTOwYITVTOrx%2BR2aNBhvobBCO5k8LdLO3RaXiu2gSoT8W4T%2FDnM8o0w%2BO2YwgY6pgEIMR%2FiWtLeUs%2F8ZNAfmXqXF9lDzUFKh%2BfJ17H1eep4BG7oz%2F3FASacKQKfa0bQlnie%2FPAyNbMNuucFPfrhmwsj4mQ1llyNZyfrKns8WtHU1nt7tbg%2BX%2BWZO0fx3VvZqP3cZnEL7Er8BtuFXmKKRoDxkSZWmNk4VrEma4ynOiewaxAuSwJc66%2FbFWV1P%2Ba3syU8jJ%2FjicyZkiU5%2FVtOPzlvlkIXKWf7&X-Amz-Signature=0c54a4aeb45319652f83aeb7c186f001e80f41198653f43d3073b486b71bbdc4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W5KE3NI%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BG9yiA2Lokj%2FGVsrzLQBenqjiTzp549fv6qFGLCjbGAiAnXiPpR6j2Kchfm5TK%2FH5llMq5PzmxiP5DYDgqdUCyBSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXKzWLe%2BFODe5vT1CKtwDIUWKBeEbTxfUyb6p3bbxyDVw8iv%2F7YxUDlwN%2B%2BcPNqGRrUHFPJM5RVBT4DmgXKcs5SQZGnW6X8rw57GHEUWb7YtIb8U6ELiMzcZD5hP0HMaEObXUYRUnDkmKsfdA1jMuuNyFiU%2BaCOkQhZJ%2F5ef1IbTldTngMzrX1oDN0fddAIxVvKK8BAvANAe1JmdLYcpYsa27QXefjPoFdMcfqDgGYiw8zZUmx3iAWFmfQRbgY5eg4dC5HArA5jZubJcuNr%2BG5%2BnOns%2FiJ8ct7jXaWwxfTuVxYV76CkBRTQR0mOoAZlDdJwgJcUxkZb%2BlrdMv8lAAUAtqqZPc5wDXZ1gCb%2BrNijLVRvJrjaFItt8qDKlX725XlnFxzce%2FldPPwdZuVl3E%2FzmjmGmNn4XEnB6ywbFWWln76Kkgqeu7%2FzPM5UNQzqMhOTe94%2BKwTJ%2Bb0fzbIjRT%2FP6a5%2FG0LQCDBgcGKX4ze9kD8l2Qq7NSlP6DXVAkvxqAwM1aNZ%2FKPW2REJQdo1QKpu3ePV125IPTvHuIj0SjjjU%2BaZYrVkTtRZblLO%2BhoGbxSuS0IOCwusCGiiBi4JZ66DJaMiTOwYITVTOrx%2BR2aNBhvobBCO5k8LdLO3RaXiu2gSoT8W4T%2FDnM8o0w%2BO2YwgY6pgEIMR%2FiWtLeUs%2F8ZNAfmXqXF9lDzUFKh%2BfJ17H1eep4BG7oz%2F3FASacKQKfa0bQlnie%2FPAyNbMNuucFPfrhmwsj4mQ1llyNZyfrKns8WtHU1nt7tbg%2BX%2BWZO0fx3VvZqP3cZnEL7Er8BtuFXmKKRoDxkSZWmNk4VrEma4ynOiewaxAuSwJc66%2FbFWV1P%2Ba3syU8jJ%2FjicyZkiU5%2FVtOPzlvlkIXKWf7&X-Amz-Signature=85fe5c035ef591c0e5e65f471a7379b98922fd76ef110d42015ddb74caa31192&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W5KE3NI%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BG9yiA2Lokj%2FGVsrzLQBenqjiTzp549fv6qFGLCjbGAiAnXiPpR6j2Kchfm5TK%2FH5llMq5PzmxiP5DYDgqdUCyBSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXKzWLe%2BFODe5vT1CKtwDIUWKBeEbTxfUyb6p3bbxyDVw8iv%2F7YxUDlwN%2B%2BcPNqGRrUHFPJM5RVBT4DmgXKcs5SQZGnW6X8rw57GHEUWb7YtIb8U6ELiMzcZD5hP0HMaEObXUYRUnDkmKsfdA1jMuuNyFiU%2BaCOkQhZJ%2F5ef1IbTldTngMzrX1oDN0fddAIxVvKK8BAvANAe1JmdLYcpYsa27QXefjPoFdMcfqDgGYiw8zZUmx3iAWFmfQRbgY5eg4dC5HArA5jZubJcuNr%2BG5%2BnOns%2FiJ8ct7jXaWwxfTuVxYV76CkBRTQR0mOoAZlDdJwgJcUxkZb%2BlrdMv8lAAUAtqqZPc5wDXZ1gCb%2BrNijLVRvJrjaFItt8qDKlX725XlnFxzce%2FldPPwdZuVl3E%2FzmjmGmNn4XEnB6ywbFWWln76Kkgqeu7%2FzPM5UNQzqMhOTe94%2BKwTJ%2Bb0fzbIjRT%2FP6a5%2FG0LQCDBgcGKX4ze9kD8l2Qq7NSlP6DXVAkvxqAwM1aNZ%2FKPW2REJQdo1QKpu3ePV125IPTvHuIj0SjjjU%2BaZYrVkTtRZblLO%2BhoGbxSuS0IOCwusCGiiBi4JZ66DJaMiTOwYITVTOrx%2BR2aNBhvobBCO5k8LdLO3RaXiu2gSoT8W4T%2FDnM8o0w%2BO2YwgY6pgEIMR%2FiWtLeUs%2F8ZNAfmXqXF9lDzUFKh%2BfJ17H1eep4BG7oz%2F3FASacKQKfa0bQlnie%2FPAyNbMNuucFPfrhmwsj4mQ1llyNZyfrKns8WtHU1nt7tbg%2BX%2BWZO0fx3VvZqP3cZnEL7Er8BtuFXmKKRoDxkSZWmNk4VrEma4ynOiewaxAuSwJc66%2FbFWV1P%2Ba3syU8jJ%2FjicyZkiU5%2FVtOPzlvlkIXKWf7&X-Amz-Signature=95bccb2b5e13f211781cf5c6018f87eb83e64dc88ef0219ad1d2f1a82daf1408&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LATR75B%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEC6kqrcfYgpSk%2F7ZSzFjiPOQn1jS6g%2BZC3fXU9%2FNhz2AiBspqk%2Fk%2Fc8suw1c6iu6Q9ZS7hniSMZ2TLvG%2BCnaGmmASqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM40ypb8TXpiKayJrdKtwD6BDiViPx7j7SW5mYIOwtey003bXl4f0pLFOfQAV7HwXb8DzdvmI1nBQiUTZnbaZDq1s4jLVnIKXul9m%2BWzeUscpaaVoOzEB6gCwppMelgFuBf7At%2F6L5Zp9GBRFZ7mjZCIoZtc0RaOkNXYcaIb3rM7pCK%2B%2BuPeM1J852aeo1jx%2F1FXs7byJpGMpeHPRHySVc%2Fu34SfOYNoQ9RHpZwlDTL5dKhRrp1v%2BgTo9i%2FmsnbyFOgRkutI7LZ%2B2qPh7pq%2FDfKRwxeco0xIr8yXbs7jrYdQtIjBUG5Cx2FmgC4zI4ooSQu%2FZJFNPMmNoQgmSaJnyUdSVqhBg32fk4LWWwmNxjGZeSy%2FZEDNEgDWvsLpJSs60iZNDykxVZPQtl%2Bw5xjcflWSL3alkvGLqUkUJux75l6kAlZy0rq0nF8BweVExZ28slARmUzKHrnlQ6zAsn5%2F%2BlhK1W0wLoCL4zdFU0RgchVtl3tEakwTxxptIvwY4%2B5R8uCRMH4ruc7Zc%2Bsf7q48zR4BdNGw2Gp3Aw%2BCSMGlSPUU8BH5nPYzItCE2o8VN%2F0wwCWCTbUmU%2FtrocUHfZU1UaBd%2FN%2Fe11ElOouM2dR87rPnxRrMRoku6oFknc83GJd9xs7l3dajsvaZkQjcgw8O2YwgY6pgGpkweAXVYLBMn%2BUh0xRlBO6bsWdMFWzrXbGjdGENxpaIRab56mGwLEAthUNDktc0FMuwR5CamzGxhkatxz%2F0PsnVTF9tMjDXpsj0aR9tC5NBqSwhxxb2SdyqxTuA0eyOYCr2%2BOxsb39u%2FKB7HhPx1reefQK4iv%2FL98LeiARET9bOS8dBrKaqdlFe39JVnEioP5CObUETWW8ul8Jq8zUU9uJtuCxK9p&X-Amz-Signature=03a30290093ba4d52356bac5cfac1e0a391d12aff05dde9cb89492a59c9557ca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXLJ2F4K%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDebI2dd8IQ6b4zYJmH4DBSuOOv1Y9ArMv67DdvIBFZ6wIgdYhH76vvov%2FcDUJjISFFkgaPEBESqmYW3EvjBWm41eUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAidgmADCeTk6x2m6SrcAzUrEWAqFKl54n57ke1wsWgSe7yi%2FPa1AZimRT4Uf%2F241uI7ESPwl6QJGKQ0uO0vTDZ13AZkWoXYQj90iAoff%2Flsdnp3wd73W7Vy5WeuycBoIyA6HEZlUfp3lz2kQOxQYCdqiySV5%2BuIl1jUWLBjT1YjXT0%2FQ2DuSKHikbI2WQbNOYwoGdwHtCqHtFuwDQC9Lql3QUY01RL8fp6vgAydqK1Zc61JEFXxq%2BBPHmw5vsWJBHtoaiqLUTXNKmH3ezwdxBy5zY5x%2FrT2LS4eXxWLmytxm%2BhKNMs%2FQQQf8d1%2BcwF0uoCnJRYrLYFhLJuxIfC5XHc%2F%2FlAbocg7B6wFqM9dxxjV2tbz%2BgFzAVMJnJLqg%2B%2B6lgUYV%2FRtltma%2FK3tnUIEjMsByVAm0LvnH%2FVxHhSCUwJOkqk5iUhXGaFE7PpKDhV20RRwcKgor8q%2FApbcE2G1E3%2BURKNjUAmL4vH733wynkx7yx9mSllAnq32%2BbCv5wNshnHz%2FRQttlEJaGfrME5ruXdNhDnOpG0piiziGVHUiTM%2BSr2fEUz3DVa0f%2BuJSZIKHtIOzP46SsbA0%2FtWmqW9H%2BnDjn0mHuRSFX%2FOPy2SjN41GJUkHnLcaxsUny5jET5ScsckSiz9z1NRf%2B5QMMfumMIGOqUB6%2BTzde5qxJkVp2XietY85TzDu4mPzQ%2FCVvRgrh27z6QE5HCUwQygT2XDK%2BOrCYLu1QRnBjZm81ayhw%2Fqkw1JArixdRz9fMzP21oS88EikhYmzHpeFyCXhdQ%2F%2FIyZ1%2F89r9l8GifMumnBNX5TgzoOba4a3hb9TyokDbng6FYIdDG3dASwsmVwjP3gkrfAfP3bPq82lBocvDu8ywh2cXS70JPsokKn&X-Amz-Signature=d257bad8a3668ae4ee80dd6878bf85666c0a991c756ba2c8a883f5c07aa6e9cf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W5KE3NI%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BG9yiA2Lokj%2FGVsrzLQBenqjiTzp549fv6qFGLCjbGAiAnXiPpR6j2Kchfm5TK%2FH5llMq5PzmxiP5DYDgqdUCyBSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXKzWLe%2BFODe5vT1CKtwDIUWKBeEbTxfUyb6p3bbxyDVw8iv%2F7YxUDlwN%2B%2BcPNqGRrUHFPJM5RVBT4DmgXKcs5SQZGnW6X8rw57GHEUWb7YtIb8U6ELiMzcZD5hP0HMaEObXUYRUnDkmKsfdA1jMuuNyFiU%2BaCOkQhZJ%2F5ef1IbTldTngMzrX1oDN0fddAIxVvKK8BAvANAe1JmdLYcpYsa27QXefjPoFdMcfqDgGYiw8zZUmx3iAWFmfQRbgY5eg4dC5HArA5jZubJcuNr%2BG5%2BnOns%2FiJ8ct7jXaWwxfTuVxYV76CkBRTQR0mOoAZlDdJwgJcUxkZb%2BlrdMv8lAAUAtqqZPc5wDXZ1gCb%2BrNijLVRvJrjaFItt8qDKlX725XlnFxzce%2FldPPwdZuVl3E%2FzmjmGmNn4XEnB6ywbFWWln76Kkgqeu7%2FzPM5UNQzqMhOTe94%2BKwTJ%2Bb0fzbIjRT%2FP6a5%2FG0LQCDBgcGKX4ze9kD8l2Qq7NSlP6DXVAkvxqAwM1aNZ%2FKPW2REJQdo1QKpu3ePV125IPTvHuIj0SjjjU%2BaZYrVkTtRZblLO%2BhoGbxSuS0IOCwusCGiiBi4JZ66DJaMiTOwYITVTOrx%2BR2aNBhvobBCO5k8LdLO3RaXiu2gSoT8W4T%2FDnM8o0w%2BO2YwgY6pgEIMR%2FiWtLeUs%2F8ZNAfmXqXF9lDzUFKh%2BfJ17H1eep4BG7oz%2F3FASacKQKfa0bQlnie%2FPAyNbMNuucFPfrhmwsj4mQ1llyNZyfrKns8WtHU1nt7tbg%2BX%2BWZO0fx3VvZqP3cZnEL7Er8BtuFXmKKRoDxkSZWmNk4VrEma4ynOiewaxAuSwJc66%2FbFWV1P%2Ba3syU8jJ%2FjicyZkiU5%2FVtOPzlvlkIXKWf7&X-Amz-Signature=165299afbd4925455147ac98c5650674d90c0f9b89784a0e6ccf79adf15de624&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
