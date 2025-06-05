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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTVND4GV%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGFe344cEMHNDd4aWPpnZWyNMFg8DB7CmMF5jznak%2BFjAiEAzTytci29W9%2FJobgzQSXJEBfWNw64af7KRulag8v3hn8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKCTKYRnpZulJvEz3yrcAw3%2BWT6NGtKrBDONF5Q6tWrNz%2BevJTvXX2iBDVxES11498IAtEejVzaDUNJPp3ZuPaqJUcOEYeNERy54%2FqT1AZ%2BYwFyZuQ5Ct1J3d5DVocZWjHy8ZHj1FfivDeXJEVRj801%2FZYq3Q1BghAaIJoNqzeOlxFx4neZWMw7lrq9ON8BEOs%2BRGfOyO9JT3LFQoxUVcWGOrkmoTsj99Oa%2Fy4raC4IhkfSWnjJa9sDZOBwp04pOjbwQN4OAREv1ZQdhQYKbWM3%2BLx%2Bni9bQQxkUyWPhK7vXSrm8pnCn0aMS%2Fx8l%2F4jg%2B8NsmoGcuVms%2B%2BKNGkjKyAsctiw12ZhpmztN93IJO8yL1tYo6vpJNf%2FrlUoh3aZrJbZxUEoHs3q8xR%2B9RHlR0GAphftABFIeW6FrjAZ7yKg2FKzKcnIWbPawdPKmUMk9TB2%2Bhju013Igx9uJfUeXMQ9WFtsWoSYleCXD0V0n%2FkC89xaTbcH9YVxkYRSHBSt6Jp14%2FP5Aq1Vc2crC%2FnLlEYazgkEgB3DVXoTzsXOcDWEboSqNPuh5ZcX8vcOwFApfpbVHmgTClJBmy8uwO5gjCzaBa0Z3Q83hHoauGqgLx%2FEx3geaZti7fFq3%2F3sXEZ1JwaPddftLis%2BI7AKhMPDXh8IGOqUBk6Gmi9hFrVf5ahxHI0LdVGxDpoxWKWQOfELhIBAh8eqzYlihVDgUKDrWBKIKWptG%2FyFJhhx6DY%2FODEu0vam6JdwPL%2B3D7Dtxa8puDG5fG8qm75QNu%2B%2FeElF3Wak%2BiHALxUt78fRqdNO1Kg0CqkMcuoZgGcaab1EkJSp8e2iqqkmL2xdaMcHplDm0ZexrMNG4qREve95210lry7UcdgeMYK1hX4Jj&X-Amz-Signature=9802288ba47662e1da4b609e79e5f463fb7a243315c84b381b116f3e8625d095&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTVND4GV%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGFe344cEMHNDd4aWPpnZWyNMFg8DB7CmMF5jznak%2BFjAiEAzTytci29W9%2FJobgzQSXJEBfWNw64af7KRulag8v3hn8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKCTKYRnpZulJvEz3yrcAw3%2BWT6NGtKrBDONF5Q6tWrNz%2BevJTvXX2iBDVxES11498IAtEejVzaDUNJPp3ZuPaqJUcOEYeNERy54%2FqT1AZ%2BYwFyZuQ5Ct1J3d5DVocZWjHy8ZHj1FfivDeXJEVRj801%2FZYq3Q1BghAaIJoNqzeOlxFx4neZWMw7lrq9ON8BEOs%2BRGfOyO9JT3LFQoxUVcWGOrkmoTsj99Oa%2Fy4raC4IhkfSWnjJa9sDZOBwp04pOjbwQN4OAREv1ZQdhQYKbWM3%2BLx%2Bni9bQQxkUyWPhK7vXSrm8pnCn0aMS%2Fx8l%2F4jg%2B8NsmoGcuVms%2B%2BKNGkjKyAsctiw12ZhpmztN93IJO8yL1tYo6vpJNf%2FrlUoh3aZrJbZxUEoHs3q8xR%2B9RHlR0GAphftABFIeW6FrjAZ7yKg2FKzKcnIWbPawdPKmUMk9TB2%2Bhju013Igx9uJfUeXMQ9WFtsWoSYleCXD0V0n%2FkC89xaTbcH9YVxkYRSHBSt6Jp14%2FP5Aq1Vc2crC%2FnLlEYazgkEgB3DVXoTzsXOcDWEboSqNPuh5ZcX8vcOwFApfpbVHmgTClJBmy8uwO5gjCzaBa0Z3Q83hHoauGqgLx%2FEx3geaZti7fFq3%2F3sXEZ1JwaPddftLis%2BI7AKhMPDXh8IGOqUBk6Gmi9hFrVf5ahxHI0LdVGxDpoxWKWQOfELhIBAh8eqzYlihVDgUKDrWBKIKWptG%2FyFJhhx6DY%2FODEu0vam6JdwPL%2B3D7Dtxa8puDG5fG8qm75QNu%2B%2FeElF3Wak%2BiHALxUt78fRqdNO1Kg0CqkMcuoZgGcaab1EkJSp8e2iqqkmL2xdaMcHplDm0ZexrMNG4qREve95210lry7UcdgeMYK1hX4Jj&X-Amz-Signature=7a90a774b4da60ff669174776b768a310abe7a9319d452727438f785755a939f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTVND4GV%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGFe344cEMHNDd4aWPpnZWyNMFg8DB7CmMF5jznak%2BFjAiEAzTytci29W9%2FJobgzQSXJEBfWNw64af7KRulag8v3hn8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKCTKYRnpZulJvEz3yrcAw3%2BWT6NGtKrBDONF5Q6tWrNz%2BevJTvXX2iBDVxES11498IAtEejVzaDUNJPp3ZuPaqJUcOEYeNERy54%2FqT1AZ%2BYwFyZuQ5Ct1J3d5DVocZWjHy8ZHj1FfivDeXJEVRj801%2FZYq3Q1BghAaIJoNqzeOlxFx4neZWMw7lrq9ON8BEOs%2BRGfOyO9JT3LFQoxUVcWGOrkmoTsj99Oa%2Fy4raC4IhkfSWnjJa9sDZOBwp04pOjbwQN4OAREv1ZQdhQYKbWM3%2BLx%2Bni9bQQxkUyWPhK7vXSrm8pnCn0aMS%2Fx8l%2F4jg%2B8NsmoGcuVms%2B%2BKNGkjKyAsctiw12ZhpmztN93IJO8yL1tYo6vpJNf%2FrlUoh3aZrJbZxUEoHs3q8xR%2B9RHlR0GAphftABFIeW6FrjAZ7yKg2FKzKcnIWbPawdPKmUMk9TB2%2Bhju013Igx9uJfUeXMQ9WFtsWoSYleCXD0V0n%2FkC89xaTbcH9YVxkYRSHBSt6Jp14%2FP5Aq1Vc2crC%2FnLlEYazgkEgB3DVXoTzsXOcDWEboSqNPuh5ZcX8vcOwFApfpbVHmgTClJBmy8uwO5gjCzaBa0Z3Q83hHoauGqgLx%2FEx3geaZti7fFq3%2F3sXEZ1JwaPddftLis%2BI7AKhMPDXh8IGOqUBk6Gmi9hFrVf5ahxHI0LdVGxDpoxWKWQOfELhIBAh8eqzYlihVDgUKDrWBKIKWptG%2FyFJhhx6DY%2FODEu0vam6JdwPL%2B3D7Dtxa8puDG5fG8qm75QNu%2B%2FeElF3Wak%2BiHALxUt78fRqdNO1Kg0CqkMcuoZgGcaab1EkJSp8e2iqqkmL2xdaMcHplDm0ZexrMNG4qREve95210lry7UcdgeMYK1hX4Jj&X-Amz-Signature=5ecdc41e7f66e877fd0072e9324eb420999d92ebf0b06cc18ff130608063f57a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGQDQTR6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCyzqexuGzwnDAyFQ%2BAlhNQ0uOosZ47moiBbxkaMJAEYAIhAONq%2BLbnj6OM23D0veJGeAPYhY%2BN9QQCFJzti6aRlcoTKv8DCEwQABoMNjM3NDIzMTgzODA1IgysqGMLKwlPLF9oEqgq3AOp0QiYoPxiShWHGIpItklfYwy5BW71mO0%2BpGbNTj8%2FvMupDOn7H2YH8RpJOxJFDa5zcC1Wc4DzUhCeCf92XmZqe1C8ystVZg1qYpdVEEtDGobbU1F2zb6KxAvt3OAuMTuPQhfJz6aigAlTXZB88KxXXWY77kvo5k98sf1IkmHyeZwRIR2eaIaxPtFqmrIw4qKz5xXLf7xfvgUmBHeLvmyDWqQ5hWQs64JurpltzbQTwdIBgpHOEdLuLs%2BbjteJ3DZnqgmFBrm6zAqOWD79FHEjfDDZqk2V5%2FSZ64j%2BYWH9hm%2BFmzjvl6eRnm%2BGIaEpBeMCbPhDk%2B%2BOg0lCoYCp7fANPlMVEYxeS%2Bs1AOA846TG91A48y53Sv8Xor3jU9%2FCGn%2BrYUgb%2BnMSBYPo4p55GD8vjDUuSwigHQ0IH%2FFOfzKI8k99GLW1f4WcKRjFGFtG%2FYgHXbFm1kdsRpqAW2PzOOnckTEo8VGP0XharVo%2Fzln3wZzo9DWGZcu9GdtUrErFOXZ3Pk89l1vlTThlj05aQnTAaKdulvlfjo8eG1h%2FwcVrm07Jvbf%2FxHGR5TyW76PRzG5WD2IPADrKIZGidIPi3wItHk7rWxfQb5n1zbNv0rYV1XyxSCRqZh7Yu3W3VDC62IfCBjqkAVLjOb%2F4%2F3Y9TlZmLsU%2FIj5H2ykSae6437735zm4VLGjgQfHBHLQjqtebr0M48GrLpARQUUTwacdejIsZUlbMuH065wJLUE1N4j1NgT10er7mAAIGCdQRCP0lqAVesyZU6aYPur05QyEl4se2aoAOTpZV8kPUi1itIKEDKHF1BdxnaKN%2FK2AXhneaCQU%2Fh2wqOeFI2ULzd7%2Fe%2BtJtZEB2LaJV5Vm&X-Amz-Signature=e3d4337d7f0e88210a4241fc4feaddb9ed74a1041acd2e3d58069684f4d06ea6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WSZE6XI%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDvM86AIYDyyuPXMEOyC4CW9RJ%2BRXhqMi%2B23G9Xfl0%2B4AIhANsHZGAnDbV7ERgpMHEa6TQejE5Q%2F6zYVaQ4VQEtqWuJKv8DCEwQABoMNjM3NDIzMTgzODA1IgwMB3ld1SNNnlhhlMIq3AOYjyOyVxdbDrA0X353rermfKPEzDn%2FSo13MPr4BTufIxn6RUvwan0qkvTbI8jf5lnmP4wSwuQxjafbIV3vUzSP9Y9zjmuCY2jw2zjDQs4Kfxoo%2Bd9IAI1MdqtwWRXXg4p6YRCioD%2BA5GthiMW8MGfjaC%2F%2B8e4fxOp6VGk%2B1JitSIIVoYwxKk4Qcovwvs1Laun%2BZc5Z1AsmyU4tufdxAL%2FlWBFd6f9CSrxAUi7uJb%2Ffop5yGmX9A06qHQacUUzSplYvj1ugolp2nY%2B1fGsx5rLdFpUY4BbqUpgEHt12qyaErUtsp57wwOE%2Bg8LEK%2BH4ttPzFl0gZvDbYC9ZIMJBPhz7N5glNSlNGxB9SvQHySXd5hfvBxHsjckhV%2FTxa0m2GB4ADySdJuLc%2BHsS0It225RpwTorPF8PRDWtUSfOL3otsot4bY1bva96odg4S7mZFfwZHoMwrKsHeEA7lr%2Fadbk%2FWe03E1TBJBQMZXyzrbaG2opHMXYVtTF3V7RicqsshUpmVAWZE6Kjd4v66tlkizNsThebnwxhHJ9jOL%2F9jKDn02rA8%2BvOpd7GyDgEYoZ6kEAA%2BcobJK9mqJMHVzkZhUAcO3qP9WVwMPAPNjLifWQyFZVKhQuwoz%2BHd8jtETD114fCBjqkAbybnpOZ8eFmnnW%2FdHR0JGKwgP3CVpe4lhOLkbjhbF%2F%2B5wFV%2FWeZuJd5DLsUeYuYn62KpMLSbRAku2Ad90vIC2s8wozbGN3DuAdgc2PEk1Oj3g0fn6H85FJ6LUOeSH4Yt21E5BgdXAWYRIfWB0Ry6Wpp2vrPKiK6HeclOV68mU0ALpn2PR0Mvwo%2BkCDYYyhMKuKSS3xDZ6bMqIgnsgI10oHsBJlE&X-Amz-Signature=88f5cabf954ed404fb25c52186e11a7d5ebf0497a05f89c18920cff836d225a5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTVND4GV%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGFe344cEMHNDd4aWPpnZWyNMFg8DB7CmMF5jznak%2BFjAiEAzTytci29W9%2FJobgzQSXJEBfWNw64af7KRulag8v3hn8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKCTKYRnpZulJvEz3yrcAw3%2BWT6NGtKrBDONF5Q6tWrNz%2BevJTvXX2iBDVxES11498IAtEejVzaDUNJPp3ZuPaqJUcOEYeNERy54%2FqT1AZ%2BYwFyZuQ5Ct1J3d5DVocZWjHy8ZHj1FfivDeXJEVRj801%2FZYq3Q1BghAaIJoNqzeOlxFx4neZWMw7lrq9ON8BEOs%2BRGfOyO9JT3LFQoxUVcWGOrkmoTsj99Oa%2Fy4raC4IhkfSWnjJa9sDZOBwp04pOjbwQN4OAREv1ZQdhQYKbWM3%2BLx%2Bni9bQQxkUyWPhK7vXSrm8pnCn0aMS%2Fx8l%2F4jg%2B8NsmoGcuVms%2B%2BKNGkjKyAsctiw12ZhpmztN93IJO8yL1tYo6vpJNf%2FrlUoh3aZrJbZxUEoHs3q8xR%2B9RHlR0GAphftABFIeW6FrjAZ7yKg2FKzKcnIWbPawdPKmUMk9TB2%2Bhju013Igx9uJfUeXMQ9WFtsWoSYleCXD0V0n%2FkC89xaTbcH9YVxkYRSHBSt6Jp14%2FP5Aq1Vc2crC%2FnLlEYazgkEgB3DVXoTzsXOcDWEboSqNPuh5ZcX8vcOwFApfpbVHmgTClJBmy8uwO5gjCzaBa0Z3Q83hHoauGqgLx%2FEx3geaZti7fFq3%2F3sXEZ1JwaPddftLis%2BI7AKhMPDXh8IGOqUBk6Gmi9hFrVf5ahxHI0LdVGxDpoxWKWQOfELhIBAh8eqzYlihVDgUKDrWBKIKWptG%2FyFJhhx6DY%2FODEu0vam6JdwPL%2B3D7Dtxa8puDG5fG8qm75QNu%2B%2FeElF3Wak%2BiHALxUt78fRqdNO1Kg0CqkMcuoZgGcaab1EkJSp8e2iqqkmL2xdaMcHplDm0ZexrMNG4qREve95210lry7UcdgeMYK1hX4Jj&X-Amz-Signature=2d5c281c4fa3a5557e3b9b34c3dece70cfb8a845f30b32d5844e72b58b2bfd3b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
