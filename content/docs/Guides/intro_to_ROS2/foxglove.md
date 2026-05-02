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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6Y7XXWO%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDDBkZbewWYQT618J1ZrfT1a%2FQkv65NiOTC6%2B5x%2BeCx7QIgGUQw9eQ%2BgDf1oLT3Rjy0jEy3hQoywVOEZdBzd0CDk5Iq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDD%2FXpavjlyMozM4VlyrcAygxOXuKO1VBGaBGakuN%2B7CwyaPTSq0%2F%2F3h%2BV6jlHwSBXEjuQzI%2BeOsjnY64xEnD6bAWLF8IpU2Tlx4B7tGD3NjK9KYtSMozYUaRbtZtt60yr7aSLScgKW7giefrnFECj7AKY%2BJDL%2FAj9FLHVkcqkqWYUMUFzEoZMO7e%2BjRWoOSSUkQYuWmi16b4yo3PJGuBZFiOjMi8ETNIk5iE%2FC%2Bf7ePBke1sNH5SUhI983yNgKsO%2BZuhYoxJ%2Bi79alQNyu3mXRdFM4njr9EmeSMK6b1Jp3up57%2BZnpKXak4oow1cZWZNDd%2FDvPRbyPKfDJiuRMy8QE2QZpz%2B9HZh4A67AyNsMWkDtFdO9bdSMUh1VpInZMIi81FgTBygxi%2BGsa0eDj6qB6ZGnjCOM3bL8evXYqvlTC6W0NX7%2BmlhE1xOuOKoe5TvByyv8Y8kU2T%2BWPEuKCy6zzZfNY9w0lIZ1D9TRsoUAN52pt7pnaqc9SUzXQBHAeCZHjoN35DGdj%2FKLnyNgLlgO%2BAVvfLTXD9u0jNXqnRsJBkeOMVqHCk7f76ARLAGnEk4BQlZQBrZvXbfCIXBeR1SIjIthk1fK8Zxj%2BVf8n%2Bl14QPPsaYlEkryH%2BkdV6DOLkstqDEr5NITsvir1ElMNam1c8GOqUBgHm%2F6GdtSXik16AnNU540a1vixDuFPvpxV6h7Fsmfq44m1GXhLY%2BUTJ6lSGRwSpYXxnga76rG0%2FK65kKHaqxnx47D%2FLEZPiz9TUiZvyvqWI6CgEpY3Bj285aE3aVjXgWBjxWC5ovHpiyIhxF9a7e00lK2CtY13FLIwLG8eLvAZW3YYVqF2IYWv44H%2B44lrBQ7le998doc5A%2F7QZLjGnRFjFXl8Qp&X-Amz-Signature=4a6c3177f21f3a478f5019cb71368febdc0d874eb6426cfaa5f79546cc90e96b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6Y7XXWO%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDDBkZbewWYQT618J1ZrfT1a%2FQkv65NiOTC6%2B5x%2BeCx7QIgGUQw9eQ%2BgDf1oLT3Rjy0jEy3hQoywVOEZdBzd0CDk5Iq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDD%2FXpavjlyMozM4VlyrcAygxOXuKO1VBGaBGakuN%2B7CwyaPTSq0%2F%2F3h%2BV6jlHwSBXEjuQzI%2BeOsjnY64xEnD6bAWLF8IpU2Tlx4B7tGD3NjK9KYtSMozYUaRbtZtt60yr7aSLScgKW7giefrnFECj7AKY%2BJDL%2FAj9FLHVkcqkqWYUMUFzEoZMO7e%2BjRWoOSSUkQYuWmi16b4yo3PJGuBZFiOjMi8ETNIk5iE%2FC%2Bf7ePBke1sNH5SUhI983yNgKsO%2BZuhYoxJ%2Bi79alQNyu3mXRdFM4njr9EmeSMK6b1Jp3up57%2BZnpKXak4oow1cZWZNDd%2FDvPRbyPKfDJiuRMy8QE2QZpz%2B9HZh4A67AyNsMWkDtFdO9bdSMUh1VpInZMIi81FgTBygxi%2BGsa0eDj6qB6ZGnjCOM3bL8evXYqvlTC6W0NX7%2BmlhE1xOuOKoe5TvByyv8Y8kU2T%2BWPEuKCy6zzZfNY9w0lIZ1D9TRsoUAN52pt7pnaqc9SUzXQBHAeCZHjoN35DGdj%2FKLnyNgLlgO%2BAVvfLTXD9u0jNXqnRsJBkeOMVqHCk7f76ARLAGnEk4BQlZQBrZvXbfCIXBeR1SIjIthk1fK8Zxj%2BVf8n%2Bl14QPPsaYlEkryH%2BkdV6DOLkstqDEr5NITsvir1ElMNam1c8GOqUBgHm%2F6GdtSXik16AnNU540a1vixDuFPvpxV6h7Fsmfq44m1GXhLY%2BUTJ6lSGRwSpYXxnga76rG0%2FK65kKHaqxnx47D%2FLEZPiz9TUiZvyvqWI6CgEpY3Bj285aE3aVjXgWBjxWC5ovHpiyIhxF9a7e00lK2CtY13FLIwLG8eLvAZW3YYVqF2IYWv44H%2B44lrBQ7le998doc5A%2F7QZLjGnRFjFXl8Qp&X-Amz-Signature=b9e8b82b5be6233d4df515d4a3f12f466bb947f9c8bd7724022c4921ac8181f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
