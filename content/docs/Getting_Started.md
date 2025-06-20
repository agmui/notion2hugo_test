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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FAJPY5V%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxnedgANCEw7jGl0ZUF%2BnD3lhyDj5dv0swn5RbgJdtRwIgNqh0fYcj0KJcn2tZMcyJnuiLb0UVnTqNBhh2QWksungqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmII2o0HN5%2BPdsHFircA%2BlP8MQUk4pr8Wr9hrJmTFdLFjnMzDTAxtmK3R2Kf1aCGe4ltB04OtYQyunSZFFOf9VJoVFQFxFbxAROJYAy3MTOKJY5uQrbOojFxdVpUpmvcKUNp661W7MVdsW4GC6uhmYiaF3R6omEWde%2BugKej6X6Egi9uj%2BCV0wmx1XRN%2FhTBKjpZb6h%2FlVGSwRLteKQcW1oqNBkXfMkzYfgC5OK1svku6du4nlaaxG6qdOHhc8cgb78O5JDWM0xGH05BW2znhA8wkJ8A2mihdVvefxz1UXmot4fvu9yMaVM0DKl5Rswpxof63hcUNsvCicD15CTzfS4gP5WUojcM%2F69cQeCLoddyFJTEpigYn8H%2FzT22E%2BUtflRXIjQ2Mpl%2F1MpqmL3G1n7n%2FtpdKv9SeYCYRZdmamzdEaA8BKJBfuHD9C9QVYsHabFo2qo8LiOlx2SFujqgWsT0aQfQAVJ3c1y1KCK1lWhUEfVdRzA6n%2FjiORjmmPhCyDyGB%2Bhy0bnReFzRF3BmQu2PlbiyrArBASXX4rynomtHnCISiQksyKXXnTfYVjb1TSSHjYc5Ow%2FxNhQVrhBM6SW%2BMplx%2BNEI0utobgEYktd%2FJjoWF%2FvBvCmRdhjn%2BsL%2Bj%2FT5kq6Jc415jEiMNmy1sIGOqUBic1KGDEsDHPuh0gJhwL8O0JvsX0jq%2FY7t4dynuvQEA07TR3GAoOd0uLpYfv3wiJToV8VM0zDO0wNXBTsEmXRigVFAaaCvkqhhjgHGvwjlHt0Z017Xfx6XjpVYaGG9sh0cSH8t9C2qUxxVnPxKZnuT213OAXCqQK5gZBHvAS8OghF0b6TK9HvrJVV8TrCbW%2BTS6xL0%2FtzHpoKKYDOkdjR7FbiTjb2&X-Amz-Signature=f7608ef8574fa2506f607001e000a242d8afc9afd0f7e4d59680fa45e9a6ec11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FAJPY5V%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxnedgANCEw7jGl0ZUF%2BnD3lhyDj5dv0swn5RbgJdtRwIgNqh0fYcj0KJcn2tZMcyJnuiLb0UVnTqNBhh2QWksungqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmII2o0HN5%2BPdsHFircA%2BlP8MQUk4pr8Wr9hrJmTFdLFjnMzDTAxtmK3R2Kf1aCGe4ltB04OtYQyunSZFFOf9VJoVFQFxFbxAROJYAy3MTOKJY5uQrbOojFxdVpUpmvcKUNp661W7MVdsW4GC6uhmYiaF3R6omEWde%2BugKej6X6Egi9uj%2BCV0wmx1XRN%2FhTBKjpZb6h%2FlVGSwRLteKQcW1oqNBkXfMkzYfgC5OK1svku6du4nlaaxG6qdOHhc8cgb78O5JDWM0xGH05BW2znhA8wkJ8A2mihdVvefxz1UXmot4fvu9yMaVM0DKl5Rswpxof63hcUNsvCicD15CTzfS4gP5WUojcM%2F69cQeCLoddyFJTEpigYn8H%2FzT22E%2BUtflRXIjQ2Mpl%2F1MpqmL3G1n7n%2FtpdKv9SeYCYRZdmamzdEaA8BKJBfuHD9C9QVYsHabFo2qo8LiOlx2SFujqgWsT0aQfQAVJ3c1y1KCK1lWhUEfVdRzA6n%2FjiORjmmPhCyDyGB%2Bhy0bnReFzRF3BmQu2PlbiyrArBASXX4rynomtHnCISiQksyKXXnTfYVjb1TSSHjYc5Ow%2FxNhQVrhBM6SW%2BMplx%2BNEI0utobgEYktd%2FJjoWF%2FvBvCmRdhjn%2BsL%2Bj%2FT5kq6Jc415jEiMNmy1sIGOqUBic1KGDEsDHPuh0gJhwL8O0JvsX0jq%2FY7t4dynuvQEA07TR3GAoOd0uLpYfv3wiJToV8VM0zDO0wNXBTsEmXRigVFAaaCvkqhhjgHGvwjlHt0Z017Xfx6XjpVYaGG9sh0cSH8t9C2qUxxVnPxKZnuT213OAXCqQK5gZBHvAS8OghF0b6TK9HvrJVV8TrCbW%2BTS6xL0%2FtzHpoKKYDOkdjR7FbiTjb2&X-Amz-Signature=894267bf39e9c522a38a64d3ff208de0245618ca5405c5282829f5dc9ef72392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FAJPY5V%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxnedgANCEw7jGl0ZUF%2BnD3lhyDj5dv0swn5RbgJdtRwIgNqh0fYcj0KJcn2tZMcyJnuiLb0UVnTqNBhh2QWksungqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmII2o0HN5%2BPdsHFircA%2BlP8MQUk4pr8Wr9hrJmTFdLFjnMzDTAxtmK3R2Kf1aCGe4ltB04OtYQyunSZFFOf9VJoVFQFxFbxAROJYAy3MTOKJY5uQrbOojFxdVpUpmvcKUNp661W7MVdsW4GC6uhmYiaF3R6omEWde%2BugKej6X6Egi9uj%2BCV0wmx1XRN%2FhTBKjpZb6h%2FlVGSwRLteKQcW1oqNBkXfMkzYfgC5OK1svku6du4nlaaxG6qdOHhc8cgb78O5JDWM0xGH05BW2znhA8wkJ8A2mihdVvefxz1UXmot4fvu9yMaVM0DKl5Rswpxof63hcUNsvCicD15CTzfS4gP5WUojcM%2F69cQeCLoddyFJTEpigYn8H%2FzT22E%2BUtflRXIjQ2Mpl%2F1MpqmL3G1n7n%2FtpdKv9SeYCYRZdmamzdEaA8BKJBfuHD9C9QVYsHabFo2qo8LiOlx2SFujqgWsT0aQfQAVJ3c1y1KCK1lWhUEfVdRzA6n%2FjiORjmmPhCyDyGB%2Bhy0bnReFzRF3BmQu2PlbiyrArBASXX4rynomtHnCISiQksyKXXnTfYVjb1TSSHjYc5Ow%2FxNhQVrhBM6SW%2BMplx%2BNEI0utobgEYktd%2FJjoWF%2FvBvCmRdhjn%2BsL%2Bj%2FT5kq6Jc415jEiMNmy1sIGOqUBic1KGDEsDHPuh0gJhwL8O0JvsX0jq%2FY7t4dynuvQEA07TR3GAoOd0uLpYfv3wiJToV8VM0zDO0wNXBTsEmXRigVFAaaCvkqhhjgHGvwjlHt0Z017Xfx6XjpVYaGG9sh0cSH8t9C2qUxxVnPxKZnuT213OAXCqQK5gZBHvAS8OghF0b6TK9HvrJVV8TrCbW%2BTS6xL0%2FtzHpoKKYDOkdjR7FbiTjb2&X-Amz-Signature=767e70755b0994964b1507ab8fc89053f80129f2a02cd795592daa3a96f7e1f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LLKG5MC%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN%2BR0PVj64%2BWJ%2Fknddw6IF3MDV%2BtIRxfkkElJpw1N49wIgCKpCLEJFKfOt5gqYC9Ri02MhTMp9MCBDesUjO8LCBKAqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbxyYAxp4bF9NcFKircA40Tgy2Na6GuX4rB4opL%2BQ4dXWM99GOjHRAz9e74kIIG0D4sf0OILy%2FgKcpBU9NM%2FyW5JQn7wsWbIHiVwJpUjgHvU%2BIYsxv%2B01S%2FEWZHoBHfJHi1pF5RSNON9MO1Y29aGDfATd55K4SXvBiPzu3McEKMPxs6yHua6JfEalrhlA%2BoMpS7ECAnumxRKe3VcnnkCnwsIdSKa2BnKmM%2FaMmy6kRVGzOBn8O0g7sNoKHN%2F9UiK8hUUnqGCKbD8l0GVYAEkdihUNVQ1iMFvtU%2BkSURuSGojzzd95CiMzA%2F%2FLux%2FK77FiL8cyt3jqVX%2BzwF%2BhWeRhzkYkbD0KEdaTaWZ0kT06NsgSiZf9zYYUS80roOfdBpDA80i3Id1%2BLgal8x0Xt%2BlJNUBMxHrfi3tdKCf1WErwU74mIK9PULYm%2Fb%2BkduA7T7PoYFVW6qbGb%2B0Xv1EW91wsrytyX4WmUDvHm4%2BjThMayL6xyX0GysxLgc4WW4psyYQTwro0AsEpQCYJjI8xiwRQ03ZY8ye8j7sYdaFd30FffaLBzMfs8RJYW6NrKHbOiT%2BlSFTnivlwi5RiHGvNdXCB7VRgboxkWTAAP2r4fItnbuiIwWGON%2Byns%2BX3sNjiHPvQHHL%2Bpk92tt0e%2FaMJ2y1sIGOqUB%2Fy6TQ8sJumZ0QfGwLBEbYGLuS6htu9CYDXgJXnJ2K5g4kKGmTA1Z%2FJM6EMUnGJzp%2BjsKKlPQGUeYyrB%2F6PQJnq5qdkRDpMtVt%2BtG0IYoSRMRrAgyAERXTr7Im0u%2FKMSe2rvFjevZU8oeMslcmD0Ymj4672wVIoeLiIMa%2FwBO0fvsxU0ey3wyiI3GHOJV9zJzKic%2FRacTxCS8eKGth0FdctNow4OP&X-Amz-Signature=7e140354cca0110568da08af3c2ce4f1ce842ed2e4a10e1be17fb8c166c8de5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653FOKEEI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAoFboQIfN5wsfqQP7lxbpkhZX8RB7IKo9EMFb4CUepdAiEAguWUgEkaXDttjxa2k%2FFSj8bPWFd2N4JYcR5wRIP6v%2BYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKECBu%2FRCqcMY6UhrSrcA79%2BaELYTL032RbZd6PgUjJw4EQnlvg6m2B3pwIZmhzwWAbgLVGKou7juFm9OZ3mlKFZHSkSvPUqoqsMChXm4lHrZFjIqMN%2FHyBYFnV4oJVjfO7DWGo%2BKLswx0WRILCOyiDl2ljfcnjJWIzqdguHTdMCCA11MPe9TOzpJeJTnxSKtt0DbRUP%2FtiU1jO6jqV1AhU5IZmfcM43iXmRhyx40YmPSc6r5S6QHr9HNh7HrJoGNapM%2BqX6rkArvbs%2FmXYkB27bzC%2FzGdQtegu%2BqqbMj2aVWhHI8Qs3p%2B3i40EvQsNRo4EAVT8VYq9pRwbMckYEPRqYQ3CeR2r%2BIj6zo9o51abAU6WtSRz0J8oYj06nsnD2l82Alinpwl%2FdjTjFXmhwNH8hTSIK3Vhiz4gk3s5RfKAI2EkFG0SPNSgBLfUrp7uUhrHrU7UgZt4LRh4E%2FGbt0ZJqyGhdND1MC2EBZYipQiSPOxYw6KzmI7jc9bLH4W4Qcm1Lm9gZaaMIdwrS5eeIPNNnEz1FzBKOZ6PCKkK4jCvEmfURVhaJ2BECUiSgPSNsJMuhAB8A1EKVK8TmcuzibKTwQkUXG6eMpRNZWSW1oWITsnvF1klKaUkuf122iJBIH0zVBlqvGQ%2Bp5brKMIiy1sIGOqUBDn2XvFSNENc3suzkD%2BS5iRAcIp%2Bq6LVlJYnoSHAmRqr%2FAqm3%2BL6TXFUunFQfBaq2jp2ftte%2FUqDIzEVJUWlkueo%2FVA0Netl1mfNYSKAEs75SOY7zTK%2FTlXci%2FAnIJJCcb9BNkxVummagRTQREEZ3Y4bs40ifWwKFmBV6LOs%2BGPx3DlCW87iqPBl2Dt%2BZLXhELFDEN8BnLBIiDl9mqYRqhQvj1XGS&X-Amz-Signature=d6cbf2272e9553dcccb35c11d5d2871918e65c2fe2d4925fac9be0c006c2265a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FAJPY5V%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxnedgANCEw7jGl0ZUF%2BnD3lhyDj5dv0swn5RbgJdtRwIgNqh0fYcj0KJcn2tZMcyJnuiLb0UVnTqNBhh2QWksungqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmII2o0HN5%2BPdsHFircA%2BlP8MQUk4pr8Wr9hrJmTFdLFjnMzDTAxtmK3R2Kf1aCGe4ltB04OtYQyunSZFFOf9VJoVFQFxFbxAROJYAy3MTOKJY5uQrbOojFxdVpUpmvcKUNp661W7MVdsW4GC6uhmYiaF3R6omEWde%2BugKej6X6Egi9uj%2BCV0wmx1XRN%2FhTBKjpZb6h%2FlVGSwRLteKQcW1oqNBkXfMkzYfgC5OK1svku6du4nlaaxG6qdOHhc8cgb78O5JDWM0xGH05BW2znhA8wkJ8A2mihdVvefxz1UXmot4fvu9yMaVM0DKl5Rswpxof63hcUNsvCicD15CTzfS4gP5WUojcM%2F69cQeCLoddyFJTEpigYn8H%2FzT22E%2BUtflRXIjQ2Mpl%2F1MpqmL3G1n7n%2FtpdKv9SeYCYRZdmamzdEaA8BKJBfuHD9C9QVYsHabFo2qo8LiOlx2SFujqgWsT0aQfQAVJ3c1y1KCK1lWhUEfVdRzA6n%2FjiORjmmPhCyDyGB%2Bhy0bnReFzRF3BmQu2PlbiyrArBASXX4rynomtHnCISiQksyKXXnTfYVjb1TSSHjYc5Ow%2FxNhQVrhBM6SW%2BMplx%2BNEI0utobgEYktd%2FJjoWF%2FvBvCmRdhjn%2BsL%2Bj%2FT5kq6Jc415jEiMNmy1sIGOqUBic1KGDEsDHPuh0gJhwL8O0JvsX0jq%2FY7t4dynuvQEA07TR3GAoOd0uLpYfv3wiJToV8VM0zDO0wNXBTsEmXRigVFAaaCvkqhhjgHGvwjlHt0Z017Xfx6XjpVYaGG9sh0cSH8t9C2qUxxVnPxKZnuT213OAXCqQK5gZBHvAS8OghF0b6TK9HvrJVV8TrCbW%2BTS6xL0%2FtzHpoKKYDOkdjR7FbiTjb2&X-Amz-Signature=59b82e5c22b6f21b891b70f395843dffc106431b8b1baee0f4a2388db89abc9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
