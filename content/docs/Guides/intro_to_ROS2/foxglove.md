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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KLYNQYY%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwWuqGbQegSg10oSLhW9Y4%2BMI%2Fy2WWJzgJqXUfGJ%2B96AiEAuf38aDFeiavwfObkH0c45qu1qNH6ZJiNte9Xx%2BzU9FIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo4sGb%2F%2FQEHHhcedSrcA6jxLR48XF%2Fu1joMFuHZGrDEqpfkMA0vZHX8POLrlmwB%2BjFlR7E4GSGZMOzixJ8RjbkVBodVU9XQJIx0A%2Bc7bYlVJXBa%2B4FU9yxl%2BYiVLHU9iCnY%2F1lAyGXpdzoOpOi7jdIFMn2BxCtGSQTAbZNpDWCnnH6EnYXQUEQyvcVNPcaxfPbcb9775hANnrYk9xnrmLE6kvaJHd3152xBqBk9emjD24FuBaQ0ofBI6Kh%2FrWnz%2FvFM%2F6KIag02SuMrCAtQvmkDHRr8FmZGFg3ezze4QxNZYuxFJyGs9j8yQiHHHye97xxsIY1dL647fMYA9BV3WsEFVW5EwEL2OXlzZVLR5Y7x8iLcZ%2FYFbjkEKhOoCol3zZJpEZf4kH8vn0jJPklqBgzSovqfO5ejv1I%2FuhgPgWg0WJzlejXyC9DllMQdlqKot48FWD1PVCmGH9l1VehPsUwhtZyMk9x2nPRK4WB25poMyJEgSipAAom%2BxYrck70lEbevz9edS2k5l5G88RtWRTYGpCIvzqmfrIjCpKasIV9eEpNt5YVltEBk%2FDtRdmpoXUY6FoGJpTiBvR8jQICdf0Go0jvmsl%2BHPBolB3stwJB3ERYEH45V0AjppXru4YeTcq0PpqQgdofyVBXlMIiP%2B8cGOqUB%2BvgVL8paeW6%2FkFnXZY4MEnULshjikdk2gHUzgfo1tewRmkJYf2o7Wxr4Tdoux%2BAO3YHNWBuPMsxm2Q31e%2BvQ6KYFvACrJe8D0m%2FF2D37OoNKqmNkO2yNZ%2BDBsKE98ZykwR%2Bh6QMU3HHn0AkJOquhvkFz1IpgMFqb5S0mJWgcJhPg5EVMtH8vkI7mpqjFuwVXsJuWhUKeUeFGEaKsQbc3eCr3Sa7J&X-Amz-Signature=6fddc373a6f513dd1c19149a7c01f0909f530433d37d8ece2d6625d9060d5080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KLYNQYY%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwWuqGbQegSg10oSLhW9Y4%2BMI%2Fy2WWJzgJqXUfGJ%2B96AiEAuf38aDFeiavwfObkH0c45qu1qNH6ZJiNte9Xx%2BzU9FIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo4sGb%2F%2FQEHHhcedSrcA6jxLR48XF%2Fu1joMFuHZGrDEqpfkMA0vZHX8POLrlmwB%2BjFlR7E4GSGZMOzixJ8RjbkVBodVU9XQJIx0A%2Bc7bYlVJXBa%2B4FU9yxl%2BYiVLHU9iCnY%2F1lAyGXpdzoOpOi7jdIFMn2BxCtGSQTAbZNpDWCnnH6EnYXQUEQyvcVNPcaxfPbcb9775hANnrYk9xnrmLE6kvaJHd3152xBqBk9emjD24FuBaQ0ofBI6Kh%2FrWnz%2FvFM%2F6KIag02SuMrCAtQvmkDHRr8FmZGFg3ezze4QxNZYuxFJyGs9j8yQiHHHye97xxsIY1dL647fMYA9BV3WsEFVW5EwEL2OXlzZVLR5Y7x8iLcZ%2FYFbjkEKhOoCol3zZJpEZf4kH8vn0jJPklqBgzSovqfO5ejv1I%2FuhgPgWg0WJzlejXyC9DllMQdlqKot48FWD1PVCmGH9l1VehPsUwhtZyMk9x2nPRK4WB25poMyJEgSipAAom%2BxYrck70lEbevz9edS2k5l5G88RtWRTYGpCIvzqmfrIjCpKasIV9eEpNt5YVltEBk%2FDtRdmpoXUY6FoGJpTiBvR8jQICdf0Go0jvmsl%2BHPBolB3stwJB3ERYEH45V0AjppXru4YeTcq0PpqQgdofyVBXlMIiP%2B8cGOqUB%2BvgVL8paeW6%2FkFnXZY4MEnULshjikdk2gHUzgfo1tewRmkJYf2o7Wxr4Tdoux%2BAO3YHNWBuPMsxm2Q31e%2BvQ6KYFvACrJe8D0m%2FF2D37OoNKqmNkO2yNZ%2BDBsKE98ZykwR%2Bh6QMU3HHn0AkJOquhvkFz1IpgMFqb5S0mJWgcJhPg5EVMtH8vkI7mpqjFuwVXsJuWhUKeUeFGEaKsQbc3eCr3Sa7J&X-Amz-Signature=cfb8fa4dcf845e5131575a0145ed97b29658dcac5ecb1543b10004cf2460a422&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
