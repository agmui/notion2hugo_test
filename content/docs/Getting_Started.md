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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DLANT2P%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDdFp7pKcyPOj02LtGtiC4birC7zXULxIdNfbHrOyCKDAIhAL29ALfoYOPKIHnANFZxGalGPKuHWlwwHzNi58QfORuaKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FjEmgDpS71e1xMGgq3AN%2BW00SJ1F6CkadwbA0FupyixoddRvAKBwfoCTZ6tFNnmO9FHK8iVQzWCpa4gnabi%2BO%2F1ioVMJjrMm3UJe%2B0NeMHUKQGR632G79SEHcHSD%2Fo4fX%2Fj0BKx0sHqirrM1ie8NulNYUqpEtw7yvaAWKviXewKWaa6sLrs6Nmjkdzlj8kYs0YosHMClYXkCBwoTXj5hdBWL0mgDx0YUPKxzDg5HM5v5itPFfuEoNnohS0U05O8HHUzBMrZHnavmygnkVJxIi1Qw1p3MM2fi%2BfoOvLxHbhZHOmp7YVq17nzEX7x3UA0afZ%2BewBgS4KMyRh4O2DyaYXdSoobkoig10OpCEmcWnWmfWfZtfvnNOXbaNKuaConYLsGrxtRk8GbJXY2v29jx4ZXqQUFPt2DdFknPLJhoOJVw2nOHVpzGWuQ5QZ4win7Bgdcwe8VRozf6fPWdu6FgIRSb%2FmeUGuAzls8LG18YIXd4zP0rIFc8IeHhcynFXMwHdeDbV7Q8EWrd7ALp8b%2FjRy%2FFC7TOLPlLZ8JvheZHteIUgqNIXhtBIMM%2BX%2F8YPXOV1g%2BrxCNzoNFYEn6%2BtkdkxyUgnvilJES9GGU15R20KbYUT%2FaEuzhnATBr7hYO5xfoBHLC9r2EWCLPy8zCg6u%2FBBjqkAVe210umaynR6Uh%2FzG%2FNaF%2F9TMTEha2JSl4o0O%2F4oXTA5o3XfimvrIq%2B8VQhYsnNABAqp7lrvuDqhyGvXbCnXZgOtqg9V8zosuV9MCTGYmHFK6P7adjk5WvFm1JAALauH1LBbwMaYb4AsZSTXj30RiQ4mfHsrMyoDIC6PliXv6XqOFw1dy0crVzOUvPNXmAaeMD%2FQhTO7CF5ETIFWUSCDLNxLV5k&X-Amz-Signature=3dfdc5de349f1e3a6bfacaa8ef2f5a1bbccec450cfba43f46fdfc0423000bc09&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DLANT2P%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDdFp7pKcyPOj02LtGtiC4birC7zXULxIdNfbHrOyCKDAIhAL29ALfoYOPKIHnANFZxGalGPKuHWlwwHzNi58QfORuaKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FjEmgDpS71e1xMGgq3AN%2BW00SJ1F6CkadwbA0FupyixoddRvAKBwfoCTZ6tFNnmO9FHK8iVQzWCpa4gnabi%2BO%2F1ioVMJjrMm3UJe%2B0NeMHUKQGR632G79SEHcHSD%2Fo4fX%2Fj0BKx0sHqirrM1ie8NulNYUqpEtw7yvaAWKviXewKWaa6sLrs6Nmjkdzlj8kYs0YosHMClYXkCBwoTXj5hdBWL0mgDx0YUPKxzDg5HM5v5itPFfuEoNnohS0U05O8HHUzBMrZHnavmygnkVJxIi1Qw1p3MM2fi%2BfoOvLxHbhZHOmp7YVq17nzEX7x3UA0afZ%2BewBgS4KMyRh4O2DyaYXdSoobkoig10OpCEmcWnWmfWfZtfvnNOXbaNKuaConYLsGrxtRk8GbJXY2v29jx4ZXqQUFPt2DdFknPLJhoOJVw2nOHVpzGWuQ5QZ4win7Bgdcwe8VRozf6fPWdu6FgIRSb%2FmeUGuAzls8LG18YIXd4zP0rIFc8IeHhcynFXMwHdeDbV7Q8EWrd7ALp8b%2FjRy%2FFC7TOLPlLZ8JvheZHteIUgqNIXhtBIMM%2BX%2F8YPXOV1g%2BrxCNzoNFYEn6%2BtkdkxyUgnvilJES9GGU15R20KbYUT%2FaEuzhnATBr7hYO5xfoBHLC9r2EWCLPy8zCg6u%2FBBjqkAVe210umaynR6Uh%2FzG%2FNaF%2F9TMTEha2JSl4o0O%2F4oXTA5o3XfimvrIq%2B8VQhYsnNABAqp7lrvuDqhyGvXbCnXZgOtqg9V8zosuV9MCTGYmHFK6P7adjk5WvFm1JAALauH1LBbwMaYb4AsZSTXj30RiQ4mfHsrMyoDIC6PliXv6XqOFw1dy0crVzOUvPNXmAaeMD%2FQhTO7CF5ETIFWUSCDLNxLV5k&X-Amz-Signature=31715551fba50a844708ab9bc34490937ea59d9ceef4172f694bf1bcca6217a4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DLANT2P%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDdFp7pKcyPOj02LtGtiC4birC7zXULxIdNfbHrOyCKDAIhAL29ALfoYOPKIHnANFZxGalGPKuHWlwwHzNi58QfORuaKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FjEmgDpS71e1xMGgq3AN%2BW00SJ1F6CkadwbA0FupyixoddRvAKBwfoCTZ6tFNnmO9FHK8iVQzWCpa4gnabi%2BO%2F1ioVMJjrMm3UJe%2B0NeMHUKQGR632G79SEHcHSD%2Fo4fX%2Fj0BKx0sHqirrM1ie8NulNYUqpEtw7yvaAWKviXewKWaa6sLrs6Nmjkdzlj8kYs0YosHMClYXkCBwoTXj5hdBWL0mgDx0YUPKxzDg5HM5v5itPFfuEoNnohS0U05O8HHUzBMrZHnavmygnkVJxIi1Qw1p3MM2fi%2BfoOvLxHbhZHOmp7YVq17nzEX7x3UA0afZ%2BewBgS4KMyRh4O2DyaYXdSoobkoig10OpCEmcWnWmfWfZtfvnNOXbaNKuaConYLsGrxtRk8GbJXY2v29jx4ZXqQUFPt2DdFknPLJhoOJVw2nOHVpzGWuQ5QZ4win7Bgdcwe8VRozf6fPWdu6FgIRSb%2FmeUGuAzls8LG18YIXd4zP0rIFc8IeHhcynFXMwHdeDbV7Q8EWrd7ALp8b%2FjRy%2FFC7TOLPlLZ8JvheZHteIUgqNIXhtBIMM%2BX%2F8YPXOV1g%2BrxCNzoNFYEn6%2BtkdkxyUgnvilJES9GGU15R20KbYUT%2FaEuzhnATBr7hYO5xfoBHLC9r2EWCLPy8zCg6u%2FBBjqkAVe210umaynR6Uh%2FzG%2FNaF%2F9TMTEha2JSl4o0O%2F4oXTA5o3XfimvrIq%2B8VQhYsnNABAqp7lrvuDqhyGvXbCnXZgOtqg9V8zosuV9MCTGYmHFK6P7adjk5WvFm1JAALauH1LBbwMaYb4AsZSTXj30RiQ4mfHsrMyoDIC6PliXv6XqOFw1dy0crVzOUvPNXmAaeMD%2FQhTO7CF5ETIFWUSCDLNxLV5k&X-Amz-Signature=41179e50e8929e5be1e08bd839b6e3591286fae4d43171bc87b2147f8bbc6669&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R72W675F%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCoZtTfJ4707LY%2B3F3QTvi9A9K71CqB9Q4CXNVbR%2B2AegIhAJ1ymbkYPLkQgd0tD4Wgr7KP1sXVisjc5Aso4iNw9xcVKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5CtXdRhsHhs8AMcUq3APn6ceNZZAhEkXjnQQvPLCQC1I0j7UA2%2BbSmE2FHwGYZD2uRuAAzhV23td9kVp53sbvLVFaDPhl6PxF94G7KIa8mgTORyt%2BUiUBoa3e8qfjpRpLq%2F43UiWK3qd1Ri3rEwex3VupDBKSSWcqm077bdr5Ma49ut%2FRjIdL3dJAdzBLxl7p83xd2xKpTCJzwN9BSUF%2FjlR3PrjOmY%2BguQZufTPJ7bCqvJR6PKWfz%2FE965BLI7Fwi%2BL9ViLEJjZf9t1n1drF%2BYitWh2NFcy0ZoV0e3sPRpF8QGXwLwvo7JhzwmAI8PLHYVqEQYysrIdXQGsxLguN5YVDW757%2BVusuJZaJ2wpgwbm7%2FaWsxDwGdgX46NTiRkSI55LkjwPSxIjwsfN%2FzAI2EHOfMyGLi1xcvoutsRstNgHYyNgbIcCojsavJDzPyiGDu4zxWtztvAoafjVC1iUfyL1HS%2B78vStBmW%2FkzFBRzjYiFYZailz1Jgo3jGrBK7WEgwLuKSyup2gnrU8bVPWD3qvP1%2FVy22RMQEdNW3BXTpDLCMu9siKpceCWhfnfGH7trmwhcwGhny0pD5RhtowDdZmce75WWsMZ%2B9wYUfOfa0VYfEAW6VWyB1oIrndDGzdpP5VJlrPHHxGWTDLjvDBBjqkAeV9if0CiG87wgaSTJw%2FxZQ1RuGZQazj2ZtWHDEpKWQLEGoVESYFtVabJw%2FovWOOre8LSpVewUQx6QhwkgdV%2FfyHMeRWPgDNWQEFTsOVhtMLXFh5f9oIvpEQi17Rng2Hgk6EWnS7ffzj1kUqwzK8ko8RAABGFAD%2BZnegNki4dJGTBYnIuoeSLBoVr4RYEjYumY79yYD5jv8tvNypsuBeVHn8GGQ0&X-Amz-Signature=605073bf6ce8b7995521a12c06e20bf5110c10f191cf438bd546200679d6aa95&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSBJ3ICY%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIBGMBshFGlEUKsMvENwJSkNaYUpTf68ENpDLWfMN257ZAiEAubdC4GJ3gbjo5O9ZapML8vbVbtW2Oo2lqYpQp8DH2hgqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZPomkc09tLsLMoOyrcA59Xd99lEc6QKIAtfdwNlFPfIGcIcBcWviSobviyzEMOA1k7FeIBREvR%2FOAKGtRae8HwjaeGss2N5wTtRJiRCgmWtM86o%2B8IilMBdgHws6S%2F%2FB8nwUI7osa%2FTF6Qw4sBWrzVlbKAt6e6OunCq6AjC%2F9SBtg%2BPtJimUOOzuGalmGoULGzf6s8MzIhXVs46LdDOqUy3yppilrirYt78%2FV8axp4e%2B4QkgBfRPL08mRTGHHjyzg37BCY9tSwkmmN9kN1zhuVtcT7AFBvJZ0OfK9M4wBIOQ8p83iCbAlX6f7DuhDWgBoKdsKntJTRgSKs%2FW0Pfq%2BUc%2BULYkmn26NQUf87wB1wcj%2B5E5tOxHVwuKczSI7UsHIueI3Hpw8Sh8DjP5GTJt2bZ6lGMwjvPfygze2i2ngmFJugtwxFjMyGsZVdu8Pz0SotTWaa8hVd6Of3fBvoqgwgXNPhEQ%2B5ee1CJq%2FRIksE6DKbK5gdjWECbduomGyfs1O3izo58IgmpRqzt9Xt89GdxI0bvwDKhHxMZp89z6SLxh4XEikbgPC6g9nKCgmRlzBy%2Fwt35oBt%2BFUYyrTIlegVZ3Wx9WIJqQ65hzEmZOTEVGywi560Mbr3pQpvmTlvOAYYz42M46BYJSBZMOSJ8MEGOqUB8T3TQ6ejY%2B6GYOa%2B%2BQmTw7uN1LZCGomiFgAMtiJOmcB1ceuDVW%2BRXZbpl389liKTO8MgBwWsACYjzif8ipl4%2BcvK%2BzUzCTUnlQr7hezlPiOj3jUBQ%2ByI2ckvWJY7C0zO997cq4UKbP7x2iho3qYSUhtBtjTzMJvn6Rqohsu8UEmdT8KN55%2B0Or3aknFiYBNaCfw%2FVzSHbN5k1XAbMN6loamKhhp5&X-Amz-Signature=67cf7b2319ae46fabaf9d5ab980a8630b8bba4c9399a0f392370ccaf243dfc17&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DLANT2P%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDdFp7pKcyPOj02LtGtiC4birC7zXULxIdNfbHrOyCKDAIhAL29ALfoYOPKIHnANFZxGalGPKuHWlwwHzNi58QfORuaKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FjEmgDpS71e1xMGgq3AN%2BW00SJ1F6CkadwbA0FupyixoddRvAKBwfoCTZ6tFNnmO9FHK8iVQzWCpa4gnabi%2BO%2F1ioVMJjrMm3UJe%2B0NeMHUKQGR632G79SEHcHSD%2Fo4fX%2Fj0BKx0sHqirrM1ie8NulNYUqpEtw7yvaAWKviXewKWaa6sLrs6Nmjkdzlj8kYs0YosHMClYXkCBwoTXj5hdBWL0mgDx0YUPKxzDg5HM5v5itPFfuEoNnohS0U05O8HHUzBMrZHnavmygnkVJxIi1Qw1p3MM2fi%2BfoOvLxHbhZHOmp7YVq17nzEX7x3UA0afZ%2BewBgS4KMyRh4O2DyaYXdSoobkoig10OpCEmcWnWmfWfZtfvnNOXbaNKuaConYLsGrxtRk8GbJXY2v29jx4ZXqQUFPt2DdFknPLJhoOJVw2nOHVpzGWuQ5QZ4win7Bgdcwe8VRozf6fPWdu6FgIRSb%2FmeUGuAzls8LG18YIXd4zP0rIFc8IeHhcynFXMwHdeDbV7Q8EWrd7ALp8b%2FjRy%2FFC7TOLPlLZ8JvheZHteIUgqNIXhtBIMM%2BX%2F8YPXOV1g%2BrxCNzoNFYEn6%2BtkdkxyUgnvilJES9GGU15R20KbYUT%2FaEuzhnATBr7hYO5xfoBHLC9r2EWCLPy8zCg6u%2FBBjqkAVe210umaynR6Uh%2FzG%2FNaF%2F9TMTEha2JSl4o0O%2F4oXTA5o3XfimvrIq%2B8VQhYsnNABAqp7lrvuDqhyGvXbCnXZgOtqg9V8zosuV9MCTGYmHFK6P7adjk5WvFm1JAALauH1LBbwMaYb4AsZSTXj30RiQ4mfHsrMyoDIC6PliXv6XqOFw1dy0crVzOUvPNXmAaeMD%2FQhTO7CF5ETIFWUSCDLNxLV5k&X-Amz-Signature=a4e4c9b1cae84c141c14ab3aa0b1bd4868c970c1068d8dad36cea5bcc4897f10&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
