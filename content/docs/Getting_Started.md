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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDNLQWSK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCCcKmfzQt1UOFsH%2F15vF5PlYwcaP7U8iZ1NYJ4rwa8BQIhAOV%2FgO2jwxMkvcwj%2BaMxy84QAk5SsUEBoNsCk3K5%2FE%2FoKv8DCGwQABoMNjM3NDIzMTgzODA1IgyREk4PYokyO6AydLUq3ANPB%2BvYJV%2F12eXXSiyGm8ztBsIu2aRCgDmoS3sVJR4AAnqVJnpCHsu0AFQ%2F9n4O24M3q03UFJk3KM6BOWLqrdgPCOQ9A%2FXdogjX3fK%2F29Dc0CJowb2pKMHqDg8B7eUSybq3k1K2kRj8bFGiKIth7KI%2FDlJA4vrMvrN6jtAQkDsv6hDlawJLA8i1UQP9Fe%2BWVuEPNcC7OlObaW0bHBzDb9an8v60p7cMehQsNq8tIuzS5mraeRhvy5A3nTU4cUC2l0cfrEQngNAiUk19frG5R48SJw2NU%2Fzoy23DQimAWAO0gu6Qp2VrnR65swOioV9LbpgItqCPvgosOLzkDzrIhPwzZNW75XQU%2Fxm9t9HBa8QnbA3KqFdH6pkuTJDvuKN0Z0nHVyZ2pTqEuUjIO2SW1gYxv1qGGcOtJr8EcT9w5t7zzxC2pI9sxzGW%2BQskAYT0udywVdEFlu4laOnQaSDvYYRNL9JrHvd7RIv%2Bcs2A5FeK7THZxSRpVAkCDSeGscHArH499Mc3VWr6x0IrsVaAZivam9XrH9LiqaDMMl8lNdJcF4jtX4KEQX0wrgIJlxnLE%2B0I6pqESqhR9q6Z6QaZ0okBHvNjKm8foKMwzWfRGZS8eCWwCPSGwpEgqRPd4jCAysq9BjqkAZdEEp1NO6ezl9wltdxcNFMSKesanQTV%2F6w89FYtJwRz1Bf27m11Y5FTLFiQnpEG86DJDMqzok7Ite0kv%2BdRREp2Navm%2BJlWTzdOlr481B34civ4GydAvW%2BP8FGaOpBEl5Z7WCHe5BTtUFfsQa65V1Fsb9udzm36l7tZMiMlA%2FvhQ9U1lkgchGegSovt9Smq3ezBbi23PcmVcp9UnbwhhIfI37HM&X-Amz-Signature=294fc81ddef536800bbf57ae7587059875b9df0be6e2ed0410f6c22a151fbb8a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDNLQWSK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCCcKmfzQt1UOFsH%2F15vF5PlYwcaP7U8iZ1NYJ4rwa8BQIhAOV%2FgO2jwxMkvcwj%2BaMxy84QAk5SsUEBoNsCk3K5%2FE%2FoKv8DCGwQABoMNjM3NDIzMTgzODA1IgyREk4PYokyO6AydLUq3ANPB%2BvYJV%2F12eXXSiyGm8ztBsIu2aRCgDmoS3sVJR4AAnqVJnpCHsu0AFQ%2F9n4O24M3q03UFJk3KM6BOWLqrdgPCOQ9A%2FXdogjX3fK%2F29Dc0CJowb2pKMHqDg8B7eUSybq3k1K2kRj8bFGiKIth7KI%2FDlJA4vrMvrN6jtAQkDsv6hDlawJLA8i1UQP9Fe%2BWVuEPNcC7OlObaW0bHBzDb9an8v60p7cMehQsNq8tIuzS5mraeRhvy5A3nTU4cUC2l0cfrEQngNAiUk19frG5R48SJw2NU%2Fzoy23DQimAWAO0gu6Qp2VrnR65swOioV9LbpgItqCPvgosOLzkDzrIhPwzZNW75XQU%2Fxm9t9HBa8QnbA3KqFdH6pkuTJDvuKN0Z0nHVyZ2pTqEuUjIO2SW1gYxv1qGGcOtJr8EcT9w5t7zzxC2pI9sxzGW%2BQskAYT0udywVdEFlu4laOnQaSDvYYRNL9JrHvd7RIv%2Bcs2A5FeK7THZxSRpVAkCDSeGscHArH499Mc3VWr6x0IrsVaAZivam9XrH9LiqaDMMl8lNdJcF4jtX4KEQX0wrgIJlxnLE%2B0I6pqESqhR9q6Z6QaZ0okBHvNjKm8foKMwzWfRGZS8eCWwCPSGwpEgqRPd4jCAysq9BjqkAZdEEp1NO6ezl9wltdxcNFMSKesanQTV%2F6w89FYtJwRz1Bf27m11Y5FTLFiQnpEG86DJDMqzok7Ite0kv%2BdRREp2Navm%2BJlWTzdOlr481B34civ4GydAvW%2BP8FGaOpBEl5Z7WCHe5BTtUFfsQa65V1Fsb9udzm36l7tZMiMlA%2FvhQ9U1lkgchGegSovt9Smq3ezBbi23PcmVcp9UnbwhhIfI37HM&X-Amz-Signature=4acbc791eb8ff356be3fd3eeec0743894f4385d14c28f661f079ea6a92cf04f8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DK23MZQ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDOKjvoUEdFlmoL6m%2BQoWMJGdIQt%2Fq%2Fml%2FdzXzF96%2F6%2BQIgfC%2BFbzFdTMbcAli8wjqgt442L4cW6sDAXdTAttRUTg0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDG0DfaL%2BdFsIVncM%2FircAx6guZ6A0VaUMOIBm0s%2FHrAcxsIo7DqcWUIBZyU2cAo09qH2aWLaJ7KUIUfbYA4zanztZn0fOEVQJB7y0tjNMq4HhcYsW3UMhhwhdXejWaPKa6W%2Bl6bqP68kMWnrjqUVM57FrjCYC1y%2FlcSF235d4eYmtAQ4Fteo8mB7P%2FMQE1H5PDxxzBvtvgCIIFBMB02zOOoCjOFSCG5QO92669iEzQvDU6eXCL8Wyzjao4%2FtKalmAJt8IHoMpZZW4OYYlIDSywAqzHqdCv0vJyt%2FPlp4M7GYMp4jKYeNA4El0O6ozamjvvGJuGXYlwo2PsRWZIgR6nymiLTzCOo7dMWL%2FkBEOtNpqHH4rMHf8U5F2wQXODwyrxmJSdF4s0r4bf%2FyVWzBmEJyZublRjfkkZBFxfBTkTjZy355VLyjFqtH45P97V%2FUkeh8TaXAvvxeOEW9FNi3kk2%2BTfVUkMO4DkSypMFECxwglVl6oiA0KfJpXnq3hJYr47rAUV2KnFshPOf2JV4Xk4Q3W7%2FYMDdfwLEUoMJj3jCEEJ0aRIKSEbUfZLDiPFjhR1vbY6rp%2BZdohaKHeq9EkU7Uusn7Rped8jX5o0ruBg31uQzF15XZNrOI1RZJauqMfSM55Ctsg2kgr6moMIrKyr0GOqUB9F9mcTB66MOgC6Oo5IwhlVGMXj5ahcQ1LQ4by96s6ZQfX5%2FIwE6uM0Jq%2BV1ve8ZXA4UlMhtTeAZDJQdT%2BUglwivAKeYXgoNXGPQWttaR6Xpj5ngBtkNdk0YsYkidp3Qy%2FC%2FrOz4BdCWKAGpQfTKUfQyUwKi0jQYhl3yvOMvubCbwXjkbpqWQHMw6GA2leSTuLzL9Vn9YRopUIZziY4PVosvqzobw&X-Amz-Signature=e500dabac757b88c3621bc4d9b0d564d7e7362de25c648d0100d83275f93e5f0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMRSAS2S%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIFG2%2FyfF0NXiIgn7hir6n%2BDb5kYamEUKedQ6AZmqmkfkAiEAkT4eemdKzTrXJM69pj2r9hUvN2yX5s6Ydsw4VLGq1Osq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMCztCf7tux04OItWircA3MydNLLe6zxZH54ZaNW%2BiqBIPnlSuHnZgnSXCGSFLOxOivx8GEtd7GKMWu4%2B4XcDEurJj8pbg7oNABcr0pUTJlFQYs6qVphrevRcD%2F2non%2FmhT0adiyfiMQK5UvCNTPBdafCbj6oitMg0yQGBHE09v%2FJS52LLp6hnrP8ApBCLlGcAqfSDf7D57bXGVpB7HXjUI0yFJyx9IhGG9CM3bm0RBB%2FdqMKgchnc%2B56hXeql1nMLTwe2j9Du%2FhqFj9HrfQ%2FomYzXd1E2b9ZWnMkhbkh9icwh1S3qfVTcr6omnzRq2GMSs92vm08o9LBvCZvjjYPlX%2FXyxy0PFlqgu3xeAiKaJ7Os3ibJmSETvw2dxsPbjo8%2BReGbpPE%2F6L4Y%2B2ZooHxc2T8PepOFA8RedfSYP12xx95NV2rdUXOx%2BHsaLWZJ2Oj1f7hsAiULYw1VhNO3cBjF1znk4eEjedig%2FFKHs0Wj2uRP8JpTSHtlL4IXnK3FxWYDjEJUO6WtBm0rZZZ7TVoeybLy%2F8iiIvK9iUovtw5NqXHy0RVPhqmtEn7GO2hhdvY9vc81FHAnJklq%2FcYr7%2BKSvVzgTrgz79Rx1OMkU%2Br72CnKj0pb%2FQhFY4%2FwA0Ty34s3R4k29gGbvB3fT5MJbKyr0GOqUBCyOC6L9CQ6%2FvENVovaQY%2Bh1Ne9c1pO57tWqqquM657oeIrwbhiZv2%2FrVwQwoGhoVvaNO757L7KWpLlVyrF%2BGkHKwDjRG4gUkDOup7QQfP8w4L40eMMXFVcWKGCj3LYQmjdY7iY%2FbizURck2lzSmtnupY7q%2BML7rPnBBCZTog0tNjHsG01v%2F8KdbGgmHZAcXl6TFgnaVLrtUznd1T4y1PvhIgO0HB&X-Amz-Signature=a94323c6f805d3ed4ff9aa73265401ed66af3227c8efce61cb41058eabf8d94e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDNLQWSK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCCcKmfzQt1UOFsH%2F15vF5PlYwcaP7U8iZ1NYJ4rwa8BQIhAOV%2FgO2jwxMkvcwj%2BaMxy84QAk5SsUEBoNsCk3K5%2FE%2FoKv8DCGwQABoMNjM3NDIzMTgzODA1IgyREk4PYokyO6AydLUq3ANPB%2BvYJV%2F12eXXSiyGm8ztBsIu2aRCgDmoS3sVJR4AAnqVJnpCHsu0AFQ%2F9n4O24M3q03UFJk3KM6BOWLqrdgPCOQ9A%2FXdogjX3fK%2F29Dc0CJowb2pKMHqDg8B7eUSybq3k1K2kRj8bFGiKIth7KI%2FDlJA4vrMvrN6jtAQkDsv6hDlawJLA8i1UQP9Fe%2BWVuEPNcC7OlObaW0bHBzDb9an8v60p7cMehQsNq8tIuzS5mraeRhvy5A3nTU4cUC2l0cfrEQngNAiUk19frG5R48SJw2NU%2Fzoy23DQimAWAO0gu6Qp2VrnR65swOioV9LbpgItqCPvgosOLzkDzrIhPwzZNW75XQU%2Fxm9t9HBa8QnbA3KqFdH6pkuTJDvuKN0Z0nHVyZ2pTqEuUjIO2SW1gYxv1qGGcOtJr8EcT9w5t7zzxC2pI9sxzGW%2BQskAYT0udywVdEFlu4laOnQaSDvYYRNL9JrHvd7RIv%2Bcs2A5FeK7THZxSRpVAkCDSeGscHArH499Mc3VWr6x0IrsVaAZivam9XrH9LiqaDMMl8lNdJcF4jtX4KEQX0wrgIJlxnLE%2B0I6pqESqhR9q6Z6QaZ0okBHvNjKm8foKMwzWfRGZS8eCWwCPSGwpEgqRPd4jCAysq9BjqkAZdEEp1NO6ezl9wltdxcNFMSKesanQTV%2F6w89FYtJwRz1Bf27m11Y5FTLFiQnpEG86DJDMqzok7Ite0kv%2BdRREp2Navm%2BJlWTzdOlr481B34civ4GydAvW%2BP8FGaOpBEl5Z7WCHe5BTtUFfsQa65V1Fsb9udzm36l7tZMiMlA%2FvhQ9U1lkgchGegSovt9Smq3ezBbi23PcmVcp9UnbwhhIfI37HM&X-Amz-Signature=c5f79c74c7b989ccaa82a6ae6b22847ee83287cd60e39f894313439e0ebe84d4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
