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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ6C4OTQ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYPZbMrIZoTh%2FUqqYBPnuw2YMGxC%2BgOxys9%2FSkVF8mPAiEAsp5YtMqlImssVewSQFo2ZNTXZxZ8HUNMvoU%2BHq4ZaI4q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFnNtrrmgeivPuSdsCrcAxkyWZRb3CxnbVvUvZ4sM4KXiFJfBc9ncdsImfrvuQ1HoAKYM%2Fdpn%2BSsJlzv9c7EJn8hrtnu8Ktolo4GEoyYeNu%2Bw%2BBSJPhg0G39gNrhw2jS%2BAC%2Bd%2F09%2BJTKnOoTtedgT8cgLmoV24EYrLvQDuJHdJ9t%2BPBLWlsDbaLRxmcxUc%2FBT3Izex3tjn%2BmGNlqV1lUa0JPpltFQRfwTGfjMeoavNYjN8%2FXcexnkQTHO2aSGA4RijOKrnSXNPCTjJqHBqhVbEWTgwTiCojfEkFxj7sCpqBdnEH1jtlwhpHJzL%2BhD%2FOeIXBmw2txAL%2BfIM0qWyc2te4ib1PZU8SuGWj2GJMQmeinwScegPUBH5MI5I%2BK2XoD9Uvov9bKb9aIn04omVY%2BGwzfOGSg9L9s5q6AKGOtTqGRU1y1OlbExHU0emlTz79W%2FLwTqmBUNc18uypCNuSzkvcw1OJ6W%2B6zWW6CwaSnqffgmZTFkwnYnKg9ip2RQyyw6Vo6kTRocvShttx59b8UDXzAAOgpU%2BemYqIorVt5n1MMCQjtkETPBYeD8aijPNP5dsS4FEe5gTPuWBlwp3JG6JbdJ%2BQZaj5D8ls%2FqwCQAmVqlffM4sGupVAlZDvlhxrVyuGWc8wlNPIgPjrqMJvsw8IGOqUBM2XwN0sOJy8Qdv2tlPKwpD4geAxkO4zcxDb%2FDhWPPLUyqtKVews8sZtqyq91ITtKEnpgQjncVhhUV1hmLJKGd8K2l6Kvvs25OOETL3ieNTEDjMwPfpMDuLcz%2F0VCZZFb2FZcSTdYiMUByE9bwscbLC2ya914NCWDypjs7R3glmgFE1VWIH4vwcwRICqlqdhZcsWEAVjaNf9WsX4PdlvcczPsWzpY&X-Amz-Signature=2d85da8f0dbd132c831116d7826d037bab24ac91ea28db5c5239c285ebd7f9d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ6C4OTQ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYPZbMrIZoTh%2FUqqYBPnuw2YMGxC%2BgOxys9%2FSkVF8mPAiEAsp5YtMqlImssVewSQFo2ZNTXZxZ8HUNMvoU%2BHq4ZaI4q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFnNtrrmgeivPuSdsCrcAxkyWZRb3CxnbVvUvZ4sM4KXiFJfBc9ncdsImfrvuQ1HoAKYM%2Fdpn%2BSsJlzv9c7EJn8hrtnu8Ktolo4GEoyYeNu%2Bw%2BBSJPhg0G39gNrhw2jS%2BAC%2Bd%2F09%2BJTKnOoTtedgT8cgLmoV24EYrLvQDuJHdJ9t%2BPBLWlsDbaLRxmcxUc%2FBT3Izex3tjn%2BmGNlqV1lUa0JPpltFQRfwTGfjMeoavNYjN8%2FXcexnkQTHO2aSGA4RijOKrnSXNPCTjJqHBqhVbEWTgwTiCojfEkFxj7sCpqBdnEH1jtlwhpHJzL%2BhD%2FOeIXBmw2txAL%2BfIM0qWyc2te4ib1PZU8SuGWj2GJMQmeinwScegPUBH5MI5I%2BK2XoD9Uvov9bKb9aIn04omVY%2BGwzfOGSg9L9s5q6AKGOtTqGRU1y1OlbExHU0emlTz79W%2FLwTqmBUNc18uypCNuSzkvcw1OJ6W%2B6zWW6CwaSnqffgmZTFkwnYnKg9ip2RQyyw6Vo6kTRocvShttx59b8UDXzAAOgpU%2BemYqIorVt5n1MMCQjtkETPBYeD8aijPNP5dsS4FEe5gTPuWBlwp3JG6JbdJ%2BQZaj5D8ls%2FqwCQAmVqlffM4sGupVAlZDvlhxrVyuGWc8wlNPIgPjrqMJvsw8IGOqUBM2XwN0sOJy8Qdv2tlPKwpD4geAxkO4zcxDb%2FDhWPPLUyqtKVews8sZtqyq91ITtKEnpgQjncVhhUV1hmLJKGd8K2l6Kvvs25OOETL3ieNTEDjMwPfpMDuLcz%2F0VCZZFb2FZcSTdYiMUByE9bwscbLC2ya914NCWDypjs7R3glmgFE1VWIH4vwcwRICqlqdhZcsWEAVjaNf9WsX4PdlvcczPsWzpY&X-Amz-Signature=0232a9f7c2c16ca4d07e05d9adaedb510d88cb807683fea63b76ac8d8acf27f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ6C4OTQ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYPZbMrIZoTh%2FUqqYBPnuw2YMGxC%2BgOxys9%2FSkVF8mPAiEAsp5YtMqlImssVewSQFo2ZNTXZxZ8HUNMvoU%2BHq4ZaI4q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFnNtrrmgeivPuSdsCrcAxkyWZRb3CxnbVvUvZ4sM4KXiFJfBc9ncdsImfrvuQ1HoAKYM%2Fdpn%2BSsJlzv9c7EJn8hrtnu8Ktolo4GEoyYeNu%2Bw%2BBSJPhg0G39gNrhw2jS%2BAC%2Bd%2F09%2BJTKnOoTtedgT8cgLmoV24EYrLvQDuJHdJ9t%2BPBLWlsDbaLRxmcxUc%2FBT3Izex3tjn%2BmGNlqV1lUa0JPpltFQRfwTGfjMeoavNYjN8%2FXcexnkQTHO2aSGA4RijOKrnSXNPCTjJqHBqhVbEWTgwTiCojfEkFxj7sCpqBdnEH1jtlwhpHJzL%2BhD%2FOeIXBmw2txAL%2BfIM0qWyc2te4ib1PZU8SuGWj2GJMQmeinwScegPUBH5MI5I%2BK2XoD9Uvov9bKb9aIn04omVY%2BGwzfOGSg9L9s5q6AKGOtTqGRU1y1OlbExHU0emlTz79W%2FLwTqmBUNc18uypCNuSzkvcw1OJ6W%2B6zWW6CwaSnqffgmZTFkwnYnKg9ip2RQyyw6Vo6kTRocvShttx59b8UDXzAAOgpU%2BemYqIorVt5n1MMCQjtkETPBYeD8aijPNP5dsS4FEe5gTPuWBlwp3JG6JbdJ%2BQZaj5D8ls%2FqwCQAmVqlffM4sGupVAlZDvlhxrVyuGWc8wlNPIgPjrqMJvsw8IGOqUBM2XwN0sOJy8Qdv2tlPKwpD4geAxkO4zcxDb%2FDhWPPLUyqtKVews8sZtqyq91ITtKEnpgQjncVhhUV1hmLJKGd8K2l6Kvvs25OOETL3ieNTEDjMwPfpMDuLcz%2F0VCZZFb2FZcSTdYiMUByE9bwscbLC2ya914NCWDypjs7R3glmgFE1VWIH4vwcwRICqlqdhZcsWEAVjaNf9WsX4PdlvcczPsWzpY&X-Amz-Signature=115ab93d3dcd317078fc9230dd95d1bcd7526630ebcdcee4bbf71c6bda08aee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPB4YN5G%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBL2YNqZdlLBIs0acXkSscJ0btbaURS%2F7xQ0iV5s5Pv8AiBM5xbhzYTKrkYXirio87TlHdBJ0hnmM1gihLP1myg9kir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMDZW7NCZIM1osriIBKtwDrq4BH03tHH7CpEl6jlMSfW%2BUz647c%2BeELgLZowio2A5zEckr1qDwuuJaNa4a0YAmp3dj%2BXpwPoQmMCVuczTsJSXhsfI%2FuiueOBva5CyT9IhzndTLb7nSbkq4SqfIa4BhV7PNy2LFV4hNFh81eeQzk0TbezctdLCc87Y5zCFTtnGHcOnigh7jGK1BICrcxR1%2FUGSltsW6HxB0mI4x9umn9Kw712pSa5jrty2JIMOyEPw8Gt16Pdb3psejwkQ1fpbZfXca1nhExnQilaMzNblMo8%2FaW2D00ikjTPm19%2BY%2BEfaIyBfYWdKwEFEuOFG2VOtp%2BwpBxe%2F4XZh295oX05zYQEuDg53odFbqUaU5z%2BJtS8lhC%2B1Dn%2F28Bw5Dw7dFJ2bH1suGPjXSDjCFP3p6MEG7nl7maiEvr0bi6w0G7m6E4bNa0T6D%2BQoaSZiuFFK7LqsWupGOURVubPKj9vaqHMjTcpVJiVOTcYB7FIVclQvyQx5ApZ%2FqURPgeyyejMbu54R8ovQjxV9QJAjm7Wfkwo1M1w2cMUJbTvCXgGJqQhSbTingEN0QlRds2%2BciCYF7hWRTQrv6O2KK9DtWh%2BU9cPZXKUnTRVPwaEGbxnVpjTQPJPmMPthgkBFMcBxB6ZUw5uvDwgY6pgE3LIYzfyr2Quvw%2F%2BCJOgY6W0jDV5jtQwPrDYZFnos2877ByjUqFh0CnZCtu5xwUymlo2B8wHs6jZqqNBAhk1%2FcmsJnSzFE9uFGIdGFOdRNOUMCsHjs42YEI8jz5tI%2FYnDDq96vJExc3OInSSDyRMnYjVyHXZ4tpMiPW0T9szisEFTMOhmVhG4%2BG%2BEOeTZD%2B5UVy%2FNAVfVE1Td3qcusVrMifQSPCBOW&X-Amz-Signature=b75edc5037ef60513f77045a897980c0f710d0803b62180839021a5a11141667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMEJM6KY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPiLHkEuSm1%2F71%2F6aJCV4tr1CPniK7Kgc7DT2TJDJOBAiAycEkclSTtAnRAzzJhEtqbWRvGaaI%2Fr3DWGz3l6z8kAir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMiKKUICACuDwIrqDPKtwDIO6rZl%2BK329vyDOkTNt8rhZEJK61h52b6mX8T2D%2FR%2FW%2BM9aFC3IdesRP8DZVXRGa2y4WsVZRmmFRjAWPB%2BIe%2BvmSbHr7skIyDSJ8iiujpura%2BON73ZFc4gSG%2FOVnmkmEUjlQEWqgWToglL3Fo343Z8ukFUQ2mkIjTAv8M2Lke0JxJqWGq5IY9YtPMer4e62t51QuLcSlMEpDF1qT%2BUIQMVMsV7yQFbSfxExCEJ1Xa4PKyNG%2Bj8a8GV1PWI6XQUBmqbe40NtkYWfRMEdnNVSTyvJrL9fgNvJz%2FSu4mA6FqVvlqCIgMzku43KpUjj5p6DJt1MDB0JBHG8iI9PMIb7h2UGCpwfns%2FvRI81HUtBQSrk15GEMOg8ZAkYLWuMcgueJb%2FKM74hWyeTflbcaApjiwdQOQNNrhfTlkfNzV5GptvF9Febj2QgOsJtC41AHXFzYGQ5vwQwfrnkVEmGfCtOTOrP4oVzMxxsausskgce0JhgeXseN4MLu4qclmkU8Wqymf7KzZ4tCyV2SkCbMjxfA0cjf2IAT5pskwEWg84OO01OsOoRAzorbX8Ssfv2HOw6t4UlyOfM8UYPlH5nbrJSuVZWPlSRSW1FVUuUEsgHS74IL%2BA99%2BZir0yG7F7cw5evDwgY6pgF8%2F0%2BB8XRd4a3WWPmud6F7TrJtD3snRbM49MH8dhKAKOmkIn08orMGjC4TDPK3ywpMCVrAW18zbIaaUH9BmZ8w3dg3j%2Bs3IKNE%2B%2B3B38y0SoXDpE2wjjfLOccATUHYOPiQ9Ct3RQSzxy4ZlwoG8BFemdsdR%2BBAMFwHnVHIQFfjUGzZvq%2FzMjQ%2F204fmF3J9xTNKb9HANxSezegd5ZFokFihm89v2J7&X-Amz-Signature=3ad62e28077bc5340b265fc39a014391c631f33887cf3644deaa219e09ea6682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ6C4OTQ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYPZbMrIZoTh%2FUqqYBPnuw2YMGxC%2BgOxys9%2FSkVF8mPAiEAsp5YtMqlImssVewSQFo2ZNTXZxZ8HUNMvoU%2BHq4ZaI4q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFnNtrrmgeivPuSdsCrcAxkyWZRb3CxnbVvUvZ4sM4KXiFJfBc9ncdsImfrvuQ1HoAKYM%2Fdpn%2BSsJlzv9c7EJn8hrtnu8Ktolo4GEoyYeNu%2Bw%2BBSJPhg0G39gNrhw2jS%2BAC%2Bd%2F09%2BJTKnOoTtedgT8cgLmoV24EYrLvQDuJHdJ9t%2BPBLWlsDbaLRxmcxUc%2FBT3Izex3tjn%2BmGNlqV1lUa0JPpltFQRfwTGfjMeoavNYjN8%2FXcexnkQTHO2aSGA4RijOKrnSXNPCTjJqHBqhVbEWTgwTiCojfEkFxj7sCpqBdnEH1jtlwhpHJzL%2BhD%2FOeIXBmw2txAL%2BfIM0qWyc2te4ib1PZU8SuGWj2GJMQmeinwScegPUBH5MI5I%2BK2XoD9Uvov9bKb9aIn04omVY%2BGwzfOGSg9L9s5q6AKGOtTqGRU1y1OlbExHU0emlTz79W%2FLwTqmBUNc18uypCNuSzkvcw1OJ6W%2B6zWW6CwaSnqffgmZTFkwnYnKg9ip2RQyyw6Vo6kTRocvShttx59b8UDXzAAOgpU%2BemYqIorVt5n1MMCQjtkETPBYeD8aijPNP5dsS4FEe5gTPuWBlwp3JG6JbdJ%2BQZaj5D8ls%2FqwCQAmVqlffM4sGupVAlZDvlhxrVyuGWc8wlNPIgPjrqMJvsw8IGOqUBM2XwN0sOJy8Qdv2tlPKwpD4geAxkO4zcxDb%2FDhWPPLUyqtKVews8sZtqyq91ITtKEnpgQjncVhhUV1hmLJKGd8K2l6Kvvs25OOETL3ieNTEDjMwPfpMDuLcz%2F0VCZZFb2FZcSTdYiMUByE9bwscbLC2ya914NCWDypjs7R3glmgFE1VWIH4vwcwRICqlqdhZcsWEAVjaNf9WsX4PdlvcczPsWzpY&X-Amz-Signature=dfe8818120bdf238a3a940901161e5deed00a2d99b629976941e8798be9a607b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
