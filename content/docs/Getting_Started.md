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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6VRPXSX%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKB5Z7M3CP9ye%2BKFg7xQtzCFcSP9MU4z%2BQFUXmFpQsWAIgCbaLtjAu9QRqIhBHUL3ozAZg7dSfePysSrr1eOsE2H0qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiSH1%2FVvzE1aplUcCrcA%2F2tzDcbvznmSvnuY4cQo%2FFi0hD2NHvFfKX2HtVMUDH%2BYhnQx5Cw5ZAsoWwRuuDvTUFyf3dD9oxWk%2BSKqnVSjcc1TI%2BsJF6KcKyiH3xatih%2BTFzAKSNgzTspcfwvXsZ7wuF9qwtdl423%2B%2B%2BBnvF3dTra6NR4YZriVqz9aX9qc2mPEN9WGPQ4EvY2SqWa1IPbum7%2Fifbl3u%2B5lp2x%2BH5q5okOrlQx2%2FKWCaeXPKtVzGLETR7CP1J5BvgJES%2BP71ipIZiILCKJjUCRBaKM6fcwhl8ZXsIMADzkL8TcnAuj15yJx6f%2Bla7B7XYIqipRISj4rR82LH0lXe0eAqG6DpNFGh8QVlMyWZ1iGzPlLiSzcaGU9X8KiIaduj9Uyot0eiK0xchqOREcmW97Y6e6DSQMUz3N0woVN1FGQJxb0DTQKx244YFm3u1UFaHvCUQFIHrE%2BGIgABp3BIAwhBh3gdFMB6hmuLAzKRlcZIGcv%2FeJxr7MYgHaIZa3DOa6hhGfCugm%2BhXyTVXneTbgZkHcgAOgW0favw4NbkK3uQgGYck3b%2BfnxH2fcqQZMJ51WgHBnYLV2vwF%2FaG7gU0FWJbx32rRToU6Rkyz2g0kVj0SB7P53ZH5cFm3vXg6%2BNboeziqMK2Io70GOqUBPnV2kTM2hL1fCUIMPSC33rpWCDsL6n27WrjKi9Rrp1DZzYsWS6d54wE1xK4TYMaotdP6eV%2FYsqAW8h%2F6NRZ4fmXlnm33b5DlDW8CnTh7FRr03npxpBsmhrK%2FoH1SC%2BSTIwHoaI6gtoe3f%2BuVb7dvelIIBgSW7AphREIMrf8AgD1d%2BBCK4KLrZnAZPhurW5uZVL2R3Isu0TAQwq6gIgBUbDQUmRiD&X-Amz-Signature=73bdda0085e894ac12dbcf7fa6b0b47e9730cdecdaa04a1a4ce94e037c65dd87&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6VRPXSX%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKB5Z7M3CP9ye%2BKFg7xQtzCFcSP9MU4z%2BQFUXmFpQsWAIgCbaLtjAu9QRqIhBHUL3ozAZg7dSfePysSrr1eOsE2H0qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiSH1%2FVvzE1aplUcCrcA%2F2tzDcbvznmSvnuY4cQo%2FFi0hD2NHvFfKX2HtVMUDH%2BYhnQx5Cw5ZAsoWwRuuDvTUFyf3dD9oxWk%2BSKqnVSjcc1TI%2BsJF6KcKyiH3xatih%2BTFzAKSNgzTspcfwvXsZ7wuF9qwtdl423%2B%2B%2BBnvF3dTra6NR4YZriVqz9aX9qc2mPEN9WGPQ4EvY2SqWa1IPbum7%2Fifbl3u%2B5lp2x%2BH5q5okOrlQx2%2FKWCaeXPKtVzGLETR7CP1J5BvgJES%2BP71ipIZiILCKJjUCRBaKM6fcwhl8ZXsIMADzkL8TcnAuj15yJx6f%2Bla7B7XYIqipRISj4rR82LH0lXe0eAqG6DpNFGh8QVlMyWZ1iGzPlLiSzcaGU9X8KiIaduj9Uyot0eiK0xchqOREcmW97Y6e6DSQMUz3N0woVN1FGQJxb0DTQKx244YFm3u1UFaHvCUQFIHrE%2BGIgABp3BIAwhBh3gdFMB6hmuLAzKRlcZIGcv%2FeJxr7MYgHaIZa3DOa6hhGfCugm%2BhXyTVXneTbgZkHcgAOgW0favw4NbkK3uQgGYck3b%2BfnxH2fcqQZMJ51WgHBnYLV2vwF%2FaG7gU0FWJbx32rRToU6Rkyz2g0kVj0SB7P53ZH5cFm3vXg6%2BNboeziqMK2Io70GOqUBPnV2kTM2hL1fCUIMPSC33rpWCDsL6n27WrjKi9Rrp1DZzYsWS6d54wE1xK4TYMaotdP6eV%2FYsqAW8h%2F6NRZ4fmXlnm33b5DlDW8CnTh7FRr03npxpBsmhrK%2FoH1SC%2BSTIwHoaI6gtoe3f%2BuVb7dvelIIBgSW7AphREIMrf8AgD1d%2BBCK4KLrZnAZPhurW5uZVL2R3Isu0TAQwq6gIgBUbDQUmRiD&X-Amz-Signature=fa44ec33b16b2bd42a2e5fd15bc83c5b0feba1840dbbd3a000ef6b4b78b86826&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3SN47C3%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY4RC37Q7Op0Qyecc2DT2xN43KoCdOLLjFyeQJYf24dgIhAM9eDeda0P8oFFptxzpIPaBfkKmxMUx0%2BGFI%2BlvoiNlMKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrueZVJRgoTW0xwloq3ANTP3NVjmaTpNW5eW8WE%2Fs3tLKOX0plAp5VG94TNbsm9fPMgC0LPWv17l7TxibWyi5AZ8%2FANRTley5xuNvIHI8YjJIYhz5CTXy%2Fl6qvN5k%2F1kx6IPUrlk25l%2Fh3MWgeOFxJqJDE24TOrOcrzLv89cByaFn087lrPltCmEqvdMO18Tf3s8nSy0S4IcXT2m1Qq58vpLQRxVgVi0oU10zEIln%2FzZ9FPghSc6K%2Fa5AVoT7tLr55AMVUsrp%2FAKTRsQf66AqzBuEOwbKwNhy7VywARmGkXld4%2BVnmFuQMpn%2BkT9D%2BAYltj7YYxkixgcrCnTUDYdrqW3XD84CtFuYobGLkJT4ajQhKpgmoDd52IzzbscngAvJlfP0iKdG%2F%2Bw1bnF70dc1yfYOxX2oWY1O3eTiMIiFlKgLfHMLhVczhBqLCMa8QKAU%2Fu1Bz7DXuWG4L8jZOekdOGDOBACnDqX%2B%2BrfDc0tLSpqJzV%2BX1jwWAU6Jll0LOiOaNT%2FpeoFmuUe9Cfxpd1mRL0339efBaVpO5vh%2BpM%2BTQ94oHqfgcTNDtFxegAF77mbBqafji%2F2lAFq5Frk%2B6ngAlqAfdUffbyaJ1zzm1giXXXDCCemzxLMHazmAmjZnNBRFBIj710d0ytW9f0zCph6O9BjqkAYIl4dn9oLWv3ulykxtm9AAoNKkwNtM5kIn%2FlbSs0aBgjjbPIyFscz%2Bt4e%2FkjUwwiMEHXkMIuySEFBEUHf6WQtjZ05pvBpCTG8UbaWe2wUWwkT96nFSRhDj%2FkmXrK%2FExO%2FMePgcUl0AYp3a4xKKxJTiATxPiLPQq%2BZ6F%2Fc47FwfKkfl0LojTeRQwEbquckIgxpjEZURfDcHE2eoRUQ6iGwBGmNXD&X-Amz-Signature=906d53d19a09fc02908296c61e7208d7db42295cab53bb8965574a7843fc8f15&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KIPZY7G%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwv%2FwbJ6qUYkQnUp%2B5FUgepU%2FOusz5NI4OGSpqJY2NgAiEA0zpvng9nKNtFtQmlaPUmZnvJvwB0ALysGn29oY%2BkNJAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYLda7BOarPE6avwyrcA7vNbZlbqImOxx93RNwHKS2BxZ5DO8ii6%2FV1dMcges7rZa0U6GpRjy34M50gMEbMVYPRRQCO7QjgyVUg3Ogvc2hv1v3LDlQA7fH8as42KeYuxNOOM12RTCgE3nucPh8Qmuts2ShPYvEz2F1e7tFqecdJRjh0SE9Xk5KyAe5g2NMVLpa1OGF44zJdA9r2cGI9KtvjjuffuFLlkwzRkjDLKy66qFyIWBpW9Oi6ujYe088I73hEFpqbUJM9e3WDNWBMUV7GMb7Cv3PfKiYqDiR46WMcwYOwLzBFphZCP%2FdrvOtnSio8D3tWl9mq%2FdOitwUsmCipu%2BLb1RrSKAnBw1lq1JEKDY%2F9KFRSfV86150MwPk%2F1Yy7dT4H2w1KwM%2FkmzI72MjjZ%2FTD95iT%2FgMQVdktJe6lsx8Uf2ExpMwAbBGEfa%2FhqdI2KaM5Da82943YLJk5k%2BABiGfRe3ReKh36i1R0f72WjM2bUGPYT9sf34gnd2TRIv6vPxJSslmiQRMOLwZMnnisegy7wb7udL2lzSamteju27cb8LR5iq6FA7l5MXUx%2FxQ5wXK%2F382cOiFrlRKI07aqnNkVfI0O9mtqfUNtdxcXTkhMCm%2FxHg5GXgcHpmpBoa9mYnn1coKCw8o0MKWFo70GOqUB0S5sgz1avnEHDO1cJFEdqo0IXgk%2BG2xWo8i%2FLrouPrUi57yU3hx7FFoi9oPxP1jS1YIq0Gs7cl6EReYRhMfIHgPXPEbYpK5nSRr27nLqeO1rro3Q8LvnE%2FvTQ2wfYuHQu5Mr1KerF%2Bgt7%2BRlHgjO57Egfl%2FwjYEAbFMVwwLNmEjPQB0DaCkRdNTdKHnbjc8pvj87Pm6W0tt3INMqUtMYPP%2F7pgiT&X-Amz-Signature=930f06f88371e3b872023cb08a25ed6bec482894df6c0afe0826eba818030934&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6VRPXSX%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKB5Z7M3CP9ye%2BKFg7xQtzCFcSP9MU4z%2BQFUXmFpQsWAIgCbaLtjAu9QRqIhBHUL3ozAZg7dSfePysSrr1eOsE2H0qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiSH1%2FVvzE1aplUcCrcA%2F2tzDcbvznmSvnuY4cQo%2FFi0hD2NHvFfKX2HtVMUDH%2BYhnQx5Cw5ZAsoWwRuuDvTUFyf3dD9oxWk%2BSKqnVSjcc1TI%2BsJF6KcKyiH3xatih%2BTFzAKSNgzTspcfwvXsZ7wuF9qwtdl423%2B%2B%2BBnvF3dTra6NR4YZriVqz9aX9qc2mPEN9WGPQ4EvY2SqWa1IPbum7%2Fifbl3u%2B5lp2x%2BH5q5okOrlQx2%2FKWCaeXPKtVzGLETR7CP1J5BvgJES%2BP71ipIZiILCKJjUCRBaKM6fcwhl8ZXsIMADzkL8TcnAuj15yJx6f%2Bla7B7XYIqipRISj4rR82LH0lXe0eAqG6DpNFGh8QVlMyWZ1iGzPlLiSzcaGU9X8KiIaduj9Uyot0eiK0xchqOREcmW97Y6e6DSQMUz3N0woVN1FGQJxb0DTQKx244YFm3u1UFaHvCUQFIHrE%2BGIgABp3BIAwhBh3gdFMB6hmuLAzKRlcZIGcv%2FeJxr7MYgHaIZa3DOa6hhGfCugm%2BhXyTVXneTbgZkHcgAOgW0favw4NbkK3uQgGYck3b%2BfnxH2fcqQZMJ51WgHBnYLV2vwF%2FaG7gU0FWJbx32rRToU6Rkyz2g0kVj0SB7P53ZH5cFm3vXg6%2BNboeziqMK2Io70GOqUBPnV2kTM2hL1fCUIMPSC33rpWCDsL6n27WrjKi9Rrp1DZzYsWS6d54wE1xK4TYMaotdP6eV%2FYsqAW8h%2F6NRZ4fmXlnm33b5DlDW8CnTh7FRr03npxpBsmhrK%2FoH1SC%2BSTIwHoaI6gtoe3f%2BuVb7dvelIIBgSW7AphREIMrf8AgD1d%2BBCK4KLrZnAZPhurW5uZVL2R3Isu0TAQwq6gIgBUbDQUmRiD&X-Amz-Signature=d7e902815c0476d4a5bb0d961d32b2a0022182dbd5e1bd4b94ed56eb6daa6dc6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
