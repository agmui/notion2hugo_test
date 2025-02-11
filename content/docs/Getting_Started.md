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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MBIIWX3%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOs2kxcieuuSFwZCWv%2BlXSZcR3WHMgG%2BmLjgUj9WYcaAiEA22J3shtpfrR0SC11ywqdPWD5J%2FcsV8Dc%2BBzSs6MZb34qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLetNH1S1KiByAe4DCrcAzGwu0L8f5fpYlhHlqpbERsTkhGKkZ0nIrY%2Bx7hPbKNGW53IiC1U3Q4Lp%2BOEWxlknHiBFjAMnzZbgZVgIiQH1%2F0FWMJhpVjZqUNZdF1B5GMLFEghE%2F6eKt8ul4qLgoYrc3QG9ug0vxt%2FBGHXt1CxPdktJ82HfOPViKjhsmqp2oh7gWG62Ie7GCJXLa8%2FijfOz9Rl4ksUpljWOYeHlN2CDD1TzCs8S0lEEtsmponinvnZeRiePGnwvgALnc0Gy8jCZeTQw7lf22Yu2e5mph4Mf9iujOFjYYoAY7DVYrhd9WaPdJ%2FMii%2FvGawM1BP6l%2Fbpf3FZ9TkJ%2BgtMizyLQ%2FNikZdOsgP1MuS87lRYQItR2h%2BEqUFWefRnAcbvnmvPnizD0FmhzU%2Bw%2FpKiqDlzNAnML1Cj18KgNWuO%2BSs8m%2B%2BqgadQO91PjdzHTPfSxDUhoY5PFm%2FWqrI%2Bo4DwZfYoqPXARxFDH1puSE6cLl5ryjxcfR0E6emzLDcYvSkYtVWP1H5VSvqEoxYqXVjjlzeq59cjQnM5rVeWOLdJzD1IUivYqBn0cY%2Fwh%2Fml%2FvzD1vo2hJbMNZo3ILBa%2FM54nCtdz4Dl8fqIbIrY9lgnBBjUsv1V6amSEEIWnSeHBLI%2BtxQNMMDCrb0GOqUBSg2KSsiKAoNIfhUV5rw%2BEAAviedKAdFLDOkQTKFVY0lTFmHuTkdw7w9wpSoD7Ezc8aMsxVlATKQfwWCSoamIsyyYOXn%2BeQkmF3KMkRxZxGC6gps908cCbr8TTu%2BsRlxaxMJ62bmz4MsUneGtmt%2BnmUMfZNdgbY9SRhBX8ab2zJVWI55%2BIabps63qDwbH879dT6Op52YXZdhJTO40AUe7bY%2FyyLhL&X-Amz-Signature=a40804cf9b233e71faf099f8acc39990472e9c8a2093135b7b0d3f2da493fea2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MBIIWX3%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOs2kxcieuuSFwZCWv%2BlXSZcR3WHMgG%2BmLjgUj9WYcaAiEA22J3shtpfrR0SC11ywqdPWD5J%2FcsV8Dc%2BBzSs6MZb34qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLetNH1S1KiByAe4DCrcAzGwu0L8f5fpYlhHlqpbERsTkhGKkZ0nIrY%2Bx7hPbKNGW53IiC1U3Q4Lp%2BOEWxlknHiBFjAMnzZbgZVgIiQH1%2F0FWMJhpVjZqUNZdF1B5GMLFEghE%2F6eKt8ul4qLgoYrc3QG9ug0vxt%2FBGHXt1CxPdktJ82HfOPViKjhsmqp2oh7gWG62Ie7GCJXLa8%2FijfOz9Rl4ksUpljWOYeHlN2CDD1TzCs8S0lEEtsmponinvnZeRiePGnwvgALnc0Gy8jCZeTQw7lf22Yu2e5mph4Mf9iujOFjYYoAY7DVYrhd9WaPdJ%2FMii%2FvGawM1BP6l%2Fbpf3FZ9TkJ%2BgtMizyLQ%2FNikZdOsgP1MuS87lRYQItR2h%2BEqUFWefRnAcbvnmvPnizD0FmhzU%2Bw%2FpKiqDlzNAnML1Cj18KgNWuO%2BSs8m%2B%2BqgadQO91PjdzHTPfSxDUhoY5PFm%2FWqrI%2Bo4DwZfYoqPXARxFDH1puSE6cLl5ryjxcfR0E6emzLDcYvSkYtVWP1H5VSvqEoxYqXVjjlzeq59cjQnM5rVeWOLdJzD1IUivYqBn0cY%2Fwh%2Fml%2FvzD1vo2hJbMNZo3ILBa%2FM54nCtdz4Dl8fqIbIrY9lgnBBjUsv1V6amSEEIWnSeHBLI%2BtxQNMMDCrb0GOqUBSg2KSsiKAoNIfhUV5rw%2BEAAviedKAdFLDOkQTKFVY0lTFmHuTkdw7w9wpSoD7Ezc8aMsxVlATKQfwWCSoamIsyyYOXn%2BeQkmF3KMkRxZxGC6gps908cCbr8TTu%2BsRlxaxMJ62bmz4MsUneGtmt%2BnmUMfZNdgbY9SRhBX8ab2zJVWI55%2BIabps63qDwbH879dT6Op52YXZdhJTO40AUe7bY%2FyyLhL&X-Amz-Signature=2921675fadb9392d436b12e9f04c0111e924618544613e682fcd90b511c74b42&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAELURLF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbCAVXON5JMHnw%2BfdqSkPoSjfO%2BH5ZtanH0bk%2FzpOrlAiB53m5AMTyuMoEnJArgZhxreBZ6EC0%2FpSZ%2FS67fIFvaSyqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX5VeyXgxk3WDhaVaKtwDxerPxOLiQle807%2FjonZQ0lfFKoeUBrVfKN4PjYuooJGozsGCc9YIBVAS20tDNdNHNL2UhWAgduNm113vek%2F91ZzTFjvoZhz%2FWOC032yFLaQaDcO8%2B43OMTA4FeYHdhMNJWSkWjBT4W0oqgJdtGFb%2BShV7Ottv6Fjue5N%2FogfZ9et9xPTxof0eHfU4rYaCbWt8uG6UNKE2y8%2FmiDBYbT4f8oIQu%2BBRtwTP%2Fn4NEa%2FVJr3iF10C3ucWRONe4cpeUtcly1g65bGItSPQJAr0pSPrpI9N91Y83KUeAV4R8ZDOPTiFMEMpgiheo0VktPvDRj6EjOR7Pv1rzie0N7pCFIH%2BvS2vZx8OKyqwbB6XcvRORdattl%2BkQ0uQlrBHNblAgP%2FAuNVVmg0NCSAnW26mRt03TyThNnb%2BQozJYnL8ndWndc78OQbEG8fKwk9r3l%2Fmqr%2F5r55j44quRNLom8H1urS1mBKbi%2FVb2ZmjbvTTk8qhef39EUW5yiFHdbxnOLSZrAi%2B89qL%2FqJpZrqbK%2BVrCCYZJixN1JiTJOjKZjWExzVo1EgsHK5ztjJIto3K%2BHA%2FK5eD%2BX4UiPJFW3bC6Hmb6YOeOiG5CBWBDvS1%2Bhqt8xI0Kvm5Zkp0wRR7nYGz5Mww8KtvQY6pgHKFZCrlSpr%2F7S0E55FYm03LMoZgQ4FWabJoGyMl1SVOdmD2lz6rzhtfRMTF192yqNY3Wd8L1Jkgl%2FvmljBjZuQbONSxI16xgD5ovRGWGkAU3XRdRneJ9VbSGH3dmrLCNlp%2FdfVhJnh20%2FDU8dzDR1BYWYcpVfSlwGX8vB4hNou19Lt5Zl8sQgTJDxUnopCepDU94ZCk2Y0KQiY%2B7Zy%2B3WQx6i1fZag&X-Amz-Signature=65f3060524abe35604617d1fcfbf329318527f826cc3ee1337aef53eb82cb794&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XXRNQWC%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHqXQAePy9c0npiY0djHtCfv4Pb6D7hM3Hz60qXZx%2FBAiEAuIppD6bfUscfW6PBervuK5JPYD19kPzncNeKUzMvrNEqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1rhrxiSjRvnlqniSrcA5zxIJ%2FcmUpJmhudDocS3NO%2FBmMPI2Tm2ZFfZzyrL7qhs5KpEXWz7BQ2OKoY62ymyLNDP3Op%2F5Xa2LYW3kCo5h124Bp%2BbprXupq%2FaZx5UuEtvgsWnF3v6ergO5gubDyC3iuHIxerEG5usxaoSjr9gkjY5tk0DarCncuFUfjvDnz4zdB6NNUVwBQUtjpbHFyLIJ4Ta6jtdW0V1RAsqzxEh8lOqTGHm1pWAV3UFMygzxibvL6McVhM3PsqopNIhXwZ4uNdibAi%2BIcik7atkdHBUM63NcLVJJ49OP8lFoggy%2BiX7Cy9Izpl%2FM5IiC%2FlG7O2L8pnE2Tnx2mgYn5nr99nItNVMTgFDeoZHPEZo8uOeAgLsA%2FqRWqDkhthziXP2cDTR5QlPUjhQvqHcwRSbmy88gadyUYpmioUA77sNiruy1W2snClXdel6TNrwnwVTgy%2BRY%2FkR%2Fz%2BtrjzOlrKK3ckcdq%2FOPMTuabK7Tg1rxZwLbR6Ibl%2Bj5kb%2BL8UzO8mV6Fycdml5ZfHb74bfNWvwTFi0RtLuae6MR1ivqJS7SW0KBdjY%2F9ejRJa33wNCFJl0NMKLMUqLw8yhg6PiaoWe3r7Ud49qivfp5GVV5w6vaJL8wmKLN0yyo2qcw%2BEtHrPMJzBrb0GOqUBDWbtJYAmzRx6%2FGc55Szvqqdlq8f4ugzT1YMwb7SjXHPos3fIDEyhxW6vUspPghh44Dked1dzE%2F%2BQMrxqS2ghVAKPlT53Otg%2BFX4plYZegDWWmf1Ot6zKv8v6AT%2BTo5xm3A2w8S1Jtnl%2B9eUmQqAEskPy9oJmdgOHUxvP%2FDvOdNym0e3dd6ylk0EL6i9%2BEpv3FSGZ%2BBdG9lxEiDohkHDP7x9zVDl%2B&X-Amz-Signature=8bf71457035d9a537d9b86c9fedcefe55e882cbfedbc6a0a8abcf2e99f65ea27&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MBIIWX3%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOs2kxcieuuSFwZCWv%2BlXSZcR3WHMgG%2BmLjgUj9WYcaAiEA22J3shtpfrR0SC11ywqdPWD5J%2FcsV8Dc%2BBzSs6MZb34qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLetNH1S1KiByAe4DCrcAzGwu0L8f5fpYlhHlqpbERsTkhGKkZ0nIrY%2Bx7hPbKNGW53IiC1U3Q4Lp%2BOEWxlknHiBFjAMnzZbgZVgIiQH1%2F0FWMJhpVjZqUNZdF1B5GMLFEghE%2F6eKt8ul4qLgoYrc3QG9ug0vxt%2FBGHXt1CxPdktJ82HfOPViKjhsmqp2oh7gWG62Ie7GCJXLa8%2FijfOz9Rl4ksUpljWOYeHlN2CDD1TzCs8S0lEEtsmponinvnZeRiePGnwvgALnc0Gy8jCZeTQw7lf22Yu2e5mph4Mf9iujOFjYYoAY7DVYrhd9WaPdJ%2FMii%2FvGawM1BP6l%2Fbpf3FZ9TkJ%2BgtMizyLQ%2FNikZdOsgP1MuS87lRYQItR2h%2BEqUFWefRnAcbvnmvPnizD0FmhzU%2Bw%2FpKiqDlzNAnML1Cj18KgNWuO%2BSs8m%2B%2BqgadQO91PjdzHTPfSxDUhoY5PFm%2FWqrI%2Bo4DwZfYoqPXARxFDH1puSE6cLl5ryjxcfR0E6emzLDcYvSkYtVWP1H5VSvqEoxYqXVjjlzeq59cjQnM5rVeWOLdJzD1IUivYqBn0cY%2Fwh%2Fml%2FvzD1vo2hJbMNZo3ILBa%2FM54nCtdz4Dl8fqIbIrY9lgnBBjUsv1V6amSEEIWnSeHBLI%2BtxQNMMDCrb0GOqUBSg2KSsiKAoNIfhUV5rw%2BEAAviedKAdFLDOkQTKFVY0lTFmHuTkdw7w9wpSoD7Ezc8aMsxVlATKQfwWCSoamIsyyYOXn%2BeQkmF3KMkRxZxGC6gps908cCbr8TTu%2BsRlxaxMJ62bmz4MsUneGtmt%2BnmUMfZNdgbY9SRhBX8ab2zJVWI55%2BIabps63qDwbH879dT6Op52YXZdhJTO40AUe7bY%2FyyLhL&X-Amz-Signature=b0a20fa24eb3480ca7d8e35d352ee990be287329b8e83ef23121c628263ab49b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
