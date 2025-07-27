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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z57IHI77%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCLuqRNEAybSJffqMo09UbgpFzxpFW%2Fg5XXYBuGRpTfmgIgGFKZU8%2BE%2BchYmyHYBunBSxEkRMJd8wIKe1tRJMEdaa8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLBU5pevVJ%2Fi6oEzKyrcA5UteNIUn715HyBBfHMYHiRq13NSnrLyYvStxL%2FiTgyM%2FkkwOCSs%2BdYZztSP%2F8Hru3iqTJNslpG5l1av%2Bn02Zwl5hV%2Fub1t4LS%2B%2B%2Bf%2FSo0lGHCO2Josjxy2daj80Q3C72qMCdrj%2FsLoVVBHOSpgFydRFXSljFcjB18LFCc28ZPX3IRu8hgDygP8dRLcBLpHzhALMgKDLvkQI%2Bmi8lVY6rioCZ55uElcLtsFPB%2Ft1AhPVI7%2FtKzHW4RzPBERZk6j1zcem7paBJxWB%2Fjw7KmtVKfn8U0JRK51h95WpMFv8x0o9Y7DntzlKpyZd5qTQlrBtPMqIq3tQMUk7LDNgud29BTaCqew2yW%2BP2oHdG02pF6WYBxP4tmrKolA7J4GF2hv9A2qDqOOwJ2wldItTvgZnjqEvu%2BzA5i0bOM9pVZ6mTLwlCJDjvzz6s2X2vQOLC3hUvkNXxAacfQJXgJprZM4aOJTySTlHP2PB6nCvZr5s0QOuTsPaxJuDXi8XLK6zRu9cc%2Fz3rcqOcWef6sU1SY7EIKlAnrWrplpX6pq5Yiv1aNMufC6bGT%2FVelVRl2QiDeYc41RrOo5lq25DaAUmKHOqiLuTokx%2B4RIi5wJkBcUM7aYvULZwUoEnJ1e2EW8nMJLgl8QGOqUBjtPvedbOHcYjL1ZW4D0hjtuO5lrdIxxmZni5jQ3C9t%2BABiV6U0FiaQxI0i1n7VYV1BJneBX7Em%2FMYQifsZt9tCRHNcKyDEt%2FdvebQ%2B6v%2BRfAob5iOBvCP1FkHpBID%2BycRZepme2zdM49cqdV6xbGPs%2BEQTBuMKEBGD42dn5eos6OCJSHluQFNGZIoe165%2Bb1EipdxGpNEJk4H9Tn%2FRcuBqwuWlrP&X-Amz-Signature=05551743d092cfd36cd1de78c9f2d27709546d5f9843a8e5ceb894be9e2e214a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z57IHI77%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCLuqRNEAybSJffqMo09UbgpFzxpFW%2Fg5XXYBuGRpTfmgIgGFKZU8%2BE%2BchYmyHYBunBSxEkRMJd8wIKe1tRJMEdaa8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLBU5pevVJ%2Fi6oEzKyrcA5UteNIUn715HyBBfHMYHiRq13NSnrLyYvStxL%2FiTgyM%2FkkwOCSs%2BdYZztSP%2F8Hru3iqTJNslpG5l1av%2Bn02Zwl5hV%2Fub1t4LS%2B%2B%2Bf%2FSo0lGHCO2Josjxy2daj80Q3C72qMCdrj%2FsLoVVBHOSpgFydRFXSljFcjB18LFCc28ZPX3IRu8hgDygP8dRLcBLpHzhALMgKDLvkQI%2Bmi8lVY6rioCZ55uElcLtsFPB%2Ft1AhPVI7%2FtKzHW4RzPBERZk6j1zcem7paBJxWB%2Fjw7KmtVKfn8U0JRK51h95WpMFv8x0o9Y7DntzlKpyZd5qTQlrBtPMqIq3tQMUk7LDNgud29BTaCqew2yW%2BP2oHdG02pF6WYBxP4tmrKolA7J4GF2hv9A2qDqOOwJ2wldItTvgZnjqEvu%2BzA5i0bOM9pVZ6mTLwlCJDjvzz6s2X2vQOLC3hUvkNXxAacfQJXgJprZM4aOJTySTlHP2PB6nCvZr5s0QOuTsPaxJuDXi8XLK6zRu9cc%2Fz3rcqOcWef6sU1SY7EIKlAnrWrplpX6pq5Yiv1aNMufC6bGT%2FVelVRl2QiDeYc41RrOo5lq25DaAUmKHOqiLuTokx%2B4RIi5wJkBcUM7aYvULZwUoEnJ1e2EW8nMJLgl8QGOqUBjtPvedbOHcYjL1ZW4D0hjtuO5lrdIxxmZni5jQ3C9t%2BABiV6U0FiaQxI0i1n7VYV1BJneBX7Em%2FMYQifsZt9tCRHNcKyDEt%2FdvebQ%2B6v%2BRfAob5iOBvCP1FkHpBID%2BycRZepme2zdM49cqdV6xbGPs%2BEQTBuMKEBGD42dn5eos6OCJSHluQFNGZIoe165%2Bb1EipdxGpNEJk4H9Tn%2FRcuBqwuWlrP&X-Amz-Signature=1252c60fe7ba8b8926dbe499547e7e20d15fed5134e82b521ed1a0f30514ffbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z57IHI77%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCLuqRNEAybSJffqMo09UbgpFzxpFW%2Fg5XXYBuGRpTfmgIgGFKZU8%2BE%2BchYmyHYBunBSxEkRMJd8wIKe1tRJMEdaa8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLBU5pevVJ%2Fi6oEzKyrcA5UteNIUn715HyBBfHMYHiRq13NSnrLyYvStxL%2FiTgyM%2FkkwOCSs%2BdYZztSP%2F8Hru3iqTJNslpG5l1av%2Bn02Zwl5hV%2Fub1t4LS%2B%2B%2Bf%2FSo0lGHCO2Josjxy2daj80Q3C72qMCdrj%2FsLoVVBHOSpgFydRFXSljFcjB18LFCc28ZPX3IRu8hgDygP8dRLcBLpHzhALMgKDLvkQI%2Bmi8lVY6rioCZ55uElcLtsFPB%2Ft1AhPVI7%2FtKzHW4RzPBERZk6j1zcem7paBJxWB%2Fjw7KmtVKfn8U0JRK51h95WpMFv8x0o9Y7DntzlKpyZd5qTQlrBtPMqIq3tQMUk7LDNgud29BTaCqew2yW%2BP2oHdG02pF6WYBxP4tmrKolA7J4GF2hv9A2qDqOOwJ2wldItTvgZnjqEvu%2BzA5i0bOM9pVZ6mTLwlCJDjvzz6s2X2vQOLC3hUvkNXxAacfQJXgJprZM4aOJTySTlHP2PB6nCvZr5s0QOuTsPaxJuDXi8XLK6zRu9cc%2Fz3rcqOcWef6sU1SY7EIKlAnrWrplpX6pq5Yiv1aNMufC6bGT%2FVelVRl2QiDeYc41RrOo5lq25DaAUmKHOqiLuTokx%2B4RIi5wJkBcUM7aYvULZwUoEnJ1e2EW8nMJLgl8QGOqUBjtPvedbOHcYjL1ZW4D0hjtuO5lrdIxxmZni5jQ3C9t%2BABiV6U0FiaQxI0i1n7VYV1BJneBX7Em%2FMYQifsZt9tCRHNcKyDEt%2FdvebQ%2B6v%2BRfAob5iOBvCP1FkHpBID%2BycRZepme2zdM49cqdV6xbGPs%2BEQTBuMKEBGD42dn5eos6OCJSHluQFNGZIoe165%2Bb1EipdxGpNEJk4H9Tn%2FRcuBqwuWlrP&X-Amz-Signature=efc8518cb70fa5e5c037c21e741b818c92b9c06f395bced9879083a3c46ae666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6657L7H%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCJ6nY6gh3iu1ZO1dRq2gBbgjM0mzcpRF0U7M4QXRAVmQIgfCU4dIV9cux9ZCyZtE31uLd705gBJX7hixZJ0Hm4RCcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGqYRKlR%2BdlQB%2FKOVyrcA6%2F4Y%2BJJRdgViiStTL6NRf1zZEJKMeSXZrGFzETwSZna0Ma5zU5t1hWEyqUd8YvZjVmh3ON%2BKLJOtqZcvpNREw2zjrx8GaSEpyd4TxbjyCucdmHKtB0E08i%2BXBkZ8XCiY1gFpCsfzv7Fj3XrKPnwp5lquQJu1z4Lqb5%2FgJgdfrAzG9hFwGQDyuRt3BtY7EwONYZJ7E0JCZvLR4er1O3aac7Xxc0%2FjcofQLxmJjdnIif8GWKgnInEqM27JNwTb1Ligtxwrz4dTGvrCEXGJbUkHiwjyClSJlM7Wu%2Bm%2BjIoe3glaRwktVZdvCTLm%2BE0ZYwGgWbEn%2BmJryARfy3kVyrXG2zBR6z7VRQyC1btHmEEqVIYoKDdT0rUfDn3%2Bzy9beJH4irIQ55EcLKSAeDmxVZAUNW%2B0%2Bmyug25oVqycGH1zfbGFcGVWpzMNCnUSWxhQryi%2BHQuUMnyApzQmX5oUC9qwrd6kpoJafUq5zMyIM3ho6HArKap7nKN5Z0j1fUryiXeat2stu91EzjmybuC1XQPo957xWYok6RD3q27dpMcox4jWjWOtuyK%2BkpF1BlK6JQw%2BBYO7Kdb0rkCEwTqCxbqw92uAM1Ebpv8wHn5qDbZv8HvHsx0nVviP6xUdnz%2BMNHal8QGOqUBIqffrRgEQfh00gksfdRExzZ5c%2FlqLuspRFSUW4t%2BTEu66HCeKPo7OKOK98OhVzXL%2FCxdnQDzTqn67hT4NL0wrQfo%2B7VbGi2ljBnXHq162iP9VMVRO4IxigmlqVbeJUtyB%2FCvsECVYErDv178d5RyB%2Bhk6BZHvUYJMNBGebWWTO5Ph4D%2BMK1f2%2BR4NwYdmZdnSXP8%2FDECl46ZzQUWnQmc0GMYARUt&X-Amz-Signature=be62296c44250898242d40e798e2d0bbb303ec119ad44f1aa96eb2a75a94fcfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLU4Z65B%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDG5Q23wb%2BZFZL9gCf1T0tW%2BSOof0YkSbP5%2F6LykEAu9gIgYhwLvdkrYtgkK5RLLfz5E3M2rFZOWlr3YFZls3uWj%2B0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDNoJhfeAz3srAaMzUyrcA95eUU3KIXmFMSbFsPrfeZYdyEKrE7iZxbzsIeluAllUcqQEbIFmSzG1QAJWzatbqs5G4Jbra1WoLx0YukQwl6gNzJxe7VXvPfrqkXtXZqCEsmeYnFBAApg7tc5ikC0Vdgp9Kc4%2F92xD7eiPYz9eDvLbay1bBHGWnKA5Z%2BqT6eKhZFT93i6qdbYXYOHOwRUnscGUbxwNM3J3qhwBl6J0WVvBpGPNM%2FaJP40SDwDWx9KyHc1mSECBeELR0onzjJqXQPYKIIGmh3qjixN3Mlej5WDy0%2Ft9m3o65ZJSNgkChOacclahvuk1Tx5i9U2o2DonCzgMP6dUw%2Fh5gZdll%2Fes6MWS1iSKBvpmgAhXt0hCHV2p9CIAyDwWqdZsMvMe47HxrjXnhZib1ujqKfPyc4Vp5CtU%2FUEAyd9YaK9E3ze6I8VxsHYLaAx97Vz%2FA9yxjvYBbRZd2da3e5ssM828m4Slv1y8LNY6U6AdR2igs0jYGDouaL91w%2BA4%2BpX9iTHP1h2mbs7Ov5jAUGp8MFWA%2BNATHKywhNJPUCBNqIuwrDzLbR0BGano7IWsSNI%2FOR0aNvSJxQ1%2Fp7d2AtdMNhwE4clExjHnJMqgJYszpP7DWc1DAKcMx3XeLA9Bk30ANippMMzel8QGOqUBs6n2pWynBa5aWBVb%2FaYYzeL866duEo32WU1UepzZ4XYkAKokEZPbmWKza7jHN5jGvLv17dOAAHhlSPWa3fzzTdw5DAD8Qae%2BvSxCeXY6Ez4us8RAhkS%2BJ7AxFPnaLW4AE4XSDJLsc5pDzJ71N%2Bnfyy6TSeCM7DFH2OincaYkCtx5Lvu%2BUIxa0JZhE3gOI1oyaiHrqwEWP2FkwlrJoiKj2L2VZuQM&X-Amz-Signature=d32b08760c851b4a37092a17fe3f66c558dc444d39de5eca3f61de65b8930a25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z57IHI77%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCLuqRNEAybSJffqMo09UbgpFzxpFW%2Fg5XXYBuGRpTfmgIgGFKZU8%2BE%2BchYmyHYBunBSxEkRMJd8wIKe1tRJMEdaa8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLBU5pevVJ%2Fi6oEzKyrcA5UteNIUn715HyBBfHMYHiRq13NSnrLyYvStxL%2FiTgyM%2FkkwOCSs%2BdYZztSP%2F8Hru3iqTJNslpG5l1av%2Bn02Zwl5hV%2Fub1t4LS%2B%2B%2Bf%2FSo0lGHCO2Josjxy2daj80Q3C72qMCdrj%2FsLoVVBHOSpgFydRFXSljFcjB18LFCc28ZPX3IRu8hgDygP8dRLcBLpHzhALMgKDLvkQI%2Bmi8lVY6rioCZ55uElcLtsFPB%2Ft1AhPVI7%2FtKzHW4RzPBERZk6j1zcem7paBJxWB%2Fjw7KmtVKfn8U0JRK51h95WpMFv8x0o9Y7DntzlKpyZd5qTQlrBtPMqIq3tQMUk7LDNgud29BTaCqew2yW%2BP2oHdG02pF6WYBxP4tmrKolA7J4GF2hv9A2qDqOOwJ2wldItTvgZnjqEvu%2BzA5i0bOM9pVZ6mTLwlCJDjvzz6s2X2vQOLC3hUvkNXxAacfQJXgJprZM4aOJTySTlHP2PB6nCvZr5s0QOuTsPaxJuDXi8XLK6zRu9cc%2Fz3rcqOcWef6sU1SY7EIKlAnrWrplpX6pq5Yiv1aNMufC6bGT%2FVelVRl2QiDeYc41RrOo5lq25DaAUmKHOqiLuTokx%2B4RIi5wJkBcUM7aYvULZwUoEnJ1e2EW8nMJLgl8QGOqUBjtPvedbOHcYjL1ZW4D0hjtuO5lrdIxxmZni5jQ3C9t%2BABiV6U0FiaQxI0i1n7VYV1BJneBX7Em%2FMYQifsZt9tCRHNcKyDEt%2FdvebQ%2B6v%2BRfAob5iOBvCP1FkHpBID%2BycRZepme2zdM49cqdV6xbGPs%2BEQTBuMKEBGD42dn5eos6OCJSHluQFNGZIoe165%2Bb1EipdxGpNEJk4H9Tn%2FRcuBqwuWlrP&X-Amz-Signature=38012c8de2707e81abb54b1a948cd241461f3f41e4117400e34966768862a732&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
