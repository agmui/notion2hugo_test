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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM3JQVQF%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdiAwE16QxVhJLynK3CO9jJa3B%2BWBKbJK1nhTskailtAIgTZAbj8%2FEPAB641lie3OEbY%2Fk9sbtaAURjLO64bSv2SEq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDMgRkQ%2FW3TlbhrJ1NSrcA6WxXNXTwy%2FmjX46oMmkIcAp7LAtsYEH5HyZ7488TWRi4UR0bDEsG2xM9ur2TTuC40DNxe57uqjMP8fHEdlguLRvpTi83lPlQLlNv0BgcnD%2FPIX2r93fLJpr6zRy5aafAM%2FgqVWpxeOSls11xXSNhqcbrt6VuWbaYXuQlaH16RX4FOEOVRsK4es3RyptyljLq7aAPe2duww6fVpyUfIL4UxZnYLcxCpX%2Fx6rsQTzLUZmg8xpiie%2B8bO7qSZ8%2FUBW7MF4k%2BXD%2Fhd0%2FDWkHYdkJ8XbZoljXINSnAtXYs2YcBQU4ov98S4rERhi%2F33cu8NBMjUMRDiNE8Qb2JSYWV7ZHX6s8mp4KsSnXaRRj0P9HAibugP%2B5UUs83hVd2qpHXi9%2Flya5y9jTDKvgqNdyRWObbzks272DMX%2Fr6xUx0nen7xMGwDXYSzCMXXjN0ybc%2FzmLrAELw67e%2BwgFtzyzBrpzpBDHaZQckzxLqW84btsDErBxNFelvdcrqRvE6cn2fkG0BvD%2B4nWTSdzIP4feS%2FZnFcRhTSb3k8fs%2Fxw4fAGrNMcrq9MvENHWk6tbYrq%2FtYww8vfoFgSaERXy1tRXwXypXn0Aj%2BwosYl%2B7MsqgYgjpA6qvmr2NrpcP9GO3KcMJ6%2B274GOqUBI2shxmXfRk0vZegFqFt9U322BnrK08S1juQZ13SWBj3SlFCep9ES2ksk2EfwEVnnU%2FC%2Fph3rlmWIQfPOEf8n8RInBkpInCW6FeNGHLjz8mJLXKqhnFpKl%2FNdGS0X6tglRmOgviINXEXuKA3XKK6XnakC6JqIuIhU3JkH3T7Ydy2Nmh%2FrQwSqohnQEIGDazcbEyikMSKHEm9aj20UXFyfZctIyCr%2F&X-Amz-Signature=a3f9e427b753808ad34a718d1a13a05fffc87c65efc894a06afdc6a2a1e06766&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM3JQVQF%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdiAwE16QxVhJLynK3CO9jJa3B%2BWBKbJK1nhTskailtAIgTZAbj8%2FEPAB641lie3OEbY%2Fk9sbtaAURjLO64bSv2SEq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDMgRkQ%2FW3TlbhrJ1NSrcA6WxXNXTwy%2FmjX46oMmkIcAp7LAtsYEH5HyZ7488TWRi4UR0bDEsG2xM9ur2TTuC40DNxe57uqjMP8fHEdlguLRvpTi83lPlQLlNv0BgcnD%2FPIX2r93fLJpr6zRy5aafAM%2FgqVWpxeOSls11xXSNhqcbrt6VuWbaYXuQlaH16RX4FOEOVRsK4es3RyptyljLq7aAPe2duww6fVpyUfIL4UxZnYLcxCpX%2Fx6rsQTzLUZmg8xpiie%2B8bO7qSZ8%2FUBW7MF4k%2BXD%2Fhd0%2FDWkHYdkJ8XbZoljXINSnAtXYs2YcBQU4ov98S4rERhi%2F33cu8NBMjUMRDiNE8Qb2JSYWV7ZHX6s8mp4KsSnXaRRj0P9HAibugP%2B5UUs83hVd2qpHXi9%2Flya5y9jTDKvgqNdyRWObbzks272DMX%2Fr6xUx0nen7xMGwDXYSzCMXXjN0ybc%2FzmLrAELw67e%2BwgFtzyzBrpzpBDHaZQckzxLqW84btsDErBxNFelvdcrqRvE6cn2fkG0BvD%2B4nWTSdzIP4feS%2FZnFcRhTSb3k8fs%2Fxw4fAGrNMcrq9MvENHWk6tbYrq%2FtYww8vfoFgSaERXy1tRXwXypXn0Aj%2BwosYl%2B7MsqgYgjpA6qvmr2NrpcP9GO3KcMJ6%2B274GOqUBI2shxmXfRk0vZegFqFt9U322BnrK08S1juQZ13SWBj3SlFCep9ES2ksk2EfwEVnnU%2FC%2Fph3rlmWIQfPOEf8n8RInBkpInCW6FeNGHLjz8mJLXKqhnFpKl%2FNdGS0X6tglRmOgviINXEXuKA3XKK6XnakC6JqIuIhU3JkH3T7Ydy2Nmh%2FrQwSqohnQEIGDazcbEyikMSKHEm9aj20UXFyfZctIyCr%2F&X-Amz-Signature=39ad51addb0f53f7df12d4f293df6aedf83be41fe7c29a18f9220fae2acf0a04&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YQATEPV%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1SGFsKByLjxq7k0%2Fdcu9bRv5eNqgkKylMKjBeZiCqOgIgdT8KhZ07WAy5HocNakH%2FQiUF4lboW7c%2F0vG0H7tzTJwq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDIfA3WNHGWiBa5ajsircA7J%2Bu0CqBG5i%2FHOzz1a3pLJG2v7nfsjiEzqvJ1J8Yxzdavwy1M45oKJRDjGUMCDNufUU0nb9ihiETUYR7DH%2FnfuIpwOoQSN35yprCFJF6iWmKe7S%2BOiK6w1hAA0L7Bt8OzUmGMju2kqgcQTjAHKkgcz6iCgXp2GsSSNLiO%2FZRzFRK6fBktasBzaNzaKqu5yy3mWKvYXeTeSuYVM1sb7IKDgid%2FLjinHVaRt1lgxSamonBPDy6gsx2xcgGaDUuNKgGfp%2FMJkoLDj7lyLyBq%2BfmVAWWRzaLsgUBPBLl09Dm1fBMHQV3zUW3GRq3%2Bm5bevBfqHVXNhu5MFQ7zL%2BTD4Ss4g0b0aBLfkibwrtOsQPRDsY5Xln74jIhtpoDtEHJFibK5ES%2BFZ8lavSxmkM9UTbqbA0dkzrNNJV9sWIND6pFUngAF6QiRRfrs1lqn%2FNHCuS5R%2Fsn9x3smdUc4Wuee1gdt7A2lEt3PBnjkQhd769NnuwTfHLn9sSVmdCXlNt0hkkvdLSWaUCDkDCUPqK%2F1s377X1EKGc5ONsy5aVbQIDQG129Ig5o9iWcYII8hdHtD2gSkYmFkNBS7XelttlR8BDcD01a5qV95KPQ4mfqoefw6eSBT0w4G3PJVJv2R5uMLC9274GOqUBgYyLxncJnJHNiNmD69EpSlLUjMi1V%2Bjg02KPsQwWYsmKlbeIAN4VFXe7C2bIwxv82Cn6fxDjN%2FjaESt%2FN0xkbLBMoyPFHlzKLU9xqEDRgC4Lgaduqrjn3ihWgdC0ALLbZ5LJlsiGr5F63PSNVoETiZPe1vR9BHy2uqykR5g%2Bhmlq36dHxv17pIxVq7AYubeYIqlTOn%2BaoioNPskC2aJtR%2BHWNFP1&X-Amz-Signature=add83827c9c0d28010e5d3645be659adff25741121b0f99e53c05538d07852d1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DH4MCNH%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDynuSQ%2FnP6OK%2FZMPt3Ttr%2B%2Feljdvp1LiXpTE6R93eq6AIga5uvpHKdwZTCY%2B6esSB41ufTwSVzLdKsoVkuMCHXUtAq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDLey5p4guDX0Mkur%2BircA%2BK2mit94Jvy60dGPg3X%2FdmW242cADbNM%2Bx5Ei5Y%2BU60oaV43EmHHBr6wYiHq3%2BK4kbt32nZSSa2sCmtU3LXTAocBymXMRG3LXxk5WC6ez8bCwR0tvUZhHHx8bMceM3Kjf%2FObCFfxpU2diOOPMEI5Vaip9c6SAtMYOE9kpN0HuLetJUprVj1d3lkQzG0X%2B2sVFyxmf2iMIHdG0RTUzA6PsS13r8eWRPOSzeTWJ8ZY6PJRQf%2Byq%2B%2F2xEfSzr1hAaiLAa1AVC%2BUJB7uR4MJ7Vmtu4W3REI0cf6oIa49FC%2Bh6kozB77g%2FXWUI%2Fshk7hoDo9wipRP2%2BC18dSWcfn1nVIzdiMh133YOW6agJXMeBiq4iHC43uJoH6JXlxxSRbmiueX%2FfnoNh1ZeLU2HgjEXyyLMRApd%2BPWRdpkjbQdyA29OdErHWAxkBhEQ4qlO0UQsInKlir%2F%2B1g6Fo0PE6hASzHWPvS%2Bttv4WOTpm82xccv%2BN4okn3I4jODf1fyBP37vlNRQ1GN1QDxXmu12RvzxZsnwnjdpJZvOC1EB2qxTR6px%2B%2F%2BMRxi5W4IUvdYVLPvMwz0j1L2ymVBGP4WQTVAyDQpb74uS3EmtrCqOmYGqElk503K9fIq0euxi98bDt4PMNe9274GOqUBNYWK1e1sDUNNt3iNakSR1ClcM%2BzhYQx0TTXI82YQARbC3tWFvU%2BMmk%2B%2FhmbEPEYLfI4OP%2FJKFNGf2Mw9x9TAlLRS59XmEDo3rKYV0JsGx1Xa3ZcTR76HeVtol3F5vdCz62HNGaARuqKZfMgV6%2F4PzzlLhru847UV9b0PEAlQBFOOMhQYmRHR8qAhO%2BaUu37OmAQ1UwsvzhpnO8Ej%2BPZxwkE2qWbt&X-Amz-Signature=28cc42949afcfd3b598320f2598f8d9525fdde5ae839da7a768d07efe4af4fd8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM3JQVQF%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdiAwE16QxVhJLynK3CO9jJa3B%2BWBKbJK1nhTskailtAIgTZAbj8%2FEPAB641lie3OEbY%2Fk9sbtaAURjLO64bSv2SEq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDMgRkQ%2FW3TlbhrJ1NSrcA6WxXNXTwy%2FmjX46oMmkIcAp7LAtsYEH5HyZ7488TWRi4UR0bDEsG2xM9ur2TTuC40DNxe57uqjMP8fHEdlguLRvpTi83lPlQLlNv0BgcnD%2FPIX2r93fLJpr6zRy5aafAM%2FgqVWpxeOSls11xXSNhqcbrt6VuWbaYXuQlaH16RX4FOEOVRsK4es3RyptyljLq7aAPe2duww6fVpyUfIL4UxZnYLcxCpX%2Fx6rsQTzLUZmg8xpiie%2B8bO7qSZ8%2FUBW7MF4k%2BXD%2Fhd0%2FDWkHYdkJ8XbZoljXINSnAtXYs2YcBQU4ov98S4rERhi%2F33cu8NBMjUMRDiNE8Qb2JSYWV7ZHX6s8mp4KsSnXaRRj0P9HAibugP%2B5UUs83hVd2qpHXi9%2Flya5y9jTDKvgqNdyRWObbzks272DMX%2Fr6xUx0nen7xMGwDXYSzCMXXjN0ybc%2FzmLrAELw67e%2BwgFtzyzBrpzpBDHaZQckzxLqW84btsDErBxNFelvdcrqRvE6cn2fkG0BvD%2B4nWTSdzIP4feS%2FZnFcRhTSb3k8fs%2Fxw4fAGrNMcrq9MvENHWk6tbYrq%2FtYww8vfoFgSaERXy1tRXwXypXn0Aj%2BwosYl%2B7MsqgYgjpA6qvmr2NrpcP9GO3KcMJ6%2B274GOqUBI2shxmXfRk0vZegFqFt9U322BnrK08S1juQZ13SWBj3SlFCep9ES2ksk2EfwEVnnU%2FC%2Fph3rlmWIQfPOEf8n8RInBkpInCW6FeNGHLjz8mJLXKqhnFpKl%2FNdGS0X6tglRmOgviINXEXuKA3XKK6XnakC6JqIuIhU3JkH3T7Ydy2Nmh%2FrQwSqohnQEIGDazcbEyikMSKHEm9aj20UXFyfZctIyCr%2F&X-Amz-Signature=9282eeef6ff36bb8d39374e9ff49742e801752c7052501e3b974942c78ac1911&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
