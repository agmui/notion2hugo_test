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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5AJKLFX%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDEu9%2BWRnv1ayfzC%2BAD%2Fce1OpCAZhrgC%2By2pbwndyi4%2BgIhAKJAx5s3Gwu8ZWEzj6B5D9hfQJFGsmk3yATpVCe3i04HKv8DCBYQABoMNjM3NDIzMTgzODA1IgwnLd%2FH4sf7nEv6Wlsq3APhXOSf%2BO3ZzsvbMZ5YVIjeJFx4qsJ3iqlEoveKvYRNCGEcCeRE8lLToaWfmeemfwHS8eY9vJY0D6GQC37Gt5Nl%2BUO6soRyOWfgifpuLnDxARcvDWZXtvlkj9gSka47Uk320O1tDxaWH4WRsx8nljKCDIEmj3lS43APGBSHyCbN5KfCFd%2FPu%2FgI534paySH2oIS3V%2FY9FQp0f1U2BWDFWinhTn1MD%2FIug4LDKIE%2Bablp2qmtASFJGhGBdiBuYoO70J0JEFN7l6f2kuejoZIdLPO1vIUAVAxn1PFqXgMbo2GKVmLc6Z8FwOmhA5mODWb3USFoW3W1MYYPfw1KubYNFeKstYWH0tOqLdZKrva2%2BEBFTSX7m5HlukDUq5KK%2FWcdsi3YCsY2hW1aXi2WGmYH%2F6eluRmBeXkNhzIlPJ81SaLMt7%2BQcoFP4Aueli9EmMXh6%2BdcXHPN1AKSwizBI3KOe%2Fs2lqfcFYsaXwAbPwETj2K%2B6SiZOnYEvLq7oHiyRDzIWuR1i4nnqYSq9QOksXDv%2Fh5w3CeCv8jNRAEh2jN0u3hqle5eueGJvhgCuvtj%2FUAgfs8HlXQ8UQHGo5pp3xuA1Oy0%2FjxeKqHyKW3KH%2BZzJv81SSaYaILTszFB9WZejCW5%2FvBBjqkAYH4sFDQepF%2FUi8IoEumbg065EBHvo%2F%2BQkUsEzhezO4hElWwsOlRPBN7HKr9wpNH8RthgyIdCAky%2FuP2GrRsSdcobhLCI7%2BhPaExi%2BR9I3JwCKMd8nD38ek0Fr1rZIZ9cslPA7a5kJ%2BMLIRLzvSEkDvvhgpb4lnwaDD14YOyT%2BGGXuIGQ0P3QQZgTNhkMelQ5GBaVEOUgV0gi0hm7drUEu4Efs%2Fr&X-Amz-Signature=b28817c26ec1710262109f0a55d03df5e4b8aa1ea0b085dd055e41ecc1bc27da&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5AJKLFX%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDEu9%2BWRnv1ayfzC%2BAD%2Fce1OpCAZhrgC%2By2pbwndyi4%2BgIhAKJAx5s3Gwu8ZWEzj6B5D9hfQJFGsmk3yATpVCe3i04HKv8DCBYQABoMNjM3NDIzMTgzODA1IgwnLd%2FH4sf7nEv6Wlsq3APhXOSf%2BO3ZzsvbMZ5YVIjeJFx4qsJ3iqlEoveKvYRNCGEcCeRE8lLToaWfmeemfwHS8eY9vJY0D6GQC37Gt5Nl%2BUO6soRyOWfgifpuLnDxARcvDWZXtvlkj9gSka47Uk320O1tDxaWH4WRsx8nljKCDIEmj3lS43APGBSHyCbN5KfCFd%2FPu%2FgI534paySH2oIS3V%2FY9FQp0f1U2BWDFWinhTn1MD%2FIug4LDKIE%2Bablp2qmtASFJGhGBdiBuYoO70J0JEFN7l6f2kuejoZIdLPO1vIUAVAxn1PFqXgMbo2GKVmLc6Z8FwOmhA5mODWb3USFoW3W1MYYPfw1KubYNFeKstYWH0tOqLdZKrva2%2BEBFTSX7m5HlukDUq5KK%2FWcdsi3YCsY2hW1aXi2WGmYH%2F6eluRmBeXkNhzIlPJ81SaLMt7%2BQcoFP4Aueli9EmMXh6%2BdcXHPN1AKSwizBI3KOe%2Fs2lqfcFYsaXwAbPwETj2K%2B6SiZOnYEvLq7oHiyRDzIWuR1i4nnqYSq9QOksXDv%2Fh5w3CeCv8jNRAEh2jN0u3hqle5eueGJvhgCuvtj%2FUAgfs8HlXQ8UQHGo5pp3xuA1Oy0%2FjxeKqHyKW3KH%2BZzJv81SSaYaILTszFB9WZejCW5%2FvBBjqkAYH4sFDQepF%2FUi8IoEumbg065EBHvo%2F%2BQkUsEzhezO4hElWwsOlRPBN7HKr9wpNH8RthgyIdCAky%2FuP2GrRsSdcobhLCI7%2BhPaExi%2BR9I3JwCKMd8nD38ek0Fr1rZIZ9cslPA7a5kJ%2BMLIRLzvSEkDvvhgpb4lnwaDD14YOyT%2BGGXuIGQ0P3QQZgTNhkMelQ5GBaVEOUgV0gi0hm7drUEu4Efs%2Fr&X-Amz-Signature=331fa7c0c980b5f7e5c891f967e2fbcc3bda7d047f05bc2a682386ef84e95761&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5AJKLFX%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDEu9%2BWRnv1ayfzC%2BAD%2Fce1OpCAZhrgC%2By2pbwndyi4%2BgIhAKJAx5s3Gwu8ZWEzj6B5D9hfQJFGsmk3yATpVCe3i04HKv8DCBYQABoMNjM3NDIzMTgzODA1IgwnLd%2FH4sf7nEv6Wlsq3APhXOSf%2BO3ZzsvbMZ5YVIjeJFx4qsJ3iqlEoveKvYRNCGEcCeRE8lLToaWfmeemfwHS8eY9vJY0D6GQC37Gt5Nl%2BUO6soRyOWfgifpuLnDxARcvDWZXtvlkj9gSka47Uk320O1tDxaWH4WRsx8nljKCDIEmj3lS43APGBSHyCbN5KfCFd%2FPu%2FgI534paySH2oIS3V%2FY9FQp0f1U2BWDFWinhTn1MD%2FIug4LDKIE%2Bablp2qmtASFJGhGBdiBuYoO70J0JEFN7l6f2kuejoZIdLPO1vIUAVAxn1PFqXgMbo2GKVmLc6Z8FwOmhA5mODWb3USFoW3W1MYYPfw1KubYNFeKstYWH0tOqLdZKrva2%2BEBFTSX7m5HlukDUq5KK%2FWcdsi3YCsY2hW1aXi2WGmYH%2F6eluRmBeXkNhzIlPJ81SaLMt7%2BQcoFP4Aueli9EmMXh6%2BdcXHPN1AKSwizBI3KOe%2Fs2lqfcFYsaXwAbPwETj2K%2B6SiZOnYEvLq7oHiyRDzIWuR1i4nnqYSq9QOksXDv%2Fh5w3CeCv8jNRAEh2jN0u3hqle5eueGJvhgCuvtj%2FUAgfs8HlXQ8UQHGo5pp3xuA1Oy0%2FjxeKqHyKW3KH%2BZzJv81SSaYaILTszFB9WZejCW5%2FvBBjqkAYH4sFDQepF%2FUi8IoEumbg065EBHvo%2F%2BQkUsEzhezO4hElWwsOlRPBN7HKr9wpNH8RthgyIdCAky%2FuP2GrRsSdcobhLCI7%2BhPaExi%2BR9I3JwCKMd8nD38ek0Fr1rZIZ9cslPA7a5kJ%2BMLIRLzvSEkDvvhgpb4lnwaDD14YOyT%2BGGXuIGQ0P3QQZgTNhkMelQ5GBaVEOUgV0gi0hm7drUEu4Efs%2Fr&X-Amz-Signature=c950ebdebdec6cb19c100512aa79fe7ae7255736a296e3fc6ca6e31019598fde&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVSGAJNT%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCdI4g3CsAaPlwoJ10Z6lRE1RGLkhWmhjGug3KXdYeqrwIhAM%2FNNe4Ul8si1lwkxGjWWG3BV7%2Fhl1Rah4CdPjfAf%2BYKKv8DCBYQABoMNjM3NDIzMTgzODA1IgzaUhJR1Omf%2Bk%2BdWQUq3APK025NRHle4zSecHuqLJWEpkMJHTER7eOYpZLKz8cGMXHmW5EjcRwau5ub5xVFfrSrt4%2F%2FtrB09bZ8omuwAf2Lr12f0JocggKWCVtJ6V8wonf5y%2BVAwKS8D1Js7XLf4V2c1gyW7uLEWky8D4rNvhlUv%2B9yL8hWvoAk9ZuroNlJns0ILtKY9Hg6bURRn8a5ej3hQ1ThxyfbWpd0RLZoOk5JK3j2BJc%2Froh%2BvQuquqp0esoUcRWVOWqyfLz4C689IKolDhNMNbsSFoCvfyyYhIFI9Jt5hM90vJAybZEa4Io%2BealFUsXQIdx9gcT7XqQhn4h9lN5mo2OuqnSNEEc4XCodd7IG6HcNlcTrCiKLiln%2F%2B%2FbnEprnXLA7e84HVcJpfiL18xCF2Vdw3NWqsNDWkETbs%2BXDsGZp8OTv7XtAOpBk2eEON%2BP0IkXceZHBzOXkLGaSf82qd6OAAcxjwPdPyU8gk7PrupXTrpHXAg3Y8i9o5syfp9nVNov27ZD8wm%2BwxW%2FFAXP0MckjqWBrmVlhVNs4Cf5nQXs%2FvMVrDOJN7uDLrC7s6lbiVHMJJRCOSEquG92CSJjhUDR3Ood%2BaCs7GKrX5O0TsHGVzahlMELaEScnevsUjgtNsIJbOGaJCzCr5vvBBjqkAYtOZeQuldNparg9Vrrakutejz8CzVNNPn0mPyJ4D8Yc6YQkP58JIs%2FB4UnmGZIA4NPaB7CWfvQi0%2Fn2BLNohN%2BWFPYOuKrIw4pC0SCmCfulaqCpUA1j2x3A2ajShY%2BmCgp5gPLlDNn6EMuOE9Y1yBWaOTSDLebBnlGybz4vUbqVcOajfJ0jFYH6METmcFSZNdGvUs6OnTtRkawATVb8qbUHq6d%2F&X-Amz-Signature=a959e91f7b92812df9d8c15b9904769fc296bd46808181cbc2bcdc53a87d2d33&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZHVT2VN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQChuvCg6ZLkW7DdJUxfrt5ZbFvHXqKma4%2BzTfdPSTamuAIhAOVirjYnMT5QHQl19j3Ewy2lv8TcIUtk6kDOiScvzLQNKv8DCBYQABoMNjM3NDIzMTgzODA1IgwC5T2kaKheaziu%2BGQq3AO3AYLQuMxIQJ1MWdr0nOx7A4PXLsy6%2FpJNDhlFzDFu4Ldj3mszN300dOe8FFaCNfSIkfcQV2BABADsOrWZtfxrgHLgMcNdxTwx5KWRobUKHNYQvOXBJZRn%2FNjiu5yEIEJW3irAdVkUlQxRaNsyPaBwn7Ncb5FbhhLUGWIjU%2B0FxkhgND7675w4GbxasnBI3%2B9Ekh7suQuLOu7rQPX6LEv35SCyH94Pr%2BcEA%2BpnGIMVu30NgJ1df8VWV6bba5evtlH81dN8VsQo6%2FjafazTkI18cOdCn7h4ylANLbqgDtVYuYXkjI4NRMjtAzogERNyOn5l4sGlUyqVw%2Bz3IGMZ7anQ7sw1%2BVxk5j7hMaS3sUBRFJSPMw5Y97QjUtr6unAg5%2Fchm1bgR1g8Oz2Pind%2B5WdBQE8rV6Jiuu56DzxjUVd050xE6iMGOCbihr9mnOyhzDoxRLv6L5o3KZQtkk6lvzCltqP5mKeL76QzmVeOdcDgnxoXn7v2PvXuHHyi%2F0ySEhcoLVtPb7i9MsQ25PEEeRdtOZkbF2h%2FNjYTmdUnjRarxN8dOFGdB5t9vmxLI0HbVaK8YtkwcRyVzz0mqXXgz%2FLS9bpggN0wdZ4sZbaBrlai%2FoKe%2BkTkWrwoYKGLtDCu5vvBBjqkAbp9aYlrfmalqnKFhrZSBXsIP1Q5YNV40wRZQNEJVNoV0RooLIDka30ueG4n%2FDHhXRSMvqhd6DqkRSrh5rT58pBZvq1m%2F7Ja64lL9j5%2Bqc5IDdm6BUhtPdDQ9Nyn8BlutB%2FHNncEbaHyKT21rezeJWGRkUJYlZQhh4ivXfDAYO9huHnqa%2BDIlN4U%2B7hCB6t%2F3B%2F%2FGXaSiBuATr0YsfPF66uP6aGv&X-Amz-Signature=880ec3b7b8e8e6bc2e63176ef26c3e9ea87f8306a5e9d687fe4ef79b4b0ae26f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5AJKLFX%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDEu9%2BWRnv1ayfzC%2BAD%2Fce1OpCAZhrgC%2By2pbwndyi4%2BgIhAKJAx5s3Gwu8ZWEzj6B5D9hfQJFGsmk3yATpVCe3i04HKv8DCBYQABoMNjM3NDIzMTgzODA1IgwnLd%2FH4sf7nEv6Wlsq3APhXOSf%2BO3ZzsvbMZ5YVIjeJFx4qsJ3iqlEoveKvYRNCGEcCeRE8lLToaWfmeemfwHS8eY9vJY0D6GQC37Gt5Nl%2BUO6soRyOWfgifpuLnDxARcvDWZXtvlkj9gSka47Uk320O1tDxaWH4WRsx8nljKCDIEmj3lS43APGBSHyCbN5KfCFd%2FPu%2FgI534paySH2oIS3V%2FY9FQp0f1U2BWDFWinhTn1MD%2FIug4LDKIE%2Bablp2qmtASFJGhGBdiBuYoO70J0JEFN7l6f2kuejoZIdLPO1vIUAVAxn1PFqXgMbo2GKVmLc6Z8FwOmhA5mODWb3USFoW3W1MYYPfw1KubYNFeKstYWH0tOqLdZKrva2%2BEBFTSX7m5HlukDUq5KK%2FWcdsi3YCsY2hW1aXi2WGmYH%2F6eluRmBeXkNhzIlPJ81SaLMt7%2BQcoFP4Aueli9EmMXh6%2BdcXHPN1AKSwizBI3KOe%2Fs2lqfcFYsaXwAbPwETj2K%2B6SiZOnYEvLq7oHiyRDzIWuR1i4nnqYSq9QOksXDv%2Fh5w3CeCv8jNRAEh2jN0u3hqle5eueGJvhgCuvtj%2FUAgfs8HlXQ8UQHGo5pp3xuA1Oy0%2FjxeKqHyKW3KH%2BZzJv81SSaYaILTszFB9WZejCW5%2FvBBjqkAYH4sFDQepF%2FUi8IoEumbg065EBHvo%2F%2BQkUsEzhezO4hElWwsOlRPBN7HKr9wpNH8RthgyIdCAky%2FuP2GrRsSdcobhLCI7%2BhPaExi%2BR9I3JwCKMd8nD38ek0Fr1rZIZ9cslPA7a5kJ%2BMLIRLzvSEkDvvhgpb4lnwaDD14YOyT%2BGGXuIGQ0P3QQZgTNhkMelQ5GBaVEOUgV0gi0hm7drUEu4Efs%2Fr&X-Amz-Signature=a36f7d291f956d17a88399acf01a549d0d3db9015459a89b03eba791fd03abaa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
