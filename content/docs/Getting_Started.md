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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPH43ZW6%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T100718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEL5AQImhpXi21ZnA7Jfc0UErTQIWte8OSly7%2FrV9A4gIhANsXTdyxZg9wK4DN%2F4HDftOT%2BVEJ0u74FZuL9HDSBcepKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzd309ljtaD49x8DZYq3AMx%2BNIyXBylUozqDLvHq%2B3fYOrfMkzm%2B6CCBcJAGnV37e8FAcuXtsgFQ6VGterurne1zxlSM2l9v2qKD4xLu0Nw7%2BDb9XzY55Rs4zlkKPBvVNGuvhhQWEnT%2BHSd%2FC6bCaTVrTamBSOYee%2FT0SKuhRAcA78xCQ1itafSq%2B3VBnKpbBdiTrOGuoBfsCFWxYTObONJQPGw5lNcOzGa6O9sysJ3LYbSFLE0%2ByEWj9UXuu%2FxjPwMAG8Gdr9AF6a%2BzvhMyRoDYYOEwvMxZvxkvWPDubQ4%2F1K4fYQtFZlXk0Wyy3XnvYAsp0sXMGMXpKdKQZhSHzwojZXhZwjleJgKxPtP%2Fdr%2F372q3EWbAvv%2FlR%2BZssYbjKFqliGH77b8VG37L82CmnzcIfxQOvNV3A0P1XmyiIM7s2JqjUGy8%2FAZIMT%2FJ76ERC4HlqLGeoIQADCKq5Tna198u8DA9RHbIQZEDfHUrt1VgSFpsRwyvec%2BZCQYB2o0eK%2BbtFvuybksqpqKoxTK3Lc8Cm36aYh92boiZPPFeHkeVtDuaQ9q%2BzkNgJ8Hk7GnkQkMoCujvonNpWyzQTLA6mok0wJFr3EreaA%2F5m94kZsK%2FdJDWeL1KgvBK%2FpHnW96S%2FphG7ZGmBg72XDyxDDupfe8BjqkARrBtKJl3FABGi5tE%2FN1q%2FTVpHnSkfp5AMCU41h4ntntWL%2B6%2BKzBKt%2FffqwR69qZCfjVNOkBhv4rUEi1phgK2G18DrB%2BRdjXQXZyNJYHeR4y8KK5Mxg8NMnlsqUa6pggMEA%2BDLGdF66gdavkbKH5BSOIw1faIeiT5zEDhAam0JMoZtIwf0TP6WMVf0PTKo7yi8OfNDhmVKCu2fHen3n%2BjHOq5h9b&X-Amz-Signature=ab0e943744417d95e9d6440769f9bb6808342e859ab2d1caf7d69e10938fac0a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPH43ZW6%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T100718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEL5AQImhpXi21ZnA7Jfc0UErTQIWte8OSly7%2FrV9A4gIhANsXTdyxZg9wK4DN%2F4HDftOT%2BVEJ0u74FZuL9HDSBcepKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzd309ljtaD49x8DZYq3AMx%2BNIyXBylUozqDLvHq%2B3fYOrfMkzm%2B6CCBcJAGnV37e8FAcuXtsgFQ6VGterurne1zxlSM2l9v2qKD4xLu0Nw7%2BDb9XzY55Rs4zlkKPBvVNGuvhhQWEnT%2BHSd%2FC6bCaTVrTamBSOYee%2FT0SKuhRAcA78xCQ1itafSq%2B3VBnKpbBdiTrOGuoBfsCFWxYTObONJQPGw5lNcOzGa6O9sysJ3LYbSFLE0%2ByEWj9UXuu%2FxjPwMAG8Gdr9AF6a%2BzvhMyRoDYYOEwvMxZvxkvWPDubQ4%2F1K4fYQtFZlXk0Wyy3XnvYAsp0sXMGMXpKdKQZhSHzwojZXhZwjleJgKxPtP%2Fdr%2F372q3EWbAvv%2FlR%2BZssYbjKFqliGH77b8VG37L82CmnzcIfxQOvNV3A0P1XmyiIM7s2JqjUGy8%2FAZIMT%2FJ76ERC4HlqLGeoIQADCKq5Tna198u8DA9RHbIQZEDfHUrt1VgSFpsRwyvec%2BZCQYB2o0eK%2BbtFvuybksqpqKoxTK3Lc8Cm36aYh92boiZPPFeHkeVtDuaQ9q%2BzkNgJ8Hk7GnkQkMoCujvonNpWyzQTLA6mok0wJFr3EreaA%2F5m94kZsK%2FdJDWeL1KgvBK%2FpHnW96S%2FphG7ZGmBg72XDyxDDupfe8BjqkARrBtKJl3FABGi5tE%2FN1q%2FTVpHnSkfp5AMCU41h4ntntWL%2B6%2BKzBKt%2FffqwR69qZCfjVNOkBhv4rUEi1phgK2G18DrB%2BRdjXQXZyNJYHeR4y8KK5Mxg8NMnlsqUa6pggMEA%2BDLGdF66gdavkbKH5BSOIw1faIeiT5zEDhAam0JMoZtIwf0TP6WMVf0PTKo7yi8OfNDhmVKCu2fHen3n%2BjHOq5h9b&X-Amz-Signature=f8264459a24326722327f743b8aa089446bef07932c0919077c0ce13deae2b01&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LPJA72N%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T100719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3jjCgtCbuFK9nK829o0YDQDz%2BvcD53BwJFwRVkRY7rAiEAx4Y4e6dgUCZL2NcgUzfGYuQvcDhDwO126v8mRzmnhosqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA32Ls9OFMRR8Om0MyrcA9AtZI6PbK0DhHYGVG8Thv1ekEenRoT76fp0vXuErSw%2BDKADOL%2BEosBrxTQdlUz1Cb5UC5G4VePkvJyuK3ss8Fc3qFHLtSrxzaXb97egBpFu5z78RHHJ%2B0N82aS9V45Agj%2B1xBDW4FNB0HU5mtItanH2znvIXKw5Gzj7Beo%2FJ6ZarJlObeKWQqcNPcU5CHOJfMP1CZeC7494OceBwDR4lgzxv6JWH%2Bghfs7NLdLyQ7%2B33eb3R9WUG4HRr4739ydEwkQlHVGmSNpIGVlR8RE9wXRzAaxHN1fUySC8u00pUJJB66215yvo3K0%2BCMsIn5GHcXH2d%2FR94gQwLEpG2N%2FywY2u2B8U4bi6uk2lBqT2JJCi2nPvKCoZqKZqCBxRmXq8R6yo1HgD%2BqHCpPYXU%2FU3anHoLtkuYtFnm30qHYEdTmeReyIoqNGQKmQC2aY98qnD9gO1QFhX4vHeo6rz3JLmXTbxcOCjON9q3Pk85aOVSY%2BawCTfuU8WkNGBQcYGiUGpqBT6aOSsUSqTDet04Nm10Rrh48JLMRGOl6kz8jGNK4iCss4oY1gfHm6MsBhP2TNRoCkwW4OmACqPkbZkmxjII2%2FgWluS8n3aU6PJGTAk5uIVcoDC65eD5IvXgRlGMO2l97wGOqUBJsgtcFqlhF%2BV4PCYDBfddqh1oDq9xcA44EbTb%2B9MvsfpiNAHCb0kaZfOcG2iI%2BchwTLXfUcggLB%2Bd1ULS7Cve%2FN3efpB%2FelNDF5qMwyiWTWP2qhVP%2F32xnnslF5bdL3Mnl2E6od3SQcPyPA%2FLzo6bbEEU8FY38Xq%2B2DgmoE2rHS41ggD%2FUXy8hY9rwnf2t%2BTJwmj4GrwV4WuDAhmEhPxGUwEayjl&X-Amz-Signature=c316f6bd035cf4d19f8531b75b463e8918151deb1226bbcb9962cd87267bd968&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622Z4ADMK%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T100719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSNZX3hpJ6M9nrwXAEvJXKRHiqRNt2UJfR4ZIRTo30WAIgY%2FqSBawcEpKE6KXjcTCdfCZRJgbCq7PBKAJUozcuMacqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrjSHwZj4zglUcHPCrcA1X1cR9lXKH8%2F%2BHbqz%2BXsvr2QbnX%2FDvdVkxcad572z1T8UaKxW6nimtRpz%2BUdQdu7oYkYqY9ywdPYpMTm1YgNUv0ltCBAErh0aHgbvVOfH9TJgd2LJQC2PYqKUDpBpBMmAyUSIOR1%2BbN7VLqRgBHHzMH3q1lqSzrqvL8pfveTgoCIl%2F0hquoKyKfz4hfoFUU2WXm348q2MFUg4vQNrHx%2FLI72CZOZrIDdz8QH4SzyVLdK9K%2Ff%2B3W5HmPy6Wug%2FX9ec5isbQsXnbWDtQCsddQPfT%2Fyuoh%2FXeX6usYPgiMSSWzau1zShcKZA%2FYJ6jStMj6qFJs9sLX78OwYgwMXEedgu6WstN6qltlSH8dfGwgVPK4Wwz1V4%2FXl21XiJW5GfTtu2VXPlzjE56moGcmf4Xh8ZeIrcdeOeoExSoF%2FkThEe7PfOi3oRDpoanMEGbJC41XZxHz9b%2B%2BDLlHeO%2BJM29vcyRjPY43czFjkVz%2B1FvvTXrdkkSOcYORxavuryMrAgUf5nrZLfvAo3vo1CYHQToc61LFbbIBgf2MyUVz4gr0RFKYAprpr9%2BFBij7OYpMTnJLbkJ8is36ZHWn%2BmjkHxSIRNsxY9bxsF7AchprBnhE01liwWlV%2FsaGto2U0mmaMJum97wGOqUBzaK6Ud%2FS0N%2BnO2mUpsmhVJRBHqE%2BFh3jelqtOQefWZlmNIZT0obRJyCDrNPIYwOY48oIrO1M4Bi%2BcHDwiOnRglv6avLLHklya07VK5Gc2zx2NTU3b5piOask5LbPFAhwf6IPWnwn3%2BzF5sVJ77BetSCSeEbGl1NeEkwmwRZcyC%2B4jw0yQhJ4VQZigCqkQsBhnjzSMyVp2LHjxtyuO2mU6%2BRjiQh4&X-Amz-Signature=a8c8060ba2612a5d8379244e7885ceda5651255b67ae4e830306bd5b52222c0b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPH43ZW6%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T100718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEL5AQImhpXi21ZnA7Jfc0UErTQIWte8OSly7%2FrV9A4gIhANsXTdyxZg9wK4DN%2F4HDftOT%2BVEJ0u74FZuL9HDSBcepKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzd309ljtaD49x8DZYq3AMx%2BNIyXBylUozqDLvHq%2B3fYOrfMkzm%2B6CCBcJAGnV37e8FAcuXtsgFQ6VGterurne1zxlSM2l9v2qKD4xLu0Nw7%2BDb9XzY55Rs4zlkKPBvVNGuvhhQWEnT%2BHSd%2FC6bCaTVrTamBSOYee%2FT0SKuhRAcA78xCQ1itafSq%2B3VBnKpbBdiTrOGuoBfsCFWxYTObONJQPGw5lNcOzGa6O9sysJ3LYbSFLE0%2ByEWj9UXuu%2FxjPwMAG8Gdr9AF6a%2BzvhMyRoDYYOEwvMxZvxkvWPDubQ4%2F1K4fYQtFZlXk0Wyy3XnvYAsp0sXMGMXpKdKQZhSHzwojZXhZwjleJgKxPtP%2Fdr%2F372q3EWbAvv%2FlR%2BZssYbjKFqliGH77b8VG37L82CmnzcIfxQOvNV3A0P1XmyiIM7s2JqjUGy8%2FAZIMT%2FJ76ERC4HlqLGeoIQADCKq5Tna198u8DA9RHbIQZEDfHUrt1VgSFpsRwyvec%2BZCQYB2o0eK%2BbtFvuybksqpqKoxTK3Lc8Cm36aYh92boiZPPFeHkeVtDuaQ9q%2BzkNgJ8Hk7GnkQkMoCujvonNpWyzQTLA6mok0wJFr3EreaA%2F5m94kZsK%2FdJDWeL1KgvBK%2FpHnW96S%2FphG7ZGmBg72XDyxDDupfe8BjqkARrBtKJl3FABGi5tE%2FN1q%2FTVpHnSkfp5AMCU41h4ntntWL%2B6%2BKzBKt%2FffqwR69qZCfjVNOkBhv4rUEi1phgK2G18DrB%2BRdjXQXZyNJYHeR4y8KK5Mxg8NMnlsqUa6pggMEA%2BDLGdF66gdavkbKH5BSOIw1faIeiT5zEDhAam0JMoZtIwf0TP6WMVf0PTKo7yi8OfNDhmVKCu2fHen3n%2BjHOq5h9b&X-Amz-Signature=3d8b261b3e8f6e88afe5e344299d7ff8ba76c2bce6e831501da4f617f084ca4d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
