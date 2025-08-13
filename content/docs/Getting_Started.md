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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27KTEVT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlfGtWuaFip2rH8HiI%2BqghkdPtbfH7imPtMX4RjIgkAAiEA8xtGsHArPc1%2BHrqJ5POwb8z3tsz5rCRBd6FnZSe4CLUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHPYK0jyAYP%2F3I%2FgcyrcA7hqJAJHtP66icVam9uhjLjzxTv7pYeid1FQqWnP5ZWF9CjxpiqDm8nmpj0DJgj8qDl7tPfOvUsBBIZz9RrvR6urtUKdpVKBpmBc0jG2tgAB1IpzuG8U77hXmmkfQjk6P4iZGoRV5gh2f8WpJbWC47V7pVxmoaP0yrV84Opk3E62axf%2FNVDaQYlkaWXZiHq%2BF%2FAdmvZSlttFwr7M3XFdkF7e6QAdo0jjOxMa61cmV669tjtNfXst9vbjJPvxdsZqAVUW4cHSydaMdWQKWqyJuMIDP7Ur5QuB6GFekbU8gHvWJP2X8JQTXhc2%2FVKyf5Myk3mb9S6E0Nwcn%2FaDeseFraKWvlLIs2IHGpqsRoUZ4s%2FO0hr%2B8R1GwCWAO5DkTHen8jJte9s49KeuDeNCURj2mdI3lsi%2BjhW5%2BAfQuLlEn0RNxK9liUlJqV4lQNw0qNtrjzXEsD6wZ2H5miuP5lTZ8ZAO4lEcDCrAIHzdcDjOee9EebgZ36amTBQKRIN4GHyITeQgchnilenCsXjnglmxVe6jq8ElW1p27DDmLQxPf5GliPGVJsI6el3NFf2icBSIovWH3K0w2GgRy3bnDYcK5dMqjUCApXAlnVOFcgOZj3R41k0bc8AMAGZRIrdMMKLG8cQGOqUBf6Ki4znEN%2FtLH2xJBFC6tyx%2FVhm42VM42te0fGILGU9HfyXfneDIBngW877I5j3TbXR%2FeY3PG79Ldqa3Sf5s7W6izYwP4gdVmZLhaKuoVFfU9oIpjWIEW5FyIAU4lgGFiZ9MQFYdrrqiLnvxh9uxEZJnfiDvMirm1DG%2FvB1Q%2BJgFBUyZ%2BN2P3Ln2xtSWuoxfCnL3cEYIle4EBYfnKtb9RoKFenH7&X-Amz-Signature=493085c334ce8d925801e15f64b394ef0f6b482576a6b2f609c3fb5d0081a166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27KTEVT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlfGtWuaFip2rH8HiI%2BqghkdPtbfH7imPtMX4RjIgkAAiEA8xtGsHArPc1%2BHrqJ5POwb8z3tsz5rCRBd6FnZSe4CLUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHPYK0jyAYP%2F3I%2FgcyrcA7hqJAJHtP66icVam9uhjLjzxTv7pYeid1FQqWnP5ZWF9CjxpiqDm8nmpj0DJgj8qDl7tPfOvUsBBIZz9RrvR6urtUKdpVKBpmBc0jG2tgAB1IpzuG8U77hXmmkfQjk6P4iZGoRV5gh2f8WpJbWC47V7pVxmoaP0yrV84Opk3E62axf%2FNVDaQYlkaWXZiHq%2BF%2FAdmvZSlttFwr7M3XFdkF7e6QAdo0jjOxMa61cmV669tjtNfXst9vbjJPvxdsZqAVUW4cHSydaMdWQKWqyJuMIDP7Ur5QuB6GFekbU8gHvWJP2X8JQTXhc2%2FVKyf5Myk3mb9S6E0Nwcn%2FaDeseFraKWvlLIs2IHGpqsRoUZ4s%2FO0hr%2B8R1GwCWAO5DkTHen8jJte9s49KeuDeNCURj2mdI3lsi%2BjhW5%2BAfQuLlEn0RNxK9liUlJqV4lQNw0qNtrjzXEsD6wZ2H5miuP5lTZ8ZAO4lEcDCrAIHzdcDjOee9EebgZ36amTBQKRIN4GHyITeQgchnilenCsXjnglmxVe6jq8ElW1p27DDmLQxPf5GliPGVJsI6el3NFf2icBSIovWH3K0w2GgRy3bnDYcK5dMqjUCApXAlnVOFcgOZj3R41k0bc8AMAGZRIrdMMKLG8cQGOqUBf6Ki4znEN%2FtLH2xJBFC6tyx%2FVhm42VM42te0fGILGU9HfyXfneDIBngW877I5j3TbXR%2FeY3PG79Ldqa3Sf5s7W6izYwP4gdVmZLhaKuoVFfU9oIpjWIEW5FyIAU4lgGFiZ9MQFYdrrqiLnvxh9uxEZJnfiDvMirm1DG%2FvB1Q%2BJgFBUyZ%2BN2P3Ln2xtSWuoxfCnL3cEYIle4EBYfnKtb9RoKFenH7&X-Amz-Signature=d780bc079a4891a087c22518d27cdf322327d0f1841c5778af4f88b9480c5684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27KTEVT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlfGtWuaFip2rH8HiI%2BqghkdPtbfH7imPtMX4RjIgkAAiEA8xtGsHArPc1%2BHrqJ5POwb8z3tsz5rCRBd6FnZSe4CLUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHPYK0jyAYP%2F3I%2FgcyrcA7hqJAJHtP66icVam9uhjLjzxTv7pYeid1FQqWnP5ZWF9CjxpiqDm8nmpj0DJgj8qDl7tPfOvUsBBIZz9RrvR6urtUKdpVKBpmBc0jG2tgAB1IpzuG8U77hXmmkfQjk6P4iZGoRV5gh2f8WpJbWC47V7pVxmoaP0yrV84Opk3E62axf%2FNVDaQYlkaWXZiHq%2BF%2FAdmvZSlttFwr7M3XFdkF7e6QAdo0jjOxMa61cmV669tjtNfXst9vbjJPvxdsZqAVUW4cHSydaMdWQKWqyJuMIDP7Ur5QuB6GFekbU8gHvWJP2X8JQTXhc2%2FVKyf5Myk3mb9S6E0Nwcn%2FaDeseFraKWvlLIs2IHGpqsRoUZ4s%2FO0hr%2B8R1GwCWAO5DkTHen8jJte9s49KeuDeNCURj2mdI3lsi%2BjhW5%2BAfQuLlEn0RNxK9liUlJqV4lQNw0qNtrjzXEsD6wZ2H5miuP5lTZ8ZAO4lEcDCrAIHzdcDjOee9EebgZ36amTBQKRIN4GHyITeQgchnilenCsXjnglmxVe6jq8ElW1p27DDmLQxPf5GliPGVJsI6el3NFf2icBSIovWH3K0w2GgRy3bnDYcK5dMqjUCApXAlnVOFcgOZj3R41k0bc8AMAGZRIrdMMKLG8cQGOqUBf6Ki4znEN%2FtLH2xJBFC6tyx%2FVhm42VM42te0fGILGU9HfyXfneDIBngW877I5j3TbXR%2FeY3PG79Ldqa3Sf5s7W6izYwP4gdVmZLhaKuoVFfU9oIpjWIEW5FyIAU4lgGFiZ9MQFYdrrqiLnvxh9uxEZJnfiDvMirm1DG%2FvB1Q%2BJgFBUyZ%2BN2P3Ln2xtSWuoxfCnL3cEYIle4EBYfnKtb9RoKFenH7&X-Amz-Signature=a02976cbb937f7221f8af287ed86279e3141bc652bbf5992772193182dc2f154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3BKLPUE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T100958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZzXNioOK88ePc9DdcaoQtujF4L2t%2BLj4ywflqyH1l3AiBoYFElvbQHCcBZtnTFRH5U0%2FgPqeyIIsVn1pwM7vJ9LCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMUKgUo8P1VGlU77lfKtwDsvuQn8DPa4IUT6lOWHVOH0tXNtvBgQJWqOlC%2FTXMsQ81HZJrXZeBAl3IAEtC9McBIJY%2BWRpwH1%2BVZTvI8H3g9hRYQmsS9ykfKj%2Bar%2BbUqyce3UZc58QFGzd0EnMcHAmEmdBmxlRRBzhOwYyW7oAIxjg1XkIC0TOjd36Rq625RsTfs8rQA6AiERKoo7g0cL62frZyjILmrGqoAsLSn5xS%2BjfX5PQiZJGAT287pDqdYXsk6c6XhLOJ0Mykv8FHl1cvdmZUsCAmwJNWR0E5GtJ3%2F7tQ8FMLL1cZ9NULth2xRz7U6bD9zbZHFvWMOoVsgtzMH%2FmU3pmFrLLKjgWNNv188Qn0epjdyZFrXtqKOMuzL7uPxE4wDZ4Vkd4i0W0HCy%2FtNJnUaPvfhX7JiJIjFD218WkJnMLv37DsktwTOxcrXspG%2Bt8MBs%2F3rQezSBJzTLR8J6wTasJunatEeHhroGf%2BlmOz7ZO62y%2BSDfun8FNJ%2B5lvHePphCUV92Cmi0bCwCOQ722Zi7FLKwolkZBYwepyNwWmK%2Fy0aKOJGcbfaIeO7sYP65xf8hbmqJred4TCiXPWtX3XUOFg17%2By7c%2FCgJWuDMVKc%2FendXcBKIIe%2FOKKhPIjywDj%2FOJBdVizZsswhMfxxAY6pgHX0CmCudCKh82oEKFawiWkzClQTUgbQL%2BcDjhRBFW8ZKwW1cO7l%2B2byK1WKZSjBUNepMNmdaX8h%2BqCWE1yxZytANBxI0887gQqBycPCe%2BCsfA6AGE6N6eLWh5b0Z8Un5zGFRDAJKvMyaJZIE5plsnICZFc%2B2vsRYblV3X0rsd0phSp5csbU0%2FGZimI%2Bz0KghDOlmBe77bdVFKwkE%2BlfjuVphEMB8wX&X-Amz-Signature=562ab7b767a08de73e9fa5cdd3040e73f81eee1679cfa9f0c89043e4d40a1634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCJ2YJ3R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENMOp8MrHRyQZZzaUwhxVF5bRYykoIguK%2Bs0FPdhR56AiA6wujhx%2BXAOw8SsnxJ5idOAOYzE3aoaCP9bEGQtcHrFir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM%2B9S9WS3ns1%2FHCC5DKtwDeYG8Colul4KmUISilQyTx0phnKzBsZst0dh4iVKJjKHXB28JtgWxTZU1EDXD%2Bg3%2B7AaB6Br%2FcN3DEFLN%2FkkyWoBucTyAJ2EzFVA26nqZDOKR3T3UV9TobiQamP5VyrW79fvNe6RWSfkRYDcUI%2FYo233Q2ld%2Fa7lX2H1y99X1L29izroKBNlVDCdKERo%2B0kLHzfMsxtoJChWFlnQRi8kIaKUC%2B7jFhgFaKupMPT3yrFfOuQt3H3%2Bh9c8VVXicuZ55eszNotj3VlkPcBCvrVjF7sqPEVf8zwvyebmcm9Dqbkq1fXQUXxA6jdNMZ1st1WcJC9TCRVuAaQNtlE9VTzwVKuOmyKW3%2FOq2xbNh%2Bs82bdMtXALZ%2BM2MWNm1AyW1pYrnIKYPaf5IxfNKJUt0w6fb52rmji5PrZ1GrPg%2FIdHgi7sL7hm4Mr5E5X%2FeEqcdiLwwkgpc9RqxIFHrdSb7XtkyLOmpqrfSKdZ8YpN2EsP31C3g8l9D8KaxGGzdBBlLJG%2FFposcr9Xua%2FDNFidWXSH0fFPkSLL4tYDlWOg0uduWmZmG7%2F%2BDZ9Ha6EemUCEgDoE7S0s9ftoBinkx46nXAMbTXwWj%2ByW65Kt4ZObxuoWB%2BXH3nwmLaacSCl9DyiIwysbxxAY6pgFgWojOtDP7J%2B8BvpJzu%2FOhr2c52L0RP0EzB1BWd%2BdZlilF%2B991MsRGpkgBiPBQBb5lGtEIJPSSEfOZhdyppFlAeFcjjfRD%2BJoxk09DKM4V4KTgQDC2%2B7xTf76nrbEA565dl3cSABls7nytUtHBBZWEOIsZ1XdYZ%2B8xeHO3oShV3vJS%2Bsx7INnGH3wZuWq1%2BklSBgZw6YE5zX2slzZaz9a7gKCzW4P4&X-Amz-Signature=78c939d0bc1c9c829b321a768dd5d1db2cbfb845928203c4d2dc197b4ddf100d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27KTEVT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlfGtWuaFip2rH8HiI%2BqghkdPtbfH7imPtMX4RjIgkAAiEA8xtGsHArPc1%2BHrqJ5POwb8z3tsz5rCRBd6FnZSe4CLUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHPYK0jyAYP%2F3I%2FgcyrcA7hqJAJHtP66icVam9uhjLjzxTv7pYeid1FQqWnP5ZWF9CjxpiqDm8nmpj0DJgj8qDl7tPfOvUsBBIZz9RrvR6urtUKdpVKBpmBc0jG2tgAB1IpzuG8U77hXmmkfQjk6P4iZGoRV5gh2f8WpJbWC47V7pVxmoaP0yrV84Opk3E62axf%2FNVDaQYlkaWXZiHq%2BF%2FAdmvZSlttFwr7M3XFdkF7e6QAdo0jjOxMa61cmV669tjtNfXst9vbjJPvxdsZqAVUW4cHSydaMdWQKWqyJuMIDP7Ur5QuB6GFekbU8gHvWJP2X8JQTXhc2%2FVKyf5Myk3mb9S6E0Nwcn%2FaDeseFraKWvlLIs2IHGpqsRoUZ4s%2FO0hr%2B8R1GwCWAO5DkTHen8jJte9s49KeuDeNCURj2mdI3lsi%2BjhW5%2BAfQuLlEn0RNxK9liUlJqV4lQNw0qNtrjzXEsD6wZ2H5miuP5lTZ8ZAO4lEcDCrAIHzdcDjOee9EebgZ36amTBQKRIN4GHyITeQgchnilenCsXjnglmxVe6jq8ElW1p27DDmLQxPf5GliPGVJsI6el3NFf2icBSIovWH3K0w2GgRy3bnDYcK5dMqjUCApXAlnVOFcgOZj3R41k0bc8AMAGZRIrdMMKLG8cQGOqUBf6Ki4znEN%2FtLH2xJBFC6tyx%2FVhm42VM42te0fGILGU9HfyXfneDIBngW877I5j3TbXR%2FeY3PG79Ldqa3Sf5s7W6izYwP4gdVmZLhaKuoVFfU9oIpjWIEW5FyIAU4lgGFiZ9MQFYdrrqiLnvxh9uxEZJnfiDvMirm1DG%2FvB1Q%2BJgFBUyZ%2BN2P3Ln2xtSWuoxfCnL3cEYIle4EBYfnKtb9RoKFenH7&X-Amz-Signature=96c045b15be5a4c42f0d5cd8afd83b8745fab1f241ebbdb879113961f8054975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
