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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBP32KUK%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtaHUxF7qsljfmUNrmvOLh0LmSJyVsIyOS8D1J5cQSegIhAO1Dxp2MPyNGZSYRG4sEF3ZOfgJeLeIP85twONBGoPLnKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuppUjA2R1QsM6U%2Fkq3AMazVspGF87yO8mG5fy4emhBA55d3bXk6bPerm%2BI3wipTI7fAONvPoHIzKfXwd%2BFMnpC3smYcBp4r8ve59QEgbPYXUrYWCrsTJfU%2F8FPtHr1TFDueUR5BZNhL9LnVEtpwxKFs0NCbNHc%2Fx%2FG4B9iTiuiZk6%2FdwbfjhX3X2PpxxgMJYcv3KOUW2Nmaup0qeT4dnl0bRhX9h9Cip9px6i7JqyD6lQlzsfl%2FqCwVqtcsV8cJ5uRjrLfX3kj7aB7oHqraitVzyHaCr1XhjbY7X%2Fv3Hqe93rTaAqyqE9EBaTtG5t67BQ9PEM80RbfuBbdvBpkXV1VPVmKs61FCfoGmXk8WK88kCTyVbvwqE3l1K4oNUb5eIWTigjMTxJBVibPoPf9CAaG8bgUc8DAa0NGsQydp3QRzgEKz2yL7vX4o3c7CIubX1QAsSG5ZPAWNR7ud45PcfqvlED0XQvKfRvOm7q9zPfeEP9o5%2FrnCa%2BYip3pEIbrVuErKo3a%2FZZKdKVKnVinvbic6WJOtGLhE7hs10uXsjB%2FcAWjkFloPRR9FoHG1QZ5XvG923Ysa3goS4RSzxqKiyBww%2B5%2B8N4A9MX7g56bp1vWVV9%2FHUf%2FqOEeYg2zlh3bt%2FHgNepdPZF6atv9zCpkP%2FCBjqkAeRsbqHC1suO3LgtZho8XoP2pIIYg3fM3JC9i%2BjL7QolkHdt9KKBcvpyGOE1dpafnfjuhJWGN3E5DuWAvJUxW1CSFsb7bN1mGQ4Q39eRBVbE7r3hdnvJxlCbT4CfQb90HW9ExaIOH4yx%2FMUMS4tf8Reqeg%2BSiuu8%2F41L21e6wrggtUJuf%2FLUnWMQNKaKPetYUN2OTF2Pu006f38bjYtb727KIYIP&X-Amz-Signature=c8a9007240fad9194c4fe2503b41d7ee2c89a87075c07913dadbc2105724786e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBP32KUK%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtaHUxF7qsljfmUNrmvOLh0LmSJyVsIyOS8D1J5cQSegIhAO1Dxp2MPyNGZSYRG4sEF3ZOfgJeLeIP85twONBGoPLnKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuppUjA2R1QsM6U%2Fkq3AMazVspGF87yO8mG5fy4emhBA55d3bXk6bPerm%2BI3wipTI7fAONvPoHIzKfXwd%2BFMnpC3smYcBp4r8ve59QEgbPYXUrYWCrsTJfU%2F8FPtHr1TFDueUR5BZNhL9LnVEtpwxKFs0NCbNHc%2Fx%2FG4B9iTiuiZk6%2FdwbfjhX3X2PpxxgMJYcv3KOUW2Nmaup0qeT4dnl0bRhX9h9Cip9px6i7JqyD6lQlzsfl%2FqCwVqtcsV8cJ5uRjrLfX3kj7aB7oHqraitVzyHaCr1XhjbY7X%2Fv3Hqe93rTaAqyqE9EBaTtG5t67BQ9PEM80RbfuBbdvBpkXV1VPVmKs61FCfoGmXk8WK88kCTyVbvwqE3l1K4oNUb5eIWTigjMTxJBVibPoPf9CAaG8bgUc8DAa0NGsQydp3QRzgEKz2yL7vX4o3c7CIubX1QAsSG5ZPAWNR7ud45PcfqvlED0XQvKfRvOm7q9zPfeEP9o5%2FrnCa%2BYip3pEIbrVuErKo3a%2FZZKdKVKnVinvbic6WJOtGLhE7hs10uXsjB%2FcAWjkFloPRR9FoHG1QZ5XvG923Ysa3goS4RSzxqKiyBww%2B5%2B8N4A9MX7g56bp1vWVV9%2FHUf%2FqOEeYg2zlh3bt%2FHgNepdPZF6atv9zCpkP%2FCBjqkAeRsbqHC1suO3LgtZho8XoP2pIIYg3fM3JC9i%2BjL7QolkHdt9KKBcvpyGOE1dpafnfjuhJWGN3E5DuWAvJUxW1CSFsb7bN1mGQ4Q39eRBVbE7r3hdnvJxlCbT4CfQb90HW9ExaIOH4yx%2FMUMS4tf8Reqeg%2BSiuu8%2F41L21e6wrggtUJuf%2FLUnWMQNKaKPetYUN2OTF2Pu006f38bjYtb727KIYIP&X-Amz-Signature=cbd1708a1234b9252608582049d8f1de7dd6234df54a3b6d09fc589ed353d6aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBP32KUK%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtaHUxF7qsljfmUNrmvOLh0LmSJyVsIyOS8D1J5cQSegIhAO1Dxp2MPyNGZSYRG4sEF3ZOfgJeLeIP85twONBGoPLnKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuppUjA2R1QsM6U%2Fkq3AMazVspGF87yO8mG5fy4emhBA55d3bXk6bPerm%2BI3wipTI7fAONvPoHIzKfXwd%2BFMnpC3smYcBp4r8ve59QEgbPYXUrYWCrsTJfU%2F8FPtHr1TFDueUR5BZNhL9LnVEtpwxKFs0NCbNHc%2Fx%2FG4B9iTiuiZk6%2FdwbfjhX3X2PpxxgMJYcv3KOUW2Nmaup0qeT4dnl0bRhX9h9Cip9px6i7JqyD6lQlzsfl%2FqCwVqtcsV8cJ5uRjrLfX3kj7aB7oHqraitVzyHaCr1XhjbY7X%2Fv3Hqe93rTaAqyqE9EBaTtG5t67BQ9PEM80RbfuBbdvBpkXV1VPVmKs61FCfoGmXk8WK88kCTyVbvwqE3l1K4oNUb5eIWTigjMTxJBVibPoPf9CAaG8bgUc8DAa0NGsQydp3QRzgEKz2yL7vX4o3c7CIubX1QAsSG5ZPAWNR7ud45PcfqvlED0XQvKfRvOm7q9zPfeEP9o5%2FrnCa%2BYip3pEIbrVuErKo3a%2FZZKdKVKnVinvbic6WJOtGLhE7hs10uXsjB%2FcAWjkFloPRR9FoHG1QZ5XvG923Ysa3goS4RSzxqKiyBww%2B5%2B8N4A9MX7g56bp1vWVV9%2FHUf%2FqOEeYg2zlh3bt%2FHgNepdPZF6atv9zCpkP%2FCBjqkAeRsbqHC1suO3LgtZho8XoP2pIIYg3fM3JC9i%2BjL7QolkHdt9KKBcvpyGOE1dpafnfjuhJWGN3E5DuWAvJUxW1CSFsb7bN1mGQ4Q39eRBVbE7r3hdnvJxlCbT4CfQb90HW9ExaIOH4yx%2FMUMS4tf8Reqeg%2BSiuu8%2F41L21e6wrggtUJuf%2FLUnWMQNKaKPetYUN2OTF2Pu006f38bjYtb727KIYIP&X-Amz-Signature=40d76bd9434e6f85ba663f1c964f042ba42fe7ea551a911fda32affb5acda5ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNTJIG4G%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFRjx2SioIKRoo%2Bf0w%2BMWvIUbii4yHJ9p5vnu6m4E1JwIgELw%2BpOO0%2Bcv8qxj4BMCt0ROO2rbeSCyOhmfTDhXwF7sqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOrOIJjsfUUUEB84ircAyTYDfdep3gpJcwyc41ILMyem1fvNhWxTw87ZiugWQ0a7uuh36p2jzK84kGrRZjhCJQ81uGCcjJy1BhvQtGofYCrPItEGdE6ihiDBKt0ExceMj8J%2FDTZ4QtW3%2B3vD5zyGfa0e%2FftQqr6KRYv9N%2FRzU3Y0rqs5%2B9Sbeeqr7xK8FAmvw5gLz5vlN%2FLYRBMyWD3ZVUolNGZUAD0tY083unW1jzwTTzOs4Mhyf%2BYABT9j0GNYLCGJ%2FM8Z0QhMcpY%2BxjHFr301wW2mS0OtkrIooWxfv%2F68KlGSE8A178giyQ%2BVmofza560uYgYr0kOKbg9cPfFaH8j1cd2A5SYTKK%2FuS5cV19No0AN2tIV6CjathgleMd13gCB2nW4r1jU526UL%2FuFS8kbpiR5x9UKtyIv%2FVkSeJVqzKm%2FP6h1fBRjhHhGKvzrRAN1k76O5w6sWHPADUt55LLsjklSZ9S7H4ojQsi9vYygpslREEil10yhAfa9nhfClYlO9H6NTTKkAh%2FIn0B66nN4w19ONRJwJHl4Zv1LWe09BxRmTf%2BBER8Ft2JxHAA%2FvHzQz2rvhdUEDfBTCXiLsFT5MyXbhdbuxNCDwAwvboxn%2Fp660j3yKXm4C%2FQYNH6VeRYloTEO7BimBK7MPiQ%2F8IGOqUB2jw2Xe4uk53ygBCv9x2TwwnN5OQHhy03wTGoe36djwABeeSaMLOU6HYjKvWu3iZ78%2FtbnmPi6d4qAvoXXD5qZDpyU2Blf%2FqEugYTeFb3xdRJXyu7DMdnDccuAZLCjkNhNaSCIkh6Bz6gr3n1Ms0E6WNEiIeyYgcwx9fpuo9L7f81XUCCjEZ8qaPz0CW5nxcmOGnQsC7fexYfD1iqSt83dysXC%2BIy&X-Amz-Signature=c0d53e486d8d37132fd6d997edfa67ba389b5bbcf431e9913ef4c6e53418eb9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635YPEWQ5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp1LygNDQqb%2BvXC6fXmtwnUYXoM%2B5h63SYjza%2Fsk1apQIhAOmYv4tnT0i8JelUxJdkkyCkLT6ZBgin5Y6e%2F8MFxyukKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2GwiLP9%2FrWpu8aukq3APrwvXkwJHBYGQI47nnQYXyzw8zOnQ5uCjjwOBGaE013SQAlm6jGsTlGg1ZMv6eSBOQO%2BbNiiCR0r2UpsSJt7m%2FU1Lvj%2FyPxPhCBlH3dTaBGlOwYYNmags%2BgSvNDxX6ligPF9gLAFkN%2FZEMh8v4GetGg8xq%2FbXt6NbMEVK0XdqbzSudd60zODPl4LI1H1r%2Bk0K%2Bmv1OqcBxJMfY56ckE2P0F1lcecwY%2BmwwfbnIf8H12ULrK1ScnD5FEvYYxEFZIaY6lD6KjMn3G6b3bsfb7yiqTL4U8wjNUuPHO161C0WGkunuBLzjjjkJENDISgHbMHowPvNFwxws3xUXROQWQ%2BRSj0s19aCp1PDY2zw697zqhD8eBY6m%2F6P6mv4xAHanIWFyItlCXZmWbGg%2BIS0oOCdFsAYF%2Bata1TjO2928LACvKeqZx1XS7QGivw0grSg5Kpg3Jw7L7GtJw8%2BxKZj%2Bzk3Ng5KA5T0ke0%2FAC7UNd9qjQrkQiCm%2B5kifYCkP0AWolS15gpH6%2Fah9UcWSN%2BkDIr1dMC6RoobCLH6WfopsMPDpgQ4ZmJbFyymnjO1bxzOdXXt1qHQbGIgHFpyTaDB5w0dtndPi86uGWy4jhr5%2BLM6sBPELtK9TYRzzCUEuMDCxkP%2FCBjqkAZHBUx3Sm8BaQb%2FiAi3lZMHOeeg9b4cUeoKp%2B2d%2FlildnHcDQ3fZwxk8LY2SrQcgx%2FzZRnbbprQdK9LVkD17SEvioqQrUrOuWL%2B6mnDDtDle3AJhNbLKldomVF%2FGzJaK0pv%2Fdn8Zs4K8YrFwiRDnIc0mR20n6Ie4mn9rdHEAyK5vyG%2BjZJ3dajXVaGsDcxq2g8a8WH2LgznoXJOIGkNlYpNp8TlX&X-Amz-Signature=0666a9f1b6bb9d6630f957d5d0e2a0ab11d989ebb7b6ea72eb954d14ccd9b1b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBP32KUK%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtaHUxF7qsljfmUNrmvOLh0LmSJyVsIyOS8D1J5cQSegIhAO1Dxp2MPyNGZSYRG4sEF3ZOfgJeLeIP85twONBGoPLnKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuppUjA2R1QsM6U%2Fkq3AMazVspGF87yO8mG5fy4emhBA55d3bXk6bPerm%2BI3wipTI7fAONvPoHIzKfXwd%2BFMnpC3smYcBp4r8ve59QEgbPYXUrYWCrsTJfU%2F8FPtHr1TFDueUR5BZNhL9LnVEtpwxKFs0NCbNHc%2Fx%2FG4B9iTiuiZk6%2FdwbfjhX3X2PpxxgMJYcv3KOUW2Nmaup0qeT4dnl0bRhX9h9Cip9px6i7JqyD6lQlzsfl%2FqCwVqtcsV8cJ5uRjrLfX3kj7aB7oHqraitVzyHaCr1XhjbY7X%2Fv3Hqe93rTaAqyqE9EBaTtG5t67BQ9PEM80RbfuBbdvBpkXV1VPVmKs61FCfoGmXk8WK88kCTyVbvwqE3l1K4oNUb5eIWTigjMTxJBVibPoPf9CAaG8bgUc8DAa0NGsQydp3QRzgEKz2yL7vX4o3c7CIubX1QAsSG5ZPAWNR7ud45PcfqvlED0XQvKfRvOm7q9zPfeEP9o5%2FrnCa%2BYip3pEIbrVuErKo3a%2FZZKdKVKnVinvbic6WJOtGLhE7hs10uXsjB%2FcAWjkFloPRR9FoHG1QZ5XvG923Ysa3goS4RSzxqKiyBww%2B5%2B8N4A9MX7g56bp1vWVV9%2FHUf%2FqOEeYg2zlh3bt%2FHgNepdPZF6atv9zCpkP%2FCBjqkAeRsbqHC1suO3LgtZho8XoP2pIIYg3fM3JC9i%2BjL7QolkHdt9KKBcvpyGOE1dpafnfjuhJWGN3E5DuWAvJUxW1CSFsb7bN1mGQ4Q39eRBVbE7r3hdnvJxlCbT4CfQb90HW9ExaIOH4yx%2FMUMS4tf8Reqeg%2BSiuu8%2F41L21e6wrggtUJuf%2FLUnWMQNKaKPetYUN2OTF2Pu006f38bjYtb727KIYIP&X-Amz-Signature=53332f03ea681f7d54929ff87998c1e028ff63978cbae854b32f773b55a84ae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
