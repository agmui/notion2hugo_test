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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XZGG3VZ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIEYx%2Bl7oU5HGeRikkyKZrM5N%2FaPPNYa%2FKT8d0vA8uYvUAiA3kfG9GxOd9ExmWNXeBrjn0U3%2BZv08mssUXw5rNmAfPyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMZxJzZrunZw3Ql%2FgeKtwDlnym%2BAiJ5a2CJYtsHEnVd6KqOAxEs0BzJC1wgcWQZKcx6YtqvIJd2EcEBGdo1Jj7df658JQn9GN0iKtvRR%2FZ5fDq4daVdsUOESsaIJpWVq8%2FR%2BniOvobkh7KRP3aVx4JdhRrXCPBJPSV8aya4kocCVXtraKkcGy1clzWyzZHr3QJEviRcfNJe0h1KErJIYOq516lzpUlmfTLYHXcunbs5l86aJducqD8tfVqMNSpg26I18r62WVHSJqmRP1ZSdu4dd9F7vjTaMIWZRD5PCWG3vSIXqi5%2FiVyPslJePbN4Kj5%2FKpm8iXasAKQY5hB9sj5N%2BJy2nnSUsbzAwIrtvMEO7wgipmlRZMdzwODziQYOr5LC1a3yTniPl828PlXzA9Bg2kAFt4jQXevvBkQq2Qs6AXs54DtVf2s0NMw%2B2Zj5ZwWDek3hhLDwb6SQAkj1pVqXeHXAxp62XPyvg3G%2FjdyOu6Piq81Eouk1SWTIB59XfFU%2Br90o8NPiVFV1%2BYBHLx8KFauvtb%2B9ctF3semC1jQyef3GjNOYEunQ31AG5zjmmXPZWGJHwb6KvkhVNLSmWq5d6sIPOH6eNXUwaQtb5%2BTtQvojfjKOje2aNCxTdkUwyzjs4B2qvSoWZiGqvkwoJ6CxQY6pgGTU1k%2BL9nF1HD0BHqhHwrv4MoMI0S3FFExQR5MBvFCty3ZnqQ%2FTaSNQ8EQe4oz1EkAfMLOF%2FGjXXnOh0lM%2BobywTx9im9k6jXDig%2FqrMfiFtYrxundZAzODq44RdHbJl54rt5lH7WVjy9ryBRYMhLBlCrweoXVB%2FU%2FWx5KtSIVuoEiec%2BADA%2FNu98wMd9a1UBUN313Wft3zEkozs4SbEC7C9o%2B5rQp&X-Amz-Signature=7d9c5d138db5bd9b9608c57d7975b3cdb2ceb9b1f06e56e9dbdc5c7e89685f9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XZGG3VZ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIEYx%2Bl7oU5HGeRikkyKZrM5N%2FaPPNYa%2FKT8d0vA8uYvUAiA3kfG9GxOd9ExmWNXeBrjn0U3%2BZv08mssUXw5rNmAfPyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMZxJzZrunZw3Ql%2FgeKtwDlnym%2BAiJ5a2CJYtsHEnVd6KqOAxEs0BzJC1wgcWQZKcx6YtqvIJd2EcEBGdo1Jj7df658JQn9GN0iKtvRR%2FZ5fDq4daVdsUOESsaIJpWVq8%2FR%2BniOvobkh7KRP3aVx4JdhRrXCPBJPSV8aya4kocCVXtraKkcGy1clzWyzZHr3QJEviRcfNJe0h1KErJIYOq516lzpUlmfTLYHXcunbs5l86aJducqD8tfVqMNSpg26I18r62WVHSJqmRP1ZSdu4dd9F7vjTaMIWZRD5PCWG3vSIXqi5%2FiVyPslJePbN4Kj5%2FKpm8iXasAKQY5hB9sj5N%2BJy2nnSUsbzAwIrtvMEO7wgipmlRZMdzwODziQYOr5LC1a3yTniPl828PlXzA9Bg2kAFt4jQXevvBkQq2Qs6AXs54DtVf2s0NMw%2B2Zj5ZwWDek3hhLDwb6SQAkj1pVqXeHXAxp62XPyvg3G%2FjdyOu6Piq81Eouk1SWTIB59XfFU%2Br90o8NPiVFV1%2BYBHLx8KFauvtb%2B9ctF3semC1jQyef3GjNOYEunQ31AG5zjmmXPZWGJHwb6KvkhVNLSmWq5d6sIPOH6eNXUwaQtb5%2BTtQvojfjKOje2aNCxTdkUwyzjs4B2qvSoWZiGqvkwoJ6CxQY6pgGTU1k%2BL9nF1HD0BHqhHwrv4MoMI0S3FFExQR5MBvFCty3ZnqQ%2FTaSNQ8EQe4oz1EkAfMLOF%2FGjXXnOh0lM%2BobywTx9im9k6jXDig%2FqrMfiFtYrxundZAzODq44RdHbJl54rt5lH7WVjy9ryBRYMhLBlCrweoXVB%2FU%2FWx5KtSIVuoEiec%2BADA%2FNu98wMd9a1UBUN313Wft3zEkozs4SbEC7C9o%2B5rQp&X-Amz-Signature=5dce91dd4536ffe903234f27e3b95ce5878ae982b1b811479393016cabd893ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
