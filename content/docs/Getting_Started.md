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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWZS5EZI%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBOspjC5IcSkAh7arGaCO124gqjMYbeEzQ%2BVIMaVd8uQIhAOe3jXyIrciGK8G%2BK5S%2BNTCEepePWJrOkMb34AWivJiQKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXDT3pMbEeUGMXyVQq3APNod%2FO%2Fro7M0YK5rNia1JUyOUbZwtFHJWNpECQeWQbDNX9P2Xc523Iwmz3y0Rpj3zML0I3Rahu2kYAqbrMPgIGyuTMwEgMclp2zFcOqfxXlHEWBHk%2BrLvlxhK7D48Cp0d41M9Q%2FMb4Ab2n%2F4%2BQfYoc5TRZ%2FabMKxwO2ZnTnzLo7qF%2Fe99CWg4Y2wnGlPfg%2Ba%2BOsgQLED0Av%2Bgu%2BvvnlXy5VyCHphA%2BANEZyUr77ydjg1NC7e2FAEAUD%2Fh%2B%2Ffz8N5YOETjCQOsNvDW%2BLlAl4bAHBbJWFqzaRmthk9Do5cikmLAT2hWCu%2Bo3wp5TDjPhiPTshUwydtlXuoDNrSfdcuomnxPwe8%2FYYfCAGoimhCyl5H%2Fn%2F54NVP7qzxdDPMoskbulb6stT%2B04ZDzuSztadJfrC7L3Fhbani5Yvv2hrQe95PlC0pOKxWzw3LsPsbykH2z962sl8238VEl8%2BlBtPy2v3cUUBjrBYwVtDQvtwnSA0YjWbCmIrhDmePnd8X7hEhmeYE96%2FJJCu0v%2FqIc7Nnjkh3FXdDqKMFoBSvKdUSSKGwTN5k27XTLE7%2F%2Fr76u7Gcbhz0wevcVHxvejAQaHMI3HvjZgzeuhM%2B5oYUcEC4QjbFtlFXnyE1JWwlYrLTDe5azBBjqkAUN4R9r2oiw1bzJQD%2FFFvTAQtAXQpEFSKEzbRRUnnro6Fnl6zcDBFGnhyuOSgLI4Gul5MOzFN7R4Cnj%2Bb2oM%2B%2Feaa2Ll6nHQPSj5cMvb%2FzWuLzuH7Qt8544YgJDuPBYuTnIsEL6sPFMHhw8yZQYGGF9EjuZ57H0d5CHlYByWEof51mPbehm9ZPTzGCri329%2BfAN7S4ViF0OhwCKiyZmB42VTdHny&X-Amz-Signature=13f2fe76ba5800970c461b2ea2383dc1bfcf72649e60e466b8acc7fb37369353&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWZS5EZI%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBOspjC5IcSkAh7arGaCO124gqjMYbeEzQ%2BVIMaVd8uQIhAOe3jXyIrciGK8G%2BK5S%2BNTCEepePWJrOkMb34AWivJiQKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXDT3pMbEeUGMXyVQq3APNod%2FO%2Fro7M0YK5rNia1JUyOUbZwtFHJWNpECQeWQbDNX9P2Xc523Iwmz3y0Rpj3zML0I3Rahu2kYAqbrMPgIGyuTMwEgMclp2zFcOqfxXlHEWBHk%2BrLvlxhK7D48Cp0d41M9Q%2FMb4Ab2n%2F4%2BQfYoc5TRZ%2FabMKxwO2ZnTnzLo7qF%2Fe99CWg4Y2wnGlPfg%2Ba%2BOsgQLED0Av%2Bgu%2BvvnlXy5VyCHphA%2BANEZyUr77ydjg1NC7e2FAEAUD%2Fh%2B%2Ffz8N5YOETjCQOsNvDW%2BLlAl4bAHBbJWFqzaRmthk9Do5cikmLAT2hWCu%2Bo3wp5TDjPhiPTshUwydtlXuoDNrSfdcuomnxPwe8%2FYYfCAGoimhCyl5H%2Fn%2F54NVP7qzxdDPMoskbulb6stT%2B04ZDzuSztadJfrC7L3Fhbani5Yvv2hrQe95PlC0pOKxWzw3LsPsbykH2z962sl8238VEl8%2BlBtPy2v3cUUBjrBYwVtDQvtwnSA0YjWbCmIrhDmePnd8X7hEhmeYE96%2FJJCu0v%2FqIc7Nnjkh3FXdDqKMFoBSvKdUSSKGwTN5k27XTLE7%2F%2Fr76u7Gcbhz0wevcVHxvejAQaHMI3HvjZgzeuhM%2B5oYUcEC4QjbFtlFXnyE1JWwlYrLTDe5azBBjqkAUN4R9r2oiw1bzJQD%2FFFvTAQtAXQpEFSKEzbRRUnnro6Fnl6zcDBFGnhyuOSgLI4Gul5MOzFN7R4Cnj%2Bb2oM%2B%2Feaa2Ll6nHQPSj5cMvb%2FzWuLzuH7Qt8544YgJDuPBYuTnIsEL6sPFMHhw8yZQYGGF9EjuZ57H0d5CHlYByWEof51mPbehm9ZPTzGCri329%2BfAN7S4ViF0OhwCKiyZmB42VTdHny&X-Amz-Signature=9a860e53a0aa257ceaddb769cd7526d8bed708aa2194687f79355d757ee7161c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWZS5EZI%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBOspjC5IcSkAh7arGaCO124gqjMYbeEzQ%2BVIMaVd8uQIhAOe3jXyIrciGK8G%2BK5S%2BNTCEepePWJrOkMb34AWivJiQKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXDT3pMbEeUGMXyVQq3APNod%2FO%2Fro7M0YK5rNia1JUyOUbZwtFHJWNpECQeWQbDNX9P2Xc523Iwmz3y0Rpj3zML0I3Rahu2kYAqbrMPgIGyuTMwEgMclp2zFcOqfxXlHEWBHk%2BrLvlxhK7D48Cp0d41M9Q%2FMb4Ab2n%2F4%2BQfYoc5TRZ%2FabMKxwO2ZnTnzLo7qF%2Fe99CWg4Y2wnGlPfg%2Ba%2BOsgQLED0Av%2Bgu%2BvvnlXy5VyCHphA%2BANEZyUr77ydjg1NC7e2FAEAUD%2Fh%2B%2Ffz8N5YOETjCQOsNvDW%2BLlAl4bAHBbJWFqzaRmthk9Do5cikmLAT2hWCu%2Bo3wp5TDjPhiPTshUwydtlXuoDNrSfdcuomnxPwe8%2FYYfCAGoimhCyl5H%2Fn%2F54NVP7qzxdDPMoskbulb6stT%2B04ZDzuSztadJfrC7L3Fhbani5Yvv2hrQe95PlC0pOKxWzw3LsPsbykH2z962sl8238VEl8%2BlBtPy2v3cUUBjrBYwVtDQvtwnSA0YjWbCmIrhDmePnd8X7hEhmeYE96%2FJJCu0v%2FqIc7Nnjkh3FXdDqKMFoBSvKdUSSKGwTN5k27XTLE7%2F%2Fr76u7Gcbhz0wevcVHxvejAQaHMI3HvjZgzeuhM%2B5oYUcEC4QjbFtlFXnyE1JWwlYrLTDe5azBBjqkAUN4R9r2oiw1bzJQD%2FFFvTAQtAXQpEFSKEzbRRUnnro6Fnl6zcDBFGnhyuOSgLI4Gul5MOzFN7R4Cnj%2Bb2oM%2B%2Feaa2Ll6nHQPSj5cMvb%2FzWuLzuH7Qt8544YgJDuPBYuTnIsEL6sPFMHhw8yZQYGGF9EjuZ57H0d5CHlYByWEof51mPbehm9ZPTzGCri329%2BfAN7S4ViF0OhwCKiyZmB42VTdHny&X-Amz-Signature=c6880fa2189373baa7322cd683c98e0d692545ec6415d22986312138522ad8f0&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JMCZZSI%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvlg5zxnppGE6qnyW41cUXmGF%2F%2Ft7VPmp86TwOV434kAIhAPFq%2FC%2BGpYIgtCUhRyzvBNa%2BYtZdCSRmzAFfVtSERU6oKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4lAlNndwZwJcMssMq3APzn3fc8cMmGPcJwiJ531nE1Uao6AzIIjFGSAo21RbcuJ%2BYlcIFiwDadT91Lvz6tIilxcYz3GMq7sHun6ScSQxPwNrM%2FAUA32w%2BtwLZyZasE4UMX5Nqz5t07T9V4mQLQNaudVqfIIdtpzlLdG6eS8j99N%2Fnd5go7X3P75pOMJTBLgt9BVZFeQn%2FGX53WNd6esojCsZIbRLy4lY%2FkrdKwm%2FdIAL3rGlQQWIPtf9G8KGRFrNwmR71IgViYx5owO1kDKBzUhXf1O%2BRmf%2Fymi%2B9WlNMIHPnKlff4ak8q8kqmhyuKGmIvBglVF5W2JlvlOauA8InB%2F2e4eApZyuG8keQcxH9DxX9BYNQ7V1VzvpKxuibrS8CSRJl1NxGK1aoDolh3m1ALeBgCPMGYFZjtYt1KHnZL9rXTbXKGCbEXdGz4rERPWoPWFGE%2BYHkEb81N9%2BbRo4yeTftMHZxXo7Fh3c6A49OzKHwroF9mgIQ8%2FeoA%2B%2BE24Oyf4xp%2BfeTCo22ifo68XXNo1ytXvQh3JHmzbY8lwL35mNFoPz1GBI%2F9LZw3CN9miQ%2FtoJ%2Bw%2BRjE%2F5cwA%2F9BcrNVTJRuo%2F16koeZZXpgToZvRH%2FZwbKbhbz56BK4LOrX4oEGaCaEV2wvqURRjCb8azBBjqkAWHlQtpwG7iFwEmNSxbzgHf798uZmVMvJhbjpb07vRFpD7%2F%2Fqa0LBcCMmAhla5ZF7v9NBqNziQwT073sWkaXZr60LoXNaNXcR%2ByiUKYg67Ktb1muNFR29%2F0WSre5XKEAHza4bqXAlvvurADUYAaCv75EkJP1q46R0rQg9uKiY1yLU9lEOyn8P4KDN2Clak5Gt4gbflSYPRBaBdRuzdnGZgjaoUjE&X-Amz-Signature=c8a5676a20816c642c99b06169546d8ad72a168147571080465194a7c946b00c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2GJK5J6%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNUWcVHRxRjRuTZXpYlWB3Rc%2BW%2FZbtYNH7isDmCI9DJQIhALknw%2BtW9rVmLf3N42lOau2sH%2FAjfrloEoZP9AoUfumiKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFXnmUpDxaRzlHq6Eq3AMDsdKVjYyn1vGPMqe%2BU%2B9HrFGHvGQ3USGO7ZM%2FZhM0S2s99cE8vSj%2BR5lSiqnk604VbtNURiZ25oy26rZjJubmlCZPjwn%2FFiZsRs2wEdXrKdPAEKac2kHIci3uulJBYoWSldqDifshcy41UC3sVkuqNRi%2FSTnWwEViTLpEr9RS%2F%2BR58d69DMkuTPyN%2F3zXTjn%2BdZtdYr04cqWKr%2BA%2BzkSPu3c8o5fd2YR9%2FnpZJhVL3oNTpPFmjWHcb29hYY1MyhGFRzJhteItoPY1TXGwuc2msIeWuVuBVFegy1yyD0GiDuNHD%2F6vbC5Q%2FGGJm1%2FQYqYmuNmvHzCSeixY0yPmcKgQsWeEXY1EccCUunGfsL%2FZ6rWHxgwRwx0XMF%2FSVSsU211biEiUDEAdcePyoBCQM4Jd7k2sc%2F5qfWUnrZzf%2Beq6uaDY8BZnu%2FUQ8oJcgrFz7zQwuuio0E1ZsGLl7RdUejuD98pv4Z04NCO99HNSD3%2BoL3G8mel%2BqDzX1t7eOPnfnksn1rT35hCV1RgvEXM84bVanTIGKDH8smNJ8eclO8HQep9o2iB%2B35WNwskXOsMGEfBJCo1ikO5MMuJqRWmqCK4kF2iiNnZpP9MUN1nW02Zkoq06yGyiQ3juUtY8oTCP5azBBjqkAXEkptmLcO7ctyV%2BhM0kOQBn7bJt6YIoIrmqShQBHsL7RICfTDiuZuXWc9gRKQaMW87gsqIaYGXfKNcYdp4xOt%2F%2FdF2CuiM83Xvo6KH7MCnMYz%2Be2yboCSf7j%2FgKJiiipOuTMOc9KKH26FMERMHs8xfT9YwF3tbgnjGhYjda2htgfLwSYeKtbpN%2FM20V1ZuTkYzjeRIcYg76W%2FsGGK20ecYuXgKm&X-Amz-Signature=50361834aa7543fbaa1808b0de62f81077fb7d519c82c09090fc82208dad40a4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWZS5EZI%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBOspjC5IcSkAh7arGaCO124gqjMYbeEzQ%2BVIMaVd8uQIhAOe3jXyIrciGK8G%2BK5S%2BNTCEepePWJrOkMb34AWivJiQKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXDT3pMbEeUGMXyVQq3APNod%2FO%2Fro7M0YK5rNia1JUyOUbZwtFHJWNpECQeWQbDNX9P2Xc523Iwmz3y0Rpj3zML0I3Rahu2kYAqbrMPgIGyuTMwEgMclp2zFcOqfxXlHEWBHk%2BrLvlxhK7D48Cp0d41M9Q%2FMb4Ab2n%2F4%2BQfYoc5TRZ%2FabMKxwO2ZnTnzLo7qF%2Fe99CWg4Y2wnGlPfg%2Ba%2BOsgQLED0Av%2Bgu%2BvvnlXy5VyCHphA%2BANEZyUr77ydjg1NC7e2FAEAUD%2Fh%2B%2Ffz8N5YOETjCQOsNvDW%2BLlAl4bAHBbJWFqzaRmthk9Do5cikmLAT2hWCu%2Bo3wp5TDjPhiPTshUwydtlXuoDNrSfdcuomnxPwe8%2FYYfCAGoimhCyl5H%2Fn%2F54NVP7qzxdDPMoskbulb6stT%2B04ZDzuSztadJfrC7L3Fhbani5Yvv2hrQe95PlC0pOKxWzw3LsPsbykH2z962sl8238VEl8%2BlBtPy2v3cUUBjrBYwVtDQvtwnSA0YjWbCmIrhDmePnd8X7hEhmeYE96%2FJJCu0v%2FqIc7Nnjkh3FXdDqKMFoBSvKdUSSKGwTN5k27XTLE7%2F%2Fr76u7Gcbhz0wevcVHxvejAQaHMI3HvjZgzeuhM%2B5oYUcEC4QjbFtlFXnyE1JWwlYrLTDe5azBBjqkAUN4R9r2oiw1bzJQD%2FFFvTAQtAXQpEFSKEzbRRUnnro6Fnl6zcDBFGnhyuOSgLI4Gul5MOzFN7R4Cnj%2Bb2oM%2B%2Feaa2Ll6nHQPSj5cMvb%2FzWuLzuH7Qt8544YgJDuPBYuTnIsEL6sPFMHhw8yZQYGGF9EjuZ57H0d5CHlYByWEof51mPbehm9ZPTzGCri329%2BfAN7S4ViF0OhwCKiyZmB42VTdHny&X-Amz-Signature=2c988936ea25b811f6a9a3ed9b4ed48c9d3715e2687b3431c4f1c5a7a5472c98&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
