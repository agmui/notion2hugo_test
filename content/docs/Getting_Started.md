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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SJVE443%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmNOyTcR653eOqiO%2BCRQ0p0L9wZFcsDv7j3EwWBFmvEAIgTdehDgNH0U62tgS24CyxoN6wUPCHpF7fOMDF1oPkMEEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATKshHa6wt8q%2FFH0yrcA5Qap4xOtZLCL0vk4GeCAPKnPDmK2Ch%2BtpGKKAXOKdbOEL%2BmSNzIDMyVnyVMTgkMEp2SGUoLE7wHqDqLP5GUFKPpm1cKhhwChRCNuW27V0aU2tRvA%2Fe%2BZ%2F%2BPK7eXNgFBiN7zKk8p7aGCgUhBlWrUl2uE%2Bh2ZkjKnb8LpveHkB6IqGS5aKs58aYaViIMIJR9YeksfZcywBhCqD8jnsarOfsEEbI3iu4YIRx%2BbYwTj58NjzTUXHomYQPXX1b0GkLlm8AtbRUc08qnCgcLiGR5ahO9ALXlMHWT3jTLaBwNUdU4SnPguZ9iG%2BGNUs3PBqH2OFZBkiwFGDEv9v5CpIzLof4kKUYI4U7CBIaTm3%2BsIe%2BJg50E%2FshHIXuzhJE0NzpMnIlv3ImdD7lDqGvliJMVnLrg3lHVOCIBxG%2BBO0JmN5QA6YYlZu6U5KqWvkA3nJhZzKeK%2FEYUqHLnzXs9qBSHJSnfMQ9xRbR9ICE18MyOuvXMAV2n0ACjeIsen7Zotg4yZBJloi2rdwWCGSYc0FuM6PV7SH9ELOzAg%2FSIUQ8k5o9dQBu3%2FtyFFxwyptGuQ8mep02qKq3t62jBi16e0KWGCHkDeUort%2BohD%2F4bGsOOxDkVctxxClkf9U2ccwhteMLaOib8GOqUBq4ljX2q996OBZIkL14pKLGhxp%2B9aVHXH9YmR9QTt0WLv7EylDKwMBAPWcoW6NqCZJn8%2B%2ByuqcYKjeKdC0lCJgS82bp7bTqQNI40hojw3Ist1Oqt%2BPx%2F7wHx7j2rv5rGyO2SnXWk6BapjgwOENb25GPOzOiv%2Fp076eK7EHSdJBt0UEWIxmJqzFc6cfhm4IIV%2BzUy42W8FO2Qqv%2FgX9y0c3r3Zmnal&X-Amz-Signature=e2c62682ea5fa5ae3e9ffa16e13cdf76f5db7dc35fc86d5d7c025c3abb528432&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SJVE443%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmNOyTcR653eOqiO%2BCRQ0p0L9wZFcsDv7j3EwWBFmvEAIgTdehDgNH0U62tgS24CyxoN6wUPCHpF7fOMDF1oPkMEEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATKshHa6wt8q%2FFH0yrcA5Qap4xOtZLCL0vk4GeCAPKnPDmK2Ch%2BtpGKKAXOKdbOEL%2BmSNzIDMyVnyVMTgkMEp2SGUoLE7wHqDqLP5GUFKPpm1cKhhwChRCNuW27V0aU2tRvA%2Fe%2BZ%2F%2BPK7eXNgFBiN7zKk8p7aGCgUhBlWrUl2uE%2Bh2ZkjKnb8LpveHkB6IqGS5aKs58aYaViIMIJR9YeksfZcywBhCqD8jnsarOfsEEbI3iu4YIRx%2BbYwTj58NjzTUXHomYQPXX1b0GkLlm8AtbRUc08qnCgcLiGR5ahO9ALXlMHWT3jTLaBwNUdU4SnPguZ9iG%2BGNUs3PBqH2OFZBkiwFGDEv9v5CpIzLof4kKUYI4U7CBIaTm3%2BsIe%2BJg50E%2FshHIXuzhJE0NzpMnIlv3ImdD7lDqGvliJMVnLrg3lHVOCIBxG%2BBO0JmN5QA6YYlZu6U5KqWvkA3nJhZzKeK%2FEYUqHLnzXs9qBSHJSnfMQ9xRbR9ICE18MyOuvXMAV2n0ACjeIsen7Zotg4yZBJloi2rdwWCGSYc0FuM6PV7SH9ELOzAg%2FSIUQ8k5o9dQBu3%2FtyFFxwyptGuQ8mep02qKq3t62jBi16e0KWGCHkDeUort%2BohD%2F4bGsOOxDkVctxxClkf9U2ccwhteMLaOib8GOqUBq4ljX2q996OBZIkL14pKLGhxp%2B9aVHXH9YmR9QTt0WLv7EylDKwMBAPWcoW6NqCZJn8%2B%2ByuqcYKjeKdC0lCJgS82bp7bTqQNI40hojw3Ist1Oqt%2BPx%2F7wHx7j2rv5rGyO2SnXWk6BapjgwOENb25GPOzOiv%2Fp076eK7EHSdJBt0UEWIxmJqzFc6cfhm4IIV%2BzUy42W8FO2Qqv%2FgX9y0c3r3Zmnal&X-Amz-Signature=8ded9dae0c21c3617d2398da4f031fda41e835ed17cf7fb30f730b02a77fccc4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCD2OYU%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOXbqNBr3rGD1WGbns9u52sU2G4SpMV2lahHQIvQIvpAiEAvCjIECWst1AaQ4m1rN9TnZNtSSLJCOepAFwYMf9LLeUqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8qkG0qmzNJoOLScircA6GFbrB52dbWlOT9DPNCuW1y%2BgLzDX%2BuEBBb8sWQPQtqt98iSdwCZemAr7MDzzheUE7bmeh4rN%2BrEBKw41u23C7C2aNgqAQJAJOwWF%2BdDteoE%2BZ5CTNCZY9gj%2F5Ot9SbuC7l5vVlCOdByxwsiPPQk3q%2BXdFGS%2F8v5LC%2FZGaqMOT5KHX3q%2Bpmn5vSkCtRssaoWPw6ZOxbgGLipZrvk8ji%2BUmAVMJQ6QL27p9hqdxHSGPDqfbqbodRwxWK1lGATRFK6xm6VOMaHv95%2FaV%2BLfCHNTjdASSK1ZA2C515ODfRvxUvDoKNC7cpnTYcVlh6pWNGOm8tnlAioRT9C7C%2By9T7M1uvPmem2TnQVAv%2Fn%2ByfSzaGvScx9x1LBNgpdPJvXD8Kv4a2BnImLw0RWeh1RYMq7avJ1sqmX8cU%2FHdqKF%2Bh4BunNr9UlbRTD1VAxHBVFS77ZIe9VJjIHVMST9nv7Cg2L4PHZGAWM5t2dXA4qQKLaSYRFE1D58M6WZRe2GefKv8p5hDOlca3mnYolO7HVbgtWNF1CzWNZ2QIFdDhFGECg2UeyOg0hI2q2k5UPrlhq%2FiAPg%2F%2BvwpXiJsKmoCQCdAQIP7SClOUNkU6ni7m%2Bg3DMTSjWJ%2Fta7gHRBKVnXOPMPmNib8GOqUB%2BMOML9LNrmDd4YD1gGdD04MZDfe2l3NbjEiPwVJa5AkaSqMaYd3p7z59Qn%2B%2BS%2BtK1vrtK3W3faMwwhYhiP5h99OA3P6n%2FMUK0cybarmf4i5M9hyDLSOUMJGiXnLquqsocF%2BvOkZDK8DWgySB7WemZkdckyLGzAr4wCwip0Ra8dFK%2Bik0RiOXxQaXoEXBhIjsZAqYLjuHu40BPeCZsJOrWWTumfg%2B&X-Amz-Signature=6c666652f03c3ae402cd43f1938867161b85f51862456912aa5f369871af013b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDNOITZQ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK3MiYlj9Fi2pp0nLAQ7afh9jvjnCQVgadz7KFsKP4NQIhANHjHyrmy1i4oYqoaUhRApyqPxEO6qNSGDsOzP5o9dIHKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcOnOmjUqfAtx1e%2B0q3APXmrZBxI5MoARJo4YPjyUZUVSI%2FCwnoIkvjdokIEur3iUH0NAFj4SCST9UwT56ZJBJMa6tdviVQqOPDznJE68843xxCqhAr3zbH5eVX1prNnJK5UHaVugMmnWLh7e92q3EJeKBAAtjKmedSavGl7qGUC5g%2Fg%2BAFcqRkd876BIPZ2%2BfniF2q7Ad6t%2BytRRgcK%2B8JJ7b7nNvnJ%2FpOtX4U6bKlHXYsMehPK%2FKqyJSxzZ2MwTAIdPs6bzT6OqkeSYSpXZS5SNMOX4IPp8GCD6CJy%2Fhmbyxwt5scUCFRMYfH1T5AUWkzsr%2Br5dP2WbmXTLTgh3%2FaBECTBczB3RVa8UCepMNKIHyYa7jYsrExGRDID8En9KPeVkWrRAmiSKbHqA%2BbzXgOHeBJAyQIHEThG2CnpgHt1wAJlWsOd9Eg9EGy6ahyxZ1ELxFnlVUTskL4N29K8Fy2siQJEWw8L9nw3Oy8%2FFbdGBPVkMzLWVg7yqfsL5FnyZx0%2Fa5IB4q2ghmoC5svCNa21EX7Ci9uaSbAutZ4WtXAurhQawk4ctiZxOMTQrGPVkQHAdVlWYSPpFQAtBIZBMZLpbSQwXIku3EzG2eSIoKvDExOk30mx9sZqUqw1FKa5ro%2BGdvtPm9qTLHizC3jom%2FBjqkAcrKumJ4j46zhLmxp6pNM4pjsfk08mmYlWexB4Yl36rZk7Zb3Z%2BAxAnPl6dHNxDFo0%2FmuITfRamyWVkc%2FO8oOFWx0r4AyI8ehpsTrj2iUpmH5fdjvGZYAsCntUfj%2Fjweqhcrr9l%2Ftz6zaUxOh%2BQH6Me7AAN3SC%2B6syUnpnwIkkoJXfinalCLQ5eoYa8bNqRTBFIAyG3%2BBTpELEJAfVx0CIMFlf2B&X-Amz-Signature=053ea78598cb0e63ee164fe3e9c252ad92aea10bff5eaf4afcecfb16ae114f31&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SJVE443%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmNOyTcR653eOqiO%2BCRQ0p0L9wZFcsDv7j3EwWBFmvEAIgTdehDgNH0U62tgS24CyxoN6wUPCHpF7fOMDF1oPkMEEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATKshHa6wt8q%2FFH0yrcA5Qap4xOtZLCL0vk4GeCAPKnPDmK2Ch%2BtpGKKAXOKdbOEL%2BmSNzIDMyVnyVMTgkMEp2SGUoLE7wHqDqLP5GUFKPpm1cKhhwChRCNuW27V0aU2tRvA%2Fe%2BZ%2F%2BPK7eXNgFBiN7zKk8p7aGCgUhBlWrUl2uE%2Bh2ZkjKnb8LpveHkB6IqGS5aKs58aYaViIMIJR9YeksfZcywBhCqD8jnsarOfsEEbI3iu4YIRx%2BbYwTj58NjzTUXHomYQPXX1b0GkLlm8AtbRUc08qnCgcLiGR5ahO9ALXlMHWT3jTLaBwNUdU4SnPguZ9iG%2BGNUs3PBqH2OFZBkiwFGDEv9v5CpIzLof4kKUYI4U7CBIaTm3%2BsIe%2BJg50E%2FshHIXuzhJE0NzpMnIlv3ImdD7lDqGvliJMVnLrg3lHVOCIBxG%2BBO0JmN5QA6YYlZu6U5KqWvkA3nJhZzKeK%2FEYUqHLnzXs9qBSHJSnfMQ9xRbR9ICE18MyOuvXMAV2n0ACjeIsen7Zotg4yZBJloi2rdwWCGSYc0FuM6PV7SH9ELOzAg%2FSIUQ8k5o9dQBu3%2FtyFFxwyptGuQ8mep02qKq3t62jBi16e0KWGCHkDeUort%2BohD%2F4bGsOOxDkVctxxClkf9U2ccwhteMLaOib8GOqUBq4ljX2q996OBZIkL14pKLGhxp%2B9aVHXH9YmR9QTt0WLv7EylDKwMBAPWcoW6NqCZJn8%2B%2ByuqcYKjeKdC0lCJgS82bp7bTqQNI40hojw3Ist1Oqt%2BPx%2F7wHx7j2rv5rGyO2SnXWk6BapjgwOENb25GPOzOiv%2Fp076eK7EHSdJBt0UEWIxmJqzFc6cfhm4IIV%2BzUy42W8FO2Qqv%2FgX9y0c3r3Zmnal&X-Amz-Signature=1b289ae1a93d276a4285b5c61c81ef4925ab98c2b6a2e1ace44e91af3156f8c7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
