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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFJWBHAY%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1pjlwXSowykzWGPGe23nC78iDUX%2BVsWojduALhLG10wIgSn4D0v8LsZg3BriPMD4B9UQxwPszFhQT%2F5BqpCTyG1Aq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDb4qqanaP3Pjz7j6SrcAxCQurcDffMOTqpEkqwPC6vDRPMAFqYN70NdHabGFRynN6tjknkJ7ikMicdGxnEDA0GdmfMehYoXYKyUh4SfHzleRhHy5YKpFu05YnCnNF2g5ycWrY%2BUeIBdjCPRD4YqVEClNZAIIr7hDET7RHFY6TZ4XUoqB%2BvJqVplk2K1H6vK5LTZ8sNY9Gp%2B8aH5RVlegVQ4GekMmlWZC5uO5Y4RL%2By3ZCP6K7KTVQV%2FYRrGrZ%2F95TWFGcc1D0SeJ4qEuUgTGJH%2BvaMCXx2eO9pwin7%2FSf8%2F0Vto7%2BxsPzkP%2BTPUwNUxuoW7i9h2A1qUVjy9nfdJOW5SwNIRiNTcSlsOG%2BQOu83q2fKX%2FMQDYpaiHYt%2BfaI7yGByEc9Z6SlMch7pdlrpq1VVr9%2Bq%2BwWmy8OU%2BoC458BozNq0fNEmroH3HRn7aX1o%2BwNCP%2B%2F%2BHTJNDkhcIUm5IRk%2Br9%2BA%2BAV6DHqKBl%2FDh%2Btrw0eMDLsPFiOoL5tLV4XAZK6FzAru%2FL4PAZfSJuu%2FcqzVRadbf76XSIBUpUUDZoc%2FR5n5IEfsPT18KY%2F8o7kHDMVAaAcHWMkOx5RkcxV8%2FHqr%2FVCeRsnOPAHGvuq10JnptIOh6JA%2Ben8KZ7BGhxUHYM%2FetYRiEgJ4BwgGML3cmb8GOqUBmi0EghchWEDiT611iGlGWNB6ZgO8uEoG94aWF%2BD1PA2ZgCOX12WERqTlZ3wQx920IN3HD7S7W1BCnAtfHeb3611aoCSC59yHCTH8YJc5xkjz7IKXwVUQnO14QQMTuyB2pZ9BZXM5hF0Qrtei%2B9MhFPlhDejfxl7GOT9PFOnJ2vfSbUTxtWxsX9A4Tq4rNABkH02AQDjlBjDM6VqB1Gr6Fwe8i3%2BJ&X-Amz-Signature=2b80e79d007721e2ba1de2042d65b36578cc6ca89d53226ac477eb8a0ff0775a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFJWBHAY%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1pjlwXSowykzWGPGe23nC78iDUX%2BVsWojduALhLG10wIgSn4D0v8LsZg3BriPMD4B9UQxwPszFhQT%2F5BqpCTyG1Aq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDb4qqanaP3Pjz7j6SrcAxCQurcDffMOTqpEkqwPC6vDRPMAFqYN70NdHabGFRynN6tjknkJ7ikMicdGxnEDA0GdmfMehYoXYKyUh4SfHzleRhHy5YKpFu05YnCnNF2g5ycWrY%2BUeIBdjCPRD4YqVEClNZAIIr7hDET7RHFY6TZ4XUoqB%2BvJqVplk2K1H6vK5LTZ8sNY9Gp%2B8aH5RVlegVQ4GekMmlWZC5uO5Y4RL%2By3ZCP6K7KTVQV%2FYRrGrZ%2F95TWFGcc1D0SeJ4qEuUgTGJH%2BvaMCXx2eO9pwin7%2FSf8%2F0Vto7%2BxsPzkP%2BTPUwNUxuoW7i9h2A1qUVjy9nfdJOW5SwNIRiNTcSlsOG%2BQOu83q2fKX%2FMQDYpaiHYt%2BfaI7yGByEc9Z6SlMch7pdlrpq1VVr9%2Bq%2BwWmy8OU%2BoC458BozNq0fNEmroH3HRn7aX1o%2BwNCP%2B%2F%2BHTJNDkhcIUm5IRk%2Br9%2BA%2BAV6DHqKBl%2FDh%2Btrw0eMDLsPFiOoL5tLV4XAZK6FzAru%2FL4PAZfSJuu%2FcqzVRadbf76XSIBUpUUDZoc%2FR5n5IEfsPT18KY%2F8o7kHDMVAaAcHWMkOx5RkcxV8%2FHqr%2FVCeRsnOPAHGvuq10JnptIOh6JA%2Ben8KZ7BGhxUHYM%2FetYRiEgJ4BwgGML3cmb8GOqUBmi0EghchWEDiT611iGlGWNB6ZgO8uEoG94aWF%2BD1PA2ZgCOX12WERqTlZ3wQx920IN3HD7S7W1BCnAtfHeb3611aoCSC59yHCTH8YJc5xkjz7IKXwVUQnO14QQMTuyB2pZ9BZXM5hF0Qrtei%2B9MhFPlhDejfxl7GOT9PFOnJ2vfSbUTxtWxsX9A4Tq4rNABkH02AQDjlBjDM6VqB1Gr6Fwe8i3%2BJ&X-Amz-Signature=766a9f017e00f4d3f5e07875168847b33fd9438dc16529ac8f70e26fac7659da&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6U3ZTZM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmMAtJYG%2Bc%2B4ky1E%2FbX0MOAMaCDSZYbQT0h5fdquxCGAiAmIsJ%2FFM%2Bxch4qS%2BKmlwQhDsnOCYDdYGFw9R5QZ5XYDir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMAgfrS%2BCjAQJEZIjlKtwDOsWUFWit0lfBCKrp6oSOo6ZPnCqwMckBHn66h2vi209HJlxbJBzPPdNKz5eJ18XG8KpMHq8ahvkmg%2FNiHZ5%2FXGFXAHsry9H55dx2DVWQvuJtrOEIMm5SCguj9%2B5uWeAnBfvQhpm%2F%2FB69ngIrRbifkF4DfuVYj2f14KUenDGJ30S%2BxH98nsJtr6nj22EhF0dqEvqkBnazL%2BitxNx2p3K%2F%2BWDZj9YlxFmC7OmyY8yFoReXaQwDwq%2FwvyRNPJ6igT0FtStKxdwKc5zoFKqzHdduGDpzBbSjiX9kt9yfFHNxkUiDoPsKkegO1pOkYKN5OGeDmyUklUWzeV9DLlN1wXttq02iEuxUlhpoPB8FSdWn747N4Ab2YZ%2Blbq97Z29plSQHF7jGRgjMmo12bWfZ1RzwI%2FXYdXsIX0P99dPC1ONwlruPjOA2tDShzeD1SCffo9mC4zPohPQI8wuamXUQH7pBAH4cIojsdrh2s1Ip8mpw%2Bi9imT4uvNJGpQQ3nL5fwrD0K%2BpVF0zAydD2nKXp9kBEemAffLMS2CXLCN7oCwvt5ZlLtWgfqtSbWeeK%2BEuPKY0jCvvejG8LwygF5B1ZzOqdoDs05%2FpzVRhgzTWL9NTJ93OoVcxdosrkgHrSuEcwg9uZvwY6pgGFlGfa6pMPaDTSf08xrzeVdj5TACQcVgKT2btlZfAtl389bUj6xgTkMa2OGbJY71n4wcgTH3QIT8HdL1b7k8NW5qLUZBObZjF5LdxLa99do%2Bjk9K8rMBRmp%2Bems2pNsPVBrDxZC9wWFIA1LEDZtxklFQzMiQmaY56lV5AR5qsqT43WqW8SKrJjod9pm89bMgZUIQTpvRXyCMlTRcZI7NoOLRWHAW7J&X-Amz-Signature=302ad597f32abf41e521810bca4295aae76bda71016e31e818ae6f24982df5b7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4HBWWHJ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERGeiNEWg6T9d6c7ToyX1%2B3YCxef%2Bn1GWa1bPT7lTZIAiEAgsCHRAzMW4RqGc%2Fy%2FP8CuztpgRy61ycGlLX9LkGwyPMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOR9tfuBUq5F6aCEQSrcA9Sfqd0t44dmu00MNFlL3Wgfyy2cMmmVxONVy6xmsYo5MFlbt12nd9aiOqO7VPY3ojAt4q0KdQpSTVRX1umsvQJXW2smL8LNr8jyRoIX6XUB2tqBXTSGuYsm5xy3jIdQ%2Fd8SnDZQqC1S656igPRXjlbXAi%2FIYQufrCZMzvldqUdgyG98SWcFLSGjGFoTkwSBrv1QTedZUOMtdgXNDxpyVfg5CEaq2zau7QwRgrTrIYNP5Nr23epYeujunW6YKxU%2BgLKLVCw3W6qvhd3VVIFXD%2BRpBHh3wDsoSujOxULbwCqqDT%2BlWX%2FkDNQeyho2RT5IXv%2FLqwXev1jABFVR30J%2FVZYYl%2FgQ98RfkprmSLoINMqeK9P30NDCg9IhZ5jUopucLmaowQHTpARjQD%2B6E%2BCII%2BSUrB%2FLcw%2Fg9Afyc8cwU%2FCO%2F6K9vErDEaM82bZVUOtSXASMrCFnsSLrkxzFuJYgLi6CNgGURPjwVFzIQjWh3Sls%2BwSVlQt8mouPDiX1rh4vT3lkH%2BeNcNS8u0Rn6IiLIXcGb1zb7zTE9WtzktiPOvzFrxqjUvoTD1aH4XEUz%2FkT%2BuE%2FqhHOy9wWulOAJEoVOzMw%2BX2SPOiF7pfI9KuWdXtbY0fBW7tXQw%2F%2BfDekMOzbmb8GOqUB0iVDs0nnS13Cm%2Fwr9xoeznUVpCcMguLGjo2Vh%2FPlhPTETldcOJ1zjfH1%2Blc2GwGPtitLm%2FR8%2B3L7o%2BJv7oJMAsq4jQefgeWBddnCeXzW4ODXx5obuitIrot0TPDHJrXvE9PPFvm%2BH5b6XSldvtgUA0hASktTwq42iGbx95Zq48T2EGkxrJ08Ko4ycjgfaOeuvC8v48OgDYky3PCh6g2veZl0ijqo&X-Amz-Signature=8ce603199b54ce3f8784b9aa8adedc29c4d9387e1d7469040ea39a5244ddcc3b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFJWBHAY%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1pjlwXSowykzWGPGe23nC78iDUX%2BVsWojduALhLG10wIgSn4D0v8LsZg3BriPMD4B9UQxwPszFhQT%2F5BqpCTyG1Aq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDb4qqanaP3Pjz7j6SrcAxCQurcDffMOTqpEkqwPC6vDRPMAFqYN70NdHabGFRynN6tjknkJ7ikMicdGxnEDA0GdmfMehYoXYKyUh4SfHzleRhHy5YKpFu05YnCnNF2g5ycWrY%2BUeIBdjCPRD4YqVEClNZAIIr7hDET7RHFY6TZ4XUoqB%2BvJqVplk2K1H6vK5LTZ8sNY9Gp%2B8aH5RVlegVQ4GekMmlWZC5uO5Y4RL%2By3ZCP6K7KTVQV%2FYRrGrZ%2F95TWFGcc1D0SeJ4qEuUgTGJH%2BvaMCXx2eO9pwin7%2FSf8%2F0Vto7%2BxsPzkP%2BTPUwNUxuoW7i9h2A1qUVjy9nfdJOW5SwNIRiNTcSlsOG%2BQOu83q2fKX%2FMQDYpaiHYt%2BfaI7yGByEc9Z6SlMch7pdlrpq1VVr9%2Bq%2BwWmy8OU%2BoC458BozNq0fNEmroH3HRn7aX1o%2BwNCP%2B%2F%2BHTJNDkhcIUm5IRk%2Br9%2BA%2BAV6DHqKBl%2FDh%2Btrw0eMDLsPFiOoL5tLV4XAZK6FzAru%2FL4PAZfSJuu%2FcqzVRadbf76XSIBUpUUDZoc%2FR5n5IEfsPT18KY%2F8o7kHDMVAaAcHWMkOx5RkcxV8%2FHqr%2FVCeRsnOPAHGvuq10JnptIOh6JA%2Ben8KZ7BGhxUHYM%2FetYRiEgJ4BwgGML3cmb8GOqUBmi0EghchWEDiT611iGlGWNB6ZgO8uEoG94aWF%2BD1PA2ZgCOX12WERqTlZ3wQx920IN3HD7S7W1BCnAtfHeb3611aoCSC59yHCTH8YJc5xkjz7IKXwVUQnO14QQMTuyB2pZ9BZXM5hF0Qrtei%2B9MhFPlhDejfxl7GOT9PFOnJ2vfSbUTxtWxsX9A4Tq4rNABkH02AQDjlBjDM6VqB1Gr6Fwe8i3%2BJ&X-Amz-Signature=1a6ed0bd47248f907688624ef1c2f604d0c5e6e3888c1c18ad43a048d9648c72&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
