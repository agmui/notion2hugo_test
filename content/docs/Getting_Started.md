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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHORDIJ5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCoc0zY8ng23HpqQ5J1lGfg5zKIv%2Bl11Uiw8WGy2kOuxAIgSM6RnoHLA9OqPSUdgJ62HHa%2BokQflll%2FKdn4mWLvlekq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDOZxHgQsCJhny%2FDiaircAye%2BacqEChtRoTHwox6467K2Lezd9t9Cxfv%2FTTr5aBQYhuh5Mowv5yiqNg6oUylj6%2Bp%2FHHQf2Zm9JTjO3I%2FB1SS89vidD5P2tU4I1Dhyhwfyv4zr9ox515Nbmk8r%2Fchgd%2BEpTRnZvcMYfvRQDT4iQqPkkBu8TkvDyCucPZX0FsccPf3xHY%2FERgMjJFIhfd0nuYQkvjNZbDJITUNThbi%2BAcVFLuDHudFRfhSOzSKvpMWhT5eE7fO1xTVAjMeS1KhXEv1pdh8HSbesw2MBIbwFU1%2FVYhBBeKGnRhayTnY8BnbRYPic3seb%2FiEEgZ%2BPVV9YSLB%2FwrGY5fA5zt45UyUyu6Rca5kPt2rhI9Y%2B6thv1mCKLrEit7QkCuCKvNI9zl96PH3uX6zFG%2FJxeLc%2BRRjlHba8DdMzLo3Ye%2Fpqa2F6hsSaH4DEImN8%2B0lq%2FnmVLAjYpwX%2BMDzfC0LQzdS9RzjGrehZj4OPKmZLC41Y9bOYRyl2sbqf1EvKEMwBmJsUnc4uRQLUeFpPTUu5auUtDQU2ihVyXRVEoS2j5FkoG7TYqZFXlmZZR8SrPzkPNes8FZxEZWiNBY6hjX5PUOu7mBjC0lUATpd4VIxMt4Hb0YA41nQVMSJsc8QA2FyiIorOMOuTtMIGOqUBzA6kGSzxsuCWh3O%2FW6syhBPG9rdhHUj%2FHDrQZQNpr0%2F9CtOEVyTnaOmqS4jxshwaIVI8ZYXQCJPOjoF99OAVfPl0QeiU8GbhtvZ4FfhmiGKYIxEVZxh1%2FkxlpxWZcemCvdJbBp7tHzIcYKNgaluU56FMtBQdYbSUybqpHmreKP5YGcn6Q1ujGZFDg%2BXbe7b%2FxeToKWpZek7uQbDfG6IQ19ZaXCFc&X-Amz-Signature=846dc84d1b160c4354a41da41136bf164bf313cda956d2454b2fbe615e230cd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHORDIJ5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCoc0zY8ng23HpqQ5J1lGfg5zKIv%2Bl11Uiw8WGy2kOuxAIgSM6RnoHLA9OqPSUdgJ62HHa%2BokQflll%2FKdn4mWLvlekq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDOZxHgQsCJhny%2FDiaircAye%2BacqEChtRoTHwox6467K2Lezd9t9Cxfv%2FTTr5aBQYhuh5Mowv5yiqNg6oUylj6%2Bp%2FHHQf2Zm9JTjO3I%2FB1SS89vidD5P2tU4I1Dhyhwfyv4zr9ox515Nbmk8r%2Fchgd%2BEpTRnZvcMYfvRQDT4iQqPkkBu8TkvDyCucPZX0FsccPf3xHY%2FERgMjJFIhfd0nuYQkvjNZbDJITUNThbi%2BAcVFLuDHudFRfhSOzSKvpMWhT5eE7fO1xTVAjMeS1KhXEv1pdh8HSbesw2MBIbwFU1%2FVYhBBeKGnRhayTnY8BnbRYPic3seb%2FiEEgZ%2BPVV9YSLB%2FwrGY5fA5zt45UyUyu6Rca5kPt2rhI9Y%2B6thv1mCKLrEit7QkCuCKvNI9zl96PH3uX6zFG%2FJxeLc%2BRRjlHba8DdMzLo3Ye%2Fpqa2F6hsSaH4DEImN8%2B0lq%2FnmVLAjYpwX%2BMDzfC0LQzdS9RzjGrehZj4OPKmZLC41Y9bOYRyl2sbqf1EvKEMwBmJsUnc4uRQLUeFpPTUu5auUtDQU2ihVyXRVEoS2j5FkoG7TYqZFXlmZZR8SrPzkPNes8FZxEZWiNBY6hjX5PUOu7mBjC0lUATpd4VIxMt4Hb0YA41nQVMSJsc8QA2FyiIorOMOuTtMIGOqUBzA6kGSzxsuCWh3O%2FW6syhBPG9rdhHUj%2FHDrQZQNpr0%2F9CtOEVyTnaOmqS4jxshwaIVI8ZYXQCJPOjoF99OAVfPl0QeiU8GbhtvZ4FfhmiGKYIxEVZxh1%2FkxlpxWZcemCvdJbBp7tHzIcYKNgaluU56FMtBQdYbSUybqpHmreKP5YGcn6Q1ujGZFDg%2BXbe7b%2FxeToKWpZek7uQbDfG6IQ19ZaXCFc&X-Amz-Signature=7faad78cd971b490c1de62eab52c5e5d5f9cca48511767ee3ebd4135da982e6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHORDIJ5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCoc0zY8ng23HpqQ5J1lGfg5zKIv%2Bl11Uiw8WGy2kOuxAIgSM6RnoHLA9OqPSUdgJ62HHa%2BokQflll%2FKdn4mWLvlekq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDOZxHgQsCJhny%2FDiaircAye%2BacqEChtRoTHwox6467K2Lezd9t9Cxfv%2FTTr5aBQYhuh5Mowv5yiqNg6oUylj6%2Bp%2FHHQf2Zm9JTjO3I%2FB1SS89vidD5P2tU4I1Dhyhwfyv4zr9ox515Nbmk8r%2Fchgd%2BEpTRnZvcMYfvRQDT4iQqPkkBu8TkvDyCucPZX0FsccPf3xHY%2FERgMjJFIhfd0nuYQkvjNZbDJITUNThbi%2BAcVFLuDHudFRfhSOzSKvpMWhT5eE7fO1xTVAjMeS1KhXEv1pdh8HSbesw2MBIbwFU1%2FVYhBBeKGnRhayTnY8BnbRYPic3seb%2FiEEgZ%2BPVV9YSLB%2FwrGY5fA5zt45UyUyu6Rca5kPt2rhI9Y%2B6thv1mCKLrEit7QkCuCKvNI9zl96PH3uX6zFG%2FJxeLc%2BRRjlHba8DdMzLo3Ye%2Fpqa2F6hsSaH4DEImN8%2B0lq%2FnmVLAjYpwX%2BMDzfC0LQzdS9RzjGrehZj4OPKmZLC41Y9bOYRyl2sbqf1EvKEMwBmJsUnc4uRQLUeFpPTUu5auUtDQU2ihVyXRVEoS2j5FkoG7TYqZFXlmZZR8SrPzkPNes8FZxEZWiNBY6hjX5PUOu7mBjC0lUATpd4VIxMt4Hb0YA41nQVMSJsc8QA2FyiIorOMOuTtMIGOqUBzA6kGSzxsuCWh3O%2FW6syhBPG9rdhHUj%2FHDrQZQNpr0%2F9CtOEVyTnaOmqS4jxshwaIVI8ZYXQCJPOjoF99OAVfPl0QeiU8GbhtvZ4FfhmiGKYIxEVZxh1%2FkxlpxWZcemCvdJbBp7tHzIcYKNgaluU56FMtBQdYbSUybqpHmreKP5YGcn6Q1ujGZFDg%2BXbe7b%2FxeToKWpZek7uQbDfG6IQ19ZaXCFc&X-Amz-Signature=f76ccf290a92df5fbb90f292a1c0bfa0dbcc2d44febba25c9b244432e293b62c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPHUDNDS%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCICJQC4u5B%2FkSKKKaFdnU6E4DIOhUU%2FYobiyO%2FM1OVYUDAiBh5pGWrbsYnnBkKu4ExLStnCf5kKZC%2BLM7gZIUTvb22Cr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMN6G%2B%2F%2Fkb6iNlTc%2FvKtwD0udjlGwQcxypKeb0aGri%2Fx1Rd2AAn67v1TSwxGMYQepIFS3i2ucvI3wgrbvcm%2FBoidjNoFRjdLC09yT1q8Qzy7dSsZM8eOhi0rehjdJxatkwLBq4P6nbB4V5SptQU36nEmDjCSc7YEIs2E1PUQIR6uRTvon%2FVkze4mXHG%2FgU4F2q82Ya5iW9IFTpLBGBIakCr5AwDAOyIfeKegGy9bvnEPfA%2BO%2FFr0PLtTjKTEvs9nOWCPU1hRBW8C%2Fxh%2BUBszHGra%2FyQATB%2BJvAzVLf2poBpsLtVPNEZj3zWoYC9oAVO12tFlA1VsWy2cAxiaukzsJNt6UoG8RbV1M%2BmQ%2B%2FizR517ThTn0OIxNEcunuj3oPcTynYxHFrD9DKYNI%2BkCvfexIZaNE86e1r2%2Fs4cg5762%2BOsoGzeqQu8UY5zJZ47yGuHADYrd1ZP9arJ9DUFetmdoZ3%2F3tYGwGbfWRDkyY3n9fpQUJfThOaFM6a9daQuBlDPz0XajjAeCqZbDGz%2Fk6buNt5m6Ww1qwqjaJHFJ1XlnRf70y0ptpZD5HMBJNU%2ByAa8zQxKNevaIxKXvFnqnzFfYCtx9strLtJqsBwG2rAPhghx1zvaVASI1lLzEEcvBMK3Tajy6I%2B3izDY3ys6kw%2B5O0wgY6pgFkBfceCh7swXx0NUvkpQAjFw8qOeHPIhWwtwXTazqoF9xxhEhcaVgDy6oMk6L6MIk%2Fpo6tbKBl%2Fa0H4CfVT1phtJ%2B7cddTyu%2FWSirqhUYBLoWA2IIJUU5NDcLJe4wWb6osrA3NKlB6gKgb0Q%2B6lIIyH2sfLWUcfNOqQ76K4jnN%2BOL8HFvt4WD2g%2FDFzMJutQWbOdr%2Fu%2BmPcHnLKnaxnu1rvbfr%2BBJU&X-Amz-Signature=ae6e70f6d463465a267400d1fe084ad0728a7064197d08225bb59bfd4b1ab30a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVMUPENC%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQChG2zOgX%2Bo2fSliGm3ZuuPLSHoPRJBHkAmUHluTSyZBwIhALsnNtqTWFCjQzVt7u5W%2FntKxZ%2Fc8pachUaoX7inAan9Kv8DCCcQABoMNjM3NDIzMTgzODA1IgyMdeXN42QBj14vS%2FIq3AMm92Kzfn4pa69haeDy2sdp%2BEWMR3V%2B%2BptM%2FBY5NJXSaQYJ0iM8Mqx2gVSAkujgwGSACsv63JfP%2BfB3wQwW7u50vcPMZv%2B3OhrdRx5oN0Vc%2Fxqw8SuIItsj%2Fd13V4DXIeAEaWeyn4xWy39y9G7%2F7TKnTPYEW3ZeO6%2FatGmQa3oVfIWiXQMk0RnECNERt%2Ft%2FLyLnu8BCfI%2BoYfTaq6BUlUWtEW%2BRFBd8FoP8TRLukY0qwl3dGPMdls8R%2BMIwVp86aJpHghv4T72fnP2qltqjJPrr%2Fy8XXr%2BB2q9gUvt7hGQiO5F9%2FAWxZW0uhMEQlVXKe4QBtImMzpm1ECOJmFkhQd%2BlpnwBMGomg1XhdS93kSp7REgeTne%2Bri7l7yqBc3x7hgj0jga%2F4pnhRom9oeNuAb9evpTVvxeuf2baF0hAA2E8OMO%2FOtuRN4zTKIrNC8to1Ttd7vt6NOWvZ08BeEjyb6eOwYLeAJqJo%2Fhmgq5WQ2iK9TDdox8gNF4%2FzAwFO%2F371af8nISLNuf65Q%2BBCrRfiRb7x5cNoizPC0tb2Hr6Q7Wl2%2BmuiCC%2FM54%2FgEJCeOF0WAPs9mFfb9s%2BIuYiR2KfHusYD%2FhppgihphK8WrjLBop%2FtDStmgUf0X0A0e5pwzCnlLTCBjqkAT6jqn%2FWd2ptJ5DaPhl%2BDK7rH5XjeCDtNXjRO2qSBwe2T4Ies2og%2F52S4tss%2B36uMEqCg91SnL%2BU5FwNtBVRxq3Pukyviceo%2BP1ZuG6oIgD96C8SdYWRKBF5aVkes56KC%2FWJyoYTd591HumOvhYMZ0%2FMIqofpz7hivGUaylOImKNT0tEdU2rNmHnFe3%2FIakjvBXJSCpdL406lnQLOmFrlp9lvv%2BE&X-Amz-Signature=f98d43b3196eb06dd5a69913b54e74b00606056038b04f83b2fac4f7615195ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHORDIJ5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCoc0zY8ng23HpqQ5J1lGfg5zKIv%2Bl11Uiw8WGy2kOuxAIgSM6RnoHLA9OqPSUdgJ62HHa%2BokQflll%2FKdn4mWLvlekq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDOZxHgQsCJhny%2FDiaircAye%2BacqEChtRoTHwox6467K2Lezd9t9Cxfv%2FTTr5aBQYhuh5Mowv5yiqNg6oUylj6%2Bp%2FHHQf2Zm9JTjO3I%2FB1SS89vidD5P2tU4I1Dhyhwfyv4zr9ox515Nbmk8r%2Fchgd%2BEpTRnZvcMYfvRQDT4iQqPkkBu8TkvDyCucPZX0FsccPf3xHY%2FERgMjJFIhfd0nuYQkvjNZbDJITUNThbi%2BAcVFLuDHudFRfhSOzSKvpMWhT5eE7fO1xTVAjMeS1KhXEv1pdh8HSbesw2MBIbwFU1%2FVYhBBeKGnRhayTnY8BnbRYPic3seb%2FiEEgZ%2BPVV9YSLB%2FwrGY5fA5zt45UyUyu6Rca5kPt2rhI9Y%2B6thv1mCKLrEit7QkCuCKvNI9zl96PH3uX6zFG%2FJxeLc%2BRRjlHba8DdMzLo3Ye%2Fpqa2F6hsSaH4DEImN8%2B0lq%2FnmVLAjYpwX%2BMDzfC0LQzdS9RzjGrehZj4OPKmZLC41Y9bOYRyl2sbqf1EvKEMwBmJsUnc4uRQLUeFpPTUu5auUtDQU2ihVyXRVEoS2j5FkoG7TYqZFXlmZZR8SrPzkPNes8FZxEZWiNBY6hjX5PUOu7mBjC0lUATpd4VIxMt4Hb0YA41nQVMSJsc8QA2FyiIorOMOuTtMIGOqUBzA6kGSzxsuCWh3O%2FW6syhBPG9rdhHUj%2FHDrQZQNpr0%2F9CtOEVyTnaOmqS4jxshwaIVI8ZYXQCJPOjoF99OAVfPl0QeiU8GbhtvZ4FfhmiGKYIxEVZxh1%2FkxlpxWZcemCvdJbBp7tHzIcYKNgaluU56FMtBQdYbSUybqpHmreKP5YGcn6Q1ujGZFDg%2BXbe7b%2FxeToKWpZek7uQbDfG6IQ19ZaXCFc&X-Amz-Signature=1814c6e36ae59ccbdbb1e99fe1fd1856461404148741891bb5d38e128b79783c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
