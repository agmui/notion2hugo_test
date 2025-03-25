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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKCCKYQU%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChhzKgX1l2iaGPO1sJA7WXD1AwNjCDSmyJBlD7Z1JKEQIgdv7T1Yffv3mLn9m9IJV8%2FQATEdqPrM1xkF0VG8DeFBYq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDcXm5yRGcLia%2B9VCircA0CmLxf6J6VazJ78f4VsuCM%2BxM9ARz6EDE0HuZSoqrhAEOvoN3VrDQyiMzQ3E2pTKMlRjUIXDb2pXmDL1mfDcKVvqlYOAPiKOsh1b4Xpr5w4q5355s1sEdiV%2FC81bp2AicoTF6NmlxkOptKKOC3XK01VP6THiZcy9Undh%2F0h%2BHvrOTvusRYYIihXv%2BQU%2F9uCBtIMEfaN3iMKZUuAeUtTVwptOB6Pslnok960khFrSMAfYC3WX6c9qNghACvIQ%2BoQRYgQvc77cIrIK7NOoa9UX%2BUZuRLpo9DUAbLmi7cz28qEmM7jXnxqddv6s4K8CkdmfeVeAFwN5llOSh8WTjS%2BQMjGYwIPAaiv0aAVD056izO2Nk6LN%2FHD3YKy2ojiXIkPZkVGGYvXePhROYF%2FWfl9Hl25sTPVpv%2B4sxY9VWWOed9XPxEiOytzx5oRbb94NCDNaidbcvjd6YoCiY8i2OkYdFl9KlZibxriPwv%2B8XehYdgz38IFOq0EcOK6OLdhN4RKCjRO%2BI3NUhSatSrXUHJBA%2FkEr1Y4KnXPPWQ57FA4RIHTkDer9dIsnMur%2F%2FnNfFTBttIpn07QLh7zPYtH57ge8sDkk%2BUcgyO40MJbgKeOw3ic6uhgcTJJSASu1WKaMJ3ji78GOqUBhsvVCLy0E59auPnxNtiQszoW3FA2gAqnJ129vDcjDYMqjXsxPfVsEcF1Hwv3U0SxZIj1wsVyXiWnURuqBrheJGlIcLzxQCEK8n5B9coOg9KJoZvuPL%2BZkRB5eDscb8UFBDOl4yFpIr8TAKMlrQPfje%2BTpyKj67Tvz8ddGM1QGdvC8EVdsLAAJjJ9AMh6aV%2B08awmaRuzwCafkLBMvHko9xdgQsbp&X-Amz-Signature=a6d065b00c1571b8dd185779f951653630a23becc4dd2eed50c39a1ec318ae9e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKCCKYQU%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChhzKgX1l2iaGPO1sJA7WXD1AwNjCDSmyJBlD7Z1JKEQIgdv7T1Yffv3mLn9m9IJV8%2FQATEdqPrM1xkF0VG8DeFBYq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDcXm5yRGcLia%2B9VCircA0CmLxf6J6VazJ78f4VsuCM%2BxM9ARz6EDE0HuZSoqrhAEOvoN3VrDQyiMzQ3E2pTKMlRjUIXDb2pXmDL1mfDcKVvqlYOAPiKOsh1b4Xpr5w4q5355s1sEdiV%2FC81bp2AicoTF6NmlxkOptKKOC3XK01VP6THiZcy9Undh%2F0h%2BHvrOTvusRYYIihXv%2BQU%2F9uCBtIMEfaN3iMKZUuAeUtTVwptOB6Pslnok960khFrSMAfYC3WX6c9qNghACvIQ%2BoQRYgQvc77cIrIK7NOoa9UX%2BUZuRLpo9DUAbLmi7cz28qEmM7jXnxqddv6s4K8CkdmfeVeAFwN5llOSh8WTjS%2BQMjGYwIPAaiv0aAVD056izO2Nk6LN%2FHD3YKy2ojiXIkPZkVGGYvXePhROYF%2FWfl9Hl25sTPVpv%2B4sxY9VWWOed9XPxEiOytzx5oRbb94NCDNaidbcvjd6YoCiY8i2OkYdFl9KlZibxriPwv%2B8XehYdgz38IFOq0EcOK6OLdhN4RKCjRO%2BI3NUhSatSrXUHJBA%2FkEr1Y4KnXPPWQ57FA4RIHTkDer9dIsnMur%2F%2FnNfFTBttIpn07QLh7zPYtH57ge8sDkk%2BUcgyO40MJbgKeOw3ic6uhgcTJJSASu1WKaMJ3ji78GOqUBhsvVCLy0E59auPnxNtiQszoW3FA2gAqnJ129vDcjDYMqjXsxPfVsEcF1Hwv3U0SxZIj1wsVyXiWnURuqBrheJGlIcLzxQCEK8n5B9coOg9KJoZvuPL%2BZkRB5eDscb8UFBDOl4yFpIr8TAKMlrQPfje%2BTpyKj67Tvz8ddGM1QGdvC8EVdsLAAJjJ9AMh6aV%2B08awmaRuzwCafkLBMvHko9xdgQsbp&X-Amz-Signature=d727b47cb754bc835457391d5914b806d192c370701add65884d15e6464ea941&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGXRYG6M%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtbXwzUbTLXmmJ4W9zojrh0Uj0XQbEk0JaAnhkr5mJaAIgI3FQYvVbMG6T7p2B0dsVI6f1g%2F3oJRvYh5GaExCBdNkq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDPZUCAVTVE5WwENqsCrcAxIWv4DoBzEoyB%2Fn8u%2Fx3wk3AMaUIq2zbGH3Z%2FGXphJmVdr0OzYC70NktK5PHHHubI53i7yrt1Zekf%2BnETo2zQr2VO2j%2Fujo2ofwNvYFWHoTEZpirTlTXYRMqa3oYZsI5lqsGleY7v21KizbTJoywfldTnKkhhEFHMSbsJQWvkdpNMCRozkJQoqLWh8BHkUta1ebwGiumOfZS%2BLhZwA%2FB08EyeC8Cw%2FiXmKKGrlKGkDI%2BVOhUhesJEUqTaF86PUOzhs2raats5wDtXH5Ze2rfYNwKWO3B93KU35HZm%2FzrV7L8qBa0HCzZ%2BqzuP08BSB1XpLTGVGszVFMRc0Bs50X9wzzDvdoTGTr6Uqiu4fjr8oDCkTWPwX%2F9LiShqFKShTDDfkVg%2FuxYOL9qBaagDqr3nPS3Fa%2B5PlllA%2B293UkNKEyWB4EoKUJdvxHaPZOPUYeo8RmrEc%2BaqS5ua782Q1MU6iAx4Q8Pfwg1qh9CIJRJWwmmQ8ya98qKw%2BfR94ve8rDYaqCqaAIqqPqIi4cGkd8dFe8%2F3x%2Bu3chSd%2BxiAbCnTP8qvT7XPQ5LwPjlDOmrcKfioQ40cCIQEGPusevTFx%2BiDwji%2F%2BR7LDS5Jgk2QTnt4XMpBKRui8yHDQp%2Fe6yMPvji78GOqUBp8PEMu4QD6f%2BYccdw5w9rpP6KOENT3AKBkD9oca1Ca4PU2iufSjBzNSIA0tIeMRGuWp5BxVMjMt6SIJI%2BPgQd6Ws4wsk9pmwvgULXoZ81rD8pTwUtlmNiF6F6q%2Bi4C2Ql4pyJtJV8QR2EGnOmOgMxVgqlnG5dom8uqL9WKEIQLiM%2B1OW0TUAFsKgrSdmJo67R00679l0YlU2JhBjGceFGuS6acIS&X-Amz-Signature=a5164e216687f5ee4ca8ee0fdf4e7a9de5b526b94acb2083516bad84c5b21df5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUDQGSKJ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpkwACkcTiqkbHR8SyudSZvg1VJRLCqqESBkgRn7pXlwIgSQ55avgFOkdGTPXoKhlnECednyBHVNktUXo5JWXXhZcq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDPfYZxUuXarcN2ADqyrcA5w%2FsLNyKllrRK76pJp%2BYXiu85kFGBcnw1ILtTKAQZMAykgP6DAjNWzllAEdrhpJ%2B9Fan6hW%2B2X%2BRn0RzvFDAcucxj7c4%2BB7CDTBziipKwRgLtSS%2FM3iNzYci5wtBweef4%2B%2BdnF8OrJyoXlORsT4ldz13%2BFXlkvUH8SyBmZD5o%2BHWHRBA0C9Hb1XfaCK4GR3sUIvGtDBSFozueWVn3g1KJRSvC5tXJylaK0Qp9CidRBfNhHGwFbfZIeKCDWh20fTxOfsL9b5RVaYGJNyZe8N7Oc1RLYKZyJ%2FizdY%2FbGuEF3y0ynMRjMR5KYJ1wgZ823g6dFgMvYRimUK4IjGuQ6rzgfih8Z8sbYkiW3k5ymTpqLoBD7gpCD3OpwcKMzOmLS37SZ8TMmw9aJRZbYLiwtH1hsuShFApvw7mw7nMR6hM0fl9AGmqMjPDzICBiGkjp6OnP0OdkbatLY%2FTQDsbjzdbvUeNZEjSVwbjXdNTNA%2Btl3%2BeXLaYUDlnxDVKA53hVDg0pfCWfUNG1nC1%2FDhX34jDNjyvNrXqZzvd2TIrxoqmiAccVFWqKHogim%2Fk8vZYyU8iJwQViaNfHcvkoKzpOMjCsnd3WlM%2FF2TndEEgEkUzF9w%2Bowh4%2FHVCdJSoXdQMLTji78GOqUBXUxtldZqCuCU4E5fzk3lNimk8xKnUoU%2BqrKzANfAf3%2BHM%2BSEIWxg2bOWRitdINxXDrP0QGrDIZWSH3PSH61j3VXf2TkzpoXw%2FYGHgJEW1BIduz21hI339q%2BJmvPBfm25WY9s%2BXZP%2BvC6CvUJlMOQGRA2nBcpl%2FcqyOfLyyGanJNdUv%2B6vWjotZBmPPu49bLDc5tj3HF8HMEh4OhMYz1UQQQoSVly&X-Amz-Signature=2ba3dabf081215a98c302617ed551e5ec994021fd6542c21d7a372b15dabdfbd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKCCKYQU%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChhzKgX1l2iaGPO1sJA7WXD1AwNjCDSmyJBlD7Z1JKEQIgdv7T1Yffv3mLn9m9IJV8%2FQATEdqPrM1xkF0VG8DeFBYq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDcXm5yRGcLia%2B9VCircA0CmLxf6J6VazJ78f4VsuCM%2BxM9ARz6EDE0HuZSoqrhAEOvoN3VrDQyiMzQ3E2pTKMlRjUIXDb2pXmDL1mfDcKVvqlYOAPiKOsh1b4Xpr5w4q5355s1sEdiV%2FC81bp2AicoTF6NmlxkOptKKOC3XK01VP6THiZcy9Undh%2F0h%2BHvrOTvusRYYIihXv%2BQU%2F9uCBtIMEfaN3iMKZUuAeUtTVwptOB6Pslnok960khFrSMAfYC3WX6c9qNghACvIQ%2BoQRYgQvc77cIrIK7NOoa9UX%2BUZuRLpo9DUAbLmi7cz28qEmM7jXnxqddv6s4K8CkdmfeVeAFwN5llOSh8WTjS%2BQMjGYwIPAaiv0aAVD056izO2Nk6LN%2FHD3YKy2ojiXIkPZkVGGYvXePhROYF%2FWfl9Hl25sTPVpv%2B4sxY9VWWOed9XPxEiOytzx5oRbb94NCDNaidbcvjd6YoCiY8i2OkYdFl9KlZibxriPwv%2B8XehYdgz38IFOq0EcOK6OLdhN4RKCjRO%2BI3NUhSatSrXUHJBA%2FkEr1Y4KnXPPWQ57FA4RIHTkDer9dIsnMur%2F%2FnNfFTBttIpn07QLh7zPYtH57ge8sDkk%2BUcgyO40MJbgKeOw3ic6uhgcTJJSASu1WKaMJ3ji78GOqUBhsvVCLy0E59auPnxNtiQszoW3FA2gAqnJ129vDcjDYMqjXsxPfVsEcF1Hwv3U0SxZIj1wsVyXiWnURuqBrheJGlIcLzxQCEK8n5B9coOg9KJoZvuPL%2BZkRB5eDscb8UFBDOl4yFpIr8TAKMlrQPfje%2BTpyKj67Tvz8ddGM1QGdvC8EVdsLAAJjJ9AMh6aV%2B08awmaRuzwCafkLBMvHko9xdgQsbp&X-Amz-Signature=424932756f3199479ce316e1c56bc049a675147176bf0df574480b32e96dae23&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
