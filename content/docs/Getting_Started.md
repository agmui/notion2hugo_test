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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC3QX6QO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIDMI2Gww7FceLmxESwIEqEALRJCP3niguV9lh4WvVNvRAiEAubgtyLrHd%2BbZD%2BxkFUH2OZZTPJtm5l%2F03sMLjyG%2BDOkqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIXXGxBgPTDAtuQTCrcA4%2B78jR1bTStx7TUwfCNyfPYaqddMb3YW9TsTdTpo95ZCOfllot%2F2G%2Bcf1WNgEDth9bvelRinICTpt7ARAK3xndN8Ed2iFgFxXqlgNz8Otv0KkoFEkPJqhMu8ZaEL4gH8kpA0%2F3LnCNeonXM6DvdiOSM5oZAkvl0G%2FddeqOGKJ1XZH%2Fc1tfoZsIG1jWomh36YRFw22uyFac3p0HEVmu%2BgdpNSr6hyj945DDKGcZ%2BmKPbMClzreClHUR%2F1ZHsWVHmk9bc8jCtt2zwjoG3PKiI5YpRF%2FiUmCOdr3noFLPOlOs0BA%2Bd8%2BHYt%2F%2B8IIoMKxsb%2BAw5UwkintMJj3gGw31xo3baXunAP0mT1%2FCCZZ%2F3n6TIlry3knnN4vn8CM6SzL9hRJDcxDIvHovZd6TJRuAvWtYwvxR8PVENeQNCZxMmVhWkCeTLbUP6yM2B3EQDXPy%2F%2BWXgLlYye2in%2Bj%2Faj0keD95MdeSkel%2BHa6MlaJy3UIAAZTwqlcx2zim3G4DIsa%2FmbvpKZO1nN6ihexO6e0wLMDh9dlMjtSE8n%2F2MdhiLIvaccx6ORjNM1riGpS2vlC9ia%2Bd%2FOMQBdMF9syvneUJR8%2B1jKzUcdBiZCBxaQ9WGimvwM7lsmUVRWPQ186%2FOMPqw8cEGOqUBPzhKuMB4oxT5Nlq6v49HiqjB3TTLJ3voOhYNcZPC8aYQdLMyllgQV%2F7JpbIImfSeGXVqBjDs%2BPyY2%2BNwPbOwh6o71nEasxotaEm7%2FmywlerH%2BLNgkEi488BLD0J2XpaymhuzT5dL5bQsT3YpRmtObRO0BNa1ONjdYGP%2Fuubk%2BeFPphu1li2nU8XRoOqkzL6CukNtvsrSDk9PIXzkhyIzU9Cvvmjp&X-Amz-Signature=0db46d3ba11402c038b4c8f27eb7507d21fd7206af425de9c4fc7d58627dccc0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC3QX6QO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIDMI2Gww7FceLmxESwIEqEALRJCP3niguV9lh4WvVNvRAiEAubgtyLrHd%2BbZD%2BxkFUH2OZZTPJtm5l%2F03sMLjyG%2BDOkqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIXXGxBgPTDAtuQTCrcA4%2B78jR1bTStx7TUwfCNyfPYaqddMb3YW9TsTdTpo95ZCOfllot%2F2G%2Bcf1WNgEDth9bvelRinICTpt7ARAK3xndN8Ed2iFgFxXqlgNz8Otv0KkoFEkPJqhMu8ZaEL4gH8kpA0%2F3LnCNeonXM6DvdiOSM5oZAkvl0G%2FddeqOGKJ1XZH%2Fc1tfoZsIG1jWomh36YRFw22uyFac3p0HEVmu%2BgdpNSr6hyj945DDKGcZ%2BmKPbMClzreClHUR%2F1ZHsWVHmk9bc8jCtt2zwjoG3PKiI5YpRF%2FiUmCOdr3noFLPOlOs0BA%2Bd8%2BHYt%2F%2B8IIoMKxsb%2BAw5UwkintMJj3gGw31xo3baXunAP0mT1%2FCCZZ%2F3n6TIlry3knnN4vn8CM6SzL9hRJDcxDIvHovZd6TJRuAvWtYwvxR8PVENeQNCZxMmVhWkCeTLbUP6yM2B3EQDXPy%2F%2BWXgLlYye2in%2Bj%2Faj0keD95MdeSkel%2BHa6MlaJy3UIAAZTwqlcx2zim3G4DIsa%2FmbvpKZO1nN6ihexO6e0wLMDh9dlMjtSE8n%2F2MdhiLIvaccx6ORjNM1riGpS2vlC9ia%2Bd%2FOMQBdMF9syvneUJR8%2B1jKzUcdBiZCBxaQ9WGimvwM7lsmUVRWPQ186%2FOMPqw8cEGOqUBPzhKuMB4oxT5Nlq6v49HiqjB3TTLJ3voOhYNcZPC8aYQdLMyllgQV%2F7JpbIImfSeGXVqBjDs%2BPyY2%2BNwPbOwh6o71nEasxotaEm7%2FmywlerH%2BLNgkEi488BLD0J2XpaymhuzT5dL5bQsT3YpRmtObRO0BNa1ONjdYGP%2Fuubk%2BeFPphu1li2nU8XRoOqkzL6CukNtvsrSDk9PIXzkhyIzU9Cvvmjp&X-Amz-Signature=40c173c8236428d5c50feb5cfcdb138153a050a5a775a435c945781ae1c1ae14&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC3QX6QO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIDMI2Gww7FceLmxESwIEqEALRJCP3niguV9lh4WvVNvRAiEAubgtyLrHd%2BbZD%2BxkFUH2OZZTPJtm5l%2F03sMLjyG%2BDOkqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIXXGxBgPTDAtuQTCrcA4%2B78jR1bTStx7TUwfCNyfPYaqddMb3YW9TsTdTpo95ZCOfllot%2F2G%2Bcf1WNgEDth9bvelRinICTpt7ARAK3xndN8Ed2iFgFxXqlgNz8Otv0KkoFEkPJqhMu8ZaEL4gH8kpA0%2F3LnCNeonXM6DvdiOSM5oZAkvl0G%2FddeqOGKJ1XZH%2Fc1tfoZsIG1jWomh36YRFw22uyFac3p0HEVmu%2BgdpNSr6hyj945DDKGcZ%2BmKPbMClzreClHUR%2F1ZHsWVHmk9bc8jCtt2zwjoG3PKiI5YpRF%2FiUmCOdr3noFLPOlOs0BA%2Bd8%2BHYt%2F%2B8IIoMKxsb%2BAw5UwkintMJj3gGw31xo3baXunAP0mT1%2FCCZZ%2F3n6TIlry3knnN4vn8CM6SzL9hRJDcxDIvHovZd6TJRuAvWtYwvxR8PVENeQNCZxMmVhWkCeTLbUP6yM2B3EQDXPy%2F%2BWXgLlYye2in%2Bj%2Faj0keD95MdeSkel%2BHa6MlaJy3UIAAZTwqlcx2zim3G4DIsa%2FmbvpKZO1nN6ihexO6e0wLMDh9dlMjtSE8n%2F2MdhiLIvaccx6ORjNM1riGpS2vlC9ia%2Bd%2FOMQBdMF9syvneUJR8%2B1jKzUcdBiZCBxaQ9WGimvwM7lsmUVRWPQ186%2FOMPqw8cEGOqUBPzhKuMB4oxT5Nlq6v49HiqjB3TTLJ3voOhYNcZPC8aYQdLMyllgQV%2F7JpbIImfSeGXVqBjDs%2BPyY2%2BNwPbOwh6o71nEasxotaEm7%2FmywlerH%2BLNgkEi488BLD0J2XpaymhuzT5dL5bQsT3YpRmtObRO0BNa1ONjdYGP%2Fuubk%2BeFPphu1li2nU8XRoOqkzL6CukNtvsrSDk9PIXzkhyIzU9Cvvmjp&X-Amz-Signature=115f5086fcaa709b5c15944b824ac05d82c0a71b17003a524d74051bde07cf57&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466723PSYOL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIDdxIKlbNmfjt4dO6omBmJfpvByh9e2emWuVJD7aTcyeAiAtxTNDxrT65jts97dddix23ecFmnWHXkjuvx37z5tOsyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD4S%2B%2BfBCfN%2F4BKfUKtwD4FOeTBATjCgb2Ln3FlPJWEvxN9c3u6x0OMASjLhTD4qx%2FsoV0rPANiKHWBgNwFPMTLoSaIIhS86u83FNhwjqATWHuU9V3VtBnxQqDTdaVJlr5uI640sNHTgA80rgwgN05Rz2px%2FEvNxMME%2B1NiSWDiCmf6gFeEj%2FwyW0HeT%2FfrB1U47zx4umrwub%2Fa%2Fd7WZYLGijwA86jh5P8uhqDRy7ufsLEDwKUEx48plUUdY47UC7Pp%2F7MIx4MTV1CgTMqjP1BszMiudx%2BzlgT%2B7MZOSaX3ocD0EU669bFI4ShR%2Fl1Ktk%2FYePNnhhqXHceB7MiTa6OYnGxPyJdvqCnPXvI4wLEqOLSKC3EVfPgThUCnx6zZlgHf2Tmty%2B2Hp7b7afL9Np3gCVpC5OTpU8kkcGyGOhdHRbjw9EU1fX77Z3Nz7sTQRurL87toJyOEcAfgVTKKYLJkAhueXQSK7%2FOFSnr7WLNN2iJUUwOgj96OS0XNuLePbcfykvwuBxI7K49CcQmqruuh8hsEbta1EwQZFUpwLHVQbMpjyLd3UodEHer96srJZCTMA6CxWDGOPPEGk6AgjkDPE4XHphySOEQgE34gWSmYXydW1gpNZrlNr2Tbk2O68Ep%2FMTX6I7kqPxyFkwkZnxwQY6pgHSzchNnvlgzwEZG64mgW%2F9AjTP56KXVyPRhcocuiFn5YTT4xTUu5rnQKiZokdKq%2FJ6mZwXS23vFR%2FthhN91rjJSVoiwy5Spo1sDfNovJ3AnB%2Bq77ub7%2BcWIEE9rigsQKzVAPE5W3A0gOhGaWGLwKDbPePyayf2qo0bIw36WOc%2FrXPeP7dq82dDq4brhi2sFmbYhlFvscatc5fsScVk9%2BH5dHirdTNf&X-Amz-Signature=645f64dadce56dddea887fb920692f0068fed52dffa1693b751de74d025413e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYZBFF7O%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIH0Glav4CzBtXE6e6CgBiw5o0ccFiC93XkWn2RazlGlAAiAvHFq3IdISY3gh4GaL4u6x1VmEmVXJSFfWCLq42lWjYCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyTOCVEL9hMvyeBMnKtwDjETg8Yqv1qISqq1dGtCeSjZyAklkcDTmC%2B7qHBjw1TiVdm%2FJ3RnbRfpljWBUwjLsYnSHd2Et3rmSvawNSQkCu3wFOetMa%2FLOmL3dbrbWkJXl0B6eOvSLPlykPs7elGlpA%2Fh1Qnbzu18NXvAWflBis9U5wRfnnipPuH%2BAPFnwEQp6tssZZDlJNUVIY0BAMSzNoMW6yy%2FxYKAYki%2FpUDIzO%2BygWZ943V5Niz32ACsAEMZVSnfnqC6q9wo9oFbUl9JO1Zwa71jQYW%2BvcnMhHCGTqevLGOUirUsIG5yJj51HUzNEFelhIsCwrF3TZxns5CzwaM7ftdgwDxQqvRjpFuPk%2BbUmVPMEOp1DHI%2Fvp2KzEO01zPcl9M3ovskIkp7sT8BAQ3V5E6bTZgH23nxVtZZqms5U0GbhVb%2Bw7MV3z%2BzEz19pkGRAS6LjBWUEy2hPwOHRHg%2FfNL9mLFKhB3tg8B5EckhVtuh6SMUVsEzUoUSj4icZXbhmSGgbaucs7NtknCpAaAl5vlP993jHgv8h%2FkYEPjXv44vD1hf2K2i4DUnJTt35i0DRcl6ApwGuJUu2t6lKxSWvuHFJTSvjslqmujC44w9%2FGC3NyXSSfIAU0%2FoMhx35pgRuAxJaDNKla1UwwN%2FwwQY6pgH5PF22KnmnIpBQoF1lSE5LfcCT0It0r0kB%2B7oewKqg2NqqmOrZKnb8Pffo5uBlHfOwEA8aBPU%2FFcMs311kvu%2BPk0cHj5UV0fSmDOWWUfnrbuW7GXqNvgtWkWgpRN0BmXF9WGQ%2Bc%2BfAuiE4xUjJq6TgV1BVqPJWUEUJeMpgN6iZbbXcPe4uRg1Sz%2BG36P%2FBRXsBAP%2FszGl2iW1%2Br%2FjMeX1jYCMWFv6b&X-Amz-Signature=635feb2d0fc396edb33dc9e80768f461c103462a3ac77e0a96463815c4edc6fd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC3QX6QO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIDMI2Gww7FceLmxESwIEqEALRJCP3niguV9lh4WvVNvRAiEAubgtyLrHd%2BbZD%2BxkFUH2OZZTPJtm5l%2F03sMLjyG%2BDOkqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIXXGxBgPTDAtuQTCrcA4%2B78jR1bTStx7TUwfCNyfPYaqddMb3YW9TsTdTpo95ZCOfllot%2F2G%2Bcf1WNgEDth9bvelRinICTpt7ARAK3xndN8Ed2iFgFxXqlgNz8Otv0KkoFEkPJqhMu8ZaEL4gH8kpA0%2F3LnCNeonXM6DvdiOSM5oZAkvl0G%2FddeqOGKJ1XZH%2Fc1tfoZsIG1jWomh36YRFw22uyFac3p0HEVmu%2BgdpNSr6hyj945DDKGcZ%2BmKPbMClzreClHUR%2F1ZHsWVHmk9bc8jCtt2zwjoG3PKiI5YpRF%2FiUmCOdr3noFLPOlOs0BA%2Bd8%2BHYt%2F%2B8IIoMKxsb%2BAw5UwkintMJj3gGw31xo3baXunAP0mT1%2FCCZZ%2F3n6TIlry3knnN4vn8CM6SzL9hRJDcxDIvHovZd6TJRuAvWtYwvxR8PVENeQNCZxMmVhWkCeTLbUP6yM2B3EQDXPy%2F%2BWXgLlYye2in%2Bj%2Faj0keD95MdeSkel%2BHa6MlaJy3UIAAZTwqlcx2zim3G4DIsa%2FmbvpKZO1nN6ihexO6e0wLMDh9dlMjtSE8n%2F2MdhiLIvaccx6ORjNM1riGpS2vlC9ia%2Bd%2FOMQBdMF9syvneUJR8%2B1jKzUcdBiZCBxaQ9WGimvwM7lsmUVRWPQ186%2FOMPqw8cEGOqUBPzhKuMB4oxT5Nlq6v49HiqjB3TTLJ3voOhYNcZPC8aYQdLMyllgQV%2F7JpbIImfSeGXVqBjDs%2BPyY2%2BNwPbOwh6o71nEasxotaEm7%2FmywlerH%2BLNgkEi488BLD0J2XpaymhuzT5dL5bQsT3YpRmtObRO0BNa1ONjdYGP%2Fuubk%2BeFPphu1li2nU8XRoOqkzL6CukNtvsrSDk9PIXzkhyIzU9Cvvmjp&X-Amz-Signature=75aeaf6257a58e84bfb437ebf893135c47761e3566de31fa00931393dda56b6f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
