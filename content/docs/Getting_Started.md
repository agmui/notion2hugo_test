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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KN3R3I%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgoTf8TzFiUWeG3Hkt097rJx%2FxNXObuUwnVMSSy3Y%2BoAiAJSEelkmq%2FTcC%2BMj89QY%2Btgt8yNwUz9%2FcE5z4UHcXrcSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM%2FTTbt5Ga1b17q582KtwD%2FqcFSzTcGZgYYk%2B44aEZ2uhOVbT94fbiwuAKUvlr1N353YYibG5FoIvzWUuipyepCb6BDXmKzN1q7Hzsxr4n9hNJkU2rL%2F7mCO1mZepyrWuLZc7yyFzGb97vFDuIXWkn9GU7lV0nInW50TcjGA7%2FWWg%2FpmPqQwrP8oenUenv86Su7sIZJTdV%2F9Gyj1qjYJPjYp%2FDjnBi1wHS3nGSklVRoFsjX5F5E1k1ZL2jSXtZwuabbg%2FulB%2BZUArALuLaihHpOZ5NrFlAAciGCQsyRsSErs%2F7NubQoko6abjtvKnalcVjw9%2FW948Zghv47j6%2B9pcttEXpmHO97EdcXYvM4qouO4RltPUIfz%2BH8KaTcM%2FW8PoQBT4ukPrVs%2BfxCCBtddTe5Z8pK69YJM%2BG5xYlHIbLClfXt4g%2BhiD86PIaJNBORQ43ywfU0gZKaG5KxTI40jmaAULeJKGtJUM6ZHuggg7LdpI6313yMwdTODDiGenpEE%2BkSTSMM%2FWDpkiS676TWhXbLecm7RY80jDapBLfuXz8DMWVJxReIgq%2B%2BBJNmxwEjXI0Hn6i0VhDPB6MlbE%2FBLCTi8EP6yU%2BHJlFiuP%2FoR3iAzfX9tAeYghn9qCpjbsNCw%2BxEW8exR0hB5m68nUwgeWswAY6pgHsgbGEvZol2ZME1oOr%2Fy3ptmk52tmP9B6NL7sLRwPKcroDNanzX5kP4Kp2kP46apiAY9wQAKfNQkay0m%2BOOPTS%2B2npN%2B8%2Fle0hk%2FQ5TgKdM4plTbSwVenBwlkqLqpb50y8DRez84%2FIZGp59bbP8iNrNULeC29hairEh%2BCwkcZ%2FRqGXqyEPtMRZoasFALnX97B2N9GpjO42j%2FhB2AaoNQkGTxAzlZ4T&X-Amz-Signature=a442bc5ce613fbc3edc884e15146be8099d8ae2b116eb4d28b64eefd43b1cc4f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KN3R3I%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgoTf8TzFiUWeG3Hkt097rJx%2FxNXObuUwnVMSSy3Y%2BoAiAJSEelkmq%2FTcC%2BMj89QY%2Btgt8yNwUz9%2FcE5z4UHcXrcSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM%2FTTbt5Ga1b17q582KtwD%2FqcFSzTcGZgYYk%2B44aEZ2uhOVbT94fbiwuAKUvlr1N353YYibG5FoIvzWUuipyepCb6BDXmKzN1q7Hzsxr4n9hNJkU2rL%2F7mCO1mZepyrWuLZc7yyFzGb97vFDuIXWkn9GU7lV0nInW50TcjGA7%2FWWg%2FpmPqQwrP8oenUenv86Su7sIZJTdV%2F9Gyj1qjYJPjYp%2FDjnBi1wHS3nGSklVRoFsjX5F5E1k1ZL2jSXtZwuabbg%2FulB%2BZUArALuLaihHpOZ5NrFlAAciGCQsyRsSErs%2F7NubQoko6abjtvKnalcVjw9%2FW948Zghv47j6%2B9pcttEXpmHO97EdcXYvM4qouO4RltPUIfz%2BH8KaTcM%2FW8PoQBT4ukPrVs%2BfxCCBtddTe5Z8pK69YJM%2BG5xYlHIbLClfXt4g%2BhiD86PIaJNBORQ43ywfU0gZKaG5KxTI40jmaAULeJKGtJUM6ZHuggg7LdpI6313yMwdTODDiGenpEE%2BkSTSMM%2FWDpkiS676TWhXbLecm7RY80jDapBLfuXz8DMWVJxReIgq%2B%2BBJNmxwEjXI0Hn6i0VhDPB6MlbE%2FBLCTi8EP6yU%2BHJlFiuP%2FoR3iAzfX9tAeYghn9qCpjbsNCw%2BxEW8exR0hB5m68nUwgeWswAY6pgHsgbGEvZol2ZME1oOr%2Fy3ptmk52tmP9B6NL7sLRwPKcroDNanzX5kP4Kp2kP46apiAY9wQAKfNQkay0m%2BOOPTS%2B2npN%2B8%2Fle0hk%2FQ5TgKdM4plTbSwVenBwlkqLqpb50y8DRez84%2FIZGp59bbP8iNrNULeC29hairEh%2BCwkcZ%2FRqGXqyEPtMRZoasFALnX97B2N9GpjO42j%2FhB2AaoNQkGTxAzlZ4T&X-Amz-Signature=5d533d149e54842451f973040ff84107cc8703fb0b3b88e30125aed7b68d366d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCO2GDJ7%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvDuuO6hjl%2BQjL5BIdowEuuki%2BeDwAjtNHYWcB4ul5xAiEA5CEIQgotqpFn2eIJt8IbGVPbsDyZLCR8%2BdKzOEuj%2F78q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDAz1xYFkxjfly8G3ICrcAyFzviDwgxDD%2FcakNnH4wOIHvg0IDGRsgu5P5sC1QCY2aJfrbK1AgSzsQnKPnOngONyVJKNygB0N1bL%2BqB0GJsdLaeELs1b68le5km57%2FHDbcTCJZun5R2w9UJ4rLxvGpsDE1Xu1F9KJ%2BMZ2ufTdIXGkdwJNA9uQJsSGEQurNzGCa74saY4r8W6XSXUJdkXz%2FRayHtd0GAtJL3DAt%2Fyt1LzIkBHOMqdGHpCyOGrV7vjr7oLCcCMKjru0cSPQnhPa74vzPhqCMuEn1GjEjKXnRIe3hE6Rm3qAvZxN6aBuUMz90tb2arX9%2BG0HBuOgv0j1z4X%2F62%2Bdbza3Odbu26t2inv0mH9tsAKCN3dzsY08osOjx%2FUn1lOXFjsohPkW3UIufdFo6JEmPDklWzDMce7ZJ1b7wp21zr3AJ%2FCgkEen%2B83I2X60pvEz3vkmM3XZHeEaazwI7LHlMPRlnxFr59kVJvx4EePHM%2FrBwBMbes0ND3Nv3hBHW%2BGpOv6ZETDkbXX4ekYUwfQeB2WJlzghNc62SwLxHna3K89f7lpCCJ%2BW7Gmyq%2F7r0%2FEN4cc6qIxbIBBskdwUIVnxJeZJgcuojxLcFAAzbvAv3Tf%2FWM3e6n2LEAjq93CiXt0S7lJ9HFm8MIPlrMAGOqUBDU4PYpUf8UCObdh4f7cpqxOar3wLmDXPE%2BEn7OtgCeiXeJQCASKdEnZFsG8Pvky%2BQgXUDJEeIObd2MWMKhjx0RNRWswm0cq4lJG7YAi%2B9jZXHaBaxFztKsIabEMm6Rmn10q1BT9Md93BhNJ5Jfb5GDvtZRhf7X1pKHbm2l9leZlfPgXpnAgJogxcC1izNq5PnzS73DiDl7i9G0JGExggS1JwnGZg&X-Amz-Signature=152de3a541fb6238e3ef8e40d69b2ec55a4f947ead187d98f4af931f797633a8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3IM5M5D%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzeGzVWw4a5OF2jiAhAV2kNfDaSiMS61x%2BaCrwvS2fSAiARWxmi6Yr1hXT8JB%2BIrNUNCqlHiyifGChka59vl7VjNSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMul0i3kZ5hXQq00fcKtwDRqVFMyjfP7xYVdrq9PRESAg1dtQmHpWPu%2Fp1Zt2C4i2Gcu8Zoi46DLzQqJE7N51KOQT1GdUuWFf78hhTQvTP7kzZqdSwfBXQnngISjPeW4XvCiRJ8IvKGBvDaf7cxH%2FzMIkvwp5jofe7yfZP2wJBDaNobrvqinP65HikS1lT9sLf9pdY0ORO%2BXAH6GJSCFBa0UT%2FyT%2F82XpLzdYqB5uAzdzxSmpcIO55CDqOvgvEbYzM72%2Fz%2BMoko3XeT442XHQR1KVBDxSGCCDRMONlvBEN%2FLehOMgnYPD5biis8GesT3%2FDduDub%2BlWX14zRqr4ZP6lUY0yJaMe0GqX7RLeGkCwz4t6KoNJP2wJXDOrxuURmazZOHgaxleWs9EbnwEewekbhJSwdNpW6qad7kP8zi59MA3sET6aQqRkP01bSBPA4%2BP3yxIb1lj4HIR4P2vWEM7oHcAaog0hkMdPS9aA4fFQKvXs5WsArzzg0Ph9RF1bjInjrEasuKztZ%2F4bCqHJFT5fv50%2BRXG4TyZmJNB70z5QK7amrh2%2FLLT5uQkwY9BYPdrOh6TF65ZxROgs9qfNVh8aVYceioHTU9OhKaEBB5NdZKpFO9GySPU01yctJkq1PqmJWglYEEjQGiajdNQw%2BeSswAY6pgGQH%2BTh%2Bgvo4vkC0MPtY%2BmGxkkvSlisXOiZ29AqHJwKMRYq2dxrbNHdA2JQBeAu37FYIzV3WA3pe3gIBspJ0OW2MEtIXi73UPg411lxH9hflelaFtvgUd4LsFNFc7z24%2BOzuSaCUS9wc7ijucxlOkJJgKc4AsUGoC7OugN5ZcHhNllXbgkShDpApodpXqILM0%2BN1CRNITsxx0um%2Ffqi9M36C%2Fxq%2FoRc&X-Amz-Signature=34c35ec4dd9b54771fd72f45b5162a8281504120711aee6813b3ec60527f2ddc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KN3R3I%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgoTf8TzFiUWeG3Hkt097rJx%2FxNXObuUwnVMSSy3Y%2BoAiAJSEelkmq%2FTcC%2BMj89QY%2Btgt8yNwUz9%2FcE5z4UHcXrcSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM%2FTTbt5Ga1b17q582KtwD%2FqcFSzTcGZgYYk%2B44aEZ2uhOVbT94fbiwuAKUvlr1N353YYibG5FoIvzWUuipyepCb6BDXmKzN1q7Hzsxr4n9hNJkU2rL%2F7mCO1mZepyrWuLZc7yyFzGb97vFDuIXWkn9GU7lV0nInW50TcjGA7%2FWWg%2FpmPqQwrP8oenUenv86Su7sIZJTdV%2F9Gyj1qjYJPjYp%2FDjnBi1wHS3nGSklVRoFsjX5F5E1k1ZL2jSXtZwuabbg%2FulB%2BZUArALuLaihHpOZ5NrFlAAciGCQsyRsSErs%2F7NubQoko6abjtvKnalcVjw9%2FW948Zghv47j6%2B9pcttEXpmHO97EdcXYvM4qouO4RltPUIfz%2BH8KaTcM%2FW8PoQBT4ukPrVs%2BfxCCBtddTe5Z8pK69YJM%2BG5xYlHIbLClfXt4g%2BhiD86PIaJNBORQ43ywfU0gZKaG5KxTI40jmaAULeJKGtJUM6ZHuggg7LdpI6313yMwdTODDiGenpEE%2BkSTSMM%2FWDpkiS676TWhXbLecm7RY80jDapBLfuXz8DMWVJxReIgq%2B%2BBJNmxwEjXI0Hn6i0VhDPB6MlbE%2FBLCTi8EP6yU%2BHJlFiuP%2FoR3iAzfX9tAeYghn9qCpjbsNCw%2BxEW8exR0hB5m68nUwgeWswAY6pgHsgbGEvZol2ZME1oOr%2Fy3ptmk52tmP9B6NL7sLRwPKcroDNanzX5kP4Kp2kP46apiAY9wQAKfNQkay0m%2BOOPTS%2B2npN%2B8%2Fle0hk%2FQ5TgKdM4plTbSwVenBwlkqLqpb50y8DRez84%2FIZGp59bbP8iNrNULeC29hairEh%2BCwkcZ%2FRqGXqyEPtMRZoasFALnX97B2N9GpjO42j%2FhB2AaoNQkGTxAzlZ4T&X-Amz-Signature=f129577d9d5634dd6fbd063808de459cccb000b51ec864b8996cfa25ddd93161&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
