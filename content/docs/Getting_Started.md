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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NISXYWV%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIGcYcPS9FqKgJhSypONNCueyzywaUV%2BZDiPvpEHZp%2FPcAiEA3slPnk2WXmAtCoWHMtp465JKz3N28KyItdUkHjukzucq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDOlJVgJO7OanmDowCrcA8wXbuFPO26fRpNv6fcrzcgfvgDQgKVSo8NiNYEBBEM78KeL8AD546N4uUHcSrn92383DbPgUmoV2QbvBG9%2F5fdjGRHavbdZ%2FdwfA3YoXMoAVzY%2Bw%2BZv4c%2FwQvjctSwDxz44%2Bgf5Xfyan5igIX3DAki6blXvqAc4%2FiYS9xTP8%2BP472ing5Xe8fO%2FhCRO4DvxHnVWxUJOkE71qRb8FQvYTMfv8Da99mPqz2LKAor7IVR4hVME6RWnFeWw8FUArvywHFDOM6zHhGB6fIRxqdO32ysrAY1WTvlUhu359YlEWpAhicRJpzP0QM8aajoDOX0sn6pZ3M6xUwFzcCftXKSI2rTFzq4QtS8ldOypWh9XIq1YDCVALhREfvKglehDHVYF%2B%2FCD%2FfzSf1nON1IEX9zxxPgcrbSaA8zqiC0eOKzyRgEz7R%2F8%2FEhMZo4wrsczRxDjKeq06D9CC1J9sXbA%2BX5gq6Mt1LhR17Ozzrk3%2Bvb0ZErdnIOrP9gkDoScA7z0ZbpHT7EkMSWEV9b5RY0R81ej3W819p%2Bd7dbWiz%2F0Rcsu73J1vK16xx0b5G3FyE4midsCNPlcOE45WWPt5cfvQw5yl5xd9yleWnmhA%2F%2Bebe3pEZsp1FUlRZBMKPrIxv5rMIKdx70GOqUBsz7T4ovh1TytlPkaPe8paSddMa4DPfFJWVfNn3P1ZhovkwnwaXnHDm4s8%2FbSOgiLYiZ%2B1CRRVChOdRT35%2BfeuzNXb7B0UNIH2xawvGBcni%2FACP1fWeddVeV01IS0rXwHDH8cHrAgg%2BlR2c6S2ceLniK11R7r%2B65ov56BqZa%2FS4DJNCaymIN5xmLmKT9pc76H%2Bfj5KrfuKt%2FtRdcBcxL60IaISpkO&X-Amz-Signature=b3b4bd25661612b901d41e767b2feed637424e33744fc8525f1f6f3f9b8cea3c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NISXYWV%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIGcYcPS9FqKgJhSypONNCueyzywaUV%2BZDiPvpEHZp%2FPcAiEA3slPnk2WXmAtCoWHMtp465JKz3N28KyItdUkHjukzucq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDOlJVgJO7OanmDowCrcA8wXbuFPO26fRpNv6fcrzcgfvgDQgKVSo8NiNYEBBEM78KeL8AD546N4uUHcSrn92383DbPgUmoV2QbvBG9%2F5fdjGRHavbdZ%2FdwfA3YoXMoAVzY%2Bw%2BZv4c%2FwQvjctSwDxz44%2Bgf5Xfyan5igIX3DAki6blXvqAc4%2FiYS9xTP8%2BP472ing5Xe8fO%2FhCRO4DvxHnVWxUJOkE71qRb8FQvYTMfv8Da99mPqz2LKAor7IVR4hVME6RWnFeWw8FUArvywHFDOM6zHhGB6fIRxqdO32ysrAY1WTvlUhu359YlEWpAhicRJpzP0QM8aajoDOX0sn6pZ3M6xUwFzcCftXKSI2rTFzq4QtS8ldOypWh9XIq1YDCVALhREfvKglehDHVYF%2B%2FCD%2FfzSf1nON1IEX9zxxPgcrbSaA8zqiC0eOKzyRgEz7R%2F8%2FEhMZo4wrsczRxDjKeq06D9CC1J9sXbA%2BX5gq6Mt1LhR17Ozzrk3%2Bvb0ZErdnIOrP9gkDoScA7z0ZbpHT7EkMSWEV9b5RY0R81ej3W819p%2Bd7dbWiz%2F0Rcsu73J1vK16xx0b5G3FyE4midsCNPlcOE45WWPt5cfvQw5yl5xd9yleWnmhA%2F%2Bebe3pEZsp1FUlRZBMKPrIxv5rMIKdx70GOqUBsz7T4ovh1TytlPkaPe8paSddMa4DPfFJWVfNn3P1ZhovkwnwaXnHDm4s8%2FbSOgiLYiZ%2B1CRRVChOdRT35%2BfeuzNXb7B0UNIH2xawvGBcni%2FACP1fWeddVeV01IS0rXwHDH8cHrAgg%2BlR2c6S2ceLniK11R7r%2B65ov56BqZa%2FS4DJNCaymIN5xmLmKT9pc76H%2Bfj5KrfuKt%2FtRdcBcxL60IaISpkO&X-Amz-Signature=a3c9165a6a7278f43a9fc7602a0b225ab1736f320d3acdc50ebf525a189b7cb9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QYZLESL%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCd9FdJG6tIf7q9TEFBFUhDaX1Z0CUp%2BErEjbvqGP8OKQIgfgvBxBnkdRd1eVmQ0aHMwWSafNPqKVdW10aVOd4KN8cq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDG1KJgswm89EuixJ7yrcA3gIQgrXCWQoROA1ElBEBw0VyDOuahMYzH1czDCgso2TUks8%2FnejxMuN1ou8KY6%2B%2FBltNYTszo8ksmmddQNG1y4ExV770Plb91sDmnX4Y%2B62LfxVyRDkxapLeKNHt%2BoLIMGBgL67YxgmE21CIOD2vBU4uasYQOStmh6LEuhNvwfFSnNVHBBg%2BFKiarpxgDiOB3rD6BIt0tIjkd5sHoHGRbsFk8JO59FJ6JNSA%2BVsnFc4KRdW6GuSS0CPlyJOi%2FeEFoXV3Dm7LzbY7Sgyq8sRPCjY4emezPbj7K3ec9YyiYliHQSle4JDUUcmb8SoAvO5fjqGl4ewbHzdgCuWmbJw2dLMtXCE%2BhZ1IWjcnZ60zY06S2SgCUeboFPrh%2FQKu9UvGe%2F557UbgLxcd6UiFy%2Fh6qRep5hTREZvEY57C5mUfspVuQeVqwp%2BGdNcUd4GMEVU7UmgMRDvp%2FOgRBZd9D%2F1WKHlOIwXJ6sm44ZnDuFiUupUND9dm2Ch74BksY0RSrtB6IsriuxC%2FoLet2civufD4RwBTkzmjLnGW0N2povEq1sGeuIwPE45pddHQnJ5yv71o767X%2B3Nz%2FzkfDa%2Flf42NHaPi0iRZLQbX6rdt3PqTnLNoxvzKdp9BLUMke%2B6MNijx70GOqUB%2FzYTsHHRPj3W%2FOQMhPI7uQlJ%2BjSgqwjRVz2LVz0Te1Gr7JxgTlTGl9xS%2B2FB8cDryF5zERNg3cOyFUAIzy%2F6y77IG87KgitoMEpjmCmx6CnWTNBi7GQ%2BzXVf361LftpLcvkddBh%2BK6uqpyMpK7t3x87xoKOU9IEOWMqgPPjQ1NOsE8mw53tngsBctG%2BDO%2FCO9B6UhD%2B5FrPQdAXJal77biXYyNi3&X-Amz-Signature=389fae779cef9c0c1c4b93305cbd9b5a28b5210a2435a66af3076fea95dee073&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3KKTUV3%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC9WDAtNcxQHrELzzv7HyO1E96dUImGJ4PMBYUrMAxiagIgZyvbjXKFgJL4zjlomEyVrIWpNsiD4XwVS%2FGT8ZYalDcq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDsKO2ztu6GPhXeYVSrcAwE2nhhWci8drrA7SyoInCgXEjlR0g%2FQkXFpRN%2FYLaGmYmv3spT4oPiKJ9%2BNo0mHLJN6o3KNiCIwAKHfs0LlZdSSwiRNHxLLSWkgbg%2BpMbPyeXE0jqs41EPMEG9uxdQYB%2B%2BBHnx%2BgsG%2F65a%2FFLREvPb3pEcEaSavnQ3tO55XiPD9%2F4lvJXC%2FqTbuQE%2B8tRwyLhBHRL3%2BdWH0ZeNBSPtHwdmenXzyOotxlSWraLuclwrbkjJH7iAvbtecHZg83yI0N%2BwioHDePDlMyW5MLfGZ7yoGlpet42InDFeZJS0A0iunXZv7ziczR4ov9s64X8RlUy8wlK2cD5cILI2GwqZhxrA2%2BLXdGLwIk7woPla2v1D75Wv4OOP1%2FpgbyIhkt%2BRLCiIcKs%2F42Rp%2BjHc9AVMgEojRaLXm74SCSGh%2Fm8DbnE8sK0EAaUwgFyyXBjOLcqsr6zQxTXj41yy9DrxsK3msf2QuMvzKj9HMBJptMLel6gEiOu9Zc7EUPxyr06bXX7mavTiRhbEsdZgEoceQ1BSqNNo5olbZ8W7UasBYWZz7QZxAzaEe05yJ4d9qpXgo22EPwsreGaEqQXPRkTAoS%2FgSsYgTYLgkEy%2FgJ0pFpUrQ5ZzmlAdvFq7fKHzF8vHAMMygx70GOqUBot5d%2FFANWCk4X0IBkYkXLLc7tdRqhydnwRjjvl6tg4qFvT4X4Pcz51kNwuX0Q0k9%2BBWbsZUpf4NoVWroJjWqJ0fg0HI2pe3%2B5vaKaEDBrGgSXWlk6qOVVc8XyWjtvMOKokQDBvvfX%2BoWvm0EDh45Yo0au%2BEq%2Fb8fV0NC79kJpvow2AYtukFANsHoRguB7Ol%2BqGwOgn0ogOYiRgm0qoTuBWMbzICT&X-Amz-Signature=9629272ccb584af64fb20b4a230e4318b942d748aae4b28c4d4ea2f0d4d4f43f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NISXYWV%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIGcYcPS9FqKgJhSypONNCueyzywaUV%2BZDiPvpEHZp%2FPcAiEA3slPnk2WXmAtCoWHMtp465JKz3N28KyItdUkHjukzucq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDOlJVgJO7OanmDowCrcA8wXbuFPO26fRpNv6fcrzcgfvgDQgKVSo8NiNYEBBEM78KeL8AD546N4uUHcSrn92383DbPgUmoV2QbvBG9%2F5fdjGRHavbdZ%2FdwfA3YoXMoAVzY%2Bw%2BZv4c%2FwQvjctSwDxz44%2Bgf5Xfyan5igIX3DAki6blXvqAc4%2FiYS9xTP8%2BP472ing5Xe8fO%2FhCRO4DvxHnVWxUJOkE71qRb8FQvYTMfv8Da99mPqz2LKAor7IVR4hVME6RWnFeWw8FUArvywHFDOM6zHhGB6fIRxqdO32ysrAY1WTvlUhu359YlEWpAhicRJpzP0QM8aajoDOX0sn6pZ3M6xUwFzcCftXKSI2rTFzq4QtS8ldOypWh9XIq1YDCVALhREfvKglehDHVYF%2B%2FCD%2FfzSf1nON1IEX9zxxPgcrbSaA8zqiC0eOKzyRgEz7R%2F8%2FEhMZo4wrsczRxDjKeq06D9CC1J9sXbA%2BX5gq6Mt1LhR17Ozzrk3%2Bvb0ZErdnIOrP9gkDoScA7z0ZbpHT7EkMSWEV9b5RY0R81ej3W819p%2Bd7dbWiz%2F0Rcsu73J1vK16xx0b5G3FyE4midsCNPlcOE45WWPt5cfvQw5yl5xd9yleWnmhA%2F%2Bebe3pEZsp1FUlRZBMKPrIxv5rMIKdx70GOqUBsz7T4ovh1TytlPkaPe8paSddMa4DPfFJWVfNn3P1ZhovkwnwaXnHDm4s8%2FbSOgiLYiZ%2B1CRRVChOdRT35%2BfeuzNXb7B0UNIH2xawvGBcni%2FACP1fWeddVeV01IS0rXwHDH8cHrAgg%2BlR2c6S2ceLniK11R7r%2B65ov56BqZa%2FS4DJNCaymIN5xmLmKT9pc76H%2Bfj5KrfuKt%2FtRdcBcxL60IaISpkO&X-Amz-Signature=b900d338491766928cc4734b7d2d0df469a4cf473b924655cb8786912e31f34e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
