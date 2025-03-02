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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EQSP3UM%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T003952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIFFjt%2FHgOdFhDEfIXJZ6JRPlxJq7pJ5CF5XC3fhK2sq3AiBp6irNVUtS2Xyl%2BZ17ED%2FnfNI%2BVIwHfknGDLVmnPH%2B9CqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FjIPPD%2BV0bYraWDlKtwDuXcls%2BT1BK3Z0qK3Z1D2GO6%2BO50tIlvQD06UQygv4OWK04qo6hI%2Bo3sG9rW%2FOOBdXf2PfWblrOUzusNoAY56ELV0olAzPO8rJvrbtURFnHVvJaQP36CXKrtHUJWlQHhZkQuFVMQO3OaBcvtfJ%2BqDpd%2B0zNkn2g3QtzDXfgEAAySJuH81u3jfyTvUwfVfA6J7sa3u1uUYTRdmKkcmV0RhfDmOtjn3UKtDO12%2BRdn%2FTE4mt8y%2B08gPdaJdl8Hiep0K%2BBbDLEnkSqb5glg2NSP20kdpkVTLlAm3hOj3saOizWIo%2F4Bno58XcVA7eeYqu%2FyAt2tD%2FF%2BeE6zCRokOQYpQz9ddJiEHVR%2ByE8rO6o13%2BMsIT76EO3Vjq0a1IBR6Z1Ir4mNObH5mulJ2xjsRLNlhymTAnBuSYixQ9ReP39NMd%2F6mVsGYMiIASI9lAZZmgF2f5xbRYDg%2Bk6YKsloIGjey2RaRNIMRtvQeQMRkszvBQoG07ZYFSooHI02a6NWmzfA%2FY3yh8CKKVhusrRDBZ%2FF8Ai%2FU2NzW48Cod5xWohvw43lUo9EP%2B4U4v%2B5B%2BdY2UJ0Ddff5OMiTH75s3P1%2BR5YqqSkeIw6pzfh%2Fq0vvw9Qz2ASULTxe00pAUqToMegw1riOvgY6pgEvWyM0OZYfprIuTaeuuRW84xnLS%2BOmo0gwkcmCmFwjPh8%2F1iTFEZ5f5nJpTyRBqVeo%2F1IsoGpV7juc3TredvEWuc6zEUgn%2F4ZvAOh6AIpdsq9E4DaxFXT1n7weVs7vm0BDWB4OvpmHwUdY0UX%2Fhl2YY79i6V3dBPoguAlWk1CmTCtIaa4i%2BCwnjo24kVkQemXEb8jP%2BbrRRPedYKaL5Vy6MQL2OiIz&X-Amz-Signature=65354039263228c0c8bd2c0589f39e988beafd1af753cf2fac708cb8f04864f4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EQSP3UM%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T003953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIFFjt%2FHgOdFhDEfIXJZ6JRPlxJq7pJ5CF5XC3fhK2sq3AiBp6irNVUtS2Xyl%2BZ17ED%2FnfNI%2BVIwHfknGDLVmnPH%2B9CqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FjIPPD%2BV0bYraWDlKtwDuXcls%2BT1BK3Z0qK3Z1D2GO6%2BO50tIlvQD06UQygv4OWK04qo6hI%2Bo3sG9rW%2FOOBdXf2PfWblrOUzusNoAY56ELV0olAzPO8rJvrbtURFnHVvJaQP36CXKrtHUJWlQHhZkQuFVMQO3OaBcvtfJ%2BqDpd%2B0zNkn2g3QtzDXfgEAAySJuH81u3jfyTvUwfVfA6J7sa3u1uUYTRdmKkcmV0RhfDmOtjn3UKtDO12%2BRdn%2FTE4mt8y%2B08gPdaJdl8Hiep0K%2BBbDLEnkSqb5glg2NSP20kdpkVTLlAm3hOj3saOizWIo%2F4Bno58XcVA7eeYqu%2FyAt2tD%2FF%2BeE6zCRokOQYpQz9ddJiEHVR%2ByE8rO6o13%2BMsIT76EO3Vjq0a1IBR6Z1Ir4mNObH5mulJ2xjsRLNlhymTAnBuSYixQ9ReP39NMd%2F6mVsGYMiIASI9lAZZmgF2f5xbRYDg%2Bk6YKsloIGjey2RaRNIMRtvQeQMRkszvBQoG07ZYFSooHI02a6NWmzfA%2FY3yh8CKKVhusrRDBZ%2FF8Ai%2FU2NzW48Cod5xWohvw43lUo9EP%2B4U4v%2B5B%2BdY2UJ0Ddff5OMiTH75s3P1%2BR5YqqSkeIw6pzfh%2Fq0vvw9Qz2ASULTxe00pAUqToMegw1riOvgY6pgEvWyM0OZYfprIuTaeuuRW84xnLS%2BOmo0gwkcmCmFwjPh8%2F1iTFEZ5f5nJpTyRBqVeo%2F1IsoGpV7juc3TredvEWuc6zEUgn%2F4ZvAOh6AIpdsq9E4DaxFXT1n7weVs7vm0BDWB4OvpmHwUdY0UX%2Fhl2YY79i6V3dBPoguAlWk1CmTCtIaa4i%2BCwnjo24kVkQemXEb8jP%2BbrRRPedYKaL5Vy6MQL2OiIz&X-Amz-Signature=4ef980d929b983ae97e89f55b64a989cdc8279971c22b8c7399d832e82c61ea7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSXATUX6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T003955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCNLooZzxQU4ENrJ3x0Ww9JPhmQ%2FJa9bUlE4j1jIpIJlwIhAITbcTwzdy9aE5phFsjtNiGPOFOz19RR%2FdynjKlRQjzBKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igys7b4OGyFN9GVvO6gq3APUpwHA6gwyunCtlaF6MyNzIVlIUk%2Bs%2B6X0vUMhhQNr8clJiYjEsV9FjanXOcTNMEAeJ7%2FDoXFX1yAzCJjVTV4qhsgFicJVFdQqX6DEaryYYbRFPIWiOtislGhBRt0uZiB5Avh8k%2FkToVss5UBXVqjad99RiTHoHf1gxN6314vtOk033K2GY%2F0jo%2B98xcEFqFqmfNP5hUp5h%2BzBbVGUzaIMxOxN0e44QD%2FNcU%2B%2BQIDk9MZsPt1gKdr8JLLBGffmT5H11vG6nHQhHxtL%2BHllpHsebnV5bXwCAsYfFHcBQpBeYgcuYkAJG1GbwZk2m%2FLojU26VdQeaMaMh%2BZ8ZuRFfudaXq2SJpY3DFBaDehH1JntegczRiis8Ua4VdBl7ifE5ZMSX%2BX9QuEv2t5Xv6DRmLodKV5o6f3Kb9D1%2BhcahHDU%2BkU6vhFNCX%2BXLFIYYoaabhnW9S4GrcuVlJgTSJMh%2BxmCMCVsoZdNVULrCQ2%2FRgnquD0k9%2FYpzRhO0pxB2KU4ATFkMnqmKi%2B5Rx9x64mvo2cn7K5cJ6dyHBnJygmlGY0u79a8pvO4AyYd69tH4HF5cgSEWu%2Fj3l6AY95SVG9gIRhJ%2BUSh1oxHgEkKoL1xne7eHVJS1%2BVAjsZj1raePTCMuY6%2BBjqkAW%2FEDwrbqy%2F0PhOhm9VNSrVMS%2BRO5LfPvNXM%2FQspIigkM4QuTVJsuhpSmEyONqsaZuGdlvJWA7zQaHhEgmRdbMg8bzc5RQvbYAHu4SnuI8PG%2FoO6n2%2Bz7jZEB1X24xR%2BLFU7w0FjQ4XPKsTpLd4j590mh8DApYJ8k%2BAHthnFCvxKqvq2QAHaPAHveMpuCypPnxbnILDfX7hLLfaqO%2FT%2BKzl6tCnm&X-Amz-Signature=e5f4173f835f1ebc61c9ff23fcca7b5d06db7882fafab3547783ddb4decbc722&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZZSVK6J%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T003955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCID7CdM%2B88ngwjm78ohdxVG02x%2BCsauJlrTGkavxLrPvoAiEAnWoo8aGvk343cfUuVibvVzEOv9RFh0D71d7freK5zUcqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF94gwiAVHG0NeoPKircAzkkEJxuKgnuiY2pUnJaEgglU0mC3Ht2E674XOrx6SgiVT2tDhR%2BJwwVS8o1ixsZcVaB8h1DCtWOpXg%2F6RmqlwK58ZdsB5rVVr5rVn7msXxU0%2FTJsGBkL9n0g6RWHH8QYDsTGixUKfIrf0rVoeVZDQXjY5cMSn4IoSDOy%2Btr3v1ZPK7erHY0ltvZU8V8Lgnt26uPfT650uQ9AZT%2FT9mctmKMqfsJN7djgVrrXwAj2q8tbQT2S7KsJgJH4iEMVhC13Hhk4gkn0Kk5BQuhhC77qpoqmv%2Fxy9IGWP0TMXbJ4Ej%2F8B67%2BasE38dZAplt1Kpm%2FBiMNC1%2Bmydac%2FCN19myU0%2Fbnr1caldojChaP5hIElfpIXapEVsL6bJK9Z6fq6%2FKkEzrwoqzoXK4yQG8WrGxTPtvHeCL9bRr%2BJkK11D8%2Bfl8NE8NdEUXw8IzFXbN63APkvSnlke2aCnQ6lTjd2rSGWZostLKgse3c7PFRfDV7liHjBj9nfkWAcDx4gU%2Bb1Ntff5D8r9I48H5irb%2FOQ2AgtydObH9j70I7DBSmm6OJc1kd5zidFXo9b1%2FcvAIVeUU4hbKOaAEY5lA0h8q712VCSM8CltEdmjum9FDXO0ehU1zK3quXduQrsaYfvAzMOS5jr4GOqUB6sHXRYb2n%2BhP%2FPENLCTMUTmmQ27oPJTOLLVcBycbZ8cZ4njJivCTRGbIUhjMY2gJDrvT5qPxYq5cDvYRbEjzP7glvC86dnCEW2M6u8SsJ0KBC6lLm17VD%2BE%2BWgWv5UPqbKeYkstLP9lt5XWQgpkKdd63gw2qyyvWUP%2FruUNQYe3mbgp%2FGP%2BaAHd5bjbnd0EajjfQMl2gGOwyBrjn4jhb0I797amP&X-Amz-Signature=96176f1934fcf2497988cf0c29a8d1c4de2d663b8fe3eaff6aa6b92605fc77e0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EQSP3UM%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T003952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIFFjt%2FHgOdFhDEfIXJZ6JRPlxJq7pJ5CF5XC3fhK2sq3AiBp6irNVUtS2Xyl%2BZ17ED%2FnfNI%2BVIwHfknGDLVmnPH%2B9CqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FjIPPD%2BV0bYraWDlKtwDuXcls%2BT1BK3Z0qK3Z1D2GO6%2BO50tIlvQD06UQygv4OWK04qo6hI%2Bo3sG9rW%2FOOBdXf2PfWblrOUzusNoAY56ELV0olAzPO8rJvrbtURFnHVvJaQP36CXKrtHUJWlQHhZkQuFVMQO3OaBcvtfJ%2BqDpd%2B0zNkn2g3QtzDXfgEAAySJuH81u3jfyTvUwfVfA6J7sa3u1uUYTRdmKkcmV0RhfDmOtjn3UKtDO12%2BRdn%2FTE4mt8y%2B08gPdaJdl8Hiep0K%2BBbDLEnkSqb5glg2NSP20kdpkVTLlAm3hOj3saOizWIo%2F4Bno58XcVA7eeYqu%2FyAt2tD%2FF%2BeE6zCRokOQYpQz9ddJiEHVR%2ByE8rO6o13%2BMsIT76EO3Vjq0a1IBR6Z1Ir4mNObH5mulJ2xjsRLNlhymTAnBuSYixQ9ReP39NMd%2F6mVsGYMiIASI9lAZZmgF2f5xbRYDg%2Bk6YKsloIGjey2RaRNIMRtvQeQMRkszvBQoG07ZYFSooHI02a6NWmzfA%2FY3yh8CKKVhusrRDBZ%2FF8Ai%2FU2NzW48Cod5xWohvw43lUo9EP%2B4U4v%2B5B%2BdY2UJ0Ddff5OMiTH75s3P1%2BR5YqqSkeIw6pzfh%2Fq0vvw9Qz2ASULTxe00pAUqToMegw1riOvgY6pgEvWyM0OZYfprIuTaeuuRW84xnLS%2BOmo0gwkcmCmFwjPh8%2F1iTFEZ5f5nJpTyRBqVeo%2F1IsoGpV7juc3TredvEWuc6zEUgn%2F4ZvAOh6AIpdsq9E4DaxFXT1n7weVs7vm0BDWB4OvpmHwUdY0UX%2Fhl2YY79i6V3dBPoguAlWk1CmTCtIaa4i%2BCwnjo24kVkQemXEb8jP%2BbrRRPedYKaL5Vy6MQL2OiIz&X-Amz-Signature=0d5c4006812b34bd8beedca80eab635df93d2e288506f5a3a98aee3de7fc3f86&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
