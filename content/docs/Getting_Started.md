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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPVAGGTG%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnHaKsasaBKSXg61%2FJFkaxpf1KsWiOHOq0lE5I09QrFAiEAyMh%2BH2cCDC9Lgl2x9wleJT6GQYOiQc3LjIT%2BMjiE7WAq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFQCwyXTgqWYP1SgLircAzMScnOE7b0hHeZxgm10zFgCV7bWqsdxjz8TaAWSnVVjRpVDUpYFhb37iLBmv6qhQ6yLE8yOSoJZN%2BT%2BK2cTlQFkDv8AUCk%2BWVdEq5Sm28L6hxKIo2kDAMw%2Ft%2BMyRYt%2FramZzZ83JAV1AjWseJZWxGHRzTpovZVhMFGIEpKoY5WBDh%2Bt%2BPu2TfpD0t2cuca1p%2BnDe%2BY1ZutpLREFoPCtDDPsVhrRQHqns2NxX%2BKfq8ud9oeJt%2BwtR0F6fuqMelYQEGeabfyoNkjZgg9wdyd52ct295THseCzd1SwmHwK7lsi%2BFnFnEkUwqZ9v8j%2Bn%2BYH0BUi9xg%2B5sSQk8svqHjzj61G1aLjcd77h8amY6oPlKH6J1ZVFcGoufd1aAwv5wrbIois8nbNZp9YMCLb31Q9b4BJNOSDZsn0NVNzddY4YCVYsWnLt8CicX8oJ7n%2FKhqfO7cxIkTBoeOSiz4BwBJaei9BspY6IInoJQzw%2FOtCX2FO3GOgT8%2BpnvsK%2FxZsy9Uby549zFq1UvkkSFj0RwdL4wEk%2B6%2Fpp1EY%2BiMnEh3XZHUehtqP1Y0c%2F4XTQI05esq2vXKGKe6NEVEGyDcDpVBwya1zpLGGPkSEb2pd4dDSdUjetc0M6MSqgGoBxD3SMPuIjsIGOqUBiFsdmjkLTgWt0eDw%2FaZd4FWYgySe3JysUX9hfbXoq5CYtdHcZFC0R85bu9nOMK%2BpoZX4odcGrbMLuyvM97xLBNiClBOiqdywJ%2BvKlvV4XBiYqZSLXlFwtEOcMTx9dsIoSrzAut%2FkqVKWsUtC3xEjhWY2HH5nX%2FnaKniIivIYiq67EsEV1Y1BvedwUbGm4oYsNVen0BUddEoolMtWvpGie2wKodit&X-Amz-Signature=0452651a8c0a4343bd6b563258fb113f70569d5427dac685d69667351a216e07&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPVAGGTG%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnHaKsasaBKSXg61%2FJFkaxpf1KsWiOHOq0lE5I09QrFAiEAyMh%2BH2cCDC9Lgl2x9wleJT6GQYOiQc3LjIT%2BMjiE7WAq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFQCwyXTgqWYP1SgLircAzMScnOE7b0hHeZxgm10zFgCV7bWqsdxjz8TaAWSnVVjRpVDUpYFhb37iLBmv6qhQ6yLE8yOSoJZN%2BT%2BK2cTlQFkDv8AUCk%2BWVdEq5Sm28L6hxKIo2kDAMw%2Ft%2BMyRYt%2FramZzZ83JAV1AjWseJZWxGHRzTpovZVhMFGIEpKoY5WBDh%2Bt%2BPu2TfpD0t2cuca1p%2BnDe%2BY1ZutpLREFoPCtDDPsVhrRQHqns2NxX%2BKfq8ud9oeJt%2BwtR0F6fuqMelYQEGeabfyoNkjZgg9wdyd52ct295THseCzd1SwmHwK7lsi%2BFnFnEkUwqZ9v8j%2Bn%2BYH0BUi9xg%2B5sSQk8svqHjzj61G1aLjcd77h8amY6oPlKH6J1ZVFcGoufd1aAwv5wrbIois8nbNZp9YMCLb31Q9b4BJNOSDZsn0NVNzddY4YCVYsWnLt8CicX8oJ7n%2FKhqfO7cxIkTBoeOSiz4BwBJaei9BspY6IInoJQzw%2FOtCX2FO3GOgT8%2BpnvsK%2FxZsy9Uby549zFq1UvkkSFj0RwdL4wEk%2B6%2Fpp1EY%2BiMnEh3XZHUehtqP1Y0c%2F4XTQI05esq2vXKGKe6NEVEGyDcDpVBwya1zpLGGPkSEb2pd4dDSdUjetc0M6MSqgGoBxD3SMPuIjsIGOqUBiFsdmjkLTgWt0eDw%2FaZd4FWYgySe3JysUX9hfbXoq5CYtdHcZFC0R85bu9nOMK%2BpoZX4odcGrbMLuyvM97xLBNiClBOiqdywJ%2BvKlvV4XBiYqZSLXlFwtEOcMTx9dsIoSrzAut%2FkqVKWsUtC3xEjhWY2HH5nX%2FnaKniIivIYiq67EsEV1Y1BvedwUbGm4oYsNVen0BUddEoolMtWvpGie2wKodit&X-Amz-Signature=47f496369fa8f6bf9263aa846ee1921c11f49144853784a813496c66b35af58b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPVAGGTG%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnHaKsasaBKSXg61%2FJFkaxpf1KsWiOHOq0lE5I09QrFAiEAyMh%2BH2cCDC9Lgl2x9wleJT6GQYOiQc3LjIT%2BMjiE7WAq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFQCwyXTgqWYP1SgLircAzMScnOE7b0hHeZxgm10zFgCV7bWqsdxjz8TaAWSnVVjRpVDUpYFhb37iLBmv6qhQ6yLE8yOSoJZN%2BT%2BK2cTlQFkDv8AUCk%2BWVdEq5Sm28L6hxKIo2kDAMw%2Ft%2BMyRYt%2FramZzZ83JAV1AjWseJZWxGHRzTpovZVhMFGIEpKoY5WBDh%2Bt%2BPu2TfpD0t2cuca1p%2BnDe%2BY1ZutpLREFoPCtDDPsVhrRQHqns2NxX%2BKfq8ud9oeJt%2BwtR0F6fuqMelYQEGeabfyoNkjZgg9wdyd52ct295THseCzd1SwmHwK7lsi%2BFnFnEkUwqZ9v8j%2Bn%2BYH0BUi9xg%2B5sSQk8svqHjzj61G1aLjcd77h8amY6oPlKH6J1ZVFcGoufd1aAwv5wrbIois8nbNZp9YMCLb31Q9b4BJNOSDZsn0NVNzddY4YCVYsWnLt8CicX8oJ7n%2FKhqfO7cxIkTBoeOSiz4BwBJaei9BspY6IInoJQzw%2FOtCX2FO3GOgT8%2BpnvsK%2FxZsy9Uby549zFq1UvkkSFj0RwdL4wEk%2B6%2Fpp1EY%2BiMnEh3XZHUehtqP1Y0c%2F4XTQI05esq2vXKGKe6NEVEGyDcDpVBwya1zpLGGPkSEb2pd4dDSdUjetc0M6MSqgGoBxD3SMPuIjsIGOqUBiFsdmjkLTgWt0eDw%2FaZd4FWYgySe3JysUX9hfbXoq5CYtdHcZFC0R85bu9nOMK%2BpoZX4odcGrbMLuyvM97xLBNiClBOiqdywJ%2BvKlvV4XBiYqZSLXlFwtEOcMTx9dsIoSrzAut%2FkqVKWsUtC3xEjhWY2HH5nX%2FnaKniIivIYiq67EsEV1Y1BvedwUbGm4oYsNVen0BUddEoolMtWvpGie2wKodit&X-Amz-Signature=53a03a4e080f03f0b403e5690c877dd40577b182061385c6b1878f5977fb2c9d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LSSFHFK%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4H0VNcWlEU6xgCSJvBI0JfbCz9ndV23zgCZoxbow47gIgUiX3uI5tqgnmvEMhcPAnKO9ZC5r%2FtlvJSbtAFzamPNMq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDIMwSjHVV4IJ305bEyrcAxM2t6HWX0QU%2BEO0By7h17QaFb79lNGBBteqr7BoSbYyQLM4yz0UYjVz0UmwdrsVr%2BjQKUlvfncPErlkB0v8KZJhsPTbMl3ZH16Uy1BI6FKZYAcxL%2FDpklfzfM0sRU4dhkrYnwOjYTN3vus8kJTbW8wCUwWfIPecOSGfZHSfPRR4nKTpMnXlkF2G5TRD5ioVGZv9GsOmgm%2Fb912L8qMa580JTBDHjXKzuclnRR8twz%2BQwq%2FujxB0QmS%2B8wSrzkCtdYLQLNBgkX5mGogPMQqwE9vWjSzFdq7jou0KhkMNrh%2FWGLZyqaAfhcPzPphzRXKQGpke7cRrixm9BpK5c%2B8mjrVCfbcw8KcyIsrdpcnGcdxGbsAi95I6xlzn73kbU%2BFMw0vP4oCgP3i1lkf6DUgm3vAk11hmW%2BCXyjkRMl6bRz3MdtXewRSEYnhrMiRpaUqft4te1xKNLc1BYqb7%2BSjqV8y4n5Z0hRnLCvPu8gQoL5DUt8cjFSLBftJM9KX1rEKdl0vcklYgk6GNwpHM8dWQ5sOsC3OSe4Yf1xGHmlVTZFPKorDjcZXfmG5HVT1nDjtcEi530xUz%2FacMguK6XHzUonUOxjWYx9tP53wioaGHLRgCoAspGh%2FwmMBS7xBIMICJjsIGOqUBMXPD%2Ba0ybAmu%2BAcOvzQrN%2BICrIbyzXWnRbISXkibQ3H4eS3%2BBuWwZFZuMFut8Sd17GCs%2F%2F8yNddA%2F48Dw8iH7a6uLuHo08Bw8h74b68PeSZn7%2Fp9N3D8Uu3HiZX5%2FPWMaAlYEuFQZrJEmC5In3DK4qbEVaw8YMkWfXDKVqAuNEh7wspgLIsHmi99AZIe%2BpEobpjadsxXOuaLumReTeXpowIXRhl0&X-Amz-Signature=838b34b53ba549cac598446751658156547ba1a8c1c3857ee183fbf4fcb79aa0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THBBEDJ2%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbsMn62ZxRhA04lgSpQHBYytMhREfmQcMXyQdgS%2FW%2FSwIgLffbEuFrVcwVtnDCUVvpxUD%2ByXhn9IyqXTq%2BF2TB%2BnEq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDNr27FX7yng1kxCRayrcA3kc03Ja4%2FdcNHvcz%2B8pKNJ%2BCOgftbBU4BBIXy4JftSJbZrOi8HDGBuVJ3nbVr0O%2BuS4hJJySakUnsLd9N1j19OsLD6q5ETSGPpmdFY6HrphE%2BswwMvRixF%2FUka25RmLJW8RaFtXVIsIm2Stl2y5UhRTNtXu%2FP0OC1lq5OOEOVNSww0s3xGXTfDSHg2RYg718Mxn8ljfGwLeqSlq13KKUKgtykcLuguBEjnuUBono9C6K3WOB%2Bsdb4YLMtA5Hzj37jKS1jEigrEf7ab6kK5nb3ipNs3VPFI803xzklvbmjhdPzKBA03a%2BIzqFkISpH%2FMKwNI1F%2BROXcGT0XuTinJfox%2B7HoSU9WCAZRy6n6NvF5X2GhnByJlhgOplg%2F5V3wiwd3aP9FlmDfJWiOHq7xlTwpXDNt%2FeRMftEDbOCrygvL9uNOYd62JJ3XV2scVcK9Ci8qxObKs46wZNWhCKcHXqiKUqk2ZwRVGgaf%2FZywA2CzsKS3ZXirgHpkRi0HWUfzknRsNV1d5ylQEcPl3a0nl0OA7OyESRJh5isC4vgP44HcVIFf0AAusPTDj9etDVxoYRyKein8Uh6lf7bDpNDxUaZCQzQ1bUanc47A28BFA9kwtwS1BngA71yp9B5xZMK6JjsIGOqUBVDkECiaVMo%2B4D7NlLhruhTEoEX5lXEauxrGnqsqpQ9bSHwumFukrodpbaZy7Zwo0Zv395wWaHXazT3KK6NbgCxpFoAyANMRyQWMwd1eHOS8LPfuX6vVkSOA0GbNV8I2tnBNBVXaH4ozU5lvH0%2BbE4g5tn0q482fwsuoVBTnShiNPazVUEv6Zhh82haBMjkQMD6gQL%2F7C0N5STMVJTKKdVxqjqv%2B4&X-Amz-Signature=cdfd43ec974e600290b795c9f3293ebea3cc79d96869730bc364fdee51e65f67&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPVAGGTG%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnHaKsasaBKSXg61%2FJFkaxpf1KsWiOHOq0lE5I09QrFAiEAyMh%2BH2cCDC9Lgl2x9wleJT6GQYOiQc3LjIT%2BMjiE7WAq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFQCwyXTgqWYP1SgLircAzMScnOE7b0hHeZxgm10zFgCV7bWqsdxjz8TaAWSnVVjRpVDUpYFhb37iLBmv6qhQ6yLE8yOSoJZN%2BT%2BK2cTlQFkDv8AUCk%2BWVdEq5Sm28L6hxKIo2kDAMw%2Ft%2BMyRYt%2FramZzZ83JAV1AjWseJZWxGHRzTpovZVhMFGIEpKoY5WBDh%2Bt%2BPu2TfpD0t2cuca1p%2BnDe%2BY1ZutpLREFoPCtDDPsVhrRQHqns2NxX%2BKfq8ud9oeJt%2BwtR0F6fuqMelYQEGeabfyoNkjZgg9wdyd52ct295THseCzd1SwmHwK7lsi%2BFnFnEkUwqZ9v8j%2Bn%2BYH0BUi9xg%2B5sSQk8svqHjzj61G1aLjcd77h8amY6oPlKH6J1ZVFcGoufd1aAwv5wrbIois8nbNZp9YMCLb31Q9b4BJNOSDZsn0NVNzddY4YCVYsWnLt8CicX8oJ7n%2FKhqfO7cxIkTBoeOSiz4BwBJaei9BspY6IInoJQzw%2FOtCX2FO3GOgT8%2BpnvsK%2FxZsy9Uby549zFq1UvkkSFj0RwdL4wEk%2B6%2Fpp1EY%2BiMnEh3XZHUehtqP1Y0c%2F4XTQI05esq2vXKGKe6NEVEGyDcDpVBwya1zpLGGPkSEb2pd4dDSdUjetc0M6MSqgGoBxD3SMPuIjsIGOqUBiFsdmjkLTgWt0eDw%2FaZd4FWYgySe3JysUX9hfbXoq5CYtdHcZFC0R85bu9nOMK%2BpoZX4odcGrbMLuyvM97xLBNiClBOiqdywJ%2BvKlvV4XBiYqZSLXlFwtEOcMTx9dsIoSrzAut%2FkqVKWsUtC3xEjhWY2HH5nX%2FnaKniIivIYiq67EsEV1Y1BvedwUbGm4oYsNVen0BUddEoolMtWvpGie2wKodit&X-Amz-Signature=fdcd4a79cd570c886fe47e100989623cf70446d837b9921203cf8e7333fdd420&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
