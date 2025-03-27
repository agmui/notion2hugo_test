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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYL7M7EL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcqds0O8s5nnLXKU0NppukhWUOAh4kAOqnoybOegAZBAiEAnz7SLEPnIGtB1IZeN1ml5KU7a4wA2zLFgw%2FagecYWNMq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDI8ZCTN84YW1F8XXbircA1dOTC7tRAhvL%2F6sE%2F9Wt3J0ikxJnoOAefebImh%2FWSql2F5qwWoioE%2FW5YYemVYuFQUnDEVAMwpe65t%2B0QkGO3AJ6Os6a9NMre%2FFO%2FJi0Yyp7FW37LjnI6WmtH0%2FPYBMswX3qmXBqK5Roo1ZGmC%2FUFZ%2Fq%2Fft8f7AvcS0JMG9fohHTZqjGV2KEVMV8pr1scNvUHfGCEz7DMugtMgWuqChV5q5Za6fMH58YZlycNwFjqIr4LeSceRHZ7ApnXjBTg7nipZXaLo0yQwRTU7MKkpJ%2FMNO9uH9F7Pr79JwjApC%2BfEYCYQbdUfXOAbBotZMJHOvICQ1T00PBFgl2zQds5yCii%2B44yzXE%2FjclwqrRXRhLqInQONDen00UPG%2BbRgMf7KSqKAddyktjUCraKHReVe4aM1fWHz9xlWIITjhCnpT0S4gRw%2BWXMBMKebO%2FiYui123eAAzeX7RhnKxM6vpeYw%2Fu9CCCZsaSXi2Ne4Dvyth4vAr08cLiruA%2FnqcQ1kjpnfMuxWONFi%2FALH8v7MNWZ6N10xnQcXybC21OGuAfjfQyWlqsTOl48s0kXbR3B1SxTo99kKAt4jWVtk1XfdahxHw%2BwmJcGpP1%2BhGAsb4btn7NzsJ8Hli9Xs7ouHH6ziUMJ%2Blk78GOqUB3RT28Spq5lG6rf0lIdx%2FxlfpNRbgXfkqPff%2Fg%2F8OgBErnJMsCgzplDsCnqzuLsfWESZqGrDMA6torzx9ycyhNvp5U%2BlreWSQvpakk3Suc9JIZFjR8oljfvvJpeN9ZOqay5tuCVremV%2BO0Un7jQA3SlomhshFraLnz2z2qweGugRsX8zH8YzTPl9%2FChy3AyR4DyAbrUi5xT2%2B%2FWk2GUWtnboKeZkI&X-Amz-Signature=f28d0e2ef13b42b6036c5af664e884d3151ce877c540a8d680a908813817bb9d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYL7M7EL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcqds0O8s5nnLXKU0NppukhWUOAh4kAOqnoybOegAZBAiEAnz7SLEPnIGtB1IZeN1ml5KU7a4wA2zLFgw%2FagecYWNMq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDI8ZCTN84YW1F8XXbircA1dOTC7tRAhvL%2F6sE%2F9Wt3J0ikxJnoOAefebImh%2FWSql2F5qwWoioE%2FW5YYemVYuFQUnDEVAMwpe65t%2B0QkGO3AJ6Os6a9NMre%2FFO%2FJi0Yyp7FW37LjnI6WmtH0%2FPYBMswX3qmXBqK5Roo1ZGmC%2FUFZ%2Fq%2Fft8f7AvcS0JMG9fohHTZqjGV2KEVMV8pr1scNvUHfGCEz7DMugtMgWuqChV5q5Za6fMH58YZlycNwFjqIr4LeSceRHZ7ApnXjBTg7nipZXaLo0yQwRTU7MKkpJ%2FMNO9uH9F7Pr79JwjApC%2BfEYCYQbdUfXOAbBotZMJHOvICQ1T00PBFgl2zQds5yCii%2B44yzXE%2FjclwqrRXRhLqInQONDen00UPG%2BbRgMf7KSqKAddyktjUCraKHReVe4aM1fWHz9xlWIITjhCnpT0S4gRw%2BWXMBMKebO%2FiYui123eAAzeX7RhnKxM6vpeYw%2Fu9CCCZsaSXi2Ne4Dvyth4vAr08cLiruA%2FnqcQ1kjpnfMuxWONFi%2FALH8v7MNWZ6N10xnQcXybC21OGuAfjfQyWlqsTOl48s0kXbR3B1SxTo99kKAt4jWVtk1XfdahxHw%2BwmJcGpP1%2BhGAsb4btn7NzsJ8Hli9Xs7ouHH6ziUMJ%2Blk78GOqUB3RT28Spq5lG6rf0lIdx%2FxlfpNRbgXfkqPff%2Fg%2F8OgBErnJMsCgzplDsCnqzuLsfWESZqGrDMA6torzx9ycyhNvp5U%2BlreWSQvpakk3Suc9JIZFjR8oljfvvJpeN9ZOqay5tuCVremV%2BO0Un7jQA3SlomhshFraLnz2z2qweGugRsX8zH8YzTPl9%2FChy3AyR4DyAbrUi5xT2%2B%2FWk2GUWtnboKeZkI&X-Amz-Signature=d2ddfd84de36b6e3e84d1b91fab80fe04fbc655c8176ffe8bfed2d856f8b3598&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REMSVIUX%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDImF3Y3Xhx3eq53qOmdonH0DGVw277bI7uWmsubwCGAiEAnBWdLM4KkAYR%2FaEZeA1q3e2aaEEGZxkRqvGSGRTGc%2BIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDGtUZb3yFBw09N%2BJdyrcA5k4PkTFHirnLkwB5MT1I4d0q%2BwmZfTpYmL327gzNY7EKGEWO89Lq2v7euPiVT3CFWSjSa5Af%2FE4kPjLTcwyy67ZMtjKjpsozxW3fwPHU5QvQoCCHlBezKSEz8Zfe8U4nLK4Nd1px2WYOadyHQO2Fe0eoR9o4EYcCViHtgtowav18Gb1jQlXTwjkes%2Fx7rgYCZGQA%2FjIzjdcSegNI3WztLxZatAccwmInRHWJ1ppqJ96kx%2Fn4exlO4osVuN0KJrnUCu%2BqSBSJD2vArNUkfQxelhUvniwrA%2BoKZmsWt2jCmM7gdbBe0Kd97%2FYyhOI6AlGcxdhTIwpcJDF4PYHD%2B4AXklewNgKswqUJvU9AqvO2tYgT3pTvyn3ePA6HxPSkZdxOqCbs%2Fo9dj32Y9JokUKiiNTPmnQP7sQx3Tt8COf9G1j0WgQ8DuQywp%2BUmC95ZKgasQn5uskwpUFOX1IPJuiHoatHD1f2YNyg%2BEHiqyHie%2Fws%2Falro0%2BpVkoummT%2Fms6Imqo%2FW6DI%2FS1olvG0BwECePGPm1PTxGvg5D1xmzuGacJOWU3LfDqf5ddSZR%2FEjv89rM4v%2FPxEuGuTW2%2F%2BvXv08WTKhJrqSGjWe%2BvOjeP6kBWghjwbbltfRU7ojkh%2BMLClk78GOqUBADTeirRurwQnhAb%2FsmfKGm5rRCpIJ%2F4G5KMRtekMS%2BN4Rphhh60hYDtFbutN6uLrjj3psCG2jj%2BycW1p%2FGUT6ZSl92h%2F2TcDF1JnDJSV3zD5APvhy6MxjYaoYdZHdDZ%2B3rL3l6ZR3c8a4otEvBrRxVZQ85SEc4lSXytmnoOhLCDq44MHbRTftX6isbg70N8J%2B1qTpaJRaZ1TmWqYzNVVhhnHYOBE&X-Amz-Signature=0e2fc2ca79561a87e9a9dd245d3058560a46577438ff1058cad9d7c4f84cc98a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGGN5CAS%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FwE35wdjDiSUbfGRjTsHpiJNyx%2BNB0SfzycBlxBykugIgPYv05oHVxhPIcvEHqqn5Dmu7C5H7zzqfkBIsVNl%2F4Qwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDBEz9BKjq18mlO7n4SrcA%2BH%2BV%2BiyLBPebmnUOgSwDfpGIW5qzmPhUhT8Xmonj2OcYxF%2FiSh0z8ml1KDFgW%2B1TFAP0tOnbsBmI%2Bz2zyzDUxdVXXPIMObXTKUpkjP0IlJTFDuYCat%2BnW56k7yDOejhqXHLySdg448nVGdPWPflb5pmhD%2FmsGzHmCw2OiQHHkiSN1Fo1KS15CuxOlBCsEULv7uxAqtWvrQq5SjL2UrNW6Wvdcm4XEdDKdVI4h9L8Md4PYu7A4aMU0EUY9rGAO9jPUT6AwNvllkmuLZ%2FDhy1OPc%2BqVxg%2F%2B3B%2Bfbj2zzs0mm9gjiTHJ5kkX5flh4PeG6gjbQFn%2FVu61KpaBXsKOUnNkMhGfy63Upu0wjF8%2BH%2BzuZgnXdCAdd5pmDJjFuz5uOmy%2FBsyqEJWLVsQ%2BIPGaOMw7SQG6tzqOm7zi%2FvixOSvyHD%2Bwg6bMstKF3yjh09aLpOni1wfJFG6s8u312YvMjGZLEnvLSXQT67afKjIiB4PTBg07%2BgAQ4Q6AAsDvZy0s9sTS%2BZ4oBbz9Bah4snUQs2dRAMMm3W%2FcNYCvJTPuxDUZkliZTEWZm6OUAU4fC1fTREvIzgscSCTK%2FkYrRZenYjVpHEnmp%2BVYwrPwn1bnOOYDrL8y0H7nrqL0tkNFd%2FMKqlk78GOqUB2pbR4WlKwaxWKRZtblfV%2Bvh2toZ%2BleJ1cg%2Bwf87t4j%2FfxF%2BBCBJWNDVv0KMSsMyI8R%2BEf3DC29Cwym6FA6o0BgXndbYEWvWMgq42S0%2F2sgBq3KYK%2FDS9YTp0bQX2%2BAScOJ0DZ7A7lN4Os6p3fhTOZ6TMWsjP054B3d0hjoSfC%2BHAe00NfQhXRqPjE9pOvVQDmME6O9IszKpnHWA0GIG8luUBsN4i&X-Amz-Signature=73b6d86d7513b0de36d8d70d0c9a68455d472d38208c1ea3cc144675dfec87f2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYL7M7EL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcqds0O8s5nnLXKU0NppukhWUOAh4kAOqnoybOegAZBAiEAnz7SLEPnIGtB1IZeN1ml5KU7a4wA2zLFgw%2FagecYWNMq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDI8ZCTN84YW1F8XXbircA1dOTC7tRAhvL%2F6sE%2F9Wt3J0ikxJnoOAefebImh%2FWSql2F5qwWoioE%2FW5YYemVYuFQUnDEVAMwpe65t%2B0QkGO3AJ6Os6a9NMre%2FFO%2FJi0Yyp7FW37LjnI6WmtH0%2FPYBMswX3qmXBqK5Roo1ZGmC%2FUFZ%2Fq%2Fft8f7AvcS0JMG9fohHTZqjGV2KEVMV8pr1scNvUHfGCEz7DMugtMgWuqChV5q5Za6fMH58YZlycNwFjqIr4LeSceRHZ7ApnXjBTg7nipZXaLo0yQwRTU7MKkpJ%2FMNO9uH9F7Pr79JwjApC%2BfEYCYQbdUfXOAbBotZMJHOvICQ1T00PBFgl2zQds5yCii%2B44yzXE%2FjclwqrRXRhLqInQONDen00UPG%2BbRgMf7KSqKAddyktjUCraKHReVe4aM1fWHz9xlWIITjhCnpT0S4gRw%2BWXMBMKebO%2FiYui123eAAzeX7RhnKxM6vpeYw%2Fu9CCCZsaSXi2Ne4Dvyth4vAr08cLiruA%2FnqcQ1kjpnfMuxWONFi%2FALH8v7MNWZ6N10xnQcXybC21OGuAfjfQyWlqsTOl48s0kXbR3B1SxTo99kKAt4jWVtk1XfdahxHw%2BwmJcGpP1%2BhGAsb4btn7NzsJ8Hli9Xs7ouHH6ziUMJ%2Blk78GOqUB3RT28Spq5lG6rf0lIdx%2FxlfpNRbgXfkqPff%2Fg%2F8OgBErnJMsCgzplDsCnqzuLsfWESZqGrDMA6torzx9ycyhNvp5U%2BlreWSQvpakk3Suc9JIZFjR8oljfvvJpeN9ZOqay5tuCVremV%2BO0Un7jQA3SlomhshFraLnz2z2qweGugRsX8zH8YzTPl9%2FChy3AyR4DyAbrUi5xT2%2B%2FWk2GUWtnboKeZkI&X-Amz-Signature=cfc13324a4db418e6b14c02e1f77c55d8b1ef693a31bb56024c8609101d602d2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
