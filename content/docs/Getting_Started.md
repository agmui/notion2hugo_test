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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC3OXIL3%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIYOq5YoNWf5Y0615gq0Rag9eNK17YUneDzUcFrj%2BQ0AIgIGuckvfrxFj4pKLo%2FevIn0pc7PP37Z55vLPRxUt9rYIqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEigYUM8KUwJZqdUQCrcA2r9LbKPOVuMGWbowr6qFQEG27NsnySUtqk%2F%2F9NFVRJCnyyRA9nSNGqSfUdlvlf821lRBjmBtAo6gmp%2BFF%2BqNecYDguGzj%2FUp7wr0kPPV6FSfsF4U1llf4m1rTMkSrR2D8%2BkkaIUTi92%2F8SJNen33o3lS7WYgDLJJDRrfT32hpLrNzuc7VKUFIvr4hCep%2BexVor8OaoYSDMZirDSMtBN6d4wZSHqAk7yeJi8sNYxI9ph%2BwMvl2NPUHrL3wFsU5UVOktGoO%2F04XK9BcScH35Rd5qri3AU46VQbBRnDHyWC6VfQuyiZ1LKyNT6CI3XRaa7ZvYMxRlLamlG8%2Fp2Aw1p8KPnNA4pmpHdgQA4RJxQe95i%2B65Ga2JTkDNGKV2i6RNCmxcR7%2Bjw038heoXXYYh0Ef9vHSZ9Nf4pTk5XMkZwxx2Agg0lIb%2BOVlPjtyh1Vs%2FBBqA4OelyLnkzOq1Dmd8n1OB%2BM2%2F9VVPNf5ffXlloyRh01cRm2E2QQ70vo85h9eog9AXvCzv6tQZe9W9KJelrDrkwXtpCY1inQj5rY6%2Favuoh5rviz0Pe6P9P1vPqKd95Cjs1iAIZ1PBABErnWTzlmmJgMVZmTJL4jMpQRszqMumm2JOPclANBNSMjG8HMKGn6b0GOqUBxV0SkkQFz5Eg5THdTMn42jtSYIhMNxFFNLT47%2BOJFLmh6k1nMmOGqInt9gBguyXCR1ZDUUEqAd0w3dKfuiNcjKRIxFkxTKEb2mHdjeeKfr6lWMSOdKyc3hXmQkvZMrCS1UHIfdJilwLwY7mz7ZIXnJ26HxU8N1K9jFE13471b50WuMH5QUC3aovwJXz0jpH3UntJoklni2Kt5HJABpI2e6UNPTl4&X-Amz-Signature=998d637ea82277bd934e96e2d0b68a7ba531099066e398a1e1c556e4c11834c7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC3OXIL3%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIYOq5YoNWf5Y0615gq0Rag9eNK17YUneDzUcFrj%2BQ0AIgIGuckvfrxFj4pKLo%2FevIn0pc7PP37Z55vLPRxUt9rYIqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEigYUM8KUwJZqdUQCrcA2r9LbKPOVuMGWbowr6qFQEG27NsnySUtqk%2F%2F9NFVRJCnyyRA9nSNGqSfUdlvlf821lRBjmBtAo6gmp%2BFF%2BqNecYDguGzj%2FUp7wr0kPPV6FSfsF4U1llf4m1rTMkSrR2D8%2BkkaIUTi92%2F8SJNen33o3lS7WYgDLJJDRrfT32hpLrNzuc7VKUFIvr4hCep%2BexVor8OaoYSDMZirDSMtBN6d4wZSHqAk7yeJi8sNYxI9ph%2BwMvl2NPUHrL3wFsU5UVOktGoO%2F04XK9BcScH35Rd5qri3AU46VQbBRnDHyWC6VfQuyiZ1LKyNT6CI3XRaa7ZvYMxRlLamlG8%2Fp2Aw1p8KPnNA4pmpHdgQA4RJxQe95i%2B65Ga2JTkDNGKV2i6RNCmxcR7%2Bjw038heoXXYYh0Ef9vHSZ9Nf4pTk5XMkZwxx2Agg0lIb%2BOVlPjtyh1Vs%2FBBqA4OelyLnkzOq1Dmd8n1OB%2BM2%2F9VVPNf5ffXlloyRh01cRm2E2QQ70vo85h9eog9AXvCzv6tQZe9W9KJelrDrkwXtpCY1inQj5rY6%2Favuoh5rviz0Pe6P9P1vPqKd95Cjs1iAIZ1PBABErnWTzlmmJgMVZmTJL4jMpQRszqMumm2JOPclANBNSMjG8HMKGn6b0GOqUBxV0SkkQFz5Eg5THdTMn42jtSYIhMNxFFNLT47%2BOJFLmh6k1nMmOGqInt9gBguyXCR1ZDUUEqAd0w3dKfuiNcjKRIxFkxTKEb2mHdjeeKfr6lWMSOdKyc3hXmQkvZMrCS1UHIfdJilwLwY7mz7ZIXnJ26HxU8N1K9jFE13471b50WuMH5QUC3aovwJXz0jpH3UntJoklni2Kt5HJABpI2e6UNPTl4&X-Amz-Signature=b04ef2d22c2952022559368890862549d832800fcc1321be8fba31955c71ff57&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643FV6IHX%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJkfiY1SlfrH6FsVSEoIi%2BPz1Tw3G1CT8ukNKQawghbAiBqV7uyJO%2FVu1dCHdnIFHGx4o0pEBH6kfUzlxJc0yt4qSqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa%2B1oA1K3LIPp2qqHKtwDeW9iCN9CWXCIZSnpJxn3teDNiRwcAfzbZn8sKHvGrF9dbdEA4dkFVGhYAeI6Dg5Cpsx0XXDOaz%2B05W1nDfIS%2FrfiqFCdIsV1KDUI85I5yxYaPhakG%2FIL7ctNjjj4Qp419zMFHwVV17yoW23oOYhm5wHi%2FYg5j%2BvGfQY9OhptonDi9n9%2FvKRthJSweRd70eEFIQEfprFijkLEPeUEWpcumulW92CYBk0hksTh2z94clg2mmp34yLfV25VfxDUnVtb%2BxFWINxk5yeFwf28BI84Xr7mfcOXyMfBzmJ6cMKITn6j4RhA6nY2a6KXTg9RmoPjPAYWMOm1x2c244q1rZSE4xM8U%2BYuk05xOeHPz3DSU%2BI5f4P%2FzoRG96%2FTz8W0kczRxhWSEn%2FNctKuEupWn77bfbKbdET7g%2FDH8wtkiwhIeZ9kI3qRcRU%2B%2F4Klo8KYOkbgLU1%2FMazRRCli5WkBxmdrIx8WdiIm1eeVwNmtZO9rP0nAGRFTXFugKZFTGJzpDWsn92t4NDHiTES3IYr8MMNlqPkE1Q3w%2FB2%2F1EjPW0ubCWinfws%2FLoplDCpesqQEfo4R%2Bn2%2F9kgKLMADPacNLyeDB6rQuwG8jsutDdMUx%2FzbnoTRu1kP7NaNe%2BwLsA4wnOXovQY6pgFr4OvODUnJVHSk%2FsvbxKTmEirM99Cq66gpjWxArA%2F8L94XW%2Bzbv9uEGwG22koST16waKPdyjjvF60spy1XSkgVtfjMX8%2Fn1XnagtIjyyF0lvuwTwXutRgZoUw3O%2FunAyD7lk8OX80ICAXj2uzL5QloaiQuovLar9wExxCCa59d2n0eOj98OluEH49HiIFkJEkrEdbOJKnWHcIAHEv2etjEulseNVg%2F&X-Amz-Signature=bea16ec774b8bb07dd3b7ae6cb3f749d24fc627ccf44edaf52059bdc7050ba2e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEENMSPG%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4LwUiLJmL7DxKgKVLgAeCBdMrTUaBnqzmORP%2BA%2B7NlgIhALRnK0xFXGClEc5avHXMD2%2FBgI7PCyaw4Fm6IlQE8J8wKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkTVefPThzGLOjAxMq3APK2mn0ypCQ8n02Oy60EXoUJmTYQ5F5ndhK1ye5ASKvKvDDEC0m%2BylX7WKcAcr1WV%2Byov2HiuvskGEQwWurSn%2BZJvv9sBesBvTpTgKFCZ0EVVi%2BxLgfVckohbMIn%2F3ndShDmy9YhIac53hGbooA6AgIPxTqE3NFxXxObM54w81bk7wTE2lk77QVJSl4rFuyeZWfXaAytO9MD%2FKVyFI0Rlu%2F7M0%2BQ%2B%2BebzmngOxfLHBEl3OVN7uWHrSqUaO7rrE%2Fg0Z9z3Vhne%2FrbU%2FTFJAsXNJwHuIL%2BU16KpFsnQ%2FuACOjVWNUu9blpXAD%2BQiVS9rEo2tveMYLmt2SJlJ9sifaGJmgoUVB3os5%2BIWNo%2Bvq2jNzru1ZLn6P%2FHROffkb%2B%2BlBfNlPFbx3gnHjAXVnXKgQ008xdcrZPfiWpRb95c7wKzckiUNhRLuEv3X6ccAaGYpsR1%2Fju%2F9hmCaYDM22%2BhlVxeIaYYwtD2sDebKV%2BDkzvQTfYEiI5YvLIvzrqf6mACarsbUdy2589sOan6ty3zkzTR6WwHfHgjEioqvunotAScEP0QCRA3Q4OP3w13FVw3WOY10wSjRFwwUJpMVAEmA3AMx6UzBVN8t%2BFaEBlgI%2BdX6mqkjNTWigeSYdG87VZjCapOm9BjqkAY8CRbjQezJbHGL8vhxfWFbE%2FfqayPNfROBg3kp9TXEuWFvHTSerPggH3S2KjR4C3mPLJ8IXjwK3%2BgqpHt9oYZRKcgn%2BsHumUm3Bck2878IzYfRhsC6F%2BYaZWKrxtKj22RbHKfVHxWylCuks8EB8UaC0na2fsUCOr70ALD2EdAKguqO%2FzTUafohfjUxT0eLO4M1egM25XDjzYZvH08qK%2BSvglSj%2F&X-Amz-Signature=c5e52d3ff83039fbc4dfd630eb6843601317d0e1496b32f0a92e33bfc6b99d23&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC3OXIL3%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIYOq5YoNWf5Y0615gq0Rag9eNK17YUneDzUcFrj%2BQ0AIgIGuckvfrxFj4pKLo%2FevIn0pc7PP37Z55vLPRxUt9rYIqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEigYUM8KUwJZqdUQCrcA2r9LbKPOVuMGWbowr6qFQEG27NsnySUtqk%2F%2F9NFVRJCnyyRA9nSNGqSfUdlvlf821lRBjmBtAo6gmp%2BFF%2BqNecYDguGzj%2FUp7wr0kPPV6FSfsF4U1llf4m1rTMkSrR2D8%2BkkaIUTi92%2F8SJNen33o3lS7WYgDLJJDRrfT32hpLrNzuc7VKUFIvr4hCep%2BexVor8OaoYSDMZirDSMtBN6d4wZSHqAk7yeJi8sNYxI9ph%2BwMvl2NPUHrL3wFsU5UVOktGoO%2F04XK9BcScH35Rd5qri3AU46VQbBRnDHyWC6VfQuyiZ1LKyNT6CI3XRaa7ZvYMxRlLamlG8%2Fp2Aw1p8KPnNA4pmpHdgQA4RJxQe95i%2B65Ga2JTkDNGKV2i6RNCmxcR7%2Bjw038heoXXYYh0Ef9vHSZ9Nf4pTk5XMkZwxx2Agg0lIb%2BOVlPjtyh1Vs%2FBBqA4OelyLnkzOq1Dmd8n1OB%2BM2%2F9VVPNf5ffXlloyRh01cRm2E2QQ70vo85h9eog9AXvCzv6tQZe9W9KJelrDrkwXtpCY1inQj5rY6%2Favuoh5rviz0Pe6P9P1vPqKd95Cjs1iAIZ1PBABErnWTzlmmJgMVZmTJL4jMpQRszqMumm2JOPclANBNSMjG8HMKGn6b0GOqUBxV0SkkQFz5Eg5THdTMn42jtSYIhMNxFFNLT47%2BOJFLmh6k1nMmOGqInt9gBguyXCR1ZDUUEqAd0w3dKfuiNcjKRIxFkxTKEb2mHdjeeKfr6lWMSOdKyc3hXmQkvZMrCS1UHIfdJilwLwY7mz7ZIXnJ26HxU8N1K9jFE13471b50WuMH5QUC3aovwJXz0jpH3UntJoklni2Kt5HJABpI2e6UNPTl4&X-Amz-Signature=0e1b3ba1efdc16a8baf8206a18e9c4a9e5b4ccbd98692c91e71a6c1ae93bcbe7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
