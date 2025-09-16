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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRLNKRS%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIDYm73MDPXDgya5ALsy%2FAIu2Rl%2FE9smXhg%2BQaRBmcSrWAiEA3PskzWc2O9aAjsZZsamtJac1OQEa0fKroHwp9H9oH2gqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4r6mZexVgpbpa8qSrcAxOs%2FLEJ6kO%2BW0o3%2Fl%2FLzu%2BH3rxi5Q8%2BLmcQ9u0yvCmIkd1pD8N%2FVPLsgy1DqtAlYtiZ%2B%2Bm6J5HX0TO2iDIforh%2FuOl3tjpiFjr1NNu6uBlHVbCSk9OiJC%2FHCyA77Rsng5P5Kofb3trVBhJUrDwWKB%2BrUp0C98jBVApfKtyIO9FBZPvEFYKILeqysobIGEqN9JIEHPFZMq%2FBOdwcvH5kMGCcdxs8hGJBQn3pGGPedj4BnMvXEVbnbymrtRt%2FbROdFrhF5KXGfFCvFcpG1fI857OJq%2Fw8ddLbFfqdrPk9aEksO8M5gqNlcK6W9eJ%2BktQgq6myDgzGaTrvny8bc7KgemDnvmJEBDtSqQDzMwma%2FASSYUfY2sTST%2BUFWDJdOAy7VVwNWHzGGXjQmL4rqP1Xasn86ue2PWkHfr%2BsnoDh3QhfdI3x%2FgyZdd2LDOqlHQfw72Y2r9AkpbjRfiTqB%2Bp1lODJN1KNICKKXzYQK484RueEtn5ZJDAROgiPMuvAxib%2B2FYKRLHkizxOJEVHrJiATpJG0ZWsmdFxM%2FCLKtjZieiiVyQDgTZjs29pCfsRvc7MeL550yQ3gbVbpu2LbZ4qKWAaCqsLqWswx%2FJe%2FB%2BohPWmPtYY4RYFokSRa1DRMKrwosYGOqUBpK2G1Hzer0P9nlM1kOeRpgQUoqMUDZl3o3eeXm8iYCvDvV1mmWChuDF0B2BTk6e7u4Y0MnOM3oXRzawgpZDbGKBP2uY25wNEeuLfDhRUJEeP0djqpxxS%2FGRREfuQgPWas7aW1Dfddx7t9dpUZoFXhszgpV27svTdfm9Uh5RV3i%2FlXX2PVvnjPqjpQYt4G8zSQwJS%2FcYRu0K9AGBMSEA5McYB3GAk&X-Amz-Signature=1e8f365010f83f45ab3ea397163dd02828ee238bd791b0f639aa9ab7e1cb141a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRLNKRS%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIDYm73MDPXDgya5ALsy%2FAIu2Rl%2FE9smXhg%2BQaRBmcSrWAiEA3PskzWc2O9aAjsZZsamtJac1OQEa0fKroHwp9H9oH2gqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4r6mZexVgpbpa8qSrcAxOs%2FLEJ6kO%2BW0o3%2Fl%2FLzu%2BH3rxi5Q8%2BLmcQ9u0yvCmIkd1pD8N%2FVPLsgy1DqtAlYtiZ%2B%2Bm6J5HX0TO2iDIforh%2FuOl3tjpiFjr1NNu6uBlHVbCSk9OiJC%2FHCyA77Rsng5P5Kofb3trVBhJUrDwWKB%2BrUp0C98jBVApfKtyIO9FBZPvEFYKILeqysobIGEqN9JIEHPFZMq%2FBOdwcvH5kMGCcdxs8hGJBQn3pGGPedj4BnMvXEVbnbymrtRt%2FbROdFrhF5KXGfFCvFcpG1fI857OJq%2Fw8ddLbFfqdrPk9aEksO8M5gqNlcK6W9eJ%2BktQgq6myDgzGaTrvny8bc7KgemDnvmJEBDtSqQDzMwma%2FASSYUfY2sTST%2BUFWDJdOAy7VVwNWHzGGXjQmL4rqP1Xasn86ue2PWkHfr%2BsnoDh3QhfdI3x%2FgyZdd2LDOqlHQfw72Y2r9AkpbjRfiTqB%2Bp1lODJN1KNICKKXzYQK484RueEtn5ZJDAROgiPMuvAxib%2B2FYKRLHkizxOJEVHrJiATpJG0ZWsmdFxM%2FCLKtjZieiiVyQDgTZjs29pCfsRvc7MeL550yQ3gbVbpu2LbZ4qKWAaCqsLqWswx%2FJe%2FB%2BohPWmPtYY4RYFokSRa1DRMKrwosYGOqUBpK2G1Hzer0P9nlM1kOeRpgQUoqMUDZl3o3eeXm8iYCvDvV1mmWChuDF0B2BTk6e7u4Y0MnOM3oXRzawgpZDbGKBP2uY25wNEeuLfDhRUJEeP0djqpxxS%2FGRREfuQgPWas7aW1Dfddx7t9dpUZoFXhszgpV27svTdfm9Uh5RV3i%2FlXX2PVvnjPqjpQYt4G8zSQwJS%2FcYRu0K9AGBMSEA5McYB3GAk&X-Amz-Signature=04adff3b9797b42ff6341655362a36542cc1c9675680d5ad180c6312fdd256d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
