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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWVBBUIL%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwdk560VPKyOuyjVCVnxL5DIv7eFR%2BXV76zEVEat8GYAiBJY%2Fn9VL9j0QxA%2FlQGkYAKgu1oRCjwxR7yXuWs7gA5Yir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMVJ52ADlzwMtevFe3KtwD1EYq24M9%2BLMfkCHM%2Bn1BzD04%2BK1vUjKBpTPxV90Q%2FcWksLWW%2BdWoaDDFi9uP5%2BH2v45f3rTqjHJe4XpU2BCTEhwW6Cdw1f7ZsKn%2FU94%2F2b1sh4%2BMDO50DDojoVmpY1UBuLytyZyJwP6DkdgnpGDJy%2F6t%2F06%2BDrGjDn2lXywNsViDkk9E4gqGNXzVtsrFxKPeJ2BZkCKpvkO7TF1vVTDsJxMFJ6LXn5DJE7JoqazzR6dG8kzt29ULjrK%2B8z0r9bIriKGfjtgAQejw%2BVg7zoywBc4cpAaBhaOJupVCuxVhSK9Y7GtHmy9qOKCgr6tPwroL7bR83TgGr6E3P2QUtqTLfirteJZnzod6e0xtEsfAjukYU4wHQ3YqjPX%2FpVftgYDjlbgZrQp5mJzDlsgfmA5K8zViBWrEZQnss2DAOui7DBTGCN3N1nX0Ctg%2FqyWAsbFnrQX2%2FXVf%2BWCvFfOj8W%2BqhFbQI7l725xcyU0bF9a5fZ%2Fp68lJ2cL7ny5OtWlZ63ZpRJT6YtfqMaNt7fEIb9afVqL3jWkxexe2f%2BmkJHJk1Ablq7Xt6VUvc%2BIckh4QZU1WAAl2rvyjmvnuM5nqx3ka%2BwpaLPGZcUdFypOJBS%2FnCxYE%2Fs6qg4TuJDS2WS4wp7TVwQY6pgFxp9lndHmKjnvFfrFTCtpsTxaus6%2By%2FyfOm5d3sNk7Ifl%2FgBUI7M70eJTmZZ3vooCsBPYLqgu%2BFATsTJSWHcr%2Bg7ieiIBjz%2Fi3gycjiyrnoggHR09sZLm4ZoPY8cWTrutqbX7dOw2YGOfKu%2FVZAys7k%2ByM%2BCgYfGas5W056lPRP6tp2AGSNnjvMzmsY0Wcna3Xr64G1rogUFmzN2QHqr%2FEZlwgppUo&X-Amz-Signature=0b6f8faff9bad5be7d1758f3da52dfbc4231fd90632e14358448efbe640fca6d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWVBBUIL%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwdk560VPKyOuyjVCVnxL5DIv7eFR%2BXV76zEVEat8GYAiBJY%2Fn9VL9j0QxA%2FlQGkYAKgu1oRCjwxR7yXuWs7gA5Yir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMVJ52ADlzwMtevFe3KtwD1EYq24M9%2BLMfkCHM%2Bn1BzD04%2BK1vUjKBpTPxV90Q%2FcWksLWW%2BdWoaDDFi9uP5%2BH2v45f3rTqjHJe4XpU2BCTEhwW6Cdw1f7ZsKn%2FU94%2F2b1sh4%2BMDO50DDojoVmpY1UBuLytyZyJwP6DkdgnpGDJy%2F6t%2F06%2BDrGjDn2lXywNsViDkk9E4gqGNXzVtsrFxKPeJ2BZkCKpvkO7TF1vVTDsJxMFJ6LXn5DJE7JoqazzR6dG8kzt29ULjrK%2B8z0r9bIriKGfjtgAQejw%2BVg7zoywBc4cpAaBhaOJupVCuxVhSK9Y7GtHmy9qOKCgr6tPwroL7bR83TgGr6E3P2QUtqTLfirteJZnzod6e0xtEsfAjukYU4wHQ3YqjPX%2FpVftgYDjlbgZrQp5mJzDlsgfmA5K8zViBWrEZQnss2DAOui7DBTGCN3N1nX0Ctg%2FqyWAsbFnrQX2%2FXVf%2BWCvFfOj8W%2BqhFbQI7l725xcyU0bF9a5fZ%2Fp68lJ2cL7ny5OtWlZ63ZpRJT6YtfqMaNt7fEIb9afVqL3jWkxexe2f%2BmkJHJk1Ablq7Xt6VUvc%2BIckh4QZU1WAAl2rvyjmvnuM5nqx3ka%2BwpaLPGZcUdFypOJBS%2FnCxYE%2Fs6qg4TuJDS2WS4wp7TVwQY6pgFxp9lndHmKjnvFfrFTCtpsTxaus6%2By%2FyfOm5d3sNk7Ifl%2FgBUI7M70eJTmZZ3vooCsBPYLqgu%2BFATsTJSWHcr%2Bg7ieiIBjz%2Fi3gycjiyrnoggHR09sZLm4ZoPY8cWTrutqbX7dOw2YGOfKu%2FVZAys7k%2ByM%2BCgYfGas5W056lPRP6tp2AGSNnjvMzmsY0Wcna3Xr64G1rogUFmzN2QHqr%2FEZlwgppUo&X-Amz-Signature=bb63ece8a5145ae43761e37b3523e2918576d146382b846e3db8695000183853&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWVBBUIL%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwdk560VPKyOuyjVCVnxL5DIv7eFR%2BXV76zEVEat8GYAiBJY%2Fn9VL9j0QxA%2FlQGkYAKgu1oRCjwxR7yXuWs7gA5Yir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMVJ52ADlzwMtevFe3KtwD1EYq24M9%2BLMfkCHM%2Bn1BzD04%2BK1vUjKBpTPxV90Q%2FcWksLWW%2BdWoaDDFi9uP5%2BH2v45f3rTqjHJe4XpU2BCTEhwW6Cdw1f7ZsKn%2FU94%2F2b1sh4%2BMDO50DDojoVmpY1UBuLytyZyJwP6DkdgnpGDJy%2F6t%2F06%2BDrGjDn2lXywNsViDkk9E4gqGNXzVtsrFxKPeJ2BZkCKpvkO7TF1vVTDsJxMFJ6LXn5DJE7JoqazzR6dG8kzt29ULjrK%2B8z0r9bIriKGfjtgAQejw%2BVg7zoywBc4cpAaBhaOJupVCuxVhSK9Y7GtHmy9qOKCgr6tPwroL7bR83TgGr6E3P2QUtqTLfirteJZnzod6e0xtEsfAjukYU4wHQ3YqjPX%2FpVftgYDjlbgZrQp5mJzDlsgfmA5K8zViBWrEZQnss2DAOui7DBTGCN3N1nX0Ctg%2FqyWAsbFnrQX2%2FXVf%2BWCvFfOj8W%2BqhFbQI7l725xcyU0bF9a5fZ%2Fp68lJ2cL7ny5OtWlZ63ZpRJT6YtfqMaNt7fEIb9afVqL3jWkxexe2f%2BmkJHJk1Ablq7Xt6VUvc%2BIckh4QZU1WAAl2rvyjmvnuM5nqx3ka%2BwpaLPGZcUdFypOJBS%2FnCxYE%2Fs6qg4TuJDS2WS4wp7TVwQY6pgFxp9lndHmKjnvFfrFTCtpsTxaus6%2By%2FyfOm5d3sNk7Ifl%2FgBUI7M70eJTmZZ3vooCsBPYLqgu%2BFATsTJSWHcr%2Bg7ieiIBjz%2Fi3gycjiyrnoggHR09sZLm4ZoPY8cWTrutqbX7dOw2YGOfKu%2FVZAys7k%2ByM%2BCgYfGas5W056lPRP6tp2AGSNnjvMzmsY0Wcna3Xr64G1rogUFmzN2QHqr%2FEZlwgppUo&X-Amz-Signature=1e2b4b4328725de0d7cb5bc9d66ace03cad358dd5bb06e80ff5a7245ae7fc576&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP5HBYRN%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJojhGJia7XSjLCCBPk86BMYiAavmZ5WROzJR6COtsNAiAxqkRW3o4eH3ZCTatTEhSYMY2E6X1Yb5I673caFikNxyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMUPr4bhU3C04g%2BYmSKtwDA2jYGJTAqelpOS4t1lUrQHWZhdpUg50%2FdBSRezKwXcRPRhVanMQvZVs7xUDWUtMN3PDu9y61akoZvLMsxZLSc93Ugzgoyrs9YZSl9WD1PtK1x79TnGKkn9EALn8O2DUJxHfj4FzTpQ7xLP%2FsCte4POCXm7nWTv8x1hZaF4StzpP5DL3KyuMju9RAKXrUwnSqMK6ySwgBkc2fAL8KjqxZaKccCm%2FaWj2tFmIl3CmVGPdPorfsyrtzTA0gyuvWBuQH4IUBGNKvgCWk9lQiaaaneotujKu%2Fc28d4ACN9eYqqwHNdPgQn3lo61Zscc5I4bSMP4FGeaneohuI%2FaHo%2BYgDtZLYXURMTidGSU%2Bphe3vKMB%2BrruIaHoveHhYVI%2F8A%2B8efodxEkEaqfdW2JfDRK9bUdf6NdNpRDkKLotK0gcXVIG%2FIWr48tWaH1YaNMC9sY%2BAWm5j3gE6T4Yp8lVoVdb4wSL8Xqte9qygEEKVItYa7I07Dt%2BZzadabTbR5oHIzk9INWF7dEYvr0xUFx5qT9eo%2BhtqXcYCEBr4l86QfD%2FyMBwb6nxCr8uqpTuFWKa5j01a5Bu6pM4n6o6Xy%2FPymX1%2FgA%2B48zaT8mVOmExY6WBZP9HqEepOGE1VChThRCcwnbTVwQY6pgEFWJLWO2gOw%2FFvhHPO3G84fiSeo5dF5iZrXlL9IlAZRiT1U3Iup5rCu%2FrajTtPOZbJUHBoFVz3B6wQLWxkVMZD%2BtlwqmCMF1ttrkbOo4PaaaLzxESMy7icvUjkm7q0dozgdCBVmiRsVNCVgGV6bNyIO9nNcBDOtranR4POlxuKdBpXUyekvjjeE%2B7T25akkTW4HmCXM%2FwfFqehCy4Bu9GY0XZVSrQc&X-Amz-Signature=64beebf3e701dbc295725b9eb0770cdacb3fa5fddc22e067c4c7773b5ab48993&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSEVGCQL%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOODLhOncdPIgYSPvzAtYi%2F1K9ZurQlC1HYzUJ9foAywIgapXEgu%2Bavqw%2BUxIPIYZHPyvIdw3DyMeP1EcyxcSj0y4q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDOIX%2BP1yTTblxA%2F6uyrcA60K%2BLpCi8%2Bpq3FCwp5kc0bHHx8%2BFF9ILh%2BXh5Mm3OJ7r7QxDC1OTpoWrvAT%2FzJWNwufU%2BKkcvtNfKC9b%2FYLVJ01YANsYO1HcXndCrO1ocDMDqDE4CGCLdekGu0E7BmbIe8%2FanvVx71zFBw2DccRnt%2BR%2BbgvltFfrs5gKsEusKlzRdsNs2KpiN6BPaZjgQwwuHzjqoTRDl3xkWrCj0nSgCgWVKr3RjYEDbuK6fAU1VIDpjjl%2FfhVB0K9n6anfXBL%2BfFwZ4BcklDiSW6tjdXQfVBYwSyRoEFoQtHx8Ui%2BSNBvF2cGj9Q4C7W%2BdktAkbs5zD1gAR%2BsAg2%2FrHmi4WlVOlG11%2BV5tYqSnPNPmGtG1FyfJbw3HgVzhqIFfWCTmN1FFaF1QVzO%2BpxFnRJ0%2BC2j2oXgo%2FR0Khx7veWhtv%2BWsVt4dOgpMLxaxYdsYdlBKhOeyvLSp8%2Bd%2FNgVsBTr4WJi%2Fu%2BvCg6UFi8Zzog3S%2FriruDhRe9rF28uHlTAgwRMg%2BxNeRBXjAg587Pu8nEYy9HtGr%2BcVbUMk%2BLGFxIRzWAo5XWrSErneMzXWcpthNvp6kXSYUBWiDzTbuCjEMOxEGnsrSyNL8Cd2lyZqSBKsgXaEuyDxrEEQa%2FPwv39A%2BAUMJ601cEGOqUBphA8TaT21W%2BLgS7Kn49rI4%2BTQ9pRWyMijkw92sDjXh4LF%2BvFD4CDLtFrfTzbb6HTZoCOylJGUU6s8jZx6VIBCQyKne%2BgqoxdkU3Zcnk2Xkl52oYL43t7tR59c4ETmHmjYsyjXehJbS%2BzC7XqPjXk9h0lbK5vtQ7rV8wyPmRMHd4UkyofQHTcyTXsaE1hL9BBKcaIdHIFoWNhFAMz%2FUhHPR6mYQ6J&X-Amz-Signature=fe9f3ad189c60be26e9ee58536ae1303b6787480456afe5c4d252ec59d4c58cd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWVBBUIL%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwdk560VPKyOuyjVCVnxL5DIv7eFR%2BXV76zEVEat8GYAiBJY%2Fn9VL9j0QxA%2FlQGkYAKgu1oRCjwxR7yXuWs7gA5Yir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMVJ52ADlzwMtevFe3KtwD1EYq24M9%2BLMfkCHM%2Bn1BzD04%2BK1vUjKBpTPxV90Q%2FcWksLWW%2BdWoaDDFi9uP5%2BH2v45f3rTqjHJe4XpU2BCTEhwW6Cdw1f7ZsKn%2FU94%2F2b1sh4%2BMDO50DDojoVmpY1UBuLytyZyJwP6DkdgnpGDJy%2F6t%2F06%2BDrGjDn2lXywNsViDkk9E4gqGNXzVtsrFxKPeJ2BZkCKpvkO7TF1vVTDsJxMFJ6LXn5DJE7JoqazzR6dG8kzt29ULjrK%2B8z0r9bIriKGfjtgAQejw%2BVg7zoywBc4cpAaBhaOJupVCuxVhSK9Y7GtHmy9qOKCgr6tPwroL7bR83TgGr6E3P2QUtqTLfirteJZnzod6e0xtEsfAjukYU4wHQ3YqjPX%2FpVftgYDjlbgZrQp5mJzDlsgfmA5K8zViBWrEZQnss2DAOui7DBTGCN3N1nX0Ctg%2FqyWAsbFnrQX2%2FXVf%2BWCvFfOj8W%2BqhFbQI7l725xcyU0bF9a5fZ%2Fp68lJ2cL7ny5OtWlZ63ZpRJT6YtfqMaNt7fEIb9afVqL3jWkxexe2f%2BmkJHJk1Ablq7Xt6VUvc%2BIckh4QZU1WAAl2rvyjmvnuM5nqx3ka%2BwpaLPGZcUdFypOJBS%2FnCxYE%2Fs6qg4TuJDS2WS4wp7TVwQY6pgFxp9lndHmKjnvFfrFTCtpsTxaus6%2By%2FyfOm5d3sNk7Ifl%2FgBUI7M70eJTmZZ3vooCsBPYLqgu%2BFATsTJSWHcr%2Bg7ieiIBjz%2Fi3gycjiyrnoggHR09sZLm4ZoPY8cWTrutqbX7dOw2YGOfKu%2FVZAys7k%2ByM%2BCgYfGas5W056lPRP6tp2AGSNnjvMzmsY0Wcna3Xr64G1rogUFmzN2QHqr%2FEZlwgppUo&X-Amz-Signature=8af92646ad5401a705b561cd7db854eb2b486d49a09c2d5c892be9d98ef3c07a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
