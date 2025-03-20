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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MKOWRMU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBGJhFxu8Kl1wnygKgNHPaZrkb5r06YYBccPPtEmCNlhAiBDYcTYg0VPFfRYRCJah9ND62QpmrqMP7sti44eEu6A6yqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYb2fK0dOz6%2Fq6pjgKtwDN2fFnXeM2tOIcUlHVQCy%2BIiXmGnLqmBTHi9aWFw9%2BO%2B%2FX3%2FBdHwU3SgOLTxI8dc0n6puioBMfPg2eT7MXPO%2BCSFnQVaAekjh2bMH1Hh6X8SjdZgFzPEl411QfQMuqrzVuEBMFlt%2FD8v1vYInwZnlTEHeklznuLuIjVcxvAYamc%2BumiO9XZVLhIp%2FpiAFyPW4mEqMf3OYeXrnpAd7hUusbDv2MGr5rGdXRWSg7Bf3hBZ7biMXAid9AvS%2B3GfWg9qu%2F9b8CP9qp83bjroQTMfH7pZ5NMOJfYpwE5M%2BRZF5oO9xua0olhjuO7ZznLd24GrnA75PgTQIOH%2FUlTFXGb4nD94edJBgmSXKTUw5tXyJ9x%2FltJYW1bCbKn7zY0F9Uhc0gbhCtwMCSbJS%2BbXvV2VzbQUz3DhAA%2FwYKXduVIG1ZqcQKq1i%2BZh3ZEE8aoLdCANHF9wFRcxZHtQDxsFRBDFqwjomnjtuqBkMQlD1YAtoeB452mqrRnw%2BBtbP2QxC27udbrHBoFQWVgoxfMtie0MAfWLLNhQJG2izjgQHjUNNKUPk%2F6jMJ9fSfKe0SPBGu%2FzYT%2FEJ1m6Yr3ZdQGCoAnP%2FtatkzG%2FmvJlNKD0K5Fg%2BCXe2Wi5%2FsonrBcTLWx4w%2FKXvvgY6pgHhFEWUEyaLfvP%2B12ko2DV0VY65qTainiYTjtC5D5jE2XVGJSSkhB6YAkGv2K12uLm88xQeB8F3lPH3njMaE1vrZFs5ZORDWfjM%2F%2FXPM9%2FrYbGsAC64XC0KuOPyhA%2BgKEzl1SmN62UjSOtd557VCZgUBUkP%2BxlXiaqJcQeSQ%2FyEbH6f%2BnWx3smYTcgwSbcl65O6xenCEJp4EVa3%2F%2BNL2NVKCUr2HdOs&X-Amz-Signature=559e37ebe98d28cd25882b8bb29154089df86be66e23146c4529d4c5b1799b8e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MKOWRMU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBGJhFxu8Kl1wnygKgNHPaZrkb5r06YYBccPPtEmCNlhAiBDYcTYg0VPFfRYRCJah9ND62QpmrqMP7sti44eEu6A6yqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYb2fK0dOz6%2Fq6pjgKtwDN2fFnXeM2tOIcUlHVQCy%2BIiXmGnLqmBTHi9aWFw9%2BO%2B%2FX3%2FBdHwU3SgOLTxI8dc0n6puioBMfPg2eT7MXPO%2BCSFnQVaAekjh2bMH1Hh6X8SjdZgFzPEl411QfQMuqrzVuEBMFlt%2FD8v1vYInwZnlTEHeklznuLuIjVcxvAYamc%2BumiO9XZVLhIp%2FpiAFyPW4mEqMf3OYeXrnpAd7hUusbDv2MGr5rGdXRWSg7Bf3hBZ7biMXAid9AvS%2B3GfWg9qu%2F9b8CP9qp83bjroQTMfH7pZ5NMOJfYpwE5M%2BRZF5oO9xua0olhjuO7ZznLd24GrnA75PgTQIOH%2FUlTFXGb4nD94edJBgmSXKTUw5tXyJ9x%2FltJYW1bCbKn7zY0F9Uhc0gbhCtwMCSbJS%2BbXvV2VzbQUz3DhAA%2FwYKXduVIG1ZqcQKq1i%2BZh3ZEE8aoLdCANHF9wFRcxZHtQDxsFRBDFqwjomnjtuqBkMQlD1YAtoeB452mqrRnw%2BBtbP2QxC27udbrHBoFQWVgoxfMtie0MAfWLLNhQJG2izjgQHjUNNKUPk%2F6jMJ9fSfKe0SPBGu%2FzYT%2FEJ1m6Yr3ZdQGCoAnP%2FtatkzG%2FmvJlNKD0K5Fg%2BCXe2Wi5%2FsonrBcTLWx4w%2FKXvvgY6pgHhFEWUEyaLfvP%2B12ko2DV0VY65qTainiYTjtC5D5jE2XVGJSSkhB6YAkGv2K12uLm88xQeB8F3lPH3njMaE1vrZFs5ZORDWfjM%2F%2FXPM9%2FrYbGsAC64XC0KuOPyhA%2BgKEzl1SmN62UjSOtd557VCZgUBUkP%2BxlXiaqJcQeSQ%2FyEbH6f%2BnWx3smYTcgwSbcl65O6xenCEJp4EVa3%2F%2BNL2NVKCUr2HdOs&X-Amz-Signature=9632d0cfde0be6ed5f9cd6af2731cc4ad66fe178aebbd5cb0db3acae7bd2866b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGCCRA5R%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIFGiHDrnHolYjUHsD63um4zlBMhkBEya1GeM07zStUqMAiB0sk%2BqyUkONFqv3cS1Qyh3s%2FedQZVrvYD%2BiIZByzkhvyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMltsA73VTZJbIMbvHKtwDIQp9LyASuddnyhjXB0wqzq3GJD1p38JLjrg1Swv6isdhBHAVufhJ4lNP6smmRz98%2FDU8exxdS%2Fz9o55yeuk2KiWm9BLItMQiVctOaeSinVaUExXXrH1GosXvBVrdolr8SgvZN8YFNK%2BliRkrW3JG3wM3wG9OgayfcAk0tTfUZ%2Fhl6Jjc%2BWIsbsCIlGm9YsDI1MiscHwd7EVG5pr%2FO1oKrLYpq7vZu1G5ZoXSWGOGfzILUbOU4enwZkfB3qnIgjIA25D2rQe8%2FEPr8358gLXJpoHhOqEF1OcAzk8EYhNUjaI72rTndq6keLLTpbHGIne1Y6I%2FXYIO%2FPQ41r80f5ZFcUJuc3GMhtVAGAPWNp%2B3AOoA%2FWoSU8S91CGTjpXy1ZuAlavpDbX9tPFsApnU%2B%2FTNW5PtBt%2FgCYFSWLfg1ekSzUkoLihF7EWzJi12WdLhbozdtBjNat9hgbMmDLHARzD1J72gdjbv0ipzqKWWA8G%2FceVvyRZ3h9D%2Fuz5o%2Fvy4GZevDsMgmNx9%2BBzULpy3DV17zXd%2FXOhjpxeul1wPapD7xy5lO2ikeczGTE1fZKcRJusrqnZRCmliMYSWhOo4Qx4eIz1GePp8kMtDPQ76z17LQZDj5e2ZoOJE6ev72%2FAwyKbvvgY6pgGS%2FNfEF8LiSuL%2Fw3SFUfzFKsloezeQa%2BnxGP64bheG%2FOb6q8WlyxttwcH%2FZF%2FmH10yR8tdEZ%2BeFNDQbIPO5Q%2Bwg38T56%2FS%2Fx%2FiQ1muJ%2BuwuldWDACbBmUdl%2FtHRKV7v0OznjqW7h2l0hMx6BvmBUj4niMFCH73OAW0HPCFC%2BWeg1AbB44kWoLkG%2B4fEOquyn2m7v4Q%2BfjHp%2BFbA6DMpsgPBiZF3qp1&X-Amz-Signature=c2af30f87610e86d0d09f861648753ecc19e8c6431f41a504d689cb699ae10c8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQOSMFD2%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIDPg3WgCU0paI1z9%2FEga1mSzw29ttEVV0DiUZr3bU3JPAiA36tTA1zlhVRHh7XmzC5O5rs9q73pBEUgJ1Gv2wwGyvCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTjj192QSf7PKrTdmKtwDcdwVRoECyXnDRQZIEZ8SwEIBRh3gmMBB0NkHojMJ5P0k2u34WnldnQq4%2F%2B2EH%2BodUpTWIT3DtSEBD3jIVYYAGj8q6LIZ2dIcb%2F8147V6N1awdkRjPiwuxi5YrR1LPXAKPuGWvf0NCs%2BLTt5u%2FIBB6BZ7MWIehZSa5qt%2F6u8L9cs4PUF8OZQU1B8y6YHW7HJMYFBtVCHqOe5mzNBXWepAsUUExb3YGlgEjcUmIklJFvdb2%2FYoGsW1aeeOY6gQ3eZEV3LLZxutkx69pt%2F0nB3GbgJeQIBhCLXgXXcuqBAMJW1vM1O96GFg%2FvTksyze3DHr4cI8xp7PXGJuChV5%2BffN0OlCZCLhzw4WWQtgKVfpstbRgVV6k4GLjUwB9xfj6klHl1kmwtV%2BsqlvhrTwSONuxWn1EQw3Z2PKvVV2JL2ZX%2F7ZeNwRLJb4sM%2FlcBMP1V%2FsmZ7wUaYrriuIx0gBIHQJERdvItgpxGzKH6DRd0tUkqFpK5nxEXwGWz6hjs5y1lZ581NDVI%2FbgfyueSBwlf3viJT8uMsDKCnNHaPHaWq8qqyuwhqXR0jyx1hyLuTnLfUih24sYfHPQEPuJ7wiqIxcQTbaMlfS7eLFIyHodRCOpPNSXpBjwahFKbxFP50wh6bvvgY6pgE1kHztTB%2FDHZAtH4u6Po8zuUU2XcCTDupXCQtYWIRPmdOcsYA3CsWvItlWa6A69eof%2BUjql3E7KbSBSLzuO6%2BBn0E%2BEHe8uQ0N%2B4dZWOMopVphcM%2FbasDbwH4aNhVaxANal8pMXlZ92%2B%2BH1sTbN7bSMLb87C8oJjlrQ6uo%2FtxwVodwqKc60CoXJVzNxWve6X7s7fQcBcKd9eeuGtQs13w1uODJRY%2Bw&X-Amz-Signature=a5c82ce7fc0a72bcc600790e995340852f0a04cef1d08c2265aa22bcf69bad05&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MKOWRMU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBGJhFxu8Kl1wnygKgNHPaZrkb5r06YYBccPPtEmCNlhAiBDYcTYg0VPFfRYRCJah9ND62QpmrqMP7sti44eEu6A6yqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYb2fK0dOz6%2Fq6pjgKtwDN2fFnXeM2tOIcUlHVQCy%2BIiXmGnLqmBTHi9aWFw9%2BO%2B%2FX3%2FBdHwU3SgOLTxI8dc0n6puioBMfPg2eT7MXPO%2BCSFnQVaAekjh2bMH1Hh6X8SjdZgFzPEl411QfQMuqrzVuEBMFlt%2FD8v1vYInwZnlTEHeklznuLuIjVcxvAYamc%2BumiO9XZVLhIp%2FpiAFyPW4mEqMf3OYeXrnpAd7hUusbDv2MGr5rGdXRWSg7Bf3hBZ7biMXAid9AvS%2B3GfWg9qu%2F9b8CP9qp83bjroQTMfH7pZ5NMOJfYpwE5M%2BRZF5oO9xua0olhjuO7ZznLd24GrnA75PgTQIOH%2FUlTFXGb4nD94edJBgmSXKTUw5tXyJ9x%2FltJYW1bCbKn7zY0F9Uhc0gbhCtwMCSbJS%2BbXvV2VzbQUz3DhAA%2FwYKXduVIG1ZqcQKq1i%2BZh3ZEE8aoLdCANHF9wFRcxZHtQDxsFRBDFqwjomnjtuqBkMQlD1YAtoeB452mqrRnw%2BBtbP2QxC27udbrHBoFQWVgoxfMtie0MAfWLLNhQJG2izjgQHjUNNKUPk%2F6jMJ9fSfKe0SPBGu%2FzYT%2FEJ1m6Yr3ZdQGCoAnP%2FtatkzG%2FmvJlNKD0K5Fg%2BCXe2Wi5%2FsonrBcTLWx4w%2FKXvvgY6pgHhFEWUEyaLfvP%2B12ko2DV0VY65qTainiYTjtC5D5jE2XVGJSSkhB6YAkGv2K12uLm88xQeB8F3lPH3njMaE1vrZFs5ZORDWfjM%2F%2FXPM9%2FrYbGsAC64XC0KuOPyhA%2BgKEzl1SmN62UjSOtd557VCZgUBUkP%2BxlXiaqJcQeSQ%2FyEbH6f%2BnWx3smYTcgwSbcl65O6xenCEJp4EVa3%2F%2BNL2NVKCUr2HdOs&X-Amz-Signature=2832813367832ef13071313e05ae2f4cc9f78b201ff37d25905d9f701214e429&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
