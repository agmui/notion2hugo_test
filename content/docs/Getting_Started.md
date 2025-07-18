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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636X5SY5E%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEAr8ckV3gO4%2FfD0BxFkCSXs36wr6aca7u3bQINBnmkgAiBRQVxhu447v%2B%2FGSgRh6l3tp63laMGC6iW2mbYKEa7p%2ByqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYed4BkFsGkat%2FafqKtwDxdLqz%2BZ2I8P%2BChXCM%2BY9qoONwa%2BRbR10kGGzfS1iTT991H8FwJdfEOL%2BVmqBF0FLVXYSCj5E%2FRvNF5JnVJk5z6OiSu395at%2FQpCxVM54YHFTYIPVaaxnyWzpIQkMGGj8WaiF4p1SieWR2TGLlvh8Vk6CjMZoPQY%2F0OyhXPbJhICd%2B9qyhN34bHGn1qkrOSLyQpq3ioVGs95r5M9hXBQ6vxrt4pZ3nCIfkvxze3c%2BFj%2BFm0Ia5TxfXSWJ4VJ%2BJDnqjQGvjjlT9jdl%2B7urZCZiyjTJS0pnMUrjXV6OasCrkn6EGBVHkqjuRo%2FJdkOsD76bxp9BqfoHzDVaM4orPC1YIORAnCHlJhVHG%2FSXF0Vu%2BBC1GfCjqwHdgGCznx%2FGmfVqS5tcWHB0UpfwRtEYH7TfeKIKY7XTxp9IenrWqpl006UMWNdrJvB0%2Bk7djYYcPfs8QZYh1850ICO1iI%2FmaiYbNQseUMffMe81vF%2BPv%2FpMEcrY%2BEa62tCMD0QygX7JiYPywXNUZrvVAWFcZDBCvJT%2BoIvokOaHZpOtd%2B1hULWxqhvE9m3nKquQ1e9r1WdebBIzfb7lBVFcMCDjlsjIYTRkbtIelsMxaWtnCERKLtci8%2F6Y4AIxQUktlGGqS5UwkorrwwY6pgF%2BRAGs6ob4NY1ylG2W7dXYptUnjfVc6A7hqMGmpkVRunZrFnNpL0aJWJjKP9g54%2Fm%2FXDiqus2stL9UZr6Pto%2FIlFslP9aqYy7MzYdrAyxXoMv9CACjpULyf%2FoMNyVIhxtmGJqrUPm6DSOYInCQQC0ZPomeYBVqXidSXE5ARoUKwLM0uOj2eie14oqnzPMRyPp2ePOBFFAfsZuEE4Xze9HR7mjZnMlX&X-Amz-Signature=942c2b2f552fa20305b524ffc774f85a621604030b3914965f4de263eef2e448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636X5SY5E%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEAr8ckV3gO4%2FfD0BxFkCSXs36wr6aca7u3bQINBnmkgAiBRQVxhu447v%2B%2FGSgRh6l3tp63laMGC6iW2mbYKEa7p%2ByqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYed4BkFsGkat%2FafqKtwDxdLqz%2BZ2I8P%2BChXCM%2BY9qoONwa%2BRbR10kGGzfS1iTT991H8FwJdfEOL%2BVmqBF0FLVXYSCj5E%2FRvNF5JnVJk5z6OiSu395at%2FQpCxVM54YHFTYIPVaaxnyWzpIQkMGGj8WaiF4p1SieWR2TGLlvh8Vk6CjMZoPQY%2F0OyhXPbJhICd%2B9qyhN34bHGn1qkrOSLyQpq3ioVGs95r5M9hXBQ6vxrt4pZ3nCIfkvxze3c%2BFj%2BFm0Ia5TxfXSWJ4VJ%2BJDnqjQGvjjlT9jdl%2B7urZCZiyjTJS0pnMUrjXV6OasCrkn6EGBVHkqjuRo%2FJdkOsD76bxp9BqfoHzDVaM4orPC1YIORAnCHlJhVHG%2FSXF0Vu%2BBC1GfCjqwHdgGCznx%2FGmfVqS5tcWHB0UpfwRtEYH7TfeKIKY7XTxp9IenrWqpl006UMWNdrJvB0%2Bk7djYYcPfs8QZYh1850ICO1iI%2FmaiYbNQseUMffMe81vF%2BPv%2FpMEcrY%2BEa62tCMD0QygX7JiYPywXNUZrvVAWFcZDBCvJT%2BoIvokOaHZpOtd%2B1hULWxqhvE9m3nKquQ1e9r1WdebBIzfb7lBVFcMCDjlsjIYTRkbtIelsMxaWtnCERKLtci8%2F6Y4AIxQUktlGGqS5UwkorrwwY6pgF%2BRAGs6ob4NY1ylG2W7dXYptUnjfVc6A7hqMGmpkVRunZrFnNpL0aJWJjKP9g54%2Fm%2FXDiqus2stL9UZr6Pto%2FIlFslP9aqYy7MzYdrAyxXoMv9CACjpULyf%2FoMNyVIhxtmGJqrUPm6DSOYInCQQC0ZPomeYBVqXidSXE5ARoUKwLM0uOj2eie14oqnzPMRyPp2ePOBFFAfsZuEE4Xze9HR7mjZnMlX&X-Amz-Signature=ecd9d2f8d786669f5e7298b63f634fd67ad5ae572703d63d4b79810b8990a37b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636X5SY5E%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEAr8ckV3gO4%2FfD0BxFkCSXs36wr6aca7u3bQINBnmkgAiBRQVxhu447v%2B%2FGSgRh6l3tp63laMGC6iW2mbYKEa7p%2ByqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYed4BkFsGkat%2FafqKtwDxdLqz%2BZ2I8P%2BChXCM%2BY9qoONwa%2BRbR10kGGzfS1iTT991H8FwJdfEOL%2BVmqBF0FLVXYSCj5E%2FRvNF5JnVJk5z6OiSu395at%2FQpCxVM54YHFTYIPVaaxnyWzpIQkMGGj8WaiF4p1SieWR2TGLlvh8Vk6CjMZoPQY%2F0OyhXPbJhICd%2B9qyhN34bHGn1qkrOSLyQpq3ioVGs95r5M9hXBQ6vxrt4pZ3nCIfkvxze3c%2BFj%2BFm0Ia5TxfXSWJ4VJ%2BJDnqjQGvjjlT9jdl%2B7urZCZiyjTJS0pnMUrjXV6OasCrkn6EGBVHkqjuRo%2FJdkOsD76bxp9BqfoHzDVaM4orPC1YIORAnCHlJhVHG%2FSXF0Vu%2BBC1GfCjqwHdgGCznx%2FGmfVqS5tcWHB0UpfwRtEYH7TfeKIKY7XTxp9IenrWqpl006UMWNdrJvB0%2Bk7djYYcPfs8QZYh1850ICO1iI%2FmaiYbNQseUMffMe81vF%2BPv%2FpMEcrY%2BEa62tCMD0QygX7JiYPywXNUZrvVAWFcZDBCvJT%2BoIvokOaHZpOtd%2B1hULWxqhvE9m3nKquQ1e9r1WdebBIzfb7lBVFcMCDjlsjIYTRkbtIelsMxaWtnCERKLtci8%2F6Y4AIxQUktlGGqS5UwkorrwwY6pgF%2BRAGs6ob4NY1ylG2W7dXYptUnjfVc6A7hqMGmpkVRunZrFnNpL0aJWJjKP9g54%2Fm%2FXDiqus2stL9UZr6Pto%2FIlFslP9aqYy7MzYdrAyxXoMv9CACjpULyf%2FoMNyVIhxtmGJqrUPm6DSOYInCQQC0ZPomeYBVqXidSXE5ARoUKwLM0uOj2eie14oqnzPMRyPp2ePOBFFAfsZuEE4Xze9HR7mjZnMlX&X-Amz-Signature=e8962fa5c3466be5f62284bdbe1e0657c827e32e2a48b82f1c3e86f071742af5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XEJF47L%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQD4vry1UebVyuaZ9jAwKe21r9265EnfgevV4ztAcyga9wIhALFeHWRs0EE4k8aF5BwRQUqYT7TRCPCV55YR295l07M6KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5%2Fdgo%2FqLXqat6%2Fk0q3AN0Yf1PQxrNGhcWeVLt%2F0L91F4mxx6yxesD6xYL1p%2Bsqj6IM6F9Rdur60%2BW1wCC8XPNZ9INssfojOM363oSpg4iUomZbOP6%2BI4mzPlD0o57MNxtvQ3giib2vLf%2BTc3a3TVj5PfO947Cxl0i4CjbhcKifM402yZcwHh1DxWnZXfKSyTrSvbB4rD9iro4RzeYxQG9zF56vIDhEL%2BTbpoO6jLWdqoOBN8wHowOWttSZ3ggujvPi%2BkFb%2FEMNc5%2BXk2VnxD494ki5mDz55qm8iAKFkwL77Pp0l%2B%2BZbQpcm9kxZ7bDDKOEAcUNEmF1nL0LUuOXpQXeePYkdhkc7tbnvKl2ft4N2VAy3FStvtjz6axHgWKS0VW6L8eKLDw6Wt%2FAlNaz1BdxfzLKGKFyWiTtb43u1pNpNb0P0%2FZ3NdT3Ee242HB5mmayXUh%2BEYsDCmr54MjKSsj%2BHD04EAteV3NrVJoa%2FDtGWBk973MF0qnG6nHlizIwi4dot2HuhhJVZobMNR2s3GR1NPt7BfQiKLiukvorHxwWklhOoa7%2FMFF4HP6Db2hHs1NS1w13%2BAJ5fIjo9KguvPvIh29Lm%2B2nyKU%2Fg4N0N1ObQlFmrCzjkmjqyKXw%2B9yBcAr16yWXJ8jyKCtlTDTiuvDBjqkAXiAgOCTl9Zsz53l3ra3ZpRiFyDCM6EMVAI1WGPxg8m2hGUQXHhQQJOE07dUGzHo3rQ5HLqDx51Nlv43IBdnWMRzz2N5OdMiYA%2F1OcSqRIIwgkg%2Fd9XHW1AZTny9zK%2FEnQEcuDtA6kgAKII2JgI1ESdjwkVcSq%2B6uRt8GmGchursSjD00ugZvCMFBqf8JqwodAy%2F%2BXA3bIIz1BlNBjTtyt4NQqCC&X-Amz-Signature=0f6dab922eb5c0e5a9e3161527a762e9a14023c538da2b0afcea7de1e9c18492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPXZFJX5%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDT3mWl5lArLaAnp94FFjhgHY9ffE9xJQY3B0wSLt46tQIhAMTP%2B3HLAN2QlKyyhG86wV%2FyEZT0nwkYvD9PEJBOT7qsKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfQuE6GbtmwFPDmGQq3AONXK4C%2FXFC2Cmwoais1Urq44iiwKV1HTpMq6bkRK0vAc43CBNPIGvhCGKwxSuyK7oHf%2BHOk1zx7aLKR2jqvLwooA6SKE4lXK1UXYJzyebnsOJXUv1pMsmCWexfRE253jAS%2BWZci9CmcA8PV1X7kRVeRyEsP8RAQMFWnPbRNl7zBIMuiisPIdrADOFE8fFQgoatkkKssdLhQecNerlL6SD1fYUTVoiDLTlo%2F16yJH%2FOWrd5DbrBQ7xpNI5NfzcaaztVge3Zih%2FUsfW6oxPaP7vWyRD8dECLaRVl4sAWCe0ayFS9MHqA8XGEtAfP1hWml0v6%2FXxXtekFRJO3a8XzdoYwJvmIijSPRX%2FTSddArNI6bBW3ZQGX%2F9%2Bz0BV19MPBAAo6UVfQaDFLjgXG06SOUhffTXXDPNEeeZ8iNIX1vA71hVIB7xuoP1guQGOp%2FC3OkW%2BPNK7ZNv6Hv4eMLAiZ8jZ7VlkJsPZRN8%2F4oLD30n2M70KUKoE8KxCR%2BRdn4S7GU1tSbIsY2Rby6sHCqfei57IwsFaw1iCIbC%2Fmfrmphp0Wio4SP%2B2nuOInTA8Hc%2BqzCo5v6Snkwo4n5b5MHR1djmCHGCCnfN%2B5nCsQqv1doaP4w7hIzaCmyl%2FZpSAAUTC7iuvDBjqkATTES0nSJM%2B%2Bp5XzYM00KoBBy2D6xskosjyBLvYKY6A2LfLOWSIacfw8CLQYM5uPIRg9V%2BemdUJ%2Fp8cPeEK6sAEwhgIN6WTwahqVH2n5MLYLy8Tk2dNHy91brvBmiJezJi%2BCO3WUaa9Xz2CtX3awDI15SWv%2FaWxXe1W%2Fi%2FYaylP78fbsRaBKsNArmB3%2BnFpNvien050ZRUTNclhwZb1KDLdcYWEb&X-Amz-Signature=9e82837226308cf9d81587bf18fe5c7013dbf47bb7ba79fdbb6bc1823b3b289d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636X5SY5E%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEAr8ckV3gO4%2FfD0BxFkCSXs36wr6aca7u3bQINBnmkgAiBRQVxhu447v%2B%2FGSgRh6l3tp63laMGC6iW2mbYKEa7p%2ByqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYed4BkFsGkat%2FafqKtwDxdLqz%2BZ2I8P%2BChXCM%2BY9qoONwa%2BRbR10kGGzfS1iTT991H8FwJdfEOL%2BVmqBF0FLVXYSCj5E%2FRvNF5JnVJk5z6OiSu395at%2FQpCxVM54YHFTYIPVaaxnyWzpIQkMGGj8WaiF4p1SieWR2TGLlvh8Vk6CjMZoPQY%2F0OyhXPbJhICd%2B9qyhN34bHGn1qkrOSLyQpq3ioVGs95r5M9hXBQ6vxrt4pZ3nCIfkvxze3c%2BFj%2BFm0Ia5TxfXSWJ4VJ%2BJDnqjQGvjjlT9jdl%2B7urZCZiyjTJS0pnMUrjXV6OasCrkn6EGBVHkqjuRo%2FJdkOsD76bxp9BqfoHzDVaM4orPC1YIORAnCHlJhVHG%2FSXF0Vu%2BBC1GfCjqwHdgGCznx%2FGmfVqS5tcWHB0UpfwRtEYH7TfeKIKY7XTxp9IenrWqpl006UMWNdrJvB0%2Bk7djYYcPfs8QZYh1850ICO1iI%2FmaiYbNQseUMffMe81vF%2BPv%2FpMEcrY%2BEa62tCMD0QygX7JiYPywXNUZrvVAWFcZDBCvJT%2BoIvokOaHZpOtd%2B1hULWxqhvE9m3nKquQ1e9r1WdebBIzfb7lBVFcMCDjlsjIYTRkbtIelsMxaWtnCERKLtci8%2F6Y4AIxQUktlGGqS5UwkorrwwY6pgF%2BRAGs6ob4NY1ylG2W7dXYptUnjfVc6A7hqMGmpkVRunZrFnNpL0aJWJjKP9g54%2Fm%2FXDiqus2stL9UZr6Pto%2FIlFslP9aqYy7MzYdrAyxXoMv9CACjpULyf%2FoMNyVIhxtmGJqrUPm6DSOYInCQQC0ZPomeYBVqXidSXE5ARoUKwLM0uOj2eie14oqnzPMRyPp2ePOBFFAfsZuEE4Xze9HR7mjZnMlX&X-Amz-Signature=f790ea4878a2c49bd6597f74a81d7f23f84f2593bc80666e560ee002165bd5f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
