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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXXVOHVD%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIDEkdo2gGKLX%2FNFuQnLYKdw8KdD%2FgAWlCz2RGWsy5tvyAiBxXxm%2F9nwV%2FVH2P%2BzOxSosPYlg9wEkxCbj7FsAWvgGRiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtae1db480lXY%2BibSKtwDUNMIaCsN3RuqbvFrCvd8YCbHVSdDp604pOuRgibwcYSHb0pAo9zBgUGPE5Ybh3iwYJLdStiTkZNQYoxNwK6mEcdJQOlh4R9KLJXg6eUeNQcJHy2ekFvPM0VjrVNAb%2B34gWjJIt4KSbaMqm8h0wgnEPSx8f1MSFcxc%2BmSS38MduFqVJAt9k1JuhN7roAI913rqE0Ac9jPSCQzwGvEAS5ffw3eqgVyg1oEFFhriAZqw82TwD2snb6qZtS4ZempyhvRgkWoeUgoKU4eeqzDH%2BNoMSaVFBG%2BH81WPICVA6DWG4qxJKdMqaQ3%2BuTcuu%2BPKoWXEaRVF3KJYfjgi2i7g8%2FxWSx8tHMhTut47PxjIVAGEq2bkTjHeHdSrOZU4zhU2gHZKgUgyP8O0vSkr1ccTw4x18XNnoBzkfCiveJ6lEEwePQYHOIm6dbol%2FQrdJtAAUWaXz9kZV4LQ7n9%2BqdL07D7vFxpRy6%2FesRsCqWy%2B7PScs6YGIPfCYUtovfzAwstMGoMOBtfprDFHemyN4OGsmGmi6jPab8VpSpoEjPDFvPkMAuqiQGnv%2B3AubajKT0SQL%2B9J6YZJX8HUaTsvovDZQy6KzIagaeNGGbjK3sukHaNWvSISebNKRV%2BwPt%2Fj5Qw1%2FrlwwY6pgGk%2Fvb%2F9a5mV2vIDlMCdPLM98YNKxgUjh0rNiIciZONNv8KE1rg7QNRD2XGSdvOLM5Da268w0dLLEgI8bQ7KKbRIwKhZLqHRoZ%2FaMr3WZgbxgiBqyO7iy9BNqRe5PPqPnotlBwdPMchQXAleoq4%2FbeivE6RQfzqMAt7Se%2Bae6QwgMQo0uPqFfYy05DIAsKTMv1cg9RgqosI7o5l7%2FXu3D76NiI5%2FyeK&X-Amz-Signature=a84855c3e53df0051f33ccc871d77cdf7111faa3347204b46b6a497c3e4a1efc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXXVOHVD%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIDEkdo2gGKLX%2FNFuQnLYKdw8KdD%2FgAWlCz2RGWsy5tvyAiBxXxm%2F9nwV%2FVH2P%2BzOxSosPYlg9wEkxCbj7FsAWvgGRiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtae1db480lXY%2BibSKtwDUNMIaCsN3RuqbvFrCvd8YCbHVSdDp604pOuRgibwcYSHb0pAo9zBgUGPE5Ybh3iwYJLdStiTkZNQYoxNwK6mEcdJQOlh4R9KLJXg6eUeNQcJHy2ekFvPM0VjrVNAb%2B34gWjJIt4KSbaMqm8h0wgnEPSx8f1MSFcxc%2BmSS38MduFqVJAt9k1JuhN7roAI913rqE0Ac9jPSCQzwGvEAS5ffw3eqgVyg1oEFFhriAZqw82TwD2snb6qZtS4ZempyhvRgkWoeUgoKU4eeqzDH%2BNoMSaVFBG%2BH81WPICVA6DWG4qxJKdMqaQ3%2BuTcuu%2BPKoWXEaRVF3KJYfjgi2i7g8%2FxWSx8tHMhTut47PxjIVAGEq2bkTjHeHdSrOZU4zhU2gHZKgUgyP8O0vSkr1ccTw4x18XNnoBzkfCiveJ6lEEwePQYHOIm6dbol%2FQrdJtAAUWaXz9kZV4LQ7n9%2BqdL07D7vFxpRy6%2FesRsCqWy%2B7PScs6YGIPfCYUtovfzAwstMGoMOBtfprDFHemyN4OGsmGmi6jPab8VpSpoEjPDFvPkMAuqiQGnv%2B3AubajKT0SQL%2B9J6YZJX8HUaTsvovDZQy6KzIagaeNGGbjK3sukHaNWvSISebNKRV%2BwPt%2Fj5Qw1%2FrlwwY6pgGk%2Fvb%2F9a5mV2vIDlMCdPLM98YNKxgUjh0rNiIciZONNv8KE1rg7QNRD2XGSdvOLM5Da268w0dLLEgI8bQ7KKbRIwKhZLqHRoZ%2FaMr3WZgbxgiBqyO7iy9BNqRe5PPqPnotlBwdPMchQXAleoq4%2FbeivE6RQfzqMAt7Se%2Bae6QwgMQo0uPqFfYy05DIAsKTMv1cg9RgqosI7o5l7%2FXu3D76NiI5%2FyeK&X-Amz-Signature=c5ab86635e00a6f5e7c1c98338784b3c0ae7f337306df42b8e78b215649309e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXXVOHVD%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIDEkdo2gGKLX%2FNFuQnLYKdw8KdD%2FgAWlCz2RGWsy5tvyAiBxXxm%2F9nwV%2FVH2P%2BzOxSosPYlg9wEkxCbj7FsAWvgGRiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtae1db480lXY%2BibSKtwDUNMIaCsN3RuqbvFrCvd8YCbHVSdDp604pOuRgibwcYSHb0pAo9zBgUGPE5Ybh3iwYJLdStiTkZNQYoxNwK6mEcdJQOlh4R9KLJXg6eUeNQcJHy2ekFvPM0VjrVNAb%2B34gWjJIt4KSbaMqm8h0wgnEPSx8f1MSFcxc%2BmSS38MduFqVJAt9k1JuhN7roAI913rqE0Ac9jPSCQzwGvEAS5ffw3eqgVyg1oEFFhriAZqw82TwD2snb6qZtS4ZempyhvRgkWoeUgoKU4eeqzDH%2BNoMSaVFBG%2BH81WPICVA6DWG4qxJKdMqaQ3%2BuTcuu%2BPKoWXEaRVF3KJYfjgi2i7g8%2FxWSx8tHMhTut47PxjIVAGEq2bkTjHeHdSrOZU4zhU2gHZKgUgyP8O0vSkr1ccTw4x18XNnoBzkfCiveJ6lEEwePQYHOIm6dbol%2FQrdJtAAUWaXz9kZV4LQ7n9%2BqdL07D7vFxpRy6%2FesRsCqWy%2B7PScs6YGIPfCYUtovfzAwstMGoMOBtfprDFHemyN4OGsmGmi6jPab8VpSpoEjPDFvPkMAuqiQGnv%2B3AubajKT0SQL%2B9J6YZJX8HUaTsvovDZQy6KzIagaeNGGbjK3sukHaNWvSISebNKRV%2BwPt%2Fj5Qw1%2FrlwwY6pgGk%2Fvb%2F9a5mV2vIDlMCdPLM98YNKxgUjh0rNiIciZONNv8KE1rg7QNRD2XGSdvOLM5Da268w0dLLEgI8bQ7KKbRIwKhZLqHRoZ%2FaMr3WZgbxgiBqyO7iy9BNqRe5PPqPnotlBwdPMchQXAleoq4%2FbeivE6RQfzqMAt7Se%2Bae6QwgMQo0uPqFfYy05DIAsKTMv1cg9RgqosI7o5l7%2FXu3D76NiI5%2FyeK&X-Amz-Signature=9e65270ab9808542e5c01cb4989f458ce0f988d24d11b1e4ef845a70ed318fc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CBDZO4H%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCmoaxnYkuQ%2Ft3RMB8ZdVv3RX%2FDGpI7MqoBjkqNGOMuiwIge%2B2AGHab2HobvTPljDpQco3xDN%2B6eOIJTjvbDiSCZNYqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyatnI%2BAtEILbfZjyrcAylqWk%2Fip3ry9qzw5CWbNKujOXxXm7WpkvWNoYvL1N4sdui954qERcU7buR8Iq%2FE3qVyZb9dV6wzmy%2F6Gumvqzxi4yDmj4haF33SqkgKdthbrVEkq20sKlo%2BgIYy0%2FzKU6ouy6eK%2BY78HW1QquWrmtFDl6mT1z6UExBvVDs4KLHv%2FfWQfrqMeC%2BoSKhQ7xWr2GmgHLIJYI3%2FsNiPqP3HpYOKtpLXfcFvA6UBudCUwS38PUJOGAwHXUbv50oz9LWOgFP6bxqlbmR6Pj7MZQ%2FJOEBsjBack8Pk0jwl2Hq93Bl4jlHbnb7XZWS7RkEw4zjVSQJeMB8KV%2BxQoONo72uRoOYLzGCfLekKiuqfyAltuZhIscdUYEMqHghLVvlMz%2FxFZmeozEvlt0bqd879L%2B9TU19BV04YWANThFyoJDNcMHxPc3%2FGkx9%2BM%2BmX5eBqQDIVJyDDZOesdW349ZEPWk18uvsigENjJA4T9wJagY9T5mSVoQVbgW1KzdmVLOF1SQChttKTAMoTDko8D2BYtt488UX85z6PB6c6ktsbIQX3kuA2c5j21mc50nUzxBLtF4ar3VgAfQiLF1CR3O9Qay6Ek3zWi2lNChGRctsaq6Gbcavk9xet7ZhhA3i00uUxMOr65cMGOqUBaLNw1VchFDlsQuEkFnHS2yEyGl7hJ2WySdKx7WZ8s23vWmYKtbEHUa%2FmilzZy%2FIeUNNZNHJEcmiwyTPdTgm7PTmboDf53kGExogUHsMM3z8ZsrqJ%2F8sNln6aiNWnpKfgr7F8uL5jc1gfkzqMCLKd7uMNNwVDxn8JWtmP5uzWBXqVkJTcHrsptaghq7qeIWIsalDVlt3skbShOhOpPSFEw9Qd1cC5&X-Amz-Signature=6d8e192c51b80902d7017f814060d49a362fe6e311c32a1f79a98a9e54d9c672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNURJ4XH%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIF5vPomT4KZAobV2aLwmunapzq%2B0ID8TOBLkEZri8K5QAiEA%2F806RiBDFFfgBSyo6McCT8Oe8mbIVqfF8XTVoXwzVywqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhszId2KYQzMnK3RSrcA2wJjxblHtjthruJokZf9pkBYIG6%2FtNfxm6zuLNqagFTrTPD07RsXLsRqk7OXPuxNN54ycr4VAGcAxALjG5lUfu0UPf9Y9RcGRUgG9Fyax8EVQHVVk4TCVSq8W5LDvjdNS3tYRSQvHZQROKH1mwoVYTtwoD4AnI8REh4YV7srkKJu7L68fbfi1ubJEkKv3oEJlgZ0MoV%2BNLWf5LRKaPoo4n6QwN3g5cKQBEMmkGPmQm54Ko3YBIXmcMEYxy2C6GdNK%2FXF%2FU0Due6tnKHfw%2FxH2TdkYst7U4tT7CN7nafLRzYwRSJWgnz3EE%2BAvO3%2By9r%2FC47IMlQhJ521gZRjtz0%2BsFu2CCDWW%2BwVrupTSHgnKmFQfTMH%2FHJL6C3vDkbCDBXYweK8E0gRvkKuwcB%2B0vsQ5%2BWvomLDM9L1rUzDUZzZJpOCzRCVO1JV51Gsam%2F4QFu%2BKgjzwqcFNBQrE82BaPBBYSK6CYLv96jXaAu5twJlEWcIWbvBjxAe4wRUNQjb5JeOt7%2Bz76Zgibl48s9ee73fWF1iK1DzZrR7GucvqtoW7gj6MjLd8sV5TKOindSDAKfZl7iMsDiy4vvZvLBR9dcceb6TNdofhYVUx2j0iSu5BTiO8xYWArHGd1TEJadMMP65cMGOqUBh%2BhFTKqrIw5nuUiMZbVqStxng4sB4w2yBlZpyZ84H7VZIxfYzt03woShrRMeSbUar0Mfx3EG2xxKFm2tlOMNNEpj7g37ptbIUY907xLryutxa8brXqknmkBTvPm3oV7uAvH%2FSzXeHyiExvSz50vnFQcYl6tHSWxLjCTkpsOA5c7wSIMpxd%2Bi8sjOx5fhr81HhwTfkW%2FgtHSMUo4LS3ZCO53Potvw&X-Amz-Signature=dbfe7d5de529f2149ac6c5ab51ae7bcae9b4c96cad5561d581d8d18ecc073f8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXXVOHVD%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIDEkdo2gGKLX%2FNFuQnLYKdw8KdD%2FgAWlCz2RGWsy5tvyAiBxXxm%2F9nwV%2FVH2P%2BzOxSosPYlg9wEkxCbj7FsAWvgGRiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtae1db480lXY%2BibSKtwDUNMIaCsN3RuqbvFrCvd8YCbHVSdDp604pOuRgibwcYSHb0pAo9zBgUGPE5Ybh3iwYJLdStiTkZNQYoxNwK6mEcdJQOlh4R9KLJXg6eUeNQcJHy2ekFvPM0VjrVNAb%2B34gWjJIt4KSbaMqm8h0wgnEPSx8f1MSFcxc%2BmSS38MduFqVJAt9k1JuhN7roAI913rqE0Ac9jPSCQzwGvEAS5ffw3eqgVyg1oEFFhriAZqw82TwD2snb6qZtS4ZempyhvRgkWoeUgoKU4eeqzDH%2BNoMSaVFBG%2BH81WPICVA6DWG4qxJKdMqaQ3%2BuTcuu%2BPKoWXEaRVF3KJYfjgi2i7g8%2FxWSx8tHMhTut47PxjIVAGEq2bkTjHeHdSrOZU4zhU2gHZKgUgyP8O0vSkr1ccTw4x18XNnoBzkfCiveJ6lEEwePQYHOIm6dbol%2FQrdJtAAUWaXz9kZV4LQ7n9%2BqdL07D7vFxpRy6%2FesRsCqWy%2B7PScs6YGIPfCYUtovfzAwstMGoMOBtfprDFHemyN4OGsmGmi6jPab8VpSpoEjPDFvPkMAuqiQGnv%2B3AubajKT0SQL%2B9J6YZJX8HUaTsvovDZQy6KzIagaeNGGbjK3sukHaNWvSISebNKRV%2BwPt%2Fj5Qw1%2FrlwwY6pgGk%2Fvb%2F9a5mV2vIDlMCdPLM98YNKxgUjh0rNiIciZONNv8KE1rg7QNRD2XGSdvOLM5Da268w0dLLEgI8bQ7KKbRIwKhZLqHRoZ%2FaMr3WZgbxgiBqyO7iy9BNqRe5PPqPnotlBwdPMchQXAleoq4%2FbeivE6RQfzqMAt7Se%2Bae6QwgMQo0uPqFfYy05DIAsKTMv1cg9RgqosI7o5l7%2FXu3D76NiI5%2FyeK&X-Amz-Signature=29ac30898500cf984d2287bb313e32a7bbc8f673ab491c1d0e114ae69bc9f6a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
