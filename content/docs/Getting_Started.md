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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UDNRVJQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCVuH1szRWwckHw27RzAZXcZeBMT65p66rZuICgMl2GEAIhAIPjMIuQenXOuu%2BSIlR4HA9tEbY3AZhZo5rsznrtSx3fKv8DCGMQABoMNjM3NDIzMTgzODA1IgxJ9vpjH3%2FqZLzjfdsq3AOmclSH8uGQn4%2FBq4pOLYOJLBzDuAPm1GiSgFJvq9VL88bBp00fFuk3e5oNfZT3d9m53K4lAxoVb4QT%2FN1XKr2GyoWqCu%2Fn%2FQN7vOY9qr8%2BbN%2B2BotCWtTftuSa4MUwjihhEsfSPwdEhLwL6QgxWRqw1xegYVtTSiYiEblH19QqO5TT58AWjIR8XAPEuBs46DFs9FHMLui7ijUTI5Mr7YXbHKn8U62e3KRFkvQp65tyH3x8M1GPTHJtTnxl4bGo9ijNlgNSNcj1SoiGDdIcwJefXrMVFtBhfP6OHrvWpLlYRw%2Bzs0orYweilaKlmhPpYOHw%2FVz0bm3UVU2vjgErLSaicJxgS%2FIptrvzyTGx75WaWnUH03NWsBd394LeliWHL%2F7448qS75ZJ4O6UGb9HO1tJdlIJN5H%2B93900P626wHi%2BAk3BGy8vAnzqt%2FbRjhr9XGNGm6fgM%2FMOkAHMOvknhe8sA0uN%2FSHUTrHobffSXFG9pqk2s6DKUIRDDnEVa1GyHInSOKiAowIhC%2Bt2%2Fm%2BPWeaLtGq40FFsgTMDfQA1edmNFSlUI5g%2BtWi8mIW5j41Go50kDzVF4umPWmGFAdUdwBRVn3tXVgXXGKPP%2FmTDYurb8jA%2FJCIkPPjcLqVnjCn2v3EBjqkAXMBizC4gNsWoWWm4UFlZn4nO7R1TCO9go287PgT9aFuw5MHXQ%2BAEDDjyaLTgYri1lBW1sSWTgBYOkeeYZAEJMOGKUWfm3rPs5LEpIjBmjiTHUscJ7Knl8W2qdIknMENa7lTVyFkR%2Fd91YRfqrbMFyJPGq9C6ZMNqV1yDyl6Dj3ZbKwzEEnhmAp4BySRi9McpCcrtfMaqUDTtPtjFk25%2BG9K0cBn&X-Amz-Signature=26ed8e449ec5d12de31ef63fc8682bb86ab36fc09fb863526078611555ae4e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UDNRVJQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCVuH1szRWwckHw27RzAZXcZeBMT65p66rZuICgMl2GEAIhAIPjMIuQenXOuu%2BSIlR4HA9tEbY3AZhZo5rsznrtSx3fKv8DCGMQABoMNjM3NDIzMTgzODA1IgxJ9vpjH3%2FqZLzjfdsq3AOmclSH8uGQn4%2FBq4pOLYOJLBzDuAPm1GiSgFJvq9VL88bBp00fFuk3e5oNfZT3d9m53K4lAxoVb4QT%2FN1XKr2GyoWqCu%2Fn%2FQN7vOY9qr8%2BbN%2B2BotCWtTftuSa4MUwjihhEsfSPwdEhLwL6QgxWRqw1xegYVtTSiYiEblH19QqO5TT58AWjIR8XAPEuBs46DFs9FHMLui7ijUTI5Mr7YXbHKn8U62e3KRFkvQp65tyH3x8M1GPTHJtTnxl4bGo9ijNlgNSNcj1SoiGDdIcwJefXrMVFtBhfP6OHrvWpLlYRw%2Bzs0orYweilaKlmhPpYOHw%2FVz0bm3UVU2vjgErLSaicJxgS%2FIptrvzyTGx75WaWnUH03NWsBd394LeliWHL%2F7448qS75ZJ4O6UGb9HO1tJdlIJN5H%2B93900P626wHi%2BAk3BGy8vAnzqt%2FbRjhr9XGNGm6fgM%2FMOkAHMOvknhe8sA0uN%2FSHUTrHobffSXFG9pqk2s6DKUIRDDnEVa1GyHInSOKiAowIhC%2Bt2%2Fm%2BPWeaLtGq40FFsgTMDfQA1edmNFSlUI5g%2BtWi8mIW5j41Go50kDzVF4umPWmGFAdUdwBRVn3tXVgXXGKPP%2FmTDYurb8jA%2FJCIkPPjcLqVnjCn2v3EBjqkAXMBizC4gNsWoWWm4UFlZn4nO7R1TCO9go287PgT9aFuw5MHXQ%2BAEDDjyaLTgYri1lBW1sSWTgBYOkeeYZAEJMOGKUWfm3rPs5LEpIjBmjiTHUscJ7Knl8W2qdIknMENa7lTVyFkR%2Fd91YRfqrbMFyJPGq9C6ZMNqV1yDyl6Dj3ZbKwzEEnhmAp4BySRi9McpCcrtfMaqUDTtPtjFk25%2BG9K0cBn&X-Amz-Signature=a6d6ed34ac89f4d8487845b48b97edbef2e08e30c72d9fcdf65cf50d35bd64a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UDNRVJQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCVuH1szRWwckHw27RzAZXcZeBMT65p66rZuICgMl2GEAIhAIPjMIuQenXOuu%2BSIlR4HA9tEbY3AZhZo5rsznrtSx3fKv8DCGMQABoMNjM3NDIzMTgzODA1IgxJ9vpjH3%2FqZLzjfdsq3AOmclSH8uGQn4%2FBq4pOLYOJLBzDuAPm1GiSgFJvq9VL88bBp00fFuk3e5oNfZT3d9m53K4lAxoVb4QT%2FN1XKr2GyoWqCu%2Fn%2FQN7vOY9qr8%2BbN%2B2BotCWtTftuSa4MUwjihhEsfSPwdEhLwL6QgxWRqw1xegYVtTSiYiEblH19QqO5TT58AWjIR8XAPEuBs46DFs9FHMLui7ijUTI5Mr7YXbHKn8U62e3KRFkvQp65tyH3x8M1GPTHJtTnxl4bGo9ijNlgNSNcj1SoiGDdIcwJefXrMVFtBhfP6OHrvWpLlYRw%2Bzs0orYweilaKlmhPpYOHw%2FVz0bm3UVU2vjgErLSaicJxgS%2FIptrvzyTGx75WaWnUH03NWsBd394LeliWHL%2F7448qS75ZJ4O6UGb9HO1tJdlIJN5H%2B93900P626wHi%2BAk3BGy8vAnzqt%2FbRjhr9XGNGm6fgM%2FMOkAHMOvknhe8sA0uN%2FSHUTrHobffSXFG9pqk2s6DKUIRDDnEVa1GyHInSOKiAowIhC%2Bt2%2Fm%2BPWeaLtGq40FFsgTMDfQA1edmNFSlUI5g%2BtWi8mIW5j41Go50kDzVF4umPWmGFAdUdwBRVn3tXVgXXGKPP%2FmTDYurb8jA%2FJCIkPPjcLqVnjCn2v3EBjqkAXMBizC4gNsWoWWm4UFlZn4nO7R1TCO9go287PgT9aFuw5MHXQ%2BAEDDjyaLTgYri1lBW1sSWTgBYOkeeYZAEJMOGKUWfm3rPs5LEpIjBmjiTHUscJ7Knl8W2qdIknMENa7lTVyFkR%2Fd91YRfqrbMFyJPGq9C6ZMNqV1yDyl6Dj3ZbKwzEEnhmAp4BySRi9McpCcrtfMaqUDTtPtjFk25%2BG9K0cBn&X-Amz-Signature=ccdc7b0b54c28a719f89307c32f17bbb25988a1a11b1b7f82b883d81d10d0406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXPKTHAJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIEsxVouSBlqqVGsEwXaRU6UM5xxU1U6OO%2BwJpM5hPPM0AiBLIxot0cH8PLM6t6L%2F7hNtKFCod47SqlOOmhYSSdciOyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMLf%2BwpOfyM7IGBtwYKtwDsPwZj6Al4fvwVq6l0fQb7kFEfado65uyMjdc3Bx56wBpBiTptE88w3lHCxIpPG8tmxRwid1GkPDKrjuVRoHap63EbYcxYUTVSBep8paOtDPCqnVSgNfSrCjOdxY%2F1KhaIaVCDQCL2qBP8rNaFRZcLKn7mYcbPsJQcFIQqSSRKD8mA1mtCznLoUO53BrEdq7LZOU2l7yRDjcU3Ou64cd%2F0lfk5uXm5wLZHx9d%2FCxynAwqIVvO7KIzV51G4BEWuR4ellw0XdgVL7weXW%2F7Wi%2B9TMz5d84Fxh3pxqINqG%2BUWM5bQP9Yc2DweAVLoPU3XfdsCYa97qlSQYxMTIGq%2FmU609%2F7fpYOSto3lQTDOeetrLVc8x7VdDxd53cbwF7GFl%2FTfxhAT95YQUbv2iPeOlRq3PsPla2YC74a%2BAtdDoi2CQSRP%2FSOculXUaZyQRRPpMRF3Z4%2Biki90HFM5Ft7gJbL9UgedTcjtBKWSTgMDwlwwUpHJCN1iGc3fnP0vvFifHrYv5sYu28MhayUmRRaLHnBepAITFYPlZAtlerTJ1LSW0o5OFsUeOBBXheUU7a1wcJ%2FfNDTk5xDGIKo8KKUJCUgD%2BWGTVld5HLL96jjik5fitTgoE824EiY7IwEeG4w4Nr9xAY6pgHCphb7v8LFnShAdPv7l7nheQzBc%2Fqq6pBVm1w6ZxSckyumhloKspqHpySxmhhHHxAd1H7hq4%2FZOiMnNJiE%2FDdodPdx9ih8rCQtqYBuFq9366ymOxuOIK0qksRuOaC7R2f3mNUvNX2j8ioyLsiE4IRb5kU11clfu%2BAvJnqgZRaUXDQD83ylkWPeEeiecnrxEJS3dv3%2F6R2FYIkZVEhv3QcbMHA2DB9P&X-Amz-Signature=9d672c0919149dbf778f86aca40b348e81611ee93e855a0d4cd500458a7b674a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SHQC5PC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJFMEMCICT7JbbBmMMWwvo7sbjvtxLXe2YP7LzBEFb047YatnAUAh8e7WYPhV97oOzqwJi2dhQuyO7cDpNRoAwPgARNPg4qKv8DCGMQABoMNjM3NDIzMTgzODA1Igy2HLeHNw72E7cDwt0q3AN40RekCoylQ4G4j5Cj12O34%2Fk2l441JvF5IGQLiZN48gEoH2u386HwNqq7tg%2BgS1BcCpIOw0PW7Q9FdAnBTyS6S5kHPHcZypbOs6nQgzsioeWUlOxUSTcwXvmIxo3E0JMLl1UV%2B9NEbSHbqmSxOjI4LQexZfQY%2F5zi5zJzsZ4mmRExYYpqOqREC4Ox5ww7yT8uzq%2BKeK9aTmdQAVxzGikneld2sPrBjJQIeo2bgk%2B%2BSyh9OTRnrvNBT%2FKFyvet%2F66JtPO0tr%2FVuEcl0UDwT9paBDOtEUzSGi5XwANg3xqYm1t04vhsKpO4wNsIYT6M9InvA%2F2Y6PuaWH41WOblBYJcMoxKg%2BgiRzZ3xf789W%2F2bIlWTdvSzyUzTR%2FvAhGGNhjoHDq4jetPzjIOt%2B97%2FTPmgelXz7NeSvE3crIXcIJCexurYkNibfxRvuy1w3igG8oUActeQG7jFnZDauOo4cH%2FlXVgp3%2FxAMBdjOIQ1XxPw5H1xqREQj22cjNir0gTwjTERCcCGHE6i5r%2FFRbyRvP8hgr%2BviXyZkQkypXPMFgXM37rAeLdO7gnUHJtDVl0hUC6tSR97gbKtnF44n3jpb7tPAl1NaG6WjAAme5%2BMOrOeXXxNwjqKBBiDrFUrTCS2%2F3EBjqnAT%2Bz7HiA1bEf3lTNafr3eg8vk7QNLZ%2BmozMBoJ1Gyl8sAW1nDqK2liH7%2Flh2l9Sdo7GwNghIMmYGMHilgllGD%2F0oFEzFc0qAk9WaAuImbYYnuU0o9YD4LUq2RIdIaaO9F2aV86rECP9sk%2BIVxvYJlovpXu%2F0y6nFOrtM8AbXeqoIeLzmSdhzVXZaxmFxYQ04yOyZWYGhhJ6Gip%2Fcn1CmhXIq8AdS19DS&X-Amz-Signature=ea5a6186d1aea15ffe47310f8b2a8ff6586ea6ac7262c3a19e81dd58f961e8ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UDNRVJQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCVuH1szRWwckHw27RzAZXcZeBMT65p66rZuICgMl2GEAIhAIPjMIuQenXOuu%2BSIlR4HA9tEbY3AZhZo5rsznrtSx3fKv8DCGMQABoMNjM3NDIzMTgzODA1IgxJ9vpjH3%2FqZLzjfdsq3AOmclSH8uGQn4%2FBq4pOLYOJLBzDuAPm1GiSgFJvq9VL88bBp00fFuk3e5oNfZT3d9m53K4lAxoVb4QT%2FN1XKr2GyoWqCu%2Fn%2FQN7vOY9qr8%2BbN%2B2BotCWtTftuSa4MUwjihhEsfSPwdEhLwL6QgxWRqw1xegYVtTSiYiEblH19QqO5TT58AWjIR8XAPEuBs46DFs9FHMLui7ijUTI5Mr7YXbHKn8U62e3KRFkvQp65tyH3x8M1GPTHJtTnxl4bGo9ijNlgNSNcj1SoiGDdIcwJefXrMVFtBhfP6OHrvWpLlYRw%2Bzs0orYweilaKlmhPpYOHw%2FVz0bm3UVU2vjgErLSaicJxgS%2FIptrvzyTGx75WaWnUH03NWsBd394LeliWHL%2F7448qS75ZJ4O6UGb9HO1tJdlIJN5H%2B93900P626wHi%2BAk3BGy8vAnzqt%2FbRjhr9XGNGm6fgM%2FMOkAHMOvknhe8sA0uN%2FSHUTrHobffSXFG9pqk2s6DKUIRDDnEVa1GyHInSOKiAowIhC%2Bt2%2Fm%2BPWeaLtGq40FFsgTMDfQA1edmNFSlUI5g%2BtWi8mIW5j41Go50kDzVF4umPWmGFAdUdwBRVn3tXVgXXGKPP%2FmTDYurb8jA%2FJCIkPPjcLqVnjCn2v3EBjqkAXMBizC4gNsWoWWm4UFlZn4nO7R1TCO9go287PgT9aFuw5MHXQ%2BAEDDjyaLTgYri1lBW1sSWTgBYOkeeYZAEJMOGKUWfm3rPs5LEpIjBmjiTHUscJ7Knl8W2qdIknMENa7lTVyFkR%2Fd91YRfqrbMFyJPGq9C6ZMNqV1yDyl6Dj3ZbKwzEEnhmAp4BySRi9McpCcrtfMaqUDTtPtjFk25%2BG9K0cBn&X-Amz-Signature=0fee9f35f007c0000d25e4dd308d3e24155515538b3f27b991aea90a005375db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
