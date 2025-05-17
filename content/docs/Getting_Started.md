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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STO4A4QC%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9KuQCMLppOjArFFONw3jnBUS9VDtrmCBqNlWjWpm6JAIgB6P6rj1LhhNlH%2FAmybUbhw27TY1jHLYqxk%2BIwCLR1zYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJMFyGxoZo%2BoQ%2Ff8ySrcA6JBttImBunA2NT0tGJQKNCGZ6UB%2FCvvOVeR%2BUoEzsyeFUKQ660wzv68WHTo8Y%2Bv5ZZ5%2BWoLiHbKn6iM44%2BZF7SWgo2FxCMvk%2FG4eOKc1o%2BnynrPXZvP6zNGwoSIDIj%2BClfJhT7pHHakRVadwPVwUfqXxcWb7fuEeRg5cOpcJFtROXfKYtZVjaoDa6reSCTFnONrRqtzvr4FFOqOvOM%2FWqzSrA2pqtLOcfoaf%2FJOFa2%2FqnbDm993xbIE7E%2FhcfzWoJbFkxGXQlgGn%2FCxf6JzQW3whtxT2dlk9RzCK0kYq93eby2lFtSiYvgLo6ilQ%2FsThQ8UB9QQ5bqgIgRUai%2B36hVirwenEj08kmnJ4NF1qGsI%2BokxJ77h8I7Ze5fm%2FpGJL4SngSQKOd6d6GlrVto%2BHF9X%2BhlqUr0YW7x%2BlfTi6LgxltHipYKofkdJOx5Q%2F8YutL2yz1iPKPfNOTUkC9s%2B3u5bgTSKlE4avOkTAivprl1pmErObgneutMjFlhYhDiF4f1OqakK2mkc1kd698W7GBd8%2FuhXn8tFSvhpoHdTi8SWy0P5733sFV1d4I6WiX482FvKURLTLT%2F%2Fwm7%2BAIl304P%2BGs92knlI6oA0ec2fjn5YDFSi8%2B%2F4X0i9tvOPMPHDoMEGOqUBKTP1%2FIwX0P1BgHXsw3UuhSOQiTlqyZ2VoFpVYvv1swr3YUW27zp8dd9nI0lxKb1qy%2BcDitwSwKRhZMy3ISTyuUbj2hCHruUbW1QtdHM0XEXFFNhUprJrzKFCbNK9ACdPoNf86oXSYimU4E%2Fko%2FX5xHcT0FvSeqv5AOurHLDwaucOLifV79S%2FHWnKW5L7b0%2F6hioz9OW1QCqQcXnJ5s9rUbnCqjXc&X-Amz-Signature=906be0a6f056394a9d4020cdc326d9f13fe923612fdc7b4742069c664792b564&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STO4A4QC%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9KuQCMLppOjArFFONw3jnBUS9VDtrmCBqNlWjWpm6JAIgB6P6rj1LhhNlH%2FAmybUbhw27TY1jHLYqxk%2BIwCLR1zYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJMFyGxoZo%2BoQ%2Ff8ySrcA6JBttImBunA2NT0tGJQKNCGZ6UB%2FCvvOVeR%2BUoEzsyeFUKQ660wzv68WHTo8Y%2Bv5ZZ5%2BWoLiHbKn6iM44%2BZF7SWgo2FxCMvk%2FG4eOKc1o%2BnynrPXZvP6zNGwoSIDIj%2BClfJhT7pHHakRVadwPVwUfqXxcWb7fuEeRg5cOpcJFtROXfKYtZVjaoDa6reSCTFnONrRqtzvr4FFOqOvOM%2FWqzSrA2pqtLOcfoaf%2FJOFa2%2FqnbDm993xbIE7E%2FhcfzWoJbFkxGXQlgGn%2FCxf6JzQW3whtxT2dlk9RzCK0kYq93eby2lFtSiYvgLo6ilQ%2FsThQ8UB9QQ5bqgIgRUai%2B36hVirwenEj08kmnJ4NF1qGsI%2BokxJ77h8I7Ze5fm%2FpGJL4SngSQKOd6d6GlrVto%2BHF9X%2BhlqUr0YW7x%2BlfTi6LgxltHipYKofkdJOx5Q%2F8YutL2yz1iPKPfNOTUkC9s%2B3u5bgTSKlE4avOkTAivprl1pmErObgneutMjFlhYhDiF4f1OqakK2mkc1kd698W7GBd8%2FuhXn8tFSvhpoHdTi8SWy0P5733sFV1d4I6WiX482FvKURLTLT%2F%2Fwm7%2BAIl304P%2BGs92knlI6oA0ec2fjn5YDFSi8%2B%2F4X0i9tvOPMPHDoMEGOqUBKTP1%2FIwX0P1BgHXsw3UuhSOQiTlqyZ2VoFpVYvv1swr3YUW27zp8dd9nI0lxKb1qy%2BcDitwSwKRhZMy3ISTyuUbj2hCHruUbW1QtdHM0XEXFFNhUprJrzKFCbNK9ACdPoNf86oXSYimU4E%2Fko%2FX5xHcT0FvSeqv5AOurHLDwaucOLifV79S%2FHWnKW5L7b0%2F6hioz9OW1QCqQcXnJ5s9rUbnCqjXc&X-Amz-Signature=08e559191b2c51fe81ee3dbb32fb645849c4c8330380bc226df358b7a5a6aca6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STO4A4QC%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9KuQCMLppOjArFFONw3jnBUS9VDtrmCBqNlWjWpm6JAIgB6P6rj1LhhNlH%2FAmybUbhw27TY1jHLYqxk%2BIwCLR1zYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJMFyGxoZo%2BoQ%2Ff8ySrcA6JBttImBunA2NT0tGJQKNCGZ6UB%2FCvvOVeR%2BUoEzsyeFUKQ660wzv68WHTo8Y%2Bv5ZZ5%2BWoLiHbKn6iM44%2BZF7SWgo2FxCMvk%2FG4eOKc1o%2BnynrPXZvP6zNGwoSIDIj%2BClfJhT7pHHakRVadwPVwUfqXxcWb7fuEeRg5cOpcJFtROXfKYtZVjaoDa6reSCTFnONrRqtzvr4FFOqOvOM%2FWqzSrA2pqtLOcfoaf%2FJOFa2%2FqnbDm993xbIE7E%2FhcfzWoJbFkxGXQlgGn%2FCxf6JzQW3whtxT2dlk9RzCK0kYq93eby2lFtSiYvgLo6ilQ%2FsThQ8UB9QQ5bqgIgRUai%2B36hVirwenEj08kmnJ4NF1qGsI%2BokxJ77h8I7Ze5fm%2FpGJL4SngSQKOd6d6GlrVto%2BHF9X%2BhlqUr0YW7x%2BlfTi6LgxltHipYKofkdJOx5Q%2F8YutL2yz1iPKPfNOTUkC9s%2B3u5bgTSKlE4avOkTAivprl1pmErObgneutMjFlhYhDiF4f1OqakK2mkc1kd698W7GBd8%2FuhXn8tFSvhpoHdTi8SWy0P5733sFV1d4I6WiX482FvKURLTLT%2F%2Fwm7%2BAIl304P%2BGs92knlI6oA0ec2fjn5YDFSi8%2B%2F4X0i9tvOPMPHDoMEGOqUBKTP1%2FIwX0P1BgHXsw3UuhSOQiTlqyZ2VoFpVYvv1swr3YUW27zp8dd9nI0lxKb1qy%2BcDitwSwKRhZMy3ISTyuUbj2hCHruUbW1QtdHM0XEXFFNhUprJrzKFCbNK9ACdPoNf86oXSYimU4E%2Fko%2FX5xHcT0FvSeqv5AOurHLDwaucOLifV79S%2FHWnKW5L7b0%2F6hioz9OW1QCqQcXnJ5s9rUbnCqjXc&X-Amz-Signature=48c1ed303e0162980b6ce1a5604433dddf693302370ffe9ae69507bd6055df2f&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YLOLNJO%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChWIcORML01A92nvOU7iMuWKnXsY0LlLPmWDp8pTPh7QIgO6haZn%2FyKF092vpRY9fi9uXGvQkb1%2ByAyKrdhUU3Xqgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBMMYNERION4utAdaCrcA2j94gxu40vA7ULWRzFGAZjee9EVuamkZtKnTD2Ab7nGhP8IvWP%2FtqL%2Bgg%2F3xRKYJsV1BpgojnztUMT6aCdbiTjocFv7dnfnBdpJgmsBKUXbIYmKwRvEkIsYknycEROrDDxVMccDhTcif6Jkdxfc1E71ryD5p7hs5eo3Mua%2FDrPNUzrGnBmi7nuyMYmNWR%2BvbX6TCOLM%2Fl33S%2FAub9GPSPbJx%2F9reil8xuVE7Ur6dCOuj9AmOrIboPolBqFQlXAxTSCFUiyGfnEHp9LyK%2FpJpjbWXUxph5NzVY%2FXwpXj5IVxXB0eGKVpDzHFmgfISIXjN7zB0GdFDpSVMDfdOuyD4BGhDpoJ3lOcp924O17%2BLKwuNzKbpYrlEHkGrr9ie%2BxV9nRFJt5A7S%2BmOvBwmB%2BNbhQgrSexG03%2FyyLMhgDQDu8c9mdj%2FqUpqGgvQzTGffFUnN5CqgZjIawqd15Q0nHKWWFvont7XQgDrvDFSF2tMzCea60DSBVSurNjvuqtz7kFYxtqCXUVN7Jh85AAmg507doLjxu2pmhr0RmjHOnrflGbvwcBVALEfuNz4H%2B0UAHDvxzw3IpTGlbatAJSZ4hg9pl2qR6SOFXbPtcOqgmYuuVRxFcHYFhUSWnFb0qhMPzDoMEGOqUB7b%2FV4s9uBKhYWHJrU9Lx%2BUZub4PI18%2FXGM3o0W8RtC0MXmOmxj85g2XAdweI2Xtv4ETL2N2y0DcI6fnFI6h7lU3X3xhw3A8kKiSPPiRgJNJ8EFQufHRxX55TgryhX%2BnzCrQdQ8UW5R7CrNwYNzuvcAt2gANc%2FFMr4UbAyUXlXI1NI3A4pi3VzV8tAjZDSQwfWy0LnEAbrmcPc%2FemZeIiHxF6BbIK&X-Amz-Signature=15b78c7e6b3c46e7290a222361f41056ca00a79b3cacf4dd0358d15770456d4b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VPNB466%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJK9N6SB8oexSs4Q%2BesSc4GBnA7Go3t8Gzak0b22ZBOwIgeaNgym6yOij0drrO35VDHO1oX1h6ERwaOPl7wzaKHscq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBXpewDAS9jf5GEfLircAw4CQXgsIIrYnJ2S3ChmGLbPUcM9Gvqvb7l9pwnOVCtfZRZriPlhjzEDVOkBVxXOCBl40NwqDuJU%2F3Ay1HfPFWawwQ268yMa4zJF0PSIuFfsCovESXCRt%2Fdq%2Fzke22%2F3QTJr8Zm2V1S12ZAK1APKqCCNEdDhauqTyDuLopsIyfG3P6gFHuKDuVrb6ps8eIs8Qw5jCI5awZy00aDj6%2B%2BGMlECezMAcldmavlbCQ3QYDV1X6hz3S28NZScFXbkhGoQcUwol4e%2FYm5hVFG6er4eJ9wMEMbqiAlZ1L%2Fkcyr42j5%2B5FEuC7sD%2B0vMhBS9jxHMYDZusQeNg98PpBDxxjuESSRiX%2FFB5KpObW5tiKaIa256pBN1Hf4eEITM0wMs4MR8wF6lxSwTv9MdOukEDg2H9%2FX1HCJxxLpSldAJypgc1paeuDM%2BgQCi%2BVGEK2Hny42lfjRbNGYDn%2BEABhu%2F4MIhIKkKufGVD%2BU3caymRQuLcvZrKb8%2Bw%2BUxqupZfb4lXyeNDTXqvN4%2Biz2CwkgBL%2BCaQxmRjQDzwtMvqxLgItmmVOJgH5LaAHpKTruK8M8MIreEVCg6lTJbrTB0y12Hba%2FbnDX8o1PILSJNPPxNo8C%2FqXUh3YzapIOyYExtmrYrMJzEoMEGOqUBRXynmpFsgpOSfXuaTSnU6Dytsft5cvfalNEZes47XFIbsw9xbP8rZNTf5TCucqEwbUIGkHFBCVFfwMDf0KJDE%2FRTci6%2BPLkOzDbsIebilhOkz64d2%2FDwUfRf5%2B%2BBDCo73MvAETzQvWJhVrd0z9Gw0JTMYXZSMk1%2FReppI6btiAW3UkrurEAoP2jctEWuycMxOAvCkwt8%2F88weIJ2upcWbaeJlcKl&X-Amz-Signature=a0cc1f654a01799092991bc8fb2b6806aaa418abbd7531f0a0e9b05813df1e93&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STO4A4QC%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9KuQCMLppOjArFFONw3jnBUS9VDtrmCBqNlWjWpm6JAIgB6P6rj1LhhNlH%2FAmybUbhw27TY1jHLYqxk%2BIwCLR1zYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJMFyGxoZo%2BoQ%2Ff8ySrcA6JBttImBunA2NT0tGJQKNCGZ6UB%2FCvvOVeR%2BUoEzsyeFUKQ660wzv68WHTo8Y%2Bv5ZZ5%2BWoLiHbKn6iM44%2BZF7SWgo2FxCMvk%2FG4eOKc1o%2BnynrPXZvP6zNGwoSIDIj%2BClfJhT7pHHakRVadwPVwUfqXxcWb7fuEeRg5cOpcJFtROXfKYtZVjaoDa6reSCTFnONrRqtzvr4FFOqOvOM%2FWqzSrA2pqtLOcfoaf%2FJOFa2%2FqnbDm993xbIE7E%2FhcfzWoJbFkxGXQlgGn%2FCxf6JzQW3whtxT2dlk9RzCK0kYq93eby2lFtSiYvgLo6ilQ%2FsThQ8UB9QQ5bqgIgRUai%2B36hVirwenEj08kmnJ4NF1qGsI%2BokxJ77h8I7Ze5fm%2FpGJL4SngSQKOd6d6GlrVto%2BHF9X%2BhlqUr0YW7x%2BlfTi6LgxltHipYKofkdJOx5Q%2F8YutL2yz1iPKPfNOTUkC9s%2B3u5bgTSKlE4avOkTAivprl1pmErObgneutMjFlhYhDiF4f1OqakK2mkc1kd698W7GBd8%2FuhXn8tFSvhpoHdTi8SWy0P5733sFV1d4I6WiX482FvKURLTLT%2F%2Fwm7%2BAIl304P%2BGs92knlI6oA0ec2fjn5YDFSi8%2B%2F4X0i9tvOPMPHDoMEGOqUBKTP1%2FIwX0P1BgHXsw3UuhSOQiTlqyZ2VoFpVYvv1swr3YUW27zp8dd9nI0lxKb1qy%2BcDitwSwKRhZMy3ISTyuUbj2hCHruUbW1QtdHM0XEXFFNhUprJrzKFCbNK9ACdPoNf86oXSYimU4E%2Fko%2FX5xHcT0FvSeqv5AOurHLDwaucOLifV79S%2FHWnKW5L7b0%2F6hioz9OW1QCqQcXnJ5s9rUbnCqjXc&X-Amz-Signature=3a0d4c7daa914a62935b89de4309061840feea8ef53aba24f8eb73181fd01a38&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
