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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2CLBE5%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChPP%2BkjAlK3NAGHlefMmTMsjqTU%2Fa3iV45d9dnWRpe9QIhANjPctwteo10pEQSZ6zLOTi%2FdQ2eVPg%2FnrvnA6XvOWYfKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp05cK%2FoJshtMarlkq3AOUyHEEypXQ6t0%2B1r9WzL%2FWFVXOU1XSo7W4tN7qd82kQwVhgOAY9Fk01d%2BqxB2%2BRph3UQMMrXJtsr9VpmpraFiW4xt6iW9QmRxG9LAf5B7hA%2FPhfEWONg%2B4%2F85LoINB2VkAouSsjXcK8eH0dWc4YJdoYfq%2FybBBCSwPC6hsD8zkyfEVJ92W7wDCu8BSWcGnzdAHwAxqzIBQ9GFn8siKnej%2B5xxU7mHLnnJvbj3xZeaTeoLbwPmP8kH2Zk0YohFMlKetA%2Bj%2BGiPkZSVMPs%2Bq4jQwufkxqb2Cb4lKv7L%2B0tbR1J%2FrKDRAyOpbjsYBp6SRCJCygDMoxOONLIXjHPoJd9d55kpI4TOVxV42N3yz%2B%2F85WdPGB2X%2FGhIXpkECcWzTH8P7F9HYIir47lNNKBAkgMowg%2FCUKPbRZ0ggD3TZ%2FmpzEjIlfMsvyTErfjqkcrwvIbSJvn5XGFqq9oLA9MfcFXecnocv%2FF3%2BS6w0ACu%2Bxy2X5xQKWKrD9vPDDATkH%2BezdkH2rp1ugfaIhswM%2FuSDL2GLgWDxCBb0MFj%2FevRDRW0F8zH5t55Lwnwj1JxJ6RxRNHrgUmQxjEn8w7VOhB2adL26ZKv8Vxri6gA6ng5M1%2Bt3eA0Ag8P%2BD0AWpcE%2BpDDDr%2FK%2FBjqkAdVxvgTlDShpjS4o53FHFMdsJtRaTJVacz0x5qoOrsLtVtXJL9mJuXwhB8TiCa97bWAK2WHpOYjSm6vdA3g5pz6dXSbKyDQx0AOfVpeCcq2OdBnyHKkdOtmiOyaQTSDLGxPPMwAqNL29TtvC%2FeLWsPPI4R%2Be6N7nE%2FBL%2FAL%2F1jokFbtY5W42Wc8wCWBNOfp5dKBdQ3Lk%2FNkdJsWO743SNcVoxWuT&X-Amz-Signature=dd9ae06c56f3b79414582561a849be7b09530a4a4ee4860926b616ef43a90fcb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2CLBE5%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChPP%2BkjAlK3NAGHlefMmTMsjqTU%2Fa3iV45d9dnWRpe9QIhANjPctwteo10pEQSZ6zLOTi%2FdQ2eVPg%2FnrvnA6XvOWYfKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp05cK%2FoJshtMarlkq3AOUyHEEypXQ6t0%2B1r9WzL%2FWFVXOU1XSo7W4tN7qd82kQwVhgOAY9Fk01d%2BqxB2%2BRph3UQMMrXJtsr9VpmpraFiW4xt6iW9QmRxG9LAf5B7hA%2FPhfEWONg%2B4%2F85LoINB2VkAouSsjXcK8eH0dWc4YJdoYfq%2FybBBCSwPC6hsD8zkyfEVJ92W7wDCu8BSWcGnzdAHwAxqzIBQ9GFn8siKnej%2B5xxU7mHLnnJvbj3xZeaTeoLbwPmP8kH2Zk0YohFMlKetA%2Bj%2BGiPkZSVMPs%2Bq4jQwufkxqb2Cb4lKv7L%2B0tbR1J%2FrKDRAyOpbjsYBp6SRCJCygDMoxOONLIXjHPoJd9d55kpI4TOVxV42N3yz%2B%2F85WdPGB2X%2FGhIXpkECcWzTH8P7F9HYIir47lNNKBAkgMowg%2FCUKPbRZ0ggD3TZ%2FmpzEjIlfMsvyTErfjqkcrwvIbSJvn5XGFqq9oLA9MfcFXecnocv%2FF3%2BS6w0ACu%2Bxy2X5xQKWKrD9vPDDATkH%2BezdkH2rp1ugfaIhswM%2FuSDL2GLgWDxCBb0MFj%2FevRDRW0F8zH5t55Lwnwj1JxJ6RxRNHrgUmQxjEn8w7VOhB2adL26ZKv8Vxri6gA6ng5M1%2Bt3eA0Ag8P%2BD0AWpcE%2BpDDDr%2FK%2FBjqkAdVxvgTlDShpjS4o53FHFMdsJtRaTJVacz0x5qoOrsLtVtXJL9mJuXwhB8TiCa97bWAK2WHpOYjSm6vdA3g5pz6dXSbKyDQx0AOfVpeCcq2OdBnyHKkdOtmiOyaQTSDLGxPPMwAqNL29TtvC%2FeLWsPPI4R%2Be6N7nE%2FBL%2FAL%2F1jokFbtY5W42Wc8wCWBNOfp5dKBdQ3Lk%2FNkdJsWO743SNcVoxWuT&X-Amz-Signature=ea4a782242aaa40804830aed80c9198340e415903573ecd774fbdce55b7bf476&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZRBWOTP%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFs2SoPIK5G3aYGAUtZaSXL7tj5aT0QIGuNJfl9ydYwxAiEAuHI9g42c5Jl%2BPDor3n%2FaZbmodYcLfBQHJxF%2F70jSyygqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4pSviRrIAPhUEDoyrcA7YhLZKzrubj5Vl2H%2Be%2FCmmdFlgM4OAQpd4xodhitF5MDozmwTA4Dbmu35uguC%2BFXJapwkcRocL5kSgid3mrC6g3yDjuutd%2BNWbuY6bcYh2mvWQUksVEVhJlbrwK9%2B5AzPGRVQy613ewaiHpFoVIlzCNA84lb2Eov5bNuvA8SIpS4BT4vRFGMl3tAFsuIdqhvNjK3nG7zkflnfJHTaYfjdQ8Vk%2FImQUpMs5Rd%2Bc1SkRG4ZyWvtl6XXpzTfojOFviSMvvvTAsYY0XNbmKVg%2BqMe6YVcpMDcVCJzZnaWnaL%2F3TmV%2F8ajQPDhTzSRlfR8ZRinpKE8%2FLvrY2IBpeloiO8885KSyqQLITthNOUoucvG0zMr4KthVIzkhESFNXUSAvcok7gmu8l1SqtpqcEioMknYRymlZADI71r9prHV98%2FT8RAZA566vDAfBavT7CY2vM6LGLqovABkHMjWRDaVGoGXz9uNgztkFjS3pSsPfn4b5nppR5mmXekoef%2Bvrga0Dyt6ZHWh5mX404DE%2BBke8r8Xcq9C9qVO99%2FT%2F7YDBTYmI1quYt2eazcXyDg95qcko2ROCRXOtCiAyIfqWiY5ntElt3uxo1YPiYBlLSKYU69DYFFBgTAXxiBUqCT70MMWv8r8GOqUBaN4%2FxCt5AGJ0VmT5Xg2CTQ5%2BG%2FI%2BGaP2hMrdQr5HB7K1IyqIDHMkT4Z1XAMBIsF5BYoXmFcVsq8z0ENlv9LJGDcktmuAAkuQaQx5xnMWP0V5%2BmuZZp%2F%2BKpJV1ktMD4VdmS2uvTlRvNk5h6MRviUw5cAXYPy5iWoew9rqRdsCHKPmSNbtzBTgsMR8CdmgejdxU2%2FfdPrkM9r72xB2k0Suu6nZx95j&X-Amz-Signature=d229ec7a82dc2e66bb8d4998fa32bc68370f22ab45032906cbbde19dc0cdc3de&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZRBWOTP%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFs2SoPIK5G3aYGAUtZaSXL7tj5aT0QIGuNJfl9ydYwxAiEAuHI9g42c5Jl%2BPDor3n%2FaZbmodYcLfBQHJxF%2F70jSyygqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4pSviRrIAPhUEDoyrcA7YhLZKzrubj5Vl2H%2Be%2FCmmdFlgM4OAQpd4xodhitF5MDozmwTA4Dbmu35uguC%2BFXJapwkcRocL5kSgid3mrC6g3yDjuutd%2BNWbuY6bcYh2mvWQUksVEVhJlbrwK9%2B5AzPGRVQy613ewaiHpFoVIlzCNA84lb2Eov5bNuvA8SIpS4BT4vRFGMl3tAFsuIdqhvNjK3nG7zkflnfJHTaYfjdQ8Vk%2FImQUpMs5Rd%2Bc1SkRG4ZyWvtl6XXpzTfojOFviSMvvvTAsYY0XNbmKVg%2BqMe6YVcpMDcVCJzZnaWnaL%2F3TmV%2F8ajQPDhTzSRlfR8ZRinpKE8%2FLvrY2IBpeloiO8885KSyqQLITthNOUoucvG0zMr4KthVIzkhESFNXUSAvcok7gmu8l1SqtpqcEioMknYRymlZADI71r9prHV98%2FT8RAZA566vDAfBavT7CY2vM6LGLqovABkHMjWRDaVGoGXz9uNgztkFjS3pSsPfn4b5nppR5mmXekoef%2Bvrga0Dyt6ZHWh5mX404DE%2BBke8r8Xcq9C9qVO99%2FT%2F7YDBTYmI1quYt2eazcXyDg95qcko2ROCRXOtCiAyIfqWiY5ntElt3uxo1YPiYBlLSKYU69DYFFBgTAXxiBUqCT70MMWv8r8GOqUBaN4%2FxCt5AGJ0VmT5Xg2CTQ5%2BG%2FI%2BGaP2hMrdQr5HB7K1IyqIDHMkT4Z1XAMBIsF5BYoXmFcVsq8z0ENlv9LJGDcktmuAAkuQaQx5xnMWP0V5%2BmuZZp%2F%2BKpJV1ktMD4VdmS2uvTlRvNk5h6MRviUw5cAXYPy5iWoew9rqRdsCHKPmSNbtzBTgsMR8CdmgejdxU2%2FfdPrkM9r72xB2k0Suu6nZx95j&X-Amz-Signature=bd3192641a46817478f0e8a5c12c68477884287d36a6f96d6add4958c36218bd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2CLBE5%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChPP%2BkjAlK3NAGHlefMmTMsjqTU%2Fa3iV45d9dnWRpe9QIhANjPctwteo10pEQSZ6zLOTi%2FdQ2eVPg%2FnrvnA6XvOWYfKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp05cK%2FoJshtMarlkq3AOUyHEEypXQ6t0%2B1r9WzL%2FWFVXOU1XSo7W4tN7qd82kQwVhgOAY9Fk01d%2BqxB2%2BRph3UQMMrXJtsr9VpmpraFiW4xt6iW9QmRxG9LAf5B7hA%2FPhfEWONg%2B4%2F85LoINB2VkAouSsjXcK8eH0dWc4YJdoYfq%2FybBBCSwPC6hsD8zkyfEVJ92W7wDCu8BSWcGnzdAHwAxqzIBQ9GFn8siKnej%2B5xxU7mHLnnJvbj3xZeaTeoLbwPmP8kH2Zk0YohFMlKetA%2Bj%2BGiPkZSVMPs%2Bq4jQwufkxqb2Cb4lKv7L%2B0tbR1J%2FrKDRAyOpbjsYBp6SRCJCygDMoxOONLIXjHPoJd9d55kpI4TOVxV42N3yz%2B%2F85WdPGB2X%2FGhIXpkECcWzTH8P7F9HYIir47lNNKBAkgMowg%2FCUKPbRZ0ggD3TZ%2FmpzEjIlfMsvyTErfjqkcrwvIbSJvn5XGFqq9oLA9MfcFXecnocv%2FF3%2BS6w0ACu%2Bxy2X5xQKWKrD9vPDDATkH%2BezdkH2rp1ugfaIhswM%2FuSDL2GLgWDxCBb0MFj%2FevRDRW0F8zH5t55Lwnwj1JxJ6RxRNHrgUmQxjEn8w7VOhB2adL26ZKv8Vxri6gA6ng5M1%2Bt3eA0Ag8P%2BD0AWpcE%2BpDDDr%2FK%2FBjqkAdVxvgTlDShpjS4o53FHFMdsJtRaTJVacz0x5qoOrsLtVtXJL9mJuXwhB8TiCa97bWAK2WHpOYjSm6vdA3g5pz6dXSbKyDQx0AOfVpeCcq2OdBnyHKkdOtmiOyaQTSDLGxPPMwAqNL29TtvC%2FeLWsPPI4R%2Be6N7nE%2FBL%2FAL%2F1jokFbtY5W42Wc8wCWBNOfp5dKBdQ3Lk%2FNkdJsWO743SNcVoxWuT&X-Amz-Signature=369ee77f88515e8093f68b8ef27a9a016cce912576c59dcf522b6bdc9e020307&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
