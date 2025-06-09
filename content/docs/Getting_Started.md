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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662737ZPRC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGJahzhVAi3drPRRP7LW0U5m58ilMuzXjzxcq6stv7xAiAuk2%2BbHEHOJzAPFE%2FJlz70FKFepbVMxqRxrxXi8TGX2SqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF%2B2h%2BxOLLXY5jGS6KtwDpANorTc7KgKNUDUCzkAbDkxAiQLQA3g5aG5NUYi7QjB%2B4ZdUu2y0KdODAblwXE30z5uvPvWE1QwR%2F%2FDCYf6lmP8J%2B7nVPOZj07VujAKPSGOTNg2yiiFJRQMo3SsN7ZW4tAkYv3tiHp3eyGQhqdBw1ouVDsSk27bNw9t%2BqWxtUecosEtaFJ1Tni%2BsuHE8uMywlkpwqtsFkIEGm5QOfjFAxT6BkL7bSP8aGyW%2Bqmx86zg9eTvT%2FzLzJqTm6OjpN5ZcZvQm9Xbqr6uOmLDN%2BkPDBAH%2FPEnrYu14tp3aJF%2Fmwm9mTF5om30z8%2FrxtfRzLFqcO%2F1Rk0fdxVYrzNSdQYEdDG8h%2BKCT1N3FDiE3HyRf%2BR8yOZ7f6%2FgLLnKhBTWEicxtmK%2B0lAaofEUYdTPnc3ggK2owNw%2B1DylYyBfFMRQYbiVE9K5%2B%2BoOXzk%2FdGWxYzKXAXH6LT719%2BB%2FtUuzy5vQENXASO81qZnhPc%2BYYcL%2BoS%2BVCzpPqV47wQPBImtwN2JFoqQyH%2FgffJhvmrP%2Fa1hMbsq%2FVhVpoMP%2Fj81pfWrdfw%2BRAl2ZsOo%2FWWO3qyH1TKC5LxUUv0HPkYLIVSkmX26ExdpeXhLXsdluw2F4HuZziYkuisFgdVdE0BYWYdVIwmN6awgY6pgGqbgSbVHBNxt8W5eCFOOO8nrPeYuxmSn2wnII6LRJ2hIOm%2Fz75X1p6qB2%2BRLqdzg9XJCDbhHjpLpmQLYtzomWCZhYlDUBq5Yvpe5MCNH2WZtJACwkxxo8n5pYS0IWXimojIgMkspkPpDhk6vuZLabEG%2BmSepk1bcbccXEwO4qeZlqTX2tu4ck1JI2gCk%2Fn7YI1POU5rs%2FMIp5wGc0xhRGvHe55djpq&X-Amz-Signature=3ff9e4a5f89b0033058a5c2c35e5d7ff0be3d042f201fe1f6d2244fb4184ebd6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662737ZPRC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGJahzhVAi3drPRRP7LW0U5m58ilMuzXjzxcq6stv7xAiAuk2%2BbHEHOJzAPFE%2FJlz70FKFepbVMxqRxrxXi8TGX2SqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF%2B2h%2BxOLLXY5jGS6KtwDpANorTc7KgKNUDUCzkAbDkxAiQLQA3g5aG5NUYi7QjB%2B4ZdUu2y0KdODAblwXE30z5uvPvWE1QwR%2F%2FDCYf6lmP8J%2B7nVPOZj07VujAKPSGOTNg2yiiFJRQMo3SsN7ZW4tAkYv3tiHp3eyGQhqdBw1ouVDsSk27bNw9t%2BqWxtUecosEtaFJ1Tni%2BsuHE8uMywlkpwqtsFkIEGm5QOfjFAxT6BkL7bSP8aGyW%2Bqmx86zg9eTvT%2FzLzJqTm6OjpN5ZcZvQm9Xbqr6uOmLDN%2BkPDBAH%2FPEnrYu14tp3aJF%2Fmwm9mTF5om30z8%2FrxtfRzLFqcO%2F1Rk0fdxVYrzNSdQYEdDG8h%2BKCT1N3FDiE3HyRf%2BR8yOZ7f6%2FgLLnKhBTWEicxtmK%2B0lAaofEUYdTPnc3ggK2owNw%2B1DylYyBfFMRQYbiVE9K5%2B%2BoOXzk%2FdGWxYzKXAXH6LT719%2BB%2FtUuzy5vQENXASO81qZnhPc%2BYYcL%2BoS%2BVCzpPqV47wQPBImtwN2JFoqQyH%2FgffJhvmrP%2Fa1hMbsq%2FVhVpoMP%2Fj81pfWrdfw%2BRAl2ZsOo%2FWWO3qyH1TKC5LxUUv0HPkYLIVSkmX26ExdpeXhLXsdluw2F4HuZziYkuisFgdVdE0BYWYdVIwmN6awgY6pgGqbgSbVHBNxt8W5eCFOOO8nrPeYuxmSn2wnII6LRJ2hIOm%2Fz75X1p6qB2%2BRLqdzg9XJCDbhHjpLpmQLYtzomWCZhYlDUBq5Yvpe5MCNH2WZtJACwkxxo8n5pYS0IWXimojIgMkspkPpDhk6vuZLabEG%2BmSepk1bcbccXEwO4qeZlqTX2tu4ck1JI2gCk%2Fn7YI1POU5rs%2FMIp5wGc0xhRGvHe55djpq&X-Amz-Signature=6f4273ff7a0a8b39a78058fdbd869d69257be4888b4da8d27a639fe9e73eb78b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662737ZPRC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGJahzhVAi3drPRRP7LW0U5m58ilMuzXjzxcq6stv7xAiAuk2%2BbHEHOJzAPFE%2FJlz70FKFepbVMxqRxrxXi8TGX2SqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF%2B2h%2BxOLLXY5jGS6KtwDpANorTc7KgKNUDUCzkAbDkxAiQLQA3g5aG5NUYi7QjB%2B4ZdUu2y0KdODAblwXE30z5uvPvWE1QwR%2F%2FDCYf6lmP8J%2B7nVPOZj07VujAKPSGOTNg2yiiFJRQMo3SsN7ZW4tAkYv3tiHp3eyGQhqdBw1ouVDsSk27bNw9t%2BqWxtUecosEtaFJ1Tni%2BsuHE8uMywlkpwqtsFkIEGm5QOfjFAxT6BkL7bSP8aGyW%2Bqmx86zg9eTvT%2FzLzJqTm6OjpN5ZcZvQm9Xbqr6uOmLDN%2BkPDBAH%2FPEnrYu14tp3aJF%2Fmwm9mTF5om30z8%2FrxtfRzLFqcO%2F1Rk0fdxVYrzNSdQYEdDG8h%2BKCT1N3FDiE3HyRf%2BR8yOZ7f6%2FgLLnKhBTWEicxtmK%2B0lAaofEUYdTPnc3ggK2owNw%2B1DylYyBfFMRQYbiVE9K5%2B%2BoOXzk%2FdGWxYzKXAXH6LT719%2BB%2FtUuzy5vQENXASO81qZnhPc%2BYYcL%2BoS%2BVCzpPqV47wQPBImtwN2JFoqQyH%2FgffJhvmrP%2Fa1hMbsq%2FVhVpoMP%2Fj81pfWrdfw%2BRAl2ZsOo%2FWWO3qyH1TKC5LxUUv0HPkYLIVSkmX26ExdpeXhLXsdluw2F4HuZziYkuisFgdVdE0BYWYdVIwmN6awgY6pgGqbgSbVHBNxt8W5eCFOOO8nrPeYuxmSn2wnII6LRJ2hIOm%2Fz75X1p6qB2%2BRLqdzg9XJCDbhHjpLpmQLYtzomWCZhYlDUBq5Yvpe5MCNH2WZtJACwkxxo8n5pYS0IWXimojIgMkspkPpDhk6vuZLabEG%2BmSepk1bcbccXEwO4qeZlqTX2tu4ck1JI2gCk%2Fn7YI1POU5rs%2FMIp5wGc0xhRGvHe55djpq&X-Amz-Signature=13b28568b6f2ef6bef237cbc7d3f1e97de68ea68ee800423d83d3fecbc7a1ea0&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OYTO5PU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDX%2F%2B1CDWmjunYrIrAdkfoaNi%2BfEii4Wva6E3DnXoMS6AiAa57FrqmAVxEXc18U4irnF3GaWqrToiu4d8uFoSDh36SqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHR2sahBZLnek9NMFKtwDj%2BY9bT9MoYo0qZMQ4HThKqnNfsQqhyWRd3q9%2BIatkvpDHuhRKBuXFhD1i7eC%2BZCPQlkBqvZ4WFCjKRtvNKnGG0YUhZU33dj0GaxfjucUfOVlqCxszMVE0u3NEtOkSmX%2BSRenGcxRY6WyaTLT7P7rJEj2lr%2FKq0JdhfJhf7KtxWZHYs8%2FTqoj53rPZ0uh0FIJvOqYWgcgronZ27rCTQNXW2kMFva5FxdfalKz5Q94RygGZE1haE1wiUFdLNyH2Bl1WKHotPjExKRw%2BqvQGGHLUbWcGPwBLQXQRSFisgQgFr5upUyXilTkmzFTfaK2ey2X6XY40f7C2dwAXub8oq7IYhtXcICBhkzwUAzMj84MpoBtOurU2ulcaMcWNgUD53wYpVyYJk5b1RNqOX3z9P9nHvZJ%2BBirGMRT5BwMUwZSXOHX8rZbdc6G%2FIjMV6aekIamDeigUukqDmqv2PB5NMWorhhWQv%2BiyNfhpgwfAT%2FQl%2BNXgJ3%2Fcto5J9O%2BeXoSv%2F6vHYY5cbDYzuL9I0LfSiOARE0JwJWTEyq5eGPu4CSqRhDkE1JazjV5LFkosY%2FsAMzrx0yUYP7EVQHkZVR7BD%2BpZWo1V6L629CxNmso7K3DcCHT9Vayga%2F3%2Br3wQ68wlN6awgY6pgF%2Fd5RXOhJKn4Iu1vEDdaflhtDGtXlKxIfriA8p694xiQ1KyZfxWhVZubtF8ee%2BXxal36sZ0AXBNUDxwTRowa6Qi4LI84B1xoLCJ3WZnv5E4v2FYd0Ez5T55%2BKP6Jg2Hs0pCcbgzSUHdnnD96OkX880lNCCjhYeQoqkFScfCQ2rLXS5Awvif0VSuzjRaX22gPeRogv7EDlyuhlv6EZi6aujRbDezmiu&X-Amz-Signature=6c77486351c4c1364f10cf7421275c86bcc78883ff9dec31480fcc332be65bbe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EKDDY3J%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJJr0Pk9dEAvhiJbCtzDmVNa%2FBgxeC16JCPSK4i%2BgEqgIhAOKV0lzq0NKRjMtZpfjspDFyIr3ItkI%2Fl80710fO%2Fyr%2BKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgU%2B6c0n04khlJoFIq3AON0S%2F11Xto3fPGGJvG4x%2FXCIQHWpjHxrKwfwnTytkYmLunO%2BxX78%2F7IiJDqlxHabuR4b21OsXkx2nMIZHYIkTdY17mUOudK8LgANzAqzkhQgtlA1HbJ9NDZivzNnHlXksx0eM7ivWY0l3FmE%2BiCDJ40d%2FcYXzkcYHtTxJ%2FTErdp2sy8AVcAvnbr2oUm0G8N669Ey%2BAFzvphexk24DDbte0ZdR0Gj9mI%2BpQzkaL3LMt2FyCGyG6GiqpMacbD1omAWuGWswhFY27L%2FHWJBbwZ7589Zb4PGupjbfPNiSdTGjbzQrRVq4TjIZEJuW%2FkE0KXVjtq6UZRPsivtrWvL7%2BDX9A1pq9hlWEsYm1YvKxx%2F2pIxbci%2Bk%2FWMsziCfBAYW0VvsSTCvjThlO%2BAX561mfoz%2FE6ThScof%2F%2BGkEmyfVzVaoA45MfyR93kD%2F7cedCbffCk8LsyIYdtRY55lab3MqLRxavoTWSa%2B0ElDJVwCcYloqGdfvXaV%2BOZuifGZXhiyAhpb2zZmB0YkE9AYoLDCS%2FK4fzG7GThT6D8qkmm1wUNp6uQptsIXK5eaZAztTs2BQip5LQmdclLEtQvC3J2Y05UKMJK02Iu66%2Fr3FWlsI55UFImkipz0zUxMI4St7LjCr3prCBjqkAX5OT6pfoMXcBVJYabooGCjB8GOdcnkw2zW3FhldwQxRGOu4KElZtHuNFOZyiE0O5At%2Fi6SEM%2FHbQ4WVGEowXC0ptQYgwj9m8ZMZ%2BxzQr3QPMkqUgTJsSg7Fre1nM%2FvzrQglZPPpIvr3UebG4wRSD1pXr07dpCavow36x29btaKCGZuqV2ABomVe%2BfE%2F8uitahLB8LlTvLEbHYvWjnAX4yNpCyOm&X-Amz-Signature=efd6b477b3b835507cd4c9bf5d81cec83717b2d51565a092fb13a0c682026231&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662737ZPRC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGJahzhVAi3drPRRP7LW0U5m58ilMuzXjzxcq6stv7xAiAuk2%2BbHEHOJzAPFE%2FJlz70FKFepbVMxqRxrxXi8TGX2SqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF%2B2h%2BxOLLXY5jGS6KtwDpANorTc7KgKNUDUCzkAbDkxAiQLQA3g5aG5NUYi7QjB%2B4ZdUu2y0KdODAblwXE30z5uvPvWE1QwR%2F%2FDCYf6lmP8J%2B7nVPOZj07VujAKPSGOTNg2yiiFJRQMo3SsN7ZW4tAkYv3tiHp3eyGQhqdBw1ouVDsSk27bNw9t%2BqWxtUecosEtaFJ1Tni%2BsuHE8uMywlkpwqtsFkIEGm5QOfjFAxT6BkL7bSP8aGyW%2Bqmx86zg9eTvT%2FzLzJqTm6OjpN5ZcZvQm9Xbqr6uOmLDN%2BkPDBAH%2FPEnrYu14tp3aJF%2Fmwm9mTF5om30z8%2FrxtfRzLFqcO%2F1Rk0fdxVYrzNSdQYEdDG8h%2BKCT1N3FDiE3HyRf%2BR8yOZ7f6%2FgLLnKhBTWEicxtmK%2B0lAaofEUYdTPnc3ggK2owNw%2B1DylYyBfFMRQYbiVE9K5%2B%2BoOXzk%2FdGWxYzKXAXH6LT719%2BB%2FtUuzy5vQENXASO81qZnhPc%2BYYcL%2BoS%2BVCzpPqV47wQPBImtwN2JFoqQyH%2FgffJhvmrP%2Fa1hMbsq%2FVhVpoMP%2Fj81pfWrdfw%2BRAl2ZsOo%2FWWO3qyH1TKC5LxUUv0HPkYLIVSkmX26ExdpeXhLXsdluw2F4HuZziYkuisFgdVdE0BYWYdVIwmN6awgY6pgGqbgSbVHBNxt8W5eCFOOO8nrPeYuxmSn2wnII6LRJ2hIOm%2Fz75X1p6qB2%2BRLqdzg9XJCDbhHjpLpmQLYtzomWCZhYlDUBq5Yvpe5MCNH2WZtJACwkxxo8n5pYS0IWXimojIgMkspkPpDhk6vuZLabEG%2BmSepk1bcbccXEwO4qeZlqTX2tu4ck1JI2gCk%2Fn7YI1POU5rs%2FMIp5wGc0xhRGvHe55djpq&X-Amz-Signature=98d13ac5f02f5815b339dfafccf5149b8d3c4f83ecd2e523330b6905ab34f8f0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
