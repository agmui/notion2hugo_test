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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBHMURZ3%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEQguqVQskvTgErhTZBI0efS8FdnnbD79w%2BlCnv5zErbAiEA2d%2BIQEYokbByJyXJfR9w7n6VB4E14RoIBg%2BnDCLYM8IqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERpd5BkqKR7vBugmSrcA8UjOv4yTZAG6I4LRbhazTxBETwQine5cwcLl02%2BpBI%2FA%2BWUhEzKV2i2MiNljuhwcbxE007o3OFb2JomEcyBYLrnFFkYco7ET7msynOOKswFciH8P7o4Zfj0VY1Nek1ehb6VuFUHVqXZkEUDDcpE8ECSC0%2F5KNy3bqQm9rQ37tubiASr18RbtO%2BgjQbYmgSGObrJboFPoTRIQP0qeFFL8QYJ8afqLRo%2FT9%2Fmw2B8pKtVfffD%2BgLyJakiPykRZZDMKjNhSe0lfuMWMIXyRV7yDyFEGZKk0CTsCoHJcqxTH0I%2Fc5QUq4EoyeOH5Tq75B4xwRdjWT9n1b4mm23HMg0C6pYyxplsCofuSrcC0vfJUcdMTQU4cNBHa3%2BfdzYva6YmARIGgrSrQVi5eJDegf4iboYfxs9OPPeb3Eu5Qq5%2BXiXiZwhEXyEqK6SM%2BLLy64drmE3iAVl8kX%2ByElboQY7ZAJ8iVam3Je7NkiUjO%2FVZ%2FLtFroAAAtGBUQdRnCWwyH1vo4ThlOhRbrLd8L0Uvnh%2B83zXCY58rAOdm5rQ%2FwQRfYCqYBvmniGQYIEJxmPXV9G57f9jIRpJQlvglJkm9LCOrqLjqBNEvsXFp5HlgjsHHtwhUoMFQIYajyVOs1wgMPeI7r8GOqUBbINbFqmKwccx3fSh7W1sj%2BOJp1HcHnB%2FTF86tl1SeXsUQe2E3z1STflcwOUcvwvpa4Ec4X1sNwe8NaHNZmfOkmO8TtxwvJsKk2OP93mMw7yxGrvu4rqPDHtmODOjASIzt5LPoszT4KfrIfsQG4SCITbLnTLBI6CcVq4MBluXRMiNSSAh%2FO7Qw8nue1o5YlS3me6FnA%2BD0CPLxItW%2Fp6Glrk%2BP%2B9H&X-Amz-Signature=6b534367847f041b368c2a7fa911734c8d34e49541a7bc707a48376c5c3d5f9c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBHMURZ3%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEQguqVQskvTgErhTZBI0efS8FdnnbD79w%2BlCnv5zErbAiEA2d%2BIQEYokbByJyXJfR9w7n6VB4E14RoIBg%2BnDCLYM8IqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERpd5BkqKR7vBugmSrcA8UjOv4yTZAG6I4LRbhazTxBETwQine5cwcLl02%2BpBI%2FA%2BWUhEzKV2i2MiNljuhwcbxE007o3OFb2JomEcyBYLrnFFkYco7ET7msynOOKswFciH8P7o4Zfj0VY1Nek1ehb6VuFUHVqXZkEUDDcpE8ECSC0%2F5KNy3bqQm9rQ37tubiASr18RbtO%2BgjQbYmgSGObrJboFPoTRIQP0qeFFL8QYJ8afqLRo%2FT9%2Fmw2B8pKtVfffD%2BgLyJakiPykRZZDMKjNhSe0lfuMWMIXyRV7yDyFEGZKk0CTsCoHJcqxTH0I%2Fc5QUq4EoyeOH5Tq75B4xwRdjWT9n1b4mm23HMg0C6pYyxplsCofuSrcC0vfJUcdMTQU4cNBHa3%2BfdzYva6YmARIGgrSrQVi5eJDegf4iboYfxs9OPPeb3Eu5Qq5%2BXiXiZwhEXyEqK6SM%2BLLy64drmE3iAVl8kX%2ByElboQY7ZAJ8iVam3Je7NkiUjO%2FVZ%2FLtFroAAAtGBUQdRnCWwyH1vo4ThlOhRbrLd8L0Uvnh%2B83zXCY58rAOdm5rQ%2FwQRfYCqYBvmniGQYIEJxmPXV9G57f9jIRpJQlvglJkm9LCOrqLjqBNEvsXFp5HlgjsHHtwhUoMFQIYajyVOs1wgMPeI7r8GOqUBbINbFqmKwccx3fSh7W1sj%2BOJp1HcHnB%2FTF86tl1SeXsUQe2E3z1STflcwOUcvwvpa4Ec4X1sNwe8NaHNZmfOkmO8TtxwvJsKk2OP93mMw7yxGrvu4rqPDHtmODOjASIzt5LPoszT4KfrIfsQG4SCITbLnTLBI6CcVq4MBluXRMiNSSAh%2FO7Qw8nue1o5YlS3me6FnA%2BD0CPLxItW%2Fp6Glrk%2BP%2B9H&X-Amz-Signature=f7ff509db70d2237aaf8b228d222222a9ec8f06e366fc4786b3bccdcad15808f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIRTWNDI%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIGQE6tXT1HTxRydnaPsC547SkoCXsvRc2J%2FwDeZk1CaeAiEA%2BIrqkirSRZnBgRN1nDBgmFP6F2DCQ1kgdqG1dlv9J%2BoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFLH%2FaucTMmTzuClCrcA%2BVvMWutP7QetgIwAeccUaYKyMlsfObI7rQVFivOx5QLfgMEkedUCH%2ByGZxBJGlQKePg%2FQdxxidmrDqTmdI%2FhlvlZt0pQx9MBAJa7ueJyGiKUS4NG%2FUsHnBPG31uSczbQO3uoVGSWlPgTuZXQYerrDqu8C4PplfeFQ4YQvCT%2FWjnbxWAX8zclOqXNMlJL%2BPBYvH2QCTSjmfJEFterXwjNo7%2BFn7qzfd4je%2Blepy7JsXn5cO5%2FnuIm9NxbjIvyEzfsHj%2FVRs5pWakH3WzqNElB0oAa0NqDcmWZWaEDvycwKbi%2F%2BVge5g9Jfv%2BrsmBvsGVUIwKATafoNK6GxAjfg3XpnfqNBLlxM9Kz8%2FD7osae%2FPqVxExK6DyTlh7yk%2Bvu83NupZH3xRQnwzyq%2BaRqsdmMHIHqawtM7A986xO4lS8mud8WvqCKi5SzeCuWP21rDBDycVvj45Q4ka5gXhUy0CpgtuNnvq0fUPK2r2yn5gHmiDDyGc2AqB9%2FVsv64bc%2FulsXJPoOQkbliMb4JeGnmIySXBksUz%2FdwkqQRPEKhiFDKJacffQ1hRi5vdE9TKLyw3Jw%2B6oLrKoqn5AovBFvl%2Fub84Zp3CXMuM0LEfOFFqRNg0Bp9V8scipNn%2BBGsfdMIGJ7r8GOqUBjKXMORbceZp8ydHe5ZfiSWrRxxoAxKb5wIcJJjiLOvF0gulQ4JmXtr0y%2BATwOGjKVlpkYqzKf8Uk3zrKI6j%2BoPPRHr7CG5WzQ79MzoNBm8ozyDcb2UyKRv5GQWUm58CLA%2BPAJTE9dQ7OApn7c5LqyvbprZPwtV8Aswc6JcuLBjayUTi6dpsRonpMeWBADkdMUvYjVw%2FUed3En%2BEfsw8ThKDbBKYu&X-Amz-Signature=7a3ce53531b12cca258455400f456dd887d51031f63f525e05b836612705d4cc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMMPJY4S%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDQp0KrBYtOVVr9gkZED%2BAvqZ8J1%2FLKnL4mucotiI09bwIhAOLlrs84Ll5RXpWQGX2YPxlYUy9PdMVa3F7W5UZTX%2FOuKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igymc6UQ8JiATd0bxuwq3APpnKSO8iMPdAilym8hL7XvYPoDcdwhc%2BSQ6yI0RVjSMHgdMW%2FwzcovNZS7s3%2FUzC3FpfT9EfEBkWBY6IiDg1gmm4Mrwuft1eQOql%2BA6SQvY6BY8r0vn%2FdNpIaWxRtjiiVo3EJvJLmVZ53pONZ6SVp5vCWoveM1h4PSqEoRn6eHTHgTqAFh4qCjBcqae9dSMDsxvHD%2Fu0qrlFq8cw4HfyIVd0GlnlbXUC1l2asPLklA%2BLzVWsWBa4Ke%2FY9ZheOX%2FzeHfHhLc7Le1cWHru2hAWg%2F1By2rLWwur5tPj4dA4VdC%2B4FQIyqg1Y7Nj1nUHsrTkD2FHsyI7ZpvdfVPKJ1LQI%2B0cCitfietbzxxZ4WkZF1ip9Kkb2XswaKF1S%2FQ6Bx5cvNI4%2FNSyj8Dd86z9mKaSkpGinKlqf22RFVozUR17KrFOjOeKQKj1omelQEvg0a251H6NBf%2FzlovsikqyQHIqPDZ3L%2B2WujtAUIdf%2FAeRUWZg5H62p3ZhEY%2FDI0F8saTqW7%2BNnxH61rGKf4oj2HSvxzWbplY12J47qlBlib3zRaWsWOd0%2FgjyG0jcTczMYpsYu%2FxIMf50bRpUuDHVy0s0DHkvuXLDSq5Yb74ALzWSok6DYuz%2F3UGa%2FNwr5NEjCwiu6%2FBjqkASFe7gZZri0FQAHaR9rzZM2wyVXZONvmXmOar6KmytkOEzLCVOMZ%2F%2BnFngcAjti1%2FhScpYw0Uolbh3UkgEtGwTOotazALAnJCzYgjhGotg97OEdiBJ2dyR0FrYODaC0odjr7oadZU5fIr1clHJMn4oX1tv6Mw8hMOjPrwbkR4xpHsjMCguQPO0Xfou%2BXYErsmdAnn%2B8C5MRrbT1Gy35oLhUYYLAz&X-Amz-Signature=12810e25f792d2895be658879ddb4523532240f793302ddb73712f25bb7eb1e2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBHMURZ3%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEQguqVQskvTgErhTZBI0efS8FdnnbD79w%2BlCnv5zErbAiEA2d%2BIQEYokbByJyXJfR9w7n6VB4E14RoIBg%2BnDCLYM8IqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERpd5BkqKR7vBugmSrcA8UjOv4yTZAG6I4LRbhazTxBETwQine5cwcLl02%2BpBI%2FA%2BWUhEzKV2i2MiNljuhwcbxE007o3OFb2JomEcyBYLrnFFkYco7ET7msynOOKswFciH8P7o4Zfj0VY1Nek1ehb6VuFUHVqXZkEUDDcpE8ECSC0%2F5KNy3bqQm9rQ37tubiASr18RbtO%2BgjQbYmgSGObrJboFPoTRIQP0qeFFL8QYJ8afqLRo%2FT9%2Fmw2B8pKtVfffD%2BgLyJakiPykRZZDMKjNhSe0lfuMWMIXyRV7yDyFEGZKk0CTsCoHJcqxTH0I%2Fc5QUq4EoyeOH5Tq75B4xwRdjWT9n1b4mm23HMg0C6pYyxplsCofuSrcC0vfJUcdMTQU4cNBHa3%2BfdzYva6YmARIGgrSrQVi5eJDegf4iboYfxs9OPPeb3Eu5Qq5%2BXiXiZwhEXyEqK6SM%2BLLy64drmE3iAVl8kX%2ByElboQY7ZAJ8iVam3Je7NkiUjO%2FVZ%2FLtFroAAAtGBUQdRnCWwyH1vo4ThlOhRbrLd8L0Uvnh%2B83zXCY58rAOdm5rQ%2FwQRfYCqYBvmniGQYIEJxmPXV9G57f9jIRpJQlvglJkm9LCOrqLjqBNEvsXFp5HlgjsHHtwhUoMFQIYajyVOs1wgMPeI7r8GOqUBbINbFqmKwccx3fSh7W1sj%2BOJp1HcHnB%2FTF86tl1SeXsUQe2E3z1STflcwOUcvwvpa4Ec4X1sNwe8NaHNZmfOkmO8TtxwvJsKk2OP93mMw7yxGrvu4rqPDHtmODOjASIzt5LPoszT4KfrIfsQG4SCITbLnTLBI6CcVq4MBluXRMiNSSAh%2FO7Qw8nue1o5YlS3me6FnA%2BD0CPLxItW%2Fp6Glrk%2BP%2B9H&X-Amz-Signature=f948945640f22bf8997535a58cfb0fd7c701bba5c0d7a60b2bc28d7ed08d626d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
