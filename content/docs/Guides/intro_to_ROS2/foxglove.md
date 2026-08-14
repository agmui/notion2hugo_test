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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRUB2G4N%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIDEGhKvBCGpU7yrdiSG%2BArEOioP2cm5t%2BlOVOyIX8Zr4AiAG7UstNJwNp%2Fj%2B0DYk5t3IUWHcPU4SYs6hqqqDyQRcciqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcH%2BlODAFJhVB%2Fm%2FbKtwDlBS5sVvj2bnAQUeWsAeAyufTmVsX9wXNoUEVQQfcnDqjhGgS1iJFDBpWP8JYDIM%2FNo3zbvu%2BlwF5lDDFQvzjFMAbrXgxnCYks3K2QiC50WtnqA3ijQpl%2BFy%2FlW3JLc4lvXzJF2KuP1dZ4%2FoV4vsiER2aoX5zBqZpaIlO1lrol6qRAcFugTR3%2Fd3H8Ve3T6CjduC%2F%2FJZisMWRIvJLZLpGTTULW6sk2Xm17caY%2BjiaN3k9jZD40%2BAWTEs139Axqr9aJpfYF3JnuJ6nooF2oi93MWDgnYAN0CoXZ%2BEd2NKrAar%2FhmRuVzIdrIU4b1yjB1xQEAwF7Vz8AXAexQslVS721rC1U7FXzZKHzZAQbrYoTC6ecRhZnyFRePhaW3EaEm%2BdBorVrXKOjbdkFtvaNRo2iyGlZ1o%2FbgiCKUvP71lHSxnyLf8uIASk9N0jHqF5C04x0K7FyakO4Ve9Mfni9fJUjO9OU2r6VJQhn7yaa3iMlnzGLMwMxnoT9V01QC4ivUWzxY3gCzQcM9QiG97Ws6GogsIz5P6JmcYsQqen2iK68Sh%2BhXUJoR8zMqLU17QNQuwEEqAusolpsDRRHSEol1Ch1r8EGbHAT20vhWecKi%2Bhwh4XunCpT9VeGaeiTIowkbL50wY6pgEzQMG%2FUF%2Fo5uPFRh3OSv46%2Fynie%2BdUnu3ah25IKq4eNZf2WwKIecZIpMfW0pyAL7dbc%2FINNLle40P217uucRYuEjLwk3gezNdxSGKhhVKo7LkVQVOaDPaXIInPm28GQyZxoeW9H159QwHwCVwKXfKcjXvjTzxoYoR%2Ba1%2FhXEkSKa4jGjgSpEtnn7dbKO6pSlJ1Wg7hDEh%2BmP3bN%2Bb7x44kAPLQ66%2FP&X-Amz-Signature=c88adbc2d41a54083650cfc054aacadb5d15a7caf64f2e6fbdc9272d25ae475a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRUB2G4N%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIDEGhKvBCGpU7yrdiSG%2BArEOioP2cm5t%2BlOVOyIX8Zr4AiAG7UstNJwNp%2Fj%2B0DYk5t3IUWHcPU4SYs6hqqqDyQRcciqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcH%2BlODAFJhVB%2Fm%2FbKtwDlBS5sVvj2bnAQUeWsAeAyufTmVsX9wXNoUEVQQfcnDqjhGgS1iJFDBpWP8JYDIM%2FNo3zbvu%2BlwF5lDDFQvzjFMAbrXgxnCYks3K2QiC50WtnqA3ijQpl%2BFy%2FlW3JLc4lvXzJF2KuP1dZ4%2FoV4vsiER2aoX5zBqZpaIlO1lrol6qRAcFugTR3%2Fd3H8Ve3T6CjduC%2F%2FJZisMWRIvJLZLpGTTULW6sk2Xm17caY%2BjiaN3k9jZD40%2BAWTEs139Axqr9aJpfYF3JnuJ6nooF2oi93MWDgnYAN0CoXZ%2BEd2NKrAar%2FhmRuVzIdrIU4b1yjB1xQEAwF7Vz8AXAexQslVS721rC1U7FXzZKHzZAQbrYoTC6ecRhZnyFRePhaW3EaEm%2BdBorVrXKOjbdkFtvaNRo2iyGlZ1o%2FbgiCKUvP71lHSxnyLf8uIASk9N0jHqF5C04x0K7FyakO4Ve9Mfni9fJUjO9OU2r6VJQhn7yaa3iMlnzGLMwMxnoT9V01QC4ivUWzxY3gCzQcM9QiG97Ws6GogsIz5P6JmcYsQqen2iK68Sh%2BhXUJoR8zMqLU17QNQuwEEqAusolpsDRRHSEol1Ch1r8EGbHAT20vhWecKi%2Bhwh4XunCpT9VeGaeiTIowkbL50wY6pgEzQMG%2FUF%2Fo5uPFRh3OSv46%2Fynie%2BdUnu3ah25IKq4eNZf2WwKIecZIpMfW0pyAL7dbc%2FINNLle40P217uucRYuEjLwk3gezNdxSGKhhVKo7LkVQVOaDPaXIInPm28GQyZxoeW9H159QwHwCVwKXfKcjXvjTzxoYoR%2Ba1%2FhXEkSKa4jGjgSpEtnn7dbKO6pSlJ1Wg7hDEh%2BmP3bN%2Bb7x44kAPLQ66%2FP&X-Amz-Signature=1f8108e3345f69ab01df866f925daeb12244ff90e5f82b42bf04cca378883773&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
