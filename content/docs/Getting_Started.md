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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4PRPIHI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeiPlGcnXUWWhmZqFYw92I4kFso4E%2FbxxgLgmWzU4HhAiEA6CtHkf3oE3GinFM%2FRRj4f0XgV4hZB5CtRBD83xDbK4sqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJS%2FgFYUPWTXOb0etircA0P43zJ9RwSwdVyvxrHUb%2BoWHYVm5uf51Ud7HOC6Wdhifmz28CfaECvqhEfkOUo11OaSeVYezx5nqN%2BR0DDQiZbLIgO7PU7w%2F8DuEUAVKVZfqtDihtR%2BKglZDkS4nJFmarAhJ%2Fm8FvNeQup51NPiPKI%2FSijAwZewHGg44eRtzVk6SX1mrFH%2BjTYXFDaEggjdhx7I6kF%2FGJLySFKL5bVQphi81VOe3bf1kVVR1TCR%2F9KXyhW36brUfkRMJBL%2Fiu%2FwcSKZGZeT0Jw8Ybeo%2BS3YksLaByumuDiiQ11oTIjf26JRagklGVO2dF%2FFr375CyB9T4GMCu%2Fu31LSSjT%2FychJM4s7J7zUYdkg56pXFl9tuZ%2FPI2ykspIx7g8FWqdts%2FgEhBggcHfHeKh1in41oURdfc9N9MZBdro%2B5DEX%2B6jpkkn3Ysl%2FgcdmZwlA1QqGywQux0OM7iPeLa82p9SlqtWZvgWz5VoghR%2FzzERQqQ0vReGp3XNkLM9L4Y%2FuxeHOKevrdjhE2xaFSWg0k5ZbSWrzTsUOt9IB8aSi92cwRm2tsvgIQf70u8%2F4ymHVocWyVNTux8IFaJ0huLaanwA6Jvse2k3jyNRUcfwuXHfYvbI6Wlw1pHjdbdQjAxZPwGoNML2648QGOqUBNtTdW5BUBHIGbK1ekY86eB1GtOej1WEe7p7HI3c7FRDEsMLuz5AoMOwemQiV1hbrCEJCHBWWUtUSVPjXfb0187kP3pQu9tIh1%2BRrl54Tym%2F6X4ozVvriJIULUgro1wE0msfy9GvtTYDZz2kgSYEjXdUq16Dw%2B3O3L0h2o6A8GxuIC6YbjPfh3V6HS5caPRbztA%2Bkyrpkl8Tdp7oeu114TLP4cJ%2Fh&X-Amz-Signature=69f20ad4112244707c5585cc70b20851e7b91f94f57384ff8473c88965fbc90e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4PRPIHI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeiPlGcnXUWWhmZqFYw92I4kFso4E%2FbxxgLgmWzU4HhAiEA6CtHkf3oE3GinFM%2FRRj4f0XgV4hZB5CtRBD83xDbK4sqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJS%2FgFYUPWTXOb0etircA0P43zJ9RwSwdVyvxrHUb%2BoWHYVm5uf51Ud7HOC6Wdhifmz28CfaECvqhEfkOUo11OaSeVYezx5nqN%2BR0DDQiZbLIgO7PU7w%2F8DuEUAVKVZfqtDihtR%2BKglZDkS4nJFmarAhJ%2Fm8FvNeQup51NPiPKI%2FSijAwZewHGg44eRtzVk6SX1mrFH%2BjTYXFDaEggjdhx7I6kF%2FGJLySFKL5bVQphi81VOe3bf1kVVR1TCR%2F9KXyhW36brUfkRMJBL%2Fiu%2FwcSKZGZeT0Jw8Ybeo%2BS3YksLaByumuDiiQ11oTIjf26JRagklGVO2dF%2FFr375CyB9T4GMCu%2Fu31LSSjT%2FychJM4s7J7zUYdkg56pXFl9tuZ%2FPI2ykspIx7g8FWqdts%2FgEhBggcHfHeKh1in41oURdfc9N9MZBdro%2B5DEX%2B6jpkkn3Ysl%2FgcdmZwlA1QqGywQux0OM7iPeLa82p9SlqtWZvgWz5VoghR%2FzzERQqQ0vReGp3XNkLM9L4Y%2FuxeHOKevrdjhE2xaFSWg0k5ZbSWrzTsUOt9IB8aSi92cwRm2tsvgIQf70u8%2F4ymHVocWyVNTux8IFaJ0huLaanwA6Jvse2k3jyNRUcfwuXHfYvbI6Wlw1pHjdbdQjAxZPwGoNML2648QGOqUBNtTdW5BUBHIGbK1ekY86eB1GtOej1WEe7p7HI3c7FRDEsMLuz5AoMOwemQiV1hbrCEJCHBWWUtUSVPjXfb0187kP3pQu9tIh1%2BRrl54Tym%2F6X4ozVvriJIULUgro1wE0msfy9GvtTYDZz2kgSYEjXdUq16Dw%2B3O3L0h2o6A8GxuIC6YbjPfh3V6HS5caPRbztA%2Bkyrpkl8Tdp7oeu114TLP4cJ%2Fh&X-Amz-Signature=df98bd59e7324e1c4d0e9b184a875c7a4208a70e1d34b4ecc8cc890c9909202b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4PRPIHI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeiPlGcnXUWWhmZqFYw92I4kFso4E%2FbxxgLgmWzU4HhAiEA6CtHkf3oE3GinFM%2FRRj4f0XgV4hZB5CtRBD83xDbK4sqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJS%2FgFYUPWTXOb0etircA0P43zJ9RwSwdVyvxrHUb%2BoWHYVm5uf51Ud7HOC6Wdhifmz28CfaECvqhEfkOUo11OaSeVYezx5nqN%2BR0DDQiZbLIgO7PU7w%2F8DuEUAVKVZfqtDihtR%2BKglZDkS4nJFmarAhJ%2Fm8FvNeQup51NPiPKI%2FSijAwZewHGg44eRtzVk6SX1mrFH%2BjTYXFDaEggjdhx7I6kF%2FGJLySFKL5bVQphi81VOe3bf1kVVR1TCR%2F9KXyhW36brUfkRMJBL%2Fiu%2FwcSKZGZeT0Jw8Ybeo%2BS3YksLaByumuDiiQ11oTIjf26JRagklGVO2dF%2FFr375CyB9T4GMCu%2Fu31LSSjT%2FychJM4s7J7zUYdkg56pXFl9tuZ%2FPI2ykspIx7g8FWqdts%2FgEhBggcHfHeKh1in41oURdfc9N9MZBdro%2B5DEX%2B6jpkkn3Ysl%2FgcdmZwlA1QqGywQux0OM7iPeLa82p9SlqtWZvgWz5VoghR%2FzzERQqQ0vReGp3XNkLM9L4Y%2FuxeHOKevrdjhE2xaFSWg0k5ZbSWrzTsUOt9IB8aSi92cwRm2tsvgIQf70u8%2F4ymHVocWyVNTux8IFaJ0huLaanwA6Jvse2k3jyNRUcfwuXHfYvbI6Wlw1pHjdbdQjAxZPwGoNML2648QGOqUBNtTdW5BUBHIGbK1ekY86eB1GtOej1WEe7p7HI3c7FRDEsMLuz5AoMOwemQiV1hbrCEJCHBWWUtUSVPjXfb0187kP3pQu9tIh1%2BRrl54Tym%2F6X4ozVvriJIULUgro1wE0msfy9GvtTYDZz2kgSYEjXdUq16Dw%2B3O3L0h2o6A8GxuIC6YbjPfh3V6HS5caPRbztA%2Bkyrpkl8Tdp7oeu114TLP4cJ%2Fh&X-Amz-Signature=78cbe83c396864b03454a0aeded2e94a1d5fb11dd93ecf74bdcdd16312bfc726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JLYGUHH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFr%2F%2FknEvYCtsJ4AY0xacgs3bEPkZFlVTezv%2BQ3YTfdoAiEA%2F8ewWkxJLTYOKk2hZFH593DFLNu%2BYDN5UVutqCUCAIkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtRM7R93%2Bgl614FeircA0VPo%2F3zWbc2XF1dFByR1TilBk0HnEvDeBF9rJaEblcq2B4SRse6jkIfDsK%2FTBcZmR3p5QaNC1FmYEbsbQSpU3y9tNgH6s8Y%2BB4Up3dOwPrnbO99fNF2qG2Fqi9n3nqTCGdhFuoTqSyFlxqMsWHH1A7lBnjXrGN52LcFQoD3aElir5RTumLEtuG0aSOlEavrEiON0afeFxz9bk966caW6bRT08nQUrw5goKtWZON3cuRs%2Fld982hS2dvZFWzUoYpzKczB90nmWME5edRHvgomqmaitaP4TWAJU4N7C7%2BF7dDNX9G73TW12KKyH4rQs8T%2BU%2BgoHDPoYo3aFm4rRJP%2Bka2EeThf4TjoA5AZrIYZE8SuVtbUPCgrYS4GLUBGGARK7YZIKsiuMb%2BOzvvz44rWzatFfGH4qGlcbY%2FqJVsHjTEC%2BEKICIk7G8Ze1N6eb8BCQGIPpQim2jzpFkt88tM%2BcUhk4ctC0StE8H3nyWh8iwfilbVa8Uw3eD2udrdXqNV1feKkIA6zSzItOCOkOPXpT%2FFAmeBbSXidmL2pNK%2BAYzoo%2BMMtnlS2NEdtPUfR2EA8577ibRFen3f%2B7J7vGITdDeKwiIgdtJmvZawCGO7undbpLVGf%2BztVy2hB3wBMJi648QGOqUB%2FPDoXp41bhB9RWHbdvbUNxK9bBt53%2By08Df%2F5M42WFgK%2FpT3hbG8NpAd2PxfkZ8NvorZv8qap2I54n3QOoeBwpP9k7FHIXSme3VDEVQgp2fvpXD0ESE6sp0Inz0b3lrHpSnDK5ARugX16SDDJcC55xY4FIaK3zTr3xcGhFsJybLGWqQRWLOzFBuz4Y2aGNb9vMldQCx3fnOcvc94IOGZ0Us1NJq3&X-Amz-Signature=0efcae517f6dcf79c29927e484dafde2ce9dfb73d3706269037df7d86d414fc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3KPY7O6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDO3Aar2FTW6hTsp%2Bk8w1SWg09x%2B5j%2FdL9BoYxfFNkMKQIgG1v7xtz0SPTJ0QEXhG925u1H0AaFTwTQkpa%2F25SiOYMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHSl9yiB9p6wT3hvbCrcA45LLaL%2BukCRdSQvQyMRed%2B9uC3ELeyNlF60bI4pFe6d1ihaXVF0eF4%2Fd1ArVf5A%2BglJR3XneF%2Bc1mCiKR04ldI68B1nwlE8I9BUMRYt4VZfrN0%2BiyM5KdlBTTmCwyiBi1%2FKS2egERagP%2FKIPOGA9weP6wFLYu%2BMo1dlSjCukHyNEnZ6sDhGnykcU9OfF%2FOGMLEgn3ZlVCBbJ98cB6FIWyvH0ELyX7tR2M4m3GBWKBXmiWOOLkkhVLNVZBgbR31r5FrNi%2F8Yov4mCV3IInbHR6ca4SpZ9iYYNRk4HfBl2AA4BUrZCx0jYNBsPLIhXORiWcah7l9PZXVHcvE9qrnbrB4BdsrLSA6H%2FcQ5%2FLTQ26W798EJLG49nHQHn4ZK79ow8uEyMRmmu9bRvvyQH3yT1s47p6M291%2BnZUNWpYpI8Mx6Od4IaWG4rB4F7VpGeF%2Baah1txbbG7nIligS1ixeZHlU0EpmPCLVlhUZviPrXdrubLzHr3Kx%2BZzeob358z1Sq61mm9UgqwExwjHjqWsCwZnyFBgb0QXSnGptociMY0Q9YQ8BcgSHBrQya8Tq1s0D5yDuNec7tL41WrnsNuu7UQty8qkyhBQ47dBOJ5lrMtw3lmsDFFcG6VM6hpwi4MNq648QGOqUB1ZRk%2FcGLaKjE0D5dhieQ7qtUa5NRkC246%2BswY7FySiidSKq7%2BBX9E9jmm1CRJQNGipOpBQErPylm7GeQt0dg5Y%2FqS5EnBHGvZ%2Fj9rEpwiMfAQpPt9yzmZWUBgMTMD3C4Cx%2F%2F3UQ2ODCT5nOAmYtAGLQVUU7rwr36%2F8V45bX4mJGI6DnoIWQlPwt5%2BvC9u%2FkJko9pDnnVGsTi6%2FANTbudbWvj3ByL&X-Amz-Signature=b5df7c5a62a27a06186eab42aff42dd65a8abe799b463b6f573092ce02a20d7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4PRPIHI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeiPlGcnXUWWhmZqFYw92I4kFso4E%2FbxxgLgmWzU4HhAiEA6CtHkf3oE3GinFM%2FRRj4f0XgV4hZB5CtRBD83xDbK4sqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJS%2FgFYUPWTXOb0etircA0P43zJ9RwSwdVyvxrHUb%2BoWHYVm5uf51Ud7HOC6Wdhifmz28CfaECvqhEfkOUo11OaSeVYezx5nqN%2BR0DDQiZbLIgO7PU7w%2F8DuEUAVKVZfqtDihtR%2BKglZDkS4nJFmarAhJ%2Fm8FvNeQup51NPiPKI%2FSijAwZewHGg44eRtzVk6SX1mrFH%2BjTYXFDaEggjdhx7I6kF%2FGJLySFKL5bVQphi81VOe3bf1kVVR1TCR%2F9KXyhW36brUfkRMJBL%2Fiu%2FwcSKZGZeT0Jw8Ybeo%2BS3YksLaByumuDiiQ11oTIjf26JRagklGVO2dF%2FFr375CyB9T4GMCu%2Fu31LSSjT%2FychJM4s7J7zUYdkg56pXFl9tuZ%2FPI2ykspIx7g8FWqdts%2FgEhBggcHfHeKh1in41oURdfc9N9MZBdro%2B5DEX%2B6jpkkn3Ysl%2FgcdmZwlA1QqGywQux0OM7iPeLa82p9SlqtWZvgWz5VoghR%2FzzERQqQ0vReGp3XNkLM9L4Y%2FuxeHOKevrdjhE2xaFSWg0k5ZbSWrzTsUOt9IB8aSi92cwRm2tsvgIQf70u8%2F4ymHVocWyVNTux8IFaJ0huLaanwA6Jvse2k3jyNRUcfwuXHfYvbI6Wlw1pHjdbdQjAxZPwGoNML2648QGOqUBNtTdW5BUBHIGbK1ekY86eB1GtOej1WEe7p7HI3c7FRDEsMLuz5AoMOwemQiV1hbrCEJCHBWWUtUSVPjXfb0187kP3pQu9tIh1%2BRrl54Tym%2F6X4ozVvriJIULUgro1wE0msfy9GvtTYDZz2kgSYEjXdUq16Dw%2B3O3L0h2o6A8GxuIC6YbjPfh3V6HS5caPRbztA%2Bkyrpkl8Tdp7oeu114TLP4cJ%2Fh&X-Amz-Signature=b8a0cac6435fb8365984274991f1a15c318d6c726dee630de1dd8555bbef5eb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
