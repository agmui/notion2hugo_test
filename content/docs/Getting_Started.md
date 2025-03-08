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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLJE5XK7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T002936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDSgOReCeNuoITsmbINY7sKh8LyORbyB%2BHQ4hgmaQroUAIhANWFGhkdnnsV6mQowPFENXgKMETUcvbRiqmRzYoF70QqKv8DCFAQABoMNjM3NDIzMTgzODA1IgzwXIoJPAxh6qi%2Fp2Eq3ANhS6jcVm0qU1deD%2FpHFsN9ng9dV1zrGTMjwx7UCp63pnTNE8leW6nHjCcL3QiG3Px7yC69bkH0CH5SoEY%2BW3P4CyTeYP%2FWG40iotXlAC1xsCINGgjoJmq3GIFIKRFKeI99KDKjfa64bVmG6gvRxa4KWYOzLFeWZ0KOPrlHKybh1ize4Vjj9Xxrlk4m1qXk9UScOVpQ5euLaCpiGUBh4xF53J1IhLyLj8lccWHM59Tdxs3k%2B%2Fvatqq5xiCHRl4eIfu0tUVSKLWQjj5fEehsgHJhkiyPRbYCi3zYnMpCJZ%2Fp3L%2FB%2Bab7dIo6h%2FcKQlzKGIxY%2Fw5liqjNnAF81xa9IN7qZRw%2ByaHQ13bJ%2Fr9BCfMRY2adipNJlgc0hQmBO8AxTmttKRw%2BdCsu9q4vKVMJZkXdPKD5f1WwE8tLVAM1HLfjwoGer4IPNFu6tV5d4l4unl1B4xOKvugegE5gjxxT5dV0aB0GR6WG9dEmEaZkkoM9qsJs8MSd%2FpvQKKucH65R4Tc7EAPKWpooOTeUd%2FGMJLiGyKxRBhTGaL5aXe%2BVp8cr4oh%2B0cqKPtffFaoanGmX3wNux6AzCMO8LnWhHwawY8klFLvyjC16jVcwUjBzMxIejMNW7iAs8PHRC4W%2BKTC2%2Fq2%2BBjqkARkWBwVyxSnbVdCPlUPyejkcYTlH9ac%2BJFmKGg%2Fso5mhCnh95VmfYED0bbQ9GdBYdRHgFtu24reUnVleaP2133c9sdY4qZPDGRBoDLGmqH5Ms6AaVJ5uqIYsFZ9gfxaVvu7cIEqHzUJedxpJJYxxCKgzthFklfkDtAKJbYTCwIfM5RixjKg39alYkY%2F5bzSYhrhvvjxHlhw%2FXkOX55PqXqWrgCHs&X-Amz-Signature=ecb35ece5dcd54b71eca4da7de6257a8227f7fb28caed09d32fdd0c74cbc7727&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLJE5XK7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T002936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDSgOReCeNuoITsmbINY7sKh8LyORbyB%2BHQ4hgmaQroUAIhANWFGhkdnnsV6mQowPFENXgKMETUcvbRiqmRzYoF70QqKv8DCFAQABoMNjM3NDIzMTgzODA1IgzwXIoJPAxh6qi%2Fp2Eq3ANhS6jcVm0qU1deD%2FpHFsN9ng9dV1zrGTMjwx7UCp63pnTNE8leW6nHjCcL3QiG3Px7yC69bkH0CH5SoEY%2BW3P4CyTeYP%2FWG40iotXlAC1xsCINGgjoJmq3GIFIKRFKeI99KDKjfa64bVmG6gvRxa4KWYOzLFeWZ0KOPrlHKybh1ize4Vjj9Xxrlk4m1qXk9UScOVpQ5euLaCpiGUBh4xF53J1IhLyLj8lccWHM59Tdxs3k%2B%2Fvatqq5xiCHRl4eIfu0tUVSKLWQjj5fEehsgHJhkiyPRbYCi3zYnMpCJZ%2Fp3L%2FB%2Bab7dIo6h%2FcKQlzKGIxY%2Fw5liqjNnAF81xa9IN7qZRw%2ByaHQ13bJ%2Fr9BCfMRY2adipNJlgc0hQmBO8AxTmttKRw%2BdCsu9q4vKVMJZkXdPKD5f1WwE8tLVAM1HLfjwoGer4IPNFu6tV5d4l4unl1B4xOKvugegE5gjxxT5dV0aB0GR6WG9dEmEaZkkoM9qsJs8MSd%2FpvQKKucH65R4Tc7EAPKWpooOTeUd%2FGMJLiGyKxRBhTGaL5aXe%2BVp8cr4oh%2B0cqKPtffFaoanGmX3wNux6AzCMO8LnWhHwawY8klFLvyjC16jVcwUjBzMxIejMNW7iAs8PHRC4W%2BKTC2%2Fq2%2BBjqkARkWBwVyxSnbVdCPlUPyejkcYTlH9ac%2BJFmKGg%2Fso5mhCnh95VmfYED0bbQ9GdBYdRHgFtu24reUnVleaP2133c9sdY4qZPDGRBoDLGmqH5Ms6AaVJ5uqIYsFZ9gfxaVvu7cIEqHzUJedxpJJYxxCKgzthFklfkDtAKJbYTCwIfM5RixjKg39alYkY%2F5bzSYhrhvvjxHlhw%2FXkOX55PqXqWrgCHs&X-Amz-Signature=14934cd18385037217ecb2dcf106852322cbdc18f710bf9ce1e2f6cfb1ce0f54&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBVHDJTW%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T002940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIA8Eti4iZ%2F7YcoruNYnP06W%2FpjZRYG%2FrRCd3uMVZJNUAAiEAxrQk3uDrc%2BPGKE4taGjs4benzZW5%2Bf%2BJfXrvgGUUAUUq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAlsBFwQqRhxtAW%2BlircA4ginAgqB6WWIJJYmlqKFrGKe0vK0nUl6pSpqgbiH9wb%2BIGIhJEZ0gW9jMNRP5KdNym6qBs2Jcl%2Fj00slDSuFoDzno%2BCAKHcwHFoe3ICgyTF5Rrx798Mv7xz2Gpq2Ve1yQs4r1oZJ1qTi6b4N3CZ8o%2BtLy1cSo%2B4v%2F0k6QOhagYV9T1W3pg5dugsDHKPUkZ9mvhZd2zSFPFJXlkB4%2FUEFjYGLeudF%2BAyRmW%2FXSJlIYRxzGHjSBJWajVbOLCgModOvT9oQAPXBpO1Vny9zPv1y8ESXgk6hm4tdxRCfl0rwXkIRnelT5eOxlumDG9eI1%2B8BKcUwadQY5QkqcI4kkfHX%2FpphcRHhE2GF%2FmZGUlwja%2FGOSogdRuXknuRqGYDgCQoqK2hbd0vf15hG6ywY5oIeMbAq2vUuFvXM3DYhNU5UPtycWGDYG%2FsSurVmRc86UR9s1%2Bnpx3kOyiimtzVvn3Ax71HtHmQEofQPw497jyngIBUB7jg5bLfwNvTH21CdmS3aQ0EyfCfAQxR7hJh6gVBFgX5arjtcbMTMe5Y1u2Pwj2D33cJUNf2dQnt0bPZVuxX%2FQ2QPhNf6ckYmrqG6LhOExr6xyVWmC%2BYmz89n0L%2BQTPQlUJyKhVr9m3l0u%2FJMMP%2Brb4GOqUBPYRzBbA85WvrxsOQM3n%2BF8Un7Ln1dbLDVYk1V2OuXr291QzNmB8AYzF5oJAOsuXwI6F%2F5FEVO4jzUjVBLQDJdyItEIaby9pJCNtbk9g88RR1o9eMxxu0B6GG8endcQXDd5bY9CrxCRUEL9kQz3L0tV82UtdjDNtZ6Umt13BpVSACm8a8Dj6q9boD%2BdZ5y6cQhT6slFS0GTuYfvEQj4NxjxNBtE%2Fw&X-Amz-Signature=ceb80d8fc8a353b24dc1c2a5923b2a9b8ba52849702ad4a692da18ecb358f1ce&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBUPUPK2%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T002941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQC7kRUY9fJIQRLr68hbDj7AOjWCE4XcvLrGHIdKuMSysAIgUQXSSSgfm5ev%2BFQx3ANB%2BSRv2F47b%2FBnBzns5WbhzLQq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDBN3%2FyLPrp0874UEdSrcAzngYoZPCUMMigM1Mbo0MPiooSB%2FY%2Bh%2FBhDfQWAAUd%2B8PBxAlMb6WHJJl4z3Ymj3JHh1Ld%2FvC%2BVi9GrjVgrbXl8kFgUpzP8Zzo2PDrcIVCYjHL3l11%2F0tMwyIoG%2BnaEJQHqD4evfaaKNpgEtUaev6l18sNgHofM%2B3aDmQvehKys8TFuYV1k0VbJiDcVn2b4ZK%2FYlcN3ng1ikbIpFyPIt%2BM1b5%2F27Dz7u%2F5xEE2N6MP%2BW03icps1Mh%2B3FQVlDx%2B33ZTtex%2BuOVaWYdVoPugI32vJ1e3gyPoiQtqJTrMhi5H0M8C5r5HuXQD0GIlqfLczmfLYEjQveBVPM%2FGEqE7YCyg%2F%2FlDA3%2FwLHaOD0fkpTnc7jhGdgKbdZ4MIXsqOqfOSkNLfdDrGYj07ccUDy3UkOrrCPiVN7i9A3opGH3Q7afbwTntxJBZjumMDZiz%2FJPeSYsrTmndvvKo%2FE%2B%2B25%2Bc9dvmwpwb8Y9MS%2FKq4gDp%2FGhb9OO5V%2FwrCddUVD7Bh61JtpEjKAWcC%2FGJuBQ%2BNVb78HBFZZTAyYepEP%2BkbGEvk%2F9TQ0cA2Vn0POtEyPqEuFgksRYR6eRZUThpS5MUVT79D14%2BebTeptl9ieJq9j2mGK3yG6ImdW%2FPsM6ZojlnwBMKX%2Brb4GOqUBL4PdxIMv8VPcjxk2WzfwTqPSN2EGdBDbG7lh4sTmN42JFe5mvqgz1hdVb2EYh9V97mJOi8h5b3BJx%2FWIS2Ygebv3bq%2FCWcjWvrHAty5wvUq7KjrMAoZf6wH60GnD2QOW24CQkDgkxP3xscBPWeqYbCukGvk4ZEixyTxML1g31Bf1FeJ32pvFKGSIw5EDvHkY4BcHv1HKmggggLf3DJD3KzEb3Gsh&X-Amz-Signature=92556948070b31c5dba3ddd52a4cf1f95a7bac961cb47d65e61f6d28b09006bd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLJE5XK7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T002936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDSgOReCeNuoITsmbINY7sKh8LyORbyB%2BHQ4hgmaQroUAIhANWFGhkdnnsV6mQowPFENXgKMETUcvbRiqmRzYoF70QqKv8DCFAQABoMNjM3NDIzMTgzODA1IgzwXIoJPAxh6qi%2Fp2Eq3ANhS6jcVm0qU1deD%2FpHFsN9ng9dV1zrGTMjwx7UCp63pnTNE8leW6nHjCcL3QiG3Px7yC69bkH0CH5SoEY%2BW3P4CyTeYP%2FWG40iotXlAC1xsCINGgjoJmq3GIFIKRFKeI99KDKjfa64bVmG6gvRxa4KWYOzLFeWZ0KOPrlHKybh1ize4Vjj9Xxrlk4m1qXk9UScOVpQ5euLaCpiGUBh4xF53J1IhLyLj8lccWHM59Tdxs3k%2B%2Fvatqq5xiCHRl4eIfu0tUVSKLWQjj5fEehsgHJhkiyPRbYCi3zYnMpCJZ%2Fp3L%2FB%2Bab7dIo6h%2FcKQlzKGIxY%2Fw5liqjNnAF81xa9IN7qZRw%2ByaHQ13bJ%2Fr9BCfMRY2adipNJlgc0hQmBO8AxTmttKRw%2BdCsu9q4vKVMJZkXdPKD5f1WwE8tLVAM1HLfjwoGer4IPNFu6tV5d4l4unl1B4xOKvugegE5gjxxT5dV0aB0GR6WG9dEmEaZkkoM9qsJs8MSd%2FpvQKKucH65R4Tc7EAPKWpooOTeUd%2FGMJLiGyKxRBhTGaL5aXe%2BVp8cr4oh%2B0cqKPtffFaoanGmX3wNux6AzCMO8LnWhHwawY8klFLvyjC16jVcwUjBzMxIejMNW7iAs8PHRC4W%2BKTC2%2Fq2%2BBjqkARkWBwVyxSnbVdCPlUPyejkcYTlH9ac%2BJFmKGg%2Fso5mhCnh95VmfYED0bbQ9GdBYdRHgFtu24reUnVleaP2133c9sdY4qZPDGRBoDLGmqH5Ms6AaVJ5uqIYsFZ9gfxaVvu7cIEqHzUJedxpJJYxxCKgzthFklfkDtAKJbYTCwIfM5RixjKg39alYkY%2F5bzSYhrhvvjxHlhw%2FXkOX55PqXqWrgCHs&X-Amz-Signature=c6dc89512ddec331176f9abb12781d2861eb718368433a1a6c94fe21d7247f6b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
