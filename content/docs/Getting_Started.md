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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DTK6WG%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQChMxPncdpM9CmBGrwNgCcZBCyeWwty1xBCOxCKbc%2FvTwIgPxTdcSiwOa6JnzJp05CFfsZeofiLEncUan7ocJI%2BzXAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGu%2BmUxNWj%2Fj30IFircAyM8jQ7Hwc8N7Nc0gSASiaCDIite203UCqXO4OhqPpuKI%2FiBrZyf51my3i5MuvGvelxs6XT8lfKC7XAfr0VFCpXSHm7QS6gMGW2vB7mPA2XdT4HQSKSUr8Nk6Kjf3yviqbUZOVR88AoBuXoaNOgX%2Bc%2FekcJqE375ReVBLuVhgxOTkQWx1SvG5nXUhquwDNEpGBjaJuXwU8GRXCJ98sgu9vgMP2cm4Ab%2B7koxzK6tChUUO9FBw5%2B2FremBtLxR%2BIQeo1FjoH4CBRWsHITFM8wWgu%2FWwq3fgX7szz%2B9w65%2FAcpMl%2Fcf8EzxTYyrPPgsf6LXZFCUXGtbTtAtvRNgNymmduQ4rP0pnH%2F6vjP4uyID24P4a3Fua8vKnRD3LUPniuxjWcPMmPGI0gd1lnMKXJCqF7il5kBp8dfEy7HKVQEiP%2FZsdqr71Ura0vQkM1EikcvpaSFq4olqGURTbQHJyhaABjezjhqTRlej8JaYcPrIs0hHuCKB16KFbWU2m8OOulXPa2pRgJWj4Jqr%2BKI0R3qH6pXxB6uI%2F1LIH6fIYd7MR5DyI8pbjBK2YcVfTg1ILJ6spd1JqWxjlzYgdKgUz9jUjNL4N5z34tLcXcWX11i%2F1dvgW6ciAtzU1TgdbWIMIfl08AGOqUBYvN3KgGOUKzWMmXnXcuQvvmptBVBtkYBLnFV1HNQPNhl%2F141qvU5qLsyM24ybGk%2B8QDFWHJxEWJ%2Bqo1pZ1vBaYUqH0zUWcv7NvHGVa6ud29mO5MRBE0Nkq%2F5nB%2F5%2Fo1AHv0%2Fhu4BK9ilIWY8yGweCMIPZ9Ljo2hjEaOOacEd4FYab%2FK47%2BUUNUCVOAVfn81YBAdlufoLXlojRfNH2wqT2s7p3Iel&X-Amz-Signature=d1e66277013e5bc6be55f776093761d6a58e3283273fdb67a23e5199757fc02d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DTK6WG%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQChMxPncdpM9CmBGrwNgCcZBCyeWwty1xBCOxCKbc%2FvTwIgPxTdcSiwOa6JnzJp05CFfsZeofiLEncUan7ocJI%2BzXAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGu%2BmUxNWj%2Fj30IFircAyM8jQ7Hwc8N7Nc0gSASiaCDIite203UCqXO4OhqPpuKI%2FiBrZyf51my3i5MuvGvelxs6XT8lfKC7XAfr0VFCpXSHm7QS6gMGW2vB7mPA2XdT4HQSKSUr8Nk6Kjf3yviqbUZOVR88AoBuXoaNOgX%2Bc%2FekcJqE375ReVBLuVhgxOTkQWx1SvG5nXUhquwDNEpGBjaJuXwU8GRXCJ98sgu9vgMP2cm4Ab%2B7koxzK6tChUUO9FBw5%2B2FremBtLxR%2BIQeo1FjoH4CBRWsHITFM8wWgu%2FWwq3fgX7szz%2B9w65%2FAcpMl%2Fcf8EzxTYyrPPgsf6LXZFCUXGtbTtAtvRNgNymmduQ4rP0pnH%2F6vjP4uyID24P4a3Fua8vKnRD3LUPniuxjWcPMmPGI0gd1lnMKXJCqF7il5kBp8dfEy7HKVQEiP%2FZsdqr71Ura0vQkM1EikcvpaSFq4olqGURTbQHJyhaABjezjhqTRlej8JaYcPrIs0hHuCKB16KFbWU2m8OOulXPa2pRgJWj4Jqr%2BKI0R3qH6pXxB6uI%2F1LIH6fIYd7MR5DyI8pbjBK2YcVfTg1ILJ6spd1JqWxjlzYgdKgUz9jUjNL4N5z34tLcXcWX11i%2F1dvgW6ciAtzU1TgdbWIMIfl08AGOqUBYvN3KgGOUKzWMmXnXcuQvvmptBVBtkYBLnFV1HNQPNhl%2F141qvU5qLsyM24ybGk%2B8QDFWHJxEWJ%2Bqo1pZ1vBaYUqH0zUWcv7NvHGVa6ud29mO5MRBE0Nkq%2F5nB%2F5%2Fo1AHv0%2Fhu4BK9ilIWY8yGweCMIPZ9Ljo2hjEaOOacEd4FYab%2FK47%2BUUNUCVOAVfn81YBAdlufoLXlojRfNH2wqT2s7p3Iel&X-Amz-Signature=305d7c3714e654e5067a9484d5cf9cd7721243b4cd455006382a7ab3fe7aa6da&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DTK6WG%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQChMxPncdpM9CmBGrwNgCcZBCyeWwty1xBCOxCKbc%2FvTwIgPxTdcSiwOa6JnzJp05CFfsZeofiLEncUan7ocJI%2BzXAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGu%2BmUxNWj%2Fj30IFircAyM8jQ7Hwc8N7Nc0gSASiaCDIite203UCqXO4OhqPpuKI%2FiBrZyf51my3i5MuvGvelxs6XT8lfKC7XAfr0VFCpXSHm7QS6gMGW2vB7mPA2XdT4HQSKSUr8Nk6Kjf3yviqbUZOVR88AoBuXoaNOgX%2Bc%2FekcJqE375ReVBLuVhgxOTkQWx1SvG5nXUhquwDNEpGBjaJuXwU8GRXCJ98sgu9vgMP2cm4Ab%2B7koxzK6tChUUO9FBw5%2B2FremBtLxR%2BIQeo1FjoH4CBRWsHITFM8wWgu%2FWwq3fgX7szz%2B9w65%2FAcpMl%2Fcf8EzxTYyrPPgsf6LXZFCUXGtbTtAtvRNgNymmduQ4rP0pnH%2F6vjP4uyID24P4a3Fua8vKnRD3LUPniuxjWcPMmPGI0gd1lnMKXJCqF7il5kBp8dfEy7HKVQEiP%2FZsdqr71Ura0vQkM1EikcvpaSFq4olqGURTbQHJyhaABjezjhqTRlej8JaYcPrIs0hHuCKB16KFbWU2m8OOulXPa2pRgJWj4Jqr%2BKI0R3qH6pXxB6uI%2F1LIH6fIYd7MR5DyI8pbjBK2YcVfTg1ILJ6spd1JqWxjlzYgdKgUz9jUjNL4N5z34tLcXcWX11i%2F1dvgW6ciAtzU1TgdbWIMIfl08AGOqUBYvN3KgGOUKzWMmXnXcuQvvmptBVBtkYBLnFV1HNQPNhl%2F141qvU5qLsyM24ybGk%2B8QDFWHJxEWJ%2Bqo1pZ1vBaYUqH0zUWcv7NvHGVa6ud29mO5MRBE0Nkq%2F5nB%2F5%2Fo1AHv0%2Fhu4BK9ilIWY8yGweCMIPZ9Ljo2hjEaOOacEd4FYab%2FK47%2BUUNUCVOAVfn81YBAdlufoLXlojRfNH2wqT2s7p3Iel&X-Amz-Signature=4995fb7b129b0f4752336c6c791c61f98332469a07a39c9ec8fbc1a9f4bc8fe2&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCPZUVFK%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCCoVGesW4IlC1liGGmITA2Hr7S5zgpgWdEMd4F122GlgIgBtrkkYFfXTsQI70ufonevsqFWSK9VSdw8c5V3AXShpYqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjNxOUEJ0j%2FicILWircA5ns1xrmdslXsAPKIpq3TetXcZFtxQU3vEQzoQfluAlkcrz8zbbXYupMjvVu4fUimoAqKL3hM6H2R39Joqf5wELcl5o%2B%2BZMoiuzkE%2FtcMqmk2oNPq%2F49WODsDVPaA%2Fm5m6O71gBms6rNFJV2RqDLJMNAoMnlyxXnw2Ml%2FBJhSWpfgcutR1tS9d6UA6ETKqMLvSIGVHHZnFqOTc80TaXm5sdd3HDRD%2FwAjJXdEkmR%2FgmIhUYS0v284aj3v4SIGeRU98%2BWFC5kHaGTG94XwyipccU6FcC8DZ1VUA0NfbYY7JKOs1W6M9srB88WXmg15EvcWX%2FlHoK9RKeVTWGLm6rmKh4N4wJU%2Bb1pbgnSkPoC9sPLHBCPKBKB1QADrqDDijjyCGnnIt0YOR%2BVv7efeUP1O5Xo9RxD%2FPlNMNXyIuOstcdggEH9oseISn846W9V9uOY5vKuafODVg6e1RkeN7sqUjBLeWx8CO6Hs5SneDkn8p4TpMN71OfbhEdXG9Kk2rQa1WPpjMHzZRP8wIetaZP8XgnBbci38jF4IZ%2BgMojjKDlj9mNvlSJR1rFJYJ%2BU4ntbtQEOhNt54OrjoBLhobGL8hjEjFK2RkmFWxvJX3rensG0%2BPTRwNzZecjvHHXsMJvk08AGOqUB2uXk%2Bl%2FdD%2BfT3rmCFa41L2Ipl%2F18V82DbRkXlN9gRFZKWRBGCx7ykvI3P8Q%2Fc%2FdTobgbsssZNVAe%2FzAks%2FGz8%2BgP8kM9fr9ne82OzNj8EEIrTMhSsZZllI%2B1yyzJ3VhoUxFsA4C8tTWJzUsIjPWwwmjVzXHNrp8oQbHAvhrz5ZUMl1E4%2FNp%2BoBKi52yrEl25BfEMHMf98SPJJ5Nd8Ayw0gp5m5J9&X-Amz-Signature=33934feedc75a17898b6d7b6cc75c6ca4b7aa0cb8b1af4bbf62ba46030414ba7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675AOQEO6%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIB854FKCfIRFZQvgPLkMy7p4rGsAkqv%2FPJWcxrGDWnrJAiAp%2F8Wtox46Ql1OO%2Bif6O1a3gtofVwZ5xoW6wPA03C04CqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYX4tsog1y6ThQHsMKtwDN7GLVnX8KWtAVPaZ%2BRW6DNMRZCmYA7SOBnjeESpb67C079ewfk1XsfQ3ZXRsZFIxnyK4lXuC0xAYdfBRSK8mVSu4876Pz8L%2F2N6FCtQarKtbKuvYM8mou3cZnIooSVa1mBibS5Wc12vcXS%2B0CTXRgYyNPrr5ldQo5JqW%2BVH2KArEQPlKTvH2NR1YYKO0ws0a4VNCjhaFmleMqRrvyfY2OHvBqvqrlXySBgSelqjqq5vne2EyVZK6TRKgeF7dHVbwuloW%2FHoUkIe2mUaeeSToyFOannic7MkYq2n%2Fwc4GqGLwkSEOeYBj1vRPExk0Z4oyQX2r%2BwFH1rqhFqsvWLiqWzRdoqJqi%2F5Qcza8%2FcsNlOA6tmN8uOt49bILF1Cob0I%2BM3WGxG%2FCRypD379vo%2FP16Xo%2B2zWPUNSKhT0SgJF57HAyc%2FxEAh5bNM8%2BSCtC0Vl7KPzDRRU2kUaauBKNNuyzwSrY97EfdGPHsXB7hyFdBbqLVRb%2BCWBkXFbS22%2FnlVsGzwJdcyisFlzxnYH50ej2e7j1uRSSrCc1Y%2FxvOlggN7vDc4aKW5CVjBXAkErAE11XcaFpIMQNCYwvYppbrJewjlzDTLzDzxhtPVrOm32JcU1wPdqlhNOhyFpa%2Fa4wh%2BXTwAY6pgHJUhBw%2Fb8WtH2Zcl2a1Tv2vWpiJ8HeZ61R0NZkBhNE3sJAVtr5zZyWznnPAkZffyiWSUn%2BGDs%2FG%2FNL8UAqJqCiNAZW4SPbGxW4eC3eq5Ja7l8H453YdWcTnRJPvx0XKuuaLVH8N34q67Tsuk5ojkW%2FktZhWUX2OrDjWaYTAWEt04pfq%2BGY1b%2FM2CmOWNswLgUbd99So%2BtCuQEy8PmsFgIu3nObAQuR&X-Amz-Signature=8802c59a4cd2cafb7613f705c8d71053a9e32c077b00574f84ca6128c54e73f5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DTK6WG%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQChMxPncdpM9CmBGrwNgCcZBCyeWwty1xBCOxCKbc%2FvTwIgPxTdcSiwOa6JnzJp05CFfsZeofiLEncUan7ocJI%2BzXAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGu%2BmUxNWj%2Fj30IFircAyM8jQ7Hwc8N7Nc0gSASiaCDIite203UCqXO4OhqPpuKI%2FiBrZyf51my3i5MuvGvelxs6XT8lfKC7XAfr0VFCpXSHm7QS6gMGW2vB7mPA2XdT4HQSKSUr8Nk6Kjf3yviqbUZOVR88AoBuXoaNOgX%2Bc%2FekcJqE375ReVBLuVhgxOTkQWx1SvG5nXUhquwDNEpGBjaJuXwU8GRXCJ98sgu9vgMP2cm4Ab%2B7koxzK6tChUUO9FBw5%2B2FremBtLxR%2BIQeo1FjoH4CBRWsHITFM8wWgu%2FWwq3fgX7szz%2B9w65%2FAcpMl%2Fcf8EzxTYyrPPgsf6LXZFCUXGtbTtAtvRNgNymmduQ4rP0pnH%2F6vjP4uyID24P4a3Fua8vKnRD3LUPniuxjWcPMmPGI0gd1lnMKXJCqF7il5kBp8dfEy7HKVQEiP%2FZsdqr71Ura0vQkM1EikcvpaSFq4olqGURTbQHJyhaABjezjhqTRlej8JaYcPrIs0hHuCKB16KFbWU2m8OOulXPa2pRgJWj4Jqr%2BKI0R3qH6pXxB6uI%2F1LIH6fIYd7MR5DyI8pbjBK2YcVfTg1ILJ6spd1JqWxjlzYgdKgUz9jUjNL4N5z34tLcXcWX11i%2F1dvgW6ciAtzU1TgdbWIMIfl08AGOqUBYvN3KgGOUKzWMmXnXcuQvvmptBVBtkYBLnFV1HNQPNhl%2F141qvU5qLsyM24ybGk%2B8QDFWHJxEWJ%2Bqo1pZ1vBaYUqH0zUWcv7NvHGVa6ud29mO5MRBE0Nkq%2F5nB%2F5%2Fo1AHv0%2Fhu4BK9ilIWY8yGweCMIPZ9Ljo2hjEaOOacEd4FYab%2FK47%2BUUNUCVOAVfn81YBAdlufoLXlojRfNH2wqT2s7p3Iel&X-Amz-Signature=3648e669ab4ecd960a37e6577dd78b4a52cf448b856a0b146db583ca5a34a613&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
