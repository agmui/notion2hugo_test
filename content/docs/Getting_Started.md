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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MWDV5BY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIAhavTixZNmy%2Bh6wnU36ONhi5q9VviTZbSDoC2JVOtHiAiANapYqEg2yudFCRpjCI0Wjb%2BMzSPue%2FItQY%2F6Yo%2FVEvSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMKCYAJMmYHCuQQAliKtwDpZCOCfVthzTAaLP6n3V5odfdWblowJdpU9JTfafC1Fy9%2BQOyKex8q0DcIeKbUgivECo1XBzyOKaHnfHsZ3Yz4KM0F0BrB7jiHtkPexob%2B2C3bfI7l2zYP47GNYVu7u4FVUxOCayRZnZeVBRwwQw%2F8TwV9LJHNPTBT6cld1VKo2bTNxnnr2ej3o7f%2F1NJKD5SOsERbE30wcryktAE3%2BdOXuOkq3ayQ9scrqjJlY7Il51gzJYDTQpe7pKAJ0k8AjFU0tUnb%2FPWqu02CAy2bkOzc7udy3%2Fqs7Rf4%2FFYla1%2BBz6r2mavim4rfvtMKRgvdwcM7OjhM%2BCqXmgQxfLteZj%2F63PX20vxfrxYa787P4ySzPniy2K%2BfhJbqGnX8uRaGQH%2BYhQd3cv6zaLNy2rrwZq2KuEBOBQX%2BDpK731WgmfgKEkGXMeMUOpWlh4JPz9uBIaKHthBSroQ3wa6HSuMVYog6O9BpwZB5D%2FTu9yleeLixxg2fY0E%2BtHOM4RP%2BpYaFpBuYvZwrHQX9GGoGE8NOG1e%2BONuvUbmqTLHsp3XsH6xFvnIPGZDkjtFikFRS4ijPHIq3YELqbTG%2Bdx9zXgVISm15DzR%2BNYDSYw7QJ7DqF%2FjPtEXEcX5ga6tFpnIW4IwsLDnvgY6pgH8MteFmoej%2FaRUwZHwurIa4m5c%2BZegzOdSW0dQSbqA0Ynharo2B0I82%2FH%2BazQeR1rmqFpUiCDRn2MkEyBkqB%2Bsh39UKsoDw%2BBKiBHInTj%2BjgYr%2B9zA%2BMDszRWq1KkiHwiqB3iPUIXl0UiyS2xFuW3KSKPiCDbKGaBd485vC2Jel2zeIpDtJohzYmMEW2VCfEP11NC9n0ogs%2BgkXGEYs6A8AcFfwRjU&X-Amz-Signature=fa209706108bececd1154e525d3680780717fc379ade75b92722878164511014&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MWDV5BY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIAhavTixZNmy%2Bh6wnU36ONhi5q9VviTZbSDoC2JVOtHiAiANapYqEg2yudFCRpjCI0Wjb%2BMzSPue%2FItQY%2F6Yo%2FVEvSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMKCYAJMmYHCuQQAliKtwDpZCOCfVthzTAaLP6n3V5odfdWblowJdpU9JTfafC1Fy9%2BQOyKex8q0DcIeKbUgivECo1XBzyOKaHnfHsZ3Yz4KM0F0BrB7jiHtkPexob%2B2C3bfI7l2zYP47GNYVu7u4FVUxOCayRZnZeVBRwwQw%2F8TwV9LJHNPTBT6cld1VKo2bTNxnnr2ej3o7f%2F1NJKD5SOsERbE30wcryktAE3%2BdOXuOkq3ayQ9scrqjJlY7Il51gzJYDTQpe7pKAJ0k8AjFU0tUnb%2FPWqu02CAy2bkOzc7udy3%2Fqs7Rf4%2FFYla1%2BBz6r2mavim4rfvtMKRgvdwcM7OjhM%2BCqXmgQxfLteZj%2F63PX20vxfrxYa787P4ySzPniy2K%2BfhJbqGnX8uRaGQH%2BYhQd3cv6zaLNy2rrwZq2KuEBOBQX%2BDpK731WgmfgKEkGXMeMUOpWlh4JPz9uBIaKHthBSroQ3wa6HSuMVYog6O9BpwZB5D%2FTu9yleeLixxg2fY0E%2BtHOM4RP%2BpYaFpBuYvZwrHQX9GGoGE8NOG1e%2BONuvUbmqTLHsp3XsH6xFvnIPGZDkjtFikFRS4ijPHIq3YELqbTG%2Bdx9zXgVISm15DzR%2BNYDSYw7QJ7DqF%2FjPtEXEcX5ga6tFpnIW4IwsLDnvgY6pgH8MteFmoej%2FaRUwZHwurIa4m5c%2BZegzOdSW0dQSbqA0Ynharo2B0I82%2FH%2BazQeR1rmqFpUiCDRn2MkEyBkqB%2Bsh39UKsoDw%2BBKiBHInTj%2BjgYr%2B9zA%2BMDszRWq1KkiHwiqB3iPUIXl0UiyS2xFuW3KSKPiCDbKGaBd485vC2Jel2zeIpDtJohzYmMEW2VCfEP11NC9n0ogs%2BgkXGEYs6A8AcFfwRjU&X-Amz-Signature=e92412feba8ab442aeab42469350d4b8dc295dbf2b99657a69a65e124336b38f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MYM453L%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDW8NEzf4LKE6frnaegemKWcgErbGEgKpcS%2BcbRITXeEAIgWOyM8a7iDOKsEapLw81c7PMRI3pKe2X5l%2BzQt80x8x8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDGRzSNOsQ3LIwqgmYSrcA%2FrlLLQs8l8zJU%2B6NLqWSmFrSm0fTs9YjUZnR4QD1ozEjTTZttGAVjA0BBuEXoiW7KDXNWJEbyJjTWx%2FcX9l594R2aPi%2FZCPYXEC3fO%2F7W8cLj1W0%2BSioUtrGJ5LY6KJTkiQu0atfqfm7xX2QXUED3ypYTrMEmzz8%2FYtRXsKxVmhEIeBoKcmV2jR9wwpEhznQ%2FHEuOJtaPbbzEvqZr7HuPEbprc8JZO34cmVPXsqes2oXxxpD15bBOeM0tAvJEA0704Jvahty6C8%2Fx%2FBZ0IwAqQa5WqRMZG1NliKHtw3hBzxKkKdQBBpu62Vq%2BRRfIoPdWr%2FmCba14sQQIvoidasLm0jY7VnYK%2BexnKWtXTWW0ajP1YQC7AIGeriyZtzGDhlMCAxWiu%2BFanE5dDJ7ZmVUxYD%2Bn70rDUaGCrSPaFuEt%2F9x%2B5ejgPxy5baNr%2BGrkGxbVQtjs6aRu0tW%2FG8V5dFeXip2%2FAJsM3ufloN37yLYrBnSKLAp%2Fb4qLenO7W7qRNnDPJPO%2FssklaopfcTAUpepg%2FcSNN1sdk4wjTm5ilhEHnpamFX%2BdyU6kvn6pNgTI8%2FsdLolfhpPP73O%2F8iy38a036m%2BovOSvUCxOhkHoP23ZF9RdOMz7MfVnnM6qFwMMmw574GOqUB6scw5ITT4Awbt%2B1qc3Ccq88VYXsq%2B2%2Fb%2B0nByvc0Q2umIY%2FUaiozYKBGPX13MKoYBzEgNY6V5pRqsaco8SHBe2REfcnV8PLWpvSXRamz2u9iepolL19NTtsNG9rkJvmbzPa01Lx%2B26M%2Bwh7iSDilPqaNqsQkHDVQ0y7l1COzteZyshC5ZpNuKhXTZRur3cHV0%2BAj5wcplQdKlhUNSHsuTpvRTSXk&X-Amz-Signature=9a1391126351ff76b802ad4b0e02ff5e5df39747dc1388bf625aca3d78829b83&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYQ537YQ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC6U%2FJiu%2FW85zyhTpJSSOojn0DeFjg69tg46iPENic8MAIgNSIxNLsHv4CdMYIhn6IMLh%2F%2FjVJKtAIpFREOwcujHfIq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDM7GOtQmtj73ob73oSrcA10%2BAUUn1yR3MhOgBxh%2FSpsr%2B8J1SzfD3yf78Zf0y5q3SZbzax5FDBA%2F91iPbYefD%2FV7AnLarc7s3oUpsDGY%2BwWp91%2B9iROPGqodATu2tnNXxl%2FiuPNtwyuOBtNA6JCe1XwppAKokWmbcfMAfUD9cuZrvVYob2Gx5mG3ajFqtCx12qLp433N%2BUQMc%2B1i6TMniB0io%2FjbmpYNU%2FpAgxIHdgTHOCWBCeG4xigfaPr8hhjHADmYG5IPqjCrEGncfMmcPw7g0QYCeeBfk8bC2zyohpqf4fXkjW8NBwMtNVARJFgau%2FmmU6mE8iOMAK%2B4ubAJlw7oQor9eCUhW4q9hjMz2RsYKH3Da9kzOHNRK8ABRqIGmvdTIeQBYDuT1yyUN7odVJ9LWDrDjMvJcsLY82Ijbw2IPPJmhcx2LuG2bYkvmk7Mr7DM4M0OgGpJOP%2Bl3yyjYSynDhG5KDGQdfaa1MG3WIQ6ijePGQfIdls6X9rw3j8THg4owQR1c1tdL%2BcdtcOyl%2BigUYDaS5yyHm7S12Evg9wduBE4VWViEMZkX5YXBsOGNj1s5fxlRV0UCJ0PT6JfM%2BU7QX%2FGYUrWeoH0dI%2BvLS8R52Y%2BcOukLto9e94lNy22XQfsZDnhdkOrbxhuMOqx574GOqUBsf2HBrGAfn%2FJF3I5I9FXoI5s%2FiM5%2FVx2LqmltM1PnO%2BhKUjephjyUOyaVATfe%2FV2T5lSqIV%2FcVypXZKf3W0hH%2BT8RnkmObiJcGoXqnvvg7y0uhI0MYKl7l2kfk2Bdq8yLzzgbi82o%2BE1AyYabqsz1GDQv8q2oel9nlf8syabQUA3K74aHYVDzDI6icAU%2BbhTjRYcsf9gIMhyc48F3v4c%2FtnaQDtO&X-Amz-Signature=ef3865932a9ee3945298d9facdca7f3385b0fb57a7f4c42cc2df02cb8c442773&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MWDV5BY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIAhavTixZNmy%2Bh6wnU36ONhi5q9VviTZbSDoC2JVOtHiAiANapYqEg2yudFCRpjCI0Wjb%2BMzSPue%2FItQY%2F6Yo%2FVEvSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMKCYAJMmYHCuQQAliKtwDpZCOCfVthzTAaLP6n3V5odfdWblowJdpU9JTfafC1Fy9%2BQOyKex8q0DcIeKbUgivECo1XBzyOKaHnfHsZ3Yz4KM0F0BrB7jiHtkPexob%2B2C3bfI7l2zYP47GNYVu7u4FVUxOCayRZnZeVBRwwQw%2F8TwV9LJHNPTBT6cld1VKo2bTNxnnr2ej3o7f%2F1NJKD5SOsERbE30wcryktAE3%2BdOXuOkq3ayQ9scrqjJlY7Il51gzJYDTQpe7pKAJ0k8AjFU0tUnb%2FPWqu02CAy2bkOzc7udy3%2Fqs7Rf4%2FFYla1%2BBz6r2mavim4rfvtMKRgvdwcM7OjhM%2BCqXmgQxfLteZj%2F63PX20vxfrxYa787P4ySzPniy2K%2BfhJbqGnX8uRaGQH%2BYhQd3cv6zaLNy2rrwZq2KuEBOBQX%2BDpK731WgmfgKEkGXMeMUOpWlh4JPz9uBIaKHthBSroQ3wa6HSuMVYog6O9BpwZB5D%2FTu9yleeLixxg2fY0E%2BtHOM4RP%2BpYaFpBuYvZwrHQX9GGoGE8NOG1e%2BONuvUbmqTLHsp3XsH6xFvnIPGZDkjtFikFRS4ijPHIq3YELqbTG%2Bdx9zXgVISm15DzR%2BNYDSYw7QJ7DqF%2FjPtEXEcX5ga6tFpnIW4IwsLDnvgY6pgH8MteFmoej%2FaRUwZHwurIa4m5c%2BZegzOdSW0dQSbqA0Ynharo2B0I82%2FH%2BazQeR1rmqFpUiCDRn2MkEyBkqB%2Bsh39UKsoDw%2BBKiBHInTj%2BjgYr%2B9zA%2BMDszRWq1KkiHwiqB3iPUIXl0UiyS2xFuW3KSKPiCDbKGaBd485vC2Jel2zeIpDtJohzYmMEW2VCfEP11NC9n0ogs%2BgkXGEYs6A8AcFfwRjU&X-Amz-Signature=659cdab365e8bfdfc2c4165b48d9a1d413351ef30c9e24f30c2390db924abcd8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
