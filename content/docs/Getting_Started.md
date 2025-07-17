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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5LDWZX%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCHo8Kb25GjJK3toU%2BIL30llMdmXTPrUSbINfRkF7WFegIgICYlHjTRA34%2BP7aNY%2BM4AkMMLckUbiy%2Bbmvtot1mBcAqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdvfGzzdZnVaVnsVircAzGuZqnNoqRwoz6%2Fhy8AXDRzmJiQisKWHEPP7hLNR5buWDcdPB6V%2FaUDmShfd0BsSDKW2rnaHMg7yfLf8rDg9%2Fb7VwT6PS4uehzTt6cWDCT55XpcKgcM1PhVudTY94hg%2FGFrvdU%2BPRqt3XG2sR8T0MpNrzSvLmU9fzH9QAauXhlDgYqVdPXaHJD4p29HSn9uVysvhL7Y0Tr84FkiBKUf4dSqAizN%2FWI1IY5BJHzCDqr0kecg%2BIHt6iwopMYv%2F%2BorejZ0lIPX7anxiGvMs3Pd2CaNczHkuN9zXdDXez5rX8pexVlUFq11QcZOL73xcFn3wnB38f4FxBsykLK2ZdfPm9r%2Fp%2FOdqsmWpkobxqKFBpJ2zb%2BOcWbN9aij5xPm9QwCDKhiCjO%2Fb75zkdzPVNZOjkEQI99De0hJvNTIr7N6IW6IJ8%2BWcubz2kWGc8KLjuCAZ5DFGIemgartCcHJboctat0q0kSdtWDLR8LVqySJ%2Fm9mZB9T1GJfsF0YlX60WkKtkjzm9IFNzvbjKcF56lCsMmxZFKJTqmdy%2BkmHtH%2BsaGR8kHOMn3KjfrcbWTLfC5cXRNAqAcFQkGD3S0EG%2FLn3tfCIM3LvE1fsgy4ZF1hWlgqLmaNeEEf7%2BF93hkSzMOj65cMGOqUBZracNIA28TC6yxRpHlBsdM3Rrxylx5AuyektiojmfHdvG4Ugyeez067ed7gXnZX5piiJw9f%2FxiUGcljYZwjBEXwEub3pVBACklh9uFRyvqT71srpF0NMVijTPvfJJeDgXvl0%2Fg2OXCEK5GIlSYIxbXh4pxtsOAASlOLiHZHRNnHg50UZtnRwK5afJOo%2BoJ44roRpmxpglOEpnBtUnzf8P7akjigL&X-Amz-Signature=28e6943327a9bd238e9e055adf35e1825d102bbcf1a26925127c33b461324a55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5LDWZX%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCHo8Kb25GjJK3toU%2BIL30llMdmXTPrUSbINfRkF7WFegIgICYlHjTRA34%2BP7aNY%2BM4AkMMLckUbiy%2Bbmvtot1mBcAqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdvfGzzdZnVaVnsVircAzGuZqnNoqRwoz6%2Fhy8AXDRzmJiQisKWHEPP7hLNR5buWDcdPB6V%2FaUDmShfd0BsSDKW2rnaHMg7yfLf8rDg9%2Fb7VwT6PS4uehzTt6cWDCT55XpcKgcM1PhVudTY94hg%2FGFrvdU%2BPRqt3XG2sR8T0MpNrzSvLmU9fzH9QAauXhlDgYqVdPXaHJD4p29HSn9uVysvhL7Y0Tr84FkiBKUf4dSqAizN%2FWI1IY5BJHzCDqr0kecg%2BIHt6iwopMYv%2F%2BorejZ0lIPX7anxiGvMs3Pd2CaNczHkuN9zXdDXez5rX8pexVlUFq11QcZOL73xcFn3wnB38f4FxBsykLK2ZdfPm9r%2Fp%2FOdqsmWpkobxqKFBpJ2zb%2BOcWbN9aij5xPm9QwCDKhiCjO%2Fb75zkdzPVNZOjkEQI99De0hJvNTIr7N6IW6IJ8%2BWcubz2kWGc8KLjuCAZ5DFGIemgartCcHJboctat0q0kSdtWDLR8LVqySJ%2Fm9mZB9T1GJfsF0YlX60WkKtkjzm9IFNzvbjKcF56lCsMmxZFKJTqmdy%2BkmHtH%2BsaGR8kHOMn3KjfrcbWTLfC5cXRNAqAcFQkGD3S0EG%2FLn3tfCIM3LvE1fsgy4ZF1hWlgqLmaNeEEf7%2BF93hkSzMOj65cMGOqUBZracNIA28TC6yxRpHlBsdM3Rrxylx5AuyektiojmfHdvG4Ugyeez067ed7gXnZX5piiJw9f%2FxiUGcljYZwjBEXwEub3pVBACklh9uFRyvqT71srpF0NMVijTPvfJJeDgXvl0%2Fg2OXCEK5GIlSYIxbXh4pxtsOAASlOLiHZHRNnHg50UZtnRwK5afJOo%2BoJ44roRpmxpglOEpnBtUnzf8P7akjigL&X-Amz-Signature=14a85332c99d3de9bbfa72def1a4d17d035df5fd1dbd2a92694184871bb4e730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5LDWZX%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCHo8Kb25GjJK3toU%2BIL30llMdmXTPrUSbINfRkF7WFegIgICYlHjTRA34%2BP7aNY%2BM4AkMMLckUbiy%2Bbmvtot1mBcAqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdvfGzzdZnVaVnsVircAzGuZqnNoqRwoz6%2Fhy8AXDRzmJiQisKWHEPP7hLNR5buWDcdPB6V%2FaUDmShfd0BsSDKW2rnaHMg7yfLf8rDg9%2Fb7VwT6PS4uehzTt6cWDCT55XpcKgcM1PhVudTY94hg%2FGFrvdU%2BPRqt3XG2sR8T0MpNrzSvLmU9fzH9QAauXhlDgYqVdPXaHJD4p29HSn9uVysvhL7Y0Tr84FkiBKUf4dSqAizN%2FWI1IY5BJHzCDqr0kecg%2BIHt6iwopMYv%2F%2BorejZ0lIPX7anxiGvMs3Pd2CaNczHkuN9zXdDXez5rX8pexVlUFq11QcZOL73xcFn3wnB38f4FxBsykLK2ZdfPm9r%2Fp%2FOdqsmWpkobxqKFBpJ2zb%2BOcWbN9aij5xPm9QwCDKhiCjO%2Fb75zkdzPVNZOjkEQI99De0hJvNTIr7N6IW6IJ8%2BWcubz2kWGc8KLjuCAZ5DFGIemgartCcHJboctat0q0kSdtWDLR8LVqySJ%2Fm9mZB9T1GJfsF0YlX60WkKtkjzm9IFNzvbjKcF56lCsMmxZFKJTqmdy%2BkmHtH%2BsaGR8kHOMn3KjfrcbWTLfC5cXRNAqAcFQkGD3S0EG%2FLn3tfCIM3LvE1fsgy4ZF1hWlgqLmaNeEEf7%2BF93hkSzMOj65cMGOqUBZracNIA28TC6yxRpHlBsdM3Rrxylx5AuyektiojmfHdvG4Ugyeez067ed7gXnZX5piiJw9f%2FxiUGcljYZwjBEXwEub3pVBACklh9uFRyvqT71srpF0NMVijTPvfJJeDgXvl0%2Fg2OXCEK5GIlSYIxbXh4pxtsOAASlOLiHZHRNnHg50UZtnRwK5afJOo%2BoJ44roRpmxpglOEpnBtUnzf8P7akjigL&X-Amz-Signature=f18f3c2f478de2e245a274caef4a0f15eaf068b8c55e7ec8e2ccd32be0c46de3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDXNHLMI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCID5N6Rwec%2FoYF2RSVhuAtDUWd3fFFEDfrGBbSJhJv3E2AiEAzyuOsGjTTUO5QGTd5wmkhZXrEul5NnUaB55CwB%2B86zgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTa02BEHg7YO0bQ3yrcA3%2Bob5pxY2cagl2sUKmv%2BCVGBmkm3D3pjncgVXEN1TCxIVIdqQ07FZ6SfkygTI9cVMVWa0J9yR0gUoUeMkHQXdlW0tt2STx76FN%2BYXAVBE7QSYCGqzUombLnDs7%2FXdzCXBRAE%2BOwnJc6fv52AOuhZL77ZVKT43XyKI0%2BSeI79qmB40nmFiICtdyWqc9ub0x%2Bov%2BwMyAqNBKatSjockATSXTHW2buUv%2FMHMPrGfFqZxgNHPC7TgG7dWife8MvPMkUhzmsdGE6%2F7UKql8cmLuETbhBSA0xda2aV2Rh5uxFHAAIgQOpohTLCW7zyrHZ3K8VdrowECmWBF2muTkdxuv4X2R7V5jR80wGXziFJfLaSs4m%2BKKkN3hATUxZg1HbZrt2QKbUiIoQrVcWt1mFrY2PsqPKNXIBmaj6n1c4AOe9EnVJc7mjMGOgGEZAIo5PEQLV1lT2j2Akcx2wXSzQCt2H4LjiXVu7j8QpjyjDSXZblrCtdKiu1TCi%2BGHzrVQKl8Hu6WyKs62tZemmbgtP%2B92Uaqms2z2ms1nU95Q928wUptwmmlVwOtNAkEfL%2F9UwrgdlOSiMpdT9TEBnAYn73D70ats5vAFvNrDo2QuVvaObWbt0NfGlftCvXYSJIz6bMN%2F65cMGOqUB1jgjoO6MIssOhixbsr5jnyLWyV9yNwbz75HncyTwUZPVPz2Bf3IyKzqOnI8Ng5nF2UBUADegqyciD7XkYRbqyN9B%2BCkR5w57cGSEM6IIvQ0RKOENxoOhj%2BXxJRefzyzB6eYIShrmQK0y0ZRzXAMoIcwZJOZ8h7Qi1dh14iVKEHNrt4xHnh%2BJdZ3cbidY%2BeqTP%2BpB2Eh8uKvHMjUisITj%2Fzv7rCOZ&X-Amz-Signature=00a99a881bbc16a416614d6c82fdbe281eff4a09435f01b1c4137451704f679d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VASW6HM2%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCICMzuEV3eBv%2B3kStwwABLCPu4VtFvHTQHzySfZpzQSkKAiEA6%2B%2Bh0q77HLyYXJeq%2F6SyoOTVptTFEA9RburdOqmGCHwqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmFlNAKveIrM%2FiLOSrcAzOjv67tTqibXwyj5kq5ZSsciOq4hDKl7lGtSYqNp1I2O0pyaNXnvbDrudxD6fAqSc%2Ftcx4JduUepNa%2BsdM88KC63MjttHGTjNGXPmeFEhKOsK1OYAOgpJkPJ6aFRmZmIv1QFiPf0OSPVcIhHLIQOpQ2zJGVzH2A524BapaKrqW1UCMltxtiD%2BJxhlRONb54YPj6%2BmZ1EDLk1w8NfXOb%2FMoUm2fJD30yfmdRVMgPDwr8dRHOFLcO2VmE0G2VMoALty7b%2Fc6WiYEADl3UPKfAqCsdPuB33UJ0aNxdz51uC8c6xCZHBVsZR2yuaKxIzkIuy2851Pxg6GWnRiKHmMRAImsNylhSKsUuL%2F%2BAzOmq47MkYdin1%2Fl9B7Ow6hJw7Xc8T%2B%2FjR0KrgisPnSLPnc25zE27qlQSTwvwXY82Q9PiH2T%2BdwP%2B1IZ%2BLECq3LapJ7zKgfMvZJOsM4%2FR4y6FIb3i%2FnNgX%2FDNlbIT1zm98io370ZpLI%2FkhjP0zX4pA67JmvC7qkWosETwumqD9sCCCTyc3ZWKgP5zew2gpcPTyHSWO5rRoZ12nkuVzpMR8Qa3TmZ61rJxiNthtPnPI7P%2FiwCBbNIPghJXISQ9pd8a%2FwVXPyCPONKuUh9wxl%2BiR5rJMOD65cMGOqUBaHDi6blc1DnEYlmfJ%2BwNVJkj7cm0XpJdQoPhg6b5rOTaI9SxJEGhNxSJp1GTp0ynmXZRP0Ht3My%2FuYM8SwwFxuwZE0%2Fgsudi1Vn0Ji7Kir03KpER69rE2iJWSMkjsKrXlGBuoTLu2U90R1n66MSsDqVQCd5S2s%2BfUkmdAM5wmYEzBFLPdF9x1MwrDDVMRnk9fxo6ilBAFWdL9jmfbNbDdCCSvR4x&X-Amz-Signature=92727bec59c456abc3e74380c2297cd0282426f9a89e87282339d2a92db45f09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5LDWZX%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCHo8Kb25GjJK3toU%2BIL30llMdmXTPrUSbINfRkF7WFegIgICYlHjTRA34%2BP7aNY%2BM4AkMMLckUbiy%2Bbmvtot1mBcAqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdvfGzzdZnVaVnsVircAzGuZqnNoqRwoz6%2Fhy8AXDRzmJiQisKWHEPP7hLNR5buWDcdPB6V%2FaUDmShfd0BsSDKW2rnaHMg7yfLf8rDg9%2Fb7VwT6PS4uehzTt6cWDCT55XpcKgcM1PhVudTY94hg%2FGFrvdU%2BPRqt3XG2sR8T0MpNrzSvLmU9fzH9QAauXhlDgYqVdPXaHJD4p29HSn9uVysvhL7Y0Tr84FkiBKUf4dSqAizN%2FWI1IY5BJHzCDqr0kecg%2BIHt6iwopMYv%2F%2BorejZ0lIPX7anxiGvMs3Pd2CaNczHkuN9zXdDXez5rX8pexVlUFq11QcZOL73xcFn3wnB38f4FxBsykLK2ZdfPm9r%2Fp%2FOdqsmWpkobxqKFBpJ2zb%2BOcWbN9aij5xPm9QwCDKhiCjO%2Fb75zkdzPVNZOjkEQI99De0hJvNTIr7N6IW6IJ8%2BWcubz2kWGc8KLjuCAZ5DFGIemgartCcHJboctat0q0kSdtWDLR8LVqySJ%2Fm9mZB9T1GJfsF0YlX60WkKtkjzm9IFNzvbjKcF56lCsMmxZFKJTqmdy%2BkmHtH%2BsaGR8kHOMn3KjfrcbWTLfC5cXRNAqAcFQkGD3S0EG%2FLn3tfCIM3LvE1fsgy4ZF1hWlgqLmaNeEEf7%2BF93hkSzMOj65cMGOqUBZracNIA28TC6yxRpHlBsdM3Rrxylx5AuyektiojmfHdvG4Ugyeez067ed7gXnZX5piiJw9f%2FxiUGcljYZwjBEXwEub3pVBACklh9uFRyvqT71srpF0NMVijTPvfJJeDgXvl0%2Fg2OXCEK5GIlSYIxbXh4pxtsOAASlOLiHZHRNnHg50UZtnRwK5afJOo%2BoJ44roRpmxpglOEpnBtUnzf8P7akjigL&X-Amz-Signature=c663426ebca477478530674809d15587b96d49a3e7b10e34af9ca9d6cd37a1bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
