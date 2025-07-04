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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CSS4DVO%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC3Bq81So8qBvkv%2FLORkkx8niEgN4JflrOlDh76putnVgIgbRa%2BrUVx2LMHey%2BmsIqi%2Fqm5fW9tTL%2FiAs7AK%2BErTigq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDAExy6rZk9WvolGDjircAyL2vPdqI9NKepL6DOv4cbcNPdXMNHBxKTyrJZTPUwITqDHnm%2F4p3xIzIZodhK8yxsi1wGG9J%2Bh5JNoYHbz0mI987FHskKFKoBhxr5uvbzgbpeTxbpCfa65y16I%2FXev3IdizyxhwByPzCOgnrI0pw3IT8DCv56QZrEBVF5%2BV%2F7AWqeqqSKIceIaUPzwedtCv0uBGk2ANVivYZMw%2BG%2FgD%2BKnnN6QhHUptRKuQeAuWJG8soQn0gzdQJSVgRyqir%2FrlUQ37zjyyRm%2BoNu2zBMPvsipvFvO3tatPjFPutmwJyCMz%2FB3XtB%2B0lbMRnypGYV1mNdtQuDG1%2FOOqPQv06e1neyA9wILBaMlIOWKxiKYSYY5eEA9BY%2B6dRR58WAgIdy12lcnjFnk6oNLf0NTPBQz%2FqLup7OazG%2B%2B0okpWNFdikdpaLA9YV8RGpBb%2FZCsa99abrlomjMOYEsBWM%2B2VXAUG928r3qQyxcJcjzwGhsJzlBnn0SB223YH2yyxlsh0yc7dHc0uKnc8%2B7qX26y1F63hSwgkXXcBwfAQV1F3tw8xXW2N0ncXJUfRqA8%2FqwSu%2FHPD5fAXnTgvt8YXjFoKf6u4QRkjjG6V%2BDRyWtmMg0wSvhGkOmGhOxc21rMJGUjMMMvgncMGOqUB%2Fa0MVt%2FpCk%2FkB1P7HJ7HQCKZLHUUJNyMrbDd0aEj6hAvOcakvesPwBR4l5RGXmdYYB1YZ64lGKbHDN0GlmSIcMyiLJblnBbDFL1N4NU3nOjimUtrsR9aWOZDhkneN0OwSFLthdWHiatkUUbUTJj2UmgHvg9NNj%2FEG2hjHdgjeaBn3rZNAZj3L3pckHbb8O8UURknidAeeONk93WyqkFjRdiwQP5z&X-Amz-Signature=1b1796372d19850c8fa2a65e6c4706659d8c84e0a953d5c049e071ab9c995783&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CSS4DVO%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC3Bq81So8qBvkv%2FLORkkx8niEgN4JflrOlDh76putnVgIgbRa%2BrUVx2LMHey%2BmsIqi%2Fqm5fW9tTL%2FiAs7AK%2BErTigq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDAExy6rZk9WvolGDjircAyL2vPdqI9NKepL6DOv4cbcNPdXMNHBxKTyrJZTPUwITqDHnm%2F4p3xIzIZodhK8yxsi1wGG9J%2Bh5JNoYHbz0mI987FHskKFKoBhxr5uvbzgbpeTxbpCfa65y16I%2FXev3IdizyxhwByPzCOgnrI0pw3IT8DCv56QZrEBVF5%2BV%2F7AWqeqqSKIceIaUPzwedtCv0uBGk2ANVivYZMw%2BG%2FgD%2BKnnN6QhHUptRKuQeAuWJG8soQn0gzdQJSVgRyqir%2FrlUQ37zjyyRm%2BoNu2zBMPvsipvFvO3tatPjFPutmwJyCMz%2FB3XtB%2B0lbMRnypGYV1mNdtQuDG1%2FOOqPQv06e1neyA9wILBaMlIOWKxiKYSYY5eEA9BY%2B6dRR58WAgIdy12lcnjFnk6oNLf0NTPBQz%2FqLup7OazG%2B%2B0okpWNFdikdpaLA9YV8RGpBb%2FZCsa99abrlomjMOYEsBWM%2B2VXAUG928r3qQyxcJcjzwGhsJzlBnn0SB223YH2yyxlsh0yc7dHc0uKnc8%2B7qX26y1F63hSwgkXXcBwfAQV1F3tw8xXW2N0ncXJUfRqA8%2FqwSu%2FHPD5fAXnTgvt8YXjFoKf6u4QRkjjG6V%2BDRyWtmMg0wSvhGkOmGhOxc21rMJGUjMMMvgncMGOqUB%2Fa0MVt%2FpCk%2FkB1P7HJ7HQCKZLHUUJNyMrbDd0aEj6hAvOcakvesPwBR4l5RGXmdYYB1YZ64lGKbHDN0GlmSIcMyiLJblnBbDFL1N4NU3nOjimUtrsR9aWOZDhkneN0OwSFLthdWHiatkUUbUTJj2UmgHvg9NNj%2FEG2hjHdgjeaBn3rZNAZj3L3pckHbb8O8UURknidAeeONk93WyqkFjRdiwQP5z&X-Amz-Signature=80e53a706e8dbcb2c7cad6093dade95a6aaafd62206e8ce2c1fb86eb3396817a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CSS4DVO%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC3Bq81So8qBvkv%2FLORkkx8niEgN4JflrOlDh76putnVgIgbRa%2BrUVx2LMHey%2BmsIqi%2Fqm5fW9tTL%2FiAs7AK%2BErTigq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDAExy6rZk9WvolGDjircAyL2vPdqI9NKepL6DOv4cbcNPdXMNHBxKTyrJZTPUwITqDHnm%2F4p3xIzIZodhK8yxsi1wGG9J%2Bh5JNoYHbz0mI987FHskKFKoBhxr5uvbzgbpeTxbpCfa65y16I%2FXev3IdizyxhwByPzCOgnrI0pw3IT8DCv56QZrEBVF5%2BV%2F7AWqeqqSKIceIaUPzwedtCv0uBGk2ANVivYZMw%2BG%2FgD%2BKnnN6QhHUptRKuQeAuWJG8soQn0gzdQJSVgRyqir%2FrlUQ37zjyyRm%2BoNu2zBMPvsipvFvO3tatPjFPutmwJyCMz%2FB3XtB%2B0lbMRnypGYV1mNdtQuDG1%2FOOqPQv06e1neyA9wILBaMlIOWKxiKYSYY5eEA9BY%2B6dRR58WAgIdy12lcnjFnk6oNLf0NTPBQz%2FqLup7OazG%2B%2B0okpWNFdikdpaLA9YV8RGpBb%2FZCsa99abrlomjMOYEsBWM%2B2VXAUG928r3qQyxcJcjzwGhsJzlBnn0SB223YH2yyxlsh0yc7dHc0uKnc8%2B7qX26y1F63hSwgkXXcBwfAQV1F3tw8xXW2N0ncXJUfRqA8%2FqwSu%2FHPD5fAXnTgvt8YXjFoKf6u4QRkjjG6V%2BDRyWtmMg0wSvhGkOmGhOxc21rMJGUjMMMvgncMGOqUB%2Fa0MVt%2FpCk%2FkB1P7HJ7HQCKZLHUUJNyMrbDd0aEj6hAvOcakvesPwBR4l5RGXmdYYB1YZ64lGKbHDN0GlmSIcMyiLJblnBbDFL1N4NU3nOjimUtrsR9aWOZDhkneN0OwSFLthdWHiatkUUbUTJj2UmgHvg9NNj%2FEG2hjHdgjeaBn3rZNAZj3L3pckHbb8O8UURknidAeeONk93WyqkFjRdiwQP5z&X-Amz-Signature=6447dd728effd7b21da1767eb1c2f62808fbc7251027016fdcc7652218258107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J3AEUNS%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCodf1GFe37oMLSiVC3JzJUKDxkkAs%2F8F3A5t%2BEJQTl5wIhAOZ3dtE3QrDssD0bkztPkzPVUWiYY0T56SsdjoBs63%2BQKv8DCCcQABoMNjM3NDIzMTgzODA1IgwR6pkEmX%2BZXPhqoJcq3AP7vFNPZNJViHcI%2FfjLPd7b2ah23mQ%2FCTH6zY2irKqRRWbMSfIhJJooFtiRd2jb8gBntvhZExRbP2Yka7C7NgIH4e2lga3SMMh1u%2BNAbzzstC4d6Cal5fxWNMD2juiELM5MUbQ1NW9DvkGOSO7hWrCBfSlD8%2FnY8b8lAUzP%2BCJkV9o99N9euc7FohJPSue8kDGTVkZupzCK1gSAaa3dERnkRtUWv%2B2XUvEKz4njUFNQH9nvH8UUeKqwsPRv7er7Enqq%2F5md2DWVfXcW8c5ZKDFgTUbM6dxfhKCltEqID4ge9UyS1%2B5IIFrnIPDkhGzxtjSnmg436ytV6eZ1NXqxyEeTQfnXzFrNZ3haHOcoy3V6ggYszOIqabyikIR3yZdHmMn0j%2F7OquN%2B%2B2V1JkdDk9Q3P%2BqRdy2%2FUefqkXFfyadHjnkpt%2BIqxY3cGZOkU%2FFSCZL7Gtqb0UAFEzmcuL3jEJ1cmXfmZg8lvSUWoTNFs%2F5aZ7CpWQu%2Fcdo%2FObgiLjyXlZ9BX2zwgYYqGQ7XaUcDqnk4owvDHD2wKkRnbx1MeoBJTn4eSkLCAmEYiO%2FNDKg8ObGWSU43t0SxVRvu5srgJJADsyUo7YvTsd%2FaP%2BqZ6DXFTjXgXp7CUTpeP82CujDr4J3DBjqkAfwhoral8Ft0tkdgoCIWPp%2FAKLT1W0g1iygfOuwqAUAN7BfQv2gPPFg3u18gV7M4YPdTHelIEM1FUdbMpd2Z17KfE0DWN%2B8YU0Jc00pUbFg1vSojjFNAlF6tkwrlSweTTaAdfSsIelrV3CNfGE%2FTNGd3GiD%2FOou%2FUSw0XoXI0wsIcd59y5xzEqLosDmurrRx4G2UNc%2FjyrCNBNRo%2BlPa9GZeoog6&X-Amz-Signature=9f2e490caf136d49d2a60bd6edf2c892bf2b6e6a010c1404dd372acdcbc2a17c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFMQ3SO%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCCx4KsLO1KNNYhsKa%2FPSdWfA7O7aBOybqWHu3nxiPEEgIhAOrg1CJbnyPDNmVE9pPimAlBZXnTf9f7qI6vOvQhH4bVKv8DCCYQABoMNjM3NDIzMTgzODA1IgwFNjFxl7HOD%2BQFJkMq3AOIdN9HuXSLwKBndq6VFlhc28uIITb80FODYlDgsLs%2BPhiXYXDlHfhBvFyQ5zY0RuVEzZabZMmCnmvdtdzxIU1C02a3yuMEddn2eSUtUpzQeC2tYzmV%2B6xoNPdsE34WF14Dwyrgk9GW%2BDy3Y4LhvUIISEBi5ikXeRn1%2Fx13cI5LjUnf0hmUbthmI3flpgxMkNVDSvkfiDS%2Fsrf1yCO%2Fbm3xa1bkf%2BSH9LdB0Z5SxF8pY6UJydwOCoGArEFe02G62tu7LvDmrHRMbwF6P5tT16tseWhbzBFSq9w8OSNLtByqda%2BcJeAS4nk7ElaNkj3kH25ul6%2FKPSTe%2Fnq4p6cm1trCEQAPYWqz%2BXIfd1WJhngXPGRYB4uJ5En7CpWMEbMCpoMK4i3FLiL%2BFBGdO2qhVOI8vjz9XoF6ZrXQQRd4%2BG0pz%2FJRViyEfLNmiogIjKcFajiDl3eBAc7o83tPHjkhr%2FsVBjpA8swA1pdTvojc3Jm0tWiUy9IV1g3jI639rQBwzUmUWHFKuIdP0aS41kJ4o9q4RgYfpbr1nDZv3L5k7y6Tpnf9OWEdwVi%2B2oIh9DQMbsa48XNl%2Fj8HXPcN42L2VuXRft1zrxEErUxu%2BaR6cgCqOm1jo13Bx0YYCY7wcTCRt53DBjqkASzYfnG1xt7%2B9p5BMwY2RElzOhz6Ab7JCBm8YbQ9yjI7CiHYZNAZfnc4QrvUwFF9aiwaFAULEjVJst0dXwbw5h7KTcO1dBZyft4zxl3q8zYwTG5ynGd7Wx04nj5hWsoEjVkSPdyIN4fvvVc5UUfjMkvRSxzCLlxnegeCg37WHrmB6oNK9BOzgTOu6HmboR2kXxFAeQlnOyKwYDI6C4ewJHTFTP9O&X-Amz-Signature=75b50c54c7712e8a477f65d3172136bdabf46f7bc7865ecda50c8e4c45abec2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CSS4DVO%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC3Bq81So8qBvkv%2FLORkkx8niEgN4JflrOlDh76putnVgIgbRa%2BrUVx2LMHey%2BmsIqi%2Fqm5fW9tTL%2FiAs7AK%2BErTigq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDAExy6rZk9WvolGDjircAyL2vPdqI9NKepL6DOv4cbcNPdXMNHBxKTyrJZTPUwITqDHnm%2F4p3xIzIZodhK8yxsi1wGG9J%2Bh5JNoYHbz0mI987FHskKFKoBhxr5uvbzgbpeTxbpCfa65y16I%2FXev3IdizyxhwByPzCOgnrI0pw3IT8DCv56QZrEBVF5%2BV%2F7AWqeqqSKIceIaUPzwedtCv0uBGk2ANVivYZMw%2BG%2FgD%2BKnnN6QhHUptRKuQeAuWJG8soQn0gzdQJSVgRyqir%2FrlUQ37zjyyRm%2BoNu2zBMPvsipvFvO3tatPjFPutmwJyCMz%2FB3XtB%2B0lbMRnypGYV1mNdtQuDG1%2FOOqPQv06e1neyA9wILBaMlIOWKxiKYSYY5eEA9BY%2B6dRR58WAgIdy12lcnjFnk6oNLf0NTPBQz%2FqLup7OazG%2B%2B0okpWNFdikdpaLA9YV8RGpBb%2FZCsa99abrlomjMOYEsBWM%2B2VXAUG928r3qQyxcJcjzwGhsJzlBnn0SB223YH2yyxlsh0yc7dHc0uKnc8%2B7qX26y1F63hSwgkXXcBwfAQV1F3tw8xXW2N0ncXJUfRqA8%2FqwSu%2FHPD5fAXnTgvt8YXjFoKf6u4QRkjjG6V%2BDRyWtmMg0wSvhGkOmGhOxc21rMJGUjMMMvgncMGOqUB%2Fa0MVt%2FpCk%2FkB1P7HJ7HQCKZLHUUJNyMrbDd0aEj6hAvOcakvesPwBR4l5RGXmdYYB1YZ64lGKbHDN0GlmSIcMyiLJblnBbDFL1N4NU3nOjimUtrsR9aWOZDhkneN0OwSFLthdWHiatkUUbUTJj2UmgHvg9NNj%2FEG2hjHdgjeaBn3rZNAZj3L3pckHbb8O8UURknidAeeONk93WyqkFjRdiwQP5z&X-Amz-Signature=d07b91a03e45f87ebfe63f8ad0bbfef8ea168a9a8b496251ad36be1e8e10358d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
