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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS657VIX%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxqqUijNzjv2W%2Fk1gqk63o4SLSmx8Q3%2BgDbTJIyZVnJAiEA67z9rXl3S6BSPYTBX%2BjOrVFXo%2FY1cqqg0aihNcUWZMMq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDJeosSZ83i7F7HblRCrcA0UUxfnBwht0LvVD4gZ0Y%2FwK6pmZh8X3Mt1ci2wpDZUKm3NRasgcRwBFj92RokFtXhd3iJoTZ0EmGbIkXtJ7PKQc7fxgChXx0teQ07yfobY5BK%2FKx6WuLeIajaL407vgf%2BQ1RVPlVGptel%2BM%2FT8J7GpxNNJzBKZinuSE2EgHxUyxOWYNvVRAmePmLg%2FG9mJscogl2IXZ5XUJ6gptFUbTpoIj3iEAp25k8FS9XBBvw32vZ8YfHYVHmDeEMILSvY8foMpvevv8MTWiqFsOr7OtyVo8d2de0idZ%2BgtXcxCJ9DhnY0JzaqUTrAFJPxkQq8TA31r70indbGIfapx0qMneGkJ2EREnQLzSbdmqHvsY5b5sNe1Fzb6PTwXhRdobH%2BjGloCgH5RwW5vaZrMB%2BBisLHNLmWPiknKegfdGci%2B34ZwbtaNwhha3LFlePtFbxyxWk0NONGFfhG6IehvQSqDDsj0UPpP8Dxxq2wVvTvHmzEug2205ODP8dBbWosagapdrbVMQbypeiflGd4fgMmzEDfqB%2FIccdRoYulSl0u2hDQjUSAIDZduoXsOVWNsrDK%2BA9kwZ3SNKQ%2BMf06GCWWE%2BcGDJXxwBaCSZCWNmnRh9wPY%2BIAkNsVZtojJsH38fMJmYjL8GOqUB4%2F2VCuu0feNG1R8DIodzBnF3C%2BBPJnfvpWsBp4WvFgW%2B%2BC23HOgcBU3YNODmYK%2B%2B2kg0dREToNGHMtq2JO7hs0T8FRyHXOBqaM4PNalE6R6tJsbrlqCcqDikelkoQbBYFAr2mb87t1v4FdjcBKgciIMA%2Bjbya%2BRz5UKtScCWXdAIb%2BFS3WI9U95wvPiEI%2BrPdxj22KslTOX8hfcfziezIg%2BEORmH&X-Amz-Signature=44fd19f0e65d917709a787b7729fd468cdf2a90b1916901888c9471d7a4a10a5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS657VIX%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxqqUijNzjv2W%2Fk1gqk63o4SLSmx8Q3%2BgDbTJIyZVnJAiEA67z9rXl3S6BSPYTBX%2BjOrVFXo%2FY1cqqg0aihNcUWZMMq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDJeosSZ83i7F7HblRCrcA0UUxfnBwht0LvVD4gZ0Y%2FwK6pmZh8X3Mt1ci2wpDZUKm3NRasgcRwBFj92RokFtXhd3iJoTZ0EmGbIkXtJ7PKQc7fxgChXx0teQ07yfobY5BK%2FKx6WuLeIajaL407vgf%2BQ1RVPlVGptel%2BM%2FT8J7GpxNNJzBKZinuSE2EgHxUyxOWYNvVRAmePmLg%2FG9mJscogl2IXZ5XUJ6gptFUbTpoIj3iEAp25k8FS9XBBvw32vZ8YfHYVHmDeEMILSvY8foMpvevv8MTWiqFsOr7OtyVo8d2de0idZ%2BgtXcxCJ9DhnY0JzaqUTrAFJPxkQq8TA31r70indbGIfapx0qMneGkJ2EREnQLzSbdmqHvsY5b5sNe1Fzb6PTwXhRdobH%2BjGloCgH5RwW5vaZrMB%2BBisLHNLmWPiknKegfdGci%2B34ZwbtaNwhha3LFlePtFbxyxWk0NONGFfhG6IehvQSqDDsj0UPpP8Dxxq2wVvTvHmzEug2205ODP8dBbWosagapdrbVMQbypeiflGd4fgMmzEDfqB%2FIccdRoYulSl0u2hDQjUSAIDZduoXsOVWNsrDK%2BA9kwZ3SNKQ%2BMf06GCWWE%2BcGDJXxwBaCSZCWNmnRh9wPY%2BIAkNsVZtojJsH38fMJmYjL8GOqUB4%2F2VCuu0feNG1R8DIodzBnF3C%2BBPJnfvpWsBp4WvFgW%2B%2BC23HOgcBU3YNODmYK%2B%2B2kg0dREToNGHMtq2JO7hs0T8FRyHXOBqaM4PNalE6R6tJsbrlqCcqDikelkoQbBYFAr2mb87t1v4FdjcBKgciIMA%2Bjbya%2BRz5UKtScCWXdAIb%2BFS3WI9U95wvPiEI%2BrPdxj22KslTOX8hfcfziezIg%2BEORmH&X-Amz-Signature=45fb6f5ac887a85c50ac54611e28d9f7c2e5db0b623669af9b88b31f586c01ab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZBXSQLR%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9FFuwjetdfUX%2FvkYZvs6PDBzCZfB9UKR910ZzK8SDMAiEAqYlvc9wwIGwxVylTGKvB49FbvV49nbmQJW39kDMVxI4q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDKzt7Q6FSJ1EJ7Q9%2BCrcA3QuDWZV5LLJV3S5rLKYQ%2BfBYDZxeX%2F7q%2FNZ9yTQUZEbb56Pwbvo6XPlnoUQHF3m8%2B4piWOXfH6PcvB1eBOtpgoD5%2BRaKMkD9i%2BZplmJmhbVJZRctEdv3kGPiOz0hXUlAz1GIRFHaYeAcmB79Qlp63AZNDdjniGBOFd7vxzj3cVnwLVfDhMwT5aOORvwS4Q1%2FgKsMnzkHa9MbXOCtqEx2uEfztX1GMWo2PxP%2FCDv4BK5SJZ6IYkzg4Jqco8S5ClxyTAbARYU%2B7LkjFOEOIyvrQ%2F9Wv1cnUbXnk6lmGVo%2BV0eHY3Ps2C9wwdfvYVaSs91HAw1aaz%2F5Gjr%2BFs74Rbgf4IzwUxH1HdTGOBaVBkBcXo2OyTTHqAYEdC60lSvr3xx1IoNW4PSvjQlWzSRm0JhAt9YaQf%2Bd5DhQA7ZHwlllrpUUWxt37xRt%2BSXhHPojHki%2B6%2BOdw4%2BXfIX4gRKiJISepxmwEw%2BA%2BarAnYT4OIbIevB5x5TNBYIBcmg8TUc2YPx5W8epBCgIf%2BhBZnCKywG3bYwnzMtSkMVxkpOevzDHXCkyLmKinMHZoQk5QYd2ZvZnSOFB5XEzaM%2B209xd2XnuYmV4cmzBMw9wRTS3NYWoRyO2rBVu3v6DcZeloPXMPGXjL8GOqUBb%2B9b%2F7sfvLt4lec8F8g7%2B%2BtSLzaihrnMbpQM5xu%2Fho6EIm3rgIg5dMd8OB1TuyQI5313%2BC7PLXaQ%2FFxg2gblDLg4d%2BligcPqEmELbXmmiFTCQGN2g%2Bu3uTpJQskp%2BbgE6XjByTKgRo%2BOGE1srOR3kyBKGFMq4mbEcYg7HSRaa7cByMLRQ7FPW40n3xbHLHIGGxSSoINnhTAVueT8y2yiHJkb22Rz&X-Amz-Signature=e07a931ce0cf7a86fea0587b0b52833dce69281581994047817b5fed9b38ee06&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZUWZQSN%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQJGH9hZ2JjTfQZiNARcAPEZdrC%2BmPsPIZjXwCsZ6t0AiB%2B1mnATv2fWMdBQW9%2FIFcJ2sfHuA0CuIFLOFM%2FshHiwyr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMtAeZBfpC26NMqFjgKtwDrXoa%2BjQ4AklQoL1kCoWcXqI1zNxT2P0oOM5rhte8IQPswB0YFMeD6yVW%2B51tnNi76UoDl3g%2FaZZ4N7iyqbFUNO6OzhQ%2BbageO85mXOsVYVLkka8oOT4AQN9yw1WZFZ7ZmchtNPjjicNoCYeq%2FSmi9QdsW6vwgJA13Ea4zS9WYJ8DqGuROj17BbovpECz1tX%2BulPDghw44mnWaVH2KyuxQpwZKXssS6d3OeMEVVUGd%2BtM6d5Q0W3SSNxFINv9FnlnoU1rV4x1pjSK%2FXYY4Y399W1bSDuis%2FNToXeGGgE2B2nE18kxQZlC0ETZOwnrDiTQIr%2BuLFkiBi0lC8SHJ0FsP2Pc3EZJ2f6owLnVgzLVaOVWopVUjhqBVCwEgKnuayNDt2PmqQZSKZFc0CAm%2BqhuJqQ9a2JnLRo%2BKEUmLKURMGBF2senTkemKS7O5DTWMsMU0lenmqZOTtuMzr087UyBHT3ZL4HwyLQvsQdvpcrryB1%2FX6MvtX2IRitV%2FWiSvv9HRQ5sXWPMLigwYOC1%2FCSgWTaaNX6ycSFtZLP1187PqeNb4YVBF%2BT178j3Dh8tbLw4mhgenrZDoGQHm4XdeK6he80uIHt1lfpgHkIkDxHcDQx6pE4cs505Uq%2FIXEkwgZiMvwY6pgFQuXfivAIfyBT0ZLAZ46t1g0PI1U%2BolxtCB7cumT1lhS9iCY2M839zTr%2FUz81rx5TPSJieEFfnMR5NqwJqpYuybZA6NrkuEbepggnszwoLSX5bk6l%2BfTWcyVGLw2HKHKQPk1ZbeOIHVvFdgjzHw0h6yNnIS2DSHHrxaI9j6ibo86Dli1AWtkNV6179Cwfeg4%2BS09Jhe19SSE44jet9maE3evk9LAZE&X-Amz-Signature=037104f6e44e75da7d10bfcd1952710615cf905bd7ed28f98733785cb65b6352&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS657VIX%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxqqUijNzjv2W%2Fk1gqk63o4SLSmx8Q3%2BgDbTJIyZVnJAiEA67z9rXl3S6BSPYTBX%2BjOrVFXo%2FY1cqqg0aihNcUWZMMq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDJeosSZ83i7F7HblRCrcA0UUxfnBwht0LvVD4gZ0Y%2FwK6pmZh8X3Mt1ci2wpDZUKm3NRasgcRwBFj92RokFtXhd3iJoTZ0EmGbIkXtJ7PKQc7fxgChXx0teQ07yfobY5BK%2FKx6WuLeIajaL407vgf%2BQ1RVPlVGptel%2BM%2FT8J7GpxNNJzBKZinuSE2EgHxUyxOWYNvVRAmePmLg%2FG9mJscogl2IXZ5XUJ6gptFUbTpoIj3iEAp25k8FS9XBBvw32vZ8YfHYVHmDeEMILSvY8foMpvevv8MTWiqFsOr7OtyVo8d2de0idZ%2BgtXcxCJ9DhnY0JzaqUTrAFJPxkQq8TA31r70indbGIfapx0qMneGkJ2EREnQLzSbdmqHvsY5b5sNe1Fzb6PTwXhRdobH%2BjGloCgH5RwW5vaZrMB%2BBisLHNLmWPiknKegfdGci%2B34ZwbtaNwhha3LFlePtFbxyxWk0NONGFfhG6IehvQSqDDsj0UPpP8Dxxq2wVvTvHmzEug2205ODP8dBbWosagapdrbVMQbypeiflGd4fgMmzEDfqB%2FIccdRoYulSl0u2hDQjUSAIDZduoXsOVWNsrDK%2BA9kwZ3SNKQ%2BMf06GCWWE%2BcGDJXxwBaCSZCWNmnRh9wPY%2BIAkNsVZtojJsH38fMJmYjL8GOqUB4%2F2VCuu0feNG1R8DIodzBnF3C%2BBPJnfvpWsBp4WvFgW%2B%2BC23HOgcBU3YNODmYK%2B%2B2kg0dREToNGHMtq2JO7hs0T8FRyHXOBqaM4PNalE6R6tJsbrlqCcqDikelkoQbBYFAr2mb87t1v4FdjcBKgciIMA%2Bjbya%2BRz5UKtScCWXdAIb%2BFS3WI9U95wvPiEI%2BrPdxj22KslTOX8hfcfziezIg%2BEORmH&X-Amz-Signature=8eaccc30afbbec9161acd975a43a6d3988a1dc6991252ffdabce3d04de054449&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
