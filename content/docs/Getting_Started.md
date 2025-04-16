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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH55WVSY%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgl3m7qRb%2BTlizngObZxRtDcpmdrdJM%2B47UHCtkR8jRgIhAImiBmxFu7LekErQTEsnO92n9Yt2dJ3mezZc5Ze5YkFBKv8DCEkQABoMNjM3NDIzMTgzODA1IgygQNIZ%2FOu%2FP%2BkZo3Mq3AMWOPQfwwh%2F%2BLzZ6hEYpQFZR4u2IJjddFBzGQw6xBdklsM5%2BPsgdyQ68xY7iG4tM936CAL7QhG%2FW7CkoJKTEumXk%2FBvv2ue79auYoDGU8UVf3nDcLagdYcZsovDSnLlrqruhTqKZV5ckcD2U91%2FHGzwuoZNeSbd4oSIL%2BX9zGPH%2B%2FEnwXZIFSraPYHkyWs23eYmUPfdlYYdTNaSBM6zseUKu2r%2FbForrydvGFDJYqvElUIEbT1xQNzcCP1VeYGdvwt8AmlCsG8KhmEmWn4k6aC4GWKWeY3lazz%2B4H0aNmts0p%2FdgaTqlgRbzglkftWCbJEGpNnkS9MRs%2Be4c1TJkgzjn92753l7UT%2BmDU%2FM7a643sxJEBt1HUyJOMZKmtrnCSU%2FmOfRb8IPBoqGh9luYr3b8htkjNCN4LykcqHFM5MH98tQ%2FP86jb%2BwNW8Eb8sZsxrv7LCJ74zZohxlNvG88syJFJNIQx%2FhFwBuK5qArELZWRwY%2BbMim5wDS4qduHaE1d5%2BmAUmhKxt5LkCVksJ4SmQZ2WaaJQ9CIG2PH1MzLdtWYKDiAIgHYNSzboVMXUrHEL%2BMmVcC6RxTUiTKnssR0uxVyco30VCupU36rZRDMUAb4x5PuZiiZmY1Zd%2FCzDuqv%2B%2FBjqkAcjFoh4kSqdRMRG0mzJNwmzqhG4BczS8GeqzTU09vVq03K9ZIu3m%2F4T2pfVuKHZG2WuCXnn2ifH5BKpkOX5ae5gvyqEn82DYDI1A9XjkR9SCDz6RlyIrP4qIfanKuoSX6UZOcRjjpiQH%2FqXMFg4zKa2c8yQc02%2FMZ%2FDIgZliMxnsGRCAOGSRiaPdS8r4vwigeSXZeZHz6F5V2cGkjMNo%2BdXeyxJ0&X-Amz-Signature=2f6d2f773c1a08e9ac4f1c2914e455ad0ae3da8af9c71fbd603850200fa3d29f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH55WVSY%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgl3m7qRb%2BTlizngObZxRtDcpmdrdJM%2B47UHCtkR8jRgIhAImiBmxFu7LekErQTEsnO92n9Yt2dJ3mezZc5Ze5YkFBKv8DCEkQABoMNjM3NDIzMTgzODA1IgygQNIZ%2FOu%2FP%2BkZo3Mq3AMWOPQfwwh%2F%2BLzZ6hEYpQFZR4u2IJjddFBzGQw6xBdklsM5%2BPsgdyQ68xY7iG4tM936CAL7QhG%2FW7CkoJKTEumXk%2FBvv2ue79auYoDGU8UVf3nDcLagdYcZsovDSnLlrqruhTqKZV5ckcD2U91%2FHGzwuoZNeSbd4oSIL%2BX9zGPH%2B%2FEnwXZIFSraPYHkyWs23eYmUPfdlYYdTNaSBM6zseUKu2r%2FbForrydvGFDJYqvElUIEbT1xQNzcCP1VeYGdvwt8AmlCsG8KhmEmWn4k6aC4GWKWeY3lazz%2B4H0aNmts0p%2FdgaTqlgRbzglkftWCbJEGpNnkS9MRs%2Be4c1TJkgzjn92753l7UT%2BmDU%2FM7a643sxJEBt1HUyJOMZKmtrnCSU%2FmOfRb8IPBoqGh9luYr3b8htkjNCN4LykcqHFM5MH98tQ%2FP86jb%2BwNW8Eb8sZsxrv7LCJ74zZohxlNvG88syJFJNIQx%2FhFwBuK5qArELZWRwY%2BbMim5wDS4qduHaE1d5%2BmAUmhKxt5LkCVksJ4SmQZ2WaaJQ9CIG2PH1MzLdtWYKDiAIgHYNSzboVMXUrHEL%2BMmVcC6RxTUiTKnssR0uxVyco30VCupU36rZRDMUAb4x5PuZiiZmY1Zd%2FCzDuqv%2B%2FBjqkAcjFoh4kSqdRMRG0mzJNwmzqhG4BczS8GeqzTU09vVq03K9ZIu3m%2F4T2pfVuKHZG2WuCXnn2ifH5BKpkOX5ae5gvyqEn82DYDI1A9XjkR9SCDz6RlyIrP4qIfanKuoSX6UZOcRjjpiQH%2FqXMFg4zKa2c8yQc02%2FMZ%2FDIgZliMxnsGRCAOGSRiaPdS8r4vwigeSXZeZHz6F5V2cGkjMNo%2BdXeyxJ0&X-Amz-Signature=b31a93d9a54808a4b71b79e404e4e0ea88517369f03cc1f6f71d3438faa7699d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSVYJUUY%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSd2tc0Dwl2zdZE9XPkTSYWKuhOlK6PI8OXm9%2BT4IDyAiBkmpfTuPDdM6X%2Fzb6sHXeCjfiqfinLfnm7NSATjZ0ycyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMbMR8y01EvJAHC7OrKtwDhGVqKtb8zo9m9JofXxXCwHknv%2BcO41h%2BAmEN3rmKGaBCeLPmU30gbOVOtZ6uhfEIhUHvqmbAhbsW9QbUa7iinCCSOtqFtNh7A9flKmCNz8Ro2PVqQIJ21%2Blba%2BMW4CPn3eJGhmb0f5JIC%2FcnedADy0DxZ4IL%2BiswIXERucd49QIlObgnH%2FqkOmBoPaNHlwS1FHgcCM8trZkQWlOQw%2FpNYj4nnE98y2u7tDG3EGRPjHXQY7QrY6q%2Fzd3f%2Bm7PcgS4QO33%2Fku9LjQc56A3qOC5Zor62m9Vahw81UxXi9RbwniJSlk5QDp8KN8YQJE2UpGQCedJS0fbmHCMdJd7UdjlPaJoLn9qHFM0gGDYe3%2B4F1ItFuTBhhrzYTFHZx%2FC9NC5pAALI26ty0RaKJPPNDRJnsUbU2sD2xd4qi4mJLyAHgg7pj7OBnWApRMyBP4sbEIhay5WRosZT5%2B2gJPWTnyUbXXIy6OxvWK09DfmkK0cX1qpIUihcyNrptKPhjD0Fd02yBURhrlU7pp%2FoTmIgS02e8ALFEY0HCiDXfz25qcUGF4eJVUg4Kbpl3lVBhr77pNdbuTM%2FqOsV0GlPRuw1dQgL%2BssqoYPkNb6iNaOMtFv7J5MG8Bkfl7nGERiy70w%2BMX%2FvwY6pgF66l3NWIFFSFN16oV4TRGjTETIjkTa6PI3OKglqxtsLgeZDyWiL3lRBqTHavjnu8Jlfr%2BmIZET3OU5QCrILwaM3olMy6S2UFBYy1VNNg1iqTZZEvnvsK0wgHykN4C2shfHr%2FoYXUe4V5iDRlxynJPwneZ4%2FSPLH3NHpIvLdk0qA5aXGaC5kFuNZe4CK8%2BTqU3RUe6O0p0Qo%2F3yG7HaIYPTn9h6rErT&X-Amz-Signature=67c19e34842a40ef69cff6291a22d4f33fb72f8d3d34af574c87efaa92093f9b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SYILBLU%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClB90%2FaMHbuX28SkplwrRIE%2FjwuL1WVIJBAnsdoCKPPAIhAOndHCcvbQIKZa3AS1OkrLjAu9OdOnLIGCF8vrz%2FZfSfKv8DCEoQABoMNjM3NDIzMTgzODA1IgzVZ6ymiyMGzE0xD70q3AMAVIbcGawIeXbtqyg6BrmZ9vDt%2FDvMtthCwsYN%2B8%2FGJyJptADAJNenC2VKwKjJST5gQGf9xyOUMwFoXZ8x0UPvfeOhtF%2Ba868GzRIlzBiBvDeQaCEtWv2YqR20ty%2B14Zq7xJ1tHu7wkfPCJZ%2FnfpowB%2F2Akt2upHLMx8vq0p4k2ryJcOyFmDqUfjF2MXhhyGxM7U5NwDG0RrQsfLkTIYM25FpodSNLhDrI2bxIKB8I76HyBVIYJY4KDvDxDD4CwW2kFg4ZDhhEkikOT6x5ricz5mhJaycTLyGKnMItrglK4%2FsZnpQaFlAyhUPOjez1f8Wctq%2FslUVAbHbrlFPoUFa3s74uP2hifVoFlGmUgIGrHV2ijHtJL8oYEocvFPJ9ePjbn5juxWIe%2FaIRmGNVukQK5KmeDrKIGuhWFltWAYr3mBlntiTgWTrAIC1ZXxMzC7qcVVl7%2BxJ42tBaztPWx%2BfAZSODsoSLIc01WHu5OjmY%2Fly4D%2BzkvZwJedK758FrPtPfBegUsMKk%2BfMbv8uaqC8m24PvFRTiCo6JrwhfvwrzpDK0uvXorQ7BEiCCG%2F07IluMchytNMoFv8ENcJREa1dzdGqoTZIOi4b5nplDPAfRVJU4jEi%2FqqNEf2H9mTCUxv%2B%2FBjqkAQCtMNf3GLkK3YcP3hu2A0HMkx%2FgW5UiFLkpbzzvmxQ5ezcymbgN1umuj18wBlILEyRxE5gdQIt46rKstuxiGQ%2BgMwrg%2Bx57hxLXYDeiyetIVzJgsimSlxkyvWMy4O3a7MOL%2Futq1luxE1gFpz9Djssydo8JM3ehhbtKLzATXBduyXca8xpavgXGRiMUGbVPpPTf%2BkUqPBhfypIRRJfCzYNjGh0W&X-Amz-Signature=4a5169819cb4a82ddc283f45f4d7aa833a3719600ac9039eb0f004dddae1989c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH55WVSY%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgl3m7qRb%2BTlizngObZxRtDcpmdrdJM%2B47UHCtkR8jRgIhAImiBmxFu7LekErQTEsnO92n9Yt2dJ3mezZc5Ze5YkFBKv8DCEkQABoMNjM3NDIzMTgzODA1IgygQNIZ%2FOu%2FP%2BkZo3Mq3AMWOPQfwwh%2F%2BLzZ6hEYpQFZR4u2IJjddFBzGQw6xBdklsM5%2BPsgdyQ68xY7iG4tM936CAL7QhG%2FW7CkoJKTEumXk%2FBvv2ue79auYoDGU8UVf3nDcLagdYcZsovDSnLlrqruhTqKZV5ckcD2U91%2FHGzwuoZNeSbd4oSIL%2BX9zGPH%2B%2FEnwXZIFSraPYHkyWs23eYmUPfdlYYdTNaSBM6zseUKu2r%2FbForrydvGFDJYqvElUIEbT1xQNzcCP1VeYGdvwt8AmlCsG8KhmEmWn4k6aC4GWKWeY3lazz%2B4H0aNmts0p%2FdgaTqlgRbzglkftWCbJEGpNnkS9MRs%2Be4c1TJkgzjn92753l7UT%2BmDU%2FM7a643sxJEBt1HUyJOMZKmtrnCSU%2FmOfRb8IPBoqGh9luYr3b8htkjNCN4LykcqHFM5MH98tQ%2FP86jb%2BwNW8Eb8sZsxrv7LCJ74zZohxlNvG88syJFJNIQx%2FhFwBuK5qArELZWRwY%2BbMim5wDS4qduHaE1d5%2BmAUmhKxt5LkCVksJ4SmQZ2WaaJQ9CIG2PH1MzLdtWYKDiAIgHYNSzboVMXUrHEL%2BMmVcC6RxTUiTKnssR0uxVyco30VCupU36rZRDMUAb4x5PuZiiZmY1Zd%2FCzDuqv%2B%2FBjqkAcjFoh4kSqdRMRG0mzJNwmzqhG4BczS8GeqzTU09vVq03K9ZIu3m%2F4T2pfVuKHZG2WuCXnn2ifH5BKpkOX5ae5gvyqEn82DYDI1A9XjkR9SCDz6RlyIrP4qIfanKuoSX6UZOcRjjpiQH%2FqXMFg4zKa2c8yQc02%2FMZ%2FDIgZliMxnsGRCAOGSRiaPdS8r4vwigeSXZeZHz6F5V2cGkjMNo%2BdXeyxJ0&X-Amz-Signature=882917d5c833f3340a982406226e2249ddcf3c749883f6300b4b7ebd66d4d3b7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
