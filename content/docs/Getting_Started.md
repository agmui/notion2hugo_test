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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFQKZCDN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDH0KVCyWzYBpkY6iK1HnpjEG9883fkBId4cv%2BnQ4uuIQIgfxXOipjhwkfhDaiXsiEKSCW%2BtY9GGX%2BeemoXdXc8T%2Foq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDCyJG4cP%2Fq5E0%2FbKWircAyEVpoSQDaYeyoGQOU9gYjdjfxkmsDKp8PbT0ACSMLvSmkhd%2FIWcKN0rR1yrSCnciKR2VnFRHiF1SPHYDf3h7dKU%2BBcaHK6SjWXZnb4ZjMlVsGOBgmsLsfyHlSOvcY80nQBJ885BqhQs7Nj46KpBKYy9ve8GLhrQWAG0LO0MADGgRC8gX0GqrCpttCA7ajyODvYgo7pZxkE9WeYMGW4%2BTM00knwaYykUZsvciqNLGw7wmGkpAP5fCUTIdFBFuE9kL%2BGJmfGtgCF982sCH8AahGGyxcUVwL6YOwzeyTW98OtIUsHL27eRw3dKyv81RqLNmEg6y8N2Zjoc0i0rR4RELzEW0dYdGz1Ns4ZeIJDMHOl3zpzIcB%2BqOjKeOLdzYb8wX3Of7pT1zzG1dDvrcPJp%2FUoqIzAyhg%2BV3rDmTMW%2BMxfyzEmn3SDRC15btMO%2FOWG1O83tpyxOOKIaVj36Qhe%2FvQo3I7vdT6E3RZd30l%2FmGS9qQfRTzxwuZB%2FUaEKOuf3ua4Nd9wsM87OU8Lf7hMT8df3AephwiRRJzR8CRb8GpmfXICsZECwpZ7h9%2FerrNVumZyc4Vd3HhhRvqPUHB0c9quCfMpl9yAJ8ixUpCBUxiUNudyQBosYVX%2BbHjxYMMP23wcQGOqUBGXgtSpPcDlmtI6zxeLcLofVk56n7KTCx31Vl1IY67ft79Xq9v8t6wzg86DcHdXicPTycZ5cpR1xsZwFYawzZhVaDbK%2BU6bllPRYQJocpVbtHyu%2BpUHV6NlK3QiNOYXZRhQlt8zx39eV60u6CMH4uuzn58X4UFcj7fYNFmECvqaInkasJNfIL%2FNgZx4qPWNO7VnWbfztPchO1AhhVx5Kws7UQWiAU&X-Amz-Signature=0b5d98deb6841b11f1badb719fc10e083fea338c29e3f8222d42d394b4c1382a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFQKZCDN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDH0KVCyWzYBpkY6iK1HnpjEG9883fkBId4cv%2BnQ4uuIQIgfxXOipjhwkfhDaiXsiEKSCW%2BtY9GGX%2BeemoXdXc8T%2Foq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDCyJG4cP%2Fq5E0%2FbKWircAyEVpoSQDaYeyoGQOU9gYjdjfxkmsDKp8PbT0ACSMLvSmkhd%2FIWcKN0rR1yrSCnciKR2VnFRHiF1SPHYDf3h7dKU%2BBcaHK6SjWXZnb4ZjMlVsGOBgmsLsfyHlSOvcY80nQBJ885BqhQs7Nj46KpBKYy9ve8GLhrQWAG0LO0MADGgRC8gX0GqrCpttCA7ajyODvYgo7pZxkE9WeYMGW4%2BTM00knwaYykUZsvciqNLGw7wmGkpAP5fCUTIdFBFuE9kL%2BGJmfGtgCF982sCH8AahGGyxcUVwL6YOwzeyTW98OtIUsHL27eRw3dKyv81RqLNmEg6y8N2Zjoc0i0rR4RELzEW0dYdGz1Ns4ZeIJDMHOl3zpzIcB%2BqOjKeOLdzYb8wX3Of7pT1zzG1dDvrcPJp%2FUoqIzAyhg%2BV3rDmTMW%2BMxfyzEmn3SDRC15btMO%2FOWG1O83tpyxOOKIaVj36Qhe%2FvQo3I7vdT6E3RZd30l%2FmGS9qQfRTzxwuZB%2FUaEKOuf3ua4Nd9wsM87OU8Lf7hMT8df3AephwiRRJzR8CRb8GpmfXICsZECwpZ7h9%2FerrNVumZyc4Vd3HhhRvqPUHB0c9quCfMpl9yAJ8ixUpCBUxiUNudyQBosYVX%2BbHjxYMMP23wcQGOqUBGXgtSpPcDlmtI6zxeLcLofVk56n7KTCx31Vl1IY67ft79Xq9v8t6wzg86DcHdXicPTycZ5cpR1xsZwFYawzZhVaDbK%2BU6bllPRYQJocpVbtHyu%2BpUHV6NlK3QiNOYXZRhQlt8zx39eV60u6CMH4uuzn58X4UFcj7fYNFmECvqaInkasJNfIL%2FNgZx4qPWNO7VnWbfztPchO1AhhVx5Kws7UQWiAU&X-Amz-Signature=9dfb828fae661f3cc11f126b52d4bb3aea6df6beb2d214ed75806fce0cfb8d31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFQKZCDN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDH0KVCyWzYBpkY6iK1HnpjEG9883fkBId4cv%2BnQ4uuIQIgfxXOipjhwkfhDaiXsiEKSCW%2BtY9GGX%2BeemoXdXc8T%2Foq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDCyJG4cP%2Fq5E0%2FbKWircAyEVpoSQDaYeyoGQOU9gYjdjfxkmsDKp8PbT0ACSMLvSmkhd%2FIWcKN0rR1yrSCnciKR2VnFRHiF1SPHYDf3h7dKU%2BBcaHK6SjWXZnb4ZjMlVsGOBgmsLsfyHlSOvcY80nQBJ885BqhQs7Nj46KpBKYy9ve8GLhrQWAG0LO0MADGgRC8gX0GqrCpttCA7ajyODvYgo7pZxkE9WeYMGW4%2BTM00knwaYykUZsvciqNLGw7wmGkpAP5fCUTIdFBFuE9kL%2BGJmfGtgCF982sCH8AahGGyxcUVwL6YOwzeyTW98OtIUsHL27eRw3dKyv81RqLNmEg6y8N2Zjoc0i0rR4RELzEW0dYdGz1Ns4ZeIJDMHOl3zpzIcB%2BqOjKeOLdzYb8wX3Of7pT1zzG1dDvrcPJp%2FUoqIzAyhg%2BV3rDmTMW%2BMxfyzEmn3SDRC15btMO%2FOWG1O83tpyxOOKIaVj36Qhe%2FvQo3I7vdT6E3RZd30l%2FmGS9qQfRTzxwuZB%2FUaEKOuf3ua4Nd9wsM87OU8Lf7hMT8df3AephwiRRJzR8CRb8GpmfXICsZECwpZ7h9%2FerrNVumZyc4Vd3HhhRvqPUHB0c9quCfMpl9yAJ8ixUpCBUxiUNudyQBosYVX%2BbHjxYMMP23wcQGOqUBGXgtSpPcDlmtI6zxeLcLofVk56n7KTCx31Vl1IY67ft79Xq9v8t6wzg86DcHdXicPTycZ5cpR1xsZwFYawzZhVaDbK%2BU6bllPRYQJocpVbtHyu%2BpUHV6NlK3QiNOYXZRhQlt8zx39eV60u6CMH4uuzn58X4UFcj7fYNFmECvqaInkasJNfIL%2FNgZx4qPWNO7VnWbfztPchO1AhhVx5Kws7UQWiAU&X-Amz-Signature=706a7f27b4227406c98f9cd6e7998cd3818ea4c91d265e7003ba051bc18368da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PMW3TQH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCICVef6W%2BXotNcMvyCfQvmn0FHUV1V0J45IWbBCYjnhBYAiAcmuw2aRhuuMKtSAiNpig8pFz1nSodGINfwTTnsEFlACr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMQLumB7ISOfFsfLmNKtwD4L9hod1ONDcFjv9PcfNiuPVIckacgYe73ps%2BzmP6i5Uxb3t5pC87ZyktDwtid%2Fg%2Fic693aegyzsAu%2Fz0XPGf47T3R4XbWUpFipx2Z04I65vR7yXmA%2B0wcpM%2BuRRLFN%2Fyp5l%2BgL7QdVdFvu80Lfmsk%2Fj5lX32TW4FiwDlmGpFPpJN%2B1hszV8Lp0CVewhAo0ggZ0eyv8GfFh%2FZbTEpGTsfH994xdFsPgfD8jXi8UH4W6oNdktJC3mA6gEPokkHmUaD165gUCQDU3GsOHnZZcpTNscrdg3e9%2BCxTYd6zQDSaiG%2Fzng4PMaIlPlIpGPAmAe5OUOwL2oqEfLN%2BU%2BiFlVgdaQ5u4BAidSD8Rcas0k0N3WHqOcXgZa6GnnBhCbLi5WO0mIfavW0%2BS7VXaI6z7dIM1qywhvUrfMJNiajb46WqIYfRd3Yo6WyQ7UTaPsnKoYnZA3B%2BCm9uRE8hIiuvK8f5XTFWsEn3LYfdxnA4x%2B3n5X7gEV0XmOclTJ2pRybwzSoDda6Rwlc7p3vpFeZsf4YF3eOhyfCtF18BN7sL4DLmZipeTRciPVnJ3PKGih6hng6PXOdGf0w2p9mEK7TUYP7xTCImtI51qNqNpz%2FX5f%2FdLveMj8do8QrJ6Be2jAwvLfBxAY6pgGEQ8aHAScnsErGTrM7UeI4zbPRY3jUHBFsc1f677ueBXG%2BzPb8hyKGyCyes0n3aeKha%2FTgPGOBMbAhtp2fQ4TQhtQEzlGuqWrRCeMfpcAYhVPPJC7ri7KfuXO6%2B8ifIMbDuBzgVUIy1%2BoU5WWKy3nBZxqhQz5grkjHmiFJpqyZCYDD2x71LywSFpjxdQj7GbY39UtFTwqpqEn7A4s5NKlxbCCDie4R&X-Amz-Signature=ebd66a473e5288792edf317321a69cc1970adb5a3a55febac0b17912ae34b745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCKMVDIM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCLMV1IQ%2F9XgHLupVy%2F8wEwH7gHTL2cgkNPv2uAANH0rAIhAM9HF5EXqRQbtGOpjuq6Tc%2FBVqj2kalX%2B1vzR2FEh5IrKv8DCEAQABoMNjM3NDIzMTgzODA1IgzBkgoygzv9%2FQ7DRMAq3AP18EMVDnLVuHJYKSlSOTpVdqnHhwdbnWJSMo4LzQez5HS57o0D2M76Vazgfm86iq%2BG3L1Jf2%2FkX9icPR7obGkWQHARhgDJzhLnyJ1L8bx3nW0G9JiyTo9VOENKzCGyXVcx2tgvrUcf8xWUvP0pz6SQg%2BdkEgqGXsnOJpfdd%2Bz%2BCf2vZoc5fjRNXC9D%2FE8BRJoR%2BHgWshmBgmDlH%2FBhzz5LZ9wQ824fzOMKHECG6opUAm0BgHmC8mFOg1TBJRt3SzTF%2BeUuvimwa84n%2BGgVFGpaO6tQ%2FDHS4UHEgiiGxaSsuFn3c%2BXJg4vkCPirKMDE%2B9UVvd0BXmaNsi1ZfhUKa3Kv5P%2FG7Z%2F%2FVQR8zgvvrvEY%2Bv3Yi8wAgJtUAXpfdUyWFZg%2BucTjWT181y%2FbMhgX9objKjL2yOrJGv9mDxDFxawIh9F9C7Jml28g9FjuKahBrjjR7CgTTmJ%2FbpLLaWzZkyWAQD%2FOLaup6At6Mdw%2F6%2BRRWWtbb4cKUQfQSc3q7p2%2F3JWzQsBL6h8JEpxHFlRNVey4TzzQHOXJVLTh2l%2B%2FGA9c2kDUJS%2BlEmgixdYwOgfinm5Y0szg%2FzR07a3eTJC5o7ipxPjIkPMcli1G9DdZJjFulzKKUvvCWu1C1I%2B0ijDvuMHEBjqkAbnyHe1kVJ8HjD2DjlPVL506rbT2u1ITnUvE5nKfnXrcNspvGwoHF%2F7NGnm4hIHNGxNSiMONB5YX%2BCQ897qIX7h7r7xMV5qtEEkHhAoJC4rC4aXXTt%2FRtg3WsgVMZQ8sk7bY5kEjvrXfKQrvPT6eMVgcxGLmpJHVhVQrvF3Ra0yHQ5HpBC1JF1erDdYawG0niy1oujvUlWAiyCkluZxanYUgsLEm&X-Amz-Signature=2453719b5aebed16cc45caaa62d90576110bb37ecd09b441aeabf683b5e85971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFQKZCDN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDH0KVCyWzYBpkY6iK1HnpjEG9883fkBId4cv%2BnQ4uuIQIgfxXOipjhwkfhDaiXsiEKSCW%2BtY9GGX%2BeemoXdXc8T%2Foq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDCyJG4cP%2Fq5E0%2FbKWircAyEVpoSQDaYeyoGQOU9gYjdjfxkmsDKp8PbT0ACSMLvSmkhd%2FIWcKN0rR1yrSCnciKR2VnFRHiF1SPHYDf3h7dKU%2BBcaHK6SjWXZnb4ZjMlVsGOBgmsLsfyHlSOvcY80nQBJ885BqhQs7Nj46KpBKYy9ve8GLhrQWAG0LO0MADGgRC8gX0GqrCpttCA7ajyODvYgo7pZxkE9WeYMGW4%2BTM00knwaYykUZsvciqNLGw7wmGkpAP5fCUTIdFBFuE9kL%2BGJmfGtgCF982sCH8AahGGyxcUVwL6YOwzeyTW98OtIUsHL27eRw3dKyv81RqLNmEg6y8N2Zjoc0i0rR4RELzEW0dYdGz1Ns4ZeIJDMHOl3zpzIcB%2BqOjKeOLdzYb8wX3Of7pT1zzG1dDvrcPJp%2FUoqIzAyhg%2BV3rDmTMW%2BMxfyzEmn3SDRC15btMO%2FOWG1O83tpyxOOKIaVj36Qhe%2FvQo3I7vdT6E3RZd30l%2FmGS9qQfRTzxwuZB%2FUaEKOuf3ua4Nd9wsM87OU8Lf7hMT8df3AephwiRRJzR8CRb8GpmfXICsZECwpZ7h9%2FerrNVumZyc4Vd3HhhRvqPUHB0c9quCfMpl9yAJ8ixUpCBUxiUNudyQBosYVX%2BbHjxYMMP23wcQGOqUBGXgtSpPcDlmtI6zxeLcLofVk56n7KTCx31Vl1IY67ft79Xq9v8t6wzg86DcHdXicPTycZ5cpR1xsZwFYawzZhVaDbK%2BU6bllPRYQJocpVbtHyu%2BpUHV6NlK3QiNOYXZRhQlt8zx39eV60u6CMH4uuzn58X4UFcj7fYNFmECvqaInkasJNfIL%2FNgZx4qPWNO7VnWbfztPchO1AhhVx5Kws7UQWiAU&X-Amz-Signature=e49fce7af4ea18937bed5e6013617b1a566b766d07729c01d4e48eaf0c417470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
