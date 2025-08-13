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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXPA2M35%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaxVw00r0ogy6TqF0FfZMoNFaGXir79eBNGCTHHUdTtgIhAJpJd8TnlH7LqSVs6USzUO5ce1plvX1cm7IUMZZ7LvC9Kv8DCDMQABoMNjM3NDIzMTgzODA1IgxlWTOsUpCaHZvO1fcq3AMsl2ihbVVaOw4H%2FIXi5TxpcR1BmkMO%2BNBsLoUU1giutgBLdujDEcXRLmodt%2BgpayFcMqcTU44tfuuEKm6osJJEqyIpDj8CkjbdksQ8pHe6qT30T0j7qZufkBgo1NjoB01ADu5DEbi5y%2FPMb8DvRG2PEbX6rnEryN4QAESMFpNJNPxig5dNo2EhPab1bJWItUq%2F0nLsEMHXGfWvA2AliwYP%2F%2BO82xKUKR70o8%2FFNkLEHukhrm12mLRzOGYzQ8VqTVUStpYVq9D77eRbm1v8lW2EnQmO3g7tHL4fjty5hHhbfUJg5sO6BqEFK6BV5uV1VHpolyWUAlEFCmywPQi0Gb46%2B6ZMrEwv0yZtScKCaXDAI0Uiija6ecQ0Sr1QJnZ3hnqtlLzBFuaSF1oWwkxnM%2FKYlJD%2FzUYpOnUnfjFByqc07FqB3lxA1fdxPeh8Qo1d1bAApVlPDUMtbc53Tg%2FUesw%2Fp8jskgFvuHpyWUG5sLKynqI8i0UV6ma%2BvEAjAXejWqp%2Fm7buysRRzH3TZPcvtNELQOV8SnFLUfxAIxM4xHoGPfgfBbCDi95E4SAO%2FpdkqgfeRMW7UOBG9dyARtZZuT6lUMh9shiW2ZHxPFbCcd3I%2F82rKYvOYTR54JnCbjDNn%2FPEBjqkAV0ozXZPBaW3xdKPfnj4Rjp9fgehjmVt5%2BTyV80bGXTA%2F7Zl0%2BXZFXmAYruTc3eMTL%2FQ3Ba3pH%2FnkQtjEQ1ZORn7Gfmsa9cGOhUS7ZBOPaB9t9ig9NvB2axQaX8E9P79PMzsAeHlDTyAhgX9PEfRrVTlpRtI6%2FiG5F5zmM1TbSAO9qbcEfudndwYQf40p9z%2BzMNJbqBPl8ZuzrNKeMz3IbGURqi9&X-Amz-Signature=df8bf1f0cb952995efe64a19e0e46f2f06ae98aa680c847e8215834dbdbf1478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXPA2M35%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaxVw00r0ogy6TqF0FfZMoNFaGXir79eBNGCTHHUdTtgIhAJpJd8TnlH7LqSVs6USzUO5ce1plvX1cm7IUMZZ7LvC9Kv8DCDMQABoMNjM3NDIzMTgzODA1IgxlWTOsUpCaHZvO1fcq3AMsl2ihbVVaOw4H%2FIXi5TxpcR1BmkMO%2BNBsLoUU1giutgBLdujDEcXRLmodt%2BgpayFcMqcTU44tfuuEKm6osJJEqyIpDj8CkjbdksQ8pHe6qT30T0j7qZufkBgo1NjoB01ADu5DEbi5y%2FPMb8DvRG2PEbX6rnEryN4QAESMFpNJNPxig5dNo2EhPab1bJWItUq%2F0nLsEMHXGfWvA2AliwYP%2F%2BO82xKUKR70o8%2FFNkLEHukhrm12mLRzOGYzQ8VqTVUStpYVq9D77eRbm1v8lW2EnQmO3g7tHL4fjty5hHhbfUJg5sO6BqEFK6BV5uV1VHpolyWUAlEFCmywPQi0Gb46%2B6ZMrEwv0yZtScKCaXDAI0Uiija6ecQ0Sr1QJnZ3hnqtlLzBFuaSF1oWwkxnM%2FKYlJD%2FzUYpOnUnfjFByqc07FqB3lxA1fdxPeh8Qo1d1bAApVlPDUMtbc53Tg%2FUesw%2Fp8jskgFvuHpyWUG5sLKynqI8i0UV6ma%2BvEAjAXejWqp%2Fm7buysRRzH3TZPcvtNELQOV8SnFLUfxAIxM4xHoGPfgfBbCDi95E4SAO%2FpdkqgfeRMW7UOBG9dyARtZZuT6lUMh9shiW2ZHxPFbCcd3I%2F82rKYvOYTR54JnCbjDNn%2FPEBjqkAV0ozXZPBaW3xdKPfnj4Rjp9fgehjmVt5%2BTyV80bGXTA%2F7Zl0%2BXZFXmAYruTc3eMTL%2FQ3Ba3pH%2FnkQtjEQ1ZORn7Gfmsa9cGOhUS7ZBOPaB9t9ig9NvB2axQaX8E9P79PMzsAeHlDTyAhgX9PEfRrVTlpRtI6%2FiG5F5zmM1TbSAO9qbcEfudndwYQf40p9z%2BzMNJbqBPl8ZuzrNKeMz3IbGURqi9&X-Amz-Signature=3579cbf91a2111d83493f0e2ae9f906e3f2e0eb3b82ecdaf1ebd6ce76b39e59f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
