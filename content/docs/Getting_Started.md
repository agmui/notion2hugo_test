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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC4NHL7F%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIHbVPhV6TBKYMVnUyFadf62kTMfJNnyXw3xbuZ3wSEa6AiBJizr7aCW8VipXOr%2FMjm0fuAAO0zlD7caaNRjKOu7SViqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWawEYEGNhd8Z7jDGKtwDO9LXhN0Iz1E47%2BBDjJURadT%2FXX9K%2FjCI%2F1saXyUyKqcYGKnRHasiih4HjTQ3%2B0c4%2BNCUbeQWNXcBeFfMqQTJR%2B3bj%2BPop1wLdaCvGtlpsI7hvncORykgG%2FWy31K9H77ih%2BplJLjXSjBSe45E2iL8Ijeaidt7cK5netZj1suvUku5MPB0PjYkkt3wuhdLQJEihvyLWJP6tanVZq5suWGWkLPUnx7FzgCu3usctyZTzIQMaxkLcvyMb3RArADJ1f8Do%2FI9vQcVnNM6SzBFaN9oRUFnxIBcq0%2B01W8avSdWzt%2FKw6dSxFRe9V3VKlmqDx3oyJT%2FdlR0m2LOzeqsYIl%2FsZsHx9geFTgjcoctLtL42gnaz26t%2FMjvFViebhN7K8p5wMYHYnXZUGfcaXjaPlw5Zt%2F3zxEEJlUpTMfbveqbUsyS%2Fgtb09iqXgo%2F2Tt0o1OcnNUdayScKNLeAjjKElpp9QwIq8csJ8eCLAdgwg8X31HYhrd8HngtRSJl5SEKRROcF9%2FIyhVXPFFwyhrAjwF%2BLkDWdO3AOe5pnLTjQSg72Q2IjRPgGdSI0t37AavvIDsnIpsBKgVPVwoS%2Fpz5FDyx0Ut92cAsM1nCM3eZrxRoX%2FmtPEEMvAixIcWb9t8wlNTJwAY6pgFK53ozngpGHv1t8Wa%2FCe5Hovya091%2FKCD6H4mSt6jj22iFwFXDWIvU6ajpU2r%2F2HMftyFoRxkXtWKaLs9n3tsfZASs7%2Bj%2BhagWbdAmA1DsmU%2BX3AAAIMWfR9JgNOx9ryTFi0tKgsphHOhXPgVoYO%2BfV7workr2z3XQOviC7i3k9HbBReY4U5qAPTfjxaNZD36NPkW4e97yXZZAG%2FB9lw%2BSUJ9V9BB5&X-Amz-Signature=2a238cc4df7462f9357923413fcaca920d3a44888332fb2a44b689eab5dd404f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC4NHL7F%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIHbVPhV6TBKYMVnUyFadf62kTMfJNnyXw3xbuZ3wSEa6AiBJizr7aCW8VipXOr%2FMjm0fuAAO0zlD7caaNRjKOu7SViqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWawEYEGNhd8Z7jDGKtwDO9LXhN0Iz1E47%2BBDjJURadT%2FXX9K%2FjCI%2F1saXyUyKqcYGKnRHasiih4HjTQ3%2B0c4%2BNCUbeQWNXcBeFfMqQTJR%2B3bj%2BPop1wLdaCvGtlpsI7hvncORykgG%2FWy31K9H77ih%2BplJLjXSjBSe45E2iL8Ijeaidt7cK5netZj1suvUku5MPB0PjYkkt3wuhdLQJEihvyLWJP6tanVZq5suWGWkLPUnx7FzgCu3usctyZTzIQMaxkLcvyMb3RArADJ1f8Do%2FI9vQcVnNM6SzBFaN9oRUFnxIBcq0%2B01W8avSdWzt%2FKw6dSxFRe9V3VKlmqDx3oyJT%2FdlR0m2LOzeqsYIl%2FsZsHx9geFTgjcoctLtL42gnaz26t%2FMjvFViebhN7K8p5wMYHYnXZUGfcaXjaPlw5Zt%2F3zxEEJlUpTMfbveqbUsyS%2Fgtb09iqXgo%2F2Tt0o1OcnNUdayScKNLeAjjKElpp9QwIq8csJ8eCLAdgwg8X31HYhrd8HngtRSJl5SEKRROcF9%2FIyhVXPFFwyhrAjwF%2BLkDWdO3AOe5pnLTjQSg72Q2IjRPgGdSI0t37AavvIDsnIpsBKgVPVwoS%2Fpz5FDyx0Ut92cAsM1nCM3eZrxRoX%2FmtPEEMvAixIcWb9t8wlNTJwAY6pgFK53ozngpGHv1t8Wa%2FCe5Hovya091%2FKCD6H4mSt6jj22iFwFXDWIvU6ajpU2r%2F2HMftyFoRxkXtWKaLs9n3tsfZASs7%2Bj%2BhagWbdAmA1DsmU%2BX3AAAIMWfR9JgNOx9ryTFi0tKgsphHOhXPgVoYO%2BfV7workr2z3XQOviC7i3k9HbBReY4U5qAPTfjxaNZD36NPkW4e97yXZZAG%2FB9lw%2BSUJ9V9BB5&X-Amz-Signature=cc4d690bc6b60880f766d7fe75df60eb1c92d578dd44dd37c0ed36f9e71233ee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC4NHL7F%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIHbVPhV6TBKYMVnUyFadf62kTMfJNnyXw3xbuZ3wSEa6AiBJizr7aCW8VipXOr%2FMjm0fuAAO0zlD7caaNRjKOu7SViqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWawEYEGNhd8Z7jDGKtwDO9LXhN0Iz1E47%2BBDjJURadT%2FXX9K%2FjCI%2F1saXyUyKqcYGKnRHasiih4HjTQ3%2B0c4%2BNCUbeQWNXcBeFfMqQTJR%2B3bj%2BPop1wLdaCvGtlpsI7hvncORykgG%2FWy31K9H77ih%2BplJLjXSjBSe45E2iL8Ijeaidt7cK5netZj1suvUku5MPB0PjYkkt3wuhdLQJEihvyLWJP6tanVZq5suWGWkLPUnx7FzgCu3usctyZTzIQMaxkLcvyMb3RArADJ1f8Do%2FI9vQcVnNM6SzBFaN9oRUFnxIBcq0%2B01W8avSdWzt%2FKw6dSxFRe9V3VKlmqDx3oyJT%2FdlR0m2LOzeqsYIl%2FsZsHx9geFTgjcoctLtL42gnaz26t%2FMjvFViebhN7K8p5wMYHYnXZUGfcaXjaPlw5Zt%2F3zxEEJlUpTMfbveqbUsyS%2Fgtb09iqXgo%2F2Tt0o1OcnNUdayScKNLeAjjKElpp9QwIq8csJ8eCLAdgwg8X31HYhrd8HngtRSJl5SEKRROcF9%2FIyhVXPFFwyhrAjwF%2BLkDWdO3AOe5pnLTjQSg72Q2IjRPgGdSI0t37AavvIDsnIpsBKgVPVwoS%2Fpz5FDyx0Ut92cAsM1nCM3eZrxRoX%2FmtPEEMvAixIcWb9t8wlNTJwAY6pgFK53ozngpGHv1t8Wa%2FCe5Hovya091%2FKCD6H4mSt6jj22iFwFXDWIvU6ajpU2r%2F2HMftyFoRxkXtWKaLs9n3tsfZASs7%2Bj%2BhagWbdAmA1DsmU%2BX3AAAIMWfR9JgNOx9ryTFi0tKgsphHOhXPgVoYO%2BfV7workr2z3XQOviC7i3k9HbBReY4U5qAPTfjxaNZD36NPkW4e97yXZZAG%2FB9lw%2BSUJ9V9BB5&X-Amz-Signature=1b67fc92213378625520a08685a483237a43161bd39b7ef2136a460573442882&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3RVESRS%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIFNjEGdHDkxHyR9zHyiATRxqHjZeTPPyOIq4t4rbylqzAiEA%2Fgir36Dyy2MGwaXl9a%2Fi02bGIzy55LSXS4%2BUs6PI60wqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBckmxnh2bGvgyXiTircA5NThIwuXzMPKihJoQK%2BiObYFFIXCUtRI6mC5nKsSPnVCYiOqQtZYOH0Zq2BFYDF3Vi%2Bj%2BRo4LrAIB72NNuMz4LxlL4A2MDWAXVyzo1bNt3yD%2BgA%2FjImyzXNOLOvX%2FzNQ%2FDjtxWVdrSi%2BTf2uQPfYu2Z8YqhuhU1YGMGMdoX3yLpyTinIJhk06IFrZOgAQJc4ktsssoOlppwYAcluz6GONUJRUgWkz4NjGUiYpUYxoRGOaCwuxrY1CTenzSVDdzsGB8Vs%2FpvkeDwniFoLnirosIura1gemaYp45b8hoD9%2FrX7fpAPfEkbg54FaDeDka1sCto9K1Yr0OmcD1tLL9a9ruQXmXhkQhkIvM7B6aojwR46HhNfXcrV0cDC04%2Br4p%2B0uUIYZjUqJrPU9qZ2HOkszFxVCAozi6FBLtDlTsGFfmAw3g23kSGQLDRC5Gi%2FSliVpB8MY2bjuwCBSNn9D8Oz7n8KWzYdIkbW%2F0qhND%2FKDgPAtkQ6PqF7gjAYlcpZC8E85BaGSIrFgKedr7qmhyRD%2BaQB3GG3jJtJAAqX4hlnKTUCmgeadXfZNecEAOH0idsOnIKswVqCwDNa11h6Vb9JZEsyzuUUNDmHMcRteCj%2FIAL1qzckFDi8rr2%2BL%2F5MKzTycAGOqUBTkS9YKJfEVkIzqz8hK%2BE2XpiK1OWF%2F5iO4lnxZ0VJ2yWdcUzaiK9jdImALKgnR2b%2BANyIqDxtKuKz6eosEjvej3Pl9xcAdaGHIJeeZa5Dx%2FSdiJNX00h9zPwYnKc%2BCimpaBtq5GxeehClOdrDTZGBEXf7IMAB4vT2SbfQxIYvQXNNZmZiZ2qM%2FgiW7OEifVRR3msoY5pzc5yq49jViT4Syfqpgz9&X-Amz-Signature=5f340adc4467f4a7de2d2ee062c84c3a45f8747afbd837e15a5be90ad10611f1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSL3ZY6I%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIGXCrHcTtSpxGOjxRiaWYq2T9k2VZTKI7heIuXrNGXJ6AiEA3%2Fz2HQ0h8l1GTPE%2FxoZnDSHpQySMXow%2FPQMSeNU52vcqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4iskFqMHAeLIsgJyrcAz05Hp%2FTlypAvrCX8rUg%2FksJPaw7TDvfl3db8G5pOSudfRVyvBB5uDc4UTVNa%2Fo9mEJWVFi6W5kE6KEWYi7lJ3Cc8E%2B0UpHvAskFEWcRXfLNCSsDIfncaa3ugd1LA%2BfHMdiWjvrDMmRa0%2FJc%2BaQSjnEFnO5eRe9FdlZGtV%2BhMk60vrUJis6J42lf3Y5lVdPNldF77qoBNBB3fNdQ7f%2FZtediRWY7bS%2BkA%2B8oROt01D5ZHK%2BJsKdUIC82dRhcUa8UHjklIgY%2FhjBAss%2FrRbkZOQ22eOpf%2FbmdWrIYU6lpkIKLi%2B3rBtBhGvyT6oNEVhAhCQoiqILy0YBG7l3x7V9BsBYPFHjIa8k9yYy6CexF5mKGeiGv70owkJI8I%2FhcYr2gieWiWemhdvAIFey99qASkdsSaXlS0CNITQMW9YkYkVism5xe%2FbIlYsfqoBDD244I61EkG6KrlbpNRMP4n7XySh3rvPFeKn5hq%2Fhyvl12ICXnIDtEm5CbOMfc%2FlgytKERkyb92NJdkiz2r6boDdVt581sPE2MGjU0YWr7cVj9cBiqzlEXrmCP05B%2BjxLzdwM6uMQnjWyr4Q72euX7%2BIyUb54B5H%2FXLa7qO9gRQtu%2FKwgQvSumwR7w2QuED8m5MLXTycAGOqUBhr1g0g9hBkj1Kg2joCWbhu7WmAYFlR857d0xqpQVB6HpSAmqfFJ51HQpWpU0R1wESw%2BCyjWL6K3%2FyOcCV2Ue%2FTRsl6TQrPO%2B%2Fr6A0eITUMuLxVRM2P6Xf3w0REAPs%2Fc4werK%2FbTJ%2B4LUcImCOK5BeZLlDZbT6akOVkwRuGfjNEDXS%2FhDaCmIzdpH6f2yaydBzyeCCyLAinAli2sf7kY08FrXSF2g&X-Amz-Signature=c613f0369f9249d59fc3667c5e0f28e4d6e1bafecf9e2070284c31fc99125856&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC4NHL7F%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIHbVPhV6TBKYMVnUyFadf62kTMfJNnyXw3xbuZ3wSEa6AiBJizr7aCW8VipXOr%2FMjm0fuAAO0zlD7caaNRjKOu7SViqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWawEYEGNhd8Z7jDGKtwDO9LXhN0Iz1E47%2BBDjJURadT%2FXX9K%2FjCI%2F1saXyUyKqcYGKnRHasiih4HjTQ3%2B0c4%2BNCUbeQWNXcBeFfMqQTJR%2B3bj%2BPop1wLdaCvGtlpsI7hvncORykgG%2FWy31K9H77ih%2BplJLjXSjBSe45E2iL8Ijeaidt7cK5netZj1suvUku5MPB0PjYkkt3wuhdLQJEihvyLWJP6tanVZq5suWGWkLPUnx7FzgCu3usctyZTzIQMaxkLcvyMb3RArADJ1f8Do%2FI9vQcVnNM6SzBFaN9oRUFnxIBcq0%2B01W8avSdWzt%2FKw6dSxFRe9V3VKlmqDx3oyJT%2FdlR0m2LOzeqsYIl%2FsZsHx9geFTgjcoctLtL42gnaz26t%2FMjvFViebhN7K8p5wMYHYnXZUGfcaXjaPlw5Zt%2F3zxEEJlUpTMfbveqbUsyS%2Fgtb09iqXgo%2F2Tt0o1OcnNUdayScKNLeAjjKElpp9QwIq8csJ8eCLAdgwg8X31HYhrd8HngtRSJl5SEKRROcF9%2FIyhVXPFFwyhrAjwF%2BLkDWdO3AOe5pnLTjQSg72Q2IjRPgGdSI0t37AavvIDsnIpsBKgVPVwoS%2Fpz5FDyx0Ut92cAsM1nCM3eZrxRoX%2FmtPEEMvAixIcWb9t8wlNTJwAY6pgFK53ozngpGHv1t8Wa%2FCe5Hovya091%2FKCD6H4mSt6jj22iFwFXDWIvU6ajpU2r%2F2HMftyFoRxkXtWKaLs9n3tsfZASs7%2Bj%2BhagWbdAmA1DsmU%2BX3AAAIMWfR9JgNOx9ryTFi0tKgsphHOhXPgVoYO%2BfV7workr2z3XQOviC7i3k9HbBReY4U5qAPTfjxaNZD36NPkW4e97yXZZAG%2FB9lw%2BSUJ9V9BB5&X-Amz-Signature=995d096b7761c576dc3d22d1d90353256ac269556ed84ca0c47ff8ffec9a2cab&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
