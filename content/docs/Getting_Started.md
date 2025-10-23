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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOX2G7TJ%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdOHWaAAxr%2F3D%2FDeQZAOvbAVplJTst0dzfRPVsfJ1YsAiA741Ug72r9h36QXPBhaRTzDOvnu7Pvl1WoIO41Hrl7NSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMJzx88Ef%2BP9YbL%2BL6KtwD%2FFiLAhCKxkz7g4uF%2BOfvzdlE%2FzEjartJ1DZ3eItHvj5z7g5ItCKiZnXST9%2BYED8WISzoFMllQZlpIrNEfoLDp3V01cqOEhwNviXPOMcpGXpdjK1GSpLplo%2B0SAW%2BelK3ToxO%2Boenpcmj0MpYsALGq6fMtId04%2BZjry6wiAUPmXxGE2LO1h8pn9OQwS7K0dy%2FQBOG1dCuUi3HzfcpvcIydHc6GXNvdgjfrtfnUQ4%2FWxJaEjvs6Ezvp8g7w2GLoJ58zRnHHtRJNpPvfk%2Bm3qUBXJkwRZ9bfH%2F%2FYuirEjisxKXHZe4Hf%2F%2FexQefeJmeKi3IQRzInq2hUJ5Cy3ISND7Aydiq9UVA7EWdh2uPFCMqn0btFAePSOJQACjX%2BChEVwGIKpXKNy6Wt5G6u%2BT4KhBOi6iEEz7TSsV%2BBLbchhfSl31kvQLBdkfjcs7I%2FcQ86unI9z8m7VX5ZxAPiRtXMFE2xxwQwFvHVEuQ4pp%2BuDhZVUznAEy8ba6LlySFoWg0fRy0d%2BHdoU1DXSlX5MTIgqKKCd72C%2FoAANUaR4k3kZsNPOm4YQ2GG6djdUfi4Dc5r5Uwi%2FfDqvaDvaR8CDqq%2FreI0BX0vZKQtj%2FaLFSwYIeCD3kctngzPLG7Y0W7vnAw3u%2FlxwY6pgHW7E3FqEwRB8HZS2aAtuHnr%2FXyScNyK4UMWYNgTIn5zKVyF%2FpUK2qtRFyPOyRc4Lj1sZpkQUFkZ7GJhJsmXXpVD9qLGxl3k%2B5l%2BIHe0RdrG2PrL%2BSQ3GqPqV%2Ftc%2BhykGUKhlN7jhP%2BUSp4%2BL2EkF5EUcUOBuJonHkUC0p8FeoVxcNqTnB69%2BN8za9Hck544ADjuywOOS4J4v4bdetBXtF1rs1ve1QO&X-Amz-Signature=fbad2382b03a3519620e1dbc1fb67ce8db49012b71accf2e20b011dcad40945a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOX2G7TJ%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdOHWaAAxr%2F3D%2FDeQZAOvbAVplJTst0dzfRPVsfJ1YsAiA741Ug72r9h36QXPBhaRTzDOvnu7Pvl1WoIO41Hrl7NSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMJzx88Ef%2BP9YbL%2BL6KtwD%2FFiLAhCKxkz7g4uF%2BOfvzdlE%2FzEjartJ1DZ3eItHvj5z7g5ItCKiZnXST9%2BYED8WISzoFMllQZlpIrNEfoLDp3V01cqOEhwNviXPOMcpGXpdjK1GSpLplo%2B0SAW%2BelK3ToxO%2Boenpcmj0MpYsALGq6fMtId04%2BZjry6wiAUPmXxGE2LO1h8pn9OQwS7K0dy%2FQBOG1dCuUi3HzfcpvcIydHc6GXNvdgjfrtfnUQ4%2FWxJaEjvs6Ezvp8g7w2GLoJ58zRnHHtRJNpPvfk%2Bm3qUBXJkwRZ9bfH%2F%2FYuirEjisxKXHZe4Hf%2F%2FexQefeJmeKi3IQRzInq2hUJ5Cy3ISND7Aydiq9UVA7EWdh2uPFCMqn0btFAePSOJQACjX%2BChEVwGIKpXKNy6Wt5G6u%2BT4KhBOi6iEEz7TSsV%2BBLbchhfSl31kvQLBdkfjcs7I%2FcQ86unI9z8m7VX5ZxAPiRtXMFE2xxwQwFvHVEuQ4pp%2BuDhZVUznAEy8ba6LlySFoWg0fRy0d%2BHdoU1DXSlX5MTIgqKKCd72C%2FoAANUaR4k3kZsNPOm4YQ2GG6djdUfi4Dc5r5Uwi%2FfDqvaDvaR8CDqq%2FreI0BX0vZKQtj%2FaLFSwYIeCD3kctngzPLG7Y0W7vnAw3u%2FlxwY6pgHW7E3FqEwRB8HZS2aAtuHnr%2FXyScNyK4UMWYNgTIn5zKVyF%2FpUK2qtRFyPOyRc4Lj1sZpkQUFkZ7GJhJsmXXpVD9qLGxl3k%2B5l%2BIHe0RdrG2PrL%2BSQ3GqPqV%2Ftc%2BhykGUKhlN7jhP%2BUSp4%2BL2EkF5EUcUOBuJonHkUC0p8FeoVxcNqTnB69%2BN8za9Hck544ADjuywOOS4J4v4bdetBXtF1rs1ve1QO&X-Amz-Signature=53411036299ddead49e86d4a565e1b1b14e8ab6b4d54c9901ff07764a858eff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOX2G7TJ%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdOHWaAAxr%2F3D%2FDeQZAOvbAVplJTst0dzfRPVsfJ1YsAiA741Ug72r9h36QXPBhaRTzDOvnu7Pvl1WoIO41Hrl7NSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMJzx88Ef%2BP9YbL%2BL6KtwD%2FFiLAhCKxkz7g4uF%2BOfvzdlE%2FzEjartJ1DZ3eItHvj5z7g5ItCKiZnXST9%2BYED8WISzoFMllQZlpIrNEfoLDp3V01cqOEhwNviXPOMcpGXpdjK1GSpLplo%2B0SAW%2BelK3ToxO%2Boenpcmj0MpYsALGq6fMtId04%2BZjry6wiAUPmXxGE2LO1h8pn9OQwS7K0dy%2FQBOG1dCuUi3HzfcpvcIydHc6GXNvdgjfrtfnUQ4%2FWxJaEjvs6Ezvp8g7w2GLoJ58zRnHHtRJNpPvfk%2Bm3qUBXJkwRZ9bfH%2F%2FYuirEjisxKXHZe4Hf%2F%2FexQefeJmeKi3IQRzInq2hUJ5Cy3ISND7Aydiq9UVA7EWdh2uPFCMqn0btFAePSOJQACjX%2BChEVwGIKpXKNy6Wt5G6u%2BT4KhBOi6iEEz7TSsV%2BBLbchhfSl31kvQLBdkfjcs7I%2FcQ86unI9z8m7VX5ZxAPiRtXMFE2xxwQwFvHVEuQ4pp%2BuDhZVUznAEy8ba6LlySFoWg0fRy0d%2BHdoU1DXSlX5MTIgqKKCd72C%2FoAANUaR4k3kZsNPOm4YQ2GG6djdUfi4Dc5r5Uwi%2FfDqvaDvaR8CDqq%2FreI0BX0vZKQtj%2FaLFSwYIeCD3kctngzPLG7Y0W7vnAw3u%2FlxwY6pgHW7E3FqEwRB8HZS2aAtuHnr%2FXyScNyK4UMWYNgTIn5zKVyF%2FpUK2qtRFyPOyRc4Lj1sZpkQUFkZ7GJhJsmXXpVD9qLGxl3k%2B5l%2BIHe0RdrG2PrL%2BSQ3GqPqV%2Ftc%2BhykGUKhlN7jhP%2BUSp4%2BL2EkF5EUcUOBuJonHkUC0p8FeoVxcNqTnB69%2BN8za9Hck544ADjuywOOS4J4v4bdetBXtF1rs1ve1QO&X-Amz-Signature=90d7a1a07b24dbf75d62bf0d92f41e8bd522d85f45f6c0311310f7bed2ab0baf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS6UZQU7%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Bm0NJxwIoRuqbOFbSwqqWv65AS5egnR%2BINMD4LqodAIgBeRIoa%2BgD6xOB9pohJusQpKsj%2FjFK%2BLHDN5iLnvgN4Yq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDPeZcKODudzNwUDA%2FircAwQPFKX5zFVMsuvPY2aR3BLAkRGozSPj3%2BAXQReCMVAzNHpft0O5EW6v79mND2Ozp5%2BKDabxREzfpiFfmv9n9oOh4y70ehifp24X%2BaJT90Mi2juS8V%2F1lrOH4eCqQroJnuJIKUMxXey1jNRCcODxYfVzbHCLc9Cs3dB3LzNRKR12t9DbUsw5Om4%2FRMcGIdFiMVlPn3K0MgUHtF6hqeYi9Uo2w2j4IVnA5j2IYzmnPoU0juF7jojuvcKBaDoz3YyPL3HIcccXvZT4advgzf09EmZj5ntoe0TV4sluJVyLtX5WFJrP5GcaWlJlyJabr9m79%2BcmtuQ6qKDycFKf2BGpryFqLwwaefTocAuJnRKkrGewiVSifJymrYHUjkn6zH5kfek2oO%2FHCDB4XOm7aUxtYSXYLC9L7ULRjp1tkiyr56pOGYhInU2WAKoxblch%2FU6nbXPOs43g8KVscsckYrx60Yfamom1yi%2BAgJ5SSKiFCV4wvuHxjK7arSYfPN2eyn4fXjUW3InAvf9y2trgh1LIhSrte5ss7K8y4GWTbvocrlRp21knLxSXRTrVc7w%2BsoYpvky3EPtJdvwPlcNCs5v%2B%2FHeFtK2Bs6GLS3uY7xUseHEEeFnIx4KXacDH4dfYMPvv5ccGOqUBR8M7d6%2B5E4bt%2BTz%2FwsKHh8fuVVDTao7LfQlA%2FxSoHLzAf6qZ8VKYtVAgVSuglIfzPUo7QzxgbE8mUmsEVngP19IhIjyw%2FuF4gLXo2CbldRcmIutn9TolfC4ER0n%2Fjciled%2BghtycP5B3v28WZc3Yu7ReFx5NCJAxH5qFrRMSyKXTmufJ3G4y705IJ%2FPbfPMpjlTOdLIUN%2BcGHZaN4Sl8Csi9asqv&X-Amz-Signature=5c5ef5ffcc68e50054fca39a74a6c5b84c1687e71b9d5704fadcc7d271a87589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634D3XVQB%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8fnhuZJAEY6ZBZsFW5Fkwogb0Zi%2BiZ3X5wZPmrwqFRAIgTX3IQkL0FDVvGaBNMPAwBTiDaPSywpUGzaPEGCP9YUUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDIy30Bp0RxqJQLsTKyrcA47vjqlv0uvX7cAl1iGmYIFUsb9b33RZiiKFuB6MAsqwuVEWs3WK5%2BRY04LP8hDCznY2ni3Qyuf8YhoU9TsDx13%2BuHj63t6tKNLq9WycaJ57Ej4r%2FnQUkkhxySZp9VY5xRfOmLyQCABisL%2BkLFVdsBC2ScGMf9UE8GjLRZlT%2B5ExDe5C8D07OoLM40NhEecIcY8lUH3NpyBrGoKuMy7o%2BxjOme5wIXUUBSa89oID4B3DzzV0AlIahx7b59j1IxLL3UNNJmG9PT4Q556QPrxUKC15ezHRCqhK5GBHNnW7dbxaKzo5XAQ4%2BRj%2B%2B7Lsjr9wSzQFQUq%2F8a7ErSPD1Z%2BxznicBiZRSfignnGVANZ%2Ff8rXFauoPM%2Fs0%2BZaBW5IJlFPi6DCnUB2Unq2ZVYu%2Fep8xfMDlGy5v8G6xqKHN965rqMj7RG1FLsRqcELpW3OHIqjQj%2BjnB8EQk%2BYStL7LVqwpoHVwkNXxBt0PlgqS%2B0m6e3xD7vovgtNzGHTeaJ3C2dCsfC3r%2FUyxPUwUBp6pf77jsIpobUN3RHKibEqeIpULvCALStju0E9I5TBuqZqv5%2BD5dXnenXbbE%2F%2FbH%2FyXX1GTYP%2FHkoAiwyp3Oxeee8Q3whZmegxNI8MTvrLGV7pMPvv5ccGOqUBW73zeJEiM50NZhO%2F29mXSzmQjGlUghI%2BzU%2FBWaJh7W8sI9xI7NmFkFAaumFmOHu4Y5lNKs5WE0fo16gb%2BcruHvJEbo3hLugjmTiQ5XHJN1Lcc9jkudUBohOA3v7b%2BN3rTwWxLQKC7okhXFqSYx%2BUS280e56J9d77l1zjzCMZ7bP0e%2BNTaVJtVDUilWCNtC9c4CYgU1rTPgyO5EGday4%2BCLKcwlPt&X-Amz-Signature=6eaef39f6acdb430171c2ab4f2016439aa26d916d230b0e11c37cf7448b01cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOX2G7TJ%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdOHWaAAxr%2F3D%2FDeQZAOvbAVplJTst0dzfRPVsfJ1YsAiA741Ug72r9h36QXPBhaRTzDOvnu7Pvl1WoIO41Hrl7NSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMJzx88Ef%2BP9YbL%2BL6KtwD%2FFiLAhCKxkz7g4uF%2BOfvzdlE%2FzEjartJ1DZ3eItHvj5z7g5ItCKiZnXST9%2BYED8WISzoFMllQZlpIrNEfoLDp3V01cqOEhwNviXPOMcpGXpdjK1GSpLplo%2B0SAW%2BelK3ToxO%2Boenpcmj0MpYsALGq6fMtId04%2BZjry6wiAUPmXxGE2LO1h8pn9OQwS7K0dy%2FQBOG1dCuUi3HzfcpvcIydHc6GXNvdgjfrtfnUQ4%2FWxJaEjvs6Ezvp8g7w2GLoJ58zRnHHtRJNpPvfk%2Bm3qUBXJkwRZ9bfH%2F%2FYuirEjisxKXHZe4Hf%2F%2FexQefeJmeKi3IQRzInq2hUJ5Cy3ISND7Aydiq9UVA7EWdh2uPFCMqn0btFAePSOJQACjX%2BChEVwGIKpXKNy6Wt5G6u%2BT4KhBOi6iEEz7TSsV%2BBLbchhfSl31kvQLBdkfjcs7I%2FcQ86unI9z8m7VX5ZxAPiRtXMFE2xxwQwFvHVEuQ4pp%2BuDhZVUznAEy8ba6LlySFoWg0fRy0d%2BHdoU1DXSlX5MTIgqKKCd72C%2FoAANUaR4k3kZsNPOm4YQ2GG6djdUfi4Dc5r5Uwi%2FfDqvaDvaR8CDqq%2FreI0BX0vZKQtj%2FaLFSwYIeCD3kctngzPLG7Y0W7vnAw3u%2FlxwY6pgHW7E3FqEwRB8HZS2aAtuHnr%2FXyScNyK4UMWYNgTIn5zKVyF%2FpUK2qtRFyPOyRc4Lj1sZpkQUFkZ7GJhJsmXXpVD9qLGxl3k%2B5l%2BIHe0RdrG2PrL%2BSQ3GqPqV%2Ftc%2BhykGUKhlN7jhP%2BUSp4%2BL2EkF5EUcUOBuJonHkUC0p8FeoVxcNqTnB69%2BN8za9Hck544ADjuywOOS4J4v4bdetBXtF1rs1ve1QO&X-Amz-Signature=1fc5c739b9f994cde432e9c11a877a1e4675ddd0475995164da8faa3409fa3b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
