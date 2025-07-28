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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLGYBEEL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGzS7%2FOknDclYsrb1h3HVwnv4xC%2FVSaXEHbb83XTPm3JAiEA7CzuWNZqteLMnpxJhckphhiWd9e38%2B3gUSCAaRjxnSMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCN5vlJ0aVnKQELIEircA7k3OvMN6wK0ZJUPuRyid7Ol2HnOGPN6cYDWrpQPXHP4II269wBGYckWk13miH88O3fveFJD8RwwhS1wEUmhia5Sx4bcTUZOV7zWe6dOC7XGg%2FHMH8Bz9dwCJmWnN%2FnXZZ9Dcj4KP6QM5BjaucbOdSACP6EHX8sdMdV%2BleO8tCn%2B%2BMPrgOku8iM86I3bvlTGBZAAg5uHEHfhYVjzuAErqntMTucq8mM7RXljnF1MQ9VPS0vHURUfz%2FoLcQtVx%2FHvmXuPo3mgc2FOFq7rshkZSucMkRcLJwP2pXTO9L5RGmUvy89k6fxdHtnfaxx%2FSNk%2FHgOkCFFzFYhiUc4BddYZ4YztiFzEYjuBUiU9AfqKAT3kH7Afl8Quq%2FX6BbNmt7YdrgkXUe39FLybIMlHeNwEo2F4eQ7sBh6l9%2Bs6OULcjsdzZV94gujHei37P68Yectq1X7psJOJgjGvWG1dq%2FpbgGPkQRYpz0S4w6UFFSz0AkCAKzrl%2Fam4pXptdURqcGaYPGtpolhCeHmjN9Old9S3Tnz9i9D0IYojBGANFiHQ8H05%2Fuj571O6Lh9%2Bzj4U72NOpiLT5JUu6QIBkb49Ke0VcEXXJLqT1cAT8Do4y0FYoLH9vy266nMicLk9ROhwMNLxn8QGOqUBVJ5RsroJAssdmENmG2xcmihJrruP4OWlS7FvtTpU1fVPV26VnFwWYcQdH49YPudMroJCbhScOFP0kJFPPi%2FWn9BOdLzGWzkyvj1j1lfHXzj8BGXBwqnmsX6gn60Qa%2B4ZEhlpWxJb1V2x46F5NQMwPuqUj0T8hjz%2Bz7dc8AB4pZrG4lCwER4ndQvv0kJebhzD3qlEnmVA0l5zFNBT5X%2BKm8ceX41P&X-Amz-Signature=821b1d4ba08bf6d278105e7708209921f3795c1f31a111173ee4c67648a2f68a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLGYBEEL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGzS7%2FOknDclYsrb1h3HVwnv4xC%2FVSaXEHbb83XTPm3JAiEA7CzuWNZqteLMnpxJhckphhiWd9e38%2B3gUSCAaRjxnSMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCN5vlJ0aVnKQELIEircA7k3OvMN6wK0ZJUPuRyid7Ol2HnOGPN6cYDWrpQPXHP4II269wBGYckWk13miH88O3fveFJD8RwwhS1wEUmhia5Sx4bcTUZOV7zWe6dOC7XGg%2FHMH8Bz9dwCJmWnN%2FnXZZ9Dcj4KP6QM5BjaucbOdSACP6EHX8sdMdV%2BleO8tCn%2B%2BMPrgOku8iM86I3bvlTGBZAAg5uHEHfhYVjzuAErqntMTucq8mM7RXljnF1MQ9VPS0vHURUfz%2FoLcQtVx%2FHvmXuPo3mgc2FOFq7rshkZSucMkRcLJwP2pXTO9L5RGmUvy89k6fxdHtnfaxx%2FSNk%2FHgOkCFFzFYhiUc4BddYZ4YztiFzEYjuBUiU9AfqKAT3kH7Afl8Quq%2FX6BbNmt7YdrgkXUe39FLybIMlHeNwEo2F4eQ7sBh6l9%2Bs6OULcjsdzZV94gujHei37P68Yectq1X7psJOJgjGvWG1dq%2FpbgGPkQRYpz0S4w6UFFSz0AkCAKzrl%2Fam4pXptdURqcGaYPGtpolhCeHmjN9Old9S3Tnz9i9D0IYojBGANFiHQ8H05%2Fuj571O6Lh9%2Bzj4U72NOpiLT5JUu6QIBkb49Ke0VcEXXJLqT1cAT8Do4y0FYoLH9vy266nMicLk9ROhwMNLxn8QGOqUBVJ5RsroJAssdmENmG2xcmihJrruP4OWlS7FvtTpU1fVPV26VnFwWYcQdH49YPudMroJCbhScOFP0kJFPPi%2FWn9BOdLzGWzkyvj1j1lfHXzj8BGXBwqnmsX6gn60Qa%2B4ZEhlpWxJb1V2x46F5NQMwPuqUj0T8hjz%2Bz7dc8AB4pZrG4lCwER4ndQvv0kJebhzD3qlEnmVA0l5zFNBT5X%2BKm8ceX41P&X-Amz-Signature=14dd0f2bf70ff53adc25db6c9ca554e1d6c8d7146dbc64108df370b5bf384dd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLGYBEEL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGzS7%2FOknDclYsrb1h3HVwnv4xC%2FVSaXEHbb83XTPm3JAiEA7CzuWNZqteLMnpxJhckphhiWd9e38%2B3gUSCAaRjxnSMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCN5vlJ0aVnKQELIEircA7k3OvMN6wK0ZJUPuRyid7Ol2HnOGPN6cYDWrpQPXHP4II269wBGYckWk13miH88O3fveFJD8RwwhS1wEUmhia5Sx4bcTUZOV7zWe6dOC7XGg%2FHMH8Bz9dwCJmWnN%2FnXZZ9Dcj4KP6QM5BjaucbOdSACP6EHX8sdMdV%2BleO8tCn%2B%2BMPrgOku8iM86I3bvlTGBZAAg5uHEHfhYVjzuAErqntMTucq8mM7RXljnF1MQ9VPS0vHURUfz%2FoLcQtVx%2FHvmXuPo3mgc2FOFq7rshkZSucMkRcLJwP2pXTO9L5RGmUvy89k6fxdHtnfaxx%2FSNk%2FHgOkCFFzFYhiUc4BddYZ4YztiFzEYjuBUiU9AfqKAT3kH7Afl8Quq%2FX6BbNmt7YdrgkXUe39FLybIMlHeNwEo2F4eQ7sBh6l9%2Bs6OULcjsdzZV94gujHei37P68Yectq1X7psJOJgjGvWG1dq%2FpbgGPkQRYpz0S4w6UFFSz0AkCAKzrl%2Fam4pXptdURqcGaYPGtpolhCeHmjN9Old9S3Tnz9i9D0IYojBGANFiHQ8H05%2Fuj571O6Lh9%2Bzj4U72NOpiLT5JUu6QIBkb49Ke0VcEXXJLqT1cAT8Do4y0FYoLH9vy266nMicLk9ROhwMNLxn8QGOqUBVJ5RsroJAssdmENmG2xcmihJrruP4OWlS7FvtTpU1fVPV26VnFwWYcQdH49YPudMroJCbhScOFP0kJFPPi%2FWn9BOdLzGWzkyvj1j1lfHXzj8BGXBwqnmsX6gn60Qa%2B4ZEhlpWxJb1V2x46F5NQMwPuqUj0T8hjz%2Bz7dc8AB4pZrG4lCwER4ndQvv0kJebhzD3qlEnmVA0l5zFNBT5X%2BKm8ceX41P&X-Amz-Signature=af0017a5387209760aa3597097211bcd8a45c671c76f6ce7a5376ccea94b8ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2QRUK7X%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T230943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCkGNI%2B6a8LqSe1Bkhz0dDH%2BtsuDA8w2k98wxX5wEWtfgIhAJY0DREE1tP8KiRc51p2DKrlHbR41otLiNdzaUa4vXd7KogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUZxYV5Q70vmDy%2B5Uq3APUsoIUe942N3QZdFBhuc6YspprlUQDzGiqze4a2ZtlFwzTl%2F43ufQGqkYHbZjN5FO1zKKJWViuQC80JO1glpHqlEgvQjYLs7I1C%2BRJ3ioR1HkrKtbWLgYtXlSRQcf7CJD854YFTCQfe9Jhlaj%2BOSv%2BWdkTZ3EBgTjq1iOtFHrfYMiYs1kvzZZl9ijYsX7ijefzGHOCVj%2FQ7w976ZkvMHup%2FFFA4UhY%2FmLGLGtWRyjsTgZoSaWVfOYm9N9QrHqIgecxwjolhNNo18%2BpFMPvw%2BWrtUATc50ZpZPPlNq%2FbSKhmBToKs7yCzuq3BykBVX8kuo8mb04VtgApkzGe6a2jj6tIHkmwix8gLZ8nZF5sXzgMe%2BMSSuNw1f5yPV%2B6WBiq5%2B452JF1rK%2Bi2UOfcanowR6g5Oz81HApNWl4OJGVBqctko%2F4MjCoEye9kkxicvtnpa8FJ%2BCYpBEmWvWx1WnwRpyfLJfG764oDtD1OfvILG1YIo%2BjM5Lrr0avNy2eHp9eSqRToS%2F36qsL7FseICrE3%2FLq6RZLZrUl99Wo%2BFNEOR1RDY7LW%2BHGx%2FeQrk%2FmksXYFFrJgE4k74q3trmLe4%2BCVGHDGZqyT42v%2BoqoYyxswANUM5G2btEj3W1w8pv5TDl8Z%2FEBjqkAT2unhD2IKZCguEY4eWHN0QW9Sjz4OuyqPzLdK9lPaje1RX52YwWOUBtHmzWXbixiIz6Fgqtl22lRFQ2RBJ2tLua5xNW6T14z80201p5adJR9WujDPCMCHWPaffOm6Nn0H8MGbgoKkAnHy5a6GZdvxH5hCgD7TPK%2Fj8LfWuseOydSxxk5K%2F8R60me7MbSIKVL1ipQxAtifx%2FJWg%2BBuK0mlZFNicp&X-Amz-Signature=194f71603b39d0302f04f42e455e883872821acda15c76c98c2471fb4a2af13f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKZJ2Q4B%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T230943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCBJ5Vvl41MGeX0%2BFzGPWphnp5vKEwAXhz1mtB0Tfw9HQIhAKC7QTP6nwVp4jT540fQUIKiytglrPczJV5qgpQNCj%2BzKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BCag35rJYo4igy%2Foq3AN7RgDeKK71bdUN3pZXsWf125qBxz0CepUpHGanSxBid8hjLe358jhW2ofo5tw54jWEMHBUCWadpnPrdLjqmlPyhzHLKhp4nprmrrvHmV0EeRbV%2B7pytYsT4YA66tlXXoYT%2BJHk9kUKoU3USl6%2BTYJ2iAN1vnIMiAkJV7GI3YBm6iAt6pxb7eQjw%2FQY6BV1Ex%2BbDHvIGYRkawoBQqEvSsqEaL1nyS%2BZ1nsvw5kK3U0XjaixNv8DHQ0lFgU7Yn%2F%2FZUI8EJkTP4A3%2B2QOpyZi9oJ%2FYM72mVqx8LEVjqKkoTCjKoS2K4BwlXiu5Xx6v6%2FFBncnBiwa%2Ff4cBR51NOTHjVgot%2BM7XWwsuCgZolO8T%2FZ8KfTZQIc%2Fw3IzGmhSUba1drk9Uplfec4oecJvqiXkjC8jC9yvTZf4kB2ucJQdrCpV2w0%2Fg%2BMVRcjhPZzKfBNX4W3RXaeKSIJ70B%2BEKoLa45bWLhv9Ag4EB3DPAiq1vvQfF34cdYp4dw%2BZCpGfgF8XOdGFJovkpLSPR6mvWC09ZmPp%2FADChSiTS5pE611qOnzJIZPiuTG4yXozwzIdmG99dmfUqmNYEe6x9alE%2FuYkkJKrt0vEeWNLDNr72MMZcHxYOQddru6y11zHCFRYlzCI8p%2FEBjqkARcnzDkcvgE5PE2rdQy3Dw%2BU5dUtf%2FMki5SCkAUobDvQpOs6qeyF%2FWPqS7nnUGACzjw5hIeJNCkCQREWoTngsOjEmlnpv%2FIdpECA3wKEv5t%2B6BZGaH%2B4W9OZsWpvR8t%2FtrY8ky6HQTTGovE3DppysYjZ4Yxoc48icutoUVrfCmYm%2BZCJq8Z0kdoC8zj8zV%2F0xt4Htj8UZfBxeUOWQkyZYM6L6Jzz&X-Amz-Signature=65ccddd3872e65146dc0d4c4581b657cf773cb119fa1e26c1003ef58402fd008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLGYBEEL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGzS7%2FOknDclYsrb1h3HVwnv4xC%2FVSaXEHbb83XTPm3JAiEA7CzuWNZqteLMnpxJhckphhiWd9e38%2B3gUSCAaRjxnSMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCN5vlJ0aVnKQELIEircA7k3OvMN6wK0ZJUPuRyid7Ol2HnOGPN6cYDWrpQPXHP4II269wBGYckWk13miH88O3fveFJD8RwwhS1wEUmhia5Sx4bcTUZOV7zWe6dOC7XGg%2FHMH8Bz9dwCJmWnN%2FnXZZ9Dcj4KP6QM5BjaucbOdSACP6EHX8sdMdV%2BleO8tCn%2B%2BMPrgOku8iM86I3bvlTGBZAAg5uHEHfhYVjzuAErqntMTucq8mM7RXljnF1MQ9VPS0vHURUfz%2FoLcQtVx%2FHvmXuPo3mgc2FOFq7rshkZSucMkRcLJwP2pXTO9L5RGmUvy89k6fxdHtnfaxx%2FSNk%2FHgOkCFFzFYhiUc4BddYZ4YztiFzEYjuBUiU9AfqKAT3kH7Afl8Quq%2FX6BbNmt7YdrgkXUe39FLybIMlHeNwEo2F4eQ7sBh6l9%2Bs6OULcjsdzZV94gujHei37P68Yectq1X7psJOJgjGvWG1dq%2FpbgGPkQRYpz0S4w6UFFSz0AkCAKzrl%2Fam4pXptdURqcGaYPGtpolhCeHmjN9Old9S3Tnz9i9D0IYojBGANFiHQ8H05%2Fuj571O6Lh9%2Bzj4U72NOpiLT5JUu6QIBkb49Ke0VcEXXJLqT1cAT8Do4y0FYoLH9vy266nMicLk9ROhwMNLxn8QGOqUBVJ5RsroJAssdmENmG2xcmihJrruP4OWlS7FvtTpU1fVPV26VnFwWYcQdH49YPudMroJCbhScOFP0kJFPPi%2FWn9BOdLzGWzkyvj1j1lfHXzj8BGXBwqnmsX6gn60Qa%2B4ZEhlpWxJb1V2x46F5NQMwPuqUj0T8hjz%2Bz7dc8AB4pZrG4lCwER4ndQvv0kJebhzD3qlEnmVA0l5zFNBT5X%2BKm8ceX41P&X-Amz-Signature=0ddb1cb1cd093303afa9e91b0a447f85b8c256b5f69aa7bccd49b505038fb714&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
