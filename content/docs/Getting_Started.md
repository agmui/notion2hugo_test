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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKHC5H75%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFrVzeKxALFJgfrlVq886QGHdVoIOVZ9gwwZwkecuKWvAiEAqV9R8wcSUnj6S1qsisDNyc%2FvxhVsqzEmd3qB2Ukm6ckq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDLlUa%2FSQFxPPajVFuircA9LLjaVsHrJQf2mSOiEbCI8HugCSKyChsFfiNO6IvhR9%2BmDxSYeRGmxiNN6Mm8nJDo1YiVWwkOD79RrgQd8CREMWR2tBP1TZNIzsHDVIzTlwBLacc9n8ZxpqwDQPdnEJxKrMCqDUGxydfODX9Zh1iloEgq%2Byv5rvLgSHLARUf0mvNwW26jrZY%2BIE%2FjWgvz%2FuYC3rXG9nZB0ou3Fx5CKY5gLAHANcqApIeENjRNAPetDSW2QjPk6Qq5r4Rw4CFtbijUbnAB9iExj8ainLfmRM3TKtqYT1ua%2BCPICucM%2FfOLF35TJD6IU4XvZJ4u85abKIH5zhINiOo%2BD0i7P%2FCsG2YTfjnsauMkEZqbSPOYhw50Uuu8yxSVXixx5UOq3%2B0SpAqynxprAoMejYDCghwfHahLDUids2rnC%2Ft3SrXZLCVAlYkkZhoTfueSVnHPGIwsDWcql%2BkSc7K%2Bl24l5TnHn1l1XgbzgZxB8hCUNZHUJQEC%2BBfmgybRbRqrc7NSdv%2FlJzDtA9D2M%2B3pJF%2Fv059YvbfhbsCiYDplYv06j%2B3CrqlLb9HM%2FUY%2BuJLgoP%2BBJWXAhNlo1F%2F5YZJyNXFM7KE0vLKzkXeHIfPWcfYNa37D7wWyA4swXlLBgdGPqOGzGbMLevh70GOqUBmmKQUb9idO7%2FtrGXLDL9Q33Ih43F0FGM9vLykFuJk06IpPmSxmem%2BVNMDSMNKsTWxB8%2FJqJ1zxeeKRV8pxHnUs0mPSLn%2BvE%2BihMeSH1sP8nIhft%2F9DGANVedfQIgc7uf%2B8NmIrMYVcOBcqXkCj%2BAdxNMxqE4qg48hqjyV2dPWe4gZ7O%2Fxz1LyxORfKo3XAqyHVjWkV3K0OUARl5FbDKYFGQU03in&X-Amz-Signature=37d74ba6dbeaba33a2c99fe752a42f68140c6e69562860d13769753732a24688&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKHC5H75%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFrVzeKxALFJgfrlVq886QGHdVoIOVZ9gwwZwkecuKWvAiEAqV9R8wcSUnj6S1qsisDNyc%2FvxhVsqzEmd3qB2Ukm6ckq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDLlUa%2FSQFxPPajVFuircA9LLjaVsHrJQf2mSOiEbCI8HugCSKyChsFfiNO6IvhR9%2BmDxSYeRGmxiNN6Mm8nJDo1YiVWwkOD79RrgQd8CREMWR2tBP1TZNIzsHDVIzTlwBLacc9n8ZxpqwDQPdnEJxKrMCqDUGxydfODX9Zh1iloEgq%2Byv5rvLgSHLARUf0mvNwW26jrZY%2BIE%2FjWgvz%2FuYC3rXG9nZB0ou3Fx5CKY5gLAHANcqApIeENjRNAPetDSW2QjPk6Qq5r4Rw4CFtbijUbnAB9iExj8ainLfmRM3TKtqYT1ua%2BCPICucM%2FfOLF35TJD6IU4XvZJ4u85abKIH5zhINiOo%2BD0i7P%2FCsG2YTfjnsauMkEZqbSPOYhw50Uuu8yxSVXixx5UOq3%2B0SpAqynxprAoMejYDCghwfHahLDUids2rnC%2Ft3SrXZLCVAlYkkZhoTfueSVnHPGIwsDWcql%2BkSc7K%2Bl24l5TnHn1l1XgbzgZxB8hCUNZHUJQEC%2BBfmgybRbRqrc7NSdv%2FlJzDtA9D2M%2B3pJF%2Fv059YvbfhbsCiYDplYv06j%2B3CrqlLb9HM%2FUY%2BuJLgoP%2BBJWXAhNlo1F%2F5YZJyNXFM7KE0vLKzkXeHIfPWcfYNa37D7wWyA4swXlLBgdGPqOGzGbMLevh70GOqUBmmKQUb9idO7%2FtrGXLDL9Q33Ih43F0FGM9vLykFuJk06IpPmSxmem%2BVNMDSMNKsTWxB8%2FJqJ1zxeeKRV8pxHnUs0mPSLn%2BvE%2BihMeSH1sP8nIhft%2F9DGANVedfQIgc7uf%2B8NmIrMYVcOBcqXkCj%2BAdxNMxqE4qg48hqjyV2dPWe4gZ7O%2Fxz1LyxORfKo3XAqyHVjWkV3K0OUARl5FbDKYFGQU03in&X-Amz-Signature=7d9301ffc5f669035585c390993ae04b27291300db1948d77cdf4c8225f70b9f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBCWDU5G%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCV%2FRP2U9pXZvP973BP4z54lLdZY0z0tGEYEEleAVXyJQIhALp5bPRytXi3%2BrqvTuclAtmxve7jtty6hikp0KsY9TBMKv8DCCoQABoMNjM3NDIzMTgzODA1Igzp0m1Fsx9lrRF7WiIq3APHCIRKlyNKHx%2BCrcPoc62MXuSsA1wGzQKU4PF0TTEkYjgkP3Zb7q6tRswWaUKea7Hpyptebixy4M0kLV2CJWy5XBQ9k406VPz9sSdlbMsWT368x3g6Z6T5PNpF9mm1xR4HanGWdyM61R%2Bzh%2BPbk3v%2BjTYJQJxSVcn8tYKRozYlKgGPa06fGE%2BqA37qOYEhJzfawn4Xi2LWrUTaVIJtxBsmEa027boyBiOHOuJCOoSfyVn5bRV5jTrlF6BFJKCGGsbN30932u%2B0x%2FAB9ZW7pXi7k3hgJl4cMOqeJz94LGy29da5T5IMPlGqOwdDXVAuwh9F93lr%2FnF4LPsawXRYtBhvqejwnRttCkVJR2Skn7cyWpiSvzYFADmK4HPvd4FLfkQ75DcAr7OB3iimW6MF%2FQTMfkkTxQ8244FNS8ohkxSirwkXlPkWI7RIBunJQtNUsOW%2FL66ixstRZTG3T8AOOT6nPmH1a9CjQn1pBwrtyeqilTwZgDfABvwauhNSqDaAbbo56KSlaxAaFF5BwV9%2B4isSt2ZgbYnmCiZunDuA8E6ZmBE4ptNeQVFtP%2Fziu7Yg%2B0b%2BGXJKSRXqhWrKc9uxYA1%2FDnI54UZGAvqnt9Lp1FbLrjzOZdAiMk3r24%2FnNjC4r4e9BjqkAfC%2BrlGhaRmXpTWjLJ2AYJoHjXRDVr7gc23bu9ax50eDtsy4rC9jhd4rUHTKFKPd223L7S4ZGNc92unWS6t22RrwN4amQVtdXgovUx%2Fxy3nXYaAhv8YwPAmZeByMnAzNpMbVqPxXKdJuhuH1BXBaUbITq1ONaD97TcUbv21PZEAibP5fcSqXVRUo2SgaOhf5TFMqinLo9zVC0B%2B40SIF3%2Fv4q6eX&X-Amz-Signature=18f335d034d3dbbc0a989216c8c809fd387792c513eb5b0f576c453d5d491fdc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK357TWD%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIHVLnnK39hGY287dTgbg6nZP3Ho7%2BglKjhKwXrZBU8NvAiBTcXGckEpXEkTfg21tnVYOb%2BVJ%2F87T4qn08rgcNrPjVyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMdZ8eMIIo3N3xvlHSKtwDaENjHOXoaZxYZXYmH4H%2BrdkpnbGiUHXugVSX8d1ohKlX9lVGucflMQ89j6m5gavCpKt%2F6tnhddR2htrGHop5MdjjHWbfEjD5UwqSFrfi5gkT8O04QBSwJIHMNDS0meJ%2FT9vTjOgO7467cyIG9gO%2BDRQKnAqRMEB6cOunhPjwhlDh8R4Y4A%2BOruPYlrCzyA%2Fpnq92fmURvkVIzG3%2BJYwpWV5WQMmHRmEhy5mz4q6ZFmwgJqO82NTIfaU0FSKQuiK%2FisZwzVqKnrj1TrvnmjWcOyGiSFVrPCt6TEjJAWkJfUUgX5MIa%2B0U8kaRqk1Wuic%2FCZ%2BzcyCYlGO52%2FKX%2BrJMNQzZt1IrHvq6Jo5f5VOJdD9xAry97RMJAu8O83Y%2BqahbCYeulda%2BopXXfobExEf9kYKxo%2BErf6t9vipvk1qqO8UVD3VIUsMud0LNmCV7Xeo3MYntOdu8733pkCCoc04mOTBkEdmvjOfObzOjhd3Oki45kRwJCl3tgb6BNy9nBNg1yqHPosGF2XPNLfbEgi0tapAQyxMNqpOnmZZqAslNgGGrBVX8dKDoetygezXRzpDho39ZXCuuY1yjXJ0tCaxMT172yDxjSwi47LooERyR1IFkNh7MolUNz83IRmwwk7CHvQY6pgGwbtZIUS7%2Bmt2dA1KIQ3yexcJpRMnZbRYmEmmKPY58gnaagLXJzvQl3L3aWqsXZpfLmjnspDWayOHnXzpSyUWHs%2FAXzMP25jVexQ1TB4%2F8yHEj8tcXDRvEY1AeaOylH7rqRHW9qWrST3IRM9OvXF4KXMPrsOl%2BupYS%2BZcgyX%2FN57BCDUJSAVhTx%2BBkFuv3O5u76TUneutgsBiJrcvBn6O3oKiRVv9X&X-Amz-Signature=a77029d664a9ec58b3640c3c02d89ea0d31167cbbcd98b28f0d22fa55c5756af&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKHC5H75%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFrVzeKxALFJgfrlVq886QGHdVoIOVZ9gwwZwkecuKWvAiEAqV9R8wcSUnj6S1qsisDNyc%2FvxhVsqzEmd3qB2Ukm6ckq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDLlUa%2FSQFxPPajVFuircA9LLjaVsHrJQf2mSOiEbCI8HugCSKyChsFfiNO6IvhR9%2BmDxSYeRGmxiNN6Mm8nJDo1YiVWwkOD79RrgQd8CREMWR2tBP1TZNIzsHDVIzTlwBLacc9n8ZxpqwDQPdnEJxKrMCqDUGxydfODX9Zh1iloEgq%2Byv5rvLgSHLARUf0mvNwW26jrZY%2BIE%2FjWgvz%2FuYC3rXG9nZB0ou3Fx5CKY5gLAHANcqApIeENjRNAPetDSW2QjPk6Qq5r4Rw4CFtbijUbnAB9iExj8ainLfmRM3TKtqYT1ua%2BCPICucM%2FfOLF35TJD6IU4XvZJ4u85abKIH5zhINiOo%2BD0i7P%2FCsG2YTfjnsauMkEZqbSPOYhw50Uuu8yxSVXixx5UOq3%2B0SpAqynxprAoMejYDCghwfHahLDUids2rnC%2Ft3SrXZLCVAlYkkZhoTfueSVnHPGIwsDWcql%2BkSc7K%2Bl24l5TnHn1l1XgbzgZxB8hCUNZHUJQEC%2BBfmgybRbRqrc7NSdv%2FlJzDtA9D2M%2B3pJF%2Fv059YvbfhbsCiYDplYv06j%2B3CrqlLb9HM%2FUY%2BuJLgoP%2BBJWXAhNlo1F%2F5YZJyNXFM7KE0vLKzkXeHIfPWcfYNa37D7wWyA4swXlLBgdGPqOGzGbMLevh70GOqUBmmKQUb9idO7%2FtrGXLDL9Q33Ih43F0FGM9vLykFuJk06IpPmSxmem%2BVNMDSMNKsTWxB8%2FJqJ1zxeeKRV8pxHnUs0mPSLn%2BvE%2BihMeSH1sP8nIhft%2F9DGANVedfQIgc7uf%2B8NmIrMYVcOBcqXkCj%2BAdxNMxqE4qg48hqjyV2dPWe4gZ7O%2Fxz1LyxORfKo3XAqyHVjWkV3K0OUARl5FbDKYFGQU03in&X-Amz-Signature=0ee953b9b41e03453240d391fc60cb1e7bf3317b55c08041e19e22ffb2d8eda7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
