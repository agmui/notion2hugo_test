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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W3LL5RH%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC%2Fa4JB8ORSDZadxM2HzC8%2FGCi%2ByXSA5tO1F31bKFPRKgIgLJS3AJQdY3g%2BqjilH96WxGA0GHMpw2kY5wYUIiz1m8sqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeGA5oF41b2e2NuIyrcAy%2FgPsTZceAhOGOX3K9lqDsJSGHIPDv0O1RP8TTvsoWVMT0S0zdDwgvCwBvZNkHHaIjPnhD9SuOuvO%2Bj0FHw4oWwZ52tyocj20wGlpg1pmUwfiWVkE8vArE0zSep6JTd9vS1cOe31SBAwNEhjaHordv6dFZJtUEfoxq9p%2BzZLSxFqOX%2BZOnBrDFrF1XTVph7eYi8sWaZsmuP1I9DVKFLD1FMHNAChx7LDoXWU1pfU2b%2BmIIhp%2FqdIsdmsPZHYnpbAiy5VPQ1uEozfoEnoPHNLx1IEzRRA1II9SdkaBgs3e4hQa1BaeGDuz4Hjv56EQSCHVCXPwyNjq%2BHoVJ6F3XvkfQflCkap2eVdcAjszOZwz6yAf8Vps7FIRhrxp5ERGbpL08ih5hsi2jgDYI71PIru%2B%2Bt9txam4f2AdmZwBDKL0IEKNIxGRO2YE2DxO8Va3J7dRO%2FAnAIRrBc368Zm%2BrHksxsRdAtaaryMnRywswA5gNlvy7g0O2%2Fu6KQUWJg%2F5YWCovojpabBwcSaZI%2FBFMQHCEUAz3lnGud1oHE9YNBZath0Wj3hVLjIY0e0aO1Q%2FGvLiYhRSyTXEES09qDSW5dJXmzHrPioXh6Zw2h681odSVWloOO0II6weFbiMBSMJ2j7r8GOqUBmVQ%2BJpnkda5l3F0h2lv6Sjg0ZnM0zLI20RdaOpN2HJ6LESfocF0Sl%2FD5EJqqBdT%2BsuYnqK6PbUsBkH%2BcEA8zmKmpVeLopmAYad12xmnaJgwFJaGH5CiNHPzlfEmriY5EvcXUXcL%2F%2FPWiYXqhuEA1223DXN1YLHwFqYvPuDZAf92GMDspgIZGj8Lgk%2B0WlsSoabkBF5hfgPDLcNlNQamOMCSaCnby&X-Amz-Signature=bf36a2a8602bb74c2e90a502e1f278939a42c6b57cc72c50e6dbd711e2bd458b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W3LL5RH%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC%2Fa4JB8ORSDZadxM2HzC8%2FGCi%2ByXSA5tO1F31bKFPRKgIgLJS3AJQdY3g%2BqjilH96WxGA0GHMpw2kY5wYUIiz1m8sqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeGA5oF41b2e2NuIyrcAy%2FgPsTZceAhOGOX3K9lqDsJSGHIPDv0O1RP8TTvsoWVMT0S0zdDwgvCwBvZNkHHaIjPnhD9SuOuvO%2Bj0FHw4oWwZ52tyocj20wGlpg1pmUwfiWVkE8vArE0zSep6JTd9vS1cOe31SBAwNEhjaHordv6dFZJtUEfoxq9p%2BzZLSxFqOX%2BZOnBrDFrF1XTVph7eYi8sWaZsmuP1I9DVKFLD1FMHNAChx7LDoXWU1pfU2b%2BmIIhp%2FqdIsdmsPZHYnpbAiy5VPQ1uEozfoEnoPHNLx1IEzRRA1II9SdkaBgs3e4hQa1BaeGDuz4Hjv56EQSCHVCXPwyNjq%2BHoVJ6F3XvkfQflCkap2eVdcAjszOZwz6yAf8Vps7FIRhrxp5ERGbpL08ih5hsi2jgDYI71PIru%2B%2Bt9txam4f2AdmZwBDKL0IEKNIxGRO2YE2DxO8Va3J7dRO%2FAnAIRrBc368Zm%2BrHksxsRdAtaaryMnRywswA5gNlvy7g0O2%2Fu6KQUWJg%2F5YWCovojpabBwcSaZI%2FBFMQHCEUAz3lnGud1oHE9YNBZath0Wj3hVLjIY0e0aO1Q%2FGvLiYhRSyTXEES09qDSW5dJXmzHrPioXh6Zw2h681odSVWloOO0II6weFbiMBSMJ2j7r8GOqUBmVQ%2BJpnkda5l3F0h2lv6Sjg0ZnM0zLI20RdaOpN2HJ6LESfocF0Sl%2FD5EJqqBdT%2BsuYnqK6PbUsBkH%2BcEA8zmKmpVeLopmAYad12xmnaJgwFJaGH5CiNHPzlfEmriY5EvcXUXcL%2F%2FPWiYXqhuEA1223DXN1YLHwFqYvPuDZAf92GMDspgIZGj8Lgk%2B0WlsSoabkBF5hfgPDLcNlNQamOMCSaCnby&X-Amz-Signature=d926f7eba9bfaa99961b32bb1742260575787c05634438016c28af45a9b00452&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X75G73IP%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDFsw5Z2bxAWWnAw0cSNSUESGbfJUpaV0xCM9iO0FyktwIgXMcKL9XeUd2RFq2Z0w8nMANso9wUGqHUnsHO7OY0XkcqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2CfMNfBLWY2CcFZCrcA6VIPThmLO%2FLk8Rc7Q2uLpEbW%2BIie0wTsXyBZoy9%2F8h1uESI1Q3XoHreFlSxQoN%2BunJFu4ctjMAD2CYR1qGCuncoaD91lN%2BRBBm8IDcRQPR%2F3ptB9IyjLZBezSEHRkbz51UADX0Sxhw0o%2B%2BZuwrL8tlHfapR6i%2F64Atzg3NCeQZmtxElO7HULAnLE4ICwCouN2KQP8OnthkoqDIWZjpdKrEUtC9DSnFCYZf9%2FPDvkuN%2FIzesHNnFZn1sj%2BM920hp34kElBLROval%2FM4lym5PZV5Zp9ps4Xce%2BGr6sa2wV%2FHNN3nWAPsMDXqR9iCiF%2BG14mC8MriGMsIjUnmOyEz6yGI7uUvQlVcd9wq8faLxKLdUr%2FcCYLiWR7D9mbZxXUFeeSead%2F3i0%2FOSZztFJ9bHbokqIQwM7s6E%2FEQdAHAhpz1JQNSEkap%2B8ckJeORblnJ1RVVzeXEv3ukTCv6qTwMP4xZgvGcLmLGVzGJFT6MxVhbq0kpZzMqrhpRvSrwO2nP8belDyhjyS4supDIrDPIDxNhSOSkgDgxYifW%2FCVu%2BUK6skZ48ApkhbXGrxaqZNeFoL1AkNYTqoEVmgl0zDVpDIkwL5f166uo08NnKDQAKS6Z7oPnnYhWeU40QcbRLMO6j7r8GOqUBv7UQOGEuVS3K2UEz0DdCTLuTTGUMZMN1jNjK5oQNz4xUEPt7MY45TyqctFK1Yi62jvsF0bmSxFg2ywk2Vcjf8JxZFD4UNsBIHrykLhcQjPk8KTyuCquRH37EQAzE%2Fc9HiRmMOTQpYAKH%2BaYBqzy5MqrmhPJo8T1qX63WIusXFA02epJHVa9RKs4Rrqr5C49%2BbbVnWllBuexc2iCY%2Bub4hcaQAccs&X-Amz-Signature=2d930f39f1c94b797b0b652622f48de79c48ebb19b2285133b102dea87e071de&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4GLBNYR%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCn4Lfs%2F4K7JRKxDs4qevy0bdFQRtQbWQTPIVXJdRikVgIhANonry1eAOWZYF7pOeLGsgiNvFjH8fENO4dCHmnJ3iTmKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7XFrYPWehkzeME%2Bkq3AP881Uro710M2L8jrrpLHVDLEktnc164dweQJr6BCyCftXlDHFOgqW9AsK8lZ5GNNGLkh8kFCvJjeMckLlHyQImpMOVbb7l1GmN0OWTzMCgSKLP5lM1SaGMsoJx%2Fxlk22TLgVyBc9hyu%2Byvw2FzpTX1ue4BDq%2FR0MrCsEjnZe7jUAPDW3rRgtmEFQ%2BoiWebO35HUGDCT2XPr7m3TuIAHH3KKA4a8DBz07J3FtYPDz%2Fcee7nmaLLUlKFtcWrP20vwG6H8229ga%2BG%2Falkc%2FCxBDJde6KtB4sXlPX4BYOcy76wXptfSFfGxZsdod4%2BNwbHkgZJocp7MNyM%2BLVF8ehZHPKvcpQnSw%2Fw8k%2F0yANEz3eCyei45BssYnROPDCvDSSyR6XgktiF4xc7xoBHFpWTcCDmNzpBmXC3plhyKdh6%2FVTn8CMCKVOGpg%2FcPbsizEOwLrInpttBtxJTNrmm86qVBXsbiRXEbesDA4NbjIyoEo7FubqX65XmX%2FhhhejFnLbvjCyDmtYBt9o%2Fjo2z1TQpRym%2BN1Q8hL%2BL250d1nMAGZLfyxDAsP64lGq263EI%2BS%2FmrEm%2BBRpZsLfeUTV6TwOnafWixbkHPfa66wQd9vCPPe1XLMNp7ulBz0bMz%2FHw4zCuo%2B6%2FBjqkAZFxFoJQsIad2wklNJN6LWzkfsNQ78ajLWO%2B%2Bj7UB0C4FnUHw2SCJHKnTOJ5a6rDrVm4STDWhNRfHbSynhOlO2zBKzz1wzK3CIMwVA0nFd%2BD45BtYjOdDzZEgyBuAn4sazzk%2Fz2jiWmSOdK0VSFba0UBUr2K%2Bgq%2FcLp4nuiA6ad8Anczuq4ZBPmyifZOeL8W%2BVMZSEUQ3bqkLUDeHGlTuqmx0%2BwI&X-Amz-Signature=dd66a98fa50af865adc65cf1c1ffa27081c5fe1f7b6faa6c32a4139b433c08c0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W3LL5RH%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC%2Fa4JB8ORSDZadxM2HzC8%2FGCi%2ByXSA5tO1F31bKFPRKgIgLJS3AJQdY3g%2BqjilH96WxGA0GHMpw2kY5wYUIiz1m8sqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeGA5oF41b2e2NuIyrcAy%2FgPsTZceAhOGOX3K9lqDsJSGHIPDv0O1RP8TTvsoWVMT0S0zdDwgvCwBvZNkHHaIjPnhD9SuOuvO%2Bj0FHw4oWwZ52tyocj20wGlpg1pmUwfiWVkE8vArE0zSep6JTd9vS1cOe31SBAwNEhjaHordv6dFZJtUEfoxq9p%2BzZLSxFqOX%2BZOnBrDFrF1XTVph7eYi8sWaZsmuP1I9DVKFLD1FMHNAChx7LDoXWU1pfU2b%2BmIIhp%2FqdIsdmsPZHYnpbAiy5VPQ1uEozfoEnoPHNLx1IEzRRA1II9SdkaBgs3e4hQa1BaeGDuz4Hjv56EQSCHVCXPwyNjq%2BHoVJ6F3XvkfQflCkap2eVdcAjszOZwz6yAf8Vps7FIRhrxp5ERGbpL08ih5hsi2jgDYI71PIru%2B%2Bt9txam4f2AdmZwBDKL0IEKNIxGRO2YE2DxO8Va3J7dRO%2FAnAIRrBc368Zm%2BrHksxsRdAtaaryMnRywswA5gNlvy7g0O2%2Fu6KQUWJg%2F5YWCovojpabBwcSaZI%2FBFMQHCEUAz3lnGud1oHE9YNBZath0Wj3hVLjIY0e0aO1Q%2FGvLiYhRSyTXEES09qDSW5dJXmzHrPioXh6Zw2h681odSVWloOO0II6weFbiMBSMJ2j7r8GOqUBmVQ%2BJpnkda5l3F0h2lv6Sjg0ZnM0zLI20RdaOpN2HJ6LESfocF0Sl%2FD5EJqqBdT%2BsuYnqK6PbUsBkH%2BcEA8zmKmpVeLopmAYad12xmnaJgwFJaGH5CiNHPzlfEmriY5EvcXUXcL%2F%2FPWiYXqhuEA1223DXN1YLHwFqYvPuDZAf92GMDspgIZGj8Lgk%2B0WlsSoabkBF5hfgPDLcNlNQamOMCSaCnby&X-Amz-Signature=2246c0f206a5c812277b7aba04cd3dc92e27e896251dd3a2fb519ab8981c1e0f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
