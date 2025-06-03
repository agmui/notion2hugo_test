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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663POPEJXZ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBGjSKv5ZRC6odV1erkneOfBetA2oQd%2B2WUjBS07FYqJAiAWhc7rkRrDynz4%2BBmY4uV6oRt1N3eMw7bQOFoX3uzCOir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM4Y6yxXvRltGcIoOtKtwDfHPqZFSdl2njbG9QQhRc5SAv1j4oSm4xIts5uwm4pVN6mwsUcy2Gd5GeAomggD%2Fy%2Fikxolek7b%2BnuRdc2dcd%2FGQb8JnTHGTEP79mf59XXOfkxGUocIDYoGzfh8bO9FL1tnpCz4NCcH%2BRSvnlX1Bc90pxAMlZK0Du1IAL%2ByMUqt49z75%2BkhLcat9kFexu3fds3ZmdVVxs3IyELlrvwLurCTryKmhyo0sEt2hfQ5aVGxnL1%2FcRUE6RW6xq0kvzlRyiOymPIGAf29ollBchM3Ms00AF31duKdZF5AEyKJnEIJ%2FYRImoO0tOjiziDOia0cdie4TL%2F%2BNF6z00qS1bX3EXPmyNT1Ao5E%2FVCpsC3XiDrpDoLohsySIUEDiHJ7Sa77lan0VkjgVFh%2FuR8lp8ZlqLULjgoUwuh3PubpLvhLmRrn8p5%2BBulHvX26MNXuaWt7N2I07q03qF4CCmE9M0ilwTI0p7paggr5UPTsTu4D9vUHJ7JbawfRvhYtonFj9lznGZ2r%2FuJ372xUDyss%2BN2YwdpZc797CLQ6x781EXERsK1%2BelwFMA6CiLfDbfNYBj50INlqXafh1%2Fu%2B%2Fb1ucfuH7aigpNCWvJya9DuvJ03C%2FLbVaLqFRkn4MtqggbAl8w8MT6wQY6pgFHFlsczRqihbhEwKiukHmIY6fhRRxuP4n39D5IPqX3btvJbvnzJ2aZdT%2BJYBemHuihVSvjXMe0MtOjrL11JeGnjlTa8mw8RwSyeI6IHOXiysmbkaVmpwQ%2FNuT%2FJwbzBXjODCjiJw%2BPwvqxGKYKhHHXkWN5D1JWTsx%2B2hhlbboBYhb0ZkJI9cHz7iXsVMUxYmCBoEiUxn%2F24SoUwAeY7f1CGnAitHnX&X-Amz-Signature=6c0f41f93565d35ed85d6b02283028abba63cec1a8de85b4ad0eb89fe30ed71e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663POPEJXZ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBGjSKv5ZRC6odV1erkneOfBetA2oQd%2B2WUjBS07FYqJAiAWhc7rkRrDynz4%2BBmY4uV6oRt1N3eMw7bQOFoX3uzCOir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM4Y6yxXvRltGcIoOtKtwDfHPqZFSdl2njbG9QQhRc5SAv1j4oSm4xIts5uwm4pVN6mwsUcy2Gd5GeAomggD%2Fy%2Fikxolek7b%2BnuRdc2dcd%2FGQb8JnTHGTEP79mf59XXOfkxGUocIDYoGzfh8bO9FL1tnpCz4NCcH%2BRSvnlX1Bc90pxAMlZK0Du1IAL%2ByMUqt49z75%2BkhLcat9kFexu3fds3ZmdVVxs3IyELlrvwLurCTryKmhyo0sEt2hfQ5aVGxnL1%2FcRUE6RW6xq0kvzlRyiOymPIGAf29ollBchM3Ms00AF31duKdZF5AEyKJnEIJ%2FYRImoO0tOjiziDOia0cdie4TL%2F%2BNF6z00qS1bX3EXPmyNT1Ao5E%2FVCpsC3XiDrpDoLohsySIUEDiHJ7Sa77lan0VkjgVFh%2FuR8lp8ZlqLULjgoUwuh3PubpLvhLmRrn8p5%2BBulHvX26MNXuaWt7N2I07q03qF4CCmE9M0ilwTI0p7paggr5UPTsTu4D9vUHJ7JbawfRvhYtonFj9lznGZ2r%2FuJ372xUDyss%2BN2YwdpZc797CLQ6x781EXERsK1%2BelwFMA6CiLfDbfNYBj50INlqXafh1%2Fu%2B%2Fb1ucfuH7aigpNCWvJya9DuvJ03C%2FLbVaLqFRkn4MtqggbAl8w8MT6wQY6pgFHFlsczRqihbhEwKiukHmIY6fhRRxuP4n39D5IPqX3btvJbvnzJ2aZdT%2BJYBemHuihVSvjXMe0MtOjrL11JeGnjlTa8mw8RwSyeI6IHOXiysmbkaVmpwQ%2FNuT%2FJwbzBXjODCjiJw%2BPwvqxGKYKhHHXkWN5D1JWTsx%2B2hhlbboBYhb0ZkJI9cHz7iXsVMUxYmCBoEiUxn%2F24SoUwAeY7f1CGnAitHnX&X-Amz-Signature=2412dce584e95f667cf810e7c30507e13f612a21cbc644a94ac38755b401ea47&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663POPEJXZ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBGjSKv5ZRC6odV1erkneOfBetA2oQd%2B2WUjBS07FYqJAiAWhc7rkRrDynz4%2BBmY4uV6oRt1N3eMw7bQOFoX3uzCOir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM4Y6yxXvRltGcIoOtKtwDfHPqZFSdl2njbG9QQhRc5SAv1j4oSm4xIts5uwm4pVN6mwsUcy2Gd5GeAomggD%2Fy%2Fikxolek7b%2BnuRdc2dcd%2FGQb8JnTHGTEP79mf59XXOfkxGUocIDYoGzfh8bO9FL1tnpCz4NCcH%2BRSvnlX1Bc90pxAMlZK0Du1IAL%2ByMUqt49z75%2BkhLcat9kFexu3fds3ZmdVVxs3IyELlrvwLurCTryKmhyo0sEt2hfQ5aVGxnL1%2FcRUE6RW6xq0kvzlRyiOymPIGAf29ollBchM3Ms00AF31duKdZF5AEyKJnEIJ%2FYRImoO0tOjiziDOia0cdie4TL%2F%2BNF6z00qS1bX3EXPmyNT1Ao5E%2FVCpsC3XiDrpDoLohsySIUEDiHJ7Sa77lan0VkjgVFh%2FuR8lp8ZlqLULjgoUwuh3PubpLvhLmRrn8p5%2BBulHvX26MNXuaWt7N2I07q03qF4CCmE9M0ilwTI0p7paggr5UPTsTu4D9vUHJ7JbawfRvhYtonFj9lznGZ2r%2FuJ372xUDyss%2BN2YwdpZc797CLQ6x781EXERsK1%2BelwFMA6CiLfDbfNYBj50INlqXafh1%2Fu%2B%2Fb1ucfuH7aigpNCWvJya9DuvJ03C%2FLbVaLqFRkn4MtqggbAl8w8MT6wQY6pgFHFlsczRqihbhEwKiukHmIY6fhRRxuP4n39D5IPqX3btvJbvnzJ2aZdT%2BJYBemHuihVSvjXMe0MtOjrL11JeGnjlTa8mw8RwSyeI6IHOXiysmbkaVmpwQ%2FNuT%2FJwbzBXjODCjiJw%2BPwvqxGKYKhHHXkWN5D1JWTsx%2B2hhlbboBYhb0ZkJI9cHz7iXsVMUxYmCBoEiUxn%2F24SoUwAeY7f1CGnAitHnX&X-Amz-Signature=4a5dd8ec0fef7f88df5aea78a551e3505b6bb2b514a732f34ebae8f2eb21ab23&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM4UXNLA%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIGrZOBCdGO5ajciu705%2By0T1TMXwfkFi73j6armRBxwSAiEAo5jx7cLE%2Bas%2BIpB5i%2FRP2CKXe7NeD5BG4fez%2FHhVKkQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKzQtGISEH0EPDOD4yrcAzgHnJVXP1ptjvriu7phhLl4JwSPiiUgWs3k2bPZhCJg15jH%2BbC2tVfmyVjVeGSf9VpHiKJYZGqnWdkYP%2BL7xn916GEkT1uB8ZiuhPW57ww6boH%2BWCmOIaS6KPPFm6KK0bAkmOTlj8ExFl4%2BvF963FMuviHc2XGLoyATOvCrMxYsFGPO%2B8tJEEsfe8KIrwW9MiET0gTCpx1AovFY1XYkIu0LnG8MmyZeCEI7poeuBJTGmlPgQLXGV%2FjNIlWSyxKE9ybyCIui7TbvLyEasCG42aHRFOwXUOzaRECOBH3Q8RHrYEAmvtkDfJ5ky0k3dvRX9zgGsqSn197wNkp3nhUt2n67jHYOQXBrNWOjOD0tH1qXYR9HF9g2nbErm%2Ftj%2BmwRVerfuEooT3bri%2F9iVANcBaOgfCG%2BqEZJVG3tX12Bun0nr8%2F5Ls3J%2FSgC1iriC%2FcYZywo0MEEs%2BfM2fLRqKfVtJfM0XJlmH2dIzJJdIdNtkP%2BdJSL6G%2FR42gDZd67vWHyFKFpX2WWaK0vFPEWpOz26DLzNElXNgE7HPuOGsYMoF731PB4%2FFL9RrXl8ais78Nxiglo9zk%2FHqV19o5vNF%2FBKdIr0Kt9VwsqDjjTJkXSy7G74O4B4hjwnSzjjmxBMJDF%2BsEGOqUBPKctuk5kWNjeGREuMH4sSZFQ%2FxIZizCOtnGok9GmpX67Ahw%2FJLvwnAYsqyrqwSjyBfSW92N3egkz24Dkybeh%2BkbKDg%2Fq34lcoZvh5q6sESFw09%2BI1t8bgrINFFelmJrnCQyOZmKSMSkldklNYyDFwDYvxhwSc6If25csCWcvvBTj0b25lMZlItaOU%2FLfaObUI6GAfqnqhSdHk7q6jCNWHhGqJYjL&X-Amz-Signature=72bf814114aa51f0f46bf40877a8f591cf159430af9df105245fc3cc730395b3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HC4KQSL%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIAPskc3RATNot93O7vbCRb5dundWVxi8c53pST74F7%2BhAiBVICsLvMUtspbPoLwKJYweRu1AGz7vovHaIPynOM4zLCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM1ecxAU%2FxJbepkhxvKtwDB%2BB5PNEbHTCBMScrg7Kx8VwKk%2FWVbE%2BPivbMspTIPuT2Fyd6RqWBQstzvFH%2FagtI0pjcC%2F4FqVNmvHoWnqEKHHI5DNAM6zK1mxrCg7l5ssHKqpztwrK5PTVAxZoIwIxqI5BIXZf1qiKey%2FGYAEM6hEtPRf32Noh%2F6eMwAKQjSrrFiOaeDDcdLhYH3UT82gCPPm4So39K3FWzjeG%2BcAiFz5fvkkazt0g5STkoy%2BrgLzE3%2FDZ9Qz9QIpq4m5kICxfeDiVjHtWdExqItQxENrvN0%2BioNCyn36L2DoykfwU1YmeG%2B%2Fb%2BtryeKDOho0oK1BB6rcNKYg%2F1wZR22Pcytr%2FUZ7u22eX8N2g5wy6ErbGvGa1KXPcM2pZuM9T1uASk89MctHWIbaFU61D4jH6p2QVusaDUKKfNXAJK2n6owj5CKpi5KC5tqgsxlBenjadG%2FEMrpk30MhbMf1A9H50hlJq%2FEcs8jcJv7JErEcYBAHxAREIQ4wcXWXukNEmxkW%2BZ5DBoQbkUkqnCaLq4J%2FqB11d12BfgJAaBjzlP5LrXhefONshx0m1WllccoItTxyJGlbJRrmtOgBBDCdNgi14Jz%2FxE3d6lw6iZgkpjR%2BZoUdD6P924whB8FKScvbob9VYw7sX6wQY6pgFAoGCiXtMQ7ajPap5H9x%2Bj6YssYiLeMt%2B%2BBzr8jLlYpQb%2B4Wj3jpYIru0yrHBEv%2FzeZYA0FyJtlBWb9%2FMYSf4%2F9DnAKvO0t9lgPimxCi4rAlNm%2BySIIA1%2B%2Bb6VzbmDI6c8WgWng5ebPsyIYXptxl7DR7zhb%2BHBNvN2srAZKExQ6EqlFuuBQD9d3Ig7pe3iOjf3i4M9jVVpZ4mFGVjnPnwrFKykqQYd&X-Amz-Signature=768b458dab4296f421742565e05333278236fc09bf84e8d2f6964907d07f4018&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663POPEJXZ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBGjSKv5ZRC6odV1erkneOfBetA2oQd%2B2WUjBS07FYqJAiAWhc7rkRrDynz4%2BBmY4uV6oRt1N3eMw7bQOFoX3uzCOir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM4Y6yxXvRltGcIoOtKtwDfHPqZFSdl2njbG9QQhRc5SAv1j4oSm4xIts5uwm4pVN6mwsUcy2Gd5GeAomggD%2Fy%2Fikxolek7b%2BnuRdc2dcd%2FGQb8JnTHGTEP79mf59XXOfkxGUocIDYoGzfh8bO9FL1tnpCz4NCcH%2BRSvnlX1Bc90pxAMlZK0Du1IAL%2ByMUqt49z75%2BkhLcat9kFexu3fds3ZmdVVxs3IyELlrvwLurCTryKmhyo0sEt2hfQ5aVGxnL1%2FcRUE6RW6xq0kvzlRyiOymPIGAf29ollBchM3Ms00AF31duKdZF5AEyKJnEIJ%2FYRImoO0tOjiziDOia0cdie4TL%2F%2BNF6z00qS1bX3EXPmyNT1Ao5E%2FVCpsC3XiDrpDoLohsySIUEDiHJ7Sa77lan0VkjgVFh%2FuR8lp8ZlqLULjgoUwuh3PubpLvhLmRrn8p5%2BBulHvX26MNXuaWt7N2I07q03qF4CCmE9M0ilwTI0p7paggr5UPTsTu4D9vUHJ7JbawfRvhYtonFj9lznGZ2r%2FuJ372xUDyss%2BN2YwdpZc797CLQ6x781EXERsK1%2BelwFMA6CiLfDbfNYBj50INlqXafh1%2Fu%2B%2Fb1ucfuH7aigpNCWvJya9DuvJ03C%2FLbVaLqFRkn4MtqggbAl8w8MT6wQY6pgFHFlsczRqihbhEwKiukHmIY6fhRRxuP4n39D5IPqX3btvJbvnzJ2aZdT%2BJYBemHuihVSvjXMe0MtOjrL11JeGnjlTa8mw8RwSyeI6IHOXiysmbkaVmpwQ%2FNuT%2FJwbzBXjODCjiJw%2BPwvqxGKYKhHHXkWN5D1JWTsx%2B2hhlbboBYhb0ZkJI9cHz7iXsVMUxYmCBoEiUxn%2F24SoUwAeY7f1CGnAitHnX&X-Amz-Signature=4e6d72cac77c7b5ce0c816876a2a00f835544808e02bbde4b58f9a7374803bfb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
