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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFL3TFTV%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMMzUkOzZMm%2BLFzRNapkODrQ0M86FBUsQ0Oqp%2BXdX1hAIhAJZbWRB0JsCCOEKWz0WczAf6eLOIg4BxTb7ci5PAV3suKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy89J6IYBLb7%2BzjPcIq3APgqV38Y4Hv3bHMuZh36g5Dv1K9j%2FGOxe9rvZ44ehjAButJh2gzXn0nxTXGBfR5kQSzvAh%2BN5d9KB0W0DkPW0cGa3qZ4X4TiEDfhAWaGrSnQH32FPJXqEKeQDQ0gOPxchM8P2utdGymeS0S4RrVt9X8AyQAemz9ztOajXIXqn4etFhkQsRzfdrcisTTPi9RBQZjTX2izYTFOP%2BSUSi8YVYJqOqOlzpG76cKWrqpNcPzBwxlSfXAO1I7PUqh0%2Fm640a0MNck%2BtITY3Uz3AVZMur7G1RWqGKUHqXpvIOb%2FFlejhL6regGPMMvVQ6a%2FNWrRagN3ol2sEg8kANUEjt%2B51MXjwKl6Sp75GNpR9B3OsvJ8A%2BLflNUvolSQHzqNx9Ow3JRhUZO3eVLBbMbMvgBqRLdDImNhf8lP7MrqsIjpy2CH7aXGtoQBs5%2FSjXhCLfyLtgjNgYhJMM6O4mYhmm%2BaQhkTpeZc31n7UzfJOmj91DVu7W6No%2BQpOi0%2B6UOJw249YgUv%2FS0ZFS%2Fb6a%2F2Glm5Gg5SeJP4Uf7h%2FuzAytn6RqFb54VyR5y9A02yoI9yIZr9R%2FUq6jOAEDzD95elQ%2B1Zy17UnhiaZfjZNj9QYkKHObg1MRBvpYGsGoUaYozszDqlrXIBjqkAYF%2F6Gp9hQuD6omjQFsCfi%2B9f665ijq7rTxCxOxqEW2bsiNbAxRoVqgOFw0C2SVoVQ4hRN%2B56agkBRvmsdLlSz%2B8kRX2Phir0paUhDU1SLhi8P74EaFDGCV1J%2Fk6tlXiS9BAEEyehLSqfJKz0ouRSf96%2BclzqNUufKfr4K0h5ChjFWQXW%2Bt78cnNXT0CXTFTGLzUHMUt%2B600M%2Fy7ZwC6wARxl74O&X-Amz-Signature=a8f411f82e99295b722fdc0dc5d4dbe7e9bd689525dff790fa73b18aae418bfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFL3TFTV%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMMzUkOzZMm%2BLFzRNapkODrQ0M86FBUsQ0Oqp%2BXdX1hAIhAJZbWRB0JsCCOEKWz0WczAf6eLOIg4BxTb7ci5PAV3suKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy89J6IYBLb7%2BzjPcIq3APgqV38Y4Hv3bHMuZh36g5Dv1K9j%2FGOxe9rvZ44ehjAButJh2gzXn0nxTXGBfR5kQSzvAh%2BN5d9KB0W0DkPW0cGa3qZ4X4TiEDfhAWaGrSnQH32FPJXqEKeQDQ0gOPxchM8P2utdGymeS0S4RrVt9X8AyQAemz9ztOajXIXqn4etFhkQsRzfdrcisTTPi9RBQZjTX2izYTFOP%2BSUSi8YVYJqOqOlzpG76cKWrqpNcPzBwxlSfXAO1I7PUqh0%2Fm640a0MNck%2BtITY3Uz3AVZMur7G1RWqGKUHqXpvIOb%2FFlejhL6regGPMMvVQ6a%2FNWrRagN3ol2sEg8kANUEjt%2B51MXjwKl6Sp75GNpR9B3OsvJ8A%2BLflNUvolSQHzqNx9Ow3JRhUZO3eVLBbMbMvgBqRLdDImNhf8lP7MrqsIjpy2CH7aXGtoQBs5%2FSjXhCLfyLtgjNgYhJMM6O4mYhmm%2BaQhkTpeZc31n7UzfJOmj91DVu7W6No%2BQpOi0%2B6UOJw249YgUv%2FS0ZFS%2Fb6a%2F2Glm5Gg5SeJP4Uf7h%2FuzAytn6RqFb54VyR5y9A02yoI9yIZr9R%2FUq6jOAEDzD95elQ%2B1Zy17UnhiaZfjZNj9QYkKHObg1MRBvpYGsGoUaYozszDqlrXIBjqkAYF%2F6Gp9hQuD6omjQFsCfi%2B9f665ijq7rTxCxOxqEW2bsiNbAxRoVqgOFw0C2SVoVQ4hRN%2B56agkBRvmsdLlSz%2B8kRX2Phir0paUhDU1SLhi8P74EaFDGCV1J%2Fk6tlXiS9BAEEyehLSqfJKz0ouRSf96%2BclzqNUufKfr4K0h5ChjFWQXW%2Bt78cnNXT0CXTFTGLzUHMUt%2B600M%2Fy7ZwC6wARxl74O&X-Amz-Signature=34b2461ae3e3ae5f7ff81931b1709f639cced89ef6b6a5d4643dcdbe381ebd7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
