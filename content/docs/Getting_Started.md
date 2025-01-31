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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGU3S6OI%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANiFxbuc6Rl2nF5RPZvKeU70t%2BXBAgs%2FlNqqFSjob0tAiAiKSYr0ERSz94Alys9a2u73d5PDhshHWS50KxizWRm5iqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0POH1G8d9z9V%2BT7CKtwD7yOpqfyFOcqEoSPKViZndw75xRFVENcc8gvCAr1KrQnD5FVGPHST4VtateBncB5YycsoFDfp1UUHP8B%2FxkSvjQuckQZjK7nb%2B%2BNqUMV5VGW6ZDPreUyTjibJe71WU9ZmbFiJuCKrs678T9SEeeenDy6CFW4fD3iT95ZsEHGUnvXlHF4P7dsL2re29f%2FvWnOsR%2B3f%2F6%2FQ5L6jZ9ZtJjpKPZ0aFoXc1cSf4XZwxjR9cHi6eIG6YnW4w2CZhXXpG1qoCHNOJrsbyk24idRddmc1NJuUSEjIKAanjit88u1wtC7wAOaXVPbKpPQbF%2F5FQM3rE9uU%2FwvLEqWe1UJluC3dxHvO4kUh0mnFMAX7f%2B0bzJy%2FXfDID5aMYOnCbJk0xCryQUl28mDEW2A%2Fe0hBIjSP6aTQvtqSBg6ZAJV9cTI1kbqxYqi0z0ko8%2FlcH57FwKlyjgTwdEob%2FHJA9WVogUnngAf5nXDMM4BDwGRTRA16PCpt1kvg3tIlaCd3pp7AF0OXwjbINhgteAtwBbbCwU3SjMkELilEvy1kD3xRIhNyW%2Fk0xiCeRjtolX8OlnjO2YrkiRTUaQJnpvsRM1yqvtnRsfb8iBgu4sEpL1wP64iliA3lSixvrcR0RMFV2oEwjtLwvAY6pgHAUqQAguq7a0TPlRdzOEB9wZQ1inxI4%2FNb5SP1XwEwsYO1hmGH7M62hpZ%2FYlUsi7%2Fp7bFVGJDyHAZ7sGrYceyrmc8Esn5OR8kVrji3hYIk0Q%2FF3KlLCIHZqVoo5azsDU4Oni2vhm5nyiurYGL%2F25wtpgWJIrvRtocI2sDxGmoQW1mV2D%2BmpJ4tkQLBUfzTggbJAudwPCfzukvMBB6rNEopZfaRX7XT&X-Amz-Signature=17e8f5b1ed149e3d05a4681339000ec9a2ab817a2e8578f52d18427d82ca9dbf&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGU3S6OI%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANiFxbuc6Rl2nF5RPZvKeU70t%2BXBAgs%2FlNqqFSjob0tAiAiKSYr0ERSz94Alys9a2u73d5PDhshHWS50KxizWRm5iqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0POH1G8d9z9V%2BT7CKtwD7yOpqfyFOcqEoSPKViZndw75xRFVENcc8gvCAr1KrQnD5FVGPHST4VtateBncB5YycsoFDfp1UUHP8B%2FxkSvjQuckQZjK7nb%2B%2BNqUMV5VGW6ZDPreUyTjibJe71WU9ZmbFiJuCKrs678T9SEeeenDy6CFW4fD3iT95ZsEHGUnvXlHF4P7dsL2re29f%2FvWnOsR%2B3f%2F6%2FQ5L6jZ9ZtJjpKPZ0aFoXc1cSf4XZwxjR9cHi6eIG6YnW4w2CZhXXpG1qoCHNOJrsbyk24idRddmc1NJuUSEjIKAanjit88u1wtC7wAOaXVPbKpPQbF%2F5FQM3rE9uU%2FwvLEqWe1UJluC3dxHvO4kUh0mnFMAX7f%2B0bzJy%2FXfDID5aMYOnCbJk0xCryQUl28mDEW2A%2Fe0hBIjSP6aTQvtqSBg6ZAJV9cTI1kbqxYqi0z0ko8%2FlcH57FwKlyjgTwdEob%2FHJA9WVogUnngAf5nXDMM4BDwGRTRA16PCpt1kvg3tIlaCd3pp7AF0OXwjbINhgteAtwBbbCwU3SjMkELilEvy1kD3xRIhNyW%2Fk0xiCeRjtolX8OlnjO2YrkiRTUaQJnpvsRM1yqvtnRsfb8iBgu4sEpL1wP64iliA3lSixvrcR0RMFV2oEwjtLwvAY6pgHAUqQAguq7a0TPlRdzOEB9wZQ1inxI4%2FNb5SP1XwEwsYO1hmGH7M62hpZ%2FYlUsi7%2Fp7bFVGJDyHAZ7sGrYceyrmc8Esn5OR8kVrji3hYIk0Q%2FF3KlLCIHZqVoo5azsDU4Oni2vhm5nyiurYGL%2F25wtpgWJIrvRtocI2sDxGmoQW1mV2D%2BmpJ4tkQLBUfzTggbJAudwPCfzukvMBB6rNEopZfaRX7XT&X-Amz-Signature=00cc86a27401de5d5e751121653cf3a00a12f7fff06753cd4a5f28418132d381&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PPIIRGG%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0aew%2BQg8KPqyJm3GRG9S%2BJg0im78shRgKL7Cg0dIRDAiEAzdviCffJLbg1kc8Z7zCeU5wD552fTAYQaBL6BGgvfL0qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDoQrSrD%2F5CgubNbSrcAznZu51H35y5i7yrDgCOB%2F%2BemuKVsOBZXqnnnPhGxTvZGDGlrociikYm3KHJhbJiBdrvqV%2FdMm6Fvipntn6AlLLJ0oYYOCL7bHE%2BxGo4z5ERBULHHEDzf8yEu5k3b1E5r0%2BlAFYkeLmTrHkNfd%2F4LodtoU9DIBGhhzfThz%2FB0Cr6cq0LsAufeTJJllZII1AGeu9AWIBqoO6NBhZl7W9GRoTQX39IZ5ew%2B%2FMdU8kc5IsfNkEe9EFc0f9cZEQGu4u9Z%2FzOO8bAPiXASKl9WdXk54AmKBjFgdVl9BPMj7UF9cHJ%2FZIPbU90LeLYqZr1N4tWnS7KXaIdfVL2rhFXntBd5IGpWnemq2LwkuA6FeNOSgdNJZo6MK5lzNi3cvH8h7glJDnHFlM%2Bgug4uZugZhB1TvuKYu%2FzeCGiB%2Faaza3nTLrjqek55Cjf5H6JmiZZxLDlo%2Fzv4i6GEZQ8b%2B8WzXhubT0pwIZh26cFQnbF%2BNSO4FBfmp1LbRmnBkp%2Bl9hjLNlBGkpnDCfFQyrhQFSnYGuZbtE6A55yqFdNyPI18CPpi2TNoPM6PowtSjEnouXuFx15CrntjgRrf1pFZcBECx3I2VHCRpWiWhI%2B71VjQdsBU3PXXMMvNJ9mSsJrmMcdMMPR8LwGOqUBPrJ71DuM5RiFxBrRRjImGJiZHulJtMs0poFOc9JbYXnClE4T9fdCQwGTNPH2k%2FahVX2qNst7WDJk8c%2BLYUoeXPvPUb2Q4%2FJGTq2PVnO2nhKMRliCH0DUMb5W0QoyiM2w1mKBsQU%2FcEtFYRzwyC7wbf%2B%2BmtCDNdL51uKz0jGIkC3BdajXQ%2BIqJsnpq%2BHncsrErO3PzGEcHqZ402%2BENTllv%2Bf3zUm8&X-Amz-Signature=bfe01fc5bb46324a2d1edac416d951a44338a0654e66dbd37e5fa3a7b1f78caa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEBJZJVT%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqhDTz4BHF3E7SCS4EDsDTijnh%2F3yxxaiOro4ou4AMXAiEA8ciy%2BtTGelFGJFpFBJKFBNdBYZ8UyONqMbBSTYg3ip4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMT%2BId8eGPB4QLr6%2BircA%2BxfMRyHYxGw9pmQtN6TdL6Iqjrd4yKH88yr4tOecsGltHoejadKRZMUuxybjZctBEN6v2rVfvmN5NuWX%2Be5k9JpTkbMx4B6bd3FAS9DisdOl3GDAXmIKfRAshV4b8viMqC90rZJl9qC9YWsx7RVRoIwx590WiGTDaWtFnWdCOMG%2BdLqv03xKeuhtzWSLqsVylNxduG5b05IhyEMcFRcU4iuEtLmElK854%2F1RhFBEi18g%2BuizUg45th08o9kgTZxOjqeV0OkqoPWM9i134dNsxltiZr4cb7n5TobX%2FiPytjby592oiJtxPyA9z5%2FkKOxhrrVBtRrIJhUxa0pZfQuTJWcBAIiAGXBtCIZ8uwOhRvnfFCSBbY%2B9misj%2FoCO9dytCBiqqhK4NtUTveLjBA00VjWNRAwCghR3tJJ0E%2FS9xH1bUGCue5tLpBFKySg%2FtNV9dRB7x5oaeGG6gSezS21oW15gkayOVD8NzajPw4SsKJf3fBEkzEOqqG0WoKvxjpiosjhFjOuGx7TWixzR48pk6%2BWG%2BaYhhfFzX93dyQ4iOgN%2B7TEi8yKppxEVN0fdFi5jUf6VQj3hij5BrxkLVk19qwGiORaqvYJTv5cSHZ2tzVSj9TALN19UeewCm9hMM%2FR8LwGOqUBD0lZ72pIcSg3ouF2cE10f4C06d6CLsqX1Gs10Ah5%2BmHIlbuYcAr9ZKq1ZcjMN9OD11NFJQr9H7Fg6KWWQ1l2S6PG6yVfJctgh3RVPqaz7mmDNkxA0OTdHfFJlnYpkJweI%2BC%2F%2Fq0hFB53hQh1%2FQ0jkZKt9K7rIVFOPBRIMJ40PszId%2B%2B0FeWkq9zNninQ7z1CyFY8S4DnBT%2Fq0Y7Hv%2BVW0JBEQiiA&X-Amz-Signature=d7187f58ca783fec07cb32a91fb3256788309067acdfa6d9defc0192d1dd5dad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGU3S6OI%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANiFxbuc6Rl2nF5RPZvKeU70t%2BXBAgs%2FlNqqFSjob0tAiAiKSYr0ERSz94Alys9a2u73d5PDhshHWS50KxizWRm5iqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0POH1G8d9z9V%2BT7CKtwD7yOpqfyFOcqEoSPKViZndw75xRFVENcc8gvCAr1KrQnD5FVGPHST4VtateBncB5YycsoFDfp1UUHP8B%2FxkSvjQuckQZjK7nb%2B%2BNqUMV5VGW6ZDPreUyTjibJe71WU9ZmbFiJuCKrs678T9SEeeenDy6CFW4fD3iT95ZsEHGUnvXlHF4P7dsL2re29f%2FvWnOsR%2B3f%2F6%2FQ5L6jZ9ZtJjpKPZ0aFoXc1cSf4XZwxjR9cHi6eIG6YnW4w2CZhXXpG1qoCHNOJrsbyk24idRddmc1NJuUSEjIKAanjit88u1wtC7wAOaXVPbKpPQbF%2F5FQM3rE9uU%2FwvLEqWe1UJluC3dxHvO4kUh0mnFMAX7f%2B0bzJy%2FXfDID5aMYOnCbJk0xCryQUl28mDEW2A%2Fe0hBIjSP6aTQvtqSBg6ZAJV9cTI1kbqxYqi0z0ko8%2FlcH57FwKlyjgTwdEob%2FHJA9WVogUnngAf5nXDMM4BDwGRTRA16PCpt1kvg3tIlaCd3pp7AF0OXwjbINhgteAtwBbbCwU3SjMkELilEvy1kD3xRIhNyW%2Fk0xiCeRjtolX8OlnjO2YrkiRTUaQJnpvsRM1yqvtnRsfb8iBgu4sEpL1wP64iliA3lSixvrcR0RMFV2oEwjtLwvAY6pgHAUqQAguq7a0TPlRdzOEB9wZQ1inxI4%2FNb5SP1XwEwsYO1hmGH7M62hpZ%2FYlUsi7%2Fp7bFVGJDyHAZ7sGrYceyrmc8Esn5OR8kVrji3hYIk0Q%2FF3KlLCIHZqVoo5azsDU4Oni2vhm5nyiurYGL%2F25wtpgWJIrvRtocI2sDxGmoQW1mV2D%2BmpJ4tkQLBUfzTggbJAudwPCfzukvMBB6rNEopZfaRX7XT&X-Amz-Signature=0f950cd66c4791ceceabd4ed815b5fdecd06b755478c0680a777b413ab70a083&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
