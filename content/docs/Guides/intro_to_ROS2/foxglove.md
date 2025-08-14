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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOGBYDC3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDl9MQRo1a1YKMK3Pz%2FHNpcmQuGw%2Fen1UCxKo4EZQ1AwAIhAMoCP4PBOXSajr8G09zDpvLDR6Nm0Pg040BnV7nq1acMKv8DCE8QABoMNjM3NDIzMTgzODA1IgxY31msePFgWRzvjWkq3AORP3twlcrnGwOSBwwzB7IhDHmCHJMRRs%2BIPpH5MqGkoRET%2F8y%2Bujsc480MEkQofmCoEtVvKEj4K9m%2B%2FE0gSdT1sF6nCsUyBtDqZc8AI%2FDY8ZdWkFGHGFH8kCCdnT47u%2BJTGpT3%2FPu0U5yV6REB9a9A%2FZQs5d9O3IsOq%2Fir%2FDdQMuh0U7vxDENIyZi55rbBBmqiX%2FKT2DmlOpfEeNr9N0dJoUZn3h7Ob1ZUMJeaC6CwQyd5Lja9B9DaIBqqMXmTw9XeEZ2tj3S16aotezmCriWnkXzzciddP%2Fcd3ZJ7YhUMl29lb5l2R2%2Bgby5Evm8P%2Bma%2FjlTpz6i5b2wAVS2t4u35nNK%2FBPIOo21Ukz02InvTaLzi1QuvqOPqC4l44ex%2FczPnsly0Ib%2BBBj4vFzyvQTMc%2Ft5zKqZpKMSM9Xitho01FL4QLjwbzpU2P7lF2bdofKJga%2BQ0SAZSe6ni06WM00n6Reffi3XvipUMFLbaV4ZbLmc7mGCWGDfDN7K7GlrFVdE%2BwatNRE73nzhdJnvlR6bmziK2C4V%2FMPNZ6lN2BzJqQSBZgbo1SYUCx%2F0ZMnBZzTy1xY0gYE8s8A31Fl2F%2Fn9Av%2BkbhPDZ6%2Fv%2BMFsgvx6RQVeIaQEpL1KuqxKGHTDesvnEBjqkAehwk3Rs8AuNHmifHswfsVprbNaS1omSL8eTHrSZVuq%2FOJOiHEFLaKa0a2QxRx9N4BqWgKUZPe8jmrhKw6a4OloTCyWyqi0XVK%2F8bzS81MvwJD1UBt4CUsa%2FZTwrOytRWG9li3nhi23F%2BcSkDO2DISFZSQa00rHQasWRJpLMImzT%2FP42cQhfXef7Mdk%2Bd%2FUoabSm3uwP2fFcTy7Dh%2Fr6WZJbXFdy&X-Amz-Signature=ce0b995e1fb89b3275301d4ec8410bc1942dfb6e848fc7503d3a33340beb7cae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOGBYDC3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDl9MQRo1a1YKMK3Pz%2FHNpcmQuGw%2Fen1UCxKo4EZQ1AwAIhAMoCP4PBOXSajr8G09zDpvLDR6Nm0Pg040BnV7nq1acMKv8DCE8QABoMNjM3NDIzMTgzODA1IgxY31msePFgWRzvjWkq3AORP3twlcrnGwOSBwwzB7IhDHmCHJMRRs%2BIPpH5MqGkoRET%2F8y%2Bujsc480MEkQofmCoEtVvKEj4K9m%2B%2FE0gSdT1sF6nCsUyBtDqZc8AI%2FDY8ZdWkFGHGFH8kCCdnT47u%2BJTGpT3%2FPu0U5yV6REB9a9A%2FZQs5d9O3IsOq%2Fir%2FDdQMuh0U7vxDENIyZi55rbBBmqiX%2FKT2DmlOpfEeNr9N0dJoUZn3h7Ob1ZUMJeaC6CwQyd5Lja9B9DaIBqqMXmTw9XeEZ2tj3S16aotezmCriWnkXzzciddP%2Fcd3ZJ7YhUMl29lb5l2R2%2Bgby5Evm8P%2Bma%2FjlTpz6i5b2wAVS2t4u35nNK%2FBPIOo21Ukz02InvTaLzi1QuvqOPqC4l44ex%2FczPnsly0Ib%2BBBj4vFzyvQTMc%2Ft5zKqZpKMSM9Xitho01FL4QLjwbzpU2P7lF2bdofKJga%2BQ0SAZSe6ni06WM00n6Reffi3XvipUMFLbaV4ZbLmc7mGCWGDfDN7K7GlrFVdE%2BwatNRE73nzhdJnvlR6bmziK2C4V%2FMPNZ6lN2BzJqQSBZgbo1SYUCx%2F0ZMnBZzTy1xY0gYE8s8A31Fl2F%2Fn9Av%2BkbhPDZ6%2Fv%2BMFsgvx6RQVeIaQEpL1KuqxKGHTDesvnEBjqkAehwk3Rs8AuNHmifHswfsVprbNaS1omSL8eTHrSZVuq%2FOJOiHEFLaKa0a2QxRx9N4BqWgKUZPe8jmrhKw6a4OloTCyWyqi0XVK%2F8bzS81MvwJD1UBt4CUsa%2FZTwrOytRWG9li3nhi23F%2BcSkDO2DISFZSQa00rHQasWRJpLMImzT%2FP42cQhfXef7Mdk%2Bd%2FUoabSm3uwP2fFcTy7Dh%2Fr6WZJbXFdy&X-Amz-Signature=fdefe10bb15a447101452e93f245c38112f89792e8316cbceea4b823fa0aeaa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
