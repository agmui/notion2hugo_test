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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXRSP2UI%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ1WbmW1xPMHHNxS5f4vM2D7lYZliNaKHfAE6qPcUemAIhAO3y8bV6sF23rrGAxh1nf7c%2BtOsNJNopxMM%2B280gr%2FkmKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1sYum1FJ%2BLCUKXdkq3AND7QaS%2FUnYcperDW0w4YmF%2Bosl4aF6Xk%2F47WGbl7umuQvUIdILsw6MAdXE33zcN0RaPyA7DDP3WSyCy3TPipQPm0qGU4954SjNx%2BwyDtga2Vb3N4vJh9Bqt96o3fsZZUBf3u7OITCTCq15ztVMhyEgS%2B9b35qWJXUCxKUfla4SitiQTvSY0c0Q4cGepM8yhAk16sVH0nS6VAeJX8e70LcBD1cjIiNr2WDd3%2BXjv8zdU5Yd%2F0am45N3Eez5aiakv4s8wVFlkiqZ1EdiqaUlrSK3YtvgX9q841qDVUtIEt581BBTrgpZ4eHECHiTPRvshv6aOW6uktXZrZZDPag9Um8i5JY029B5zAmUfJcIALRpoTPjcwFbyR%2FYo8h6Jd%2FLyvi9vjyVkAxRxiwPT93dFrMLTB3hDQmqQ91J%2BBsTQwbW0%2FTa5C2eKbc7qsMpDN0BtjVyp6pFLaZTmpCeoFiqy2f1FkBu8wWveM3hPw6Ka05sRqBJMkSkWgdYGNl8zUuv5Ph5fvem%2FouAPpVTrKMjplJ5oR6ipQz2XcjmbB13tRGPaamlYRsgQhN5daEzVr6PXv0CwkqiYZfJaWE9gbThEPz8Cu3IVjGvAAfAUWyBMh%2BTILbLQEbuNHJYOpU1FTCX5aLCBjqkAeFYOVg7YieNxI7IAB13Ot6GX0qPNGYIhThTswvvRQkSNV4DX5HDstzeqn1Gj2Hl2wFsPBK%2BJakuoqJ3WDPNdYONFsga8NRIqalgnFGzEylX6H%2BY9ih%2BvBmrAf3YIp3tAAEP3uTtUtWzD%2BNSH6yutnEEmVUvUyihtFlI2Io5S7%2BIFzp48L1OCAmsIDMZaNNvUTBSKNA33%2BGAA1EjyG5hNfHUVa1n&X-Amz-Signature=256923893f8169fc20672d2c60b3af8c4631b9db02489524425e912b8ba0e6b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXRSP2UI%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ1WbmW1xPMHHNxS5f4vM2D7lYZliNaKHfAE6qPcUemAIhAO3y8bV6sF23rrGAxh1nf7c%2BtOsNJNopxMM%2B280gr%2FkmKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1sYum1FJ%2BLCUKXdkq3AND7QaS%2FUnYcperDW0w4YmF%2Bosl4aF6Xk%2F47WGbl7umuQvUIdILsw6MAdXE33zcN0RaPyA7DDP3WSyCy3TPipQPm0qGU4954SjNx%2BwyDtga2Vb3N4vJh9Bqt96o3fsZZUBf3u7OITCTCq15ztVMhyEgS%2B9b35qWJXUCxKUfla4SitiQTvSY0c0Q4cGepM8yhAk16sVH0nS6VAeJX8e70LcBD1cjIiNr2WDd3%2BXjv8zdU5Yd%2F0am45N3Eez5aiakv4s8wVFlkiqZ1EdiqaUlrSK3YtvgX9q841qDVUtIEt581BBTrgpZ4eHECHiTPRvshv6aOW6uktXZrZZDPag9Um8i5JY029B5zAmUfJcIALRpoTPjcwFbyR%2FYo8h6Jd%2FLyvi9vjyVkAxRxiwPT93dFrMLTB3hDQmqQ91J%2BBsTQwbW0%2FTa5C2eKbc7qsMpDN0BtjVyp6pFLaZTmpCeoFiqy2f1FkBu8wWveM3hPw6Ka05sRqBJMkSkWgdYGNl8zUuv5Ph5fvem%2FouAPpVTrKMjplJ5oR6ipQz2XcjmbB13tRGPaamlYRsgQhN5daEzVr6PXv0CwkqiYZfJaWE9gbThEPz8Cu3IVjGvAAfAUWyBMh%2BTILbLQEbuNHJYOpU1FTCX5aLCBjqkAeFYOVg7YieNxI7IAB13Ot6GX0qPNGYIhThTswvvRQkSNV4DX5HDstzeqn1Gj2Hl2wFsPBK%2BJakuoqJ3WDPNdYONFsga8NRIqalgnFGzEylX6H%2BY9ih%2BvBmrAf3YIp3tAAEP3uTtUtWzD%2BNSH6yutnEEmVUvUyihtFlI2Io5S7%2BIFzp48L1OCAmsIDMZaNNvUTBSKNA33%2BGAA1EjyG5hNfHUVa1n&X-Amz-Signature=7f1177661787c7091267eb73dd98dd9dd2d7191ede0b1d690bd97135ef3ed7e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXRSP2UI%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ1WbmW1xPMHHNxS5f4vM2D7lYZliNaKHfAE6qPcUemAIhAO3y8bV6sF23rrGAxh1nf7c%2BtOsNJNopxMM%2B280gr%2FkmKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1sYum1FJ%2BLCUKXdkq3AND7QaS%2FUnYcperDW0w4YmF%2Bosl4aF6Xk%2F47WGbl7umuQvUIdILsw6MAdXE33zcN0RaPyA7DDP3WSyCy3TPipQPm0qGU4954SjNx%2BwyDtga2Vb3N4vJh9Bqt96o3fsZZUBf3u7OITCTCq15ztVMhyEgS%2B9b35qWJXUCxKUfla4SitiQTvSY0c0Q4cGepM8yhAk16sVH0nS6VAeJX8e70LcBD1cjIiNr2WDd3%2BXjv8zdU5Yd%2F0am45N3Eez5aiakv4s8wVFlkiqZ1EdiqaUlrSK3YtvgX9q841qDVUtIEt581BBTrgpZ4eHECHiTPRvshv6aOW6uktXZrZZDPag9Um8i5JY029B5zAmUfJcIALRpoTPjcwFbyR%2FYo8h6Jd%2FLyvi9vjyVkAxRxiwPT93dFrMLTB3hDQmqQ91J%2BBsTQwbW0%2FTa5C2eKbc7qsMpDN0BtjVyp6pFLaZTmpCeoFiqy2f1FkBu8wWveM3hPw6Ka05sRqBJMkSkWgdYGNl8zUuv5Ph5fvem%2FouAPpVTrKMjplJ5oR6ipQz2XcjmbB13tRGPaamlYRsgQhN5daEzVr6PXv0CwkqiYZfJaWE9gbThEPz8Cu3IVjGvAAfAUWyBMh%2BTILbLQEbuNHJYOpU1FTCX5aLCBjqkAeFYOVg7YieNxI7IAB13Ot6GX0qPNGYIhThTswvvRQkSNV4DX5HDstzeqn1Gj2Hl2wFsPBK%2BJakuoqJ3WDPNdYONFsga8NRIqalgnFGzEylX6H%2BY9ih%2BvBmrAf3YIp3tAAEP3uTtUtWzD%2BNSH6yutnEEmVUvUyihtFlI2Io5S7%2BIFzp48L1OCAmsIDMZaNNvUTBSKNA33%2BGAA1EjyG5hNfHUVa1n&X-Amz-Signature=78007aa1af012d5480479b852bd51b41bfd16138991829b39d6c4c49992066b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7IP7DS%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BSgCQ%2FpVTCYNz1jUyzAHfW8Q3%2BlF2qEL2NGvmIJKwsAiB%2FPbTgiQL%2BG3JtfHVKlO8Nx9xcQ96fZsQng4F%2FDbnlhiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz3IZDOpsJeA7ZT43KtwDEsiQypiUiJ5ratEuxnzTcDWS8Mdo1XGcrlIgutwLHLMGXtkaXoSDc1wqMxbKVtBPKoqF5CYDEyyEsNur266JRW4LtWBUNYze%2BNWwl87i8QW4XbEQtftze0BMpHngg45pxvku37JQa1EeeGwz8J8S5XLtqzjy%2BNsSY8N%2Fhp6J74pqL9UuY0Yn59AStzkT7G%2FmuOUQdq0dGMCiOVbNPmJDDVWBVcSwehMuR36fVIq4q67kr1dwQYrXDiNQDjYfmNE3gLb7CS1lAwbBBLi%2BBRJSPxOQRAqDWRvJ4%2B2rRvT%2BKg9lM%2BvRaWw4fi5TiO0TZAByflybuU3aZ1o3Rzz47V782ldCDt6a5zv9EQvFXN1mrnZREjnwELecyhY1a6Gztx%2B9%2FrTvzt5IDiqKozHmWyICNvhfY6UmqEiWzw%2BBGl2xV5XfrHq9JWXZTRCuTtPPLt9zJvcrKsspYTHfX8SJqO6CoZDfWxJ0EPsihATuifwAmpufYWIy6ZUYkoaygC%2BnJyWFxXiqmqnsC%2FbFQ1erTJwgbbIKnMTrmJEKB3733YAX%2FZgey0n7kufDRxvM3jUzDBNisbHK9q6dLvnHPc8CRF421Pr59trMJ0nrja6V%2F1E5tBvfdylNZLifesPc2AowvtejwgY6pgH5Wvk09xpLv6AhoADCJdmfnki%2Blg7abX4MAPdzTV1Ys9Rk2uP8uY4wRoEp03risVtiGbbVOcWlcNVc7pz60bYVoCw7p9OpHAF%2FGXCf7jVKwKdb1aXYRkOFZp%2BPokC0Ylfme8U%2B6mvPkdOXNzgjfUL6nljNLL9HDGr8L%2FsyRA2hPUVbmCMpBfPWSVPFV%2BkfxXlhgeftZ%2F2d8tZwpQj%2FzD4rcQWBkYl6&X-Amz-Signature=f9239a0d2239170ea17858ae16b0c484d7298ed0610f510d4727369e052aaa5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OHGSANW%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVORioRdcGi%2BsCReOf%2FmwgqW0%2Ba3ONypp8zHfovplHkAiAYd9kj65bdy7JSQR2N7yqkeNs80YFgd7HlAejeCQGU3CqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVB6t6mAMNdRUmOtDKtwDlwh5pWQoq8JvPHh04N4ML1qhWOoxfrvAzolm31YNFhJ33Jd%2B5hg5Wzd9hh%2B07S2WlLpxjtXrDJdda4XUHiHTjVVo9uCJFvd%2F0ZVCXDYFTI1ftRj%2FzYM0lbozMrO8FEmpKQ202%2F4gd7AYnq1fwbexVsglZ7zxPArFqDjoxBo3yN24IwJlrMfhSDM45lCKnnKUksZMDmmuAfq7hL58JP5IvodxzF%2BqxPyQWwik9C0TfYs%2BY%2FN2HVHqobeHPbezLdoEuX549OaRq%2BWFh9Ew6G9Dohep%2FEbynflByRSN3RT9e054BXwx%2BkiELkanpQzhlFu2Vv%2FGbG29W8t16Wcqg06WOGUrzgIrO7Ga3%2FDyZZYgHZ2jhc3PIjN%2BMbN6P5%2BajVb1yg8Cyfq7QSeVk1leGkR2b6gynbCARFemcuPytrlIwAOISpIALMO1KPW27Tbf%2BskKob57Jsa5AnmREG5jtZGMoledk8SAKiMEGaU%2BDuJMnp3avQmLFrDLgZ1WBQLgxiA5mHhnRZJbXqmNfwp%2FVA2K%2Bav0wk9uCZnidT4mf1%2FSXa0V%2Bxj26eQJglPAbdQ3VPnJAwSv0Kz5NnNfXn468BkaAk7jtTPHbnfAGyT%2Fwnb1eLBp7lG58bf6pgXajYIw2eSiwgY6pgEFm6iZJBgVn9DrDvGw2vmpqi7lIdRLAMFyQbthGuR0InDfuoNRIYOzRnQGdIar%2BUH26Us%2Bj2nMNqSZPJQini8jlYDgplrPkDSOtxhqI00mpsmPUuNNRihhp6ORW1lcjomEF1Y8kBurjSqJSUgJCt57yU6MiSqYOAwphtntIKM9MtCjISXt8Tn6SwcHUx3ocS0IC52BNNHYxqlHTkaiIFE5Ty5uwT0b&X-Amz-Signature=50d9f2fabaa5cc09309f5e911bace759ab7bd8d03e5ac3dcf2e9e6a48ff285f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXRSP2UI%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ1WbmW1xPMHHNxS5f4vM2D7lYZliNaKHfAE6qPcUemAIhAO3y8bV6sF23rrGAxh1nf7c%2BtOsNJNopxMM%2B280gr%2FkmKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1sYum1FJ%2BLCUKXdkq3AND7QaS%2FUnYcperDW0w4YmF%2Bosl4aF6Xk%2F47WGbl7umuQvUIdILsw6MAdXE33zcN0RaPyA7DDP3WSyCy3TPipQPm0qGU4954SjNx%2BwyDtga2Vb3N4vJh9Bqt96o3fsZZUBf3u7OITCTCq15ztVMhyEgS%2B9b35qWJXUCxKUfla4SitiQTvSY0c0Q4cGepM8yhAk16sVH0nS6VAeJX8e70LcBD1cjIiNr2WDd3%2BXjv8zdU5Yd%2F0am45N3Eez5aiakv4s8wVFlkiqZ1EdiqaUlrSK3YtvgX9q841qDVUtIEt581BBTrgpZ4eHECHiTPRvshv6aOW6uktXZrZZDPag9Um8i5JY029B5zAmUfJcIALRpoTPjcwFbyR%2FYo8h6Jd%2FLyvi9vjyVkAxRxiwPT93dFrMLTB3hDQmqQ91J%2BBsTQwbW0%2FTa5C2eKbc7qsMpDN0BtjVyp6pFLaZTmpCeoFiqy2f1FkBu8wWveM3hPw6Ka05sRqBJMkSkWgdYGNl8zUuv5Ph5fvem%2FouAPpVTrKMjplJ5oR6ipQz2XcjmbB13tRGPaamlYRsgQhN5daEzVr6PXv0CwkqiYZfJaWE9gbThEPz8Cu3IVjGvAAfAUWyBMh%2BTILbLQEbuNHJYOpU1FTCX5aLCBjqkAeFYOVg7YieNxI7IAB13Ot6GX0qPNGYIhThTswvvRQkSNV4DX5HDstzeqn1Gj2Hl2wFsPBK%2BJakuoqJ3WDPNdYONFsga8NRIqalgnFGzEylX6H%2BY9ih%2BvBmrAf3YIp3tAAEP3uTtUtWzD%2BNSH6yutnEEmVUvUyihtFlI2Io5S7%2BIFzp48L1OCAmsIDMZaNNvUTBSKNA33%2BGAA1EjyG5hNfHUVa1n&X-Amz-Signature=ae46af0788fbe1a9bc29599c513d497a8ef3175768117019d9411ddc0ef04a87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
