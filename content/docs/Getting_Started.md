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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7QZ3HM5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk9g3hotysuXG5sIKtt2ceVc%2B85OLfuG4ThNh1VsJtugIgYUtCwf1iwUzVTTaNuktRzV6TyYL5%2FzrsLUIIjxiOB1wqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOdeMCj%2BqAcA1W55ircA0bFSTrztoYa4xc13JVa5dnqjr2HAkESxHpXmGog%2Bn3PgvCUDtezxY2F66B2nFAp6mSksHGyI1wTLAn14%2FDzyachjiSzXkI1Mi8LRUiD1QnIVra05YM1AUZ3Jv19lUQfk08lCPIoKlAnMfdbFNc%2Faq2QjdDzfUo7gMUweHyuBJhSgcVkue5teY0uII0L5%2BYWO%2BIZxd8wO0D1jZjM0eF2%2FwA1V6CD5wOaaQTezmkbxVCuM11wU49UbcvAPzSgnjVBBJteciBz3aNGP8RGQ%2B1u5xdsGSmB9HU9ptC9qcswb7YL1EpzMExU1ecHmL5oAOpBrf3%2B7XQpXKLrwIBh7mYL4Bo9ZLQ8mvUL0nz%2F0%2Fc%2FC0XVb78W1TgLDwEE%2BUDK1Z7OixcxsdoNyRt5pfCuEH%2B3fC1%2Fq7DuVz5t4wDj1EBXXvHsfqimZ4pm11lisYVTQiyEQyTRgcqbSUAAPJBr3AETsj9WkXdpqWVzz8pRGronR7133BQUM%2F%2BbaPNBabj6QWW%2Bv8lkwrSIeplMxb5iyparcWHvwu3kU1Vmy%2BV1lt5K2bUy47v0V0ytrORzR34yhwLORR94bpB4UH4nWoUlUiP51094aQrMRMtf%2F8k%2BraM%2FSaL3ypfUhoJjSargBqp2MMCKpcQGOqUBk%2BuCVJVou99Du9LR2gD4iy8uS5dE%2BwIkPoxxrRicREiSGGwcdjpIdEGAJZKYxnBFjQ3ezepCZGDyQa09n5bnau9Gc6D4YbO7gXuHv9z2%2FCw8xSZbAD%2BofDMczZs4GRhFbQcRpdtPtaxMXk4NzKa5glNocc%2B9igS%2Blc0OXjrGLXJDgAi6dTxb2caicsSbt2HgFHRByTqLa25mZFNOcc8kYnWNKDbV&X-Amz-Signature=9e573268ade97dfbbe5571beefb1ac100b8e174812f2071f2d10952bde569958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7QZ3HM5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk9g3hotysuXG5sIKtt2ceVc%2B85OLfuG4ThNh1VsJtugIgYUtCwf1iwUzVTTaNuktRzV6TyYL5%2FzrsLUIIjxiOB1wqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOdeMCj%2BqAcA1W55ircA0bFSTrztoYa4xc13JVa5dnqjr2HAkESxHpXmGog%2Bn3PgvCUDtezxY2F66B2nFAp6mSksHGyI1wTLAn14%2FDzyachjiSzXkI1Mi8LRUiD1QnIVra05YM1AUZ3Jv19lUQfk08lCPIoKlAnMfdbFNc%2Faq2QjdDzfUo7gMUweHyuBJhSgcVkue5teY0uII0L5%2BYWO%2BIZxd8wO0D1jZjM0eF2%2FwA1V6CD5wOaaQTezmkbxVCuM11wU49UbcvAPzSgnjVBBJteciBz3aNGP8RGQ%2B1u5xdsGSmB9HU9ptC9qcswb7YL1EpzMExU1ecHmL5oAOpBrf3%2B7XQpXKLrwIBh7mYL4Bo9ZLQ8mvUL0nz%2F0%2Fc%2FC0XVb78W1TgLDwEE%2BUDK1Z7OixcxsdoNyRt5pfCuEH%2B3fC1%2Fq7DuVz5t4wDj1EBXXvHsfqimZ4pm11lisYVTQiyEQyTRgcqbSUAAPJBr3AETsj9WkXdpqWVzz8pRGronR7133BQUM%2F%2BbaPNBabj6QWW%2Bv8lkwrSIeplMxb5iyparcWHvwu3kU1Vmy%2BV1lt5K2bUy47v0V0ytrORzR34yhwLORR94bpB4UH4nWoUlUiP51094aQrMRMtf%2F8k%2BraM%2FSaL3ypfUhoJjSargBqp2MMCKpcQGOqUBk%2BuCVJVou99Du9LR2gD4iy8uS5dE%2BwIkPoxxrRicREiSGGwcdjpIdEGAJZKYxnBFjQ3ezepCZGDyQa09n5bnau9Gc6D4YbO7gXuHv9z2%2FCw8xSZbAD%2BofDMczZs4GRhFbQcRpdtPtaxMXk4NzKa5glNocc%2B9igS%2Blc0OXjrGLXJDgAi6dTxb2caicsSbt2HgFHRByTqLa25mZFNOcc8kYnWNKDbV&X-Amz-Signature=7918a219270a6c1923b488785d20a596cd18768b334f84e3a74cf0141441ab22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7QZ3HM5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk9g3hotysuXG5sIKtt2ceVc%2B85OLfuG4ThNh1VsJtugIgYUtCwf1iwUzVTTaNuktRzV6TyYL5%2FzrsLUIIjxiOB1wqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOdeMCj%2BqAcA1W55ircA0bFSTrztoYa4xc13JVa5dnqjr2HAkESxHpXmGog%2Bn3PgvCUDtezxY2F66B2nFAp6mSksHGyI1wTLAn14%2FDzyachjiSzXkI1Mi8LRUiD1QnIVra05YM1AUZ3Jv19lUQfk08lCPIoKlAnMfdbFNc%2Faq2QjdDzfUo7gMUweHyuBJhSgcVkue5teY0uII0L5%2BYWO%2BIZxd8wO0D1jZjM0eF2%2FwA1V6CD5wOaaQTezmkbxVCuM11wU49UbcvAPzSgnjVBBJteciBz3aNGP8RGQ%2B1u5xdsGSmB9HU9ptC9qcswb7YL1EpzMExU1ecHmL5oAOpBrf3%2B7XQpXKLrwIBh7mYL4Bo9ZLQ8mvUL0nz%2F0%2Fc%2FC0XVb78W1TgLDwEE%2BUDK1Z7OixcxsdoNyRt5pfCuEH%2B3fC1%2Fq7DuVz5t4wDj1EBXXvHsfqimZ4pm11lisYVTQiyEQyTRgcqbSUAAPJBr3AETsj9WkXdpqWVzz8pRGronR7133BQUM%2F%2BbaPNBabj6QWW%2Bv8lkwrSIeplMxb5iyparcWHvwu3kU1Vmy%2BV1lt5K2bUy47v0V0ytrORzR34yhwLORR94bpB4UH4nWoUlUiP51094aQrMRMtf%2F8k%2BraM%2FSaL3ypfUhoJjSargBqp2MMCKpcQGOqUBk%2BuCVJVou99Du9LR2gD4iy8uS5dE%2BwIkPoxxrRicREiSGGwcdjpIdEGAJZKYxnBFjQ3ezepCZGDyQa09n5bnau9Gc6D4YbO7gXuHv9z2%2FCw8xSZbAD%2BofDMczZs4GRhFbQcRpdtPtaxMXk4NzKa5glNocc%2B9igS%2Blc0OXjrGLXJDgAi6dTxb2caicsSbt2HgFHRByTqLa25mZFNOcc8kYnWNKDbV&X-Amz-Signature=6f8c30184f37a221f253b63c14cfe6c67fc24836cce1c3e5748620492266eb59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RY6SIC5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC1T6q5g45qHsSTmihJOpcQJSqKTOyMkO0OdGGtZhLLgIhAKVFWfW2CbJLOALABmF4damhkjshC%2BJ3TkJoYEDgIGQJKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPRnx4TDJhpE7UB5Uq3AO3fQDRKbKi01%2FMgTUuikbiq7ajeeX59LhlWDsK3QCeDTzjiW8m%2FpK5U5AFdH5Hl0br%2BAw%2BzUyM26Jlw2NDwLt9kZ7b2XmcXOi1b%2B8owmYQjGFMWq6RPZi2BAsbXpz6xXcv6Z%2BoxqwQqozSD7JZeDElupWel0KRg0tkZIXDOMrtlDXyD3zQYj0Ch2TYfNuVuJ3a%2BNQ32xb7Q8qhL233Uzo211VqYgMhgbx8I7cvM9FelQcYJ2wJeIO8%2BgZbuNqE6RN9JKOMkhoHlq5CZIfq9JxrPIjdTljXq8e5mfuuNTBfY0GiW48odvewkf5FYQN%2FHRg7H09bSEg9cZSSPuTh8%2F2tdaWTjtm0SL1D%2FIG34FJPNsvwwOYKall0KWZo3i5SpVu1jHuJSYcKOKf7c0g%2BENw2Sz0WyFe0pgJy8bcKVVugxZ6%2BlW46OebyU%2FB%2BSZBPEmuSY8Oe36ykmj6oNFh6TZT%2F61fJBgCZxJiU7aPm%2B%2F9C%2BJBJsTSiDVQt5T0572qXeweqGNoBJd58URgPbBP2C63gLXzDKV7Ao6VdFv8lT8QFs35U9EkT52jRAhX6aBS6vvXTnPLHJZIdF3o68S06jgh3yfI20lXBDNLurIHfJnjqmZ2fPFyoU72umjYkrjCxiqXEBjqkAZvGtsWA0PvLw7rplkrhZQ1dpavpLYiCmc8a3TD9jZ3Zo19i30nZ8NZFo38zW%2FXPrOiQJJDAu1vR0FN4oZY%2B3FR1E0Oybyt5mZ6kbRD6XKrD0Ifup6VBrCPXmMOQrDUZXm4gMh0F%2Bdu3uz3oyF1UI1OmifJcMmRA%2F5VgGw5dijwAWxeTFwGQlNFdbe1SAyLhvXKUuy5rhVgJFy3VxpLj0PsGNKjW&X-Amz-Signature=10aad071789f52f57661d9b4df1a83236af7a746998c522af4b5f1c98d0fd4fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2DAIADD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWAd%2FeLN2l4dKR1w2zfzOX6AXyhvittq7bblu7zUVQzAiBW3%2FuE%2BSjq%2BYTDEYQte33uYtmVUmrzOeiR6oU3ZeYfESqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpxB6Mo2wf25yyg%2FSKtwDdRczi1fGKRrJsiwLtNIio3e5QSMQ0Dq%2BN75nc6LZIsOjwsGhfNA8jSd8CqyeImI8U38EnvcRtYpin2rFAR%2BvHQak%2F6x4Ijex46tyYTEDcdzLy90X4l%2FiCyb5dvkU4DbJ3iSHKtrx%2BLYuxJavQlE0sOEbKsNkcGWBQ2f1FGh6b%2F7cHD4qRmYej5HRHFwacJLVL7F870LjjaclTVz8Qu%2BoFuc5LbLf44VgRH8jCk61oT%2Fa7F6pFNH%2BCs1%2FyHCAEZ%2FcjFEZyQ9b4Qu%2Bl0thqmkpJ2hiRUP4FjH%2Blxdgt3fj4Sg52DXKr%2FiaUie0ISu2mRvUu2AzyqaDhVcM9agYhXoAF%2B8aqt%2BaQwlU9TU4eMLZUAXmqeO2aR%2BVft2gklO54KvIt96RJMdxSs4YQSOJCZkY5XCd09DBMOZnvLDQU2eep0ML%2F0Byf2V4VfKlLi1gtCTmKfrVWadMYPCvvxUh%2BdToZa%2BrlOhshrXtLygf5tufqUguTtuofa8WSGbXJpCnEhXZ0CBwIk8Fv%2BpTgdkUx1d2J%2FsJjJbGC68LEw3aPrLxjAfYrsSqI8vnF9uqsSQmhi9uAudW3tUUoFab1T7CzM0%2BPA6gZXlbtKM6JIW70dTOI9NieqZh3bhfojpjbl4wuYqlxAY6pgG3riUvK06oR2VUsFkWVTa3ggyy9giqk6B1YILmD%2BWcJR3hWQIOagu2uHT388jIBlgZx2rQC%2B6%2F9TqrwqExhpjvAlq9n9KbbBY5pM%2FJ%2Bntt13tO8%2FEKe%2BAp703bBg9fJSLG%2BPA%2FkmfrEx0mwLIc4lLimUgvgWHgDRAwJi3k2QqNy7UnZk3TZACUmfcCZOghn9yHtmfyy52%2BwhSdMIUJ7fW12CFsxJJH&X-Amz-Signature=234c393050e668ec8cf04e222099e89d2c09668f41c920e359ec276a1b5b90d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7QZ3HM5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk9g3hotysuXG5sIKtt2ceVc%2B85OLfuG4ThNh1VsJtugIgYUtCwf1iwUzVTTaNuktRzV6TyYL5%2FzrsLUIIjxiOB1wqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOdeMCj%2BqAcA1W55ircA0bFSTrztoYa4xc13JVa5dnqjr2HAkESxHpXmGog%2Bn3PgvCUDtezxY2F66B2nFAp6mSksHGyI1wTLAn14%2FDzyachjiSzXkI1Mi8LRUiD1QnIVra05YM1AUZ3Jv19lUQfk08lCPIoKlAnMfdbFNc%2Faq2QjdDzfUo7gMUweHyuBJhSgcVkue5teY0uII0L5%2BYWO%2BIZxd8wO0D1jZjM0eF2%2FwA1V6CD5wOaaQTezmkbxVCuM11wU49UbcvAPzSgnjVBBJteciBz3aNGP8RGQ%2B1u5xdsGSmB9HU9ptC9qcswb7YL1EpzMExU1ecHmL5oAOpBrf3%2B7XQpXKLrwIBh7mYL4Bo9ZLQ8mvUL0nz%2F0%2Fc%2FC0XVb78W1TgLDwEE%2BUDK1Z7OixcxsdoNyRt5pfCuEH%2B3fC1%2Fq7DuVz5t4wDj1EBXXvHsfqimZ4pm11lisYVTQiyEQyTRgcqbSUAAPJBr3AETsj9WkXdpqWVzz8pRGronR7133BQUM%2F%2BbaPNBabj6QWW%2Bv8lkwrSIeplMxb5iyparcWHvwu3kU1Vmy%2BV1lt5K2bUy47v0V0ytrORzR34yhwLORR94bpB4UH4nWoUlUiP51094aQrMRMtf%2F8k%2BraM%2FSaL3ypfUhoJjSargBqp2MMCKpcQGOqUBk%2BuCVJVou99Du9LR2gD4iy8uS5dE%2BwIkPoxxrRicREiSGGwcdjpIdEGAJZKYxnBFjQ3ezepCZGDyQa09n5bnau9Gc6D4YbO7gXuHv9z2%2FCw8xSZbAD%2BofDMczZs4GRhFbQcRpdtPtaxMXk4NzKa5glNocc%2B9igS%2Blc0OXjrGLXJDgAi6dTxb2caicsSbt2HgFHRByTqLa25mZFNOcc8kYnWNKDbV&X-Amz-Signature=9591769adcfd2cf009ef1867b6f315eed75207fd5cdfe62624639dd7667db26e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
