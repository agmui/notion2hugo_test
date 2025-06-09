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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XUQKAV3%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKxR1Lgq428gQyHGsSPVt8Y5yo6o90IyPy%2Fe%2B4mhj2LQIhAIhod0AU0r7ePEGdvrZhWLfXImPmqT5hT9NrkK3DyU5TKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfGwXHehHjjZ4dSP8q3AM4c1%2BL1GgnIt%2BrOGR5xvcCYaSdSFVWIkPjDGWb51QFrEZTRAWUu%2BwUs8QvHQ94YC66kV00ymnC7tQlb7FtJmLzUor4Svsvl7j8nq4FhOD8aj0uD8gbaJ349CY0npYKD7qAoeTpTQW2lm6LDPUrdiZTk%2F8KquJf6OJq9VeQdkoDgmiNpvWi4tIw7vSNtSkiI3x4wk8mbzQG%2B8CR0x%2BGpYvSye5aeE5hLrKSRPqnmv%2Bxte1ftlhI7mAQJ5Bge2XdpW%2BmowKcYd%2BUd1QucraMHvP1KGjGD9fQ%2FnCeyTLzSejrGI4k5ZL%2BBE7DDQp5G7SGY%2FzTJ48u3sjm3bNct5q%2FUOgcOy1cfoWR6EriQtcc%2BN7YE2yrjhCXhaLaClyRjzDXjTVwc1asNVWEJfSxJc5zG4tP0LfLlvd7z1o9TmTP0xlnfNfoaxSJ13yOg4xBTCDvMjLm9uFMq4HNcHyA7v%2F58lz0Ail0HYy5tecmqnXxOgk%2FGFiqfHX82e5Vn43AYrAa1L%2Fozwyys%2BhSSqawYMwInsb7xyr%2Fh6pSx3Km%2BlPDEWYQscJTJvrJdod6ZVEcxFXUox4fPRGExpbmlj5WkIyfp6Pzq1ZgsLwHAne93DSd%2BSfqfPQmIT0%2B1ReGionSSzDmj5rCBjqkAXKxOvHImHasL8vfBAym6%2FgoIOWmeL7urmS92IEzuAWgxZbQTExKegD7d20y0VgvJjJXqU6iLu%2BZnI6xqOg2NQxXYkKq%2F5avy2WDIkWdliVa6u%2BsnVfTzl9Xq1NXGd1Wqh6gcZ4g4lqEDXR%2FrPbWYuC9sACefHsQMjHIWFrnc0SamvSoM0fPy%2FOv23zz4T%2F%2F1gZ%2FIvKiUQ8ajCn9fEDh2sr7rLRi&X-Amz-Signature=589349938aade2853b4ae0c3363a42bfc3dd53de4f9e9cbce2a00a675b9eb4ba&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XUQKAV3%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKxR1Lgq428gQyHGsSPVt8Y5yo6o90IyPy%2Fe%2B4mhj2LQIhAIhod0AU0r7ePEGdvrZhWLfXImPmqT5hT9NrkK3DyU5TKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfGwXHehHjjZ4dSP8q3AM4c1%2BL1GgnIt%2BrOGR5xvcCYaSdSFVWIkPjDGWb51QFrEZTRAWUu%2BwUs8QvHQ94YC66kV00ymnC7tQlb7FtJmLzUor4Svsvl7j8nq4FhOD8aj0uD8gbaJ349CY0npYKD7qAoeTpTQW2lm6LDPUrdiZTk%2F8KquJf6OJq9VeQdkoDgmiNpvWi4tIw7vSNtSkiI3x4wk8mbzQG%2B8CR0x%2BGpYvSye5aeE5hLrKSRPqnmv%2Bxte1ftlhI7mAQJ5Bge2XdpW%2BmowKcYd%2BUd1QucraMHvP1KGjGD9fQ%2FnCeyTLzSejrGI4k5ZL%2BBE7DDQp5G7SGY%2FzTJ48u3sjm3bNct5q%2FUOgcOy1cfoWR6EriQtcc%2BN7YE2yrjhCXhaLaClyRjzDXjTVwc1asNVWEJfSxJc5zG4tP0LfLlvd7z1o9TmTP0xlnfNfoaxSJ13yOg4xBTCDvMjLm9uFMq4HNcHyA7v%2F58lz0Ail0HYy5tecmqnXxOgk%2FGFiqfHX82e5Vn43AYrAa1L%2Fozwyys%2BhSSqawYMwInsb7xyr%2Fh6pSx3Km%2BlPDEWYQscJTJvrJdod6ZVEcxFXUox4fPRGExpbmlj5WkIyfp6Pzq1ZgsLwHAne93DSd%2BSfqfPQmIT0%2B1ReGionSSzDmj5rCBjqkAXKxOvHImHasL8vfBAym6%2FgoIOWmeL7urmS92IEzuAWgxZbQTExKegD7d20y0VgvJjJXqU6iLu%2BZnI6xqOg2NQxXYkKq%2F5avy2WDIkWdliVa6u%2BsnVfTzl9Xq1NXGd1Wqh6gcZ4g4lqEDXR%2FrPbWYuC9sACefHsQMjHIWFrnc0SamvSoM0fPy%2FOv23zz4T%2F%2F1gZ%2FIvKiUQ8ajCn9fEDh2sr7rLRi&X-Amz-Signature=3a37ae898e0938573f70dc6b619cf5009e6f84a56930417b5d776fe57b2c152e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XUQKAV3%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKxR1Lgq428gQyHGsSPVt8Y5yo6o90IyPy%2Fe%2B4mhj2LQIhAIhod0AU0r7ePEGdvrZhWLfXImPmqT5hT9NrkK3DyU5TKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfGwXHehHjjZ4dSP8q3AM4c1%2BL1GgnIt%2BrOGR5xvcCYaSdSFVWIkPjDGWb51QFrEZTRAWUu%2BwUs8QvHQ94YC66kV00ymnC7tQlb7FtJmLzUor4Svsvl7j8nq4FhOD8aj0uD8gbaJ349CY0npYKD7qAoeTpTQW2lm6LDPUrdiZTk%2F8KquJf6OJq9VeQdkoDgmiNpvWi4tIw7vSNtSkiI3x4wk8mbzQG%2B8CR0x%2BGpYvSye5aeE5hLrKSRPqnmv%2Bxte1ftlhI7mAQJ5Bge2XdpW%2BmowKcYd%2BUd1QucraMHvP1KGjGD9fQ%2FnCeyTLzSejrGI4k5ZL%2BBE7DDQp5G7SGY%2FzTJ48u3sjm3bNct5q%2FUOgcOy1cfoWR6EriQtcc%2BN7YE2yrjhCXhaLaClyRjzDXjTVwc1asNVWEJfSxJc5zG4tP0LfLlvd7z1o9TmTP0xlnfNfoaxSJ13yOg4xBTCDvMjLm9uFMq4HNcHyA7v%2F58lz0Ail0HYy5tecmqnXxOgk%2FGFiqfHX82e5Vn43AYrAa1L%2Fozwyys%2BhSSqawYMwInsb7xyr%2Fh6pSx3Km%2BlPDEWYQscJTJvrJdod6ZVEcxFXUox4fPRGExpbmlj5WkIyfp6Pzq1ZgsLwHAne93DSd%2BSfqfPQmIT0%2B1ReGionSSzDmj5rCBjqkAXKxOvHImHasL8vfBAym6%2FgoIOWmeL7urmS92IEzuAWgxZbQTExKegD7d20y0VgvJjJXqU6iLu%2BZnI6xqOg2NQxXYkKq%2F5avy2WDIkWdliVa6u%2BsnVfTzl9Xq1NXGd1Wqh6gcZ4g4lqEDXR%2FrPbWYuC9sACefHsQMjHIWFrnc0SamvSoM0fPy%2FOv23zz4T%2F%2F1gZ%2FIvKiUQ8ajCn9fEDh2sr7rLRi&X-Amz-Signature=de2d1836f93d44d8e0b019038985160ba174aa3552e68255b1b34feac086f015&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CZZWAJ7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwwjXVmmTp%2BwybUbwhOv4WK2EDrY5HcMNfjfNT4SJ6qAIhALiyQJUJYp7teWDxPSP7dcLZwqX54qDElDMT4ZugrSP7KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjhBjd5lMeP0j7pr4q3APNNsCQtR8FdXOqd5Ae65ifEry8XAiW3MX9UMik4K6amvNu2I41us22guI4wIN8vso%2F6XNnvbO0wCxxQQVhAIRpT80heGxURy1I9pdeVhz%2BTRnhSlJzCtd%2B%2Ff3PumcRWYiJ0kKr6mv2H%2B2py5wkKi5trAwkkpOHMAOpP%2BPzn0t%2F2TbgGVEJJopCi2kbQaZRodT%2FbQLKbXUspaVU%2FmD0crz%2FqhgZtu%2BdaEcteS0Y3aHsRNHdm8KmAgRfuJMq04b4Hjb%2BoRjzN5oTQh53xOQZ%2BH3DfXjSVfR7jQ%2FejZ1i4Em%2F%2ByXgGJMvdiKlAB2FZgggcQdz3hSfMBUHfwW%2FN2DGgE7Xs9z9nI%2B5jxcdQaG%2F3MU%2B4fMmAzA%2BKQHCHlkuC9glAwkZZ%2FfglCD4HZMReuZ%2FOnhC79iR076k8KWr4uBviT0UzBwjoms9003pwo4lkn7e6xAf5Mn70Knjxcf8O3YM4izktwj4yMiH8m8SgLkWNMIexpEun1EepBCKgr5keVIvPBPG%2F4tKwFJaS8D3HTjXxrX24bk9bLZHAcTYthJMwH3WoOrIF9Jwo2NrEJQlBOlpQdQJq3qT1XU5UbCk09jIc%2Bsd8r%2B8humKnRarMzzrn1JeQnDzCI0K3q9CRhD2kjCL3ZnCBjqkAbWzBfgTr3TfE5C5pGzCheTABeM9RFRfiCRURQ9IQkoN8qVB0zMiBYTn8QAfCvB1iiZ%2FJfxWape3K60TCKV%2FbUfLK5plYh1WsrEB729VfA6HiwBprlSMRsSrchC4CDWvnsWpZ90PCDgpanFkxEGwiYEFrmArhtc4tVUhfNced6IaNz%2F%2Bh%2FayhB6Dk6o7AkyTX9fHWlC8yoFkf6WV3aZHO9dZD77V&X-Amz-Signature=06f733b1e559b1eefa2e0e9ebdb9952a861959201c56b6c58501af63d6201e41&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466566WHNTX%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGVAFYyneMrUVS7%2FWC1Yf6V5e509AvE2IAXZAyroUIYAiB6u3CxwMZCL707k6P%2Fa7FSzMAebVPVygUDtlcFjjoTXyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkgbWhcXZrqZ2TonBKtwDZDmU5UB7BWvjYMq2E0eHHgAengRVWxCERdmJFy%2BY%2BYshATjfr%2BXJ%2FLXMxHAmHQWGGQVWUYCXhrhHI4wNTC5HUtVusGgwthRp00n1fA%2FGcCixgAM9O8gzA91pFFEpMDFsqDqc8bTYi%2FF91ihUpFSKjcDQSA0THDJ0AOop4BEj3y5f%2BeOgOGqFtmE3jIgxfiiL%2FBkCkN%2BY2kXZ2EGkT0eijcSaZheiCZzQPt9W%2BhlXAxT9iFQNYYd4crFfuipuTb0sNjnJ3BRfrHEi9GC7FDVjIONry9i5SqtwBBNCzt%2BmePnB3TZZx2Q9YKfcNQ7PPrtQtxleX%2BgrW%2FF40tR3oXmF2Wou%2BsvtHMVdE7dmwWbBquHk8IvOs4ID0oLfzIbPgCLXlZfWhqZV%2FauP0VxGPXKUnS%2FJPpeaSB07JU8K1i0FYIhQBKlpwqQUwZIVG5yRzQfFT1PDF2ZJGzIl0zDt7AIt%2FjhLMNWVyRqpG7ve33mg4AcYvkBsnSOcv0AqSOlqdx9A5oqcMe4kndG5uy3c11wlNCegTu2HLWrs1HKCgxNfqkUP4BUp%2Beyie1ark4oSK9Cy5pzNeskhB9pvlLMHdfC11enxHuTxcGRF6d%2FCp08s2RknXvW%2FneQ6dIHtnR8wlYKawgY6pgGrOcDA4RlEj9HGIHzwhQ%2B3AKUILMmIK5EIuMaozk%2FJy4qy%2F8hoUZtngmspL6b0H2PuXlefvbI%2BmErGXkKon8aPnTquIvVWpCEh1UfvfjGi3zlSjh%2FrAVhhnUufpACH41Qs3O4Er8rDo6inliIfkDkRNnuDldvu4gNNttqH7bi6Qh0oYjawcwxZR0hF4wElvjgh1CnXlJNVbdziZyBE4%2FErpF9nPWDR&X-Amz-Signature=584383a2c4d1f9dc4e5e7055bf56021884416bc6efa1934b54eb10e1707a5314&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XUQKAV3%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKxR1Lgq428gQyHGsSPVt8Y5yo6o90IyPy%2Fe%2B4mhj2LQIhAIhod0AU0r7ePEGdvrZhWLfXImPmqT5hT9NrkK3DyU5TKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfGwXHehHjjZ4dSP8q3AM4c1%2BL1GgnIt%2BrOGR5xvcCYaSdSFVWIkPjDGWb51QFrEZTRAWUu%2BwUs8QvHQ94YC66kV00ymnC7tQlb7FtJmLzUor4Svsvl7j8nq4FhOD8aj0uD8gbaJ349CY0npYKD7qAoeTpTQW2lm6LDPUrdiZTk%2F8KquJf6OJq9VeQdkoDgmiNpvWi4tIw7vSNtSkiI3x4wk8mbzQG%2B8CR0x%2BGpYvSye5aeE5hLrKSRPqnmv%2Bxte1ftlhI7mAQJ5Bge2XdpW%2BmowKcYd%2BUd1QucraMHvP1KGjGD9fQ%2FnCeyTLzSejrGI4k5ZL%2BBE7DDQp5G7SGY%2FzTJ48u3sjm3bNct5q%2FUOgcOy1cfoWR6EriQtcc%2BN7YE2yrjhCXhaLaClyRjzDXjTVwc1asNVWEJfSxJc5zG4tP0LfLlvd7z1o9TmTP0xlnfNfoaxSJ13yOg4xBTCDvMjLm9uFMq4HNcHyA7v%2F58lz0Ail0HYy5tecmqnXxOgk%2FGFiqfHX82e5Vn43AYrAa1L%2Fozwyys%2BhSSqawYMwInsb7xyr%2Fh6pSx3Km%2BlPDEWYQscJTJvrJdod6ZVEcxFXUox4fPRGExpbmlj5WkIyfp6Pzq1ZgsLwHAne93DSd%2BSfqfPQmIT0%2B1ReGionSSzDmj5rCBjqkAXKxOvHImHasL8vfBAym6%2FgoIOWmeL7urmS92IEzuAWgxZbQTExKegD7d20y0VgvJjJXqU6iLu%2BZnI6xqOg2NQxXYkKq%2F5avy2WDIkWdliVa6u%2BsnVfTzl9Xq1NXGd1Wqh6gcZ4g4lqEDXR%2FrPbWYuC9sACefHsQMjHIWFrnc0SamvSoM0fPy%2FOv23zz4T%2F%2F1gZ%2FIvKiUQ8ajCn9fEDh2sr7rLRi&X-Amz-Signature=216035df42e4db1edb942ac377019b7b7dc75c7c4e8546794322fad8efcb6f0f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
