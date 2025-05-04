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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNYMEX3B%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJFMEMCIDZGW%2FESwRbyPNn4oeN87R8KIV5ZCagFn5IYHKrU5Zt7Ah9Y0p0g4wuoLNm43IhFuPcMgP27F0D8btW%2FueRpv75DKv8DCBQQABoMNjM3NDIzMTgzODA1Igz%2FbKQNizKY4iHxbn8q3AMr8MVLtiuzelq%2FFMWSE807T3iE6%2B7FVKApSA%2FfLQBnFVut3%2Bqohfmb0gu9BGn5YAbm8gPGASA71mZFz57dZIM3VKGtjng0vb9a58G4XMdAQqFhIIQawwkS0Od7dmba4W9mLWX7n0iWgBGO5QC1JOTWNNmsDIuOPybN%2FUKbcL%2Bx%2BS9tUcHo8TJN04CxAn8mk5em1Dw2Q5jAQRe%2B8tfc9cZGCKtZgodxo%2FApj7n3792wHt%2FzcdyBij49yYG9iAYCPypUlOfUWevtprv8V5w9kZew9cbefrDwZsWN6NfG5mvqpXopzJYwMFPNrUwwGE5iJj97jN69R03p5y%2FvhOWop0RNT43xJQL0GXuKHPk7a5fL8l7EqvFz0sQtwgZsg1BMFFbhhOxE9mLodhHRnCnEQKjK3gv9000sHUh3e02upzctrudyJMTG2Rn5Ra3Ni35G%2FTNxsZ7g1Ut7y0Zlnvee9NoKWu9KIfeAiQRdFEJ92bK0osmKqfaLEAycJL1Tlx7s4qHCVnHZ271vJ6%2FeOyVuJSW9lNYp6ZYECMOTsiQieXEKWwAJoxN3Z1KGHZaAIU%2FqT4PzpNxn1hZRmwmtzB3sVRWEGumk3vCgmVSctSBwuk4PvS1OuHWUgtOzw8M2MzCsjt3ABjqnAbseaw05c1J5wP3TMd61Z6BjN5NEA3YisZhGaDU4vKCB4%2FzUq7fOuOreS6%2BAMUnazvi0%2FDAQC39oawx5AP83AdxXpquzI%2FNh2TCgqNI%2Baw30hetkzyIkzooWIuCidy4nGXKhiPyhC4OblY5JdDJaaxW5nx%2BUgblM1ihrbre%2FbfxteR2u%2FAQvyKjMYG51Q%2Fi%2Bv%2BUULWQWWY%2F%2Bw1DNDZmFw%2B3cphZ3O7Ne&X-Amz-Signature=3191edd2f6b41dcc912ede6d4021a9990eb5cc31546aa7a9bbc44005ea30bacd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNYMEX3B%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJFMEMCIDZGW%2FESwRbyPNn4oeN87R8KIV5ZCagFn5IYHKrU5Zt7Ah9Y0p0g4wuoLNm43IhFuPcMgP27F0D8btW%2FueRpv75DKv8DCBQQABoMNjM3NDIzMTgzODA1Igz%2FbKQNizKY4iHxbn8q3AMr8MVLtiuzelq%2FFMWSE807T3iE6%2B7FVKApSA%2FfLQBnFVut3%2Bqohfmb0gu9BGn5YAbm8gPGASA71mZFz57dZIM3VKGtjng0vb9a58G4XMdAQqFhIIQawwkS0Od7dmba4W9mLWX7n0iWgBGO5QC1JOTWNNmsDIuOPybN%2FUKbcL%2Bx%2BS9tUcHo8TJN04CxAn8mk5em1Dw2Q5jAQRe%2B8tfc9cZGCKtZgodxo%2FApj7n3792wHt%2FzcdyBij49yYG9iAYCPypUlOfUWevtprv8V5w9kZew9cbefrDwZsWN6NfG5mvqpXopzJYwMFPNrUwwGE5iJj97jN69R03p5y%2FvhOWop0RNT43xJQL0GXuKHPk7a5fL8l7EqvFz0sQtwgZsg1BMFFbhhOxE9mLodhHRnCnEQKjK3gv9000sHUh3e02upzctrudyJMTG2Rn5Ra3Ni35G%2FTNxsZ7g1Ut7y0Zlnvee9NoKWu9KIfeAiQRdFEJ92bK0osmKqfaLEAycJL1Tlx7s4qHCVnHZ271vJ6%2FeOyVuJSW9lNYp6ZYECMOTsiQieXEKWwAJoxN3Z1KGHZaAIU%2FqT4PzpNxn1hZRmwmtzB3sVRWEGumk3vCgmVSctSBwuk4PvS1OuHWUgtOzw8M2MzCsjt3ABjqnAbseaw05c1J5wP3TMd61Z6BjN5NEA3YisZhGaDU4vKCB4%2FzUq7fOuOreS6%2BAMUnazvi0%2FDAQC39oawx5AP83AdxXpquzI%2FNh2TCgqNI%2Baw30hetkzyIkzooWIuCidy4nGXKhiPyhC4OblY5JdDJaaxW5nx%2BUgblM1ihrbre%2FbfxteR2u%2FAQvyKjMYG51Q%2Fi%2Bv%2BUULWQWWY%2F%2Bw1DNDZmFw%2B3cphZ3O7Ne&X-Amz-Signature=5cf735ad80d10d2f1f4ba672613c110e4fcde22a8e47c24872c5f3077fb8d33e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNYMEX3B%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJFMEMCIDZGW%2FESwRbyPNn4oeN87R8KIV5ZCagFn5IYHKrU5Zt7Ah9Y0p0g4wuoLNm43IhFuPcMgP27F0D8btW%2FueRpv75DKv8DCBQQABoMNjM3NDIzMTgzODA1Igz%2FbKQNizKY4iHxbn8q3AMr8MVLtiuzelq%2FFMWSE807T3iE6%2B7FVKApSA%2FfLQBnFVut3%2Bqohfmb0gu9BGn5YAbm8gPGASA71mZFz57dZIM3VKGtjng0vb9a58G4XMdAQqFhIIQawwkS0Od7dmba4W9mLWX7n0iWgBGO5QC1JOTWNNmsDIuOPybN%2FUKbcL%2Bx%2BS9tUcHo8TJN04CxAn8mk5em1Dw2Q5jAQRe%2B8tfc9cZGCKtZgodxo%2FApj7n3792wHt%2FzcdyBij49yYG9iAYCPypUlOfUWevtprv8V5w9kZew9cbefrDwZsWN6NfG5mvqpXopzJYwMFPNrUwwGE5iJj97jN69R03p5y%2FvhOWop0RNT43xJQL0GXuKHPk7a5fL8l7EqvFz0sQtwgZsg1BMFFbhhOxE9mLodhHRnCnEQKjK3gv9000sHUh3e02upzctrudyJMTG2Rn5Ra3Ni35G%2FTNxsZ7g1Ut7y0Zlnvee9NoKWu9KIfeAiQRdFEJ92bK0osmKqfaLEAycJL1Tlx7s4qHCVnHZ271vJ6%2FeOyVuJSW9lNYp6ZYECMOTsiQieXEKWwAJoxN3Z1KGHZaAIU%2FqT4PzpNxn1hZRmwmtzB3sVRWEGumk3vCgmVSctSBwuk4PvS1OuHWUgtOzw8M2MzCsjt3ABjqnAbseaw05c1J5wP3TMd61Z6BjN5NEA3YisZhGaDU4vKCB4%2FzUq7fOuOreS6%2BAMUnazvi0%2FDAQC39oawx5AP83AdxXpquzI%2FNh2TCgqNI%2Baw30hetkzyIkzooWIuCidy4nGXKhiPyhC4OblY5JdDJaaxW5nx%2BUgblM1ihrbre%2FbfxteR2u%2FAQvyKjMYG51Q%2Fi%2Bv%2BUULWQWWY%2F%2Bw1DNDZmFw%2B3cphZ3O7Ne&X-Amz-Signature=20a916e37e90f4a9aea1b91d4d816b4d5d4b641e731c51ca5806ac836ce5251a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CI2ABF3%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCai2y9DrN38XPh0p2CgYOf6iDmiEv0IpaODUE29lGx5QIge7Cy8yC7X3fqJDYaikxeGnbXtoFmz1vWE9pkAzWY%2BCAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDFBU2Fxe2wmZdNt2ASrcA1QQNVp4BueOb%2BpRRUQT%2B2KRXFd3%2FRC6iGpyy2ti30EcRTbkzR5t%2BJo%2B6RXhTIuMIeWzHVTEpaeTM%2B%2BW8%2B%2BN8kb95QIdU4zcV59%2B37cjzKU5PnM2HYsxKK5DHp%2FvB%2FRiMBeW7ejY%2Bf%2FQgVMUXVoRWRJMCKgm7KaFyZ0kI%2F7j9hyNNgO7p259x6ct0pYR88Iet0aE4oGa7QnK7itjbRWe6mL4MCjdRR3qPu3wiA8ur6v%2Fwnm7WwH3S3rp230HdBjw2vDCrAVha%2BjlbCnRD%2FwT50NeyG9z%2BwJISngcEPrNAa8A4uowGQcHjzePa2a%2FROZARrJfHWElGFmsuFwyvjoX%2FcrRuknowM3nvpbhgTC16u%2Bo686vpcJncfc68FEgo7tWQlHCoSuIj04Iplyr3%2BeRDKxwxSQzf%2Bm6bd4dK7R6xJ4qJkEiFdI5VDqgE218TiPrKXQbTeFA9m1BikuCEIRFa7z3OG0CQyhlPAQZbi3UnGH80J%2BVwQpnqWeVZtCF%2BSkTsl10%2FuiV%2FAAXTtAeVLMIclRsPfecClQaXSHm7Ta5U83o%2FHDu6M6q2Flj6BmXue8iP4OdCf5cdwTmSP6omnF6eh9EZIXp5DLTn0eNSh9gCrzvZTdDPky%2BuRcWKKZqMKeP3cAGOqUBrbKFAG3hI2IqjiyuIjyyvJomD5RXFX2Z8Yxn%2FQJBHJZWxsQfucbM7ufqD%2BiR36IHzPaBFhLkEG2li%2BqdJTle1JF%2BcyqqBIwDp4ZtE1luEQuP6%2BrbyXgp0yDJstfDLgV0lBuV54lo75GdSRxSE2Q2N5PvwN1EzkC6U0whzDhYlZGTUdxjgiv2htZzqv6tGPfOzVk%2BBToIQMiYCCBNSAPOOGvVBQB9&X-Amz-Signature=522e8aa564a3958feb06ee644f07c8f46e537c7394999ab3fee596fed6df8fdd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664326TTOX%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIB00mdcx2WXJpTvJbRWZi%2FGb5N8mE%2FQMpit9SptUutpIAiA0UB3rDe5vD6xnoOU6L%2FMshxp7UaNrWzDBMY8WmVh2fir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMHFnSj5Yrpyq08UnJKtwDFvFyvUZBfFeGZ8fWzGNL2xuU%2Fo%2Br5PwZlGb41%2BHgnmU%2FMeL1RyLgOwJKmxFT8N6h0oXy8PW3OVeJvIGA28byW%2FCqCic8ft6XifxRpw9%2BvhOkZkZAP6bh2COiNwuABrWhzzsFSK%2Bmjf2Zi2hN1MJjSGfI3G8%2FqvB%2FkoV%2BXnAcYrgk9zlQISdxZN6Xjs%2BmcqwUCk1VR0uUAbjKU6PPvrBSFkHWVt62pPdBj0myYZHOnXhp815IoRkkQ8SOYwPuqpfE61ff%2Fqn4u4I2EFqfSGu9YJbtsH0RLGT5Abv6VkxsWSmPStstaAovQUcUgz%2FipcdaFYmZQLFQXITDRzVlY3hzB1nZ8Q6sACDCe7V4ioaUD13jIbkXBe0fiPB2UuaPaisVV%2FI0VveMPGQQ24BC6sCb3coy6qJTV2Qz%2BkgPtldc5w9o1fqPpXMh7DhSxJM2r4ZNORuYh9kDygiws2TuGxZ8J5p8hSM4iZpVGfZSwSSYnhvbH%2FEPm70byOVNCmfnZ0r90xQ66O8jKGsd2HE8Ng38FoKGRLQPlPaJRmnITecUxWxyX63T4rOFiC25DRkjG6dsN19nDXEm%2BqPp1F5TaNg3VgxMHS14h6TaCdk%2BWodQiX5foI%2FQG75Qy%2FxZgSEwjJDdwAY6pgFuGGsfjSXqK76r1cRM5qagSmYqpSSd6nNlmX2%2FXHRdYTZ9y5wJx%2Ft0sfgxi8wKwYGuFD%2BXnHxDB%2Ftu4MphL3GgT5rUMdEbpz5lFAncNESj0IE%2BvdkGm9FUYHRQWIAzlLLltYvF%2FHbDG6qj65o%2ByFBzXI2qQ0wkwVRMEwBANjanzY1yVeg0%2F5lX49OEK3QdYmatSY1qlHhKKx%2FQLzzSs4NV76oPdGPd&X-Amz-Signature=ca44f4ee267570fdf3b3bee19b002b94fce505e1850edc3659006bc57e9f0419&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNYMEX3B%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJFMEMCIDZGW%2FESwRbyPNn4oeN87R8KIV5ZCagFn5IYHKrU5Zt7Ah9Y0p0g4wuoLNm43IhFuPcMgP27F0D8btW%2FueRpv75DKv8DCBQQABoMNjM3NDIzMTgzODA1Igz%2FbKQNizKY4iHxbn8q3AMr8MVLtiuzelq%2FFMWSE807T3iE6%2B7FVKApSA%2FfLQBnFVut3%2Bqohfmb0gu9BGn5YAbm8gPGASA71mZFz57dZIM3VKGtjng0vb9a58G4XMdAQqFhIIQawwkS0Od7dmba4W9mLWX7n0iWgBGO5QC1JOTWNNmsDIuOPybN%2FUKbcL%2Bx%2BS9tUcHo8TJN04CxAn8mk5em1Dw2Q5jAQRe%2B8tfc9cZGCKtZgodxo%2FApj7n3792wHt%2FzcdyBij49yYG9iAYCPypUlOfUWevtprv8V5w9kZew9cbefrDwZsWN6NfG5mvqpXopzJYwMFPNrUwwGE5iJj97jN69R03p5y%2FvhOWop0RNT43xJQL0GXuKHPk7a5fL8l7EqvFz0sQtwgZsg1BMFFbhhOxE9mLodhHRnCnEQKjK3gv9000sHUh3e02upzctrudyJMTG2Rn5Ra3Ni35G%2FTNxsZ7g1Ut7y0Zlnvee9NoKWu9KIfeAiQRdFEJ92bK0osmKqfaLEAycJL1Tlx7s4qHCVnHZ271vJ6%2FeOyVuJSW9lNYp6ZYECMOTsiQieXEKWwAJoxN3Z1KGHZaAIU%2FqT4PzpNxn1hZRmwmtzB3sVRWEGumk3vCgmVSctSBwuk4PvS1OuHWUgtOzw8M2MzCsjt3ABjqnAbseaw05c1J5wP3TMd61Z6BjN5NEA3YisZhGaDU4vKCB4%2FzUq7fOuOreS6%2BAMUnazvi0%2FDAQC39oawx5AP83AdxXpquzI%2FNh2TCgqNI%2Baw30hetkzyIkzooWIuCidy4nGXKhiPyhC4OblY5JdDJaaxW5nx%2BUgblM1ihrbre%2FbfxteR2u%2FAQvyKjMYG51Q%2Fi%2Bv%2BUULWQWWY%2F%2Bw1DNDZmFw%2B3cphZ3O7Ne&X-Amz-Signature=b88e1c788191efb5bf195516ee7e5a103af5d552b27c0e5a872ed7d44d4266e5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
