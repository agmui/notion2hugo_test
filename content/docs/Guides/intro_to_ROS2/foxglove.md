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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DURBM3G%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIDKzl%2FL84kYwo6W3IZ7skIpPhtdEDTZvXGVNxeu4LnUaAiAUXm0Edn341BYzvBDhaY4c4fldVxxR1l3t1ybuciHmOir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMySrz6KwFy80XD%2FzjKtwDCnirIbdxJ1U1%2B3Eq9Y46fBS9FhwHWtjpRff9nWhawiAbW4O1W%2FExE6ynFoaSNonK%2BIXLMw8q5z%2B%2BI0onf19AmCxoiHQJ62Xk6ffrW199NkB6N9pXWeEAvAR0UwSEzXjwGlLbcXVHREtmNZG1%2FCiAYbuXGxNPN9kdHU7p6WTU%2BjvOOED%2FRLflX9BdoFG3tGfxYR2pjb2s0K7eIgFJpS8XFgJ0iBLxv0T6b8XqONoGfyVFdEsMhi3oGRlABU79fOS%2BLtntdPWZ4O3ohiWqhrECb%2Fz0M%2B%2F1FdP6hKkp3BJhGQc7XgZptG0D11B36K5vkiRn5bXY5goeMDePW8BIbQjyNnUkcbdQXNG4v5Bd1C7M6EaNeq%2FwEtttdsJqprbmjzslIlj1Js5LHGp%2FPa3mBK1%2FifaCAwddrq%2BeG47I%2BBwhdV0YHr3NTnLpn0zF6jyuczX1zCzJAGwnXQytE%2Fj6%2BkjekLhw26Z5mf8IE4O1n6iN3KWRlyqQUw8HajpC%2Bzv5aptFtGazMZTa06bWyhGgsMg8tahCyaqmoWZcTBomsJ9TTh7Pjvzj9bNBUa6Q5WIYufmZ%2FNgPE17szR6cy5S9%2FmjkUzCZxhNE0iIu%2Fw2%2BVx85U6S0O5ThqJ2TJUWatzgwodr9xAY6pgEiIHZ9egb%2BUhL4lFiih%2FmMR4FQgOlsjh2vephwI41Z7g2iPksYGVKedh6FMG%2BxRKRwa8kB2a51RyNpYN6VN6fWoYQDSonA1S9KKdax%2FLF7RvxDIXIrXGl7GxhbWEL8ugprBMSMM%2BoZXLk4LUxZclxZfQ2hAdz9kYP5voth4q6hi%2BHGKteukkdpNVHbEUUlvuOqxNV88zyeZuJgKvPdMtv1C3nvfHjY&X-Amz-Signature=3c9599d9db33a2c0fd7ddfb4f97142980cfec14919ac53c955eb94ed46cc2657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DURBM3G%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIDKzl%2FL84kYwo6W3IZ7skIpPhtdEDTZvXGVNxeu4LnUaAiAUXm0Edn341BYzvBDhaY4c4fldVxxR1l3t1ybuciHmOir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMySrz6KwFy80XD%2FzjKtwDCnirIbdxJ1U1%2B3Eq9Y46fBS9FhwHWtjpRff9nWhawiAbW4O1W%2FExE6ynFoaSNonK%2BIXLMw8q5z%2B%2BI0onf19AmCxoiHQJ62Xk6ffrW199NkB6N9pXWeEAvAR0UwSEzXjwGlLbcXVHREtmNZG1%2FCiAYbuXGxNPN9kdHU7p6WTU%2BjvOOED%2FRLflX9BdoFG3tGfxYR2pjb2s0K7eIgFJpS8XFgJ0iBLxv0T6b8XqONoGfyVFdEsMhi3oGRlABU79fOS%2BLtntdPWZ4O3ohiWqhrECb%2Fz0M%2B%2F1FdP6hKkp3BJhGQc7XgZptG0D11B36K5vkiRn5bXY5goeMDePW8BIbQjyNnUkcbdQXNG4v5Bd1C7M6EaNeq%2FwEtttdsJqprbmjzslIlj1Js5LHGp%2FPa3mBK1%2FifaCAwddrq%2BeG47I%2BBwhdV0YHr3NTnLpn0zF6jyuczX1zCzJAGwnXQytE%2Fj6%2BkjekLhw26Z5mf8IE4O1n6iN3KWRlyqQUw8HajpC%2Bzv5aptFtGazMZTa06bWyhGgsMg8tahCyaqmoWZcTBomsJ9TTh7Pjvzj9bNBUa6Q5WIYufmZ%2FNgPE17szR6cy5S9%2FmjkUzCZxhNE0iIu%2Fw2%2BVx85U6S0O5ThqJ2TJUWatzgwodr9xAY6pgEiIHZ9egb%2BUhL4lFiih%2FmMR4FQgOlsjh2vephwI41Z7g2iPksYGVKedh6FMG%2BxRKRwa8kB2a51RyNpYN6VN6fWoYQDSonA1S9KKdax%2FLF7RvxDIXIrXGl7GxhbWEL8ugprBMSMM%2BoZXLk4LUxZclxZfQ2hAdz9kYP5voth4q6hi%2BHGKteukkdpNVHbEUUlvuOqxNV88zyeZuJgKvPdMtv1C3nvfHjY&X-Amz-Signature=e43819c3ff9c851a166c0ee0c8bfa8ce3774f05ca59208de9df7bccb46302782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
