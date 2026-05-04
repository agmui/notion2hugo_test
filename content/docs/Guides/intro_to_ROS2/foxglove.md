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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RHXECH5%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bv1p7h3LIA5i%2FMcxRmp0wgIM%2FZrWbuvQSByoAFxaEwgIgMX1L3SWVgM9CwGVCfXQO4gGQqmUOWWMbGq0sDkB55L4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDFYyNS4YYB6CmBdLNCrcA1biZfDN7Hmu2d05paXW8od76BFPwtQDdj3CxZWQsjny1TVIC1Otxf0zmnDr%2FGlYqjTVlpOj%2B5drGZSAGhJi5HSpRGo0OaN01xuYQs05LlCneJYjr5KhHMEQ2Nr8dcarQ6LObDUmgfRpGJye6FcdsphvKeDfjOTQ72tfK8TWYPYfBq%2FBV2VOsDMeeOPX0AFuAP7bx20wWL0zM%2FPUnHDBsptVTKsjesR%2F%2FPpzDlPYklwbWDv0UKKEeHHYRLjETab0ebkCvBcZE4HBQ285one7J4uNMh5rhVteWvdh%2F5Eb%2FfloeV48mOUW%2BtjUu1JNXVC0MuyERFlxbn69Le1eSNKu%2BI%2F5hI2VutHjbBSpk1ovrgF4VGDGs5m0PvilxIdY3vy9iflQJ7C4G67uyjwqDRmUewhzyXi21lk74WWMAE%2FLxwe8uhHHTabsgGzLntKQk9v4848V2iG3tw8wotrqPi6BN%2Bi839UQWV8O2Rm9A0VOPX%2BiQcbDUldTeO9wE7ZcyOJfIF5QUIE0X8ayIuxlluxZ0ctp%2FfY%2BB2Q35Pyf2copTGPtMjEjITl8iMJYlurxCiwEb7PGu0BIbc1PbcTsAM%2FOAO2U9WfQn6YZw0Zo8u9w1ZshFAwvVCoYN5VqXLnuMNj4388GOqUBHFe7gERVqLMppA8mlqlnDgAFy5pPdGZRUzEPaFA7Tu%2FlXZsM5LGFt7b8uStX00FXWD%2Bj5Gi8StKzm9ae79EVQmBcl%2FSnwt8TKVhpcFMvMhNOiBelW8AlGp8yaeLTX0xGliWRR6XwXwK1moSxGniU1QI1C%2FHqENga2Od4kBE%2B8jxdqHA%2BcMwQZfsB1hUC5np9vo7OCEXIBJE3aLAo4VO0b%2FSlzuLt&X-Amz-Signature=5ccd55f8b8e0f6187d9992be75b33127a8faecdf14beecf04c9bff296baa7303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RHXECH5%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bv1p7h3LIA5i%2FMcxRmp0wgIM%2FZrWbuvQSByoAFxaEwgIgMX1L3SWVgM9CwGVCfXQO4gGQqmUOWWMbGq0sDkB55L4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDFYyNS4YYB6CmBdLNCrcA1biZfDN7Hmu2d05paXW8od76BFPwtQDdj3CxZWQsjny1TVIC1Otxf0zmnDr%2FGlYqjTVlpOj%2B5drGZSAGhJi5HSpRGo0OaN01xuYQs05LlCneJYjr5KhHMEQ2Nr8dcarQ6LObDUmgfRpGJye6FcdsphvKeDfjOTQ72tfK8TWYPYfBq%2FBV2VOsDMeeOPX0AFuAP7bx20wWL0zM%2FPUnHDBsptVTKsjesR%2F%2FPpzDlPYklwbWDv0UKKEeHHYRLjETab0ebkCvBcZE4HBQ285one7J4uNMh5rhVteWvdh%2F5Eb%2FfloeV48mOUW%2BtjUu1JNXVC0MuyERFlxbn69Le1eSNKu%2BI%2F5hI2VutHjbBSpk1ovrgF4VGDGs5m0PvilxIdY3vy9iflQJ7C4G67uyjwqDRmUewhzyXi21lk74WWMAE%2FLxwe8uhHHTabsgGzLntKQk9v4848V2iG3tw8wotrqPi6BN%2Bi839UQWV8O2Rm9A0VOPX%2BiQcbDUldTeO9wE7ZcyOJfIF5QUIE0X8ayIuxlluxZ0ctp%2FfY%2BB2Q35Pyf2copTGPtMjEjITl8iMJYlurxCiwEb7PGu0BIbc1PbcTsAM%2FOAO2U9WfQn6YZw0Zo8u9w1ZshFAwvVCoYN5VqXLnuMNj4388GOqUBHFe7gERVqLMppA8mlqlnDgAFy5pPdGZRUzEPaFA7Tu%2FlXZsM5LGFt7b8uStX00FXWD%2Bj5Gi8StKzm9ae79EVQmBcl%2FSnwt8TKVhpcFMvMhNOiBelW8AlGp8yaeLTX0xGliWRR6XwXwK1moSxGniU1QI1C%2FHqENga2Od4kBE%2B8jxdqHA%2BcMwQZfsB1hUC5np9vo7OCEXIBJE3aLAo4VO0b%2FSlzuLt&X-Amz-Signature=8a041d29f57438efd6da07b48379be2ffcb59929cfc480f17592298bf36186ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
