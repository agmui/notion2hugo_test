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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO7IPLHS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtqyryFnunVcfi%2F%2Bd9UExcvFvo2f0gR1tZHXBTYFfhjAIhAL89Ix8Kq5PiyFvD%2FaSjmydWpIl%2BGUftcA8fCVgJuAFqKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPKDPZ3j9XPaMeucIq3AOv3eGNomdThxR%2BZDCM6K8YUXU7YOrbEcgNRYvD7xGlspVakvF3NiKHBecwIzN%2FlIlRcgX%2FXHRatE%2FYMI%2FOsFOT1edcfUsirnGwEO2jA3pe%2FjRLbd5j9BdJhJy92%2FGszB%2BdjFLWzfZ%2B8zayimlYKwGD3j8xk8QbUj5AxHG1cmX5rgTUoo%2FGZw9CV3xFwe3s3J5K%2BLNi45EcxXwq4ViF1aVquQIjZA1ojMJQGL46EmE83V0tIi2Seq9oCmYfy9mXcZmr4sCgDLAVgfI6BUPc628sSBeaoMJTVo74hmeCFT8Ow1KuaPvRs0NJ%2Byzr88GHdmffeJCUMtcGveVgWbhCZ11Z09ynFfEGxeWl5nf%2Bgd7qqjxmqwm4P5E9RaygFkfCSrLj37n8ohM1luW17uWOV1508I%2B44PaXEu%2BsX791zdaWjyR1EYK4BpNNR7UdqjWLVz4U5IHY265zJcudm%2BGqaNCzkZHgPu%2FMC%2B4CGZzipBFNbQwr1%2B%2FpekVL%2BS8FpUBPWQNwoEUR8mNxKyeVlImkCPPvwiU51ywnKpLe0JsQpg%2BIyFNR0yhHVe7FAF9LEbIVyPZOMcpl6l6kZhIHOD%2B23qbWq0J0sQaWlvkbLaoXvTBSqRKfAX3AvN9AT32PWzC12%2F68BjqkAYWQOMbiSq4VtGSriYJyo1alMf%2BX%2BMV3oaf8fP%2BVJ89qxrSvNlSSYz4gD1a61elrrAJQ5KgxR%2Fh8VKjDOv8jPgiD7u90tvluvr4lQTGhJXMAmVsieoQ9XhI2kiCFBcEaSKAtWKzHiBAXd53Dye8HwXyK5aAKIfWumQ6X3b5GI3Xb21VrPW9vfMX45N%2F3jckYXyd2bqMp1wzpm9%2BgjmKaI90Ly8MC&X-Amz-Signature=0706bfe236cbe1a50bbc96417aab914c5df62578eb14d413b77da241084f5034&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO7IPLHS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtqyryFnunVcfi%2F%2Bd9UExcvFvo2f0gR1tZHXBTYFfhjAIhAL89Ix8Kq5PiyFvD%2FaSjmydWpIl%2BGUftcA8fCVgJuAFqKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPKDPZ3j9XPaMeucIq3AOv3eGNomdThxR%2BZDCM6K8YUXU7YOrbEcgNRYvD7xGlspVakvF3NiKHBecwIzN%2FlIlRcgX%2FXHRatE%2FYMI%2FOsFOT1edcfUsirnGwEO2jA3pe%2FjRLbd5j9BdJhJy92%2FGszB%2BdjFLWzfZ%2B8zayimlYKwGD3j8xk8QbUj5AxHG1cmX5rgTUoo%2FGZw9CV3xFwe3s3J5K%2BLNi45EcxXwq4ViF1aVquQIjZA1ojMJQGL46EmE83V0tIi2Seq9oCmYfy9mXcZmr4sCgDLAVgfI6BUPc628sSBeaoMJTVo74hmeCFT8Ow1KuaPvRs0NJ%2Byzr88GHdmffeJCUMtcGveVgWbhCZ11Z09ynFfEGxeWl5nf%2Bgd7qqjxmqwm4P5E9RaygFkfCSrLj37n8ohM1luW17uWOV1508I%2B44PaXEu%2BsX791zdaWjyR1EYK4BpNNR7UdqjWLVz4U5IHY265zJcudm%2BGqaNCzkZHgPu%2FMC%2B4CGZzipBFNbQwr1%2B%2FpekVL%2BS8FpUBPWQNwoEUR8mNxKyeVlImkCPPvwiU51ywnKpLe0JsQpg%2BIyFNR0yhHVe7FAF9LEbIVyPZOMcpl6l6kZhIHOD%2B23qbWq0J0sQaWlvkbLaoXvTBSqRKfAX3AvN9AT32PWzC12%2F68BjqkAYWQOMbiSq4VtGSriYJyo1alMf%2BX%2BMV3oaf8fP%2BVJ89qxrSvNlSSYz4gD1a61elrrAJQ5KgxR%2Fh8VKjDOv8jPgiD7u90tvluvr4lQTGhJXMAmVsieoQ9XhI2kiCFBcEaSKAtWKzHiBAXd53Dye8HwXyK5aAKIfWumQ6X3b5GI3Xb21VrPW9vfMX45N%2F3jckYXyd2bqMp1wzpm9%2BgjmKaI90Ly8MC&X-Amz-Signature=b17ae636d7945680bb2c01f800e7836d390ccd43c8433d5db716982a6e579093&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DMZIFDV%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATNLZZoAfTtNcpshTMIcsJJS7ksvYLPraRTVytAWBTBAiEAmJNZ%2BdlnatSjQ%2FhI8uncOCSDnT1dalWv9vXen1BcQEsqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2FJK0ANJ26HuVdUIyrcAwZvjO%2FA4tpzvYkaLOlVrYc8GQV0LLMgLNP%2BFof03ygs1RWA%2BR09CjIHmuWwlahbSrC5djTQSxQleA%2FcqJkoV3LBZWTWZHus3dgEcSZQGjLw0DvXX4%2BOuXU7e4upEzGvVY5FiCfrgOjy7htfnyepTxCd0KW2LVF7aJ41uGdM345B890DAZVWsurv9RaL7kfTmfUrRrTcY%2FSxnxz%2FpqaxDt3YYbfK88SyPT9cxNB2CfzDDG3Ueg8gP2NgoS1iylnwVhUFLyYy6oSvf8rCoUU7F6470NAMl0ZkVvz2TajTwYqvnndt6Msy4fzLmu7yO%2Bu3EzvIBI6SPCe3LQ2VYe6ktOUDQlOY1EzEgwu1R5HGDZrUUhPDC8u3qsBcYKfhM8D%2BTUfBMKPF9jHzbLtcmSS9zXXUKLmml8yLeA9oSJ8YrEoXRgepPyHqtd6F%2B6TIiKAcodAgnSXX%2FJ%2FysQtueVzygDWVc4E3UPRgwpp73LFP%2BtiIG5PmgLX45h%2F5YqVwdIRCach5tOMOHlU2AQRToiTZz93p8NRqzubgHkuUfCedO%2FQobaSpDvtHn0cfNZ2Lx6JsTtIvnkJsJ5iTOFaX4cZcQQGPGGj8UFffu7nOh4mAQkF5Vqh0pPBA3moHEoEdMKHd%2FrwGOqUBIXUWKxC0I%2Bn3m%2FDC94Oc1ORswcBg0Lv65b%2FF4q9Awr1uwBiyzaN%2FtHCZP9%2FjksAze7HpfUHttlQYRyLRpcvyhhoM0c6t2hYGIT0ELqsrSBTjjnKWa9a1Pq3xpW24O%2BzSa5HWzkTMyaA1vPV%2FOiYq61qfC1oxYWJHwwN17OCBMgTjFwRKDOZnYUKckn6tF3JD5LGsPhvzTHzTwd4ToHI8R6AuJONj&X-Amz-Signature=34f41b0e902262a2bfed64e3e83cf4ff8f1348e98704e7c959237aacea111fcd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UENXWTET%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkaFImlgQWITDFB%2FEydu58XJBV19fPHFFr8QM1GW3DkAiBZTmBwqUU07xqYHZtXNpUDcjwbTxEj9brzGiDzxfa86iqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCgdM0aLnUdyW8Rg5KtwD9Yvx60ZSVEbbfAmAu5hlTwWMeooe546SNVcNnloxKgng3BexdCFduUmWMqoRVbS1OXbneuGp%2B%2F%2FT027WE%2BmoM7b4WhtCsPT3N77nCOxWYl4Iw6ywJXOec07PTczOatzKTGnoipQIBpYiC0G%2B%2BeHFIMZlSEtCOgOm%2FnwJu7yQLx47Kk6pjOxJzF2CXOR9oVfsb2KLqub6cJi0EUP25nVu5VVNOIIhD6266FHdGmCipR4AvrMw9%2FP9hbX%2FMNGlDX27gNmDyqhRz3ua56H8mB5hoCkpvDfOxpqbjC1tyK2xh8gvz%2BBfKhpEr3LnOxuTvttNBUEU7RIbIOD4eYOJXJVpWlO7v9CJvbxgXUKjER%2FFDfoe4ixEPaLA4ll%2BYvSjb1pB%2BMNhloq4e8fnQOWGRrnToUe0o14K8k1V8V4U1TR8926%2BaLJ8SJ3PQRcMSirC6AF%2FBXsz6EZvGtqvKmWbBE4NT6376UmPejBTH0xwW%2FbkRZOiWV8%2FKrtXs%2B3kcA61TxLX%2Fq0TAh1byY%2F4qvTN4rCgTa1SKnSVHxmBSw%2FFXYfzjrxCYumOgy1cGZ2kNivv7dekH41ce7cxDWv4PLx3bIzv4KNByDgehFzapz8ARbZEkU8uhdhlAKOMMVJ0HEkw9%2BD%2BvAY6pgGVpDWcrjDT216L1DQPm84NXVIXlpY7YjI5LOy5n9p0aApdgE0irG3r1xh%2BEkcR7AgU57G17i%2BXz3ZzUNWK3U233L87gQfrFtSaw%2FqXwG6ih2WReP7TPqylzJlLnSSnT%2FRVAZ2t7ID8kXu8AhpLN1PzUqwjc2ctSm3PyhBRpGqz1NeQ%2FXmQpJDOgYYtkWb3WAaqbqb6h38OYrCD1AAYK4yMfrm1k4V8&X-Amz-Signature=2b8d7e668aad0183eece811baef2becb027737637030ae44549370df538a1327&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO7IPLHS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtqyryFnunVcfi%2F%2Bd9UExcvFvo2f0gR1tZHXBTYFfhjAIhAL89Ix8Kq5PiyFvD%2FaSjmydWpIl%2BGUftcA8fCVgJuAFqKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPKDPZ3j9XPaMeucIq3AOv3eGNomdThxR%2BZDCM6K8YUXU7YOrbEcgNRYvD7xGlspVakvF3NiKHBecwIzN%2FlIlRcgX%2FXHRatE%2FYMI%2FOsFOT1edcfUsirnGwEO2jA3pe%2FjRLbd5j9BdJhJy92%2FGszB%2BdjFLWzfZ%2B8zayimlYKwGD3j8xk8QbUj5AxHG1cmX5rgTUoo%2FGZw9CV3xFwe3s3J5K%2BLNi45EcxXwq4ViF1aVquQIjZA1ojMJQGL46EmE83V0tIi2Seq9oCmYfy9mXcZmr4sCgDLAVgfI6BUPc628sSBeaoMJTVo74hmeCFT8Ow1KuaPvRs0NJ%2Byzr88GHdmffeJCUMtcGveVgWbhCZ11Z09ynFfEGxeWl5nf%2Bgd7qqjxmqwm4P5E9RaygFkfCSrLj37n8ohM1luW17uWOV1508I%2B44PaXEu%2BsX791zdaWjyR1EYK4BpNNR7UdqjWLVz4U5IHY265zJcudm%2BGqaNCzkZHgPu%2FMC%2B4CGZzipBFNbQwr1%2B%2FpekVL%2BS8FpUBPWQNwoEUR8mNxKyeVlImkCPPvwiU51ywnKpLe0JsQpg%2BIyFNR0yhHVe7FAF9LEbIVyPZOMcpl6l6kZhIHOD%2B23qbWq0J0sQaWlvkbLaoXvTBSqRKfAX3AvN9AT32PWzC12%2F68BjqkAYWQOMbiSq4VtGSriYJyo1alMf%2BX%2BMV3oaf8fP%2BVJ89qxrSvNlSSYz4gD1a61elrrAJQ5KgxR%2Fh8VKjDOv8jPgiD7u90tvluvr4lQTGhJXMAmVsieoQ9XhI2kiCFBcEaSKAtWKzHiBAXd53Dye8HwXyK5aAKIfWumQ6X3b5GI3Xb21VrPW9vfMX45N%2F3jckYXyd2bqMp1wzpm9%2BgjmKaI90Ly8MC&X-Amz-Signature=b73645f7741cc572ddc7e7194786d2dfed4b18fa8566652db23dedb7567a8113&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
