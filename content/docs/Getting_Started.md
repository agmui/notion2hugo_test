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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466764SGW2M%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoEIE77qvO%2FFfu0VscWin4p6ImnoOg2BiY6IISd8gDhAiANL70XM9focNhyuHq%2FNas8iJ%2Fp%2FxhxApC48Bid8W1gYiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEsoTuWBi%2Fm9cPVyVKtwDidxtNSfBiqHryglQdUlVypTjcDTNz%2FxIneURD7K0s156Yvlnjai3sGWB89tQL%2B09eDh%2Bm2lzQZjopSTJuYe42XdwfxbkU3SMO6uycL5D0wZlYkc%2FYaRHZiwI3Bl93dt3SfQAYN2h2WABms7Ae2WUkUxwaM9rWbWcvpM6YvyollEFGVeJkWovpV7YmUqffSTpAwTCDm8%2FWc8YYuDv9iH9OJ7cn%2Bg%2FylReexotvnoQldHYAOwpE9jJ9zliBXdNRxfTxM90FTj4hPEX0%2FerqoM1W%2FUSLoGGdHSCkx3WZo3mShWhmbbZxaZpXnmGyBQzOlSIFK2pyWJLBG5webdHt1oHogHfR0cE0ry3wgun8Dkwe34a%2BqyymWObvBUrdomJOgMr4vytV4VBLxH0Xy4d%2FALRh1mpzHetbhLOWh7kCSTaQStIs76T0KoNrdt96RrGlkhIgSedGs2ETgkOF8oWVfvJ2%2F26Yf29k%2FQ6SaE7Tf7jiAJ2XWeX9KmVMJMTRVj2gJ%2BXFSwA1YKwb3lbK%2BPINRrGcFx35N0hMR4FNrqdGxVz9%2FmDND4dp8HB3R6WCZ6KY7jfW%2Fo%2FbzoWJ%2BZCdEWa%2B6LtvdaQvSuJgpNfpFh9MZ0JHbIarTKQY%2B2UabcdoZgw6cT5wAY6pgGnnYX7zqEUNRE88LN5gh8SlE6cAHERgvdXe9du%2BYuT7Ypd4kL8tfJV%2BbKwRx3H31E2PV65WCXOrHCRgJ4Knyg%2FCbd2p7G60Ns2rWiyb54k%2BL96%2BZdU2%2BDGUpTCbhxvuSKdgmF2chsDdIpRZSm%2Fbx%2FrpC84SNmZEGdpEKvLWR8evHPw9uUp5oGxSjLZ2b0CY9jK2xpbwd0OlvYpy9XygEuFGU7Ry3gJ&X-Amz-Signature=7772b254c3418e822172906e84b199ffb82a9dd1d1f2eaf073d81be31e281c6b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466764SGW2M%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoEIE77qvO%2FFfu0VscWin4p6ImnoOg2BiY6IISd8gDhAiANL70XM9focNhyuHq%2FNas8iJ%2Fp%2FxhxApC48Bid8W1gYiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEsoTuWBi%2Fm9cPVyVKtwDidxtNSfBiqHryglQdUlVypTjcDTNz%2FxIneURD7K0s156Yvlnjai3sGWB89tQL%2B09eDh%2Bm2lzQZjopSTJuYe42XdwfxbkU3SMO6uycL5D0wZlYkc%2FYaRHZiwI3Bl93dt3SfQAYN2h2WABms7Ae2WUkUxwaM9rWbWcvpM6YvyollEFGVeJkWovpV7YmUqffSTpAwTCDm8%2FWc8YYuDv9iH9OJ7cn%2Bg%2FylReexotvnoQldHYAOwpE9jJ9zliBXdNRxfTxM90FTj4hPEX0%2FerqoM1W%2FUSLoGGdHSCkx3WZo3mShWhmbbZxaZpXnmGyBQzOlSIFK2pyWJLBG5webdHt1oHogHfR0cE0ry3wgun8Dkwe34a%2BqyymWObvBUrdomJOgMr4vytV4VBLxH0Xy4d%2FALRh1mpzHetbhLOWh7kCSTaQStIs76T0KoNrdt96RrGlkhIgSedGs2ETgkOF8oWVfvJ2%2F26Yf29k%2FQ6SaE7Tf7jiAJ2XWeX9KmVMJMTRVj2gJ%2BXFSwA1YKwb3lbK%2BPINRrGcFx35N0hMR4FNrqdGxVz9%2FmDND4dp8HB3R6WCZ6KY7jfW%2Fo%2FbzoWJ%2BZCdEWa%2B6LtvdaQvSuJgpNfpFh9MZ0JHbIarTKQY%2B2UabcdoZgw6cT5wAY6pgGnnYX7zqEUNRE88LN5gh8SlE6cAHERgvdXe9du%2BYuT7Ypd4kL8tfJV%2BbKwRx3H31E2PV65WCXOrHCRgJ4Knyg%2FCbd2p7G60Ns2rWiyb54k%2BL96%2BZdU2%2BDGUpTCbhxvuSKdgmF2chsDdIpRZSm%2Fbx%2FrpC84SNmZEGdpEKvLWR8evHPw9uUp5oGxSjLZ2b0CY9jK2xpbwd0OlvYpy9XygEuFGU7Ry3gJ&X-Amz-Signature=5108d82034dec2f9f28cf1bba6e6df604bc2bd3e2dae41ad860d4215453da485&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466764SGW2M%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoEIE77qvO%2FFfu0VscWin4p6ImnoOg2BiY6IISd8gDhAiANL70XM9focNhyuHq%2FNas8iJ%2Fp%2FxhxApC48Bid8W1gYiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEsoTuWBi%2Fm9cPVyVKtwDidxtNSfBiqHryglQdUlVypTjcDTNz%2FxIneURD7K0s156Yvlnjai3sGWB89tQL%2B09eDh%2Bm2lzQZjopSTJuYe42XdwfxbkU3SMO6uycL5D0wZlYkc%2FYaRHZiwI3Bl93dt3SfQAYN2h2WABms7Ae2WUkUxwaM9rWbWcvpM6YvyollEFGVeJkWovpV7YmUqffSTpAwTCDm8%2FWc8YYuDv9iH9OJ7cn%2Bg%2FylReexotvnoQldHYAOwpE9jJ9zliBXdNRxfTxM90FTj4hPEX0%2FerqoM1W%2FUSLoGGdHSCkx3WZo3mShWhmbbZxaZpXnmGyBQzOlSIFK2pyWJLBG5webdHt1oHogHfR0cE0ry3wgun8Dkwe34a%2BqyymWObvBUrdomJOgMr4vytV4VBLxH0Xy4d%2FALRh1mpzHetbhLOWh7kCSTaQStIs76T0KoNrdt96RrGlkhIgSedGs2ETgkOF8oWVfvJ2%2F26Yf29k%2FQ6SaE7Tf7jiAJ2XWeX9KmVMJMTRVj2gJ%2BXFSwA1YKwb3lbK%2BPINRrGcFx35N0hMR4FNrqdGxVz9%2FmDND4dp8HB3R6WCZ6KY7jfW%2Fo%2FbzoWJ%2BZCdEWa%2B6LtvdaQvSuJgpNfpFh9MZ0JHbIarTKQY%2B2UabcdoZgw6cT5wAY6pgGnnYX7zqEUNRE88LN5gh8SlE6cAHERgvdXe9du%2BYuT7Ypd4kL8tfJV%2BbKwRx3H31E2PV65WCXOrHCRgJ4Knyg%2FCbd2p7G60Ns2rWiyb54k%2BL96%2BZdU2%2BDGUpTCbhxvuSKdgmF2chsDdIpRZSm%2Fbx%2FrpC84SNmZEGdpEKvLWR8evHPw9uUp5oGxSjLZ2b0CY9jK2xpbwd0OlvYpy9XygEuFGU7Ry3gJ&X-Amz-Signature=ef82ce1f15b7c18f4b9ce09231497542b847388a0c5b65eadfe9513af3dc938b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIPOFGTS%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5KP26brxDoOF9%2BucxHl8hAo6KJ4pW2SsH8%2F09C1yjdgIgJ4K1aO80CnT%2BqKK%2Fb%2FT8h3Ee3ZLllaUazVL1LbJrFPUqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWRTMQMEHB2sOTVMSrcA2mWhC6aviSSK3wWLETRrYeVsrb0RfNT0H4xhb4tIOhgfEbJzl7ODDl49tRP3DJZFbIICLL8g0ZWB6J%2BM8fxrTQVX75w%2F1CUpI8zuUD1hZS1g%2F%2FoI48HaYcRjlSFhMsvBG6AQzMocYMKmSt%2F0ne3i%2FFiTALRBOFvgJBVDfcCdENmk%2Fjb1pG5JH%2Ffvdkwf6CCZCkuj2QUzNmHGsh6SaVFyYl6eudoK320G0vavDV%2BtVso%2BpK6HNPSVEmXpvGwQ6MRuM6jCSCIdj9N6UpPjf11e4E3FN0ZofP0kUPRbyebPFcwYHj4ilnC%2BftBjjAN1ZI%2FIdyo%2F6beX9WwBAvFXXDonc9X5z%2B9Cyng%2B%2BHoE%2Bmzb5t64sXHKpgB8Z7KHe6sUSJaMz2nbRICA9rN1Xjc7WMQ5jV44sk42Cs2tcAwZOU0Q0FfW%2FJEtDM%2BYuiyXjV0ctIsdIXN895EJoSGKzEixS%2BzKV8h3IM1lfZgTn0Mb1kdH67E9FZ1jms80Fm2AjypTxRPXngwvclGH10yVvQsBarhG%2F%2Fj%2BmB7YPXRggJ0tvIa9BMnHDsktPeHgZyEFEdRh1QJh9JNPSogLz7NDKLISivASbz3NeTNrhTCr3MEK5VopA9uObE7W4IjINb2QbtgMN7E%2BcAGOqUB3fqyapsOBT6Tz%2FNhTvvli%2F%2FLBX2wJZlIHkSkLKmdS5df93qfHucc1s8emW83Fs%2F7tYuS1CGFzbBhKwyxdDyvnot%2BULPGDm3B9QTif2jigPjRzIiQPMHqvyYKczFwua51sYLOyO3Z%2BhEQOSNDP%2FpceKnkJ8QWIXvstBz%2FCclQCMhzL3o%2FvM1PNr3udbjPOOS%2FeesmOCMP04g2T3Tj%2FTnIlLowq7Rp&X-Amz-Signature=7eeeff9aa3d963f345a3cd8957860ff2a4865b87545381fac479c47e754f847f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BJYQMTB%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvp%2ByCdJ0iyFG%2Fcj5F3OGSF5F9lj2EfujNWo3t7sEfpQIgHnN0iDDEToB7sS0Oxmmw%2Bl9VqxZ07UYtrDTcVsrTbdkqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOlpzVQ%2BmgRSl%2F1ARCrcA15viGn1Cc%2FJeoxcVgoCul02wFh149ldQIiauAaX636nnY8xuz81%2F5Jb62v2UWR2%2BvGJ6QOvl92%2BvYW7MNpenl8YLX12fbMUDtDYPjnvu1FwcAVuNmXAZ3bKkhi%2Bw9yR8DhsvuvkhgCib0FlKG8%2FPF3zeVbxsff8ClYhXABcxTC79qe%2B8bYcgfezQOOICoanScmtPgO7d41B6%2FsAwdG2zhphqe%2Bl8x5bhKM3gYHwkB3IfXx6G6PEz%2F%2Fnd0mpT1iRRMhdaetCBzg2XC7RkJ%2FihIjD1Dy9oRPlg%2Ff1EjNVxOCAeqhvjjDbL6bOGAAr6nceq5FqwtQKFXzgZxVPHx1W9VSpqM47xi3iFDdXRLE0kmlNAoWpVKmDioIY6pjZdwaMYkWIGm2dJCzr2sScXAenLtih%2FF1s5ir5%2BdSH9jxpy5Hb%2FGmWi5f%2BwXPdyEJozrMQd%2Byw7NmM0zErUBvS30NyQWSBfsj2j4W0Yppsc1I31x4LJ0GU4RmbDajesWrCUn5GCmofiySfS0%2BtX9uNbVzOzzMGGZzs%2BTdBHYCoWrwQD%2B0O%2FfkmSDODpw1BodUVv9bkc0edG54yjfIOI7jMWVi9jb5rsw2cwwxZyoJB1GRbv0SExoBxzEdPLNUE%2FnUZMPzE%2BcAGOqUBTBCGx3w3NmgIukdYL99U7dvMcVJpZhpPVLSy%2Bs%2BSZQxhraISd7LqKU30rbuKmScA69s%2BxKrmKZfsBhy8tlgGfKWPlW3ZgNp9XrfEyfgXz4oFwKeQVsudW49ZPYbr%2BtD8qaL8o74p0pmLm9lrhvcXZgQv2qmBBig5DqCj1h3pGtu8H2Izedu2RcPU%2BDrDt36rDmslxHZLhLOasIVelaWE%2BbzcDaNU&X-Amz-Signature=fdc15dc50c1b7e8f0b1eedcde98c8a94d1d29fd4d44713d41498318cb734a493&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466764SGW2M%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoEIE77qvO%2FFfu0VscWin4p6ImnoOg2BiY6IISd8gDhAiANL70XM9focNhyuHq%2FNas8iJ%2Fp%2FxhxApC48Bid8W1gYiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEsoTuWBi%2Fm9cPVyVKtwDidxtNSfBiqHryglQdUlVypTjcDTNz%2FxIneURD7K0s156Yvlnjai3sGWB89tQL%2B09eDh%2Bm2lzQZjopSTJuYe42XdwfxbkU3SMO6uycL5D0wZlYkc%2FYaRHZiwI3Bl93dt3SfQAYN2h2WABms7Ae2WUkUxwaM9rWbWcvpM6YvyollEFGVeJkWovpV7YmUqffSTpAwTCDm8%2FWc8YYuDv9iH9OJ7cn%2Bg%2FylReexotvnoQldHYAOwpE9jJ9zliBXdNRxfTxM90FTj4hPEX0%2FerqoM1W%2FUSLoGGdHSCkx3WZo3mShWhmbbZxaZpXnmGyBQzOlSIFK2pyWJLBG5webdHt1oHogHfR0cE0ry3wgun8Dkwe34a%2BqyymWObvBUrdomJOgMr4vytV4VBLxH0Xy4d%2FALRh1mpzHetbhLOWh7kCSTaQStIs76T0KoNrdt96RrGlkhIgSedGs2ETgkOF8oWVfvJ2%2F26Yf29k%2FQ6SaE7Tf7jiAJ2XWeX9KmVMJMTRVj2gJ%2BXFSwA1YKwb3lbK%2BPINRrGcFx35N0hMR4FNrqdGxVz9%2FmDND4dp8HB3R6WCZ6KY7jfW%2Fo%2FbzoWJ%2BZCdEWa%2B6LtvdaQvSuJgpNfpFh9MZ0JHbIarTKQY%2B2UabcdoZgw6cT5wAY6pgGnnYX7zqEUNRE88LN5gh8SlE6cAHERgvdXe9du%2BYuT7Ypd4kL8tfJV%2BbKwRx3H31E2PV65WCXOrHCRgJ4Knyg%2FCbd2p7G60Ns2rWiyb54k%2BL96%2BZdU2%2BDGUpTCbhxvuSKdgmF2chsDdIpRZSm%2Fbx%2FrpC84SNmZEGdpEKvLWR8evHPw9uUp5oGxSjLZ2b0CY9jK2xpbwd0OlvYpy9XygEuFGU7Ry3gJ&X-Amz-Signature=9ed68934ba91916e572aa7b324dadc3a2e80aae469fa3012375670f17d96fbce&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
