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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSQ7MJYE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIC7wabK65gp472MoUhwLameMwot4Tyl9OitoczMFGbLqAiEAzbvHN2P4wNyzdhgz8s0fcwI2I6bjJ9rVxjXhXUcr5T8q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDH19wP3HYwdOlYwmiCrcA0aSSIlN6UY9pCqw5%2BGWrSTUlT3kYaw3mZ1RxB7X3Pe9wTwPrSl%2Fc5bRjKe5%2Bxbyo7wh8nl0vf6z%2BXi9%2FwC%2FNGAU56QTlb3w7Uf7Rxn72jnZ2lPUo%2Fbu%2FMgbCOQa6Tv9JmfnLNvO3GDMwGzTYDGJyEtNp5idVeMuUWtHAI%2FptzuYCl%2F7eAtl9lbaIAI1IDUyIY6bGbQE4bbMOgNOz0kyBktxpPsDxLyBvnfZAoh7uNcpMpGg%2Fr%2Bp%2F%2BUX6Z%2FWQRMqWrM5SOvtHsO9y8Y%2BFLgcVMMdmQ5yOTpvFXlEBJX%2B2URpU93dldqdqFeVrQZ17GL10f3V%2FfsM1%2FTTSS9Y3YWXj87%2B9SUw2aNhhMEVJ8bADI7M4UyLziCorMMsKVsRYYsTx46Luv8cJ5tYAuAb22AnimDM%2BmmfiGgfoo1DONJ%2BK7GrGXyUB492W5cvdB6nXcjk0WckYcDRXFgSanhsumQBZZy%2FolZL0twm4KzqW8d%2BOMZ4gBSVyDiEtBSpezxshcU9BvmtN4oyznTkfVCJuUDyrAFidtdKp7gcsrfjI%2Fzm4vG46o7mCNDL09H5cvHgEs7vkzKifKjAPQ0U8GmDWAZh%2BXNqC4sUecAexPFvJSJk8bKvZ9afynH1P5j6j5eJMLay08MGOqUBGCzQXmEctC9QVN2hpJmG1ty74TBWvH50sL%2BVdHENmzAlnqNtm%2FNDU8TNOI0EC%2FK9Za%2FfV1thAz%2B3WicLjWCp29TYf%2FknSwnMh1UOE0OhDSyBZ6JWLki%2FnU9ofwcX8VCdcxR5WyEtFGW4ZtvCc7MxqjZ2XP8RuMUrYS%2BsJDW2aySSMOMw%2FrSRGmRO6FSJjogEUBrb%2BS8On8brALX6d3qcCTMFPny1&X-Amz-Signature=2f734ca803d71ebe33ac154c1486ea655abb077b29d6c0ac571f45c9ae01d027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSQ7MJYE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIC7wabK65gp472MoUhwLameMwot4Tyl9OitoczMFGbLqAiEAzbvHN2P4wNyzdhgz8s0fcwI2I6bjJ9rVxjXhXUcr5T8q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDH19wP3HYwdOlYwmiCrcA0aSSIlN6UY9pCqw5%2BGWrSTUlT3kYaw3mZ1RxB7X3Pe9wTwPrSl%2Fc5bRjKe5%2Bxbyo7wh8nl0vf6z%2BXi9%2FwC%2FNGAU56QTlb3w7Uf7Rxn72jnZ2lPUo%2Fbu%2FMgbCOQa6Tv9JmfnLNvO3GDMwGzTYDGJyEtNp5idVeMuUWtHAI%2FptzuYCl%2F7eAtl9lbaIAI1IDUyIY6bGbQE4bbMOgNOz0kyBktxpPsDxLyBvnfZAoh7uNcpMpGg%2Fr%2Bp%2F%2BUX6Z%2FWQRMqWrM5SOvtHsO9y8Y%2BFLgcVMMdmQ5yOTpvFXlEBJX%2B2URpU93dldqdqFeVrQZ17GL10f3V%2FfsM1%2FTTSS9Y3YWXj87%2B9SUw2aNhhMEVJ8bADI7M4UyLziCorMMsKVsRYYsTx46Luv8cJ5tYAuAb22AnimDM%2BmmfiGgfoo1DONJ%2BK7GrGXyUB492W5cvdB6nXcjk0WckYcDRXFgSanhsumQBZZy%2FolZL0twm4KzqW8d%2BOMZ4gBSVyDiEtBSpezxshcU9BvmtN4oyznTkfVCJuUDyrAFidtdKp7gcsrfjI%2Fzm4vG46o7mCNDL09H5cvHgEs7vkzKifKjAPQ0U8GmDWAZh%2BXNqC4sUecAexPFvJSJk8bKvZ9afynH1P5j6j5eJMLay08MGOqUBGCzQXmEctC9QVN2hpJmG1ty74TBWvH50sL%2BVdHENmzAlnqNtm%2FNDU8TNOI0EC%2FK9Za%2FfV1thAz%2B3WicLjWCp29TYf%2FknSwnMh1UOE0OhDSyBZ6JWLki%2FnU9ofwcX8VCdcxR5WyEtFGW4ZtvCc7MxqjZ2XP8RuMUrYS%2BsJDW2aySSMOMw%2FrSRGmRO6FSJjogEUBrb%2BS8On8brALX6d3qcCTMFPny1&X-Amz-Signature=51d8110f4c7feff3de6a81d444116e2453448f466d2cb41fd6f159e74b8d06b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSQ7MJYE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIC7wabK65gp472MoUhwLameMwot4Tyl9OitoczMFGbLqAiEAzbvHN2P4wNyzdhgz8s0fcwI2I6bjJ9rVxjXhXUcr5T8q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDH19wP3HYwdOlYwmiCrcA0aSSIlN6UY9pCqw5%2BGWrSTUlT3kYaw3mZ1RxB7X3Pe9wTwPrSl%2Fc5bRjKe5%2Bxbyo7wh8nl0vf6z%2BXi9%2FwC%2FNGAU56QTlb3w7Uf7Rxn72jnZ2lPUo%2Fbu%2FMgbCOQa6Tv9JmfnLNvO3GDMwGzTYDGJyEtNp5idVeMuUWtHAI%2FptzuYCl%2F7eAtl9lbaIAI1IDUyIY6bGbQE4bbMOgNOz0kyBktxpPsDxLyBvnfZAoh7uNcpMpGg%2Fr%2Bp%2F%2BUX6Z%2FWQRMqWrM5SOvtHsO9y8Y%2BFLgcVMMdmQ5yOTpvFXlEBJX%2B2URpU93dldqdqFeVrQZ17GL10f3V%2FfsM1%2FTTSS9Y3YWXj87%2B9SUw2aNhhMEVJ8bADI7M4UyLziCorMMsKVsRYYsTx46Luv8cJ5tYAuAb22AnimDM%2BmmfiGgfoo1DONJ%2BK7GrGXyUB492W5cvdB6nXcjk0WckYcDRXFgSanhsumQBZZy%2FolZL0twm4KzqW8d%2BOMZ4gBSVyDiEtBSpezxshcU9BvmtN4oyznTkfVCJuUDyrAFidtdKp7gcsrfjI%2Fzm4vG46o7mCNDL09H5cvHgEs7vkzKifKjAPQ0U8GmDWAZh%2BXNqC4sUecAexPFvJSJk8bKvZ9afynH1P5j6j5eJMLay08MGOqUBGCzQXmEctC9QVN2hpJmG1ty74TBWvH50sL%2BVdHENmzAlnqNtm%2FNDU8TNOI0EC%2FK9Za%2FfV1thAz%2B3WicLjWCp29TYf%2FknSwnMh1UOE0OhDSyBZ6JWLki%2FnU9ofwcX8VCdcxR5WyEtFGW4ZtvCc7MxqjZ2XP8RuMUrYS%2BsJDW2aySSMOMw%2FrSRGmRO6FSJjogEUBrb%2BS8On8brALX6d3qcCTMFPny1&X-Amz-Signature=e0db3f726a0d799c4c6f66b7da3a70ee67ed0180e600fc77d6198e10059d4166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HEDDXO6%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDVm69wFVtbEw%2F6eSOpRzj96rLNH6bVj1XwFKA2rOyRGAIhAKWT58yI2w85F5w18kcM7JQgwfNzkMKwaV1payj%2BlLc3Kv8DCCsQABoMNjM3NDIzMTgzODA1IgyjrJTkGvbkso3pMLIq3AM3mFDomq4Y%2F%2FXxsfwtEDz4ATVaTu49DQdwQG3groLwHNBID%2B82CoaM2Yk1kBkgdQXuLHgwejPc3fLi23DMUHd7%2BNDP9l3pqPnzDbzpwk5m7fdQWqpGwezYacRsYlzo4NQvwlya12f%2BL0N8Q6q9mz9JCHxeCZ95IdzA9yiYJ%2FxYE%2FsfFU4ulwdhXJiK6w1OMPJZnbnzLLW4HmAfrtRfpqS%2FdEn0lgbF%2FA3k88Egcpm9SE%2B84NtTU%2FbCLxHCH8uYD%2F2%2BLL4gdNVjvnw2yGvCEWc7BOOoUE0uigh3mWGxQi8Wgtapf7cUKoNtnhlHhjKhiuFrxhuL1X4Wt80JOdMXMXyLq1iyrv6FTIFg2pRhlMWSyEpo77ynPkg9kZd8uLzKdSlYfr%2FMLPm8iBE10JAc%2BzerXQYSFcdsTMAkh4cK4E4xXwo8QYYppzt%2BkaihGiBQa9vKrdhMklvMTKDUqaufMuXQDRCIMmIvANnHMHIqeSpgMQ%2FbyFxl4iVfTGB5TubXpDf4haaTq0oh9Da5ounsWhLXuxIVP7YGWaISv1kaBvWwk82sSidi%2B65vV8kacJ2mH0ChHqHK%2Bo9%2BkptPUpuip%2BTNN3XSoEAYrfZvjwy8H4unPscoxHVmn7nr01Y1iDDpsdPDBjqkAUFs177yH4x3%2BaT02DDYM5m4q5KhWFIKLYq3RAkiHxUmOhTXezmjxNg3nr%2B9e4ChoIome6LyjHIZm65cor%2B%2FEPhCB7l5wYfqhnNXXm2FOweJ5vJlNhXzFrqDfsKkjjHH7deXZUaag1NwvgMlSxl7fWJxX8AjNSTXBeXBqUy90REYv%2FyrGLZZ5opap9%2FXaxJrDoYHiTS0nxhyUC1wv8Degx0o%2B1hb&X-Amz-Signature=55adf731639db5938b3c09e09954a42deaa203f1fea5dd726b256e7e3ec84f8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WDADYOT%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJFMEMCIAdAF6%2FHQOaaBM%2B2yzOIgbXv2MP787B%2F4cJ9XgtvVtGuAh9QZEF0773L3bIcV7nFRFUHxY4wx8kgj3qbvhj0JjRmKv8DCCsQABoMNjM3NDIzMTgzODA1IgzBDuKAPfP65%2BTeKSsq3ANQ89RmrhjuxpC0ktL0Q5dZ4ClKS%2Bk5ONOoVCPoB%2FeUw1yHqJPPETr61%2B29jJbhASBKWkzFsq5w%2Fd8a4hNyd4bmQJYQS8Zrnt3S4aiOAJ2wTBT7OPQtTXA9xAl2pypuYuPgINI3OBFlSgkhMyCMU5C5nxvAdAe2wQTFGk39WMwPAq%2FraSRIofrJhA4Sudp4zYriornXrTBsLbI9dDAU3473ZO%2Bf8CwzSyRIEk10ai%2Bjc7YIyo2OzEWHdezhtboq0%2FJAQoeKTrl9Wl9h%2F2GLk4gDLYIUMarwtbkiDkgwwbAdNqbce%2FQfwDum37ZOHRSGoGaE0g2D7Sc47Q07z1Z%2FMPMqSgOWd83G5BDlqsJifzfD6KoCo%2FcDJa6NuBJs1ACfYeR4XaWHuvDPDd8oWsKoY9sbWTbod6KnnNKjgdfhTKktWY0e9Vb0sTefWRG2EnUpgYDKjVv%2B%2FtSzuKdpi27RzLdLYpYaICMtI%2FwfqgYH11c30ub3xmOY6IZzoaA5uh7hVOeZ4wpRSlOo%2FdKFjmUvWRlfSxL0gIDdJ%2FEJeJh9kl8EnasOzkUDxUFeW9%2BjShK7xTtZT6CvrzB%2Bk7FosELQeHL6UtlFEwh5cxfdsRWtl3dQTcM3Pd%2BMPKljaHgGmjC0stPDBjqnAU5PvQIIdroTyPmuNANaatpP20MSnR1kmeWDDReRCxJgWYd2kG68o0MBbnfAZltwCvG%2BfqkOfS2He0UcsbVH0sHxgc5%2Fr9ZoChXqRFXaXt9e6hGX3XaAHjVMKxDTfIXx99Cu43opjVKAc5KcIUxOx392Fb5knYzjUe6TeB51BubXJuU6P0adk6c7xiQ2waWQt1ZP%2BTfa0TQF6ARPj%2Fp2u2pjfGrLann8&X-Amz-Signature=3c4cfd69220ae0ce52a3e93bfea3e420c7d0c9f653bc85b1c4a3366a54117608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSQ7MJYE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIC7wabK65gp472MoUhwLameMwot4Tyl9OitoczMFGbLqAiEAzbvHN2P4wNyzdhgz8s0fcwI2I6bjJ9rVxjXhXUcr5T8q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDH19wP3HYwdOlYwmiCrcA0aSSIlN6UY9pCqw5%2BGWrSTUlT3kYaw3mZ1RxB7X3Pe9wTwPrSl%2Fc5bRjKe5%2Bxbyo7wh8nl0vf6z%2BXi9%2FwC%2FNGAU56QTlb3w7Uf7Rxn72jnZ2lPUo%2Fbu%2FMgbCOQa6Tv9JmfnLNvO3GDMwGzTYDGJyEtNp5idVeMuUWtHAI%2FptzuYCl%2F7eAtl9lbaIAI1IDUyIY6bGbQE4bbMOgNOz0kyBktxpPsDxLyBvnfZAoh7uNcpMpGg%2Fr%2Bp%2F%2BUX6Z%2FWQRMqWrM5SOvtHsO9y8Y%2BFLgcVMMdmQ5yOTpvFXlEBJX%2B2URpU93dldqdqFeVrQZ17GL10f3V%2FfsM1%2FTTSS9Y3YWXj87%2B9SUw2aNhhMEVJ8bADI7M4UyLziCorMMsKVsRYYsTx46Luv8cJ5tYAuAb22AnimDM%2BmmfiGgfoo1DONJ%2BK7GrGXyUB492W5cvdB6nXcjk0WckYcDRXFgSanhsumQBZZy%2FolZL0twm4KzqW8d%2BOMZ4gBSVyDiEtBSpezxshcU9BvmtN4oyznTkfVCJuUDyrAFidtdKp7gcsrfjI%2Fzm4vG46o7mCNDL09H5cvHgEs7vkzKifKjAPQ0U8GmDWAZh%2BXNqC4sUecAexPFvJSJk8bKvZ9afynH1P5j6j5eJMLay08MGOqUBGCzQXmEctC9QVN2hpJmG1ty74TBWvH50sL%2BVdHENmzAlnqNtm%2FNDU8TNOI0EC%2FK9Za%2FfV1thAz%2B3WicLjWCp29TYf%2FknSwnMh1UOE0OhDSyBZ6JWLki%2FnU9ofwcX8VCdcxR5WyEtFGW4ZtvCc7MxqjZ2XP8RuMUrYS%2BsJDW2aySSMOMw%2FrSRGmRO6FSJjogEUBrb%2BS8On8brALX6d3qcCTMFPny1&X-Amz-Signature=938068c681ebd741172764f05f28b7eee020cab5110ad8d4cdf6f4cc3e4447ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
