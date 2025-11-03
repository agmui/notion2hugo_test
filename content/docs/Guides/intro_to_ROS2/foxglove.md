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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQEIS6HG%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd78omU4k6sfI23ir%2Bo%2F9PnZ84TgrtUb232VCkatxvkAiEAn3HEmxcCQlRs%2FhHDM0%2BBsdilAa2eIY2nHtUX8eVgy68q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDFS1eX1%2BIEHsUJE76SrcA7NLJRYnJDPGmpzyyligiop3mrjORuKeO4VPxtxuuBE7puiN8FglDpG5ku%2FWiBQ%2Bd%2B1WT6HhXkI7X5HjNfWPGhDY3wCGbbB2f7aOSjDh061LFd9%2Bp7GROSP7qzvSqUhd7g6NQAT2eMLKv4hlytD9JZeCiHhycLwmN%2FQcCmxdzvL6pEfvE6Jv5RJ7yVKAoPWgIOVncT10MC42tWMJd6Cm15xSflww7Bl%2Fq3t6hGyWpZ3bTNlV0GXs9EpdK9e%2FX6fAV3VFOd1RpnAR0hAxcwUSCSm6vW6SovdbvBll7tsRmiEzq6yutoNuM5mtnhgkJNdb0fiS81Rw5vtyTgamTRII2%2Frfseh2NjEPm0mASziiczzSt26%2FTPKGkqN8cWvXxPe0jgJ60KVNIQ6GbOSycpnbPllZUrJsswobiwpjCAV9Ep%2BrYSjBpfzuJxgsJ7lLNrn64esZw%2FwySwikaWYBLSR5IQsG1SxECzhSFAgIwM5lBRliJA5A31Cu7SakgCnTlIIVuuPD4xjmFHGBDqecw8pBYoAxmK%2FrZ07DhgAAMu%2FLeAdBImD5Vpi2xM9rftatvFLtuFiEUBxAenAI3arAYvv6jyk3tyjIe1x%2F0InrNXbpZ1YD2yeu0XFYGTQUQRycMLWJoMgGOqUBTXH%2Fuf8Re8AKuRczooKGOTSGhXYuUitiOK0zQtc6ox1odGuvkVzBEV3sW%2FN95DOYzQ8PVNdks6%2FOqIM%2FtbZ81SNxdgALjecUZyeNzIf4LTXEjguHeijrgM2LANXr29eYQezH%2BYf%2FQy0v60dV4afVvE200M%2F9us9rVNxrWFlhuITEFxJ75hJHJOHPAK%2F4usXn4AfzJU3WBI4nOBqO%2F6L7anKUHUyc&X-Amz-Signature=3892ea0e28b4af7f6b6b26e82ab52ba83a580b5bb95a40c111c4fe74cd020aae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQEIS6HG%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd78omU4k6sfI23ir%2Bo%2F9PnZ84TgrtUb232VCkatxvkAiEAn3HEmxcCQlRs%2FhHDM0%2BBsdilAa2eIY2nHtUX8eVgy68q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDFS1eX1%2BIEHsUJE76SrcA7NLJRYnJDPGmpzyyligiop3mrjORuKeO4VPxtxuuBE7puiN8FglDpG5ku%2FWiBQ%2Bd%2B1WT6HhXkI7X5HjNfWPGhDY3wCGbbB2f7aOSjDh061LFd9%2Bp7GROSP7qzvSqUhd7g6NQAT2eMLKv4hlytD9JZeCiHhycLwmN%2FQcCmxdzvL6pEfvE6Jv5RJ7yVKAoPWgIOVncT10MC42tWMJd6Cm15xSflww7Bl%2Fq3t6hGyWpZ3bTNlV0GXs9EpdK9e%2FX6fAV3VFOd1RpnAR0hAxcwUSCSm6vW6SovdbvBll7tsRmiEzq6yutoNuM5mtnhgkJNdb0fiS81Rw5vtyTgamTRII2%2Frfseh2NjEPm0mASziiczzSt26%2FTPKGkqN8cWvXxPe0jgJ60KVNIQ6GbOSycpnbPllZUrJsswobiwpjCAV9Ep%2BrYSjBpfzuJxgsJ7lLNrn64esZw%2FwySwikaWYBLSR5IQsG1SxECzhSFAgIwM5lBRliJA5A31Cu7SakgCnTlIIVuuPD4xjmFHGBDqecw8pBYoAxmK%2FrZ07DhgAAMu%2FLeAdBImD5Vpi2xM9rftatvFLtuFiEUBxAenAI3arAYvv6jyk3tyjIe1x%2F0InrNXbpZ1YD2yeu0XFYGTQUQRycMLWJoMgGOqUBTXH%2Fuf8Re8AKuRczooKGOTSGhXYuUitiOK0zQtc6ox1odGuvkVzBEV3sW%2FN95DOYzQ8PVNdks6%2FOqIM%2FtbZ81SNxdgALjecUZyeNzIf4LTXEjguHeijrgM2LANXr29eYQezH%2BYf%2FQy0v60dV4afVvE200M%2F9us9rVNxrWFlhuITEFxJ75hJHJOHPAK%2F4usXn4AfzJU3WBI4nOBqO%2F6L7anKUHUyc&X-Amz-Signature=6a4d66696be72b8219d4ed561b7b1703763601783a97cdac56044d8824e1e631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
