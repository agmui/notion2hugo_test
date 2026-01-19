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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626CYZT72%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTwFFvlkxzQfvgLg0O%2BbkHtsURzfuMnERUy5CbJxuVIAiATFoCeqe3aymxKF1Gqo2yzuMsKEM1k7bTsai1lLQR7MyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHwX8w2ES1iEDspNNKtwDgR8T7KeNVjEPPptBQ%2BzdW%2Bb%2FcjSJsr96Z%2BPosvfqFxuzSeqCZ%2FLzeQaGEYZguixBrYXNucdHPz%2BJlifLCPiwbtAJCh%2BIJ7JqP08xVCaind8EdDoXDFjUYm6lIiGkfuAEMIdfHqBpPWu49DVH4RXF6XoVgxnqRt0GSMU%2BegXBgpUCHvnI6P9EIwFuc5fmtL7H6YHtHZ8yu8gBjOtTY9p1ZEbZILC35D80RitDdI2NYFCfZQXhDiKdm7qNb8JM00YVAX0V1mi9n7ZnP3qTCN3a1bQhNMTaioBgAXIqNPcghCizcRPDFkXN0d%2F3VdWxUuzUB34rTfz4qPb%2FrOZ2gXqT2vsmLZ3hTtCLXsJM%2BLUsf2Prlfw0uP%2BTAklV4SEtFUARKJeg8Sh%2Bd3US5OC2I8JfLJ7Vu3n8S8PI2xR1e0Hieez0rrvLwvUHF%2BPCSSyO6dfYfXWKMAsnMpgAMB5f4Atno%2BWJXIWx0VgDnZLcRzHwNTRaC7iw9w%2F4D3LHPYr5FQ2%2FVDPBGTM1oQP2OCClS5ttXK55d2qivEalIhlAbytitZxAD7cr2IaYqK9Ktcl6q44l8GW56TWJgMqnwLaNFU7rr%2BvXzeChkvuGydGZlR2CI2v9005SEYOJqU%2FudCUwm921ywY6pgEpDDE9XbmelHC7NSR6vNOr5YK1vLyMnpFFkUfCTCEYWNPo5cpI%2F3CU%2BwPNy93rwpoZoXB7CaMymbrvEFYgsozHN5Yj6NW0eQVTCT6N6TdMhl9E9BEe1BU5sYyOAiOM2Ufao4PUraBIwHEqbxx0uZYOYPXTueR69Id4OS8Ve0vrnuQQcn9REsIBEgrSd3VqqTbw0B9p3NfEM%2FNdDqHIS9X3BExVEMkX&X-Amz-Signature=e332c457a39c371648e265229af069dbaa90c37f22c5301a147799b6a99fc693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626CYZT72%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTwFFvlkxzQfvgLg0O%2BbkHtsURzfuMnERUy5CbJxuVIAiATFoCeqe3aymxKF1Gqo2yzuMsKEM1k7bTsai1lLQR7MyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHwX8w2ES1iEDspNNKtwDgR8T7KeNVjEPPptBQ%2BzdW%2Bb%2FcjSJsr96Z%2BPosvfqFxuzSeqCZ%2FLzeQaGEYZguixBrYXNucdHPz%2BJlifLCPiwbtAJCh%2BIJ7JqP08xVCaind8EdDoXDFjUYm6lIiGkfuAEMIdfHqBpPWu49DVH4RXF6XoVgxnqRt0GSMU%2BegXBgpUCHvnI6P9EIwFuc5fmtL7H6YHtHZ8yu8gBjOtTY9p1ZEbZILC35D80RitDdI2NYFCfZQXhDiKdm7qNb8JM00YVAX0V1mi9n7ZnP3qTCN3a1bQhNMTaioBgAXIqNPcghCizcRPDFkXN0d%2F3VdWxUuzUB34rTfz4qPb%2FrOZ2gXqT2vsmLZ3hTtCLXsJM%2BLUsf2Prlfw0uP%2BTAklV4SEtFUARKJeg8Sh%2Bd3US5OC2I8JfLJ7Vu3n8S8PI2xR1e0Hieez0rrvLwvUHF%2BPCSSyO6dfYfXWKMAsnMpgAMB5f4Atno%2BWJXIWx0VgDnZLcRzHwNTRaC7iw9w%2F4D3LHPYr5FQ2%2FVDPBGTM1oQP2OCClS5ttXK55d2qivEalIhlAbytitZxAD7cr2IaYqK9Ktcl6q44l8GW56TWJgMqnwLaNFU7rr%2BvXzeChkvuGydGZlR2CI2v9005SEYOJqU%2FudCUwm921ywY6pgEpDDE9XbmelHC7NSR6vNOr5YK1vLyMnpFFkUfCTCEYWNPo5cpI%2F3CU%2BwPNy93rwpoZoXB7CaMymbrvEFYgsozHN5Yj6NW0eQVTCT6N6TdMhl9E9BEe1BU5sYyOAiOM2Ufao4PUraBIwHEqbxx0uZYOYPXTueR69Id4OS8Ve0vrnuQQcn9REsIBEgrSd3VqqTbw0B9p3NfEM%2FNdDqHIS9X3BExVEMkX&X-Amz-Signature=e8781df733250f6c662b96c9c477fdedec8fe55b21c9c097f8d1a5fe622cf12d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
