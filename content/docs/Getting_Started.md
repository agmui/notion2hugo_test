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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZDRFTOE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCP2tWnOTikY%2BEhZBONlacz313wQE29Ii%2F6XzArmT3qygIgDRsxUxt%2FCSfdGhSh7Mm5uBd62T%2Fki8cb%2BDCRuQMeC1kq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDIzaUDs8zk9MjV6qZSrcA4RmDsysGCtkwFp8%2FHV8RvD4Q7Nf7A6J6GDYIckh4FKK0w3O52WVA0k4ckv%2BjoGY68JVW6ANQkk8IKBUadymhQTnNNqqqgrN%2BiHimBsypRIK3O%2BFr3x987iledW8SOT09IBD%2BrQogySskEx1EPXLbGnYIJNSx%2BhNeNYAPTIFs%2FPQrm8vpU5lkqrYZhvqodKq6fKuVq17KfJ9puC1AvKzR1lnLGTrdoG5tCt%2Fg6k3FiM6YubHJsj48Wd4eo3zftesNSR6PB7JGxNQQOTDVPwEdZyGsS6l4Ysz9FQIFDdyHNDxNIHo2Hzj%2BdP9Vq2Sn8Z33n4qfGBypwyvmPJ0qLmMTY1QYjLdkhNDKWIPVCBZQwcPezMbxKyj0UPELXh6grlQvbFC8dbNax4iVApFXcuk7e61Tnfz2LbOrRrIH8VE54z%2BMF0PjA7th0GAaotgXYl%2B3wftslKpzHC%2BHoUttO%2BcfMX9cNcYd7kHnjSX1oXmwKnGj4czwZktlJOBpvfs7bZMtALhGLpL70yopsPJ4Y%2Fdn78ww7ZW%2Be8uhOIbZHEMqM%2B%2FA6WcsTrNq2RzsWHNjKRRMRUwnP%2FmjUloxplI1hsZE6EXXzB3M7bKM9JmHstoFg2bVno0mX5B2gerEvvCMIbD%2BMQGOqUBujq2srzValuKlluIUSHuzaB3NmAbVQM3rjeJtjY4ny5%2FZ%2FsNomtWGQfjRS0t7rP8RZx94KrY5JGPcyqSrK%2BallzIBHvpv%2FehsA0lU8a6%2B9MvmkrToeEPtnWtZL%2FT3UQtd2XbxZxHKVF89ibaSJWokOabJIgvZTETJbwQ0jGZAuDZAhSDoSJykQktZhZW6L76lbRbtIX22pxfBOKtZGijI6sJS4xq&X-Amz-Signature=332c55b233c989de0f9cb537d0805c8bfde7b0f359405b3f5735c8772aacc206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZDRFTOE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCP2tWnOTikY%2BEhZBONlacz313wQE29Ii%2F6XzArmT3qygIgDRsxUxt%2FCSfdGhSh7Mm5uBd62T%2Fki8cb%2BDCRuQMeC1kq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDIzaUDs8zk9MjV6qZSrcA4RmDsysGCtkwFp8%2FHV8RvD4Q7Nf7A6J6GDYIckh4FKK0w3O52WVA0k4ckv%2BjoGY68JVW6ANQkk8IKBUadymhQTnNNqqqgrN%2BiHimBsypRIK3O%2BFr3x987iledW8SOT09IBD%2BrQogySskEx1EPXLbGnYIJNSx%2BhNeNYAPTIFs%2FPQrm8vpU5lkqrYZhvqodKq6fKuVq17KfJ9puC1AvKzR1lnLGTrdoG5tCt%2Fg6k3FiM6YubHJsj48Wd4eo3zftesNSR6PB7JGxNQQOTDVPwEdZyGsS6l4Ysz9FQIFDdyHNDxNIHo2Hzj%2BdP9Vq2Sn8Z33n4qfGBypwyvmPJ0qLmMTY1QYjLdkhNDKWIPVCBZQwcPezMbxKyj0UPELXh6grlQvbFC8dbNax4iVApFXcuk7e61Tnfz2LbOrRrIH8VE54z%2BMF0PjA7th0GAaotgXYl%2B3wftslKpzHC%2BHoUttO%2BcfMX9cNcYd7kHnjSX1oXmwKnGj4czwZktlJOBpvfs7bZMtALhGLpL70yopsPJ4Y%2Fdn78ww7ZW%2Be8uhOIbZHEMqM%2B%2FA6WcsTrNq2RzsWHNjKRRMRUwnP%2FmjUloxplI1hsZE6EXXzB3M7bKM9JmHstoFg2bVno0mX5B2gerEvvCMIbD%2BMQGOqUBujq2srzValuKlluIUSHuzaB3NmAbVQM3rjeJtjY4ny5%2FZ%2FsNomtWGQfjRS0t7rP8RZx94KrY5JGPcyqSrK%2BallzIBHvpv%2FehsA0lU8a6%2B9MvmkrToeEPtnWtZL%2FT3UQtd2XbxZxHKVF89ibaSJWokOabJIgvZTETJbwQ0jGZAuDZAhSDoSJykQktZhZW6L76lbRbtIX22pxfBOKtZGijI6sJS4xq&X-Amz-Signature=728f8b2b30dde2cab914a49003411507040e65c7f62000ddd7e77276b926654c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZDRFTOE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCP2tWnOTikY%2BEhZBONlacz313wQE29Ii%2F6XzArmT3qygIgDRsxUxt%2FCSfdGhSh7Mm5uBd62T%2Fki8cb%2BDCRuQMeC1kq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDIzaUDs8zk9MjV6qZSrcA4RmDsysGCtkwFp8%2FHV8RvD4Q7Nf7A6J6GDYIckh4FKK0w3O52WVA0k4ckv%2BjoGY68JVW6ANQkk8IKBUadymhQTnNNqqqgrN%2BiHimBsypRIK3O%2BFr3x987iledW8SOT09IBD%2BrQogySskEx1EPXLbGnYIJNSx%2BhNeNYAPTIFs%2FPQrm8vpU5lkqrYZhvqodKq6fKuVq17KfJ9puC1AvKzR1lnLGTrdoG5tCt%2Fg6k3FiM6YubHJsj48Wd4eo3zftesNSR6PB7JGxNQQOTDVPwEdZyGsS6l4Ysz9FQIFDdyHNDxNIHo2Hzj%2BdP9Vq2Sn8Z33n4qfGBypwyvmPJ0qLmMTY1QYjLdkhNDKWIPVCBZQwcPezMbxKyj0UPELXh6grlQvbFC8dbNax4iVApFXcuk7e61Tnfz2LbOrRrIH8VE54z%2BMF0PjA7th0GAaotgXYl%2B3wftslKpzHC%2BHoUttO%2BcfMX9cNcYd7kHnjSX1oXmwKnGj4czwZktlJOBpvfs7bZMtALhGLpL70yopsPJ4Y%2Fdn78ww7ZW%2Be8uhOIbZHEMqM%2B%2FA6WcsTrNq2RzsWHNjKRRMRUwnP%2FmjUloxplI1hsZE6EXXzB3M7bKM9JmHstoFg2bVno0mX5B2gerEvvCMIbD%2BMQGOqUBujq2srzValuKlluIUSHuzaB3NmAbVQM3rjeJtjY4ny5%2FZ%2FsNomtWGQfjRS0t7rP8RZx94KrY5JGPcyqSrK%2BallzIBHvpv%2FehsA0lU8a6%2B9MvmkrToeEPtnWtZL%2FT3UQtd2XbxZxHKVF89ibaSJWokOabJIgvZTETJbwQ0jGZAuDZAhSDoSJykQktZhZW6L76lbRbtIX22pxfBOKtZGijI6sJS4xq&X-Amz-Signature=75e891c2310186a9ca8c81297ee8faf458c6cd088d81540bf2b0f5359e947320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E6E4PJ5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCyWCKHWotoN4pAvuufbw0R6mn3YZw1va%2Fm%2FwjtpL3l%2FQIhAJwbG7EmCLOILgnPv1WlXUeB6DZH4hcMWuflbNxCY3pjKv8DCEsQABoMNjM3NDIzMTgzODA1IgxujjOJ%2BAw%2FGKOCb6cq3APk9B6g9IGjMer2oZu%2BhkELbRUrLmGe%2FUqdTvdmkl9V2GybdzoEoT8qX%2Bxu1boU0GWPpxSHzsDDWPSCGIVBFgaINVLJb9Te4vaZyN6KMrmxghc%2FkFgEUFtkaVv9yY8dUrqqKKiUloZcuVulKBLXgb1wbHZkb51X1uiparci4m%2F1in33ZkHzI2Oax4cJb9YlKMJv43vZnUPpA9Szzu1QNPB9qdzAF3yScKbifq8BLNflSMu3YyMmbivTQO5QVJEb9q7Gbcklme0O3ncIiC%2BeWQapE0QCUSUCM7L6NL%2F17y%2BFG2rGGDsvYMDungqjZnKuAq6L3BUewoorz5c21XNbjSAl02aFhHUOjENtHdowuPN6fTY3EmE0VM8A%2FRgfMzukS8%2FKp5wGWLjuMHWhV0OS%2B%2FOn%2Bp%2FbTekR9jLbFqv3ovTJgDFeOpgChVtCnKUsBVcAavy86wPvG7K4o%2FhvDmr%2BaBW%2FSoJvw86T52S9x5Wmz%2FvFsC6dwNeEO89Qdb9i6R2%2FazCB%2FBEQdxR8JCxo0uakWVLQ%2FG3r0aD%2F96FMMXv2wfr%2F4D9PR0%2B%2B5J5aj48AaZ%2FfZdOR6bDE9QuH6bvD%2BAQo3yLa%2FVGgIuftRuQNn44M5lHR%2BtlLogUPbo8QbpehTTCCw%2FjEBjqkATG2mLte1IIryhKTz8f0n5JrLPAyZXhH4v3JmZHZTk5N6IvpApF767LAJYy7n0DnMy3MKE94fllFWNwO6IrX%2FVr0Paz3iGbcmcQTFfooO3ihpdIyLytKeu9ip1pZvrUWRrcYAhq3SeX8%2BMFHXS2J900NNE0UNhboF5mzgizLFqxk7QJ2zUcjkhiBYYGw%2BOpY%2Bo%2FdecbGwozR4ufpcFzD9R9SIcVW&X-Amz-Signature=2bd76177ab426b141e3f6aa787695f52f7f4960a44d652f253508cdc8374b554&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTCF5NGC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDa0zgUDt1sF3W4Wh7evOQHNeAjoLMUZzl%2Bm2AH%2F1%2Bc1AIgC7yXo3NTKZ5mG6DXw3UPQRzaQTah98wwUIV2%2FJA1Q5wq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEmV3Nuh0tb3MJ%2FPIircA57uwfXKsn2lR4OAIPJxG1UpIm1Ut3WGPZg9WdGUGwE7HqPr5rd%2FJRAMNqct9%2FX%2FsWoFXbs%2BispqTvBq6OVtcGgP0P8LJLDfs19C9VRaw7DIrMRqavlFaqL%2Bgs7MT2eMTBI2lE%2FmcIEKRuC%2FTJgdEMlCe2Q4X39zlzsLiwGGBOKt5NiuVWZlR0hWH7Sj3nybZyA1bbI0DbdIGX3bfaGS%2Fmak32yGIi7KKnLEZ%2Fq9Yx9A9TlL0s%2BU1J09yFsZYLn5Vqxz%2B%2FVkUosjkk9QRdQEcihhK%2BCGTXwZB%2F9V%2BBrn%2FVs6CfyFcVxNMFYLRhicUo4Cu8nFHhGEHrN%2ByKSYvK%2B4X4PgYFCrQPQhsQZV2f9XI9hVI47Cd4TE%2Flcf8VhROoKV6IWoP2pDe4qpVXm%2FqeTsKmrJ%2FuSAzrFZY%2FyqOc3z0F7ws%2Bc%2BdRjUaEE902EQmlTo9kZHfsof6dd2DSJkkUOvXiK8s7mgx3bvt5YYp79tcgxD1BesZ%2BxQaONYRml08HdpxdbMla7u%2FU5sGVLHg7Ap54%2BJkhEAIESgtDVp95eJUZQRt5qAZ3%2FpRurzn3sxTh4o%2BLEmm2QZGECH1GEsVNNAP%2Bjq%2B3NBrXRkc6uPySc4GRINCj0AgXyK2rgfgHa%2BMJLC%2BMQGOqUBPt%2FdegimCqRqiJp%2FIz9eq0N5la0VYTLdQZnYN%2BmYy%2BnklYRFkmRB23bTyhzVJnOYnUzDKfFWCAG2%2Fg%2FvGgdnuw7uEpiecDvefud231QsouK5vSCndu4YQrT8JPjlPzbf4NFVGVtGwxzeBMA1gjcqkmIf30TTeEni%2F6bSa6rwEfCH5wA790uMl3ay%2Blk32ZAzyYaSzvvpxDtBiAM82v74tl6WEYc7&X-Amz-Signature=4e920a4a89d6699ffbb249afcca5e51c15fcd450a8757d5e7930a97dd4c0c257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZDRFTOE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCP2tWnOTikY%2BEhZBONlacz313wQE29Ii%2F6XzArmT3qygIgDRsxUxt%2FCSfdGhSh7Mm5uBd62T%2Fki8cb%2BDCRuQMeC1kq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDIzaUDs8zk9MjV6qZSrcA4RmDsysGCtkwFp8%2FHV8RvD4Q7Nf7A6J6GDYIckh4FKK0w3O52WVA0k4ckv%2BjoGY68JVW6ANQkk8IKBUadymhQTnNNqqqgrN%2BiHimBsypRIK3O%2BFr3x987iledW8SOT09IBD%2BrQogySskEx1EPXLbGnYIJNSx%2BhNeNYAPTIFs%2FPQrm8vpU5lkqrYZhvqodKq6fKuVq17KfJ9puC1AvKzR1lnLGTrdoG5tCt%2Fg6k3FiM6YubHJsj48Wd4eo3zftesNSR6PB7JGxNQQOTDVPwEdZyGsS6l4Ysz9FQIFDdyHNDxNIHo2Hzj%2BdP9Vq2Sn8Z33n4qfGBypwyvmPJ0qLmMTY1QYjLdkhNDKWIPVCBZQwcPezMbxKyj0UPELXh6grlQvbFC8dbNax4iVApFXcuk7e61Tnfz2LbOrRrIH8VE54z%2BMF0PjA7th0GAaotgXYl%2B3wftslKpzHC%2BHoUttO%2BcfMX9cNcYd7kHnjSX1oXmwKnGj4czwZktlJOBpvfs7bZMtALhGLpL70yopsPJ4Y%2Fdn78ww7ZW%2Be8uhOIbZHEMqM%2B%2FA6WcsTrNq2RzsWHNjKRRMRUwnP%2FmjUloxplI1hsZE6EXXzB3M7bKM9JmHstoFg2bVno0mX5B2gerEvvCMIbD%2BMQGOqUBujq2srzValuKlluIUSHuzaB3NmAbVQM3rjeJtjY4ny5%2FZ%2FsNomtWGQfjRS0t7rP8RZx94KrY5JGPcyqSrK%2BallzIBHvpv%2FehsA0lU8a6%2B9MvmkrToeEPtnWtZL%2FT3UQtd2XbxZxHKVF89ibaSJWokOabJIgvZTETJbwQ0jGZAuDZAhSDoSJykQktZhZW6L76lbRbtIX22pxfBOKtZGijI6sJS4xq&X-Amz-Signature=bdfe846aa9fad832ac7f635280c736672b8422b4d013a37783d8363dedf55372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
