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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RYLFG4P%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFono1kxyG%2FDUVlBbnjn2ERKngF6EuhaeVpcU1tMPxDaAiEA5ipWy6JkeYc5TNclyb97bKSnm9yDvPtFXDACvCfohewq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIroIjr3yvnG5uqMcSrcAx5dW1xLAXXuGtCEIN2OuRi3U10LHQZfyTdMUe2M32E5TXXidZNqdvL5Bh7%2FEfkQ3AqdOh3JW8LuQo9Huowm4rfrDaK9wWZHWaPASUtnF3e1lGXWvaMUpQTtFpOMlkRMjeytGPY8rkhjCIDvM7fqFEEHHf%2F33evoSdPGOMAls7qalQ6VlLxhB90xoKl6IJAPZ8CW8%2BYBWDkqwvzYFHXW9z4dHxs3L3G0o0XflAlclyxXhqgn8%2B5dSImMewMpFSB9rNOKsMatRu7fnsRO0mXYj7ct3qzOOUfZJ%2BaJ8rwbb5K4FvskQx%2FSwa71LYRgbEhnqpiwFh26O%2FKIFcFLadvizzyF%2FvOeVIRttXcnE4h8ClzdCEK8bBPoc6qGOXuTefe35Sp09GKghS0a4iAM0SaBC2eS5dyu0CDAVBm0rpCseVwRYvd0AGqG16VHJ8dbmi%2BQqU7utYmtsC791WKY2c%2B%2BYahPd%2BhDvgYjFY03qlymUAe430GPSnDbaEJfZ6fPJaeME8NDZjA8t2SJFxXA1ZAnh%2BhH4a6fvKOo3a7x5O5mnf45kH0xpNrsYkmpN0FYXAfNd7nnYqPDwLEyowNMeZPqMNxhAhjY58Vh0okcGuA5aoWkxyJ%2BWK0BiSq%2FEwryMKe3z78GOqUBf9DtP2DVkQLDQyBbqI82UiKXoGs%2FkARC%2FyCAoqsLjs0eGSJflk3vNrn%2F%2FdDVMevqgV6u4bMfRmaVoQnRIu2U2m4KUq87p17a363vxo%2FxKIscrDxcytflhfRb2yQN7QPW9%2FcXKkOytk66NaprgoXJZyeeWbW49qrVPq4vCzFv0%2BltVAIELIK5Q17E703nhj%2BY%2Bw6BanUUQQ7YXBFymcn5XwcQcxko&X-Amz-Signature=40b010650fa604cda31711ede837c3b51256eba2bee6f743f6821f7e794a4e14&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RYLFG4P%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFono1kxyG%2FDUVlBbnjn2ERKngF6EuhaeVpcU1tMPxDaAiEA5ipWy6JkeYc5TNclyb97bKSnm9yDvPtFXDACvCfohewq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIroIjr3yvnG5uqMcSrcAx5dW1xLAXXuGtCEIN2OuRi3U10LHQZfyTdMUe2M32E5TXXidZNqdvL5Bh7%2FEfkQ3AqdOh3JW8LuQo9Huowm4rfrDaK9wWZHWaPASUtnF3e1lGXWvaMUpQTtFpOMlkRMjeytGPY8rkhjCIDvM7fqFEEHHf%2F33evoSdPGOMAls7qalQ6VlLxhB90xoKl6IJAPZ8CW8%2BYBWDkqwvzYFHXW9z4dHxs3L3G0o0XflAlclyxXhqgn8%2B5dSImMewMpFSB9rNOKsMatRu7fnsRO0mXYj7ct3qzOOUfZJ%2BaJ8rwbb5K4FvskQx%2FSwa71LYRgbEhnqpiwFh26O%2FKIFcFLadvizzyF%2FvOeVIRttXcnE4h8ClzdCEK8bBPoc6qGOXuTefe35Sp09GKghS0a4iAM0SaBC2eS5dyu0CDAVBm0rpCseVwRYvd0AGqG16VHJ8dbmi%2BQqU7utYmtsC791WKY2c%2B%2BYahPd%2BhDvgYjFY03qlymUAe430GPSnDbaEJfZ6fPJaeME8NDZjA8t2SJFxXA1ZAnh%2BhH4a6fvKOo3a7x5O5mnf45kH0xpNrsYkmpN0FYXAfNd7nnYqPDwLEyowNMeZPqMNxhAhjY58Vh0okcGuA5aoWkxyJ%2BWK0BiSq%2FEwryMKe3z78GOqUBf9DtP2DVkQLDQyBbqI82UiKXoGs%2FkARC%2FyCAoqsLjs0eGSJflk3vNrn%2F%2FdDVMevqgV6u4bMfRmaVoQnRIu2U2m4KUq87p17a363vxo%2FxKIscrDxcytflhfRb2yQN7QPW9%2FcXKkOytk66NaprgoXJZyeeWbW49qrVPq4vCzFv0%2BltVAIELIK5Q17E703nhj%2BY%2Bw6BanUUQQ7YXBFymcn5XwcQcxko&X-Amz-Signature=103f39ff493327d327727196ce40abd4685ebe80e55f8cedc6c66626efef661c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3MMUIX5%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBS%2FKxz2M3Tsnkd23yQcFzn653sRvrS9eoPVtRMvo97kAiBRn6gviAepuQ7m%2Bb7GgOz02Vp7JvMVzaC2ADVt3SRYmCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMsaAZGFGge6CCGWFNKtwDkEZN9W9%2BL%2BwBaMm8QPyBVElLEPZIbmgjKlLyM%2Bm3zueJJQr6oe8ivVeip%2F%2FGfOGPxAXp6M51RaYgnVB%2FyQodltMcMae1MBEosAULyVvqBEJ0TZsuaKlINyIHs3fO2w7SFeyxbJYr1gWbCLNz20w7A6KtWdCPBPQ4EnT9O1%2FHhEVddRpbg%2BExmPb7P15%2Bceh3nNRdIR00G4Exjpvt8RGNnSaas5x93uBo1RpAW4Y9AWUn7UdPX0%2FF%2FnRW52U%2BCPLSyIqSQqj7TsBKSNyAgna1Svi2e6gMBrd9cn88aJD4tg%2FL7K0Zi7AsPSafvTe2qx9CMz8lDvXKeEksAJHLsvv4fB7ijors64TRqDuFzPayGOvTnOeCjL%2BCWH%2FlZp2C2ex8t7rt8Rq2nhiDmtmZqUanQGiGdXhLC0t2HFugDgxssCZRqI7byXKMbAr4yabQhXo5MxpVpPw97b1SshHCyxjB%2BGcgq3GRK0zvIXAhlddPfexiLFiCqwQxYqRtr8D%2FNxK4nmPD8pwWVxlkMHiBeAF%2B0TXlEtBB%2Bq5ltGzctOdEgoDJcW6ghKqrvnLpEci%2BNnqWsodhXNmvXfW8Chr%2Fy5xxZeBopYbQfTxcXmaReGbZ7P8IV9D62D4jIMhbQCQw4rbPvwY6pgHK7M5LBujuWe9oqIm271SXaMBlDnz51FOgtnCNfEwe%2FWq8peLu42VChQ40ux%2FmbbhFXpxePrJR4hDaQ%2FPgWRbkgKs5Imkw5FjmDmQZedkQuw74X7ouylhC5wtoOT0RdRJ3C%2BVWKNo7bOEhssifECR0XmpeIfNG0QSCXEejlSe59Zj2H1fdt12DdpNI39bI0V%2B52Eg6KWr6JKs2AGAADAz9hH7qUMB4&X-Amz-Signature=0660ce4dce9e561b728a29d83d65148c2fa078a3a34f512c81efac6e33776644&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OH6NN5E%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB200JfB3f%2BHB%2FSLkCetxXoVviAYQ6c4dOz2IFRmww82AiAkd1WCJNe%2BkeMAmGHCYvNhBjblH6AQOBolomWnc52lESr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM0yR8k5p276KzhjiYKtwDcC3%2FRzxTY79itTrN3Fnqt%2FoJYD5O60eRKwlxpMi%2Bef09AfgMHFQS%2BsUS2WcCMF8LThgU1m9POkoAUGbS2r0PmafWZNsJeydGXWhOurna8L%2FEii7IjGmA29SezAq6yQ2xgUNjMZgRumo4mJaDKQHD0ibU91l7opyrI1zLoPyx9w7SmVsqkU%2FFt9SJwNNvYie78yvMVcEw1lD7KQ7bzNLSHEMbK8Yv%2FbWEXDRLnFjLARvOtY3utA74kn773Kb1JiOEZ%2FYyoDHjgysCwKPO0AwG5Wa7IbBhWbyDyuUfhl2PlZrLRiPf3E1z1kof15FsUug9rPQQEnCKbPDLDdv3u4oREv8SHhpC%2BmV0wCmqAH%2FHFahx8Z%2F3fyYvEA0WcBCLr2HHafyUZDUOlz9CXvo3Dgo6lmfO2K1YSrWrDarX3oal5FxDlYE4Ba3SmwTkvhl8hoU4ujk%2FKs2%2FC4WgmVDghh5T0KrmUoNw6Tf79eIWgIthSuel5FOJ0hMbI4nWkNXXcFduKwXQTdo11VanAlkxYk5C1bAEtcWmJpQKayQ5SSykXwHH9viVpHAwdjXSgZhg8sc8eFcaWVJfqpSyuo92qz1l%2F2kwZ48BW%2B0J0kdMzaheifLam7ITDUkFph%2B7nNcwtrfPvwY6pgH%2FDwhd3KgKHHh1B%2FGfXhMZCKT2C2Dep41S%2FJ%2B66HqYkWyvj%2BReyJ2K5qvbnP%2Fz7%2F3BD8u%2BIZAJ09gf8dWp2XUdKSppZNSYj0XAGgCpbtDPV80N6%2BbEjJQkHFCQIRwLpEGh3UeeL0vIVikbCPKktb%2Ft6bOGWVECIE6Gm1AHqZW5iwH81xFR1DHhhoWn1zjfKG8QB2jCU84JByijKa7YwQTho2ZudZmA&X-Amz-Signature=5c9130c96c96d0bf0ec00e6db5657029e940f1853c3b8695ef203e517916548d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RYLFG4P%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFono1kxyG%2FDUVlBbnjn2ERKngF6EuhaeVpcU1tMPxDaAiEA5ipWy6JkeYc5TNclyb97bKSnm9yDvPtFXDACvCfohewq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIroIjr3yvnG5uqMcSrcAx5dW1xLAXXuGtCEIN2OuRi3U10LHQZfyTdMUe2M32E5TXXidZNqdvL5Bh7%2FEfkQ3AqdOh3JW8LuQo9Huowm4rfrDaK9wWZHWaPASUtnF3e1lGXWvaMUpQTtFpOMlkRMjeytGPY8rkhjCIDvM7fqFEEHHf%2F33evoSdPGOMAls7qalQ6VlLxhB90xoKl6IJAPZ8CW8%2BYBWDkqwvzYFHXW9z4dHxs3L3G0o0XflAlclyxXhqgn8%2B5dSImMewMpFSB9rNOKsMatRu7fnsRO0mXYj7ct3qzOOUfZJ%2BaJ8rwbb5K4FvskQx%2FSwa71LYRgbEhnqpiwFh26O%2FKIFcFLadvizzyF%2FvOeVIRttXcnE4h8ClzdCEK8bBPoc6qGOXuTefe35Sp09GKghS0a4iAM0SaBC2eS5dyu0CDAVBm0rpCseVwRYvd0AGqG16VHJ8dbmi%2BQqU7utYmtsC791WKY2c%2B%2BYahPd%2BhDvgYjFY03qlymUAe430GPSnDbaEJfZ6fPJaeME8NDZjA8t2SJFxXA1ZAnh%2BhH4a6fvKOo3a7x5O5mnf45kH0xpNrsYkmpN0FYXAfNd7nnYqPDwLEyowNMeZPqMNxhAhjY58Vh0okcGuA5aoWkxyJ%2BWK0BiSq%2FEwryMKe3z78GOqUBf9DtP2DVkQLDQyBbqI82UiKXoGs%2FkARC%2FyCAoqsLjs0eGSJflk3vNrn%2F%2FdDVMevqgV6u4bMfRmaVoQnRIu2U2m4KUq87p17a363vxo%2FxKIscrDxcytflhfRb2yQN7QPW9%2FcXKkOytk66NaprgoXJZyeeWbW49qrVPq4vCzFv0%2BltVAIELIK5Q17E703nhj%2BY%2Bw6BanUUQQ7YXBFymcn5XwcQcxko&X-Amz-Signature=9020b23e59a14e1da9f6f19444118eeaa6007da7857472f3c97e07610eeac951&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
