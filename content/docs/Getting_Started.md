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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDLEMAK%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4m%2BvlSRi%2BDs4Byimm9xTJY6A4q9Rngf0JJK8ms2YJFQIgLL%2B5MBjqt3YA%2BILUPc8zAUoT2JOfnZxOkWm4Sa2JxHIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAyCPfI0E66cXKqx2ircA3IFPH2PrBJqJPze773hLhGA8OCG2EBv9W3TmTq0UE%2BBXFbtb7LUQG5YwwA5Jq5NuvmQSk2L0FU0vJ%2F5VgOHrBlVG4c8UhY8N4GqBsX2Tc5O%2BUQlFkQhyDKVARRrkN3Jo3mWgJCNGLB9JGB2FQCFDQwQxEgtfeD73gTqI5uHHiH4seEZJQ43m3wE5CE6FILoMTEO3oGDgRnnGsQItbaq4BAAu0HlFH00L2V53kJbdIrlhbEljtXtRZXI57XrvespfjEmkoTdhPJ17NA%2BSLm6755CZz95lcBrER%2Fsbf9cevRh0Qw0qNdvg2dBIaeRTJpnjapDrDlxDn%2FwKHujxF4DyAuDrV5EqmDUNVIBh4nnJnnxUPAd4EnrYVOUhICqIFphMSl27SKHNprWN%2BO%2BQ24D4v4Tj3vvwCiEGqZFX9T3AJTBXlMXx3Zxx4SIGmAlepePf28pzrTpJgh8m2Vr3MEu7%2B8%2BOtCYoXjprjwU%2BOZFFMJNnKlDjwepRuEsRYct%2FKNyKVot7PG99dOSZrkl1xhyd8MBrXtrUAnHDV2d8yIDgAb7swALAesi5QIXMr5smmHpM3LtrfilCCLEpjgz24R07ilUerOOQvGLhjSZHrUNa%2BzUFJh8mCsppTr7Jd0%2BMIDykb8GOqUBZUPNY3TH3zKnD3IHRsStI44QNIgrwRCNo0hQVFBr24adGRABXinm9jEA88a9ZtBgXF6g7ZnnLQLTiiXJSnmJxY%2FU9b%2BGrC8FmAzs2glwu8xP9bLQXBHiUSN0xWmki0hWJmEd8F2pgAvB0jqsfZq9lZ73MRi1PmrG2Mgl32yELU%2F2HMosROAgmqfj4bUT9JlaYkexsxGxJJNoTsIh3DYoj0uotWGy&X-Amz-Signature=0f79f584b68e52abd190fa29bbfa92e6f103189428bd1b7141969f22a094a2e1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDLEMAK%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4m%2BvlSRi%2BDs4Byimm9xTJY6A4q9Rngf0JJK8ms2YJFQIgLL%2B5MBjqt3YA%2BILUPc8zAUoT2JOfnZxOkWm4Sa2JxHIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAyCPfI0E66cXKqx2ircA3IFPH2PrBJqJPze773hLhGA8OCG2EBv9W3TmTq0UE%2BBXFbtb7LUQG5YwwA5Jq5NuvmQSk2L0FU0vJ%2F5VgOHrBlVG4c8UhY8N4GqBsX2Tc5O%2BUQlFkQhyDKVARRrkN3Jo3mWgJCNGLB9JGB2FQCFDQwQxEgtfeD73gTqI5uHHiH4seEZJQ43m3wE5CE6FILoMTEO3oGDgRnnGsQItbaq4BAAu0HlFH00L2V53kJbdIrlhbEljtXtRZXI57XrvespfjEmkoTdhPJ17NA%2BSLm6755CZz95lcBrER%2Fsbf9cevRh0Qw0qNdvg2dBIaeRTJpnjapDrDlxDn%2FwKHujxF4DyAuDrV5EqmDUNVIBh4nnJnnxUPAd4EnrYVOUhICqIFphMSl27SKHNprWN%2BO%2BQ24D4v4Tj3vvwCiEGqZFX9T3AJTBXlMXx3Zxx4SIGmAlepePf28pzrTpJgh8m2Vr3MEu7%2B8%2BOtCYoXjprjwU%2BOZFFMJNnKlDjwepRuEsRYct%2FKNyKVot7PG99dOSZrkl1xhyd8MBrXtrUAnHDV2d8yIDgAb7swALAesi5QIXMr5smmHpM3LtrfilCCLEpjgz24R07ilUerOOQvGLhjSZHrUNa%2BzUFJh8mCsppTr7Jd0%2BMIDykb8GOqUBZUPNY3TH3zKnD3IHRsStI44QNIgrwRCNo0hQVFBr24adGRABXinm9jEA88a9ZtBgXF6g7ZnnLQLTiiXJSnmJxY%2FU9b%2BGrC8FmAzs2glwu8xP9bLQXBHiUSN0xWmki0hWJmEd8F2pgAvB0jqsfZq9lZ73MRi1PmrG2Mgl32yELU%2F2HMosROAgmqfj4bUT9JlaYkexsxGxJJNoTsIh3DYoj0uotWGy&X-Amz-Signature=7fe622cef4a8a7589619ebe00d9fe0e67e55a202cc2831a1336edc959003725d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVWG6FEK%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWEClXIkYsB8bRT8dFC%2FC3OkPH7xx31%2BbXo4nAAQoHqAiBVf91pc%2FW%2FrV%2BPJme%2BAzkdAdt4dE3tHvflGzxLJUN5hyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMFLxeZzA7Mt1Z8N1RKtwD5N5WL%2FcEF3sYJuj0OPNsSQG7lqAB%2Fcj8s1DQ%2FngDVEv0G9Gd3F6xHlPHUKaCIQU2Jh3wBvNY2APoXFV9LVp%2FrviFVqdtWwwqKMpVsPm97kstRnQRo2TBgsgFaQF6bjtYWLe1ixPQapTh762aFxCy2ido4M7M4S8Xxs6fqyTlf4%2B5vOduAVEmBoWnxsg%2BwWXBubVnVRGj%2BUdPgncVMNpclqN6QwkxGPjXMpTTYFlioVXLSd7po6%2Fds%2BTtB1jWXfF30kQXRLZs5%2F%2FjKPlBKm0cUbGBB4muV1q9ogxShOYb8BP43zWjccT0cBAYKJ0I9GAE%2FJtwM9J7OxMNWBq6aFJoZdXFNI%2BYIFHuQshiEFZF76HUVxqGcDX6b9rCRWoVQz%2Fqrt60UhUm8fnoEnN6AoxQtrUj6mLjCPrH5xtuTZE6OZxIlQJI1UNM0dNNgZbx%2BJ7pnpBBSwXVc91TOJosmIBFoUO9ZI9hoRf5zfK4rNj9DPMJ9yfIBKERB0AxRQGhjsLsU9d0nd20KONLDaikMH5AM33kmX37T%2B7AK9CaEPHF80awbAhi4U60eN7tBLdgtg8HZLn%2BMEGhxQpNlPyGrONUG5%2BMORKuGI2DO8WP%2Bsl6fnJRsDcY7nPr22ZERv0wpfGRvwY6pgG69zrVe1wApjvBOyvhaQ5GKaYf8erNCLNQxpNRf%2Bl%2FuAy67LGyDBPtfIYE89HjqU2xrXTkkHtMDhdIzngd7BqR4TCXOCse1fRs6zPiFlo0XP%2FE5nTG7H%2FlWOsXTQ071HLci7kcOUr4vu2O%2FQR1Blhdk7X5%2FPC3F8yrQFBt6xgyx6rc2Md%2BCjrxt9XQ66%2FL8%2FrKuZsq9L4Vye4N69Ta951y%2BG0OEohe&X-Amz-Signature=145fa719b64f5bfcd59399e9e69b04121957eb99e78e761b0fdf7a3a3e120f3f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVJRUYPF%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2frQ89fugV0F3C3nIvwQvwnbLxcALGoM0%2BGfsFSNO9AIgIurRKmYs%2FlGiyPNi1fat8KlHFcfBKK0Es7WhYcMznsgq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDD5o1Iup6Q%2BIZPVXMSrcA5kxw35BlTJbLgsddBIEYdWHihMyQbx5PcqsawfgEpmJNoeqFDdRDIOVTx7HRDZkRZ%2BvbDzQq6IZ8SzjS8QrQXRHN%2BU4wciQTFwrDSoLXueXN9U1BMv5WeVVNbZ3%2BNPeEcVqZY12J6bqJqFpXX1QS6KZ%2BFhoIen%2FG5y2E3g2U78JomlRc0Kjb76PRn507cnJgX%2BrgjUlsh5w0cjZHEN6QrW7pLe0Gyv%2B9tzKYGvmAiky7a3o95kFp56rwl9U5OYa3yCl9eXO6wdRnKRYlM30mTyfyyiZ%2BzVkFPAhGuXQg7%2F2zcZrB%2BjxtCseKKR4unGNq4LopcnFCyGJ8srPx5PANcE6z2bYaYJji1AY3Xq2Lg6QHTvpo%2Fj%2Fx858EadMH4M3cPoSQH95KhlsT%2Bf4sceQBOaJyDL0V%2FKGAgo9a98rwhgOf1FrCElGt4Cn%2B%2BZiXPX49csopAmAC98SUgtL9HDvDtbkVQSHbeUIJv997rJzmcXk%2F9Qg6EEo4mUoJ8FhkqQ8%2BdnJz%2FLmVKf7witbQG6pIDBjKFqslBYBd%2F7HCu7zyB%2BmWSrs3rrpx7LYbwyjuXx9ElqOd%2Bt9Gi2u7Q6a0NXI341NXCzhgQog6towWMrZqGHPRyjWqWaBCqrFTZ3DMMTykb8GOqUBmAqOLugUkAav8EriRvNTp9SuOeXnaMtqRw79irsmOnPHwBtZ3a7VyU02%2FTeVqSaxchcdvuaaoQzyNDgVHbGUZmeLLui5ad0w8bEq05YnXAB95XvKElvz4mEKtIKQsZFieCLdqKBMK0ggN1gDjcWv2JQK6hm3x%2BpUzUgcwvY0n39BStU1cMr2kYzFJ9Hzyxdn5goSY9XCloJn9BHMaZbv%2Fu0gLK6a&X-Amz-Signature=32b63c80a5c839d314e6af96caff7940b1f2395347a06ad5126e6b20a74132a7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDLEMAK%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4m%2BvlSRi%2BDs4Byimm9xTJY6A4q9Rngf0JJK8ms2YJFQIgLL%2B5MBjqt3YA%2BILUPc8zAUoT2JOfnZxOkWm4Sa2JxHIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAyCPfI0E66cXKqx2ircA3IFPH2PrBJqJPze773hLhGA8OCG2EBv9W3TmTq0UE%2BBXFbtb7LUQG5YwwA5Jq5NuvmQSk2L0FU0vJ%2F5VgOHrBlVG4c8UhY8N4GqBsX2Tc5O%2BUQlFkQhyDKVARRrkN3Jo3mWgJCNGLB9JGB2FQCFDQwQxEgtfeD73gTqI5uHHiH4seEZJQ43m3wE5CE6FILoMTEO3oGDgRnnGsQItbaq4BAAu0HlFH00L2V53kJbdIrlhbEljtXtRZXI57XrvespfjEmkoTdhPJ17NA%2BSLm6755CZz95lcBrER%2Fsbf9cevRh0Qw0qNdvg2dBIaeRTJpnjapDrDlxDn%2FwKHujxF4DyAuDrV5EqmDUNVIBh4nnJnnxUPAd4EnrYVOUhICqIFphMSl27SKHNprWN%2BO%2BQ24D4v4Tj3vvwCiEGqZFX9T3AJTBXlMXx3Zxx4SIGmAlepePf28pzrTpJgh8m2Vr3MEu7%2B8%2BOtCYoXjprjwU%2BOZFFMJNnKlDjwepRuEsRYct%2FKNyKVot7PG99dOSZrkl1xhyd8MBrXtrUAnHDV2d8yIDgAb7swALAesi5QIXMr5smmHpM3LtrfilCCLEpjgz24R07ilUerOOQvGLhjSZHrUNa%2BzUFJh8mCsppTr7Jd0%2BMIDykb8GOqUBZUPNY3TH3zKnD3IHRsStI44QNIgrwRCNo0hQVFBr24adGRABXinm9jEA88a9ZtBgXF6g7ZnnLQLTiiXJSnmJxY%2FU9b%2BGrC8FmAzs2glwu8xP9bLQXBHiUSN0xWmki0hWJmEd8F2pgAvB0jqsfZq9lZ73MRi1PmrG2Mgl32yELU%2F2HMosROAgmqfj4bUT9JlaYkexsxGxJJNoTsIh3DYoj0uotWGy&X-Amz-Signature=c57de80c59f1de64e109d13dd86ea10da1e9eb51f2d760671aa5b3df786ec71e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
