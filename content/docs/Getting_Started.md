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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGDIYBLP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1YdC2WlAMrTgd2hdO4qfxaTNnX1yCGUpLOKyfIR%2BoyQIge%2B6rGD8wE0hyJSb52u8P0v7GxD%2BcITJa%2FZjxUwPJGAQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPBKSD3DPRKp983aASrcA9UhNfe7Vy10TVQpaA7Bx3l9k3H2h628hUtnjsfHmaKTWMKc34ZmT4H533VmOp5xz7svzMagTQ2%2BQhzAnNWJtugK1Njm9hyqPyagqaypeKqfzFla1nefCS%2BmJS%2FbB7M5mZDqlCVrKRq0%2FzMXVS7C1SYxEW%2FSBTP9UZb0C2mY2hRRmm9VjJIeyKVVb%2BQmZMdjGfahHkINNlUEnPCgBrx8rxyIh7kqlGpwRLmJFyBYt768E6BPpAggr4WE2gn9cPf%2BEuGvb9zOiwAGz6DBMNfSu6v5o7ujQY1Z5CGtJVgQ5coOmS06N%2B%2FhzQm1RTlqaDcAioNfY713hRmJkpztshJdFcv%2BHL4ZkGoO7pwdmcEGoJeMMKE4MFhYLkx3oc3RZ4aptuXAkpmCvLr9TvoPMfoWAHybbcNNOjtXcQNOIgfP7ZBbEYZC5hnKQnvni9qjA2ICd2AKOTiK4io141z8OleI%2B7clxxEpZmTWGVgdmx1fYWXAA%2FTz0S2%2BEmGjhFE9C0g7OQjWl0ZopCd5bMv4hp%2BCC%2B6E6aSMoua%2F5mIujUDNSix53uQPlj8OGVs3zA%2FDlo5TnTKn3R9wS42hDoUea5xeh5XyYrMkyMnZEdNH9li%2B8ERMB5ygO7ybd339k9f1MLz598QGOqUBdew5krw2omj5HzG9obfOHFITenln9UIN2J4GREKzJ5yT2X3WrhWol%2B3winAsiPM5PmC7Ofj3iZ7Syw2hEYtUgMzkKgNlzbu1AWrrPX3n%2BhVkigypZSB4stDuEJ5yuin8VtX3BlqkLKwZeMTPBO32uY2XxL2UT2tDdD5bwuf58f6WE0YmlGU6%2BmYeUzpRf6VE8ftImRdemDoX%2FYl5%2F3a8sMtAY5WH&X-Amz-Signature=fce8003389445a3948530342324dbef24283e7b7cde3f173cbf6d6451ee5e0c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGDIYBLP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1YdC2WlAMrTgd2hdO4qfxaTNnX1yCGUpLOKyfIR%2BoyQIge%2B6rGD8wE0hyJSb52u8P0v7GxD%2BcITJa%2FZjxUwPJGAQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPBKSD3DPRKp983aASrcA9UhNfe7Vy10TVQpaA7Bx3l9k3H2h628hUtnjsfHmaKTWMKc34ZmT4H533VmOp5xz7svzMagTQ2%2BQhzAnNWJtugK1Njm9hyqPyagqaypeKqfzFla1nefCS%2BmJS%2FbB7M5mZDqlCVrKRq0%2FzMXVS7C1SYxEW%2FSBTP9UZb0C2mY2hRRmm9VjJIeyKVVb%2BQmZMdjGfahHkINNlUEnPCgBrx8rxyIh7kqlGpwRLmJFyBYt768E6BPpAggr4WE2gn9cPf%2BEuGvb9zOiwAGz6DBMNfSu6v5o7ujQY1Z5CGtJVgQ5coOmS06N%2B%2FhzQm1RTlqaDcAioNfY713hRmJkpztshJdFcv%2BHL4ZkGoO7pwdmcEGoJeMMKE4MFhYLkx3oc3RZ4aptuXAkpmCvLr9TvoPMfoWAHybbcNNOjtXcQNOIgfP7ZBbEYZC5hnKQnvni9qjA2ICd2AKOTiK4io141z8OleI%2B7clxxEpZmTWGVgdmx1fYWXAA%2FTz0S2%2BEmGjhFE9C0g7OQjWl0ZopCd5bMv4hp%2BCC%2B6E6aSMoua%2F5mIujUDNSix53uQPlj8OGVs3zA%2FDlo5TnTKn3R9wS42hDoUea5xeh5XyYrMkyMnZEdNH9li%2B8ERMB5ygO7ybd339k9f1MLz598QGOqUBdew5krw2omj5HzG9obfOHFITenln9UIN2J4GREKzJ5yT2X3WrhWol%2B3winAsiPM5PmC7Ofj3iZ7Syw2hEYtUgMzkKgNlzbu1AWrrPX3n%2BhVkigypZSB4stDuEJ5yuin8VtX3BlqkLKwZeMTPBO32uY2XxL2UT2tDdD5bwuf58f6WE0YmlGU6%2BmYeUzpRf6VE8ftImRdemDoX%2FYl5%2F3a8sMtAY5WH&X-Amz-Signature=6346ea380c43fa1bb8b69328bae8d7082bf4f69446883779a81b86faa4397aaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGDIYBLP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1YdC2WlAMrTgd2hdO4qfxaTNnX1yCGUpLOKyfIR%2BoyQIge%2B6rGD8wE0hyJSb52u8P0v7GxD%2BcITJa%2FZjxUwPJGAQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPBKSD3DPRKp983aASrcA9UhNfe7Vy10TVQpaA7Bx3l9k3H2h628hUtnjsfHmaKTWMKc34ZmT4H533VmOp5xz7svzMagTQ2%2BQhzAnNWJtugK1Njm9hyqPyagqaypeKqfzFla1nefCS%2BmJS%2FbB7M5mZDqlCVrKRq0%2FzMXVS7C1SYxEW%2FSBTP9UZb0C2mY2hRRmm9VjJIeyKVVb%2BQmZMdjGfahHkINNlUEnPCgBrx8rxyIh7kqlGpwRLmJFyBYt768E6BPpAggr4WE2gn9cPf%2BEuGvb9zOiwAGz6DBMNfSu6v5o7ujQY1Z5CGtJVgQ5coOmS06N%2B%2FhzQm1RTlqaDcAioNfY713hRmJkpztshJdFcv%2BHL4ZkGoO7pwdmcEGoJeMMKE4MFhYLkx3oc3RZ4aptuXAkpmCvLr9TvoPMfoWAHybbcNNOjtXcQNOIgfP7ZBbEYZC5hnKQnvni9qjA2ICd2AKOTiK4io141z8OleI%2B7clxxEpZmTWGVgdmx1fYWXAA%2FTz0S2%2BEmGjhFE9C0g7OQjWl0ZopCd5bMv4hp%2BCC%2B6E6aSMoua%2F5mIujUDNSix53uQPlj8OGVs3zA%2FDlo5TnTKn3R9wS42hDoUea5xeh5XyYrMkyMnZEdNH9li%2B8ERMB5ygO7ybd339k9f1MLz598QGOqUBdew5krw2omj5HzG9obfOHFITenln9UIN2J4GREKzJ5yT2X3WrhWol%2B3winAsiPM5PmC7Ofj3iZ7Syw2hEYtUgMzkKgNlzbu1AWrrPX3n%2BhVkigypZSB4stDuEJ5yuin8VtX3BlqkLKwZeMTPBO32uY2XxL2UT2tDdD5bwuf58f6WE0YmlGU6%2BmYeUzpRf6VE8ftImRdemDoX%2FYl5%2F3a8sMtAY5WH&X-Amz-Signature=b3d3ded67bc0d3ae8a44838a2c9b4a2c0bbcc4581aa6846c9ec92bfe5c851a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFPFKMWR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcKKjpoftbEjwzKrXNkObmEz7s4sBiK72HMD8%2BZ5ZvPgIhAOx9cm9%2F%2FS0bj2eVE3bpFwcqjYJAtfEy80SLF6d7SCA9Kv8DCEgQABoMNjM3NDIzMTgzODA1IgwxS1PwHGpKBs1ui3Aq3AOz0S9XhcTgNwARaaGm8pnmWQWU4rDt7no1OK6g6Ujpv3YDmmRKRtnyaYNTUBm5U%2BFI6z%2FQ%2BLJuLQDbEIEXupY65RMd83BXDGPnoI9lrbx%2FlnLgfC2SVMhsPv1gwgio%2BfTscYcAzot2CI0e0T4y70r2MoXdHm%2FkqPzJcgUAcvY417u%2BjJneTo3o%2BpHwZ1km0hXaClPpBIONX%2BnLti8CHhJAou9Aso98hHz5PTP1nvGf62bI0Ln5TvA7WF9nbYm6SvIsnJ0Q%2B9Ts3WsUWkvlAtUE3YGErg65hYUhV%2F48pq5j9jSIr2DVd8tPhTFeyNrwrjqtLgI8VYt58N8%2B2cnsx70%2F%2BqH%2BLAqgPHxSnyGPrZfWU0AeX3aZhI4LCkaPp2jz9fbum1g9vb8mvVxPWjtx4skfvsY89RY5JWKGQzl0%2BKTdGDhldQkV9oaAORbyjCZbQ9VuqAYmcQXDlrGsEJCSjoE5h7t4%2B%2F0jQLQLi%2F9PmN2z2S8E2fOVCyObjdP4koHRyfrY0nOq5RFeUtvKKNhWppUy6AmU4Z5gKY%2FyF%2BNhI%2F1qMgsmB5BlhyzF5albxnOeVdD%2FvdatvKI9vUr4kl5Rfr2J1Y8d6XcV%2BJ7EOatInOHViq9BRK5kFVGVY%2FiyVTDl%2BPfEBjqkAUaTZ7CT3Z9l2TMyiASewUef0XpgFoTSLLKGCqDgG%2BIsm035V%2Bz7%2Fza7Pj89kSEJLE%2FGndCPC212ZNEwafv0nBjfgsrLbV01LqcBJ4vu0CowBanMzhXGlFdgjvjr1Vi6yabF8R%2B71mnVy0Mrol8%2FTCKtz0wM4lH6M5RVl1yLGBktSEPPm0BY7IBfpFjEdbdClCwoMV75CNgb9wgjCm4IyCE%2FZAZB&X-Amz-Signature=51c166ad561829023b93ee78a4a8cf62f68afc9828dafb1caaac63a098916d03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UI64XH6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoCuKQ3HAHxpi5FOKZF04ZYHKjiVHOf7R0Vj7KrOMTFwIhAKOhDLoWjlAXQk0nRUaFeGKY%2FKZ4uIc7IKagajbSAr9IKv8DCEgQABoMNjM3NDIzMTgzODA1IgxkwbW%2FCjZGItEMTbIq3AOYU6c3Br3ZBTGZ%2FJH8sMQLMI6oe7u28FoqfDln0uqkmZtc1RyiD%2FRY%2Beb8AR5UOnUIC8OqJkSIcoDa9vrrjR1ZbMGk40VIYiaTwwLOlPUh4TEA%2B%2FHrUe4htPJbd2%2F7TXXP1WGsvDij8eysuzZD5K0AiaXIDvZIj%2F1ACgCdUVsrlFP1R0zSOlhuyCEFzGqwqlspC2uUa5QBVF3GPagzzebmrNsXCp2YbQAi2I4pGySJ26rlfyPqJRti0qHpB4Eh3qbvTVCQnnBJ2cHjmoBbVg6Opm8qL%2BJyKXosz8QmJtZgWgTLsEt91PBWOd1htxNg8Zq9TVOcs4dwLaK7dll7hUcUjdBhU3Qnl8f304Aln9olYwV2ExE6SMMQJAJr4YLMuZwZbwPAi3L02PFW5G6i2LkgG%2B5fZda4T63n1dPm9VuVRU23NhZXIGnoGOYogZp2v0oIZVmsRROx3EgO3NZKLjfjKqKirGYUXV1riSJdGS2VWRsqw7zrgvr5cVoIXPfs8lwrhbgy0la0FyOH5eD6pjM1cbdgntgGj1aXbA%2B53m96FqFpSKAt453%2BSj1k0gnKQHXUPW1zrKNr%2BcbSPuXOBdXHl0SLTyqrKBoIcQD3X7%2FKeRGwoRrdohQXmW2X6jDK%2BPfEBjqkAf39itOMRUQqC%2FDG%2BXe5VAzag0DoEypyNA%2BmMkZB0F9yhgDx%2BCRQSq4VJztR8v8sMvdws3Jk3H0FaK3Yy6ZftFq2OFUf6Qap76jkPy%2Bmp%2FehHZcRPJcZVTl5M17XNE0068OWzLK3PzSzYXBv3mtWXcfhk6t7SFzZkJqjqW%2FQw1w5njK%2F2oaLRrvGzSSpweFKrmBUnC8ghmVrHWmBnshmyZZ5qEIp&X-Amz-Signature=fe0e67e4017cef4bfbd05cfc613a4fdec4f8bfc883c5459a72ccb5651f563537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGDIYBLP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1YdC2WlAMrTgd2hdO4qfxaTNnX1yCGUpLOKyfIR%2BoyQIge%2B6rGD8wE0hyJSb52u8P0v7GxD%2BcITJa%2FZjxUwPJGAQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPBKSD3DPRKp983aASrcA9UhNfe7Vy10TVQpaA7Bx3l9k3H2h628hUtnjsfHmaKTWMKc34ZmT4H533VmOp5xz7svzMagTQ2%2BQhzAnNWJtugK1Njm9hyqPyagqaypeKqfzFla1nefCS%2BmJS%2FbB7M5mZDqlCVrKRq0%2FzMXVS7C1SYxEW%2FSBTP9UZb0C2mY2hRRmm9VjJIeyKVVb%2BQmZMdjGfahHkINNlUEnPCgBrx8rxyIh7kqlGpwRLmJFyBYt768E6BPpAggr4WE2gn9cPf%2BEuGvb9zOiwAGz6DBMNfSu6v5o7ujQY1Z5CGtJVgQ5coOmS06N%2B%2FhzQm1RTlqaDcAioNfY713hRmJkpztshJdFcv%2BHL4ZkGoO7pwdmcEGoJeMMKE4MFhYLkx3oc3RZ4aptuXAkpmCvLr9TvoPMfoWAHybbcNNOjtXcQNOIgfP7ZBbEYZC5hnKQnvni9qjA2ICd2AKOTiK4io141z8OleI%2B7clxxEpZmTWGVgdmx1fYWXAA%2FTz0S2%2BEmGjhFE9C0g7OQjWl0ZopCd5bMv4hp%2BCC%2B6E6aSMoua%2F5mIujUDNSix53uQPlj8OGVs3zA%2FDlo5TnTKn3R9wS42hDoUea5xeh5XyYrMkyMnZEdNH9li%2B8ERMB5ygO7ybd339k9f1MLz598QGOqUBdew5krw2omj5HzG9obfOHFITenln9UIN2J4GREKzJ5yT2X3WrhWol%2B3winAsiPM5PmC7Ofj3iZ7Syw2hEYtUgMzkKgNlzbu1AWrrPX3n%2BhVkigypZSB4stDuEJ5yuin8VtX3BlqkLKwZeMTPBO32uY2XxL2UT2tDdD5bwuf58f6WE0YmlGU6%2BmYeUzpRf6VE8ftImRdemDoX%2FYl5%2F3a8sMtAY5WH&X-Amz-Signature=3281ca01cde3df6455f5be8847b16e21c7c6ddc2934a432e08a6fdd5961aeeb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
