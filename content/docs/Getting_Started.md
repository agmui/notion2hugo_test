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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QJAISPB%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHRxQhSz2iI0BRYlWv7%2BHMd%2B3ZBIBuRbzM%2B%2F3BIHZtOAiBLbVrijZVVsTnYs2OO02RSIqpqtkhYniol3QBWreCmDiqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7faOArkSew0qmZyaKtwDju7%2FymyEir0O99OzMOuBcKQRirQTbJo1gvZp67hcLWd4nsLaNSFaozvPgCF8Hy%2BhU47VSZlwFmv%2BPjqOWon67U%2BaiLPsNe6CtfOLOddjziRnJbZW6ElH%2Bog0Y05fldAgA6SJk28f6QUV%2Beqvlu4bFSA7%2BX%2B7ErFL4zTBCkw8F%2BRchC90uixvOZD%2BlhB4K41LJO2RPn%2BbYomRVSunuxoNscQHln4kx4U0xJzKtB2xRrrOMgfyJg8qqyqS0epQHW6XTp09MOpT61OB8Cu1Rybwq1guAPv%2BZ9TEMjEWsMC4sJaXwZ7zwzsKcJFRxLln6oPJEpNj7EuCj4enBVoMhbTWtdbv6394xil9fs2LCjNam95fInXLGgqtKTqc56BOFhPoEe7ZC9OtTyp5ThQZGzuZJo9mX%2B3ymnl2bX%2FO5WyQh1RlP8hmCJ9aKzS0f3r18m%2Bopx8wV4n1tkz8%2FYV36pDNN5aR%2FVY55sSfIqLH3qRrOAaMZc1QxBiUF68zctUydCQjkF%2FArEAXHNdq4khr6s5bX66S5ifMHcTzpPXGE589Oz1TZebIwNn68ZeTLNq160%2BNPacTDTpNO8M9y1q2rtC6zjYHrCplsx09CXwKKQ%2FnVUoI2%2FbZ%2F6wAA2o6TrIw3ryWwwY6pgEYocUdW5W%2F%2F1naMO%2Bp4fdNFlThqAvx0xXqAY%2Fj7p1FiM3FIuptnB%2FSQuCqy08PwqJJLVKHy2bOum2XmPlwpEMyafvoWMC%2BmR1iOVEh%2Bab4mfuhyJqLQh2GBnGYiOsf4H8PAk93mtA7SZH6yxEqDTsQOx85klTIddyXjNGLd9F8wEq9VG4TPqO8xd53pJ1Qr0TdA0zzxMbeWLo6Cq1SkTTFOXn9Lesx&X-Amz-Signature=20e27b75edec1fefb4627f66d11c8ef389eeb133d5605588536995771ac9f4e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QJAISPB%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHRxQhSz2iI0BRYlWv7%2BHMd%2B3ZBIBuRbzM%2B%2F3BIHZtOAiBLbVrijZVVsTnYs2OO02RSIqpqtkhYniol3QBWreCmDiqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7faOArkSew0qmZyaKtwDju7%2FymyEir0O99OzMOuBcKQRirQTbJo1gvZp67hcLWd4nsLaNSFaozvPgCF8Hy%2BhU47VSZlwFmv%2BPjqOWon67U%2BaiLPsNe6CtfOLOddjziRnJbZW6ElH%2Bog0Y05fldAgA6SJk28f6QUV%2Beqvlu4bFSA7%2BX%2B7ErFL4zTBCkw8F%2BRchC90uixvOZD%2BlhB4K41LJO2RPn%2BbYomRVSunuxoNscQHln4kx4U0xJzKtB2xRrrOMgfyJg8qqyqS0epQHW6XTp09MOpT61OB8Cu1Rybwq1guAPv%2BZ9TEMjEWsMC4sJaXwZ7zwzsKcJFRxLln6oPJEpNj7EuCj4enBVoMhbTWtdbv6394xil9fs2LCjNam95fInXLGgqtKTqc56BOFhPoEe7ZC9OtTyp5ThQZGzuZJo9mX%2B3ymnl2bX%2FO5WyQh1RlP8hmCJ9aKzS0f3r18m%2Bopx8wV4n1tkz8%2FYV36pDNN5aR%2FVY55sSfIqLH3qRrOAaMZc1QxBiUF68zctUydCQjkF%2FArEAXHNdq4khr6s5bX66S5ifMHcTzpPXGE589Oz1TZebIwNn68ZeTLNq160%2BNPacTDTpNO8M9y1q2rtC6zjYHrCplsx09CXwKKQ%2FnVUoI2%2FbZ%2F6wAA2o6TrIw3ryWwwY6pgEYocUdW5W%2F%2F1naMO%2Bp4fdNFlThqAvx0xXqAY%2Fj7p1FiM3FIuptnB%2FSQuCqy08PwqJJLVKHy2bOum2XmPlwpEMyafvoWMC%2BmR1iOVEh%2Bab4mfuhyJqLQh2GBnGYiOsf4H8PAk93mtA7SZH6yxEqDTsQOx85klTIddyXjNGLd9F8wEq9VG4TPqO8xd53pJ1Qr0TdA0zzxMbeWLo6Cq1SkTTFOXn9Lesx&X-Amz-Signature=f8d01b23152807514744d3a02e9eb4f1d23186122c59ae865836a00d8c94602e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QJAISPB%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHRxQhSz2iI0BRYlWv7%2BHMd%2B3ZBIBuRbzM%2B%2F3BIHZtOAiBLbVrijZVVsTnYs2OO02RSIqpqtkhYniol3QBWreCmDiqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7faOArkSew0qmZyaKtwDju7%2FymyEir0O99OzMOuBcKQRirQTbJo1gvZp67hcLWd4nsLaNSFaozvPgCF8Hy%2BhU47VSZlwFmv%2BPjqOWon67U%2BaiLPsNe6CtfOLOddjziRnJbZW6ElH%2Bog0Y05fldAgA6SJk28f6QUV%2Beqvlu4bFSA7%2BX%2B7ErFL4zTBCkw8F%2BRchC90uixvOZD%2BlhB4K41LJO2RPn%2BbYomRVSunuxoNscQHln4kx4U0xJzKtB2xRrrOMgfyJg8qqyqS0epQHW6XTp09MOpT61OB8Cu1Rybwq1guAPv%2BZ9TEMjEWsMC4sJaXwZ7zwzsKcJFRxLln6oPJEpNj7EuCj4enBVoMhbTWtdbv6394xil9fs2LCjNam95fInXLGgqtKTqc56BOFhPoEe7ZC9OtTyp5ThQZGzuZJo9mX%2B3ymnl2bX%2FO5WyQh1RlP8hmCJ9aKzS0f3r18m%2Bopx8wV4n1tkz8%2FYV36pDNN5aR%2FVY55sSfIqLH3qRrOAaMZc1QxBiUF68zctUydCQjkF%2FArEAXHNdq4khr6s5bX66S5ifMHcTzpPXGE589Oz1TZebIwNn68ZeTLNq160%2BNPacTDTpNO8M9y1q2rtC6zjYHrCplsx09CXwKKQ%2FnVUoI2%2FbZ%2F6wAA2o6TrIw3ryWwwY6pgEYocUdW5W%2F%2F1naMO%2Bp4fdNFlThqAvx0xXqAY%2Fj7p1FiM3FIuptnB%2FSQuCqy08PwqJJLVKHy2bOum2XmPlwpEMyafvoWMC%2BmR1iOVEh%2Bab4mfuhyJqLQh2GBnGYiOsf4H8PAk93mtA7SZH6yxEqDTsQOx85klTIddyXjNGLd9F8wEq9VG4TPqO8xd53pJ1Qr0TdA0zzxMbeWLo6Cq1SkTTFOXn9Lesx&X-Amz-Signature=e1fcd346e0f6bfdcdc036472f9f1dc41efb52a00a402dc21873f2ec911c184a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDWXWKBH%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcWBhyuWZ23fCiWUBnXvVd2BogF%2BVlRRsFHkVR4OnerwIhAJ%2FhA0bNEWgoUAC7LSiAWILDanHfJlHDmlQWqYZnJQkVKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjHlFUPTb8NJ3AvkQq3AO0e5OUIz5S64ioCxHt1Pd0sgS%2BnbKnSsnPLXgnHNbNYGKnBE%2Bv5X6qE9wmGh4h2KYTWFyPF9UJe9%2F8uLWXunBXPORY6CdZaxu1NxWHZP0hGKL2HT8nww8y9f90PIVKgi8rNiQE%2FJzvcVtH8H%2F%2BFVp%2BHfgupTC7d3hw2kvQZbwiAi%2FvH3an3JYgSLNyNFeprc1GQPCAxp9LgcCwPMOYFkuXooAchjm%2F4XJKASRCob6MpOlwwvg50WNBIGelbtQklOmm0VMnORBwBN0onxZ%2BAvZ3NynvrXWY8irlqyiomukKpFQCpPPsW3HTARVVaI%2FoEn2uEjL5wpmjlIpL50ZZ%2Bs8PLV6WIy2vVHtURY8BpawjGMRr3JNQK2dFnT2Kj7msnsVu3Wmy%2Bc37saUiUo5b0oy935moEQIUn2JX2a3jdSaLuA7H6HFhljeILG9hHVjIm530lVLmr%2BsaCejqrBem6cFgVDtNftuHjwPY7peQMeb%2F4nwhF3nwegaTYQDcSk0PyG5P%2B7QOYE4hkSV2OTa72ZQedFEMOkNwsEOwzfyb7Pltg7OQCVnoNx1obHTY31YC2XIg5gc%2F6yXoX%2FqKdUiYVPww1zFs5lZnMryVIvSs1bDdBdtIZ4ad4s1RVfpQ5zCbvZbDBjqkAZp1oFD73KM9EZI7407FpwO2iGU7qRA4iNdXhDXBRKAQaB2lO2yGnN5FCopaUl7xkTpL46Uk6YFtWEJGWHfvwLQcrmjNO2H3r1xThuJ9f%2FOnKG%2F47WmdwwpyAXBT501F0FFQu8jMbIC2Be%2FyZBePMr3x%2F3kVRm42ypNB88Jh9%2FquhOjPcNog%2FtmLL3Kx8wrZLsXhJskpmvZfLRo3HgCsyF6mEiK8&X-Amz-Signature=821d1fe8978473b0121c8e8fe24d42de189ad98c45fe95f94cbfadb4c722f3a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH2HQ62S%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T210813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVbaHC62qky54BtSXQwcZoV9Hiqd4awIPubYH0qBL0ugIhAIrgQMxGaIj1yvvfc46rjFwbg1KqpLssTYj8jrydM740KogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd0zB%2BMp8qdJJdaXkq3AM0oAOQPEeQoVsYDL48tgu4zZKn4%2B1sEsRPDOiAtFAOcNTRgRhKO2mIQFJuprPrjadCRokjmtgYoJxxCIzg9uLm65l6idm4SJhzvaLDfpFfco6LkZ4gLpyOWyztFRRxXglnWokOG5VNc0J1fykZTbL8Dg7sL4hYbxxR%2FWM0GjwI8g0MAnb1a5d3VzhmhiFGb3AMnF8eOeUQLkfZw%2FI3DNN7PjYXOS9940Sk3tbRB01cB9%2FIrh%2BItuOTIqOzHzG64yq4BUvbwkzne%2BNWbHYsK01HTaYowG%2BGS2NVQZW%2Fm1Wf3U0%2Bl7seKgbmXRa02YqZwndLx%2FvCi4FaPAxL2POMtv2jgMshZugGhNFcw8aPDlQwbg0C%2BMqWJZkltUCzil6b5ZQFxSbmMVbSChUbut1oWfOLjUHTnqzVqLuafQ7ot0When8MM3Hr3SSOGKFj0t%2FPPEpDIzYNKpSP%2Fr%2FYYfY9o93LFc27u5Fnpf3MLdsPbyroTJmmRxGTWpl2T0tBTER08Fbka6XkiGHDHwjxXwt%2F91AfQBkZ%2BzX1mbPkbTlNNVhCitN7CVCV1RDv47kE53yx2wvez6nrjh6DROmd%2FJGUJgdZzu1MOzFvdYuV65CBJ5bIsAvbainzXH%2FVm4hRUzDfvJbDBjqkAdboefcmIGxz%2F5GXkODIyer1jIxNrzAmpr16cedV4fPn9ONIj%2FwFy4dMPqO51BzFtmYAHb8vDRoZflNbJsI4g0%2FjfQIXmjYG51fbWd%2FHUn4kxGgX6Z3oTzvTeJrGNdu%2BM9pCiJAFWjfZNTHkmlgxOxpWE%2B9iVjvMkswo%2F2Nx8%2B2vab2dU5KzP1VQijoq67luTfZLUAaODd0NapORHKT0fpf%2FP%2FJh&X-Amz-Signature=5ac7c14fa28a1578ef628d5648b0638fdd1b87c2fc5ee140e590f8ce961fc2cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QJAISPB%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHRxQhSz2iI0BRYlWv7%2BHMd%2B3ZBIBuRbzM%2B%2F3BIHZtOAiBLbVrijZVVsTnYs2OO02RSIqpqtkhYniol3QBWreCmDiqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7faOArkSew0qmZyaKtwDju7%2FymyEir0O99OzMOuBcKQRirQTbJo1gvZp67hcLWd4nsLaNSFaozvPgCF8Hy%2BhU47VSZlwFmv%2BPjqOWon67U%2BaiLPsNe6CtfOLOddjziRnJbZW6ElH%2Bog0Y05fldAgA6SJk28f6QUV%2Beqvlu4bFSA7%2BX%2B7ErFL4zTBCkw8F%2BRchC90uixvOZD%2BlhB4K41LJO2RPn%2BbYomRVSunuxoNscQHln4kx4U0xJzKtB2xRrrOMgfyJg8qqyqS0epQHW6XTp09MOpT61OB8Cu1Rybwq1guAPv%2BZ9TEMjEWsMC4sJaXwZ7zwzsKcJFRxLln6oPJEpNj7EuCj4enBVoMhbTWtdbv6394xil9fs2LCjNam95fInXLGgqtKTqc56BOFhPoEe7ZC9OtTyp5ThQZGzuZJo9mX%2B3ymnl2bX%2FO5WyQh1RlP8hmCJ9aKzS0f3r18m%2Bopx8wV4n1tkz8%2FYV36pDNN5aR%2FVY55sSfIqLH3qRrOAaMZc1QxBiUF68zctUydCQjkF%2FArEAXHNdq4khr6s5bX66S5ifMHcTzpPXGE589Oz1TZebIwNn68ZeTLNq160%2BNPacTDTpNO8M9y1q2rtC6zjYHrCplsx09CXwKKQ%2FnVUoI2%2FbZ%2F6wAA2o6TrIw3ryWwwY6pgEYocUdW5W%2F%2F1naMO%2Bp4fdNFlThqAvx0xXqAY%2Fj7p1FiM3FIuptnB%2FSQuCqy08PwqJJLVKHy2bOum2XmPlwpEMyafvoWMC%2BmR1iOVEh%2Bab4mfuhyJqLQh2GBnGYiOsf4H8PAk93mtA7SZH6yxEqDTsQOx85klTIddyXjNGLd9F8wEq9VG4TPqO8xd53pJ1Qr0TdA0zzxMbeWLo6Cq1SkTTFOXn9Lesx&X-Amz-Signature=c7034462f0e029d21fd9fcf71612aa2775f2800ceec9d1923979f853625f0e76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
