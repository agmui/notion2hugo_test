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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U7VRNW5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0UHyHHKOWDgzaB5qudL5OU2TsCdLrNjV7Ka5J%2F7zNyAiEAohCsX%2BWRLQZfq05TTIrWM%2BUcqQpk7NK5HIGaL4J41fEqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMld7rp090PL5%2BDG1SrcAzJqVcC7JxGl54lM1jvSvf1DdOoAuW5uK3fMKA79%2BSgBguY%2FaC2z3lG21cVYba5aROvKgo%2FWX6S0lSA8k9z08j43SPgnokE8obKkyQX7eo%2F%2FHmvKDPFtxz0zEFCdELwLm2hhY9rzViHLVwEL%2BezjKxJykdpcclnvqG%2B%2BmB4OsrpVGbrEs3CAwSjJQhUoQhwk1py2tTMnzzSY%2FRGQw89E7wAE%2Bzod4Nli%2FftgMjYnma0qwnZP1F%2F%2BgOqhFonTCveY8RxrP%2FOZRim8v37U1K6sbvW6FLyWd%2FvlEPq8cvHVAhPScgZuaFN4VLJe6HTgmGw89DccOHP6udTKSfWC5tHa13PzrTaEGv0MHeT6hmmeO3kmaegZJHQ%2BIuvPFAAWKk41oDktD89tZAgzHjrUHo0abC0M3bpQjyd3vidjPNMAYa0CxblE2CTsVV%2BvOUy%2F8qvfcjedjqyxA6kVlhz%2BDfag1s3YeeXi52cOQvO6yThJahSXt4h8L2HtmF0QH6bkM4VtSs9RIw8tBt8xqKEuoOSdg%2B7cZePE7Uh0G27v2mE6y7pR%2FHkruT3A3e6tH6nc6Zx%2FKb%2Fgo7M84kt51rwgnmTrbrvqAggR%2FIK5CD2%2BBbUAauQmFOM7%2B6RCZKqeLEFOMMeEisMGOqUBIPnYowx%2BA2bb4cfThHBrgxQSecV9zXj6SG3NanUl%2BUP4l3UQG2i0%2FMfmVzTdshicH18McpM%2F4wV2FMXJPcHPAdXbx0IvmxGuXwedI43RGwmcD6jq75RhhmkodctYKiR3TXIwJSxtwPjdRe6lWttoe%2BAogwFA4Ooq6yB5StW8%2BfnGsyWQ%2B8ti0k4ygUrLBAbOuUGzHTahN4hUby8oBZg%2FkS6wv%2Bow&X-Amz-Signature=97f57c42e840a8bae4441a8a77cb36b7786f5b27dc13158b2c55a9300dc91b42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U7VRNW5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0UHyHHKOWDgzaB5qudL5OU2TsCdLrNjV7Ka5J%2F7zNyAiEAohCsX%2BWRLQZfq05TTIrWM%2BUcqQpk7NK5HIGaL4J41fEqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMld7rp090PL5%2BDG1SrcAzJqVcC7JxGl54lM1jvSvf1DdOoAuW5uK3fMKA79%2BSgBguY%2FaC2z3lG21cVYba5aROvKgo%2FWX6S0lSA8k9z08j43SPgnokE8obKkyQX7eo%2F%2FHmvKDPFtxz0zEFCdELwLm2hhY9rzViHLVwEL%2BezjKxJykdpcclnvqG%2B%2BmB4OsrpVGbrEs3CAwSjJQhUoQhwk1py2tTMnzzSY%2FRGQw89E7wAE%2Bzod4Nli%2FftgMjYnma0qwnZP1F%2F%2BgOqhFonTCveY8RxrP%2FOZRim8v37U1K6sbvW6FLyWd%2FvlEPq8cvHVAhPScgZuaFN4VLJe6HTgmGw89DccOHP6udTKSfWC5tHa13PzrTaEGv0MHeT6hmmeO3kmaegZJHQ%2BIuvPFAAWKk41oDktD89tZAgzHjrUHo0abC0M3bpQjyd3vidjPNMAYa0CxblE2CTsVV%2BvOUy%2F8qvfcjedjqyxA6kVlhz%2BDfag1s3YeeXi52cOQvO6yThJahSXt4h8L2HtmF0QH6bkM4VtSs9RIw8tBt8xqKEuoOSdg%2B7cZePE7Uh0G27v2mE6y7pR%2FHkruT3A3e6tH6nc6Zx%2FKb%2Fgo7M84kt51rwgnmTrbrvqAggR%2FIK5CD2%2BBbUAauQmFOM7%2B6RCZKqeLEFOMMeEisMGOqUBIPnYowx%2BA2bb4cfThHBrgxQSecV9zXj6SG3NanUl%2BUP4l3UQG2i0%2FMfmVzTdshicH18McpM%2F4wV2FMXJPcHPAdXbx0IvmxGuXwedI43RGwmcD6jq75RhhmkodctYKiR3TXIwJSxtwPjdRe6lWttoe%2BAogwFA4Ooq6yB5StW8%2BfnGsyWQ%2B8ti0k4ygUrLBAbOuUGzHTahN4hUby8oBZg%2FkS6wv%2Bow&X-Amz-Signature=1e587a1b4caa130fec4a93ac9d6a4ac9b457320f7715c35dfbd1eef7647cf61d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U7VRNW5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0UHyHHKOWDgzaB5qudL5OU2TsCdLrNjV7Ka5J%2F7zNyAiEAohCsX%2BWRLQZfq05TTIrWM%2BUcqQpk7NK5HIGaL4J41fEqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMld7rp090PL5%2BDG1SrcAzJqVcC7JxGl54lM1jvSvf1DdOoAuW5uK3fMKA79%2BSgBguY%2FaC2z3lG21cVYba5aROvKgo%2FWX6S0lSA8k9z08j43SPgnokE8obKkyQX7eo%2F%2FHmvKDPFtxz0zEFCdELwLm2hhY9rzViHLVwEL%2BezjKxJykdpcclnvqG%2B%2BmB4OsrpVGbrEs3CAwSjJQhUoQhwk1py2tTMnzzSY%2FRGQw89E7wAE%2Bzod4Nli%2FftgMjYnma0qwnZP1F%2F%2BgOqhFonTCveY8RxrP%2FOZRim8v37U1K6sbvW6FLyWd%2FvlEPq8cvHVAhPScgZuaFN4VLJe6HTgmGw89DccOHP6udTKSfWC5tHa13PzrTaEGv0MHeT6hmmeO3kmaegZJHQ%2BIuvPFAAWKk41oDktD89tZAgzHjrUHo0abC0M3bpQjyd3vidjPNMAYa0CxblE2CTsVV%2BvOUy%2F8qvfcjedjqyxA6kVlhz%2BDfag1s3YeeXi52cOQvO6yThJahSXt4h8L2HtmF0QH6bkM4VtSs9RIw8tBt8xqKEuoOSdg%2B7cZePE7Uh0G27v2mE6y7pR%2FHkruT3A3e6tH6nc6Zx%2FKb%2Fgo7M84kt51rwgnmTrbrvqAggR%2FIK5CD2%2BBbUAauQmFOM7%2B6RCZKqeLEFOMMeEisMGOqUBIPnYowx%2BA2bb4cfThHBrgxQSecV9zXj6SG3NanUl%2BUP4l3UQG2i0%2FMfmVzTdshicH18McpM%2F4wV2FMXJPcHPAdXbx0IvmxGuXwedI43RGwmcD6jq75RhhmkodctYKiR3TXIwJSxtwPjdRe6lWttoe%2BAogwFA4Ooq6yB5StW8%2BfnGsyWQ%2B8ti0k4ygUrLBAbOuUGzHTahN4hUby8oBZg%2FkS6wv%2Bow&X-Amz-Signature=0d7065d3b5c06b7b12b268d50cd65ab67117ce4972258ec93f098958744c6de9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URTVSMFA%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRPAWZ5CRbiuy4gMm8g3ruzs98nNBD2LVstQgodqbzaAIhAKfY3bOCpNnFiRb4ZV%2F%2FfNszBa4sel89vPpxot6K6sOxKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx04EDQxOgzFGaXAisq3AMB33CGAKfo0vQeIJ6DGg7BgP0vWm92fHamicu5zomgUt5MYtNToBgbdd0932pSd%2F%2B0F3G9wdzEtXo0Wsn%2FFsUR2SPPXzTRQuT2pBX%2BxwHqhsP47dZhl4KWXF1Pi13KowS3NntHKegDi6cx8i6y109VwXY34nhdZcKU55DUve1j%2BoHDGe0Hp4YJxsG5S%2FIR5Aav8%2FPBx%2F6pkJkbxCw3XHU1ffHj3%2BZsdSr9WCW8Ad03z3s8GEYM2o4DMSoe7nteZnYuuDiwi%2Flvj2%2FoAr7k5k%2FBSkt1H7vY6LOnfVWRi%2BE75lycIodAHKMYad4IjanCgkjixHnKVSz2uXIbdsorwly8HiFf9JyNJyz%2FTdmYcyenVP%2BYNbl4DgQjHnJcgiRZzwOsAmnD%2Bz2LNlZG9cFEfr3D1q16NqJIdwyZA5FtYBSoCY%2F9EWXoS19IoBaojTE7pGNjUZNAdiS7HtjibbPMEnHFYDMQbzr2LKIUTPwltDRoi4pCon1uIAEjHfhsn5AQKBJYJtazn8QAndIshUPiFsIhDcXxn52xrPe7%2FxJcedZCaJZDevlWaNrWnT7jQyHQuhpIYPwSbkDkNlBGzoSFxa7v%2BNsKgVkm6jTk4YqYU8J66FRCz0cjWdIek7Vf2jC1hIrDBjqkAe3e6Zd1BxioJJ5aknZ9UI5UGu%2Bt49q%2Fd%2F1vOZ8%2Bo996UUgUhSVnmIzwTbpv0jG2pf1VzeNpuIVNeWRhpPklaYZauvrsOwH3zI1bl4aY2B3xZoQnlqGy%2BHMix%2FobSdQx8CJqWRLHdU%2BdhM3fQM7wzjMhHvjwkN2meWz7WA9PT2DY2IJ0AuHZ7GC33066%2BKP58CZbLJtCp6XoRAW8Ms%2FMVQEaAyEy&X-Amz-Signature=81a2c583de26ecb7760089183fd2a1f7c2e140e9dddb1031ffe31fa88d1ecb34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5C2FFVU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFsdcIDWBxmv4izMFQSjoymHnjg3G4EOBlPQMkOd3DTAiBVaTGRXgaJVkt4xp50Naz34Kqs2udN4c58jtLH2m4A7CqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGEMwbmT1k4zIxHcDKtwDHOZI2XfeAMY51aXeyYLZB8cknquyQpeehqbrmtSttla5xu62p7KbXubBTSYqrm7eSBVnefCNURB9VKKkYKXI334NcKuf%2BZj8C%2BZZcEOSkUIS7WlFUfJ62LTNORhVpKwyPFBHSB5%2B3qJdZryJCCiVj57h1ncgXOu85UNpoRPCWpF3YZ73lXofU9kASBnzciFuf2OnBJkB0d31g7bFT94SbYdlLxbn4sA7Kz2XmTjfrFwJVPtMR7lZKn9hQqTfJHKnHNBdt5I58q4AfXtpOnBQLqvgr8sWQ911KF%2FQ105DbYR%2BoF0fe5MTIKujkoCbOku2SQSe8ZCowTSvHMdGfk4p9FooczCPu4sfKglnnnVe6nG8%2BG1MiWhskjz%2FnLgkJRPWDFMy6EOH8O18ZL4Qp4t%2BnYRrH3YDncMA1y%2FNnkDkP2lam%2BvCa7a3kxN5NlM4M5yDRfOupGxIiO%2FuseyrFm2n5QM9TBHx0xnLURiv74ZAy1HI%2BGnuh2e4qynjnhD5Z011PE2ktoisvtOt26aiVRh5FnnVwq%2BQBM7StDgsx%2BG7v%2FIgQ6qQLei1kFLzg8RdWGKIR6uIrG2KTB9nlebmAvjZAmK1qo%2BaetusdsowZ%2FkEZcQja%2B5%2BIABOWbG5eJMw64SKwwY6pgFfQV%2Fyp0Ztap%2Bo0UAOrAcodB%2BcOz8%2FNQ76eCGm1Xwu2tH2j6%2BroGdbNgFor9PoaDpcUlQnbz2FAWTNNPnO%2FeOvMP5HAdUMH8PQMo4iEOVPQAyaQvIEpmKP2lzmJm7JXlLyLVq3v6EThenXrvRt8Kz%2FDjSFpU%2BB0eofyLIvBN9%2Btomk7fzqaq65Cvi3a%2BR51tL8WgX9kBq4s%2BpMs60X%2BXZ50fFeiRkP&X-Amz-Signature=41e19ad3454ef63f5227ac6fa10e11dd49c2bfd1db9ed0d9b9b888cd5fdde331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U7VRNW5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0UHyHHKOWDgzaB5qudL5OU2TsCdLrNjV7Ka5J%2F7zNyAiEAohCsX%2BWRLQZfq05TTIrWM%2BUcqQpk7NK5HIGaL4J41fEqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMld7rp090PL5%2BDG1SrcAzJqVcC7JxGl54lM1jvSvf1DdOoAuW5uK3fMKA79%2BSgBguY%2FaC2z3lG21cVYba5aROvKgo%2FWX6S0lSA8k9z08j43SPgnokE8obKkyQX7eo%2F%2FHmvKDPFtxz0zEFCdELwLm2hhY9rzViHLVwEL%2BezjKxJykdpcclnvqG%2B%2BmB4OsrpVGbrEs3CAwSjJQhUoQhwk1py2tTMnzzSY%2FRGQw89E7wAE%2Bzod4Nli%2FftgMjYnma0qwnZP1F%2F%2BgOqhFonTCveY8RxrP%2FOZRim8v37U1K6sbvW6FLyWd%2FvlEPq8cvHVAhPScgZuaFN4VLJe6HTgmGw89DccOHP6udTKSfWC5tHa13PzrTaEGv0MHeT6hmmeO3kmaegZJHQ%2BIuvPFAAWKk41oDktD89tZAgzHjrUHo0abC0M3bpQjyd3vidjPNMAYa0CxblE2CTsVV%2BvOUy%2F8qvfcjedjqyxA6kVlhz%2BDfag1s3YeeXi52cOQvO6yThJahSXt4h8L2HtmF0QH6bkM4VtSs9RIw8tBt8xqKEuoOSdg%2B7cZePE7Uh0G27v2mE6y7pR%2FHkruT3A3e6tH6nc6Zx%2FKb%2Fgo7M84kt51rwgnmTrbrvqAggR%2FIK5CD2%2BBbUAauQmFOM7%2B6RCZKqeLEFOMMeEisMGOqUBIPnYowx%2BA2bb4cfThHBrgxQSecV9zXj6SG3NanUl%2BUP4l3UQG2i0%2FMfmVzTdshicH18McpM%2F4wV2FMXJPcHPAdXbx0IvmxGuXwedI43RGwmcD6jq75RhhmkodctYKiR3TXIwJSxtwPjdRe6lWttoe%2BAogwFA4Ooq6yB5StW8%2BfnGsyWQ%2B8ti0k4ygUrLBAbOuUGzHTahN4hUby8oBZg%2FkS6wv%2Bow&X-Amz-Signature=7bf5d140702ae1f585c12c922899b5b7df20eb4db29c85008db92412cf97c47c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
