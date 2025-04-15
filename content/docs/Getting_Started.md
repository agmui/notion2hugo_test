---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625BIOCHF%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxCwXUH4gv2V2rTkP0qiDDez1Vhh%2B4Nl4vrMK0H8ZsZAiEAxc8pbfz3SmgjDl76BHyTObsKpGrb48VpWoUwdyhKLMwq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDCa66bhqaVBvi%2Ffh4CrcA%2B38mj3wqJ9w%2Fl3Bmqtd2B1n5FEB0h7k5iq4GAjRKbJ0pP6Hx8YZd0ax31%2FMC01yzoS7jug%2FgSno1goDYCGYj8azuMIA8YBGp1E%2FRQ%2BCaADGK921z8rHcAbQDUMfKGtaysGJ4AXCi7FevcuYI1dXJxGPaq9wYzRJw4SoiSbBr2CO3BJN7KjyrUv8zSfzNy3NX8o2l0%2B4ld%2BknkrDOr6TQdR6nhHeBlwJIlJ6kem1o1VL2%2BQK7x%2FzqiNYnQq1bmcuBc1YXB3hEvzU4XicRawVw4NomyHi1JDVYde7DbLlM99QiCXQfdMSX%2BYczEgrpeGKlqsz66naWnfK%2Fvz7pFFsXLAB9m7MVMdqnVcYt0FPAyqaOALIS7DtlGxnrAXF0twLxBdf25XeqLn5CYwV78BG1ueN3bVmgCHkxOyle7P%2BArryWqh1vb5hCMvehYYPmlTGsM%2BnEEn2Q2VH9DgeJ0ZoQFUB0TBPEQKbJfAIjYDHz2Y2AxkgBv7JS53KDaK%2BIDGlXqarnKY1PgAY%2Fzg6Vzy%2FZY3Lqbow3ArKJvG03nwYncGwwIns5CCDJxlmMhoZfMhTAsUZvTwlfkCnSom2%2BI3roxJta15MdA2JtHZM9fo5nzzTiE0uc8pV3aue0A3YMIrR978GOqUBF3ocjKuiZlDcpIwxwe8985Afs3wZOxLZ12jOD1CZ5OghG9JnEjEdp2qaajt%2Byff0NdC3eGViacjOwLKf%2FSGIN5evllVK2PS%2F%2F0tP7F8xj7WKyyni7jhwk1q0qNrLS3xRTYttmjZ0ifxoZNcFqHAldSLhOa5nGr9Ve%2BasDajYuYHcw0VIYUchupk%2Bhaabyvmw%2BdygTb%2FDcF5WRSraFfZX7OdrJZSp&X-Amz-Signature=1ce348e50180e2a1342db4aa9d8459e84a614a18cbfaebe4de9bff76b4c06707&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625BIOCHF%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxCwXUH4gv2V2rTkP0qiDDez1Vhh%2B4Nl4vrMK0H8ZsZAiEAxc8pbfz3SmgjDl76BHyTObsKpGrb48VpWoUwdyhKLMwq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDCa66bhqaVBvi%2Ffh4CrcA%2B38mj3wqJ9w%2Fl3Bmqtd2B1n5FEB0h7k5iq4GAjRKbJ0pP6Hx8YZd0ax31%2FMC01yzoS7jug%2FgSno1goDYCGYj8azuMIA8YBGp1E%2FRQ%2BCaADGK921z8rHcAbQDUMfKGtaysGJ4AXCi7FevcuYI1dXJxGPaq9wYzRJw4SoiSbBr2CO3BJN7KjyrUv8zSfzNy3NX8o2l0%2B4ld%2BknkrDOr6TQdR6nhHeBlwJIlJ6kem1o1VL2%2BQK7x%2FzqiNYnQq1bmcuBc1YXB3hEvzU4XicRawVw4NomyHi1JDVYde7DbLlM99QiCXQfdMSX%2BYczEgrpeGKlqsz66naWnfK%2Fvz7pFFsXLAB9m7MVMdqnVcYt0FPAyqaOALIS7DtlGxnrAXF0twLxBdf25XeqLn5CYwV78BG1ueN3bVmgCHkxOyle7P%2BArryWqh1vb5hCMvehYYPmlTGsM%2BnEEn2Q2VH9DgeJ0ZoQFUB0TBPEQKbJfAIjYDHz2Y2AxkgBv7JS53KDaK%2BIDGlXqarnKY1PgAY%2Fzg6Vzy%2FZY3Lqbow3ArKJvG03nwYncGwwIns5CCDJxlmMhoZfMhTAsUZvTwlfkCnSom2%2BI3roxJta15MdA2JtHZM9fo5nzzTiE0uc8pV3aue0A3YMIrR978GOqUBF3ocjKuiZlDcpIwxwe8985Afs3wZOxLZ12jOD1CZ5OghG9JnEjEdp2qaajt%2Byff0NdC3eGViacjOwLKf%2FSGIN5evllVK2PS%2F%2F0tP7F8xj7WKyyni7jhwk1q0qNrLS3xRTYttmjZ0ifxoZNcFqHAldSLhOa5nGr9Ve%2BasDajYuYHcw0VIYUchupk%2Bhaabyvmw%2BdygTb%2FDcF5WRSraFfZX7OdrJZSp&X-Amz-Signature=4a61435b6124473dd6d1313b53937145858db6b1ca7d2d5b794215c30d1e4d0d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGMY2SNP%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDw8gV%2Bj9VHU91rzcebT6CoH345OjLrV6hnrltuUJkRcAiBh%2FY8WsZ8Tp28vg8yRPGJnNeXBh7iv0CzuXAZlndcpWyr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIM1%2BmmuA75jij0zv4ZKtwDcGwbm2FB5ZcueUsEmyvd2GH8gFjjXdEKv%2BZRbuVSbiysJydzUuHFhooIbEgOE14t2c9kAawUVPKuxSPf6nzPwv0Yef5cH8WWQLTOiL5B%2BaXyIdUeYWKE07bVltCoNlOdlQ4B%2FRfagDSmsrxQMJRqNREN0Qlt2IaasVo4IoDfyWPYP0QxkMIvO%2FCIyYOmk1RWji04vRj6zkF9Xpex51%2BXpq9BGachn1cvcBRIKGphBZ95hIkYeIFB%2FJxDi577nZROVIL84TyRtxy7GZOAVIiVVB43d4dgItrG3mrAtlIepHqh55Kxbx6f4xHn%2BJmNRhbiz21X%2FlHxnAJhU5XTXysvH%2Fky%2B%2BeDdfhjElH%2BOxsWozYJVaS5xyVIktmNF2VvIzhxf3YEvEJtffhzGrntomp7jYOvCH1LDSnjxZF%2FBzSBMix2ouFpllbZnsJpqWaqbYvk3GFtG291KzWC0C1FUHCp5EJKOiuWdxO8lcu5%2Fz%2FUpT%2Bl5iNxu%2Frp6T2%2Fp9OSPZ0Lx%2BSulc4sn04DcFw%2Focoi5bkUo9Z1%2FHu3ph8INVslxcczmoVeyPF8J%2BWeRorjZlVWJSLSPhT3Bc5T7V%2BUQjIIrqeFLn1qWmGWIAVQ0wDVZQUgsroAnDuBMfgeiRUwmtD3vwY6pgE9GndRcB5r6PElBylHRgyJ7chlZInreK%2BBn4Jl9qv5UL8fwjx2uQ%2BaQIv54YiFeBMzLLbrkHnMLqsBXK4hH47%2F4JwGPRg5tzd0sP0vQLUj1HESOpcCWMP6xADhGAqHL7drneiA2r2r32A%2BA3N2m0SpaiZptcTIwSi%2FjLV4VKKhD%2Bk6ZPZHJrcqWS%2BrzfqlfBywbziOW34QwYifm98fQIFhigpYZa79&X-Amz-Signature=0e4c3e09d144471b65191d73de019926d3b4acd51dcb52fc6869a0b22532155b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MFP6XV2%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyUyx4IpTNmUD7g7CjkQIb7HthMFJBccNh%2BotWm7AuXAIhAPwxC5ogE1R4HpVRBTxEPGbp7Cho9mtCXKDX4MU3fqAxKv8DCCYQABoMNjM3NDIzMTgzODA1IgyE9O6x1%2F4b3BH371kq3ANhnK07Y6vqh5ZFeJJmeQhQsgdoAm0URiIU97%2BREt7HzhSBQbmhmxR%2F90jIhDlfl%2FLpDTqJpqDSLazVThhSigyTNWzrUeeUG7FJJRfbFfJy%2FoVnuHxIpMxMpKuFZCMbjzBO90AhudM4MMzCxBGIcR57VHEZDHCeOuXFZ1lIV8DL3EIipEQN9LGeoQwOCYyVdGIx31J56QanagWnkdah5vFR8rKM%2BA1lK5FOs4zk1hdFuDJUTiowr8yfBwYkkdOVqN9i4ArGwZ3v4gjbKFtdevIx8x0nE%2FycCYXz3FCPBLxbj3a5g%2B1VE3WcvOMwqu1x5T14xzX9Zv2jgqkEOtfEMnnE%2Fq%2BJlaMMiAY98aCy2vP7QNCnghLWc4YFzxnPWmnT0XL9fU5o3D8LGbjSYE8ab9XzToCs2dN%2BF5rE4tUOL0xVbNLtLwJW0zLLneasVSXMknayViqPQU4lwYJ8kEudFcbclciTGaZbQrJdJC6gJQNjh753R8zpap6%2BJadSq9lghQucENSHsbf6o0x9newX8RSml5zE6zUk6ZiLVoTWWjlmiX7snt0IfNoPTPYo21fEvvsIbdYjQlWVw0T6bwtquY12iR%2FAzbeSaDOu36Tmqh%2Bn916HWlbJU6Rw8dI9yTDd0Pe%2FBjqkAUHJwpse%2Bq42%2F9C4COnKpQeC4GEHEzM4gSHyJybxEzzKqTa5Pf%2BI0xHnMR3aSzfsjkjJfKsv9xN2B1xK7OT4C%2Fd5ukBVuLYaZaeDQvCFoAcpZ%2BBLAbvQC0bOBrioHxUkjzdGun6csMKrGAXsNIrPCXaE2i4Uz3E%2BHI6yEkIW4Oc%2FZ%2BA01uKs9fhjeTxAsDhS7Cpdvwxuf8F62V6QH2UKi4Id3CbZ&X-Amz-Signature=b00dbbefaad4ca5267449163c457365695d6bceecb7b9559fb6695dfbb49ad64&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625BIOCHF%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxCwXUH4gv2V2rTkP0qiDDez1Vhh%2B4Nl4vrMK0H8ZsZAiEAxc8pbfz3SmgjDl76BHyTObsKpGrb48VpWoUwdyhKLMwq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDCa66bhqaVBvi%2Ffh4CrcA%2B38mj3wqJ9w%2Fl3Bmqtd2B1n5FEB0h7k5iq4GAjRKbJ0pP6Hx8YZd0ax31%2FMC01yzoS7jug%2FgSno1goDYCGYj8azuMIA8YBGp1E%2FRQ%2BCaADGK921z8rHcAbQDUMfKGtaysGJ4AXCi7FevcuYI1dXJxGPaq9wYzRJw4SoiSbBr2CO3BJN7KjyrUv8zSfzNy3NX8o2l0%2B4ld%2BknkrDOr6TQdR6nhHeBlwJIlJ6kem1o1VL2%2BQK7x%2FzqiNYnQq1bmcuBc1YXB3hEvzU4XicRawVw4NomyHi1JDVYde7DbLlM99QiCXQfdMSX%2BYczEgrpeGKlqsz66naWnfK%2Fvz7pFFsXLAB9m7MVMdqnVcYt0FPAyqaOALIS7DtlGxnrAXF0twLxBdf25XeqLn5CYwV78BG1ueN3bVmgCHkxOyle7P%2BArryWqh1vb5hCMvehYYPmlTGsM%2BnEEn2Q2VH9DgeJ0ZoQFUB0TBPEQKbJfAIjYDHz2Y2AxkgBv7JS53KDaK%2BIDGlXqarnKY1PgAY%2Fzg6Vzy%2FZY3Lqbow3ArKJvG03nwYncGwwIns5CCDJxlmMhoZfMhTAsUZvTwlfkCnSom2%2BI3roxJta15MdA2JtHZM9fo5nzzTiE0uc8pV3aue0A3YMIrR978GOqUBF3ocjKuiZlDcpIwxwe8985Afs3wZOxLZ12jOD1CZ5OghG9JnEjEdp2qaajt%2Byff0NdC3eGViacjOwLKf%2FSGIN5evllVK2PS%2F%2F0tP7F8xj7WKyyni7jhwk1q0qNrLS3xRTYttmjZ0ifxoZNcFqHAldSLhOa5nGr9Ve%2BasDajYuYHcw0VIYUchupk%2Bhaabyvmw%2BdygTb%2FDcF5WRSraFfZX7OdrJZSp&X-Amz-Signature=08e82db919d153f2b23cf5da08631e782e43e3e40135701529f9387fc342b9e2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
