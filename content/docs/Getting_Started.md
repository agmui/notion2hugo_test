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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCXJ6YSG%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICw1Pmlsn%2FqF9uxIgTvGvNjGGEYTiQ%2Bz3bNIeUNVPuFfAiEAjfFSm5DvHwJa7bK%2BruGD0hwbmY1O5ZhimW16GTFBLaIqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpk3uTKk4DA36Rc%2FyrcAwpgncuUV%2BNuVWIFqF%2FLXxlLWmrw180Tib49KsW%2FFyxr0N24JjTRvHcgwDoSkKFdWyFrQLh1I9Gw6rYy9n9Zi3tVuq4ImqvIVtvXUpmUiTSHdY7Ptw8nw%2Bwpqxqp7okKW1hp73KhGm0vt6nN5G8Rz%2BSnqOwjWex1QfPLPJLRB%2BvqJUvhgfzae2RKh74Doean4TnVOWqHY1Ni%2BYTfMXczWVAiopVjlo6mm93A7%2BpsEJ43yMGBfZeXWvov2N2ph1yvMTGHnMeMmsE%2FRnRPlUOojuBFBI2ozuzVNl21sDV%2FcsFNteL%2FSOH%2BcefYdI7L3pqiZ1mWodpho%2F40f8Rn8A7ywHTGchIJ5Qe3oqq5HYQcjQmjLfn82gQH7gq1OLB6l7yBaVE7qBf9ORz39%2FgUFpdJC%2FsGLEFHrQSGi7HzG5TFFMELkrNaqPwQrX0pld3RDcMKv%2Bi0GWipPpq2GpYdnN1P6rsZtoKdvdj09bnYMdehCvzDSBEq1HveD0TdG1X7yGYS2UQFyeypSVzEz7f%2B6BvcDAdK%2BHW1AZv94BJb0PwwUV7owERqusnDJvx3Ax%2FmGN%2FZrvlc6kl5xzzW%2BfuR1bd%2FPqLmHTIZVN415QKJ0ESL0P%2F6hmkE63s4sOstHS3hMJL5lL4GOqUBP%2Bqo4gfnzsVlFO9iTJ%2FbsGboYcTiHP2uaVYOsKaJrC%2BXHOiFZhdJ3gu7YD6eQK0vgc9xgSsn1QWnL6Velr0EXujBvIvLjkhlFTE%2B4aoQNTL9mpIRx76na2MlBOzW57rRMoe8A8aE8PXuKORt3ZxmjbEe8ZL5sIc4%2Fb234dFKGmX%2FRfixOZsLNKtczEh07tYVduOY7JfFDuksUh3ipwTLBkttbQ%2B7&X-Amz-Signature=2ec3bb5f286ffb9b915260f8f237d1444ce512956a3699d4eb6b4f8c35d98dc3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCXJ6YSG%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICw1Pmlsn%2FqF9uxIgTvGvNjGGEYTiQ%2Bz3bNIeUNVPuFfAiEAjfFSm5DvHwJa7bK%2BruGD0hwbmY1O5ZhimW16GTFBLaIqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpk3uTKk4DA36Rc%2FyrcAwpgncuUV%2BNuVWIFqF%2FLXxlLWmrw180Tib49KsW%2FFyxr0N24JjTRvHcgwDoSkKFdWyFrQLh1I9Gw6rYy9n9Zi3tVuq4ImqvIVtvXUpmUiTSHdY7Ptw8nw%2Bwpqxqp7okKW1hp73KhGm0vt6nN5G8Rz%2BSnqOwjWex1QfPLPJLRB%2BvqJUvhgfzae2RKh74Doean4TnVOWqHY1Ni%2BYTfMXczWVAiopVjlo6mm93A7%2BpsEJ43yMGBfZeXWvov2N2ph1yvMTGHnMeMmsE%2FRnRPlUOojuBFBI2ozuzVNl21sDV%2FcsFNteL%2FSOH%2BcefYdI7L3pqiZ1mWodpho%2F40f8Rn8A7ywHTGchIJ5Qe3oqq5HYQcjQmjLfn82gQH7gq1OLB6l7yBaVE7qBf9ORz39%2FgUFpdJC%2FsGLEFHrQSGi7HzG5TFFMELkrNaqPwQrX0pld3RDcMKv%2Bi0GWipPpq2GpYdnN1P6rsZtoKdvdj09bnYMdehCvzDSBEq1HveD0TdG1X7yGYS2UQFyeypSVzEz7f%2B6BvcDAdK%2BHW1AZv94BJb0PwwUV7owERqusnDJvx3Ax%2FmGN%2FZrvlc6kl5xzzW%2BfuR1bd%2FPqLmHTIZVN415QKJ0ESL0P%2F6hmkE63s4sOstHS3hMJL5lL4GOqUBP%2Bqo4gfnzsVlFO9iTJ%2FbsGboYcTiHP2uaVYOsKaJrC%2BXHOiFZhdJ3gu7YD6eQK0vgc9xgSsn1QWnL6Velr0EXujBvIvLjkhlFTE%2B4aoQNTL9mpIRx76na2MlBOzW57rRMoe8A8aE8PXuKORt3ZxmjbEe8ZL5sIc4%2Fb234dFKGmX%2FRfixOZsLNKtczEh07tYVduOY7JfFDuksUh3ipwTLBkttbQ%2B7&X-Amz-Signature=fac17113e51a36ecb90d3f1af77b38a79a139d556c0b6e8be9721b5b3fc0b010&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IYEZBQ4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwZ4so3qANqky%2FvjKirjikmRzPirGSfRpjkF6TQKUAEAiEAylbtjx57C94k%2FiiWb1K5xscSBOpkzvdFPvU91khcoisqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4ZJGT1Su3FRiNqzyrcA6VFMV1FEY3a750RpjbuH2whH8VtP%2B1J2n5AJzanOcUu6HZezTgTQwB5kapQazzg7CR2BLX9Gl2QSqyZ7%2BrwBhEJ4TmKDPRx6JqEnylJUBYRQ6GdV6sVdIJU9vcJn31BGgYvyMf2lVkZn%2BYEGl9jKjzJ323Qk0h02qXNBuTGNzkRGye42ZQkdD2rCZoYBlYdDDNMjHO5TR%2FIcVb%2BZSjEAMVobwxCxL530qMQ5dZAga%2Bs%2FdxheHvabYA6PTh2j8H3uLVYGFrOPTm4OCIHjA%2BZ8EZmOkIsrcrbkVFDeo9s8N4sjrw09kt3S16lXYQ5El2QlQmnXpi2WCS0eDXTtrwlIeyUMDWpon5nX7gvFhmRMyUjWvCKjzLGx8dtYb1BQbO4qfFt3ZpzXh3m2dWBnLNvsgdKC%2BFkjqhjjOqkobk768hDvMEpruOTB1y0AUcTV3iV0H7MblfuaJBeWnjOyY%2BPv%2Bh0WrDNya3rFVKowbCaEQNKhc9tMoXZy6%2BgZJPotbIFudF%2FwOKRhNU4UObM2QX9waQOzTmZ0qfHfX1mOCD3%2BVV6k%2BIsRNYv%2FMz5Qxw9OAgskTwO%2B02DRObPwP3StXEQBWRhIP4WWPIo%2Bm6dtcpxfLt9LObQeU7gANeFSB5YMP74lL4GOqUBsXpLimDcBHZ9vWq1qjVOpTKbQ8%2FdNBRmN%2FUaWyZ%2FpFntRoSGlBv8Ua%2Bp%2FqgfW7AhDt%2FSxdB8NXx55iNSPxPtCqHPUiTKQosO%2FvtmYARftX0DOO5htndMFhCZrf0gkVvVB17nUyqtXPqVS4jXcHx8w6S3YTfeOxYkeOriQD0zypEycJRyBSairifEqxnVE3Cv7sqdqVwTbi%2FY9XNNVf2NSu7GSniF&X-Amz-Signature=2ac2f8c38ff598dc177468c4fea84c5b3a918d8703dd8476b7bce462dab88a6e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZN4LPNB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU%2FwhwVpAYSNfJqi75d6YbcoLs8r5vW4ejqX%2BWHjC4hQIgZaeJI7yHIHpLbTnkfyCt1vlB2ZNBr2ejuxduNPxIJHcqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYuCbZLS2KG1gwv9SrcA7xW1BjmiG%2FgTpOGlEGCQyEvVdQZJ2riVcnEq7CRIW3EmDtTFZv%2Bd4y2lNVVzw9kUy2LGuPRmd7yPtOdbBJWipCjQ4ZZKilDxcWI8i2MkcQqXoafr368yeVWR8pYxOtm3CHZ9di2BfrOMaZpyJaXek%2F1znv%2F19Gotz%2B81JRHtJSA2dF9wYOSQo5RUFAJaw7rbL7PqZtFF3ReF6z8c0pHrgRgq0AXWppm5xMEzeZvzXM4DqP0Oa4WdQELHXF794e6Na6rkLh%2B8tknQZovoAHnc2pq53jXjtt%2BAaHDqvR2i4BWlFVBX3%2FadFsZ558FbZTroo6UgeEaEo6qFpUnhObdrdN2b7h32i3nOySwFfMkbzdBg7ZIKKC4uz8MTshewFSETiF7MyY0DnPeNY%2FN%2BgXUQuy7Ydo%2BxR11aWFeN9lZkQ%2BwQoYL8a97NaFGEKefEDcgBQzqp7lwTspl2%2F8n9DLlzA0EynOH%2BFbPA5RhD%2Bo44ARDrGTW434jq8Q3Grl5auo2ut%2Beo2Bq5lYSS0epSyeHfa7H4hHeyinFDtS0MHVOa8dQpo8YUOibB8oDQoMAM4PuyR0VGgvwCaeKBhN%2FSeuKgMMCWyPyVS6DdTj0r6K2lzuFxwa1%2FTe3ycaC2y%2BvMLr4lL4GOqUBecpToljvfZHRC6MuPwNARU4tFP3aT0FdJwlC1nl2IyajnG4CrMSm6jWWzNRzyyT0iDqBGlEa0ss1caPFum8Ec%2FSWCW2CPHLchtPGevMeYDqlS6kQm0oJsVP4PCMmZeNjpIKR2VZNUuDISjqRcH6fhJ2RVwn0mndFrHBBTxtlxM7AmGbLb84%2Bo0yKtvXQTZhHpWt3SZYmd9gOx13x07MyeF4Lk8zv&X-Amz-Signature=714acbe7e6151ede10616ecc24b08066f03ac9115b202a080bf301304fb12077&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCXJ6YSG%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICw1Pmlsn%2FqF9uxIgTvGvNjGGEYTiQ%2Bz3bNIeUNVPuFfAiEAjfFSm5DvHwJa7bK%2BruGD0hwbmY1O5ZhimW16GTFBLaIqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpk3uTKk4DA36Rc%2FyrcAwpgncuUV%2BNuVWIFqF%2FLXxlLWmrw180Tib49KsW%2FFyxr0N24JjTRvHcgwDoSkKFdWyFrQLh1I9Gw6rYy9n9Zi3tVuq4ImqvIVtvXUpmUiTSHdY7Ptw8nw%2Bwpqxqp7okKW1hp73KhGm0vt6nN5G8Rz%2BSnqOwjWex1QfPLPJLRB%2BvqJUvhgfzae2RKh74Doean4TnVOWqHY1Ni%2BYTfMXczWVAiopVjlo6mm93A7%2BpsEJ43yMGBfZeXWvov2N2ph1yvMTGHnMeMmsE%2FRnRPlUOojuBFBI2ozuzVNl21sDV%2FcsFNteL%2FSOH%2BcefYdI7L3pqiZ1mWodpho%2F40f8Rn8A7ywHTGchIJ5Qe3oqq5HYQcjQmjLfn82gQH7gq1OLB6l7yBaVE7qBf9ORz39%2FgUFpdJC%2FsGLEFHrQSGi7HzG5TFFMELkrNaqPwQrX0pld3RDcMKv%2Bi0GWipPpq2GpYdnN1P6rsZtoKdvdj09bnYMdehCvzDSBEq1HveD0TdG1X7yGYS2UQFyeypSVzEz7f%2B6BvcDAdK%2BHW1AZv94BJb0PwwUV7owERqusnDJvx3Ax%2FmGN%2FZrvlc6kl5xzzW%2BfuR1bd%2FPqLmHTIZVN415QKJ0ESL0P%2F6hmkE63s4sOstHS3hMJL5lL4GOqUBP%2Bqo4gfnzsVlFO9iTJ%2FbsGboYcTiHP2uaVYOsKaJrC%2BXHOiFZhdJ3gu7YD6eQK0vgc9xgSsn1QWnL6Velr0EXujBvIvLjkhlFTE%2B4aoQNTL9mpIRx76na2MlBOzW57rRMoe8A8aE8PXuKORt3ZxmjbEe8ZL5sIc4%2Fb234dFKGmX%2FRfixOZsLNKtczEh07tYVduOY7JfFDuksUh3ipwTLBkttbQ%2B7&X-Amz-Signature=6aff11414ae094e95c9886388ba1822cd0fa236c85ec6b489954cf7b751d1447&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
