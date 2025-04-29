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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UK2MKF2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzkU3j7Yfu5I%2Fl%2B9cQLk%2FKu4prA5M9qZ1NxPdna6pOoAIgGL%2FFJBLAIbC6XyqZQ9NzrwirJdxNtw07Ao8wFsDEa5EqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvjHj8fuO0Pi9z39ircA%2FaxjuDaiorkuIaSio2b3Zb9FtXXUrNOzn%2F%2Bqrs3PKl0NlggOIB779KFO7nVKYavguiprKdp4ZSSxNFdQ2Ny0W4akuHIwAMWeCJtEvVvy6M1iE3a4cJhltimI%2F7Fo0EuSIffvgJNhjY4JQ1X5%2FglCn4Kk548fBxIU0Dya8rn%2BYMTp4bD0nAWnDxLZ0R7uqkhbEBWLX6HC6msa23tP4ZJ54kS1HIwHWvMnvDn%2FvzacT3YRsTDAiWGhQ%2FDls64xuB%2Bny85w5RyfEMP2cj5IB1xNMFm18nk%2BqTOU5wxIZmLGJgVIuHsIxEmfAYE9%2BONczXbhKf0SrCWlx8oCkgwSDFz9RkVwTpoPYvtC%2BFTy4%2FD46NFOLejALkWImZCAloA0X6DiUlzFtLi8Nl3Yy0NmGK1SfKHlCIkneMOYACr7WDagOEhuiMBhzj4OqWTsN1cPhFWYmeFIiDCEwqoGRfFJHNxV94CVTF5xjLlaGiVpiypjaCOmlu88m9NUBNE1WXWzB477GaK0b7hbu%2FrbtGmHi4BydFkdgbvQ034Ovym4riVP6mo4vdPr30VFqKUe1E%2F3IwQQBq4IF8t4Kln9%2B9SQ%2FbWJAVpz5s3tn9Ab94YJWKHtj%2FwUL5NjqC5%2B2YsabC%2BMJSuxMAGOqUB8U8rEIJK%2FJUFDF%2FQy9J%2BFOR6kjrbpWDUiiDvlEJm65ehJiBNV8kwiT8P%2Fc3cHeOyMdluQOpFHLmpOKxFr05aPD7BDY0i7m%2FdoRzkJIGgcKhzG8rusOY%2FeaMpn%2BO6rsYngVkr4cmHcXTU9ZamWUBcKlqJp8NDg%2BfRBHP%2BNXvSkABRTK1ca1Yxyidp1hK7XkuVvk2f%2F6SK51Xaa%2BeGLa51PJBVCOF3&X-Amz-Signature=828452cbd2e51a17647cc916b923a0d2e4718d59b6c6616a779c824d91aba860&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UK2MKF2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzkU3j7Yfu5I%2Fl%2B9cQLk%2FKu4prA5M9qZ1NxPdna6pOoAIgGL%2FFJBLAIbC6XyqZQ9NzrwirJdxNtw07Ao8wFsDEa5EqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvjHj8fuO0Pi9z39ircA%2FaxjuDaiorkuIaSio2b3Zb9FtXXUrNOzn%2F%2Bqrs3PKl0NlggOIB779KFO7nVKYavguiprKdp4ZSSxNFdQ2Ny0W4akuHIwAMWeCJtEvVvy6M1iE3a4cJhltimI%2F7Fo0EuSIffvgJNhjY4JQ1X5%2FglCn4Kk548fBxIU0Dya8rn%2BYMTp4bD0nAWnDxLZ0R7uqkhbEBWLX6HC6msa23tP4ZJ54kS1HIwHWvMnvDn%2FvzacT3YRsTDAiWGhQ%2FDls64xuB%2Bny85w5RyfEMP2cj5IB1xNMFm18nk%2BqTOU5wxIZmLGJgVIuHsIxEmfAYE9%2BONczXbhKf0SrCWlx8oCkgwSDFz9RkVwTpoPYvtC%2BFTy4%2FD46NFOLejALkWImZCAloA0X6DiUlzFtLi8Nl3Yy0NmGK1SfKHlCIkneMOYACr7WDagOEhuiMBhzj4OqWTsN1cPhFWYmeFIiDCEwqoGRfFJHNxV94CVTF5xjLlaGiVpiypjaCOmlu88m9NUBNE1WXWzB477GaK0b7hbu%2FrbtGmHi4BydFkdgbvQ034Ovym4riVP6mo4vdPr30VFqKUe1E%2F3IwQQBq4IF8t4Kln9%2B9SQ%2FbWJAVpz5s3tn9Ab94YJWKHtj%2FwUL5NjqC5%2B2YsabC%2BMJSuxMAGOqUB8U8rEIJK%2FJUFDF%2FQy9J%2BFOR6kjrbpWDUiiDvlEJm65ehJiBNV8kwiT8P%2Fc3cHeOyMdluQOpFHLmpOKxFr05aPD7BDY0i7m%2FdoRzkJIGgcKhzG8rusOY%2FeaMpn%2BO6rsYngVkr4cmHcXTU9ZamWUBcKlqJp8NDg%2BfRBHP%2BNXvSkABRTK1ca1Yxyidp1hK7XkuVvk2f%2F6SK51Xaa%2BeGLa51PJBVCOF3&X-Amz-Signature=299bdc09ce7a8fe4ea97bc507e5d5c890b1cb633ff4f4e10ce22618e1ff1c6b5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYTRMN6Y%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0pdcruNgLQyo%2F8Ee9a%2F%2F0Jxr0AkDL5vGOlXBPBuWvBwIhAPnESdRuE33sJFRqnh2LFztSrWhrWEg17bIZctuNt2H9KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySnMhVR07lRdG7TBgq3AOtY%2BqsiQssMkFsf2DfGcjxhhoQmhug3PCEbBT9AQOdgtgccxxICfr3tVBr1TsepPNnbAUGolIZptuG3xebrBX2t0QPydZ3H3b4IWHBTu%2BlVabXQOxIxIBvnupH1r8g0B2%2BBVQGvoZ6O5RMzFBGHdnnr2oDA6dCV%2BKstaiouQaAI58XzlgcwKKDDZJoLUaBd5FvoidDRTK32o5eHGT8aiOtK12glHXu7y%2Ba8fLFVm5W%2BLjGfoMk3A4PgBycPP%2B72FOEu4oaPfuB16tlYn1%2BmrINJvJZHV3ma%2BQ728yqYDJECuoSLIVSL6TZrqML1y7qBcKfsOfNErmG4%2B%2B4zSK07ZPBP6QMwHRMw%2Braq1Wavlb7p1EL2xAcG9JtMGV636HOj1iJS9YERXOLQyEDweGZsop5rdZVuKBeiaq%2F0iKkGQDP1h1lEWnM0owefq4cjTkyJE5bkFZwFR049dmxzO9WM%2F8qpU96b3jsxv9M0OCk%2Bfnn7FYgTSgyYthKdURebPXPIxGJfyoJ4I9QsPUDK4OtMxQjb7jXJBOGc9RIvfVcUbtPGdKwmEFXwARUAOpV0fDHGoWYPjqInN8xvBEaYRlfaUIqMldLm944ULtwMc0sFMlpMsnsKou%2FvjLfrro0SzDqrcTABjqkAepHd6uv2mB9tdmrlb9FNPxQq8A%2FzZeq0dR3BX43xRuNk80grVdS0FsEvFJDiXTW%2B8J9nLf1Tbi5Gglvn2wh%2BpMQNnsDMgyecplV5PWbma7JFJwb677jlxqVgovMFKqxnTvitQsMgpZdKNxLO8SAehdEidEdOQ%2FDHRg7R9HJ%2B78K0PsHtR2NSEpnvb0c%2FkDl3%2BNh%2BKLPOaMjpO9TDKkM0FQKQ4Ve&X-Amz-Signature=69db6121e4bfe768eb200156a847af027fa2fcc219a97b78b32360819b72d3e5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC2Y4BV5%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEfHQejYz1WlgVyKu5S9Nvhhce%2F6NLnilbvFPbcG2k5AiAZwt1kXx01B4T2D4NlE7R9uXWdm5XWtIN0V5hTrdZspSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5qakuTxBcoakxUqcKtwDoZkYj3bD%2BokI%2BTU0gotK56LQEg63MxQK80vt4QIxrfdVz4gTOwXcfSpOj30Qa3%2Bq0B9myzFWLq%2FkMhR%2Fx9%2B%2BgBqG9Cf322qIs318SC9o3lGl78x3jLXFXRQ0THQW1%2FVYdcZqRKcEc3FF2zUSLmS9Rb7dRQ4USaBPv6iNOIXU4qKPvAIqPa5BwQpcHDZ0kb7paI%2BJG%2BDmDukHYJzUnmYD403s3fHQlVDzSS8Ozg1O%2F1bhGGIBfvLEEq2gBp6DfGx6tg1CHBY5UqU21HfjUZdNdd%2FvDxlTT9yVTPaEjllM7YkhBMmRW2GiAcio%2BGABqMBlpHO%2FnmeoSYiC%2FnCvLQZ3J8EgCU2eZ7LqJqc33Mfn5q5h3fuaA%2BswALDd7d%2FFNf8rMibw0YD7GjiqmCKe55Q%2BC%2B08reX%2B1kMWh9B8ZfEd4flW4dX5htrhHAesvICAgafRrv8hXejo4yfoM7HiZT3LRw3M1Zdk81ZfZJu8sYW7hc1LChIYk2NoE1x4JmuBR6773TLeVs5kvqsvreCC2dyyrTuFBM7Qn9V0zN0kiqO%2BTrI8zu%2BaIiA3l%2BCTkufuRFIvLEvkmffRJaeZbH5k9bfYN1nPygqrAO9OY9dYZeQ%2Fp7CSeAHDH%2B7EHGzlPUsw863EwAY6pgFnErUgKeVjHGNrKyhwLJ2gysSjciRF3eKXQV0PlVtGdkLDWHtAheNeoeFSJ%2FtVc2MCjY8SzMBZCgemFlrt8TGmT4T8%2ByvEGUcXx2MbMof%2FRe9LpRkro%2BYpAi3iOXS9aDIFptMbsAaOboD%2BDfJvlAAPB0rwLz%2FDRESuoqF%2BOipJPGpVsp8QszRws52hjBGmC7rB1b49BBRMFVmPLVI%2Fzo4XLFv2cPs%2B&X-Amz-Signature=ef299d4df1b5072877125f9eebfa30eb6ed2ba820ffe468d1dbbcc63c2fb5472&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UK2MKF2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzkU3j7Yfu5I%2Fl%2B9cQLk%2FKu4prA5M9qZ1NxPdna6pOoAIgGL%2FFJBLAIbC6XyqZQ9NzrwirJdxNtw07Ao8wFsDEa5EqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvjHj8fuO0Pi9z39ircA%2FaxjuDaiorkuIaSio2b3Zb9FtXXUrNOzn%2F%2Bqrs3PKl0NlggOIB779KFO7nVKYavguiprKdp4ZSSxNFdQ2Ny0W4akuHIwAMWeCJtEvVvy6M1iE3a4cJhltimI%2F7Fo0EuSIffvgJNhjY4JQ1X5%2FglCn4Kk548fBxIU0Dya8rn%2BYMTp4bD0nAWnDxLZ0R7uqkhbEBWLX6HC6msa23tP4ZJ54kS1HIwHWvMnvDn%2FvzacT3YRsTDAiWGhQ%2FDls64xuB%2Bny85w5RyfEMP2cj5IB1xNMFm18nk%2BqTOU5wxIZmLGJgVIuHsIxEmfAYE9%2BONczXbhKf0SrCWlx8oCkgwSDFz9RkVwTpoPYvtC%2BFTy4%2FD46NFOLejALkWImZCAloA0X6DiUlzFtLi8Nl3Yy0NmGK1SfKHlCIkneMOYACr7WDagOEhuiMBhzj4OqWTsN1cPhFWYmeFIiDCEwqoGRfFJHNxV94CVTF5xjLlaGiVpiypjaCOmlu88m9NUBNE1WXWzB477GaK0b7hbu%2FrbtGmHi4BydFkdgbvQ034Ovym4riVP6mo4vdPr30VFqKUe1E%2F3IwQQBq4IF8t4Kln9%2B9SQ%2FbWJAVpz5s3tn9Ab94YJWKHtj%2FwUL5NjqC5%2B2YsabC%2BMJSuxMAGOqUB8U8rEIJK%2FJUFDF%2FQy9J%2BFOR6kjrbpWDUiiDvlEJm65ehJiBNV8kwiT8P%2Fc3cHeOyMdluQOpFHLmpOKxFr05aPD7BDY0i7m%2FdoRzkJIGgcKhzG8rusOY%2FeaMpn%2BO6rsYngVkr4cmHcXTU9ZamWUBcKlqJp8NDg%2BfRBHP%2BNXvSkABRTK1ca1Yxyidp1hK7XkuVvk2f%2F6SK51Xaa%2BeGLa51PJBVCOF3&X-Amz-Signature=f89d3c80984624e43ff3602fad71ad9facf77a17e9751bff3f40036b65b3cbfa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
