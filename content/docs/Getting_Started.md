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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LBRPYZ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD78fUP42c2W%2BcAQ9YI4qIHcaMtZYz9%2BL8ooDedPdbxtQIgAKamECFlS0ytdrH2sKxLw7q3G3RCzJWeY%2Fi2bIoQ4b0q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDNhSFBN7P0q5DuULcyrcA2KaYk6Gi7TGUZmB15pnjS5Xg74kGFVu1p0i2DuHH3MBZKLBb3ZjGUBM00NkK9fZXDur45yeZSoSsV8sgoZkAOvXxOQU2GM%2FmfWH7ABRLCuOah2BClMBjbhzA7nrAqVsQ70a3UHQNMenkBS%2B1K5WVBtBimwyGA26%2B4Bb51jAnKkxyXfR2o35YIRapnlJI73K4Bx3E9Eh9VbvWmJEA9TFU3cS44TZCx%2FSTLLRooFCqnUabKBX%2BcmHWecGa%2FAy2WYdLGi%2B%2B6Uz67IpHY65cQR%2BXh%2BlKVZ5y2TGGzoij0lIvHXeIU%2BHihKXVDiBG4yGCuP9jczOEfW3LqBoSzLhtbWGMamEWvZ6F7hvio5ouoFvNBSbQHsEhzgkX7ca8CBmjBGvi7a9UfOEoYnj4JD1YrNYSwpTETDot18SUA7kotUC73WIjSZ4ShFZp3vC62JfXyeVuQ2DASm7Gx74B5PRdfE2HKywI9Il5kjgn63Ftj3fS6lY06HFL2c1599Dbn9Ug6Cpg98y6yrGNKXgDCJxBiabNDQmw9bWgXsnleko3wgCYHx6mLrvw9904igP4wGjaKc8vNGnwY8ZH%2B%2Fq4nBHpIJ%2F54ofSYWeZRvrWXNKIOxSkp3gpzNCYUOESPLXNnmsMKL1zcEGOqUBfbKTZTKCSissYdMncSK1aYOmUxqGM0VQ2lXv2to6ikDUsY8eutpw%2FlqXMDgiNUrXCUReemC3lcvpV%2FePFRiLnjBFcI0RKHPGrNcjHOzANzQ%2FkNmhDEgIucjqjXB957vd2Ze0nvIPG6LJDWa4W5BOpGF7TyCMzgYE40NKWRBIbxE083%2FDk%2BpspRwC%2Bb3%2Bnb6F3a00APrhiX8rDZCSuwFw510tCJPO&X-Amz-Signature=cf2f63b7a67771153818396cb88df899ddd751f2ee9f272ef347c8c150389e13&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LBRPYZ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD78fUP42c2W%2BcAQ9YI4qIHcaMtZYz9%2BL8ooDedPdbxtQIgAKamECFlS0ytdrH2sKxLw7q3G3RCzJWeY%2Fi2bIoQ4b0q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDNhSFBN7P0q5DuULcyrcA2KaYk6Gi7TGUZmB15pnjS5Xg74kGFVu1p0i2DuHH3MBZKLBb3ZjGUBM00NkK9fZXDur45yeZSoSsV8sgoZkAOvXxOQU2GM%2FmfWH7ABRLCuOah2BClMBjbhzA7nrAqVsQ70a3UHQNMenkBS%2B1K5WVBtBimwyGA26%2B4Bb51jAnKkxyXfR2o35YIRapnlJI73K4Bx3E9Eh9VbvWmJEA9TFU3cS44TZCx%2FSTLLRooFCqnUabKBX%2BcmHWecGa%2FAy2WYdLGi%2B%2B6Uz67IpHY65cQR%2BXh%2BlKVZ5y2TGGzoij0lIvHXeIU%2BHihKXVDiBG4yGCuP9jczOEfW3LqBoSzLhtbWGMamEWvZ6F7hvio5ouoFvNBSbQHsEhzgkX7ca8CBmjBGvi7a9UfOEoYnj4JD1YrNYSwpTETDot18SUA7kotUC73WIjSZ4ShFZp3vC62JfXyeVuQ2DASm7Gx74B5PRdfE2HKywI9Il5kjgn63Ftj3fS6lY06HFL2c1599Dbn9Ug6Cpg98y6yrGNKXgDCJxBiabNDQmw9bWgXsnleko3wgCYHx6mLrvw9904igP4wGjaKc8vNGnwY8ZH%2B%2Fq4nBHpIJ%2F54ofSYWeZRvrWXNKIOxSkp3gpzNCYUOESPLXNnmsMKL1zcEGOqUBfbKTZTKCSissYdMncSK1aYOmUxqGM0VQ2lXv2to6ikDUsY8eutpw%2FlqXMDgiNUrXCUReemC3lcvpV%2FePFRiLnjBFcI0RKHPGrNcjHOzANzQ%2FkNmhDEgIucjqjXB957vd2Ze0nvIPG6LJDWa4W5BOpGF7TyCMzgYE40NKWRBIbxE083%2FDk%2BpspRwC%2Bb3%2Bnb6F3a00APrhiX8rDZCSuwFw510tCJPO&X-Amz-Signature=6464d2659efc549aa6ab6fb27ad26feb2480a6f1445647159be146688f958b2a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LBRPYZ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD78fUP42c2W%2BcAQ9YI4qIHcaMtZYz9%2BL8ooDedPdbxtQIgAKamECFlS0ytdrH2sKxLw7q3G3RCzJWeY%2Fi2bIoQ4b0q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDNhSFBN7P0q5DuULcyrcA2KaYk6Gi7TGUZmB15pnjS5Xg74kGFVu1p0i2DuHH3MBZKLBb3ZjGUBM00NkK9fZXDur45yeZSoSsV8sgoZkAOvXxOQU2GM%2FmfWH7ABRLCuOah2BClMBjbhzA7nrAqVsQ70a3UHQNMenkBS%2B1K5WVBtBimwyGA26%2B4Bb51jAnKkxyXfR2o35YIRapnlJI73K4Bx3E9Eh9VbvWmJEA9TFU3cS44TZCx%2FSTLLRooFCqnUabKBX%2BcmHWecGa%2FAy2WYdLGi%2B%2B6Uz67IpHY65cQR%2BXh%2BlKVZ5y2TGGzoij0lIvHXeIU%2BHihKXVDiBG4yGCuP9jczOEfW3LqBoSzLhtbWGMamEWvZ6F7hvio5ouoFvNBSbQHsEhzgkX7ca8CBmjBGvi7a9UfOEoYnj4JD1YrNYSwpTETDot18SUA7kotUC73WIjSZ4ShFZp3vC62JfXyeVuQ2DASm7Gx74B5PRdfE2HKywI9Il5kjgn63Ftj3fS6lY06HFL2c1599Dbn9Ug6Cpg98y6yrGNKXgDCJxBiabNDQmw9bWgXsnleko3wgCYHx6mLrvw9904igP4wGjaKc8vNGnwY8ZH%2B%2Fq4nBHpIJ%2F54ofSYWeZRvrWXNKIOxSkp3gpzNCYUOESPLXNnmsMKL1zcEGOqUBfbKTZTKCSissYdMncSK1aYOmUxqGM0VQ2lXv2to6ikDUsY8eutpw%2FlqXMDgiNUrXCUReemC3lcvpV%2FePFRiLnjBFcI0RKHPGrNcjHOzANzQ%2FkNmhDEgIucjqjXB957vd2Ze0nvIPG6LJDWa4W5BOpGF7TyCMzgYE40NKWRBIbxE083%2FDk%2BpspRwC%2Bb3%2Bnb6F3a00APrhiX8rDZCSuwFw510tCJPO&X-Amz-Signature=45627916bf95e2ac72fab721439a7b0d12b8a73b4053ae7744f6c5c892a85005&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDO3FGPS%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIHfgATi%2FD0N%2BEw2jsx17X%2F4ySgQHe5kX7nHl4h5VEpJJAiAJkonbyqUDw4QbClHUh112c5%2B6VDqATsum6pNBI%2BIr8ir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMKzS3XwXg5wqayic0KtwDAamQtt5TOOrs84echWJiloVHnLV%2B%2BiOivpxXHk%2FVbhlUzEe1KGL%2FUtEngOrSUCpyssPw7aO6hU65eXAjT439z%2Fxs03%2FishTFdOAIYCVTWbAEOelQmK6fE0xL4DOMLoo7LhNePxnLB14l4WDLtRyzmtRl19MIGe8kCiAIegbqEKuivArM5%2F%2Fig0zoOsyJQdwQlSNRfiaW%2FZ9MXsZ%2BzT9J5VOHa0NVbKTQpLq64kffXRJNyNwxDzOWLvZlbCjBV3APMIz9Lu00CQbr%2Bj8cPwXObasiLSEWxPCK6oaxyYomfrT2mGbQNRS2gBBlfXbwPxyZfzTCNzJxSy4jI9jorxcgZcr9AxQkUJU1tX2hXmb9Df5chn%2BzjnBDRzUXIHTEesw082QUWnMa1wXIH09%2FXn%2BpB%2BG5HzpuUebNLaul72iPMSFJiu3MIfNWge55pjZZi5SMBP%2FovFv5gmri%2BsuDMcH9FBgUXl5AD95o%2B6ZNJPeFcZ2%2Bkmg%2Fs16iU63aW8drFHUJows1QOVqm52Yn%2Fvga77gtPbuBqgf%2FxMS%2BkcgIxFVXY3t1SPnUz2Og5HYHGs4aHpeZy0QDlNYEfumyTP4k4C3g5Y3bIgG7HiXJt3axdi1yucG%2Bto9rZMLCzWqPEYwoPXNwQY6pgFBBZAsirkWGMNL5rm9jUeSGU4EGQ5lIfoKW46SZYQ5HqGdc6%2BdUcZZjy4aGRrXdEJi7ID5ueiy%2BroOIlMbEmkfaXsmEkgkEMz%2FooS35SVEynA7bBM508xBXzwIm8oI9bUyIVQ%2BVZt%2FQvysPOn3o6k7Y3ip515GRE6nsFRxgIVRhODVGnSqHuwiOJfzqx6oqFjvRVzpg2KTMvtYSzNv7YELt1g7PSn%2F&X-Amz-Signature=05611f445510e0e713a3d96516811f3ccf89048a59f52e36c11daf7d966ee2f0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624O2LFJW%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIH4%2FSWICmNrvREnlVyysF5nu%2Fp2e2xOq5W0wNsEq7C0yAiANqhYwr0v86el3drA1E99rKV%2FmcOhe7uIWoh8WKKipbyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMkblplh641xQVZnqjKtwDkYbjDms3HQsZDJCpLs8bIuAQRQLY72QzO4Zc%2BGVbzhmT%2FKJzlqQUKmD9dLE0sINqNPIvonCpgEdlyFWzSD%2B2W6T%2B%2FFmWBYuOPfTd4o5p7JgnFV4DSRJjMwQgJvQmbnrvd5xRxYQzGL8aa5SCDzWUmlF9SqWiYLMR4PqjL7AmAGigKpktkxr4O0ZmsomRkx5Y2AtI8zsUgXIfOLzJ6IrrDQEdCMm54MA5hF0YrrqTE0gnEDQmmGzl3H2P3MgRFZvENn%2B3dSM00gNLyMlTQFSPH7c5dZ0NUbfljyrXaQc6Ck3fMH457IODErDYzh2rUTelOOxPEDX7Su0fV8JxN7tkeiopTTsjqE67MVOzrpW%2B%2B2YRuhbehfxVxbdL%2BQ2jB2%2FSiH6AbM8YRTR8mfO8d7655BSAk1OHhI8nUvv5xuXMBOTW9%2FDipoxhZLhN2%2FMaHGE352fVgDSssEptGdr%2B5QZfOGjZcUiWgW13qiWF6L8b6oY2boNvx3rfzzI941usAoWGRPqyaIaPwTl%2BqSbcZfFhj7jNMiFfkqxRYQdYIEFocTYTv7mXItzcutbGHZR2DPAklV4lm6hcpKvTUPYSXKwlvbqpZc04i8y4%2BdJyFXsAJs93IFLD3beZkqGENrEwlfXNwQY6pgEBRvxaD6RPOEbx74yA5BMUDZs97S8bNrAgBFgQbrGBqZsY0KES4dGA5a%2FRJuiL7vuXj7X2%2Be4RMr%2B8sAUFvFz7qYhiamurxaGKDvm0CVl9ztgAUwv95m5tGa0NwFhRJHklyYGEW%2FsxBfii00Ah%2FtVHqd4STVjo2ZSrXqzh8bv4mjI%2Bh1bo1%2BtRouLqtbhectTHkIGjr8PH1k2Im9zBuxjkIIXaWTFS&X-Amz-Signature=b43736dd8e2f07401e81377751ce8dc0c39e4afdcdd4595be2bcfa05af755f84&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LBRPYZ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD78fUP42c2W%2BcAQ9YI4qIHcaMtZYz9%2BL8ooDedPdbxtQIgAKamECFlS0ytdrH2sKxLw7q3G3RCzJWeY%2Fi2bIoQ4b0q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDNhSFBN7P0q5DuULcyrcA2KaYk6Gi7TGUZmB15pnjS5Xg74kGFVu1p0i2DuHH3MBZKLBb3ZjGUBM00NkK9fZXDur45yeZSoSsV8sgoZkAOvXxOQU2GM%2FmfWH7ABRLCuOah2BClMBjbhzA7nrAqVsQ70a3UHQNMenkBS%2B1K5WVBtBimwyGA26%2B4Bb51jAnKkxyXfR2o35YIRapnlJI73K4Bx3E9Eh9VbvWmJEA9TFU3cS44TZCx%2FSTLLRooFCqnUabKBX%2BcmHWecGa%2FAy2WYdLGi%2B%2B6Uz67IpHY65cQR%2BXh%2BlKVZ5y2TGGzoij0lIvHXeIU%2BHihKXVDiBG4yGCuP9jczOEfW3LqBoSzLhtbWGMamEWvZ6F7hvio5ouoFvNBSbQHsEhzgkX7ca8CBmjBGvi7a9UfOEoYnj4JD1YrNYSwpTETDot18SUA7kotUC73WIjSZ4ShFZp3vC62JfXyeVuQ2DASm7Gx74B5PRdfE2HKywI9Il5kjgn63Ftj3fS6lY06HFL2c1599Dbn9Ug6Cpg98y6yrGNKXgDCJxBiabNDQmw9bWgXsnleko3wgCYHx6mLrvw9904igP4wGjaKc8vNGnwY8ZH%2B%2Fq4nBHpIJ%2F54ofSYWeZRvrWXNKIOxSkp3gpzNCYUOESPLXNnmsMKL1zcEGOqUBfbKTZTKCSissYdMncSK1aYOmUxqGM0VQ2lXv2to6ikDUsY8eutpw%2FlqXMDgiNUrXCUReemC3lcvpV%2FePFRiLnjBFcI0RKHPGrNcjHOzANzQ%2FkNmhDEgIucjqjXB957vd2Ze0nvIPG6LJDWa4W5BOpGF7TyCMzgYE40NKWRBIbxE083%2FDk%2BpspRwC%2Bb3%2Bnb6F3a00APrhiX8rDZCSuwFw510tCJPO&X-Amz-Signature=6a25232a4e762a8dd0a783a5a990cb27efd950c7e4647647b8fce05dc36cc0cc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
