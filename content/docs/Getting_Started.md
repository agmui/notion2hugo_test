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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY6CABUV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0tsbS4TdrimUhKuH9mZlmCGnBMGYelavnv9unSfVDcAiAgkgDeTg4TCdJlsc46NKhgJcyKCBHk8sJk8xylr%2F6xqyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMNc0q68bRTPwhrUt2KtwDfa%2BXP8XaXksis4dmJeEeoeKrn98NE%2BbyGjA%2BlzoWtATvOf%2FNb0cn4KsDlRBEifCrGQREsdrbY%2FKv4oZ1JiWrwRrWqtXj2rGbVZoCnNOVRnq7zRC7Y3MY8K8ViffWz%2BMSjBVa1G6lLuN9Wr0Ly5OCGPZPVFwMZeaV%2F0uhSnnjCsS1EwtFIuRplBa0BJg6SS4SZJw5O10kryUNgk4xdlAhfRQY4RyY%2BZAmV1K%2FWwQ6g%2BbNnuCOxV5Kxo%2BJQyLwMF9%2FxiuIbNzPeRh6c0JBVwhyiMnJhz5FQzF42cMM1QhsWof96pFkJGSkUqXA6pINVKKF1gROHUN2WbeiSFz6Aj%2Be%2FhsEq3jkm5YSSxTfS9%2FjZrCI3x5%2Fq3Y7fahosXn4VJ%2B0DdlDZgd4BcJo0T7%2FrBWdNnVj4xHJXUJK6IZw5%2BlatFKoPZDBRzlE6LFvWWfKARuuWX%2BSwvb9ZhMkCyLb5%2B6E72maPbRTuJpejMkf0xZNAvDD3pkGRYL4qalQVHZozgW5KhIKZ0sZ%2BhQamjr%2FF1WcljqSSD6QuH6GVwtyVGa6BcLMjtQ7Vingy9pNX%2F5vrUBfs5UgeS41Lp51e0Y811TV7wUR4E7KdcrnLlx73%2BAofZ0ayERXbwzwFp9PLkgw3%2BnxxAY6pgFFZm3IVaOHc6W%2FZQ4GGgDRWl%2FbWq%2FtYBrO28bYOcAUiddaUre38EXWgDK1X6qCiaQ5USyMJt5oHJUo3kFQnftDHlJzNZcp7e3eaSbw1CstC5gl2h8gUMkFgGHcIYoORhm0WXTmxpv4vCMIGzb31qe6qBVuUcbCXnBcZzhb2TG9LWqLQsvTxadrKimEkYnG2yWXQfT7nT%2F4XmYpT0KqEpvwvTzHOVJ7&X-Amz-Signature=ca4600a2c071d524cec36b412e50e6ec528e80bc634c8e71f918d58942f2add7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY6CABUV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0tsbS4TdrimUhKuH9mZlmCGnBMGYelavnv9unSfVDcAiAgkgDeTg4TCdJlsc46NKhgJcyKCBHk8sJk8xylr%2F6xqyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMNc0q68bRTPwhrUt2KtwDfa%2BXP8XaXksis4dmJeEeoeKrn98NE%2BbyGjA%2BlzoWtATvOf%2FNb0cn4KsDlRBEifCrGQREsdrbY%2FKv4oZ1JiWrwRrWqtXj2rGbVZoCnNOVRnq7zRC7Y3MY8K8ViffWz%2BMSjBVa1G6lLuN9Wr0Ly5OCGPZPVFwMZeaV%2F0uhSnnjCsS1EwtFIuRplBa0BJg6SS4SZJw5O10kryUNgk4xdlAhfRQY4RyY%2BZAmV1K%2FWwQ6g%2BbNnuCOxV5Kxo%2BJQyLwMF9%2FxiuIbNzPeRh6c0JBVwhyiMnJhz5FQzF42cMM1QhsWof96pFkJGSkUqXA6pINVKKF1gROHUN2WbeiSFz6Aj%2Be%2FhsEq3jkm5YSSxTfS9%2FjZrCI3x5%2Fq3Y7fahosXn4VJ%2B0DdlDZgd4BcJo0T7%2FrBWdNnVj4xHJXUJK6IZw5%2BlatFKoPZDBRzlE6LFvWWfKARuuWX%2BSwvb9ZhMkCyLb5%2B6E72maPbRTuJpejMkf0xZNAvDD3pkGRYL4qalQVHZozgW5KhIKZ0sZ%2BhQamjr%2FF1WcljqSSD6QuH6GVwtyVGa6BcLMjtQ7Vingy9pNX%2F5vrUBfs5UgeS41Lp51e0Y811TV7wUR4E7KdcrnLlx73%2BAofZ0ayERXbwzwFp9PLkgw3%2BnxxAY6pgFFZm3IVaOHc6W%2FZQ4GGgDRWl%2FbWq%2FtYBrO28bYOcAUiddaUre38EXWgDK1X6qCiaQ5USyMJt5oHJUo3kFQnftDHlJzNZcp7e3eaSbw1CstC5gl2h8gUMkFgGHcIYoORhm0WXTmxpv4vCMIGzb31qe6qBVuUcbCXnBcZzhb2TG9LWqLQsvTxadrKimEkYnG2yWXQfT7nT%2F4XmYpT0KqEpvwvTzHOVJ7&X-Amz-Signature=9f92be9e90358fe7267c3b6b3de2b57eefc9aad3115d23dffb89ac129ae2f8ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY6CABUV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0tsbS4TdrimUhKuH9mZlmCGnBMGYelavnv9unSfVDcAiAgkgDeTg4TCdJlsc46NKhgJcyKCBHk8sJk8xylr%2F6xqyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMNc0q68bRTPwhrUt2KtwDfa%2BXP8XaXksis4dmJeEeoeKrn98NE%2BbyGjA%2BlzoWtATvOf%2FNb0cn4KsDlRBEifCrGQREsdrbY%2FKv4oZ1JiWrwRrWqtXj2rGbVZoCnNOVRnq7zRC7Y3MY8K8ViffWz%2BMSjBVa1G6lLuN9Wr0Ly5OCGPZPVFwMZeaV%2F0uhSnnjCsS1EwtFIuRplBa0BJg6SS4SZJw5O10kryUNgk4xdlAhfRQY4RyY%2BZAmV1K%2FWwQ6g%2BbNnuCOxV5Kxo%2BJQyLwMF9%2FxiuIbNzPeRh6c0JBVwhyiMnJhz5FQzF42cMM1QhsWof96pFkJGSkUqXA6pINVKKF1gROHUN2WbeiSFz6Aj%2Be%2FhsEq3jkm5YSSxTfS9%2FjZrCI3x5%2Fq3Y7fahosXn4VJ%2B0DdlDZgd4BcJo0T7%2FrBWdNnVj4xHJXUJK6IZw5%2BlatFKoPZDBRzlE6LFvWWfKARuuWX%2BSwvb9ZhMkCyLb5%2B6E72maPbRTuJpejMkf0xZNAvDD3pkGRYL4qalQVHZozgW5KhIKZ0sZ%2BhQamjr%2FF1WcljqSSD6QuH6GVwtyVGa6BcLMjtQ7Vingy9pNX%2F5vrUBfs5UgeS41Lp51e0Y811TV7wUR4E7KdcrnLlx73%2BAofZ0ayERXbwzwFp9PLkgw3%2BnxxAY6pgFFZm3IVaOHc6W%2FZQ4GGgDRWl%2FbWq%2FtYBrO28bYOcAUiddaUre38EXWgDK1X6qCiaQ5USyMJt5oHJUo3kFQnftDHlJzNZcp7e3eaSbw1CstC5gl2h8gUMkFgGHcIYoORhm0WXTmxpv4vCMIGzb31qe6qBVuUcbCXnBcZzhb2TG9LWqLQsvTxadrKimEkYnG2yWXQfT7nT%2F4XmYpT0KqEpvwvTzHOVJ7&X-Amz-Signature=72369a61839d262895e1ed8a57510aa798f45936827960fa7a5f8add80cf651f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCQCJ7TV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK%2BJUE%2FvnUsD3RHqP2ZwbO1vG6qleaMkEsEp45R9vCswIgDs7NptS2NkDY6IMo5wNP1%2Fjzf%2FNZ5ZJsv1QbimHKaZ0q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDAcYRWE1IRm%2BN0VrWircAwDB8FucPfKSWPehVxvnlCRnMolkyRm%2FjtB5izi3JmS0%2BG1S8TQpdER59R5YZJyKbVWhX29aiw07cML2CAoq4UEo88CfRtOTv7jwk4sgDXn7gu8ct9p6pn1hQUjdWY3JVqeuODf4acepO4fHaT8bti6xGrNSU1K20yE5iwH6RVPxLo77OUPfddqS8UdP%2BeCSKjsAsYWX%2BqL8z%2FER8X%2FOX8ZTnAYQMhIqObTvZes60wI0owukSlKWn4o%2B9cenfZ5soDhkiC0dZgMsTLLEqQF3mcD7xk7BjQzN3BW6DDKSCNzwn3NLk3zGpCiepvHFIc%2B7HAJjipvRcIx1W%2FrZUJiv0BGLaGOpZzk8ZxJaaA6H6tIvgeh5cCTUuN1BAjdlaM0Kr2gEWnVaraPYviIN8bt%2F0%2FNJq0cOklBLcpEK5JXjWbA%2FOQgJ320WgWz%2Fsl69RwN5fqPaTft2gz0HM4nkRBfkk%2BI8o1yL%2BKjoDf4tihfbY3rqDEhgnqvBDtuUMc1puJOFRFDglLMgU0LZ4cFAsR2ybZVA691uX1WF8%2B7RFjEwstvGoyY8OZRXXQpIMLdXA1JHwGuRETewPQKKq5%2Bm%2FaFolcdoEd1CKy1qgkIpoWLqY73zYsiJEGPf7v1%2B8tWeMOzo8cQGOqUBPqKvN6jeD%2FfR5NMYBggCB9UrglTb25QM5vGVS1G3RO7DYjLPm9dksQ8ucGSHZJoNGg9QQ%2FmsAmMXCsT0%2BxAAbXc%2FQeaii6OTYhyYL57zWJnBZYHtSLUhpss6lFNtuUBTz%2F6I3ZcIRxxFls3p3%2F%2BPxmsPIg1yzn7kT6DyrgqWm6UZuUKiE12Zk2BXPFqJcjIh7KcvCVXo8C9nCSL3v5WiVFdMgvoR&X-Amz-Signature=5c7445c7157ebe1932ced46b42bbe7c2f4eed5ea90ca4a7cad103205ec53206c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WUUNM2W%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmX5NDioxWHT7nwxAfh0ePzzuPcNWjvTfPp6M9szAASQIgZ%2Bm7UI%2F%2FrM%2BrPjEYE8wfFdzA1asXf4eKZGmti5J1%2BwQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDJghJ7sGjiw%2FcHN0AyrcA2qFZLs9DooR8gBODcxisnz%2FRvBUk2qlloCyawqqSmsyIVxiSqVfg5qIy4a72zh3dDZUKCzDEQXF40VANc8UAmAjQw96%2BlCM5gDvFZijE8ZODIz38adxpOHjcSavsfbtSUiXXH0w7nMqG%2Bt%2F8I8AomRFjcEiYHR0OE%2F1xzJmTWCBAGZdwyLA8Rj2UJME87GYmy%2FblwSrnZ6NX2YS1M3UdHB8F9fiTHjFZvd0d0Qpa0t8fCZ8Qq2cJlxt%2BhXdKLVFS3nObeZohUnJZ7KTc3PG55crQQyxAj0fG4LInA65lyznkEMmoia7oZ5I6x6fLNBDRW6dTzjd%2BtQ1sBCAJjiYQr6q9j4RGp6d%2FSWgwa5jUCX%2BxxdGbhH%2FIiMwGgU%2BzraDyNV1zuG20XzC11g%2BsVw%2FMULtGaA9RpRdlomiCvcywh8uPevcYlVEvB7GZPfJVJIQDseYQ6z6GsmIz7RbRa28Q8AijvfGApGE18WQSsoi2XxlNJm5wZ%2FwUSnbojpwlLyrwXhjaeVpBl7aGDMoJ7xsB6KPVSgCFkygSjD3GYgpkVhIXPbkan4GLPDD7iKbWKEhdIawz%2BKhFhzNCYKjmOhhRS850M79TkVPEG%2F97VFjG7NZdkyjd8xUCOje2BD1MOnp8cQGOqUBlQFpVgLXVD9Rr%2B0bk7vSN5IE5Zx0TPH8uM1dnUHc7I8dUvuV7uf5mooHT4M%2FHuLUxxje4ejIRA2V%2BR85Xwu2XPW7UuGcT0iwAlnoI2fiCGTVdWlnbjR1tyYfvhdXSiRDtZJx7Sgm4LtlGriv8HLGXeKJb%2BREqNb3h2MllbPZ6w213YZlLqIlJ07jnYMt4OxtQYxPVigpS6ku4dq8LmvOicbYez40&X-Amz-Signature=e5b615e3c49c6474530787d470819d71335e74adbb2f3a99c41d60b74911a1da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY6CABUV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0tsbS4TdrimUhKuH9mZlmCGnBMGYelavnv9unSfVDcAiAgkgDeTg4TCdJlsc46NKhgJcyKCBHk8sJk8xylr%2F6xqyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMNc0q68bRTPwhrUt2KtwDfa%2BXP8XaXksis4dmJeEeoeKrn98NE%2BbyGjA%2BlzoWtATvOf%2FNb0cn4KsDlRBEifCrGQREsdrbY%2FKv4oZ1JiWrwRrWqtXj2rGbVZoCnNOVRnq7zRC7Y3MY8K8ViffWz%2BMSjBVa1G6lLuN9Wr0Ly5OCGPZPVFwMZeaV%2F0uhSnnjCsS1EwtFIuRplBa0BJg6SS4SZJw5O10kryUNgk4xdlAhfRQY4RyY%2BZAmV1K%2FWwQ6g%2BbNnuCOxV5Kxo%2BJQyLwMF9%2FxiuIbNzPeRh6c0JBVwhyiMnJhz5FQzF42cMM1QhsWof96pFkJGSkUqXA6pINVKKF1gROHUN2WbeiSFz6Aj%2Be%2FhsEq3jkm5YSSxTfS9%2FjZrCI3x5%2Fq3Y7fahosXn4VJ%2B0DdlDZgd4BcJo0T7%2FrBWdNnVj4xHJXUJK6IZw5%2BlatFKoPZDBRzlE6LFvWWfKARuuWX%2BSwvb9ZhMkCyLb5%2B6E72maPbRTuJpejMkf0xZNAvDD3pkGRYL4qalQVHZozgW5KhIKZ0sZ%2BhQamjr%2FF1WcljqSSD6QuH6GVwtyVGa6BcLMjtQ7Vingy9pNX%2F5vrUBfs5UgeS41Lp51e0Y811TV7wUR4E7KdcrnLlx73%2BAofZ0ayERXbwzwFp9PLkgw3%2BnxxAY6pgFFZm3IVaOHc6W%2FZQ4GGgDRWl%2FbWq%2FtYBrO28bYOcAUiddaUre38EXWgDK1X6qCiaQ5USyMJt5oHJUo3kFQnftDHlJzNZcp7e3eaSbw1CstC5gl2h8gUMkFgGHcIYoORhm0WXTmxpv4vCMIGzb31qe6qBVuUcbCXnBcZzhb2TG9LWqLQsvTxadrKimEkYnG2yWXQfT7nT%2F4XmYpT0KqEpvwvTzHOVJ7&X-Amz-Signature=546bbf784ada2b28964caf1a14fa718c9cb3e48713eb7355527f78fe1e9cec2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
