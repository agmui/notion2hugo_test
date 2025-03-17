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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUDUIP5C%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhwcp24dZv4FVQlMOrGRYiAXnv8ebligKeOp8sDpGhhAiA9y1sRqHF4cY3F8oKof9HqxCkN8PD9ABTcHLs1UcutFSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMFeAV2UH2ZkZYIYg0KtwDdpdqYrhjh%2FxMPpb4X4k2njunoGJ6hN%2FiV1jvwQ8oVpxZcWXylN%2FsxEfJ%2Fv%2BIU%2FCxXpaZ%2BSfF4q1XmrqOwMVig9qYj5zx4Z9WaEQrxiqcKtNLgjkWpmA2cuPdmDLLXJLrgZf%2BUbkSrPUOh5C%2FvLxdQO%2FTAgUFP5UeADZaqZ8wByeHk99lh518J%2B%2FNwLK%2B1%2F7SbxhG%2BjbukIsoYyxFt1KGdbCI1xn9QQuz%2BBX7xZLjyL8UxIxZWrOHtjpFRpJySuYB3zULXqiDrZKmQQcUf7aQNQvT8yc%2FeaxI7%2FZWgupW0QpxlpwICQItDWCsh9xI3Z2tWpz18lU%2Bl%2BehEkuNODIu8xelxpd06DyZS9QYFy%2FIGRHxyBv7KznUMYMo0KhWfKxYBOKlz9Jycv0BcR3OVeFB5P9zIgvR2aKa6OAqG5TGf7JlfB%2BloK3Wrw0KYxPGssUjMYjI2If7aObmwTgEHiptHwMggP%2FpudEZ2n8CD4AKtQpD47cJXSWcOJMT6fujz%2Bn5FTXyXJuALjaLKXLI0BqaFO%2FXSYelEOn5CMJWZNGWIBH4W5mL%2BdpOchBwmqPlnLaV4ji8DxC5WZ2zvTnft7DdbJQU7fRX2ZgCmvMVaVSSJPpxK%2FHVvHim5jcprm4w0Z3dvgY6pgE6IWmLABgs%2Fd5ENOkpkx2ldL%2BfEyh35oiX5piKDvw9SopCPO6PrNKbgxsFIJjBsocon3WU7TSk1Rwvp%2FJ2Hj1psp7SY%2FGtYouNS60FmyYxxh6hn%2BcQuRS%2F5uWG8dxYuy%2FJcaKzUK8GK9O91dC3bTfHy82ZKbEzL6m28TUm2%2BkAT6F63WqFhfTnlyOzZjrhXqh%2FqOKn0bEutlxgC6R9DXWfejvdpmNj&X-Amz-Signature=c39f573a57a03a655aad83ee1150605052011427d1a952dc747a519b89dd2392&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUDUIP5C%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhwcp24dZv4FVQlMOrGRYiAXnv8ebligKeOp8sDpGhhAiA9y1sRqHF4cY3F8oKof9HqxCkN8PD9ABTcHLs1UcutFSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMFeAV2UH2ZkZYIYg0KtwDdpdqYrhjh%2FxMPpb4X4k2njunoGJ6hN%2FiV1jvwQ8oVpxZcWXylN%2FsxEfJ%2Fv%2BIU%2FCxXpaZ%2BSfF4q1XmrqOwMVig9qYj5zx4Z9WaEQrxiqcKtNLgjkWpmA2cuPdmDLLXJLrgZf%2BUbkSrPUOh5C%2FvLxdQO%2FTAgUFP5UeADZaqZ8wByeHk99lh518J%2B%2FNwLK%2B1%2F7SbxhG%2BjbukIsoYyxFt1KGdbCI1xn9QQuz%2BBX7xZLjyL8UxIxZWrOHtjpFRpJySuYB3zULXqiDrZKmQQcUf7aQNQvT8yc%2FeaxI7%2FZWgupW0QpxlpwICQItDWCsh9xI3Z2tWpz18lU%2Bl%2BehEkuNODIu8xelxpd06DyZS9QYFy%2FIGRHxyBv7KznUMYMo0KhWfKxYBOKlz9Jycv0BcR3OVeFB5P9zIgvR2aKa6OAqG5TGf7JlfB%2BloK3Wrw0KYxPGssUjMYjI2If7aObmwTgEHiptHwMggP%2FpudEZ2n8CD4AKtQpD47cJXSWcOJMT6fujz%2Bn5FTXyXJuALjaLKXLI0BqaFO%2FXSYelEOn5CMJWZNGWIBH4W5mL%2BdpOchBwmqPlnLaV4ji8DxC5WZ2zvTnft7DdbJQU7fRX2ZgCmvMVaVSSJPpxK%2FHVvHim5jcprm4w0Z3dvgY6pgE6IWmLABgs%2Fd5ENOkpkx2ldL%2BfEyh35oiX5piKDvw9SopCPO6PrNKbgxsFIJjBsocon3WU7TSk1Rwvp%2FJ2Hj1psp7SY%2FGtYouNS60FmyYxxh6hn%2BcQuRS%2F5uWG8dxYuy%2FJcaKzUK8GK9O91dC3bTfHy82ZKbEzL6m28TUm2%2BkAT6F63WqFhfTnlyOzZjrhXqh%2FqOKn0bEutlxgC6R9DXWfejvdpmNj&X-Amz-Signature=b2c71774be6630080ca69644da8407b9cea671f5605eb35ce251b7b1a32631a0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BKIMPF%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWwoeKU6%2F2RhQg94XSB71b3ooYVJWREB3RY%2B7D5XPiCAiATkAmnYjmIrM5rUIKJB6A%2FLVXnt8J0vlqGc9g4bC%2FvFir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM5uwxf%2FfVTyoN%2F2lPKtwDtirXDO%2Bs0Z8qJN24iZZA8ybnvtI8w3%2BC2imKgXKKHr5xrGQSD5nn4DnQOMq6LxyC283jOHLoQkUQmzBJ2c11rO%2FFpuafWre6S%2BWS01XamdPmg44GvXV7IhDfxfKDEsMtAG8NLcPF%2By0cs7j6T4wSqNFscHbdP18%2B7frpmK%2BJ1ZoX0yktF5Qb36lz3fOLOxzoAsPaJo2XYyGVAEgjPOl2XnEhap6Wo%2B1oBvQhwG8uTG3ekju%2Fwj4wwkxRxM%2FemtOIHNtF2kP0TLyXLdDeY3%2Br19v1ZoZb1xQPJAK5s0fLCvSm7CAjpMBxtyWP0xofxCYiIffNkxoU9G3tMLqh2CvQm5fK6HloI3hPebIJUjbXYKOeAVvRQ2U2WwW8379UNUUS6cGGbSuzKcQCOF2OpcKFFSPkzpDYO98%2BIqHlTBAGqq1rdTC7l2DyIa%2FcWuAPf1qh83gEN9xzTJMyevbimrdAYxFwwNGgO67pFOdkl0DPE70dE%2B4bsF7pU3dkszout7sNzOtPQWIDGMJqOAQ3T%2FhxnFu%2BvEnm45Lvkx44QqisKl8aLafYs8uDXYWCH6Cxf0a8MF60yURFfXt5ywdO9iTAOGfxqnE1%2FhrTRLEt0Pp1%2F%2F4qSUeO%2BCKAsSB16IMwv53dvgY6pgGUAOgUDTz5y%2FyYi9h%2B3jLcK2oGMRe2ZjJ9QrguW4bJQcVmxeo8qDd7iH5sJpbQ%2BcLOJLe0w5r88tW1WqBP%2BrZkZxU%2BTMk7SVNxETaIIL%2BlDQat8Jw8PnDnr45FagVbngpP9ijhHZq%2B2WJGn%2Bvot6JMjdhSdpMxyWb5YyAa9DGt6wCnRKJU9Wh7h6l4%2FcOzz0J5lBB%2BTkDrOLl64FvekncR81%2BnKv4I&X-Amz-Signature=301fa218cab590d953f5ec335c2f2758e9605926181cd01f571e8ea066312c1b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGFSQKDF%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmLuiVluPVoxvMfF9ZzktcQ9ya5Guz9N2ohNy41tLpgQIhAMY6FgnXmYdRZSk5UIswilTID60HTeMoRue6WQaus8WYKv8DCDcQABoMNjM3NDIzMTgzODA1IgwWrmaWPF8RlcpYT%2Fwq3AMu%2BnsUXp%2FYQT2cGFuKj%2FKtIa8GWQgHIOuXDPWCIyHGXsPWNAol405FpHHJY%2Bn%2Bsq%2Bw9YUgt4KZnGrX0wUxAs6m8%2F4TTIgAGunIsGe1Oc7NwNVZjkpHTdZH%2Bl6gGnGArkYtqyzshGmddJtwX5pMA8EyzsQ4I1iRtaqNIA2nswlNJHBGuPgfie7qd%2BcLNQpX03OykBmV3J%2FOzM4fBhUDHmNRKMBGB%2FOV2OPVfHVBPmJmsjApAIG6UN1Na1jBJ162qTJWttTf%2FO1z%2FbpTESRtOhvG%2FEduKufMdsFidW%2FdqiAW%2Bg4YydJ2iCqzKoemhnMjbHM5Gj4U0%2FQ%2B0HiEIWH%2FHUwQMp9dPbq%2FcuLJs7eOYcuUtEXlZpjTTzpaL9%2BUGlu1xNDiMg02XJiv07jviOGgIJnN%2BIB3Iv6%2B8tkphZeDyJ5Cc2f34CoxSe6xT1ZJ8lXb4qyPETtpK6eyZJZOr%2FFf9nhkgG%2BvW3Xve471glkqbyT9iDi6LIzh4ZZeppG1h0vT5dGjU8%2BddXvXjFeQsM2POXTmJUG71Lr5Ce8POfi4bKcWV%2BqTDmDI9vt238S6U%2BVy6k08K5NWOxlR3koHEmsa1ngA4GMX%2B4n%2BKKFk5FCrm0iFiU3YE72xPiCxf2us2jDGnd2%2BBjqkAVOBKGsPjG0q7zEQcyGopH0BwKPzk6wsr9TmosV1wU9hJUYi6%2FUwy9o3V2tNzVnNIz1l%2F59MOl5w9pDkiSMxMDrSXcnbpYn41%2B07urhd0dowKmy99vtu8EILneVklFsAYQCJGcx1p0umvBtrsmlaKYw4eviXq%2B%2Fz8bAhuE9p%2FjjsqsIp8jMKLaHODlOVtT%2BvlyRcqUKFnvYJ5YNDU3ymaKNo7Xh7&X-Amz-Signature=030ce8bda30b561f37e5e43ba26c16d8672af3b3a9b5af5d060bc3108be37448&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUDUIP5C%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhwcp24dZv4FVQlMOrGRYiAXnv8ebligKeOp8sDpGhhAiA9y1sRqHF4cY3F8oKof9HqxCkN8PD9ABTcHLs1UcutFSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMFeAV2UH2ZkZYIYg0KtwDdpdqYrhjh%2FxMPpb4X4k2njunoGJ6hN%2FiV1jvwQ8oVpxZcWXylN%2FsxEfJ%2Fv%2BIU%2FCxXpaZ%2BSfF4q1XmrqOwMVig9qYj5zx4Z9WaEQrxiqcKtNLgjkWpmA2cuPdmDLLXJLrgZf%2BUbkSrPUOh5C%2FvLxdQO%2FTAgUFP5UeADZaqZ8wByeHk99lh518J%2B%2FNwLK%2B1%2F7SbxhG%2BjbukIsoYyxFt1KGdbCI1xn9QQuz%2BBX7xZLjyL8UxIxZWrOHtjpFRpJySuYB3zULXqiDrZKmQQcUf7aQNQvT8yc%2FeaxI7%2FZWgupW0QpxlpwICQItDWCsh9xI3Z2tWpz18lU%2Bl%2BehEkuNODIu8xelxpd06DyZS9QYFy%2FIGRHxyBv7KznUMYMo0KhWfKxYBOKlz9Jycv0BcR3OVeFB5P9zIgvR2aKa6OAqG5TGf7JlfB%2BloK3Wrw0KYxPGssUjMYjI2If7aObmwTgEHiptHwMggP%2FpudEZ2n8CD4AKtQpD47cJXSWcOJMT6fujz%2Bn5FTXyXJuALjaLKXLI0BqaFO%2FXSYelEOn5CMJWZNGWIBH4W5mL%2BdpOchBwmqPlnLaV4ji8DxC5WZ2zvTnft7DdbJQU7fRX2ZgCmvMVaVSSJPpxK%2FHVvHim5jcprm4w0Z3dvgY6pgE6IWmLABgs%2Fd5ENOkpkx2ldL%2BfEyh35oiX5piKDvw9SopCPO6PrNKbgxsFIJjBsocon3WU7TSk1Rwvp%2FJ2Hj1psp7SY%2FGtYouNS60FmyYxxh6hn%2BcQuRS%2F5uWG8dxYuy%2FJcaKzUK8GK9O91dC3bTfHy82ZKbEzL6m28TUm2%2BkAT6F63WqFhfTnlyOzZjrhXqh%2FqOKn0bEutlxgC6R9DXWfejvdpmNj&X-Amz-Signature=e05ceb17af7f7510400da5d9ed2a78b73355d365cc87d220461f9a30d970dd81&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
