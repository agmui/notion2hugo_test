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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XORZ6SOK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1Pn%2B0Im%2BziVTaIRGlfL3nZCPR7%2FYIWDPnOAb7iklk5AiEAyAPifVBOPKsnlX82svQ7UO7vLiJF9Iz7WU%2FGtCMCEEEqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTMf%2F2POuJX5AubwCrcA9dBoOhjz3X0dW74sYdk3eEXMDWvjWL3YdXbIF2VgrNx06poxFnGa6QgyOLzM1vAUHpkvyvshghQ4ScXuCH90TcSNBCnD5UGGLw3%2F6af0ZUCV5aZx%2Bhan1PGrptOuWCrF%2BJgxcDkMQVRWzHneJI7rkQvIYc885xYYBHT%2F%2BBAHatD%2BPfs0i9b8%2BEMyFCNZo%2BlvdeClD5B6pb6x08PllS0pEIJH39Ma%2FLlZG7Ow6SMo5jDEHFj0xPd1zvpLKoFRqORBuAkQTevKXARj59uC%2BqW0Q0KKkgWPol0AYz1WrhyrPeHe7NwRXBQKpGoJUc89pu%2Fz%2BwTsP0bFCKbS5dnNQO8v7HC28sd6F6FPMOboGcHFqvG%2FKMAobM9QqxZUCr3bcjaB%2B1sEWSZhrMQrLWLQZkA4SBk4qI1ZNZV0clMQeeRpFDBTpXb10bEOi%2BjnlnV1Sh0%2F5bClMBsv1%2FTrTsl5Rc2kMmD6z3wwuWs9FhTyCB4RCmFtK4BEm%2FPwJxsl76KRX1791gPhX4bYVwxZeNw8UJwR8WPAl%2BCY1QqkdnYt%2FWJl%2BCIAfRQMqkNLydclbv44u1U2XSCcu8JwbhdKvmXxnm9hhSPNgVfOLrbEs3PX50uqKmOrKmRY2NVwRvl2sCAMNL0kcMGOqUBXE9gByBH8xYoLCigiJV%2B0%2BY1mi3pEzlY%2FXMdCP61e0X9jt5XlvrnhUGCB%2BpTKDC16IRgUl4Voit3a1lLGy0hGFe76qCQpYZXN%2BnrTK5UIN52uPXc%2FqyRjmnKhWjQpgdpgtU3PN7TSDGXDWHy%2B8qpKSfx%2F1BNyuwKOk65tJXeo1Aa%2BgvuDF0QQzMBmDlBcRk74IMdTFeKtY%2F9KtO0UvDtFsu6P%2FnX&X-Amz-Signature=c712be65ee02e102874047495ed94b3ec25d18a9fc071e9fe2065546de57be4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XORZ6SOK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1Pn%2B0Im%2BziVTaIRGlfL3nZCPR7%2FYIWDPnOAb7iklk5AiEAyAPifVBOPKsnlX82svQ7UO7vLiJF9Iz7WU%2FGtCMCEEEqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTMf%2F2POuJX5AubwCrcA9dBoOhjz3X0dW74sYdk3eEXMDWvjWL3YdXbIF2VgrNx06poxFnGa6QgyOLzM1vAUHpkvyvshghQ4ScXuCH90TcSNBCnD5UGGLw3%2F6af0ZUCV5aZx%2Bhan1PGrptOuWCrF%2BJgxcDkMQVRWzHneJI7rkQvIYc885xYYBHT%2F%2BBAHatD%2BPfs0i9b8%2BEMyFCNZo%2BlvdeClD5B6pb6x08PllS0pEIJH39Ma%2FLlZG7Ow6SMo5jDEHFj0xPd1zvpLKoFRqORBuAkQTevKXARj59uC%2BqW0Q0KKkgWPol0AYz1WrhyrPeHe7NwRXBQKpGoJUc89pu%2Fz%2BwTsP0bFCKbS5dnNQO8v7HC28sd6F6FPMOboGcHFqvG%2FKMAobM9QqxZUCr3bcjaB%2B1sEWSZhrMQrLWLQZkA4SBk4qI1ZNZV0clMQeeRpFDBTpXb10bEOi%2BjnlnV1Sh0%2F5bClMBsv1%2FTrTsl5Rc2kMmD6z3wwuWs9FhTyCB4RCmFtK4BEm%2FPwJxsl76KRX1791gPhX4bYVwxZeNw8UJwR8WPAl%2BCY1QqkdnYt%2FWJl%2BCIAfRQMqkNLydclbv44u1U2XSCcu8JwbhdKvmXxnm9hhSPNgVfOLrbEs3PX50uqKmOrKmRY2NVwRvl2sCAMNL0kcMGOqUBXE9gByBH8xYoLCigiJV%2B0%2BY1mi3pEzlY%2FXMdCP61e0X9jt5XlvrnhUGCB%2BpTKDC16IRgUl4Voit3a1lLGy0hGFe76qCQpYZXN%2BnrTK5UIN52uPXc%2FqyRjmnKhWjQpgdpgtU3PN7TSDGXDWHy%2B8qpKSfx%2F1BNyuwKOk65tJXeo1Aa%2BgvuDF0QQzMBmDlBcRk74IMdTFeKtY%2F9KtO0UvDtFsu6P%2FnX&X-Amz-Signature=ed33f2fa49409568fc262c1209cfd89d3f9d4a20ef0639d567d45a50cce28bcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XORZ6SOK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1Pn%2B0Im%2BziVTaIRGlfL3nZCPR7%2FYIWDPnOAb7iklk5AiEAyAPifVBOPKsnlX82svQ7UO7vLiJF9Iz7WU%2FGtCMCEEEqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTMf%2F2POuJX5AubwCrcA9dBoOhjz3X0dW74sYdk3eEXMDWvjWL3YdXbIF2VgrNx06poxFnGa6QgyOLzM1vAUHpkvyvshghQ4ScXuCH90TcSNBCnD5UGGLw3%2F6af0ZUCV5aZx%2Bhan1PGrptOuWCrF%2BJgxcDkMQVRWzHneJI7rkQvIYc885xYYBHT%2F%2BBAHatD%2BPfs0i9b8%2BEMyFCNZo%2BlvdeClD5B6pb6x08PllS0pEIJH39Ma%2FLlZG7Ow6SMo5jDEHFj0xPd1zvpLKoFRqORBuAkQTevKXARj59uC%2BqW0Q0KKkgWPol0AYz1WrhyrPeHe7NwRXBQKpGoJUc89pu%2Fz%2BwTsP0bFCKbS5dnNQO8v7HC28sd6F6FPMOboGcHFqvG%2FKMAobM9QqxZUCr3bcjaB%2B1sEWSZhrMQrLWLQZkA4SBk4qI1ZNZV0clMQeeRpFDBTpXb10bEOi%2BjnlnV1Sh0%2F5bClMBsv1%2FTrTsl5Rc2kMmD6z3wwuWs9FhTyCB4RCmFtK4BEm%2FPwJxsl76KRX1791gPhX4bYVwxZeNw8UJwR8WPAl%2BCY1QqkdnYt%2FWJl%2BCIAfRQMqkNLydclbv44u1U2XSCcu8JwbhdKvmXxnm9hhSPNgVfOLrbEs3PX50uqKmOrKmRY2NVwRvl2sCAMNL0kcMGOqUBXE9gByBH8xYoLCigiJV%2B0%2BY1mi3pEzlY%2FXMdCP61e0X9jt5XlvrnhUGCB%2BpTKDC16IRgUl4Voit3a1lLGy0hGFe76qCQpYZXN%2BnrTK5UIN52uPXc%2FqyRjmnKhWjQpgdpgtU3PN7TSDGXDWHy%2B8qpKSfx%2F1BNyuwKOk65tJXeo1Aa%2BgvuDF0QQzMBmDlBcRk74IMdTFeKtY%2F9KtO0UvDtFsu6P%2FnX&X-Amz-Signature=9e8b455972f12c0c900537b90487076bb74454c4be71a0db75c3bbeb4deda855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOPTTARL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzOz2PwQc2ZI16523LLVRtP40Wmhmm5kOsp3dwS3jqcAIhAJxT9EDWwCdUkSHUe3I0QmLwnkzKcmm2Spzsd4o5vmGbKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHtjS3M0cextbGJs8q3AMVQQfwd517WI2y2bY3w7CFe%2FSQ1GqbsMauJ4P6jfdzshEEl%2Bih5c%2B4flDNAzMZTkKVrR0A1tgaHbs5y%2FMVkPnYzI9BDAzMcgdZXv7urqQ2kZYq97GmEcasZFeQxkYDdIxu2ocglfrmE80d4iCNhvV4S0OFT1JMbXCOcxk8Skfdf5qYD7GcU1QWcT1G3lJ8PGoBkQ0Tt0hs03FsqJTmX0%2BaePY6EnrUdgzaDqoZjea5%2F%2FOImPdLlmsYoPaimqbdS8SolRcgcF9Q2SWbPfH6pBWgl9kp%2BsSjRiR1TX9ethIlqold%2FwyMoUbGWYcUdDhX6gXD5Sq%2FM%2BXuYJQZ347cDVc6IaVtmvzQMB3rU5MlnWYt5w6okbZRiEJ%2B0Y%2Fx8qH87SYT6a0LcScLi29%2BpBjEx0Y%2FDwesWT19LwnayKyLQ1GObxplCBcQSjsaptdTWnWuEyBCWX%2FKcbyf86uSZpK0tJvAGlaPrIXkcNlxqq%2FFbhghxRkI7exbLjmYL%2BRN7NwswaSOrOQirXDCoWQ%2Bj6FU0nBfmOo2QuXyqPaVXaFz7%2F6sU6c%2BoeexoNDn1m61X80WX%2ByKvWNO0trBerXhaEGdSJTGZ3Vd8zdRAZ1yc6nvVTWkgm7ZLsOE3xAluQx3fzD%2B85HDBjqkAR%2BImAf1Ew8CVqYQSRxz%2Bq%2BnDZjBdqWkBj8Oxu8l3yeulP4MkwscD0JjInofQqYf5CVSDCizTnt7BUMMrX1mQXH0W0Pau%2BVG%2B3%2FgKKcEiKeEMk7nkpMlHM15oNRXGLocwwpXM83G0Aamw25BmBxAeLRlXhYCK3LL9cOlGuY9bvfWuCZZQuV9r1hUpLZp2p6SLveJVPoVWpwVqcJQf0cSoOvHgTSK&X-Amz-Signature=31e7751a8be8f4201a955fa6a703c18af2664d981b1a1609fae349d683185bed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCLR2UMX%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQXtPhDw6%2BxD6cHTMwtOWCrTEqAoVA2SP5nmZ%2BTxlUTwIgVOVXGzQUtH9AaxMYRxo6bbBtPL3WY0nSNQJ5ZottgREqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlZN63tKFmsvAHKWyrcAwbFN9qJRS%2Bn9uk7Gdg2RdNFuMX28qQC%2FQrd0c1j5FAKoDGk3aMdu8tAacmIpV909ASyWCbu0cFkhwtDt7cDOWhLVsEKOfUH5j5mdCYzgSOr3d5yWhwKAQlEcW29WlsrUuzC%2FoIP3kGN8wtrVCTsSE5WI40Ssau7XEFBjyRKacaDe%2BEJKq1cspWiXQgtCVJxqf0TUvgqAn8pRsAiNoiFg3Ylln9oQDeG%2FY8KY6KHi%2Fu%2BpKD9fFMHB2GMf4llqSj51gasuTd66N4oHnEWB352EcwjkCL9BhnPZPON8FmTNiNva9735mzsFJwxIiv%2Fye7tNt6rOFt7PJt5Cl%2BGUdOk%2B3naRr3p68dPm1wZPF7rEOKa1WiYtb1iltTusfhxdMVLE2T4y7L7xqKhKkZQmrMfcPOJwO24ToErnO6AigF143wgygzWREFCK5RGpSGEj5Z1fEbcOz6lLHB53cNsc6h8Lcvx9FUHOkFILtJ%2BJQJd1hl8w2dhnFeBWpUrA8IZGepO%2B3z9prqQMpJfJh5VqSUb%2Fnr%2Bm3eD9kbAc6Drxe3LZs4P%2BWLN6ln137Y2JMWU9ofIETqEXWbmn%2BKIWKCybf5w0EzrSAke373SeuoM1%2BQXCn4i5I0zfyoJwfLv96rhML7zkcMGOqUBWSa9sbgVd21cOeTY5%2BdhAKBp9n8d2MW49YH7BothB%2FRre2WaiNiV0KWkie2AtzNvrIz31BNomSxCkAU50DodVTRiO9Wu5i4cMJM8NF8pc3PFGesu77l3oZCE6OvyMMKLI5vw4BpwRnFLCIiPef8uUe7O21bfvLjSrJp%2BhCW8HuGUdhUOVxf2D7aJPo69tKjm2Q%2BKxWo7yqutf8L%2B8u6wysu0xr7T&X-Amz-Signature=3a6a99ee84644fadd69e970bdff7562410633fd77d5e06757cf96e4bc6230023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XORZ6SOK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1Pn%2B0Im%2BziVTaIRGlfL3nZCPR7%2FYIWDPnOAb7iklk5AiEAyAPifVBOPKsnlX82svQ7UO7vLiJF9Iz7WU%2FGtCMCEEEqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTMf%2F2POuJX5AubwCrcA9dBoOhjz3X0dW74sYdk3eEXMDWvjWL3YdXbIF2VgrNx06poxFnGa6QgyOLzM1vAUHpkvyvshghQ4ScXuCH90TcSNBCnD5UGGLw3%2F6af0ZUCV5aZx%2Bhan1PGrptOuWCrF%2BJgxcDkMQVRWzHneJI7rkQvIYc885xYYBHT%2F%2BBAHatD%2BPfs0i9b8%2BEMyFCNZo%2BlvdeClD5B6pb6x08PllS0pEIJH39Ma%2FLlZG7Ow6SMo5jDEHFj0xPd1zvpLKoFRqORBuAkQTevKXARj59uC%2BqW0Q0KKkgWPol0AYz1WrhyrPeHe7NwRXBQKpGoJUc89pu%2Fz%2BwTsP0bFCKbS5dnNQO8v7HC28sd6F6FPMOboGcHFqvG%2FKMAobM9QqxZUCr3bcjaB%2B1sEWSZhrMQrLWLQZkA4SBk4qI1ZNZV0clMQeeRpFDBTpXb10bEOi%2BjnlnV1Sh0%2F5bClMBsv1%2FTrTsl5Rc2kMmD6z3wwuWs9FhTyCB4RCmFtK4BEm%2FPwJxsl76KRX1791gPhX4bYVwxZeNw8UJwR8WPAl%2BCY1QqkdnYt%2FWJl%2BCIAfRQMqkNLydclbv44u1U2XSCcu8JwbhdKvmXxnm9hhSPNgVfOLrbEs3PX50uqKmOrKmRY2NVwRvl2sCAMNL0kcMGOqUBXE9gByBH8xYoLCigiJV%2B0%2BY1mi3pEzlY%2FXMdCP61e0X9jt5XlvrnhUGCB%2BpTKDC16IRgUl4Voit3a1lLGy0hGFe76qCQpYZXN%2BnrTK5UIN52uPXc%2FqyRjmnKhWjQpgdpgtU3PN7TSDGXDWHy%2B8qpKSfx%2F1BNyuwKOk65tJXeo1Aa%2BgvuDF0QQzMBmDlBcRk74IMdTFeKtY%2F9KtO0UvDtFsu6P%2FnX&X-Amz-Signature=c7ed26148d15e564a152bb38bef96c44322b888af263ac7a999dc075b873e287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
