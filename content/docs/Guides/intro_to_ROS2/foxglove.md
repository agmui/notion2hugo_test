---
sys:
  pageId: "231da3bc-6297-8065-bc7c-f8407c2f1ec6"
  createdTime: "2025-07-15T23:35:00.000Z"
  lastEditedTime: "2025-08-11T17:27:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/foxglove.md"
title: "foxglove"
date: "2025-08-11T17:27:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 158
toc: false
icon: ""
---

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UA4KXBE%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIBuesXHGgfgNgaTBmf8IYi5e%2BwQdWuhxuc6DDA6aDNLTAiAFRBA3KzNmVtp5UTKaL6%2B7q7bATwpFpo4FEwYw%2B1aPiyr%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIMmaI63idbx8Urx2BmKtwDY4ZzzJqG2asypf2H7eIRVYViMnUDv09%2BWd%2B0J39I11uxC%2BgLuSoCuyZbtFrTLVWkHrqxe0hi%2FkRadeOgSvdWme0oSYkSI3gxPr2zsS%2BVQXaKjVmnbWEXRt1OmVdMgWo5%2BC0SnCfsb32x%2BwcDP84h7KG9m1383oqg8sDaHpDpABbxXJYx20jRtUQs0%2F5BDVaSsDM0HgFq5pVpPQ8kZVDBOpKtggKqFUUeL4ysENbWRdV0r8mHH0pTNV54K0196vzbX5B%2Fij%2F4f8TSXdv%2BEJu9c2H12kcqcc3fvVTispOGZLDKB3OYF7X4C19VOCMUzOUzyb4NkZyKlVmnuydfZvC%2FL9V84btmdRtATnkV08M3i%2B1lp%2FExrYjEtRJZHnh%2Bc6Ug3qPqdEFZdVnKlIkjpkDeGYGU2tTjqPj2uzu9c5FTQX6gLQQP4xv8HwPHLQm1ij5vTNZUpzfV5l48XyOke42x2jP3dYia0Ov8reZpr5oPlfprN4542viodPal2nBruodWU8w8cHv5i9%2FPWAzbhhrAn24z3EtjDCxD%2BrIoMuz1sYL1DjzolZc2F8q66EQpbt9CHfhy3Sf%2FFFZm%2F%2By0zbSYvn2PAoi0n8vO4T4T7WhHxf87yqKno7qu7AxDlTcw4M3gygY6pgGRnqjuWUfLz%2Bp04%2F1eptzA4kezAlmdXceKwj30yw%2F4Ju5mHqPe%2FuYE1PgVCseoMFKZzCV165fF3zPVLKY%2FHIHIIQOv1DNR9QLTZtJzSLG6YkONooNhqCFv53%2FRJGtb9iP9gBbUd7rYE2Nz7Su7xmbYyLrEC%2FiYOrZTaQzYttj9D3SodNpfnhknC2ZvN13fqWilg4quzi3bBOKxLmoN8p30YKL9yVH9&X-Amz-Signature=33f96f8b32a053aeabaffe7086f53fd56dd321fd62ea2607847d540653e3ec3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Foxglove is similar to rviz however one of its biggest feature is its ability to connect over the internet.

This is nice for wireless robotics setups but still need a rviz visualization.

You are also able to record and play back sensor data and visualize it in foxglove.

## Using foxglove

First make sure you know the ip of your robot.

<details>
  <summary>{{< markdownify >}}How to get robot ip:{{< /markdownify >}}</summary>
  
To find the robot’s ip run on the robot computer:

```bash
ifconfig
```

To test if your laptop can “_see_” the robot’s computer you can run:

```bash
ping <your robot's ip>
```

If there is no response then it could be a problem with your IT department or you are on a different WiFi.

</details>



For now I recommend using your phone’s hotspot to connect between the computer and robot.

<details>
  <summary>{{< markdownify >}}how to connect robot jetson/rasberry pi to hotspot{{< /markdownify >}}</summary>
  
TODO link ssh guide

</details>



A more permanent solution is to use [talescale](https://tailscale.com/)

Next follow the [**official foxglove guide**](https://docs.foxglove.dev/docs/getting-started/frameworks/ros2) and then come back to this guide

When you get to the section that says `localhost` you can replace it with the robot’s ip

Once you are able to manually start the foxglove node on your robot you can add this line to your launch file to automatically start it:

```bash
ros_bridge_server = ExecuteProcess(cmd="ros2 launch rosbridge_server rosbridge_websocket_launch.xml".split(' '), output='screen')
```

## Setting up visualizations

It is worthwhile to look though the different types of [panels that foxglove offers](https://docs.foxglove.dev/docs/visualization/panels). However, to just view the scanned map you just need to add a 3D panel.

Look though the list of topics on the left to find the `Laser scan` and `Grid Map` and enable them to view them. The way to add them into the view is similar to rviz. It is recommended to play around and find what else can be viewed.

## publish goal pose

There is also a way to publish a goal pose just like in rviz near the top right of the 3D panel

You can change the topic it publishes too in the settings tab

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UA4KXBE%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIBuesXHGgfgNgaTBmf8IYi5e%2BwQdWuhxuc6DDA6aDNLTAiAFRBA3KzNmVtp5UTKaL6%2B7q7bATwpFpo4FEwYw%2B1aPiyr%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIMmaI63idbx8Urx2BmKtwDY4ZzzJqG2asypf2H7eIRVYViMnUDv09%2BWd%2B0J39I11uxC%2BgLuSoCuyZbtFrTLVWkHrqxe0hi%2FkRadeOgSvdWme0oSYkSI3gxPr2zsS%2BVQXaKjVmnbWEXRt1OmVdMgWo5%2BC0SnCfsb32x%2BwcDP84h7KG9m1383oqg8sDaHpDpABbxXJYx20jRtUQs0%2F5BDVaSsDM0HgFq5pVpPQ8kZVDBOpKtggKqFUUeL4ysENbWRdV0r8mHH0pTNV54K0196vzbX5B%2Fij%2F4f8TSXdv%2BEJu9c2H12kcqcc3fvVTispOGZLDKB3OYF7X4C19VOCMUzOUzyb4NkZyKlVmnuydfZvC%2FL9V84btmdRtATnkV08M3i%2B1lp%2FExrYjEtRJZHnh%2Bc6Ug3qPqdEFZdVnKlIkjpkDeGYGU2tTjqPj2uzu9c5FTQX6gLQQP4xv8HwPHLQm1ij5vTNZUpzfV5l48XyOke42x2jP3dYia0Ov8reZpr5oPlfprN4542viodPal2nBruodWU8w8cHv5i9%2FPWAzbhhrAn24z3EtjDCxD%2BrIoMuz1sYL1DjzolZc2F8q66EQpbt9CHfhy3Sf%2FFFZm%2F%2By0zbSYvn2PAoi0n8vO4T4T7WhHxf87yqKno7qu7AxDlTcw4M3gygY6pgGRnqjuWUfLz%2Bp04%2F1eptzA4kezAlmdXceKwj30yw%2F4Ju5mHqPe%2FuYE1PgVCseoMFKZzCV165fF3zPVLKY%2FHIHIIQOv1DNR9QLTZtJzSLG6YkONooNhqCFv53%2FRJGtb9iP9gBbUd7rYE2Nz7Su7xmbYyLrEC%2FiYOrZTaQzYttj9D3SodNpfnhknC2ZvN13fqWilg4quzi3bBOKxLmoN8p30YKL9yVH9&X-Amz-Signature=a6555d72bfd430407ded810592cf437275ae799ab2e37492160349bd956b762f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
