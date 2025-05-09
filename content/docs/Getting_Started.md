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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEESE4O7%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmwAFgMlrqETjY3RkZNp4eshp17ChdF7ZJlmenrM1hMAiEAm7gI0TdH5U4ZPr9SGdJjhK7DrwSJ%2BkUVMFKNBX56p18qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3kWV%2FU8%2Fm%2FZXxUVircA3XiY9D5mcTIqMbBlEHhk5GU7Cvx57VRBuUxaBoXADaswa349cvKpEHDqE4EMWOrsqvYKfMexNdis2mpddBV7GS1kHzG%2BgUQQSf1hff0R7WALiCedWfP4GzHAmCMwoZvUlor%2BXsqQ30YWQ9Py73%2FyQArlll0anf2ai0GKp7I5BtCcWZ0H3YHKZXpIsTldUuujVKpzjOIcwmI4ftSCaOr7T5AUTU%2Bi69ZiXU1dp3K4Lpk2XnOOJjtgyLr5rqgFMCg3XIOZUDdIMFxHzD%2B3vWNWwpkJDU%2BqmJ4PhNRg0olGbVZy%2FLQ8sD8AueviA7abmSSYZ0FboXX4uEe09wMZ6%2F6CrrN%2B5puYbNiMO6LWCQ8Sn39mP%2BJ1QTnFNUf1j7luzSKcbzitWtwJtN5SncM1Xca1nPLakkkX2GgK0yODYp8ZSoXGbL6aLFjZlOxWHv4GPRLzoxmxkRVo6cPzxHXV4Zqj5WezIMJJwT%2BIjflcYFJKaIGjVhoC9iPeR5EuMsr%2FKGOHfEzR45jxJTWJlI8f7UQ6Z3FSKyU2OXHCKWbkhNhdYA3Ebdpxv7kZovW7JufyWpDDztoTAGzn%2FvlSvIHKDUPEtvrzAoTGRXDiOsFJVteXPXIqK5qmJbIu7kBxnhCML349sAGOqUBUtrlhLlHVOsJF2d4XH%2Fjg3PcsjjiUmuhS3coZ3E4RDAdzVxt%2BYFR%2F8B7uKX7zbkn8VkkuYkGfzZ5BIbEWUbnFVInhD2vOzMm8F5KDsd1Dsn%2F9eKc7aICUZa9M7rv85TdOhx7gzDoCDslyWVX1Xe28zBGJsTQKk0Jedu4ylTceM2RjoliHykiyOVQJ4GS5uGvukevBiEEIEvGbWmGMSKHCJziXCCN&X-Amz-Signature=85e4b611ef1c058f9d8069d60c76df559f4eb7be672ab1a45c425f0b0274bd4a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEESE4O7%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmwAFgMlrqETjY3RkZNp4eshp17ChdF7ZJlmenrM1hMAiEAm7gI0TdH5U4ZPr9SGdJjhK7DrwSJ%2BkUVMFKNBX56p18qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3kWV%2FU8%2Fm%2FZXxUVircA3XiY9D5mcTIqMbBlEHhk5GU7Cvx57VRBuUxaBoXADaswa349cvKpEHDqE4EMWOrsqvYKfMexNdis2mpddBV7GS1kHzG%2BgUQQSf1hff0R7WALiCedWfP4GzHAmCMwoZvUlor%2BXsqQ30YWQ9Py73%2FyQArlll0anf2ai0GKp7I5BtCcWZ0H3YHKZXpIsTldUuujVKpzjOIcwmI4ftSCaOr7T5AUTU%2Bi69ZiXU1dp3K4Lpk2XnOOJjtgyLr5rqgFMCg3XIOZUDdIMFxHzD%2B3vWNWwpkJDU%2BqmJ4PhNRg0olGbVZy%2FLQ8sD8AueviA7abmSSYZ0FboXX4uEe09wMZ6%2F6CrrN%2B5puYbNiMO6LWCQ8Sn39mP%2BJ1QTnFNUf1j7luzSKcbzitWtwJtN5SncM1Xca1nPLakkkX2GgK0yODYp8ZSoXGbL6aLFjZlOxWHv4GPRLzoxmxkRVo6cPzxHXV4Zqj5WezIMJJwT%2BIjflcYFJKaIGjVhoC9iPeR5EuMsr%2FKGOHfEzR45jxJTWJlI8f7UQ6Z3FSKyU2OXHCKWbkhNhdYA3Ebdpxv7kZovW7JufyWpDDztoTAGzn%2FvlSvIHKDUPEtvrzAoTGRXDiOsFJVteXPXIqK5qmJbIu7kBxnhCML349sAGOqUBUtrlhLlHVOsJF2d4XH%2Fjg3PcsjjiUmuhS3coZ3E4RDAdzVxt%2BYFR%2F8B7uKX7zbkn8VkkuYkGfzZ5BIbEWUbnFVInhD2vOzMm8F5KDsd1Dsn%2F9eKc7aICUZa9M7rv85TdOhx7gzDoCDslyWVX1Xe28zBGJsTQKk0Jedu4ylTceM2RjoliHykiyOVQJ4GS5uGvukevBiEEIEvGbWmGMSKHCJziXCCN&X-Amz-Signature=c78bb1d3f5e31191c41a868ac7ce15651021643dfd78505cd2f0c12386713e82&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEESE4O7%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmwAFgMlrqETjY3RkZNp4eshp17ChdF7ZJlmenrM1hMAiEAm7gI0TdH5U4ZPr9SGdJjhK7DrwSJ%2BkUVMFKNBX56p18qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3kWV%2FU8%2Fm%2FZXxUVircA3XiY9D5mcTIqMbBlEHhk5GU7Cvx57VRBuUxaBoXADaswa349cvKpEHDqE4EMWOrsqvYKfMexNdis2mpddBV7GS1kHzG%2BgUQQSf1hff0R7WALiCedWfP4GzHAmCMwoZvUlor%2BXsqQ30YWQ9Py73%2FyQArlll0anf2ai0GKp7I5BtCcWZ0H3YHKZXpIsTldUuujVKpzjOIcwmI4ftSCaOr7T5AUTU%2Bi69ZiXU1dp3K4Lpk2XnOOJjtgyLr5rqgFMCg3XIOZUDdIMFxHzD%2B3vWNWwpkJDU%2BqmJ4PhNRg0olGbVZy%2FLQ8sD8AueviA7abmSSYZ0FboXX4uEe09wMZ6%2F6CrrN%2B5puYbNiMO6LWCQ8Sn39mP%2BJ1QTnFNUf1j7luzSKcbzitWtwJtN5SncM1Xca1nPLakkkX2GgK0yODYp8ZSoXGbL6aLFjZlOxWHv4GPRLzoxmxkRVo6cPzxHXV4Zqj5WezIMJJwT%2BIjflcYFJKaIGjVhoC9iPeR5EuMsr%2FKGOHfEzR45jxJTWJlI8f7UQ6Z3FSKyU2OXHCKWbkhNhdYA3Ebdpxv7kZovW7JufyWpDDztoTAGzn%2FvlSvIHKDUPEtvrzAoTGRXDiOsFJVteXPXIqK5qmJbIu7kBxnhCML349sAGOqUBUtrlhLlHVOsJF2d4XH%2Fjg3PcsjjiUmuhS3coZ3E4RDAdzVxt%2BYFR%2F8B7uKX7zbkn8VkkuYkGfzZ5BIbEWUbnFVInhD2vOzMm8F5KDsd1Dsn%2F9eKc7aICUZa9M7rv85TdOhx7gzDoCDslyWVX1Xe28zBGJsTQKk0Jedu4ylTceM2RjoliHykiyOVQJ4GS5uGvukevBiEEIEvGbWmGMSKHCJziXCCN&X-Amz-Signature=8c2e563f04c426124cf8c5179140d10e80c8c39da3eca3d9e3a768da94407338&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2XQN6P%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6Fpkb3O9ZLYNXG%2FmNVq36qePqmU9PY04tiIzbQN4Q4QIgJKpbkCVuvk7lR2IGXyRlGRwnU9wr%2FoOoWtKA77vnXYgqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQl4slnXlB4v54AlircA3e9IWyNggZb%2BsDFlqLXfyK%2Fs1TlkCGu8YW6fvzh%2BPMSctcbGgLtap5sAozkQCjDjAgQRx3mI05EHcIiJsqY%2FsfWsrtK5ao5sB6U5hQ4Zb9wBoEI9hQvxFhp5%2BGOooICF%2BnQgJ6H0MYqbTDa0oZKFRfkwTBuAugBXwhAvsk55lDCrDzeBtebfBpGzlulzGPm3S6ya6MYYlzq9VGR8lc7U4Ht%2FTSj0aLvmHjalogmSw1mO%2BMijkFUMxRnYLoNd1zICDUWIoJZTl0vu3DtPBdft%2BuTWCtXFICn0Rfy%2B0JTEObWVKnL%2BbAWz4yn4bCElYbghSNCpIeSBObaH2PREbsYgvm6VJTvSP1fnhNeubBIKgpfHhhVIoqAQJ1o3cyUVXzxL7Eb0319q0bNrXZUKlrgPZqTz7zb%2FEUAHdZjDzou0LmCypYEUvfj%2FUN%2BpPVfhvQoNAFSY8x45la0tm8t4vj%2BvFcwpdNU%2F4i1FPRkag0HMp8eky6dj8%2Bm0cFN7QwVw19k4I6A2gTu%2BJCMwvDupTt2y7aRFmvUWTNllD9vCf%2FH7BPQx9B9zqR58TvVZPYgjrSAXGJR32opBFYauWJGQvxFJV8vT7yW8VRUo%2F0Yp5kvsaXK7LPHhJMk86Zj2B67MJf59sAGOqUBg%2FotkmwFWJQ%2BAQgEEb8gH%2FO1zpOLSLwL04TI6jjAIyar7EOYf8DdLHWvkBhkrZwcqJEwskfQ1oCe2PIklqBpkRKa%2BJA0Q%2BgduJ0445rAlCI9EqBoHcc%2BLD2oUKreVpG8OTFEKluXrauvO1aBSrhyjE5JfHPx5zl9%2B1T7cr4JN5CdAsTjYJPNHIWk5NF4kAQUcNxwuQ6AHBdw4sfCWjNSamx9Y5%2BE&X-Amz-Signature=2778285b9e9beb1bf70b02571d862ac0ca30db4fbd6f26d090338ce82b19ea02&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSNLGJ4B%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmyHrxa07drJD6OagKw0OTBeiV7FdigzHIznYZAg8CLAiEA0vr2nsAWgVNIwIEMPzVtf%2BWwmuIHwnK3pFMTopcFXhwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAp%2BILyQBvM0K%2FuvCrcA4GTkZakFbOrsCKf%2BaStarmmf6Cb3ldGxXnq0spenmI8n3vHhhCQB3o5THkWb4zR1MajhlpaHPdzBBmJMrrUiPkSP%2BWR2NK94JriJsEjCicS%2FwoMouN6Kumxs2YVzgVaKikOw6Wu7DhO2xI5coAyMFjIwtCl5TnsjUyju6YVBMnYbMH2P23XVCty6LncMixGICIWM3Z54iRWxgkWyGqKtLoPzyxgFKG6vAVO4HS2W%2B1Yj0D9gSNSKFY7v688Wi9klms%2FGqTd8zvKMJv3zX3zDlXj62JC5wR67vpNzCc3teDn5CeGgN%2BoCfQxl4oNULwczsmz379XEqQyBB4SzE9R%2B4FDsREtionbmwbhAsGLNcdgwy5g%2B5JCsoTUx0KFhPKwlClyp%2FMTF4Kn7wfSVj4f1Nr%2Bnq1zL3CmIla4G20l62KQWmfuKgFHFCUgV2WZs9gCvnT4lQNQ1KhSNyiy2VN%2B30bElpbjqvQhI15DRW6hBVlcuf2qRWm7J4%2Bk60ccE1VTG%2B9qqeRYWDn%2FyqUAWe8ZaZugH8v7UllUVPM5kopOOgDAgld6onO3URiW1MGqn5lZ2ZeFx64Wm8HDAgeey8J1kdmiV3eJRZIYJ6k0chHivNberacgpiEQO6l%2BM3tDMLj49sAGOqUBoKnSrftlyOIYVTXj%2B9DxY4r9pl%2FpcOdPdwfLmL63EQWJ2%2B98J8EKjJvzogOCSquhl5XF08BEBAy9%2Fu5WppJuHyPIUYDYhcslanrUR3vRx3hqUkiA7moYXAxQl1Nq%2FH1gPCZIrXaJyEhFtW%2FMqjQv%2Bh5RpR%2B8Dsfk%2BGRl6QcYI5NDb6gDFmNm9r7tVok2Ce57SMTjnt0Hl99hVkQtu70KT34btEL9&X-Amz-Signature=529f525a6d0ef76ed9e1157b46b76ec6d9fb912e22e8be9a4646771fd597ba8b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEESE4O7%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmwAFgMlrqETjY3RkZNp4eshp17ChdF7ZJlmenrM1hMAiEAm7gI0TdH5U4ZPr9SGdJjhK7DrwSJ%2BkUVMFKNBX56p18qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3kWV%2FU8%2Fm%2FZXxUVircA3XiY9D5mcTIqMbBlEHhk5GU7Cvx57VRBuUxaBoXADaswa349cvKpEHDqE4EMWOrsqvYKfMexNdis2mpddBV7GS1kHzG%2BgUQQSf1hff0R7WALiCedWfP4GzHAmCMwoZvUlor%2BXsqQ30YWQ9Py73%2FyQArlll0anf2ai0GKp7I5BtCcWZ0H3YHKZXpIsTldUuujVKpzjOIcwmI4ftSCaOr7T5AUTU%2Bi69ZiXU1dp3K4Lpk2XnOOJjtgyLr5rqgFMCg3XIOZUDdIMFxHzD%2B3vWNWwpkJDU%2BqmJ4PhNRg0olGbVZy%2FLQ8sD8AueviA7abmSSYZ0FboXX4uEe09wMZ6%2F6CrrN%2B5puYbNiMO6LWCQ8Sn39mP%2BJ1QTnFNUf1j7luzSKcbzitWtwJtN5SncM1Xca1nPLakkkX2GgK0yODYp8ZSoXGbL6aLFjZlOxWHv4GPRLzoxmxkRVo6cPzxHXV4Zqj5WezIMJJwT%2BIjflcYFJKaIGjVhoC9iPeR5EuMsr%2FKGOHfEzR45jxJTWJlI8f7UQ6Z3FSKyU2OXHCKWbkhNhdYA3Ebdpxv7kZovW7JufyWpDDztoTAGzn%2FvlSvIHKDUPEtvrzAoTGRXDiOsFJVteXPXIqK5qmJbIu7kBxnhCML349sAGOqUBUtrlhLlHVOsJF2d4XH%2Fjg3PcsjjiUmuhS3coZ3E4RDAdzVxt%2BYFR%2F8B7uKX7zbkn8VkkuYkGfzZ5BIbEWUbnFVInhD2vOzMm8F5KDsd1Dsn%2F9eKc7aICUZa9M7rv85TdOhx7gzDoCDslyWVX1Xe28zBGJsTQKk0Jedu4ylTceM2RjoliHykiyOVQJ4GS5uGvukevBiEEIEvGbWmGMSKHCJziXCCN&X-Amz-Signature=398ac5cd6fc9bfbc29813e9360d483f1b95a59ec2f9d70de44bb9f911b716069&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
