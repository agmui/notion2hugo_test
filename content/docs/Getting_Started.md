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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647COJIDC%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BJDKmHovCxK8LnQcfRCXHE4o0NYQoM1i5Zfqj8JYRZgIhAL4TMsBY%2FBCq4VwZVOwfh9olQK%2F%2BQRlWWRPxmJ5C7iNJKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwM7aVx1QIQYpaHscAq3ANDEDyxk6iZQrl9Srbk%2BtcERWFEQrPoRFECRIxqn1pPWJR9dtmmBulYfZuUIVbC%2FGl9HlCAEYkScM7TybSoK8s%2FMPIvzjEmjVOXWazgsZ05AT%2BzBI2C%2F4kDpSZPaE7k%2Bo%2F2%2FlopFM5JeOJq3ehDE3yojFr%2BzF8lDa4OftU65SxFicTc%2BtQ4qGi0St9taCJ6Fb%2BWlqMMnYWY7Ay1jNAdoU0rxmoUYPDKxrsAKCMpz6X5YuHNpl%2FcGieDxT6LDmiV4OmRFrkJqJg%2FSI%2BwaVbpnKFSBSYgUpIuMNnCEjhoILhxppoPWBapP56uNdEGDYDJ8NYDpHZb8GoIIAIFCoJ1iJVYBT7tk0GGWNYbDl7a5CR9NzNfvA%2FXhpP%2FqPxhF6oyHF6pg3dR8qpoDAaDIofHRsmGxhu37q%2BTNMawZiT0qVc%2F8caoqFb7tKC4%2BGt%2B0zfCmq2zkXnplWqqct7kJhDDK66lQIduG9nF5lqD9wjc%2BtpamhaY%2BCCIAd685mLFsExg5KciszmodNwdWtwgd%2BFZZyBFTyVBSlM4lT6Mc6wPxNQ%2FZBt%2BqN56RJquWQza9UrNG0PVB0%2Fx99345U%2FtnArxZFKNA6JlvD11oop0hSuSJWpKRw2ABoazegKTS13I9TDOtsHSBjqkARgSxO7H2%2Bc33COhjXH8PHssow5%2BDQ4cW4Jti9itR2e78rUKkruqN9cCCJviP6Dmx%2FoWaODxLUkXa7mG74iiGv4E7XEMrhTbT3SbW7PwAwzhJ8%2Fl9wf%2BMwtUDct2SiDpA9UZThNbnDVrZJ4zQJu5tFxussjtdh8gLtUNKCBWI%2F5dnCGXygdrpCykM10qjJTW1B8muodwIcsWq3tDafDL075RRD6N&X-Amz-Signature=fc90a3352e795d0b1ecc5e11c8e25466379377383c7ed122e715c5c7211b9d06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647COJIDC%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BJDKmHovCxK8LnQcfRCXHE4o0NYQoM1i5Zfqj8JYRZgIhAL4TMsBY%2FBCq4VwZVOwfh9olQK%2F%2BQRlWWRPxmJ5C7iNJKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwM7aVx1QIQYpaHscAq3ANDEDyxk6iZQrl9Srbk%2BtcERWFEQrPoRFECRIxqn1pPWJR9dtmmBulYfZuUIVbC%2FGl9HlCAEYkScM7TybSoK8s%2FMPIvzjEmjVOXWazgsZ05AT%2BzBI2C%2F4kDpSZPaE7k%2Bo%2F2%2FlopFM5JeOJq3ehDE3yojFr%2BzF8lDa4OftU65SxFicTc%2BtQ4qGi0St9taCJ6Fb%2BWlqMMnYWY7Ay1jNAdoU0rxmoUYPDKxrsAKCMpz6X5YuHNpl%2FcGieDxT6LDmiV4OmRFrkJqJg%2FSI%2BwaVbpnKFSBSYgUpIuMNnCEjhoILhxppoPWBapP56uNdEGDYDJ8NYDpHZb8GoIIAIFCoJ1iJVYBT7tk0GGWNYbDl7a5CR9NzNfvA%2FXhpP%2FqPxhF6oyHF6pg3dR8qpoDAaDIofHRsmGxhu37q%2BTNMawZiT0qVc%2F8caoqFb7tKC4%2BGt%2B0zfCmq2zkXnplWqqct7kJhDDK66lQIduG9nF5lqD9wjc%2BtpamhaY%2BCCIAd685mLFsExg5KciszmodNwdWtwgd%2BFZZyBFTyVBSlM4lT6Mc6wPxNQ%2FZBt%2BqN56RJquWQza9UrNG0PVB0%2Fx99345U%2FtnArxZFKNA6JlvD11oop0hSuSJWpKRw2ABoazegKTS13I9TDOtsHSBjqkARgSxO7H2%2Bc33COhjXH8PHssow5%2BDQ4cW4Jti9itR2e78rUKkruqN9cCCJviP6Dmx%2FoWaODxLUkXa7mG74iiGv4E7XEMrhTbT3SbW7PwAwzhJ8%2Fl9wf%2BMwtUDct2SiDpA9UZThNbnDVrZJ4zQJu5tFxussjtdh8gLtUNKCBWI%2F5dnCGXygdrpCykM10qjJTW1B8muodwIcsWq3tDafDL075RRD6N&X-Amz-Signature=eb82f335735025feacfb23424203ef39559ca64e7d79cb7d1aad53a552df9dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647COJIDC%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BJDKmHovCxK8LnQcfRCXHE4o0NYQoM1i5Zfqj8JYRZgIhAL4TMsBY%2FBCq4VwZVOwfh9olQK%2F%2BQRlWWRPxmJ5C7iNJKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwM7aVx1QIQYpaHscAq3ANDEDyxk6iZQrl9Srbk%2BtcERWFEQrPoRFECRIxqn1pPWJR9dtmmBulYfZuUIVbC%2FGl9HlCAEYkScM7TybSoK8s%2FMPIvzjEmjVOXWazgsZ05AT%2BzBI2C%2F4kDpSZPaE7k%2Bo%2F2%2FlopFM5JeOJq3ehDE3yojFr%2BzF8lDa4OftU65SxFicTc%2BtQ4qGi0St9taCJ6Fb%2BWlqMMnYWY7Ay1jNAdoU0rxmoUYPDKxrsAKCMpz6X5YuHNpl%2FcGieDxT6LDmiV4OmRFrkJqJg%2FSI%2BwaVbpnKFSBSYgUpIuMNnCEjhoILhxppoPWBapP56uNdEGDYDJ8NYDpHZb8GoIIAIFCoJ1iJVYBT7tk0GGWNYbDl7a5CR9NzNfvA%2FXhpP%2FqPxhF6oyHF6pg3dR8qpoDAaDIofHRsmGxhu37q%2BTNMawZiT0qVc%2F8caoqFb7tKC4%2BGt%2B0zfCmq2zkXnplWqqct7kJhDDK66lQIduG9nF5lqD9wjc%2BtpamhaY%2BCCIAd685mLFsExg5KciszmodNwdWtwgd%2BFZZyBFTyVBSlM4lT6Mc6wPxNQ%2FZBt%2BqN56RJquWQza9UrNG0PVB0%2Fx99345U%2FtnArxZFKNA6JlvD11oop0hSuSJWpKRw2ABoazegKTS13I9TDOtsHSBjqkARgSxO7H2%2Bc33COhjXH8PHssow5%2BDQ4cW4Jti9itR2e78rUKkruqN9cCCJviP6Dmx%2FoWaODxLUkXa7mG74iiGv4E7XEMrhTbT3SbW7PwAwzhJ8%2Fl9wf%2BMwtUDct2SiDpA9UZThNbnDVrZJ4zQJu5tFxussjtdh8gLtUNKCBWI%2F5dnCGXygdrpCykM10qjJTW1B8muodwIcsWq3tDafDL075RRD6N&X-Amz-Signature=9c4703f2ab71996d124c849f50e7a8742d3692da7b6708ceb84719a3a6cf86dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KRXVWUU%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6117nF37TGzHsXg0G52qlmO3Ay%2F4v5zEld8zELp221AiA4O41IXr0pxlNDyORIv5OmIZNhI24QlRZ6Nq5Y%2B83pKCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGpiaY8xdzzra4gq%2BKtwD%2BoFavQ6BWrz5smgMwnZUW6%2FWdgi%2BF19XWM1A7bW%2BrdPUqGkp1i1S%2F9XIxkCCOjlxtqVf5nQjpnuynoE7P3zMEc6A1WEFcOvNHVbINJfX%2BewCiS1Holet0K8bWKcuU%2BkyL23w3G7fVm%2BgeeTUljvtUsDI%2B%2BitZXnTN7uUsueN0AWLpQJBzN5XMhuCsK7h7xrZhdYVg1%2FVC2S25DJXKaARyvt54vjp35asiy3QK0STRbflh62hFymQKcpdMscmdY%2FXR1OTnuOlSKB6JfPQ%2FqSiibLjEPEw%2B5rlslRandvJtAGIrK0fBmWQHMgl3qjIqCqWtGcZ3Ov53BH%2BjgdXHwJg%2FgRY0%2BokGWU%2F4L3qej6KcN6wrbIS%2FhS85YXJ%2FV6laQ8OL6MkmCrZJl1B8QdaQCpXBQU7kG3FzNmWIDuGtviH%2FygtQGvj8IUX%2F0fgv4hcKySHk%2FF8Rc0ut%2FEWuHfuHrD4dWrtCQC5ArwNjj3wSnKxECVxOSGsM4xs32p7iX6OxZ63v%2FYj5id%2F9gkqW1TS2jZ%2B2ppMKGhPt2nbSVWvjQD3oHvbupWzpyw1XLVMHc5phE%2FY1mtEmIqQjtf1ZJPLQvuzDg9EtCM9fz9xfxyJt5sMHvy%2FdLtc8ZTJ79jwj%2BQwjrrB0gY6pgFQnTvmjoTECSDUWIHNpFLpmRPuRnijiR8tGDXKFaEplj2sr8j5RnCmITQoQlEFoZ5PsUZAvw3hk6M0o%2BqmNUnmsE0kK609usey7gVPrqjNuH7tXDQzcrkFq4btphzZ9k3CvKrlACL5WEbIif59kLL%2FkLKu%2BE4jh7ivVnnTjkv6DxCDndY1Cw3ZO7mZZfFq8OzHWBZz%2BZjMWWmF2Ibr4dj6kmGVBDrn&X-Amz-Signature=6356a10996ecce0ca6b9ff6d13d6ea08a2d1cf7447197176fc572670152ca819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NH2UENN%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9SLvCU8z2BJT9FAkLT4vB7xArwEfcTYtsc%2Bw0Dt2h2AiEA7oOVNlfukzH70DJrYxIBkapKB%2FUgGC7hGu5Xuch3di4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEytc%2BgqCHci8PVstCrcA7kimQuics1Peqv%2BaYNKLTIdDY4NQ30a%2BvVrK%2FsPFe6fG04d%2F1XcnWx7SlLTQEU%2B7ZXGqrhghDhwVDlUWtDJormy8lpf7TzU2HtHyPkLuMQIiS%2FB%2BZyk2jR%2FaFTf7YEw4DBWxrF4ldIdQ6tZF2YSWqw0OxjXwjmhUy1Q8Y6GYONwzLK8XczuylHLUAHamPECYXB0vDKlLrufz%2Bb3KcJm2pVSO%2F1V8g0jWd%2FvK%2FYelG%2FGVdOVkH2r8IzG%2B8PrRU15RKGQJcZWEuutHGcS7%2Fyw7bcffTTarMjbq6WuDulilGpqYynu4fVEcmglP9b2Kh6MtVgr5CZ4U8sAzJ%2Bj4lK%2FAyhBW8eUr900wruZF7%2B9cO9jZjeksD8BSZqEohPvjomJqTFDzG4HerISMOBDisOBN7jNNbXxZsVzvLGkdtW18y2%2FnUSZN18bInU6W1bMAuFrkDKlfUV2i3KQgPKEysyKonh3ZwbgUNmOhrpXLTSt4IH25W2chWTZga6lGyEoEwU8nUWgfiUQXy8ZVBzGJMt3P28Vx%2BA0ACvaOavDHzFNmvXfLqzlWPFLnsfarbo4hOC4NcizWYk8lXLyD4bW46RxSf95x51B2%2Fr%2B5CqhijAFywrSI2kYLSzvmxFfV%2BG%2BMK%2B2wdIGOqUBgvO0sVqjhtRP6xGe1rGnJXEN3F2oGZ4t8HkEPHjiGFWkCP%2BUj%2FE%2BZF1efvjDRovFUyAEn7vGlvMUm5wWn77Rgr%2F0wQuGZvy%2BayLsa%2BwFFdeAQkWJkrNe2B46tsYEgOZcTHYNv8kaIrVQIrcP5HYNc7gT8fzbEIb57iq8XdPCvJEaY%2ByJknxbKJDWHqdDkz1HSAe3PT2wQmRHLUHTVgJDdgix2JM0&X-Amz-Signature=5d6857d8d555de4db429c1872cc41d89a5367cfdd2ebb781ecee7c53d41d11fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647COJIDC%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BJDKmHovCxK8LnQcfRCXHE4o0NYQoM1i5Zfqj8JYRZgIhAL4TMsBY%2FBCq4VwZVOwfh9olQK%2F%2BQRlWWRPxmJ5C7iNJKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwM7aVx1QIQYpaHscAq3ANDEDyxk6iZQrl9Srbk%2BtcERWFEQrPoRFECRIxqn1pPWJR9dtmmBulYfZuUIVbC%2FGl9HlCAEYkScM7TybSoK8s%2FMPIvzjEmjVOXWazgsZ05AT%2BzBI2C%2F4kDpSZPaE7k%2Bo%2F2%2FlopFM5JeOJq3ehDE3yojFr%2BzF8lDa4OftU65SxFicTc%2BtQ4qGi0St9taCJ6Fb%2BWlqMMnYWY7Ay1jNAdoU0rxmoUYPDKxrsAKCMpz6X5YuHNpl%2FcGieDxT6LDmiV4OmRFrkJqJg%2FSI%2BwaVbpnKFSBSYgUpIuMNnCEjhoILhxppoPWBapP56uNdEGDYDJ8NYDpHZb8GoIIAIFCoJ1iJVYBT7tk0GGWNYbDl7a5CR9NzNfvA%2FXhpP%2FqPxhF6oyHF6pg3dR8qpoDAaDIofHRsmGxhu37q%2BTNMawZiT0qVc%2F8caoqFb7tKC4%2BGt%2B0zfCmq2zkXnplWqqct7kJhDDK66lQIduG9nF5lqD9wjc%2BtpamhaY%2BCCIAd685mLFsExg5KciszmodNwdWtwgd%2BFZZyBFTyVBSlM4lT6Mc6wPxNQ%2FZBt%2BqN56RJquWQza9UrNG0PVB0%2Fx99345U%2FtnArxZFKNA6JlvD11oop0hSuSJWpKRw2ABoazegKTS13I9TDOtsHSBjqkARgSxO7H2%2Bc33COhjXH8PHssow5%2BDQ4cW4Jti9itR2e78rUKkruqN9cCCJviP6Dmx%2FoWaODxLUkXa7mG74iiGv4E7XEMrhTbT3SbW7PwAwzhJ8%2Fl9wf%2BMwtUDct2SiDpA9UZThNbnDVrZJ4zQJu5tFxussjtdh8gLtUNKCBWI%2F5dnCGXygdrpCykM10qjJTW1B8muodwIcsWq3tDafDL075RRD6N&X-Amz-Signature=049ed8d626afadfdddc9087ac8e54982f1d30b0e3e227c73f1b0cd1a1f8b039d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
