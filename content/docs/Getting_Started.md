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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZNLGNC7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDt%2BDzrqGv%2FDHUbTBm3cHjHyHyDDGOchn6aYfgNDg5rewIhAN3dwP7SBMt79luZgCVd5WD5QDBQWLDRw2cCDGpBizyJKv8DCC0QABoMNjM3NDIzMTgzODA1IgxKrHbb4WotP%2Bdwe9Mq3AMD1UBhbrTGvMXOEgZxQ7Tb9rb5sNh4CVdI6fzU6nzRO%2Bgwm33vsam9cIkzSfzGAbxypokkGMRlUYQzdbzqPoQ5j5aLIWfnT8%2BObZkE0lQF0b1MSVayZWCjQ9y0LM2XAaUEkxaGDE7etExj71%2B5fjkeXAavQmP6pPK9FTMndi4HdPuGaKNpaZ4Ot9uMfdLp7KvYUgR60P0AQR57rpznSSd1Vslsaf0wUURH43coBKSg5VzCxhWIMDeV7wQwgi5h2%2FHmwPtRq9gNmxyspo%2BfQjs%2Fju19Huc7ADiUXfQ2O8lBCmvN7JfRSHGpq9pfhMTvt1jT0Nl0LZjgnXrVrCHGlh0uiaeXMHtplKvx9Ui83E2%2Fubk1X2%2BODDFi8bB8mZ%2B2K2rPnYvS78RYXG8RG5iAvpIQgeXSJfvTHV%2BL6ofJCnX9FF7UTcXuRyegZda4BztWQDIBst1Onb6ctoZ%2FVN7RkE%2FB%2Fv77rCd5qqC0ZVQcjRJG5qrVqLRLfGeyIjDL42rrOGWma2prFvYzi9YL7DsxvrloFCoyv%2Bc18efwOnD6QUi%2Fu7Lo%2BJ32izY3X3QI1O4JbscLw%2Fi0XV%2F%2FeMxHfJuH%2BBQ4uTDDonVLIhmOpLNA13ObOjaSxMbTWxqxVl87hDCNwbXCBjqkAfXcF%2BV6vwyCNpA%2B8FG9ZPRNgOjRVN0imWyTimWCVePpG7rZDw%2FxiACZQ6avNQHdNsGRB1X8F46gt9Fw48%2BR0CBZVuJqLlIzT%2BZL8fewVklyFdoWizn8cvD42I64E4KIOpalaDe%2FTqQNkM81IDADAy4pJLr7GHUsg1pm4ls05qBnytwlXjMc9jwYjp5izogsrF%2BPiEBTRrqhf8B63XfNHh%2BPJYiL&X-Amz-Signature=2ae25ac3a923f54f912e1f7cf3e7bc574a29ea69e653c5deec7da5905e32b019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZNLGNC7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDt%2BDzrqGv%2FDHUbTBm3cHjHyHyDDGOchn6aYfgNDg5rewIhAN3dwP7SBMt79luZgCVd5WD5QDBQWLDRw2cCDGpBizyJKv8DCC0QABoMNjM3NDIzMTgzODA1IgxKrHbb4WotP%2Bdwe9Mq3AMD1UBhbrTGvMXOEgZxQ7Tb9rb5sNh4CVdI6fzU6nzRO%2Bgwm33vsam9cIkzSfzGAbxypokkGMRlUYQzdbzqPoQ5j5aLIWfnT8%2BObZkE0lQF0b1MSVayZWCjQ9y0LM2XAaUEkxaGDE7etExj71%2B5fjkeXAavQmP6pPK9FTMndi4HdPuGaKNpaZ4Ot9uMfdLp7KvYUgR60P0AQR57rpznSSd1Vslsaf0wUURH43coBKSg5VzCxhWIMDeV7wQwgi5h2%2FHmwPtRq9gNmxyspo%2BfQjs%2Fju19Huc7ADiUXfQ2O8lBCmvN7JfRSHGpq9pfhMTvt1jT0Nl0LZjgnXrVrCHGlh0uiaeXMHtplKvx9Ui83E2%2Fubk1X2%2BODDFi8bB8mZ%2B2K2rPnYvS78RYXG8RG5iAvpIQgeXSJfvTHV%2BL6ofJCnX9FF7UTcXuRyegZda4BztWQDIBst1Onb6ctoZ%2FVN7RkE%2FB%2Fv77rCd5qqC0ZVQcjRJG5qrVqLRLfGeyIjDL42rrOGWma2prFvYzi9YL7DsxvrloFCoyv%2Bc18efwOnD6QUi%2Fu7Lo%2BJ32izY3X3QI1O4JbscLw%2Fi0XV%2F%2FeMxHfJuH%2BBQ4uTDDonVLIhmOpLNA13ObOjaSxMbTWxqxVl87hDCNwbXCBjqkAfXcF%2BV6vwyCNpA%2B8FG9ZPRNgOjRVN0imWyTimWCVePpG7rZDw%2FxiACZQ6avNQHdNsGRB1X8F46gt9Fw48%2BR0CBZVuJqLlIzT%2BZL8fewVklyFdoWizn8cvD42I64E4KIOpalaDe%2FTqQNkM81IDADAy4pJLr7GHUsg1pm4ls05qBnytwlXjMc9jwYjp5izogsrF%2BPiEBTRrqhf8B63XfNHh%2BPJYiL&X-Amz-Signature=e7f61c2757519a7d3153880d13a036cfc7c8699d07b0c96a87d3b49b3c49811b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZNLGNC7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDt%2BDzrqGv%2FDHUbTBm3cHjHyHyDDGOchn6aYfgNDg5rewIhAN3dwP7SBMt79luZgCVd5WD5QDBQWLDRw2cCDGpBizyJKv8DCC0QABoMNjM3NDIzMTgzODA1IgxKrHbb4WotP%2Bdwe9Mq3AMD1UBhbrTGvMXOEgZxQ7Tb9rb5sNh4CVdI6fzU6nzRO%2Bgwm33vsam9cIkzSfzGAbxypokkGMRlUYQzdbzqPoQ5j5aLIWfnT8%2BObZkE0lQF0b1MSVayZWCjQ9y0LM2XAaUEkxaGDE7etExj71%2B5fjkeXAavQmP6pPK9FTMndi4HdPuGaKNpaZ4Ot9uMfdLp7KvYUgR60P0AQR57rpznSSd1Vslsaf0wUURH43coBKSg5VzCxhWIMDeV7wQwgi5h2%2FHmwPtRq9gNmxyspo%2BfQjs%2Fju19Huc7ADiUXfQ2O8lBCmvN7JfRSHGpq9pfhMTvt1jT0Nl0LZjgnXrVrCHGlh0uiaeXMHtplKvx9Ui83E2%2Fubk1X2%2BODDFi8bB8mZ%2B2K2rPnYvS78RYXG8RG5iAvpIQgeXSJfvTHV%2BL6ofJCnX9FF7UTcXuRyegZda4BztWQDIBst1Onb6ctoZ%2FVN7RkE%2FB%2Fv77rCd5qqC0ZVQcjRJG5qrVqLRLfGeyIjDL42rrOGWma2prFvYzi9YL7DsxvrloFCoyv%2Bc18efwOnD6QUi%2Fu7Lo%2BJ32izY3X3QI1O4JbscLw%2Fi0XV%2F%2FeMxHfJuH%2BBQ4uTDDonVLIhmOpLNA13ObOjaSxMbTWxqxVl87hDCNwbXCBjqkAfXcF%2BV6vwyCNpA%2B8FG9ZPRNgOjRVN0imWyTimWCVePpG7rZDw%2FxiACZQ6avNQHdNsGRB1X8F46gt9Fw48%2BR0CBZVuJqLlIzT%2BZL8fewVklyFdoWizn8cvD42I64E4KIOpalaDe%2FTqQNkM81IDADAy4pJLr7GHUsg1pm4ls05qBnytwlXjMc9jwYjp5izogsrF%2BPiEBTRrqhf8B63XfNHh%2BPJYiL&X-Amz-Signature=cb8f407ac05c37d1d0804e870ae92f9b908d4e06b0a2be8752309a9069db8c67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T6VKVUH%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCa5r0RigOrBJlDbqJOnMIifRPd44ytc7MpcA2YALSzTQIgRfbo3U6ORNgTneC48qU79M%2Bt48s8yUH10MD6u2ZKprIq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKQH41EHf%2B6o5SxrxSrcAwqSOAn%2FQ14sXAm9lyMADMfaR4C8HQn5d3nw1X0xzM7tB4NmgwLM3E012N7zHPRqur9%2B%2BJwWi2Era63mcMTj57%2BUHWbKIGn7%2B%2FH3hP7aeEYPFYG7aKLItdY6Z%2FOnD2WFpCYVEajBRIyt2a9ibuYTEgHyu59%2F54GU5YPv%2BmjpVHjmQHEZjHt8PRP1RfP4F48pokoxtQ%2FOtD5N7PRMOOY6eQ4CVhxQICIuwnq29xGbcY%2BONkQUBHqp2GUkjEA2AWlKqqOHyai9gVIU%2FjxNnom7dj7BQQH2%2FdpTvdwj%2Fui7WI1hhopcsmH%2Fw4Qcen3yne%2Bq2r4miaYqq1%2BFBR1Mn3dBNK4zhSukg5GdkSMo3zlDubSvGhTPt8E9Uqb1WjBUA009B0a83raZXGwMvlGnVCdTp32hFCA5sIfMcubIv5oZjWR4v79DqBW%2Blw0AGE1Bhy1Bx3RJJJ%2BCUd5UP3vpEQxj8QUrsvyUoeoYZrmnCuJinQb5DNK5q0B6MprwS3hfrczCD1vKWNK%2BmTaIkQSLiWKjPtD0PJPGuJz7N746b91CiRoOWbcPULr4d6WDIkOUvBFyJhx%2FJNVs%2Bn%2ByKFQPHmXm%2FME6%2BiqTj0k%2Fyd3yv%2FmWk%2BJOAIbctPlb2GlK2POBMNHBtcIGOqUBWqzCV66z3k%2B2FPQx8UJmMZy84fRnViG2Cc%2F4C4anoazmUYRfRq7myKue%2BZPIv3DddbgGageJgDMTsUfRc86uzzBBBlVnf7bZmrhDsnz%2FZ%2F0G3nyfybatcdPn2gHnXbx70Yg6YttkAn2qqjftEdgDvnr0dGV113cGzahIrnufGSsaJAMJEusrEoQl8xPo4GjkOlxlREm%2BMzTO66PHMwPDIpG9TKyN&X-Amz-Signature=4113aeeced9ebefd4fb1b29f40ca93f9364c39690d1e1fc58b66a305855f62dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOU4PGQH%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIAMJCBpRbj6rh6ddjZB%2BYl4rAYmrBE8PaNbpX2jttaVoAiBX29tpeoCsKcqCCYIZ9xO22cE0WwCicbduukee2k%2F8Vyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMHD5zm8dDtD2kh8RTKtwDLuUqatZLLfIY9ulykknxqjdJKYKe6RV%2BysMzXICa9ZJJ6Uf5EYhPVQUKpF0qvD43sKkP5TBny80ZieMdiOKmkJ4Lxuz0hRd54hMXr53ZDeK62DUOZ2QOQ4a7rjmAeSX3f5VukPGFPTcVbAwPsrksb48r9U1SYvXutvnEhnB07exO%2BS65Ndbk%2BMSrJZG3GmcG0ZA1wG0ncMxdz2VQYWnnCjJUFLiUb%2F7o4dggFE0kDPfLbTS%2BgJ0iaiRMqEysyF0mMUZkMabXV3ga7RySPBmgqlEKWI3qmrAkD82rm7lao8IpmwQsjMtExneo6q3fc1RVgPdOTb90hT33TN8AFqYYpV7wSYh3boPTlkZrilZCVzDcOp4u8I4EBalrS9MV%2Bf%2FNXyFr8xt2Gg%2FfK%2FLmR1LNx4qNgtNmfCqu7bhW%2F7uUmPqigS8fSbC4x7HbvH92z8F6MFs1Op8qMySvDHw%2FRT5OeUyory6qY3vPvooVfq07y%2BXeW4vevoig0qFvFkdTOSJsPihIKMHjaMwlrZeVZOufKywft2s3rNTUA32J5%2B99J1XBFjY5f6Kn31oNxHUEFklDBPvDOzV4Xc%2Fwb1khbYFy38DaxLra%2Bw4WtYMRwjFjzMY0XMNnNoavv8Pq5c8wicK1wgY6pgGVzKy5NwyGhvpmNj%2ByDI7%2BbUuhlw5EPSoNu3MonLAp9D5LW0NGXJ2mk%2BIqVi8n1PP7ZPFKg%2FGk%2FsWg%2Fx2MyCHurFY4PUgxPZQIEAc8qzpzgX8H1O%2BvTJHgcc49TYairgalbtQ7yKL9XYny3FixNS4gSQ7ts%2F%2Fex4OetzWR3m8Vv44CuSADtr9pUTFNzShiwugBYr3MkXemi89SslMmAJOCDz0bWV3p&X-Amz-Signature=cf6b962a1fa6509d4f020d56997657d9e2047e933e2cabcfdccdd99036800cbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZNLGNC7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDt%2BDzrqGv%2FDHUbTBm3cHjHyHyDDGOchn6aYfgNDg5rewIhAN3dwP7SBMt79luZgCVd5WD5QDBQWLDRw2cCDGpBizyJKv8DCC0QABoMNjM3NDIzMTgzODA1IgxKrHbb4WotP%2Bdwe9Mq3AMD1UBhbrTGvMXOEgZxQ7Tb9rb5sNh4CVdI6fzU6nzRO%2Bgwm33vsam9cIkzSfzGAbxypokkGMRlUYQzdbzqPoQ5j5aLIWfnT8%2BObZkE0lQF0b1MSVayZWCjQ9y0LM2XAaUEkxaGDE7etExj71%2B5fjkeXAavQmP6pPK9FTMndi4HdPuGaKNpaZ4Ot9uMfdLp7KvYUgR60P0AQR57rpznSSd1Vslsaf0wUURH43coBKSg5VzCxhWIMDeV7wQwgi5h2%2FHmwPtRq9gNmxyspo%2BfQjs%2Fju19Huc7ADiUXfQ2O8lBCmvN7JfRSHGpq9pfhMTvt1jT0Nl0LZjgnXrVrCHGlh0uiaeXMHtplKvx9Ui83E2%2Fubk1X2%2BODDFi8bB8mZ%2B2K2rPnYvS78RYXG8RG5iAvpIQgeXSJfvTHV%2BL6ofJCnX9FF7UTcXuRyegZda4BztWQDIBst1Onb6ctoZ%2FVN7RkE%2FB%2Fv77rCd5qqC0ZVQcjRJG5qrVqLRLfGeyIjDL42rrOGWma2prFvYzi9YL7DsxvrloFCoyv%2Bc18efwOnD6QUi%2Fu7Lo%2BJ32izY3X3QI1O4JbscLw%2Fi0XV%2F%2FeMxHfJuH%2BBQ4uTDDonVLIhmOpLNA13ObOjaSxMbTWxqxVl87hDCNwbXCBjqkAfXcF%2BV6vwyCNpA%2B8FG9ZPRNgOjRVN0imWyTimWCVePpG7rZDw%2FxiACZQ6avNQHdNsGRB1X8F46gt9Fw48%2BR0CBZVuJqLlIzT%2BZL8fewVklyFdoWizn8cvD42I64E4KIOpalaDe%2FTqQNkM81IDADAy4pJLr7GHUsg1pm4ls05qBnytwlXjMc9jwYjp5izogsrF%2BPiEBTRrqhf8B63XfNHh%2BPJYiL&X-Amz-Signature=de836e5c35caa197dd76c4bd93934991c878cdcc234034cc7cea0b8856a443f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
