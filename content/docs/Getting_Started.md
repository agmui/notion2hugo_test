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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DTOMELV%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFMprCWLUlqDzMvOTB99YB%2B8nscuKsHD%2B5e6JJ5GMhzGAiEA16zHOlLwqtQmiEI9iadFZYGR%2BbrMQs8qw2I7391abZkqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5u6PB7NQxFVT8pvircAxW7v%2FpRbMcSktoyJeBKbSqa0sa6UZrWN7qNxXZOg%2FYX0uKPbi4uRZheCZByBnGpB0zF6aDYUNnOdMVP5%2FMAn1QmWmxAOrQQcBCR6mwravixTJ%2BnjYSPDssCGZaSj0uC7YP5XqQ60qgSQitXHxJ9DR%2FomL57aMr6%2FBkWJife0CRklO3jaINvSiXedWC7lLszFvL%2Fjukn59fjI0mjWt3oO3qkLGLwqeftefOi3hBW%2Btrnj%2B3tNidDLI6GNcL9oW1rwFDDH3vAm2P5GWHMuURupCDGj9zFp2ilwA4jkzKqDbG7JGI7fASO7%2F18JbGyOLDD4CuVk1ISqnAnmHBTnNDvpoSw%2BkzXiK3ubJCXCwu1uyvOBwxhMAqRzC8JIgbHuyAc%2FLaVuUWmo0qrEXBhRwBWMB5ySw4yM7Il1uZiivxIeSQ7ne0ZSM7Ts9iWXhDxqeoLqD6VhS7KzH2tT8kaYOvIWJbTftDyBkRYdELsfyaySvcJ8R7F2Fj0mfR21MPuFINZErM%2BGSPoyDLJap3F1wSR7rXMsPU038gneS1ezoiOA14j8653%2BjTe0ifiU2sauq08CMj1oWxbxU%2FtDTpiSxzk7QxvXe64EsqGC03Jzyvw0ILIMSroncXigU3gkFw9MISI58MGOqUBKbjumorChcKhNdKJcqexfxXkpxA26LW7s1OEeAs8CL0ka2VSx2Wln%2FvoKeO%2BOTYKIiJ9wgJarBqrEl6ZT41MV%2BHjKOUH2iPD98nc2iGy3stKify2vCINIOoT95vlkaHAMfH6weSRHFqNWEM%2B75OpquFfBwWfzTA5v%2F%2Fo2KSCbKZjueArZis9vZUcGaCwG%2FOI%2B7jUQEACkUrsxHnf3U6e2XQCbFdK&X-Amz-Signature=145a84600d23345d089a39174a19d11b622fef70b4816d8bb309c74ad1cf4b4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DTOMELV%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFMprCWLUlqDzMvOTB99YB%2B8nscuKsHD%2B5e6JJ5GMhzGAiEA16zHOlLwqtQmiEI9iadFZYGR%2BbrMQs8qw2I7391abZkqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5u6PB7NQxFVT8pvircAxW7v%2FpRbMcSktoyJeBKbSqa0sa6UZrWN7qNxXZOg%2FYX0uKPbi4uRZheCZByBnGpB0zF6aDYUNnOdMVP5%2FMAn1QmWmxAOrQQcBCR6mwravixTJ%2BnjYSPDssCGZaSj0uC7YP5XqQ60qgSQitXHxJ9DR%2FomL57aMr6%2FBkWJife0CRklO3jaINvSiXedWC7lLszFvL%2Fjukn59fjI0mjWt3oO3qkLGLwqeftefOi3hBW%2Btrnj%2B3tNidDLI6GNcL9oW1rwFDDH3vAm2P5GWHMuURupCDGj9zFp2ilwA4jkzKqDbG7JGI7fASO7%2F18JbGyOLDD4CuVk1ISqnAnmHBTnNDvpoSw%2BkzXiK3ubJCXCwu1uyvOBwxhMAqRzC8JIgbHuyAc%2FLaVuUWmo0qrEXBhRwBWMB5ySw4yM7Il1uZiivxIeSQ7ne0ZSM7Ts9iWXhDxqeoLqD6VhS7KzH2tT8kaYOvIWJbTftDyBkRYdELsfyaySvcJ8R7F2Fj0mfR21MPuFINZErM%2BGSPoyDLJap3F1wSR7rXMsPU038gneS1ezoiOA14j8653%2BjTe0ifiU2sauq08CMj1oWxbxU%2FtDTpiSxzk7QxvXe64EsqGC03Jzyvw0ILIMSroncXigU3gkFw9MISI58MGOqUBKbjumorChcKhNdKJcqexfxXkpxA26LW7s1OEeAs8CL0ka2VSx2Wln%2FvoKeO%2BOTYKIiJ9wgJarBqrEl6ZT41MV%2BHjKOUH2iPD98nc2iGy3stKify2vCINIOoT95vlkaHAMfH6weSRHFqNWEM%2B75OpquFfBwWfzTA5v%2F%2Fo2KSCbKZjueArZis9vZUcGaCwG%2FOI%2B7jUQEACkUrsxHnf3U6e2XQCbFdK&X-Amz-Signature=9f3bc060e54f563c490ecf5eacaf904d740cae77c373ad8d73ef44b8a1e69e95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DTOMELV%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFMprCWLUlqDzMvOTB99YB%2B8nscuKsHD%2B5e6JJ5GMhzGAiEA16zHOlLwqtQmiEI9iadFZYGR%2BbrMQs8qw2I7391abZkqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5u6PB7NQxFVT8pvircAxW7v%2FpRbMcSktoyJeBKbSqa0sa6UZrWN7qNxXZOg%2FYX0uKPbi4uRZheCZByBnGpB0zF6aDYUNnOdMVP5%2FMAn1QmWmxAOrQQcBCR6mwravixTJ%2BnjYSPDssCGZaSj0uC7YP5XqQ60qgSQitXHxJ9DR%2FomL57aMr6%2FBkWJife0CRklO3jaINvSiXedWC7lLszFvL%2Fjukn59fjI0mjWt3oO3qkLGLwqeftefOi3hBW%2Btrnj%2B3tNidDLI6GNcL9oW1rwFDDH3vAm2P5GWHMuURupCDGj9zFp2ilwA4jkzKqDbG7JGI7fASO7%2F18JbGyOLDD4CuVk1ISqnAnmHBTnNDvpoSw%2BkzXiK3ubJCXCwu1uyvOBwxhMAqRzC8JIgbHuyAc%2FLaVuUWmo0qrEXBhRwBWMB5ySw4yM7Il1uZiivxIeSQ7ne0ZSM7Ts9iWXhDxqeoLqD6VhS7KzH2tT8kaYOvIWJbTftDyBkRYdELsfyaySvcJ8R7F2Fj0mfR21MPuFINZErM%2BGSPoyDLJap3F1wSR7rXMsPU038gneS1ezoiOA14j8653%2BjTe0ifiU2sauq08CMj1oWxbxU%2FtDTpiSxzk7QxvXe64EsqGC03Jzyvw0ILIMSroncXigU3gkFw9MISI58MGOqUBKbjumorChcKhNdKJcqexfxXkpxA26LW7s1OEeAs8CL0ka2VSx2Wln%2FvoKeO%2BOTYKIiJ9wgJarBqrEl6ZT41MV%2BHjKOUH2iPD98nc2iGy3stKify2vCINIOoT95vlkaHAMfH6weSRHFqNWEM%2B75OpquFfBwWfzTA5v%2F%2Fo2KSCbKZjueArZis9vZUcGaCwG%2FOI%2B7jUQEACkUrsxHnf3U6e2XQCbFdK&X-Amz-Signature=0c7ec7e0c8c2e96160ec548bd13c93a2800dec74f2bb599f05e97d7c414257b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGQBA3ZV%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDrXUYOVw%2FjFiZeHuR3U5DFpBZw5l9XgAPyMSk7bsHY9AIgIK47O2spZhYw463haz01OtOfFG1A1Hjnb4rMDa%2FAweoqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL05Z6vxr6%2FtuOR%2BpyrcA%2FpmqdP0ul5ljNm4ExhLqpQV3yD75ANNWGkv9tw36S%2Bql4o%2Bnk0eth%2Fwqa77b2n7tiaEYo8gLmWFKx%2BtWGRambHzB23o0nst4T4UFQZToUHhNoZvfJ6RYmNi9ZZNxGqu92f%2FYt0VrhWiQcWXyexzoh9jwUNfIz32gDp9wdvUR7KPvmBbweWsiDNDyOPVQAn%2Fm3Fs20WgahR0uF91TmPC%2F2QpQx1bReBlY%2F9yFvxcYSO2ihPGyc9bzFK022icdoP5O4lBKjqA%2FmB9PoRBjFFbXUwb5HezpbbVmjKgODWrHfbonWsS9IaURGe2Msf%2FhGfuHrSP95QGQP9zCMdX2X%2BI0wqIfuuvl77eGSEJuj6HKoQDCKuI0GexDTEqA5oaoI6Zw1mLtFFZecxRTgm3da401gH40icYpMrIAzgIYMlLGQHkF7OxFiR59%2B%2BSvKJNZ96wjLJMsVy56LFA5Zi3MsLFiCa%2FRMaYyq%2BbW2lHGdthd37DlKRn8fclTOERxi0rtOuYXw%2FDEQmIzVFunpbKd2zs7vRTRudpQxhKPWc0IktHx%2BIug1C0pG45bn79SSvUIpk2tj9fNFj5DtXBsx0r6OA8u9EaTo%2Fjv2qZFZPa8KUqRSb2%2FIJiMVPlzGinYrVdMKeJ58MGOqUBIc1ISSBXoe5IlwbnR1U3ii29ENVJghO9q8uaE8aNJw4BV658Hfwx9fJ4sEoUc0bEZATxo897pFjVpZEZf42xZFx2vdgp5SB0olhWh%2FrTeeBYnJzEq96vEbEsRT5FgXfhI4nTfE3uvZl5hM9r9Vpe%2B8GBKhnYThj%2Fr5D49ikji3Z%2F4CbIIGe3%2BL3NdZAGflgqLb748uU4q2TFmUS6NQxnlfiRM%2Fx2&X-Amz-Signature=388aab75e3447bfbd210a0f10bf1e942f24a00ebe80900c5983b6e0e12a1015c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NPMEHZ5%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDWs6%2F3mCiEs3Hxl8yeNzy%2FWmhpuvBIpIdMygbsonI6AAIgP8SF2Ulusth8G4%2BY3INgj4%2FUzWx%2Bjvro1YRtOSW%2BY4oqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImjY5ZwYl82axn8PCrcA6%2FgYt62VDiXWlp4fFH9sQ0U3DF%2BmkRMt%2BLxFpTd7DiltprkSUbslzNItp2qECkyt%2FVYAxeGk1AtcPQijcJQlrjT3PHHg5aOe%2BmP3dSnN1wi68vYiBeWi%2BhEvx2XQSMamESVF8TXcQL%2FmY9ZjT%2Bvg0eZoUWL1DWEygrkbuqznzGQKyp3nGbr5Mq7BkiH2gMt98VgmQN48dLGgSBFFohYdepUvw2ssqXlp7524NaqBXzARYhdbrRS1DBmqDVtBjR%2BtdAY%2FVFgX7aIfSyZCvoQ12gVx9%2BVnWt5UWBOZMznNbLEsxWOIp0HeBC63KytpQUboOmvgyli9%2BHgP%2FgSag7GlzGqDrq4BQ9ZhcofJrZMXlGGkwjO9lGx0mdC5FEI%2FV5SIqbJaS%2BIDFv7JiiUEv7miSxjwKCZAELw6C3Xbrmkie4Y2U4uGpDPn97J%2BqZmn6Lnktl7xWZUvay5YmLZJd2Y05D9dDFVVV9Al8fIcqvCP4hRBBfJt8I1wDTmP9XCOOvPPrc5ve13E2z%2BbN7O3JEJdvqrVqvNpdlvJzi4otMxAYkTicX0NpcMcAfDJPdMhVAjMoforZJywg343z%2BixE9NJcGzd2NTZDoIqM3C1NBrpuKXiHoKESyYvRLVKIIpMIyI58MGOqUB7FGTXTeEk0YW12lOKM29bomMVyDqhpsD2sRBvTNmItmwGKwwwcvdOIVrByw72WnOa1CkVi3S4vukuoDocO3dCQrDVT%2BTtcMTJdSrYQ4GO4cW6rTsr926p5tnYtWH%2Bw%2BY6dJ494t3RfabvbXAEgzo4Ms88cE5g56JzFTR7v%2FizHhN9yreXqHmFqyOVkTtc%2FqQBA1aCu5h0xqcj6CLeAnk4WhpUibZ&X-Amz-Signature=376a6b8757c4f196d2dc6ab86c7c3656b88495676d674096e2eb8152794161df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DTOMELV%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFMprCWLUlqDzMvOTB99YB%2B8nscuKsHD%2B5e6JJ5GMhzGAiEA16zHOlLwqtQmiEI9iadFZYGR%2BbrMQs8qw2I7391abZkqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5u6PB7NQxFVT8pvircAxW7v%2FpRbMcSktoyJeBKbSqa0sa6UZrWN7qNxXZOg%2FYX0uKPbi4uRZheCZByBnGpB0zF6aDYUNnOdMVP5%2FMAn1QmWmxAOrQQcBCR6mwravixTJ%2BnjYSPDssCGZaSj0uC7YP5XqQ60qgSQitXHxJ9DR%2FomL57aMr6%2FBkWJife0CRklO3jaINvSiXedWC7lLszFvL%2Fjukn59fjI0mjWt3oO3qkLGLwqeftefOi3hBW%2Btrnj%2B3tNidDLI6GNcL9oW1rwFDDH3vAm2P5GWHMuURupCDGj9zFp2ilwA4jkzKqDbG7JGI7fASO7%2F18JbGyOLDD4CuVk1ISqnAnmHBTnNDvpoSw%2BkzXiK3ubJCXCwu1uyvOBwxhMAqRzC8JIgbHuyAc%2FLaVuUWmo0qrEXBhRwBWMB5ySw4yM7Il1uZiivxIeSQ7ne0ZSM7Ts9iWXhDxqeoLqD6VhS7KzH2tT8kaYOvIWJbTftDyBkRYdELsfyaySvcJ8R7F2Fj0mfR21MPuFINZErM%2BGSPoyDLJap3F1wSR7rXMsPU038gneS1ezoiOA14j8653%2BjTe0ifiU2sauq08CMj1oWxbxU%2FtDTpiSxzk7QxvXe64EsqGC03Jzyvw0ILIMSroncXigU3gkFw9MISI58MGOqUBKbjumorChcKhNdKJcqexfxXkpxA26LW7s1OEeAs8CL0ka2VSx2Wln%2FvoKeO%2BOTYKIiJ9wgJarBqrEl6ZT41MV%2BHjKOUH2iPD98nc2iGy3stKify2vCINIOoT95vlkaHAMfH6weSRHFqNWEM%2B75OpquFfBwWfzTA5v%2F%2Fo2KSCbKZjueArZis9vZUcGaCwG%2FOI%2B7jUQEACkUrsxHnf3U6e2XQCbFdK&X-Amz-Signature=8a19f7408caf388dfec48b25fdb2f13c6592d3c44abd54713847150f08303513&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
