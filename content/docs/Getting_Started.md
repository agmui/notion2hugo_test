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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEJXTYWZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQD1YVh69zexDREPqIJCHKHkb7ofLJkxIikp13I7wQyupQIhAPgtSgx6Z0vIc7Vy7BDsGdGI8XSpRrqp0J8GI5kgIAolKv8DCF8QABoMNjM3NDIzMTgzODA1Igw3gJusyNZ%2FKsZGotQq3AMpzc8ZcYgnAsq0gb%2BeA0YB7lgqkgJAaKbFCdV9jpgWFiY98nJTZNa9qTbWYONG0XH1lANcUBnuSIbxr2SL3h2zHXA%2BiFyu%2FdMbxPyxIbxCh0910f7HoDegT2HYFXcppWfYPrlQ2t5vVq6A5OqQzeGdNAzjBU%2BwzULY52L3gQ1PEOpQhigjpFMTjPOhgLdBfCkypG852Uyl33Tc%2FXxnwCBh%2FDp2IoOn97gj4vwPet%2FcpceNItAr8TJIwu%2BNwwSAgPkS6bPgxoiPvVENYLElr6VVScBQ2pK3n26nlPBFKcBM7MLmpAqW5hPLs%2B4ixnYEq4EIk6uMoLcviiNTLvLf0uUt%2FyMhS1U29XOu8gsVWHQ1x%2BXxZhvMSEBRvdERsYojrV6JPm2%2FByb2ZbHPUuP%2F%2BkoDNw6M8nrhLn5mpnpc9P9De%2BmmhcBOluVuxu%2BdTwnKuOMRxYxwTe2A5IWWGlJMO8F7NzovIW57bZMeh6QloALut58XRMNWkc8VugT35fKVQIVE3kxhIjzcdI0d7QJyXtqYnfT%2FvFnfn0XQdG6NXB%2B9oNU4J3gaH9CP7DoRzGJW%2BYsHHB%2BI5gsLtn952K3inn8aLyLyl4BJ1NEmWjoKtT2%2FpntSTLoWCSVFaUmwoDDowJPEBjqkAZZ43HlVVx6mvlx9mk2NsJmR7o%2BoRpLdzyMFekjMFx%2Fwax2YRaUPSbbBWgEfbRE5yZbQ%2BBE2FrPZuhn%2F10OthAPu10sNo590VryuPVmi1%2BN%2FcboFny%2B0bvCyloKZLul8jG9NcUvUapTOfW%2Fom5vTsAbXES62uoP3OKtC%2BIRLWfTUaFxLJV%2FssWxeGClgXmNZ7%2B3HexBPNuT6JUVSVC5uljssM%2BDA&X-Amz-Signature=a391885efe460c629ab73e9af0c7bff7df7935e9bd24da469b9d785952e684ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEJXTYWZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQD1YVh69zexDREPqIJCHKHkb7ofLJkxIikp13I7wQyupQIhAPgtSgx6Z0vIc7Vy7BDsGdGI8XSpRrqp0J8GI5kgIAolKv8DCF8QABoMNjM3NDIzMTgzODA1Igw3gJusyNZ%2FKsZGotQq3AMpzc8ZcYgnAsq0gb%2BeA0YB7lgqkgJAaKbFCdV9jpgWFiY98nJTZNa9qTbWYONG0XH1lANcUBnuSIbxr2SL3h2zHXA%2BiFyu%2FdMbxPyxIbxCh0910f7HoDegT2HYFXcppWfYPrlQ2t5vVq6A5OqQzeGdNAzjBU%2BwzULY52L3gQ1PEOpQhigjpFMTjPOhgLdBfCkypG852Uyl33Tc%2FXxnwCBh%2FDp2IoOn97gj4vwPet%2FcpceNItAr8TJIwu%2BNwwSAgPkS6bPgxoiPvVENYLElr6VVScBQ2pK3n26nlPBFKcBM7MLmpAqW5hPLs%2B4ixnYEq4EIk6uMoLcviiNTLvLf0uUt%2FyMhS1U29XOu8gsVWHQ1x%2BXxZhvMSEBRvdERsYojrV6JPm2%2FByb2ZbHPUuP%2F%2BkoDNw6M8nrhLn5mpnpc9P9De%2BmmhcBOluVuxu%2BdTwnKuOMRxYxwTe2A5IWWGlJMO8F7NzovIW57bZMeh6QloALut58XRMNWkc8VugT35fKVQIVE3kxhIjzcdI0d7QJyXtqYnfT%2FvFnfn0XQdG6NXB%2B9oNU4J3gaH9CP7DoRzGJW%2BYsHHB%2BI5gsLtn952K3inn8aLyLyl4BJ1NEmWjoKtT2%2FpntSTLoWCSVFaUmwoDDowJPEBjqkAZZ43HlVVx6mvlx9mk2NsJmR7o%2BoRpLdzyMFekjMFx%2Fwax2YRaUPSbbBWgEfbRE5yZbQ%2BBE2FrPZuhn%2F10OthAPu10sNo590VryuPVmi1%2BN%2FcboFny%2B0bvCyloKZLul8jG9NcUvUapTOfW%2Fom5vTsAbXES62uoP3OKtC%2BIRLWfTUaFxLJV%2FssWxeGClgXmNZ7%2B3HexBPNuT6JUVSVC5uljssM%2BDA&X-Amz-Signature=43a3e683431175782a230ee43fcd576cb4ba1f91d313478dc9678c6f12c4b235&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEJXTYWZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQD1YVh69zexDREPqIJCHKHkb7ofLJkxIikp13I7wQyupQIhAPgtSgx6Z0vIc7Vy7BDsGdGI8XSpRrqp0J8GI5kgIAolKv8DCF8QABoMNjM3NDIzMTgzODA1Igw3gJusyNZ%2FKsZGotQq3AMpzc8ZcYgnAsq0gb%2BeA0YB7lgqkgJAaKbFCdV9jpgWFiY98nJTZNa9qTbWYONG0XH1lANcUBnuSIbxr2SL3h2zHXA%2BiFyu%2FdMbxPyxIbxCh0910f7HoDegT2HYFXcppWfYPrlQ2t5vVq6A5OqQzeGdNAzjBU%2BwzULY52L3gQ1PEOpQhigjpFMTjPOhgLdBfCkypG852Uyl33Tc%2FXxnwCBh%2FDp2IoOn97gj4vwPet%2FcpceNItAr8TJIwu%2BNwwSAgPkS6bPgxoiPvVENYLElr6VVScBQ2pK3n26nlPBFKcBM7MLmpAqW5hPLs%2B4ixnYEq4EIk6uMoLcviiNTLvLf0uUt%2FyMhS1U29XOu8gsVWHQ1x%2BXxZhvMSEBRvdERsYojrV6JPm2%2FByb2ZbHPUuP%2F%2BkoDNw6M8nrhLn5mpnpc9P9De%2BmmhcBOluVuxu%2BdTwnKuOMRxYxwTe2A5IWWGlJMO8F7NzovIW57bZMeh6QloALut58XRMNWkc8VugT35fKVQIVE3kxhIjzcdI0d7QJyXtqYnfT%2FvFnfn0XQdG6NXB%2B9oNU4J3gaH9CP7DoRzGJW%2BYsHHB%2BI5gsLtn952K3inn8aLyLyl4BJ1NEmWjoKtT2%2FpntSTLoWCSVFaUmwoDDowJPEBjqkAZZ43HlVVx6mvlx9mk2NsJmR7o%2BoRpLdzyMFekjMFx%2Fwax2YRaUPSbbBWgEfbRE5yZbQ%2BBE2FrPZuhn%2F10OthAPu10sNo590VryuPVmi1%2BN%2FcboFny%2B0bvCyloKZLul8jG9NcUvUapTOfW%2Fom5vTsAbXES62uoP3OKtC%2BIRLWfTUaFxLJV%2FssWxeGClgXmNZ7%2B3HexBPNuT6JUVSVC5uljssM%2BDA&X-Amz-Signature=55f69bf2a57f158b9ecc02bf4c7611c409c18fdb143dfa8d2292c311c79eb02c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSSQJXYI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCDfjuDJKWw2AYj6aKJWjIz7n3rPYoo%2BP%2BAGhYr3LHLFwIhAOam8qIoaWG6Lz8X1WSjE%2FKkRc7R4XfyH%2B9eF4cyT2h%2FKv8DCF8QABoMNjM3NDIzMTgzODA1IgxQ4ZiOW1lRYvnf2yUq3AN2P9HR5kamKtUbDuBisSqDJ483lETST4T3hJRsLw1Vcihmf1w%2FgeYDjZtNzi4tpHf81kk3yYkYUMtphQ6yBPw70wTRzJnMXILix%2BT5nDRrayUtmD1lOal5QDKeDvXCsQLHElVz76rmbd72xHYyFZ27rFvrei8a1IDWWla7bGfSwKIZQJOEZmfYCVbccHZ0I8smDd7VRcQclwaWOmaOvRtblaQGyq2lm5MSDvM4gmX6cymchCdfv2foMFuW5Q3VKFT%2BFKhSBNuz1zUWHm%2FVqmpXT%2BK6BCuR5wtREt1qDabhhxYTNUtsFlj5oOQ7Ym7zveNqrwKt8yWSvtdsObzP379OXRY9KiyjPu4acARdZUAHdHbCkDke%2FB%2FnUkb3hNYGfvvaYvNVYkOccqqIMoECNOibGP3568u7iCK181B1Yk%2F59%2FWAfHl7lKagIyMPP2GuKbdsk5EC6PjDEfWwz8czgXhBOZnU5FT1%2BA3F7EFda761C6nHtCJG6M3aMYR2Q494JGfnao8ytgto1ffvZGE2GLnK5Ksdfpsd550ICRGGNPiB%2FjpcHDlCxDHfo0FidL5e1dNHjJoL1g6%2Fei2EbPQ4cu0jf5Qcgf8YAIkkEMAyOs%2BRW0AM9UjIDAqdu9OtNjCNwZPEBjqkAWOTF7H5zW5eDAhQYKP1OjFRAsNJGQ0cIsgFuIdB%2FVCbqo7uNcMIa5ElZeisJI0QwUYUKXlDrgWgPULMJJk60UWYWuSg4UqaKYMS3CvFihtyBDs3wrRnJORwrrFYs1Jnt%2Fri%2BggCfDnBGs%2ByaF2E6JQNMyjIB6jlhf6LWbBR%2FgcXeCOS1H1Q8jWJHEraAsDCs4iVgCV%2BPAmp28fBro0dHxwU6qab&X-Amz-Signature=d3b9b4f16621b14867cb8c1c8375df1f40f1955cbcc8b2167c791e7d2b9570d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q3LQMU4%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDSTQ7ytN%2FsWMh365cJ8MTveDh8JYMFm%2BsivMmUFaLRygIgE9jXk3veSkE30%2Bj6xLN2uY%2B7q5VoT9RTwam1sJGTGCkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHpyZ0%2F8RWRhyRls%2FCrcA7XcFlDhRPkCWsp5IOk%2FLUXNyF%2B3Qjy5sdlMdHfObqfq4rgNcdqGnnMuw1fZbuSi3JpHmVZTtsWkLVwpPhelfDgZDVEHyjp%2Fw4uqT3f23an%2FE29hZ%2BnrrYQiR7zDHF6qWXr1pWZRqFEkaFzx%2FnVcDBdKqCKoKwK%2BSC2wI1OUaVkx0M4xFOj5q%2BVVKSyz3AxrHjOFtwBeVIcr09ebHKodD325%2Bl14I6laFes%2FTjSiWmFlbCgtif7TAQ4sFsaJqGkWib5g9xT9okic9VBm%2FysHuk3hcihDV93IuA0Tvh8H0maV1MHkRwfytO0YsN5iNSigVaK8jPyoxUw8pJtdauRTNUloRlkAGkckM%2F6guTEpy6kQXC%2FgeDBilS9iaX7FhO5nKaFb3xv9qT%2BEXZ5oHCligS%2FCFElwhP6CzkrupfV%2BPHtBJ2%2BEAU4xKRpTObx%2FBRbJped0jxKLeTSQKjiKJ%2Fq95sPPg4wOe4Jqcd7CyMzMWgVDui0biZUHANQB%2F2GvkQaymxbboAmkPhV%2BxDB4AJjHhl7HwsdbzuGqSHsxECuwHr9qeX08wLDLxAOMkoc1179xIPsXk4ERLdNbVmK%2FDSFfv3G9T5dGACRnIYQV8GNWEhBw%2BlQA0MS%2B6s92jmVIMNzBk8QGOqUBVHejMSCz71YVnWdNhhRQlv51CbuUGVGkXzan%2F0wLBIy9g5nXL6B07zF%2FZquvQuzijU5AoP%2BYjiNAbHQY%2BAzD9heAMAGW8%2BCtjSUH7yIstXyzrJa76G8Cz4wa3H5NfEsnrAINahHpZDXHJFBSB9WIRN2LOtMveu4Mt7cdotKCYuu3PHa7hrd5SESf9kAtL0OUWaBytSYa921pGXtMWjo9kBL7pMdL&X-Amz-Signature=b7af421a04bfbffae6884a58034d6ec235ed03196c65bbbeba2a3df7b4b634a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEJXTYWZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQD1YVh69zexDREPqIJCHKHkb7ofLJkxIikp13I7wQyupQIhAPgtSgx6Z0vIc7Vy7BDsGdGI8XSpRrqp0J8GI5kgIAolKv8DCF8QABoMNjM3NDIzMTgzODA1Igw3gJusyNZ%2FKsZGotQq3AMpzc8ZcYgnAsq0gb%2BeA0YB7lgqkgJAaKbFCdV9jpgWFiY98nJTZNa9qTbWYONG0XH1lANcUBnuSIbxr2SL3h2zHXA%2BiFyu%2FdMbxPyxIbxCh0910f7HoDegT2HYFXcppWfYPrlQ2t5vVq6A5OqQzeGdNAzjBU%2BwzULY52L3gQ1PEOpQhigjpFMTjPOhgLdBfCkypG852Uyl33Tc%2FXxnwCBh%2FDp2IoOn97gj4vwPet%2FcpceNItAr8TJIwu%2BNwwSAgPkS6bPgxoiPvVENYLElr6VVScBQ2pK3n26nlPBFKcBM7MLmpAqW5hPLs%2B4ixnYEq4EIk6uMoLcviiNTLvLf0uUt%2FyMhS1U29XOu8gsVWHQ1x%2BXxZhvMSEBRvdERsYojrV6JPm2%2FByb2ZbHPUuP%2F%2BkoDNw6M8nrhLn5mpnpc9P9De%2BmmhcBOluVuxu%2BdTwnKuOMRxYxwTe2A5IWWGlJMO8F7NzovIW57bZMeh6QloALut58XRMNWkc8VugT35fKVQIVE3kxhIjzcdI0d7QJyXtqYnfT%2FvFnfn0XQdG6NXB%2B9oNU4J3gaH9CP7DoRzGJW%2BYsHHB%2BI5gsLtn952K3inn8aLyLyl4BJ1NEmWjoKtT2%2FpntSTLoWCSVFaUmwoDDowJPEBjqkAZZ43HlVVx6mvlx9mk2NsJmR7o%2BoRpLdzyMFekjMFx%2Fwax2YRaUPSbbBWgEfbRE5yZbQ%2BBE2FrPZuhn%2F10OthAPu10sNo590VryuPVmi1%2BN%2FcboFny%2B0bvCyloKZLul8jG9NcUvUapTOfW%2Fom5vTsAbXES62uoP3OKtC%2BIRLWfTUaFxLJV%2FssWxeGClgXmNZ7%2B3HexBPNuT6JUVSVC5uljssM%2BDA&X-Amz-Signature=55d03b9d3ab3e694267f0cd3bf63d4e17b15fdcf73853519b8b014c75bed3b7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
