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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HPY63ZR%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvOiokfiy%2Bko7A35NBK1K8f%2BuYXAy59mT4KX9302oLUgIgDFxdOD5SLzMfwOVEtgzonTmBUjvU5kR34z7dnwQs7zwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvrg0QuymH%2BX6CYMyrcA%2Ba%2BCJQReJuRDZx2CyKFpmVxEaM2KSAnw8mUkSK1ZJCbmPBujo%2BrCrXAxctYNO%2FaB9hrrjYcHjWwPtanFu8R%2FZaJy0XY0YuSUiq6veVA%2FJWKaTlZn87RKDSBrFhzvmLIWmJms6YFqugOLbTu%2B6zeGKDzeQYLmibWsvhRNHOdGNCxHThP4Cs3oJl1ziKFpcS9EFBpBqu5hW8%2Bxa2d6d72edo4W7TJP0hnacl%2B9JaIZFeO1JbilStOX%2BG1lvuBtfZvCyTFwyxOL9SoCEb2nRcLvXCRNYI%2BU9T4CzG3aRKUOvvSdSY0WeX5TRHA1zc1tQ2N61LkFotI9E34kOl7uwI5gK9bIVcR4aJhIpkZSzqohALQuVmhFHkNhb57EAVTZmYx92IqFMEQugPH2bNR%2FTkmiVYYPeiWxou6REwZgzwn4n6eROzJ4UfVIX%2FOajbseT4E%2FEgBlDdifbFUc9ed1SKz3%2BwxapCaDSY27KHcGdUZTN0xb%2FzAETAcy1XBQ4iaQBahumkGdwMMYfasFFT%2BWuLgKrINcZUxGUPJ%2F0RWDD42UVYwz4wYBQrofzrmT9xd3p%2FDscCtjD7WmcMrupCvQ4QOpwnaGi0yN5ntUjjFFlBQbpVOEo%2F3FUfsNc46vEpcMIiVsMEGOqUBlrdeIqMOFOrnwM%2BBfsBd1NnSU7oegex3bRkcsqDnp3HuO7fBTlL8oVKPpslPABhXnghHK4peMf2rub1W0KCbCj7b9G6ys1pEjq0gn4EqTydxrjwr5c7dNXfLXBlgYR4HRVAvkBCjjPSWzcPINGBs2sGwvalvl2qqfO7lPp9V9pF89Hk%2Bl%2Fyr9%2BV7kJN2QPKMuksFHJaz9D%2FNMSnL8n3lXezVP5Bq&X-Amz-Signature=51b74e3b4c4a077f9dd44c881363a778cb60bc8b161ab75fa47384a471ba7ebc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HPY63ZR%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvOiokfiy%2Bko7A35NBK1K8f%2BuYXAy59mT4KX9302oLUgIgDFxdOD5SLzMfwOVEtgzonTmBUjvU5kR34z7dnwQs7zwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvrg0QuymH%2BX6CYMyrcA%2Ba%2BCJQReJuRDZx2CyKFpmVxEaM2KSAnw8mUkSK1ZJCbmPBujo%2BrCrXAxctYNO%2FaB9hrrjYcHjWwPtanFu8R%2FZaJy0XY0YuSUiq6veVA%2FJWKaTlZn87RKDSBrFhzvmLIWmJms6YFqugOLbTu%2B6zeGKDzeQYLmibWsvhRNHOdGNCxHThP4Cs3oJl1ziKFpcS9EFBpBqu5hW8%2Bxa2d6d72edo4W7TJP0hnacl%2B9JaIZFeO1JbilStOX%2BG1lvuBtfZvCyTFwyxOL9SoCEb2nRcLvXCRNYI%2BU9T4CzG3aRKUOvvSdSY0WeX5TRHA1zc1tQ2N61LkFotI9E34kOl7uwI5gK9bIVcR4aJhIpkZSzqohALQuVmhFHkNhb57EAVTZmYx92IqFMEQugPH2bNR%2FTkmiVYYPeiWxou6REwZgzwn4n6eROzJ4UfVIX%2FOajbseT4E%2FEgBlDdifbFUc9ed1SKz3%2BwxapCaDSY27KHcGdUZTN0xb%2FzAETAcy1XBQ4iaQBahumkGdwMMYfasFFT%2BWuLgKrINcZUxGUPJ%2F0RWDD42UVYwz4wYBQrofzrmT9xd3p%2FDscCtjD7WmcMrupCvQ4QOpwnaGi0yN5ntUjjFFlBQbpVOEo%2F3FUfsNc46vEpcMIiVsMEGOqUBlrdeIqMOFOrnwM%2BBfsBd1NnSU7oegex3bRkcsqDnp3HuO7fBTlL8oVKPpslPABhXnghHK4peMf2rub1W0KCbCj7b9G6ys1pEjq0gn4EqTydxrjwr5c7dNXfLXBlgYR4HRVAvkBCjjPSWzcPINGBs2sGwvalvl2qqfO7lPp9V9pF89Hk%2Bl%2Fyr9%2BV7kJN2QPKMuksFHJaz9D%2FNMSnL8n3lXezVP5Bq&X-Amz-Signature=0b86557ce63ec42fef13a7bbc6e70e27783b3e8f9018ecaa276e4a0eecac73f7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HPY63ZR%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvOiokfiy%2Bko7A35NBK1K8f%2BuYXAy59mT4KX9302oLUgIgDFxdOD5SLzMfwOVEtgzonTmBUjvU5kR34z7dnwQs7zwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvrg0QuymH%2BX6CYMyrcA%2Ba%2BCJQReJuRDZx2CyKFpmVxEaM2KSAnw8mUkSK1ZJCbmPBujo%2BrCrXAxctYNO%2FaB9hrrjYcHjWwPtanFu8R%2FZaJy0XY0YuSUiq6veVA%2FJWKaTlZn87RKDSBrFhzvmLIWmJms6YFqugOLbTu%2B6zeGKDzeQYLmibWsvhRNHOdGNCxHThP4Cs3oJl1ziKFpcS9EFBpBqu5hW8%2Bxa2d6d72edo4W7TJP0hnacl%2B9JaIZFeO1JbilStOX%2BG1lvuBtfZvCyTFwyxOL9SoCEb2nRcLvXCRNYI%2BU9T4CzG3aRKUOvvSdSY0WeX5TRHA1zc1tQ2N61LkFotI9E34kOl7uwI5gK9bIVcR4aJhIpkZSzqohALQuVmhFHkNhb57EAVTZmYx92IqFMEQugPH2bNR%2FTkmiVYYPeiWxou6REwZgzwn4n6eROzJ4UfVIX%2FOajbseT4E%2FEgBlDdifbFUc9ed1SKz3%2BwxapCaDSY27KHcGdUZTN0xb%2FzAETAcy1XBQ4iaQBahumkGdwMMYfasFFT%2BWuLgKrINcZUxGUPJ%2F0RWDD42UVYwz4wYBQrofzrmT9xd3p%2FDscCtjD7WmcMrupCvQ4QOpwnaGi0yN5ntUjjFFlBQbpVOEo%2F3FUfsNc46vEpcMIiVsMEGOqUBlrdeIqMOFOrnwM%2BBfsBd1NnSU7oegex3bRkcsqDnp3HuO7fBTlL8oVKPpslPABhXnghHK4peMf2rub1W0KCbCj7b9G6ys1pEjq0gn4EqTydxrjwr5c7dNXfLXBlgYR4HRVAvkBCjjPSWzcPINGBs2sGwvalvl2qqfO7lPp9V9pF89Hk%2Bl%2Fyr9%2BV7kJN2QPKMuksFHJaz9D%2FNMSnL8n3lXezVP5Bq&X-Amz-Signature=7b755322efdc4d39649e9ebcc8e3c383bcf4a2104411d910d69e8346d82ae734&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3OASJSZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FsDcA%2FOyqD7E1d%2FTncXRzN02XpP4BblMiW8zSpaS%2FMAiA7O2JqxLDNP8vwGVHHXZftDxoDrU3R1C9ASv9r8pqLzCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME7XtHVaQlreY6lDjKtwDiyj2szpvtX%2BUcaoqZ3m0M3pB9qT4O2m%2Fpied%2FAU%2Fg7YNj0rs0Ba9EhCsMQrugg6n570KPF6D9vfWKw2pNtaV64v2vHan0H0CPx8QqTKKuOn8%2Bk0RnO%2Bl0QugOM8DkeVoOTl23DDdLwANwgBdukjZIoydQbHwABsvic9ONsJObgCV3%2F8bxLOlOpSi9EIH27J76yXPiOHJPurJn5hBprmhFpJnM5qeeMp9VGXTQztAqipSUI4PPAfdrNZyM%2Fhg8FUX%2B61FZhBs7BQJf2kHSUpfhuw4ftdT7d0O2xWNGdmyJ1ZZR8NYnpEyLmULIc5%2B5FrSUgAkwMZUDoRWAuiWPcQjO5M18LhXS%2Ba5MN8sFGc6U20Ot2ySOzIkrdqHEfakwn9z0raZKYAYdqGlpS7MdN5S79RLVf8PU59lE0HjDzLhLDpyaZw5s2i%2BjJVGAvFNX1ptD8%2BpaiEhJv3Cy8cqDnTyTd9cRNNOsdLzYF4cKo3m3jGvPuQbqZp6oV4wpmRhH3y6LY1PrPG2hZOxWsiZNLI%2FaJWo9wQOnI029unh9Wj4kliUDpKwe597CY7%2B8YUldcU6CPcIkvaRctZVcPAvCawAygFlib%2B4BQ%2B4cwykDLNXHdmeQ1JAt7f587UfO4IwsJWwwQY6pgHoM%2B4ugSxutSQjMS8vB51rmu2kJ2R11%2BG5DlUaINhWA%2FqQYwqefBG4XQ9oq770pqhZfqh02Nmio3g098%2F%2F%2FxBoubIt1uq%2FNJlNLDjF6iTpefKVB04mky1smZHHyjulNhvoVGX9YB%2FncXE5E%2FUGvUNXGPLlZvLCW76goqDTLXIj1uzH%2F9pz%2FEJCdPlFi4ZyOTLbqufgRiaIZTbH0tXVyoZKGljvB%2Bzc&X-Amz-Signature=56a0e05589ac5c7c6490eb7f71cb4596007a59e0edbcff59cea14389a2abca50&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMP5JDSQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnpl6xj5d1nLlDBkAkKPCYDMvXo3PqPipLMU9RfpYblQIgCb%2B5oyALmCWNtmsRLozfXwcidOc3x7fD%2B49ft90HMQQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7gx3RatMhqS47cbSrcA5U1XEF%2FC%2BDcvginmaswBRUDJP4r0YUcuqL4ytUbbhKuOoybnL9MtPuPSSQlGhH0MytS%2BfKxj3uCnI1zXmMJ%2BdZBCf1vMeiGxz1fcHFn1sQO6RPGF5fnmDuiO3bBSOPL5wHrIPeG6yN%2FpEL8a87NEQPfvJlUzIFMSQMH1nvUq0LkFOwb07eeUYt3%2FfF%2B8NwRBZ4zDoF4YiOGTER9N08XawlVNijHXA4Wbnd%2BkYBTKnI3%2Fzs5yjZFqLLQBdr%2BWNfofMCuKgVWjvzTtH8kWE4h9OwR0BEHoiA6zoAydfGmxeW7zHae%2FPvKWxKmpq%2Fg0wRysBhEofN9b8ettZvuJ6J8JSRqD3xTGCWx%2B0MScWi%2B633MFKpcBaLmFiJdT1tWQNk%2FpSSHWIACx7AEdf4iiEEWtTfIgbye5UI3lE1H%2FA7Mn6JEWyHHwb3Nc0lyQ4sGuCky2ELLC1idzwL9pkx4ZZP8WKGUpigPfx1%2Fvy2kZJgBK7ChGe5Yc4LERBDygPZ94AI9mqxOf9RUJFDwVjvt4RCyDUlPFm05g5E2KbDhVV1uJcGe2jY7k3NRaIRpLbu%2BdE3E1DXZ5Faa8fhXF1ysxajidGl1%2F9GxJcEDInN3Uc6OTqNKy1n5cLIuetSIqVH4MIOVsMEGOqUB7inXtNvtnLb8Fhp98Uw7SHuYiituTCf0CZRzL2DfrhBQ%2F955l1MkpK872lK9HSM10Hh%2FHCpU2%2BKa5DRcxaAWRBVfvoD3dY6672DfqXEjKh8HFZ9w9U9sngugH1D8L4Y3BO7kN84405dKsk2FeTUV3qYxVEYacdtVy14ZcKVe0Zqg1OX%2Fb7VOYqOeoNfBjVSP8WhsZrLU8VVPwcOUBhijqVOVN6km&X-Amz-Signature=44ee04651f02f7dff24ec64b21e0a75407ba3dc391029f1752dbba5bd75d0c28&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HPY63ZR%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvOiokfiy%2Bko7A35NBK1K8f%2BuYXAy59mT4KX9302oLUgIgDFxdOD5SLzMfwOVEtgzonTmBUjvU5kR34z7dnwQs7zwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvrg0QuymH%2BX6CYMyrcA%2Ba%2BCJQReJuRDZx2CyKFpmVxEaM2KSAnw8mUkSK1ZJCbmPBujo%2BrCrXAxctYNO%2FaB9hrrjYcHjWwPtanFu8R%2FZaJy0XY0YuSUiq6veVA%2FJWKaTlZn87RKDSBrFhzvmLIWmJms6YFqugOLbTu%2B6zeGKDzeQYLmibWsvhRNHOdGNCxHThP4Cs3oJl1ziKFpcS9EFBpBqu5hW8%2Bxa2d6d72edo4W7TJP0hnacl%2B9JaIZFeO1JbilStOX%2BG1lvuBtfZvCyTFwyxOL9SoCEb2nRcLvXCRNYI%2BU9T4CzG3aRKUOvvSdSY0WeX5TRHA1zc1tQ2N61LkFotI9E34kOl7uwI5gK9bIVcR4aJhIpkZSzqohALQuVmhFHkNhb57EAVTZmYx92IqFMEQugPH2bNR%2FTkmiVYYPeiWxou6REwZgzwn4n6eROzJ4UfVIX%2FOajbseT4E%2FEgBlDdifbFUc9ed1SKz3%2BwxapCaDSY27KHcGdUZTN0xb%2FzAETAcy1XBQ4iaQBahumkGdwMMYfasFFT%2BWuLgKrINcZUxGUPJ%2F0RWDD42UVYwz4wYBQrofzrmT9xd3p%2FDscCtjD7WmcMrupCvQ4QOpwnaGi0yN5ntUjjFFlBQbpVOEo%2F3FUfsNc46vEpcMIiVsMEGOqUBlrdeIqMOFOrnwM%2BBfsBd1NnSU7oegex3bRkcsqDnp3HuO7fBTlL8oVKPpslPABhXnghHK4peMf2rub1W0KCbCj7b9G6ys1pEjq0gn4EqTydxrjwr5c7dNXfLXBlgYR4HRVAvkBCjjPSWzcPINGBs2sGwvalvl2qqfO7lPp9V9pF89Hk%2Bl%2Fyr9%2BV7kJN2QPKMuksFHJaz9D%2FNMSnL8n3lXezVP5Bq&X-Amz-Signature=4c7041e2d0efa8a5615dfa6528cb4a1a6b27b2db6af632cde6e71c039dff541c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
