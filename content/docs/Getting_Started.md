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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBN5YHT%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvTyanH%2FaU%2BUVOkx2nr6iN7VfrZWV83cQi%2ByCW4UvIbQIhAOnqnIarS%2BTT846Fv%2BR8EGS1H4OpfAlbwtzewnZhPzoCKv8DCCkQABoMNjM3NDIzMTgzODA1Igxy773iHyGIzI6WSwQq3AMoe5SEHzT3Pe2aaRLORfS12oJRaW71qSDYTuG5%2F6H7%2BXGLpT3Rk4EPdlemSTpTIKy3qv%2FPEjGz2OYIXrj1re6e%2FX9gpYRgLKH841m9X3kNjRmcm5r4jn0ngcIdtSarFr9noR9EDHV0C2VVBp51%2Bzih0Qh3y2lJxK1Q1yibQYCYzuOWzbdnpX4P46BPzyY%2F6g9mGWA3%2B87AcOMSpXhjx89HwJCsxhgQwMs8i6dwlBKKmXozj%2FXzk4ZKbfMuEudZHgBf69x1VGuT%2B05T1nX5zCWxapz5CCToJ8%2B%2B7CfEjjcmEYyM5f%2FJjTwJ8AO49cJp0M9Oydo6WI6WI8d0kldFKgwwyq4UX575%2BJwLy2tcm4F4k6sZnbDNEiIn%2B0JYW57Bdl4mMTRsmjRV8GhQWttFw4ZTSYIO%2FEKsJpID6ytZCosBIswpYOvtolcVH%2FIGkV9jN2H4l0HBzj5BuX5nOTV7203iGjIxJ4Y4ZxHR%2FNpUIcjpHhG5XgVmC%2FAFzZGA2pO%2BRCswg0Ov5migngqrRQa7F8NmhfOAsD3%2BfihAix7gpr8IRwAa%2BJnJvi4K7XV52bUqm%2B%2FwYXZ6BjZRTyjauUQs%2BxD%2B5coqZ3uLHoM81YRuxe6fJxeQiq0LOmdSxeul0zD4m%2Fi%2FBjqkARp45He6TZWGtkq%2Fyribclsr7TEFKaX0qwkkN13%2BtU7kW7ZdUNlfGnIXOs4fiQ9lkUZxHAK2XxXb4ROurtNoHXbTWRFslbC6Goe83Ybmr4cpO2BGhx%2F1qVKdOrScIngnPuHeTa98H1w%2FfpIUN5xLtW9QQsCydxdZzpKBHukz1udmGUOTsj%2BNpSyfAdxzW%2FEzSTyxZkT%2F%2BFpM1z5LrQld5w3tOc34&X-Amz-Signature=6f82c68c20f2fb8743eb0d34e05e8e31a3b10b4e716bcebc2ccb974666459a3d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBN5YHT%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvTyanH%2FaU%2BUVOkx2nr6iN7VfrZWV83cQi%2ByCW4UvIbQIhAOnqnIarS%2BTT846Fv%2BR8EGS1H4OpfAlbwtzewnZhPzoCKv8DCCkQABoMNjM3NDIzMTgzODA1Igxy773iHyGIzI6WSwQq3AMoe5SEHzT3Pe2aaRLORfS12oJRaW71qSDYTuG5%2F6H7%2BXGLpT3Rk4EPdlemSTpTIKy3qv%2FPEjGz2OYIXrj1re6e%2FX9gpYRgLKH841m9X3kNjRmcm5r4jn0ngcIdtSarFr9noR9EDHV0C2VVBp51%2Bzih0Qh3y2lJxK1Q1yibQYCYzuOWzbdnpX4P46BPzyY%2F6g9mGWA3%2B87AcOMSpXhjx89HwJCsxhgQwMs8i6dwlBKKmXozj%2FXzk4ZKbfMuEudZHgBf69x1VGuT%2B05T1nX5zCWxapz5CCToJ8%2B%2B7CfEjjcmEYyM5f%2FJjTwJ8AO49cJp0M9Oydo6WI6WI8d0kldFKgwwyq4UX575%2BJwLy2tcm4F4k6sZnbDNEiIn%2B0JYW57Bdl4mMTRsmjRV8GhQWttFw4ZTSYIO%2FEKsJpID6ytZCosBIswpYOvtolcVH%2FIGkV9jN2H4l0HBzj5BuX5nOTV7203iGjIxJ4Y4ZxHR%2FNpUIcjpHhG5XgVmC%2FAFzZGA2pO%2BRCswg0Ov5migngqrRQa7F8NmhfOAsD3%2BfihAix7gpr8IRwAa%2BJnJvi4K7XV52bUqm%2B%2FwYXZ6BjZRTyjauUQs%2BxD%2B5coqZ3uLHoM81YRuxe6fJxeQiq0LOmdSxeul0zD4m%2Fi%2FBjqkARp45He6TZWGtkq%2Fyribclsr7TEFKaX0qwkkN13%2BtU7kW7ZdUNlfGnIXOs4fiQ9lkUZxHAK2XxXb4ROurtNoHXbTWRFslbC6Goe83Ybmr4cpO2BGhx%2F1qVKdOrScIngnPuHeTa98H1w%2FfpIUN5xLtW9QQsCydxdZzpKBHukz1udmGUOTsj%2BNpSyfAdxzW%2FEzSTyxZkT%2F%2BFpM1z5LrQld5w3tOc34&X-Amz-Signature=5ebe5a358f8d849adcf1db7820682c05374eb225be10ec9d3cea6fdf2f7cab8e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ3NWUST%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRSQ7KJWZ%2FUFR%2BzrnZP0IsVLUHmooZOlhcwY5%2BvSYNsAiA8nGCJZWIDsA4WZIz3nvcJ9iCZ3wuEOVsOENOQzPDv7yr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMW02fpLDhsxQCaioFKtwDJ5h%2BJtORQQ16853w%2F9GXDxMLKfZGqWu5KgrSK6IvFLRVi8qBzy6jsLaxz9gY7ox01Go5n1Ado6VZ4B9oQ5uNg%2BQbyPZ7gspj0M4DrdMThyvEaqUVNRaO8GF6W0yRlnjX9DC9AkTkZmA6sJR%2F7zd0LYwBBdbDbrujbq8z6M9AyGsaYlVLKWC0SDGJKEdOuBQrKuaI36u1wBPRnYCIxetZr3v24oRLjosIdbYAy1ZWxN1tQ92gift%2FYih4cSfeX1B2MwPljdWJT0RRHPxzqWtYV6cyqr4pmGagzxyGMTL7K0211aur8dlUYHUwNj%2Fi3SbjHTM07FXbeRjQgdJ%2BqQ8%2BY%2BwsK1O5V3t0SD0pmFUZy%2BXoBUKYiLS036p2rqqMWYpyG7iXSCPvf8ipER%2B6jxQaaWhVz1ynVIP8KMBixjb2bturKPaahjy8FoV9qjONhRM03wp1m7WVh62YyU%2F8LlOtTpNQ9BILUeGupvbJ5B2u8inhQOy6jLnvNywGoex9VAiQ9hmWKCnsf33vC6vm3HYBdeDowscw2s0rcC24mqoVftMWLI%2FVs%2BvrpWDjkq%2FqwBftSd397PVEjc8bK2qHgWqs6en%2Bbx23%2FZJk5iDJm%2F45wuYFlA1JVb%2FpEC2irpQw%2B5v4vwY6pgFbfKIaMcsHOTGXKNf%2FqhnYwGy1B04mK9o%2FqtzRVy8z1VP%2FyjvEo9DEYRpIAMOEhccILoOz6UH5P3Y%2FQLC%2Bsjnm9quplck2fWZrSHtT99lDUoBRvWzmW5riyhUIIHoDK6xSYzOsCnhnHrIINjfMSXXy68I1ydRIxtZ6gRPNrnal72Sk19jJTjiqJhma3RHy7LvmEvBwqNXPw6szL65L0pq9SNQpnez1&X-Amz-Signature=a7c5be75d34da05ffdfacc11dc5ec8cf898f10e45f0a5a504968fd9d354c6cdc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2ZAKMPC%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTXrBFi4NtPc6cgAPShmSmM6pR9SpSgSZPsw%2Bx5i56DAiEA%2Brln9uqCJMEatpij9emqE3WitxGl%2FGAAdhMr%2B97DBXkq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDGtWZGw2ooiAZpdD3ircA3dD0h2lqEQzBpC1K%2Bad6%2B5qA8bDIck4as5TwtLjhyaQWE6aeGmS93uSx9bHmnhniy7xyK8FMNQnDoCJA2BoS625IJDmBDfN1%2Fraq%2BsgHmtJsgKVcxXreEiNPeRnlUyNcLQNtUKHiAeC57j%2B%2Fzj2ZjpHtHjd1%2BFbU8aGpj7xBbli6fKdHBmg5e0GLkAm%2BG589pGMYV7pRZMaqCQ420KGnKZZzU%2F90Q4bbkkzlqiTrmLW9eqxB9bEJC3iWvjhVC3LFb5m%2FM%2FQg3%2FtCLmjErR9TE2XjLVIFVAMgDDj1YqiYvj7yIsBZxJwiQOLWtSqJFglwuWJYGfO4kkDhemnwmbtvX5JQy3teb0PixCSBZgDJ%2BSvr7RL%2F7YSMKRGzaqpmbU6Lblbbn3asoY2mlSRMBYG1yITmCkctqd7%2BtAPK7B4c1beVDS%2BRFud9G1HNQXrJcO%2FwYHe7ig4kewKx9xb%2Fd3EkwmyABqTF5ilVPDLRxG1gf8aEc6PxblSkcEIumPvkq8ynBJ9Kk39EXTbQ%2B%2BvBA33NI5AidHovMyFCLIEuRnBRJ21LxAhnMlEDvs9f1LnuxdDv8S8lzEpaTT6vpId6V45ln53u8xRE3kkxIjcmmshblk8lnMEsSg3s%2Fl%2FjRQbMKOc%2BL8GOqUBqCZayJA3Bu26coYs2fjGda%2BpxHFrEBgCTHOiuZpkGt8lOlXrGKLddyc%2FpBOAhlBOZelyqLJ02cVZ6qf3FhgVPszOMsGX01wCWc%2B0n3Ql6iD4eTRYCPl9bikWt7kCU7xZ7HWIFQvOWIl%2Bcfzvw%2BMOu4xka6IS2GOkxruPST5ZdrjWXwVPeaV7QwCskwoapqgT%2F5hhKdGaat6bz3BVz%2FXKE%2BA6cDSm&X-Amz-Signature=c17a7934b12b7d2d92bac59df9c55b63c236ee05394ce436e0e1acfaf19f503e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBN5YHT%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvTyanH%2FaU%2BUVOkx2nr6iN7VfrZWV83cQi%2ByCW4UvIbQIhAOnqnIarS%2BTT846Fv%2BR8EGS1H4OpfAlbwtzewnZhPzoCKv8DCCkQABoMNjM3NDIzMTgzODA1Igxy773iHyGIzI6WSwQq3AMoe5SEHzT3Pe2aaRLORfS12oJRaW71qSDYTuG5%2F6H7%2BXGLpT3Rk4EPdlemSTpTIKy3qv%2FPEjGz2OYIXrj1re6e%2FX9gpYRgLKH841m9X3kNjRmcm5r4jn0ngcIdtSarFr9noR9EDHV0C2VVBp51%2Bzih0Qh3y2lJxK1Q1yibQYCYzuOWzbdnpX4P46BPzyY%2F6g9mGWA3%2B87AcOMSpXhjx89HwJCsxhgQwMs8i6dwlBKKmXozj%2FXzk4ZKbfMuEudZHgBf69x1VGuT%2B05T1nX5zCWxapz5CCToJ8%2B%2B7CfEjjcmEYyM5f%2FJjTwJ8AO49cJp0M9Oydo6WI6WI8d0kldFKgwwyq4UX575%2BJwLy2tcm4F4k6sZnbDNEiIn%2B0JYW57Bdl4mMTRsmjRV8GhQWttFw4ZTSYIO%2FEKsJpID6ytZCosBIswpYOvtolcVH%2FIGkV9jN2H4l0HBzj5BuX5nOTV7203iGjIxJ4Y4ZxHR%2FNpUIcjpHhG5XgVmC%2FAFzZGA2pO%2BRCswg0Ov5migngqrRQa7F8NmhfOAsD3%2BfihAix7gpr8IRwAa%2BJnJvi4K7XV52bUqm%2B%2FwYXZ6BjZRTyjauUQs%2BxD%2B5coqZ3uLHoM81YRuxe6fJxeQiq0LOmdSxeul0zD4m%2Fi%2FBjqkARp45He6TZWGtkq%2Fyribclsr7TEFKaX0qwkkN13%2BtU7kW7ZdUNlfGnIXOs4fiQ9lkUZxHAK2XxXb4ROurtNoHXbTWRFslbC6Goe83Ybmr4cpO2BGhx%2F1qVKdOrScIngnPuHeTa98H1w%2FfpIUN5xLtW9QQsCydxdZzpKBHukz1udmGUOTsj%2BNpSyfAdxzW%2FEzSTyxZkT%2F%2BFpM1z5LrQld5w3tOc34&X-Amz-Signature=27d1682242cb45654ebc094b8fae88846a78d910ced847370d139e75c1902518&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
