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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRCSLBY3%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T121140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCICBhkaAuakiHR%2BYxAKBH5MhLMb9Nsuu%2Bs6OrtRLPWDe8AiBtn1ytI6CBpMfvI66a1ykibbTyVG5X2jOgX5ZP8KkfKiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTy8dRCy8eOG7%2B4DbKtwDQnfts3L8j2NZYQ3scVe%2BSjy0RE1Hs4Iep3MXKkRxUSsJpA35y1Xbz2c3TZs5E%2By85P3%2Bj95NrW1lBpUTM2xoEHzt3BM9hzjGS9%2F%2F4BpcWgQE%2B8cDYQQ2jJfxZUON0gr0nsErh7V1FnxSkDzspJjM8HNH0K9wow%2FXdhlF%2BSQkPNJeDkFvbYvq0%2F05dthr%2FlhU2qfz1fGAKMvJDmBJ4rhWxyQiBKMMne220XPPwPBN39HJEPY8IXQVzi3XYS1aOMs%2BloPbNkRahfeCfxwvvKTeEx%2BRD5criR8f9NY3PxNLgsOqfrB2MUGMV3YxSA%2F1A5eiDDam%2Fnq7iXZ%2FhuONqy89vihPA%2BlxdYUrQKzlRsKRrVdTnBdUsCnZnBx8x9LYcOTG%2FQWsAQrkzV4LSTPUWH4KbYfxhGA8Gg%2FsLp1aYlK8fbE4v%2Bz%2BO9glWoypoLnbxb%2B4CP%2F3jx6kI3nCWhl7u8HwdsMMJvSspAuwmLfwVP4o7OADqWuZ1SSjzcCVRm8I4gMRbETm64wFP7DjWjkex%2B7B8ErQ%2BuNozYb1LBwooIXhTO%2Fjo8wJMjPzn3hi43oQiro7saHBADzJXV6lHhvMhaHnaHV9x9bOvIu0hj6eJmnjeHAkGNX8kinJDNyYKGUwmIadvQY6pgG9U4Xg43dpUUxl%2Fp5jMpO%2B9S1i2cFIW%2BKJFfrFTn3fUvb8rvBAT6JqkYmQF16UCXuGQln0NVvayi3K7dxX3G7jlKleAa9oi7Bq4uHH4uR%2Bc3bqV6jr6L40AbMe5M21hfWq0J9Ro3xQjgScvmyDXl1yNekAPAHNKuiuIKwPEnZ6aOWoSLXX0Wdgd2VdJRJ%2FOQKiHhRP8retWuyBDOR9lfc3L%2FSesc9z&X-Amz-Signature=0c6ef98cf1eee824d9f64036219d04fc18efb19f95553866f1b20545f7bb7ff7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRCSLBY3%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T121140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCICBhkaAuakiHR%2BYxAKBH5MhLMb9Nsuu%2Bs6OrtRLPWDe8AiBtn1ytI6CBpMfvI66a1ykibbTyVG5X2jOgX5ZP8KkfKiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTy8dRCy8eOG7%2B4DbKtwDQnfts3L8j2NZYQ3scVe%2BSjy0RE1Hs4Iep3MXKkRxUSsJpA35y1Xbz2c3TZs5E%2By85P3%2Bj95NrW1lBpUTM2xoEHzt3BM9hzjGS9%2F%2F4BpcWgQE%2B8cDYQQ2jJfxZUON0gr0nsErh7V1FnxSkDzspJjM8HNH0K9wow%2FXdhlF%2BSQkPNJeDkFvbYvq0%2F05dthr%2FlhU2qfz1fGAKMvJDmBJ4rhWxyQiBKMMne220XPPwPBN39HJEPY8IXQVzi3XYS1aOMs%2BloPbNkRahfeCfxwvvKTeEx%2BRD5criR8f9NY3PxNLgsOqfrB2MUGMV3YxSA%2F1A5eiDDam%2Fnq7iXZ%2FhuONqy89vihPA%2BlxdYUrQKzlRsKRrVdTnBdUsCnZnBx8x9LYcOTG%2FQWsAQrkzV4LSTPUWH4KbYfxhGA8Gg%2FsLp1aYlK8fbE4v%2Bz%2BO9glWoypoLnbxb%2B4CP%2F3jx6kI3nCWhl7u8HwdsMMJvSspAuwmLfwVP4o7OADqWuZ1SSjzcCVRm8I4gMRbETm64wFP7DjWjkex%2B7B8ErQ%2BuNozYb1LBwooIXhTO%2Fjo8wJMjPzn3hi43oQiro7saHBADzJXV6lHhvMhaHnaHV9x9bOvIu0hj6eJmnjeHAkGNX8kinJDNyYKGUwmIadvQY6pgG9U4Xg43dpUUxl%2Fp5jMpO%2B9S1i2cFIW%2BKJFfrFTn3fUvb8rvBAT6JqkYmQF16UCXuGQln0NVvayi3K7dxX3G7jlKleAa9oi7Bq4uHH4uR%2Bc3bqV6jr6L40AbMe5M21hfWq0J9Ro3xQjgScvmyDXl1yNekAPAHNKuiuIKwPEnZ6aOWoSLXX0Wdgd2VdJRJ%2FOQKiHhRP8retWuyBDOR9lfc3L%2FSesc9z&X-Amz-Signature=d29a33b6f26a5ea4e39edf7af3bb527673d7f9a547cead2169c846fe3c806ca7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZTX4JPC%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T121142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCr%2FH01wA%2FV8Swwio8RuigfLDKugb57I6eSr2aoUMoyZwIgTOpLzeggMCkovKG6hk0qeWNXBIjA0eDg%2B4xLL%2F7%2BHTUqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNc50LtBP%2FrCUWx0pSrcA3ZpDH3vdhJfaOLG6o4Cy7O4EAxb4GAki2Bbj3WEaQPKl8wN3EPJa96KQp9bqb1uBBuspwXFSDAE%2BI7Y9vNUGooe9W1X9IoSwNHb6YZUWRhfns6%2FJc%2F6lpFHYOF7h7be19CyLE%2BgJYtZZuNJ2abHT%2FNPSNmsu9b2ez39XEunFd5AvTtxCYTsuzjRCfFb4vOkKbtJzADp1H%2BVIf4wiVMlN1ICRnaJDJPn5s%2B6eBTfKbBOUa42ptxFNTyTi3wP0Ra9Jf%2F8ixSCdhDDGDIiQi1eie8nqdOKTRceHQgUpHsSNNyUpU6jo2W7GbI50VH8aTWfY3t9KzboKQjWqGPANT1Rn2cbje%2FNwIrADm3dgQyBfh3983ZR1B3kvigmJ2kp9ducNthdc54c5GnVH3Q5Pk5U9a1F7le875NWrMMdQ%2BzBL9XwuYEpLadAW%2F%2FTw26zsETEZDg%2FKoHmD2l11WzUYgZYpGkJaDU4z6jr0rIduBOqqZjxGcxC4UbsZeTmLPFl2qLzPC2jcl%2BES0OdSMSRaYfJgu5UkC6J%2FB3SLza2QpbLhC74dcIXpCmEduPeytCxdUXtIhMtwXvrHwioY49z6qa65ORWBi5AwNKSy80aLVx4yIadnB6WzhO2hBwHPufcMIeHnb0GOqUBYyuOs4ERPnOIdIqgL2uMCe0TH0dHZA792mG5h0QbZ2jdzzXi8pX68Ot2J0ANmL%2FJXYaIVd0WTdpOISQzbgbjKgsTyl0vwoFYQfsFidxg%2BLwsdBbS9LodDdd6nliPSH%2Bqzh3G%2F%2Bp2NR65Eb9Ii7HxdcN3GISd4Ctp0HvZCYXrYVCV3saagpGrjdNeF7lrs8paNpLtbcXxMHKDOiKQYXEb61TEiqSa&X-Amz-Signature=b68cab5169a984343be7320bd10bbbe25f8d18e81d366afdc46b62153231d195&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E5D4YAO%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T121144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDuMqcx1jKisJoG%2B29YruMobnrgjn%2FgINRW%2BTd4jaXXhgIhAK%2BVeftgovxWT6kNChccduPk7crBVF%2BnIBRvuEmanNaSKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx58s640g8BKfehW5Mq3AMGKwlFnyTPWgA%2BKQ5A0GBGrkMtynnx5%2B%2FqJElD0qUfLbIWMg7lFOt7itK7KSi%2FPeZIfe9sm6Bws12CYeHMExZjBKcdOWLgJWJ9%2B2Jtf7fB10RKR%2F0DIWyvOk8hmXw9mo4qK88s0slAH3bmD1hXuZiiZDWi%2Fc1b2Gbg061KLahoODA0KrRA7Bt5uQuL8htParKfCRf6sOcTEKIyWin0hlX8c%2FGGfyLFGczrYunF4KeQqCZTH%2FucRbr9L9lwk35m9l7fdOIEQQvIhS2CwiVVG7MaoenXK2d2%2BBmC32WcFGAIb7tPnje6qdl%2BC8vm0GKsvSPfC7neN%2FDBw018pOUOCLS8jEpw5Uaox7VfkGerZiYp1kiX4JKa1Tu%2BYxEuuig1hUFADe2tSy%2Bj%2B8wabB2Igvgcnh4N%2FU3x6AHR%2FV2Gs7iyS2W0RoZMFCNKfjgOP8BItvbbeqbH6qO26nuAiCaPjtr%2FXyyh5R3scNhXEgK4qlNA7bl9l%2BI%2FLBei12FUot5w%2BQ0Coucq7T3ThDkQqtxWM43Cpl6L1ZnhkLLIRddZl2DBgihoqKq1NwB8zBsqSpDXHZcg%2FF2xQGOxcrFVqN6lAMb30LVTwweDiH3ehPVr6D1ZU9V%2F8gE8YxEtQ%2FcByjDohp29BjqkATkwPgUbEria%2FqcIyOaWDfQoou87hPPrXYIpBFF4rUp8yOQAs2Am%2FZ0igx2Z3RkuCcVzJYbrQ81KSFPs%2BuNo1qf27aZINlml4a%2F2itV%2BQqNVdQKhD7zN5MzWHGcGh%2BMa2SImVRvi1RYFN3jZotadoqjBydPx7ck5pfbkm%2Fe5gybbZAVB1xVOQdDktLUYdaXPviA7TfPWrUrTi3cRoAuHniDnLaMS&X-Amz-Signature=6221272d437a4e30c07cfbdd6c79f4e84d3e5fbd372d9938136cbe54362980c8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRCSLBY3%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T121140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCICBhkaAuakiHR%2BYxAKBH5MhLMb9Nsuu%2Bs6OrtRLPWDe8AiBtn1ytI6CBpMfvI66a1ykibbTyVG5X2jOgX5ZP8KkfKiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTy8dRCy8eOG7%2B4DbKtwDQnfts3L8j2NZYQ3scVe%2BSjy0RE1Hs4Iep3MXKkRxUSsJpA35y1Xbz2c3TZs5E%2By85P3%2Bj95NrW1lBpUTM2xoEHzt3BM9hzjGS9%2F%2F4BpcWgQE%2B8cDYQQ2jJfxZUON0gr0nsErh7V1FnxSkDzspJjM8HNH0K9wow%2FXdhlF%2BSQkPNJeDkFvbYvq0%2F05dthr%2FlhU2qfz1fGAKMvJDmBJ4rhWxyQiBKMMne220XPPwPBN39HJEPY8IXQVzi3XYS1aOMs%2BloPbNkRahfeCfxwvvKTeEx%2BRD5criR8f9NY3PxNLgsOqfrB2MUGMV3YxSA%2F1A5eiDDam%2Fnq7iXZ%2FhuONqy89vihPA%2BlxdYUrQKzlRsKRrVdTnBdUsCnZnBx8x9LYcOTG%2FQWsAQrkzV4LSTPUWH4KbYfxhGA8Gg%2FsLp1aYlK8fbE4v%2Bz%2BO9glWoypoLnbxb%2B4CP%2F3jx6kI3nCWhl7u8HwdsMMJvSspAuwmLfwVP4o7OADqWuZ1SSjzcCVRm8I4gMRbETm64wFP7DjWjkex%2B7B8ErQ%2BuNozYb1LBwooIXhTO%2Fjo8wJMjPzn3hi43oQiro7saHBADzJXV6lHhvMhaHnaHV9x9bOvIu0hj6eJmnjeHAkGNX8kinJDNyYKGUwmIadvQY6pgG9U4Xg43dpUUxl%2Fp5jMpO%2B9S1i2cFIW%2BKJFfrFTn3fUvb8rvBAT6JqkYmQF16UCXuGQln0NVvayi3K7dxX3G7jlKleAa9oi7Bq4uHH4uR%2Bc3bqV6jr6L40AbMe5M21hfWq0J9Ro3xQjgScvmyDXl1yNekAPAHNKuiuIKwPEnZ6aOWoSLXX0Wdgd2VdJRJ%2FOQKiHhRP8retWuyBDOR9lfc3L%2FSesc9z&X-Amz-Signature=5d0bdcf65c16471f4ff51d6fb9b9ea04051a30838c7316a27a411a58b01e455b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
