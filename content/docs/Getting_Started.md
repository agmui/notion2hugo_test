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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQQAOZX4%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjRfcNjQzZEImHwdrEnzzTxw%2F4fjEF4Rxt%2FTFjTwYGdgIgcVMtOrc01UbV2CZxxSbT9cyNIhJt%2BgBitV%2Bs3EQ4ofYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA05O1p%2F0v9928EdCircA9D9h5XgjhWEZtldHQywyr43hwj8OgHvtZ8KzFpTqpNvJdJi9IwCACfoC8eZYA8dHS0qtQlw1q%2F7a8XYXFw9TrFx%2FD3BRhCICU3EG4P1%2BKHfTSkaM61WXlVVVR%2Be%2BoKeBJfnGlTUMnlBaBJ647bVTvBDle7eaEstFYBiAySu5TspKm3oufGMop%2Bu%2FBqdiLCs21XQJBWOmSfpPmLAtnWK9NhqRExMdbW8%2BDpzNRy3IY0Mjj2xm3ZMNnpY6cBGT5G32jvLQMtKkuPpCb%2FWNxSkyCycrVZ4IiX11yVWBGICnCCHJRZmGxmbWWRUGeBC6rYcfE6S1dlQNUC1kEc3f7vcDzvMDRPvPAUgVXGNE2xiFG19I%2FMt1rDDoarx%2B27wfGLv4BpjkMMwFHqoeC4i9hifzShnE944npBJ%2F9bZ7cznRQe0cHQQjyh3tyzD5lOUJnxTtj1ptlM%2B6Mnbxu0m6lQJaWnQCw3dCACitwdRuGresu3D7U5N12jSjzRbciddYDxXgJIMNDaFYMNimMfYwBW9bnEiB9k6rA%2FyTqrg4XMb9zYiyITTereEdqAOp5ZhGzGdoeAFCtI7Ocah2kmNwc%2FUw4%2F1ciOM7aZHUov%2BzcXHDhyhoZmw%2BQSLelVlzrAcMKWEzsIGOqUBSssTuHJ9w75uBkIbnvyBLPWTSdj0M956THJOHd4riA03MRMdnvbHvhRKnT%2BBw2X2V2%2Bjw0%2BXCo3Ku0hTs3oDd7eXWe0T3%2Bv2ro%2FKcKciIny9EAjkYFZjy4amT6rOCnL4HHn3px77Z7wOcnRXrjIXyqLW94UTBpAmP3YSqGBTGE%2Biee2flwnPgMIHDntEHJrriv4%2FQjKSWH%2B%2FL7vJFx5J3187BrEQ&X-Amz-Signature=d4d2e39e3e7026486a209830957baf0aab0e7ee404b1d92e7151dae4a84d2e77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQQAOZX4%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjRfcNjQzZEImHwdrEnzzTxw%2F4fjEF4Rxt%2FTFjTwYGdgIgcVMtOrc01UbV2CZxxSbT9cyNIhJt%2BgBitV%2Bs3EQ4ofYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA05O1p%2F0v9928EdCircA9D9h5XgjhWEZtldHQywyr43hwj8OgHvtZ8KzFpTqpNvJdJi9IwCACfoC8eZYA8dHS0qtQlw1q%2F7a8XYXFw9TrFx%2FD3BRhCICU3EG4P1%2BKHfTSkaM61WXlVVVR%2Be%2BoKeBJfnGlTUMnlBaBJ647bVTvBDle7eaEstFYBiAySu5TspKm3oufGMop%2Bu%2FBqdiLCs21XQJBWOmSfpPmLAtnWK9NhqRExMdbW8%2BDpzNRy3IY0Mjj2xm3ZMNnpY6cBGT5G32jvLQMtKkuPpCb%2FWNxSkyCycrVZ4IiX11yVWBGICnCCHJRZmGxmbWWRUGeBC6rYcfE6S1dlQNUC1kEc3f7vcDzvMDRPvPAUgVXGNE2xiFG19I%2FMt1rDDoarx%2B27wfGLv4BpjkMMwFHqoeC4i9hifzShnE944npBJ%2F9bZ7cznRQe0cHQQjyh3tyzD5lOUJnxTtj1ptlM%2B6Mnbxu0m6lQJaWnQCw3dCACitwdRuGresu3D7U5N12jSjzRbciddYDxXgJIMNDaFYMNimMfYwBW9bnEiB9k6rA%2FyTqrg4XMb9zYiyITTereEdqAOp5ZhGzGdoeAFCtI7Ocah2kmNwc%2FUw4%2F1ciOM7aZHUov%2BzcXHDhyhoZmw%2BQSLelVlzrAcMKWEzsIGOqUBSssTuHJ9w75uBkIbnvyBLPWTSdj0M956THJOHd4riA03MRMdnvbHvhRKnT%2BBw2X2V2%2Bjw0%2BXCo3Ku0hTs3oDd7eXWe0T3%2Bv2ro%2FKcKciIny9EAjkYFZjy4amT6rOCnL4HHn3px77Z7wOcnRXrjIXyqLW94UTBpAmP3YSqGBTGE%2Biee2flwnPgMIHDntEHJrriv4%2FQjKSWH%2B%2FL7vJFx5J3187BrEQ&X-Amz-Signature=e2b70a641d2b09a21d950ef49dfb68abf030688c67aa71f89885ddb70cf52c8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQQAOZX4%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjRfcNjQzZEImHwdrEnzzTxw%2F4fjEF4Rxt%2FTFjTwYGdgIgcVMtOrc01UbV2CZxxSbT9cyNIhJt%2BgBitV%2Bs3EQ4ofYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA05O1p%2F0v9928EdCircA9D9h5XgjhWEZtldHQywyr43hwj8OgHvtZ8KzFpTqpNvJdJi9IwCACfoC8eZYA8dHS0qtQlw1q%2F7a8XYXFw9TrFx%2FD3BRhCICU3EG4P1%2BKHfTSkaM61WXlVVVR%2Be%2BoKeBJfnGlTUMnlBaBJ647bVTvBDle7eaEstFYBiAySu5TspKm3oufGMop%2Bu%2FBqdiLCs21XQJBWOmSfpPmLAtnWK9NhqRExMdbW8%2BDpzNRy3IY0Mjj2xm3ZMNnpY6cBGT5G32jvLQMtKkuPpCb%2FWNxSkyCycrVZ4IiX11yVWBGICnCCHJRZmGxmbWWRUGeBC6rYcfE6S1dlQNUC1kEc3f7vcDzvMDRPvPAUgVXGNE2xiFG19I%2FMt1rDDoarx%2B27wfGLv4BpjkMMwFHqoeC4i9hifzShnE944npBJ%2F9bZ7cznRQe0cHQQjyh3tyzD5lOUJnxTtj1ptlM%2B6Mnbxu0m6lQJaWnQCw3dCACitwdRuGresu3D7U5N12jSjzRbciddYDxXgJIMNDaFYMNimMfYwBW9bnEiB9k6rA%2FyTqrg4XMb9zYiyITTereEdqAOp5ZhGzGdoeAFCtI7Ocah2kmNwc%2FUw4%2F1ciOM7aZHUov%2BzcXHDhyhoZmw%2BQSLelVlzrAcMKWEzsIGOqUBSssTuHJ9w75uBkIbnvyBLPWTSdj0M956THJOHd4riA03MRMdnvbHvhRKnT%2BBw2X2V2%2Bjw0%2BXCo3Ku0hTs3oDd7eXWe0T3%2Bv2ro%2FKcKciIny9EAjkYFZjy4amT6rOCnL4HHn3px77Z7wOcnRXrjIXyqLW94UTBpAmP3YSqGBTGE%2Biee2flwnPgMIHDntEHJrriv4%2FQjKSWH%2B%2FL7vJFx5J3187BrEQ&X-Amz-Signature=c7210ab0abedcd5ed1931b5635a30b1b4f4eedc17640dc27d4c071ad8e241190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V6NA3DL%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFvUmFE6Ckn7b7h%2BIgRe34ZfVcwrQGbwZNmb%2F%2FAgTlTIAiEA27eU6745ysNJjkqgFtfDhVb8%2BIImlt7DG54IcNE%2FX14qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9nDzByKTeFk0NupyrcA6CgyFvKwf2clhpnTvt8mUh93WOEJwAWjxMr%2FlYVP7X9ck%2BEAUNMT8GHfJPIRVt9SN%2BhLA97Z5%2FfFjvfERt4w%2B1iewrHpVwFocKeH8HqRjMSp4BjXua6Eyv7YW7feNuCq3UHUaOAHc1W8OVOd6ccVc%2BoVWmFF%2FISH1QsmSpy3HiB0wIFev%2BISL5t4I0aO6xF8vN2%2BfcemtTv%2FMUHRIPuCRk1CrBMSuV5V8nslEYghoxH3rZxv%2BiSOw%2FLAFq4J0ah0wITLi8ZzU%2BBHtgIn3wL0O%2F1EPSCx5fcgQhAB1HnotKLnsn4t6U85Kb3MHzFz0b3tcXGUf1sN4VmW%2FqDi%2FTUdxd6YjQ55e1WE5LCGCT4YGAejIjQZl8LsfUI1etbteVGWDqXBhYSGe0WIj0CMOAJcwjvlBrS75iILK0HmcmmO3u3FqigEvzNdq9BfAtwSeZDDumlCRMWfftcvNIjJoRpo%2FxN731v6R813x1SCUKZSyehclS%2BgEDuv4lTFFuBiDhbtNEO1qY49ka0yw6%2BNAsU2l3TxuSMG64E7Iwz3OMQ%2B8BqBEd9G%2B2IILcCU3MTq61Ksx1wqvHXWENB6nnTPRXtXgRR3XHyIDb%2Bxl0nNBie3yRrwBmogUTJgOVR8QiTMImEzsIGOqUB9335eb6VSDhU%2F7xGiY6ziv1WHDbl5vJ30oNJxfAZCzr8hjY3yD6DyV7v6OAMx3jvASxjypJO6PgHlWxRtAFlhZthgw31Tv3CCy%2BpNUV%2BauBP4JYIv6oaulMhQze9E%2BL85tzX%2B2oNZ3nTEA48Neu54mN5ika%2B3oCIsIiwNWZDafGKPrcwaeAWIMm%2B4SX1dS6ApaGEuZKyFlO2CqzmilUPj0DfzPoR&X-Amz-Signature=c36e85859885063a62e6fcc498263f19a0ce7c58230aeec27b51978186080357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7MQILXD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcltz99roibbGkNyEAQhQLbRfwRltMAabZ0LBM9O2sSQIgT15%2FfN2nj2%2FPh7POZlDnPYRxiPk0U7oh7n5xWi1KC54qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEv7Z2nUKQDTL8bsIyrcA%2FNDclgCKTWX8lkrj8BWlw4vNJVEiXlcvhyH0hEdeFfemn0aw6T%2F%2B9Dce%2B22nobz87iNoqKGPUxr2N5mwUZNmIcIohzw1sRjsZ0oJQsO%2FdbRZKbbTXhrjAVPRlPMtDK%2Bk9ud6cX%2FtnIl0%2FISOzg8CUbmdyq6esM9PMv7TXa9hql9WeTyrxGpwbeOFY3tPXrT0gAU7TghR0zvFNTxf2gT16yVQVPEQgb5Ti1S2DSwIHDuW8cfXtu6vFRlW9lIAmmpEm3DDvt2S%2BKyx3hlFUaWQIOnR1yPQ0TW%2Fqea538qtJj9TWpFQHRK5av7hOrxdOFGKwcl%2F2nrFOwyR4htkcCy%2FMUua4yQxILPh6zngBuAm0Eb0XKzxbNLvv9G6O5YGoAG8s681zWnosKuoTLcR9VtLKBaTwH08IEQ51fVt1M%2BM6Q7xVCRsVY5r%2Fy%2BUOxL42lZgS%2FLif3TA8w8TOqIRSLX%2Barjsej3rXOTKUK9qtkajs34WSz7hk77XD0HGNXRW22aQY%2Bn%2BtRJcsG2ewVNEBRPvyY401UPof4H4EkN%2Fa%2BoF36QuUc1SVCx96c5Dkv%2FU9doxGsdRw6n0yiAnaOSShPfrI6vLm34BiPHewvD9jcrkYZQJdIBU7RPY9ATGJmsMIqEzsIGOqUBWwLklUDBd0vKTXoX9T2%2BRBuxN3f5qpM89ufS8EYtz3MxLQuddF4RaNQyd%2BhCZXsu%2Ff6LVMN%2FLS2PKAlfJ2aoYhz3IqKnEDaRZcFGlUwk97QWm8Ub8w5WZsIr3Ff3acJYu6arp%2Bn2jTQcY5iJFC7u8vNh3y1Oj3BUPr9pQpgWxkOvp3sugbPyKxu7M12VhkdhZhVC8%2FIImIdjEHF9t5NzxH8b6Mso&X-Amz-Signature=c4ac59448fbedcce1b8105c56ec68300da055e84d39ba2999294473a2534513b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQQAOZX4%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjRfcNjQzZEImHwdrEnzzTxw%2F4fjEF4Rxt%2FTFjTwYGdgIgcVMtOrc01UbV2CZxxSbT9cyNIhJt%2BgBitV%2Bs3EQ4ofYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA05O1p%2F0v9928EdCircA9D9h5XgjhWEZtldHQywyr43hwj8OgHvtZ8KzFpTqpNvJdJi9IwCACfoC8eZYA8dHS0qtQlw1q%2F7a8XYXFw9TrFx%2FD3BRhCICU3EG4P1%2BKHfTSkaM61WXlVVVR%2Be%2BoKeBJfnGlTUMnlBaBJ647bVTvBDle7eaEstFYBiAySu5TspKm3oufGMop%2Bu%2FBqdiLCs21XQJBWOmSfpPmLAtnWK9NhqRExMdbW8%2BDpzNRy3IY0Mjj2xm3ZMNnpY6cBGT5G32jvLQMtKkuPpCb%2FWNxSkyCycrVZ4IiX11yVWBGICnCCHJRZmGxmbWWRUGeBC6rYcfE6S1dlQNUC1kEc3f7vcDzvMDRPvPAUgVXGNE2xiFG19I%2FMt1rDDoarx%2B27wfGLv4BpjkMMwFHqoeC4i9hifzShnE944npBJ%2F9bZ7cznRQe0cHQQjyh3tyzD5lOUJnxTtj1ptlM%2B6Mnbxu0m6lQJaWnQCw3dCACitwdRuGresu3D7U5N12jSjzRbciddYDxXgJIMNDaFYMNimMfYwBW9bnEiB9k6rA%2FyTqrg4XMb9zYiyITTereEdqAOp5ZhGzGdoeAFCtI7Ocah2kmNwc%2FUw4%2F1ciOM7aZHUov%2BzcXHDhyhoZmw%2BQSLelVlzrAcMKWEzsIGOqUBSssTuHJ9w75uBkIbnvyBLPWTSdj0M956THJOHd4riA03MRMdnvbHvhRKnT%2BBw2X2V2%2Bjw0%2BXCo3Ku0hTs3oDd7eXWe0T3%2Bv2ro%2FKcKciIny9EAjkYFZjy4amT6rOCnL4HHn3px77Z7wOcnRXrjIXyqLW94UTBpAmP3YSqGBTGE%2Biee2flwnPgMIHDntEHJrriv4%2FQjKSWH%2B%2FL7vJFx5J3187BrEQ&X-Amz-Signature=295c1ed1c4eacf0b9513300bed7f1e9e429e5deb7df617ebf080e969f7498b39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
