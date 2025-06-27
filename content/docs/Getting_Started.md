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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QXVTR6J%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEfU%2BMHyI7Sh5LVfoJOY7rjNeioYPiF2EAUEJmj%2FFM6oAiEA2dyPIxad%2FksVqqzAxrUU1YDAyMyAALaoFXiswGzFdMYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCDRKcCUzlUisNhCOSrcA9C24chawyS2CGT385e9lKaYfxA%2FDiQ43KzprE8%2BBAh6t%2BIAzjiraL3twE3AQOIynthU9JP4I%2FHYs7CirwBt1mrI0At3OBG21FOayD6vKzRW5ZLD53z4hyz%2Bh%2B37sJ6ave2jVsOG%2Bnp%2BIK62JmJ%2FkAwuBp0vWemgZxlLeibQD4xSW6oVB0bKqRHnv9RuKYcAqByWAPUHodRV1ZxXJgw2uJlcxkWzUJS18P4hHuR0%2FD5%2FXckPOi3sAysnfXjhZ1PiigoPS1EpaltOP9sOjzQ9X%2FynVD0MHL4IUvYDPJ0eCcqW0XT0U9QgzK7y35OpQpl4FITkVWw%2FYqsQCBpk2Jy4BP4sEu4fU4JGeXNOVIljiDvBWSj%2BhSTwcc6rZv0gbK73R%2B6PJOnf2qGkE7iWMehjydnLvwFC7Dimw6zK%2FviFMGVX8Knh4henlzJX%2F2FgFWezDgkW13q1lmUgnpEOCWzLuwne6NajmtDughtYtqdaI2zopN%2F2iSr55khs53LZ8%2BnlVu98MvDUQp8qm%2Ffz%2BcAjDpFSOv2TW7W6Z%2BUNCr2I%2F1zmPGjl2FQvmeRF9SvDt41st82yPJZNwdjysn02Z7cQzJS0mN8J4y5ujEmcG2wyIJzD%2FLWQwoVor52TWPHqMIH4%2BMIGOqUBD7Nb%2Ff%2B4X2cxO786Geisr982QLljL5CqeQxqBRmj2epbj5P4o5kDnq7IHGIzivqzVnOa4Pgu7qpqXWLkyR6iWC56NszU4VpqhGz9Bd%2FmIYzfLFGMrP5YBudkX75Nwve5iGWbQ6OLPKOOkt3qGuMAb3DvNli%2FRz%2BYVVUFqx3bUWCgwXz11Jq7iJOVRfkSd5Sy7ehPC040HrjBcOJ%2FoO%2F9fC%2FwbXck&X-Amz-Signature=a0b703fc9e6af459f498a9aab68542f85f45697ed822456017d6064ac86eaaae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QXVTR6J%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEfU%2BMHyI7Sh5LVfoJOY7rjNeioYPiF2EAUEJmj%2FFM6oAiEA2dyPIxad%2FksVqqzAxrUU1YDAyMyAALaoFXiswGzFdMYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCDRKcCUzlUisNhCOSrcA9C24chawyS2CGT385e9lKaYfxA%2FDiQ43KzprE8%2BBAh6t%2BIAzjiraL3twE3AQOIynthU9JP4I%2FHYs7CirwBt1mrI0At3OBG21FOayD6vKzRW5ZLD53z4hyz%2Bh%2B37sJ6ave2jVsOG%2Bnp%2BIK62JmJ%2FkAwuBp0vWemgZxlLeibQD4xSW6oVB0bKqRHnv9RuKYcAqByWAPUHodRV1ZxXJgw2uJlcxkWzUJS18P4hHuR0%2FD5%2FXckPOi3sAysnfXjhZ1PiigoPS1EpaltOP9sOjzQ9X%2FynVD0MHL4IUvYDPJ0eCcqW0XT0U9QgzK7y35OpQpl4FITkVWw%2FYqsQCBpk2Jy4BP4sEu4fU4JGeXNOVIljiDvBWSj%2BhSTwcc6rZv0gbK73R%2B6PJOnf2qGkE7iWMehjydnLvwFC7Dimw6zK%2FviFMGVX8Knh4henlzJX%2F2FgFWezDgkW13q1lmUgnpEOCWzLuwne6NajmtDughtYtqdaI2zopN%2F2iSr55khs53LZ8%2BnlVu98MvDUQp8qm%2Ffz%2BcAjDpFSOv2TW7W6Z%2BUNCr2I%2F1zmPGjl2FQvmeRF9SvDt41st82yPJZNwdjysn02Z7cQzJS0mN8J4y5ujEmcG2wyIJzD%2FLWQwoVor52TWPHqMIH4%2BMIGOqUBD7Nb%2Ff%2B4X2cxO786Geisr982QLljL5CqeQxqBRmj2epbj5P4o5kDnq7IHGIzivqzVnOa4Pgu7qpqXWLkyR6iWC56NszU4VpqhGz9Bd%2FmIYzfLFGMrP5YBudkX75Nwve5iGWbQ6OLPKOOkt3qGuMAb3DvNli%2FRz%2BYVVUFqx3bUWCgwXz11Jq7iJOVRfkSd5Sy7ehPC040HrjBcOJ%2FoO%2F9fC%2FwbXck&X-Amz-Signature=81a2e6b36b36a956c1e8d2a1cfecc7f9930400711570b3275720ab690e302c45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QXVTR6J%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEfU%2BMHyI7Sh5LVfoJOY7rjNeioYPiF2EAUEJmj%2FFM6oAiEA2dyPIxad%2FksVqqzAxrUU1YDAyMyAALaoFXiswGzFdMYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCDRKcCUzlUisNhCOSrcA9C24chawyS2CGT385e9lKaYfxA%2FDiQ43KzprE8%2BBAh6t%2BIAzjiraL3twE3AQOIynthU9JP4I%2FHYs7CirwBt1mrI0At3OBG21FOayD6vKzRW5ZLD53z4hyz%2Bh%2B37sJ6ave2jVsOG%2Bnp%2BIK62JmJ%2FkAwuBp0vWemgZxlLeibQD4xSW6oVB0bKqRHnv9RuKYcAqByWAPUHodRV1ZxXJgw2uJlcxkWzUJS18P4hHuR0%2FD5%2FXckPOi3sAysnfXjhZ1PiigoPS1EpaltOP9sOjzQ9X%2FynVD0MHL4IUvYDPJ0eCcqW0XT0U9QgzK7y35OpQpl4FITkVWw%2FYqsQCBpk2Jy4BP4sEu4fU4JGeXNOVIljiDvBWSj%2BhSTwcc6rZv0gbK73R%2B6PJOnf2qGkE7iWMehjydnLvwFC7Dimw6zK%2FviFMGVX8Knh4henlzJX%2F2FgFWezDgkW13q1lmUgnpEOCWzLuwne6NajmtDughtYtqdaI2zopN%2F2iSr55khs53LZ8%2BnlVu98MvDUQp8qm%2Ffz%2BcAjDpFSOv2TW7W6Z%2BUNCr2I%2F1zmPGjl2FQvmeRF9SvDt41st82yPJZNwdjysn02Z7cQzJS0mN8J4y5ujEmcG2wyIJzD%2FLWQwoVor52TWPHqMIH4%2BMIGOqUBD7Nb%2Ff%2B4X2cxO786Geisr982QLljL5CqeQxqBRmj2epbj5P4o5kDnq7IHGIzivqzVnOa4Pgu7qpqXWLkyR6iWC56NszU4VpqhGz9Bd%2FmIYzfLFGMrP5YBudkX75Nwve5iGWbQ6OLPKOOkt3qGuMAb3DvNli%2FRz%2BYVVUFqx3bUWCgwXz11Jq7iJOVRfkSd5Sy7ehPC040HrjBcOJ%2FoO%2F9fC%2FwbXck&X-Amz-Signature=a8a82f5f68e56ec467160ec8f0ba977fc2ec06fffc757fdf7e4c64339942ab5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LSGWV33%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCICqiJTLkXuA3dGQDZIIWg6vAvYHPLEiN18dQ0BJDib1XAiAQ7t8%2Bb4Ja%2BaGIa2Fik35Mb4mHK6HpK2KtpRqaq3QHsSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMRLlyueNV8qKRuNYCKtwD1l7HcCWB0xsEKNGTfFXCqvKQAlQEwb9IGTQUWIJhiax%2FCJ9iA6nUOI9ViufH0fWOqnoYXoXpcA3UAFTO2cGFlTpjXEk%2BxcrDYIuk172AA4%2BZYnk9nF60%2BGQrWYfYrvensTlu0JrQ8iINEp02iQzHQTk1ZaUpnKVD4r6P9YjlTF9mPTdJKsp5x7eZnZYQjqKMTLoCsP6quQzVset1%2BIVBAuQtRTFcvkTyugHD0fstWJ%2B6%2FfO9GZ9oNvyxlaGPcaQ20kzCliSG8NWzWp3XVomffRz1apXmuJ8eG6UXYOunoIVmgNc%2FE52WnJ65p%2FRJk2tFECqOXvG%2FmbrHMpuT9aygyEhoH71u%2BoyBFfIjlTQhUWwAcRKUSWzgU4fPA5LIfI5qWwtiFHkeKe3GD87FkkCk2ubxJz5Ao5r4dSx%2F%2FvzS0qn70Nv4DroYfNHG2nV7ADB3YtL%2BZNXxEqVL9Sw7uGGKefjNpNOPWG%2F4V1Ql%2BqOZ5gpYpunrRdLh4vPk89UX7Cf3stDxh3Vz1eEcQIc4gmWhqN3VtCcxeob6yAklKg8tmaaAkpBt3U4sA5cPUoWn7OG1AUdbsUBufepiPFD2sTIAaRwhEL4Gy%2Bj4YyH1wvCcKMVG4l8gxolJ7ziQJMcwg%2Ff4wgY6pgHO09zF09Jf0d3ybqFdmHjSdLUBcbuComS87jY2Rt7I1PZfASL3SMXiPUCaXwZ5BqJwXEABdPyu6QtFUmv6NFBN4S0J%2FNG67tfHGGvlSzHVzkESQN2169Cyi7X5gsRGdIBedhcPSg%2Fz6K9X523glTpfNNK7dWA5hVm78TBqy%2BSpiXY2Atyq0N%2FyiyWfLCLLzXApGo0UGeEVNWawBihKUDk6ukvkosuW&X-Amz-Signature=ca02a3ef13c70d08f98d4bb777be09f746cd3aebca1c1d98e3b3f5a63da06a92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ2BOCZP%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIAg83Q5I5mt6KeCUuRrkRa4t5I1Af%2BKbxZX0o4CGKe8tAiEA9rNkY1Z4VMyY6kbuYR6vR2Efoc7m4nZs1yniP1h2r5Yq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDFCtjapCuD4WmlLjRSrcAwIZT8BmMYQZOiDKWT3xykesSqODQYpcuDkuCviGQKELhx5akK8hRKTSS2c3SwfIm1aVGnFPtTBro1KTGD4O1AH4%2Bv2OpXtQS4PLSgaOBhzpXSO5nkQgfE5wGfetQDRDLF%2BTSJj0gqZOwYNJJFZgqHmflwz032RkZFR0MlOd9WsnmU0LM%2FsQi%2FyfMJooMU5M%2BcukrXpNvXCN9ktpWC6ULeB3AQjKeDIodZiXKjYbnbyqvesdqUT2RERBsC3GgsyN0wf4hM75QRjmAfiVazXGoSE%2BbxyIkvznXmOrC8VY%2FLbVWxQoYw2cTbPd9xOEyWWg88mMptbdnpmFMJTeh9GP2pOjiPKisPDhyUexJocGWXBSb%2BzJZKGstHwzX%2BaDazV9xtU0fVKAdV3qa2%2BQbYInZFzAbMMvDVkeX6MJLEJtBFh4rtDMsYi2Wl6F2hKNwHAd9E1C570xvchfcfW7kbqfGmxeGrC5q1TLTLxmsLOG1fqHxIHgENq7ZWikBrCL20pAQExA1VPpIyhD5J3ORIzMcZuaMnNiKpm88PaLEVvMT4vgg6tBVm5pTk7yOL71hKtjUvSyN%2BgTjNggTcoixkvsp02Dsc5K4XL%2F2W9cSux%2BEin0FpiCTJKhAnOgk%2FpPMJL3%2BMIGOqUBDA7NrgT3w9n2yUUwefqiBEKq08TUttWCQfkX2vCKVePjG7%2Bhn43x6QcOhODgZmreek%2BfBMykn%2FRaqEI62Mx0hbhjhVUIhKIWudaymeDytP1jttrfzX4Ri8J0Qnontk43atqPrrpl%2F%2BiiftqGZyQFYhWylMcQ%2BjGPEBy70PfUZbmW4zBpaIJqQYabNsbJgjCwXV%2BfdEPJV2NGb6GO4rYbeKiMnb5M&X-Amz-Signature=69e56124bd09a65dfee3e6af46398c7a2ffc33dc7b77dade16c7ef893948f267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QXVTR6J%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEfU%2BMHyI7Sh5LVfoJOY7rjNeioYPiF2EAUEJmj%2FFM6oAiEA2dyPIxad%2FksVqqzAxrUU1YDAyMyAALaoFXiswGzFdMYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCDRKcCUzlUisNhCOSrcA9C24chawyS2CGT385e9lKaYfxA%2FDiQ43KzprE8%2BBAh6t%2BIAzjiraL3twE3AQOIynthU9JP4I%2FHYs7CirwBt1mrI0At3OBG21FOayD6vKzRW5ZLD53z4hyz%2Bh%2B37sJ6ave2jVsOG%2Bnp%2BIK62JmJ%2FkAwuBp0vWemgZxlLeibQD4xSW6oVB0bKqRHnv9RuKYcAqByWAPUHodRV1ZxXJgw2uJlcxkWzUJS18P4hHuR0%2FD5%2FXckPOi3sAysnfXjhZ1PiigoPS1EpaltOP9sOjzQ9X%2FynVD0MHL4IUvYDPJ0eCcqW0XT0U9QgzK7y35OpQpl4FITkVWw%2FYqsQCBpk2Jy4BP4sEu4fU4JGeXNOVIljiDvBWSj%2BhSTwcc6rZv0gbK73R%2B6PJOnf2qGkE7iWMehjydnLvwFC7Dimw6zK%2FviFMGVX8Knh4henlzJX%2F2FgFWezDgkW13q1lmUgnpEOCWzLuwne6NajmtDughtYtqdaI2zopN%2F2iSr55khs53LZ8%2BnlVu98MvDUQp8qm%2Ffz%2BcAjDpFSOv2TW7W6Z%2BUNCr2I%2F1zmPGjl2FQvmeRF9SvDt41st82yPJZNwdjysn02Z7cQzJS0mN8J4y5ujEmcG2wyIJzD%2FLWQwoVor52TWPHqMIH4%2BMIGOqUBD7Nb%2Ff%2B4X2cxO786Geisr982QLljL5CqeQxqBRmj2epbj5P4o5kDnq7IHGIzivqzVnOa4Pgu7qpqXWLkyR6iWC56NszU4VpqhGz9Bd%2FmIYzfLFGMrP5YBudkX75Nwve5iGWbQ6OLPKOOkt3qGuMAb3DvNli%2FRz%2BYVVUFqx3bUWCgwXz11Jq7iJOVRfkSd5Sy7ehPC040HrjBcOJ%2FoO%2F9fC%2FwbXck&X-Amz-Signature=552920bfd65eceb44c0b3f3d3650c8ec6415c85714c57c0d29db1802a40d6d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
