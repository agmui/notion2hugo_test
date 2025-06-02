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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IW7SNDL%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDhiPSiW1f0aVKGjL5CYqbJ1eQZtsnPAUTw3PHy%2B4L%2FkgIgItOWoMcZxkLmX5PVI%2BPJ8kbJkgE%2FdYq0VD9HduXBjVoqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4IbFs3A4AijlVBACrcA65d99BK2ofs3PGnCd0poDBWM9MxK%2BLCNVpIQh4jrVM8QiTC3X9U2XypSu62maTBkZW5adCFAB8QQFiIGaiPUGesti6kPhevY5j%2BMmPKuXrIuC8d6NERtp4P8fLsbPVzalWjPsV6%2FnGvQuZhd%2FTQaJqHSONRu5ZTTBMjLMO7r6KUzRNawOscKUVX1IFR3kH9yyU6S5sMmbPgsQJZwQbx%2Bqihf8VQCL86pQs8CJsc7IPMA%2BuM%2Bu55L9cLpZX2L1GXfLB6u4WmQGEEKeChCzpKPW0EIRdq2admuNsafY%2FJfSrZWKELT1YPumrHmuzLclRAFumb5cFYoIUPY2%2FzgUNS005w%2BdQ6QgkySv0uYWRbIINCWoU23a0zREL3NK1%2BPEoa%2F5uheQGemy8knKBQBpbYstMeO%2BH00u09rl4fF0owcnVmN5U%2BCiUEPNA8ZqDQdbSXdLW%2F4c%2BWogZmU2OwO13zkWyBbk%2F4XQ1pYowwEY9deUtF64Xy%2F9l%2BYrS33VRtBKujcakH%2BCTtMem8APhnZHeRfbtbhJmt3mB6fgts%2BgMagYt1SH78i0LQze6DOrsv2cjCaUFhOgXd3a6Zzl6lP63Hl3I1L0fGRPrO330Xv3ppGWFQe0Gh86MvdxDuC6VlMM209sEGOqUBnHwgG7eMYG3%2F0iZf6v%2FnmxwbK4%2BNeLihBzs5V%2BJFiljygcYuqubGLcl6%2F44F4OLQ9rJ5YcK%2FbEUeCKgfZvt8rdaB%2BSbyOcsubKa4vmmHtXSzTAfa7q9yzXtpq855sSZ4WI2%2Fal%2BMVLdaXo8wnp8G2D%2FG3Y93tXip6epkZQJNwQAPH%2BeMXAkGpk6aJETIYbm0Os2PR85E8YxNTAUcIgDMTF9U4Tuw&X-Amz-Signature=7cf44df8c1f97814214137b55c0e1fb11ae3598e745bdb7757bb55e67c3e431a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IW7SNDL%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDhiPSiW1f0aVKGjL5CYqbJ1eQZtsnPAUTw3PHy%2B4L%2FkgIgItOWoMcZxkLmX5PVI%2BPJ8kbJkgE%2FdYq0VD9HduXBjVoqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4IbFs3A4AijlVBACrcA65d99BK2ofs3PGnCd0poDBWM9MxK%2BLCNVpIQh4jrVM8QiTC3X9U2XypSu62maTBkZW5adCFAB8QQFiIGaiPUGesti6kPhevY5j%2BMmPKuXrIuC8d6NERtp4P8fLsbPVzalWjPsV6%2FnGvQuZhd%2FTQaJqHSONRu5ZTTBMjLMO7r6KUzRNawOscKUVX1IFR3kH9yyU6S5sMmbPgsQJZwQbx%2Bqihf8VQCL86pQs8CJsc7IPMA%2BuM%2Bu55L9cLpZX2L1GXfLB6u4WmQGEEKeChCzpKPW0EIRdq2admuNsafY%2FJfSrZWKELT1YPumrHmuzLclRAFumb5cFYoIUPY2%2FzgUNS005w%2BdQ6QgkySv0uYWRbIINCWoU23a0zREL3NK1%2BPEoa%2F5uheQGemy8knKBQBpbYstMeO%2BH00u09rl4fF0owcnVmN5U%2BCiUEPNA8ZqDQdbSXdLW%2F4c%2BWogZmU2OwO13zkWyBbk%2F4XQ1pYowwEY9deUtF64Xy%2F9l%2BYrS33VRtBKujcakH%2BCTtMem8APhnZHeRfbtbhJmt3mB6fgts%2BgMagYt1SH78i0LQze6DOrsv2cjCaUFhOgXd3a6Zzl6lP63Hl3I1L0fGRPrO330Xv3ppGWFQe0Gh86MvdxDuC6VlMM209sEGOqUBnHwgG7eMYG3%2F0iZf6v%2FnmxwbK4%2BNeLihBzs5V%2BJFiljygcYuqubGLcl6%2F44F4OLQ9rJ5YcK%2FbEUeCKgfZvt8rdaB%2BSbyOcsubKa4vmmHtXSzTAfa7q9yzXtpq855sSZ4WI2%2Fal%2BMVLdaXo8wnp8G2D%2FG3Y93tXip6epkZQJNwQAPH%2BeMXAkGpk6aJETIYbm0Os2PR85E8YxNTAUcIgDMTF9U4Tuw&X-Amz-Signature=6343e6928df87cece1c19759e10fe99bde66e66114d9264cab6caef533d5376a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IW7SNDL%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDhiPSiW1f0aVKGjL5CYqbJ1eQZtsnPAUTw3PHy%2B4L%2FkgIgItOWoMcZxkLmX5PVI%2BPJ8kbJkgE%2FdYq0VD9HduXBjVoqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4IbFs3A4AijlVBACrcA65d99BK2ofs3PGnCd0poDBWM9MxK%2BLCNVpIQh4jrVM8QiTC3X9U2XypSu62maTBkZW5adCFAB8QQFiIGaiPUGesti6kPhevY5j%2BMmPKuXrIuC8d6NERtp4P8fLsbPVzalWjPsV6%2FnGvQuZhd%2FTQaJqHSONRu5ZTTBMjLMO7r6KUzRNawOscKUVX1IFR3kH9yyU6S5sMmbPgsQJZwQbx%2Bqihf8VQCL86pQs8CJsc7IPMA%2BuM%2Bu55L9cLpZX2L1GXfLB6u4WmQGEEKeChCzpKPW0EIRdq2admuNsafY%2FJfSrZWKELT1YPumrHmuzLclRAFumb5cFYoIUPY2%2FzgUNS005w%2BdQ6QgkySv0uYWRbIINCWoU23a0zREL3NK1%2BPEoa%2F5uheQGemy8knKBQBpbYstMeO%2BH00u09rl4fF0owcnVmN5U%2BCiUEPNA8ZqDQdbSXdLW%2F4c%2BWogZmU2OwO13zkWyBbk%2F4XQ1pYowwEY9deUtF64Xy%2F9l%2BYrS33VRtBKujcakH%2BCTtMem8APhnZHeRfbtbhJmt3mB6fgts%2BgMagYt1SH78i0LQze6DOrsv2cjCaUFhOgXd3a6Zzl6lP63Hl3I1L0fGRPrO330Xv3ppGWFQe0Gh86MvdxDuC6VlMM209sEGOqUBnHwgG7eMYG3%2F0iZf6v%2FnmxwbK4%2BNeLihBzs5V%2BJFiljygcYuqubGLcl6%2F44F4OLQ9rJ5YcK%2FbEUeCKgfZvt8rdaB%2BSbyOcsubKa4vmmHtXSzTAfa7q9yzXtpq855sSZ4WI2%2Fal%2BMVLdaXo8wnp8G2D%2FG3Y93tXip6epkZQJNwQAPH%2BeMXAkGpk6aJETIYbm0Os2PR85E8YxNTAUcIgDMTF9U4Tuw&X-Amz-Signature=678a37ec1dfd8674dd540492c3c545241476cdaf1c24c0fe8720d9c59ce136ba&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TIB4N2A%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIFsZwnzJVJa1VMd1N%2B6U%2B3ABFsWIqHYSEbluXFjcJ%2FEFAiB50qRAy3aATJyzuZdKLd%2BzZAnQkAXyRwJrLIi0YyeI2SqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVXSTG0nELExaEbinKtwDL9PZWrZzJNv8A3QK72%2BTNPbdzqUBhJXmSFiEPx6K4inyuJXME%2BH126HqmlXTfuP%2BjzLCnaPqDek60dnPFA4mY8mtYpoNoIpvwKei8uPIE30xKajxZLZTU%2BxuSjckH6fbUk5TP54V%2FqGFjlMPby0R4fUqhJdrS%2FLN10gZZl9yr4UEFrWMjRwsMsKrj0iSMkZVZjV4Zy1kUxBVRhWc5SVQmUB7N%2Fp0H28J4AMyIpV%2Br17dpNwebs18PYyWeklyJNTpz2wfPSNh1d%2FH3f6cooAKEvKaWxobydfZOtKXrttmAK%2Bqmz0NPG2JkCv%2FQEniE%2BQI2e6feuZcy9KlKdxJx8Zrdgp%2FBXV5yYM%2BOZYPrDpA%2B8OZ4LINLyZtjRRgGvsJxVySY7Apm7d9R%2BZ%2BfDd0tVxcHsT1t8qD2lUd20uWfgwDIbOeYbp0Hl6cDragYUwB3%2Fz80N%2BvP1pvXS4h4NAeEJMUw5MLpgZlOxOGnSubWWvZ3yWnXWMuOz743WFt5WDeMEQQTLR1b0FgEzR4nLwg1ILWA0Z8DxnbodziTbEM0fw%2Fv30rV5GUa%2FVmznE4CRdCa9H8d9Rysjbha76Ai8Sg5edUEhYkdXRBSEyCp8xTJlEMlymvCd6Pcs59eEVmQJUwnLT2wQY6pgEA4R3z6EZlSOPHP2iyTs7Q0bddd2diaPHfF39y3V%2F7fO6ba82sRcS6b6BrEYuaMp%2FSRbtzWNra32fK0XTJjOkHuABgUBaTosHBMS17dd70WvEqUYziSLP0%2BpkvVyl9nrJs9ZMiLWmQuupXK%2BohjFA9%2FiR%2BxBnCcb7LN6Lf7niA0dgdZnlYwnfpE6HxEXHDaNepGJKcZqzmKbC1PavB67LrEj0lFll4&X-Amz-Signature=9ef9086b54f0c5a215511982e4a4d95c6416ca71c6a8c22ee3d1f0b5578d0c01&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FNT3YL6%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIHZnNmpDydH%2By%2F%2FDcrQy6YgE4Ebprwnfq6HSfNHjy80dAiB7gam44v7HGRr%2FgMYnb3Qzw2YIBfL8FArrF6vwsjEfkyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd8aVswStJDeMkNS5KtwDETabiT6bjZOYhxzAYUzvoC5Irtur3ltaw%2Ffsw4kLnyc%2BJ8gyqoJExKJdPYcJVtSIRmd9cjepdb15TUaWGEIQCTa9X%2FdnOZYxvfH6SevQj4EvTZEkf2c3iVENL%2BphPUBY6Fm0QuJQ2PYraxVBs%2FAK31d3mx0sltu%2BFv%2B5Op%2FwvQk%2B42094AkrUB4zPwUxq2fe%2FwN%2FNbAFyqDd6KPBb7gSp0KqWezc%2Bgl23i1Ns4jMrpdziO%2BdRz82WFoZBiAduciwJCsZdCYIlwTwxJaiGiAuw%2Fn3CRKnchcHMxWdF3zh5HSp7%2BZQ0PoOxQbE4nU8IpliLrRBPZ8ORkRhkmebUj9bV%2FDIqJWzFoe6cAIgVcjV1T%2BQ7Gi1gUnz%2F2S6bPgEUjffzpy50u584pS%2BjrNBnsNlzyuslDR59Et1CHHeodNzrBehluDBgLX11EHK0ZFAmj4E7bBKnDlzad8J4Fylrt6LM84N0FtvhsU3F99VTRfUsc5ykqGV1%2BOf8Khxszu1jH5WW%2BFiUOz7KuIAWzgfZdY%2FxpLNDwyxpy3Jb6v63G%2FPeM3D9EWlAO4pCjSeRcg%2BBgTRXMVISSUhr7RaYF7YmV9litGLjaBtYXcoY0bzYddxPuPL79cpud80Bb9BDaUwsbT2wQY6pgHm6CnebRVjY5pJHvPrlFWqqJWONQv5Zvb9I1CJZXkKTMiFX0FbIgyZ4X6GCBUokuP%2BSPUinVnJMg%2BSEyInLdwg4a0ysBjASwoME2PTIgyVOI5yra2mtT4KcRSDGDMkSZ5dDTr2KtS0Avvh8EnZ5hl1TqgB19Ke8E1hMdrfHHGXb2aoF6H3Gy6pUppS7GovNnHQaubLOdeBrEx3bnxIXRotsYTiNI3R&X-Amz-Signature=9c692fe9a92374d0daad7fbec3680306bf84c50ab87a7b936e3d87ad0b352122&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IW7SNDL%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDhiPSiW1f0aVKGjL5CYqbJ1eQZtsnPAUTw3PHy%2B4L%2FkgIgItOWoMcZxkLmX5PVI%2BPJ8kbJkgE%2FdYq0VD9HduXBjVoqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4IbFs3A4AijlVBACrcA65d99BK2ofs3PGnCd0poDBWM9MxK%2BLCNVpIQh4jrVM8QiTC3X9U2XypSu62maTBkZW5adCFAB8QQFiIGaiPUGesti6kPhevY5j%2BMmPKuXrIuC8d6NERtp4P8fLsbPVzalWjPsV6%2FnGvQuZhd%2FTQaJqHSONRu5ZTTBMjLMO7r6KUzRNawOscKUVX1IFR3kH9yyU6S5sMmbPgsQJZwQbx%2Bqihf8VQCL86pQs8CJsc7IPMA%2BuM%2Bu55L9cLpZX2L1GXfLB6u4WmQGEEKeChCzpKPW0EIRdq2admuNsafY%2FJfSrZWKELT1YPumrHmuzLclRAFumb5cFYoIUPY2%2FzgUNS005w%2BdQ6QgkySv0uYWRbIINCWoU23a0zREL3NK1%2BPEoa%2F5uheQGemy8knKBQBpbYstMeO%2BH00u09rl4fF0owcnVmN5U%2BCiUEPNA8ZqDQdbSXdLW%2F4c%2BWogZmU2OwO13zkWyBbk%2F4XQ1pYowwEY9deUtF64Xy%2F9l%2BYrS33VRtBKujcakH%2BCTtMem8APhnZHeRfbtbhJmt3mB6fgts%2BgMagYt1SH78i0LQze6DOrsv2cjCaUFhOgXd3a6Zzl6lP63Hl3I1L0fGRPrO330Xv3ppGWFQe0Gh86MvdxDuC6VlMM209sEGOqUBnHwgG7eMYG3%2F0iZf6v%2FnmxwbK4%2BNeLihBzs5V%2BJFiljygcYuqubGLcl6%2F44F4OLQ9rJ5YcK%2FbEUeCKgfZvt8rdaB%2BSbyOcsubKa4vmmHtXSzTAfa7q9yzXtpq855sSZ4WI2%2Fal%2BMVLdaXo8wnp8G2D%2FG3Y93tXip6epkZQJNwQAPH%2BeMXAkGpk6aJETIYbm0Os2PR85E8YxNTAUcIgDMTF9U4Tuw&X-Amz-Signature=9e55a08cc056f09716ec32e7c19c1db036976fd3fc80df9a5355e476b6f1d348&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
