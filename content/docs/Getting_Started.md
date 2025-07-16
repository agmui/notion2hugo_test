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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWEJ5DFI%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T150937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDbjFGOvp7xgdv6C0r5AaKGDCk0udv0KCU5lslZwajwgwIhAPjrDCi0SNTlYKuuBGnrU5b8Hpo4q2D2muInEn%2FlZBb6Kv8DCFwQABoMNjM3NDIzMTgzODA1Igz9AfFe%2FvOazPtjyaIq3ANa%2BDZw5Oax3TYXLnTQQRhFcn20zKGxj%2FYMyFd3iwu4OPHFwBExdmQHIbvixqqtIyMTS%2FwyDe9LPR7xxBephVkFFbpSwZnBquAyzWuL%2BA%2Bupl27MbJbenMO0OmE7ok6Z%2BazEh9McOHV%2F86Ezxl%2FZibIilqjW7qFdj8b241vrNLYJpCrKrYBmeGFtLSj1Vm6J9rQ0HV3s7nOcarm1th69Q6dJYMPb%2BhNDGqYgUUChnSpTZeEBFekLtOCbXcQf85ZZLEDR6TiAQLmuZ247e7TBbDh9GuhOCIgHKvFVCCwgHoC0hDpUcgXw7pOjbif4xmXivVaJEcap3AwCFVs0DJdFkqCLFidqr5T2yJsgZDHyuJ%2FLmKL1mtNc%2FQ%2BsWjSTKP6A9mltU0YvtQ5ahuQt22ittQG11bt21FDKMbQegKkq38wv1NL7ngIX1ycGKvZBNZ%2Fg9i2bti7lRCnBWcLxWssdVhS8OtL%2FFvh2yTz1OzcQvhw8SFYfwkaHgfRnYdyrzd7bPi7WDJkfAWO7BGL%2ByN3uOFciwe9J9UjvdXTAWOyMtcpfGOTsnsETmWpxyCMbe3Yb2dFh6JW4h88TwI1O%2BnCWdsUjEH55iynuaSfhhhzmPfl23MHR7IR1GTi8lrcVTCOk97DBjqkARFxUL5uQtRLjksa3bwsdbQHacgvOf%2BelxrRdZ0Eo8c7G60QB2qHIsaisZTLOs0WeBfAipJAv5KzaWiwEjUvjgAe1vlzdFL7%2F1pGUad8seu6Gb5kthxTBRjAICQrPSSI877mpyQp8Za%2F6cd10GD4alH4Ynf3tuVws0GhVh7eUyXsGuHS91u7wUrTACd9PP0XQVcOexKgFLDEBj6Pi%2Fdd9pObE2Vj&X-Amz-Signature=2356c8e9f91302ee811a4461137933440976be3b6dec9e6a601f962faa5df207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWEJ5DFI%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T150937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDbjFGOvp7xgdv6C0r5AaKGDCk0udv0KCU5lslZwajwgwIhAPjrDCi0SNTlYKuuBGnrU5b8Hpo4q2D2muInEn%2FlZBb6Kv8DCFwQABoMNjM3NDIzMTgzODA1Igz9AfFe%2FvOazPtjyaIq3ANa%2BDZw5Oax3TYXLnTQQRhFcn20zKGxj%2FYMyFd3iwu4OPHFwBExdmQHIbvixqqtIyMTS%2FwyDe9LPR7xxBephVkFFbpSwZnBquAyzWuL%2BA%2Bupl27MbJbenMO0OmE7ok6Z%2BazEh9McOHV%2F86Ezxl%2FZibIilqjW7qFdj8b241vrNLYJpCrKrYBmeGFtLSj1Vm6J9rQ0HV3s7nOcarm1th69Q6dJYMPb%2BhNDGqYgUUChnSpTZeEBFekLtOCbXcQf85ZZLEDR6TiAQLmuZ247e7TBbDh9GuhOCIgHKvFVCCwgHoC0hDpUcgXw7pOjbif4xmXivVaJEcap3AwCFVs0DJdFkqCLFidqr5T2yJsgZDHyuJ%2FLmKL1mtNc%2FQ%2BsWjSTKP6A9mltU0YvtQ5ahuQt22ittQG11bt21FDKMbQegKkq38wv1NL7ngIX1ycGKvZBNZ%2Fg9i2bti7lRCnBWcLxWssdVhS8OtL%2FFvh2yTz1OzcQvhw8SFYfwkaHgfRnYdyrzd7bPi7WDJkfAWO7BGL%2ByN3uOFciwe9J9UjvdXTAWOyMtcpfGOTsnsETmWpxyCMbe3Yb2dFh6JW4h88TwI1O%2BnCWdsUjEH55iynuaSfhhhzmPfl23MHR7IR1GTi8lrcVTCOk97DBjqkARFxUL5uQtRLjksa3bwsdbQHacgvOf%2BelxrRdZ0Eo8c7G60QB2qHIsaisZTLOs0WeBfAipJAv5KzaWiwEjUvjgAe1vlzdFL7%2F1pGUad8seu6Gb5kthxTBRjAICQrPSSI877mpyQp8Za%2F6cd10GD4alH4Ynf3tuVws0GhVh7eUyXsGuHS91u7wUrTACd9PP0XQVcOexKgFLDEBj6Pi%2Fdd9pObE2Vj&X-Amz-Signature=7ef13f569f16fa636a392a5dae63a7b46c51c66b64c4c10183fc8b98d0548d14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWEJ5DFI%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T150937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDbjFGOvp7xgdv6C0r5AaKGDCk0udv0KCU5lslZwajwgwIhAPjrDCi0SNTlYKuuBGnrU5b8Hpo4q2D2muInEn%2FlZBb6Kv8DCFwQABoMNjM3NDIzMTgzODA1Igz9AfFe%2FvOazPtjyaIq3ANa%2BDZw5Oax3TYXLnTQQRhFcn20zKGxj%2FYMyFd3iwu4OPHFwBExdmQHIbvixqqtIyMTS%2FwyDe9LPR7xxBephVkFFbpSwZnBquAyzWuL%2BA%2Bupl27MbJbenMO0OmE7ok6Z%2BazEh9McOHV%2F86Ezxl%2FZibIilqjW7qFdj8b241vrNLYJpCrKrYBmeGFtLSj1Vm6J9rQ0HV3s7nOcarm1th69Q6dJYMPb%2BhNDGqYgUUChnSpTZeEBFekLtOCbXcQf85ZZLEDR6TiAQLmuZ247e7TBbDh9GuhOCIgHKvFVCCwgHoC0hDpUcgXw7pOjbif4xmXivVaJEcap3AwCFVs0DJdFkqCLFidqr5T2yJsgZDHyuJ%2FLmKL1mtNc%2FQ%2BsWjSTKP6A9mltU0YvtQ5ahuQt22ittQG11bt21FDKMbQegKkq38wv1NL7ngIX1ycGKvZBNZ%2Fg9i2bti7lRCnBWcLxWssdVhS8OtL%2FFvh2yTz1OzcQvhw8SFYfwkaHgfRnYdyrzd7bPi7WDJkfAWO7BGL%2ByN3uOFciwe9J9UjvdXTAWOyMtcpfGOTsnsETmWpxyCMbe3Yb2dFh6JW4h88TwI1O%2BnCWdsUjEH55iynuaSfhhhzmPfl23MHR7IR1GTi8lrcVTCOk97DBjqkARFxUL5uQtRLjksa3bwsdbQHacgvOf%2BelxrRdZ0Eo8c7G60QB2qHIsaisZTLOs0WeBfAipJAv5KzaWiwEjUvjgAe1vlzdFL7%2F1pGUad8seu6Gb5kthxTBRjAICQrPSSI877mpyQp8Za%2F6cd10GD4alH4Ynf3tuVws0GhVh7eUyXsGuHS91u7wUrTACd9PP0XQVcOexKgFLDEBj6Pi%2Fdd9pObE2Vj&X-Amz-Signature=139c66d7c7e616e065f3f8d1453848d045756d296c753fa27851bfcaf947fdf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBVRHAF3%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T150942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBKYT0jD2VfB8orv6GRUwuoxanwgWUqB1NBLVpV9LNJxAiEA7u862wrLfa4hZFf0UXHR%2BsViQkIDlDIGumkQ2u%2FbP9Eq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDC9McAwVmWKuQYZ3TSrcA6us2GlF2XTiGBIP50To9uq7AYHRZiIxiAhhaiyIQ0HLzvunpzcS%2BRi01nHgJG3q4IA49H3au92cXkSLd21yb3%2BvMufPpgLt2J5T6XxeykO8QJR1dQAaRgg3WkLUgFdWXVlMn9r2pcu32ydI8pTpAMUDb5FsfwFhfIWdT3s%2B%2Fu2544AXrX3uetSNINjmFRRT7udkWnCbV4fUxyqcU3bBjUy%2BeumtwODijBxdGL6uR4tAPBelzBD2XJ0ekhWkeA9K%2B3whfa8278lun%2BgmRDAJwswd7HOSVfa841MIOFZIYB0zM6V5tXgSb36mYrQMyxrtwbXGKE1XHTDy4LfWsOTZmTkD3SX5hysAti5v1Mdp9usK523lvXHYZoELbnDtW9JN3r6RFAkhL%2BYYL78XcPfE1%2BErthKnYi%2F2Sh%2Brfj%2FApCi1z%2FFfmR00Zs%2FaLCU2yW%2FbaPxp%2BUseV9wFfQfoEmpUlmryihN8qvstGkMAXIaNS6MMkuEFkIPPu%2FaMVX%2FmjCbi3%2BwRz1wyx%2B4GRQwv%2BQs0suMjYCilPGAPfgd4nekD%2BKIFOOP2kzLhGya41MDMuY%2FHcyqvsZmNrSb3Q2A8veO9znLmH65eDkqgidE%2B2a0oGHIh5okn%2FJ868HKmZpS1MLGT3sMGOqUBIKtEDTQJncv7gL3ODrIsM2TmElkBOrH8m26RCY0anvgexfA0JQZKYeJOdLyS7vIhgWkqI03njxK7f6z7RIbPRj%2Bf%2Bcjt0v4bgVAQVdbK0Qb%2FSvuvq35%2Fm8QJ90oURD7M9QOXGBrEzWSzyfJAwkM79y4KydFcSuoeH8WHJf1TGV3OZI%2BWa1pq3yKZasvIoZFTPh2rguF0Gbr8b7pG7HPv%2Bo5PzlyC&X-Amz-Signature=a3d2c9a0ced32c44cb6dd3908a8b037434fce4609f5727718351558c0388a6ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5HVZF4W%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T150942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCp1e%2FI4lZFIV1dxLzkwwv2V0EBrGx8FE0OjE5KQ%2BRJjQIhAOj5yzD6S7rdnPSBZfaICmtoQakM9blsd5fFEpIKA9z7Kv8DCFwQABoMNjM3NDIzMTgzODA1Igy9QxbS4u9rlJLQyR0q3AM4ch3ZrFcAEBcXwVZDJoL%2Fxd6ig%2BUf7XNoZo0WGthHKjHkXKJgphb66Vu1mxF15qt3bPLTTaXQFfJtIYofY1feDtyjnNHkjqmAEpInowsJTCxUL1DhdMFxr1H0SOhuErWevMU2aWb%2FlZ%2B9yDFm%2FLQ%2FFE053KGOSPKRRjxG0jblcsZVRzgiXNM%2BsMJP3Y6pilszxWPcpFXjb58B3YFOb%2BitD51YX%2F1V%2FR0EZofmBrEapGPrCa18jWhlXiZj2yvHgTIuILcCZ4uBp%2FFilNFrZu7O4Ln1ru5JNLK1lWoAXWXE2X5RyNmuQqJofka2gN046MbXfgvcgyfkxxCuvikVNEg1DfC39ubYpLkjev3qftsgzqUqX2G6pMITbiWgLLNf5cPRAbHmsT%2FiAzP9x%2BTs3uthg2n5%2F6BlnVEh1P%2BkzUiOLfCMY4BrMzcutDcuwrepQVWUoK0vaUL%2Fu%2Fweuv62GBiiWfODOBSBs7LGhJfRL%2BUiahwI67wKHucuVMj34JThZBeQnXWKvxtiDai7fnNq%2FKsqwOsT42bj%2FnYq9HVzT0tsN109U%2FwoFsoMLUcZqT7FSQCJQl3MKbB5ju9zI3IP31ntZTtidrGWKI62Oa3thCTr%2F9CTwZPZ1OjqzPM89DCzlN7DBjqkAdtDAtTpEN0HU2ceqNIO0%2BQxZYO%2FxUKL%2BwEHqUxVeFVTJuv9V54ex0ybca4IJIM5hOtj2uiXfdsr%2FhOaICVT5v6hIpxwe8t09E924TZLibh4sZ09QCtI0SlRa8NbecH%2FikbiGJBDFZ2cC5cBHjZO%2B3sn8yzxwDpXvzhDAbOnEE6gNuw8sT8r7cF8cVEHpuXYwUImsziZPNSUESBkwbChS6Rco2%2Fp&X-Amz-Signature=2d731c1039ef4466f9e3b2630356e30385410436f9f161401b0ae0da702f45b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWEJ5DFI%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T150937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDbjFGOvp7xgdv6C0r5AaKGDCk0udv0KCU5lslZwajwgwIhAPjrDCi0SNTlYKuuBGnrU5b8Hpo4q2D2muInEn%2FlZBb6Kv8DCFwQABoMNjM3NDIzMTgzODA1Igz9AfFe%2FvOazPtjyaIq3ANa%2BDZw5Oax3TYXLnTQQRhFcn20zKGxj%2FYMyFd3iwu4OPHFwBExdmQHIbvixqqtIyMTS%2FwyDe9LPR7xxBephVkFFbpSwZnBquAyzWuL%2BA%2Bupl27MbJbenMO0OmE7ok6Z%2BazEh9McOHV%2F86Ezxl%2FZibIilqjW7qFdj8b241vrNLYJpCrKrYBmeGFtLSj1Vm6J9rQ0HV3s7nOcarm1th69Q6dJYMPb%2BhNDGqYgUUChnSpTZeEBFekLtOCbXcQf85ZZLEDR6TiAQLmuZ247e7TBbDh9GuhOCIgHKvFVCCwgHoC0hDpUcgXw7pOjbif4xmXivVaJEcap3AwCFVs0DJdFkqCLFidqr5T2yJsgZDHyuJ%2FLmKL1mtNc%2FQ%2BsWjSTKP6A9mltU0YvtQ5ahuQt22ittQG11bt21FDKMbQegKkq38wv1NL7ngIX1ycGKvZBNZ%2Fg9i2bti7lRCnBWcLxWssdVhS8OtL%2FFvh2yTz1OzcQvhw8SFYfwkaHgfRnYdyrzd7bPi7WDJkfAWO7BGL%2ByN3uOFciwe9J9UjvdXTAWOyMtcpfGOTsnsETmWpxyCMbe3Yb2dFh6JW4h88TwI1O%2BnCWdsUjEH55iynuaSfhhhzmPfl23MHR7IR1GTi8lrcVTCOk97DBjqkARFxUL5uQtRLjksa3bwsdbQHacgvOf%2BelxrRdZ0Eo8c7G60QB2qHIsaisZTLOs0WeBfAipJAv5KzaWiwEjUvjgAe1vlzdFL7%2F1pGUad8seu6Gb5kthxTBRjAICQrPSSI877mpyQp8Za%2F6cd10GD4alH4Ynf3tuVws0GhVh7eUyXsGuHS91u7wUrTACd9PP0XQVcOexKgFLDEBj6Pi%2Fdd9pObE2Vj&X-Amz-Signature=bb21070123afb78a49752ef1eeeedce58e367d7d92d450b599dca90377277d68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
