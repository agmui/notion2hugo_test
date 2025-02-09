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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLSFI3XN%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkW%2B8tW%2B7f6zamyclx%2Bo1WczWiy7SJqw6dgG7ls1FciQIhAJNKBw%2FjMU2NTv7c%2BU6JMFq7PQQaC8TZLoLQtjyND9nnKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPpOFmteicH%2Bm7iYUq3APhWpDKRi9TYwKRubn8FfG8n06JfcvCScEkz2MF2KGipLneaENPKdaMqM69SuYgvnBZ8X5xAXfltL%2FQBK25XDp2bySvoEpbZKlRxyi5ERUCmdLWYhtpcAtKA9BkznEsf16hyoG10EiuigGd%2FGCkTZBPBweSbs82yYLw%2FPndua%2Bo7CvgSr0XSO7URGsLf3Gu9HGPGZKqDsesTx5ZfqWGouULtDUvcsvswl6zOz5EYNy2%2FDabqDsHPjYe2A8%2BGUyTxinD2%2B5JFnMzM93ZPDzzzGixWEKbryoqMPQaCMjAFhULQELNl3yWS2MH7aYQz61HWNQ7o9BKKqD21Mgo3RhQ1OISFPZU46WTillAkgjflUolZnsqYGzKaova93LFAtdDEDzpYxK1GbA%2Bm5zTWnMyL9QwD7PA%2FVZD21bV4oQWXCcqyHDKI3qIAlIyDVPWFt3bwzrXfFo8ILPIit7DBs8B3T%2FWaFO5qhd5tzZQTPinU2NE240%2BbFNFdW0aI2YcxhIUUmfVaCtxVNoVgPZffRk0z7qnX3IyrH49tC87vz%2FhrqgwmLbwCtloNy4YZ1BaUbL5Piadblz6rWKROMahLkl3SbgsJ11fJkctTyj72G8iCk2m4rsrjFlzvCSvBuBx%2FzDAvqC9BjqkAdiZ288bqdSgzlAMaiyGfQFyi8PlMUaQvzrsYL0KnKD4KqXCAe7wjznQyj0vFnFeFbCrrDpE6gcFAH57z5BZqCLj6ZzWmGeP8EqVAyWkcYs3775EsaHYCVjh%2FlYKzriOINKpV2movyLUDnm90g01NQBAU%2BQ%2BoICvOjylqx%2FXPDjWeFiWqjc9GB2ERo9Zkf8Q5SVDFcRX%2F4GiLHaugX4TW6tbOop3&X-Amz-Signature=a58f4f46c4ecc172a983902aca7541fdd4ff99eaff0bae839fb33a95067b2cfb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLSFI3XN%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkW%2B8tW%2B7f6zamyclx%2Bo1WczWiy7SJqw6dgG7ls1FciQIhAJNKBw%2FjMU2NTv7c%2BU6JMFq7PQQaC8TZLoLQtjyND9nnKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPpOFmteicH%2Bm7iYUq3APhWpDKRi9TYwKRubn8FfG8n06JfcvCScEkz2MF2KGipLneaENPKdaMqM69SuYgvnBZ8X5xAXfltL%2FQBK25XDp2bySvoEpbZKlRxyi5ERUCmdLWYhtpcAtKA9BkznEsf16hyoG10EiuigGd%2FGCkTZBPBweSbs82yYLw%2FPndua%2Bo7CvgSr0XSO7URGsLf3Gu9HGPGZKqDsesTx5ZfqWGouULtDUvcsvswl6zOz5EYNy2%2FDabqDsHPjYe2A8%2BGUyTxinD2%2B5JFnMzM93ZPDzzzGixWEKbryoqMPQaCMjAFhULQELNl3yWS2MH7aYQz61HWNQ7o9BKKqD21Mgo3RhQ1OISFPZU46WTillAkgjflUolZnsqYGzKaova93LFAtdDEDzpYxK1GbA%2Bm5zTWnMyL9QwD7PA%2FVZD21bV4oQWXCcqyHDKI3qIAlIyDVPWFt3bwzrXfFo8ILPIit7DBs8B3T%2FWaFO5qhd5tzZQTPinU2NE240%2BbFNFdW0aI2YcxhIUUmfVaCtxVNoVgPZffRk0z7qnX3IyrH49tC87vz%2FhrqgwmLbwCtloNy4YZ1BaUbL5Piadblz6rWKROMahLkl3SbgsJ11fJkctTyj72G8iCk2m4rsrjFlzvCSvBuBx%2FzDAvqC9BjqkAdiZ288bqdSgzlAMaiyGfQFyi8PlMUaQvzrsYL0KnKD4KqXCAe7wjznQyj0vFnFeFbCrrDpE6gcFAH57z5BZqCLj6ZzWmGeP8EqVAyWkcYs3775EsaHYCVjh%2FlYKzriOINKpV2movyLUDnm90g01NQBAU%2BQ%2BoICvOjylqx%2FXPDjWeFiWqjc9GB2ERo9Zkf8Q5SVDFcRX%2F4GiLHaugX4TW6tbOop3&X-Amz-Signature=5b78161f959fa6c7cd2e86768134a05530ddfe06d4e8e2857546491b1da508b3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNEGNGKB%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQ58EJG2J9tOpuh9iIDfKxn%2B2uwrAvAXaXjgusOQAU7AiBrzaFutFniPqa7Y2Xz36vWjYqj5rpLu3RO3Y3O4cgm5yqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMazIXUQgCNq7bPo1rKtwD7eqxf4p8%2FOBAy3q6JAD0ztSue86OogVIuvDTtTcp6z5zEfKd%2B3jR%2FrJkpMa0RBe7xfUfvvIcsvlJEpEwNg%2FzJt%2Fl2Jq%2FgE2FcL4nPTl8yMzwPQSjQ9Cu7xm9cc6WdYgM1VKpTElCUboEIUISeG8%2BxMAGgxZxD8jX6Bzl5XGaOlN7FAW2Jdvrpmh2BApw54C%2FKr937fjgY2Am9DxncUQSyBEcSgJvPS5%2B2Wm1JKemGt2Rwrx%2FJS6wEFbmLiZIQztxxIGIYxsoKlQHG3jstXRsi36WQmVXuagfI0ReueeyR3KL0K1p6pzCZ2slsNwdmjNDcOoH7L6%2BlQFqXz9nsuZmf2MSANJLAvkobMIFbg228SaTU3altOnvSihADsQKx5SGty8xZPzokH2edvgypVbPx0M4DwoxjHrXvlJRUNh0mIKljzvlEZWtOBLb%2F2bKVbfH98nCVHHRs53vmO2oKk4TiUmWY%2FdKlq%2Bx%2F%2F8pQKv%2FiC6cylv36U3IzwdhQcAkSFe%2BUZH3SU14yGocTIfANJj7ik6JYGrd8EzzDe5XbIUqbjbk5PkdAw43XqpMDgjkhSCiGuNd%2FNxp23rmFFUbYF12YFtUgDFFJR1jsv1GR7kZAaYRA8mrAUIMERrzxN0w676gvQY6pgGYsEb%2BQR5o98257QVDUfdY%2F4PziOf2%2FXkX4bdX35qXG4xyk5c0VIM5ODNZlq7hnMD5W3d4EyWDhnAMev5Uojn5LdUq%2BQPuMJzswnxBNtrOAoS%2B8KdJ7SPyLpZXLhOcPSwgTUNHRCjp61BkkqnMQtib14VpZBoL28Tr7PdnlunuwevY%2BEUMgi2OV521ZMDxcv%2FCMFzKgZl9Wa7h8xaVyTPtgUJYF4v3&X-Amz-Signature=8c667c4ef754e3291262d496e0377074bfd5ea9216ffd97b70222cd637776aef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RELITJEY%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC18PYHiEtCYJNQ%2BqmzAUAYnidMk4bYiLhVKk2g6eliogIgDXXkvFC9joW7DdSZC9cGu1bcwt6OsJ8bOGRGwKSL%2FksqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAumngCFXOsynccpzyrcA8RDz9uOHW8t66ZvEMdJy6tpwFSMFgMX5VSABVSFXjSye98Xg9JPf9zsNajJrINu8GXkiKyElUskqevoz4CbCZZKAGAVd8OcCRlbK65uJCYdLsqxJp9xc64khDalcE4bvskxosVqwXJCy7i9uOcrV13mMALj83FHGSvCBNVXWynvxQS9VJ0K9Q0gwXNGfQ6G1kjLkp4q4zfAsKGMvqmO7QSkmWVqkMnBOfn%2BBGKQSgRIlKZ8We720lW5wAJ5jy8R%2B6asIEf67Yzz5z%2FLJFZqA4RP3GVdRGT9VLhfVC07aa8fFV44qyy5zUquQUl%2B5rrBcMcAiyM8hzzWKj0BHrfNqb%2FfCtMc5Hfr4qoyXAOvuf%2Bp7xBri6vsjVBEb2wWj2RMxCTCAzFVrA3gzhkWES8uaSc0jQtiDqmtuyMW3WboLSptYgQLP0WGfk9osLpBuwHrklcb9VHYv32vqOdN81FCPJ4831xhGNcalr9n3RcnUur%2Fm%2FQY4D9X4WUnO2qAgG9LiKzlSOirPnm2pgNfq64CyYkBvBGW1kdAplQgb0498WwCpXPUr0ndQPywe8gR3mgUS%2BAS%2FQa13mOnaWSUzWP6YdfQhFCHqTuPs%2Bx2GMr4NzFAIP12aW8CF6NeJEyMMMS%2BoL0GOqUBMrPNeJk57zJ1BURw7L6U0yiueiXWnqxEQV%2BZIFyMsBmkjohlWG6wNetETKnr4EE%2Bm6i6jHk70miizy9X3NJ1BypLNGcQm%2BzT4z5fKz32KWTASTRgeycmQcnigGfDRX0xZw1HWigwRBiFvKwjgvyjcPDmiySUFVaJIIPwZHySrgjexf%2FGwbjZdr92He4ynKonhqTSUJ%2BxhlF%2B2NCRadi2r4ce58YJ&X-Amz-Signature=6005e6e8d8f0f815ca942197279958e8002968202324ad56eb0f9302a2931857&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLSFI3XN%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkW%2B8tW%2B7f6zamyclx%2Bo1WczWiy7SJqw6dgG7ls1FciQIhAJNKBw%2FjMU2NTv7c%2BU6JMFq7PQQaC8TZLoLQtjyND9nnKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPpOFmteicH%2Bm7iYUq3APhWpDKRi9TYwKRubn8FfG8n06JfcvCScEkz2MF2KGipLneaENPKdaMqM69SuYgvnBZ8X5xAXfltL%2FQBK25XDp2bySvoEpbZKlRxyi5ERUCmdLWYhtpcAtKA9BkznEsf16hyoG10EiuigGd%2FGCkTZBPBweSbs82yYLw%2FPndua%2Bo7CvgSr0XSO7URGsLf3Gu9HGPGZKqDsesTx5ZfqWGouULtDUvcsvswl6zOz5EYNy2%2FDabqDsHPjYe2A8%2BGUyTxinD2%2B5JFnMzM93ZPDzzzGixWEKbryoqMPQaCMjAFhULQELNl3yWS2MH7aYQz61HWNQ7o9BKKqD21Mgo3RhQ1OISFPZU46WTillAkgjflUolZnsqYGzKaova93LFAtdDEDzpYxK1GbA%2Bm5zTWnMyL9QwD7PA%2FVZD21bV4oQWXCcqyHDKI3qIAlIyDVPWFt3bwzrXfFo8ILPIit7DBs8B3T%2FWaFO5qhd5tzZQTPinU2NE240%2BbFNFdW0aI2YcxhIUUmfVaCtxVNoVgPZffRk0z7qnX3IyrH49tC87vz%2FhrqgwmLbwCtloNy4YZ1BaUbL5Piadblz6rWKROMahLkl3SbgsJ11fJkctTyj72G8iCk2m4rsrjFlzvCSvBuBx%2FzDAvqC9BjqkAdiZ288bqdSgzlAMaiyGfQFyi8PlMUaQvzrsYL0KnKD4KqXCAe7wjznQyj0vFnFeFbCrrDpE6gcFAH57z5BZqCLj6ZzWmGeP8EqVAyWkcYs3775EsaHYCVjh%2FlYKzriOINKpV2movyLUDnm90g01NQBAU%2BQ%2BoICvOjylqx%2FXPDjWeFiWqjc9GB2ERo9Zkf8Q5SVDFcRX%2F4GiLHaugX4TW6tbOop3&X-Amz-Signature=1e7f0590e3177fadb67a3ceba12a0dfe62dbb9b6b1ee7569351c31a300ee26cf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
