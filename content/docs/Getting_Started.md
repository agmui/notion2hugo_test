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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQKSQRXU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGe8o0dDrYJwAv9oGGF8G%2BvRzrh%2FsLGaVbHHFFsj6m%2BjAiBCjNBnV%2Bx%2BDDyRfVs7pOgoeZU%2BZiv%2FeKbviFjZlBHMJyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTW7mRdry%2FEp%2BdLknKtwDYzAcqxPQLUktwi0cCtDWdJ88Orx1x%2BXRoU70CFrOok%2Bjj6SIYWtiSEfqTYoOdvsVfx2uBdcd3dze1GB3pptcIUveAgZwSXVYp7Xip4ZfP00tePy7aEjPOkZ5S05bgwJC%2BcpKc3s3g9Ed7Rob5o6MGzSJrAuvVko8iY4QhhsiPTU6RMGWjqxzeHbagor7vJqJMuGJ3RqYJK%2FlCDOteUPfgEp5A1%2B5LpcrlE3L2riOIhnI8TM3HoRtFXCjz3Ezc9Ah1oBFUt7ultsO0wFCVBZjzbZ2CMyZvZLxVehVx9kJWyp604MbJDUvKtlyodUYyhd7IvtzxHMaRDlutg%2B5rkKcuiV72U57vt%2BlYDx40a40bZV1pZRDUP68oJSkgYCninBRAHq3XMVhA4fYm%2BWQHP3WfgXVlIWizB5fdR7IdNoDtNbz6ZVbkN42rDomPiZJBCEjcxPpDyg1XNJIBj7MD2ddyiTg6RE%2Bb88gE1PG%2FBKjKnE2T9J4ZQeTw344Om7m5M0LMNJMqxoXtl4X%2B7ukymN9WCWniBZI3K5rqkboM9frH9IfXaH4ygGy6q2DZrc5Nvz44AXXHnafo7oJDttf6e4b9CCEcLx%2FAi91nAVs1hk%2FJWkjxV%2BanVTGcl2en48w5sXswwY6pgFPNrNkk2mS3a3alY3vtCDV9myBZSnqGmhg%2Fo54yNYxZu8ms34dx4m%2BZEgxaFgTaErRybteJNWVtAtXRE0wczPM3gyeP9vV3OI9TigTMZPKrHDT9DtII4IX4b2d696yctf58QAMb%2FczsTDsjdzeFBK9GTvm%2F34Hzoq7V6OKu3OXGcCpFxZtLMEZR%2BHBJHm1V1RPDxPwR7JJ6xnIFZQ4HRt%2BVa8Upw82&X-Amz-Signature=0f557956332db96cffa5dfc7a74d9022919c954532aba79088f868fbc5f5ee46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQKSQRXU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGe8o0dDrYJwAv9oGGF8G%2BvRzrh%2FsLGaVbHHFFsj6m%2BjAiBCjNBnV%2Bx%2BDDyRfVs7pOgoeZU%2BZiv%2FeKbviFjZlBHMJyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTW7mRdry%2FEp%2BdLknKtwDYzAcqxPQLUktwi0cCtDWdJ88Orx1x%2BXRoU70CFrOok%2Bjj6SIYWtiSEfqTYoOdvsVfx2uBdcd3dze1GB3pptcIUveAgZwSXVYp7Xip4ZfP00tePy7aEjPOkZ5S05bgwJC%2BcpKc3s3g9Ed7Rob5o6MGzSJrAuvVko8iY4QhhsiPTU6RMGWjqxzeHbagor7vJqJMuGJ3RqYJK%2FlCDOteUPfgEp5A1%2B5LpcrlE3L2riOIhnI8TM3HoRtFXCjz3Ezc9Ah1oBFUt7ultsO0wFCVBZjzbZ2CMyZvZLxVehVx9kJWyp604MbJDUvKtlyodUYyhd7IvtzxHMaRDlutg%2B5rkKcuiV72U57vt%2BlYDx40a40bZV1pZRDUP68oJSkgYCninBRAHq3XMVhA4fYm%2BWQHP3WfgXVlIWizB5fdR7IdNoDtNbz6ZVbkN42rDomPiZJBCEjcxPpDyg1XNJIBj7MD2ddyiTg6RE%2Bb88gE1PG%2FBKjKnE2T9J4ZQeTw344Om7m5M0LMNJMqxoXtl4X%2B7ukymN9WCWniBZI3K5rqkboM9frH9IfXaH4ygGy6q2DZrc5Nvz44AXXHnafo7oJDttf6e4b9CCEcLx%2FAi91nAVs1hk%2FJWkjxV%2BanVTGcl2en48w5sXswwY6pgFPNrNkk2mS3a3alY3vtCDV9myBZSnqGmhg%2Fo54yNYxZu8ms34dx4m%2BZEgxaFgTaErRybteJNWVtAtXRE0wczPM3gyeP9vV3OI9TigTMZPKrHDT9DtII4IX4b2d696yctf58QAMb%2FczsTDsjdzeFBK9GTvm%2F34Hzoq7V6OKu3OXGcCpFxZtLMEZR%2BHBJHm1V1RPDxPwR7JJ6xnIFZQ4HRt%2BVa8Upw82&X-Amz-Signature=99b79b39d3e124b664073588369fd44f2bfd99683f05d9fbd253258cc7d7c61d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQKSQRXU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGe8o0dDrYJwAv9oGGF8G%2BvRzrh%2FsLGaVbHHFFsj6m%2BjAiBCjNBnV%2Bx%2BDDyRfVs7pOgoeZU%2BZiv%2FeKbviFjZlBHMJyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTW7mRdry%2FEp%2BdLknKtwDYzAcqxPQLUktwi0cCtDWdJ88Orx1x%2BXRoU70CFrOok%2Bjj6SIYWtiSEfqTYoOdvsVfx2uBdcd3dze1GB3pptcIUveAgZwSXVYp7Xip4ZfP00tePy7aEjPOkZ5S05bgwJC%2BcpKc3s3g9Ed7Rob5o6MGzSJrAuvVko8iY4QhhsiPTU6RMGWjqxzeHbagor7vJqJMuGJ3RqYJK%2FlCDOteUPfgEp5A1%2B5LpcrlE3L2riOIhnI8TM3HoRtFXCjz3Ezc9Ah1oBFUt7ultsO0wFCVBZjzbZ2CMyZvZLxVehVx9kJWyp604MbJDUvKtlyodUYyhd7IvtzxHMaRDlutg%2B5rkKcuiV72U57vt%2BlYDx40a40bZV1pZRDUP68oJSkgYCninBRAHq3XMVhA4fYm%2BWQHP3WfgXVlIWizB5fdR7IdNoDtNbz6ZVbkN42rDomPiZJBCEjcxPpDyg1XNJIBj7MD2ddyiTg6RE%2Bb88gE1PG%2FBKjKnE2T9J4ZQeTw344Om7m5M0LMNJMqxoXtl4X%2B7ukymN9WCWniBZI3K5rqkboM9frH9IfXaH4ygGy6q2DZrc5Nvz44AXXHnafo7oJDttf6e4b9CCEcLx%2FAi91nAVs1hk%2FJWkjxV%2BanVTGcl2en48w5sXswwY6pgFPNrNkk2mS3a3alY3vtCDV9myBZSnqGmhg%2Fo54yNYxZu8ms34dx4m%2BZEgxaFgTaErRybteJNWVtAtXRE0wczPM3gyeP9vV3OI9TigTMZPKrHDT9DtII4IX4b2d696yctf58QAMb%2FczsTDsjdzeFBK9GTvm%2F34Hzoq7V6OKu3OXGcCpFxZtLMEZR%2BHBJHm1V1RPDxPwR7JJ6xnIFZQ4HRt%2BVa8Upw82&X-Amz-Signature=e787df2a7932818c6ab579e9d619e6f3844ad48746e89d93b2e6a2c338e64bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LJAJN6I%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1YWdQFRPc6RuuFI%2F%2FmBpPx3phv9LH6Tk0duzwhf%2BTrwIgHcNwrFPbHonkrCzSDZtIgHLhtG5KynP%2FKgOY0Z37qoMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBVY9YZDt7CuHhVSyrcA01%2Fc4%2Frjr6iVgNY7KYggocX98HphTsnpuxng4qJnZDC6C%2BlkKVF0lfNMk3uPklRQpAO3HoJ4EseluySrAZH%2FM78e0WunlSFgsjjvJ%2F4SveRbUvmKZMr2rvCbJpsmXTQqNuCiSvlaprI%2B25AJrdhETTfs%2BogI8jhy%2BPUeFMqax5uJVsiqA8G4zwkU%2Beh2DdBOl36SP79X0GK%2FOWzpoJBENbs9Opq8qJ5c8VPqW41L8vsDSoHH6dZmA3UAN1OGfg14yMFanqhHjTUL9jLh9xJ%2Fkqf4a3BfVsD1XAxjn4pKSYDkcXlS5ioAubdzicpov%2FI%2BTA3Uj1AJ2BSuHIy2pEp3z288%2BE0YqXlSr0%2FzizAE6%2B%2BoHxtoiPhYmdl7gkEyX7QPWqhWqUD9rdB8fN0%2BcIEOkMjU1r2aI8ZkZjDv0ThVB3KohCRGnfTum3H2ixLChNM%2BfuxNMKNdMRN7fpmV7IE%2BojAuP4YayklKzOH1VfmAFIgxVOCP1hmX%2FTHx%2BnZgLxVSD7ISjg8Q7XYASd6ZadrfIXytN1t%2BuWuF64l1mBAlDXAxtTRO42jxtdPOxLop07KoHSDzE9oQd1d%2B%2BswpUoW6XzZj89e3PCfZo6dyqqLWWXqECWD9LYJGapNGcG8MPfF7MMGOqUBOXd8Q2MvRuyg5%2FdYs9cofDgRnlyoRN%2BzSVctZSlNXCjKc5Nn1MwfwE1VKvfSU%2FQDmQ3lR2xH8orfdTZtBi5lE7pfsE7WbQBmkLwM0hrPRx7K6aovFZ3LKs4BzBlLypEPYvgCwjEXJwxhdcL%2FnSxyMb2nGIfK7KBJ4Zug4jU2uqtStIWsRARUTPGVsCC%2BoXpA%2FAvfrhTXVoKs3QIq3L640qDKuzgX&X-Amz-Signature=e8958a52e611cf5316bdac293cc20564ac94ee955571069ca380eb5d192745c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R2MJTFD%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T091014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnXIuznmjw%2BU8GzSgH2dfiBqgNJEHFxwT%2FlSgKY3vcbgIgN1RLX3GR1M5BLDRXbt0Bqn8Q%2BQR943WhXhUpFMLEnMQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1HBraD4N%2Fka8QLmCrcA7NZTti5yRwGAMAhXTurkZo2MWATCGxhuobNpw%2Fg78uVXBFLPfTlqmsc6mmBeuADdKAv5R0gLKWtF%2BJxtogT%2B3QQ7HJ8LPvQW4qjIMHGW1B8R%2Bo0hP2gX1ZS3YL70XDr2wYjY%2FVUhGwj1L6mbZWT9vcoUt8ViWMDamxEwgn03vttxOBY3FKiUMfELisRby9dyNzs6tIGio0qJpCbEL%2ByqbC3RauPCrPBWDknpJYDKTFmp7zvL8BvL1Q4iQ%2BrVaN5Xq7Z48aX1%2Ft6ECT2A%2F%2BEgJqaJhhP9awZzfYhKlAXSfr0ZbI25VfUEDfDGhCDR0IOY6lLdWDwlCQ%2BLj6%2FT6FuQQ2QYc9nuxH4qH6qgzRgGk5U3%2BbAHMwXA%2BYL%2BkONhbtU%2B%2BptnxzvUdIasJsuxhV9C25jwXFgIfesy%2B%2FBt%2FFDtn%2BtyhqZ4sqAZCSsh8BewISQ6qRfO7Ps%2BequV%2FoL06AYlUo%2B%2BSi5W7ZullwgFQK80lcDLh%2FXWMZIur%2FqAjpiCtd5OK5I6di8IJ1gG4tmpYNM0LCkDY7GAQEpwMfeeGYcLCB758Q3ced9k%2B8Y2f25gMnHd0VutkiiwFesuTO9NM5d01LH0B%2B%2F1yyhB4aHKsVC2IK1jmO4oF9Va1xxFN1OMNLF7MMGOqUBZViVPho0JUYsNxwjMGqhOuzgUGm6FQs6Y0LVfMO4zvQLC5hFTg%2Bvk9tCSPRHQdgjZxOfd0FjXE0ZB5zebgP1RsmJvDhGl5dGrlbCY3T0xXGUKS62PXKyxyN%2BytYySxAbJ1Tbu1MvurdfOCJPvl5WBwRjFS0DNQBMBC5HeRtZ7CJ8u9uD%2FpPfYRdRNj8dnQ7oBcNVXug%2F3OjUbBE5F6g%2BQPPOERaj&X-Amz-Signature=3457aaa88ece86345632da495b456679054eeaea6cb22b4bdf6d974c8ead4bae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQKSQRXU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGe8o0dDrYJwAv9oGGF8G%2BvRzrh%2FsLGaVbHHFFsj6m%2BjAiBCjNBnV%2Bx%2BDDyRfVs7pOgoeZU%2BZiv%2FeKbviFjZlBHMJyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTW7mRdry%2FEp%2BdLknKtwDYzAcqxPQLUktwi0cCtDWdJ88Orx1x%2BXRoU70CFrOok%2Bjj6SIYWtiSEfqTYoOdvsVfx2uBdcd3dze1GB3pptcIUveAgZwSXVYp7Xip4ZfP00tePy7aEjPOkZ5S05bgwJC%2BcpKc3s3g9Ed7Rob5o6MGzSJrAuvVko8iY4QhhsiPTU6RMGWjqxzeHbagor7vJqJMuGJ3RqYJK%2FlCDOteUPfgEp5A1%2B5LpcrlE3L2riOIhnI8TM3HoRtFXCjz3Ezc9Ah1oBFUt7ultsO0wFCVBZjzbZ2CMyZvZLxVehVx9kJWyp604MbJDUvKtlyodUYyhd7IvtzxHMaRDlutg%2B5rkKcuiV72U57vt%2BlYDx40a40bZV1pZRDUP68oJSkgYCninBRAHq3XMVhA4fYm%2BWQHP3WfgXVlIWizB5fdR7IdNoDtNbz6ZVbkN42rDomPiZJBCEjcxPpDyg1XNJIBj7MD2ddyiTg6RE%2Bb88gE1PG%2FBKjKnE2T9J4ZQeTw344Om7m5M0LMNJMqxoXtl4X%2B7ukymN9WCWniBZI3K5rqkboM9frH9IfXaH4ygGy6q2DZrc5Nvz44AXXHnafo7oJDttf6e4b9CCEcLx%2FAi91nAVs1hk%2FJWkjxV%2BanVTGcl2en48w5sXswwY6pgFPNrNkk2mS3a3alY3vtCDV9myBZSnqGmhg%2Fo54yNYxZu8ms34dx4m%2BZEgxaFgTaErRybteJNWVtAtXRE0wczPM3gyeP9vV3OI9TigTMZPKrHDT9DtII4IX4b2d696yctf58QAMb%2FczsTDsjdzeFBK9GTvm%2F34Hzoq7V6OKu3OXGcCpFxZtLMEZR%2BHBJHm1V1RPDxPwR7JJ6xnIFZQ4HRt%2BVa8Upw82&X-Amz-Signature=4be829c42d9fc37b7d0ac555cfcb74daff1747ad3f7d1756633b934764252920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
