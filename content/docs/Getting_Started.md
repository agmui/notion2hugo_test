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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642CWZOH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVli9N8ZpEPbHwm5WR31x7fn1pAmwnc2ZRfFrIpR%2BLSQIhAMtPrQC7aX080rHse5t%2BmK%2Bro0De5rbf%2F%2Fb1F5YC%2Bk8DKv8DCC4QABoMNjM3NDIzMTgzODA1IgzSMkWzY2vMk%2Bn9cAkq3AP%2FqyxzzOby0vAaAF%2BHQdEvUPeh6cKxYtt2uwB5Y61ElnJetE0eBybM5VWRoN%2F2S9pmpYu70dgRt8TwVyvl2G6bfDE7urWIWT%2BUKkOMR7RbhNGnyJtgfER5edzza%2FTpdmYi1PmaH2Spv7WLD9u4rTG8VGoTjFaPD3RckC2Yub%2FJzhyiCahfikKUqWgY%2B%2FrZtzgjbgCaVufFUPcTScRAi642qnznJ%2FZPrvnR6jVHhAkOIX%2FEHZMzW8xV5mVGsryZIan0octSgd9tVsPgiF%2F6ih3hcPVla%2BdZlb9plcLp5X6ST2rw8OSa92QpkVGJj4ILsck4HdxS5VtY7uFGdFw7IqmugHOSrLSFNGX2%2FEVR2WOkS6Ex20BZBDvDFTj1RJXxRwGIVVZ%2BWAlCdjl0fYrMeL6kWaNEapIwgHgrCl57RFgp08Z3z16wSLC2w1Uew3NtGWa2Fe16%2BKzba4wH8sVvxwQaaFh%2B5l4RbWVr0WUqBUycmFmb18ZsFx%2FWxd8Ho6My1xF3GWpDiNPs71yqxxQD9zWRtV6KOSSlrO80qLmT1E7gaZx480u4mNhPH%2BmpTNa6HxUqh0tuf2VQ232XyZV7%2BpCldcpnL0yZMFKdfXOc5jqTS55Lh%2B6wOJeDGNE2CTCSpvm%2FBjqkASAToSnCNszpwnxf2w9w36%2BtI5LKgr1NgCSF7DfKGyPHWT11qKoZcMSUdjluk1pS5bvHRHKfMQC4CbRajUBqlTxdFiP0EXEeVcdDTMiYrnGBA9wWK%2FPs0IHTiaCQXHVI7AAf0dQNfLXHQIXuOyf1MqTayS7a9sKiTaX90LRNgYfBocIqnE75A0gynigV8EbdaIP4KRXDfeiuvYP88gbgzQmroweE&X-Amz-Signature=df06f84e7f135c635311c4e1396fdaac32afbf84013c8119f8552c4e015c9daf&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642CWZOH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVli9N8ZpEPbHwm5WR31x7fn1pAmwnc2ZRfFrIpR%2BLSQIhAMtPrQC7aX080rHse5t%2BmK%2Bro0De5rbf%2F%2Fb1F5YC%2Bk8DKv8DCC4QABoMNjM3NDIzMTgzODA1IgzSMkWzY2vMk%2Bn9cAkq3AP%2FqyxzzOby0vAaAF%2BHQdEvUPeh6cKxYtt2uwB5Y61ElnJetE0eBybM5VWRoN%2F2S9pmpYu70dgRt8TwVyvl2G6bfDE7urWIWT%2BUKkOMR7RbhNGnyJtgfER5edzza%2FTpdmYi1PmaH2Spv7WLD9u4rTG8VGoTjFaPD3RckC2Yub%2FJzhyiCahfikKUqWgY%2B%2FrZtzgjbgCaVufFUPcTScRAi642qnznJ%2FZPrvnR6jVHhAkOIX%2FEHZMzW8xV5mVGsryZIan0octSgd9tVsPgiF%2F6ih3hcPVla%2BdZlb9plcLp5X6ST2rw8OSa92QpkVGJj4ILsck4HdxS5VtY7uFGdFw7IqmugHOSrLSFNGX2%2FEVR2WOkS6Ex20BZBDvDFTj1RJXxRwGIVVZ%2BWAlCdjl0fYrMeL6kWaNEapIwgHgrCl57RFgp08Z3z16wSLC2w1Uew3NtGWa2Fe16%2BKzba4wH8sVvxwQaaFh%2B5l4RbWVr0WUqBUycmFmb18ZsFx%2FWxd8Ho6My1xF3GWpDiNPs71yqxxQD9zWRtV6KOSSlrO80qLmT1E7gaZx480u4mNhPH%2BmpTNa6HxUqh0tuf2VQ232XyZV7%2BpCldcpnL0yZMFKdfXOc5jqTS55Lh%2B6wOJeDGNE2CTCSpvm%2FBjqkASAToSnCNszpwnxf2w9w36%2BtI5LKgr1NgCSF7DfKGyPHWT11qKoZcMSUdjluk1pS5bvHRHKfMQC4CbRajUBqlTxdFiP0EXEeVcdDTMiYrnGBA9wWK%2FPs0IHTiaCQXHVI7AAf0dQNfLXHQIXuOyf1MqTayS7a9sKiTaX90LRNgYfBocIqnE75A0gynigV8EbdaIP4KRXDfeiuvYP88gbgzQmroweE&X-Amz-Signature=1c379ce7170cf15238322ac07759957bdee223fd93b3b90eca0aa0d50e66a2cd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IHZKQZT%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTNgBHJUWLAPnvg803s5wcfkMfBcr7QCTz21stD14R%2BAiEA4itO%2FwHA8XTigYflkSDRZi9PQQ%2FgfZkbiIbmSaNgY1Eq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLHIe78Nq0skem90OSrcA84uesgeKLsbi%2BEmUvNMm3NOHvJXUnW7FdiOGTap8FsSlNZTRe8KaJWCyCaOnwf25VDc0dXV0NGUQs0aXO%2Fe4H599WFCLrJbLo6Xi7Xyzh7BFkWeq3mE2W4A3yGSIhHoVRfuEOaNlbtWrPhXf7SZeCBKl0Tjwnl5odT3awUyxpxxGCKcHrRhNcYuX0YrdLuiKrEpqT8D1o2C1KkqWjwfemJ%2FQiM15ph4sU8GgYERt3YSFDP%2Bdc7XSUYw1UFf%2Bp49lbissSRXPToW3dY3YP7wPgGyAMmjQl7qgvW7MORVqBobjtl1DZ7654mRQ3NPhq89XHMmuTQKqwXniSCclM7g4IcMSt4fcKfM3Uu04nvS8HiWt1JBo8Dolz9diKH1yqftt289dEo8aCMdSAngF8huiWndVTfg0B4Z%2FoURH4P03iMbixtqUnLDjpwXIpPznRXOwThaLTqh4kxi3STQbSl3t%2FK8nAatrE3Fc8cgm9NR99HuDlFyOCn5d6Rv1N6T5XMeX1RK4asUjwWfziGsTCp431q8I3IufhGhbojlG0qRFTIKGH82EXh6IMV%2FBluTS3TKjm3L9bsTlmbfXZbXT9KMGyWBoyi0blUOLTRVJazT3eyidwqxFyo0BkxgYDMKMICm%2Bb8GOqUB2Tc21BeFjvOGSygtpRIa5SuRQjgu4WBIqOnVgrS%2FaS4uJ1S6r%2FxqsatE%2BpKI%2BrpTFt50OOLq8A3mjUL3NApil1PTraVn58r0cKIqUYVBCB0LqkPHTu8xxG5EdNR5iah3tETVjVKQ50o5iQkGHc1aedHMg9Y02jndR9BPSd5REwZ0hZ9wQe3V%2BMFArZLfIMm4bd8744jkwyGLZtyzG%2FzAF8yEFbv5&X-Amz-Signature=1b6eee90b7584e0ba17bd1e41f746dd222ac8fbedb22801a711c1e121d63cbae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGVJCG3J%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC81c%2BQ8hrGeHtnPPJp4Dg4mqyLC4Hu%2FUFEmvtF%2BAAD3wIhALLpZtF1E%2FUOp4fR8cbQg9JwIWrLFWw3JsOtfMJmriLoKv8DCC4QABoMNjM3NDIzMTgzODA1IgzwgvCqnh468myYUu8q3AOUQv4jachW9eeOiuif5Vdi6B2PfhkzzzJ9iAM6pEtywcxUnpdIaoopBifcJOrxfORw%2BOGthfpCPWR3oIWQjdmpyWjbKKH7hQxvmXUxmStI%2FbkmiM3roIa2njpifmVU2%2BqqpXa5RGx0yqOuS3rNXFiyxztJW%2BiSRhOGA2x%2B9%2FRcfy0Kcvo7pVcFQbjRMv9vGClnuwZ2zjn6lvs1KayWMajRSVHzxt%2BICZYl4HEeXfV4CsMIAl%2F8SW%2FF%2Bt5zU3PL4P%2BztrLhG%2Fdtn0fkqdZ3LdV0P1i01btSCuTTWZ2gMCC5pW7l5YLnjMwXrwH0lKKHvGzCB5Tbz1qU%2FdCZr5gz5iUPvvdFVRDsMRYySBU1iEJC2QelJ%2B%2Bwmnksx5tRRz4WIq7%2BAfSUGjWc3cs8SzsVF4TkobLvXss2KtPpcMDNiNaHveQrncDlNco0Ryd3UGhXoEGwK3QR3Z1YGkzWpAfbwiUKb55R3Enu95R0Rl3vZSkzYT2kwNG9uu10WTzn2iGWcgjQSyRlROR1yETn%2B6MAnzm1n%2BjyEUTFWH8Xpqrp%2BbmUTEcynHrm6zi3wbQlswKiqfhOPy9N%2F%2Bm3bY29GpPD7MirmQAuZQAzn3iuyS7QURny4mp4aTQ%2FFXFb6VFSuDD8pPm%2FBjqkAUKRFedvJh97IKllXYCl9aYv85CTyoy%2FSV%2FagjlWtZYlGNic0mvb1MnmVzkGQDpsTegPzyafFv3TnXozjhj%2BvFTwlUh6z7%2FIEVizpjxVajrIZ1pb2pEX2E7qn8KCj4OUXZy%2FzHsJvUVrKt9T%2Bect9s9YYiWewgJ7ndGnzq8I%2Ff53Nih%2B1%2BB2oglD%2BIirpkNxOCrTSg9tbBkAy6vNv%2Fu6Qq58odTL&X-Amz-Signature=b580fd145f42571a63d9b22867aea0425486018b3d322f011966614126a76129&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642CWZOH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVli9N8ZpEPbHwm5WR31x7fn1pAmwnc2ZRfFrIpR%2BLSQIhAMtPrQC7aX080rHse5t%2BmK%2Bro0De5rbf%2F%2Fb1F5YC%2Bk8DKv8DCC4QABoMNjM3NDIzMTgzODA1IgzSMkWzY2vMk%2Bn9cAkq3AP%2FqyxzzOby0vAaAF%2BHQdEvUPeh6cKxYtt2uwB5Y61ElnJetE0eBybM5VWRoN%2F2S9pmpYu70dgRt8TwVyvl2G6bfDE7urWIWT%2BUKkOMR7RbhNGnyJtgfER5edzza%2FTpdmYi1PmaH2Spv7WLD9u4rTG8VGoTjFaPD3RckC2Yub%2FJzhyiCahfikKUqWgY%2B%2FrZtzgjbgCaVufFUPcTScRAi642qnznJ%2FZPrvnR6jVHhAkOIX%2FEHZMzW8xV5mVGsryZIan0octSgd9tVsPgiF%2F6ih3hcPVla%2BdZlb9plcLp5X6ST2rw8OSa92QpkVGJj4ILsck4HdxS5VtY7uFGdFw7IqmugHOSrLSFNGX2%2FEVR2WOkS6Ex20BZBDvDFTj1RJXxRwGIVVZ%2BWAlCdjl0fYrMeL6kWaNEapIwgHgrCl57RFgp08Z3z16wSLC2w1Uew3NtGWa2Fe16%2BKzba4wH8sVvxwQaaFh%2B5l4RbWVr0WUqBUycmFmb18ZsFx%2FWxd8Ho6My1xF3GWpDiNPs71yqxxQD9zWRtV6KOSSlrO80qLmT1E7gaZx480u4mNhPH%2BmpTNa6HxUqh0tuf2VQ232XyZV7%2BpCldcpnL0yZMFKdfXOc5jqTS55Lh%2B6wOJeDGNE2CTCSpvm%2FBjqkASAToSnCNszpwnxf2w9w36%2BtI5LKgr1NgCSF7DfKGyPHWT11qKoZcMSUdjluk1pS5bvHRHKfMQC4CbRajUBqlTxdFiP0EXEeVcdDTMiYrnGBA9wWK%2FPs0IHTiaCQXHVI7AAf0dQNfLXHQIXuOyf1MqTayS7a9sKiTaX90LRNgYfBocIqnE75A0gynigV8EbdaIP4KRXDfeiuvYP88gbgzQmroweE&X-Amz-Signature=7374c171fa2e6daa24dc5d2d18974289f034cd0fd7b7381c0a722b486b8755fd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
