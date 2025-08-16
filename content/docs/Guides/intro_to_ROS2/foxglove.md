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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR4K4AD3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIH6k1fzPbZDh0qvvE0Et9doCw0K7fEmJXA9FAW3ZSbj5AiBYo09pg41nhd4oyHNSiP2u22TetvmjrxJFOwixTfWzayr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7HDNSMGw0Y38Ii4YKtwDVI%2F2xN5Ye8sBfPqMHbYJIfGgYRyrZX46Npj5qHJhxMofBVgxtAabAV2btleNOGXzvdcCvS%2BazAN1g36IfVgs2Ue0WFbq3ODh5DTnqor3aDeSLnOmYwXMszK73n2pYktz1ZE%2FjzUJ8794iWIybFbcKtMtOUtK5wzL%2FDbCaXw9d50URzhJy1GkgmEQKRSN9fwh1VwXZ9DrcbdhrzQXRQQwDW6IlLD2LuRd7EskV42OgzJRHcNEKh396xicEJzSmJN8ZUfpiijGLmOuDUFN38W%2F%2F99nA0lh8UIdT3oYCXuMhHG4AVR0gBg8G8xM07zFmCp4KPs5Drz8uooBI5ug3XwIgY%2B%2B%2F8SsvUMbx3JuyoSkr0%2BTGPXBkgAVBKMfNIInwl7h4bUx31SZjffU7kiOijZ1zuzjvK0Gvu%2BAq2qbpnuCkBwspfRWkU6Tcvz2wReHJw%2B7HTCCOcKZHpFOuUCgCtJ0Z5Kw7eLJRmG%2FtL8xx5p6obzrC7yRacKWFJ%2FLe3%2FTyiCO%2BzuVxZu%2FMYQMBtFtfF%2FmpYaAmIHfiWtM%2FP%2FwF3cZls7zE4vVd1X8pQk9I68zCJ4zDbObjJAeZtlXaGOXIXJdOhJL%2FtOaxJLnJnUqz4tfDxIRSDJd8y8Dp%2BkAOK0wkJ6CxQY6pgH5iuCQGpNS2ERkiHLhBQAbkZRvKs04jlZUbvbwPkCph2A3WXzf0aKPWOyyWlPu%2BIaDo0wb8T0VEMeN%2BGpb%2B7Rjyr2404Aqn8wGOfdf%2FiUiSy8xoIkkOC6W6K1LP4zuMj5T4pZOvddVGYgozjlQo8Up0oJxOPqHrXW5h%2BunYdJOLbzjS3ltVrR0x1ziTHvkPPvpvWMqo%2FTWVVGx0AV%2FWd6a9ID1SgYR&X-Amz-Signature=2389892c32cfcf04e212bba00ae23cfad9b90965e180dec30031ffdb8762c672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR4K4AD3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIH6k1fzPbZDh0qvvE0Et9doCw0K7fEmJXA9FAW3ZSbj5AiBYo09pg41nhd4oyHNSiP2u22TetvmjrxJFOwixTfWzayr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7HDNSMGw0Y38Ii4YKtwDVI%2F2xN5Ye8sBfPqMHbYJIfGgYRyrZX46Npj5qHJhxMofBVgxtAabAV2btleNOGXzvdcCvS%2BazAN1g36IfVgs2Ue0WFbq3ODh5DTnqor3aDeSLnOmYwXMszK73n2pYktz1ZE%2FjzUJ8794iWIybFbcKtMtOUtK5wzL%2FDbCaXw9d50URzhJy1GkgmEQKRSN9fwh1VwXZ9DrcbdhrzQXRQQwDW6IlLD2LuRd7EskV42OgzJRHcNEKh396xicEJzSmJN8ZUfpiijGLmOuDUFN38W%2F%2F99nA0lh8UIdT3oYCXuMhHG4AVR0gBg8G8xM07zFmCp4KPs5Drz8uooBI5ug3XwIgY%2B%2B%2F8SsvUMbx3JuyoSkr0%2BTGPXBkgAVBKMfNIInwl7h4bUx31SZjffU7kiOijZ1zuzjvK0Gvu%2BAq2qbpnuCkBwspfRWkU6Tcvz2wReHJw%2B7HTCCOcKZHpFOuUCgCtJ0Z5Kw7eLJRmG%2FtL8xx5p6obzrC7yRacKWFJ%2FLe3%2FTyiCO%2BzuVxZu%2FMYQMBtFtfF%2FmpYaAmIHfiWtM%2FP%2FwF3cZls7zE4vVd1X8pQk9I68zCJ4zDbObjJAeZtlXaGOXIXJdOhJL%2FtOaxJLnJnUqz4tfDxIRSDJd8y8Dp%2BkAOK0wkJ6CxQY6pgH5iuCQGpNS2ERkiHLhBQAbkZRvKs04jlZUbvbwPkCph2A3WXzf0aKPWOyyWlPu%2BIaDo0wb8T0VEMeN%2BGpb%2B7Rjyr2404Aqn8wGOfdf%2FiUiSy8xoIkkOC6W6K1LP4zuMj5T4pZOvddVGYgozjlQo8Up0oJxOPqHrXW5h%2BunYdJOLbzjS3ltVrR0x1ziTHvkPPvpvWMqo%2FTWVVGx0AV%2FWd6a9ID1SgYR&X-Amz-Signature=fab701078abdc93522ca64e029ba71a64b281b0633fb1a3f99682cf059f70be2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
