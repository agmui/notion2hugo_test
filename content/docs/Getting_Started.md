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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AJWFACZ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCXsOPPZLHnhfTQpNBilybGP%2BD%2FAMQIgzUl8kQ2keDmgIhAORCIcCq74xQtKjoNfcx6N2J3gTvLZDz33i6XUijKEUIKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBOjo7cNco2MHxAXwq3ANBKV%2BT2Dnkz75HCi%2Fu6FGBtIzEL1JxlYwclWQA0EDog8vDxFOx8gJCcZJ%2FJDedM3pDLEY6Q50VbXusG46i1snMQjhS56rHPlVAmVRKL6%2FWmRu%2FhilBYSlinVph10TaSg2EAGjeh%2Fiy5amgniBTFkThxkDMbAvtR8UL1NWRKOd7imLT%2BE7SExhYtsvDluXeem4L8gjmN9%2BT%2F7Xi4LKXufbzy9caUMSV06ewMuhqscW0c2IqbIaaUFPYGwY0hnk2zOrsv%2BdcQoWAyOUweKyCMz10CATFvqBnb7ZwXwbbVXB49QPdpbnogVMysnDHa7Ht4%2FsryyYBxB8u0jABuhzXY35fFMtxSatNpGbH0yF9IlFbAQStECjeks0ZIBVmhyXcZa5QJ0EhhTL4CuwfZ4TkmYpnIuVEtoCW%2B7OOqN1GClHIV%2Blehi9eg10QVzsgzcybSD8awJWbvG%2FqwS2xYzALVFp1xNq9TXonyeVbQ29To95wpw1rZQaN4Pf7ciKJYOJ%2BGfh1LpqPv2jhucn4XhMIX7X9qj0mMQjn4dg%2FgGTzEI0H%2FH2lCCMo4ooXcb91xyN6H5RXFslES4Fz9icTz1ojQRIwdoztdmuNsnwh0hOzmSXNCOjJZWEPgh%2BlK2Kt6zD6obTEBjqkAYaSb%2BYNDrh9EaGx7VLLXmLX6AeodOFpgX8%2FeosDcI7FanA3SEJlzvRqqo1xTJmvGuz6D6QKg9XndW7L5b7vG35Ap8e9tTkrUOidimZYrLfhoPQXn6rqWihhSpB1JQiVGgDgEInhDyv5fdXmUMzFYD8TZMpPg3pnQcow3AWTiZgLtGCSTWSqOpQgT%2BXPrF7e4fUGh76lyQLYwgQsDH30cFxM%2FR3b&X-Amz-Signature=c716bcdba85474483dabd34e62aa5a1a2b3d0286280bdbbcec78ca183992ff1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AJWFACZ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCXsOPPZLHnhfTQpNBilybGP%2BD%2FAMQIgzUl8kQ2keDmgIhAORCIcCq74xQtKjoNfcx6N2J3gTvLZDz33i6XUijKEUIKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBOjo7cNco2MHxAXwq3ANBKV%2BT2Dnkz75HCi%2Fu6FGBtIzEL1JxlYwclWQA0EDog8vDxFOx8gJCcZJ%2FJDedM3pDLEY6Q50VbXusG46i1snMQjhS56rHPlVAmVRKL6%2FWmRu%2FhilBYSlinVph10TaSg2EAGjeh%2Fiy5amgniBTFkThxkDMbAvtR8UL1NWRKOd7imLT%2BE7SExhYtsvDluXeem4L8gjmN9%2BT%2F7Xi4LKXufbzy9caUMSV06ewMuhqscW0c2IqbIaaUFPYGwY0hnk2zOrsv%2BdcQoWAyOUweKyCMz10CATFvqBnb7ZwXwbbVXB49QPdpbnogVMysnDHa7Ht4%2FsryyYBxB8u0jABuhzXY35fFMtxSatNpGbH0yF9IlFbAQStECjeks0ZIBVmhyXcZa5QJ0EhhTL4CuwfZ4TkmYpnIuVEtoCW%2B7OOqN1GClHIV%2Blehi9eg10QVzsgzcybSD8awJWbvG%2FqwS2xYzALVFp1xNq9TXonyeVbQ29To95wpw1rZQaN4Pf7ciKJYOJ%2BGfh1LpqPv2jhucn4XhMIX7X9qj0mMQjn4dg%2FgGTzEI0H%2FH2lCCMo4ooXcb91xyN6H5RXFslES4Fz9icTz1ojQRIwdoztdmuNsnwh0hOzmSXNCOjJZWEPgh%2BlK2Kt6zD6obTEBjqkAYaSb%2BYNDrh9EaGx7VLLXmLX6AeodOFpgX8%2FeosDcI7FanA3SEJlzvRqqo1xTJmvGuz6D6QKg9XndW7L5b7vG35Ap8e9tTkrUOidimZYrLfhoPQXn6rqWihhSpB1JQiVGgDgEInhDyv5fdXmUMzFYD8TZMpPg3pnQcow3AWTiZgLtGCSTWSqOpQgT%2BXPrF7e4fUGh76lyQLYwgQsDH30cFxM%2FR3b&X-Amz-Signature=028b28f233c24be1911551c4e99612f060c01fcdb4937bd6b98335682bb85c66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AJWFACZ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCXsOPPZLHnhfTQpNBilybGP%2BD%2FAMQIgzUl8kQ2keDmgIhAORCIcCq74xQtKjoNfcx6N2J3gTvLZDz33i6XUijKEUIKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBOjo7cNco2MHxAXwq3ANBKV%2BT2Dnkz75HCi%2Fu6FGBtIzEL1JxlYwclWQA0EDog8vDxFOx8gJCcZJ%2FJDedM3pDLEY6Q50VbXusG46i1snMQjhS56rHPlVAmVRKL6%2FWmRu%2FhilBYSlinVph10TaSg2EAGjeh%2Fiy5amgniBTFkThxkDMbAvtR8UL1NWRKOd7imLT%2BE7SExhYtsvDluXeem4L8gjmN9%2BT%2F7Xi4LKXufbzy9caUMSV06ewMuhqscW0c2IqbIaaUFPYGwY0hnk2zOrsv%2BdcQoWAyOUweKyCMz10CATFvqBnb7ZwXwbbVXB49QPdpbnogVMysnDHa7Ht4%2FsryyYBxB8u0jABuhzXY35fFMtxSatNpGbH0yF9IlFbAQStECjeks0ZIBVmhyXcZa5QJ0EhhTL4CuwfZ4TkmYpnIuVEtoCW%2B7OOqN1GClHIV%2Blehi9eg10QVzsgzcybSD8awJWbvG%2FqwS2xYzALVFp1xNq9TXonyeVbQ29To95wpw1rZQaN4Pf7ciKJYOJ%2BGfh1LpqPv2jhucn4XhMIX7X9qj0mMQjn4dg%2FgGTzEI0H%2FH2lCCMo4ooXcb91xyN6H5RXFslES4Fz9icTz1ojQRIwdoztdmuNsnwh0hOzmSXNCOjJZWEPgh%2BlK2Kt6zD6obTEBjqkAYaSb%2BYNDrh9EaGx7VLLXmLX6AeodOFpgX8%2FeosDcI7FanA3SEJlzvRqqo1xTJmvGuz6D6QKg9XndW7L5b7vG35Ap8e9tTkrUOidimZYrLfhoPQXn6rqWihhSpB1JQiVGgDgEInhDyv5fdXmUMzFYD8TZMpPg3pnQcow3AWTiZgLtGCSTWSqOpQgT%2BXPrF7e4fUGh76lyQLYwgQsDH30cFxM%2FR3b&X-Amz-Signature=20f1029c291481eb32b452d8cdeede3efdd40ce2968ee247169db7b862a1b894&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663D2DZ2R%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpxGQ7kDX6r7bAo5rm3DcixrnhOjvho9ce46bXqTeGHAiBNjJHJbbYII%2B%2But7%2FWkWplQDn2DDC88mDj7%2BTLiczJvCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Qgr%2BOM9sV%2BQzonSKtwDvu4CdJfsMgVKbFNWi0VVurqVpvwNjEAbc8s6UOjwRpuyrdJeKINAdv8HKLA6mf2YQUM7bPDVqN2411RlrTcKgz0N2fz1uzyGbKBnvGcGt1g2KTUurpaJ%2BEpgqP3tIEIV%2BwfHEOBEYxbJkVL%2BRzDLYybFIM%2Bhqfpwlip6DNvmS7%2BFbIMT2D5W3113TwlyBcyhr7XS8dIQgszevfnu%2FCS28%2BMFNK0yiN%2FsqqDVCouPLXx0FRQba3GxiZd4I8CHyh3HPg4%2BY7Y%2B5AuVhyXSOhjs1%2B9QOnNHUidvHv8jRHITpwkROojWcscVHWEKSReU95dz2TXQYAarCR7SXglxlW6%2B2tvqb2xQRqsQ4JdpsY%2F4IoSkdl4KufMl0LiHy%2B01sW40nsCwb9MjMvKCVVudg%2Bmd7u%2B5fzkkz%2B9PX8Cqm%2BvvvCvEMZnKyjnef3vDIrRn1YTZfpy4V72tIL9FD3KtAsnSPJglW1bAT30p5EQom5j2WvdEmFYEt8%2FaKbOpQ4DRkIAYbWVATXnNDDtCQklWA7VigppQO4x5uOaC9GSMI29PQQzvZ%2Fx43JJljkdAF%2FY6wwNTyHb5Do6tNrd7ExaeTFrRpaKXlYoX7HBs9fReq2Znruhf76gThw4CV6jWgaswlKG0xAY6pgF1egcpMJc2qmXdOuAPZcdS5o7fEgcfid7nn3NSSgTg%2Fx2HbetJjn%2F0MovJ5G1oHhKV1dISSewRxbmQPKaQuwU12eoNmOhwlKGis%2FZCkV0hh4DNj%2Far68UAg4eGR6HCljEAJkWbdNn2kccrA5Goj3Ig3O9ExPysMYAZFk0raEAE2556nNMTA1VArjVJpI9vfjHsMqsVs8wRc4KnMrxbHEcxfiI1%2FhGv&X-Amz-Signature=6c2ca42bd60376fb6b05085f5ec4c44e8375f33d5ccaff160c0197da24f1ac5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDIAYTP4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxGFDwL%2Bu2%2FpbA1nw0pANze3mhDu1Puq9z8Nixd3Ki8AiB4TO1SkJYyO0iKGtnnkEK8zt5Umf0MVhbPJR0tLhxL%2BiqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2JYechax5xkjpK1IKtwD40nNAlPPMiVa42X%2F39qp7H4xez7rAGvcSxG%2Fq%2B%2BC1drNes22lGMLY5hYkm8KtoUN7cEWy5tTkAF7%2BVNjphSda91dA7uXnufGC9T27UVC7DUwBnmKsjpcvDQN1wAxyVkTuTAXlEzGYV26vEgU47dZb7zYlYmGUnoIJRxbBArQN6Qwnw8uLROBvLmzuDUfF0rQE5LgrAwQXCY%2FPnIe0gmUNHLyjGZoyyMGRDpGIsaaL1QWTIMHkxSbXlO8JQrQVDrY4%2Fh%2FusuAxSA3mAw37K7V5DSHH8JiqsxotJxNwW6%2Bi8O9Wvj8XNKiwMERb71e6EF25xJP%2F5Hu08M%2F5KcQJkDNrh8Di5YYpCnJUOOH7Ndck4HCgMmzYbx2ONKuqVK1RuAAV5rpLyikgzirffnQ9%2BbA1Wazds0LftkmqKTroLVWT44aTmWhDCcyzkSVeaxRI7V7v6Kx4l9cmMQqAX9RbHlZN4ugpDms%2BuzAawmEPSILY%2B38Hp%2B1sg8d6SVC9u8NZYBoZNiupORoTA9w3i15YBLExOvY3AkMVVdR8mpU4LMiwQw4D5cSjsPH4aawQYraDIemi%2BFdcrp%2BD2NgjmAiBdh%2BvNhLfOvSgxY9vq2901zLISAkRRb0urTcwfijatowz6G0xAY6pgH7sNE1vhL2OMJLBM2COASYxvKNX9noewn5qjSKHR7iCiybZVOCn8bPZSu%2Bh3mxrgmMtWWlCKpKpe9kySE71Giu2nt6boOHBWQv4tZntbwYdvw7Cc5V8LoHTdl%2BXaLEXcXDi2LdNxUpoMdF%2FUExbpwoGF3GSCbDnEfw0wHEX6dTCdInxXBmb7VnxmboEEQZVU3c8AUAQfTnJmRBy46lSfTKatlJfcU0&X-Amz-Signature=a78014cddb0bd61644e40a30c0ceb8f11fc3e7f102ba625a863a694e654135ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AJWFACZ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCXsOPPZLHnhfTQpNBilybGP%2BD%2FAMQIgzUl8kQ2keDmgIhAORCIcCq74xQtKjoNfcx6N2J3gTvLZDz33i6XUijKEUIKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBOjo7cNco2MHxAXwq3ANBKV%2BT2Dnkz75HCi%2Fu6FGBtIzEL1JxlYwclWQA0EDog8vDxFOx8gJCcZJ%2FJDedM3pDLEY6Q50VbXusG46i1snMQjhS56rHPlVAmVRKL6%2FWmRu%2FhilBYSlinVph10TaSg2EAGjeh%2Fiy5amgniBTFkThxkDMbAvtR8UL1NWRKOd7imLT%2BE7SExhYtsvDluXeem4L8gjmN9%2BT%2F7Xi4LKXufbzy9caUMSV06ewMuhqscW0c2IqbIaaUFPYGwY0hnk2zOrsv%2BdcQoWAyOUweKyCMz10CATFvqBnb7ZwXwbbVXB49QPdpbnogVMysnDHa7Ht4%2FsryyYBxB8u0jABuhzXY35fFMtxSatNpGbH0yF9IlFbAQStECjeks0ZIBVmhyXcZa5QJ0EhhTL4CuwfZ4TkmYpnIuVEtoCW%2B7OOqN1GClHIV%2Blehi9eg10QVzsgzcybSD8awJWbvG%2FqwS2xYzALVFp1xNq9TXonyeVbQ29To95wpw1rZQaN4Pf7ciKJYOJ%2BGfh1LpqPv2jhucn4XhMIX7X9qj0mMQjn4dg%2FgGTzEI0H%2FH2lCCMo4ooXcb91xyN6H5RXFslES4Fz9icTz1ojQRIwdoztdmuNsnwh0hOzmSXNCOjJZWEPgh%2BlK2Kt6zD6obTEBjqkAYaSb%2BYNDrh9EaGx7VLLXmLX6AeodOFpgX8%2FeosDcI7FanA3SEJlzvRqqo1xTJmvGuz6D6QKg9XndW7L5b7vG35Ap8e9tTkrUOidimZYrLfhoPQXn6rqWihhSpB1JQiVGgDgEInhDyv5fdXmUMzFYD8TZMpPg3pnQcow3AWTiZgLtGCSTWSqOpQgT%2BXPrF7e4fUGh76lyQLYwgQsDH30cFxM%2FR3b&X-Amz-Signature=0bd79ffaf2e26bfb7581da76f4e0f75b8e266bf9ff7275b4597581ba56684175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
