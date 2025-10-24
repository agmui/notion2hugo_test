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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NHBUZQR%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvW%2F3o1eE%2Bu%2BuVoNgpqu0gAHiG0d5ibuWGnlpS7s947AiEAuYVz3dlR3Mmgg%2Bh4y02fQVWGD7xn9%2F%2FoO5sw0Z%2FET2oq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDEtSYALjwwgp7DWFgyrcA%2B9X8zIn8KT%2F61XkTazkPSLvvo7Igs1i9yu6RLTL7MbIbR%2Frl0Sdys1ckqLZIiVfpFlFIYpfJvqRHgjahubkB62vjMBk5wIGEKOBy7M7TzKmJCZMfpXFK3vwslgLMCMon4QI0cB3xSoaFu5mhGTP9Wm8e%2F9twi4QfA9uYDCsk6t3JxnHnSoKWu2X6fjnGnQzBwqeuVW0847niOPPP47yNYplnddJ0QzXDRmmhoGzexTiAOEHDRTucPY4grMzO6EOo01Ove1UW8rzxCgluXzGoOGILq1kzwnqpAaLMYx80YIhEXP4NBtJ86ZUz81pgIJsr7AqULL00XSAfhjknO5Yvi4CKZ3W%2BbWFwrMX%2BFhGx6AhACZazW94nC88GfK3kg0sXsyCT2NjkijjVICzciTedKgFrDCMaPb%2FuWGIK%2BoV9sNNXW977A6dKvWeLMpaa4rXZhDzpvc4Wf5JxOpptbuFkQEpbquap37SHeTz1fcpJjeolOHWheETh1f%2FWbSCGPfxcnI0Utj1TRjFie1tcLDVM2sBS%2FDh1oXbu7Fo%2BArpfICNo79BmsHBAmkpkyj7uZMSQQxuPaOk3tBv481ipN8WI1bi24bzTG%2FS9WCdNpzv2B%2FfTq858gC1Z6B0eT%2BvMJ2e68cGOqUB5kMmzmwMGu%2B1DVELBM2CeTkzTcLfQ0jeDSiUiUZOmSv28hwp0On%2F06Ry9oNtdQYg6AKAFtObQ70NR7gJRg%2BfCkaHY%2FRS4BkJLeLT1TlDNjqsnzdT89SnTEDd9J%2FRWJLLk323C55UqZ883rIL59wgPT9pJ8cFvcSwn3ElhNIPdiDXsSpBsLF%2FXPeRKOSrHhnlJ%2FjplwUD6w4Y4iZPExIbEBpnfLq1&X-Amz-Signature=1fd3fb8f8c5bfc9a1b406c2b98500c6f6aa937d5fa74dbe2898b674edad90b3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NHBUZQR%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvW%2F3o1eE%2Bu%2BuVoNgpqu0gAHiG0d5ibuWGnlpS7s947AiEAuYVz3dlR3Mmgg%2Bh4y02fQVWGD7xn9%2F%2FoO5sw0Z%2FET2oq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDEtSYALjwwgp7DWFgyrcA%2B9X8zIn8KT%2F61XkTazkPSLvvo7Igs1i9yu6RLTL7MbIbR%2Frl0Sdys1ckqLZIiVfpFlFIYpfJvqRHgjahubkB62vjMBk5wIGEKOBy7M7TzKmJCZMfpXFK3vwslgLMCMon4QI0cB3xSoaFu5mhGTP9Wm8e%2F9twi4QfA9uYDCsk6t3JxnHnSoKWu2X6fjnGnQzBwqeuVW0847niOPPP47yNYplnddJ0QzXDRmmhoGzexTiAOEHDRTucPY4grMzO6EOo01Ove1UW8rzxCgluXzGoOGILq1kzwnqpAaLMYx80YIhEXP4NBtJ86ZUz81pgIJsr7AqULL00XSAfhjknO5Yvi4CKZ3W%2BbWFwrMX%2BFhGx6AhACZazW94nC88GfK3kg0sXsyCT2NjkijjVICzciTedKgFrDCMaPb%2FuWGIK%2BoV9sNNXW977A6dKvWeLMpaa4rXZhDzpvc4Wf5JxOpptbuFkQEpbquap37SHeTz1fcpJjeolOHWheETh1f%2FWbSCGPfxcnI0Utj1TRjFie1tcLDVM2sBS%2FDh1oXbu7Fo%2BArpfICNo79BmsHBAmkpkyj7uZMSQQxuPaOk3tBv481ipN8WI1bi24bzTG%2FS9WCdNpzv2B%2FfTq858gC1Z6B0eT%2BvMJ2e68cGOqUB5kMmzmwMGu%2B1DVELBM2CeTkzTcLfQ0jeDSiUiUZOmSv28hwp0On%2F06Ry9oNtdQYg6AKAFtObQ70NR7gJRg%2BfCkaHY%2FRS4BkJLeLT1TlDNjqsnzdT89SnTEDd9J%2FRWJLLk323C55UqZ883rIL59wgPT9pJ8cFvcSwn3ElhNIPdiDXsSpBsLF%2FXPeRKOSrHhnlJ%2FjplwUD6w4Y4iZPExIbEBpnfLq1&X-Amz-Signature=acb78996d1668cf8c409b5264d73866cca03dc62ecff32d5c49664c1f8596f3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NHBUZQR%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvW%2F3o1eE%2Bu%2BuVoNgpqu0gAHiG0d5ibuWGnlpS7s947AiEAuYVz3dlR3Mmgg%2Bh4y02fQVWGD7xn9%2F%2FoO5sw0Z%2FET2oq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDEtSYALjwwgp7DWFgyrcA%2B9X8zIn8KT%2F61XkTazkPSLvvo7Igs1i9yu6RLTL7MbIbR%2Frl0Sdys1ckqLZIiVfpFlFIYpfJvqRHgjahubkB62vjMBk5wIGEKOBy7M7TzKmJCZMfpXFK3vwslgLMCMon4QI0cB3xSoaFu5mhGTP9Wm8e%2F9twi4QfA9uYDCsk6t3JxnHnSoKWu2X6fjnGnQzBwqeuVW0847niOPPP47yNYplnddJ0QzXDRmmhoGzexTiAOEHDRTucPY4grMzO6EOo01Ove1UW8rzxCgluXzGoOGILq1kzwnqpAaLMYx80YIhEXP4NBtJ86ZUz81pgIJsr7AqULL00XSAfhjknO5Yvi4CKZ3W%2BbWFwrMX%2BFhGx6AhACZazW94nC88GfK3kg0sXsyCT2NjkijjVICzciTedKgFrDCMaPb%2FuWGIK%2BoV9sNNXW977A6dKvWeLMpaa4rXZhDzpvc4Wf5JxOpptbuFkQEpbquap37SHeTz1fcpJjeolOHWheETh1f%2FWbSCGPfxcnI0Utj1TRjFie1tcLDVM2sBS%2FDh1oXbu7Fo%2BArpfICNo79BmsHBAmkpkyj7uZMSQQxuPaOk3tBv481ipN8WI1bi24bzTG%2FS9WCdNpzv2B%2FfTq858gC1Z6B0eT%2BvMJ2e68cGOqUB5kMmzmwMGu%2B1DVELBM2CeTkzTcLfQ0jeDSiUiUZOmSv28hwp0On%2F06Ry9oNtdQYg6AKAFtObQ70NR7gJRg%2BfCkaHY%2FRS4BkJLeLT1TlDNjqsnzdT89SnTEDd9J%2FRWJLLk323C55UqZ883rIL59wgPT9pJ8cFvcSwn3ElhNIPdiDXsSpBsLF%2FXPeRKOSrHhnlJ%2FjplwUD6w4Y4iZPExIbEBpnfLq1&X-Amz-Signature=c6ac6a301c0985eb9b3b7791c3785e1052282c09fcfdee21bd77e43a05ccffde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUCWDAUR%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqrMbzrxITjdedf8BHGarwykg8OGRi5HZfuAuClcY%2BnAiEA0cb%2BO2Qm378E21TgfJjrqFuBla8r35hOIQdXYLlyJqUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDBkwAwefx7e4uNJbtCrcA%2F6PtbRzNDfupTWYIMqcDq6JdgNFrOu6bEFKnZKwHehWz64x9M3OPPYtd1eGZmcX7SYzd5mZvtKb8%2F6tPUwUpKhoSp%2B4ACrYLbitcIyysGQk%2BFCK7j1Tm0BEh%2BpO1U8E5s%2FnM2j4Yfw0aZUgpvBgZ3PdtIVXPm%2FYRQFZ3QGDrQY8gusj0b3jHNva5ycGuaPl6%2F6hfYHRbY3HP8mG8%2Fd4P5ruDM5EsB7QcqjLShsxBFm1XgiiUX3VR%2BTSslCvemPkGxke3iggluOPdCy%2B2RssA6Cs8Ma%2B6ajaPaaFWalAYdynjIFSOeZ7daeBf8zbtLCNXcwFgVevHE0UzPyHhr0744FaMXV0BaER6kMQnp%2Be5ZY4X1L8JdUvn8cqu%2FCzpIZOHKcukOBnqJyYBet03%2F5%2BAihFRp8RN7lunWfiKcVsjAvOJyV1U2%2BP5dJ13Tcy9IteDsLA5yNHxLMmg5tbsixAgYzCzaS7y5wxTID6HDj6%2BR47zgFL98QlFeX%2BjQUIVQBrveJ%2Fz9LbnjlBBnyXMB9b%2FxI4bQ8o0Wpvm1ozxtoJrf1mVZRNJdpnDhFvkORRKmiQ8Mkc97fSasOcQglVXUF8z8QA%2B0o2sMGvUMkAWeDxVqk5MfTyOhg5o1dWYT54MJef68cGOqUBosmNJMgwbVdmhr%2F16cGwyrGn0%2BJ83VVR51m5GqGsvxilL1sEJDT4EsQYPvhMc3KUzvTZuxAztU4Z5hZA13n%2B9J8JAcNR6POYW%2FIiV%2BUwpRAFQvIL69GQ0dUibv8XATYvVkWtsR2BJdiwwePugjs2EopNhhclW%2B%2B%2Beg8K17Syt5nUcPSsmxjFtgnd%2BiQ3vTmsD94FXdfAbC1NPfSP0KpzecRYeEvM&X-Amz-Signature=d26799702576f6373cf2b690f1bc304a16e64b07748e2f93a00e30778020ebb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFIJSJW4%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FVMu9zq1VioZIVoBhncI0%2FfU8vLL92J56PHxyst0FbQIhAJYQObxEMOeDin6THXAqjyCqL6YXx5U4EGEbcCwCtE2FKv8DCFIQABoMNjM3NDIzMTgzODA1IgxGOJj%2BGxadnNXeiakq3AMbA7VnnaSfJWd676A0oe0vM9ms1ILqUde8L638EfQz7Ap3UiHGN9HjadZQwJC5Xhiuyf0IlAfrmaOvytHsfFgS3aDyNHQ2yCc0ZQyyW6SOwu7tM9LDD23BXrnLI3GrspEUOGKwQlTJFpLLgoM6akgpnCjPUcFChSxH1VCY%2BR1MNNxhbz%2BtuAOKGSjjuXwuNWnophsEW7urm5P%2B7hZrIT6VYjJRkYP7PGOMv7XX65TpgmBpGEkuppUYkj8KljsJD4PJKdH4tv%2BSOkIwioSmR3WcFrwZmLHJUW2o8eptgdq2iqxi7yt3TdgLjxVgM0Bi2yNmiex8vIT%2FcdtNY4gb%2FNzoDoJZuRJh%2F4xdFi8bF3On%2F7B3X4HDxFG9L4ZHrLHr%2FKeBU9rZYjl5PNhs%2F6o3fulve8rPwwLzYVf5M1Dx04YWhBcwdvbkvix%2FewZ7wQMHFfPIHgLOa%2Bg0un0RPnXLlsIoDNiwDF0rkNSCxUejzF%2FUZZaPAb0czmhN4GSaoqABsJWgZrFEaJENpC4HxU3LyrVCzB%2BHDH5bM8eMx8XAVhBFQdlbKm%2BJu4RpL8wNIpkWTJ8bUYtJCGYyqXFutrosEf0fR9p6ztYWLDfG3liNVv54evy8GTVzGYt2%2FbX3YzC6n%2BvHBjqkAeWth5i%2FJtGMreasCmAnlRqhPtG0w30ZV%2FjOypw7Ud%2By42Im4cr6fKinE3HDcFZRHj3DVkp%2FRuVGwiAuZcg19fllZHoZzddM7zkMTSq%2FsGm0J0LIg6qP3VkXyLkJGpcZMTsTvMVFRRKUDJmcJUtL5owVqGYMV5q7gk%2B3g33q08CimaCWkUGc8EF%2BNbcsrOWNu5RoceFy254rxjcWUjV0%2BR7FAxwZ&X-Amz-Signature=f79fe78905bd60a1fe023487e4c0c7621549d916180df9cf4eab44e545fe7770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NHBUZQR%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvW%2F3o1eE%2Bu%2BuVoNgpqu0gAHiG0d5ibuWGnlpS7s947AiEAuYVz3dlR3Mmgg%2Bh4y02fQVWGD7xn9%2F%2FoO5sw0Z%2FET2oq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDEtSYALjwwgp7DWFgyrcA%2B9X8zIn8KT%2F61XkTazkPSLvvo7Igs1i9yu6RLTL7MbIbR%2Frl0Sdys1ckqLZIiVfpFlFIYpfJvqRHgjahubkB62vjMBk5wIGEKOBy7M7TzKmJCZMfpXFK3vwslgLMCMon4QI0cB3xSoaFu5mhGTP9Wm8e%2F9twi4QfA9uYDCsk6t3JxnHnSoKWu2X6fjnGnQzBwqeuVW0847niOPPP47yNYplnddJ0QzXDRmmhoGzexTiAOEHDRTucPY4grMzO6EOo01Ove1UW8rzxCgluXzGoOGILq1kzwnqpAaLMYx80YIhEXP4NBtJ86ZUz81pgIJsr7AqULL00XSAfhjknO5Yvi4CKZ3W%2BbWFwrMX%2BFhGx6AhACZazW94nC88GfK3kg0sXsyCT2NjkijjVICzciTedKgFrDCMaPb%2FuWGIK%2BoV9sNNXW977A6dKvWeLMpaa4rXZhDzpvc4Wf5JxOpptbuFkQEpbquap37SHeTz1fcpJjeolOHWheETh1f%2FWbSCGPfxcnI0Utj1TRjFie1tcLDVM2sBS%2FDh1oXbu7Fo%2BArpfICNo79BmsHBAmkpkyj7uZMSQQxuPaOk3tBv481ipN8WI1bi24bzTG%2FS9WCdNpzv2B%2FfTq858gC1Z6B0eT%2BvMJ2e68cGOqUB5kMmzmwMGu%2B1DVELBM2CeTkzTcLfQ0jeDSiUiUZOmSv28hwp0On%2F06Ry9oNtdQYg6AKAFtObQ70NR7gJRg%2BfCkaHY%2FRS4BkJLeLT1TlDNjqsnzdT89SnTEDd9J%2FRWJLLk323C55UqZ883rIL59wgPT9pJ8cFvcSwn3ElhNIPdiDXsSpBsLF%2FXPeRKOSrHhnlJ%2FjplwUD6w4Y4iZPExIbEBpnfLq1&X-Amz-Signature=e1030b17ef50d6b3bae21ffb1a8765f35e58ba37d5bc296ccfeeec9412868306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
