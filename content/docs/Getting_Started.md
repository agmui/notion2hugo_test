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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNQQQ6U2%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICqcjZHEN2adYOsffy2xmj8pOQ11C%2Bk5jM13Et%2BGaSIoAiEAx%2FPga7zFNgD556wPkq6JVdalVY66CiJth9CO1IN6L3EqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAj%2BOBAj%2FZMhxqAaUCrcA7dm3420rwmPka4y1z9ZV4ir0ptVWXDZ4k92YddPb9WZUleENR6yikhLPBdE50Je3uqrHlXf1OSFWB4LWB9NX32ecgTNVMDFzh4RVCQpKAH7jvkVIWALJteTvNwLtgyFHjydx32SH%2B%2BPYSJQyEJYrJxIZsZa%2FP96CwDKel7M2acCY0fsa1LJc74J6KJlXBLOr8jJ2iFS0V28MfevFaOC%2FNxr7%2Bu1dTDVvPKr1CQxwO2KtHscHMz6Ynzwa3U7TL4DnXW0eWHoYXDh2TbRCdBXGYAmzYxeJNp4%2B0Em0PpAIaglfnCNmumePLIvb%2BxECQpD%2Bv%2Fpces668Xrfx6KotGKPfJyJN8I7Ij%2Bi1P8RKTyNo1nYX%2FpE5huWCOExsJF1iFnCoEmLCE6UZX5%2BFQ8Pf6rtPHndpOA%2F%2BV9lK40Tj5qxobiJTqrq5gDr8byXFYVwIhf%2B1JnUM4bDQAaMycPoH5wJ3EbXJNg3wNHW1TnfXwEWlqBiQNz75bzYrgwHEpC8WWfZR4vWnH0XyWT%2BrNA1wQUE3XJkGJFl085Q1HyhoyjPHyeEl5BiSqz4b18shkt54hzDIeR%2FNaKTxyszWT0j%2BOTZfAxRHNc0mdN6rkJtDpzG11Tz3KAto3HWvRb8YKDMPz1hb4GOqUBDdzUTnHS4%2BRm5R%2BGGKVjFjX4Q0EHMOk%2BBTVfLQAR9ssMluTtuhbu3hyT%2FsbGiNStu3EcqW2bmuj0XlvEL9mTE1xiCvhbQJ2odoxto2RH8%2FJUSg07f1IFEzo3ze4Z05d05BC%2BDK7t%2FwRAR0VKCgRASXmR9O0hyzTMebDv3uZzklt%2FjbJB%2FowbAIpurN%2FhJLDX3earHIYy%2BIEVkIirMB%2FC9Ofgyo0z&X-Amz-Signature=2613012afff701d9c91af33c27461882221aa1fe3305cad751c8c9c3463e1dd6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNQQQ6U2%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICqcjZHEN2adYOsffy2xmj8pOQ11C%2Bk5jM13Et%2BGaSIoAiEAx%2FPga7zFNgD556wPkq6JVdalVY66CiJth9CO1IN6L3EqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAj%2BOBAj%2FZMhxqAaUCrcA7dm3420rwmPka4y1z9ZV4ir0ptVWXDZ4k92YddPb9WZUleENR6yikhLPBdE50Je3uqrHlXf1OSFWB4LWB9NX32ecgTNVMDFzh4RVCQpKAH7jvkVIWALJteTvNwLtgyFHjydx32SH%2B%2BPYSJQyEJYrJxIZsZa%2FP96CwDKel7M2acCY0fsa1LJc74J6KJlXBLOr8jJ2iFS0V28MfevFaOC%2FNxr7%2Bu1dTDVvPKr1CQxwO2KtHscHMz6Ynzwa3U7TL4DnXW0eWHoYXDh2TbRCdBXGYAmzYxeJNp4%2B0Em0PpAIaglfnCNmumePLIvb%2BxECQpD%2Bv%2Fpces668Xrfx6KotGKPfJyJN8I7Ij%2Bi1P8RKTyNo1nYX%2FpE5huWCOExsJF1iFnCoEmLCE6UZX5%2BFQ8Pf6rtPHndpOA%2F%2BV9lK40Tj5qxobiJTqrq5gDr8byXFYVwIhf%2B1JnUM4bDQAaMycPoH5wJ3EbXJNg3wNHW1TnfXwEWlqBiQNz75bzYrgwHEpC8WWfZR4vWnH0XyWT%2BrNA1wQUE3XJkGJFl085Q1HyhoyjPHyeEl5BiSqz4b18shkt54hzDIeR%2FNaKTxyszWT0j%2BOTZfAxRHNc0mdN6rkJtDpzG11Tz3KAto3HWvRb8YKDMPz1hb4GOqUBDdzUTnHS4%2BRm5R%2BGGKVjFjX4Q0EHMOk%2BBTVfLQAR9ssMluTtuhbu3hyT%2FsbGiNStu3EcqW2bmuj0XlvEL9mTE1xiCvhbQJ2odoxto2RH8%2FJUSg07f1IFEzo3ze4Z05d05BC%2BDK7t%2FwRAR0VKCgRASXmR9O0hyzTMebDv3uZzklt%2FjbJB%2FowbAIpurN%2FhJLDX3earHIYy%2BIEVkIirMB%2FC9Ofgyo0z&X-Amz-Signature=9ba6cfd588976945c509c53491d7abfcab8762a7b329613d668a567a2c6c0510&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZYA5Y3V%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCCPvmHxtIpFvzUo4o2MR5ezfoZhkg0Ht9mDmed%2FYp9lAIgenctt6OnyJ8ejkxnrxSpcqzp9Xv2I1veds7Kuix06gIqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqwCfwPrvAPtCBDayrcAwUiZibnnwiKzn8WKBcP7TZn99XKlDJ6XwBG3fcRXcsuiVPgXeyr6fdqklqqG1hO0w%2FdvbN7xiHPWVyy077LZa4Xzm%2Fx3qMGCWbamliGthNv3g2rZ%2FWWeA2Mx5lJwQ%2FKH3CeEuS9Tipa82qGg16tK7V9nOjOPRPIQBiKtvIRo%2FLYNU04vAXC7y%2B%2FMLFGZPQj95o1zFAF%2Bi6ZX2u33%2Bk2UXkRZ1PVGT72p%2BAPd2FxDlhW9hPloahA%2FuHO1pUEZYmGJDXpImPtMaZC84ISgReJg14esUkqbX8ax7LFJiVtbDBeyEqWzGcCKLunrna0TbVLCdWTdGo6Mvp5D%2BHOlNNBg%2FiVj%2FE%2F6PUGNDIzai49ahGhbuXMuOCbDJsHqkVzRmPEvvTkB%2F3bxjghhtYzs%2FFhCA3r8m53EmDueIbY20QynlNG1nGdnkwPTItFAOFNdM7DkrCncrTfkhumD947pTZN3Ov1hEVzG9hP3%2FaWEmXCj5O%2B9QOel5K3Kp0iEW5pcNbRtJ%2BVpDeGd4KAhBsV8g9EgHhRXUxz5Cl1vmuEqp4Xk0wWKrQS2%2FCNkEM%2Fc5PouTpN%2BhAGjl8VfM59zY5VRApguyZMv%2F%2BsFDmL7ss22e%2FphkOw2N3ozvCLAQmQIOV1MNf2hb4GOqUBNbNZDhNzVImRalEBeX5zZTLLx1JVxk878416h5n%2BoKkK121skk1xviJW6YeZVUnWebEx2octuHPZoLwrYDPImlZZGMQzYaRk9E82CgN59F05%2FWEy6rFSQvIKdB9JaWmI%2Bo8Hpf1l5RiZOt%2BEBu0szM7OwAoQ1tJPoZaG9DRy5uK075Oq6WozHhkF1hqOjiP4rMNFZsUqGIoW2wsL1kDx%2BNrcktFo&X-Amz-Signature=eb7f66a842025a32793b76f084c5c266d9991d3c5ab94d8ecd22d599818fa433&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RIIQDKQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIER3FVH6PKmRidyI6NdkV%2BWrmUm1BShH%2FsXJ6zBCOuHkAiEA45gw0xW0gHL9Yr2SMlHSR9ZFE8aTEqMyTbNwgcUgCCgqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIiRQalo04pGjZs3CrcA3N8DDE8BILrzsHsb1GNv3jEaP%2Fm87%2FHHyu9i8kiYY493cqe3lWINRiQghMCfwkZiK9tht904NMNYJfCIIXrNn9LiKuEH8FhMsuNsOT2B%2B4NRvjiU5iVg7Eg1sUxKW1RXkcUDfgB%2BSRIQYVekDQO5%2FjavHSRR7Y9eTxMQMqThrYB5EW8sK2BUEZdCXlvDeV%2BoVDXw%2BJjDZmaBSleuoj8ayv0zv8pIGgKGGMrYYRgfGa2RJSF3lAj2QL8H0eAPtLyQdRezUDzks8IBmhT075Za91nHEB4vlsk3bBnAyeRin3zxHU9kzeJCqLuFHgT2Jhw6tu%2BsDSzb53CUbyznHGvixeBniiZIH1%2FEu6PJwbyDPEB1372%2BjigY%2FtiqmuL26%2Bmzd4%2Fx7gjxM%2FoCbF5COb8iZaXVuMbjdj2uYfB9N8GyNTnFQczKcKun5Bcag2sLFriU0r87LxQ5lmdMr2rELmFYX9%2B1UIDkBQc%2FsrBcoAon6R%2F4Zwx7cXSLI0wFnrNcn8IPczY5qErhCyuuopslsPhpsoz8EyJKMOjS%2FJb1soSucx0uKLkK3tanZ6DqWN5AzwebuypHpZwtIoOxvUPm%2BFC2kP5XUwPK7CLyr6rJq6WvzrWSuY%2BlBbQ0c3oyNT9MNj2hb4GOqUBQRFQ49p04wYi2SB2rW20nijoXbLN0D2Zsg4ifkNvga2pDkBnRVg8VFozvTtu11uGdiQSUijkqqxOzCsI347WrM55BAT%2BvwgvfCqXNlMg8m5KUO6DbkJHnuEvk0TskUYEDj6PurMrx%2FEMPSKhypDNTBff6skN3TsaWwCnNe12KP80moSKokfLxdhp52H97wJqpp4Ozw1wLg6Y3T1EMRLq7jY9TjY7&X-Amz-Signature=a50fde87925702ba5893a5943d56fb338ae62ef16ed5e83ba8794eaa2227d215&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNQQQ6U2%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICqcjZHEN2adYOsffy2xmj8pOQ11C%2Bk5jM13Et%2BGaSIoAiEAx%2FPga7zFNgD556wPkq6JVdalVY66CiJth9CO1IN6L3EqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAj%2BOBAj%2FZMhxqAaUCrcA7dm3420rwmPka4y1z9ZV4ir0ptVWXDZ4k92YddPb9WZUleENR6yikhLPBdE50Je3uqrHlXf1OSFWB4LWB9NX32ecgTNVMDFzh4RVCQpKAH7jvkVIWALJteTvNwLtgyFHjydx32SH%2B%2BPYSJQyEJYrJxIZsZa%2FP96CwDKel7M2acCY0fsa1LJc74J6KJlXBLOr8jJ2iFS0V28MfevFaOC%2FNxr7%2Bu1dTDVvPKr1CQxwO2KtHscHMz6Ynzwa3U7TL4DnXW0eWHoYXDh2TbRCdBXGYAmzYxeJNp4%2B0Em0PpAIaglfnCNmumePLIvb%2BxECQpD%2Bv%2Fpces668Xrfx6KotGKPfJyJN8I7Ij%2Bi1P8RKTyNo1nYX%2FpE5huWCOExsJF1iFnCoEmLCE6UZX5%2BFQ8Pf6rtPHndpOA%2F%2BV9lK40Tj5qxobiJTqrq5gDr8byXFYVwIhf%2B1JnUM4bDQAaMycPoH5wJ3EbXJNg3wNHW1TnfXwEWlqBiQNz75bzYrgwHEpC8WWfZR4vWnH0XyWT%2BrNA1wQUE3XJkGJFl085Q1HyhoyjPHyeEl5BiSqz4b18shkt54hzDIeR%2FNaKTxyszWT0j%2BOTZfAxRHNc0mdN6rkJtDpzG11Tz3KAto3HWvRb8YKDMPz1hb4GOqUBDdzUTnHS4%2BRm5R%2BGGKVjFjX4Q0EHMOk%2BBTVfLQAR9ssMluTtuhbu3hyT%2FsbGiNStu3EcqW2bmuj0XlvEL9mTE1xiCvhbQJ2odoxto2RH8%2FJUSg07f1IFEzo3ze4Z05d05BC%2BDK7t%2FwRAR0VKCgRASXmR9O0hyzTMebDv3uZzklt%2FjbJB%2FowbAIpurN%2FhJLDX3earHIYy%2BIEVkIirMB%2FC9Ofgyo0z&X-Amz-Signature=2ca1fab4a30ee3608029ced35e61d15627d28a5c771844f4039c64eeeeb3a111&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
