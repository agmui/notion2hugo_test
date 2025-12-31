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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y23H4DRQ%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FRNjDh7yHU1KT8sI53FS7DcZTJXNygc747Q8CD1gLQAiEAlnjWiDQk%2FZiRxxHRGan%2FVJ3k5TTT9UwxMHLXiDcYJDQqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMiGAbIc%2FdWeufdzircA8EhHPMDQXlN5UvO0egfghm23gb8M3RQCgDvubzscoOPfsLvT3VKEZpuQS30Lksmgk4WuKbdCzZPF2SYcr8IePSOxIbXM37ylM50lv9b4ybODeakCkbD4BykRAiaIb%2BfKQmRffJe0VWfZM2B%2BsiQ%2F5QtC3KLIyOfklndYPEoo9JotScY9pZVpMVVk%2BSnifjF2nF8haJXFwLZtC7oBXhG0yxZL6v9zrSj%2FyXsVgS6%2B0C1AIxMnqPx588Vui81jZiIFqwi3RTU8%2FBFI0qUpSN2Ge900WrDBRB%2BWw5o%2FujjgvrKXJANOZ4glJlpMG4cMb3gfjpr1SD3sf4s%2FjsJY3BL1QIKxGaqkcj2XNRoHtLaqwyNjVui1GGByghScDtOBAVzegm9NPQTmwz%2F9AXuxCVYLg%2BsjSnhc4ebSdRWhs3epwdwmLULYykmb14GAxEwkF9HHpJszwOxLoygCRwhbvwjvO92mn6v5AklZk2zcN095RSD3KzDp8Q9cVucxoHYgoFXeKgeXPy5LTj0z%2BIURWOP1BhSH9vniBbmx8Q5RszX0MCxE4G9E3meF%2FBs%2FPIIl35xgOHTRnnXw9W8B%2FNwZL%2F82AGZ%2BW7mCdIUAOyG2B6lLA1YPALfmn2zuXqs1iU7MKj40coGOqUBC5Du%2FM3j7ltqQxi0M%2BzgRz7UZoIYUXb2jWqaGTUXvhTR5zNaq60JafIzLVxIZbYCPnZfyGEAJ8C6bZ8SBPKaJDxO8sBM3uW8Qbrsb1IozGNv0wjETeXtnVyC0rkkA2hUWT1vyYraCHziuKOA1zJb2VTC6dZBkOKwuqTOYNDP2w%2FArXiHQs3nLN82u%2Fp%2FANVX9CbcdiLRc1kxqbWDCpvC0cceKf2K&X-Amz-Signature=e9ca6ebd674cee1a9d583b8073686ea21611e92a5295f76d246e636aff8e129d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y23H4DRQ%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FRNjDh7yHU1KT8sI53FS7DcZTJXNygc747Q8CD1gLQAiEAlnjWiDQk%2FZiRxxHRGan%2FVJ3k5TTT9UwxMHLXiDcYJDQqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMiGAbIc%2FdWeufdzircA8EhHPMDQXlN5UvO0egfghm23gb8M3RQCgDvubzscoOPfsLvT3VKEZpuQS30Lksmgk4WuKbdCzZPF2SYcr8IePSOxIbXM37ylM50lv9b4ybODeakCkbD4BykRAiaIb%2BfKQmRffJe0VWfZM2B%2BsiQ%2F5QtC3KLIyOfklndYPEoo9JotScY9pZVpMVVk%2BSnifjF2nF8haJXFwLZtC7oBXhG0yxZL6v9zrSj%2FyXsVgS6%2B0C1AIxMnqPx588Vui81jZiIFqwi3RTU8%2FBFI0qUpSN2Ge900WrDBRB%2BWw5o%2FujjgvrKXJANOZ4glJlpMG4cMb3gfjpr1SD3sf4s%2FjsJY3BL1QIKxGaqkcj2XNRoHtLaqwyNjVui1GGByghScDtOBAVzegm9NPQTmwz%2F9AXuxCVYLg%2BsjSnhc4ebSdRWhs3epwdwmLULYykmb14GAxEwkF9HHpJszwOxLoygCRwhbvwjvO92mn6v5AklZk2zcN095RSD3KzDp8Q9cVucxoHYgoFXeKgeXPy5LTj0z%2BIURWOP1BhSH9vniBbmx8Q5RszX0MCxE4G9E3meF%2FBs%2FPIIl35xgOHTRnnXw9W8B%2FNwZL%2F82AGZ%2BW7mCdIUAOyG2B6lLA1YPALfmn2zuXqs1iU7MKj40coGOqUBC5Du%2FM3j7ltqQxi0M%2BzgRz7UZoIYUXb2jWqaGTUXvhTR5zNaq60JafIzLVxIZbYCPnZfyGEAJ8C6bZ8SBPKaJDxO8sBM3uW8Qbrsb1IozGNv0wjETeXtnVyC0rkkA2hUWT1vyYraCHziuKOA1zJb2VTC6dZBkOKwuqTOYNDP2w%2FArXiHQs3nLN82u%2Fp%2FANVX9CbcdiLRc1kxqbWDCpvC0cceKf2K&X-Amz-Signature=53c95976fe833e3a1a51251add7b7adad6be3974d96f8f974dd4cce110900fac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
