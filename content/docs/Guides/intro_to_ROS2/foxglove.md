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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY5O63XC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzK0kY9E7hezMkepVngQ%2FsRbvGxUbSX4Kmy0IAxBbooAiEAn7JZQsvzDpjyBTdcGwZvPATwiW87IwGgqUeG%2B5Njv9Mq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFBl3xwzsR4goN%2BuvyrcA6fy7FbH2Yj68zQr9%2F4iLxVG1A5dlorDAm7N0q57qq7buXjocxFG%2BeIBhdNH8f8wjF0cgW9XKYHdmORPwCLjFWgW%2FdwoZH7eJIZcNScAL6MAbzvRQXs2cfFEWN8676IM1ntG4%2FXjvuPv52Y5W1zdz9O%2Fz4CBCFt7kq1iJPQ16%2BS7pzk9y%2BwwNxbahB10lrnTpX6c56gudZNvaifrYIfR5iN7mRBCuiyODy%2FCwCa%2FMSw8NShxOxURJBVQcNbRjNTZRxu14ERK0hUXN547%2FU%2FZ6Iif4zg2FY6bqzuDsaXAIu2Mx9Jo%2BrjvZFmY%2BQB3vDf%2F7KleBW0KbXeseDav00eJ0icbAiA9v8%2BrAK1583cN25WEjOYm0QFA0Hg5MFUSmxcrZR0MuhDp6Plxwvu6mvS59anUCU8TtBFuXYFfUjsrzd8ztCtQ%2FB2sXOk%2B0A2yiGUQMBwhnTeX3sE6kXgV8KT31MAqP0qin1Bzka%2FU7%2Bpvi17rozW2BKJP2o9N%2F6bQeinWCsdXMtA7K911Sf2OZJTtSmhgY82TeNHVxPktdWQ414FVhsHr441Mx%2FwNKUKOQWLweA7b%2FopZdUp7yPEUKrAPTcqYD9JI4feHz8CwQ9ytmH%2FansI%2FBZtl7RzMke2yMNGDiMoGOqUBHqWiWGT8OwLjW73O5DKKoueOlwSybZQRWbZFVRsW4bqCoxiBQ%2FCgDR9xoYnbXTkAq8TaiPxSjbxA%2FsJ4COFsQjPQQ%2BJhgnUmju3mRrbzHhbTAXrcsR7tu2YqXhth1803nfF5BhWV50noPCgA4HVgM1sF6arLPdTsypfXVs2ekbAhTTPOe2DRdgrM4bcL3yLsmSRLZEZkCQF3BpdsNqFnz4xyfOYd&X-Amz-Signature=b7904773d72571ab1aaf0d4104d6f03251a11cf55e7229343ed582aac82a3f17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY5O63XC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzK0kY9E7hezMkepVngQ%2FsRbvGxUbSX4Kmy0IAxBbooAiEAn7JZQsvzDpjyBTdcGwZvPATwiW87IwGgqUeG%2B5Njv9Mq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFBl3xwzsR4goN%2BuvyrcA6fy7FbH2Yj68zQr9%2F4iLxVG1A5dlorDAm7N0q57qq7buXjocxFG%2BeIBhdNH8f8wjF0cgW9XKYHdmORPwCLjFWgW%2FdwoZH7eJIZcNScAL6MAbzvRQXs2cfFEWN8676IM1ntG4%2FXjvuPv52Y5W1zdz9O%2Fz4CBCFt7kq1iJPQ16%2BS7pzk9y%2BwwNxbahB10lrnTpX6c56gudZNvaifrYIfR5iN7mRBCuiyODy%2FCwCa%2FMSw8NShxOxURJBVQcNbRjNTZRxu14ERK0hUXN547%2FU%2FZ6Iif4zg2FY6bqzuDsaXAIu2Mx9Jo%2BrjvZFmY%2BQB3vDf%2F7KleBW0KbXeseDav00eJ0icbAiA9v8%2BrAK1583cN25WEjOYm0QFA0Hg5MFUSmxcrZR0MuhDp6Plxwvu6mvS59anUCU8TtBFuXYFfUjsrzd8ztCtQ%2FB2sXOk%2B0A2yiGUQMBwhnTeX3sE6kXgV8KT31MAqP0qin1Bzka%2FU7%2Bpvi17rozW2BKJP2o9N%2F6bQeinWCsdXMtA7K911Sf2OZJTtSmhgY82TeNHVxPktdWQ414FVhsHr441Mx%2FwNKUKOQWLweA7b%2FopZdUp7yPEUKrAPTcqYD9JI4feHz8CwQ9ytmH%2FansI%2FBZtl7RzMke2yMNGDiMoGOqUBHqWiWGT8OwLjW73O5DKKoueOlwSybZQRWbZFVRsW4bqCoxiBQ%2FCgDR9xoYnbXTkAq8TaiPxSjbxA%2FsJ4COFsQjPQQ%2BJhgnUmju3mRrbzHhbTAXrcsR7tu2YqXhth1803nfF5BhWV50noPCgA4HVgM1sF6arLPdTsypfXVs2ekbAhTTPOe2DRdgrM4bcL3yLsmSRLZEZkCQF3BpdsNqFnz4xyfOYd&X-Amz-Signature=19ade2366f580a32e7d068d32d19b164f565f95bd3d63d7b64e723ce1a717647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
