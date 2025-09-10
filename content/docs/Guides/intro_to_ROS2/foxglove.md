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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF5AR4YL%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCYj0eVz%2BQ3HM89qviaKKzbSUm2YIGDhrocQwNhNcNLGwIgb7BQZg%2FcRlSvmn9g9Ka1zSBmtFg8MxYv5vqT0fuqaU4qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwZv%2FOb4%2BV3qg3Y%2FSrcA%2FtOzhQ3QfRqYAMxoG4SpapN0BMCbG6psbb6Dbg7%2FI0sSCx68xdljGxfdCTnqsn%2BlvFegHWhas%2Fif7VAcUvvjGkr10jXvMwaqUEl1dZHbq66sRNnxCUvddcXT3VI%2BIcfVKNZI02fBtN6QDsUsepGh7FIu9EuNGt2ILWqIs1WzMsIPQRdnp1uDgf8G5uBKcnRCuTMZPh6uGLMFm12bf40oI%2FamiM3KBXDl1bv9iQAtZe6RqQfjoSlCE7QhPfR3AnBUYaG4YyKCt0Y3YR%2BF0pfh2Tr4f%2BRnDgjZzIEuAKpGUBvwebM6B9dMjtnTRvs1MVX6IWbNwEJkpoGlWBxRaWRxgOJVcOWtp6daCCj0R5RFOQ0vP4OhcKGwBVoJ8GZ%2BPhoStwdD86EKBa592yqSTjN2X%2FXm7YoYmn7bOqjmLMjhG5%2BnEOBUbb4ZBmXULUPx5aiOJ%2FD6RCOF3aLzklNmii%2F40brk8vUVyOG37fFy8QlXLHmgFuJnXGUAXKZM4PuRYD1xLJj%2FjcYQ%2BSwbB%2BBFHBvTnJkyI5HDoqDKt6Q3E9vA7nlzc8MMfmGYSdQfXrq0i1IAze%2FdGeZbKnlkYsshPULlF9VZahhbRNlVwVmw%2B7DdqJiPEVHzNNYfQSsdp%2FHMPKLg8YGOqUBm%2BulPtxWYdu8s1hEVAz1gPuCiM7ElE89mIwuFrEMnRDV9AN4phakbF%2BMh9nYCtcUOFkO2ysLwLftHTHK%2Bm%2Fqg9hPk1%2FMB%2BYy8xUkbTOlQ6LmXGBz8Lfn%2FQAyiGfcriExPcg9Sim1%2B0BQ%2F8Wrx8tDcsmfxVCZ%2F6s2YZ3QiwyVQy3lHokqO78Z5zaaA7Y3%2FVUvwNOnOOcP1NpLiRN5sUt%2Fjvnziaw0&X-Amz-Signature=740216ae933589b93c3b3f48155280f52c15a21e997a756fc1fb92893816dc15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF5AR4YL%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCYj0eVz%2BQ3HM89qviaKKzbSUm2YIGDhrocQwNhNcNLGwIgb7BQZg%2FcRlSvmn9g9Ka1zSBmtFg8MxYv5vqT0fuqaU4qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwZv%2FOb4%2BV3qg3Y%2FSrcA%2FtOzhQ3QfRqYAMxoG4SpapN0BMCbG6psbb6Dbg7%2FI0sSCx68xdljGxfdCTnqsn%2BlvFegHWhas%2Fif7VAcUvvjGkr10jXvMwaqUEl1dZHbq66sRNnxCUvddcXT3VI%2BIcfVKNZI02fBtN6QDsUsepGh7FIu9EuNGt2ILWqIs1WzMsIPQRdnp1uDgf8G5uBKcnRCuTMZPh6uGLMFm12bf40oI%2FamiM3KBXDl1bv9iQAtZe6RqQfjoSlCE7QhPfR3AnBUYaG4YyKCt0Y3YR%2BF0pfh2Tr4f%2BRnDgjZzIEuAKpGUBvwebM6B9dMjtnTRvs1MVX6IWbNwEJkpoGlWBxRaWRxgOJVcOWtp6daCCj0R5RFOQ0vP4OhcKGwBVoJ8GZ%2BPhoStwdD86EKBa592yqSTjN2X%2FXm7YoYmn7bOqjmLMjhG5%2BnEOBUbb4ZBmXULUPx5aiOJ%2FD6RCOF3aLzklNmii%2F40brk8vUVyOG37fFy8QlXLHmgFuJnXGUAXKZM4PuRYD1xLJj%2FjcYQ%2BSwbB%2BBFHBvTnJkyI5HDoqDKt6Q3E9vA7nlzc8MMfmGYSdQfXrq0i1IAze%2FdGeZbKnlkYsshPULlF9VZahhbRNlVwVmw%2B7DdqJiPEVHzNNYfQSsdp%2FHMPKLg8YGOqUBm%2BulPtxWYdu8s1hEVAz1gPuCiM7ElE89mIwuFrEMnRDV9AN4phakbF%2BMh9nYCtcUOFkO2ysLwLftHTHK%2Bm%2Fqg9hPk1%2FMB%2BYy8xUkbTOlQ6LmXGBz8Lfn%2FQAyiGfcriExPcg9Sim1%2B0BQ%2F8Wrx8tDcsmfxVCZ%2F6s2YZ3QiwyVQy3lHokqO78Z5zaaA7Y3%2FVUvwNOnOOcP1NpLiRN5sUt%2Fjvnziaw0&X-Amz-Signature=cdf056c3bf43aea4d796deaca4ed93091a3d8d8b631ac8a7f10471822311a57b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
