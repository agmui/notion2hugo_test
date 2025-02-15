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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPOUVT57%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD2Wv%2BUjmHekyYfXhHymXNfKIDyii17JoCj1KM%2BRMmQwAIhANUSnoOWV%2BAbLII2z%2B1ITG5VSzTGMepA8%2B94RwaVq1NgKv8DCE0QABoMNjM3NDIzMTgzODA1Igx%2FFoKqFci7FyORmykq3AMWwBU6MYBxbUo9ieQlrLBgzFQpEtwTEpTB0qjfPf0bCQ8SvLTiSGL2aMQTwnjxzG9INzb%2BSp7qHMcsyYTUA0vGUzLlaLcH3tPZLACsgTRf1vTLSQnP65nmd3wSy3olVKx1AZbQolQy3lagepMLsiQWonatPA12vH%2F%2BC6gBPT9Eh1Aina6hC%2BXbtFex3oTd50Jfl038yJY5viwQtLFlokeA5MxnOlemj3PWSWyoqdVX%2FB8cjUCW1qfaacIYrrZOctu7%2FWK%2Bnxn4AkRGzPWHmlEZb8L2HRjmt5glqoe4fyvbi6XO3KHEnLzVHnrZQFVV3DityDpKU4KJgb9mP5rZ50vGojpoPSsna97yGlZa530TRxUiz7wVFu9u7HEX%2BnmC1s%2Fde74AJtXv5%2BRI%2BNLCu7TKCRpINIRwv5SQvebGPAJtx%2BiNsf2EU67ZYco40MdiAihpSh2oRXUXoFgFX%2Fs6L4G12WdpXph%2BEB9szMncdQn%2BxT%2FmtohDHutWK%2Fou2QOH8OA%2Bi14O%2FC%2FdxZp0c0aR5diirKWOCW2LM9vmPMJ6oDQqHEkbYT8qC3PFRUJDFd9ZX9ykoe2VFJw3HcHllbpkg9mJRWYSlD0PEEE%2B86cpOXCZUhLimRxrz6jTBv9CxzCN2cO9BjqkAR6KRhdL6TapSGvokSf55jh7tCCqvlF2yuc48cq%2BALE%2FB0NSX84682mpL2ahwpeLx41gX1GkAQ7o4yWEsMYW8cysx1C%2BfPAuafi%2BFMZWKf1OKAiqmY8hyUbBS%2BmV6v4rsgvwZ18oSeG3HMBtYHw4pyiwO33%2B37vfhxBwNUBaSXakO5myqTclCVuz7edLQnXVO4hAsgnQD4iCNtlsZVmX250V5DCN&X-Amz-Signature=d6ddbd1f2f5c139c5fe911fbcad1579e13593c575cf808e89fe7092fef582cb9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPOUVT57%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD2Wv%2BUjmHekyYfXhHymXNfKIDyii17JoCj1KM%2BRMmQwAIhANUSnoOWV%2BAbLII2z%2B1ITG5VSzTGMepA8%2B94RwaVq1NgKv8DCE0QABoMNjM3NDIzMTgzODA1Igx%2FFoKqFci7FyORmykq3AMWwBU6MYBxbUo9ieQlrLBgzFQpEtwTEpTB0qjfPf0bCQ8SvLTiSGL2aMQTwnjxzG9INzb%2BSp7qHMcsyYTUA0vGUzLlaLcH3tPZLACsgTRf1vTLSQnP65nmd3wSy3olVKx1AZbQolQy3lagepMLsiQWonatPA12vH%2F%2BC6gBPT9Eh1Aina6hC%2BXbtFex3oTd50Jfl038yJY5viwQtLFlokeA5MxnOlemj3PWSWyoqdVX%2FB8cjUCW1qfaacIYrrZOctu7%2FWK%2Bnxn4AkRGzPWHmlEZb8L2HRjmt5glqoe4fyvbi6XO3KHEnLzVHnrZQFVV3DityDpKU4KJgb9mP5rZ50vGojpoPSsna97yGlZa530TRxUiz7wVFu9u7HEX%2BnmC1s%2Fde74AJtXv5%2BRI%2BNLCu7TKCRpINIRwv5SQvebGPAJtx%2BiNsf2EU67ZYco40MdiAihpSh2oRXUXoFgFX%2Fs6L4G12WdpXph%2BEB9szMncdQn%2BxT%2FmtohDHutWK%2Fou2QOH8OA%2Bi14O%2FC%2FdxZp0c0aR5diirKWOCW2LM9vmPMJ6oDQqHEkbYT8qC3PFRUJDFd9ZX9ykoe2VFJw3HcHllbpkg9mJRWYSlD0PEEE%2B86cpOXCZUhLimRxrz6jTBv9CxzCN2cO9BjqkAR6KRhdL6TapSGvokSf55jh7tCCqvlF2yuc48cq%2BALE%2FB0NSX84682mpL2ahwpeLx41gX1GkAQ7o4yWEsMYW8cysx1C%2BfPAuafi%2BFMZWKf1OKAiqmY8hyUbBS%2BmV6v4rsgvwZ18oSeG3HMBtYHw4pyiwO33%2B37vfhxBwNUBaSXakO5myqTclCVuz7edLQnXVO4hAsgnQD4iCNtlsZVmX250V5DCN&X-Amz-Signature=a362c53de358d757a99cb6dc73e43d1aa4ed15e644108dc9352a2adfeb1be101&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPA6AXSK%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCZc8vsYoa%2BIQ82QAv3nmiKAtyDtqX%2Fi0gZWH7bfr%2BjAgIhAO6gxnJ27ACnaqM5Pf5cegx%2FpeyzpyC0U4QdPWhj7wV6Kv8DCE0QABoMNjM3NDIzMTgzODA1Igyv2KuQnoLWIHXSXcAq3AMfXWqghxEgDP6BsCvd1iAIaUDPWo50WzgI5OQRZ7UEi%2BKDEhC96SVQaFf6bz78a69zXw8xUFfNzggBp%2FYxPSbre3IrpQ7VmabIgHWqJDXZF0rVsevy6gQM02uqtWNNSBcn%2FUqgrm%2FRU6jZty0s%2FaKDSH4PbcD8%2BCvPpkb1xDOt7OokDwugZO0hoAzkNGPB2f3cI71qvbBOWRmdSd39g7O8rq6VTKVAbKlTpqv0CGlNpDLyuHeZgyW8qNr71kRALzjbgC4d6ZrGicgSdZgELbFduA9k6S6thuR9l%2F7B9%2BB7BJe3FP96Z6Xp7NJG02yLFN4e7UEB%2B4%2FPa4YpMzpdVftUTELsMce71xpYyPj2djzAre0ZvwoJg%2BGqhc5arprh%2BM2o1PqXUOsEVxUHwpSiMIfHH4tv7O6mlNlosSiNGrM4vSpmbJsYrF5C4bb4NuejjlOSsU%2FPTmvNXfZGOO3ROflaodATtBlzYjaxV%2FHn5QraZ1BM2sn1B34igqj3BwUMEtVoC6MvBAeQOoAN6TIGLXBAzlc10qhIYZuxhiO45u1NCmBjAOG7aJuqsCotyGvS60Xof%2BulTSJlxuFzIZCQiO38XCEfX3hIBXXY2h0CoX%2BgxNpxDjWZRk09oZtDTTCe2cO9BjqkAVNQ%2BQDK6k8dcyCd%2FyxQK58OAAFjmVHVZGo5oQj6wvTugPE8gcoGAwyuXxXf9OYtMNqQJWef0StfawiPK8c385SpiID1wZfEm7q9Q6IF7UQRgT8SiCx5vDTs78sETwyEkiXFdEjqQJ9LER2SCZQ2LpCgx7zbWNVeEeAU1jcAH3SvTixdl%2B1fjklWA%2BuOvFfBy9Zd%2BN%2Ft0CJTFn2rFv6sD4WyNJTR&X-Amz-Signature=c0fe3241e4d4478cc902afde6b3c9a2a95d243c6f4ea79caadd03992f1d20c16&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466564W556S%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIE6QbxhVWJejTg%2BLhwi5p1hMbdOi4%2BM1CFLN%2B5JotyLkAiBVm4hidbVnQwVddCvo5uLhwT4Y5ipMevN1KhX%2BIZVVsir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMK7HBcswjyKb%2Fx76yKtwDSg1KFoXiCRXyJM6Mw3VrRm712pSKXXDjUh3rCu3sqPysC2w4ETV66KU%2FN636fHPDadYG3wYY2hP0U2Vsa3VUT0wgJNu76bzKbzX6uPT1wu0q21R1Jmnza%2FgNT1p2uTc%2Fz2TrdAEmQhg4p32ayOPKUDJw0EPdHHCsicj2c2neZ1itlziismWQu5XPhjInQ%2BTGG6HoltlCpX3%2BiX386yK0sLuuJqYWXbFYCFss%2Bgm3ZaROIrHX00hOmZ0tDzciFgsdDwNes%2B%2FT96%2FdUV3d%2Fp6tJ%2FVqPagFNEs3mOvmngDgveVigGAz3Aaw35xGNYBcyZl8bhKtbN56j5VFc0OrRGbzVsU%2Fy8AkXjTbBKmsjVN9qZBI0%2B0zYhS64mmnKrGfSmu49O%2BGK6rtGep5NojrCdA6S%2FPx64YQLtT47WEemrlZem%2F6vJrWwXk9EwVJd6LikLOHnTCtO2bBaNfdcyd5AcVj0lq%2FhGQXosQFYk4saajfmtZhaFgc2N5Oauw%2BsVgH61E4uk5HxvG3h67LP8XdK60jCqcX%2BTJrUfsdP4pP56RynzPyLIeZqcbp3dgEYDP1AzqQWlul9V4j1yWdqeqAEQHJD8VpYlpGG0MeDHiKj7Bi5a1ZZi7ARe4wZ2MqIlkwjdnDvQY6pgEAw%2BsZ0o8IPxwKlO2nE4XYMfwwMyL9JzpDQwJHVbx0vDTlmMBdBa9Rb5HaGVQmyp60%2BLJFB3tOASPe%2Ffo6u%2B8c3GKhU1NlyHUARTujcVxQB4WN6u7p%2BrfIBh7ghY%2FDOZ0Ybglli6cxjVTSVZW8kDDueC4PgQDlUfJooqyE9KZDPsq2MG3H3Jz%2FPMXnBcvyFR9KeU8MG4XYJVmIypD8VtRWmWSGyGH5&X-Amz-Signature=ab8a39e907e4187b8d6462c8072cbf71ed30f9c6e344fd2e26a5117baf282ab4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPOUVT57%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD2Wv%2BUjmHekyYfXhHymXNfKIDyii17JoCj1KM%2BRMmQwAIhANUSnoOWV%2BAbLII2z%2B1ITG5VSzTGMepA8%2B94RwaVq1NgKv8DCE0QABoMNjM3NDIzMTgzODA1Igx%2FFoKqFci7FyORmykq3AMWwBU6MYBxbUo9ieQlrLBgzFQpEtwTEpTB0qjfPf0bCQ8SvLTiSGL2aMQTwnjxzG9INzb%2BSp7qHMcsyYTUA0vGUzLlaLcH3tPZLACsgTRf1vTLSQnP65nmd3wSy3olVKx1AZbQolQy3lagepMLsiQWonatPA12vH%2F%2BC6gBPT9Eh1Aina6hC%2BXbtFex3oTd50Jfl038yJY5viwQtLFlokeA5MxnOlemj3PWSWyoqdVX%2FB8cjUCW1qfaacIYrrZOctu7%2FWK%2Bnxn4AkRGzPWHmlEZb8L2HRjmt5glqoe4fyvbi6XO3KHEnLzVHnrZQFVV3DityDpKU4KJgb9mP5rZ50vGojpoPSsna97yGlZa530TRxUiz7wVFu9u7HEX%2BnmC1s%2Fde74AJtXv5%2BRI%2BNLCu7TKCRpINIRwv5SQvebGPAJtx%2BiNsf2EU67ZYco40MdiAihpSh2oRXUXoFgFX%2Fs6L4G12WdpXph%2BEB9szMncdQn%2BxT%2FmtohDHutWK%2Fou2QOH8OA%2Bi14O%2FC%2FdxZp0c0aR5diirKWOCW2LM9vmPMJ6oDQqHEkbYT8qC3PFRUJDFd9ZX9ykoe2VFJw3HcHllbpkg9mJRWYSlD0PEEE%2B86cpOXCZUhLimRxrz6jTBv9CxzCN2cO9BjqkAR6KRhdL6TapSGvokSf55jh7tCCqvlF2yuc48cq%2BALE%2FB0NSX84682mpL2ahwpeLx41gX1GkAQ7o4yWEsMYW8cysx1C%2BfPAuafi%2BFMZWKf1OKAiqmY8hyUbBS%2BmV6v4rsgvwZ18oSeG3HMBtYHw4pyiwO33%2B37vfhxBwNUBaSXakO5myqTclCVuz7edLQnXVO4hAsgnQD4iCNtlsZVmX250V5DCN&X-Amz-Signature=95d7f7ef11d7b5521126decbf73f3f0bad71bf3c62ee847884d5c4444b12712a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
