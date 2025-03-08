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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUE2Q7KH%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCCSQygWaM7XYpgVt0j3BsVFTP0z5V9siY%2B7tJCZaXvuwIgFRWJqF7%2FXPftguSe0wOAAP%2Bqr5kivmJWh27sxFR8HCYq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGDPVaEl0K3UODfAtCrcAzaOpzujVYILiQ%2BFvJZN0zALU40mVcbu3bIq3bYLo4EFgMpeWqnnrrpFfO1yzXnpCerU0WYr0QPFbG%2BlIAf4fubBfTRM7gWm1Vwh0eJFn39k2xld0GItUrzs4vZBOt7vdFbS0TpDCrZwiSGMhSVJ032cmrU%2BYL74TD9NTMBUetA5zf4jR9cy%2FLyIlVf9lNTe2CSoIpsiranlUUjdOOIqP7U01epQTnpgSdZWFzSnPlwCveo2AgBo3pjm8BH%2BwMiUyt6DsPjzWh52BNBSvfGJ4wq0oulu6Pu%2FOiLrp2odkhQMX1bZY%2F94SuDcuhrT7qwbsyGt65L19ucWtm5%2F%2FNPBVNC8NZ1GBdf%2F65%2BcLFM6OQZMYy4dKJ3lMDquO3HkD5gKbuI%2FawzlMK4NC0vFUzvNg3cdNbUcYJV9LXZZOr08weAYYMUb8d6phcF6PCRfNlKNWMpLxih0ur3Z%2Bp4S5FPTgzfJCswNwaRNEnBKMS6T%2BIZd89nt0nbk%2BtTnS8IoZScsNFb%2FXvpRjNQcG49gST5CAD1AVM6SbBT%2FyQNe1jQCcrLx5lgDFlcKlgzmJtsVzNJ8BE2hgHvlxXB%2BbXtbUcF7jeNjVnLwBbRSxHCo7L1hzHkI1X7zYYV7OEk8eqE8MIL%2FsL4GOqUBKmr%2FYFHcgTUZFIcy3zhwiqZj2lxG10JXtOHA2S7fhZb9piomO2rH0M3ZBN3Hml8xM8LyeUT2bbE88zTajPxEVYo89YszMpV463ulhIq%2FxuPREZ%2F2BU24JA5yp%2Bp0eaagZ8JM%2BVqmaF2XApgMZUJZx%2BjMthTAbqV9Bb5pw4J2lULLEyBmjQBwKXDeoU7D8ISLDC37s79TUXCErlmS50uhXeeSdk7N&X-Amz-Signature=5adb2cf45e541cf9b6b976b352b7d32c1d131768c278c38cb5b9c0cce15a8093&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUE2Q7KH%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCCSQygWaM7XYpgVt0j3BsVFTP0z5V9siY%2B7tJCZaXvuwIgFRWJqF7%2FXPftguSe0wOAAP%2Bqr5kivmJWh27sxFR8HCYq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGDPVaEl0K3UODfAtCrcAzaOpzujVYILiQ%2BFvJZN0zALU40mVcbu3bIq3bYLo4EFgMpeWqnnrrpFfO1yzXnpCerU0WYr0QPFbG%2BlIAf4fubBfTRM7gWm1Vwh0eJFn39k2xld0GItUrzs4vZBOt7vdFbS0TpDCrZwiSGMhSVJ032cmrU%2BYL74TD9NTMBUetA5zf4jR9cy%2FLyIlVf9lNTe2CSoIpsiranlUUjdOOIqP7U01epQTnpgSdZWFzSnPlwCveo2AgBo3pjm8BH%2BwMiUyt6DsPjzWh52BNBSvfGJ4wq0oulu6Pu%2FOiLrp2odkhQMX1bZY%2F94SuDcuhrT7qwbsyGt65L19ucWtm5%2F%2FNPBVNC8NZ1GBdf%2F65%2BcLFM6OQZMYy4dKJ3lMDquO3HkD5gKbuI%2FawzlMK4NC0vFUzvNg3cdNbUcYJV9LXZZOr08weAYYMUb8d6phcF6PCRfNlKNWMpLxih0ur3Z%2Bp4S5FPTgzfJCswNwaRNEnBKMS6T%2BIZd89nt0nbk%2BtTnS8IoZScsNFb%2FXvpRjNQcG49gST5CAD1AVM6SbBT%2FyQNe1jQCcrLx5lgDFlcKlgzmJtsVzNJ8BE2hgHvlxXB%2BbXtbUcF7jeNjVnLwBbRSxHCo7L1hzHkI1X7zYYV7OEk8eqE8MIL%2FsL4GOqUBKmr%2FYFHcgTUZFIcy3zhwiqZj2lxG10JXtOHA2S7fhZb9piomO2rH0M3ZBN3Hml8xM8LyeUT2bbE88zTajPxEVYo89YszMpV463ulhIq%2FxuPREZ%2F2BU24JA5yp%2Bp0eaagZ8JM%2BVqmaF2XApgMZUJZx%2BjMthTAbqV9Bb5pw4J2lULLEyBmjQBwKXDeoU7D8ISLDC37s79TUXCErlmS50uhXeeSdk7N&X-Amz-Signature=e26469acd119199940d64dcacc84f064e1ef36c8431d778a17f120b2232efb08&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VTM3PM4%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDKkfYgOMYev1SRD5EJcmQGbIltVkG5N86d3jA31E7hdQIgLOyHC9CVx71k1kBmIvZbI0exTDcA6Q9ixcKkDHx9UH0q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDAe3G36PLpfwOyt4jCrcA2YszjFPtTmmfjjLzDfOkhsa0fH1YFDswrxWhIgU8ffkpvCa8Hyalwf5Rv1wETkK71p%2Bcg4HsfMA3UhmB%2BCp1y%2BZ0DyXrcE4pR3eYapO9m%2BmgQjUy0RCEKV24C6WePsIYakJ0KyEaWE4sjiGuVPDY92UGewHjCqhKe5t5%2Fnto6mrerhNH2NCvnm4c4xK4RtC8aI0CokfShZgxL1IecRoRL%2FQcus5tLdCerhqrGU%2FW4gSb586o0JXZWnthR0uOA2F5snGg03Dp8oGzpyyjrpLX2yLWoaRs3xg4cm7DcXoTWMrZqstqLPoCo0bCW86fgBsPwyjvIwT5pFjnpjuEDV44E0Z7C%2FJoSNW%2BhecV15NBXplhHxx6sg1X7vqhyId7m24%2Fh3cZc%2BpxV8py%2BO2joL6T1NPW5St5Bq1NSQqtgKntr59iy7Xv0%2F3cjP7d4QCX1F50S%2FBSGws6feBc8I%2FqAHzFH8VdUREu23r1GECJL3i5m4hq7EnO2DGR66fzKnm%2BULE2a6Ua25YTNzqGiLDA5BUABGNpxzZGBT1qrmN16pMj2EsjQH7KnlMAxHLvaFCn4couK3qky%2FD0VEgjqeGjl9z9S3bQspY8x0xS6rlxB5aa8Qnl%2FZK%2B%2BmmxTxiv4l7MJ%2BFsb4GOqUBDg0dz2fk5Muo3bKA0mYNjjsHDJ5G5K7renpuy6z9HNje%2BXIrd6hv9pULadEiJ3HiWjN0wP%2FQVsAjELd2s7jrMhWaJwLfU%2BtL2upG%2BwI8AbSMwE2f2eJl9tzqPHx3xxC6PrVc0oSfTRwMxGJk5LPFi5LCgWwGyrhChvFIpUcbEmO1SVOSxY%2F4Ihh4%2B4klnZa0JIGk8TkP%2B9qE32mPGQ7%2BcSGeM%2FPA&X-Amz-Signature=bab210a3ae6dae3e040ca67c53c4372a4e8cda5117c796e68489e29f5796010f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJSKJU7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDEuyxS9YxMbLSaTQ1hA3nahPrApZPVKwcUML5nAilHRwIhAO9C3kO6yJ0j%2BezT8q7EAVoKIjmodaA7GsVhVHxeDtEfKv8DCFkQABoMNjM3NDIzMTgzODA1Igwa0xKii8iW2GZG2L8q3API2wjuP6U7ESJ8a4D7lELxF5N0tJd5ctdxlYXO9MNDFCYdt78dRsyPrjJ1v0a5RkzZjQKTI1FnKeYAY1hjYO0qdrUVQLwSYxvRa1IeVSvFFPiItg4aE6midmPrnAlRbZAstC34J9jcOs24VwhSCqDjzER1ZgYyW0SSG4xUqIjPWYaRn1tMZ%2B%2FLDU7mgwRIOBMV2lSkfhaTUdseuSCacIeqPOoas5zKrS7LGdYXtlkjtqvP53ExLxkE3XaArwgiA3w%2F8BvixubDNY2dtuUguch8N8aEXzkcHZ0GfTrdmc1bq4HhcVvPKIxbe%2FU%2BbD66ypf68qo4jYsTjB4Piu5%2Fox6gO7KwqY8HYCBfRhtwq%2FgFMwO1BHzSSLzIKPKKRPYKPMxcBXtQXjWk2IoPmQPoNf%2FuzKOGAJD6MfqYWRk9jgne35jSIoucK6CdKL9mr%2FibxScJgYsXA4LiXFDfpFdAW0nXJeSxG7EGGJ9DNS2Il%2B8knajRgcHrBLBK2uOn6%2FvJaG4Gbp%2FdN0YjcBGHNUDVA2ZTPSSBIcLFqMQWZXh1DBgr0u9lx6hNZ80%2B5VvKDm4Q2VIc3kNVkSnoZa%2B4K80QPQwRtfY%2BEvP1Gpi6DRxKaz2MRQjBhFds4jsljahApjDS%2Bq%2B%2BBjqkAW9uaDYlUavYbH7z%2Bd167UBRZoyYxgctCYBcheHlu9n2nZVIB0E3qRFW2uqtwiYCtq0B%2Bm1s1VtmL1iEQhgsIk%2F717lddfrB7XagojvPZMx1e80oWZNr0wFL2mGCHAL5a9zEi4U1B%2Fuy2dgGrOGkMn00gMkowtH5BMPPYbGUcONLuhxvRnlOiA%2FGlQJxfmuQ8Q6%2FfiRC8LtCCR3TvojrMK7IC9T1&X-Amz-Signature=3cbb04acb734e1d04c46e1c4be108e52967f4b984c28cbe0b2ea6a59b114a6a8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUE2Q7KH%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCCSQygWaM7XYpgVt0j3BsVFTP0z5V9siY%2B7tJCZaXvuwIgFRWJqF7%2FXPftguSe0wOAAP%2Bqr5kivmJWh27sxFR8HCYq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGDPVaEl0K3UODfAtCrcAzaOpzujVYILiQ%2BFvJZN0zALU40mVcbu3bIq3bYLo4EFgMpeWqnnrrpFfO1yzXnpCerU0WYr0QPFbG%2BlIAf4fubBfTRM7gWm1Vwh0eJFn39k2xld0GItUrzs4vZBOt7vdFbS0TpDCrZwiSGMhSVJ032cmrU%2BYL74TD9NTMBUetA5zf4jR9cy%2FLyIlVf9lNTe2CSoIpsiranlUUjdOOIqP7U01epQTnpgSdZWFzSnPlwCveo2AgBo3pjm8BH%2BwMiUyt6DsPjzWh52BNBSvfGJ4wq0oulu6Pu%2FOiLrp2odkhQMX1bZY%2F94SuDcuhrT7qwbsyGt65L19ucWtm5%2F%2FNPBVNC8NZ1GBdf%2F65%2BcLFM6OQZMYy4dKJ3lMDquO3HkD5gKbuI%2FawzlMK4NC0vFUzvNg3cdNbUcYJV9LXZZOr08weAYYMUb8d6phcF6PCRfNlKNWMpLxih0ur3Z%2Bp4S5FPTgzfJCswNwaRNEnBKMS6T%2BIZd89nt0nbk%2BtTnS8IoZScsNFb%2FXvpRjNQcG49gST5CAD1AVM6SbBT%2FyQNe1jQCcrLx5lgDFlcKlgzmJtsVzNJ8BE2hgHvlxXB%2BbXtbUcF7jeNjVnLwBbRSxHCo7L1hzHkI1X7zYYV7OEk8eqE8MIL%2FsL4GOqUBKmr%2FYFHcgTUZFIcy3zhwiqZj2lxG10JXtOHA2S7fhZb9piomO2rH0M3ZBN3Hml8xM8LyeUT2bbE88zTajPxEVYo89YszMpV463ulhIq%2FxuPREZ%2F2BU24JA5yp%2Bp0eaagZ8JM%2BVqmaF2XApgMZUJZx%2BjMthTAbqV9Bb5pw4J2lULLEyBmjQBwKXDeoU7D8ISLDC37s79TUXCErlmS50uhXeeSdk7N&X-Amz-Signature=fac69c109e2d578eb179cd879d0c2e92db78027e7a0c118aee69b283b0734a6a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
