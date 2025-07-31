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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVPM5TQL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTEq0wOOxcQABYaGcBcakiDgGUGHV4EEFPorPlSYoXHgIgOJCx78fYLY%2F41ft1v1UC8rKoUS6wTr%2BDQtgZyexlWfwqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ78iULkem6bQugUOSrcAwfC06ExIZWW7o4pvnRyzlzeukur54723B4tC1AcNGeO1UC4OS9DdxCX2TQfbUoSOjR0gSx03ng5jGHhzUS0Y7o1nRgyBeWKEwqXA3EgQwK3sLTMHUK2DcPey75shseHgXi1c%2Bq5H2M1aFMpIw%2FxYQtMiYtFNVT89EGDra72reJoz%2BSAZTQagklMA%2BS0aLv8wPTL3idCxGHePHrV0Zzlm5XN60b1Cc%2BnRseA%2BKIOlSGDDduxS0NgDlla4UVoOVGoA2zFg0MaixJ5NeMHtoT2ZSgOivHfMuR6IPzm1yNau2MOLvKG%2B%2BSnfjbPxQ57ZnpjGtXanSBX09SQgwGA09aydlsXd%2FM%2FE4hBW5j11xuZlc%2F3e%2Bf34CwjDM5YnP2vD8EhuyW9joLCMu6j9H4tM04xC3f%2BAUPr0msFthbF0nQeysr29MtHGYR7wGEonMMSieOMBB%2FUqoQwfgx6SMR5wfm%2F3hBbDtxdqIneM3rOEwbJpuA0u7yK1F13CrpIhL0vF6ND2aPGm8K7xinEtOCgiwJemO6FKtlCrufF2OJoW5uTqMPVXRk7Uk9IkRqbW4R%2B0fLkcThX86H20%2FyGLhC9AN%2BjBExtZdUPpPYogp0spD8pksP1lVd28YHRPcVqjZrNMJ%2Bmr8QGOqUBMPRogMBfK%2Fp96T%2BAPjwDuzRph3nbIw50UhrwWy26ND6S80ccAqpZmdKtKGXfEdhlRfh%2Fu3ftqCh1GCgZRcAhXThIOQvGZhN6qCDv7i%2BKSO7AvfnEcRlkkIYDbJYR%2BkxW2ni9W9tn%2FQ2w6l0VvkIUBRb9MQ928%2Fu41zhJsQ2HvBZ9ZNBV38XQgeXVgeEoHgiNiWUk6WutpTW%2Bis35GW%2F5iyzvbhFU&X-Amz-Signature=5aad93ba174a446d6737aa451ad636a82d732c6a4754952265ddc8d3c4d96d0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVPM5TQL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTEq0wOOxcQABYaGcBcakiDgGUGHV4EEFPorPlSYoXHgIgOJCx78fYLY%2F41ft1v1UC8rKoUS6wTr%2BDQtgZyexlWfwqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ78iULkem6bQugUOSrcAwfC06ExIZWW7o4pvnRyzlzeukur54723B4tC1AcNGeO1UC4OS9DdxCX2TQfbUoSOjR0gSx03ng5jGHhzUS0Y7o1nRgyBeWKEwqXA3EgQwK3sLTMHUK2DcPey75shseHgXi1c%2Bq5H2M1aFMpIw%2FxYQtMiYtFNVT89EGDra72reJoz%2BSAZTQagklMA%2BS0aLv8wPTL3idCxGHePHrV0Zzlm5XN60b1Cc%2BnRseA%2BKIOlSGDDduxS0NgDlla4UVoOVGoA2zFg0MaixJ5NeMHtoT2ZSgOivHfMuR6IPzm1yNau2MOLvKG%2B%2BSnfjbPxQ57ZnpjGtXanSBX09SQgwGA09aydlsXd%2FM%2FE4hBW5j11xuZlc%2F3e%2Bf34CwjDM5YnP2vD8EhuyW9joLCMu6j9H4tM04xC3f%2BAUPr0msFthbF0nQeysr29MtHGYR7wGEonMMSieOMBB%2FUqoQwfgx6SMR5wfm%2F3hBbDtxdqIneM3rOEwbJpuA0u7yK1F13CrpIhL0vF6ND2aPGm8K7xinEtOCgiwJemO6FKtlCrufF2OJoW5uTqMPVXRk7Uk9IkRqbW4R%2B0fLkcThX86H20%2FyGLhC9AN%2BjBExtZdUPpPYogp0spD8pksP1lVd28YHRPcVqjZrNMJ%2Bmr8QGOqUBMPRogMBfK%2Fp96T%2BAPjwDuzRph3nbIw50UhrwWy26ND6S80ccAqpZmdKtKGXfEdhlRfh%2Fu3ftqCh1GCgZRcAhXThIOQvGZhN6qCDv7i%2BKSO7AvfnEcRlkkIYDbJYR%2BkxW2ni9W9tn%2FQ2w6l0VvkIUBRb9MQ928%2Fu41zhJsQ2HvBZ9ZNBV38XQgeXVgeEoHgiNiWUk6WutpTW%2Bis35GW%2F5iyzvbhFU&X-Amz-Signature=b32b96005002a48e2452fa0eb83ee60f27f84a7daa4d3ebe69cce56f0ff5dac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVPM5TQL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTEq0wOOxcQABYaGcBcakiDgGUGHV4EEFPorPlSYoXHgIgOJCx78fYLY%2F41ft1v1UC8rKoUS6wTr%2BDQtgZyexlWfwqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ78iULkem6bQugUOSrcAwfC06ExIZWW7o4pvnRyzlzeukur54723B4tC1AcNGeO1UC4OS9DdxCX2TQfbUoSOjR0gSx03ng5jGHhzUS0Y7o1nRgyBeWKEwqXA3EgQwK3sLTMHUK2DcPey75shseHgXi1c%2Bq5H2M1aFMpIw%2FxYQtMiYtFNVT89EGDra72reJoz%2BSAZTQagklMA%2BS0aLv8wPTL3idCxGHePHrV0Zzlm5XN60b1Cc%2BnRseA%2BKIOlSGDDduxS0NgDlla4UVoOVGoA2zFg0MaixJ5NeMHtoT2ZSgOivHfMuR6IPzm1yNau2MOLvKG%2B%2BSnfjbPxQ57ZnpjGtXanSBX09SQgwGA09aydlsXd%2FM%2FE4hBW5j11xuZlc%2F3e%2Bf34CwjDM5YnP2vD8EhuyW9joLCMu6j9H4tM04xC3f%2BAUPr0msFthbF0nQeysr29MtHGYR7wGEonMMSieOMBB%2FUqoQwfgx6SMR5wfm%2F3hBbDtxdqIneM3rOEwbJpuA0u7yK1F13CrpIhL0vF6ND2aPGm8K7xinEtOCgiwJemO6FKtlCrufF2OJoW5uTqMPVXRk7Uk9IkRqbW4R%2B0fLkcThX86H20%2FyGLhC9AN%2BjBExtZdUPpPYogp0spD8pksP1lVd28YHRPcVqjZrNMJ%2Bmr8QGOqUBMPRogMBfK%2Fp96T%2BAPjwDuzRph3nbIw50UhrwWy26ND6S80ccAqpZmdKtKGXfEdhlRfh%2Fu3ftqCh1GCgZRcAhXThIOQvGZhN6qCDv7i%2BKSO7AvfnEcRlkkIYDbJYR%2BkxW2ni9W9tn%2FQ2w6l0VvkIUBRb9MQ928%2Fu41zhJsQ2HvBZ9ZNBV38XQgeXVgeEoHgiNiWUk6WutpTW%2Bis35GW%2F5iyzvbhFU&X-Amz-Signature=c26c4fb213c94ba93e6e30df3c8cfdd5a3e29f35ec4241864354f4d532577526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466245BIJ6T%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvQLapBgtbtDqKIB3TTeil35%2B2t%2BUGV2D5AcnsZl0PDQIhAIlUXvdjnD1mtEYdiGQnwdodlPHplVysp9IYWcs7YIOWKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8uFup1Vuq2Fcu6%2Bsq3APi2JT%2Bkf7zMJf%2BaPp1ox7O4MaYnY0gcrPJ9E4z5ZF0hmnCzsb9eBITJR9JT1EMPLVbK5YSAU95WXISr6bx74JX69M1U7Wi%2BSrgTZtF0aiva1xsxoYfb6FM2V2kVs5P9oxlJgEDeFkv89uFWBnuxsQsRTqyuGPMiqtnY5wRGE8KvT%2FTmBRCt4QQPRVfTBvfXpQC2I7tuOigEw6dBjPWAvs8p75fXLMg0Y%2FXhn1AAz6ZBmToeR%2BgBp3TFwxdLBdZEYIgEoMOF71RyLp2Ug%2FHbtPRa2s2KDmk6ORMselCV%2BsRfAnny6ooUQ0D7tceaNRHMh4LIDwrqOwpxojzpD5SeuPqrqddCJ3OKdnBN7AOTBf%2BhsKRdIozOznjGZOm095bNlEtBNu7Ns0e82hSjcmTX3GgVc1O%2ByXo7Vb0V%2BJ5Zc1nS%2FInVaIs7wDL9WPBLJrqjN2DymPMt%2FmW7BDgJlEsIOKH4zclSrPts6rHkzwjief%2FU5ga7BAIIb7fx%2F5GRhl66ZNaT7839oSnsmyrswSWaA0UHxBFdZhzr3%2BlRuVHhCj40ovxjLJ290DlMhL55JtSOmFFK7P9wdGxYXSBRfhYbFyUKvNZSzvaE%2FMGFu%2Fv5thPdB132gk7EqBOXBT6NDCVpq%2FEBjqkAT5pTaq0aBsmoHpQ%2F9DdKJYxjgS0ch9Zr5C0XNTiONN7lxpRi0pzEB7wMstM%2FG96jmn%2FBnaTWgX7c9dwYgD6n4%2BGwXuq8jf5G%2BvWkOciZYnaaONtD5d8NdxjR%2BlrmGI7iuRpB1eRptPZAIJYJs3zD6IZQNFRDAtoMwMxV2V2%2B2yi8zA6i%2By5DodcxZUG9wldw8EXk2o3z9Ln4GNSHMNQMMLrnIDJ&X-Amz-Signature=adc5a6c721f269d81f93e02efb73b1a320c8e22d4ac16e8c7cfa698fe2ab2bad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X45UWWYT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChPdRJi9CxhO710e0oBCEgwUKsqjAJVa5fcNwH2q0rVgIhAPzIvWCVECymWTsqBB%2F9X1TcTn75dsdvF%2FFjAAFhnxzbKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4CpVvVDQkafSWHckq3AMlX%2BhGdy%2BLTQxmqneQLDGcYg%2F1HkKRFwb9jahQouyQaYrXfIIKVtkp%2B40kkIRq0an5oiNef5yRRcLywVBR5zut2JXKbJsMe7Vvb5gE6cf11JLKLNSEiRiojkQauymW8AtvK%2FUmGYMgzeLyuQ8ad%2FpAyBIWDg9%2BUHM4yP2dY5tS2xxPontB7NGBGzOYOoQij2%2ByWlWXk2gIjWz88O1KTZoZlWlts1gAb71w57a5kJT1isSvvpGH4tfQ0PRu0g2WACB0t9lIpLEuJKlV2R48h40ij1nN6gnMrPifS6bTcpUgXBk1Q4dIALw4tK6h%2FjCchDwBsGbe%2BJQ99jfiMXwAQu9fJQ9oQ9d55xPJmomORQfLhYQTJVB%2F16A9mWvpR7Zp1VOyIKWyViuen6WxcjoqDFGLe%2FXzAC87H4tugfy34%2BQuMiitVbo1Old5sITJdIAxdMQWfrSlxMVGvFFPB28KrcESV%2FmW3Iz6kgCwHrWyEutpff9rjncbIqhBOO82HyePCWSP93M0LtJ2mpvAslxG1fFoHUHIZefaVDB3LluK0Z7eUD5xLApsGfeNzJuWGntpAp27fxfFp2f4RWdw1leGVGt6R6jWTnBeXBI4a0BaHhzk%2FzlJppm2u7sli%2FktOTDupq%2FEBjqkASoRskJF012y4e0lUTuCPeOO71d34c4cBEo658kcMSbPm6GrBzbkpb1m49yca8jpRpJNhrd4Fwh3c%2BAbPDq5uUL53pZF5Po%2FTJXaxPOw2EGuwKJLlcAsK6rHXSHpfMXoh%2B9deq9k2lO8iOWK%2F0gL8jzwjK94tk0%2B7Fbj5Gwjj1Q32W%2FL57gMhryEXhS1YzEMd9MgiWhvbtYOrb3qo%2BFzBZ7hKzHU&X-Amz-Signature=8840a0a01c837064fefad3f4afa6821615969fca22c616b3049a20cdd1d9a7d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVPM5TQL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTEq0wOOxcQABYaGcBcakiDgGUGHV4EEFPorPlSYoXHgIgOJCx78fYLY%2F41ft1v1UC8rKoUS6wTr%2BDQtgZyexlWfwqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ78iULkem6bQugUOSrcAwfC06ExIZWW7o4pvnRyzlzeukur54723B4tC1AcNGeO1UC4OS9DdxCX2TQfbUoSOjR0gSx03ng5jGHhzUS0Y7o1nRgyBeWKEwqXA3EgQwK3sLTMHUK2DcPey75shseHgXi1c%2Bq5H2M1aFMpIw%2FxYQtMiYtFNVT89EGDra72reJoz%2BSAZTQagklMA%2BS0aLv8wPTL3idCxGHePHrV0Zzlm5XN60b1Cc%2BnRseA%2BKIOlSGDDduxS0NgDlla4UVoOVGoA2zFg0MaixJ5NeMHtoT2ZSgOivHfMuR6IPzm1yNau2MOLvKG%2B%2BSnfjbPxQ57ZnpjGtXanSBX09SQgwGA09aydlsXd%2FM%2FE4hBW5j11xuZlc%2F3e%2Bf34CwjDM5YnP2vD8EhuyW9joLCMu6j9H4tM04xC3f%2BAUPr0msFthbF0nQeysr29MtHGYR7wGEonMMSieOMBB%2FUqoQwfgx6SMR5wfm%2F3hBbDtxdqIneM3rOEwbJpuA0u7yK1F13CrpIhL0vF6ND2aPGm8K7xinEtOCgiwJemO6FKtlCrufF2OJoW5uTqMPVXRk7Uk9IkRqbW4R%2B0fLkcThX86H20%2FyGLhC9AN%2BjBExtZdUPpPYogp0spD8pksP1lVd28YHRPcVqjZrNMJ%2Bmr8QGOqUBMPRogMBfK%2Fp96T%2BAPjwDuzRph3nbIw50UhrwWy26ND6S80ccAqpZmdKtKGXfEdhlRfh%2Fu3ftqCh1GCgZRcAhXThIOQvGZhN6qCDv7i%2BKSO7AvfnEcRlkkIYDbJYR%2BkxW2ni9W9tn%2FQ2w6l0VvkIUBRb9MQ928%2Fu41zhJsQ2HvBZ9ZNBV38XQgeXVgeEoHgiNiWUk6WutpTW%2Bis35GW%2F5iyzvbhFU&X-Amz-Signature=09e083eb7f4a3b32b9f0025642c46b2942e99a1e11593d3c9f8c2a8ffc60f22f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
