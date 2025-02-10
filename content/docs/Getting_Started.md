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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVP5BPSW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCiYBGBiZY6ETuZBr6t4EvOARoYJGK%2FWnOzRY7Q7O5sAiAdNtRJgMQBqmo2c29kcI4Yix%2FMUkIZtruObgqaCtJ27CqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMmdGILgkbNesVQxGKtwDnLnLuxOXnZ8i731ByubT8o1Q0MzR%2FIBhJeGD73cQ7ioIom5v2qa5xHgtgje%2F8AyQpHtHr6j%2FTbRxJRB8SlbjjzL69JjH1Yo6ExOqyyDa8YlzPb86812nNRm2tUv28izP03EuKBCujSxEPFFwlUredXTGzej7ms%2F24ftemoXdgEtB1cvjbPMJNZIayPDm00J%2FDFmDGinz7TfF0mDEEpWJPeDCoX3cQKK%2FlHRN6bl19O5VvNj2s9Vp%2FqJfh9mb88rtJ1P2dEpPUI6qDIf2TCRUPRs25HyUQ6X2t7aFzjIW63AwE3Tc0kLvJ1eXfo2FEAkdZ2xwRBAyDhI8aNwIOpuoW%2FkkOYaecawI6CrYa5gR5KWNUttOD9vAehfRfrrAfQzcns6E4zvIRwi3JknwfANVMLAat%2BTOnL8bQT6HEt7xInKWkZtcUwgPcnVkLMAV%2BqHbZQVSwPWEMvEV2IMITGHauTT02P4AxAIV%2FkVPphyX64IVNb28gv4GvZNC8w5EfbSXuSkzoN439GKwy%2Fpt0GQgiEHvI4rotFFlR38UPL%2Fu8U8uBYqgTbK1dM8NVBrSknsQTvxgBaPUeEkEBAc%2ByJTTVzyYDPObdIs31BU67TrmoxLKWtxFJHqcvDXX1Rwwns2pvQY6pgFWeqfveZLDKxg6Ju51LqZUv%2FwkW0SBXSxM%2BPDpNeadnTJHrECoyZD4Jcb370CWswEzMfJhOECxDBTT8rdaqxanO4QyeHPJCJFD1m%2B5QK4547OcZQea8c374WteYfxoWRoYtapHgHGKBrz3YC%2FpjsoNHZRlCdXI37vQnWR7B2JZWwNDlrif0Cf1LKtGPphckxii5%2F318lcWLiLlCrZPUBnVXXobVoXz&X-Amz-Signature=e752c7148d87e225188eb31e3f21e88f7b9b39380d9daf315eef0f75fd0d6c0a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVP5BPSW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCiYBGBiZY6ETuZBr6t4EvOARoYJGK%2FWnOzRY7Q7O5sAiAdNtRJgMQBqmo2c29kcI4Yix%2FMUkIZtruObgqaCtJ27CqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMmdGILgkbNesVQxGKtwDnLnLuxOXnZ8i731ByubT8o1Q0MzR%2FIBhJeGD73cQ7ioIom5v2qa5xHgtgje%2F8AyQpHtHr6j%2FTbRxJRB8SlbjjzL69JjH1Yo6ExOqyyDa8YlzPb86812nNRm2tUv28izP03EuKBCujSxEPFFwlUredXTGzej7ms%2F24ftemoXdgEtB1cvjbPMJNZIayPDm00J%2FDFmDGinz7TfF0mDEEpWJPeDCoX3cQKK%2FlHRN6bl19O5VvNj2s9Vp%2FqJfh9mb88rtJ1P2dEpPUI6qDIf2TCRUPRs25HyUQ6X2t7aFzjIW63AwE3Tc0kLvJ1eXfo2FEAkdZ2xwRBAyDhI8aNwIOpuoW%2FkkOYaecawI6CrYa5gR5KWNUttOD9vAehfRfrrAfQzcns6E4zvIRwi3JknwfANVMLAat%2BTOnL8bQT6HEt7xInKWkZtcUwgPcnVkLMAV%2BqHbZQVSwPWEMvEV2IMITGHauTT02P4AxAIV%2FkVPphyX64IVNb28gv4GvZNC8w5EfbSXuSkzoN439GKwy%2Fpt0GQgiEHvI4rotFFlR38UPL%2Fu8U8uBYqgTbK1dM8NVBrSknsQTvxgBaPUeEkEBAc%2ByJTTVzyYDPObdIs31BU67TrmoxLKWtxFJHqcvDXX1Rwwns2pvQY6pgFWeqfveZLDKxg6Ju51LqZUv%2FwkW0SBXSxM%2BPDpNeadnTJHrECoyZD4Jcb370CWswEzMfJhOECxDBTT8rdaqxanO4QyeHPJCJFD1m%2B5QK4547OcZQea8c374WteYfxoWRoYtapHgHGKBrz3YC%2FpjsoNHZRlCdXI37vQnWR7B2JZWwNDlrif0Cf1LKtGPphckxii5%2F318lcWLiLlCrZPUBnVXXobVoXz&X-Amz-Signature=9f74f5e589a93275cfcf0b106bac9da1a5effedc048004443ddc3e41a026ba11&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSOU4JSA%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcwecdZxbNBp2q8vhUfGruIW9i1iIIgspsATY7XGGEuAIga%2Fc%2FkjiS20CBc02NQbLx4LnrC5hTJqSXFAvHVcR%2BdV0qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUbC3B91wF6dLr5ZyrcA9NxI3LukFa%2Fdi7suuwwl1zeEXOPrXiaa279Arj1BfdTJ1g9skj7aoGTdgGswxDLBFwlq5MUcJM1iW4eBfsPlKCRtuHkyvJe6TzWLF61LUQNWqsnwg1M08oaTqYLH6P0OPId774AArS60DGHqPNQDcDVEEDMj6AwDE8wmbck6FGmbYAqNuIQv2398JIGQjaQM2mgpLmqDjK%2FxiA846GEsYPl%2F4TW392v4XGBnwofeyXts4%2F9cB%2B7CYkuBMHx6TgI%2Bj7dk6dn%2Fm73uTXMxH8aBFf8jdSG8%2BgV8bD8Y%2FXFhWmBktLrVmI1zlJD9wNJHg%2BXyCjdjpDWuwegqkF4v%2FBGcDQEQZMhDw238rkfVzZYW1CZTwPA6KPFsgzD8%2FCFJpWLHn6ND%2FQnW55ya2TnZbENxZu5MdBTOU3MJ6jZrKa%2BTVymcVKmj9Nu0y1jHeiVESGXo0EHM00Omy4cX3mzy0Gqc4ZKKKouunF2zdNTNm20eqv7nisD2bdBb5UREXqJ4oqZahlwT0dnNhTUEM5lLUsEyD1YCDZtUK4aTqR4kIXmy0dBo7Dlqev7mZ3ONad6enPkqY4OQYAmuUcaZp2h3BotolVlrifN5qMzgO1QEoWjqZgUOQlKt1%2FiYSQTqUeKMLXNqb0GOqUB6%2BbkyZJiv755wUzhV1KHhGLeZrrY9jtpAodFpMCK%2Fv%2FpUcS06E5FMHNtN9jMKMdZlcN2bQXmVmX6Iv9rz9N1F7ewfvFeJ0bworxDeMwMOZRu%2FRJ%2BnKjIm0JAcODkx1YEJggldHywOjwkEUwcseWHjEAc5ntMWZU8Edpi8B1%2BCBfE%2F1mSmHcD81H5mJbMFepNjxgQy1kANMOVRCdI29ooB%2BY3WpB5&X-Amz-Signature=13d18f673f38419b62054bbdfdb230418e036f829934db62ea1864f4fe426c48&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZL63M55%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLTvL8grZiclsV7dzX8F5Yv%2FhHWM4dK8ELpJhMrsEgQAiBt3b%2FHtmsdjsev2Anq6v9kbtuwL6%2FJu74SvmA0gQlt3SqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTXKVJ1MjGYabp8TZKtwDz5Stmof8ThyLRg7LEpXg23LeAfiYEQOCo8%2BDXud43aL0KrDPGkebWUOmWTXl3IRx%2F1EEniTkvkZIa0X6R4NPLCKe4ph6KGnchRB04j4eLISSWe7b6Nup3sygCpeA%2BitrhrWP0DtPD73jyJXLiLzkyOQYsWy7unj7EGtOOVDn0zA801v%2F0Fk5beeEDbIHOJkQBqIfQ795WIPLlspHVgbOo1R1wKrf9dzCBSrqVPnErjpVUqLamqpp0MjC7wt46Nd%2FYhCcDWRfZDSyJeWzjKQVFbOKugnkuv0jgJgkIYhM5wW6s7IUgsk6lYLnz%2BSw6qDWX8Pi5qs%2F320eSGRhfCbqxX1MpCGatPxgBPThDRyHMaUfarkE277DyZHWD3ydPzzEDn0z%2BE8D3hLqYViOIQEp6yP6jFE398Qrg7%2BEGxzhmcFjULciVxgLigSXkofpvEbnSm0qy2UbbYluFGC8dWWT%2Bim1A%2Fujy50BbtKgp9H6JtpUdZog%2FYh5GON4u0TuyORRTbojPYgjOZt1SNyrCCob%2B0zHjY1cKRH7mFNtyLcaLrjSqEE2gLM09k75Se%2F0uAoIWhX1U%2Bo3MkT7GGcs5TUU6YuY42QbMbdP9bWFTomb%2Baq93%2B%2FhHMzfIYcAauQw78ypvQY6pgF05OOQYF7yTZ0IbOYCJNf70NPL6P8bhk3tId19qdR9hA608C1w8s2lkVUGKg7go0MXdKo9HpGTBUHlAi7Qh8K27KTsVoABlz%2BQevqz7fguFQwU1XOVmP5sdR1ESSuy5gtpCWrkRJJBVSiltFyEpQCIWkKE46SzoKPIr4U9Y3VsiuUAaZwa5w3WwXcLrPZmebb27sML6mlMnFvWpOf9iLksOSTAbo%2Fo&X-Amz-Signature=246efb9461887bf8b9f21c8c5a0f57474373dabd1fa228ddd960a579f0c26199&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVP5BPSW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCiYBGBiZY6ETuZBr6t4EvOARoYJGK%2FWnOzRY7Q7O5sAiAdNtRJgMQBqmo2c29kcI4Yix%2FMUkIZtruObgqaCtJ27CqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMmdGILgkbNesVQxGKtwDnLnLuxOXnZ8i731ByubT8o1Q0MzR%2FIBhJeGD73cQ7ioIom5v2qa5xHgtgje%2F8AyQpHtHr6j%2FTbRxJRB8SlbjjzL69JjH1Yo6ExOqyyDa8YlzPb86812nNRm2tUv28izP03EuKBCujSxEPFFwlUredXTGzej7ms%2F24ftemoXdgEtB1cvjbPMJNZIayPDm00J%2FDFmDGinz7TfF0mDEEpWJPeDCoX3cQKK%2FlHRN6bl19O5VvNj2s9Vp%2FqJfh9mb88rtJ1P2dEpPUI6qDIf2TCRUPRs25HyUQ6X2t7aFzjIW63AwE3Tc0kLvJ1eXfo2FEAkdZ2xwRBAyDhI8aNwIOpuoW%2FkkOYaecawI6CrYa5gR5KWNUttOD9vAehfRfrrAfQzcns6E4zvIRwi3JknwfANVMLAat%2BTOnL8bQT6HEt7xInKWkZtcUwgPcnVkLMAV%2BqHbZQVSwPWEMvEV2IMITGHauTT02P4AxAIV%2FkVPphyX64IVNb28gv4GvZNC8w5EfbSXuSkzoN439GKwy%2Fpt0GQgiEHvI4rotFFlR38UPL%2Fu8U8uBYqgTbK1dM8NVBrSknsQTvxgBaPUeEkEBAc%2ByJTTVzyYDPObdIs31BU67TrmoxLKWtxFJHqcvDXX1Rwwns2pvQY6pgFWeqfveZLDKxg6Ju51LqZUv%2FwkW0SBXSxM%2BPDpNeadnTJHrECoyZD4Jcb370CWswEzMfJhOECxDBTT8rdaqxanO4QyeHPJCJFD1m%2B5QK4547OcZQea8c374WteYfxoWRoYtapHgHGKBrz3YC%2FpjsoNHZRlCdXI37vQnWR7B2JZWwNDlrif0Cf1LKtGPphckxii5%2F318lcWLiLlCrZPUBnVXXobVoXz&X-Amz-Signature=a30d2f6b6b30143e2e2188ad77f67fc84b01c93747f6a6041b2285deeb3ca076&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
