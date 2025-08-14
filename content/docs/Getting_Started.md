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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCRX2ZHP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIG6kgbM6O1rVLZNx6%2BsmOzcxAqXgpL%2BQoABjt2oAHKDDAiB0BsMRvL6EhlsSWeuJ%2FvOa0ezzLbMS7xzNB%2FdQZZjemyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMrB5FCbjSyXr8Syd%2BKtwDtCBAxEI7Dp1ydFjTkNZRJvt%2Ff71RRQYLZLApZ2D3jboRd5pHAb9YUeAXQPXeRBsnElh7smHC0zPPGZNOGWqnODM%2Fxi5ojK2olHfzM%2BHfHLEsPosuuIBsCsixp1TytgxanDA2fuwgymNc93hpOKTWjJ%2FHRhGJPJ45FLlblQThYxnjGYQLTM8%2B6NbTW40yc9wNNdPXsGinbm2o9ekcZQVeaPn9Hn9rgKlca%2BeSYvpRNbQxHlG43vrQJd0afNMCvjSwOAANyNUQleQ%2B%2BS3%2BNjVK2ThgW5CyG8hyv3kAlx9cyQQCgqqYoEAflAzG1Zy2dBgXBAH0ketDGdrMdpSA8OZYC6bLXdVpa%2BWTYpqQKJG1jRIdTDn65tYpCkS3yamCIsVQnjCjbzweblRZkzOqBpQ97nTilo3bQfSet%2F%2B9Knc9AHpcpNH2vhOrP0pCLXL4YsUyxGL1h2jSo6vuFzobdYCI7gOdWKizMpWRzI5fTDABQhb08rpRSIdRKrKOq6UVrwJsftoaQS8g7cAucZ1KcTiLTW8DMdbiO0YPWaEMMO2rcAzFLrAGM2o8Z5RVXySDQPpQvfGXx6qN5Rl4KNGrYOJuIL%2BpozoCv19vkxXGy4bMWhwu7xBoWFIrLQ966zMwoJ%2F4xAY6pgHORghClbX%2BL3CB%2F12esHKMy%2BooPripyrovJN4vcw4dDIvLgmTMDtS1snuzCOpqJSGH9hRHVWV25f5yEQxCbg5AA8zT45FNN1ksXF%2Bq%2BerfTWiamrHMwhibrVYprUvMUOSQXHhFXMNz20%2BgTT3PVPwdSvBmPapWHyNiKb1QMMWyERLAajDi8DAjsrO1A0FG0czDyjjoyutBP9B8pYj0%2Bd8vxfkN7CKj&X-Amz-Signature=3590b5716ea3590cb02487881757363b8a282b1b85320b3f649c6f807292c553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCRX2ZHP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIG6kgbM6O1rVLZNx6%2BsmOzcxAqXgpL%2BQoABjt2oAHKDDAiB0BsMRvL6EhlsSWeuJ%2FvOa0ezzLbMS7xzNB%2FdQZZjemyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMrB5FCbjSyXr8Syd%2BKtwDtCBAxEI7Dp1ydFjTkNZRJvt%2Ff71RRQYLZLApZ2D3jboRd5pHAb9YUeAXQPXeRBsnElh7smHC0zPPGZNOGWqnODM%2Fxi5ojK2olHfzM%2BHfHLEsPosuuIBsCsixp1TytgxanDA2fuwgymNc93hpOKTWjJ%2FHRhGJPJ45FLlblQThYxnjGYQLTM8%2B6NbTW40yc9wNNdPXsGinbm2o9ekcZQVeaPn9Hn9rgKlca%2BeSYvpRNbQxHlG43vrQJd0afNMCvjSwOAANyNUQleQ%2B%2BS3%2BNjVK2ThgW5CyG8hyv3kAlx9cyQQCgqqYoEAflAzG1Zy2dBgXBAH0ketDGdrMdpSA8OZYC6bLXdVpa%2BWTYpqQKJG1jRIdTDn65tYpCkS3yamCIsVQnjCjbzweblRZkzOqBpQ97nTilo3bQfSet%2F%2B9Knc9AHpcpNH2vhOrP0pCLXL4YsUyxGL1h2jSo6vuFzobdYCI7gOdWKizMpWRzI5fTDABQhb08rpRSIdRKrKOq6UVrwJsftoaQS8g7cAucZ1KcTiLTW8DMdbiO0YPWaEMMO2rcAzFLrAGM2o8Z5RVXySDQPpQvfGXx6qN5Rl4KNGrYOJuIL%2BpozoCv19vkxXGy4bMWhwu7xBoWFIrLQ966zMwoJ%2F4xAY6pgHORghClbX%2BL3CB%2F12esHKMy%2BooPripyrovJN4vcw4dDIvLgmTMDtS1snuzCOpqJSGH9hRHVWV25f5yEQxCbg5AA8zT45FNN1ksXF%2Bq%2BerfTWiamrHMwhibrVYprUvMUOSQXHhFXMNz20%2BgTT3PVPwdSvBmPapWHyNiKb1QMMWyERLAajDi8DAjsrO1A0FG0czDyjjoyutBP9B8pYj0%2Bd8vxfkN7CKj&X-Amz-Signature=447e0da5aa167307592ccfd409b2d8e8f02989da328257fb0a932c0890a82177&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCRX2ZHP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIG6kgbM6O1rVLZNx6%2BsmOzcxAqXgpL%2BQoABjt2oAHKDDAiB0BsMRvL6EhlsSWeuJ%2FvOa0ezzLbMS7xzNB%2FdQZZjemyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMrB5FCbjSyXr8Syd%2BKtwDtCBAxEI7Dp1ydFjTkNZRJvt%2Ff71RRQYLZLApZ2D3jboRd5pHAb9YUeAXQPXeRBsnElh7smHC0zPPGZNOGWqnODM%2Fxi5ojK2olHfzM%2BHfHLEsPosuuIBsCsixp1TytgxanDA2fuwgymNc93hpOKTWjJ%2FHRhGJPJ45FLlblQThYxnjGYQLTM8%2B6NbTW40yc9wNNdPXsGinbm2o9ekcZQVeaPn9Hn9rgKlca%2BeSYvpRNbQxHlG43vrQJd0afNMCvjSwOAANyNUQleQ%2B%2BS3%2BNjVK2ThgW5CyG8hyv3kAlx9cyQQCgqqYoEAflAzG1Zy2dBgXBAH0ketDGdrMdpSA8OZYC6bLXdVpa%2BWTYpqQKJG1jRIdTDn65tYpCkS3yamCIsVQnjCjbzweblRZkzOqBpQ97nTilo3bQfSet%2F%2B9Knc9AHpcpNH2vhOrP0pCLXL4YsUyxGL1h2jSo6vuFzobdYCI7gOdWKizMpWRzI5fTDABQhb08rpRSIdRKrKOq6UVrwJsftoaQS8g7cAucZ1KcTiLTW8DMdbiO0YPWaEMMO2rcAzFLrAGM2o8Z5RVXySDQPpQvfGXx6qN5Rl4KNGrYOJuIL%2BpozoCv19vkxXGy4bMWhwu7xBoWFIrLQ966zMwoJ%2F4xAY6pgHORghClbX%2BL3CB%2F12esHKMy%2BooPripyrovJN4vcw4dDIvLgmTMDtS1snuzCOpqJSGH9hRHVWV25f5yEQxCbg5AA8zT45FNN1ksXF%2Bq%2BerfTWiamrHMwhibrVYprUvMUOSQXHhFXMNz20%2BgTT3PVPwdSvBmPapWHyNiKb1QMMWyERLAajDi8DAjsrO1A0FG0czDyjjoyutBP9B8pYj0%2Bd8vxfkN7CKj&X-Amz-Signature=f1597e6e4e2f6a363a49b55ef7a4332c9cb50c973c311ece8051ee9699b0e02e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSZJ6JX3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCICQ6N1WViwCrQnY5YzPmMX9X%2FF9RI5v3%2Fa45C77TcBvAAiEA8Ouh8COCcGlBetU2zAxdMlQlhfHc96MnR2LPeQzmFaIq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEBVbvzlne41mGJ%2FdyrcA1JuxE6sEwa01vf4DWUJHeLZpLnKUgqhl4z9oXCFW1yUbGoh98eScuazZ8UPa9ZXyRYF3KfEOiFPuntPaAZg1%2BtY%2BTp0LpU77Gfc6uKBhl2jiwlCc4GDGPiftQmH6Sk9bYjnZ3pM23KvHRY3qOfNybKTGqqbA9aSITn3oQZelvQT0e%2F8RDSPanwJCl0iVykI76wn85iHugO8iN0EN2cE%2FiNaGmAD83qXDmyJL0dtAK9WiQjXPyS0e5aabJcAIxyO2hXRmy%2B%2BtFGeATEKAIbRmPmkZvgS2pkKYbb4puP5CTxR7s3W8ONmh9qmZ82tNwGsDlQGmyaYG0zFTGNxAsxjviXAMjdz8rTe7WPcJo4jlXC3VBpjnFiWrYbD0FgNyPTqD5qUmEZxijNoLFyJaCuB8tTeYy8%2BXYyJaJBArA%2F%2BtbcTAAq5ytrsYxIto1PFnN5L5%2BKEAYzqyOU3ZsKsqYHvcTdswHAaO27LsxguWINH6N6xUrzm1oR8l0%2Bi7XRw91KSHhhjXzWxSgoMFY%2BZWfijxbuPzGnriajRElAkfYmpKPoaCLsT2fWShw3rTs0nqcyYyEU6HpChWEIrShnKoAYbt3fp4Rl6ndVHQNzGYYtEBnBqdkMl2DPnUdFc5kRUMPCf%2BMQGOqUBj2OKkcDKrGQpiuCa0eYlH4SCGj2YTYYwxm35VOWb9twzD1yAK2pGGxGXmhIlduqJiKI18zMzaM9St4H%2FE%2FxK5emOrK6CuwYYapYZKAxbJh4ioBpbLmuzOvMXvmT%2B67ReDzMCyOE0hEhfWWxugwPYCa%2FMgtcIzcHE4BD1AddpbZJ19Lf%2FXJJKS3%2FdSY1nm%2BKvvFR10a9YFnMmgnns%2F0u36zQe6Jzx&X-Amz-Signature=4d2d74679e975f4395a88b09d5fbf1e7ebafb882780a1f55657b83a74987a7d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NGWPMAV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDbdg5GqWkTCScdLZWLJxNmfHRfwZDRhmrIkTLeHApOIQIhAKxnclB1Y27S%2FifYwMPy88Ya4PBNFcUtFHGAOqK0%2Fwv%2FKv8DCEoQABoMNjM3NDIzMTgzODA1IgxusSti8YAzOCHfrzgq3AN8vg%2Bhmr3YT82CrvynvJxKFJJC1WkoONMkzA9mSyZOe%2Be5DFCNmNNCnBJmna%2F5ZWOqyykuHpojYlSvtY%2FUsFebc1H6Ay2ljzq5MsN2in%2FQGGD6RWNqZyQfZ7fTLzo%2FqAcF%2BNMpdmg3Pb36d3Nxy4%2Bb3iQUO4GQ%2FEvJh5QnKdAGeJtvVO2zzd8Bby9TllFVkS4poHAPvBeGDfGIuAEW8qJWUaU2JFnVIdNtC2Q1eLI77c9CKs1Z1M%2FBWclGfkOs1jFtwWylEjEsO4sZzA9%2FjtaV5tOKmq%2F1z9u0sthtweP0HKXd%2BUPO%2BcoBsBq934HHe5T02g5aLm2NFcLeGbFzybwTvqXUFg3iaedlwYGQ8mWKx2YSdV%2FwckCm6pnxjkAYKHyhFVHmeXqv78tIDytOO1N6t50TRQKtvevFWRdmMDqEXnwYGEgb%2BkLGQ7fAOW4WSb1AQj9eLe%2FMcqfxLXuLWF%2FrymiBaJ0Pc2yYM1L0DuXQs%2B7Hvj6%2Fr2HzBMpPjyC8oBCB%2Fqst40oZh7AtvLWP1MTXumJh3iqfBi7x%2Bw1bsUhQXaJQ4J7UaVLZRvJGP5422MUEk%2FlrTozLM9TZHB3%2BqQAI%2BlXfxWx6qB963%2BRG63w25CkZau9Ktn%2FfuwtdojDAn%2FjEBjqkAYeTfv2HCcMZyxozHVRQMJMxRyflDgMYzMwYrKm64hEPQG4WPMREyp8LpZEeuC5jkSme8X02kklPVz6yVQlckVgtKS%2FH6s%2F7fY96r0m%2FIT0FqD32C%2BmbdFwuYFBjjZ6bAOFfeLuDQamS%2FvAtVM0wn9omkywoxJ47jZ7pqc1L72MlcyKZNah1qTT7MY13F7tk7NWiZ5xW75UcVDoIEy27%2FCcOpzXX&X-Amz-Signature=2edece5945a4e94cc4b23a65f55a5ba731f4410a4561c2ddfe135ba2771949c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCRX2ZHP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIG6kgbM6O1rVLZNx6%2BsmOzcxAqXgpL%2BQoABjt2oAHKDDAiB0BsMRvL6EhlsSWeuJ%2FvOa0ezzLbMS7xzNB%2FdQZZjemyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMrB5FCbjSyXr8Syd%2BKtwDtCBAxEI7Dp1ydFjTkNZRJvt%2Ff71RRQYLZLApZ2D3jboRd5pHAb9YUeAXQPXeRBsnElh7smHC0zPPGZNOGWqnODM%2Fxi5ojK2olHfzM%2BHfHLEsPosuuIBsCsixp1TytgxanDA2fuwgymNc93hpOKTWjJ%2FHRhGJPJ45FLlblQThYxnjGYQLTM8%2B6NbTW40yc9wNNdPXsGinbm2o9ekcZQVeaPn9Hn9rgKlca%2BeSYvpRNbQxHlG43vrQJd0afNMCvjSwOAANyNUQleQ%2B%2BS3%2BNjVK2ThgW5CyG8hyv3kAlx9cyQQCgqqYoEAflAzG1Zy2dBgXBAH0ketDGdrMdpSA8OZYC6bLXdVpa%2BWTYpqQKJG1jRIdTDn65tYpCkS3yamCIsVQnjCjbzweblRZkzOqBpQ97nTilo3bQfSet%2F%2B9Knc9AHpcpNH2vhOrP0pCLXL4YsUyxGL1h2jSo6vuFzobdYCI7gOdWKizMpWRzI5fTDABQhb08rpRSIdRKrKOq6UVrwJsftoaQS8g7cAucZ1KcTiLTW8DMdbiO0YPWaEMMO2rcAzFLrAGM2o8Z5RVXySDQPpQvfGXx6qN5Rl4KNGrYOJuIL%2BpozoCv19vkxXGy4bMWhwu7xBoWFIrLQ966zMwoJ%2F4xAY6pgHORghClbX%2BL3CB%2F12esHKMy%2BooPripyrovJN4vcw4dDIvLgmTMDtS1snuzCOpqJSGH9hRHVWV25f5yEQxCbg5AA8zT45FNN1ksXF%2Bq%2BerfTWiamrHMwhibrVYprUvMUOSQXHhFXMNz20%2BgTT3PVPwdSvBmPapWHyNiKb1QMMWyERLAajDi8DAjsrO1A0FG0czDyjjoyutBP9B8pYj0%2Bd8vxfkN7CKj&X-Amz-Signature=440244fea236f8ea689009f011c9e409e45dcec09b14fa31803f2084b8460924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
