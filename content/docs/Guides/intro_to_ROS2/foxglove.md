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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY7HWITH%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDB7uv0KMZ7GtGlelEBPmiymViPzYmC5lP0GX3A3NdFLwIgKgnH0gMJ5xE0%2FDq%2Fuq5jinBO0BaVkUgUgblIvfLeefUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEFPVuLDCVx4SXBTSrcA43VLg49p7Br9lHmg9f5YpkcnelJtEZubK9eohW8Mc3g%2Fe4cRHCtWuFKu3uHbVdJMnepGVaFXPEujwDAJclbgpVA9z%2FQxg9WJi9uBADOxV%2FU2dqGq364J1C0sWjrOaFrJHKUAaCcPTHd5hUYzZPiyViNmQYxCIJgqMNVOn1KSfn73f9WdD5BQMfjm6FaUI1UyaB2cnBRexsZs40HVqy7Fs09yqhvxfKRD7dqjHnzSQnAW%2F7n9rCnqP9g83jUY22fgzELvR01fk0vYcw5Drg6znEYntEYuMERj9qW6Is5LIZA5GcagU0IgfU5uR38465bwKVc6P9bN9j2%2FOlksxahFi8X1el6Egu9XSNDAOEkdwvcAuC2tzg385R1YlAo68nMr4z24uP1NvuQdmE5TRoB2tgP%2F8qrnKdUNXMbyu7wH3TQ0FEixk4K9VU205%2F1PW9KK9HP%2Fxoysp9qn3sZ5CnlGt2%2FszHTYlUzSG7QcGKEye0ZyNKFnNlWiPkaCTORiCKdaOaQ%2FKGCgcdVo%2Bhgnhr%2B2hJQtxPo9yqdr9f2PVmJ9XX81zobzsyMlAPM07oGFxVAGNN5aN6cm%2FGK9DkmYkhKsGXIz4MHmTN4YilbgbSdG7NnsSI93bGCwdOV75ITMIez%2Bs8GOqUBY9C1kF5zZ1doSASQPVy7TTVs%2BPMhm%2FYjcycmi1BA%2B0HRIsTHXs%2FxGYhGTe4Z%2FYz%2FWQC%2FfKmKohg7Bbu%2BEkXrFzgJQh1ORKLTvz1BjfMBMrBlkXKlcwxK7e9%2FV8UE75qGAYtNshx4ejgChdVfeKVl%2FGaNuI1izoJwy6iXpbBiqxsBWoJKwNGPlfGAOhKukSmRq71JF6mwgY1nIn34qjonUCBQ9g7E&X-Amz-Signature=3827beee9f445fb28a62d08c7af88657d30e31ecab80c9443281b0f965857bcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY7HWITH%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDB7uv0KMZ7GtGlelEBPmiymViPzYmC5lP0GX3A3NdFLwIgKgnH0gMJ5xE0%2FDq%2Fuq5jinBO0BaVkUgUgblIvfLeefUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEFPVuLDCVx4SXBTSrcA43VLg49p7Br9lHmg9f5YpkcnelJtEZubK9eohW8Mc3g%2Fe4cRHCtWuFKu3uHbVdJMnepGVaFXPEujwDAJclbgpVA9z%2FQxg9WJi9uBADOxV%2FU2dqGq364J1C0sWjrOaFrJHKUAaCcPTHd5hUYzZPiyViNmQYxCIJgqMNVOn1KSfn73f9WdD5BQMfjm6FaUI1UyaB2cnBRexsZs40HVqy7Fs09yqhvxfKRD7dqjHnzSQnAW%2F7n9rCnqP9g83jUY22fgzELvR01fk0vYcw5Drg6znEYntEYuMERj9qW6Is5LIZA5GcagU0IgfU5uR38465bwKVc6P9bN9j2%2FOlksxahFi8X1el6Egu9XSNDAOEkdwvcAuC2tzg385R1YlAo68nMr4z24uP1NvuQdmE5TRoB2tgP%2F8qrnKdUNXMbyu7wH3TQ0FEixk4K9VU205%2F1PW9KK9HP%2Fxoysp9qn3sZ5CnlGt2%2FszHTYlUzSG7QcGKEye0ZyNKFnNlWiPkaCTORiCKdaOaQ%2FKGCgcdVo%2Bhgnhr%2B2hJQtxPo9yqdr9f2PVmJ9XX81zobzsyMlAPM07oGFxVAGNN5aN6cm%2FGK9DkmYkhKsGXIz4MHmTN4YilbgbSdG7NnsSI93bGCwdOV75ITMIez%2Bs8GOqUBY9C1kF5zZ1doSASQPVy7TTVs%2BPMhm%2FYjcycmi1BA%2B0HRIsTHXs%2FxGYhGTe4Z%2FYz%2FWQC%2FfKmKohg7Bbu%2BEkXrFzgJQh1ORKLTvz1BjfMBMrBlkXKlcwxK7e9%2FV8UE75qGAYtNshx4ejgChdVfeKVl%2FGaNuI1izoJwy6iXpbBiqxsBWoJKwNGPlfGAOhKukSmRq71JF6mwgY1nIn34qjonUCBQ9g7E&X-Amz-Signature=92b254813bbd78138d6ace6199d9017d5fc695537ed366a4b669a59d881e236a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
