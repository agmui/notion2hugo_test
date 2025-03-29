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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZGOD4DY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDFmsvDMxUo7U5WMRkUW2RkxrYkrzjao8o1hWQa8VS%2FQwIhAKoB34SB13%2Fr3jylSsGArweTVV8z3EzblywXhCO9kXqeKv8DCG8QABoMNjM3NDIzMTgzODA1IgzWBp73Pbg%2FZA2SnlQq3AOAyeR6dWN3F0%2BjWgWiCPZ%2F%2BGLEOIiWCsPEUk3WMGmDSIQJ1lze2ZJrgSosLguVYeEHhPnNktx8oOH9AoPzz54UfeSilu9UL4MEralVajGmu9s9LYZL5p1a4fZ86hkPxF3Nuuljmx7ZdFSGSskFdgU99R1hHcc2jp2BU49QiHTOhMhrfb5eTVyUd%2BSk87FdDBB3OcvW25UgXR%2BFp3tER1w3%2BCD2w7C665GaHa7zPvrsMpoU%2FVCXsFX%2Fe5ME22zqJjGMAad6y5ENqBUAnib%2FQaXY9qslsHq0qLdwjdvva5S0075jYfACInaPbjD%2F5kMVLDb9VfGafnm8rL4BYSh7z7l7mKPD5k8MJoV3GhJDIRJar4dDVfEWIkTARXZxLmDne1OpxsNdF95Apmh9jaHSq%2FHv3LSriwzCeTQjqWtng351oXY9%2BgKiLyVI49vB6qOcMlAE%2F0h7Bht3qslZUPrfYHz%2F06QvUxcRYw3ezgM9oycdKhNvT73bvVZz0lHj53zydNRo7tPZ6HBHXOeJ1Y0x3E9%2BxyJ37ZMK86dWpmeKzlBrIAPUM%2Br7hfADB5cKY5zg5gdmvDZ2WxlJ8WkIY1MMWrKBX6jJB3oD5efPZy5%2Fj%2B2k83yc7Lj9KBGLvQEpGjCckJ6%2FBjqkAW%2BP91UlfQrhzNh3qDExeFcHnBMobHeSmmhN81o3oJk4UFmWRGdLMp9yYwQLT0SbUGI9pnmRofP9fdI2oN9ebKjZ8FqeTyBaFYtDjd9p3iuYNFyIgjniCUcrhtFAqCdTTO0VU0ILiOveuNqXAbYLQqXUvmNkMJIHoV93CxH0PXVb2nD7AC0Kf%2FZHqi7yHqFctuqES6xgvSnD8tOu0HEd%2FpfIP%2FJS&X-Amz-Signature=86fe92bf2eace6bfed87b4c7a9a85ef8742cf02abb799359d219acf1b3ceaf10&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZGOD4DY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDFmsvDMxUo7U5WMRkUW2RkxrYkrzjao8o1hWQa8VS%2FQwIhAKoB34SB13%2Fr3jylSsGArweTVV8z3EzblywXhCO9kXqeKv8DCG8QABoMNjM3NDIzMTgzODA1IgzWBp73Pbg%2FZA2SnlQq3AOAyeR6dWN3F0%2BjWgWiCPZ%2F%2BGLEOIiWCsPEUk3WMGmDSIQJ1lze2ZJrgSosLguVYeEHhPnNktx8oOH9AoPzz54UfeSilu9UL4MEralVajGmu9s9LYZL5p1a4fZ86hkPxF3Nuuljmx7ZdFSGSskFdgU99R1hHcc2jp2BU49QiHTOhMhrfb5eTVyUd%2BSk87FdDBB3OcvW25UgXR%2BFp3tER1w3%2BCD2w7C665GaHa7zPvrsMpoU%2FVCXsFX%2Fe5ME22zqJjGMAad6y5ENqBUAnib%2FQaXY9qslsHq0qLdwjdvva5S0075jYfACInaPbjD%2F5kMVLDb9VfGafnm8rL4BYSh7z7l7mKPD5k8MJoV3GhJDIRJar4dDVfEWIkTARXZxLmDne1OpxsNdF95Apmh9jaHSq%2FHv3LSriwzCeTQjqWtng351oXY9%2BgKiLyVI49vB6qOcMlAE%2F0h7Bht3qslZUPrfYHz%2F06QvUxcRYw3ezgM9oycdKhNvT73bvVZz0lHj53zydNRo7tPZ6HBHXOeJ1Y0x3E9%2BxyJ37ZMK86dWpmeKzlBrIAPUM%2Br7hfADB5cKY5zg5gdmvDZ2WxlJ8WkIY1MMWrKBX6jJB3oD5efPZy5%2Fj%2B2k83yc7Lj9KBGLvQEpGjCckJ6%2FBjqkAW%2BP91UlfQrhzNh3qDExeFcHnBMobHeSmmhN81o3oJk4UFmWRGdLMp9yYwQLT0SbUGI9pnmRofP9fdI2oN9ebKjZ8FqeTyBaFYtDjd9p3iuYNFyIgjniCUcrhtFAqCdTTO0VU0ILiOveuNqXAbYLQqXUvmNkMJIHoV93CxH0PXVb2nD7AC0Kf%2FZHqi7yHqFctuqES6xgvSnD8tOu0HEd%2FpfIP%2FJS&X-Amz-Signature=c6ea40eb60918106fe0e87ecc8d556dd804206ec73dead97c8e4e9eea65f13a9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXBPVIUZ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQC%2FmZPLLni%2Bw4CUeSCD9DO1thXIkYSI3ZDfXH4LjY8LYAIhAM76EzdHZ8riI%2FUK9XnrLr%2FGDMdHm6CZmSqRS0Nx1MksKv8DCG8QABoMNjM3NDIzMTgzODA1IgwB2iPTK3O5sF4MlQ0q3AOhBvZHQkZSiW6QzCpk6nur9OXUDymLwOwF4dlX%2Bd2M0mFkI8zdiwJF8spLfHI4a6nWzWEQQqkFLIIqUO8sp0JhnQskEw3HClUgiZZOH1Mc25jZ1E0s0b6%2FOtoOSgbcM%2Fwu3Omf90JaW5JAa%2BhlIMBm2snOTcEdl14BBodGo5RFjtvpYyY9CqeWVOql5LYPE0WIer2YMptP08wMKshY4hGX3peF5eOJPszxqlhSZdqwentZ5c0kTbexdi62sv%2Bv4VLU%2BzTNgMYT7GLp9%2BivvKN82Cr4vh5m9uSXQ3YDw7%2Fb%2B7i056a7kPF5HB7IZGbd4XA22gnfB7nN2ZiFOxlAPyaSV8JPrMBa7%2BsWkke4IcSf6b5tiNQw0YbQwk%2FW3TpmfLIzkMxA3Fyz2m5%2FRvb%2Fg4OJOuI6Xb9tD8pbmAWpjoEmdadNGewh35au85mmCFdpmBsnNPl6B%2F696vZEhDzvhxynrynZweVGSfVCt3Q5sZnQsesI77etOmvVZp4DFryD0mh%2FX4kCtihL8OxmGB5ilzTtbBnDdn97U7gqjYSS0ba2VRhT6CNJI%2B20bCZVkxjUzIdgd%2BNGhwFihVzcqW1F1CaD6ymfFObDCtRtXaxzsTlgA3sc8uBdU%2FtYkE4HWjC1kJ6%2FBjqkAXXkCYaBW%2BUSPhYHsjG%2BUjF4SIoOQa5erdDluDji8SisuQ3cUyWF2btY4VMEPiVdOEkFn00g8cvafY8Q7g%2F9iaPC5g9wfuOWIet921iT%2B0Cg%2Bu39eBNVncU5yijtwPlSvvmJt%2BLBwTpydFbixZYGMAYf8lBeLmVFRjWyPa7etJJeLnlslzaSISHDxLgNU%2Bt84roSf8R6D%2Fk77XWKpGYj5miJFkx0&X-Amz-Signature=a1ac18435da3e147c5ad9e334105882a0d8837c67240b358b83f37473f5c0003&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMQRASS7%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIFgkFNt9grDT%2FchHNZjJYOli07bCEIJXAU79b7yBDzXcAiAvwhUq3TdAHAR3f1zXtYqDjfCBKx3FUzbkQDsDN1wR%2Byr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMU2pHLimMhdK149psKtwDlfwFFLMAj0ybKT%2ByAYFCI5cJOK3InK9xBuxkHZpJI8SsiLuFnU%2Bemjt1Chzcw%2FjXIwUrN6gfHCdIGoU3K1tMXF8qJZU%2FcgAcr9FyHTdumjnTb2Jp8rDD%2BO6wEXmlxf9YMIVxL%2BNSnEuQSLgnbE5iWgdLbd7WqgnyyWllCtnGtaGava%2B65CmKhCQjFr1Bh%2FCryEz%2BikktxIqzYELXCLFUZ2OvxlHT7Xb1ViW71%2B%2B6DQ2kvJxQi%2F1JgLiP58wSZU0btNNOI9I07dYcmtWF%2BWSDkliQQoVOUMO%2FS8uEPohJ0bLBTr%2F1uFsgox2IXOKdTYm7jFV3ANGOppwAFLcC8ZnyGnX3%2BYyHLXKZY9GsQd2soWO7qaMIM6ZVkXrTEsbBIzqJ0ff%2BxnwnKUrxQHthzwlK%2BymOS5LOZ%2BtqMAn8vYTHln0PnQbX5WGvstTWrkrZrJeZg4MldSqyt1lbIjdESeWC3J%2F1GotLeLyxY3hzbUOKo7vlOjD%2B3Gz0H%2B%2Bgk0q4DcCqRqKNRYLO9OO1wMhg3bLygUiLJbJN9FFIygh7YQccNanmGyCD7DmbJc5wxVZTGK%2BDY0tA2VT7JSch53JFk%2Bx7MNKFkn67Pf0v4JwXBLa1Mm%2Bf%2Be8ggIH3ds5zjcswlpCevwY6pgHqIAOW5lbEk7dlWnXmXNInYnVO4NRuceiHKcSzmv8BEOkD1Wyw8cwDRMRJjLllr6kfk03fbIBMv4p3ovgg%2F8kx6DqBH1HEdjxgDi%2FmQqnO3Fvv7VCtqdayzY50BvfmS6%2Fr67Sa3EtR36cM25GnWHN4BwAJPFAlp6X9lt1kbvImy67ExjbLK78pbeSnz7X0drEQOvchoMOcKeaW4h1KLJUIl34YvJ1c&X-Amz-Signature=15530e2c256104b509acfe9926eac0cd554e79ac0929200a71350c86ba59257a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZGOD4DY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDFmsvDMxUo7U5WMRkUW2RkxrYkrzjao8o1hWQa8VS%2FQwIhAKoB34SB13%2Fr3jylSsGArweTVV8z3EzblywXhCO9kXqeKv8DCG8QABoMNjM3NDIzMTgzODA1IgzWBp73Pbg%2FZA2SnlQq3AOAyeR6dWN3F0%2BjWgWiCPZ%2F%2BGLEOIiWCsPEUk3WMGmDSIQJ1lze2ZJrgSosLguVYeEHhPnNktx8oOH9AoPzz54UfeSilu9UL4MEralVajGmu9s9LYZL5p1a4fZ86hkPxF3Nuuljmx7ZdFSGSskFdgU99R1hHcc2jp2BU49QiHTOhMhrfb5eTVyUd%2BSk87FdDBB3OcvW25UgXR%2BFp3tER1w3%2BCD2w7C665GaHa7zPvrsMpoU%2FVCXsFX%2Fe5ME22zqJjGMAad6y5ENqBUAnib%2FQaXY9qslsHq0qLdwjdvva5S0075jYfACInaPbjD%2F5kMVLDb9VfGafnm8rL4BYSh7z7l7mKPD5k8MJoV3GhJDIRJar4dDVfEWIkTARXZxLmDne1OpxsNdF95Apmh9jaHSq%2FHv3LSriwzCeTQjqWtng351oXY9%2BgKiLyVI49vB6qOcMlAE%2F0h7Bht3qslZUPrfYHz%2F06QvUxcRYw3ezgM9oycdKhNvT73bvVZz0lHj53zydNRo7tPZ6HBHXOeJ1Y0x3E9%2BxyJ37ZMK86dWpmeKzlBrIAPUM%2Br7hfADB5cKY5zg5gdmvDZ2WxlJ8WkIY1MMWrKBX6jJB3oD5efPZy5%2Fj%2B2k83yc7Lj9KBGLvQEpGjCckJ6%2FBjqkAW%2BP91UlfQrhzNh3qDExeFcHnBMobHeSmmhN81o3oJk4UFmWRGdLMp9yYwQLT0SbUGI9pnmRofP9fdI2oN9ebKjZ8FqeTyBaFYtDjd9p3iuYNFyIgjniCUcrhtFAqCdTTO0VU0ILiOveuNqXAbYLQqXUvmNkMJIHoV93CxH0PXVb2nD7AC0Kf%2FZHqi7yHqFctuqES6xgvSnD8tOu0HEd%2FpfIP%2FJS&X-Amz-Signature=3d7da711fcc1a8aa0c0529728dafd35d7e10db320314984b6885f8f33864b77d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
