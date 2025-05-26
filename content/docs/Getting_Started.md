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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRQ4JN4L%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIFQBoC4Z%2BydZX9SGtuVq9yyFIqxII6U3Ztwy7cxD4ga1AiA%2BLNncof0xyikOavCKb2Nxj5H67HA4oYTPgN5tASWOjCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMevJ6E5vjE9NyCadbKtwDhNKcoG39c3Nr978X1INqa%2FSJXxAq6Muusii1%2B6pImg1BZ0XxyS4PgWNEUXpC3fT0mXcP7ZQqJbhcPSosSHMQCnEaSrceMs2x9UPZ%2F63v5vo2eNjbfFQGIGfN7ozHZXuapbPCiq3vaSHFuVTcn5NN0hCdnSd2hr%2F51Z3AGb0Wp5ubVtafzrjEDm5Gmju9cV4Jck9K%2B%2BXROoeZT%2FQ3JLMowGkBKyAoejvRsuLbBzYV6TSmP3l9ISfV8E0ZmsI7Zrzb%2FkqbonKrQXPVlJclM%2BWcpHoDst71nARlAVw4wfXwkVG5pRSoGKO06ZeQtsQA0xeJ9qFIBQqI4LAwlRonyWpTdPJG2rQviBeoz%2BEJzZm0kqXiYqkGyUdi60ki4GEYznJA9JbFMp5ejVZqualXtZHvToYDxBNUq1RCRDOdOlt8PLNSV7Wk7ehbGX7LJOQNMtUAzoPtlyzFIgjKtfSMxLh6e2zKnhyPj4GaiWrb%2Bhfx27yMvo1FvelQV%2By0%2FMU%2Fw1uvKrEEgqhibJmXuqASNqS%2Be0zbOub4%2F%2BQUjp5IqRIPTSmENWQCZljm8T3zeqWtUhm8oAQTCxgKDBNH%2FPYA3L7ZdIlgeyhEIsIJ%2FPeFi34TTW7sfM3w9x6ElVzps4gwmo%2FQwQY6pgELaC9kj4XtHn87BPLhuPtfbDlXrwEDXgdPo4FeOOmK0s%2FupkWQf8%2Frb929RhjOrYIhd4qs0R3gJ0YMbJxnyWYK2d2xZltxTbhOPiJgyw2FkJi%2B89MbCElZLWUme5lF15mGTzX3YEK%2BbDNej1eHaKM8uFBCdJAh%2FB7lwvjTeZXJTWpyk3oViSXhcGUZrAal%2BeypwcPmKtF46xzd7Wo9sd%2FzAnXsDPPU&X-Amz-Signature=d771c523dd778b21c335a12df447a4ad4351fc11614acd2235254ec28a9dc0bc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRQ4JN4L%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIFQBoC4Z%2BydZX9SGtuVq9yyFIqxII6U3Ztwy7cxD4ga1AiA%2BLNncof0xyikOavCKb2Nxj5H67HA4oYTPgN5tASWOjCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMevJ6E5vjE9NyCadbKtwDhNKcoG39c3Nr978X1INqa%2FSJXxAq6Muusii1%2B6pImg1BZ0XxyS4PgWNEUXpC3fT0mXcP7ZQqJbhcPSosSHMQCnEaSrceMs2x9UPZ%2F63v5vo2eNjbfFQGIGfN7ozHZXuapbPCiq3vaSHFuVTcn5NN0hCdnSd2hr%2F51Z3AGb0Wp5ubVtafzrjEDm5Gmju9cV4Jck9K%2B%2BXROoeZT%2FQ3JLMowGkBKyAoejvRsuLbBzYV6TSmP3l9ISfV8E0ZmsI7Zrzb%2FkqbonKrQXPVlJclM%2BWcpHoDst71nARlAVw4wfXwkVG5pRSoGKO06ZeQtsQA0xeJ9qFIBQqI4LAwlRonyWpTdPJG2rQviBeoz%2BEJzZm0kqXiYqkGyUdi60ki4GEYznJA9JbFMp5ejVZqualXtZHvToYDxBNUq1RCRDOdOlt8PLNSV7Wk7ehbGX7LJOQNMtUAzoPtlyzFIgjKtfSMxLh6e2zKnhyPj4GaiWrb%2Bhfx27yMvo1FvelQV%2By0%2FMU%2Fw1uvKrEEgqhibJmXuqASNqS%2Be0zbOub4%2F%2BQUjp5IqRIPTSmENWQCZljm8T3zeqWtUhm8oAQTCxgKDBNH%2FPYA3L7ZdIlgeyhEIsIJ%2FPeFi34TTW7sfM3w9x6ElVzps4gwmo%2FQwQY6pgELaC9kj4XtHn87BPLhuPtfbDlXrwEDXgdPo4FeOOmK0s%2FupkWQf8%2Frb929RhjOrYIhd4qs0R3gJ0YMbJxnyWYK2d2xZltxTbhOPiJgyw2FkJi%2B89MbCElZLWUme5lF15mGTzX3YEK%2BbDNej1eHaKM8uFBCdJAh%2FB7lwvjTeZXJTWpyk3oViSXhcGUZrAal%2BeypwcPmKtF46xzd7Wo9sd%2FzAnXsDPPU&X-Amz-Signature=af6d39deaacfc499df095ec85b16c536ccbd6a364c98de2f277d5f83d7b8adf5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRQ4JN4L%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIFQBoC4Z%2BydZX9SGtuVq9yyFIqxII6U3Ztwy7cxD4ga1AiA%2BLNncof0xyikOavCKb2Nxj5H67HA4oYTPgN5tASWOjCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMevJ6E5vjE9NyCadbKtwDhNKcoG39c3Nr978X1INqa%2FSJXxAq6Muusii1%2B6pImg1BZ0XxyS4PgWNEUXpC3fT0mXcP7ZQqJbhcPSosSHMQCnEaSrceMs2x9UPZ%2F63v5vo2eNjbfFQGIGfN7ozHZXuapbPCiq3vaSHFuVTcn5NN0hCdnSd2hr%2F51Z3AGb0Wp5ubVtafzrjEDm5Gmju9cV4Jck9K%2B%2BXROoeZT%2FQ3JLMowGkBKyAoejvRsuLbBzYV6TSmP3l9ISfV8E0ZmsI7Zrzb%2FkqbonKrQXPVlJclM%2BWcpHoDst71nARlAVw4wfXwkVG5pRSoGKO06ZeQtsQA0xeJ9qFIBQqI4LAwlRonyWpTdPJG2rQviBeoz%2BEJzZm0kqXiYqkGyUdi60ki4GEYznJA9JbFMp5ejVZqualXtZHvToYDxBNUq1RCRDOdOlt8PLNSV7Wk7ehbGX7LJOQNMtUAzoPtlyzFIgjKtfSMxLh6e2zKnhyPj4GaiWrb%2Bhfx27yMvo1FvelQV%2By0%2FMU%2Fw1uvKrEEgqhibJmXuqASNqS%2Be0zbOub4%2F%2BQUjp5IqRIPTSmENWQCZljm8T3zeqWtUhm8oAQTCxgKDBNH%2FPYA3L7ZdIlgeyhEIsIJ%2FPeFi34TTW7sfM3w9x6ElVzps4gwmo%2FQwQY6pgELaC9kj4XtHn87BPLhuPtfbDlXrwEDXgdPo4FeOOmK0s%2FupkWQf8%2Frb929RhjOrYIhd4qs0R3gJ0YMbJxnyWYK2d2xZltxTbhOPiJgyw2FkJi%2B89MbCElZLWUme5lF15mGTzX3YEK%2BbDNej1eHaKM8uFBCdJAh%2FB7lwvjTeZXJTWpyk3oViSXhcGUZrAal%2BeypwcPmKtF46xzd7Wo9sd%2FzAnXsDPPU&X-Amz-Signature=dfe8b4f05dc06b3e8f0303ed23d3724469b56b4ad085bd9cb237558942014c5b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PUXSEOY%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGYHzK%2FYIQmaHvSd2sFDiS5zNpGCZ4fzm9%2FUynRYHoTtAiEA%2F%2BJOr0cdcJoDyKgNaMhW1jTtCJy4X2I1w5L4AfdJbkAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMeG0WLtKX%2B4smbr2CrcA5tlLzhAaTSahA%2Fkpb%2BJxhYojKxVA5JM6V%2Fa%2BsTPBJdn5eBXz64Xk8HI11O147vzJ5N9o2ewXdfanzmH7Z2I1BEqCFWfmM4B28WCUEag1gkoWhU75tK0Sa35JcAy5mJihTy8cwNnnU9mur0LqW5Yi%2F1ALocEp5qyK9NHhNE2je73LXYKra3KgWH8bjEwJNiA5OGnr7evSF03znuW6U%2BvyTYI%2FZhXVdrTPHpu2H2jx2uetbcKfwOSc%2FNMC%2FYBydNJqzsN%2FWwQRFZQhl8hlPDM0wbpl%2BOMHLcntp2x6%2BcDJmIO00mUsXJHrE9VbZe%2BiywGL3rOH2g85NsQqZjVTT5vvI9ZvDO9pys%2B9WXW3BPpbOJkWNJENilrCdmav0mymZSzVEIY58luJ32YV3mvjFbUwit1tDFdOnMXNZ5r4IkNLVbpr6tY1kZoSQSOi7NcCna85%2FTcomJUr96iEaGK4KNC4hznlQ5RdkV7ZhJkzlzFC4GKbQL%2BtT6NC14%2BFe5sQLGJfy0489EpeYEL4ab6z95t6l7mehJyeK2ddj0AsPtesW9xNLke09%2Ff86bwf70EcwZuksgwuh2eZ6xpK5iyBXKGKsmmGQSIwolwXGFDozFTxQTJ%2F5%2F1AWin32U7S87eMMCr0MEGOqUBruNwE3VUmkAd3d21ZW1s22t63PkV9kM7afm3v5%2F3tqHCooC2KYQlouB9buMY6F%2BZySC6WMVwbmRc9ETTRa4S1qhJ63ULfwpnznpqAse5HnKuIRkAm4mpNOkBF%2B6%2FNhfNh6ljX9gGgzZDgFkx8T5nTUIXlypdelGfTnM3NeFRpCKC2LIZpHJJoVO%2FBEExcVsqLOZ%2BW3DdeYEs5%2FRVumu7tPusC1bh&X-Amz-Signature=bd9c443ad39ebf07432b3d1f6f3cbc9509db843a10c7c5dbfb822d4edf0f5510&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643YDMNOL%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCICFPnRiK%2Bv4uvCXJh548J5%2BHIftCp1oV%2Figqj8XZkDm9AiEAtzChzXRrnvzeVdgydSft5e6Orzyp%2BCYQ4a9at7M1cbQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDGQcCthbFSkCv1Ny4CrcAyJ5rtIvRjy1NNF1fgcisGT0wtQCGNATKa08jYvhfgFawG4lbWtwMrwj1PdcC7%2FEAPIBXJyLlvUks5eUXcufYMTdMXxoE4YbrAi9gd0dhC4784g3bHuWMY%2FgL%2FcCt0gqwvBDy4VgFSoadNcRE7cmmeXVkvco0AaJ%2FV2lC0dMns7%2BkseQkKI93t6mBX3Ycdqq5it1EJkkHxRYXhgFtYCwyHM3qj68TUINzYkPdO30Mqs4MON86Sv6mlVSMEn%2B2xxwgvUapoE8N%2B7Hjn6w%2Ffrpp5KXu%2BEoC9yEe3l9Qmn4F1eSkkAhnPR0e%2BkuZfnd9m0QDiJc1MV9p84jegXwCIL1XSVaK5COI3tRpQ9v1DQ%2FTiNtLrvJXG9bK%2BiArPFgxkBeaMjm4I8ETBN3CfHcQzqL6g3N0tNId%2FnXT9EEizNi8nczJMUbuBaXSv2aIDCUITn9pyLAfBPqAusoXuz4dj9%2FjFPzaWmcxNHLLodNg9YUeziwylKrHlXNneKfikXeFeUR8Gi16H1Ti%2Bfhifqzi9i1Y%2Fpq2qFUHFB8QnJnu7rJYyRztlmm5rBftiCuPGPXFOMk4tJHKuuHnT914fBsETlgrYd%2BWPMfhGBEpqa4JIqfQL6i1iz%2FQ4Sf%2BIY08xXRMOaN0MEGOqUB8LJqWTdWDOi9WHFnhOhKK75Hbt%2B4aTrIBPO%2BfrkVKd6liFbQXgJki7mOWakJ%2F6BcRfGK2BnyEPR9a1WGVska6D5Le9%2FVcuoCrVtS1%2FiagrgbEHfxSaEYORwsn1WyaFyFuvQ%2Bh0jEvMFqJCs%2BJHBgBYbfWeZRYWYyl4zrokYFtgH0uSJR7xG1Ysa2Fn9GF1K09h5BtRdU1g2fXa3iYyCIwkqw0J%2B9&X-Amz-Signature=1154484a3538aa1ebd548b140c1163beb389d040e42fb3006ccddb25155b1e5e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRQ4JN4L%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIFQBoC4Z%2BydZX9SGtuVq9yyFIqxII6U3Ztwy7cxD4ga1AiA%2BLNncof0xyikOavCKb2Nxj5H67HA4oYTPgN5tASWOjCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMevJ6E5vjE9NyCadbKtwDhNKcoG39c3Nr978X1INqa%2FSJXxAq6Muusii1%2B6pImg1BZ0XxyS4PgWNEUXpC3fT0mXcP7ZQqJbhcPSosSHMQCnEaSrceMs2x9UPZ%2F63v5vo2eNjbfFQGIGfN7ozHZXuapbPCiq3vaSHFuVTcn5NN0hCdnSd2hr%2F51Z3AGb0Wp5ubVtafzrjEDm5Gmju9cV4Jck9K%2B%2BXROoeZT%2FQ3JLMowGkBKyAoejvRsuLbBzYV6TSmP3l9ISfV8E0ZmsI7Zrzb%2FkqbonKrQXPVlJclM%2BWcpHoDst71nARlAVw4wfXwkVG5pRSoGKO06ZeQtsQA0xeJ9qFIBQqI4LAwlRonyWpTdPJG2rQviBeoz%2BEJzZm0kqXiYqkGyUdi60ki4GEYznJA9JbFMp5ejVZqualXtZHvToYDxBNUq1RCRDOdOlt8PLNSV7Wk7ehbGX7LJOQNMtUAzoPtlyzFIgjKtfSMxLh6e2zKnhyPj4GaiWrb%2Bhfx27yMvo1FvelQV%2By0%2FMU%2Fw1uvKrEEgqhibJmXuqASNqS%2Be0zbOub4%2F%2BQUjp5IqRIPTSmENWQCZljm8T3zeqWtUhm8oAQTCxgKDBNH%2FPYA3L7ZdIlgeyhEIsIJ%2FPeFi34TTW7sfM3w9x6ElVzps4gwmo%2FQwQY6pgELaC9kj4XtHn87BPLhuPtfbDlXrwEDXgdPo4FeOOmK0s%2FupkWQf8%2Frb929RhjOrYIhd4qs0R3gJ0YMbJxnyWYK2d2xZltxTbhOPiJgyw2FkJi%2B89MbCElZLWUme5lF15mGTzX3YEK%2BbDNej1eHaKM8uFBCdJAh%2FB7lwvjTeZXJTWpyk3oViSXhcGUZrAal%2BeypwcPmKtF46xzd7Wo9sd%2FzAnXsDPPU&X-Amz-Signature=a86835c1582914a5bef91aed94efda4e129b228bace26f2dbad1c90a58ecdcae&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
