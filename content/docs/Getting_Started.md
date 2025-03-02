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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ4AYASI%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXrbpM2p18vlRD6JE6NyVcBhw%2B04ZE2LNoLrI9UQM29wIgT0NFAEbZFaFovcr8I8fEBUqbJ0Sw1zpwh0VrPcd4C0IqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEWaZLbvYc%2FXXw4iircA2lheqyvTD23FY0aCgmmEtevjD4uJ8FdwLwOHpHcw9%2FUVed6qNy7k%2BzTpPQ93H30uNN9oa%2FpwfIyaHiGyhX9f5WNOxfffUwsbDNjKH5Gs0X0FbdsNKkULg5Dxji8WUnpL4c0lQGZSb3z8mNPHx%2BsxdUbZiKSX%2F6e3JBfvLU%2F%2BqCCrOCEgEdvYvnpn6NtdxToIkWdTzsMPwXRB8RD%2FHHJ3MVBUThrudEMbG%2FtBPhOERh8ekT4mPAJBdxoAW%2BUtiNG6Wyx5GNTLe7LIp5sBMk80F2pncat18FxEb9Q%2BCwimXGbNw2TTr53uBEnMZI9U1ActpCRlzhDfj9GQE5xPf9HgdmfSyBoqbSGBsQxw%2BLLPcckKuT7JDoAV%2Bmz56atnriWjpb8MI5ijxcHUfTeFbSLn7K20l6mGYqSMDLvVIjm25lXE9p5akV2tzzXrDq1YsGaoJVmNqZPuw%2FMm1v45XJhgKsAvU5MiHLw1m%2Bo0Ex2KhOfQ5M4lnfcDZDYiY0pQ%2FvU%2Fe97n%2FC5u2I2oj0M%2FJ76dRz%2B6cQUdASMP%2FgqpDJwjAKn1N39lfjbqBBE9betZOn7Ehsg99gtMAGjRZy%2BI%2FBeQAhTxJLYTuJ1umuveG4t9UFD1fjoYP6XSNHS61POMLj4kL4GOqUBbDE58K6a4yPYRQjWVI554HIXuJRIGwijPeNfiX1dJr48bDaB7EVHDJNQrdDkp%2BGzbJNqNYmj7Hyq7QU%2F5a%2BpbQZkt4UA8nbv3E9dnUx30UB3fcqnRhvwOMKDmMKogudPNVFdBmmPzr8ktrGuY5PnXTHFCTDMfDF%2Bah2pmZuo7JsIYlKJLctVw9klWhZsCgDxhZs%2FyacC45EFRLIICMuGCohqdZFo&X-Amz-Signature=4fb8ae5a2c5918cbeaf31f9de663608830c9ee9c32e9b867df00c832375f9041&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ4AYASI%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXrbpM2p18vlRD6JE6NyVcBhw%2B04ZE2LNoLrI9UQM29wIgT0NFAEbZFaFovcr8I8fEBUqbJ0Sw1zpwh0VrPcd4C0IqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEWaZLbvYc%2FXXw4iircA2lheqyvTD23FY0aCgmmEtevjD4uJ8FdwLwOHpHcw9%2FUVed6qNy7k%2BzTpPQ93H30uNN9oa%2FpwfIyaHiGyhX9f5WNOxfffUwsbDNjKH5Gs0X0FbdsNKkULg5Dxji8WUnpL4c0lQGZSb3z8mNPHx%2BsxdUbZiKSX%2F6e3JBfvLU%2F%2BqCCrOCEgEdvYvnpn6NtdxToIkWdTzsMPwXRB8RD%2FHHJ3MVBUThrudEMbG%2FtBPhOERh8ekT4mPAJBdxoAW%2BUtiNG6Wyx5GNTLe7LIp5sBMk80F2pncat18FxEb9Q%2BCwimXGbNw2TTr53uBEnMZI9U1ActpCRlzhDfj9GQE5xPf9HgdmfSyBoqbSGBsQxw%2BLLPcckKuT7JDoAV%2Bmz56atnriWjpb8MI5ijxcHUfTeFbSLn7K20l6mGYqSMDLvVIjm25lXE9p5akV2tzzXrDq1YsGaoJVmNqZPuw%2FMm1v45XJhgKsAvU5MiHLw1m%2Bo0Ex2KhOfQ5M4lnfcDZDYiY0pQ%2FvU%2Fe97n%2FC5u2I2oj0M%2FJ76dRz%2B6cQUdASMP%2FgqpDJwjAKn1N39lfjbqBBE9betZOn7Ehsg99gtMAGjRZy%2BI%2FBeQAhTxJLYTuJ1umuveG4t9UFD1fjoYP6XSNHS61POMLj4kL4GOqUBbDE58K6a4yPYRQjWVI554HIXuJRIGwijPeNfiX1dJr48bDaB7EVHDJNQrdDkp%2BGzbJNqNYmj7Hyq7QU%2F5a%2BpbQZkt4UA8nbv3E9dnUx30UB3fcqnRhvwOMKDmMKogudPNVFdBmmPzr8ktrGuY5PnXTHFCTDMfDF%2Bah2pmZuo7JsIYlKJLctVw9klWhZsCgDxhZs%2FyacC45EFRLIICMuGCohqdZFo&X-Amz-Signature=6b6c1b820497b255dae358250bf61bc7712284dc3fd50176c7315796d9f9eb18&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY75NCJF%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpkFTWyPiK0y8AaqzbqgXTCpitKSPRgaUVLxEk1mlWIgIhANX7tNU%2FiNPsgw0O58NH0wzCIVnRWO4xPkj9lvPsS7p1KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw42RK6yLkgi7mrTogq3AMBRP0%2F8OTw7%2BdErclaNTcksCO27%2FTWNCwsA7qxJ1JDqZcOLxXUOTamUqIcaQ%2Bt7w7sKTPYCJd9nkv%2ByKXGZuWIeV%2Bnqwu2UvOnkbs1pbDLHV10yGYRjJEs1OfLGrlXupUh6nQ8AUw4Ok%2FSu%2FxSVMck5Kkmt1Sjan1nAYRr6dUOh%2BlESZkRTuck6dTR47F9R9DbrqjfJwVz9AXSATZsr021uYQLJ7oWaPdklIO8pGFdKJ2bxYrZ14P31%2FBgzezzxhyBwZwxB1SIINGT80GoAm1mlVvH1rXRkZGbu4xfBS0uAjlPhudXefz3X1xzvbnfb1yrWYbOhvsb9h7lFPcAxtVK3OrcoYbc1Y%2B09EqOrhDmCdm1ULxAak57nXt3ewYXmOKUUnz9RFi9RyNVYpHSe7y9oonvvxFJYe8Z6EYUWp9Lslh6aXunBzuddTzzy0oGrUKLpaElIFq%2Bxorh4OTmM2c9lveMN1uqdXM4SUyuzefmTlvqaFN%2BULTybsIafmcSRpKoLgrYM2T08HA5PPhe8sv4je%2BPV8aXIfuIlbSZKzH2IJWP8VThVbWgZl63CMpjozSY3KgOe6lPSlpn2N2rqqpagJCz7AjpCK6qNJEFbaA7gFTjd3hGV%2BV%2FghNXZTDN%2FZC%2BBjqkAZHUXisEbAj8h8373OR%2FYuN%2FHaJg4zhgrGIWFsMC9yd%2FlJ2rtnTHGKwtEwkEg1T4RQPhPVFMXfU5A94JHM4VCf8bnBGSvaYftrEEIe98rKfxlmvuuoV4BY%2BtAi%2F9xFg8SRTtFWhPINS%2FHrwEGPRU885FBZ7IpO6LZoeo4XB3lsYkuq6etCzH4PdJjF16x%2B19nCwUQtVLXwM5pnbfXGHpS551MgQL&X-Amz-Signature=8131bf1080a0c08fa5140e343b73b7b2258bf0f073b8dbe1b181015aae88d725&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXNPZDRN%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo2AeKji1ALz1jxfJVpLXNMAc3LXwgpDNY1gQ9vbYXjgIgGphJz69JDQR1%2BKIRmVqSoXKZYh9XtUa2V2ysANrklsEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtTJDQp6XUiXfwkUSrcAxOJ6nlrn6qUTDrKEVv2oU%2FExWOvF%2Fm4vHQvuomJuz%2FmY1NGj1COO22sn5uulXs7JLZkfbjABdWcIfO%2FWlijpBgV0sLejudyDxmRnyAsl1si%2F8eRdrRHun7bn%2F7asw1Hn9Z4hXpJG%2F3f0VZ37B2KvlUKi%2B%2FXU0164VICSf2a4KRy6BSeRb12OZ%2FNMrV5S8S5arqBOIBL4WvHHac8FbdM4EZDWRNBwB84pNvYWVCn7Vco1BU2kxwWRO0gG0wYx31Mt8o1yB9KiK6NDwmEXt5eureg5IpAI7FdFCW4elH3caBxsnr4gIY%2BkFsOovTRJB8dR6Gj8Ur85bIyMMMrr%2BkTP4S%2FBY176dn%2BPSSQsL94wZyCrLtqlr94FT0iVZlKfcT7EjcKZBeHIHBpwEmI9UQbOWjKbB%2Fp7J3KC2fVAV7iL%2B8byc43iMypIB1yqZI8huHldkCVTJOhX8EJKh81OGDNLGaC10ZQ4EtRMjYR1wd0MIDjNOSkn7UuAbBAcB7dQJ7xkywRykfn32nL6V0L8Wv6b9loXCknfkby50b6z%2FFmT%2BnUhtbdKbla0bKBsAscL%2B0W5ojDrstS7SKogJB7ADR6ZJkzDK1aciJBJsh5f26Xj9K3ueH%2F%2FgRHdvG%2BNsRJMK76kL4GOqUBPgwlUa9GtSW4eJIR%2Fha05YCe%2FsAKTeYCPaSyqMO3sr75ne%2B03CL3oXG8jJpTNHIzWMMGYdklDnp7EgmJl2kPLlVxXAYJJIJODlSIXgKNmIeDaqSILExVAD0VuBG8yeqxvoIu0Ss1TbJ72tIZLxms8554OzfYSaT5DwoiCQYXAHWUp5aQ6iRTYemZPX%2FuniaRm7P9B6YWptUYIVJewzz4fd6e1Bxe&X-Amz-Signature=5ecefde6f073032db3dad41eaad85fa8e884fbb75d352e50d1618477aca23f39&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ4AYASI%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXrbpM2p18vlRD6JE6NyVcBhw%2B04ZE2LNoLrI9UQM29wIgT0NFAEbZFaFovcr8I8fEBUqbJ0Sw1zpwh0VrPcd4C0IqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEWaZLbvYc%2FXXw4iircA2lheqyvTD23FY0aCgmmEtevjD4uJ8FdwLwOHpHcw9%2FUVed6qNy7k%2BzTpPQ93H30uNN9oa%2FpwfIyaHiGyhX9f5WNOxfffUwsbDNjKH5Gs0X0FbdsNKkULg5Dxji8WUnpL4c0lQGZSb3z8mNPHx%2BsxdUbZiKSX%2F6e3JBfvLU%2F%2BqCCrOCEgEdvYvnpn6NtdxToIkWdTzsMPwXRB8RD%2FHHJ3MVBUThrudEMbG%2FtBPhOERh8ekT4mPAJBdxoAW%2BUtiNG6Wyx5GNTLe7LIp5sBMk80F2pncat18FxEb9Q%2BCwimXGbNw2TTr53uBEnMZI9U1ActpCRlzhDfj9GQE5xPf9HgdmfSyBoqbSGBsQxw%2BLLPcckKuT7JDoAV%2Bmz56atnriWjpb8MI5ijxcHUfTeFbSLn7K20l6mGYqSMDLvVIjm25lXE9p5akV2tzzXrDq1YsGaoJVmNqZPuw%2FMm1v45XJhgKsAvU5MiHLw1m%2Bo0Ex2KhOfQ5M4lnfcDZDYiY0pQ%2FvU%2Fe97n%2FC5u2I2oj0M%2FJ76dRz%2B6cQUdASMP%2FgqpDJwjAKn1N39lfjbqBBE9betZOn7Ehsg99gtMAGjRZy%2BI%2FBeQAhTxJLYTuJ1umuveG4t9UFD1fjoYP6XSNHS61POMLj4kL4GOqUBbDE58K6a4yPYRQjWVI554HIXuJRIGwijPeNfiX1dJr48bDaB7EVHDJNQrdDkp%2BGzbJNqNYmj7Hyq7QU%2F5a%2BpbQZkt4UA8nbv3E9dnUx30UB3fcqnRhvwOMKDmMKogudPNVFdBmmPzr8ktrGuY5PnXTHFCTDMfDF%2Bah2pmZuo7JsIYlKJLctVw9klWhZsCgDxhZs%2FyacC45EFRLIICMuGCohqdZFo&X-Amz-Signature=3261ce5b3d5113230c6138072798d2c5b4bdffa62ad06a98a900eddce37c3875&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
