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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7V5FJR4%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwUlSqTkeMU3pVoeyFN2mbDFKOvbUB0gaQkCQtAt9J%2FAiEAtG27dakwNNKPH25l4D%2Fc4bM9EPGanYGOglEFRgqp6msqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhw3mQgkKVpJJtrFSrcA3qsWzMh8Mh0kMUtnWqwD0QM23TtsZT%2Bx8zzOw%2F0%2BMdlZFovWgsj2pzmdoCGLesafiGQX5RAkM%2B9BNKpesY%2FY4zdVG2Pc4l2cIwoQiZ4M9FXrsb9UZ4%2FuLNGlPmUu6v5W6U66SlpXxKRu7WwXZ50cDyIzOeQWRB7cUtezHz2bbDnHNdrFMYhXk8kIR50AsbY9O0FWGwd6wpfOptV6ogco4Koktj7IqYWfiW1ObyQsz9iKCQMWB5dbWPQr51CKyLRVAd4oWQlNXy5NKRjpvyUIpKo65ZzPQCIO9SYNyWB4M2%2FCMNVdKCJIWJZi502c02F%2BpT0FSBmxGzhev%2BI7PZbWz4QK2Gl1OrDgjgVtsElxcBu1d60uLZ3V7t9%2F2uTqImfuyyh4NxuR526tf5hq6imjHlrH27dhEX2HsaqYwTDTwI8JAg8Ns67EvCqQOoBbD7wDDAnDdZ1u5unpQi1QXsHUX5rnWRy6WFIsOti2H9n6BuuLZQ10JS3OAIcs89XHb91u3MITYQWbrUrNrdJes7YuRA4HbtCAiqYXcmSnrKOEsvQ1N6QXgHDo8XuuM72tCH7vm%2F6KakvG0%2BJM4NUDAl7PERq4xUykgboFVJdNXwFV%2BYhNwZy1LBzgk3JUxoHMIzZiMMGOqUB9nRQNzVfWN0U7H%2Fnbwb7i%2BWKWqK1Woq6BfGnG%2BcV%2F2a8%2F%2Fw46Ln1J1TWOC4kwt3dFcyu9ppnPJgdMX0YPVs5TJikimHLJDyqnbuNZjb4g0bu6%2ByM3F9HRxEEGYyTmOl%2BlVUdkz%2BY84Jib88uwr8QzcRqxB3j645bhIyoD0um7VIJL%2Bg0s1x5HN2gS%2BEThjZQpfCpkrYAK8%2F0Kl3HJg48le9qTQKS&X-Amz-Signature=46bddabcd0501ae7216e1ec3e38f2421e711bdaad0e80018ff63324ea983c37f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7V5FJR4%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwUlSqTkeMU3pVoeyFN2mbDFKOvbUB0gaQkCQtAt9J%2FAiEAtG27dakwNNKPH25l4D%2Fc4bM9EPGanYGOglEFRgqp6msqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhw3mQgkKVpJJtrFSrcA3qsWzMh8Mh0kMUtnWqwD0QM23TtsZT%2Bx8zzOw%2F0%2BMdlZFovWgsj2pzmdoCGLesafiGQX5RAkM%2B9BNKpesY%2FY4zdVG2Pc4l2cIwoQiZ4M9FXrsb9UZ4%2FuLNGlPmUu6v5W6U66SlpXxKRu7WwXZ50cDyIzOeQWRB7cUtezHz2bbDnHNdrFMYhXk8kIR50AsbY9O0FWGwd6wpfOptV6ogco4Koktj7IqYWfiW1ObyQsz9iKCQMWB5dbWPQr51CKyLRVAd4oWQlNXy5NKRjpvyUIpKo65ZzPQCIO9SYNyWB4M2%2FCMNVdKCJIWJZi502c02F%2BpT0FSBmxGzhev%2BI7PZbWz4QK2Gl1OrDgjgVtsElxcBu1d60uLZ3V7t9%2F2uTqImfuyyh4NxuR526tf5hq6imjHlrH27dhEX2HsaqYwTDTwI8JAg8Ns67EvCqQOoBbD7wDDAnDdZ1u5unpQi1QXsHUX5rnWRy6WFIsOti2H9n6BuuLZQ10JS3OAIcs89XHb91u3MITYQWbrUrNrdJes7YuRA4HbtCAiqYXcmSnrKOEsvQ1N6QXgHDo8XuuM72tCH7vm%2F6KakvG0%2BJM4NUDAl7PERq4xUykgboFVJdNXwFV%2BYhNwZy1LBzgk3JUxoHMIzZiMMGOqUB9nRQNzVfWN0U7H%2Fnbwb7i%2BWKWqK1Woq6BfGnG%2BcV%2F2a8%2F%2Fw46Ln1J1TWOC4kwt3dFcyu9ppnPJgdMX0YPVs5TJikimHLJDyqnbuNZjb4g0bu6%2ByM3F9HRxEEGYyTmOl%2BlVUdkz%2BY84Jib88uwr8QzcRqxB3j645bhIyoD0um7VIJL%2Bg0s1x5HN2gS%2BEThjZQpfCpkrYAK8%2F0Kl3HJg48le9qTQKS&X-Amz-Signature=da48e184094c24c5442820dedea4a28a2912a563fe0ec6bacc5aac21e71a50ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7V5FJR4%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwUlSqTkeMU3pVoeyFN2mbDFKOvbUB0gaQkCQtAt9J%2FAiEAtG27dakwNNKPH25l4D%2Fc4bM9EPGanYGOglEFRgqp6msqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhw3mQgkKVpJJtrFSrcA3qsWzMh8Mh0kMUtnWqwD0QM23TtsZT%2Bx8zzOw%2F0%2BMdlZFovWgsj2pzmdoCGLesafiGQX5RAkM%2B9BNKpesY%2FY4zdVG2Pc4l2cIwoQiZ4M9FXrsb9UZ4%2FuLNGlPmUu6v5W6U66SlpXxKRu7WwXZ50cDyIzOeQWRB7cUtezHz2bbDnHNdrFMYhXk8kIR50AsbY9O0FWGwd6wpfOptV6ogco4Koktj7IqYWfiW1ObyQsz9iKCQMWB5dbWPQr51CKyLRVAd4oWQlNXy5NKRjpvyUIpKo65ZzPQCIO9SYNyWB4M2%2FCMNVdKCJIWJZi502c02F%2BpT0FSBmxGzhev%2BI7PZbWz4QK2Gl1OrDgjgVtsElxcBu1d60uLZ3V7t9%2F2uTqImfuyyh4NxuR526tf5hq6imjHlrH27dhEX2HsaqYwTDTwI8JAg8Ns67EvCqQOoBbD7wDDAnDdZ1u5unpQi1QXsHUX5rnWRy6WFIsOti2H9n6BuuLZQ10JS3OAIcs89XHb91u3MITYQWbrUrNrdJes7YuRA4HbtCAiqYXcmSnrKOEsvQ1N6QXgHDo8XuuM72tCH7vm%2F6KakvG0%2BJM4NUDAl7PERq4xUykgboFVJdNXwFV%2BYhNwZy1LBzgk3JUxoHMIzZiMMGOqUB9nRQNzVfWN0U7H%2Fnbwb7i%2BWKWqK1Woq6BfGnG%2BcV%2F2a8%2F%2Fw46Ln1J1TWOC4kwt3dFcyu9ppnPJgdMX0YPVs5TJikimHLJDyqnbuNZjb4g0bu6%2ByM3F9HRxEEGYyTmOl%2BlVUdkz%2BY84Jib88uwr8QzcRqxB3j645bhIyoD0um7VIJL%2Bg0s1x5HN2gS%2BEThjZQpfCpkrYAK8%2F0Kl3HJg48le9qTQKS&X-Amz-Signature=de95f5343379cc979a8c82d48e803bc8b26ab37ee1f37e06d7476eee8312eece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ24UFFP%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8rmkxfA%2BG8ejmOpbXIUOWpZRyAhEF1%2B1NP8qrAYWElAiEAxX8Mfz2gBFoopyzi84bSXhG1GuSYO6f%2BnYM%2FIaJiOi8qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvf2or6vFZxmteCgyrcAyR%2FKWt9bsJfv1ilOvBG6rO%2F4MbGHYQSvgo0Ox0I0Auv8ikC2VDWyfpmWmHbFCIf05bGnAxUiEc52%2F30MBoEEMwS58zPFOzMknhPquIT%2BTd4J1pLeVyRJycnbS6eUmxVQyj1bf3tcfwV5rxsFBfu2%2BVvnT%2BQ4iSYhdS6RRd2IF%2BWVe%2B7kv%2BnIxQ8itHa%2Bh2CRHQCnv6VGJQd5d40lOrgi5G0Ln4g2UxLWZ0zg7URIMeK2tOLWCY8FKLeISTuLiwPE0gEehq1bAdwPJ1cMBNTSFhkUT8%2BIDvVu4OW6aBiXnHw%2FoD%2BER6d7YsTPB3iaC480KCfp89FagdvinzNCNeaOFlxSWvdP6ISTNpxt34riuxcySxZKl5HG1sTqrLKYF1n4gAOK%2B0Erif0OMdNrGxrscQcZfEJSB8C%2Fp1YNztn%2F0uMk431hxz3op9Qa3q1dJc3lHQ%2BGoxf9Xx8saZb6jVOz4rRPOEzingjVVsPKPM4hyTR1AoqMQW%2FEstcX7E6pZqf4lRc24Fv5rqdzux0O511SYPHgIKB4wNssoN%2BXjDhfwI9S1yl5qTUGqpVJyMxEWAdNlLk6gwX24a1hPV1o%2BJp6CmCfTsWFh2kvKIkF6c4OXkYvDnbDcQuJ8mKRMMnMMrqiMMGOqUBODPCZtF%2FrZkGpOD47gv1enOZlLCYlkMyGZCPw296irixyiPEXeM6I0otHQLjmEeN1Ux1plU5q5VhrSKaQ87eWpDBL17sTadx7FV8LZd6n0m1oppFSYzSsrEk8rR%2B6f2T0kOYwxoSCGzUr%2BNfOiVxJ9hnitwN0FtAfEM7KgrUgegFOgjWLmARESj8n90npNHNLZbNPTuUKDt5ECqYVV%2B7YXPQR6yA&X-Amz-Signature=ff84755f3b68d05d2685f5510fec1535489954b834e27a6c58a5cb70cd064853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P6RMIMZ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDChkthFAJQL9VzaYo0aIOH9bWdXO7IrSbBlzrcLq6sqAIgHG1FytRSR9deZfxkUhGUMPI0sj36njnnfFJ0wKMRb4IqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlKZZSIS8m52n33UyrcA2%2Bu84Ovbqs%2BYtxfVCwCQGO23cUKXPtzuBCXVE0aS0Edk%2Bzo53tJuMv38mvlnD0a3el1LzRHmM4aLH2MBIf3ucXra%2F81mpEb16dT3zUYZBI6RqnyhpaQ9sZCtQ%2FUUe5H0eATHL9GmG8pf24StztS7iwJbPPd6EOmf65Vx53I5TZw7iCC1pAdbkHHWZZuroz1sNQHeAhikD7RfLIuYRbjOWfoyJ%2Bn5AnZvXxZSr9to8H%2FLVhm7r5uUVk8CpHQo8gJKTWDe%2B7O6lNAAAJTE6pwcfDBJvn3BN%2FEQQPW%2Bl6sZxhJlBylheRaTvxtL0JawJDxggbDr7BTpyjXQJa3UiGb0NssHEszI9sZJyGsuWa02k8Blcs%2FYLI9m1KUVWQnrCPlGm7XvNk8aPHmqIoi3ei6DY4S7Q3IOZKI7CfKWAUIN5cxuqHL45tI5tvuU%2BH9lhhsCm3wUnuofob2k7o3YNB8swxo%2BKuCcoIChN3QLIapueQAz%2BKXFbhhzSABV%2FQ01CCxLnzK9aFGMzFr7yP3YNY57wYzMOigMWxVNE8rCXlYnyr8hP7Hc1STw3%2FxwfGEU%2BVQ6SSCs%2Be3bgDJdOcYBk7b8hZHDFs3NNEtkdcGES%2BLiWsQriK1CjQ%2Fs2zhrKqqMObYiMMGOqUBcEz10N9hkC3mFnXEI0h4A9YKD4YHR8wCxYleQVtmBzmImtb0xhWSLeZhHY5%2FRNAKfSUORcd3kgfVExzJ0y8%2BnKDCs7XQyoTdcoIjzg1plWZi1cLaNqTQOQ8PZnwIiw1LvaaA9FFHSIdQc%2ByRfIFcnE3Mj9yc71lj2CD4JFKkJQgLOAZLT%2FIbwG5tJ1k2vrGgD9tR2%2Bipb8w822zbYDUctFOfOkPA&X-Amz-Signature=31b610f46eac54341dcf9634ee9e15599378b1a0cfdd139f0dab98afacdd6fa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7V5FJR4%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwUlSqTkeMU3pVoeyFN2mbDFKOvbUB0gaQkCQtAt9J%2FAiEAtG27dakwNNKPH25l4D%2Fc4bM9EPGanYGOglEFRgqp6msqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhw3mQgkKVpJJtrFSrcA3qsWzMh8Mh0kMUtnWqwD0QM23TtsZT%2Bx8zzOw%2F0%2BMdlZFovWgsj2pzmdoCGLesafiGQX5RAkM%2B9BNKpesY%2FY4zdVG2Pc4l2cIwoQiZ4M9FXrsb9UZ4%2FuLNGlPmUu6v5W6U66SlpXxKRu7WwXZ50cDyIzOeQWRB7cUtezHz2bbDnHNdrFMYhXk8kIR50AsbY9O0FWGwd6wpfOptV6ogco4Koktj7IqYWfiW1ObyQsz9iKCQMWB5dbWPQr51CKyLRVAd4oWQlNXy5NKRjpvyUIpKo65ZzPQCIO9SYNyWB4M2%2FCMNVdKCJIWJZi502c02F%2BpT0FSBmxGzhev%2BI7PZbWz4QK2Gl1OrDgjgVtsElxcBu1d60uLZ3V7t9%2F2uTqImfuyyh4NxuR526tf5hq6imjHlrH27dhEX2HsaqYwTDTwI8JAg8Ns67EvCqQOoBbD7wDDAnDdZ1u5unpQi1QXsHUX5rnWRy6WFIsOti2H9n6BuuLZQ10JS3OAIcs89XHb91u3MITYQWbrUrNrdJes7YuRA4HbtCAiqYXcmSnrKOEsvQ1N6QXgHDo8XuuM72tCH7vm%2F6KakvG0%2BJM4NUDAl7PERq4xUykgboFVJdNXwFV%2BYhNwZy1LBzgk3JUxoHMIzZiMMGOqUB9nRQNzVfWN0U7H%2Fnbwb7i%2BWKWqK1Woq6BfGnG%2BcV%2F2a8%2F%2Fw46Ln1J1TWOC4kwt3dFcyu9ppnPJgdMX0YPVs5TJikimHLJDyqnbuNZjb4g0bu6%2ByM3F9HRxEEGYyTmOl%2BlVUdkz%2BY84Jib88uwr8QzcRqxB3j645bhIyoD0um7VIJL%2Bg0s1x5HN2gS%2BEThjZQpfCpkrYAK8%2F0Kl3HJg48le9qTQKS&X-Amz-Signature=bf3cee9b397966851f9e0afa478a36f632c205b73331e908ee587eaea113b9ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
