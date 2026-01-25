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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEVQ5KUV%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCBMZtRZy8eUDu1vtcGCXYQGYAcEbLzU2PTXMHNUijMIAIgDjEOSSXp0dHLPOnAu2GBTwHYQhRnOtDSer78If06H7Uq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDklS5yky0JQdxSnPSrcAx4UYvTRUN9xmMxn9ldGmDhpRLlVr3mkU6NjAJZDObdqZngJhP1T6bnjnPqG4WC8Ssuuo7LJraTNE3JkfnZSetoHnDYLUUIjoGmR3FvV40mWDReMn56qalOfi8QHrKl9zES7Ufu0%2FEUlmJevikM%2B9ENFuDzM1U6VtxsihWK69DK6LVV2bXI%2B0Y5goxGHGqjI0crPihf1DId0lLAW3iPyaL9%2BaojNxwHF%2BEjrPzvVJnsLSj%2FgdTH0zD%2FkueB4ARIGOEy%2FX2g3xThyVSf0tPmOj%2FqEV9b7T%2BVpbK1EAxrjtRg9qdPfrh0oKbLsF8UNBlmYWqoY09oo8258d3xRdTngSC6Zb%2FU3NTM97OGiKNkdKh6J88ytIoV4DzVLQfDKZ5MfaL%2F0RCnDFooIcZ%2FrM%2Fim7DoDAgygABwuKDa5PeUp8SshCnU0SVtg4SjwSgF773t2C2C2qDJA%2F%2F2ECUlpo9HnSTQQPPYdabKC8IxTg6HbNBG0R6QbuRzuOAFGVUhHogz8nh5f3qWZ06x8vk5S3amIbNhVKhuvsFSw%2Bd%2FcKlfFLn17hjjwXZZSn%2F5ZrsIBGG9rPTmugN2Mwp%2FUFSLJVr%2FnDr4guiiBcfzTIjB%2FvQ9bGDVkwSniK04A0H70sJEpMN3v1csGOqUB0v1hue3IUAj5iXIOE6py2TED6%2B9218HkZvHek46qp1wJ9xoBNChJPeRq8ubDUXdu7wB7UpRXulPIOJgCrDFipmwJWq9A4ZQQIdZNyiTdYK99y9Z1lXENRIz4vorglmrpwGfIXv2JH%2BxHopNTXbW97O%2BDPwD%2FGdHXXL%2FAMjUubVgkRllWQMTlSvHYSGh7GLJs2o7C8YXeiPB7AyNXn9rqTORYUSJq&X-Amz-Signature=df209782fc2569c23112abe91b6531ec3df86e0019ce3b32abe1a1413d6eec8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEVQ5KUV%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCBMZtRZy8eUDu1vtcGCXYQGYAcEbLzU2PTXMHNUijMIAIgDjEOSSXp0dHLPOnAu2GBTwHYQhRnOtDSer78If06H7Uq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDklS5yky0JQdxSnPSrcAx4UYvTRUN9xmMxn9ldGmDhpRLlVr3mkU6NjAJZDObdqZngJhP1T6bnjnPqG4WC8Ssuuo7LJraTNE3JkfnZSetoHnDYLUUIjoGmR3FvV40mWDReMn56qalOfi8QHrKl9zES7Ufu0%2FEUlmJevikM%2B9ENFuDzM1U6VtxsihWK69DK6LVV2bXI%2B0Y5goxGHGqjI0crPihf1DId0lLAW3iPyaL9%2BaojNxwHF%2BEjrPzvVJnsLSj%2FgdTH0zD%2FkueB4ARIGOEy%2FX2g3xThyVSf0tPmOj%2FqEV9b7T%2BVpbK1EAxrjtRg9qdPfrh0oKbLsF8UNBlmYWqoY09oo8258d3xRdTngSC6Zb%2FU3NTM97OGiKNkdKh6J88ytIoV4DzVLQfDKZ5MfaL%2F0RCnDFooIcZ%2FrM%2Fim7DoDAgygABwuKDa5PeUp8SshCnU0SVtg4SjwSgF773t2C2C2qDJA%2F%2F2ECUlpo9HnSTQQPPYdabKC8IxTg6HbNBG0R6QbuRzuOAFGVUhHogz8nh5f3qWZ06x8vk5S3amIbNhVKhuvsFSw%2Bd%2FcKlfFLn17hjjwXZZSn%2F5ZrsIBGG9rPTmugN2Mwp%2FUFSLJVr%2FnDr4guiiBcfzTIjB%2FvQ9bGDVkwSniK04A0H70sJEpMN3v1csGOqUB0v1hue3IUAj5iXIOE6py2TED6%2B9218HkZvHek46qp1wJ9xoBNChJPeRq8ubDUXdu7wB7UpRXulPIOJgCrDFipmwJWq9A4ZQQIdZNyiTdYK99y9Z1lXENRIz4vorglmrpwGfIXv2JH%2BxHopNTXbW97O%2BDPwD%2FGdHXXL%2FAMjUubVgkRllWQMTlSvHYSGh7GLJs2o7C8YXeiPB7AyNXn9rqTORYUSJq&X-Amz-Signature=a335dadf1e3e11a6ba38e7aea1a159513f67e051a42e3781b2ca60529f874b22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEVQ5KUV%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCBMZtRZy8eUDu1vtcGCXYQGYAcEbLzU2PTXMHNUijMIAIgDjEOSSXp0dHLPOnAu2GBTwHYQhRnOtDSer78If06H7Uq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDklS5yky0JQdxSnPSrcAx4UYvTRUN9xmMxn9ldGmDhpRLlVr3mkU6NjAJZDObdqZngJhP1T6bnjnPqG4WC8Ssuuo7LJraTNE3JkfnZSetoHnDYLUUIjoGmR3FvV40mWDReMn56qalOfi8QHrKl9zES7Ufu0%2FEUlmJevikM%2B9ENFuDzM1U6VtxsihWK69DK6LVV2bXI%2B0Y5goxGHGqjI0crPihf1DId0lLAW3iPyaL9%2BaojNxwHF%2BEjrPzvVJnsLSj%2FgdTH0zD%2FkueB4ARIGOEy%2FX2g3xThyVSf0tPmOj%2FqEV9b7T%2BVpbK1EAxrjtRg9qdPfrh0oKbLsF8UNBlmYWqoY09oo8258d3xRdTngSC6Zb%2FU3NTM97OGiKNkdKh6J88ytIoV4DzVLQfDKZ5MfaL%2F0RCnDFooIcZ%2FrM%2Fim7DoDAgygABwuKDa5PeUp8SshCnU0SVtg4SjwSgF773t2C2C2qDJA%2F%2F2ECUlpo9HnSTQQPPYdabKC8IxTg6HbNBG0R6QbuRzuOAFGVUhHogz8nh5f3qWZ06x8vk5S3amIbNhVKhuvsFSw%2Bd%2FcKlfFLn17hjjwXZZSn%2F5ZrsIBGG9rPTmugN2Mwp%2FUFSLJVr%2FnDr4guiiBcfzTIjB%2FvQ9bGDVkwSniK04A0H70sJEpMN3v1csGOqUB0v1hue3IUAj5iXIOE6py2TED6%2B9218HkZvHek46qp1wJ9xoBNChJPeRq8ubDUXdu7wB7UpRXulPIOJgCrDFipmwJWq9A4ZQQIdZNyiTdYK99y9Z1lXENRIz4vorglmrpwGfIXv2JH%2BxHopNTXbW97O%2BDPwD%2FGdHXXL%2FAMjUubVgkRllWQMTlSvHYSGh7GLJs2o7C8YXeiPB7AyNXn9rqTORYUSJq&X-Amz-Signature=bf74b6fa1c5217ab9b0431f8bb3ec33f630cf1044223674e4fd023954533fb62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E5KIEJV%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCxSx%2FtjQl1AQ9xugkimIfaee6olreIHHT9nsTn2b%2F9uAIgAQZbHyaRSptQHub4yjSYO%2FrWO1StSaky6JgmQt%2FQQ%2Bgq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDK%2BRgArikUSLCtT7IyrcA2LhfuUwLizqxsiZkkNXVvNVkNGRYUWtVQ5i2D3CjMjAI%2FdlqxL2Ta3GdzXPEstrn%2F0jfc0Aga3UvZGCMaa582VOIhHFCwyRf3P1X%2FeFhC7VMrO9gROJ5LLfgK9vfvpeARh96%2BJEuFqhPtLnG6%2FJoA67M%2BFntY07xUrRGCe%2BWYqhQ7viCaQ1YfYaU%2FU5wZfvHnTbYlcE15EuWGkNG9iYgyCowZQcrbACou0gmXfsZ1w%2B27Ha7wUcNGJmzX0GBSI2hS5pZ9zE4ry%2FRPNYYlSJtL49pxZDNnulbtJy%2BQdtZ%2FupsQg%2Bb9eyObIx61%2By5bLSMJET%2B4AFoEiQGaewBvTfC4MCyj3aOVcRTJwBz5fe6g26dKB92jzJQRS3bzdzfNtjZjQYT8JDBU3BKrjZxBCx4WlIIxhy2Imtk1BrA8aeXf%2BTYcuJoQE2C77ugB5Mc%2BGOXdl9ImlZV0ur%2Fbhhj6XMS0Zat4xSUJWCSrxtIthV3wWE%2FTesDgJOLzWDzUQ4iXPx1iDbO35poY%2F81EyVKDCRqIkTu9Yq8GfSIaP4Cu%2BN%2FDVK%2FcQOr6GbVrCm0YjL71IGwstvnw3A7p7nh4Kb1Wpc7Zk9uRO4ARN%2FkHllKVaaEfre2ceLPSeuaE6oztD2MPnv1csGOqUBX4x0S5ayn70oduLhcLOvLTIW4wc7ol3EskDn9SlQqfnfuTKyN6MKFZI0ZZ1PY1s6NEkje5r6VKD%2F3cHwRB2zoP6jk7FNE1%2BTPqCLDLK60VYf8gaUqUUOAbbN2SlYLlVJQQDUT3kiRidLPUNY%2Ba%2FV4jsW4oJYyQQYR0VkvEb8Sy1w1glKwelIEsPQan2%2B9j23DOrRUTEs8Sx4YITVyBtbzSb2qcG3&X-Amz-Signature=1b59e5c5b19ffcf7ac5a3df4070cf8b28772d25a9b659abc6db80631cc7701c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKSZQW6P%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDZR9PE2p4f2OVtnbQFT4%2F4d4K32yrvHHDRb9DiXOUuMwIhAIAwLM3JVYnXHQPUynkZ0L2Ww81jaDQ%2FdlFM4jsM6nkWKv8DCBsQABoMNjM3NDIzMTgzODA1IgyjfLiG%2FF%2FhTpEpYngq3APVZ%2Fg%2BLBTGSiuf%2BHxdsFsqUl%2BGy7%2FsZIRTW4uvz%2F3Fo2R0JooX1OI06sFeksc8%2Fn%2BMeWB%2BWn26e82%2FxXTKFS0ueJd8Emd3copTB3Qa2HM71rw1P5VrfdK4uiWon9NTVffvC8qwJcMlq248J0%2F3brW0o%2FL79rqKZ%2FPh%2BbB5IAA00tWZ30ybe%2F1i2yFb7M9NoegykwJKVqFL1YVRUgDYkUlqlj6OEGUg5DOkMbUjqZwsnbJ4aomogfC8l%2FND0ryLtzZbKq9TpJDQHpEu%2BdJ%2FCowi1Mb7Rws3AEvhuLCoBRjVu9HIPVMyOZcyP%2BHnxFdmkRXbDj%2Fy2s%2FSjwQzY66%2FqdHmh5puEx%2BlwzHEyksVE9N4DCJg%2FgpoAvHiCkwDmK35XVC9HE6W6WrfMxFH%2FTFiWU3IT%2FCU1s9a4CK1VsRxda3OEL265P71gQQxzlgaEGJJFLXjYjGtsGxoT3bJRvos3QfoE4qWoaW%2Fw2OhZENH5mRpnMpQsLufDHJXw905hbkXy0cWydi34IjUVc5LF7Wiu%2BIKKXwDMWcI%2FYp%2F%2B%2BAtswmrTK%2Fjf1CJn04SHOFYndoU9YgteTt91a2Y7JUqnsyykGPMrcbbgUC2GeGzqrEWp%2FrMAObZ97L7x0n5Y4Ey%2BDDI79XLBjqkAZ52zBwKoJRBbnZ92Pq%2FYsuqBxkWwGbUutXLZJjuCads%2Ba7FwY2C2%2FwaVmxu5vBaWIu54tnxmH4ebAqnOdkZ8xVrqRpB53StOmAeXvLFw9mGZ0HYJ0knHLZi8FcSLZ2DZG4G9ZwbK7nHZ0cwXePJyfTJxqVH1YT8nhoDYX2V0ZLMYh47ewoAC%2BWi3ODcAPMXMNIydrbVqeWZxT9iI5GIwootMyH4&X-Amz-Signature=a57ccc78af28fd0f98e438e39f12d52ce4d3a7dfa28e6d4406d393cccf27fa34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEVQ5KUV%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCBMZtRZy8eUDu1vtcGCXYQGYAcEbLzU2PTXMHNUijMIAIgDjEOSSXp0dHLPOnAu2GBTwHYQhRnOtDSer78If06H7Uq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDklS5yky0JQdxSnPSrcAx4UYvTRUN9xmMxn9ldGmDhpRLlVr3mkU6NjAJZDObdqZngJhP1T6bnjnPqG4WC8Ssuuo7LJraTNE3JkfnZSetoHnDYLUUIjoGmR3FvV40mWDReMn56qalOfi8QHrKl9zES7Ufu0%2FEUlmJevikM%2B9ENFuDzM1U6VtxsihWK69DK6LVV2bXI%2B0Y5goxGHGqjI0crPihf1DId0lLAW3iPyaL9%2BaojNxwHF%2BEjrPzvVJnsLSj%2FgdTH0zD%2FkueB4ARIGOEy%2FX2g3xThyVSf0tPmOj%2FqEV9b7T%2BVpbK1EAxrjtRg9qdPfrh0oKbLsF8UNBlmYWqoY09oo8258d3xRdTngSC6Zb%2FU3NTM97OGiKNkdKh6J88ytIoV4DzVLQfDKZ5MfaL%2F0RCnDFooIcZ%2FrM%2Fim7DoDAgygABwuKDa5PeUp8SshCnU0SVtg4SjwSgF773t2C2C2qDJA%2F%2F2ECUlpo9HnSTQQPPYdabKC8IxTg6HbNBG0R6QbuRzuOAFGVUhHogz8nh5f3qWZ06x8vk5S3amIbNhVKhuvsFSw%2Bd%2FcKlfFLn17hjjwXZZSn%2F5ZrsIBGG9rPTmugN2Mwp%2FUFSLJVr%2FnDr4guiiBcfzTIjB%2FvQ9bGDVkwSniK04A0H70sJEpMN3v1csGOqUB0v1hue3IUAj5iXIOE6py2TED6%2B9218HkZvHek46qp1wJ9xoBNChJPeRq8ubDUXdu7wB7UpRXulPIOJgCrDFipmwJWq9A4ZQQIdZNyiTdYK99y9Z1lXENRIz4vorglmrpwGfIXv2JH%2BxHopNTXbW97O%2BDPwD%2FGdHXXL%2FAMjUubVgkRllWQMTlSvHYSGh7GLJs2o7C8YXeiPB7AyNXn9rqTORYUSJq&X-Amz-Signature=fb9deec70767f4c8c16ac9c623941e1a4d6cee6306f31bad01c5ffc0c44462c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
