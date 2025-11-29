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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPPI5AMN%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF25jDoNKGuT02frV0nUQo5s2Lgg%2FuAyQsE15XDmCX2hAiAmBmlOjEHVKSXdO5YDO0LNcjoQy3F%2F%2B1huw9sry%2FyeKyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLLqVS2NJkfBO4YIeKtwDFj72fFS20J7piApvct4IC3p1XLYoYkPgynaCZHOX8bHrkVWcMXoBvGrIa8OtfBY%2FUsSu4OSvvBdSEO9t8AgLRZRo47ya9A41qvpR7eeEE34FzlmNiSYxH3zp0TH%2BYcDfcsFqfljglk4pmfsAgrJFzY0fWtq8v3rnO%2BIH5nj6pNxrq0ljWTpiX3XMBdsFK6A1lR7UmTvE6%2Bag2Me9SxoKCWEVSF82MNrmDNOlQ6pIwkob6p%2BRs1v2O8QIrdb210XneP81QaPHUBdNqJPshZhPDWE%2F6yoRrE8uKhgO%2BPBcnjUiam0%2F1c9dKSEkyaELNo6w28Bd0mIoF8awWXC0qSFECS89PvIPiR8dBdddjBw08L5xDs0xploCl%2FOWEzhL4ucCKfYXCSqKPV%2FY51W8HZyS9aDIvngncxbuwTC7yMdhBpIT7jF5CAPJgoCfC%2Bu3hxgyHJWOHqEdHVU4XXSHDGWJJoXkU%2BQwE5bP160zFX34%2BYLcfUnpLonR0C4fkdypoBCor3edYvwzabBxt1Uns6R7wo6jAW6oxO%2FSssYpwaVgoV8lLC4xucs10MP%2BMpdMCJmWVYXYid0qgvvP7j31fJ0zL5GdC92NFlDjxs7HuCiaf8PGXdEG9VnXc0QSEv0wyZOoyQY6pgHz2UigVDP%2BYzP7Et1yy294dIWfn1ZCt5VhLVRp9bpSM5AAzEl0jrIXC13qYWYD%2F%2FTM4mnLCQm9GtYoLOyqR%2BAVCiEwH64oLQD3TRoaSDOWrQlNOShMix2aA3vsdWuWe1L1EHFI%2FmyF87BGCxCnt90txZhenoMr%2BdlM6PHzDOFbM%2Frszp6hdmd8WqARMEpzAmHFfFyH7m%2B0GBWyYyteda8UC%2Bo%2BTNA5&X-Amz-Signature=30c9642965a12d3969d932906eb8910180ea89bad47d180dce299f8c90964b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPPI5AMN%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF25jDoNKGuT02frV0nUQo5s2Lgg%2FuAyQsE15XDmCX2hAiAmBmlOjEHVKSXdO5YDO0LNcjoQy3F%2F%2B1huw9sry%2FyeKyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLLqVS2NJkfBO4YIeKtwDFj72fFS20J7piApvct4IC3p1XLYoYkPgynaCZHOX8bHrkVWcMXoBvGrIa8OtfBY%2FUsSu4OSvvBdSEO9t8AgLRZRo47ya9A41qvpR7eeEE34FzlmNiSYxH3zp0TH%2BYcDfcsFqfljglk4pmfsAgrJFzY0fWtq8v3rnO%2BIH5nj6pNxrq0ljWTpiX3XMBdsFK6A1lR7UmTvE6%2Bag2Me9SxoKCWEVSF82MNrmDNOlQ6pIwkob6p%2BRs1v2O8QIrdb210XneP81QaPHUBdNqJPshZhPDWE%2F6yoRrE8uKhgO%2BPBcnjUiam0%2F1c9dKSEkyaELNo6w28Bd0mIoF8awWXC0qSFECS89PvIPiR8dBdddjBw08L5xDs0xploCl%2FOWEzhL4ucCKfYXCSqKPV%2FY51W8HZyS9aDIvngncxbuwTC7yMdhBpIT7jF5CAPJgoCfC%2Bu3hxgyHJWOHqEdHVU4XXSHDGWJJoXkU%2BQwE5bP160zFX34%2BYLcfUnpLonR0C4fkdypoBCor3edYvwzabBxt1Uns6R7wo6jAW6oxO%2FSssYpwaVgoV8lLC4xucs10MP%2BMpdMCJmWVYXYid0qgvvP7j31fJ0zL5GdC92NFlDjxs7HuCiaf8PGXdEG9VnXc0QSEv0wyZOoyQY6pgHz2UigVDP%2BYzP7Et1yy294dIWfn1ZCt5VhLVRp9bpSM5AAzEl0jrIXC13qYWYD%2F%2FTM4mnLCQm9GtYoLOyqR%2BAVCiEwH64oLQD3TRoaSDOWrQlNOShMix2aA3vsdWuWe1L1EHFI%2FmyF87BGCxCnt90txZhenoMr%2BdlM6PHzDOFbM%2Frszp6hdmd8WqARMEpzAmHFfFyH7m%2B0GBWyYyteda8UC%2Bo%2BTNA5&X-Amz-Signature=dca4c751db4051c7ceecbaa246e3cf12d0498a476c88f1dd202e087b5816264b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
