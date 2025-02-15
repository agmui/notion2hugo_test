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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOE2KSFX%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCWJQ50LPLNFpH%2FiYABei6iU2kNbBNdJX13s6c91aAKIwIhALjhAWujK9rzYnTtV772s8K4L8HI%2Blah6MiCfke%2FFFJMKv8DCD8QABoMNjM3NDIzMTgzODA1IgxigIAxNHj8x3Wy5BUq3AMagIptyK6vk%2FmRDInEP4TLe4%2BPD9WkD5BcVmBxdiSftbya84y6NZQE8uSHfGwfFup%2FTgT5Pifvb9PQ2UFFE%2FSSVgtqLcvqk8rS3%2FpEzF4Md4u4qU2k01yLel%2FhXxAaVT7hv5fkDgkxMNz%2FtDPIwxW3YA6b5QAzlHYoscG0BYylUsgwWK19S69G7MMdGwpfjDlBU%2FW9ZkCSGYcmUhUrVaX59lT%2FNWbI%2Bby%2BejS5Aa6V4QRjfKdcUJ8Lfr3Q64Kuq8FWAYLyQq2bQWbjEzIZ%2FKE5lTnC4qtLpp9C5YgrKbzoRj8t4dg8ZW%2FqBSMDD0nZx1tpwDPfV5D06FxeYQpjgsOpQCYKH4MQRVcovZpOQP7DOgOYvvEL6Sx%2B4wlzMHaZ0yQupxLGlIB29zDSwY7dfuID4ozzuGlgs5WgC5gPFFMcveFFdmE9B4pNPt8z2TFnIQWulQLBXoqgA0DSZ0iHAt845IqsfmO%2F6xvlKTahPOoNhWWyEMCkthfmeuouU6qNnQKk5qAl4cEbbko3OqEbiUN06sEbj54EcD%2B09tDALmowr0HZSZIqBK6O%2FOTwiaNyEa7eqL2CCukixNgvPhQpznQOJlb4KHPPf48HI9iNlWKrN9jW%2Bi0Ca2%2FEk%2B66jTC%2FzMC9BjqkAfi%2FCn2ZZzSIzQDnEs%2B5g2jqLuQ%2FifINFQlgJd%2B4clMFQVDg%2FN2IOt9X1xploCtPy4mmrGyKKNqTF40WHXPCwlBLaw6HkDziur%2BJKGUlw%2BZBw%2BXDCaVVsygGNUVg9SnU5UUDfptu%2BTrv7kiJSNGYNYmvdZd5tgbEYMzVjQi5AWNQQ4qxqJ5MZVncXzvCDmoye2nHMFUYGCgfucUoD7dmGEVqSwri&X-Amz-Signature=b1743f4a8d0cae84ba2163a4deddf4f0322ae6ee27f132c1ea45c7135a28515d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOE2KSFX%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCWJQ50LPLNFpH%2FiYABei6iU2kNbBNdJX13s6c91aAKIwIhALjhAWujK9rzYnTtV772s8K4L8HI%2Blah6MiCfke%2FFFJMKv8DCD8QABoMNjM3NDIzMTgzODA1IgxigIAxNHj8x3Wy5BUq3AMagIptyK6vk%2FmRDInEP4TLe4%2BPD9WkD5BcVmBxdiSftbya84y6NZQE8uSHfGwfFup%2FTgT5Pifvb9PQ2UFFE%2FSSVgtqLcvqk8rS3%2FpEzF4Md4u4qU2k01yLel%2FhXxAaVT7hv5fkDgkxMNz%2FtDPIwxW3YA6b5QAzlHYoscG0BYylUsgwWK19S69G7MMdGwpfjDlBU%2FW9ZkCSGYcmUhUrVaX59lT%2FNWbI%2Bby%2BejS5Aa6V4QRjfKdcUJ8Lfr3Q64Kuq8FWAYLyQq2bQWbjEzIZ%2FKE5lTnC4qtLpp9C5YgrKbzoRj8t4dg8ZW%2FqBSMDD0nZx1tpwDPfV5D06FxeYQpjgsOpQCYKH4MQRVcovZpOQP7DOgOYvvEL6Sx%2B4wlzMHaZ0yQupxLGlIB29zDSwY7dfuID4ozzuGlgs5WgC5gPFFMcveFFdmE9B4pNPt8z2TFnIQWulQLBXoqgA0DSZ0iHAt845IqsfmO%2F6xvlKTahPOoNhWWyEMCkthfmeuouU6qNnQKk5qAl4cEbbko3OqEbiUN06sEbj54EcD%2B09tDALmowr0HZSZIqBK6O%2FOTwiaNyEa7eqL2CCukixNgvPhQpznQOJlb4KHPPf48HI9iNlWKrN9jW%2Bi0Ca2%2FEk%2B66jTC%2FzMC9BjqkAfi%2FCn2ZZzSIzQDnEs%2B5g2jqLuQ%2FifINFQlgJd%2B4clMFQVDg%2FN2IOt9X1xploCtPy4mmrGyKKNqTF40WHXPCwlBLaw6HkDziur%2BJKGUlw%2BZBw%2BXDCaVVsygGNUVg9SnU5UUDfptu%2BTrv7kiJSNGYNYmvdZd5tgbEYMzVjQi5AWNQQ4qxqJ5MZVncXzvCDmoye2nHMFUYGCgfucUoD7dmGEVqSwri&X-Amz-Signature=d97bb68c2484957c7f618641623a9344af92f5be1d180641833826cbb30f1cd2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666REJ5VGH%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIAuBzna%2FDe8T7%2BkrRggY3g%2FKVFliMLRNjKs%2FddXLeCnhAiEA%2F6%2BnoMj7nF1NrSLOQ%2BqRc4Jit6r6WRQVNVmLcLcGcJgq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDPqZtiTHgbd%2F9Ut7yrcA1MQJVckpkp8tDDIbpZtzRO7pjybdYpxGIMAN7bA9mx5i2MygByH78XKL1I5SXybMHHG3R9LKwmDeOFQl2sHyQhQbbIdScMl4oBoApDRTCBfqhkKZWCeGrFDwHvdv%2FJqhKQAY2%2F7zgkWt%2FVIymjf1Z5KNU1M2M%2Bp9mjdNg6DA91%2BW7ubBbrC2KDx1kHoMJ4N11vB7x9%2B%2BSRxEXmUSBed30lnZWzdWom5DfBhgrVmzM3uji6%2FC2X%2Bo1nbF0nF7e1MlkDlxvqbjlek1L7%2Fj6x3EdKZEE7RpqZw3P726fC%2FcjtaMyW%2FLKq3BNYKgLrSV7UoOjPMtL%2FIyY7OMyhZhXBkZpK38OZN8RaR9SrX6%2BcatmOap%2BG3OIQByIsBqqiGHZmugnembZSxbdWT3xU1RlTZtl0R8I5N4jZJq4hgdhmyxNqOI%2BjbLYg%2FevEQWvrurj0wU5FKuWogA0eEPsO2pyAQjllTIsaYQsMHIMnmDj2wRPA4%2B%2Bg7S%2BVJsT%2FkvHPCMRBClGFO9VcVAbV4sz1TOGNLbz7Lr3LjWT%2B6SCSlPuC3cN171jk%2FSYbEJCSXDuRhvdNsyf8mi3OC5Jlq8s0BauJGjzEnYsTNNgzg%2Fj0%2F%2FGi3JWhnaEWxgG1Z5h2JfrpUMMjMwL0GOqUBYJbl%2BEO2rFUbv0ExDLcXXwAbTw6aBPmVn%2BktkbiztKtqKPIuIuIfRQ6aVggm1LpbBUeXIQ6L5d5MQY76001UbiylBUHhN5ha%2BVaIo7p%2FXM2vmbk0JiWGBxqMpAsuQcL6gKkBhuURcYbKf%2FgPi2tkLeNvu36ayuktUcdLsED9FDl7HN0gXlNQc5gh%2F5fhNlXvHmwlfZb2EfYjKv%2Fce%2FkUYPN9PfMz&X-Amz-Signature=733ac15e6e8b2abda3dca346a7bb70d5d9cef4e4298e1d1f4ff1e0d999182c80&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MHRW3SW%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIE58QO%2BabLLZ8YJtYNC610VmypqdLjZ6HxtfiEs2fG38AiBgXLIZu%2BIi1mPnAUVYEfcVP4LlXBhXz16EaqPx6RJPFir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMh16IfCeJD8UciPqPKtwDiDhiW75NF0M%2BYQGYQaxtI3ssSXmYGcEZop3orHaJKTlftEsjLVMckEqLrWAerZEE7Dzts3RTcFQQnVsKtAHm1101tfJRLeUiFS78xa77FB%2FK%2BXGLl03KqfcBKsIKjU8b49%2BZVM5iv5Zc0yP7LCS7WYqYDp63RHJgVBPO69S8oswkrroogSgopbmBSMZ9qMV6lK%2B5C9WX20CJNVtStTTkA5yqh8nopizBmtw7Q%2Bj5Q9NGX6BcwxrwuwHIfNoz%2BSaDfLDokKV9Mr69R8VmRURzlacUWJxE2k5MHlEkud33QUg0ZiTB0XyWskUzdy53HpO5XjV6hId%2BwVeYfjxp54wRYiTw30XfyqVxfrgs4c68PlvwcGfWA%2B09FVV%2FrFaF1aBZ8aZXLkX%2Fovtqczj6eREv%2FEdApyDa7BWi%2F%2BJnVB2gHNTTvzDFu3ACV59vIyLEFLtxfqjsRWyrSc1TWNzm8h5Dve3MHXe9sGUFqgTfqwebrT%2Brz6cJa8oEHeY1YW21Ezdhynod4Ko5vXUibcwCLhfnO81LDT%2Bwmg5cBPp2Cd2%2FbNTe4XXdXH6FNpWcsAnC9ZfUS3i1z%2Ffv2s%2BurPscJkMMZpqH50ROAxT%2FvlYVjir3hsGmihuavvsyHPWkYrAw5szAvQY6pgG9uTIqTF8Nb3e6%2FMNoUiro95zzf3KrViPRMsi1vBJvJFPbcp8i3rrsbCW7WTfEBsN6Ms3nnHONGqRzNGosMw5rHyNBlUsDe2Jn2b1BbFvIqL4lCopMSF7cKRlZ3lACC3mg8bwB8eL6k78gkC2wyl0%2FVPHAsxIKwxhL6EOA24hczK5TBIt0hLEndudnbntuM8lQIgOVqOiOtEXYj6YdkOPGOQZksphL&X-Amz-Signature=9003558a318ac23e350b18d412fc6522beb4524c3829afee38f4cc68a9eacfd8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOE2KSFX%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCWJQ50LPLNFpH%2FiYABei6iU2kNbBNdJX13s6c91aAKIwIhALjhAWujK9rzYnTtV772s8K4L8HI%2Blah6MiCfke%2FFFJMKv8DCD8QABoMNjM3NDIzMTgzODA1IgxigIAxNHj8x3Wy5BUq3AMagIptyK6vk%2FmRDInEP4TLe4%2BPD9WkD5BcVmBxdiSftbya84y6NZQE8uSHfGwfFup%2FTgT5Pifvb9PQ2UFFE%2FSSVgtqLcvqk8rS3%2FpEzF4Md4u4qU2k01yLel%2FhXxAaVT7hv5fkDgkxMNz%2FtDPIwxW3YA6b5QAzlHYoscG0BYylUsgwWK19S69G7MMdGwpfjDlBU%2FW9ZkCSGYcmUhUrVaX59lT%2FNWbI%2Bby%2BejS5Aa6V4QRjfKdcUJ8Lfr3Q64Kuq8FWAYLyQq2bQWbjEzIZ%2FKE5lTnC4qtLpp9C5YgrKbzoRj8t4dg8ZW%2FqBSMDD0nZx1tpwDPfV5D06FxeYQpjgsOpQCYKH4MQRVcovZpOQP7DOgOYvvEL6Sx%2B4wlzMHaZ0yQupxLGlIB29zDSwY7dfuID4ozzuGlgs5WgC5gPFFMcveFFdmE9B4pNPt8z2TFnIQWulQLBXoqgA0DSZ0iHAt845IqsfmO%2F6xvlKTahPOoNhWWyEMCkthfmeuouU6qNnQKk5qAl4cEbbko3OqEbiUN06sEbj54EcD%2B09tDALmowr0HZSZIqBK6O%2FOTwiaNyEa7eqL2CCukixNgvPhQpznQOJlb4KHPPf48HI9iNlWKrN9jW%2Bi0Ca2%2FEk%2B66jTC%2FzMC9BjqkAfi%2FCn2ZZzSIzQDnEs%2B5g2jqLuQ%2FifINFQlgJd%2B4clMFQVDg%2FN2IOt9X1xploCtPy4mmrGyKKNqTF40WHXPCwlBLaw6HkDziur%2BJKGUlw%2BZBw%2BXDCaVVsygGNUVg9SnU5UUDfptu%2BTrv7kiJSNGYNYmvdZd5tgbEYMzVjQi5AWNQQ4qxqJ5MZVncXzvCDmoye2nHMFUYGCgfucUoD7dmGEVqSwri&X-Amz-Signature=301067babed7c51749c3164b5f1353908c000d466256e0ff2e5418b8f4c93a89&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
