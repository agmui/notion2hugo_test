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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LZJOATX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCvH6PTbiWqXmLtlfswnp2Vq7h2l0ZZP0IcMV6Xgf7fFQIgaGt6c%2BKWmfKhAg%2FH%2FEWc6h7sGjrx%2BS070JWwnmWGAF4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJr5BKSRVpUpr47I8SrcA65ry0WvX2k2sBN4Uhf1ywG3dPAhAal9Q%2FYzpIpP3xuWogxPcf7SzHwrzt1haGQHUIMLrWOETaZ8n6nEIYXR9w8owuVFOBbczH9iYym0aLH%2BQiL3yH8wYpLtYdMgIcZj6DBG2V89u4fVou3CVjO9404CfeKaCCjMbn0cQZUNLk3hHeiM106b6x3XKvshDr1im2KBlAF%2FPoim%2FTSXvS%2FVeMHgsWvBo%2BwyNMNGYvM7dwrVg3REk5NRSgglMkUi747h8orqyMIPmu7ZzhZGwtHPJTF7as3kJ%2FfiCZF6Em%2F5YbBcv%2BSwhr2qyrLYTDntdbye2pBu8js%2FEbneC06QPD%2Bc8r5CV1re4zvqwXW9i3%2FywZ5KABU%2FykchcSXJ6OhpmSdsmMkx5KiiNk0pYIBl7UkAvv%2FC56IIECGjkUrZl7y2aSlPV2ObmMKHE7SSXkrjgoiry5c%2B8qMCeU2VwNGB2ejFrT99zbQ3jLX2pQf0aLQfhUeuZe%2BRVbc9htk5l6WhDEiLYNhpwlZ%2B2ok%2Frm%2FdUV4jibhYNYQbQDHearU3A25l1%2FYrCkgvsy9S5zJ67TpI2VVkOLvZslEen%2BIZFK7EbK9UvVqK8rpSus14GOuiwxWst6NT2eNHX5cKJ%2BQ0COoqMK21%2FcQGOqUBCvsUlCTesKbedc1evE6e%2BnFWsW03MVPftvLnhULTMltV6m%2B9TOkPDzZJSWPor%2B8QKxT9VdTfGklN6S%2BP3jdCDOzD02zyxxqLiEiSTdfBrxmtd14NGN7OZLrhFdXSkH4KmZ4%2Biyo%2FTxe94zAkrdyTVQfn7Shp9F2avdr3%2B%2BKyzJNw5vj%2FN0K%2FkJXj8t0MSXwII8a5D2nf%2B2am880mscB57Rwsw8Zx&X-Amz-Signature=ed16561b9744849d0f06cf540e79e6a137ab5d1739410b4fe3ccff090ef8935f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LZJOATX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCvH6PTbiWqXmLtlfswnp2Vq7h2l0ZZP0IcMV6Xgf7fFQIgaGt6c%2BKWmfKhAg%2FH%2FEWc6h7sGjrx%2BS070JWwnmWGAF4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJr5BKSRVpUpr47I8SrcA65ry0WvX2k2sBN4Uhf1ywG3dPAhAal9Q%2FYzpIpP3xuWogxPcf7SzHwrzt1haGQHUIMLrWOETaZ8n6nEIYXR9w8owuVFOBbczH9iYym0aLH%2BQiL3yH8wYpLtYdMgIcZj6DBG2V89u4fVou3CVjO9404CfeKaCCjMbn0cQZUNLk3hHeiM106b6x3XKvshDr1im2KBlAF%2FPoim%2FTSXvS%2FVeMHgsWvBo%2BwyNMNGYvM7dwrVg3REk5NRSgglMkUi747h8orqyMIPmu7ZzhZGwtHPJTF7as3kJ%2FfiCZF6Em%2F5YbBcv%2BSwhr2qyrLYTDntdbye2pBu8js%2FEbneC06QPD%2Bc8r5CV1re4zvqwXW9i3%2FywZ5KABU%2FykchcSXJ6OhpmSdsmMkx5KiiNk0pYIBl7UkAvv%2FC56IIECGjkUrZl7y2aSlPV2ObmMKHE7SSXkrjgoiry5c%2B8qMCeU2VwNGB2ejFrT99zbQ3jLX2pQf0aLQfhUeuZe%2BRVbc9htk5l6WhDEiLYNhpwlZ%2B2ok%2Frm%2FdUV4jibhYNYQbQDHearU3A25l1%2FYrCkgvsy9S5zJ67TpI2VVkOLvZslEen%2BIZFK7EbK9UvVqK8rpSus14GOuiwxWst6NT2eNHX5cKJ%2BQ0COoqMK21%2FcQGOqUBCvsUlCTesKbedc1evE6e%2BnFWsW03MVPftvLnhULTMltV6m%2B9TOkPDzZJSWPor%2B8QKxT9VdTfGklN6S%2BP3jdCDOzD02zyxxqLiEiSTdfBrxmtd14NGN7OZLrhFdXSkH4KmZ4%2Biyo%2FTxe94zAkrdyTVQfn7Shp9F2avdr3%2B%2BKyzJNw5vj%2FN0K%2FkJXj8t0MSXwII8a5D2nf%2B2am880mscB57Rwsw8Zx&X-Amz-Signature=ed4185b58e68321046cd1712d34d37739ccd51d35b54c4dafb4606332a1ac0a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
