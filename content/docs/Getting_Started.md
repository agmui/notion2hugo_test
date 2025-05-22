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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFAUEZYC%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEBf53jwAawvUa%2By2sHj3a1GIV3hXYuTKs1inrXAhRh0AiEAwLSM%2Bh1H13OR6UTP8qHBoE0DZX5pMbI2uHfLtUNy5AkqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqeN7xwBtOqUbIsRSrcA9BI%2FkJDrSQhvR%2BdJo7wTDO0ApDvKVykXu1mR%2FbEcivo1lgeotmpllJp4JiviMB4oAlSZ6suZ3MimhcfbFlDb9lQ5PQLNwg1Xv4nhlblYf%2FhGPp6Z%2BvWWEUn1PQ%2BE4uooDv91kUEVh4MZZscihDbrRxZ6u53WIyjXSxoer8EbaT%2ByTiiy9fDvTipVhbjDouigIxUhlaXZOunyDwxAa9aJuoSPA12gUZWdqaeDXtByHzWrv4Qep5iY3fjOFwHOvkLrkDZLn9VO06bFbtFV00V%2FJfutuSp%2Fm2%2BhNlywAc00t3ePRuiJ6MaMTyruPZ%2BsxP79gsdmP%2B0OvFHaq0X1%2BBjRNqn4cSR%2Bat2Y9oUIck3yOHxMW%2FjOh0TB9eV5gqR7OxwCAdH9qWn5%2BvmI71M073GPSgpiQNw12B0KkxHO0nQ%2BsQz7%2FkIWzghDQpfbN9wjRhBEmnWA4BdMyPfB%2BvxjqpIIxhq6m7UcnmgXuONyq3FgW7aEQhQBbGSgBgKb4W10ylWddZu%2By%2FzOhpX2hGaCziEa3fVYV9E0opdLCjRJfl3y1YQJvu9KDGj4IdALODFJzTQpVCcUK3wOr%2BU4WiZUzBwg0%2FmpRvuaDe2aHGbphCq0uvSZzGkEItdF3TQOQzfMN%2FFu8EGOqUBQi5pTKUcWTlQ2QXW07vhEsJNvLys45SfKGbpQaOnFB624sj8orztShTbKLS0ewzn4BkQhpxEku4Ew5Z8s8UrHEJ%2FqvaC5oRFJXXzgjo541jU6TvrzphmKV%2BkUS7bsecTj3YqZDKOLoQtqvnfP5aW6MlZJThaH5YoCrlKHwob1BE6tBRWjfq1ky1ywtlBuabOIqo6auDevRVdvQPhbmSQWU8fD%2BN9&X-Amz-Signature=3701a64eaca1d8cb43cc7ecba63bea564bcd7cfcd014e2af4051b3572d15da69&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFAUEZYC%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEBf53jwAawvUa%2By2sHj3a1GIV3hXYuTKs1inrXAhRh0AiEAwLSM%2Bh1H13OR6UTP8qHBoE0DZX5pMbI2uHfLtUNy5AkqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqeN7xwBtOqUbIsRSrcA9BI%2FkJDrSQhvR%2BdJo7wTDO0ApDvKVykXu1mR%2FbEcivo1lgeotmpllJp4JiviMB4oAlSZ6suZ3MimhcfbFlDb9lQ5PQLNwg1Xv4nhlblYf%2FhGPp6Z%2BvWWEUn1PQ%2BE4uooDv91kUEVh4MZZscihDbrRxZ6u53WIyjXSxoer8EbaT%2ByTiiy9fDvTipVhbjDouigIxUhlaXZOunyDwxAa9aJuoSPA12gUZWdqaeDXtByHzWrv4Qep5iY3fjOFwHOvkLrkDZLn9VO06bFbtFV00V%2FJfutuSp%2Fm2%2BhNlywAc00t3ePRuiJ6MaMTyruPZ%2BsxP79gsdmP%2B0OvFHaq0X1%2BBjRNqn4cSR%2Bat2Y9oUIck3yOHxMW%2FjOh0TB9eV5gqR7OxwCAdH9qWn5%2BvmI71M073GPSgpiQNw12B0KkxHO0nQ%2BsQz7%2FkIWzghDQpfbN9wjRhBEmnWA4BdMyPfB%2BvxjqpIIxhq6m7UcnmgXuONyq3FgW7aEQhQBbGSgBgKb4W10ylWddZu%2By%2FzOhpX2hGaCziEa3fVYV9E0opdLCjRJfl3y1YQJvu9KDGj4IdALODFJzTQpVCcUK3wOr%2BU4WiZUzBwg0%2FmpRvuaDe2aHGbphCq0uvSZzGkEItdF3TQOQzfMN%2FFu8EGOqUBQi5pTKUcWTlQ2QXW07vhEsJNvLys45SfKGbpQaOnFB624sj8orztShTbKLS0ewzn4BkQhpxEku4Ew5Z8s8UrHEJ%2FqvaC5oRFJXXzgjo541jU6TvrzphmKV%2BkUS7bsecTj3YqZDKOLoQtqvnfP5aW6MlZJThaH5YoCrlKHwob1BE6tBRWjfq1ky1ywtlBuabOIqo6auDevRVdvQPhbmSQWU8fD%2BN9&X-Amz-Signature=fc44691fd8abfbd8a7e0da5c890d406434c5611964018b83bb17bb006d8e1230&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFAUEZYC%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEBf53jwAawvUa%2By2sHj3a1GIV3hXYuTKs1inrXAhRh0AiEAwLSM%2Bh1H13OR6UTP8qHBoE0DZX5pMbI2uHfLtUNy5AkqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqeN7xwBtOqUbIsRSrcA9BI%2FkJDrSQhvR%2BdJo7wTDO0ApDvKVykXu1mR%2FbEcivo1lgeotmpllJp4JiviMB4oAlSZ6suZ3MimhcfbFlDb9lQ5PQLNwg1Xv4nhlblYf%2FhGPp6Z%2BvWWEUn1PQ%2BE4uooDv91kUEVh4MZZscihDbrRxZ6u53WIyjXSxoer8EbaT%2ByTiiy9fDvTipVhbjDouigIxUhlaXZOunyDwxAa9aJuoSPA12gUZWdqaeDXtByHzWrv4Qep5iY3fjOFwHOvkLrkDZLn9VO06bFbtFV00V%2FJfutuSp%2Fm2%2BhNlywAc00t3ePRuiJ6MaMTyruPZ%2BsxP79gsdmP%2B0OvFHaq0X1%2BBjRNqn4cSR%2Bat2Y9oUIck3yOHxMW%2FjOh0TB9eV5gqR7OxwCAdH9qWn5%2BvmI71M073GPSgpiQNw12B0KkxHO0nQ%2BsQz7%2FkIWzghDQpfbN9wjRhBEmnWA4BdMyPfB%2BvxjqpIIxhq6m7UcnmgXuONyq3FgW7aEQhQBbGSgBgKb4W10ylWddZu%2By%2FzOhpX2hGaCziEa3fVYV9E0opdLCjRJfl3y1YQJvu9KDGj4IdALODFJzTQpVCcUK3wOr%2BU4WiZUzBwg0%2FmpRvuaDe2aHGbphCq0uvSZzGkEItdF3TQOQzfMN%2FFu8EGOqUBQi5pTKUcWTlQ2QXW07vhEsJNvLys45SfKGbpQaOnFB624sj8orztShTbKLS0ewzn4BkQhpxEku4Ew5Z8s8UrHEJ%2FqvaC5oRFJXXzgjo541jU6TvrzphmKV%2BkUS7bsecTj3YqZDKOLoQtqvnfP5aW6MlZJThaH5YoCrlKHwob1BE6tBRWjfq1ky1ywtlBuabOIqo6auDevRVdvQPhbmSQWU8fD%2BN9&X-Amz-Signature=1183bab5b8acfb70b3716b5af000d71adcbbc390da2cbacc429685f276df8fd0&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X343ZYI4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDA0%2BL%2BEOPNFoJ5qNevOqycJXdrY82ECA51eD1rG96cigIgDo61KzBmOr5zY7Dkuy4w8%2Bst4%2FX%2B2vI2EtT5bKCfXlsqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZO2VbzHLBuVBBGSCrcA1p2VbeUmiBHMAhNwkEs47Djp7js7YPB5KhKHEX8Trbkffh9hU6K9ecJXJqYnelnGcjM9s0Z88n9lRIrE3IZny%2Fb79LGHvMDnGFcEH7szN4Vx0IWbFvJ%2FK9kHLiu0NRhf4rfgxJisBjRjjR5zn%2FqcMkGhDHlUEgNSvACLONUpjzjWW1J7uMTTtIY4YYSeng5CTZKhMHF6m0D7lh0jkp9mEbGSse6ex5XZpo8HjOBMXEcJK331pPIHl%2BJRzuG7h0S5VjCVMbyR20h27yMzY4mRq1o%2FOkXPXww3z92QRZ2tYyN6EvR8Tqdl6TYCsZBucd6q1hvmxcGeyeoLFo5ivzVuQs6wo7DVXvJjZccbZ6DeogCaQjleyrQIcDlOBufQV24Chy8dXd0vEGFgsaNF0KKkMCPNtP84p%2F73IdqqgHRi4TAjabbkVjlB1k%2BTJF9cPP96bzgZihI%2Fgm57qLkZ%2B%2FkSsrj4%2Fr1pX7BB9nhojAHCYs8Q%2B5T6ULtzpS6t9qJi3i9YdZLwEDQdQsTqQVx1SomyLmFwOz%2BCtvu8y4TYbfocidvsh4qNcLZ6Xz1gOSQ4XnPFBU5m3izQVYohzg%2FNWPcSmthsMe4%2F9cgXxjI81SmUjOwKSF1qzq7wZ%2B8uomlMMzGu8EGOqUB7bAH0kZieUuvZorBfjAhcxXSbX%2FwIJnzVEywAZ4QBhSJQqqbbo5zxzk4WFZNmDHxLIIT3JnD0EZZ438i77%2FHC8DESZ747ZZgcod790VVzuKQSJy0WbpyTmG4FDwFrxvyf53YWWWaZLjXCA%2BHEX%2BrzdLERWE3dG3%2BJszKZH1VpqqcaUqEhe3U5rtWj62awRk6TYtquA8r6jz1SnKVSqxlGsJZ%2F3ir&X-Amz-Signature=0635a959cdbd21b09d6be8ac663ea81cf9eddd5a514d576de409aa7be1017a19&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPFHUXLJ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDwvL8Q6mjC0gT1kMQJgCWJwJJjygz2jyXg%2F1iOLWCDFQIgJ7cxDJ8Cx5pnqFAXkTOPT9VUYU9aA8XplP2np3pDkroqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPLiOQliDR%2BH0Za3ircAydsqFlGDsYdBYT7iZFWT6Ggeol5owef7YgeOoXNYy7RT%2BGava0omTk07r8%2Brx0kMuhFkpysUInkciH1Yvi6LprvuRFtFVhkta9epEUH1bUq%2FvhU1fTzxFLwDdwJ8FhkmwaefkfNrvcwSyOEeZpXuvzjhQR0scdK7zq17HV8VIDn5Qk%2F%2BH0R%2BsKY6KlrRCv4NR1FXDqZ4%2BI1MsENewJGYdvb%2F0jH8hgLxT8xSfjva3B120jNDq0KgadoahwLoMLiJaIB9fzFxwahKJERFvBKMbXNb49ulpoe6l8l5GhLKRvyAb2s3z1nr1VJH%2FmkfdKwR3C2JY1ZOCL9GM8jrGVOMdm34jgt9bLdOz%2BYjm91LaK1N4l0K0DjXLczWhNqcH2D1PDlScEOeqkHI4fsh%2BUXa9yle%2BwzuEe1sET7a5EiDB2TE2eMb5IQOZGG9xDlYtlByBLHTkgWitJfhsGPZ27R2jryFUK3qMfmZTNfwOD7Cx8faHL1UQrBJPPiJdldfhaC9rE4OHcL8rSkj5Z0l3DrSQLiBV3g9V09OynTdS3xBHEH2gI33KGUEsHIOQWEYzt1cG07ddihl2kq3XEiCXsVondt%2FDNan2jWedOyASSBsF9Z2FogH8zjJ3os6Hm9MN3Fu8EGOqUBUVUWTX%2BIswyc2eM7a48rtRpbHyhI071AptK%2FFf4ABf%2F0Gmz1gnN8WFWTZeHZb5X3lQSwSAZJfEslPJYGZ%2B3gOPgYzaNxDZQg5cJLR%2FbTwLGiTmSxPdQHAzs4fOxfPHBggePzDphnKLICxelUOr2gj1u2CVPg7OMqW9rBJZB66Bxo%2BD1WM3GJ%2BDbapO7kYk3VBJlL2zlDzMVMvFfmTCUNzxJyHDZa&X-Amz-Signature=b363a19285dab49c93b2dc2e3b64666e71cdf739284a676ee46865974830cdc0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFAUEZYC%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEBf53jwAawvUa%2By2sHj3a1GIV3hXYuTKs1inrXAhRh0AiEAwLSM%2Bh1H13OR6UTP8qHBoE0DZX5pMbI2uHfLtUNy5AkqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqeN7xwBtOqUbIsRSrcA9BI%2FkJDrSQhvR%2BdJo7wTDO0ApDvKVykXu1mR%2FbEcivo1lgeotmpllJp4JiviMB4oAlSZ6suZ3MimhcfbFlDb9lQ5PQLNwg1Xv4nhlblYf%2FhGPp6Z%2BvWWEUn1PQ%2BE4uooDv91kUEVh4MZZscihDbrRxZ6u53WIyjXSxoer8EbaT%2ByTiiy9fDvTipVhbjDouigIxUhlaXZOunyDwxAa9aJuoSPA12gUZWdqaeDXtByHzWrv4Qep5iY3fjOFwHOvkLrkDZLn9VO06bFbtFV00V%2FJfutuSp%2Fm2%2BhNlywAc00t3ePRuiJ6MaMTyruPZ%2BsxP79gsdmP%2B0OvFHaq0X1%2BBjRNqn4cSR%2Bat2Y9oUIck3yOHxMW%2FjOh0TB9eV5gqR7OxwCAdH9qWn5%2BvmI71M073GPSgpiQNw12B0KkxHO0nQ%2BsQz7%2FkIWzghDQpfbN9wjRhBEmnWA4BdMyPfB%2BvxjqpIIxhq6m7UcnmgXuONyq3FgW7aEQhQBbGSgBgKb4W10ylWddZu%2By%2FzOhpX2hGaCziEa3fVYV9E0opdLCjRJfl3y1YQJvu9KDGj4IdALODFJzTQpVCcUK3wOr%2BU4WiZUzBwg0%2FmpRvuaDe2aHGbphCq0uvSZzGkEItdF3TQOQzfMN%2FFu8EGOqUBQi5pTKUcWTlQ2QXW07vhEsJNvLys45SfKGbpQaOnFB624sj8orztShTbKLS0ewzn4BkQhpxEku4Ew5Z8s8UrHEJ%2FqvaC5oRFJXXzgjo541jU6TvrzphmKV%2BkUS7bsecTj3YqZDKOLoQtqvnfP5aW6MlZJThaH5YoCrlKHwob1BE6tBRWjfq1ky1ywtlBuabOIqo6auDevRVdvQPhbmSQWU8fD%2BN9&X-Amz-Signature=52cce1e6ced6d83aba5e63be258131393df17fc47830202e3aee6afae14ec242&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
