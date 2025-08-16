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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GXC4K7Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T132004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC7fqwP1HM%2FJ3D5iaJHV2uXGH%2FSWxiBfiwD1LzubMGPzAiEA4DrSDmBiviOU0t63a2%2BFpeSbiBziyLUrHuU3RjwyuIgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDN71%2Fdl9jBzfevG0ICrcA6Q1lREGCr33DpBx7s7SPo3i5b8u0peR0QdhkHO4GllgUN6ASnR7QxW7UgFrBfmFwKh8dE9ksuBadii7HYeGn5BE%2FMwijglro%2B5wZfk2RfsYJp6u9BKz07uKftmreqH8WoLuYbkWKXLr2K5DafjFFDPyVEGnqe8Rc8CDG%2BOHD%2BryCIpK8P8Kku41oCGTxgwNqwVWdxYDCkDpVWzMjzwKTBp7IimizQM2Yupw749eXbtjDEIeICOUzLGjkuF4eBI8vnlHMABNDWT6J5vvbKCYP1xhmUKubzrHn5CFDaGQMXKkVh3iGcfbxEfYxwd8cxFRTBfQPUT%2BeDhGo5OZa0dd1xhXEo8QUKfi0rz91gybBi1pb9bf7Q4uXTaMEV2EWDyRnvWOQph4M%2B%2FxQ9GrcFIcjp9HG3DBrVIhBtIR2or%2BVdwAn%2BJ7Ix%2FIDkSpuM3Zkk7gy1YRCjQXd1lrKFOncFOMu26FbwoyhbNhqWcl7DkmkEIMDGUmOAbrgh9ZtPLQpUtiBpcrlVT3g0jr%2BCNO6lCRpGLJJldrh6AWjOGL2hZIZkZqHfSrh0Fc7%2FxAboN%2FfGeGwdCpHK0r00Eai9JOmI2EDA2sOFZmAcdVZwtFbIrUk5WxiSf5C3yoXpPPqW%2FjMOn3gMUGOqUBC15kZhQZ9XfORQ3geJD2FweA9BQeOI0qP%2BOmF%2BCORqGvr4%2B%2B2lUaCBuL7ZPB2NRpNkbvsulEyypsjud3dqwSdPv3xzV2h097binuMnnXdbANv9%2BSiwt0l2HCQaMM%2FghmR%2FtM5SpLOGiJfoN5qAOHdMdQ9aGP3XYcTpa8gsm2Xs2eZuu8FYZefRPhODc4PGCiYk36CviDh%2FvpX3b%2BrgLZgXT2D5X8&X-Amz-Signature=9c59cb2931b56e20de50db9727c17ddadc2bd5ad6f4011b2c01e920b749fae1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Foxglove is similar to rviz however one of its biggest feature is its ability to connect over the internet.

This is nice for wireless robotics setups but still need a rviz visualization.

You are also able to record and play back sensor data and visualize it in foxglove.

## Using foxglove

First make sure you know the ip of your robot.

<details>
      <summary>How to get robot ip:</summary>
      To find the robot’s ip run on the robot computer:
  </details>

For now I recommend using your phone’s hotspot to connect between the computer and robot.

<details>
      <summary>how to connect robot jetson/rasberry pi to hotspot</summary>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GXC4K7Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T132004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC7fqwP1HM%2FJ3D5iaJHV2uXGH%2FSWxiBfiwD1LzubMGPzAiEA4DrSDmBiviOU0t63a2%2BFpeSbiBziyLUrHuU3RjwyuIgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDN71%2Fdl9jBzfevG0ICrcA6Q1lREGCr33DpBx7s7SPo3i5b8u0peR0QdhkHO4GllgUN6ASnR7QxW7UgFrBfmFwKh8dE9ksuBadii7HYeGn5BE%2FMwijglro%2B5wZfk2RfsYJp6u9BKz07uKftmreqH8WoLuYbkWKXLr2K5DafjFFDPyVEGnqe8Rc8CDG%2BOHD%2BryCIpK8P8Kku41oCGTxgwNqwVWdxYDCkDpVWzMjzwKTBp7IimizQM2Yupw749eXbtjDEIeICOUzLGjkuF4eBI8vnlHMABNDWT6J5vvbKCYP1xhmUKubzrHn5CFDaGQMXKkVh3iGcfbxEfYxwd8cxFRTBfQPUT%2BeDhGo5OZa0dd1xhXEo8QUKfi0rz91gybBi1pb9bf7Q4uXTaMEV2EWDyRnvWOQph4M%2B%2FxQ9GrcFIcjp9HG3DBrVIhBtIR2or%2BVdwAn%2BJ7Ix%2FIDkSpuM3Zkk7gy1YRCjQXd1lrKFOncFOMu26FbwoyhbNhqWcl7DkmkEIMDGUmOAbrgh9ZtPLQpUtiBpcrlVT3g0jr%2BCNO6lCRpGLJJldrh6AWjOGL2hZIZkZqHfSrh0Fc7%2FxAboN%2FfGeGwdCpHK0r00Eai9JOmI2EDA2sOFZmAcdVZwtFbIrUk5WxiSf5C3yoXpPPqW%2FjMOn3gMUGOqUBC15kZhQZ9XfORQ3geJD2FweA9BQeOI0qP%2BOmF%2BCORqGvr4%2B%2B2lUaCBuL7ZPB2NRpNkbvsulEyypsjud3dqwSdPv3xzV2h097binuMnnXdbANv9%2BSiwt0l2HCQaMM%2FghmR%2FtM5SpLOGiJfoN5qAOHdMdQ9aGP3XYcTpa8gsm2Xs2eZuu8FYZefRPhODc4PGCiYk36CviDh%2FvpX3b%2BrgLZgXT2D5X8&X-Amz-Signature=e377de430eca4667f284de79890658d915f84bb645344f5578ee00b9d4a5a992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
