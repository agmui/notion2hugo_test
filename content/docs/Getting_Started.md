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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XENZ7QS7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFR88aGo3vYGbvZ6EVysUVeHVLGhclbGINLMDxubaNy3AiEAyYBnNZMmRvGvBGoePw3s20pwbBcz7V36s5xhh6ZrtvQqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLj%2FVKeOY%2BWumfZUCrcA8%2BsFI1%2BVh0eXbh1su2AbdjqFhTUEQyP7jJkNZy%2BuPtko2Wm36Efjb6dUv4lrV946XmXddTfrwHBcU%2BddZcAObgzNTurO2PpeEWbqiR3nxHqDPip1kS%2B9IgES5i25Mxrn2%2Bv68RHeW%2BUWWqkGEPKQtGHTnNG7%2FaxifJP%2FwxqM65Xup2vGl7jYrLzTyg%2BgCqGn9re5lWceV4lxcTt6A47aP%2BLpGRNDTpOrpc5Klqn%2B300fHssPPFLNSdBGJK3awPGzj%2FV1%2FYhNHoylWfkzo9SXfx8lEcB%2F2QDYrB4FIfOU7r2azc%2F9wqjA7df3Uo7v0W9T7RiC9PdBNBV0Htw3G5VMaBP6EWXWNioXXWUCJKFZFnqZVH03HkXiqXHhvwvLpYG2Wpyo3g8FwOsNtTR00w3A1NlJ9rb1wIfXzsTRgyPls6RKw4S8k0dzdOOXHFJw3cr8Qw%2FtaMGmTRPclchyS29Sam9y91LZSanSeICWIduKVNiOelyCDNIBPTTceO0lI9ykB1H1ox8IsXAR9b5%2BqhpBhA3nzhwZUfdSx89324dEATPOQ2LqGmFZ0c7rBuL5nU9W8elE0nj7WM6ueHYGaXZpm%2Bj2OdpS4%2Bm1U2bebFBJN9tXd06LiOX30g7nwcnMOL%2Bhb8GOqUBp7p%2BSCFfS64HShhju9kBViPdRWLDDHWHFrAVpA5ARauSJA1qrVxvERVB00JIG8IHN0OqL4mYBhmeX89YvNyu8hyD6m6G%2F9ndFhN8w6dCiJGzjImvQmBoomCQAKnlIw92o12pWbSPUvOHVmRabHSDZH40P8rXedPOieJBEM%2BFVAuya2zrSf6vw9tm65vsqGDwDpXNa5aNi%2FjxoHs6fuC3tlHsWBK8&X-Amz-Signature=446c39913d376aae0c20833d905493efec3fe1a6ab2f2b772029c1e2c8e90bee&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XENZ7QS7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFR88aGo3vYGbvZ6EVysUVeHVLGhclbGINLMDxubaNy3AiEAyYBnNZMmRvGvBGoePw3s20pwbBcz7V36s5xhh6ZrtvQqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLj%2FVKeOY%2BWumfZUCrcA8%2BsFI1%2BVh0eXbh1su2AbdjqFhTUEQyP7jJkNZy%2BuPtko2Wm36Efjb6dUv4lrV946XmXddTfrwHBcU%2BddZcAObgzNTurO2PpeEWbqiR3nxHqDPip1kS%2B9IgES5i25Mxrn2%2Bv68RHeW%2BUWWqkGEPKQtGHTnNG7%2FaxifJP%2FwxqM65Xup2vGl7jYrLzTyg%2BgCqGn9re5lWceV4lxcTt6A47aP%2BLpGRNDTpOrpc5Klqn%2B300fHssPPFLNSdBGJK3awPGzj%2FV1%2FYhNHoylWfkzo9SXfx8lEcB%2F2QDYrB4FIfOU7r2azc%2F9wqjA7df3Uo7v0W9T7RiC9PdBNBV0Htw3G5VMaBP6EWXWNioXXWUCJKFZFnqZVH03HkXiqXHhvwvLpYG2Wpyo3g8FwOsNtTR00w3A1NlJ9rb1wIfXzsTRgyPls6RKw4S8k0dzdOOXHFJw3cr8Qw%2FtaMGmTRPclchyS29Sam9y91LZSanSeICWIduKVNiOelyCDNIBPTTceO0lI9ykB1H1ox8IsXAR9b5%2BqhpBhA3nzhwZUfdSx89324dEATPOQ2LqGmFZ0c7rBuL5nU9W8elE0nj7WM6ueHYGaXZpm%2Bj2OdpS4%2Bm1U2bebFBJN9tXd06LiOX30g7nwcnMOL%2Bhb8GOqUBp7p%2BSCFfS64HShhju9kBViPdRWLDDHWHFrAVpA5ARauSJA1qrVxvERVB00JIG8IHN0OqL4mYBhmeX89YvNyu8hyD6m6G%2F9ndFhN8w6dCiJGzjImvQmBoomCQAKnlIw92o12pWbSPUvOHVmRabHSDZH40P8rXedPOieJBEM%2BFVAuya2zrSf6vw9tm65vsqGDwDpXNa5aNi%2FjxoHs6fuC3tlHsWBK8&X-Amz-Signature=c2dfcb27d04442b35e02d3b47122e1914f6e9ae959f4e4eaa247c7a990e51d05&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH5NLO7R%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC32E6CzoyIrwRahaZrdS0wktdIfO%2B40q5bqVpOJ3VvsgIgRQX5io1IqSo9jNSridoH9IiuiMGQ3kOH7X9fLtLHSdcqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCEdhqQD8Kdesjd9SrcAwN4YIpxWtkKMbjOT6CLsPPyCb1qTbtTtaRE3WNH7Axan9eHAqhXJ2i4rYiC0ULI0KlOoJODKyw5TbinV0IKUpHCh1gQsspOPHf0O0gh%2F50uKthGtSVNx%2FoTTHw1aexa44zHHqmE20k5psCG9n9RRXbUFqdqsFLdQ80ydjiPA2%2BphDrepWfkFwYpPjQkdIR7FPj%2B1f5bUGeMgaVp9W48didap1iQezmrrsqad68%2F%2BsufiHOQVuqL7a3s5W7aK6FwQxR20iTwDpek6iUeSJQR6aPPVYFAUiFr6VDZgZh649u4LChauvCUaDxiFQf9YXXm1lUwGibogukLxJ0ESAA0BOf8VoSsXa6nsVuz3dipuezPrxCyhGXkBmW13Qv983ShHawx9BhMRgQcpN%2BBBQhPxH7Q68pwV4cjocEXTor3mFQpMHeaHwAoH4xP1lxhG6aD491NyXBG9M1M4QdihlHhnWe01qaleUqX6Dk8fIcMIGgCctjl4ycV0j8BdSi%2B3hZiNMS%2B7nKazc17zDGylQP7hn%2B1ygXf%2FlYQ7RKAjHBojNoqNYWHuoLsy4XznYw%2BV7EI0Snw%2FbMTzA%2Fd2cI1T3HGnDboCH4wzjb4fQUfweE7xBY61H4DZGR%2BKTpeV8BDMIj%2Bhb8GOqUBOxYt7h5qml6sclqOHhO6Vv3gd18K0i8WBT3iBD636aBqnXUKp03RzoePVV9u8cQM05iNq7%2Fvags7foFhw7nXkb9pu7E%2FouV8XMQZYJcgRTysaqIDYQFAbv%2F1U6cYQwR0Zrt5994QsJ6%2FQ9YCmmXaXhU%2BHDoSvgjCiSCMSfC%2B7R327eFaJTWAuTMTjKMveijBikiVRDHIE%2BR%2BZNNoDBqyCA%2BMwMAV&X-Amz-Signature=f093b9280ee377dfc6e5d8ddae161a39b8e6693b24bd88180665d8b6c676e6c3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H4EF5IV%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBudnG2KyDpdc6K89RXIJJagGK0QGFGa19yeTq3ygVoAiEAloOFff3GE2ZU74QB92F%2BrEz35q%2Fao2sw7eQixoeh72gqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCU3hZbxkl3gVVrOYSrcA2BHYe88mxMxRy%2BoRlXuAXMmZ8xChyjNSt6Lp3hBVEb96EdjdA33%2Fj3M7IFdxVEsSWH95ZbfGEJfYTv7G3LwxeXfdmGsfSabM4Jl4Ns2Wbg7T%2B1b3PU%2Fy9d75EhlRpRMPayARJa%2FVm6yLkVkkqiEd0mCUm5Ij%2FGk54o68yVcYK7mew%2F2y%2FH0vtu1KzCUU7jxYFV%2B0xaKKNsn6CCaOhesctZmN2sBztVHQ3KHtJjrGFZUysxUi7p1%2BCZzDNs0fQV2%2BezeuGGk6%2BC8%2BkNthxPGj6vRXWDUppQVns3FiZcAC%2FbQOE%2F49VbZLX%2Fetk2LtXh7j46Bsr8mjA%2Fn%2F4b8yEV%2FenDFglXGbQ4KSXxd%2BO%2Bo4oIhs974ZWVwrA20MsEtfCATVnohzkwPLqlRKKGihHqFRwaxZYWhMdTYXCG%2FlRsUGX2d6xONvXtnAP3X4v97I4EAJ1BUnJMntSjyBgPEsuk35LRrgrAPGr3lBlU8nU%2FX4lG4c8%2BPw0HKWmPldsGICbN1BrBgHgp7e3io5Iad%2B9Rh9eq%2FIpxI2OqxXEqpuWNr%2Fa8oujmvb5NB4kZLOl%2BKkPFgDV%2FcgaHdR6A5%2BfzsQV9fj3ZBV53ideSmueEM5gkxqJcqj05Kv3MyBpq9%2FNlbMNX9hb8GOqUBXHTUMhhfD%2B72GXmFFkCoQINmPvP5oafGitD6WHp5g1sA0NLC7bncMgof8GkZfwhw%2B3gHcqFSXqI%2F%2B1Id1c973zZdWMOmG9YcxFZoicRTUFNfhdFxNesvDOaiJeheW5GC9HQZuQP1iNaG8QW%2BT3ZniJfLo9AJ8pydVp7lIb5PdqDJTARHlkYXpJiGRoE2qxoSKjQniFVd32RiHeCy85FzcJ%2F34hND&X-Amz-Signature=ff7b86e41e5bd92a29a5359e99ab0d06ffd1e80d0b05433b1e5e1b35f039ce2d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XENZ7QS7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFR88aGo3vYGbvZ6EVysUVeHVLGhclbGINLMDxubaNy3AiEAyYBnNZMmRvGvBGoePw3s20pwbBcz7V36s5xhh6ZrtvQqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLj%2FVKeOY%2BWumfZUCrcA8%2BsFI1%2BVh0eXbh1su2AbdjqFhTUEQyP7jJkNZy%2BuPtko2Wm36Efjb6dUv4lrV946XmXddTfrwHBcU%2BddZcAObgzNTurO2PpeEWbqiR3nxHqDPip1kS%2B9IgES5i25Mxrn2%2Bv68RHeW%2BUWWqkGEPKQtGHTnNG7%2FaxifJP%2FwxqM65Xup2vGl7jYrLzTyg%2BgCqGn9re5lWceV4lxcTt6A47aP%2BLpGRNDTpOrpc5Klqn%2B300fHssPPFLNSdBGJK3awPGzj%2FV1%2FYhNHoylWfkzo9SXfx8lEcB%2F2QDYrB4FIfOU7r2azc%2F9wqjA7df3Uo7v0W9T7RiC9PdBNBV0Htw3G5VMaBP6EWXWNioXXWUCJKFZFnqZVH03HkXiqXHhvwvLpYG2Wpyo3g8FwOsNtTR00w3A1NlJ9rb1wIfXzsTRgyPls6RKw4S8k0dzdOOXHFJw3cr8Qw%2FtaMGmTRPclchyS29Sam9y91LZSanSeICWIduKVNiOelyCDNIBPTTceO0lI9ykB1H1ox8IsXAR9b5%2BqhpBhA3nzhwZUfdSx89324dEATPOQ2LqGmFZ0c7rBuL5nU9W8elE0nj7WM6ueHYGaXZpm%2Bj2OdpS4%2Bm1U2bebFBJN9tXd06LiOX30g7nwcnMOL%2Bhb8GOqUBp7p%2BSCFfS64HShhju9kBViPdRWLDDHWHFrAVpA5ARauSJA1qrVxvERVB00JIG8IHN0OqL4mYBhmeX89YvNyu8hyD6m6G%2F9ndFhN8w6dCiJGzjImvQmBoomCQAKnlIw92o12pWbSPUvOHVmRabHSDZH40P8rXedPOieJBEM%2BFVAuya2zrSf6vw9tm65vsqGDwDpXNa5aNi%2FjxoHs6fuC3tlHsWBK8&X-Amz-Signature=a0ff854cbe41b044b8673ee6002a48d65b56cba00f1ce91666fb0a2443cfaf97&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
