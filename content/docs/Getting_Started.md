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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRTI5SB5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyvgvpuJLEVz4pfpQ52l%2BO5xI9FIlUGyPiuP8avYvIGQIgTvZ15L%2Fw1Lttn3l1FQNP62zrWpTTAlG6tBLjAp7oCqwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyJcR0AtvTNG57yrircA74FnOYrEAC8xqMIMCCrgYl%2BSlb9NCwSPDvuPmREb9kLHnjRIOO%2F89FJsDfyfWWfaicEKTZczgBRYuW7xuy3%2BWsmWZioLJla49uR5jSV6LoDYdfq8j9NnOkQ44BPXETk5ef8VNwO9yYzyCseNeDFH4BYYUbbRlWjci%2F6VPaHzOjhObQO422WyIPKXs8fk1Z7vn8Yv3cOoOlgyuXT5NiPDp5dpeIobUd%2F7d0t5uZIPfT0vLKi029P5k7QBHaTHfbX9XwE9kkkxsmfGrXSsitBPUKXViAGAxedrgytgTEZplvQFklj%2BRQUlkND24ERyStAzmge9mGWq0%2BuC9i1NYGSSJ4DqDOefjmKZ6tO1%2F6nRDdQXYPga20HQoNGhWgQrJ6%2BJ%2F%2Bd6tCFeEpxO97tseLL%2FWmNgrz%2BSt54Fju7HdFT%2FKHdmImJ%2Bd6OtGYUjbgG72Or%2F4SwepnlqhjiytYPWPzm7wYTFnu326rpxTlHm5NPL9SSqfNn1sa%2B8I0VzSYQx8dJkN8bLVk9JRX3EZQRPsV4G9Eip%2BHgv1Rwqdig7vx32%2Bd3gAEPkn8U%2Fj6uKKw4h0Z7%2BXvJnwA%2F%2F8rNX71oqxcx3pQ1UkHWqiuEPwRlnXNPe07FPtfPAwJBqEEhpZRyMNfapsQGOqUBBYAfFtwCIIETbEnXAd4a9WZ1v8ABFSu0webPp7UprAhU14peKuj3QN%2FQW4bYmGM%2B5aLAp6Ui7uulo6vN%2BEEPZ%2BUz8NSPEuujn%2BtHDHx27%2B1ZFrXJYOeqMjw4tzNx4gG81fLI8Ep0HervFKdiutVCEqlKp4H%2BxbN7vBttfNCZ1tH8R%2BEoQUwNIlW%2B1GeSGM9VDNqjZgNwt1qZko2DLgDnBqnI1RS%2F&X-Amz-Signature=806a456c01c79bfd4c0963b6d5d4ab34e6e117ad177255b35a687c77a0437b44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRTI5SB5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyvgvpuJLEVz4pfpQ52l%2BO5xI9FIlUGyPiuP8avYvIGQIgTvZ15L%2Fw1Lttn3l1FQNP62zrWpTTAlG6tBLjAp7oCqwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyJcR0AtvTNG57yrircA74FnOYrEAC8xqMIMCCrgYl%2BSlb9NCwSPDvuPmREb9kLHnjRIOO%2F89FJsDfyfWWfaicEKTZczgBRYuW7xuy3%2BWsmWZioLJla49uR5jSV6LoDYdfq8j9NnOkQ44BPXETk5ef8VNwO9yYzyCseNeDFH4BYYUbbRlWjci%2F6VPaHzOjhObQO422WyIPKXs8fk1Z7vn8Yv3cOoOlgyuXT5NiPDp5dpeIobUd%2F7d0t5uZIPfT0vLKi029P5k7QBHaTHfbX9XwE9kkkxsmfGrXSsitBPUKXViAGAxedrgytgTEZplvQFklj%2BRQUlkND24ERyStAzmge9mGWq0%2BuC9i1NYGSSJ4DqDOefjmKZ6tO1%2F6nRDdQXYPga20HQoNGhWgQrJ6%2BJ%2F%2Bd6tCFeEpxO97tseLL%2FWmNgrz%2BSt54Fju7HdFT%2FKHdmImJ%2Bd6OtGYUjbgG72Or%2F4SwepnlqhjiytYPWPzm7wYTFnu326rpxTlHm5NPL9SSqfNn1sa%2B8I0VzSYQx8dJkN8bLVk9JRX3EZQRPsV4G9Eip%2BHgv1Rwqdig7vx32%2Bd3gAEPkn8U%2Fj6uKKw4h0Z7%2BXvJnwA%2F%2F8rNX71oqxcx3pQ1UkHWqiuEPwRlnXNPe07FPtfPAwJBqEEhpZRyMNfapsQGOqUBBYAfFtwCIIETbEnXAd4a9WZ1v8ABFSu0webPp7UprAhU14peKuj3QN%2FQW4bYmGM%2B5aLAp6Ui7uulo6vN%2BEEPZ%2BUz8NSPEuujn%2BtHDHx27%2B1ZFrXJYOeqMjw4tzNx4gG81fLI8Ep0HervFKdiutVCEqlKp4H%2BxbN7vBttfNCZ1tH8R%2BEoQUwNIlW%2B1GeSGM9VDNqjZgNwt1qZko2DLgDnBqnI1RS%2F&X-Amz-Signature=84bd0dc064af1088a39ef6da5d3d3dbc6abaec4afa57a888b80160f14f2a8a5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRTI5SB5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyvgvpuJLEVz4pfpQ52l%2BO5xI9FIlUGyPiuP8avYvIGQIgTvZ15L%2Fw1Lttn3l1FQNP62zrWpTTAlG6tBLjAp7oCqwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyJcR0AtvTNG57yrircA74FnOYrEAC8xqMIMCCrgYl%2BSlb9NCwSPDvuPmREb9kLHnjRIOO%2F89FJsDfyfWWfaicEKTZczgBRYuW7xuy3%2BWsmWZioLJla49uR5jSV6LoDYdfq8j9NnOkQ44BPXETk5ef8VNwO9yYzyCseNeDFH4BYYUbbRlWjci%2F6VPaHzOjhObQO422WyIPKXs8fk1Z7vn8Yv3cOoOlgyuXT5NiPDp5dpeIobUd%2F7d0t5uZIPfT0vLKi029P5k7QBHaTHfbX9XwE9kkkxsmfGrXSsitBPUKXViAGAxedrgytgTEZplvQFklj%2BRQUlkND24ERyStAzmge9mGWq0%2BuC9i1NYGSSJ4DqDOefjmKZ6tO1%2F6nRDdQXYPga20HQoNGhWgQrJ6%2BJ%2F%2Bd6tCFeEpxO97tseLL%2FWmNgrz%2BSt54Fju7HdFT%2FKHdmImJ%2Bd6OtGYUjbgG72Or%2F4SwepnlqhjiytYPWPzm7wYTFnu326rpxTlHm5NPL9SSqfNn1sa%2B8I0VzSYQx8dJkN8bLVk9JRX3EZQRPsV4G9Eip%2BHgv1Rwqdig7vx32%2Bd3gAEPkn8U%2Fj6uKKw4h0Z7%2BXvJnwA%2F%2F8rNX71oqxcx3pQ1UkHWqiuEPwRlnXNPe07FPtfPAwJBqEEhpZRyMNfapsQGOqUBBYAfFtwCIIETbEnXAd4a9WZ1v8ABFSu0webPp7UprAhU14peKuj3QN%2FQW4bYmGM%2B5aLAp6Ui7uulo6vN%2BEEPZ%2BUz8NSPEuujn%2BtHDHx27%2B1ZFrXJYOeqMjw4tzNx4gG81fLI8Ep0HervFKdiutVCEqlKp4H%2BxbN7vBttfNCZ1tH8R%2BEoQUwNIlW%2B1GeSGM9VDNqjZgNwt1qZko2DLgDnBqnI1RS%2F&X-Amz-Signature=29ed894f4b774d3a30585deaa227230303ff8c8e23e6b164f5403e5fedd3ac16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KQJG7GD%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIVaWp7ckdWMZoZCeoqk%2BlUJJ1i6JGKS4dnv3%2Bh9%2B6WwIgRNPxU%2BXmI7yqn4fU8Us1REd%2FoBw6peZkKURTLpbwsGIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnjwvUHuwGn40lYnircA4%2FEuUff3bS3DmJTObPHuJLfnu0lsvaaf%2B7rOe6A%2Be5naxQuCv3hQ%2BfIjDGnanFT8loTJCPusHBp44SrFiMgvD6EB9gezbtAwZaKXghPOPJPLS4EzQ42Kn%2FTnkIvyEr4Qcd1fP%2FI0M7qNK5nZRh4XzAjU4m4M215FRHk8KKkkLNGAkNvPoXkHRBZ0LalhptJr4EvmNXj4oB73ZmMxRe7pMwwcjxJAveZm504%2FLEOoZ3yLN4Im7KCmUjS9Z%2BB6TYKlp5FiXTrorsD6vCKRlui0CbD8AWNi%2BzVE9gM%2FZApa2NMNAx3XoJNzP9RS%2Fs86J1Us%2BEZmyzOKWgHM6J8dfU1UkFM2BOHf34lnQLeYeAzGWfrvLreNLOaNNB6PeaMaP2j0ABay2nz5nUP73l24sP4wH%2FD6mWDkV4ASOQkyJHVv6rgaGo1CRayOzBILseDTCIUtqvLWdVAW7WQqI%2BJ%2FOOoi6wXl%2FWhNfdMt%2BP4CHMqvK059gFw9e5PmnlQeTNz51TZQTXvrmuE8142fs1%2FtomIdZQ0kndu3ZWrmvmeipyuQwTjQzYKa9wyDQ7%2BHbpUuHL33FbGAcgtx5UxQzJEktCm%2B1FcEtdblfgaUAGlzRcyNS629XLZ%2BlV0qlqWoaeIMLzapsQGOqUBZhD%2F6o%2F9IuMpoBxpLOMrwGogwRlSUk1uxl1Bb0%2Bzu9tDQkhHax%2FdGqctlrVy39i79TZvit3Hj4fPTOSoNfkl%2BYYkXLoKP7VnVW4BDBP0vrSPiebKGgbKwE5U4VmnaUq6GxHTGPRdvohvQlRRrRyLde58cg24b7Igj3AYqR8aY3WjqUAnUu7rvD82M7AwX6m8IWpg2uIBoJntKqcH4aZI0YXg9XVD&X-Amz-Signature=73d963ff3955790ced6ba190d0c64de227a872f8e8b74d758c84e6bde13fe780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO2U77QJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4cxRAgAx2NXSxBxaA4T9ccolFIVechZDIs40codMlVAIhALX02uFZ%2FXFKzttWsQP1vyONS9JWUwXRQUYnNeyt5rfRKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvR6uS%2FBarU%2BvX1Qkq3APqKLgPvRC3p6rbTZ62owKXFI54Z4remirtEStlFUt4fNzCb9267U21C%2BsWO7A3f9B2StV9M0znzgxSm%2BE1%2FupvXp8bfNAiQ5AooxGnNzjLB3vh9zyhYKccKodvZqKkz8qRZcVRObR%2F1p9%2FuUqonOt2yQMOJasJ9OYAOQ6kPXHnfNbdHx9RL3XovxZTcqAM5Hzy7ayxbQLJ133GK2ebnXlG6ZHNSQtWd%2B0z7M9EfQpLzLPlDGUEnRXvCnaEE%2BFf%2FaPgeuWarxKRbPkqA1Xfqmuw9Mk1d3CRhD7uqkOfucdZH8GIpR3LuxdM1goGdNkuqknGtWutK1OJAcrFzsdhdnivspMNUu02g%2B33XASthZmri7OKsDzs9sayx4Exn80IKMnySQbVvPFv9d0IvVvkWHQ4IfXCcWY8YhGw%2FMQozR3jmLg99Am4HvaAkGwsWh%2Fdxxtp5ij1urCF7kYzOwb4suKl3sCKCSTTOjmGjJsObhI%2FPKYHTzZ7ElRngdyx2jBoGLRsFu90lUu3h%2FR2NmvBTMxDedbFenu1wkhOvnnRvbfJlmmlezSlUxTLSDu38IsaLq%2F9m6P0El9ZGPnB23K6DYU%2FxFRkTEBGKPA%2BlZxICEClePLfMTzqAoNWJC%2FhJDCG2qbEBjqkAe9KzNlsrkWKbYzV0cVuASK24%2FkUWY716Sp4q6yjp7h6bXs4QXRuZF96Q%2BaM19Xbje0j1sbTCy%2BlHxE4qQ27ZkMxdOjrHspJ8D2Sx1Fmg4FgReMugUNfn%2FU5ZaoBru2F6GLOhqBPLwLH8oUNNjxF20mp0HCW2X%2FUM7nzieN2fW9YjWofl4jvO%2BW01X15DjnfMyLz238N88QHMEiXXW6Bg%2BdJAW9l&X-Amz-Signature=2f31528b9f8222a7aa1ae350052a66b9763206899337bcfa30685c9ab3e725cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRTI5SB5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyvgvpuJLEVz4pfpQ52l%2BO5xI9FIlUGyPiuP8avYvIGQIgTvZ15L%2Fw1Lttn3l1FQNP62zrWpTTAlG6tBLjAp7oCqwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyJcR0AtvTNG57yrircA74FnOYrEAC8xqMIMCCrgYl%2BSlb9NCwSPDvuPmREb9kLHnjRIOO%2F89FJsDfyfWWfaicEKTZczgBRYuW7xuy3%2BWsmWZioLJla49uR5jSV6LoDYdfq8j9NnOkQ44BPXETk5ef8VNwO9yYzyCseNeDFH4BYYUbbRlWjci%2F6VPaHzOjhObQO422WyIPKXs8fk1Z7vn8Yv3cOoOlgyuXT5NiPDp5dpeIobUd%2F7d0t5uZIPfT0vLKi029P5k7QBHaTHfbX9XwE9kkkxsmfGrXSsitBPUKXViAGAxedrgytgTEZplvQFklj%2BRQUlkND24ERyStAzmge9mGWq0%2BuC9i1NYGSSJ4DqDOefjmKZ6tO1%2F6nRDdQXYPga20HQoNGhWgQrJ6%2BJ%2F%2Bd6tCFeEpxO97tseLL%2FWmNgrz%2BSt54Fju7HdFT%2FKHdmImJ%2Bd6OtGYUjbgG72Or%2F4SwepnlqhjiytYPWPzm7wYTFnu326rpxTlHm5NPL9SSqfNn1sa%2B8I0VzSYQx8dJkN8bLVk9JRX3EZQRPsV4G9Eip%2BHgv1Rwqdig7vx32%2Bd3gAEPkn8U%2Fj6uKKw4h0Z7%2BXvJnwA%2F%2F8rNX71oqxcx3pQ1UkHWqiuEPwRlnXNPe07FPtfPAwJBqEEhpZRyMNfapsQGOqUBBYAfFtwCIIETbEnXAd4a9WZ1v8ABFSu0webPp7UprAhU14peKuj3QN%2FQW4bYmGM%2B5aLAp6Ui7uulo6vN%2BEEPZ%2BUz8NSPEuujn%2BtHDHx27%2B1ZFrXJYOeqMjw4tzNx4gG81fLI8Ep0HervFKdiutVCEqlKp4H%2BxbN7vBttfNCZ1tH8R%2BEoQUwNIlW%2B1GeSGM9VDNqjZgNwt1qZko2DLgDnBqnI1RS%2F&X-Amz-Signature=07bb1dab7220cd070c625e78d6baaf69be504aa72d442c57d71188db334567f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
