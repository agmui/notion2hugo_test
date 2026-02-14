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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D2XJCXM%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCD76Bb%2Fw6Yi5D2Nk4EQ5jDvZgsb9GqiM%2FymWUnqgUyXQIhAOdfqlB35ZRkAnYOYO5DXpx2zuXHj7RoSyTILG5in8eAKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPejSY6%2Bs0%2BwdKLWAq3AMUwjd%2BH4%2Fom5wJEJLfn%2FRFtyxXjLpkK4PwJGJ6avZwqtxmkh5HrCqbl92J1UN%2Bbt5PY8cYTcPKvSII5ZmuGAsZEYWVdCfxs%2BnNHkPlb1J0IR%2FBdjGOKrj8RF65JJaF0x3m0gPPYvA876FCPzsAUJJwZeez4sUDoAWLy2erV3N3qQJ%2BPpLMHXLD2vJvddd0HxalRBWURmBSqKhNM3nag38u5e1gWYQg%2Bnn0b%2Bv0Cz1UY0hdIJw66MIeMxbnSVji%2B43D1ODSxiwzAnHYrfQX1dh%2BDIlnS7hkghSscrA1aIGLqN4BUDcuYtNXnmRL5fKb%2BLQ9Sljosxtk387wl8Ok8BEKPCVRq3mXYB%2F6MOiEZdWEn%2B810fgHHEVSlkv4tqmdMK5Botw6mOfM9IyLIBDZrgx7Z51OKgDZpSUiVQGKnxWN9A6AApstoCotUXiD0FGFSCcGPonCKCqexvS%2BZxh0mgv9QN6eqJHO0WjbMHUFHGvmZ4kE8eVjbtZfpr7CXNNeds2E8%2BhZ06%2BPzOvDbQzYpAUQMpf1WLLSB1myW7TFcW4ppFRCwicYEvGXnbIzOdGxCGKytd6D3FhX5x6Rdnbjgi9N37tR0opklG92qIxf21%2FYdAak2x60R3z6%2B4%2FVXzCck7%2FMBjqkAWC9Rexd%2Fboaw9wHcENTJgE%2BX%2BNLjhhWXX4cLhDFk87egDbx0hiLL1ikhlXP6hllbP6mGNRLgJxowsZZ9D0w2Pl1zXyf0CgGde2FgPX%2BUoighWpWUQ0sZsW6p%2BuFT%2BeCD%2Bfv3Ly2EncMHrUehIeLzHMICeeQNSISfq6vLVXyAtmyt97mIhVOAnlb%2BP0Jv4sGTgKkXYHgyzxqB2C5IwXMZkIkDLBl&X-Amz-Signature=92bef0c6e9ed0d6ce974928cdd27aa342e673e4c0608275bf06c4af7342535e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D2XJCXM%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCD76Bb%2Fw6Yi5D2Nk4EQ5jDvZgsb9GqiM%2FymWUnqgUyXQIhAOdfqlB35ZRkAnYOYO5DXpx2zuXHj7RoSyTILG5in8eAKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPejSY6%2Bs0%2BwdKLWAq3AMUwjd%2BH4%2Fom5wJEJLfn%2FRFtyxXjLpkK4PwJGJ6avZwqtxmkh5HrCqbl92J1UN%2Bbt5PY8cYTcPKvSII5ZmuGAsZEYWVdCfxs%2BnNHkPlb1J0IR%2FBdjGOKrj8RF65JJaF0x3m0gPPYvA876FCPzsAUJJwZeez4sUDoAWLy2erV3N3qQJ%2BPpLMHXLD2vJvddd0HxalRBWURmBSqKhNM3nag38u5e1gWYQg%2Bnn0b%2Bv0Cz1UY0hdIJw66MIeMxbnSVji%2B43D1ODSxiwzAnHYrfQX1dh%2BDIlnS7hkghSscrA1aIGLqN4BUDcuYtNXnmRL5fKb%2BLQ9Sljosxtk387wl8Ok8BEKPCVRq3mXYB%2F6MOiEZdWEn%2B810fgHHEVSlkv4tqmdMK5Botw6mOfM9IyLIBDZrgx7Z51OKgDZpSUiVQGKnxWN9A6AApstoCotUXiD0FGFSCcGPonCKCqexvS%2BZxh0mgv9QN6eqJHO0WjbMHUFHGvmZ4kE8eVjbtZfpr7CXNNeds2E8%2BhZ06%2BPzOvDbQzYpAUQMpf1WLLSB1myW7TFcW4ppFRCwicYEvGXnbIzOdGxCGKytd6D3FhX5x6Rdnbjgi9N37tR0opklG92qIxf21%2FYdAak2x60R3z6%2B4%2FVXzCck7%2FMBjqkAWC9Rexd%2Fboaw9wHcENTJgE%2BX%2BNLjhhWXX4cLhDFk87egDbx0hiLL1ikhlXP6hllbP6mGNRLgJxowsZZ9D0w2Pl1zXyf0CgGde2FgPX%2BUoighWpWUQ0sZsW6p%2BuFT%2BeCD%2Bfv3Ly2EncMHrUehIeLzHMICeeQNSISfq6vLVXyAtmyt97mIhVOAnlb%2BP0Jv4sGTgKkXYHgyzxqB2C5IwXMZkIkDLBl&X-Amz-Signature=0ee6bc91f55ff99331e38ce9193758a5e752045094208a5c17c5064a89934fe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D2XJCXM%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCD76Bb%2Fw6Yi5D2Nk4EQ5jDvZgsb9GqiM%2FymWUnqgUyXQIhAOdfqlB35ZRkAnYOYO5DXpx2zuXHj7RoSyTILG5in8eAKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPejSY6%2Bs0%2BwdKLWAq3AMUwjd%2BH4%2Fom5wJEJLfn%2FRFtyxXjLpkK4PwJGJ6avZwqtxmkh5HrCqbl92J1UN%2Bbt5PY8cYTcPKvSII5ZmuGAsZEYWVdCfxs%2BnNHkPlb1J0IR%2FBdjGOKrj8RF65JJaF0x3m0gPPYvA876FCPzsAUJJwZeez4sUDoAWLy2erV3N3qQJ%2BPpLMHXLD2vJvddd0HxalRBWURmBSqKhNM3nag38u5e1gWYQg%2Bnn0b%2Bv0Cz1UY0hdIJw66MIeMxbnSVji%2B43D1ODSxiwzAnHYrfQX1dh%2BDIlnS7hkghSscrA1aIGLqN4BUDcuYtNXnmRL5fKb%2BLQ9Sljosxtk387wl8Ok8BEKPCVRq3mXYB%2F6MOiEZdWEn%2B810fgHHEVSlkv4tqmdMK5Botw6mOfM9IyLIBDZrgx7Z51OKgDZpSUiVQGKnxWN9A6AApstoCotUXiD0FGFSCcGPonCKCqexvS%2BZxh0mgv9QN6eqJHO0WjbMHUFHGvmZ4kE8eVjbtZfpr7CXNNeds2E8%2BhZ06%2BPzOvDbQzYpAUQMpf1WLLSB1myW7TFcW4ppFRCwicYEvGXnbIzOdGxCGKytd6D3FhX5x6Rdnbjgi9N37tR0opklG92qIxf21%2FYdAak2x60R3z6%2B4%2FVXzCck7%2FMBjqkAWC9Rexd%2Fboaw9wHcENTJgE%2BX%2BNLjhhWXX4cLhDFk87egDbx0hiLL1ikhlXP6hllbP6mGNRLgJxowsZZ9D0w2Pl1zXyf0CgGde2FgPX%2BUoighWpWUQ0sZsW6p%2BuFT%2BeCD%2Bfv3Ly2EncMHrUehIeLzHMICeeQNSISfq6vLVXyAtmyt97mIhVOAnlb%2BP0Jv4sGTgKkXYHgyzxqB2C5IwXMZkIkDLBl&X-Amz-Signature=4e257d3080b32e8f0fb20d13f4afd31a1d5f1a432234dc0338b35e17fddbf775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X3FSIII%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQC6PLMRjLUawCQjzNcbTahWh5E%2FnS8NxmNtcB5WpnOrjQIgJnJAR6Rp6WGQarM0gDnEr6Uc34rVMKCJ32tYnSULe%2BgqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4VPxow9YjkoL9fHSrcA7SrTv5jaL%2BD35YxNQFisOS3cI1oDSjgl5p4y3sT2ahb7xKperKd2Sg%2FDwk6eqz2NK1IQqZqUYk%2Bq%2B%2Fnoxp%2BY1k%2Bj3BSr1F1ktnX0SNlddSVvFLAuS1z6b6W4LLY8WdOKv6pzs4MNu8g4pDhRcPn12tyzVd%2B5mhWdICteZgR7zJ8O3rkwtG9S1WQjF8eiTgYU%2FZ%2BJBBVCDP%2FR1UIbvGm4ZRxKKAyaitbrxkl2w9uLuHIvW58Rt2wdbxMUqWZ0YYZU7e2UQQrQVpQvkor%2BtozXfJPdpS8cF2cuS0VevWsFPnSyIe97WwLjQb%2BgkaQbNInxWsEXKwwEiRHt4AWGALguMvzkfFxFABgIK33fl2Hmc%2Bvj27MsARP7D6a55TrVBtPAxMAj%2FtHeUYs7Qql86uhCLZBzoBW9sKcYS%2ByUQRTdYPemn7KZI7SKDyNGLHdfvdxcjQvs4HHlOcg5vUBdExusVKXvyXRaSMme%2BPKoFUydh54xpr%2Fyk8Da635BNqo3pg41gtd9Bzw%2Fb0kNQIf6kbKaOL2aO7Z7nyGj%2FuieZVZoX10tL%2BHhzQQ6dycjdOFFuMNIa8LlD4pbycl%2BjyV2slmYGNWkyjLA4rQBnO6kv%2BqZV62XBjxz4s7dO1acWQUMO6Sv8wGOqUB2B3PgVVjYxRzUmo767e52MJs95LcA7BNXKLcvdzBzKb8BjqZXabAGR5jWik6VgSeKE6n7prSkARzjo6dSJ4Fjg2HiUa0FHqaaqBXNEGBc3boD8GMjwbmE3K%2B%2Bn7lY0YQ39lYU6HtfiPruLEmZ5KU4HSg6YkwsDalWkyikJsNjLdH36F0GiqYoSUD3qrQgqNtCMbrE80WxQsxSms%2BSW0NJOP2JRqe&X-Amz-Signature=2558ec212139ba6a6fda5514f57961381e081d4a0def93c17821feeec640e311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJYZSD3%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIEv%2FBuB1%2FMvazGVoHyfXdJfw8YuLk%2F0DQT%2F4JTGiXp1hAiBiwAoV4On7vlW3ZBHpuumN51FGiJJjP8UHWhGHhey1%2ByqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlwx1xDCqzeFb3ehRKtwD688p3Yi7eujVCtg7ouNPPF99AXHMPBHd%2BfstLzTR1%2FpNs8xStRMX1QNi%2BPTIcSTrAmQAdIGJJW5BXWKEvotsKNs2fwC1X8IuPhCX94Q%2FxE%2BnJzX1nV6z%2BOM5VnREhuWawIVssoolVVylNL7FphduL1P2RJ1q6E3Onh1FXo%2FYb57jbQbEsDxzWIB3LZr21pnnYKo1NliR6iqlD7vK%2BNCNMI1794hjXJxrp7fgGdSD5W5cmy29Xp3hpTvt6wkNW2dxtD6aziFlw7ywKKHJ0F2lEENHmTC3R5%2B6V6UOmnM0RrlHAtTUkR%2BF%2Bx%2BlMB%2FHYZg6UBmUM2V%2Fyeaw%2Fcs9A1cFTrG%2FPpa7AgRhJOv1AkOw15KoP2gvridXDUhwQzeS5GTvAZp95Ag2sXx3gbh5VPg%2BB9noKiA1KJmlVZ4v263wwYN7zVdp7pa1Pa6oDq6ne6kxjZWMVWAmxcvfZIQv3suXDqlkyJOFWNMJnYmAKPWRiuBbjEuKpJAJkV9m6RYgvnC1kXA2p1%2FYPU%2BbIsEAJ6CaLGgHFi9ZYyQ5fZ65qLLx7bDim7rjr0TpC84znTmeVdflIiUFy4MCzGD6P5gy2xMHstF6kTQcOVGzQVGG8OxeS4RmjnfzhY7AfscALSsw%2BZK%2FzAY6pgFQMtEE9q%2B%2B7M8rk8Y3kJozdBiZQwfjOKaKaJmr7D54FUxl3bYxRCy4Ek3rV0VN73c0SBBsAZbuHqpcfJOZFdLZtzUz81BqAmqnUokmceH8QVjdWgkygAgxCbR%2F7y9N2NUrWCW%2FAnNT8lr4aZNvCSombPlJXKrl1f3%2FHG%2F01xhUNbP81qwVAu05ZpOCXbSXB3J9CDT%2BY4YGOQqAH%2FH8kRUF7I%2FS4q7y&X-Amz-Signature=a56404dac26388d4aff23432f43aacf1b2c601f371d1b338e25195e5ecbfd4d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D2XJCXM%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCD76Bb%2Fw6Yi5D2Nk4EQ5jDvZgsb9GqiM%2FymWUnqgUyXQIhAOdfqlB35ZRkAnYOYO5DXpx2zuXHj7RoSyTILG5in8eAKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPejSY6%2Bs0%2BwdKLWAq3AMUwjd%2BH4%2Fom5wJEJLfn%2FRFtyxXjLpkK4PwJGJ6avZwqtxmkh5HrCqbl92J1UN%2Bbt5PY8cYTcPKvSII5ZmuGAsZEYWVdCfxs%2BnNHkPlb1J0IR%2FBdjGOKrj8RF65JJaF0x3m0gPPYvA876FCPzsAUJJwZeez4sUDoAWLy2erV3N3qQJ%2BPpLMHXLD2vJvddd0HxalRBWURmBSqKhNM3nag38u5e1gWYQg%2Bnn0b%2Bv0Cz1UY0hdIJw66MIeMxbnSVji%2B43D1ODSxiwzAnHYrfQX1dh%2BDIlnS7hkghSscrA1aIGLqN4BUDcuYtNXnmRL5fKb%2BLQ9Sljosxtk387wl8Ok8BEKPCVRq3mXYB%2F6MOiEZdWEn%2B810fgHHEVSlkv4tqmdMK5Botw6mOfM9IyLIBDZrgx7Z51OKgDZpSUiVQGKnxWN9A6AApstoCotUXiD0FGFSCcGPonCKCqexvS%2BZxh0mgv9QN6eqJHO0WjbMHUFHGvmZ4kE8eVjbtZfpr7CXNNeds2E8%2BhZ06%2BPzOvDbQzYpAUQMpf1WLLSB1myW7TFcW4ppFRCwicYEvGXnbIzOdGxCGKytd6D3FhX5x6Rdnbjgi9N37tR0opklG92qIxf21%2FYdAak2x60R3z6%2B4%2FVXzCck7%2FMBjqkAWC9Rexd%2Fboaw9wHcENTJgE%2BX%2BNLjhhWXX4cLhDFk87egDbx0hiLL1ikhlXP6hllbP6mGNRLgJxowsZZ9D0w2Pl1zXyf0CgGde2FgPX%2BUoighWpWUQ0sZsW6p%2BuFT%2BeCD%2Bfv3Ly2EncMHrUehIeLzHMICeeQNSISfq6vLVXyAtmyt97mIhVOAnlb%2BP0Jv4sGTgKkXYHgyzxqB2C5IwXMZkIkDLBl&X-Amz-Signature=832b8aa6d6dc0c1831552a496ce80f4cf5fd6708df8cf5738415467db6b1a50b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
