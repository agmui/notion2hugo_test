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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HP6PYYO%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCICEWl8EZ1t9CZ5YUtafj5poE0LvwT4qN2RWzhgZulYLnAiA8TB1NvXwR953DEQGl47VFw0tMDuYIIqm6mF0Vr9eEISqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfvRrUlztQP7gfFQcKtwDzuCsSm%2FbWHhFTfozSt6%2FwOBrHvBo9y55gr6A11jVVkeC6%2ByRFfoZMhnrY3BNSOZGjDmjAmcuW4FiX%2B9Q3jawpJZ6Zbp0TOS9QWCmMQCdOvAz7tQo4l6P16K7YRMU0tddq9XYhUUpMYt0AzNOBI3S3lIiLdMdvqzLfRBSXYQktnDYTGIdpA8XsHQquCN%2FUoAQVrjcaWeLU5E8PSTtIuDgFbxN8Sja%2Brzwnjb%2FhV5AoHnehTagxQB%2BQ6TJxxi74EGqwJSNNMbzC5ruhJ86rQgcQMl6iBxnQMrsLNIajvimEZ%2BGpyVT0%2FUbXpkbSKgbORgV39llcmrTkpWVxpOSc0U4%2FIfbwKNRcs%2FSD2xdeNlXD6T81%2FR8hTFxIUBHeNbiTxRcF554nLKK7P2eJGOOsoBZNOwTl0jDzXySJvlxVCRQLxiARJ4fblVbZ5i4n9JUB8vjRvX6muzR6hVr2Bkn08jhRreYe%2B2ZYsuxLyn1dn3OdjHNFDZahzrtP9hqyc0D2hAcVaPsue7YqOJ2KIbq3B8kBgKNa%2B3IFNr%2FOZl5OkJGRMEL2icTIrY%2Bt8q9jbHnh7UbVsGKAlNH6UHB74yJaaoAugIkxewGqJFZD75f87U0rFrEEX423pqOeTWQ%2Fvkw2sKdwAY6pgFU6eZIjOIW0gRiSTWmHR555HxlxCBR5tNocuMpafKwYvJ8kdPnbP2L4jTUyeyFVTU%2BrmDDkic3a1rnhxS30GWikT%2FZrRVpnaeXkJVnF%2FIY92PJSwYgcaY00xEbF9M2%2FuIpxZJ1KuVge3v8WiMeynzYdapGQQgpUP6ijag2jz1RdjFLz705Yp3w5%2BxCVbXiFXhEBCoyDmpNFoCY6FTj3eQve2jQCbwV&X-Amz-Signature=adb7481067ca3daef2a07fcf47631bf1ae0a01878728ba8f07cdd413851ae61f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HP6PYYO%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCICEWl8EZ1t9CZ5YUtafj5poE0LvwT4qN2RWzhgZulYLnAiA8TB1NvXwR953DEQGl47VFw0tMDuYIIqm6mF0Vr9eEISqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfvRrUlztQP7gfFQcKtwDzuCsSm%2FbWHhFTfozSt6%2FwOBrHvBo9y55gr6A11jVVkeC6%2ByRFfoZMhnrY3BNSOZGjDmjAmcuW4FiX%2B9Q3jawpJZ6Zbp0TOS9QWCmMQCdOvAz7tQo4l6P16K7YRMU0tddq9XYhUUpMYt0AzNOBI3S3lIiLdMdvqzLfRBSXYQktnDYTGIdpA8XsHQquCN%2FUoAQVrjcaWeLU5E8PSTtIuDgFbxN8Sja%2Brzwnjb%2FhV5AoHnehTagxQB%2BQ6TJxxi74EGqwJSNNMbzC5ruhJ86rQgcQMl6iBxnQMrsLNIajvimEZ%2BGpyVT0%2FUbXpkbSKgbORgV39llcmrTkpWVxpOSc0U4%2FIfbwKNRcs%2FSD2xdeNlXD6T81%2FR8hTFxIUBHeNbiTxRcF554nLKK7P2eJGOOsoBZNOwTl0jDzXySJvlxVCRQLxiARJ4fblVbZ5i4n9JUB8vjRvX6muzR6hVr2Bkn08jhRreYe%2B2ZYsuxLyn1dn3OdjHNFDZahzrtP9hqyc0D2hAcVaPsue7YqOJ2KIbq3B8kBgKNa%2B3IFNr%2FOZl5OkJGRMEL2icTIrY%2Bt8q9jbHnh7UbVsGKAlNH6UHB74yJaaoAugIkxewGqJFZD75f87U0rFrEEX423pqOeTWQ%2Fvkw2sKdwAY6pgFU6eZIjOIW0gRiSTWmHR555HxlxCBR5tNocuMpafKwYvJ8kdPnbP2L4jTUyeyFVTU%2BrmDDkic3a1rnhxS30GWikT%2FZrRVpnaeXkJVnF%2FIY92PJSwYgcaY00xEbF9M2%2FuIpxZJ1KuVge3v8WiMeynzYdapGQQgpUP6ijag2jz1RdjFLz705Yp3w5%2BxCVbXiFXhEBCoyDmpNFoCY6FTj3eQve2jQCbwV&X-Amz-Signature=0b1ed6a4de78eef20e198671497118474f9e51b40cff756e67f2745195d16e40&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGU2V2A4%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDjzo5fyU8cbOxFYebXJtFu8hRhbyTsToyMLCDfWPQ3GAIgMgYwoCkX%2F%2FkJULofFiEsNkibA1jDgA%2FxUV1N0jNNYCAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6N7KG6lwKAuvw8ICrcA1rd9rZ96ZwpLejOJHZRfCBBisKvJGZMKP0lDPc5qrH2l5bTB1ljbS6yre3UNT9kfl5Yc26K1SRSD0rZKa5Dt0ESH6GtpWdQPexR%2Fx9vlQb1H%2FdXjT38hf9RUafJmQg61y9gu94mkS2Ngmc9F2DVLy7dUINOLV45fmBo2qQAgWr8h%2Bb7eHuqVTizhqoE%2BPdd%2Fp6kC84QhHYP4JyRXGLNGRhMyqBkpMwgtD7HinrpBuhvVGgtagb%2Fq%2Bp%2FuI3Ypdq7yY8peaOKXs3%2Bg%2BTCaOuN6WAeghKk6Kt0B%2B6u6Xpwj9XWjBajQ1jHxWWS%2FxhBNC%2BlztB6JwLFEyFym7WqczNOVlInFvNDKsRfw8b%2FRoQY5ZWavGSbFh8e8tAVlX%2BRtiP%2BneFpyrpyYwTZvR9lyt5r5C28pkATsq1BThaTAWm%2FHj3QzvBXQxM8qT3PQLnWNOFrkT84jCt5GpFC0ps6MjVzqvkaRclnFwhzhuvp4%2BYehD6btizXfQK%2BllcFkSs3dtifEjU9GC1qvn7v5BIy5%2B90Dc%2FNkRdbvh4wPNMc5GdZLl6rFFEDynHGR5Gdqc01iAd1XrZy6WGwQRBdW%2BoapcBBYvyeNrEL3eqk%2FacpmZbrn8wYGYDvO43sRTusonSpMLzCncAGOqUB%2BFkHwyxGfdl4yim%2FK%2BDVvR9uiV2mgqnu%2Fra3gcxXIA7RTTdgENQXvzHukXUE2ofVvZc7IOeTHEmi6zLlzpO1Yb1CrVthmuuKiIzHTeKtvrULYCZ8W7FIB9CZHyBwcErW2W8E6jHMjV8dz61ErKkv8bOSZAfaAT%2BfKNh%2BmzkBXSYXIVxIDzZ7oxdhqHN6BPtEiPJoQ1Vw3FxC2OLjGhZ%2Fv7p94Kg6&X-Amz-Signature=a81fb7a7618f3f0300565da3c633dc7b9748723fa28db0d040964ff191e9aa6f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5EJJLX2%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T100852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIA7R5ZI6foHaMlsXC6IEEdVma%2BTHytkrR5Rawn2%2BEn5XAiEAkXAkP1YiS66SA7MWRvpZuKXcmGD0PyFyX%2BMLob2IuAEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAu6mLGYYDzUr6VdyrcA%2FUwxLZ8RNSu8voNPJRRKUYl6mGmctIIllGRhvD1YiVcQiAYSKgzTzbvxH4AUDJUQXWIwpefEDO9Lnbz8%2Fm4svaohjPIgYuV2uVfbuuDMRUKFtIpfdvvL2TGtti7cdtT8zaGkGVzMwkQrYUh6b%2Fy%2BZtDejXUF5MXtIHwjAdHRCvNMm7ioQJgLKG8G71maeXw77dQcO5sOe7MBbD%2FlgZ1Xz72uSxkVq%2FL9Z04PYC%2BHUmeZQjfZnloENRXTkOyRXvWWDsxFVrNUnjS7lcPPUNK9HyiXfJUCLq%2F1%2FLV2uomBk5SxNkPIFdYiVcrxAFKlLbR9nL%2F7Qd7LlBPxztRia1jgZkpCZOfJLDBknQVVYg4ZaOmb4tyQjPGIkM7dhx4YP0cUi5Ro8VUhnO9yzdvENU%2BDKLwsKBSBEeRJA1OHSyngnegxLR9gbhsZUxMM6sfHmqMU5I7xGSRdPd881y4b5d6dra8Xqm1vgpl%2FqolOOoFB1aJTpHAp25tbjS90rpicE180kuSZT7Z%2Fn%2B5ZLjyj%2FIs8WUOhnKs7hxoRvw8xt%2Bpd6UpnECHhU7vpydIA8FZXafhnzFECRLcpP%2Fgrjfb1HomoMldeXjlmC84G3geuhxZqCBLw0uNbCUlej043lMEMK7CncAGOqUBIZxRD20pNaCgd4bZQ%2FQDRkhlktESxhpLcoljHhgOFqNHvnQTMxG5p%2BVo0UQz%2Fhci1zHsBYpS1uKgdBTIIChtYWNKtNfqqKPb%2BF72Ydlfirz7W6QJeBQcYfnHdGqcye65W6iXRA9oBqzfTpB4uQdE3aUFE5nWMSmlikLin5uIGy%2F2b9QFEPPZRBeRBGtTIlt4bUp59gkpYW66XxilMiV%2BJzwjd0rR&X-Amz-Signature=83ef394da2da0963b899ac828332a8301ba9cbf48fb61c9e902a182225ba6aa1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HP6PYYO%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCICEWl8EZ1t9CZ5YUtafj5poE0LvwT4qN2RWzhgZulYLnAiA8TB1NvXwR953DEQGl47VFw0tMDuYIIqm6mF0Vr9eEISqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfvRrUlztQP7gfFQcKtwDzuCsSm%2FbWHhFTfozSt6%2FwOBrHvBo9y55gr6A11jVVkeC6%2ByRFfoZMhnrY3BNSOZGjDmjAmcuW4FiX%2B9Q3jawpJZ6Zbp0TOS9QWCmMQCdOvAz7tQo4l6P16K7YRMU0tddq9XYhUUpMYt0AzNOBI3S3lIiLdMdvqzLfRBSXYQktnDYTGIdpA8XsHQquCN%2FUoAQVrjcaWeLU5E8PSTtIuDgFbxN8Sja%2Brzwnjb%2FhV5AoHnehTagxQB%2BQ6TJxxi74EGqwJSNNMbzC5ruhJ86rQgcQMl6iBxnQMrsLNIajvimEZ%2BGpyVT0%2FUbXpkbSKgbORgV39llcmrTkpWVxpOSc0U4%2FIfbwKNRcs%2FSD2xdeNlXD6T81%2FR8hTFxIUBHeNbiTxRcF554nLKK7P2eJGOOsoBZNOwTl0jDzXySJvlxVCRQLxiARJ4fblVbZ5i4n9JUB8vjRvX6muzR6hVr2Bkn08jhRreYe%2B2ZYsuxLyn1dn3OdjHNFDZahzrtP9hqyc0D2hAcVaPsue7YqOJ2KIbq3B8kBgKNa%2B3IFNr%2FOZl5OkJGRMEL2icTIrY%2Bt8q9jbHnh7UbVsGKAlNH6UHB74yJaaoAugIkxewGqJFZD75f87U0rFrEEX423pqOeTWQ%2Fvkw2sKdwAY6pgFU6eZIjOIW0gRiSTWmHR555HxlxCBR5tNocuMpafKwYvJ8kdPnbP2L4jTUyeyFVTU%2BrmDDkic3a1rnhxS30GWikT%2FZrRVpnaeXkJVnF%2FIY92PJSwYgcaY00xEbF9M2%2FuIpxZJ1KuVge3v8WiMeynzYdapGQQgpUP6ijag2jz1RdjFLz705Yp3w5%2BxCVbXiFXhEBCoyDmpNFoCY6FTj3eQve2jQCbwV&X-Amz-Signature=bbd9962379eb43b75cd5b028ea6eca83f2808fb8cac1e1af888a330f044ab6f8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
