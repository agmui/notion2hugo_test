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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPNGMAO3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T141003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEBxZVCHpo8dBGKNoRk4ifsjUSO25wcirBmFbwK6XxRyAiEAvNOEvenhaWq8MJZIyaddFE9L6OJPqr5ao0LUHG6f%2B50q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCyLzNMxHxSHbuWAQyrcA7eCl2tf7pham%2B0hmJmHIM%2BRjeq9K5XXSSgs5iJReK2d7FqCa7DvbJHohoU1L9umw7%2FSjSyCHXPCh5MET5LHTShHTyOpTi8ZVXqXZfzLMpRzELa99R1tn2p9MQzuME6glFlkYAygB42DXMhuc1WdQlFl1SI3Y%2BVcjh7QZg1jjOtafDumCldWw5uWNPPQoTuEFagM4bliG8PCkQ9FZ%2B6occ39tujxWHp6g1AqqPtsEa8SG3xRuUreriIIKRGKvF9t5LQmXeuNMWJpCytw%2BXe0Og18GV%2Bb9X3G7fgWsh51cJ35ksZHjz0LpBKO6vRlbvsi%2FQU6gPV0etCF7OLRkZT9%2F5fNqTG1bq4a0XfaQ8KRLTyt%2FgVcUdVgOVDcSSXWv5DFUmM6u4RIYuSnTKsPzJ6dSm3VucHqptGgmfZxA1MpC4cs3RG8vgD7REAhlnbvy4iCLzbO1SJLZd9ZkkYj%2FKnYsXWdI3buo1%2Fn4ls5Ze%2By4D1eOh9l4rQtifTBm6l4KibYd0%2BSe8jpt7RNxS6cszc076%2BqRK%2FvkRO4mmqX8HwHYlvbPW9aN06pW9MJSW8%2FLbqwFzzLZ1MjzTxiv1poMNF23r9HrGg67t5DOtJcIWZ29jvrXug%2Fxgpnqj9g0cBkMLK3%2FMQGOqUBbJwkWjDfe1lL%2BbVzLOiTsYzXDE2p7KV0mofJT2FbKD7r1IQ8QEXQMY3p8r2KUk7ltRkS%2Fd5DlSNYMyNat7bnJfWmvStP7J02KBi03%2BzqvCTzceNxkDA4OTCHX5YI03kd6g8f8dE33z9Hxd%2BR%2Fdvle1eIyQ8p1djIYW%2BdskwL4QuTUJGZqW9NfEHU3YX6SheLqC9DiVYfAutRil0FAvVyyxMfSTAU&X-Amz-Signature=87d8333a00a1036aa9f506af700a2a240144c75e604e89f15b70fb27cb29cace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPNGMAO3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T141003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEBxZVCHpo8dBGKNoRk4ifsjUSO25wcirBmFbwK6XxRyAiEAvNOEvenhaWq8MJZIyaddFE9L6OJPqr5ao0LUHG6f%2B50q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCyLzNMxHxSHbuWAQyrcA7eCl2tf7pham%2B0hmJmHIM%2BRjeq9K5XXSSgs5iJReK2d7FqCa7DvbJHohoU1L9umw7%2FSjSyCHXPCh5MET5LHTShHTyOpTi8ZVXqXZfzLMpRzELa99R1tn2p9MQzuME6glFlkYAygB42DXMhuc1WdQlFl1SI3Y%2BVcjh7QZg1jjOtafDumCldWw5uWNPPQoTuEFagM4bliG8PCkQ9FZ%2B6occ39tujxWHp6g1AqqPtsEa8SG3xRuUreriIIKRGKvF9t5LQmXeuNMWJpCytw%2BXe0Og18GV%2Bb9X3G7fgWsh51cJ35ksZHjz0LpBKO6vRlbvsi%2FQU6gPV0etCF7OLRkZT9%2F5fNqTG1bq4a0XfaQ8KRLTyt%2FgVcUdVgOVDcSSXWv5DFUmM6u4RIYuSnTKsPzJ6dSm3VucHqptGgmfZxA1MpC4cs3RG8vgD7REAhlnbvy4iCLzbO1SJLZd9ZkkYj%2FKnYsXWdI3buo1%2Fn4ls5Ze%2By4D1eOh9l4rQtifTBm6l4KibYd0%2BSe8jpt7RNxS6cszc076%2BqRK%2FvkRO4mmqX8HwHYlvbPW9aN06pW9MJSW8%2FLbqwFzzLZ1MjzTxiv1poMNF23r9HrGg67t5DOtJcIWZ29jvrXug%2Fxgpnqj9g0cBkMLK3%2FMQGOqUBbJwkWjDfe1lL%2BbVzLOiTsYzXDE2p7KV0mofJT2FbKD7r1IQ8QEXQMY3p8r2KUk7ltRkS%2Fd5DlSNYMyNat7bnJfWmvStP7J02KBi03%2BzqvCTzceNxkDA4OTCHX5YI03kd6g8f8dE33z9Hxd%2BR%2Fdvle1eIyQ8p1djIYW%2BdskwL4QuTUJGZqW9NfEHU3YX6SheLqC9DiVYfAutRil0FAvVyyxMfSTAU&X-Amz-Signature=cbea89ea119b6cecdf5895f36c453de8d99088b6d0d40c756f6b6b7c6f508451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
