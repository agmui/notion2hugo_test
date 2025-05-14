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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWANLQYD%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEkEhME7BfnwpKUbf65Sh9tsWp48Aw26VYgUN0qDu%2Fh0AiEA3JDWcbvDYXhJBTH5FqgEEbrhQ%2BOKdDkn3LZqblpWxcIq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKSWSxcUhYxZsynYQSrcA29QOY9gFub08PUn5YlQkE1bO0hkec3BDhiPwLkNauNa%2BMSUkufyetCET3%2BX3ZDpo3vd2bHCUGW7NvqyntdLHAgOZIygHrpMnfmbzHpF4AtlseAORKKbcZ%2BdY0JAhtkbRz2ARX5i%2BpRPdbeR9A0KnC8unrH8Lv568mjhEctorX9QGYDWJXrcnOmH26%2BvZRx9zCtV%2B5dJhxReHMIncRz7a2POwHhmTT%2FwAfS395ibrq2UbbS8bagyQGjEONmW5PRxyIIRhP7JC9NpkmeGBViX0DyHap4AbigoOKSB8tLx3LMFUEL%2BKx%2Bwbwx0F6Ma5%2Ft7y0tvrTX%2FU%2FEwX%2FIF54xl%2F0hmMLq3eTH4SNl9pRNNRcMPHVPBAi%2FrQzHeoiK4MEOhsgl8m3bJZcQYgWc3s7QawS%2FHuZMaeN2Kd871qh2rGgBxCLmU189iQ0VpvUfGAg6WgzXh5d9jjSyXAQZ%2FizebfsEZQuh%2BuovWpnjsu7aafVqyKy4EmTMJN3uoIO9j59YNaW75MClSqTSgis%2BOtZy97cglAEEu23yYsFyd%2F1hKCmy%2By5n28YyBcTGcxid823e3gt%2F9d7RWhlMjpZvuy7y7VSSTr%2FlzjTS6yy%2BlMgBomIvRg%2Bc5mfa5dgg7EGGoMNfPk8EGOqUBZ6JvbAWja81flgkMG0Ghd1MeBWvefDlF6ZlMqAxawBhC9aG3oM0LMnVNOvKGG0luIxAW3tCBCZrJzzKF3ZjOF%2BhKrnlMbus%2F%2BlxsiHHVyGHl9oKfNyrx8VPvWTQlPdan1NK1iyLnDdFk6Adm%2FPtae%2F5K3GJQ5t9xatDTdazdfrLF8BVoZT1mSeIekuBSww7S8SK9YsGfexT%2BOnZNdBDBXo4swKFf&X-Amz-Signature=cb468afb21ca685ec42d617f0e7b390aadc448971b892c0edfc8e6d0df65358e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWANLQYD%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEkEhME7BfnwpKUbf65Sh9tsWp48Aw26VYgUN0qDu%2Fh0AiEA3JDWcbvDYXhJBTH5FqgEEbrhQ%2BOKdDkn3LZqblpWxcIq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKSWSxcUhYxZsynYQSrcA29QOY9gFub08PUn5YlQkE1bO0hkec3BDhiPwLkNauNa%2BMSUkufyetCET3%2BX3ZDpo3vd2bHCUGW7NvqyntdLHAgOZIygHrpMnfmbzHpF4AtlseAORKKbcZ%2BdY0JAhtkbRz2ARX5i%2BpRPdbeR9A0KnC8unrH8Lv568mjhEctorX9QGYDWJXrcnOmH26%2BvZRx9zCtV%2B5dJhxReHMIncRz7a2POwHhmTT%2FwAfS395ibrq2UbbS8bagyQGjEONmW5PRxyIIRhP7JC9NpkmeGBViX0DyHap4AbigoOKSB8tLx3LMFUEL%2BKx%2Bwbwx0F6Ma5%2Ft7y0tvrTX%2FU%2FEwX%2FIF54xl%2F0hmMLq3eTH4SNl9pRNNRcMPHVPBAi%2FrQzHeoiK4MEOhsgl8m3bJZcQYgWc3s7QawS%2FHuZMaeN2Kd871qh2rGgBxCLmU189iQ0VpvUfGAg6WgzXh5d9jjSyXAQZ%2FizebfsEZQuh%2BuovWpnjsu7aafVqyKy4EmTMJN3uoIO9j59YNaW75MClSqTSgis%2BOtZy97cglAEEu23yYsFyd%2F1hKCmy%2By5n28YyBcTGcxid823e3gt%2F9d7RWhlMjpZvuy7y7VSSTr%2FlzjTS6yy%2BlMgBomIvRg%2Bc5mfa5dgg7EGGoMNfPk8EGOqUBZ6JvbAWja81flgkMG0Ghd1MeBWvefDlF6ZlMqAxawBhC9aG3oM0LMnVNOvKGG0luIxAW3tCBCZrJzzKF3ZjOF%2BhKrnlMbus%2F%2BlxsiHHVyGHl9oKfNyrx8VPvWTQlPdan1NK1iyLnDdFk6Adm%2FPtae%2F5K3GJQ5t9xatDTdazdfrLF8BVoZT1mSeIekuBSww7S8SK9YsGfexT%2BOnZNdBDBXo4swKFf&X-Amz-Signature=bade98c3a85a09c409e5f8454442238082df487af0318c8b569435c27964e9a0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWANLQYD%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEkEhME7BfnwpKUbf65Sh9tsWp48Aw26VYgUN0qDu%2Fh0AiEA3JDWcbvDYXhJBTH5FqgEEbrhQ%2BOKdDkn3LZqblpWxcIq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKSWSxcUhYxZsynYQSrcA29QOY9gFub08PUn5YlQkE1bO0hkec3BDhiPwLkNauNa%2BMSUkufyetCET3%2BX3ZDpo3vd2bHCUGW7NvqyntdLHAgOZIygHrpMnfmbzHpF4AtlseAORKKbcZ%2BdY0JAhtkbRz2ARX5i%2BpRPdbeR9A0KnC8unrH8Lv568mjhEctorX9QGYDWJXrcnOmH26%2BvZRx9zCtV%2B5dJhxReHMIncRz7a2POwHhmTT%2FwAfS395ibrq2UbbS8bagyQGjEONmW5PRxyIIRhP7JC9NpkmeGBViX0DyHap4AbigoOKSB8tLx3LMFUEL%2BKx%2Bwbwx0F6Ma5%2Ft7y0tvrTX%2FU%2FEwX%2FIF54xl%2F0hmMLq3eTH4SNl9pRNNRcMPHVPBAi%2FrQzHeoiK4MEOhsgl8m3bJZcQYgWc3s7QawS%2FHuZMaeN2Kd871qh2rGgBxCLmU189iQ0VpvUfGAg6WgzXh5d9jjSyXAQZ%2FizebfsEZQuh%2BuovWpnjsu7aafVqyKy4EmTMJN3uoIO9j59YNaW75MClSqTSgis%2BOtZy97cglAEEu23yYsFyd%2F1hKCmy%2By5n28YyBcTGcxid823e3gt%2F9d7RWhlMjpZvuy7y7VSSTr%2FlzjTS6yy%2BlMgBomIvRg%2Bc5mfa5dgg7EGGoMNfPk8EGOqUBZ6JvbAWja81flgkMG0Ghd1MeBWvefDlF6ZlMqAxawBhC9aG3oM0LMnVNOvKGG0luIxAW3tCBCZrJzzKF3ZjOF%2BhKrnlMbus%2F%2BlxsiHHVyGHl9oKfNyrx8VPvWTQlPdan1NK1iyLnDdFk6Adm%2FPtae%2F5K3GJQ5t9xatDTdazdfrLF8BVoZT1mSeIekuBSww7S8SK9YsGfexT%2BOnZNdBDBXo4swKFf&X-Amz-Signature=a2edee464405f50b1f62d9dfdfac15729184f4c3cb8bc826a0cee1d804843997&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVPY24YU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDHkfzzWjxVoFE9E8JWR6VbHo%2FeRFYV%2FEyF8RRySZSRCwIhANYRwj9EUbOTJL5s9bHMiZnV4rpkGMEPccUYDBlcAaR4Kv8DCBwQABoMNjM3NDIzMTgzODA1IgxQKiQ5Qy0QayUlMjcq3ANdPN0OqvdWmFHEYDezGdokq6Ko%2ByhuufBr777XEWLiOfO2xWyend05oAjKr9cN%2BWq5dD9P6PbekrkGaOSKcp2AjerlVcgB5CT17robCgpEgQRU%2Fj6clsxwDrTsSUQI0oYsnHnQyDQqT8rNFJHTXmmnJ%2FYzTrKvJjChQz4D6goF3ytKuhcGdtnmKn5QZgulIVfhghb99o58fw1tIu%2BFPTd2RnGxYGcW9vDx4i1omeBJUf1b98OvOvdYWp9%2B7Qd50Bhr2EFtZvFYOJVriwPEduQ%2Fp8t%2Frocx%2FYSNa43XB2DRhTY0lHsTUhanKiP%2BX3bXFdkHTAAREjn8RInJ3040GbQVFEjCRNw7TNy3erFkg5C35MAILRHqCIsVGV4RjS8mUnKJ0o6xwNjDxTRAs5ONsMdIZ%2FfuWokrWsw35KPvOQrv7AkgGyHx0JibIlf4YWBIWtB0LAgIzMOUv6wyeM6xB4%2BkpKBCcajLGizbU%2FAF8Tiw7ganohuoYldCgclQ2NIGgrGT%2FoZKzZ2muGXGgPYbDM5B1Yz3gS5afKm6df1KNGkTRlgB9dQddM%2FmxNaYxETSZ5xnE3C1y2OevvQTo4zctn9U4s3XWvCkBCkGIA293gEnAZ1514Sw0aghyxKwlTCM0JPBBjqkATveUD4ueG7viF3NWua%2BXUnZmMVHvx812jXNd4tgCIQOhK%2F3RUD8BRswmgDOw2MQmC3bu7zG3jpsST5caDRAQ2EDZRrpM7vnDAYJqrXp3bmRymUDxPzRVA8EjLQHvIIZfPg21b5ZF6KjG7XkUVYvn3o%2BpXw9AO0vWu64SQXARnsv3ECpMkYugm%2FeIJgLAWkdy9MP5ieB0WG3oKTjlfEFu7AsEpTe&X-Amz-Signature=f21b28d10f9bcd7a4929d7e8783984441139086ad43b2498044c871aaa6f465f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TEKUIE%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQD7u3SsXR79kEyO6WXklMKRJljiyxex9yM6KKlrGvAK6AIhAJXrnuiGTWAWBPAf7%2F3%2BkJhYhwqLPSEWB5jjoapIedAIKv8DCBwQABoMNjM3NDIzMTgzODA1IgxwWby10%2FwG8gVy30Qq3APrQFiSK3DxjzrZxiL%2Fnm05AiQkGtNghuWSuFdsWha8EhgmGKSLp2Qq1hXf7FMaFTjDJ6kDDIoOaopOKRj907Ngo024YDt2droqj%2FyE7ojeQl2nQR7j5bi96fq6iPKXjRxFhlbmYtZM5JuJmPLUA7K4U6WrmJ0EGwnUfKC16x5CKghALGNUBV83Z1JFuG6ch789QOTVJbyHcEGfJQLrUI2QFaaoy3b%2B6WQ%2FK0HiwCLIVFLpqCvaxyPI%2BReGoLRis0sGR%2BMnO4uqmjeHFIc9LTtghHG3ZE61jVjz5GJHgG%2BMg5Af5CaouBdfUtgdtZjkScM%2BQHjFPxwbr0gM9Mw0pOyyUOGT%2BOb9ycifT8yL5y1q7mPbEApM2gCgJHU1I7U%2F7IxWVq0IXMKBMFLS04nRhM0C7oxB4TJtsoeoAHYmpcTLx2EvQ7ws6m67ow8KJvpRojVUSiiXo6jefaupYggcJTQeSXVSwZNSjc62r3Uk2ROeRfaTMaqhoLRBzmhfOzs5klSa2%2BV9nfXEfzHzotGWm%2B16HNDiPDT5C1Dfvx4FOffxqdKE4npB%2BiBSAJI5mTAYNtdmkNHD64lxzzTodMvyQS4lZDWxaX4Dr3BzUTCYhXHghd3uvmhzqbXgZRjoATCpz5PBBjqkAaYWyhWAioqXZGv8XTmQ9phNeMPl1ooamzTYGRbm9%2FYjJuJLlSXsjNLh9IbLesysR0rcPDx%2Bbco1H%2FcxB%2FX%2F3iJt6c5%2FaKA00AGLgGFYF0NZrIdU9uJ4B0bbZukPn%2Bu4un4kb4EvcLnv5n58kMaEIcZ1zbgXDSL8G%2Bcpw0THYd59i9B7GARvRRHzobxZC5exgC56oPgzIeEHTFAjeuw%2FbYXjsz%2B0&X-Amz-Signature=1c20cc04af0c401edeb90599e4da8232bccded41a451cddf2bc33a6af390a9c5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWANLQYD%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEkEhME7BfnwpKUbf65Sh9tsWp48Aw26VYgUN0qDu%2Fh0AiEA3JDWcbvDYXhJBTH5FqgEEbrhQ%2BOKdDkn3LZqblpWxcIq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKSWSxcUhYxZsynYQSrcA29QOY9gFub08PUn5YlQkE1bO0hkec3BDhiPwLkNauNa%2BMSUkufyetCET3%2BX3ZDpo3vd2bHCUGW7NvqyntdLHAgOZIygHrpMnfmbzHpF4AtlseAORKKbcZ%2BdY0JAhtkbRz2ARX5i%2BpRPdbeR9A0KnC8unrH8Lv568mjhEctorX9QGYDWJXrcnOmH26%2BvZRx9zCtV%2B5dJhxReHMIncRz7a2POwHhmTT%2FwAfS395ibrq2UbbS8bagyQGjEONmW5PRxyIIRhP7JC9NpkmeGBViX0DyHap4AbigoOKSB8tLx3LMFUEL%2BKx%2Bwbwx0F6Ma5%2Ft7y0tvrTX%2FU%2FEwX%2FIF54xl%2F0hmMLq3eTH4SNl9pRNNRcMPHVPBAi%2FrQzHeoiK4MEOhsgl8m3bJZcQYgWc3s7QawS%2FHuZMaeN2Kd871qh2rGgBxCLmU189iQ0VpvUfGAg6WgzXh5d9jjSyXAQZ%2FizebfsEZQuh%2BuovWpnjsu7aafVqyKy4EmTMJN3uoIO9j59YNaW75MClSqTSgis%2BOtZy97cglAEEu23yYsFyd%2F1hKCmy%2By5n28YyBcTGcxid823e3gt%2F9d7RWhlMjpZvuy7y7VSSTr%2FlzjTS6yy%2BlMgBomIvRg%2Bc5mfa5dgg7EGGoMNfPk8EGOqUBZ6JvbAWja81flgkMG0Ghd1MeBWvefDlF6ZlMqAxawBhC9aG3oM0LMnVNOvKGG0luIxAW3tCBCZrJzzKF3ZjOF%2BhKrnlMbus%2F%2BlxsiHHVyGHl9oKfNyrx8VPvWTQlPdan1NK1iyLnDdFk6Adm%2FPtae%2F5K3GJQ5t9xatDTdazdfrLF8BVoZT1mSeIekuBSww7S8SK9YsGfexT%2BOnZNdBDBXo4swKFf&X-Amz-Signature=124867724a3a01c0a51281d09f07096c65f5badbd6a393f80e4da0be9a094694&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
