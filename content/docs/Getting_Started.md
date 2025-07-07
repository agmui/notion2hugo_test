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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZPO3CRX%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIF7oFyFnNbaxcGdUzGpu9oz9N31%2BAAZDmtN99zJmwr%2BfAiEA72vYSSSp6TaOIxzWvZ7nn4ID6DsmsJD91K0OOt%2FB8Ogq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJyBfQlWxMSpnS0gyircAy8HPr84jYNecCx1yorjifxQQdRN7nLJQVIBnov7NT6RnT4L%2BDGnji5sTZ15TEgGPh2d6UB%2B4Q0SMHVnyR3WQj42NYZFe4RJJYHHzUKpnep9OaM%2BBoUHS3C2ipYTKyoh3rNzcyi0Y5HTR6PKP3AOgFVVlvAIrXlo04l%2BS1Lv0zkOzI1qhWC0HQi2Iy3VjmfFypDLierRpMl%2F3fb4cv7ZbkEf5zrbTkQVKVpJQiJk49Axoou6nmPdXHGk89NGxQ2xDmzZTOG9KOfEgPYL0cnENls1%2BfaUwJarkPHTpIV0Ow%2BqixnFMYWqm24Xd8vP4ydWWpvs3SsTifXCuHWx7QjUgnQppWFwIUOkW584yneA8WUdzezxmxrM7nK7Z2NIRMKedLnG4an5yOy4QuL8iyku4GkhggYg091fMkqgPaRhatGloPwNFNs3BooKrGrHbedUmV3pThqq5lxnGKGzTUcol4YqgF42IMnEUZNMWW4tbF0aoo8mYkYRErs8eZ7k2y0FQE0p%2FWjI3CXXf%2FHteyXxARWXdUUrQxzkck1yKVWqgYWJIjtGCcBZ2ZaXAppm%2BvncG7DAfD2lej3bpiuyKAcxxF9eCTPdnlkd7aswgFC7a76o5mq2ltTFIgojHZQ5MOvpsMMGOqUBXR3hxE93zZ2IfluHFXU0C8RRHgDLavnHlHa57yuMl4xNOLtfB4njnHwIhwXFVY06CXHbWKt8EvT%2B1LpBX1rbXnZmVRzfcSPANY5UtzE1Dh7qWDlesE%2BeK1Fo1S237WWTb2QjqGhugSs5vAUl9gBtIDgd35eoxGztp4TX%2BA66FFp6RlGspZSPYTm3v8m8TeJQLnHU51q5X%2B2xYtorIrJWw0y8evXP&X-Amz-Signature=d77258ec0bbc8af50263567ccace003ef723596d25e4c4d90b19923f69900849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZPO3CRX%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIF7oFyFnNbaxcGdUzGpu9oz9N31%2BAAZDmtN99zJmwr%2BfAiEA72vYSSSp6TaOIxzWvZ7nn4ID6DsmsJD91K0OOt%2FB8Ogq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJyBfQlWxMSpnS0gyircAy8HPr84jYNecCx1yorjifxQQdRN7nLJQVIBnov7NT6RnT4L%2BDGnji5sTZ15TEgGPh2d6UB%2B4Q0SMHVnyR3WQj42NYZFe4RJJYHHzUKpnep9OaM%2BBoUHS3C2ipYTKyoh3rNzcyi0Y5HTR6PKP3AOgFVVlvAIrXlo04l%2BS1Lv0zkOzI1qhWC0HQi2Iy3VjmfFypDLierRpMl%2F3fb4cv7ZbkEf5zrbTkQVKVpJQiJk49Axoou6nmPdXHGk89NGxQ2xDmzZTOG9KOfEgPYL0cnENls1%2BfaUwJarkPHTpIV0Ow%2BqixnFMYWqm24Xd8vP4ydWWpvs3SsTifXCuHWx7QjUgnQppWFwIUOkW584yneA8WUdzezxmxrM7nK7Z2NIRMKedLnG4an5yOy4QuL8iyku4GkhggYg091fMkqgPaRhatGloPwNFNs3BooKrGrHbedUmV3pThqq5lxnGKGzTUcol4YqgF42IMnEUZNMWW4tbF0aoo8mYkYRErs8eZ7k2y0FQE0p%2FWjI3CXXf%2FHteyXxARWXdUUrQxzkck1yKVWqgYWJIjtGCcBZ2ZaXAppm%2BvncG7DAfD2lej3bpiuyKAcxxF9eCTPdnlkd7aswgFC7a76o5mq2ltTFIgojHZQ5MOvpsMMGOqUBXR3hxE93zZ2IfluHFXU0C8RRHgDLavnHlHa57yuMl4xNOLtfB4njnHwIhwXFVY06CXHbWKt8EvT%2B1LpBX1rbXnZmVRzfcSPANY5UtzE1Dh7qWDlesE%2BeK1Fo1S237WWTb2QjqGhugSs5vAUl9gBtIDgd35eoxGztp4TX%2BA66FFp6RlGspZSPYTm3v8m8TeJQLnHU51q5X%2B2xYtorIrJWw0y8evXP&X-Amz-Signature=e03775e7570dfdc49fd6376dc39ac09f7eb9b763eb7c3953e3657a2793f1f1a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZPO3CRX%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIF7oFyFnNbaxcGdUzGpu9oz9N31%2BAAZDmtN99zJmwr%2BfAiEA72vYSSSp6TaOIxzWvZ7nn4ID6DsmsJD91K0OOt%2FB8Ogq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJyBfQlWxMSpnS0gyircAy8HPr84jYNecCx1yorjifxQQdRN7nLJQVIBnov7NT6RnT4L%2BDGnji5sTZ15TEgGPh2d6UB%2B4Q0SMHVnyR3WQj42NYZFe4RJJYHHzUKpnep9OaM%2BBoUHS3C2ipYTKyoh3rNzcyi0Y5HTR6PKP3AOgFVVlvAIrXlo04l%2BS1Lv0zkOzI1qhWC0HQi2Iy3VjmfFypDLierRpMl%2F3fb4cv7ZbkEf5zrbTkQVKVpJQiJk49Axoou6nmPdXHGk89NGxQ2xDmzZTOG9KOfEgPYL0cnENls1%2BfaUwJarkPHTpIV0Ow%2BqixnFMYWqm24Xd8vP4ydWWpvs3SsTifXCuHWx7QjUgnQppWFwIUOkW584yneA8WUdzezxmxrM7nK7Z2NIRMKedLnG4an5yOy4QuL8iyku4GkhggYg091fMkqgPaRhatGloPwNFNs3BooKrGrHbedUmV3pThqq5lxnGKGzTUcol4YqgF42IMnEUZNMWW4tbF0aoo8mYkYRErs8eZ7k2y0FQE0p%2FWjI3CXXf%2FHteyXxARWXdUUrQxzkck1yKVWqgYWJIjtGCcBZ2ZaXAppm%2BvncG7DAfD2lej3bpiuyKAcxxF9eCTPdnlkd7aswgFC7a76o5mq2ltTFIgojHZQ5MOvpsMMGOqUBXR3hxE93zZ2IfluHFXU0C8RRHgDLavnHlHa57yuMl4xNOLtfB4njnHwIhwXFVY06CXHbWKt8EvT%2B1LpBX1rbXnZmVRzfcSPANY5UtzE1Dh7qWDlesE%2BeK1Fo1S237WWTb2QjqGhugSs5vAUl9gBtIDgd35eoxGztp4TX%2BA66FFp6RlGspZSPYTm3v8m8TeJQLnHU51q5X%2B2xYtorIrJWw0y8evXP&X-Amz-Signature=d0518d1a030619d9c4b02430968ae9eaf9b449f3a74e75da8ea1b43090fd3fe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P5VLTXV%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIAsc%2BlDXBu%2F7qZO5%2FtNENFmnEX37uL%2BS%2B9fS9XoXGlevAiEA78ELvCYvbO53gO%2FfrHpj%2F7z6U9N8TXPxtyKMs1NHyo0q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLFrE7Z9U2NNsKwNKSrcA9ZZfcpMY%2FTNrvOe3PYo7M6GxCNiNhqUGI6c0%2FWcDyjcj7yphyqL7ak2qw%2FbJfZH5EPRKDjCLbKtVteAfkXv9DZvva2ZdovQTA2dD4bX%2BHpbx2N0MVxJaqlffr0i%2FmIQmobCyDG4CVvcDV8gHHrV4GsJsZlsQC1On2QW1UbRzcG44YMUl2jjY%2BFlaQkCAZeq0jNza3hbhfHo91pEGDGsUqvPFSiOMw%2BfPPd8B5qHnTiwakegRZy3QSuzk5hUIsQBxdOt%2FXRRufrC%2BkRpkGICzsxqJGgyoMEzvpRp%2BV44WX4UOssKP9yJnh5XDRf3O3C6HQvWCfiip9Gvzn70lZyVxYNZxuvV634xYfMclEpDGRpo1jwySS1soMPSbXk5EZQ7H%2Fia2UjUL7OYbQIGBW3JkPQ4Ey1WY%2Fy6bwXQHXcWUcC06ZYWhZ5Ft44NATGROR9Eq%2Fyz8vfU2XZTLaFe9H35Yfz78IT3iOJQh0Bx0y4Cm5f5Xug5CxbE2Y110w2gqLfT9ojzqNVzvKhydwnJ%2BtYmECoHnMwEpcGiRzqPs6ucQlsype4kqjVAZeaiPKP37PldsTLH%2B8H6t%2BKzTc6rel0sGLk2HGlWMSmTk98SvXfmTVwG62NEAyK7jryN4v3HMObpsMMGOqUBk3TJVhr14XAE6obfFBp1uzvdA%2F636hs0%2Fe6vK6Bn2z5plIO2XidtHKS6GzaH8D3rJbHQri5pZ8Tvv38yNvTckd6YmUw0lxEq7gP3Cjig%2FogXXicPfSX%2FKYH%2FcDgULM98mDMb50lCGevMjoOj9a4xiv64nKx84vkcMhONVfuajWsd%2Boyn4q15%2F1jWjmZ502Ozd05ZkIo9PMP%2Fc3XLHldqsFS2DzTu&X-Amz-Signature=521d1e03d90f680ab8416e6747586293fdab185c067b7719bfd3b442b5c869c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZO5O5UP%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCPdQpG1n0qGO5m%2B3lT4xCav%2Bi1yvzdfzlb%2FzMQFQslQAIhAPOqo5smwbNA0VOyETX1zREgEgTyPDJS2ureC3I6OcFjKv8DCH4QABoMNjM3NDIzMTgzODA1Igy%2FQ%2BeOi%2BKjKwCsvG0q3AOkIc5T05dDAYrTvmE5MG%2B2TOYpadrGfLaAPQAM6TQeNEt7dF7kE4Gvfcz76%2BFcLHtxmApOmii1U%2BEVKkTOS4KZTNZLRo%2FFXLd2AJtyqL%2FTrchK%2Ffqz21zA%2FOxx28dx8x2S6eyp7VSkWuVtY0uf0ex6Bs4vfvejCsW1VsKw7DM%2Fhdpy4kZWDYspRF2aMFY3w8I%2FuoQOAYM0rQR19sJTdFm5DWHPoQ91PomhShgssBF4Rq%2ByGsM1bmTtOdeAf8D6XE61eJXvCUd87BTVbUem078lnT7hdxFSoS3EBdIFE%2BnUL%2FRTi0dWff7KtAUJa8Ssu%2FOwWfEyKRPCalSSq%2F67LyYxQ9%2B133KebJRNOxR%2FjNeD9En8eWclUTQMWf%2F%2FF5P8%2BWtgdmbIHfSujIdb4n4%2Bna8IA3rTnxD1hz0cbWoC0ZZOpdNjXlOFt040FPcvv6OmNel4Ub3PhITB4NUvnipOd36rgRuvSvesexgqFN8nybEAjzxTvIJIjDkQ7yS7p012DG21v1%2BIIYr%2BH4gRd4MWx5iYmZALaf61P9DFKcmRLTsaCwfxKc%2FLLjLuQKlz%2B6bwB%2F6lmTtFRweH%2BogsYJ5PJkDnEJMdouMGaN6FNOiGmpoyuVymT%2BVzfeOWm0rJHjDP6LDDBjqkAQkSN0nrNTIwopQ%2BtI%2BiXtw6OxHEgQ%2FS7Rk5rhX0BQcEZZJtO4xML8yJCH9wA9G8aB%2B3siM7ZqGns2gZ8yBEG0GGOzwa6xzJrEe1UF3KHoxlrBm07mFMU8j2qejWAcmwCZP2AGQIssJ0TMkV9o1JPjM0HVT49%2BwqZQ9Bct1q8NEXbTNab1IGY%2FAznQKZ0uXqFeDO19EXi2w0%2FIrOTt3hD%2FJnIu4H&X-Amz-Signature=b27da83b264ab34488e91c2543399344137a4e1d779a37031d30a988411b9586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZPO3CRX%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIF7oFyFnNbaxcGdUzGpu9oz9N31%2BAAZDmtN99zJmwr%2BfAiEA72vYSSSp6TaOIxzWvZ7nn4ID6DsmsJD91K0OOt%2FB8Ogq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJyBfQlWxMSpnS0gyircAy8HPr84jYNecCx1yorjifxQQdRN7nLJQVIBnov7NT6RnT4L%2BDGnji5sTZ15TEgGPh2d6UB%2B4Q0SMHVnyR3WQj42NYZFe4RJJYHHzUKpnep9OaM%2BBoUHS3C2ipYTKyoh3rNzcyi0Y5HTR6PKP3AOgFVVlvAIrXlo04l%2BS1Lv0zkOzI1qhWC0HQi2Iy3VjmfFypDLierRpMl%2F3fb4cv7ZbkEf5zrbTkQVKVpJQiJk49Axoou6nmPdXHGk89NGxQ2xDmzZTOG9KOfEgPYL0cnENls1%2BfaUwJarkPHTpIV0Ow%2BqixnFMYWqm24Xd8vP4ydWWpvs3SsTifXCuHWx7QjUgnQppWFwIUOkW584yneA8WUdzezxmxrM7nK7Z2NIRMKedLnG4an5yOy4QuL8iyku4GkhggYg091fMkqgPaRhatGloPwNFNs3BooKrGrHbedUmV3pThqq5lxnGKGzTUcol4YqgF42IMnEUZNMWW4tbF0aoo8mYkYRErs8eZ7k2y0FQE0p%2FWjI3CXXf%2FHteyXxARWXdUUrQxzkck1yKVWqgYWJIjtGCcBZ2ZaXAppm%2BvncG7DAfD2lej3bpiuyKAcxxF9eCTPdnlkd7aswgFC7a76o5mq2ltTFIgojHZQ5MOvpsMMGOqUBXR3hxE93zZ2IfluHFXU0C8RRHgDLavnHlHa57yuMl4xNOLtfB4njnHwIhwXFVY06CXHbWKt8EvT%2B1LpBX1rbXnZmVRzfcSPANY5UtzE1Dh7qWDlesE%2BeK1Fo1S237WWTb2QjqGhugSs5vAUl9gBtIDgd35eoxGztp4TX%2BA66FFp6RlGspZSPYTm3v8m8TeJQLnHU51q5X%2B2xYtorIrJWw0y8evXP&X-Amz-Signature=c9c4c3f9a49050671975adeff4f29d4b49df277baf1f921292867d72836d0cb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
