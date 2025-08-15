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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WK5IHFU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCmHrVgDH%2BynsF8DEtx%2F6a3t0LJBVNN1DEOpfwLR%2BgoMgIgQI%2F0kN9ysIP9%2BdX12nT3bgFhjDWamLT2hCS%2BJelUlHIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDFwsj2jKsDfTXk49mircA748z952NFUIT7ys0L0wfy8O7BzZxt7LaTz%2BwHDf7j4VgwUsUkaW2lqRoUS49xsICHoUhVMSPQwwC8D8qX9IBbidHzmT0eSTGCFwcenTb6PkeaIMbHVOvZFaF%2FqQOCSr98j8dOp5xOpLXiUH1kzziomTYmVax219KZGwez3PYmJQyDNIBQpUtBbizF%2FIF9oQiKnf3U6ivTAoavixNZVcqU43X54BB6CAds8xNdPCCS9HgVHD2FhNuexK%2Fttt3sQ5yU0zFHQ3qnFzGUPy70oZkUUyMuNRHSEBSFOiaOfUXYsvM6PGaOSsPSTY8BIdetPLH3Ucx1NfhkqNIJDMRqEuTL%2F%2BXMpo7tlYJqhhjTqowJThbKxj4ldJXmgaEzhGXdElBKA1mkhPNOstWLGrM%2Bn%2FWtW0SMaScRluMLsZZkP2MML5TFRKTRz4ZvVXvhdptS1DSHeRZVcvtz3qVN9n7VCKxY40aMZd3IXUAr1S0k0DPDfTPDIs18W6TZLSA84ISK7IC56QU5C9eoF07Tljn8KfI%2BbZFeXqOTM2CreRXfUnCnCI8I4i4%2BEcwLPsU4agz7YgUtzslwf%2BGyokDwMDunlXtsgTOeYhRUw%2BzBfYV6qNee75Wu2uoMiDeXdq0UKTMKOj%2B8QGOqUB%2Fodsw9vAH%2BKlBvrL0C0DtLBhyyDia0IYjcVBAu%2FTzJhphJ83XzZoX%2FfIGWsderN59ay%2BWXeSpxZmnAv5%2BFj6ZL29lOxd5ixdzD1aqhPUdKXShaq4p31W4UQbCynwHnIAvfaAKcUa7WIcxDlz7zUN1QGrxw0%2B9EVVTxOXj7DN5%2F7IXSfG8C1zBgAVhACWJ%2BvVa%2BnNkQP%2BHl7Vs%2FISSebLqkOFysJq&X-Amz-Signature=55c1f78d4f65e5507e9a33586a8f2135d52426a03b5902da5e767ac759a0d502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WK5IHFU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCmHrVgDH%2BynsF8DEtx%2F6a3t0LJBVNN1DEOpfwLR%2BgoMgIgQI%2F0kN9ysIP9%2BdX12nT3bgFhjDWamLT2hCS%2BJelUlHIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDFwsj2jKsDfTXk49mircA748z952NFUIT7ys0L0wfy8O7BzZxt7LaTz%2BwHDf7j4VgwUsUkaW2lqRoUS49xsICHoUhVMSPQwwC8D8qX9IBbidHzmT0eSTGCFwcenTb6PkeaIMbHVOvZFaF%2FqQOCSr98j8dOp5xOpLXiUH1kzziomTYmVax219KZGwez3PYmJQyDNIBQpUtBbizF%2FIF9oQiKnf3U6ivTAoavixNZVcqU43X54BB6CAds8xNdPCCS9HgVHD2FhNuexK%2Fttt3sQ5yU0zFHQ3qnFzGUPy70oZkUUyMuNRHSEBSFOiaOfUXYsvM6PGaOSsPSTY8BIdetPLH3Ucx1NfhkqNIJDMRqEuTL%2F%2BXMpo7tlYJqhhjTqowJThbKxj4ldJXmgaEzhGXdElBKA1mkhPNOstWLGrM%2Bn%2FWtW0SMaScRluMLsZZkP2MML5TFRKTRz4ZvVXvhdptS1DSHeRZVcvtz3qVN9n7VCKxY40aMZd3IXUAr1S0k0DPDfTPDIs18W6TZLSA84ISK7IC56QU5C9eoF07Tljn8KfI%2BbZFeXqOTM2CreRXfUnCnCI8I4i4%2BEcwLPsU4agz7YgUtzslwf%2BGyokDwMDunlXtsgTOeYhRUw%2BzBfYV6qNee75Wu2uoMiDeXdq0UKTMKOj%2B8QGOqUB%2Fodsw9vAH%2BKlBvrL0C0DtLBhyyDia0IYjcVBAu%2FTzJhphJ83XzZoX%2FfIGWsderN59ay%2BWXeSpxZmnAv5%2BFj6ZL29lOxd5ixdzD1aqhPUdKXShaq4p31W4UQbCynwHnIAvfaAKcUa7WIcxDlz7zUN1QGrxw0%2B9EVVTxOXj7DN5%2F7IXSfG8C1zBgAVhACWJ%2BvVa%2BnNkQP%2BHl7Vs%2FISSebLqkOFysJq&X-Amz-Signature=0bdfb1a7e24d4c9e8f7acc44c3ed57da8b5c7bd7b9d90975d144959dee753342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
