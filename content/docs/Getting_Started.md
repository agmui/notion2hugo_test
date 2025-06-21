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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LB36BFY%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmdZ2ODLAsXRVBy1SwNqZAtGX5Or%2BHaJLV2cfNfVwYSAIhAKzGwGvYTfjvH1sFjGP0hK%2FadVRJHq3P4adjwg%2FfSyc0KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWd4e8JRZYadWcm2gq3ANMKsKuxUwwSfvXM6SwBQsdGZS7H3Y5UZG6qLNuQiW0zNrGvAsa19l9xlqthUnve%2F30yK1%2Bn178s0Cfdu%2FjJx9IeajasNOD7rtAVPz5w%2Fv6afcu%2FrC%2Fn%2BBjc7Lu8WlrGm%2FsLpluiLnU6NH0REGQAHeLhL3NBQdKVh5yFpzFVwdtXqjluiHP8wONWLA7aZ5wkf%2B%2B6je5VJHz83f4SWCmRBAWU%2Bu3hA0URB%2BMvUphnInj6BPZXlKDbU7Zb8gOm8vYQPmWos7POzAvSX1Y8TH%2BybdVZqFqbzuMkSrVsWFnlMP0KNoJKCMg6kfA3GJ4pxsITM%2Bnp8BKZNmBc%2BFsfE57xP5kOz59nodZOACR83JpJVaktctHbQd5UN3Mcup6NVHup1lc9CbmikU7Q7IZpDXYNALsb1bvDWZxs2KXKsc%2BWtl4qHSnGyhoBmwANU%2Fa0MM0xztvNU5l148YOX6Oa8kRnfwiADV7KHomscK5h4n6aoDg1wt7gk2%2Fz9mfCpf3k41flP8fx2XFrH5%2BoJ5347GxXsCjpISLM12KvxH%2FMzsGqI4OlmgDuOz1ICub4vD4alAn86qjTa4HWA9ThcrxN1jIwHW24SZ7m04vsH2AUDUIzv9DwPMQr72QurnkN%2BsfujDx0dnCBjqkAYkVLznIuTXAeAxbZRPTyyH8KDcYIRCmEGcqgA4%2BjNkAOhfTnOj1mD3S7c0z4GUG1ABBmPTWe%2F0DVmcS7lvDnYm75%2F9XXfJemmSeiqGGXd17l2df15dx%2FHiWjo79d0Z7L7ygQMof7vDlt0kJCGJ%2F7ORrov06c6LqmO%2FtDllBkcuJq4gBqvnQxeS7wBh%2F9d5Y4kH3eKypruuFuvyWRsTE%2FgqQagg8&X-Amz-Signature=b18102557451f35fe6f2a2236bc013cfb44dbe39171d9331273c064f8034e5a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LB36BFY%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmdZ2ODLAsXRVBy1SwNqZAtGX5Or%2BHaJLV2cfNfVwYSAIhAKzGwGvYTfjvH1sFjGP0hK%2FadVRJHq3P4adjwg%2FfSyc0KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWd4e8JRZYadWcm2gq3ANMKsKuxUwwSfvXM6SwBQsdGZS7H3Y5UZG6qLNuQiW0zNrGvAsa19l9xlqthUnve%2F30yK1%2Bn178s0Cfdu%2FjJx9IeajasNOD7rtAVPz5w%2Fv6afcu%2FrC%2Fn%2BBjc7Lu8WlrGm%2FsLpluiLnU6NH0REGQAHeLhL3NBQdKVh5yFpzFVwdtXqjluiHP8wONWLA7aZ5wkf%2B%2B6je5VJHz83f4SWCmRBAWU%2Bu3hA0URB%2BMvUphnInj6BPZXlKDbU7Zb8gOm8vYQPmWos7POzAvSX1Y8TH%2BybdVZqFqbzuMkSrVsWFnlMP0KNoJKCMg6kfA3GJ4pxsITM%2Bnp8BKZNmBc%2BFsfE57xP5kOz59nodZOACR83JpJVaktctHbQd5UN3Mcup6NVHup1lc9CbmikU7Q7IZpDXYNALsb1bvDWZxs2KXKsc%2BWtl4qHSnGyhoBmwANU%2Fa0MM0xztvNU5l148YOX6Oa8kRnfwiADV7KHomscK5h4n6aoDg1wt7gk2%2Fz9mfCpf3k41flP8fx2XFrH5%2BoJ5347GxXsCjpISLM12KvxH%2FMzsGqI4OlmgDuOz1ICub4vD4alAn86qjTa4HWA9ThcrxN1jIwHW24SZ7m04vsH2AUDUIzv9DwPMQr72QurnkN%2BsfujDx0dnCBjqkAYkVLznIuTXAeAxbZRPTyyH8KDcYIRCmEGcqgA4%2BjNkAOhfTnOj1mD3S7c0z4GUG1ABBmPTWe%2F0DVmcS7lvDnYm75%2F9XXfJemmSeiqGGXd17l2df15dx%2FHiWjo79d0Z7L7ygQMof7vDlt0kJCGJ%2F7ORrov06c6LqmO%2FtDllBkcuJq4gBqvnQxeS7wBh%2F9d5Y4kH3eKypruuFuvyWRsTE%2FgqQagg8&X-Amz-Signature=86e83bf722499a8bcbe4755540c77a636d793ea91b15fa619a70b9fdace9cd23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LB36BFY%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmdZ2ODLAsXRVBy1SwNqZAtGX5Or%2BHaJLV2cfNfVwYSAIhAKzGwGvYTfjvH1sFjGP0hK%2FadVRJHq3P4adjwg%2FfSyc0KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWd4e8JRZYadWcm2gq3ANMKsKuxUwwSfvXM6SwBQsdGZS7H3Y5UZG6qLNuQiW0zNrGvAsa19l9xlqthUnve%2F30yK1%2Bn178s0Cfdu%2FjJx9IeajasNOD7rtAVPz5w%2Fv6afcu%2FrC%2Fn%2BBjc7Lu8WlrGm%2FsLpluiLnU6NH0REGQAHeLhL3NBQdKVh5yFpzFVwdtXqjluiHP8wONWLA7aZ5wkf%2B%2B6je5VJHz83f4SWCmRBAWU%2Bu3hA0URB%2BMvUphnInj6BPZXlKDbU7Zb8gOm8vYQPmWos7POzAvSX1Y8TH%2BybdVZqFqbzuMkSrVsWFnlMP0KNoJKCMg6kfA3GJ4pxsITM%2Bnp8BKZNmBc%2BFsfE57xP5kOz59nodZOACR83JpJVaktctHbQd5UN3Mcup6NVHup1lc9CbmikU7Q7IZpDXYNALsb1bvDWZxs2KXKsc%2BWtl4qHSnGyhoBmwANU%2Fa0MM0xztvNU5l148YOX6Oa8kRnfwiADV7KHomscK5h4n6aoDg1wt7gk2%2Fz9mfCpf3k41flP8fx2XFrH5%2BoJ5347GxXsCjpISLM12KvxH%2FMzsGqI4OlmgDuOz1ICub4vD4alAn86qjTa4HWA9ThcrxN1jIwHW24SZ7m04vsH2AUDUIzv9DwPMQr72QurnkN%2BsfujDx0dnCBjqkAYkVLznIuTXAeAxbZRPTyyH8KDcYIRCmEGcqgA4%2BjNkAOhfTnOj1mD3S7c0z4GUG1ABBmPTWe%2F0DVmcS7lvDnYm75%2F9XXfJemmSeiqGGXd17l2df15dx%2FHiWjo79d0Z7L7ygQMof7vDlt0kJCGJ%2F7ORrov06c6LqmO%2FtDllBkcuJq4gBqvnQxeS7wBh%2F9d5Y4kH3eKypruuFuvyWRsTE%2FgqQagg8&X-Amz-Signature=db2e1452c3e0a3407d912a4a7e5f0853750132d276f23e2083c7935f1f98f4b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GK655VY%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMIm4ocsnORKRupglABuA1hIE6Y%2BpQnXe1dqtiRKVa2AiBiCaPY%2F3IFIHhGvtw5T7nECQfvL0ZVfeunrVLj0brz2yqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZs6e0AF0pRdFPmFYKtwDgDhfGy9DQv3ZTouu91yjsAdZ7XP6WHf%2B17rCAH0twIb7k9waNTdJZCyr5NWtYg2Gauww8lT%2Fl0YpkzBYWBB9w%2Fv8MCE7BogjNiulwzqgriYdqXjsOu60T5wnsjZSQwLzcZFSmHn180nHVmONPPZZWjBxuuXxc4kfTrTyA2TzkjRz3vZSCEfE0n1vPFp1viEqqH1sFv9HHHSqZuJKdRm49BNpz%2B9le%2BKDEt8s6XGOpxuVYbrQJI1%2Fj5uyNFa4%2BMURwoRSL%2FCmGzi99kaiYx0Op5Iasc6fDzM%2Fdwma0AK9uLBo1ICM4VvvPIVgruhHT3anBCcP9bv5JdiasGa0PSyP1OpQo3uK0IhNAtUTiUPx31TsjahkA%2FjVXKTqTXF63MEplfsU0RaZXx%2BW5jBcsLvg9uTG8tCqs%2BpIoy1BFRC9h8%2FdKVXbHTARcrbGkSRwYLLVmBHBSz%2FSCxHpU6WUDetq6PuSd46sLMGa%2FxyKubqFFZs7ArsISOfF0SDQNn2etnS4zE0dXDsC166tapG5pj3wQZIlY0YRl493WV3JGQHvGnKoBSc1Ov%2FT4zFwyH8UsvbFIRBEJbDETAlnmYe3lRwzaK5FVaHm9zxALJ0GtknTmCd8CH%2B7O4OuRwuhmIAw2NXZwgY6pgHkEO8rEfBX0271T0jgk0A59DXhtUac5iegevU8jJ0qxpR9JBM%2F6jzmOW5A1UPEbWs1P%2F%2BI%2B3Zlq%2BXLjHluttN8eVb7mnSXvRazDI03q5lkWsDrhVqYtPqc9sYYq%2FTg1lfzi%2FgNyymd9rA4Up2DTaUAZ8BhcKHCa4TpYlulVOVM6eEQ5URhx7FdlPqKjYqFvo5wuBt0qQTH4xhWyJm%2BPsLrh3%2Fbayby&X-Amz-Signature=d92b2aa34157245a9679a59832dbe247a5c48cade24d0a10661159e906b91f8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QO7WE5Q%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPgBX40L5epa3UccMS8s3cWbdlwJu6bTJLlaRyiUeT5gIhALGW6IkRupp%2BTHlNSf51lGI0B%2FTmCMDLz9us1X0JlwUwKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY%2FFH24SNrxaw0eDEq3ANTU4UOlm8XjBW8TtgdcK8OTatJpdTgBYiWDT4alX2bYH6Rf9z1t%2F9W3Os8s7jqGYBlgbHb3o9CD9xVgDCEhSxDC%2F1CvXjIYCqE084XVdK2NhxCQlx%2Bcuf30Cv0Ec5huB53t96yAvaq0o0NnGzLoW0%2B4Hrib8otj47womRe5m2c%2BCOfnDlI8kCXoMJ428M6bKjTMMVSq%2BJLesmxgUJXXwc49uT8DAlQ40t9KY7xhmfKiYkJ2ZV99dDIeF5Gv37KboYa7W9iWEulOkeDKTu4hnWSZ%2FExjPHtUHuP8RHWJ2PFULAPPmVP3%2Bdk8Q93v8tihGHxsILzTgGTWjFRcgtZndGYCdZke5Jlmy5onchIxoWeT0vwepVa57kpVumtMUbJy4iYX65hQU38IoamUOkDRG7uAe3P4%2BdxRsvkTdhhP2sjCY9wVJ42vKw17LQwnrSdEe9L4UHdiGqvaVwgytrp5sDpbo7ss4qHCYg1%2BBx%2Bo96LSCxbzeV9jiDkSlcz4OjJwMlY3ckj3F3%2Foe5BYE%2FnQ%2FFRvN9nIb8SqZI%2BrtQ1S9lUmoGkGdwnabGytQsKErPl8iIlRXowLI5lmk4nBjdAHpj9WuNyRGOGs6P2R4iyG2qEPxOl4WjcTC%2F7sVNXQjDjytnCBjqkAbUQOXZ8KSdBLIwvtllWRWQeb5tJCErIBysJseukg660t1589AuXEiypd6zThealFD2bW70lycugXyWNYhphOL65zOz6jZqwPhYm4lAtJoA0wYq4s6yFS%2FeWLkdod%2FjmzHLqjuq2%2FJNR5q7jlzwOgfvrgoWbtNAWOkzDGFwDgWiS7zr7%2BPNV%2BuwfBa5NKCMmo9oQniB%2Ff%2FWWnc5nLYM9s5z8%2FdXR&X-Amz-Signature=619076185c6f81a842b9ec6452acebdcdf48c4f232db8043c8a78ca3f3119ae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LB36BFY%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmdZ2ODLAsXRVBy1SwNqZAtGX5Or%2BHaJLV2cfNfVwYSAIhAKzGwGvYTfjvH1sFjGP0hK%2FadVRJHq3P4adjwg%2FfSyc0KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWd4e8JRZYadWcm2gq3ANMKsKuxUwwSfvXM6SwBQsdGZS7H3Y5UZG6qLNuQiW0zNrGvAsa19l9xlqthUnve%2F30yK1%2Bn178s0Cfdu%2FjJx9IeajasNOD7rtAVPz5w%2Fv6afcu%2FrC%2Fn%2BBjc7Lu8WlrGm%2FsLpluiLnU6NH0REGQAHeLhL3NBQdKVh5yFpzFVwdtXqjluiHP8wONWLA7aZ5wkf%2B%2B6je5VJHz83f4SWCmRBAWU%2Bu3hA0URB%2BMvUphnInj6BPZXlKDbU7Zb8gOm8vYQPmWos7POzAvSX1Y8TH%2BybdVZqFqbzuMkSrVsWFnlMP0KNoJKCMg6kfA3GJ4pxsITM%2Bnp8BKZNmBc%2BFsfE57xP5kOz59nodZOACR83JpJVaktctHbQd5UN3Mcup6NVHup1lc9CbmikU7Q7IZpDXYNALsb1bvDWZxs2KXKsc%2BWtl4qHSnGyhoBmwANU%2Fa0MM0xztvNU5l148YOX6Oa8kRnfwiADV7KHomscK5h4n6aoDg1wt7gk2%2Fz9mfCpf3k41flP8fx2XFrH5%2BoJ5347GxXsCjpISLM12KvxH%2FMzsGqI4OlmgDuOz1ICub4vD4alAn86qjTa4HWA9ThcrxN1jIwHW24SZ7m04vsH2AUDUIzv9DwPMQr72QurnkN%2BsfujDx0dnCBjqkAYkVLznIuTXAeAxbZRPTyyH8KDcYIRCmEGcqgA4%2BjNkAOhfTnOj1mD3S7c0z4GUG1ABBmPTWe%2F0DVmcS7lvDnYm75%2F9XXfJemmSeiqGGXd17l2df15dx%2FHiWjo79d0Z7L7ygQMof7vDlt0kJCGJ%2F7ORrov06c6LqmO%2FtDllBkcuJq4gBqvnQxeS7wBh%2F9d5Y4kH3eKypruuFuvyWRsTE%2FgqQagg8&X-Amz-Signature=82fa495009339177e4e0e48ea26299cc61a6c247bea1dfbd15b28378568fc4db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
