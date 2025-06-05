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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ORZRQSO%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIAN0AfzKAy6Qz2ocfMn06%2Bk0rLNeaylfbryWuukAgpe8AiEAuncHCiNWQz9GK%2F87JytcdP9rmPunWqAwpvUMvanazzEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDBOWnT%2B7f3mCzmmM6CrcA1ftEIqnhlsbHNcwkY99R0IVx3SL6cd2JmF6GN5U1%2B8kac8HoA%2BFqn4VMGuV1NRoObRCi6RvA4G6GWJwPrMCf6HeHmqUK4MAyOJg0OMSGMLUlbFCIYr4vK3SilvunGQNj3d2ceQO9wMbb6NP8hVYgv6ZLzrATjW78jQZIhEvtC6csZTiwWsRGdUpOlk%2FTngsYUM6QYHFUUllWjDZtyQL5MstugRMQV6Av0AqomR0vbOKJ6kUuHxDK%2Bh5DWQ4yWwNRW%2Bve2gK%2FNIS%2FkRhbout0V2qTnlrToyqNfkJD6QvuDxL%2BRlnRiSHXb4OcjGwKom86CVwQVYd6bOTT%2FkmZGOQch6FVmPyE49q6S%2BzJ3oWvMCVh%2Fpz6xB%2BwsBad4oxGL%2FLurUZJvLLl4pC7r%2FPCKYBjJvQg8pTof7cbK7l2xDIekuyyCF95zoB%2FUh13yPFQ%2F7QBerm61gKhXoTvsW%2FnZI55U7u7RLiVMFiLm9v0pVazK44Cb1sNLxn3odorkGpGLiGPBrL9TrWuYECOVVUHG8BG0eFjRbYTsVXBjg590JNW%2FWe5XG3ESi1Bqp8kTE5Y%2FUbhKF6Rh7iEOx16FNXGG2U1a9jJkCxMJQPukLrWxUVlBtOOE2zxk4shEfJrPEjMIuNhsIGOqUBMH9YhQRJw6yjv0tACcIckIJtbl0bpX42Y7k9gTb2ohpVmG9SFpf%2Fk68kuUDFKZF2kUFGpsN45lwLOpirBgYDvQtSdWnA5%2FM6dn7uJRl4QUGVRm2ohGIp%2BQLfflxnUcerJdVkFtgyLP%2BYQwVbSBIZjM%2F4xzCrpXMQMS1Jb1mXcLvQC4FaRLbv9eolsl3u2Ld5NGjGfy7MCkbSFnTKRpJe0t3%2BjGaT&X-Amz-Signature=9b8638c54d44e0ade8d2b51bad4d7f377b3b5997afb467b7902d5c6cd3adfd95&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ORZRQSO%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIAN0AfzKAy6Qz2ocfMn06%2Bk0rLNeaylfbryWuukAgpe8AiEAuncHCiNWQz9GK%2F87JytcdP9rmPunWqAwpvUMvanazzEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDBOWnT%2B7f3mCzmmM6CrcA1ftEIqnhlsbHNcwkY99R0IVx3SL6cd2JmF6GN5U1%2B8kac8HoA%2BFqn4VMGuV1NRoObRCi6RvA4G6GWJwPrMCf6HeHmqUK4MAyOJg0OMSGMLUlbFCIYr4vK3SilvunGQNj3d2ceQO9wMbb6NP8hVYgv6ZLzrATjW78jQZIhEvtC6csZTiwWsRGdUpOlk%2FTngsYUM6QYHFUUllWjDZtyQL5MstugRMQV6Av0AqomR0vbOKJ6kUuHxDK%2Bh5DWQ4yWwNRW%2Bve2gK%2FNIS%2FkRhbout0V2qTnlrToyqNfkJD6QvuDxL%2BRlnRiSHXb4OcjGwKom86CVwQVYd6bOTT%2FkmZGOQch6FVmPyE49q6S%2BzJ3oWvMCVh%2Fpz6xB%2BwsBad4oxGL%2FLurUZJvLLl4pC7r%2FPCKYBjJvQg8pTof7cbK7l2xDIekuyyCF95zoB%2FUh13yPFQ%2F7QBerm61gKhXoTvsW%2FnZI55U7u7RLiVMFiLm9v0pVazK44Cb1sNLxn3odorkGpGLiGPBrL9TrWuYECOVVUHG8BG0eFjRbYTsVXBjg590JNW%2FWe5XG3ESi1Bqp8kTE5Y%2FUbhKF6Rh7iEOx16FNXGG2U1a9jJkCxMJQPukLrWxUVlBtOOE2zxk4shEfJrPEjMIuNhsIGOqUBMH9YhQRJw6yjv0tACcIckIJtbl0bpX42Y7k9gTb2ohpVmG9SFpf%2Fk68kuUDFKZF2kUFGpsN45lwLOpirBgYDvQtSdWnA5%2FM6dn7uJRl4QUGVRm2ohGIp%2BQLfflxnUcerJdVkFtgyLP%2BYQwVbSBIZjM%2F4xzCrpXMQMS1Jb1mXcLvQC4FaRLbv9eolsl3u2Ld5NGjGfy7MCkbSFnTKRpJe0t3%2BjGaT&X-Amz-Signature=7486b7a7749aa6d02b8c269358bd79d5bec42920aed300841199ec200f3e1276&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ORZRQSO%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIAN0AfzKAy6Qz2ocfMn06%2Bk0rLNeaylfbryWuukAgpe8AiEAuncHCiNWQz9GK%2F87JytcdP9rmPunWqAwpvUMvanazzEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDBOWnT%2B7f3mCzmmM6CrcA1ftEIqnhlsbHNcwkY99R0IVx3SL6cd2JmF6GN5U1%2B8kac8HoA%2BFqn4VMGuV1NRoObRCi6RvA4G6GWJwPrMCf6HeHmqUK4MAyOJg0OMSGMLUlbFCIYr4vK3SilvunGQNj3d2ceQO9wMbb6NP8hVYgv6ZLzrATjW78jQZIhEvtC6csZTiwWsRGdUpOlk%2FTngsYUM6QYHFUUllWjDZtyQL5MstugRMQV6Av0AqomR0vbOKJ6kUuHxDK%2Bh5DWQ4yWwNRW%2Bve2gK%2FNIS%2FkRhbout0V2qTnlrToyqNfkJD6QvuDxL%2BRlnRiSHXb4OcjGwKom86CVwQVYd6bOTT%2FkmZGOQch6FVmPyE49q6S%2BzJ3oWvMCVh%2Fpz6xB%2BwsBad4oxGL%2FLurUZJvLLl4pC7r%2FPCKYBjJvQg8pTof7cbK7l2xDIekuyyCF95zoB%2FUh13yPFQ%2F7QBerm61gKhXoTvsW%2FnZI55U7u7RLiVMFiLm9v0pVazK44Cb1sNLxn3odorkGpGLiGPBrL9TrWuYECOVVUHG8BG0eFjRbYTsVXBjg590JNW%2FWe5XG3ESi1Bqp8kTE5Y%2FUbhKF6Rh7iEOx16FNXGG2U1a9jJkCxMJQPukLrWxUVlBtOOE2zxk4shEfJrPEjMIuNhsIGOqUBMH9YhQRJw6yjv0tACcIckIJtbl0bpX42Y7k9gTb2ohpVmG9SFpf%2Fk68kuUDFKZF2kUFGpsN45lwLOpirBgYDvQtSdWnA5%2FM6dn7uJRl4QUGVRm2ohGIp%2BQLfflxnUcerJdVkFtgyLP%2BYQwVbSBIZjM%2F4xzCrpXMQMS1Jb1mXcLvQC4FaRLbv9eolsl3u2Ld5NGjGfy7MCkbSFnTKRpJe0t3%2BjGaT&X-Amz-Signature=7b2497555d6798e790de0b58a9de6c612a469184971b6976dd67d451c368af5f&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7A6ULKK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIEwtauXGTkdZJqyYZ5Jc8PtkpkcO%2FAyhZL7TolZm1sxMAiEAnQ1zESULE0Z24wXdjesUfOAk4uhkbCxXCYdu3KHdkN0q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDAnIAE6SIlal3ZyK9SrcA3vR4coQIDENEc8jfTcEBOifmQmW97isg36VhbVAwnyGrLkY2tTZr1Au6q8E1GYTgb5Zjx2unDR5q9hbvI5IDicWnCdHiOXnsu6gdi2mo5pXZd5h6nsWSayneOrDOBMK0%2BhJyowNUGy5Fo158a%2F1Ve7TAbEZffoL08FcwimrlfXKBxzUv9ZeQlICZipsz1kNPKVM7fAGMHwaqKGICHnQZILkkQ1BeTqZcn8BrKD3G83XowUe7RDFd%2BjEguQeeOJC9MEY%2FrUEPlHINFNalLYWnWifEmb7rQSXzoFNL3voLL33CVSlMbkttKNMzGcjgdiEDSgivMXOmMOs9E6woTzyKiZG9clldwjXjZEl%2FixvTbYsrjOZVSadDwG1VJrqni2I7756xyuPtTgAWDtiWCUNnOqxxpyo4jxdoqHyKCeVYlPPF%2BY4UeZoNksztk6nzypvGKe0j02aQlk1zFjK%2Fbxg2Rc8C%2ByyBSdgBF63dLlP1coq0U1IocXPxpwthXG5wEJ1wklgP4vAQYyri1d1otX3gFTW7QmjXnI898ln4BbRvY6%2Fyd1XtbqjNV0hCZknFlL6seDqaOLVmvDwgr5x8qmUN9CvbBALOxK4q7UmzFCAX%2B5kMNFG82bx4bOmjldHMJKkhsIGOqUBvfpA8Y7mf%2BDBHwPZgqIrPUuIsSyHYQU4lsZnZmRKf8p3qAFK%2FFWbIEN%2BE61l6XjHNBryT4J8ghhSkLMNC0vdutYaLxrTEmsgAguhJhk0ZEI2U%2F0tcgeFpiZh5DfBYhP6rS4O%2B3fngbBhBSvpCfU%2FsP4djS8PfN7dnJkA%2FvjgIsibe6oMGmvyJ%2Bf2Te3mCurJQHjgBaRjfz946b5IPkiLVl%2BdIJkF&X-Amz-Signature=d58cc67681dd9e93e65be2f1dc1a85070c7e9e914b1412d1b305351bc1445f69&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVIIIF3A%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFjfONuO8wI%2F8k%2F1rjYRqFZH5%2FESV49Xbg61dNN%2FMM6FAiA8GHS9yFeimBaODjK6RkYkoQXgUDsTFRCDqsEqS3t91Cr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMYoMcyBSWlw1uQl8RKtwDdGF%2BBabmGGcjd4kludTiWWA8DWOs6WfMnefNIci%2Fpk3dUI0zooRE0eROLY6GWsBLNLIzMNAcXAZePveOhYmjGp%2B1oW%2FsyWoE64sF6e3X03uVKQ8o%2Fy6ALOvVutjjuwqzY%2FmmGFPM0QrQ%2Fe8yICkmwn7X%2BiQzOtR%2FaERudMbv8Dw9ddDIYMcmbRPUcHfG%2FeEOsx55%2BQyMN4D%2FipXp84V5Zc%2Ff3XQQvcdPyuIQzSA8TGz4smRPu3q%2BZ4FI%2BkAwlIlNN8sy0%2BiM8fSkYVBYF6SKlwH2EKCVTk8SSnQnVbq4P510epSiQzCti%2FGv9EEqYhRfTv8%2B4GlVGV%2BEU9U26amBCrmark07MjZ17TnpoqoFypGczss4db1Wii%2F6rkBpikOQysgFs4g9nggfRSJINOXxzCRY1HiufcLnMnc1u260umm3andFPq5l7%2FjHpQZc0EEro%2BZqVhlTD4RZ%2FuGFNzrT9tY0VlAcjPCOJwLp05MPsUTkN2BBD28BqmQN6LlvZjBmDpqwuS9C9mI%2FRxwb7G8vIlIUtsImQOeBJpe3I4hCy3S6Y29vcUhIrY93wZYY0rev30CvzxwStRydX%2FPjX8%2BYemjwUY%2BSpfbbBWQgJTeixapJPl1RcNQ6QZJsbjwwu6eGwgY6pgHooVQiLk%2FvzbCJxjyrIPX%2BBBk6M9KKp4GZhgIhIjvkNO%2FR7dZaX2bK57zrr2WERb1eDFCa9CQTGJmDEELwf6rzzRCpRHz4JFTu8jSqAX%2Ba%2Ba6%2BLTXfJykJReHnjiojVzua%2BvuBuOqIJ5L51Z%2Bo7cr9h3ZMnr%2Fi6LG7K2MkKEbtFPqI%2BnGPaKtjtNtvEP9Jwy5mQN1Hr739lKY8OR%2FzZI41LlPFAvXo&X-Amz-Signature=93347255a9a500a7331339fe4f8fdb25f6e7b22f8027fb011c69053ef8a9c2d8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ORZRQSO%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIAN0AfzKAy6Qz2ocfMn06%2Bk0rLNeaylfbryWuukAgpe8AiEAuncHCiNWQz9GK%2F87JytcdP9rmPunWqAwpvUMvanazzEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDBOWnT%2B7f3mCzmmM6CrcA1ftEIqnhlsbHNcwkY99R0IVx3SL6cd2JmF6GN5U1%2B8kac8HoA%2BFqn4VMGuV1NRoObRCi6RvA4G6GWJwPrMCf6HeHmqUK4MAyOJg0OMSGMLUlbFCIYr4vK3SilvunGQNj3d2ceQO9wMbb6NP8hVYgv6ZLzrATjW78jQZIhEvtC6csZTiwWsRGdUpOlk%2FTngsYUM6QYHFUUllWjDZtyQL5MstugRMQV6Av0AqomR0vbOKJ6kUuHxDK%2Bh5DWQ4yWwNRW%2Bve2gK%2FNIS%2FkRhbout0V2qTnlrToyqNfkJD6QvuDxL%2BRlnRiSHXb4OcjGwKom86CVwQVYd6bOTT%2FkmZGOQch6FVmPyE49q6S%2BzJ3oWvMCVh%2Fpz6xB%2BwsBad4oxGL%2FLurUZJvLLl4pC7r%2FPCKYBjJvQg8pTof7cbK7l2xDIekuyyCF95zoB%2FUh13yPFQ%2F7QBerm61gKhXoTvsW%2FnZI55U7u7RLiVMFiLm9v0pVazK44Cb1sNLxn3odorkGpGLiGPBrL9TrWuYECOVVUHG8BG0eFjRbYTsVXBjg590JNW%2FWe5XG3ESi1Bqp8kTE5Y%2FUbhKF6Rh7iEOx16FNXGG2U1a9jJkCxMJQPukLrWxUVlBtOOE2zxk4shEfJrPEjMIuNhsIGOqUBMH9YhQRJw6yjv0tACcIckIJtbl0bpX42Y7k9gTb2ohpVmG9SFpf%2Fk68kuUDFKZF2kUFGpsN45lwLOpirBgYDvQtSdWnA5%2FM6dn7uJRl4QUGVRm2ohGIp%2BQLfflxnUcerJdVkFtgyLP%2BYQwVbSBIZjM%2F4xzCrpXMQMS1Jb1mXcLvQC4FaRLbv9eolsl3u2Ld5NGjGfy7MCkbSFnTKRpJe0t3%2BjGaT&X-Amz-Signature=1313c6058fb57c950491811cc101f8fac8e044d2d91ebed5da78b3c9e85ce760&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
