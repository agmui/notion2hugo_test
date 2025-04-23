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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q4PEK74%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIDRjMp%2Bnn1hc7J6V5Z1QNzcSgPStyrgap52gHt24VLSIAiAFkgW3sMAsE1X4gibfTLgCXOwJgxAkgvMu2PM%2FJMj7lSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqvcvNdpttc5USzW8KtwDxR8p%2Fxbi0RijJVtlLJnxEKvGnEJeQI3m4HxbHyA1yiCgG2QzzpcoHFClJyG0DK4bIchFry7VdXmDWos%2FOapQTWICtymDMVX%2B708TIXOcaz8eE6BtjmtajsSUNsbUuiWXxK6vgkGTmbH9tpVTi7Jmupceh5KrKtmvU5MVKUloxk5fOqHT6ETjSevSmwVG%2BnotVCrWAW%2FjLOARBM4BcHl3gSDxX7fV2SeliJkpRSUiPjAZP3jL4tSGw6LJqx5wbUHE%2Fa8vPEOvUYRyPMlNWluj9L5Nlkwr68FedbMMB2mV20iPr4L25Oqidc96M7U4BCKq%2BiUv%2BBoJHhqjHKiuaNl9jqO3AOH0z%2Bjfbvg%2Bpx0SRyKprcBrER20qmURYouUWGJKp1ZG8HyHbSYgkSbRBnAShQq7U%2FSLfOzo9S3HMKLzxNOYvWLV5f9PnEwLgP8Q%2Fj4YXhFtUzU7uXnydYJTmAyke980auHx2Nc8pN0u%2BY5rbaiC7PlQLwqEAg8CmYwETf8jN5N3Bd%2B4wXds%2BW5ae7FhkeKV2CtgG4Q%2BaXLb5SQczkL0Y5NSUI5bac0zfWyOfRT73SzQ97yBJqjK5xqNQ9ldhFAHrkrajGJA1C26xm2o%2F3LFua6w5zDoPErBP0Ew%2B%2BiiwAY6pgHuZEu0lIZpKjNqaM6p1XbjnlSgbXiUzCA%2BSkoB7SbxdryJE%2FWU266maK8GgVdBMnKpf3OhYn2fS0y7PiLPEQUhTET4k0VMsSNynmjkfy5POWtTFR3xMm2Cor%2F0xhy5Me5pNGg2mVI2qvBgz14zxle8efxTyuWcqa0P2m597nx0zuS7WXPhVh1S0XO5wTeKbcnkcKbM2bU7V2KdsOa2tV1pk%2FscBE0w&X-Amz-Signature=6d0239b344ef680e605186ca3eba79a4c9fcb08f459045fd6a8fde08b3532f02&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q4PEK74%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIDRjMp%2Bnn1hc7J6V5Z1QNzcSgPStyrgap52gHt24VLSIAiAFkgW3sMAsE1X4gibfTLgCXOwJgxAkgvMu2PM%2FJMj7lSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqvcvNdpttc5USzW8KtwDxR8p%2Fxbi0RijJVtlLJnxEKvGnEJeQI3m4HxbHyA1yiCgG2QzzpcoHFClJyG0DK4bIchFry7VdXmDWos%2FOapQTWICtymDMVX%2B708TIXOcaz8eE6BtjmtajsSUNsbUuiWXxK6vgkGTmbH9tpVTi7Jmupceh5KrKtmvU5MVKUloxk5fOqHT6ETjSevSmwVG%2BnotVCrWAW%2FjLOARBM4BcHl3gSDxX7fV2SeliJkpRSUiPjAZP3jL4tSGw6LJqx5wbUHE%2Fa8vPEOvUYRyPMlNWluj9L5Nlkwr68FedbMMB2mV20iPr4L25Oqidc96M7U4BCKq%2BiUv%2BBoJHhqjHKiuaNl9jqO3AOH0z%2Bjfbvg%2Bpx0SRyKprcBrER20qmURYouUWGJKp1ZG8HyHbSYgkSbRBnAShQq7U%2FSLfOzo9S3HMKLzxNOYvWLV5f9PnEwLgP8Q%2Fj4YXhFtUzU7uXnydYJTmAyke980auHx2Nc8pN0u%2BY5rbaiC7PlQLwqEAg8CmYwETf8jN5N3Bd%2B4wXds%2BW5ae7FhkeKV2CtgG4Q%2BaXLb5SQczkL0Y5NSUI5bac0zfWyOfRT73SzQ97yBJqjK5xqNQ9ldhFAHrkrajGJA1C26xm2o%2F3LFua6w5zDoPErBP0Ew%2B%2BiiwAY6pgHuZEu0lIZpKjNqaM6p1XbjnlSgbXiUzCA%2BSkoB7SbxdryJE%2FWU266maK8GgVdBMnKpf3OhYn2fS0y7PiLPEQUhTET4k0VMsSNynmjkfy5POWtTFR3xMm2Cor%2F0xhy5Me5pNGg2mVI2qvBgz14zxle8efxTyuWcqa0P2m597nx0zuS7WXPhVh1S0XO5wTeKbcnkcKbM2bU7V2KdsOa2tV1pk%2FscBE0w&X-Amz-Signature=b0fee35fce9612687b7870f37a84fab801d59777f09a65e9e4d002d09f4a3789&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDZ4BVP2%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCZILyVE0DFqujVydsOp1lGw4qA5QTtyOdNXgq83nPR5gIgDww6ne%2Fg4L5n%2FgHxu39kBMTYkKO%2BGmNnnz%2BZ1gETz38qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELobEvqgZxRotAiIircAzq9FOhLfhyFferjWl5L6E8ExLupL0mc9gWRQQi6m6WZNsj852xVKEhW5C2DoXEf%2F%2Byt%2BFylXAmbN6%2FRbFNo4gojEiugmX%2Fj7VFqR7m1Mqto6vbiNcrs5I00Q2e7FbwKV%2FdUH9OdMHXWy75K%2F7Z4JkC4RDoLRYwuLSVv5ZYj3DATN%2F2AgfiAAYk3f07OTtqlLmSC41LuVkG%2FvtnWj24a8LntO9gihj7yIxQ8A2Khbrrs%2FtNK8TGnk6fk9k%2FES%2Fcc1X4jB8OE4ljwyU73CiGNkOfrcCaHdh4ZfF7q%2FdLsVRgBltDr5FrV5jezjZXjYfq8dmzFuekVeBe%2BXYDaLuWnS0E2T6Q%2Bg%2BcYaXp0FXDNd5kneM1LJyiPg9YPgou9JmwK1dVOfF1eZQbaAtCgaE6mJ9uCazu%2Bs6zj%2BbD9WOlXd1Jix%2BXeOo3oMyq9RAChpOwdgJ0JUqwqjmsqkQDlD2skQl7pVRmEXoEc3d%2B7K44DlVvJs41dTQCwu7OskssQHwb5Irx2lRmwS9Znglxpg3%2BvByaU6CQIFaMFpUEfprEBLlA8x8E%2FJ%2F4k3lNkX%2FdevdJOuCrQKkNPwDVWPEEHXoxOhUypqFPgkhuSdMS6SiwgTMzg0Xd49imDzf9EczLHMOvoosAGOqUBnjmsQUyTff84n6XZ7ko0es9HTLr870Uz8UC4usRQIZjlDCRPfEKpvXwMI0%2B5XyyDnbNCU3z0QPItL4TtRgiRMcEkC1fzwAXfL63H%2F84Q5Budom4SBxj5zWLlI4VG52iG3UMvQrnRhSxvNznMSgDDcQu%2BkWuBM0r8aLBlG0zJoi2o%2FQixp4WWAmN%2F9yBc9kb9X6GwjRUUEVbETSVUNDARvo3CcI2c&X-Amz-Signature=0b7cd9eeae40699439d708040f43fdf8d0c4de3d8f6e7cf7e184f3d9f0c88fb3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T7DWUSN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDhAtMRDhwLLMyYlZim%2BwdkbeKw4%2FbeJIfOYxE4ehVdLAiEAw%2BtVrHhSycPLyCzAbpga6VxHIQ2nDZqgFImHlErxbOgqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD41CCHsydaLvJ1%2BqircA3DxClMAmzRWyvCho2dR1ZCOs2GNUaUlnORN9KHWiIcARXTddHcQ5ve8ma1HKcY51wZcEUGUJzJ8eJh156LihYohOBCGR29xT2KrFKs0XhhHqoYcIf98801fkyzATUENqb6gHIMClULeBezBlXEDw6vXvKgwRdhHbsvds2ysaNZReIL7SFPWtCGMoxzjXg6DeVb1bVQWgOIlBjE6mH2FlXsrPDT%2BtVVjgXW07McTZN7tWJpCG2FpoBkdBRYsSS5LyZv%2B94VLawC5hDc4TtcN2aCkD0Y30yW1hGimyep%2BzRe6Rw7pDug1pPF%2BMZ9lDkB5zdfEqcHbq6L6s9cSP0886XIj3h4W%2BxTGvAcBneJ67xSnYrrJIWhXaBEFQTLEbyaFGAVlqdrwIqXu6cBW5pBqH8NiCsQMHoigb1lEQ1NUmXgQIlbPM22e4wYNAivaRIF98YqxSIrSNB87x0%2B9OqBx3aWVWPnX0zf1Uakxl3z0AEXlUFEYnGNE2g4PCG9XvxuWsUCS1bxPmiROGdKPpJGnDEaJQtYOBP2qgoVY4TO7bUZ2xSOdhu3Fyv61Si6aLoVjMwVRGa5OiqyvDJDS0jf8dXqO6vcLWNhO13oohIOQDzEZRYE%2FHoPlnK%2F%2BY4RjMLjposAGOqUBiUBTJuBCNQ5eUW7wX%2B7dbHoGWVqnwO4UZNAzv7F%2Bn3lcp2qdhaPKqKmVPrCgHlu3VMj7yxc7l1LK7GJqyYgQFFwN8nJn2T69B%2BR18EWqk93COYZraZoDgP4aF0Cmf9JSuvuUMzXd5z5AzHxOpsf73TKxy6HhLbKSd37RsBgM%2BT7%2BCpSwJS8PsZSIsUiOB6YcTDv7YFd1TIu7z3wVWRO12jCdqiAn&X-Amz-Signature=34013a83f0f7e124dc723bea345366068ecc17812acb9ff91b4e6e5bfe9947e3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q4PEK74%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIDRjMp%2Bnn1hc7J6V5Z1QNzcSgPStyrgap52gHt24VLSIAiAFkgW3sMAsE1X4gibfTLgCXOwJgxAkgvMu2PM%2FJMj7lSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqvcvNdpttc5USzW8KtwDxR8p%2Fxbi0RijJVtlLJnxEKvGnEJeQI3m4HxbHyA1yiCgG2QzzpcoHFClJyG0DK4bIchFry7VdXmDWos%2FOapQTWICtymDMVX%2B708TIXOcaz8eE6BtjmtajsSUNsbUuiWXxK6vgkGTmbH9tpVTi7Jmupceh5KrKtmvU5MVKUloxk5fOqHT6ETjSevSmwVG%2BnotVCrWAW%2FjLOARBM4BcHl3gSDxX7fV2SeliJkpRSUiPjAZP3jL4tSGw6LJqx5wbUHE%2Fa8vPEOvUYRyPMlNWluj9L5Nlkwr68FedbMMB2mV20iPr4L25Oqidc96M7U4BCKq%2BiUv%2BBoJHhqjHKiuaNl9jqO3AOH0z%2Bjfbvg%2Bpx0SRyKprcBrER20qmURYouUWGJKp1ZG8HyHbSYgkSbRBnAShQq7U%2FSLfOzo9S3HMKLzxNOYvWLV5f9PnEwLgP8Q%2Fj4YXhFtUzU7uXnydYJTmAyke980auHx2Nc8pN0u%2BY5rbaiC7PlQLwqEAg8CmYwETf8jN5N3Bd%2B4wXds%2BW5ae7FhkeKV2CtgG4Q%2BaXLb5SQczkL0Y5NSUI5bac0zfWyOfRT73SzQ97yBJqjK5xqNQ9ldhFAHrkrajGJA1C26xm2o%2F3LFua6w5zDoPErBP0Ew%2B%2BiiwAY6pgHuZEu0lIZpKjNqaM6p1XbjnlSgbXiUzCA%2BSkoB7SbxdryJE%2FWU266maK8GgVdBMnKpf3OhYn2fS0y7PiLPEQUhTET4k0VMsSNynmjkfy5POWtTFR3xMm2Cor%2F0xhy5Me5pNGg2mVI2qvBgz14zxle8efxTyuWcqa0P2m597nx0zuS7WXPhVh1S0XO5wTeKbcnkcKbM2bU7V2KdsOa2tV1pk%2FscBE0w&X-Amz-Signature=c5155d84667d95e22227946eea79ec074fbec2a07a774bbba046a3b44ebde912&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
