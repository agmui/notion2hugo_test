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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWK5JC4W%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdj4j7E4yOojVsj4Cdq86lJWCRqiYX%2F4AmNQ7ABlnhLwIhALXXHS5MXXF0bctTgldXhhZTy3p8TV%2F%2BcV9I7eLx3NqmKv8DCH4QABoMNjM3NDIzMTgzODA1Igz1kuSqJJxjN0HQSrIq3AMeZBQy7WEwJoEoQVowN4b9srmRWiK6RUbilEbTxd53m4PD%2BtSTeeaPpmoHyhtT0AWZQS38ct3wEhtA34g6lu%2BETU%2F5H%2Fp3Dho0ts9PSSHmx%2FAUyKbUdux4kXy7EQHbSau%2B%2BSvIcrCJ32F8ukHSrlytW0f8zibEf6vNOK2qZXRjrkVu4Qpa11vTOkqu68%2Fl089C2%2Bqp49NBNc6lGcjyUdxtPVbQbhnX0PPTx0NX4HMnPDD0xEvkseGMI0WSznLGyJekoW9Vc%2F9XTDSs1wMxE4ECFd3rfLzYm7zILasMliCa0ylRyOH2sRP77FZpBZfi%2F8ID0p%2BPsUjmSGB4qqWQcaRGzG9%2FeEm2BcxrUY8mXBewf1J3husQe706Xojyd0gIg5okC7MOEqaf9wj9WWnr3HuIxBP0h8Ae8LAnP09xXTiJnXZBHz6m623NKl6dKwU9d08wU5KRUm0ey6mh7NWNihi9%2Ffqe1z1c%2Bxc64zItYBh8ypbfQze7Hbq8NnhElXQwKJmMcD8ZMrO7HSmZuh1EMPDrC55pBHtanbVqJCPV21x0wF85jmUF6JIzcEhGw82iFWieSLIhYsio0PQOibxsPhQNr7gE3pP%2FXLcxOQDrJxLeh4jVA5GlBSotbsOeCjDJ0b%2FABjqkAUz8P1HeaQFVpcERSiZx6PC%2Bv0kw%2BA9ujBIGGc4ehjqGvlYs3o1d6ecSUxBljjSE9gyJ9oiNNXYlK0FaruGao9UAyM%2BWAkktRescy8D6nZs1mzYEsEDkVviM18AiLEKe9YhJcABwIIGk2OlmPkhKdNbNNqEgrn75YL259P2gII%2F4bDJ7uDFVBNbzciWjci3tWpiQ6QkHbZAj2053rm9RGsleWESp&X-Amz-Signature=8fb308fd2531834fbe73c91eaacf7ad24b2c54ed9548b4109f280f09723d2145&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWK5JC4W%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdj4j7E4yOojVsj4Cdq86lJWCRqiYX%2F4AmNQ7ABlnhLwIhALXXHS5MXXF0bctTgldXhhZTy3p8TV%2F%2BcV9I7eLx3NqmKv8DCH4QABoMNjM3NDIzMTgzODA1Igz1kuSqJJxjN0HQSrIq3AMeZBQy7WEwJoEoQVowN4b9srmRWiK6RUbilEbTxd53m4PD%2BtSTeeaPpmoHyhtT0AWZQS38ct3wEhtA34g6lu%2BETU%2F5H%2Fp3Dho0ts9PSSHmx%2FAUyKbUdux4kXy7EQHbSau%2B%2BSvIcrCJ32F8ukHSrlytW0f8zibEf6vNOK2qZXRjrkVu4Qpa11vTOkqu68%2Fl089C2%2Bqp49NBNc6lGcjyUdxtPVbQbhnX0PPTx0NX4HMnPDD0xEvkseGMI0WSznLGyJekoW9Vc%2F9XTDSs1wMxE4ECFd3rfLzYm7zILasMliCa0ylRyOH2sRP77FZpBZfi%2F8ID0p%2BPsUjmSGB4qqWQcaRGzG9%2FeEm2BcxrUY8mXBewf1J3husQe706Xojyd0gIg5okC7MOEqaf9wj9WWnr3HuIxBP0h8Ae8LAnP09xXTiJnXZBHz6m623NKl6dKwU9d08wU5KRUm0ey6mh7NWNihi9%2Ffqe1z1c%2Bxc64zItYBh8ypbfQze7Hbq8NnhElXQwKJmMcD8ZMrO7HSmZuh1EMPDrC55pBHtanbVqJCPV21x0wF85jmUF6JIzcEhGw82iFWieSLIhYsio0PQOibxsPhQNr7gE3pP%2FXLcxOQDrJxLeh4jVA5GlBSotbsOeCjDJ0b%2FABjqkAUz8P1HeaQFVpcERSiZx6PC%2Bv0kw%2BA9ujBIGGc4ehjqGvlYs3o1d6ecSUxBljjSE9gyJ9oiNNXYlK0FaruGao9UAyM%2BWAkktRescy8D6nZs1mzYEsEDkVviM18AiLEKe9YhJcABwIIGk2OlmPkhKdNbNNqEgrn75YL259P2gII%2F4bDJ7uDFVBNbzciWjci3tWpiQ6QkHbZAj2053rm9RGsleWESp&X-Amz-Signature=7e2ff7b7eb3800ee063087630142fed0a6787601f2df22103a7987d8fe971423&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6CTXZU3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYAcYo0%2Fc4sA76hgAqg20k6Je4WbG%2Fdle%2B3QMNN4fNpAiB4OiqnWBNAtpC6OryPAeJyyehQLRS0JV5OgS8kC4%2FXnir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM8Zs2df%2B7J07xwQCTKtwDk7bZ%2Fc4Ln3uFcLQwBS8mV8x%2FqzkftZDLo2%2FwT0QUQvazjZneQHwtH3sFDk70Xfs3VpWpWnPqsNkxEF6v1WBV%2FYsARMrh2toy2M57l01xMuJoQIjxsmRBmhHJv8R7gAqZZCRDZLfFn9U9Fnm3CVyjWzOt8hPWinp1l3U5O2Oss7lZooJPMebx%2Buv5cyieMRaAB5fdCB259m%2BVquHNE%2F7B7E8ePwZias87ss%2FRfX%2FCxugn6U342h2qN%2FovX6QisdoohijHkryntXe8R2phSS5zjvt1%2FS3Ky77fk07f6SkmDaHxCCM82HoxRWeMh567Q7nUtZpkMcLPaRxZK4ayozVAGFRFxkli5RIkjZWQoQwN%2BAm4Muq7YOEH8fGhaiUW2w6tucK5rYTLwXgSdhTaYT6YH3fBUW6DsrE38rcbVHqnj1pH3WBvBp9cuPZMjEqXqv9g6%2BDqYHmJZCRudvF9Tm%2FJuWGuHzSNLVhHCC%2FRInn2iuGRcfJzI0%2F4VuWyUOLBpAgyk1HvqSASyDmwOVEmnGbaIblF0UUgtg6G8hLfIF9Thb4mr3gtZUOzn8BEZO3ftFa%2Bq9uHD1dX7Fh70uralxBLr0deEwSw5m%2FYA8Yf1AFvdF9ZezbtxH8aL8tbbuQw9tG%2FwAY6pgHQIUo0gEWqWtQjmhtw%2FqoWH8OkW6stSe8XwzABj2wJu%2FxW6%2BUmLDsoCysXDyMMee0i4sMbli54TTuJ4%2B%2BBHVkSaXNmIwpg7jMbnRwGXn%2Faz6%2BfnC78IWGWqWXGn9lXJ1i6ZTTSs%2FCxoxuRpgMzG8MX4aQ7nMlOdLiPEp4jZnbxj0%2B09bhJicjcMv%2FtvkPwj2mDZ2Fg7SmjmHPID9U2OZoVDVxfdft3&X-Amz-Signature=4d3afb0495a1d17d7d622d5c89563756a19ed4f1872cf2bd156d84a3aaa25119&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGSTYEFT%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9LF%2B2fjpFo4ybnjwxTYdMuyrm4syaKIm83P2EsFxQBwIhAIncOuURMtRkMVEQP1VwnlDvM7RZQDzabylOg4p3gFhEKv8DCH4QABoMNjM3NDIzMTgzODA1IgxnAQgPtlVUE851ZmQq3AON7S9hHePMn9K6X5qWVN0EorvjT52meXPR9VrSiBLdnImfOW7CEMi9UOZ7Cd26Gal%2Be2K9g1MvpyrHIDElC17q%2BBYnkP3AQvqBVX8xpPGNmAzUiHDIEXcoW3IVKcw0TrvtN5axTVieBCniRfmfyqFeKTKyz6qAqjZovfFbHk3lGiXACE5krMxOl1s3jbUXXMitq2S%2BS3AXi4qJkULkV0Q9lmnjs%2Fvs1ZNloCTDXAjYJHnDaiPVI9aHW%2BDGZrqrrvDJHixpWOYL4CrIiX5mguE2v9o%2FRt%2By08VKZ9v8ISVpbdhSsxheH3%2BCc9MIp7e9p0L24O4rBV49Am%2F3Ej2Yv3pwj2rnyPA3VXNL9ZmL9nzLL8sU%2BDeB8fIpmxO9YuTii8UHlrPL7q6bQCnWLAvGM6YJS6dy9PQTqEHOBRQSKJfocgQb4t1N%2BqEkBgch%2BxZpPiYIUKIwu%2BhK282qikOpEQblPXeiOLb9KZHF98W70RMnZHa%2Fcx%2BGpH%2ByWh3r0uOUCExj7OXNB1v%2BWrdZX9GJsr1Viq9OfQNWAULL1jILGw%2BlVivAoUQ6QlNDhOcobOXGYJOl5JPVVUk5hmxx3VF5AsGw17v3WRM1CeU7s7C99gtxqWqygJ3W9R6DFtspgzCM0r%2FABjqkAVxwFqyABNpSX6iVN0lm5WChRT3d7gmVU%2FVdKQqNkwR2MSMvdFRp4pzG1GSukGZ30ocheT8pkw%2BRCnZYUdhbssvobjEQCtiRy1C4ICmPDg5ve8Tp8%2B0lPkhFJd5hxQ%2F2EhXaQrxmnzJRxmez%2F9NnpdLpxZZn5DhAbSNmSJsGFhG5UEBOT5yR6eLkLHpOIjT5JUZV%2FYXU97PbFZ%2BldM29eU9e2NKG&X-Amz-Signature=3d714643cfd688137afb90f5a3b9ab80ebed4d97fc0b44db749ff6707cb791bc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWK5JC4W%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdj4j7E4yOojVsj4Cdq86lJWCRqiYX%2F4AmNQ7ABlnhLwIhALXXHS5MXXF0bctTgldXhhZTy3p8TV%2F%2BcV9I7eLx3NqmKv8DCH4QABoMNjM3NDIzMTgzODA1Igz1kuSqJJxjN0HQSrIq3AMeZBQy7WEwJoEoQVowN4b9srmRWiK6RUbilEbTxd53m4PD%2BtSTeeaPpmoHyhtT0AWZQS38ct3wEhtA34g6lu%2BETU%2F5H%2Fp3Dho0ts9PSSHmx%2FAUyKbUdux4kXy7EQHbSau%2B%2BSvIcrCJ32F8ukHSrlytW0f8zibEf6vNOK2qZXRjrkVu4Qpa11vTOkqu68%2Fl089C2%2Bqp49NBNc6lGcjyUdxtPVbQbhnX0PPTx0NX4HMnPDD0xEvkseGMI0WSznLGyJekoW9Vc%2F9XTDSs1wMxE4ECFd3rfLzYm7zILasMliCa0ylRyOH2sRP77FZpBZfi%2F8ID0p%2BPsUjmSGB4qqWQcaRGzG9%2FeEm2BcxrUY8mXBewf1J3husQe706Xojyd0gIg5okC7MOEqaf9wj9WWnr3HuIxBP0h8Ae8LAnP09xXTiJnXZBHz6m623NKl6dKwU9d08wU5KRUm0ey6mh7NWNihi9%2Ffqe1z1c%2Bxc64zItYBh8ypbfQze7Hbq8NnhElXQwKJmMcD8ZMrO7HSmZuh1EMPDrC55pBHtanbVqJCPV21x0wF85jmUF6JIzcEhGw82iFWieSLIhYsio0PQOibxsPhQNr7gE3pP%2FXLcxOQDrJxLeh4jVA5GlBSotbsOeCjDJ0b%2FABjqkAUz8P1HeaQFVpcERSiZx6PC%2Bv0kw%2BA9ujBIGGc4ehjqGvlYs3o1d6ecSUxBljjSE9gyJ9oiNNXYlK0FaruGao9UAyM%2BWAkktRescy8D6nZs1mzYEsEDkVviM18AiLEKe9YhJcABwIIGk2OlmPkhKdNbNNqEgrn75YL259P2gII%2F4bDJ7uDFVBNbzciWjci3tWpiQ6QkHbZAj2053rm9RGsleWESp&X-Amz-Signature=bfdde2e7d664e3bb4be8aa56136bb0161f8c479b1d66d0fb9a1dd4bbdccf91ef&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
