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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VABOLCLX%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFDVjkrt5b9HDIcKAG9Je8QO79nmBqDFU%2Fls%2BmRHd0t%2FAiBiLVWuBwtooy2k9fm2vK94G16YeKCHgQ6gk7t2Z7YEFyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUm7aRSahAiWz4D5vKtwD8kXB9uGOnK%2BznN88DR839B%2FJT%2BIA21pLwMih4Onc12bR1DrhMxdwXgHlZLaLj%2FTSgJvz%2BGFGdlLMLbQDR5T5L0S%2BWPTdaQW%2Bv9MEifEM3xpUDA608GtF%2FHRo9%2F1IGIEoOlNUw4CVhHhuQL%2BVn0BEivX1LN320swQrvXPR53u885DnbzD2s7XeRXebQnEoGeovR47D5vIZ8hnxyoJGS10YSwyRlbnoqPuEl0rnFie6upKL5Hu7BwNqk%2Bu3KYSiPTHfBZatTkQM%2F6SndbahPXjByupKZ0w19DMr0XFyPpxgNHJ5EoQ3hqhs3%2Fe9bY8qR%2Boc4CszXJQKnUJu%2BS7Ugc99NRTn6iG%2Bdb%2F%2FU3pjpkg%2FNvKJt3VUe0QkB0a9HTPzxJxB3bfgNUyLUUHMcVuG%2B9hA4Bu2VSzU0pGMI4fB7cYAXIxHhOFGBjRwaff4kKjU81zYWIJA4lo5aPTZLmUixNuKSir0HcdMHYtP5WrGgJyiIOdFpxlDviUza1n5%2BVC0TLEcpmSQ53wH9GWIhw1wq9DkYYFTx93UjeszS8ixppfdy04ypTTLc3VEDbz6ne1cntTB2%2B9Vjh2RPAY61hEGpS9lWfTwZqO7iR%2BJFzpYEd%2BAyecPW8DADPFMtEq%2FiIw1qihxwY6pgGGTJFDNQIo4SKZUu1iWEtwiI2YPMqc2RymO3vXpWXumU73YFPgiPP2QHvKn0UBK94f%2BcJQFvBmnssYJQm5OzDb1E5NdTqAF%2BHHKNcpFeWyXK5NRzbM7wq6BkUR0f3oQ6142vWVYksa%2BIfDKb7VuDuCp67xM4s0iK4rCrkE%2FUcQezUTYPVTkUCqMDV9HjYQygD%2B0QFDJwbcu6xHurMcnw36GuJE6C58&X-Amz-Signature=d87d7661ba4c857d3193d6b592f2a1a879a341e4cf08ac8e307b0daa4ff25cf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VABOLCLX%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFDVjkrt5b9HDIcKAG9Je8QO79nmBqDFU%2Fls%2BmRHd0t%2FAiBiLVWuBwtooy2k9fm2vK94G16YeKCHgQ6gk7t2Z7YEFyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUm7aRSahAiWz4D5vKtwD8kXB9uGOnK%2BznN88DR839B%2FJT%2BIA21pLwMih4Onc12bR1DrhMxdwXgHlZLaLj%2FTSgJvz%2BGFGdlLMLbQDR5T5L0S%2BWPTdaQW%2Bv9MEifEM3xpUDA608GtF%2FHRo9%2F1IGIEoOlNUw4CVhHhuQL%2BVn0BEivX1LN320swQrvXPR53u885DnbzD2s7XeRXebQnEoGeovR47D5vIZ8hnxyoJGS10YSwyRlbnoqPuEl0rnFie6upKL5Hu7BwNqk%2Bu3KYSiPTHfBZatTkQM%2F6SndbahPXjByupKZ0w19DMr0XFyPpxgNHJ5EoQ3hqhs3%2Fe9bY8qR%2Boc4CszXJQKnUJu%2BS7Ugc99NRTn6iG%2Bdb%2F%2FU3pjpkg%2FNvKJt3VUe0QkB0a9HTPzxJxB3bfgNUyLUUHMcVuG%2B9hA4Bu2VSzU0pGMI4fB7cYAXIxHhOFGBjRwaff4kKjU81zYWIJA4lo5aPTZLmUixNuKSir0HcdMHYtP5WrGgJyiIOdFpxlDviUza1n5%2BVC0TLEcpmSQ53wH9GWIhw1wq9DkYYFTx93UjeszS8ixppfdy04ypTTLc3VEDbz6ne1cntTB2%2B9Vjh2RPAY61hEGpS9lWfTwZqO7iR%2BJFzpYEd%2BAyecPW8DADPFMtEq%2FiIw1qihxwY6pgGGTJFDNQIo4SKZUu1iWEtwiI2YPMqc2RymO3vXpWXumU73YFPgiPP2QHvKn0UBK94f%2BcJQFvBmnssYJQm5OzDb1E5NdTqAF%2BHHKNcpFeWyXK5NRzbM7wq6BkUR0f3oQ6142vWVYksa%2BIfDKb7VuDuCp67xM4s0iK4rCrkE%2FUcQezUTYPVTkUCqMDV9HjYQygD%2B0QFDJwbcu6xHurMcnw36GuJE6C58&X-Amz-Signature=9575bc2ea254f5e0f0f5c88fa847f0f4d918cb62b387aee834fc7c872cd5d0d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VABOLCLX%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFDVjkrt5b9HDIcKAG9Je8QO79nmBqDFU%2Fls%2BmRHd0t%2FAiBiLVWuBwtooy2k9fm2vK94G16YeKCHgQ6gk7t2Z7YEFyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUm7aRSahAiWz4D5vKtwD8kXB9uGOnK%2BznN88DR839B%2FJT%2BIA21pLwMih4Onc12bR1DrhMxdwXgHlZLaLj%2FTSgJvz%2BGFGdlLMLbQDR5T5L0S%2BWPTdaQW%2Bv9MEifEM3xpUDA608GtF%2FHRo9%2F1IGIEoOlNUw4CVhHhuQL%2BVn0BEivX1LN320swQrvXPR53u885DnbzD2s7XeRXebQnEoGeovR47D5vIZ8hnxyoJGS10YSwyRlbnoqPuEl0rnFie6upKL5Hu7BwNqk%2Bu3KYSiPTHfBZatTkQM%2F6SndbahPXjByupKZ0w19DMr0XFyPpxgNHJ5EoQ3hqhs3%2Fe9bY8qR%2Boc4CszXJQKnUJu%2BS7Ugc99NRTn6iG%2Bdb%2F%2FU3pjpkg%2FNvKJt3VUe0QkB0a9HTPzxJxB3bfgNUyLUUHMcVuG%2B9hA4Bu2VSzU0pGMI4fB7cYAXIxHhOFGBjRwaff4kKjU81zYWIJA4lo5aPTZLmUixNuKSir0HcdMHYtP5WrGgJyiIOdFpxlDviUza1n5%2BVC0TLEcpmSQ53wH9GWIhw1wq9DkYYFTx93UjeszS8ixppfdy04ypTTLc3VEDbz6ne1cntTB2%2B9Vjh2RPAY61hEGpS9lWfTwZqO7iR%2BJFzpYEd%2BAyecPW8DADPFMtEq%2FiIw1qihxwY6pgGGTJFDNQIo4SKZUu1iWEtwiI2YPMqc2RymO3vXpWXumU73YFPgiPP2QHvKn0UBK94f%2BcJQFvBmnssYJQm5OzDb1E5NdTqAF%2BHHKNcpFeWyXK5NRzbM7wq6BkUR0f3oQ6142vWVYksa%2BIfDKb7VuDuCp67xM4s0iK4rCrkE%2FUcQezUTYPVTkUCqMDV9HjYQygD%2B0QFDJwbcu6xHurMcnw36GuJE6C58&X-Amz-Signature=da19e3ead8f4ca00a0ac519a06d845c0c6f9aabed4c5a26d34fcb187f30d4b8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OS4S2PB%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIG1ATcj60qtz3qfGXAldkj1iKTiiW4faivUscAunrEa4AiBR5dNT0%2BvkAUCfnMURwVvc6vbIPW0H8HF3VGm3YoxoOiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5XcXTqUoC2sXKR1FKtwDlcs3NMHrI8oB0kXtIP760u%2Bk6TM3ukncSlbA22bWkzKxLLdYJFXRwOu4GIN1bDZFKTSMsPlSBxjox1kJCl2d2YK%2FCeqvm2rFlRmoOL5UvuLI3yE76emAk0xearwSpfOJ1F58qm50BPQ%2F8e5xaJ7%2BXfHaTsNStVzmZf%2BVuCTlmdXGQ05foBranUOBiTn01fWAvPhlbsnSj8lgELQ06tlrJtksmUgQYvrCj6bXjiY25AxDrh6gvxLJ5B%2FhgkMslPiW096gPLd4NMBhZh%2F0VgM%2BFuaD23ro9SS7YpFb6pKrCInYkLFM2sHphn%2FW9nIg6nPq33BwtH3pvdBXiY9tp87nEkb2ZhYYqZrH%2Fju0uxYxuUukk9KcD%2BNMEufH16GRZc89P3f%2BhpNYU7oVnsy3REGIqwmQ97GXO8wfvEfIDCjWcIbf6xG3fhVY0oxsE5uH%2BUwFVaeRI8PFlcQewNQrd3CtFqrt8vVzBR%2FtWrwLmqgMRxaz46iX1YwGXADowOxBvNKln7CqHjMuCQEAnzkCsIShg0mXsxQaSaOgH7IOwQtsk5m%2BrD%2BB4%2FWr2GQJmrzAn6j0yX3pmeP3hrTjq8%2BB%2FBUU7ygPGP4yJ570ccQpJAqEOxc8WuhCM089reR0SEYw6KihxwY6pgEzenS8bI3RwQAEafnQe0WE0jZ5rG%2FpnsGSP3wpUxr4Fy0bsVBoO8Y1eEtpZcD0FCSxQr4bVwx0SCqDiZMmcqbduIsn0r%2FpRQRaCwYPmD0JmV4K%2BdgS%2FvFVK2nR%2BZADB7tUJC3TM3WploMcMrhf8h9J2daPykzGoLRmSyI2wj50Mg%2B7p8N7mwENTvPIlke87agnLJZvQ%2BL%2FMmIn2aJz5D6sxJD3ETty&X-Amz-Signature=0d6170a5dd8a2959b373604162f024079a9b0d5ad1a6e6c9ac54e73441c15726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KBGWPX%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCTiHd0yXBITyMYMVbX3wGpV5bZzWXvEqMEpmqS08tmowIhAJmYchdvjqZjuJIOS7LJyqynRqYXxbbEHnNwD1Y05AAXKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8lZ2RdxoD2r304Pcq3AMR8dYafwPA6CIxfuKwJT48nEovvaN8cRAxnFsAxy7Ep2%2FUpG6GDKpTch1jXxNZqWmkqJQuhzyH08DSVXQIHvG5bnla8fCGX4AujB0RBoMPw3bEgmFkmC3nV4Fb0SKYlNGEgiqeBnLaTl8QbPNEd8%2Bo9MvhW%2BVjWM69ofmPZNufofRNxJeDqLNqczgvYKdoF3PTlbCY8lejklCoaU7vNTtkKRW7rs4zj9bograNAwSUZY1S0VK9HPYkcn7%2Bwm99Mv25tYwcaKzTWR0dIHVuJZ0OuAY5%2BjbUVcKXR1K7a7m7dFHrLyaPWn%2FUOqH3hAv1IorzFmNyYUaRidYZ752Zgpml2QUgACIBRv7%2BXu0QCuqV93GXQrBje%2B8TH3rU1xsCEcAmaAO7TpbNsWJP6rB%2Bg5gc9DjJU9pf%2FIoX%2B2OE3Btydgbe5d%2BShew%2BCx3nidEpBPjalyMIIyw0S3pZV7cM3MhyKsCcOdr2jg1ghFmRo7eDFAwXmK2nGLJ4cT6XIM1PS7OL3YFh7vrmJ5dp%2BrQblim%2FP1cWUNEgZY8L5SgCXhu8t5BgIq17PZQKysR6hDl9YO4Lk14cBDPUyxl4HnAl4kAl6tzWfohgjiYNxvQWvIUyLXwxND2R8oVVi4gEUzCRqaHHBjqkAbtVEJpvuJYXLoJDVjcg8HgOvlX6wiIVdxn0RRHhmlSCRCPLqpg39tlpqH6jXWeWQSCt%2B3qye9wNUQ1QTrMz35rTnQ0uAbm0tPzLx%2BZL0jAEywVZFtV57Y8C7pBBff6W5kePdvNvamENK0l%2Bl%2BgscPDGhAs3x6tAtltWEtRUvsNnFw7Ec7LfR%2Brpv%2BaaI2ktjin3BE8UWVL0qKEayeyvW4%2FalTEy&X-Amz-Signature=679720d29bc57360389c4a85c8559f7f57dc89feaed357511fbd6576a20ea71f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VABOLCLX%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFDVjkrt5b9HDIcKAG9Je8QO79nmBqDFU%2Fls%2BmRHd0t%2FAiBiLVWuBwtooy2k9fm2vK94G16YeKCHgQ6gk7t2Z7YEFyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUm7aRSahAiWz4D5vKtwD8kXB9uGOnK%2BznN88DR839B%2FJT%2BIA21pLwMih4Onc12bR1DrhMxdwXgHlZLaLj%2FTSgJvz%2BGFGdlLMLbQDR5T5L0S%2BWPTdaQW%2Bv9MEifEM3xpUDA608GtF%2FHRo9%2F1IGIEoOlNUw4CVhHhuQL%2BVn0BEivX1LN320swQrvXPR53u885DnbzD2s7XeRXebQnEoGeovR47D5vIZ8hnxyoJGS10YSwyRlbnoqPuEl0rnFie6upKL5Hu7BwNqk%2Bu3KYSiPTHfBZatTkQM%2F6SndbahPXjByupKZ0w19DMr0XFyPpxgNHJ5EoQ3hqhs3%2Fe9bY8qR%2Boc4CszXJQKnUJu%2BS7Ugc99NRTn6iG%2Bdb%2F%2FU3pjpkg%2FNvKJt3VUe0QkB0a9HTPzxJxB3bfgNUyLUUHMcVuG%2B9hA4Bu2VSzU0pGMI4fB7cYAXIxHhOFGBjRwaff4kKjU81zYWIJA4lo5aPTZLmUixNuKSir0HcdMHYtP5WrGgJyiIOdFpxlDviUza1n5%2BVC0TLEcpmSQ53wH9GWIhw1wq9DkYYFTx93UjeszS8ixppfdy04ypTTLc3VEDbz6ne1cntTB2%2B9Vjh2RPAY61hEGpS9lWfTwZqO7iR%2BJFzpYEd%2BAyecPW8DADPFMtEq%2FiIw1qihxwY6pgGGTJFDNQIo4SKZUu1iWEtwiI2YPMqc2RymO3vXpWXumU73YFPgiPP2QHvKn0UBK94f%2BcJQFvBmnssYJQm5OzDb1E5NdTqAF%2BHHKNcpFeWyXK5NRzbM7wq6BkUR0f3oQ6142vWVYksa%2BIfDKb7VuDuCp67xM4s0iK4rCrkE%2FUcQezUTYPVTkUCqMDV9HjYQygD%2B0QFDJwbcu6xHurMcnw36GuJE6C58&X-Amz-Signature=a8a8b18d8f8226fb35ba7e84794c2c9deb388aa0b744a3a1b84c267a994c45d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
