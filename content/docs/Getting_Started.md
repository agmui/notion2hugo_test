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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XMIYGDK%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDPg4ex1Fq1xjBn4t38DfAcmeIs4Vpg%2BT6UvVQ4B7a8ewIgJ3pUqH%2FAIl5ESFIor%2BDFqtR0lUisyPmRnjqUE1uq2FIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDNrc6284hWwAMo8Z9yrcA4yiIbzYHjcBt7ANHq1fY%2FdnwJifzLvkcAt%2Bg%2F56q6g8fD09fmlQjWdZ92altp7HeLDo4KJngD%2B7%2B1Nz0NofigcGVNLMt5DEU%2FvWrz3ie3bVzbzdvs3%2B2llCT4k1iZWBDaO2XksFdj4EZJx7oDgNHjN9g1wKqh1Z5z5s%2BLxgjwCQKCHToup1jB7IObqPKt0XcTzTjJKYUm%2Fsk0mNEHhxG8nSa9pSp7wJfsftq4onbChlbMn0qxekp3NFT%2B9CHwVgDF%2BasQtn2jNexBIc9%2FjfdCKY0C%2FAKKeEPgqWfTmnRQQfaMUzdeyD%2FSLEqm6%2FiRm2d5q0%2FC6HG3TVo5aZclWTi2shNw0Sgx4a0xW557FkjS2vW%2BKdo8g0HG4yW%2BiT8FA1N8Nr%2Bd40FbBIRpkFjixliRqIDx3uMtg5MOtfmXEXjtcHwKTmjaE5Zst5lT0kuM%2BTzr8URNnIk8uELeGAg%2FXhwwOcTA3worsr8PU9GMFJaaZjdt1h1XjvzZxjuPuVrmTjYCHDcL1E4B7yOBgSalNpArcYTnYJ2bGEeQu0TiFMf3yzjW5W9CavbH%2BJZ4Oy%2Ff%2F%2FO3E01Lmyx5rpALZL5gPQmkxqePTQRSrIFpYhcG2HgiF1TLaf3YsT%2BYsbgfcFMNT22sMGOqUBqNPy54D%2BhpZ9aTUjid3AcO1d93FsB0RzRzuu9AGWKQdndiM5oMRyxxAZV7o%2FXCypryfd44gJdhagUDyylQKb5rIHBi6be%2F4FcreBvHPMgkGO2EPe78sWcKSjm4GZvlFyJcIg9h0AnOd%2BWHWXOmcRz0PePohIYyE18eUFvp7SdKMkxQT6%2BPdcRIH4Xa2ZnQIMVWVTmQvGEQJQB8YpZSFbiCBaGTlS&X-Amz-Signature=4855489a27be99744e22db3d8000be75edd665455816bd8c80c89883f923baa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XMIYGDK%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDPg4ex1Fq1xjBn4t38DfAcmeIs4Vpg%2BT6UvVQ4B7a8ewIgJ3pUqH%2FAIl5ESFIor%2BDFqtR0lUisyPmRnjqUE1uq2FIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDNrc6284hWwAMo8Z9yrcA4yiIbzYHjcBt7ANHq1fY%2FdnwJifzLvkcAt%2Bg%2F56q6g8fD09fmlQjWdZ92altp7HeLDo4KJngD%2B7%2B1Nz0NofigcGVNLMt5DEU%2FvWrz3ie3bVzbzdvs3%2B2llCT4k1iZWBDaO2XksFdj4EZJx7oDgNHjN9g1wKqh1Z5z5s%2BLxgjwCQKCHToup1jB7IObqPKt0XcTzTjJKYUm%2Fsk0mNEHhxG8nSa9pSp7wJfsftq4onbChlbMn0qxekp3NFT%2B9CHwVgDF%2BasQtn2jNexBIc9%2FjfdCKY0C%2FAKKeEPgqWfTmnRQQfaMUzdeyD%2FSLEqm6%2FiRm2d5q0%2FC6HG3TVo5aZclWTi2shNw0Sgx4a0xW557FkjS2vW%2BKdo8g0HG4yW%2BiT8FA1N8Nr%2Bd40FbBIRpkFjixliRqIDx3uMtg5MOtfmXEXjtcHwKTmjaE5Zst5lT0kuM%2BTzr8URNnIk8uELeGAg%2FXhwwOcTA3worsr8PU9GMFJaaZjdt1h1XjvzZxjuPuVrmTjYCHDcL1E4B7yOBgSalNpArcYTnYJ2bGEeQu0TiFMf3yzjW5W9CavbH%2BJZ4Oy%2Ff%2F%2FO3E01Lmyx5rpALZL5gPQmkxqePTQRSrIFpYhcG2HgiF1TLaf3YsT%2BYsbgfcFMNT22sMGOqUBqNPy54D%2BhpZ9aTUjid3AcO1d93FsB0RzRzuu9AGWKQdndiM5oMRyxxAZV7o%2FXCypryfd44gJdhagUDyylQKb5rIHBi6be%2F4FcreBvHPMgkGO2EPe78sWcKSjm4GZvlFyJcIg9h0AnOd%2BWHWXOmcRz0PePohIYyE18eUFvp7SdKMkxQT6%2BPdcRIH4Xa2ZnQIMVWVTmQvGEQJQB8YpZSFbiCBaGTlS&X-Amz-Signature=1e6911083a301dbdc2698fab951006e21b369c6d6421318b99c2616b2b8bb85f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XMIYGDK%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDPg4ex1Fq1xjBn4t38DfAcmeIs4Vpg%2BT6UvVQ4B7a8ewIgJ3pUqH%2FAIl5ESFIor%2BDFqtR0lUisyPmRnjqUE1uq2FIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDNrc6284hWwAMo8Z9yrcA4yiIbzYHjcBt7ANHq1fY%2FdnwJifzLvkcAt%2Bg%2F56q6g8fD09fmlQjWdZ92altp7HeLDo4KJngD%2B7%2B1Nz0NofigcGVNLMt5DEU%2FvWrz3ie3bVzbzdvs3%2B2llCT4k1iZWBDaO2XksFdj4EZJx7oDgNHjN9g1wKqh1Z5z5s%2BLxgjwCQKCHToup1jB7IObqPKt0XcTzTjJKYUm%2Fsk0mNEHhxG8nSa9pSp7wJfsftq4onbChlbMn0qxekp3NFT%2B9CHwVgDF%2BasQtn2jNexBIc9%2FjfdCKY0C%2FAKKeEPgqWfTmnRQQfaMUzdeyD%2FSLEqm6%2FiRm2d5q0%2FC6HG3TVo5aZclWTi2shNw0Sgx4a0xW557FkjS2vW%2BKdo8g0HG4yW%2BiT8FA1N8Nr%2Bd40FbBIRpkFjixliRqIDx3uMtg5MOtfmXEXjtcHwKTmjaE5Zst5lT0kuM%2BTzr8URNnIk8uELeGAg%2FXhwwOcTA3worsr8PU9GMFJaaZjdt1h1XjvzZxjuPuVrmTjYCHDcL1E4B7yOBgSalNpArcYTnYJ2bGEeQu0TiFMf3yzjW5W9CavbH%2BJZ4Oy%2Ff%2F%2FO3E01Lmyx5rpALZL5gPQmkxqePTQRSrIFpYhcG2HgiF1TLaf3YsT%2BYsbgfcFMNT22sMGOqUBqNPy54D%2BhpZ9aTUjid3AcO1d93FsB0RzRzuu9AGWKQdndiM5oMRyxxAZV7o%2FXCypryfd44gJdhagUDyylQKb5rIHBi6be%2F4FcreBvHPMgkGO2EPe78sWcKSjm4GZvlFyJcIg9h0AnOd%2BWHWXOmcRz0PePohIYyE18eUFvp7SdKMkxQT6%2BPdcRIH4Xa2ZnQIMVWVTmQvGEQJQB8YpZSFbiCBaGTlS&X-Amz-Signature=575520c58f10c187dc3aa1ee5a4f47ace5ad4c2266ef5935431c234be85e6750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJBK76D6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCICKgPPCImLceheQT%2BDjLy%2Bgsk%2BoOKMjXaZJpr3%2BZ2uF5AiAZHWbRsnpG7q63%2Fuew3qiHjD4wK3zp1n3I%2FFmYrrzFUCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMTlnWF9t9%2F6hgWh0fKtwDlgABmUEwv%2FUQ6BWnNDazED1vYogtl7DBpWKKhDFtmFXvR2htyQMwSQHMz78AzetHIb%2B2mZr43jDuxOZPf2y7bZsKdkZHaJZGKMPAYdrOLhGvGTzwK6Etzs090kPLU0OddiV4EXHn1dtDNt1WEdCPUwAvQDzIKLw3Xgb3%2FVhwKe0EPsaIiaxBeqZakkURBwb6IWFkbOGOCKviUCNSza31KTK9xZIB%2FDJfcY3suUI%2BAlTXjoD3ParoUmL4S7xiA4mRgSr0n4V76kSu%2FHFbrfGLpLA498nQ%2BWSIuDO8CnPNTgbzjl0HoU9GjAO2cwM%2Bmfoq8JIpk4pVDQibKXbwyyazGHvoRaNluUMldhV4oklXOezG3X1x5zITUakUYnJ6RrbkpJtIwSmErvd9czW1Hy2r6LhME8MIEglx6Tjd8J%2F9AjtjOKisRG1JdRpDxNU%2B%2FzesMh9L3IGCwnVT6XZFK0%2FFOh1t1%2FFueBsSEZbiSijPvOEPRqkR36GAEMNUkziSeJNHzNPlwvmPyHxQSqyxna63YGLONKYyyMJQ4O7abi2xUpXU02bV2Ru2swlt%2BDTcxE12jm%2BzhoedYvjWjR9MiauqM8UUAi3vukVEjQqdF5WYfaSviapSlgCMFoaC%2BKswpfbawwY6pgHpjFDmSfdai1sdUlvdZH1oYRntqZcrpH2pXwRgMOELLoALU7OtvetG1tPIzuOLsWa07o4XxlLlvFxIuf2LUNJloii42i%2FDYekyej3eRLXqJ9cAMt4gugpbJdeyifBqsbboC2MVvNpAbEK1YUL32HjOg3xJEqY1bEBun5idLI0goAT7wakraDzO18RYQ8nm6%2FM3AC%2FCdBAeBziySWW%2F5aZyFOx82zlx&X-Amz-Signature=86eeb0cdd5c7e18a2db06a75c6466ed902cc067eac54bdd25e0b7d582db4b7c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOOYUZAY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQC2aqWnxDXn6QAwsZKd9DNQzChp3Zcy41Q1uVp%2BGzfQXwIgYrigMzE2b3tJ7YF1sdkNFto3G8gvvFxWnw1Hww4ThgIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHdYuc5L4LlQeYCUByrcA4TFC4szfzMdpWe0D1lqGyNRaQYRytPKdozQsPFMeclKYK9SlAk57gXNUciuiWJKDXf8nO%2BtmVqsca%2BYVDsdra9Yf6gK717qoX2kNQMiv5cxdo5EFMOJlaTFAeehbi%2B70rP%2FP1GZJWBfg3BI1L%2BpMKacsOuWdqNsGTqPInhqF%2FeTeaTVn7rcDlO5SMHyz1fhtAaVYM9gr47FN4IrWR8JVS8YxVOXY5YRX7VNlvFAHevNPCJN%2FF3XwmoOezE2S3s9OS7qhxiLwX7l2UDH5uG7CUpObTYeMkA9azTeJg7fCGGHKZR3vLdxObbArSL9GnWmKH84MAL5NlVbyAm6Q%2BBwD2xSYaKRuRYHmMQqIKLFwSpvYX4zlmvuAJGZVedTohOI9G5ocK0Y0Rh%2FHjeZyOb66waKS08qm5hMtlDsJHe3IBTN%2Bm8wecSwWGJoYac%2FS1ZFXeBQoGrFp56o480ZwuYzVD6g3CwhlhuTPfeMOePUcEnMfBwoFwMQz%2F4uhdQqDHO1q5JGCWLO36DtGiC8%2F%2BAQEJQDxwVYcskCYL3sQzc4C7anEY5jLK39fNFguzjzj1%2FrSBE%2BNWkATL%2BVuQKGqxGrB%2BTWNZtNTR47xruHIRadYYRmgeBOeKS6yd0cKphSMKr22sMGOqUB9ZcomwQdeLEOUcDm2KXjhXUJgn%2F%2FQOrouse5Ubxy2PqQRmtjqQqyv5uGF7N9X3geLiNjUamRgUw%2FzEiE%2F9BDgDT0CZqW6ck47HDuYEw3xuyuv%2BHZg3CiwRjs5SApN%2B0lx9F9M2Yztat68%2FXaSjTEFqsErW7Ff4T8cu7Gr7SMr%2FMYjotZlrNHftUVGWlMa%2BvkPqtas2R95o7ltOQWpFvGbIPEkxWm&X-Amz-Signature=00aa3f1b1cd7762cfc2b85d37f1ce19171802fd282886ea9a8d43fcc250dece6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XMIYGDK%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDPg4ex1Fq1xjBn4t38DfAcmeIs4Vpg%2BT6UvVQ4B7a8ewIgJ3pUqH%2FAIl5ESFIor%2BDFqtR0lUisyPmRnjqUE1uq2FIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDNrc6284hWwAMo8Z9yrcA4yiIbzYHjcBt7ANHq1fY%2FdnwJifzLvkcAt%2Bg%2F56q6g8fD09fmlQjWdZ92altp7HeLDo4KJngD%2B7%2B1Nz0NofigcGVNLMt5DEU%2FvWrz3ie3bVzbzdvs3%2B2llCT4k1iZWBDaO2XksFdj4EZJx7oDgNHjN9g1wKqh1Z5z5s%2BLxgjwCQKCHToup1jB7IObqPKt0XcTzTjJKYUm%2Fsk0mNEHhxG8nSa9pSp7wJfsftq4onbChlbMn0qxekp3NFT%2B9CHwVgDF%2BasQtn2jNexBIc9%2FjfdCKY0C%2FAKKeEPgqWfTmnRQQfaMUzdeyD%2FSLEqm6%2FiRm2d5q0%2FC6HG3TVo5aZclWTi2shNw0Sgx4a0xW557FkjS2vW%2BKdo8g0HG4yW%2BiT8FA1N8Nr%2Bd40FbBIRpkFjixliRqIDx3uMtg5MOtfmXEXjtcHwKTmjaE5Zst5lT0kuM%2BTzr8URNnIk8uELeGAg%2FXhwwOcTA3worsr8PU9GMFJaaZjdt1h1XjvzZxjuPuVrmTjYCHDcL1E4B7yOBgSalNpArcYTnYJ2bGEeQu0TiFMf3yzjW5W9CavbH%2BJZ4Oy%2Ff%2F%2FO3E01Lmyx5rpALZL5gPQmkxqePTQRSrIFpYhcG2HgiF1TLaf3YsT%2BYsbgfcFMNT22sMGOqUBqNPy54D%2BhpZ9aTUjid3AcO1d93FsB0RzRzuu9AGWKQdndiM5oMRyxxAZV7o%2FXCypryfd44gJdhagUDyylQKb5rIHBi6be%2F4FcreBvHPMgkGO2EPe78sWcKSjm4GZvlFyJcIg9h0AnOd%2BWHWXOmcRz0PePohIYyE18eUFvp7SdKMkxQT6%2BPdcRIH4Xa2ZnQIMVWVTmQvGEQJQB8YpZSFbiCBaGTlS&X-Amz-Signature=34f6b0dc688bb8563c415409c6fae4f82b48049e0ededc7e28417bb51c50ff23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
