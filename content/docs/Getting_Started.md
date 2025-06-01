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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3BUSGOL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICR8qzjHN4yHvm2KVpFUH%2FGfparZHSyVpX1BCPuT8kfGAiEApG3DTtaJAh5wJ5p8Wnj53paFv19XK8SGCpn7kJTzItsqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdvLmc6iQbjPs6mCircA8HidqMWQxuqAq5nctjdgw9jp9LPnxnCSiyRDZbc19%2FmcqGV44KsxqRsMNv48dhwhwYmwAuJBSFKcvBxruMZ8Yi8skRrV6mCw0zTV2EdPray6IZqfUq1XItud9hRxoHzUbxr0YoIVLBZhh2c8n0Yl8cFNc2%2FPsQi25HeXoY9wBucF5UhsK%2BWWzShNEPnclUIZMjWD0Sdo2%2B1AiXFTqIbfJZfPdZPxPZw59O16blzvmjJvmYJUQHKOXwMWbrPKYF6MhB6chKDK%2F3aQymgPVvfUn1VCGb%2BOdbIu%2F73PtwzgQoVB6D55GrRw3K2jWm9jH5C7DRbMSYyCwDuE66N3zRjQcgssrh7mYDb%2Bg8%2BBOHX4bfQ4mbAJSXdj2ngLMUG9dh%2FflSYec5uzn1yxheS4hiZYgyFLOfELXFxawWuXJgUdhtCO1lD0F8d%2FzsPlDNgd0wcHk1BMWDcYjyaq0o7%2BjcPN%2FfJ2mNchpNyVEP%2FuoQEvW0lFuaczbVLQ8PspipuApdddh2u5vhakvYDbgntk3E34BM1CYflwPKBI4YJg7HVSChUIOO7ITt7OlCFaESV3eOFh7YCEhwMDdDxoUtlwyVXcYTr31eh7ZNAnYEDg04VJPrePJYMmsxBjQj706jsMP%2F%2B8cEGOqUBOg6iNlpCoeG%2FrXcxQ6%2B2isP8gub9DOvBX%2BYL8PABojBYOPDdNTTU%2Bsen9%2Bd41lbtRhiB2YsF8ZX0bAV2UxXPGdAtgnugRxLrTbM%2FkTX9vrBn6l8%2FjDfVALKySFK6rpIe1kvOqcgOfM13N4sfZwmv3WNDeJfyhHHPss9R1EsDxLbFPhXG197UhnGFet9hwdnBsbX%2F8rXUT%2BDpwx1l9AjqxXKZI7Pm&X-Amz-Signature=52dff34ddf9f83cb4cd207d9956243ea6a52ddfe33098788c460394f12685046&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3BUSGOL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICR8qzjHN4yHvm2KVpFUH%2FGfparZHSyVpX1BCPuT8kfGAiEApG3DTtaJAh5wJ5p8Wnj53paFv19XK8SGCpn7kJTzItsqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdvLmc6iQbjPs6mCircA8HidqMWQxuqAq5nctjdgw9jp9LPnxnCSiyRDZbc19%2FmcqGV44KsxqRsMNv48dhwhwYmwAuJBSFKcvBxruMZ8Yi8skRrV6mCw0zTV2EdPray6IZqfUq1XItud9hRxoHzUbxr0YoIVLBZhh2c8n0Yl8cFNc2%2FPsQi25HeXoY9wBucF5UhsK%2BWWzShNEPnclUIZMjWD0Sdo2%2B1AiXFTqIbfJZfPdZPxPZw59O16blzvmjJvmYJUQHKOXwMWbrPKYF6MhB6chKDK%2F3aQymgPVvfUn1VCGb%2BOdbIu%2F73PtwzgQoVB6D55GrRw3K2jWm9jH5C7DRbMSYyCwDuE66N3zRjQcgssrh7mYDb%2Bg8%2BBOHX4bfQ4mbAJSXdj2ngLMUG9dh%2FflSYec5uzn1yxheS4hiZYgyFLOfELXFxawWuXJgUdhtCO1lD0F8d%2FzsPlDNgd0wcHk1BMWDcYjyaq0o7%2BjcPN%2FfJ2mNchpNyVEP%2FuoQEvW0lFuaczbVLQ8PspipuApdddh2u5vhakvYDbgntk3E34BM1CYflwPKBI4YJg7HVSChUIOO7ITt7OlCFaESV3eOFh7YCEhwMDdDxoUtlwyVXcYTr31eh7ZNAnYEDg04VJPrePJYMmsxBjQj706jsMP%2F%2B8cEGOqUBOg6iNlpCoeG%2FrXcxQ6%2B2isP8gub9DOvBX%2BYL8PABojBYOPDdNTTU%2Bsen9%2Bd41lbtRhiB2YsF8ZX0bAV2UxXPGdAtgnugRxLrTbM%2FkTX9vrBn6l8%2FjDfVALKySFK6rpIe1kvOqcgOfM13N4sfZwmv3WNDeJfyhHHPss9R1EsDxLbFPhXG197UhnGFet9hwdnBsbX%2F8rXUT%2BDpwx1l9AjqxXKZI7Pm&X-Amz-Signature=f3e06e1d808b800cf797fd23bf24920d8cd9b27fdd3e56b01153583a8518ceef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3BUSGOL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICR8qzjHN4yHvm2KVpFUH%2FGfparZHSyVpX1BCPuT8kfGAiEApG3DTtaJAh5wJ5p8Wnj53paFv19XK8SGCpn7kJTzItsqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdvLmc6iQbjPs6mCircA8HidqMWQxuqAq5nctjdgw9jp9LPnxnCSiyRDZbc19%2FmcqGV44KsxqRsMNv48dhwhwYmwAuJBSFKcvBxruMZ8Yi8skRrV6mCw0zTV2EdPray6IZqfUq1XItud9hRxoHzUbxr0YoIVLBZhh2c8n0Yl8cFNc2%2FPsQi25HeXoY9wBucF5UhsK%2BWWzShNEPnclUIZMjWD0Sdo2%2B1AiXFTqIbfJZfPdZPxPZw59O16blzvmjJvmYJUQHKOXwMWbrPKYF6MhB6chKDK%2F3aQymgPVvfUn1VCGb%2BOdbIu%2F73PtwzgQoVB6D55GrRw3K2jWm9jH5C7DRbMSYyCwDuE66N3zRjQcgssrh7mYDb%2Bg8%2BBOHX4bfQ4mbAJSXdj2ngLMUG9dh%2FflSYec5uzn1yxheS4hiZYgyFLOfELXFxawWuXJgUdhtCO1lD0F8d%2FzsPlDNgd0wcHk1BMWDcYjyaq0o7%2BjcPN%2FfJ2mNchpNyVEP%2FuoQEvW0lFuaczbVLQ8PspipuApdddh2u5vhakvYDbgntk3E34BM1CYflwPKBI4YJg7HVSChUIOO7ITt7OlCFaESV3eOFh7YCEhwMDdDxoUtlwyVXcYTr31eh7ZNAnYEDg04VJPrePJYMmsxBjQj706jsMP%2F%2B8cEGOqUBOg6iNlpCoeG%2FrXcxQ6%2B2isP8gub9DOvBX%2BYL8PABojBYOPDdNTTU%2Bsen9%2Bd41lbtRhiB2YsF8ZX0bAV2UxXPGdAtgnugRxLrTbM%2FkTX9vrBn6l8%2FjDfVALKySFK6rpIe1kvOqcgOfM13N4sfZwmv3WNDeJfyhHHPss9R1EsDxLbFPhXG197UhnGFet9hwdnBsbX%2F8rXUT%2BDpwx1l9AjqxXKZI7Pm&X-Amz-Signature=225f26e4b9d1e1f6057be275d4de8d71d353f0f129e9e20027a79aba606541ab&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4B2ZN5M%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIGbwEC1il6FhEToum5ih3NtxXN509setRCM458%2FzIz8XAiBZeVipyV%2BNeYD77T76QlfENJ5okBhToOhB2DGDSIugDyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7M5lccxcb1hqZ1tfKtwDL189TWm1pJEM4JikgAL7vkeed9FbfYK4fyXAf6bkIX8%2BUPUK7LW7uvqVJvRPDKjhZWDHf3udoUorDzhI60O9iuWWu10lqGWuSiQN3CJWAtVkQ%2FLCnd2siTGiKHqBQHeW8BDhkiuYkYvbVZEuT0L5gZtz9Q1HxTZv1vaJFE4DlUHgZiF4XVvR%2FsOPQ3CMZq%2FpQZ5LEjhXXZsS5jXRmpPaxsjqSHA6FzL7HZF5SNNgfag3xnjxuBsvfpmxFpSKf8XoDw7%2BhIIRD3OfV1CR2qI48qS%2BrJh4F8WgC%2BWhOc7A7GqWK6voeZFTqlnWziWadJmeMRZ2UdOb8P8VLaDebecJmC9s%2BSjCmKicP35QWbPBtvkQXCqaukw07k81FD%2BsvY3RfPp3S3LwSu4wuY5TUyj%2FN8j0z1sa8COcHDKr2gO7asHbTXOm5jsu%2BltTIEMSkY9%2Ba43CWI0WGSHD3cJyfrEq8arJPZpXcKJ7Z7e9BaSKksDe9d28FsXQK3qMoIcELts4xc09ykHqWml7%2Bb5OfiUlYqhTQcolQ5Ff8tvnn3fshnesGvQN0f9x9ZQCcW7e1%2FRu%2B0iZvgT3o2%2F%2BsGlG0L2qhblhmJ8KXE8MNWC0DpHaAjIXOHE5nfAfySFrmF8wuoDywQY6pgHhE36j%2FggtVOiJ5ku0ZaNJJJKu1qCvaea4qESkBBdLMBATYs2Kk9A4Umt5OHezv5H%2BkPcWW%2F7LeBVI27vVz4yVWFSUT3NgyVSlm%2FxcWwZ02owSriQlEmMD7e%2FVDrwxD8djG8Wxh6EECd9B5sCIx0xrF4dSk5vjLn5msM3qWO4Y1uxmDQNIFX5Dusd5hU0VFbSMn2vew7dS4HIW9VS3jQYNsfUQz1NV&X-Amz-Signature=be89a21e0426d5d177826e772b6deb94289c7a7dc8db110af2942252e8d9c29a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YGCOZAE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIEl3NEDwAeYF0Q9BFXBtDMlU%2BDmkrC0p6z6oIuw42IQgAiBZjWxtaHm2NNq41v7uj4Nj0tEJQrb7N0wN8qcCpZlPICqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoHjFUx8fkXepfoZ0KtwDRY%2BtMgpS6OlrMg3d1BhKS0V%2BVcGftVgDO9OPjpmx0cnNGboTTcKj5tkyJtR0YEA4OhkFvXx3AEauDfyApPgP199wnyZRePEZdmwpX0PC%2FXwyWJw8tTGqzRrPwryDcL28kDIXOd0ml9LOyOowUfUTkcXErSaZf2vVwF5xLraiV6tLGIHuoykTd7bAUlpbZ1oRVleNQEduS8k7%2Fb8TGGYBoeEiqXIOkvYQaAD5H3mjP3IW2I82ml2J%2BXxUB%2Bum0I%2FukbE6r1yCE3mrdzVqfcZ11%2BiOlH1UfxBf%2BgC%2Fn%2B%2BNTEy72f3uP%2BR9GVu6sDz40uPCFIoA0x5e1cw7TQjekhGuUWnQbpNmf6c4izojQTK181ysSYAKt2ad83xtF6RQ3l0oX06iJDH63%2BTAkSItW3WIyZriHDQLHMtIZEwWO0EGvBYfbRZ2E%2B%2BnmwGzJo215AxcgiEh9TXU450V3PHKD0Q7OhqMqGPVvU1v%2FJ9GnQR8dQQoFGFDRgmQal5hWOAd7NpwOE7JSehsjitSlCOEB%2F6%2BULlKLMi%2B0B%2B%2F5xh8uUq2pFWIXBiXhKofCi%2FGPli1MlnTcW7W2pO1d%2BNDwdrN2mryPNmWBAjQWD%2BV7cYQAv1yhixuXiOL35ibOZtlA4UwhIHywQY6pgHSI%2F6Er%2BlOpNpoBQmUYjcHxfLtPg3fedSat1vkH3Kb1mpHGJBpXj2TYAMw25jPgX0ZgExRZSKENCtcnaTkYWpL6Ou1925SWbBuNz1ER1lSdkyuRDPjw%2FgAkH3ZvWpjV7a5b3lGuHNjU8PIXKVRyORK9y%2F20Dly%2FVU5lQ742jf1QEgTD%2FisEvDRVfCNMCjp4iUIuM%2F2U9xZoFW2EYUmx6M%2F8RoD3lrO&X-Amz-Signature=14b79a6ae20c4e4d218bc5814f839c5c3c0f7c5da64a0040b2876d09d5ac207b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3BUSGOL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICR8qzjHN4yHvm2KVpFUH%2FGfparZHSyVpX1BCPuT8kfGAiEApG3DTtaJAh5wJ5p8Wnj53paFv19XK8SGCpn7kJTzItsqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdvLmc6iQbjPs6mCircA8HidqMWQxuqAq5nctjdgw9jp9LPnxnCSiyRDZbc19%2FmcqGV44KsxqRsMNv48dhwhwYmwAuJBSFKcvBxruMZ8Yi8skRrV6mCw0zTV2EdPray6IZqfUq1XItud9hRxoHzUbxr0YoIVLBZhh2c8n0Yl8cFNc2%2FPsQi25HeXoY9wBucF5UhsK%2BWWzShNEPnclUIZMjWD0Sdo2%2B1AiXFTqIbfJZfPdZPxPZw59O16blzvmjJvmYJUQHKOXwMWbrPKYF6MhB6chKDK%2F3aQymgPVvfUn1VCGb%2BOdbIu%2F73PtwzgQoVB6D55GrRw3K2jWm9jH5C7DRbMSYyCwDuE66N3zRjQcgssrh7mYDb%2Bg8%2BBOHX4bfQ4mbAJSXdj2ngLMUG9dh%2FflSYec5uzn1yxheS4hiZYgyFLOfELXFxawWuXJgUdhtCO1lD0F8d%2FzsPlDNgd0wcHk1BMWDcYjyaq0o7%2BjcPN%2FfJ2mNchpNyVEP%2FuoQEvW0lFuaczbVLQ8PspipuApdddh2u5vhakvYDbgntk3E34BM1CYflwPKBI4YJg7HVSChUIOO7ITt7OlCFaESV3eOFh7YCEhwMDdDxoUtlwyVXcYTr31eh7ZNAnYEDg04VJPrePJYMmsxBjQj706jsMP%2F%2B8cEGOqUBOg6iNlpCoeG%2FrXcxQ6%2B2isP8gub9DOvBX%2BYL8PABojBYOPDdNTTU%2Bsen9%2Bd41lbtRhiB2YsF8ZX0bAV2UxXPGdAtgnugRxLrTbM%2FkTX9vrBn6l8%2FjDfVALKySFK6rpIe1kvOqcgOfM13N4sfZwmv3WNDeJfyhHHPss9R1EsDxLbFPhXG197UhnGFet9hwdnBsbX%2F8rXUT%2BDpwx1l9AjqxXKZI7Pm&X-Amz-Signature=554346f1113a5429c9219d505cc0ddb639443705fdedc2069f64f24531190872&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
