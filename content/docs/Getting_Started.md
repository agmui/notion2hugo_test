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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KLECBEL%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIH2Nf4oVQnMBVWyEn29tU6b0EIZqzrOv1nJAr%2Ft7CG9bAiEAlYzqSvCyo2j6iocJf4YFgTcX2q2GqH%2FhaNIXfGyFdvkqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGehSwUmid4bGTphfyrcAyZxC9DKstGP9E1o2uIqvAlSQYYIQ9LTgWefwZoGh2Lmuu%2FWN%2FBNu7WS8Kc6pt2Mx41hCwifdc1gUBbk5isPQlZgZqytgdM%2F5d7vyAwJnATWKBgHgk4QKUi9%2B9B4m%2BkdqM69Eudd%2BUXVQMPfFjTq9gQF3SZGS%2FqbD10MVW0hAVHh6wp3fFUJzGm55ZiSnu9XCml6kQZGP8nvkwHsLHf5ZzdSyUmX88NOrKdljWumTBZCtWSy3npgt1M3wKkA22s9PE07FTenXGyZXpPGvj0qITNr2wxw2J2impFHnyZNB4CbsPbYam4fw5zOymarrTO5RN3pdDsKzpDZHtfEthhBjLkaaPwwzQwHAuxN5rNWwj3o94heRhzH5DHPLHMR3HUU%2FLraB5VI6xdbYZEGHV8RUCjyVGd9%2FAQg6BX5ZW7CCR0T4760SL0tR6i6YGQwoLmD7QzR%2BXbwa%2BfIwOo8rePRbGH1idgRSQ4sALH2we7cbEQQKu0jnU5v170wlT4qiYcjB9wmc68iSL%2F%2B1iLhh4VRbp4Mg9mEYRZ0m8N%2BHoainqECvYB01T9nITB31TTeQxFVcxI1kaAjvdREO7Dwl8DUWG%2FVLe2Q8QOc4ScBRoqnYGeDY6rSTgkEAZIyHyDPMP6o0sAGOqUB398W97vxE0nRxS0is1gq5wCBfWP77ZvU5MgmK56yxi9qkIHXIX7Bvag9IUsDj5v8e4ptAQkM8JKWBgpJmxBoFP9lOb%2FomP7OVUWgniT4%2BYmvidB1y4CKHgAC10a%2Bu9K7M2KNbb%2Fb7V%2FALLDvg5WDxIa4ixhImzFZ%2FGbklnRbjhp5nkeDlVf7RMtJri28gzkI2w8dCePDsmtM4V8vFcYdFGwP%2F9ex&X-Amz-Signature=5b10de821d49df2311398d069090dffdd2099d5119b1cd0a6ea43798a2d525c8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KLECBEL%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIH2Nf4oVQnMBVWyEn29tU6b0EIZqzrOv1nJAr%2Ft7CG9bAiEAlYzqSvCyo2j6iocJf4YFgTcX2q2GqH%2FhaNIXfGyFdvkqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGehSwUmid4bGTphfyrcAyZxC9DKstGP9E1o2uIqvAlSQYYIQ9LTgWefwZoGh2Lmuu%2FWN%2FBNu7WS8Kc6pt2Mx41hCwifdc1gUBbk5isPQlZgZqytgdM%2F5d7vyAwJnATWKBgHgk4QKUi9%2B9B4m%2BkdqM69Eudd%2BUXVQMPfFjTq9gQF3SZGS%2FqbD10MVW0hAVHh6wp3fFUJzGm55ZiSnu9XCml6kQZGP8nvkwHsLHf5ZzdSyUmX88NOrKdljWumTBZCtWSy3npgt1M3wKkA22s9PE07FTenXGyZXpPGvj0qITNr2wxw2J2impFHnyZNB4CbsPbYam4fw5zOymarrTO5RN3pdDsKzpDZHtfEthhBjLkaaPwwzQwHAuxN5rNWwj3o94heRhzH5DHPLHMR3HUU%2FLraB5VI6xdbYZEGHV8RUCjyVGd9%2FAQg6BX5ZW7CCR0T4760SL0tR6i6YGQwoLmD7QzR%2BXbwa%2BfIwOo8rePRbGH1idgRSQ4sALH2we7cbEQQKu0jnU5v170wlT4qiYcjB9wmc68iSL%2F%2B1iLhh4VRbp4Mg9mEYRZ0m8N%2BHoainqECvYB01T9nITB31TTeQxFVcxI1kaAjvdREO7Dwl8DUWG%2FVLe2Q8QOc4ScBRoqnYGeDY6rSTgkEAZIyHyDPMP6o0sAGOqUB398W97vxE0nRxS0is1gq5wCBfWP77ZvU5MgmK56yxi9qkIHXIX7Bvag9IUsDj5v8e4ptAQkM8JKWBgpJmxBoFP9lOb%2FomP7OVUWgniT4%2BYmvidB1y4CKHgAC10a%2Bu9K7M2KNbb%2Fb7V%2FALLDvg5WDxIa4ixhImzFZ%2FGbklnRbjhp5nkeDlVf7RMtJri28gzkI2w8dCePDsmtM4V8vFcYdFGwP%2F9ex&X-Amz-Signature=f1b383b661921c466e23eb573c0a0814a9fc9b1a05286c775d61ceb583a93758&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KLECBEL%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIH2Nf4oVQnMBVWyEn29tU6b0EIZqzrOv1nJAr%2Ft7CG9bAiEAlYzqSvCyo2j6iocJf4YFgTcX2q2GqH%2FhaNIXfGyFdvkqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGehSwUmid4bGTphfyrcAyZxC9DKstGP9E1o2uIqvAlSQYYIQ9LTgWefwZoGh2Lmuu%2FWN%2FBNu7WS8Kc6pt2Mx41hCwifdc1gUBbk5isPQlZgZqytgdM%2F5d7vyAwJnATWKBgHgk4QKUi9%2B9B4m%2BkdqM69Eudd%2BUXVQMPfFjTq9gQF3SZGS%2FqbD10MVW0hAVHh6wp3fFUJzGm55ZiSnu9XCml6kQZGP8nvkwHsLHf5ZzdSyUmX88NOrKdljWumTBZCtWSy3npgt1M3wKkA22s9PE07FTenXGyZXpPGvj0qITNr2wxw2J2impFHnyZNB4CbsPbYam4fw5zOymarrTO5RN3pdDsKzpDZHtfEthhBjLkaaPwwzQwHAuxN5rNWwj3o94heRhzH5DHPLHMR3HUU%2FLraB5VI6xdbYZEGHV8RUCjyVGd9%2FAQg6BX5ZW7CCR0T4760SL0tR6i6YGQwoLmD7QzR%2BXbwa%2BfIwOo8rePRbGH1idgRSQ4sALH2we7cbEQQKu0jnU5v170wlT4qiYcjB9wmc68iSL%2F%2B1iLhh4VRbp4Mg9mEYRZ0m8N%2BHoainqECvYB01T9nITB31TTeQxFVcxI1kaAjvdREO7Dwl8DUWG%2FVLe2Q8QOc4ScBRoqnYGeDY6rSTgkEAZIyHyDPMP6o0sAGOqUB398W97vxE0nRxS0is1gq5wCBfWP77ZvU5MgmK56yxi9qkIHXIX7Bvag9IUsDj5v8e4ptAQkM8JKWBgpJmxBoFP9lOb%2FomP7OVUWgniT4%2BYmvidB1y4CKHgAC10a%2Bu9K7M2KNbb%2Fb7V%2FALLDvg5WDxIa4ixhImzFZ%2FGbklnRbjhp5nkeDlVf7RMtJri28gzkI2w8dCePDsmtM4V8vFcYdFGwP%2F9ex&X-Amz-Signature=18e7bef5011dcca2643f13ff1872cd08ba699a2addad711e4db9c66576f77131&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL4KG3CT%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCY5kfuzGw4OL8EGgkB0z%2F%2Beue42oSSLtsmXaldJJH5ggIhALgVmj8qLbrdHDcDjdk0MFd72HOt56oZLM2gSSctTIfbKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmMrj58%2F8a7r1oFSYq3AMFCSurPe2fZCUKMsaKwztg3GKAfk4Kau9X%2BLFIhcXdakGTavsRaRc3EV0E7d1Oexmw3g5vShChQdM4%2Bvczs%2B8BGuD3l6oltakvj7l3Ng8i%2BJ0JqcnqIQaNth7uULtYT%2FSFOQkkCN3TGFl%2FHqrI65ulEid6iwUV4LfaCptzCPNZ%2FTlanpjTSZuJxAuJm%2FT%2BIsyB%2Bkb%2FFCuCilWE9%2FGLfzaHMitLDlFiAZTmQDr047wFtKun%2FRCRUkvzyMB0%2FC9QkqsNAc2ipEDc0frhrepNrMZ%2BhMIohTmJD911MOYPM%2FGQDm40F80up9uhK2lWsOHHHGtqBaWHSp0YKOLC660uO8T4SnGQ%2BFKCkZOBCwrxb7z%2BLySljKHKy%2BtT%2FoUmcFOgi6hJwnKwAlN8K2ldC%2BF5roez4fsIzxkrfOn7OZ8aBVQsoeWqWqOVuj%2BJcfqGJhU9ML05LKtIDR4t9wu%2BRtTAMCUBnl1rigCwDwOrWoSNHCeO65EL6fH19hv3%2BIvYt8Wqmr10vXYEGGZj0RfwcmN6S6C25TiGrX%2BR%2F3v6GQQMFhZJd5X2gfUMD73ZGqVy1gt%2BrrYgH4EukiYvOcb2oP04lRn0tRriPtJ90M5heF%2BsgknvBqS8KyUG7N9p%2Bd9JrTD%2BqNLABjqkAeTqLvuURBWMpcnlQkOexVWQ8%2Bes8b%2F%2Fb335PAxT%2B%2BsKGcTV6oLbgWj5vJVrRHeiO2OT3UuwUoRkvl2ST3FOA6sBHW2EEolnyi0AWcRL1Kt5V3AGI43PqDMkFXh%2B%2Bye2XpzBQQe%2BGcfzam6I%2FJDDtGtSBXu8cwWY%2FfmWTOHelHIabUsNBr%2BU%2Bia7Yt4k0ZM7J4YE6l%2BXy4YcnQYRdSxHJMccNubJ&X-Amz-Signature=012ccb27baeae83a94292c405562210f79cdb65b7f45d7d3fcaa6091f4226434&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TZUHWHX%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCID6Cr%2BRmm8z4oqrPvqhPwUcBPae%2Fdil1ZgDBhuJv5T00AiEArax8ZXTfEdoz%2FP3gGTN9ecyNEe%2BqRJY1kpIzHDQUWVYqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbxSE9Z%2F%2FaWUPfMGSrcA0Exlke1HOuEulITxGxf2wu3U5eEqpwMaj%2BJ5h52ltQycjutnKuz7TAWVFlHly6iqvga3KEaBiBfeI%2B2n3j1Yg90N6bSQ73k70dFFSsFCH7FYq%2BlwQ5eF6gDyq4rMtsnAcLRW2thgHqDZGiFig6VcBP7iBYCu4Bno2wsVnY58LlZDAQItq9tu2j%2F6b5u8UVjisM%2FOxyXPy3G8ZZ%2FAfxDYGpd%2FEKdUpS5eliPc7rL%2FPdzHkgnqp3pSOHIXsvPUL5wFp3oLL4sY0J%2B6dQ55Z4WcF9ENGmBk0eQFtiIzrCxTZZB6ecF%2BDeZ6laWwzKc8zbBefR%2BXHiSDgh1R9JurPazZ7XuoLhdMzQBleFAFyXFht7wNXm344qQpEPaowhNKe7lL%2B7N0P1D0Z75fXhPEC%2BWa0Hwi6BOyiaxhXzegQJWdRc%2FWlT3mCNVeQG5ODTXtqm3KNmkReRc4%2BmFzs8D0yZ%2B6jjf6yREwo2QE0sxF96yNYnkEwel%2F474XAT5iMFZ5H5P7dAm2iYl%2F0XVEQjRx6ub729Umz8fnzu%2BDmIe0yK2kDOLi2rVC8ZH%2FOlK2gb1WEhE4crsCeDPXWl7yXytbUupFfEbQhq1epToSvylJuMxhHYU2eUoNBWenQmOd9KjMJqp0sAGOqUB1%2Fx71jz9g%2FYmU8LkGdSyk2OaIORq3x0323436c9QYHbBnH5F61%2B0co2T1GGx4u5aKjbHlH%2FYnI55%2F7Z1eNZ%2FN3NyNgWqfUUIxEW7sB7F%2Bc07K%2Fe5JudbgJegPECdmOV%2F%2F2YAWD%2B9oUlDzqBQXlqYh2drq7iHNUzc3sj3NTpJ8tSkVYN6ihISg7n4nsfHx2f2S0SVGwTlsjDXihlEi7E6m5ttY%2Fym&X-Amz-Signature=b23e9ad840002516128c21b9235bfc1afcaf8f50d93515dc70fc2b51958cb76f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KLECBEL%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIH2Nf4oVQnMBVWyEn29tU6b0EIZqzrOv1nJAr%2Ft7CG9bAiEAlYzqSvCyo2j6iocJf4YFgTcX2q2GqH%2FhaNIXfGyFdvkqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGehSwUmid4bGTphfyrcAyZxC9DKstGP9E1o2uIqvAlSQYYIQ9LTgWefwZoGh2Lmuu%2FWN%2FBNu7WS8Kc6pt2Mx41hCwifdc1gUBbk5isPQlZgZqytgdM%2F5d7vyAwJnATWKBgHgk4QKUi9%2B9B4m%2BkdqM69Eudd%2BUXVQMPfFjTq9gQF3SZGS%2FqbD10MVW0hAVHh6wp3fFUJzGm55ZiSnu9XCml6kQZGP8nvkwHsLHf5ZzdSyUmX88NOrKdljWumTBZCtWSy3npgt1M3wKkA22s9PE07FTenXGyZXpPGvj0qITNr2wxw2J2impFHnyZNB4CbsPbYam4fw5zOymarrTO5RN3pdDsKzpDZHtfEthhBjLkaaPwwzQwHAuxN5rNWwj3o94heRhzH5DHPLHMR3HUU%2FLraB5VI6xdbYZEGHV8RUCjyVGd9%2FAQg6BX5ZW7CCR0T4760SL0tR6i6YGQwoLmD7QzR%2BXbwa%2BfIwOo8rePRbGH1idgRSQ4sALH2we7cbEQQKu0jnU5v170wlT4qiYcjB9wmc68iSL%2F%2B1iLhh4VRbp4Mg9mEYRZ0m8N%2BHoainqECvYB01T9nITB31TTeQxFVcxI1kaAjvdREO7Dwl8DUWG%2FVLe2Q8QOc4ScBRoqnYGeDY6rSTgkEAZIyHyDPMP6o0sAGOqUB398W97vxE0nRxS0is1gq5wCBfWP77ZvU5MgmK56yxi9qkIHXIX7Bvag9IUsDj5v8e4ptAQkM8JKWBgpJmxBoFP9lOb%2FomP7OVUWgniT4%2BYmvidB1y4CKHgAC10a%2Bu9K7M2KNbb%2Fb7V%2FALLDvg5WDxIa4ixhImzFZ%2FGbklnRbjhp5nkeDlVf7RMtJri28gzkI2w8dCePDsmtM4V8vFcYdFGwP%2F9ex&X-Amz-Signature=69aeb757404ff82dfded645fb027714a5b8f7474cf661bf8d368907883ccff7c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
