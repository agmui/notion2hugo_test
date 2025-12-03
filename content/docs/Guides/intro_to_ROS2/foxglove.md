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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDFHR6FG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGOsMvCzQF13eVpEg5iUC3x9D3ws241S4iaziSVboI8FAiBu4WpBgz42WZ%2BiLpzYhmvR9bT53t8qoIU4oSYnbW98nir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMRUjCsIRVQkQQGVBWKtwDTujggOFTiDd08Bz%2BCOG7fB5f0N1jSCgtNQVlSEuoZQV%2BaJEam58wf52G1Ayd4%2FSRHfKUNv4kWeAyx8v%2FzXl7hmOYEm4fnMfdtLGbvTET5iImlxqHNdhFHsC%2F3LsSEk58CGfa5oOacayqB4rnOtqY8swMKARLK5LTjRRERORqiRv7mOfJ5L4wuuVebd%2F2tE9vh0ZEv%2FP8XSCnhrpJoES1Teb7K%2BhI%2Fh5VKhZ5l2U1LizBEx6aiCejzJ4Iuj48XXPkgQr9RdOlOiRP043zX0UHYK6hHnyr%2BLQZITCZXcmbBwgm%2FgOt%2FUJNG9tzlezVJPIEyqdg9V1sEf9Sa3rQu0NMRYskX7pJ0nb9vwtQDYKhCS5p4ezB%2B1TEhDGUIdZyXgj1wc7DX0T%2BsZjAHVMIS1hpGk4sWmZNl9zoykB%2BYE5qddrzeCWflBQd6ofLk9%2F2FmUOIK5itQ31vyE3JlBys85yEZ4Hav7Kyswvoqnl3w2ldRBZ4LGUGWfapMRBqBrEu0Dby9FLQXIpnIaYCM0%2FoaMbIEUDaApLjK09X5yQ%2BrAAnki7VHS2SzVY3jqloSPF%2BLUsHvMHD2f4bBqGr4iOR6sVGOIbo3q7u7wxUxEYUU4QWmrIHSL7jNZmmzheER4wj5y%2ByQY6pgHS%2B4PvMkICVFl9HWOgi6vLmNVEphO6WiGeLCF49sO7I2OgIxAGAM4esCj8fN6RFd6SDOltvd5gzh%2FSLBy4tDiEykPpPLea6sPOmMGTExtWg%2FXEEp0FMDK48Fsk4M0gU%2BfmvBk9gokDS4Rh2hRY8IbrkKwlJUr06eN6wGJvleIwxXG4IHYDFnCeDXcleCgQJegflDUx5m9fkNl2RxTb5ApmZyZgpJtp&X-Amz-Signature=84ea3a93db025dd1b000d19025c1f295805e9d870b0e5bbdc4a2b798436f229a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDFHR6FG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGOsMvCzQF13eVpEg5iUC3x9D3ws241S4iaziSVboI8FAiBu4WpBgz42WZ%2BiLpzYhmvR9bT53t8qoIU4oSYnbW98nir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMRUjCsIRVQkQQGVBWKtwDTujggOFTiDd08Bz%2BCOG7fB5f0N1jSCgtNQVlSEuoZQV%2BaJEam58wf52G1Ayd4%2FSRHfKUNv4kWeAyx8v%2FzXl7hmOYEm4fnMfdtLGbvTET5iImlxqHNdhFHsC%2F3LsSEk58CGfa5oOacayqB4rnOtqY8swMKARLK5LTjRRERORqiRv7mOfJ5L4wuuVebd%2F2tE9vh0ZEv%2FP8XSCnhrpJoES1Teb7K%2BhI%2Fh5VKhZ5l2U1LizBEx6aiCejzJ4Iuj48XXPkgQr9RdOlOiRP043zX0UHYK6hHnyr%2BLQZITCZXcmbBwgm%2FgOt%2FUJNG9tzlezVJPIEyqdg9V1sEf9Sa3rQu0NMRYskX7pJ0nb9vwtQDYKhCS5p4ezB%2B1TEhDGUIdZyXgj1wc7DX0T%2BsZjAHVMIS1hpGk4sWmZNl9zoykB%2BYE5qddrzeCWflBQd6ofLk9%2F2FmUOIK5itQ31vyE3JlBys85yEZ4Hav7Kyswvoqnl3w2ldRBZ4LGUGWfapMRBqBrEu0Dby9FLQXIpnIaYCM0%2FoaMbIEUDaApLjK09X5yQ%2BrAAnki7VHS2SzVY3jqloSPF%2BLUsHvMHD2f4bBqGr4iOR6sVGOIbo3q7u7wxUxEYUU4QWmrIHSL7jNZmmzheER4wj5y%2ByQY6pgHS%2B4PvMkICVFl9HWOgi6vLmNVEphO6WiGeLCF49sO7I2OgIxAGAM4esCj8fN6RFd6SDOltvd5gzh%2FSLBy4tDiEykPpPLea6sPOmMGTExtWg%2FXEEp0FMDK48Fsk4M0gU%2BfmvBk9gokDS4Rh2hRY8IbrkKwlJUr06eN6wGJvleIwxXG4IHYDFnCeDXcleCgQJegflDUx5m9fkNl2RxTb5ApmZyZgpJtp&X-Amz-Signature=d35ce3afb8bf8e61a75d9131a8573965b6d31ed0acff63facbea53e50ed7299b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
