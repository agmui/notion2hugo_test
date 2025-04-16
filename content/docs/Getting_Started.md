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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X344NKRK%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH9yZkQhmUYOTG%2BDZDqUQZFpiR7N9R2fGVZfuelnASVAIgdIYkCr4R3OqfDCPJZVZ6RM5X62L67%2BOlGaskNcEjOY4q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOZvjCLJUeIJK4ASdyrcA54nAwsFIOPeIawU%2F5VShqvOJ27gLS7FQJXYIShSoMQIGTSjfLcf7j5d%2B4BbyTz1xxvd2W8USOqk9UOTD5vQnMF5tVctScoUHUl%2FEyHmLx391m09TyNS75JC7P%2FWHTKRagiG9xNW2Clgd7RkX969ktUtxTuOmCaNP3Gsn87kTUuqLjaWnlUkJZpvQKKKxUpcB7JMF%2FEhz4bDOmNaDo9zP5iycXC84iC3XtL59xENfdtaZOmd164N4vcwWYH%2BJ0biu7lXN7K%2B%2FQJ0gb%2BbG6vbx8h%2BZOy9sVyHMA6etLAxteAfJHQsYqDLIkC%2BTbW83Cq0LJjJ1vccilWlsc%2FjbMwsBGhLfEV9ks4vd8lct0v3FvLf5YclBnaOxB%2FtF8JsGuPntc0FX7ZZ55NP0hwt1p6yh%2FsupgSqnFWsDbK%2FO%2B1isOwg7vTdOLi%2FE6YoSO7cq2NPrt4SUQEXyFip3wtXVpZ%2F4NoMb9isWbggLYPS1ea4UkeOwvCgJTvHCWQV0rBxXO1lFkYmbzqdTStsY8dxUeTYI%2B5WNm2zSB7Gz021XZHrbyFMrguosBkLaDbPfJ0Yy1iSDYZaJrYAJqakdMJlZxAh86W5XQaKi4imXFUZjaQhm1Q8mW7A61ad5bkl3IhfMJDA%2Fb8GOqUBHrd%2FZEcw%2FQMGyYf8NfG1zIO8R1tRlP%2Bk3m3ksR9Cvje%2FFsPta6EjvySyES3gf%2BzUcMWX6J99lwSFOItPAVaXsBZIiIQav1UD8DWEk4RVgXSMs%2BYdQ55%2FTooP22TXEAeG0w%2BiSbXevLMdOT4u%2Bfn1DivY1GtMMd0epVXIZCxQR86LAb9r2BeIU52pYdFRkpkiiFVFFasQ%2BjHtHGHLU02cZvw%2FWfkR&X-Amz-Signature=bd439a9cae42510b8980b0b2e730d0d4e43cc7c55434bdee08cfbf496223741b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X344NKRK%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH9yZkQhmUYOTG%2BDZDqUQZFpiR7N9R2fGVZfuelnASVAIgdIYkCr4R3OqfDCPJZVZ6RM5X62L67%2BOlGaskNcEjOY4q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOZvjCLJUeIJK4ASdyrcA54nAwsFIOPeIawU%2F5VShqvOJ27gLS7FQJXYIShSoMQIGTSjfLcf7j5d%2B4BbyTz1xxvd2W8USOqk9UOTD5vQnMF5tVctScoUHUl%2FEyHmLx391m09TyNS75JC7P%2FWHTKRagiG9xNW2Clgd7RkX969ktUtxTuOmCaNP3Gsn87kTUuqLjaWnlUkJZpvQKKKxUpcB7JMF%2FEhz4bDOmNaDo9zP5iycXC84iC3XtL59xENfdtaZOmd164N4vcwWYH%2BJ0biu7lXN7K%2B%2FQJ0gb%2BbG6vbx8h%2BZOy9sVyHMA6etLAxteAfJHQsYqDLIkC%2BTbW83Cq0LJjJ1vccilWlsc%2FjbMwsBGhLfEV9ks4vd8lct0v3FvLf5YclBnaOxB%2FtF8JsGuPntc0FX7ZZ55NP0hwt1p6yh%2FsupgSqnFWsDbK%2FO%2B1isOwg7vTdOLi%2FE6YoSO7cq2NPrt4SUQEXyFip3wtXVpZ%2F4NoMb9isWbggLYPS1ea4UkeOwvCgJTvHCWQV0rBxXO1lFkYmbzqdTStsY8dxUeTYI%2B5WNm2zSB7Gz021XZHrbyFMrguosBkLaDbPfJ0Yy1iSDYZaJrYAJqakdMJlZxAh86W5XQaKi4imXFUZjaQhm1Q8mW7A61ad5bkl3IhfMJDA%2Fb8GOqUBHrd%2FZEcw%2FQMGyYf8NfG1zIO8R1tRlP%2Bk3m3ksR9Cvje%2FFsPta6EjvySyES3gf%2BzUcMWX6J99lwSFOItPAVaXsBZIiIQav1UD8DWEk4RVgXSMs%2BYdQ55%2FTooP22TXEAeG0w%2BiSbXevLMdOT4u%2Bfn1DivY1GtMMd0epVXIZCxQR86LAb9r2BeIU52pYdFRkpkiiFVFFasQ%2BjHtHGHLU02cZvw%2FWfkR&X-Amz-Signature=9ffdaafe239469df995ab02841ce7be1616679e78ff37b2a4f03322600740926&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X6RAFHF%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPFGHOcluNoaijwTXkkWOza%2Bbtw%2BCIVMPnYsDu3y%2BQlAiAl64t17tMNabI5C8wwwot6mUDsEXKanQEifY%2F7bzYulyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMd1RlRi2EsVd75PZNKtwD9BGSK6R45XazS70U0cG0KYHMc3V8sliuhaM5Vof8BnEbOvM4DwwBhlA%2BavXhRtL64lPaaiDz5Pebb2NGPsQlaavrxQMZzUNbRiytNn%2F%2FpDq0%2BRKxD1z%2BXZ%2FZCzq0Ds%2BOrMwVPJNm%2BUQ7H9P0W3eshDBytw20jkD0WxuDmsxk%2BYVe73c67xbjBvMgJ17U0n52bpxrye4So%2FOuCFy3JIqVfSAuJnlzVvou6UI%2B3vy8XgJ3%2FAwWKLBpG48kuoCLUXgcDR8OgWylp4rpVF8yhqK7UeZ%2Fy4avPMSbjwOK3fMQWeBCKqXEHo5k03rMj%2BLmhflf24Xj%2BAIuE06FAiXo8sww%2B2seM8Xpg6PhBoZdCWYJgBKSk8Y%2BvTKNOycT3rDVAw%2BAEoXrH5RVljbse7tAMFbwOyVp6NOxKH1GBo03Up35a2OcJVyELyrE7wI8UvwVpLM8abBS2jkk4W%2BJn02quzVmLrsfgONExK%2B0X%2FjR8cKSJw7pxNV57SKfoBJJJa7MLRB%2BbpCH1ClCI6P4pwJbaJNw5P57rc24eok%2FOx9JXX90kKDYxVwd%2F9Juof%2FRGx2McznISEGdz%2Fce5sddh2KRnK3r1hTAx5n9wrflqe7GC7iuaotQeNEVMySppo0E92kw1cD9vwY6pgGRiQxTEq3TV5cwUtZbJInOleFQ0AYwxQc3ivvH1nqwappnAXElEaYwYwS%2B86mbA9FBeaJ2RQCXtwoPtL2X7KbOLfzSIU%2FbWfuKryfHMs5wc8CfGWPjA2v2be%2BPKXDj9Eq3ffo4MSa%2FTNZBvDnirQpIBL3t5ZWJ5rgJF5DNQTjCxfUSPEPgVJuu80ZmHwOOfugJGbe2JDbTOAOtV7FmPu3jQpzgN1Fx&X-Amz-Signature=e0c1ef2617e3f88a8b87e1267eef5f705ba4c27263e9ff6020d6f5ba2cede762&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B43K4WB%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2Fi9yqwa%2F9jH5KQC8ghTGs%2FC1c1GgcYhHwFCAdZCvblAiBX3Y8JBUACFVs6TouWAh7DIbbe%2FEO7VQyhhTi4nku65Sr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMEZ1rrXKmATRx0ZuuKtwDYL0wICUHX3dizBjz%2FPuJeKUorDGpgC1HLr2EWs4g30K61zoz7TerLo7ZwZv540YC%2F%2FdmZuIQrKmxICCVQg%2B5oO4tSTSZ9LXtwcIvu2tB2%2FFUc9gtgmQxvASfxpHttoAar%2FpuPHvvTQOQZEI1FgX3irB13%2BYoupnTe7UBcjqVbFBy%2B4VNKTBxb9%2BKhJTwH5lGs273JCW%2FRf0heV1FfSe3LYskAZBRxIdL2xGQUpcrWz7vchFzA79QB8WYevDz2sXkeD%2FCTBokVxngoFF93MiySqcMaWhhURsa5%2FZEUmJsBxCA%2FReTEf3M540sdgxySUL%2FINCR%2FMOf%2BiHKZl%2Fqt0dj2kewsFOmaBZaB6qL2R9jUpNjNUPx61rRLibIINDniBc7yCn8RrTjCBnA%2FP6RtzUaRxoMkS8a5S2nFQWR0i7HsnzwT5u22lPFi8XACdgrqjb9Acj1ITixdQD2XihQzNpBEMhSw1X1rjbJZ71QBAlFQVQp5a3yjnQWog1UKwjJWb8NKC3dmlNqptzqEzi7W6AbhbG5NetLObX0plR4FB5Afhzm%2BtsbO1b0Zhwey2Y%2BI6%2FkNSgVSi2PX5UCSJY5FOxBDLF6ajiEDemJ99C%2F6Ejez%2F3Gae6ORkfOl3SdRGsw08D9vwY6pgG3jnLUTeyrpqIW8gx2RcYe2JKSBEe8Ovj3GNBjI570DEaS1T7eeRYSlbD3WyyuP9tOecEjycuTafZG2w4garEo6l2%2B2X%2BFZZp80mhFoNyusyZ5o8Y7InHyhPIXsRKuzT4c3rXJJ61FlQTNE2SzB94oAZltjeQ8TyS7VPfJ3HqWWdCAPTBeGGhxdfcYL7K0zolYXoZrTrvWKue2gdp2vCWTajRxHFKU&X-Amz-Signature=e87d44d702758c825a6d3557a8807b77aed2ba1bcc4d8d3cc52f733bcf199471&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X344NKRK%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH9yZkQhmUYOTG%2BDZDqUQZFpiR7N9R2fGVZfuelnASVAIgdIYkCr4R3OqfDCPJZVZ6RM5X62L67%2BOlGaskNcEjOY4q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOZvjCLJUeIJK4ASdyrcA54nAwsFIOPeIawU%2F5VShqvOJ27gLS7FQJXYIShSoMQIGTSjfLcf7j5d%2B4BbyTz1xxvd2W8USOqk9UOTD5vQnMF5tVctScoUHUl%2FEyHmLx391m09TyNS75JC7P%2FWHTKRagiG9xNW2Clgd7RkX969ktUtxTuOmCaNP3Gsn87kTUuqLjaWnlUkJZpvQKKKxUpcB7JMF%2FEhz4bDOmNaDo9zP5iycXC84iC3XtL59xENfdtaZOmd164N4vcwWYH%2BJ0biu7lXN7K%2B%2FQJ0gb%2BbG6vbx8h%2BZOy9sVyHMA6etLAxteAfJHQsYqDLIkC%2BTbW83Cq0LJjJ1vccilWlsc%2FjbMwsBGhLfEV9ks4vd8lct0v3FvLf5YclBnaOxB%2FtF8JsGuPntc0FX7ZZ55NP0hwt1p6yh%2FsupgSqnFWsDbK%2FO%2B1isOwg7vTdOLi%2FE6YoSO7cq2NPrt4SUQEXyFip3wtXVpZ%2F4NoMb9isWbggLYPS1ea4UkeOwvCgJTvHCWQV0rBxXO1lFkYmbzqdTStsY8dxUeTYI%2B5WNm2zSB7Gz021XZHrbyFMrguosBkLaDbPfJ0Yy1iSDYZaJrYAJqakdMJlZxAh86W5XQaKi4imXFUZjaQhm1Q8mW7A61ad5bkl3IhfMJDA%2Fb8GOqUBHrd%2FZEcw%2FQMGyYf8NfG1zIO8R1tRlP%2Bk3m3ksR9Cvje%2FFsPta6EjvySyES3gf%2BzUcMWX6J99lwSFOItPAVaXsBZIiIQav1UD8DWEk4RVgXSMs%2BYdQ55%2FTooP22TXEAeG0w%2BiSbXevLMdOT4u%2Bfn1DivY1GtMMd0epVXIZCxQR86LAb9r2BeIU52pYdFRkpkiiFVFFasQ%2BjHtHGHLU02cZvw%2FWfkR&X-Amz-Signature=298e5e84e5e356dae36f9326803476b975e8006cb268e446265f485b22a80954&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
