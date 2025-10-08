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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQF77H2I%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCt89oXwSydoByhl9phoVG%2BiUwytLjWwrMO9Y1zKi7NLAIgQqM2Q0oc9iPqn69Av5qB1WbsxKdcoGFB2%2Fj0swckOmYqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0237RW4Mtg8rY7WircA%2F26YTqn0JMdhYZbDNpvTQuU7mINitZy4USULMhRIvMtnBUa0I7szCCbYS5gQy4KEcAVpQXBQ9aQh3b7NKzE2d9Avkxy8a%2FY0Ur%2Fwf8opA%2FvhLieMkQE%2FgY4rtRQAM%2B4iTUgvwaVxGvkUv%2BvrjCa9Npi5s1F7bz4CB1Owj0qMjvvfhRfjhTWxN%2BCCC0VloXDNAWPaNHyqRDorTLTu53BD0znl7IXH3Wyote8NLz5jJWng3l7qmqFVcOmxWmZv4hiMe3DGx1dH9NFpj4aKpM16EYpaeHm9DUAbQPzlKiapQqxFVFZtkLXv5Aq9OxmtvHOio5p9MhRnXk5XMeRyhd2zs9SO2hV5ffPMakBFPc5xkRMbUd9WucQalVGvXZaLhQQbb0Wrrvn%2Fkq6tveHa5u1CQ4PfiQW%2BxmtXx6FLCO4cktyEwKKuRoRZEB0ZFSqU1KdezIvexGlA2CCDFfc2kURg0Quasa3YugmycDGQkxB8otOQZMP%2Bvn1BjVZTv5Ninz2hPyjyj0Y8newHRTDtNvk3bFVjRfYgOmYcW%2Bx4lTCvxg79phGA%2FoCE3eTsaM3rZJCctied0NHNmofsdOFjE1Bpel3thLCm7T%2Ffl9EvcKOZeJsndcQQQFmU5kGYHv4MKvmlscGOqUBp7Q7pPygBJn08w6BD%2B0UHll9Wbby7nO7pMIp%2FR6zSvb9WgfTknHVG4E0M8VrlqbAHAJv%2BKoZFeJ1a%2BhrfXMdRDih0y2zRlT0UzDAvkoeh31sUuCH4%2B5W%2FrrBogFQ2xMznAZOoXtxcMLVhJPzx566MCXH5HTlNAEmzT2IJAgZsPYmZ9%2Bft%2BMKeZtHk7xozUtGDTk%2Fqr7w9T1oDCBs1lo0%2BR6Tt%2BFb&X-Amz-Signature=d42172187a947a555274ec6482a11563c09ebac37882b2d54367ea172f7f6e75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQF77H2I%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCt89oXwSydoByhl9phoVG%2BiUwytLjWwrMO9Y1zKi7NLAIgQqM2Q0oc9iPqn69Av5qB1WbsxKdcoGFB2%2Fj0swckOmYqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0237RW4Mtg8rY7WircA%2F26YTqn0JMdhYZbDNpvTQuU7mINitZy4USULMhRIvMtnBUa0I7szCCbYS5gQy4KEcAVpQXBQ9aQh3b7NKzE2d9Avkxy8a%2FY0Ur%2Fwf8opA%2FvhLieMkQE%2FgY4rtRQAM%2B4iTUgvwaVxGvkUv%2BvrjCa9Npi5s1F7bz4CB1Owj0qMjvvfhRfjhTWxN%2BCCC0VloXDNAWPaNHyqRDorTLTu53BD0znl7IXH3Wyote8NLz5jJWng3l7qmqFVcOmxWmZv4hiMe3DGx1dH9NFpj4aKpM16EYpaeHm9DUAbQPzlKiapQqxFVFZtkLXv5Aq9OxmtvHOio5p9MhRnXk5XMeRyhd2zs9SO2hV5ffPMakBFPc5xkRMbUd9WucQalVGvXZaLhQQbb0Wrrvn%2Fkq6tveHa5u1CQ4PfiQW%2BxmtXx6FLCO4cktyEwKKuRoRZEB0ZFSqU1KdezIvexGlA2CCDFfc2kURg0Quasa3YugmycDGQkxB8otOQZMP%2Bvn1BjVZTv5Ninz2hPyjyj0Y8newHRTDtNvk3bFVjRfYgOmYcW%2Bx4lTCvxg79phGA%2FoCE3eTsaM3rZJCctied0NHNmofsdOFjE1Bpel3thLCm7T%2Ffl9EvcKOZeJsndcQQQFmU5kGYHv4MKvmlscGOqUBp7Q7pPygBJn08w6BD%2B0UHll9Wbby7nO7pMIp%2FR6zSvb9WgfTknHVG4E0M8VrlqbAHAJv%2BKoZFeJ1a%2BhrfXMdRDih0y2zRlT0UzDAvkoeh31sUuCH4%2B5W%2FrrBogFQ2xMznAZOoXtxcMLVhJPzx566MCXH5HTlNAEmzT2IJAgZsPYmZ9%2Bft%2BMKeZtHk7xozUtGDTk%2Fqr7w9T1oDCBs1lo0%2BR6Tt%2BFb&X-Amz-Signature=184478fa76a5cae633efeb21057705e119e43cace18543acb6723fde2a027896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
