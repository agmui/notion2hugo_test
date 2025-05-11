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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWYODFX7%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQD92isq68DpbdVnjPvtxIYu9st79PFv0Ka4ZkSQWB2UdwIgP6Hv2wnnzbKMqhXGcdhlPe1hqDUyHuDwHZdPggOAuSkqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1DeE3k%2BP2Ny8koeyrcAy7RL874%2BYqlt6g9pjzi4Rk7rDOkLQvnYs7XmoYV7T6DP9SkxOwXo3K7a3daJKBVnTaIJPgjlZptROPCPaXSbe0JtFWXC2YtTxi5fimLL1KMBjtquWNcLoK6nML27yjf8Mui2HU0lCnRNBsbPJ1svy6SZbufTaC8ibWarhZtUaC5hVkTVyT1mCofZYNK%2BBJc69O2BAQk5YeTFcxiSmKO72Hae3i9VhG7%2BBsRxx%2BKWnvxh%2FeW3JhNNlixqvaEo6XirBy2HbnW4WGxgOkPCKSiPd2kJmCUA1YPKVHvdBn%2F%2FZ20gpdAx94Fc%2FvokwH5aFGJ8DeJirLYjwF%2Beqho8UhuHUKr6f4BH3bA47b43jt%2Fds1g0IbmuDx9Mt8nukdgnuu%2BMd9a1JXvtz0XANElbdbFh1J5K7AIN8H9pNXyhwWnr2KRaZ2eNky5Xo2H%2FtNgjOJGQL%2FonmLMnBIv%2FZfGNAB5%2BW8J1nNpvZl71BaffJnfoOMhJC82CLVhVUnIhPBm4GAQtGl%2FFJ%2BoQMwqrlJBVJB5qAEuEjbFtfbiHjwT1FsWJSerwxBxYFKwspxsEQFT7my%2B9X4M3s8OUuvmekmWUs%2F0iDBXl6KUrDEYIrfgzaSIg1giCd%2FJCuCMNtv0cHufMN6hg8EGOqUBOYshqliapBQnyfWYNA7GoTXIPY1pkbjuiX1tykTz143nPIfR5lewt4I0pNpUMn5DTMQbn69ilVAAxY2HF4GIzfntcUNJpdlwWJeIzJGNFZ83hWIVAxXR9sX8jXdDHaEKC87%2BD%2FIfXAZhl9RrznqtSD9FU%2F5jKCzizHpR1VmQLzNvXsiksccMyu3rDL54OFDU3%2FRQCnC%2Fu6yjbGRdalyHCZnmbe%2FN&X-Amz-Signature=dded412cec290bd98f3b343d675d2b7dc4c1c6a0de96eec25218c68a850f84b9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWYODFX7%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQD92isq68DpbdVnjPvtxIYu9st79PFv0Ka4ZkSQWB2UdwIgP6Hv2wnnzbKMqhXGcdhlPe1hqDUyHuDwHZdPggOAuSkqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1DeE3k%2BP2Ny8koeyrcAy7RL874%2BYqlt6g9pjzi4Rk7rDOkLQvnYs7XmoYV7T6DP9SkxOwXo3K7a3daJKBVnTaIJPgjlZptROPCPaXSbe0JtFWXC2YtTxi5fimLL1KMBjtquWNcLoK6nML27yjf8Mui2HU0lCnRNBsbPJ1svy6SZbufTaC8ibWarhZtUaC5hVkTVyT1mCofZYNK%2BBJc69O2BAQk5YeTFcxiSmKO72Hae3i9VhG7%2BBsRxx%2BKWnvxh%2FeW3JhNNlixqvaEo6XirBy2HbnW4WGxgOkPCKSiPd2kJmCUA1YPKVHvdBn%2F%2FZ20gpdAx94Fc%2FvokwH5aFGJ8DeJirLYjwF%2Beqho8UhuHUKr6f4BH3bA47b43jt%2Fds1g0IbmuDx9Mt8nukdgnuu%2BMd9a1JXvtz0XANElbdbFh1J5K7AIN8H9pNXyhwWnr2KRaZ2eNky5Xo2H%2FtNgjOJGQL%2FonmLMnBIv%2FZfGNAB5%2BW8J1nNpvZl71BaffJnfoOMhJC82CLVhVUnIhPBm4GAQtGl%2FFJ%2BoQMwqrlJBVJB5qAEuEjbFtfbiHjwT1FsWJSerwxBxYFKwspxsEQFT7my%2B9X4M3s8OUuvmekmWUs%2F0iDBXl6KUrDEYIrfgzaSIg1giCd%2FJCuCMNtv0cHufMN6hg8EGOqUBOYshqliapBQnyfWYNA7GoTXIPY1pkbjuiX1tykTz143nPIfR5lewt4I0pNpUMn5DTMQbn69ilVAAxY2HF4GIzfntcUNJpdlwWJeIzJGNFZ83hWIVAxXR9sX8jXdDHaEKC87%2BD%2FIfXAZhl9RrznqtSD9FU%2F5jKCzizHpR1VmQLzNvXsiksccMyu3rDL54OFDU3%2FRQCnC%2Fu6yjbGRdalyHCZnmbe%2FN&X-Amz-Signature=1f960ad679c00fefdff7f1c7f99cf18baa3b0c3e103546a1c0e0d12908676ab6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWYODFX7%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQD92isq68DpbdVnjPvtxIYu9st79PFv0Ka4ZkSQWB2UdwIgP6Hv2wnnzbKMqhXGcdhlPe1hqDUyHuDwHZdPggOAuSkqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1DeE3k%2BP2Ny8koeyrcAy7RL874%2BYqlt6g9pjzi4Rk7rDOkLQvnYs7XmoYV7T6DP9SkxOwXo3K7a3daJKBVnTaIJPgjlZptROPCPaXSbe0JtFWXC2YtTxi5fimLL1KMBjtquWNcLoK6nML27yjf8Mui2HU0lCnRNBsbPJ1svy6SZbufTaC8ibWarhZtUaC5hVkTVyT1mCofZYNK%2BBJc69O2BAQk5YeTFcxiSmKO72Hae3i9VhG7%2BBsRxx%2BKWnvxh%2FeW3JhNNlixqvaEo6XirBy2HbnW4WGxgOkPCKSiPd2kJmCUA1YPKVHvdBn%2F%2FZ20gpdAx94Fc%2FvokwH5aFGJ8DeJirLYjwF%2Beqho8UhuHUKr6f4BH3bA47b43jt%2Fds1g0IbmuDx9Mt8nukdgnuu%2BMd9a1JXvtz0XANElbdbFh1J5K7AIN8H9pNXyhwWnr2KRaZ2eNky5Xo2H%2FtNgjOJGQL%2FonmLMnBIv%2FZfGNAB5%2BW8J1nNpvZl71BaffJnfoOMhJC82CLVhVUnIhPBm4GAQtGl%2FFJ%2BoQMwqrlJBVJB5qAEuEjbFtfbiHjwT1FsWJSerwxBxYFKwspxsEQFT7my%2B9X4M3s8OUuvmekmWUs%2F0iDBXl6KUrDEYIrfgzaSIg1giCd%2FJCuCMNtv0cHufMN6hg8EGOqUBOYshqliapBQnyfWYNA7GoTXIPY1pkbjuiX1tykTz143nPIfR5lewt4I0pNpUMn5DTMQbn69ilVAAxY2HF4GIzfntcUNJpdlwWJeIzJGNFZ83hWIVAxXR9sX8jXdDHaEKC87%2BD%2FIfXAZhl9RrznqtSD9FU%2F5jKCzizHpR1VmQLzNvXsiksccMyu3rDL54OFDU3%2FRQCnC%2Fu6yjbGRdalyHCZnmbe%2FN&X-Amz-Signature=e425193a062b7a52fbf610f3e17ac49ca72ce80dcbf106a1d2530b3b32971241&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNRHEXTN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIAZZ5fXaVcBoMTrG47xxA47QaSvmruOXo2z4tWFNA9xHAiEA13KRqR2zFP94BAbJvCRsBGjLwOYUp3dcACnjvycfxBEqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQAQhmrplfbh5MdtircA2bo3QGQ5AG4trApKZMGlWpH%2Be22UnEGnY9I1tQGh%2BOwWmzFGrhx4PJIixDLAUpgettssFeoCwcSdmDO5Ixn%2Be%2FxsGvKoB4aH9mapA2ToPANulCt1lLV9F6HgrQQMm18htfv7toQmCC0DHSsYnLRs3PlqFClnDUmWi9KMMg8O%2BSdgyRJlHFoPw7hhk5%2BLrwXqdJdx4UuOt8JlY%2BCZHmYQEcKc9DRj8qLevWhPtAil3mXSrwOqriXDc%2BTaGDTxnXTyO9b7UXIPJjJvi%2Fb3ozkIg405x7Y%2BuhGJP7Y%2F8g6YTJKHz%2BlswfPfmneq0mStHEo7yYu9BrkQonyFcQNqZA%2BVsR8LQ5gTSDxt%2FHE1Wvk1fBCOYkBgrwabSNrw3tJqjHmhyZwieq0Que3m6Ymi4rhxf8jKIlzStjtDG7GVcqHhCQ5%2BsKey0BIBVOYo2rhXIYAcrYmRHHFRtOFLmtRAwMr4EOY4r92kbvgmVA7C0jIF0uIvjj5DutUTYRgKtEaXA1A44hjTiv%2BzeWYSN%2FRXsPF0%2FJmYqs6%2BcnSK5%2BirDrfCRfpXx%2BYH3ek81MzI5fgqmBzbzPKlLzMq88EUnwiBISnrZiZPUYTKOUwpMaBX0fwJ2ldBLY3MjFjmcnOD6KjMPehg8EGOqUBVh1nn2Fp%2BqRIBbn%2BRabvyOHlfWQ%2FfLbiPM%2B4aW1PBWavlcGIc6co8Jj9V9mBGCUl%2B%2BZvUC0K0rI%2FYsSz0WIDFcJ5Ribtclo2tp8vkUbxhXeeawnaBSrP1AHRiic9EkodbmMKFuEFDQoib8AE9ZfsMX%2BptQOARYkKXJ2bKw2aky2VZsQQUZ96UyhY9wMuO9wdYGQDgDG8POZp2JXb1mA%2B2FnsWZZi&X-Amz-Signature=0ff5c84072d5fda54e2ad40bd2b73631882ff9c5399178fd6912bace9f7f7af2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG7GJO44%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD9pjJFVkUn4yvuxyz4KS0%2FnyKqUhDXvzqjdeXQ1W%2Fi4gIhAMb%2FVn1tPjDYZ9UuhNh6urgsVFD6LbTHmHUhffDa2gNPKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyafHq5YVEz14m%2F8mAq3AMOs5FHZlExktG3NoUisjVuaqebLDVwxbwLs7270sF9lsrT4VhB04MnX%2Fctc8BWnbUX5uAnLDgbgSxHmcAfFQ3ukH0FgSO1vOJyBFU9TMLUoNVaCvwO7pKj4qNoPwOAPBGk0iVhWz57DZbcz110YRu11FZ7Srs%2F7yFELRsHpE3F%2FbmnQ2p8jDOPKI3rOBKLtyT%2Br3xB9wiCKysd0h0Con3CJ%2F24XhE7exOI8K8x06PoK%2B74JF9V5w5Qqnq3lkSdxOa1sfJXrQ3v3VBre6MqvSrb7pSSQSdIRk5kXvPUtVMVWWiwRNAA87e3MsPOwqclArKrilcC1rH6moUbN6efuVqLKZ7WdDY%2F6jQYMv9rQoTOzRUKb0JBVnx6Ym9AwxaD2NU7nHMPZI1%2BMyYsZ8iQmtujz%2FSCcHNjhZB5VdWaTQI6S1j07gLwtVoDQWbDcJgfayerQJqAG6LdbN55%2Bo7o5b9w9%2FxkQrgqLQISmdmyqLhAbT7nUvXVeiUwRdtMJvFLW43AQIiISHLwYh0LVH5Wa93EU8sHvOHTAM%2BzYWBhI2Js24ZhfwOJLo3itc71T7ck9IdURyV0rlAWS7TJvVeoJbj9%2B31PQkmJ%2FByuVVVqfejtJM1zqa%2Fo5jPu28KedjDSooPBBjqkAaT8XAOH39gy0wvAI3Rj9kXQhKNJrOEfU747JZs%2BVqgUCetq9PhKuWA7S8dV5lwzgKP9TS9EzQ9k3jAQrNzIJJDA%2BzSRiCq7a59Vj4DQQIS5uEN1l%2BQabVtGfGyAeeF8CDjVBm4UWHDAAxMcoA5QHRRWinbJnnOu6YSD903LE3c1Y7b0GfK35N%2FjnMzNRW6VZ8jMb03Z%2Bfrh5U%2FdYp%2FpY3YOsX7I&X-Amz-Signature=4fa19b356538e139bb952fb765b9b30db398479a3564fa7d95d460ad4963f199&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWYODFX7%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQD92isq68DpbdVnjPvtxIYu9st79PFv0Ka4ZkSQWB2UdwIgP6Hv2wnnzbKMqhXGcdhlPe1hqDUyHuDwHZdPggOAuSkqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1DeE3k%2BP2Ny8koeyrcAy7RL874%2BYqlt6g9pjzi4Rk7rDOkLQvnYs7XmoYV7T6DP9SkxOwXo3K7a3daJKBVnTaIJPgjlZptROPCPaXSbe0JtFWXC2YtTxi5fimLL1KMBjtquWNcLoK6nML27yjf8Mui2HU0lCnRNBsbPJ1svy6SZbufTaC8ibWarhZtUaC5hVkTVyT1mCofZYNK%2BBJc69O2BAQk5YeTFcxiSmKO72Hae3i9VhG7%2BBsRxx%2BKWnvxh%2FeW3JhNNlixqvaEo6XirBy2HbnW4WGxgOkPCKSiPd2kJmCUA1YPKVHvdBn%2F%2FZ20gpdAx94Fc%2FvokwH5aFGJ8DeJirLYjwF%2Beqho8UhuHUKr6f4BH3bA47b43jt%2Fds1g0IbmuDx9Mt8nukdgnuu%2BMd9a1JXvtz0XANElbdbFh1J5K7AIN8H9pNXyhwWnr2KRaZ2eNky5Xo2H%2FtNgjOJGQL%2FonmLMnBIv%2FZfGNAB5%2BW8J1nNpvZl71BaffJnfoOMhJC82CLVhVUnIhPBm4GAQtGl%2FFJ%2BoQMwqrlJBVJB5qAEuEjbFtfbiHjwT1FsWJSerwxBxYFKwspxsEQFT7my%2B9X4M3s8OUuvmekmWUs%2F0iDBXl6KUrDEYIrfgzaSIg1giCd%2FJCuCMNtv0cHufMN6hg8EGOqUBOYshqliapBQnyfWYNA7GoTXIPY1pkbjuiX1tykTz143nPIfR5lewt4I0pNpUMn5DTMQbn69ilVAAxY2HF4GIzfntcUNJpdlwWJeIzJGNFZ83hWIVAxXR9sX8jXdDHaEKC87%2BD%2FIfXAZhl9RrznqtSD9FU%2F5jKCzizHpR1VmQLzNvXsiksccMyu3rDL54OFDU3%2FRQCnC%2Fu6yjbGRdalyHCZnmbe%2FN&X-Amz-Signature=726a5533b614f765f02f88b12be105be0f8042bfbc4f2d89c2c6ba6d02959540&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
