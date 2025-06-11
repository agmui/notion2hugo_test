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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLRSO3VQ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWTGtZXOjm8criey%2FCO5HsbUKbjORJUv5kytKqeiflCAiBGnaRQTXMyaZgvcRG%2BzAjq028HjHfRzlrmsesPYTCcNCqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDcf3q2KxugKT9uLpKtwDiZOsbudO0ZgoBlX1RX5k6c0E1vO01ukNv7Xd6HPb1jj%2BhZCdhF%2FEwPrd%2BUIP2dUCWcDqr6%2BGQGCs7qmdV4APypGLin%2BQ%2FQBkTWpCQqkDqymj5l%2BIY8rR9Jc7K8TlX%2Fn5GtuwTSZUCu7437X7qO0Dqv7hUPptG7O%2BAJi5lyWIiQ8ytix4h7M9MpCXya1GImrnbM8qqpn0746HXDC%2BOGSOqwEqNagyudRuE7YH4btlXsB0FqY%2B1C4kBR2rXWjEFosvcFx3yhG%2BG5XeRKclrhOpI0z3d5NSqnt%2BY0xyI5cx7hhJgCMkZZsEhzDcPjDY2p1wGfc1f8h556ll1%2B7mO%2FSk56uscGgRIXPevonHVHf9CZPVfb%2B20E09ReYhNQyEX7aSc90A36M3ZWUPQuuV%2F%2F1CCRf0eWPKq42paOrAFpHXRgphSrcpIQDXI1bDgvYR%2BzHEBsRPCGIJl%2BcX7YX6w%2Bp55mPrm90RUz9IXmpBkWHv4eBKVSsdnS7d3E2cGJlHpTPba2hr7ikx%2FgqiaxkRYI1Ery5AgYShg9B7OQQy%2BevtxkHoEzJffKLwbrnVIkYrlbQ1Gqrl4juex9akAnGmDuC0Orx9bi92vYdmPEJawuUOiJe6t2dGG80Hw1b2TecwtZelwgY6pgEmJUkX1v2Mw7WgpbwfuYKfKd5Eys0axy9TaB1DFDsB7TPCBYNWez8fokiR7MHilsZ3qg4WH8nleKxO%2Fc5FubybYKhZFN8B%2F9d8ExD7NnMAgu81TSsE1oLbpiwDz0qJyTeAeSbDjJ16J5Xz5%2BCShER4ZQ8TktlcrjK%2FA2PJHcyqLyy0OPwTQGjGNzR8oLqrSVcnK%2FsU2K%2BHyc3QCv%2BBdLT8RcTn8ZeG&X-Amz-Signature=cf834dd5e15a81b0098cb49af7a556aa1a5cfd238575a6edf5fd1d94529144a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLRSO3VQ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWTGtZXOjm8criey%2FCO5HsbUKbjORJUv5kytKqeiflCAiBGnaRQTXMyaZgvcRG%2BzAjq028HjHfRzlrmsesPYTCcNCqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDcf3q2KxugKT9uLpKtwDiZOsbudO0ZgoBlX1RX5k6c0E1vO01ukNv7Xd6HPb1jj%2BhZCdhF%2FEwPrd%2BUIP2dUCWcDqr6%2BGQGCs7qmdV4APypGLin%2BQ%2FQBkTWpCQqkDqymj5l%2BIY8rR9Jc7K8TlX%2Fn5GtuwTSZUCu7437X7qO0Dqv7hUPptG7O%2BAJi5lyWIiQ8ytix4h7M9MpCXya1GImrnbM8qqpn0746HXDC%2BOGSOqwEqNagyudRuE7YH4btlXsB0FqY%2B1C4kBR2rXWjEFosvcFx3yhG%2BG5XeRKclrhOpI0z3d5NSqnt%2BY0xyI5cx7hhJgCMkZZsEhzDcPjDY2p1wGfc1f8h556ll1%2B7mO%2FSk56uscGgRIXPevonHVHf9CZPVfb%2B20E09ReYhNQyEX7aSc90A36M3ZWUPQuuV%2F%2F1CCRf0eWPKq42paOrAFpHXRgphSrcpIQDXI1bDgvYR%2BzHEBsRPCGIJl%2BcX7YX6w%2Bp55mPrm90RUz9IXmpBkWHv4eBKVSsdnS7d3E2cGJlHpTPba2hr7ikx%2FgqiaxkRYI1Ery5AgYShg9B7OQQy%2BevtxkHoEzJffKLwbrnVIkYrlbQ1Gqrl4juex9akAnGmDuC0Orx9bi92vYdmPEJawuUOiJe6t2dGG80Hw1b2TecwtZelwgY6pgEmJUkX1v2Mw7WgpbwfuYKfKd5Eys0axy9TaB1DFDsB7TPCBYNWez8fokiR7MHilsZ3qg4WH8nleKxO%2Fc5FubybYKhZFN8B%2F9d8ExD7NnMAgu81TSsE1oLbpiwDz0qJyTeAeSbDjJ16J5Xz5%2BCShER4ZQ8TktlcrjK%2FA2PJHcyqLyy0OPwTQGjGNzR8oLqrSVcnK%2FsU2K%2BHyc3QCv%2BBdLT8RcTn8ZeG&X-Amz-Signature=da261ddb2aa29ce004374d8f061d93ab483f463a0aca6e37b0385995170b1a89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLRSO3VQ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWTGtZXOjm8criey%2FCO5HsbUKbjORJUv5kytKqeiflCAiBGnaRQTXMyaZgvcRG%2BzAjq028HjHfRzlrmsesPYTCcNCqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDcf3q2KxugKT9uLpKtwDiZOsbudO0ZgoBlX1RX5k6c0E1vO01ukNv7Xd6HPb1jj%2BhZCdhF%2FEwPrd%2BUIP2dUCWcDqr6%2BGQGCs7qmdV4APypGLin%2BQ%2FQBkTWpCQqkDqymj5l%2BIY8rR9Jc7K8TlX%2Fn5GtuwTSZUCu7437X7qO0Dqv7hUPptG7O%2BAJi5lyWIiQ8ytix4h7M9MpCXya1GImrnbM8qqpn0746HXDC%2BOGSOqwEqNagyudRuE7YH4btlXsB0FqY%2B1C4kBR2rXWjEFosvcFx3yhG%2BG5XeRKclrhOpI0z3d5NSqnt%2BY0xyI5cx7hhJgCMkZZsEhzDcPjDY2p1wGfc1f8h556ll1%2B7mO%2FSk56uscGgRIXPevonHVHf9CZPVfb%2B20E09ReYhNQyEX7aSc90A36M3ZWUPQuuV%2F%2F1CCRf0eWPKq42paOrAFpHXRgphSrcpIQDXI1bDgvYR%2BzHEBsRPCGIJl%2BcX7YX6w%2Bp55mPrm90RUz9IXmpBkWHv4eBKVSsdnS7d3E2cGJlHpTPba2hr7ikx%2FgqiaxkRYI1Ery5AgYShg9B7OQQy%2BevtxkHoEzJffKLwbrnVIkYrlbQ1Gqrl4juex9akAnGmDuC0Orx9bi92vYdmPEJawuUOiJe6t2dGG80Hw1b2TecwtZelwgY6pgEmJUkX1v2Mw7WgpbwfuYKfKd5Eys0axy9TaB1DFDsB7TPCBYNWez8fokiR7MHilsZ3qg4WH8nleKxO%2Fc5FubybYKhZFN8B%2F9d8ExD7NnMAgu81TSsE1oLbpiwDz0qJyTeAeSbDjJ16J5Xz5%2BCShER4ZQ8TktlcrjK%2FA2PJHcyqLyy0OPwTQGjGNzR8oLqrSVcnK%2FsU2K%2BHyc3QCv%2BBdLT8RcTn8ZeG&X-Amz-Signature=2b751ea4a65c47fb47e80390154ec98d09f6faccb7bd5a8eb787d059899a2f01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7EY4CPF%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7kUb%2FH2BvMOOYdwEDMx4XiGBuldaLxaGBNiHwf9hxRAiEA2ejKEK%2B%2FaM7%2FV6%2F9yTObhDR6O9jrdq6dj4CR%2Fm%2FyxcAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICTFkNIXBKFheoeGircA6i2JxtYGEF%2FTjJySRZcI99bZTYwd%2BImQJK7NBWSzHTCVs%2FlOSfuL5P8WfOZZ5j1I1wrRFBllCwGJ3njo1fxc3Ku80KFC9N74gs9rcbI1hfuhsiti51FF0uhGH2SwqHtdEIE4xHcrUTCVFFkf2%2Brrr0USHAp8kVbQ%2FdnBXwFmR2RwElJmPrXa0aK3IGVc%2BHuS9MA2TfSDF4ev6%2BYboa4%2B6Dw4KScYdhhU8x%2FD9kGr4xJydLa1dYNI0193xK%2BdsXuFTqmmEi9LBK5Vsy8QaVasEjUbhQCXUEChIc%2Bl6tEv1l3VnnFWiFGn0ut1M2rpSgTi5nwR1%2FbpB2kObSRsqUNGQJbeuccMXWbc%2Frl44ovY2nZNWVGryfXwc9JHLmZaC47e259IVznswK2qdeI1LW8qaIQTNtVjTA7HxGpOEX796Ly25NUsp9Q27mZvs6ZZrXvHFMnXndON11%2FpxsloUYrItBblTApdsTnXj2ewzdNGBUwEZuDJvbG%2Btv%2FQLTERDlnsVWEjp0SC1dDtnA5wdkEoFu%2BN10NGW96lDdCykTjmQb9NPFnpUcRDcgSyN9FRllrNyFbFT1A1eh%2F2K4cRdVuodcLOvw02U6%2BgfN%2FSiaVBEpgDK4rFZfP9jtEJ%2BrcMNeipcIGOqUBZxnI80gcFvUvNoSPZmmsolXFpjqqxemj4%2FlcnhKN86zuA%2FaCBGUfVYPE7CtuSoqHGgqrpxJc9IWHHkWkr7PjwF3yiElBZD%2BVA7Pbo49BtpdNOAwsKOhs19Gg2yOQ6AGQTGb7fLB%2BZQs33Qn%2B9EmURRxgm867JC1bm0Gw34%2FNq1VEVARF1o8Lmn6Jw861RYWCs3Ffg5KPyCiN3luqcEr97rzTcRfX&X-Amz-Signature=ee310ef9899f0da4c8c3fe4e567d0ceff97837e3a64551bed729b580ea659678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WJAGIVO%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0IA9NnEUyITHrqJefTR03duV3orP34Lo9KGWqya3tLAiEAi01Jwum76mYwiVLflUB7%2BDbTpPqb2y3T0l4dZFCUhZ4qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2ByelV4332IGnpp%2FircAyCObp%2F%2BC70nfn5qZb57S2qyjWj8gtVEiDcIokf%2BU9LpbgjRlDpKPJKwQc0BhbBkF34eRk56P1cEe2wvNwjt%2FlLOmfMdRuImSXiaPhjjdp274nwy7kz0ifs3fFVt9YyTKsYSuTHV0X4pDInZgzGezRD0hL2S1X2EjqsLO%2BJAUb612HXJMXxKp7KsnuoZFzUNFkPJ0K7Gt%2FSwpndZaTC9i5ZK2vp95wCs%2F0bVQfdnWBteQXt5DoXylW0fvfAUKe8m9AXgsT6i8dzHZxrGUGIEiUyNHFEHmw32vhMAFvKjo%2BdIG3uyO7SaNakfSgueLsE%2Bnw3JkckyhjjmjvuhndYLFx7kQfsbmoRlejMehG1LMrfiX%2BFqrbpMp7MMpHGUUhuKzJ77vTHcHeyoVVngl3zbjr79OwoE%2FXjpx%2BHVoHrKRFI9IvvFguW5ArjWnsYFXHVYEAIz0RUep2YvoyT0XxToYfS0iiun9YS9cC8cgPDy3VOyayXtSaT%2Bj7TK7jsaIhY%2FuGAk04lDAE4sV%2FkptEuzHE7o9J0RTEdUKzmq18qaTjv4%2BNn%2FkbpzQCeOr3sDolSrs%2Bq0eBJZmU8MlkpbbAic%2FHyt1sOzsKYuG22Jow2LhPQb4IupLivm%2F2vS2lVqMOGCpcIGOqUBKkKnRY0DrTM4JbPNtYRxPn1tqGLZaqeKJ5X2wF062sbwToEVYRWJKORw0AOpgdWpcFEg3kIZl5JiIhOZmqz%2FAzjv%2Fqs36Kp1NXz3Nzk%2BzWlmmZcbIJWEtKQOaK4zoAooKE2uDnxXLzNBu5Z0zgoizPlZDF5wxg19iCZQQTu3u3yO6elgZkZXeod7CTW0noWRswf9y6in9MNbGtIPr3uTSvh5mRG7&X-Amz-Signature=aba73e6c59062a13e0805909e9e2378c11a01bc08aea17295fd7868bce6b9257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLRSO3VQ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWTGtZXOjm8criey%2FCO5HsbUKbjORJUv5kytKqeiflCAiBGnaRQTXMyaZgvcRG%2BzAjq028HjHfRzlrmsesPYTCcNCqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDcf3q2KxugKT9uLpKtwDiZOsbudO0ZgoBlX1RX5k6c0E1vO01ukNv7Xd6HPb1jj%2BhZCdhF%2FEwPrd%2BUIP2dUCWcDqr6%2BGQGCs7qmdV4APypGLin%2BQ%2FQBkTWpCQqkDqymj5l%2BIY8rR9Jc7K8TlX%2Fn5GtuwTSZUCu7437X7qO0Dqv7hUPptG7O%2BAJi5lyWIiQ8ytix4h7M9MpCXya1GImrnbM8qqpn0746HXDC%2BOGSOqwEqNagyudRuE7YH4btlXsB0FqY%2B1C4kBR2rXWjEFosvcFx3yhG%2BG5XeRKclrhOpI0z3d5NSqnt%2BY0xyI5cx7hhJgCMkZZsEhzDcPjDY2p1wGfc1f8h556ll1%2B7mO%2FSk56uscGgRIXPevonHVHf9CZPVfb%2B20E09ReYhNQyEX7aSc90A36M3ZWUPQuuV%2F%2F1CCRf0eWPKq42paOrAFpHXRgphSrcpIQDXI1bDgvYR%2BzHEBsRPCGIJl%2BcX7YX6w%2Bp55mPrm90RUz9IXmpBkWHv4eBKVSsdnS7d3E2cGJlHpTPba2hr7ikx%2FgqiaxkRYI1Ery5AgYShg9B7OQQy%2BevtxkHoEzJffKLwbrnVIkYrlbQ1Gqrl4juex9akAnGmDuC0Orx9bi92vYdmPEJawuUOiJe6t2dGG80Hw1b2TecwtZelwgY6pgEmJUkX1v2Mw7WgpbwfuYKfKd5Eys0axy9TaB1DFDsB7TPCBYNWez8fokiR7MHilsZ3qg4WH8nleKxO%2Fc5FubybYKhZFN8B%2F9d8ExD7NnMAgu81TSsE1oLbpiwDz0qJyTeAeSbDjJ16J5Xz5%2BCShER4ZQ8TktlcrjK%2FA2PJHcyqLyy0OPwTQGjGNzR8oLqrSVcnK%2FsU2K%2BHyc3QCv%2BBdLT8RcTn8ZeG&X-Amz-Signature=98a4df5923db765bf64c4ebf64136b5c6d6e6706f34e2689a3834029ba5a0227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
