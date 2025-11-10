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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEPVO222%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCICPY48HGlM%2F5vqianK6aynune145Jsk%2BgOmQ0zu4QMz2AiA2zaCKzCygdCNCfOSgE4tpA7HpO0DJsHy6GCnY6pgxViqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMInaqNwmvudlFu3BXKtwDYhq2Vsx%2FH9Ev8mAtTTXuQ8hS3NbGoc11Ru%2BLbskOZnp1bXkQDVfsvS1nl60bw68FswpTk%2BcrDnsLVR0q4pZQTCR3c0VTvc4BDR9fshNwxZQNSs%2FfxXAWCBWzGejtQ02lHmqdYoj4r0SujLYGmgRod%2BljGPHSrl9zQCxamxh29Dn0zm5Myzx30zakNIItwn6CYmcM4RVLNXHFdf%2BWkmVzZXizQBp%2BNw9s71rJCe%2B%2B%2FSBfAeQ91Kwpi2yLE9J%2FEYXDpyqlctAZqy9KkuAP%2BsVuenThRBm%2FXUbR2RVhEcz9jYTbytoE4afYLzqkKbzBihnw2A%2F5DEHCTzEoPMJHDoayd0dxBJ3jsoturqJa7VnAtTWey8Sr3UVJnj8F5YDEl9AeQZ5Y%2FvA0IP0gGTYTCJMO1p4Ia4rcawSzbgaI%2FkYZUKl7QF%2BKyfgFVxC%2Fo0ez2UE%2Fa9OhbZt%2Bvv1cLQo2pRbzZVt%2F1%2B0vBDTaGv5qio6Q9n6H%2BCAgaFdUNodhF9971o2fE4m83i6pSkgbQUxfJtb%2F3pU3S9ld4l2wI1GKiv5mvZqMc97pRrhXizESBy%2F2CwoxQ3V4ZGMWeQ6isExdGV7g5zzxG4YeJTQhOVG9G9a%2FIWdMaDxGpYbn05RX9Xkw1rrEyAY6pgGUmh5H7Gz1XDcWjQVnz6PvWyperGVXL5uIF3wfMtAKu%2FdLrn7hX1fhR8HY5C1rbQ4LAU3AVdSAVG0nZ2%2BQHFnrDfzz%2B7qtoJT1JQj5VLcamid9p1lSVOxH%2BlU1BdMwdQNQacmKQU6DcxFOT5am72rAq8JS0mcAzul8ZqamAtvQP1ZuYKulH%2BcELhL%2BeGnf32zgDBahsTSlJ7n2mCpoGbyInKQ9uvGz&X-Amz-Signature=f0552d7e0161e6acd8b0bc785907c7f7b897bf3c467bb8bd01a4531a154c486c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEPVO222%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCICPY48HGlM%2F5vqianK6aynune145Jsk%2BgOmQ0zu4QMz2AiA2zaCKzCygdCNCfOSgE4tpA7HpO0DJsHy6GCnY6pgxViqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMInaqNwmvudlFu3BXKtwDYhq2Vsx%2FH9Ev8mAtTTXuQ8hS3NbGoc11Ru%2BLbskOZnp1bXkQDVfsvS1nl60bw68FswpTk%2BcrDnsLVR0q4pZQTCR3c0VTvc4BDR9fshNwxZQNSs%2FfxXAWCBWzGejtQ02lHmqdYoj4r0SujLYGmgRod%2BljGPHSrl9zQCxamxh29Dn0zm5Myzx30zakNIItwn6CYmcM4RVLNXHFdf%2BWkmVzZXizQBp%2BNw9s71rJCe%2B%2B%2FSBfAeQ91Kwpi2yLE9J%2FEYXDpyqlctAZqy9KkuAP%2BsVuenThRBm%2FXUbR2RVhEcz9jYTbytoE4afYLzqkKbzBihnw2A%2F5DEHCTzEoPMJHDoayd0dxBJ3jsoturqJa7VnAtTWey8Sr3UVJnj8F5YDEl9AeQZ5Y%2FvA0IP0gGTYTCJMO1p4Ia4rcawSzbgaI%2FkYZUKl7QF%2BKyfgFVxC%2Fo0ez2UE%2Fa9OhbZt%2Bvv1cLQo2pRbzZVt%2F1%2B0vBDTaGv5qio6Q9n6H%2BCAgaFdUNodhF9971o2fE4m83i6pSkgbQUxfJtb%2F3pU3S9ld4l2wI1GKiv5mvZqMc97pRrhXizESBy%2F2CwoxQ3V4ZGMWeQ6isExdGV7g5zzxG4YeJTQhOVG9G9a%2FIWdMaDxGpYbn05RX9Xkw1rrEyAY6pgGUmh5H7Gz1XDcWjQVnz6PvWyperGVXL5uIF3wfMtAKu%2FdLrn7hX1fhR8HY5C1rbQ4LAU3AVdSAVG0nZ2%2BQHFnrDfzz%2B7qtoJT1JQj5VLcamid9p1lSVOxH%2BlU1BdMwdQNQacmKQU6DcxFOT5am72rAq8JS0mcAzul8ZqamAtvQP1ZuYKulH%2BcELhL%2BeGnf32zgDBahsTSlJ7n2mCpoGbyInKQ9uvGz&X-Amz-Signature=254a2f41be48a5b6c0da9ffec28a4d47f6e6f24626c71c388c535f0af6eb5971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
