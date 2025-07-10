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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5DCYOEK%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoqiJy%2FZuzowagWOqRE0fUnUzJ6iy%2BBIk7IJE3KKUwKAIhAJFlLs19aolwc3pXymtrEBXpRPT2PPzEJKsR7WwKnB26KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCH8huOr7V%2BdhIcWcq3AO%2FwG7x8AHmCQh2upQM6Ir5c4QE5RzBqjpt9T7mznpPbilLI%2BprfpP%2Fq1z7hFlNLLAmHPsWwDqBvjw5PMWOphBw38lnmsn2wqcWTVO6sp9sxooJ1c0CfVeorlXIHp721RMz2tDriyHyNVrluKurS9aElKfvp6d6m4JSHxKdDgHSfitppN1BzVn01mO74azw84sCznk5pKNYgZdkhsfe9Mbc6DhcaMnHY17bJXzyArm7JQI66J0HTW201qu%2BIeEhgl559vB1go96STPcXGFzi%2BBC0ditFLdqN2gJCgB0Pw6lcOfqMqrf970HDQFg69ox39p5X1wcKbXCNb8EYX%2BmJQRJiRniR%2FMQpxUzhnXLLEBnJRV07uTQgFxYAxKEu7OBQnV104PCFX2wEIuvbsHQgpbr0%2Fm%2BSUcxgowBQyczFR45BE6eahHfMeRc8aBwxejXZeckmdMMPTDMHNuf5te2OKF6ZOoQK5NeFvNm4KNwfj7%2FI3akBm3gmgXx7J0OjHSsn%2Bk6cNUxBeeZubLLx2cgoC00XYOuHJncfFZmuBlD7Gr8n6JSL4NHMU6owpcpBtdgkxrJyQHYCj3du308SyfUmeOQB7b9A0g3DV5CcNwyiz3sFheZIM%2F0yn3xaWWwujCizcDDBjqkAZpP9XRYf53RmyWRiyqpC%2BrSsvMgroz%2BFnql7e0Sz1nJY17TY%2BnxJWm0GOb%2Fi2vEbF1KjXiAOeIvjdftlx6odnwZRDooqfWrLczSy4xi0zhq2rFPXw%2BxOnFPC5Bh7goSAUJbys0LI4XrrJgLfiFem4uQqL%2BB1FxbsBazLmQvIt1WTFwSf87U3pnpcO83hQuu4pt7kJ6pgXlSqcv%2F0DQ9%2ByV4CMmA&X-Amz-Signature=50b4dc112dd10f8210a46056ea615746509f52b90c966037db9c7ed07d40cfa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5DCYOEK%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoqiJy%2FZuzowagWOqRE0fUnUzJ6iy%2BBIk7IJE3KKUwKAIhAJFlLs19aolwc3pXymtrEBXpRPT2PPzEJKsR7WwKnB26KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCH8huOr7V%2BdhIcWcq3AO%2FwG7x8AHmCQh2upQM6Ir5c4QE5RzBqjpt9T7mznpPbilLI%2BprfpP%2Fq1z7hFlNLLAmHPsWwDqBvjw5PMWOphBw38lnmsn2wqcWTVO6sp9sxooJ1c0CfVeorlXIHp721RMz2tDriyHyNVrluKurS9aElKfvp6d6m4JSHxKdDgHSfitppN1BzVn01mO74azw84sCznk5pKNYgZdkhsfe9Mbc6DhcaMnHY17bJXzyArm7JQI66J0HTW201qu%2BIeEhgl559vB1go96STPcXGFzi%2BBC0ditFLdqN2gJCgB0Pw6lcOfqMqrf970HDQFg69ox39p5X1wcKbXCNb8EYX%2BmJQRJiRniR%2FMQpxUzhnXLLEBnJRV07uTQgFxYAxKEu7OBQnV104PCFX2wEIuvbsHQgpbr0%2Fm%2BSUcxgowBQyczFR45BE6eahHfMeRc8aBwxejXZeckmdMMPTDMHNuf5te2OKF6ZOoQK5NeFvNm4KNwfj7%2FI3akBm3gmgXx7J0OjHSsn%2Bk6cNUxBeeZubLLx2cgoC00XYOuHJncfFZmuBlD7Gr8n6JSL4NHMU6owpcpBtdgkxrJyQHYCj3du308SyfUmeOQB7b9A0g3DV5CcNwyiz3sFheZIM%2F0yn3xaWWwujCizcDDBjqkAZpP9XRYf53RmyWRiyqpC%2BrSsvMgroz%2BFnql7e0Sz1nJY17TY%2BnxJWm0GOb%2Fi2vEbF1KjXiAOeIvjdftlx6odnwZRDooqfWrLczSy4xi0zhq2rFPXw%2BxOnFPC5Bh7goSAUJbys0LI4XrrJgLfiFem4uQqL%2BB1FxbsBazLmQvIt1WTFwSf87U3pnpcO83hQuu4pt7kJ6pgXlSqcv%2F0DQ9%2ByV4CMmA&X-Amz-Signature=c61e1722039044b33fc7c583787357c616435334e138dbfde7fe2e03bc1e242b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5DCYOEK%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoqiJy%2FZuzowagWOqRE0fUnUzJ6iy%2BBIk7IJE3KKUwKAIhAJFlLs19aolwc3pXymtrEBXpRPT2PPzEJKsR7WwKnB26KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCH8huOr7V%2BdhIcWcq3AO%2FwG7x8AHmCQh2upQM6Ir5c4QE5RzBqjpt9T7mznpPbilLI%2BprfpP%2Fq1z7hFlNLLAmHPsWwDqBvjw5PMWOphBw38lnmsn2wqcWTVO6sp9sxooJ1c0CfVeorlXIHp721RMz2tDriyHyNVrluKurS9aElKfvp6d6m4JSHxKdDgHSfitppN1BzVn01mO74azw84sCznk5pKNYgZdkhsfe9Mbc6DhcaMnHY17bJXzyArm7JQI66J0HTW201qu%2BIeEhgl559vB1go96STPcXGFzi%2BBC0ditFLdqN2gJCgB0Pw6lcOfqMqrf970HDQFg69ox39p5X1wcKbXCNb8EYX%2BmJQRJiRniR%2FMQpxUzhnXLLEBnJRV07uTQgFxYAxKEu7OBQnV104PCFX2wEIuvbsHQgpbr0%2Fm%2BSUcxgowBQyczFR45BE6eahHfMeRc8aBwxejXZeckmdMMPTDMHNuf5te2OKF6ZOoQK5NeFvNm4KNwfj7%2FI3akBm3gmgXx7J0OjHSsn%2Bk6cNUxBeeZubLLx2cgoC00XYOuHJncfFZmuBlD7Gr8n6JSL4NHMU6owpcpBtdgkxrJyQHYCj3du308SyfUmeOQB7b9A0g3DV5CcNwyiz3sFheZIM%2F0yn3xaWWwujCizcDDBjqkAZpP9XRYf53RmyWRiyqpC%2BrSsvMgroz%2BFnql7e0Sz1nJY17TY%2BnxJWm0GOb%2Fi2vEbF1KjXiAOeIvjdftlx6odnwZRDooqfWrLczSy4xi0zhq2rFPXw%2BxOnFPC5Bh7goSAUJbys0LI4XrrJgLfiFem4uQqL%2BB1FxbsBazLmQvIt1WTFwSf87U3pnpcO83hQuu4pt7kJ6pgXlSqcv%2F0DQ9%2ByV4CMmA&X-Amz-Signature=d57188ba91779dff0c7fdbe97e931de3d79168aab77a5ec7640a8cea0879f0e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DTLSVWV%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGui7eKego2cbfV6xUq%2BAVIxRGGWhkUAgzlmW1XGvinvAiEAgV5Hx%2B0g1IvM%2F53h1bhxhUnAtEE%2FqJkEtQ64pGekZJYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPHzr8XX%2BgRq%2FS%2FjyrcA%2BTXYtfeLEcHHxHb2lSpTkIZqgs6eKo23pzM7E%2FvsVTU3n5B7SNV9WPPYSvZibN5%2FdZ%2B5s74veXj7lj99k7nYnz3ciUGyyszJ75kWM3UPqWab2Mb6ivDTYLqF6pRHEpPGHDC88BBOwOPn7aoMjcr5OTKSUlPoLU3T1ID%2BNo0wZ2Duk3tZAP%2BCMzoRKr3NoBG4pzDhsE10W%2BQTDcrIYhvgdc03gQpNLaociaGvZ5D1n8Dk%2FT3zg%2BHX%2FiRDIy5%2F9pcoT38HSt4QK7YJI3UUB47EU%2BUQACqGN9uWNWUCDpCrPgN6H91%2BGs9rfQ%2FA7ZY0LV%2B6V4b9MNvBpMtqyjFZgsbS4iBtXO8892AFK84e%2FUea9%2BxhYt2kHQ8uN0hZE%2BQm07uuA0apswvEBq%2FNx2P7hz881LS%2FiYwhISZQcuigr75P%2F0AgH50H1HNrHdtF5fOBYl2z01jF2OWqxskpZ7JFVXuD1TrFnRlfZVKcQa4amMQboLfj%2BUXyLurvpfdVjTirDF608CzdZ2ymC9KppZ%2F%2FvMqhEAZdcMizWnl%2FFeMFXS9io6kDws1PlDG1Q%2Fwqc3MIJt9qV0n7JavvGJXSPlXmMgE2CwbZFkBBTwFU7KCSKdx6JZK4yIvMKkO3SsK60bNMKLNwMMGOqUBnksguBnktKHVptTkAYUE0A6SzCDLUr0tFHkUSTeLb58crJlkTxJKR7zbEh616Ze%2FgtRlWCiJLYmhTV5JOgrB3nodtbtoNSWb0dt56tfSz6fG2ELRhDDS%2FnJ3mlADclJs7cbthp7CLc5PTG3tid75SXGlQonJ9hDeMf5vok%2FQucjAAa%2Fy0sddBtW2UoTsOeQsDCH6pXLS2xSfcztRuPzFI1Zza2AB&X-Amz-Signature=1910e2d02b3bed4e1c089131c816843af8c83129a5b07691cda97b61515c61ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMK2PSOV%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnXMH4pPUm5gMdjjuSXuqgQOtlwUY%2B3qAGG9KlvpCp0AiEAvm8Nq7XGYoNUk2ZFhCdE1GpFGXxJZGKE%2BvmUPaqv370qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1r4O5Q6hV99%2FuVxSrcA8MJZLp09386%2BMuWN7llLO2UXyuoIbVPMcpxRHBqUxPycqxbTJj7NjppfYROXiZ%2BedTOa9XRGX%2BRAFnx3asn9m77SkpIkhdIamtBPP2dPKABjnQ6GvpyWaFK%2FnzIgV4jkcnKoGLSnL05EsD4n6Rj8KMDwZ5kAPj4wRQxepL2pVX%2FVv7gQZnj6IPGFWhWrOg1JjH4%2Bk4nfdqgH97%2BfWFyWg3zC1g1A8VHhinnnMdeTz6sekfxdQvA0Y%2Bv3LorKDvXor9viMHvLgOsd6JX64rDrI4QeCKA0dPIrX4NDS%2BABQ5BWLSYWkTcl2jgGsqarMwL25VK19l1kl5HKsQkBBtNR10TSt7tQR1v3nkg%2Fk9IqPYQwx%2FxdH%2F3xptO18rSQu3k9RAaq84wnl1NJW3re7%2Bpq59ii32eJvfGQa0bw%2BgiRtCdn2nMqclwmBge4r1F6%2F8TbaIKXaiMeH8TePEcT0vWiVbzNLaDuRdJVCxPeP%2F4GAmLmFoJdTHJHRMVrU%2F%2BbYxCrkMUnw5rMDjUg%2FBvOY%2BChKQRF8wmu2thnZGXwBzoPs%2Bkjhh7fGfh8FACWhyr5dcXkBM67e9tOmUPyqRLLdjp8Enb8miaC6MfEaUZocLthlWxoupZNjdWC8dUlGEEMNDNwMMGOqUBgjdl4nKUHE1ZmQxRGx39q172Et5VXigdzMR%2FacAjsBFyeiEoYAMV08Azimm8Li0F6syD%2F%2BWfB5cnr9Xy0fLGzVa1jhn88r3GvtsvYGvZ6OV4Fzea7GexIt8yZ8ncDa%2Bbt%2FY6rSE%2BeEmbqD4YY8xn1FIj9%2Be5yEUObUGyQCV%2B2mw0zGINzkIPH4rdIt7WXZArPeXsLUGDZXhuYMG5gisDqkt2Hfy7&X-Amz-Signature=bc8bba9bd671ca042a8f626548d1a2e321f5adf0be9929bc9b807477a5979b8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5DCYOEK%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoqiJy%2FZuzowagWOqRE0fUnUzJ6iy%2BBIk7IJE3KKUwKAIhAJFlLs19aolwc3pXymtrEBXpRPT2PPzEJKsR7WwKnB26KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCH8huOr7V%2BdhIcWcq3AO%2FwG7x8AHmCQh2upQM6Ir5c4QE5RzBqjpt9T7mznpPbilLI%2BprfpP%2Fq1z7hFlNLLAmHPsWwDqBvjw5PMWOphBw38lnmsn2wqcWTVO6sp9sxooJ1c0CfVeorlXIHp721RMz2tDriyHyNVrluKurS9aElKfvp6d6m4JSHxKdDgHSfitppN1BzVn01mO74azw84sCznk5pKNYgZdkhsfe9Mbc6DhcaMnHY17bJXzyArm7JQI66J0HTW201qu%2BIeEhgl559vB1go96STPcXGFzi%2BBC0ditFLdqN2gJCgB0Pw6lcOfqMqrf970HDQFg69ox39p5X1wcKbXCNb8EYX%2BmJQRJiRniR%2FMQpxUzhnXLLEBnJRV07uTQgFxYAxKEu7OBQnV104PCFX2wEIuvbsHQgpbr0%2Fm%2BSUcxgowBQyczFR45BE6eahHfMeRc8aBwxejXZeckmdMMPTDMHNuf5te2OKF6ZOoQK5NeFvNm4KNwfj7%2FI3akBm3gmgXx7J0OjHSsn%2Bk6cNUxBeeZubLLx2cgoC00XYOuHJncfFZmuBlD7Gr8n6JSL4NHMU6owpcpBtdgkxrJyQHYCj3du308SyfUmeOQB7b9A0g3DV5CcNwyiz3sFheZIM%2F0yn3xaWWwujCizcDDBjqkAZpP9XRYf53RmyWRiyqpC%2BrSsvMgroz%2BFnql7e0Sz1nJY17TY%2BnxJWm0GOb%2Fi2vEbF1KjXiAOeIvjdftlx6odnwZRDooqfWrLczSy4xi0zhq2rFPXw%2BxOnFPC5Bh7goSAUJbys0LI4XrrJgLfiFem4uQqL%2BB1FxbsBazLmQvIt1WTFwSf87U3pnpcO83hQuu4pt7kJ6pgXlSqcv%2F0DQ9%2ByV4CMmA&X-Amz-Signature=e2a2e6604c8444f226f49db4cf5f0787ab4502ae51210a3500d8d01547e3d28b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
