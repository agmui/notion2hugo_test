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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT2KZDMH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPHN36UgTHoTrG8MREhW88o4SRASJO0GvqJR94%2BSxQdwIhAKOv63D%2FDhMyXR7P46sfK9MO2YozlGUzGVxU6xowTKJ3Kv8DCHEQABoMNjM3NDIzMTgzODA1IgzkCkku1RPdvK1YOrsq3AMRNNWAyziuccqmlWhbsX1rAbmGnAs6qrCJVVEoZbU8W6c0mpVX8v2BL24q00d88jnRtsbpS7Q04RArqWYDNNPdr%2F6h%2Fkl00AXfM3EE88gUqug%2BUj3uTNM4Mcoh04dumal5Y267o8wqvqAsOpfEv13s956BjHvTyVgx5pThbrOae%2BXd4KDtLfhSQi0ubcrfvNljjAhX0qTAywknnq58OtbdicpgQmPXfViNKjKfkljronwoJNe%2BAnik56zlYiRVO%2FsRRh7KoGDIdUOnQQwNkf%2FqfDYncIaTVW4OYe270JzZ2j%2B8%2BfU%2Bb%2FwaR%2FvZzYUyjWKI8d69GGD09uYD9oZHWgqTqPC%2FqYX2mIodNFTvtchoLt1fX9%2F7SljIQ6j5NKDJliL1teHCJKW%2F8Cj%2FbRYW3HFKgknEL4wIg0%2FXtZRrlDDx7iz%2B6Li6%2FPFSSYqyIj78xyi6l6pgVyYiv2rocjhHzsqTDoabgkDzJH6wXwkGmTHG%2B0fPpJ94oZjSqa61swxcea8h4e4TyV99C38G6xQ3mxOX29hGNUbVZwzxxmUxqAe8FsN3zbCodU6VTbIQvsQxgj7bmogGYqc6bB3HI9586ZrMbBjPkL%2B2A0IJY8v%2F8V6Xz0TDCUOnQiHPDZlW9zDs9drBBjqkAZ6yJQEZSJ5rmpJHNTm8QTMvMaa%2F4Y8xX8eXkbSMU0wU0q1wgsHoJuUn5Y73EcqQJHluqVDgbZm%2BDNPG0nfGtmpVZqssnQrZV8UOPd7CFMv3C0izg5%2FHYzn4vjrGzU8NS1y%2FdBodegudnCDhLY8iTU3u6eFIj4A56RdpnrLVQ29gtU0AVVYA%2FQMeWcZyDr%2F3xmyf65H3XJndmGGrxNVr3bCa%2Fl8U&X-Amz-Signature=4e4f303cb2ae683c495b6f4adaf9ae1b54af4e64511a381b5d0491c8a530771b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT2KZDMH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPHN36UgTHoTrG8MREhW88o4SRASJO0GvqJR94%2BSxQdwIhAKOv63D%2FDhMyXR7P46sfK9MO2YozlGUzGVxU6xowTKJ3Kv8DCHEQABoMNjM3NDIzMTgzODA1IgzkCkku1RPdvK1YOrsq3AMRNNWAyziuccqmlWhbsX1rAbmGnAs6qrCJVVEoZbU8W6c0mpVX8v2BL24q00d88jnRtsbpS7Q04RArqWYDNNPdr%2F6h%2Fkl00AXfM3EE88gUqug%2BUj3uTNM4Mcoh04dumal5Y267o8wqvqAsOpfEv13s956BjHvTyVgx5pThbrOae%2BXd4KDtLfhSQi0ubcrfvNljjAhX0qTAywknnq58OtbdicpgQmPXfViNKjKfkljronwoJNe%2BAnik56zlYiRVO%2FsRRh7KoGDIdUOnQQwNkf%2FqfDYncIaTVW4OYe270JzZ2j%2B8%2BfU%2Bb%2FwaR%2FvZzYUyjWKI8d69GGD09uYD9oZHWgqTqPC%2FqYX2mIodNFTvtchoLt1fX9%2F7SljIQ6j5NKDJliL1teHCJKW%2F8Cj%2FbRYW3HFKgknEL4wIg0%2FXtZRrlDDx7iz%2B6Li6%2FPFSSYqyIj78xyi6l6pgVyYiv2rocjhHzsqTDoabgkDzJH6wXwkGmTHG%2B0fPpJ94oZjSqa61swxcea8h4e4TyV99C38G6xQ3mxOX29hGNUbVZwzxxmUxqAe8FsN3zbCodU6VTbIQvsQxgj7bmogGYqc6bB3HI9586ZrMbBjPkL%2B2A0IJY8v%2F8V6Xz0TDCUOnQiHPDZlW9zDs9drBBjqkAZ6yJQEZSJ5rmpJHNTm8QTMvMaa%2F4Y8xX8eXkbSMU0wU0q1wgsHoJuUn5Y73EcqQJHluqVDgbZm%2BDNPG0nfGtmpVZqssnQrZV8UOPd7CFMv3C0izg5%2FHYzn4vjrGzU8NS1y%2FdBodegudnCDhLY8iTU3u6eFIj4A56RdpnrLVQ29gtU0AVVYA%2FQMeWcZyDr%2F3xmyf65H3XJndmGGrxNVr3bCa%2Fl8U&X-Amz-Signature=d0baed687a69285e026b4eba6ece1311184e0245ab8d42e268b58780230ee5e2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT2KZDMH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPHN36UgTHoTrG8MREhW88o4SRASJO0GvqJR94%2BSxQdwIhAKOv63D%2FDhMyXR7P46sfK9MO2YozlGUzGVxU6xowTKJ3Kv8DCHEQABoMNjM3NDIzMTgzODA1IgzkCkku1RPdvK1YOrsq3AMRNNWAyziuccqmlWhbsX1rAbmGnAs6qrCJVVEoZbU8W6c0mpVX8v2BL24q00d88jnRtsbpS7Q04RArqWYDNNPdr%2F6h%2Fkl00AXfM3EE88gUqug%2BUj3uTNM4Mcoh04dumal5Y267o8wqvqAsOpfEv13s956BjHvTyVgx5pThbrOae%2BXd4KDtLfhSQi0ubcrfvNljjAhX0qTAywknnq58OtbdicpgQmPXfViNKjKfkljronwoJNe%2BAnik56zlYiRVO%2FsRRh7KoGDIdUOnQQwNkf%2FqfDYncIaTVW4OYe270JzZ2j%2B8%2BfU%2Bb%2FwaR%2FvZzYUyjWKI8d69GGD09uYD9oZHWgqTqPC%2FqYX2mIodNFTvtchoLt1fX9%2F7SljIQ6j5NKDJliL1teHCJKW%2F8Cj%2FbRYW3HFKgknEL4wIg0%2FXtZRrlDDx7iz%2B6Li6%2FPFSSYqyIj78xyi6l6pgVyYiv2rocjhHzsqTDoabgkDzJH6wXwkGmTHG%2B0fPpJ94oZjSqa61swxcea8h4e4TyV99C38G6xQ3mxOX29hGNUbVZwzxxmUxqAe8FsN3zbCodU6VTbIQvsQxgj7bmogGYqc6bB3HI9586ZrMbBjPkL%2B2A0IJY8v%2F8V6Xz0TDCUOnQiHPDZlW9zDs9drBBjqkAZ6yJQEZSJ5rmpJHNTm8QTMvMaa%2F4Y8xX8eXkbSMU0wU0q1wgsHoJuUn5Y73EcqQJHluqVDgbZm%2BDNPG0nfGtmpVZqssnQrZV8UOPd7CFMv3C0izg5%2FHYzn4vjrGzU8NS1y%2FdBodegudnCDhLY8iTU3u6eFIj4A56RdpnrLVQ29gtU0AVVYA%2FQMeWcZyDr%2F3xmyf65H3XJndmGGrxNVr3bCa%2Fl8U&X-Amz-Signature=52034711612419233a4176b3fb2fa8b94798da903de4f74c4fdc684604374324&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JKKMCSX%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBr7fOs25n2dWILAdZe7EzkFhIn5rZ%2BkQbc7TSz520IxAiAOY9fq8qPKXKFx1ZkQ3Hw%2BE5w7bxA08vDpb8nmscFn3ir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMcOJIf1m01ijYhKiTKtwDOH9w9hcc2%2B2NcBU%2BN4shzMCbDzS8ypVfNXIzNnMvtfDevAQiCtZd4RdK2H5ODa1hH5Sr0m%2FKf9H5%2B7MWHpYFHWQTYgo%2BjHPSEYoCkmqzA%2B2OJiiqUo8RhOe1i1cUjHD4hXvFU2X8qJAwaZsCNE3hljBGSpFF5x8VlxO16uWr3LhhFGRgWNIcQ5tLTBuho1SVwo9aVoVu0eny8olMWb4ygYfx2tg5ja00s2LM0SfjVOim5YfCR9fcfyYFUopYmOZI3TYghguwpqFCV8yYDa8NUGJE%2BF%2BXFCYAQs5Y%2BfcpT4B%2BUd9R6Z8DEAANBa86WCX7wkfabauecvcsA5iimfdDYfLu4eaEN3YZ%2B%2FKTlbiKQeESUWJO9%2BQbz61Y6%2BsPRHBxlH7h7QGRDujrssZfxBNjdC2n%2Bxxaw%2BQWR0yskka9N5Hra2iSaSpjnObXkIojqOILXhJyWe6ZbIN3%2BSAllD8zr7QVqO2KyAKz%2FwfiNTlNHU%2BXArb2P37nEE66jT9KzlCgghdvV%2F%2BLgelgoposEDDaXKVC21jE1Z8f58vYV11Eyj7k9RxRnaYB7M70ZJtiyMvsNmKKJfXpLJ8oSCzCG2fArY%2F2gFsEHpfevvWGyquXqRYxjm3PEOS6NS%2B8q%2FUwovbawQY6pgEpbf141XlZmCcE41M4KkRa94sJnoZWmEb6kKTBECmNabczmwG21nyBTl%2FJkUQTjZQyaOyb7mCkr0JSvPkv2VjdoTQLETRA9CXQcf7b2cwtY24YKNLn8bxu7%2Bp3t56YmO4K55hZpvx7cQtAFFrBYQ7kiawcLwcawDd%2BfOcYAb2aCbbybzAjIg%2FT43IFJzw6lOTg89GljjwggWVlzWPOuHZlbZW0635n&X-Amz-Signature=1b6c8a08c9195de132cb8423d145f91cc38c771eb707df00dfe1d5e192675243&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5N3E7DY%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeEPZd%2BMW495ZUfk%2FgyR%2BjF2sUgVMyi9OzzXFGLztDJAiEAz9j2rQ4m84whJEy98iSO9VE4SeRrsfX5eOiQnvvG2ZEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDK42ftFx5zpNQYs6OyrcA5lFe2UVXMbjjvpkaTF5%2Bky1ngQCnhQAfhLYYHFxqLLHlQ5aUM%2FT3mz19WDGzCMgOxxfQm4NU2f4Dczt1YgxJfEnXsgJIU1AAMXHWEI5IivdNjF9K7FB87X09TrrhlbRD9CVo46%2FTxC6B1x5LpfOaZWxx8ewo6ISraQW8yTjbKb0Ztg%2BDpcEmD5TXOEtoJKO8ZcldcKUDY4uyZkrHIdGrADme%2BM7Jjyxkso%2F5c6%2FFKW6DwoYbp11LpAHHLwenaCy7chZEZpyIAugHUtrmWb5ZVPTESFYSadFWA96lI17xoTdopaPioO62BpV9IcUnmZvaQoTTR%2BdkGIKNqiNFr2J%2FVPzXJSihbWXb6fTS6a%2Fmdkuzh5jm2a7Ry8%2FCD1o6IjGS%2BmwdqWZpbvW7aev3IzU1KixwqanyHBDIZS1X6OE6cUpObUTg%2BKA%2B1S42uZlr%2BbeNkxAqvvg8lUIrSYtPQyVf9Ycvngh%2B8aDj8TRh6qUiSV8CEIe%2F8fRII7nQcuKV0FuOtrC9Pj1qiWB7pNHovLsaKOqitDqt6a5zKe50qWf4pcofr2Venozehlq%2BrdLguvjAXJUNQW6MFI5fzB1g9LlKbT6kPc%2B3R4U2zqZd6k%2F6KxWEEnGWE%2Fhjw7cfz7tMPr12sEGOqUBA8uDJ3UZEIT6CbTKwW45oTtwP3Iy1nIvq29nlDqR0vAeSySO5xUMrAJjqsu7oNrRyi0eM9Yvh%2BrTJu4AbMT1CyzcJALOiiXSCPw5Otw6lpVkWCkuCKrZN%2Fz3xzBfuO96QwDzyCqBP3hA%2BaLqh85gjqDIcDIhYSp0FbYlJe02rW%2BLNifq6iIgYLPgAiaEjzDffAl5YXMr70bMRoh23g7jZ%2FZ3t3wu&X-Amz-Signature=72abcb2dfccaafefec99b026f89388c5e1e341f2aefc5de8af626cf6e327a29d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT2KZDMH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPHN36UgTHoTrG8MREhW88o4SRASJO0GvqJR94%2BSxQdwIhAKOv63D%2FDhMyXR7P46sfK9MO2YozlGUzGVxU6xowTKJ3Kv8DCHEQABoMNjM3NDIzMTgzODA1IgzkCkku1RPdvK1YOrsq3AMRNNWAyziuccqmlWhbsX1rAbmGnAs6qrCJVVEoZbU8W6c0mpVX8v2BL24q00d88jnRtsbpS7Q04RArqWYDNNPdr%2F6h%2Fkl00AXfM3EE88gUqug%2BUj3uTNM4Mcoh04dumal5Y267o8wqvqAsOpfEv13s956BjHvTyVgx5pThbrOae%2BXd4KDtLfhSQi0ubcrfvNljjAhX0qTAywknnq58OtbdicpgQmPXfViNKjKfkljronwoJNe%2BAnik56zlYiRVO%2FsRRh7KoGDIdUOnQQwNkf%2FqfDYncIaTVW4OYe270JzZ2j%2B8%2BfU%2Bb%2FwaR%2FvZzYUyjWKI8d69GGD09uYD9oZHWgqTqPC%2FqYX2mIodNFTvtchoLt1fX9%2F7SljIQ6j5NKDJliL1teHCJKW%2F8Cj%2FbRYW3HFKgknEL4wIg0%2FXtZRrlDDx7iz%2B6Li6%2FPFSSYqyIj78xyi6l6pgVyYiv2rocjhHzsqTDoabgkDzJH6wXwkGmTHG%2B0fPpJ94oZjSqa61swxcea8h4e4TyV99C38G6xQ3mxOX29hGNUbVZwzxxmUxqAe8FsN3zbCodU6VTbIQvsQxgj7bmogGYqc6bB3HI9586ZrMbBjPkL%2B2A0IJY8v%2F8V6Xz0TDCUOnQiHPDZlW9zDs9drBBjqkAZ6yJQEZSJ5rmpJHNTm8QTMvMaa%2F4Y8xX8eXkbSMU0wU0q1wgsHoJuUn5Y73EcqQJHluqVDgbZm%2BDNPG0nfGtmpVZqssnQrZV8UOPd7CFMv3C0izg5%2FHYzn4vjrGzU8NS1y%2FdBodegudnCDhLY8iTU3u6eFIj4A56RdpnrLVQ29gtU0AVVYA%2FQMeWcZyDr%2F3xmyf65H3XJndmGGrxNVr3bCa%2Fl8U&X-Amz-Signature=6c142dc6cead6015b2f5149f89a1fe27e0982054007587671a01f1d6961ec357&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
