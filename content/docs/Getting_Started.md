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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLY5ZIOY%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQguK2jUFpaBc%2BHUCMi08CfPQax3NjQFdIFHjY%2B4OlsAIgKd1WIHL6%2FCmEMLkBC1P1K3BG%2FwFPbb4OT8oWShfHOLIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDPxInZyW7%2Bs61ORBDircA6X1QsLzxCsxCjay24j%2BWGRAX0WlCxs4Io10WpKnCNEMR%2F%2BGj5fS0dYFa2om368AuXz3rmumnxBFxYzOSJmhMnKbo3J%2F%2FumI39uL%2BxogbexMOGWtsSsx6MFq16ES8CJlOBovksmiT%2B%2Bj%2FJcP32aleFDjkKXuqhdwJpGpq2%2FkF5YroAjGYKPKc3KWGH7ZmILH%2BjTRSBM1HJp3%2Fa7USwKJSmSqEGotONcFyYFl46wJ2%2FzcukVYsdbOp7zKXvfa%2BmDBAeiVuy49unlCpxkEPicqg9NNtoje2RB%2BzV%2Fw4SnYN9QqTWBAaTMrDW%2F9%2FzNV4wHtcTDxl41uuYCOBrHK9hX3LbLjQUYNYMUXe%2Bf2UDVvowE4bCeXoG0tuUt6z8pFR%2FOHGNFs2DglOVoVkj7rFKbD2hcDJuQfg1c1vlj9lMcqz41ehCnv8AhShqFF2OhpiZYEPWTa3bMNKNtc2sdLKJ7smlUoTkHXJctMaNf4h7qeTVKnABqe%2BBBlD8GWCHlqRrTLWvJD645BRXo%2FnE1sJmAshdjPE8M%2Bq2iKkXyzHZ1hLP6gWnNpac%2FDeXCIt%2BkNWgItEjWr%2Bj%2FVxIZp%2BpSEg%2F6y2qvSCrx7Qd4fZfGmuPSs5r98ZzR%2BMPNmwHRKDJoeMM%2FG78AGOqUBqy7plmf97ZNOihCdIIS5ajMpcWGG3f9QvQVlTud6A6ji6B4OX%2BX7k7ahU0csmYVE%2F8Hi7TEU8tZGiwTN%2FNOMJw%2FKHgFNldjgYPHKnxCtBaR61BiCIdK3oi2siuYMxBGek95FiGku8CH6KTIEohanqUQrKhUj%2BsUhEOV8HGZbu7VpNlgXFnKQ6GEh0FhNYkqSJ0Vh4d2Onv8jGwSzIqzsCBmNLAwt&X-Amz-Signature=b3b69dd0f936754b984a0087b3df5666e849970286a4012f5c6bc14237fd7669&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLY5ZIOY%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQguK2jUFpaBc%2BHUCMi08CfPQax3NjQFdIFHjY%2B4OlsAIgKd1WIHL6%2FCmEMLkBC1P1K3BG%2FwFPbb4OT8oWShfHOLIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDPxInZyW7%2Bs61ORBDircA6X1QsLzxCsxCjay24j%2BWGRAX0WlCxs4Io10WpKnCNEMR%2F%2BGj5fS0dYFa2om368AuXz3rmumnxBFxYzOSJmhMnKbo3J%2F%2FumI39uL%2BxogbexMOGWtsSsx6MFq16ES8CJlOBovksmiT%2B%2Bj%2FJcP32aleFDjkKXuqhdwJpGpq2%2FkF5YroAjGYKPKc3KWGH7ZmILH%2BjTRSBM1HJp3%2Fa7USwKJSmSqEGotONcFyYFl46wJ2%2FzcukVYsdbOp7zKXvfa%2BmDBAeiVuy49unlCpxkEPicqg9NNtoje2RB%2BzV%2Fw4SnYN9QqTWBAaTMrDW%2F9%2FzNV4wHtcTDxl41uuYCOBrHK9hX3LbLjQUYNYMUXe%2Bf2UDVvowE4bCeXoG0tuUt6z8pFR%2FOHGNFs2DglOVoVkj7rFKbD2hcDJuQfg1c1vlj9lMcqz41ehCnv8AhShqFF2OhpiZYEPWTa3bMNKNtc2sdLKJ7smlUoTkHXJctMaNf4h7qeTVKnABqe%2BBBlD8GWCHlqRrTLWvJD645BRXo%2FnE1sJmAshdjPE8M%2Bq2iKkXyzHZ1hLP6gWnNpac%2FDeXCIt%2BkNWgItEjWr%2Bj%2FVxIZp%2BpSEg%2F6y2qvSCrx7Qd4fZfGmuPSs5r98ZzR%2BMPNmwHRKDJoeMM%2FG78AGOqUBqy7plmf97ZNOihCdIIS5ajMpcWGG3f9QvQVlTud6A6ji6B4OX%2BX7k7ahU0csmYVE%2F8Hi7TEU8tZGiwTN%2FNOMJw%2FKHgFNldjgYPHKnxCtBaR61BiCIdK3oi2siuYMxBGek95FiGku8CH6KTIEohanqUQrKhUj%2BsUhEOV8HGZbu7VpNlgXFnKQ6GEh0FhNYkqSJ0Vh4d2Onv8jGwSzIqzsCBmNLAwt&X-Amz-Signature=11fc13fa6272a80bf801ab770479aed3fabf4781985e0a6bf46c306718b29663&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLY5ZIOY%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQguK2jUFpaBc%2BHUCMi08CfPQax3NjQFdIFHjY%2B4OlsAIgKd1WIHL6%2FCmEMLkBC1P1K3BG%2FwFPbb4OT8oWShfHOLIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDPxInZyW7%2Bs61ORBDircA6X1QsLzxCsxCjay24j%2BWGRAX0WlCxs4Io10WpKnCNEMR%2F%2BGj5fS0dYFa2om368AuXz3rmumnxBFxYzOSJmhMnKbo3J%2F%2FumI39uL%2BxogbexMOGWtsSsx6MFq16ES8CJlOBovksmiT%2B%2Bj%2FJcP32aleFDjkKXuqhdwJpGpq2%2FkF5YroAjGYKPKc3KWGH7ZmILH%2BjTRSBM1HJp3%2Fa7USwKJSmSqEGotONcFyYFl46wJ2%2FzcukVYsdbOp7zKXvfa%2BmDBAeiVuy49unlCpxkEPicqg9NNtoje2RB%2BzV%2Fw4SnYN9QqTWBAaTMrDW%2F9%2FzNV4wHtcTDxl41uuYCOBrHK9hX3LbLjQUYNYMUXe%2Bf2UDVvowE4bCeXoG0tuUt6z8pFR%2FOHGNFs2DglOVoVkj7rFKbD2hcDJuQfg1c1vlj9lMcqz41ehCnv8AhShqFF2OhpiZYEPWTa3bMNKNtc2sdLKJ7smlUoTkHXJctMaNf4h7qeTVKnABqe%2BBBlD8GWCHlqRrTLWvJD645BRXo%2FnE1sJmAshdjPE8M%2Bq2iKkXyzHZ1hLP6gWnNpac%2FDeXCIt%2BkNWgItEjWr%2Bj%2FVxIZp%2BpSEg%2F6y2qvSCrx7Qd4fZfGmuPSs5r98ZzR%2BMPNmwHRKDJoeMM%2FG78AGOqUBqy7plmf97ZNOihCdIIS5ajMpcWGG3f9QvQVlTud6A6ji6B4OX%2BX7k7ahU0csmYVE%2F8Hi7TEU8tZGiwTN%2FNOMJw%2FKHgFNldjgYPHKnxCtBaR61BiCIdK3oi2siuYMxBGek95FiGku8CH6KTIEohanqUQrKhUj%2BsUhEOV8HGZbu7VpNlgXFnKQ6GEh0FhNYkqSJ0Vh4d2Onv8jGwSzIqzsCBmNLAwt&X-Amz-Signature=f63444bee0d0c21411f57cd3d385dfa0ff5f320d01c789204a25eb4704bf01c6&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IIN3XLO%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbL%2Bd7qaHblKWpcOWQZZ1ZUZawSMoeED%2BtLiBi0IQ4vQIgHaW7iPZncVwS9Cbn4LEFY7v4zmcehzq4xK7SqG7KPagq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDMP4BHNPoRl3a%2FSa8ircA0iVsChcamBycdd2x5orJ2shZuSsVlZO3XdxO8GMUfX8X%2Fch31b%2Bz3wznNg56s1rC1j%2B9JSp5wVwkzyE1%2FbjekYTha0wd95526miboIEPTfq1fQR2gnt5XgOIvdxnw1QXXIBGmPcw9Qg94R89cpPuJp9tNSKP0JuucIxzNxodgVo90Lm3j6i30NPpRypCQ0lSxYzzKtbgF1h7CDhIYCSOZGvIp2rmxvmxAvN451DrJXz11Tlze3g%2BpiMtaNWj%2BjLNGLLLErUWOUR17WAaU9xyhtaWNy1b%2BGIGfIHn6aTBa%2Fkweih%2B3yqLhdfLm4g9EqEUVhiCLeVT%2FJOq%2F%2Beil1EyoH2SsnM2RjevCxPihf1uJ0TRPurwZkjn7Zk4GMISAseKsrYdZWU1oYLLo5BvVcQQhAMVNu%2BCEJPlusMHvPHocAMu%2FqDayF3AmF%2FwYFmHQ4Rb66uG4PyyECx68kBpKQNLf1ElQUABn8Qulxa2orU2p09p0PClxI2YElF2Q9%2B910%2ByD1Xr7EdyJ%2B1l39QPTN%2FccSPO6jmpfIo5OwABlVes50N6CNkPO%2FuRTTeziCkBCyeGbpwA56dMYfllBApbCatUWV29YO5vFBCFTFcoqk53POLlS7Hx3IgJKjOW5dsMNfG78AGOqUBXZ2gLfWxZs%2FE%2FgqxD8R3m0NSndmWj9hVQ3a%2F5GyjvJX8gq3z7ljmL7Ttb8HPont2vPZXKBYBWQ7F7jA8zvdqn7joBKTogkkJV8ya5cyK0X%2B1zk%2FpHAtQh%2BBbtuWyDRWWDdKHUu5fUbTh9u4%2B%2FPvNaBvznCtAdBfHwtnvqMRrqVSkivC2PMWB6XLKsgSnF8Lt1PnMiAP4lhz8oZrqdJLLhm0n87Tk&X-Amz-Signature=b42604dab03ff8414f7e3e9468f31623b23b7cbacef04f19c5abc892d9ff9f26&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHMVIOTY%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICprrA%2BCryg%2FZ6qtsABcs0InZ4xoKSigC96QsFjVmshZAiEAu8zwah5G7%2BHtUSw3731V1fgBNvIcvmYKzukp%2BCLpmQ0q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDOOeQWYw34%2FA7yeeGircA8WeENqOK%2FUaspQ%2FfqKvfPO8ZPFfhhKSV1%2B%2BKdKXoeRff1uQoQoLmUbWPV4hvxNSbBbUJSDohxStu4NIFfhbzV8PwtFv5dJQy5Zgi%2Bj3mDmK5IkJE6aVaq7Ne%2Bb6syPAwmgPC%2FOcdT%2F5f44cwaVVETVycW%2BccNH30eRc8CmDQvnMHn3cMSa%2FF6yb3PQpWrvrquSF59Sa%2BENFyRQ%2FbV6XMISP8hD7%2BRJaZJtZzURqZx3DPxkES%2BWrnGPzB8sX%2FG2Spa8sY90cdtvHx9CF3M0srFzVVFB%2FhyOqJ4R%2BBN4UKciPDpI13tFWZijfv6Ts3Ve%2BQUXLGWacsi4gKJ0c0Z7EPv%2FSZxeVsBAwiekkq4pcFJ2w4nHXtoNZQDaDAfBRC9t%2B%2FnqHqZ3kfrmH%2BsLun3mVZu5Uen9fOqwbN9834Xd%2BVHoB25mH%2F%2BW7jP%2BNLScLya%2Ba5apCccuZoaeXMufTji9BK0BvL5XWhNmfMY6KdjLfpBl2euYJ%2Bjceqc6mWKGOEiecNDKdi%2Fp9PNCf5GPsTD5UscleiqSkOrxZj0G8KDta%2BXQJFzoQ1RmVpMv6hvObuwEm9Zlo6A81RH92gckWuqn1jI7%2BqyBGfz8IkgvKVDjuq7%2FWQ3rSyX2k3%2FSEHjBmMM%2FG78AGOqUB2WZVNiVqej%2B4rd%2BJSM3tNt4rBQ7Bo9Ri5OSdlrO7q8hxM57y2hvdlreBhM6HaexKP0J1ub63zgf6y0OJqo%2FTstxBIIdIQK9jWuodbqvHlCoQNSA%2B4zQaCNSZQmcY7LxS%2F5Tmh6xUtfU9ITY5B3jO6b164Tz46z3Y3oUuNMjW6qHbMSszPlFLU2UOSHej4tj1toTVz1xXzS6VFt%2BsNzYGQLhNFW4w&X-Amz-Signature=d23c0fccdde92cc9981271298feb0f3776ab2b061cd7081adf6f1129f279c64f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLY5ZIOY%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQguK2jUFpaBc%2BHUCMi08CfPQax3NjQFdIFHjY%2B4OlsAIgKd1WIHL6%2FCmEMLkBC1P1K3BG%2FwFPbb4OT8oWShfHOLIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDPxInZyW7%2Bs61ORBDircA6X1QsLzxCsxCjay24j%2BWGRAX0WlCxs4Io10WpKnCNEMR%2F%2BGj5fS0dYFa2om368AuXz3rmumnxBFxYzOSJmhMnKbo3J%2F%2FumI39uL%2BxogbexMOGWtsSsx6MFq16ES8CJlOBovksmiT%2B%2Bj%2FJcP32aleFDjkKXuqhdwJpGpq2%2FkF5YroAjGYKPKc3KWGH7ZmILH%2BjTRSBM1HJp3%2Fa7USwKJSmSqEGotONcFyYFl46wJ2%2FzcukVYsdbOp7zKXvfa%2BmDBAeiVuy49unlCpxkEPicqg9NNtoje2RB%2BzV%2Fw4SnYN9QqTWBAaTMrDW%2F9%2FzNV4wHtcTDxl41uuYCOBrHK9hX3LbLjQUYNYMUXe%2Bf2UDVvowE4bCeXoG0tuUt6z8pFR%2FOHGNFs2DglOVoVkj7rFKbD2hcDJuQfg1c1vlj9lMcqz41ehCnv8AhShqFF2OhpiZYEPWTa3bMNKNtc2sdLKJ7smlUoTkHXJctMaNf4h7qeTVKnABqe%2BBBlD8GWCHlqRrTLWvJD645BRXo%2FnE1sJmAshdjPE8M%2Bq2iKkXyzHZ1hLP6gWnNpac%2FDeXCIt%2BkNWgItEjWr%2Bj%2FVxIZp%2BpSEg%2F6y2qvSCrx7Qd4fZfGmuPSs5r98ZzR%2BMPNmwHRKDJoeMM%2FG78AGOqUBqy7plmf97ZNOihCdIIS5ajMpcWGG3f9QvQVlTud6A6ji6B4OX%2BX7k7ahU0csmYVE%2F8Hi7TEU8tZGiwTN%2FNOMJw%2FKHgFNldjgYPHKnxCtBaR61BiCIdK3oi2siuYMxBGek95FiGku8CH6KTIEohanqUQrKhUj%2BsUhEOV8HGZbu7VpNlgXFnKQ6GEh0FhNYkqSJ0Vh4d2Onv8jGwSzIqzsCBmNLAwt&X-Amz-Signature=3b14bfd15c84e10d071b1850910a6fc2bff8617a940eb2cb9debdebe8bec0c83&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
