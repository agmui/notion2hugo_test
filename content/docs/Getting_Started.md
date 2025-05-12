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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JTZQZ2H%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDfpdo3BWjqJ0JQBFyQJ2iKDON%2Bd%2BViTYML0n8I7%2BKGgQIhAONToY0leORgIt5vG0Tasw2CXJMKmQEsv0kUZ7qeJn54KogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHJes999W%2B1WjGm2Uq3AOqEWnSJS0PQYa3VsK88kgWR295htQbNs91BLBGC1TWHRir8%2FgpHvmCw%2Fzogak4Ox0q9uD3MaBlgYnBVxt9CK3L9eTb6d6GPgwqT2HiVrXp0WnowIzvr%2Fp%2BaJz%2B4CTFExZ4DafxxytmdTEZHHY%2F8x7FSCyZdAYKakjlzbX2FybqryjhSkToGyeFCc54GJKEeNn%2FXBD6%2FFXMIKI6d%2F%2F96hrzAG61VYQr5Pq1ytsSacLvxEaF4p1845z2zsdCfbGI6NGTavp3%2FMzUwgr3MaX6ouBRugOC2hS%2FCcZzuKOGFTQsAvTEBAnnO%2Fs%2Bz891PQRYJCEa%2FFKwT3fJCX4Wq4n%2BMVk1qXCsHnahD76HnRPh09xwljqUdYxgYDUX4833XxGoJxtpfOKvxCDFSGfwacplQN1YMxYySZIN5lrgF3jlEGm%2F9QURfLu8ZTFdOMiUJE6x%2FgQyn1h5lFNqeSnGIubfktaUcbFZvqX%2BdYZz%2FCfjme%2BWo%2F5VIewaxJNzc40BHvSuS%2F0xUFZ9I3%2BNJyiSOu286cWv6uvNvs2G%2Fn5%2BgocViyUX%2FbDL%2BX2RgIu%2Fkecx%2FH6BKX0otdFYqZhkYg1BRWKhcDMMF1e3OAvXpuZYPEc2dmLIBmnShgprlZcvinl%2B9zCUvojBBjqkAe1jo06g3ej6y5o1TcbUJ2yBN7fiqUPycIoNOzhTvZ%2FmnVu%2B8Sp8l%2B1yoUcLgHVL%2FYkX1xvCZHFa5axbmZQ7joofNgDc90Of9WQpWTvMhot70loiLNsAieHWlfi1eMQSdNtKXiJust%2FU%2F5IJsgGROLn93GSTqF5CTfmkHkHwxS7dFBQqjYfU8mdob30KYFbqErMoSi0N0Kb6dox%2Fd79tAiNC773r&X-Amz-Signature=91c7d8aa4491f97b085d311ddb7a0af6d643a3ffe295904be6a4c90f1c87e432&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JTZQZ2H%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDfpdo3BWjqJ0JQBFyQJ2iKDON%2Bd%2BViTYML0n8I7%2BKGgQIhAONToY0leORgIt5vG0Tasw2CXJMKmQEsv0kUZ7qeJn54KogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHJes999W%2B1WjGm2Uq3AOqEWnSJS0PQYa3VsK88kgWR295htQbNs91BLBGC1TWHRir8%2FgpHvmCw%2Fzogak4Ox0q9uD3MaBlgYnBVxt9CK3L9eTb6d6GPgwqT2HiVrXp0WnowIzvr%2Fp%2BaJz%2B4CTFExZ4DafxxytmdTEZHHY%2F8x7FSCyZdAYKakjlzbX2FybqryjhSkToGyeFCc54GJKEeNn%2FXBD6%2FFXMIKI6d%2F%2F96hrzAG61VYQr5Pq1ytsSacLvxEaF4p1845z2zsdCfbGI6NGTavp3%2FMzUwgr3MaX6ouBRugOC2hS%2FCcZzuKOGFTQsAvTEBAnnO%2Fs%2Bz891PQRYJCEa%2FFKwT3fJCX4Wq4n%2BMVk1qXCsHnahD76HnRPh09xwljqUdYxgYDUX4833XxGoJxtpfOKvxCDFSGfwacplQN1YMxYySZIN5lrgF3jlEGm%2F9QURfLu8ZTFdOMiUJE6x%2FgQyn1h5lFNqeSnGIubfktaUcbFZvqX%2BdYZz%2FCfjme%2BWo%2F5VIewaxJNzc40BHvSuS%2F0xUFZ9I3%2BNJyiSOu286cWv6uvNvs2G%2Fn5%2BgocViyUX%2FbDL%2BX2RgIu%2Fkecx%2FH6BKX0otdFYqZhkYg1BRWKhcDMMF1e3OAvXpuZYPEc2dmLIBmnShgprlZcvinl%2B9zCUvojBBjqkAe1jo06g3ej6y5o1TcbUJ2yBN7fiqUPycIoNOzhTvZ%2FmnVu%2B8Sp8l%2B1yoUcLgHVL%2FYkX1xvCZHFa5axbmZQ7joofNgDc90Of9WQpWTvMhot70loiLNsAieHWlfi1eMQSdNtKXiJust%2FU%2F5IJsgGROLn93GSTqF5CTfmkHkHwxS7dFBQqjYfU8mdob30KYFbqErMoSi0N0Kb6dox%2Fd79tAiNC773r&X-Amz-Signature=e51fbe173827142258e9db138c8dce572f1f767e04ef92b89393d5eb691439d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JTZQZ2H%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDfpdo3BWjqJ0JQBFyQJ2iKDON%2Bd%2BViTYML0n8I7%2BKGgQIhAONToY0leORgIt5vG0Tasw2CXJMKmQEsv0kUZ7qeJn54KogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHJes999W%2B1WjGm2Uq3AOqEWnSJS0PQYa3VsK88kgWR295htQbNs91BLBGC1TWHRir8%2FgpHvmCw%2Fzogak4Ox0q9uD3MaBlgYnBVxt9CK3L9eTb6d6GPgwqT2HiVrXp0WnowIzvr%2Fp%2BaJz%2B4CTFExZ4DafxxytmdTEZHHY%2F8x7FSCyZdAYKakjlzbX2FybqryjhSkToGyeFCc54GJKEeNn%2FXBD6%2FFXMIKI6d%2F%2F96hrzAG61VYQr5Pq1ytsSacLvxEaF4p1845z2zsdCfbGI6NGTavp3%2FMzUwgr3MaX6ouBRugOC2hS%2FCcZzuKOGFTQsAvTEBAnnO%2Fs%2Bz891PQRYJCEa%2FFKwT3fJCX4Wq4n%2BMVk1qXCsHnahD76HnRPh09xwljqUdYxgYDUX4833XxGoJxtpfOKvxCDFSGfwacplQN1YMxYySZIN5lrgF3jlEGm%2F9QURfLu8ZTFdOMiUJE6x%2FgQyn1h5lFNqeSnGIubfktaUcbFZvqX%2BdYZz%2FCfjme%2BWo%2F5VIewaxJNzc40BHvSuS%2F0xUFZ9I3%2BNJyiSOu286cWv6uvNvs2G%2Fn5%2BgocViyUX%2FbDL%2BX2RgIu%2Fkecx%2FH6BKX0otdFYqZhkYg1BRWKhcDMMF1e3OAvXpuZYPEc2dmLIBmnShgprlZcvinl%2B9zCUvojBBjqkAe1jo06g3ej6y5o1TcbUJ2yBN7fiqUPycIoNOzhTvZ%2FmnVu%2B8Sp8l%2B1yoUcLgHVL%2FYkX1xvCZHFa5axbmZQ7joofNgDc90Of9WQpWTvMhot70loiLNsAieHWlfi1eMQSdNtKXiJust%2FU%2F5IJsgGROLn93GSTqF5CTfmkHkHwxS7dFBQqjYfU8mdob30KYFbqErMoSi0N0Kb6dox%2Fd79tAiNC773r&X-Amz-Signature=b98d5c5e5de3761511e05f8da42076b52eca553da4b2626af0dfa2ae83ba9437&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW3Z56HE%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIEr4%2FykYOYC7MoyrwdHiT4IXwbxQXksS8yOuUHfeMaTNAiAuv4MOktC1pWQg1Say8FZBPakndq4mKhFeR7vNs949myqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlnya62XErNdmeodHKtwDAW77TfkWQf3OFOuWgocqPwX67cvChKacZohbzUBo6gOoKlLBR%2B73FQRB1JhNb00yISy7SjrLM3bsRD3R2CvV1YyV%2FzmWF1xtoiZlm72OuN1WysGSPW%2BhRzTWv5rv6YB1ddnHuwk72dHKYA9aj3lPUgerwt5sdGQoVppL0coKk2hW%2FZxOBqVLijhYzOZ7%2B9rRnvQrkZqSyiC8HxKVz8uM2S%2FJHJboMXxL54PbGfZ0yUdrI56WHbLcv4fpn1WrM%2FNjfT190gRNPXlBmuojL3%2F%2Bk0kayA%2BQ14iz0mHW6s6dNe18L3VKgFd%2BpByD1Zu0ZavYZ%2BotXV%2BggtU8fsSerTnfEUeJ9VRPf8Xzbj8jmAnXjkbQj9uFNEBEeq34rVdmr96Q55NDLA7Ov0iNPY7uAfyjiFwEHRqsgf4Zb6LZD9rW41o4tqnM0MFI22sigf8kN7GCtI3Uj%2FMark8rfuGfKJ%2B%2FQDQLA2SrdqYq7TJQRSe8f1H6h%2BnYhDz3vMpeVR36o%2BKTvyKfvw9qgRNJ4g53K9TycGyRiwehrqtpMS7Tr%2Bvhxp5zLp2UOLocYlLOKANHsMQ4phtFnq5jbhPZL%2F9KjYTGPeDLxceuHg386Zdy5RM2xsA1AE7D20Jvtbm1DMcw972IwQY6pgHR9Zqj8FMD4NlreMLzKZPp%2F%2FGQclYBwP%2FGPnx6vVyeUqoeqMXO6LUWtEgixh0Pq6LhfC2xU4OHw%2FxFOF7kg3ql3WafSjQcNPIdcO%2Fd9up0mkLGfcqWvzXFqzQqKFYtGUh65lCdKkgKSPXyiSiLNUMSbHDvpgjAX8YMLLKhCOLC1IaeaCwqgq0LMp%2F8anbRFh%2Bfjc5P54UxkCg8z8pi%2FPDvRRNdWgCS&X-Amz-Signature=ba625e838dcdcf1f98a1cfd04beb78d01c90cf53c96a25cc57e2bb520d837aa7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPHTJ5YU%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJFMEMCIDznEAkdUHIK5LzVRQ%2Bw3BXNbv%2BP5M51OcpAd5Gu0i92Ah9SZL%2FVqRD82qq550bv%2FNxPF4maFTQBXghStptggspUKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbBPKjIWbYkeOxMfMq3ANy%2FkhzhMiemmbvwLfZtxoss%2Fp07ULeEDCiIfi8B0Cq%2BBh%2BPiSirBweLBT37%2Fb9QtUXLXHW1NMVBvqphYCJm8HgtNsI4vLGSLDQafjawC67CkBiS4KS4QvSPXpv0NMBrE7ojbvXt7Vq%2B%2FA0ygQ1d1sXGM%2Fbq%2FzAOIlDMBsiwIkJihCA7cylQunJEZcidKUlZdVnHLZRbhz7KQh1cYKRhbm3izTiEEJdl%2FLZLX6hzxnvZrvZPafn2JBZIs2tuOD218lcBC1kvoWXEazBBn13ckk6SbX%2BO8S%2Fj8OeyfV7iq2w4vPgd6UkwsffpI%2Bqn2eS%2BnmhMzPYRUC6Bn%2BwB1kxror7WjGNCfBd4i05V3nS5lTH8ficKl5tWVF1JDvwUc2iXewAY3vaeKCqWztKqFpgYlKvTgZ8lXaVl%2BYUsh%2Bk7OFkioKTOOWugYJ1susRF1%2FRJQ%2BfJCM5TICJE6ls%2F2qlg%2Bfh2vHPPeTb5CbJl3hBIcIpIB4dIXXiKHF843DNSG%2BKk%2BgtVmtKI3iOKmwEI%2B36anN8VMQgdVVkroekmxvs%2BUeNmRnkI8yjSVqADPaNFJVMMYvPBei22SV1jtynzSeHDy%2F3QS%2BI1A%2BLiRN3JB%2Bh%2FjqQaqikDM2KAeZVXwQoYTCPvojBBjqnAeNIw2Q7mbLUcidRU4blHXvtrfKd6vDbObQoPw03Uo8%2B4NTLTcIlp4mlvXo0NAScWg%2F%2FyZbOyKBvr60M9rrOnxBK1p5AnIOrMyFTc8%2FF%2Bicv0buj0Q8uRRx%2FaxihcCcloOHkqsu%2BqchdQacXr%2FyUBSoqRX6MFZPkk4pV1bVI2O%2FP%2F3DqWcAcEIqkR%2BHz7jO5tea3VJVxN5FLUkpUGKn1Z0BJvrg5FBEz&X-Amz-Signature=f2b2961dfea54008eed32f7046ed2c4780bff108f95342c52abcbf113b81b2dd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JTZQZ2H%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDfpdo3BWjqJ0JQBFyQJ2iKDON%2Bd%2BViTYML0n8I7%2BKGgQIhAONToY0leORgIt5vG0Tasw2CXJMKmQEsv0kUZ7qeJn54KogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHJes999W%2B1WjGm2Uq3AOqEWnSJS0PQYa3VsK88kgWR295htQbNs91BLBGC1TWHRir8%2FgpHvmCw%2Fzogak4Ox0q9uD3MaBlgYnBVxt9CK3L9eTb6d6GPgwqT2HiVrXp0WnowIzvr%2Fp%2BaJz%2B4CTFExZ4DafxxytmdTEZHHY%2F8x7FSCyZdAYKakjlzbX2FybqryjhSkToGyeFCc54GJKEeNn%2FXBD6%2FFXMIKI6d%2F%2F96hrzAG61VYQr5Pq1ytsSacLvxEaF4p1845z2zsdCfbGI6NGTavp3%2FMzUwgr3MaX6ouBRugOC2hS%2FCcZzuKOGFTQsAvTEBAnnO%2Fs%2Bz891PQRYJCEa%2FFKwT3fJCX4Wq4n%2BMVk1qXCsHnahD76HnRPh09xwljqUdYxgYDUX4833XxGoJxtpfOKvxCDFSGfwacplQN1YMxYySZIN5lrgF3jlEGm%2F9QURfLu8ZTFdOMiUJE6x%2FgQyn1h5lFNqeSnGIubfktaUcbFZvqX%2BdYZz%2FCfjme%2BWo%2F5VIewaxJNzc40BHvSuS%2F0xUFZ9I3%2BNJyiSOu286cWv6uvNvs2G%2Fn5%2BgocViyUX%2FbDL%2BX2RgIu%2Fkecx%2FH6BKX0otdFYqZhkYg1BRWKhcDMMF1e3OAvXpuZYPEc2dmLIBmnShgprlZcvinl%2B9zCUvojBBjqkAe1jo06g3ej6y5o1TcbUJ2yBN7fiqUPycIoNOzhTvZ%2FmnVu%2B8Sp8l%2B1yoUcLgHVL%2FYkX1xvCZHFa5axbmZQ7joofNgDc90Of9WQpWTvMhot70loiLNsAieHWlfi1eMQSdNtKXiJust%2FU%2F5IJsgGROLn93GSTqF5CTfmkHkHwxS7dFBQqjYfU8mdob30KYFbqErMoSi0N0Kb6dox%2Fd79tAiNC773r&X-Amz-Signature=81c794d72f4c7c0e68b7f0ef8601e13c8872e5c6fe12fc8b89f6bd6e82a49708&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
