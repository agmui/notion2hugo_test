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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T537GC6U%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIE8tugQYlV%2FWJAqE3LeAMWsiuZG4G7hH8p2SdsnDZIgoAiAdCQKgiIM1obh7Pqd5yFZEct3orqKZnPwOuHxYisyTFiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqNtD2mlm18Te0sv%2FKtwD7i7xQxz3%2BZ5OmCDYJiXgCu5q0WNe0m6WqYHXwv%2Bz5NNEdiQAOeNSwVrxL0%2BuT%2BDOEnRwwtVDtfJF3j2kkZZ4QWsHvJZARCO3X2rSWJiFebl114yjckBh3wOuXfM8izXTxdUvQtEM%2FBhFk2fqXFgiUyV9WkdckJ55xPjv3z9A%2Fn2odiHNFChlqXbXUw4he0U%2BXptyGzkvU2ECUG1YdjaHYEQsjvmxfAjkozv01dGpZ8aMs7tSJ2XvrS4bR4BJfqm1bcM1XKF7z7GNz8ZN3uXVuGcvSCCALHyIMjhsdGj1NdMzSZLpk6K%2BDW7o6sQT1cQfFj6HfvkgU12FqfX9GunSyoJvwa0j262HW5CQnzrS14kHnFNtVPsrYk3bKRGhgrU4rtOrtQcjFwH79p3PoXnCfvCMUKKAc8bQ4WTHbjaHEnhpwnWqlxq%2B5gkrtpsRrTI7Cu3lQdCvU2pQSuvoyFDUonce1AxbRFPXntKhl3U2AVJgYWDL9lLK6tlxw5OK2vIc8V0R3%2FIZJboHnYJyMDGozau7xkQ4lmsOEMce%2Bby%2BbNLT6WOAHZ%2FYK3n2DoLWNRDAxGUAZ7ldRrtifFsGPemqGC2QL1JDq5eXmoFjMZQllQPe1hy5%2FsDoBdC2xrow063bxwY6pgFj7hSzkpi7dJLQiQ4MISMAtWWjK59DXy8hciaQ0Z59y%2BhKh52113FQySm4cCEWeygFWX%2FOkWY5Z%2F8lELGEmF9yjhNOkzDc9Z9bRrUknO3Sc8wLjR9jXMggUw9eOsHKbSvJZwRtg8MrTtEkzTaJf8Rz8mFFkVOd6pvWoYVXy7HZmDtIOM1v9%2B5AgZWEjyTZqfMbxautz2XViRzmzektS1lcvFJNwElC&X-Amz-Signature=fc2e2e4c9cabda85846c5f4361bfc66fa9ab94f02dbc204069cf7d357804d07c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T537GC6U%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIE8tugQYlV%2FWJAqE3LeAMWsiuZG4G7hH8p2SdsnDZIgoAiAdCQKgiIM1obh7Pqd5yFZEct3orqKZnPwOuHxYisyTFiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqNtD2mlm18Te0sv%2FKtwD7i7xQxz3%2BZ5OmCDYJiXgCu5q0WNe0m6WqYHXwv%2Bz5NNEdiQAOeNSwVrxL0%2BuT%2BDOEnRwwtVDtfJF3j2kkZZ4QWsHvJZARCO3X2rSWJiFebl114yjckBh3wOuXfM8izXTxdUvQtEM%2FBhFk2fqXFgiUyV9WkdckJ55xPjv3z9A%2Fn2odiHNFChlqXbXUw4he0U%2BXptyGzkvU2ECUG1YdjaHYEQsjvmxfAjkozv01dGpZ8aMs7tSJ2XvrS4bR4BJfqm1bcM1XKF7z7GNz8ZN3uXVuGcvSCCALHyIMjhsdGj1NdMzSZLpk6K%2BDW7o6sQT1cQfFj6HfvkgU12FqfX9GunSyoJvwa0j262HW5CQnzrS14kHnFNtVPsrYk3bKRGhgrU4rtOrtQcjFwH79p3PoXnCfvCMUKKAc8bQ4WTHbjaHEnhpwnWqlxq%2B5gkrtpsRrTI7Cu3lQdCvU2pQSuvoyFDUonce1AxbRFPXntKhl3U2AVJgYWDL9lLK6tlxw5OK2vIc8V0R3%2FIZJboHnYJyMDGozau7xkQ4lmsOEMce%2Bby%2BbNLT6WOAHZ%2FYK3n2DoLWNRDAxGUAZ7ldRrtifFsGPemqGC2QL1JDq5eXmoFjMZQllQPe1hy5%2FsDoBdC2xrow063bxwY6pgFj7hSzkpi7dJLQiQ4MISMAtWWjK59DXy8hciaQ0Z59y%2BhKh52113FQySm4cCEWeygFWX%2FOkWY5Z%2F8lELGEmF9yjhNOkzDc9Z9bRrUknO3Sc8wLjR9jXMggUw9eOsHKbSvJZwRtg8MrTtEkzTaJf8Rz8mFFkVOd6pvWoYVXy7HZmDtIOM1v9%2B5AgZWEjyTZqfMbxautz2XViRzmzektS1lcvFJNwElC&X-Amz-Signature=3cd547466eb639e52690b49e193e5e8c6372fb0c137ac0a64b1b3f3199e76c76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
