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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U62MBJ3Z%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHpvWtL6IFQWXD5uusWTl8pjPo4059YC3GlYEKG8NxGiAiB9Tzggs%2B0yOXdOGEtD6E8HPgnKxhMHdHZhYOMiSqRQ3yqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMmX2MyOIJA%2BET%2FfJKtwDQhbPaSdY%2B6912oR0T63xU6u0hd5gXYfJyYRp%2BCrkwwSDETsN%2FKp8pZFVqnLg819Jy4Ipvpd8V5K0wh1qTBTQbTAJTNnrJlnXtuuoxHGs%2Bq9Ra%2BV4wfYGYGXWdvj%2FuEmQ6yrzvQ8l%2BHthSk%2Fx9fjRPKc3mDtsfG1IE%2BnB01DAzDbG2ryd51K9L3YvUw%2BFL79odA6AFgPCHf5LuQ6KM3lcJGNJAXpDZipRcR6hewS%2Bs9UgPpihaZkJqn8fies%2BEdIzvP5%2FT4x%2FIUX25mJdus4voS9nfyxH4RcWy%2FaD%2Fp5DpgIIeh9nMTaZ271l6G%2BlmOAQwZx1Vb8qBpK5ZqzKl82vFaygX0enIcw9dlJH%2B5%2FkfxrrMNIEUtFkWVY32B5gO2%2ByDEY1IgAvE9iEUjp67glhmix0uCiwwvpVPB%2FmSNOftYjXWceZg5KwOEDANvOIXHPBdZsYjjbJ9N%2FUoPkqXa0HQcwvVXsqFWIVKDFAyI%2BchWtnJ8aGP8mx4cT1hMBFdd223ADWiwWVeOa%2BkWXd8EjoNeJmnbxF%2FLx%2Fk%2FK%2BA4AxVTE6Hvd25TeMKdnVKaelcdwzPVfUkiYam7tyHPlpnvlSlqQqOy1NVbTXRFRQN40JJXRPsw57t6A465PIdXkwltekwAY6pgG9YZjytFvGbrQHkgSiwvIYKG%2BPbHhnsAEHoemBZYJ6OCJ1zmmX4AJX5mgCGBcBZaYRRH1oHPKUdbcPHDJO3t9Rhp21yh0R%2BxSmaET2H5P04o9W8y%2BZF5f3nvuIABfnjVaJvP11M%2BPRym%2BSz6nKRSGTfYLv6WCZW17Diyg6TJRqr4cty3dWCycuDr3aepgiWaq41Z9g1q6TxJXSuVuP0sOZ90hggS1O&X-Amz-Signature=382143d110deb3b5416ae53fce319de2c8488eadaa3208345824798a19a4f209&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U62MBJ3Z%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHpvWtL6IFQWXD5uusWTl8pjPo4059YC3GlYEKG8NxGiAiB9Tzggs%2B0yOXdOGEtD6E8HPgnKxhMHdHZhYOMiSqRQ3yqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMmX2MyOIJA%2BET%2FfJKtwDQhbPaSdY%2B6912oR0T63xU6u0hd5gXYfJyYRp%2BCrkwwSDETsN%2FKp8pZFVqnLg819Jy4Ipvpd8V5K0wh1qTBTQbTAJTNnrJlnXtuuoxHGs%2Bq9Ra%2BV4wfYGYGXWdvj%2FuEmQ6yrzvQ8l%2BHthSk%2Fx9fjRPKc3mDtsfG1IE%2BnB01DAzDbG2ryd51K9L3YvUw%2BFL79odA6AFgPCHf5LuQ6KM3lcJGNJAXpDZipRcR6hewS%2Bs9UgPpihaZkJqn8fies%2BEdIzvP5%2FT4x%2FIUX25mJdus4voS9nfyxH4RcWy%2FaD%2Fp5DpgIIeh9nMTaZ271l6G%2BlmOAQwZx1Vb8qBpK5ZqzKl82vFaygX0enIcw9dlJH%2B5%2FkfxrrMNIEUtFkWVY32B5gO2%2ByDEY1IgAvE9iEUjp67glhmix0uCiwwvpVPB%2FmSNOftYjXWceZg5KwOEDANvOIXHPBdZsYjjbJ9N%2FUoPkqXa0HQcwvVXsqFWIVKDFAyI%2BchWtnJ8aGP8mx4cT1hMBFdd223ADWiwWVeOa%2BkWXd8EjoNeJmnbxF%2FLx%2Fk%2FK%2BA4AxVTE6Hvd25TeMKdnVKaelcdwzPVfUkiYam7tyHPlpnvlSlqQqOy1NVbTXRFRQN40JJXRPsw57t6A465PIdXkwltekwAY6pgG9YZjytFvGbrQHkgSiwvIYKG%2BPbHhnsAEHoemBZYJ6OCJ1zmmX4AJX5mgCGBcBZaYRRH1oHPKUdbcPHDJO3t9Rhp21yh0R%2BxSmaET2H5P04o9W8y%2BZF5f3nvuIABfnjVaJvP11M%2BPRym%2BSz6nKRSGTfYLv6WCZW17Diyg6TJRqr4cty3dWCycuDr3aepgiWaq41Z9g1q6TxJXSuVuP0sOZ90hggS1O&X-Amz-Signature=72c1c6632477224084ef9c4f7599ca9d20decf920206af83ead9f298947d2708&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEEXGZ74%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIFrRw6aK5NDfLZ2m4hrZ7cYmVF84hm5tFZAa0%2F6IsJAoAiEAy6az2E%2FLczjv2nwGpYPVXLz9owyauy03ZhjS%2Fsn2YukqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcH%2B2WZI203UQ48gircA6TFxcbFQBJqcnZv1dpnB%2B2XlRIapcVieh9tDfPxB6tXo1GFb3KETKrjMdq7xjBAqlRfRodCCHCu3LDofbecePO%2BGzj4EgSAfnpUY8WygRs1JOI1l3umB8jAO%2BNR%2BvvL%2B2VeL51f7%2Ftug5922v4Tx4IAHYIs4ubpbpNSHZ9sEjX%2BmCbKJmm9gkshzqOtqEZwqijYFS%2B7SPxPO9AoTjQ%2FxfBwI68wGhw7Al6KJYPjpog85Io9lawXJ%2BPL6t0m3RGj9Fge5SLRU%2B9umZnmROtxv9M39qhV2qzghdkZ1B65ssJEPptMFkMV8u8k052Gm7hhXJLBub8rHLdDTnuTGkiuL%2FhYFhWsUefOsDR8Xuqi7BX9bwr6E1xNw8wb7besBdzqSOO0MkJud3qZLZqGBFo483wj%2FZKLTSb0pZK3iXjYDcT0pM7FJ7n8LiLiGipfaiyie9IkIitshvkgXl2e7UcfkE5J7MmyvQjco%2BGWmCVwP4pWHY5ZoAybOS%2Fb%2FAg6RIM1mw3gIdjWa6AnGoBizfHUuFiKgmyCHOhT%2Bf0Y3AW0C54piNF8tJ9eSx0yhwqGbWtrXb993e2yFZXil6R4PzaxYtEVNFIH80ZDMeIQC5wrITaulcZ1qj%2FhZC84zkbSMNnXpMAGOqUB3GBG7H4ACBnE6wAKS%2FlSSVKv%2F6K1GaqQc1enR6e8qeFsWOKGnROIGpat5Du3Wk33%2Bchx4hzdrIOn71S2aNLs3BQTGDumnJPn%2BmQw4q9Dn%2BE3%2F1PzAyRCJGoGVp89k6IuF2WAhGpim%2BYBPx8CzGhXqXk4NTQ06cX%2FjHMbQAjRi3COeFM2ecuLJlD0JZCT61SIJ%2Fupinh%2BLqk5n1q5izSWUauU%2Bqee&X-Amz-Signature=a0058298fd360c3dcaccf0444f96cae16a96ba4ef0ff5a656de788407c8ece44&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZW57HS%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIBomohcN4ICh%2BIJOvMKKoRxgkajbHHAecnj4JbMia0dgAiEAvF3tS1w%2F8rNAaecBEQuVGQhtni65otRYM67b6TAkOjMqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQdN%2FHBmFNj5TfW%2FyrcA1UQ%2BPfbRfW4I685fFsPDUoHEoogE4hgJMoiGPtWNHjPUzdxIYgG%2Bol73rK12GQBJNwaXbczqbUOhP4YYCcRem4%2FZgh5%2F9kqKXXg7lKml7FxBjiO%2ForlFJBxZMVhR9jl1pzadF1%2FvUhYgQn9uIiYs%2Bm70o%2FV45iQ%2FqSFZPoqzPhVJydYQBZZf80kH%2Bqpq37IjlbKY5pq46f55sivA0ukuFw1dtFj34TbqMcjCD3rkQEiv6XSTiBhigc7LREMJjIhaN11DxSIxNw251%2B1URibvIAHArKJtoJrEEG2aYgsvWAjGBBNDKx9gFf928sd88%2BZpE34TQVLxZyC7QXwepu0tqzMaRn98%2B0b4sekRTizMjO695Z1bO3KlfbIHNCpVlj%2F0lrA6R6WK7qnjAPz2ENZibhgcuQT6NYzdjllXJjhGiU2IEPHj%2BR7dCRjohpNnKV5ZZ0FYtFWdaP893XVfYPc1mP0v7pF3qido3cr9vp9gylVfMxDX42qCdsiUOyhxdD5C33fVdzCPu8BdmEx0HdlZzn92el2dUfdh2WMqNSGABPS4ucp8BNOKVY1RgZAUsmaPIN4apMq4dMqVmoA2e2xTSgk41V2cK6rhAfKKc9MEvOhrbA3RFG9vBEr7ydfMIHXpMAGOqUB88oKCf%2FC3jgOOoo3cfi95A8Ci6852VZtDziMJ0mjvaztwX34MjQGLMGPkr7LRotpJYT%2FTSdA41fDnbprXGkJK%2BFwHZ44GnQJSXlHzRVF%2BBo%2FNpD29GcPuHe9TnGm6xtc2yvtw2kDIsVEx5Q%2FoqY%2FbST2SRbWY%2FIqIp3WhDPXL0ej6YDfq%2B6eErgRR1bKRrUJvZnW6HwTHlwIo%2B05pxjbRTqUL%2F7L&X-Amz-Signature=b5d1231a75b082f19ed2cd38fa00118fac764078203fff8c1720c9db0cd63fb1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U62MBJ3Z%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHpvWtL6IFQWXD5uusWTl8pjPo4059YC3GlYEKG8NxGiAiB9Tzggs%2B0yOXdOGEtD6E8HPgnKxhMHdHZhYOMiSqRQ3yqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMmX2MyOIJA%2BET%2FfJKtwDQhbPaSdY%2B6912oR0T63xU6u0hd5gXYfJyYRp%2BCrkwwSDETsN%2FKp8pZFVqnLg819Jy4Ipvpd8V5K0wh1qTBTQbTAJTNnrJlnXtuuoxHGs%2Bq9Ra%2BV4wfYGYGXWdvj%2FuEmQ6yrzvQ8l%2BHthSk%2Fx9fjRPKc3mDtsfG1IE%2BnB01DAzDbG2ryd51K9L3YvUw%2BFL79odA6AFgPCHf5LuQ6KM3lcJGNJAXpDZipRcR6hewS%2Bs9UgPpihaZkJqn8fies%2BEdIzvP5%2FT4x%2FIUX25mJdus4voS9nfyxH4RcWy%2FaD%2Fp5DpgIIeh9nMTaZ271l6G%2BlmOAQwZx1Vb8qBpK5ZqzKl82vFaygX0enIcw9dlJH%2B5%2FkfxrrMNIEUtFkWVY32B5gO2%2ByDEY1IgAvE9iEUjp67glhmix0uCiwwvpVPB%2FmSNOftYjXWceZg5KwOEDANvOIXHPBdZsYjjbJ9N%2FUoPkqXa0HQcwvVXsqFWIVKDFAyI%2BchWtnJ8aGP8mx4cT1hMBFdd223ADWiwWVeOa%2BkWXd8EjoNeJmnbxF%2FLx%2Fk%2FK%2BA4AxVTE6Hvd25TeMKdnVKaelcdwzPVfUkiYam7tyHPlpnvlSlqQqOy1NVbTXRFRQN40JJXRPsw57t6A465PIdXkwltekwAY6pgG9YZjytFvGbrQHkgSiwvIYKG%2BPbHhnsAEHoemBZYJ6OCJ1zmmX4AJX5mgCGBcBZaYRRH1oHPKUdbcPHDJO3t9Rhp21yh0R%2BxSmaET2H5P04o9W8y%2BZF5f3nvuIABfnjVaJvP11M%2BPRym%2BSz6nKRSGTfYLv6WCZW17Diyg6TJRqr4cty3dWCycuDr3aepgiWaq41Z9g1q6TxJXSuVuP0sOZ90hggS1O&X-Amz-Signature=c714ca4aed53c8d3212aad53286a027e03a5d893f2da82a6fcb7261c07912928&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
