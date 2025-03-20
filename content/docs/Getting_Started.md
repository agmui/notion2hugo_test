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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VV5SPSH%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIFQZcM9xG4K7IzBbXgXHguy8dUSSXnAqXqUPWXyGI%2BhBAiBRqF1hqI4RRT7laYWVeDQMlV0ZoXa41ZcdKgDEgtsQ3SqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJm7LycoCwVC0ObehKtwDaNl6mVUN5KuEtw9vD5tPNGB7mdY%2F8GhAzB3q09h308lXGDfyD8DdGIzva9OfsDx0FzliR1igugWljd4eQQ2UVIL5Cn6jWknqGuv3DZrtHWtdeogrONjYbTU84WNX6dtFDFZ6gTiRbLUzf8UPvIox74kcAGGf8x5rzxg3auojoSNulIDPUnywATR1f%2FNSRzMJ1oYI2IF9u9mW68nn9AXkIf89weZ0nFbQteeCzBj8kA%2FYthdMpHZIpp%2FmwkSn3DoVI2P2uVVlgerCSYO6Sp1bXIgYA6QhFQ0OstArozrsGUhauqoleit9kgOarjuUQAke4kuzlUIeUO2h1pXFSdOyRXZBteKhMRM5Fj%2Fto%2BURmXqHapdCJoJ5k5VSima5yQCRYtxw2uy4xzbs%2B1xFs%2FCuYGhz4t%2B3KXE97D9ZHYUm8miaelyFTYib4SEnS0lJCgNgtOWBI7oIVIc%2BW1uibUehr8BMZij%2FP%2BTimNxWa8DROKotI8HHleoLQiOkk9owoEsSc%2BmiXn1RPYhCDWqOhe3%2BoN5fFDP89dcC3Fx64Lw6IvziL%2FVG0ZkshN6EoojKL75R8TRMHOTyHe4SwAbUCFHuPN3Rl%2BlxgmeK0qnIPDs34NFhaJvg96%2F29JtupU4w%2BKPxvgY6pgEnA0N5FCapw8XnQy%2BtaOd7aWgpDDKNBqyz0LN9s4z2HRK7hc%2BnIGluD6znUXbxaZuP3kHvYc%2F9WJihgLHSVf6I%2BtUM17VP2fw2QgANgGEG2sgZmpQnTHrpySPt7%2F8roEEGhmpBJf0nQ6wNm4SxNkXPa%2Fw18%2Bf9jLRoWE4YBtH6SEYS8hl%2BcTS7PO0YxI7mw%2FDDR8sjIevSJ5MyZdb5R2pUeq9r0Eug&X-Amz-Signature=1ede28f7807cfff64f08458e81de1128143f716c1bc115b791e2db2ea208faa2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VV5SPSH%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIFQZcM9xG4K7IzBbXgXHguy8dUSSXnAqXqUPWXyGI%2BhBAiBRqF1hqI4RRT7laYWVeDQMlV0ZoXa41ZcdKgDEgtsQ3SqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJm7LycoCwVC0ObehKtwDaNl6mVUN5KuEtw9vD5tPNGB7mdY%2F8GhAzB3q09h308lXGDfyD8DdGIzva9OfsDx0FzliR1igugWljd4eQQ2UVIL5Cn6jWknqGuv3DZrtHWtdeogrONjYbTU84WNX6dtFDFZ6gTiRbLUzf8UPvIox74kcAGGf8x5rzxg3auojoSNulIDPUnywATR1f%2FNSRzMJ1oYI2IF9u9mW68nn9AXkIf89weZ0nFbQteeCzBj8kA%2FYthdMpHZIpp%2FmwkSn3DoVI2P2uVVlgerCSYO6Sp1bXIgYA6QhFQ0OstArozrsGUhauqoleit9kgOarjuUQAke4kuzlUIeUO2h1pXFSdOyRXZBteKhMRM5Fj%2Fto%2BURmXqHapdCJoJ5k5VSima5yQCRYtxw2uy4xzbs%2B1xFs%2FCuYGhz4t%2B3KXE97D9ZHYUm8miaelyFTYib4SEnS0lJCgNgtOWBI7oIVIc%2BW1uibUehr8BMZij%2FP%2BTimNxWa8DROKotI8HHleoLQiOkk9owoEsSc%2BmiXn1RPYhCDWqOhe3%2BoN5fFDP89dcC3Fx64Lw6IvziL%2FVG0ZkshN6EoojKL75R8TRMHOTyHe4SwAbUCFHuPN3Rl%2BlxgmeK0qnIPDs34NFhaJvg96%2F29JtupU4w%2BKPxvgY6pgEnA0N5FCapw8XnQy%2BtaOd7aWgpDDKNBqyz0LN9s4z2HRK7hc%2BnIGluD6znUXbxaZuP3kHvYc%2F9WJihgLHSVf6I%2BtUM17VP2fw2QgANgGEG2sgZmpQnTHrpySPt7%2F8roEEGhmpBJf0nQ6wNm4SxNkXPa%2Fw18%2Bf9jLRoWE4YBtH6SEYS8hl%2BcTS7PO0YxI7mw%2FDDR8sjIevSJ5MyZdb5R2pUeq9r0Eug&X-Amz-Signature=2b4eca37b4a99a5b0f54cfa3f2dd32331f6d7dd0ad159741de42b0503dfed626&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JEYMUTK%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCFtIc%2FgHuKupmvkkJ%2BSoQdGDVFRVstPfLLZTUqL8ILoQIgFSW%2FpxlfyxWF5WxOkfF0f4M22zmgWnpfub0pJ%2BHT1UQqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FgFI8O7NZV0NX7OircAzJmWaYy%2BiK3oQmFnP70dAVrszRUleYkC%2FRvpHzoyzu9W01nVQytrN%2FkR7ZraCvmvqkC8GyJEyPkRPq7YFn9PYE%2FZLnvtaZRTFQ%2BY722%2Fsae7NxTsv2wJvn3Rfwyz9rD4vlJEHjl%2F0U%2BpY%2B99Sb%2BTJLcJGAoYBacxN7B3F0bBoaU2u5GSrge3YIqY5Ue18GDJXo5fEh%2FHVeL40jkZ667GX3jJ9GX2osykvazYmk8E19VyZEBrGTSy%2BPCD29cAIDkOhOagpHytNB3C3RAqxASoKM8FsuPtwn288EftRThYZFK8xaz7rwpBirz5A8kOxzQseiTKMouIeCES%2FlFpBkDUR3NZYtdwRtkK%2FIOizJsPu6HVcWPFE5kmi5F7qI0gYf83569PvKftPY1kQFYsg1hKVmn%2B05fZuNx1e42j5ROHMTzjIeHNISi0vxD0TSQEY%2Fu48pPubqgxykE0E6Z694TXH0OznifQiDmW0IvdDV%2FXnlwIz4VhGfgtv2grUsSwnea1q%2FycWOIJdXbKaEmBlkq0KvtWNmPQhfXiRZLBAkh8tmlf7Rm6RXrHeMAJfRm8z8yW%2FNDYrdXU%2BmOyjUTtiRTiJ8%2FLsHxIRcr0533GEfhnaAFv4r59NpE21r32uTwMP%2Bk8b4GOqUBAImfsIvtj%2FZqTN8KO5pIsJScd%2Fa65mWj89eNyzYaM2pF6Lpdtu9eM2WzV2b4701h%2F7bzuLMBrZEVMTENPUWSE5FYZ4SLWqolzWORB8OdpciuQsWnM9IPapHL9stnCe4PIx%2BaHgckeYUaD6EqnRtsdPuULuZ47mL58EHF7Vz%2BA%2FfjLEAQpVyopr9zbZiaVCSl0nxFRuQRe0kk9Bz%2B4Bx9BLlTa044&X-Amz-Signature=bdc9ce19ca9a2c39e077d957ae626d5a80bc9b44878fbae364d1d2694a9fb4e0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UL5L4E5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCiKzdoIdP%2BZT%2FijKkG6Wf8cKqCpySzs14%2FFkmhGVfU%2BwIgARiN4NQQ2ddg3wQebCsrlNgY6QhBJE5om%2FvNGLvUJqoqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbS0BDI381B6nrDKyrcA%2BuBZ9r1XbPVPv15YfH01YgtJzgpHjj5yCwrfx5TnXbert19ud8ZRxgF18JzuJG%2BAn0gxoK8Ly%2BFDrcqdU9gh5pUGJz3wmLVkNPQUDUanm4eGJ%2FqywzB7Y6KtFamXitsI%2BZ8K%2BlE4CuDlWBmFJVwomujko2p9GUGQgRkXFa0SZnyrEJmixt7fiiHYfOVmmBTkFh6vdI6m64yNkY17a%2BjpKvGncFskPFM8UTfezzu0lhNcFNzmFPwoylyd3u1zTRUYFcA9lH1t%2F3eWf52jTL7%2FtJLAIGA0fn8H7EqVTFqtwTpLoBlLZOmqKhDdhw5J8OJDUibF5ARPaMpkeYI0lRLLAdzvdJ9n%2BiKObgJlrhdfsD9xZIKWlufeiAIs75IPwIgPKqK4pDMuYYdt%2BHE1JAS8%2BIKPHG9Lhh1A1L8J%2B2BFCTPSig3a8A84um7wemdMtvikCvlduBiAE5V68FIm1KgMT1MzFo2Rsrz7%2BuaBeV7QtuReIbgdJrE%2FxDsiFtmHTxR3tSC1fi%2FvscZycYsMHQiQ4DZmfN4COAvaVdNjyYjsT06V4C6qSBGG84h0%2FghHwE8Dnq183Izg7raviyABO7Hg%2BFltKAvO48Na%2BKTsM14mjByUuBKt9vOkGQidk9rMJmk8b4GOqUBj05xPUGHwcIudpgyeMCg4d8OH20JlevqbJoyXe7i%2BhPj2H7Ziq1Ts18EK%2FaBwZucvbpLvFzImZDxUHodAGZEn4slcx5uEn2byZAkIOo19mS1i9vz5S17W4CDAsMiF5c84GKpDKnGfmS%2BkEzR3xyRakg9jl9WDu%2BfbwS%2Fc7e8OA0Jvek4EV3i9opSav3LMzql6traGVWuH1VJ5RJi5f6LjaWpPiP7&X-Amz-Signature=4780339b584c4e15a86a1cbc3f9c29d8c8585102d7870cec84e39a00830340ac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VV5SPSH%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIFQZcM9xG4K7IzBbXgXHguy8dUSSXnAqXqUPWXyGI%2BhBAiBRqF1hqI4RRT7laYWVeDQMlV0ZoXa41ZcdKgDEgtsQ3SqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJm7LycoCwVC0ObehKtwDaNl6mVUN5KuEtw9vD5tPNGB7mdY%2F8GhAzB3q09h308lXGDfyD8DdGIzva9OfsDx0FzliR1igugWljd4eQQ2UVIL5Cn6jWknqGuv3DZrtHWtdeogrONjYbTU84WNX6dtFDFZ6gTiRbLUzf8UPvIox74kcAGGf8x5rzxg3auojoSNulIDPUnywATR1f%2FNSRzMJ1oYI2IF9u9mW68nn9AXkIf89weZ0nFbQteeCzBj8kA%2FYthdMpHZIpp%2FmwkSn3DoVI2P2uVVlgerCSYO6Sp1bXIgYA6QhFQ0OstArozrsGUhauqoleit9kgOarjuUQAke4kuzlUIeUO2h1pXFSdOyRXZBteKhMRM5Fj%2Fto%2BURmXqHapdCJoJ5k5VSima5yQCRYtxw2uy4xzbs%2B1xFs%2FCuYGhz4t%2B3KXE97D9ZHYUm8miaelyFTYib4SEnS0lJCgNgtOWBI7oIVIc%2BW1uibUehr8BMZij%2FP%2BTimNxWa8DROKotI8HHleoLQiOkk9owoEsSc%2BmiXn1RPYhCDWqOhe3%2BoN5fFDP89dcC3Fx64Lw6IvziL%2FVG0ZkshN6EoojKL75R8TRMHOTyHe4SwAbUCFHuPN3Rl%2BlxgmeK0qnIPDs34NFhaJvg96%2F29JtupU4w%2BKPxvgY6pgEnA0N5FCapw8XnQy%2BtaOd7aWgpDDKNBqyz0LN9s4z2HRK7hc%2BnIGluD6znUXbxaZuP3kHvYc%2F9WJihgLHSVf6I%2BtUM17VP2fw2QgANgGEG2sgZmpQnTHrpySPt7%2F8roEEGhmpBJf0nQ6wNm4SxNkXPa%2Fw18%2Bf9jLRoWE4YBtH6SEYS8hl%2BcTS7PO0YxI7mw%2FDDR8sjIevSJ5MyZdb5R2pUeq9r0Eug&X-Amz-Signature=e7b05b67d0ebd3cbe7584bfcfc9d5186f0f5684b689d289814ee375ed519e697&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
