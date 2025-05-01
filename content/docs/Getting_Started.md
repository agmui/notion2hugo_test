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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXJMF4Z3%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDkrnHAFRIJAzhf2AzqDctqKdEGQI1uZXsksn%2FkrZ2x0gIhAKeACoFwyYAOIJDzeUYdZMc%2FmW%2FzCZ6j0cGTPv%2FCjnQkKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzMjpdN9VpzggW040q3ANpsAgJPMKc8%2BYLz24vYzRdaZoqhNh4%2BNnsauIysQ5gFt8ZljqntCggwnXm5%2Bo4ltrUw9DND1mj9GOmdA5eMLQfltC6h1sjnNtZDPf4N649ApQ52JcQO34m18klpm8Rtxm3aDCDfIKVQxHUAzTeemQwM0BvLvX3ew85Vr6Yeyj4y6TqZtwCO9NIyLKY%2FPfDQCKIk9LJjIKo4bULw8MENgt0C2BgQzpYyPnNwgx1e9cfeTi1MG%2FDmM0D9j24tl1vwFVFvQbB29Q853Bf2GyrJhwtjlV7Ze%2Fsakb%2BQlb%2FXGFKiDmDvWY7ZYRVYce3YKnl7SNXYJEYBs4HVBLXOVJVmt0kGyBj9tgx1IMD%2BAEFIvN2rG%2BXSbciskzfr7Z6OxWPC%2BqXxRWoupJed2v3cX%2BI30jLr97iKaZlqB4jsGciK7qpq3D0zUmHEl9nSNKJyIYtK23qCgYtPE%2FfNfGn%2Bfnf5oGp55DOWSTJBTlpgFGZUA5b9Zb1p%2FoAifOztHlrpQhI7XbalSqbGgau4XWph%2FzkyKRJb99jAEcwQ9ErobhWaeJySNKXm%2BYIo%2FhKH%2F9Ida6N8ZYXBKJs%2BrTN2dD1HucWHWReGLAAtlxiwUcGNpU1hXSCoMFvYzjMXN4lDvsVjzDz2cvABjqkASHQZFSdPr%2Bl464QAyxnUGtZkZafShAVEQioJM2Sq2Ax%2BitgpeNvamGjqoimq2sJklifzxknZ%2FnwDm3KKV%2FzaiYNoSUGidZWR0cr1Sp%2B6hDIvNSdxZVeNkK7eDoGd6bM2gq%2BtlNzoWuai6nxtQ%2BXLZSimfQYaVSL0rXWPuT55NoL6feSgHRoN5%2FLYSpXoUPBAcuACSkQev8ropGq4xKixpcF6cKu&X-Amz-Signature=afa8e58995526f20552ac755893a1f46459c42efd1bce57378dcbe0ed33950fe&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXJMF4Z3%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDkrnHAFRIJAzhf2AzqDctqKdEGQI1uZXsksn%2FkrZ2x0gIhAKeACoFwyYAOIJDzeUYdZMc%2FmW%2FzCZ6j0cGTPv%2FCjnQkKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzMjpdN9VpzggW040q3ANpsAgJPMKc8%2BYLz24vYzRdaZoqhNh4%2BNnsauIysQ5gFt8ZljqntCggwnXm5%2Bo4ltrUw9DND1mj9GOmdA5eMLQfltC6h1sjnNtZDPf4N649ApQ52JcQO34m18klpm8Rtxm3aDCDfIKVQxHUAzTeemQwM0BvLvX3ew85Vr6Yeyj4y6TqZtwCO9NIyLKY%2FPfDQCKIk9LJjIKo4bULw8MENgt0C2BgQzpYyPnNwgx1e9cfeTi1MG%2FDmM0D9j24tl1vwFVFvQbB29Q853Bf2GyrJhwtjlV7Ze%2Fsakb%2BQlb%2FXGFKiDmDvWY7ZYRVYce3YKnl7SNXYJEYBs4HVBLXOVJVmt0kGyBj9tgx1IMD%2BAEFIvN2rG%2BXSbciskzfr7Z6OxWPC%2BqXxRWoupJed2v3cX%2BI30jLr97iKaZlqB4jsGciK7qpq3D0zUmHEl9nSNKJyIYtK23qCgYtPE%2FfNfGn%2Bfnf5oGp55DOWSTJBTlpgFGZUA5b9Zb1p%2FoAifOztHlrpQhI7XbalSqbGgau4XWph%2FzkyKRJb99jAEcwQ9ErobhWaeJySNKXm%2BYIo%2FhKH%2F9Ida6N8ZYXBKJs%2BrTN2dD1HucWHWReGLAAtlxiwUcGNpU1hXSCoMFvYzjMXN4lDvsVjzDz2cvABjqkASHQZFSdPr%2Bl464QAyxnUGtZkZafShAVEQioJM2Sq2Ax%2BitgpeNvamGjqoimq2sJklifzxknZ%2FnwDm3KKV%2FzaiYNoSUGidZWR0cr1Sp%2B6hDIvNSdxZVeNkK7eDoGd6bM2gq%2BtlNzoWuai6nxtQ%2BXLZSimfQYaVSL0rXWPuT55NoL6feSgHRoN5%2FLYSpXoUPBAcuACSkQev8ropGq4xKixpcF6cKu&X-Amz-Signature=e1a94c18b44a415e33c1778c5c07ac0af7da20b205b7747545ad7bc00b5d741f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXJMF4Z3%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDkrnHAFRIJAzhf2AzqDctqKdEGQI1uZXsksn%2FkrZ2x0gIhAKeACoFwyYAOIJDzeUYdZMc%2FmW%2FzCZ6j0cGTPv%2FCjnQkKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzMjpdN9VpzggW040q3ANpsAgJPMKc8%2BYLz24vYzRdaZoqhNh4%2BNnsauIysQ5gFt8ZljqntCggwnXm5%2Bo4ltrUw9DND1mj9GOmdA5eMLQfltC6h1sjnNtZDPf4N649ApQ52JcQO34m18klpm8Rtxm3aDCDfIKVQxHUAzTeemQwM0BvLvX3ew85Vr6Yeyj4y6TqZtwCO9NIyLKY%2FPfDQCKIk9LJjIKo4bULw8MENgt0C2BgQzpYyPnNwgx1e9cfeTi1MG%2FDmM0D9j24tl1vwFVFvQbB29Q853Bf2GyrJhwtjlV7Ze%2Fsakb%2BQlb%2FXGFKiDmDvWY7ZYRVYce3YKnl7SNXYJEYBs4HVBLXOVJVmt0kGyBj9tgx1IMD%2BAEFIvN2rG%2BXSbciskzfr7Z6OxWPC%2BqXxRWoupJed2v3cX%2BI30jLr97iKaZlqB4jsGciK7qpq3D0zUmHEl9nSNKJyIYtK23qCgYtPE%2FfNfGn%2Bfnf5oGp55DOWSTJBTlpgFGZUA5b9Zb1p%2FoAifOztHlrpQhI7XbalSqbGgau4XWph%2FzkyKRJb99jAEcwQ9ErobhWaeJySNKXm%2BYIo%2FhKH%2F9Ida6N8ZYXBKJs%2BrTN2dD1HucWHWReGLAAtlxiwUcGNpU1hXSCoMFvYzjMXN4lDvsVjzDz2cvABjqkASHQZFSdPr%2Bl464QAyxnUGtZkZafShAVEQioJM2Sq2Ax%2BitgpeNvamGjqoimq2sJklifzxknZ%2FnwDm3KKV%2FzaiYNoSUGidZWR0cr1Sp%2B6hDIvNSdxZVeNkK7eDoGd6bM2gq%2BtlNzoWuai6nxtQ%2BXLZSimfQYaVSL0rXWPuT55NoL6feSgHRoN5%2FLYSpXoUPBAcuACSkQev8ropGq4xKixpcF6cKu&X-Amz-Signature=518141a0d85b956cb83771abd9156447a5990767fd57018c3f63e271a4fe3bb4&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T7XCGUV%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIEtU10NlNkBJYnbRACyN8B%2FdtgpQyN7Sq4h0xJI9ucicAiBIGAA9lTfWd6Rg2ei18KLSTDUHfGvo9fRTw4DP8cS8GiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwQ2Sxv5OqzH%2BhvIOKtwDCdIcvi%2FUEuHKZmtPwGO8dBz9kFAt4GjegIrxLHZzhN8zOwXi0ZhUj6UerJoRt4FBAWVqRivZPbreCnrduC3E1aXdJTSlderr51q%2BJINldDbUMBuWs6OLh7Lnn66lBIcq7Kew292Sw%2Btj4AW4iz2vE1Mu%2BTma8ay%2BJYMpCRKbvUg2F9cnt6zztr2VuaADrUTXaasMh86%2BXcVkY%2Fhj0BSSaA9AaNLdHrTOGDwr3g1BfjZQEF%2FW77fZQjk89Gxr7FKBA7KpuUgFMgfL7X3HrcMej54vh%2B%2Fi0KIX%2Fo766RfdXbDMyrtrbHtjcOgwK8EHvG7DmWZZZLZSXTjoF44lR6KVvkSv3uLb%2BAGE1Sk2YnbVfFeEMgtA5PA8gmKc4xUj4cHyRgqH2xXDnXy4MoK9A9v5XjubXCfbOaX%2B2hSZ0Y79UqtDdSMzd%2BifU8x9UpApWtyvwH4KqK6ciJIfDAuGMcIUXb1hrpeTapPo4BvxDsOnQNwakmJpSL0JatGnRvTRKmxhyENigDPwqzWz21hp4IllI4R6FBx5SzzInvdP5mq41lMKxOxqFINMBq4xkkWSEvc2oV%2F5iF7mifOPbUSM4sVU2TYd6OnjJxzRUDCYBTVT0bQletLAfVPQNCZDtZowwNnLwAY6pgG9tBDpspbjEYzefbhWEcqZHLcvgFdfgKVVBLF6WleftdnC6fq9FmttMiyXEU%2BjeA5c5BMe0ydworTO8AbPyna6gCLMExn1Nwck9tYVdUSBDHrUuypTLnwDQtMEX6%2FYLV8%2Bonoik7fUC0V1wAhtxDeLa0EN2YHHZsyAZm3yzzT8o5HIrGWjcG5%2BFTmiWvi0U4xUjq%2BYEomwioR0J5WzPQtPXFwpKJTj&X-Amz-Signature=de00141d5bea1511f0fe5a7501f4e5d7d1b531be5489a991aa2ac820996c8c9b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QA3PJGW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIB3xAO5Q2WVorilM2UX3vd6L5HRSo71rPy0J1g4TupMyAiB7nGAtI5vtLkzyEabNTnoFdWOchGrHw%2FVzoGY%2Bal20XSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJbSd1FwO9gW%2BpvXIKtwDdoqCrBt2JXsAj%2FtYPy5lQyZH4Zw3zdPtJGNr57JfwhDjxGjhX1LVW1FWmPYaX4s6cBqbY1adEAEeJL%2ByZP5%2FoKXCN0Aw1JyJwsNh%2By5rMaw8%2BP3yUQe1t4O9iGWypzQ30LdY1Hv43bkpaF3uE1Ll5Vk7qYriIu8iW7SM%2BPpc82NHyJnYFt4m9ptsd5BQ2jIVo7hsHso9YISwoo6jX3mlEDuW2FP3xi9BiUuWbU8aBxjo538xn0RZrvLoD2gvEZ1%2B7wZHpTbEPnREadWUVwsIwuiBGss9kA4Jimu3Go3QJ63vuYiJlG45a99c0ce%2FjEtwQb9jN7JODGikxI6nOyDPfSNxDoK75eSLsCYSZOR7wRGosxawEZZI5ZAYm%2FJmJju9cadOr3ytAek43zNYO5fR9YTc4scKg%2F5fBcx6760PUi3SGI0ygltjWfgHjvNjkGEJsKZYqKBaVjdaDlUu5tvmffYVJS%2BLQkpNmzKblEzlOQkZAC4zMf6ChzvH4VAZnqw%2Bn6L3RqNROHHRkD%2FWPrXt26j4YDjTVWbgML85Hp5TYRNe%2BKYIIBxkV11zyuPIlyICaKyCvjsHJFIEiDThXXNt8R00NQ7GYPxow4Hxu0Y1LHRmNDGyswpK7lAmj2sw4tnLwAY6pgGZmpqp9Nz%2BmelEUwjWdiNM5snYaZTs0yBdq7%2BjpDrgxbkAYcu9AOhHiSKOfPS8ucbwBmGC%2FLkoiWWYXLPK6udM4kPxU7HmqCnPFCTEwNllg8zqCPmvCHpN3snym3w3BS4U54lbHCpfl7j3wDIX7cR4V7eDzyxaARv2GnzdrUJTzJzZcJOAJqCtiuwWUQ7IURSKDteWIWJbbj21I6GZURrZrznITMYd&X-Amz-Signature=a8239dd57c5a177b467e7f087e7dc91a8d54695ebfb7a71f5c76cc1d07c64f1c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXJMF4Z3%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDkrnHAFRIJAzhf2AzqDctqKdEGQI1uZXsksn%2FkrZ2x0gIhAKeACoFwyYAOIJDzeUYdZMc%2FmW%2FzCZ6j0cGTPv%2FCjnQkKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzMjpdN9VpzggW040q3ANpsAgJPMKc8%2BYLz24vYzRdaZoqhNh4%2BNnsauIysQ5gFt8ZljqntCggwnXm5%2Bo4ltrUw9DND1mj9GOmdA5eMLQfltC6h1sjnNtZDPf4N649ApQ52JcQO34m18klpm8Rtxm3aDCDfIKVQxHUAzTeemQwM0BvLvX3ew85Vr6Yeyj4y6TqZtwCO9NIyLKY%2FPfDQCKIk9LJjIKo4bULw8MENgt0C2BgQzpYyPnNwgx1e9cfeTi1MG%2FDmM0D9j24tl1vwFVFvQbB29Q853Bf2GyrJhwtjlV7Ze%2Fsakb%2BQlb%2FXGFKiDmDvWY7ZYRVYce3YKnl7SNXYJEYBs4HVBLXOVJVmt0kGyBj9tgx1IMD%2BAEFIvN2rG%2BXSbciskzfr7Z6OxWPC%2BqXxRWoupJed2v3cX%2BI30jLr97iKaZlqB4jsGciK7qpq3D0zUmHEl9nSNKJyIYtK23qCgYtPE%2FfNfGn%2Bfnf5oGp55DOWSTJBTlpgFGZUA5b9Zb1p%2FoAifOztHlrpQhI7XbalSqbGgau4XWph%2FzkyKRJb99jAEcwQ9ErobhWaeJySNKXm%2BYIo%2FhKH%2F9Ida6N8ZYXBKJs%2BrTN2dD1HucWHWReGLAAtlxiwUcGNpU1hXSCoMFvYzjMXN4lDvsVjzDz2cvABjqkASHQZFSdPr%2Bl464QAyxnUGtZkZafShAVEQioJM2Sq2Ax%2BitgpeNvamGjqoimq2sJklifzxknZ%2FnwDm3KKV%2FzaiYNoSUGidZWR0cr1Sp%2B6hDIvNSdxZVeNkK7eDoGd6bM2gq%2BtlNzoWuai6nxtQ%2BXLZSimfQYaVSL0rXWPuT55NoL6feSgHRoN5%2FLYSpXoUPBAcuACSkQev8ropGq4xKixpcF6cKu&X-Amz-Signature=ad93159c423e00e4cca2b57ee1abe77fa56c70278df3bd006fc20b36fd98aabb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
