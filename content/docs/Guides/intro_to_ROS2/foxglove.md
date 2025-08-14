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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KOXMJ5O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6vr1xW6CgcWXw2b05iU%2Bq2vyoyrYFR2dF1FSo4%2BXudAIhAP505BagizVV0R5qJlKgk%2BiUDdXiXAY4bo8Z06Ecf5mcKv8DCDsQABoMNjM3NDIzMTgzODA1IgzKmpUyocT9NEZhGF0q3AP5KgMJ6WmCjzW532Kw6yE4iZU1SI%2FGW31h8WK84xAkPuiu8B%2BVb7kr2GgQ9ufl%2ByKtCjWrbnDd9AsDbF5SeaypIOdEQziB291XxiDoCF8fCafxUVZvKAh%2FZm%2Fx8eiChdIb4jemNsR9NGQadp9kFsB65GEWvJxCZAe3ZYYd1SHci56e1yaD%2B9TaF61%2BvPghqjeCBq0uN7gKzmWVxG6SkMcA1jTcYt7HcKVrWfSBCy5OZfkUFO8MX3zitEeOJYxS5KafbE2hxCGXRGb0p3HGzU4jUajZJxqtul72XfvNlS8ehjnhYxBefJL9ixARuuIpdIuNLyUJBgc%2F4Lhrczo1%2BbxO4aoLjRfPQenvRywz79fBXTKGF4xMdCpQ19LkRU0l3irK6KaROYlZZh1JoYkCNaI1eaJfgJWLsTgZM0NRZxj899ioW3RLWle3BjxCmX9AkJdwk25KEXzk%2Bnn9yRHNeIu%2FirMhWBwKoU2Af2%2Fz6YkoRwdqLhPUKfkeKS%2FZjcwWaDzSeW1YSiXl%2B11USXq%2FFGfaZuLCwpnb3vJP7vMat4B0phNmIq9haFzF7Iq0GnhjcBcXc866yqg9aa2PRoXQLAt7xjiJJbVhPAsdvRFS1k1tf0F3I%2BO3aoyAYxsQGTCSi%2FXEBjqkARhFR96jJEOcNFFOR7mRm34ZUpDTWiNjP2EVJ8Vo5tQ%2BTNTAM%2FdUzwHzxpA397v%2Ba%2BX5YT0m8olheQjztiA2ELKyGb%2FCRJ0p%2B6HggWKJkY1tpdKgR4sjLwRLdqdr%2BwME0b5%2FrcBe4MRNHVOQolatcG3oMJhBns8ALe1n7CSW4GbdcP2iAJdI5FthlmlA23Rgfs9bheSmB5fmhewAKTEAddheiZL7&X-Amz-Signature=b7186a591056c086876ca075977b3823a0d2d16cf0b3d8485cc1b6a9a806b90c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KOXMJ5O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6vr1xW6CgcWXw2b05iU%2Bq2vyoyrYFR2dF1FSo4%2BXudAIhAP505BagizVV0R5qJlKgk%2BiUDdXiXAY4bo8Z06Ecf5mcKv8DCDsQABoMNjM3NDIzMTgzODA1IgzKmpUyocT9NEZhGF0q3AP5KgMJ6WmCjzW532Kw6yE4iZU1SI%2FGW31h8WK84xAkPuiu8B%2BVb7kr2GgQ9ufl%2ByKtCjWrbnDd9AsDbF5SeaypIOdEQziB291XxiDoCF8fCafxUVZvKAh%2FZm%2Fx8eiChdIb4jemNsR9NGQadp9kFsB65GEWvJxCZAe3ZYYd1SHci56e1yaD%2B9TaF61%2BvPghqjeCBq0uN7gKzmWVxG6SkMcA1jTcYt7HcKVrWfSBCy5OZfkUFO8MX3zitEeOJYxS5KafbE2hxCGXRGb0p3HGzU4jUajZJxqtul72XfvNlS8ehjnhYxBefJL9ixARuuIpdIuNLyUJBgc%2F4Lhrczo1%2BbxO4aoLjRfPQenvRywz79fBXTKGF4xMdCpQ19LkRU0l3irK6KaROYlZZh1JoYkCNaI1eaJfgJWLsTgZM0NRZxj899ioW3RLWle3BjxCmX9AkJdwk25KEXzk%2Bnn9yRHNeIu%2FirMhWBwKoU2Af2%2Fz6YkoRwdqLhPUKfkeKS%2FZjcwWaDzSeW1YSiXl%2B11USXq%2FFGfaZuLCwpnb3vJP7vMat4B0phNmIq9haFzF7Iq0GnhjcBcXc866yqg9aa2PRoXQLAt7xjiJJbVhPAsdvRFS1k1tf0F3I%2BO3aoyAYxsQGTCSi%2FXEBjqkARhFR96jJEOcNFFOR7mRm34ZUpDTWiNjP2EVJ8Vo5tQ%2BTNTAM%2FdUzwHzxpA397v%2Ba%2BX5YT0m8olheQjztiA2ELKyGb%2FCRJ0p%2B6HggWKJkY1tpdKgR4sjLwRLdqdr%2BwME0b5%2FrcBe4MRNHVOQolatcG3oMJhBns8ALe1n7CSW4GbdcP2iAJdI5FthlmlA23Rgfs9bheSmB5fmhewAKTEAddheiZL7&X-Amz-Signature=39a78a3de4c16692b95e290dd2886457f09cae0da225605c4704a400054cf0b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
