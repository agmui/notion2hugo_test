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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MEO3ZK2%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP%2BqIILTbHAWTIEkJ1LhLKLQIxSSVpDnYd1bZoCKj5lQIhAOZy3pFSK2DWdoi5cfJudykkBvo%2FMSiZYI7b1cXVrpPJKv8DCCkQABoMNjM3NDIzMTgzODA1Igw8%2B%2BkHz7dLi95qkvwq3AOBe4Jl6WM8O4vSyYDLg6EBOqIJ9YnJtbOEiNjok1nTMLTJf2Y2lao9xn0F7cA0fvVG%2FEqs8%2B%2BC51w9YmKd5QzA%2BL4qboSCQFhYjGy9KlFXzKVQPfy1IgyqHuy2c2zsCGuWA2MudNPPEAZJJumSltl8d2p9res2TFmlKdNkoiK6J%2BAXQruwTMIWRfZaoPGaue97BDz78%2ByrLrpkNuD6dVJUi4Y9A0mlt23eItePYo1JbQRtjTA4BDYDBnT2AYQprmXQZKQuCQHUdcefJ%2Bu%2FgTezO0jwYkCGOu9NQaGBa%2BlUKk3QIog8WhcDMTbNxwzC4TIYWNo6xDYkweWcuCGhoQx1ExRhFrJJZiAZDj%2FsH0JYhrwdErRZk9HFsmRqR%2FSm%2BaxtMckqKLYuMU1wHjAPWlyQWxPSS0nJaGsRvGrP%2FZF%2BVOMpgZTbxriBldzEWzWuRkYX%2FxndHYMGocbMAbCQlWxQ35GbYhiREapTj8et80Y8huz0n1FoMYq0Vc9DimhsJnTdmVNxnjXupODGDkinqH%2FWvDMzfgw0RrxdsmSGb2Wa2gkbYg%2BtAIeQ8Hkh45jvShaFKeZafK1fXPLAB74x1P2S2QjE41M3HzG6DwY3gWL8KZwclc%2BNGP8ZHdO%2BZzC87I6%2FBjqkAekvSsOwfPR%2FZkCd9fY5csf2MGCepIQxi5knymPh6LsY6JNm86Uml59Q1NZ5tvTtaiuuASKbNqfkEKNVJTE2SGc1Wb0A5CEzZFAeuLkBmOPPdiHI2Vce%2F8iBxR%2BoZbXorQYZZdakK2U7OvlbFjZIpiYMD6lnnJ%2Bo7q5Ewfzy%2FnaxXPoay00z1gGPpT3DZBnQjCDTJZvv2Qwt4QfS8GEheBKSO9m%2F&X-Amz-Signature=be529d70f59ac8d54bb1660da5a8ed0f672af467edc6a682d6ab81ebc5490b74&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MEO3ZK2%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP%2BqIILTbHAWTIEkJ1LhLKLQIxSSVpDnYd1bZoCKj5lQIhAOZy3pFSK2DWdoi5cfJudykkBvo%2FMSiZYI7b1cXVrpPJKv8DCCkQABoMNjM3NDIzMTgzODA1Igw8%2B%2BkHz7dLi95qkvwq3AOBe4Jl6WM8O4vSyYDLg6EBOqIJ9YnJtbOEiNjok1nTMLTJf2Y2lao9xn0F7cA0fvVG%2FEqs8%2B%2BC51w9YmKd5QzA%2BL4qboSCQFhYjGy9KlFXzKVQPfy1IgyqHuy2c2zsCGuWA2MudNPPEAZJJumSltl8d2p9res2TFmlKdNkoiK6J%2BAXQruwTMIWRfZaoPGaue97BDz78%2ByrLrpkNuD6dVJUi4Y9A0mlt23eItePYo1JbQRtjTA4BDYDBnT2AYQprmXQZKQuCQHUdcefJ%2Bu%2FgTezO0jwYkCGOu9NQaGBa%2BlUKk3QIog8WhcDMTbNxwzC4TIYWNo6xDYkweWcuCGhoQx1ExRhFrJJZiAZDj%2FsH0JYhrwdErRZk9HFsmRqR%2FSm%2BaxtMckqKLYuMU1wHjAPWlyQWxPSS0nJaGsRvGrP%2FZF%2BVOMpgZTbxriBldzEWzWuRkYX%2FxndHYMGocbMAbCQlWxQ35GbYhiREapTj8et80Y8huz0n1FoMYq0Vc9DimhsJnTdmVNxnjXupODGDkinqH%2FWvDMzfgw0RrxdsmSGb2Wa2gkbYg%2BtAIeQ8Hkh45jvShaFKeZafK1fXPLAB74x1P2S2QjE41M3HzG6DwY3gWL8KZwclc%2BNGP8ZHdO%2BZzC87I6%2FBjqkAekvSsOwfPR%2FZkCd9fY5csf2MGCepIQxi5knymPh6LsY6JNm86Uml59Q1NZ5tvTtaiuuASKbNqfkEKNVJTE2SGc1Wb0A5CEzZFAeuLkBmOPPdiHI2Vce%2F8iBxR%2BoZbXorQYZZdakK2U7OvlbFjZIpiYMD6lnnJ%2Bo7q5Ewfzy%2FnaxXPoay00z1gGPpT3DZBnQjCDTJZvv2Qwt4QfS8GEheBKSO9m%2F&X-Amz-Signature=e31fcbaa473d891f7a5fc360f469cd31c335fdd282061bab1d6e1611caf95b0c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X37UQ6I%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnA1peUZX7ZsR9JRh1UnDnd8kdnkvt4HCGGPLofRSuDgIhAO9MmxFf2zxHqtpDhnTqjg5qp%2BjdHwAbojQbOn2GI1U6Kv8DCCkQABoMNjM3NDIzMTgzODA1IgyD4UiGnZQ3KOyKr4gq3AMlaMntahN4uRQY4HVHL6c%2B%2FTzWTAMav76AqFAcj0Xp7jcfXoRt%2BmtLhpdABfsbYbKjbBVXH2peYibXqMiH6blJp2SESsaW4BvPA%2FdxIvRZjiRPsMFZa4s%2FP2ntk9hEJ7orWzcboOPjQWIxsPExttSAN1A46jKOh3Zqd8BbbomePN3CefAb4cWMHZHPKqVu0EqCrdNY6DvuAgrwo1ODKOSPI8iXG5nVGvRxDOsKHlw7q09Ci6RO7ZZ4SUxE2wEWwLqTSWabw1xHrxsWNxF9IQuWM4VMlifL1xIecFfEnG3Zy3psjmInJEgYNiFQVpUXOhzcbMtBeQte3ucQ6rlYi7e8bgmJEMAI73fFdqTibSnIavxKjbRS%2BzEnoFkU5QSX%2FK0sYDJO%2BRxsBBBX5VdZVuzx9xW%2Fe6hVTINgRoV5E%2FXTgcL1VFu6Ni5nlcv2QCHa0nmH5futhvhAzTd1%2FfRBA80bHmDnnMlfI61%2Fk5QLWGa0vqqIK2phaSD5uLa5KFDebJc%2BGU03ymSaOBqY2KaxgQoEOTxv%2FII7NpY%2Bf3Lb%2B2tq6m1PVf18eTEF902VKt6jfqkxMiyzJc4urt2hxxte5gRofA2lnnfd37i32N1BuyvUBCp84qoUKM%2BNV6XnhDCT646%2FBjqkAW8SQblaIyqYXSzNbAIXbjjfAdb%2B3b8tMUek62AnK%2BtQOEBmEBxJ5fjZxjdnd3YaKQ91bHU5fZUf9Q5d2o7MGXPLTg2p63Nng3czqBszu%2BOojlU8Lu0%2FnxE%2BRd29%2FIL%2BoUOoMraE2Cgy%2FcA2mzOi5cWDzD2lDheLznKM%2BCDuhPQDiOOo4b3Zvlx%2B8ixWEHrYJC7ngf6NLe0WrIV5JyjHqWVkylh2&X-Amz-Signature=2bd0d0ad4e7cda0a6f9ebafe5488be74dbfb1551c3a08e143316361abb433020&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSD6NBT%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEw7SHGa6Mbwz5rRxnznpb2eYlmkzmxW1Ju2elcev3gvAiEAwgY0DdpKL259%2FB5qTDEk1u%2BWRKJJqkWtsNSzvrhCXvUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOVoG5Jlyz0oU3r2%2FCrcA58rV1GEza5UIDd64Vrv8wesiAU4FHtWDgAI0rBCjZbkHPKovzZjZWWnpTW2JN46yqY6gTBPvDF4ORgKbwOJQAlKot7wqOpMAYIha3y7vmX6Z1ITdgyZAQaQXW8Z0CrT1LF7qmYVnqlNlVj2JSEzjskYg8F8dzGRCpTcQGbLdoBRB4ZfbXWRtlub0RxqyXip2%2FvXQ7RYNl9%2FCpaTfR7eAZe5UTNCZ3fxBPak9%2FI%2FqLz2TVW6%2FOhw6fOyxGP3sJEMGB%2Fs5bOaTl86wN9FayseTyrga%2BJTxu%2Fx7dvcKNJSWhW5mvCMp89qV5OFEgTF30gmCFfPEXutD6geUX%2FkWwZUKLE%2BFxxe92StKRoIxxzzzIIJn3UFEABja9yaGif61tPncqbxdEqUf%2Bbr7L7MfCWaoEBpCoyWFsZluADtpvJOWTx97c5YbA9vauPHhb0FUfIra3fL4w%2BS7gun8qWTlI6SMKZCf7xMRTYJbIs9Gh6VBO0Imf19%2BT92g%2Fw1fX2ENTzAwPYi9%2FZwcEBjPR0Fhg1ZMNlrgMOojbFzALZsR64Id9fXcX%2FeY9MSJ%2BCwD7DB6hPmyKhtzsfdF%2B5VmRxmA%2BTwtDxEGHJgwB7oQmmOwxMygEHKbZ5c2DIF0ObdSgocMIrtjr8GOqUBcLV3FtjwEzeokc1U3L01LOwCmIDnV7J49hIPgmzgZKL8u9BuWfHg4qgBAHPypbPhOsA%2FLg7HgEiTqt9KA0BJf6IC%2FKbrsLw5Fk1Lf6y36LT20dt%2BdpbJJTFs42igADC765FSHSPhenN4KD8I%2FDjWIb3f5fsbb5HKsnErRQklS1jLDrhyzBBCl%2B3APPkpbrGV%2Bi9Fa9J5eA34NOwTyPwkU5zSF9jt&X-Amz-Signature=77b3e98516e7f8e531a1b90948d6ba2fd4faf5b7e1c4d24013b6e21853b3c239&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MEO3ZK2%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP%2BqIILTbHAWTIEkJ1LhLKLQIxSSVpDnYd1bZoCKj5lQIhAOZy3pFSK2DWdoi5cfJudykkBvo%2FMSiZYI7b1cXVrpPJKv8DCCkQABoMNjM3NDIzMTgzODA1Igw8%2B%2BkHz7dLi95qkvwq3AOBe4Jl6WM8O4vSyYDLg6EBOqIJ9YnJtbOEiNjok1nTMLTJf2Y2lao9xn0F7cA0fvVG%2FEqs8%2B%2BC51w9YmKd5QzA%2BL4qboSCQFhYjGy9KlFXzKVQPfy1IgyqHuy2c2zsCGuWA2MudNPPEAZJJumSltl8d2p9res2TFmlKdNkoiK6J%2BAXQruwTMIWRfZaoPGaue97BDz78%2ByrLrpkNuD6dVJUi4Y9A0mlt23eItePYo1JbQRtjTA4BDYDBnT2AYQprmXQZKQuCQHUdcefJ%2Bu%2FgTezO0jwYkCGOu9NQaGBa%2BlUKk3QIog8WhcDMTbNxwzC4TIYWNo6xDYkweWcuCGhoQx1ExRhFrJJZiAZDj%2FsH0JYhrwdErRZk9HFsmRqR%2FSm%2BaxtMckqKLYuMU1wHjAPWlyQWxPSS0nJaGsRvGrP%2FZF%2BVOMpgZTbxriBldzEWzWuRkYX%2FxndHYMGocbMAbCQlWxQ35GbYhiREapTj8et80Y8huz0n1FoMYq0Vc9DimhsJnTdmVNxnjXupODGDkinqH%2FWvDMzfgw0RrxdsmSGb2Wa2gkbYg%2BtAIeQ8Hkh45jvShaFKeZafK1fXPLAB74x1P2S2QjE41M3HzG6DwY3gWL8KZwclc%2BNGP8ZHdO%2BZzC87I6%2FBjqkAekvSsOwfPR%2FZkCd9fY5csf2MGCepIQxi5knymPh6LsY6JNm86Uml59Q1NZ5tvTtaiuuASKbNqfkEKNVJTE2SGc1Wb0A5CEzZFAeuLkBmOPPdiHI2Vce%2F8iBxR%2BoZbXorQYZZdakK2U7OvlbFjZIpiYMD6lnnJ%2Bo7q5Ewfzy%2FnaxXPoay00z1gGPpT3DZBnQjCDTJZvv2Qwt4QfS8GEheBKSO9m%2F&X-Amz-Signature=90f6558a4131049e0a813b3508a58eacfbc61c9f25bfe3804213a62df48bcbbd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
