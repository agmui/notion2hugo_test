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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEWKIRQG%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVUA6mmeS6DE%2F3gcVagbzw704PK%2FLJ%2FueX2z2Gf88xEgIgH7mHMsVm43SqZym3g1fWNZ8WbI1lLBLT%2B101Ep6S8XwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1eR4cLOyNEW2PgwSrcA%2F5UKDY5Z9TmURRV3OGI93qI4E1%2Fitn1baZgoUyzvr%2B%2Fn9qXIh%2Fxndj6Z%2FGw8DIQCK%2BCdySBsbPy3HUQsuzZsSLw08jYdj1Njb8hOupgZV1fgv2WAHM4vMV2ex7VINXljnybLAJEgelUKaAHCRO39Tg4Mv8XjCr4Ee7jStJi72Ls%2FUKJz9wrjZxmmlVx9n4pO5X28daUcodXavU3woFUwK4LueWqm2V%2B2nMZlKNTJRuEgJKiTyeDBY6viWaTITcBPciINkiZSiAOKJTmMRK8hBXwOW8nMtTj6qmR0lzWHdEiruxKhKEEPRUES7RmqKx5EmrEY7ONyD294s6%2B5I5Wrhp%2FZFyxa2yGGDrmbZ04bSYX5t1%2BEZ5SzMfRNuqInf2aOxWmJFozP3V1CVg5Wbk9N5dtvOr5Glvf%2FtArgg8sA%2BcMs4jGWu1EjZPHJC3eMw6vTj79sn5%2BrSVqq%2B0lTi7WGAzHhHZumScKVKmp5zvEi%2F5WIXjW2SXYIwdpeMe%2F0%2Bbo18Nz2Jzwl%2BD00oQJZwykKhC0xRD4cBGIuHEaFoFPZMe1qfOoloE3haZKdFxituISpO4Ngt7ICzqpAjp%2FZh7jzP%2FAm5mAUyXMmKBYIbi2FCJzUKX2sIcdiIj0SszgMJujtMEGOqUBy67A1ULRR7Y6eoSkbrlHl2N%2BdqFRRV1B7GPBysgJ57tg6yE2Pl%2BI6IKqSK9Pl%2FF03OMEbcVLovMJv2HZzHFvWX3lEtA9QF0fJ7KACwHIErTNqJPd9UCxVvD7XQ9wbJsywMpnuXtC3caC1OFTv6yzkjKiIAcm1Pf73TqTAKBSjYWvIsC%2BjY5J1X6TiIR4fCBvmC1oHbfXxvPdIBtEHsfg1pdr6vax&X-Amz-Signature=6b3d2bc761866e457eb9a39ca5ab1b2134c1b3e37ea0e7233806ae506e7e7c01&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEWKIRQG%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVUA6mmeS6DE%2F3gcVagbzw704PK%2FLJ%2FueX2z2Gf88xEgIgH7mHMsVm43SqZym3g1fWNZ8WbI1lLBLT%2B101Ep6S8XwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1eR4cLOyNEW2PgwSrcA%2F5UKDY5Z9TmURRV3OGI93qI4E1%2Fitn1baZgoUyzvr%2B%2Fn9qXIh%2Fxndj6Z%2FGw8DIQCK%2BCdySBsbPy3HUQsuzZsSLw08jYdj1Njb8hOupgZV1fgv2WAHM4vMV2ex7VINXljnybLAJEgelUKaAHCRO39Tg4Mv8XjCr4Ee7jStJi72Ls%2FUKJz9wrjZxmmlVx9n4pO5X28daUcodXavU3woFUwK4LueWqm2V%2B2nMZlKNTJRuEgJKiTyeDBY6viWaTITcBPciINkiZSiAOKJTmMRK8hBXwOW8nMtTj6qmR0lzWHdEiruxKhKEEPRUES7RmqKx5EmrEY7ONyD294s6%2B5I5Wrhp%2FZFyxa2yGGDrmbZ04bSYX5t1%2BEZ5SzMfRNuqInf2aOxWmJFozP3V1CVg5Wbk9N5dtvOr5Glvf%2FtArgg8sA%2BcMs4jGWu1EjZPHJC3eMw6vTj79sn5%2BrSVqq%2B0lTi7WGAzHhHZumScKVKmp5zvEi%2F5WIXjW2SXYIwdpeMe%2F0%2Bbo18Nz2Jzwl%2BD00oQJZwykKhC0xRD4cBGIuHEaFoFPZMe1qfOoloE3haZKdFxituISpO4Ngt7ICzqpAjp%2FZh7jzP%2FAm5mAUyXMmKBYIbi2FCJzUKX2sIcdiIj0SszgMJujtMEGOqUBy67A1ULRR7Y6eoSkbrlHl2N%2BdqFRRV1B7GPBysgJ57tg6yE2Pl%2BI6IKqSK9Pl%2FF03OMEbcVLovMJv2HZzHFvWX3lEtA9QF0fJ7KACwHIErTNqJPd9UCxVvD7XQ9wbJsywMpnuXtC3caC1OFTv6yzkjKiIAcm1Pf73TqTAKBSjYWvIsC%2BjY5J1X6TiIR4fCBvmC1oHbfXxvPdIBtEHsfg1pdr6vax&X-Amz-Signature=dc8bb8ca4f7c85f420ba28acacc174dc32c3d01d7c36b1c901236d2943a7e53a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEWKIRQG%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVUA6mmeS6DE%2F3gcVagbzw704PK%2FLJ%2FueX2z2Gf88xEgIgH7mHMsVm43SqZym3g1fWNZ8WbI1lLBLT%2B101Ep6S8XwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1eR4cLOyNEW2PgwSrcA%2F5UKDY5Z9TmURRV3OGI93qI4E1%2Fitn1baZgoUyzvr%2B%2Fn9qXIh%2Fxndj6Z%2FGw8DIQCK%2BCdySBsbPy3HUQsuzZsSLw08jYdj1Njb8hOupgZV1fgv2WAHM4vMV2ex7VINXljnybLAJEgelUKaAHCRO39Tg4Mv8XjCr4Ee7jStJi72Ls%2FUKJz9wrjZxmmlVx9n4pO5X28daUcodXavU3woFUwK4LueWqm2V%2B2nMZlKNTJRuEgJKiTyeDBY6viWaTITcBPciINkiZSiAOKJTmMRK8hBXwOW8nMtTj6qmR0lzWHdEiruxKhKEEPRUES7RmqKx5EmrEY7ONyD294s6%2B5I5Wrhp%2FZFyxa2yGGDrmbZ04bSYX5t1%2BEZ5SzMfRNuqInf2aOxWmJFozP3V1CVg5Wbk9N5dtvOr5Glvf%2FtArgg8sA%2BcMs4jGWu1EjZPHJC3eMw6vTj79sn5%2BrSVqq%2B0lTi7WGAzHhHZumScKVKmp5zvEi%2F5WIXjW2SXYIwdpeMe%2F0%2Bbo18Nz2Jzwl%2BD00oQJZwykKhC0xRD4cBGIuHEaFoFPZMe1qfOoloE3haZKdFxituISpO4Ngt7ICzqpAjp%2FZh7jzP%2FAm5mAUyXMmKBYIbi2FCJzUKX2sIcdiIj0SszgMJujtMEGOqUBy67A1ULRR7Y6eoSkbrlHl2N%2BdqFRRV1B7GPBysgJ57tg6yE2Pl%2BI6IKqSK9Pl%2FF03OMEbcVLovMJv2HZzHFvWX3lEtA9QF0fJ7KACwHIErTNqJPd9UCxVvD7XQ9wbJsywMpnuXtC3caC1OFTv6yzkjKiIAcm1Pf73TqTAKBSjYWvIsC%2BjY5J1X6TiIR4fCBvmC1oHbfXxvPdIBtEHsfg1pdr6vax&X-Amz-Signature=6720e1b5ad28fc4101e076b951ef403fc87e17b312dbea214f13ec7c7657936c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOUCTSXU%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BmHefYIzSPEWh2J4wmgcXHCXHeayUZnp%2FQGCkH3Ba6AiEAmJGxuHx4Kml20F3nrWv%2BKsvEEoks1FQLmkXOJhwTMi0qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLiOxXte0%2Bmwj9myESrcA8krEDpc7tf2eeqX%2BbAZxcJttp%2BRMYwyZIfjGez%2FS3hXfgKRpCvvXIb3gbSXVncVKBrGaoxASeEwIsDUkwflQH64R3Dk%2F%2Fzhwc5P9tfSYIIvTH2fIcOItYsxFQIXvXRy5ILl9saBDdUK2%2BXze%2FJdwhiRyDEfKfTekAg2g%2Bv6jb2GXLY4g9BQCiE4oFZHx6%2Fd0%2BjtwH0z%2FwHAykRsqkQLXeGJGx7t4YXkZKw6ksva0BsjkeyL0sun8K%2BCTqg%2F7RMlyCoGpUjZG1D6jgPrUBn19dveeuKVq%2BoWhWfQp5WjjPccuP56uPbC32b8DOBlyVGe9mVKknmUKzPHBtooQIuekzJ5iXyu0kDKLFZC6Em7UKpK9ly0aeZHIbotcWOMctwx%2BjFUxBXsjvcE0AhureGxPpAedaJyQ7u4WcfiZGEYFF2XkaWNc52M7NL2d374ZQ%2FsgEYA4MSKGhfstxAjt7RXXTe7SRaR4TCJgpPt7KEpr2WSADPmrYfegWG9EpXsHzJ8OOovONCAqRgLoMQerwuRU85ft4BOnGWpYX4BtUoK1dsk0BQ%2FlPJfn4zNOTUohqa5pseYsuaQ56DZ0TUXJO9RE2jSYV5jZOZGxofRw6yWQC6NWKyQVPRDADasQbwVMNOitMEGOqUBEPosgn62s2dx%2Bf1V1zJniDfeylCa%2BdA9dTNEQ4D%2BoF%2FQZ40scDRR8n1RS8f0NRdEV%2B8IpjMRrRxXU6gjkyLxDClk6V6nLNk4XddXXsO3gYgYA7sLogRlLSnk7anjckFD7cUoQNIQDaMngArb3mZP6wJwm5vObRjq9Kjvqf6lp7lIL%2BSratMxGHH0teSu%2BupVuOqCKAf70V7be5Vjr1FbN3vb0vn4&X-Amz-Signature=a1aac9734ba4a54c5691613b115faed9659e5f841e55afb2db8c8248c3da7ad7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XTD2QNT%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHWCzxV8G386r0l3Kvyxwv6pkHBXeHNzRSfpX4fyV13AiEA6v5XXcpdnfA12e9GCVwEuPNMZTXu5c00gC9gwR%2Fz9foqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQEEOfB%2FWzRJncQjCrcA1xevb78skidDQiIZcF3HB7Bl6c%2BRjDLHF1%2BniYfaPX4QUkhHxnCiDVCSGExegRJNtHrfCckdICEXYZtxFaQbtwakPB18A7yhNEUgHF7Jd8H%2F74RkF7Brr10JdDjtW0Cg7iXVihfYvorm0%2BZYb7dJ5YG1q%2FbKarb9RQO4p7Pd9dUZnFb22oKcgCC7NMTGLps1R%2FFzy5jmaqFOMlAh8r15tBbYHgnCj3f9gB6wTGXgHgXOxzuOkLCJCJP0MvQULDUIH7MnLItubAwerk7gKxUM3HnayBEdlFOLjUnJmOWhEneC%2F4TxTIyy4KPjaYRt2UITI079fIqWkA0VKhWDyZbvur0w%2FyfaO7oPR0VPZZGWchyYEu%2FSlJZEs6tPV5TvfhXyyH2ehhqHO0VCh5PcGP4D1vDgbhVVGWDTJsssdq0QncXXR7vvdUdqRdsVy0dpjxL0ZLs17C1rX0HkaYg9m3tl9Mdu%2FS0ERIkJW6Z9g20NhftX%2BSUo7%2FtR57e%2B5LLIapUnqGJt66nWJdOwDAAGqvBO2QV5oos18M45MokGd9Q3Ns7dHu9fr7hE4b3Oi1AgzVR3%2Fo8x0hd2U%2BJiT06vI%2Bq0XkmlP0QI6E5WI4q2rxQjGncwT%2B5XfDzaMCjNFpvMIejtMEGOqUBYS3OSly6HdL9VnJRjSDsrdGG%2FoKik%2FDvfekB6XdWniymaJMZz8M2PCMMyyZnsyLqPp1lVsckGvj1oluHcG8S%2F2MKDuKyU0KOqNtJgH7NWU81Ep4HYZnA19kGNS2n%2BT%2Bz%2BsH50gIQTtNc4gRP6AJWn6uNLGUcgT23J2cSfhs3zoNe0LO%2BplXMkUN0RlrQh3lIclKEj3d13jG3Q6fhEtz4z%2Fo7Owp%2B&X-Amz-Signature=ab1791bc2db99d91744c918892d231eed70b69bf5a85a61c4db32b973c137065&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEWKIRQG%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVUA6mmeS6DE%2F3gcVagbzw704PK%2FLJ%2FueX2z2Gf88xEgIgH7mHMsVm43SqZym3g1fWNZ8WbI1lLBLT%2B101Ep6S8XwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1eR4cLOyNEW2PgwSrcA%2F5UKDY5Z9TmURRV3OGI93qI4E1%2Fitn1baZgoUyzvr%2B%2Fn9qXIh%2Fxndj6Z%2FGw8DIQCK%2BCdySBsbPy3HUQsuzZsSLw08jYdj1Njb8hOupgZV1fgv2WAHM4vMV2ex7VINXljnybLAJEgelUKaAHCRO39Tg4Mv8XjCr4Ee7jStJi72Ls%2FUKJz9wrjZxmmlVx9n4pO5X28daUcodXavU3woFUwK4LueWqm2V%2B2nMZlKNTJRuEgJKiTyeDBY6viWaTITcBPciINkiZSiAOKJTmMRK8hBXwOW8nMtTj6qmR0lzWHdEiruxKhKEEPRUES7RmqKx5EmrEY7ONyD294s6%2B5I5Wrhp%2FZFyxa2yGGDrmbZ04bSYX5t1%2BEZ5SzMfRNuqInf2aOxWmJFozP3V1CVg5Wbk9N5dtvOr5Glvf%2FtArgg8sA%2BcMs4jGWu1EjZPHJC3eMw6vTj79sn5%2BrSVqq%2B0lTi7WGAzHhHZumScKVKmp5zvEi%2F5WIXjW2SXYIwdpeMe%2F0%2Bbo18Nz2Jzwl%2BD00oQJZwykKhC0xRD4cBGIuHEaFoFPZMe1qfOoloE3haZKdFxituISpO4Ngt7ICzqpAjp%2FZh7jzP%2FAm5mAUyXMmKBYIbi2FCJzUKX2sIcdiIj0SszgMJujtMEGOqUBy67A1ULRR7Y6eoSkbrlHl2N%2BdqFRRV1B7GPBysgJ57tg6yE2Pl%2BI6IKqSK9Pl%2FF03OMEbcVLovMJv2HZzHFvWX3lEtA9QF0fJ7KACwHIErTNqJPd9UCxVvD7XQ9wbJsywMpnuXtC3caC1OFTv6yzkjKiIAcm1Pf73TqTAKBSjYWvIsC%2BjY5J1X6TiIR4fCBvmC1oHbfXxvPdIBtEHsfg1pdr6vax&X-Amz-Signature=5ebe45f755d18ae1a60f79a32b1295c9020fb7697d8a0e236081525cb0f05ab2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
