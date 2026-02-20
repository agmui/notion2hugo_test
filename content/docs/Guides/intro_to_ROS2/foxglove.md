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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JO3YYPT%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyDB7A34cxRnk%2BObE0aacVYTscWsF%2FW4ZP1niCXZRiWAIhAOrbz0LODGHccNWc19M8WIzyvJ7wZse3ig1sXQpObQeBKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxzFqRCaBtVJFtQpAq3AMkEYqlx3rUj2ebKszZTOKeG89HWfuwRAFZ2XWjfQMa9N3hJ2OCK8ULBuieF1t2NchWQLv%2FALkN%2FcOVa%2FU4%2FGK6gpYfRQmFNA1M6jZNjd0ANOWqzPJcAqq74KMRQhcAq8DvI5FPA7%2BWYqsqSk3cd4PNoHh1YZUz%2BxFbHX4de9DVmFlh0nmFnzBY4NxSQ24M11gLJXibcO6CP7ceeo5NA%2BNB5TZXKnulgCiD7wxjOF6ClhFHhLmjECb52j7yenKDBPVedwElxCnocyMeBj0YNUtV779qjBiIb0fptRaL%2BZ%2Bbm0n%2FVqJKtgQt9Dd7780W3%2FXLwhZqfpJzkEYL1JIcai6KOhOUvJYm1yrHjxxgQR5U%2F0xVJBd%2Bj5D%2Bq1u6m73IcTmT6MDpEQxQXSJpSm0kyVMxbNn1l4vAJq9xXbPoL5cgpioFxNJnfzNZ16faZ4syrEjRFBXyCqFNYweMKxta%2B06DQFFDngLuVy1wKXiPjPx05LQLqVKB9fSmMoksNI5X79WkK02F3%2FOIk%2FTZBEaqVk%2BLISwh5yn%2Bv0Rxayk1OGgnoAR2lX2reWFUBJPX9aq%2BGEpKLIy0ghxu2hhb5st3SaLez1adk4N665IUcHkk74cD1igb1I%2BR4KgtaFI2hDCI6N7MBjqkAT%2BD60m6%2FbwllsSqGGcViyxNR9bSKWKx5st7Riwyok6oJkrl5jgO4QYTx4SOGN0f06Fxqm02bybEq%2FZY7rGgnqoGORO09NnifpoRrw0DTFEr%2Bc0f4zc1aHGYF4RXJzw4hnHAAbukz1A3MlhZxr7LALfUxBWZVJNKDd88xyEEfBBNXtRC0yxUJku79MFO5k2pAx3TvbqzoNhUVGlBY0Caw2AXNB7G&X-Amz-Signature=56151fb952a19679a4b40e41bdfef80184631e7ac23dc7e79ae19a64c54524ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JO3YYPT%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyDB7A34cxRnk%2BObE0aacVYTscWsF%2FW4ZP1niCXZRiWAIhAOrbz0LODGHccNWc19M8WIzyvJ7wZse3ig1sXQpObQeBKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxzFqRCaBtVJFtQpAq3AMkEYqlx3rUj2ebKszZTOKeG89HWfuwRAFZ2XWjfQMa9N3hJ2OCK8ULBuieF1t2NchWQLv%2FALkN%2FcOVa%2FU4%2FGK6gpYfRQmFNA1M6jZNjd0ANOWqzPJcAqq74KMRQhcAq8DvI5FPA7%2BWYqsqSk3cd4PNoHh1YZUz%2BxFbHX4de9DVmFlh0nmFnzBY4NxSQ24M11gLJXibcO6CP7ceeo5NA%2BNB5TZXKnulgCiD7wxjOF6ClhFHhLmjECb52j7yenKDBPVedwElxCnocyMeBj0YNUtV779qjBiIb0fptRaL%2BZ%2Bbm0n%2FVqJKtgQt9Dd7780W3%2FXLwhZqfpJzkEYL1JIcai6KOhOUvJYm1yrHjxxgQR5U%2F0xVJBd%2Bj5D%2Bq1u6m73IcTmT6MDpEQxQXSJpSm0kyVMxbNn1l4vAJq9xXbPoL5cgpioFxNJnfzNZ16faZ4syrEjRFBXyCqFNYweMKxta%2B06DQFFDngLuVy1wKXiPjPx05LQLqVKB9fSmMoksNI5X79WkK02F3%2FOIk%2FTZBEaqVk%2BLISwh5yn%2Bv0Rxayk1OGgnoAR2lX2reWFUBJPX9aq%2BGEpKLIy0ghxu2hhb5st3SaLez1adk4N665IUcHkk74cD1igb1I%2BR4KgtaFI2hDCI6N7MBjqkAT%2BD60m6%2FbwllsSqGGcViyxNR9bSKWKx5st7Riwyok6oJkrl5jgO4QYTx4SOGN0f06Fxqm02bybEq%2FZY7rGgnqoGORO09NnifpoRrw0DTFEr%2Bc0f4zc1aHGYF4RXJzw4hnHAAbukz1A3MlhZxr7LALfUxBWZVJNKDd88xyEEfBBNXtRC0yxUJku79MFO5k2pAx3TvbqzoNhUVGlBY0Caw2AXNB7G&X-Amz-Signature=c3043ed8e3972d7f7e05a22286f69e75ba82732e3ecf4aae74f4f39fb1d2b27d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
