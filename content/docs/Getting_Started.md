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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL3AOEGF%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1BRwnPo9Nc%2BSj6jJKxSyDrUCFqlfMpPs00ZJYqZl8MAiEA593VqPCNKB7shiY3fzMtjDrYCoDUb2NnNjWPeoBjMNMqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQvpQzdVb%2F2ejD%2FpyrcA1V0QoTD8fEmifRi4M7bPJYwqR%2Bdg3E8LH1qXyiFzgJWXOSoiPSvEr1pgCHM2Vpi8FRa17Hausdmpv8hjFqMZlCQz46vrw4cpokJGA18R3ZDw91VGHGRGlXAd2KqTKDJjNpX6we%2Fmlg3oEgyOF%2Fo1x%2FcbAIeQjWjkRFKKa34jIjswQXAhGoC%2BXl4wp3vAlwnmjpFvTNo8kJ0CcjmkQ8D0HKJCUdR9yfG44TY1fz2jc0Tj%2BZUpVnF2FI3TfZ8ZV%2BDYYfMh0QBAzKNo%2BQvczrNYHvJtaEnn2X0RBFB8XUnrplAG1ANPwkNNO9QNoRfCQl%2BD45GqAD9WlfdEh%2Fp538Q%2BNV0HMHG1%2F93SnjeisGcKbLcmRXuE1HtgoW3Mk2lpnU%2BZ9c1DcawePUHew%2FLj%2BCHqMRnGRiOmVgYK04c9G2yVaCdR8KZT8vrjbQtmWaVaiLFRsTkVTbQTM2skSL5yZw%2B1d%2F2PRTg2lSnWy0Qj3ujIf%2BGHdBKeg4uHLxGP3CjagC1mWnjLthAJLxuLoVgom%2BgtUbD1%2FpfKVkPZDkHbFGbamNFqjNPbpgvukN92Eo8vNlvNjiYblFaGhFBCedHj52EzE1kyHlBHYHHNYg%2BtUtibvkWSQuoHOjMKC%2BGS%2FYwMOyS0r4GOqUB26lXtaSOWdptzHuvAgoS0LIJkTCQLLg13dfj5XmsBZODR0VdSu8pRxNHJhhRrWMgdv52FlOtxQuEhZRvp1pEfEhzKANgUOGYxR5%2BcMYCTHNWh0CVPGNmWqeYn1s4lb3EnTZRZ3jU6XXG9NnjcQyYxau0gvBisfjln0VLR91T%2FSn4IgC0RppyAFHb4ttupf23fhfHm05fu8tsc25FQ59pUtIfF928&X-Amz-Signature=5745f2ef77db42c32fdf43df9fb1a262f2b06ad2c79dd5697e9d000b41d0922a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL3AOEGF%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1BRwnPo9Nc%2BSj6jJKxSyDrUCFqlfMpPs00ZJYqZl8MAiEA593VqPCNKB7shiY3fzMtjDrYCoDUb2NnNjWPeoBjMNMqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQvpQzdVb%2F2ejD%2FpyrcA1V0QoTD8fEmifRi4M7bPJYwqR%2Bdg3E8LH1qXyiFzgJWXOSoiPSvEr1pgCHM2Vpi8FRa17Hausdmpv8hjFqMZlCQz46vrw4cpokJGA18R3ZDw91VGHGRGlXAd2KqTKDJjNpX6we%2Fmlg3oEgyOF%2Fo1x%2FcbAIeQjWjkRFKKa34jIjswQXAhGoC%2BXl4wp3vAlwnmjpFvTNo8kJ0CcjmkQ8D0HKJCUdR9yfG44TY1fz2jc0Tj%2BZUpVnF2FI3TfZ8ZV%2BDYYfMh0QBAzKNo%2BQvczrNYHvJtaEnn2X0RBFB8XUnrplAG1ANPwkNNO9QNoRfCQl%2BD45GqAD9WlfdEh%2Fp538Q%2BNV0HMHG1%2F93SnjeisGcKbLcmRXuE1HtgoW3Mk2lpnU%2BZ9c1DcawePUHew%2FLj%2BCHqMRnGRiOmVgYK04c9G2yVaCdR8KZT8vrjbQtmWaVaiLFRsTkVTbQTM2skSL5yZw%2B1d%2F2PRTg2lSnWy0Qj3ujIf%2BGHdBKeg4uHLxGP3CjagC1mWnjLthAJLxuLoVgom%2BgtUbD1%2FpfKVkPZDkHbFGbamNFqjNPbpgvukN92Eo8vNlvNjiYblFaGhFBCedHj52EzE1kyHlBHYHHNYg%2BtUtibvkWSQuoHOjMKC%2BGS%2FYwMOyS0r4GOqUB26lXtaSOWdptzHuvAgoS0LIJkTCQLLg13dfj5XmsBZODR0VdSu8pRxNHJhhRrWMgdv52FlOtxQuEhZRvp1pEfEhzKANgUOGYxR5%2BcMYCTHNWh0CVPGNmWqeYn1s4lb3EnTZRZ3jU6XXG9NnjcQyYxau0gvBisfjln0VLR91T%2FSn4IgC0RppyAFHb4ttupf23fhfHm05fu8tsc25FQ59pUtIfF928&X-Amz-Signature=9c15de7acad15310f58bfebf69aba4481a94750a662ce8c88569ccfcd6b86ab5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQY2QZBZ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFtmxh8wOAdZQLMXhMGT3pXZ%2FY9h13U8vmUtWnU%2FW3gAiBNFJMxnrR2fcMR208crg%2ByO3zJhhl3Qi2yCvgFw1%2BS%2BSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUaArGUNZmpDjZCp8KtwDmoiLvJTNi3%2B9v4t154rtxzzMmO3W1nojEsM7BeWAXODTqpNIrcIND2%2BaDUVIaLloVRp6EKIp%2Ben%2F4tX7J2sjG8x9cayZpEG3qwJy7nU81eQld0JtQbKsrxxBs%2BPO%2F8Ea73NSRyzjBciw2m8Q86AbuyITg6ichYCfYB8miYGrkd2mLFriiWGZ05DG1REjp%2BTtC7VSDP3jmjnQnvsAP7%2BN8KXXUzshrW1nld%2FadOpSHDQy6PBCAYgvmyhQH6NoapXWutf8IBjCZvDFKYD9GMN%2BuyfV6rcEqyZJZQlQYKA8YeRs2gK0Xk3fOFM6y3K41o0%2BDc%2BMUvd6HI%2B2aDxSw%2BzGhRRGlX1n9VVmqEJUq64%2Fq0A5%2FU2hMyHnnb9HAFsPDokZfUQDlBBjnKD9QFDDtzG8hkIaPvDpDY9y5RhEebT%2BEuIcD0rXzUgWZ5wwrpVNb6%2Btepe40GRnS279xsaOHTkGh%2Fb%2B%2BdkyJSTWo0umKYa5JRJG5e4ggLnvWtbQOUTPAiIV7SC6S0IjgwqqyA1BtyVoTSYdzxYU56%2FB8nvyvA2ALnXeI5YsppbV3B%2BDNa4fggTY%2BdeKQWSJ2PgPUpa5FmJbHgsodnrYbSh92Ep%2Bl8LKU0tQw5%2FBwQPdH2ySGv8wjZPSvgY6pgE5T9axXhJMnVm01gGDp5O0dInPfYvM%2BqU6Tbsq0Q4RNBTNcbc1piHTH%2BtyaWLFL1pRfdAyk7FPTMLPSnbpCT%2BFqaR8og1GthvJsw%2BuweKqB9c8YEQOWhnLi%2FC0Toc1F01VNj9f8xR%2BegF0WVm%2F%2FvD%2FoAvBC43ERPU074Ysuxdl1CLAIfBr5zrMMhHEoo%2BxcLY%2BS5HcF4TmwaTmJ3%2F9PNY0p5tWglNJ&X-Amz-Signature=f69940aab3ce68262654dbde79f586fe3466f9b56162dec7608a0434749837b2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CUQKHJM%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBbZI%2FeWoNaxWbzecvplodCMeuHf5j%2BiYAIHKTSN%2BX5AiEAl0FP8Mc3DQSJc9SFSkv6pv14jDnxnnBlVlRqco%2BTJMUqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7zPygaC75T%2FkjiQyrcA7koZV19cD%2FTUUFvy9pQYfU3tLDebeEER14Qbz83yDJJiNhqFmZWviCTbvbOVTDGGpUNvzjdwYGYRQ6437r8fBYcrt4VbK1aVrLc66glWsYHBQmB5fQx%2Ba0fued3bb22t45ydq4NnmHz2RBf%2BCmglYaGG2INe%2FEBiLAjegmnvaxlWft0T4xvN7QtdAeh8h4%2FRdV7x%2FjmSqzhJ5Ldq6UfUxhpWstkeOjg%2FHLS0rJRb%2B3Wx2S5SG440FSh7aeisPT6WOeRbLBiFVQdwEsHEypbWBLcK9YxK%2FkBa%2FZnxSHHpU0ny8OxCqXf8w%2BRfVgamTGSgt1oP78i9QPPfPaCscLfU0nB6q2eRtVmy87bFZ9gWGaveJLgVUNKcIsaf3MfNEcrYQBYIowLXAfjJacoK940ruq9EsIdxm3n0ET9I7M0rycWSOGyuwcg8%2FcVyD1%2Fr%2Fu0VLFHD6ANE%2FXBn1JhPkDN33to9QLtfXbLwGwT35sNyG56I%2Fi3BQFIzIOFpGK%2FUQGFhLsHVzQGgCxcZXTXmilS%2BrTHhtnOpkon6i%2FYbgbujwHzYrBmNObXDoCOM0Xnjvg5eNq7tZ9Bph3vKqP058N45rz%2FiIe%2Bv84Sy6P1%2FVo0TvCYyfYtDHtAZbNiGa1NMKCT0r4GOqUB86fP2ZpK11wrXmv4BZ5ZWZfGTxpnyHTWXN4ibIdiM6H8WLo7F%2FmiCkN7UXKMW5umGnspgkB9%2BqMQtsyn0bMe0GjGF9pdVkrTyxkQzUPoVvOagrxMzkP0IEqK81e0FPHejCNaDH9YSAt0nRCJt9rjaS2R4aHEZLYuHv%2BN10nkwWDdTFs9j1R3CZNj3nl33A9FaVYJ%2BCgoMX7bi6B19l%2BhiuJpb6dE&X-Amz-Signature=82707074aedbbe1f251e21e7b38d69de44f00c55f16dbff95cbc7ab1a54e4b22&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL3AOEGF%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1BRwnPo9Nc%2BSj6jJKxSyDrUCFqlfMpPs00ZJYqZl8MAiEA593VqPCNKB7shiY3fzMtjDrYCoDUb2NnNjWPeoBjMNMqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQvpQzdVb%2F2ejD%2FpyrcA1V0QoTD8fEmifRi4M7bPJYwqR%2Bdg3E8LH1qXyiFzgJWXOSoiPSvEr1pgCHM2Vpi8FRa17Hausdmpv8hjFqMZlCQz46vrw4cpokJGA18R3ZDw91VGHGRGlXAd2KqTKDJjNpX6we%2Fmlg3oEgyOF%2Fo1x%2FcbAIeQjWjkRFKKa34jIjswQXAhGoC%2BXl4wp3vAlwnmjpFvTNo8kJ0CcjmkQ8D0HKJCUdR9yfG44TY1fz2jc0Tj%2BZUpVnF2FI3TfZ8ZV%2BDYYfMh0QBAzKNo%2BQvczrNYHvJtaEnn2X0RBFB8XUnrplAG1ANPwkNNO9QNoRfCQl%2BD45GqAD9WlfdEh%2Fp538Q%2BNV0HMHG1%2F93SnjeisGcKbLcmRXuE1HtgoW3Mk2lpnU%2BZ9c1DcawePUHew%2FLj%2BCHqMRnGRiOmVgYK04c9G2yVaCdR8KZT8vrjbQtmWaVaiLFRsTkVTbQTM2skSL5yZw%2B1d%2F2PRTg2lSnWy0Qj3ujIf%2BGHdBKeg4uHLxGP3CjagC1mWnjLthAJLxuLoVgom%2BgtUbD1%2FpfKVkPZDkHbFGbamNFqjNPbpgvukN92Eo8vNlvNjiYblFaGhFBCedHj52EzE1kyHlBHYHHNYg%2BtUtibvkWSQuoHOjMKC%2BGS%2FYwMOyS0r4GOqUB26lXtaSOWdptzHuvAgoS0LIJkTCQLLg13dfj5XmsBZODR0VdSu8pRxNHJhhRrWMgdv52FlOtxQuEhZRvp1pEfEhzKANgUOGYxR5%2BcMYCTHNWh0CVPGNmWqeYn1s4lb3EnTZRZ3jU6XXG9NnjcQyYxau0gvBisfjln0VLR91T%2FSn4IgC0RppyAFHb4ttupf23fhfHm05fu8tsc25FQ59pUtIfF928&X-Amz-Signature=644d7fa2ed1b75defcf289a1dd76d1abe1ca40824e2cbf23d8f4c617e7fc39b4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
