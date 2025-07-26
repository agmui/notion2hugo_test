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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPBV6JIU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIAhKdXcnaMALyfQa4SSu8V5pLDEC%2BNyip%2FIP0pN3CPeqAiEA8tRBd0wT3Rn67NoPM0oWmjqxmndLK3hgaVNVwkKlvagq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDLfgKcstGbLnJX4TXCrcA7BSZIG3kQJCigdoTQhhuSxmvBV3y64gzO1zKFypuDIfIF0%2BHVk0LXSogfGFHMyIn0wlGengdamEqG9x%2BGcyQjVijd3HLeJsmnz0QtsKG%2Fgte8mdHnHnoRIRL71JavyigX6u1R9ufFiGslE77Hjv17vQYt01ZsNaPmtrReYnBtp9gYlp06L9EyEmvoLyGokG7J1r4DE7cbx69y566ndVwnDo6XqrFWvLZGA0BgxTDgg3%2FUB2D9uy3fbuuyEnpYD7MCZFhouMPNi%2FXMMqKQzuGtMhTv2mdR2bVUmbkPAwkWWqEWgSHtJMmpJhQdIHxFObCjzc%2F%2F5xRbPS7EbshYITM%2F8E5Xw1IUmTvyctEzeQGpKAnG2Stn5fQZp7z5r1kljCLu64ATQrzSaqT%2Fg9BqkqlrMA27%2BpeOKY5WaIeewrCWaZJhG%2Fv6L95jNdwYgAyuGUSKpMl8i9iSWMX%2FKB8pQ%2FbWb0LmoKMpHQzThddeGob1ZJp5R5DsFQlAnaPzM5xcaX2AgawbfhrYvk9BeD2PFQjY%2B2ZABKVALNh%2FX95sqIPEi%2BrU4TNSXKv5GpiIWIlsU5u4mefRMj02cq2YSY1DuKSFFUtY32npfcl1goh9CLUaAR%2Bq0kYdNC%2B3gWV48EMImrksQGOqUBEz35VPBrD%2FluEYFIstPiYvMVlvJRZ6f8RTYVuWOWm%2FMcHkp0JIlXFK1R0dYTKGJN4ajQ6o18BYni7tyG5sWNVgE3JnCJKrx9pPTVo1uDkW%2Bk6zV8uoMviJgUaNzbp08rAb%2BsNXN1Dq%2FbgnTb6IoHHr7Kk5pOqh%2BsL%2BrZIVhol%2FmXda%2FQEq1u6unrVWG6KFfa1mmsmSV%2FED6zygRgVD8E%2FbPRAViw&X-Amz-Signature=bbee16c0a807b1978b0e448d56d2a346705174ab506a387633b29c5d69855986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPBV6JIU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIAhKdXcnaMALyfQa4SSu8V5pLDEC%2BNyip%2FIP0pN3CPeqAiEA8tRBd0wT3Rn67NoPM0oWmjqxmndLK3hgaVNVwkKlvagq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDLfgKcstGbLnJX4TXCrcA7BSZIG3kQJCigdoTQhhuSxmvBV3y64gzO1zKFypuDIfIF0%2BHVk0LXSogfGFHMyIn0wlGengdamEqG9x%2BGcyQjVijd3HLeJsmnz0QtsKG%2Fgte8mdHnHnoRIRL71JavyigX6u1R9ufFiGslE77Hjv17vQYt01ZsNaPmtrReYnBtp9gYlp06L9EyEmvoLyGokG7J1r4DE7cbx69y566ndVwnDo6XqrFWvLZGA0BgxTDgg3%2FUB2D9uy3fbuuyEnpYD7MCZFhouMPNi%2FXMMqKQzuGtMhTv2mdR2bVUmbkPAwkWWqEWgSHtJMmpJhQdIHxFObCjzc%2F%2F5xRbPS7EbshYITM%2F8E5Xw1IUmTvyctEzeQGpKAnG2Stn5fQZp7z5r1kljCLu64ATQrzSaqT%2Fg9BqkqlrMA27%2BpeOKY5WaIeewrCWaZJhG%2Fv6L95jNdwYgAyuGUSKpMl8i9iSWMX%2FKB8pQ%2FbWb0LmoKMpHQzThddeGob1ZJp5R5DsFQlAnaPzM5xcaX2AgawbfhrYvk9BeD2PFQjY%2B2ZABKVALNh%2FX95sqIPEi%2BrU4TNSXKv5GpiIWIlsU5u4mefRMj02cq2YSY1DuKSFFUtY32npfcl1goh9CLUaAR%2Bq0kYdNC%2B3gWV48EMImrksQGOqUBEz35VPBrD%2FluEYFIstPiYvMVlvJRZ6f8RTYVuWOWm%2FMcHkp0JIlXFK1R0dYTKGJN4ajQ6o18BYni7tyG5sWNVgE3JnCJKrx9pPTVo1uDkW%2Bk6zV8uoMviJgUaNzbp08rAb%2BsNXN1Dq%2FbgnTb6IoHHr7Kk5pOqh%2BsL%2BrZIVhol%2FmXda%2FQEq1u6unrVWG6KFfa1mmsmSV%2FED6zygRgVD8E%2FbPRAViw&X-Amz-Signature=8cb8d3035914a3d597fbad6a62ca76d4f0836cca2b60c21c42e645f3dfd0f276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPBV6JIU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIAhKdXcnaMALyfQa4SSu8V5pLDEC%2BNyip%2FIP0pN3CPeqAiEA8tRBd0wT3Rn67NoPM0oWmjqxmndLK3hgaVNVwkKlvagq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDLfgKcstGbLnJX4TXCrcA7BSZIG3kQJCigdoTQhhuSxmvBV3y64gzO1zKFypuDIfIF0%2BHVk0LXSogfGFHMyIn0wlGengdamEqG9x%2BGcyQjVijd3HLeJsmnz0QtsKG%2Fgte8mdHnHnoRIRL71JavyigX6u1R9ufFiGslE77Hjv17vQYt01ZsNaPmtrReYnBtp9gYlp06L9EyEmvoLyGokG7J1r4DE7cbx69y566ndVwnDo6XqrFWvLZGA0BgxTDgg3%2FUB2D9uy3fbuuyEnpYD7MCZFhouMPNi%2FXMMqKQzuGtMhTv2mdR2bVUmbkPAwkWWqEWgSHtJMmpJhQdIHxFObCjzc%2F%2F5xRbPS7EbshYITM%2F8E5Xw1IUmTvyctEzeQGpKAnG2Stn5fQZp7z5r1kljCLu64ATQrzSaqT%2Fg9BqkqlrMA27%2BpeOKY5WaIeewrCWaZJhG%2Fv6L95jNdwYgAyuGUSKpMl8i9iSWMX%2FKB8pQ%2FbWb0LmoKMpHQzThddeGob1ZJp5R5DsFQlAnaPzM5xcaX2AgawbfhrYvk9BeD2PFQjY%2B2ZABKVALNh%2FX95sqIPEi%2BrU4TNSXKv5GpiIWIlsU5u4mefRMj02cq2YSY1DuKSFFUtY32npfcl1goh9CLUaAR%2Bq0kYdNC%2B3gWV48EMImrksQGOqUBEz35VPBrD%2FluEYFIstPiYvMVlvJRZ6f8RTYVuWOWm%2FMcHkp0JIlXFK1R0dYTKGJN4ajQ6o18BYni7tyG5sWNVgE3JnCJKrx9pPTVo1uDkW%2Bk6zV8uoMviJgUaNzbp08rAb%2BsNXN1Dq%2FbgnTb6IoHHr7Kk5pOqh%2BsL%2BrZIVhol%2FmXda%2FQEq1u6unrVWG6KFfa1mmsmSV%2FED6zygRgVD8E%2FbPRAViw&X-Amz-Signature=8f926b627872aaeb13f68367161b9103e2d13ee871f2e8cfc1baf1b459e17ffa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPBQR64X%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCWOtey55GqsLu%2BNwqMcR%2FIYQ4J9MV1Qg%2BNr6RHcyzwkwIhALWKs2VIjLtra8IMZPQRTCLOz71utBh9sFFjHsmhGurbKv8DCFoQABoMNjM3NDIzMTgzODA1IgwmyOj4xf%2FFYNBskCwq3AOYKWBodGd9k%2BIoFNQdaxC7eYkWBrpfllZi7In5sGDPNxBRqO6KinfjGbUf2YQD3zJMcDFMGcbsWs2DYTHfMHfgc7N4%2BWfn0dyycphEdVZNNP7EOpQaRxTxLT73dnofrD9lvUqfJaRxP5lrXXxR0ml%2FbuitJn2p4gYWMzX9JqV13hU10cqIu3Tl%2B2vZpSU0HiYfQmtgcMY3Fj2Q%2BPN9sfXrzdmON7DAxKfsOdXiL%2BYm5i%2BqckDY2O6mgUym62XjdRnlTIG1jmx6NkPN80r72YkPCLr3ggO7gFVli7S9D%2F0nrt4x64NkR1J4jBeP6g0XnKc7N7WocWA%2FiGR3gLWOSGD%2F1ZtsVDoHy6BC5rciLU6HNvBlHLcwWs2mRchHH78HSkU1eO3CdfjDkJzTpWXt%2FOi9M1fvvykUtuMA0Qz2ZkZXPGBuQgxmw6zwe4PLdJ6Pc6JhQz5frtlpVPIJtJUJakbgUmE%2FC5en3gFVvV0FnaAV5xoltSCmWeaPrG%2BQdpX0%2FMXWVq2vveh0iYT%2FufPDI%2BtKpouDq0oni5KOcNiv6t8KeVjNHDlSBUrBEZo5W%2FUXmW3%2FU2QxV28hZqRUX9gnbR3Qz35VAggEU1Y92jM33B%2BOj1ORi9Yq0%2B5qLYq6qDDoq5LEBjqkAVZQimX2bLIO16O6zP6a8VThbImqXIe4hNbMrJ%2BC3OkU8h8c%2Fg6rAxzaS%2FnSb1EdgDwtxe1ZWXdwZHLv%2B7%2BjJTWfUj1rL1N%2BgNxGhf%2Fe%2FKlXwhjqhdpi8Wuiz1a0xOdP3fEbhLEHX5DxpR2t4QowRCtZAltuPspgAHgmJkavoud9FH1NmybpRa63%2FvWOslZHVKcEifhDk2tGIdyRGmAyTj9IY%2B%2Fg&X-Amz-Signature=8acb04654d3bf23ae66184e71194ff29690b5f12f0c2de8f5e52d21a5c5d2928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OFXGCTD%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIDOpGaHBs%2Br1Mutvn4jjQa3h0Yhrgm1otkiqP9e8xjXXAiEAzY8br16L%2B5mPnP3zPbQKgIJuxqo1VDUbXOAnqajfVZMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDKCDbgxswsc4Qu9QSyrcAwRDnHFTPEEiVmBJT%2BK67OUrAujynOfwNBm5uup9tsvOQCf%2F6hA03mSumVXUIXxsPgd6WRgfW7od%2Br%2B%2FunvM0Xois9P343tadM6BLR%2BxYDVDKRhKwOBLmgz%2F6%2FCnpTLuCXYa72qT328OOLW2Az3fRgcDbBvSoT%2B1q1Y9D47XZY5FVkDwWryRbY9GgKmhwypRLvgOiXDVRKptqyOsNu%2BK4x8GdOs9Vl4V6GSd0DIjE45z7x%2Fjqrc0sf6HNWh9X%2BH%2B95HN0fv3Opoe3TuvUjDSxy4j%2FrvoScRPJXNHSa0vL0jTcCcHEI6XmGepi0KxLnsvS3iQBLIPgPt3MAqiVI7F%2Fk%2Bj%2BbpgwOOEkHnwazmv%2BIAMVBtekuBUhLjU%2FkXvalLwEYJHkLjOiUer54wjKrg4PVGP%2F0ruq0dpmULl1HRXiOv0IxgpRnLm4MrVNM4HXzMDs2R6DnUs3slEB4HZ0O5Fb8l32LrmfxdFCid2TYBT%2BzKUxmxtNJ84vYhKTxlKSxN%2FY4pQlhkBCT4eYJlqKviF%2B2Lte0DWiry0zw%2FeYx58aOIVfPy%2BsEZnoKHEACXjTYn2j1s6UxdodyI6wYnoZiztO9GOT1wyw07naI4UhDJ7p0C0f1tjEV0FLGQvMG0cMP%2BqksQGOqUBjqpAu%2FtGE0G7KdWFVTZ5Kt%2FmKiv59MBMUUNe9Xd9jf2tdC1YVw00NtxMxaF2NQpPjyKkBwkxcBJEHVOmVR2LEpVYd5%2B1YYUXfdMN9tUBsAa82vidZkqBZAsOuV3gdv7dBMBSDkUsRepYdTsrrjQrWyUYijqaEVeY7DH4twTGG4G2xCv3VVwUHGnz%2FwBExXVmOsCFF%2BgZQoqSuDIVoewr%2B%2Bgg%2FrNW&X-Amz-Signature=13d7385431a424096b1fa91933d353f952f5709a0739c17869760b96cd72c1d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPBV6JIU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIAhKdXcnaMALyfQa4SSu8V5pLDEC%2BNyip%2FIP0pN3CPeqAiEA8tRBd0wT3Rn67NoPM0oWmjqxmndLK3hgaVNVwkKlvagq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDLfgKcstGbLnJX4TXCrcA7BSZIG3kQJCigdoTQhhuSxmvBV3y64gzO1zKFypuDIfIF0%2BHVk0LXSogfGFHMyIn0wlGengdamEqG9x%2BGcyQjVijd3HLeJsmnz0QtsKG%2Fgte8mdHnHnoRIRL71JavyigX6u1R9ufFiGslE77Hjv17vQYt01ZsNaPmtrReYnBtp9gYlp06L9EyEmvoLyGokG7J1r4DE7cbx69y566ndVwnDo6XqrFWvLZGA0BgxTDgg3%2FUB2D9uy3fbuuyEnpYD7MCZFhouMPNi%2FXMMqKQzuGtMhTv2mdR2bVUmbkPAwkWWqEWgSHtJMmpJhQdIHxFObCjzc%2F%2F5xRbPS7EbshYITM%2F8E5Xw1IUmTvyctEzeQGpKAnG2Stn5fQZp7z5r1kljCLu64ATQrzSaqT%2Fg9BqkqlrMA27%2BpeOKY5WaIeewrCWaZJhG%2Fv6L95jNdwYgAyuGUSKpMl8i9iSWMX%2FKB8pQ%2FbWb0LmoKMpHQzThddeGob1ZJp5R5DsFQlAnaPzM5xcaX2AgawbfhrYvk9BeD2PFQjY%2B2ZABKVALNh%2FX95sqIPEi%2BrU4TNSXKv5GpiIWIlsU5u4mefRMj02cq2YSY1DuKSFFUtY32npfcl1goh9CLUaAR%2Bq0kYdNC%2B3gWV48EMImrksQGOqUBEz35VPBrD%2FluEYFIstPiYvMVlvJRZ6f8RTYVuWOWm%2FMcHkp0JIlXFK1R0dYTKGJN4ajQ6o18BYni7tyG5sWNVgE3JnCJKrx9pPTVo1uDkW%2Bk6zV8uoMviJgUaNzbp08rAb%2BsNXN1Dq%2FbgnTb6IoHHr7Kk5pOqh%2BsL%2BrZIVhol%2FmXda%2FQEq1u6unrVWG6KFfa1mmsmSV%2FED6zygRgVD8E%2FbPRAViw&X-Amz-Signature=848ad6b80f9859a26417cc4129d13af2fd6455bc12c339267e0d79d9fbf1a69e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
