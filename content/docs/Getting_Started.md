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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXEDTAON%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDamD%2FyOT31V%2FfvGSYRI%2FXs5MceGsudjuMydCp2x8J86gIhAPD07zerFsXK03SyjpsJ4HMHCMtuw%2BSVN74sNsqGYQiSKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAtfUtH41gz6%2B0kBMq3AMrqCYSy2hk3Fc2hb6l14r98RDOWdABOXg4w8WhuxDfUBVtezwtU57crmhEzpNYO7xNO9k90QlFHkJDRvIKIFirrpKS9%2BOiEfOihfBQCP1Xi4QFeTTlcSFhZauuxWxgdfT87V4FzRw06%2BjuSxgXAPdRQhRFFkyP9mHhfwuXlQSyMwJnLW8S6ntaxpIqa7fJQvHi70NOhj40T4YQnDcRIykbwgxQZ5N83xc%2F5PW7GJUhvLN6LVOhOThMuOR3PKM3MRtqUi8H66AZKHLxXX%2F7tu9nIpDlEvtUhpqZj7QXES3AINEnYbvMGCidhhgvaqJxVV3oyGnqsyunFaUk%2FMBJ2nCLOtJNU5RMAW7LOjo9U85xr19j9afSwMCaTsoEYwBc80Rg0iM5%2BJuFIlfgv5aG2pCWr7%2F0rwRcTkK5wohqrYr6pskb9iDu16aZY0FcsjsEqRbpSHhQf7S8kMq6Vswkq1rSL7%2BEoh%2BZhgIdwV9rPtOMwreunEA4F9c0QoP90fka6eKWuovyGw45qWAIpUI%2FxHxKggB%2Bku7WIHp%2Bg%2BVwONLs0t%2FVykOBdhtoxOJ3qfGP7MEwmynH4%2BIzzXkYr4ePC0v4MP5JmCeHiFSb%2F%2FFoD%2BAR7pgvDYjaHcZ8c9c1RDDQxrDBBjqkAUoNe2lMkVkkQoLvPhGYWkISi1HIdKo1L7jobsz7y5AfysPJp0yAlpNIIiBAmim8m7e6Ew3FeAxTOTKr0ZCRNW7GBTZmSM8K7NSj6IJAzdCoBZXOyNpbSLuUiWQbPFy1TFUQkNQJo2M4UEmmqv6DDBcJ7VuCT1MCMtzU87j4PNN1sGdGjQYNySGf%2FKfIycxALXFLIJljwwqfkFHKbcfQX0djXOsH&X-Amz-Signature=d8d160ca1a20876d4ef8d5e9809ceb2a116dda37584b5849ef878df0e8607d0b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXEDTAON%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDamD%2FyOT31V%2FfvGSYRI%2FXs5MceGsudjuMydCp2x8J86gIhAPD07zerFsXK03SyjpsJ4HMHCMtuw%2BSVN74sNsqGYQiSKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAtfUtH41gz6%2B0kBMq3AMrqCYSy2hk3Fc2hb6l14r98RDOWdABOXg4w8WhuxDfUBVtezwtU57crmhEzpNYO7xNO9k90QlFHkJDRvIKIFirrpKS9%2BOiEfOihfBQCP1Xi4QFeTTlcSFhZauuxWxgdfT87V4FzRw06%2BjuSxgXAPdRQhRFFkyP9mHhfwuXlQSyMwJnLW8S6ntaxpIqa7fJQvHi70NOhj40T4YQnDcRIykbwgxQZ5N83xc%2F5PW7GJUhvLN6LVOhOThMuOR3PKM3MRtqUi8H66AZKHLxXX%2F7tu9nIpDlEvtUhpqZj7QXES3AINEnYbvMGCidhhgvaqJxVV3oyGnqsyunFaUk%2FMBJ2nCLOtJNU5RMAW7LOjo9U85xr19j9afSwMCaTsoEYwBc80Rg0iM5%2BJuFIlfgv5aG2pCWr7%2F0rwRcTkK5wohqrYr6pskb9iDu16aZY0FcsjsEqRbpSHhQf7S8kMq6Vswkq1rSL7%2BEoh%2BZhgIdwV9rPtOMwreunEA4F9c0QoP90fka6eKWuovyGw45qWAIpUI%2FxHxKggB%2Bku7WIHp%2Bg%2BVwONLs0t%2FVykOBdhtoxOJ3qfGP7MEwmynH4%2BIzzXkYr4ePC0v4MP5JmCeHiFSb%2F%2FFoD%2BAR7pgvDYjaHcZ8c9c1RDDQxrDBBjqkAUoNe2lMkVkkQoLvPhGYWkISi1HIdKo1L7jobsz7y5AfysPJp0yAlpNIIiBAmim8m7e6Ew3FeAxTOTKr0ZCRNW7GBTZmSM8K7NSj6IJAzdCoBZXOyNpbSLuUiWQbPFy1TFUQkNQJo2M4UEmmqv6DDBcJ7VuCT1MCMtzU87j4PNN1sGdGjQYNySGf%2FKfIycxALXFLIJljwwqfkFHKbcfQX0djXOsH&X-Amz-Signature=9f626a87f19019d57efc07dbc9f4106ea0240ade94ce540f29320319c45a6da5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXEDTAON%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDamD%2FyOT31V%2FfvGSYRI%2FXs5MceGsudjuMydCp2x8J86gIhAPD07zerFsXK03SyjpsJ4HMHCMtuw%2BSVN74sNsqGYQiSKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAtfUtH41gz6%2B0kBMq3AMrqCYSy2hk3Fc2hb6l14r98RDOWdABOXg4w8WhuxDfUBVtezwtU57crmhEzpNYO7xNO9k90QlFHkJDRvIKIFirrpKS9%2BOiEfOihfBQCP1Xi4QFeTTlcSFhZauuxWxgdfT87V4FzRw06%2BjuSxgXAPdRQhRFFkyP9mHhfwuXlQSyMwJnLW8S6ntaxpIqa7fJQvHi70NOhj40T4YQnDcRIykbwgxQZ5N83xc%2F5PW7GJUhvLN6LVOhOThMuOR3PKM3MRtqUi8H66AZKHLxXX%2F7tu9nIpDlEvtUhpqZj7QXES3AINEnYbvMGCidhhgvaqJxVV3oyGnqsyunFaUk%2FMBJ2nCLOtJNU5RMAW7LOjo9U85xr19j9afSwMCaTsoEYwBc80Rg0iM5%2BJuFIlfgv5aG2pCWr7%2F0rwRcTkK5wohqrYr6pskb9iDu16aZY0FcsjsEqRbpSHhQf7S8kMq6Vswkq1rSL7%2BEoh%2BZhgIdwV9rPtOMwreunEA4F9c0QoP90fka6eKWuovyGw45qWAIpUI%2FxHxKggB%2Bku7WIHp%2Bg%2BVwONLs0t%2FVykOBdhtoxOJ3qfGP7MEwmynH4%2BIzzXkYr4ePC0v4MP5JmCeHiFSb%2F%2FFoD%2BAR7pgvDYjaHcZ8c9c1RDDQxrDBBjqkAUoNe2lMkVkkQoLvPhGYWkISi1HIdKo1L7jobsz7y5AfysPJp0yAlpNIIiBAmim8m7e6Ew3FeAxTOTKr0ZCRNW7GBTZmSM8K7NSj6IJAzdCoBZXOyNpbSLuUiWQbPFy1TFUQkNQJo2M4UEmmqv6DDBcJ7VuCT1MCMtzU87j4PNN1sGdGjQYNySGf%2FKfIycxALXFLIJljwwqfkFHKbcfQX0djXOsH&X-Amz-Signature=61f962c332655152c259b427aee5f8a187e6de3c0ee46f107f89be1051384f29&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HEFQGCD%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkvrWJxPJbRU9Lj3G58XBpTu5Oeol65HqiikHbg19DFAiEAm%2BYIKJyoaJYHze0k0CvUupr82ZuPNnuNiKV2A1XB59IqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIy5jFOQJHfHwPmy1SrcA2JTcii7qk%2BEmQksgZea4XoxnPU4Fhod%2BBnWc%2FPz6F9098NiMb4CK3M15Py64%2BN7BVr1NRjztc%2Bfc9GG%2Bee6AgQa0f%2BnyBTomCW%2FlFxHIn4eTw6CjFwwCCQALiM%2FlahOA45eQY7GVpNoRr7DrQJeejoW3LwdiRuZdMHJbKDmbTgKYhyG%2F88VQ6%2BauWh6qPASd%2FvqZwMQToXojudoh7UfqJP4bAKnXVWL7ENIxdf2vTqNDCLvkL%2B5YEpnSNOgLVQBScyYVZ34N8CWXn7eAI1aW2i8lGIJOPimLdEzqFuExm7xlrJ2HiEANL%2BIsbJ%2Bgzf3RVREfKIhAOtkAH4mZ8fUu%2FMXv4r6qT0qGhMQ0McxIkOIC3olLnHGoSSoXSsOXaDtVeEd63fJJwLq50%2FpiNiUTlygHFzCMKFHODRY0ltpGqT%2B%2BHGnC4D5%2B2HzDULlqfs5ADnsgLRA4%2BCC29b22iIv5K6vZD9D%2BxZkNp%2FA%2FUY7qYvpz8KYhvkgDFR4LYL09oFjBwgygifYcCAj8uc9GeDrD5uF7Taai9t7nEhhkxgbafXj4c6miHC6gmGHOKSN5cr2Oh01q7TfDJN%2FqIgQCjhfKu2lgxCNoBOR0SBrOWYbQhSIeluFlaOxLwpQr8trMKjGsMEGOqUBGa5COyVObjOp5Gv5tS08XUxxgXgQaQNmxHtx0Z9jVqIm4Zao7PFFi%2F1ZY8fgZpe0IDJVV4iRRQMmhXpa4WnW90rupeeXpShucjAXQybkjAG%2FvepNylkOvdKaIAwRLBXRpQ%2FHrNw9jgyLXGuSGD0b7L6H0wC7kX8gY3%2BzW0WASWDm7BjqcvBFWZCg5RX3cmUQVNDjUvJ0ce2T9WtV2hAUOoZUP6CY&X-Amz-Signature=506b174d7ddfd90442c746a42302841c69264de1c812805957ebc680176564ec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDAOLP4H%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB35x3JFfiOw9%2Bdumaeo1sDL1I8sk8pJX%2BoNzPIh1XQlAiEAj7E8%2FuidhIWR%2F6axBH8yAZd5jzZ7bk2FwOE%2Fi0LHuhwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyWiGulO4SptBi3LircA1zeP%2BeQcXFZYtZcPJB0aU3F8wienQtubzcziBTc%2FrGnbC9V6SoRIgO6uFB%2Foq9GYkyD3wUkDaGF%2BnkWOJ52WvaBw1Li%2FUrMDRymIZyGXPn9dR%2FItONMYFYG%2FqpZil9q7IWOBpGBzCBZ90r5brxD7FGGa2DeTzctkRAjwrf5NAFbdbf8xV5rHLYO1lKOmt%2FBxi9eOB2MQgFcGUQH99qeVhYLBVyCt3jkD9JbZoOS%2Fe0FN7OZ%2Bc0fSvDkdYlWZOYELjrMOfXV7qVKCkW84I6JN01HTTSCiSeQqx6%2BLLOnwdGvW2A7gcwd%2BAqKWg4xjn379OfUlJFcdtCN%2FIhRbMSDc7MpxuYyMEO8Oro5azdDDN8db5aQ7yC1URepC8r5rt%2FfggY2i1KxiHpuf1%2BJ678TKKOyBAMQaLz6uef12aH88YeFIZ5gCmj0ZH9o3koz7Co2Oye28Vf%2BkSUD03C9l3%2B9vQ9xpkMhYIMWcsMDEA7zVz3HVvPU3xiUYI5MLIAiM0EyXivbBbl6UX84Q%2FdxsvUH7ZTIrrqDAygmz52%2FwUv9limOHQtdyA4jTi%2FgddGHaT4kPndysiS2cC23CVpbqVmaQBTnN7xsstLOSfOVmTm2PcNCBcGIhk8pXuEgSxltMMfGsMEGOqUBR6eK%2B3JGBCmsVg0oQz8juwt4F3oi05hMtssdrYzqjO1LRpMjctZ%2FrKydAIpg7WNhasbOqsJUhExTyYvUCgWH2FcCvEXVXVXbMtAu6hJpXahRLQN9%2FNxuxn6Si5TPSnfyr3AbKlHQsYMTsPmmjUXCo5tZ%2FZGUg%2FbulXyLsFpyPzTGd9Pfhi0YT%2B0crURWtkEQ8aLhvo%2FDF%2BM3HsLN1sKjrR%2FA49Lm&X-Amz-Signature=60bf99168d0a5dc594dbc5d8aa826c06d20c31620b48350cd5d8e3da01c8fbe1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXEDTAON%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDamD%2FyOT31V%2FfvGSYRI%2FXs5MceGsudjuMydCp2x8J86gIhAPD07zerFsXK03SyjpsJ4HMHCMtuw%2BSVN74sNsqGYQiSKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAtfUtH41gz6%2B0kBMq3AMrqCYSy2hk3Fc2hb6l14r98RDOWdABOXg4w8WhuxDfUBVtezwtU57crmhEzpNYO7xNO9k90QlFHkJDRvIKIFirrpKS9%2BOiEfOihfBQCP1Xi4QFeTTlcSFhZauuxWxgdfT87V4FzRw06%2BjuSxgXAPdRQhRFFkyP9mHhfwuXlQSyMwJnLW8S6ntaxpIqa7fJQvHi70NOhj40T4YQnDcRIykbwgxQZ5N83xc%2F5PW7GJUhvLN6LVOhOThMuOR3PKM3MRtqUi8H66AZKHLxXX%2F7tu9nIpDlEvtUhpqZj7QXES3AINEnYbvMGCidhhgvaqJxVV3oyGnqsyunFaUk%2FMBJ2nCLOtJNU5RMAW7LOjo9U85xr19j9afSwMCaTsoEYwBc80Rg0iM5%2BJuFIlfgv5aG2pCWr7%2F0rwRcTkK5wohqrYr6pskb9iDu16aZY0FcsjsEqRbpSHhQf7S8kMq6Vswkq1rSL7%2BEoh%2BZhgIdwV9rPtOMwreunEA4F9c0QoP90fka6eKWuovyGw45qWAIpUI%2FxHxKggB%2Bku7WIHp%2Bg%2BVwONLs0t%2FVykOBdhtoxOJ3qfGP7MEwmynH4%2BIzzXkYr4ePC0v4MP5JmCeHiFSb%2F%2FFoD%2BAR7pgvDYjaHcZ8c9c1RDDQxrDBBjqkAUoNe2lMkVkkQoLvPhGYWkISi1HIdKo1L7jobsz7y5AfysPJp0yAlpNIIiBAmim8m7e6Ew3FeAxTOTKr0ZCRNW7GBTZmSM8K7NSj6IJAzdCoBZXOyNpbSLuUiWQbPFy1TFUQkNQJo2M4UEmmqv6DDBcJ7VuCT1MCMtzU87j4PNN1sGdGjQYNySGf%2FKfIycxALXFLIJljwwqfkFHKbcfQX0djXOsH&X-Amz-Signature=df5acfe0857f5735b7751e226177b69c4d522cbb24b33e08559e8f2e9fd3d3ee&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
