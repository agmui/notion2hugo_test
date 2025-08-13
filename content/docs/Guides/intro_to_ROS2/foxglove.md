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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LS555SS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp9KCBbgpZeQpFiDZc4%2FxI3wGi96xHaDFJGDdhEEUwvAIgSLfMh1VE66mlqxpxhe8Ctj4wJQQdN2o46ziyarPsHqYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDDcS9yP9zVGnVo5WKyrcA%2BvpEANktOoNEaVdWIVNgpq3xDdGhNTIRQ94rIXzbeXkpUhnUVLqRrfuTga1z8cP2mPB0uxzAFjyCS28C8DH8RvcUUJy5oDo2kt7%2BkejowoOnY5UH9hvN3CgB0RJkChl7HDwQo0mmy1flR7wDzKGGXBPTQTFcF1FVYrzpqIzSEKbpB1TyJLjSBiQfTKROxHJe0rG7KV%2F4XMrEOGzXIdfBvbz9%2BaM9FxK9tbE103z43bRPDOtF19wRoE6KdQIDI8EL%2BVmIFmuON%2FQQqFIpHqj1YJeF5dg3VMDChe8oKaYAXg9p5u6RUKheBkLtvWmVmFXfx2Nne9WaVICdbUk8JQDANGz%2Bh68%2Bs1%2FBsIBRdlZ3YUJviw%2BHB1EGxml2TvczZlnhkRtj0wSV9vGrvqk%2Fj5yxS8hU%2FBX0o3W82O2q5lzC0k7s0gPE3eCZlbXPjQt7LG99P06tFshbQJvVgi7jILdD91DRejcZBAM2MT2ISHITBEsvJR7LIXDDi4URDK9gqzPWL70Xlrp4nSk4LcnwWxb4K9UgX4BSMieCXlC8VMBJJpSX6lF%2F7NIrMx%2FQfdDoaKu62EiAuMID%2BH6CHyOI8hAbeQKTzyY03woe7PDsmT9p3sri%2BNV3weKxuNDkbuLMKnG88QGOqUBcG2oad8V%2BfaU5fbPhBiFSQZmiZU%2BOQ%2Brrvg355TvAqmtp9OFg691lTPO8vgvhVzpFJQlXTG5Fng4LPvr38gZJx80QyMoV%2BikGNT%2B0u1TwoVbHZeTI9xm7hqxgVZPO3%2Fi1WRJEOT4%2BgsSYmPcfKqNN5I2Wku4n3r9ILy4HaRg1SeUPZ%2FTC8I41Moohwl%2FBlIXT%2ByA5fScJJQ9lZtnpB1OFh1qB1xi&X-Amz-Signature=2fc1b22259bba185e6680b2fe2e4182df56349af1a0281fe0aef04fa96e9312f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LS555SS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp9KCBbgpZeQpFiDZc4%2FxI3wGi96xHaDFJGDdhEEUwvAIgSLfMh1VE66mlqxpxhe8Ctj4wJQQdN2o46ziyarPsHqYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDDcS9yP9zVGnVo5WKyrcA%2BvpEANktOoNEaVdWIVNgpq3xDdGhNTIRQ94rIXzbeXkpUhnUVLqRrfuTga1z8cP2mPB0uxzAFjyCS28C8DH8RvcUUJy5oDo2kt7%2BkejowoOnY5UH9hvN3CgB0RJkChl7HDwQo0mmy1flR7wDzKGGXBPTQTFcF1FVYrzpqIzSEKbpB1TyJLjSBiQfTKROxHJe0rG7KV%2F4XMrEOGzXIdfBvbz9%2BaM9FxK9tbE103z43bRPDOtF19wRoE6KdQIDI8EL%2BVmIFmuON%2FQQqFIpHqj1YJeF5dg3VMDChe8oKaYAXg9p5u6RUKheBkLtvWmVmFXfx2Nne9WaVICdbUk8JQDANGz%2Bh68%2Bs1%2FBsIBRdlZ3YUJviw%2BHB1EGxml2TvczZlnhkRtj0wSV9vGrvqk%2Fj5yxS8hU%2FBX0o3W82O2q5lzC0k7s0gPE3eCZlbXPjQt7LG99P06tFshbQJvVgi7jILdD91DRejcZBAM2MT2ISHITBEsvJR7LIXDDi4URDK9gqzPWL70Xlrp4nSk4LcnwWxb4K9UgX4BSMieCXlC8VMBJJpSX6lF%2F7NIrMx%2FQfdDoaKu62EiAuMID%2BH6CHyOI8hAbeQKTzyY03woe7PDsmT9p3sri%2BNV3weKxuNDkbuLMKnG88QGOqUBcG2oad8V%2BfaU5fbPhBiFSQZmiZU%2BOQ%2Brrvg355TvAqmtp9OFg691lTPO8vgvhVzpFJQlXTG5Fng4LPvr38gZJx80QyMoV%2BikGNT%2B0u1TwoVbHZeTI9xm7hqxgVZPO3%2Fi1WRJEOT4%2BgsSYmPcfKqNN5I2Wku4n3r9ILy4HaRg1SeUPZ%2FTC8I41Moohwl%2FBlIXT%2ByA5fScJJQ9lZtnpB1OFh1qB1xi&X-Amz-Signature=9612916cd24b2f0642a9be9d786e41964c4bbe734217b6c7fc64902c4db36c9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
