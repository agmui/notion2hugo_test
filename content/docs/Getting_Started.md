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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMJBVBHZ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T171007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIGDTp9ELNzO9Te6%2BtRoMzXy2AtZ1nGgGSzG%2FrZ6cD7dJAiA373CxWfS3wLd4uBYHVOmMyTaXTuSHxJMMJJ%2F2FaVD2ir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM7tV62ncCGx5fW9%2FHKtwDc7xWBBtOisM7sW4B2u3v888yu1zM%2BFsPImXdyqHJajy76TnIMm4Kp%2BUzbTodlB8j766kCDiJSc%2BQ3G3ExOG2wUzYCKDzQcAip%2BhvR31Qx0H7oNvZalHMNZOQr0qgpkoNWm66CSdmJtk7hStYpWZZSPCTPD79dSeFP5IehWsO0ZBpbNU5AMlBCpmdPBSl7YF17LWqsEJ%2FtjwRySb4fSHnHg%2FzVBRmmF36L1Zpq1UZm7e%2FW6EJiz6%2Bu8hglKkXtxw3sA4Q%2F7JZZLK20bjnzJNkzBJ7irHZbdywD0yhZbHmO6sRflZc48xm8wvf8R1qJROrgmtZYk6XFLCk8Jy6ez%2B8r%2B7z%2B48qaEnf7EWB5DRO99baG8Ile2H1lW%2BIiKWWkXA0G8TzbDe6KoaifgqCXvKbobr2wXh2UjBYrVAT9qtw%2FooW%2Fvc0jctDbTKsp2cbGHy6EXxEH0uaHA4Vi6jlzEmBdS7qh%2Bv3TiqtcZ%2B0kxDLIQhBBAdgHdwS9eiL0uS4REXeSyuY%2Bt0%2FqZoFSahhwDkmcS5oBM7dr0oFfv5ehMRBoJI2EX%2Ff5QCoGvZohGF1bKQnKw3PIv2xFatfXE%2FTWrWA%2F4PPQkGyNBZkYkQvu7jHLhGH%2B8469GpdTzbz%2F2YwoL%2FkwwY6pgGVN4mO6CpiehbazXiOvh1%2B04hFf%2BelFlmMMZ6oR785YAftNClHkK6XTkqNlTzBUIIojxhlOyWBBk5Uh8n0tzYvVi4Jy0Jg1Tvqp296Xz%2FveupcE7MRWqx8LncAi%2BmdewAZeqyCH9%2BRCvLrkfEInk%2BYxC84XRtqEeHmkloKIIQqocJVc06flIeudn%2BpEp7%2BvQYtIbCDROZog5Hrw2KUGDNN8XBdoUff&X-Amz-Signature=e4cc163f07777ba4847c9e6bec6ca88003cca084e37ea1aee5d174a6a7f4aeec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMJBVBHZ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T171007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIGDTp9ELNzO9Te6%2BtRoMzXy2AtZ1nGgGSzG%2FrZ6cD7dJAiA373CxWfS3wLd4uBYHVOmMyTaXTuSHxJMMJJ%2F2FaVD2ir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM7tV62ncCGx5fW9%2FHKtwDc7xWBBtOisM7sW4B2u3v888yu1zM%2BFsPImXdyqHJajy76TnIMm4Kp%2BUzbTodlB8j766kCDiJSc%2BQ3G3ExOG2wUzYCKDzQcAip%2BhvR31Qx0H7oNvZalHMNZOQr0qgpkoNWm66CSdmJtk7hStYpWZZSPCTPD79dSeFP5IehWsO0ZBpbNU5AMlBCpmdPBSl7YF17LWqsEJ%2FtjwRySb4fSHnHg%2FzVBRmmF36L1Zpq1UZm7e%2FW6EJiz6%2Bu8hglKkXtxw3sA4Q%2F7JZZLK20bjnzJNkzBJ7irHZbdywD0yhZbHmO6sRflZc48xm8wvf8R1qJROrgmtZYk6XFLCk8Jy6ez%2B8r%2B7z%2B48qaEnf7EWB5DRO99baG8Ile2H1lW%2BIiKWWkXA0G8TzbDe6KoaifgqCXvKbobr2wXh2UjBYrVAT9qtw%2FooW%2Fvc0jctDbTKsp2cbGHy6EXxEH0uaHA4Vi6jlzEmBdS7qh%2Bv3TiqtcZ%2B0kxDLIQhBBAdgHdwS9eiL0uS4REXeSyuY%2Bt0%2FqZoFSahhwDkmcS5oBM7dr0oFfv5ehMRBoJI2EX%2Ff5QCoGvZohGF1bKQnKw3PIv2xFatfXE%2FTWrWA%2F4PPQkGyNBZkYkQvu7jHLhGH%2B8469GpdTzbz%2F2YwoL%2FkwwY6pgGVN4mO6CpiehbazXiOvh1%2B04hFf%2BelFlmMMZ6oR785YAftNClHkK6XTkqNlTzBUIIojxhlOyWBBk5Uh8n0tzYvVi4Jy0Jg1Tvqp296Xz%2FveupcE7MRWqx8LncAi%2BmdewAZeqyCH9%2BRCvLrkfEInk%2BYxC84XRtqEeHmkloKIIQqocJVc06flIeudn%2BpEp7%2BvQYtIbCDROZog5Hrw2KUGDNN8XBdoUff&X-Amz-Signature=bb8205511d675a74603f304e4e61ffc77877d2e8ae2cfe83f18213406239c2e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMJBVBHZ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T171007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIGDTp9ELNzO9Te6%2BtRoMzXy2AtZ1nGgGSzG%2FrZ6cD7dJAiA373CxWfS3wLd4uBYHVOmMyTaXTuSHxJMMJJ%2F2FaVD2ir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM7tV62ncCGx5fW9%2FHKtwDc7xWBBtOisM7sW4B2u3v888yu1zM%2BFsPImXdyqHJajy76TnIMm4Kp%2BUzbTodlB8j766kCDiJSc%2BQ3G3ExOG2wUzYCKDzQcAip%2BhvR31Qx0H7oNvZalHMNZOQr0qgpkoNWm66CSdmJtk7hStYpWZZSPCTPD79dSeFP5IehWsO0ZBpbNU5AMlBCpmdPBSl7YF17LWqsEJ%2FtjwRySb4fSHnHg%2FzVBRmmF36L1Zpq1UZm7e%2FW6EJiz6%2Bu8hglKkXtxw3sA4Q%2F7JZZLK20bjnzJNkzBJ7irHZbdywD0yhZbHmO6sRflZc48xm8wvf8R1qJROrgmtZYk6XFLCk8Jy6ez%2B8r%2B7z%2B48qaEnf7EWB5DRO99baG8Ile2H1lW%2BIiKWWkXA0G8TzbDe6KoaifgqCXvKbobr2wXh2UjBYrVAT9qtw%2FooW%2Fvc0jctDbTKsp2cbGHy6EXxEH0uaHA4Vi6jlzEmBdS7qh%2Bv3TiqtcZ%2B0kxDLIQhBBAdgHdwS9eiL0uS4REXeSyuY%2Bt0%2FqZoFSahhwDkmcS5oBM7dr0oFfv5ehMRBoJI2EX%2Ff5QCoGvZohGF1bKQnKw3PIv2xFatfXE%2FTWrWA%2F4PPQkGyNBZkYkQvu7jHLhGH%2B8469GpdTzbz%2F2YwoL%2FkwwY6pgGVN4mO6CpiehbazXiOvh1%2B04hFf%2BelFlmMMZ6oR785YAftNClHkK6XTkqNlTzBUIIojxhlOyWBBk5Uh8n0tzYvVi4Jy0Jg1Tvqp296Xz%2FveupcE7MRWqx8LncAi%2BmdewAZeqyCH9%2BRCvLrkfEInk%2BYxC84XRtqEeHmkloKIIQqocJVc06flIeudn%2BpEp7%2BvQYtIbCDROZog5Hrw2KUGDNN8XBdoUff&X-Amz-Signature=9edce2c13d1b60726e0c9df58c61c168db8cbf07f04c7dcfd068156844182dfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675HXEVSU%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T171011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCbvxWSCqOQLU%2FuWPuzR3IwYcCe9eQ7hxlRnQw0UeDm0wIhANSJH%2FiS%2BwaK8nOr2C34lgXkynwDAniGvax88HUE15fdKv8DCHkQABoMNjM3NDIzMTgzODA1IgzVgEc2trvO%2FST3pGUq3AMHXHSueGMXQBTQqnNZdERCcXmvtdl7ux3z%2FV3T3h%2FJ9W0PnzssOhwvRH0pIYeiUOsgt3gU6v0Lz1Q5ow0Iklu3yI8Iaz0K0E5QGEtnLUzD04GKVslk56RDp%2BqEU7IljDwvM4li00gntih0Sw%2BfR7%2F0xzJ4h7rk6Ei8GKaFGg7k1xDBe5WFppSpSj8yySZp%2FboiOc3xYkBXMH4Bkdr8G41c6rk7mdlsz7ke2iAMGjwUlCFPwumCDWo%2BZeJwTF%2BrbBza0EyorZSoI1rtj1TMjfs3yn8haVeT738D3BEy80tj0RV4sLQwSxvNbywEQl0reEFjUFviWk6tJrlkZsqdcRv%2FZnSZXGhOOEpgRCvsshO7PdOFPUS%2B%2F8PhVW%2FzmNrgOpvkk0hgdv4j5OZya%2Fmwswmb8Wtia7pJZIBYZdbgVbOIqKUnxviCeSYdkR7JcMEaWBRDEpN8xALw9xK6po2%2BUOIS7F0%2Bl%2BQBKR7iO8vc8TbDpoGyeZKQD6ZE5CcciACoWzoOLwK%2FxKNOuOs6W3nvfBqzATpYh0RY6N3uzXjUvLU1%2FfE6Qx3dkcCtf32gtQvstK7uTPgj68BVze12tX5Vot1cs1fA%2FPB7f6q1E1x9xDnGhoWxROr%2FZo%2FdCOrbzzC%2Fv%2BTDBjqkAaP214fOSw08oZTIQngjUJn9gJ3EkUOOZPV5G5qK1GvSt0DsrqtGkdt%2F0hkqMrx%2BZd91uGGrsWvdJrTGk76CDEmADku0%2BOoYF9SEyIg7%2F5Pr3cxB0u0zfGtUkVBbwLNW3IR67VvZe4fp2C982S%2Fp5wJ%2F%2BsEm3OFyeIYeANTSzEe1hu075IxLqG1tFB7LclAHs%2BzFngpyPptTjCEZcLBqxhs7in8B&X-Amz-Signature=fc576f63e72958dac705cab6547d58184282784f060a5c3ea1f396a7de83e222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPPYWXUA%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T171011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIALaQ4i9VPot11LB432IRUkqkUz0YodcSyrXna9c%2F18ZAiEA%2FghoVbmI4CyHpM3m8q8M9obo1WXMH2K80JC70DhMMrMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDKo7Boxv0wWN4x1T%2BSrcAx3GVzMK3V14YJx8rLDUB2OeAXxJjpDoOKCEJ5SygeUdhyYSarNnFckymgfpMoNrRQotlkHXT027JCKyMeMwtJ2ohJ6A6oAp%2FsHVsvqQDNwfonPNlRQpqfUU2bzTQqJR2KKtBEUGEi%2F5AVqRdFWz2U%2FRBRHtaqMf6myfJxrooyS2SNeUehohtnuLDz1WxWFKaLsEqGcig89%2FXufjCuGUK7Yq3fv3XxjjcWuJVWrFOEX7EK0XR7B%2FGxTD9uUXOuX3EUbbq4eoH2WKH4IVX5TpcKkGwu9BjtQORY5gr9wev63rAzjPlYOaiXL8I%2FxzDrdugpoBtDwezUYPMQCgdvMd3zrIdB8ydpH2fg8%2F%2FuC64U5aafHDw%2BvHDjctAZ%2Fk7TZukxgX4D83K4npXIkTGVrTda%2F1LD4vYcw7C%2F62PaVoK0Cys4Ar3XhfhS7%2BzKTYy1gn7R6MexrPv6U%2FBuBN8Dyh82HVnokhn9RN8JCyCjhFbhNBXQazqNpiFKOnBY829seisMzpjM9NVss9n4am6qkFcAi2A45t4bSEmljSOJ5C2vOtwlBLLWsMuiChbhiYgE4wl%2BOtCSF4CBx%2FLcnyckHLLbzAVwqiXZ61IOjeCDTSVPrw2w6UHaXCLCs9ANtxMOG%2F5MMGOqUBItH9VsOEk%2FDIZ7fjQTlFZ2n9pdjrvBgi4qIm8EcpvzrpdQT1SwTWb6dPScMbGxF7KP4cjM8SKY07thjyrzqCsT3Gl6moqKRdHUNcs0lr%2FMsbiw4lguFKJsqTbz5CWmv5mLlShFhVDPDZOGKqFLKcvWQjaBtt4f8slMoQ1x%2BFbA6xnv%2F%2BlOa8WGTzKYvqUKqC5pEDq%2F396Kvp0u7hWZ6ryOU8CGLz&X-Amz-Signature=c4a9d77f38d841300ac12b4ac26261220a3822027996c5c2a671e8f3540b6346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMJBVBHZ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T171007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIGDTp9ELNzO9Te6%2BtRoMzXy2AtZ1nGgGSzG%2FrZ6cD7dJAiA373CxWfS3wLd4uBYHVOmMyTaXTuSHxJMMJJ%2F2FaVD2ir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM7tV62ncCGx5fW9%2FHKtwDc7xWBBtOisM7sW4B2u3v888yu1zM%2BFsPImXdyqHJajy76TnIMm4Kp%2BUzbTodlB8j766kCDiJSc%2BQ3G3ExOG2wUzYCKDzQcAip%2BhvR31Qx0H7oNvZalHMNZOQr0qgpkoNWm66CSdmJtk7hStYpWZZSPCTPD79dSeFP5IehWsO0ZBpbNU5AMlBCpmdPBSl7YF17LWqsEJ%2FtjwRySb4fSHnHg%2FzVBRmmF36L1Zpq1UZm7e%2FW6EJiz6%2Bu8hglKkXtxw3sA4Q%2F7JZZLK20bjnzJNkzBJ7irHZbdywD0yhZbHmO6sRflZc48xm8wvf8R1qJROrgmtZYk6XFLCk8Jy6ez%2B8r%2B7z%2B48qaEnf7EWB5DRO99baG8Ile2H1lW%2BIiKWWkXA0G8TzbDe6KoaifgqCXvKbobr2wXh2UjBYrVAT9qtw%2FooW%2Fvc0jctDbTKsp2cbGHy6EXxEH0uaHA4Vi6jlzEmBdS7qh%2Bv3TiqtcZ%2B0kxDLIQhBBAdgHdwS9eiL0uS4REXeSyuY%2Bt0%2FqZoFSahhwDkmcS5oBM7dr0oFfv5ehMRBoJI2EX%2Ff5QCoGvZohGF1bKQnKw3PIv2xFatfXE%2FTWrWA%2F4PPQkGyNBZkYkQvu7jHLhGH%2B8469GpdTzbz%2F2YwoL%2FkwwY6pgGVN4mO6CpiehbazXiOvh1%2B04hFf%2BelFlmMMZ6oR785YAftNClHkK6XTkqNlTzBUIIojxhlOyWBBk5Uh8n0tzYvVi4Jy0Jg1Tvqp296Xz%2FveupcE7MRWqx8LncAi%2BmdewAZeqyCH9%2BRCvLrkfEInk%2BYxC84XRtqEeHmkloKIIQqocJVc06flIeudn%2BpEp7%2BvQYtIbCDROZog5Hrw2KUGDNN8XBdoUff&X-Amz-Signature=0a59cee7104f2d5977810bd1d477ecef0266cac578bcc7f864f151152b399421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
