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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3372ETS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIDKA%2BntAy1JRyFZsc%2F8Jed9R6HpCZ2dbk62FQydmekgRAiA0iuMIlSYnSRFrPhhEjW%2FryeNfOxe1%2Fj2q%2BPWmyE%2BgPiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN4pWJxiPio6MVRl5KtwDtMTs06V6J9c%2Btg9pi4C5ej%2FzRt%2BP%2BCfneJyz8R09Dg6j3Ef7JfEElwdxkQqY9uFWLp79lTkpmwndzfoxyjFUpTJs8EAlR%2F4SnL3RW2xT%2B6HYnRgIfJMfMwEYS1R0vuCt7N6hn5DKUDlMxSiF%2FAR3BIH5q3hQxdz7QDVpV3hrlTsydpGZKCqi4KejG%2BsK7yEnBNbwkTEuQ6CdatzQeHGdv04bzQLZnq784OL6q%2F0JQlf8GBJRHmHSV38DOqWxB2o1yKtKMiXpJNtwGAjuwDcwSsrNozXDKgxez1JoryXDGbDAj58EIatbzhuji1RV2QG5tgG1j6BVHgLSL3QaYD7PSYgRtWW4nSHICuK8jsy3n22HpAFxrHZ%2Bo2ZIU5eoNkiuuforQCr8V%2FM%2BGvjnCrwSy9c%2Feoj5oc%2BlrD%2B5rTxdLzWwJ9PDMcEJkzTVUHwcotmGHjnxSix%2FPmlBnO1CptVf4tg3LnmlBWiY17S2x1curoirFq97UFjJZxBJWy4z098rV7Av6Oo2N5dYn3yVBUN0xbI7ZBzK9%2BoMzkrvrNKdHElZzul%2Fnckyg%2FXwXNFYkCgZixEmKB9ut35MUFlL%2F0FgMG%2BYFNq3qQmI20udiO3dJjDHeoF95aNTk5OD5Q8w1dCivwY6pgEqTI9wsSa2Dlp32ppzbIDc0fsE0S3iAjVRcxEXIBD55%2F3JpC1HDE%2FjhfulsHIZWo9Wa6HUZW11jHUQ27PMfmnhMGBdTlIoOV0ll%2FIlVIo2Ifwk0cOcMuMUFKHCP0z5MyLY%2FKV80FhhVAISDe1GebkBIa%2B8M9XvP7dyUEvZ4cTkws1fCKYN9c0zi%2BQ3zi9%2BdGs%2F2BbHzjL52kEvsNyRVKg69miOJf2X&X-Amz-Signature=7b1c2d9b19de07fb97a5248a09d02f287d6d02e5e5eb21b5670ed4406c6ad348&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3372ETS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIDKA%2BntAy1JRyFZsc%2F8Jed9R6HpCZ2dbk62FQydmekgRAiA0iuMIlSYnSRFrPhhEjW%2FryeNfOxe1%2Fj2q%2BPWmyE%2BgPiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN4pWJxiPio6MVRl5KtwDtMTs06V6J9c%2Btg9pi4C5ej%2FzRt%2BP%2BCfneJyz8R09Dg6j3Ef7JfEElwdxkQqY9uFWLp79lTkpmwndzfoxyjFUpTJs8EAlR%2F4SnL3RW2xT%2B6HYnRgIfJMfMwEYS1R0vuCt7N6hn5DKUDlMxSiF%2FAR3BIH5q3hQxdz7QDVpV3hrlTsydpGZKCqi4KejG%2BsK7yEnBNbwkTEuQ6CdatzQeHGdv04bzQLZnq784OL6q%2F0JQlf8GBJRHmHSV38DOqWxB2o1yKtKMiXpJNtwGAjuwDcwSsrNozXDKgxez1JoryXDGbDAj58EIatbzhuji1RV2QG5tgG1j6BVHgLSL3QaYD7PSYgRtWW4nSHICuK8jsy3n22HpAFxrHZ%2Bo2ZIU5eoNkiuuforQCr8V%2FM%2BGvjnCrwSy9c%2Feoj5oc%2BlrD%2B5rTxdLzWwJ9PDMcEJkzTVUHwcotmGHjnxSix%2FPmlBnO1CptVf4tg3LnmlBWiY17S2x1curoirFq97UFjJZxBJWy4z098rV7Av6Oo2N5dYn3yVBUN0xbI7ZBzK9%2BoMzkrvrNKdHElZzul%2Fnckyg%2FXwXNFYkCgZixEmKB9ut35MUFlL%2F0FgMG%2BYFNq3qQmI20udiO3dJjDHeoF95aNTk5OD5Q8w1dCivwY6pgEqTI9wsSa2Dlp32ppzbIDc0fsE0S3iAjVRcxEXIBD55%2F3JpC1HDE%2FjhfulsHIZWo9Wa6HUZW11jHUQ27PMfmnhMGBdTlIoOV0ll%2FIlVIo2Ifwk0cOcMuMUFKHCP0z5MyLY%2FKV80FhhVAISDe1GebkBIa%2B8M9XvP7dyUEvZ4cTkws1fCKYN9c0zi%2BQ3zi9%2BdGs%2F2BbHzjL52kEvsNyRVKg69miOJf2X&X-Amz-Signature=679073fa709817b72b180f265cf77673496d0900ecc0cc8cad0073b7c002cf67&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBHAL6T%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIDL8lAAkKH8Vb4PFARwclp%2FO7kKEYKmd4j46OtoAgx15AiEA%2FT9qLVv%2FAUY7qEm57PnXrD%2FM4INPoQQv2w3p7acRxtIqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVvAAMQItlF4ODBWircA2zqG9uLOUyvRiGEjXwVD0n3mFdOvFtEDxBloyK5ykh3eq7o9hmuYOTFo9OOuEiQRAgndzMtyeoDeujroYenV9CGkJK6cte%2B%2F%2BPr24lFKKJZi76enR3m2S0BiwfgJ%2Bf7fLkD3pjQwG%2B8mx5s5urGt4HcBervH2Hvb5yf0r5fX37cDN78jSWmKfJXOF5meuqgCEgvZbobWa1hlGc%2By%2FTIwBwpR%2BGWFHo%2FhwOCUuG%2Bc5IIpUNqs1EhMPBNeXL%2FWBH%2BHuVy%2FRgGJtC4v6dU55a811r1jVnyFdGAm2aAJ8Zi5j%2FAGdkykWd7fVZI6czl5k4rLqqkE13sSNsxfsgJZ0P0qApMfQzP9S4D8pBcMODinm8Nam3QyDRqyEOrVFnbLa7Sls8BwhonKfVi5UraPpcY4kgAzJew3H4UHYI%2FCBnoUyqKvwxcjUbtbTqkMpqY%2FiQqmiS9qCTFSlEEf4qbDL0Hk%2Fdp04%2BcwUfhnw%2Bul2GR%2F8b9362zDFpj3OaKrFJSLIt9nbbx8i7YY%2FY6NoVhnDy8yR2jnRLL9uWrL2wXrXBelVWxWn4IodMSNKGdNbEdBUHIxLQPzBU5p%2BXD81Mj1LRbPTPzGXxXEMiOf%2Bw%2FyZByVii4htjW3kwJOSERmumIMJTRor8GOqUBc4KFVIiYArr4%2BlF0WfoVnEBGxAUkt%2FLRnk4NCXV2w8a6Ma4THsxbDvEe0vQ1gOjsZxKivG%2BIRGT4PqT5MbXbxJJTA4AEDIEexY7w5i29vMuGp0JchlMX5hT5%2BlJka%2F0edoEN3C%2FBUAeM%2Bpf2X%2B%2B1gSkaKrvbCBfVPQP%2FcZZDhELDWJ%2B9kzdOqJpAW9eXuuf8j7kYhZ8erYlZAAecPhZBTUvC%2B1%2Fh&X-Amz-Signature=42c70e7effb2a4975bdd3b1d516043276f543b4685856e840e59e0bcfa17501b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTFK5N2W%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDjnJwv1xOSr97hKz3st61lX%2FMok29OxUN2wjb%2FK2T1LgIgHp8yIuB%2Bn8rrRRQjMHyj8nLfUvY2b0BhbzlBlsVNxPcqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZma0OhNWQgV3cRrCrcA5xTyF5BrNz6Ys1BzDNUR0G6AfCl%2B8%2FWO5gMF8b1BHQPpCFjKjNTRoov%2FnS40vlHbEsjPX%2FQI5iMoFSvnWfWYNF00rUZxYs84KHN8I9UxmtsaRbep%2FQWBgM2vdRRRe8T9mJIlh4R70cDvc57gPGAiEKLNU0%2BPtIDZ%2BLcu%2FMSbei668iM7uJM5HpRnNN4JbBShEPZafQvwFZhPxWfbSpfrgc78Jt031yXLS9RlfhQGiVR1%2BJl8JF6hrO5uiPIf14D%2FUuUZAIX24y1yikTwiI2goJvzvif69huOb0fyTGmjeGgentx3PxlUP1k4Y0Tophy87xzHOkzXl%2BdKy8Y37%2BtLr%2BEBIdeKjEHHkXzOBmb678kvAJJ65ll66eyubBOlaugf2aX0Uit8qDtft1tnrXEnf%2BtfAXMQ3DwdrSWv%2FR663ouNpf2EDfgGtvGkN1VEX8QNcsK3TfYqSWjPHvCKnGrWi2%2FAgsSEeP0zN3Ehnsx82MT0mqo%2FuJjjTP7YtviK1%2F4qxG849%2BmGe7CMkalqb2ryoDkEisxSV4GN1zWlqoBrnMBPRMEQO67U5T0qX6ieZyv%2FZCY4urNEs%2Bpvl9iuKAO5CSQ%2FfU2sL%2Bt7Vy9GTi4Y3OQCXaZt6aqeBiSECplMIHQor8GOqUBWApeH3CBDLK75gbv1epTOUkH8GfLzlXyc7euJ532JnzQKdpJ%2Fxyoi2wMqPetQs6MAzzYA7bjgaiV%2BaiIKxcCNMMkAYnyuIthg7QbF5iBL3tvLvm29QACDDVoM0%2F2tjqG4icC%2FGeOFqFKD1XRnZuTdnC%2FkARYP8xGQQgro98tS2iua0QUNYGNvQRYc20nxeoaEgoLYpbREtbWzvP9GULZv%2FnfuqGe&X-Amz-Signature=36e6ead939668ab7e6ba02620c7c9f45c2f73ecbc5ebb7ba8505a403c4f07136&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3372ETS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIDKA%2BntAy1JRyFZsc%2F8Jed9R6HpCZ2dbk62FQydmekgRAiA0iuMIlSYnSRFrPhhEjW%2FryeNfOxe1%2Fj2q%2BPWmyE%2BgPiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN4pWJxiPio6MVRl5KtwDtMTs06V6J9c%2Btg9pi4C5ej%2FzRt%2BP%2BCfneJyz8R09Dg6j3Ef7JfEElwdxkQqY9uFWLp79lTkpmwndzfoxyjFUpTJs8EAlR%2F4SnL3RW2xT%2B6HYnRgIfJMfMwEYS1R0vuCt7N6hn5DKUDlMxSiF%2FAR3BIH5q3hQxdz7QDVpV3hrlTsydpGZKCqi4KejG%2BsK7yEnBNbwkTEuQ6CdatzQeHGdv04bzQLZnq784OL6q%2F0JQlf8GBJRHmHSV38DOqWxB2o1yKtKMiXpJNtwGAjuwDcwSsrNozXDKgxez1JoryXDGbDAj58EIatbzhuji1RV2QG5tgG1j6BVHgLSL3QaYD7PSYgRtWW4nSHICuK8jsy3n22HpAFxrHZ%2Bo2ZIU5eoNkiuuforQCr8V%2FM%2BGvjnCrwSy9c%2Feoj5oc%2BlrD%2B5rTxdLzWwJ9PDMcEJkzTVUHwcotmGHjnxSix%2FPmlBnO1CptVf4tg3LnmlBWiY17S2x1curoirFq97UFjJZxBJWy4z098rV7Av6Oo2N5dYn3yVBUN0xbI7ZBzK9%2BoMzkrvrNKdHElZzul%2Fnckyg%2FXwXNFYkCgZixEmKB9ut35MUFlL%2F0FgMG%2BYFNq3qQmI20udiO3dJjDHeoF95aNTk5OD5Q8w1dCivwY6pgEqTI9wsSa2Dlp32ppzbIDc0fsE0S3iAjVRcxEXIBD55%2F3JpC1HDE%2FjhfulsHIZWo9Wa6HUZW11jHUQ27PMfmnhMGBdTlIoOV0ll%2FIlVIo2Ifwk0cOcMuMUFKHCP0z5MyLY%2FKV80FhhVAISDe1GebkBIa%2B8M9XvP7dyUEvZ4cTkws1fCKYN9c0zi%2BQ3zi9%2BdGs%2F2BbHzjL52kEvsNyRVKg69miOJf2X&X-Amz-Signature=44d85ec4a18ffc7088d295edc8231f2b826c42c3c122acca86039f1053881e4e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
