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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVJCS5F5%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCT3g6NEGTWcnFnad%2BHH7ISHcNKbUGCb5q5zbBGazDnRwIhAMyZYQLti5mKFYYVL7S757SEU%2BH3DntzJvIz4zHS32mdKv8DCCsQABoMNjM3NDIzMTgzODA1IgyMQzy3aXB7ikrFMz0q3AP9KbkZ4NzcQ22zhFPYyLKvim9HFSrw9YJHcS1hBz2bGQxF%2FokYtf91wL3vdT9LytS8eT1CELslSKAI84Ci0pib4xwJ3bpbXpDHuIRd4jzcdepYVfwwL7s4F3m1drVCpF5BxOyZP4v4B%2BwL88ojeEK0ueY9dUiknxQ2BBScUkiVvIzTlqMQ8RzwvR0JwhO110bWf2JVTHMywFTvbR8mXSAx2Zd%2FQRT9M1fintIUK%2FSGzCFaz34zT5fXgKSvB9csE7mK3k5mhH927pI8QlDvyHJoCee3x8yAfc4142jYTCetrS90kbzEa5EAcvhT6SxLos7%2BMYYGPTy8gnJRihUxNE5NbaVu0Kye%2FbWsy%2FjaXo5zXPPBF6MnsKXotcJarU7WL%2BuN%2FcVrV9b4KsTWy5d9sRuhQU3ZLCToQ3HT5vBbn1SOWaFisxB6nwIqQUKMaoYNunTluwuD0o4XJx%2BXsR1dDgPhrnITr9MSfFXnBaKl72ErpNjDFf6Lk7%2F%2FTf99rF2EN1fWbgOVbMUhdOHG953BpC4BD3em9EK21GhSBzobd2rXk9K5CqFxWhxwIpUHq%2FscbGi2bVYNt8G4pPeDjRAIGIU6CmHNU6FYqD1ToKSh%2BxrKLnek%2Bc%2BXScKGkjbtxTC4y4e9BjqkAYenP1fIGKel%2Floxw5dukcxSuXRjOEOu7CDonQ0ikCaa0W3qK024tOeCcT1wc66Eh0KRHWQbcgotZ0FhMmXypFdjv2A8jrOxVrGm9CXQ2yTk3%2FmHXgejTCsGNt2H%2FqpF3TnB2cLLRuYpCZvKF1smv7%2Bl7CC2wbqRX5UO5ebIr%2B1I8J0Fm5%2BJ5BSit7waZSzwYLU53vhhkFfLMW9zfTy93AQK%2Btec&X-Amz-Signature=84e62e4329bb76b0585734a3e7f871c3b35365dadae2b9ead481a991bbc9797d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVJCS5F5%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCT3g6NEGTWcnFnad%2BHH7ISHcNKbUGCb5q5zbBGazDnRwIhAMyZYQLti5mKFYYVL7S757SEU%2BH3DntzJvIz4zHS32mdKv8DCCsQABoMNjM3NDIzMTgzODA1IgyMQzy3aXB7ikrFMz0q3AP9KbkZ4NzcQ22zhFPYyLKvim9HFSrw9YJHcS1hBz2bGQxF%2FokYtf91wL3vdT9LytS8eT1CELslSKAI84Ci0pib4xwJ3bpbXpDHuIRd4jzcdepYVfwwL7s4F3m1drVCpF5BxOyZP4v4B%2BwL88ojeEK0ueY9dUiknxQ2BBScUkiVvIzTlqMQ8RzwvR0JwhO110bWf2JVTHMywFTvbR8mXSAx2Zd%2FQRT9M1fintIUK%2FSGzCFaz34zT5fXgKSvB9csE7mK3k5mhH927pI8QlDvyHJoCee3x8yAfc4142jYTCetrS90kbzEa5EAcvhT6SxLos7%2BMYYGPTy8gnJRihUxNE5NbaVu0Kye%2FbWsy%2FjaXo5zXPPBF6MnsKXotcJarU7WL%2BuN%2FcVrV9b4KsTWy5d9sRuhQU3ZLCToQ3HT5vBbn1SOWaFisxB6nwIqQUKMaoYNunTluwuD0o4XJx%2BXsR1dDgPhrnITr9MSfFXnBaKl72ErpNjDFf6Lk7%2F%2FTf99rF2EN1fWbgOVbMUhdOHG953BpC4BD3em9EK21GhSBzobd2rXk9K5CqFxWhxwIpUHq%2FscbGi2bVYNt8G4pPeDjRAIGIU6CmHNU6FYqD1ToKSh%2BxrKLnek%2Bc%2BXScKGkjbtxTC4y4e9BjqkAYenP1fIGKel%2Floxw5dukcxSuXRjOEOu7CDonQ0ikCaa0W3qK024tOeCcT1wc66Eh0KRHWQbcgotZ0FhMmXypFdjv2A8jrOxVrGm9CXQ2yTk3%2FmHXgejTCsGNt2H%2FqpF3TnB2cLLRuYpCZvKF1smv7%2Bl7CC2wbqRX5UO5ebIr%2B1I8J0Fm5%2BJ5BSit7waZSzwYLU53vhhkFfLMW9zfTy93AQK%2Btec&X-Amz-Signature=0a483255928cad0f77d04d2134670dcd91bc7f6d2363451f5936a8ad2a17f311&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6NIRF7I%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBGNuXeWetkGHap48fJLRk0zI%2BXLu5syQ3vIwTgD0KsUAiEA1gn6YPt91AEwMmFWYS4Wgz96yj72sdRmh81FQkH%2BiZ4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKeZXplZ28acLUYdbircA2IEkpQW6zMhA9XMn8xmQp7pts8gviFK40cpiMkBLq%2FfFLlYhAhBTJ6LFmHk5F2pJNH5%2Bnjzb4oaDXB7q46COu08oMQVE8pe0NlB0ovuygQLwnZF53Dt1aPjW8UhxFGv6D8FC2DZudZLexQHurxVPQgW0wbYPi61p6f9YSB6%2FuPV8xENvqwvK%2BiqGFZvc6OOWD3Pn1GC8b%2BHR6ISXpquC9wmmxtBuyIX4IMcXE0eW%2Bk%2BhHfyNUbJIoYgUR0bgeaXdNTiWaZMVaP0sKCpaQ5Y6vtRdb5rRTn%2FTf9n0xwTPiwSOmajfd%2F2R05oKigUJdqDRvTvV3IG0KiQscTPOb2MDfv7cI0XF%2BvrIMyYxWDzUsrLGzjvdGampHeMaqyF7OUMDnHnorF2IkL050P90sgrDLp9ctXWgCnPlMF738ZU9rMXj7QgmgA5UqP%2F5TndNEA3VTJzcDbRzLa2z3eUl8BKFsspoNhBxp9F0%2FdM%2FHcNjrPn4Geg0ht2nSt95si%2B0xvk2krW1310Q0gmLw54Ykq6fblaRV%2F24%2BqoV8x4PGXsFkuyf3cnAJPQ09JpDXBqmnszMePRFmqFrqYsVyyhzdD04I5f6r2R7eKGwVhaZtLetgMcGDuM0QfG2bio8jFxMMjLh70GOqUBp5jEJgmVZGe7gZCmKG%2BzAgitvlZUhIjERme14pnBb0sqBk0TWzzujMUeXmsCqRl1wvk4zWQPwYNzqqxAefTroTF95TyEurtJfv9bA%2FKZ5yf2JQRQPJuYHYbcspIc3frc7gVkucGmvrnC3%2Fte0VhTBxj26Ky3AeTZGaIL%2FJ7qLEtrQqMCr%2BE1TWquJa9Zyn6K4PSNtJh026LlomcEfpEXGTf%2Blt%2F4&X-Amz-Signature=8129583713757b806071c4cc69b290af3bf9e9a148d698c66bc3ee94df31b1d5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKLRGTA6%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCtv94T9B8zPVlXhCAZ0Apvhw%2FciS%2Fn3mjtPMbY9CjqPAIhAN%2Bj2pjg%2FCXryF0%2FTrw6oE5rFT4Ou%2FLKCASpnrWq0VMsKv8DCCsQABoMNjM3NDIzMTgzODA1Igx3bdr3%2FM%2FEyVakV5Iq3AMD7qB29F8XujM1x5I9YBL5E2rY8dNNcG6C0uOIvyu3KKBQ1q45i5tu%2B%2B8ZhCFNqyLkoSxMwPxBYtPAadvjIF%2FPV54PNCPl5TsIOTw0RgDyurXnHfm0Y%2B5K8ThVb4SNTlbRngmrGhIGkvWaAFLdzLdpYaRw6aHLhV73JrODgKTTylpaXbjrqU5ryyoaywJUNU0%2Bha5BmLdZxB97LDYFESQpj7Z%2FRj4ru13XWD5rJOxQIdKiCFm1ap8tFqi01noZPq%2FUg1JRueNxvsO5Mmd32pkFy7PEw8dyWl6xWC2piwpsSgta%2BvuP3%2FJvoM64XfL1olVAGaHSE5ZXyAI63AhwBxrP0iO9087KGPlLkena3JvoaLVp6M%2BnL1E%2Bynxx1Y6WDGitldMmqbYFQstd8unm7tux2It19SGPKYRtR3PIybJDGZ%2Fz1%2BJa9OQHLaS5l0jIM1Jb36YBmqGrSpgTNA%2BOujZc37RNux1BTK13ObdAJBIIP%2FXcYV8O7tx%2F896q4D26q9fD7yGfLrwJpDwfUMvqzl9nJmWp1Ltqji4JegfLUyif%2BVjwYVQRd0brPgSM8w6VnK8eu70v%2F7iBnHBtrothMbnmcregWdej5I5mgI%2Bd6wdvEHlSH2%2BB6fNbNAW72TDKy4e9BjqkAaFWWYB%2BItwxw3uoVbWl3qObRarbvWRwlXZBIEfn7iq8UAPtSPppoX4rKxNq15rjcNPqmPxQbjxEldWAoY0Dyb99Vt8DAV9a5T%2BAY9B9xSWdDNL6%2B119HyNzClOSy%2BEuda8d%2F3L16p3F4SQvPR6Yv6skBlFlLH4mEHleOECSCPC5J%2FXD2WeGMq30mkw8qodj%2BhKEyM%2FdV1A4GQVf7NLHWvzsbn%2FY&X-Amz-Signature=7fdc3671c9b035f8aceeb1aab8c55d30c5b71e5c115f14381eac5841b92c2590&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVJCS5F5%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCT3g6NEGTWcnFnad%2BHH7ISHcNKbUGCb5q5zbBGazDnRwIhAMyZYQLti5mKFYYVL7S757SEU%2BH3DntzJvIz4zHS32mdKv8DCCsQABoMNjM3NDIzMTgzODA1IgyMQzy3aXB7ikrFMz0q3AP9KbkZ4NzcQ22zhFPYyLKvim9HFSrw9YJHcS1hBz2bGQxF%2FokYtf91wL3vdT9LytS8eT1CELslSKAI84Ci0pib4xwJ3bpbXpDHuIRd4jzcdepYVfwwL7s4F3m1drVCpF5BxOyZP4v4B%2BwL88ojeEK0ueY9dUiknxQ2BBScUkiVvIzTlqMQ8RzwvR0JwhO110bWf2JVTHMywFTvbR8mXSAx2Zd%2FQRT9M1fintIUK%2FSGzCFaz34zT5fXgKSvB9csE7mK3k5mhH927pI8QlDvyHJoCee3x8yAfc4142jYTCetrS90kbzEa5EAcvhT6SxLos7%2BMYYGPTy8gnJRihUxNE5NbaVu0Kye%2FbWsy%2FjaXo5zXPPBF6MnsKXotcJarU7WL%2BuN%2FcVrV9b4KsTWy5d9sRuhQU3ZLCToQ3HT5vBbn1SOWaFisxB6nwIqQUKMaoYNunTluwuD0o4XJx%2BXsR1dDgPhrnITr9MSfFXnBaKl72ErpNjDFf6Lk7%2F%2FTf99rF2EN1fWbgOVbMUhdOHG953BpC4BD3em9EK21GhSBzobd2rXk9K5CqFxWhxwIpUHq%2FscbGi2bVYNt8G4pPeDjRAIGIU6CmHNU6FYqD1ToKSh%2BxrKLnek%2Bc%2BXScKGkjbtxTC4y4e9BjqkAYenP1fIGKel%2Floxw5dukcxSuXRjOEOu7CDonQ0ikCaa0W3qK024tOeCcT1wc66Eh0KRHWQbcgotZ0FhMmXypFdjv2A8jrOxVrGm9CXQ2yTk3%2FmHXgejTCsGNt2H%2FqpF3TnB2cLLRuYpCZvKF1smv7%2Bl7CC2wbqRX5UO5ebIr%2B1I8J0Fm5%2BJ5BSit7waZSzwYLU53vhhkFfLMW9zfTy93AQK%2Btec&X-Amz-Signature=8ae6d7e6aeb20581d4e4e3c8efa3890553bcd13e6e810cde80a27a0b5b4077ff&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
