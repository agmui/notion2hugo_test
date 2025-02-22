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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T57QO32X%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDACX9cYhPV2QywVbhk6%2BDpGFSozVhy6PAsA%2BJEFWAzvAIgMuGZAPgkq3wphx1Hat%2B%2F1pPATxdDwPs8%2Bh%2B65Qwarm0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDECR1X5J93w7JDiwSCrcA6kJ2tpXRIvCO%2Bjiku2GVX0y7Mn86iPVoPgEAEuwrBXlIu5x0f6mQzYlA2QfS8jKRwNWx6AEAQVNYYJ67UHpCHDM%2FlOxBRNSgYtf%2FJHGHbffucm75ONK%2BvdVzoXB1499LnhVUnQIphHNfKtTTSjCt6gVTA0yhKRoUcYkTNz6d8iZC9U6fWydI7zyx%2BArmDarLXAmX7NXTfODNHHuAHbrAhI3JZ9rq2tIQQP6qXvEw4Nv%2BSLTRyd3z4NdRWp2bW0Etf%2Fw08oijqLF%2Bh02gYOr3GHELi2FRJ9Gu%2BghMeqxass0ALFKNq4cjvYfBGExNy4p1IqLjriZMSQ6QdAVRdiOOJ4YHygF1R%2BIQDbUZMLP84KB3PuUzX%2FJ2b328ivlcTBaL9nvshJaLZQAy3ZAXcSG7hMsLIJS3pj%2BRxvs6WwiXRFPkbo13HPB%2FvnrLR7r6LF4hpmrT41z9NAn4w%2BsLSJxq2s2HBIdX9KW4o4waSIKupHMe4DTc2uUQ3Oj%2BXgKVeIPmlLeZKtHC1kBmbMXjU964UyKrEzrXOeZllAE%2FEH7mjMvSACsKTQoZBaHOoi3xGsHs7sw4SzGBll78ryfpnQJ7KhkPe99pqbdw%2F%2Bs4jRcUKZ6PoUo6c747iflghE7MI%2FZ5b0GOqUB94o8KcBb3X1a9YJ63CMtIhTD3vEAvU01LDUlO8yMLUiek7zrPisY%2B2MA9JbhBkik3IXfjyw53EWzqcmkpyBoHiGwMegFw1LitLyQ64BLa97jknr2oqCG1X7g%2BVQuWk1%2FauEKaEZ%2FW0DEF3ql5DnAdmrnnP%2F7VIn41%2BF9MYwbCzKT4%2BmA2oL6xu0R6jYRWE%2BHMRNQ4g2IOezTvX6MgXhGWZR9JXlm&X-Amz-Signature=21aaad8570cc84e156d76eb3f28b8e0e3e8c3836ce4eda2764e4738a423ee665&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T57QO32X%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDACX9cYhPV2QywVbhk6%2BDpGFSozVhy6PAsA%2BJEFWAzvAIgMuGZAPgkq3wphx1Hat%2B%2F1pPATxdDwPs8%2Bh%2B65Qwarm0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDECR1X5J93w7JDiwSCrcA6kJ2tpXRIvCO%2Bjiku2GVX0y7Mn86iPVoPgEAEuwrBXlIu5x0f6mQzYlA2QfS8jKRwNWx6AEAQVNYYJ67UHpCHDM%2FlOxBRNSgYtf%2FJHGHbffucm75ONK%2BvdVzoXB1499LnhVUnQIphHNfKtTTSjCt6gVTA0yhKRoUcYkTNz6d8iZC9U6fWydI7zyx%2BArmDarLXAmX7NXTfODNHHuAHbrAhI3JZ9rq2tIQQP6qXvEw4Nv%2BSLTRyd3z4NdRWp2bW0Etf%2Fw08oijqLF%2Bh02gYOr3GHELi2FRJ9Gu%2BghMeqxass0ALFKNq4cjvYfBGExNy4p1IqLjriZMSQ6QdAVRdiOOJ4YHygF1R%2BIQDbUZMLP84KB3PuUzX%2FJ2b328ivlcTBaL9nvshJaLZQAy3ZAXcSG7hMsLIJS3pj%2BRxvs6WwiXRFPkbo13HPB%2FvnrLR7r6LF4hpmrT41z9NAn4w%2BsLSJxq2s2HBIdX9KW4o4waSIKupHMe4DTc2uUQ3Oj%2BXgKVeIPmlLeZKtHC1kBmbMXjU964UyKrEzrXOeZllAE%2FEH7mjMvSACsKTQoZBaHOoi3xGsHs7sw4SzGBll78ryfpnQJ7KhkPe99pqbdw%2F%2Bs4jRcUKZ6PoUo6c747iflghE7MI%2FZ5b0GOqUB94o8KcBb3X1a9YJ63CMtIhTD3vEAvU01LDUlO8yMLUiek7zrPisY%2B2MA9JbhBkik3IXfjyw53EWzqcmkpyBoHiGwMegFw1LitLyQ64BLa97jknr2oqCG1X7g%2BVQuWk1%2FauEKaEZ%2FW0DEF3ql5DnAdmrnnP%2F7VIn41%2BF9MYwbCzKT4%2BmA2oL6xu0R6jYRWE%2BHMRNQ4g2IOezTvX6MgXhGWZR9JXlm&X-Amz-Signature=d932271b439ecbc54a23dde5548d5482956f4341bc71f7028e8b0c0ac8684fc2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654XU6IKT%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj4OaaD6rDYFYqqW93PzS1g16P0Gw3C8XYJngupGIx9QIgKwUYdGkCVxFqCHFfYqK84114jwkEc8syt0nUTg1XUjQqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFTJZ%2BR%2FMraQZ5ulqyrcA06kOiCE%2FBrKDh3Rd7RjvDA4gW%2BxYNfJ959eLdex6n4QG808MYm%2FFCziA7OlcJHhxxhcf8uegDAyImE85%2BMkog1Tiecl5wELFKrByHD%2FDKq23ZlmPn3KWBHaJGPzUPleCZZCNTwiFUyyPP76RhAXKEBZkOfWYDyi1W4pYOa9HXLsw9SILRXn6VuZ3%2FXt1MMQjd%2BeHEXIxrkIH8%2FztL7snzPHZwKuU0RLf2zbs3rqf4ZVA88FL5c%2B%2FFutcmQcEeTBMzOSvHkMImmaZ%2BBer6qa3%2FXPXYsUMNhnjZxbENBVQGsR6wKu1kQqocKZCjkctqNyxmS94pK7jQACC2VG5sL3V%2FiKIhOuG%2BrnZqvMV0Xv%2Bs4ZaybpI7sJYjrfJqV8yzOhW50txysMS4uCYaKTBIyTf44h1pl0qi3hdGO8VvxJksg%2Fe%2BNcJaVq3jMEowetMxJHc8SL8qrD4TiojsOvneYDHO7Edxc9XYdB0iP%2BSh08ux2B9IULm20Ebty%2FwCmEOOn7b3p3uxoTSlNkToDyjB%2B4vNB6CBReIN3MC%2FfFGUsmbs%2FbqoG19o1gMDR2BKynfb4b%2BC6QZr%2FNL0647pXuTnFhxu6TXs35VgUoUDyoOIwbNwhoL1nbC5xD9bw9WQtHMJ7l5r0GOqUBRkirp1qHo9A%2FFQpNI5943jyajyo8KjVzg2PUAaxLLP%2BUAv5ErsNHP5z8Wen%2FzFb4PQNC7IrID57YZvrwsdVF3hS5ZqWLv5AeQ9dfNT1T0ukLfMRIWwfiIgGMRWCEYiUAAZB%2BSkOy0DKj5D1glFmYSi3DZmgapid%2BFBOlj4Kescexj02mbmQKpbz1me6HJX5dTWe9F68%2BxEFHR1TSoJR6%2FHGv0PFi&X-Amz-Signature=e64ec70a6fede587436483edc5040b1ff1924da3ed91d12f6670dbbf227bccdc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3B7PINQ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVociEZ%2FipbPdtobZ0OyFlxclo12Wom0jIzJNLihXh0AiB%2BqcfuAsZqBXHY%2BWZjoTFWg9y13ta8KyiahfN3CJASJCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs0ULmVaYToj7Z3h%2BKtwDYteXgv7HpgebjEXJEqGzgbMSHJonpoA9fACQvtO6Txm1945FdZwruwexIZcbu26APVilvVx%2BHkgGoOteR2eOqjvk90w190khaq%2F45kfvHJcZGV8cyvKnTgUUMT6K5gpU7L5AC9HYyHMegEWygzj%2BHUuyPWaNPAS12B0cYS7CDYzaD8GifZDskw2bOwStK%2FAf0hq4S5FHutrHRHGKXeVWDRN9wpV%2B5LtdJF6e%2FyFYsyc263i%2BmY8wz%2BxRaoCo3kGx4ihMXmxuewbOtgIFrtN1hu2WziSUsumv2oXyoQFkvEIOfm%2FpqASqBQUQYbhvzVwhScYtpzZnWC2ZaJBdtvLmP4wQjDBNOFOwX%2F4Rgj3gh0MShDBWyQQBYaWho4yWwLACmX3Bs0QDrb9CdggJl4DjLzcKwFrvSV9E%2BCz1dhXdmS0n5kruJqEWKAoWYSGEV0S3s8QzPHOYcwrOgMXEqPyAjO2seqGCs8g3tMo%2BszU702ctQ2btWdpxQDNW3fP%2BLO6766V%2F7Wm8mrb%2Bmp%2BVgcOyBxmH3jWGN2aIYaOFsSBC8gGBBgB0fui%2BT3ITUydUomNt5ut92qbkyTg%2FqpIJG2UBpMAvoFLjuW5HvpvQ5rbyoog0ZpWMuyTxEi%2F9TOEw4%2BPmvQY6pgEuENIXkhT135WhwfOGqLsP13litS9Pld9tlskm7iT2qhgMTuibPFaapXMPx2AvZJBCdAK%2BI2a%2FHkN4xFGv0ldjWg6reUAkh10rLfrrBAEhxIQ30gP3W7Huk38AU3qcVy1PKbCB8B6Sp7Tz5EhCug0iRONZMpd2X%2BEiGrhWs4%2Fm%2Bxl9w6qRm%2BcBKjm37VDpAvKmxk4KoRvj9XAIvQZAaX3QXhS4RYd1&X-Amz-Signature=a3c5428dc06241fc384f2fa0672cda2450fd2b64b861c1657ba6ef910f8bef79&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T57QO32X%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDACX9cYhPV2QywVbhk6%2BDpGFSozVhy6PAsA%2BJEFWAzvAIgMuGZAPgkq3wphx1Hat%2B%2F1pPATxdDwPs8%2Bh%2B65Qwarm0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDECR1X5J93w7JDiwSCrcA6kJ2tpXRIvCO%2Bjiku2GVX0y7Mn86iPVoPgEAEuwrBXlIu5x0f6mQzYlA2QfS8jKRwNWx6AEAQVNYYJ67UHpCHDM%2FlOxBRNSgYtf%2FJHGHbffucm75ONK%2BvdVzoXB1499LnhVUnQIphHNfKtTTSjCt6gVTA0yhKRoUcYkTNz6d8iZC9U6fWydI7zyx%2BArmDarLXAmX7NXTfODNHHuAHbrAhI3JZ9rq2tIQQP6qXvEw4Nv%2BSLTRyd3z4NdRWp2bW0Etf%2Fw08oijqLF%2Bh02gYOr3GHELi2FRJ9Gu%2BghMeqxass0ALFKNq4cjvYfBGExNy4p1IqLjriZMSQ6QdAVRdiOOJ4YHygF1R%2BIQDbUZMLP84KB3PuUzX%2FJ2b328ivlcTBaL9nvshJaLZQAy3ZAXcSG7hMsLIJS3pj%2BRxvs6WwiXRFPkbo13HPB%2FvnrLR7r6LF4hpmrT41z9NAn4w%2BsLSJxq2s2HBIdX9KW4o4waSIKupHMe4DTc2uUQ3Oj%2BXgKVeIPmlLeZKtHC1kBmbMXjU964UyKrEzrXOeZllAE%2FEH7mjMvSACsKTQoZBaHOoi3xGsHs7sw4SzGBll78ryfpnQJ7KhkPe99pqbdw%2F%2Bs4jRcUKZ6PoUo6c747iflghE7MI%2FZ5b0GOqUB94o8KcBb3X1a9YJ63CMtIhTD3vEAvU01LDUlO8yMLUiek7zrPisY%2B2MA9JbhBkik3IXfjyw53EWzqcmkpyBoHiGwMegFw1LitLyQ64BLa97jknr2oqCG1X7g%2BVQuWk1%2FauEKaEZ%2FW0DEF3ql5DnAdmrnnP%2F7VIn41%2BF9MYwbCzKT4%2BmA2oL6xu0R6jYRWE%2BHMRNQ4g2IOezTvX6MgXhGWZR9JXlm&X-Amz-Signature=4ffff2a135d889d41079feb6aa6c8ce4d0dda3484b722c09294b959d700abacd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
