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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7SVVVQD%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBGCRH3EGg390FNSnOosvVZUD1ArXixR0AZIxzb5hZWAAiByubD7Cpd8uO71K94%2Bej1nQj6Do8lnKPz3C7CsSVcmCSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSzY%2FBq%2B%2BWz36dPZ%2BKtwDq4JVIirAhMQuLprtp%2F4AQWq%2Budk0rTKy5aiAXec1leDQ3v4F9zoSBiNbe9rD%2BHS6n05rLP%2BHd52NpSoiqBOdn2UjFpB9tRRET%2Fm59XVReIfWCI8vK9ktCmrue%2Bbm8tyCj%2BzG%2FA7h1PZlBZCg3Zzg5TgDIHWejerpvhYjRMqEkCca%2BZQolxQ8FjQFkkBw31w4euvIXud4Ag9yjl9EL%2FRELhJmQdVu5OYUYD1CsfX3WYAIXItPYIb%2Bcv%2BdTfV6mgiPlnjL2LXxhCy%2B4uPjurTQyynvtfu2fmPZXhy2O21wz%2FU%2BFNYNXuzCDoPv0srhg%2F%2Bmx71F1%2FtnMtWbf%2B2WtYC1ZB7cPSY0AUwN8%2BAcLRC10NOiSVVDVdUflkc5T4mXMn39knussxRvubRwO1NGZhbAbNvU4v%2F7FK2y7ZpO5ej%2Fw%2B7P6AIa1kX8LC%2FHplMsCihICsjaVliGo7HPKVqBk918vc5W1pcXM67l18slfRXLRt9ncAXvJS9TKpyKkzx2prJVH3%2BP%2FEgsCYwXThtXMs5jPqjekinj8Ovawd9Fi5teJASoRCLyK9dNMOUqTxEI8HkKitU4JvhtOl%2F%2Fs%2BGkSbYDdNk2HrUlIoQitm0%2F24HlFrZWedYAe8rQuJJ4yx4wwd%2FwwQY6pgFc%2B40blmpNfkeFozaXJuol88qJ8MkBBG83Wu9SeTCMMVNhE9BSUuswEeeWWH0mZ6RiOjCkHiBm2DANLljLzsxSe8wjjUL%2FXPA4hXue3upwH755JfLxmHpwukiMOMwEGjRAZ0TtCohJiZYkedAFXbMs18MpwoXYASsSv2PMfMlIeXZHixaply0iboTxtZ%2B%2BDuCfmRzQc8laXGJSc5AK3QPzkW8fkIip&X-Amz-Signature=8069b78fc65aef2a24d21b0e90e42fccee8e89e807be47c04445a8df1db7b208&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7SVVVQD%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBGCRH3EGg390FNSnOosvVZUD1ArXixR0AZIxzb5hZWAAiByubD7Cpd8uO71K94%2Bej1nQj6Do8lnKPz3C7CsSVcmCSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSzY%2FBq%2B%2BWz36dPZ%2BKtwDq4JVIirAhMQuLprtp%2F4AQWq%2Budk0rTKy5aiAXec1leDQ3v4F9zoSBiNbe9rD%2BHS6n05rLP%2BHd52NpSoiqBOdn2UjFpB9tRRET%2Fm59XVReIfWCI8vK9ktCmrue%2Bbm8tyCj%2BzG%2FA7h1PZlBZCg3Zzg5TgDIHWejerpvhYjRMqEkCca%2BZQolxQ8FjQFkkBw31w4euvIXud4Ag9yjl9EL%2FRELhJmQdVu5OYUYD1CsfX3WYAIXItPYIb%2Bcv%2BdTfV6mgiPlnjL2LXxhCy%2B4uPjurTQyynvtfu2fmPZXhy2O21wz%2FU%2BFNYNXuzCDoPv0srhg%2F%2Bmx71F1%2FtnMtWbf%2B2WtYC1ZB7cPSY0AUwN8%2BAcLRC10NOiSVVDVdUflkc5T4mXMn39knussxRvubRwO1NGZhbAbNvU4v%2F7FK2y7ZpO5ej%2Fw%2B7P6AIa1kX8LC%2FHplMsCihICsjaVliGo7HPKVqBk918vc5W1pcXM67l18slfRXLRt9ncAXvJS9TKpyKkzx2prJVH3%2BP%2FEgsCYwXThtXMs5jPqjekinj8Ovawd9Fi5teJASoRCLyK9dNMOUqTxEI8HkKitU4JvhtOl%2F%2Fs%2BGkSbYDdNk2HrUlIoQitm0%2F24HlFrZWedYAe8rQuJJ4yx4wwd%2FwwQY6pgFc%2B40blmpNfkeFozaXJuol88qJ8MkBBG83Wu9SeTCMMVNhE9BSUuswEeeWWH0mZ6RiOjCkHiBm2DANLljLzsxSe8wjjUL%2FXPA4hXue3upwH755JfLxmHpwukiMOMwEGjRAZ0TtCohJiZYkedAFXbMs18MpwoXYASsSv2PMfMlIeXZHixaply0iboTxtZ%2B%2BDuCfmRzQc8laXGJSc5AK3QPzkW8fkIip&X-Amz-Signature=18207195d99b3b3570b8bd03f2b4c362e6c9a48fd342bac4fde369b587828837&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7SVVVQD%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBGCRH3EGg390FNSnOosvVZUD1ArXixR0AZIxzb5hZWAAiByubD7Cpd8uO71K94%2Bej1nQj6Do8lnKPz3C7CsSVcmCSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSzY%2FBq%2B%2BWz36dPZ%2BKtwDq4JVIirAhMQuLprtp%2F4AQWq%2Budk0rTKy5aiAXec1leDQ3v4F9zoSBiNbe9rD%2BHS6n05rLP%2BHd52NpSoiqBOdn2UjFpB9tRRET%2Fm59XVReIfWCI8vK9ktCmrue%2Bbm8tyCj%2BzG%2FA7h1PZlBZCg3Zzg5TgDIHWejerpvhYjRMqEkCca%2BZQolxQ8FjQFkkBw31w4euvIXud4Ag9yjl9EL%2FRELhJmQdVu5OYUYD1CsfX3WYAIXItPYIb%2Bcv%2BdTfV6mgiPlnjL2LXxhCy%2B4uPjurTQyynvtfu2fmPZXhy2O21wz%2FU%2BFNYNXuzCDoPv0srhg%2F%2Bmx71F1%2FtnMtWbf%2B2WtYC1ZB7cPSY0AUwN8%2BAcLRC10NOiSVVDVdUflkc5T4mXMn39knussxRvubRwO1NGZhbAbNvU4v%2F7FK2y7ZpO5ej%2Fw%2B7P6AIa1kX8LC%2FHplMsCihICsjaVliGo7HPKVqBk918vc5W1pcXM67l18slfRXLRt9ncAXvJS9TKpyKkzx2prJVH3%2BP%2FEgsCYwXThtXMs5jPqjekinj8Ovawd9Fi5teJASoRCLyK9dNMOUqTxEI8HkKitU4JvhtOl%2F%2Fs%2BGkSbYDdNk2HrUlIoQitm0%2F24HlFrZWedYAe8rQuJJ4yx4wwd%2FwwQY6pgFc%2B40blmpNfkeFozaXJuol88qJ8MkBBG83Wu9SeTCMMVNhE9BSUuswEeeWWH0mZ6RiOjCkHiBm2DANLljLzsxSe8wjjUL%2FXPA4hXue3upwH755JfLxmHpwukiMOMwEGjRAZ0TtCohJiZYkedAFXbMs18MpwoXYASsSv2PMfMlIeXZHixaply0iboTxtZ%2B%2BDuCfmRzQc8laXGJSc5AK3QPzkW8fkIip&X-Amz-Signature=38a2457357c612f23dd8a4c46baac9dab9a0d87f06c43d6153e4897ce489aa69&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSCNCXI2%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFUnD8qyMXqBioH7LBtlyr9FoNqsBcAlUk3To05e70C1AiEAzDQllwDjccVsfX8lcf4pQq%2FfbmfMozT8jVQDIvLYOk0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1cH9pyy6WjyROCUircAwLhN%2FVXEW7pHbCV4XiW9DRaGIAeyQax3tyNXZmmXLY4cp5Fr7X2a0YVmF1x%2BXiwpFcoXwy6cpUaMqkFj5tzIQC1AQZa%2BQUKf8KeXl0QrVQzoYqCV44LYNJJyaH0lt3dLH5LjW6r%2BISsGXpbjJIXCXrBEMxwv7dGkeeyMyDRcRDUzDWH3n3I6UgJ1duOzbLRV%2BNJaSpWWB8Ipe54ZB4%2FEKrIGF1u%2BfWrU%2FcUmNxq6xc4ckfUd98%2B0hB4OVVjv17UuHEJkUt5h0uP7yN%2FWRPh58mwRxFuNylWr9Z2QXoJs0J5SoStj03e%2FS%2BFHBW1DvfMV%2BTTEn10vHjUAEBDQph6qkWyZTSKs%2Bx61XWWOT63fhp1ITMtAQzaNNXHE2NRNUnseERHhKyn9DSlbh50tjfCHht1F%2FYZ3AycUomBYhsEbFjYUdrnRbiOONVR07Cur6%2BfHO82CU6UlaFv4YjAMgAatdk7qqtlaX9NJbE2EOw2bRJd9d1%2FG7FeRh9ulI2bJu8psP629vjFSmFf5e8iLtKNZodU1LW%2Fcqt1FP0EHI4t8N67%2BI8I8GHcuvwsCjg6wFMxQYjg6Nf%2BApLtTby7c7FPetzytXqrfYw90s3f9crkf9T7yDKmEe3nNkAJJEtSMPPe8MEGOqUB%2BJaN8zSyBBxd9EUov2S75CrxLiYce6qYRzn7xAyYnlv0HzNdc6uK7fQ2ZUQ1aU2SGJBgloXnhAuyB0BF1g5KNqXCveSXLYxaDL%2Bh3%2BRcj0P9jBiMFm8oPmKPUNY2Z9QxGaueAnoAdX4Znz7mkwrzbP78ocLHXIwd4gFsnR9P4m7IBGebs%2FQCKP26JNxO%2B9CdIkY5D86d7FbyqOK8kAUvaL3FNq1t&X-Amz-Signature=cc3bfc29a898dd19938b10fa3d4f7e09e77407fb4a0011f380b4739098c7af03&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LTQ7V6D%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDPBMvwk8NtlfJJRhH5aJiayi50JkQ8ih72OXRgnHJvNAiBxu938vBPWTmiDcoQs5btZommx4GPd9tWVrHg6Ni%2FuLSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4UKoUf3yAwSHMuL6KtwDkvwsTfnjGU3XET1dD%2Fz2LB0fAa6ZP84W5ZAkqAO1BD82mQ5Gan%2BrxwNYznW7aLzFdmqw3Cffbg6kMOSx3%2Fo5WTU5agfVQO7pZkumTiC5muhcVjF58aJV%2BFPUwzgd4bcD5XNoKKhR%2FhX5IxnmCNAwye%2BQZAH8Pk1KHoa%2F0Q9lHHqa5Arx6xAJIkZruyV2Li0vmh8RBl4knN3Ad2gYdUlD%2FDyWZ4uXu1oPAZ3nr6Tn6hs7futgER%2BLqE03gYgA6hKzQxSoiP5BADqHed9qLwVqWOdogR7zwA54knziZyheOtL2LTn4Z3lnYcz1KQbbFZfw5KkxEJUAUpjif58nkPZzlD66tfW%2FwUv8yz672l61OsyVcD7W1Tao3sFLdLjvLUuJE54I6%2Bij0N%2F4klx9Zc%2BvPPFx0o2KC9uPdFJ%2BbSSiBwDls92M94gDfoWW%2FyYoLGVsi%2F3eRK3jMnfejcQasWg0yJddd1MYIVEXXYAcnIjKTHFu6m%2FQ01pps7SDP48hgn0FnkHQOKMdioJIk1qcJaKhGWO%2F195XV5CdYNTZKY1AtMauSMms3HRvKGHAP4HI2N%2Frg%2B3JVEFsZtrdTuuiedM8R4qoeu%2FwwAAj1Ed2yd9FdyIr%2FKmOpcoHLVflNlQwvt%2FwwQY6pgE9spnCtOUNx0Hrz6a35MrxPA0629knCSJnJ%2B%2BSkg1O7IbgrXHavaBzlKhWBKR%2BB69UF0YIIRs8aFKPIYnnSiPRuv83D1msnEVohluSY%2FfuXhuMcqrrDo6QzJNSCisXuVxjASrgSuYEyi8EUSUopO9u2TsI09o5wJ8RzcjbQdYlgDx84vh%2FB9hcgttBG09%2FE8C5zV%2BXwKlIrrxjJcX4l%2FiRDiKDwdEh&X-Amz-Signature=14e63acf54a4d2524b01d1236283872aef679d885f9e8d155eb0b60e26646d33&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7SVVVQD%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBGCRH3EGg390FNSnOosvVZUD1ArXixR0AZIxzb5hZWAAiByubD7Cpd8uO71K94%2Bej1nQj6Do8lnKPz3C7CsSVcmCSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSzY%2FBq%2B%2BWz36dPZ%2BKtwDq4JVIirAhMQuLprtp%2F4AQWq%2Budk0rTKy5aiAXec1leDQ3v4F9zoSBiNbe9rD%2BHS6n05rLP%2BHd52NpSoiqBOdn2UjFpB9tRRET%2Fm59XVReIfWCI8vK9ktCmrue%2Bbm8tyCj%2BzG%2FA7h1PZlBZCg3Zzg5TgDIHWejerpvhYjRMqEkCca%2BZQolxQ8FjQFkkBw31w4euvIXud4Ag9yjl9EL%2FRELhJmQdVu5OYUYD1CsfX3WYAIXItPYIb%2Bcv%2BdTfV6mgiPlnjL2LXxhCy%2B4uPjurTQyynvtfu2fmPZXhy2O21wz%2FU%2BFNYNXuzCDoPv0srhg%2F%2Bmx71F1%2FtnMtWbf%2B2WtYC1ZB7cPSY0AUwN8%2BAcLRC10NOiSVVDVdUflkc5T4mXMn39knussxRvubRwO1NGZhbAbNvU4v%2F7FK2y7ZpO5ej%2Fw%2B7P6AIa1kX8LC%2FHplMsCihICsjaVliGo7HPKVqBk918vc5W1pcXM67l18slfRXLRt9ncAXvJS9TKpyKkzx2prJVH3%2BP%2FEgsCYwXThtXMs5jPqjekinj8Ovawd9Fi5teJASoRCLyK9dNMOUqTxEI8HkKitU4JvhtOl%2F%2Fs%2BGkSbYDdNk2HrUlIoQitm0%2F24HlFrZWedYAe8rQuJJ4yx4wwd%2FwwQY6pgFc%2B40blmpNfkeFozaXJuol88qJ8MkBBG83Wu9SeTCMMVNhE9BSUuswEeeWWH0mZ6RiOjCkHiBm2DANLljLzsxSe8wjjUL%2FXPA4hXue3upwH755JfLxmHpwukiMOMwEGjRAZ0TtCohJiZYkedAFXbMs18MpwoXYASsSv2PMfMlIeXZHixaply0iboTxtZ%2B%2BDuCfmRzQc8laXGJSc5AK3QPzkW8fkIip&X-Amz-Signature=715a551dccd1a3aeb5cc959157c6594556ea5d093383b826216b1394b47f0685&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
