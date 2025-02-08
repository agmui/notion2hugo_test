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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H52WOSV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIGIto8tMl6XYmxPKOvj9rRXskW54D6uJkx7mzDMzGZdWAiAFMNsOxQOk0iQrZwFMeF%2FzSFCeRixIvno58yJIaG7%2BkyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLwqhlSNeiWAxKErVKtwDPOmjtH3i1%2FTRpLWnFGjxYLlR2P1mRjaXgZKzCL3aULk3CvP6ILWK5l%2F8Kb0LFki3PUCetsYzyTs89eNoZEL2lndIug1ZgCaALtGsWa5UmBWSkMEBgbOFWPbW08Hz37PBkV63s9teQx4AY9ZlR0nZhK0KWLVW0TOINkk5qyiFk2DJUQssM3ldrxgSkFksvBZv63zAg0zRkJwNZr3sSjHBB8vynsZbLRpM46VDAG523VLVNsmzaKO0HPdOz5wntPN7AUGh%2BJGXPRYU%2BSolE2ZnGQQssVHf8A6XsVkDR5B%2FnqVayPhzs%2F0IOEMKZFwcxCMVXqSznAOA%2BgT%2FopkYFrWFJ9kaq1KKvZuRnF5tONwVw7cPHlkli2TfUtkVaXZTt8w0qLI6rrLJ8dYR8E2iA9Uq0o%2BS%2FpgmPGIfYgWvvIMQ7UF8OP8z3n2H7itsuvBBClnSWC7roysT%2Fcohy%2BDt0f%2FeVGISi7ktppfJkGHuHZGqynfXh4miuWF86Z%2B1sMg7WZw0FCImNiv152C5BRTETfmLtLb%2FtymtvLwdD90puiP%2B78ctpreSsDdFKZCn0kzgOnlYGzhsaeD5VVoZqG0WA2gdXUb6%2BXRnNGDcAtWHnwkuwDPLMm6zPPY8Dl8hbG0wtoadvQY6pgEeoIv32Fv3ZosvrBFvjz6tk36yUpstz2cZm41vgD8H1dBDHGWCrLNOeUtrW2Hv6s%2BuX31YJ9CBWjk%2Flm%2FW8yU1RCO6o6YdV1stuvfYLMzXCDEUD95HgkQXldMdfeZ1YMeCm3uNM8X0D%2Fw0K2bip6jR471MYMCqVXaGs29lA1fzcQ6CTqOlLFk%2BMRSh4k3uvtRYauvbziXdYvVWbebmiWj83DwA5WvR&X-Amz-Signature=8f66f4987865699d8b07d9c789b591a612ee966f076081d3bc48069284e136cb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H52WOSV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIGIto8tMl6XYmxPKOvj9rRXskW54D6uJkx7mzDMzGZdWAiAFMNsOxQOk0iQrZwFMeF%2FzSFCeRixIvno58yJIaG7%2BkyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLwqhlSNeiWAxKErVKtwDPOmjtH3i1%2FTRpLWnFGjxYLlR2P1mRjaXgZKzCL3aULk3CvP6ILWK5l%2F8Kb0LFki3PUCetsYzyTs89eNoZEL2lndIug1ZgCaALtGsWa5UmBWSkMEBgbOFWPbW08Hz37PBkV63s9teQx4AY9ZlR0nZhK0KWLVW0TOINkk5qyiFk2DJUQssM3ldrxgSkFksvBZv63zAg0zRkJwNZr3sSjHBB8vynsZbLRpM46VDAG523VLVNsmzaKO0HPdOz5wntPN7AUGh%2BJGXPRYU%2BSolE2ZnGQQssVHf8A6XsVkDR5B%2FnqVayPhzs%2F0IOEMKZFwcxCMVXqSznAOA%2BgT%2FopkYFrWFJ9kaq1KKvZuRnF5tONwVw7cPHlkli2TfUtkVaXZTt8w0qLI6rrLJ8dYR8E2iA9Uq0o%2BS%2FpgmPGIfYgWvvIMQ7UF8OP8z3n2H7itsuvBBClnSWC7roysT%2Fcohy%2BDt0f%2FeVGISi7ktppfJkGHuHZGqynfXh4miuWF86Z%2B1sMg7WZw0FCImNiv152C5BRTETfmLtLb%2FtymtvLwdD90puiP%2B78ctpreSsDdFKZCn0kzgOnlYGzhsaeD5VVoZqG0WA2gdXUb6%2BXRnNGDcAtWHnwkuwDPLMm6zPPY8Dl8hbG0wtoadvQY6pgEeoIv32Fv3ZosvrBFvjz6tk36yUpstz2cZm41vgD8H1dBDHGWCrLNOeUtrW2Hv6s%2BuX31YJ9CBWjk%2Flm%2FW8yU1RCO6o6YdV1stuvfYLMzXCDEUD95HgkQXldMdfeZ1YMeCm3uNM8X0D%2Fw0K2bip6jR471MYMCqVXaGs29lA1fzcQ6CTqOlLFk%2BMRSh4k3uvtRYauvbziXdYvVWbebmiWj83DwA5WvR&X-Amz-Signature=840a1007b7d2f5bb49609b343805446e784a4e9d8592f2d5256406e32caafb1e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZXGU7NY%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCDIR2F9%2FkFa9QRHTe3mg2u2BtbStZg6qA0ZrkpK19DlAIgagsHM5inhZXduxw%2B3Ey1xfCeJZ%2BulkqvDSUc8X4JWCEqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRxWP3fCAdUKBj2ASrcA9tJ%2BOs9xQwpi8rK3WLzsFwQu4jtca8edlh%2FLwmwQ93pu3MwnnSAy0zNtnFcgm0xm3XI74QyZwul8VCmWZYpXWUXAqd3RDzqQCP8yRjr0hANfx1PjJGomImMMrPpuVj76fj5evPVQSRdLmrh5E7xc6vxKDkc9j5LP7PBEP0nujVKid5TPGcafmN5fpCMwiBhxvrB86wFeM%2Fda6xN96HtLWp65XUXmsN1lgBqgebpKH%2FWW4JC4xn1Tj6nEAD5of3OQiTx%2FbIWI1Xy5PXhUVA7NukqxfCXBEMjkvg7GQ90UpB%2FtQKPVrA45IQzisxB8OD5iapuCt2yUUDhSC7zSa40Avm9mpIZFzMTCrpPLlgHPSMGqouSX3ZHmJSbrsJmA6SUywWJ41jycAjQxINXJOt5VvNnC54%2BgC%2FBd1DhZjw7divYtU791BFknMbCgcAan4n8fzbn8I15vZM%2BfrU5f3WwZLWF5Vhc5muO7FPa66VHUHUvAWGCg1yehYHTGwDhWK%2BRivrF7x2635CHqFS01FbHdVOldJKqpAqqFLGkuWpeEtzasRz3A8JUIePp6JpO%2Fv6Wzm5ig5fEGmXLQooBdPPigV6c7TF%2FureUjwqHZAuCNNp8Q1GBghlFonoLiIH5MMKGnb0GOqUBqqb6m77BihornNZ7Y9yOTS12ISKrq4iWXiHKI6K57%2Fn%2BAbIxwFgWL9plBdCEGKu4q12iV0lQXA1GLccUlprMELWbNq5NvzTBQ%2BX9%2B6yq6NuFWD3BUnNv6nvxBqbSSzCHjc8Ppb4CW4OSyD5IuMOKT6lyviEX%2FYVcupTlubrAFYfoVFaxH5iQ4lnQa2hC1w5wqLT4isokeSvlV%2B%2F%2FRBXJeuLwZ5tb&X-Amz-Signature=5f5b4f0439d20718e31d1a8e63428a0847c591537d6cd46f72a18a7f07d4f964&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRRTSFGQ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEksGIbVWNjU2Y05nHlaHO%2BAjyroIZg7nKTaB5dRjiAbAiEA8%2FFhWV1xxlzbDnNngdoLdFlxHVFKgH5QUnFGi%2FnUALsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZvunJWB6Mbke2i3yrcA8xC4b5OtolOzSSlJPV5WlabO%2FFfW5mRBxx%2BXU%2Fem7oh9LX1UcBUH6ih0FpVOutJMUH86aC241T1ItG9DpbnHmptlsoI958pC2lBpls2eK0DReXT%2B%2FsNPjRR1zexZzgjUmlKO9oC6EpBpWLKJ0aBpPuEHFuRMbAJglRKxJtxahoKFneCl%2F8xtwCjq3MRnue%2Byc0n4ra72G5Q2JCuo9KM6wQ5uomw4nICBAgPdT%2B%2FRen9CHdSyi%2FMsoZsgoEXrWKyl3yr70MGccFmgS1UMNi%2F3lKHbtdJ%2BlvcbQbhHV%2BjRQnYV5QZ50SvXB489hO3jRJID5ctPF%2FYuYvuu2AacKbthW4nz76MCgKELfIoNFiDm9oD5fQdDT8uDdqY1MaRLNOF6KMHYVuoBGBNLGlY8MIWvMT%2B13%2B5OzQtqyuSQbGHCfrDdGBHIZaNPCJ1P%2Fx3fjzjd4AsYPdTM48G4HmXMKyZByqLUUGKnwpQ1ZmI0Ydo4BEpBKuDjxlS%2Bkorjp7kRPS9x4HqoJ%2FQFZRgkca%2F9Tqy%2BjhVQnUcmMla9eXZlt1qfw%2BuhU0qVgBlcV1tbpf15JSkyKCwqbpUt%2BCEQl0fS3ED1Dna7wd3lDtOgzpqscnGSIddAwjvoNRHBwfYSeZwMKGGnb0GOqUB%2F7h5pGmvF1QqSJkDKYVYu6b9sEMbP8kF4m4SWYA0yF4%2FSzSvhNM9WNi%2F%2Ba5ocgQMLbPvuKXqkLlQR7rgRnmD7ZTphO2LsmWPcw4iMQLR%2BtliOZFnF7pImy6J3mHFEuv9Zc5YIPaX0w85gsBaenc6fDnPOmgMsSv1b811CGEbQbF6OMsJ%2FuWYffDqgejW3kTgLt7DPyfm2nPRIQvQ%2F2U8AoMszc8h&X-Amz-Signature=65bf31139c652e033a90b86b16cd48bf4d87f797135193be917d8eabac1cc03e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H52WOSV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIGIto8tMl6XYmxPKOvj9rRXskW54D6uJkx7mzDMzGZdWAiAFMNsOxQOk0iQrZwFMeF%2FzSFCeRixIvno58yJIaG7%2BkyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLwqhlSNeiWAxKErVKtwDPOmjtH3i1%2FTRpLWnFGjxYLlR2P1mRjaXgZKzCL3aULk3CvP6ILWK5l%2F8Kb0LFki3PUCetsYzyTs89eNoZEL2lndIug1ZgCaALtGsWa5UmBWSkMEBgbOFWPbW08Hz37PBkV63s9teQx4AY9ZlR0nZhK0KWLVW0TOINkk5qyiFk2DJUQssM3ldrxgSkFksvBZv63zAg0zRkJwNZr3sSjHBB8vynsZbLRpM46VDAG523VLVNsmzaKO0HPdOz5wntPN7AUGh%2BJGXPRYU%2BSolE2ZnGQQssVHf8A6XsVkDR5B%2FnqVayPhzs%2F0IOEMKZFwcxCMVXqSznAOA%2BgT%2FopkYFrWFJ9kaq1KKvZuRnF5tONwVw7cPHlkli2TfUtkVaXZTt8w0qLI6rrLJ8dYR8E2iA9Uq0o%2BS%2FpgmPGIfYgWvvIMQ7UF8OP8z3n2H7itsuvBBClnSWC7roysT%2Fcohy%2BDt0f%2FeVGISi7ktppfJkGHuHZGqynfXh4miuWF86Z%2B1sMg7WZw0FCImNiv152C5BRTETfmLtLb%2FtymtvLwdD90puiP%2B78ctpreSsDdFKZCn0kzgOnlYGzhsaeD5VVoZqG0WA2gdXUb6%2BXRnNGDcAtWHnwkuwDPLMm6zPPY8Dl8hbG0wtoadvQY6pgEeoIv32Fv3ZosvrBFvjz6tk36yUpstz2cZm41vgD8H1dBDHGWCrLNOeUtrW2Hv6s%2BuX31YJ9CBWjk%2Flm%2FW8yU1RCO6o6YdV1stuvfYLMzXCDEUD95HgkQXldMdfeZ1YMeCm3uNM8X0D%2Fw0K2bip6jR471MYMCqVXaGs29lA1fzcQ6CTqOlLFk%2BMRSh4k3uvtRYauvbziXdYvVWbebmiWj83DwA5WvR&X-Amz-Signature=c550c05ee9f9b8875cd08ec53431cc87675e3953df95a4ce0e6acabe6d91861a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
