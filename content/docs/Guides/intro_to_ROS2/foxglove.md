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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYLPEAXR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCICzmKikLiTkIqAo8hn4bIcT7%2BxuAVV7ffuQ1jo%2B5Gi7CAiEA2MQ7pJCfwg9IdbiweGkjVv1eJIWqq2l2szbSS9tTI2wq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFKMPfxhO9kjj0U0iSrcA9fVb%2B1CHxh4cQqTENDHmW8LN16SqzDE9%2F864KLfbTmDAl9ima34r7v6XUwKtFSKSoCWPoFjPswFo4rY7Xy5WdpISQgUAnlSZvZqOYtm7jFfPNMt6AWc0V6Jgv15%2FoM0bOJlDVRH6ML4ZLw%2F7Wjb0Ng8mZfLRZd9CIGSgxSJX9oKDahXn1tlTj%2Ba3QPtYi9FXc%2FUgXosk%2B%2Fmh46aq0eFl3MkkILVIKlZeJbGhgMZ5Czkt5oWMwcfEdZIA6yGauJ9yYaJfNeqZYgv8XwrY4x3EtKqf0eRmsnn19BnHKd4eKfza2uagece7WbD%2F1Ahj9L99ijI4h%2BJZvS5hvboFtuFx4Ot2hZTy5ww%2Btl5Ssqhy%2FBxhHmEp4FpH4JHFdZny20VEcLYKztB1j%2B67Bjn5RvNnlFhckNlMBdkBnVeVwhZKPATeLkgY%2B%2FX1jm0wIe7mSxwPVLf6SOn7g2xgqF6omppyWVkKb%2BcYkar%2B5OsYdcVBj1JQraMhryolalaP8B4lokTiGMWc810BeUKv9Oem1VmoTqW217H90qYNzKWaBMuDNg69fSBdpTmj206JSv%2B0c1uK2L8N4UyzynkniQ6zDMyVn9IEBjeURzdL2XU%2Fdm0YJFUFWrEkjamGgesG1oVMP%2B2%2FMQGOqUBKS9xxUTLXc1ejxF2J1s4woXq%2Fb8vnSr8K0heZ9s%2Bt2tAXFwuMqB0GmJeMg%2FX%2FdeSiTLL6wdBTKcpeGfRZbT8lE8QEufqFlswo8CbxbQ7Nw5OJvgoqmjq%2BO3Fx2gGjukefEoGVQQqhItXJitarkl%2BhzFwCnIpHsslXh48hqxxZEMUumLeqCFTGZgymIRv4AXytL%2FqoJE4qEt4VCillu11Jzn%2Fey8E&X-Amz-Signature=4cfa7443129292bc8c08c9b02698fde49b5bfc562168bf7bdf2d0bc278805b91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYLPEAXR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCICzmKikLiTkIqAo8hn4bIcT7%2BxuAVV7ffuQ1jo%2B5Gi7CAiEA2MQ7pJCfwg9IdbiweGkjVv1eJIWqq2l2szbSS9tTI2wq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFKMPfxhO9kjj0U0iSrcA9fVb%2B1CHxh4cQqTENDHmW8LN16SqzDE9%2F864KLfbTmDAl9ima34r7v6XUwKtFSKSoCWPoFjPswFo4rY7Xy5WdpISQgUAnlSZvZqOYtm7jFfPNMt6AWc0V6Jgv15%2FoM0bOJlDVRH6ML4ZLw%2F7Wjb0Ng8mZfLRZd9CIGSgxSJX9oKDahXn1tlTj%2Ba3QPtYi9FXc%2FUgXosk%2B%2Fmh46aq0eFl3MkkILVIKlZeJbGhgMZ5Czkt5oWMwcfEdZIA6yGauJ9yYaJfNeqZYgv8XwrY4x3EtKqf0eRmsnn19BnHKd4eKfza2uagece7WbD%2F1Ahj9L99ijI4h%2BJZvS5hvboFtuFx4Ot2hZTy5ww%2Btl5Ssqhy%2FBxhHmEp4FpH4JHFdZny20VEcLYKztB1j%2B67Bjn5RvNnlFhckNlMBdkBnVeVwhZKPATeLkgY%2B%2FX1jm0wIe7mSxwPVLf6SOn7g2xgqF6omppyWVkKb%2BcYkar%2B5OsYdcVBj1JQraMhryolalaP8B4lokTiGMWc810BeUKv9Oem1VmoTqW217H90qYNzKWaBMuDNg69fSBdpTmj206JSv%2B0c1uK2L8N4UyzynkniQ6zDMyVn9IEBjeURzdL2XU%2Fdm0YJFUFWrEkjamGgesG1oVMP%2B2%2FMQGOqUBKS9xxUTLXc1ejxF2J1s4woXq%2Fb8vnSr8K0heZ9s%2Bt2tAXFwuMqB0GmJeMg%2FX%2FdeSiTLL6wdBTKcpeGfRZbT8lE8QEufqFlswo8CbxbQ7Nw5OJvgoqmjq%2BO3Fx2gGjukefEoGVQQqhItXJitarkl%2BhzFwCnIpHsslXh48hqxxZEMUumLeqCFTGZgymIRv4AXytL%2FqoJE4qEt4VCillu11Jzn%2Fey8E&X-Amz-Signature=5e2dcdb9f85ff73cfd03d5bf1acf40d1a3b1f81ffe64730aae8c1dce5f3230b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
