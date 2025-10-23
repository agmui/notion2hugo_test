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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRCEAA4U%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVqE6MNmgJhh9QmYph8YHebB2yzPe34TJnWl4wNshZUAiEA8%2BTxNDOgCABe59kqlJ2kMIn%2BtEBPp2KQnCDQh%2FFfxdkq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDFHss3VdzADOHYGHKCrcAyEhY60%2B4EjlLTFERJ6hHEksW7maipMrybqL1VhL7OXncj8m3bf3lpK8K%2F4yYqX%2FQGM9jkZVQw13AzUsitNdfxKSl0oPIS%2F78k%2BnfA5c6dBSD4aWUm3byOnXkfTVEt0OIf%2FzifVm68v8f4vtsGZJcYwUaM31oy9a8krgSDNZGwrO%2F%2BrtK0goHvGIN3SZobHHtHZ0f1XQJiESLuP3p%2FZr%2Fl5TDDY%2BSoxgpJ1SoDYtEuO77FF1PRrjajqiSm8LYd9PHL24BitSN4RLOx610zygn56sIzsLkOOmky88J9L5w4twxH4R5CUTbS39qqZln4A0YzHNpRQ6plDXjVkk6GfWm2xphSHW%2FjfLN%2F9GEqbwK6HAKLJlJYAeDR9z2GFP9cBUktlYPQthNTowYQRUf3BNDYQFKgRoSLgjF%2BMv2mhDDlgTULG0eEDmTtfYeKgPnvm%2Fe89KSg41yI5nufVAk1R3x0NqDVj1nIRH4QNPqkbC09ewN4iqVjEfX2BzNiXfgQyNdxRG7WnN5rE6ahiTW8ea3p99xbt2ThsNiBqX7%2Fesh2ZjSyvk3Qvj1kgedBKTUmnlB8I3CRYQIITMwagZaTUnseLlN5iG2OAbKRgbyp3dlTTxc9mcPzxKq46kl%2FnrMNzv5ccGOqUBsWL1%2BqlEHrmHDG3m0qA4mIULJjluKyjf1cCOvEd0iVsbB81njZm9J9JqEx9m%2FUgsPMPOVjxVuaTrRu0wuXGXMjfabjywkF%2Bbcybz8X4QKP0H%2FbOhKwDkVkAuJAGLgqzj99fx9o%2Fy5quJx6lqp1ZMxttlAoErUf4xP6TN%2BZqrNY4r0tZpE%2FCW3M%2F4rFdPEiXH0sa9z1FRWJ9ixprFPOiGzSBSWWmy&X-Amz-Signature=22fcf957a50b48245cc5bc1b2248763663d227d5c86eff8e356e52ca9f5a8d81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRCEAA4U%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVqE6MNmgJhh9QmYph8YHebB2yzPe34TJnWl4wNshZUAiEA8%2BTxNDOgCABe59kqlJ2kMIn%2BtEBPp2KQnCDQh%2FFfxdkq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDFHss3VdzADOHYGHKCrcAyEhY60%2B4EjlLTFERJ6hHEksW7maipMrybqL1VhL7OXncj8m3bf3lpK8K%2F4yYqX%2FQGM9jkZVQw13AzUsitNdfxKSl0oPIS%2F78k%2BnfA5c6dBSD4aWUm3byOnXkfTVEt0OIf%2FzifVm68v8f4vtsGZJcYwUaM31oy9a8krgSDNZGwrO%2F%2BrtK0goHvGIN3SZobHHtHZ0f1XQJiESLuP3p%2FZr%2Fl5TDDY%2BSoxgpJ1SoDYtEuO77FF1PRrjajqiSm8LYd9PHL24BitSN4RLOx610zygn56sIzsLkOOmky88J9L5w4twxH4R5CUTbS39qqZln4A0YzHNpRQ6plDXjVkk6GfWm2xphSHW%2FjfLN%2F9GEqbwK6HAKLJlJYAeDR9z2GFP9cBUktlYPQthNTowYQRUf3BNDYQFKgRoSLgjF%2BMv2mhDDlgTULG0eEDmTtfYeKgPnvm%2Fe89KSg41yI5nufVAk1R3x0NqDVj1nIRH4QNPqkbC09ewN4iqVjEfX2BzNiXfgQyNdxRG7WnN5rE6ahiTW8ea3p99xbt2ThsNiBqX7%2Fesh2ZjSyvk3Qvj1kgedBKTUmnlB8I3CRYQIITMwagZaTUnseLlN5iG2OAbKRgbyp3dlTTxc9mcPzxKq46kl%2FnrMNzv5ccGOqUBsWL1%2BqlEHrmHDG3m0qA4mIULJjluKyjf1cCOvEd0iVsbB81njZm9J9JqEx9m%2FUgsPMPOVjxVuaTrRu0wuXGXMjfabjywkF%2Bbcybz8X4QKP0H%2FbOhKwDkVkAuJAGLgqzj99fx9o%2Fy5quJx6lqp1ZMxttlAoErUf4xP6TN%2BZqrNY4r0tZpE%2FCW3M%2F4rFdPEiXH0sa9z1FRWJ9ixprFPOiGzSBSWWmy&X-Amz-Signature=59785eb52827ed0464a2024b3571e7963654080e005344fc4b791d27bdd06b1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
