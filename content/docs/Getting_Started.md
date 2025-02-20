---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGY6HN4E%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5GLgDeSah2pP%2FLQ53k6%2Bk%2BruRKoVXj60lzYENv%2Bhc6QIgMARSJu7I4gGNZbYHht2EPhyZr4Y44GwdBJdrVzwhX5QqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmTV1JARtEF3jW9ECrcA9bhm4PnwVbWR%2BEpP3uJ0Wla1dgFBQwPm4r6HqT%2FOx2NTKSoExVvx55KZzMIHEfVVTqRsON%2FTXDv8sb%2BHXKvqZp1CnXYCvniAYYrPiUbYzspo%2B00kn%2BdFqqhWff4p2XXQuCTjVBLUG47Ui8rNCKB%2B84AAwotR0tyYgmEPY2WALL9ubWIce%2BfJCOVycaCjxAHJNwDUlKpnRlX626NQMcGmpEUlU7Lt6S43wzXA2XwbPWBGn0n%2BRd8K85k6EfANEvHMvfG2zPRVm4Ya68r%2FWb5QJYz%2BeX2DECV0EYF1HP0pyih5I9OVApw6b6%2BVQwXODzCfYvSk%2BWZOcvvTEeWp2q9BGjZ95ApWGsR8krJKPwRCRx30tHzFMq9W0VF2dlu%2B9zCx%2FRSl8fTsUMnNrVrB2%2BnBh2v2Z9dOUbx7hB0pFlaeHP1SOy5V1R%2Bo420atyWdUPf0Fics%2BkRARvPzfFAbq7CYoyr00sV8IyFVuhob%2BMJalKZLr3SGuNoLNHatMfx4oMtawIlKrrb9RspWGd09S6KjnOKHyFq75Bp97rXod5NzptHSxBGxdLqHiuNP0HtAWsHj75p8KD2K4VbJeYJOcwTFD%2BXOM6U1okVzfg%2FeDLoPSU9XeXJIeNNvGDdqQlKMMb43L0GOqUBOPRgBMoo7IqjpOedp9P2vtdbi5TCqGTIc43NlCcW5PB%2BVJaPSGYZpdp%2B8CbMYP86DriuTMSIHkNNptFKv4grKRGh%2BJYSyGU8mZQgd56pErBinRYDyJIUNCx03tkPV%2FahLoJ5PvNZQqxCvrEINIJNcRmZrttJAJlqszde4qkf0W0LNFahO1ujfOBDgV7HCDveP%2F5t%2BCC1ENYrR0meBlRRbSfvHa0Q&X-Amz-Signature=ff434ff99c7b87bc56406d2e95e7d473e99c93e7ce64634d8d920376105b7d49&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGY6HN4E%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5GLgDeSah2pP%2FLQ53k6%2Bk%2BruRKoVXj60lzYENv%2Bhc6QIgMARSJu7I4gGNZbYHht2EPhyZr4Y44GwdBJdrVzwhX5QqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmTV1JARtEF3jW9ECrcA9bhm4PnwVbWR%2BEpP3uJ0Wla1dgFBQwPm4r6HqT%2FOx2NTKSoExVvx55KZzMIHEfVVTqRsON%2FTXDv8sb%2BHXKvqZp1CnXYCvniAYYrPiUbYzspo%2B00kn%2BdFqqhWff4p2XXQuCTjVBLUG47Ui8rNCKB%2B84AAwotR0tyYgmEPY2WALL9ubWIce%2BfJCOVycaCjxAHJNwDUlKpnRlX626NQMcGmpEUlU7Lt6S43wzXA2XwbPWBGn0n%2BRd8K85k6EfANEvHMvfG2zPRVm4Ya68r%2FWb5QJYz%2BeX2DECV0EYF1HP0pyih5I9OVApw6b6%2BVQwXODzCfYvSk%2BWZOcvvTEeWp2q9BGjZ95ApWGsR8krJKPwRCRx30tHzFMq9W0VF2dlu%2B9zCx%2FRSl8fTsUMnNrVrB2%2BnBh2v2Z9dOUbx7hB0pFlaeHP1SOy5V1R%2Bo420atyWdUPf0Fics%2BkRARvPzfFAbq7CYoyr00sV8IyFVuhob%2BMJalKZLr3SGuNoLNHatMfx4oMtawIlKrrb9RspWGd09S6KjnOKHyFq75Bp97rXod5NzptHSxBGxdLqHiuNP0HtAWsHj75p8KD2K4VbJeYJOcwTFD%2BXOM6U1okVzfg%2FeDLoPSU9XeXJIeNNvGDdqQlKMMb43L0GOqUBOPRgBMoo7IqjpOedp9P2vtdbi5TCqGTIc43NlCcW5PB%2BVJaPSGYZpdp%2B8CbMYP86DriuTMSIHkNNptFKv4grKRGh%2BJYSyGU8mZQgd56pErBinRYDyJIUNCx03tkPV%2FahLoJ5PvNZQqxCvrEINIJNcRmZrttJAJlqszde4qkf0W0LNFahO1ujfOBDgV7HCDveP%2F5t%2BCC1ENYrR0meBlRRbSfvHa0Q&X-Amz-Signature=6d301ee844ff0876d5c64b03a0c85772dfa6d2664469a7aca344f101f33ee84f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672VZSWJW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsBMwLc5dmXUUsc9cySXzfknrYBXQCt3c1Y1GgitCBwAiAVL36nlBkoCGbhplqtdooTDAzbXsAj7a%2B70E0kGlSWMSqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiFaU4E0DX64JQRW%2FKtwDiwIefZhyknH1So1VL7Ud6w%2FpiNA4h5DdzMW7M%2BoSMsdzV4ADl65q29t3lS6QRJMbS7%2BXtsF6TPFLKSY9PRC6Y08I1d41MLytRdtPJXh2x41OZAaBSeq6AVEGLaSt5punsDNMVYo9uQWNqCnhgCXgMxArhDmIlWvfzEpYYPUEM1uL1WmIJLFtCTwMgMsl2ZjmUr3u8tHfGmwUhtd3ttpmrJRuhGZF0qsx57ZiyGURDisOrbleHmc1jYEtn2qSwJCbzzT9yAodtJJR2ivqfX9UHrGiVm7RdIWN3S1ets2ZnxJKJYgvRu%2B%2FI8yj0tqIjZyBOcAZp5MFKn1%2FDN47ow8cGaC7v3lwZSSszZRkuzx%2ByrOaXLF%2BqejUk1q9kex95hzBvGWZyUX%2BN2DNtDBS71RyUyVWrrIc8n8IKnc55gIqPXbcGY9Kjr8RlkxW5Kw6a0yTe8%2BSNv1qEwYJ3Mx3a9A2Fw%2B8w99gmhMMKgreThQo4Z%2FBfBzoSCky4%2F54CU7wl6ziBVCM1v%2BdiCR6kyYsVo4N6D9WdKaIgMa%2BkcZvloAeaxCfIEw6HUdlfIPJIIBlu7%2B3NZZuE8P8liIkWD005jSCOkngf46BSq2%2BoZrSPkQmL9YhtDfHqM%2BZYGXnpS0wjfjcvQY6pgFkZGOg9EStisew%2Bi%2BxfLVZR8%2BgdBmdn0WlXLUOZXth40k5YJqfrTvOku8XtcGp%2Fvkrpokcx%2BNxEivNhlNmSMJK5Gjxq%2ByI9Gd9G0KG1RpI0U4HJieWlhPn6LFn6DjF8vaNvZe5PbLRbDtxyUVZVEuDIY%2BE5UE%2FkxP2TGKhpd2%2B7vwvVg54FpLdBMEcxXpUwGqBCPa9FP34sNi4cGoAo3w%2BLATXEHdy&X-Amz-Signature=ae5ecd18ce2c40004eb4f8daa78fcc833bc2f22ff6313dd01b133f6eab7d7035&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULZ56IG7%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlQnp6oAo7ARAFxyY47msJtjiVCqauHzNx5%2BSmdTtF%2BAiBbGTq3ZqY0lXqqDXsw%2BreLG2ZwZdvoWFPuC6SYXnWOOiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbcTGbxYagNIF3L5WKtwD9spg4ctpMKEjPJKDUGJI1PIpygFlYW1jJQSlFOzwl4YlsNBU1J3CdK0ao0e4MJ08iZ76TZnwQVQSETLOCgXJquEDTLPsjWhA%2BVEzq7X8yUfL7kiQay7hU2L3jdiAF1f5LKYgi%2Fz%2BLrLpZCZFukLCqaEa0KubZYXKPeRGZ%2Frhkn%2F7wuUWkBq63hNJXQ2D9%2FqtYUDBQvG7SMb%2Bo7PaFNAey63uCQ0QFPlzDvY45Jf0Ol2whHJuOm%2FzZ9NIdGr8LAsN%2Fqu0COcYVHjdA53WWaeiviQolYcWAxzMawno4HfqBtt84Rhrh4MWQAkknFaZ%2BztfNBNElKzNi4qFk1FM5e7wALQTaNGNyW05pw1lzxi9fGdAxDWSGJFb68Pob0WGWDDDvKL0OJlCR5l1e9%2FFaYZD8FLAVNm27XaV35HWKYsHApNMnAFiRdTFBptjBHBikGhiJkGmoqXMhXtQE%2FWTc1vuMOdHS8ZR30VN7LA1Jm1sohqvViFl1iKRQZ6mkzizItgx0p7T4uiPh0xJkFuxbHCE6uiQhZGMMp%2FtlUuF1I00zolDaaROSkg9n1FTV5KsLogtfGbgrK69jsMlLbgxBTipas6WaDBhcMCRyoL%2BVfVGxFZHG2G0IzFfdcPLnjwwo%2FfcvQY6pgFucuoi77KHXtZ2J%2BlKjhVuqA0qXauIBvngEX4tDC6jJX2poeNlloAt5%2BenRuIPgA51hjwnXFOER6Tus8bPOrIXt67ky0F5gbhjQYUr9o5Alm%2BN%2F0B9sicI7J%2BJnvire4nvXVEcNHLgz0s3ffTn1pkQQD23pOtgBcG0CK2kVUCXLXbXAlWuCGHvydViWz6RrWr4w5BL1xVhHF%2FjQQTSmfNRAOQVPdYZ&X-Amz-Signature=05fc0b696244b120ae24384d03e1faf492e889fbb8530f6cc58bcb8740f93770&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGY6HN4E%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5GLgDeSah2pP%2FLQ53k6%2Bk%2BruRKoVXj60lzYENv%2Bhc6QIgMARSJu7I4gGNZbYHht2EPhyZr4Y44GwdBJdrVzwhX5QqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmTV1JARtEF3jW9ECrcA9bhm4PnwVbWR%2BEpP3uJ0Wla1dgFBQwPm4r6HqT%2FOx2NTKSoExVvx55KZzMIHEfVVTqRsON%2FTXDv8sb%2BHXKvqZp1CnXYCvniAYYrPiUbYzspo%2B00kn%2BdFqqhWff4p2XXQuCTjVBLUG47Ui8rNCKB%2B84AAwotR0tyYgmEPY2WALL9ubWIce%2BfJCOVycaCjxAHJNwDUlKpnRlX626NQMcGmpEUlU7Lt6S43wzXA2XwbPWBGn0n%2BRd8K85k6EfANEvHMvfG2zPRVm4Ya68r%2FWb5QJYz%2BeX2DECV0EYF1HP0pyih5I9OVApw6b6%2BVQwXODzCfYvSk%2BWZOcvvTEeWp2q9BGjZ95ApWGsR8krJKPwRCRx30tHzFMq9W0VF2dlu%2B9zCx%2FRSl8fTsUMnNrVrB2%2BnBh2v2Z9dOUbx7hB0pFlaeHP1SOy5V1R%2Bo420atyWdUPf0Fics%2BkRARvPzfFAbq7CYoyr00sV8IyFVuhob%2BMJalKZLr3SGuNoLNHatMfx4oMtawIlKrrb9RspWGd09S6KjnOKHyFq75Bp97rXod5NzptHSxBGxdLqHiuNP0HtAWsHj75p8KD2K4VbJeYJOcwTFD%2BXOM6U1okVzfg%2FeDLoPSU9XeXJIeNNvGDdqQlKMMb43L0GOqUBOPRgBMoo7IqjpOedp9P2vtdbi5TCqGTIc43NlCcW5PB%2BVJaPSGYZpdp%2B8CbMYP86DriuTMSIHkNNptFKv4grKRGh%2BJYSyGU8mZQgd56pErBinRYDyJIUNCx03tkPV%2FahLoJ5PvNZQqxCvrEINIJNcRmZrttJAJlqszde4qkf0W0LNFahO1ujfOBDgV7HCDveP%2F5t%2BCC1ENYrR0meBlRRbSfvHa0Q&X-Amz-Signature=6d8b62c003b0b5d37207c26da65cda1a783873a843bfbb6ab8db01d18f3f2632&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
