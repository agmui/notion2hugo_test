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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRFB3CPU%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDkCAuLmR4OpFI%2B13nnxN1RmnOdwf99TLvYkY0Q1KpKlAIhAIuoUnuRMeVhjjXjhtB3xUVev13uJLnkUohfw8DMFyq6Kv8DCFgQABoMNjM3NDIzMTgzODA1Igxt23E1teln2paNi0cq3ANiS5FpaxR%2BNnw89DcjG9ns6bbGVeUi%2BEpyw1ngHovNrimXn211Zt4P1Cq8oIAzC5APJpLvvvrUmxlK4QjnkArAX%2Bz1M0kqi6FmuvOsQaFDlyT%2BibDPQvV1QLEHbK9skow3hZwElJJzHZvSBHoyWkEG38IdIC%2FjjP6GEm4xHZqCtQlkNDP6TywmDNk7ZRL1q5QJNzs4qOq%2FkCMRcGOXz7Be7SAfuOqzwyhQayVpxnUA1aTO2unitpEHuxU61jQUUR90fbmX8yRyZ%2FV6xuvB%2FXYnDcdQiAxjpAVq%2F3GrzFRFpqoLPftbE8DnBBtH8fglDxtsy86chKTimNVv3yndqI8nard0XDmq2C65Co0GtP8jJ%2FdpO50qvW7SppeAW5PvLEQHNrkn6EOpJPqxYcAE7CC2eRgH6F2AOG8SG5NFfIEj%2BywgMUJmQX4sJf1lAv%2F7p4u411aZ2uwH07UTHMZJUNfdDXQzJ5QsvgFSlWrMbNr7zKNJMJ%2Bisih7%2BI3tXmd3ME9o4OiH8Y3OddnD3Z7qPpCB6Yjk1EHvKYnGMdCKWwSGPVo3OnZOaassnRW7dJl6Y0EWJNs4FBQAi2czftOju4c3JKXlxS%2BdHLuPLhzc4k3LRgzPo9FlqPFQe3WokzCl4K%2B%2BBjqkAX5%2Fyf%2F%2FC0VB5k9B9ecTEWmufhMJZ47TUZ%2BwujPvqwKN%2Fznz1EAqY58j9TAvvaoZwvuyons6tfcjkLzFTRU5B%2FMsg0c1BRFmGnFvQ4NppUX6zVRAzlcUIJIIe6LaIlVxzBYDFeT9kZABFUgkhnb7I6%2BlTyj3ZwUZfpIhLsP5twrBZmMoBj7WSSKlLac54yj6i%2B%2BOS3dJGd%2BnzI5BPj7Hg2NQrK7%2B&X-Amz-Signature=ebea5dcbc10f912d2b13c0518b7fa62e1f73148e4847fbd8fda7e762f0bfac20&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRFB3CPU%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDkCAuLmR4OpFI%2B13nnxN1RmnOdwf99TLvYkY0Q1KpKlAIhAIuoUnuRMeVhjjXjhtB3xUVev13uJLnkUohfw8DMFyq6Kv8DCFgQABoMNjM3NDIzMTgzODA1Igxt23E1teln2paNi0cq3ANiS5FpaxR%2BNnw89DcjG9ns6bbGVeUi%2BEpyw1ngHovNrimXn211Zt4P1Cq8oIAzC5APJpLvvvrUmxlK4QjnkArAX%2Bz1M0kqi6FmuvOsQaFDlyT%2BibDPQvV1QLEHbK9skow3hZwElJJzHZvSBHoyWkEG38IdIC%2FjjP6GEm4xHZqCtQlkNDP6TywmDNk7ZRL1q5QJNzs4qOq%2FkCMRcGOXz7Be7SAfuOqzwyhQayVpxnUA1aTO2unitpEHuxU61jQUUR90fbmX8yRyZ%2FV6xuvB%2FXYnDcdQiAxjpAVq%2F3GrzFRFpqoLPftbE8DnBBtH8fglDxtsy86chKTimNVv3yndqI8nard0XDmq2C65Co0GtP8jJ%2FdpO50qvW7SppeAW5PvLEQHNrkn6EOpJPqxYcAE7CC2eRgH6F2AOG8SG5NFfIEj%2BywgMUJmQX4sJf1lAv%2F7p4u411aZ2uwH07UTHMZJUNfdDXQzJ5QsvgFSlWrMbNr7zKNJMJ%2Bisih7%2BI3tXmd3ME9o4OiH8Y3OddnD3Z7qPpCB6Yjk1EHvKYnGMdCKWwSGPVo3OnZOaassnRW7dJl6Y0EWJNs4FBQAi2czftOju4c3JKXlxS%2BdHLuPLhzc4k3LRgzPo9FlqPFQe3WokzCl4K%2B%2BBjqkAX5%2Fyf%2F%2FC0VB5k9B9ecTEWmufhMJZ47TUZ%2BwujPvqwKN%2Fznz1EAqY58j9TAvvaoZwvuyons6tfcjkLzFTRU5B%2FMsg0c1BRFmGnFvQ4NppUX6zVRAzlcUIJIIe6LaIlVxzBYDFeT9kZABFUgkhnb7I6%2BlTyj3ZwUZfpIhLsP5twrBZmMoBj7WSSKlLac54yj6i%2B%2BOS3dJGd%2BnzI5BPj7Hg2NQrK7%2B&X-Amz-Signature=11f81230f99a4623d783c4d45fe6df47d085cc07c92455fb518b39db0a1f4126&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W75LNE3W%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIHUa4tSvZFOXiUo2Uly%2FRrH8Pn2OLEp1nr0tLdrXm9eKAiB%2BrxuWCuNYoHf7M3zKa5ffJEOmLnWtqOWbbMrVVglw3Sr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMdytjvCNUC1m5WicqKtwDFkaM5BQLuKzI8alHCqpx%2BvhhJVFV3%2F92VfyVMYOHeVmzjxFBYkP1HIAZJvYOCj7Qe0gOYlI%2FapY4KtX1TKxQ%2Flq9ux8P70ftSr0UG9sm4C%2BPe4BMMU7zxhQBZ2FtJK9wFyioANXPYJ7U8ow79U4415z52AoXCvYp8secIequOchQEu%2FMPdy05a%2FaM14aO%2FXz%2BaZkgNubxOVGeCvLJBlMxwm6tYRZMt5Y1%2FPu4qctVTqN6HOXw4Rv3ee4iUuNqJZlWVblYmL5F%2BxjVKhi3Ij14OTYUjdj5%2B5GSdl14JTYuROAjfkAdW%2FijgtG1Hr9LQ1ZVPs%2FkM9N%2FjhezZYrh7PcZAPm%2FBYWlftWNTAzW4kyFuaL45p6d0akJ8SVoKtCVKo2atfHHy5U9Fwq1f8BYl3PdbtuYWvf1KRIC9z%2FFfVo5lf3Q0QxVcS9qZETXK8KKceEFO6J9XNYBfcqNDI32kbnyyqdZbtUnUa5kMHb%2BSuq8uAlKrUDJ7kd7GClq4c7CEt3N%2FXylnDN%2BZQwlwP8P9h7TI60nt%2BaGz8Pru6QFxN4PSKA2eRgybF96f4UPgoq4yZxK7mUCqbwVzwJk%2BbzbkH3o8fzjsPexaC4d3jQsIRMB7KNaWsvh9W86oSA69Awio6wvgY6pgEYZ8HYb5IlqU62MI5MiGI7wjvjXPHXSI51%2F7ui%2B2JIBda6Tf0GxXo1sDLs4X1f6TI8OYdpqVp6N8LFLkd6r5ULvMJpgVNiAUlWOtwp6p8aSwxpdIhyYIw8j19YMyjcCSEMUnYYjPPnNrEqv8BTT%2FkGe4hMMTHN5iFx3PF%2F3BqFyikb5B6rF%2FXIPIGUcATyhNJBUCyosT1gw9yAEkTqeMaly6jqn1cv&X-Amz-Signature=efd8128d3a45b498f5c5232ef57622989ad738083dd74030b4441e61c5ea8a16&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BGD5WM5%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCNC9gK9KFrHzYBkrq4lmpaYyYkh5FGb6%2B8ALe%2FaBVAMwIhAKit4aHKiamaaYVLLZR7Oa0im2eHEC7nEP5n08AGc8D3Kv8DCFgQABoMNjM3NDIzMTgzODA1Igy%2Bzuqo6lNuaBGJdVsq3AM3gCiPr5QmwD%2BL%2FyKbdGEcwiBh9Bg0LD1v2FXPdNS29Mtz640wt2BMWuMpI6shHva%2Bk%2B6Qbin0vFFnYfNS6sXJsE%2FVsqc0bxVK92BUMVyb40jfbDIK50%2Fl0vNYKF6QH8geBYcyAwLkKIen0c24nNDYjC6B7O8F54o48ng0ziHqj9lc390RhD0KgtlkeRAEu%2F%2FY3m3L4HT%2FEIlRaSUKEQaoRK7TLvXb5Ip%2FuM4I%2FH%2F%2BY3QUBW3zMVYOgRgHVZ3zDP%2B7054jSGzqzwEQSvwiNVa63zAYehIiD2aT9lQsTK9zZzQQGhxaGAyqg5E9EcKsGMp3qli9LA8KlxoY8hRniwagupBRRu4AgRRnz5atHJ95XR0Ca0eU%2B%2BeWcnbeLyA7M9nJyhvXzNPytmyymoR3RENhj50UY3NEF4BhOO6KZggE8LGUnqerqUJXKBxA9LojtpjRDl8uegzDkTTTWmOfFW1YTinGFTtRX6F7n4WJc2BWfYesm1FjO1EGwfBT5uNJK9PueHWsQCZYWJj8gx%2Bt6bwLP7ZUQ%2BmaHZjfpx5bf8U%2B3MIsc6wIZ5zoPwAJyHqXk7ECAovtz66PPSm3uAosbEu4J6Jfw3N1OnFsifUJzJntGxQNphFDnUcwnN8fkTDg4K%2B%2BBjqkAca7iTXdVfCIQKSzrKvrKFbS7XXH3nfBCKynBxVJtXgk0Own%2FcS0uDRQH588FWIABPSYSX%2BDgIpn82Ss%2FJ%2FxP8q2SWe09IT8zoHtvifOhW5INNzJ1nl9VyPzRijfzZOx1iXT0xXehxdbCDR1xLAlUyVTM52Blc5w9OMWuFC9zgnllF6iqtPgZSWkDBmNsfUWL18soqA60ugl2VhQ9FXRZBucmJbZ&X-Amz-Signature=915f47aead2d7a59b8257accf4d159e6c681e60199fea0910a0171df15fd7aa5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRFB3CPU%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDkCAuLmR4OpFI%2B13nnxN1RmnOdwf99TLvYkY0Q1KpKlAIhAIuoUnuRMeVhjjXjhtB3xUVev13uJLnkUohfw8DMFyq6Kv8DCFgQABoMNjM3NDIzMTgzODA1Igxt23E1teln2paNi0cq3ANiS5FpaxR%2BNnw89DcjG9ns6bbGVeUi%2BEpyw1ngHovNrimXn211Zt4P1Cq8oIAzC5APJpLvvvrUmxlK4QjnkArAX%2Bz1M0kqi6FmuvOsQaFDlyT%2BibDPQvV1QLEHbK9skow3hZwElJJzHZvSBHoyWkEG38IdIC%2FjjP6GEm4xHZqCtQlkNDP6TywmDNk7ZRL1q5QJNzs4qOq%2FkCMRcGOXz7Be7SAfuOqzwyhQayVpxnUA1aTO2unitpEHuxU61jQUUR90fbmX8yRyZ%2FV6xuvB%2FXYnDcdQiAxjpAVq%2F3GrzFRFpqoLPftbE8DnBBtH8fglDxtsy86chKTimNVv3yndqI8nard0XDmq2C65Co0GtP8jJ%2FdpO50qvW7SppeAW5PvLEQHNrkn6EOpJPqxYcAE7CC2eRgH6F2AOG8SG5NFfIEj%2BywgMUJmQX4sJf1lAv%2F7p4u411aZ2uwH07UTHMZJUNfdDXQzJ5QsvgFSlWrMbNr7zKNJMJ%2Bisih7%2BI3tXmd3ME9o4OiH8Y3OddnD3Z7qPpCB6Yjk1EHvKYnGMdCKWwSGPVo3OnZOaassnRW7dJl6Y0EWJNs4FBQAi2czftOju4c3JKXlxS%2BdHLuPLhzc4k3LRgzPo9FlqPFQe3WokzCl4K%2B%2BBjqkAX5%2Fyf%2F%2FC0VB5k9B9ecTEWmufhMJZ47TUZ%2BwujPvqwKN%2Fznz1EAqY58j9TAvvaoZwvuyons6tfcjkLzFTRU5B%2FMsg0c1BRFmGnFvQ4NppUX6zVRAzlcUIJIIe6LaIlVxzBYDFeT9kZABFUgkhnb7I6%2BlTyj3ZwUZfpIhLsP5twrBZmMoBj7WSSKlLac54yj6i%2B%2BOS3dJGd%2BnzI5BPj7Hg2NQrK7%2B&X-Amz-Signature=8a46c327928402176736b179e26a6bdef7b9a6ac9e8fee8e1fdbb751f3d615fc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
