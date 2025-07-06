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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPLIGOVM%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDSe8N8K9rCC6QTjqCXQDjMnDwy9ZXP0LjMEX3rCWkwFgIgHZxuNyKuiK6hI%2FymtPWmmjdeiBAXdfjKQ74vRY8j92kq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBtYd8Uuz998qhqZUCrcA70NLHjHZJFoL9x2oO2moIjiA7lIDmVgdlitypC%2BlakvEs%2FEMhea6yxbSO8y5abZCqQfZ52F%2BQkP7DpoOz6PsLfYJpUhpLZv7gY5Q7fwP6anTahdhs0oswKRV4mUzQlfHEwB3id4OwXo0BqKP7h%2Bd%2F9u%2FdzxFYYskqtZmGfP8Utc3WRSIDLnkUcW3%2BDkrpX730MYtncDc9iwU7D2kxRowg4ci9tPo8wbjzw23e2rGwrO4EWUv9lb8Rh3ogIhcYu37wDITubDVQ2Qsw%2BA3HVky3HDpQXh8Av%2Fk2DaUUu%2BfmOqlfgWdxkhOIEAm8BHbX34iL73J8wdZFBLwdC4HlNMck13X0n2qZ%2BcHjFfutVjoFcA3RfiLJZuPDmnn03oewqDXX6CNcEBi%2F7RqkzylFxts36SrKWCpBpQKGV6V7tQiT%2F1nCPEAAjwaw7%2Fw0XnUAyBsM2dwgxLSqzqjBS%2BNo05hw4BA3V4gZO6O020s2%2FT8m06Q5rzm%2B5JC5XzyHu7V4fjSFoC%2F6WjvCrT79tM2%2BokdnE6WTfbgYqDuVZKabamFVtvHCORbkYcnP59HGQG87dwO%2BGWIGTXr2Xyz2POXLp3em3ZqLJl2N7HI15JtMfv0bIMuUFibqFddmPH6DPqMNmsqMMGOqUB9EHMkAOF9gV83ibpknBmgBfuzOy6URdINvi2k6p2NIIilHGpj7M6Mf6k%2B93pwg8EPNmvX26PslttUST9pFPHnjoQtxfOPIxLtiXdpEiWEnf0pCTxcHsjP8Hz%2B8pL0vMf1ZHPJ2Ggt0SFs%2Bqb7K2iIzs%2Fd3DjsOEwM8zImn8UkHubxmDvC8cAlHVgAyg6lFSLm%2FU0wPY4P11RMJmGf6qE%2FrzxIodl&X-Amz-Signature=2307bec803d316ae0229bccab7a9021deac5ee5c3418bfc4106a3d371d76c39a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPLIGOVM%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDSe8N8K9rCC6QTjqCXQDjMnDwy9ZXP0LjMEX3rCWkwFgIgHZxuNyKuiK6hI%2FymtPWmmjdeiBAXdfjKQ74vRY8j92kq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBtYd8Uuz998qhqZUCrcA70NLHjHZJFoL9x2oO2moIjiA7lIDmVgdlitypC%2BlakvEs%2FEMhea6yxbSO8y5abZCqQfZ52F%2BQkP7DpoOz6PsLfYJpUhpLZv7gY5Q7fwP6anTahdhs0oswKRV4mUzQlfHEwB3id4OwXo0BqKP7h%2Bd%2F9u%2FdzxFYYskqtZmGfP8Utc3WRSIDLnkUcW3%2BDkrpX730MYtncDc9iwU7D2kxRowg4ci9tPo8wbjzw23e2rGwrO4EWUv9lb8Rh3ogIhcYu37wDITubDVQ2Qsw%2BA3HVky3HDpQXh8Av%2Fk2DaUUu%2BfmOqlfgWdxkhOIEAm8BHbX34iL73J8wdZFBLwdC4HlNMck13X0n2qZ%2BcHjFfutVjoFcA3RfiLJZuPDmnn03oewqDXX6CNcEBi%2F7RqkzylFxts36SrKWCpBpQKGV6V7tQiT%2F1nCPEAAjwaw7%2Fw0XnUAyBsM2dwgxLSqzqjBS%2BNo05hw4BA3V4gZO6O020s2%2FT8m06Q5rzm%2B5JC5XzyHu7V4fjSFoC%2F6WjvCrT79tM2%2BokdnE6WTfbgYqDuVZKabamFVtvHCORbkYcnP59HGQG87dwO%2BGWIGTXr2Xyz2POXLp3em3ZqLJl2N7HI15JtMfv0bIMuUFibqFddmPH6DPqMNmsqMMGOqUB9EHMkAOF9gV83ibpknBmgBfuzOy6URdINvi2k6p2NIIilHGpj7M6Mf6k%2B93pwg8EPNmvX26PslttUST9pFPHnjoQtxfOPIxLtiXdpEiWEnf0pCTxcHsjP8Hz%2B8pL0vMf1ZHPJ2Ggt0SFs%2Bqb7K2iIzs%2Fd3DjsOEwM8zImn8UkHubxmDvC8cAlHVgAyg6lFSLm%2FU0wPY4P11RMJmGf6qE%2FrzxIodl&X-Amz-Signature=0a7572936a3a8ca2b0b120ff839b1ec1d94ae4c99bd941ce439905eb9c90c144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPLIGOVM%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDSe8N8K9rCC6QTjqCXQDjMnDwy9ZXP0LjMEX3rCWkwFgIgHZxuNyKuiK6hI%2FymtPWmmjdeiBAXdfjKQ74vRY8j92kq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBtYd8Uuz998qhqZUCrcA70NLHjHZJFoL9x2oO2moIjiA7lIDmVgdlitypC%2BlakvEs%2FEMhea6yxbSO8y5abZCqQfZ52F%2BQkP7DpoOz6PsLfYJpUhpLZv7gY5Q7fwP6anTahdhs0oswKRV4mUzQlfHEwB3id4OwXo0BqKP7h%2Bd%2F9u%2FdzxFYYskqtZmGfP8Utc3WRSIDLnkUcW3%2BDkrpX730MYtncDc9iwU7D2kxRowg4ci9tPo8wbjzw23e2rGwrO4EWUv9lb8Rh3ogIhcYu37wDITubDVQ2Qsw%2BA3HVky3HDpQXh8Av%2Fk2DaUUu%2BfmOqlfgWdxkhOIEAm8BHbX34iL73J8wdZFBLwdC4HlNMck13X0n2qZ%2BcHjFfutVjoFcA3RfiLJZuPDmnn03oewqDXX6CNcEBi%2F7RqkzylFxts36SrKWCpBpQKGV6V7tQiT%2F1nCPEAAjwaw7%2Fw0XnUAyBsM2dwgxLSqzqjBS%2BNo05hw4BA3V4gZO6O020s2%2FT8m06Q5rzm%2B5JC5XzyHu7V4fjSFoC%2F6WjvCrT79tM2%2BokdnE6WTfbgYqDuVZKabamFVtvHCORbkYcnP59HGQG87dwO%2BGWIGTXr2Xyz2POXLp3em3ZqLJl2N7HI15JtMfv0bIMuUFibqFddmPH6DPqMNmsqMMGOqUB9EHMkAOF9gV83ibpknBmgBfuzOy6URdINvi2k6p2NIIilHGpj7M6Mf6k%2B93pwg8EPNmvX26PslttUST9pFPHnjoQtxfOPIxLtiXdpEiWEnf0pCTxcHsjP8Hz%2B8pL0vMf1ZHPJ2Ggt0SFs%2Bqb7K2iIzs%2Fd3DjsOEwM8zImn8UkHubxmDvC8cAlHVgAyg6lFSLm%2FU0wPY4P11RMJmGf6qE%2FrzxIodl&X-Amz-Signature=0b7bec97f4ec05459ef28265398b779f878ee82f701cd316aacbe991c4f3647b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGPO4O35%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDcFA7gpAoa2L36A49r05Ce9aPV9%2BfL5a%2F%2B66tahZL%2BxgIhANjqos5MnXz%2F4C3uqi1MhCn972n%2BfZDHH%2FmAs88aNIAgKv8DCFcQABoMNjM3NDIzMTgzODA1IgzOImfgWbEeezZr6RUq3AOkqL6MwH%2Bq%2FK%2F%2FZ79%2BO7WQJ5NuExrtH3dkwK7QvbYfuepipLTpRkUANjPHe7HFReZ%2FXA0d2dwYYDWzMQ52st44RAxjEt3%2FUHeJge2A3kEZn0K2ArWasbSHfyQ31sXqVlSJcfI05GFMY61e1ELIrUywMRNQaabhNy4b0wsqSOEZjf%2FKRyNpb2fYT6deCFma7ZnfRo1BubaxiTxK1LMl3BDvOhnnyNccCStm3bZP8DOtG23pD9Fv9sgoeYyUS95E%2B3%2FsJhlsd%2BbiVecY7aMXR2eGwwvVK7t4OlLabaApzx34%2FU%2BAxUQdYKhXztbhxNzBCHguaZNuH0o6sRHhrEPycUmidbeIokYgCgUvqextyxRW%2FN5FDRtuXSX9m9yxU31Q5hOVIgqAt8qMiwRqoiFXNld7I7c9EQXkjS5uCC6xpUv8e6FPNtlU%2BlGcA%2BIf%2BGDB9iNkA34tukoisPLOGUJGgbzdIoZaNW%2B0hgOFCMV3xVlt0gvdUYQow1J%2BBjD5RymYNenMHPHaJc6xTwEjQkUNu07Vf0E17Ev8Nw6B0okHszvzgtDLqYUFQCbxORMViUJcbnpLuzqS8LzyJjmCfKs6cZB6gSf9MXVMP1nbSk6yOoC4QweEzmvgRhFoxlDtAzCMqqjDBjqkARmj7YPQgEM206PNGP%2FuBi3k04sYVGd%2FGuMs%2B1orfDqogyX%2FKcHRMqJQ2tW6UFG%2BbTSV77azwHU%2FzSQGR%2FPUZ9ZU7RLcZ7KKUZJPH0z8bGpb6P%2Bm681F24ujq37Y79L5psyzhXYRZq2F7fxkp5pHFpPfCKHwz0gRV49CNQnCBXCjjpXdiovVKpec3g4RYY%2Bglp7m6%2FhoAk%2BTmViEo73GCMFrjrgp&X-Amz-Signature=4380b2f20026270bac6926fe7109f726880a260d21c49cc32a170900e5e6ae92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E2WJG5R%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCVcMH0Lkk6DMvcIKYaxuCKBXs29sPLqVDxNkTGteREzwIgIJgVlF%2BJLxK04%2FRoB2FtbZVW7ROui1DYWdK5mjuEqUMq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKcVX1Y0WzcoFiH5MyrcAyKVZoyPuCM4V1nKdIGQ9%2BiU6d56tEEhPZb6aFB31Ljeavii%2F6oCxepArXhnl1Zq%2BgxL4FKtJ3mKeY0wN3aLk00%2BdemmUqgXOi0P0dCtyvujTaHTEjggZlcybbXelwsbvrNGn00oyvQ1mhEcr93nDycleRNiVUDHXlqP2J1kAfUd6iaGU1%2BZKeKLcgolbGbU60w8GyRkz49ZFHaCvH76KMLbxJBl44HWbp8MbSUUlUzFlWrZiLiXxluisZg%2B1yELauGF%2BeL3EmZ5XSHYCGghDa%2B0bAEJoziG838TbYB7aoDqjzcsPg2swIt63ywtNT2VcJC%2B2eRhCDPPIymKupHBYgLZa%2FT7xkEUAEBSADsdTTlyJ91z8JQZEnAYByZXXKwoNt9c1L%2BTHAMxtUY%2BwC0AWpFnhJhrGr9MKmixWVokD182e79A8aIZybuAAtm4OTmi0K%2FCD4Xd9s%2BT1xm1IGTRM2NJLeoD32MDYUKmAg1k8GPx52No5A1zPZwbEAUvxQcE%2BcdcQDmeiN5kN1AHzF1vELUvTGOXPo6tdq3gc0ucKyqVMfDrr8M87%2FWxtGexTidPlYwWU%2BUry1nllRgmCkcXhQAoaHY27ZUr%2B3EIF1%2Bwcd3csQsPNr%2ByYAX41hBJMJGwqMMGOqUBtwc8Fu7ZX%2FGZ2K87joWi%2FXjUPr8Dg58NHttcq67YKYGnNtQF3aJrGPWoZt91%2BwPppi5QDtUcH1x4dM9poR4%2BTYFlkFkwmbKD%2BB0sneZF%2FA4iqe2z3uT7MOC7aVTCFdDako6PXdFwPtUlD6pPS3iouGUWy1FQRO%2Fsq16j59BodnFTW%2BOaveU0SkdCVPMkuPEZwU0UY%2BKFQceAo93xJkXr5F7TjdpG&X-Amz-Signature=fb4b6cec6fc823dcc21eecc12fb52c0eb7903d17e5381cce2e2a666cdee67c1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPLIGOVM%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDSe8N8K9rCC6QTjqCXQDjMnDwy9ZXP0LjMEX3rCWkwFgIgHZxuNyKuiK6hI%2FymtPWmmjdeiBAXdfjKQ74vRY8j92kq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBtYd8Uuz998qhqZUCrcA70NLHjHZJFoL9x2oO2moIjiA7lIDmVgdlitypC%2BlakvEs%2FEMhea6yxbSO8y5abZCqQfZ52F%2BQkP7DpoOz6PsLfYJpUhpLZv7gY5Q7fwP6anTahdhs0oswKRV4mUzQlfHEwB3id4OwXo0BqKP7h%2Bd%2F9u%2FdzxFYYskqtZmGfP8Utc3WRSIDLnkUcW3%2BDkrpX730MYtncDc9iwU7D2kxRowg4ci9tPo8wbjzw23e2rGwrO4EWUv9lb8Rh3ogIhcYu37wDITubDVQ2Qsw%2BA3HVky3HDpQXh8Av%2Fk2DaUUu%2BfmOqlfgWdxkhOIEAm8BHbX34iL73J8wdZFBLwdC4HlNMck13X0n2qZ%2BcHjFfutVjoFcA3RfiLJZuPDmnn03oewqDXX6CNcEBi%2F7RqkzylFxts36SrKWCpBpQKGV6V7tQiT%2F1nCPEAAjwaw7%2Fw0XnUAyBsM2dwgxLSqzqjBS%2BNo05hw4BA3V4gZO6O020s2%2FT8m06Q5rzm%2B5JC5XzyHu7V4fjSFoC%2F6WjvCrT79tM2%2BokdnE6WTfbgYqDuVZKabamFVtvHCORbkYcnP59HGQG87dwO%2BGWIGTXr2Xyz2POXLp3em3ZqLJl2N7HI15JtMfv0bIMuUFibqFddmPH6DPqMNmsqMMGOqUB9EHMkAOF9gV83ibpknBmgBfuzOy6URdINvi2k6p2NIIilHGpj7M6Mf6k%2B93pwg8EPNmvX26PslttUST9pFPHnjoQtxfOPIxLtiXdpEiWEnf0pCTxcHsjP8Hz%2B8pL0vMf1ZHPJ2Ggt0SFs%2Bqb7K2iIzs%2Fd3DjsOEwM8zImn8UkHubxmDvC8cAlHVgAyg6lFSLm%2FU0wPY4P11RMJmGf6qE%2FrzxIodl&X-Amz-Signature=fd2e1a15735995c4a9b1a9c1447261f012e18be6d7b0892f32ee110e7e508a39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
