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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S46JEKBO%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDTTyul8l6MaNXH%2FOL0twb9fJm14dcDM73CNdmnwWG8eAIhAOvh3fMLfv0zRsvYgcwE9wsFCnzysTxUTFNL9qbMzxlFKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNG0rE9ddZhgAqyooq3AOq8IIsOjLv2JEV%2BSOrKV%2FXZmOaIaOSpn5H18%2Fido3tUDn2Junea4utNBvtBucnWunt5%2BRXpBo8qaaY%2Bny0huc%2BqmyVlRbuiYVoRqxEV1hZmvi9zn25TKWGSk71eTCFNP004fN8Mx%2Bio0imJeVYBg6hzQlspdEoPNHrOvICb0VuAocpjJzqVF7lwncriTpRqvHw4uOBT3qUBcYQW4qgG8VRmGlX5WHdOhCqOYdZX4ElNtjzejkgQ5q5vQM82Us0QzEIaWummRA0OzxsVmyx4OzcNwX1eWn3j0gugZyJ5pf9UzWMQiXZzxMLD9%2FQwv8CihWCN1klGd5pjlNqfVX28b7%2BWUbXasIpMZxz3R0OsZnZhASAaJWLE0v7UykwVirIk%2B6M6QOmIdR4H0eXG0ts9rzGxck9STlKgJCRcszg2MD5oHEBCrRaZKo7JNZnaVruvvVjTPnhtVdCnufFP8yFL34AHpPOq1epXM9dPHLnQLkI8J%2Fx4BsC4K%2BkamSCmKNPiR7eJo%2BA4v66mpE%2Fwu4aXzeef0XHF%2FHLibbkPl6eeErb79gS%2FaAOGOv6ly37aQse8MLUU6TpWYT6DJMKc4ccvkeaC4Isy%2Ba09EPV2Z7k4PbwQbhXIoBHZ0Z%2FY4fSFTCggIzLBjqkAZuPbg5PVWWn%2F2FqU8N9CAkq5EbMrH9mfgL27TeZlJCMnXxaA45hIz56kWxwHAX%2FeNs%2FgvgI%2BMpnjaZV2vMWxWYI1aRAsCY%2B4S%2BoTNRHQ%2BRY7fA94kQWOLVmqIs2dKT4QXEOTndqSQoozCdTvJ11c7793Gyce2GRibF7%2BQ3KUE2T439VokkyF0DIMz0AyHW6qosVX%2FDIBYCLR3kWjdUegyQySdCH&X-Amz-Signature=f64d90d40a88f6111a53d11c3e84b6ae6890eb9349c737a3f59e21b6315fc4db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S46JEKBO%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDTTyul8l6MaNXH%2FOL0twb9fJm14dcDM73CNdmnwWG8eAIhAOvh3fMLfv0zRsvYgcwE9wsFCnzysTxUTFNL9qbMzxlFKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNG0rE9ddZhgAqyooq3AOq8IIsOjLv2JEV%2BSOrKV%2FXZmOaIaOSpn5H18%2Fido3tUDn2Junea4utNBvtBucnWunt5%2BRXpBo8qaaY%2Bny0huc%2BqmyVlRbuiYVoRqxEV1hZmvi9zn25TKWGSk71eTCFNP004fN8Mx%2Bio0imJeVYBg6hzQlspdEoPNHrOvICb0VuAocpjJzqVF7lwncriTpRqvHw4uOBT3qUBcYQW4qgG8VRmGlX5WHdOhCqOYdZX4ElNtjzejkgQ5q5vQM82Us0QzEIaWummRA0OzxsVmyx4OzcNwX1eWn3j0gugZyJ5pf9UzWMQiXZzxMLD9%2FQwv8CihWCN1klGd5pjlNqfVX28b7%2BWUbXasIpMZxz3R0OsZnZhASAaJWLE0v7UykwVirIk%2B6M6QOmIdR4H0eXG0ts9rzGxck9STlKgJCRcszg2MD5oHEBCrRaZKo7JNZnaVruvvVjTPnhtVdCnufFP8yFL34AHpPOq1epXM9dPHLnQLkI8J%2Fx4BsC4K%2BkamSCmKNPiR7eJo%2BA4v66mpE%2Fwu4aXzeef0XHF%2FHLibbkPl6eeErb79gS%2FaAOGOv6ly37aQse8MLUU6TpWYT6DJMKc4ccvkeaC4Isy%2Ba09EPV2Z7k4PbwQbhXIoBHZ0Z%2FY4fSFTCggIzLBjqkAZuPbg5PVWWn%2F2FqU8N9CAkq5EbMrH9mfgL27TeZlJCMnXxaA45hIz56kWxwHAX%2FeNs%2FgvgI%2BMpnjaZV2vMWxWYI1aRAsCY%2B4S%2BoTNRHQ%2BRY7fA94kQWOLVmqIs2dKT4QXEOTndqSQoozCdTvJ11c7793Gyce2GRibF7%2BQ3KUE2T439VokkyF0DIMz0AyHW6qosVX%2FDIBYCLR3kWjdUegyQySdCH&X-Amz-Signature=8fb48f74929e3db4ee512c9f50d660784cac6ea7460aaff6bcb9c9804378ad3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S46JEKBO%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDTTyul8l6MaNXH%2FOL0twb9fJm14dcDM73CNdmnwWG8eAIhAOvh3fMLfv0zRsvYgcwE9wsFCnzysTxUTFNL9qbMzxlFKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNG0rE9ddZhgAqyooq3AOq8IIsOjLv2JEV%2BSOrKV%2FXZmOaIaOSpn5H18%2Fido3tUDn2Junea4utNBvtBucnWunt5%2BRXpBo8qaaY%2Bny0huc%2BqmyVlRbuiYVoRqxEV1hZmvi9zn25TKWGSk71eTCFNP004fN8Mx%2Bio0imJeVYBg6hzQlspdEoPNHrOvICb0VuAocpjJzqVF7lwncriTpRqvHw4uOBT3qUBcYQW4qgG8VRmGlX5WHdOhCqOYdZX4ElNtjzejkgQ5q5vQM82Us0QzEIaWummRA0OzxsVmyx4OzcNwX1eWn3j0gugZyJ5pf9UzWMQiXZzxMLD9%2FQwv8CihWCN1klGd5pjlNqfVX28b7%2BWUbXasIpMZxz3R0OsZnZhASAaJWLE0v7UykwVirIk%2B6M6QOmIdR4H0eXG0ts9rzGxck9STlKgJCRcszg2MD5oHEBCrRaZKo7JNZnaVruvvVjTPnhtVdCnufFP8yFL34AHpPOq1epXM9dPHLnQLkI8J%2Fx4BsC4K%2BkamSCmKNPiR7eJo%2BA4v66mpE%2Fwu4aXzeef0XHF%2FHLibbkPl6eeErb79gS%2FaAOGOv6ly37aQse8MLUU6TpWYT6DJMKc4ccvkeaC4Isy%2Ba09EPV2Z7k4PbwQbhXIoBHZ0Z%2FY4fSFTCggIzLBjqkAZuPbg5PVWWn%2F2FqU8N9CAkq5EbMrH9mfgL27TeZlJCMnXxaA45hIz56kWxwHAX%2FeNs%2FgvgI%2BMpnjaZV2vMWxWYI1aRAsCY%2B4S%2BoTNRHQ%2BRY7fA94kQWOLVmqIs2dKT4QXEOTndqSQoozCdTvJ11c7793Gyce2GRibF7%2BQ3KUE2T439VokkyF0DIMz0AyHW6qosVX%2FDIBYCLR3kWjdUegyQySdCH&X-Amz-Signature=a3098dbaae789e435d2b87744d33fe30c6b5bcafb3a9e421f315e90bda21a8d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPR2X46N%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIEKy06EIGC8b2XbxpMhNmK3Ud7gOH2yuh4era5aIvBuzAiEA7mhCPhiuxPaWPLNDD%2Br7s6Pgl5%2Fp804dl9tevEWKVcoqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDESO7QpjMDWgB5HWbyrcAzh0wNxK42TJKlvooUDxCQ9kw%2FLW9nVsRLiDB4DUFWcxmQJW6rNCzvXETK0uWRUJ0bumpjuIbIPslGZtONc1qRCWzePSsxsG%2FCxTLUKs%2BwYmhTJmhjLD62kq7svrtreNC69ZiyjIgvhretCI0MP7AiGRXOQBlizn5nV7JRBwPl0luccY4ZQVzV1QmrlL5yayU7Z5x3cjPojE1ha9gXibDAzCdr2o4o6HgAWq91LoTYNqvYQsYzbVQC%2Bp%2BVJUOz%2BtE%2Fmn4CY1KuMvwLPmAFl9tANcHYcD08iMZxOdRFVivANSzsJMPW%2FL00zohzRdUKGcKtQK9ZdPAEwtRIS%2FVIWdFXhEekZFYeyb9L1x4QUIDRF6h7EfhfkoK7IJqqjcixxELzEggD5Xu9INrJJbJ1rQgowveGJ%2FrNE36KwSL%2Fo8YUzkGI2EJ3%2FlkmuITZVHNNGiv0tfHzMdTw9BnOBDuJriNTnzUVdisTdsuBHKBWIsbqa6keCrInjE%2FXfp08XbIZ%2BuO%2Fa2X89bDzWXOjozTDHUq8r56EqWaek%2FkWmMMVD2LyLbdOBurNJk5SX0WacCl8xhu8IpcDhRcs6aWOOG1B2K6NHIJVpHjRzORsccqRemlk%2Be%2BeIjDnIByZ3Zd%2B6hMP2DjMsGOqUB3tKJ%2FOf8UUHOQm0VMPGbtWWFB6aTZim0lyxdQil%2BIlLSYXxl01iD0m68cEFXijc0X9u2TY5%2BYALRUyQNDcEQ%2BjoMoYh9Cq1d8uHrtAnXODVF3QgD5chsH1Kbb6bnccQ7j5%2Fnh7RCRgytlGL7BjaiL21dF0TU7WUQ5RL%2BD6HqCL5H4HFukUqv0xYKxXeYgM8aeQCP%2FHJEpHy53xitbo3wJO7l8hb%2F&X-Amz-Signature=84bcd784af0394b0a817246057804e4de81b049e0f3099ad3585fba0f5101726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCDVLP63%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDM33gqrKJtCfGZYhwwvD%2FI%2BXTrLwxaowT2egOqWShocgIhAJ21vCPs9VM6KM8wqSTYVNttn7Lfd0wHPVSAlIY4qdI7KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwle1iTOZRhlWqrzSgq3APaYCuswEdiGWkzBUOxOwC5RaN%2FzdocVKMwjEFEdu2dEoZUudRlLxSewExZKDqGYuv8eE7EYgRkEGfu8U4s7pgQK1RwaglbXUcP%2FtpuHOTfCscap%2BzE0xRxp9L4UKtEPiNkmlqufoJp0ptVCd4N5QyuvfDVNUMZOYf3tGVZf54xshwwJvoxa2Boi7MDaR2MbsRi%2FOdUxI1tVCEEbglmcmrAFMGipnFV3dC9KFaU0ooKhY8xJJuqHENssrTEHsLpj468%2BDjSKZJ5D8QDesjqa2YWiIZU9R%2BJoTvAZ%2BA%2BIpGujvSGPJ%2BFz8aiGtv9s6PN3VV1h8XrBJjFRmxNef8d3fE65Upn35V0Fs5%2BVxh3jPeKItt51PJWqxAjnQYFIpc1YQo7BiRerCQEHNW%2BFq90KpywD58NkUPxU1gBKA%2BDLy92IerY89OknYJfBkbVOndsc8DbuogF1Hohad47O5rZPA2%2F1yql9l30JexMdKh%2BHbC1JLw1GLwoMxx3Bs%2FaHTn4FJUyAGbopKpcdyF5whkYfM5iKBfI%2BGiXHHmgJjifGohl2XoXr12gMjC8tYr1%2BpJ%2Bvy0WrLAsdp43bncYpL11yIR3H7EPthnbP%2FncG7nGHzc6itboDEvhR9hbLL%2B5TDD4%2BYvLBjqkAWFdvX47VI8XbfLWr5Jkov%2FczpgueFXQmBM395Dv9yEp1FBinCClT3DHiNjEUxMXSIZaGx3CHYNskeo8tjCcgThLNu2caFwU0ma3SDAgmAIbnk2bYi7yW1grFNsTFqAYLUtKVg1jpkF2yjLWfCJlsKln0wKcsn2U1KBkhuvCFfhA4PIFc8v3XVdhpStqeMSMQ2XQ1WMrL98p%2BO4bkVKih8%2Fbhzra&X-Amz-Signature=77ac521ee1921b527a098ff19c90a0883e0ab841370f48d871b556528b3c0754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S46JEKBO%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDTTyul8l6MaNXH%2FOL0twb9fJm14dcDM73CNdmnwWG8eAIhAOvh3fMLfv0zRsvYgcwE9wsFCnzysTxUTFNL9qbMzxlFKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNG0rE9ddZhgAqyooq3AOq8IIsOjLv2JEV%2BSOrKV%2FXZmOaIaOSpn5H18%2Fido3tUDn2Junea4utNBvtBucnWunt5%2BRXpBo8qaaY%2Bny0huc%2BqmyVlRbuiYVoRqxEV1hZmvi9zn25TKWGSk71eTCFNP004fN8Mx%2Bio0imJeVYBg6hzQlspdEoPNHrOvICb0VuAocpjJzqVF7lwncriTpRqvHw4uOBT3qUBcYQW4qgG8VRmGlX5WHdOhCqOYdZX4ElNtjzejkgQ5q5vQM82Us0QzEIaWummRA0OzxsVmyx4OzcNwX1eWn3j0gugZyJ5pf9UzWMQiXZzxMLD9%2FQwv8CihWCN1klGd5pjlNqfVX28b7%2BWUbXasIpMZxz3R0OsZnZhASAaJWLE0v7UykwVirIk%2B6M6QOmIdR4H0eXG0ts9rzGxck9STlKgJCRcszg2MD5oHEBCrRaZKo7JNZnaVruvvVjTPnhtVdCnufFP8yFL34AHpPOq1epXM9dPHLnQLkI8J%2Fx4BsC4K%2BkamSCmKNPiR7eJo%2BA4v66mpE%2Fwu4aXzeef0XHF%2FHLibbkPl6eeErb79gS%2FaAOGOv6ly37aQse8MLUU6TpWYT6DJMKc4ccvkeaC4Isy%2Ba09EPV2Z7k4PbwQbhXIoBHZ0Z%2FY4fSFTCggIzLBjqkAZuPbg5PVWWn%2F2FqU8N9CAkq5EbMrH9mfgL27TeZlJCMnXxaA45hIz56kWxwHAX%2FeNs%2FgvgI%2BMpnjaZV2vMWxWYI1aRAsCY%2B4S%2BoTNRHQ%2BRY7fA94kQWOLVmqIs2dKT4QXEOTndqSQoozCdTvJ11c7793Gyce2GRibF7%2BQ3KUE2T439VokkyF0DIMz0AyHW6qosVX%2FDIBYCLR3kWjdUegyQySdCH&X-Amz-Signature=4ff368300f9b1fa0bc388691d77629f764ff7a6cbd1902fce772f971e40c65b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
