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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLJKMZ4V%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpqBDhdWQ%2FUd3MvHqQZt9Va4bXeUrBX5QzfzOVVZ9rxgIhAJFpPnZ1SefoWWOi1xuFvAzIdGf4QUHi%2B88a6pTQH6MdKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4GJDe9oSWK%2F4Yxwoq3AOepuAzQozAzRoiQWFhIbphXM5zNWp3l1F0FMKwju8gqP%2FJUgVL8I3jgcIIpNDNyfE76GtiAyYrnRNaYEGKE8Lw3dClMU2Ig3rw2G4eUz6RUySD5M5lmeQHt2x0t9%2FrjqBVlspOUCBeU3OAES5srYX7ZkMcLMqlnnmxNEtOf7Bmi8eawUlUTZK4aUb%2BMkkzUp0r6NqctCfLf5JrAJv0s3LmdEXBcX5naPBXWD7czk40u4HKkarg6CaA6%2Bsz99rxJQtYDLrU28wYSxxars898UfHzmpoQAXzUdz7UWSvzlgd6UhVNyoeDa9j8%2BeSalYUIsuBLe1nLM8RfEEnMxBg3BxU22OWS9K2Awo8XedQPrQsTOS2yG%2F9ErumgWhgco6skdGxL8930YjaocLzhijcgS79FT%2FoVcB%2Fc0u3%2BHJDYNtzJM5TxSFX1wY5q4amrGmoZe42ePzqDOpoIq2nuWVUcJtt4MPa1qYdLDkJ0Ko78J8kB3GCfmC8z3n20hU1WsnpmIG4zKA4nF0%2BbArLNGF%2F8udqLyiN8APc01Uj4SvdPlybiQGIbdX4gJuJEo1y4ZJVa2dbnky2G6t8WkVsASK%2BTcJe261TIAC0xkyfCuAcpIsGjbA0a8F1aJD3%2FEgcujD7w%2BLJBjqkATxkbvCtnFwfI5qoLcDVEwqDwF6dgbBHpw%2F6Xiq3vcjOB825Y7KSX%2BX9ircR5eIaxlobKTCvtPL3XwWAetEvr5jrCG%2FsbNVLbnWolseqIVIPw8VKiMneBGU2kafncs8CTJjw8CxswPkN7wlfjU0tEoy6spTLetP5DFoAZhpNm1EkucLYhhMBjEibkRbMIEHKtY7GYMX2yF7BUev0UH7oTOwlPg7E&X-Amz-Signature=0dfbabf8f42125bb0d2ad34bdba7bf4e7b6f67af4825a6e1e6a46594a388f2ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLJKMZ4V%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpqBDhdWQ%2FUd3MvHqQZt9Va4bXeUrBX5QzfzOVVZ9rxgIhAJFpPnZ1SefoWWOi1xuFvAzIdGf4QUHi%2B88a6pTQH6MdKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4GJDe9oSWK%2F4Yxwoq3AOepuAzQozAzRoiQWFhIbphXM5zNWp3l1F0FMKwju8gqP%2FJUgVL8I3jgcIIpNDNyfE76GtiAyYrnRNaYEGKE8Lw3dClMU2Ig3rw2G4eUz6RUySD5M5lmeQHt2x0t9%2FrjqBVlspOUCBeU3OAES5srYX7ZkMcLMqlnnmxNEtOf7Bmi8eawUlUTZK4aUb%2BMkkzUp0r6NqctCfLf5JrAJv0s3LmdEXBcX5naPBXWD7czk40u4HKkarg6CaA6%2Bsz99rxJQtYDLrU28wYSxxars898UfHzmpoQAXzUdz7UWSvzlgd6UhVNyoeDa9j8%2BeSalYUIsuBLe1nLM8RfEEnMxBg3BxU22OWS9K2Awo8XedQPrQsTOS2yG%2F9ErumgWhgco6skdGxL8930YjaocLzhijcgS79FT%2FoVcB%2Fc0u3%2BHJDYNtzJM5TxSFX1wY5q4amrGmoZe42ePzqDOpoIq2nuWVUcJtt4MPa1qYdLDkJ0Ko78J8kB3GCfmC8z3n20hU1WsnpmIG4zKA4nF0%2BbArLNGF%2F8udqLyiN8APc01Uj4SvdPlybiQGIbdX4gJuJEo1y4ZJVa2dbnky2G6t8WkVsASK%2BTcJe261TIAC0xkyfCuAcpIsGjbA0a8F1aJD3%2FEgcujD7w%2BLJBjqkATxkbvCtnFwfI5qoLcDVEwqDwF6dgbBHpw%2F6Xiq3vcjOB825Y7KSX%2BX9ircR5eIaxlobKTCvtPL3XwWAetEvr5jrCG%2FsbNVLbnWolseqIVIPw8VKiMneBGU2kafncs8CTJjw8CxswPkN7wlfjU0tEoy6spTLetP5DFoAZhpNm1EkucLYhhMBjEibkRbMIEHKtY7GYMX2yF7BUev0UH7oTOwlPg7E&X-Amz-Signature=c0010742b48013f683568a51f5725567ec8a45c373ffdc5c924710d4f389c7c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
