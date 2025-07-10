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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZSIGIM%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvylemNiIL5PifP7IqN1s8DzVRusjNWtUvhMrWuqHFBAiBSLQXW%2FMKz9O9xa2zBb9DHybj9GTGfapqhOXLKetegyyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSlu0YhU2KXDBRF4uKtwDqjMHKkXCF8laqj0UiVe%2FjIKubWZTFDxUiwicvct9c%2FGV0tSnU1%2BlatGFaLs3WcN%2F2JP0HxZ%2BihXCuydJhDvrg%2F2KHVEgTE9atrNyrpx8j7ETVMAuD6DZkpKHMYpoNmcDMn1BLM2Rlpof%2BvE1tfLfzBCXwcu4lOjHG2KbtKL%2BH1braE%2FxWBrOwJzjDq68yV7VS%2BGba3rdHlaiO54fZdHczx1zyhlEWGKWZfReTe3L0DiTnmvqSGm19Zw1kd6vH2jP01qFgLOqtkf71ZshfqQpknYhac2z7Jvn4S5fi%2FqWDg4XHrwZsuRTryhh4%2B7PrAArd5JgvwSBT51y5unTC1QSv2zRsPBVJUTgTlXTUWWS%2B9P0737jZ0Zmvmmzt2yRopZwq%2BYni%2FXkt8d2ihzbUYLe09AY2hcYrFa1QX75MU5xl1SWNykiwgRIc6BlPu8yzW%2B6ZPEK5jsClq76WKQQmICHQfj15zyIwK5gw1Sph5a0JelsA0gS9OG4ekewGNRiIaOIlQ2WSY2v2DZu72gwgiKv77vWduOoV9T9QIcS8pZfupAzM4wjyM66AIwunWX%2F1R5M6nbGPuTKL%2FMtl93r%2BiJZSmQCiWerXyjPF%2Fh2nZjB%2FzEXMBEReXaGJzA9cYkw39S9wwY6pgFYRHI1p%2FRLKIrxf%2Bh0IIwjz2hAgMzC8x069PZPJej2BgQzOs%2Fc4eMTKT2QzSuhMB6iLKBgpQcx5R7PPWhQTyT27RA1lfzensNaDStlXtG3LdC%2BpAP5BxLIC%2BidlmzzzjBCc9VoedWleLXVyJkL8FQqt6hJWB8fQnQsGnDhvadKOHYR59kmT0ZDx7U%2FE1VPn5aIpjk3pBW9NxOK8LFpflIDj1OrRhZV&X-Amz-Signature=5c7bb2d710af93492285e60f9090aa0bb1985ab5d903cb860d4f2f296cd0f386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZSIGIM%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvylemNiIL5PifP7IqN1s8DzVRusjNWtUvhMrWuqHFBAiBSLQXW%2FMKz9O9xa2zBb9DHybj9GTGfapqhOXLKetegyyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSlu0YhU2KXDBRF4uKtwDqjMHKkXCF8laqj0UiVe%2FjIKubWZTFDxUiwicvct9c%2FGV0tSnU1%2BlatGFaLs3WcN%2F2JP0HxZ%2BihXCuydJhDvrg%2F2KHVEgTE9atrNyrpx8j7ETVMAuD6DZkpKHMYpoNmcDMn1BLM2Rlpof%2BvE1tfLfzBCXwcu4lOjHG2KbtKL%2BH1braE%2FxWBrOwJzjDq68yV7VS%2BGba3rdHlaiO54fZdHczx1zyhlEWGKWZfReTe3L0DiTnmvqSGm19Zw1kd6vH2jP01qFgLOqtkf71ZshfqQpknYhac2z7Jvn4S5fi%2FqWDg4XHrwZsuRTryhh4%2B7PrAArd5JgvwSBT51y5unTC1QSv2zRsPBVJUTgTlXTUWWS%2B9P0737jZ0Zmvmmzt2yRopZwq%2BYni%2FXkt8d2ihzbUYLe09AY2hcYrFa1QX75MU5xl1SWNykiwgRIc6BlPu8yzW%2B6ZPEK5jsClq76WKQQmICHQfj15zyIwK5gw1Sph5a0JelsA0gS9OG4ekewGNRiIaOIlQ2WSY2v2DZu72gwgiKv77vWduOoV9T9QIcS8pZfupAzM4wjyM66AIwunWX%2F1R5M6nbGPuTKL%2FMtl93r%2BiJZSmQCiWerXyjPF%2Fh2nZjB%2FzEXMBEReXaGJzA9cYkw39S9wwY6pgFYRHI1p%2FRLKIrxf%2Bh0IIwjz2hAgMzC8x069PZPJej2BgQzOs%2Fc4eMTKT2QzSuhMB6iLKBgpQcx5R7PPWhQTyT27RA1lfzensNaDStlXtG3LdC%2BpAP5BxLIC%2BidlmzzzjBCc9VoedWleLXVyJkL8FQqt6hJWB8fQnQsGnDhvadKOHYR59kmT0ZDx7U%2FE1VPn5aIpjk3pBW9NxOK8LFpflIDj1OrRhZV&X-Amz-Signature=24e10bea79d496f8d3f8f1484840e3df9076d6916f6f45e175914bfdc5e65982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZSIGIM%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvylemNiIL5PifP7IqN1s8DzVRusjNWtUvhMrWuqHFBAiBSLQXW%2FMKz9O9xa2zBb9DHybj9GTGfapqhOXLKetegyyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSlu0YhU2KXDBRF4uKtwDqjMHKkXCF8laqj0UiVe%2FjIKubWZTFDxUiwicvct9c%2FGV0tSnU1%2BlatGFaLs3WcN%2F2JP0HxZ%2BihXCuydJhDvrg%2F2KHVEgTE9atrNyrpx8j7ETVMAuD6DZkpKHMYpoNmcDMn1BLM2Rlpof%2BvE1tfLfzBCXwcu4lOjHG2KbtKL%2BH1braE%2FxWBrOwJzjDq68yV7VS%2BGba3rdHlaiO54fZdHczx1zyhlEWGKWZfReTe3L0DiTnmvqSGm19Zw1kd6vH2jP01qFgLOqtkf71ZshfqQpknYhac2z7Jvn4S5fi%2FqWDg4XHrwZsuRTryhh4%2B7PrAArd5JgvwSBT51y5unTC1QSv2zRsPBVJUTgTlXTUWWS%2B9P0737jZ0Zmvmmzt2yRopZwq%2BYni%2FXkt8d2ihzbUYLe09AY2hcYrFa1QX75MU5xl1SWNykiwgRIc6BlPu8yzW%2B6ZPEK5jsClq76WKQQmICHQfj15zyIwK5gw1Sph5a0JelsA0gS9OG4ekewGNRiIaOIlQ2WSY2v2DZu72gwgiKv77vWduOoV9T9QIcS8pZfupAzM4wjyM66AIwunWX%2F1R5M6nbGPuTKL%2FMtl93r%2BiJZSmQCiWerXyjPF%2Fh2nZjB%2FzEXMBEReXaGJzA9cYkw39S9wwY6pgFYRHI1p%2FRLKIrxf%2Bh0IIwjz2hAgMzC8x069PZPJej2BgQzOs%2Fc4eMTKT2QzSuhMB6iLKBgpQcx5R7PPWhQTyT27RA1lfzensNaDStlXtG3LdC%2BpAP5BxLIC%2BidlmzzzjBCc9VoedWleLXVyJkL8FQqt6hJWB8fQnQsGnDhvadKOHYR59kmT0ZDx7U%2FE1VPn5aIpjk3pBW9NxOK8LFpflIDj1OrRhZV&X-Amz-Signature=bd8fe9ab0ca377d365d61aac684ff1eda44256ef12556842e976b8a56996e506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIN5MRSF%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrSMMB41gbSMd7PiEHh4F4VuaTks6OCCtptqOyIBnYVAIgR8fTA3PAfEubO2HZwLaXeqB2wvc%2BQ84nnizLSQU3%2FUAqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPw127hwSZcP893ByrcAzzl3TADzWLEX5Rg5YF1W9bGVFs1WTxmSMvWfVVHeJ5EkdXUvlcHQF6xWJO8ZS23JUEBFE7cK3sjcQJxy45gvABZsAy6zFU5LkYVz9YGOJqKJ62kBSny5OTB1PNTbV%2FAA8zql9t%2BXnrA9garbaFnxWugvko1Zovl9pRIGL1sgABDNLl%2BNkm6hm8QcKTMEtENLuPK0SF7sueOnoLvy7aTiWgZZj6FFFI%2BpXe9zia4VKFm%2BVZnFGhXFiD18sGUbD6DMnOSZ3RTaHtEXu%2Ftm4R49Zn%2Be9YgFyqhuCEMAy4%2B50iIiUvRoz1NH7q9Jh6XT6YUVnVWPO7N%2BMroWIidpTX%2FiuchDRklYkzH71EGu0QYSJ2FXQzH4iVHP8YU5eWMRxmJ3gSIhbe%2BF6MLEULsihMWZu7PsNf1YO7IIz%2BS80fL%2FDlSuK80ptUWSKgsIMMvnBwpGzjDf43WPr63umKQJeYIvoS9lHVBnzxtD9APZeS1psMtOSwChDjSNt8KHMfAgu9mjPuq3cSAIzAGTVCUOchYMKsGgwbT5ZUAVi1otOEpa8u8Cu7i6gg2SgNuImOQk4IzS%2FsMixsEHP4aAh7r2t3mUd2MXhRB0nZVKLW4HF%2BdTi8ZAYZtISvbD8fz66F8MNrUvcMGOqUBgCzW4pGgoqej3DxAZ7xVDh532HHOX46LgZI1m80KVLBzUmJEK8WFcKEBa8e2DAWhqqqytpI8Ezts8M3gnrOUFgj012e1zwQyspGXoIMLD054FKqiS%2BpG6byKO96yMj9abes91tWbH4mnaOhJi6BN3sw4JQimNChjhvr4XQbVFeJG8QOiTfzD%2FggEMIpZ%2Fu95cN9B%2BAGTS4Zc2OaGcAnPI4d9zN%2B7&X-Amz-Signature=57a78932e25e6e083b6e7ba4ef480431be2ca239c9800556db0f7de2116a943c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UOL2EOZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD02RWRDjCw2xxtkbb2xcq1rSYhd%2F40U9qVOjrzDLhU9wIhAJZRpqBrJ7db5hNuwuP3gdzQXJi2Rcm5YyNWWEWK4ryWKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNwWHQR9g1v453OmUq3AOdyQB%2BjZdf6RRQ7tYmcddkEs0r3L45G2qbDRs8%2BBrvvfuV6LuYHks8F3h2I2AiEErXyU6LGrfR0%2Fmarbetd7nmqvkI1gpFdMYR4%2BEcGj7WqQhQwHGZFFyCZtHMIhV2RSO4f75jgK6qnTTzbOcL804Ldw2NPkYuB1nIfNkyXbIJTHUvrp1jR%2Fsp9ABjNgFhJg90jv4yeZFa13Hw2ImeIcC3h%2BKYyq9n8oKujHRXVgcDqcEkxeClxJVo8%2BfaCGFoR1oAbNtnbqcZxa9Xr18SEri%2FdPOCETpElibuTvdOsRAbOc4ynWsVjqcLVLXu3uUCfGqcVm5QjEFOLN%2BfGfwZ4z9s%2BvQsuhc5uK9DxnVKDYUJ7BuwLrRCFHas%2BkXSIlKVJebJGpjWiM3vGVqEXkOiHbguLKEQHDqStVrScBkdcnnC3FvhvMxLpFFM6UZW2lWgsSF8e%2BaCTJIaPpZ9SwydPoMvoV2NOuZNLcwWVKHcUV78Be0gzDbTAT%2BiYch7TlhnycS70DLt8LKxPiu%2B%2BdmZVWI8fdWqY9QNalN3eUgo%2FapAKVvCoTKZ8eRaZiHPYcFUkMUNWxJBLgjuR%2F18kkMyh1omcy89NLv85ZvVlEZFtHGlMnR9GwZuWUbXeGdP%2FzCZ1b3DBjqkAbscQ2Lr7Ljw1rCHH%2FrsmlwkL4gPlh2DeHksmMqUqZhm3DpaJipFHu0duxKBPC%2BeSD0RMdUae9x3eW6aqwmFt7UoSqU3bsINj12U6bUu2zIR2NBECcBy%2B9ipJGQdy7E%2FIqxeq%2F1ng%2FnF0J62%2FdOZqkvTytQ7l7gxQdBAmS%2F43%2BJmOSn%2F0mHS9MxmtBccYvauD4wFLGYukwgvk2zPDyYIsn%2FmK3lk&X-Amz-Signature=36d552d6342d3c71ea692661f4b42f43b316bee0b2dc380299b62e18f83e6c45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZSIGIM%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvylemNiIL5PifP7IqN1s8DzVRusjNWtUvhMrWuqHFBAiBSLQXW%2FMKz9O9xa2zBb9DHybj9GTGfapqhOXLKetegyyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSlu0YhU2KXDBRF4uKtwDqjMHKkXCF8laqj0UiVe%2FjIKubWZTFDxUiwicvct9c%2FGV0tSnU1%2BlatGFaLs3WcN%2F2JP0HxZ%2BihXCuydJhDvrg%2F2KHVEgTE9atrNyrpx8j7ETVMAuD6DZkpKHMYpoNmcDMn1BLM2Rlpof%2BvE1tfLfzBCXwcu4lOjHG2KbtKL%2BH1braE%2FxWBrOwJzjDq68yV7VS%2BGba3rdHlaiO54fZdHczx1zyhlEWGKWZfReTe3L0DiTnmvqSGm19Zw1kd6vH2jP01qFgLOqtkf71ZshfqQpknYhac2z7Jvn4S5fi%2FqWDg4XHrwZsuRTryhh4%2B7PrAArd5JgvwSBT51y5unTC1QSv2zRsPBVJUTgTlXTUWWS%2B9P0737jZ0Zmvmmzt2yRopZwq%2BYni%2FXkt8d2ihzbUYLe09AY2hcYrFa1QX75MU5xl1SWNykiwgRIc6BlPu8yzW%2B6ZPEK5jsClq76WKQQmICHQfj15zyIwK5gw1Sph5a0JelsA0gS9OG4ekewGNRiIaOIlQ2WSY2v2DZu72gwgiKv77vWduOoV9T9QIcS8pZfupAzM4wjyM66AIwunWX%2F1R5M6nbGPuTKL%2FMtl93r%2BiJZSmQCiWerXyjPF%2Fh2nZjB%2FzEXMBEReXaGJzA9cYkw39S9wwY6pgFYRHI1p%2FRLKIrxf%2Bh0IIwjz2hAgMzC8x069PZPJej2BgQzOs%2Fc4eMTKT2QzSuhMB6iLKBgpQcx5R7PPWhQTyT27RA1lfzensNaDStlXtG3LdC%2BpAP5BxLIC%2BidlmzzzjBCc9VoedWleLXVyJkL8FQqt6hJWB8fQnQsGnDhvadKOHYR59kmT0ZDx7U%2FE1VPn5aIpjk3pBW9NxOK8LFpflIDj1OrRhZV&X-Amz-Signature=12229f98a399238ba6aaa345e81131f6d3b965b80799c5bfe84169688a82452c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
