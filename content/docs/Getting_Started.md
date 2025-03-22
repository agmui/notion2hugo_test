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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXQU37OM%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCr2uYN1RDzS%2FVtr8BAX6y7dYEWkHU9g8OXRxjIUKhiqQIhAMCWw75SsICWXgLHUolve7pbsDucfcgQTfuXJpaf47j3KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzweeNwBXb0Ro%2F%2FPiUq3AOBfr5aR2EauIM3yv1Rl6MI%2BCZVpF%2BG4020AKdzuqW1GPtDB3KP8QDe688qq91f4fQQpccBo4y01SDx5JKe5QVuxnUBs9HHQPKv1qltSf95YM4Gf5799s%2FPCRrRM12mhYS%2FehwyW%2F%2FudUmtmfKBnTORkCNWFH0b5%2BzfadFk1Mo3PtPTKK4favv8tJi5aYi7kQ0SN1X08RU16%2FbFPH%2BXEy9tijzzNi3p4VijIG4jPtFecyUyQz1yoH0ehKLEbIPjv8xhRpshUgYsLVKspU%2FHBPbdMW5kjE6KxUB4%2BGh9BNQIy96L0SjESTBjCC5D4ENX2o8vZx2urAZ9SexhEw5jHWKFZl6GuAyegHmkJG9lwIXycIdgti5yHqKLf%2BP5v%2F22FBmvhYD0qnV8cFwzfvPXT6cWnccpvPGEW4RQtpOSG8NMr8TR8b6c%2FgRUv0IbiU6OXMom13NPFqrZe4xzG10AxSpq0%2BXUvnW2I1wVipGr%2FNXdbdrSPRugotzayORZBhhh18cUUu7lGpf2D0jKeMwVBPV%2F9U13Fgu%2BXKOQUqAan91VIbVv4tOnDasZ9CcBtibNyxbn8gGBTb64jFJ7luaR3lkpt52zRqgR%2BJxl%2FyJRjKDIks7WL%2FOQbE19d7GaEzC39vq%2BBjqkAVZoTKvrtXu4DNLGFz9ELhLUb%2BGrqfEY1LvN0XPFUBCD%2FvxeimSbaGoRs8QG56Scl0G8s9qohgE7iazK8kIxKMuBp5sCPJp2kA2BgiFOsZdCp8vJFgMlgp8ACN%2FlZr9PrMsnCuqRcLhbhJKS5dSZD3zTdR9qQ28jEeXC%2FdbCqZMm8lfCR4BcFfwXcv8QrQ%2BD9KRjxEi6Y%2F%2B8917e6GEZTqdDim5Y&X-Amz-Signature=be0fbf4a66892efba292c205a59ab9c06abbfd3eab80a10e58e46f26007d77e8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXQU37OM%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCr2uYN1RDzS%2FVtr8BAX6y7dYEWkHU9g8OXRxjIUKhiqQIhAMCWw75SsICWXgLHUolve7pbsDucfcgQTfuXJpaf47j3KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzweeNwBXb0Ro%2F%2FPiUq3AOBfr5aR2EauIM3yv1Rl6MI%2BCZVpF%2BG4020AKdzuqW1GPtDB3KP8QDe688qq91f4fQQpccBo4y01SDx5JKe5QVuxnUBs9HHQPKv1qltSf95YM4Gf5799s%2FPCRrRM12mhYS%2FehwyW%2F%2FudUmtmfKBnTORkCNWFH0b5%2BzfadFk1Mo3PtPTKK4favv8tJi5aYi7kQ0SN1X08RU16%2FbFPH%2BXEy9tijzzNi3p4VijIG4jPtFecyUyQz1yoH0ehKLEbIPjv8xhRpshUgYsLVKspU%2FHBPbdMW5kjE6KxUB4%2BGh9BNQIy96L0SjESTBjCC5D4ENX2o8vZx2urAZ9SexhEw5jHWKFZl6GuAyegHmkJG9lwIXycIdgti5yHqKLf%2BP5v%2F22FBmvhYD0qnV8cFwzfvPXT6cWnccpvPGEW4RQtpOSG8NMr8TR8b6c%2FgRUv0IbiU6OXMom13NPFqrZe4xzG10AxSpq0%2BXUvnW2I1wVipGr%2FNXdbdrSPRugotzayORZBhhh18cUUu7lGpf2D0jKeMwVBPV%2F9U13Fgu%2BXKOQUqAan91VIbVv4tOnDasZ9CcBtibNyxbn8gGBTb64jFJ7luaR3lkpt52zRqgR%2BJxl%2FyJRjKDIks7WL%2FOQbE19d7GaEzC39vq%2BBjqkAVZoTKvrtXu4DNLGFz9ELhLUb%2BGrqfEY1LvN0XPFUBCD%2FvxeimSbaGoRs8QG56Scl0G8s9qohgE7iazK8kIxKMuBp5sCPJp2kA2BgiFOsZdCp8vJFgMlgp8ACN%2FlZr9PrMsnCuqRcLhbhJKS5dSZD3zTdR9qQ28jEeXC%2FdbCqZMm8lfCR4BcFfwXcv8QrQ%2BD9KRjxEi6Y%2F%2B8917e6GEZTqdDim5Y&X-Amz-Signature=0c5c57dccfd99507e2d37bd7c818c117586ce30dc2cee49dda40642b1f61f7a1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N2ZH5NB%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAGndYSHhXYyP5G%2BN31p%2BSlT6%2BJOwVu2RGNCZtT2UxtXAiEAuTzZiyVwykUZNl0qk5WR%2BIvd2rwfraubiQ%2FIg8YpqwgqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ02G6tGvbH2%2B2%2Bh9yrcA6DcWcB4P3LIa3Y0IzFavtcZd%2FZdlIRax1O3a%2B67516Aylj8cGkzdX2MD0F7yHQGONcl7Bg8gY73IaSKa2%2Bi0nvyhvcz3uVXEa2Fmepbev0Rw8KE1MMcwgyqxfhSiZE1M8NiBCQgaH3mRDNmuu%2Br5W0H%2ByGuA9hrg7KR1HlFJDvilKcpYU9%2ByHD1VtDqySrdpKP7g0lNjAuoWxZM7FtcJjR2ytKaKBYwPCAI6UT6tGVwvTzYddLPxqcbu2pEaG3B2bi9RYALr9Il9M01Dv3RKC0CBmn3y7tNldd6SPaCVg1vy3WApOEoviy1M4n0RO2%2BAAdgLWlbyr%2Bn7Cg8ldk%2BNULNz10p7MgAVhjqEGbJuvm1aeTQO1FK7XZzJ%2FixDtugzSuwM29Re4DM7vmrGP7FCy55nk5nPVSOSH6ZddE3OxKrBwcCnhoUugmRfEdGig5X%2F7Ngkk7anIJ%2BPsbHPJwjIkYUyMOYEs7kAeL5aXHIHAZVZtp7rTtPU%2Bgr14hyhuZntDMSMXAD3TW5SgFfKyk25jTu0sN24uIwLTTAfh6FSz2Wea8rUP8gtDhEIvbFtWmT%2BazguSh1DM9BWplz3y5rWSiupWVa9DLxbcvd2ljpTytYayAU7VI2xyfISw0SMIf3%2Br4GOqUBmIz9hhff%2BsVfs8GuDX1u7dynaZpIRg2llvCVlwb1lqJK1C97Wy2IOs%2F297C5p8Ebo54RrMAfWnuDEN1ugxUxTprJYyNU%2FnALBMktd%2FL%2FWz2%2FwzAWOFQfEA83iL8W45VbET6lxR4RyXC4FlFE5GMIgdIlx60TzSKeME21tjNWptDgtPjB%2FFdfQT24PBa86xJxGQJI0huXT0RptxwS5fSGNL%2BU6sjq&X-Amz-Signature=8ae9b845894cc459185ef0f870e29ff26fdbe7b14f7d792c24a6cf125115d249&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNPT3ARH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCNrf%2B7EmMdiX59iL0GXgO6JjzsxW6Mg8bnQLKn5NxmMAIhALKkfNSKtQNya6pRaFS5SSDy5yxLZ4DSJkBPyMdww4aNKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrAOT3zMWT3v9UABcq3AMrIjnLd2tqRY31X5vaKAb%2B2xsyDYu15FiSOPPoIljMRgz6nhHKbcCPPTVGjQNXgBrCPGuTHt9omVjB9NPW9rJN%2FXtljOGU7o14mh90k%2Bm4eeKKXaxnKEzEFTdumfYsKJkR2JHK577RdxAIYkXPu4zTMUo%2FJpnao%2Fju0oFalF4rwpXLYehFfT68Z3bNNUiTboZ4I1W9geelPkQ%2B4KNPJn79Py%2Bhna3AwUzeAz3ZHkc88yjkEJd6Z10r4eE%2B1SHbLHTvtfCGPlJFGhc3kB%2B036sDAUP8Yya9dmq6Y9wqXtVvaAcG1bBv4Pn4uz92ppKgju%2F%2FNsinv41m%2Bwd5lFThd2po5BjCTuoawwkrbnuS6rxFC63yFTnN%2Bvss6d7469nIGRY5K%2Fo8pP1RC4f67SvbB%2FapZX7Bf%2B1MRknGBHxA3oLTT86sJgzC9DS1DPT3Env9rIhJQHo0kNZa0JpiYdt3uvtJ2JDa%2FzSfH8HJB4jCdU4AIs1NQLF0Wkso9%2FzxQWVvXi%2Bk5X%2BKQnjMRNOR9YvRkwlbCoHt6fKbEQ0%2F%2B%2FyTOR7BsUwAlx%2B5JScSqCrFH4BEAneLTmDjHwrKBVHu6wbwymZc7F7AowEIFZhTtM1DZp6CiUSoyHmQXO5nBOYF5jCG9%2Fq%2BBjqkAfJdjEA8QgK5BIkckzbh8z5NU140IrElLU9umJVOvkcFQwoXQimGvf%2F7hVwMfdZ8kiMLmGksjntMcfNtZrX0Mxa6WpruTS2Jl7f0956gWOig9h6Fobvw7CYNuWE1RNjm85ca1ukd9TVKqWZt%2FnwDuOdVBZJg7k89az4ZB%2FZrRaR9AcrGtnTairayJi1X9NvPBNson043v5Z8OIPabQSrAhcqev%2FB&X-Amz-Signature=cf5f56d25c1f8bf0b8271106468912d6c036d27677d0ac229edd85f063570129&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXQU37OM%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCr2uYN1RDzS%2FVtr8BAX6y7dYEWkHU9g8OXRxjIUKhiqQIhAMCWw75SsICWXgLHUolve7pbsDucfcgQTfuXJpaf47j3KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzweeNwBXb0Ro%2F%2FPiUq3AOBfr5aR2EauIM3yv1Rl6MI%2BCZVpF%2BG4020AKdzuqW1GPtDB3KP8QDe688qq91f4fQQpccBo4y01SDx5JKe5QVuxnUBs9HHQPKv1qltSf95YM4Gf5799s%2FPCRrRM12mhYS%2FehwyW%2F%2FudUmtmfKBnTORkCNWFH0b5%2BzfadFk1Mo3PtPTKK4favv8tJi5aYi7kQ0SN1X08RU16%2FbFPH%2BXEy9tijzzNi3p4VijIG4jPtFecyUyQz1yoH0ehKLEbIPjv8xhRpshUgYsLVKspU%2FHBPbdMW5kjE6KxUB4%2BGh9BNQIy96L0SjESTBjCC5D4ENX2o8vZx2urAZ9SexhEw5jHWKFZl6GuAyegHmkJG9lwIXycIdgti5yHqKLf%2BP5v%2F22FBmvhYD0qnV8cFwzfvPXT6cWnccpvPGEW4RQtpOSG8NMr8TR8b6c%2FgRUv0IbiU6OXMom13NPFqrZe4xzG10AxSpq0%2BXUvnW2I1wVipGr%2FNXdbdrSPRugotzayORZBhhh18cUUu7lGpf2D0jKeMwVBPV%2F9U13Fgu%2BXKOQUqAan91VIbVv4tOnDasZ9CcBtibNyxbn8gGBTb64jFJ7luaR3lkpt52zRqgR%2BJxl%2FyJRjKDIks7WL%2FOQbE19d7GaEzC39vq%2BBjqkAVZoTKvrtXu4DNLGFz9ELhLUb%2BGrqfEY1LvN0XPFUBCD%2FvxeimSbaGoRs8QG56Scl0G8s9qohgE7iazK8kIxKMuBp5sCPJp2kA2BgiFOsZdCp8vJFgMlgp8ACN%2FlZr9PrMsnCuqRcLhbhJKS5dSZD3zTdR9qQ28jEeXC%2FdbCqZMm8lfCR4BcFfwXcv8QrQ%2BD9KRjxEi6Y%2F%2B8917e6GEZTqdDim5Y&X-Amz-Signature=54c2a481c82a5b25f83ffc56aae5976a554a1dc43bdb3e42e6a1f395eed6124d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
