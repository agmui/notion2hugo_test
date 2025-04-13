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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBIFB5MS%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDllpBYgJRlCrrpcU8izeAloalN3%2BonBKfCR%2Bx4BMxUXAIgChvpqCI5j57f2spBhnGwH5cV9OVyCBbAK1mW80O3TEMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3VgbrS2%2BTX94FRjSrcA7c2tD%2F%2FjeU7Q8l0zHmpFA1r%2B4qC8G%2B%2BmEJIThvvwF4KSLrLZuKYgcUaLjpiB5r%2BtDY3VcuTreS0CqmvyJ%2FIEZMTYgxkV5t9fmv2ymPgiNPacvlgisNH%2BKMQO6kto8c5rcDsxEAhp89FY5fvjXFoJlIUyInKcM8N7sGCsKkyEm62cEIloFFOJNKTsBZFEQlSR5LLenNN5fMLhc3oL7lhB5Ar2RcJHyV2%2Bk51ospq41Dwhr%2BuSLVK6BzIPTS3%2BmzieIflDYxnyx%2B65oBATW2S68k8mxgtMdH05%2FGMUXO3ANkFgpo3FrcFAbBMn7kr7FZv9VwzcJYZI3uBBgFYB2EGEim1YGTnwqyWaLDa7hkC4WqXU9M33ejA%2BbfeWxhmkkq%2FvKK1GWeUdp8M7adpuZwxwrG0GWusTm4ybjRhDWEwsX47lzWv%2FDu738p6RWA7a2%2FHt3IAu1fgoa2fRMSVGINdpAYP9n2kVHjyLApFMQsnKACOQR5nKkChMXGQJbOqk0UZOrmhbMWbpzKYo%2BsdZ%2FZXksTCW2f%2BBWc8zQdK9LLa%2BIzzTr43UpLlGNU79FDZ%2BI%2BSXdvqVrE93WPyyrEG%2BT25ZjiL3nv8K7%2BhceAKZ5LBkicJgiezf2rcwluirDWNMMfh778GOqUB2hTXhmey8abOYqZomzZYOySYVeCoPYYl78xdtXF7DQljTLPJbh24nd9cMX1Kuk9QsZaSbg7tig8DnKmb7A3O6PtvCxMghdosdINrI11pwiJyk%2F1q8lp5v8QaY05277GC3RLzbnz6CeqfTYlu5oXw%2FNNuQLOAf2YD7Yk9QdjFkMBqYlzFsh8uDKRl3wSzIFqadoxysXwYwfN5I2JcwiHlYGSgD5n7&X-Amz-Signature=40d77a5aef49303aa9726650a3ee002fa78436d88bda5d44264c611bc21749ef&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBIFB5MS%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDllpBYgJRlCrrpcU8izeAloalN3%2BonBKfCR%2Bx4BMxUXAIgChvpqCI5j57f2spBhnGwH5cV9OVyCBbAK1mW80O3TEMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3VgbrS2%2BTX94FRjSrcA7c2tD%2F%2FjeU7Q8l0zHmpFA1r%2B4qC8G%2B%2BmEJIThvvwF4KSLrLZuKYgcUaLjpiB5r%2BtDY3VcuTreS0CqmvyJ%2FIEZMTYgxkV5t9fmv2ymPgiNPacvlgisNH%2BKMQO6kto8c5rcDsxEAhp89FY5fvjXFoJlIUyInKcM8N7sGCsKkyEm62cEIloFFOJNKTsBZFEQlSR5LLenNN5fMLhc3oL7lhB5Ar2RcJHyV2%2Bk51ospq41Dwhr%2BuSLVK6BzIPTS3%2BmzieIflDYxnyx%2B65oBATW2S68k8mxgtMdH05%2FGMUXO3ANkFgpo3FrcFAbBMn7kr7FZv9VwzcJYZI3uBBgFYB2EGEim1YGTnwqyWaLDa7hkC4WqXU9M33ejA%2BbfeWxhmkkq%2FvKK1GWeUdp8M7adpuZwxwrG0GWusTm4ybjRhDWEwsX47lzWv%2FDu738p6RWA7a2%2FHt3IAu1fgoa2fRMSVGINdpAYP9n2kVHjyLApFMQsnKACOQR5nKkChMXGQJbOqk0UZOrmhbMWbpzKYo%2BsdZ%2FZXksTCW2f%2BBWc8zQdK9LLa%2BIzzTr43UpLlGNU79FDZ%2BI%2BSXdvqVrE93WPyyrEG%2BT25ZjiL3nv8K7%2BhceAKZ5LBkicJgiezf2rcwluirDWNMMfh778GOqUB2hTXhmey8abOYqZomzZYOySYVeCoPYYl78xdtXF7DQljTLPJbh24nd9cMX1Kuk9QsZaSbg7tig8DnKmb7A3O6PtvCxMghdosdINrI11pwiJyk%2F1q8lp5v8QaY05277GC3RLzbnz6CeqfTYlu5oXw%2FNNuQLOAf2YD7Yk9QdjFkMBqYlzFsh8uDKRl3wSzIFqadoxysXwYwfN5I2JcwiHlYGSgD5n7&X-Amz-Signature=1002f3a7f47c30db4ea9ea9338d7003f13e6b8e765c5c18118d2267b435af922&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKGRBTCG%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCNHLegfTDfPh67e68VSCq0ZAiUagXbaUCrcVOPMnUQTQIgaTfFnzkqLN%2BWGaxdT5CfAG13dRBR4YhC%2B10EZw1ioLIqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgVwr4FbGi%2BqRRuvSrcAyXsBA9gHDeKdoqvsENLZLI%2BkA8UnarNYbBMJwCJAMf9mWPs4WvNJ%2FWN%2BaZsd%2F0TwpldMWrytL8BkjWx2YLt3bO%2BQProMStgeiVrl4%2F6Q3fglPhzdiZPAZY1Sjv%2B9IhBSetSuTp1lFF9g8mWv9x8FZ9vkHJA%2BLJ15uy4eYtILLbqfWM34p3x2oJcAe000qoKcz2RE%2BkLBjEAL1tm3Z5fOBoM%2BeMKDsiyh8OpyD1c6tilvPKh9n0fTdcf8%2FBBpoRc3NaIdhvykrdRrs0Yw81vHvsjYUbO21tc%2FJDxqU6WPxzOSO6QsB7BdBtkGmnIlT%2FHdLdZCk%2BeVmJn0LpTyeSnFf4S5OFuby0rrSVcNiX7CzRQiWEs6w4y4tTTAy4oUQvNwG38uGk4E8n7Wuss%2BCW%2FpW2Imrsv1blBAjSmnSuhJwaITduwKhUMRZyglAgsaaKavTcHveNgeGXoks6f4gJNsnKEbNEAIGHHD6vTnR0ewpkaesKSMOJnRg6e5Dn4QGbtTjXnVV8XEfO2OGxv4YSTFvhC792IWbUmDBUlI5Sc9eA5JYoOg4PGbOs3BD5mnvTMK6LvtJK5z%2Bq%2F2gQSXfoaDuBTmB18BGnBxhf%2B55UsGVcUVNAJ%2BYqLBGJkHOiAMObe778GOqUB2XahYzNzfxQxcsth5zXuTFp5KPaaRKdRGRwXQlas1bCkdPxl92hrwHwppTmQrvq4xX31DjVo1ZKW%2F5651RuMpN24FnV3D57vsDpyTCaQqWfgq5T7hAiSFJdzEGVXjBS4Qy1UUR8kE70oHFZrXJnpU%2FYRbf%2BCkIhaV%2FyX5BuhdNnjL0KNBlsRQHJkw7i9eDa8ddXsso9qhGo2lPzEmWyraanUp8ve&X-Amz-Signature=d5ed74e36e14eb045b1e64374ec57fef1a6209e2d91247b1f96a5e8d8de28327&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EEQ4QVH%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCICjT%2Fq6M%2BExTD7ibYvUGUMmlzlojgqLd2S5Tw1%2BYX1vmAiEAnL4bBnclb1DOX40xwgQACMoH8sPs6J8L7utCXYlly4gqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWCZzVcikHyOsYosSrcA2iBxYJtTW6jrsOKi0iiZwv2EikVW8jqLlLvxBnHYZpA%2B5DipjZcU7UkFahjYudfCWUJp%2F%2BaAJg20tERxsz0Qbtfmq946bP9diyQDK2Q3iKfjZPR11UzOfAmjAJOJ6M6vVatjZFmnzbHE1%2B0lGPL1LZHtp4g4OzeH6vCRRSHcAIAkE54Gs794nEaDefVGB62t%2Fbu4pxi1iK67oYOvL2VI3faxjo8Mynmf5SP9nuEJMBobOsN5Nwagpfx%2BUq360ft9QdRUNet9XgiYOz45lKT6hLA7pfKE9ASEL50whrzShDm3DOPHFnPyg7WTv6Mtke6oIVhLinFXrT5WStDVLb76eXSeL3GIJx64%2B%2FPtTrEB%2FyCEQUnNRFWHDHDNsp5H068bT559h1%2BV1PWDVCB1vQ6hmbJP9V%2B4%2FJdQ8QP8gCLV%2BJlW09nOGtR50EKPBzUZlYyRlKx%2Bm1zTZ5azBA%2BSkqO82%2BYvEYVNEpQH4oKdYpLKc8x2E9nZBw4YmbouYKZDOT7F7w%2B6diUkwrkPE5anMtnxHdiJSXUpi9pcd9zRdWtAphCDo3rVNh358mIu7ap6H1ipIGEwPABgczRH7SpO2VpI06Zc0sncHXhOoWqzlftR15kq8KVSEnYPjOKmZSiMMvi778GOqUBikbdlplUPinqMQa2yakdj2updc3jXz5h5R%2Ftw%2BK4xLH4Fg%2Fzg3RrYkOffLc7tWgOFfsJecyIPiaKSUy3ixdIb38IsDzXaNM7z2zwk1tzq9jUJO6zZtJsSqXc7vOGOil6NlafjO9cP6Kvzp0U0n6FfSpsJBDK2VKB8ehfGuX5CoKH%2B53pZRF7O%2Fos8WaanI4zpUkRszfeNWxJ1E%2FnMpvMI1YBzwaO&X-Amz-Signature=43da50623e3208ee4bf3102f40b306fcbc807d7d70173748a5263076581900a4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBIFB5MS%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDllpBYgJRlCrrpcU8izeAloalN3%2BonBKfCR%2Bx4BMxUXAIgChvpqCI5j57f2spBhnGwH5cV9OVyCBbAK1mW80O3TEMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3VgbrS2%2BTX94FRjSrcA7c2tD%2F%2FjeU7Q8l0zHmpFA1r%2B4qC8G%2B%2BmEJIThvvwF4KSLrLZuKYgcUaLjpiB5r%2BtDY3VcuTreS0CqmvyJ%2FIEZMTYgxkV5t9fmv2ymPgiNPacvlgisNH%2BKMQO6kto8c5rcDsxEAhp89FY5fvjXFoJlIUyInKcM8N7sGCsKkyEm62cEIloFFOJNKTsBZFEQlSR5LLenNN5fMLhc3oL7lhB5Ar2RcJHyV2%2Bk51ospq41Dwhr%2BuSLVK6BzIPTS3%2BmzieIflDYxnyx%2B65oBATW2S68k8mxgtMdH05%2FGMUXO3ANkFgpo3FrcFAbBMn7kr7FZv9VwzcJYZI3uBBgFYB2EGEim1YGTnwqyWaLDa7hkC4WqXU9M33ejA%2BbfeWxhmkkq%2FvKK1GWeUdp8M7adpuZwxwrG0GWusTm4ybjRhDWEwsX47lzWv%2FDu738p6RWA7a2%2FHt3IAu1fgoa2fRMSVGINdpAYP9n2kVHjyLApFMQsnKACOQR5nKkChMXGQJbOqk0UZOrmhbMWbpzKYo%2BsdZ%2FZXksTCW2f%2BBWc8zQdK9LLa%2BIzzTr43UpLlGNU79FDZ%2BI%2BSXdvqVrE93WPyyrEG%2BT25ZjiL3nv8K7%2BhceAKZ5LBkicJgiezf2rcwluirDWNMMfh778GOqUB2hTXhmey8abOYqZomzZYOySYVeCoPYYl78xdtXF7DQljTLPJbh24nd9cMX1Kuk9QsZaSbg7tig8DnKmb7A3O6PtvCxMghdosdINrI11pwiJyk%2F1q8lp5v8QaY05277GC3RLzbnz6CeqfTYlu5oXw%2FNNuQLOAf2YD7Yk9QdjFkMBqYlzFsh8uDKRl3wSzIFqadoxysXwYwfN5I2JcwiHlYGSgD5n7&X-Amz-Signature=c8745e61ff9c1480074499c6b2dc363e9d088663b665c8acd94893434a7a5390&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
