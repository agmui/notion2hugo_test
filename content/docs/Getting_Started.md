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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655QPNNTH%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDRuXEWC%2F%2FMh5Qs6d9R9y%2BtlX8xRg1vIhbN7xeiQIKjoQIgBxYa%2BqUqcwQKRtZaYca%2FS5kLCsK7LstIQrQ5I4bgnqMqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISZwyyKggyZyYjt6CrcA6HwWNZvPZSZZ%2FoZL48uTv%2BeRP%2Fk2Esjp%2BmvWYVXWm7trH9MHhUjQhov9hfH6n27UWIls%2BK5IbS6oG4dZLTtQyB1ebjqL%2BJNbg9JZacmD%2BMNuOhrPaf8O4RF38gqcfxlrGeQgfN3kj4MZyg6SDItwkVUHlidJoR28Uqx%2FeZq3KauV%2B5t0OWy4kbSyah%2BLVUV0KZ4LxANY6g8U77gpiUkyhdcBF1hMNVXDYoI%2BA96wIdyQjL45jRQcdAjZ0vUbEjWDU5TS1elGt7NoniTQ51WG8nqCA0u8%2Ba2UYJrXK%2BWHbnyLjIdqWyoGOv63MiD6E9JL0FjBLV1883lu%2BetYZ1oX7k6rWy12H%2BtWTI5pcUzchvyYptqfwVSCmowzK1Ji5In9dc7ovZUzYe3jenMDGvNHEcFSYVX3coEs6ub6HvKj5fd%2F0JV9YrfQ3qPN3AD2qTPHUBVupQZajdMnbkW7zY9kGBGRRbBSa6eT3baMm5TUMaRbl6g%2F%2BI845UbvnVG8472EV8PEsm%2BoR2tdsBcSUE8QEhsnN9MKhp%2FaIIfvCkow2Bm6hO8B%2BXPzcjLXK6CKEyWE4bHpkdkdcKOX6Ammvcw8nsFc64OJcybGJ5WJh0LfJ%2F3e9KupyL52RLs2IH0MLXbjsEGOqUBntwy%2B%2F6peKtVLMrtpVolj%2FJG5eDmrAZKeA5XZMm7z8JC9DnGc16nU7RHhWQO5H3TxLbhmE84CIm2NYHA5Rbc6CSM81%2BvaNq0FbL4535nQYNmJp3SzPNSAesLLoZC4KxJ74q3QL9z6XZoKq9Zxagt6noqB4%2BrGMPIUnWg2g6H%2F%2FDEuzDTarUd5IgFAiezgRTNHtLZSEhR8EsfeRBDrS05Hq%2BEtgAJ&X-Amz-Signature=0847589413aa51109e0cec19c3c1b9b8a7b709bf4ff6f0ef52fb6989a53c48a4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655QPNNTH%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDRuXEWC%2F%2FMh5Qs6d9R9y%2BtlX8xRg1vIhbN7xeiQIKjoQIgBxYa%2BqUqcwQKRtZaYca%2FS5kLCsK7LstIQrQ5I4bgnqMqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISZwyyKggyZyYjt6CrcA6HwWNZvPZSZZ%2FoZL48uTv%2BeRP%2Fk2Esjp%2BmvWYVXWm7trH9MHhUjQhov9hfH6n27UWIls%2BK5IbS6oG4dZLTtQyB1ebjqL%2BJNbg9JZacmD%2BMNuOhrPaf8O4RF38gqcfxlrGeQgfN3kj4MZyg6SDItwkVUHlidJoR28Uqx%2FeZq3KauV%2B5t0OWy4kbSyah%2BLVUV0KZ4LxANY6g8U77gpiUkyhdcBF1hMNVXDYoI%2BA96wIdyQjL45jRQcdAjZ0vUbEjWDU5TS1elGt7NoniTQ51WG8nqCA0u8%2Ba2UYJrXK%2BWHbnyLjIdqWyoGOv63MiD6E9JL0FjBLV1883lu%2BetYZ1oX7k6rWy12H%2BtWTI5pcUzchvyYptqfwVSCmowzK1Ji5In9dc7ovZUzYe3jenMDGvNHEcFSYVX3coEs6ub6HvKj5fd%2F0JV9YrfQ3qPN3AD2qTPHUBVupQZajdMnbkW7zY9kGBGRRbBSa6eT3baMm5TUMaRbl6g%2F%2BI845UbvnVG8472EV8PEsm%2BoR2tdsBcSUE8QEhsnN9MKhp%2FaIIfvCkow2Bm6hO8B%2BXPzcjLXK6CKEyWE4bHpkdkdcKOX6Ammvcw8nsFc64OJcybGJ5WJh0LfJ%2F3e9KupyL52RLs2IH0MLXbjsEGOqUBntwy%2B%2F6peKtVLMrtpVolj%2FJG5eDmrAZKeA5XZMm7z8JC9DnGc16nU7RHhWQO5H3TxLbhmE84CIm2NYHA5Rbc6CSM81%2BvaNq0FbL4535nQYNmJp3SzPNSAesLLoZC4KxJ74q3QL9z6XZoKq9Zxagt6noqB4%2BrGMPIUnWg2g6H%2F%2FDEuzDTarUd5IgFAiezgRTNHtLZSEhR8EsfeRBDrS05Hq%2BEtgAJ&X-Amz-Signature=ca1dfaab91c26c855f030af6ecdeb2bacd623d81cf8f1a66339ba3239323849a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655QPNNTH%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDRuXEWC%2F%2FMh5Qs6d9R9y%2BtlX8xRg1vIhbN7xeiQIKjoQIgBxYa%2BqUqcwQKRtZaYca%2FS5kLCsK7LstIQrQ5I4bgnqMqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISZwyyKggyZyYjt6CrcA6HwWNZvPZSZZ%2FoZL48uTv%2BeRP%2Fk2Esjp%2BmvWYVXWm7trH9MHhUjQhov9hfH6n27UWIls%2BK5IbS6oG4dZLTtQyB1ebjqL%2BJNbg9JZacmD%2BMNuOhrPaf8O4RF38gqcfxlrGeQgfN3kj4MZyg6SDItwkVUHlidJoR28Uqx%2FeZq3KauV%2B5t0OWy4kbSyah%2BLVUV0KZ4LxANY6g8U77gpiUkyhdcBF1hMNVXDYoI%2BA96wIdyQjL45jRQcdAjZ0vUbEjWDU5TS1elGt7NoniTQ51WG8nqCA0u8%2Ba2UYJrXK%2BWHbnyLjIdqWyoGOv63MiD6E9JL0FjBLV1883lu%2BetYZ1oX7k6rWy12H%2BtWTI5pcUzchvyYptqfwVSCmowzK1Ji5In9dc7ovZUzYe3jenMDGvNHEcFSYVX3coEs6ub6HvKj5fd%2F0JV9YrfQ3qPN3AD2qTPHUBVupQZajdMnbkW7zY9kGBGRRbBSa6eT3baMm5TUMaRbl6g%2F%2BI845UbvnVG8472EV8PEsm%2BoR2tdsBcSUE8QEhsnN9MKhp%2FaIIfvCkow2Bm6hO8B%2BXPzcjLXK6CKEyWE4bHpkdkdcKOX6Ammvcw8nsFc64OJcybGJ5WJh0LfJ%2F3e9KupyL52RLs2IH0MLXbjsEGOqUBntwy%2B%2F6peKtVLMrtpVolj%2FJG5eDmrAZKeA5XZMm7z8JC9DnGc16nU7RHhWQO5H3TxLbhmE84CIm2NYHA5Rbc6CSM81%2BvaNq0FbL4535nQYNmJp3SzPNSAesLLoZC4KxJ74q3QL9z6XZoKq9Zxagt6noqB4%2BrGMPIUnWg2g6H%2F%2FDEuzDTarUd5IgFAiezgRTNHtLZSEhR8EsfeRBDrS05Hq%2BEtgAJ&X-Amz-Signature=fdda5621b3ad11a6ab2bde7fd6634a3f13e9ab6b4b7829d5d1294317c1a470d8&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZVH74P3%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDqVzYAuUIw3s%2BNCge9OG9pNClYwYCttUFxxGjZNyGuCQIgb20L4eJHcAsR8Ve6wTlFblbZKCrnsGixhjvk4N8t3F4qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFImroCUv16adLkHyrcAxiROFLtfKi7CapR6GLewyOcBe4v%2FohIkpo0D%2B97LXVeK5dELacWD%2FyQGqqDxbjiz9fjkYxVm724OS8P3uHctSESx4FkVWHLXusb4NOAT1413vaPJdoVtFdvDBeJN%2FuWOxlx1X3ntN0EwZMpPUcFVDH5tP%2F15OVOvPieYp5gE64LbjzmLwuroKigD5pe3U03fkWTKEW9bafrHlu%2Fyo3s6pg0dJBwfXyl9CoU3eRwjgoJTVfF%2FxBhrln%2FjOq3uxrcVQT0SK1a1OxK83JeaKmC%2Bv1KIHFmmFPHnDT%2BUhOQIFAvOuk6YpgeWhsaL%2BtX1N6anu1jJc%2By%2FyqHHGDJUhpCemOo1WsGeD2p1Sc5pxgo1DCDCNh8BVhxgUh%2B5Wl1G%2FnTyXR5UK9DRedeDQhno6%2F4Dth2CESoaikKi9KNJunkAEOBZ2V76CWN6%2BRj8fUGeBRfAn0KlyXvQf837TWbz6q0tCCIsKoADjuoFdzEbvJ4bbFS5GXL%2B6wGgyR46X8lxjUIKU1xtSsLaQ%2FRZF3mexkcsL0E5vec4%2BgqB2FGSG4NV3x3TO2OAVhKp4E2A72FJVxj14byfh0GnlG36bjZtQAOqTart7ELg6tQsexs5%2F0MZ4d36bxKjtU3vaXRQ6SIMNbbjsEGOqUBun0gA%2FFGQKJhoxU6SmOJpIdJZc7nH9gKtfLboLfAceNZKQ7viFeMPmExrV3rt8yq8uVR%2BiCVHVVJhmP5AMy%2BEch%2Fv4z%2FpHM4ValIYLAe5fFRN%2BM%2BlWzt5vSx3Robt1w4HwuUMhkOvjkl2e8qYllpQPiAj%2FQcIS8w3vTekXhC4wddXHDFChKkFsuTLnvoBGRmWiev0rFGc22gK%2FGpv%2BY18EAL%2FvBN&X-Amz-Signature=043e3e1a929e5e54625ca72d5b2a7c5a278af7a1e2b23c717b1848a3ec1f984e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466332H7WWQ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIDudh0KRHWD6m%2FzUkSqvHXbJa5b3UuLYqcYjzmLm%2Fn%2FkAiA%2FY2GUI%2BTbsxcxtyvruq4ARbvmnkJUz75nC1H54WlztCqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfchxYES11k43U82CKtwDXZewkL6PkqKmy4YY3buB3wIlwJ2Gwi29zZjvrygRpeExggOjHLqU5RVn9DNMrQ6lHtN6bXthsqqNjsx1wQyDGaHhMnGbTWnODvrqy54UtygW%2Fsfrs6IPYCPHPp%2FAzlLB2xAvs1aISXfgKzmAhmCwEH9SQtOm%2BMyOy6bpzi9uBJiRVrhO7JJ%2FDsZzH5LnJMUhp%2Fe875RPGOBoqbmefFLBEstN0NJ51fzwipBCFlTdVMG1OQi1Yclh%2F8lZA1OFyrW9%2Bly7BreoT9OAECV5a5NoZoLv0V7Y15E3kVrnQxo3cdWPNXJZ5qDa%2FIcAByrrYDsOKOe8llnZyvcX3FKAXH2SnL%2Fbb0XaWyyi%2FeARsjJHFT%2FpKOqLHzLpL%2FI8YUWAnxwfNxWyMHP97wLSr2LsErjUpwxq1bp0OLonlxJuooFs1VlWQpjNJnAAeaX5KJ6nUjCMxIt2CGdMoknUxZ304eK8pLzOzrPubbN9JhzGai8sFRNlXm%2BRUV8HclzatufRGKtZLhu9op%2FqfO%2FykMJ7WQpR36YGcwTi%2B0ZXcLkEGifLmQfWFxysrVP%2F9Pgj5ssCun4TmJUWjSYHakqKoV%2FmkYKXcpG3xTR%2BH9meII%2BKEkf%2FUr3OY%2FHU5OVBish4TEUw5tqOwQY6pgEU6mRqaQLmiZswTJIGEAzz26b50rktZtDa5lsFZqRxPffID%2Fg26A7QaDZLHBTo9A6A6PQUdFD%2FF%2F%2FRfLkeaUIxvdaOhEC3Px4Y%2FH5mxIhKeQOL5yO2n6eXWyHM0IpsHosmBmetOrIHcoeiviszg7aCzKPQP%2FtsArTOjbzpVUui1Qw4fOa%2FfBu%2FTeuypkaImaOLh%2FZV7%2Fkpn%2Bs2%2Bxu5hcVZrFOXwoyU&X-Amz-Signature=4faa4bf9f8e0265668e6e7b4dc97245819dd835cec2ce0a28769bc509d91195c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655QPNNTH%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDRuXEWC%2F%2FMh5Qs6d9R9y%2BtlX8xRg1vIhbN7xeiQIKjoQIgBxYa%2BqUqcwQKRtZaYca%2FS5kLCsK7LstIQrQ5I4bgnqMqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISZwyyKggyZyYjt6CrcA6HwWNZvPZSZZ%2FoZL48uTv%2BeRP%2Fk2Esjp%2BmvWYVXWm7trH9MHhUjQhov9hfH6n27UWIls%2BK5IbS6oG4dZLTtQyB1ebjqL%2BJNbg9JZacmD%2BMNuOhrPaf8O4RF38gqcfxlrGeQgfN3kj4MZyg6SDItwkVUHlidJoR28Uqx%2FeZq3KauV%2B5t0OWy4kbSyah%2BLVUV0KZ4LxANY6g8U77gpiUkyhdcBF1hMNVXDYoI%2BA96wIdyQjL45jRQcdAjZ0vUbEjWDU5TS1elGt7NoniTQ51WG8nqCA0u8%2Ba2UYJrXK%2BWHbnyLjIdqWyoGOv63MiD6E9JL0FjBLV1883lu%2BetYZ1oX7k6rWy12H%2BtWTI5pcUzchvyYptqfwVSCmowzK1Ji5In9dc7ovZUzYe3jenMDGvNHEcFSYVX3coEs6ub6HvKj5fd%2F0JV9YrfQ3qPN3AD2qTPHUBVupQZajdMnbkW7zY9kGBGRRbBSa6eT3baMm5TUMaRbl6g%2F%2BI845UbvnVG8472EV8PEsm%2BoR2tdsBcSUE8QEhsnN9MKhp%2FaIIfvCkow2Bm6hO8B%2BXPzcjLXK6CKEyWE4bHpkdkdcKOX6Ammvcw8nsFc64OJcybGJ5WJh0LfJ%2F3e9KupyL52RLs2IH0MLXbjsEGOqUBntwy%2B%2F6peKtVLMrtpVolj%2FJG5eDmrAZKeA5XZMm7z8JC9DnGc16nU7RHhWQO5H3TxLbhmE84CIm2NYHA5Rbc6CSM81%2BvaNq0FbL4535nQYNmJp3SzPNSAesLLoZC4KxJ74q3QL9z6XZoKq9Zxagt6noqB4%2BrGMPIUnWg2g6H%2F%2FDEuzDTarUd5IgFAiezgRTNHtLZSEhR8EsfeRBDrS05Hq%2BEtgAJ&X-Amz-Signature=5e486d32acd4c998718707ad5dc8a7d5d26b3e50ea9107d06f8db179f97b15dc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
