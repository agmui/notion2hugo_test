---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIHL2EEU%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCQ%2FRPinSrSElpQH8NsiFM9wNinIkkjP9putMMGnyuW3gIgIoG5QVE5MTur1xgdKJohE3lmcLcKaRL6vvQJLMBjKrsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCg8sf58BAZM3RsXBSrcA%2FBDETsxGDrHGarZ1oZjWWbAHz56Dew%2BwANJuk8%2F2v%2Frzyk%2FuVwOcvJiL3KhmdSh%2FB3LXQpMmcyn2BJojOLwUHmCwthz4NPQe%2B0G2wOxHZo01x%2BjX81IBWZSZhhjXzlUjWigvTPKQeR9Nnl%2FEhtaospU8UbKgjHKQnYmDsXuXFt3YplW0L%2FOrEC%2FoSyFb7NhOUeUpnfknXweQcB4CUJK5a99NaOhqbJzJiHBC1fpIF11DVUGVGOKZ7ybrka4xZN9lBaAXB7pNpknQTVNjh7sWlWxPuJM3ex44TnFyx94I7Aoo6c%2FhGC1VgN78xJSSPURQ5790rX7JmvEOsH4j26EwEdNru%2Bv1AIUUw%2FObOlnLWA0zZpXLmdZmuHxMgIuSU%2B7i8TSt71uc36Oe9l7p2sbwRfst9a3cKy900kpnsp%2FicN401cxjpQQD013jn39SQslGExBuNNRpr2aO28UtsINC1VQVwT3kk92u8rVhmdWQ9THUqUrF6XguAJyJbeopTKLiCvYIihEQ3L1NcRiNQyW513SgkHkS599YCCzzwuMhze3g3%2F9TzAdN5H20itrvE1S7P4VHEpCnaQaW5eSCs9Hrl2wvkiRgClDIyUj7BQbepSunomKr9oaEpJ06nwIMLPJkccGOqUBL7gH25SfhYEw175JlVBoVB5l07wQRyAHiMkcNeMRrj1HvlufgkgZv4Uapk1ZPrPI0u5PkITN9HQvDihHkw2kuOfAxmHEDmktcd52LOHs0wesemGaJhA8OhsrjIQhOij5JM2rVqyBdxPZ6JNkLMKRb4NKNqaoX%2FsnSTPMMkdonS8ebDIb9zliKUJk22h9wlYfk7WuOxrvBGnIjHXTYrxe3jgfG7gL&X-Amz-Signature=c607388fc76b09b0c821912fdf761f71f385df8935fa34c27451c07b64b7d75d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIHL2EEU%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCQ%2FRPinSrSElpQH8NsiFM9wNinIkkjP9putMMGnyuW3gIgIoG5QVE5MTur1xgdKJohE3lmcLcKaRL6vvQJLMBjKrsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCg8sf58BAZM3RsXBSrcA%2FBDETsxGDrHGarZ1oZjWWbAHz56Dew%2BwANJuk8%2F2v%2Frzyk%2FuVwOcvJiL3KhmdSh%2FB3LXQpMmcyn2BJojOLwUHmCwthz4NPQe%2B0G2wOxHZo01x%2BjX81IBWZSZhhjXzlUjWigvTPKQeR9Nnl%2FEhtaospU8UbKgjHKQnYmDsXuXFt3YplW0L%2FOrEC%2FoSyFb7NhOUeUpnfknXweQcB4CUJK5a99NaOhqbJzJiHBC1fpIF11DVUGVGOKZ7ybrka4xZN9lBaAXB7pNpknQTVNjh7sWlWxPuJM3ex44TnFyx94I7Aoo6c%2FhGC1VgN78xJSSPURQ5790rX7JmvEOsH4j26EwEdNru%2Bv1AIUUw%2FObOlnLWA0zZpXLmdZmuHxMgIuSU%2B7i8TSt71uc36Oe9l7p2sbwRfst9a3cKy900kpnsp%2FicN401cxjpQQD013jn39SQslGExBuNNRpr2aO28UtsINC1VQVwT3kk92u8rVhmdWQ9THUqUrF6XguAJyJbeopTKLiCvYIihEQ3L1NcRiNQyW513SgkHkS599YCCzzwuMhze3g3%2F9TzAdN5H20itrvE1S7P4VHEpCnaQaW5eSCs9Hrl2wvkiRgClDIyUj7BQbepSunomKr9oaEpJ06nwIMLPJkccGOqUBL7gH25SfhYEw175JlVBoVB5l07wQRyAHiMkcNeMRrj1HvlufgkgZv4Uapk1ZPrPI0u5PkITN9HQvDihHkw2kuOfAxmHEDmktcd52LOHs0wesemGaJhA8OhsrjIQhOij5JM2rVqyBdxPZ6JNkLMKRb4NKNqaoX%2FsnSTPMMkdonS8ebDIb9zliKUJk22h9wlYfk7WuOxrvBGnIjHXTYrxe3jgfG7gL&X-Amz-Signature=b25bdbac53f4df1e0f9a356fec08dfa01ec2fb96e68afdcbbab609d3a4bb5d32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIHL2EEU%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCQ%2FRPinSrSElpQH8NsiFM9wNinIkkjP9putMMGnyuW3gIgIoG5QVE5MTur1xgdKJohE3lmcLcKaRL6vvQJLMBjKrsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCg8sf58BAZM3RsXBSrcA%2FBDETsxGDrHGarZ1oZjWWbAHz56Dew%2BwANJuk8%2F2v%2Frzyk%2FuVwOcvJiL3KhmdSh%2FB3LXQpMmcyn2BJojOLwUHmCwthz4NPQe%2B0G2wOxHZo01x%2BjX81IBWZSZhhjXzlUjWigvTPKQeR9Nnl%2FEhtaospU8UbKgjHKQnYmDsXuXFt3YplW0L%2FOrEC%2FoSyFb7NhOUeUpnfknXweQcB4CUJK5a99NaOhqbJzJiHBC1fpIF11DVUGVGOKZ7ybrka4xZN9lBaAXB7pNpknQTVNjh7sWlWxPuJM3ex44TnFyx94I7Aoo6c%2FhGC1VgN78xJSSPURQ5790rX7JmvEOsH4j26EwEdNru%2Bv1AIUUw%2FObOlnLWA0zZpXLmdZmuHxMgIuSU%2B7i8TSt71uc36Oe9l7p2sbwRfst9a3cKy900kpnsp%2FicN401cxjpQQD013jn39SQslGExBuNNRpr2aO28UtsINC1VQVwT3kk92u8rVhmdWQ9THUqUrF6XguAJyJbeopTKLiCvYIihEQ3L1NcRiNQyW513SgkHkS599YCCzzwuMhze3g3%2F9TzAdN5H20itrvE1S7P4VHEpCnaQaW5eSCs9Hrl2wvkiRgClDIyUj7BQbepSunomKr9oaEpJ06nwIMLPJkccGOqUBL7gH25SfhYEw175JlVBoVB5l07wQRyAHiMkcNeMRrj1HvlufgkgZv4Uapk1ZPrPI0u5PkITN9HQvDihHkw2kuOfAxmHEDmktcd52LOHs0wesemGaJhA8OhsrjIQhOij5JM2rVqyBdxPZ6JNkLMKRb4NKNqaoX%2FsnSTPMMkdonS8ebDIb9zliKUJk22h9wlYfk7WuOxrvBGnIjHXTYrxe3jgfG7gL&X-Amz-Signature=f1754d7ca8119e167a597418cc927eac47e9f52c97eaa39d10bf0d9ead7aeaaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C4G3KVH%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD98BzK%2FflMIRdr1g4vKY5TEXG1x82jYxq%2B%2FlHhICXqSAIhAIBG7OYg5YoV5lU%2F5QlqoPVoSeLV0FOnUc1MabMGnDnAKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzf3dotVgqlctk7QYoq3APtu80aATHKpWcakmI%2FhigGA1H6uqo%2Ff14kaf%2Flt4jv2NEOgg0vxB%2Fv5gQEn4%2FLOpA4FgqxolRSNe3KqNsbJKmXuY2eXPRHvQseAS%2FMPW%2FOtXvmzQDgbVEU3uxW8Ivq%2BQGdHz3blJ1R%2BekKfYIPtv8JYrSBMDjc3chnWMiI6eQbVIrB%2B%2FMBqnq2Xy1xOurNdECOY78TguVRae19ds8LvNAQR7xXE7JiXiShDasqMkQ08R%2B6B6HqyuDUbG8Paxl%2BKibCRfTG%2Bcjw4%2FOezShA4wqjI%2BohWyz8U2KyEqZiFuJPO9rzJqX77e%2BviKo4jqNq2ZgvEFHU1RRMTjyNs%2BFIybrFfZdXAI%2FB%2B4Mv3uvMzSBJL%2FD2Z7Pg2V8jDnLVch4pgkIRrKchqyR6%2F8DECgzcPghK63BBv2GOKR4g1vovaHT0Xd1gSTxMvOsUxiSlbfZefONDE%2Frws5g4n06nxm5%2F9biqern8dPd6HSnieae0a7S%2B20ilGTcuIGpn8bJxX98CxFobqIzKbguZTY3NhXFKKFjZRJOQF2gsnLpp7Wm3zTtZ%2BOyH4U40q%2BSgcE7%2BRtC1yrWAFk63f7YEwOCfZpfSPcn7GaLWwIr%2BBSsdDNeCbjUUHcQorA61RWTAf%2FDs4jC6yZHHBjqkASXmq3ljTbLHSd33QkNIHfkiXDb9OyAbooOsh7YIsFDuQ1gVSX%2BUXEuatGdBMXEuQWhBubjsqJGMpyIcS%2F82WiL5kurofHGvt1u9z9HRI5wc1Nmkz%2F%2Fy%2FTp0ZzGc4g1yy2EE2viX59rru6FuA%2BL1ngE7bLQIe%2B4NVfBCLeCxl03YTCYL%2FDKd5KMZXBjPRIMcXi5fOtmZ8R74mnZ3Y8qxTPy3%2FmTG&X-Amz-Signature=0dead1e3bcc0bb21e7c060606c62e1f165f6c86fed210db7ebdc62fc5a6addd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ4PBXIA%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCWTicU9QdGKPsFySXLspN2Myye5s8CIBrMYRH9ShBFXgIgPF1K52rtAu8vO3ZvAxOf32iC1%2FhhAGzCujv8ac35WcgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BFW%2By6Tv%2FB71BZGCrcAxG7XqFOgN1hp7noaQ06YIHQMj6GCKSzGASESgd7T7ouJN7DmHXEXCKQ%2BFVYkOz%2Bs9WolmbtyhRnfIo2WI9SO5EHGfXAP2fR14Zu7HI2jwFpOlDSURvfz%2BB6Jw1F%2FCRMyDirBV2sVLH4ylw0qVUmJRzZ0rc9GixMzvQsnMCNfoHP58YYpoRZETVtZQ1QJZI14bwbpOAOS8x3sfD%2B6VP20%2BQaNF94df4q4TNaPKHZQ6mcgDztRLmO%2B93Jq3xYDUS8P%2FMakrgmJmEmPYf%2B9ank1BhSYT0db5Ru8chbItd%2BKZlPZ9eFjfLAM0ETCDdYaxt%2BluRXuuUh0mbMQHZqbIqWi4p4e8m4xUeXNBF9lUy8IrCbnHj%2F5wfnOlRMFlDuQHb6tZBPIYOezy2xTKmqNlAFqO9tXigvmNK7L1BraSDxFbLXPOsAKNNV2ja2UNF1dxtd6AI7rixmo7DO%2B%2FVfH%2BVOoKKFt5ZtSa4FRCua8X6L1wlEPoqb3qafLrdIIIjQZTWHZ2N%2BAM6DNJmMASf2u7yTWAq0%2F0RrRUnvJK%2FYXcfjaGw%2F9VnsrDv%2BIiea%2Fc12MmEiBD6RTtwjc68GEu7y8glg9T0YIQnMMt04HpdMbYImQYXNHjRNU1evJhExP3poML7JkccGOqUBxZ%2FZLBMnbGUzQ1smOO25T%2BKGW0x6EWu4MnYt6Ctwk9h1QgDPF0rIfbrjCpXfSEhQEApO26uK%2B%2BcRItIEgYbEeoMoBihScBRdXhspi5kgN%2BVH%2BxoTIwe%2BDuDPd9Ax8JJ08UxJBPa%2BH0ThuhrE3wJ71b75ikmqns%2FK36yqOHn12yJ%2BthCIjkSD1gVGLmLGhqyFy%2F4Rhrm02v4Uutv312b%2B3wprs4ZN&X-Amz-Signature=e1a680734329f0bbd1eccabf16bfe3d675b0a60a630d059596dddf45df2226f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIHL2EEU%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCQ%2FRPinSrSElpQH8NsiFM9wNinIkkjP9putMMGnyuW3gIgIoG5QVE5MTur1xgdKJohE3lmcLcKaRL6vvQJLMBjKrsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCg8sf58BAZM3RsXBSrcA%2FBDETsxGDrHGarZ1oZjWWbAHz56Dew%2BwANJuk8%2F2v%2Frzyk%2FuVwOcvJiL3KhmdSh%2FB3LXQpMmcyn2BJojOLwUHmCwthz4NPQe%2B0G2wOxHZo01x%2BjX81IBWZSZhhjXzlUjWigvTPKQeR9Nnl%2FEhtaospU8UbKgjHKQnYmDsXuXFt3YplW0L%2FOrEC%2FoSyFb7NhOUeUpnfknXweQcB4CUJK5a99NaOhqbJzJiHBC1fpIF11DVUGVGOKZ7ybrka4xZN9lBaAXB7pNpknQTVNjh7sWlWxPuJM3ex44TnFyx94I7Aoo6c%2FhGC1VgN78xJSSPURQ5790rX7JmvEOsH4j26EwEdNru%2Bv1AIUUw%2FObOlnLWA0zZpXLmdZmuHxMgIuSU%2B7i8TSt71uc36Oe9l7p2sbwRfst9a3cKy900kpnsp%2FicN401cxjpQQD013jn39SQslGExBuNNRpr2aO28UtsINC1VQVwT3kk92u8rVhmdWQ9THUqUrF6XguAJyJbeopTKLiCvYIihEQ3L1NcRiNQyW513SgkHkS599YCCzzwuMhze3g3%2F9TzAdN5H20itrvE1S7P4VHEpCnaQaW5eSCs9Hrl2wvkiRgClDIyUj7BQbepSunomKr9oaEpJ06nwIMLPJkccGOqUBL7gH25SfhYEw175JlVBoVB5l07wQRyAHiMkcNeMRrj1HvlufgkgZv4Uapk1ZPrPI0u5PkITN9HQvDihHkw2kuOfAxmHEDmktcd52LOHs0wesemGaJhA8OhsrjIQhOij5JM2rVqyBdxPZ6JNkLMKRb4NKNqaoX%2FsnSTPMMkdonS8ebDIb9zliKUJk22h9wlYfk7WuOxrvBGnIjHXTYrxe3jgfG7gL&X-Amz-Signature=b09cb2de311eafb791a7182a7148729e8278ff2a6aa6776d946a77da465234e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
