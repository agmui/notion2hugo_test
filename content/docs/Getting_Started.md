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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIMOC42T%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA66bM4PW0JTSb5KYkQcd3xrZbdzaht7atY7L2gufqIFAiEAx%2BAEKqWJUc8bSLou39o3SlPmGE8K1%2FPTbVt6gEJhZi4q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDKi8NSYd6lxLmT6UIyrcA04e9xt5kpnH2enhTcMHcdBmWeDHhBYUGyCdN%2BZlRtB%2BNe9EwRJ0q1uDqr78xiqKZSl%2B4%2FtpMfyqn9%2B%2BgIpHHmbtCLGIeDFcdCRRZQk6G5MF%2Fxj20a0VhSuN9wMLy3KR9B%2FXEEVC26gWVv659EO6UITWVsh23wIePATvKKN1Sp0CdzkujnDjRqkZbLMyGcL%2Fl%2FeMI%2BJbaVDEfy3IqNepX4iPQaafj0BflqL3QFPnQxW8oADM7kL60QR5GwnbVxP32Oyo0xQ7zC66hrvP4xLLKpUxad180hhnNMD8X9O0xUPwS53jnAxLkgR4xS%2FYi6b1lH%2FqgVlNvVH6vLQ%2BpEuwIlpohmi4EeB3HiEXi3tVOYdiunqm9PwEyVeiAvoz31a4YJ%2BGGSAaJ1uS9eYYbnq5pU2%2Fap9tp9AvxohJRr9wm8ow8YHa38mo388u4pk9NQp8iWuY8tbHoEIwgoGK1rLXw1%2FSnuS6ycy%2BB848TP5Fki92dRFtrOkTsZdxgIuxmuHw3aLJxg3gBMUZv7YPBVDfZfJc%2Fl%2FNaPo%2BV80Q6k2r8EKj5TuQijGLNprwsoxquwHuySMxurAeMUR7G6yeC4JcuTrtNySSiW0PItPsXaTZlz4%2B2%2FVc2l40kdm9i%2BkdMO6isMAGOqUBGeA1rRANZZC5Rij95a3JZwZcbVBXpGnC2TNsYXvDfFgfY%2FycCRSfaktAPSVq1YqHrJ%2B0unOGtqqADdm%2F4aefV%2BAK5Y0pgV%2F3GmcKwC8Qwg4WXrMq6J21Sd%2FM59cVklnHoDE7vvePJZipm%2B8KiKXW2X%2BaLemVQTZgO8MV0IMUR%2BGLr19xuOKsaDiahTwcx4LNXdZp2Ho8vE3BWYu72f9uKGKYee5c&X-Amz-Signature=2c2e4d96398cff67d99d7d0d6a91636899adef3ad4ac2f3ebae93e89efcaed4f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIMOC42T%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA66bM4PW0JTSb5KYkQcd3xrZbdzaht7atY7L2gufqIFAiEAx%2BAEKqWJUc8bSLou39o3SlPmGE8K1%2FPTbVt6gEJhZi4q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDKi8NSYd6lxLmT6UIyrcA04e9xt5kpnH2enhTcMHcdBmWeDHhBYUGyCdN%2BZlRtB%2BNe9EwRJ0q1uDqr78xiqKZSl%2B4%2FtpMfyqn9%2B%2BgIpHHmbtCLGIeDFcdCRRZQk6G5MF%2Fxj20a0VhSuN9wMLy3KR9B%2FXEEVC26gWVv659EO6UITWVsh23wIePATvKKN1Sp0CdzkujnDjRqkZbLMyGcL%2Fl%2FeMI%2BJbaVDEfy3IqNepX4iPQaafj0BflqL3QFPnQxW8oADM7kL60QR5GwnbVxP32Oyo0xQ7zC66hrvP4xLLKpUxad180hhnNMD8X9O0xUPwS53jnAxLkgR4xS%2FYi6b1lH%2FqgVlNvVH6vLQ%2BpEuwIlpohmi4EeB3HiEXi3tVOYdiunqm9PwEyVeiAvoz31a4YJ%2BGGSAaJ1uS9eYYbnq5pU2%2Fap9tp9AvxohJRr9wm8ow8YHa38mo388u4pk9NQp8iWuY8tbHoEIwgoGK1rLXw1%2FSnuS6ycy%2BB848TP5Fki92dRFtrOkTsZdxgIuxmuHw3aLJxg3gBMUZv7YPBVDfZfJc%2Fl%2FNaPo%2BV80Q6k2r8EKj5TuQijGLNprwsoxquwHuySMxurAeMUR7G6yeC4JcuTrtNySSiW0PItPsXaTZlz4%2B2%2FVc2l40kdm9i%2BkdMO6isMAGOqUBGeA1rRANZZC5Rij95a3JZwZcbVBXpGnC2TNsYXvDfFgfY%2FycCRSfaktAPSVq1YqHrJ%2B0unOGtqqADdm%2F4aefV%2BAK5Y0pgV%2F3GmcKwC8Qwg4WXrMq6J21Sd%2FM59cVklnHoDE7vvePJZipm%2B8KiKXW2X%2BaLemVQTZgO8MV0IMUR%2BGLr19xuOKsaDiahTwcx4LNXdZp2Ho8vE3BWYu72f9uKGKYee5c&X-Amz-Signature=ca0bfdd52afd5a190ccb7df52cb0a480da5c7c86d21ded779859637252f981dc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AXE7F6F%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAllQ5c3QuK9XuKzYbio6l7gwMhVbEpqS6TKCl5DVX0EAiAekyDiwheKlsmI9hi%2FUhrP3R7qRlQXV0PcQXfFoPmf%2Fir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIM8k9h%2BItQ0q174HdEKtwDX9litKiBUP6czH%2FH55mIAAkAnaprk%2FT20l3%2BKSi%2Br%2F0m1TwjYX%2FbdH4s%2FV8mohtUyH7sQrJlRt95pcDPR3mreXmJrTQJ4w7lGI4A7VrdFzrQA%2Fdch0yAO9D0rBruhDHccA3xlkA7wBG2kLRzoYXMwapXtxY%2B8WDzBRzu%2BEAZcO7%2BNwUmjQd4cy8MlCTPri5%2B8836UswEtONaQ5ShpZW8DPV4rN%2FTmRDuboyc%2FaPPGsUuHnXVS4%2Bx%2BIVO3JljcXjqL1frl231heXhG8epMq5uj%2BCIE29RVuO8n18ZapdxSWN97%2FCNXr%2FtLC1ufeBa4mVLpHuxc6KL7Nk8IthdKXXV2n2pi4C2WU%2FVaAAQa93zy4wFMeVXAHusd4ZXzA4MMAVfWnDAPbje5R37Y%2BzQWwaasuUNLSXuzzlJ8DGc2Vz%2FWOclvu9Z%2FMcWlMsY90JdeBaJfQWQmD1nxoshvVc7Eq%2FIgMMcl%2B%2F7p07cG3IV1s4cCriFH30ofa%2FR6BU2ohztd3Zh2mhWa7TeBmv0JimTMmFUf95Q7c3iGlzpD%2BvLUWIoEoPy%2B3z3cpyJ15gvLvkpzqxwqr1efP8W1VISFJVibXH4rI8yVOhrhssMrHaID8UPgXvMBjfHQSHPIKteNccwvKKwwAY6pgGejyjgbU5QdwCi0rS2C4Fxi0hxT%2FlhAoVpDsP2J%2Fq2v7fJt%2FIU46d3adL1MjFLfX64QeXXpPS9%2FiY9aZ%2B3mn1D1vvU7hbidyF5mC15je6k7PCa97YtGLmslEgU9cQiIpBZG0wxemIq4gnhctO14IqW6gXMmCndk11O0c0xa6dEXTDPB5Dif5l6R3dcFF4t0v5We02cRDsIMWCLd1fFEF8Md6x3bR3q&X-Amz-Signature=55fe60c42181725730e70923fe5f27fad383b93ed495c1092c89bb429b81e16b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYOHFYCT%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX5nS9WL60ow%2B7KEac%2FKEFbJYV4gNJ5w507P17fNsTrwIhAPv1Dh%2BGaAtEhNxU3zCWYO5XC8JRunMhYGfk0xr8SRh3Kv8DCDgQABoMNjM3NDIzMTgzODA1Igy0mrrZNeF7aQ4axXAq3ANSOnfCVk3OBYPwCzlpQBAwvn9RhhPSQ%2BnSxm%2BSaGeX9diSE%2Fgm1EVOinV3JDeo7Ynl0cBW2OTNnAl7W9hbNVqksOloOo0E%2Fmq0CJQBYyA05Q%2FUsXonE8UiMKpc11hawPzLr6OhR9VG8M6nXVTIHeOFxFWfn2nxScz1DI1P%2BE99NcOX5u4AIZcLnlOoKBF6Urq5nEo3ej5lNReFlzZ2Ofxdw8N4lOHKGcQc74KKgAyO1G2WxdHkp0M9R%2F7Dv5yEL7jFBO4A9Z6cs2Ge9dI7zQvPV0bEH3tL4GDNFg%2Fzo4%2FIJudoBy926cb%2FAOepPqp9MyeYcb4Pq0tS5UbJGe7UNWcvkKPibllREMb3geUetbN4zyKhisGTa4uYdYg6F0n0VuNRISWqw%2Fs5VlY%2B%2BNkkzyBjZWTB6DnXmfZdlcF31FfQ7qaI5ZfjCq2VAM6SqPRDC5yv7pyzhlnB0h%2FHjRdgrZlD9lmWHGHWAJ7QpM4YNW0m6xT5Xp1BJzPzYTrgmvZXPl1nBPPFpxCw2ASyQDmsrBWTHzXlKc%2FrM6RLh0p89r97TYXPFGBrZBRFP62mxWJMSbe1TnfZGPwA6NWVAHcduo8FSOrzkWqxt1MRjagt2DPPuAi%2BIVlAfdyTxD6F1TDuorDABjqkAavS3sQsMUvtcy5aQHjg3OR%2FSagXWJY2T8ZIuDYItuxuWAdF3wXVyCTVG7Zh8xpZ4D%2FelBiuVW5Ceg82Qu0MsXvT3JSD%2B3CsBjXYkK0b3tt9J7dXvacascXUxyvfXb6atjyqL5ExbuRhYk5EBNReLPBCT3si5v9v4rC0quxiPEYcYjMItpZLN%2BWFFNjwBk%2FONL3LXfrMCnLrgnDk4SKFzPxGUpKh&X-Amz-Signature=c2415326edb881c431ca24960da4107700dfde3e6cf85e32cd5099c5378d2fa6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIMOC42T%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA66bM4PW0JTSb5KYkQcd3xrZbdzaht7atY7L2gufqIFAiEAx%2BAEKqWJUc8bSLou39o3SlPmGE8K1%2FPTbVt6gEJhZi4q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDKi8NSYd6lxLmT6UIyrcA04e9xt5kpnH2enhTcMHcdBmWeDHhBYUGyCdN%2BZlRtB%2BNe9EwRJ0q1uDqr78xiqKZSl%2B4%2FtpMfyqn9%2B%2BgIpHHmbtCLGIeDFcdCRRZQk6G5MF%2Fxj20a0VhSuN9wMLy3KR9B%2FXEEVC26gWVv659EO6UITWVsh23wIePATvKKN1Sp0CdzkujnDjRqkZbLMyGcL%2Fl%2FeMI%2BJbaVDEfy3IqNepX4iPQaafj0BflqL3QFPnQxW8oADM7kL60QR5GwnbVxP32Oyo0xQ7zC66hrvP4xLLKpUxad180hhnNMD8X9O0xUPwS53jnAxLkgR4xS%2FYi6b1lH%2FqgVlNvVH6vLQ%2BpEuwIlpohmi4EeB3HiEXi3tVOYdiunqm9PwEyVeiAvoz31a4YJ%2BGGSAaJ1uS9eYYbnq5pU2%2Fap9tp9AvxohJRr9wm8ow8YHa38mo388u4pk9NQp8iWuY8tbHoEIwgoGK1rLXw1%2FSnuS6ycy%2BB848TP5Fki92dRFtrOkTsZdxgIuxmuHw3aLJxg3gBMUZv7YPBVDfZfJc%2Fl%2FNaPo%2BV80Q6k2r8EKj5TuQijGLNprwsoxquwHuySMxurAeMUR7G6yeC4JcuTrtNySSiW0PItPsXaTZlz4%2B2%2FVc2l40kdm9i%2BkdMO6isMAGOqUBGeA1rRANZZC5Rij95a3JZwZcbVBXpGnC2TNsYXvDfFgfY%2FycCRSfaktAPSVq1YqHrJ%2B0unOGtqqADdm%2F4aefV%2BAK5Y0pgV%2F3GmcKwC8Qwg4WXrMq6J21Sd%2FM59cVklnHoDE7vvePJZipm%2B8KiKXW2X%2BaLemVQTZgO8MV0IMUR%2BGLr19xuOKsaDiahTwcx4LNXdZp2Ho8vE3BWYu72f9uKGKYee5c&X-Amz-Signature=2080d2c7385869c4381941f9ebda696e4e9f84cc25804133ac9fd043e317dc47&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
