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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y45U3PSK%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIGQpSb7qwvSin%2FyCps%2FZ6hO%2FVwRTXULXXWHYThIGOy1hAiEAsNd2tXLen5E0%2Fp6IK8U3m9rTCccMm1crBAwK79ffgswqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7oUDK5YxD8rdv3%2FyrcAxCY8BGjPfuv3kuzziQeS7%2BVVB6orh1lI4ZZ5UMBlvWb1tEgKyh85aLIRbNTcazrcbZdwS6ZpLDZhdS8MZcayP66mDEMBLwU3bINEXCdCyCtbJaCtTX1NDdUFTDkVfgcUHMIytP3pA0s4Kg8ZGia%2FUp%2B0dshgZoSp3wrI0SSXz77DwSvyg8I6Q5Ajgg5u50Ing0D1hJFpKDfbUZEaZOgq8Le4WVllZQKukZ62GVP2Lv5tynWWNRGg9dngLLZWUimcKzOdR6iDieLUN4N6QHfyKo24buIZPfPhwIvmDHvGEqpduhJLgjAA5n%2FbIdgnbQQMzkhL%2BQhHmx6F%2F1ypLcG1adnILyBRD128y%2F9LVJrhKcFBYxFCXcirP81T7cETYWV3Tq2zNMJn48XNhuY6jPZPSbMCvfTd40YSeKvXrp3L85zqHLzrG%2BrZ1ph93gyDkApCqiWdKB0MUTuXwNRiikcXP7bSgQuvTHpBk7w9SMa1MMJfXO5IBjD3ufQ4LVfLw%2Fyvxt9ogxSbfEnxtDgkAnNr6gMrttJG%2FeCpDaD3ORrxmfsZ%2B%2BNqXJbG%2BYZnZwnhg1OA%2BaK3QNbjSi7rhGSKGs0lUU2kKZ25kB7Gjg5yKfhQNT4XUBk3LLsQtic9yzKMLOFib4GOqUBLQkAuJT2nlYhNIDZnI70C%2FgfE7bbJx447sj3WXsrLp39ISt%2FaI8ZJDx8hJ%2F0yHMzJAHUO0yH6L06AjCfA0cHK0qaRiHA0Sl6bS0tF%2BDUK3gVz9RoRrSKoghgaHvDr5Wn5lCVrbxYxzyeTU0irFn8m2YtJ6PiX8ClH6TmiI0WOQ5CzvWVJYBXaGNoZ0Yp1Dgbc5zVRXSsQt1gJ5rZTaKlctDrLhr%2F&X-Amz-Signature=928a85cbe9b8399d4238c460cedb0746c8781b4782611e7db25556266163490c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y45U3PSK%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIGQpSb7qwvSin%2FyCps%2FZ6hO%2FVwRTXULXXWHYThIGOy1hAiEAsNd2tXLen5E0%2Fp6IK8U3m9rTCccMm1crBAwK79ffgswqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7oUDK5YxD8rdv3%2FyrcAxCY8BGjPfuv3kuzziQeS7%2BVVB6orh1lI4ZZ5UMBlvWb1tEgKyh85aLIRbNTcazrcbZdwS6ZpLDZhdS8MZcayP66mDEMBLwU3bINEXCdCyCtbJaCtTX1NDdUFTDkVfgcUHMIytP3pA0s4Kg8ZGia%2FUp%2B0dshgZoSp3wrI0SSXz77DwSvyg8I6Q5Ajgg5u50Ing0D1hJFpKDfbUZEaZOgq8Le4WVllZQKukZ62GVP2Lv5tynWWNRGg9dngLLZWUimcKzOdR6iDieLUN4N6QHfyKo24buIZPfPhwIvmDHvGEqpduhJLgjAA5n%2FbIdgnbQQMzkhL%2BQhHmx6F%2F1ypLcG1adnILyBRD128y%2F9LVJrhKcFBYxFCXcirP81T7cETYWV3Tq2zNMJn48XNhuY6jPZPSbMCvfTd40YSeKvXrp3L85zqHLzrG%2BrZ1ph93gyDkApCqiWdKB0MUTuXwNRiikcXP7bSgQuvTHpBk7w9SMa1MMJfXO5IBjD3ufQ4LVfLw%2Fyvxt9ogxSbfEnxtDgkAnNr6gMrttJG%2FeCpDaD3ORrxmfsZ%2B%2BNqXJbG%2BYZnZwnhg1OA%2BaK3QNbjSi7rhGSKGs0lUU2kKZ25kB7Gjg5yKfhQNT4XUBk3LLsQtic9yzKMLOFib4GOqUBLQkAuJT2nlYhNIDZnI70C%2FgfE7bbJx447sj3WXsrLp39ISt%2FaI8ZJDx8hJ%2F0yHMzJAHUO0yH6L06AjCfA0cHK0qaRiHA0Sl6bS0tF%2BDUK3gVz9RoRrSKoghgaHvDr5Wn5lCVrbxYxzyeTU0irFn8m2YtJ6PiX8ClH6TmiI0WOQ5CzvWVJYBXaGNoZ0Yp1Dgbc5zVRXSsQt1gJ5rZTaKlctDrLhr%2F&X-Amz-Signature=d0a58ceedc96d81ed7b2d5c216e455eb588a6dad2b0f22a5ecb9c89b0229b300&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ4XTZ5P%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCICjHfsFe6nMBg9BpXf8kU5aLahaFBmoUB2BvFxlagw3iAiAcfuxXGLeov8WunWednqb%2F0PY239zsb%2B8eFporzpSyWyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7pBA8aSXwwDDmEaCKtwDKb2FVG1wI2p2J0V7M2Nbu3NnML4inO37kO3EQkiMrRAPnP4yogItEiRWyo8nyHXvjoByiEY8saSwg63R4juBtptzie8%2BQfuCYiWwNKG3BY4%2FwQ%2Fcrj5buQFOx%2BgogU86Chfuiiw3fyKxuuiAJ%2FYP8eBNzZAERtUhYlfxo2UEw0C22zVEiczM6IckNnY3n1VDmLnubzmKYnRqO4V4XzmXeeuCLA5tY1Sg98FaKGTRBCJJbbvEkwZY%2BCduES8aVm2vlCpjaa2MKSN6G4RoUh5d%2FezMRoSlD4Qry60xMRiUxcL8%2F1IObhGeL%2FmcV2yeAlyWxZd9aJs1HQMWTwFKhL5aWkjmbgAOlqj1%2F9VNnjvNuJkUyHFmiaPliIea3SMyTW%2BBeEW97KgPV2wsgJlScYPf96Bai%2FJIkpxxV%2BDDBXhWzuIyNBL%2FftO%2By2%2FlqPSlpYo8iVtkCDzgtTejRpVPZbJNjZ19qE9RCCIEojUH1L7KGGkamn21yny8Xu47%2BUBrNUONP8HbmWbLYoU%2Bb9466kFAxuj8TQhBarfWneXV2oiDHo2dV4v9idegmoSo8frFn%2BuA4mc84ujcSA0vEZVf4Kr0irjOqRM%2Fv%2Bb59hpqX9fsEQXKboJ5sOwRUkQSxEcw14WJvgY6pgHWJooQmrJkHYK%2FSekeeH3lcepl6M1po%2F09fTZ3Mf5uY16lz0FoaCGqrAwEkPBQI5Gw2ppzVi25j%2FeosMEe60iIoE%2FFdUm4EwzbunozbWMQeu%2FpcoLuM9bO4WJZmrqbVOIdH0lZCUaU6KXkLSB1uqd9lZGCSwFBnO3%2BiD%2F7IkIyJemYk5Kk8kwGr%2BP9nDkn5GzL3%2FVdrSd5C0J9aUXCitPeAdhDquVq&X-Amz-Signature=fdc65352f365e9c1d2a39b24aa8d6bf815a13e7b9188cab0b19302596ff7e24e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK6HOSZP%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIH%2BFvEfrQOtlhSy5xWND%2FyTxUHitTPblkOv0PvT%2Bp1iCAiEAzHegpBqqkDxiHfzlcuXyrL76d9U2dhx1vGeo%2Bf9TEjUqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBabKmZ3EdqbxlRq1CrcA9LtIR707tQ3sySfhk4aOca8znT548GptyK4sa9tPESvtFCjeHwUnTYG27VbacPMrLMysRs%2BNu1lwfMTQGJVACLq4mxtAnXKrHufWmpO2mpoueGwNHbGNehZChqEJ8z5%2FLCks79benAYmgf4qk%2BN76LqJTvws1%2F6qC5EsxFg1VKtnz0y4aWwzpMruVjhB6Bl2TFt%2BFA8QDqpXrpQWVvQPM5QFMHH6LIp2pWEM82FSsuyqytIwSKFYLuNUg5xw4zFZH2s3KSCN0iwMby6B4Mu5mys8bq1aXYNBTpsiYMVwiVi1fyt2cuznO24jh0zoP%2FAo2CklusD%2BHXBUhog1A7Os4CAMtft%2BRnXs2c0%2BZJIiE4ExfvB9CaD9M8D2HmaG8hl6jcZVRtx%2B59%2FprVrzGmmGoaVQMhVa4fTJoZMOrdSrU%2FVe8%2FghpxvTqwGoC0NHyxjYGbGnXjPEStRFIrlq9Wa0Vu9kQQhiGdzgppRTC5ezSlV2E5%2FfGLYf5xOCPk8%2B8YdzSeci1hLjvfZp1xKq8eWVns39afBJHnzhnYJf7oiB0eI0oDiMwFcWiaAOzKPZH7p8b%2Fu0I939T4zjJ7DBpoDXlLPzGhf2tvA4zPQ38evTNpZR3dvfYKB6xnhtxAbMNqFib4GOqUB5aAxMDzGYTKgau5TuY55wAqX4kWACsPJ%2Fi5m7DUc8Tm5k0M6Iu6RFkieQxXfJrg6kbhVitgc0iSC667cL6oj2N8f8aKMc28cjMKlktFEE3FOUcTq%2FI6uKDcWlnv3fptPA4o00EQISlFh2K6nGu81ap9QcaeA7tIuP5npnx44jwlZ0CCZRhLC%2B3%2BMUBI0QsmfufN%2BrCW8j61BlF9mmEr6n14uRqkJ&X-Amz-Signature=20b2a153233e332543498fc0f71ee35a756be681ec7d17744e6cab54ee20a3b0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y45U3PSK%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIGQpSb7qwvSin%2FyCps%2FZ6hO%2FVwRTXULXXWHYThIGOy1hAiEAsNd2tXLen5E0%2Fp6IK8U3m9rTCccMm1crBAwK79ffgswqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7oUDK5YxD8rdv3%2FyrcAxCY8BGjPfuv3kuzziQeS7%2BVVB6orh1lI4ZZ5UMBlvWb1tEgKyh85aLIRbNTcazrcbZdwS6ZpLDZhdS8MZcayP66mDEMBLwU3bINEXCdCyCtbJaCtTX1NDdUFTDkVfgcUHMIytP3pA0s4Kg8ZGia%2FUp%2B0dshgZoSp3wrI0SSXz77DwSvyg8I6Q5Ajgg5u50Ing0D1hJFpKDfbUZEaZOgq8Le4WVllZQKukZ62GVP2Lv5tynWWNRGg9dngLLZWUimcKzOdR6iDieLUN4N6QHfyKo24buIZPfPhwIvmDHvGEqpduhJLgjAA5n%2FbIdgnbQQMzkhL%2BQhHmx6F%2F1ypLcG1adnILyBRD128y%2F9LVJrhKcFBYxFCXcirP81T7cETYWV3Tq2zNMJn48XNhuY6jPZPSbMCvfTd40YSeKvXrp3L85zqHLzrG%2BrZ1ph93gyDkApCqiWdKB0MUTuXwNRiikcXP7bSgQuvTHpBk7w9SMa1MMJfXO5IBjD3ufQ4LVfLw%2Fyvxt9ogxSbfEnxtDgkAnNr6gMrttJG%2FeCpDaD3ORrxmfsZ%2B%2BNqXJbG%2BYZnZwnhg1OA%2BaK3QNbjSi7rhGSKGs0lUU2kKZ25kB7Gjg5yKfhQNT4XUBk3LLsQtic9yzKMLOFib4GOqUBLQkAuJT2nlYhNIDZnI70C%2FgfE7bbJx447sj3WXsrLp39ISt%2FaI8ZJDx8hJ%2F0yHMzJAHUO0yH6L06AjCfA0cHK0qaRiHA0Sl6bS0tF%2BDUK3gVz9RoRrSKoghgaHvDr5Wn5lCVrbxYxzyeTU0irFn8m2YtJ6PiX8ClH6TmiI0WOQ5CzvWVJYBXaGNoZ0Yp1Dgbc5zVRXSsQt1gJ5rZTaKlctDrLhr%2F&X-Amz-Signature=ee3ad49b1d35ec167f171985b5dfcc1fd446266d1381eda6a6e0df84779ca340&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
