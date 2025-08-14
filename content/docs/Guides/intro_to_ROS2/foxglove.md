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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUSXMFKB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIALGbPt2q%2FG6U6433176Dv%2FUpeg%2Bg0zuKalooJEbcJnLAiEAh5FPV%2FBHBRCotLZ5x5W3j%2Bk3oCorsIEvckAbVPUI%2Fh8q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHNarcxwQ2pVZHG1lyrcA2kr1LAZcC2TJjLEkw8tPFl4hHqoGO2rpugUCsiEE9xzrUHQJOUMRth1pioLwHiFqZt%2FoptLAZwbWBlTn1yafazEXGPBRUAz7dkhWk9O3Tul9uT5e39StvBnJ3pVPUvUiTDyJlxOlVAljnWJj7hAH8qxsftAE0OQacgzzFojicGhe5ge%2BbyLXXmmrNKZ8r2WdBRY4XuTs0IZ1ZHFEvmdweAf%2FzC8KUYlNA%2F%2BVo2qsmwpO1W3t8%2BpAAZ4x8QVDOnPR0JdkBoftSfOizytSNWpg6fcoQu91BsQkBKH3Ansxgp0yyUD1MKL6iBuX4Se5HoMT%2F0nDn%2FFqSEYJ%2F5ji%2BCUlRrN%2FtQZ4omixTXmyNx04T2RDgdwyZT1o1dXHKbOAAMHQL5bbohzusAMZS6cW54YLxD71iRkpR64MgHVhuO2cIbC4jknlB%2FEFP7w4Syz2yidX11XkDa7eGLxp2QmdsuJZv%2Bw8dro5qG%2BgsQ%2FIKY37BI16IOYMaoSCrjh2EvfEhmc4x8IbR0auQ2wrTIXOa80kcM0CX3Laomsshyp8FaIiWjtLcr%2FdOlgrsxFP2tuyQ0tscUCwN3dLNqbOyobqpANHpmSpVFCsMgkE8Cdtrxnj70DeRTcaRz6cX9SaiLfMJCN%2BcQGOqUBK1cGe7dpA5lCC%2BwNOwBmgSDRNqj%2FxuDFrjYBJztd3aM2t5EP9TuMotp4%2B6zGFKTRUD2TByfj%2FTNN6KJ0HxoJcNVDdC1pcH81F82OlhtTs3ZRLDSslzcVc55OO3K89XFtHk8VglxjnU%2BlCSHuN3JT%2BTp96flVF9L01pKylPYgMqN4GCkpYQhG6GTn4hyOX%2FBhT7T%2BSVidehJn%2BagKHnG4rB9Zv%2B9k&X-Amz-Signature=39dfd607ffedfc0c769f61b0a20ba8ed3cfea0dc95c9e648dd2fa491d3dd057d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUSXMFKB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIALGbPt2q%2FG6U6433176Dv%2FUpeg%2Bg0zuKalooJEbcJnLAiEAh5FPV%2FBHBRCotLZ5x5W3j%2Bk3oCorsIEvckAbVPUI%2Fh8q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHNarcxwQ2pVZHG1lyrcA2kr1LAZcC2TJjLEkw8tPFl4hHqoGO2rpugUCsiEE9xzrUHQJOUMRth1pioLwHiFqZt%2FoptLAZwbWBlTn1yafazEXGPBRUAz7dkhWk9O3Tul9uT5e39StvBnJ3pVPUvUiTDyJlxOlVAljnWJj7hAH8qxsftAE0OQacgzzFojicGhe5ge%2BbyLXXmmrNKZ8r2WdBRY4XuTs0IZ1ZHFEvmdweAf%2FzC8KUYlNA%2F%2BVo2qsmwpO1W3t8%2BpAAZ4x8QVDOnPR0JdkBoftSfOizytSNWpg6fcoQu91BsQkBKH3Ansxgp0yyUD1MKL6iBuX4Se5HoMT%2F0nDn%2FFqSEYJ%2F5ji%2BCUlRrN%2FtQZ4omixTXmyNx04T2RDgdwyZT1o1dXHKbOAAMHQL5bbohzusAMZS6cW54YLxD71iRkpR64MgHVhuO2cIbC4jknlB%2FEFP7w4Syz2yidX11XkDa7eGLxp2QmdsuJZv%2Bw8dro5qG%2BgsQ%2FIKY37BI16IOYMaoSCrjh2EvfEhmc4x8IbR0auQ2wrTIXOa80kcM0CX3Laomsshyp8FaIiWjtLcr%2FdOlgrsxFP2tuyQ0tscUCwN3dLNqbOyobqpANHpmSpVFCsMgkE8Cdtrxnj70DeRTcaRz6cX9SaiLfMJCN%2BcQGOqUBK1cGe7dpA5lCC%2BwNOwBmgSDRNqj%2FxuDFrjYBJztd3aM2t5EP9TuMotp4%2B6zGFKTRUD2TByfj%2FTNN6KJ0HxoJcNVDdC1pcH81F82OlhtTs3ZRLDSslzcVc55OO3K89XFtHk8VglxjnU%2BlCSHuN3JT%2BTp96flVF9L01pKylPYgMqN4GCkpYQhG6GTn4hyOX%2FBhT7T%2BSVidehJn%2BagKHnG4rB9Zv%2B9k&X-Amz-Signature=62592aed3a0f24d9cd357d164b90982a4239c4d4881f0a9eb5369512877dee76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
