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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKHXF2GW%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDLUwNuqgoM1kHHZcVe7Vxkmp5TW2dJTmkFWS7d4w86IgIhAOOcm4%2BmGm0NAmn%2BcKCXyFnJ6ceFEGfclmG%2Fm3Tm7FlgKv8DCCUQABoMNjM3NDIzMTgzODA1IgxoDJDVtmqr89K4Zyoq3AO6OFrT8bkp7ZRbJ0KvUAxTMQvb7ZYnXfnnnizcxj2DNeRW2OzUjyGvuLY6KN1aPqnzpwD5fZgUR2U9kWWCyFoeJX9XWTA1HYqlb%2B7Z5aOMaBcaL74PPT2sEGIsAYfBRu98FQCB0ccT5Xgbg%2BPGN4quuecCIrrePnrEr4amvRgufCLvtwTEuxeKa4Lej3Z8X6eAyUH5h4RwC0pqwa00Ev0ZH4rG3Rodt3B0qRO%2BfD3FKqPcQTMcr4LYrnw2%2B8hE1zfScjwYUSR3UwlrIE7t8Kpczwg3DTU7b%2BV%2BjGr7DZEkG%2FTenLeBQpwg4uLup3I0rfk53bkdGF5iEZh5CBxkiutOoooteK7GLIMrmpONJ58IFRNsgedBTxmWOYk51pb8TxtarqgFj9NdkYu8vF5uQPdf8lM4fi7QiVDmByQD9fDQPpGaB6qjBZbX5SMohPLB9k6pXbh7bS3OnrUv7JFnv6GO8bbWELc1hirf8uZP772o1Hpu6yXIgw7E3W1PoKIeoYXxGTz9HeB%2BCFWsFMnqNjZB8BoYCuVmfvvUttsrYle2QGI3MaWpd%2FTXseJGDoV%2FmBxYh0Ny4%2Bwm9NrOB4AjTjCdKsCvk6COHpkNL81sehKGNJzogBB8lnxhELzLlTC7iP%2FBBjqkATWpSIjPAyOQFPE%2BaGfp2QPPiXpokcYiqXJxmX9k9AQug%2FLB6LkcXJU0MyOwEh0An5F9jNth5ioyDs4LfshHGnUGSO0l%2FkZjY%2BeDy9ue%2FUTgiM9g0csl8bldrByRpYuFX6uGyHof8xqv3uc0fZb21Skx19loG6HVY4Wh9PzwFlvyRbF631D1Sxg%2B611ve%2FfzhhRGVpk6x6VeOANqB9pb3zfaFNxI&X-Amz-Signature=8db1858624d87c77e7c7d5a592db4f72674527500c3f64a633dad07a2e69de2d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKHXF2GW%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDLUwNuqgoM1kHHZcVe7Vxkmp5TW2dJTmkFWS7d4w86IgIhAOOcm4%2BmGm0NAmn%2BcKCXyFnJ6ceFEGfclmG%2Fm3Tm7FlgKv8DCCUQABoMNjM3NDIzMTgzODA1IgxoDJDVtmqr89K4Zyoq3AO6OFrT8bkp7ZRbJ0KvUAxTMQvb7ZYnXfnnnizcxj2DNeRW2OzUjyGvuLY6KN1aPqnzpwD5fZgUR2U9kWWCyFoeJX9XWTA1HYqlb%2B7Z5aOMaBcaL74PPT2sEGIsAYfBRu98FQCB0ccT5Xgbg%2BPGN4quuecCIrrePnrEr4amvRgufCLvtwTEuxeKa4Lej3Z8X6eAyUH5h4RwC0pqwa00Ev0ZH4rG3Rodt3B0qRO%2BfD3FKqPcQTMcr4LYrnw2%2B8hE1zfScjwYUSR3UwlrIE7t8Kpczwg3DTU7b%2BV%2BjGr7DZEkG%2FTenLeBQpwg4uLup3I0rfk53bkdGF5iEZh5CBxkiutOoooteK7GLIMrmpONJ58IFRNsgedBTxmWOYk51pb8TxtarqgFj9NdkYu8vF5uQPdf8lM4fi7QiVDmByQD9fDQPpGaB6qjBZbX5SMohPLB9k6pXbh7bS3OnrUv7JFnv6GO8bbWELc1hirf8uZP772o1Hpu6yXIgw7E3W1PoKIeoYXxGTz9HeB%2BCFWsFMnqNjZB8BoYCuVmfvvUttsrYle2QGI3MaWpd%2FTXseJGDoV%2FmBxYh0Ny4%2Bwm9NrOB4AjTjCdKsCvk6COHpkNL81sehKGNJzogBB8lnxhELzLlTC7iP%2FBBjqkATWpSIjPAyOQFPE%2BaGfp2QPPiXpokcYiqXJxmX9k9AQug%2FLB6LkcXJU0MyOwEh0An5F9jNth5ioyDs4LfshHGnUGSO0l%2FkZjY%2BeDy9ue%2FUTgiM9g0csl8bldrByRpYuFX6uGyHof8xqv3uc0fZb21Skx19loG6HVY4Wh9PzwFlvyRbF631D1Sxg%2B611ve%2FfzhhRGVpk6x6VeOANqB9pb3zfaFNxI&X-Amz-Signature=a7ae5d68564a64d4f9f1743967d4de7092a38cc6cd8417425617c552ce3bdfda&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKHXF2GW%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDLUwNuqgoM1kHHZcVe7Vxkmp5TW2dJTmkFWS7d4w86IgIhAOOcm4%2BmGm0NAmn%2BcKCXyFnJ6ceFEGfclmG%2Fm3Tm7FlgKv8DCCUQABoMNjM3NDIzMTgzODA1IgxoDJDVtmqr89K4Zyoq3AO6OFrT8bkp7ZRbJ0KvUAxTMQvb7ZYnXfnnnizcxj2DNeRW2OzUjyGvuLY6KN1aPqnzpwD5fZgUR2U9kWWCyFoeJX9XWTA1HYqlb%2B7Z5aOMaBcaL74PPT2sEGIsAYfBRu98FQCB0ccT5Xgbg%2BPGN4quuecCIrrePnrEr4amvRgufCLvtwTEuxeKa4Lej3Z8X6eAyUH5h4RwC0pqwa00Ev0ZH4rG3Rodt3B0qRO%2BfD3FKqPcQTMcr4LYrnw2%2B8hE1zfScjwYUSR3UwlrIE7t8Kpczwg3DTU7b%2BV%2BjGr7DZEkG%2FTenLeBQpwg4uLup3I0rfk53bkdGF5iEZh5CBxkiutOoooteK7GLIMrmpONJ58IFRNsgedBTxmWOYk51pb8TxtarqgFj9NdkYu8vF5uQPdf8lM4fi7QiVDmByQD9fDQPpGaB6qjBZbX5SMohPLB9k6pXbh7bS3OnrUv7JFnv6GO8bbWELc1hirf8uZP772o1Hpu6yXIgw7E3W1PoKIeoYXxGTz9HeB%2BCFWsFMnqNjZB8BoYCuVmfvvUttsrYle2QGI3MaWpd%2FTXseJGDoV%2FmBxYh0Ny4%2Bwm9NrOB4AjTjCdKsCvk6COHpkNL81sehKGNJzogBB8lnxhELzLlTC7iP%2FBBjqkATWpSIjPAyOQFPE%2BaGfp2QPPiXpokcYiqXJxmX9k9AQug%2FLB6LkcXJU0MyOwEh0An5F9jNth5ioyDs4LfshHGnUGSO0l%2FkZjY%2BeDy9ue%2FUTgiM9g0csl8bldrByRpYuFX6uGyHof8xqv3uc0fZb21Skx19loG6HVY4Wh9PzwFlvyRbF631D1Sxg%2B611ve%2FfzhhRGVpk6x6VeOANqB9pb3zfaFNxI&X-Amz-Signature=6d736d38c99b6c4886c9e7109328172ee0e2ef2f5bdea05c1c42699a7895b914&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HLHOV2P%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDfdjY2CfKemtmKO1OBOScXc6IbchU2Y8lMI%2FUk3Mi4EAIhAK1YdFvwgv33mlWjE8xSVMXcsY7LoC%2FEckqHU20PTsYfKv8DCCUQABoMNjM3NDIzMTgzODA1IgxsDSyJoXuWCAF9eVAq3AOoVoj%2BwDwCF0wAq9lRSGDzP4W42cDBhWy3NPYHbZHaelLBfZ1YZg6KZKud8WYtf4sWfAQ5%2FShyfXKMRdYWXOZUaLdF3gQpD%2Be7ZXdQ4nkq7bJw4PfYb3GSsqayxxm7eND9nsH8cjsv4FuvE60qiHPs3ysW%2BTEz0l7YxyFYSAIFa6APx3hpvRwPb2R8XDRWQTUCkjsk68ppf0JZ1JAQNhe7iLUKamkkWfZolihgwyXf%2B3kQ4etYjW2qJVEh8%2Bi7zMOJ13q4gBzMvcNpqxV74fjJ8yFsWXcQi3myFLJVDWSifTTZtX71Reri2R4BAFRcc4XWB05WUG27IjwIHGPuRq8RSdrCc391bdYQ3ubGThCPayIwNRiwIubGds3kzwm3UWp6O32HXGH7yEPgaU9b5Tfrt8pWdtTlftBOPGLjHXW1zJ%2FY5bXnKS8C%2Brz8iEJPLJtY84R8XTsy%2BRO55iTnZFQ1mBTj5V4LxVT%2BjS3b%2BtKCB7TqJYWhVurPcnXjGUQdzM%2FhSXQMjV5OaWcZD7957fDh12HoaK%2FGoHNakQjdxq7f4lDmKszCXNRwlIlmRuv17LV0cHen9%2FPpbCGuLxcBCWWHkf7FFL8qzI7IdAJZP6flRXJixcBDyK3ECJkSEDCAif%2FBBjqkAQSO2vUD9ehB0KpcGZ0BY1y8x%2FPvE1LHXTV1quP2hI1DmE90%2BqN%2B7tMNn7QNutk1zn29SbiK9SNjbvEUQRPVSfo4zKH99IZq%2FmBliQlOvEQgmcxPbDIj47KisSewbEP5hVkjsazmG1ee0TZnAM3tPmSNvogO%2BRU1NS3EETHUf58fgp6PXn4j7z1HdlKDG2D%2F6ai8GI0fhy%2BiKsVQE5nnNVBmA%2Fv4&X-Amz-Signature=d8a0680ab00a37fc4c03a87aff53485880d2685417596551556cd26d19eff323&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRRYUI2E%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIHPma1Ai5etrLocSX75JnHD3PWFHqJH6rPceK8m0WESGAiEA12CkJG7DuAQMNJj2dW6ZzRZxvKgB9s%2FAqNVbRfMzKsYq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDGFh5HoVsOVrft0gQCrcA%2FY%2FdIh7aOTjavkh6ycTo2S2A3L%2FPU2%2BN8oLWDcvoYOxJ4aLxP2S9ECv6X7QNvIWyRtDOsNOoLcdKaZAaSYTmFbwA%2B2IEK3F66KR4XNLym%2F%2B7PoeScuexTD7uF19iQXmfqQ4chkUNakyLe572gu3LI0E7bsiRqEIrW02s43lywFwhDGp86EV3tJZ7HPaKhr7pPQgu5jRCnS0JVcK6iemw1BfxrCLD8IpUTc0zO%2FyILFmMMXDkZYoxMmiemkG5wn4ZOirMuE3yU5VpknjmI9cJBY5xFPZG38SUjjebeZuM7mkA5CoTwp94FIehOnOU3eshWhr1e4q6D776CbCNiO%2BWL7xT4I%2Bv6Uju2RC60YCtnDbde1KyW5XVdgX5J%2FpHf1%2B5f2ZvckMTIwks4WuumKlMwtAX%2Bn2lsbBqnhHeskCEDLDH7vlHX2lSE4JDkeNysTNzfwPSJFB3sNQcgHIsrYcWx52p09%2FyoOZBbbulgyHCA0U3AU2R2Q4GEsPuwr0PI9Ri6ab4AiQvFSLOZtDdJK6lr3yl93hsah8UHspNcYZJbcdCEJnBYv60gxCjTqQ8aED9S7pxhEEy79Yj7MSshVMcb%2BD2rGWFe9YSjFwYasZCyJIT2%2FGmGCOkaLrR6LDMICJ%2F8EGOqUBIy5koUaNPJXeZ4J%2FkaiIbJzYIBXW%2B3wL6dfDejnOR4zOzMr9YEy3WE%2F97Z1hhxeTaVmOZmF4yz2ocq49PPTqJwCAbXwUb6a0pTS%2FjhNewlcamnbnvziYvtafcADX1lTqavym7S8aIENn%2F5ZHSr%2BYACc4rAt7UX6sle5Z2Yjp1gxdfl8PN3UURlbInPh9nOHu6uV5pbBDxHkzstWaGzjsfcgh9T%2Fi&X-Amz-Signature=39b71b8e4a6555c00c83a3eed216c2ee8245be4d2c3822be2a1a1a3ab7af2593&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKHXF2GW%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDLUwNuqgoM1kHHZcVe7Vxkmp5TW2dJTmkFWS7d4w86IgIhAOOcm4%2BmGm0NAmn%2BcKCXyFnJ6ceFEGfclmG%2Fm3Tm7FlgKv8DCCUQABoMNjM3NDIzMTgzODA1IgxoDJDVtmqr89K4Zyoq3AO6OFrT8bkp7ZRbJ0KvUAxTMQvb7ZYnXfnnnizcxj2DNeRW2OzUjyGvuLY6KN1aPqnzpwD5fZgUR2U9kWWCyFoeJX9XWTA1HYqlb%2B7Z5aOMaBcaL74PPT2sEGIsAYfBRu98FQCB0ccT5Xgbg%2BPGN4quuecCIrrePnrEr4amvRgufCLvtwTEuxeKa4Lej3Z8X6eAyUH5h4RwC0pqwa00Ev0ZH4rG3Rodt3B0qRO%2BfD3FKqPcQTMcr4LYrnw2%2B8hE1zfScjwYUSR3UwlrIE7t8Kpczwg3DTU7b%2BV%2BjGr7DZEkG%2FTenLeBQpwg4uLup3I0rfk53bkdGF5iEZh5CBxkiutOoooteK7GLIMrmpONJ58IFRNsgedBTxmWOYk51pb8TxtarqgFj9NdkYu8vF5uQPdf8lM4fi7QiVDmByQD9fDQPpGaB6qjBZbX5SMohPLB9k6pXbh7bS3OnrUv7JFnv6GO8bbWELc1hirf8uZP772o1Hpu6yXIgw7E3W1PoKIeoYXxGTz9HeB%2BCFWsFMnqNjZB8BoYCuVmfvvUttsrYle2QGI3MaWpd%2FTXseJGDoV%2FmBxYh0Ny4%2Bwm9NrOB4AjTjCdKsCvk6COHpkNL81sehKGNJzogBB8lnxhELzLlTC7iP%2FBBjqkATWpSIjPAyOQFPE%2BaGfp2QPPiXpokcYiqXJxmX9k9AQug%2FLB6LkcXJU0MyOwEh0An5F9jNth5ioyDs4LfshHGnUGSO0l%2FkZjY%2BeDy9ue%2FUTgiM9g0csl8bldrByRpYuFX6uGyHof8xqv3uc0fZb21Skx19loG6HVY4Wh9PzwFlvyRbF631D1Sxg%2B611ve%2FfzhhRGVpk6x6VeOANqB9pb3zfaFNxI&X-Amz-Signature=d58b6e9caa2f574a7e41f4ac44a1ce4f447b584060ed01954a0809e54a4640ae&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
