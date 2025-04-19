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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WFQZMJV%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqJE%2BeOFN3ahHBcwvqlabfjq%2B6CD7o2tkMXl2%2BIt3GFAIgcl%2FW%2B1LcAXqq96oZ2Y86a0x1HSwWvc92ScfYh%2BE8eIcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8pbQdG5hG9kq6NdyrcAx05dLnR8tKUAUosy%2FxOO%2FQAsznvKTPteus%2BadjmO%2FBO1AjW%2FYWAZRt6qxd2IasZm7b893Dlcwl%2FCSdKvKbLwJWUJtb51bDc4BG1MbteW2wlp%2BKdKOQKx%2F2Vw6Kni7i14Rcny5d2GKfy9KfYkgJuRrLRXeBNBo%2FdKnTsHzIMB%2FTStAFreO%2FQ3xglEwd3oFZJ%2FYAylxAggVwYkl7NxApw2je013sl%2ByVurmGmkj0wyCz2SBBoxYiblYq1BwskdOCc%2FnxwnY0cDGDd%2BgOwAg4due4qmlQ9js4PB%2BLXfyPc8NKe5z1IPj68pSlLup5Q88emwXM41vjgTDzkYjEJlX2BvHW3%2Bhb11h9%2FU8btugCeJY%2FOC1n5Va1OUN%2BToanaAvxRM1%2F8MAkQ9SakX%2FhRxA9M8GwoBMqEpfvZLiS3RSdn%2FnR8%2BrcUsa7Vjg2XJ0vxS6bzAdVhpTRu2fn9bwqJUP34W1J05347JQs0mzMrdAMRrg98LewFnwVb%2FVZh7K33I5vxSplCJk%2BwHwX9p2uP0uwR3UK6ZgHqxpA3u016Hi%2Bu%2B%2BP5N%2B%2F1PKPyxrapwtMvtKLYRvf%2Fe9kXXhvtD%2BDbkOQZKF5MTeOW%2F8IxWbgXojoNe4PEsJod%2Fe8jHkBUTegOMNbYjMAGOqUB9V4SKgx33A2T5GGYx991LTIlYaGGvV53mdy%2B9GxaqBbKPtskds4G3l1ALVIvOTPSxwhark5PfF9zlUHwuae7n%2B3DG%2B8lLEP69%2FK%2FUIxMZGnYBcFoqPuP0mw%2Fm0sD0qa8ejwkwz4C2q%2FNSJDxKDmld8krShxDcpvafkzYhKRqgbZXS1La7ZlT1MO9hdhIEKkrTP2Ndl%2F1LsThE0F07Ktf%2BB9g%2F6zo&X-Amz-Signature=343dd9fe67f044e153200c09a8483b34ca2f3906566b57976b09e0a428632d2f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WFQZMJV%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqJE%2BeOFN3ahHBcwvqlabfjq%2B6CD7o2tkMXl2%2BIt3GFAIgcl%2FW%2B1LcAXqq96oZ2Y86a0x1HSwWvc92ScfYh%2BE8eIcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8pbQdG5hG9kq6NdyrcAx05dLnR8tKUAUosy%2FxOO%2FQAsznvKTPteus%2BadjmO%2FBO1AjW%2FYWAZRt6qxd2IasZm7b893Dlcwl%2FCSdKvKbLwJWUJtb51bDc4BG1MbteW2wlp%2BKdKOQKx%2F2Vw6Kni7i14Rcny5d2GKfy9KfYkgJuRrLRXeBNBo%2FdKnTsHzIMB%2FTStAFreO%2FQ3xglEwd3oFZJ%2FYAylxAggVwYkl7NxApw2je013sl%2ByVurmGmkj0wyCz2SBBoxYiblYq1BwskdOCc%2FnxwnY0cDGDd%2BgOwAg4due4qmlQ9js4PB%2BLXfyPc8NKe5z1IPj68pSlLup5Q88emwXM41vjgTDzkYjEJlX2BvHW3%2Bhb11h9%2FU8btugCeJY%2FOC1n5Va1OUN%2BToanaAvxRM1%2F8MAkQ9SakX%2FhRxA9M8GwoBMqEpfvZLiS3RSdn%2FnR8%2BrcUsa7Vjg2XJ0vxS6bzAdVhpTRu2fn9bwqJUP34W1J05347JQs0mzMrdAMRrg98LewFnwVb%2FVZh7K33I5vxSplCJk%2BwHwX9p2uP0uwR3UK6ZgHqxpA3u016Hi%2Bu%2B%2BP5N%2B%2F1PKPyxrapwtMvtKLYRvf%2Fe9kXXhvtD%2BDbkOQZKF5MTeOW%2F8IxWbgXojoNe4PEsJod%2Fe8jHkBUTegOMNbYjMAGOqUB9V4SKgx33A2T5GGYx991LTIlYaGGvV53mdy%2B9GxaqBbKPtskds4G3l1ALVIvOTPSxwhark5PfF9zlUHwuae7n%2B3DG%2B8lLEP69%2FK%2FUIxMZGnYBcFoqPuP0mw%2Fm0sD0qa8ejwkwz4C2q%2FNSJDxKDmld8krShxDcpvafkzYhKRqgbZXS1La7ZlT1MO9hdhIEKkrTP2Ndl%2F1LsThE0F07Ktf%2BB9g%2F6zo&X-Amz-Signature=9fe23250d941cea4034e0c52332745595a9f3c3e6b6f40d96c3771238d65811b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEQULJ2%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ4BJjhsZxldJ8I9f2H4RnfGkmLZ7UopDCn1YANpvO%2FwIhALthvW7SDEuNMcI882B7E9eXEyLcOs5E%2B%2B6n5drmmq30KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR9U%2FZeqsruMf%2FeRgq3AOzCfQS9YaV29KCvosd9q7v5PbD6PpTtgCAwExjFxxUxY5CY7ysySzmcm1YNx2E3j0pmoloCil3%2BmnLsmr0Pij4zHZuurZ8Vhur7a4GOr66IR71C3Fy%2FKJdFjEksHXaJwo0sTSxRFMmR2s6Pube%2ByxW8iQFsI5jxSocFgIeFTDrNmKlfRz50YYHtDqqvkE9aqi6HvOCFw1FtFiDIi77kBU3NTBZgp5waGNGwIlt6s4jIQdtVtuiopaIjq4lssG2klFlvkokO4qb%2FKHWLIwZk68YgjSTW%2FMuz%2BRIaLq4H34KVuzoFpXxluCMivUj2RiRekNRg51x59oJ4Z7VUSiRaqWjTud8I1l8D3KieL1e0%2BsqPFJvBLYq03uEcfGq5XeHo8wGZ4el8Uh38m7yM9qlYwvWL8jJbgf04yhFw1e3QeGSqcl5ehJ7aXN5jvGc1wyzmMNCaKegdGk2aEKzTpO6PV09GEug3Wx24M%2BMhVTaEZ9sM3F5Ob7l9XYEaFMsBvvC%2BpYDcZuOHSmrNUq2naZP5HnDZhjoLDzpyTk8co1%2B%2BHhUAdjEWTG4S3mwvaiFGqZM%2BCJnmEk8vgzoNPz5whisDuZy5ryMIEKiBxs1uqxUU%2Fcy1zZfZKi%2Bvk21%2B%2BSlLjDa2IzABjqkAQQCsJeTw3JTbxlia%2BvYDjml3T7EMDvzfNcKqdG9xlqc0j3Fdsk%2FrE94CQc2XhkF%2BZnjvyyLf3wmaU89F6pxYKW%2BVc2YfGnzpqAEjUzVWXqaCYnEytFdO24to9iNDHAuofLUZgfDp4Ruc5hFbq0wkosjcjt9WAq30i11OCtKZCwA1E0dak8hI9HfdrN%2BxrC4TRQLhz2XLthLSD31gnjNO3rEBJ%2BD&X-Amz-Signature=6359dae03633396e57b1ce92fec4fe8ebe6644ed7a083fad12b0780a9b0bba5c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OCKXGME%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBc7vclEZIG4mt5MASPdWY8pTmN%2BE9bjQpe6LWsYm7vTAiBhaN57G3OSu97t6XtucXC0ENDwzesSoCLlCP%2F%2FYxg3lCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzq6b5iaQ2V8C77xqKtwDRxXijzEGtdJOaK8ZW68WXSBio%2BmFJdli%2B8ToLvJKNtsYP%2BLNBAD46yxI%2FT2m5JB09aM2Le70J%2BGi5%2BXswyTZvjVAYfi9R2p4UyIIsYfOZ34sFasoU%2BfHKqHLm6UJY4NpXgr%2BNAI2grf8w3ybmGbd5PhbdwBNPuDRjdmYcfApXqyVR7JffWBi6lfWWc9D1ezjcgh%2BOkS%2BTXcKpGfPSix%2BWO1sCucJ14E7YHmU9AaIl%2F5xako0v2vgoDkTKVpL15A92McaNX0p1fgkLvNpi0ohFaz4PF9J%2BIWIzJzz8Ef4%2FHFbwtcYVgWOZTPVpj9%2BOEzaQtfLhDCfa9aeQjlB%2BxifxrR87HFQHRlGMABGy2pbJBcMPEVcGG9CbiChLwMWieG1gfmQOsSp1bLyx4WEfq3b%2FF%2BYaYQuPwLmG5LIjTNthOAhU35RWvvaFKY6UtEdpNrxgc46vErnihfq9JMwG2k6VYcEitxaO2WbRda8cGqHuIB7ivMAyaZqNSifIMS0OMXUj1rJ7wFmpqR4uhJJJ52Nh1w3Oas1KoUV27KeR1sEY19mgYHkYxk9gkdOTulDMkD%2FNZRZrJXcHvnRCePdLzUph%2BRE2fkVXLkZOP6FTYaxcoK3P10GXsrLYIra4K8wi9iMwAY6pgGto0kf%2BFbKN2XTzdPjUpWri5%2BMzSIlDQHcOKybwbKnK%2F1MedW094QE7MIbefJ2LiToUp3zFOqOd682H766ncXp4OJ2XkJuMQkd7BXBwIaSP34GF6fHRBB%2BJ8%2BJgSl1R8%2FfM%2FE40Faz%2FhfJqnyRcEdj4DRg28wJWlZBubVQ4S%2Fpx3xAHJI0oAwV2H%2BZgzqAQ1pX92IEQKF5k%2FNSIGzOEhDXPqaYkSEo&X-Amz-Signature=9cc49c73debe32a895bd2cea41b93fe0f1e986cba6d1672bcba6721aef01bde5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WFQZMJV%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqJE%2BeOFN3ahHBcwvqlabfjq%2B6CD7o2tkMXl2%2BIt3GFAIgcl%2FW%2B1LcAXqq96oZ2Y86a0x1HSwWvc92ScfYh%2BE8eIcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8pbQdG5hG9kq6NdyrcAx05dLnR8tKUAUosy%2FxOO%2FQAsznvKTPteus%2BadjmO%2FBO1AjW%2FYWAZRt6qxd2IasZm7b893Dlcwl%2FCSdKvKbLwJWUJtb51bDc4BG1MbteW2wlp%2BKdKOQKx%2F2Vw6Kni7i14Rcny5d2GKfy9KfYkgJuRrLRXeBNBo%2FdKnTsHzIMB%2FTStAFreO%2FQ3xglEwd3oFZJ%2FYAylxAggVwYkl7NxApw2je013sl%2ByVurmGmkj0wyCz2SBBoxYiblYq1BwskdOCc%2FnxwnY0cDGDd%2BgOwAg4due4qmlQ9js4PB%2BLXfyPc8NKe5z1IPj68pSlLup5Q88emwXM41vjgTDzkYjEJlX2BvHW3%2Bhb11h9%2FU8btugCeJY%2FOC1n5Va1OUN%2BToanaAvxRM1%2F8MAkQ9SakX%2FhRxA9M8GwoBMqEpfvZLiS3RSdn%2FnR8%2BrcUsa7Vjg2XJ0vxS6bzAdVhpTRu2fn9bwqJUP34W1J05347JQs0mzMrdAMRrg98LewFnwVb%2FVZh7K33I5vxSplCJk%2BwHwX9p2uP0uwR3UK6ZgHqxpA3u016Hi%2Bu%2B%2BP5N%2B%2F1PKPyxrapwtMvtKLYRvf%2Fe9kXXhvtD%2BDbkOQZKF5MTeOW%2F8IxWbgXojoNe4PEsJod%2Fe8jHkBUTegOMNbYjMAGOqUB9V4SKgx33A2T5GGYx991LTIlYaGGvV53mdy%2B9GxaqBbKPtskds4G3l1ALVIvOTPSxwhark5PfF9zlUHwuae7n%2B3DG%2B8lLEP69%2FK%2FUIxMZGnYBcFoqPuP0mw%2Fm0sD0qa8ejwkwz4C2q%2FNSJDxKDmld8krShxDcpvafkzYhKRqgbZXS1La7ZlT1MO9hdhIEKkrTP2Ndl%2F1LsThE0F07Ktf%2BB9g%2F6zo&X-Amz-Signature=a3477448258302fde65a9303bca384c849ca2d0e8f2234c920a8f8e6712183d9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
