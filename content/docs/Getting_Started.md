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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EMCEMHM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID92vNEIxYNKCPK1LXArk4m7WLlg3HnvT2ZpbPWM8BF%2FAiEA0XFQ6qL6P582DQgrKUD1ewgZ5tbG4dnmoil%2FrA74TfcqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRwrRNeTX97cjJteircA%2BcbxMY8bZ%2BbrPDIveBwdPGHAFJ3mMaH2jnESHG2JI6IvMLcFBlYxqHVHT1lKxVI55aOrKm1EfUVZd3fI0WkqFLCR%2BvI50HC3tnfFCtGzflDknTpirO5pbeW96LzeIHVFsHrC7qKyf39eEBFJfMlE097641Nbg4xW4E17Un9Wik2EBBoC30Qv9u5ApNgTFFzNQiF7xArEGER7tgqUfEzME%2BAmbtFSLt9cCByHcZ7ZBTF084GM08b%2B7FZuzYMTqc9N05zpk1IX5GWyE8cEzNVE87MeI%2Ft%2B7lRV9y%2BWAInYp8PQnozMnjUWrTCcHKsDzW2EKGkxcpAmc3NVwfydESlOpVkiqJloVTii8eldY6lY57eh6i5S5rtd312JQ2Dv1QHjHauKi%2FMBeMUyN8VXLznC76ZYR7hLAZySUXT0GVyyaE8lyvidRlHrKzc%2FLC6%2Fz7rnlsRGGrVYNyD4Mxu2lBwrkfUB92Flpkn9seeQHuKj%2BtBioaDGij0pwOVSZSbZkisDJJI8iyzjShCf0FtEeZnNCtDVZNDj9ZenUEmREa3AUPSprT5RbqGfGr0hE725TfIs0ZCuCLlzyFmRahRdi9PCHg2mHbhNEWCuJ%2BXjVtSD2PxL8KAYzqEpdGmVggLMJbWnsIGOqUB5yS8NgHnI1gjx6jMeH069thT82FTy73ZjIZEIQ4qL1xs7AMDJSRwUiG0TQW4RMr17ebMMkn4JO5XGlOxW7zQofQKnv9AuwoYfSiPWTkwYT7b918%2FXRvQjZXBhSjllVJw8A53r4PHCRlCgbFWkmx8jPCFz1sQC8F70qJ8TSIfzlaCd4lYmcNxE93fw2EkJBJU16%2BKK7xQK4JB16BUDFeR0KiGcVos&X-Amz-Signature=d05f84d7d5129f5df82bd11995bdaa6d5c8dca1dcc48d4faeeba732cee9ac81e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EMCEMHM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID92vNEIxYNKCPK1LXArk4m7WLlg3HnvT2ZpbPWM8BF%2FAiEA0XFQ6qL6P582DQgrKUD1ewgZ5tbG4dnmoil%2FrA74TfcqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRwrRNeTX97cjJteircA%2BcbxMY8bZ%2BbrPDIveBwdPGHAFJ3mMaH2jnESHG2JI6IvMLcFBlYxqHVHT1lKxVI55aOrKm1EfUVZd3fI0WkqFLCR%2BvI50HC3tnfFCtGzflDknTpirO5pbeW96LzeIHVFsHrC7qKyf39eEBFJfMlE097641Nbg4xW4E17Un9Wik2EBBoC30Qv9u5ApNgTFFzNQiF7xArEGER7tgqUfEzME%2BAmbtFSLt9cCByHcZ7ZBTF084GM08b%2B7FZuzYMTqc9N05zpk1IX5GWyE8cEzNVE87MeI%2Ft%2B7lRV9y%2BWAInYp8PQnozMnjUWrTCcHKsDzW2EKGkxcpAmc3NVwfydESlOpVkiqJloVTii8eldY6lY57eh6i5S5rtd312JQ2Dv1QHjHauKi%2FMBeMUyN8VXLznC76ZYR7hLAZySUXT0GVyyaE8lyvidRlHrKzc%2FLC6%2Fz7rnlsRGGrVYNyD4Mxu2lBwrkfUB92Flpkn9seeQHuKj%2BtBioaDGij0pwOVSZSbZkisDJJI8iyzjShCf0FtEeZnNCtDVZNDj9ZenUEmREa3AUPSprT5RbqGfGr0hE725TfIs0ZCuCLlzyFmRahRdi9PCHg2mHbhNEWCuJ%2BXjVtSD2PxL8KAYzqEpdGmVggLMJbWnsIGOqUB5yS8NgHnI1gjx6jMeH069thT82FTy73ZjIZEIQ4qL1xs7AMDJSRwUiG0TQW4RMr17ebMMkn4JO5XGlOxW7zQofQKnv9AuwoYfSiPWTkwYT7b918%2FXRvQjZXBhSjllVJw8A53r4PHCRlCgbFWkmx8jPCFz1sQC8F70qJ8TSIfzlaCd4lYmcNxE93fw2EkJBJU16%2BKK7xQK4JB16BUDFeR0KiGcVos&X-Amz-Signature=ba5acebf8285d27ddc5e0ee3a61b2156e6beedc802e5c4d057d0fc85af5776e7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EMCEMHM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID92vNEIxYNKCPK1LXArk4m7WLlg3HnvT2ZpbPWM8BF%2FAiEA0XFQ6qL6P582DQgrKUD1ewgZ5tbG4dnmoil%2FrA74TfcqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRwrRNeTX97cjJteircA%2BcbxMY8bZ%2BbrPDIveBwdPGHAFJ3mMaH2jnESHG2JI6IvMLcFBlYxqHVHT1lKxVI55aOrKm1EfUVZd3fI0WkqFLCR%2BvI50HC3tnfFCtGzflDknTpirO5pbeW96LzeIHVFsHrC7qKyf39eEBFJfMlE097641Nbg4xW4E17Un9Wik2EBBoC30Qv9u5ApNgTFFzNQiF7xArEGER7tgqUfEzME%2BAmbtFSLt9cCByHcZ7ZBTF084GM08b%2B7FZuzYMTqc9N05zpk1IX5GWyE8cEzNVE87MeI%2Ft%2B7lRV9y%2BWAInYp8PQnozMnjUWrTCcHKsDzW2EKGkxcpAmc3NVwfydESlOpVkiqJloVTii8eldY6lY57eh6i5S5rtd312JQ2Dv1QHjHauKi%2FMBeMUyN8VXLznC76ZYR7hLAZySUXT0GVyyaE8lyvidRlHrKzc%2FLC6%2Fz7rnlsRGGrVYNyD4Mxu2lBwrkfUB92Flpkn9seeQHuKj%2BtBioaDGij0pwOVSZSbZkisDJJI8iyzjShCf0FtEeZnNCtDVZNDj9ZenUEmREa3AUPSprT5RbqGfGr0hE725TfIs0ZCuCLlzyFmRahRdi9PCHg2mHbhNEWCuJ%2BXjVtSD2PxL8KAYzqEpdGmVggLMJbWnsIGOqUB5yS8NgHnI1gjx6jMeH069thT82FTy73ZjIZEIQ4qL1xs7AMDJSRwUiG0TQW4RMr17ebMMkn4JO5XGlOxW7zQofQKnv9AuwoYfSiPWTkwYT7b918%2FXRvQjZXBhSjllVJw8A53r4PHCRlCgbFWkmx8jPCFz1sQC8F70qJ8TSIfzlaCd4lYmcNxE93fw2EkJBJU16%2BKK7xQK4JB16BUDFeR0KiGcVos&X-Amz-Signature=fb4ad645aa1fab78f30eee156d59358ecbff61eda907f63bb6186874582f49e2&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7L6MQ6K%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKfFve109oDo9IVzHh3%2BD6qQy%2F1cNbiTsxst2dh4984AiA87lIjsLlqDVl8I9R6M4yKc7Oc3dfjVJMjhH2QvKjEkyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5wNBbzAtrJ5XzlyzKtwDzqSTgeeZwGLKEtGrpOqWVz1nXkd8gnEAZHmWOQVgL5vLW8yERLVz0o5ln0oOEpf6gLhz0%2B29OhLTgwODa3xxCDA8Y18%2Ff2FewPlSoTKN2tQA%2BVjYxZ%2FJwpkae0Q%2B76DtT0FdRNLiveHCHNsWsHLNNrPbAKRoIXNE0SFDcdRFKPd711gSMChTFJxargajQDcv5niD1Ylcr3FMGStxSpNYN0U4%2BP3S%2FFVg23i4bmOPIQRT6rDzw%2FFs4lfEXyYjWEdxN3IivMERP6aMLsDpgPB%2F4JJcBsvAlmyLSwIqs%2F1MQRAnGrWUKd4%2FXCOcUN0C4WTC5V%2F0h5JHtQuiSuBsC0NMJtaGUA84saDN0HrbcOVC59KiNHOdhD1JFF4HmffYceBCM6qCxSJgPAn2YvPlCUVM86geXbfUE0Xzml4z38Xgk1D4hy9cUf7x0NZOdZq7NvVIuoworLQmJrZa3JcH6r2DFlM6xNY4PXHwEW9zXgtM5tUGmfAjRnFoiYeQtJrd%2FzrwxGY07pmeMyXPOVfr2V84S%2FOWQrAxCoPw3NoFtcFTI81qwnKadQyDLMOhgRMRJH1%2Fioc5czInbpTgJk3Q9Eow1C5BauTlFf6D995ru3rjvA3jjlTRBAJdlczuBmswqdaewgY6pgGqX3VCOn%2FG5WgYTzwx0EGFqwEkQzV4d63mucthselmilIHZFXwa0iZbzypY0at5F5uHWlanou6sFl3GBg0fWa6ONdxa92nqO1fQzJdNglJk2%2FVBjmeuRqDmnQ%2Fml8Dx2HuZ3jjwLjPzxK06URt3CPJKSYVU0g3HF6ruRBA5NRCcav%2B8mSnSmN%2BzdGSUbyFKrpX7%2FZMc3y0xRZ%2FySbnDw8T5ENpSSOQ&X-Amz-Signature=ae67c94f4ba09ecd1b3570369255b238667601bde6d803a6248cc4b9ebfef86d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XHFJ75G%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBX9DjoP39O2QhI4YKBDzy2wHuafTRkgjcmHXKHYi5jAiBLsWgTuD7AymUMykDvnpNuq1nROxUbX3nEXDwAIyQOESqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvsaeSe7mIS4lhm%2BAKtwDG8Ilj%2FigDJSilyx4re%2BYgikJJeDbIzqhy2txNYIQeiRUz%2FpuiMAxZfPnZevTeqGVuySwmEnrKWEE1UzV1qwQIZ0euw9Vl%2F9dr2MjogJu7PYc4Suq%2FXGppe3hBZUKJvZTqjyA647b%2BqulS8XaTrD4RpmFi4vxe4cEVcsLWUR%2B2JWajsP5O8I7h4Vz%2FPlYLqUKOWipxfRifDbG73LDr%2BcfL1qubWAFHm1Nk9MQjmjgy47fHt8j%2B3Wo84luUs4Wink%2FOg1v3R0BZiZZ%2F7iIce6evyMG8eXMcHHZViB8KO62bEAjiv%2Fl%2BTY%2BqRkFlvl00T%2Fh95zU743Z%2BwWiHxXV163O1LBmFmHiK2t5%2Fe2dkYETB4n3yIZNxc0ZtxZjSvHo3GfvpVNs599JWksIW8UsQKaswoorEENVMwh6Hoc6FXetPQypbzpZqBwJTLWZSG63ACAtFziP88uViABRcVuXUHSjtkdjKN896ByNc66gokZBbOKLdghHsjAlpoJaXPJUIHKcrhSGp20Xl6bI5aicdBMSopm1mGukqNFCHSVb4SthyZFKeWWBiTda1%2FwtQlEaYpB4A4zW3cxWQsrkU5SaJyIOUztLltiWpYAljlv7nEgPZwNQOJU24emoSBL128YwktaewgY6pgHN1KNKshccUD5%2B%2FjWEnNOm2pf3eiwFuclWZpeMP%2BlAWfX7BB90ybAvxTuSJF2VwxTUrRGdrOF3fMllUOrqi35QFfFOzumnoqOzZYZtRC48YWRO70wWYvs%2BnETbZkJJL2EvBSdNpt3GM5e2peYBpvLmzChblwd%2Bo4T%2F47WaHOxRYtxT8fnc1t%2BWUwBG3%2BcBQaalW4EMHEVlwBpeWjYB7yK%2BoKuzwwB%2F&X-Amz-Signature=4edd3ae74c78c4ae0e1c47ca0e7dceb77f9656462b5317da3ecdfc6e97bd6f0c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EMCEMHM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID92vNEIxYNKCPK1LXArk4m7WLlg3HnvT2ZpbPWM8BF%2FAiEA0XFQ6qL6P582DQgrKUD1ewgZ5tbG4dnmoil%2FrA74TfcqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRwrRNeTX97cjJteircA%2BcbxMY8bZ%2BbrPDIveBwdPGHAFJ3mMaH2jnESHG2JI6IvMLcFBlYxqHVHT1lKxVI55aOrKm1EfUVZd3fI0WkqFLCR%2BvI50HC3tnfFCtGzflDknTpirO5pbeW96LzeIHVFsHrC7qKyf39eEBFJfMlE097641Nbg4xW4E17Un9Wik2EBBoC30Qv9u5ApNgTFFzNQiF7xArEGER7tgqUfEzME%2BAmbtFSLt9cCByHcZ7ZBTF084GM08b%2B7FZuzYMTqc9N05zpk1IX5GWyE8cEzNVE87MeI%2Ft%2B7lRV9y%2BWAInYp8PQnozMnjUWrTCcHKsDzW2EKGkxcpAmc3NVwfydESlOpVkiqJloVTii8eldY6lY57eh6i5S5rtd312JQ2Dv1QHjHauKi%2FMBeMUyN8VXLznC76ZYR7hLAZySUXT0GVyyaE8lyvidRlHrKzc%2FLC6%2Fz7rnlsRGGrVYNyD4Mxu2lBwrkfUB92Flpkn9seeQHuKj%2BtBioaDGij0pwOVSZSbZkisDJJI8iyzjShCf0FtEeZnNCtDVZNDj9ZenUEmREa3AUPSprT5RbqGfGr0hE725TfIs0ZCuCLlzyFmRahRdi9PCHg2mHbhNEWCuJ%2BXjVtSD2PxL8KAYzqEpdGmVggLMJbWnsIGOqUB5yS8NgHnI1gjx6jMeH069thT82FTy73ZjIZEIQ4qL1xs7AMDJSRwUiG0TQW4RMr17ebMMkn4JO5XGlOxW7zQofQKnv9AuwoYfSiPWTkwYT7b918%2FXRvQjZXBhSjllVJw8A53r4PHCRlCgbFWkmx8jPCFz1sQC8F70qJ8TSIfzlaCd4lYmcNxE93fw2EkJBJU16%2BKK7xQK4JB16BUDFeR0KiGcVos&X-Amz-Signature=818c31db44e02d989a51fc9d6f2aa7e5dfd61a8dda9a2735c1cc224cacf5f610&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
