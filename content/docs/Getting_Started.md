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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7IYUHLS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEski%2FjUQNBaeBZBczjdPMHujkTw0hMsdLYIWYD6Xq%2BVAiAo3lobl4pkAWIzy10S4Uyd8aZPElGBzqruSQOt86c%2FZCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMXVUAlS7gI%2FACKQjKtwD01GEnjYcGBiwTmggD8yMEVltuS0ipDSj6llaLkncNLMcGTwUom1imWYknF5CUVO487MYwokN2Ni6bI6jJ8AVIZgKdgiORvz%2FKj4Tr%2FIgn2EWQVPnlMblY8FJ6BLiRCAlMvqWDBhKpA2dqrKerQ7cchfQezPXzgd%2BIe1oYxga5xNgOxMIXvEhv3PIXXzR1bPf%2BfWOf6erNoYtjZpt5g0oYC9RMti%2FgfJkbrZtoFr0h1ygxHpxYUpgceJebooKKtvkhnNufKIqdiV8rqMwFuKiMIOmsJlp3MF%2F3f3380UvE8un56g156FI9NaLvA2MxoWfcBMHmYqq7FuOVibDceME%2F7RYioMd6jrceX1Xap0QxBPx%2BexdpXpFD%2BWwnqHZsZ2BtSVYLZtkmvDEpXu8%2F9lDi08EA%2F4z5Q8L72f80aCyltzMzaul4RQb1p0JOQCW3sBQCLAGO6bwR7wkBJ%2BPXGmzCsqmgRj0zQ%2B%2BHjAjKUxrmDp3jU1s3bIEig%2Bgemwq%2F84oAY%2Fwojr3qOG7shsjSrP37womlRNQrULn79xcG9sPxr8chdTK21FaT5Ebdewo5laC3qV3wr3lxBsK6zEcklq9mIUFxODUwmZhRONRsnbBuFreFC14VbzeTpBH988wndqmxAY6pgFiketup%2BmY0Gs7jzILts5%2FbCPINPp7KEL8Bl9rXyHKcG01d%2BEZpqWSqY6iVwpPFGfJxGuO0r6iDbto9RtwimpqIrwQCBePni6JOHeiYA9s7wwpMAxoIAHNsekxC%2FHFf%2FWA8%2BiZ%2BOyFZ5Kv3MyvK67Ok3r0a5YX3phla4rVPQGmDiEH4w010HszmukUWO27FVsUyHwYXrbBkjCX%2B4Eg4663jizXkv15&X-Amz-Signature=50c911870bbbbbf4958dc9a0d8f75b5cfdf1945e1486f3f0fde8eabd47133f1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7IYUHLS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEski%2FjUQNBaeBZBczjdPMHujkTw0hMsdLYIWYD6Xq%2BVAiAo3lobl4pkAWIzy10S4Uyd8aZPElGBzqruSQOt86c%2FZCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMXVUAlS7gI%2FACKQjKtwD01GEnjYcGBiwTmggD8yMEVltuS0ipDSj6llaLkncNLMcGTwUom1imWYknF5CUVO487MYwokN2Ni6bI6jJ8AVIZgKdgiORvz%2FKj4Tr%2FIgn2EWQVPnlMblY8FJ6BLiRCAlMvqWDBhKpA2dqrKerQ7cchfQezPXzgd%2BIe1oYxga5xNgOxMIXvEhv3PIXXzR1bPf%2BfWOf6erNoYtjZpt5g0oYC9RMti%2FgfJkbrZtoFr0h1ygxHpxYUpgceJebooKKtvkhnNufKIqdiV8rqMwFuKiMIOmsJlp3MF%2F3f3380UvE8un56g156FI9NaLvA2MxoWfcBMHmYqq7FuOVibDceME%2F7RYioMd6jrceX1Xap0QxBPx%2BexdpXpFD%2BWwnqHZsZ2BtSVYLZtkmvDEpXu8%2F9lDi08EA%2F4z5Q8L72f80aCyltzMzaul4RQb1p0JOQCW3sBQCLAGO6bwR7wkBJ%2BPXGmzCsqmgRj0zQ%2B%2BHjAjKUxrmDp3jU1s3bIEig%2Bgemwq%2F84oAY%2Fwojr3qOG7shsjSrP37womlRNQrULn79xcG9sPxr8chdTK21FaT5Ebdewo5laC3qV3wr3lxBsK6zEcklq9mIUFxODUwmZhRONRsnbBuFreFC14VbzeTpBH988wndqmxAY6pgFiketup%2BmY0Gs7jzILts5%2FbCPINPp7KEL8Bl9rXyHKcG01d%2BEZpqWSqY6iVwpPFGfJxGuO0r6iDbto9RtwimpqIrwQCBePni6JOHeiYA9s7wwpMAxoIAHNsekxC%2FHFf%2FWA8%2BiZ%2BOyFZ5Kv3MyvK67Ok3r0a5YX3phla4rVPQGmDiEH4w010HszmukUWO27FVsUyHwYXrbBkjCX%2B4Eg4663jizXkv15&X-Amz-Signature=e5046df8e4a84597baac23e29b89638e9715d319028bbef138c28d9c91555aa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7IYUHLS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEski%2FjUQNBaeBZBczjdPMHujkTw0hMsdLYIWYD6Xq%2BVAiAo3lobl4pkAWIzy10S4Uyd8aZPElGBzqruSQOt86c%2FZCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMXVUAlS7gI%2FACKQjKtwD01GEnjYcGBiwTmggD8yMEVltuS0ipDSj6llaLkncNLMcGTwUom1imWYknF5CUVO487MYwokN2Ni6bI6jJ8AVIZgKdgiORvz%2FKj4Tr%2FIgn2EWQVPnlMblY8FJ6BLiRCAlMvqWDBhKpA2dqrKerQ7cchfQezPXzgd%2BIe1oYxga5xNgOxMIXvEhv3PIXXzR1bPf%2BfWOf6erNoYtjZpt5g0oYC9RMti%2FgfJkbrZtoFr0h1ygxHpxYUpgceJebooKKtvkhnNufKIqdiV8rqMwFuKiMIOmsJlp3MF%2F3f3380UvE8un56g156FI9NaLvA2MxoWfcBMHmYqq7FuOVibDceME%2F7RYioMd6jrceX1Xap0QxBPx%2BexdpXpFD%2BWwnqHZsZ2BtSVYLZtkmvDEpXu8%2F9lDi08EA%2F4z5Q8L72f80aCyltzMzaul4RQb1p0JOQCW3sBQCLAGO6bwR7wkBJ%2BPXGmzCsqmgRj0zQ%2B%2BHjAjKUxrmDp3jU1s3bIEig%2Bgemwq%2F84oAY%2Fwojr3qOG7shsjSrP37womlRNQrULn79xcG9sPxr8chdTK21FaT5Ebdewo5laC3qV3wr3lxBsK6zEcklq9mIUFxODUwmZhRONRsnbBuFreFC14VbzeTpBH988wndqmxAY6pgFiketup%2BmY0Gs7jzILts5%2FbCPINPp7KEL8Bl9rXyHKcG01d%2BEZpqWSqY6iVwpPFGfJxGuO0r6iDbto9RtwimpqIrwQCBePni6JOHeiYA9s7wwpMAxoIAHNsekxC%2FHFf%2FWA8%2BiZ%2BOyFZ5Kv3MyvK67Ok3r0a5YX3phla4rVPQGmDiEH4w010HszmukUWO27FVsUyHwYXrbBkjCX%2B4Eg4663jizXkv15&X-Amz-Signature=5f2051767c7c188af843e4f12b1756ccc500a3dd080f90188ffcdac5777e50b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCQEEDFN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIASMXHLRClK%2F0dCdIS6CwIFZKiqU7pcY66WT6fkN25XKAiBZ2lxWJovBdbsGjPZi51kDkAhWB7Uf3S6bnGYejx7ZnSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyEQZS6RX58VCu60AKtwDOLLBN5YvxbGj2l2TW15b11p7haWPWtrfSe2VgLsGvQIixzseDoroRvHt2SrXEgrRUnYIDFL5sAuyBvgiFcGyIjNRfMvzXNirK12HqVNaQs8T1XGlvLz8pCaKNEL%2BYWPqbPRwTfEsAbC22zRihp7H9olElRtf1uMPuXPUfXpSku031%2FBJw7jxsby7F6BWygUDOLpbDxo8P2qoWBeVHXP2iyXO%2FT1o3JG7mfsorzamLqzS%2FTuAHfhGMQJG1jOmup7nJI5juakWX2HpUlCYn7IH3I2ENK20BudcoMYhBDpLUMp6Lbeene2h94%2FexYyzARz3DPuld9KSzY%2BDVj2fo83aSrlRgiURUFTbShCMXry41WWlXGIcKbpb5gdk6poaAYZ71R8RnzNKmdsLROLp3dKmf7%2F3NAB8jXXp%2BDvq%2FAuQ9cYRe5rjUFiFRmHo%2ByJ82KKUm7SemSa5QfXCQnhLEkOGp2jWIwovd5pI9ijrncVh9H%2BWI64G%2BzIvBsEmLBP664vwAbUPIhcirm7NiZhMt68DwJrVYDbqKHLBFn6NF%2FVSzatHMlDBeDW7Rd9mYy1GxskVO3cS8990TSBcK%2BmGJhvFPFm29b202mMi8R7vEFliDvV8O8JLJ3lVGlNJ5wgwltqmxAY6pgHK7hW322gzhdiEoe3Brozz5CWk2%2BHBbTuE3ANU59fMuoH%2F4Y%2FM%2FdYKpmOc0eopdbIwRRbnRwYPdeA0NiwsX0R%2F5J7xJOxPC1UitZ8SIqu49A%2FNAgU0m3x1R3B3jL4aZAB65C1ye%2BS7DMlnlvozjXFhY3Mg9%2FfIGnCKzQ%2Bt6AqOeQ975Z9j9H9kU4Bz0OHwG0%2FmlQ416kODmyvvvT87HQvs2iyHtDUz&X-Amz-Signature=1ea095eddca7329f246adb1968ac22d937cfc7fa4e4e67bc5be27e619d71b1f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBVQSEON%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoHgEwJLZ33lHW9K5zWMAVNH8aKR0XMWB5ehrn1321gAiEA%2BE8VMNlfNOOR%2BvoBZf%2BGCLv7XwjkyhZDWUNznxTHFuQqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDML0y0ghms2sAcZOvircA%2B%2FLBATu7dRL6GuS2PDvl2EwEAS%2FrqHivFfxUFxRYnNFdIcGSqcH%2FXqAyuVqq1KrUuhl7TppeAE88769r%2FDYRzU80b1MIN6c9xvNPOJHWXjsXPIjZ4Z3615I12G0jnWqNS1e49GSp2xD2RB2QVN9xfVJ2Qhfjh0hhWSUqSb22pus%2Bbp3uMDLmrDS2e2RZqn2u%2FEqXEAJyaqCAweWzkB5hedSZ%2BWrgc2JJOoyzJSNuAS0n9WjcwsuNsFQF55xYxTOUpHkeqwmFM9iLiAOl8QivkXCaZy2caA6I8f2qB6R99q6WNZ%2Ff8l2wi2dgqsMP9NiPYusfeiY7fM9%2Fci1Qg4ob1LIHGwUlWdDJVC5Z56coMif8B9koiKdNI71HNWom%2BAXawso4%2FY1KlVXLW17Wo6lM%2Fm9N0Udx5RzbIxVx9yhX4Pq7i2%2FlZ2flx72pEOQZTjXJFCNEwhMyUOz%2F%2BKYm5itRRweVXBfOAGI6AyQ67PEvCP49NoznnkRD2EmOzJ2Dbm%2FzGUAWWZxGm4hGSZ1QvpRKC8tr%2F3r%2FZVbBNGom62WRVy7IP8Zi%2FqE3L6vkJCpRNkD6dSjQWn31YKsurNEs95ailDjJK48Eslz0JDNtHNA17cFR4pBK2J9b20%2FavmrML7apsQGOqUBRiayKpo0%2Fb6qUkowNtl%2FAXQIXmAM4Iy%2FzrxPFNPZb74%2BKzceqYbVDmNcYNqV2Rya%2FEdjxMqMkQzHx4RhfpRqh5eWosR0lelsW2GS3TamoRlEvsHH0k4h1FwDmmdpws8IH3H3As7PzbmwGNVwS3V2ewx8aVz5gBJMu8ilTlt4IzuqKyjCLIc%2Fnadp69Tmx19OmOVKNOfLzRuqZ5Vx6it%2B39zFmAOK&X-Amz-Signature=e50784398bac5d924e7878d900f54aed93cbc346da8218f2132ccb59b8938a1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7IYUHLS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEski%2FjUQNBaeBZBczjdPMHujkTw0hMsdLYIWYD6Xq%2BVAiAo3lobl4pkAWIzy10S4Uyd8aZPElGBzqruSQOt86c%2FZCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMXVUAlS7gI%2FACKQjKtwD01GEnjYcGBiwTmggD8yMEVltuS0ipDSj6llaLkncNLMcGTwUom1imWYknF5CUVO487MYwokN2Ni6bI6jJ8AVIZgKdgiORvz%2FKj4Tr%2FIgn2EWQVPnlMblY8FJ6BLiRCAlMvqWDBhKpA2dqrKerQ7cchfQezPXzgd%2BIe1oYxga5xNgOxMIXvEhv3PIXXzR1bPf%2BfWOf6erNoYtjZpt5g0oYC9RMti%2FgfJkbrZtoFr0h1ygxHpxYUpgceJebooKKtvkhnNufKIqdiV8rqMwFuKiMIOmsJlp3MF%2F3f3380UvE8un56g156FI9NaLvA2MxoWfcBMHmYqq7FuOVibDceME%2F7RYioMd6jrceX1Xap0QxBPx%2BexdpXpFD%2BWwnqHZsZ2BtSVYLZtkmvDEpXu8%2F9lDi08EA%2F4z5Q8L72f80aCyltzMzaul4RQb1p0JOQCW3sBQCLAGO6bwR7wkBJ%2BPXGmzCsqmgRj0zQ%2B%2BHjAjKUxrmDp3jU1s3bIEig%2Bgemwq%2F84oAY%2Fwojr3qOG7shsjSrP37womlRNQrULn79xcG9sPxr8chdTK21FaT5Ebdewo5laC3qV3wr3lxBsK6zEcklq9mIUFxODUwmZhRONRsnbBuFreFC14VbzeTpBH988wndqmxAY6pgFiketup%2BmY0Gs7jzILts5%2FbCPINPp7KEL8Bl9rXyHKcG01d%2BEZpqWSqY6iVwpPFGfJxGuO0r6iDbto9RtwimpqIrwQCBePni6JOHeiYA9s7wwpMAxoIAHNsekxC%2FHFf%2FWA8%2BiZ%2BOyFZ5Kv3MyvK67Ok3r0a5YX3phla4rVPQGmDiEH4w010HszmukUWO27FVsUyHwYXrbBkjCX%2B4Eg4663jizXkv15&X-Amz-Signature=62ffc711570305a628828372c07063e169cd2c55bc87e0f3714683bac62f1b10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
