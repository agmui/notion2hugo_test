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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJPNRXOG%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQFSemIb%2BqVX8IXzhEjyZrRT6kTsO9TbsGnXB5nO6kSgIgay50SkRPucpAHxXdv4Gr5oziBlrtPYad88VaY%2F8GJAAqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkYM0ncnQ26fXvSrircAzj6%2FcYE%2BAUkQ2eh8f8so7buNmNXrH0amiM%2Bn9lb%2B3YqdFpFdHHbrRrMhFd2VH%2BNCMYEWJDIkzdMAljL%2BgkUd4O2Yq6mzGwbsbQelw6fnzWPJQ0sRu24KEGUVlfYZq7IymR3hN%2B6qVsgyeuEScoCy2anOl6JqPoon9WdWlH8YHamcCFkPyVXfHAx0DgVMY9ZYQpz540cA1j1P9iTvfnAt29cue2EY9dDeEeXfLN7S1H1sZWxwMT0qYnc6swOunUu9W8UhklMcnl6f0aew2Mtc%2Fr3TVyGa2V2zOti5BE52z223ufK7pHZVOOEDqEUykfO1M68rQ9s2eWwO862o4UDTzbdRPBbFWcCV2CPbHaORbjPfIg1a39JWD4PvXR4dwFyISuilq7FiLM7hyM4VYQQVUKSpw8dB99QeqFikcymk6pouCMTrrdYOwjKEzcnWn3d43hOcnz6rhUMdHKqK8%2F5KOfR8kI%2FsAmJhTpkNoNCjsfmqPoiHQGSo19JiuKckXyPOB9OM7YsViLCr9zwjwholQLF9OEECqFWeRPVc3irrYoRiGrk6nwmvyu3opC8%2FVKHqArGvKz6Ov%2Beu%2Fb1Xya7Ofjsi8BI7NW6iiqkXKP6yi%2Fb3xyosB972ehIDal6MMKTzb4GOqUBAj%2Fc7N4%2F6diMeotnt9IHLx1J837HgIbK04SU5F3%2F7c69Vyx7c1LR1brFo9HRrl6t0vdQK4sR%2FevEYJOMNp%2FfXF3RDJaTOXWvttKeWjkUxJ3kqO6%2Bb0gMQZH%2BqZHevCv8ulfGW7%2ByOiSOq1vVWNNEUhAf13JDKDK%2BChSrpsA%2FPIcJhFYCZYR4kvSaJDh%2FYglwys4jSYoXpEEsBrdQ%2FOHutS4IZ8hk&X-Amz-Signature=60e192f70abce2f1e7a8f8fcbf313e852a96d7b9b59271e490208a2d24c91ae9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJPNRXOG%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQFSemIb%2BqVX8IXzhEjyZrRT6kTsO9TbsGnXB5nO6kSgIgay50SkRPucpAHxXdv4Gr5oziBlrtPYad88VaY%2F8GJAAqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkYM0ncnQ26fXvSrircAzj6%2FcYE%2BAUkQ2eh8f8so7buNmNXrH0amiM%2Bn9lb%2B3YqdFpFdHHbrRrMhFd2VH%2BNCMYEWJDIkzdMAljL%2BgkUd4O2Yq6mzGwbsbQelw6fnzWPJQ0sRu24KEGUVlfYZq7IymR3hN%2B6qVsgyeuEScoCy2anOl6JqPoon9WdWlH8YHamcCFkPyVXfHAx0DgVMY9ZYQpz540cA1j1P9iTvfnAt29cue2EY9dDeEeXfLN7S1H1sZWxwMT0qYnc6swOunUu9W8UhklMcnl6f0aew2Mtc%2Fr3TVyGa2V2zOti5BE52z223ufK7pHZVOOEDqEUykfO1M68rQ9s2eWwO862o4UDTzbdRPBbFWcCV2CPbHaORbjPfIg1a39JWD4PvXR4dwFyISuilq7FiLM7hyM4VYQQVUKSpw8dB99QeqFikcymk6pouCMTrrdYOwjKEzcnWn3d43hOcnz6rhUMdHKqK8%2F5KOfR8kI%2FsAmJhTpkNoNCjsfmqPoiHQGSo19JiuKckXyPOB9OM7YsViLCr9zwjwholQLF9OEECqFWeRPVc3irrYoRiGrk6nwmvyu3opC8%2FVKHqArGvKz6Ov%2Beu%2Fb1Xya7Ofjsi8BI7NW6iiqkXKP6yi%2Fb3xyosB972ehIDal6MMKTzb4GOqUBAj%2Fc7N4%2F6diMeotnt9IHLx1J837HgIbK04SU5F3%2F7c69Vyx7c1LR1brFo9HRrl6t0vdQK4sR%2FevEYJOMNp%2FfXF3RDJaTOXWvttKeWjkUxJ3kqO6%2Bb0gMQZH%2BqZHevCv8ulfGW7%2ByOiSOq1vVWNNEUhAf13JDKDK%2BChSrpsA%2FPIcJhFYCZYR4kvSaJDh%2FYglwys4jSYoXpEEsBrdQ%2FOHutS4IZ8hk&X-Amz-Signature=b22b372d702d92e5e228f3dacfaddb609e1673268ea9fc8602c29823c5a6df4f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH2QJEHI%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8NQ65fVZzDe3OVxMIT0xJ%2B4sD1j1vlteaCbGxuQXgWAiEAhM0LB6PjEy1elsiYS0b2W6K04Cg%2BKVwUHQ9cNui4WJ4qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWPmf86yMyBxSCIsCrcA84mkmunichAaNgkLYEmO%2FslmNGrwHPiJ90MoAIrrVRalQ7D2vzjKPhi5KAPAeHtwnseoNcp%2BDo5ShPuxJKUJx2sYL9%2FyKPLIWt4kSoO8NF0iP3Cqjryt9OetJLd70VUFlEGj2%2FiQl4DeyKv2R48PJV2B3tq9YHRouRAfrC5Z368csznmQckA5Y%2FbxGQo%2BNKOdX2u4Qpb%2B6ZDTV9TtkQ0y7kFmjg%2Bdo4ubfLd7scj8tODc16h4CgxTlyeOzywPw1gZnXbl7Yz3ovBSUMOyqK0RsBxndCrVHl0Ji%2B4PnCRpKYXpX32DBmYhCrG9YyH2qxevO2uOmIBYprZuvEiaekw3thGGqgoKrpI2GLcaNh5lWGWtAOtqv85Z%2FvSs%2FFCNzdUxs1hXwaYye7MPGTQJzYu9qlhQZvRwbUXVyj6hY2fRKpa4aDaxbrKs6t%2BqgOa0ootCeoG0HIRsSmFQOFsEoTBZZtqEwLGEP8aaGrEoZll3MoJqW4qw3ysaKxcDUL0cxKElMbhpUeyeTfMkP8kwNPYw3BOYsb5Cq%2Fh3OrLNEjq7Y2r0V1mHKaucVmnWKDlzWV7PHcgnfts4L3flhRlS4Zcut%2Bgiy2LhNOoZ%2FCwUXcC2aXdoI3EgnDrcYj%2B5SGMOGTzb4GOqUB9FuY3M1Vnqe2g5N2xdcMUB5XLi5QnLopRiAgsoHHKZCpJDw9oR5T5e8hf3%2BImEO0piuSu3AZqznPuwNCOz9TZczNOzw9W66ZyXztcX%2FCxCS6oAFVO%2FTPQUEaCd9ltN8rzxqPOjD7UZbSnlVrx3lxZt0MECHrYDYcDjNlN%2BHkvDCcMXSlU5hZ8RW44b9L8tC4b1NaGrr8woTjpZsPxNQZTj3vML0v&X-Amz-Signature=aeefe5985f9ea8c2e385ff2f6076f865f71f60d5d3b001951c030f4b2af90aee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUOBSKYN%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOsvVLhIH%2F7KaonJoF%2ByCaMzPVCQf7gCZfBqtMKps0SAiEA6stl7pCnz%2Fp0zbelFbf5ZZrASJIsffdGCWS2vcXYll0qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2Fdwfcz%2FOgmjq05iyrcAwZog7jvk3nA7XyNbcxPd1PKYdcGdVL%2BElnzceJI5vFraqJDvbiB2Sb%2FNy7HpehpPXcNKdRS4lMDGKXZUnzJApphUXVCxFHwBErb6%2FF4i1qJdVu4oHyoalg8SAumlO6Q2vFvQdckW%2F6%2FW5J7uNgsjZ3VRkno3K40x3OMzYyBydc4KkJwHfGxMl3lb%2FsC0IgxwJtigqDGmCriY%2BfOPl7sXPPg%2B4%2BADu1nv5yhf0B1rPpzXRDBtM2bNVPU2rQ79zF8re22dTnGKUY6UgFRjgwg3qk3G%2FP2W8vK6rS3%2Bt5f1BQznPZu4ny9yaF6l37UcrEofvlhyYriJNXKkvkIpyZcpjQPN5X2HZx5Jea%2BSc2raeTJLVPzdHWUPX2DyA4SJdxDzydrq1WwxBYe8RBGjYZNrhIIw2sEP%2FAiZ7Jgz%2BaI%2B8ngbz1V0djaZpaBQvV04nREGN3HvBsFj3a%2FCSsinOqAHLFqpAZRJDHeQvfCb%2FVGBYEFeWTDmC7U%2FfhP2XEk3KULnrwUpQM4Tz1Njba2xrMMmjXA74QGtDAmaRXztVY8fkqCydDIVU0qDLzgNQ0799EcG%2FcStn%2FoOn8GHNDsejkjc79PqTZdCuHj3EM%2BziBhCKU4xjf9TX0w6Dy1qzmTMK2Uzb4GOqUB2GvuZgW7qXa%2FEFOUrLlWDpFgMjuUFGpMQXTxihD2HiqucQQI8TEToOyUtwvhMIsRXKuwTGAaG9SgddO2lNTSXa9MvFblQgIRad6NBs4x7%2Bj9gEmgr9UXLOVmNrzSXsHtGz09WzdbXtIkq%2BoagNQNZygfr87jB1f4t0QyHgIiO%2F%2BzZafVpXmhoahf8nkzoGfpSVeJIf20R0hmURGqZWNDUhexu%2FO1&X-Amz-Signature=7625382cee2cdbd1a85ec0a22afc3dae289e2705c063ecb981e638703939edb6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJPNRXOG%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQFSemIb%2BqVX8IXzhEjyZrRT6kTsO9TbsGnXB5nO6kSgIgay50SkRPucpAHxXdv4Gr5oziBlrtPYad88VaY%2F8GJAAqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkYM0ncnQ26fXvSrircAzj6%2FcYE%2BAUkQ2eh8f8so7buNmNXrH0amiM%2Bn9lb%2B3YqdFpFdHHbrRrMhFd2VH%2BNCMYEWJDIkzdMAljL%2BgkUd4O2Yq6mzGwbsbQelw6fnzWPJQ0sRu24KEGUVlfYZq7IymR3hN%2B6qVsgyeuEScoCy2anOl6JqPoon9WdWlH8YHamcCFkPyVXfHAx0DgVMY9ZYQpz540cA1j1P9iTvfnAt29cue2EY9dDeEeXfLN7S1H1sZWxwMT0qYnc6swOunUu9W8UhklMcnl6f0aew2Mtc%2Fr3TVyGa2V2zOti5BE52z223ufK7pHZVOOEDqEUykfO1M68rQ9s2eWwO862o4UDTzbdRPBbFWcCV2CPbHaORbjPfIg1a39JWD4PvXR4dwFyISuilq7FiLM7hyM4VYQQVUKSpw8dB99QeqFikcymk6pouCMTrrdYOwjKEzcnWn3d43hOcnz6rhUMdHKqK8%2F5KOfR8kI%2FsAmJhTpkNoNCjsfmqPoiHQGSo19JiuKckXyPOB9OM7YsViLCr9zwjwholQLF9OEECqFWeRPVc3irrYoRiGrk6nwmvyu3opC8%2FVKHqArGvKz6Ov%2Beu%2Fb1Xya7Ofjsi8BI7NW6iiqkXKP6yi%2Fb3xyosB972ehIDal6MMKTzb4GOqUBAj%2Fc7N4%2F6diMeotnt9IHLx1J837HgIbK04SU5F3%2F7c69Vyx7c1LR1brFo9HRrl6t0vdQK4sR%2FevEYJOMNp%2FfXF3RDJaTOXWvttKeWjkUxJ3kqO6%2Bb0gMQZH%2BqZHevCv8ulfGW7%2ByOiSOq1vVWNNEUhAf13JDKDK%2BChSrpsA%2FPIcJhFYCZYR4kvSaJDh%2FYglwys4jSYoXpEEsBrdQ%2FOHutS4IZ8hk&X-Amz-Signature=dbab439248a9d898d0655231a6f57d7d2421d6700723ef8ea13887aa0031c47b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
