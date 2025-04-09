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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFOXGJT4%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDQpiz0QWlKYNDLMnuvyUAZTB1BFzufkraPapzxxkFCdwIhALr4etMh%2FloLor%2BpkI0rkD8SsW9AHZ1YmTbL%2FwTnVxfpKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztoQat4NwWHx475%2FIq3ANcKZFKnqWYqeylVok1dGY2tFw0XBVSuu2XG3ImaF%2FpG9BcVKnIXxyA%2FiNl36Q0LCI6CMwbYwp1reT3WPjTuTMrZ6K%2F0traTRYw5T6YSCidY9R%2FK7goFW0Cm8qaLCraOUGaQxo%2B2ah6E2%2BUWPjbTrT%2BasxlS7Gv1xz%2BCtANXHqGRdEvvhUJYkg6%2Fyh9Pem6b2xQyrObtxQm9hIhO93ba0FESsfsbDh7vWQQFtKqB7dVJEPs4VNY4a6GN36QH3l15%2Bgq1BLQ474OSis9JH%2FvCMwtD6eTQQ44grco06qtdU1%2FmgpeMArtxftoubVVkfT%2F7i0W9w%2FyWal%2BO1GpgSJddSA2nbUGDwMcwixhKUo5rb0vnjUocXHiXDKnUIdCUh8ZZoV8sZzcWlW8vCQpSWNBvPNUo5CFCxL%2BfzISSjhhzMAyvqNgpXH%2FSeB09pzVjZEnursHAQIrF%2FXn7rcs2R935%2BTs5lO9WBHuNjloOzOC1BWvJKhBdY8b2nGZhcYm50IhGRbhlKusQ%2FdJu47rrjKqfpoRXu3dzgCqy3COE5mceiExvhCmMvt7KTOPraDvtUOsocP18ii3X1EoDSeNiWypEQgR4REQFqI47GLNje%2FU0KtmjDbd5Ai%2FAVPfA4Bk9jDRmdi%2FBjqkAYSfYWlp1GKMfa4rgd0AyUPojBushUrmNYW%2B%2FaDYqMq0eSDkbFaO%2FHuaCOrp4BmDC4%2B0kO%2FRuOwEAD2OxBNJIS1DRVEibNlPYVrSy7aG176djI7x1ZU0bMSu%2FEqMX%2B2i%2BxXS%2BcaZKX6KMiPUJMSyPJYl1mUgPY2vna15Edjt%2F9fOwaXdiowgLErGlHdXkCZImSrK5JfS6VXxN4184%2BCg7%2F2GfIjW&X-Amz-Signature=b4c5ccf1d34352e2adda3aa41045d85ef498dbc1967d20070f442d4441e64650&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFOXGJT4%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDQpiz0QWlKYNDLMnuvyUAZTB1BFzufkraPapzxxkFCdwIhALr4etMh%2FloLor%2BpkI0rkD8SsW9AHZ1YmTbL%2FwTnVxfpKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztoQat4NwWHx475%2FIq3ANcKZFKnqWYqeylVok1dGY2tFw0XBVSuu2XG3ImaF%2FpG9BcVKnIXxyA%2FiNl36Q0LCI6CMwbYwp1reT3WPjTuTMrZ6K%2F0traTRYw5T6YSCidY9R%2FK7goFW0Cm8qaLCraOUGaQxo%2B2ah6E2%2BUWPjbTrT%2BasxlS7Gv1xz%2BCtANXHqGRdEvvhUJYkg6%2Fyh9Pem6b2xQyrObtxQm9hIhO93ba0FESsfsbDh7vWQQFtKqB7dVJEPs4VNY4a6GN36QH3l15%2Bgq1BLQ474OSis9JH%2FvCMwtD6eTQQ44grco06qtdU1%2FmgpeMArtxftoubVVkfT%2F7i0W9w%2FyWal%2BO1GpgSJddSA2nbUGDwMcwixhKUo5rb0vnjUocXHiXDKnUIdCUh8ZZoV8sZzcWlW8vCQpSWNBvPNUo5CFCxL%2BfzISSjhhzMAyvqNgpXH%2FSeB09pzVjZEnursHAQIrF%2FXn7rcs2R935%2BTs5lO9WBHuNjloOzOC1BWvJKhBdY8b2nGZhcYm50IhGRbhlKusQ%2FdJu47rrjKqfpoRXu3dzgCqy3COE5mceiExvhCmMvt7KTOPraDvtUOsocP18ii3X1EoDSeNiWypEQgR4REQFqI47GLNje%2FU0KtmjDbd5Ai%2FAVPfA4Bk9jDRmdi%2FBjqkAYSfYWlp1GKMfa4rgd0AyUPojBushUrmNYW%2B%2FaDYqMq0eSDkbFaO%2FHuaCOrp4BmDC4%2B0kO%2FRuOwEAD2OxBNJIS1DRVEibNlPYVrSy7aG176djI7x1ZU0bMSu%2FEqMX%2B2i%2BxXS%2BcaZKX6KMiPUJMSyPJYl1mUgPY2vna15Edjt%2F9fOwaXdiowgLErGlHdXkCZImSrK5JfS6VXxN4184%2BCg7%2F2GfIjW&X-Amz-Signature=b22fd69e87782636780936f1b94c54d1722253a6d8975a2b87f5f1dacddc7264&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J34XKKN%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQD0u%2FUZGCVB%2Bp1k9YZZI1JHvARiOJMbZceYv5bj6dGOlwIgY9zIEe%2BLm7AH%2FCIH5uciCbQ67pSdySJ4HDy1GDlZcSMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4d6Afc14LD4SfHKCrcA2oag4hXEOqUQ4zD0x8zAetvprDyosukuestV2CjULez8u%2BRd5NrcA%2FPW5UR93slsRDRAfkMQTkB%2BEQ4sfI4ISLEmG%2FICn%2FBTNxa5mP0lJO7R11o0X4CS%2F4xAxSMo23AAOTBdx8%2FAHGQppgjnisXJY7IkbgYpy50P8y6wZSnL4Wj0mIba%2F5Cyfjmtg7KOrMEdW1U1En7f8LFB5ZA%2FTWypiz5NNqSpSkcSBZeaoHLfvEm7KgVknXaMVQyg0EaitKtDdv%2Fi0zchM5d7cNqIXYIPfPeJG83HQwl8viGjUztqTTrYDEbh1t0iVJy%2FTl6kxneYrqsxtjjfuRR3%2Bp6lIrJaNlMBZvcqvkvUkCSSGq7Ni5FrlfDhlolNF5tGekNn4YTODlMNKCRqIHabhdHd7ZCHCwKH%2FrqSTtFli%2FeIE93S7aCQRvGquZrRe8bFtwPceRgX8973uS4LvrNFHD6OMZKjO6AJdU86zXbFdsiCAxMfbAKc2YvznUWeRuuXxRnICY7bgAxYX51MvJFxYQyGzpPQ5Aqi44MsD%2FMpa%2BUlyHKaBnTENGEXskEuZk5mkBy0znRJ59ngNXKNuRaWrNJ%2BPZUTeAbHzYuXve5HVMgAOAjIUPxdpxdAnxvKi8lx%2B3pMMia2L8GOqUBxP%2B%2Fdc9%2FNq0GJfIF9AM8kpsQmijEI5V7AcY4nE%2B%2BJd8XI8eiRnHsKA32hiOrIYVvR4qdm8iGzm%2Bra7mrlptHIgR2cppMyoXGleUMbh3WhsaTKk4tN0O7wScky99J2Ij4kPbmlp5BH8NP2M6cud5FdVrR8KA76ZDrkepP113I1hOf2D23xndlKh4iqc6r4zgtJQGqfxalM1FEpBtYeRXEzEoeKUxU&X-Amz-Signature=8da86d4d3095ee1b4292a09e062113ebb42dcba5b80e358d904ddf40f551ed0d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXXPWWOE%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIGzzFCLQgLng7Sw2Ffi0AQmIRc4jgJJXlzydzgNvmEc0AiEAmiV84Q%2BV%2BwEoOHpW1jtmN4cA%2FPLg4ha10Bn59BpMgXkqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG5NH5PxzYSsx5AAmyrcA%2FXuKhdRjhwVinYJHhlBWQN7bAL2qc5UUZiKakj5tjYEgFBQLn4GbVlZBCCxH%2FNBRpeiLP3%2BscdXME1coJptYFk6Y9fK2bTDf2X7DdWyhtnBnDcQ02DtV7YlvzbkQlngXKs67VpHoyDMLCxF6ZlBeMZ6EQtkVdRif1YlQUztM526sVT%2Fd%2Fx966j9PCIG6%2Fo3B6Z9PGgMr8pKe%2FCTH4qoRCkcuY0uxLYorxZkniGzLyC7pA7%2BMkljgt%2FsudtukKvMWSsy%2F0HY68gzFtvfdKR3IlE1miilxXMhOAn9wqURPx%2B6eD%2FCjYqDPW5vUVtnbmzmqal1iHBH%2F04XZqoJ1FBPX9d%2FkHKrjs%2BaTwuO5gy9RK3%2BfPhnvSG%2FEILceBCq3zd3FbpyzwOxe2DgY%2BI2lbT0FvF9py20C%2FJh0jqng7qcFw0hb%2FquSsb%2FfGY53AHDDfp296gnUP%2BBsm57tr9MHi%2BnBMLY0XwmLeLJzEbxx5PKue8uk96gPpqrYhQjoCReLOQk1rPItgS40dZPIXH98S9meCiMCHYEK3WDi5gmlgwirTOlLbaWlpwv3%2FziDWFb0zTIP7OlRy1jsnofUlByx9NRQyQ%2B%2B4JLi5v2FP7DR2skz0ZZ%2Fz738dKfw9GTTuWUMLqa2L8GOqUBE20AXvWXdMoNCg%2FJAMqeTmEvwpOKhCTb4oab88eoaG0vV1IvLf9o3wOcuwgnjACxiNoIDDCrRhhVqNYC%2F8V4moVMitauPtTTyDEjmgdJ%2Bsg4qdUm9GGwpM9RZEm0DWmqlo3tKPSD3HixadlSsWQsbPqPvyTGZwFLrY3GKwmrZMUVqY4KMk2wOkLvLvVResFPy0PLokbyBY6wSOCl17rIENKmkUag&X-Amz-Signature=78ee1ca680a8522e9f15097c5923fd7b1459b9d599f31b5375452f165721b4b5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFOXGJT4%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDQpiz0QWlKYNDLMnuvyUAZTB1BFzufkraPapzxxkFCdwIhALr4etMh%2FloLor%2BpkI0rkD8SsW9AHZ1YmTbL%2FwTnVxfpKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztoQat4NwWHx475%2FIq3ANcKZFKnqWYqeylVok1dGY2tFw0XBVSuu2XG3ImaF%2FpG9BcVKnIXxyA%2FiNl36Q0LCI6CMwbYwp1reT3WPjTuTMrZ6K%2F0traTRYw5T6YSCidY9R%2FK7goFW0Cm8qaLCraOUGaQxo%2B2ah6E2%2BUWPjbTrT%2BasxlS7Gv1xz%2BCtANXHqGRdEvvhUJYkg6%2Fyh9Pem6b2xQyrObtxQm9hIhO93ba0FESsfsbDh7vWQQFtKqB7dVJEPs4VNY4a6GN36QH3l15%2Bgq1BLQ474OSis9JH%2FvCMwtD6eTQQ44grco06qtdU1%2FmgpeMArtxftoubVVkfT%2F7i0W9w%2FyWal%2BO1GpgSJddSA2nbUGDwMcwixhKUo5rb0vnjUocXHiXDKnUIdCUh8ZZoV8sZzcWlW8vCQpSWNBvPNUo5CFCxL%2BfzISSjhhzMAyvqNgpXH%2FSeB09pzVjZEnursHAQIrF%2FXn7rcs2R935%2BTs5lO9WBHuNjloOzOC1BWvJKhBdY8b2nGZhcYm50IhGRbhlKusQ%2FdJu47rrjKqfpoRXu3dzgCqy3COE5mceiExvhCmMvt7KTOPraDvtUOsocP18ii3X1EoDSeNiWypEQgR4REQFqI47GLNje%2FU0KtmjDbd5Ai%2FAVPfA4Bk9jDRmdi%2FBjqkAYSfYWlp1GKMfa4rgd0AyUPojBushUrmNYW%2B%2FaDYqMq0eSDkbFaO%2FHuaCOrp4BmDC4%2B0kO%2FRuOwEAD2OxBNJIS1DRVEibNlPYVrSy7aG176djI7x1ZU0bMSu%2FEqMX%2B2i%2BxXS%2BcaZKX6KMiPUJMSyPJYl1mUgPY2vna15Edjt%2F9fOwaXdiowgLErGlHdXkCZImSrK5JfS6VXxN4184%2BCg7%2F2GfIjW&X-Amz-Signature=7ea5be317d57747697e9388ab0c604da97b639e8e44fbff2e6ff795c1c0cf9dc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
