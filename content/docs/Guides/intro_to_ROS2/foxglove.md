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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3ZW42VD%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBtpaJ5awY2oj8En9U%2BqzXqOVTm4Otp5J1SV6MtdtlMwAiEApky2TQAyjkqc%2B3pUK5nkqbaORX3JKcAoPvUNWIpx7lMqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHW5czj4ebk%2F7AqgeCrcA2glE9b84Ot3dSWt%2F7jSG1KwQ9qdK%2B4K8lzCZamaMT4J4gJ17EraDa5CAqqi3gL1PR1kweC2gcPOvnvLIkK1d5egsTrmsxWf3bRoja9wXAo%2BZIw9r5FRxF6fEIIZP80eFoKVkQyRbfbGssyo7rjGPII0wE7yzBo7rs49z84dLxLE2TnMkZhJe9RT60BKgy%2BbverUIw%2B6rU4uD%2B55uxJ8T2zlNdFSNkNnstP50swN2BGouS0ya9XDwzZAAhNZ0xQCwg91x5o%2F5tPAqUKEyuENXGHLrXsllwaoofQ%2Fdbk%2FMmXwBcuf65yIg4ElEnXpMgwzYCg%2FyJFGnfveHUL16GruaL8xly1BL3jIowxSd9HHnSgVjKSNAZc6ahTJLZYg0WXAzkHU4RlJCOeIGAdR0Gjvn%2BsFBtOgU3PQqD2WO8IwqL%2FZOZDdnnU0095c3SpProrKqTVkaFF17CfIqYICyQBV9hgU9F4wmKFCnXi%2F2jDzb4EHtLJm7rOPe6tIoB5CynIOlspx7fNgidfPWWeCZOt5KITKP3%2BtWp4fO4y5KpqKeooui9mCjOQz6tOkbR7Ioss6knxsVGmir8ls9CFbNciXgFd08%2BUAKbikT0XqSenDiwYNZebPSjutHtkN1nqxMJrt7swGOqUB4%2FqGVbwCfYOZA3OImOSTGILnPc3THR5WhwijfcBDc2sYsnj%2FnqJfHi1QSdq24DlWtZ5nUG4vj4NRI37eyiEGeONP2C75khBvR5U1UtE2mMxjupzRTm8%2FtRwG5YpeK0IuPmblT0UF9BPhV9%2BOJASXltiI3KPsGy5wqMH1YPH%2F5zUYJiraafC27s%2FZJXq%2BGz%2F6dgzu89guu%2FcrLeCUBhoggDtWKF%2Fj&X-Amz-Signature=99e07d7303dc0551cece5150d2e5a1cebe146b757e137f829201e5cf2be823a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3ZW42VD%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBtpaJ5awY2oj8En9U%2BqzXqOVTm4Otp5J1SV6MtdtlMwAiEApky2TQAyjkqc%2B3pUK5nkqbaORX3JKcAoPvUNWIpx7lMqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHW5czj4ebk%2F7AqgeCrcA2glE9b84Ot3dSWt%2F7jSG1KwQ9qdK%2B4K8lzCZamaMT4J4gJ17EraDa5CAqqi3gL1PR1kweC2gcPOvnvLIkK1d5egsTrmsxWf3bRoja9wXAo%2BZIw9r5FRxF6fEIIZP80eFoKVkQyRbfbGssyo7rjGPII0wE7yzBo7rs49z84dLxLE2TnMkZhJe9RT60BKgy%2BbverUIw%2B6rU4uD%2B55uxJ8T2zlNdFSNkNnstP50swN2BGouS0ya9XDwzZAAhNZ0xQCwg91x5o%2F5tPAqUKEyuENXGHLrXsllwaoofQ%2Fdbk%2FMmXwBcuf65yIg4ElEnXpMgwzYCg%2FyJFGnfveHUL16GruaL8xly1BL3jIowxSd9HHnSgVjKSNAZc6ahTJLZYg0WXAzkHU4RlJCOeIGAdR0Gjvn%2BsFBtOgU3PQqD2WO8IwqL%2FZOZDdnnU0095c3SpProrKqTVkaFF17CfIqYICyQBV9hgU9F4wmKFCnXi%2F2jDzb4EHtLJm7rOPe6tIoB5CynIOlspx7fNgidfPWWeCZOt5KITKP3%2BtWp4fO4y5KpqKeooui9mCjOQz6tOkbR7Ioss6knxsVGmir8ls9CFbNciXgFd08%2BUAKbikT0XqSenDiwYNZebPSjutHtkN1nqxMJrt7swGOqUB4%2FqGVbwCfYOZA3OImOSTGILnPc3THR5WhwijfcBDc2sYsnj%2FnqJfHi1QSdq24DlWtZ5nUG4vj4NRI37eyiEGeONP2C75khBvR5U1UtE2mMxjupzRTm8%2FtRwG5YpeK0IuPmblT0UF9BPhV9%2BOJASXltiI3KPsGy5wqMH1YPH%2F5zUYJiraafC27s%2FZJXq%2BGz%2F6dgzu89guu%2FcrLeCUBhoggDtWKF%2Fj&X-Amz-Signature=5436b3d50636a8ee1d74e710c975083c59f3593ac4ddf0527d689e05adc97294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
