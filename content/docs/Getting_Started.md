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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPWOGAFZ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYikJ7qyX4tmsTuj%2Bo9LXMLIE2YofAWtwvIq1m%2Fm3FPAiB3etya9EgG7Cag3IT4Y13Si4d2xLKhgffUJwigGJM2Pyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMTuH9BEPKMQcimZBIKtwDFKeo8YldDClayBIno6IFPCp%2FrEJyxPeB9OPuPIhGa5k3vYURNgvJ%2BtOottUVEU1kvGUbQBT%2Fmj%2BHpO4IOle8OLeVzAzgk5R5DWxPE99tMs6u%2F7eJ2p%2FcAUWLpTwOsm0c%2BWTQPNG9P35NtOevtFLnuzwSNIf5rmSzf5cm%2FNsxlCM9jp5BCNFE3vpnUGtGSiCHB37%2BQL6V0%2FAsf9qalCiyr3Wz2OrNuP8ZelaRKBO1dZw%2F5XiHLB4NJBKsv4oT960UcRNKqDcXdMug6PYEbFKJtd5hI7temB2WzxZXM8Xf6mHOaBYX5qbjj4tt0Nsiigwux1iGHSIwpjo%2BgSl5LOtkVOYnKSnTKglWRDoJUKnYSBlwWvcVGEphE9BsWaFfnqAr4rfvklYYewk0nnrXCT7YQ9Iw7Q7e7es7D%2BxVaMiK%2Ffa%2BLEhXFZTYoRER43tkQGU59HzfEl3FYwFr1GtPbR%2BQGaFIruGocj0B9guNppOC253OWWVOwAw3v0D6SmjIPfFkX6QTwNowjXD%2B3ruL2KfCjeIF99i1I5kZpulWjwiFULotuMTP0VaZoi92cxN%2FE7MpDcUp2u%2Fb90ym%2Fe%2Frp23yS4p7zye67Wc9Wqj1iZlCOenB4jeuJFc2e%2Bg8EuMw3eazwAY6pgF914sq9AxNAgYSJpVO74u%2B9t0KwOxv%2B2ethmm3FDiyslcl0%2FOWZKx1hJR9gyPoBWEJ%2FWpow5nQ6pGrbG%2BewD%2FfzbGcL6Gk%2B1uu5bzXSNvtsgY9EybTA87xyQfwQg6UbC5qwrO7ifyZZxTk9acjOCuqqHUP3VmLPeYFCx7drNlWDqlKoXaaLHqrKtu%2FG0Plmh2gzEvN%2FvZ3afdOSc5h9Zm7CSXbJcU1&X-Amz-Signature=7ffd8344d8680b180a2911ceb052f08af38206d6be017cb1801f6fd6f8934b62&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPWOGAFZ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYikJ7qyX4tmsTuj%2Bo9LXMLIE2YofAWtwvIq1m%2Fm3FPAiB3etya9EgG7Cag3IT4Y13Si4d2xLKhgffUJwigGJM2Pyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMTuH9BEPKMQcimZBIKtwDFKeo8YldDClayBIno6IFPCp%2FrEJyxPeB9OPuPIhGa5k3vYURNgvJ%2BtOottUVEU1kvGUbQBT%2Fmj%2BHpO4IOle8OLeVzAzgk5R5DWxPE99tMs6u%2F7eJ2p%2FcAUWLpTwOsm0c%2BWTQPNG9P35NtOevtFLnuzwSNIf5rmSzf5cm%2FNsxlCM9jp5BCNFE3vpnUGtGSiCHB37%2BQL6V0%2FAsf9qalCiyr3Wz2OrNuP8ZelaRKBO1dZw%2F5XiHLB4NJBKsv4oT960UcRNKqDcXdMug6PYEbFKJtd5hI7temB2WzxZXM8Xf6mHOaBYX5qbjj4tt0Nsiigwux1iGHSIwpjo%2BgSl5LOtkVOYnKSnTKglWRDoJUKnYSBlwWvcVGEphE9BsWaFfnqAr4rfvklYYewk0nnrXCT7YQ9Iw7Q7e7es7D%2BxVaMiK%2Ffa%2BLEhXFZTYoRER43tkQGU59HzfEl3FYwFr1GtPbR%2BQGaFIruGocj0B9guNppOC253OWWVOwAw3v0D6SmjIPfFkX6QTwNowjXD%2B3ruL2KfCjeIF99i1I5kZpulWjwiFULotuMTP0VaZoi92cxN%2FE7MpDcUp2u%2Fb90ym%2Fe%2Frp23yS4p7zye67Wc9Wqj1iZlCOenB4jeuJFc2e%2Bg8EuMw3eazwAY6pgF914sq9AxNAgYSJpVO74u%2B9t0KwOxv%2B2ethmm3FDiyslcl0%2FOWZKx1hJR9gyPoBWEJ%2FWpow5nQ6pGrbG%2BewD%2FfzbGcL6Gk%2B1uu5bzXSNvtsgY9EybTA87xyQfwQg6UbC5qwrO7ifyZZxTk9acjOCuqqHUP3VmLPeYFCx7drNlWDqlKoXaaLHqrKtu%2FG0Plmh2gzEvN%2FvZ3afdOSc5h9Zm7CSXbJcU1&X-Amz-Signature=173793109f9d4627e100a27ee8631c03f8b397172275a1b0d8fb2ee8c5953ecc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJYIS7C5%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxvb34RlamLZHoCzf28mztglkOOVSBvql0cNhWe4yvyAiBUDUi%2BF%2Ff1NNfdQofjBxYv3kl2jkAH0ItQUJx01pv5Myr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM6wxHv%2FmqsiPGEEnPKtwDdG6lTthCbZGMSsb26wRxd3AIoLjSYXI%2BsFv4XeqDgam3dLL1kdVx3y61p%2FeHRfsMF%2FRaZNbIcTBMHgRMibR%2FY5OqeqcN%2BoxI8A7Y3uIhI7uVUTCH%2BZ0qwLO7WDgZwlh8JFzgRsYjbhDOfzCnUY7dQ5mt2Ks5bfmAVeVH%2Bm77rfP90jF7PRF1Mbg10qrtlloYoVGYloAxsRWgJnu5xVEZOmJrm9YIxRR64TiKWG21DKyGMdn08tqmNtUfKUscJN%2F48%2BRaFDOYh47Y6mM9dw6OqMGJCaBKduOsRwvfOcKLZVgF4lQDKIUmtydr6zv6WP6Admc5L59jQVuj9XwwkJuQOLv4FOkoHWXtNlQSB0xinsyhazHS%2BXcp6K%2BSUrc2VDfGTIJRcUbiK8zVLSDZmUoqQRPuLfMcAlVP%2Fzjg1Z5mW4t4RS32MnxMBdOmKZyUBuXZvp6Brp1N8fv6QJVQd2pOj1dVks2E%2Bp70JUAr9xh8pZgnRCsdiwZncH%2BcgCnHTyZEJuAJZqVEapZa2%2Bezq84DOpbS1wNqn7mfW%2F5HPIw6b9OLl0ECzCHbRi8cvRA9%2FCZzas%2ByQFoRFXkhYBoYMjhx%2F8Zx98zDcbWv3gHCbKBTEvh03pDnc37JIbnX83IwwuazwAY6pgEWMgCVeA84wNcEBxxCN%2Boy%2B8CD7Bh95T6arXHnRQQMFwRQ%2BdzZK1OXz0i7NfSFrMXa702OYQGVb%2Frtt%2FCl5wiDEpfA56uskjfVGrKDNu8JSErFTEUfrjC8yTJOX4ePZkQj0do9BFEXuXfPrn%2F4bgQ5TuzGIdEzM%2BTr%2F32fOym6W0g7gapCAVALRLOM2SC1XuH5SRYE%2Fk8D%2BZo%2Fubb8zdNNqbEzA%2B5C&X-Amz-Signature=6214b8347884c8d2e8beeb588190cf68552ff7e5fcab5e1832f73519b2597751&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X46V24LJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BV4JoRylUsVj9PaOcUONc25uacdleoB7GdL%2FzPxw71AiB6YG3fz1dGyzHBCbDNFoq7AtpqIcuDunoCseR0ulL%2BSyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM7uurajv8BmQM9kcPKtwD2Izs3tY2eq94OGDOkjkjZcQ6PgcVTdM%2BmYTL7KSyt%2FHKaBILKnOGhMqRJRrMNCsomuG9qY8Bvgy7iT6r%2F8bGwE7HRhYXJykWuu63RoFbnZliKWqt31phmPymOqMvOHBitIuWUz%2BknwdpWq%2FSzGtkvTsCIHG18t4%2Bi0nBM7x8GLnchZlp1hSlISyqEDr8M0mjgSOrFsOELjcwN%2FnJ%2BiR5%2FiuqJ2SFNvAi3tPWMOiLYwqZFWA5uNaU4r%2FlspoUIzmxohO4zcya2ejJq7JE1xFTMfExGSGPGVDVjamJQ%2B%2BbZlFQ%2FtZjHJcQYobCXb6hzmTdtUKZQSQr5ZD8w0wW5z7tdYbJhu7LZSUKlgp%2BxJZy5rg44O6AuN0ONpc8rpS8anV7gFwtEcfaIHW1OV2TFJaFfolrCO8HTDiAsiZh%2BJ7y41PdLe4zhkz2lNG5eGM%2BbzU1LdRk9oPdowEZscjBvgtby2kXxdPHJWMPTKaGYFtXYcsDyuSSDukpiFEzTlQLETXfo8M3L4LvfKVbmbe2%2BNI0RXntVXL%2BmsEs4AUrJrFVwAZ2BhVsxocMUs7J6RPjKAmTdpuIAZ0KJriEX4XSmxI7S5vT%2FMTk06UOM4e58qMyTAtuptJXWa3wUbxs5H4w7uazwAY6pgFe8mMBUOzvDde3TDs6KTBpZfjD8Hb%2BkIGMs6dHG7N51KXKorh2bhuRMc4tTJeIvP0%2BoAPyW%2FgXjywxi0%2FIbfRPDt%2Fr1%2FPJn19GtxgOJg2QBeU5re2B8SQR5h04OOOUO3y2FOiDIxwqHpdntO0Su6rghOvROW3cqIpeYQUdIu0Y3XxlzQuWP31FGLRFjn054Gzx0KegcOxV5EQpzTCL07DMVTU4dez6&X-Amz-Signature=7f98c9ced7958a95c453607bab99e972bb4c17e3f1e842f0ef58407688c5ef8a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPWOGAFZ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYikJ7qyX4tmsTuj%2Bo9LXMLIE2YofAWtwvIq1m%2Fm3FPAiB3etya9EgG7Cag3IT4Y13Si4d2xLKhgffUJwigGJM2Pyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMTuH9BEPKMQcimZBIKtwDFKeo8YldDClayBIno6IFPCp%2FrEJyxPeB9OPuPIhGa5k3vYURNgvJ%2BtOottUVEU1kvGUbQBT%2Fmj%2BHpO4IOle8OLeVzAzgk5R5DWxPE99tMs6u%2F7eJ2p%2FcAUWLpTwOsm0c%2BWTQPNG9P35NtOevtFLnuzwSNIf5rmSzf5cm%2FNsxlCM9jp5BCNFE3vpnUGtGSiCHB37%2BQL6V0%2FAsf9qalCiyr3Wz2OrNuP8ZelaRKBO1dZw%2F5XiHLB4NJBKsv4oT960UcRNKqDcXdMug6PYEbFKJtd5hI7temB2WzxZXM8Xf6mHOaBYX5qbjj4tt0Nsiigwux1iGHSIwpjo%2BgSl5LOtkVOYnKSnTKglWRDoJUKnYSBlwWvcVGEphE9BsWaFfnqAr4rfvklYYewk0nnrXCT7YQ9Iw7Q7e7es7D%2BxVaMiK%2Ffa%2BLEhXFZTYoRER43tkQGU59HzfEl3FYwFr1GtPbR%2BQGaFIruGocj0B9guNppOC253OWWVOwAw3v0D6SmjIPfFkX6QTwNowjXD%2B3ruL2KfCjeIF99i1I5kZpulWjwiFULotuMTP0VaZoi92cxN%2FE7MpDcUp2u%2Fb90ym%2Fe%2Frp23yS4p7zye67Wc9Wqj1iZlCOenB4jeuJFc2e%2Bg8EuMw3eazwAY6pgF914sq9AxNAgYSJpVO74u%2B9t0KwOxv%2B2ethmm3FDiyslcl0%2FOWZKx1hJR9gyPoBWEJ%2FWpow5nQ6pGrbG%2BewD%2FfzbGcL6Gk%2B1uu5bzXSNvtsgY9EybTA87xyQfwQg6UbC5qwrO7ifyZZxTk9acjOCuqqHUP3VmLPeYFCx7drNlWDqlKoXaaLHqrKtu%2FG0Plmh2gzEvN%2FvZ3afdOSc5h9Zm7CSXbJcU1&X-Amz-Signature=b79ec05ee067be1fb26ee7932cb72f443ebd54e0935df392c3079d299711a3ee&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
