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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAMI6OEB%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrnAuSNPHBA7gM4%2BZO6a346Gp24RHIMP%2FCanduM6il3wIhAPaQuvlbNrDJkaBIF6J4abRDUVUQujLnfSm7XblmnWZ3KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0dEjF%2BiYkhDubhrEq3ANCKTLm91E6BTv5AsTf4UStF36Ns%2FoBvSWZEVdFpUFeRHk2Bv1J0GZEytIDXtuV0GkQxOFjWk2zCJEk3S%2FCf97iZfCTR5LX1pS10DVt75k96Y20SB7Byv8r8J3W5wgXJKj53yNqnYtTck8iAHiTWl1wIhQFYYp1omIz87RZ%2BX66AJePN6j1hjpFmOlo0yZ8QAh2nAt7iFyoBMvYcA1JmeMR6H4AH6NhF11jxBTLRciAJXoqE%2B1FIo4Ts%2F6xL9abYf0A%2FbCp%2Bdm0hgl5Jo2hmNZQMjWJe%2B%2BWRjB9Lokcf4tdiFSenRY1eE7WkB4ZKF3OjmxzR35bDT3%2BFRdegYzTuSI%2BnrRd%2Bh3fbSoNhleGqr03hnzRmbUyTnjbM0Hfprak4UjEKAY68iiYjga5OEDUgVf7n44NAxgl1uBoZXJbyA1POZI7zJi8UsS3gP1RIJLxFjA1TWX4C4XOUNy9HLrh7Yl%2FT8ufN0HMHB0c%2FZDeUuLfuVImYAteVN1CZy%2BwwyAgQmUd8P6%2BygCUwwut%2Fe2uNMLeXG56sH8gDRFCHKlR3SXB%2BUMZHYl%2FPGxGHTPF%2FeH1mCzQM2%2Fd5Gdzn8VFsoAPtF0ci1LkK4%2F4N0%2BHNgnZPfHMpEhJHIvR8V22nIZxfzCy6M%2B%2BBjqkAeQio3ZzO7pxLSd3IozXQK0l5PfdZY2Begln7e%2FLEM76ugtggLhQBqqzzhydFu0R7vbHC00Jjnt%2BWsB%2FNZlPHGimVM1%2FUO7Gl%2F65uFBiDC3Cq9A0fG4yaCrOesiK%2BpsnCMtnLg8ymSeAxreszbpTlq1euUk%2Fv9%2Fq2wKtNLdwNPqqBgRS3tZ%2BMCpwQzbhNxwCcgJjrLYqxS8F4Dy77jjJLVFHMUAw&X-Amz-Signature=43b220a2f7cc0424c9efc42508e6804505eea4ca38de1a19d019878f67382e2c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAMI6OEB%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrnAuSNPHBA7gM4%2BZO6a346Gp24RHIMP%2FCanduM6il3wIhAPaQuvlbNrDJkaBIF6J4abRDUVUQujLnfSm7XblmnWZ3KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0dEjF%2BiYkhDubhrEq3ANCKTLm91E6BTv5AsTf4UStF36Ns%2FoBvSWZEVdFpUFeRHk2Bv1J0GZEytIDXtuV0GkQxOFjWk2zCJEk3S%2FCf97iZfCTR5LX1pS10DVt75k96Y20SB7Byv8r8J3W5wgXJKj53yNqnYtTck8iAHiTWl1wIhQFYYp1omIz87RZ%2BX66AJePN6j1hjpFmOlo0yZ8QAh2nAt7iFyoBMvYcA1JmeMR6H4AH6NhF11jxBTLRciAJXoqE%2B1FIo4Ts%2F6xL9abYf0A%2FbCp%2Bdm0hgl5Jo2hmNZQMjWJe%2B%2BWRjB9Lokcf4tdiFSenRY1eE7WkB4ZKF3OjmxzR35bDT3%2BFRdegYzTuSI%2BnrRd%2Bh3fbSoNhleGqr03hnzRmbUyTnjbM0Hfprak4UjEKAY68iiYjga5OEDUgVf7n44NAxgl1uBoZXJbyA1POZI7zJi8UsS3gP1RIJLxFjA1TWX4C4XOUNy9HLrh7Yl%2FT8ufN0HMHB0c%2FZDeUuLfuVImYAteVN1CZy%2BwwyAgQmUd8P6%2BygCUwwut%2Fe2uNMLeXG56sH8gDRFCHKlR3SXB%2BUMZHYl%2FPGxGHTPF%2FeH1mCzQM2%2Fd5Gdzn8VFsoAPtF0ci1LkK4%2F4N0%2BHNgnZPfHMpEhJHIvR8V22nIZxfzCy6M%2B%2BBjqkAeQio3ZzO7pxLSd3IozXQK0l5PfdZY2Begln7e%2FLEM76ugtggLhQBqqzzhydFu0R7vbHC00Jjnt%2BWsB%2FNZlPHGimVM1%2FUO7Gl%2F65uFBiDC3Cq9A0fG4yaCrOesiK%2BpsnCMtnLg8ymSeAxreszbpTlq1euUk%2Fv9%2Fq2wKtNLdwNPqqBgRS3tZ%2BMCpwQzbhNxwCcgJjrLYqxS8F4Dy77jjJLVFHMUAw&X-Amz-Signature=20979341d956fb23d4a43d5b7e6bf8467b2e8d7b2f470077e0ac2de66a4a52b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCJB5NA%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDB1UA7CyisORDzIl5HfzV8zyc4PShZel8FsMPIHKniUAiAP%2Fd%2FDoZX0s5kCDPftn5cgr1gD61HdtGW8EN51tRraAyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9Y9VbMk%2BqkgVoPWZKtwDGcQOloFYTWM26d1B81lY0%2F1Ow4GQwEV%2FZHvPsE0Bf4m1ZFxhKuoApuJP0Q95gD%2B9I%2FrNnmUwCh22wm2a7R72ZfzaWZleUSqkwUJnsphn7b52DsDPWrQMD24TERFNbsBjCB5VQOZNmmYDGqcYE7H3za6IO6n5f8zPMPGGo%2B96GnzMFTtLKx5%2Blas6PuzQss248%2BnAxCgeXxd9ZThVRow3fb4ISbn0HqjUBRzLL1%2BtKzfnmSEwbeZRn5MkzxRHqdAoAGNlluzplXilEiT27wpxSp9oXdKDM47z5QO6QTvCRrZOXP2OqY4vTS%2BMw06rYlfJbTf8msVJAIltu3QrELtLYYoIe3n9mt200zYfjuxFBEXIeJ%2FgHqSwocjBkTt8g90jq1bLaPZbYfiDiuzd8%2BCnZZP7xo4lYEMD3bGO887kc3JGQnqnvCPnpqbkNxmLwW%2B6Frii4ZGElyk6hylU8g8q%2FXvoJUaAspmMGaf00IoMvlWYpsVU%2F44u94tILLbe2d2TYgTS%2BAbm7Vga%2Bm3PTtEPdHtBQqX%2FlB%2BKBTTMP1z63T2ewqJm5Mr9B2giJuO5UBZuUa4ePCTwZrBqrK3RfR14bfC3v1QkIX3VTjXG%2B%2BqmnNLmlQ9cq1D5N93dPUIw7efPvgY6pgFZTPf%2BGD5%2FcKfMJXhJ%2FxgAXTYG0xdIau7VY63Iny%2F9UGyEVu89oedwohDCuCmpkzE6ypQnlfcYIBqDDVvrXp8VXLEQ8HCzM01m%2FNrWNuSD9VoXpxSxzvZLQzAqK2uzuMLe3mrsEG4D%2FqDLu4TRsKDwUGZ0TzmZ0GMZs7I%2BM7vzynFu4VgQntuVQxBn%2ByzgMdlv6h3mA6i%2BLBHFB2Syb01OaGchD2k%2F&X-Amz-Signature=c6fb6273af0da0dac9b4a0f6733393e5928490276a6c5848bf36f88bfee724ea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWLG4NCD%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2Bl0vYfQB2F3rrDQzV5hVHTbv75KzC%2FRtmG%2FSCkfFSvAiEA713Zkh1usT%2Bnp45e5iCZRgA1q2UuTiee6gfEnUUtkv8qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdw12jKaccmPAt4ISrcA1nDYiwP5wFf7vf3hfStUIT%2FfD8p%2FFSJGUaPr5oL9b9OFB92qyDMTyEaDWGT%2Ba1fKsS1Q9fukA199g5g%2F9csC0gQa3LrCVXazu30DaXB7pA4Yf0cfllEvsWf4kWeqCODSJRbTp%2BbUvrC4kX5QyfsvpCb15vnHbBOgeUlfC7G5%2BP0nBrePirpevC%2BXsRCPaDkzM%2FFaohmjefShTrYtH2ormvx6xeQhMR%2FqHoqRRz7IzHlzDtR7GLJv0eL9SLbtcuysQS4lO4oGxCW0yKfe4hc%2Fzm1yNwdFu3DnIejoPJzHdNeFsjRuOwhKFV%2BO3wj2u6cel45VLwQiydlxti3vhrb6Qy%2FMOp%2BE75uHA%2Bdb%2F9pEGwdYuMn5WeObiCG1whjKl5mN4Ec2gR569lxIzcM40ezMEw8637ijgPTeIeyTRr1BErR35Nab4E63JotAb6GWeF39n0SlK4Jw%2F33evZc2ggtPbkrnkVvVV7%2Bh9tTiqHVgEmRf4ceTKabDYLfaYIoiZ%2Fi%2Fzp7YW1doUQ%2BfY75zGAcOsnnU2eXsFEirxSe2X17qlQOWTHWDQ1iOHVIpHfVnJ1luB%2FeSyvAsnRjXl0f1oraAdjOiV4LgkJxNWbMwuOrYDR0WJ9DYl94HRw1XkTsMMroz74GOqUBOXFYKsDVGkxupUc2E05z0BCni%2B1%2B%2FCX9FJlE12fp6KJkgcdtHgUbWaK%2B4jslEJk4XFarCGFK4fiImVbpVErvQaUDxNbZD10Ca%2FNzVCpvukUNMNhwmnys7qUuLOgHWvgk5ror6X%2Bm59XakW7vXu5U4SCJD%2FTGXilTqxScUivK%2BSQNHDLLRPPk0yeNIS0y1i4cU8VZsguu%2BwKxvX8mR%2B5ui7p58wUT&X-Amz-Signature=c6c754a391c882139c8426b0de0ffaaa038076f0a1af3326d102edc22c12a370&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAMI6OEB%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrnAuSNPHBA7gM4%2BZO6a346Gp24RHIMP%2FCanduM6il3wIhAPaQuvlbNrDJkaBIF6J4abRDUVUQujLnfSm7XblmnWZ3KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0dEjF%2BiYkhDubhrEq3ANCKTLm91E6BTv5AsTf4UStF36Ns%2FoBvSWZEVdFpUFeRHk2Bv1J0GZEytIDXtuV0GkQxOFjWk2zCJEk3S%2FCf97iZfCTR5LX1pS10DVt75k96Y20SB7Byv8r8J3W5wgXJKj53yNqnYtTck8iAHiTWl1wIhQFYYp1omIz87RZ%2BX66AJePN6j1hjpFmOlo0yZ8QAh2nAt7iFyoBMvYcA1JmeMR6H4AH6NhF11jxBTLRciAJXoqE%2B1FIo4Ts%2F6xL9abYf0A%2FbCp%2Bdm0hgl5Jo2hmNZQMjWJe%2B%2BWRjB9Lokcf4tdiFSenRY1eE7WkB4ZKF3OjmxzR35bDT3%2BFRdegYzTuSI%2BnrRd%2Bh3fbSoNhleGqr03hnzRmbUyTnjbM0Hfprak4UjEKAY68iiYjga5OEDUgVf7n44NAxgl1uBoZXJbyA1POZI7zJi8UsS3gP1RIJLxFjA1TWX4C4XOUNy9HLrh7Yl%2FT8ufN0HMHB0c%2FZDeUuLfuVImYAteVN1CZy%2BwwyAgQmUd8P6%2BygCUwwut%2Fe2uNMLeXG56sH8gDRFCHKlR3SXB%2BUMZHYl%2FPGxGHTPF%2FeH1mCzQM2%2Fd5Gdzn8VFsoAPtF0ci1LkK4%2F4N0%2BHNgnZPfHMpEhJHIvR8V22nIZxfzCy6M%2B%2BBjqkAeQio3ZzO7pxLSd3IozXQK0l5PfdZY2Begln7e%2FLEM76ugtggLhQBqqzzhydFu0R7vbHC00Jjnt%2BWsB%2FNZlPHGimVM1%2FUO7Gl%2F65uFBiDC3Cq9A0fG4yaCrOesiK%2BpsnCMtnLg8ymSeAxreszbpTlq1euUk%2Fv9%2Fq2wKtNLdwNPqqBgRS3tZ%2BMCpwQzbhNxwCcgJjrLYqxS8F4Dy77jjJLVFHMUAw&X-Amz-Signature=1d957f203373082ada07696d0131781227e894329b354214dab28ebe5888ca59&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
