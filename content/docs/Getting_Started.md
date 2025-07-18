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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZLU67QK%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCAovikLl9VkPIX5jf5TWq9mp6uVVlipV6E%2BmeppuKqrgIhAKfOKVThmjUEbCspW9MZfiVsk6ktjXtzQEXj%2B09srLUtKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0YmuE5DuEbmyLo%2B8q3AMMn3RikjavSbRH%2FVL1G%2BVHD3JHi15dmaEwfda34hn3L%2Bsrloj1paq0PBYoUL5GUZz8lxOudsS46k6zLFy1Lt4I0fRZA2bj2uS325THg%2F%2BTxM8%2FQfGkchn4wm76DfljnK7rpVcgUMVkBHMPJDCPCJ%2BGF8wqR%2Bcz%2FjZ7mNazxtJUu4q37gMueikGjQ6JEigmhNX81SKLtuchsl0hPanLL83AZaHo40Mx9geDmZH%2FQpOnL%2FFedMusRODcmquLa8%2FsDsB387hfoa392MDBsw9AMNXtCY8hTSYXv7a10T4Ab5YQ3wZ5cuG9rcaz%2B3pBowB%2FRiiADjxomPs3rqfVvBAaPdV4xfdVee0A3ycLuAeilOa7Kv3%2FeRBEhbAlOPDY7Xe0WSb87PRAv%2BXSeQTguaZRHFq2TD7dG4YvHbRs6a7ZbQQfU28%2F4pZuKJwfSRqsiE1GMUgVgwxdesCS1VshodMha36CG%2F0q8JKjhjlaANYwpYtWYASTStnsHduYbexErkJWsE%2FN38hOcFatF4RAa5iq2vHLJZCy6eSDYLUZBYBZy5J6Npb%2FFOc%2FnEhZ661Em2IYEID1UkApyNO5wkxMjMpDNRA6dh%2Bu%2FOhvIECOksv0sz8l76e5K98x21fByI1DKzDZz%2BjDBjqkAVjFX09ef0E8u9y7nKfTIQw39vqJFDaLXTfxHoHNYYzWcflJ9JvJMVTeFkw13oZPriWAMp7xp3yYXv%2BkaGgMK2bDaGa6vETwKmbcJHucZJpQytMgJA3nQ%2B5zidd6S4mTe%2FV%2BbzpsWwe9cNa8UqLgV82HGMur5gHsqARvOw9dp1dZwDFvRG2GgAhGTrCPfzO%2FuTgICcQKA8CZAqt%2F3ZijuHiEnsZ9&X-Amz-Signature=f50196d7e076ed72ed8470bf33fb91b00f488949835257882c866ce295ece4a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZLU67QK%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCAovikLl9VkPIX5jf5TWq9mp6uVVlipV6E%2BmeppuKqrgIhAKfOKVThmjUEbCspW9MZfiVsk6ktjXtzQEXj%2B09srLUtKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0YmuE5DuEbmyLo%2B8q3AMMn3RikjavSbRH%2FVL1G%2BVHD3JHi15dmaEwfda34hn3L%2Bsrloj1paq0PBYoUL5GUZz8lxOudsS46k6zLFy1Lt4I0fRZA2bj2uS325THg%2F%2BTxM8%2FQfGkchn4wm76DfljnK7rpVcgUMVkBHMPJDCPCJ%2BGF8wqR%2Bcz%2FjZ7mNazxtJUu4q37gMueikGjQ6JEigmhNX81SKLtuchsl0hPanLL83AZaHo40Mx9geDmZH%2FQpOnL%2FFedMusRODcmquLa8%2FsDsB387hfoa392MDBsw9AMNXtCY8hTSYXv7a10T4Ab5YQ3wZ5cuG9rcaz%2B3pBowB%2FRiiADjxomPs3rqfVvBAaPdV4xfdVee0A3ycLuAeilOa7Kv3%2FeRBEhbAlOPDY7Xe0WSb87PRAv%2BXSeQTguaZRHFq2TD7dG4YvHbRs6a7ZbQQfU28%2F4pZuKJwfSRqsiE1GMUgVgwxdesCS1VshodMha36CG%2F0q8JKjhjlaANYwpYtWYASTStnsHduYbexErkJWsE%2FN38hOcFatF4RAa5iq2vHLJZCy6eSDYLUZBYBZy5J6Npb%2FFOc%2FnEhZ661Em2IYEID1UkApyNO5wkxMjMpDNRA6dh%2Bu%2FOhvIECOksv0sz8l76e5K98x21fByI1DKzDZz%2BjDBjqkAVjFX09ef0E8u9y7nKfTIQw39vqJFDaLXTfxHoHNYYzWcflJ9JvJMVTeFkw13oZPriWAMp7xp3yYXv%2BkaGgMK2bDaGa6vETwKmbcJHucZJpQytMgJA3nQ%2B5zidd6S4mTe%2FV%2BbzpsWwe9cNa8UqLgV82HGMur5gHsqARvOw9dp1dZwDFvRG2GgAhGTrCPfzO%2FuTgICcQKA8CZAqt%2F3ZijuHiEnsZ9&X-Amz-Signature=17e9d7e021cf29a37aa9b315a847cb98aaa168150b0cf7a3bacb5e14df8bfba2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZLU67QK%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCAovikLl9VkPIX5jf5TWq9mp6uVVlipV6E%2BmeppuKqrgIhAKfOKVThmjUEbCspW9MZfiVsk6ktjXtzQEXj%2B09srLUtKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0YmuE5DuEbmyLo%2B8q3AMMn3RikjavSbRH%2FVL1G%2BVHD3JHi15dmaEwfda34hn3L%2Bsrloj1paq0PBYoUL5GUZz8lxOudsS46k6zLFy1Lt4I0fRZA2bj2uS325THg%2F%2BTxM8%2FQfGkchn4wm76DfljnK7rpVcgUMVkBHMPJDCPCJ%2BGF8wqR%2Bcz%2FjZ7mNazxtJUu4q37gMueikGjQ6JEigmhNX81SKLtuchsl0hPanLL83AZaHo40Mx9geDmZH%2FQpOnL%2FFedMusRODcmquLa8%2FsDsB387hfoa392MDBsw9AMNXtCY8hTSYXv7a10T4Ab5YQ3wZ5cuG9rcaz%2B3pBowB%2FRiiADjxomPs3rqfVvBAaPdV4xfdVee0A3ycLuAeilOa7Kv3%2FeRBEhbAlOPDY7Xe0WSb87PRAv%2BXSeQTguaZRHFq2TD7dG4YvHbRs6a7ZbQQfU28%2F4pZuKJwfSRqsiE1GMUgVgwxdesCS1VshodMha36CG%2F0q8JKjhjlaANYwpYtWYASTStnsHduYbexErkJWsE%2FN38hOcFatF4RAa5iq2vHLJZCy6eSDYLUZBYBZy5J6Npb%2FFOc%2FnEhZ661Em2IYEID1UkApyNO5wkxMjMpDNRA6dh%2Bu%2FOhvIECOksv0sz8l76e5K98x21fByI1DKzDZz%2BjDBjqkAVjFX09ef0E8u9y7nKfTIQw39vqJFDaLXTfxHoHNYYzWcflJ9JvJMVTeFkw13oZPriWAMp7xp3yYXv%2BkaGgMK2bDaGa6vETwKmbcJHucZJpQytMgJA3nQ%2B5zidd6S4mTe%2FV%2BbzpsWwe9cNa8UqLgV82HGMur5gHsqARvOw9dp1dZwDFvRG2GgAhGTrCPfzO%2FuTgICcQKA8CZAqt%2F3ZijuHiEnsZ9&X-Amz-Signature=1b60b6db95308d7fb17beba3492820819e92aa79bd21bf7eda8fca6fa9ca8758&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJMYI6AU%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBglS1rlCAtIjZqOwOJmSoOVToRa822dm%2FvWfdPyrbkRAiAqDhcnqJgAY%2FDMkKVBnvIaMV7yTZHHefeZUAXjpnvTCCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW4ITG%2FioppEW%2B2%2FHKtwD2Ad1JtOCf3v3gQYJZC1Gx4EA0CnzUcZ6T7fTYUECu8pU3H3j%2FoQTGeoSWXRI8QBJQX4p5UD5Tj%2F27QIOy4Of53svQk%2BZvtSeDvuN3RZfby9srwnMkKX85rL8Qzi1P%2Fe1y3XaIk7I8Mjh6PO676wqnpMqKwKxz5yAdW9qhTE2I%2BWWaggBRnv8SSjhtP%2Fecw9tJdkCwmFlVeyvU3%2FzZbMGS%2F%2BsnpsApUjaeLkyujufcrMlzI0hDyoYwOZfx4IQOHlxewpLFXQNnkr4fFtLp57blbkHvwlxrH4VT3UcmyvhQwt0JuHvOpqw%2Fa6Mpq7g9Fl2AWYIBusIsByGbl23dwnudgUvg1BrNE4UtxpRJLavJt8QffZDQIfKFEW2AA49EkJBVkmc3GatRxcwGD4jc3tEMOAqGKFMpDPNGITPSZuyn3UNfP92uUPm4xeXxWdsa3lvtmbRTE5eftzCJv6JRA69MHGX7DUmv0NheFSftEXjXf7If0Wj51GEjVNCVbJAXDJAjJeCDajWJUpzM3U7VcJP7qLbmb3OrbfTgyiED1CdHKcAqHY5eMzVbH2B%2FmjjPk8HHq5ihWh1rMEjQWvEYXG17yVOetQ0fEg0LMtBDZdKQJig3LllKD9aFbFXAo8w9c%2FowwY6pgHrE1q1444A7q4NXyDSNJyx90wmIikk1c4vakGGwCSlPT0jiHlK9C94HvNafFC%2FLk8eE3H42NM0%2FNzeIIBGGKUPELpMmNIf465PobeR6UEVJcTf1akvN38RTQ0NKnp4INwdz5BBs80AxYlBi8z7s9o%2F1IOHWtMlaOkaz74x2vziAzksQQPrUjNutjwcU0CIcOxmM8uWO62vTMBgbecyh%2B51Q6%2FsXXe2&X-Amz-Signature=770387a63ae0134f310133a318a0ff42b1a61f235dda26a866260cf913d53681&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG3I3IAR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC9XtKgSthJawT5D%2FPkvM1q866mpdlkvNX%2BTRSOkPW2IwIgX3HW1yK%2FHMRzm6%2FQFMZKcue2%2Fd3CtJWpjIvZVroqThoqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNT0%2BsZsq2O0uhkfayrcA6Y8VuQP6kRFH1U02EUUHALol7IMjEXkYysIRY1%2BYrmtyJVTkSnb9UJgmrMNB37wcnOzuU9rM2i%2BQdp2Kkg2kWfSI54MIM80AvMWFfPR2I%2BgUfX%2BPGxLtMsAftBVnNRmxV7zTGUUf58Arw4UnOhMb0E%2BFr75pAeLR7e7ibKuuwTUd91l8nVjaSuHzQZ77Y02PHd9FCzNyyeoBz2d1HB1It2Vgzh5hAsfwYaGR6XRYQxgYfclvxtKbioW3L3JETcK4fM%2BKT9wlBq9MjaBlMr2H5%2F1%2B5Q9m%2B1YsQrE0NnewoRC9L%2FTT%2BRIwIob15F6qrlEOQJ6JIn7tve%2BR67Z8BRGxzJP%2Bqa%2FAB3%2F4N2%2FETGKQhkhje892geSuge8J8OvQGisbwMtbsQMRDFudDGxMGffywPcQxjt7abhBm5%2BYV0WPchA7PkibzoSoO2j8FrDGhDRoTvcpDlu%2BA3%2FByy0NWZhiu8PnlNnGnlNVkog1DtM4tZyhoyZ2PzKeEjXxi38ZJEM7aKyfhvj%2BYBIC3Gkbge2I9qRsCo%2BBmOflBvxQVohJxzmYfALrWbt%2F5RAy7bzIdwPNpwa9ra4852%2FiHe2OLZtSWqvbcFK0%2FtBSFCyOIPnM03orirhwNy1i7Ik2I2cMPjP6MMGOqUBHhF8Nx6Fk44LsH1kX3OSr4rHgb%2FF9QvBLRo2vFNYrWTEYgEaz%2BFUCIcnSejETxkAv0WJm963glS7ZxNdM7KnSnCBqtgonwX%2BgceelwjoMn9QDjMhlYSYcQ6fcavlpoG%2FS7a5izXGreCAb4RJ4r2rfoqeF1ol71XPsldJYpVrhTo7Hl2xj26JmXEOqWQDuIDCSrlJWWnyne26evtDrD86XgBtYnUX&X-Amz-Signature=88db34a7b8d97426925e0902b3e9691d940351ec13e6fd060ea53d7a15a5bc2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZLU67QK%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCAovikLl9VkPIX5jf5TWq9mp6uVVlipV6E%2BmeppuKqrgIhAKfOKVThmjUEbCspW9MZfiVsk6ktjXtzQEXj%2B09srLUtKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0YmuE5DuEbmyLo%2B8q3AMMn3RikjavSbRH%2FVL1G%2BVHD3JHi15dmaEwfda34hn3L%2Bsrloj1paq0PBYoUL5GUZz8lxOudsS46k6zLFy1Lt4I0fRZA2bj2uS325THg%2F%2BTxM8%2FQfGkchn4wm76DfljnK7rpVcgUMVkBHMPJDCPCJ%2BGF8wqR%2Bcz%2FjZ7mNazxtJUu4q37gMueikGjQ6JEigmhNX81SKLtuchsl0hPanLL83AZaHo40Mx9geDmZH%2FQpOnL%2FFedMusRODcmquLa8%2FsDsB387hfoa392MDBsw9AMNXtCY8hTSYXv7a10T4Ab5YQ3wZ5cuG9rcaz%2B3pBowB%2FRiiADjxomPs3rqfVvBAaPdV4xfdVee0A3ycLuAeilOa7Kv3%2FeRBEhbAlOPDY7Xe0WSb87PRAv%2BXSeQTguaZRHFq2TD7dG4YvHbRs6a7ZbQQfU28%2F4pZuKJwfSRqsiE1GMUgVgwxdesCS1VshodMha36CG%2F0q8JKjhjlaANYwpYtWYASTStnsHduYbexErkJWsE%2FN38hOcFatF4RAa5iq2vHLJZCy6eSDYLUZBYBZy5J6Npb%2FFOc%2FnEhZ661Em2IYEID1UkApyNO5wkxMjMpDNRA6dh%2Bu%2FOhvIECOksv0sz8l76e5K98x21fByI1DKzDZz%2BjDBjqkAVjFX09ef0E8u9y7nKfTIQw39vqJFDaLXTfxHoHNYYzWcflJ9JvJMVTeFkw13oZPriWAMp7xp3yYXv%2BkaGgMK2bDaGa6vETwKmbcJHucZJpQytMgJA3nQ%2B5zidd6S4mTe%2FV%2BbzpsWwe9cNa8UqLgV82HGMur5gHsqARvOw9dp1dZwDFvRG2GgAhGTrCPfzO%2FuTgICcQKA8CZAqt%2F3ZijuHiEnsZ9&X-Amz-Signature=c968e24782ab6f7cff6642c76ad60e744ec270bd8b109a7fa9306d6bdf3ef3b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
