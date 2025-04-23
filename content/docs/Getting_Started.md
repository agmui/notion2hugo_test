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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAV3WAA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIC1piqD%2BgMf1D6cWDyhUeEgoxVVTHVrr4mR2v9zgnlHBAiAcajXcc%2F7sxdbtO2wXgw3PAvprqh4cxr3QHvPPbo%2BZjiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMgjn6cIHCijCRnhhKtwDmFNvhmpRUy%2BXerD%2F33lCQ97BLvJcGAlN1JBVBQFTo1oEiW9RXAM7MHJofBhRhCwnUQPuMNs%2BO6X4RDgURGymMxzyw0R47VowG0GXrmfMszhG4OnTgjbLB9gwnXQEzNTpsG%2FtlOLgvvuMeM4qB5nG0SUVYg6HpBiCjZ%2FsNNP%2BTE5ZaDjH0Zo81jwrszuUmd7Kqk5bE0rui8OjUpwLNR%2BBVs4VUfQKE4RhdVCOMRpDPk64mUzVuS7svjWFxzkSovpzFIdZefpJLGSgZSx2FmeiIVWZCtpIujrMtOWloAK0d%2BHkNVFEejQDtw9Ax08wZjBUi3TKcJ68VjAMR%2BolRm%2B%2BkDCJf6IwonjbwPmlJ6OngZinmJ8n7AI0jlpyafo27hHKUXt7x5PCRRrxcN3BoS%2BuHGKTqfqS1H3E5za8uGc5s7dZhMu4kzo6vX8G0j2HzDnZ62taAT%2BraNnRFszF9TP6smIL9H9l%2BbivojVteawV6vUkc%2F55Vh6PxmkyA3sgLSAtoMWyWRz2bzKS0sIOYRxb1GV0gqkjCoJtv%2FLRFO8GNjSUDSqMKanmYCd18ywJJtMa9YynCc0Ng22i2j4TMHA4Nf0H7jmAWT0UKcF3k6cyctK0GtsK3yqydgIeaykw0calwAY6pgFGqVAv5gL%2FTeoLIDQMR8YPnM21TgCxAnqLymV8xIGGbfcJ2lk39qfhLSzAVUG79vvlGplY4bUmDOG5mCzbx2oKUKVNXb5am0CTicfutero%2Bd1p0cb96rBr9E2a4IrB%2BTsyqVeA2PkMswB3U0bUdbzzhb7f6Ag0x%2BeRHU5Xbe3yxEclS6Nj4z2nCjJnBJst0riVkSUPuRWxgcPAtrsXXe30Bs5nNYid&X-Amz-Signature=d9e0af8c94832726dad3439e87602f118b654e9449acbb6cc0b8b401e72fe857&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAV3WAA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIC1piqD%2BgMf1D6cWDyhUeEgoxVVTHVrr4mR2v9zgnlHBAiAcajXcc%2F7sxdbtO2wXgw3PAvprqh4cxr3QHvPPbo%2BZjiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMgjn6cIHCijCRnhhKtwDmFNvhmpRUy%2BXerD%2F33lCQ97BLvJcGAlN1JBVBQFTo1oEiW9RXAM7MHJofBhRhCwnUQPuMNs%2BO6X4RDgURGymMxzyw0R47VowG0GXrmfMszhG4OnTgjbLB9gwnXQEzNTpsG%2FtlOLgvvuMeM4qB5nG0SUVYg6HpBiCjZ%2FsNNP%2BTE5ZaDjH0Zo81jwrszuUmd7Kqk5bE0rui8OjUpwLNR%2BBVs4VUfQKE4RhdVCOMRpDPk64mUzVuS7svjWFxzkSovpzFIdZefpJLGSgZSx2FmeiIVWZCtpIujrMtOWloAK0d%2BHkNVFEejQDtw9Ax08wZjBUi3TKcJ68VjAMR%2BolRm%2B%2BkDCJf6IwonjbwPmlJ6OngZinmJ8n7AI0jlpyafo27hHKUXt7x5PCRRrxcN3BoS%2BuHGKTqfqS1H3E5za8uGc5s7dZhMu4kzo6vX8G0j2HzDnZ62taAT%2BraNnRFszF9TP6smIL9H9l%2BbivojVteawV6vUkc%2F55Vh6PxmkyA3sgLSAtoMWyWRz2bzKS0sIOYRxb1GV0gqkjCoJtv%2FLRFO8GNjSUDSqMKanmYCd18ywJJtMa9YynCc0Ng22i2j4TMHA4Nf0H7jmAWT0UKcF3k6cyctK0GtsK3yqydgIeaykw0calwAY6pgFGqVAv5gL%2FTeoLIDQMR8YPnM21TgCxAnqLymV8xIGGbfcJ2lk39qfhLSzAVUG79vvlGplY4bUmDOG5mCzbx2oKUKVNXb5am0CTicfutero%2Bd1p0cb96rBr9E2a4IrB%2BTsyqVeA2PkMswB3U0bUdbzzhb7f6Ag0x%2BeRHU5Xbe3yxEclS6Nj4z2nCjJnBJst0riVkSUPuRWxgcPAtrsXXe30Bs5nNYid&X-Amz-Signature=743ed14f2bedb1e90dc64b686fe00d28a532446d4dae151dbafeef9242102b73&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V7D43PP%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDLfRL5H79e3HgO9BvX5X3Y3Ma4Mgmz0GdvQyXLSB9uJgIhAJoyn5WwDArxdxjxghaNea2JHzPilWqBbJeKasajzUESKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH4TA1Kdy8V%2B6VuhAq3AOc8KGiGRRCe7W5EL0BOsBLSppnt4iaOiwY9EcFLjcwk0d%2BbREFgLjF5cJwT1lqW6i7nibrsQqJPn6BUWlfi%2FqW1ivuRsk4AVricexhgJzAJdnxEpPSwGfxoxn827gVtRdzk9dC6tEGZy6r71M0RpnXzv%2FYjYPWl1%2FT1S91doV1dJFPAq%2FkTM8DJKISRzy%2BovGyM896S0K6kExJw52fO%2BdsxDDQoKiDv4HVoZo0J5MWP5%2FbCsEaE5WKbuhk%2FrqIy%2FFO1aFNjqWk2tSA45SwKyzxcqB%2F3LZvqmlpS7%2B%2FOlUZLxj%2F9byPOZ0fbfM8pNeQVyApSa%2B6HQ3YZfq3ptCqIzknc96KfJ901KUxu9Pwog4x%2B3kRPt%2FWBs0S6dQZujbxQuypBseh389PL8xlnls15BOBZS7kKrDgBhQPBq8NQTqwtTjZuz9kQkLGSt4Wxo0sM5SZSyE727VhSgxDfZl23yr5G4qu8Q7nPuAe5smFbx2pgx6aIS2lkFS1oZUhRMOF9%2Fs966wRvUby7IfDmgl%2FaP9uY5X3kY2Vgvg4GQJIlTcz381GLCYYBy7tXasjBG%2Bh2vWoiGfFVbeae7IwPSS3MZYwYIz1nzrq1dnpaNRatRkNKJ1O3w9i0dIlMW0ohDCqxqXABjqkAS8V0rKVLCmuNmZLN27dgbg6Z1z746Ou%2FA3YbwixoXMEStM6OUrQrlOmGwcgLEN3gZLLcvi%2BVkSZ6s7bM5gZ7IVEx%2FQoUW3fLqV%2F1Yn5B%2F5tiS7j7oBpC0JJyWmA0yIOCdwhx5YG7txuK1byfKN4gZlfb2%2BT91WdtWH6v1Qri7n7kvM1OKOg%2BtVY4NEahmDrrP8p%2BT55KqANbQzMefpdGjN6tJ8x&X-Amz-Signature=bf95e989d0412e25a5f4bbf9e0e809181fa394a9ee4a35f40ec52e5f4e68d376&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYBNJG26%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIF%2F6wue6rSiSFF3Q68W66GtYxfX7H223SJBoNynPwvDsAiA6cnaeNqlsPXbaVXK1U9WxX6fEtATc2gC2sQVCcj0uCyqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjfBKMdvNPR9Idq7yKtwDGmiaMKCC%2F53dzFF6CqIO7cPt0wJX3WausAreCj1bK7dHDNtPlDAX02w1P3vEuhO0Ozy6olIzTFd3UtMyc9YtQV1Rlrqa8NciNz4VUp62728IQSw%2F7iuW7vVacOQze2iQgsHD8epiv%2FV3dYlMyaSoVlmZwfdwpTlRRbSYJfO%2FErMbZYenlSlzDTG%2BIJKIyw0un%2B3KrJKwaDGgQMb69HbvTOUjnxZpc6aDK62VKJ5TM3%2FALR%2BEud9qkFAxfl5AkmoLaAVVB9m6fbRwxMyBDqGpPCJDLW54ZQMAz5UsFetkU4XOCcDZi9WwIDK7mIvweE5i3FupRcixVfM2z%2FZkOuhRFYnoqpi8tMWmavJD%2BarTGJLXAPty7o9h0ywmCS%2BOmNTeiulMf4uZZh150p%2FAitxAZTlt2PDDr%2BVkvzvZ%2BItcZ3bSKfxwSzOSWTppotsT1FZqzhYM1kujJ%2FYRiDUyDhZLNy4vfPtftZnbg1oLttjQsF0AhBpsIeBwdT4hWzL7F%2BpIB7YeVHkZOdgQNmB8PhQFtS10z97i3WBdhKKXX56htO%2F4Zveu4v2KTFh1JseKBa547P7HmEUVcwTbCm3uA8CL1Bzy%2FEsQxbGL%2FkDHhO2NTnmLVHfd1cf7hqZRMJUw48alwAY6pgGhq1q2B4EmQ9FBXowUT4OvnEPaTNIAerZ43urotkAlFCXEVsPxKFiFD1cG%2Bn%2FgdtuTvIE7AIDE1m4wMZIvU%2Bz5Pr5t2lTnb%2F%2BmLWXD26jwu2pJ6czEPcd%2FZq5kiaQRRDsioIX0HGh5tN5vsLM638D7o%2FpblAED%2Fo%2FQhGgs1mJbS5V258zN%2FZ0o2dHyEJIQkM2qipI242HQHPeSk%2F5zaKsl5nyf%2BWUZ&X-Amz-Signature=bb4e28d9f20ea34ca9d2ae68b28e654cc78ff00e9b9d5f3cea33247df9a9b7bd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAV3WAA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIC1piqD%2BgMf1D6cWDyhUeEgoxVVTHVrr4mR2v9zgnlHBAiAcajXcc%2F7sxdbtO2wXgw3PAvprqh4cxr3QHvPPbo%2BZjiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMgjn6cIHCijCRnhhKtwDmFNvhmpRUy%2BXerD%2F33lCQ97BLvJcGAlN1JBVBQFTo1oEiW9RXAM7MHJofBhRhCwnUQPuMNs%2BO6X4RDgURGymMxzyw0R47VowG0GXrmfMszhG4OnTgjbLB9gwnXQEzNTpsG%2FtlOLgvvuMeM4qB5nG0SUVYg6HpBiCjZ%2FsNNP%2BTE5ZaDjH0Zo81jwrszuUmd7Kqk5bE0rui8OjUpwLNR%2BBVs4VUfQKE4RhdVCOMRpDPk64mUzVuS7svjWFxzkSovpzFIdZefpJLGSgZSx2FmeiIVWZCtpIujrMtOWloAK0d%2BHkNVFEejQDtw9Ax08wZjBUi3TKcJ68VjAMR%2BolRm%2B%2BkDCJf6IwonjbwPmlJ6OngZinmJ8n7AI0jlpyafo27hHKUXt7x5PCRRrxcN3BoS%2BuHGKTqfqS1H3E5za8uGc5s7dZhMu4kzo6vX8G0j2HzDnZ62taAT%2BraNnRFszF9TP6smIL9H9l%2BbivojVteawV6vUkc%2F55Vh6PxmkyA3sgLSAtoMWyWRz2bzKS0sIOYRxb1GV0gqkjCoJtv%2FLRFO8GNjSUDSqMKanmYCd18ywJJtMa9YynCc0Ng22i2j4TMHA4Nf0H7jmAWT0UKcF3k6cyctK0GtsK3yqydgIeaykw0calwAY6pgFGqVAv5gL%2FTeoLIDQMR8YPnM21TgCxAnqLymV8xIGGbfcJ2lk39qfhLSzAVUG79vvlGplY4bUmDOG5mCzbx2oKUKVNXb5am0CTicfutero%2Bd1p0cb96rBr9E2a4IrB%2BTsyqVeA2PkMswB3U0bUdbzzhb7f6Ag0x%2BeRHU5Xbe3yxEclS6Nj4z2nCjJnBJst0riVkSUPuRWxgcPAtrsXXe30Bs5nNYid&X-Amz-Signature=b376d2e9366a4f07e883a63809a971a5388284de76a607d1866f65bc5eab1f31&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
