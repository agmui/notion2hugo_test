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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWX3KLR3%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIHu5QLc%2BzoTV67tGpMdSK3E2U%2BlicDCke2vBG9v6uQJqAiEAzgdGpPQMeqMfL4MIVIXeG9LvChCs6amLOQvZIFyOkqMq%2FwMIBBAAGgw2Mzc0MjMxODM4MDUiDBML8ANKhNRDYVLc1SrcAwm5UZY4Y0BpDDk3joQqHeAuo7gzCzlD4WV7iKrh8dt%2F2gjyAl%2BdvI7fS8TJtz0uovgTB%2BaWHFxBOqiLYied7It0nJIvXSzUR8pCHkckGdEPncjpRPpU%2B8Ie01dTb37x8nzbiCdRTa2Nu%2BRqQF69g41JgDENN49xnRUw7kOYeDiLOOwSZe09N0XaXI5Wkh3WiKhHfRGBlxQmDb5ec%2F1WabsGXvbclRfm3ien1LoKX8TGyw30HL1sn0HRAkw8mO04I5c5BRoEC1jBVsDo7%2BZgPWpJt3e1djFTn1oYCBqZQ3XNSDrJT64SqoOjUkR0lRXI3l6ykHzMQZEYyXQ8vCfZSN1EEKVoCgVEQuTQMvAlfYVRTHyKI6qUj%2BIG5lnyST7A0avyGRT%2BVUVojD7DCgGPNg9wHiA2iAEdsyl57dMCFztMgy9cVtEYU34MOD6CZ1zshXMHTO1Qm6ch7zLoawQzSnFLOHeiMyyPfLgtatBu6moQh1qkn8uYP55gJcjYJrtpyiNQtX7NmrVLJ5efwHJhN%2Bq%2BcdumpaY%2FYyNXRwWrlVotqCW8RqFogzT0PDMbKVmWU0X5Y80WjWF2Une03SRQq6oHL5FKgaAo1NyKKt0HekmEvo6KnICPvcl6wmaiMPO6nNIGOqUBtDQ2GlKJWb5L6LZo%2FTnsj3jPgPfVvZz4bwLUDuxZ9TlGueh6LnXAZqHxoZ%2BJI5%2FcMoLQ6GIMRx6MNxzh%2BTK8Mnz3JfE8RNw%2BKEWzejOTB6UWp8INaQIT5orYelygL%2FPSWtBb4M9RjGA3ga8V4ITxI8FtFt0kz%2BCZsm0SLVHeVzg1X6aIPZJRD93BKqOz%2Fwy1gO7gFhRT1eRww5OxhTWFFnYAaclr&X-Amz-Signature=51195f14da90d0424c6ee1113c1ba13f48eaa21efd2731e090d21d578162d289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWX3KLR3%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIHu5QLc%2BzoTV67tGpMdSK3E2U%2BlicDCke2vBG9v6uQJqAiEAzgdGpPQMeqMfL4MIVIXeG9LvChCs6amLOQvZIFyOkqMq%2FwMIBBAAGgw2Mzc0MjMxODM4MDUiDBML8ANKhNRDYVLc1SrcAwm5UZY4Y0BpDDk3joQqHeAuo7gzCzlD4WV7iKrh8dt%2F2gjyAl%2BdvI7fS8TJtz0uovgTB%2BaWHFxBOqiLYied7It0nJIvXSzUR8pCHkckGdEPncjpRPpU%2B8Ie01dTb37x8nzbiCdRTa2Nu%2BRqQF69g41JgDENN49xnRUw7kOYeDiLOOwSZe09N0XaXI5Wkh3WiKhHfRGBlxQmDb5ec%2F1WabsGXvbclRfm3ien1LoKX8TGyw30HL1sn0HRAkw8mO04I5c5BRoEC1jBVsDo7%2BZgPWpJt3e1djFTn1oYCBqZQ3XNSDrJT64SqoOjUkR0lRXI3l6ykHzMQZEYyXQ8vCfZSN1EEKVoCgVEQuTQMvAlfYVRTHyKI6qUj%2BIG5lnyST7A0avyGRT%2BVUVojD7DCgGPNg9wHiA2iAEdsyl57dMCFztMgy9cVtEYU34MOD6CZ1zshXMHTO1Qm6ch7zLoawQzSnFLOHeiMyyPfLgtatBu6moQh1qkn8uYP55gJcjYJrtpyiNQtX7NmrVLJ5efwHJhN%2Bq%2BcdumpaY%2FYyNXRwWrlVotqCW8RqFogzT0PDMbKVmWU0X5Y80WjWF2Une03SRQq6oHL5FKgaAo1NyKKt0HekmEvo6KnICPvcl6wmaiMPO6nNIGOqUBtDQ2GlKJWb5L6LZo%2FTnsj3jPgPfVvZz4bwLUDuxZ9TlGueh6LnXAZqHxoZ%2BJI5%2FcMoLQ6GIMRx6MNxzh%2BTK8Mnz3JfE8RNw%2BKEWzejOTB6UWp8INaQIT5orYelygL%2FPSWtBb4M9RjGA3ga8V4ITxI8FtFt0kz%2BCZsm0SLVHeVzg1X6aIPZJRD93BKqOz%2Fwy1gO7gFhRT1eRww5OxhTWFFnYAaclr&X-Amz-Signature=d4bd290b8cea337b28611aa90dcf7e2aecc492fae160f4da88b700a24a8709a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
