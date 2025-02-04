---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "null/Getting_Started.md"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624CUZQU4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCZ6ToklKtWat5wYTRbeTjjkGTlqsi79CmhEpb2%2BSasxQIgO6nsscD3jxt7%2F8IJyHXk4aNclHA7j288oZPCA9sEecEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKbac%2Fv0rVmBO1VakircA5QRM4V9r47G7tBMsXIgnQwvYnRSLZ34LjcsRycrfQPyqZyU1uFGf3d43%2FKX3%2FRKAZplSiXAK2ypu%2FI3p7yyRCCnQ7Svky0c6cpqvAhzKWEkoiri45rzPTSuuM6oqOWpldSOfmvFwT0S9MV2PUb3AvUk%2BtvJHo1GzFhn%2Bw8u4zKFQnhHxUOdaFaD2b3oKi%2BcYSTriB9eAn%2BB1m2jPEpJ4u4GD4QUMfeicg7S%2BSss1bttACqMnVvDYc0irzipqotiaCRO3FMrCyI9hnYUifV5V66amL8RyOHpu0wi%2Bw2jseM%2FDwBw%2B3e3BD3%2FRM606BsEYOtmjrB69CSvDwyrC6O%2FT0EnVWGk0Bs2RrdQJHq718RqOpwdUDgRtlARwMSCGC0jv%2Fjs%2FSfRk9SAYNc3SjeT%2FKc7wnVda4%2FjqMjEulpXRBESroAof6VauKrFav1cQDArwiLqarwF59wuYQ3R%2FSPqenbC3q1KeGEHIQ5%2FPc%2FW8TOG%2FEOfhkSL7DpK7UdzVhqUsBOVoCejFYafIDkIV8ySR%2Bw1siEoCs8WayXrTxvnwbxnnQaBUIqpiKuN%2BrMZGkNFTTlX9Y%2FRvRxR%2BRk%2FoPxQfR2mPuBPkffywKPMD2myYtIfbOi3qV1CZZJktmweMKCVir0GOqUBl7sbZ%2BmRLB40qm13QGS2KxAH%2F4w4be2ndzB7kiZWLEAiZrmQ7UQW4ma9KEJryfrvPXEEJPnfdrz9HvDm1lbFuYq8FOq3WD2OIwPfg9uQXIzYTBzpUMebhEOZWx8%2Btud0YC77Z%2FDDNYSI%2FxMEDcecM5KltIOdyPy146oVQLhCV6IPdGb0HGA%2FtBVSCe5nZVycftQB5kTptSw9lewZIC66vXIMhVDT&X-Amz-Signature=429dbbf8853d10b265eafdc7a45f2b3dd2f44cc1b270dac883bc847e044d02f1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624CUZQU4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCZ6ToklKtWat5wYTRbeTjjkGTlqsi79CmhEpb2%2BSasxQIgO6nsscD3jxt7%2F8IJyHXk4aNclHA7j288oZPCA9sEecEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKbac%2Fv0rVmBO1VakircA5QRM4V9r47G7tBMsXIgnQwvYnRSLZ34LjcsRycrfQPyqZyU1uFGf3d43%2FKX3%2FRKAZplSiXAK2ypu%2FI3p7yyRCCnQ7Svky0c6cpqvAhzKWEkoiri45rzPTSuuM6oqOWpldSOfmvFwT0S9MV2PUb3AvUk%2BtvJHo1GzFhn%2Bw8u4zKFQnhHxUOdaFaD2b3oKi%2BcYSTriB9eAn%2BB1m2jPEpJ4u4GD4QUMfeicg7S%2BSss1bttACqMnVvDYc0irzipqotiaCRO3FMrCyI9hnYUifV5V66amL8RyOHpu0wi%2Bw2jseM%2FDwBw%2B3e3BD3%2FRM606BsEYOtmjrB69CSvDwyrC6O%2FT0EnVWGk0Bs2RrdQJHq718RqOpwdUDgRtlARwMSCGC0jv%2Fjs%2FSfRk9SAYNc3SjeT%2FKc7wnVda4%2FjqMjEulpXRBESroAof6VauKrFav1cQDArwiLqarwF59wuYQ3R%2FSPqenbC3q1KeGEHIQ5%2FPc%2FW8TOG%2FEOfhkSL7DpK7UdzVhqUsBOVoCejFYafIDkIV8ySR%2Bw1siEoCs8WayXrTxvnwbxnnQaBUIqpiKuN%2BrMZGkNFTTlX9Y%2FRvRxR%2BRk%2FoPxQfR2mPuBPkffywKPMD2myYtIfbOi3qV1CZZJktmweMKCVir0GOqUBl7sbZ%2BmRLB40qm13QGS2KxAH%2F4w4be2ndzB7kiZWLEAiZrmQ7UQW4ma9KEJryfrvPXEEJPnfdrz9HvDm1lbFuYq8FOq3WD2OIwPfg9uQXIzYTBzpUMebhEOZWx8%2Btud0YC77Z%2FDDNYSI%2FxMEDcecM5KltIOdyPy146oVQLhCV6IPdGb0HGA%2FtBVSCe5nZVycftQB5kTptSw9lewZIC66vXIMhVDT&X-Amz-Signature=b12c329f9bceb24ac01fec0828d59bb5cef690afa386f3475d2685d29a2b2d53&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ6LMTD2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDb3GgDVVH65Bk%2FFJRKafFTKlW3DSQcBm%2FWz5%2FZazFvfgIgLj9knxUcU85ZccDcuekzr8LkRCXonsDlzPxeGbQ25AMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDMI8G%2BdPbutp5VS2AircA2y%2BjiB22zVAb9mrVQA32hVB9OeS3TA7LsYcKNLRmA5sbhIYth11P4y8xLGhATwwsrAyMD83sSqSlpDEoDBjDBP7RIlokQLDFD6LtIDQ1C7%2BFrL9pS3ERylrPoOFYaI1Gxkb%2F8NJEyy6fNbO31qZKnfIxyOSDV8GmwAhC%2F7CwKbdsYAJNpTCjIot8d%2FfaPCnZ%2BDjg%2BcNZlEbP7JenutDIwP3ivI3c5PbOAdGUZ6rP2MGWHJ2YbX9JcDtzLS21Z6BryfaHVgCJgdCXGkDwW8b%2FqTQYOghU%2BlvSxLlD6%2BEmPHZOGzu5ONoTmoaCytHTC0NJjJsE36GgFKop4d9G3B276hMES8FcaOblJLuliw7X6kWvtTDG37N4wvZtzG%2FfGEIGHzbU60Bz2priDCily%2BwT0WCOorfsT%2BTRjti5ECBhidbHgHM7eA0Byok7v8Ky0PaPGe54bz45n%2BOjLfFbiAF%2BU%2F1xMsnMPMlmbVZroDY0KoAeXu3MJDBxHpQAxPp9Ccv2lI9yajqpG1O1n0v0c3sx8o4RpIa0yykLwUNfp18pcOpl6lyYJcrXtROVGfIM6E%2B%2F6NtodXV8lDeChgxLYB6aXKGtgyCouZWQxc9RlJrTKTsBWahVoAIw4qG4fcjMKeWir0GOqUBq%2BfQ9BQbyTlmTHhePjt3LruVhsoyF85xjgy7i6pCmKnhCoSHszM4S0TRh5JuU2uB%2FR3bPKefDi%2FGQ5Dmrl1EUZPdOpFsz0Xy5p1i2TLt2paq21NQ1x67KMG8ES1Jum8cIHFw3kGOHC5vIxDpPRNz3W6vStiFBXnrWIJumHzjh1o8xxVhMxz7i4t%2BCP7NBlHtlTfKFPrk0jAVeDadMJgvE%2FYB9cXz&X-Amz-Signature=c905fbf3d2a3a1049b27f91e1fc5e040148035a13ee16cbb3e7d928d58fcb45e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGV3HAL4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIHRF35X3pGOONs3poFxpIHYN9ytMwxmtJW1fftxkYTmpAiEAnSMde1V%2F6z7v5BQoWmglBDOA7xN7ONI3jcACX%2F%2F0lScq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDPhBi56YCYYej9ZA%2FircAxgovIMpX9rO4CPj3CCJzWIaayQMODkCRJrMpPnh27PVFslk0Vd3kx85Mkqe8ykKNYCkHTMwdAD2H7UnC1HtTzXiC%2Fi1bUzfP%2F%2BO1p69jcHq4uBtePgZJW7Pp%2FizIywDgDmp65AMfDRdugOqeTzW6GuggiZsxNFoOWz0O5urp0I1r1ZXB%2BFta4eXZcJ79LZhZJMg%2B4PegPFJugxHl7QlBcprNNtIjNECA0iHlyX3nLS3Az1jSuRzgJ5mtWjPLgT%2FezqTOvEMSMaAlIpwm2v6kqQuPR96BulhtsYWU7HcVZwDkqH04MJLKIPwUrWY4gMkHWZyf3QItTA73ssOxBGSlfTldvl3kxNKU3ooHkSZe2vLQ%2FGz%2FdZWeIeHpCr0KFpHAES61LZaE5vQqGnT40JDU0VVnszQkep3ZAFXymhmR1bciZSCF6eI3TqwO0vgrBzHdXYX34jRPYX%2BnTF%2FxCm9isu3SxMOpgywG16f7hz239x%2BWf0%2BZzJ%2BNZh7qcRIni7aqAZbaF4Eq9od6e3xz99Co4BMkdJzIj0GZb813rGLesPLeH9ys%2FZ%2B821ojMw%2Bf%2BPSA28OcSSHZNv4h3v4TkWH37x3avvbnqDkY88pOdPHEtAJiq18nCEcTqS3OBUrMJeVir0GOqUBSEp8DGFE9Uu%2B0daYESFurxjoaUfNJUILOtkdRvAy2zES0bdqkRDe6DtW1gyUMV1ZEFMMtmYCYiqknO5jtuyzLpYL9Z12%2FAa%2BrHmusGbHelo7QLINxVZEy1ULRblUfgiJafcnJD5TCaetHPangp3ZmIdP0bmM9M5pCdGEEqQblRySySf5wPhifHVbHg7Oerr15vbJbAULuToLvpkDiJWR4nwgUQxX&X-Amz-Signature=02e55a8b9f6aae3dd2aadb13c11caf7d104df288c84bc9b9dc739bd1e12a8e7c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624CUZQU4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCZ6ToklKtWat5wYTRbeTjjkGTlqsi79CmhEpb2%2BSasxQIgO6nsscD3jxt7%2F8IJyHXk4aNclHA7j288oZPCA9sEecEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKbac%2Fv0rVmBO1VakircA5QRM4V9r47G7tBMsXIgnQwvYnRSLZ34LjcsRycrfQPyqZyU1uFGf3d43%2FKX3%2FRKAZplSiXAK2ypu%2FI3p7yyRCCnQ7Svky0c6cpqvAhzKWEkoiri45rzPTSuuM6oqOWpldSOfmvFwT0S9MV2PUb3AvUk%2BtvJHo1GzFhn%2Bw8u4zKFQnhHxUOdaFaD2b3oKi%2BcYSTriB9eAn%2BB1m2jPEpJ4u4GD4QUMfeicg7S%2BSss1bttACqMnVvDYc0irzipqotiaCRO3FMrCyI9hnYUifV5V66amL8RyOHpu0wi%2Bw2jseM%2FDwBw%2B3e3BD3%2FRM606BsEYOtmjrB69CSvDwyrC6O%2FT0EnVWGk0Bs2RrdQJHq718RqOpwdUDgRtlARwMSCGC0jv%2Fjs%2FSfRk9SAYNc3SjeT%2FKc7wnVda4%2FjqMjEulpXRBESroAof6VauKrFav1cQDArwiLqarwF59wuYQ3R%2FSPqenbC3q1KeGEHIQ5%2FPc%2FW8TOG%2FEOfhkSL7DpK7UdzVhqUsBOVoCejFYafIDkIV8ySR%2Bw1siEoCs8WayXrTxvnwbxnnQaBUIqpiKuN%2BrMZGkNFTTlX9Y%2FRvRxR%2BRk%2FoPxQfR2mPuBPkffywKPMD2myYtIfbOi3qV1CZZJktmweMKCVir0GOqUBl7sbZ%2BmRLB40qm13QGS2KxAH%2F4w4be2ndzB7kiZWLEAiZrmQ7UQW4ma9KEJryfrvPXEEJPnfdrz9HvDm1lbFuYq8FOq3WD2OIwPfg9uQXIzYTBzpUMebhEOZWx8%2Btud0YC77Z%2FDDNYSI%2FxMEDcecM5KltIOdyPy146oVQLhCV6IPdGb0HGA%2FtBVSCe5nZVycftQB5kTptSw9lewZIC66vXIMhVDT&X-Amz-Signature=b794ca920e8a25e390e4c143fcefd94a7ef81dff7c4c719d965d0264dc585adb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
