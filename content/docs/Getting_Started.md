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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642YRWJF%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUzsl%2FHoVOFSDk8Azf8LW1Qpi6Kpa7epGqJgIb6bnIKwIgRattF9Dp3SYsmb5o26A5mXNYSpocFZ2r1eejZTndbtkqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtydVNzIlMVCncYKCrcA902fVbA1cksV4oGmRd%2BnUFmTXwrhqTFjy%2FYidRGT6a5uFdq9dAqEjlhakzBEU1FQIRtiDLL9XzjEZfZlqelrPBD0Afw6iIPAiEjqTZy4eJtlTEk6p3%2FcYXuI%2Fio5BxaBYkT81MX%2BJDKkrEbMtz%2F%2FI%2Bts4aCikhzxhfK7whRRDGsXtUkX2aQPnxcGtOtRRj%2BK26Lk52yXNNTzeSQMoAoEl7PCI8YXc4YFQoa5bX7UAzHYcHhJU%2BrUbfpQ%2BDayOXAj3E2A429NxtKA51gvDR3jXqHrJcRfn3UlUbqHo0NVqVlIlwXpCllG87pYgDcBHLgz%2Flgyhy5BUzEPgtMb%2BzaJZwazoXQ1VJdzbkvkX%2Fg7AeBe%2BVvFUA5ULqSXY7Me5zAOWguL6uFAQBu%2BrEStO4JyryOYRdh0Sjlmb7GStRWpN2sxCxpknjSdmqQ1JADMQScKk7Sk5Ja5b1hlDZSvgi%2FpHqgkVq1%2FxN5cBuuV6MiKi1nKznwIfvVFUGQgxPKYvFLMnuqqJ5%2FNn5BWI9nKg9CL8wnyUEchjxZT9xQmdjNT0E8ZhvPimlb1teQa71vbvbgS43whsbE7VwFVoNhLRbAnrka1gCUCINVBygkDK6GFY9OyNWRXY8%2BbIY2r42%2FMP637sMGOqUBY8EvQpUY6PSaOzRQc71MEIDaD84YQe9dXsyCtXq59AIrMtu9ElnX8zZqE%2BwFN4fw0UQ9w63OAbQiURgGG8iD6u%2FxNhH%2Bxgo3yvJaAOKTNod%2BGrsG4qJaxTbREVPSc6cGS2Fh8nLSPFWM6m0SDt4twBeWuG3NHtGBLC58snK1P5lByCWO2fa6SeEjIetPzRqWvZw0Lb8TrruZSXCup3S4%2FWebBD4B&X-Amz-Signature=d4b7dd491e4251198a585321ebc93e25aa0b2bb3468cdfab8c9ccc0291fda4ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642YRWJF%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUzsl%2FHoVOFSDk8Azf8LW1Qpi6Kpa7epGqJgIb6bnIKwIgRattF9Dp3SYsmb5o26A5mXNYSpocFZ2r1eejZTndbtkqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtydVNzIlMVCncYKCrcA902fVbA1cksV4oGmRd%2BnUFmTXwrhqTFjy%2FYidRGT6a5uFdq9dAqEjlhakzBEU1FQIRtiDLL9XzjEZfZlqelrPBD0Afw6iIPAiEjqTZy4eJtlTEk6p3%2FcYXuI%2Fio5BxaBYkT81MX%2BJDKkrEbMtz%2F%2FI%2Bts4aCikhzxhfK7whRRDGsXtUkX2aQPnxcGtOtRRj%2BK26Lk52yXNNTzeSQMoAoEl7PCI8YXc4YFQoa5bX7UAzHYcHhJU%2BrUbfpQ%2BDayOXAj3E2A429NxtKA51gvDR3jXqHrJcRfn3UlUbqHo0NVqVlIlwXpCllG87pYgDcBHLgz%2Flgyhy5BUzEPgtMb%2BzaJZwazoXQ1VJdzbkvkX%2Fg7AeBe%2BVvFUA5ULqSXY7Me5zAOWguL6uFAQBu%2BrEStO4JyryOYRdh0Sjlmb7GStRWpN2sxCxpknjSdmqQ1JADMQScKk7Sk5Ja5b1hlDZSvgi%2FpHqgkVq1%2FxN5cBuuV6MiKi1nKznwIfvVFUGQgxPKYvFLMnuqqJ5%2FNn5BWI9nKg9CL8wnyUEchjxZT9xQmdjNT0E8ZhvPimlb1teQa71vbvbgS43whsbE7VwFVoNhLRbAnrka1gCUCINVBygkDK6GFY9OyNWRXY8%2BbIY2r42%2FMP637sMGOqUBY8EvQpUY6PSaOzRQc71MEIDaD84YQe9dXsyCtXq59AIrMtu9ElnX8zZqE%2BwFN4fw0UQ9w63OAbQiURgGG8iD6u%2FxNhH%2Bxgo3yvJaAOKTNod%2BGrsG4qJaxTbREVPSc6cGS2Fh8nLSPFWM6m0SDt4twBeWuG3NHtGBLC58snK1P5lByCWO2fa6SeEjIetPzRqWvZw0Lb8TrruZSXCup3S4%2FWebBD4B&X-Amz-Signature=0cb6d7e9b74b5b5a50df57308ed5c127f512b62e616f5efa6e50550b44e372d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642YRWJF%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUzsl%2FHoVOFSDk8Azf8LW1Qpi6Kpa7epGqJgIb6bnIKwIgRattF9Dp3SYsmb5o26A5mXNYSpocFZ2r1eejZTndbtkqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtydVNzIlMVCncYKCrcA902fVbA1cksV4oGmRd%2BnUFmTXwrhqTFjy%2FYidRGT6a5uFdq9dAqEjlhakzBEU1FQIRtiDLL9XzjEZfZlqelrPBD0Afw6iIPAiEjqTZy4eJtlTEk6p3%2FcYXuI%2Fio5BxaBYkT81MX%2BJDKkrEbMtz%2F%2FI%2Bts4aCikhzxhfK7whRRDGsXtUkX2aQPnxcGtOtRRj%2BK26Lk52yXNNTzeSQMoAoEl7PCI8YXc4YFQoa5bX7UAzHYcHhJU%2BrUbfpQ%2BDayOXAj3E2A429NxtKA51gvDR3jXqHrJcRfn3UlUbqHo0NVqVlIlwXpCllG87pYgDcBHLgz%2Flgyhy5BUzEPgtMb%2BzaJZwazoXQ1VJdzbkvkX%2Fg7AeBe%2BVvFUA5ULqSXY7Me5zAOWguL6uFAQBu%2BrEStO4JyryOYRdh0Sjlmb7GStRWpN2sxCxpknjSdmqQ1JADMQScKk7Sk5Ja5b1hlDZSvgi%2FpHqgkVq1%2FxN5cBuuV6MiKi1nKznwIfvVFUGQgxPKYvFLMnuqqJ5%2FNn5BWI9nKg9CL8wnyUEchjxZT9xQmdjNT0E8ZhvPimlb1teQa71vbvbgS43whsbE7VwFVoNhLRbAnrka1gCUCINVBygkDK6GFY9OyNWRXY8%2BbIY2r42%2FMP637sMGOqUBY8EvQpUY6PSaOzRQc71MEIDaD84YQe9dXsyCtXq59AIrMtu9ElnX8zZqE%2BwFN4fw0UQ9w63OAbQiURgGG8iD6u%2FxNhH%2Bxgo3yvJaAOKTNod%2BGrsG4qJaxTbREVPSc6cGS2Fh8nLSPFWM6m0SDt4twBeWuG3NHtGBLC58snK1P5lByCWO2fa6SeEjIetPzRqWvZw0Lb8TrruZSXCup3S4%2FWebBD4B&X-Amz-Signature=69d5a78e870f83cd17a2a4efc2f54088e9afc71f59443f23fd108ee6afdb25e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFRCVDYJ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtqo%2FGD%2Bx5M4mMkJL8HfhCnLliLLpjlV3eam14fIiEWwIgVOmSsUDCPWcfbtqd1V78P%2Bawv%2B8ihrfa4wBax8V1Xw8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZUOveSHzEynIXgoyrcA956pnTRbV0h7YkwtSVlW1hAe8uVIULy4OYHvqz6yesWHlEenaRMwhcnxE8xzOp48fNiw6j%2BOCvyUVlreR%2F4asSCjvSQFNV2lnJFa%2BRM0cPePuoiq2mpLo7W0y2BIPYVO8NrM%2BdV6DaTWikg%2FNVboPOEgMuNgOUvgOd7R1KkKu9Jb5AdWhEetvuWvqBxYhZByEZ16Pp8XWClVBCOiXrM1j1ATY2lL3dM0BwyqK0ni3QASrIOArhH95CVtL8XCy%2FpkMvtZV7gcP7yvLhFaJv8JZ0%2BhcF%2BbKQI7wLPJrU9Gxle9kid61pcnUwHr59OoP69ZvLu69Yb1xxEj3mxlYvVCa8FCP5PecVcckGedkqcgyCM5vwxMKQDpFhJtmTpXwZwTqPQLVDNjcT834VAfd3OBFlsJm5a4QsSRfJJZGHidXiRgNBSUVSrEMrW9XkFE547ZV%2Fkm2u07CmT1mUArVEjWbjVMLAem0uLSXiklXoePG9tlgghp%2BI1YmSOVeI91C%2BMOrsPcOt%2BGTfA5EU%2FZJPDKSiIuRrgtGbtlQjurK7pzITw%2Bcdn%2FI1loXlCiqkxNZ93BzzHCc8zLHc9ILWXYmTHx0%2F0L0pvn2%2BfdXbOWqCdxuZorw21s3vSuXMR2GJgMMe47sMGOqUBh3xSAT9hdbX9R7rdHRnO2MsO08D3zamiEbgVDDvTxuOfQhPc%2BDle0bvKJKkCKn5OVHnLAmSrvDSt9xSIPKJNgbIFgm0JBKa1PP%2BPh4ZI8McYgOEZUfR%2BzqS8LrO7%2FSk1kDWAEqFgKJfKsqmhfLLC%2BB%2F4f%2BWUg7FM3Od%2FL1wKSx1NANPqwlSR1wr9hF8gL%2BbD2IqLe5QPvoxuN7J25e8GHEAUKQ%2BA&X-Amz-Signature=6d4c36f16f72a21e917e826aac1edbd7027fadb44575b427b6f514e876f5e504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XTNOVXO%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQlac4VS%2BQW3UBWVE6t%2FwScpcqfZUbum0Law%2FnifW17AiEAtezM9hTyPvG5xWaLcvm8J0cCWmZllszjDZ0slmSQn3IqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqlkoWIni1tiSA%2BmyrcA6rHdGUESeLKO%2F2QUSnZWVxbW3hp9vQzqrn8wb4Emx72AOkTA6wgAipjmp9qa1ch7Kdb8CxPxJ%2FCoanWAWfsS7DOt7RmPonFYDKZhzpfBuHEx%2FR50VCJg9wzFfCO7qk86lF77zjOoF9cczzJdz9EC6ypLORrOCfglONTiZCEWYM0ZllmEh64slhBPYOdyhWgb9htg9mLN0NHRxhGXhj1%2FoMsZS68ZqbLDzFAdXsuDiDZsp9a2yjYL%2B0Vk8Wj8tFGhCipzLQQepOBF2tD6uF6h8pVGSU9eBJtD0c4i02bMTYzLbD0xURuJK1GMN9o8B2%2FH%2B%2B%2BdRX3VQuJUwVZPE4SdVK9wxJvg4%2FZp4xROjDArP37M6uUeTvO8LbLf43zXRUtTQ5fwhN%2B32FVdYuFVznz0cnDUEctG6gxBiEZUkeHKTZZeqBIdtNgy0JKURi24kVkq1fRKsr5z%2BjC7tDsDbfRDDkE1XXyckLJsIQOZldspfFBb0MHILFm0B3deyFzIdReR3RtZg87yJh7MkLxrFJQkJ9TTij%2BelKkay9be%2Fh0nw1h6UxyolCq8Yr%2B7BAtSSgRQrFdZrxMl8lPTMr%2BSP8epMpM8%2F0QldmK6SN8VH7QudtEXvUg8Y32h0szo1T3MKW47sMGOqUBaWXvDpPlZUewwAJ4amvE0Wlu2E8pVpnT0l%2BRef7RV8vBWOrZpcBBLlJjgJiQNEDvUO3mVBZh6pOTH71LqXBBIjlh80wkOEhQp9NIuOb8z59i4LL%2FXsYKRLTcgMW%2BdJzdv%2BEW41QbWygybWnKQi0soEjStt78Gn7J9fxB4DdZZp3LncfGvf7hYjsokomQZc1v%2F7%2B5GSIHAFBQrxsQ6GBz9XoUe2uT&X-Amz-Signature=ecf5cf102d9fb76ca5ffbdd95d0eaf348c024e692aa14e535cf17d5ed2174d36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642YRWJF%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUzsl%2FHoVOFSDk8Azf8LW1Qpi6Kpa7epGqJgIb6bnIKwIgRattF9Dp3SYsmb5o26A5mXNYSpocFZ2r1eejZTndbtkqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtydVNzIlMVCncYKCrcA902fVbA1cksV4oGmRd%2BnUFmTXwrhqTFjy%2FYidRGT6a5uFdq9dAqEjlhakzBEU1FQIRtiDLL9XzjEZfZlqelrPBD0Afw6iIPAiEjqTZy4eJtlTEk6p3%2FcYXuI%2Fio5BxaBYkT81MX%2BJDKkrEbMtz%2F%2FI%2Bts4aCikhzxhfK7whRRDGsXtUkX2aQPnxcGtOtRRj%2BK26Lk52yXNNTzeSQMoAoEl7PCI8YXc4YFQoa5bX7UAzHYcHhJU%2BrUbfpQ%2BDayOXAj3E2A429NxtKA51gvDR3jXqHrJcRfn3UlUbqHo0NVqVlIlwXpCllG87pYgDcBHLgz%2Flgyhy5BUzEPgtMb%2BzaJZwazoXQ1VJdzbkvkX%2Fg7AeBe%2BVvFUA5ULqSXY7Me5zAOWguL6uFAQBu%2BrEStO4JyryOYRdh0Sjlmb7GStRWpN2sxCxpknjSdmqQ1JADMQScKk7Sk5Ja5b1hlDZSvgi%2FpHqgkVq1%2FxN5cBuuV6MiKi1nKznwIfvVFUGQgxPKYvFLMnuqqJ5%2FNn5BWI9nKg9CL8wnyUEchjxZT9xQmdjNT0E8ZhvPimlb1teQa71vbvbgS43whsbE7VwFVoNhLRbAnrka1gCUCINVBygkDK6GFY9OyNWRXY8%2BbIY2r42%2FMP637sMGOqUBY8EvQpUY6PSaOzRQc71MEIDaD84YQe9dXsyCtXq59AIrMtu9ElnX8zZqE%2BwFN4fw0UQ9w63OAbQiURgGG8iD6u%2FxNhH%2Bxgo3yvJaAOKTNod%2BGrsG4qJaxTbREVPSc6cGS2Fh8nLSPFWM6m0SDt4twBeWuG3NHtGBLC58snK1P5lByCWO2fa6SeEjIetPzRqWvZw0Lb8TrruZSXCup3S4%2FWebBD4B&X-Amz-Signature=bb2013736aafa41927bfa20e8af2442673d5cff4e83a9f9c6c022b91bb511f01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
