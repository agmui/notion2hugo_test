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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI32HC3N%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQC2FjVsc7TZqeoXyzizIVgITJLAfpeiPU8JaNKQSjnAxAIgKmtzJiDd7F1DA8ZMjKQ2XrrTNZttbTwrOKClcSqhmAgqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXjj8rJussmUNCyOircA0XvXntI0nItAHUxyZ60P0QFo%2B%2BEEJlGm1FdwziAZwnw0MRdgrB%2Bb3%2FdZ3AvnBDN%2Bpgf42Fut23tEOfmHr%2FH4DMShVZcWAruUchwK2mhjrJYXI2CPCbP7CwxZAk5HInJk9BAanWJlXTcTBVjcUj4NPeQb8DKMlMu2xilb51ukc9zMfm0qZ2T2qzUxU7ai5Kw5WWqBw24j8EDmjI%2BCyNweqaRWd20awMGddaTrqoC%2FF9mIYIke4Y1hin4vKpET3cFg%2Br4Hd8XfVjsOuGn6Xr7IPcuqmaE9FSI%2BeIDOTZpeG18AgKyPxw5cVU6CIAj9yuo1rVELI3yr2dxwJPHUrtU6j9qDORoQKhnWCD%2FIuhFu7HiJGEakvUr5wpa3YpDtV8JLLnnh3Pa6Oi8z1znBVfiG9sjYYkpFBoLueYwBfLLU9WZaaAYldd9AUc33e9t3F1KYSL4d6CxcC5M8OqeE5mXGLzy%2BxYde8d3omLvKBYGsVDD0iDCoH%2BC%2BGs%2BrBXs%2FMyi1mGmIxFXLoSTygjr%2FlH2%2BsA1DurT8aSuZiJo1R57tcqBaUtlPJeE2e9Z1mcxZtcVbIXo2AHcRoY1LG5leg8O0gzjAnY9sULKf0oeO6V4rayLJVhR0GGn2b%2F49eDzMLXgnr0GOqUBI9R%2BkgBbv6J%2FM075t244xHqRLpr2eUdTVW6c2p2qqmcD%2B3Y0%2BazruTRajnNRPm6Q1VD9zI6ti5oBtH7kVFCmIiuJmHfxFnLxsAtmOfN%2FYQdLxxo5nCoqMspjRjyZ6ICRyW4iJPmcSSoS4zsNQ3Pe8px5GMHzcCp75H2tW5oty0G2gUtpqgFw7CeTmBNqClD1KS%2FtkaCf%2F%2FR%2BgfjebDUQJlKzpRTF&X-Amz-Signature=8cb85653126147e726054a98d5ef08de7984de96771de8a0277a43c09374d987&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI32HC3N%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQC2FjVsc7TZqeoXyzizIVgITJLAfpeiPU8JaNKQSjnAxAIgKmtzJiDd7F1DA8ZMjKQ2XrrTNZttbTwrOKClcSqhmAgqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXjj8rJussmUNCyOircA0XvXntI0nItAHUxyZ60P0QFo%2B%2BEEJlGm1FdwziAZwnw0MRdgrB%2Bb3%2FdZ3AvnBDN%2Bpgf42Fut23tEOfmHr%2FH4DMShVZcWAruUchwK2mhjrJYXI2CPCbP7CwxZAk5HInJk9BAanWJlXTcTBVjcUj4NPeQb8DKMlMu2xilb51ukc9zMfm0qZ2T2qzUxU7ai5Kw5WWqBw24j8EDmjI%2BCyNweqaRWd20awMGddaTrqoC%2FF9mIYIke4Y1hin4vKpET3cFg%2Br4Hd8XfVjsOuGn6Xr7IPcuqmaE9FSI%2BeIDOTZpeG18AgKyPxw5cVU6CIAj9yuo1rVELI3yr2dxwJPHUrtU6j9qDORoQKhnWCD%2FIuhFu7HiJGEakvUr5wpa3YpDtV8JLLnnh3Pa6Oi8z1znBVfiG9sjYYkpFBoLueYwBfLLU9WZaaAYldd9AUc33e9t3F1KYSL4d6CxcC5M8OqeE5mXGLzy%2BxYde8d3omLvKBYGsVDD0iDCoH%2BC%2BGs%2BrBXs%2FMyi1mGmIxFXLoSTygjr%2FlH2%2BsA1DurT8aSuZiJo1R57tcqBaUtlPJeE2e9Z1mcxZtcVbIXo2AHcRoY1LG5leg8O0gzjAnY9sULKf0oeO6V4rayLJVhR0GGn2b%2F49eDzMLXgnr0GOqUBI9R%2BkgBbv6J%2FM075t244xHqRLpr2eUdTVW6c2p2qqmcD%2B3Y0%2BazruTRajnNRPm6Q1VD9zI6ti5oBtH7kVFCmIiuJmHfxFnLxsAtmOfN%2FYQdLxxo5nCoqMspjRjyZ6ICRyW4iJPmcSSoS4zsNQ3Pe8px5GMHzcCp75H2tW5oty0G2gUtpqgFw7CeTmBNqClD1KS%2FtkaCf%2F%2FR%2BgfjebDUQJlKzpRTF&X-Amz-Signature=e3c82b71f3599a57a8642b5ebc4ce6d7f9dd92288e782be61c9e00445c6aa995&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PGIUUZD%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIG9%2FQSC3Q7gdcWVJ1KFe7h0foUbQksUlDSETkACQwhlEAiEAqX7Dvz0vAnz%2FNy%2BTN88rSbk%2FfGenUBUPH5xrxMDXXScqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTdwDVqsjdKp1U5dyrcA9jBGwNdkDEox7aV5t18%2BUuf7f2jvb8JUjImM8qD8oLIWeSJTxFN171rkIv1bbolT9XSuuMKyp7qhYVO8lXGjXLUxWZxh2ys%2BNJq2KrQyy%2FO6rPShMahrHyhCd3lIQLvqw3PkU%2FRi5I3g0V9X7xwUetpPIn7EBXLbUfIQFLXXhB5r6WOc9oVLS5kkroGpRQ6mfMiDz3Qs4WdEBFJzEsGpEN3hXQelX1HYWH9dfsEvXV7kU6lda2Vy6Rm5jZfuJsTiJO%2BBHik3JR%2BNMcemkKjmSYprLG6Oyq%2Fkta9r2QZw4mY221ey1kN7XtjBMenW50ftEtWMJEgam17y%2FwVf9J8hv%2FXznllD1xXCc%2B9rA4M4Mmp07gfpZBlr1gSVxIC4M4lX97vSUUiQ2ZKe5TuyMhO0udOD7fLWKv2%2F05X4BE%2FtQVtf0Od%2BacNujHOLOUznzMKLGbxwhKNXGP7YvYuRs46fdWrCvT%2BqSnoEh70fRXo6MbRz9%2BUmGhtVKcclTczJZArUHgwddpkKUdL7M09QdfGX7sPG45%2BKm5lIVb0tj25X38XMMGXUTz6jTQIq%2FbZZvAidx8F8GRMpyNhEcO3fWVj8Moed9v8KNxjFAkmV6eH2mmszLKrxdIjwFS3%2F30sMI%2Fhnr0GOqUBRbgvXN4bTEoc9j8XqlyiFAKyExRZIC1sOetWD9rlPcvDq112omogQri8VGRHU2uaaeRLhn9xVby12AYa09emrmmxqO1yLxHck2dYavDSE6aYJQWZFw9px%2FDWg0pBbp8nzct1QpvIzmenvxcm9ZdQW%2BWAq7FJ010y67wj52bj6T8jPIntWRIiLZ%2BQNK751N%2Fed0efQdnQATGPfELdcLLwcrgt30fl&X-Amz-Signature=83eb54bc8b334558aab6fae7642a4eacb0e5e7279b8464ea80ef5c8324a4b05d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P5KK6YJ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIB0qpdz8GszqAlNgeBEtXsxPMwHkyK9ZURLvfCcOcrGrAiEA%2BOIHXZ%2BqK8VXzZUT81Niz9e0Kd0sjQM0LdX8cjLAqp4qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJJfqxl89LTMRD9KSrcA3fCT0Yk08SzJ02fH7G%2BRO6qt%2Fwp8FZQ3FNrsthIsRPuFIEq%2B8UQa9yICXE6T5E%2FNXUVb1d7BfCx%2BN6noIb%2F5YpPO%2BxkO7jioXLaAf%2FojPdeI%2Fo6T6RvJo6OloSkcEAJt0s1lzqdxmih%2Fldax77%2Bu5lac2PLJzdg%2Fm6kjvKlk99U%2FBFhgd4sGZweiGMyPQzjsEMg4N3%2FDphRtQkYxLp5dh7q62wS%2BuETqn75L8qaLgr%2FfungmHUHv4wQyjfZCKDoAYTdRBncsXGBKPa80JM1Lcj66ihaACbEoJ7PCqDAD7LFy6KbRKirIW611XWoEsfzYCHA11iuS0pAcSy%2F%2FZtbxZ%2FRlxvVTTBDC1Yrl6oPwMeD2fYtCvt51u7Gc5mAq71HLaz3dlRQGU6t47Yi%2BUUUd6RKtr6XoraBXPvQ7hjR9f%2BAQMUbcCrGmsT4xJ%2FU7q7RfFAoSONQakevgcjkLxFyYiYKYGrsaCCUD6Etr%2FszKNrmNyTCojiaGAu%2FETukB%2FMRQw5yzgdqYdbpA1uRSSDRP7IgjIyGWjDxQWjZzCJ6v9%2FdAqTCJDx7WTqLACGWujYMRsHtolw7Lsd%2BXf6KVyU%2FiI%2BGEEL8dseurOk4EhkEiXYwwF7ZvRtDH2a9R%2FE0MMLgnr0GOqUBV0QQiHUq3SkroDrt79Kh6UgEpQK9fcDv0YVnOCaXulKp2o9mxzu2LAZRYigsQReqJ1bdwtIwmfQlNYYSG9US7tYIF9g0h4roYoy6UDrtu%2BFoJaD3m5fnGSBffQO%2FtJ03xVgO50msBOinXv4LQfrVrSAixW6jV4rVgi2NmN84mEHEfUddECVH2Pdj5HVs%2FBxATQyzViEGhRRrNLPV%2BBynggVT1QQ7&X-Amz-Signature=fb13ceb108405229c6445f1fc88e7f41e89b7e0ad7c0cb09765a30d1f104a847&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI32HC3N%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQC2FjVsc7TZqeoXyzizIVgITJLAfpeiPU8JaNKQSjnAxAIgKmtzJiDd7F1DA8ZMjKQ2XrrTNZttbTwrOKClcSqhmAgqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXjj8rJussmUNCyOircA0XvXntI0nItAHUxyZ60P0QFo%2B%2BEEJlGm1FdwziAZwnw0MRdgrB%2Bb3%2FdZ3AvnBDN%2Bpgf42Fut23tEOfmHr%2FH4DMShVZcWAruUchwK2mhjrJYXI2CPCbP7CwxZAk5HInJk9BAanWJlXTcTBVjcUj4NPeQb8DKMlMu2xilb51ukc9zMfm0qZ2T2qzUxU7ai5Kw5WWqBw24j8EDmjI%2BCyNweqaRWd20awMGddaTrqoC%2FF9mIYIke4Y1hin4vKpET3cFg%2Br4Hd8XfVjsOuGn6Xr7IPcuqmaE9FSI%2BeIDOTZpeG18AgKyPxw5cVU6CIAj9yuo1rVELI3yr2dxwJPHUrtU6j9qDORoQKhnWCD%2FIuhFu7HiJGEakvUr5wpa3YpDtV8JLLnnh3Pa6Oi8z1znBVfiG9sjYYkpFBoLueYwBfLLU9WZaaAYldd9AUc33e9t3F1KYSL4d6CxcC5M8OqeE5mXGLzy%2BxYde8d3omLvKBYGsVDD0iDCoH%2BC%2BGs%2BrBXs%2FMyi1mGmIxFXLoSTygjr%2FlH2%2BsA1DurT8aSuZiJo1R57tcqBaUtlPJeE2e9Z1mcxZtcVbIXo2AHcRoY1LG5leg8O0gzjAnY9sULKf0oeO6V4rayLJVhR0GGn2b%2F49eDzMLXgnr0GOqUBI9R%2BkgBbv6J%2FM075t244xHqRLpr2eUdTVW6c2p2qqmcD%2B3Y0%2BazruTRajnNRPm6Q1VD9zI6ti5oBtH7kVFCmIiuJmHfxFnLxsAtmOfN%2FYQdLxxo5nCoqMspjRjyZ6ICRyW4iJPmcSSoS4zsNQ3Pe8px5GMHzcCp75H2tW5oty0G2gUtpqgFw7CeTmBNqClD1KS%2FtkaCf%2F%2FR%2BgfjebDUQJlKzpRTF&X-Amz-Signature=790c7e0778e3bd7fe0d9196b09145a442931c816e665fa16d9a37507c643c166&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
