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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4QYQAC7%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvV8%2BrM6sT5kVu7Og1x2I8yxaT5cFowZfTd7vmj0sfeAIhAOwbdYU%2FAP39lO8BDMuVN0ZOGv4TGOPDI6cCL9FMu7BHKv8DCFYQABoMNjM3NDIzMTgzODA1IgwZkOgi0V6l4iLyFeQq3AN3TBLIjXNIJzCrIrKnpl2qFqLT7PeV3H5oaxeA9za9BgGw57pZBHeRDcApStLXmPnPJUxaZ6GNzOrNNjuQ%2Fa4x9jCLlx8DlnUAuCrSCFI4G4M41IEfc3yeBby4%2BqchxPE%2Fa%2FQQ0H3Ji0RZVO%2BaaN26rxWFFxan3ZF8IR5%2FqCdpbf4S7uDWnSoAFkSyGyvtyyk0iiIXPXliinAZnBfGpnY5l8V5v1uyzvL1rg%2B3Nrijpjy4UwslYW7lV0URVMWjsUTFuFif9xhQ3wCQZYrwwu6fnFTCOaJbdsTx19dodzD%2BYUXy3kcxQOaykIiOrV7B7k011leUxlFp18JV8ZNWmLhr7kwq%2FN61M39CA3seCwJllWppqHEO0FFHNl2ORTDRyEMoS4l2otIJ5JUPiPIcTFTd12lE7%2FSoC0q8HjRl53wgTeYf2G9xp6GpsAtAYOz4BKCy6InNdiIGrjUDbAh%2F23qqomYups18eSJ2Q6iaRCFe7yTXCxXeU2nV9sM4ObVCdvt6bgyblOOh8Ajkt%2FBkJG04CXTV7eWDRJnldwxXqCCAxJEJOyfcbgEMYbGoCY%2BLgm5j1KOxwyeKwpOeWKPcvhvP5xbDGo7wz03bkT3hx8ttcOZBZEpFj5zz3gftHjCb7bbABjqkAVswH1oZH3hokw76Rw8Pwam8lIObP2qNT4hePD6bDD9R7C6gUrHUPXQvrEbEhkPg94zvmEG7W8ZNEbERA7rnVZCMWPyDpgLNd3SQTLTDG1r66BkvjFq5ZY%2FPBp%2B2QUG4ceiGjpchDE%2BzSN5Rc3bQpFQxKECz2bqsvft%2FT8GTBZ5sI1yAvsFC6tuXT1kFzeEjYuSIFiJAsC43rFpMM4d9dVCpWURR&X-Amz-Signature=1a0b0bac1b13bfc331f503e51081c84e2af2b56575d8d70fb73e571b05d9e664&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4QYQAC7%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvV8%2BrM6sT5kVu7Og1x2I8yxaT5cFowZfTd7vmj0sfeAIhAOwbdYU%2FAP39lO8BDMuVN0ZOGv4TGOPDI6cCL9FMu7BHKv8DCFYQABoMNjM3NDIzMTgzODA1IgwZkOgi0V6l4iLyFeQq3AN3TBLIjXNIJzCrIrKnpl2qFqLT7PeV3H5oaxeA9za9BgGw57pZBHeRDcApStLXmPnPJUxaZ6GNzOrNNjuQ%2Fa4x9jCLlx8DlnUAuCrSCFI4G4M41IEfc3yeBby4%2BqchxPE%2Fa%2FQQ0H3Ji0RZVO%2BaaN26rxWFFxan3ZF8IR5%2FqCdpbf4S7uDWnSoAFkSyGyvtyyk0iiIXPXliinAZnBfGpnY5l8V5v1uyzvL1rg%2B3Nrijpjy4UwslYW7lV0URVMWjsUTFuFif9xhQ3wCQZYrwwu6fnFTCOaJbdsTx19dodzD%2BYUXy3kcxQOaykIiOrV7B7k011leUxlFp18JV8ZNWmLhr7kwq%2FN61M39CA3seCwJllWppqHEO0FFHNl2ORTDRyEMoS4l2otIJ5JUPiPIcTFTd12lE7%2FSoC0q8HjRl53wgTeYf2G9xp6GpsAtAYOz4BKCy6InNdiIGrjUDbAh%2F23qqomYups18eSJ2Q6iaRCFe7yTXCxXeU2nV9sM4ObVCdvt6bgyblOOh8Ajkt%2FBkJG04CXTV7eWDRJnldwxXqCCAxJEJOyfcbgEMYbGoCY%2BLgm5j1KOxwyeKwpOeWKPcvhvP5xbDGo7wz03bkT3hx8ttcOZBZEpFj5zz3gftHjCb7bbABjqkAVswH1oZH3hokw76Rw8Pwam8lIObP2qNT4hePD6bDD9R7C6gUrHUPXQvrEbEhkPg94zvmEG7W8ZNEbERA7rnVZCMWPyDpgLNd3SQTLTDG1r66BkvjFq5ZY%2FPBp%2B2QUG4ceiGjpchDE%2BzSN5Rc3bQpFQxKECz2bqsvft%2FT8GTBZ5sI1yAvsFC6tuXT1kFzeEjYuSIFiJAsC43rFpMM4d9dVCpWURR&X-Amz-Signature=b05c0f53b356fa6d7a0230ee09c152f8f65a9fe95c4b99cd6336d35aefd2105d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627VSZIL3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIYhv1eova%2B%2FevvzhzrsYJKO5%2BUAXniLGZ0JYp9JTlsAiA9L%2FTw0%2B4LwwD50u3fqov0FBm0CofRNsBbxMVWB%2FF37ir%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMSgQiuxVitCglkUHCKtwDfXuUSrquJLZX1D0%2F6QiyZK0z3vU5WtdshIFXCMunIQIifv79LtZCbFt%2BeR543P%2FDM6NlAygItH6GOVJmRTYsF%2F6ZJbxTCOG8sVtx7V5%2BSas46wWKryR8HCrMaXfbqsRP8tPZAusYcxgCqHvPcC9khAhdRHqTDWeJG4SfNL7q4kZXOY8vslo%2BCfzFdUVD3F8pizhUOUPO1hHN%2BCFhrCJaNtLkhLWixvJvgwd1u4eaEfFukPOBw3gHSLtOb0t61X%2B%2FLlxsT4K1wPrCjdLp45t7knzv7ye05ZsRwNg%2FhElD850T9QljQJt8j5hR4P6Cv2pveT0CeObT6LNWjYicb21ZJbaG1eBxY%2Fo0SXhi8QAyxcnyJbkRHL3IdFWe5gSI0jVBNdqug4CyDqcWbr8T4tendnv8Zwn72pgTEh%2FyS7I8xUGax%2BUwYL7ShioK6hxoxhQxVF61ceoo3eCvcrP2SJPUkSoT%2BU3yBwAo4TtDlp6jQrrqrCAydCR7098hc4qSvWEe8o4h2bQfAUq6YATbTRLK2EJvDkE%2BvYxx6WZfxU5Kd7YhkQeAZp0lS7OEXFVe1sn41kYhsRnMx15msbzG07VzpcpFc8uvr2PpXk29ckJwlV15N5iigz%2BY3NmLQewwi%2B22wAY6pgFkS97LDSRNWx%2BftPP37cMBkC0H%2B7%2BAHHUJJWpmTuAxEnOYAQsrD%2F0EehEPxOVlE%2Bt0ljYYgt4%2F2nlHP%2FyMR6noX89cTSAVT6KW4C1ZfSHIjKzA3STVG1Rq4rkNR3y7zRi1bW9kJe6RTWWjDcgqPbP7V3PJwg5MEhaAajyKJg0FXmOkVTRfRVkBmiJQAL07S0OEXpWmn91Ht9tJ%2FXbbnoGEr8Y8Ih7A&X-Amz-Signature=5218433bb46f1f54ccf353fe5f1a8792bcade1095a05cbc8a788c2fcd5a9f922&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655QCK4TL%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyZ%2F1PpHtCdI6zrPBlvI9D9EZ53Pt%2FcFprqjxyWE8LsQIhAO%2FYGc%2B7inwbo4VxTitBlFD1IZaEkROW7Hn9L0bXcXmJKv8DCFYQABoMNjM3NDIzMTgzODA1IgwnYcrrQ%2FZXO67KEX0q3AO65eELlbMkOm53lZfcs0rtACKdFtWxP2xOMHPldNCIspjg777IS5JYn7cb4d6mmPMpAi%2FCZOJL1xf7izLHvwuYEqFTuWsoXMW8DG3BI0%2FmhQogFC7xqLtV0T69pBKWz8r4XW9sF%2BFiItStNSxmpHu45%2F5CDeZffaSyOIOAfM05%2FbPA0uFwO32QfNsyYQqGtmMy420ktqxREuMSWMlKEH0nezbAycINPzciAZjQrE3xo%2F7s9jjVKzhebqMr%2BeRgIDQ6%2BDKGxqJ3ynmC2JElSkyTakspEjIU9rfKhXFCKXz7HgNg0SWddQ43UiTkgkZYF2la9Sp6djn7McP1Bxlj2wHmqE2N992zRMCo70j7HLE26n6ocejuWyJBPdQJD7QsV1A%2FdafFt23z1RbVCKXf3D4IRLRSE9wxF%2BrYHklfCFI6hND7EBnFhrLjWOvNeDMowgZzjPaWMqEfbBpKOjwqeuYKqS8NjR7cIjSAf9vbHgLHQcUBEOyX2sZSMYMHC3H8FUokvi4VROAU5eoBx1Lu6cTFVUC9JOlyC%2BpXW%2FkduD1MeYLyAIBNJTALxNWC%2F6XtDXt2BKhKgP36GuTkLXq6oCUW6hBPuibfezbK7tKRRjw3iKBxf1WtknantP36fzDx7LbABjqkAUTXN6HCkbD7RILxUECKZNiXY%2FzuGG7m86fCN1PR6sK7twlUJE5Vy733T0rEiZNBarlTY18zboStpYnlAKoYa27ZlsUElfY8tIRNJMZajcsNeg0udni0Jw%2FyB5Y%2FGXNhrrPrfrqdN1zOveRI8xRs08HJKp4ZhorLZ9jQSFHY10mHPYEn9%2FNShZ1r6LTuS729m3bimSyVMsA%2FcQFN7ctB15IsN9xQ&X-Amz-Signature=6eb2e803a600c1154d1b714d836352c08a06773cf70ddb8c0af878415c5e9e91&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4QYQAC7%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvV8%2BrM6sT5kVu7Og1x2I8yxaT5cFowZfTd7vmj0sfeAIhAOwbdYU%2FAP39lO8BDMuVN0ZOGv4TGOPDI6cCL9FMu7BHKv8DCFYQABoMNjM3NDIzMTgzODA1IgwZkOgi0V6l4iLyFeQq3AN3TBLIjXNIJzCrIrKnpl2qFqLT7PeV3H5oaxeA9za9BgGw57pZBHeRDcApStLXmPnPJUxaZ6GNzOrNNjuQ%2Fa4x9jCLlx8DlnUAuCrSCFI4G4M41IEfc3yeBby4%2BqchxPE%2Fa%2FQQ0H3Ji0RZVO%2BaaN26rxWFFxan3ZF8IR5%2FqCdpbf4S7uDWnSoAFkSyGyvtyyk0iiIXPXliinAZnBfGpnY5l8V5v1uyzvL1rg%2B3Nrijpjy4UwslYW7lV0URVMWjsUTFuFif9xhQ3wCQZYrwwu6fnFTCOaJbdsTx19dodzD%2BYUXy3kcxQOaykIiOrV7B7k011leUxlFp18JV8ZNWmLhr7kwq%2FN61M39CA3seCwJllWppqHEO0FFHNl2ORTDRyEMoS4l2otIJ5JUPiPIcTFTd12lE7%2FSoC0q8HjRl53wgTeYf2G9xp6GpsAtAYOz4BKCy6InNdiIGrjUDbAh%2F23qqomYups18eSJ2Q6iaRCFe7yTXCxXeU2nV9sM4ObVCdvt6bgyblOOh8Ajkt%2FBkJG04CXTV7eWDRJnldwxXqCCAxJEJOyfcbgEMYbGoCY%2BLgm5j1KOxwyeKwpOeWKPcvhvP5xbDGo7wz03bkT3hx8ttcOZBZEpFj5zz3gftHjCb7bbABjqkAVswH1oZH3hokw76Rw8Pwam8lIObP2qNT4hePD6bDD9R7C6gUrHUPXQvrEbEhkPg94zvmEG7W8ZNEbERA7rnVZCMWPyDpgLNd3SQTLTDG1r66BkvjFq5ZY%2FPBp%2B2QUG4ceiGjpchDE%2BzSN5Rc3bQpFQxKECz2bqsvft%2FT8GTBZ5sI1yAvsFC6tuXT1kFzeEjYuSIFiJAsC43rFpMM4d9dVCpWURR&X-Amz-Signature=bb468ccbfc068353dc89bc11e32cddc68183f41ee231c758174382e96fbfea12&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
