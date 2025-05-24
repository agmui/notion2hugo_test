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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB2CESIH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDMmo%2BFoWbCjWyH2SlsZJX87XwxdaFefp2Cf1bsYQbWxgIgEqC%2FLbisRgPQ1yI6CVs7Jpf8Pf61bzlNEzDC1o4VGo0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGPIuR8eWGd3fypK3yrcA61Rz7spjVX9R7Vc%2BS5hGVdZEnR65EchUGDd24AAD%2BVEKvnadbcoOH2PbAucG%2Ff08ODKCOQ%2FhEW8ipyvF7uwIplEXbnNcEFP%2Bj7Dr7pTOkw1dYEiwEl3aJnh9pVXX%2Bvrw87dsEyVSWjfyusCIduSQaf%2B14aw0950QFK3rZOjP2uOIDrXTDnfvUX2GI29FSZh4GhtZkdRF4ac5juXtYI3XKC9fRp9pYXlxlw6oBz%2BrHttlw40lFGw9fb6dT0KrKJNE7aq6HUotPDXKa%2BSvZqLtUqkRK8uB62b4iVwrpIV900ZGJoWdpFAoNyFScfb5odujXL7BXnJeYjVcJ3BSSVtg9A6%2BeYLVl1yWubL%2BUOH4zHiY5WpXIB0lfpNfJfpQl27GbdRCKbbgy2umewtWHU3%2BJmH9XU9o4OY85CTCL%2BcmJ9y75So2Qf4egKN%2BpP9VW5iUVg7hqc4z5lb4nJv%2BdsXbmRXPZqPT74%2Fw%2BtOiv9g9LTUJV75gWstwAmu7bCwgv%2FG3adohngqYhMvQhKV33e2cK1GgZXAcQJ3nAUi3CIn9iEn3%2BhSU4c6bEzpZnGpp9rZx5gauQdQe7saIjt%2FB8%2FSMgzkRLsdD4k5HazEv%2FyUgn05H1YxRZ0pPt0LIO91MKaWyMEGOqUBQzLVqTHimFJ3xrXZINBgmhGbs2pZ5e0oH6SY2CRXaHQ5bsRDwc%2FeMjurubRyy9yOXbOyLzzh3gpVQh5egCdjmhQUFnDhpg5wb51cybC8Aml5ktCWTn8CpixZIW919Z4Vtx%2BUQDPeO4UzdifR1uakC%2FFq1c6Ii%2Bzk8oMutF10J%2FNjalKCk6gYj8Rru5j%2F4hKgeVJlLN5G8fMvOjUBYMnn%2FSgE3LLN&X-Amz-Signature=7b7a02b806bce853d4d8a083e77b84f288bf0cd16614ef8f977008cee2a55c3b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB2CESIH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDMmo%2BFoWbCjWyH2SlsZJX87XwxdaFefp2Cf1bsYQbWxgIgEqC%2FLbisRgPQ1yI6CVs7Jpf8Pf61bzlNEzDC1o4VGo0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGPIuR8eWGd3fypK3yrcA61Rz7spjVX9R7Vc%2BS5hGVdZEnR65EchUGDd24AAD%2BVEKvnadbcoOH2PbAucG%2Ff08ODKCOQ%2FhEW8ipyvF7uwIplEXbnNcEFP%2Bj7Dr7pTOkw1dYEiwEl3aJnh9pVXX%2Bvrw87dsEyVSWjfyusCIduSQaf%2B14aw0950QFK3rZOjP2uOIDrXTDnfvUX2GI29FSZh4GhtZkdRF4ac5juXtYI3XKC9fRp9pYXlxlw6oBz%2BrHttlw40lFGw9fb6dT0KrKJNE7aq6HUotPDXKa%2BSvZqLtUqkRK8uB62b4iVwrpIV900ZGJoWdpFAoNyFScfb5odujXL7BXnJeYjVcJ3BSSVtg9A6%2BeYLVl1yWubL%2BUOH4zHiY5WpXIB0lfpNfJfpQl27GbdRCKbbgy2umewtWHU3%2BJmH9XU9o4OY85CTCL%2BcmJ9y75So2Qf4egKN%2BpP9VW5iUVg7hqc4z5lb4nJv%2BdsXbmRXPZqPT74%2Fw%2BtOiv9g9LTUJV75gWstwAmu7bCwgv%2FG3adohngqYhMvQhKV33e2cK1GgZXAcQJ3nAUi3CIn9iEn3%2BhSU4c6bEzpZnGpp9rZx5gauQdQe7saIjt%2FB8%2FSMgzkRLsdD4k5HazEv%2FyUgn05H1YxRZ0pPt0LIO91MKaWyMEGOqUBQzLVqTHimFJ3xrXZINBgmhGbs2pZ5e0oH6SY2CRXaHQ5bsRDwc%2FeMjurubRyy9yOXbOyLzzh3gpVQh5egCdjmhQUFnDhpg5wb51cybC8Aml5ktCWTn8CpixZIW919Z4Vtx%2BUQDPeO4UzdifR1uakC%2FFq1c6Ii%2Bzk8oMutF10J%2FNjalKCk6gYj8Rru5j%2F4hKgeVJlLN5G8fMvOjUBYMnn%2FSgE3LLN&X-Amz-Signature=3f37248d2b4ca0433444e28fc276a0f42ca84559c9051d3af9e6e2e2c8cd9ead&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB2CESIH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDMmo%2BFoWbCjWyH2SlsZJX87XwxdaFefp2Cf1bsYQbWxgIgEqC%2FLbisRgPQ1yI6CVs7Jpf8Pf61bzlNEzDC1o4VGo0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGPIuR8eWGd3fypK3yrcA61Rz7spjVX9R7Vc%2BS5hGVdZEnR65EchUGDd24AAD%2BVEKvnadbcoOH2PbAucG%2Ff08ODKCOQ%2FhEW8ipyvF7uwIplEXbnNcEFP%2Bj7Dr7pTOkw1dYEiwEl3aJnh9pVXX%2Bvrw87dsEyVSWjfyusCIduSQaf%2B14aw0950QFK3rZOjP2uOIDrXTDnfvUX2GI29FSZh4GhtZkdRF4ac5juXtYI3XKC9fRp9pYXlxlw6oBz%2BrHttlw40lFGw9fb6dT0KrKJNE7aq6HUotPDXKa%2BSvZqLtUqkRK8uB62b4iVwrpIV900ZGJoWdpFAoNyFScfb5odujXL7BXnJeYjVcJ3BSSVtg9A6%2BeYLVl1yWubL%2BUOH4zHiY5WpXIB0lfpNfJfpQl27GbdRCKbbgy2umewtWHU3%2BJmH9XU9o4OY85CTCL%2BcmJ9y75So2Qf4egKN%2BpP9VW5iUVg7hqc4z5lb4nJv%2BdsXbmRXPZqPT74%2Fw%2BtOiv9g9LTUJV75gWstwAmu7bCwgv%2FG3adohngqYhMvQhKV33e2cK1GgZXAcQJ3nAUi3CIn9iEn3%2BhSU4c6bEzpZnGpp9rZx5gauQdQe7saIjt%2FB8%2FSMgzkRLsdD4k5HazEv%2FyUgn05H1YxRZ0pPt0LIO91MKaWyMEGOqUBQzLVqTHimFJ3xrXZINBgmhGbs2pZ5e0oH6SY2CRXaHQ5bsRDwc%2FeMjurubRyy9yOXbOyLzzh3gpVQh5egCdjmhQUFnDhpg5wb51cybC8Aml5ktCWTn8CpixZIW919Z4Vtx%2BUQDPeO4UzdifR1uakC%2FFq1c6Ii%2Bzk8oMutF10J%2FNjalKCk6gYj8Rru5j%2F4hKgeVJlLN5G8fMvOjUBYMnn%2FSgE3LLN&X-Amz-Signature=95e4f7199cbc17a99aaca18be21aedb7a80ca389381f36a9e2a71b0b2509e77d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ2BSAOA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCN5BAibIJi3bcHm1q6jHBcjyne1SPZphP2D6JCd7W2ywIgD8T3%2Btsl2GoduZBjsQ9RRzTTurRBtVPtJkah%2BDOAl4Eq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHJh0I92elkbCxOfwircA4qKpPEK1ZgJoV1aCqCKmmxMLG%2FtENuZAFn4zr6SRVwj7hmp6retW77NnIQ7enuIcFsvV6MCVnR1XhDBr%2FWzJj8vgkASixAt7XZZo5LElmvXUMeQ3Z%2Fup9VdYflnSqciOrHvRQ7NzJzz1LWnuOdN3FVF6Mz3YCfK%2BPagIqZADMnaWPJIesp1Z95CrhMMxioF%2FNisFjyYIOqvgYwimOD%2FXIgR5RovATcvQFaPepb9xx3hXaGJyw8IB6mEzbYLZO51pH7%2BIxJZU2y%2BKS4pgXzmVFeZOWXct6nLMhhiyWFWqGhJqwCSMo1p6fI7eS%2Fkn4DwcKuyiXUsOXypeOhLj5b3inAS2oC3nrBdAMW5aWoG4olB%2F3UugcGXozq5J%2B4G8JQ8CmmVhAduAQUXfTGSI6xyuLBvKS1JHUp2b3lYFeTajhwKf8ELBtQItavfpWy%2FZcPtLSm%2BVQ0R9Bh8F8WqNfNliBTZr8AFW3RjEgtGn7iA2sWDl1SzyqeQmWoNjoLfar6y1xsQYQvq5nBXB9k1HU5dip6bt7J6SoMwOi%2FI0xOG9NUgh9Z358m%2BcvxlXz4vPLKqpSEYCxeKsfV4h2ogZkF5oeYKvP5j4YGDwyXOLYML3fSKRslnCqN8B6vS1eBdMP6VyMEGOqUB8mcEVNH48UMGwHb3TkXAptLxAGlXwpsvDg2bXHOssSHKyMPVwsbit22I%2FZ%2Fw2ErhQF4OG%2BhyxXMIbAu96y9Z5jBfD7bjlrKXDjW8RoPKpOBXHR6cMH9ILpTqKTCUwiIt6f4deVxkrz1XQvfriBw1TayVrhSAVkUaoaZyjjmDk4OVU8NU%2Blg7hOxr%2FdNZpw6qvvyEMFwCBHEygD%2F0oWM7PfyH3Is1&X-Amz-Signature=1299ad82d86a3d94e2b37a45271230a494c5add62c533c486ec339520704d153&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVJANMJR%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDw9Zx836iwJM1Vpr5CgBrj0YDr%2FlOJ%2BfkA6lvp%2BwU7NwIgWoRwy6pPOsE8Ftj%2F5EezWzz1WbvlP%2FqofNEL82aw7zgq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJOBfJQize8u%2BPI3%2BircA%2BK7i3C4c54qqwaaXLoq9jL7J0QVzqDB3mxSUVyIuUF2tID3kD5SEwaKmVyD%2BSSD9TzYoQWyka15siFQiQmkBTeAfDWaOBedeofJhYqVwjo6BIEPiXodFRye7YTEqHn8NWeYbg9E%2F%2BWqxlQzy1sd9Hb3eB3CVDquFwds0A7TITUq0rFz6C%2FfaWVZQstpPblRjg9%2Fi7uD2g%2B%2B8Ytfb%2F2GKfF2AnoPA8SjbbI6sObjye9wLxv%2FOzIZ%2Bg0ZTb%2F%2FqfcmK2Co2jL65paFiTzRefK8exwysN9ZpyhsRZNb5GK91X4ewWz3kWTE4uhBes8qUgR5P0%2B0EkOmA%2FDzZ1kCjKNDvXWUO3JsUnJLSrifpfoQxmaDXTN7%2BIa7NOWUSpMCPT1OyOXJ%2FW33djb4eZSXLmFU3kA8Rlh4yezI2vHk2Qr1krSkF%2B2IRJbeJjLCsYLZvRQI481JQVzlOCvgLsnoVzkfAIfVS5GlMErONyS1A7afKSiOWlQV%2FZcc4jEq7ZRlnwm9zGkyLcepPMyWoFd%2BWhSfBx3qP7dv1pj8aMhdEl4LcijSJ%2FyMYLAn33oxeM9PF2zAGC1k1%2BcxZic%2BoQyugXhqCGiLO46%2FOeOXGQ2ujdTiWFAOEjAGmTi8LR7vuJxoMLOWyMEGOqUBNfH%2Fro6jDmqglVnZo3TeYOTrDzWgZ%2BwBdAAD%2Fd4ZHR%2B8EGDPv%2BGI9ck4UJmC6Fv5ZePl%2Bn27ymZ1QJ%2FLu%2FO%2FTPaPROqEA7AuI7eyT3BJe8jVNRIG3V51vb1K6hV7xncXpUhlglMVL31hjNCK%2FX%2BK7BcjM6Hoos%2BLRfbXKCHDUMkvxzN7H5H%2BgAVIAKCnJMzhv3hU0x8U4YvudawROxaMTkej1kgA&X-Amz-Signature=74698903f83004e8144a010da8aed01a0a9fe185cc0c1e97794080f06ebffc85&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB2CESIH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDMmo%2BFoWbCjWyH2SlsZJX87XwxdaFefp2Cf1bsYQbWxgIgEqC%2FLbisRgPQ1yI6CVs7Jpf8Pf61bzlNEzDC1o4VGo0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGPIuR8eWGd3fypK3yrcA61Rz7spjVX9R7Vc%2BS5hGVdZEnR65EchUGDd24AAD%2BVEKvnadbcoOH2PbAucG%2Ff08ODKCOQ%2FhEW8ipyvF7uwIplEXbnNcEFP%2Bj7Dr7pTOkw1dYEiwEl3aJnh9pVXX%2Bvrw87dsEyVSWjfyusCIduSQaf%2B14aw0950QFK3rZOjP2uOIDrXTDnfvUX2GI29FSZh4GhtZkdRF4ac5juXtYI3XKC9fRp9pYXlxlw6oBz%2BrHttlw40lFGw9fb6dT0KrKJNE7aq6HUotPDXKa%2BSvZqLtUqkRK8uB62b4iVwrpIV900ZGJoWdpFAoNyFScfb5odujXL7BXnJeYjVcJ3BSSVtg9A6%2BeYLVl1yWubL%2BUOH4zHiY5WpXIB0lfpNfJfpQl27GbdRCKbbgy2umewtWHU3%2BJmH9XU9o4OY85CTCL%2BcmJ9y75So2Qf4egKN%2BpP9VW5iUVg7hqc4z5lb4nJv%2BdsXbmRXPZqPT74%2Fw%2BtOiv9g9LTUJV75gWstwAmu7bCwgv%2FG3adohngqYhMvQhKV33e2cK1GgZXAcQJ3nAUi3CIn9iEn3%2BhSU4c6bEzpZnGpp9rZx5gauQdQe7saIjt%2FB8%2FSMgzkRLsdD4k5HazEv%2FyUgn05H1YxRZ0pPt0LIO91MKaWyMEGOqUBQzLVqTHimFJ3xrXZINBgmhGbs2pZ5e0oH6SY2CRXaHQ5bsRDwc%2FeMjurubRyy9yOXbOyLzzh3gpVQh5egCdjmhQUFnDhpg5wb51cybC8Aml5ktCWTn8CpixZIW919Z4Vtx%2BUQDPeO4UzdifR1uakC%2FFq1c6Ii%2Bzk8oMutF10J%2FNjalKCk6gYj8Rru5j%2F4hKgeVJlLN5G8fMvOjUBYMnn%2FSgE3LLN&X-Amz-Signature=38c74ec8acd0b2e58bb6433e652b5f017254e1875d9e742afcf9732224c4a71a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
