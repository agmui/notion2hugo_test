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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUJ75FPV%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHE65k0w35Y0ym2SgzY2U6aobsbRyKVTK6sxgvXtxB%2BOAiANTOgZkvkSehgF8oZfQX1zLWIb0utsrGf0WUtmD98rmSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP2xeB2Ck%2B5CPwHNHKtwD8xY4qVf804rcmUXgT1HRQjB1m24HSZjXTGgSxgAIafDFYegKOn044893v82ST5YuKxMVa%2BMP8u51GgTrcabKO73pVI%2F2dRQa%2FA8HinlJw%2F3NtnjPj6DN4gMJGYkgW9ZywEJW9brT0cOV8WNEhhCJOHRb4rzbDL%2FSBwbo2Iy%2BPtDcC0xqnXSD8fNiN4TQpRyp5Mrqadu6TTbPlQaOo2ww0sjorGCSe1eXQ%2FA1MTy7dbkKryv1BYMQlVIZ5zrkbJ58TbItdRusJgszE2G4nTRmzRdBo7LARSLlD%2B9XP1SvhkvugZPu7W7L6xW2eopv%2FQOPWv8MGrSXZ6nY0Y5rc%2Bug90QOGGVd0rudWuVN4PggnyFJPthAf4MTdOLR540eYZBkJPQ6uDAtAOrHpVN5hNQxeZu0p6IMZgFL3pga27jYdUAXxUwwkBUF5%2ByB1S9jRwcvODa3su2siXElVagjI6KSt4VqOc8nc82t5kPbwn1YccGXRvuywbOwJslxFJ77JgwzxhHKiZM3Ne41te%2FauDEfkLwTxTfEZ%2FzdKx2xgHVkGS8C%2B5sxTGm3m4RSIsdgcGcFjRAiRYUwUrbQAykgFNBZFeHNuFE4FeWKcvnyQbDtgDjeKEP6zqu%2Bcl792N8wvJO%2FzAY6pgEgFOSKsX%2F%2B8P7TQKmYmwJmGLgU7%2FNGEvTNCIFa6t52xsnz4RizL4A%2BGbawYtKu9JErIkVe9HD7X3zpipD0Mbz7vcv6jc7FOWcXYVb33ThHfov2Xqo%2BEYtGCrGRXn5NXiAam%2B4wIdBALczbyqZrqS3GjflIHaNusn1k2qCHXrt%2FeZNj%2BH2nTsnFXa2dtKIv%2Febi%2BHsPvHsGyK8YIiO%2Fpyfj%2FVb5XmBA&X-Amz-Signature=9e612b44d3eaf6d522ef4625aa1e238dd7ed5683588f10be855432ef35fa4027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUJ75FPV%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHE65k0w35Y0ym2SgzY2U6aobsbRyKVTK6sxgvXtxB%2BOAiANTOgZkvkSehgF8oZfQX1zLWIb0utsrGf0WUtmD98rmSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP2xeB2Ck%2B5CPwHNHKtwD8xY4qVf804rcmUXgT1HRQjB1m24HSZjXTGgSxgAIafDFYegKOn044893v82ST5YuKxMVa%2BMP8u51GgTrcabKO73pVI%2F2dRQa%2FA8HinlJw%2F3NtnjPj6DN4gMJGYkgW9ZywEJW9brT0cOV8WNEhhCJOHRb4rzbDL%2FSBwbo2Iy%2BPtDcC0xqnXSD8fNiN4TQpRyp5Mrqadu6TTbPlQaOo2ww0sjorGCSe1eXQ%2FA1MTy7dbkKryv1BYMQlVIZ5zrkbJ58TbItdRusJgszE2G4nTRmzRdBo7LARSLlD%2B9XP1SvhkvugZPu7W7L6xW2eopv%2FQOPWv8MGrSXZ6nY0Y5rc%2Bug90QOGGVd0rudWuVN4PggnyFJPthAf4MTdOLR540eYZBkJPQ6uDAtAOrHpVN5hNQxeZu0p6IMZgFL3pga27jYdUAXxUwwkBUF5%2ByB1S9jRwcvODa3su2siXElVagjI6KSt4VqOc8nc82t5kPbwn1YccGXRvuywbOwJslxFJ77JgwzxhHKiZM3Ne41te%2FauDEfkLwTxTfEZ%2FzdKx2xgHVkGS8C%2B5sxTGm3m4RSIsdgcGcFjRAiRYUwUrbQAykgFNBZFeHNuFE4FeWKcvnyQbDtgDjeKEP6zqu%2Bcl792N8wvJO%2FzAY6pgEgFOSKsX%2F%2B8P7TQKmYmwJmGLgU7%2FNGEvTNCIFa6t52xsnz4RizL4A%2BGbawYtKu9JErIkVe9HD7X3zpipD0Mbz7vcv6jc7FOWcXYVb33ThHfov2Xqo%2BEYtGCrGRXn5NXiAam%2B4wIdBALczbyqZrqS3GjflIHaNusn1k2qCHXrt%2FeZNj%2BH2nTsnFXa2dtKIv%2Febi%2BHsPvHsGyK8YIiO%2Fpyfj%2FVb5XmBA&X-Amz-Signature=ae6dcab439bdcc74fc7d3268cb1550e8d0b96f0d5b1e3dc5270542c47001ecd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
