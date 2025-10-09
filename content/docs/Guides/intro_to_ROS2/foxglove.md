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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF2RO5ZJ%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIGrpb4jRArhm1IWjQoadTeTlaNvR1JSp6s0yf8yB2NOrAiBGnwPnhk8DLcNyx2ty3Y%2FOZzk5TkJIKjrzdR7OA3cPdiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZzlkwmKpf4UQsN5FKtwD7NZTJ3o6YpiDdkYqQIDwpW87MXAdBsMM5YjRp%2Bpm6uAv23AcCjG%2F9R97YeNoqeE1qOV8RLYJPg6h9M%2FbUuHk9ns7luSJTXtaeYp%2BA8rBHbbpk7GTdhIpzM%2B7x3rW1qkSSFf253EHlwsZlF87I7L4TwI4NqW%2Fj2EFjEjZB6bKHHCZL%2BZchNPsjnGmKwz9HsHmMRkRTC8QJ5VTLBURzTxiK0lhLJ%2Fx5w9w74IR%2FBz%2FzTZpKM9HFh7tYDTxKXML2NDXRraPLItIX1iBQn%2BJRB9eqNVZIEv55%2FB%2B%2BEB3NnR71yJn0piYDqKCdrWSIuOk%2BmcT3ZUCO1PQQFINf8I3gYF6puBMXpIU1z%2FxcLdvevR01%2FLG8%2B6qfFHYZbeu80sF%2BU4%2BEhIORpTq8msQ43NjyHeBURDSpUT5X%2FLhKvbwZfTmRXcnTn4JHlMQ1u%2BPxOdHvmQ8Ytq6hxS8VM5dEH3cF%2FZY%2FgwJewzAGRxEbDuWPLjlkmyXyGqzhjDSWP1v5mBt%2BMPl0SfbkKW5fjDMS2BS96pnBsmwMnQ1YydcVajWz9Z6%2FD1kmDkXseIDqvN8tkPnY2qbtMYq87XJI3%2BUsMsZlJIvGfn8JLTaMR%2FQX5wH799NpaAzqlfRZNEL8Adu2G0w%2B%2FqbxwY6pgEJG0TfyJOqsMXRwanRMp2vcCWBKhLqACgrrLSIfLAi8RT%2BEEorpy%2FKaFsJ6MDlBZyii7jjkYOsU9t5%2FX8Gt0ikHPeg%2B20m0%2BwGwbU4l1VPC9now62eU23bcXqf6F9yveH4G1ctiqafZTU3UulFZyuIc6b2qOPJLgMWO3mdi%2BO%2BqzcHL%2BVhEgIlLl9%2BrpjupmiS7XxUkumAFZTA0Nhe9hD1hCAIkfa0&X-Amz-Signature=b1d16be2c7c6f19b229d97dd3eca1503eb940e333bfa0a8e5652970cfb03a37f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF2RO5ZJ%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIGrpb4jRArhm1IWjQoadTeTlaNvR1JSp6s0yf8yB2NOrAiBGnwPnhk8DLcNyx2ty3Y%2FOZzk5TkJIKjrzdR7OA3cPdiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZzlkwmKpf4UQsN5FKtwD7NZTJ3o6YpiDdkYqQIDwpW87MXAdBsMM5YjRp%2Bpm6uAv23AcCjG%2F9R97YeNoqeE1qOV8RLYJPg6h9M%2FbUuHk9ns7luSJTXtaeYp%2BA8rBHbbpk7GTdhIpzM%2B7x3rW1qkSSFf253EHlwsZlF87I7L4TwI4NqW%2Fj2EFjEjZB6bKHHCZL%2BZchNPsjnGmKwz9HsHmMRkRTC8QJ5VTLBURzTxiK0lhLJ%2Fx5w9w74IR%2FBz%2FzTZpKM9HFh7tYDTxKXML2NDXRraPLItIX1iBQn%2BJRB9eqNVZIEv55%2FB%2B%2BEB3NnR71yJn0piYDqKCdrWSIuOk%2BmcT3ZUCO1PQQFINf8I3gYF6puBMXpIU1z%2FxcLdvevR01%2FLG8%2B6qfFHYZbeu80sF%2BU4%2BEhIORpTq8msQ43NjyHeBURDSpUT5X%2FLhKvbwZfTmRXcnTn4JHlMQ1u%2BPxOdHvmQ8Ytq6hxS8VM5dEH3cF%2FZY%2FgwJewzAGRxEbDuWPLjlkmyXyGqzhjDSWP1v5mBt%2BMPl0SfbkKW5fjDMS2BS96pnBsmwMnQ1YydcVajWz9Z6%2FD1kmDkXseIDqvN8tkPnY2qbtMYq87XJI3%2BUsMsZlJIvGfn8JLTaMR%2FQX5wH799NpaAzqlfRZNEL8Adu2G0w%2B%2FqbxwY6pgEJG0TfyJOqsMXRwanRMp2vcCWBKhLqACgrrLSIfLAi8RT%2BEEorpy%2FKaFsJ6MDlBZyii7jjkYOsU9t5%2FX8Gt0ikHPeg%2B20m0%2BwGwbU4l1VPC9now62eU23bcXqf6F9yveH4G1ctiqafZTU3UulFZyuIc6b2qOPJLgMWO3mdi%2BO%2BqzcHL%2BVhEgIlLl9%2BrpjupmiS7XxUkumAFZTA0Nhe9hD1hCAIkfa0&X-Amz-Signature=95e662005320ae01735159518c123c05a897b2ccde6de82e1132ced46a68611e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
