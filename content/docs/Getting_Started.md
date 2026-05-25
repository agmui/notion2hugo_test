---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GKL24FZ%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHfoNRcChTwdsServMY9xiTql6fX1dTdBFC0puH7%2F7sVAiBIJS%2Fdhvi5aULwzYX%2Fiwwl8053AHQjTuEv7MCrvG4KcCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMY%2BC20K0uvbtZqfpYKtwD5op1t66Vvuo%2FknTMretY9PBkAGgMGW2VnHhhN3%2Fm%2BOvq5gADc0mc9S7yUHE90KmONPWhKYuDnOTBfioNuO0gjq4SEShtJVX4UwlUJABkBp%2FIJGVA2riOrl8IjGe4xl0WK%2B805f2a31bexkQRD8b7mcB2GGG3ic9VRNuG0NvO8l9Fefrt1Suwcymk1cXaquPN%2Ffqcd1SDwOXOipRLIrTYUgN1PHNser2QPbij5HFEoSKSgXpJ4kU4kFfGmZmDl254E38XA6ONV3M6QAwJM%2FcUMYJhfqcRqPT%2FfAe4p1QLE0DPdGDgBxTZbC1A8M7bC5epkf2CMck4lM3mf%2BR5XFh%2Fc7foOS1TcG52Sk2hMppTVzv10Q269jrXAxm35tj07qBIGbi34YW5rHXn0Qpq6htETnoWxCfs048G5D5hh0P3i3IQaxkJIbkTlyWbaLucl%2B8kJawH0zxnkdqCWcLy2BVdj8zOY9%2BSloobqbH9CzZt0IMkRfstM8Fejj0GrTYUoSqpsIMUBLCMx0LUtGuSyERDbL3UMf3FhecRKMhuU55B%2FbEvx0NXZh%2FP83zHYhF0O%2FlUEWkQMm5UDnbBQUibY6q86SNagMNbF7H9ELpNA3QdkFdtTVa4N8EeSgXPOj8w5LLO0AY6pgEhUzq7SVqIPsIcOFHy0OUjqFPoTxPKvfhnFZoUwxpoZO3l2iZ%2Fnp6ftIVmObqWJOt%2BZYD9rc3rih54r2whYCfVgPFf9IJcNwEjnKI0ZXKZvd%2Bb5RsFvXrXbwnGws0zPyJR%2BPTb4cTW%2FfURLHZMN4fDQswJnB02gqs%2F4i8%2BRZ%2FYRSDdz6XaFWc%2F6lXcHm2%2BRqPI5eKraWBDhOVT3zHCKiNzxEdb5uO8&X-Amz-Signature=9945f53c5c9c1c049a2816dec197a4902f72e795b895c30ff2e3ac0d4c6d3eb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GKL24FZ%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHfoNRcChTwdsServMY9xiTql6fX1dTdBFC0puH7%2F7sVAiBIJS%2Fdhvi5aULwzYX%2Fiwwl8053AHQjTuEv7MCrvG4KcCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMY%2BC20K0uvbtZqfpYKtwD5op1t66Vvuo%2FknTMretY9PBkAGgMGW2VnHhhN3%2Fm%2BOvq5gADc0mc9S7yUHE90KmONPWhKYuDnOTBfioNuO0gjq4SEShtJVX4UwlUJABkBp%2FIJGVA2riOrl8IjGe4xl0WK%2B805f2a31bexkQRD8b7mcB2GGG3ic9VRNuG0NvO8l9Fefrt1Suwcymk1cXaquPN%2Ffqcd1SDwOXOipRLIrTYUgN1PHNser2QPbij5HFEoSKSgXpJ4kU4kFfGmZmDl254E38XA6ONV3M6QAwJM%2FcUMYJhfqcRqPT%2FfAe4p1QLE0DPdGDgBxTZbC1A8M7bC5epkf2CMck4lM3mf%2BR5XFh%2Fc7foOS1TcG52Sk2hMppTVzv10Q269jrXAxm35tj07qBIGbi34YW5rHXn0Qpq6htETnoWxCfs048G5D5hh0P3i3IQaxkJIbkTlyWbaLucl%2B8kJawH0zxnkdqCWcLy2BVdj8zOY9%2BSloobqbH9CzZt0IMkRfstM8Fejj0GrTYUoSqpsIMUBLCMx0LUtGuSyERDbL3UMf3FhecRKMhuU55B%2FbEvx0NXZh%2FP83zHYhF0O%2FlUEWkQMm5UDnbBQUibY6q86SNagMNbF7H9ELpNA3QdkFdtTVa4N8EeSgXPOj8w5LLO0AY6pgEhUzq7SVqIPsIcOFHy0OUjqFPoTxPKvfhnFZoUwxpoZO3l2iZ%2Fnp6ftIVmObqWJOt%2BZYD9rc3rih54r2whYCfVgPFf9IJcNwEjnKI0ZXKZvd%2Bb5RsFvXrXbwnGws0zPyJR%2BPTb4cTW%2FfURLHZMN4fDQswJnB02gqs%2F4i8%2BRZ%2FYRSDdz6XaFWc%2F6lXcHm2%2BRqPI5eKraWBDhOVT3zHCKiNzxEdb5uO8&X-Amz-Signature=d3723f21a951ae2e77109e12229617d79e4210d2faed4ee66b9a7a7859b89ca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GKL24FZ%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHfoNRcChTwdsServMY9xiTql6fX1dTdBFC0puH7%2F7sVAiBIJS%2Fdhvi5aULwzYX%2Fiwwl8053AHQjTuEv7MCrvG4KcCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMY%2BC20K0uvbtZqfpYKtwD5op1t66Vvuo%2FknTMretY9PBkAGgMGW2VnHhhN3%2Fm%2BOvq5gADc0mc9S7yUHE90KmONPWhKYuDnOTBfioNuO0gjq4SEShtJVX4UwlUJABkBp%2FIJGVA2riOrl8IjGe4xl0WK%2B805f2a31bexkQRD8b7mcB2GGG3ic9VRNuG0NvO8l9Fefrt1Suwcymk1cXaquPN%2Ffqcd1SDwOXOipRLIrTYUgN1PHNser2QPbij5HFEoSKSgXpJ4kU4kFfGmZmDl254E38XA6ONV3M6QAwJM%2FcUMYJhfqcRqPT%2FfAe4p1QLE0DPdGDgBxTZbC1A8M7bC5epkf2CMck4lM3mf%2BR5XFh%2Fc7foOS1TcG52Sk2hMppTVzv10Q269jrXAxm35tj07qBIGbi34YW5rHXn0Qpq6htETnoWxCfs048G5D5hh0P3i3IQaxkJIbkTlyWbaLucl%2B8kJawH0zxnkdqCWcLy2BVdj8zOY9%2BSloobqbH9CzZt0IMkRfstM8Fejj0GrTYUoSqpsIMUBLCMx0LUtGuSyERDbL3UMf3FhecRKMhuU55B%2FbEvx0NXZh%2FP83zHYhF0O%2FlUEWkQMm5UDnbBQUibY6q86SNagMNbF7H9ELpNA3QdkFdtTVa4N8EeSgXPOj8w5LLO0AY6pgEhUzq7SVqIPsIcOFHy0OUjqFPoTxPKvfhnFZoUwxpoZO3l2iZ%2Fnp6ftIVmObqWJOt%2BZYD9rc3rih54r2whYCfVgPFf9IJcNwEjnKI0ZXKZvd%2Bb5RsFvXrXbwnGws0zPyJR%2BPTb4cTW%2FfURLHZMN4fDQswJnB02gqs%2F4i8%2BRZ%2FYRSDdz6XaFWc%2F6lXcHm2%2BRqPI5eKraWBDhOVT3zHCKiNzxEdb5uO8&X-Amz-Signature=fddc15a42fa515a5cb42d50acc576a14132ecdd67eaf9967639805cd5ffc7df0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665X2HMW7%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICweMMrsBY7ksRq3BiM3piKVI0IpISk6szAkVaesx6fJAiEAuTAX2tqX9XAo0HyjFI108Lxq7NCCvJE1wt8OPygyxIoq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIx3X2dSu5xpgK0zNircA%2F4EfzrBJLf6z24g9cIU44QIRYJJlvYFKSz9BQxfD0CPUEo674IyJGHiTh8BJu6E9pZ9%2FoaZOZ8UHexbMNdUUi8hmo2B3fj0%2BDOJQs2Ai5u3gqN3UbZVIUaJTdn8Z86EuPj61GqegNE2zHaHD9%2F%2F91KEZ8oohf9sfPppWcVJOZuUSLK8K9ne28c3x7VR0%2F%2BeA44LxvrskpzG2%2Bsli2D%2F0afykNlKLuZRGJE0%2FAWSKOkflyl6Jdd%2FrqI86Cu6KlyQDPKb5U5UpPWDioUm4opZcBUXO2el0jHqzPPgXLng%2F0oCLeLstiSvNGjZP3w5Y8gF0SUFmuYtKkUPEnVpCvb%2F6ygi9q8MqZeH777bDy0ua7l4nBJfUYM7S1TXTivpxE%2BppP6IHum%2BR80F0KpsHsWnwLYjZPiEx%2FtRad%2FYSmS5mNlUTQqQ%2Br9EPLVzNGM1Gys%2Ffw7LVtfhWJx2%2Bx2keOIKnwPiJ9I6i0BsOYlL6Pnn50yJMFBkvww7WRBrTZGNTDtaYhHo0u38vl5UPv9nhQjGNRqJs%2ByWodpo1FRfRrEIP9AqBxFfXQHVi5%2B8IJ12tHbSFpvYT0FaAHfbl%2BDODMLESIA6gm172S%2FV9VRnLKOxsm3S429Ahq1YIqNGHELfMNK0ztAGOqUB6hWxzY87QSVxtC1qIx9UeTk1Fvlx2JXQ34MNFrFXW4s3H2l5gyUXWNeg5x5Kk3Yc6B2fpnYOefyRjkVrQhF1eLADD2uE32F6ubbO55EkyDwOJps0ToWrbcd9AMQTJZqw3d2OTvUyc9SljJBoR%2BjQnQ1qwIwFhrDpP7l5BeHV3xbi9jQM0Qo8x4Wo4Pn4DBKMCFZhpti5u93gtwCWjIiXdDzUMLEM&X-Amz-Signature=fd919c1028d323c437b5aeb93a4bd6a2e7536ddd4041db54cb35e9caf4e375a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SQHPYEA%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDucQeQHnwFTOneI0Z8OOENa7Xp8GtX7ok%2FEfs77rlzgAiEAsktHlyW14a%2BorR2Qe%2BVF2W4JRpgN88WoKF7YWFf96dQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCaJGmPBmgkr0D0yCircA%2BBsuPoT6fFVy97ts1HayR0yXzzMkii%2FD73aAPS%2Fe%2FEcAdKmGILhxrk4Cu6mkQ9yA%2FAqmfMLSN3hTxOlQ1%2FT5uyCxhloM7iiro%2BkOTWqvngjnvbBtJnFlT60I8Ri3fT8ZGcdxUeXKvgh6kxfuAAQmmf7A7NGa%2BSLkUE3oEPooGg8%2FyZMnMYGUZ%2BTUxx%2FERxfGbyESR4M5iy8ojcQjGtgzzz8Pkp8fuoDugF6APkmpBYopO7at2CPpr488fBEGzPT02ClgWF4UG15cAHbdyoW4Brs%2Ba%2FcBdu0fgGKZCNUGKdLODc2wNhwOW7nhjNtOM7OBrFmnnN7YqaCPVdptxsiyr7oymEVxQrcp89FHEH8LKLR8jzv11Skfj8bgJvOtmKGq43Rztw1IRi%2F58M1UwQPArix%2FwpoILr1fTWNjoGGvdOiMh0xZBUuJAKTiNFQyZrT%2BXESEhD7tqgYPY5aTrp2rsfvH%2FHfuJtw1W%2B2b6axTtj71guoXOTyYszs6rrayxvm%2Bu%2BbJSxwSx2qJ5BWQ09FIXJw0eSV2J78KSf7o30Pz%2BW1FOE5jMZCyBZJ7G8VNk%2FetaLLQiS%2B%2BG4fLG4QLjQXhRbh3ak06VTPnjYLlQbJc8tbQXi5k3swMVsxaG0DMPKzztAGOqUBwP4JwADl6tyqop5Opp7OK%2Bgt0UmH2LgI7knwzHaa7WvJ25KvWzxewStmBrkv%2B%2BRaRjJ70gxLStd2tKBfV%2BzKdPuDlIvLXzWgueFdrRunIPpyl22xghFR98r8z%2B7XrP4joldiWkb3w8GhbaOUSNpRyTEbWWYbqz3DM9SOvXACJUSxj%2FqDtRsdR1MbM4lau3UtwoE%2Fxc8KEkPiu9VCRfI%2B2sWHBBPh&X-Amz-Signature=7934797d9ec802a5da4173eade2ae172b2512ccde63f70d5dd9a3129c0285f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GKL24FZ%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHfoNRcChTwdsServMY9xiTql6fX1dTdBFC0puH7%2F7sVAiBIJS%2Fdhvi5aULwzYX%2Fiwwl8053AHQjTuEv7MCrvG4KcCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMY%2BC20K0uvbtZqfpYKtwD5op1t66Vvuo%2FknTMretY9PBkAGgMGW2VnHhhN3%2Fm%2BOvq5gADc0mc9S7yUHE90KmONPWhKYuDnOTBfioNuO0gjq4SEShtJVX4UwlUJABkBp%2FIJGVA2riOrl8IjGe4xl0WK%2B805f2a31bexkQRD8b7mcB2GGG3ic9VRNuG0NvO8l9Fefrt1Suwcymk1cXaquPN%2Ffqcd1SDwOXOipRLIrTYUgN1PHNser2QPbij5HFEoSKSgXpJ4kU4kFfGmZmDl254E38XA6ONV3M6QAwJM%2FcUMYJhfqcRqPT%2FfAe4p1QLE0DPdGDgBxTZbC1A8M7bC5epkf2CMck4lM3mf%2BR5XFh%2Fc7foOS1TcG52Sk2hMppTVzv10Q269jrXAxm35tj07qBIGbi34YW5rHXn0Qpq6htETnoWxCfs048G5D5hh0P3i3IQaxkJIbkTlyWbaLucl%2B8kJawH0zxnkdqCWcLy2BVdj8zOY9%2BSloobqbH9CzZt0IMkRfstM8Fejj0GrTYUoSqpsIMUBLCMx0LUtGuSyERDbL3UMf3FhecRKMhuU55B%2FbEvx0NXZh%2FP83zHYhF0O%2FlUEWkQMm5UDnbBQUibY6q86SNagMNbF7H9ELpNA3QdkFdtTVa4N8EeSgXPOj8w5LLO0AY6pgEhUzq7SVqIPsIcOFHy0OUjqFPoTxPKvfhnFZoUwxpoZO3l2iZ%2Fnp6ftIVmObqWJOt%2BZYD9rc3rih54r2whYCfVgPFf9IJcNwEjnKI0ZXKZvd%2Bb5RsFvXrXbwnGws0zPyJR%2BPTb4cTW%2FfURLHZMN4fDQswJnB02gqs%2F4i8%2BRZ%2FYRSDdz6XaFWc%2F6lXcHm2%2BRqPI5eKraWBDhOVT3zHCKiNzxEdb5uO8&X-Amz-Signature=78b2725f276b335d59732ed54065fef20e0fa8f17e5722641e37be6bc195f9f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
