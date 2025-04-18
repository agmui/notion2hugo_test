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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFPRQB2J%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH57thRZHRlnIJ7%2FbvqOnzSE%2BhcKSmc8dmzI9cNaTTWhAiEAmTmCJbBbB8rR0LYhLPeSa0V5cxev0h%2FrKgUYNhOYkk4q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDPY7hI45%2BFlCgqfdHyrcA1Ooqcj%2F9y3YXO65h%2Buddr19QgEapz1UvE%2BDS5az7m30D5WFhbHtDhBHfzfTXlZW9BxhlOVUF89z5b%2BzSMgqEDtiNZaKHWyRuk%2BrGLNaTgK0LBo2VRjJ3mk%2BsVwktZ9fuXIC%2BRMM6nB2GK6lGwcH4mvojgt8XBd98ZSZMQlJHjp7H05HkUjRicwyS93VkPi7pztPh5K1dJ9klQ1BcHCZ7nDuQo4CyUvSfmSojJVuZFeQUIYIr0EmkN2zO83C7KUO1cRjxMR5MdFa5GPAZ7MpO8oMzlADzCyEB1%2BjQII3Y%2BSsD%2FqgjkPwGLOTk4t2foksiAGn315fKzrVLm0X6y5%2FS9UwdpaICEGjOw9fNkqCjZAOk93bkIlgKSAp%2BZkP4EiJi1j7sqLWgqBinSEz84s9KXz7bsWKEfM9Z2Jpog688tGJhc71nGsAIM%2B6pGVdMP8JV2TVEd3XxnpR%2FaG%2F15lrs%2BA%2FFT%2FCam45WcXnwdejce8Adn8EdICv42Oe4nWSkaX2kyrGljlmjgWw3pypHJSYWUNGCK%2FfydM6dCMtvMUmsDQjY7drC9ZJw3Dg84NcS%2BuUF6b2rDK4PzSrBZyZ8cbV6kfIzxuzf374Kqm8wAJLF9ykFKNEzWMzRWXJGC35ML6Yi8AGOqUBqULziGVgitFk4%2Fvi93DsHeEHGRqkn9Jr2WGNRMOXWPPt3l%2BARyJiT9gGxBlV8sWBcE%2BEo63LdGRuXlyXHtgsu%2Bqh3IK4y69TEjNBZrAKFQq8d6GHiXyAphq0BazcGdKd2W6YrDwLpsUzDiHk01L4rk0Bmk6A5OmylWN9mENqRE%2BOGoqFwpzTCtuyhTBxM0Rz8Oj3%2FWa8FR%2BbMY5runXrxgO25Qov&X-Amz-Signature=64629cca75e365b251469b0bd45f4eb0b5fb55c4c030ae355d265ec148e5498f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFPRQB2J%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH57thRZHRlnIJ7%2FbvqOnzSE%2BhcKSmc8dmzI9cNaTTWhAiEAmTmCJbBbB8rR0LYhLPeSa0V5cxev0h%2FrKgUYNhOYkk4q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDPY7hI45%2BFlCgqfdHyrcA1Ooqcj%2F9y3YXO65h%2Buddr19QgEapz1UvE%2BDS5az7m30D5WFhbHtDhBHfzfTXlZW9BxhlOVUF89z5b%2BzSMgqEDtiNZaKHWyRuk%2BrGLNaTgK0LBo2VRjJ3mk%2BsVwktZ9fuXIC%2BRMM6nB2GK6lGwcH4mvojgt8XBd98ZSZMQlJHjp7H05HkUjRicwyS93VkPi7pztPh5K1dJ9klQ1BcHCZ7nDuQo4CyUvSfmSojJVuZFeQUIYIr0EmkN2zO83C7KUO1cRjxMR5MdFa5GPAZ7MpO8oMzlADzCyEB1%2BjQII3Y%2BSsD%2FqgjkPwGLOTk4t2foksiAGn315fKzrVLm0X6y5%2FS9UwdpaICEGjOw9fNkqCjZAOk93bkIlgKSAp%2BZkP4EiJi1j7sqLWgqBinSEz84s9KXz7bsWKEfM9Z2Jpog688tGJhc71nGsAIM%2B6pGVdMP8JV2TVEd3XxnpR%2FaG%2F15lrs%2BA%2FFT%2FCam45WcXnwdejce8Adn8EdICv42Oe4nWSkaX2kyrGljlmjgWw3pypHJSYWUNGCK%2FfydM6dCMtvMUmsDQjY7drC9ZJw3Dg84NcS%2BuUF6b2rDK4PzSrBZyZ8cbV6kfIzxuzf374Kqm8wAJLF9ykFKNEzWMzRWXJGC35ML6Yi8AGOqUBqULziGVgitFk4%2Fvi93DsHeEHGRqkn9Jr2WGNRMOXWPPt3l%2BARyJiT9gGxBlV8sWBcE%2BEo63LdGRuXlyXHtgsu%2Bqh3IK4y69TEjNBZrAKFQq8d6GHiXyAphq0BazcGdKd2W6YrDwLpsUzDiHk01L4rk0Bmk6A5OmylWN9mENqRE%2BOGoqFwpzTCtuyhTBxM0Rz8Oj3%2FWa8FR%2BbMY5runXrxgO25Qov&X-Amz-Signature=2716e54abf789aaa67147d089ef901ef2aa4820c6a02b6d0b7e708155cb47cdc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XQGXCP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR04RUoyvDpVWXDm7qZuL6r73eeiW5K4P7LXZzkgV9PQIhANPyMZc%2B1Pn4berkWs0jW9fbvjEM3ga2ewvu%2BPnM52IYKv8DCH8QABoMNjM3NDIzMTgzODA1IgwYPxcwWZJqIW3l%2B%2BYq3ANhezpdkKaWPBap01cl8s9whzL%2BoRi9JSF%2BUsHXp9IfiXWTCNUgop3Zc%2F1VJkTyObNM3%2FczOiqvlpN7ggfigXOMix%2FDrXAT6jygcxgGFCXcM8wX4QBJWzl%2Ft55hveioV80IWFAlFxc9Lr5OrPABkJ%2ByfzZsuslszDBeXZqROJx7thZM2dJr4o3CR%2BrtfofioIXysDIh5nxrlOmgqnBH7aItIS4S5%2BcqZBRTq%2FcODLONr0GgK7GTae0MOmdSI3DYIf3cl%2Fhg%2B3KqzfqWBWURTpm6WJfuetCC%2FClyCvTzUfv6I0RhMViO0gAqUQzxth7ORaNcr0LsmvtlRNU5wauyTnUInVBPkG6wvYMjQ8RWjsUElSZ8WEVWh5sjZQ870fC1YlVQr7NzmO6zeWC1SZZWr7wDKRfGzqrPNeyFPwoIeBYyEgzwVRieJKVW378tDPJ7IJXulFDvfhMpgKRAXc90iMLuOUbs4XCCkkqit5M2iqNEfvBTPLCSfZCa0JHW%2FOslPYJO6jivud9qPrqJgiaFfaajZbZWaOEyWjkNyFEt84t1VzfIcf5vDD5Up3V4nF9mvORI4iY7jp3XTF8XusIIW9FNQPKTw7vwQKLZMf8ElHnukfBF4qWhJxR8riQfiTCImYvABjqkAZjOrPjlgq%2FjLW%2BPY12%2BsAitKmY%2FWO3Ngs1gFjheyaLT2RGwhotnQlF3QE53OLhtErdhJckAY4JadWkROZfWtNOar8JxZVg31mXB0xxvR%2FwOMCLp67FkVxBkNnuXRXu3IIp8PGsim6bOO4wa%2BRgyOSDbcBcxEFUMstAmGqNrALZHifo%2BdHGhWmS9tGDK0ZeB0w12M8j2BCgVHyBVpDM8DIY7whtz&X-Amz-Signature=827deb50f4ea0b2f6e2c8f265d2c89f07aded0803a8e6f6811d934819206bd71&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYVQ7SOI%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWcTSM7DM7oos0NGc6pZDh%2FwOCniYbXnM1vEgCyJi%2B%2FAiBkZVvNNtgBDp0NJgPBBymVWgIRh5a%2FFdYlcjLWNPwy%2Fir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMvyw%2BcLRTU%2F%2BE5kzSKtwDkx6gryc7d%2FKBcYTwA5eNqbpVH0SjOoKDbf46r9uooAKDA2WMVBjv5sjfeLu%2B26M2ms8v8CsSnCWuBE%2B18tGQiHrVp0yY3Nx0V50QHQO67SCjh7cfk3WMdNqiKNfuX7xbk4T146PHIdIFKX%2FD%2Fyjb4TencfR1VzwP8fJZLzibtc5cRpCeYe23VNGD614HR21wPxNzOkCgvNvGngCZv4W6sQZANEK8Z06H5kRuBn%2F6xlFg40COXkrce5f%2B%2BrLSSaPuGl1o652wlQVr6DZWnKkYlk7Zw6zCu6ASn8jyFjmcjImhUgisRj2GiOkPTv7bbS2uqRZH5%2B3ywM6QIXYswXxWexkN1%2FsTrRkOS8qMNwpvBxeyGnkEjtYlbjc%2B%2BoOwpiSyrECtWH77dmBpXAp5d5hGrNDKwgCbaH6aOy9bIzets%2FIlbJUly%2F5kTjDe%2Fa8yxf0QRmy2iKL0N04d1BqtcVzMhVA7Tl4j9JVGJZHii1W7FCelYsQ17WdzY2uyt3A%2Fq4G5lPJSBFqb2D1VIi%2Fq6jRAMTCoNPJSalPTzN1VXyOn8PR%2FeEhfIIwxCZ%2BOIbdz%2BsgNgSDvScAZ0dQ02Bkl%2B214vuj5sWyl1ynYVgUkZf%2FzgtGCPaZql4WmpCj6cfQwypiLwAY6pgE8%2FTFc5Q3SWw6cwwZHYGkmLV9AzwuOVQP1tgwsQrMUGJJLVtsFmEOuohShg%2F2eGAq951pla5TbB9RH7%2B6rrWMF4CGsb%2BgMgoFq3j0i3eGDiHI8X%2FWe%2BTANhSln2cn%2FGh3XtbtYfElObxpNv1UK%2Fug%2F5dXrhQwmO1DPrRKO91F3yuxt1pjSyIVSmdbsEzdHrEo3dDB3OvO%2BqgeUf8kVWQmaBjxLrGrr&X-Amz-Signature=16f1d2b97a6b0a4d9a30270b030a2cf03ad9d84fac9a2db5963d4069124e9ff7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFPRQB2J%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH57thRZHRlnIJ7%2FbvqOnzSE%2BhcKSmc8dmzI9cNaTTWhAiEAmTmCJbBbB8rR0LYhLPeSa0V5cxev0h%2FrKgUYNhOYkk4q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDPY7hI45%2BFlCgqfdHyrcA1Ooqcj%2F9y3YXO65h%2Buddr19QgEapz1UvE%2BDS5az7m30D5WFhbHtDhBHfzfTXlZW9BxhlOVUF89z5b%2BzSMgqEDtiNZaKHWyRuk%2BrGLNaTgK0LBo2VRjJ3mk%2BsVwktZ9fuXIC%2BRMM6nB2GK6lGwcH4mvojgt8XBd98ZSZMQlJHjp7H05HkUjRicwyS93VkPi7pztPh5K1dJ9klQ1BcHCZ7nDuQo4CyUvSfmSojJVuZFeQUIYIr0EmkN2zO83C7KUO1cRjxMR5MdFa5GPAZ7MpO8oMzlADzCyEB1%2BjQII3Y%2BSsD%2FqgjkPwGLOTk4t2foksiAGn315fKzrVLm0X6y5%2FS9UwdpaICEGjOw9fNkqCjZAOk93bkIlgKSAp%2BZkP4EiJi1j7sqLWgqBinSEz84s9KXz7bsWKEfM9Z2Jpog688tGJhc71nGsAIM%2B6pGVdMP8JV2TVEd3XxnpR%2FaG%2F15lrs%2BA%2FFT%2FCam45WcXnwdejce8Adn8EdICv42Oe4nWSkaX2kyrGljlmjgWw3pypHJSYWUNGCK%2FfydM6dCMtvMUmsDQjY7drC9ZJw3Dg84NcS%2BuUF6b2rDK4PzSrBZyZ8cbV6kfIzxuzf374Kqm8wAJLF9ykFKNEzWMzRWXJGC35ML6Yi8AGOqUBqULziGVgitFk4%2Fvi93DsHeEHGRqkn9Jr2WGNRMOXWPPt3l%2BARyJiT9gGxBlV8sWBcE%2BEo63LdGRuXlyXHtgsu%2Bqh3IK4y69TEjNBZrAKFQq8d6GHiXyAphq0BazcGdKd2W6YrDwLpsUzDiHk01L4rk0Bmk6A5OmylWN9mENqRE%2BOGoqFwpzTCtuyhTBxM0Rz8Oj3%2FWa8FR%2BbMY5runXrxgO25Qov&X-Amz-Signature=b1fc22e309b81af9e4e53e9c373af3852cb7eb6e30d602b628f0cd3c1298196c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
