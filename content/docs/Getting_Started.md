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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HVXVUW3%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrC6Rb3hmAYuteXThK7pnaHNbI2NCREpQBIR7LVEh%2F6wIgMP9QAhumgYijLNz5uNXDAAw2wHIF1ALiC9BFRlH60mgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDHPUBSI5z7w84YTKnircA9%2BCFT9lj914%2BxAoJLXNflDuYeoKClB9V6ZWcAgCWvbl4cl8pNqRyfbbB8H%2BrfS35fzXJvU%2B%2BTvbMVkKJIdWDmY6VophDjn%2F3%2F6QpWjpSJyMPwC%2FqqmEHjLDIVg36YLsLhzsWnHj3jKJg8039cutQ9eBlgfAe20se1AGdqTHNliixD4TeFUAXW0QTO0Xumkw%2BhJYQzPlOjAPScv9lToIJrpA3EDVkmluoEo2o1y4W4nxKrA2EyrY6Q4Sn6ZtxYAuR07uPtzD%2BEGTHX%2FLJomnPP1ZdK5H%2BlmHTm4SksLLhUbjQUti82%2FG%2FUzxgVjL8Pyik4liRkWmHmzvVaJMEp20bk92PD5oeEmsF2Tn6%2FEc0AqHuZu4ERKFPm%2FOdzIRjcM6fS%2Fce6WZItguoCqMUTfAhpFSc9T8Itew%2B0P%2FASk8LeBJ8Hc6lsaMVKOVn0UK4GiWdsYS3qpEoqH9n16mGt8XRMRYNiiKXcLoLh2vxUavzQ2Uzb08GqnpdYWAPocxcgXuAiJGBDuDXqbyQsTOo%2FSoGKgZeHWTsSXPTibDX%2BPHmHPpJrC7IMjqYibNi3TSKSktnGbLQs1X9NSYBkKm%2FYRmYGQM3hG4v2aFQpLqW9Ww3B3Jmkx3cEuLI2GVYq%2B%2FMKqa6cAGOqUBQeGsRENEkdMYSIoI92kY%2F63Q6dpH7rp6WdrgPqLUBAM3hV64C2%2FEERiSZo7ES7J%2BIYNrX2wF3DLpe6%2FnzobtnBNOeXHzxm6JAmaTkCJpI%2F3TFoARZdtfpzGLThsF7X%2B%2FRbXV6HThNkHEVcDo7tO1MB41nPDsaObgHMupdOYFPPb7a6DuPGSkCuBUdF9PJPLtuCPyZ1MC3gQdewif%2Fd62lGhEljS6&X-Amz-Signature=9a2583e3e9551c4de5406c27b5b763cb4fc0fe7b1ebe691c4be2484b46597899&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HVXVUW3%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrC6Rb3hmAYuteXThK7pnaHNbI2NCREpQBIR7LVEh%2F6wIgMP9QAhumgYijLNz5uNXDAAw2wHIF1ALiC9BFRlH60mgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDHPUBSI5z7w84YTKnircA9%2BCFT9lj914%2BxAoJLXNflDuYeoKClB9V6ZWcAgCWvbl4cl8pNqRyfbbB8H%2BrfS35fzXJvU%2B%2BTvbMVkKJIdWDmY6VophDjn%2F3%2F6QpWjpSJyMPwC%2FqqmEHjLDIVg36YLsLhzsWnHj3jKJg8039cutQ9eBlgfAe20se1AGdqTHNliixD4TeFUAXW0QTO0Xumkw%2BhJYQzPlOjAPScv9lToIJrpA3EDVkmluoEo2o1y4W4nxKrA2EyrY6Q4Sn6ZtxYAuR07uPtzD%2BEGTHX%2FLJomnPP1ZdK5H%2BlmHTm4SksLLhUbjQUti82%2FG%2FUzxgVjL8Pyik4liRkWmHmzvVaJMEp20bk92PD5oeEmsF2Tn6%2FEc0AqHuZu4ERKFPm%2FOdzIRjcM6fS%2Fce6WZItguoCqMUTfAhpFSc9T8Itew%2B0P%2FASk8LeBJ8Hc6lsaMVKOVn0UK4GiWdsYS3qpEoqH9n16mGt8XRMRYNiiKXcLoLh2vxUavzQ2Uzb08GqnpdYWAPocxcgXuAiJGBDuDXqbyQsTOo%2FSoGKgZeHWTsSXPTibDX%2BPHmHPpJrC7IMjqYibNi3TSKSktnGbLQs1X9NSYBkKm%2FYRmYGQM3hG4v2aFQpLqW9Ww3B3Jmkx3cEuLI2GVYq%2B%2FMKqa6cAGOqUBQeGsRENEkdMYSIoI92kY%2F63Q6dpH7rp6WdrgPqLUBAM3hV64C2%2FEERiSZo7ES7J%2BIYNrX2wF3DLpe6%2FnzobtnBNOeXHzxm6JAmaTkCJpI%2F3TFoARZdtfpzGLThsF7X%2B%2FRbXV6HThNkHEVcDo7tO1MB41nPDsaObgHMupdOYFPPb7a6DuPGSkCuBUdF9PJPLtuCPyZ1MC3gQdewif%2Fd62lGhEljS6&X-Amz-Signature=04406b2dac302efac47b6f976b9e561a0cc4d7bbcf55f64e70873499ffbd2095&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HVXVUW3%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrC6Rb3hmAYuteXThK7pnaHNbI2NCREpQBIR7LVEh%2F6wIgMP9QAhumgYijLNz5uNXDAAw2wHIF1ALiC9BFRlH60mgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDHPUBSI5z7w84YTKnircA9%2BCFT9lj914%2BxAoJLXNflDuYeoKClB9V6ZWcAgCWvbl4cl8pNqRyfbbB8H%2BrfS35fzXJvU%2B%2BTvbMVkKJIdWDmY6VophDjn%2F3%2F6QpWjpSJyMPwC%2FqqmEHjLDIVg36YLsLhzsWnHj3jKJg8039cutQ9eBlgfAe20se1AGdqTHNliixD4TeFUAXW0QTO0Xumkw%2BhJYQzPlOjAPScv9lToIJrpA3EDVkmluoEo2o1y4W4nxKrA2EyrY6Q4Sn6ZtxYAuR07uPtzD%2BEGTHX%2FLJomnPP1ZdK5H%2BlmHTm4SksLLhUbjQUti82%2FG%2FUzxgVjL8Pyik4liRkWmHmzvVaJMEp20bk92PD5oeEmsF2Tn6%2FEc0AqHuZu4ERKFPm%2FOdzIRjcM6fS%2Fce6WZItguoCqMUTfAhpFSc9T8Itew%2B0P%2FASk8LeBJ8Hc6lsaMVKOVn0UK4GiWdsYS3qpEoqH9n16mGt8XRMRYNiiKXcLoLh2vxUavzQ2Uzb08GqnpdYWAPocxcgXuAiJGBDuDXqbyQsTOo%2FSoGKgZeHWTsSXPTibDX%2BPHmHPpJrC7IMjqYibNi3TSKSktnGbLQs1X9NSYBkKm%2FYRmYGQM3hG4v2aFQpLqW9Ww3B3Jmkx3cEuLI2GVYq%2B%2FMKqa6cAGOqUBQeGsRENEkdMYSIoI92kY%2F63Q6dpH7rp6WdrgPqLUBAM3hV64C2%2FEERiSZo7ES7J%2BIYNrX2wF3DLpe6%2FnzobtnBNOeXHzxm6JAmaTkCJpI%2F3TFoARZdtfpzGLThsF7X%2B%2FRbXV6HThNkHEVcDo7tO1MB41nPDsaObgHMupdOYFPPb7a6DuPGSkCuBUdF9PJPLtuCPyZ1MC3gQdewif%2Fd62lGhEljS6&X-Amz-Signature=e0942ecf8d1c6f931cd86a4a99557b51bcc4d15b8e897c0b31f63560a3160ee3&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYLLRGRS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD10xBaAZ2NgBjbCL0BuBq7r9%2FIlmYBgzmJ%2FxnsEtYTnAIhAI91iZN148Jm%2BDYXaGUOH7MSC3iIFdUIJ%2FsY6MfR71TwKv8DCEsQABoMNjM3NDIzMTgzODA1Igzt3Iw424xAefBNyh0q3ANfevJquwM0Kixx4HR05%2FOrKUTeFUYcTaeASuEWuQmq%2FQOwbMScuWJs2%2F9QxKa3xdYQNaYzLvtMXZXQhoFd1ybVNPqvNRRX4QoFuTC9zk0n9xzQNJDqifSNOSuaKfsBNDm9T1tpyNWC60BaBRiq8CGUf1g8iFYX1JXrK1M%2BtYeggyYEspIjGQCuvWCk%2BAJSe8WUBotWpLbPWAiqGEo%2BVHmVRWfowNBPXLB2gD57y61LvtSyh%2F5IbyVsjpoN3f5UvMaF58rkwkcHxocvYoUSlQhG5iIcWxGUWSisgMzHb8A2GoGlFg%2FkVza5FX99hHsIhuuljri%2FUGiyB3HpNrSScaebZLfT0PeOhSa3tgMsljKHHRKESB8UfXwIW0AEqZyfmcm5YjLc1v%2FnfFasfPuc717pbBrCB9RI8lRF%2BIqE2vp5QLxb19hdXfFtc6ra06v0xJLmpyd2HT558T8KX8fL9dkEbHZuRPCzdtmrI%2FYjRQWufzF%2Bmck9CciOWO1%2FCrl3mEL74BlVzOYhPuj3syEXKY7sHGj1sX8y8PDbnhefFDxNdHNr4O6J%2Fl5xNSdcQYN35ry32w3%2FGOKpA16x6D%2FJFm3nAZ1juGBBDSm4YNR6iuIdVAyGCG6k6JtlY9FQNzDBmenABjqkAWyQd%2BYOT9I3DifD%2FrZ5BMLg9HuhWSxAiSdKy3Tcd%2FMfE9O4cSVT4YqlqblUd%2FouG%2BLvsMCsDraWHqSJgsNZMW7QdVIz0S2Ct2ReuTLf6TX8DYy%2F0F8fCOzl%2FKIHpMTZ6Zdyr0EyUj0H3TvD6Tb%2B%2ByxsZuvHtcq4NlUPefHj%2Fw0fXGfXbc1s81cQMoCIK66dWO12amm4qETc%2FqlObohRbuxRi0uH&X-Amz-Signature=27d3bdc2c729608f9c0c1333bee1ae3607f7ca66e51c7cbc164d3c5de7bc567b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7HOL44B%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPLCK7ZccuKQSB4VWhNZ%2FNJGKyh4nrCJIr40tqMWgDOAiEAi0ssGkfYIFfMYBVM%2FMg6tqj9A0b8P8OdpmKPdkq1dhsq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDYQ9xmuvu%2FH3KyGnSrcAwmW2%2B6Sn18kSR3ZsIUd42PhDIaGf5I0U1kWX5DFJqEOntzNxtmoB67ClH%2FplNoJ03yoDT9SAvtbnb5jIN2oBqOAbddcif05ctpfCcVbF4tijtpLeUrTEdUAfQ1LtDD%2BDpXFvi%2FYSS%2BgJGJ39G3mgWSv1bINV94GEIRsVLZctX6kGqP2NXzukGrfyZAPJLryOLZ32sFOHF38XdUFDZX7%2BPq6jAkrnuKNrQLeNO2GGyX2P8ZBZpdw2Pzx48zoOjJ8Urt9xkF8U%2B%2BnPMUjaToWxLMYCRgYGjVVg9LHksBIwjb94MabMOIy8io89%2B4gn1LJtKfmtuYE1TUZryZM5lnW4rSmudG5qHs5v4wGSbqpc2jDoeE%2FXXL%2Bws1R9Hoq6VkcbvM1qlEx3qnaMqHveT6tz0zASnT0ixAQcmu62ZMkgUrJvzoYvd5ApGiP8ZhBGCOKrgc1PAtwnDMfYF3U12%2FXeel8Y80RQns0bF7m643dgA3mdZ%2BKcDgODaSwRcLw2ZRdvw669aA%2Bzgv2yKLZMI%2BVXSjSj2SbODzHYi9we91qoqLV5UWvQJ7NWQVaDAEUggXriVdDaknoAI%2Fys8%2F4OMJGkycA2lPMbbuyqdKMErVTEZ4PDwrUwpF%2F%2FCcYjztAMOKZ6cAGOqUByUJWp%2BZ%2B1ylCMpzmCnDzfv8QyAGu69pjSJ1RmQpR4fHhXG%2B2jRAj%2BiNHgD%2B7VAuC0OHsqW%2B75dCGNzyjOqiGiOPd7Qf0SWt2r%2FrQ91Vxos%2BhPYWgNE5OlfsTBThtFNzPIzqDMPzLWpdODz0JoNNmJNfNdSpu%2BMQgPtwfrJZ0zI5FAVOtWhRBviE3MDQLvpw1RDnSTQr1zTsDmiGzeqQ9HYzlvFHC&X-Amz-Signature=c7e62b1938e13680a663dda2a56d7c5eb8dcc13623654ccc5dc9154aa0da1681&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HVXVUW3%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrC6Rb3hmAYuteXThK7pnaHNbI2NCREpQBIR7LVEh%2F6wIgMP9QAhumgYijLNz5uNXDAAw2wHIF1ALiC9BFRlH60mgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDHPUBSI5z7w84YTKnircA9%2BCFT9lj914%2BxAoJLXNflDuYeoKClB9V6ZWcAgCWvbl4cl8pNqRyfbbB8H%2BrfS35fzXJvU%2B%2BTvbMVkKJIdWDmY6VophDjn%2F3%2F6QpWjpSJyMPwC%2FqqmEHjLDIVg36YLsLhzsWnHj3jKJg8039cutQ9eBlgfAe20se1AGdqTHNliixD4TeFUAXW0QTO0Xumkw%2BhJYQzPlOjAPScv9lToIJrpA3EDVkmluoEo2o1y4W4nxKrA2EyrY6Q4Sn6ZtxYAuR07uPtzD%2BEGTHX%2FLJomnPP1ZdK5H%2BlmHTm4SksLLhUbjQUti82%2FG%2FUzxgVjL8Pyik4liRkWmHmzvVaJMEp20bk92PD5oeEmsF2Tn6%2FEc0AqHuZu4ERKFPm%2FOdzIRjcM6fS%2Fce6WZItguoCqMUTfAhpFSc9T8Itew%2B0P%2FASk8LeBJ8Hc6lsaMVKOVn0UK4GiWdsYS3qpEoqH9n16mGt8XRMRYNiiKXcLoLh2vxUavzQ2Uzb08GqnpdYWAPocxcgXuAiJGBDuDXqbyQsTOo%2FSoGKgZeHWTsSXPTibDX%2BPHmHPpJrC7IMjqYibNi3TSKSktnGbLQs1X9NSYBkKm%2FYRmYGQM3hG4v2aFQpLqW9Ww3B3Jmkx3cEuLI2GVYq%2B%2FMKqa6cAGOqUBQeGsRENEkdMYSIoI92kY%2F63Q6dpH7rp6WdrgPqLUBAM3hV64C2%2FEERiSZo7ES7J%2BIYNrX2wF3DLpe6%2FnzobtnBNOeXHzxm6JAmaTkCJpI%2F3TFoARZdtfpzGLThsF7X%2B%2FRbXV6HThNkHEVcDo7tO1MB41nPDsaObgHMupdOYFPPb7a6DuPGSkCuBUdF9PJPLtuCPyZ1MC3gQdewif%2Fd62lGhEljS6&X-Amz-Signature=1c35c7e650483c5ce32e120685051cbfe983a037939be3afb62d537803588ead&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
