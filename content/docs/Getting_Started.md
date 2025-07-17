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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU24U2S7%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCBMEBtu4LV47Cinh471ml1fSzf3raaKidOPZRVcybM8wIhAORqPy6jSpL6EnaMmI%2BealpaudnStCOWiuKVfw9na0EaKv8DCHIQABoMNjM3NDIzMTgzODA1IgzcpQL8xVpYXUfeb80q3ANTmZJq2spLnU%2B4kQnICoKH5mE%2BVijYgUaCl2YeDeQ0vakAkkk5T8fd7%2BpZlfaG1UPu1d4TatJTCONP5om0H%2BUGUWxdfevnrAq1TjvKCXpWB0Z2r71Ir3AThLwSrXLI5ku%2FoInN3oOpWL8pzjTGGW6EElQmrSaS8%2BvGp8F0omPm3pNIktSJJ17cy8k6ikuNpvHR3fmMaklgbL%2Bq9gO2D7VHPKAOkPFR6Sm94VSA4%2FBeX4jMRzViC3T8I5%2FKgWCNPKWWS2sy%2F4Yj9NtZgz6EQJnnezUjLjVbhCe%2FyUrkQyiDO7IRCri0gHLxYnA3spvgfIQM2PZJuR2zXa4%2B16sCr7vGukbPht7zVaa1bc%2FQqH09n9aiTsR%2BAeGlBYj7Ps0mPUFh9cxDF1ywInJLlKT8R%2BZ6TUj4W0L5yGPRAooRT1RRabyl47895UeYdFHUfsZkkW91B0UXffq9x1l%2B4QrG0%2Fkm8aLrv79Be1uLh4nO2KZMb0%2BkeulhflgA%2BLalo6TqcP4k55wpiznEatR6VO%2FRaqESUiasOnCSFW%2F6NCVeyvSHPYCI4btqr0VmVIjVjJnVAOvoLadHcUW2VSSKgh5bZG0Rt9hMFwDyORbjqTmrGXGe1VCV42pEt4jgbBxynzDA6%2BLDBjqkAV3D0X0yKuDLLC4PGpxoE%2Bbm4%2Fx0A2TA7kQw7UYbnvfBi7ZD0vgXqnKwCxDjkRwD6hCKXayfokn45Bk1%2Fy4A3oufURjrCMnbQggkwLuVbAsiXJz2WRB1OGn1l58udj96FLlS71rVQFosTFdjr89P8gZ7%2F1ZVcp%2FhlMZirHENEOAWgg6nrOK1o0tDwbqmGCGoPPRkufWriehaPtR87djAhyo1Jb%2Fu&X-Amz-Signature=1094436a8a574fbf56755f6c56d7bbd648ccf2c9eb4cf7c689ad282829937fac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU24U2S7%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCBMEBtu4LV47Cinh471ml1fSzf3raaKidOPZRVcybM8wIhAORqPy6jSpL6EnaMmI%2BealpaudnStCOWiuKVfw9na0EaKv8DCHIQABoMNjM3NDIzMTgzODA1IgzcpQL8xVpYXUfeb80q3ANTmZJq2spLnU%2B4kQnICoKH5mE%2BVijYgUaCl2YeDeQ0vakAkkk5T8fd7%2BpZlfaG1UPu1d4TatJTCONP5om0H%2BUGUWxdfevnrAq1TjvKCXpWB0Z2r71Ir3AThLwSrXLI5ku%2FoInN3oOpWL8pzjTGGW6EElQmrSaS8%2BvGp8F0omPm3pNIktSJJ17cy8k6ikuNpvHR3fmMaklgbL%2Bq9gO2D7VHPKAOkPFR6Sm94VSA4%2FBeX4jMRzViC3T8I5%2FKgWCNPKWWS2sy%2F4Yj9NtZgz6EQJnnezUjLjVbhCe%2FyUrkQyiDO7IRCri0gHLxYnA3spvgfIQM2PZJuR2zXa4%2B16sCr7vGukbPht7zVaa1bc%2FQqH09n9aiTsR%2BAeGlBYj7Ps0mPUFh9cxDF1ywInJLlKT8R%2BZ6TUj4W0L5yGPRAooRT1RRabyl47895UeYdFHUfsZkkW91B0UXffq9x1l%2B4QrG0%2Fkm8aLrv79Be1uLh4nO2KZMb0%2BkeulhflgA%2BLalo6TqcP4k55wpiznEatR6VO%2FRaqESUiasOnCSFW%2F6NCVeyvSHPYCI4btqr0VmVIjVjJnVAOvoLadHcUW2VSSKgh5bZG0Rt9hMFwDyORbjqTmrGXGe1VCV42pEt4jgbBxynzDA6%2BLDBjqkAV3D0X0yKuDLLC4PGpxoE%2Bbm4%2Fx0A2TA7kQw7UYbnvfBi7ZD0vgXqnKwCxDjkRwD6hCKXayfokn45Bk1%2Fy4A3oufURjrCMnbQggkwLuVbAsiXJz2WRB1OGn1l58udj96FLlS71rVQFosTFdjr89P8gZ7%2F1ZVcp%2FhlMZirHENEOAWgg6nrOK1o0tDwbqmGCGoPPRkufWriehaPtR87djAhyo1Jb%2Fu&X-Amz-Signature=35d1038188df42f5210217645febcbc6143f8d05cca9b32904d3fee2f54b7fe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU24U2S7%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCBMEBtu4LV47Cinh471ml1fSzf3raaKidOPZRVcybM8wIhAORqPy6jSpL6EnaMmI%2BealpaudnStCOWiuKVfw9na0EaKv8DCHIQABoMNjM3NDIzMTgzODA1IgzcpQL8xVpYXUfeb80q3ANTmZJq2spLnU%2B4kQnICoKH5mE%2BVijYgUaCl2YeDeQ0vakAkkk5T8fd7%2BpZlfaG1UPu1d4TatJTCONP5om0H%2BUGUWxdfevnrAq1TjvKCXpWB0Z2r71Ir3AThLwSrXLI5ku%2FoInN3oOpWL8pzjTGGW6EElQmrSaS8%2BvGp8F0omPm3pNIktSJJ17cy8k6ikuNpvHR3fmMaklgbL%2Bq9gO2D7VHPKAOkPFR6Sm94VSA4%2FBeX4jMRzViC3T8I5%2FKgWCNPKWWS2sy%2F4Yj9NtZgz6EQJnnezUjLjVbhCe%2FyUrkQyiDO7IRCri0gHLxYnA3spvgfIQM2PZJuR2zXa4%2B16sCr7vGukbPht7zVaa1bc%2FQqH09n9aiTsR%2BAeGlBYj7Ps0mPUFh9cxDF1ywInJLlKT8R%2BZ6TUj4W0L5yGPRAooRT1RRabyl47895UeYdFHUfsZkkW91B0UXffq9x1l%2B4QrG0%2Fkm8aLrv79Be1uLh4nO2KZMb0%2BkeulhflgA%2BLalo6TqcP4k55wpiznEatR6VO%2FRaqESUiasOnCSFW%2F6NCVeyvSHPYCI4btqr0VmVIjVjJnVAOvoLadHcUW2VSSKgh5bZG0Rt9hMFwDyORbjqTmrGXGe1VCV42pEt4jgbBxynzDA6%2BLDBjqkAV3D0X0yKuDLLC4PGpxoE%2Bbm4%2Fx0A2TA7kQw7UYbnvfBi7ZD0vgXqnKwCxDjkRwD6hCKXayfokn45Bk1%2Fy4A3oufURjrCMnbQggkwLuVbAsiXJz2WRB1OGn1l58udj96FLlS71rVQFosTFdjr89P8gZ7%2F1ZVcp%2FhlMZirHENEOAWgg6nrOK1o0tDwbqmGCGoPPRkufWriehaPtR87djAhyo1Jb%2Fu&X-Amz-Signature=41040512b9205dcc4965701c9cecfc4bdc40314bba76d914d964e6624a39de95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VANATAHR%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGG3s%2B6RZ4s5zqwkfxOdeIkSERdjVNLr4L1SGOgncSlTAiEAi3reLwymGTr1%2B63iX%2BWf7%2F9VjeiAnRmXwzWexSadCqQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPpppV7Bid0wz2WX5SrcA2dF9pZIdnNi5pX5yV%2BXL8Qe7z1hojhp8p3hhkGNqAil7yj5qIOrzcD8g13874%2FAgpeSed8YEtYDFrk5p2qOgRxe59%2FR7jv6jl9oRcnCHq38EZFr8v2qoyg59vuxMIbhvtceBVQAMx7R%2BXuyWE3kGcEGlCItaK7%2BHO8LmHidu1HkNXtaqFLEe2RzRq%2B65ljg3jf50LwTItG3%2FrpaXJ%2F%2FpqHW6s8mLfWjLzZRevIMfCKQowQq3uoNrOPbbRN8Tqab9bnl5DlibKfvrSFBqfyeh9%2BZuYukxZAAfljbTLBGiR3EZcDAa%2FJqkfnoUDVcc4u4KOBqWEXwlx%2FhVxCho5YCavMVr%2BBVXDsDSPBAUg8AH%2BVclmp8oeOtz2dxcuKjcTm1Nz7HgdvWVx6sZNjaGgefaVE%2Buk8Voe2WLx6FBEx0ux%2F6V2DI9zrZHd52bNxB1VyuFc7rrDDm3K0OIGPTMG5wHCmi0GE25RDrDt1iINVjyTX9hFgbkHTcRhE5gn%2FcosrsMr275Uin5lwFGY%2Fc31j9lBvKv6w7Fzk7qN7ztOb0Q1OqEum%2F8mVFgzAWX%2F7d6Efv3PuLa%2BqI46Po7ZdGDp1PA3DwMIOqMWLfT0FvCK663slOVCRDM3RcHytjY%2FXTMJns4sMGOqUB9NVc25yz2TtLhimsPBntBdADTT9KIFBxxYXC1M1z3f18PAV1tNuZod5ilpSDCEO2enx6aq0MOuGV5X9YOr2dgqWv5dWvxo4d5wlQXsJlmTxtQvTkSni7ZB9bdcPDvidjp7M1KUup3WPQ6mdLV8gL27QVLuuHlSVs4CRs6L%2BIfDIXeTfUh4HANPH%2BAEWjXUxoBiNvECMbOdKNXX8yqPy1j4%2BzA7D6&X-Amz-Signature=16eae00b1a2263fbddc7492753cc07d32cd0823441272ec02afd97a1ce4f7500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4C7Q2ZF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC2ZJkaqBlCvURIHrAlxwnNcRqDhIdNXkaWNTg9yFbWiwIhAOnwsiZuOkQkmOTwF2TEhyYzQ8bPRB39GPzlPb0pzT%2FSKv8DCHIQABoMNjM3NDIzMTgzODA1IgyM4FrByc7tzin5Icoq3AM36vZgAZQO%2FVtLTCLhbLbRDJ9mazvoUujb7O0ILdTdyM5d7yyD2Mi4n5O8VykEY6RPRg405xvhmn%2BBu8Amogrtyl2uzqnP3ifNFtg4NtINr0wVN9pfpvehRYo75HKyZwdVNSHXABXzUBOyM9XQczw9fC1hodwY7oQUwRevJwlNBkyWsWdiGhnsHIstTkNDGy7%2ByzdEI6A64fTgWFbKn917xyakamNmW%2BLajI0vwe2YPa%2BXppYhvCA6TasgG57MToSSCcb7BZLiP3nQk3f0Th0XoeiZQ9Fvo7IV8bMDfzddZaZJ%2BdTyYLD5k8OfBwXoWdrYoHG3YkDGUCuk1j12Cm1yByDZCBVl8TA1txgQzyqJj1rM%2B4Qelv%2BDvzv0PFIsbfpoT46qJHhyklMZNUzKOzByXBCZYR8pn8j2zZf3FqJY61FiJ7Lj%2B5vzJosj4RdjBoBVSLxK5rTm5B8hf9Xc0qM7m%2FljyNCkbqow3PaasC3LiKUXdG%2B5DtRtAtAFpmDinvkWo6wF81CD0mTOmrLGIBFjitHz9wWD7qFgwYduqKAZJycqj5AjyK3oUqDjCqytNcDSlT59jjolSpq0AOs9EQohvfK9HrqJ%2FjhC%2B%2BPSWAW07ElAey8Z9a3vvJCAEzDH6%2BLDBjqkAdaSMIgDtSHoK6gWf28tITQiQDC0eN5nIlXfROTkAcFoLqbv7tEdEX7ooikXO7K5qtBpzrXSj02hesMsa072HgFdeNDsGssM8DFBmyUmuN27fummDtiK9fG7nkqqZNIc8Uqtmn4sdy9SGuNP03lDGUXSR%2Fpm85V8JhPgkkYllEjOpM1S8cFjjSvjCiVo1vNjbLqFSylDXTzm23eIbvTaqQ%2FWCGmL&X-Amz-Signature=f44e4a9ed719aca47f3734bb5cbfc464a0302209699ebb733a712a3c6987605f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU24U2S7%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCBMEBtu4LV47Cinh471ml1fSzf3raaKidOPZRVcybM8wIhAORqPy6jSpL6EnaMmI%2BealpaudnStCOWiuKVfw9na0EaKv8DCHIQABoMNjM3NDIzMTgzODA1IgzcpQL8xVpYXUfeb80q3ANTmZJq2spLnU%2B4kQnICoKH5mE%2BVijYgUaCl2YeDeQ0vakAkkk5T8fd7%2BpZlfaG1UPu1d4TatJTCONP5om0H%2BUGUWxdfevnrAq1TjvKCXpWB0Z2r71Ir3AThLwSrXLI5ku%2FoInN3oOpWL8pzjTGGW6EElQmrSaS8%2BvGp8F0omPm3pNIktSJJ17cy8k6ikuNpvHR3fmMaklgbL%2Bq9gO2D7VHPKAOkPFR6Sm94VSA4%2FBeX4jMRzViC3T8I5%2FKgWCNPKWWS2sy%2F4Yj9NtZgz6EQJnnezUjLjVbhCe%2FyUrkQyiDO7IRCri0gHLxYnA3spvgfIQM2PZJuR2zXa4%2B16sCr7vGukbPht7zVaa1bc%2FQqH09n9aiTsR%2BAeGlBYj7Ps0mPUFh9cxDF1ywInJLlKT8R%2BZ6TUj4W0L5yGPRAooRT1RRabyl47895UeYdFHUfsZkkW91B0UXffq9x1l%2B4QrG0%2Fkm8aLrv79Be1uLh4nO2KZMb0%2BkeulhflgA%2BLalo6TqcP4k55wpiznEatR6VO%2FRaqESUiasOnCSFW%2F6NCVeyvSHPYCI4btqr0VmVIjVjJnVAOvoLadHcUW2VSSKgh5bZG0Rt9hMFwDyORbjqTmrGXGe1VCV42pEt4jgbBxynzDA6%2BLDBjqkAV3D0X0yKuDLLC4PGpxoE%2Bbm4%2Fx0A2TA7kQw7UYbnvfBi7ZD0vgXqnKwCxDjkRwD6hCKXayfokn45Bk1%2Fy4A3oufURjrCMnbQggkwLuVbAsiXJz2WRB1OGn1l58udj96FLlS71rVQFosTFdjr89P8gZ7%2F1ZVcp%2FhlMZirHENEOAWgg6nrOK1o0tDwbqmGCGoPPRkufWriehaPtR87djAhyo1Jb%2Fu&X-Amz-Signature=5c6ed702236793d0b0b96d34485dfd631a4699b778b8c382983d025b431478fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
