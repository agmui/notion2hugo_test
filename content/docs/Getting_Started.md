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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR2KIOJ6%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQJDlbsehLQARiubZRWQdnTgpyq6OUsMVr%2BKoQwken5AiEA%2BiqBQVL5kCAdaygfwHrJxXAH5HehF3JfWvVQBoHYBcEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDPegy4w0hO89fW3eXCrcAxLXGT0KUrcx1qAurE1Jj4nafvgzUCQrbQt3FoxdKn675r8Qm5fdkREbpVK1CKHoSIxS5YcCOYtggD8GsHS0SEw8CNQIT7IFr3PfbA3orZEZI7ZJOzQpZeY2qpBaTCwajepzZSojK3VPW5iXEiFBmHwLQXs%2F%2B%2BhDkcCq1%2B62Ri2Dzt6MDTXH673LvbrxbhDXLym37SdAU%2BBbOuoaDI%2Fsz%2FWYj7E3Ewud8HxR%2FrC0iO1QGWjy5%2FXuNlqV54GYoIPixB09Cp6vda2pWmqFIIk0pufvFSxL4tJQonaTQ2JDfUY1Wkcb7ZUJ3En4Fm2NZYNrD%2B2n8wDWrW0JFB6wLajspT87jHQMni7Dh7iGkzF8aXiHJXCQ%2FXfq5is4G79xC58BiOGQEdiF7%2BODYHY1k86h6Z8GHoeeQT3wHlK4ivArJoo6tJ9wMq5tSQ1WrkbCkAv1exLaVSpkkF7cltQ7eyB%2Bngr0BpRM9YVZLA1dPICEQv9%2FO5B%2F%2FU8t0jP3tmWzhZV1XPBcguOtLZS2Y0omkpN%2FKzK908PsPGL9rcMHtTPFz98jGDeraC1t91ta906eO02kwezNGIywn9aSyG6gKk61aXwktEcjQyXoEkdPkfNzn4H4iQ0J317dpgeTFgVtMPDB8MAGOqUB8G2mEkDwvjcvRYTey5iUrR7d8vBDuLPDEck7VNlqJViemsOQ8%2FkdBV2pFahDlAkoKCngrzMzvjRovu%2FHvGJtLLu%2FPUVXMkIU33XwOpGk3xG3jLPuW6nGmOEaOTMFXZHLHnXSNYTGwaKSJSwSirFz2if%2F4DUvlqlNTD1fDQnfjOujbqw33%2FV7O%2FQY5KHfdEuD5aZN%2FB6MFllSpCNZi9sUDDP1axbj&X-Amz-Signature=6b2c5ba173e92777516801d3f35b4898014e8465b7cb3524d2488d10126f1465&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR2KIOJ6%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQJDlbsehLQARiubZRWQdnTgpyq6OUsMVr%2BKoQwken5AiEA%2BiqBQVL5kCAdaygfwHrJxXAH5HehF3JfWvVQBoHYBcEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDPegy4w0hO89fW3eXCrcAxLXGT0KUrcx1qAurE1Jj4nafvgzUCQrbQt3FoxdKn675r8Qm5fdkREbpVK1CKHoSIxS5YcCOYtggD8GsHS0SEw8CNQIT7IFr3PfbA3orZEZI7ZJOzQpZeY2qpBaTCwajepzZSojK3VPW5iXEiFBmHwLQXs%2F%2B%2BhDkcCq1%2B62Ri2Dzt6MDTXH673LvbrxbhDXLym37SdAU%2BBbOuoaDI%2Fsz%2FWYj7E3Ewud8HxR%2FrC0iO1QGWjy5%2FXuNlqV54GYoIPixB09Cp6vda2pWmqFIIk0pufvFSxL4tJQonaTQ2JDfUY1Wkcb7ZUJ3En4Fm2NZYNrD%2B2n8wDWrW0JFB6wLajspT87jHQMni7Dh7iGkzF8aXiHJXCQ%2FXfq5is4G79xC58BiOGQEdiF7%2BODYHY1k86h6Z8GHoeeQT3wHlK4ivArJoo6tJ9wMq5tSQ1WrkbCkAv1exLaVSpkkF7cltQ7eyB%2Bngr0BpRM9YVZLA1dPICEQv9%2FO5B%2F%2FU8t0jP3tmWzhZV1XPBcguOtLZS2Y0omkpN%2FKzK908PsPGL9rcMHtTPFz98jGDeraC1t91ta906eO02kwezNGIywn9aSyG6gKk61aXwktEcjQyXoEkdPkfNzn4H4iQ0J317dpgeTFgVtMPDB8MAGOqUB8G2mEkDwvjcvRYTey5iUrR7d8vBDuLPDEck7VNlqJViemsOQ8%2FkdBV2pFahDlAkoKCngrzMzvjRovu%2FHvGJtLLu%2FPUVXMkIU33XwOpGk3xG3jLPuW6nGmOEaOTMFXZHLHnXSNYTGwaKSJSwSirFz2if%2F4DUvlqlNTD1fDQnfjOujbqw33%2FV7O%2FQY5KHfdEuD5aZN%2FB6MFllSpCNZi9sUDDP1axbj&X-Amz-Signature=3c9c245f49a8f0199a9cf20fe9a7fd7a9dc305d6d121a14a8fee8ff1b30a9ea1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR2KIOJ6%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQJDlbsehLQARiubZRWQdnTgpyq6OUsMVr%2BKoQwken5AiEA%2BiqBQVL5kCAdaygfwHrJxXAH5HehF3JfWvVQBoHYBcEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDPegy4w0hO89fW3eXCrcAxLXGT0KUrcx1qAurE1Jj4nafvgzUCQrbQt3FoxdKn675r8Qm5fdkREbpVK1CKHoSIxS5YcCOYtggD8GsHS0SEw8CNQIT7IFr3PfbA3orZEZI7ZJOzQpZeY2qpBaTCwajepzZSojK3VPW5iXEiFBmHwLQXs%2F%2B%2BhDkcCq1%2B62Ri2Dzt6MDTXH673LvbrxbhDXLym37SdAU%2BBbOuoaDI%2Fsz%2FWYj7E3Ewud8HxR%2FrC0iO1QGWjy5%2FXuNlqV54GYoIPixB09Cp6vda2pWmqFIIk0pufvFSxL4tJQonaTQ2JDfUY1Wkcb7ZUJ3En4Fm2NZYNrD%2B2n8wDWrW0JFB6wLajspT87jHQMni7Dh7iGkzF8aXiHJXCQ%2FXfq5is4G79xC58BiOGQEdiF7%2BODYHY1k86h6Z8GHoeeQT3wHlK4ivArJoo6tJ9wMq5tSQ1WrkbCkAv1exLaVSpkkF7cltQ7eyB%2Bngr0BpRM9YVZLA1dPICEQv9%2FO5B%2F%2FU8t0jP3tmWzhZV1XPBcguOtLZS2Y0omkpN%2FKzK908PsPGL9rcMHtTPFz98jGDeraC1t91ta906eO02kwezNGIywn9aSyG6gKk61aXwktEcjQyXoEkdPkfNzn4H4iQ0J317dpgeTFgVtMPDB8MAGOqUB8G2mEkDwvjcvRYTey5iUrR7d8vBDuLPDEck7VNlqJViemsOQ8%2FkdBV2pFahDlAkoKCngrzMzvjRovu%2FHvGJtLLu%2FPUVXMkIU33XwOpGk3xG3jLPuW6nGmOEaOTMFXZHLHnXSNYTGwaKSJSwSirFz2if%2F4DUvlqlNTD1fDQnfjOujbqw33%2FV7O%2FQY5KHfdEuD5aZN%2FB6MFllSpCNZi9sUDDP1axbj&X-Amz-Signature=a630d591a94ed896c37c311162390e577bd871ce04ff26873a3e7d678d49d5e9&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IWBGG4F%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T050933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpkbj1jSo7g%2FcXz%2FqOP45VCWZzdiqYE4sQTGYpkjBHGAiEA4VaFJ2%2F9BYK2HWyOUlZMOfZRoY3di7yGqfdGh2At6%2B4q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDHWu9wISLUk4Zp1%2FsircA9R76g%2BQG2jp86716Edu0p9m8PvsUIuolpKkfHjxMXiSkqwXZaQlSgJmOmjhXyCEli7TOBwZ%2B8PISp7ZlFqBlBtOx9EyuCtWCIPr2Yi7Li58OmBGkEcL0NclT3HzolekkvHjBstMom72XPn8VYHTPDgVQxnaXHXoh5oEWb2gtZGE22ja%2F9zv1UrB5r85341R0Cu%2BJcTQm50WbETZrgCjhtZzvrZ2t114LFikwMM78beRWEvAGotLspfzxJjmUObZmPiFY%2BZAfpm2pyO6CHUmoA7vYl6oFP%2FeaOVjxtYpT4W8eLSD6TlhLgb8Q5UK%2FZHGp9s%2BG01CZCbhTSU3PwXY2FwMqtl0YX2sg0FOlXYODYSwTd%2FcE4uNVQetkq3ik7IBTeZjaYJgiqI8UfwDvTtkC9pBs8li452fSjG4m%2Fz1MO04HoWlMSTPUHfvmhXMc7nQIadGBT432cWC3oylQ%2Bu4ykV1cw90LpvgvrUz5hQdcE6LBlIf0GURnVIreUtRYu7THaAOmpvYlBWL8S%2BpgvfyIHHaA7GBf0DKuD0%2F2fvPm%2Bht0fSHA2JnZQ1M5kLPqynuTLkN%2FHtKVB14RMMy2RnPDxbjivlsTIBUIPXsccZF%2FwWrk%2FnWQT3BVMBPvPH0MPvB8MAGOqUBLDB5Yt17Z3OZNjcP5HJZEc6b%2BZV0uvDxMTSEjPWTVd4t42vp8YT76GnYjrqJoPyE8lsi9xizsRJHq%2Bt%2BG2cjokCuZ5Lh%2BSdSs5A75fSNX4cxPJWKjKxMx2lIdjISUHDFGguqjTtk%2BZFw4a9zY%2FdsoYHCyfiMgV3shJMkwRBHc7ELHvzC6EAkrBu857aVDSGOpAc%2BSBHfWzuBqW%2BLh1Ed3D93QSZn&X-Amz-Signature=8ccabd95cba3aec64f961fb47ece24c4ed51963395df6eb7f73dafda2cb99628&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z35TQ2D%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDasvag1QZlORQfsS%2FJLORxmS9C9YzaZ%2Bb2Lw3%2FlIdAAIgfYPSQidBCL%2B9eIafxYtvUdYLlu6C758B5%2FqgrkvzfWwq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCojQ8OG9efFbEpWISrcA%2BYaCnIRh1RLXQlJczKv%2BQ%2BtcL4%2BYSDNXoz2B33Y3F71F7%2F57n97PQkT%2FjQdPk0WF6EXQP%2FAFK3VEuuvpAVobjT%2BhndlB0FMjPPxGIB%2B%2BybYko5qTzRb0OuiiqCWZaPEM0xVnytoRTBkIOCl4lEwIqgFjUP3xS%2FaUc6FLmR2bVmXI3YisyfNIUCEQfB0SSmsKyksxjcgO%2FT9OBBWOpx7pmb9bJeuqDhh3yJaf63v6cmdsCHKpxrBxtGTKb%2FD8qleuE%2BDFEWFJQgos7lL81B6dzztIXaRrcxihnuY32JaJZgKDNF%2FCfadfrHTRsaLsrsP3BuUvMwwfn0A%2FX%2B1yVv%2BA9t%2FY7x6scd%2FeIKictiSJqlKvQFXgOZV1EOhqaGQFtMVRs1qSWsRxyTwyN%2FljtxX0nVD%2FQo4SusUKRdUEQTrldfNbByStlBYfJzY4u%2BEu8VBNCTDr0scDsLjm09DnEoh%2FEvPX93Kn96CYaX%2BTqZnv8gs%2BUA5PWfSDIib1RzIR%2BPsFa%2FK%2B6I04z5OGbYl4wuRewhyFbFgzcTymicTiOjebGRWnLaJTZ5qGIZEkAYtiy6Vq6GJ5RRdvDq%2BQ9B%2Bc%2FECs%2B0HqZ7USnephF%2B94DyZ91wblSDYNqi0ob91z64QMIPQ8MAGOqUB1jskqv1oDqLXE6khYSyTI%2BSF5hB48x%2BWJdHsXykFDlwdf1u19sV%2BW2EOol7EbmJFvcT7exW1z39Cr6b2qICgU7eD%2FfjrTw8MGmgKIV4K3YvLsq%2FeJcesvSRHmFXlqLbRZ4DVcV6DBoDP4%2B%2Fy%2BOpWLekVDIry9JtzxITbzNHDVPKW5lQLKDYFZwziiUorI5gvbSkZU97nm%2BoOzdGgFfDy0lY8cYrI&X-Amz-Signature=c5098efd7f799c4238a062159de38b53ef72cf252831bf0f8ca2189fde93fa2f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR2KIOJ6%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQJDlbsehLQARiubZRWQdnTgpyq6OUsMVr%2BKoQwken5AiEA%2BiqBQVL5kCAdaygfwHrJxXAH5HehF3JfWvVQBoHYBcEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDPegy4w0hO89fW3eXCrcAxLXGT0KUrcx1qAurE1Jj4nafvgzUCQrbQt3FoxdKn675r8Qm5fdkREbpVK1CKHoSIxS5YcCOYtggD8GsHS0SEw8CNQIT7IFr3PfbA3orZEZI7ZJOzQpZeY2qpBaTCwajepzZSojK3VPW5iXEiFBmHwLQXs%2F%2B%2BhDkcCq1%2B62Ri2Dzt6MDTXH673LvbrxbhDXLym37SdAU%2BBbOuoaDI%2Fsz%2FWYj7E3Ewud8HxR%2FrC0iO1QGWjy5%2FXuNlqV54GYoIPixB09Cp6vda2pWmqFIIk0pufvFSxL4tJQonaTQ2JDfUY1Wkcb7ZUJ3En4Fm2NZYNrD%2B2n8wDWrW0JFB6wLajspT87jHQMni7Dh7iGkzF8aXiHJXCQ%2FXfq5is4G79xC58BiOGQEdiF7%2BODYHY1k86h6Z8GHoeeQT3wHlK4ivArJoo6tJ9wMq5tSQ1WrkbCkAv1exLaVSpkkF7cltQ7eyB%2Bngr0BpRM9YVZLA1dPICEQv9%2FO5B%2F%2FU8t0jP3tmWzhZV1XPBcguOtLZS2Y0omkpN%2FKzK908PsPGL9rcMHtTPFz98jGDeraC1t91ta906eO02kwezNGIywn9aSyG6gKk61aXwktEcjQyXoEkdPkfNzn4H4iQ0J317dpgeTFgVtMPDB8MAGOqUB8G2mEkDwvjcvRYTey5iUrR7d8vBDuLPDEck7VNlqJViemsOQ8%2FkdBV2pFahDlAkoKCngrzMzvjRovu%2FHvGJtLLu%2FPUVXMkIU33XwOpGk3xG3jLPuW6nGmOEaOTMFXZHLHnXSNYTGwaKSJSwSirFz2if%2F4DUvlqlNTD1fDQnfjOujbqw33%2FV7O%2FQY5KHfdEuD5aZN%2FB6MFllSpCNZi9sUDDP1axbj&X-Amz-Signature=17819bf98112662aa990d8cd44d9d2f1da785474952870db0167539be885f1dc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
