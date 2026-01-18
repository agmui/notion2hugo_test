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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUB625BD%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7VnF9jiLMJ3blLOpJHaTKHKo45FBnQ49i2eqK%2FCYViAiBmUgdNnitQvnCDSAakOpj156r4movPqkwn8DAZ8FRW1ir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMaSYaGCwAmEHR7%2FiNKtwDFrbjRvbijWRk2llLIdvy90jrPkhyn3WnUKOicEoU0aIlBf0TQnvM3yB6CY2%2F2srLhkftLc%2BSdMRiZ5WVlGj6HdfV0f3VJpHJnFrjcdAlAvx%2BUThjvSZAu1QDNQnv7wdaJQE9ukf3ntYv1tKHv4fBXBgBd0zRizfTr%2BE6uX1qrWvCRorlGtvx0%2FMxfOPQ8TsWo1CGD04jx4%2B86yzz6DL4Wfclwk3%2FRk9gT5%2BKRRMrfeHHYqvfLgDhTVFqk%2BjMtH7OMrfN3PZ7Xf7dNYetoUgZuanpaoLBUCEuqlSMxBaCcGUf85cwB9LRABSu6diYjGgv%2FAb30ZKbjsZRfMQg6xyUv%2Bpw7DsdpdD34lEnzhECUn5yQu5VZjCkMT2dO3ruMjCJMSpYI5wEIf%2F1aGb1Wrs9tV%2BTSF%2Fg%2FD9xoD0MbDwpqrJNTNQAGBuBci5gPICz1F4HattDl7lMTIz%2BTWAMfj1sAiNzqIgt9q6F6qZDHGEcv8%2BiovUzZGi%2B%2BP5FbhP1ls1L9UcrjA05hPw0NRNrHKD0WnEMGLPxfoc3OkgsBMDGnGDHTSMkhmqkqG5uhC88chYZoVokD7anKrxfXyf%2FpNaoTQMMCVqTfEVmdlRSWY3dLXWbLiuqmMaIBCzaTcEw35ywywY6pgH8I2Pl77FkKm2N6m6lkZV6Yk2kPegLxGI%2FVom06qaoNBBugzM28q0T5Fq9dZgSSgBEl0OOOTVV6aPeI9Q3RAV6A7yT4UKJ69H2QpywZQ%2F19etolXufE2mJIum3iAJipfj2KYjJJU84bg6G97rMCyXmgkK06RQefTfGSPQPRjicLe8KUhzY3lrB%2BIoLizwh9YRCfZAqaA73HQN29sLqWua7kJ3TCX0N&X-Amz-Signature=ca693986f3507e203ef9b550ee08003a072d10ea817b387c13c04286bd215b08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUB625BD%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7VnF9jiLMJ3blLOpJHaTKHKo45FBnQ49i2eqK%2FCYViAiBmUgdNnitQvnCDSAakOpj156r4movPqkwn8DAZ8FRW1ir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMaSYaGCwAmEHR7%2FiNKtwDFrbjRvbijWRk2llLIdvy90jrPkhyn3WnUKOicEoU0aIlBf0TQnvM3yB6CY2%2F2srLhkftLc%2BSdMRiZ5WVlGj6HdfV0f3VJpHJnFrjcdAlAvx%2BUThjvSZAu1QDNQnv7wdaJQE9ukf3ntYv1tKHv4fBXBgBd0zRizfTr%2BE6uX1qrWvCRorlGtvx0%2FMxfOPQ8TsWo1CGD04jx4%2B86yzz6DL4Wfclwk3%2FRk9gT5%2BKRRMrfeHHYqvfLgDhTVFqk%2BjMtH7OMrfN3PZ7Xf7dNYetoUgZuanpaoLBUCEuqlSMxBaCcGUf85cwB9LRABSu6diYjGgv%2FAb30ZKbjsZRfMQg6xyUv%2Bpw7DsdpdD34lEnzhECUn5yQu5VZjCkMT2dO3ruMjCJMSpYI5wEIf%2F1aGb1Wrs9tV%2BTSF%2Fg%2FD9xoD0MbDwpqrJNTNQAGBuBci5gPICz1F4HattDl7lMTIz%2BTWAMfj1sAiNzqIgt9q6F6qZDHGEcv8%2BiovUzZGi%2B%2BP5FbhP1ls1L9UcrjA05hPw0NRNrHKD0WnEMGLPxfoc3OkgsBMDGnGDHTSMkhmqkqG5uhC88chYZoVokD7anKrxfXyf%2FpNaoTQMMCVqTfEVmdlRSWY3dLXWbLiuqmMaIBCzaTcEw35ywywY6pgH8I2Pl77FkKm2N6m6lkZV6Yk2kPegLxGI%2FVom06qaoNBBugzM28q0T5Fq9dZgSSgBEl0OOOTVV6aPeI9Q3RAV6A7yT4UKJ69H2QpywZQ%2F19etolXufE2mJIum3iAJipfj2KYjJJU84bg6G97rMCyXmgkK06RQefTfGSPQPRjicLe8KUhzY3lrB%2BIoLizwh9YRCfZAqaA73HQN29sLqWua7kJ3TCX0N&X-Amz-Signature=4fbd8b127cda1ed8359b762d7849f654f073bea5c5344b7921616d3e47cfbe04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
