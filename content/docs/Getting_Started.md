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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYASFSB3%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCICtCginbjXVllnWOFIo5KMZCoAm1ZzhpzEkiunFPttvyAiEAhIkCPsvoCz2o9ykgTYCgOL%2BGi2MnP%2FBO%2BIK2ZNf0abMqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYM9CCoSgg%2BuRfg4ircA6gZJhl2LMPEFMhKBcUlesj1lMcbs36EkGcSuHYScGDOVHgQqU4rC8nriCAKVdhb8Sb3mBBPYceV9G4oyB%2FBgMoG2aMHO7zYOuIeYXRLB5MulmL12%2BThbjAmy90AKTNwLqI%2F07xU86%2BuUcKkrYByJUIvTlBTqYab7E%2FHPHms23ovk5ZkLE1JvCwWTx4Fp0dal3MXconPO3Anp1LvgGT6OsgnPcdEiZ74G6b0ULcEgU10KQ6PYv721Ha6mMK%2FJurwbBTLyVqe5keRugz5QQWjPNahHPjkBK8cmS6u7jGHXNBQVRIby8uw0SDSTOsnIoAoUlo3RMBhqsruYuFbeN1fFT%2FeLomGrFdpZsyGy%2FqqPv0SewUt2XBm%2F5PLkxZkKbK1aEo5GJPSZ5MOL0byj4%2BMK9crW4Lc1P55xRoI7vT%2FDZDQMJq20f7mZ3iEC70yLjbcBNVDGgZ7yElmGQkCL8KR%2FgLuFIBiP1ZZ9SVa%2BadaDlG9uWgUaKBDMW6WjevfqL2BEPVfLPbMNPQLhR7aYThU%2FO0LaS6XKgsQKocMVIJaVqHeRoKbT1rRJkF13UbZjRdmSOx4MWWGlHDh%2FhhK6loYRvSR7NJfhdq6%2F%2FcKWnLlogryfIqJZ8QCkq8jF2gVMLbYtr8GOqUByyQim5TbsFcHpVVqiNIDxLErk%2BwsXuxBPcvTRWDSw8QE3qpHWkgJE1LDhGVlepSPn8li4AoExB9T1zbpe7e8nVlEK0icqTHyO0y%2FMGxV2N5exlCSoentCq33JO5FeB%2BbGNQ7c3XFZeN5ctaMtrbvxt6hd97AFkGhs8Y%2FbCN7kj47BxW4WJmwlYmxJnJNavzlj1GVpQuMoT5UWbs7JIyQyxsUsrpv&X-Amz-Signature=adec8bc75482a9dce8024337f981e2682c8543cc21ea6fefe6dff45579e02410&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYASFSB3%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCICtCginbjXVllnWOFIo5KMZCoAm1ZzhpzEkiunFPttvyAiEAhIkCPsvoCz2o9ykgTYCgOL%2BGi2MnP%2FBO%2BIK2ZNf0abMqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYM9CCoSgg%2BuRfg4ircA6gZJhl2LMPEFMhKBcUlesj1lMcbs36EkGcSuHYScGDOVHgQqU4rC8nriCAKVdhb8Sb3mBBPYceV9G4oyB%2FBgMoG2aMHO7zYOuIeYXRLB5MulmL12%2BThbjAmy90AKTNwLqI%2F07xU86%2BuUcKkrYByJUIvTlBTqYab7E%2FHPHms23ovk5ZkLE1JvCwWTx4Fp0dal3MXconPO3Anp1LvgGT6OsgnPcdEiZ74G6b0ULcEgU10KQ6PYv721Ha6mMK%2FJurwbBTLyVqe5keRugz5QQWjPNahHPjkBK8cmS6u7jGHXNBQVRIby8uw0SDSTOsnIoAoUlo3RMBhqsruYuFbeN1fFT%2FeLomGrFdpZsyGy%2FqqPv0SewUt2XBm%2F5PLkxZkKbK1aEo5GJPSZ5MOL0byj4%2BMK9crW4Lc1P55xRoI7vT%2FDZDQMJq20f7mZ3iEC70yLjbcBNVDGgZ7yElmGQkCL8KR%2FgLuFIBiP1ZZ9SVa%2BadaDlG9uWgUaKBDMW6WjevfqL2BEPVfLPbMNPQLhR7aYThU%2FO0LaS6XKgsQKocMVIJaVqHeRoKbT1rRJkF13UbZjRdmSOx4MWWGlHDh%2FhhK6loYRvSR7NJfhdq6%2F%2FcKWnLlogryfIqJZ8QCkq8jF2gVMLbYtr8GOqUByyQim5TbsFcHpVVqiNIDxLErk%2BwsXuxBPcvTRWDSw8QE3qpHWkgJE1LDhGVlepSPn8li4AoExB9T1zbpe7e8nVlEK0icqTHyO0y%2FMGxV2N5exlCSoentCq33JO5FeB%2BbGNQ7c3XFZeN5ctaMtrbvxt6hd97AFkGhs8Y%2FbCN7kj47BxW4WJmwlYmxJnJNavzlj1GVpQuMoT5UWbs7JIyQyxsUsrpv&X-Amz-Signature=b63c4e6e304b10c10e006d4507e8fdeac24a265bbaa2d4f471d8771dc2c35e41&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6PD2AX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCSmwKMzG9hH9B%2FOQGbaJxSV4Rzwaw8U3IZwsPjtgTLIAIgf%2F1F9X2EH3XvXfhmiRvqIsy3xLaU6JvHgV4roWbNdAwqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkXbW9ctihXx0060yrcA0VSRJBshwM39w9GvkWj74pw5I0NVvCdbEPBuEpdS4HhvtLWNIq4kMNLbEyHLCF%2ByxQU8YCr%2FnnKGxakmrGT0xuBCWHccjYF40G1xPqewxxn2%2BDgxf2czkB3zecRZ4WKXQR5LB5XdsC0akYsDgK%2BTTTxs%2BDaS6egurUKP9To%2FrctAQ%2BXpXY2pdAET0dy34stjerMFOt6jz9KFAEvxW6%2B1mry%2BY%2Fua9Zh2Ezqk9Tznthb5mb5E7E4qbb8URsqvReAxhj%2F69LTHL6SdXMs%2BbNa6x7pS%2BAgkes%2FXflB8qa%2BfDXEVIzRuqQUsG%2BZRYFdqL12lLTMm6BFAafKdMxX3XFuuO5%2B4prRUOeF%2F7Q3HOjcC71HQm40mgeQAqWVw7rRr8CMVwfdZ8mx7t9r54j9ZEKHCvcmGdSW2tjUs6NZfabzeSzvEwzw3fVraVrDqldXUV7%2FWDtUCv2qCyP1wteJARAGi%2BJuBwc%2BJWaSqThN%2F0aMimrZ3Qs9VMPrXvoj8V330RhAblpMrsP2jayblaUembGUErWUxAKySggc%2BBv9gsQdex%2FRFBMMzdrNyEoLYkkqWGPRtNU1u9WHNkohseXJ2EiAzlbbMh8ffEJ4a%2BgNhUY55EmgM%2Fl5pwkwlK1EnWjCMNrXtr8GOqUBh59xG9O427JHCTu81Kq2WGBG1nS2L6nM%2B8m%2FIhB31OKQO5RI5Hu7rUZq25nYWC2LcnN4Sp8m8fc81lJoXdDWGz4vufVMHwn9NDF3uuGKreTe5HpnfMxU%2FPmjoaYj6XMJQkGm%2F3cL0eflCrDi8AyI3df8Y0LqNSXGL4BYCJhVcjTT%2FqS9FCFeQ910pQfhaFlPodz%2FVEPQnBc6Blzl9zjlmnLBWQXI&X-Amz-Signature=5fb79641af09f6c1249918d42a234b594a18e4a293cc6e402bfd1b17316d57a2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZGGWMY%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCfKHNEvZ35AvUt2Izu1sI5tp28j%2FzCgHMx1T%2FQQTOsagIgChCj0QaET4fz%2FL4sa4sMwk%2F82Xqg3LPETKmwdN1eYdUqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOB4C5kmqga%2FMjOzSrcA%2BFPM%2B9w8tA7cZ7mMGqo171UQv3MblD9%2B01Je3pIlP7ffgg2p6nsrfIuxRLQvG1kftIJmIxs5Kit%2Bbq22w7%2FYptmOdqZbDSRwgFmmZM53FRxV2tPw%2FXP7tTjZPW2BreZTO0yXNtzgnC%2F7kwqqQfouyvKQf71GNflyE4YTPTL9ihR3BRUfKIFea1j%2Fd2oNHfqHJj5%2BZ2p4VBF5D%2BFrTcAp%2BpLD0Ea1DgH7TY2cmnlkSiGiGO%2FMS%2BOOHDy4DXorGq06qXIBK0AJkK0g%2B7ivf2Dbc3syhPbTzKZHHuSzbOvBNRP46QnncIpkc4KS8ZEdmnjNKal52uH3XdTIPWIhWdKiAs6qHyeJ1BkUlRBXLiw6ehZbrroAI%2F351PJkacAn3WTVz9Cm5S7nixmg6TY1549Tozky495lfV14Roze7b4CSMiJquhGNLi%2B5KDpf%2BzBWueCKOnJfknpqyMhK8zHeDqL4B1a7qjHf%2B4%2FMUVBm7f07mrl68KO5ArJOgNVRp7DvTeMUlvNUg3wbr70EtvTPQUU7%2BY6NkUvadTFpiCSVZetglSooapg3I8GRO%2FdWflVt5q37KDppzW9p8jvA7sk8SVncHIHRFhBtxJPMVlIxmW8Kr0vctKqat%2B4saJb6vtMOTXtr8GOqUBjReffI8eHhVsgZ310be9joNRB9NS8zVfSkDwM8M2yXkRnWZuJHoQoiQMpYiWxdExAg4IvgT%2Fj4f9lJm0wjRxTI2uqyWFf%2B0UomxNZ0LjTrfxc%2BX4%2Bri9Rjhgy%2BRppDLDenE3VcEr2nB2fIBQSZZZPSFlnxZfpSSoOG2yMbSSzMHvXc5uXj9eGTi9M2vnskNMgc6E48MgEsqENwiGWGYTwdwUhKb%2F&X-Amz-Signature=49ec6cd9269ee7c753b50303c32acc8e58cc9099dc3f4187908aa230e81be5dd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYASFSB3%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCICtCginbjXVllnWOFIo5KMZCoAm1ZzhpzEkiunFPttvyAiEAhIkCPsvoCz2o9ykgTYCgOL%2BGi2MnP%2FBO%2BIK2ZNf0abMqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYM9CCoSgg%2BuRfg4ircA6gZJhl2LMPEFMhKBcUlesj1lMcbs36EkGcSuHYScGDOVHgQqU4rC8nriCAKVdhb8Sb3mBBPYceV9G4oyB%2FBgMoG2aMHO7zYOuIeYXRLB5MulmL12%2BThbjAmy90AKTNwLqI%2F07xU86%2BuUcKkrYByJUIvTlBTqYab7E%2FHPHms23ovk5ZkLE1JvCwWTx4Fp0dal3MXconPO3Anp1LvgGT6OsgnPcdEiZ74G6b0ULcEgU10KQ6PYv721Ha6mMK%2FJurwbBTLyVqe5keRugz5QQWjPNahHPjkBK8cmS6u7jGHXNBQVRIby8uw0SDSTOsnIoAoUlo3RMBhqsruYuFbeN1fFT%2FeLomGrFdpZsyGy%2FqqPv0SewUt2XBm%2F5PLkxZkKbK1aEo5GJPSZ5MOL0byj4%2BMK9crW4Lc1P55xRoI7vT%2FDZDQMJq20f7mZ3iEC70yLjbcBNVDGgZ7yElmGQkCL8KR%2FgLuFIBiP1ZZ9SVa%2BadaDlG9uWgUaKBDMW6WjevfqL2BEPVfLPbMNPQLhR7aYThU%2FO0LaS6XKgsQKocMVIJaVqHeRoKbT1rRJkF13UbZjRdmSOx4MWWGlHDh%2FhhK6loYRvSR7NJfhdq6%2F%2FcKWnLlogryfIqJZ8QCkq8jF2gVMLbYtr8GOqUByyQim5TbsFcHpVVqiNIDxLErk%2BwsXuxBPcvTRWDSw8QE3qpHWkgJE1LDhGVlepSPn8li4AoExB9T1zbpe7e8nVlEK0icqTHyO0y%2FMGxV2N5exlCSoentCq33JO5FeB%2BbGNQ7c3XFZeN5ctaMtrbvxt6hd97AFkGhs8Y%2FbCN7kj47BxW4WJmwlYmxJnJNavzlj1GVpQuMoT5UWbs7JIyQyxsUsrpv&X-Amz-Signature=3292028e80531585c6dc051626b06c677311a7b3d07d5ff7d863127a4ea34e1d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
