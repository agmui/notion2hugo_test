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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626YDQ6CT%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCrUVR0aMbcOG7ah%2FJfNLR0irXfkEzHR6%2BTA%2BivsUusIQIgCRonf78bEoPYQmWYU42ZqZ26urmSWg2sw953QkvnmtsqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXoUQFgFJWQ11uDNircA3E3IMHg1ks6CS7P1cmfN1NfcmS1vxWlxg3Qv3qX5es58ege8QMj%2FktQEjHJNgMYu1pB4GjJEntxzip5tJQONfYOXEt1jGvAfs7yx6hBP%2BPWcUgZ%2Bk4eS5hVRwukd5razREsmWvaykM%2Bb6IOhpQ7kjjf0ridwol2iCe8A51hoHTsjG053vZCEJdYsphYxw59Ivlvnb53G%2FA6PHArZJir%2Br2Qj9mHPXPl5M5r3gf0YJSzehQJjZOpUbQFsedpV9pgA%2FDmEL5nFr3fzB8XxfqDW%2BdUHGDVfGxEp7j8hu31DCH8U1M5JQlTNZC9Mf9Xob78KrvAGC%2F8pGoa24YixaFZVdpSu05vEV5a8jzsQGIzHmN7g4Qd6hgb%2BBYtc5atZx27tvYJlJYcHw7TcN8cNt6alaJEYX474uhHKgaJXyzY4DYNqLMC%2FrYqm%2FyuLjbl5sSyHx0OGna2IXjV03SOzsyXSMuYoNS1nSZVa3ihZm4gHznIWNaauKZoYAqtkjlkkB%2BEu4kNrwicb0KKT3jCnSAJQy2P9OiCa8VrBR%2FS9QIGswEcw93uyFj6mAt2KO%2FPCm%2B7dGOf8o6EGJSNg9zcANiXeQfPPZaWLqJnL9MyvU2T%2FkH9obP2EARgguqyRmCkMP%2BI8sYGOqUBJkkWabiXPo%2B4%2F9xS4dRMGWFg4NAwhvrAWgZm1F6uoulz9x9FQHYvBWTdfmi7ruIOW6QjVOMCRkjpKM0RZTL7BLp9iX%2FwmF8fZE6aU7M3pa02BAUfHggBe5C2%2Bfkxoz9k2A7YZrROaUHVLtIM5I1PXvFrQN5W0%2FcUVQsfpDb%2BDFIb9NYunsNyFVjoepby8w6IOMaKvLwFBU7c8jhGpKNBF7CXaLSj&X-Amz-Signature=707ce804fc598db0e02c551bb1060a4e45af0cbdf459675199db37f4b24d117c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626YDQ6CT%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCrUVR0aMbcOG7ah%2FJfNLR0irXfkEzHR6%2BTA%2BivsUusIQIgCRonf78bEoPYQmWYU42ZqZ26urmSWg2sw953QkvnmtsqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXoUQFgFJWQ11uDNircA3E3IMHg1ks6CS7P1cmfN1NfcmS1vxWlxg3Qv3qX5es58ege8QMj%2FktQEjHJNgMYu1pB4GjJEntxzip5tJQONfYOXEt1jGvAfs7yx6hBP%2BPWcUgZ%2Bk4eS5hVRwukd5razREsmWvaykM%2Bb6IOhpQ7kjjf0ridwol2iCe8A51hoHTsjG053vZCEJdYsphYxw59Ivlvnb53G%2FA6PHArZJir%2Br2Qj9mHPXPl5M5r3gf0YJSzehQJjZOpUbQFsedpV9pgA%2FDmEL5nFr3fzB8XxfqDW%2BdUHGDVfGxEp7j8hu31DCH8U1M5JQlTNZC9Mf9Xob78KrvAGC%2F8pGoa24YixaFZVdpSu05vEV5a8jzsQGIzHmN7g4Qd6hgb%2BBYtc5atZx27tvYJlJYcHw7TcN8cNt6alaJEYX474uhHKgaJXyzY4DYNqLMC%2FrYqm%2FyuLjbl5sSyHx0OGna2IXjV03SOzsyXSMuYoNS1nSZVa3ihZm4gHznIWNaauKZoYAqtkjlkkB%2BEu4kNrwicb0KKT3jCnSAJQy2P9OiCa8VrBR%2FS9QIGswEcw93uyFj6mAt2KO%2FPCm%2B7dGOf8o6EGJSNg9zcANiXeQfPPZaWLqJnL9MyvU2T%2FkH9obP2EARgguqyRmCkMP%2BI8sYGOqUBJkkWabiXPo%2B4%2F9xS4dRMGWFg4NAwhvrAWgZm1F6uoulz9x9FQHYvBWTdfmi7ruIOW6QjVOMCRkjpKM0RZTL7BLp9iX%2FwmF8fZE6aU7M3pa02BAUfHggBe5C2%2Bfkxoz9k2A7YZrROaUHVLtIM5I1PXvFrQN5W0%2FcUVQsfpDb%2BDFIb9NYunsNyFVjoepby8w6IOMaKvLwFBU7c8jhGpKNBF7CXaLSj&X-Amz-Signature=9d178dd20eb98de50d79ad602349a3bf1c065e609683fe5d71691005beecfb0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
