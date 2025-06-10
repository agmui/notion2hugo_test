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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOB5FBZN%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpuZYddfSIm2F%2B4vp0jkUYhdBHa5cPW9UkOp5FnUL9rgIhAIerOO5zzLzVRhuq1DEH8e2FvGSwnFeLNw5NOH0es7VeKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn6d%2Flk1iJbsoANsgq3APneSMb0nNtgkdImXSkDG18IC%2BpH8Dr21gv%2FHs9lYzQ7HcD2MMP4OWQdK1dBAEON7%2FZai%2BVfjjQy4YHOZLgYiFzZpigPZql32C4be9FzB9J0rxSeF7TUc6oLNRBMOBEP6on8%2BmTe2PRUSK15d0qtDcFX5HwGMOVTGS7NKJUtoLHRetFvBfGQTGSjmhVGnS1nwjbYRj%2FsrvOpQeW1hy2sC7nIjeG1fhGH%2FGL2F8EDSaUHPq%2F0sEd6HF7DGsS3yXH3ikZilEOOkuHKfHKIpeMVLhEr%2FtW9tW%2BDpka1PM%2Fo7N2soBgn02hbPXKEOUwl2ht0LXQiDvVGq5ZTGC8MbMCpf%2Ber9TuRCaym6wByc%2FJB6TMZgqEAJcAkHCZ5cmr1gFGxQlWW4OCxvwRIeeDSI5XeIY2ZWfyCCPKwrnGB855lL5ogglBFQY%2B1%2BIp3Qe8fCB3298YQ2lVXvrpfskchYX7nwy3qLgFtL4zAV0b92LRISQWrqBicT%2BHI672ZgOOP2foi8Y9zrp%2FQsEfdsbDnmP%2B91SB3DTx02HIwQZsRHshwR2Ju4gBMgPQPeEBmRQQX%2BG0fzjLk9itkNhljxzolZwonwS8ivtFWWr4tadInHNHKLEC57%2F20jeCqJcpeqO2ODCVz6HCBjqkARJa%2BA0vaMqn4yK6uApCrGD94GR3BiS2z%2FxiTl5uig6nifr2%2BRWTLtE%2FL8CmuH2cT7u9yWAE8VLAVqUyD5AKE48pHlFXxRJJYg%2Feu%2BAhNJSw%2Fa3kQDJQL1wtgFPEn%2FkxbMMTUslFTFZgAdLTsT2lnV5UJ34g5dmCYedj8cbCFAF1YcuSKODR7H0rl9FNhDYDmsbrwlSu1OufjqVyHt2xsT%2F6h5cw&X-Amz-Signature=65aa4de664d5fe02341c29dff80c52ca0cac6e8ad4b38aa141d64a8e055385ac&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOB5FBZN%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpuZYddfSIm2F%2B4vp0jkUYhdBHa5cPW9UkOp5FnUL9rgIhAIerOO5zzLzVRhuq1DEH8e2FvGSwnFeLNw5NOH0es7VeKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn6d%2Flk1iJbsoANsgq3APneSMb0nNtgkdImXSkDG18IC%2BpH8Dr21gv%2FHs9lYzQ7HcD2MMP4OWQdK1dBAEON7%2FZai%2BVfjjQy4YHOZLgYiFzZpigPZql32C4be9FzB9J0rxSeF7TUc6oLNRBMOBEP6on8%2BmTe2PRUSK15d0qtDcFX5HwGMOVTGS7NKJUtoLHRetFvBfGQTGSjmhVGnS1nwjbYRj%2FsrvOpQeW1hy2sC7nIjeG1fhGH%2FGL2F8EDSaUHPq%2F0sEd6HF7DGsS3yXH3ikZilEOOkuHKfHKIpeMVLhEr%2FtW9tW%2BDpka1PM%2Fo7N2soBgn02hbPXKEOUwl2ht0LXQiDvVGq5ZTGC8MbMCpf%2Ber9TuRCaym6wByc%2FJB6TMZgqEAJcAkHCZ5cmr1gFGxQlWW4OCxvwRIeeDSI5XeIY2ZWfyCCPKwrnGB855lL5ogglBFQY%2B1%2BIp3Qe8fCB3298YQ2lVXvrpfskchYX7nwy3qLgFtL4zAV0b92LRISQWrqBicT%2BHI672ZgOOP2foi8Y9zrp%2FQsEfdsbDnmP%2B91SB3DTx02HIwQZsRHshwR2Ju4gBMgPQPeEBmRQQX%2BG0fzjLk9itkNhljxzolZwonwS8ivtFWWr4tadInHNHKLEC57%2F20jeCqJcpeqO2ODCVz6HCBjqkARJa%2BA0vaMqn4yK6uApCrGD94GR3BiS2z%2FxiTl5uig6nifr2%2BRWTLtE%2FL8CmuH2cT7u9yWAE8VLAVqUyD5AKE48pHlFXxRJJYg%2Feu%2BAhNJSw%2Fa3kQDJQL1wtgFPEn%2FkxbMMTUslFTFZgAdLTsT2lnV5UJ34g5dmCYedj8cbCFAF1YcuSKODR7H0rl9FNhDYDmsbrwlSu1OufjqVyHt2xsT%2F6h5cw&X-Amz-Signature=e862fb6e72461132820dcb797634efda9694bcad863ef1766f98e06932aa96db&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOB5FBZN%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpuZYddfSIm2F%2B4vp0jkUYhdBHa5cPW9UkOp5FnUL9rgIhAIerOO5zzLzVRhuq1DEH8e2FvGSwnFeLNw5NOH0es7VeKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn6d%2Flk1iJbsoANsgq3APneSMb0nNtgkdImXSkDG18IC%2BpH8Dr21gv%2FHs9lYzQ7HcD2MMP4OWQdK1dBAEON7%2FZai%2BVfjjQy4YHOZLgYiFzZpigPZql32C4be9FzB9J0rxSeF7TUc6oLNRBMOBEP6on8%2BmTe2PRUSK15d0qtDcFX5HwGMOVTGS7NKJUtoLHRetFvBfGQTGSjmhVGnS1nwjbYRj%2FsrvOpQeW1hy2sC7nIjeG1fhGH%2FGL2F8EDSaUHPq%2F0sEd6HF7DGsS3yXH3ikZilEOOkuHKfHKIpeMVLhEr%2FtW9tW%2BDpka1PM%2Fo7N2soBgn02hbPXKEOUwl2ht0LXQiDvVGq5ZTGC8MbMCpf%2Ber9TuRCaym6wByc%2FJB6TMZgqEAJcAkHCZ5cmr1gFGxQlWW4OCxvwRIeeDSI5XeIY2ZWfyCCPKwrnGB855lL5ogglBFQY%2B1%2BIp3Qe8fCB3298YQ2lVXvrpfskchYX7nwy3qLgFtL4zAV0b92LRISQWrqBicT%2BHI672ZgOOP2foi8Y9zrp%2FQsEfdsbDnmP%2B91SB3DTx02HIwQZsRHshwR2Ju4gBMgPQPeEBmRQQX%2BG0fzjLk9itkNhljxzolZwonwS8ivtFWWr4tadInHNHKLEC57%2F20jeCqJcpeqO2ODCVz6HCBjqkARJa%2BA0vaMqn4yK6uApCrGD94GR3BiS2z%2FxiTl5uig6nifr2%2BRWTLtE%2FL8CmuH2cT7u9yWAE8VLAVqUyD5AKE48pHlFXxRJJYg%2Feu%2BAhNJSw%2Fa3kQDJQL1wtgFPEn%2FkxbMMTUslFTFZgAdLTsT2lnV5UJ34g5dmCYedj8cbCFAF1YcuSKODR7H0rl9FNhDYDmsbrwlSu1OufjqVyHt2xsT%2F6h5cw&X-Amz-Signature=e47957e9caab1a02dd3a113a171efbf86402f33442ca289bb4686015f90799ec&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XYPL3SS%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSFMKLmsWBW2jRAfgiecoH1jBH4r%2BcNVQ0hB%2BmjeZu7gIgKZjJHNND7StFzJLM%2FC73te84IWJJ7RTV1xsFSOdM%2FlsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCY05e%2BpTdwtdVqjBSrcA2aWUi4EkS9KcHuwL7dl9S%2BO9IoUekyXEAWvV%2Fu4IVgkjD9NSx2lBIqbA5%2B27U9bECcPckZ2rRwWEI0Y%2BHgUby4%2FzED8rnBygM9vnUb6LyryN8LpHx714HDFbH%2FE%2BmYIo0aIv7mgsR282DBfdtphuqGnqg2y3kdOTyschNyb5tvxPQ7e5fnqdgCbVeNWz0nDy2k2iOr6ZgyEPRcfikxomhYCRzRRqwNX%2Fa9owaR2PpnaAQj5m9c16OYXD1DD59Xr7XYFGnuDZBNYutmTLXg2C5NCTPtDYIZf2v1xevPUfv2z6NZ3YXnTxo03%2BSZUMeGjZDBeqRwMsxF0XN374lE5LrA0SK0TA2S8UzfgD5JzWbFMfjNzQe1D%2BxIvSV9zB2WyGs%2F7YzOZwtvKfYgtVSUVoyqu3yjWJu0Y2362OzaXuFiAsNBugUtITsfJ2hbTL7Ai8%2FDmcayjTKOqNX3n5yxx9swd1hLoHKJxrnh4A%2BAhhOFhKLk3bprbdLyL1XHDbjofLRJ5tPVfJJW5Rbx%2F2uczjStWpXP65730XhZT6MOxWNVS71qe5QhO7QDtOdWVetsPBWd%2FCMTngBQh5cs0kLQ5Hm%2BSUWwvYOXealGzhAhzSds4uj9WDbOnL6Na0mJDMJXLocIGOqUBBuZnXpp%2B7Mzjlnk2oZWQjDJRPnWhMcMVhQ9Jw9sg7R391vzeVHq6EEaKYDGpptHs64jU1PZnyUnTIrmaDm2Pmf4brs1klHGvBZnLKA%2FX3Bpf80qoAyyf%2BRy7NQsd4uNTOCs8RBCY8fVzuFw%2Fj5th3q7bg3juNK29VFVajNTj3TwdRcsRjm5gElMXYHiJkfEuQbEx3DHp%2BGIQf0%2F5r1%2FI4Ewcm9gv&X-Amz-Signature=bd28807e27be50e2d052b14c828545884e36d1b6c793bb835493ca65d7d36a9d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TMLZH4B%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7sZfkxIxheZVDXRZrSjoh%2FN7ftEh%2BTiToQKNcUilIwAiEAn%2BwxO8gXYHLD1rXBQF43sVOs7iXjQrkFzsvI4UnWQRIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZYYg3d7rZbHHSpvCrcA6hQwtKySjIFm4cqA1V%2FTkRcOdaV%2FOwpGAQcHgfGoklJjIkJAmX94%2BvT3YG5BS%2Bx0YVErO3pf8iuYtwCmgiwUQO1R1WJaT2jpYwDthWO5g4Ar9BmTzJ0P20zVbkErbaR%2FlBGO1TQuWOWbB1ZVqdGej0IRTu4qMoKFo4Eg%2F%2FwejKjrBPHre0odzNqUqc9FGo0Jae%2F%2FH4Xvi7pfN1izMxPCe1cNlssEq18WMtJ7OHHYJRRZCo5zY9bv9q9MI1fvt7z0xhMLhE0rWKUAqFH24emkophy3q%2FmLblL0pRzgHYJTnOW1raTbO%2FnzYlNp5eWwJldRM8xujE5yXfjOX23zKO6BnQkIpJ5M8nt8OcRwvGNUH6lbUIn%2FzSaAUKMrWeZgg1207abWJYDAQBpcsismvULS2dmUa7TTcCQ9dRfbsSprbyMtYmPAvs3HGOzqgRNT6Zybm05vxnc96yUeqRMV%2B9Szi6V7h7jJ2lefbbWxb4IMYjWW2P4xvJOAKz79YvgUlVtrWzdiGsf7OPVG9RuFyOA%2BsNbq1pzoC71CnFiS%2FtLIZxZwMKMx1Hi3oAp5nZZsfriuDjKG%2B2MLEdJ0LSA6Px7J4X%2BGhjPC38Cnenw1Zapi4xO%2BkUZn0YuTvVl6EMMOnLocIGOqUBFLjlSFW0230UsqNxmHruLah5OJ9xQu6MWinYkghgj%2Fz7i4yjfb%2FmcoSKbwbC6j0TH2b4G3rzv72g05ce0HfCB79PQn56RqPJINJ5R10uG2FoHKIGnZSkJ1Z7ZMd%2BNBF%2BUXpjiYOKduvpazcs%2FtGl27rNeIMdgEwMcqS6xPZuNlmbM2%2BnpljXiTqzHox9RmvgvgFOzxqfRiA3%2BdKy3KVb68cwuK9z&X-Amz-Signature=4050ecd24011d6990ac065cec96d4560b9e4fac34a811344a579e7fb2f0f091e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOB5FBZN%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpuZYddfSIm2F%2B4vp0jkUYhdBHa5cPW9UkOp5FnUL9rgIhAIerOO5zzLzVRhuq1DEH8e2FvGSwnFeLNw5NOH0es7VeKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn6d%2Flk1iJbsoANsgq3APneSMb0nNtgkdImXSkDG18IC%2BpH8Dr21gv%2FHs9lYzQ7HcD2MMP4OWQdK1dBAEON7%2FZai%2BVfjjQy4YHOZLgYiFzZpigPZql32C4be9FzB9J0rxSeF7TUc6oLNRBMOBEP6on8%2BmTe2PRUSK15d0qtDcFX5HwGMOVTGS7NKJUtoLHRetFvBfGQTGSjmhVGnS1nwjbYRj%2FsrvOpQeW1hy2sC7nIjeG1fhGH%2FGL2F8EDSaUHPq%2F0sEd6HF7DGsS3yXH3ikZilEOOkuHKfHKIpeMVLhEr%2FtW9tW%2BDpka1PM%2Fo7N2soBgn02hbPXKEOUwl2ht0LXQiDvVGq5ZTGC8MbMCpf%2Ber9TuRCaym6wByc%2FJB6TMZgqEAJcAkHCZ5cmr1gFGxQlWW4OCxvwRIeeDSI5XeIY2ZWfyCCPKwrnGB855lL5ogglBFQY%2B1%2BIp3Qe8fCB3298YQ2lVXvrpfskchYX7nwy3qLgFtL4zAV0b92LRISQWrqBicT%2BHI672ZgOOP2foi8Y9zrp%2FQsEfdsbDnmP%2B91SB3DTx02HIwQZsRHshwR2Ju4gBMgPQPeEBmRQQX%2BG0fzjLk9itkNhljxzolZwonwS8ivtFWWr4tadInHNHKLEC57%2F20jeCqJcpeqO2ODCVz6HCBjqkARJa%2BA0vaMqn4yK6uApCrGD94GR3BiS2z%2FxiTl5uig6nifr2%2BRWTLtE%2FL8CmuH2cT7u9yWAE8VLAVqUyD5AKE48pHlFXxRJJYg%2Feu%2BAhNJSw%2Fa3kQDJQL1wtgFPEn%2FkxbMMTUslFTFZgAdLTsT2lnV5UJ34g5dmCYedj8cbCFAF1YcuSKODR7H0rl9FNhDYDmsbrwlSu1OufjqVyHt2xsT%2F6h5cw&X-Amz-Signature=240616f454a4494892bb10551ea7ae9e646df744ed7bbb4cd3c6463cf69928a3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
