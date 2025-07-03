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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UYMDAJF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCYENcAZJuq2tAprDpkzBIBk0y%2FciYtbcm35almQDAtWwIgabBegnpSxzxyasKI%2B4OwqjQY1bgy7vZbJ4j06Ev%2F%2FBMq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDKn%2FkY3wwmIxw3RU1CrcA2ONi7yUbI5VG1HDLmDvOMiYeA3r9BaOMC8JoaLZe7HNjdAQTIVgyMuTVNy%2B55QA12kMUgkOP9ghyWAXhQx6zmYkw09EPgHG9VpAQE3ZeGull5rWipBV4FfS8spU1BulJUijNFQioEdcyjFn3a2F5DHKHEXSKf6I8z9DNPOwbprv7PDIgP%2FXTT9OOsJK2Qfn1Q6chnMIeaYIlkLztqWP9xJobaEB5ipJOUE5I2ZqIdZizMCcRC6rLXeocwKqh%2FVtL738VHnX%2B8fP84e%2BhCM11apPOeZPvcyBGyah3dMRouw2rfYH55tp7Vk9mJya3XCGs%2Bi7MlBp0qdEEFOsDbtm7s9Ohtxwycj89TOuPAfw3J4BBLcuJZqQbZscqAxFV2xLL5kGOcVJavcuHqz6ALwWUy1b5F1prDxGaqfQr5cyzchkbqax2FwmSgxcWyscGBfiQV49RbJIItne8%2BOzZehLpomDFtW9U3q9h9tM3rBIx60a5SsGADmvZtjGSLkaljDrzT%2BQMNKpTThMhw08NtoVwENSxASdAwNGctlxcE9ynWkeKnn3q3adG1GzhngLgdpNcBh2lA1pK5o9FHBekh%2FyNkVJfysK1OxAqYR%2BRdYcuRih2E1DF6LC8yHwIqLAMLC7m8MGOqUBGXRPGXD3%2FJfJ8RPG4ezuP2vKMLWZklIG1ibecbc24lW2gFnCOX%2FP%2B%2BZn%2Fc6MZY1Jp6Fb7QqmIt2Z%2BwLLaZ1u0nn4EqgkP%2FLjke%2BLy0zU%2BM%2FmpBvvNXeX3tUPG%2BTN0CUaLsDtbk32jDGkBB%2FxGoPC6J8WDZWTVgUj3x%2BHkpOikCIWaSamFCk9hD84AP77M1DNc3xXCNOqzCJlE%2FqSyJoXdaBAv7m3&X-Amz-Signature=89a46374ca43a8a4040dbd9e86173a4526134b668366a1999770adfa386a3ea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UYMDAJF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCYENcAZJuq2tAprDpkzBIBk0y%2FciYtbcm35almQDAtWwIgabBegnpSxzxyasKI%2B4OwqjQY1bgy7vZbJ4j06Ev%2F%2FBMq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDKn%2FkY3wwmIxw3RU1CrcA2ONi7yUbI5VG1HDLmDvOMiYeA3r9BaOMC8JoaLZe7HNjdAQTIVgyMuTVNy%2B55QA12kMUgkOP9ghyWAXhQx6zmYkw09EPgHG9VpAQE3ZeGull5rWipBV4FfS8spU1BulJUijNFQioEdcyjFn3a2F5DHKHEXSKf6I8z9DNPOwbprv7PDIgP%2FXTT9OOsJK2Qfn1Q6chnMIeaYIlkLztqWP9xJobaEB5ipJOUE5I2ZqIdZizMCcRC6rLXeocwKqh%2FVtL738VHnX%2B8fP84e%2BhCM11apPOeZPvcyBGyah3dMRouw2rfYH55tp7Vk9mJya3XCGs%2Bi7MlBp0qdEEFOsDbtm7s9Ohtxwycj89TOuPAfw3J4BBLcuJZqQbZscqAxFV2xLL5kGOcVJavcuHqz6ALwWUy1b5F1prDxGaqfQr5cyzchkbqax2FwmSgxcWyscGBfiQV49RbJIItne8%2BOzZehLpomDFtW9U3q9h9tM3rBIx60a5SsGADmvZtjGSLkaljDrzT%2BQMNKpTThMhw08NtoVwENSxASdAwNGctlxcE9ynWkeKnn3q3adG1GzhngLgdpNcBh2lA1pK5o9FHBekh%2FyNkVJfysK1OxAqYR%2BRdYcuRih2E1DF6LC8yHwIqLAMLC7m8MGOqUBGXRPGXD3%2FJfJ8RPG4ezuP2vKMLWZklIG1ibecbc24lW2gFnCOX%2FP%2B%2BZn%2Fc6MZY1Jp6Fb7QqmIt2Z%2BwLLaZ1u0nn4EqgkP%2FLjke%2BLy0zU%2BM%2FmpBvvNXeX3tUPG%2BTN0CUaLsDtbk32jDGkBB%2FxGoPC6J8WDZWTVgUj3x%2BHkpOikCIWaSamFCk9hD84AP77M1DNc3xXCNOqzCJlE%2FqSyJoXdaBAv7m3&X-Amz-Signature=6b7b61d18b81bb95f2edb8f406ee4151f02baa260d788c51e610de1c85b14cb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UYMDAJF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCYENcAZJuq2tAprDpkzBIBk0y%2FciYtbcm35almQDAtWwIgabBegnpSxzxyasKI%2B4OwqjQY1bgy7vZbJ4j06Ev%2F%2FBMq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDKn%2FkY3wwmIxw3RU1CrcA2ONi7yUbI5VG1HDLmDvOMiYeA3r9BaOMC8JoaLZe7HNjdAQTIVgyMuTVNy%2B55QA12kMUgkOP9ghyWAXhQx6zmYkw09EPgHG9VpAQE3ZeGull5rWipBV4FfS8spU1BulJUijNFQioEdcyjFn3a2F5DHKHEXSKf6I8z9DNPOwbprv7PDIgP%2FXTT9OOsJK2Qfn1Q6chnMIeaYIlkLztqWP9xJobaEB5ipJOUE5I2ZqIdZizMCcRC6rLXeocwKqh%2FVtL738VHnX%2B8fP84e%2BhCM11apPOeZPvcyBGyah3dMRouw2rfYH55tp7Vk9mJya3XCGs%2Bi7MlBp0qdEEFOsDbtm7s9Ohtxwycj89TOuPAfw3J4BBLcuJZqQbZscqAxFV2xLL5kGOcVJavcuHqz6ALwWUy1b5F1prDxGaqfQr5cyzchkbqax2FwmSgxcWyscGBfiQV49RbJIItne8%2BOzZehLpomDFtW9U3q9h9tM3rBIx60a5SsGADmvZtjGSLkaljDrzT%2BQMNKpTThMhw08NtoVwENSxASdAwNGctlxcE9ynWkeKnn3q3adG1GzhngLgdpNcBh2lA1pK5o9FHBekh%2FyNkVJfysK1OxAqYR%2BRdYcuRih2E1DF6LC8yHwIqLAMLC7m8MGOqUBGXRPGXD3%2FJfJ8RPG4ezuP2vKMLWZklIG1ibecbc24lW2gFnCOX%2FP%2B%2BZn%2Fc6MZY1Jp6Fb7QqmIt2Z%2BwLLaZ1u0nn4EqgkP%2FLjke%2BLy0zU%2BM%2FmpBvvNXeX3tUPG%2BTN0CUaLsDtbk32jDGkBB%2FxGoPC6J8WDZWTVgUj3x%2BHkpOikCIWaSamFCk9hD84AP77M1DNc3xXCNOqzCJlE%2FqSyJoXdaBAv7m3&X-Amz-Signature=697040aa4bc4c098bc83fd61aa610e642050f400c8a932e1b00c14a487df0c07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VE7Q3F%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG05bwyt1aponbuM56xH3%2FgLvsir1XSQZuOpXTeSH%2FrCAiEA%2BgxBC%2F9CQ7HAHQUfsnzThgYrqwh%2FMQWbGMb7dx%2FIPmwq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDLImETBV5i4a%2FMHg9SrcA744pom7G%2F%2BGmu8by4YYn2S0L1qg0Thd4y5lAehY%2BedaQ87f7jfzaJyPt9kpsnIQhfl8xC1bEcboc9FLuiWzwcylsJGQzqJN7aNOlkffACWW1qqGdnwTEl0XGRVBr7k0l5C01E%2B9rcVLqcWmrdo41bviFeF0xGSq5QNlMG6qyXUU%2FFZ2viA2%2Fyix%2Bh6hmsIFx%2BIZwPlLMdBnOVuKJGX9LD0GDVeHfH%2F3gEYuyP6C1cTNp2UfNmGFz%2BeS2tRDtH%2BC%2Fjg1lnrVUBnTm0JvKeoE1zrzuuXZ1alHdO9P6YBXnXa2CwPuJ9HiaqD%2BAXNKZyqWdUZz5c4vAfdCK%2BYEH2QG3nQBtkmspUJkVQ1LIKWowhQGnDhYPWCnGL%2BbFJx5HD1XOxTzZOSWPoNaTLbHeBL8XovxQJOxDyj7SwJo1VDeIWTbQkG1Esdr1cFu0x2voa1fO8BytqzRKddLhBwNvhh4Ke81%2F1jX1WvWvFpfC8t%2BqNQ6PhEDXCtXmlYjPGlWhhBTjcohT4D26MH%2FKAlZA5pjGsG8u3MEsBOQ7oxLR7DsXK80k3SqabeHS9L0jvMhp7mf4NIkJQ3ZYrjJIeSzq35%2FxaQL3h9xY5dUdf8HD1nrYiIGS2zxumooIce%2FRjHvMOO7m8MGOqUBrQ%2BeuOfVj%2FdTS5JEY8mNPOGcon5mnOfZzj4eMjuEzbYrWItm6tYQ3XI%2Bc2XWu7N9zKCP1QPLgrNDGkfIBIOIXq59iRfzFZVJjfRlqgsP7wGQfhDjRRXanwGUK7MX2qJzsyX3j1%2BzrD4pe1ql2Rdpj4ViGBXyY5r50bV7bLVoGj9vblmh98lYay6inI9bs08mqgtNazhaTfKyNkN1kXXj2CtTjHuy&X-Amz-Signature=06ebae1511106f3646c31152838658635dbbe77ba4ee01b341c16382ce364cd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5R2DXMT%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIHGhRCFD%2FUnAlCGg9u8eqolbNyvP5jyz75kSiVOqUFTIAiBCppFajYV9pAkoQjHY7ip9klNmjGpZaPf8ihOWI%2Fsg9Sr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMLZCR%2BOykuxUyOof0KtwDfy81pyUjYVF34scFfhS9Yb7%2BHcuW49NVW3Ue8%2FDRreEiJSIqp5vlRSf%2Ba7IQmqyoujubjwQijpG%2BcOl6M3zrxQucZQMsaNuvi14lRhSCezJb0WYtwbBlJ0G4QTUlV20QcJEoWQBs4UkUqIeJa8ni2Kta4HSTXsV3wN42kH%2BMJkf3Fj0vKYBhGeSA6XECZ72URL0sFbr1FI8754w%2BXll2ByMXpvUpCX0xN%2BAlwuQYE5DtsRXUePLljg0dquBe4PFiNnpZewYeBLrLe4IPVnRtfsfO5Zzdy6i3bLTP84uXhFrGtZqrwkr8twXFW5qf3JHB4eyRIq17eVISlwIMJ7l5O%2B7sJz6cw6bTItNNVUItvx9tiRFQmRYoiitOY3OjtkOckQk2xRMUPf0eCsGvbRvB4AG8J6qPfdEFQsSHZGt3c0r4knoLZXhrz%2FwZCBaN5TYf5ZXWT7FVeoezYqMLVRBjRCQr19cw87PaCsxayiHl7VzmyNzWGtlgdSsTTKZ6fnSPLcmnyBR%2B4Lh6FM5tmnBrRF4RQyQgFYaGoyo3vKbtdE%2FzExD0OsT6F%2FDCcwA%2F1fbAUFe8MQaLaLARYR57k%2BBLs87qdjiGb0x959Da7IRIyLmrn9uRgJgX5SmkNckwqbubwwY6pgHEKswcSkGFA%2BQgAeiJOw8OqftkF%2BMaRfuQaOGW3VWDVhZ9wfTX9FISGfm2CDOips13ABfSiV6gYcv3VmzW4qPXie7hBpMdQ3pLuIcwjm80KYUyHITrnKnwA4Um2zb48XzgwOfBVJZZCCeX8l42lLll11k2R4AQLerducK461w%2BghRRyV6nBPUSMu91LMQS%2F92ie7MlSd2gqYZfpkkZz5I7TlqtcS5%2F&X-Amz-Signature=2d7f1e64cb0563dace05eecb4343f96149da5e289cc54bd6dd3765183efcd819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UYMDAJF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCYENcAZJuq2tAprDpkzBIBk0y%2FciYtbcm35almQDAtWwIgabBegnpSxzxyasKI%2B4OwqjQY1bgy7vZbJ4j06Ev%2F%2FBMq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDKn%2FkY3wwmIxw3RU1CrcA2ONi7yUbI5VG1HDLmDvOMiYeA3r9BaOMC8JoaLZe7HNjdAQTIVgyMuTVNy%2B55QA12kMUgkOP9ghyWAXhQx6zmYkw09EPgHG9VpAQE3ZeGull5rWipBV4FfS8spU1BulJUijNFQioEdcyjFn3a2F5DHKHEXSKf6I8z9DNPOwbprv7PDIgP%2FXTT9OOsJK2Qfn1Q6chnMIeaYIlkLztqWP9xJobaEB5ipJOUE5I2ZqIdZizMCcRC6rLXeocwKqh%2FVtL738VHnX%2B8fP84e%2BhCM11apPOeZPvcyBGyah3dMRouw2rfYH55tp7Vk9mJya3XCGs%2Bi7MlBp0qdEEFOsDbtm7s9Ohtxwycj89TOuPAfw3J4BBLcuJZqQbZscqAxFV2xLL5kGOcVJavcuHqz6ALwWUy1b5F1prDxGaqfQr5cyzchkbqax2FwmSgxcWyscGBfiQV49RbJIItne8%2BOzZehLpomDFtW9U3q9h9tM3rBIx60a5SsGADmvZtjGSLkaljDrzT%2BQMNKpTThMhw08NtoVwENSxASdAwNGctlxcE9ynWkeKnn3q3adG1GzhngLgdpNcBh2lA1pK5o9FHBekh%2FyNkVJfysK1OxAqYR%2BRdYcuRih2E1DF6LC8yHwIqLAMLC7m8MGOqUBGXRPGXD3%2FJfJ8RPG4ezuP2vKMLWZklIG1ibecbc24lW2gFnCOX%2FP%2B%2BZn%2Fc6MZY1Jp6Fb7QqmIt2Z%2BwLLaZ1u0nn4EqgkP%2FLjke%2BLy0zU%2BM%2FmpBvvNXeX3tUPG%2BTN0CUaLsDtbk32jDGkBB%2FxGoPC6J8WDZWTVgUj3x%2BHkpOikCIWaSamFCk9hD84AP77M1DNc3xXCNOqzCJlE%2FqSyJoXdaBAv7m3&X-Amz-Signature=fc6c06702e40aa9c28c556fcf82b32886606b713272c5c1bffe3d899ef738c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
