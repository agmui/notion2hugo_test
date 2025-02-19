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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IQUEDYM%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIEhdAvA4KCMEiJbDOodbBoBLdiz%2FBCHVAsyRIXjMW1GPAiB8oWiMIEBc4FlKw2uOeB%2Bw0ZQ9jsPkLkbSJWCZEnNbDSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAdnF8%2FPFBMU0%2FbzfKtwDtlrtwlmLXOSKDNI6CM72e5Av0F3CGxPNUBiPJb2y3eGcOx3P9QUqQ0vieJTf2tIWDC4n7KHhLVis%2BBAFlIGAi2G%2BvQx6DjRKdxYisIzJZ3BqwQr4JNWGvdfFpJ0jlcPeDh%2FzwDB1TRjqBQ6171etjgHyUsIwj2GQbCd9eEqosjno0Vt00Ss%2B%2BwXxO12JCecbPgxHH1rjGrR%2BpCajBuXsSeJsKDZxKfg8HeybclkOZFTq6ADRktbSuATOpfOtIA6khw4Wj%2FVBMuJNhCTUmpRBirSEjdsckpwkU7AiqaiKeiquLXt6jE5HRrsL06d%2B%2FXIweXLk2VS3YO2d4DHkXLWHuFF5g54Hi671X84oT1vmvs2gK8hTN6emjFJHX3%2FkmGbTiWd22JAXnyMkTBrqeuEiq43ddiCYzvJ%2FEZkP4fPY%2BqDoRGoHyAW%2BCUKrarpPwuZlUMB4Ftix5sVbq1yPoyI%2FH1NJfzHAxV8TEAQEh2UkLmZNcp%2FrWZknRz8lxCI2F%2B9hLP3vQBhT%2BAXjL2gbcYqcAby6RX86pe96iQ4XpTZPTcqF6Mw47fInqZwWJuU8CaP8KAPey6bDsfvWZFdO4QU402qtV1sFfzSiIhKlMWoto1B4w6nCbiZW6OzmMUMw4LvWvQY6pgES5KGz0P6HAyuPx82%2BB6dJPpE9IB4zbpjZFDDCh6D%2BUi4dO7vyJ1ZiVBXiwtO9HIxHRsJaIxN3UzeeuDrkJ2%2BXYnyKo47sQ0RkFzqYfphlhwqGgZMU3vbm5LzDDbD%2FeREKNnXImq%2F5BKyKQCf3wP6uHx8ScfcI0RLIPWVEjamHviqeMtQZ4yRUM52sMfJRSlZzGygp0mlNnebsefVS9X9alRIPUYsA&X-Amz-Signature=0c04f282d4d94298dea50ae661d11c945a0b3037fbaad9c3ad8207994bd9a6e4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IQUEDYM%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIEhdAvA4KCMEiJbDOodbBoBLdiz%2FBCHVAsyRIXjMW1GPAiB8oWiMIEBc4FlKw2uOeB%2Bw0ZQ9jsPkLkbSJWCZEnNbDSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAdnF8%2FPFBMU0%2FbzfKtwDtlrtwlmLXOSKDNI6CM72e5Av0F3CGxPNUBiPJb2y3eGcOx3P9QUqQ0vieJTf2tIWDC4n7KHhLVis%2BBAFlIGAi2G%2BvQx6DjRKdxYisIzJZ3BqwQr4JNWGvdfFpJ0jlcPeDh%2FzwDB1TRjqBQ6171etjgHyUsIwj2GQbCd9eEqosjno0Vt00Ss%2B%2BwXxO12JCecbPgxHH1rjGrR%2BpCajBuXsSeJsKDZxKfg8HeybclkOZFTq6ADRktbSuATOpfOtIA6khw4Wj%2FVBMuJNhCTUmpRBirSEjdsckpwkU7AiqaiKeiquLXt6jE5HRrsL06d%2B%2FXIweXLk2VS3YO2d4DHkXLWHuFF5g54Hi671X84oT1vmvs2gK8hTN6emjFJHX3%2FkmGbTiWd22JAXnyMkTBrqeuEiq43ddiCYzvJ%2FEZkP4fPY%2BqDoRGoHyAW%2BCUKrarpPwuZlUMB4Ftix5sVbq1yPoyI%2FH1NJfzHAxV8TEAQEh2UkLmZNcp%2FrWZknRz8lxCI2F%2B9hLP3vQBhT%2BAXjL2gbcYqcAby6RX86pe96iQ4XpTZPTcqF6Mw47fInqZwWJuU8CaP8KAPey6bDsfvWZFdO4QU402qtV1sFfzSiIhKlMWoto1B4w6nCbiZW6OzmMUMw4LvWvQY6pgES5KGz0P6HAyuPx82%2BB6dJPpE9IB4zbpjZFDDCh6D%2BUi4dO7vyJ1ZiVBXiwtO9HIxHRsJaIxN3UzeeuDrkJ2%2BXYnyKo47sQ0RkFzqYfphlhwqGgZMU3vbm5LzDDbD%2FeREKNnXImq%2F5BKyKQCf3wP6uHx8ScfcI0RLIPWVEjamHviqeMtQZ4yRUM52sMfJRSlZzGygp0mlNnebsefVS9X9alRIPUYsA&X-Amz-Signature=59424962e234ca47a227c39c643b2f81608bd1a7ebda4c85dcf7203baf043281&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QVXYN57%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIAIqwuz8sX2wDB30LiBhfUeshnAUbwmm5ZKkl%2B2YUjsWAiADJahwt8GRvdEl4H2TGE%2BAwn39v6cVhrOATlAuA6i%2FeyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM30aVu3nVDfBFDwzYKtwDzot6tGrfW7X2dBfPf1INvXj6fxbFijKD2Cp7%2BpzGtnSVukOMBBmzkjHPsCi0oRbo8r%2FOPGEvaz7xj%2FKMpJCc24mTCXEpOp00iZBFC9esZcU8Ft7ajQw0ntdhSvaoUv1ZAUbfK87xvS0cuQUGYYYYWc%2B3OhPB2%2FH1ufQQC3CApg9l18p6yqBj7etg%2FxxP5Hn6NJooCIQCYrYb2cH8z2Cj3RQE5p1%2BgONU14MOzB40bkrjQBUzzWTs2hmC0VxRpq6TiCacZRObRcJDddJmUBKrC92cg9JA0AK1mtUofFOys1mQ4xlSg7bMqpEKYeLN7GGn0i9q%2BTFLBUQmuPouGGIapHErneBrlttrUsfPX4EuFS0fU4AN2oJp1Sk7VJ9h3YgIycIts7bet21Q58dDlktDxxkz7hiN0T6Hy4FPpMXGVhhEOEH3ulDtuR2TQWWvu64r6tfLAVeFu9cKrf0mDPoVEn2C%2BhFxcfVgUVffg7AnVXiRSjDfneHNHb9uw16KQNDd0m%2B87st6GKy2A7aRy5IFXHTT9agPmX6TzFCGoVCkncs7rANSxdl%2BH%2BFL0HyQ6%2FjMvemMBZcRqTVcldvt%2FG2CZ2BE3ABf0qgH2W6navkEheELZBPOEjnB%2FihS9iMw%2BrzWvQY6pgE6JHWHQjmG8pvTK%2FrpDj5%2F2RiloX0tCfyrypw8v9OHKE700tJNX93txLsT6yIUNJa7jzXiIk5%2FL4W8M3ROBaoDE%2BmWIJVt62v9%2BUdwnUf5y4PlSECfEHOSxNSjnVR7fh%2BRnXkKFig3PanHk8osZO0Xw32JVlkgqSkSzCxqjqXiVOPb0hsJu9mAszN7wYmxU1lHQQg0F7xAGzjW3apk40%2FzrSmrv4Jq&X-Amz-Signature=81e56058bb3316daf6dce1d7435a2011f765839c3baa869291ae4b901eaef81a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKHAQ2AT%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCjGZs2h9Oj%2BdyIViCGuIB%2FKS1V%2FvMVlwvkWzjfTWjgWgIgYnyx22pILhn0zZAA0OFn189lUFPmdDO6OO3cnuRuSbgqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2z772Dq9w%2BblkfNircAyctLxCMY%2FC36RtHEhuwPfB%2BTCkqw7cCserixBptvNfrVKtfmpvfVLwpTiXNMPpig7Slr5KKIU6A0xNGxBZCVK64IzV5TH9KR7uMP8465dvfQ1Y7OxqymdWRS4V3Ia2OAkbL7vxSy5sVfCzkXtfbmUt4O3ofktige8EFEsLSK9j7UOnmZEsv8%2BWZUf8z41ygExNcR8VOMMtZa2%2B216RdTbFaTpVV0jhiVglCJ0bCCmy9xSCcnTdY6TC8B%2FcL3Vjq42xbufcJn9bOZ%2FNITw7tMRAud1uJleXV2rq3EddX1J%2B03DJPl9Q9k3ArFiSipv2ITEX65AgkGSRrBip7GoXpqeQ2iE3Z3%2BnAaVfUbjiDPXvfCJmDhgLpw8WLhGpO8hJmA0RZSg%2FXyXsEYygoszGgsbPzrJqJPCy9lCD8mvHYhELsWkL9Wtl2yr5esJNXXfY8zDj4CGIzr5nsgMORGGrUKm8AIOBhjvCtuGdKqvxt5%2BfUv%2Bc82SLYQ7m%2BtkANc2NIcjoHwZmu5mZlJRK7a4vZ4J3vqqDA52JuNHlku3gDp%2BFz%2FV3Fap7U47MqPpVNEIPq1DBNiaLJWGEILSPfmpJMahXv2H4M6uYSpA2b6dJqAKEdS2%2BIL9tFh1sWb7iAMPW71r0GOqUBs6IleYKPGfE85KWXI6%2BErM1XK6OlNFFdjRakP7fzinjEn6F1OrQ77kjVwAmuWO4eF9f4nKsJuTQ5k7nRkLioOxm1JZnWbVwuzjvHsnVk0Pr3N2IKRkeh9P%2B1gmEly5UDVOc1CmmnAudD%2B1bn%2BmTuV2vHp%2F%2BgOnNnyxjlkBGy8rHIkogVfKaZIn%2Bz2atToEYOPOcPXlhl%2BwljQ0hdqT4neImMs0QO&X-Amz-Signature=43ff846e54f230f1545bf3934ff4dbba00bbfa01e263b61c5996ee64fc221e2f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IQUEDYM%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIEhdAvA4KCMEiJbDOodbBoBLdiz%2FBCHVAsyRIXjMW1GPAiB8oWiMIEBc4FlKw2uOeB%2Bw0ZQ9jsPkLkbSJWCZEnNbDSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAdnF8%2FPFBMU0%2FbzfKtwDtlrtwlmLXOSKDNI6CM72e5Av0F3CGxPNUBiPJb2y3eGcOx3P9QUqQ0vieJTf2tIWDC4n7KHhLVis%2BBAFlIGAi2G%2BvQx6DjRKdxYisIzJZ3BqwQr4JNWGvdfFpJ0jlcPeDh%2FzwDB1TRjqBQ6171etjgHyUsIwj2GQbCd9eEqosjno0Vt00Ss%2B%2BwXxO12JCecbPgxHH1rjGrR%2BpCajBuXsSeJsKDZxKfg8HeybclkOZFTq6ADRktbSuATOpfOtIA6khw4Wj%2FVBMuJNhCTUmpRBirSEjdsckpwkU7AiqaiKeiquLXt6jE5HRrsL06d%2B%2FXIweXLk2VS3YO2d4DHkXLWHuFF5g54Hi671X84oT1vmvs2gK8hTN6emjFJHX3%2FkmGbTiWd22JAXnyMkTBrqeuEiq43ddiCYzvJ%2FEZkP4fPY%2BqDoRGoHyAW%2BCUKrarpPwuZlUMB4Ftix5sVbq1yPoyI%2FH1NJfzHAxV8TEAQEh2UkLmZNcp%2FrWZknRz8lxCI2F%2B9hLP3vQBhT%2BAXjL2gbcYqcAby6RX86pe96iQ4XpTZPTcqF6Mw47fInqZwWJuU8CaP8KAPey6bDsfvWZFdO4QU402qtV1sFfzSiIhKlMWoto1B4w6nCbiZW6OzmMUMw4LvWvQY6pgES5KGz0P6HAyuPx82%2BB6dJPpE9IB4zbpjZFDDCh6D%2BUi4dO7vyJ1ZiVBXiwtO9HIxHRsJaIxN3UzeeuDrkJ2%2BXYnyKo47sQ0RkFzqYfphlhwqGgZMU3vbm5LzDDbD%2FeREKNnXImq%2F5BKyKQCf3wP6uHx8ScfcI0RLIPWVEjamHviqeMtQZ4yRUM52sMfJRSlZzGygp0mlNnebsefVS9X9alRIPUYsA&X-Amz-Signature=58b2c5d8983870349f7e2886359980fd8b3473b54f2dff353f09725eaa7d3610&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
