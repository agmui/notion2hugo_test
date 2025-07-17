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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636FOK7UU%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC6zG4edcdv4Ishp%2B8Kfi1RE8sf78AgJlxT7iswGpuCCAIgOb6gQ%2B4OhpSlAlt9YYdWGWAM15JaqK%2BZmxp8fNecAUcq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDMByNVFBPJAheKPEzSrcAzdIbniXnsCSfPUiIfNrWn2IQtcdOsFFdwoMGK5OE%2Fe%2FON6h%2FnAEnDHtJ%2BRABhNfXUmxEVGF7cBJvL7CZHHOY2fKjCCJnIV%2B7WQ3mrd4zfEZOnn67mLL0aMsB0E5SeAHtrq8WZUfQKSN%2B4gRf%2BviU1gvukkKxxTI6MHJLEzqt7UkQ0dYd0crUN4wqcX2JELpRrRw5YsEmHRwOg8HFctkT2SJR9il7xpLkPZSJmQIV9WS2Yi3aWclV%2Bed20v1odsGqjB5zuB1dar6lgletX2WiAc6V7JScQeZ0imafEXkJLV0ofrhepGEdigfRtTeRb91M3VIlugsyrQIpO8A%2F5xvWNyzk%2FxT0FLy9vZOq8EJyik2saRTJKjpy9giaFbYHBqIpQQKQX0k14FHW8EB%2BTSWgNg%2Fm7O2jO6p9axkb%2BbDDnt7zz2Q8UIfnBRiDXkGreg9lp4d%2FNWgT0GWvnaWEIU4A7ZRYZEz81%2FW2WY%2F%2FYMMSt1rgrn5rEK6jBGAbmnO3091DjdZpidAtkutGTc3A8BotvkAR76idtMTej362BabBYBq4YYBhMOKXGk3TxEahBoeu%2FCMhX%2Bn8pf7%2B%2BiTqanfKk9hmtB9p6jKHtw5S2aZXO5EPDT0QLS8FhZrOWytMMHi48MGOqUB1ybAN5YYfGGcGA%2FJHSfjuPlj8WKc3%2F%2BxabMRGSsryufCwHYYVl82A12lMEucT1BZPOmK8xemUugGaU3CEM2f5DNfHDxigJQUI81BUMQLMvSRxJ0oBE1S3LIpbPlKfg7E7OTYA0EuimULU%2Fjmfa5l8JNsKVZFtSF1LJl3%2B0NCUYKmmMFw2vRz89ijkWsTH3voFY3AaCdU9d9iaSn%2B94WYqU8YwGSH&X-Amz-Signature=a700c1c3a6e827b23e3324796749d9b8be51de2c7ffcd3902b7658736fcccf63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636FOK7UU%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC6zG4edcdv4Ishp%2B8Kfi1RE8sf78AgJlxT7iswGpuCCAIgOb6gQ%2B4OhpSlAlt9YYdWGWAM15JaqK%2BZmxp8fNecAUcq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDMByNVFBPJAheKPEzSrcAzdIbniXnsCSfPUiIfNrWn2IQtcdOsFFdwoMGK5OE%2Fe%2FON6h%2FnAEnDHtJ%2BRABhNfXUmxEVGF7cBJvL7CZHHOY2fKjCCJnIV%2B7WQ3mrd4zfEZOnn67mLL0aMsB0E5SeAHtrq8WZUfQKSN%2B4gRf%2BviU1gvukkKxxTI6MHJLEzqt7UkQ0dYd0crUN4wqcX2JELpRrRw5YsEmHRwOg8HFctkT2SJR9il7xpLkPZSJmQIV9WS2Yi3aWclV%2Bed20v1odsGqjB5zuB1dar6lgletX2WiAc6V7JScQeZ0imafEXkJLV0ofrhepGEdigfRtTeRb91M3VIlugsyrQIpO8A%2F5xvWNyzk%2FxT0FLy9vZOq8EJyik2saRTJKjpy9giaFbYHBqIpQQKQX0k14FHW8EB%2BTSWgNg%2Fm7O2jO6p9axkb%2BbDDnt7zz2Q8UIfnBRiDXkGreg9lp4d%2FNWgT0GWvnaWEIU4A7ZRYZEz81%2FW2WY%2F%2FYMMSt1rgrn5rEK6jBGAbmnO3091DjdZpidAtkutGTc3A8BotvkAR76idtMTej362BabBYBq4YYBhMOKXGk3TxEahBoeu%2FCMhX%2Bn8pf7%2B%2BiTqanfKk9hmtB9p6jKHtw5S2aZXO5EPDT0QLS8FhZrOWytMMHi48MGOqUB1ybAN5YYfGGcGA%2FJHSfjuPlj8WKc3%2F%2BxabMRGSsryufCwHYYVl82A12lMEucT1BZPOmK8xemUugGaU3CEM2f5DNfHDxigJQUI81BUMQLMvSRxJ0oBE1S3LIpbPlKfg7E7OTYA0EuimULU%2Fjmfa5l8JNsKVZFtSF1LJl3%2B0NCUYKmmMFw2vRz89ijkWsTH3voFY3AaCdU9d9iaSn%2B94WYqU8YwGSH&X-Amz-Signature=838b93757a22e45501a247f7df5408ca73f6fce63647ba1d416ee8e24b12aa16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636FOK7UU%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC6zG4edcdv4Ishp%2B8Kfi1RE8sf78AgJlxT7iswGpuCCAIgOb6gQ%2B4OhpSlAlt9YYdWGWAM15JaqK%2BZmxp8fNecAUcq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDMByNVFBPJAheKPEzSrcAzdIbniXnsCSfPUiIfNrWn2IQtcdOsFFdwoMGK5OE%2Fe%2FON6h%2FnAEnDHtJ%2BRABhNfXUmxEVGF7cBJvL7CZHHOY2fKjCCJnIV%2B7WQ3mrd4zfEZOnn67mLL0aMsB0E5SeAHtrq8WZUfQKSN%2B4gRf%2BviU1gvukkKxxTI6MHJLEzqt7UkQ0dYd0crUN4wqcX2JELpRrRw5YsEmHRwOg8HFctkT2SJR9il7xpLkPZSJmQIV9WS2Yi3aWclV%2Bed20v1odsGqjB5zuB1dar6lgletX2WiAc6V7JScQeZ0imafEXkJLV0ofrhepGEdigfRtTeRb91M3VIlugsyrQIpO8A%2F5xvWNyzk%2FxT0FLy9vZOq8EJyik2saRTJKjpy9giaFbYHBqIpQQKQX0k14FHW8EB%2BTSWgNg%2Fm7O2jO6p9axkb%2BbDDnt7zz2Q8UIfnBRiDXkGreg9lp4d%2FNWgT0GWvnaWEIU4A7ZRYZEz81%2FW2WY%2F%2FYMMSt1rgrn5rEK6jBGAbmnO3091DjdZpidAtkutGTc3A8BotvkAR76idtMTej362BabBYBq4YYBhMOKXGk3TxEahBoeu%2FCMhX%2Bn8pf7%2B%2BiTqanfKk9hmtB9p6jKHtw5S2aZXO5EPDT0QLS8FhZrOWytMMHi48MGOqUB1ybAN5YYfGGcGA%2FJHSfjuPlj8WKc3%2F%2BxabMRGSsryufCwHYYVl82A12lMEucT1BZPOmK8xemUugGaU3CEM2f5DNfHDxigJQUI81BUMQLMvSRxJ0oBE1S3LIpbPlKfg7E7OTYA0EuimULU%2Fjmfa5l8JNsKVZFtSF1LJl3%2B0NCUYKmmMFw2vRz89ijkWsTH3voFY3AaCdU9d9iaSn%2B94WYqU8YwGSH&X-Amz-Signature=87835957ed2ffbc53c34f7ae56763aa8d846ad02f1e00acabfbfed76d009869a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JX323FR%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDR0zIga2C88osEcEoBSb0Ed8hAsIsccnabkhADuO5SgAiAcbftSLsFiI2RIycbMkcy4KT3jG6P2y4QLSB98VNcMdyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIM3xutVfhi0ePOcJFMKtwDxdp%2BmJGT1DRy1dPzXPYg4B8VEgdp6dN6bvblnJoEzOr6fCknYedMTM%2B6BKBE7oCOUeQMAE5AYjBVFzNoFb5GtxD5eTWyl4sx9%2BDtbiCkhXGjupbSeW68kteg4KULIemnf9eB7yVl7w9h3VYIruZTAAtIrl1ouyPzDHPOJyJioHD2Tpja%2FmloGUzL1Vl7Ni9DkOIcLqMa8vQ8Ino21ceXA7Yo%2BRXXqxVvoph%2FB1nZ%2Bdso1n29MdS7ocAZOFXz50ujscmcQdkMI6rG%2FzCCvzDwbIM2P8S%2B0lRrcTaFfsMMY1M2eYoHECAMkGgYCalEs7%2BRuQrEg%2BkpGlxeNWEfLXFgUulJ4B9zqoYwfbd3NfqGTuAvdTp78hGWZMT6Hj%2BZTrF9JyWCTcrM2IUEIdHs0d5y1j7%2BG4Bm96OVjZvFfcD3y1x2iwuZ4RemsExWdg4Xthp656KH6jEVPuJGuZIaY3j1ArczI5I%2BqgF8LJXtSx6tnPrhDSV1Ybn9I377HD%2B%2BpijH80B3X9UTPr84yZYzz1iONc8R7Bn%2B4VXbbtD7luNbPy%2BMh33vIMivSDrjYHkwlYnCc0Mv3CeBDnhpRcllq%2B7rnLwhEBlNwgWW1jpFiDPkX4CyXdyc1YC6yEGmJ0ww7OHjwwY6pgH4n0anq3v3ev81PEcnhfvVpZTYglN3YAEwc5g2aT28R58Jakxzn2eVZK3dIrVCFdF8afqy%2BgTXWAMmZmtztz3dm92Ro86a%2BzqujFXMql7QOOJg7RwyCemIPKNkg6h%2FYm8KEOSb05%2Bi8AD1TAImh7JgVNVwItzSSK4HMLcJUjZHPVgPd1srgdiomNY8D5I8Ws%2B5TaqYiSNHCEFRO%2Fej5kP7hzvewzST&X-Amz-Signature=055d9009698952871c162a2a8c55714ec0c330e1feddc4e0e879e5a30f475f27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDK2PZIF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIEgV81VkT%2BDTCgr7Hod6nfGZ86NIRSp1lKsw9JgnvnrgAiAoDDQBCbgBw5scAeS1zHKBvpi1K2wzjT2APNKoMLSWsCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMSW8L%2FBYLL7uXxzNhKtwD2N9riv%2FgNsrGq6CV4K0jtPK1EspTPTQOW1J%2FRqNV2EsG%2BAvE3X8TQjLwZI%2BxSgT8buc6PRcGhAM%2FBHU4jSVhUX2d5VhOyet1bvLQIVEHscAs5E%2FW0r4ndcagmsZATx194RCoQTswTeUR4%2B2VljFUeOkIrDBZ9y57ZGV24uNKk1KTryymaYIp7t6%2BM3OUriESMt4Uql3tNbCT%2Bkd%2BIaaMtHzO89ibhCmKXmJAaz21Tsr%2FhZc7b6meXUOKrJPSEOta8jNN9KxDkKP%2BkCEBwp%2B42mTmETnsvuGB58mXZjIYllBXnkxOXRSIUB8jIMgoVunrP4wJ1uGnfuQunipxVDgu3Ji%2FpsGI%2BtJ1uaSqjXZqzO%2Fi6p7d%2Blqjpbo56Zf7vpCQGoHk7pufQ4BjiuwrO7liSXaZP7q5G50lXuAmkN3BkhwEqw9fTX1AUOMFV0dEl%2FHgcYQ3jQLUy6LPb2Y3pvEd%2FCZmxpTApfC5CAcYHY0u0SLVdq1%2BJXQqf48VJDfrjC1AXJY4WU2Wj%2FVW0BwgoU5sPc9bCno8cdMk%2Fz%2FAUKW1Ko1wHyceN9llM8nLAlgC%2FyX4LKllCLt%2BVloXMcz%2FzK%2FRA8elJBNVyZgpVsZ8xjTEnn%2BArDuV5TBLXSP9z%2BgwxeLjwwY6pgH%2B0R5XYnQfYq3DK1RCOJMDcK8xPeNH79ZKUrJ6UvX2DzBDeWmoAusoLn7GdJcPziH3F%2Bi064Yitm0AbN63vUXj0rgVyyzfctvQnwl2ia3pshhVrmdCP3tkDKTycljxi1WDys7wIMucETvHUHrm1Xr%2F6NUgJVJ%2Fv%2BWkvLFqZMXhtmb1yZJXz3o%2Fpkg9tfOMtnH4jEdVagX4eOhDfgELOfUt46DYiFD6&X-Amz-Signature=bc541bc8a35ac0a1f3dbdfaa9fe36d2c1344ee90b96a278d3a52f5a4b530fccc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636FOK7UU%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC6zG4edcdv4Ishp%2B8Kfi1RE8sf78AgJlxT7iswGpuCCAIgOb6gQ%2B4OhpSlAlt9YYdWGWAM15JaqK%2BZmxp8fNecAUcq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDMByNVFBPJAheKPEzSrcAzdIbniXnsCSfPUiIfNrWn2IQtcdOsFFdwoMGK5OE%2Fe%2FON6h%2FnAEnDHtJ%2BRABhNfXUmxEVGF7cBJvL7CZHHOY2fKjCCJnIV%2B7WQ3mrd4zfEZOnn67mLL0aMsB0E5SeAHtrq8WZUfQKSN%2B4gRf%2BviU1gvukkKxxTI6MHJLEzqt7UkQ0dYd0crUN4wqcX2JELpRrRw5YsEmHRwOg8HFctkT2SJR9il7xpLkPZSJmQIV9WS2Yi3aWclV%2Bed20v1odsGqjB5zuB1dar6lgletX2WiAc6V7JScQeZ0imafEXkJLV0ofrhepGEdigfRtTeRb91M3VIlugsyrQIpO8A%2F5xvWNyzk%2FxT0FLy9vZOq8EJyik2saRTJKjpy9giaFbYHBqIpQQKQX0k14FHW8EB%2BTSWgNg%2Fm7O2jO6p9axkb%2BbDDnt7zz2Q8UIfnBRiDXkGreg9lp4d%2FNWgT0GWvnaWEIU4A7ZRYZEz81%2FW2WY%2F%2FYMMSt1rgrn5rEK6jBGAbmnO3091DjdZpidAtkutGTc3A8BotvkAR76idtMTej362BabBYBq4YYBhMOKXGk3TxEahBoeu%2FCMhX%2Bn8pf7%2B%2BiTqanfKk9hmtB9p6jKHtw5S2aZXO5EPDT0QLS8FhZrOWytMMHi48MGOqUB1ybAN5YYfGGcGA%2FJHSfjuPlj8WKc3%2F%2BxabMRGSsryufCwHYYVl82A12lMEucT1BZPOmK8xemUugGaU3CEM2f5DNfHDxigJQUI81BUMQLMvSRxJ0oBE1S3LIpbPlKfg7E7OTYA0EuimULU%2Fjmfa5l8JNsKVZFtSF1LJl3%2B0NCUYKmmMFw2vRz89ijkWsTH3voFY3AaCdU9d9iaSn%2B94WYqU8YwGSH&X-Amz-Signature=506594969dc76797514fbcedc32f7b033a755c0aba9515723297519f6cb93129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
