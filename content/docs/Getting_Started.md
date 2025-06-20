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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JQWUYEY%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe6ZINB9bzlxCrOPxqiHkw3iVf49D6UoaD7Q2BvKDk8AIhAN7t7GmSDXuF76Mx5LtJQDqAVSY9kY1ax5%2BWNzEIKlyLKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FPZGKenxXxdO%2Bvfgq3AMaMtZ953qyMLXYt950YIztSi0tzPY8EC4GEuRtrLdiBQnGFkSlVzOJ8NfF0w92QUn0ZE26WBiYrsiCxDbzvwCgLHPBxXOHuVy4HFXJiaBJkaEu6unq2J%2FIR5ZztIriIpRXCaSVLZchQBRhVFTYtw3SjZadvV958Llnw7n62Y6TR7oyoDd83kb8l6WsWCw0%2BNFgoLBtD%2B5B4xUPWogQxzCwmGkKf0tZsoOULszmj4fqi6k1GIk%2B3ewIapvHMtDD9c2fyAW5rPIDIZSkEEMqn%2FX02LBTu%2FbNJOiScTWAvkQ5h4eLJ7vv64DtpTJ%2FR%2F%2F%2BHgbF31ZT4TrSyovBGgwByZ93IQAcy61xbOR20L1%2Bx8%2Bylzk53P54fHe5bnczlzyXgq1pkPRUERNxPlieMcI0liTWmjT%2BlwqUWzPGy9PoJ%2BBGdZAkvty8I8OJX0UgD7%2BR1TegtPlO83uVtnYHI0lkNDFn4%2FRAq35XMKwK74ockFQSmAg8UghJ3Qg6wj00HEVGv3ByMYICRjyjvTHUtpAA1N6QlQXcT1%2FvHylUOKHisMXMnm0hvfanPPSSAfvm3weOjy9ngoyBWkc%2BZ5B47qBdVqRrXycltElANsa2JoRnjsPYBcJL3ocx3Rr9wFZXZjCl1dXCBjqkATptv5prWxDhjiG6wO4elCP%2FLLIzkjEGOyJ1OPu6eg2np59T7nYLVlTr7O1DBOAWni1qs%2FsiRz9k%2BYiDRGJLFWoQxRqRWCrPWPzhkwmOL189Dz6YEFqUCxD5nxrZI98wZZjweRJ0BBouIxW%2FfEvitQbeLbn%2FlY%2Bm%2Fk7hZkm1w0kjXaRII9IV3iLKxCCR8kL%2FRI6%2Bci%2Fmuu3nGzdVGCDj5RU9Zu6L&X-Amz-Signature=e7c7bd57c255d22af2aba0792679cdbe11e295dc0e1c304647c47795cf82c6b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JQWUYEY%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe6ZINB9bzlxCrOPxqiHkw3iVf49D6UoaD7Q2BvKDk8AIhAN7t7GmSDXuF76Mx5LtJQDqAVSY9kY1ax5%2BWNzEIKlyLKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FPZGKenxXxdO%2Bvfgq3AMaMtZ953qyMLXYt950YIztSi0tzPY8EC4GEuRtrLdiBQnGFkSlVzOJ8NfF0w92QUn0ZE26WBiYrsiCxDbzvwCgLHPBxXOHuVy4HFXJiaBJkaEu6unq2J%2FIR5ZztIriIpRXCaSVLZchQBRhVFTYtw3SjZadvV958Llnw7n62Y6TR7oyoDd83kb8l6WsWCw0%2BNFgoLBtD%2B5B4xUPWogQxzCwmGkKf0tZsoOULszmj4fqi6k1GIk%2B3ewIapvHMtDD9c2fyAW5rPIDIZSkEEMqn%2FX02LBTu%2FbNJOiScTWAvkQ5h4eLJ7vv64DtpTJ%2FR%2F%2F%2BHgbF31ZT4TrSyovBGgwByZ93IQAcy61xbOR20L1%2Bx8%2Bylzk53P54fHe5bnczlzyXgq1pkPRUERNxPlieMcI0liTWmjT%2BlwqUWzPGy9PoJ%2BBGdZAkvty8I8OJX0UgD7%2BR1TegtPlO83uVtnYHI0lkNDFn4%2FRAq35XMKwK74ockFQSmAg8UghJ3Qg6wj00HEVGv3ByMYICRjyjvTHUtpAA1N6QlQXcT1%2FvHylUOKHisMXMnm0hvfanPPSSAfvm3weOjy9ngoyBWkc%2BZ5B47qBdVqRrXycltElANsa2JoRnjsPYBcJL3ocx3Rr9wFZXZjCl1dXCBjqkATptv5prWxDhjiG6wO4elCP%2FLLIzkjEGOyJ1OPu6eg2np59T7nYLVlTr7O1DBOAWni1qs%2FsiRz9k%2BYiDRGJLFWoQxRqRWCrPWPzhkwmOL189Dz6YEFqUCxD5nxrZI98wZZjweRJ0BBouIxW%2FfEvitQbeLbn%2FlY%2Bm%2Fk7hZkm1w0kjXaRII9IV3iLKxCCR8kL%2FRI6%2Bci%2Fmuu3nGzdVGCDj5RU9Zu6L&X-Amz-Signature=25d1cdf2029d584d14fdbe094f81abfbf18f91b9f5806b40a429916010f4a055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JQWUYEY%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe6ZINB9bzlxCrOPxqiHkw3iVf49D6UoaD7Q2BvKDk8AIhAN7t7GmSDXuF76Mx5LtJQDqAVSY9kY1ax5%2BWNzEIKlyLKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FPZGKenxXxdO%2Bvfgq3AMaMtZ953qyMLXYt950YIztSi0tzPY8EC4GEuRtrLdiBQnGFkSlVzOJ8NfF0w92QUn0ZE26WBiYrsiCxDbzvwCgLHPBxXOHuVy4HFXJiaBJkaEu6unq2J%2FIR5ZztIriIpRXCaSVLZchQBRhVFTYtw3SjZadvV958Llnw7n62Y6TR7oyoDd83kb8l6WsWCw0%2BNFgoLBtD%2B5B4xUPWogQxzCwmGkKf0tZsoOULszmj4fqi6k1GIk%2B3ewIapvHMtDD9c2fyAW5rPIDIZSkEEMqn%2FX02LBTu%2FbNJOiScTWAvkQ5h4eLJ7vv64DtpTJ%2FR%2F%2F%2BHgbF31ZT4TrSyovBGgwByZ93IQAcy61xbOR20L1%2Bx8%2Bylzk53P54fHe5bnczlzyXgq1pkPRUERNxPlieMcI0liTWmjT%2BlwqUWzPGy9PoJ%2BBGdZAkvty8I8OJX0UgD7%2BR1TegtPlO83uVtnYHI0lkNDFn4%2FRAq35XMKwK74ockFQSmAg8UghJ3Qg6wj00HEVGv3ByMYICRjyjvTHUtpAA1N6QlQXcT1%2FvHylUOKHisMXMnm0hvfanPPSSAfvm3weOjy9ngoyBWkc%2BZ5B47qBdVqRrXycltElANsa2JoRnjsPYBcJL3ocx3Rr9wFZXZjCl1dXCBjqkATptv5prWxDhjiG6wO4elCP%2FLLIzkjEGOyJ1OPu6eg2np59T7nYLVlTr7O1DBOAWni1qs%2FsiRz9k%2BYiDRGJLFWoQxRqRWCrPWPzhkwmOL189Dz6YEFqUCxD5nxrZI98wZZjweRJ0BBouIxW%2FfEvitQbeLbn%2FlY%2Bm%2Fk7hZkm1w0kjXaRII9IV3iLKxCCR8kL%2FRI6%2Bci%2Fmuu3nGzdVGCDj5RU9Zu6L&X-Amz-Signature=77871c1dad27e713a6da9a87569920b4fe1c2be0c253734993df9b3ce110fe91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6AMMNJ3%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYaKWHBrCQccwqbjFINwkdjKsxJrFNAkCImnjEj0IuMAiBmFpG%2FHmKPE0g%2Bt0ts9zcqSQ9ZWujT743WMdcz5I7WUCqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMih1H5CZo2C%2F7o7SIKtwD%2FzeeegZBgcjIw5YoFxQJpw7JReVqplzlhIOG%2F0jZbi%2BFYkLA%2BrNFMSIKi9OhBKCDoMBERH6kTUbr10%2FctRycZ7bEd0ADOHLERRGzuS2QqLCpMuMLyi2lgyZ0PBDkfYLr2OU%2B91yjNBM%2FaITPfS%2FaKs4gp02b88iil1O7acKffJsGYXVm1opO8dmh6X49FfXxrWk84dknHQ0doVK7fE5lbU%2FdyMhxTX56M7B6rnmeouk894K8CIZ7OxVKYpmLZZMnaptl7DgnW6zK%2BcAehZTcHFg26QpnEW5HGimbI%2FduQvh%2FD19ToKbLwwa4eortxSE90PSNjJkVprv%2F6KUnr%2FLHuffh5TyWBHYPoe4outINz4z%2F15ppRzlN94MTSwLaOPFOC%2FWZyzlEb0ntKXYtRoqkiVksrILjbyswsi2rLR0paS4rDGC1ywA3e5WJSFH26FRtnd5QwDoAbivQHgZhlj%2FB5g%2B4EbILssxf0xZRkbv3%2BSE9f%2F4SBbjkXcVSw%2FRVS69G82WKpgQix5NA84Ho6jSgiC6YcX74t%2F6%2Fc3aP9VRVZh12Pv0hFsta77f3SESJxjmDUBDqnDp2IZ3F0at01nB8CN533NgQTBAqtzuwVByulWXQyz65X7NS1FkqpUYwlLnVwgY6pgESZvhFQXnjGvmKMwOA8ryPu8zSJxBJraEeEN8jk%2BEXcTFq7pU%2BWzGi6a%2B3XQqW%2F%2FpMWztvNlu%2BN%2F6yOgJrGfYI%2FYF0qBJ0Z0wcRGSs7rmgaIaQvzl5ZQhlWo4wjB66PrdRYTAqH71ZkpgbPuOkNYXsZF8dKtJDQmMKy63%2BoRN8TdE%2B4fKytLRwaPrVlw0b%2Fe6DTyvk0gPFdEKLOqftV5Wc4EIgdzEo&X-Amz-Signature=1ae299611b1083b012c72633ee87f4f77e655c9ea71e5e3c737cfd46aa19d17f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBK4DREG%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtotnQOR%2F3QqlgdqXxNaguVLhhicM4hLqYj86IlgodkAiEAlk9JbfNlr20ALS7NVDtsfgbjrcdMizRfg3IL5EcZ%2BL4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXoozqLqBW1A5fXKCrcA8f9tmAjRQuNDuO8mifBHgwJgcqnomWFo9vItVqP3cipwxpeBb9gwK28v8ZCmyTJPoP8zz%2BNqFomJa%2FGLiOoknf39hLZpmVlZVTzEOqoAu2B5LPmA3Hoo8gom8qhXQS7yTtwRAOS2YVXVE4MKUszqPOwWWqC%2BTOyUhMbPa0ky5ioLfVTEdtKRzQr0pRBgpaUjTF83Jtmi4xisJ8S%2F2S5ygB66yI%2BPV8KcTUBDopp%2BrE3rMUfepEQXP5I42GdfXn6OjMecAsleIX6nSk3xsveJ50n%2B32UDJAGcjOr2RGRhH9bmmtSEjv5%2BIj7O93WTlsbXIIAwuMjj%2F7VXUAKHouH3Uj5476LrGJGSXM5%2BuXbyA3evicNDMQL41eyes0S0D6aXYy4iuBCrtLqSvM8ZMT46RB5r4ET2X15W26H8A36Si%2F6LHzZ%2FuX3%2B8JMmDIfrX756o%2Ffzo7AQfG0ln1mPf36H396BqjAk4FmawHWwYPL0OV2T30hbs6OgrHYnAa%2FnwpLwN1EQP6L1Rt7D4Vul8TeJxaU5rwSaZsHJ614cvLyHo1HUgjeneCAmsifX2G0M9uBbcRYJsVf7lH89qLpkyYke%2Bb0Yo%2FCNSqWRUCFrtMBLQyRIeFmHcuMZixsiEo8MOij1cIGOqUBLIQWo8O3VhHJK49DKitKuzioahOBYL1gRwRWQXzfq2EfwlZ9mC53Z868TGP5ecgkDjy6Zcbaig3vFkMUyd39Hp019tANouPV9WJlgXG6fJQqHT858xOeMY0sWg54rvl9jC2s34GTSWQz%2Fsi83%2FmzyEe6HbXyx0Jau91%2BxfePoP2yZWyJLUbz3u1etr1gnuOLRWvwRI%2Bc1HvAAIUj7AC4g8JZe6%2Fu&X-Amz-Signature=0a38fb6ed8001f345235a770e2353045211111bfcc7d767421bfe16ffeea3e25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JQWUYEY%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe6ZINB9bzlxCrOPxqiHkw3iVf49D6UoaD7Q2BvKDk8AIhAN7t7GmSDXuF76Mx5LtJQDqAVSY9kY1ax5%2BWNzEIKlyLKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FPZGKenxXxdO%2Bvfgq3AMaMtZ953qyMLXYt950YIztSi0tzPY8EC4GEuRtrLdiBQnGFkSlVzOJ8NfF0w92QUn0ZE26WBiYrsiCxDbzvwCgLHPBxXOHuVy4HFXJiaBJkaEu6unq2J%2FIR5ZztIriIpRXCaSVLZchQBRhVFTYtw3SjZadvV958Llnw7n62Y6TR7oyoDd83kb8l6WsWCw0%2BNFgoLBtD%2B5B4xUPWogQxzCwmGkKf0tZsoOULszmj4fqi6k1GIk%2B3ewIapvHMtDD9c2fyAW5rPIDIZSkEEMqn%2FX02LBTu%2FbNJOiScTWAvkQ5h4eLJ7vv64DtpTJ%2FR%2F%2F%2BHgbF31ZT4TrSyovBGgwByZ93IQAcy61xbOR20L1%2Bx8%2Bylzk53P54fHe5bnczlzyXgq1pkPRUERNxPlieMcI0liTWmjT%2BlwqUWzPGy9PoJ%2BBGdZAkvty8I8OJX0UgD7%2BR1TegtPlO83uVtnYHI0lkNDFn4%2FRAq35XMKwK74ockFQSmAg8UghJ3Qg6wj00HEVGv3ByMYICRjyjvTHUtpAA1N6QlQXcT1%2FvHylUOKHisMXMnm0hvfanPPSSAfvm3weOjy9ngoyBWkc%2BZ5B47qBdVqRrXycltElANsa2JoRnjsPYBcJL3ocx3Rr9wFZXZjCl1dXCBjqkATptv5prWxDhjiG6wO4elCP%2FLLIzkjEGOyJ1OPu6eg2np59T7nYLVlTr7O1DBOAWni1qs%2FsiRz9k%2BYiDRGJLFWoQxRqRWCrPWPzhkwmOL189Dz6YEFqUCxD5nxrZI98wZZjweRJ0BBouIxW%2FfEvitQbeLbn%2FlY%2Bm%2Fk7hZkm1w0kjXaRII9IV3iLKxCCR8kL%2FRI6%2Bci%2Fmuu3nGzdVGCDj5RU9Zu6L&X-Amz-Signature=9d94fe6b65ddeca9e5bbd832e49ca9fdd39d6b22d7594150038855b3549b71dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
