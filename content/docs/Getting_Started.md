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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4RTXFP%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCWm0tHYz5llPDWfnQzup2Mgjx8RtcbUgP6Lz3Y%2Fu1uDgIhAKugeyANDcMr%2FRpIdtZBDGgzsU4nLNZX9rR2osVNpAdjKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE558muljOR2%2BnlSUq3AOsNn7wnS%2BXhUP3V9%2BB%2F%2FoZWymlwsUrQ%2BU5eWLu3dzm5ve0bh%2FTPWk1D4WFY7RdDm3zkNekTh3VpcVYb5njBu5vCJdtXV2iHGDGp8xuRk4jmAdLA3dMbyvzvsRWeW3Ez%2Fa9MnLO0eAeUbzozFGwzI%2F6sUlsweOf11%2Bs7VIpG8nHNOKeTbOeT7YrUQRuOI36DIWFbIevm2xCyYXylK3fHJC0as1Ro5hJ7r38FwgCwGWRmTYndJUgx7He8mJqqF5RwcRkwra9GILdECvGcJeLSXVR%2Bno1njeEG0DVVF%2BkExK7%2FOyk%2B7xnZQ%2FgSRn23WM5fLwNqRtMpqjqbQCoIcssHtZkX4RTfxAEEZyw6ln1yHQ8ZygtGTg1DXBPn7OeCcebNbaZ6SvEhBm%2BVioIl1LsPzIBRc59GcYRx0NkKAbjD3ICac5DJAS8SGdeYvlpiiqLYZtzBld8mHq8wACq0e7Almo9Wg2TPTS6PPBFPWRRsbH%2Bdm%2BVp6oReJBXMx6RMllVNu693dMy9C4lzRFanuRx1xvIZfc5MYh%2FxDtTRRxR0%2BkwTrzU03Vqoo7JzcLaKTKzo%2FHy6bzqtBzMQnR3Adb4xvN0lrZfNF7Y2y0rOG2rdbzDmjIM0NLXkWB4RG4mpDDd267CBjqkASFixCIhR1je1XRY26quFB2rVmvuLzv2hhYjw1z5EWpI3jIz2a2rSGyHxP9xId%2FeeDOiGbv57I%2FqWCjqtAGkEoivT4UZfdwfws%2Fn4pmgJM8NSjXNc4uNfIkAA8HWVVXNLrE4Z4e9YCO2dno5BRRsSNGD%2BKVzsvFTnB9bubhASdjlQ1%2FQ3xfb75r9dgLDVNmIDTfhANl7H%2FlF3aVvwlCjEcT8J8EL&X-Amz-Signature=61a3de52d81976febd133ded1aa4a28b2682607a9c8dbf0aae99b03dcf47e9f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4RTXFP%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCWm0tHYz5llPDWfnQzup2Mgjx8RtcbUgP6Lz3Y%2Fu1uDgIhAKugeyANDcMr%2FRpIdtZBDGgzsU4nLNZX9rR2osVNpAdjKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE558muljOR2%2BnlSUq3AOsNn7wnS%2BXhUP3V9%2BB%2F%2FoZWymlwsUrQ%2BU5eWLu3dzm5ve0bh%2FTPWk1D4WFY7RdDm3zkNekTh3VpcVYb5njBu5vCJdtXV2iHGDGp8xuRk4jmAdLA3dMbyvzvsRWeW3Ez%2Fa9MnLO0eAeUbzozFGwzI%2F6sUlsweOf11%2Bs7VIpG8nHNOKeTbOeT7YrUQRuOI36DIWFbIevm2xCyYXylK3fHJC0as1Ro5hJ7r38FwgCwGWRmTYndJUgx7He8mJqqF5RwcRkwra9GILdECvGcJeLSXVR%2Bno1njeEG0DVVF%2BkExK7%2FOyk%2B7xnZQ%2FgSRn23WM5fLwNqRtMpqjqbQCoIcssHtZkX4RTfxAEEZyw6ln1yHQ8ZygtGTg1DXBPn7OeCcebNbaZ6SvEhBm%2BVioIl1LsPzIBRc59GcYRx0NkKAbjD3ICac5DJAS8SGdeYvlpiiqLYZtzBld8mHq8wACq0e7Almo9Wg2TPTS6PPBFPWRRsbH%2Bdm%2BVp6oReJBXMx6RMllVNu693dMy9C4lzRFanuRx1xvIZfc5MYh%2FxDtTRRxR0%2BkwTrzU03Vqoo7JzcLaKTKzo%2FHy6bzqtBzMQnR3Adb4xvN0lrZfNF7Y2y0rOG2rdbzDmjIM0NLXkWB4RG4mpDDd267CBjqkASFixCIhR1je1XRY26quFB2rVmvuLzv2hhYjw1z5EWpI3jIz2a2rSGyHxP9xId%2FeeDOiGbv57I%2FqWCjqtAGkEoivT4UZfdwfws%2Fn4pmgJM8NSjXNc4uNfIkAA8HWVVXNLrE4Z4e9YCO2dno5BRRsSNGD%2BKVzsvFTnB9bubhASdjlQ1%2FQ3xfb75r9dgLDVNmIDTfhANl7H%2FlF3aVvwlCjEcT8J8EL&X-Amz-Signature=d0ad61b9e29cd66974a10d5ed2652fd9c74596a73fa270b3794d455066c6bd7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4RTXFP%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCWm0tHYz5llPDWfnQzup2Mgjx8RtcbUgP6Lz3Y%2Fu1uDgIhAKugeyANDcMr%2FRpIdtZBDGgzsU4nLNZX9rR2osVNpAdjKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE558muljOR2%2BnlSUq3AOsNn7wnS%2BXhUP3V9%2BB%2F%2FoZWymlwsUrQ%2BU5eWLu3dzm5ve0bh%2FTPWk1D4WFY7RdDm3zkNekTh3VpcVYb5njBu5vCJdtXV2iHGDGp8xuRk4jmAdLA3dMbyvzvsRWeW3Ez%2Fa9MnLO0eAeUbzozFGwzI%2F6sUlsweOf11%2Bs7VIpG8nHNOKeTbOeT7YrUQRuOI36DIWFbIevm2xCyYXylK3fHJC0as1Ro5hJ7r38FwgCwGWRmTYndJUgx7He8mJqqF5RwcRkwra9GILdECvGcJeLSXVR%2Bno1njeEG0DVVF%2BkExK7%2FOyk%2B7xnZQ%2FgSRn23WM5fLwNqRtMpqjqbQCoIcssHtZkX4RTfxAEEZyw6ln1yHQ8ZygtGTg1DXBPn7OeCcebNbaZ6SvEhBm%2BVioIl1LsPzIBRc59GcYRx0NkKAbjD3ICac5DJAS8SGdeYvlpiiqLYZtzBld8mHq8wACq0e7Almo9Wg2TPTS6PPBFPWRRsbH%2Bdm%2BVp6oReJBXMx6RMllVNu693dMy9C4lzRFanuRx1xvIZfc5MYh%2FxDtTRRxR0%2BkwTrzU03Vqoo7JzcLaKTKzo%2FHy6bzqtBzMQnR3Adb4xvN0lrZfNF7Y2y0rOG2rdbzDmjIM0NLXkWB4RG4mpDDd267CBjqkASFixCIhR1je1XRY26quFB2rVmvuLzv2hhYjw1z5EWpI3jIz2a2rSGyHxP9xId%2FeeDOiGbv57I%2FqWCjqtAGkEoivT4UZfdwfws%2Fn4pmgJM8NSjXNc4uNfIkAA8HWVVXNLrE4Z4e9YCO2dno5BRRsSNGD%2BKVzsvFTnB9bubhASdjlQ1%2FQ3xfb75r9dgLDVNmIDTfhANl7H%2FlF3aVvwlCjEcT8J8EL&X-Amz-Signature=1eb8754cd362b278ec0bce9e6bf0871537a5a950716e2f76cb487a4b871b1ad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNAV5DWC%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCTAPBnkN7jdc5lFHQ5UzygBK9gCiCto2icVFHaODoKGgIhANXa%2BnyBexp%2B8wi1Ly9QKZQzbZcL1ptymk0W6KrRmyAvKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYU%2BK5BEVH5MSW3Yoq3AP7YbDTMcbxLbY4aW3rnyPTmeFe4z%2FwDKLOa3RizsX24MxsMF%2FdNRwPrFxHqTISasTERPzs06DSLJivZZjA1otg8NqarbmVrCSoyIVGvR56va6i%2F0Hu%2BRJmPp5lvwKrvFmJwzQ%2B81cVQedJbKRPGD5XCx%2BCMfFams1GYDrsMBdviWYLYCCLi%2F9os1ZIHIHAJogDdRqFPy552Wapuw6zGBYNUtAdlebi1R2NE2%2BFfh5q8DLHye1MUhv%2FYmiYT7psb%2FFTYT7xl6yODwQ8gUss7eZ5rQoLlMa6Vke4LLEIBvf%2Fc8HKBdI2dv4ZhnvzoxPTqZDK6r0YwCmL60J%2BU20qoWmUOBcxzd6VACeehZ0H%2FvX0b6sIteTGVOYiLZmOW6jHkXX3Q31rjY42XwCiqGRpEehOFzaEAxKFItNGjZMsQuFPzTHdieRYNKYpkD%2F1tzrN%2Bd33IxpYUxkwvl%2Fj%2FWXX%2FizBE3Owmuv%2BozqNseBJsLFteqZXAD6wVDt84M359NClGcsCqoaGzZ77mbNJOOU57gYgCCdW5eo1%2Fs5%2BjArL2wRA0cDNT6P1J7o%2Bbq%2BOVJKlGQUkSeRYpV8rowpvCRjKGn31S0Nps7xjxkoZaFkmttYwEPBEgFI9vd45adx7djCapq7CBjqkAXqouK%2FvBMDzRcb3fOzi3UcQBuejorC0SrAT5XYHkKHKE3UngAiGn96YbYTBW%2BisPxFmDfyFm22c%2FftzjEAxgb8rj%2FVyalV2JUaA8GOAAvt3fsMufASsm96dEv3160YpLRX2gHe90mxSzCYIVh3C9bAMdpaD8j3u60RgTmodMUX1hxpsiIxljUX15wPpdHVUz%2BLE9sE1nMoxMgtZAbaVmdPjwDaW&X-Amz-Signature=f42d3a28f2ccf3b1f4c40758d80f30b5eaa8c294d37ab78f5cd5e1c37694b9a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V54M7C24%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC%2BA16%2F9BDN7ckx%2F2P9WEdTJ2qzO6FAvsMQanzRmaHAVAIhAPRJx9zo5ugMFG9oYg8kzI9PbczONJfuyJwOfkYdXBM4KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDZ6VE%2B9No4D6bp8Eq3APAxZKWZYUOg8s3kiIagWggPr0dgUtb2AzrhDmovViPKHfxKJxIcXJWJruYbAB0%2FDA9PcRYVJxNAikRWSzQzjWd10qeVaflGMl2bsU%2FbI%2BX5aN2gY0bSeh0Ch177vJEbsginldWtk9O66HHLy94zWSdCq4i9TZzHPETEjUaM9tcjCuY0k7f9h6%2FFn2xaPqZ4TFdxFjLmmheC%2BwXZ6rPOOnPB0Xlf%2BgOg%2BKXRpHqBdB4P9mCXQWu%2Fat944BouO%2FKE%2BKmBfKt3AP5EUooc1r8j%2Bo7DIz%2Bw8LbOKpTWfJTWLJ%2BivKaEGwKkn%2B7U54lotkO%2BZ%2BujnHkaYlacRgmTEr4liYJ2ZKBnV8xkRVLtBCKGEaey7BlPKvMPoYpGmYF9OSErZjK%2FdIdtNyXrQJKcDsyDAt1XZHke%2B1uO0z65aSM1IYy3xnfWXE9Oo9p%2FRVaD%2B6gB22EU%2ByNq5MoHRH5DvZV8h5PRiNDHQw6v%2Fxv1Qmym9Gh%2Fev6G2kvjaUXru%2Fq270ZQ4QdfrJLRRim8G5TrepZpeweW63aVjq9L7kXgb4ZXN3FXqikmXqHIgceK1MQ6anY1a%2F8S9pA4xegBEwU46OCMozrG%2BhYC0VBfrAzjroBMqng7BbzR0T4BE1tyypMKzCu2q7CBjqkAfdpH9%2FJrAQ0Th%2BYyvUnkx6sZu%2BOMbaKlqZRN%2FQaZDffQZV0d%2BBKmPDBGkGXxRJadYOZGHh99ueeE5f7QuLqVL5eSgW3BOnqmh3boe%2FFWATO9QKR49tv75uDFN%2BhUXlFDUDFwWDTZjU9TxQaZDY7RfTaK0YREX91PYXeTfxhjoBExwnJuvldX1%2BxggXSGdZFLUX0RI%2BwiN2K%2BzN%2FbXpgfH3d45XG&X-Amz-Signature=87f552e0a93ad38960f5b1b8928a39eb2c2b87c9f7f163e008e8ce71a1277d51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4RTXFP%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCWm0tHYz5llPDWfnQzup2Mgjx8RtcbUgP6Lz3Y%2Fu1uDgIhAKugeyANDcMr%2FRpIdtZBDGgzsU4nLNZX9rR2osVNpAdjKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE558muljOR2%2BnlSUq3AOsNn7wnS%2BXhUP3V9%2BB%2F%2FoZWymlwsUrQ%2BU5eWLu3dzm5ve0bh%2FTPWk1D4WFY7RdDm3zkNekTh3VpcVYb5njBu5vCJdtXV2iHGDGp8xuRk4jmAdLA3dMbyvzvsRWeW3Ez%2Fa9MnLO0eAeUbzozFGwzI%2F6sUlsweOf11%2Bs7VIpG8nHNOKeTbOeT7YrUQRuOI36DIWFbIevm2xCyYXylK3fHJC0as1Ro5hJ7r38FwgCwGWRmTYndJUgx7He8mJqqF5RwcRkwra9GILdECvGcJeLSXVR%2Bno1njeEG0DVVF%2BkExK7%2FOyk%2B7xnZQ%2FgSRn23WM5fLwNqRtMpqjqbQCoIcssHtZkX4RTfxAEEZyw6ln1yHQ8ZygtGTg1DXBPn7OeCcebNbaZ6SvEhBm%2BVioIl1LsPzIBRc59GcYRx0NkKAbjD3ICac5DJAS8SGdeYvlpiiqLYZtzBld8mHq8wACq0e7Almo9Wg2TPTS6PPBFPWRRsbH%2Bdm%2BVp6oReJBXMx6RMllVNu693dMy9C4lzRFanuRx1xvIZfc5MYh%2FxDtTRRxR0%2BkwTrzU03Vqoo7JzcLaKTKzo%2FHy6bzqtBzMQnR3Adb4xvN0lrZfNF7Y2y0rOG2rdbzDmjIM0NLXkWB4RG4mpDDd267CBjqkASFixCIhR1je1XRY26quFB2rVmvuLzv2hhYjw1z5EWpI3jIz2a2rSGyHxP9xId%2FeeDOiGbv57I%2FqWCjqtAGkEoivT4UZfdwfws%2Fn4pmgJM8NSjXNc4uNfIkAA8HWVVXNLrE4Z4e9YCO2dno5BRRsSNGD%2BKVzsvFTnB9bubhASdjlQ1%2FQ3xfb75r9dgLDVNmIDTfhANl7H%2FlF3aVvwlCjEcT8J8EL&X-Amz-Signature=72b51299b52eaa58220d73666b50f0316f5c67c49dabea79625d433d27c105a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
