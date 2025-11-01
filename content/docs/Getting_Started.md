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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQCTREI%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCQ2%2F1VXjnd6CI5ZPMZmPBnhcv11h0wBHG1kEIj%2BnyF4wIhALRn8VC%2B32WGyPzYC6ydYi1UwEptLPS7%2FFlJU6f11hOtKv8DCCAQABoMNjM3NDIzMTgzODA1IgxWCjhIJ1eO7My%2Be1wq3APvET%2FcxHW9dKNC2fys4PXuSd5GtU%2BdW1F%2FCiOZK3eGRA39WUWhUgpCLTNBV92z34E54hneN68J4u%2BNCmg%2BLYY1oE1QbNW675fn1GgKVXC04mkzvoArQclcdPMWyLLnua0SNbxaplD%2BKuXP4hBPHL2WcwavkWxmE9kxR%2F8oVW4aM%2BdcQmnnaVyDqDSu8n6obk8VSG%2Besig8o0skvdou%2BwEGFMS05QSk8B%2F9thI%2Fuha%2BqbcdJbOIoOySrt0ZboJUNrriJNhhgggR%2B63g6FdUBvQLpQG0bdZ440UC3Bn6aWCEG1eZMMXBOTYByv7Yv3bqG9zsIlAf%2Bbard%2FTpW2dey8zGmqjM%2F8sH%2F2G7vxFv%2FayOkb2Ogjf2R4j6PEdllY9%2B5LXdTXb73X1kys%2BemsiEZvu0ul%2Fxsl2Kr6KEwPZn5M8kZ6WWPdUkVDYpQ2hKAHnh3fo4Iyd2EH9vj%2FtXxbgQozlyXwB7vXrazQ%2B2epwut08wz2DL%2FptXpOWuoU09fDxYtyo2vQYm1rGS%2FHDl4H2zISQmQpMVF%2BNjMkffPoNIFBIpAQwBbN%2BJezvFaf3s2q5wS5%2BpmPq1RtlF4JE3OtGgxEFzaJ5brotqO2JbEaOyZ0ekqABail%2BaWZKteuubMDD8%2BpTIBjqkAb2g0AKkNT0pbrp19s%2F7fp0nQ5qowAl27vMMPw84dTZmCDeGpwZT98fSmbeqhtvs1KLJIb1xsNkWSenE%2BeXyQd%2FCg8K1%2Fy1%2FLXXK1SfX4iOMzM9RRi7LecbJ7dNN%2FhwV58KSFlg288E%2BKAmL13OF0D8lewk05ckbSTgN%2Feew1WlvFfLJl0O%2Fw%2F7R9GG3iSjvaqODSEZfoReg8cuIm9E1odVZ0gpx&X-Amz-Signature=c21873d6653e5d6378a80cc97e591c6ac0f9c80ba8324372153e2c77c37fb04b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQCTREI%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCQ2%2F1VXjnd6CI5ZPMZmPBnhcv11h0wBHG1kEIj%2BnyF4wIhALRn8VC%2B32WGyPzYC6ydYi1UwEptLPS7%2FFlJU6f11hOtKv8DCCAQABoMNjM3NDIzMTgzODA1IgxWCjhIJ1eO7My%2Be1wq3APvET%2FcxHW9dKNC2fys4PXuSd5GtU%2BdW1F%2FCiOZK3eGRA39WUWhUgpCLTNBV92z34E54hneN68J4u%2BNCmg%2BLYY1oE1QbNW675fn1GgKVXC04mkzvoArQclcdPMWyLLnua0SNbxaplD%2BKuXP4hBPHL2WcwavkWxmE9kxR%2F8oVW4aM%2BdcQmnnaVyDqDSu8n6obk8VSG%2Besig8o0skvdou%2BwEGFMS05QSk8B%2F9thI%2Fuha%2BqbcdJbOIoOySrt0ZboJUNrriJNhhgggR%2B63g6FdUBvQLpQG0bdZ440UC3Bn6aWCEG1eZMMXBOTYByv7Yv3bqG9zsIlAf%2Bbard%2FTpW2dey8zGmqjM%2F8sH%2F2G7vxFv%2FayOkb2Ogjf2R4j6PEdllY9%2B5LXdTXb73X1kys%2BemsiEZvu0ul%2Fxsl2Kr6KEwPZn5M8kZ6WWPdUkVDYpQ2hKAHnh3fo4Iyd2EH9vj%2FtXxbgQozlyXwB7vXrazQ%2B2epwut08wz2DL%2FptXpOWuoU09fDxYtyo2vQYm1rGS%2FHDl4H2zISQmQpMVF%2BNjMkffPoNIFBIpAQwBbN%2BJezvFaf3s2q5wS5%2BpmPq1RtlF4JE3OtGgxEFzaJ5brotqO2JbEaOyZ0ekqABail%2BaWZKteuubMDD8%2BpTIBjqkAb2g0AKkNT0pbrp19s%2F7fp0nQ5qowAl27vMMPw84dTZmCDeGpwZT98fSmbeqhtvs1KLJIb1xsNkWSenE%2BeXyQd%2FCg8K1%2Fy1%2FLXXK1SfX4iOMzM9RRi7LecbJ7dNN%2FhwV58KSFlg288E%2BKAmL13OF0D8lewk05ckbSTgN%2Feew1WlvFfLJl0O%2Fw%2F7R9GG3iSjvaqODSEZfoReg8cuIm9E1odVZ0gpx&X-Amz-Signature=0d298e8a3c7f4a78409004a5865bb6b700c0c579df4c43b54c91026f0e18a08c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQCTREI%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCQ2%2F1VXjnd6CI5ZPMZmPBnhcv11h0wBHG1kEIj%2BnyF4wIhALRn8VC%2B32WGyPzYC6ydYi1UwEptLPS7%2FFlJU6f11hOtKv8DCCAQABoMNjM3NDIzMTgzODA1IgxWCjhIJ1eO7My%2Be1wq3APvET%2FcxHW9dKNC2fys4PXuSd5GtU%2BdW1F%2FCiOZK3eGRA39WUWhUgpCLTNBV92z34E54hneN68J4u%2BNCmg%2BLYY1oE1QbNW675fn1GgKVXC04mkzvoArQclcdPMWyLLnua0SNbxaplD%2BKuXP4hBPHL2WcwavkWxmE9kxR%2F8oVW4aM%2BdcQmnnaVyDqDSu8n6obk8VSG%2Besig8o0skvdou%2BwEGFMS05QSk8B%2F9thI%2Fuha%2BqbcdJbOIoOySrt0ZboJUNrriJNhhgggR%2B63g6FdUBvQLpQG0bdZ440UC3Bn6aWCEG1eZMMXBOTYByv7Yv3bqG9zsIlAf%2Bbard%2FTpW2dey8zGmqjM%2F8sH%2F2G7vxFv%2FayOkb2Ogjf2R4j6PEdllY9%2B5LXdTXb73X1kys%2BemsiEZvu0ul%2Fxsl2Kr6KEwPZn5M8kZ6WWPdUkVDYpQ2hKAHnh3fo4Iyd2EH9vj%2FtXxbgQozlyXwB7vXrazQ%2B2epwut08wz2DL%2FptXpOWuoU09fDxYtyo2vQYm1rGS%2FHDl4H2zISQmQpMVF%2BNjMkffPoNIFBIpAQwBbN%2BJezvFaf3s2q5wS5%2BpmPq1RtlF4JE3OtGgxEFzaJ5brotqO2JbEaOyZ0ekqABail%2BaWZKteuubMDD8%2BpTIBjqkAb2g0AKkNT0pbrp19s%2F7fp0nQ5qowAl27vMMPw84dTZmCDeGpwZT98fSmbeqhtvs1KLJIb1xsNkWSenE%2BeXyQd%2FCg8K1%2Fy1%2FLXXK1SfX4iOMzM9RRi7LecbJ7dNN%2FhwV58KSFlg288E%2BKAmL13OF0D8lewk05ckbSTgN%2Feew1WlvFfLJl0O%2Fw%2F7R9GG3iSjvaqODSEZfoReg8cuIm9E1odVZ0gpx&X-Amz-Signature=e38dd0af78e55f34235e73977f9f3abeace338110a0765a711dcbe0867ec5904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ATBUKTW%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIDfMlchJA9sS2FmGkh3EpG9PqL8V%2BaDY619jknyaz2QSAiEAiJ4hPhr5eXiAhp%2BCVtc1qy0WHMvlALumHhUrEDjwHL8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOWbdcQ0nMXnHSl2GSrcA9677lAqX4gTXixVnH9tl9BmnygToFrcXZh5qACdOZwZGeH7JsiKX0OBaDkVQ%2FD%2BrwSZ0ZuUIariq8DqD7qV326UGEIYNfzoPQwT6LdH%2FEQUxPla4xcI12lo58tNiGCia7kOZFtTIqKitssywVjw24RiLvbjc46K6s62Z8c6%2BwDsdVR8u9SAl8%2FUSbybNG20u%2BjUOEb%2B6Lp91eFFdtZQcKRxP6pdIxuFvnu0K%2BK7tApyt5C24UWpitv6MOdfFhkGs7P%2F3nlUf7e7OVXXVC%2BpB9AZ4pITPKbeR5Im8kBFbGo%2BKFkFti6xAmfy4PIkV9jU%2B1GUTZjRIwkidIwNdoJYtZQ4OaSJ0kMFx3nmMX2BR4ma4q%2B30%2BAErGD38lp8%2BzS9Ti4AmcuATW6seQQi4rFEEc%2BWgh8BP9vJjeRB2Ikotpxl%2FKwqId7LWo2MScY6ONNmrBx2Rgkp6huCufp8Zg%2Fpseb%2F1NAY%2F2JNfLxI8Ky0rOk%2B4hzWQsqRgdRLv3DP78Z%2F5UUeXgmWt2HDaqTWSJQzNpJgY45WwVRk4SZ8l5ZDZ6%2BibF17KXcrmKLjlfFAZ0b8orfPQ6mdSJtwEDd%2BiH5DF5RpJtaocFW36Gv345CvGnsjXaR3%2FpzQgfYaeceNMMO0lcgGOqUB%2B0td4z06ZRdKyqcrX2FCh7m5%2BeHKcx8fUiJGnX7cKMf6NQ%2BXqRsDPl1f20UOKKJYg6a%2Bcu3oTG4Yw9R5q7vMINKO0nYs86lah%2F1GZAkmW%2B02oGZaSFoyJe%2B2tFWOm6HwM0DRxE%2BGAuOXzrdKGDDpOq31hqp8%2BRoiaZCPg77GQ6N6VDi6fUheRb8aS1GyQSWHXCjK9IM53AAYRY4qUK28wqtXchT8&X-Amz-Signature=e7a80ca8d34318e96995ea0466d071b677918c848662ffb6d4044941fd1f21fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFQ7CITQ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQChnsKMFdnMD5XWaLNPUC2kUn4Zfuq0Tx0jjqSBSrsjYwIgL7qXI5wQriPaCXXdiY08YyOxMa2Zu62XK16l5KuHTKIq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMGpvXypKiLd3waroircA2uhwSAP1d%2B4F4umVn12avIvU1nqXC8dlwtKG3pBFJfLINUilvOemhWA%2FCeMgDFl1zjELsAAAIJXvEkJAoORjyxqNReiGqnh73kmTX4ZMFE%2BNA0S363qmbYsteUsfpvH%2BDAtgVciniewAGBNgwUerGz%2BFhJWR4%2B53%2BhAGQrtl2ZXWLvIZiIHVPJ%2Bg738gTYr0ALuY49eGO2ZlH46V6F43KIIZidC%2BPIDFhcKKUrKJ5r3dnk%2BuKsY2cocQXukvuh%2BW5zcSN9%2BpgbUzX1PCL3MDigOl3sVXnFzBiGoTuySKp8Lp3ipZR%2FFGw2gEvpsRdvMr02gCpEnTaot8lh%2F0HYrxIdd00h8xUtU9KIg1%2B0UnGZOB2tOTCZaSGQKrRwLCnvIhiww0x8oQnYI%2F3ztD5nNoBRUtgmofCKMsUEkxNi3iYcVWt87sUzvB6WRUiCRq3aaR1K1MiJt5U9XAcCJpLeqQOuYgaM%2B0peglWLC6DZ3O4Lmel18y4I9lzooi5lkSpA2NjlTlwUMlVdIE91DOhf3vVZeTzW7tAsE69eKvUZFy4pdSB%2FqJXnY4YPZzAKF7rz4MEkE%2FPFGshgmPqmAQNNcPIivtXbUPYmN64u2sf39HnZAsbyxsIR%2BGVurVPm%2FMOL6lMgGOqUBshIaE%2FD8zkE409smccb1lNQnM3oP%2Ft%2B3EYVXIb8Oo5if6ehMOjv9OeDsM3Smlk4uvh2TxR2DyfsdrqlRzaROxiZDlTx8aftMyW9nqhKGga7kPeR%2BMJYAvY4%2Feg2etyOsTgTK3ZlvYqZzceT7zNq%2BDgFf0pESJv9sdYHuHshE87RXCN0IIoWs9Qhnc%2FXc24%2BGzfFk59lrMoPUbjcxnB%2BLlpu7uzrd&X-Amz-Signature=782de663479960a642549061b63b9528c1b0258e279574a1c2c238ebb438e640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQCTREI%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCQ2%2F1VXjnd6CI5ZPMZmPBnhcv11h0wBHG1kEIj%2BnyF4wIhALRn8VC%2B32WGyPzYC6ydYi1UwEptLPS7%2FFlJU6f11hOtKv8DCCAQABoMNjM3NDIzMTgzODA1IgxWCjhIJ1eO7My%2Be1wq3APvET%2FcxHW9dKNC2fys4PXuSd5GtU%2BdW1F%2FCiOZK3eGRA39WUWhUgpCLTNBV92z34E54hneN68J4u%2BNCmg%2BLYY1oE1QbNW675fn1GgKVXC04mkzvoArQclcdPMWyLLnua0SNbxaplD%2BKuXP4hBPHL2WcwavkWxmE9kxR%2F8oVW4aM%2BdcQmnnaVyDqDSu8n6obk8VSG%2Besig8o0skvdou%2BwEGFMS05QSk8B%2F9thI%2Fuha%2BqbcdJbOIoOySrt0ZboJUNrriJNhhgggR%2B63g6FdUBvQLpQG0bdZ440UC3Bn6aWCEG1eZMMXBOTYByv7Yv3bqG9zsIlAf%2Bbard%2FTpW2dey8zGmqjM%2F8sH%2F2G7vxFv%2FayOkb2Ogjf2R4j6PEdllY9%2B5LXdTXb73X1kys%2BemsiEZvu0ul%2Fxsl2Kr6KEwPZn5M8kZ6WWPdUkVDYpQ2hKAHnh3fo4Iyd2EH9vj%2FtXxbgQozlyXwB7vXrazQ%2B2epwut08wz2DL%2FptXpOWuoU09fDxYtyo2vQYm1rGS%2FHDl4H2zISQmQpMVF%2BNjMkffPoNIFBIpAQwBbN%2BJezvFaf3s2q5wS5%2BpmPq1RtlF4JE3OtGgxEFzaJ5brotqO2JbEaOyZ0ekqABail%2BaWZKteuubMDD8%2BpTIBjqkAb2g0AKkNT0pbrp19s%2F7fp0nQ5qowAl27vMMPw84dTZmCDeGpwZT98fSmbeqhtvs1KLJIb1xsNkWSenE%2BeXyQd%2FCg8K1%2Fy1%2FLXXK1SfX4iOMzM9RRi7LecbJ7dNN%2FhwV58KSFlg288E%2BKAmL13OF0D8lewk05ckbSTgN%2Feew1WlvFfLJl0O%2Fw%2F7R9GG3iSjvaqODSEZfoReg8cuIm9E1odVZ0gpx&X-Amz-Signature=f66185bef8355c485209f144acce7dc56bcbeb7a9ab60cf60afe9fbf967eb749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
