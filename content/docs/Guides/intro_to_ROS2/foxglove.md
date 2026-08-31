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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A6LP6NP%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV39sooe69%2F9VJVMb2QkpcAMvm641KnZzJEgyx%2F4X%2F4AIhAJEW9wJAHUVUcQ1nLyackISWPslknqAj42RT6kWByoxrKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8%2BQ9U7ygwfASwIXAq3APbspHWIYV1wgKFU6Ly3Rx4HOxFMeCXMq0aCEwDgTKlqk8p47JBzhjskQYavl1jZ7hr7l616yMEsF6kg%2BoePzJSGTCIv4pfQ%2FYLg2m89Cl0tyhji0NF%2BhmSnujtfEXzX5RLiTLrWZsr265M%2FNFtPqMsUGP294OshXl9tVmDn96lt9SVy32cazJfH9OOWYz%2Bz8SoHHGrIIQoANdq4xwsaIaj7wbHGqfjXDARCAkbtuEuYe73eSsdk7JuXn5vYBezxa0zVcX6cdmR3ghf1CZ5RrG%2B5h8CYFEgQxCAsk%2FpJ7ByXWE0QE%2BL5fy5JDrZRMcnT8jRkKFzRxD3uYINQ2ZHkfR2V1SkKUG0NLEv49xyx5Cbknpp%2BEqrpOSvgS%2Bjvcf9bBm6q0Wcw6N9eK5yaZ8gxM76qGu0oWOwrPnS4UpIzlrN5AqrqJQE7CUrAYCi9tlRzzCRr6MQ6xY2H5FjvPMjcERUfFtdKX1cu9pqhfyNqZQVCG7Tvue%2FrtE%2BmFose3N7Ld0hZuQjNv1dP%2BfA%2FkwKCoPZftucGjZJ9u0uB5vyTQwfJndbG3xI8bT6Iptkdl0dITsSNW4DzlD2J3oVDhzUktiZb7Hj0kLzcJSSfqTX3BMNYOVkj9%2FCcXcWveU%2BnDCU4dPUBjqkAbHs3JfGOUM3kkCCxRzgb8I1FSwonXWRi6YjtiVmjbJEz8exA2lSwGsC93Kmt0jnJtWYn44T9LM6Y3RyauAD3CYTh78guNPxNzf9DnukzrnyOpRzzxxPXepK6q9qZgafbR2PagBS21T9AgDnrrE8mDEGUjN80J9WNZJs%2BndMnYg0mMrkFLdQbXRU2SGhYiUr3FsUt8On0%2BqRHcmCq7WDUxdCIKN0&X-Amz-Signature=07688701a99ffe1c869f30dd632d6e82915b465251aace7dc01444154cc310b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A6LP6NP%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV39sooe69%2F9VJVMb2QkpcAMvm641KnZzJEgyx%2F4X%2F4AIhAJEW9wJAHUVUcQ1nLyackISWPslknqAj42RT6kWByoxrKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8%2BQ9U7ygwfASwIXAq3APbspHWIYV1wgKFU6Ly3Rx4HOxFMeCXMq0aCEwDgTKlqk8p47JBzhjskQYavl1jZ7hr7l616yMEsF6kg%2BoePzJSGTCIv4pfQ%2FYLg2m89Cl0tyhji0NF%2BhmSnujtfEXzX5RLiTLrWZsr265M%2FNFtPqMsUGP294OshXl9tVmDn96lt9SVy32cazJfH9OOWYz%2Bz8SoHHGrIIQoANdq4xwsaIaj7wbHGqfjXDARCAkbtuEuYe73eSsdk7JuXn5vYBezxa0zVcX6cdmR3ghf1CZ5RrG%2B5h8CYFEgQxCAsk%2FpJ7ByXWE0QE%2BL5fy5JDrZRMcnT8jRkKFzRxD3uYINQ2ZHkfR2V1SkKUG0NLEv49xyx5Cbknpp%2BEqrpOSvgS%2Bjvcf9bBm6q0Wcw6N9eK5yaZ8gxM76qGu0oWOwrPnS4UpIzlrN5AqrqJQE7CUrAYCi9tlRzzCRr6MQ6xY2H5FjvPMjcERUfFtdKX1cu9pqhfyNqZQVCG7Tvue%2FrtE%2BmFose3N7Ld0hZuQjNv1dP%2BfA%2FkwKCoPZftucGjZJ9u0uB5vyTQwfJndbG3xI8bT6Iptkdl0dITsSNW4DzlD2J3oVDhzUktiZb7Hj0kLzcJSSfqTX3BMNYOVkj9%2FCcXcWveU%2BnDCU4dPUBjqkAbHs3JfGOUM3kkCCxRzgb8I1FSwonXWRi6YjtiVmjbJEz8exA2lSwGsC93Kmt0jnJtWYn44T9LM6Y3RyauAD3CYTh78guNPxNzf9DnukzrnyOpRzzxxPXepK6q9qZgafbR2PagBS21T9AgDnrrE8mDEGUjN80J9WNZJs%2BndMnYg0mMrkFLdQbXRU2SGhYiUr3FsUt8On0%2BqRHcmCq7WDUxdCIKN0&X-Amz-Signature=77b8b0d79f0cd88afb0692e818076ace1dd9a43e7eaa6141e84ca18b3565edd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
