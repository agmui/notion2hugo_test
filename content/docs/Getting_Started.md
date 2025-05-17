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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TUJ7IZG%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSaYoB9cS9iRxujK%2F6L7nJ4Pj04VkhjIVPU0URnh4LKAiBAgMRZrxjLCe61XUF3StEX%2BUvoDMfA5Cm687fh%2FTYTgCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM18PsEfBiCbMxE2EHKtwDgZWTpskOyYrX5ENB%2Bgr0%2Bxqm7DwuVa%2Fs5pzBG5aoxIxbSLHJk2T8CEm%2B4InSnlHsohfZ1nck7JjwaLMsdbNmS457QMH2CXnGhkax3%2BMzbek6jrbFS2Lg9z82mvxXN8DHEkYBqO0tbGN3HkNV02vHZIqQ%2Fs7HlWKYCMSbTAOmmOeDcLPDNG4Rb5u5pO%2B4RFsGhmoAXltF6D%2B%2B48hTJD1jwlpedB4BDJyLCmQPYLedpaOZFwPsekxrOZPi0ha57ptR97aUsQPJ2zYXWQ%2FV5NfiSJeo4meoUOg9th%2FUUvRcqsVprzjamw3k8WZUxMjGNXI%2BjPDPAyCY1wvXOYTrRAe%2BTlL4gOM%2FWc3B28QpP8pk%2BQPrGrdSZBWyam0fNNuE7bQkxyToYDjs4N6cNPsA8La6O68vTnRteNqgmAAsOTt8WzpmRsUvB0xHME3gh%2FRugz45nLAR6MCKtiiiHUTlJTZv1cXwCy7cvkRi%2FO6%2Brpke1mQ3kKv28QSG0tV0zxucAU6j6ISoYVJmWo5xmr9Gamhse6MKDRq1HmIt%2BnwKVuy1H62t2kv7NkAz9OU%2Fd9Z78P19fnqP9UPtrNfzwRQy%2Bd6JFUl5XFgVcug5XGZr562F6Ay4lHgmlYAi7v4UYuQwosaiwQY6pgEtCChagmvUrEUGpxh6LIM2Ie6G7F4RmRfniCtvRP8R%2BApwSyw5nV4nXiaSCGa2nqPpdKu%2BnpXC5jzuGp9DIYR2WJ5sjTp5ctBd0%2F1oYCPoUR3JA62uR253uY1%2F0UG6m2%2BWZojrpKcwuibXjbiIR0ovaPGzibuEF%2Fs04JZ%2BK%2BAVnmD9l0lfFHWZpsfv5RgRnWlGNfiWMnNbSRPYlVVOxQo8nYDWA3%2FA&X-Amz-Signature=d3f848e373d28b4b95115b903c229170cceb107517e8cf8b6eb81aebb0ea7120&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TUJ7IZG%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSaYoB9cS9iRxujK%2F6L7nJ4Pj04VkhjIVPU0URnh4LKAiBAgMRZrxjLCe61XUF3StEX%2BUvoDMfA5Cm687fh%2FTYTgCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM18PsEfBiCbMxE2EHKtwDgZWTpskOyYrX5ENB%2Bgr0%2Bxqm7DwuVa%2Fs5pzBG5aoxIxbSLHJk2T8CEm%2B4InSnlHsohfZ1nck7JjwaLMsdbNmS457QMH2CXnGhkax3%2BMzbek6jrbFS2Lg9z82mvxXN8DHEkYBqO0tbGN3HkNV02vHZIqQ%2Fs7HlWKYCMSbTAOmmOeDcLPDNG4Rb5u5pO%2B4RFsGhmoAXltF6D%2B%2B48hTJD1jwlpedB4BDJyLCmQPYLedpaOZFwPsekxrOZPi0ha57ptR97aUsQPJ2zYXWQ%2FV5NfiSJeo4meoUOg9th%2FUUvRcqsVprzjamw3k8WZUxMjGNXI%2BjPDPAyCY1wvXOYTrRAe%2BTlL4gOM%2FWc3B28QpP8pk%2BQPrGrdSZBWyam0fNNuE7bQkxyToYDjs4N6cNPsA8La6O68vTnRteNqgmAAsOTt8WzpmRsUvB0xHME3gh%2FRugz45nLAR6MCKtiiiHUTlJTZv1cXwCy7cvkRi%2FO6%2Brpke1mQ3kKv28QSG0tV0zxucAU6j6ISoYVJmWo5xmr9Gamhse6MKDRq1HmIt%2BnwKVuy1H62t2kv7NkAz9OU%2Fd9Z78P19fnqP9UPtrNfzwRQy%2Bd6JFUl5XFgVcug5XGZr562F6Ay4lHgmlYAi7v4UYuQwosaiwQY6pgEtCChagmvUrEUGpxh6LIM2Ie6G7F4RmRfniCtvRP8R%2BApwSyw5nV4nXiaSCGa2nqPpdKu%2BnpXC5jzuGp9DIYR2WJ5sjTp5ctBd0%2F1oYCPoUR3JA62uR253uY1%2F0UG6m2%2BWZojrpKcwuibXjbiIR0ovaPGzibuEF%2Fs04JZ%2BK%2BAVnmD9l0lfFHWZpsfv5RgRnWlGNfiWMnNbSRPYlVVOxQo8nYDWA3%2FA&X-Amz-Signature=c175d505ab39181a1210ff6e3a12d8e33c5fb8d6246e2a4bed79d394d8ae0832&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TUJ7IZG%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSaYoB9cS9iRxujK%2F6L7nJ4Pj04VkhjIVPU0URnh4LKAiBAgMRZrxjLCe61XUF3StEX%2BUvoDMfA5Cm687fh%2FTYTgCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM18PsEfBiCbMxE2EHKtwDgZWTpskOyYrX5ENB%2Bgr0%2Bxqm7DwuVa%2Fs5pzBG5aoxIxbSLHJk2T8CEm%2B4InSnlHsohfZ1nck7JjwaLMsdbNmS457QMH2CXnGhkax3%2BMzbek6jrbFS2Lg9z82mvxXN8DHEkYBqO0tbGN3HkNV02vHZIqQ%2Fs7HlWKYCMSbTAOmmOeDcLPDNG4Rb5u5pO%2B4RFsGhmoAXltF6D%2B%2B48hTJD1jwlpedB4BDJyLCmQPYLedpaOZFwPsekxrOZPi0ha57ptR97aUsQPJ2zYXWQ%2FV5NfiSJeo4meoUOg9th%2FUUvRcqsVprzjamw3k8WZUxMjGNXI%2BjPDPAyCY1wvXOYTrRAe%2BTlL4gOM%2FWc3B28QpP8pk%2BQPrGrdSZBWyam0fNNuE7bQkxyToYDjs4N6cNPsA8La6O68vTnRteNqgmAAsOTt8WzpmRsUvB0xHME3gh%2FRugz45nLAR6MCKtiiiHUTlJTZv1cXwCy7cvkRi%2FO6%2Brpke1mQ3kKv28QSG0tV0zxucAU6j6ISoYVJmWo5xmr9Gamhse6MKDRq1HmIt%2BnwKVuy1H62t2kv7NkAz9OU%2Fd9Z78P19fnqP9UPtrNfzwRQy%2Bd6JFUl5XFgVcug5XGZr562F6Ay4lHgmlYAi7v4UYuQwosaiwQY6pgEtCChagmvUrEUGpxh6LIM2Ie6G7F4RmRfniCtvRP8R%2BApwSyw5nV4nXiaSCGa2nqPpdKu%2BnpXC5jzuGp9DIYR2WJ5sjTp5ctBd0%2F1oYCPoUR3JA62uR253uY1%2F0UG6m2%2BWZojrpKcwuibXjbiIR0ovaPGzibuEF%2Fs04JZ%2BK%2BAVnmD9l0lfFHWZpsfv5RgRnWlGNfiWMnNbSRPYlVVOxQo8nYDWA3%2FA&X-Amz-Signature=8773a40dec307e874e6d7483caa8896456c072b6a616282409fe7b2d7a7cb47d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNI2XJFC%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT5rEIQwu2HEOQb%2FCFdcvkrDDthUdyikkJb7w8YdwGQgIhALilZTbQ%2Fe2fmH0oIrCu2ZWDU0%2FLwuiRLyv0td5%2Fx%2BbbKv8DCF8QABoMNjM3NDIzMTgzODA1IgzFtSHKkeYAWxIFPR0q3APLtqQrkvvWIA7TClor9rmbs7X3wWCVmU9LV51dbumLWis4GUVR7Q0ph1Qyzr7tzdr6oQnitmuguMDrJ2vcJJidDhI%2FOVBZ%2BntYnfaHCO3kJmf1H1qL8XnIuPhcNncbuAqz0yXOxbv7Jr8fG1JIu8a5blWTiPO64Qwtu7nznv8kh%2B8UALu7N9SU8nUlvw9SDU4krBp1UlIDxGWoBmCHzkh0tJebwV27Ic8HvVBLOTyFImjt02tiwMOIlwuKpBPPOFyTNQgXs67UmU2UYcFwodmRiqpigE6G3PQJRu8hVmoIYMlj6O46yAihXsxW0jiBInSC3W55c1T64faA6yJ2na1XbMEttyaTgeirggSEEUMEW3VoZPrEAHsODdPc4z4OtZK4DPXwh1hmXc%2FZjMMlFqpGq4gwpE7SqoTFvhXYM81sD2deS1dzhi3MXK4QUUP0pIkr9O8H3XLQRIOtVqsZwSR4InNh3TQnlqKoPUKTqex04LNygvCQk3llu5sqh18PcK9ZymMc6HJooP7z4pfFOknDHbDHoiW%2FO9xBazjHGhlxMrXtBPfaIecbGj1b0%2BNHdsGck6QBHrmST7ehzJncPgcSdI%2BA22dyItwwuwakgrE978UtGTfMfwgX5PpY3jDVtqLBBjqkAQwhH0UxAN8nb%2F5X6d7z4TEWbPZ8UMgh5UzxvRibC%2FBSQXyhR5b%2F1rT26LWGXzHBIQmWTNpm2RLt%2BN9%2Fx0ApvG0ad8uRSnQQLncc58njkFwW9j%2Fvs89o3Mvx%2BED%2FLCRXmtIwa6TfHStHLVxvBuIFoMSNJfFr7uN6IhWuIPP%2B6%2BsVDlza8jAoV%2BVWWkgUt1lW%2Fr4VcTJ6WPqpYWGP0n3s8BVyupwl&X-Amz-Signature=2d5bb056e652f1e6b2b0ae0d4ae994c4210b21040a5242c23a376d3d82fca340&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SEQGGBQ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQmMSx4y3MMzlo8lV97jX2sIM6efv%2FlYQvaqaef6j1oAIhAPVsyswejVih99QJbQYpPX3yddK4CS0T7d0IX44TLgyzKv8DCF8QABoMNjM3NDIzMTgzODA1IgxFZxdirrUgPgdnOY8q3AOb3HlgBjLpJl6EdxLz%2BceS3AfR3xnmQzWFh1l2upcw58tSMZVyghUL6e0F9dkedmOUiL5RV2VngfXen11noDmWQ%2FsBQjUXwMOuCNeQ2RG%2Fow4e3TOVhweRPCpXsIqR98f6rXGZKdQJZS3dzq5ngHJS%2F4o02fF65NXyUY8Z0h37QivustyUObyixA5GlBCM24ySEXW9DbA2YPVaVZ3hw6KbVOzsdyzk%2BMkxz8cAhRwptu%2Bd6TaZQ%2FIZaWchtMpLaf%2F3Q7Q8uL%2FLnLn8gpO5zCKgFYPvkQiuURRjXyYmMu42Y%2FCVDtk6hrKawGhCqgVMqOqzUBGKlheGJE6UehDmRDZ8z6D4WB6iLM2YgiX481BRsTEsKtndqZLk3FSn%2F9ggHu8Tnx79tw3j%2F%2F%2FtRS%2BGLEBRxV9xMumCN7ZNEV8JDwYviRb5C%2FLmOk5CA8vFP%2BfoNBOzB9k%2BxOWtFAc%2FPkloccnKLKhS1E5r8IeZUo8%2BFTL8saL2zJUfy8lUm%2FKdLrcSPhdU75ZbSGCYq2E0jAgeARISnSx7todes%2BCLqIlp6rWsW9Z0z7crADN89ygLeblqpSeMCKvkz9SXkb0PqZRa1FkrD7zpVrtdxy0922ajwbtkDU6zAjmOVxTF7UDCgzDPtqLBBjqkAaaVxAYRw98D4UlA07r6IhBx%2B58%2BT7OwjCW5ziVesq1SBfcssywZ4Sc6NWLrXS2ZDtSjxYaWfT4%2FCMTUYpo9y8t1bWzrgXA32u3q95tDJvqAGO0u%2BKqYHg9FL2VsSfIxH9Hkr%2BLzZRfjBMOmHrVGdZfBk61iT2%2FEqaEFiOchdijUQzrToBWjdCcu%2BaurOifQacav8AOjy8hK0N7peKOpowdyPYq0&X-Amz-Signature=67fd9818ae10d0e931192a0f7aaf72d005fdc453c472074ecb8d984b57a14ce6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TUJ7IZG%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSaYoB9cS9iRxujK%2F6L7nJ4Pj04VkhjIVPU0URnh4LKAiBAgMRZrxjLCe61XUF3StEX%2BUvoDMfA5Cm687fh%2FTYTgCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM18PsEfBiCbMxE2EHKtwDgZWTpskOyYrX5ENB%2Bgr0%2Bxqm7DwuVa%2Fs5pzBG5aoxIxbSLHJk2T8CEm%2B4InSnlHsohfZ1nck7JjwaLMsdbNmS457QMH2CXnGhkax3%2BMzbek6jrbFS2Lg9z82mvxXN8DHEkYBqO0tbGN3HkNV02vHZIqQ%2Fs7HlWKYCMSbTAOmmOeDcLPDNG4Rb5u5pO%2B4RFsGhmoAXltF6D%2B%2B48hTJD1jwlpedB4BDJyLCmQPYLedpaOZFwPsekxrOZPi0ha57ptR97aUsQPJ2zYXWQ%2FV5NfiSJeo4meoUOg9th%2FUUvRcqsVprzjamw3k8WZUxMjGNXI%2BjPDPAyCY1wvXOYTrRAe%2BTlL4gOM%2FWc3B28QpP8pk%2BQPrGrdSZBWyam0fNNuE7bQkxyToYDjs4N6cNPsA8La6O68vTnRteNqgmAAsOTt8WzpmRsUvB0xHME3gh%2FRugz45nLAR6MCKtiiiHUTlJTZv1cXwCy7cvkRi%2FO6%2Brpke1mQ3kKv28QSG0tV0zxucAU6j6ISoYVJmWo5xmr9Gamhse6MKDRq1HmIt%2BnwKVuy1H62t2kv7NkAz9OU%2Fd9Z78P19fnqP9UPtrNfzwRQy%2Bd6JFUl5XFgVcug5XGZr562F6Ay4lHgmlYAi7v4UYuQwosaiwQY6pgEtCChagmvUrEUGpxh6LIM2Ie6G7F4RmRfniCtvRP8R%2BApwSyw5nV4nXiaSCGa2nqPpdKu%2BnpXC5jzuGp9DIYR2WJ5sjTp5ctBd0%2F1oYCPoUR3JA62uR253uY1%2F0UG6m2%2BWZojrpKcwuibXjbiIR0ovaPGzibuEF%2Fs04JZ%2BK%2BAVnmD9l0lfFHWZpsfv5RgRnWlGNfiWMnNbSRPYlVVOxQo8nYDWA3%2FA&X-Amz-Signature=1cba376a3b6e0f8a0d7cdfd634d47ffaf81648a2949e0900aec2970ac9352cc1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
