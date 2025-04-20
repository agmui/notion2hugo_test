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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QFWDUMC%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIFa2Ymb17OUXVdIWkffJL1kmEot2tj2ROdS13YUDj%2FKTAiEAmN66bIsPC0%2BH8vjJb6zoUSQBSHrbJ8TPPk4fluV56TwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyzsObc9kkzGcbpMCrcAzxQeZIc0lNCk0zjMaU7zbjh8jWUO78QBIy0TpYU7bSdR6To1VmQ9okyWj0CIaqpcy%2BXuREJToPwYl7nWitVAHFvBH9FLTRGxw6lLo2QYdaXyD7eMcaHbAkGPyL15%2BEssE3tnjfpSgDBd%2BznDl1EtoOFk0aWA3BeXbCIsTUWyGOv6qusqhPPNPeN8CmUOBKwUxTT%2FNvyiN0nH8rXVuO%2F4XgsNNLnvJcSnBbrbPnVTQHiQOP7JX%2FiqqsVIQ8H38FnVuQPCroWlg21cOmqJJw41Tfp3CM4x2EXQrSpyau3zcz%2Fq7vXGRHrvqm9nHhBdA7FiER5EN5bTb404GeaPszwh98GFUtzsghp7Kn5irSdC3v5Ykfaf5yiIMmDlyBLuG3pGlaxk1UjwQTwz17VWw2Fkt%2FF4tOQbALzZ66rUkGsS9CPDsldSUmS%2BwX%2Bbuz9DZOkFMUZfCoFUx0wV7A7T1Aa%2BY5y5Wr5ltEeJbrTBvOQGFByZb8MrQAW00Zo2v1BnqNb1k%2BTMDKkSUlWElk8Op%2BAc4rMmwxj0YpbmUI4uZBusb7OSe03qZrUHTJj5iL4tRUHU7%2Ft8Ye%2FkVQyXkAkGva3d2i5ojz5fTx3ZOLTcIR6JZJ6hKSyL7LX6Y8TwyrWMJ6kksAGOqUB09j93HToPhUZEJWbBtrPzzruh0qXJBc02ko1o6Fmp0L7uCAxlLo%2BR5XHWYMG4Ir%2BECOW4Z2WLS23aac%2FrO0GLMGYxZ8qpc%2FrxrYBdgt9hHrU%2F8ICckEMjcoWSkFqVxyDge75ojJzEwV8hrwsLjcFEWej6G%2Fr%2BiHGbC%2FDeo%2B4ICUmG5VBwIr4l78SRr73HPHZs2zA2sWGPNcNkl1J9NYrv%2FVC2VYY&X-Amz-Signature=764e2a312b602bf72a300ba61005d940e6931c26e9abeacacdf7825ed37f338b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QFWDUMC%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIFa2Ymb17OUXVdIWkffJL1kmEot2tj2ROdS13YUDj%2FKTAiEAmN66bIsPC0%2BH8vjJb6zoUSQBSHrbJ8TPPk4fluV56TwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyzsObc9kkzGcbpMCrcAzxQeZIc0lNCk0zjMaU7zbjh8jWUO78QBIy0TpYU7bSdR6To1VmQ9okyWj0CIaqpcy%2BXuREJToPwYl7nWitVAHFvBH9FLTRGxw6lLo2QYdaXyD7eMcaHbAkGPyL15%2BEssE3tnjfpSgDBd%2BznDl1EtoOFk0aWA3BeXbCIsTUWyGOv6qusqhPPNPeN8CmUOBKwUxTT%2FNvyiN0nH8rXVuO%2F4XgsNNLnvJcSnBbrbPnVTQHiQOP7JX%2FiqqsVIQ8H38FnVuQPCroWlg21cOmqJJw41Tfp3CM4x2EXQrSpyau3zcz%2Fq7vXGRHrvqm9nHhBdA7FiER5EN5bTb404GeaPszwh98GFUtzsghp7Kn5irSdC3v5Ykfaf5yiIMmDlyBLuG3pGlaxk1UjwQTwz17VWw2Fkt%2FF4tOQbALzZ66rUkGsS9CPDsldSUmS%2BwX%2Bbuz9DZOkFMUZfCoFUx0wV7A7T1Aa%2BY5y5Wr5ltEeJbrTBvOQGFByZb8MrQAW00Zo2v1BnqNb1k%2BTMDKkSUlWElk8Op%2BAc4rMmwxj0YpbmUI4uZBusb7OSe03qZrUHTJj5iL4tRUHU7%2Ft8Ye%2FkVQyXkAkGva3d2i5ojz5fTx3ZOLTcIR6JZJ6hKSyL7LX6Y8TwyrWMJ6kksAGOqUB09j93HToPhUZEJWbBtrPzzruh0qXJBc02ko1o6Fmp0L7uCAxlLo%2BR5XHWYMG4Ir%2BECOW4Z2WLS23aac%2FrO0GLMGYxZ8qpc%2FrxrYBdgt9hHrU%2F8ICckEMjcoWSkFqVxyDge75ojJzEwV8hrwsLjcFEWej6G%2Fr%2BiHGbC%2FDeo%2B4ICUmG5VBwIr4l78SRr73HPHZs2zA2sWGPNcNkl1J9NYrv%2FVC2VYY&X-Amz-Signature=504d293e4d1da875d2309d367f864c605a73b356e397d65760f98d83d372a87d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633QZIBES%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQC0BMkFbxchmuTWKM4QUjIyg3TV%2B5y5xV99PJ1NiYp5rAIgT6xkfyZe9dSsLpNfrYte8khiuoS2HiI01v3LYyC5GYkqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBz7EmL%2BKlTtbdG%2FrircA99WC7zyweg8ZFEgc30VJC5%2BXQ3UCrU8sGA%2FJi4P%2BJ2fkSXKwOESfnBMyABYXxyl%2Fl4Uk3M1QxFOrwq9n2D8UZiEk2nKgRPw4nlGFlcZjih%2BFW38%2BD0CS1WeH2O%2BbgM%2BPAPNTjQFhFzXPx7nZVhX%2F2TggYj2tyL1sAEdJXuryTuxuj2yLaedNvRiJMFEgN1cIdyiN6YdPTaUo1%2F7QvtZwYp1XLXT8E1rkhFBCl4bjDq%2FIBWTLggGEH7K32hPFqJXdNZpLb0Vl2VOkpjDEEcYec7xLfDAPHftL2MlvkopL1zQBnBal4zS0TtLXJhrJnKCDZMEhIoliEsZXLQPu3FoPvgv1EcC3P5inW%2BV5bAw2diXrv%2FT1CufirukL8ieALUfrH1Oe2DGEGSHwJlq4csyZNH5o1fcYyJH2FvC6MXFI%2Fg%2BFwtk7HnUDvywrLJvmvO35%2FMGDgW4ezbsvbCZj1YN7XvNKuR1KzJUAfmvrb56mBGPVR1jU4hDcB2Mjcq9VmmCsUyf2IBqbr6LRHhEGreqNYLDBpLsXkfLOheoyeX%2BDiApGDsK5gWsu6ObTuJGVxjDACzplGlMfPmfYI52hpCUs47uzGB2bacKaqw18SuOhFVx6gPsec22lydxdCCWMNOjksAGOqUBMlkAFf1i%2FS%2FPF9Q3UuVB08O%2FNUYPOPGl16PyjOeFhuTfVJuy8GwnYMRWarDbKx2AbzAPG7DDHitPmdTPCLA0%2FPPWKcw9H3tC%2BfOnP%2FyGtzTp9YcCXTL3C%2F2Wpr%2BO1oIoI479Q5dcwIZev%2FUIsLl%2FVgfSUReG6u1UjG57mqY%2FZHVcJj%2FvJeaPc6BGmy7tVMNy5cfltskuDftIa9rw7bGdIG3cYiob&X-Amz-Signature=ede48f88cb013c4463b001505c669c8f4514cb9a0fb350c096df8f4c0c56c0f6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRRTKBXS%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQD7P%2BA1W1FdMio8XQUKgcP%2FGWQRoGLDwWCcW0Dgoh6CNAIhANBnKXkFd9Z0M2dAbdqMmOhV9vTMf0Fd6eLrQaSmhq7oKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCmFF%2BnCieixEEcbsq3ANyA3Cx5raJCgT6kTa%2BrPgl5EXqGck%2BxywnCkbpgWdfnIqpYLcN8tHwcFIIfH1GznsHyC5Vqexdom3z2EnVOPptvlxXsa0uTgMpqdTp1rYnPqbyFb08udiqmuDj%2BgKMIqewp2z4jf%2BT6E9bf4RGHnJ1WJQAtki%2FqdBGuHcjtelMJVqHsmhMpotIj7vRg56TG96S%2BOTl36wvWH4aSlWWuQt%2BKVY6fjTp6O4LjXsiiPCwFoAdQuHiTvLNUEge7e%2FSHa%2FE%2BAbdCdY6V7C4OXlLsEVFoKZWfrceIl9hm45m6rwQrCuiIn8OdbrWlEto1QrHyzFL%2F8NKcrN0rTDSB18uCl7VzUQqXVpvfhdSnaymeJu6XUbLCbe%2FQmlluxEhng2qNwTMDIS2SealYHwxQrtmNc9wMpZ4fDxSfbzjDp7eASAFmRuWS4t3fyNS9jKPJaoXs6DEuDvCaCdY3tNn8KrI%2BcpWANp1740lo1KBM6OyIO7mnGmDykpwZ3URSAqmuJAYF54N262ngm4cBiHFpgNOuzU7cc76y%2F0re7WzqW0I6nsxUhaL4ZDXsES6FVo%2Fp%2BfBDJExFNFUFyeBX8IYrLsnHZcWEwZQJo3euEIXrYCwsVf8N4CBVcTcrmoqkS0wOTDTo5LABjqkAanL47mUF%2Fc%2F2KViUrutSgkNwNsgXbw9HdIYmZHHzhApZJ4iAbH3atWPwOCjN3roelXoteGhk29BIORJzMcyRUGp65qoRz0jvfzCY%2BgRpU%2BSGbrYRWm1YWYycbNxcnm%2FrFIf3cyQAfD1Ne98ksYgcFwq9tgZJE41EKI0BhRO6Pod6FoFvSn4TL6wCHSj0tj72jMQPE%2FjZQgrBZJ4%2FrV3qJeGi3Tq&X-Amz-Signature=6db2bc82bc0017a6dd652af9cf091f455eea4b99d05cf996ad8b5be573c59edf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QFWDUMC%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIFa2Ymb17OUXVdIWkffJL1kmEot2tj2ROdS13YUDj%2FKTAiEAmN66bIsPC0%2BH8vjJb6zoUSQBSHrbJ8TPPk4fluV56TwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyzsObc9kkzGcbpMCrcAzxQeZIc0lNCk0zjMaU7zbjh8jWUO78QBIy0TpYU7bSdR6To1VmQ9okyWj0CIaqpcy%2BXuREJToPwYl7nWitVAHFvBH9FLTRGxw6lLo2QYdaXyD7eMcaHbAkGPyL15%2BEssE3tnjfpSgDBd%2BznDl1EtoOFk0aWA3BeXbCIsTUWyGOv6qusqhPPNPeN8CmUOBKwUxTT%2FNvyiN0nH8rXVuO%2F4XgsNNLnvJcSnBbrbPnVTQHiQOP7JX%2FiqqsVIQ8H38FnVuQPCroWlg21cOmqJJw41Tfp3CM4x2EXQrSpyau3zcz%2Fq7vXGRHrvqm9nHhBdA7FiER5EN5bTb404GeaPszwh98GFUtzsghp7Kn5irSdC3v5Ykfaf5yiIMmDlyBLuG3pGlaxk1UjwQTwz17VWw2Fkt%2FF4tOQbALzZ66rUkGsS9CPDsldSUmS%2BwX%2Bbuz9DZOkFMUZfCoFUx0wV7A7T1Aa%2BY5y5Wr5ltEeJbrTBvOQGFByZb8MrQAW00Zo2v1BnqNb1k%2BTMDKkSUlWElk8Op%2BAc4rMmwxj0YpbmUI4uZBusb7OSe03qZrUHTJj5iL4tRUHU7%2Ft8Ye%2FkVQyXkAkGva3d2i5ojz5fTx3ZOLTcIR6JZJ6hKSyL7LX6Y8TwyrWMJ6kksAGOqUB09j93HToPhUZEJWbBtrPzzruh0qXJBc02ko1o6Fmp0L7uCAxlLo%2BR5XHWYMG4Ir%2BECOW4Z2WLS23aac%2FrO0GLMGYxZ8qpc%2FrxrYBdgt9hHrU%2F8ICckEMjcoWSkFqVxyDge75ojJzEwV8hrwsLjcFEWej6G%2Fr%2BiHGbC%2FDeo%2B4ICUmG5VBwIr4l78SRr73HPHZs2zA2sWGPNcNkl1J9NYrv%2FVC2VYY&X-Amz-Signature=fa3794a3ffc54f9d3963afa5b7aba9b6306199c75ab9cca580a5434dd9438f70&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
