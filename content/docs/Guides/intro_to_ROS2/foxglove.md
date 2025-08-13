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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSYUSDEU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBJ0uPFGyiA%2Bpq4pjBzTvetDu0s3pP0IVgsEoKbJxE0AiEA69%2BzOcgQ1Yix4WEuYToPgFJXhcQhGMMxONjvijObK7gq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDH4clce0HuZWBT7cCyrcA7F1hXCK3HJRSmJQyiWThMzXJnvRBrfNiqG6LWhA3xMl8tmOQXfBwkKB03fSKy1kttwL%2BOzWUc2wkOjfz8EYpTMxgafH%2BsbEHutjzDgOxlWDevr4EMmQpWrx8r86TBu%2FEIjG9yYIm%2Bt4mglLtpw0U1KoFF1TMFgbcG1Qd5KRze1KDPID2pGBg2jQL1HhOwiqhdN8aU8ZkhzYW%2BcMhYvUSqY%2BkTKEwu%2BuheE%2BRIqrOkh%2Fcgn8agwwFrdt2ZsOrNcrw%2F6mMk3rOkSmIC6lBnNWDIS2LgtToSexmapCTa%2B58wvM2vUusUPliMTnHIVhKvDDg8qbPFLCRwCugkkuZDAUyJkwrL9ezCVbCEMS4Jh9XHDKu3aAq%2FQUZBDW%2BiByPHhHMlpuG6RYPUDIXjZ2llFZ6udn0lPremoCAUT3oZbP0hy0l%2BMxHHXAXvYzpEodLy9jKm0x7bu6K9y9P2rvwq3nXCLol5wYMXAlrcVRpHcLdPAe2TfSwVT4CTsbn99h8q3z%2FVScc3qULaX2atIM1SP4C7FoRLHSaTXR7xcpkjtndS%2Bt8eIRGpfO6WMQyrK2AL2rTjkeRbKbqaSIe6HRdNE%2Bz%2BhCm3E%2FybKQ7aDsZQ4Kuk9hZfV0T5CO2pd2lx%2BVMNjG8cQGOqUBoDPde91gyCtKaeHfLLRoRtenftAyN8s4PkroSLtuZdi8EabPoJXBd8hgkrGCu7XFaF0qzi7MLnUmQQ00T9vDgqRuNtyRVOUltK5X090B%2FTCO%2BmJUCyYIWQ94HW3OHMuK61D0E4DWUBGkrSwKZA%2B%2FuuNzH%2BtCeEgYgNsZ1GKBBVnlBTbj7BVboFIGVUHvnhFCirN1bBSoOXiqkVArz7%2FDweBDqI1m&X-Amz-Signature=28c665d0e27a039194dc390a7b8b9860b6e6d9768b54e9f979ba1b108dc321c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSYUSDEU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBJ0uPFGyiA%2Bpq4pjBzTvetDu0s3pP0IVgsEoKbJxE0AiEA69%2BzOcgQ1Yix4WEuYToPgFJXhcQhGMMxONjvijObK7gq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDH4clce0HuZWBT7cCyrcA7F1hXCK3HJRSmJQyiWThMzXJnvRBrfNiqG6LWhA3xMl8tmOQXfBwkKB03fSKy1kttwL%2BOzWUc2wkOjfz8EYpTMxgafH%2BsbEHutjzDgOxlWDevr4EMmQpWrx8r86TBu%2FEIjG9yYIm%2Bt4mglLtpw0U1KoFF1TMFgbcG1Qd5KRze1KDPID2pGBg2jQL1HhOwiqhdN8aU8ZkhzYW%2BcMhYvUSqY%2BkTKEwu%2BuheE%2BRIqrOkh%2Fcgn8agwwFrdt2ZsOrNcrw%2F6mMk3rOkSmIC6lBnNWDIS2LgtToSexmapCTa%2B58wvM2vUusUPliMTnHIVhKvDDg8qbPFLCRwCugkkuZDAUyJkwrL9ezCVbCEMS4Jh9XHDKu3aAq%2FQUZBDW%2BiByPHhHMlpuG6RYPUDIXjZ2llFZ6udn0lPremoCAUT3oZbP0hy0l%2BMxHHXAXvYzpEodLy9jKm0x7bu6K9y9P2rvwq3nXCLol5wYMXAlrcVRpHcLdPAe2TfSwVT4CTsbn99h8q3z%2FVScc3qULaX2atIM1SP4C7FoRLHSaTXR7xcpkjtndS%2Bt8eIRGpfO6WMQyrK2AL2rTjkeRbKbqaSIe6HRdNE%2Bz%2BhCm3E%2FybKQ7aDsZQ4Kuk9hZfV0T5CO2pd2lx%2BVMNjG8cQGOqUBoDPde91gyCtKaeHfLLRoRtenftAyN8s4PkroSLtuZdi8EabPoJXBd8hgkrGCu7XFaF0qzi7MLnUmQQ00T9vDgqRuNtyRVOUltK5X090B%2FTCO%2BmJUCyYIWQ94HW3OHMuK61D0E4DWUBGkrSwKZA%2B%2FuuNzH%2BtCeEgYgNsZ1GKBBVnlBTbj7BVboFIGVUHvnhFCirN1bBSoOXiqkVArz7%2FDweBDqI1m&X-Amz-Signature=7727f3086743ff57b1facf3beba66d997730459b9b73877e30e176b826b2df99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
