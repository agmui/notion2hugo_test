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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AN4UT2G%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbK14iO1S0nfNupUPhVZYNoLOSrMkXHv6bicrbC%2BVA%2FAiEAuizrkLkfT3XqkqYyr0MRSX3hJrl%2BfmxmIVvNZeG9mIIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJt0R56X1fTu23BTircAw3NDbiyt7QXJ3di2fnvMUEu8e%2BOfDvJj9btuKO9aqs6Uq3jQKPz2qTPgOVYV9b6WIhMteaXXGGHHcKPWbS7hJXjcUr4KyXvl861vUFW15wbl909FcOmbfg3s5D%2FuMN92zANRiTMtdqjVkVEa7TWnsmKhr2EcwTQKciCa%2BnNsZgU9Wa4DNozAs%2FDiYBMJpnGXI0CML43lim2dN5WUZ3D%2Fm%2BTiEQIYGwgHK3kZUl1Z%2BmVrYawYP%2B7drO%2BPuSBAPpclr%2FPLoBo5QJWUxQSLqnQ%2FPW%2BXElDx%2FocPNQD2GIjrXP%2Fzm6v7infXzPGg4TWzJ8%2BSFSe5AnkwCZQOA57zgHYn%2BBKb5sUG0EculntgkRa0A5cTDJ%2Feu%2FcN0UQE2X5%2B8b5aNIKiWNEP%2BwG7OE1HN4Tq%2FQbGGjl9AZPB4kEW2CYHzitw8sJx0HnOKUpyEoNMDAji6%2Bs%2BBYEEpS6zngwLqbA4yin%2F2we5%2BaXxa995hfU2BCA6%2F9xqPIAyOTIiQEWvYANXdIePm6Mrf85AnrQdd7MqwDSi0qBaY2zPUGBgs%2FvySTH4eVXUBKLBa9nXEZb8xFdwbQ2pkOHjEWDlo8B%2B29RIVoo7wJSsz9oFSj84kbYSSGCWWQQ2qw%2FjjvviFL9MKmMo8kGOqUBBvcB%2BuYomp31R886nBA2EOfu11HkUdKTJKcCKKIEqvZvJFCvtFKfLLazC0F8vbl1BBj%2FIhGA1B760rc0h%2Bt3j67SSMJo7NALjGgbelXDYAxaJBlwdruGfDBLskOiz5w57oWti%2BLHx4jejexufIo3De4Fc76pnMlM1hMr2A8v7VbRJvYSFGnDX99hpn%2BA1fJpVx8cYPR2veKPZj%2B3cws0lzcbDPMr&X-Amz-Signature=11be256e9a241859f1ffe1aa6719bac6306ebe22cf9d3d55764775da3323b7e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AN4UT2G%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbK14iO1S0nfNupUPhVZYNoLOSrMkXHv6bicrbC%2BVA%2FAiEAuizrkLkfT3XqkqYyr0MRSX3hJrl%2BfmxmIVvNZeG9mIIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJt0R56X1fTu23BTircAw3NDbiyt7QXJ3di2fnvMUEu8e%2BOfDvJj9btuKO9aqs6Uq3jQKPz2qTPgOVYV9b6WIhMteaXXGGHHcKPWbS7hJXjcUr4KyXvl861vUFW15wbl909FcOmbfg3s5D%2FuMN92zANRiTMtdqjVkVEa7TWnsmKhr2EcwTQKciCa%2BnNsZgU9Wa4DNozAs%2FDiYBMJpnGXI0CML43lim2dN5WUZ3D%2Fm%2BTiEQIYGwgHK3kZUl1Z%2BmVrYawYP%2B7drO%2BPuSBAPpclr%2FPLoBo5QJWUxQSLqnQ%2FPW%2BXElDx%2FocPNQD2GIjrXP%2Fzm6v7infXzPGg4TWzJ8%2BSFSe5AnkwCZQOA57zgHYn%2BBKb5sUG0EculntgkRa0A5cTDJ%2Feu%2FcN0UQE2X5%2B8b5aNIKiWNEP%2BwG7OE1HN4Tq%2FQbGGjl9AZPB4kEW2CYHzitw8sJx0HnOKUpyEoNMDAji6%2Bs%2BBYEEpS6zngwLqbA4yin%2F2we5%2BaXxa995hfU2BCA6%2F9xqPIAyOTIiQEWvYANXdIePm6Mrf85AnrQdd7MqwDSi0qBaY2zPUGBgs%2FvySTH4eVXUBKLBa9nXEZb8xFdwbQ2pkOHjEWDlo8B%2B29RIVoo7wJSsz9oFSj84kbYSSGCWWQQ2qw%2FjjvviFL9MKmMo8kGOqUBBvcB%2BuYomp31R886nBA2EOfu11HkUdKTJKcCKKIEqvZvJFCvtFKfLLazC0F8vbl1BBj%2FIhGA1B760rc0h%2Bt3j67SSMJo7NALjGgbelXDYAxaJBlwdruGfDBLskOiz5w57oWti%2BLHx4jejexufIo3De4Fc76pnMlM1hMr2A8v7VbRJvYSFGnDX99hpn%2BA1fJpVx8cYPR2veKPZj%2B3cws0lzcbDPMr&X-Amz-Signature=afb55d296afced9f9c1296344b2b2a8c7e2b8157d904eb9d3179c0373a758479&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
