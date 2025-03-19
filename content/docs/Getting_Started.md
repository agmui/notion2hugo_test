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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X3DCTHK%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDwciuzj%2FvbdtTtykD5%2BA0gOQ9bopIUfzyc9Ry0GRODjwIhAOec%2BMpia%2FzdeAIC4aDaUsHHj5q38ixehpe1Rbd2KkjRKv8DCHgQABoMNjM3NDIzMTgzODA1IgyijzvYFZsv0HfTEzkq3ANnU%2B0gWOF4qNUsN82sAuN7AW8VvTNh%2BXi2fM5EG6gZerPgVasKXuDAJuwg9vBLB2BcZE9Fn8lK7AVkVO6EDAZ4wC8jOiQLATFDhHIcSE479mxNTbbf6%2FTSKLBhhj7zqu99RoKDUyclX5%2FTrAHJvweK%2Fh6JjQFLtgVqA5byUeF1PIQFyHZdgvCnbwZQt27B7qfOdUsTdIeWbhDatlhJclmUgmv8AIty02fhD%2FGBkz7mawfYAPtuUsjTbKkndpYTDW4D3vgqPzBHfOmFrcDtSmWc0V1XmpA6j5Pb4f1T7%2F8hJm%2FmK7VAhfMm4RjQwnpt5SQ7uIuUzLRwExPN%2BGDMX3cxiDdBTatLXNMnrSq1wzHd95omLv3ohFTEbwaxxsp4oWhKSqGKahxK5DOB5GC3gDFpV2vamsaLIdFQG8INPNfjjn%2BDyh%2Bz%2FVbh7JTxbz9%2BJ%2Fa8RI4HH7mfq1Yx6xEfuRZbDcPDghY9DJIi3Xx63PmKrFnKqAEt0JCcQmFn4sWwD8FJVxCR7OGrgafAldgcbP4Lt89eP1L%2BoSJ92aDDWIYymCa8GGVba6MVU9T2Onh9wnJLgNmpIPCrIYEho26JRfhI%2FL25BQIVOV0qLV77KOiieV%2F9eMSu8GUaImOx2zCeveu%2BBjqkAcBYLw5cWQ9FJra51sMlXHSn6AF17xi6DnePmFijFdnmmjMAqMlmitOgYd5Svx3t72wz%2FDimu9L9RMmsPkO8agjjorW8yA3V4lWvqtOYeEYwyIwShr8VLIYcFtCwX6MohGDRJHQIcqOMULgU66SU7Xy9hzGeH%2FH6Lax0RnzPF2zBQKZpifCUAf2%2Frez7qpcnRbjqywefQnWQsAk842yucjbEJYl1&X-Amz-Signature=3cc0caed36525fc691fc0c43977f07de085ab4de3fbef764648da6d38301c937&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X3DCTHK%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDwciuzj%2FvbdtTtykD5%2BA0gOQ9bopIUfzyc9Ry0GRODjwIhAOec%2BMpia%2FzdeAIC4aDaUsHHj5q38ixehpe1Rbd2KkjRKv8DCHgQABoMNjM3NDIzMTgzODA1IgyijzvYFZsv0HfTEzkq3ANnU%2B0gWOF4qNUsN82sAuN7AW8VvTNh%2BXi2fM5EG6gZerPgVasKXuDAJuwg9vBLB2BcZE9Fn8lK7AVkVO6EDAZ4wC8jOiQLATFDhHIcSE479mxNTbbf6%2FTSKLBhhj7zqu99RoKDUyclX5%2FTrAHJvweK%2Fh6JjQFLtgVqA5byUeF1PIQFyHZdgvCnbwZQt27B7qfOdUsTdIeWbhDatlhJclmUgmv8AIty02fhD%2FGBkz7mawfYAPtuUsjTbKkndpYTDW4D3vgqPzBHfOmFrcDtSmWc0V1XmpA6j5Pb4f1T7%2F8hJm%2FmK7VAhfMm4RjQwnpt5SQ7uIuUzLRwExPN%2BGDMX3cxiDdBTatLXNMnrSq1wzHd95omLv3ohFTEbwaxxsp4oWhKSqGKahxK5DOB5GC3gDFpV2vamsaLIdFQG8INPNfjjn%2BDyh%2Bz%2FVbh7JTxbz9%2BJ%2Fa8RI4HH7mfq1Yx6xEfuRZbDcPDghY9DJIi3Xx63PmKrFnKqAEt0JCcQmFn4sWwD8FJVxCR7OGrgafAldgcbP4Lt89eP1L%2BoSJ92aDDWIYymCa8GGVba6MVU9T2Onh9wnJLgNmpIPCrIYEho26JRfhI%2FL25BQIVOV0qLV77KOiieV%2F9eMSu8GUaImOx2zCeveu%2BBjqkAcBYLw5cWQ9FJra51sMlXHSn6AF17xi6DnePmFijFdnmmjMAqMlmitOgYd5Svx3t72wz%2FDimu9L9RMmsPkO8agjjorW8yA3V4lWvqtOYeEYwyIwShr8VLIYcFtCwX6MohGDRJHQIcqOMULgU66SU7Xy9hzGeH%2FH6Lax0RnzPF2zBQKZpifCUAf2%2Frez7qpcnRbjqywefQnWQsAk842yucjbEJYl1&X-Amz-Signature=da7234307f5aae66759e0a862c443654af814efe9e5f1077c034924c339e40ae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OHF4W5U%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDy5ZAxD7HJwiU%2F8ubeZe5cqqAdQlyIwpulx3ziZ5VQZQIhAJvwuf8LOX5xi1kQHJgT3BsfMInXB6xb94v1SNjN5IuyKv8DCHgQABoMNjM3NDIzMTgzODA1IgwGc1%2Bs3mKwgnnA3U4q3APYbdGSpjrJtkvP1emjWxC2CPOq5wAT7I3WG27Ytud%2F2UvRpuLiBQnXv9FNQ879773dKTHW5hJSrEN751bbEpaxrcsC6VcGidy8srPxVwNZiwwmmsb1u1I8eXzixjb0%2Fzzvms8E610I%2FhGHUV3v4nxqABSTYtkIicogUmvtNIVSvfhME9lI6ZDXO6h1Qr9ooiaDk%2BQnBHW9zbXzoUGX0DQLl5mOp12MHv4TM4R%2F8OpTdCJkb1aa23fVnUlP7P81QxXoUuQOZo8RypQcAKxggKKeL%2BSpuur3AOuQlcBEvVuBMjpTmx4E5Njb2TE6Rd%2BhCt9vzgOSJ8IaA5QR6RTWKWwjKJzoqv7Cf9kRzaa3Ncp5LC106T4sXgO0wSrNIlMyy%2F%2B9as6eHAap5aAEB3lNXY13bRkfSeZCGiV1UjrjwqomRnQ05XWXNGty%2FC2wFg41XxiYYYDpH9oUCQMNRKuaZ%2FnUhAvIumRv1llkBJjyRakv74pSRTbnJsprFL%2FAfYt1D3B8VSzSuH6wauQuNTts8anNUsmnQrxoiKIAK8oocdnTNb%2BMUH4O9PrlTMa%2FTKUblVd%2FKqYc%2F%2BzU769KUyiyEiJmkFxOst0qfT%2FJ%2BUh0pPZf2H%2BF%2BB7ONKI8v%2Bk7iTD%2Bu%2Bu%2BBjqkAYospw5MQN0PLzno4SWacddbiHpMWcZqw6GSDZLLcv0k6uemBKvpK9ykvcaW5jHoiZMaXk0ZYyeXRF4ZF%2Fuz1grtzxenB0xj3wYJCyZkJCXGyvVjYPdWWZZOuJ8nvjLyzRsKZ6aRAus%2B6AuAMS%2FC7JBb%2F7%2FP3pMqPvjagllJ4lbtzR6Yxg6dGhWqKrlsmTo6q8KISDs%2FnQ8ZBngrWy7elyfszzf%2F&X-Amz-Signature=f6cf7cdd5cb11afa1784886708b2cbcb41aec82ff1121d4ad685096805e3c4be&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NATXOK5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDG%2FjFMt%2BuiI5ic8hhlcUkAvJ5v125mc56mtVmh%2Bred%2FAIgezq9kc47%2B667D6FsVEjyuoMpePixSUZDEG2uVxP%2B%2FNoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKCyYsCM2Lw3dzUKBircAxLaDIxiNP6kYs3NXJMxWHSvgEM%2FE94VXLCcdUuixgUovlWDN3Lp2hoCzMtR%2FHGnY1C3re%2B5ulYmgtV0TpsceMwPgKunECzlFl3SySzasjtavOqlhyGP1rgynCnI2ApwZFb0AJcha9NfaGOGSDMxQTpXORp7ZbN09D0T%2BSRIMMzoihUatH3Tk0YWC%2Fwk9Jh05A1kIf7Nt%2Fue4oLnXCdYcwS1SI%2FMl8TNRAJmDc4aXdUF%2B065I%2BeE7NxHhYK1%2FerwizFgk6TU9VgG%2Fu5xbcFhwWpNUdMdMCQsvp1b%2BsHeD9YZ2IlQWGyj%2FSXagVVDzR696X%2BPu4PxD53g6cu1%2FbJDPr3lE8x8nX4OUm8m0xNT3E5zkAlsd9y%2FiiTeECdEHDg6selRaKvY%2BpZkItYsiBbHTV9VTH5XG2EkgXvdenjsp2%2FSU8v%2FPlDFrSqDrzH94z1eW3Wam82Fix29a68%2BSEwMM4L6rSgcDSLG9fqh%2BK1QJvMUge2nVAY0X3t2kbV6KSqP7f0GXy0vVZpsJ3NIvOK3Ilym9gjkmjirCdENaKJpmck%2FAfpMK2OLjVRn2JsFCtsPYSUsxfyEbRJKS2WkPw7URu0c095C9DeeBD9bH8lI0ktdbgeuNvrwYEc9hYZfMJ69674GOqUBS7iR3FtkONNUIFFZxjto8F%2B8HtDjyE5CN8eIQicIH8xEfgPx%2BlBdQV070kuZQq9VauO7fNVW4Wkdt%2BdlTUCsD6zpYXlbiwtyvldeeakmCC5oONJaNkFXVCiNJR62VlbmV3Vts9erhRcXF5WD%2FF%2B6XRYAO2K2ufNTP3zYicPm2kMD45elJPRclXBI7%2FOxTtVJZapgMZhtOuedSEAt8LhLqRShtlKA&X-Amz-Signature=479d9c599ba2be8d8d5745f3a15dff397c2d655c317de6069e6adb7c146b01ae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X3DCTHK%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDwciuzj%2FvbdtTtykD5%2BA0gOQ9bopIUfzyc9Ry0GRODjwIhAOec%2BMpia%2FzdeAIC4aDaUsHHj5q38ixehpe1Rbd2KkjRKv8DCHgQABoMNjM3NDIzMTgzODA1IgyijzvYFZsv0HfTEzkq3ANnU%2B0gWOF4qNUsN82sAuN7AW8VvTNh%2BXi2fM5EG6gZerPgVasKXuDAJuwg9vBLB2BcZE9Fn8lK7AVkVO6EDAZ4wC8jOiQLATFDhHIcSE479mxNTbbf6%2FTSKLBhhj7zqu99RoKDUyclX5%2FTrAHJvweK%2Fh6JjQFLtgVqA5byUeF1PIQFyHZdgvCnbwZQt27B7qfOdUsTdIeWbhDatlhJclmUgmv8AIty02fhD%2FGBkz7mawfYAPtuUsjTbKkndpYTDW4D3vgqPzBHfOmFrcDtSmWc0V1XmpA6j5Pb4f1T7%2F8hJm%2FmK7VAhfMm4RjQwnpt5SQ7uIuUzLRwExPN%2BGDMX3cxiDdBTatLXNMnrSq1wzHd95omLv3ohFTEbwaxxsp4oWhKSqGKahxK5DOB5GC3gDFpV2vamsaLIdFQG8INPNfjjn%2BDyh%2Bz%2FVbh7JTxbz9%2BJ%2Fa8RI4HH7mfq1Yx6xEfuRZbDcPDghY9DJIi3Xx63PmKrFnKqAEt0JCcQmFn4sWwD8FJVxCR7OGrgafAldgcbP4Lt89eP1L%2BoSJ92aDDWIYymCa8GGVba6MVU9T2Onh9wnJLgNmpIPCrIYEho26JRfhI%2FL25BQIVOV0qLV77KOiieV%2F9eMSu8GUaImOx2zCeveu%2BBjqkAcBYLw5cWQ9FJra51sMlXHSn6AF17xi6DnePmFijFdnmmjMAqMlmitOgYd5Svx3t72wz%2FDimu9L9RMmsPkO8agjjorW8yA3V4lWvqtOYeEYwyIwShr8VLIYcFtCwX6MohGDRJHQIcqOMULgU66SU7Xy9hzGeH%2FH6Lax0RnzPF2zBQKZpifCUAf2%2Frez7qpcnRbjqywefQnWQsAk842yucjbEJYl1&X-Amz-Signature=71df8b81d7050636d09e949b2a0f915d1f33877a53f7b2b26d0c845408907a13&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
