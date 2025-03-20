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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JD7NCSH%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFpkXCXFmt%2FdzL%2F0zh1YfNPooqT3vryGXyN%2BfI%2Bd44wZAiEA0utic%2FMiFa8rECKGMfOV%2FnxTD0f6Z4I3ykDSFvM8t3YqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtisDTsx1YJhO%2BjJSrcA9KZNonGJy3BOtMkbg4h2qh2QweoiRH7h5tQj3M9WLm%2BZrs3MUjxAGez%2FMTHPa2xvGrirFvoKTF12cYeILReZ3rfhpWI3zMOVjSZWDiDk9IVjR55UA3VuSY0k5NMHO0vqthANcoLGPOkCgPa3edxEIXRRrqPPFf66AqgQsTua1kT1WRf66FMwtlpe%2BLHOmQ%2Bb4GWzgZU90gJ2y6NfWHe0K2cPBKg9Tjnt%2F4CGg0hQ7CD4lk2cuctGmED5akz728OnzYSnl11U624u5v7q5K5QGXfaYH9hhQDOMKo9rilvrku%2Fud%2BqdYP68c5%2FmXwWkIvcpNiIfkfuXX%2BH6gEC8F0lx%2BkYdHouxzWWPIt4Ujf1MiMI2zWyYIRmSHtCRzmMxYuaL7sC83lT4IN1zzShqBnolLmgKxiRAPcasSA8tTrNbK8eW0n8Ocp9Qknb8cq9dZ3nTsPn6J0O78sPXx9Zz5K9g%2Bx0kOSxvRTwozpHuvy61jxGWn%2BRyzRtB4bJ%2Bd0NQSkKMDi3Jj6CVseyrM1fW%2FHYcAP2CXypNPBkpiO7DAgFKYC7kL78iPy5CH23Nq718vKmoVCitY%2BKJ1JpQfLyHcEi94jCvCDVQAqQOo8kxfQFhbo26y0QdyOuaU0ZifTMKKl8L4GOqUBYZRDL5NZLSlZefc0eXsK1s0yJf4XBzXMw9mf2pmU86NUIB%2BsDqBkKBWbvtjytKDGn8tOt%2FUc9jmsj5ydsyzHnE1tPWvM%2FBqaym7st2a7cRkVBWxlfV1Ke8G5L4gEmkTfo0I4DI71FzSPIp4bOp6Hkv7HBypgXuOrjfjnlLmOr94%2Bf2NnZshajY%2BPWFOATIjMQn5RUW%2BCJiXWCYhItfs8OR6AdyDE&X-Amz-Signature=e135a192fa6ce8717446752bc284c1a9b90f5f0673ec5db7544c58dd6740e7b1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JD7NCSH%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFpkXCXFmt%2FdzL%2F0zh1YfNPooqT3vryGXyN%2BfI%2Bd44wZAiEA0utic%2FMiFa8rECKGMfOV%2FnxTD0f6Z4I3ykDSFvM8t3YqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtisDTsx1YJhO%2BjJSrcA9KZNonGJy3BOtMkbg4h2qh2QweoiRH7h5tQj3M9WLm%2BZrs3MUjxAGez%2FMTHPa2xvGrirFvoKTF12cYeILReZ3rfhpWI3zMOVjSZWDiDk9IVjR55UA3VuSY0k5NMHO0vqthANcoLGPOkCgPa3edxEIXRRrqPPFf66AqgQsTua1kT1WRf66FMwtlpe%2BLHOmQ%2Bb4GWzgZU90gJ2y6NfWHe0K2cPBKg9Tjnt%2F4CGg0hQ7CD4lk2cuctGmED5akz728OnzYSnl11U624u5v7q5K5QGXfaYH9hhQDOMKo9rilvrku%2Fud%2BqdYP68c5%2FmXwWkIvcpNiIfkfuXX%2BH6gEC8F0lx%2BkYdHouxzWWPIt4Ujf1MiMI2zWyYIRmSHtCRzmMxYuaL7sC83lT4IN1zzShqBnolLmgKxiRAPcasSA8tTrNbK8eW0n8Ocp9Qknb8cq9dZ3nTsPn6J0O78sPXx9Zz5K9g%2Bx0kOSxvRTwozpHuvy61jxGWn%2BRyzRtB4bJ%2Bd0NQSkKMDi3Jj6CVseyrM1fW%2FHYcAP2CXypNPBkpiO7DAgFKYC7kL78iPy5CH23Nq718vKmoVCitY%2BKJ1JpQfLyHcEi94jCvCDVQAqQOo8kxfQFhbo26y0QdyOuaU0ZifTMKKl8L4GOqUBYZRDL5NZLSlZefc0eXsK1s0yJf4XBzXMw9mf2pmU86NUIB%2BsDqBkKBWbvtjytKDGn8tOt%2FUc9jmsj5ydsyzHnE1tPWvM%2FBqaym7st2a7cRkVBWxlfV1Ke8G5L4gEmkTfo0I4DI71FzSPIp4bOp6Hkv7HBypgXuOrjfjnlLmOr94%2Bf2NnZshajY%2BPWFOATIjMQn5RUW%2BCJiXWCYhItfs8OR6AdyDE&X-Amz-Signature=75600f822987116afea6543a944536479aded45552336cbe5234e140a380621e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HNC3P3E%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQD1WY4g1J7L56Q%2BcTmefr7JGA670QaG%2FuL5QEAwzMDCcQIhAOSQMLkoSEOa2rXy5jolcmfsQi8cl8lkP51YZtikDZ8MKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdGvk4gvuwBlG6p34q3AOMhyYg%2FwWZRs7Pv4ViK2PuVZ5TZFzU1fmidFyz0OgyGTkW51Icdfphk7b%2F12Fr1AarpQKj656g0TgOPcv4kFN%2Fen%2FLG%2F8fJODle8g7wIl0bQsse3%2Fe0U1Vy%2F4EO%2FTeoou0k6EWHuaa%2BBsVAanK9ndAYgpXECzC23OqZRWCoNhHAgwk0tWAQ3EfkhljELFn97bhqj0QMbBeFUYyLWJ%2FNisjwpOI2Ga4nv8kqqEZ7Cj3xnrkHNt1%2F%2F2JRG%2Bl9BitwtrGvgTYhkgRpP9GJ4%2BAy3ENSz5DIvDetp3JWjh8Q763a8CTg%2Bli3tB8%2B%2BmZOcCqssMqWMPBCzXQ4CCx9Yzh38go0TfSZ720lX1bruAsa3GFIjqJL5pTlq%2F9YnZKpMJ42EHDhimmVhC%2FlLpdJ7VGGZeP7oQutpOP1Tqpi1TMrDN88XwXkieQSnh8vCDVnibKdBFjB11pckPPfdOBW10EHUZ%2FVraIajbTTSdkQcRXPixzRRkmp2vftyfymR%2Byi9%2F5yOwSzn3KjELPNawB5VJQ7JFBu2frCAEJUygJyejD9q86TXUSd4UqIkhNsMTOIQQ1FBamnelnR9Y%2B%2FbeX%2FH4otyi%2FluPTB1yXfH1rJLJpLxknrV8bYLRtH9uryiUshzDDpvC%2BBjqkAZN1RBbsluT5dnmYlYLmATNIAAC%2FzBpar3qZAimVtty4FUy5gKRTEa9YfX5vCvbAAtMSyV8fPaWh%2BjNkd5UzOQ%2BemfOpgQ5nnROE0GNLBIpE8E8JUmi5mboisp66PYHEA5QtdNJ3kyi%2BqAT9SiU1JLgSOVyn82TkEZkKxgp5ctaz4%2FivdOu0uvh%2BIlYE2ulB8HXwvvm18kIxXwjiB8QpFZ67zaCc&X-Amz-Signature=e5a3c5e0a6353b0da5c9513ca67a42f3e6a73a4ecdaed5a1c563e53628bfd58a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UVWJILF%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIEiCO5uQiqZ4U33dvwZE1a%2FNyBN48E3eNuDdjKpW%2FXk9AiEA96sXPeW4T%2FQovGRkJdtOJ5cfvunT7%2BXH%2BoXeV0%2B0INUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEsapr3t8SijvWbhSrcAwax4FytCXfTdJ8339X61ire4pWTWr0hQMd%2BguG6XmtOpIirOGhM4gHLo6xEaG9cfeIYZElwpbnJy8q4FAwHuYp1mLRCeiqlZx4M6ubWTU3Z3gLui2l04JVmfbz3PR7FMVhn%2B4IUMXOt7uRzv8PGB6vSLyKdJmMZ88umdznT%2B8ooBCOqNHQpQyjDHaxAfQEklB7Iyqb%2FLpA778K1vXQWkLiHWPCqJmyxKMy2j3Gtx%2FQovdyvK3t9j9MlHPRRR85l0xB9Lo4p3WmhbYFlz5Ez%2B0M5A%2F6WwDkU%2F%2FE3c777%2BWVDS0AIJeNv%2FFZFP3E8GFH5DEwx54py9tvdXUdX1vJl3xZFA2auhw3ck%2B%2FEkKYUKCwUibyijiHRqghkZ8MNcBaQ5U771HQUAKNLtgD%2BZ%2BqrZ7vYXTm3ntzeBB5RfJkQd%2BGI0vtR2HtRiRUHhqXxDL6BnO3Pz8zHgsyq8oTP3ZBIeiDNGmjF%2BwzYT0%2BmOxcb%2BufArmJPyLwG7R%2FX%2FMj7OilN8n%2BhlIEwm5TBC4XjRRrvI%2F4OnTc8OblA5JHTduMZaWghixAPE7nmDOqH6ePMDEHQoANRKyUowTQfnCqmet2EM3W4zIoVsDlcL3bUINe9oFRg6GeILThyF8W6txi0MMem8L4GOqUBsvK%2B5t1KUxs3B%2BmXqc2Ve0f8pj1nig7JlxmDaBDFIxZ0qO4Is2pvH2Kjijvjmm8czBMT9sCHPX8K3dzePZDJZoR0rTBRLpkZ8fI9SyDkGNyOqOKtMenbE6XDb75ThTdETq1lqgAIYkrQA%2FtbEqgkhmAxD9VXcKorOOrz776vO0vpvQ1ojNvRiHKBnjn2weoeKd2sr11TVL%2BcTKi6KfWRa5xKmSqS&X-Amz-Signature=324bd57ab03d85356f2f7e4a13fb2c53654554cef099530bc9dbd68739c40f6d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JD7NCSH%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFpkXCXFmt%2FdzL%2F0zh1YfNPooqT3vryGXyN%2BfI%2Bd44wZAiEA0utic%2FMiFa8rECKGMfOV%2FnxTD0f6Z4I3ykDSFvM8t3YqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtisDTsx1YJhO%2BjJSrcA9KZNonGJy3BOtMkbg4h2qh2QweoiRH7h5tQj3M9WLm%2BZrs3MUjxAGez%2FMTHPa2xvGrirFvoKTF12cYeILReZ3rfhpWI3zMOVjSZWDiDk9IVjR55UA3VuSY0k5NMHO0vqthANcoLGPOkCgPa3edxEIXRRrqPPFf66AqgQsTua1kT1WRf66FMwtlpe%2BLHOmQ%2Bb4GWzgZU90gJ2y6NfWHe0K2cPBKg9Tjnt%2F4CGg0hQ7CD4lk2cuctGmED5akz728OnzYSnl11U624u5v7q5K5QGXfaYH9hhQDOMKo9rilvrku%2Fud%2BqdYP68c5%2FmXwWkIvcpNiIfkfuXX%2BH6gEC8F0lx%2BkYdHouxzWWPIt4Ujf1MiMI2zWyYIRmSHtCRzmMxYuaL7sC83lT4IN1zzShqBnolLmgKxiRAPcasSA8tTrNbK8eW0n8Ocp9Qknb8cq9dZ3nTsPn6J0O78sPXx9Zz5K9g%2Bx0kOSxvRTwozpHuvy61jxGWn%2BRyzRtB4bJ%2Bd0NQSkKMDi3Jj6CVseyrM1fW%2FHYcAP2CXypNPBkpiO7DAgFKYC7kL78iPy5CH23Nq718vKmoVCitY%2BKJ1JpQfLyHcEi94jCvCDVQAqQOo8kxfQFhbo26y0QdyOuaU0ZifTMKKl8L4GOqUBYZRDL5NZLSlZefc0eXsK1s0yJf4XBzXMw9mf2pmU86NUIB%2BsDqBkKBWbvtjytKDGn8tOt%2FUc9jmsj5ydsyzHnE1tPWvM%2FBqaym7st2a7cRkVBWxlfV1Ke8G5L4gEmkTfo0I4DI71FzSPIp4bOp6Hkv7HBypgXuOrjfjnlLmOr94%2Bf2NnZshajY%2BPWFOATIjMQn5RUW%2BCJiXWCYhItfs8OR6AdyDE&X-Amz-Signature=5eafb904d5e2115f383b906715fe7a70b8b14ec1bd63c1b1b9949eb11b5eb771&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
