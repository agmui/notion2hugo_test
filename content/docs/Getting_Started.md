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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USWYBMUB%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2Y5vsIn%2FB7ZDflSSL3u%2FkEdW6fMa5mbxnvsZhEJPL5AiEAlgIb6Cgs5pNXf%2BikQQcfdOI6T%2FTjUTZmCji5u8Rj2n8qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsm2uBHumMGG4x9sircAy2PCesHPKF5l50AsNBS%2F5SH4QDg16FYRf%2BUiP%2B%2FNYzqUtH5Q%2FJJGrowhXmBZUZN5v4fSkBP50r0MBWHPGdOGawUo4cygZDrR45Mm2MiU9fKB3mibEE1q%2Bx4sZJNnivLNHJXJf5Zy1hbvDknW2JSGkA1j6wCAnFpAF%2Fm8gJ82MZuMU%2BEP5wSHR52CcwjCNlMIBUFsyJVstpe%2B6KIlTFTT7rasf%2FUJepeIq7FTt91UNSkOjYM%2FxTJZZiNCg%2BsnvWp731bSKQcnakm4IEuum7vWGevLVzkP22CF58vB8NXbVIlK372oViH1HZPhZGs2f60fde77u8hQxobx01Hp0Yo8tjJElk1lJLB617B09ZVeG6au%2B0tY4cYsIpNrhrtX%2FJNQDXGWLV6%2FV%2BiKzrx91E8MEId4x%2FxmTcrDhZu72FAkjbbixhWFe6Pr0o7%2Fpvy%2FpXHOl7gYDuk3ifiD2D8ttjk7nx76VcASQFuVo8vvbhfqZ%2Fm8Ali3Wwn5wIkRGHBBO5YVjBu3pqUFoPhCxaoCl7ecH0KX2zvqsU2fWOGjrBXLFFjB%2F35%2FOYCMB8rXG4WgHEPssyhtRV5UqCfxWdIrUbc6u%2FxSPJSyFlrUhFg9fW3K3gKtk4sve5T7r8xGcKGMNuEo70GOqUBZGglshX465USFtEfetFScioNprbMcNZAb5OkJuHUkpIixak9QcHlWeWiL0QwC2bRLF85%2BfaRqy7yAMKFjILpUplPN1timzUj4gMdlcm3gW8mhoprZkYNU1Q88PouOXVL4OXmGqwYwkm9kv5%2BlQ4tL1HaDr69Q7UiTMO9Lr1h2DcLxFDky3jf%2FWuwHfPICrFGnqq9daQ4rlC8y1RUvrkDOtwiQmQn&X-Amz-Signature=21e7c8f33f9eb66fc478f52fd2ca62875ade42cde1f29cd33149f16811f46083&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USWYBMUB%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2Y5vsIn%2FB7ZDflSSL3u%2FkEdW6fMa5mbxnvsZhEJPL5AiEAlgIb6Cgs5pNXf%2BikQQcfdOI6T%2FTjUTZmCji5u8Rj2n8qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsm2uBHumMGG4x9sircAy2PCesHPKF5l50AsNBS%2F5SH4QDg16FYRf%2BUiP%2B%2FNYzqUtH5Q%2FJJGrowhXmBZUZN5v4fSkBP50r0MBWHPGdOGawUo4cygZDrR45Mm2MiU9fKB3mibEE1q%2Bx4sZJNnivLNHJXJf5Zy1hbvDknW2JSGkA1j6wCAnFpAF%2Fm8gJ82MZuMU%2BEP5wSHR52CcwjCNlMIBUFsyJVstpe%2B6KIlTFTT7rasf%2FUJepeIq7FTt91UNSkOjYM%2FxTJZZiNCg%2BsnvWp731bSKQcnakm4IEuum7vWGevLVzkP22CF58vB8NXbVIlK372oViH1HZPhZGs2f60fde77u8hQxobx01Hp0Yo8tjJElk1lJLB617B09ZVeG6au%2B0tY4cYsIpNrhrtX%2FJNQDXGWLV6%2FV%2BiKzrx91E8MEId4x%2FxmTcrDhZu72FAkjbbixhWFe6Pr0o7%2Fpvy%2FpXHOl7gYDuk3ifiD2D8ttjk7nx76VcASQFuVo8vvbhfqZ%2Fm8Ali3Wwn5wIkRGHBBO5YVjBu3pqUFoPhCxaoCl7ecH0KX2zvqsU2fWOGjrBXLFFjB%2F35%2FOYCMB8rXG4WgHEPssyhtRV5UqCfxWdIrUbc6u%2FxSPJSyFlrUhFg9fW3K3gKtk4sve5T7r8xGcKGMNuEo70GOqUBZGglshX465USFtEfetFScioNprbMcNZAb5OkJuHUkpIixak9QcHlWeWiL0QwC2bRLF85%2BfaRqy7yAMKFjILpUplPN1timzUj4gMdlcm3gW8mhoprZkYNU1Q88PouOXVL4OXmGqwYwkm9kv5%2BlQ4tL1HaDr69Q7UiTMO9Lr1h2DcLxFDky3jf%2FWuwHfPICrFGnqq9daQ4rlC8y1RUvrkDOtwiQmQn&X-Amz-Signature=9e86192a7882b8ef9c7f4a3ba538da15d79705d35aab3d1a40b1e91a3143066c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2CCOHIU%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICywgpWClfNPk%2Ben%2B0H8M4K9qE4ZPWMSWIW2pYJ6GZB6AiBLujVIrHhXkQjTsFLSLo%2F0uLFgLF2W6BnFVJEQUr7qQyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMchmomNQlvZbPfxkHKtwD6%2FMz4lcMZ6o3CWCyT074GnDMtoGXSWwF3%2FSHzsCY2wZFUj2HVQbDo9OPUjPS6hgSAA%2FvuZ9o7fHwzoZU%2FoAwd48DaD9vWWCCZiZ0zjeqt5qsnUOeMLHiTYAp6Ent%2FIvcTa%2FT8zoVaIQLNjbTQigv2TYK7OwZ1zlQzj2MGUQPyuBigOakcM7EgupkAfaJFjwSFuGmh7ZpPE8uC2DQ9MWsozmscL4erNYlTvRebhr4wn%2FyGz%2BQnFPi5TSm8RTGPMHpyw9%2BFAdURoFSZ8acvhKRfxbUvaHNCicWj9sYpx6uThzfNP7k%2BbkQ0OiAT%2B96oFxkK6Cd0vtPfAFfePmt%2B6Rw4sBxECu64VZ%2FohWOvDEsnUmVvsVfNWpHpQwkf7g5j%2Fg8wgulC5AQ3rnrD1dn%2FtlihKVKlozCOW4bD6QXRrO9zEeu04g9fBerz6YTyPRcKEN3LwKC%2Bw3UyuJ49%2BzrhlpnyPUh26qW%2Br3MJcZZuQ2Y9AkiyP9rmCtZTHD7nRt8exDZUJfW4mdvr066EfApsuB65yOpF4qGVhMj%2BrwIq8I8pM5GuUqqJeq8WlDn7Wrf8u%2BTaYni3wjDstFS0mLrbPuYdy9v8kTuh%2BJi1Yuurbkkl6Q3GKPUSP23PcqKGucw8YajvQY6pgGKHqofjjBmqHdq7HNVakpANlxXbmvGJNCM41MbwJg7T43y8iSjs4JP6r5AvaLuEjpK36KJ5a%2BJglqewqmCv6FVUhrhj3o7Q7auXl1aMQaVrGdV%2FzSpunoJavqFTKlFvqwY7FuI3Xr5bFBq0B%2ByIfK9uS6MYoUK4bn%2Bqdfj%2F2XUwvko%2FKGuaIxCBVbsILY2lGx0OX0y9VhYqkgwlXViQLMkhvus6UjM&X-Amz-Signature=5cf7af387febc1cb31c3f4bd8faef8ec20af3ad560b71ba2eb2d02f4d28df620&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTTAA2H2%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvQz4y8Xz5OdJ50ahJMk%2FMLm5KhHJ7RfCUA5f1%2Fc2HhAiB3gw%2Fh2rcQ%2Bz9Wj1BMUIxKGln1NHshD%2FjhwOXN9SpBpyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNWEqmHVm6BIlB%2FgzKtwDqZEs%2FWiEXA46rPDxMMatwaKbyx2bmIcRw%2F1Byn9ay2st4V0J%2FJ0oZBaaPEvQOlCfqvMXWBoSKUA8%2F1dIzZkx0YzFHqRdTf0zCxRrNvcPYOQdTnaSHIf3%2FVBXyoReogqIU8yzmYHY43gO3bODFHsKVMqcVDei1yzPssl5kHuPoZhdKbk95q0UJqbxgdkxmLsCesuJnsm299cN6xWcA6vQFjtE3BYZSvGDSpp2LOKRgWwbDIYeCoOnEqaPC1dm1hnQgBxv4U21krwsdeL78ZsNWULrw0%2FAMjd3LknjpiRnUPqVsuqecc36yPKVPpdFlr3WZ4NEdGIw0IvpE%2BtdW5Kl7YsjzJk9alv9YNbNXoUyzgr%2F7vI4xU48zkAj2mco4AQVReGXthcaBWqhpohUr4frvCpOn0m%2FknDduUTOiBPrM%2Bq0F6GWPzyLg0pG%2BHz9W92ZwTe5TuwuVdXNaoeuSGV6pPPzxStoyYrACCs1YYKBP%2B4mvruf2FqbU9PcCo8AWynfWB56DZ4SmizfeVvV%2FDNRrcNKXtSAkX%2BOE6vyQLmFiskC7hfhZY8xllcvfd79vLhX%2FWcqq5gIk1Ph5kl2OQMG7hh5%2Bym80LjMKJBkLtdSS2YrIQy36%2F%2BbLeXhCe8wzoejvQY6pgEcxbvvJBLZVirJImpWAkKmQHUUtJ6Oj4%2F2tEGfqHopajoSn1q91Axp9egumDVTK%2BcuFjHNqhbtrhFbmIkBvybnWlBItdBtAMlNhUHiErltoxfryEgthLaP60ahWBo11OhfAY6rpn%2B%2F%2ByUk0XsGKBETmIGqCezchze6iLQmBP6oC%2FwtVbkfvjYl4%2FuT7XikgD2DExZFMYX4x3iOg%2FGrWiqzOyp9D2zd&X-Amz-Signature=994a76a23f4e728c6fef1e8b3442b51c25978502f885f10332e86b2344686b07&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USWYBMUB%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2Y5vsIn%2FB7ZDflSSL3u%2FkEdW6fMa5mbxnvsZhEJPL5AiEAlgIb6Cgs5pNXf%2BikQQcfdOI6T%2FTjUTZmCji5u8Rj2n8qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsm2uBHumMGG4x9sircAy2PCesHPKF5l50AsNBS%2F5SH4QDg16FYRf%2BUiP%2B%2FNYzqUtH5Q%2FJJGrowhXmBZUZN5v4fSkBP50r0MBWHPGdOGawUo4cygZDrR45Mm2MiU9fKB3mibEE1q%2Bx4sZJNnivLNHJXJf5Zy1hbvDknW2JSGkA1j6wCAnFpAF%2Fm8gJ82MZuMU%2BEP5wSHR52CcwjCNlMIBUFsyJVstpe%2B6KIlTFTT7rasf%2FUJepeIq7FTt91UNSkOjYM%2FxTJZZiNCg%2BsnvWp731bSKQcnakm4IEuum7vWGevLVzkP22CF58vB8NXbVIlK372oViH1HZPhZGs2f60fde77u8hQxobx01Hp0Yo8tjJElk1lJLB617B09ZVeG6au%2B0tY4cYsIpNrhrtX%2FJNQDXGWLV6%2FV%2BiKzrx91E8MEId4x%2FxmTcrDhZu72FAkjbbixhWFe6Pr0o7%2Fpvy%2FpXHOl7gYDuk3ifiD2D8ttjk7nx76VcASQFuVo8vvbhfqZ%2Fm8Ali3Wwn5wIkRGHBBO5YVjBu3pqUFoPhCxaoCl7ecH0KX2zvqsU2fWOGjrBXLFFjB%2F35%2FOYCMB8rXG4WgHEPssyhtRV5UqCfxWdIrUbc6u%2FxSPJSyFlrUhFg9fW3K3gKtk4sve5T7r8xGcKGMNuEo70GOqUBZGglshX465USFtEfetFScioNprbMcNZAb5OkJuHUkpIixak9QcHlWeWiL0QwC2bRLF85%2BfaRqy7yAMKFjILpUplPN1timzUj4gMdlcm3gW8mhoprZkYNU1Q88PouOXVL4OXmGqwYwkm9kv5%2BlQ4tL1HaDr69Q7UiTMO9Lr1h2DcLxFDky3jf%2FWuwHfPICrFGnqq9daQ4rlC8y1RUvrkDOtwiQmQn&X-Amz-Signature=dcef278db9fd0877256ba0b0310c34a67f340570b8067b00db5beb7acf7a55f4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
