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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CFAONVA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCRiVrBWsrKVwbq%2FoE2DPwEfAVnib8%2BzSub9IrN1Jc4FAIhALtoVXnh8cYUpjZgSvrw7zH3FhBxb%2BVHSxxnXLuDYl01Kv8DCDsQABoMNjM3NDIzMTgzODA1IgwSF0SY4g9cQ0a2wmYq3AM7qkQte0Sqa2G8hFT0vio3%2FJ%2F0y023ZrLgK2ITU%2Bf7iV%2FX2zafMFGN6nCdYOiVPGF2W8bykWuW9Y6O4PQOtHs9vzo9KN8savooSKI%2BcOcB%2FbfzqsWSTz9xOSGa2WXBo%2BEF%2FeP6Sa%2F%2FqtSaYMQbh450%2BLfC3QrOqiRaS%2FQFyMG4YkyGhyWEgEGPdD%2BCipwHIL2ty1y3ytXUVonve7X2LHjP79EpZU0KviSeVkp4l2pvXgvG2w2TSVTXP3%2B75kYYD3WA6tWizeszQhWjGWpjevrXoRnuajdAIMJKlEz0M%2FPAs8A4wfkMG%2FqMc8J%2BouzawkwLT4yIVfaLWYxe0GxQTk72TnLpOoBIfiYys%2BtWijx6LKUcEnGi4YzLvJmDI1ACn5NwJLNuMJU%2FdUtSz66lspCMB7R50%2FjXnn0wRgEHGAGb9XAKzcGKYt7smLDWpVGbSxmR3PqmtPpZCcSjVeV0k67mntrBcjA9F8HK3oPTWs8hZ2b7Y28njDA94iNjMb3E4Ip4260W%2BORmylZ2jlhKuy4ai7lRDvw0jKWkYcALg5%2Fs6N30FktQFLCayIaZc5K4%2FXG2oLqWohhxJwS8vgpbeBC4OV2WZU9ZrxMoxyiecGtgXT9RJFRhA04kqLtn1DDXi6LDBjqkAbEO11yDjREontxwh%2BZoCbaTJtZ2LyG5tffdcIGGy6AgL9hqdBDOjQESqmf6nK50rpIzpnDqwFEBHwKwFFteHNo%2FXB%2FhuBXW%2FrQFSaBGnzyEQDqokfiakoeYm%2FJKMInoYlXlwrLrSvR0xlXG%2BfIgYCAqed0ziEdWlaMRl18RMasIZ5GUg05WMhDn7KEil1vkLm9mq26N5HSE%2F2DsGfd6AoAoiRHF&X-Amz-Signature=33bfdcf7f320dfd7aa27e0368a86c155df9eb14c5c4a560b447d2366eda2c160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CFAONVA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCRiVrBWsrKVwbq%2FoE2DPwEfAVnib8%2BzSub9IrN1Jc4FAIhALtoVXnh8cYUpjZgSvrw7zH3FhBxb%2BVHSxxnXLuDYl01Kv8DCDsQABoMNjM3NDIzMTgzODA1IgwSF0SY4g9cQ0a2wmYq3AM7qkQte0Sqa2G8hFT0vio3%2FJ%2F0y023ZrLgK2ITU%2Bf7iV%2FX2zafMFGN6nCdYOiVPGF2W8bykWuW9Y6O4PQOtHs9vzo9KN8savooSKI%2BcOcB%2FbfzqsWSTz9xOSGa2WXBo%2BEF%2FeP6Sa%2F%2FqtSaYMQbh450%2BLfC3QrOqiRaS%2FQFyMG4YkyGhyWEgEGPdD%2BCipwHIL2ty1y3ytXUVonve7X2LHjP79EpZU0KviSeVkp4l2pvXgvG2w2TSVTXP3%2B75kYYD3WA6tWizeszQhWjGWpjevrXoRnuajdAIMJKlEz0M%2FPAs8A4wfkMG%2FqMc8J%2BouzawkwLT4yIVfaLWYxe0GxQTk72TnLpOoBIfiYys%2BtWijx6LKUcEnGi4YzLvJmDI1ACn5NwJLNuMJU%2FdUtSz66lspCMB7R50%2FjXnn0wRgEHGAGb9XAKzcGKYt7smLDWpVGbSxmR3PqmtPpZCcSjVeV0k67mntrBcjA9F8HK3oPTWs8hZ2b7Y28njDA94iNjMb3E4Ip4260W%2BORmylZ2jlhKuy4ai7lRDvw0jKWkYcALg5%2Fs6N30FktQFLCayIaZc5K4%2FXG2oLqWohhxJwS8vgpbeBC4OV2WZU9ZrxMoxyiecGtgXT9RJFRhA04kqLtn1DDXi6LDBjqkAbEO11yDjREontxwh%2BZoCbaTJtZ2LyG5tffdcIGGy6AgL9hqdBDOjQESqmf6nK50rpIzpnDqwFEBHwKwFFteHNo%2FXB%2FhuBXW%2FrQFSaBGnzyEQDqokfiakoeYm%2FJKMInoYlXlwrLrSvR0xlXG%2BfIgYCAqed0ziEdWlaMRl18RMasIZ5GUg05WMhDn7KEil1vkLm9mq26N5HSE%2F2DsGfd6AoAoiRHF&X-Amz-Signature=822c9b5639e3c187374b89d3c5c988e4d7b08144498779bee6a088ffb5905d09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CFAONVA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCRiVrBWsrKVwbq%2FoE2DPwEfAVnib8%2BzSub9IrN1Jc4FAIhALtoVXnh8cYUpjZgSvrw7zH3FhBxb%2BVHSxxnXLuDYl01Kv8DCDsQABoMNjM3NDIzMTgzODA1IgwSF0SY4g9cQ0a2wmYq3AM7qkQte0Sqa2G8hFT0vio3%2FJ%2F0y023ZrLgK2ITU%2Bf7iV%2FX2zafMFGN6nCdYOiVPGF2W8bykWuW9Y6O4PQOtHs9vzo9KN8savooSKI%2BcOcB%2FbfzqsWSTz9xOSGa2WXBo%2BEF%2FeP6Sa%2F%2FqtSaYMQbh450%2BLfC3QrOqiRaS%2FQFyMG4YkyGhyWEgEGPdD%2BCipwHIL2ty1y3ytXUVonve7X2LHjP79EpZU0KviSeVkp4l2pvXgvG2w2TSVTXP3%2B75kYYD3WA6tWizeszQhWjGWpjevrXoRnuajdAIMJKlEz0M%2FPAs8A4wfkMG%2FqMc8J%2BouzawkwLT4yIVfaLWYxe0GxQTk72TnLpOoBIfiYys%2BtWijx6LKUcEnGi4YzLvJmDI1ACn5NwJLNuMJU%2FdUtSz66lspCMB7R50%2FjXnn0wRgEHGAGb9XAKzcGKYt7smLDWpVGbSxmR3PqmtPpZCcSjVeV0k67mntrBcjA9F8HK3oPTWs8hZ2b7Y28njDA94iNjMb3E4Ip4260W%2BORmylZ2jlhKuy4ai7lRDvw0jKWkYcALg5%2Fs6N30FktQFLCayIaZc5K4%2FXG2oLqWohhxJwS8vgpbeBC4OV2WZU9ZrxMoxyiecGtgXT9RJFRhA04kqLtn1DDXi6LDBjqkAbEO11yDjREontxwh%2BZoCbaTJtZ2LyG5tffdcIGGy6AgL9hqdBDOjQESqmf6nK50rpIzpnDqwFEBHwKwFFteHNo%2FXB%2FhuBXW%2FrQFSaBGnzyEQDqokfiakoeYm%2FJKMInoYlXlwrLrSvR0xlXG%2BfIgYCAqed0ziEdWlaMRl18RMasIZ5GUg05WMhDn7KEil1vkLm9mq26N5HSE%2F2DsGfd6AoAoiRHF&X-Amz-Signature=621aace75c3b6c6a5e6237df926e529461c06360251733e993d894d3d0ea77c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTDUALXK%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDTnm4HrzWuupy0cf5ZzY4t1JPQ2oLVOhZ%2BqZye65t9UAIhAKSvboA0NGpkcUS2spnaHc%2FTF14SDKdYl%2BOqG0CDZ%2FASKv8DCDsQABoMNjM3NDIzMTgzODA1IgxN8bq9SNkrV374Fosq3AO52fOql3oEikCQzVddMuiweD%2FneOBJkMW6gnQ7s70jDrH%2B8HUe7vv77yugL%2FqQQgVcabapG5%2BYvYgZ0msrWw%2BMjkg26O25OJmOoSUN82EBeg31ZXnT1tCqQfyV9vhcH031RL6btcfqMjRNxvPt%2Bn0kBrj2vj9oZXzF9nCpcLn40al6YPTFyzlo7zPDriZual%2FfbHtznb7rysNwN1r9gAO2Fn0sk6g8xUvglm%2BFMInFvkhDWLobHVaiRSxVMKgAEmpJNm%2FxnUGP5sqdJIBF%2FDXKmbsn3OWDtzFziDyywOu17tsxJxOmyUfJf5FMoFjlfQ1rzgeOga0GM%2Bo2NmHWRZHH5huNX%2BNTBwxkpgDsqaoi70eRX1LR5p6SsignqaPO9%2Bco2GLbPeqx9nj2tVC%2BAsT4EGrmH%2BtbOYL0e%2BuWQ2mzXoFCCs506FOlpMYJkQGJYfY2Oy%2BXJEWmPv4VwNkCMXO%2FZIg4WyQvTtwtMu6Die9n7q0FBF%2B0F8J2NFuSQdT2hm0TNdzRHw4fhLq1I%2BHTrh%2B28tRanen6jVdq4qks7tzSdS7UbJVN0wP79c5pBiw4qf552DjiIch17tZL3tlExDxDeFpyXS0ieQJ3yMXrPZ6Peeb%2F9%2BG6%2ByC2wKwAPjCXhqLDBjqkAXHy%2F8XUgdizxZPaVxI5EzJ2Px%2FSXhXwDQoORCdeDZ%2BznNZLrIyw4HV%2FI%2Ba1SSAgCZHUkgsymUAsqDG3xgxJRciI1HfUmjR9UngUWQ5wtlpnCkOpGsJvl%2FeKNf6wAPXxGZ6H754CjpuqOyC1anxrbJZcmsdk4EUReeWfE2UpkXkT%2BXsFhIPwPhnlDHfqQsnKgtw%2B1eA6w5tHkJWn1s281LcUQkrR&X-Amz-Signature=70e7be737cf916ea87c9c7d9419e067aa3df4ea086c6d76b1a9367abe76ce5dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNP2HWKZ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIAjsVSqJjHqGmAXLOl9QbFA1W2U43DRkqvF8%2BuSOAr9MAiAd%2Ft%2FIOZAGCOiTDH1pStu9HEefuMdVYXkTd%2FQ%2FnNxKbSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMTNA%2BVz4WuEITenQUKtwDlpgbhajsV1uS6SUeqPTr%2F%2FniXshqzdh5YsmHHKDxrUZXTm5qrS9Tvbz%2BGRIpm7SBUqaMlW2JSG%2BREzitJ2tNTk35yOIOUPvlEkKX6bzeGKhVZVrrPaBxC6EzpeiUOROowjTJmHZrb3m2HyWVCxmSFLYBwIvxfJFtYKPIJ2hYasrrJWzDgvmGExcPxgrgIJACtmWWLK14DM6OX68xXrLU%2FC20cKl94zCWAIKz9gR4XyZwMXFNtUlXBR6eRGJWl356g7jYa3s1%2BjY%2BH8KRSWTM3XuCUrgi46UBfFaogLu8WJymhTsTrI0%2Ffwax0jnq%2FJ1ZBmL%2BdfGCy4H1h0qWf4vG7cwdtXzpD3fbmp9q1UG%2Fnqf4oHfB2gKB6Kmhtuy5EhGsX9WJoGh%2FdyTE%2B6ldpu4fk9YLN6JKmgNwhUidN4VWNex5ElD8j2lZ4k%2FRhb6mdxtr4DWlZPD8bnNuvcbURaWFZagjb5UAPm5I5Is8YTM%2ByRgiGHynCdjIy1QAK4cHXdGWrWaYj1LhEtlKJe27GdTwTbaZdg0MVG%2FVO26qHiCAvh56evYId2nuqXpeYMCCp58ASLjaNSIVqs50F9ENVYm%2BrDMQejPlZD9Uag7ELbyKIKmAsxCbgu421ck74rcw0YiiwwY6pgFJM0Tazo2%2BQ658py6BDsIG4%2F4LilGWKCgq1srJnyL3ZK3ksh9ltotlhvFrIsCs57FmhR5a%2Fn0Pn2e87Ef0X69cmH7VYxGyzULl0g%2Bj0W95sSmbDqw%2F6wWExdsv7LyUTf%2B6hlCpJ5xopor5VXne5LPkAkqpEjGafNTm%2BYnf6sbd%2BMtiT6%2Bc1AuD32b21vSvuFuSszDRGx7c0BR2tw1SavAPrXUCvhVM&X-Amz-Signature=e8518d32d52c31f6611de7494f9b6b6258d25ff2f630acb7741c90a7e9c6aa1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CFAONVA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCRiVrBWsrKVwbq%2FoE2DPwEfAVnib8%2BzSub9IrN1Jc4FAIhALtoVXnh8cYUpjZgSvrw7zH3FhBxb%2BVHSxxnXLuDYl01Kv8DCDsQABoMNjM3NDIzMTgzODA1IgwSF0SY4g9cQ0a2wmYq3AM7qkQte0Sqa2G8hFT0vio3%2FJ%2F0y023ZrLgK2ITU%2Bf7iV%2FX2zafMFGN6nCdYOiVPGF2W8bykWuW9Y6O4PQOtHs9vzo9KN8savooSKI%2BcOcB%2FbfzqsWSTz9xOSGa2WXBo%2BEF%2FeP6Sa%2F%2FqtSaYMQbh450%2BLfC3QrOqiRaS%2FQFyMG4YkyGhyWEgEGPdD%2BCipwHIL2ty1y3ytXUVonve7X2LHjP79EpZU0KviSeVkp4l2pvXgvG2w2TSVTXP3%2B75kYYD3WA6tWizeszQhWjGWpjevrXoRnuajdAIMJKlEz0M%2FPAs8A4wfkMG%2FqMc8J%2BouzawkwLT4yIVfaLWYxe0GxQTk72TnLpOoBIfiYys%2BtWijx6LKUcEnGi4YzLvJmDI1ACn5NwJLNuMJU%2FdUtSz66lspCMB7R50%2FjXnn0wRgEHGAGb9XAKzcGKYt7smLDWpVGbSxmR3PqmtPpZCcSjVeV0k67mntrBcjA9F8HK3oPTWs8hZ2b7Y28njDA94iNjMb3E4Ip4260W%2BORmylZ2jlhKuy4ai7lRDvw0jKWkYcALg5%2Fs6N30FktQFLCayIaZc5K4%2FXG2oLqWohhxJwS8vgpbeBC4OV2WZU9ZrxMoxyiecGtgXT9RJFRhA04kqLtn1DDXi6LDBjqkAbEO11yDjREontxwh%2BZoCbaTJtZ2LyG5tffdcIGGy6AgL9hqdBDOjQESqmf6nK50rpIzpnDqwFEBHwKwFFteHNo%2FXB%2FhuBXW%2FrQFSaBGnzyEQDqokfiakoeYm%2FJKMInoYlXlwrLrSvR0xlXG%2BfIgYCAqed0ziEdWlaMRl18RMasIZ5GUg05WMhDn7KEil1vkLm9mq26N5HSE%2F2DsGfd6AoAoiRHF&X-Amz-Signature=3f1b79e07b87a01e501984404c474f6a5d68ebb505ee0253063b7f4490d05a95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
