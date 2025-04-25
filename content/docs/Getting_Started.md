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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVTSNZAV%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T004008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2hubMcfQGzIxuuCgCpKSpg4reXxtBtlZtmf1FjO9gaAiEApb7nefIqDNN27eDbxvb0aBM412hZBzwBmbUW4WvJ6Agq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCPZkd4TiZzxrfscwyrcA%2FCBoH0z11NxzMdOL4PqIKPMOGxqj1Ds%2BLj6VB9YG7ckf8EVhmm2a93GPuOpN%2BoQxeTy12qP0wFYv6xHeu4%2BjCy311Ofgg0P3WJk9XfazTQIFM9OaS3K%2Fikb%2FAd4yNPTS%2BBxkmZOpd%2BbIlHLuTyusLxR3uFexNZ8Gs9t9RxFYvjoKWOz8mzVpBNepBlYKBodyJCEumi55GXhbERqbmgzh3Sdxm8nBBlch9hwFHQQLWE2wkEtiRVyey3vW5eQ98OVNjm6u457CWDCq99ApHgKhx2cadK18ihq7MAkWhJXfEzuVuCPqETLqvqSOeNr%2FfadL9N0w3orc2b5pg95lRTS2Z1Oq85epGXBYbkhfXSDL%2BS%2Fy%2FhTyXZ9zh4%2B6TZR3pqeTf%2Bi%2B4V6zw%2FdnIPuBIac9GsP66wsVJRJuWu1GV2aGSo9cf8sTy7Zb8cMxIChoBWrq9z3PoKD5QpP%2F%2BU59WinyAatGiGvf8kQoB0smBMDLGcTWIPF4v4BD3mJxWxcZroIctPmoaLQWQ4dLlvC%2FGVTH9pdnOdqDzir5SjKimqihfvqEzXRCAiqwi2qJ9XJj6ag%2B%2FuCA7FGjzmSQp%2BLyNFC6z2KPY2hyzgHNgT7KEeW5MG0kfikHIo6PghiIzgjMMWqq8AGOqUBHHwwCIwVRuwPNupuEMu%2B%2FClZnRNcqzxSgPFP%2FV8UgxLq89Po4ljDvahQBbB4sMcC%2F9ZsOKRY23KK4JyTpSMjbr0SAzPxqjEfwPkbNGYoeTkyyIRdB3mdCB89pT5TtAkemixQtppQ6LLLQMCHYFtG54yR2gsaRVTWN%2BSsmXs9FSvcwEx8VRJ%2BQf4rfV0Mmw94n5MkgrCaK6BWzdYwWkG%2FZdogECot&X-Amz-Signature=f3d967d7b17d1a935b9d57ad9db3d2d4a74911ea6a4ad223516dc653a9384d46&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVTSNZAV%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T004008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2hubMcfQGzIxuuCgCpKSpg4reXxtBtlZtmf1FjO9gaAiEApb7nefIqDNN27eDbxvb0aBM412hZBzwBmbUW4WvJ6Agq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCPZkd4TiZzxrfscwyrcA%2FCBoH0z11NxzMdOL4PqIKPMOGxqj1Ds%2BLj6VB9YG7ckf8EVhmm2a93GPuOpN%2BoQxeTy12qP0wFYv6xHeu4%2BjCy311Ofgg0P3WJk9XfazTQIFM9OaS3K%2Fikb%2FAd4yNPTS%2BBxkmZOpd%2BbIlHLuTyusLxR3uFexNZ8Gs9t9RxFYvjoKWOz8mzVpBNepBlYKBodyJCEumi55GXhbERqbmgzh3Sdxm8nBBlch9hwFHQQLWE2wkEtiRVyey3vW5eQ98OVNjm6u457CWDCq99ApHgKhx2cadK18ihq7MAkWhJXfEzuVuCPqETLqvqSOeNr%2FfadL9N0w3orc2b5pg95lRTS2Z1Oq85epGXBYbkhfXSDL%2BS%2Fy%2FhTyXZ9zh4%2B6TZR3pqeTf%2Bi%2B4V6zw%2FdnIPuBIac9GsP66wsVJRJuWu1GV2aGSo9cf8sTy7Zb8cMxIChoBWrq9z3PoKD5QpP%2F%2BU59WinyAatGiGvf8kQoB0smBMDLGcTWIPF4v4BD3mJxWxcZroIctPmoaLQWQ4dLlvC%2FGVTH9pdnOdqDzir5SjKimqihfvqEzXRCAiqwi2qJ9XJj6ag%2B%2FuCA7FGjzmSQp%2BLyNFC6z2KPY2hyzgHNgT7KEeW5MG0kfikHIo6PghiIzgjMMWqq8AGOqUBHHwwCIwVRuwPNupuEMu%2B%2FClZnRNcqzxSgPFP%2FV8UgxLq89Po4ljDvahQBbB4sMcC%2F9ZsOKRY23KK4JyTpSMjbr0SAzPxqjEfwPkbNGYoeTkyyIRdB3mdCB89pT5TtAkemixQtppQ6LLLQMCHYFtG54yR2gsaRVTWN%2BSsmXs9FSvcwEx8VRJ%2BQf4rfV0Mmw94n5MkgrCaK6BWzdYwWkG%2FZdogECot&X-Amz-Signature=0945b9e6fb35c7013025dbddfcdc47453aa6eed1e50e3046978f46763a27dd11&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CSQ2DPE%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T004010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfjiMkIxNf9c84EoFAXHZedy0yYZ7hllyvWZBDQs%2BGoAiBPkC69wtV%2BJIQ78jZ9FpyHbdgsdiHa9YE%2BmPRYa2kByir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMgDZMbpCjBCdEtMdUKtwD9F3ldCcGiV6yb%2Brq1TiWLBz38Cz1ioHtMqN3dvzpTJnC%2F8TlCU13evz2QrQ3na575VSxQ7vVkY6V3ssHvZOWmfp%2FvaODZbJV%2FSCJMJnEG%2FEFGOehimJSQlNlROZDIKewC5g5XrFFfUF6wlCuptNVHIdMDuGuSDhzSm%2FlhsqdifcUyXEKvMyFx51oIEzTOw6V4u7eWJda58k2KBlZrJSK%2BVlehH2B9QONtovvn0x1TFaSlDoath%2FPrbN5vTv0zV8SJX3TNX21H2gMd1S1vTZqz%2Fw4ifaDREgaRWL%2BlgTHu2%2BMwNyr%2FIErd9ngbldjfCnSSaJLaTYb1t8XvyYk2cGAzcz%2BGO1hk7VNMhhYlbXinEme12FV6BjGiymVphjz3AIJTVLilXpwfaVPLKQD0LcOV3iZQdTfHeHaiMnM1kNQPzuSCbRm70aaqTk7%2FCBNG%2FhAuxorbLlLMbw6jDm2FuUvpSKBJlm7I6nAOQYHGX1LXG1kQxQ43JI0MVNvUAXu2n4PgwUUTluISQQaEqH6zKDwzncEAWdZ3050cqCQoGf5tvRaLk%2FF3nVlkPx1oBJfT1zoXtFvj5JGFueAXWAQsBKXsb18b1Jz9VZPN3xadorPsJtGOSD0A%2BZrw80qjQowq6qrwAY6pgFgduYsA%2BAOZFtbKjpj43HOkxU43V7OoX7817KoBGmskE5o5a2ZeKznYSK8IvUuCpHxmY9FsMMRiZhIJp3oD9ufcQJBo3yPOBJePqHp0kLcj%2BiuA6toa3TNyN1jcjGWdeyDRrwP4MkzzBwFVEaozA33RAdNLS6ry78WtCWtfq2qv8PF5nK6iZmjUqpftu%2F4T%2Fd0dKWoc2NGUHG1W9AaH1jbrPiMuSoh&X-Amz-Signature=cb83cc21888b7e6ebe89f05e0724abe95cbb01e53bf55070317faa93faac0927&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVAWHRA7%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T004010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe1BiTnEWUWKew3%2BwDmWrLT6bFQ5pt5Oi5SQjjI2re7gIgQhkJv0biyOnm4XM33P2d1eC4o822BQJZSgDsG7adcTQq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDMPUjgui7QFz%2B8VurSrcA2dypbtUmbXgsVgBlfVn%2FS93yj%2Fitl%2Btqq9%2BlVTnwR%2BDSHiqYnNjmkuEzhbc0DjHCPwbbmWl95FOrXqjEH%2BkZI0ffw5Eu8%2F9svok%2Fyr1pXfuob6%2BFVwQu%2BAX%2BODtSfK9iAOk06gm47nyN%2FQzCTjEDkbBykWZG1sVSa1oYkQbKtxuoyQkLCl7gxAa2L8YEBBeTDbFYpvmI%2FIIZRFdwryQTME6FfEUc88lx%2B76aWQ9OnVHILNsLgub8KRPBtEqkG55J%2F4DbLAWzM1h0c8%2Frj0ABm%2FgMDzwrIotXHewSM2Li1LCQrWX22hdxnX0SZtjne1jwRwIrmp%2FZeMpTbNFShM4dWOeDmAb21032K3Nksc6cgUlECqbXNb8hcKUSltFxQptI8DREXCaGWukbqxu1JROWoSmMmtMYGm%2FKe46Ylwm%2BdSaSruP8Whc0smH0YWIAXJqHjvuM%2BbVRbJ5Cd9mB%2FUS74mR4nI9k%2BzeKe1WocILSUnq%2BogVO6dW3Q8OeXZ5Te9kBcmSDTvYZePv8DH8FqFKOYf9VR2abvhbDR%2Ffr5zjkS0HLq2oBzXbfJ7qGMYhRHhW6XMIDgPfD1Y66pZdXSLI6TH9fWv8imK1lXi0yNhjXEHaCGgFMAJVRupD%2ByYcMKKqq8AGOqUBgbJev2%2FOoi7fqpgF%2F7SBj8bnbj0ocXsmCoc%2FfYXQhlHpmLH3DoqWFXc8%2F2tajftf%2F9VjSfAgCodGRtN8jeYG4HFOZdilW5neV6WtQYXUNgiDzMDxjTIdNwVmUQVKSo8TK7%2BOIpdGPGCEBLg%2BfVpYGtHF6zoIPklrZA33bRPmz0VtVvHsMzwTEhr3ri6INcnfAlZhWweFmY7Q5BWKe2sYn7VcqTti&X-Amz-Signature=cd5c09c6ecee103723b2549741b0bc45617b90368dabb434eb3a525f459db312&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVTSNZAV%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T004008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2hubMcfQGzIxuuCgCpKSpg4reXxtBtlZtmf1FjO9gaAiEApb7nefIqDNN27eDbxvb0aBM412hZBzwBmbUW4WvJ6Agq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCPZkd4TiZzxrfscwyrcA%2FCBoH0z11NxzMdOL4PqIKPMOGxqj1Ds%2BLj6VB9YG7ckf8EVhmm2a93GPuOpN%2BoQxeTy12qP0wFYv6xHeu4%2BjCy311Ofgg0P3WJk9XfazTQIFM9OaS3K%2Fikb%2FAd4yNPTS%2BBxkmZOpd%2BbIlHLuTyusLxR3uFexNZ8Gs9t9RxFYvjoKWOz8mzVpBNepBlYKBodyJCEumi55GXhbERqbmgzh3Sdxm8nBBlch9hwFHQQLWE2wkEtiRVyey3vW5eQ98OVNjm6u457CWDCq99ApHgKhx2cadK18ihq7MAkWhJXfEzuVuCPqETLqvqSOeNr%2FfadL9N0w3orc2b5pg95lRTS2Z1Oq85epGXBYbkhfXSDL%2BS%2Fy%2FhTyXZ9zh4%2B6TZR3pqeTf%2Bi%2B4V6zw%2FdnIPuBIac9GsP66wsVJRJuWu1GV2aGSo9cf8sTy7Zb8cMxIChoBWrq9z3PoKD5QpP%2F%2BU59WinyAatGiGvf8kQoB0smBMDLGcTWIPF4v4BD3mJxWxcZroIctPmoaLQWQ4dLlvC%2FGVTH9pdnOdqDzir5SjKimqihfvqEzXRCAiqwi2qJ9XJj6ag%2B%2FuCA7FGjzmSQp%2BLyNFC6z2KPY2hyzgHNgT7KEeW5MG0kfikHIo6PghiIzgjMMWqq8AGOqUBHHwwCIwVRuwPNupuEMu%2B%2FClZnRNcqzxSgPFP%2FV8UgxLq89Po4ljDvahQBbB4sMcC%2F9ZsOKRY23KK4JyTpSMjbr0SAzPxqjEfwPkbNGYoeTkyyIRdB3mdCB89pT5TtAkemixQtppQ6LLLQMCHYFtG54yR2gsaRVTWN%2BSsmXs9FSvcwEx8VRJ%2BQf4rfV0Mmw94n5MkgrCaK6BWzdYwWkG%2FZdogECot&X-Amz-Signature=f723964fc8e9adfba48ebdc435c1233102ef89ceeada1129e5d47ab1e7ccfdef&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
