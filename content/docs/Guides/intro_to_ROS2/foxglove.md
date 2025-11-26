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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSFVUQKC%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARQZBTAQsPjIoTqyH3oPLbFkNkVVAXkBLYlhF8tGBqxAiEAos7j0UCB5E%2F79VY16bo5q9TzPe7UV5FjLb8NDSjd%2BeQq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCVDrK4RwaL%2BnQCVByrcAyLWcgcHgt73QUIOhsBpwRXr7aGhM74YDQ4yMlNR12%2Fa31SQaFXA%2FQW9hYa8oDCWHBvl6k4zv8SviGsERviT%2BrWO1biXOMZFCC7s6%2FW4982qp7zRGYfipNII2znN7sMgt%2FYFY%2BKfZfNo0atmPnFDxIIEIZdZadADxRNnfKULIbVvD93zvQovuR9Ts2W7Pz%2FwGci9B3%2FoTEhLVgHl%2FqmX4KV0J9AfWW17paimRY4DSr6XsC9NNuZCLC0qtX%2FbEX64liDgj1rT5Nn4fgJZXx%2FmFbDt8cfAnqcRWXAYvGpdlloR6B2ezl%2BjrRbV1LyIXx6B6ibPh6kPDJf4JZSd0hoyb1KcdEjFQcTzrFE5XneeAlgMMoDdK9VjzuWAHXdtPEiFIlE4MjSm64HGsL%2B4klYSLGgaZ0SXhDit57tHsXgynPRM7oFa5f5lWfIAkSW1AIYpQDjJCK85%2FH7k%2B9wze%2ByvYZ9XVIlB6c8f4EOiIYxxE551jqRaV5EtOqdZlUHGGxdjDSPjikLfD1M9NN6AtDrTk7RvAibiKFEfOkwFz1eJ3d9UIeQ6J8HoVE6%2F8jkaxoKrWvStoIvN60MOUI9azW3Dp5aXy4K3mDUTR9OSaPhrsG12vx0qXWtNyjgpBGZ9MN2wmckGOqUB3iIDXAWsg0fJ46ygvZ90RmWAiElxd%2FS%2B%2B00Sj3UoJJgetLQ2D8yD02fZMPf3GHbDBhl7VVTGF5U7kWXXTnCyqMpBAbeKvWBX2Pg%2FDNPJBEQ90F4uwyHMAUc6YXJ5qkfV4RbeGGVOkIVeUMiyR0lH%2BIzwLJ2RsYFqaiKDJSrwbYRmvPLa79hwAR30LAzdPJ6KgSDe0IWCfEI3qBoTG3jOl%2BLiyN73&X-Amz-Signature=3da238ef12d8c6d653873aa81d933bdbadd4607785182f6fb68d89593034f516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSFVUQKC%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARQZBTAQsPjIoTqyH3oPLbFkNkVVAXkBLYlhF8tGBqxAiEAos7j0UCB5E%2F79VY16bo5q9TzPe7UV5FjLb8NDSjd%2BeQq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCVDrK4RwaL%2BnQCVByrcAyLWcgcHgt73QUIOhsBpwRXr7aGhM74YDQ4yMlNR12%2Fa31SQaFXA%2FQW9hYa8oDCWHBvl6k4zv8SviGsERviT%2BrWO1biXOMZFCC7s6%2FW4982qp7zRGYfipNII2znN7sMgt%2FYFY%2BKfZfNo0atmPnFDxIIEIZdZadADxRNnfKULIbVvD93zvQovuR9Ts2W7Pz%2FwGci9B3%2FoTEhLVgHl%2FqmX4KV0J9AfWW17paimRY4DSr6XsC9NNuZCLC0qtX%2FbEX64liDgj1rT5Nn4fgJZXx%2FmFbDt8cfAnqcRWXAYvGpdlloR6B2ezl%2BjrRbV1LyIXx6B6ibPh6kPDJf4JZSd0hoyb1KcdEjFQcTzrFE5XneeAlgMMoDdK9VjzuWAHXdtPEiFIlE4MjSm64HGsL%2B4klYSLGgaZ0SXhDit57tHsXgynPRM7oFa5f5lWfIAkSW1AIYpQDjJCK85%2FH7k%2B9wze%2ByvYZ9XVIlB6c8f4EOiIYxxE551jqRaV5EtOqdZlUHGGxdjDSPjikLfD1M9NN6AtDrTk7RvAibiKFEfOkwFz1eJ3d9UIeQ6J8HoVE6%2F8jkaxoKrWvStoIvN60MOUI9azW3Dp5aXy4K3mDUTR9OSaPhrsG12vx0qXWtNyjgpBGZ9MN2wmckGOqUB3iIDXAWsg0fJ46ygvZ90RmWAiElxd%2FS%2B%2B00Sj3UoJJgetLQ2D8yD02fZMPf3GHbDBhl7VVTGF5U7kWXXTnCyqMpBAbeKvWBX2Pg%2FDNPJBEQ90F4uwyHMAUc6YXJ5qkfV4RbeGGVOkIVeUMiyR0lH%2BIzwLJ2RsYFqaiKDJSrwbYRmvPLa79hwAR30LAzdPJ6KgSDe0IWCfEI3qBoTG3jOl%2BLiyN73&X-Amz-Signature=531534e3798234e9123e1cf609f8db8417af3588c68fcdf58a1d8f7677ba3863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
