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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE5GPHUE%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIGpE%2BCCIuJtkQ2c%2FPauSlLdZ286Y4HXj5U9pZ25b%2B8KWAiEAxiqy4Nsuz1J2juc6DBEKqzFhEfpTMHLK7PNPEmuuYf0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDEjCUMmXUW677DDz%2BircA8%2F53FTQhAYplZb8S%2B0TgVgrEF9JFubtSodpEEv5dpBRg29kjZRWRBGrQYpeGgSdaWfkIflt5mvluS0d%2BGuP%2FJPvaIB6R0dWcdUh8RNiUx7UUk2MRbRobtaj2YrBfIEKcQUGrfwjtZ1udf0RmmmJJepuE%2FszjgMbIfV%2BpU85nSOFxOdUQfJnzh7Qkd8T813hdAt7T%2FzfE5uqmywPfv6CUEo6UW6Cp13ttB9%2FrH8F8xS28eQbJ7T7tbos0U4WlSPHMf3ZKsprP2%2F8WFcMekDkWnirM6QfUeBanLU38Ri%2B8Dccsa90SzAjJIlRqdNPJymBg5LZuj7JJOG%2Bta8hUgpu3YJg04V%2BzVNjOBZ9eDheuG4SCh4ZMUiuObJeyI73xGHfesRv16sViPpK%2B6NchYHCQ4v9Qg%2FCza63cRH%2FqNuD9T8%2BPukBy24VGKQP0Bl%2BZ5cZb748dleJr6ut7EdqYi4m3vhY9HTjG7DJnhzOxgkI4IJBgrJv7snaotqbLeNae4uE4Lr5%2FP%2FK4quep80YiClKxXBetli2r%2Bh29rIoX8hVCmMaG%2FlJ2yLy3mVHO1rHDbC5kf%2BTHvFtAz2vl9kXrFhgCt7rjVm4TRhVBqFnvg9j9qrRLWEt4VsasYGO%2F%2Fg2ML%2F9kL0GOqUBjXgxfsSZGD%2B8zWyuUCrFYAE7%2BWXaFFYi0ZGXm5wgKFGy7AIFQ74WkeNJv2vrUzQhn2QK5X7PlTeB0Je%2FEzWPVwc2ZYG1FFzA6geI%2B4IX0y5sIXvSDiv8Z9LmH8ADvb0l8eqcmcCzOILqhAnhmF6sfQ2aXzklB30cbJ3n3gEt2V8%2FufZRaZQAFxOKpoqNsSQWBWy5%2BG44NVTZIbk5F9gu7Lnns6Ne&X-Amz-Signature=4862006d5afedb9d422583e51740ae9a6e6f111b98a86a275d179a303f94ee3f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE5GPHUE%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIGpE%2BCCIuJtkQ2c%2FPauSlLdZ286Y4HXj5U9pZ25b%2B8KWAiEAxiqy4Nsuz1J2juc6DBEKqzFhEfpTMHLK7PNPEmuuYf0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDEjCUMmXUW677DDz%2BircA8%2F53FTQhAYplZb8S%2B0TgVgrEF9JFubtSodpEEv5dpBRg29kjZRWRBGrQYpeGgSdaWfkIflt5mvluS0d%2BGuP%2FJPvaIB6R0dWcdUh8RNiUx7UUk2MRbRobtaj2YrBfIEKcQUGrfwjtZ1udf0RmmmJJepuE%2FszjgMbIfV%2BpU85nSOFxOdUQfJnzh7Qkd8T813hdAt7T%2FzfE5uqmywPfv6CUEo6UW6Cp13ttB9%2FrH8F8xS28eQbJ7T7tbos0U4WlSPHMf3ZKsprP2%2F8WFcMekDkWnirM6QfUeBanLU38Ri%2B8Dccsa90SzAjJIlRqdNPJymBg5LZuj7JJOG%2Bta8hUgpu3YJg04V%2BzVNjOBZ9eDheuG4SCh4ZMUiuObJeyI73xGHfesRv16sViPpK%2B6NchYHCQ4v9Qg%2FCza63cRH%2FqNuD9T8%2BPukBy24VGKQP0Bl%2BZ5cZb748dleJr6ut7EdqYi4m3vhY9HTjG7DJnhzOxgkI4IJBgrJv7snaotqbLeNae4uE4Lr5%2FP%2FK4quep80YiClKxXBetli2r%2Bh29rIoX8hVCmMaG%2FlJ2yLy3mVHO1rHDbC5kf%2BTHvFtAz2vl9kXrFhgCt7rjVm4TRhVBqFnvg9j9qrRLWEt4VsasYGO%2F%2Fg2ML%2F9kL0GOqUBjXgxfsSZGD%2B8zWyuUCrFYAE7%2BWXaFFYi0ZGXm5wgKFGy7AIFQ74WkeNJv2vrUzQhn2QK5X7PlTeB0Je%2FEzWPVwc2ZYG1FFzA6geI%2B4IX0y5sIXvSDiv8Z9LmH8ADvb0l8eqcmcCzOILqhAnhmF6sfQ2aXzklB30cbJ3n3gEt2V8%2FufZRaZQAFxOKpoqNsSQWBWy5%2BG44NVTZIbk5F9gu7Lnns6Ne&X-Amz-Signature=4063cb63118b53463c00c18d2bcf5b62fb71d9a19a7201f3f2de1c96d18edb52&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI6N66YE%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDTZa%2F9E1TGltE2DwNH8mPjjU097CEZvo7YdkmgNSdfgAIgF5%2FfXeq1ZH6s1Qm2gTmCIQAmJeovnq%2FN2PgQxgao040q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDJktR5d0%2F42N%2BhEDLSrcAxNoUUP2hWJJlQDf88Ho3EJtrFNK656cnEfmJ5N3apG6LoaUTDFemCbAbWahkyFYp%2Fv9WUOvhMflq4bUjIUFVGD0j9878m1AgSSSd1ngPH1I8SRMO%2BWbZCd9LULKPBur65tOm2yhn2Kk9kNzOdWUiUbcGEHgEQ%2Byx4orMqmiRcKtXW%2Bu3Z4KFAVhyAkR%2FaIXHXex6wTrAkgkR7rInjccIay8QXnXd61vZKwkqV5rSXoLxIWGRxhnXSEocCotnnugrh74QzCAyEGFWoQt3rBDWxHnNbL6STR3EYKxHVYZe%2F64u0UWp0Qt%2FWAE4jCU%2F1ihZZsSWJ9Wg9H%2Bm4hIe8KvXCp5zDFWSjL%2BzvAHeL3aLpV3WHo8Y37Ge0SAPQ0F0uUw8vTAXTAN4dJLKWMo5rMBSoRMYIqR2sX6JLaljsp6u71ssBnvi4fcho5KzrifKKyU7ZYERGD%2FBX1E11log5oCxOSs%2B6vesX2B5pCvverRvAwr6gHK%2Fyp7sbvXwl2r4MOJTRvijXNHf3EcY%2BD2NbaIeLTHG9Kiyvq1opNtSSx4w5cSA0LXluMOdVVVGJ4VXJr2Nfl%2BMD448THnHZjC%2BeHYpe6AS66sdeUDJ2lhPGR2fcZYWv%2FJCmB8uxK93YcjMN39kL0GOqUB1F9yHTQXtYcCM0v%2BuGXKzck8%2B9Obff%2FWvrdJGfoPXsdyF7JOUtf%2B6H60o0d2fNH%2F00FH12xIzWgK3iyYtynyHV8RYTh6605iF1Wn4uzqDH1hZzV4SnoniMSH44rV0pKFV1ot65T9LWDSCF7AWfZZeztOSxfiFSQwo2LY6XujAgucm2o25rzox1D%2FGgmmeHbMc2zprC6QUMhE4v3UhoF0G4RNAZf9&X-Amz-Signature=e277ff648d484d779a25fecd4bf89cd8efe98b369006a4579719c64c4229553b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y36DNWRU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIHLuyB%2BebbP5m7zexO0812C5sMXq8ts1%2FkplKRYcyKfEAiEA%2FnhCDql76%2FBJ1ZSlyp7O4eXGOZPy96nXMxL2clwftJoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDBFB5RknsUf4GVfmFircA4s92wEnBzeHoMtA1nQgg5P2%2BgcbDZwKtbLmwaF3%2BdAVweMFfB4tAQOtLNkG9hJUYpYDFoDvZPup7AuGN4QtVvwomRDnXC3DWDHmMamsKRyIu60EQMxlz1ag8Wxd2oVj6EtSp4TvSb4w9bEF5t4zbsySEr7q%2FviZluR2%2FUhyedb0EZFPSXN2Xqa2%2BIsAdRcSqO5mffu6GiYZSQpVruC82e6iEQgJS%2FOkPDu8Mx6TXEinCDXVUDuvQLeLtRMgkC%2Bc8t%2Fwi1vxSGQ4g6GrFIw%2F6aQq2yq49nS3z%2BuOwg0Mh7z8z081sKKCG6ywbAKQ1Uewv%2BJAz8MuGYU76RSpTSJWd9T8dke3pmqgH%2FBr49KnzzFvZp3h9p3OkqVmDIFWxKPdER5rUZJdkpFf9l6%2BUS9FAdO4uKAUYFYSWonlMisfp14q3ZK2PuoAZn%2BNbGukQEqJPSs0y4tvS6AF4NzEOToqBUjkrWtIG3TQWKoGKo2dV5ovJ6%2FW%2FR9HdSZUmccSIeR3srFJF5LD7PTd8oSB3x%2F1ytVe%2FTaRxpi8Io3dui3c7JCoHhlcQAyBFMedx5C%2FjF%2FkNdzXmCvtnIR85re98MU9h7KoWebtwsaHPLQSt%2B70km%2FjI1Q6uDhjwjsMwsIEMNj9kL0GOqUBB0MyHqxyquDXERP3jKxbd4GWi2t9wLVJMH6fKsprZJb2qzy58wEtNpzEIPg%2BiFfCR5wHEonJCpYPu8DvDpuwP%2Fuzq%2FIEpPEC5%2F18uSrUlheNMa1PsoAwlcRL2bqZjXWjU9GejdHMuiDOcCfsfim%2FsWImaoMrbb9AXt6FYGKzJSnQ3TaNbriIoZfmteG62vqra6yLEbLhDz6l7dfli6LOvymRrR7k&X-Amz-Signature=faa14d5d012f5b83f2ca244d72624c775c927c3851fcda981c69c622658b1506&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE5GPHUE%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIGpE%2BCCIuJtkQ2c%2FPauSlLdZ286Y4HXj5U9pZ25b%2B8KWAiEAxiqy4Nsuz1J2juc6DBEKqzFhEfpTMHLK7PNPEmuuYf0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDEjCUMmXUW677DDz%2BircA8%2F53FTQhAYplZb8S%2B0TgVgrEF9JFubtSodpEEv5dpBRg29kjZRWRBGrQYpeGgSdaWfkIflt5mvluS0d%2BGuP%2FJPvaIB6R0dWcdUh8RNiUx7UUk2MRbRobtaj2YrBfIEKcQUGrfwjtZ1udf0RmmmJJepuE%2FszjgMbIfV%2BpU85nSOFxOdUQfJnzh7Qkd8T813hdAt7T%2FzfE5uqmywPfv6CUEo6UW6Cp13ttB9%2FrH8F8xS28eQbJ7T7tbos0U4WlSPHMf3ZKsprP2%2F8WFcMekDkWnirM6QfUeBanLU38Ri%2B8Dccsa90SzAjJIlRqdNPJymBg5LZuj7JJOG%2Bta8hUgpu3YJg04V%2BzVNjOBZ9eDheuG4SCh4ZMUiuObJeyI73xGHfesRv16sViPpK%2B6NchYHCQ4v9Qg%2FCza63cRH%2FqNuD9T8%2BPukBy24VGKQP0Bl%2BZ5cZb748dleJr6ut7EdqYi4m3vhY9HTjG7DJnhzOxgkI4IJBgrJv7snaotqbLeNae4uE4Lr5%2FP%2FK4quep80YiClKxXBetli2r%2Bh29rIoX8hVCmMaG%2FlJ2yLy3mVHO1rHDbC5kf%2BTHvFtAz2vl9kXrFhgCt7rjVm4TRhVBqFnvg9j9qrRLWEt4VsasYGO%2F%2Fg2ML%2F9kL0GOqUBjXgxfsSZGD%2B8zWyuUCrFYAE7%2BWXaFFYi0ZGXm5wgKFGy7AIFQ74WkeNJv2vrUzQhn2QK5X7PlTeB0Je%2FEzWPVwc2ZYG1FFzA6geI%2B4IX0y5sIXvSDiv8Z9LmH8ADvb0l8eqcmcCzOILqhAnhmF6sfQ2aXzklB30cbJ3n3gEt2V8%2FufZRaZQAFxOKpoqNsSQWBWy5%2BG44NVTZIbk5F9gu7Lnns6Ne&X-Amz-Signature=e5251157453e40e16b93ed61aef82af0e2cd53a9caa58bc548e3d361ab6bd8c0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
