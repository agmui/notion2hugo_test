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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FPVP3IL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICgxv8ef0b3khf3%2B1qL6gu8VpnK6iVLG34noeZMPYd%2BpAiEA8QhuJDxtSQVzzA42TbvvMswOSoWFQFw%2Fn5vUm4NsSw4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLS%2BoDhD4WVpIRHkNyrcAz%2FC6Fzb0%2FD7S4pSO505n2QJvvqfFm0xk3zwga4UZdd4ukK2jYtqq17vW2NVQTMyLQvHh%2FfKYzn0cCM%2FoMzgAJzIfrZGiAup9xSGbk57hO%2BVStke0Eg3yhYfcARkhKfXICtkQSFZyW%2FXcUHKu4%2BbL8XF82ZfX6i3d4E78PzMBFqG8vlBTvhi5QbPoNwDMk4OhsVyCaPhmdOM44wsJeHxK%2BSdis%2FJ0vfGwQybidkXYpHQHhupGsdc3F1KrkZTz4FHqn6CAnUUFnhjbvMCvXl2d6HJK6YjInixyCdkZ4LOT60xnr7CWPQOgOkCbvIAOvdoIwBlnnBplaOQQqm1IosiyI%2FwJWYSoVSGv99akOx%2BE5ZV70CY2Q24UT1PNFRXcnxefl52ecEmpmtzRjcDOepVm3Ut%2F1lAERXS9lcivtdPtqkwjVMUcEVhzr7RSCE47cPCp8HyZcVK%2BNoGEzUIenow%2BclG%2BE92J15K%2BYqVsRiTl856P0e9gQPsfeB8A0Xj4sbDfRw2vrbzpXFw%2FaKFSTMF6I4UHVUQgGalR7mWgu3Xmw9U306UG%2FIReyjQG0iYcdQu%2ByyUY9ksJWoH3o0OA2ppVk%2BVZN3AFgfkBbe5W1GO3qu8%2F4oMNoXcmyBW4%2F5%2FMPPE28QGOqUB%2Fi8x0mFjNtYiA67DDseNLvCioGqEK50LKjTLO%2BjdeMQJwcQJ2%2F1G9%2FN341BzzwG51l9xed%2BpEateMir5F9QB%2BWYpWA3pdmjPlo9xGA3MENZzul%2FGuUfZVtg4Oa1LF6RKFqEEzZmgWqeBj36fTVb89NIaH3jMOGCp5mT3V3n9d1aOHkQYMORZUtx8qA%2FI%2Bal2hvb3cGJiBbW6UZVesAwizWJgslFi&X-Amz-Signature=91c869b198a9187ae358063beebc71054adc7d6d0725354a3385e64cfb38deaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FPVP3IL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICgxv8ef0b3khf3%2B1qL6gu8VpnK6iVLG34noeZMPYd%2BpAiEA8QhuJDxtSQVzzA42TbvvMswOSoWFQFw%2Fn5vUm4NsSw4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLS%2BoDhD4WVpIRHkNyrcAz%2FC6Fzb0%2FD7S4pSO505n2QJvvqfFm0xk3zwga4UZdd4ukK2jYtqq17vW2NVQTMyLQvHh%2FfKYzn0cCM%2FoMzgAJzIfrZGiAup9xSGbk57hO%2BVStke0Eg3yhYfcARkhKfXICtkQSFZyW%2FXcUHKu4%2BbL8XF82ZfX6i3d4E78PzMBFqG8vlBTvhi5QbPoNwDMk4OhsVyCaPhmdOM44wsJeHxK%2BSdis%2FJ0vfGwQybidkXYpHQHhupGsdc3F1KrkZTz4FHqn6CAnUUFnhjbvMCvXl2d6HJK6YjInixyCdkZ4LOT60xnr7CWPQOgOkCbvIAOvdoIwBlnnBplaOQQqm1IosiyI%2FwJWYSoVSGv99akOx%2BE5ZV70CY2Q24UT1PNFRXcnxefl52ecEmpmtzRjcDOepVm3Ut%2F1lAERXS9lcivtdPtqkwjVMUcEVhzr7RSCE47cPCp8HyZcVK%2BNoGEzUIenow%2BclG%2BE92J15K%2BYqVsRiTl856P0e9gQPsfeB8A0Xj4sbDfRw2vrbzpXFw%2FaKFSTMF6I4UHVUQgGalR7mWgu3Xmw9U306UG%2FIReyjQG0iYcdQu%2ByyUY9ksJWoH3o0OA2ppVk%2BVZN3AFgfkBbe5W1GO3qu8%2F4oMNoXcmyBW4%2F5%2FMPPE28QGOqUB%2Fi8x0mFjNtYiA67DDseNLvCioGqEK50LKjTLO%2BjdeMQJwcQJ2%2F1G9%2FN341BzzwG51l9xed%2BpEateMir5F9QB%2BWYpWA3pdmjPlo9xGA3MENZzul%2FGuUfZVtg4Oa1LF6RKFqEEzZmgWqeBj36fTVb89NIaH3jMOGCp5mT3V3n9d1aOHkQYMORZUtx8qA%2FI%2Bal2hvb3cGJiBbW6UZVesAwizWJgslFi&X-Amz-Signature=1e39c70eb6207e5035d9cd69cdc10550051fa1296aff04916031187d62bed0aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FPVP3IL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICgxv8ef0b3khf3%2B1qL6gu8VpnK6iVLG34noeZMPYd%2BpAiEA8QhuJDxtSQVzzA42TbvvMswOSoWFQFw%2Fn5vUm4NsSw4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLS%2BoDhD4WVpIRHkNyrcAz%2FC6Fzb0%2FD7S4pSO505n2QJvvqfFm0xk3zwga4UZdd4ukK2jYtqq17vW2NVQTMyLQvHh%2FfKYzn0cCM%2FoMzgAJzIfrZGiAup9xSGbk57hO%2BVStke0Eg3yhYfcARkhKfXICtkQSFZyW%2FXcUHKu4%2BbL8XF82ZfX6i3d4E78PzMBFqG8vlBTvhi5QbPoNwDMk4OhsVyCaPhmdOM44wsJeHxK%2BSdis%2FJ0vfGwQybidkXYpHQHhupGsdc3F1KrkZTz4FHqn6CAnUUFnhjbvMCvXl2d6HJK6YjInixyCdkZ4LOT60xnr7CWPQOgOkCbvIAOvdoIwBlnnBplaOQQqm1IosiyI%2FwJWYSoVSGv99akOx%2BE5ZV70CY2Q24UT1PNFRXcnxefl52ecEmpmtzRjcDOepVm3Ut%2F1lAERXS9lcivtdPtqkwjVMUcEVhzr7RSCE47cPCp8HyZcVK%2BNoGEzUIenow%2BclG%2BE92J15K%2BYqVsRiTl856P0e9gQPsfeB8A0Xj4sbDfRw2vrbzpXFw%2FaKFSTMF6I4UHVUQgGalR7mWgu3Xmw9U306UG%2FIReyjQG0iYcdQu%2ByyUY9ksJWoH3o0OA2ppVk%2BVZN3AFgfkBbe5W1GO3qu8%2F4oMNoXcmyBW4%2F5%2FMPPE28QGOqUB%2Fi8x0mFjNtYiA67DDseNLvCioGqEK50LKjTLO%2BjdeMQJwcQJ2%2F1G9%2FN341BzzwG51l9xed%2BpEateMir5F9QB%2BWYpWA3pdmjPlo9xGA3MENZzul%2FGuUfZVtg4Oa1LF6RKFqEEzZmgWqeBj36fTVb89NIaH3jMOGCp5mT3V3n9d1aOHkQYMORZUtx8qA%2FI%2Bal2hvb3cGJiBbW6UZVesAwizWJgslFi&X-Amz-Signature=3d2d352864d8363d7f4e6c65f90eeb33008957614d98824053c0470fb78332e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466435UWIOT%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDYOsh%2FX9%2Bd6AvM39U9k0FhkpTxlTERodtbaGy0IWE1%2FwIgHZfBGWgT4THBuzETCXRSLn0hDRzQaEDAYWb7gOqVqgQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2zFWGpcwbtd%2BYLqircA5%2F3rH1%2FfII8r9SwWwAlQQmASAyJuLGYjM2b4O7fb9DhPS5H1uOZEpyR7tGMLBMh1j8o3tfd5D0dANTfQlra5OZE2dwwqnAIu9V0Nz3r2L1iTlcNyMZgRuMJxTkoEY37KKWkAjSf6eSvz5F6QfA1CLjhFaQx5yRbU2N%2BQIxeGwOe4GNueO%2FzGvOTJKgvVIwj2LuG4xyxjfFrmeqG9cdIDAvJsiNxVxVK5TQQFqZvpeOuZteKmQuvgZ8QdkrI%2FiJAtP9hlnipkLkIMEipE7mrGkEWtgmbbARjLRCyMIDi1WhUJHCXiWmKRNAfdZzxCBG7ZHBvR03FeqPUK7Kx031PwXnedej7UVEs%2BadMuV4jseJ0BpA76P2nk9LqKm9PL%2F1DKpO%2Fz0hk%2B9CAxiUmGQ5hDnWYCCgjs1j3H7vPvud6L1jSqjUg%2FE9xwHF6HWdd9A8oS4MdO9xyCUg%2BbLRYTzq9DbrhDUHG4d36AS15GUIug4PAgjIsQnxJz7ohSqsFTLQ3YJToKyI1gJoIZDcqhuH6q66dpoNcXNSyDnprygpDfjBjQ7NBnSbMUs%2Fzqk9iEYTkMhvlLDBD%2B9NwmnrKAFa4CaNoBPp8OVjLNO%2FKh8m4jAqQdh4HDfFzn1SW%2FAPIMIvF28QGOqUBZ3db46W6XT2fVSg2iFHkkUBu6v6EoUwhnmU0JnUVKC%2BMlwA%2Bhs4GrD8OOqivhbt8ZpZ8wisOQJCpZEBojIDtyNN3re%2F%2Bh4yCUM2wSMXY0S4Ke3Kkj5Kp4YttGpzVZzMwRd3hFhf%2FRbXqOYiHpJP6NBxYLm3mKmc4Q2IqqRXknN2R8xj0Uh3J1%2FPbbZh2v6AFwgiJOax6jxIbMneWAYNRopBIm9AC&X-Amz-Signature=32daa0e5bab1c02c6739e2f7f37d56a1941386e643e82bd2ed321af478a72174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3KJNP2U%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFGEiZgBg0ODPONxvOSSACWI3TJC%2BctnaaXtfBQVBp5AAiEAz6Q3F7GPfnNFeVWUvnQ8lXGIu8%2FLffVPCd5E1iiuj7UqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCKV5g8C67ZDh7GBNyrcA6cbRTGzhRqC3%2FPwUFnheqHkz8EbKx9zlGT8DZ61XHgklVAiHxeTwQrd3Xbwhj%2BlX59XBrLiRRuBiLEDjun%2BHpu4AhvG60pv8zPqiT2ViuTEyRjsIsgJbu%2BzgdIKCHaNX%2B%2BYGMCAEPAHpAmDLe9%2FL4q3F2HbVBBJ6UmjOq6oqfC3OXsL5AtklXXWkPgRiWsGnw4OH7fZPOESFA%2BgAFuU10jxTbOlLMngu4VUO%2FfadAlm1isnM09xrKi2VtGOSmJcjVDY19T%2BcooYPKubS2LBSh1%2FDzaZdHHpCLmXx%2FtusZSUoiMGXMgrGmZBjg2Fpsvfwx9DQ2bp%2F0Xt4sfCltoJFXAEdeNutCuDzMSL6xyhOUKKdC9DeuBRVs0DtbDqdOdFXvnNzZiNcbAGlfowTd5glCopUj01LXfXJA1ExA0P6%2Bl8ctneQWyqOD1eBP4rjOfdHTvxugEBC4ic8OBLUU5zP7BhubNxzh9vUHmsNH0tsWPv8x7Q%2B69NILitzKoYB9KDQf1R%2FmJXWGmy%2FvRSJ6IgctEc6Y82xKroQT61jRllTc9LjquYiy6DaDCQDsl6hgdPJlGAfxIhiC0oN%2BmE6iVnq5saD5mHGrugBte5V5L7TmFgmLbo5yTrg74%2Bl5pAMKbF28QGOqUBiujVUbR4cJUzof7iaJvPfCbDxDnX%2FeYHru8NnZRBq2oVqIs01QbIvt45YMAH1tCmEp2oj99o6Mv9wYkKwrZTX7%2B9ebxaWmLqawup5TAuA4e9dlVd7RTrACEFab47Zu82%2BEPszfq06R3bt9%2F3lKodUVhyiYUbDO1hUqfKLUwy0Uvwf9RmeGOwB47bT7v4uwUwEQMiOLVgsUPz5mLSYvLz2D%2FMGgGX&X-Amz-Signature=fdba2d60f360cc7190fa946bd1d5ed6bb9f7280b7f6cae6f8575e2865e634879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FPVP3IL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICgxv8ef0b3khf3%2B1qL6gu8VpnK6iVLG34noeZMPYd%2BpAiEA8QhuJDxtSQVzzA42TbvvMswOSoWFQFw%2Fn5vUm4NsSw4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLS%2BoDhD4WVpIRHkNyrcAz%2FC6Fzb0%2FD7S4pSO505n2QJvvqfFm0xk3zwga4UZdd4ukK2jYtqq17vW2NVQTMyLQvHh%2FfKYzn0cCM%2FoMzgAJzIfrZGiAup9xSGbk57hO%2BVStke0Eg3yhYfcARkhKfXICtkQSFZyW%2FXcUHKu4%2BbL8XF82ZfX6i3d4E78PzMBFqG8vlBTvhi5QbPoNwDMk4OhsVyCaPhmdOM44wsJeHxK%2BSdis%2FJ0vfGwQybidkXYpHQHhupGsdc3F1KrkZTz4FHqn6CAnUUFnhjbvMCvXl2d6HJK6YjInixyCdkZ4LOT60xnr7CWPQOgOkCbvIAOvdoIwBlnnBplaOQQqm1IosiyI%2FwJWYSoVSGv99akOx%2BE5ZV70CY2Q24UT1PNFRXcnxefl52ecEmpmtzRjcDOepVm3Ut%2F1lAERXS9lcivtdPtqkwjVMUcEVhzr7RSCE47cPCp8HyZcVK%2BNoGEzUIenow%2BclG%2BE92J15K%2BYqVsRiTl856P0e9gQPsfeB8A0Xj4sbDfRw2vrbzpXFw%2FaKFSTMF6I4UHVUQgGalR7mWgu3Xmw9U306UG%2FIReyjQG0iYcdQu%2ByyUY9ksJWoH3o0OA2ppVk%2BVZN3AFgfkBbe5W1GO3qu8%2F4oMNoXcmyBW4%2F5%2FMPPE28QGOqUB%2Fi8x0mFjNtYiA67DDseNLvCioGqEK50LKjTLO%2BjdeMQJwcQJ2%2F1G9%2FN341BzzwG51l9xed%2BpEateMir5F9QB%2BWYpWA3pdmjPlo9xGA3MENZzul%2FGuUfZVtg4Oa1LF6RKFqEEzZmgWqeBj36fTVb89NIaH3jMOGCp5mT3V3n9d1aOHkQYMORZUtx8qA%2FI%2Bal2hvb3cGJiBbW6UZVesAwizWJgslFi&X-Amz-Signature=15a18ef86b58ed8bd7b720ac54471308fe8917953e595487cd8553d3c47bacf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
