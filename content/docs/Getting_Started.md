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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGG4NF5Z%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCjeEiPHzo69u%2FuFiRtoTJ1jKmmYlke2bbsSZtCn9xYAAIhAJM8K1tlwdo4iSMF4w9oXs9hw8JqkjHzn5AaGdJJcKCSKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzy0g%2FKXkW4WM8T9Wsq3AO0QVZlr3xXSI%2FsdPk1%2BkhDfXwpu9v5J99w69jH7ssdjm0NjIxCWnPNLVqdfm0zTgzl5OTYtNfL3TAINu2ZOpH%2BMfNn0Ol5bdApMro4mee2V0X8QDSWWrW6Wf1op3jY7eRVRHXaaW3FHK2sIX6JprircmRpjUUUm4nXpk9HmkzYKfd84gtWGCjpS0gqfBr%2BCchrrGwzEW6NWlmLv%2BoNMQDIDzpHx%2BooUDwrKe9k1AovDFfTBbAEmjAK4URx%2FAaRpmE8wIytmiA6iUFCfXh3NS7jrRmB3luHzlmYDnY%2FfIHCFVofYGRpSXwMuQGdopD1xX0%2Bi92JwUpiCYylN01Owsaiusyq6Lr7%2BIZB95o%2BBAZMVRIa9NF9N4T8%2FOQmm5NVQpaII02Uf5g0XZ5XXut9tGgPnKYg56Qmc7flbtn3xA1kK7JYWgWlVFg1sIm11bP7lD16JwQZNl%2BQL9hrhX6CzK8IjM2DIL3XUyJxSZ1BtE9LzEhun5mq9nyMdam1nxMq0M5QM9nM5MVGmNCWODUEB%2B6NduFj7PRvjHLRcwtk0JBPNFYxfe8LgJjKolJoM8tfapRC1sWDsgsBf4wDKto51lfYnKlxeWTfRvQ5OSHVUx7fDzuaRH47I5b4uKqUMjDtg8vABjqkAeoEHRdDrujRKTZ0cQT5inMgLgVmoOJcUE2XQZNqEt6Es7fbzU6HaK8Wk3QiG%2BEQMx%2FjOFeTrhoJkJ0rBDNlpfuf2gomRwAE1VUatlAV1sqgWDkOF7XcGyhpLUvJKKBr05IOb5JDpqEETeKRRtJojeFFDosXRFQyjjERkFyLX0V0hvq9lGwbckcQxDR5zq9gLMSKzzrLt1vefrWKqStOG7Y4%2Bc%2FS&X-Amz-Signature=9c27a340f201839fd717d0427b9e26b1747030a8686c9a085278639803f92d2e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGG4NF5Z%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCjeEiPHzo69u%2FuFiRtoTJ1jKmmYlke2bbsSZtCn9xYAAIhAJM8K1tlwdo4iSMF4w9oXs9hw8JqkjHzn5AaGdJJcKCSKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzy0g%2FKXkW4WM8T9Wsq3AO0QVZlr3xXSI%2FsdPk1%2BkhDfXwpu9v5J99w69jH7ssdjm0NjIxCWnPNLVqdfm0zTgzl5OTYtNfL3TAINu2ZOpH%2BMfNn0Ol5bdApMro4mee2V0X8QDSWWrW6Wf1op3jY7eRVRHXaaW3FHK2sIX6JprircmRpjUUUm4nXpk9HmkzYKfd84gtWGCjpS0gqfBr%2BCchrrGwzEW6NWlmLv%2BoNMQDIDzpHx%2BooUDwrKe9k1AovDFfTBbAEmjAK4URx%2FAaRpmE8wIytmiA6iUFCfXh3NS7jrRmB3luHzlmYDnY%2FfIHCFVofYGRpSXwMuQGdopD1xX0%2Bi92JwUpiCYylN01Owsaiusyq6Lr7%2BIZB95o%2BBAZMVRIa9NF9N4T8%2FOQmm5NVQpaII02Uf5g0XZ5XXut9tGgPnKYg56Qmc7flbtn3xA1kK7JYWgWlVFg1sIm11bP7lD16JwQZNl%2BQL9hrhX6CzK8IjM2DIL3XUyJxSZ1BtE9LzEhun5mq9nyMdam1nxMq0M5QM9nM5MVGmNCWODUEB%2B6NduFj7PRvjHLRcwtk0JBPNFYxfe8LgJjKolJoM8tfapRC1sWDsgsBf4wDKto51lfYnKlxeWTfRvQ5OSHVUx7fDzuaRH47I5b4uKqUMjDtg8vABjqkAeoEHRdDrujRKTZ0cQT5inMgLgVmoOJcUE2XQZNqEt6Es7fbzU6HaK8Wk3QiG%2BEQMx%2FjOFeTrhoJkJ0rBDNlpfuf2gomRwAE1VUatlAV1sqgWDkOF7XcGyhpLUvJKKBr05IOb5JDpqEETeKRRtJojeFFDosXRFQyjjERkFyLX0V0hvq9lGwbckcQxDR5zq9gLMSKzzrLt1vefrWKqStOG7Y4%2Bc%2FS&X-Amz-Signature=65940ca615745bf1da438ea6b1194909394778764aca7e01f0898ed989989bdf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGG4NF5Z%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCjeEiPHzo69u%2FuFiRtoTJ1jKmmYlke2bbsSZtCn9xYAAIhAJM8K1tlwdo4iSMF4w9oXs9hw8JqkjHzn5AaGdJJcKCSKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzy0g%2FKXkW4WM8T9Wsq3AO0QVZlr3xXSI%2FsdPk1%2BkhDfXwpu9v5J99w69jH7ssdjm0NjIxCWnPNLVqdfm0zTgzl5OTYtNfL3TAINu2ZOpH%2BMfNn0Ol5bdApMro4mee2V0X8QDSWWrW6Wf1op3jY7eRVRHXaaW3FHK2sIX6JprircmRpjUUUm4nXpk9HmkzYKfd84gtWGCjpS0gqfBr%2BCchrrGwzEW6NWlmLv%2BoNMQDIDzpHx%2BooUDwrKe9k1AovDFfTBbAEmjAK4URx%2FAaRpmE8wIytmiA6iUFCfXh3NS7jrRmB3luHzlmYDnY%2FfIHCFVofYGRpSXwMuQGdopD1xX0%2Bi92JwUpiCYylN01Owsaiusyq6Lr7%2BIZB95o%2BBAZMVRIa9NF9N4T8%2FOQmm5NVQpaII02Uf5g0XZ5XXut9tGgPnKYg56Qmc7flbtn3xA1kK7JYWgWlVFg1sIm11bP7lD16JwQZNl%2BQL9hrhX6CzK8IjM2DIL3XUyJxSZ1BtE9LzEhun5mq9nyMdam1nxMq0M5QM9nM5MVGmNCWODUEB%2B6NduFj7PRvjHLRcwtk0JBPNFYxfe8LgJjKolJoM8tfapRC1sWDsgsBf4wDKto51lfYnKlxeWTfRvQ5OSHVUx7fDzuaRH47I5b4uKqUMjDtg8vABjqkAeoEHRdDrujRKTZ0cQT5inMgLgVmoOJcUE2XQZNqEt6Es7fbzU6HaK8Wk3QiG%2BEQMx%2FjOFeTrhoJkJ0rBDNlpfuf2gomRwAE1VUatlAV1sqgWDkOF7XcGyhpLUvJKKBr05IOb5JDpqEETeKRRtJojeFFDosXRFQyjjERkFyLX0V0hvq9lGwbckcQxDR5zq9gLMSKzzrLt1vefrWKqStOG7Y4%2Bc%2FS&X-Amz-Signature=80cd2600ccc8aeefb0b53e1567ee7f88a9d298209d4813e4e8dcdbc742495178&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QICQMSPZ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCmLeAddWUeC09hG4l8ywnQQirsC%2Fg9PtCHgZ27wEvxWwIhAOb%2FPjKh67hMbZwtJSvInDlPIsTJBTf2%2B3t8aQpcTw6%2BKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx09E7daxwyKPGpr%2BIq3AMy6K36GCAcgi%2ByH%2F%2BjmGrpM4b1APfOWm8mVauuQnFDLb5A8iX1rZKXSMm5A%2BXYWMqNZPgXGUFJrL4d4gCaSEo%2FkVxm303YhIhjzJN%2BDX6eoCY75PA3o7dKgTwV05W9UNcD%2B3GAWmhdL9kf4LwI24OWdz%2Bk98fElxAQQcgvFOa3NNAnWkh2RocyLnjPwb7u1nu6z7KaFP5XsZsm9prF5S8kZ9sCCCbwMg4iT5KZ%2F49J3zwAdhJ%2FbxfxpIz7GX8Q1pkOtH6%2FOIXw%2FC%2BuE3pVL1LCQFdqXV%2BD1bjA2wV2ynnZ4o%2B8Z71qJb59U9tSTUbdDrlpfvsV1W8CzO4Cwv1y30l5FGPYRzm%2Fxrr7WrVnBoxq1DzhozIsyvs7L%2BbKvaUyeeyXGxupWz2OrM7fORIjlctYLNiB6YZxVNPJ6E8o28cf036%2FEpsJu5PsEI6MX1dTtpORzrwVRMuzDsx8Xtab8q5BaM8Ypc9pz7E8OomXAnS5gE%2BXNn%2FY7hy%2BJjjcqdKcLwhj4lDWdBkd%2BO4%2FeoXIXCy3b8jFRqo3OHzMqIW2vlWoadzSr9h8eT9CoKYLrtbUhTmeeJEQxPN%2FkYLpJvTPHpEzA8g6QitxcEn2OYDOclHHhkzWW76uM8%2BlnIEYVDDng8vABjqkAbNVczYhARZmKTzY9LfQPSVb2Ksl9R8k7uiaCWgyCZeBWpaopMAGOjOVElO%2BokhYXqcGMYIQAtmEFvbU%2BzMb26buJK91NbCxuLw2RAT0Oz0EsXsji3gwkVBKOAVw7Nc1oohISG9nSISwxUBSGH0OndFYCec6%2Ft7daaezG95LqtB56dE%2BakNXdG8jf3QOTZn3xdsRPr24u4jQB0GcMoHE4OAo7jdQ&X-Amz-Signature=f7a1c1010ebf637be10cf038f36f984f713210c2cb3e04290fcf9f13737643bd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT5QHDBZ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDpwX1WlVQViUz%2F%2BmB1nVCLR2xRMcPItaggrG8Qn%2FR2iAIgMCYwG8kaBJ1TtP3H5b%2Bne4P1w5niBtXDv%2BaunWYRUokqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMHRlb50NG%2BBf3cxyrcA52X2lK9w6syQ4Ii%2BqdtlnsvelAZc20XcVurkkEq7UO%2Fa6Ok58cqdbYxv%2FqCcwGu4UUuVglFjL0p2tujCnx29mBCqbWMiKKGQ%2Frc3Rd%2BKmtDMabe3YoF7l%2FFIPp3u947DhRoJkRgCQ7FQH%2Fa%2F9NrH3Rd6x8QmmDGZ62NM1cgFbRDTm1eWFg5hmQ16WgmoG0g8ZJHlbELkZLlMr%2BWSxbefkyIpzRZSxvZYsbTyfm0P9QfRz2sW1kSaHkiWMW3kBp2mStejCVUkAbWLAiCFfeT64qikShUeBtXsoVhyEQCyIxFMhCndcMLacctsprYZoYkFhL2ZZSfwJVtRVVxzFo4qAtjwq5%2BOohh6gSoaJk1Nc48iLDT%2FFMEwIoueoUgA28NZ3ltqc27QKBmjhz9lXPn5yvkv%2F08HxRB0I2a66ZCVcFivwZiMf8JQOkQTNt0fXJSihjvrahifv9aexoCzMV66J13e3A6AQdZrWRjI44S9uxKSi7l2i8fn1TwLFwJYzumfy%2FdWfU%2FOdPLXd1VLn9xMvpgr85Ft45Vkkv2rlSe6SSunwyqfHZzy9EVvmuWlLlVaiLTQTxysHpyxwSgD%2FKxsYwSGHH7RVZb2sZf3g4c3Ar4LiWKZ5IU%2BTc4nR%2FoMLyDy8AGOqUBHdbFPlZv1IHlZq0Lr1Lh%2Bi9fneW7cAJtVdGIHqPo0BuHoCpPZd2hT%2F3rJPTNXe2l%2B785ABFW5%2FXWdqiVIafz8EiVeTD3WPT0ppkykFSSsxSBTf46mESPcNAFsN6PoS0G6NDDOORlOx3g%2BcOp9k%2FsPB6vnfRKdwQ4xsBn9a%2BW%2F5wjBLSyNHZ1atp3O%2BAjuZo2OtjHn%2BqTvhqAuOXooAgYpS8ymHON&X-Amz-Signature=29d93e89121f95b34d0cc9f09e368c46a796c107105cf97ba7b44fac6506aa39&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGG4NF5Z%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCjeEiPHzo69u%2FuFiRtoTJ1jKmmYlke2bbsSZtCn9xYAAIhAJM8K1tlwdo4iSMF4w9oXs9hw8JqkjHzn5AaGdJJcKCSKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzy0g%2FKXkW4WM8T9Wsq3AO0QVZlr3xXSI%2FsdPk1%2BkhDfXwpu9v5J99w69jH7ssdjm0NjIxCWnPNLVqdfm0zTgzl5OTYtNfL3TAINu2ZOpH%2BMfNn0Ol5bdApMro4mee2V0X8QDSWWrW6Wf1op3jY7eRVRHXaaW3FHK2sIX6JprircmRpjUUUm4nXpk9HmkzYKfd84gtWGCjpS0gqfBr%2BCchrrGwzEW6NWlmLv%2BoNMQDIDzpHx%2BooUDwrKe9k1AovDFfTBbAEmjAK4URx%2FAaRpmE8wIytmiA6iUFCfXh3NS7jrRmB3luHzlmYDnY%2FfIHCFVofYGRpSXwMuQGdopD1xX0%2Bi92JwUpiCYylN01Owsaiusyq6Lr7%2BIZB95o%2BBAZMVRIa9NF9N4T8%2FOQmm5NVQpaII02Uf5g0XZ5XXut9tGgPnKYg56Qmc7flbtn3xA1kK7JYWgWlVFg1sIm11bP7lD16JwQZNl%2BQL9hrhX6CzK8IjM2DIL3XUyJxSZ1BtE9LzEhun5mq9nyMdam1nxMq0M5QM9nM5MVGmNCWODUEB%2B6NduFj7PRvjHLRcwtk0JBPNFYxfe8LgJjKolJoM8tfapRC1sWDsgsBf4wDKto51lfYnKlxeWTfRvQ5OSHVUx7fDzuaRH47I5b4uKqUMjDtg8vABjqkAeoEHRdDrujRKTZ0cQT5inMgLgVmoOJcUE2XQZNqEt6Es7fbzU6HaK8Wk3QiG%2BEQMx%2FjOFeTrhoJkJ0rBDNlpfuf2gomRwAE1VUatlAV1sqgWDkOF7XcGyhpLUvJKKBr05IOb5JDpqEETeKRRtJojeFFDosXRFQyjjERkFyLX0V0hvq9lGwbckcQxDR5zq9gLMSKzzrLt1vefrWKqStOG7Y4%2Bc%2FS&X-Amz-Signature=f1a886f6ed455866e7a6d3d0b5fabfa17aaa694d0fbe415f4dc3d526b66576cc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
