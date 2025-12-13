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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGS6KQOS%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIEGkl2TqmSj2rr%2FB7kr%2B5Se8byfxgjuQ6ZqCs2u7Xx99AiEA2h%2FeWe3QK2sD9DG1bbzYZyuNLzBScVxTdNLG%2BBUHJWgq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDLdO7p4Ika%2BYF%2Fi12yrcA0YDL27jSf6CGddjKicL0VArBEwotB8%2BTm3V7FC5IT74NLovN70wHehq%2FO60ZTtk60R2LuM6nUI%2FaFT%2BKajnbbNLQuDZobX2bvsyOja6e%2BUihlCl07UE1EoZGpuicmKOlJk90Ds5%2FxFhhM%2FqNtYBxAoaGRIdI515zTMqnoW9TW%2FTRg1FjIiqsebFZlMNTgO7RFxzOEVx0gMyLSBCISr9KN%2Bf8JMNhW71mspoLzy%2BDg1uE8tht3sEIq6eePRu0gn7ucV%2FBC0GV7Ic3bGPojkcOMhHTyX0FIf0TsH%2B3nl3bL2D%2BUzr0Z56KFbxdtJvYit2tao0HvAapmPTUiIiIVFbLAJvjtcojRCVtmMdNdJaWKSZmhjSiro%2FSVy3vRlLUdZkn97I4KHZFz0HXAxQ2I7CkYuXkYX%2BrZn6LDn8cUiT1mfyi2vkzeg9VY8312H5I%2F%2BvClceoW7ve0NHSj8ZQelUf5t6TfCn%2By6q1YA%2F6TP%2B4k1OKJlT719GA8KJhn4SOMwFQNdGZuJlPus3Wo3loCLoQ6M3260rut6Ru4HjjrlN7miiQ3TQyihv8qzZwCZzz2mmJtlMxiZz8FUj4MoSMraMdPPxXqm05HRFfhb%2B5rS6CsU%2BdpmuzEUCQZGxdH2TMMrz8skGOqUBLJyBOAHzVXooJlhx3BRyVqYtGRw7k6DbIropH9KtZpUybxSEIRIUAf0DJX3LkcV2yG%2BZ29W3ef53%2FdRE1DzoTe5jDnlzRPpqsIzWgkV24qgUlIlo5dO6CZIHCNKvHsbcN08HBuTaU7Dw7hIeGeBrUQwcc1Zvuv60vcALkZYm6WlCGIUqxlvnO%2B89ZV6jHLLiYZW7KJpjq9l5Dclz7rjuEEZXF2M1&X-Amz-Signature=13181be83a0497ee878c77f5ee30e9fc81cb649b920d0411911029e0b83a2f5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGS6KQOS%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIEGkl2TqmSj2rr%2FB7kr%2B5Se8byfxgjuQ6ZqCs2u7Xx99AiEA2h%2FeWe3QK2sD9DG1bbzYZyuNLzBScVxTdNLG%2BBUHJWgq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDLdO7p4Ika%2BYF%2Fi12yrcA0YDL27jSf6CGddjKicL0VArBEwotB8%2BTm3V7FC5IT74NLovN70wHehq%2FO60ZTtk60R2LuM6nUI%2FaFT%2BKajnbbNLQuDZobX2bvsyOja6e%2BUihlCl07UE1EoZGpuicmKOlJk90Ds5%2FxFhhM%2FqNtYBxAoaGRIdI515zTMqnoW9TW%2FTRg1FjIiqsebFZlMNTgO7RFxzOEVx0gMyLSBCISr9KN%2Bf8JMNhW71mspoLzy%2BDg1uE8tht3sEIq6eePRu0gn7ucV%2FBC0GV7Ic3bGPojkcOMhHTyX0FIf0TsH%2B3nl3bL2D%2BUzr0Z56KFbxdtJvYit2tao0HvAapmPTUiIiIVFbLAJvjtcojRCVtmMdNdJaWKSZmhjSiro%2FSVy3vRlLUdZkn97I4KHZFz0HXAxQ2I7CkYuXkYX%2BrZn6LDn8cUiT1mfyi2vkzeg9VY8312H5I%2F%2BvClceoW7ve0NHSj8ZQelUf5t6TfCn%2By6q1YA%2F6TP%2B4k1OKJlT719GA8KJhn4SOMwFQNdGZuJlPus3Wo3loCLoQ6M3260rut6Ru4HjjrlN7miiQ3TQyihv8qzZwCZzz2mmJtlMxiZz8FUj4MoSMraMdPPxXqm05HRFfhb%2B5rS6CsU%2BdpmuzEUCQZGxdH2TMMrz8skGOqUBLJyBOAHzVXooJlhx3BRyVqYtGRw7k6DbIropH9KtZpUybxSEIRIUAf0DJX3LkcV2yG%2BZ29W3ef53%2FdRE1DzoTe5jDnlzRPpqsIzWgkV24qgUlIlo5dO6CZIHCNKvHsbcN08HBuTaU7Dw7hIeGeBrUQwcc1Zvuv60vcALkZYm6WlCGIUqxlvnO%2B89ZV6jHLLiYZW7KJpjq9l5Dclz7rjuEEZXF2M1&X-Amz-Signature=2279040719a8dd0b230a32cd2ed2094c2c793468f652d4491c35b822db2c8a85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
