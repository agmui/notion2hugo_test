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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOTCKMKG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC45LNeMpfhfNlTdsBjovPsNMvSfUCT3TfqcJA5TY91oQIhANWvDvET%2FC4N85oz0Ifc4ML6mZpwmR5t9o5jWuI6WX1JKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwF1hpzv%2Bgd5qsK7Asq3ANc7HB62GUypRJchVKz%2BNu%2BIjUmdXcwIlog3Gv5WYRIN5d6gN9RJwQHuM6n76S4KIiDve3xmDvywLqGgK42MTIx5p7rV7BKyt359edAmUxPfiACZ32BbhqYXJyWEpaqbY6czW19y1d0ZDzNaOkxDvIjZWO9NeltWzk%2BYJEnI8OlfR%2BjdTTerAASt75povL2IO3gfMV1Ictn6%2BpU1ps%2BZFPPcjJZ1eVv2JEjKoLCmfurWdH0d71%2FOesumsAV7o%2BXIynv9FEakzecsV8kOVHskhFN3eQd1%2Fp3acB9EZg1E3HgapqCJ7tvn7QgeInL%2B4%2FqaeAOnkQh27Ki2mImXTkCRP%2FN2hY%2F7DCuWyCnV4HJJrJMzxqgWamy3xT4bzi2e8c1hAy2hSg2TtVD%2FRl8HUAjwVOZp2kMBMNJpv7jeATN8qG9ShvbdWNpWg29clf1IR2vASgxun0bfRTfC0zsfjQnGO88qbp7ntN9ZUB%2BP7MmzZHV1NeBK5W17RUg9BRJTDvKMQQmMzf%2FtmGGAWT5tTDxoumMTIoEF8RHCVcsrxJyCn2r5p472W6LSpm12cwzdfIXX53ND4MTBUOentDtDb2mLSZFJELOMXHywvCaA9yn9QjH2%2BeHKk4%2FoUmBvtYngDCx2fPDBjqkAQgB5VH9drIdX%2BVo9qb6eBJ98u4lUKMDiUCElwiFFCU7K7r1lV54vqDNSzmLLQV33P4YRveyRxRc7Fs3DqyEeQrkt7lzy7RSisKq8gG7%2BwD5aWLrObTa%2FYUo1S7jYtDLg%2F8i4UGNncOQ9a5IDoZ4OhHWrWjKW7H3gO%2B0mTwfZRd3%2FuCDZVYhpT0%2BSxjqvRLykGQ%2Fea%2Bssb79MPrpTSaWqn2JtYPx&X-Amz-Signature=507978bb5215da9938bc24942702be30f0de9f4be385fa2309c7a1f1922d6a24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOTCKMKG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC45LNeMpfhfNlTdsBjovPsNMvSfUCT3TfqcJA5TY91oQIhANWvDvET%2FC4N85oz0Ifc4ML6mZpwmR5t9o5jWuI6WX1JKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwF1hpzv%2Bgd5qsK7Asq3ANc7HB62GUypRJchVKz%2BNu%2BIjUmdXcwIlog3Gv5WYRIN5d6gN9RJwQHuM6n76S4KIiDve3xmDvywLqGgK42MTIx5p7rV7BKyt359edAmUxPfiACZ32BbhqYXJyWEpaqbY6czW19y1d0ZDzNaOkxDvIjZWO9NeltWzk%2BYJEnI8OlfR%2BjdTTerAASt75povL2IO3gfMV1Ictn6%2BpU1ps%2BZFPPcjJZ1eVv2JEjKoLCmfurWdH0d71%2FOesumsAV7o%2BXIynv9FEakzecsV8kOVHskhFN3eQd1%2Fp3acB9EZg1E3HgapqCJ7tvn7QgeInL%2B4%2FqaeAOnkQh27Ki2mImXTkCRP%2FN2hY%2F7DCuWyCnV4HJJrJMzxqgWamy3xT4bzi2e8c1hAy2hSg2TtVD%2FRl8HUAjwVOZp2kMBMNJpv7jeATN8qG9ShvbdWNpWg29clf1IR2vASgxun0bfRTfC0zsfjQnGO88qbp7ntN9ZUB%2BP7MmzZHV1NeBK5W17RUg9BRJTDvKMQQmMzf%2FtmGGAWT5tTDxoumMTIoEF8RHCVcsrxJyCn2r5p472W6LSpm12cwzdfIXX53ND4MTBUOentDtDb2mLSZFJELOMXHywvCaA9yn9QjH2%2BeHKk4%2FoUmBvtYngDCx2fPDBjqkAQgB5VH9drIdX%2BVo9qb6eBJ98u4lUKMDiUCElwiFFCU7K7r1lV54vqDNSzmLLQV33P4YRveyRxRc7Fs3DqyEeQrkt7lzy7RSisKq8gG7%2BwD5aWLrObTa%2FYUo1S7jYtDLg%2F8i4UGNncOQ9a5IDoZ4OhHWrWjKW7H3gO%2B0mTwfZRd3%2FuCDZVYhpT0%2BSxjqvRLykGQ%2Fea%2Bssb79MPrpTSaWqn2JtYPx&X-Amz-Signature=bf37b96b5f8e37ab6fcb0ccd2ba8aa84a9b17bd8ff3bbd3289a44a3014f75333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOTCKMKG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC45LNeMpfhfNlTdsBjovPsNMvSfUCT3TfqcJA5TY91oQIhANWvDvET%2FC4N85oz0Ifc4ML6mZpwmR5t9o5jWuI6WX1JKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwF1hpzv%2Bgd5qsK7Asq3ANc7HB62GUypRJchVKz%2BNu%2BIjUmdXcwIlog3Gv5WYRIN5d6gN9RJwQHuM6n76S4KIiDve3xmDvywLqGgK42MTIx5p7rV7BKyt359edAmUxPfiACZ32BbhqYXJyWEpaqbY6czW19y1d0ZDzNaOkxDvIjZWO9NeltWzk%2BYJEnI8OlfR%2BjdTTerAASt75povL2IO3gfMV1Ictn6%2BpU1ps%2BZFPPcjJZ1eVv2JEjKoLCmfurWdH0d71%2FOesumsAV7o%2BXIynv9FEakzecsV8kOVHskhFN3eQd1%2Fp3acB9EZg1E3HgapqCJ7tvn7QgeInL%2B4%2FqaeAOnkQh27Ki2mImXTkCRP%2FN2hY%2F7DCuWyCnV4HJJrJMzxqgWamy3xT4bzi2e8c1hAy2hSg2TtVD%2FRl8HUAjwVOZp2kMBMNJpv7jeATN8qG9ShvbdWNpWg29clf1IR2vASgxun0bfRTfC0zsfjQnGO88qbp7ntN9ZUB%2BP7MmzZHV1NeBK5W17RUg9BRJTDvKMQQmMzf%2FtmGGAWT5tTDxoumMTIoEF8RHCVcsrxJyCn2r5p472W6LSpm12cwzdfIXX53ND4MTBUOentDtDb2mLSZFJELOMXHywvCaA9yn9QjH2%2BeHKk4%2FoUmBvtYngDCx2fPDBjqkAQgB5VH9drIdX%2BVo9qb6eBJ98u4lUKMDiUCElwiFFCU7K7r1lV54vqDNSzmLLQV33P4YRveyRxRc7Fs3DqyEeQrkt7lzy7RSisKq8gG7%2BwD5aWLrObTa%2FYUo1S7jYtDLg%2F8i4UGNncOQ9a5IDoZ4OhHWrWjKW7H3gO%2B0mTwfZRd3%2FuCDZVYhpT0%2BSxjqvRLykGQ%2Fea%2Bssb79MPrpTSaWqn2JtYPx&X-Amz-Signature=4454e965d85e8f23cf7957cb7d4eb9df1ed1b7271e3b35bac3bd7e4f77a6f79e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666T6UNPK%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzYcHf6GSPllFyXf%2BOSYuIROWyFR4R2lwA9jF%2F6anN5AiA6F4uHgUtR4WETJC4r2%2Fr2pq3EbTbd9dQtj2ZPsRs2QSqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO4K6Ro%2Fw7hM3BIscKtwD6E%2FwcUahWsVO6n%2F3hq1XXIXk4H0CrALjyerQZ%2F1ff6mC4a5sluBlm%2F2fde9aj170BrZfKDgK3otkQCPep2aL2C%2FxyeRhutCaKhxkpl%2FeSNaGxtUM3WAHtUSjJcnz7N60zTtGOHw94M8AxCyfZ7VatejyS6v4OO66LoxsLOEXZrozNDvjdBKjhUmAObG339e06DyOE6ZXc5pzEXhCXjm%2BtOKM9UBGxEAiD62WAD0IZ6%2FnQUQvHyLBGzPlspGmz76ky41Ip917vg2BnGoM960yUbZ9MXo3UoAm7eOUbNL7rqH8RU0ffER4EUTEsFTzmBPnMM4GAPh68L8UE0Ycg5SuVRsPR%2BoCdUtObTlaYuWVxJPsDVYe6lePMrF7DC3IT5Edd%2BwLeKiFx0G0%2F3vlCn0tb3S%2BIl10AJh%2F4ZTP4CGSEi0E3A1KQ6Nxzjbt797oUhxoVa2PdBiYA65pj7jN%2FdqWxrRf9hmDZMSXh0DM%2B5EWpRGGyyKgWcKh%2F9r8VyYytzb4WQx5MjLxQKsJSpklyjHqZN6bR0%2BBSTE3anvcKu5oEXC1yYnG5NnWeS1UBoqNo6JUdRBbrgy2B4Ee4bGMH1kU7le5cDake9Mk9%2BtPs7i3w%2FyxWwTWt17hdCITvKAw5tjzwwY6pgEjvA4oDVUpn%2BlGVyj4kgGHDIUTc%2BqHWu8IYJKXcxWFmqzELaocsptZgPTPxLgLcIbiqJbv6ACqAAnFKuxT%2FcaNV0A3fKFl1FxOuUfvupGuX6T46pHGuxCdkTa5CR7cgbvb2xpecSagjx3puSeVoj9gKxj5kydyAxjcgDrkB%2FFLL26G0%2BJ7NZJUzs671062ktg3JgAO3h9QkA1pzYNUjHMf1QLReCu3&X-Amz-Signature=7092e8ed2a76840dcd9a972e7e44465f9777c694a8ef871ccd8c242d7b0779de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IAK5S7B%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOMKLrAUfysodPpTTgyf2zZFjgM5wK0Cf0wrwUCZivEAIhAIg%2BrnwRo3R%2BJAntdZS1WsWIMRycYlenVzxoun8TAlZuKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcRxn4DtQoETTKM5kq3AMgCRYTaPiHq3uG01cBSs1o2DbTpxTAb5qXn8LuFgUislGY3uTRaAGTurbGokkfPQPNPfXcgdy3IfGr5oryboTe9IlToWCS1SUb7sPBPXGCBdHtQUt5fDLCfrLNU2EmRQMD7bTVUqtiBsG%2FTohTSXupSLfzVT7sXXMOG3Hpb4o5a%2BrTcavXyYy9XpFanmVi1CBB0nl%2FTkjeHyi6oQq9gcRip%2FYy%2FJ1V9YxnoRrd9DfKkOzsj%2FFqu%2BIZM1sipbOluX6tVcOYq14uLTgoS1I3I%2FeRCi8PMgEO2wv09I97uviPl8mPJeintXvMvX6R5zhB4s31vi2jw9COdavYV3LjgFw9j8lKzm7A%2BLq4ZhEUIO5nI4qKimucADjg3flLxmxMbK%2Fro2HiqvrhrXKOZBxS22%2FqGp%2BDzGqVUvDy5XRZ%2BQpi3eBZrZBnkm0jpbnUa7CGg3uhzUeT14mNUhMVdEuSeIfOg%2B1s%2FwTv480tVtNFOc%2BjfGLBiWHir6QhPhjSuypknFO24hP%2F%2BssLw4K182PTvG2ycZBrZp4q2sqEE%2FAgT6jHQMrRI%2BLkUO%2FQNhqThJhVM0SkY29YpahjrKK%2FiwnNdBDPRdhHK8CPUjn4TTsa97P5JSOnNNCOil8iP8bfCDDq0vPDBjqkAVyTXGaimMgDoyTiPCxjzDNTfyHhb72luAcAttTJ%2BGhMawYbF8Ub4bDDtd%2Bu3ubV%2FQXSG7AIG7eG8QcUOlBkBba6n4k8VHnC8InQ1s9HnhFani2T6%2Bw3vtYduDcbOPd7sIO96pjor%2F7Kn93y%2BFsMG5vDnKCQQbEv2mc9sDdywgW8l%2BpSHTPRO5VfUSQzjPJR9FzVU5eZuaPkMLmJ%2BZCB1sPwPPPP&X-Amz-Signature=548816b646d62ea0978aa34f3cd4086185f0a61e98e5519e63135fe41f308966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOTCKMKG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC45LNeMpfhfNlTdsBjovPsNMvSfUCT3TfqcJA5TY91oQIhANWvDvET%2FC4N85oz0Ifc4ML6mZpwmR5t9o5jWuI6WX1JKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwF1hpzv%2Bgd5qsK7Asq3ANc7HB62GUypRJchVKz%2BNu%2BIjUmdXcwIlog3Gv5WYRIN5d6gN9RJwQHuM6n76S4KIiDve3xmDvywLqGgK42MTIx5p7rV7BKyt359edAmUxPfiACZ32BbhqYXJyWEpaqbY6czW19y1d0ZDzNaOkxDvIjZWO9NeltWzk%2BYJEnI8OlfR%2BjdTTerAASt75povL2IO3gfMV1Ictn6%2BpU1ps%2BZFPPcjJZ1eVv2JEjKoLCmfurWdH0d71%2FOesumsAV7o%2BXIynv9FEakzecsV8kOVHskhFN3eQd1%2Fp3acB9EZg1E3HgapqCJ7tvn7QgeInL%2B4%2FqaeAOnkQh27Ki2mImXTkCRP%2FN2hY%2F7DCuWyCnV4HJJrJMzxqgWamy3xT4bzi2e8c1hAy2hSg2TtVD%2FRl8HUAjwVOZp2kMBMNJpv7jeATN8qG9ShvbdWNpWg29clf1IR2vASgxun0bfRTfC0zsfjQnGO88qbp7ntN9ZUB%2BP7MmzZHV1NeBK5W17RUg9BRJTDvKMQQmMzf%2FtmGGAWT5tTDxoumMTIoEF8RHCVcsrxJyCn2r5p472W6LSpm12cwzdfIXX53ND4MTBUOentDtDb2mLSZFJELOMXHywvCaA9yn9QjH2%2BeHKk4%2FoUmBvtYngDCx2fPDBjqkAQgB5VH9drIdX%2BVo9qb6eBJ98u4lUKMDiUCElwiFFCU7K7r1lV54vqDNSzmLLQV33P4YRveyRxRc7Fs3DqyEeQrkt7lzy7RSisKq8gG7%2BwD5aWLrObTa%2FYUo1S7jYtDLg%2F8i4UGNncOQ9a5IDoZ4OhHWrWjKW7H3gO%2B0mTwfZRd3%2FuCDZVYhpT0%2BSxjqvRLykGQ%2Fea%2Bssb79MPrpTSaWqn2JtYPx&X-Amz-Signature=da2c361025508548c23cf6c0afdf7e848eacd9928b86d140f24ef8083d312753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
