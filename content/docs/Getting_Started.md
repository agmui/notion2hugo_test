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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB2PWIVK%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCA1ybfc3Fbzk%2Bd7FKYWGZVLLT1nS2APT%2B4kf8yQD%2B7GQIgHJOFDBRDORLs7SXeIvGs66v5Gu9BObzCvavAWEedmRUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGXrBiVm9T4l0rVTSyrcA%2Bn6uHEjg0eSQy%2FTdofR4f49%2BkyXDJ4wZIfyHzb3i%2FEHIJlBDIqZ1QDpuNg20V63ONGq08a0RKZ6UWO%2BldiBYgGLoSoTH0NsVndsYoyy9bLZhgh7hpovY%2BXbzMpLAAkaUGTNz4xDlhLFaxsICAiMSttDS0gXN1TWzcc7mo8Gopzvuq1deLn0%2Bl4ZGwgULDXzzRfYOzEaKHC2J51f5F%2B1iD7xJIMl%2BTNzvAidZ29Cs4cBHZEuhxiCZp6p2zkaYrjdpahcpL3ZAvhLEok8FEvSlzaAzWnB1gykZtzKWT%2BXMa9txIo%2BM5fkHZTr%2B8STMKJ6cSzu3dW4hAXi4MSf05PIOmJuHWeW9vFUAQKlxJv4oU63tDKgPcIQPCNPMWEUJp1NzmYDGfGXvsQhqq92fumXlpHbzp7HuojhYAejNpnj3VMW3YmadjTwGt%2Bz85LdaMclmj1dDXzFkLvJ9Le1tGAgAQ6aPzhdvwc7K%2FUeAP%2FnrPjRQ%2BaI0gkNdtnRWFYY8V5wD%2FuSq4t%2BOBTLaLC87RXbevWS4cVYJlDAWQMEk6pQq0crHM3hM%2BmazbXFfjuoB4boc62A1KeBqxZ4FtZmApxdDgplTAZLuwOiVCuxOf3PY4%2BJI4lDk3M8UmDB8xsDMIzJwMIGOqUBCQLIfoqg9K0y8O1eq%2FCq64ilXMkU6TLlAiZpnVAYN4L2PA2Dh2xYhuJUd%2BeFVDiNtdtphg4Qns%2B%2BzgI3dHlAJdJ2plFEtHZ3g3zOKZBUZg%2BIjeEwnKDpK00kMfSGLumUnhkyA%2BVnhdVPPR%2B16gtIEiGybVEjVINLEn%2BMi%2FodMM1YHt3X1nLtc9z%2FYGta3AXVWoKnK9d38mHdH0DH4qAmhrD6BJi1&X-Amz-Signature=21de273ec48d7049d1d616d7b2c0b90ac0c18bacae7dfb8440a4fce55c2c2a57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB2PWIVK%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCA1ybfc3Fbzk%2Bd7FKYWGZVLLT1nS2APT%2B4kf8yQD%2B7GQIgHJOFDBRDORLs7SXeIvGs66v5Gu9BObzCvavAWEedmRUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGXrBiVm9T4l0rVTSyrcA%2Bn6uHEjg0eSQy%2FTdofR4f49%2BkyXDJ4wZIfyHzb3i%2FEHIJlBDIqZ1QDpuNg20V63ONGq08a0RKZ6UWO%2BldiBYgGLoSoTH0NsVndsYoyy9bLZhgh7hpovY%2BXbzMpLAAkaUGTNz4xDlhLFaxsICAiMSttDS0gXN1TWzcc7mo8Gopzvuq1deLn0%2Bl4ZGwgULDXzzRfYOzEaKHC2J51f5F%2B1iD7xJIMl%2BTNzvAidZ29Cs4cBHZEuhxiCZp6p2zkaYrjdpahcpL3ZAvhLEok8FEvSlzaAzWnB1gykZtzKWT%2BXMa9txIo%2BM5fkHZTr%2B8STMKJ6cSzu3dW4hAXi4MSf05PIOmJuHWeW9vFUAQKlxJv4oU63tDKgPcIQPCNPMWEUJp1NzmYDGfGXvsQhqq92fumXlpHbzp7HuojhYAejNpnj3VMW3YmadjTwGt%2Bz85LdaMclmj1dDXzFkLvJ9Le1tGAgAQ6aPzhdvwc7K%2FUeAP%2FnrPjRQ%2BaI0gkNdtnRWFYY8V5wD%2FuSq4t%2BOBTLaLC87RXbevWS4cVYJlDAWQMEk6pQq0crHM3hM%2BmazbXFfjuoB4boc62A1KeBqxZ4FtZmApxdDgplTAZLuwOiVCuxOf3PY4%2BJI4lDk3M8UmDB8xsDMIzJwMIGOqUBCQLIfoqg9K0y8O1eq%2FCq64ilXMkU6TLlAiZpnVAYN4L2PA2Dh2xYhuJUd%2BeFVDiNtdtphg4Qns%2B%2BzgI3dHlAJdJ2plFEtHZ3g3zOKZBUZg%2BIjeEwnKDpK00kMfSGLumUnhkyA%2BVnhdVPPR%2B16gtIEiGybVEjVINLEn%2BMi%2FodMM1YHt3X1nLtc9z%2FYGta3AXVWoKnK9d38mHdH0DH4qAmhrD6BJi1&X-Amz-Signature=a9f2de480fc8134f982dc8034d64279b6c08fcda4e67a19e988e98666722f472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB2PWIVK%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCA1ybfc3Fbzk%2Bd7FKYWGZVLLT1nS2APT%2B4kf8yQD%2B7GQIgHJOFDBRDORLs7SXeIvGs66v5Gu9BObzCvavAWEedmRUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGXrBiVm9T4l0rVTSyrcA%2Bn6uHEjg0eSQy%2FTdofR4f49%2BkyXDJ4wZIfyHzb3i%2FEHIJlBDIqZ1QDpuNg20V63ONGq08a0RKZ6UWO%2BldiBYgGLoSoTH0NsVndsYoyy9bLZhgh7hpovY%2BXbzMpLAAkaUGTNz4xDlhLFaxsICAiMSttDS0gXN1TWzcc7mo8Gopzvuq1deLn0%2Bl4ZGwgULDXzzRfYOzEaKHC2J51f5F%2B1iD7xJIMl%2BTNzvAidZ29Cs4cBHZEuhxiCZp6p2zkaYrjdpahcpL3ZAvhLEok8FEvSlzaAzWnB1gykZtzKWT%2BXMa9txIo%2BM5fkHZTr%2B8STMKJ6cSzu3dW4hAXi4MSf05PIOmJuHWeW9vFUAQKlxJv4oU63tDKgPcIQPCNPMWEUJp1NzmYDGfGXvsQhqq92fumXlpHbzp7HuojhYAejNpnj3VMW3YmadjTwGt%2Bz85LdaMclmj1dDXzFkLvJ9Le1tGAgAQ6aPzhdvwc7K%2FUeAP%2FnrPjRQ%2BaI0gkNdtnRWFYY8V5wD%2FuSq4t%2BOBTLaLC87RXbevWS4cVYJlDAWQMEk6pQq0crHM3hM%2BmazbXFfjuoB4boc62A1KeBqxZ4FtZmApxdDgplTAZLuwOiVCuxOf3PY4%2BJI4lDk3M8UmDB8xsDMIzJwMIGOqUBCQLIfoqg9K0y8O1eq%2FCq64ilXMkU6TLlAiZpnVAYN4L2PA2Dh2xYhuJUd%2BeFVDiNtdtphg4Qns%2B%2BzgI3dHlAJdJ2plFEtHZ3g3zOKZBUZg%2BIjeEwnKDpK00kMfSGLumUnhkyA%2BVnhdVPPR%2B16gtIEiGybVEjVINLEn%2BMi%2FodMM1YHt3X1nLtc9z%2FYGta3AXVWoKnK9d38mHdH0DH4qAmhrD6BJi1&X-Amz-Signature=ece4249293b5da8c379112564f909f9ab6836b77b229b9ddf9266f6e7c141143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6SIP475%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDsI7bGLRpDdFGy%2Fchq16nAR0%2B6jfORBfrOlZdnoBK%2FRQIhAM2flm%2BE%2BuCqi619X8oFMgNa%2FvFR3SFqqxX%2FexWNMc1wKv8DCF8QABoMNjM3NDIzMTgzODA1Igw1USVSMilk8q0XVCcq3AOEj4Q%2BBcHWzlJNqWR%2FMJbdW%2BHsCj5J98uIiEltaBlWppvPKrf%2Buq9h10XhQh3mVKE8AzOEMuykZSInZR4RefzRJK48e%2F9XHrgxJEB67SrtDdt94NNdld39IrmPUT5nfW%2Bhn6Jk1GbLQRzGSi7%2FpZoGkaIVARPNk4W1YIy7mo%2FXpd8%2FMtsuXNeuuV%2BCzQylLCMLGWSf9AE89AxY%2FCUdkY8GSx8UYPKPDe3YMZlmqG6bdWbIxa199qi%2BxP4pznNDl4RBvVHaAc86X45hP21CYPEW%2FDCqJnISqYGygzuNo0psm8%2BWsQzxO2uRgoMekZRA%2FB3Abkm9prpx8Wg%2Bqd4aTcf340O8fWVcbdkzSmdHOMbQNJbmZPu%2BNyD2W95H9anm9wFBx6v50JHXv%2FClRWWmwidW3nyX0ygli7dILa8wXq9rfo3RQ6ITEixBizet8aEBR4DDQvpn%2FcAv4e2iz5BDCM5TSxHtznRp7vCMdGI0KOnlFCgLPZQTRU6DlIMX7XMbfhJ7WUspq2jYwjUxZzNxMoiDi7%2BfH120JijIoZXC7EaGGbEWaFvoRhG7neJrvYKVykYH3ryLKSJ9XO3ylJOHB8r0eeiF39ynRXJHsL82vC35Pc9V2AZuRGt%2BPltHGjCXyMDCBjqkAf1Cv6syprojCDZFhhzvDSUA3ydelbYK%2BHwli2tIMiax2fjTBUNmIHvCiyEOz%2FcsVdS4uac3EskO35smRaKf5vb7Jm%2FQFNQe1KR4FBPe02xdaNw91G%2B%2BebEpmjly%2Bq1NqijthvX6LauFL%2BbT%2FMLaoqM33ybH7icNLkWdh5zkBPCK1amY%2BOBGgUBFcaWtSgNCKfcTiOzQ7qgVo3y1QAt2Z0nh8BBW&X-Amz-Signature=78ff671300674b8f1397956c6cc0cc7a21ed959fa5cd26ca98f988e732942fa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCOKHNSZ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQD%2FBcF7peqhwGUOGAE6mbYHX6OMZgX8gdG%2B0i3pwVwakgIhALD%2FvaURKZyEuqsd%2BM4Tid%2B9JfHwCUpxQ4hkP5spLoRjKv8DCGAQABoMNjM3NDIzMTgzODA1Igy0ys91wURLNxwHOn8q3ANvVIOUNJqzJ18mU3bTumnRLnl%2FERyETiTEtIwh5HCoeYwMYGAjY9SUY%2F3X%2FaGpq6mQ1iCsYf8utwTC5uDYedlS0RW7F%2BCkyiNNDlenEivWQWsL5X5spnr6O9tYwPewX6atwJMYr%2FQ7ScxhoAOPn08IKLbJkW8hrDqyt2Rxc%2BposEo9EaEL1HOP2CKRNFnGAZiJqdXmDhFwHWOMJn3OcUUVb1vAzlPqoRLP0E6i%2BurNAJT0PH7qrGwF%2FBhfM%2FrLrG3sSkvPiyWIEevx2nwLLyJWOavbrpMrcIC%2FW4ExF7%2B2pZ%2B29p5Fu4fqTMEYjOtL%2BdNE6ZoUcKwy6ddQZzF5Kb8EHdyHbIR4nDqeoYBub2g%2F%2FKPCyu1Z5IIZFL5DElzDrLDoOK1hgf26Pbp4%2BCpQ9u36QT5d4GQ3oMtsAZz%2FkK2cOz7c6z3Eke6drl%2BMFBrbz%2FIVcybiaGsLQ%2FVH%2FQrcHVibzORVyf2JuY4Jh0wbq2av9Jty9fNPWxevwJeZlY4MwqQ0VoIHHNasyI8Dd4gH%2FbVZdqjhlcJ1NQwk9oqLepa7iDs9Hu541SaxqifIYPLiF996TFxMTHyPG%2BXsaNuQtElxiTPQu2fhbBUT0R2P2yyUQcHO80pmrI2KXhUMjjCQ48DCBjqkAYnqweFLGf1Z0PecIykalGoYS2c5ASuyur1K7IWaFpU5obX110b%2FlRwLhPuP5rzCLpYbfyKJysFl%2FsXQSXaBGUUh%2BNxkH7ycrAyUb6ezU3PgeP7IiUby06RyUpbaoov3FjB%2BaN44VmKOIZoCimFyw6gSedFXT0RRTL3kiUPV2Y8wWfC1zBiMIlDqS%2BaN9pqvA4Dlf5pPD0GObePUMEMyaE5nFtF3&X-Amz-Signature=6f4650330d94bde582216fa7ffe80502b345b1311fc6233e31a97f8990885ef2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB2PWIVK%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCA1ybfc3Fbzk%2Bd7FKYWGZVLLT1nS2APT%2B4kf8yQD%2B7GQIgHJOFDBRDORLs7SXeIvGs66v5Gu9BObzCvavAWEedmRUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGXrBiVm9T4l0rVTSyrcA%2Bn6uHEjg0eSQy%2FTdofR4f49%2BkyXDJ4wZIfyHzb3i%2FEHIJlBDIqZ1QDpuNg20V63ONGq08a0RKZ6UWO%2BldiBYgGLoSoTH0NsVndsYoyy9bLZhgh7hpovY%2BXbzMpLAAkaUGTNz4xDlhLFaxsICAiMSttDS0gXN1TWzcc7mo8Gopzvuq1deLn0%2Bl4ZGwgULDXzzRfYOzEaKHC2J51f5F%2B1iD7xJIMl%2BTNzvAidZ29Cs4cBHZEuhxiCZp6p2zkaYrjdpahcpL3ZAvhLEok8FEvSlzaAzWnB1gykZtzKWT%2BXMa9txIo%2BM5fkHZTr%2B8STMKJ6cSzu3dW4hAXi4MSf05PIOmJuHWeW9vFUAQKlxJv4oU63tDKgPcIQPCNPMWEUJp1NzmYDGfGXvsQhqq92fumXlpHbzp7HuojhYAejNpnj3VMW3YmadjTwGt%2Bz85LdaMclmj1dDXzFkLvJ9Le1tGAgAQ6aPzhdvwc7K%2FUeAP%2FnrPjRQ%2BaI0gkNdtnRWFYY8V5wD%2FuSq4t%2BOBTLaLC87RXbevWS4cVYJlDAWQMEk6pQq0crHM3hM%2BmazbXFfjuoB4boc62A1KeBqxZ4FtZmApxdDgplTAZLuwOiVCuxOf3PY4%2BJI4lDk3M8UmDB8xsDMIzJwMIGOqUBCQLIfoqg9K0y8O1eq%2FCq64ilXMkU6TLlAiZpnVAYN4L2PA2Dh2xYhuJUd%2BeFVDiNtdtphg4Qns%2B%2BzgI3dHlAJdJ2plFEtHZ3g3zOKZBUZg%2BIjeEwnKDpK00kMfSGLumUnhkyA%2BVnhdVPPR%2B16gtIEiGybVEjVINLEn%2BMi%2FodMM1YHt3X1nLtc9z%2FYGta3AXVWoKnK9d38mHdH0DH4qAmhrD6BJi1&X-Amz-Signature=7dc5d7e038834647deb8a8dbf4961c69306231ea634e2f001542abe2d9c39d9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
