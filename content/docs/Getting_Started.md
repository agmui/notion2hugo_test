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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647BX247I%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAveuayZ1lutX8R25lznR1%2Buqsq3Jr8WpTxcV8yaer%2BIAiAPfWBg8rxJOnHc58mMKW%2FCMWAyaR%2Fo%2FU2umHqlLHpQOSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMfrQGgDPXkCGqQTrKtwDY40arSbNzoXKCqMwz3z0XJBGhpd%2B%2Be4FqOmAalXixTu3ELu1AZ8i2yI9FoifwB0a9m1r%2BFX0te4X7S4o2N0SsWf5gGxADRkLr5akWJzwhkgZpgbRIwIr03hX6eWtDntd6B8cv0sGWwLs6CyM6ALAj%2Boi3NjCZdSYz08Rz5mwCiIXZJeDvugUbB364ZVJcI1DX0%2BTIqlKm4nv0oVkpkf5JUQYaKD78Ki%2BwlUM0oYJVTX5ZXIfT%2BZxmWi2Ipymnt8QfmrgYbGpesZGhAI5N5tMmxaMZRCAhf%2BG%2BqDaic%2BIdiEC8JkbSTGQ77PVDVddextQWRMoV1Sd3mbvDlVXF4df68v1yS3A%2FYkGneI19x7xqkNvQQ78ZJo5BC8peDz6wPTGATOAM2j7lv%2BpAvE3OH5ETf4z7VxrVeua6dQ4TPlublsirYKUN%2FqC3%2Bt4Pm5sXFEHezsg3lK4MSEl0vatH7ModVgyJ7k%2FQbSS5yZr4xs7yNlM5%2FVxw1HiVByPFlvdoWE29I%2BGXG5TbWyYRS9x8ayeBGziRl0OeDlbCaPEU2yk4hp39wseClIBoiEctAxMXRv2yFO9fim3ke%2FWqfTur3ERw3dXsqZCnNeMjqyZzk9OilQ9IkPk%2FVv%2F6GkWVC0wluTxvgY6pgHYTyEevvg8lvT34YZoqagYVy9wtGRepJnd4hjQkAFJM9G4S2IA4h0AXCXVvkVTUAlgtcjKArca0CuaNXU%2FQk1eCL2yMFMwIS7JpTofKxdreG2OB8Dfl9RHuRettf7L5PHDZiuk2L%2B5egsjzyUymFT7CnhXtr%2FJ%2Fz3UJ%2Fi0DrZQ8XkrJMmAJHTYp4Uhtbz%2ByioOVdfNbRv54LCEZ0j0fP6knfUNBiSC&X-Amz-Signature=9d634d158f975a83e4229aefff7632cc5f23c41bd98e0ef1018eb51ba85fb849&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647BX247I%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAveuayZ1lutX8R25lznR1%2Buqsq3Jr8WpTxcV8yaer%2BIAiAPfWBg8rxJOnHc58mMKW%2FCMWAyaR%2Fo%2FU2umHqlLHpQOSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMfrQGgDPXkCGqQTrKtwDY40arSbNzoXKCqMwz3z0XJBGhpd%2B%2Be4FqOmAalXixTu3ELu1AZ8i2yI9FoifwB0a9m1r%2BFX0te4X7S4o2N0SsWf5gGxADRkLr5akWJzwhkgZpgbRIwIr03hX6eWtDntd6B8cv0sGWwLs6CyM6ALAj%2Boi3NjCZdSYz08Rz5mwCiIXZJeDvugUbB364ZVJcI1DX0%2BTIqlKm4nv0oVkpkf5JUQYaKD78Ki%2BwlUM0oYJVTX5ZXIfT%2BZxmWi2Ipymnt8QfmrgYbGpesZGhAI5N5tMmxaMZRCAhf%2BG%2BqDaic%2BIdiEC8JkbSTGQ77PVDVddextQWRMoV1Sd3mbvDlVXF4df68v1yS3A%2FYkGneI19x7xqkNvQQ78ZJo5BC8peDz6wPTGATOAM2j7lv%2BpAvE3OH5ETf4z7VxrVeua6dQ4TPlublsirYKUN%2FqC3%2Bt4Pm5sXFEHezsg3lK4MSEl0vatH7ModVgyJ7k%2FQbSS5yZr4xs7yNlM5%2FVxw1HiVByPFlvdoWE29I%2BGXG5TbWyYRS9x8ayeBGziRl0OeDlbCaPEU2yk4hp39wseClIBoiEctAxMXRv2yFO9fim3ke%2FWqfTur3ERw3dXsqZCnNeMjqyZzk9OilQ9IkPk%2FVv%2F6GkWVC0wluTxvgY6pgHYTyEevvg8lvT34YZoqagYVy9wtGRepJnd4hjQkAFJM9G4S2IA4h0AXCXVvkVTUAlgtcjKArca0CuaNXU%2FQk1eCL2yMFMwIS7JpTofKxdreG2OB8Dfl9RHuRettf7L5PHDZiuk2L%2B5egsjzyUymFT7CnhXtr%2FJ%2Fz3UJ%2Fi0DrZQ8XkrJMmAJHTYp4Uhtbz%2ByioOVdfNbRv54LCEZ0j0fP6knfUNBiSC&X-Amz-Signature=f4a09dd7d302675ca5c0d4d9b44eff2c4738152f69cd47face67cc485cca35a0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IRI5EZC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIEg8TEzIbp1KR8dTXPNWI%2BR2yS0WZRHwKNEmalgivk7uAiBwYZuGksa0jXU0HDoare4L%2Fh5g6BZ9i4gGUQgO5TJZ2SqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGmawgPyL8ppJNaQtKtwDI9Zsyct5WoftGtfM8qV7DuqGhzpNlsdll8WRbrTjlwx87Dssh406yoteirsrE0MI2XQjFKFcoOZ%2BqrdU4qi7o2d4sJBCwfpnUmIr5lc1i%2BO9B0wvCyMW%2FHTqwWicbhKKNgOfu2VrZAYvdiB1xH8Jj%2ByGnHfUmOBqhQ1%2Ff%2FELl7DZtfwYvC%2FAHlXVTSHWiaJAhuC6QNYTtiO50XVF%2BrjCJY1649brQ2stLtZfo5zf2Y3hceVKVgVoFm6PEgtYpDit4cgvSf92A0ygH8oQbM4d0XIYf5hDr4hVtW3Xusdg3Dhtf0DhqqKnEhV8QBXSxqrFOcROKIsnGLAKFQgt%2Bj%2B9r3utvKs7eJH9zd0f7szwJ5n5iQ3Iyw6idQqiZJpXFwVCbxBBo8jG95WkIPXAGVvB6%2FgUBP2mkYiVUF%2BlPYmAQU%2Fcfx5%2BU1Wecf6w0mGg0AJV3x2k6P8vJAmf5YdMg%2FrHDjGphIHdJAPDQo6Lk%2BKlucc2Y6J%2BtuD4BTg3yp1o1QmUyDT%2Bc%2FCP%2FHSGYEtoHYh0qFxckfx1YpgBi49wXlsaetsoUv2s%2BHd5bbIFskwGfS8WBuGTqt7YrkNElAiOu%2F%2Fp1cNOF%2B9spjtDTZjWVENs78B4zXIpqwSCi%2FiMAWIwqobyvgY6pgGH3BV27yXFnzHXqHxWGSxLMTiMWaTXWxbA0XjtdiKKu7vSH2T5RskDjcwRgmLM9KrWVaS2Qh8SbW6xvI2k%2BEZeQU0MPiqB8vAEe%2BQs6Y7CbRWr62yk6nBh4nCPkcTZR4iX5Xn%2FianIvzmaZvwo74CS%2FbS1KdtEktnKbNxbdOcXWQ%2FGF4%2BSp2D6nTJkYWY9Ka72vFLgLWup3DqYqCYm4lzCdY3a60UW&X-Amz-Signature=a5bd980864b3bd5d04006c40bd91e5a7b3a58e2ef4ead7774f0bfa0d0238f757&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC2KCMGN%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCICGLb7VIfyGPNzKrthKC9zdrTCmJ5PdZe3VMhkJAsSujAiB4rGQlZDYVY%2B6kjdYDNBhRtiRkdy4y9g7ru9DjwmUEUSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxsPfeKwFRu%2FaKHxkKtwD4cPzSk1u%2BuBpd%2BrPkZ%2FwW%2BPNJ81QwSiC%2FY5oCEpZTioV36XXt4MygoctifVTHHDyF69Fz8rNAhIij8wN4yhved5Xno0lTNEbEHAXGcd6H14is6GyIwwrB1QPEYmaYEhsh3hlu6l705JoLX%2Fdnsc6p0WZ0%2FV4OKLhbKO4AmtMvnmbhk7%2FBHGB4M94PcPzF4%2FueWdOdogBNInK6VZgakjq0HIxLNSNOcoyj41%2Fyby3qhFYKlBQSEXSaZzrDYEXebHnzBqrykcUbrd%2B3KQyKWIryDwA7TUQLLTo1Lcuxp787KljFWepoSVhtyKD99PRmVCKq5EcCSEKRzhZKYt1V4xzqGiQYA0TBF%2FMu64ykJHZ%2Fxx25u1vr4%2F%2FENLhGNt%2BqgUmW5Ewz%2FzMrqxRepKA9v13iMGjqwSIttzhS0Xdsk5t9XNwZpFk3CWwS39GzwtBvLz1g4qxJrOtzWR4XiVvC4AykBXjQWOSxTrizh72%2FvslgDn2XJ9E%2B%2BrWskZUkh7m3rGd4mxT2neTyopJ31AfW3XO5YZJCbmnl4KXHfnr4q%2F3Mo2oaEl0DIHi1UxpjEknzfUCofmo6w83FJlYvV9VYTtxSRRDtwsGka0GapLHd300%2Fx4Sm4hDBSRagnllOD4w1YbyvgY6pgEw2EyKtqN1xY5y%2FHrD%2Fg9Q2Lvcdor5HhzF8hN5qwFaqvROr9IL4ahJHZ23FqqtEZs94yj2Hfm9iL4%2FgMD8eeeTftJ5bsKLpDKHiKFSbXqVlSuyTUuLQZkyFHDQA3eBoED7fWyIeK9n3Mq3OEoGMhKuf5eiRdagwoOkFsbGtjB%2F0T9KUVHAtHlUTkk0A1EpWRybIlZYYEFfwTGtcXFGUM3Deu%2FhfHH7&X-Amz-Signature=5fcbafbd3a1f34d79d95431babb048742bacdc2cc7bd0ca601a9cfe735608e18&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647BX247I%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAveuayZ1lutX8R25lznR1%2Buqsq3Jr8WpTxcV8yaer%2BIAiAPfWBg8rxJOnHc58mMKW%2FCMWAyaR%2Fo%2FU2umHqlLHpQOSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMfrQGgDPXkCGqQTrKtwDY40arSbNzoXKCqMwz3z0XJBGhpd%2B%2Be4FqOmAalXixTu3ELu1AZ8i2yI9FoifwB0a9m1r%2BFX0te4X7S4o2N0SsWf5gGxADRkLr5akWJzwhkgZpgbRIwIr03hX6eWtDntd6B8cv0sGWwLs6CyM6ALAj%2Boi3NjCZdSYz08Rz5mwCiIXZJeDvugUbB364ZVJcI1DX0%2BTIqlKm4nv0oVkpkf5JUQYaKD78Ki%2BwlUM0oYJVTX5ZXIfT%2BZxmWi2Ipymnt8QfmrgYbGpesZGhAI5N5tMmxaMZRCAhf%2BG%2BqDaic%2BIdiEC8JkbSTGQ77PVDVddextQWRMoV1Sd3mbvDlVXF4df68v1yS3A%2FYkGneI19x7xqkNvQQ78ZJo5BC8peDz6wPTGATOAM2j7lv%2BpAvE3OH5ETf4z7VxrVeua6dQ4TPlublsirYKUN%2FqC3%2Bt4Pm5sXFEHezsg3lK4MSEl0vatH7ModVgyJ7k%2FQbSS5yZr4xs7yNlM5%2FVxw1HiVByPFlvdoWE29I%2BGXG5TbWyYRS9x8ayeBGziRl0OeDlbCaPEU2yk4hp39wseClIBoiEctAxMXRv2yFO9fim3ke%2FWqfTur3ERw3dXsqZCnNeMjqyZzk9OilQ9IkPk%2FVv%2F6GkWVC0wluTxvgY6pgHYTyEevvg8lvT34YZoqagYVy9wtGRepJnd4hjQkAFJM9G4S2IA4h0AXCXVvkVTUAlgtcjKArca0CuaNXU%2FQk1eCL2yMFMwIS7JpTofKxdreG2OB8Dfl9RHuRettf7L5PHDZiuk2L%2B5egsjzyUymFT7CnhXtr%2FJ%2Fz3UJ%2Fi0DrZQ8XkrJMmAJHTYp4Uhtbz%2ByioOVdfNbRv54LCEZ0j0fP6knfUNBiSC&X-Amz-Signature=96a950afcb03c558cd4d262cc2ac652cee9cf06a162c811134a313a8e1333795&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
