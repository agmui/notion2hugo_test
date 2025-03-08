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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E43WAP6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFIy3UcYq0%2BCfSod5Hf3AuKyIddGCs10EwSBMei0O4XPAiEA%2Bm0FJvXhyqCwF6hBkbrgiGVC1mwnk9WeIUa6bVuhUAkq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDByVrAU3EDFy3nc%2BMyrcA%2FTGtQWZwJ7D4G8I3zGDIvvmNW2xkV%2FkR%2F8LJw9Ri6vSbCDqkafSozWAek%2FVbrSFx7TVevYIkJW2Lbnn3a9Pl9ymMbt8NIF0unSU4lvRyA4CLF6OU6DKnib%2FNjJbesJee8GMNGMTjJduCglFnnvvdXlsw2z3b2GaxQ1xLEAoz%2Bsnyr4utWPCbzRiTgMsFtomffCwqItUoOOpJwsrj3H0O0WdkQnalWGzqGsdhgmDjPDNUQTtuJbhmYXAOpNaPD2mYLZHwA01CGT4sHQ%2F3yfBDpr%2BRWgwQm9Y29qDODO6hbqqG4oFIT%2F%2FavOvyz5nWsXj2HxSfTCkO%2B9GnWL54BRJ2xxm%2FPq6kpJowlAQKgO%2FMe5JZTCTPVaeimTVJTjMsRbrNW9FGFSvE3oufKamgSIP2ZeY9FmlRFfJfXuowwBsDPEbte%2BwRjXleBbPWNnxuWYg8BvuUaIqv2ynnlzrlqlYjMI7xcNTs7tYKMCz07ZXSDblZBCNL8mTz0MrGGXMJh8ZaXex1cpsXtwOz%2BQevAbnH7Q8U1p3AV9Q5aT8wEZw54bCOyZ%2BqbLqTk2MF17mQOiqUhFvqwZ%2B8Sk%2FEwMzmyKgl2fmL9fd0NVRFswN5aVgvcf5k%2BI%2B8QleP8m9mYL%2FMMGCsr4GOqUBCAGc38QfBGFZ1zdZ28FIHgdTHYpmHJvLdoNpd1YwuCBvwzGJ%2F%2FaXNngiq9BmDxEUqPr8fyAFFKdQ6CjIeR746c%2Fg4rP2OQoL%2BqtMGAuRe%2B3j0GxqLgUUPV6hB%2F3P%2FSNUtPwm%2BKZ01%2F%2BlipDdYfd9mg5jRhgBbDOoDfU74okg6nI0N7relATprH%2FCV7KTK7TyDMDqiGRv%2BJloGnjslppjzay%2B8GFw&X-Amz-Signature=e8da22e46ab8c3a0fef92716e778c69fa8c48c44759274e472c4a2e65aca8190&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E43WAP6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFIy3UcYq0%2BCfSod5Hf3AuKyIddGCs10EwSBMei0O4XPAiEA%2Bm0FJvXhyqCwF6hBkbrgiGVC1mwnk9WeIUa6bVuhUAkq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDByVrAU3EDFy3nc%2BMyrcA%2FTGtQWZwJ7D4G8I3zGDIvvmNW2xkV%2FkR%2F8LJw9Ri6vSbCDqkafSozWAek%2FVbrSFx7TVevYIkJW2Lbnn3a9Pl9ymMbt8NIF0unSU4lvRyA4CLF6OU6DKnib%2FNjJbesJee8GMNGMTjJduCglFnnvvdXlsw2z3b2GaxQ1xLEAoz%2Bsnyr4utWPCbzRiTgMsFtomffCwqItUoOOpJwsrj3H0O0WdkQnalWGzqGsdhgmDjPDNUQTtuJbhmYXAOpNaPD2mYLZHwA01CGT4sHQ%2F3yfBDpr%2BRWgwQm9Y29qDODO6hbqqG4oFIT%2F%2FavOvyz5nWsXj2HxSfTCkO%2B9GnWL54BRJ2xxm%2FPq6kpJowlAQKgO%2FMe5JZTCTPVaeimTVJTjMsRbrNW9FGFSvE3oufKamgSIP2ZeY9FmlRFfJfXuowwBsDPEbte%2BwRjXleBbPWNnxuWYg8BvuUaIqv2ynnlzrlqlYjMI7xcNTs7tYKMCz07ZXSDblZBCNL8mTz0MrGGXMJh8ZaXex1cpsXtwOz%2BQevAbnH7Q8U1p3AV9Q5aT8wEZw54bCOyZ%2BqbLqTk2MF17mQOiqUhFvqwZ%2B8Sk%2FEwMzmyKgl2fmL9fd0NVRFswN5aVgvcf5k%2BI%2B8QleP8m9mYL%2FMMGCsr4GOqUBCAGc38QfBGFZ1zdZ28FIHgdTHYpmHJvLdoNpd1YwuCBvwzGJ%2F%2FaXNngiq9BmDxEUqPr8fyAFFKdQ6CjIeR746c%2Fg4rP2OQoL%2BqtMGAuRe%2B3j0GxqLgUUPV6hB%2F3P%2FSNUtPwm%2BKZ01%2F%2BlipDdYfd9mg5jRhgBbDOoDfU74okg6nI0N7relATprH%2FCV7KTK7TyDMDqiGRv%2BJloGnjslppjzay%2B8GFw&X-Amz-Signature=9e29b349e4d5aa20c68e6158fc90b6a68366617672573fcbc9680d4673719339&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOQXXGUJ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIA7Q48riy3poDnuluNbeAV%2FExDOn0lB9xp6vb8rC6IOIAiEAnTQ5ICj%2FgXDCBBOHQCEEF%2BSRn38U0%2FdIGzfYTt%2BxTgIq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCZjdClFQGPqNqV6YSrcA6j2kpDOnYLa%2Fcwxh4Z7wzjM7xN8TeRT%2FeAtND5w1WNEAzZZ%2F6vYluI3EKRB5L9ffdPFbihrVp%2BBHnmLNff10nxjWZtKd8MDqjZhqKcyZjVZ%2Bt%2Bb4aRl%2F2I51ZPz6AbjHf3LzPN1rnzZqK1j3Ia%2BsMbH7tToUXOy1ugwdRxA2OfvnnUEmf9BE0i1WLzAdyMq8vrxH3r7gb8w7zbFRFTCAAubwuZhNt0mfZafuW%2BIFGCn6DJJEGxqbxPCZuDoalI1pE3H9AJahA6lan5bcirOqjrNZc5z99JUyU8tFzLLEVlTp5GH5zt5qRz2rb6PagfKxgVvrJeLkViEZ9Ir3fQKcOuSJJXhcfnLrQbsl1j9Zow1bDCwTowZhgSJk7B5%2Bvi6OTRFjx0fupjvprJb%2FObh3jZJjVgNN%2BUi5eqo2%2BqYZl%2BNZcotGZeruYEzTPPdxu8EK3gjNbMsDgL0XoXqA2KFgbF%2FGJSFzlqwF9w01WzKMG8DNJpRoNcyFzk6x9yrfoJvY8KDLewwMomZhGfHzgwJTJ2HrIMdeVmijwaAn7NN%2FjkHdg9ADYcCPB9ungzoLh0y1i2yuguq7bWgVF9YzDtDUVDbgxEnDdFkYWmSIfQWvRJyLcc8qCXtqbZUgG9oMOiCsr4GOqUBCbBcKud7RSRJujaQQNZYPNrT4FOQysyUZI8YH2i4f%2BHlgAJzCTOnLJ797OLxKVwjeaRSdvoXoULivdh4IeHbooas4EpqjRumHMi%2F8clYHvz2cSnIi51ZIXjoMs9yt07kcrUjXK0AOfPo9KORvllD%2BXYeewIs4lK2%2F58jYNgLxzceedRxrVT4ou5Nc9xTZp1CQCDrzq5OWXC6HWn5YK3pw1JpGWHT&X-Amz-Signature=d260071cbcc1d56508cdca4133897b8670889aa66be46ca2af98632d7676ec06&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX3BF5DY%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDzLZjBEJhiJNTSYCO3IAqc1RO23muJCXOLKRant2x20QIhAJACPBEyAnkanmvMow0CDFD%2Bjuxrd6825jJ44ab2RqLyKv8DCGMQABoMNjM3NDIzMTgzODA1IgwWZeWGptPaOKLYJqUq3AMDdDKvzDNpXWZRA7373sCpqrp9zX2lShTuSWa8IH9YiBto0Q%2F%2Bnl9WfNGkaUleMHowsFqorfJaA%2FJBKkDKTeJOKdavyd0laN%2FDCUjpNH0oaqjKSw%2FXONHiI0oQhcqG%2FRW7xWoHg3dkcMH2loJJhbLRomHy%2BxiftzLh4cKYB%2B%2BfN0ypEfAZ4IAHHAqRIk4ZShqzEwOt0DOU%2FlyUTk89m9y9KMoDtYktoDBmiomaXYzQn7f3mWP1%2FGmZCjm7CBM6M32vKffuByLwi41FqtENXFAVH3dlHsWX5AH%2B%2FEFeYajAIrmMuQFvlf621dpU4MgQ5EETKbx5EletG2blFs1t9BYXSlMkBn%2FevwsD233tpoMbUw%2FU2BjyA0MoKrpZmSO8UuZHT17hLF8SNRaehO5V9kqf3TsNBPO6tDIwmjwpcV6mGI1SM6hx1wWgTx%2BsdhXRcybpEyq%2BBcLTKrlUeo63vQrqZ92ViV4J7vmLNh9PZeo4%2B1hs%2BymSywcketATET%2F67sKrYAYHidMKiONwuJC2jFYdtJ2HJRQKrDDUlu%2BsWTc8nyChOoUzaaWn0nhF7yZkqmynS3VyFfXyxVO6%2FXow0z4PLYzmoWxHkamN5JGqcNEXMtyNSm7K%2BruLELO0uDDCg7K%2BBjqkAbRzM1KOWeQzM3CjmVHuk4sYTU3x2oiVgVZvYnefwt2XRBV2HNtB6RbAAeIUhPduOCvyH6%2FdBShC80BDGNuST8%2BggDDyMkjLo9OnidM3h0U3XBrfPC0it72uPLuhkd3oXFnXBwgwgKaQ2SPd9Xy9NEUA4b2DeRyn92WawN3WfFKobK2izSVKxC6Du2WbTOuOxBwW1hw%2BglO8u7F1rlobiiRKYqZW&X-Amz-Signature=b46098a13fecce3052c39ca2329d42b0bc4feaeeb7cd4cf28c4fee0b5750b2f9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E43WAP6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFIy3UcYq0%2BCfSod5Hf3AuKyIddGCs10EwSBMei0O4XPAiEA%2Bm0FJvXhyqCwF6hBkbrgiGVC1mwnk9WeIUa6bVuhUAkq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDByVrAU3EDFy3nc%2BMyrcA%2FTGtQWZwJ7D4G8I3zGDIvvmNW2xkV%2FkR%2F8LJw9Ri6vSbCDqkafSozWAek%2FVbrSFx7TVevYIkJW2Lbnn3a9Pl9ymMbt8NIF0unSU4lvRyA4CLF6OU6DKnib%2FNjJbesJee8GMNGMTjJduCglFnnvvdXlsw2z3b2GaxQ1xLEAoz%2Bsnyr4utWPCbzRiTgMsFtomffCwqItUoOOpJwsrj3H0O0WdkQnalWGzqGsdhgmDjPDNUQTtuJbhmYXAOpNaPD2mYLZHwA01CGT4sHQ%2F3yfBDpr%2BRWgwQm9Y29qDODO6hbqqG4oFIT%2F%2FavOvyz5nWsXj2HxSfTCkO%2B9GnWL54BRJ2xxm%2FPq6kpJowlAQKgO%2FMe5JZTCTPVaeimTVJTjMsRbrNW9FGFSvE3oufKamgSIP2ZeY9FmlRFfJfXuowwBsDPEbte%2BwRjXleBbPWNnxuWYg8BvuUaIqv2ynnlzrlqlYjMI7xcNTs7tYKMCz07ZXSDblZBCNL8mTz0MrGGXMJh8ZaXex1cpsXtwOz%2BQevAbnH7Q8U1p3AV9Q5aT8wEZw54bCOyZ%2BqbLqTk2MF17mQOiqUhFvqwZ%2B8Sk%2FEwMzmyKgl2fmL9fd0NVRFswN5aVgvcf5k%2BI%2B8QleP8m9mYL%2FMMGCsr4GOqUBCAGc38QfBGFZ1zdZ28FIHgdTHYpmHJvLdoNpd1YwuCBvwzGJ%2F%2FaXNngiq9BmDxEUqPr8fyAFFKdQ6CjIeR746c%2Fg4rP2OQoL%2BqtMGAuRe%2B3j0GxqLgUUPV6hB%2F3P%2FSNUtPwm%2BKZ01%2F%2BlipDdYfd9mg5jRhgBbDOoDfU74okg6nI0N7relATprH%2FCV7KTK7TyDMDqiGRv%2BJloGnjslppjzay%2B8GFw&X-Amz-Signature=e85c120bd8988562b53b46ab24fe795d49b4974d11821a1951a71d3d09bbc21f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
