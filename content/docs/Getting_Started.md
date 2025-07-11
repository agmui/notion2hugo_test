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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGAP2UZX%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP42htu3gdaQ3%2BCkjJLCuHgEE250uForwjke35LJkUBwIgLSfMHgVy4ZnB4FZbQcOwtLQO%2FUrZYHDCNaPuAU1LLk4qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGdP8UL%2FYE3rpE%2B3SrcA0xVQ1h1EoPsdtdIu2065WYMay%2Bcqk2KpvEkgz%2FQX%2FMNL74f2MsQ9xg1Er%2B0uxW%2B5Gyvhy6w15Kvn1KirUujaOxITAOau6DRVWXx%2FqHX89QtcxSHXAFvi3KWN1jp5n9wwWCqW9wpeKZQZt1Q6kcy%2FM1Vc9SKxSS5uuatiVvr%2FnZUBjYGAowldHouNlHji41SMToJO%2FkiCOkmz%2Bok%2Fy5jygHIKJ7zDmyOEENWTa8emH8F9Fy3D8fhoX8ZRMv0lhaktMD%2Fg0N5Oqd09RD7eG3e3QrUkz7ruyqaA4UJJ4DkT1nSkBSXnhmBrbvkwvpUJ6apLP%2F6kzaRqtDmuc1KhxhybOJ3nggo5GRKP3RQyYoBQ%2Bv%2F5r4%2BU%2BnpXqM%2Bg%2BbBfSLYko%2FGr7lY3Kj9CJTJKaxXD0esQizQ%2F12Rh5fMJLX%2BXLUSs5IbzKyuzhrbqKT1eldTEIN3rFCCm19Kfzyo61iR%2FWn8m9d1YPIN1NKaUEBjCNWtoX5JagIkR4QK3QKuzxR9RBc6oX4dXaDkGSsPDj5cgHLQr7MpBVx8JZAhW4zZvFHNckIcRd312MbAVtfWQEOLdPWVwmXzNPBeiCpICjeizqECs6fJ62zVju7TKnKGN1pB6l9SwKFFUq3dTBArMNLywcMGOqUBIjlTBF4rJOyLOd1kFupmK9s9KNqVhL9DDu7Zki0aWmhnO3FxvrWbGafK8ySMJNgmEwYkskC5radYYjyUtwxqUsxUHvt39dCj333AAudZi2G6GlHD11DDkydEQLdrYLkYpTpgbU5E5oEyPIqS4DYrZqYvSAQoAVDzEjLJhe2Z5v7N567%2BjEZHTCUDbeUFt4%2B8YnSXc1%2FGEhYGDd8jNYViqWNF4fSj&X-Amz-Signature=75f75431cd18e117a2237d3179dbe3281499d825b801f3f8fda9c694d67a34ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGAP2UZX%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP42htu3gdaQ3%2BCkjJLCuHgEE250uForwjke35LJkUBwIgLSfMHgVy4ZnB4FZbQcOwtLQO%2FUrZYHDCNaPuAU1LLk4qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGdP8UL%2FYE3rpE%2B3SrcA0xVQ1h1EoPsdtdIu2065WYMay%2Bcqk2KpvEkgz%2FQX%2FMNL74f2MsQ9xg1Er%2B0uxW%2B5Gyvhy6w15Kvn1KirUujaOxITAOau6DRVWXx%2FqHX89QtcxSHXAFvi3KWN1jp5n9wwWCqW9wpeKZQZt1Q6kcy%2FM1Vc9SKxSS5uuatiVvr%2FnZUBjYGAowldHouNlHji41SMToJO%2FkiCOkmz%2Bok%2Fy5jygHIKJ7zDmyOEENWTa8emH8F9Fy3D8fhoX8ZRMv0lhaktMD%2Fg0N5Oqd09RD7eG3e3QrUkz7ruyqaA4UJJ4DkT1nSkBSXnhmBrbvkwvpUJ6apLP%2F6kzaRqtDmuc1KhxhybOJ3nggo5GRKP3RQyYoBQ%2Bv%2F5r4%2BU%2BnpXqM%2Bg%2BbBfSLYko%2FGr7lY3Kj9CJTJKaxXD0esQizQ%2F12Rh5fMJLX%2BXLUSs5IbzKyuzhrbqKT1eldTEIN3rFCCm19Kfzyo61iR%2FWn8m9d1YPIN1NKaUEBjCNWtoX5JagIkR4QK3QKuzxR9RBc6oX4dXaDkGSsPDj5cgHLQr7MpBVx8JZAhW4zZvFHNckIcRd312MbAVtfWQEOLdPWVwmXzNPBeiCpICjeizqECs6fJ62zVju7TKnKGN1pB6l9SwKFFUq3dTBArMNLywcMGOqUBIjlTBF4rJOyLOd1kFupmK9s9KNqVhL9DDu7Zki0aWmhnO3FxvrWbGafK8ySMJNgmEwYkskC5radYYjyUtwxqUsxUHvt39dCj333AAudZi2G6GlHD11DDkydEQLdrYLkYpTpgbU5E5oEyPIqS4DYrZqYvSAQoAVDzEjLJhe2Z5v7N567%2BjEZHTCUDbeUFt4%2B8YnSXc1%2FGEhYGDd8jNYViqWNF4fSj&X-Amz-Signature=3f8ec9a1cc6a877bc319f6690012acca60565fe7c362fc59c2fc646dcc6b6588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGAP2UZX%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP42htu3gdaQ3%2BCkjJLCuHgEE250uForwjke35LJkUBwIgLSfMHgVy4ZnB4FZbQcOwtLQO%2FUrZYHDCNaPuAU1LLk4qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGdP8UL%2FYE3rpE%2B3SrcA0xVQ1h1EoPsdtdIu2065WYMay%2Bcqk2KpvEkgz%2FQX%2FMNL74f2MsQ9xg1Er%2B0uxW%2B5Gyvhy6w15Kvn1KirUujaOxITAOau6DRVWXx%2FqHX89QtcxSHXAFvi3KWN1jp5n9wwWCqW9wpeKZQZt1Q6kcy%2FM1Vc9SKxSS5uuatiVvr%2FnZUBjYGAowldHouNlHji41SMToJO%2FkiCOkmz%2Bok%2Fy5jygHIKJ7zDmyOEENWTa8emH8F9Fy3D8fhoX8ZRMv0lhaktMD%2Fg0N5Oqd09RD7eG3e3QrUkz7ruyqaA4UJJ4DkT1nSkBSXnhmBrbvkwvpUJ6apLP%2F6kzaRqtDmuc1KhxhybOJ3nggo5GRKP3RQyYoBQ%2Bv%2F5r4%2BU%2BnpXqM%2Bg%2BbBfSLYko%2FGr7lY3Kj9CJTJKaxXD0esQizQ%2F12Rh5fMJLX%2BXLUSs5IbzKyuzhrbqKT1eldTEIN3rFCCm19Kfzyo61iR%2FWn8m9d1YPIN1NKaUEBjCNWtoX5JagIkR4QK3QKuzxR9RBc6oX4dXaDkGSsPDj5cgHLQr7MpBVx8JZAhW4zZvFHNckIcRd312MbAVtfWQEOLdPWVwmXzNPBeiCpICjeizqECs6fJ62zVju7TKnKGN1pB6l9SwKFFUq3dTBArMNLywcMGOqUBIjlTBF4rJOyLOd1kFupmK9s9KNqVhL9DDu7Zki0aWmhnO3FxvrWbGafK8ySMJNgmEwYkskC5radYYjyUtwxqUsxUHvt39dCj333AAudZi2G6GlHD11DDkydEQLdrYLkYpTpgbU5E5oEyPIqS4DYrZqYvSAQoAVDzEjLJhe2Z5v7N567%2BjEZHTCUDbeUFt4%2B8YnSXc1%2FGEhYGDd8jNYViqWNF4fSj&X-Amz-Signature=04b76beed015092dafade3377d5525663f9f595bce99577580f12f2971728acb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672SFSYIN%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZJabiJgYGoN6h%2Fw1MHy5BNb4%2F2V1bhoNC1oVmQjI2rAIgO0cUYnoaiAEbgOiXhzgp40FdcHywOfOrovLxRqHOaSwqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPpr0Xuy3I%2FAbkFEircA4GUYtfNyY938xWOKUvjIFf2n9Rz0ZSfIhRSeukehkn0%2FArl07VCpc1Q3X3Zl32NO72R9kGDlsgTBJYaMpSS%2FayZeUV2kakmrgViPm%2F3GQWFlnSrCHY7adqKYi1fHEYx1WnPOPsMrzkqMIDm9h1ovEuDiL4Dr64Qjplm2bQ34Cdtfsrzm8zxx04fSOsx1KGE5b5xNuWti5Dz%2F3qi1IhvoHl%2BBkv8loGd5xyJKd1ZZzc1kLthY4xLth2QCuvezeJFoUdDyv5K5O%2BpD2R8cQkxxgqRBePgy%2F8mI1wb6esp1JXzqBxi8tGmO6aPnX%2FQx%2FUVq3%2BWH3XoMmvBQ1j1VbXx2sSeF5zWeB%2BZvP67zh%2FAEnGoX0dOH%2BM%2B3us%2F2LCTMyJRctVLfMMh%2BhJsfyF7%2FsmFenxLXt2GDizO9YWQwAARI9mPELjQ0SMIsGgSBywSJtwpTI%2BuPXVACsZ1AALKxoW0qsTOzk8hH4LiD7tF2dK9jqy%2B3NADRJa3FaGxe1VonbCms253Igu%2BOU%2F6xXmruwrk%2BmEmsQ6pKINIizsPbax0%2B1tDbIr0vTgBJVAiwdLYVAqvpr4h7DwZpe%2BuIxHC65JrRTcYliRc%2F7dmsxGklDXN32XEbIIgwz0yQ%2BhRvrfcMNLywcMGOqUBBs4xHnfPhJfSSVEOsVQxFtwUSPmkBudVRbrs366YqMWMcr7mwHDnV8oyvzh9FWzRO0ZHPYmk0uQicgBNFawqzZKYDktus0BJ7zPpqOWmtxzXew3jJ2xfDGFUseacxsekQnFRHfycvkW4dXtYT9PP0ue%2FdWeith%2Bya57BdYIvL%2FqSOVaPEmJu6PrzgrcvCAyamQey5VHYBolJS2S5t%2Bhq6iiUknG0&X-Amz-Signature=a6666568dc0808ccea41c19c721c824e9b809c2656d3d826407e6f2dd5abd184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIUHQE7U%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWbkOn9hQ6iaq6OP1oFZdR%2BWXN7IqmzAX0dLsQq%2BucKgIgU8sCJrt5uJ0rk69zjKrLniZnzM9N%2Fl%2FH%2BTlECyqKbDQqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQoUfFa1tm8uNzUWircA%2Fkh2tDAPvDhp9Hmd0EnRjrm2JV2L4avHiE2LGuO5fYBeIvCkNyRG8p%2F%2BmYMEXY5CzJP4oAGeD25WYF6JJ%2FUZU2352EkrLNkIDRewrJuxYD8tdJ7M7%2FEd898Fn%2BUBnEXExgKxiaN2hhLAZUPyh9CZdpGfFhAYjbjL5r%2BBJLYPLSMz%2BW5TKjku2NE%2F3JpeHEtQ747cRiodsRjK77Zpo9J0MerbuRKpkG8pS9FsapubBkAuVaa6ly1kzY2V%2BKbCLu5LzXH7rZB9mtulcmVxvNCo6O%2BMSnkxCYH4Q7GgSwOE%2B3c4TJv4hyNmk%2B%2BOLKJbbfIzi1vsKU2A5dj22yh%2F1O34Rsmn0YpOgndVvuuCK%2BjC1j88hB%2By%2BYRR26T1SL21NTypo8fVdroCHsUkMhhvN0OVmReWeK1E%2Bg%2BnB4a%2BfAKm%2BKJkDOKzrHcdc0ECe5WV%2FlzP3asu7pP%2FYrmuMq3TE1BGHDxGE6AF%2BgoRO8bIasRXVW6QffyqYaFbFHMVZOPXhgyuPYIpTa2rH695phhkIU%2BWSckAulpku3Tsxo4RnzyIkmVaqWmdgGinfVxLWqPsao1UPBLPJUp9Mqx2rtM7Xqfpc3HAsaelO3xLYodySJUsMCPDjPBf1GcJKaGG6o7MO3twcMGOqUBS1bLX1ZZ3LBW265%2B7pQ2csfelSWr0v5YpIIwAQyo13Wc%2BamQjVD4X92yv4wAA23tn9s0ZA9QEs5fS9m%2FEhaw1h6w%2BIbaSbTf3VIKZmzRv%2Fxk1RS5LpXBH07wvy%2FfQAG2CQrCFbBqRwxmxjtD4pkBZJiy7mm7hWOZRzCQVPYr5yeX6RpVDyg7ncZ7S5y9OJq%2BNz%2FWFAG2%2BDSei7VnLKECOHFoZDuC&X-Amz-Signature=c9ee9737e7ba96e12ffa72d82566e06d875f74319cb2bdbc82bc831d05e10b71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGAP2UZX%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP42htu3gdaQ3%2BCkjJLCuHgEE250uForwjke35LJkUBwIgLSfMHgVy4ZnB4FZbQcOwtLQO%2FUrZYHDCNaPuAU1LLk4qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGdP8UL%2FYE3rpE%2B3SrcA0xVQ1h1EoPsdtdIu2065WYMay%2Bcqk2KpvEkgz%2FQX%2FMNL74f2MsQ9xg1Er%2B0uxW%2B5Gyvhy6w15Kvn1KirUujaOxITAOau6DRVWXx%2FqHX89QtcxSHXAFvi3KWN1jp5n9wwWCqW9wpeKZQZt1Q6kcy%2FM1Vc9SKxSS5uuatiVvr%2FnZUBjYGAowldHouNlHji41SMToJO%2FkiCOkmz%2Bok%2Fy5jygHIKJ7zDmyOEENWTa8emH8F9Fy3D8fhoX8ZRMv0lhaktMD%2Fg0N5Oqd09RD7eG3e3QrUkz7ruyqaA4UJJ4DkT1nSkBSXnhmBrbvkwvpUJ6apLP%2F6kzaRqtDmuc1KhxhybOJ3nggo5GRKP3RQyYoBQ%2Bv%2F5r4%2BU%2BnpXqM%2Bg%2BbBfSLYko%2FGr7lY3Kj9CJTJKaxXD0esQizQ%2F12Rh5fMJLX%2BXLUSs5IbzKyuzhrbqKT1eldTEIN3rFCCm19Kfzyo61iR%2FWn8m9d1YPIN1NKaUEBjCNWtoX5JagIkR4QK3QKuzxR9RBc6oX4dXaDkGSsPDj5cgHLQr7MpBVx8JZAhW4zZvFHNckIcRd312MbAVtfWQEOLdPWVwmXzNPBeiCpICjeizqECs6fJ62zVju7TKnKGN1pB6l9SwKFFUq3dTBArMNLywcMGOqUBIjlTBF4rJOyLOd1kFupmK9s9KNqVhL9DDu7Zki0aWmhnO3FxvrWbGafK8ySMJNgmEwYkskC5radYYjyUtwxqUsxUHvt39dCj333AAudZi2G6GlHD11DDkydEQLdrYLkYpTpgbU5E5oEyPIqS4DYrZqYvSAQoAVDzEjLJhe2Z5v7N567%2BjEZHTCUDbeUFt4%2B8YnSXc1%2FGEhYGDd8jNYViqWNF4fSj&X-Amz-Signature=2187633c2e2367aa66c7ccaf614ba027aecf08646b7969d5657e9204615922b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
