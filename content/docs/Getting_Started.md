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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2ON3FNP%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBxTD07lS%2FvCh0MhVz8FGj26SuHbGXQc1hcPjNfpMSsAIgBYdDv2J81B2Uh%2FWpBPusgreCxDbDdd2j85HJUTlH3N8q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDF7EfYEuvSNEQ4X0CircAxhIEu2lt9YfOhIQqBFtQiFNkV9RKHW%2Fvnb%2Bx%2B3imHLETO8f7tldrRLlCmMsGmY1aBoT1E5CrKK%2BXKbjrzTHkY0nsRl0vp%2FZqozWY95lYDv9QZiaXzFrlYCKcQVxAxzdwAxMgzKFofyQqOqx54CiO41H2txOJH5LwHmOWvZYrj%2FlWaDVcXNEyWzCLVJUlU73bs8WEbUroPBgqZTbf7iPl1VW28%2BkKW1MG6rSilW0OeAXQWIPkYCPv6Mmkq%2FXW9kU9OXteHiAhD0roU9dUikUbOMKjtq%2F900kC%2BRcYXuUubVRNyZQu1eT7r5mn9nLwkDIITWII3DZRu9PeDdUEPPnWMkhdluOTzwixW71HHkQ0%2F6eWEAKcfkIv5mjpskvOhPSUItWbhcepZsTHO06aoQPkxbd48J10WVWv%2F4jRO4ie6cnf5dDSJ41Xxmln2YWVHCa552gBS%2FXqkhPKW%2BmxQYgicLbW%2FnNcGXZfmrxYiXF16ZCU1nJTL6d%2FWFCBedjpIbMY%2BwOZGWGGVCzDSngbDM1%2FyXUA64QOl6ajfIvpsgvQMz%2FdJmGT83x87%2By802p%2FA9kfAMqUxEMgaqlqSfPtfeKn9OZzaHnkRg%2FWU21Q%2BpFVn%2FInUMZ%2B6XdkBJ2mEYdMIOX2MEGOqUBliMuHFlQHHctdPq1zJ%2FYsSbLFOFhB%2FQrgJSYjnV0WvhqhtNvjzmbUiIB576mfasYRfs%2FQWjc40Vj5ciXYX8pk5x%2F56fEV3shvi2XWSY9MXBre5KuTlttCxXPX70GFVD%2FhABQ7JTq27r7FVtnlfoC4LLDf3oq9tI47EvugVJzBRhOsjhtuwPB9VZDwmSsuQ4yqoK0J9R2EGqd49ldoiHeCGJ68xOW&X-Amz-Signature=3f923f7cef5f87f3e9877c80f8562c00dd8ffc9890eee75a4e34f36ecef90317&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2ON3FNP%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBxTD07lS%2FvCh0MhVz8FGj26SuHbGXQc1hcPjNfpMSsAIgBYdDv2J81B2Uh%2FWpBPusgreCxDbDdd2j85HJUTlH3N8q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDF7EfYEuvSNEQ4X0CircAxhIEu2lt9YfOhIQqBFtQiFNkV9RKHW%2Fvnb%2Bx%2B3imHLETO8f7tldrRLlCmMsGmY1aBoT1E5CrKK%2BXKbjrzTHkY0nsRl0vp%2FZqozWY95lYDv9QZiaXzFrlYCKcQVxAxzdwAxMgzKFofyQqOqx54CiO41H2txOJH5LwHmOWvZYrj%2FlWaDVcXNEyWzCLVJUlU73bs8WEbUroPBgqZTbf7iPl1VW28%2BkKW1MG6rSilW0OeAXQWIPkYCPv6Mmkq%2FXW9kU9OXteHiAhD0roU9dUikUbOMKjtq%2F900kC%2BRcYXuUubVRNyZQu1eT7r5mn9nLwkDIITWII3DZRu9PeDdUEPPnWMkhdluOTzwixW71HHkQ0%2F6eWEAKcfkIv5mjpskvOhPSUItWbhcepZsTHO06aoQPkxbd48J10WVWv%2F4jRO4ie6cnf5dDSJ41Xxmln2YWVHCa552gBS%2FXqkhPKW%2BmxQYgicLbW%2FnNcGXZfmrxYiXF16ZCU1nJTL6d%2FWFCBedjpIbMY%2BwOZGWGGVCzDSngbDM1%2FyXUA64QOl6ajfIvpsgvQMz%2FdJmGT83x87%2By802p%2FA9kfAMqUxEMgaqlqSfPtfeKn9OZzaHnkRg%2FWU21Q%2BpFVn%2FInUMZ%2B6XdkBJ2mEYdMIOX2MEGOqUBliMuHFlQHHctdPq1zJ%2FYsSbLFOFhB%2FQrgJSYjnV0WvhqhtNvjzmbUiIB576mfasYRfs%2FQWjc40Vj5ciXYX8pk5x%2F56fEV3shvi2XWSY9MXBre5KuTlttCxXPX70GFVD%2FhABQ7JTq27r7FVtnlfoC4LLDf3oq9tI47EvugVJzBRhOsjhtuwPB9VZDwmSsuQ4yqoK0J9R2EGqd49ldoiHeCGJ68xOW&X-Amz-Signature=c52deb02070444a4fbfb7728d14a727d098e5e8601c52788ddf70cef22224a79&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2ON3FNP%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBxTD07lS%2FvCh0MhVz8FGj26SuHbGXQc1hcPjNfpMSsAIgBYdDv2J81B2Uh%2FWpBPusgreCxDbDdd2j85HJUTlH3N8q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDF7EfYEuvSNEQ4X0CircAxhIEu2lt9YfOhIQqBFtQiFNkV9RKHW%2Fvnb%2Bx%2B3imHLETO8f7tldrRLlCmMsGmY1aBoT1E5CrKK%2BXKbjrzTHkY0nsRl0vp%2FZqozWY95lYDv9QZiaXzFrlYCKcQVxAxzdwAxMgzKFofyQqOqx54CiO41H2txOJH5LwHmOWvZYrj%2FlWaDVcXNEyWzCLVJUlU73bs8WEbUroPBgqZTbf7iPl1VW28%2BkKW1MG6rSilW0OeAXQWIPkYCPv6Mmkq%2FXW9kU9OXteHiAhD0roU9dUikUbOMKjtq%2F900kC%2BRcYXuUubVRNyZQu1eT7r5mn9nLwkDIITWII3DZRu9PeDdUEPPnWMkhdluOTzwixW71HHkQ0%2F6eWEAKcfkIv5mjpskvOhPSUItWbhcepZsTHO06aoQPkxbd48J10WVWv%2F4jRO4ie6cnf5dDSJ41Xxmln2YWVHCa552gBS%2FXqkhPKW%2BmxQYgicLbW%2FnNcGXZfmrxYiXF16ZCU1nJTL6d%2FWFCBedjpIbMY%2BwOZGWGGVCzDSngbDM1%2FyXUA64QOl6ajfIvpsgvQMz%2FdJmGT83x87%2By802p%2FA9kfAMqUxEMgaqlqSfPtfeKn9OZzaHnkRg%2FWU21Q%2BpFVn%2FInUMZ%2B6XdkBJ2mEYdMIOX2MEGOqUBliMuHFlQHHctdPq1zJ%2FYsSbLFOFhB%2FQrgJSYjnV0WvhqhtNvjzmbUiIB576mfasYRfs%2FQWjc40Vj5ciXYX8pk5x%2F56fEV3shvi2XWSY9MXBre5KuTlttCxXPX70GFVD%2FhABQ7JTq27r7FVtnlfoC4LLDf3oq9tI47EvugVJzBRhOsjhtuwPB9VZDwmSsuQ4yqoK0J9R2EGqd49ldoiHeCGJ68xOW&X-Amz-Signature=8ff6afd1b83b13dc4980ea5d58ef442bf42d3fe6d310274fb5c15ee1513ab627&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEYIVNRP%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIKTzPdUeni%2BKS4aKPv6igMQmEwwYbqJ4Bqvxdw0FqGAiEAheq0ywmjYAHEV3sPuAkt2kPeuH7f3sGovAoIHAfYOEQq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDDYawLZcYy%2ByksIWEircAyF%2B%2BIfzcxSJsZFLDZycKHDGSi6ZYeXocZuT0YwSczNHE6m1%2BW5KCeE6hVjQrvFyxhMOKYugiuK9wULDFD1DVHNNZUxVyFUS0vejxwWYgbz%2B1D29iHfjNdRptNuNZ5GciXe%2FHlkDmCT1YfiEBLkFHGaIW2xbE8ASvO36SqY%2FGJiTxnli5snL9L3EPeheZZ0xQMxfIMLdvcmHi3m7JU7NFMMhkztwB4RAvabXIlVZPVrTQNsXZ%2B6UQawF%2FVAquUXuntyrykD90fD04bXjUcL40oEYcYFjd9e2xY4k6nLXy1HHxNnFKmkFAWKLsnGnQtJmXryfzxyDvPVfyXBTQdPZJdxGVMYTrmRAqqXgaEpLzNuovXHIh0BJbFxziO1SOw4wkIt2TfMK%2FeCDQhLk3q%2FnqpS9DLh0s9eldmu57vZIiJitbMwjHI4kisK2Musn2PfcR%2BITcm8lfGIdiDJo%2BFo2yhcqcHKFoOvLdI%2Bo6pT6oGFzcXoIBB%2Bb3NTCw%2FKx6J8A39UJQp57uyv03iiD7PmORzhY61feRhzRjOCUcpSAgSdaXn1K2k%2FJ1KNoo9PSJ8tO5248vt%2B3GeQI4x%2BFMPoVuuPkoEmfDAkYoE0h%2FGExiWgK%2FPHzFkX9gcSxqth5MI%2BW2MEGOqUBbnbM%2B4WwNrzvPM4v9BuFmDkH%2Fsq9UEYNIHC6nBn4qRieGr3gQwA5kqYx3xpmyjqvSFj04QkVmGfmYuhZczWbLpvCCwNtCiOQ%2FvtPWZxMyJwdFugkmHKoe30ndYznzL3D9WNi7qIwtCH8ZxDAvGUJZoz1Sfg5s79NEi1oZyCtwq%2FCzAYrHocY%2F20tw4zqj8VSIWNlZd%2BWFGpnwnH%2FWv5ksQk%2FTBOH&X-Amz-Signature=427a2c4850fdd46f66f5c588b235def685c05cc74d892b17bb8dd47da902fe1d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIF2JX5V%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFK%2FFbsiOtFD77H%2FvqhyXQ%2BVOyEvgNOJdgTc1cWAi1lAIgJ1pC0qq2lkrT1QPtiy8QexUdmlIM8oP7ohi9O6hoOVAq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDJbU96nOo0H63PWNJCrcAyn1gkYyWbM2%2FjECK%2BZyBABKCkNmMYygq2dn9RmypqvyRXhFr9rvRvi3eDm88Xdxm2xoInmikICO24YazFDwG2BseatjFMmT3oaucOr778sSqJ8F2ZIsRE52b1A9pj%2BgwErmHnZItsQ7Iw08iZGrGzogd9KRrnQVSqVAlBWP1iXe3ifnKvsQD40gMWTzEjp73jU1gfDPLupYvpuLw0aAOpq0iuynhghd6XzCFBgfFVviMsYXaPuH0FWx5kWt4kamlv9wpMpwMdKLcZGTWPi3ZrEJZCOc7VpWQdA0ugUuElAeXLhSSEPrOb4QFIDtzfR8LMKPYtI7vtBN2BFw%2BcmwZTNIE3AWFN%2BGgx7B2nbQ%2FdfZjRBPTz2CZM%2B0%2FZ69aGRTCDla65PH0cyFW5aUxfzIWfXvDVbwcCe0rwhC9YRq48L%2Fq6rYY4eWKAS9DKbhCbRcJnPPLhDC7SPr9KEMw1g1Qd9fYfLv9W22qVNEzgrMp1RUWhCLKodfI0y%2F0BUWdEwKLb9lLZ01KFgGgNq7y6glh728QquF63vYEx7mrKcRwTAh%2BmdNy8pvO%2FnRmmFPRxGyExb%2FgKNCo2vMzzdu7BY4JNRPYYZ60nC%2BmWBEmSWdutlFyrHb84JeYP8eLgwDMNKW2MEGOqUBAUtqfcOuwcg5Tp0KgYd7JO1oNY3JAKOTuc3x7Ld%2FN%2FJMeG0zSr8%2FAcllXgTNf0LVya6rcqYsTO35dP0UmK5jl7L%2Fk9b7kYUQsi7ksDFLmEFWUOTLFGSlF9sF8lQZ5J0dB0qH%2FHXiPdqMn8n%2BifVZGD0jTyP0b3trm9BQO%2FJwEQjy%2Fhot7QcB1gGncFbF0iLDbVDfJiDO%2FQie9ryvchSciK7vyoQy&X-Amz-Signature=21a536a172249d01e084e6ee92c8b1f0c646a6c9bc8b23e391b5e0e5aaad4bee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2ON3FNP%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBxTD07lS%2FvCh0MhVz8FGj26SuHbGXQc1hcPjNfpMSsAIgBYdDv2J81B2Uh%2FWpBPusgreCxDbDdd2j85HJUTlH3N8q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDF7EfYEuvSNEQ4X0CircAxhIEu2lt9YfOhIQqBFtQiFNkV9RKHW%2Fvnb%2Bx%2B3imHLETO8f7tldrRLlCmMsGmY1aBoT1E5CrKK%2BXKbjrzTHkY0nsRl0vp%2FZqozWY95lYDv9QZiaXzFrlYCKcQVxAxzdwAxMgzKFofyQqOqx54CiO41H2txOJH5LwHmOWvZYrj%2FlWaDVcXNEyWzCLVJUlU73bs8WEbUroPBgqZTbf7iPl1VW28%2BkKW1MG6rSilW0OeAXQWIPkYCPv6Mmkq%2FXW9kU9OXteHiAhD0roU9dUikUbOMKjtq%2F900kC%2BRcYXuUubVRNyZQu1eT7r5mn9nLwkDIITWII3DZRu9PeDdUEPPnWMkhdluOTzwixW71HHkQ0%2F6eWEAKcfkIv5mjpskvOhPSUItWbhcepZsTHO06aoQPkxbd48J10WVWv%2F4jRO4ie6cnf5dDSJ41Xxmln2YWVHCa552gBS%2FXqkhPKW%2BmxQYgicLbW%2FnNcGXZfmrxYiXF16ZCU1nJTL6d%2FWFCBedjpIbMY%2BwOZGWGGVCzDSngbDM1%2FyXUA64QOl6ajfIvpsgvQMz%2FdJmGT83x87%2By802p%2FA9kfAMqUxEMgaqlqSfPtfeKn9OZzaHnkRg%2FWU21Q%2BpFVn%2FInUMZ%2B6XdkBJ2mEYdMIOX2MEGOqUBliMuHFlQHHctdPq1zJ%2FYsSbLFOFhB%2FQrgJSYjnV0WvhqhtNvjzmbUiIB576mfasYRfs%2FQWjc40Vj5ciXYX8pk5x%2F56fEV3shvi2XWSY9MXBre5KuTlttCxXPX70GFVD%2FhABQ7JTq27r7FVtnlfoC4LLDf3oq9tI47EvugVJzBRhOsjhtuwPB9VZDwmSsuQ4yqoK0J9R2EGqd49ldoiHeCGJ68xOW&X-Amz-Signature=79c86e564b03feec8ad1420e3fd81ed897fc5f3a0c8833835f7384ce8623a71e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
