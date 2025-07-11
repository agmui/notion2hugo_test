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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WQUWYIZ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxgwqEbPGmY4PN1bkzbnZaUUZqqnw%2F5jZm%2Fcykf2RGpwIhAIwuHEkTI%2FmBWWD3q4y5nJ9y%2BY5Lkh%2FQPGrXzzGveEZFKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwvmWWuxGGv5zDV0sq3AMvGRT0fKXywpZrVKXAQP0bOZw0zore9vDV%2FImIJx9%2FOPS1URvT%2FHHltvOcEpPNBtxBVqXQ2SAF2DejyDEFi2X6K3BTLCjqvGdKMlGcMX%2BA%2BQHcryadre8kS4tg57ycXo5mO%2FsaIUJHhsV7N8ez%2FvuPQmbxCY1141v%2FyKXrfMSDJFYzpi2qSGmiE0Rjy0%2FL4DkWhsjhUX2wukzHpxOql1XaWJ8%2FGCdFfBtTDjTaHesBkMG%2Byq3IK%2FLVI9HM0JmcRRouKp%2FRYHfo5Os3M0CQi%2FAX18cF2sIsT8hlJ6ZULuyB%2Fbz2MlcRQqx70rHX8DNq8X9qiD4IEEc5uSPyPFgSNUKzYtn3RLOGHYZM4JJYsVQWDAmRYj3BdOuCMEhFhm2TaupglgV%2F120xxazmv0hN7tuVZwRubKJhkv2G3CDmRtBV7ggIOYu%2BYQeI2R9JdGDt4BmdDIZyTlwezGNeaVzdjjJ0VhaH%2BR0o6uLBniOH7U1nKJxmgo4Z4UHshk7q19YoPId%2B%2FqPMXISuPYpHfcrHudz7tTfHCyJUcZdcsj%2BzGHNwlD%2F2Hp7ZFxtl818t5o6NlCPfaciGhhXRIC4yoRxk4vwDImIQQJDFCCHbUEfBR52wg9AzTaCh9fL3HHsJbjDu%2FsPDBjqkATIH69fpq%2FNTebchkmUG%2FOc89gGVCyrbUQFt5N%2F7JgpGG60BQ0gw3oilvSBq7eLNS3cROqMuGXLAx%2BM3zfz%2FxyrWCzU6PKAyCp0vhiPqZMIay%2FZ4cKalxC6oMEZl3TWdYY14oJ0e2iopiBfCqfscDkdZknw8sbfQgCHtsxcNTf8DkRziUpabHqp5FiHkIa5SJtlbZndtJd1K6qyFikfYqQQrXPy9&X-Amz-Signature=062248df4d7295dc74a9fcb5c02f94f251d81598817bbac032fc14b970a55eb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WQUWYIZ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxgwqEbPGmY4PN1bkzbnZaUUZqqnw%2F5jZm%2Fcykf2RGpwIhAIwuHEkTI%2FmBWWD3q4y5nJ9y%2BY5Lkh%2FQPGrXzzGveEZFKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwvmWWuxGGv5zDV0sq3AMvGRT0fKXywpZrVKXAQP0bOZw0zore9vDV%2FImIJx9%2FOPS1URvT%2FHHltvOcEpPNBtxBVqXQ2SAF2DejyDEFi2X6K3BTLCjqvGdKMlGcMX%2BA%2BQHcryadre8kS4tg57ycXo5mO%2FsaIUJHhsV7N8ez%2FvuPQmbxCY1141v%2FyKXrfMSDJFYzpi2qSGmiE0Rjy0%2FL4DkWhsjhUX2wukzHpxOql1XaWJ8%2FGCdFfBtTDjTaHesBkMG%2Byq3IK%2FLVI9HM0JmcRRouKp%2FRYHfo5Os3M0CQi%2FAX18cF2sIsT8hlJ6ZULuyB%2Fbz2MlcRQqx70rHX8DNq8X9qiD4IEEc5uSPyPFgSNUKzYtn3RLOGHYZM4JJYsVQWDAmRYj3BdOuCMEhFhm2TaupglgV%2F120xxazmv0hN7tuVZwRubKJhkv2G3CDmRtBV7ggIOYu%2BYQeI2R9JdGDt4BmdDIZyTlwezGNeaVzdjjJ0VhaH%2BR0o6uLBniOH7U1nKJxmgo4Z4UHshk7q19YoPId%2B%2FqPMXISuPYpHfcrHudz7tTfHCyJUcZdcsj%2BzGHNwlD%2F2Hp7ZFxtl818t5o6NlCPfaciGhhXRIC4yoRxk4vwDImIQQJDFCCHbUEfBR52wg9AzTaCh9fL3HHsJbjDu%2FsPDBjqkATIH69fpq%2FNTebchkmUG%2FOc89gGVCyrbUQFt5N%2F7JgpGG60BQ0gw3oilvSBq7eLNS3cROqMuGXLAx%2BM3zfz%2FxyrWCzU6PKAyCp0vhiPqZMIay%2FZ4cKalxC6oMEZl3TWdYY14oJ0e2iopiBfCqfscDkdZknw8sbfQgCHtsxcNTf8DkRziUpabHqp5FiHkIa5SJtlbZndtJd1K6qyFikfYqQQrXPy9&X-Amz-Signature=b8ba45d8dddd763a298886f5f2d6a12d393a26638578b3dbfbf0d7daaa9d58d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WQUWYIZ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxgwqEbPGmY4PN1bkzbnZaUUZqqnw%2F5jZm%2Fcykf2RGpwIhAIwuHEkTI%2FmBWWD3q4y5nJ9y%2BY5Lkh%2FQPGrXzzGveEZFKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwvmWWuxGGv5zDV0sq3AMvGRT0fKXywpZrVKXAQP0bOZw0zore9vDV%2FImIJx9%2FOPS1URvT%2FHHltvOcEpPNBtxBVqXQ2SAF2DejyDEFi2X6K3BTLCjqvGdKMlGcMX%2BA%2BQHcryadre8kS4tg57ycXo5mO%2FsaIUJHhsV7N8ez%2FvuPQmbxCY1141v%2FyKXrfMSDJFYzpi2qSGmiE0Rjy0%2FL4DkWhsjhUX2wukzHpxOql1XaWJ8%2FGCdFfBtTDjTaHesBkMG%2Byq3IK%2FLVI9HM0JmcRRouKp%2FRYHfo5Os3M0CQi%2FAX18cF2sIsT8hlJ6ZULuyB%2Fbz2MlcRQqx70rHX8DNq8X9qiD4IEEc5uSPyPFgSNUKzYtn3RLOGHYZM4JJYsVQWDAmRYj3BdOuCMEhFhm2TaupglgV%2F120xxazmv0hN7tuVZwRubKJhkv2G3CDmRtBV7ggIOYu%2BYQeI2R9JdGDt4BmdDIZyTlwezGNeaVzdjjJ0VhaH%2BR0o6uLBniOH7U1nKJxmgo4Z4UHshk7q19YoPId%2B%2FqPMXISuPYpHfcrHudz7tTfHCyJUcZdcsj%2BzGHNwlD%2F2Hp7ZFxtl818t5o6NlCPfaciGhhXRIC4yoRxk4vwDImIQQJDFCCHbUEfBR52wg9AzTaCh9fL3HHsJbjDu%2FsPDBjqkATIH69fpq%2FNTebchkmUG%2FOc89gGVCyrbUQFt5N%2F7JgpGG60BQ0gw3oilvSBq7eLNS3cROqMuGXLAx%2BM3zfz%2FxyrWCzU6PKAyCp0vhiPqZMIay%2FZ4cKalxC6oMEZl3TWdYY14oJ0e2iopiBfCqfscDkdZknw8sbfQgCHtsxcNTf8DkRziUpabHqp5FiHkIa5SJtlbZndtJd1K6qyFikfYqQQrXPy9&X-Amz-Signature=14c3a7f521749a85fb020427f0145daded9f21bffadb99e73231d0a69bbdf409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CNYFV3B%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLNuuefONH%2FGM%2BDXHaFMQVPnYctns%2B9FHVqajmRG8RJAiEAyxXqeT8B0we8fl2DAN0eHHwajWWMc2K01YdTpIQVZS8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNeuOxmBtlDS3kYGMCrcA0JDHHG1TEqh6agcZRdoBdGhvt%2BcOGaY9lJPQlhg93wqnbgKUa%2FxJ9JzqX9IjaBIzBQyR58La8gFYbr8baNQfUX6gu%2FcY0WuC7fkzdPsr7UTmGgWx80c8f9IqQn8Als7xjujZLnVT8Fr%2BFs8Z1njyRRbR1VajJDuHmWLW3a3ll5f0%2BEyEUQcvgrzn1lrnv06G4K39anNaYA%2BKq7qcec4VndtLfoxu6GOPjcQ8Xl1xRX%2BEMK9STDEFbuwXlLNgaLKRKSembovwCHgFDDT7Y9kEVg3dsnLDVFGbKNSnXk5RyCvvQw%2BSHfS5cssdaWbkaNSJbme1L8jUmAhLcwUKG2hNw7NW9DwilrCokZxLlW%2FQFYdfulUfLpafSjfDzRrmXFanCP0ipEfWNZOuQd8wZ8beeftHGeKp1gB1gt%2BXcfZ9F5Bfk%2FoQHbC8vnC1QKe3raTf0AClTXlfXMn27aYreD%2Bzt3FbNuiTk2oJBypApwx6Z%2FwEWDXpXSChkq0V%2BH6vScppatjmbJroCdlRGBsOR%2BWdXbsl0BXIuagFbgjnN5inrY5INEKb9u56ysKUawa6HmaPm0N%2FxKJwfUyjsyxvnvg8Y5ezIoXFJCprb8byP%2B%2FNuw8vDXWt%2FHk%2BtBgM7agMN3%2Bw8MGOqUBbMZYbO2CJ0w%2FOh2FJMvEPu4vXa4Y6KnW9pNXBrbdzVzUFCYtYsi4ZFVb%2FBhqA0cKRN2tt8T46TU7lxeZbGC%2FXTi1g0mxy9eT%2B5rTqbtHYdscCMrsx6DbDromCuRFhxJ5WFYRsLCMIEkZh623OkxH2OkZxMWhVg%2FrLmIhR7D0RWnEp9vtyfDAJTtu8QyPjv6v%2FPoCPMO%2BjdEsjwthpCzCkV8NWnwm&X-Amz-Signature=a2a09e9f8e260424e56eb7f26adea827a5b1500be543ba7eb8a9cb38c539853b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTDUFTKH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6GnAdjK2keFXVIfDnV8KohaZZzcqdEa92d37eJh47kgIhAIkmDPlEqDBz6X4m%2FsTn66bwRTSuKSEK2N%2B%2FmuSE%2Fya%2BKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkDavS60M%2BoKJZ6u8q3ANyNbx9KrQ9y5x%2BNj7QH4dxfEtxt1FBrb8SJEGIjDkD4AUk%2F1xyLTN36YohykPwXB9tdX%2BAUQFOG3PhiLsYsbO6iyLNb2q6TddO5jHFt%2B2Y9MGxMw0%2B8vA4YqDTDRqRozuqkx7jYxGBYI9%2F9bJUN40Ia%2Fql1vW66VwirlPpt7Zm%2Bk3e9Qw4BKHRAfeTK%2F151ya4BMAkOWVV5mlFayBWtT47wcj04u%2BpYCOLtc5OyW8HSEUicUcrs8LqeSahtK%2Fs7PX1yfw7LON9aIj9RmS3PuLvUJSWTK2QdSCefp5MXdVd9MhbFEwm3yVFUCi%2BJutB%2BedWkv4Bn%2FQDSrdgAH2ryfbjYFDE4mappdW%2BpOzL8MQdcxPG969Ve%2FG47%2B5r66jOgrd%2FHFY1P1cgwuA%2BlkROaC17CHTPlbdJhhoTy5YA4IksrqvFBsiCeAFGrSkQ8mnm261gBJx66846F9%2Fqts%2BZ23upTztTIstZCTeT6A7LS4kB8pjzWzo%2BWFi7MkPwAKV0cYn%2F%2F3ugg1fiu9wYVJgA0RghE4AB5sDiK2kdyzxkKhCJCXVQL6OM1jhP4hYPSjdCC1Fg0HeIaWianQdvJiIw4oGAUdyg8MJgafyqTKswWxJ93GD45tV%2BMyvYmSebgjD8%2FsPDBjqkAbTipfkWq8FP2CmXuAhKsAzq%2Fdk27wsfJaeKnCurj5Zz1Cn6QVoV84KRRwK1UZomNuw21qudMxJ%2F8AkG3C8tNX%2Fbf%2Fv2twqct5vZXXhlhTdHvBkkZD%2Fs7LT5U4EIzGOpItuiBzzdZfuBMWJgT7wf72AuuskMHEs0pt9p8xSkK%2FUexSuslJCv3sHFlF7Mkxr2hkaBEoGqWD6YeyTsL%2FiPhEm22We1&X-Amz-Signature=d3b734835ffb4ab3467699fb2cbb9bd1408472b50f469045776f1f211667a901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WQUWYIZ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxgwqEbPGmY4PN1bkzbnZaUUZqqnw%2F5jZm%2Fcykf2RGpwIhAIwuHEkTI%2FmBWWD3q4y5nJ9y%2BY5Lkh%2FQPGrXzzGveEZFKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwvmWWuxGGv5zDV0sq3AMvGRT0fKXywpZrVKXAQP0bOZw0zore9vDV%2FImIJx9%2FOPS1URvT%2FHHltvOcEpPNBtxBVqXQ2SAF2DejyDEFi2X6K3BTLCjqvGdKMlGcMX%2BA%2BQHcryadre8kS4tg57ycXo5mO%2FsaIUJHhsV7N8ez%2FvuPQmbxCY1141v%2FyKXrfMSDJFYzpi2qSGmiE0Rjy0%2FL4DkWhsjhUX2wukzHpxOql1XaWJ8%2FGCdFfBtTDjTaHesBkMG%2Byq3IK%2FLVI9HM0JmcRRouKp%2FRYHfo5Os3M0CQi%2FAX18cF2sIsT8hlJ6ZULuyB%2Fbz2MlcRQqx70rHX8DNq8X9qiD4IEEc5uSPyPFgSNUKzYtn3RLOGHYZM4JJYsVQWDAmRYj3BdOuCMEhFhm2TaupglgV%2F120xxazmv0hN7tuVZwRubKJhkv2G3CDmRtBV7ggIOYu%2BYQeI2R9JdGDt4BmdDIZyTlwezGNeaVzdjjJ0VhaH%2BR0o6uLBniOH7U1nKJxmgo4Z4UHshk7q19YoPId%2B%2FqPMXISuPYpHfcrHudz7tTfHCyJUcZdcsj%2BzGHNwlD%2F2Hp7ZFxtl818t5o6NlCPfaciGhhXRIC4yoRxk4vwDImIQQJDFCCHbUEfBR52wg9AzTaCh9fL3HHsJbjDu%2FsPDBjqkATIH69fpq%2FNTebchkmUG%2FOc89gGVCyrbUQFt5N%2F7JgpGG60BQ0gw3oilvSBq7eLNS3cROqMuGXLAx%2BM3zfz%2FxyrWCzU6PKAyCp0vhiPqZMIay%2FZ4cKalxC6oMEZl3TWdYY14oJ0e2iopiBfCqfscDkdZknw8sbfQgCHtsxcNTf8DkRziUpabHqp5FiHkIa5SJtlbZndtJd1K6qyFikfYqQQrXPy9&X-Amz-Signature=142a18e78d8e605285ef68830f5e15a56afc383f83d38e955e7503b2708a274f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
