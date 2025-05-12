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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7IR2XF6%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCszqLmSfzqdG2Dct4EG96UDxbzd6eVYpm4O%2FQ9UOnQsQIgRg2ljEtBM005UOLT4j%2FgPvPbgHLUHRfJhtdDaHwp250qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMBZWmL%2FUirPpVV%2BCrcA2lXPT9oFxBY%2BpNbdvKYlKfmJWRulZYCqxYw9Elrpek1JXqWncsaubMmQQ82RxrrxlgJzQJ5rvd99D%2BYzbteDoEvTwkErzXACqi21qSZOQVNJLBwvXPlhPqiIbb%2BqukjxtEb4BS7%2BIvBj%2F3mnXXFYLIZa6rIYQ9WbCBmSkPLNK7jyijiyY%2Baf3%2F5R1Dgxx67LzCezj%2ByruYdQd3FA6EHoXyLcDS3S8Yq0YMCQMcFpfRsH7apOFPmFiXcOG%2BvhmFsYZn7iSrsVQSS31w%2F8QcnVrTFB88EuwnvXcBfc7mfh%2FFcgryx9sjwAn7WmWv8EsIpL7FeITy6XA6PiVk%2FKb5JdhtO19QJ1prg3Ktmc14BGFrMbC1zK6BU60QSSN3UbllRUXph7dF8e96DreOx4Rac7%2FQz2HcpcQQylC4yUKMWbVN3%2FrSnWzmPVSdfHtfguLcZWmh1RzGjxps%2BJcpt84G1ptH9iUt%2BLKUMu90Ql7NXpG%2BJg2ckbMTxyXheinmwApht8f1a3PxorkN0OEb5ZNl3jQ7MMVseG0l53rZntqth9v4t%2FjynhuoYFd9nw07dVnCLN59UUxniQ72LmeO3FI1W07M6j8x%2FDpWgwe3NUDF4mSuP1frbVjDtJnvy7bpjMPmBh8EGOqUBQ5EHHfchuBRYGmZ9AOZd5ZF9F8lUbiiv1MgjPgCJxntWoKEiabOV3Xv%2BXX6t6LQ0%2BvPBpzRZWjQHZaxkREGNKnvtdkDhuntAVgeU4AD15IoQEfVXzORI%2By7DuiYLABXbf%2FLyxOgGYNZYOd%2Fu74x1in4zz4GHdgAGlieYsPHYmqmbhgxLYMWZ4ZFu7ZyJ%2BalufcCm6Kk%2BwNfzmkwGNFAwbVM%2Fc7zu&X-Amz-Signature=ce93294cece8adb46f73bf0a0f2435475d5fc67ddf4eafcc93d048b2bdf955cb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7IR2XF6%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCszqLmSfzqdG2Dct4EG96UDxbzd6eVYpm4O%2FQ9UOnQsQIgRg2ljEtBM005UOLT4j%2FgPvPbgHLUHRfJhtdDaHwp250qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMBZWmL%2FUirPpVV%2BCrcA2lXPT9oFxBY%2BpNbdvKYlKfmJWRulZYCqxYw9Elrpek1JXqWncsaubMmQQ82RxrrxlgJzQJ5rvd99D%2BYzbteDoEvTwkErzXACqi21qSZOQVNJLBwvXPlhPqiIbb%2BqukjxtEb4BS7%2BIvBj%2F3mnXXFYLIZa6rIYQ9WbCBmSkPLNK7jyijiyY%2Baf3%2F5R1Dgxx67LzCezj%2ByruYdQd3FA6EHoXyLcDS3S8Yq0YMCQMcFpfRsH7apOFPmFiXcOG%2BvhmFsYZn7iSrsVQSS31w%2F8QcnVrTFB88EuwnvXcBfc7mfh%2FFcgryx9sjwAn7WmWv8EsIpL7FeITy6XA6PiVk%2FKb5JdhtO19QJ1prg3Ktmc14BGFrMbC1zK6BU60QSSN3UbllRUXph7dF8e96DreOx4Rac7%2FQz2HcpcQQylC4yUKMWbVN3%2FrSnWzmPVSdfHtfguLcZWmh1RzGjxps%2BJcpt84G1ptH9iUt%2BLKUMu90Ql7NXpG%2BJg2ckbMTxyXheinmwApht8f1a3PxorkN0OEb5ZNl3jQ7MMVseG0l53rZntqth9v4t%2FjynhuoYFd9nw07dVnCLN59UUxniQ72LmeO3FI1W07M6j8x%2FDpWgwe3NUDF4mSuP1frbVjDtJnvy7bpjMPmBh8EGOqUBQ5EHHfchuBRYGmZ9AOZd5ZF9F8lUbiiv1MgjPgCJxntWoKEiabOV3Xv%2BXX6t6LQ0%2BvPBpzRZWjQHZaxkREGNKnvtdkDhuntAVgeU4AD15IoQEfVXzORI%2By7DuiYLABXbf%2FLyxOgGYNZYOd%2Fu74x1in4zz4GHdgAGlieYsPHYmqmbhgxLYMWZ4ZFu7ZyJ%2BalufcCm6Kk%2BwNfzmkwGNFAwbVM%2Fc7zu&X-Amz-Signature=1c1fd94501e32366490185ae3681b767674ca0a200eb55b6a71ce728219ea8a9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7IR2XF6%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCszqLmSfzqdG2Dct4EG96UDxbzd6eVYpm4O%2FQ9UOnQsQIgRg2ljEtBM005UOLT4j%2FgPvPbgHLUHRfJhtdDaHwp250qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMBZWmL%2FUirPpVV%2BCrcA2lXPT9oFxBY%2BpNbdvKYlKfmJWRulZYCqxYw9Elrpek1JXqWncsaubMmQQ82RxrrxlgJzQJ5rvd99D%2BYzbteDoEvTwkErzXACqi21qSZOQVNJLBwvXPlhPqiIbb%2BqukjxtEb4BS7%2BIvBj%2F3mnXXFYLIZa6rIYQ9WbCBmSkPLNK7jyijiyY%2Baf3%2F5R1Dgxx67LzCezj%2ByruYdQd3FA6EHoXyLcDS3S8Yq0YMCQMcFpfRsH7apOFPmFiXcOG%2BvhmFsYZn7iSrsVQSS31w%2F8QcnVrTFB88EuwnvXcBfc7mfh%2FFcgryx9sjwAn7WmWv8EsIpL7FeITy6XA6PiVk%2FKb5JdhtO19QJ1prg3Ktmc14BGFrMbC1zK6BU60QSSN3UbllRUXph7dF8e96DreOx4Rac7%2FQz2HcpcQQylC4yUKMWbVN3%2FrSnWzmPVSdfHtfguLcZWmh1RzGjxps%2BJcpt84G1ptH9iUt%2BLKUMu90Ql7NXpG%2BJg2ckbMTxyXheinmwApht8f1a3PxorkN0OEb5ZNl3jQ7MMVseG0l53rZntqth9v4t%2FjynhuoYFd9nw07dVnCLN59UUxniQ72LmeO3FI1W07M6j8x%2FDpWgwe3NUDF4mSuP1frbVjDtJnvy7bpjMPmBh8EGOqUBQ5EHHfchuBRYGmZ9AOZd5ZF9F8lUbiiv1MgjPgCJxntWoKEiabOV3Xv%2BXX6t6LQ0%2BvPBpzRZWjQHZaxkREGNKnvtdkDhuntAVgeU4AD15IoQEfVXzORI%2By7DuiYLABXbf%2FLyxOgGYNZYOd%2Fu74x1in4zz4GHdgAGlieYsPHYmqmbhgxLYMWZ4ZFu7ZyJ%2BalufcCm6Kk%2BwNfzmkwGNFAwbVM%2Fc7zu&X-Amz-Signature=d2564af4d119522997e16e47115e6c99eb66133867e3e16072c9f14ebff444bd&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE7Z4O43%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICF0QuMDD0vGNuBLeQAp5xF6sYnH25QAlnlSBhwAf3SFAiAz0tPqGnLMTo%2Bgpl%2BsGBdTdpFsovobCWSM0Kc0FfzDCSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk7%2F2Ru1nBUk4a7IxKtwD6YJwGVW0XDr1l3g8EN7TElr3oV9neiqCVfMjppd%2B25VnMMClIjDmnM4sZrvALmW8I8RiJo7KMKjWPZdEzhkUxZZZau7yCJ9JazGNT85P3gDqUgGjlpcAVegJZseQVXteUSgtC8aA6EBnTyYEz6Kph%2F3gWnJ1cr1Q5umRGtO95yYf99ho6HX2HTtRNfFFOxJO3qWGCMX%2B9wTX7gsdso1q8sqk5xH7MMaNFu%2B3Ciw2XEJw5v6hLnvCYQ%2F1EbpRuYSOM4I33AXuXokbutb92%2F%2FS8ffzrwACjMISlbZ%2Ff%2BQspOpiB1XLLYT9WIV6oKlEiZ2q9ia6qxG2k3Jq75xhTgQpwjJ1t2cR9z37PzYtMlSCeoW9IdzJ9PEGiyxs7dhD%2F%2F2wk2Zx2uQ40vfSnH9zsU1y8GAkzmHGC2Yb0N7qP86IHoaRiOUfXbccY04X3n47UMT6dlLKPCC4tvkFczNX2Q4Ovs1YOZpywBM7JqVB1FmkCQkuNrfCll8hAkbKUyKdeeZb5U976p%2BlbGS0yP%2B6jeeMGEaKkcWBOLXLNMTSP6tCDq52oKQtep4sM%2FDlEB4yGeY6F%2F15FtaZ1NiebuByJzMyayj95iS%2BT%2FJTKgrrNCbVb3DF3RZ%2FRSJbERNRCE0wlIKHwQY6pgHarQsZuQUGSj5Mvv7jhEWo%2BNyVGEVybTTvYjaHK7aIphLLd33PMcLOSFZYnnHe%2BAtm9laTc%2FaaXMwCQ1BopDtREJ3zwBnv3uthiz0HhyrXgr2839cQbN%2FIvnGgSHvacn1OA8W8T4WWKr22NeJ4RpXmI6ons9b0sNS0JrkkUf%2F4aBVwt1a4iU%2BreBQReqLnU7X836Uk%2BVzI8J091yrvog%2BIUSFoPYui&X-Amz-Signature=e609f1ecba3352ab94e1264acf4e8185ec5ddb3a16a74a14a8b341406cfe92bc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666SB4U4A%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIAo0gr3HqfmGUOp3Ghahm1W2HsNGqjKQaH%2Be%2BSrt%2FjGHAiApOvIw4z1E7fn%2F0l%2FUGj2JlkyyVAmmBozoXOzcJI6bYSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpmfBXafL%2BZGHbdgoKtwD%2F7399IlmqRPovejgIrfh2iC5Mibr0%2BWXBTu0Wmq89MD9ggj10x5s%2FbYo2WZmM22mZxAFDRgbJ4XrKmtFm%2BXFth3dE%2Fx%2F5BpY55JHZQ7H8CxGIIE%2FIyTw9Vj%2FogkC2ylQahjfs9RePbrT17mhFrf6ZFI4vdSedQKpL8UOzjIQUjVXmmgPwecUJM4w5xoseqMSGv%2Bmuvz8wozcgBR6zZHSLEGFwPQL5M0B0xip%2FyLdnQQ5px2b1MBoBCt4%2Bub5MWOQ8fMhs2l4ZHNqbFc5ofErZmUBSqSmge6w%2Flff%2FbiOQfHk%2FAB4zLt6sWdGrPOfn%2B4Iu6b6ljgCNiuukx7gWls%2FvJd1ZB1Dktq51HUdeBZqzMib21LVn3XMAJjR%2BmIVd1CwBRqv05%2Be2RRvpDoIHdU%2BtIRbClT81wbnAr4bqZ2avZbSfbZ62ig8uTo0MTKNo4wpj%2FaaNV9%2B2rsyDPcdt%2F3bfvHDXnVdFDaOx5K%2FkHUb%2BOC9lciJAEvoKOySpv6h4TvjTWDCSC0IIxin3DaHUiIW0Zph%2F1QxMZfHx6hc2geYvThXgbpsS7Eh3xkcm8MP7UM3CkyfPksoav0YlCaL%2BoaOJGPbkG1qVgxKg%2BwpMxYaSgFvKCRqLdO%2FEoFuIdAwoYKHwQY6pgGYeyblSOp1nv7WECN4KHW%2FediHfBLA%2BMvKN7lsKCWr%2BhL8mTHcfs%2BoTdugf5Wlal5mhDg8JepaYUMBDcwPk8s%2F%2F4qy9euq1VdMzY6RakfK5wda4yK6li4ZgPVpydSyZTiuJ7SlwCF4mVGWHVHBFnWev2WXCDsCicQBmY2NZPFoxamjLKL1Py0tl%2FJBdh06D2PkkzILX8tAbq5lqk3WhIhKTkFESe4Y&X-Amz-Signature=f9f089132dac91fee1042536ec8096a748ea4d77c03136ef59517366c8028e1d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7IR2XF6%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCszqLmSfzqdG2Dct4EG96UDxbzd6eVYpm4O%2FQ9UOnQsQIgRg2ljEtBM005UOLT4j%2FgPvPbgHLUHRfJhtdDaHwp250qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMBZWmL%2FUirPpVV%2BCrcA2lXPT9oFxBY%2BpNbdvKYlKfmJWRulZYCqxYw9Elrpek1JXqWncsaubMmQQ82RxrrxlgJzQJ5rvd99D%2BYzbteDoEvTwkErzXACqi21qSZOQVNJLBwvXPlhPqiIbb%2BqukjxtEb4BS7%2BIvBj%2F3mnXXFYLIZa6rIYQ9WbCBmSkPLNK7jyijiyY%2Baf3%2F5R1Dgxx67LzCezj%2ByruYdQd3FA6EHoXyLcDS3S8Yq0YMCQMcFpfRsH7apOFPmFiXcOG%2BvhmFsYZn7iSrsVQSS31w%2F8QcnVrTFB88EuwnvXcBfc7mfh%2FFcgryx9sjwAn7WmWv8EsIpL7FeITy6XA6PiVk%2FKb5JdhtO19QJ1prg3Ktmc14BGFrMbC1zK6BU60QSSN3UbllRUXph7dF8e96DreOx4Rac7%2FQz2HcpcQQylC4yUKMWbVN3%2FrSnWzmPVSdfHtfguLcZWmh1RzGjxps%2BJcpt84G1ptH9iUt%2BLKUMu90Ql7NXpG%2BJg2ckbMTxyXheinmwApht8f1a3PxorkN0OEb5ZNl3jQ7MMVseG0l53rZntqth9v4t%2FjynhuoYFd9nw07dVnCLN59UUxniQ72LmeO3FI1W07M6j8x%2FDpWgwe3NUDF4mSuP1frbVjDtJnvy7bpjMPmBh8EGOqUBQ5EHHfchuBRYGmZ9AOZd5ZF9F8lUbiiv1MgjPgCJxntWoKEiabOV3Xv%2BXX6t6LQ0%2BvPBpzRZWjQHZaxkREGNKnvtdkDhuntAVgeU4AD15IoQEfVXzORI%2By7DuiYLABXbf%2FLyxOgGYNZYOd%2Fu74x1in4zz4GHdgAGlieYsPHYmqmbhgxLYMWZ4ZFu7ZyJ%2BalufcCm6Kk%2BwNfzmkwGNFAwbVM%2Fc7zu&X-Amz-Signature=ecbadedbce8c8cadd78bdca71bde53de5c3295fa8ff9d98c9f89794a6973ddc6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
