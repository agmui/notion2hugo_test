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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642G4QXVM%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHu%2F4nlWnCRRevfcNx5gqx%2FwKDE2u4Oeu3VKsNoj6xLHAiEAsnxKfIZ%2FT0nCuuS3sunHo5PgoRPDPEFHNh84%2BBPg5nEq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDMGkXwtnhHbjccwGRyrcAzc6LtXBkjUcF1R%2BwpaDa381FX5iv7%2ByMnQxDUaMlHPiftnVNTXCWqE8bKDfOYsYm7e20nHYIoa156ZBE0tI2QO%2BAMv9fUnle9Bps8xMHOrKUk%2F6%2FApxZULwf3c2GEQhonqduANhXB68jZyVPjEGsO9QkfRN0ITCeXp%2BHQiJPVY7%2BM8i2HeB43rfjD99BCpwM1x%2BXVvKgYXFnlUT%2BdeXquzKY%2FqcXbDfFF8p8RYV0JJYSN%2BkpsiVBmdMo5lORSD8Z3mRVGhAo%2Fgbiil1SuovnpWYXFLood%2BJg8q1mQPqxTlgSMh6ZhYPM3qLpKLJ%2BEjXlmN6TA9aG%2FSNw8TGhv%2B%2Boi9mS3LZvSLqJibZXR1sEUVpdYRVO4gQciMtUfCzUGeH8DPNVPSiNcdvl7DqDqY%2ByTZrQ%2Bb4rHC%2FAf%2BC8Zz1rEXqToD1SfMS%2B7c1SDeeY6tDc2JaQGgP4PoUTMm2E3msDIVpQhF1iyqdFTBbrVczQW9YtjjVuVGphB92EWoSe0wKcRtK8nMrie7%2BGh8MrjDyaiSAM7RnCB8il5JhXAkmF9H46lnU55GED9HjN0RisCSDZYoAL2P0dNm17x2WLU9rk%2FjY6CHJQFNAatjdeb6Tlf9njMXOkg9eGwmSaQoMMLHK%2B8IGOqUBrzFTR%2BbZoQJbVU%2Bc%2BONsTZ%2BPjBs29PNaM2iBZdlVK5I9o417ttde9nNs2tETBReWBHd6AnEd4WtymiIa6hIDHhtzfA9g1X%2BDCtvMMyAfayT3iS9tdSgrEA%2BBBqiaDmif0Scsf322Ae0JEK1VuUJ0OVpcsUnq4IDX1E9feWC2XX8ss%2ByPNPm0RG%2FaGR0Xoh4%2BNZsmH6W0jUHBLH1LQ%2Fr7Edm758HE&X-Amz-Signature=48feb78440036171e672101f3f5d43f0e55596e6a70df42192710bee72ffd1f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642G4QXVM%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHu%2F4nlWnCRRevfcNx5gqx%2FwKDE2u4Oeu3VKsNoj6xLHAiEAsnxKfIZ%2FT0nCuuS3sunHo5PgoRPDPEFHNh84%2BBPg5nEq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDMGkXwtnhHbjccwGRyrcAzc6LtXBkjUcF1R%2BwpaDa381FX5iv7%2ByMnQxDUaMlHPiftnVNTXCWqE8bKDfOYsYm7e20nHYIoa156ZBE0tI2QO%2BAMv9fUnle9Bps8xMHOrKUk%2F6%2FApxZULwf3c2GEQhonqduANhXB68jZyVPjEGsO9QkfRN0ITCeXp%2BHQiJPVY7%2BM8i2HeB43rfjD99BCpwM1x%2BXVvKgYXFnlUT%2BdeXquzKY%2FqcXbDfFF8p8RYV0JJYSN%2BkpsiVBmdMo5lORSD8Z3mRVGhAo%2Fgbiil1SuovnpWYXFLood%2BJg8q1mQPqxTlgSMh6ZhYPM3qLpKLJ%2BEjXlmN6TA9aG%2FSNw8TGhv%2B%2Boi9mS3LZvSLqJibZXR1sEUVpdYRVO4gQciMtUfCzUGeH8DPNVPSiNcdvl7DqDqY%2ByTZrQ%2Bb4rHC%2FAf%2BC8Zz1rEXqToD1SfMS%2B7c1SDeeY6tDc2JaQGgP4PoUTMm2E3msDIVpQhF1iyqdFTBbrVczQW9YtjjVuVGphB92EWoSe0wKcRtK8nMrie7%2BGh8MrjDyaiSAM7RnCB8il5JhXAkmF9H46lnU55GED9HjN0RisCSDZYoAL2P0dNm17x2WLU9rk%2FjY6CHJQFNAatjdeb6Tlf9njMXOkg9eGwmSaQoMMLHK%2B8IGOqUBrzFTR%2BbZoQJbVU%2Bc%2BONsTZ%2BPjBs29PNaM2iBZdlVK5I9o417ttde9nNs2tETBReWBHd6AnEd4WtymiIa6hIDHhtzfA9g1X%2BDCtvMMyAfayT3iS9tdSgrEA%2BBBqiaDmif0Scsf322Ae0JEK1VuUJ0OVpcsUnq4IDX1E9feWC2XX8ss%2ByPNPm0RG%2FaGR0Xoh4%2BNZsmH6W0jUHBLH1LQ%2Fr7Edm758HE&X-Amz-Signature=92a9358be7ae78d49d8a7bc780971bef2b37f3598d06f7404d4741cde7a2907a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642G4QXVM%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHu%2F4nlWnCRRevfcNx5gqx%2FwKDE2u4Oeu3VKsNoj6xLHAiEAsnxKfIZ%2FT0nCuuS3sunHo5PgoRPDPEFHNh84%2BBPg5nEq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDMGkXwtnhHbjccwGRyrcAzc6LtXBkjUcF1R%2BwpaDa381FX5iv7%2ByMnQxDUaMlHPiftnVNTXCWqE8bKDfOYsYm7e20nHYIoa156ZBE0tI2QO%2BAMv9fUnle9Bps8xMHOrKUk%2F6%2FApxZULwf3c2GEQhonqduANhXB68jZyVPjEGsO9QkfRN0ITCeXp%2BHQiJPVY7%2BM8i2HeB43rfjD99BCpwM1x%2BXVvKgYXFnlUT%2BdeXquzKY%2FqcXbDfFF8p8RYV0JJYSN%2BkpsiVBmdMo5lORSD8Z3mRVGhAo%2Fgbiil1SuovnpWYXFLood%2BJg8q1mQPqxTlgSMh6ZhYPM3qLpKLJ%2BEjXlmN6TA9aG%2FSNw8TGhv%2B%2Boi9mS3LZvSLqJibZXR1sEUVpdYRVO4gQciMtUfCzUGeH8DPNVPSiNcdvl7DqDqY%2ByTZrQ%2Bb4rHC%2FAf%2BC8Zz1rEXqToD1SfMS%2B7c1SDeeY6tDc2JaQGgP4PoUTMm2E3msDIVpQhF1iyqdFTBbrVczQW9YtjjVuVGphB92EWoSe0wKcRtK8nMrie7%2BGh8MrjDyaiSAM7RnCB8il5JhXAkmF9H46lnU55GED9HjN0RisCSDZYoAL2P0dNm17x2WLU9rk%2FjY6CHJQFNAatjdeb6Tlf9njMXOkg9eGwmSaQoMMLHK%2B8IGOqUBrzFTR%2BbZoQJbVU%2Bc%2BONsTZ%2BPjBs29PNaM2iBZdlVK5I9o417ttde9nNs2tETBReWBHd6AnEd4WtymiIa6hIDHhtzfA9g1X%2BDCtvMMyAfayT3iS9tdSgrEA%2BBBqiaDmif0Scsf322Ae0JEK1VuUJ0OVpcsUnq4IDX1E9feWC2XX8ss%2ByPNPm0RG%2FaGR0Xoh4%2BNZsmH6W0jUHBLH1LQ%2Fr7Edm758HE&X-Amz-Signature=e7c63d3f91a0bd06c2de1c9f5a9b3b886d87d24a268a5fbbb108fed79975f917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAL735KS%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAH%2BC601mCbGk3h1OYJAJM6YLJ4nX7iGPOooC7TBWNuUAiBLbTrAe0dKTMt3BhL6upexqc9tlXa40M8EU%2BYR%2BpLg8ir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMAZlxx5Di7RmP1R9GKtwDgqD%2FU7fPthmdBhCQzp4UtF6UnYnLyhobNwoTY2xKGqddvUwAToL3Y3%2FrPaC2sMvaaSx8OqnwLeX43%2BHpnbe3CWM00MXp1hs%2Bf%2B1ZOASSolJ8G%2FDFVpdoAn2c7TxGbUxpUgkBgXu2IamagBNRak9qHIjae8Ct869EYvg%2FVQb7%2BiglaArhePfvQZ9kwNgUwrPaiHpc3taB0vzuRIq8ggtaO6iZOWi6%2Fj%2BsoRiyQ9FMz206DCVtEFMBXPZ9SJu2GxjvG7gSopGagTJFX4TGNV7A6euBcVFuYFIe14rX%2Byy1uieiGVYBq6USejXc85ObNcErEmghF6Zu38ztF%2Ff5b56e3MHNA8d34JFpESEZiKR6fnZ7gGTvf5DbDNIJUmJwEQFqt0kIYnKpSgCbSYEpDo3ofHN6RL2lX9UdgA3%2BpCgOLquEHlssMIty34va1jsx6A6h3xbDZwJDqLft4fYeU4QMBmybcf5wvSwCZW9wkr50bz1k4KWbgVvixKMhR%2BBoaFThj2nMeYMGVbHhK1Ou9oBpr%2Bk4DUOO6k04%2B9NzTVrGLnvcC%2BOD1Plq9qXjY1mCuvn0qps8m3XcwpsG6RVC5QL4k%2BJ6thh4Ddr%2FTE7aXUsi2uEl0UuVxRq2KJU%2FERkw2sr7wgY6pgHT0sc%2Fb9ZTEt1yMUZzcph87armGRzXhXzQ3RbWQdYkJcuhwquJB5lmeXawQgRp%2Fb%2Fph2yIgxVFvYI0exqRUHDs8cp6xYVX9zdHaQxXOMVaGAKYjMzbDIHLoIjcKc9u6PjVPe5ml6aTH71R4Hbb5SQB9BQUipvcXdrqqDjt1Xd9A4IHydWaMiTGPk7XPH6vL1AfMf8y48T1mQt%2BtV0thWGn3zJ3af%2FG&X-Amz-Signature=1d2a8bf4030a5f5c32c442e66f6b06de6abe7be3fd10d333f579671e6b654290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EK2D7YJ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7OP%2BUr9r3AF6pszwMEwlho8w0a510YBDmSuyGjxaG3gIgFDjIM2KmwPhHjgbt9NrK%2B7Egotvx%2BZHzz3EsUMjCvXsq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOCJrK4R4uQiGPyB%2FircAxb%2FjBlZ4YSfPtKmql9rBecHewem0rLMLZcmN6cjcyIYqR%2BUy8P31FzX78y1lD%2F%2FIuc%2BZPRz320acI%2BgrY6dDeiJMABb9iZHMlvgfMaSxJe%2BY2PfybSltUVo7WEDEZ9iyWEPOivmj0OkIm9kmiWSMKDfanAWvoQpxtlB%2FrtlX%2FJ8V0jxPy0ZhCEy7Og96MNn3IU%2Fv%2Fm31DtqazqfDhZRHqTLVtnygTi%2FEb3EDGIaHonjCaY2idylgR%2ByqSGjdlWqst8HlYmW0MCe1KlDPy5vZqHRF3phr8OlWmnH9fuhtB8P%2FVarRRrI1s9o2kvEFXqSouWH%2BIIAzVzl4LNp2xdAWvK3IlwRw8Nd6xoPEy5OmpVGDrHk9%2FG3oTpONAb8GWnRI1aURSkSpZKuFWHpol%2BSAMV0UVgSauSu2Bsf5%2Fo%2FUHNuY70H%2B%2FeOcSvK5%2B93rBv80MVUUqgWS%2B4vM4k6NDrdyPtcAkZZiCTJsdh2CgcsBr8bJWlF1msV%2FLkz0uTMi186DXrxYW5Pvl1j2QC1SPKukkOi8R9Q6u0N%2FuR%2BYN4Nrc6pCUZbC%2BvWxW1FFiscdpmV8NLGBNJnhbyc1t1A1uTU0v6AKQ7uclTbk0kba223o5RT8BM5%2B5SY6DuRjVMrMKGP%2FMIGOqUBVcx86sk978IDY3wUPrEL8JHl22b%2BP3%2Bjj6OqnA2s%2FudhqE8uQ3NFGxlN0FHZO5vT3sje9EhTVvgcPPKh0N7ArWPqt6MdqyMDSeRh9R%2BVwO3sKpb1uQaGscSpxbYiNzqAQuG%2FfmtV4w0FYwk4at1B8Qbp0B533chYbLV6t%2FJCIPhoUGghMNzneBamVEuwYHJ0cb3YTYcIoLGwBU9KpSaoe%2By%2FDkNH&X-Amz-Signature=7cc57d1a15cf4134728fa751fdc8d562d8de172c2795018fd9dc34c133271ed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642G4QXVM%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHu%2F4nlWnCRRevfcNx5gqx%2FwKDE2u4Oeu3VKsNoj6xLHAiEAsnxKfIZ%2FT0nCuuS3sunHo5PgoRPDPEFHNh84%2BBPg5nEq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDMGkXwtnhHbjccwGRyrcAzc6LtXBkjUcF1R%2BwpaDa381FX5iv7%2ByMnQxDUaMlHPiftnVNTXCWqE8bKDfOYsYm7e20nHYIoa156ZBE0tI2QO%2BAMv9fUnle9Bps8xMHOrKUk%2F6%2FApxZULwf3c2GEQhonqduANhXB68jZyVPjEGsO9QkfRN0ITCeXp%2BHQiJPVY7%2BM8i2HeB43rfjD99BCpwM1x%2BXVvKgYXFnlUT%2BdeXquzKY%2FqcXbDfFF8p8RYV0JJYSN%2BkpsiVBmdMo5lORSD8Z3mRVGhAo%2Fgbiil1SuovnpWYXFLood%2BJg8q1mQPqxTlgSMh6ZhYPM3qLpKLJ%2BEjXlmN6TA9aG%2FSNw8TGhv%2B%2Boi9mS3LZvSLqJibZXR1sEUVpdYRVO4gQciMtUfCzUGeH8DPNVPSiNcdvl7DqDqY%2ByTZrQ%2Bb4rHC%2FAf%2BC8Zz1rEXqToD1SfMS%2B7c1SDeeY6tDc2JaQGgP4PoUTMm2E3msDIVpQhF1iyqdFTBbrVczQW9YtjjVuVGphB92EWoSe0wKcRtK8nMrie7%2BGh8MrjDyaiSAM7RnCB8il5JhXAkmF9H46lnU55GED9HjN0RisCSDZYoAL2P0dNm17x2WLU9rk%2FjY6CHJQFNAatjdeb6Tlf9njMXOkg9eGwmSaQoMMLHK%2B8IGOqUBrzFTR%2BbZoQJbVU%2Bc%2BONsTZ%2BPjBs29PNaM2iBZdlVK5I9o417ttde9nNs2tETBReWBHd6AnEd4WtymiIa6hIDHhtzfA9g1X%2BDCtvMMyAfayT3iS9tdSgrEA%2BBBqiaDmif0Scsf322Ae0JEK1VuUJ0OVpcsUnq4IDX1E9feWC2XX8ss%2ByPNPm0RG%2FaGR0Xoh4%2BNZsmH6W0jUHBLH1LQ%2Fr7Edm758HE&X-Amz-Signature=d1d35dd01fbecddada8b0f0b903d813081e338e40a19961e52938054e936c64c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
