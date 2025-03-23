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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K5KXKJP%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCaSXOG8PeYK5hCStb6tIiSqTDypUaDsmRckQzJnedcAIhALFVTTJ%2FHkNIQ3OMZHQEXdRe6kEBNJjplgvZMr%2Fd73jVKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOXBFURsI6S74dQaEq3AP6SWN1LKSCBHTqXMZf3wHsJRpfIqux6bhY95mAAAQaTXPYoXAcSvFHGTFZ%2BhY5HAdGqV99h4XLdJU%2BZmQvOXKo15W4lKZ9oB98REB6pSlCe%2BSsaj3n7cP2iIqsvlCMndwxFfSUDIrrAsn1DB3TTO21lkOuG1%2FpLOm9Fi0AM4Bme9Gdmteq3l7x4zMW%2BYqOxlKlssHdRDEql0oMrac%2BO%2Fas9KqedT0XzxHjjtySFpV0m0XMMdb1jwe3JVJJ7PteVmb7KwgJCPR35Zy6ykHVOVWkhsl%2FL61aZRSaVD5bJqtT6krR0yFWtH0mSUkKIPlopequabasP6EL3I015xiI4GGp6%2BUNDjWAVDeA8LhqaVegMF%2FP0sLdO5uAmGyJlaT%2BfcK%2FgRcXCQrl3s2mIkHVq3Z1Guh63H2dWHwtU6clAJ2FGg9AakbFD3ElaXEnFECkVC%2BGVCdBCj48s7K%2Fyp9a%2BOOfBEmMpQ%2Fnv4bFkNlVDlGvT%2BK%2BEagn7zlbG73NHKHdkFFjqyZcHMNImJryWqT0vo3nlLt0sPTFrtqm5wyYguN32u0uhonXNV2PjnqEzIBFfYDqyHOM2IGWm0WJqRCNJMDDugZ2ixhzOiBeNmgMrya1dhFVIohGzqaKLvF8FjC%2Fq4G%2FBjqkAbqJs049ulQdG1enjB3iM4p808nLsYmihKOfcQsLnAw2HBC84EHFoBuz7RsNIRCChP%2Bv22fm5tViiBLTRksbZcUT0Z3R0I7W45QmUJoHTC0hRd9%2F6VeEs8RB%2FqYi0R97ZKZDOBQ0nN2%2B4bP3XcdReOpzuVf%2BURESAdRAEinB3oQD%2B8iwsBiGvRLp%2FNlD9NfT4Cl9J666MnRfaX%2FWLJlOYnbYVuW5&X-Amz-Signature=fed63f65c8230163b929fc5a8dd2d8de01af88a99aa2709cbc4c79a4af17d125&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K5KXKJP%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCaSXOG8PeYK5hCStb6tIiSqTDypUaDsmRckQzJnedcAIhALFVTTJ%2FHkNIQ3OMZHQEXdRe6kEBNJjplgvZMr%2Fd73jVKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOXBFURsI6S74dQaEq3AP6SWN1LKSCBHTqXMZf3wHsJRpfIqux6bhY95mAAAQaTXPYoXAcSvFHGTFZ%2BhY5HAdGqV99h4XLdJU%2BZmQvOXKo15W4lKZ9oB98REB6pSlCe%2BSsaj3n7cP2iIqsvlCMndwxFfSUDIrrAsn1DB3TTO21lkOuG1%2FpLOm9Fi0AM4Bme9Gdmteq3l7x4zMW%2BYqOxlKlssHdRDEql0oMrac%2BO%2Fas9KqedT0XzxHjjtySFpV0m0XMMdb1jwe3JVJJ7PteVmb7KwgJCPR35Zy6ykHVOVWkhsl%2FL61aZRSaVD5bJqtT6krR0yFWtH0mSUkKIPlopequabasP6EL3I015xiI4GGp6%2BUNDjWAVDeA8LhqaVegMF%2FP0sLdO5uAmGyJlaT%2BfcK%2FgRcXCQrl3s2mIkHVq3Z1Guh63H2dWHwtU6clAJ2FGg9AakbFD3ElaXEnFECkVC%2BGVCdBCj48s7K%2Fyp9a%2BOOfBEmMpQ%2Fnv4bFkNlVDlGvT%2BK%2BEagn7zlbG73NHKHdkFFjqyZcHMNImJryWqT0vo3nlLt0sPTFrtqm5wyYguN32u0uhonXNV2PjnqEzIBFfYDqyHOM2IGWm0WJqRCNJMDDugZ2ixhzOiBeNmgMrya1dhFVIohGzqaKLvF8FjC%2Fq4G%2FBjqkAbqJs049ulQdG1enjB3iM4p808nLsYmihKOfcQsLnAw2HBC84EHFoBuz7RsNIRCChP%2Bv22fm5tViiBLTRksbZcUT0Z3R0I7W45QmUJoHTC0hRd9%2F6VeEs8RB%2FqYi0R97ZKZDOBQ0nN2%2B4bP3XcdReOpzuVf%2BURESAdRAEinB3oQD%2B8iwsBiGvRLp%2FNlD9NfT4Cl9J666MnRfaX%2FWLJlOYnbYVuW5&X-Amz-Signature=39f09a7db96915f6229cf197632079db20955f1aa5b3f3ca0d03c62e5ac712ed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLZLI4SR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2RYRbiBm3uwDrpcUsQ16rIO1CA0fbbtvi0%2B9aLG9LIAIhAKPU208xnS%2FaSxQjK%2FYKGo%2FSbYbC8%2BjXxsdXXIpeQKrVKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMZegj1pxfjkuQa8cq3AMQ4kULfZ3CW2tem5E3DhQOQVwDTboJThwrM%2FeszFn%2FidkyXn4KY0630z23JtSz5JgsM%2BHnUyQBWVVEakbukBJacEsiMKJG5QgjfBr9edEhKDabXTFVwgC8KirIVfuftz8qSV0i3z704Ql16y6lSq3hYxgH%2B8Y0ZgauX6GfGAPP2FS7prR27XXo%2FYTVpTJLlOy8LIxg03cb%2BTsaWXSwjd83Ga0FslbrETzNzPSUFjzZeUBWmi08ZFjN9gdtDEmEJj32IIHsipUkzZjK%2B9SqksMn6ZbscSMBS5ONLYz1YVLSpV7B30INFsUQ89u0vvZySJFRDjXwc0AA65jtphcY4lsMxabS6GJEHdsG4lY38HyC5rXNE2%2BG%2F0s%2Bx81IoWkaWjktVtb3C0myCF%2BryMweZ%2BftFTUYZsyIUsrrq0BgTwy9u9imBVjXmqBM1u1rSHxNXvp%2BtofYVsrHQZFTwCP7ud1n6GAETMrrNhA9qnKScec8tVG0qn7iodirRmXLH%2FmBjB6Qyq923jXbW%2FkjObf13g5gpxJu7GFw03vKmcEsCfqtVPAT7AH%2B%2Bipdiz7x61b1BiaNgbKV8Y3wHaf3iXB%2FJru%2F4JZoJ5eSwSe3roahe3f0xqRXO2NFP9rsVjH%2F9jCtrIG%2FBjqkAbuwQIhwfz9FGrTTNzWQBdku4VWsUyR0dIu8QigZTJSPIUkXBgUgQQDr7xfng6zZNUoN91LZeeGR%2FHxMTnZP8uwo4mpKk9MCy0Edw5IjzS6elia2YwpAeZjGH2sg%2FCdJ2b5YbFHIsw3BnyMRjdAU7w4pROQZdnmVYez1nZEiYwjSEKrLmEMzDcK1X2CyU3zinB74bhUZPgIZ%2FED7lZx9ZFei2A%2FT&X-Amz-Signature=857f3d2967868ec1821978eff40f864457104942a7a8e2e0ad7fecc5944867c4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZDEDSRO%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzUhkyyO7kPYH0UpZognrA9AUIO%2FhcNO37%2Fvuzx594FAiEA%2Bx7vnfEME8gu%2FhbcWM8NO9Bs7j5yr7SR2mBELg5S1ywqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEN3%2BmNg7WdYyuW5vircA9Hr9qYjbyKqrBRL2DsMfdTc4kHAvo0eK6H4B6mUCffafSljXYmoFOePnZshshrJK0928x3PheflmHJmauB9u2ohpX48KqlDQIbRdLUIVvNpyVFzPQe9aqczZJSt4jwVtCxDYyZc5fIcY1ex2nuMIi0SeYbGZzZuLCJVLZRMXCJn2W66sicgE0g8hu1zer2uMx0sEdOnLZ8GlEH0rWEML6xM%2B18Cct%2FiHXHXC3gtuTLqUbNrcqiLpL%2FRPsw4rrkAgrEzma78UuXD98dwaPYJBXjYpl6Rg%2BM5vqWD3IVPbaTy52WuByruF8AkTiykFnYPgw%2Fwqm%2FfXR5LksvKI8ElMsNm67HPerCg0MnTgBv9aBHLmPQW9tIkSpVg5QV%2BNA3f%2FRk7iItGP4D25%2BCxmN4UhDTcPyp8KqLxwa%2F5fqE7Mk3TjeYaWNftdei6KudXdfFvCer68q8n%2FPGTI%2FEh4gmw%2FErnKrc9NuazlIUOf5VkV1Jk%2FuW9DhU9AT%2BVYdDlL9ZoTnwR9INpjRSATH%2BHBmwVezimxP%2B47jrqL6nlg0CqstfFiDvgc3d%2BzdmPXPL3hKG9kOwpBErFu%2F%2BD2jwqvwwHeXHLbYkgJsLp%2FJHpR%2BFWP9aULcGgHR4RE%2Bd3etUFMPirgb8GOqUB50aUHAjc%2BYc6kmiGRJrxup%2BdqAZyiM95j52rOd3BkHTHyKm8Sl8BrzEEBa2kyPTXfR4XybppMF%2FcYJa7ps9cZu1UDB5lBi0SrSMD5kMvUmjOa7%2Bf%2B28QBDA4kvqiPQDgyLfOaEfQ2KNDN1HFNnyVw%2FYWfkKriMlhfeguHujdS%2FPGe%2BsEsDXWubx1iFUkliqHPbFn%2FA7pjHMnFz7m7yFUkq27mKU0&X-Amz-Signature=9073c4803ce54fb8c743aeefdce93fc8b811f348bc95680214dad3b1238f2de2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K5KXKJP%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCaSXOG8PeYK5hCStb6tIiSqTDypUaDsmRckQzJnedcAIhALFVTTJ%2FHkNIQ3OMZHQEXdRe6kEBNJjplgvZMr%2Fd73jVKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOXBFURsI6S74dQaEq3AP6SWN1LKSCBHTqXMZf3wHsJRpfIqux6bhY95mAAAQaTXPYoXAcSvFHGTFZ%2BhY5HAdGqV99h4XLdJU%2BZmQvOXKo15W4lKZ9oB98REB6pSlCe%2BSsaj3n7cP2iIqsvlCMndwxFfSUDIrrAsn1DB3TTO21lkOuG1%2FpLOm9Fi0AM4Bme9Gdmteq3l7x4zMW%2BYqOxlKlssHdRDEql0oMrac%2BO%2Fas9KqedT0XzxHjjtySFpV0m0XMMdb1jwe3JVJJ7PteVmb7KwgJCPR35Zy6ykHVOVWkhsl%2FL61aZRSaVD5bJqtT6krR0yFWtH0mSUkKIPlopequabasP6EL3I015xiI4GGp6%2BUNDjWAVDeA8LhqaVegMF%2FP0sLdO5uAmGyJlaT%2BfcK%2FgRcXCQrl3s2mIkHVq3Z1Guh63H2dWHwtU6clAJ2FGg9AakbFD3ElaXEnFECkVC%2BGVCdBCj48s7K%2Fyp9a%2BOOfBEmMpQ%2Fnv4bFkNlVDlGvT%2BK%2BEagn7zlbG73NHKHdkFFjqyZcHMNImJryWqT0vo3nlLt0sPTFrtqm5wyYguN32u0uhonXNV2PjnqEzIBFfYDqyHOM2IGWm0WJqRCNJMDDugZ2ixhzOiBeNmgMrya1dhFVIohGzqaKLvF8FjC%2Fq4G%2FBjqkAbqJs049ulQdG1enjB3iM4p808nLsYmihKOfcQsLnAw2HBC84EHFoBuz7RsNIRCChP%2Bv22fm5tViiBLTRksbZcUT0Z3R0I7W45QmUJoHTC0hRd9%2F6VeEs8RB%2FqYi0R97ZKZDOBQ0nN2%2B4bP3XcdReOpzuVf%2BURESAdRAEinB3oQD%2B8iwsBiGvRLp%2FNlD9NfT4Cl9J666MnRfaX%2FWLJlOYnbYVuW5&X-Amz-Signature=4b0f680fc0cc23c0380f6597af838d27b6645807e5f988cf8ad4663a884586b3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
