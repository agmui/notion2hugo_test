---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIQ55KAX%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDGpbE9t5c4K3yqXpveAM8Bj%2BXF07c40PkQjz0iWkZuTQIhALM8qtSUPJuhTNkfS2NJfyjDMSP1zM0jsHQQr4aCrCbkKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq0%2BjGdLYekSkAWaYq3AP6P%2B9mVBGq%2BKHZY0t4FBw40YCh%2BQN9F7sm08HuKXhXvkkn9gMMLIPQCxGEKQeUivm3YM8ZTq%2Bnx0MxRqqbTOboaZce909WlXJQxTfhXVWh2he%2BUtMsspoAvu%2BjeAK5kCqErx0Kd6jimwsZhPzjkHPVUXyn0PlZAdzdv2F1XAaOFq7RiBAUxpfRNvzvdXrxkNmuItNtKlT0ms1b8n7SvO%2BL%2BLPsKDX5xmjzVF%2F2Pp0qPRWKM1w0wWSff0FrqVSNv2oaFVG5bOPgh1iwehddaPR%2FKKVsIzdhtP8ZwGYYZvD3srDzXL4TurppwcscWOkdPiKP95eiIwFfkeFyfKye0a4PTr22L%2F7Pqp9tCSuX%2FEda4jU9C%2BrTUhMXSO6Iox%2BWzpqy%2F9mfuz3D%2FfSS%2BAdCYxnBdvmKIHo31en3KrJmOW5Ha6jq9XCeF%2BVDsweylFKGJzEJWt8WLxsgyPkha4cWQ%2FARUhzgLpIiH7vcIYukrgdQWUVY9SeaIal%2FcfFzvb%2BYmmthoHeHXWccSgaCSxVZyxyJSoBiT6jTWPxKKljyu922RWHHb9zRZGYfHT7B3YKGj6jI%2FgiyopNEn%2BJ5J0qbecoqiInBx2jwSd0HRuemSAsbhpOF6PjGBOpueCXkCzCz5L%2FTBjqkAQnGusnnO26gQYissFINli2L1PykVtHIndgHf0ZZJ6rQ5XQXcW8ei7bM4YW1WpYTV5lUL%2FRXbSGxU3sVUFkg0QZtUtVSL9U974g%2FZXHD290FSXVF12bC1aRJMPQzdl7evsaS%2BV1jtqWk7UhEkwZIwPrhgukfw%2Bdqzsz9PneKLA53j0%2FTH48SLz%2FUGp9b3GHW%2FBypbDaGrjU572jXAUkhOTd5G2KJ&X-Amz-Signature=426250051d574ef067a506667a7a0acfebe61772e787e639d4a91a9dc9d5ee4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIQ55KAX%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDGpbE9t5c4K3yqXpveAM8Bj%2BXF07c40PkQjz0iWkZuTQIhALM8qtSUPJuhTNkfS2NJfyjDMSP1zM0jsHQQr4aCrCbkKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq0%2BjGdLYekSkAWaYq3AP6P%2B9mVBGq%2BKHZY0t4FBw40YCh%2BQN9F7sm08HuKXhXvkkn9gMMLIPQCxGEKQeUivm3YM8ZTq%2Bnx0MxRqqbTOboaZce909WlXJQxTfhXVWh2he%2BUtMsspoAvu%2BjeAK5kCqErx0Kd6jimwsZhPzjkHPVUXyn0PlZAdzdv2F1XAaOFq7RiBAUxpfRNvzvdXrxkNmuItNtKlT0ms1b8n7SvO%2BL%2BLPsKDX5xmjzVF%2F2Pp0qPRWKM1w0wWSff0FrqVSNv2oaFVG5bOPgh1iwehddaPR%2FKKVsIzdhtP8ZwGYYZvD3srDzXL4TurppwcscWOkdPiKP95eiIwFfkeFyfKye0a4PTr22L%2F7Pqp9tCSuX%2FEda4jU9C%2BrTUhMXSO6Iox%2BWzpqy%2F9mfuz3D%2FfSS%2BAdCYxnBdvmKIHo31en3KrJmOW5Ha6jq9XCeF%2BVDsweylFKGJzEJWt8WLxsgyPkha4cWQ%2FARUhzgLpIiH7vcIYukrgdQWUVY9SeaIal%2FcfFzvb%2BYmmthoHeHXWccSgaCSxVZyxyJSoBiT6jTWPxKKljyu922RWHHb9zRZGYfHT7B3YKGj6jI%2FgiyopNEn%2BJ5J0qbecoqiInBx2jwSd0HRuemSAsbhpOF6PjGBOpueCXkCzCz5L%2FTBjqkAQnGusnnO26gQYissFINli2L1PykVtHIndgHf0ZZJ6rQ5XQXcW8ei7bM4YW1WpYTV5lUL%2FRXbSGxU3sVUFkg0QZtUtVSL9U974g%2FZXHD290FSXVF12bC1aRJMPQzdl7evsaS%2BV1jtqWk7UhEkwZIwPrhgukfw%2Bdqzsz9PneKLA53j0%2FTH48SLz%2FUGp9b3GHW%2FBypbDaGrjU572jXAUkhOTd5G2KJ&X-Amz-Signature=0be2b14e0d21131984b885b65ac5b7c192e5acc67e3bb6e58ad06ad9c13b4973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIQ55KAX%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDGpbE9t5c4K3yqXpveAM8Bj%2BXF07c40PkQjz0iWkZuTQIhALM8qtSUPJuhTNkfS2NJfyjDMSP1zM0jsHQQr4aCrCbkKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq0%2BjGdLYekSkAWaYq3AP6P%2B9mVBGq%2BKHZY0t4FBw40YCh%2BQN9F7sm08HuKXhXvkkn9gMMLIPQCxGEKQeUivm3YM8ZTq%2Bnx0MxRqqbTOboaZce909WlXJQxTfhXVWh2he%2BUtMsspoAvu%2BjeAK5kCqErx0Kd6jimwsZhPzjkHPVUXyn0PlZAdzdv2F1XAaOFq7RiBAUxpfRNvzvdXrxkNmuItNtKlT0ms1b8n7SvO%2BL%2BLPsKDX5xmjzVF%2F2Pp0qPRWKM1w0wWSff0FrqVSNv2oaFVG5bOPgh1iwehddaPR%2FKKVsIzdhtP8ZwGYYZvD3srDzXL4TurppwcscWOkdPiKP95eiIwFfkeFyfKye0a4PTr22L%2F7Pqp9tCSuX%2FEda4jU9C%2BrTUhMXSO6Iox%2BWzpqy%2F9mfuz3D%2FfSS%2BAdCYxnBdvmKIHo31en3KrJmOW5Ha6jq9XCeF%2BVDsweylFKGJzEJWt8WLxsgyPkha4cWQ%2FARUhzgLpIiH7vcIYukrgdQWUVY9SeaIal%2FcfFzvb%2BYmmthoHeHXWccSgaCSxVZyxyJSoBiT6jTWPxKKljyu922RWHHb9zRZGYfHT7B3YKGj6jI%2FgiyopNEn%2BJ5J0qbecoqiInBx2jwSd0HRuemSAsbhpOF6PjGBOpueCXkCzCz5L%2FTBjqkAQnGusnnO26gQYissFINli2L1PykVtHIndgHf0ZZJ6rQ5XQXcW8ei7bM4YW1WpYTV5lUL%2FRXbSGxU3sVUFkg0QZtUtVSL9U974g%2FZXHD290FSXVF12bC1aRJMPQzdl7evsaS%2BV1jtqWk7UhEkwZIwPrhgukfw%2Bdqzsz9PneKLA53j0%2FTH48SLz%2FUGp9b3GHW%2FBypbDaGrjU572jXAUkhOTd5G2KJ&X-Amz-Signature=8c83d933d05b8ecb4ed8c02d861de20a17343e554f305cbc0f6b2e205adf7304&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LG4KPOE%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCfmEYit84gwPFCuyCGR37oN5cMLN8y9gVkxZKjNUDuNQIhAI%2FByG4Xl33nc6pi6Iis0%2FL8CXedpfnF6w5ThQyOSxzFKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDo2Y1WjK%2F6PEojBYq3ANIAMtAytnnMfglwkfpTq%2FeUWIZBaMX2lTriFAg0wBD0fmsy3KlmORy3KEOc4qm6R4Zdz7otiBg0YwGqqjE55uKfFTkT%2BvIloZq6BvQPbrJ5%2Fk16G0N0KRiiiG02envNnylKLovyM0q81Cu1yBJoAF3QuwHYzQBY3y7bjnCwBD%2Bj1lBgpoeFmXiqKmyJKucqTKcS7UrkcoD0p%2B0%2FeltFILwEkHl5Bh0QJSBYQdH61hSyVS0jzM3PpQLatCDEyiKbgOINrSZRDIVQD1OY15DIdeBBM7hDlrnH5NQ8r301RYGIpAgapDD%2BwmOMwvNiEStHyY5oiiJZtwOEQrTEHzz%2BJUmVDgAqBcLgK4odN4xCdIc7vIABsnk1Jvizqp9gNfYy1T%2BHpmFu11L2EeYHFHRR1gBx8EuPtB72UhqUmM3QpYmU5izLVftzyc1TMY5ECLGSs7bxu0keJRbw7MrAjN67bKi6pIYWoIcSQPpZwuWqAgt%2FXBFW%2Fk%2BQFETgWr4Tc7gv%2BTi8U%2BAjFRQEYGV3zvKMRgdgMgxfqK%2FNSOtYzCVfILpZpNERFAX3Z4XK8n5nW382k7fCCSe8%2FOzEcyCCiDDrOrkmY7h1Jjwvu8szOTaxnqoJbLA3NeV7FYpI9ueUzCc5L%2FTBjqkAf5j1H96PK8me%2BSYWX1O5NAXlJg1qKyGcnDhYHrrT8N8vUAvNRVepGhU5V3FbEev7Q2QAZxl6HxijTCM%2BI4yaZf9Zcs67B4qA8Q8CgvYTGZKgL75G6OfUUqRCVIM3sQfGokf%2Feye5WBHkf0s%2BvmdTQBw5HdAUZ4v73npZmGHcu%2BQb2rAEFcRIu6PaQ%2F2JunjLqOJJmh5aBEtOLKPqyYm46mjooK3&X-Amz-Signature=4a66ba0a673691c04b78a5eb78ecc055e83bbe47e179109b11c99cda0d2c0664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z72GR2EK%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCID3xJGqY3cW8LrCqC9bs2Qu5VnUJ28lkJgx4NPYjh3T6AiEA0S84mzMOfuQOFr9DTNQWo9C3JH1ed2qmiZ21mK9y9OkqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHFVwnlW5xciDklZyrcA9pA7IvbobtvHsp2SVzhQMSB0UfzlfHrTVFvh%2FkrMYYPk8tCjfnA4Ycg47I4IiQD1heUPTcvPduwRrwwRPilDV72knEU4dD%2Bm7YYc5HRKnx%2B0%2BIQtbczVKxrEIkHiP69VErhj6wc0UDoehIvyY4NQDBTcOljQWc%2BHB1fBAjcgi0XMXU8lTa7ityaNIF1ETXbcYyCmfW1fU%2FbzPO1bA5ov3dZSUTYoCgWQZIV4%2BzoRS0OdZPA%2BRZVsjae4M%2BNgCZxK5FfdugKi3krXeP0UB%2FwfmMtiW9Dect%2BLb9w4kHKhGX0Q0fd7Hy0ACAGBhru5ZoGx8OgOdr0CZ1LrCNhQaL4CKuSMCNn1OElcfcRXd1R70cakGfKf%2B2WTDVjR4Q6DNKi6NXISdtMMOg7TpI4GGuF0OghSUCBqqlVBN8btdRXWLyCRsIyjZT%2FwZ8uMHEHCLODmsuv%2B6SmT0CF%2BWIhV375nQZ%2FU%2F9%2BQRrVqfg%2FMF2JupiIT%2Buhzw4Ij2VWO16NpemnUlV8i0GBek7EJ7ZEA%2FLdFiLRNRAQi7wlYilgEYcdve%2BXwV3Si%2BqBPB4PTKx4y6U%2FoA%2F2cgnGc79CrKjttr0otzePbopEo8EVwKmVRpygkrRZPU7ZZofFPaE9VbU4MIjkv9MGOqUBVAIujMpMK0qFgFnxUdokHimEcQQoQGAzeawCub8xRGyUV6kUj7MJMtFN3U02nT4%2B7RMED4b54y6W2dwxP8tVV9VxoaDPPJAOk3o%2FJXsFGJ4tWjWfnwCDoc7IJEvWWdxIvpuJrUGlThFR5BfW6gAvV9d%2FqtbrYToaeWCtqnzpDqKQpIwkiPwrfz%2FUAgvVxoKAkTsfEckje7oqdWD14PhNNTI2Ohtj&X-Amz-Signature=fd267dcfd66a6145157759b16243bf55cf17b8d6b451a78d4180a5d5a771e7cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIQ55KAX%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDGpbE9t5c4K3yqXpveAM8Bj%2BXF07c40PkQjz0iWkZuTQIhALM8qtSUPJuhTNkfS2NJfyjDMSP1zM0jsHQQr4aCrCbkKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq0%2BjGdLYekSkAWaYq3AP6P%2B9mVBGq%2BKHZY0t4FBw40YCh%2BQN9F7sm08HuKXhXvkkn9gMMLIPQCxGEKQeUivm3YM8ZTq%2Bnx0MxRqqbTOboaZce909WlXJQxTfhXVWh2he%2BUtMsspoAvu%2BjeAK5kCqErx0Kd6jimwsZhPzjkHPVUXyn0PlZAdzdv2F1XAaOFq7RiBAUxpfRNvzvdXrxkNmuItNtKlT0ms1b8n7SvO%2BL%2BLPsKDX5xmjzVF%2F2Pp0qPRWKM1w0wWSff0FrqVSNv2oaFVG5bOPgh1iwehddaPR%2FKKVsIzdhtP8ZwGYYZvD3srDzXL4TurppwcscWOkdPiKP95eiIwFfkeFyfKye0a4PTr22L%2F7Pqp9tCSuX%2FEda4jU9C%2BrTUhMXSO6Iox%2BWzpqy%2F9mfuz3D%2FfSS%2BAdCYxnBdvmKIHo31en3KrJmOW5Ha6jq9XCeF%2BVDsweylFKGJzEJWt8WLxsgyPkha4cWQ%2FARUhzgLpIiH7vcIYukrgdQWUVY9SeaIal%2FcfFzvb%2BYmmthoHeHXWccSgaCSxVZyxyJSoBiT6jTWPxKKljyu922RWHHb9zRZGYfHT7B3YKGj6jI%2FgiyopNEn%2BJ5J0qbecoqiInBx2jwSd0HRuemSAsbhpOF6PjGBOpueCXkCzCz5L%2FTBjqkAQnGusnnO26gQYissFINli2L1PykVtHIndgHf0ZZJ6rQ5XQXcW8ei7bM4YW1WpYTV5lUL%2FRXbSGxU3sVUFkg0QZtUtVSL9U974g%2FZXHD290FSXVF12bC1aRJMPQzdl7evsaS%2BV1jtqWk7UhEkwZIwPrhgukfw%2Bdqzsz9PneKLA53j0%2FTH48SLz%2FUGp9b3GHW%2FBypbDaGrjU572jXAUkhOTd5G2KJ&X-Amz-Signature=cd9f1c5f8a411f49ef63c10864df23352037751ee784a8682020bf5b8f7587dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
