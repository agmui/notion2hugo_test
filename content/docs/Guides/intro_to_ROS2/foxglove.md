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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IWEUO4I%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FnO4aR8Q1erfgFB1Kd38m4x0xo%2FKhZUeZlysTNG3NAAIgRdfi3q%2FLpWq2O4%2Bl1kvX6rXz2IFurJAw%2Frn%2F9CZ%2B0vkq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLBimHDGcPbt99up4SrcAzBCPfMVwdCkN%2BRYtgYZlLoj%2Bno851O75s5N0vHjILN%2BpycecLDvQZY%2F1iKq1Beg%2FHQmMIuZfoPGJNc4XpmHL%2FZqWsmhHpPVNtBB2ICEdR4jMaJsFfkJzuZSDdjFuf3WF9CflJ2tAx0vRGxrIxCknagunYml7C%2BdwqRiTEa0vhnxiPKsA0X97QEW%2FSxzHcxXtSie3jp0qcQ4mmEykkz1Ku6cCl63wo6Ai8k%2BWyMpRkvtuV28WU3vTd9u7EJ675V0QC6sQopD53qky9MzaVqTXTVqLGe8%2F1IYx2loFIEF6Wn%2F1jtIQaeQBSqnqzrPkHa9MgrFAOBvmA0qbBFmc14JzIuDtstSqHdUPkupc%2BObQpeEoNkPt8WFTsFGgsQZb4VKJS5uWHA61ApWrrcOJjM3pzfjUE2TXff8E4cSSWX9bZe5jWyEqhTEBE0wmyzLxqNLhbutoukZ8OwpWt3eLmExrsV9Qw1xyxvt690HrtZ57s6YlGdMnp1WV1zNblQh%2FEhhxti21bG8oF%2BVvKtk071AO8xfKXjPN14Lo5XXkQ66C5wJAWAwJSHjhLBlB72c4cTgY82%2B4KSJQBZoMF0BbdATzR2itw1x4QNTWJV6mcoTggWEtjUGAVmmm5ewPMMqMOKE98QGOqUB6UXLG7YESdsPVdQcIfPQ9pIhKSwDDbR1i6mefGgBk4ka1yTMM3Y96aPliEs3ckt%2FlGcLWn0yKKAmUWKzQC5jBCgHtQ9Y1oIGBEpugk3AWxPXJ4r2wbSBpQSWCAp40zDSt3RzDJN1Or5r8qGdZSeNHucWxtHRFXEw1pAdbmIuf6aLx8JiYPhdcwXV8fNhG3c8g2rDKPyXx1ojS6fSKBTBDbiUp%2BgK&X-Amz-Signature=26a24c978f7a1d590aff4af82812ccf2cbdb424e4121584fad0cff8714672d6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Foxglove is similar to rviz however one of its biggest feature is its ability to connect over the internet.

This is nice for wireless robotics setups but still need a rviz visualization.

You are also able to record and play back sensor data and visualize it in foxglove.

## Using foxglove

First make sure you know the ip of your robot.

<details>
      <summary>How to get robot ip:</summary>
      To find the robot’s ip run on the robot computer:
  </details>

For now I recommend using your phone’s hotspot to connect between the computer and robot.

<details>
      <summary>how to connect robot jetson/rasberry pi to hotspot</summary>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IWEUO4I%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FnO4aR8Q1erfgFB1Kd38m4x0xo%2FKhZUeZlysTNG3NAAIgRdfi3q%2FLpWq2O4%2Bl1kvX6rXz2IFurJAw%2Frn%2F9CZ%2B0vkq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLBimHDGcPbt99up4SrcAzBCPfMVwdCkN%2BRYtgYZlLoj%2Bno851O75s5N0vHjILN%2BpycecLDvQZY%2F1iKq1Beg%2FHQmMIuZfoPGJNc4XpmHL%2FZqWsmhHpPVNtBB2ICEdR4jMaJsFfkJzuZSDdjFuf3WF9CflJ2tAx0vRGxrIxCknagunYml7C%2BdwqRiTEa0vhnxiPKsA0X97QEW%2FSxzHcxXtSie3jp0qcQ4mmEykkz1Ku6cCl63wo6Ai8k%2BWyMpRkvtuV28WU3vTd9u7EJ675V0QC6sQopD53qky9MzaVqTXTVqLGe8%2F1IYx2loFIEF6Wn%2F1jtIQaeQBSqnqzrPkHa9MgrFAOBvmA0qbBFmc14JzIuDtstSqHdUPkupc%2BObQpeEoNkPt8WFTsFGgsQZb4VKJS5uWHA61ApWrrcOJjM3pzfjUE2TXff8E4cSSWX9bZe5jWyEqhTEBE0wmyzLxqNLhbutoukZ8OwpWt3eLmExrsV9Qw1xyxvt690HrtZ57s6YlGdMnp1WV1zNblQh%2FEhhxti21bG8oF%2BVvKtk071AO8xfKXjPN14Lo5XXkQ66C5wJAWAwJSHjhLBlB72c4cTgY82%2B4KSJQBZoMF0BbdATzR2itw1x4QNTWJV6mcoTggWEtjUGAVmmm5ewPMMqMOKE98QGOqUB6UXLG7YESdsPVdQcIfPQ9pIhKSwDDbR1i6mefGgBk4ka1yTMM3Y96aPliEs3ckt%2FlGcLWn0yKKAmUWKzQC5jBCgHtQ9Y1oIGBEpugk3AWxPXJ4r2wbSBpQSWCAp40zDSt3RzDJN1Or5r8qGdZSeNHucWxtHRFXEw1pAdbmIuf6aLx8JiYPhdcwXV8fNhG3c8g2rDKPyXx1ojS6fSKBTBDbiUp%2BgK&X-Amz-Signature=b6d72a38f6fbf473e0297085fd31601e98e4b65b0b741c12070fc2dea58306d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
