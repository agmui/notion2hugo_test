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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIB6DDS6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoQxDFwLOQgzCo3dta5r50X%2BR4I%2FbXX%2BO%2FSxqN6IBX4AiEAq1UocT7g5xqrm9%2BdNPcZJfMNJ%2FPoPvQ3lqygjTYlLewq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDJUnh3ceP40Rhwn74SrcA0ziWfTkBVvKclbAan19rlgByhV6x%2FC%2BuUblJtsrlqBZtMhI4Hmx9Qx4cUsziScmiKDkv33BYEwpvNpCDek89ErL21Etq%2B2A%2F1zAj5ZziaascEBTKXeqy1XMQvThUi8wox8goUbEVi3v3XjdV2TsDOIBkjNzMYSguAAyFCLUg%2F2JV%2F7pGsr2334kTwKYVRbbvNHsJsN%2FhSQC5Uc2U%2BjBTmgez72Fn32LIHT7UYSj9YXaSIm9SvB3A4hgJVxIrM%2FLTCOhL%2F%2B5jPopYy2WdnaRA%2FA1LmCNEJ%2BTRkJVhthSZ7vTeDqzWmrRhA%2FSMP13UPsUo%2BhAP5Hwo8BsOZC8qRpLMutH6kxX7J3XfLlrEVfcduws8FWd%2FsPv5C7HzjH2B5R5owkVMHbxJhNCM6%2BSV24yJ%2FglcHDWG%2B1w5ILFQCmdiGXvgMzab4eE6hiONoxX4RyXpqIFoSKp3eX7M8zx71Qv5PMBIBseZxuleh2tZsZUgA9egu6GAJbhzU%2F6R01wbL5fq5RMT5mOinyBk1FSYV98vCJEoRWiR%2BBe9zKgzTGF6T9czm%2BXlvFf5VqpfLXRHm5LOByPy9fcWGY5yxfmDEfP3LJiuulqyFkmFKIk4LFnaFy0v31WCOpYeiOCbsAAMIusjr8GOqUBgZdPpDKFbQL5UxJhUdCdlrOs3%2B8sfsgMiWtkTZDZ%2FFzXYrnSqv8ixy4FzsifLmvqKwcPfgW4xanwYT2zUmvirykHJpt%2BV%2Fb392GVKn%2Fp5z88oczOGEuAjo%2BbPfCb%2FVnfH%2F0RJ5ytIHY2ddAXsH6ECrSkkRZfbAsGwQUeNf2hdJlooauQjwYotbzMH0uaSqvLJZLbU%2F%2BE1fjEGl8ErzFMlRyigBJL&X-Amz-Signature=90fb37db98ba49b24786ec0456a494df147833751aa85b5ce5da6f294be4e848&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIB6DDS6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoQxDFwLOQgzCo3dta5r50X%2BR4I%2FbXX%2BO%2FSxqN6IBX4AiEAq1UocT7g5xqrm9%2BdNPcZJfMNJ%2FPoPvQ3lqygjTYlLewq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDJUnh3ceP40Rhwn74SrcA0ziWfTkBVvKclbAan19rlgByhV6x%2FC%2BuUblJtsrlqBZtMhI4Hmx9Qx4cUsziScmiKDkv33BYEwpvNpCDek89ErL21Etq%2B2A%2F1zAj5ZziaascEBTKXeqy1XMQvThUi8wox8goUbEVi3v3XjdV2TsDOIBkjNzMYSguAAyFCLUg%2F2JV%2F7pGsr2334kTwKYVRbbvNHsJsN%2FhSQC5Uc2U%2BjBTmgez72Fn32LIHT7UYSj9YXaSIm9SvB3A4hgJVxIrM%2FLTCOhL%2F%2B5jPopYy2WdnaRA%2FA1LmCNEJ%2BTRkJVhthSZ7vTeDqzWmrRhA%2FSMP13UPsUo%2BhAP5Hwo8BsOZC8qRpLMutH6kxX7J3XfLlrEVfcduws8FWd%2FsPv5C7HzjH2B5R5owkVMHbxJhNCM6%2BSV24yJ%2FglcHDWG%2B1w5ILFQCmdiGXvgMzab4eE6hiONoxX4RyXpqIFoSKp3eX7M8zx71Qv5PMBIBseZxuleh2tZsZUgA9egu6GAJbhzU%2F6R01wbL5fq5RMT5mOinyBk1FSYV98vCJEoRWiR%2BBe9zKgzTGF6T9czm%2BXlvFf5VqpfLXRHm5LOByPy9fcWGY5yxfmDEfP3LJiuulqyFkmFKIk4LFnaFy0v31WCOpYeiOCbsAAMIusjr8GOqUBgZdPpDKFbQL5UxJhUdCdlrOs3%2B8sfsgMiWtkTZDZ%2FFzXYrnSqv8ixy4FzsifLmvqKwcPfgW4xanwYT2zUmvirykHJpt%2BV%2Fb392GVKn%2Fp5z88oczOGEuAjo%2BbPfCb%2FVnfH%2F0RJ5ytIHY2ddAXsH6ECrSkkRZfbAsGwQUeNf2hdJlooauQjwYotbzMH0uaSqvLJZLbU%2F%2BE1fjEGl8ErzFMlRyigBJL&X-Amz-Signature=a774ce132fb984f63d85faa85ff8259312d5bf7b9cd2f61828844d8e3571bca8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG6HPMLT%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH2BuCMrjCENpRAkRJNR9OORWpVUV7AEZX3e5EF1Ku%2FQIhAM4Bctv4pn58PQkZI9H1aOvZXi3IIu6n9I%2BgQNEp%2FwExKv8DCCcQABoMNjM3NDIzMTgzODA1IgyAm9lPWo3z0uqo8Lcq3AO0KP5rbA8zBD78TLO5hGeknDHKLTKQab0r%2F6pfrLfEbe8nMn3RHUtUaHusXOJ5vTmQqX4h1cV70BY8ifW8x6fs4DBIM220S7OOIUR%2FKb08rHXoIkN12fieLQ8V30oHVyRIeDxQl8DhNeOqjyixnKgTvg5kACB5HfklQIxO60hNjetIQyoYwULS%2Fh0ddjfyEF3BOu%2B1anSXcFWqyVwwVku57xhThtNEzTwooy3dH%2BryEhEFdZXiHAtRVi3HtjwiwA8T2%2FF3u%2F6q33g6fio%2B5esYEOABVSx2fcJZ0yEy9e4mAtbEBm8ROFTELei3NBbq9vPkv4y4qWUnHavP%2F2pgBRNJEbpTy6PZExlKecxmN1tja3erK95uq0KFoi8MdL1ojO%2F4JUQnOxugxmHeFgl3k%2FXSxH5nZTSSY7TB5q8ZGaCcNMqgIK%2BWhr0WXk1UFBoQ5ZnIFstalVBrP0EhMYo9zP0VhGDjpgwAeu7EnhI5vf4s%2BBdekpR0fTScJ%2BoBB%2BI6yBn9zr27kqo0TUS4UkhBnrGNazA1vns9P0FQhQMqV4JUNmKepuxOg9vEXhjCm8H9bL3mO9MbCdL8WkUUQ8GYD3XI7%2BqxUHuxpS6XSK8SdCl3WcBN2dmla5PEQPcfWTDYrY6%2FBjqkASFd3Wpp3Vs0I2r%2BkA78WDlVyYqtb3BaH1UeIg6aZH%2F6Qbh4pP7IOrzu2FT9KocVrYw4csYNKTazNPLjpz35twV5wtln8BqFSxEWvm6Xk50GcEgXXJDdNzTOWiDmM%2BXFvk%2BuX08nb3Cvaxy8vVsw3JlSjokb1l1JhLWI17fc0PcalrDLb3IL865%2BP9t9V2hsf5y99lFnATrqPs4DLSqAFBSZjKxU&X-Amz-Signature=a86053c9f98b3edc10a39b0b74fd64f54da6647f5fd996ea35ab2b3782ae82b3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TMDXG7O%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAppl66uKcSNOmLWQIOPGAZKi%2B9GxC5O6f7DyNEle4s1AiBn2I3nonVrSrH%2BJgVdw98%2F78zN9dXFro%2BPhkjeX6oY5Cr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMlVWWpbz69kgl64C%2BKtwDtLFoZhQKZZpgooPsP%2FBfShhXo%2F0bWeaxva2zJjY%2BrnEXvuGd1cVT1VvF%2BZ7GA1Za77jhiJR98eWDu%2Bq%2B7eXucdIsvvKcQTqmeFzBtHjAa7Y%2FESOspfCWOgF8wVI0KAz1eSYaPDoS9izW3cGCGNE%2B4Jv7pYB0jfD%2BDQkvDt6BTFMW8qFbW0FcVHuy5ggWZWWYeMGU4XNgIUUH6%2B0gDfCKGB966VvRkSwZ8t52KrS%2F3s4dBfuOXbDAv7ZQ7gRHrWI2ZG3LSz%2BDPOqlUirwOy%2F%2Bx7jjLc6%2BsXcBOl4IPj7yxIoiyxPxphpK3Hli%2F0mEVnIHm56NW%2FBWmwgnO%2FsVDBAFxVdtN%2B3OpnRUjaCpN55ZsAUC1TOsmnPdD6iR4k4mjN6nJon%2F4FsWjiRG8lCEi5rVwU0xFN%2FRFJBlmniq6k5YzeEbTScWj1bLkuyBbcVRpZebLxLliCQUq0HXsLOmiIGBeBRgcsik0LgO3cF%2Fh7ipeQgmDMf8VbfJb3nGQdx0h%2FQftcP2A5o5EZJ6T8EFVgKOPyRkuBLd16TkzH%2F9PI6THx4%2BEaYfEgoV5HE%2BIoFhWr1AXzWvi3V9EyA%2FY9%2BS6%2FRRNZGhyCbQh8Lh%2FAil%2BpvX7T5ayicycv69QXAtMpgwi6yOvwY6pgG3clkpulS3sUEFz7XQCZw8zNx06DqzrYV3wNe82QR6UHjRS4sS0ZZ841UuUv52IpwtCRduIRtdEPoIgEez7jJazGmc85fyyuj%2FIs2yKaYtOwRZk28xrtVGV171MJwe2O6ygBrmKm0CYtDl42Bhqho0YvXRfh9PRGY%2FrAIDxeB2zwV%2BM2f6%2BzuchB25Zb59ntwH%2FiueUcVUIx8mdXfmkoDrdBwhWGiT&X-Amz-Signature=8381c07e8461f0eb3817ce26d7e3a2b0b1d67aee04116c282cf71fa1f6b7ec50&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIB6DDS6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoQxDFwLOQgzCo3dta5r50X%2BR4I%2FbXX%2BO%2FSxqN6IBX4AiEAq1UocT7g5xqrm9%2BdNPcZJfMNJ%2FPoPvQ3lqygjTYlLewq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDJUnh3ceP40Rhwn74SrcA0ziWfTkBVvKclbAan19rlgByhV6x%2FC%2BuUblJtsrlqBZtMhI4Hmx9Qx4cUsziScmiKDkv33BYEwpvNpCDek89ErL21Etq%2B2A%2F1zAj5ZziaascEBTKXeqy1XMQvThUi8wox8goUbEVi3v3XjdV2TsDOIBkjNzMYSguAAyFCLUg%2F2JV%2F7pGsr2334kTwKYVRbbvNHsJsN%2FhSQC5Uc2U%2BjBTmgez72Fn32LIHT7UYSj9YXaSIm9SvB3A4hgJVxIrM%2FLTCOhL%2F%2B5jPopYy2WdnaRA%2FA1LmCNEJ%2BTRkJVhthSZ7vTeDqzWmrRhA%2FSMP13UPsUo%2BhAP5Hwo8BsOZC8qRpLMutH6kxX7J3XfLlrEVfcduws8FWd%2FsPv5C7HzjH2B5R5owkVMHbxJhNCM6%2BSV24yJ%2FglcHDWG%2B1w5ILFQCmdiGXvgMzab4eE6hiONoxX4RyXpqIFoSKp3eX7M8zx71Qv5PMBIBseZxuleh2tZsZUgA9egu6GAJbhzU%2F6R01wbL5fq5RMT5mOinyBk1FSYV98vCJEoRWiR%2BBe9zKgzTGF6T9czm%2BXlvFf5VqpfLXRHm5LOByPy9fcWGY5yxfmDEfP3LJiuulqyFkmFKIk4LFnaFy0v31WCOpYeiOCbsAAMIusjr8GOqUBgZdPpDKFbQL5UxJhUdCdlrOs3%2B8sfsgMiWtkTZDZ%2FFzXYrnSqv8ixy4FzsifLmvqKwcPfgW4xanwYT2zUmvirykHJpt%2BV%2Fb392GVKn%2Fp5z88oczOGEuAjo%2BbPfCb%2FVnfH%2F0RJ5ytIHY2ddAXsH6ECrSkkRZfbAsGwQUeNf2hdJlooauQjwYotbzMH0uaSqvLJZLbU%2F%2BE1fjEGl8ErzFMlRyigBJL&X-Amz-Signature=ed27c956249e0b7fd00c35c2fd279999fc8ecbe3dfbf35f82805b1f6e59304cf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
