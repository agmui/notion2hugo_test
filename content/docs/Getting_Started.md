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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPA6DGKE%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjjPVe%2BExmFyUHgX%2FPenjfk5Me6GTrNFwy68RqohoBzAiEAzfmLK1lzDqeLk78ldlm3W7C65Nc%2FnyBX5BH0iPGBYNkqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfPPnWBBjlmbbPzrircA1t1XFml0JtOJqnPRAa7MKgKRjJwAOLvLOP3kRkKgpYOwGfFg3%2FTrN%2FFSKJcUQDPu37B0LQ0W9AwadNHiGWnYiEOb%2FzNCmhdUd4quceBEamm40bbu0dm%2BlREMdNO9IE4mJYqC2rynqAtvXsFBS7Yvtqb7P%2Fw6kpssfOijYW5pJ545vYVRM9S3nLbj4f2lSdQVNifVjOC2JJBs4bjUGtTaJzkYxxd3XxSjFbELnczKPw9%2FhvZUvC%2FogHgT%2BH%2B5XUt9u0sm5FZUx58VJOTXOqr4nkm0Dsyy2oy1APzwIH%2B80SRM%2Ba43DZpoG9LhVSyWs0RO%2BBgOkE2JlJRQWyJpdXelY0RJgU%2BcLlmImUM8AxtdIaxh4WgRk9OkgjI3tcQrHIcoHRJD1ZvJFQTFUH7PjrqeKrkDHFWka2DuwtodNShVV%2FTOqJEm8J6PPQ8DrDJ%2FxeRpg8qE0by5uQvw%2Fr%2FMdVZYH8ykBiN4JYul1AYzfIDtO1xBRw%2BeFiwHf9epf2fAf7Zc8DaBigHndSrebFUJvBik1mPQTrKayNZ5dPZ5xI1zbSa2ZRoddJowLL6z9pO78iPkyxmquGsjQVq1zyRnMdFJduoUT6c6dhGI0T0sGiMMxk2NXexv8NeHMc4t7iRMMq1xsMGOqUBHbtnEu0H7DuPyCS8yHo43Ot9KKbHkncsFP3STFYPuZnOCLHLzUxvNhbx24mlRDBU7NcnXN9sJlqiPK8T2QCYhoZk1GfkbKiPzBCV6nUWvvgDS52YAtPE0y%2BXRQmUExY%2FpIFLbLqvI9Px9niUantydMo8Oi%2FA4%2Fc0RYLVOkywzJieRhz31P0nyx47jkUZTJKI%2FAs%2BRwNj%2FmPfttgV7kOivJwgtDoj&X-Amz-Signature=102e163c608d4483931ede709190b484233cd0eb601238d094f25421503c3a8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPA6DGKE%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjjPVe%2BExmFyUHgX%2FPenjfk5Me6GTrNFwy68RqohoBzAiEAzfmLK1lzDqeLk78ldlm3W7C65Nc%2FnyBX5BH0iPGBYNkqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfPPnWBBjlmbbPzrircA1t1XFml0JtOJqnPRAa7MKgKRjJwAOLvLOP3kRkKgpYOwGfFg3%2FTrN%2FFSKJcUQDPu37B0LQ0W9AwadNHiGWnYiEOb%2FzNCmhdUd4quceBEamm40bbu0dm%2BlREMdNO9IE4mJYqC2rynqAtvXsFBS7Yvtqb7P%2Fw6kpssfOijYW5pJ545vYVRM9S3nLbj4f2lSdQVNifVjOC2JJBs4bjUGtTaJzkYxxd3XxSjFbELnczKPw9%2FhvZUvC%2FogHgT%2BH%2B5XUt9u0sm5FZUx58VJOTXOqr4nkm0Dsyy2oy1APzwIH%2B80SRM%2Ba43DZpoG9LhVSyWs0RO%2BBgOkE2JlJRQWyJpdXelY0RJgU%2BcLlmImUM8AxtdIaxh4WgRk9OkgjI3tcQrHIcoHRJD1ZvJFQTFUH7PjrqeKrkDHFWka2DuwtodNShVV%2FTOqJEm8J6PPQ8DrDJ%2FxeRpg8qE0by5uQvw%2Fr%2FMdVZYH8ykBiN4JYul1AYzfIDtO1xBRw%2BeFiwHf9epf2fAf7Zc8DaBigHndSrebFUJvBik1mPQTrKayNZ5dPZ5xI1zbSa2ZRoddJowLL6z9pO78iPkyxmquGsjQVq1zyRnMdFJduoUT6c6dhGI0T0sGiMMxk2NXexv8NeHMc4t7iRMMq1xsMGOqUBHbtnEu0H7DuPyCS8yHo43Ot9KKbHkncsFP3STFYPuZnOCLHLzUxvNhbx24mlRDBU7NcnXN9sJlqiPK8T2QCYhoZk1GfkbKiPzBCV6nUWvvgDS52YAtPE0y%2BXRQmUExY%2FpIFLbLqvI9Px9niUantydMo8Oi%2FA4%2Fc0RYLVOkywzJieRhz31P0nyx47jkUZTJKI%2FAs%2BRwNj%2FmPfttgV7kOivJwgtDoj&X-Amz-Signature=c9a4c21e3c2ada26d2c8aeee74e091e30f96eb2b4dcd5d47c2b7fcae8e80eeee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPA6DGKE%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjjPVe%2BExmFyUHgX%2FPenjfk5Me6GTrNFwy68RqohoBzAiEAzfmLK1lzDqeLk78ldlm3W7C65Nc%2FnyBX5BH0iPGBYNkqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfPPnWBBjlmbbPzrircA1t1XFml0JtOJqnPRAa7MKgKRjJwAOLvLOP3kRkKgpYOwGfFg3%2FTrN%2FFSKJcUQDPu37B0LQ0W9AwadNHiGWnYiEOb%2FzNCmhdUd4quceBEamm40bbu0dm%2BlREMdNO9IE4mJYqC2rynqAtvXsFBS7Yvtqb7P%2Fw6kpssfOijYW5pJ545vYVRM9S3nLbj4f2lSdQVNifVjOC2JJBs4bjUGtTaJzkYxxd3XxSjFbELnczKPw9%2FhvZUvC%2FogHgT%2BH%2B5XUt9u0sm5FZUx58VJOTXOqr4nkm0Dsyy2oy1APzwIH%2B80SRM%2Ba43DZpoG9LhVSyWs0RO%2BBgOkE2JlJRQWyJpdXelY0RJgU%2BcLlmImUM8AxtdIaxh4WgRk9OkgjI3tcQrHIcoHRJD1ZvJFQTFUH7PjrqeKrkDHFWka2DuwtodNShVV%2FTOqJEm8J6PPQ8DrDJ%2FxeRpg8qE0by5uQvw%2Fr%2FMdVZYH8ykBiN4JYul1AYzfIDtO1xBRw%2BeFiwHf9epf2fAf7Zc8DaBigHndSrebFUJvBik1mPQTrKayNZ5dPZ5xI1zbSa2ZRoddJowLL6z9pO78iPkyxmquGsjQVq1zyRnMdFJduoUT6c6dhGI0T0sGiMMxk2NXexv8NeHMc4t7iRMMq1xsMGOqUBHbtnEu0H7DuPyCS8yHo43Ot9KKbHkncsFP3STFYPuZnOCLHLzUxvNhbx24mlRDBU7NcnXN9sJlqiPK8T2QCYhoZk1GfkbKiPzBCV6nUWvvgDS52YAtPE0y%2BXRQmUExY%2FpIFLbLqvI9Px9niUantydMo8Oi%2FA4%2Fc0RYLVOkywzJieRhz31P0nyx47jkUZTJKI%2FAs%2BRwNj%2FmPfttgV7kOivJwgtDoj&X-Amz-Signature=66c3c2bf60073f130420b6c8b10685ddf8c101a0940ff2b4d8fd693c9b1cd695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BOZJHZN%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC56bxUmoa2XZ8a8M77wA0T4w9VXi9HFsFr84rwcxithQIgVGCVdrcMJl1iZrCpqlujukBPxPt2zDZzCypuUToj1%2BcqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa0Gu6ADG47RObyHyrcA9y0SGZ0GuBXcyIDb5i8rs4wpzAlyyfiNjzMKKwz7djYPCWdneUKPcs4Pmi15xbaeMsgF4q6R1NjVTAbyIZig%2FoPrwbL1PLR7ob%2F5C19yzKQb%2F3h2Fo7IeqmT2xpfYOJUJDnFqQpPOkyjPq2xDmUygyicv1cYaMMQDe0S5l8nGuEhIsUQpel63XN1LEdb2Q6VUxIvbanhNYIYmn5v%2FzOFdLBe0jflChBVIYiyW5CfSYnGMCNKrdL7Juy0m5WAmhB6rkuFc7PSTUpdchM1r4%2Bw6FRNUjwfiN2L9PrnEgbuwX9sKQcpnM7tylZaPcl3XsQtw6Rdkozekg6cP0l5QI3%2FyuDqbl2TWDU2cEi1qsfiMu7%2FovAjLdfXo7fewPsaF1KpUmHGAUSXOL%2B8KPW6ExNtL9GNy3wVNf1H2jXuoUPgApLRR3xrTkh79%2BXX8GmnyOV5%2BEEBJFxkJb7E2g%2B5c10G2ykyV5kejKWyLkP7HF9si01LGoXPQ6aEzwnbQcDChw0h8TDapWXhzRARkSmznZYC3dJl8nM%2FGGLWuFdSbm7ZUs1GhrkUd8DKAg6uH5XBAPUAGyG%2F9LfLi9qoFj4VXKgI8EuHy9fGAabEajAp7MvfH6pzEIcHD%2F0c02Sz89dMP60xsMGOqUBWppILBzgwR%2BtgblUASmM1nampRkg2FTFK0TlDna0rObxR7e2cLOI0sCRySWOY3kUIP31a%2Fl6XcYYQrkV4Xk91GSg8f5Uqad9WZkypAj%2BXKlL3ccYFxEgKnCiFXuf6NzTIzrRVqOR08un%2F53RXISXy%2BQgZ%2FEYe2Gn%2FNbg%2BsBWhc9QXCACeIO9%2BdRRPHUrOYRcpk1688XAkHpHYGghmNk6PNVXYvQl&X-Amz-Signature=67286ba65f9e3f6f4e2640b4445a02b9c427945c342d3691b4f07901052c1312&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSCHUR5%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD45KdtrvEidiRzoEIZqvEvwt7YMhcuQfZ10BYIrIezDgIhAMkcRzoEEfui6b5%2BW4Ll9Hxi0g3aczmNHW1U45A0jvr4KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdgIaXqZ3eBAgLDiwq3ANqJU2awnJlCA3obi2SvpBZohET9IjNDE2zIJOF1BHdrbII7mNZInvdUM4F0pGaagvrxTn7ZLHfkWMUjXjCm3Avm2lFKggyuacYQINx8Jodh3i6aFW4concAJAwET%2Fb%2FRva%2FO06pNn%2F1jsJsrjp7TEqRtpjBoHcbxCbBl9TscA4gRRp1FG13WvOX5jlTb5eiQF3x015v0rCkmvbSDE54UjVWSG1uLdw96oZ3sY2oyQ2XFttogo1SuvpEK5u8q%2BmW15Vqf4xDEk5gbQA%2Bh6Qsv5bRcUFNpzsDEj0wJjsTWsMOi6gYOPJD7ApjZXEbZ5EPERHUn3QBHuvWnmpcBxWPudr%2BNM4%2FgFiLc3UXI1oiwOZMfovP2cAqqH0q7CJbW%2FIsZJaMAVrRAMMoexDZ1Neh2eRPRnWL7G%2BLqevOIEKUAICIoWVQsKPJEetnJnx%2FuJRox6Pau%2BddGNn41v5gnzwnEXKpW1iRdFj4N5tKf0FFNMQ635grjy5B6zXrcCyWEjC7EnyoGViyjXBi%2B1srSh4eIgwW4d82qqK2DXu75JdVjxfwtNSRp%2FAh7RY9xNgc3peo3Ntbs88Watu%2FGFrF0oilbXF2xnBHLbZ9PbLnDdmMMcpK54XUZBsESMiuOT4tjCztcbDBjqkAZXy4NDcl83bzCyU462n3cyXJZtTV5hpneJBXgAhkeVEzNpWIpieICLJnH1c3vcgNo2%2BFYRZ1GisS3jHClr%2BPe6DOb07xkb5l8KMtujJbZULRNCCk%2FmVFgoNOP1B6vIbohir9HWyk5SIvW55Hsmguj6FrKLfGBne7lTd7Yo%2FkrKqAPG%2BcjKKXalb2bfIY7MXcXTdHjMmaBFxaohfWZilpBVoMC%2Be&X-Amz-Signature=f6f5d4b9fe3f924ee5e9f49258ec7472f1b0005de6ac2ec9c8c9223ca182230f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPA6DGKE%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjjPVe%2BExmFyUHgX%2FPenjfk5Me6GTrNFwy68RqohoBzAiEAzfmLK1lzDqeLk78ldlm3W7C65Nc%2FnyBX5BH0iPGBYNkqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfPPnWBBjlmbbPzrircA1t1XFml0JtOJqnPRAa7MKgKRjJwAOLvLOP3kRkKgpYOwGfFg3%2FTrN%2FFSKJcUQDPu37B0LQ0W9AwadNHiGWnYiEOb%2FzNCmhdUd4quceBEamm40bbu0dm%2BlREMdNO9IE4mJYqC2rynqAtvXsFBS7Yvtqb7P%2Fw6kpssfOijYW5pJ545vYVRM9S3nLbj4f2lSdQVNifVjOC2JJBs4bjUGtTaJzkYxxd3XxSjFbELnczKPw9%2FhvZUvC%2FogHgT%2BH%2B5XUt9u0sm5FZUx58VJOTXOqr4nkm0Dsyy2oy1APzwIH%2B80SRM%2Ba43DZpoG9LhVSyWs0RO%2BBgOkE2JlJRQWyJpdXelY0RJgU%2BcLlmImUM8AxtdIaxh4WgRk9OkgjI3tcQrHIcoHRJD1ZvJFQTFUH7PjrqeKrkDHFWka2DuwtodNShVV%2FTOqJEm8J6PPQ8DrDJ%2FxeRpg8qE0by5uQvw%2Fr%2FMdVZYH8ykBiN4JYul1AYzfIDtO1xBRw%2BeFiwHf9epf2fAf7Zc8DaBigHndSrebFUJvBik1mPQTrKayNZ5dPZ5xI1zbSa2ZRoddJowLL6z9pO78iPkyxmquGsjQVq1zyRnMdFJduoUT6c6dhGI0T0sGiMMxk2NXexv8NeHMc4t7iRMMq1xsMGOqUBHbtnEu0H7DuPyCS8yHo43Ot9KKbHkncsFP3STFYPuZnOCLHLzUxvNhbx24mlRDBU7NcnXN9sJlqiPK8T2QCYhoZk1GfkbKiPzBCV6nUWvvgDS52YAtPE0y%2BXRQmUExY%2FpIFLbLqvI9Px9niUantydMo8Oi%2FA4%2Fc0RYLVOkywzJieRhz31P0nyx47jkUZTJKI%2FAs%2BRwNj%2FmPfttgV7kOivJwgtDoj&X-Amz-Signature=aa1c5d2bdeed237bab238ea5e4cccaca5cb1c9fb8a29ae3ede02d4775ad1e91c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
