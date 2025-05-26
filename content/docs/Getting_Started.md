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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGL6M247%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCO6OcQhiT1hTk3tN%2B5ypWqUYixkOiuOcOZa3ZYeSLOigIhALTuL2sU5W0941ZDLXQR%2FsIOJmSEbCKC8mY%2FCFCyytMHKv8DCDsQABoMNjM3NDIzMTgzODA1IgyA2FYcKdiu4%2F5V3lIq3APEm0YIfivicsYozGbivp5zrq6ka0ExfOcENVEKOYAYYvtqob%2FaQp6R%2FemlNuPFXT2sGyKvxa55yiB6qKY0iOCbJkS%2FdCnbEOaOT0BzohBT8qYQTEM7KUPoTaXZZ8cdMyXv8%2Fa7%2FU6GeQdLbZ8HtfeOjIvi7aO7ttvO%2FGC7ZdZjKnRRltZiUS2SoUAr1UZde0SkfyJJXOO4%2FMbUuwVWQgKb1Klpk%2B36B1foo49%2FBU9A4f72lj219csVc5z8HbJa98GIS6Wu53np%2FjHLINNi2B40ndml1BRQhJQ8AhDRG5fJqF7TQn10qVuzItKP917dTnBpz27WMIpXknKIUUu76ugA%2FvLXKpraejpHwdZfk8DGUWScu4wk7u8SkHEnUsTp3NWHmrkuhy6sQeX57eW3lH33OdIoXnT%2F4X2JZABYWr7V0RcI2HX5SxDkcknvILDKpbUqqSBdtBgTSeEA9q6pOHAfK3zeC0KlcvO0NblNk6WoA1DURfdpliTwcH6zRprKHMkzQzSMmYLEKRKw24qn4Yf5icHDcOlhHWB61%2F7FBtJ7Yw6mSGbWUfy0YpNzZY8VhQvty%2ByYNdg7%2FUZdoYjq5lIQnYjnaay9vMZ6DdFMhUlE50uis8bERP1XctZYYzDwnc%2FBBjqkAY9syyG6zI8mAwMExHms5i20F9ovUbFV2iGA91W4JDIxPa9qzGv%2F7pNgacBZR6Ndswy4aRPyd3SpFh17uz6OY9OpNlSBrdJGR86l6PWN6zoBZsCJpte31oH8ACRTJiR%2BaFucvYDy%2Fy1cH9bhqgYcl58JveQT8gKKI8dU4NxIvhvciuyE3YAWwMagFPfIcXABMZ5XwCvoa4fUmszkoZ%2FYe4QWznAx&X-Amz-Signature=3fd591e43093ca5252ede9ba0741d3aa099089b9b9ac736a07119ba0c1f8d0e3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGL6M247%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCO6OcQhiT1hTk3tN%2B5ypWqUYixkOiuOcOZa3ZYeSLOigIhALTuL2sU5W0941ZDLXQR%2FsIOJmSEbCKC8mY%2FCFCyytMHKv8DCDsQABoMNjM3NDIzMTgzODA1IgyA2FYcKdiu4%2F5V3lIq3APEm0YIfivicsYozGbivp5zrq6ka0ExfOcENVEKOYAYYvtqob%2FaQp6R%2FemlNuPFXT2sGyKvxa55yiB6qKY0iOCbJkS%2FdCnbEOaOT0BzohBT8qYQTEM7KUPoTaXZZ8cdMyXv8%2Fa7%2FU6GeQdLbZ8HtfeOjIvi7aO7ttvO%2FGC7ZdZjKnRRltZiUS2SoUAr1UZde0SkfyJJXOO4%2FMbUuwVWQgKb1Klpk%2B36B1foo49%2FBU9A4f72lj219csVc5z8HbJa98GIS6Wu53np%2FjHLINNi2B40ndml1BRQhJQ8AhDRG5fJqF7TQn10qVuzItKP917dTnBpz27WMIpXknKIUUu76ugA%2FvLXKpraejpHwdZfk8DGUWScu4wk7u8SkHEnUsTp3NWHmrkuhy6sQeX57eW3lH33OdIoXnT%2F4X2JZABYWr7V0RcI2HX5SxDkcknvILDKpbUqqSBdtBgTSeEA9q6pOHAfK3zeC0KlcvO0NblNk6WoA1DURfdpliTwcH6zRprKHMkzQzSMmYLEKRKw24qn4Yf5icHDcOlhHWB61%2F7FBtJ7Yw6mSGbWUfy0YpNzZY8VhQvty%2ByYNdg7%2FUZdoYjq5lIQnYjnaay9vMZ6DdFMhUlE50uis8bERP1XctZYYzDwnc%2FBBjqkAY9syyG6zI8mAwMExHms5i20F9ovUbFV2iGA91W4JDIxPa9qzGv%2F7pNgacBZR6Ndswy4aRPyd3SpFh17uz6OY9OpNlSBrdJGR86l6PWN6zoBZsCJpte31oH8ACRTJiR%2BaFucvYDy%2Fy1cH9bhqgYcl58JveQT8gKKI8dU4NxIvhvciuyE3YAWwMagFPfIcXABMZ5XwCvoa4fUmszkoZ%2FYe4QWznAx&X-Amz-Signature=89cd96e28f9828c115e124d71b968df1f5c24f99e158fe83d8cddd8b00057b2c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGL6M247%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCO6OcQhiT1hTk3tN%2B5ypWqUYixkOiuOcOZa3ZYeSLOigIhALTuL2sU5W0941ZDLXQR%2FsIOJmSEbCKC8mY%2FCFCyytMHKv8DCDsQABoMNjM3NDIzMTgzODA1IgyA2FYcKdiu4%2F5V3lIq3APEm0YIfivicsYozGbivp5zrq6ka0ExfOcENVEKOYAYYvtqob%2FaQp6R%2FemlNuPFXT2sGyKvxa55yiB6qKY0iOCbJkS%2FdCnbEOaOT0BzohBT8qYQTEM7KUPoTaXZZ8cdMyXv8%2Fa7%2FU6GeQdLbZ8HtfeOjIvi7aO7ttvO%2FGC7ZdZjKnRRltZiUS2SoUAr1UZde0SkfyJJXOO4%2FMbUuwVWQgKb1Klpk%2B36B1foo49%2FBU9A4f72lj219csVc5z8HbJa98GIS6Wu53np%2FjHLINNi2B40ndml1BRQhJQ8AhDRG5fJqF7TQn10qVuzItKP917dTnBpz27WMIpXknKIUUu76ugA%2FvLXKpraejpHwdZfk8DGUWScu4wk7u8SkHEnUsTp3NWHmrkuhy6sQeX57eW3lH33OdIoXnT%2F4X2JZABYWr7V0RcI2HX5SxDkcknvILDKpbUqqSBdtBgTSeEA9q6pOHAfK3zeC0KlcvO0NblNk6WoA1DURfdpliTwcH6zRprKHMkzQzSMmYLEKRKw24qn4Yf5icHDcOlhHWB61%2F7FBtJ7Yw6mSGbWUfy0YpNzZY8VhQvty%2ByYNdg7%2FUZdoYjq5lIQnYjnaay9vMZ6DdFMhUlE50uis8bERP1XctZYYzDwnc%2FBBjqkAY9syyG6zI8mAwMExHms5i20F9ovUbFV2iGA91W4JDIxPa9qzGv%2F7pNgacBZR6Ndswy4aRPyd3SpFh17uz6OY9OpNlSBrdJGR86l6PWN6zoBZsCJpte31oH8ACRTJiR%2BaFucvYDy%2Fy1cH9bhqgYcl58JveQT8gKKI8dU4NxIvhvciuyE3YAWwMagFPfIcXABMZ5XwCvoa4fUmszkoZ%2FYe4QWznAx&X-Amz-Signature=e2f87f0de1d9dd7fd7c829a10c30900f36e7786e98a1239c77b4d58b01d79d37&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZXGMD6L%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDYkM1kmpreqE481VWDUOEmfVLDmIEifT6FniwxCxAgBAIhAOE%2BqrZbHzIhIhCFeiUP8OgTt4lrSEMJ4wekMyS103UcKv8DCDsQABoMNjM3NDIzMTgzODA1IgyzzKiNlX%2FJ03jvuogq3AMbwKaZG1zZ9x%2FjWzWBkSRPwopuDjq4VDaL%2FPGleHHP%2BJG8uElfpcJemHcwBppGUVEX0OzUX%2FYIOJLHAVdXC8wGmHf1Hm2kLnpLkEshd0G5L81jMJIjvZxOsPdDsfRz1nUhIK%2FLZdM6vNZxbAHQrJeBv3y0e9yo7%2F1nlaKusSmPgWqQdBCtdVdEFvkNz09FlqJ%2FXg%2FjnoYG27cCEO9%2Bhlj15R0eJ9k0uNg379nBQ%2FGTUczxNa4z1pwqlQJchZUAQkOfZa%2B3Z7PVG4BzabQKotofLqZWSwniQjYSkGx8AzOuprD9uvLT8pcD1JxnxhIK11RVAPZ49q5KgbkdR6meMCP71wrxdCGuRmTsjmXXygWyN5sJJ8VRBeT1kJ6DiI2Gp4cEtgGWEWmfexel54ctbOubsBErj%2FKTEkEgzZ1LAeW3psx0kcE5tfq9n3olXXXRMvDm%2BH%2FCVHr%2BcfIXtRQsdflawZHLb4ExK0YQQE0KzX2ww2iU7pyKB%2Fo1PupAa4yz8sR08ZFr2qxsIoyrnQFjvFPt8Bb97qyUofkumGBTHQKZPHmfPbMnb37nGB4r3j7tw1%2BoE18sP0Wtp6DbEpsOSUKvPoJWDS6GLY57nptRDUv8FD8%2BW984XVL7SPSaJDC%2Bns%2FBBjqkARKsHgHY%2Bk%2B9XA%2BNniBQEFmtzVa5Jmu%2FoW8ha33BW6ch7LEpTTUwS0swh9dB9r0YJXwpebHrz6ZoeL5mlUTLbpLyCIbbmb4cxmi9dmnLXDgEbJ8l4xF%2BQsTBS7zLNC6EUk7CcD84JzXRUMMrDNQyXi361Y1Vr6tICM6Pc1KRIt3f%2BhNLzHhiOxvPFFdDRiStOBdfMz8jAVbiJUJbGwa5Vhpr00C6&X-Amz-Signature=3dea0db43774160a23a267b97faa4cd94f4c9bfe2866b92beede8f1a0e41565d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SINYZ7XP%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHeR7xZ00lXZEvd6Z1VVMI0%2Fz0kr7f4VtQ3mXVXO06T7AiBQakKq9ZXIhWgW7D5lWezbUTQi7vT8tvqp3gJhbaeBTSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMWqX7SIKIRW7KxoB%2FKtwDopIqSCISzMIBG6zc12X1%2BGVfNPmlHteRlcDWSH6E6%2F5Kc3gj5qy3gaZvRm6bY6%2FAmMkLrKG4LsJi5E39mhvbi7hB2ZmSXM4zc8z%2FvuCI2PkWMM3RgfJ48HXHgL1m2hw6IQQsfjbYMr53mdVx3sKdsvqcF3%2Bnl5laqk%2FaTnNHptu%2FsyTcu3ckENPqlotUehGWMGKTmG1ml8lqIbYsYqLrl289vzs1UIW6%2BrP1hEhiQGOlUCGYMK39PwYJKlvzGV5Ktra6%2FngbWdbgapOspein3wPXFxJ3n7E0NYj%2F2qc8M8d88BAVzMdAqpR%2BWkP8YEZgBhxtRA6iqU2H66f7uQ%2BJ%2FsFHuChofhCNelNC1%2F2csV1TGbdOZN6Ce6rF%2BPePIY%2B%2BlvJ2tmtyUHRPd4afKJzG11tpvJCSqOR0W07O57MHpyOuzqN7gly4K0ClYO0ppE4kDDHqEErwSA9kN9M8AU0SCp0KRswCUmfIqrJXEBXpPO5Jmq5wnXVPnFs7Kd2YBWw%2B2FkV22TVhdT%2B7uTyu1Z7iP5XZiDGAXUpnjmP22brlSnS0%2Bjb0ZVPjbycnfECysJ%2B2TQ9qxGucExOBdjQUfcHfju3tBrBP4gSRLAdKpi9wKRL7DGAeyDLtOITYTowtZ7PwQY6pgGHai7ZABIapWHEct4szuhFyc6m8u34Fs9QukdeVIjOCQ8RqUSpOH9UScNcNkQnlnIqUksF2SyFHJhVLJcPOWgDm9Yx%2Fs%2BDwiWLf2u6xw6V4tYB7zTkOQWDhWF5RLbD7Orn9yWUHnKygGgppWkAjJ1UR6TLcnL4Chgj%2FKWMnfpuVrl1HcrUoTwmnBpTaG4cDyN5zXx6Sgi4P9qkIlWDKeL1gOKv4B9q&X-Amz-Signature=f91451b0116183148f566828114577a3fa0a4ff4f2b40f622bbd3304af028944&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGL6M247%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCO6OcQhiT1hTk3tN%2B5ypWqUYixkOiuOcOZa3ZYeSLOigIhALTuL2sU5W0941ZDLXQR%2FsIOJmSEbCKC8mY%2FCFCyytMHKv8DCDsQABoMNjM3NDIzMTgzODA1IgyA2FYcKdiu4%2F5V3lIq3APEm0YIfivicsYozGbivp5zrq6ka0ExfOcENVEKOYAYYvtqob%2FaQp6R%2FemlNuPFXT2sGyKvxa55yiB6qKY0iOCbJkS%2FdCnbEOaOT0BzohBT8qYQTEM7KUPoTaXZZ8cdMyXv8%2Fa7%2FU6GeQdLbZ8HtfeOjIvi7aO7ttvO%2FGC7ZdZjKnRRltZiUS2SoUAr1UZde0SkfyJJXOO4%2FMbUuwVWQgKb1Klpk%2B36B1foo49%2FBU9A4f72lj219csVc5z8HbJa98GIS6Wu53np%2FjHLINNi2B40ndml1BRQhJQ8AhDRG5fJqF7TQn10qVuzItKP917dTnBpz27WMIpXknKIUUu76ugA%2FvLXKpraejpHwdZfk8DGUWScu4wk7u8SkHEnUsTp3NWHmrkuhy6sQeX57eW3lH33OdIoXnT%2F4X2JZABYWr7V0RcI2HX5SxDkcknvILDKpbUqqSBdtBgTSeEA9q6pOHAfK3zeC0KlcvO0NblNk6WoA1DURfdpliTwcH6zRprKHMkzQzSMmYLEKRKw24qn4Yf5icHDcOlhHWB61%2F7FBtJ7Yw6mSGbWUfy0YpNzZY8VhQvty%2ByYNdg7%2FUZdoYjq5lIQnYjnaay9vMZ6DdFMhUlE50uis8bERP1XctZYYzDwnc%2FBBjqkAY9syyG6zI8mAwMExHms5i20F9ovUbFV2iGA91W4JDIxPa9qzGv%2F7pNgacBZR6Ndswy4aRPyd3SpFh17uz6OY9OpNlSBrdJGR86l6PWN6zoBZsCJpte31oH8ACRTJiR%2BaFucvYDy%2Fy1cH9bhqgYcl58JveQT8gKKI8dU4NxIvhvciuyE3YAWwMagFPfIcXABMZ5XwCvoa4fUmszkoZ%2FYe4QWznAx&X-Amz-Signature=c8b3c218c6f1545813859a9db71d2a2243ab53e97681fd2eeb8fc61dc644e3a5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
