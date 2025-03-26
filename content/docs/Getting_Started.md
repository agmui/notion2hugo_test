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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6KQHIUE%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCINgL78P%2FZJGZc%2Bp1SWY3dHEs1%2BKSeDlJTN59agoFuOAIhANHkJuMUlTl%2FPGbdGmdkFYXtcAT488pnsT7VGsGIpGISKv8DCCoQABoMNjM3NDIzMTgzODA1Igxqw7FiTrJgTVruoJAq3APwSlskHDO5dOJ2DzTYUhLaeweLKja3kVkKf%2FAS%2Faeo%2F0wopNyvvTb2O1mXJIeWXnrRhMSUmdBTJ3%2BXntArDdmxz6jBbROxm7VV9NCAefJ7Z6Pyn7gMkCJGw0IcElnc7yqs44LQmXwqP0y5KYg%2Bx62QspW6P8gKaqnjeDTMM0HoMkZka6dkE2D56DLI4wvXnMWiMSaBNKGCRUgSZLg20kNQ76Y%2FSUqhrA%2FqaRmr9Ptx21%2FtEquvBS6TmX0BBFRmcHfgh5aMervdc5EUV%2FOmBCNyzEBnU3S9%2BN2sOs6ZinfnxGwQRrO8l7Pub%2FEuVw43tHTQ0js6ob%2BhxO5KQGSc9lfMlCQTrAQgHIVN%2BxHcTBdBy4kAtq8pSKf5b54UMdAWuDxijH29R%2Fq9DaKYO5uRqw7gXtnx1A471%2FmfJZ38wB6vPhMsB8OO%2Byyym4nokEWF5qB13YbU%2FyphDGNrJqYl5EXCY5RmS%2F8Rv8xCQYks2gQxIddze8jBnYCwIzDUDfhRy5RkJzs1S7xXpXYJhiKL8JpOepAr589qt25T1c%2Faaj7Ibiyzl8pLxQmVwNwHS8JyzsjoBhCREkpmT7%2B8cHdEpRIOnQJ6qCDOZ3DCjLrhRx0VcJS07Yb3spmXaOtUUDDAio%2B%2FBjqkAVEtK0v173JYthCm1DfOc0WhOfaqoEsFKypvd%2BZk3MPzabrz3YZEtOnKA0iUJMQff4f0MAntaIJNyPOQNR2Pn3vvUErCbJvtJHObgGlsk3N81zaHW0%2F6hKxU8qWr41I84Tqi0shJrhJBb1faVzWX40oy%2FtdabNRODplYOwwZ43Yei5Ff2jNddRbbfJwoJi2Mlo7c8b4Jmpw8fBJHZLd%2FcNjDTMBQ&X-Amz-Signature=0d4baccf9f94e5e26c2f983261c655f208da19c21911cbe33dba8ef16810b0bf&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6KQHIUE%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCINgL78P%2FZJGZc%2Bp1SWY3dHEs1%2BKSeDlJTN59agoFuOAIhANHkJuMUlTl%2FPGbdGmdkFYXtcAT488pnsT7VGsGIpGISKv8DCCoQABoMNjM3NDIzMTgzODA1Igxqw7FiTrJgTVruoJAq3APwSlskHDO5dOJ2DzTYUhLaeweLKja3kVkKf%2FAS%2Faeo%2F0wopNyvvTb2O1mXJIeWXnrRhMSUmdBTJ3%2BXntArDdmxz6jBbROxm7VV9NCAefJ7Z6Pyn7gMkCJGw0IcElnc7yqs44LQmXwqP0y5KYg%2Bx62QspW6P8gKaqnjeDTMM0HoMkZka6dkE2D56DLI4wvXnMWiMSaBNKGCRUgSZLg20kNQ76Y%2FSUqhrA%2FqaRmr9Ptx21%2FtEquvBS6TmX0BBFRmcHfgh5aMervdc5EUV%2FOmBCNyzEBnU3S9%2BN2sOs6ZinfnxGwQRrO8l7Pub%2FEuVw43tHTQ0js6ob%2BhxO5KQGSc9lfMlCQTrAQgHIVN%2BxHcTBdBy4kAtq8pSKf5b54UMdAWuDxijH29R%2Fq9DaKYO5uRqw7gXtnx1A471%2FmfJZ38wB6vPhMsB8OO%2Byyym4nokEWF5qB13YbU%2FyphDGNrJqYl5EXCY5RmS%2F8Rv8xCQYks2gQxIddze8jBnYCwIzDUDfhRy5RkJzs1S7xXpXYJhiKL8JpOepAr589qt25T1c%2Faaj7Ibiyzl8pLxQmVwNwHS8JyzsjoBhCREkpmT7%2B8cHdEpRIOnQJ6qCDOZ3DCjLrhRx0VcJS07Yb3spmXaOtUUDDAio%2B%2FBjqkAVEtK0v173JYthCm1DfOc0WhOfaqoEsFKypvd%2BZk3MPzabrz3YZEtOnKA0iUJMQff4f0MAntaIJNyPOQNR2Pn3vvUErCbJvtJHObgGlsk3N81zaHW0%2F6hKxU8qWr41I84Tqi0shJrhJBb1faVzWX40oy%2FtdabNRODplYOwwZ43Yei5Ff2jNddRbbfJwoJi2Mlo7c8b4Jmpw8fBJHZLd%2FcNjDTMBQ&X-Amz-Signature=c35a844269b26d3f6bf94555fbf7613e8f11cfe1ea3de4cf43676207114b26b8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UOY446%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDAIkwwnCHDp3ReF%2FSemFCUFM1yNy6k22B4fr08bPzWAiEA6XCKzB8fLcr%2FEAGzu8rvwtCh5VHY3vtlzctIbJGbkAkq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDLyvYUYSHiB7fAh6NCrcA2ss5%2BpJ6%2FpXhKpCXewXs70XBdAWEgZQRY98xfzEIOGeVksrvU1qEdK9TQ5CZVvbvycNgN0eKXR9HE%2FMw6WW4x%2BSFukMmR9zluPJUwW%2BZofAFMl3RZ6gLGF%2FGnwv8NGrQirrSCIMtjTe25bym9HqqypuyjAA%2FpHVN0vod%2FUkcW04x%2F2V1VugyEXWilu3WN09ZSUX3L6Ip4ljZRL0LuaWcaju5yBBOMEFziMu5H%2BH94saj3A3wNEItzqLpIVmNf8jKNzIxeKss6B9fkeuahOkrrGP73PYuXMq2nx3pCRg9HBLqLrgoznZjYuuan7BhuO9VL6Zd82wGNQJIDdPGDQ5HaaOugDBx01Usa0qy7pUWeIHkzVvsCq5tBbgmYLrU32onbgSvPVFj1pboH709w7aP3cZpy%2FMUpJC0jUnmHC49GopM8%2FX8g%2BG28R%2Fuv%2FgLawXfuEJ%2FELMOh1J1l3kuN9%2F9LoR1QKk6OsQmh4SvQRP4%2FcHx5T3DHwGxQc%2FYmRN2v%2B5wj7Rh4DvsbTvtpd59gVhBxqCi1hrA1H%2BC%2F%2B6sX%2FIAJffJhlvfvuhCRPRX%2FMLVmsnrcTvnYb6Yo1aXSeenYZw9fi8vUb0%2FPgpFuPfTJrfRBKnMYxtopHqfKMjAXbgMMmKj78GOqUB0su4Xoa5ZgCWwwCP%2B%2FyVPcwEPgkwlylVHE6ZrXSRPuQ9jFszVUzjY%2FpVKtuf%2BqRv2GUaRRqSUKKTYZwMKJH1gWy7Y0mP6xkw5WTr1vTS6ZGeIajFsfmw%2FQH26N%2F7x%2FAVEkDd%2B2MxMEEAeDA6gVTCidqc0yYL1yubnosmHp5r6r6THCm4iuB73aEzMkVApihkUK%2FC1KNQ9MRVbK5Qhxgb%2FjxoPly7&X-Amz-Signature=f062d110a9527a0eed267cc92ad20509cf8692f17a9ec5433838d6714c2b4a42&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAIDZOCK%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCowVbozj0Q5SH8KOx%2BMeoB4U2z04aKNF5lFb1UzZh%2FcgIgKTiIBSmkNsPj%2FHkcbmqMkJNwBpEXwwoAM5CfsL6K8IAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEMkhQdocFWVMMqwsircAysOuMGjCTTvvpo5jpGmV3i3JxOz%2Fy7XlrznKUj8Mip5%2Bp%2BzLjiuyanKtQcT1efvj3VXZufFBgUzcyNAnLQ16hgQbfDE52qWxGd1giN97o0QqH9WBIDRSsI786Db6KMTzJyopFwYuJInqutKVffNN0pc1AWb%2FWFP%2FfTgWevEUXP2u5xJaBbgSXqGkJ3Cn7e8NFJq2PIpvlCAeLmXbG9ZWoSvG55N%2FR2kH9ND%2FEoQFBi%2F3PRo30NXjNgeBcAb7qUzvNeM6afKLCdu1qwvg%2BRWMHjqZXj8UaIFvIFvceglmmGFv5ocIpdBdHkbGscJiuPc95yBnJw2UG2D6UI70mz3BSxJdVrbSc9vdc%2Fr5Txo1KVsl%2BU9BPeupWOxy4TjMnwWyZHQ7Lailt6nNBztuDlwVc%2F7TJDFT%2FsLAzP6Ol6OH8ve8%2FdBvRuM71jS23Ec0SBMRSuolZaJqn%2Fsz3B1vy1lrPT0rtLVelyEfr6W4cDV1XzRjtIHVVrxMkCSEhM%2BpK7aiEN5uYaKpu7asxweLWn0M6m3WyYtt%2FiRSVPA9l%2FJACuPxC%2Bqy2Eu3%2BcddpcxZtrmyjQBAfziU11F8A6evtWrC4klnAwI8M%2F1jjITlO6ZS4jYQtw8GpRjrBM9q9rWMJ6Lj78GOqUB5DWy4s4VRu7tlW17fCWnZJAkdnU%2BY8mHx%2FdLmzTR3Bk0Xqa3Cwrbmah2mDCvU1CHy0mNdG0wdEXAabPBlb2QDbqOsp3CFHJRgwVqFI6A0hptQdCawTy1L4VVEPb5sX9uClQ40GVJfcSQ8ez8h%2FX0L2JWR4M9SFYTYmNfB3pV7Hmn50Eao9fIT5fBGpDHUEbQ5URQK%2B75UX%2FzCtSXBAzjdlGtMTx9&X-Amz-Signature=2e8ef9141b4a2b9a7a7ce23947566f138cf1684cdc68a78b31659cbcd00e5752&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6KQHIUE%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCINgL78P%2FZJGZc%2Bp1SWY3dHEs1%2BKSeDlJTN59agoFuOAIhANHkJuMUlTl%2FPGbdGmdkFYXtcAT488pnsT7VGsGIpGISKv8DCCoQABoMNjM3NDIzMTgzODA1Igxqw7FiTrJgTVruoJAq3APwSlskHDO5dOJ2DzTYUhLaeweLKja3kVkKf%2FAS%2Faeo%2F0wopNyvvTb2O1mXJIeWXnrRhMSUmdBTJ3%2BXntArDdmxz6jBbROxm7VV9NCAefJ7Z6Pyn7gMkCJGw0IcElnc7yqs44LQmXwqP0y5KYg%2Bx62QspW6P8gKaqnjeDTMM0HoMkZka6dkE2D56DLI4wvXnMWiMSaBNKGCRUgSZLg20kNQ76Y%2FSUqhrA%2FqaRmr9Ptx21%2FtEquvBS6TmX0BBFRmcHfgh5aMervdc5EUV%2FOmBCNyzEBnU3S9%2BN2sOs6ZinfnxGwQRrO8l7Pub%2FEuVw43tHTQ0js6ob%2BhxO5KQGSc9lfMlCQTrAQgHIVN%2BxHcTBdBy4kAtq8pSKf5b54UMdAWuDxijH29R%2Fq9DaKYO5uRqw7gXtnx1A471%2FmfJZ38wB6vPhMsB8OO%2Byyym4nokEWF5qB13YbU%2FyphDGNrJqYl5EXCY5RmS%2F8Rv8xCQYks2gQxIddze8jBnYCwIzDUDfhRy5RkJzs1S7xXpXYJhiKL8JpOepAr589qt25T1c%2Faaj7Ibiyzl8pLxQmVwNwHS8JyzsjoBhCREkpmT7%2B8cHdEpRIOnQJ6qCDOZ3DCjLrhRx0VcJS07Yb3spmXaOtUUDDAio%2B%2FBjqkAVEtK0v173JYthCm1DfOc0WhOfaqoEsFKypvd%2BZk3MPzabrz3YZEtOnKA0iUJMQff4f0MAntaIJNyPOQNR2Pn3vvUErCbJvtJHObgGlsk3N81zaHW0%2F6hKxU8qWr41I84Tqi0shJrhJBb1faVzWX40oy%2FtdabNRODplYOwwZ43Yei5Ff2jNddRbbfJwoJi2Mlo7c8b4Jmpw8fBJHZLd%2FcNjDTMBQ&X-Amz-Signature=47898586e617f873bbdabd993ace312d221cca79e75dc87679b3f3be43d56b3b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
