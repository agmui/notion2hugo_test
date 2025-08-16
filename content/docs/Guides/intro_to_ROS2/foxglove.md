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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZMAA6DS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDw8f4n4IES5P2Ho0%2BWE3UHpsZh7ocdggLbOaaCCREBtQIgStiix8fXe%2F0yTzKQGajv0M5jSL%2FWiHGXtGc4tFc3v1Uq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDiNTHNCN8TF4ESTHSrcA1PvOILVXmxZ%2F3MOKakptASPDcVHMNMaOjTYF8VLoiQEl8pEcqzvuol83F%2FV%2B9EgpQIKpnmjhMBVjkU9LSZ3eDm5%2FLuaoIse2Lf6vyjaJ0eaB7lFdrcCovth%2BFAkcQD8TpABbbbUxht4S8pdishT3qxXUu9Tcwcir%2BI5WKvmHHjEMsSXh%2BWqN5NGytDx68mGOTlDDNYB%2FyfHJYkyVVk4X7sng8CpXszQLiQDfprMS6Z9eZt6iRONj8yb5JVd%2FmppNK62rhupm%2F8Swpb9i9U%2FDR%2B2YUm6WvrxnEiMwd%2BG9KiSHP%2BR6HzURN3peoIHxtNLiB3PkxCoK82%2BAbhdAFfM5FhFbSXj5WfmKyNqfcTKS6gE%2BO2zO5GghkjewglyXFiHLPD6L%2Fu8sXHe%2BPsSoXOKurJQJDVFKAh5yCkPSPmn7wmzOaZdEsxLO6zwbvOn7tUO72I92%2Bc9h3srx5vMcYRzm%2FA65NNnXz9PxFxOkDYDMy4WFbq3SOxoRxvY%2F0up440vGMalL5isoTk4IaocTNNb6iIsdrT7zCOccHtsJ%2FBGz2tvq9FpZ6U6pMEunefQhMWcAuuQwZgQ%2B1a9qG31DBEhHN6iyD81VF2OifLBYl%2BtTOk%2BPTPqkQarxaTNshfxMPX3gMUGOqUBvd4Q2FlgMarHDgqn5yUj%2BCz6aZswcInbc6BhjivIGAY5tbgGMOXUnkKsGS27Sw5Y0XO7k6J5kW6M0H1P3ElQJDlmfPERXqraavWEvI0EK5tBUK2SiBWBQgSCdFXd%2BH0QHIhGqt4n1%2BZAYBr39dT8IHkkOLWXJhQmG23Qnw0qiazwqSXZ3mSejdxDQDP78YPNYI9XiHm9yd6oMzxf6gI7JEaEJlr%2F&X-Amz-Signature=440ecbb81c77e317e84dc2e0b34be4d5b130d24fb7ad718d4be4d1384f39e182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZMAA6DS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDw8f4n4IES5P2Ho0%2BWE3UHpsZh7ocdggLbOaaCCREBtQIgStiix8fXe%2F0yTzKQGajv0M5jSL%2FWiHGXtGc4tFc3v1Uq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDiNTHNCN8TF4ESTHSrcA1PvOILVXmxZ%2F3MOKakptASPDcVHMNMaOjTYF8VLoiQEl8pEcqzvuol83F%2FV%2B9EgpQIKpnmjhMBVjkU9LSZ3eDm5%2FLuaoIse2Lf6vyjaJ0eaB7lFdrcCovth%2BFAkcQD8TpABbbbUxht4S8pdishT3qxXUu9Tcwcir%2BI5WKvmHHjEMsSXh%2BWqN5NGytDx68mGOTlDDNYB%2FyfHJYkyVVk4X7sng8CpXszQLiQDfprMS6Z9eZt6iRONj8yb5JVd%2FmppNK62rhupm%2F8Swpb9i9U%2FDR%2B2YUm6WvrxnEiMwd%2BG9KiSHP%2BR6HzURN3peoIHxtNLiB3PkxCoK82%2BAbhdAFfM5FhFbSXj5WfmKyNqfcTKS6gE%2BO2zO5GghkjewglyXFiHLPD6L%2Fu8sXHe%2BPsSoXOKurJQJDVFKAh5yCkPSPmn7wmzOaZdEsxLO6zwbvOn7tUO72I92%2Bc9h3srx5vMcYRzm%2FA65NNnXz9PxFxOkDYDMy4WFbq3SOxoRxvY%2F0up440vGMalL5isoTk4IaocTNNb6iIsdrT7zCOccHtsJ%2FBGz2tvq9FpZ6U6pMEunefQhMWcAuuQwZgQ%2B1a9qG31DBEhHN6iyD81VF2OifLBYl%2BtTOk%2BPTPqkQarxaTNshfxMPX3gMUGOqUBvd4Q2FlgMarHDgqn5yUj%2BCz6aZswcInbc6BhjivIGAY5tbgGMOXUnkKsGS27Sw5Y0XO7k6J5kW6M0H1P3ElQJDlmfPERXqraavWEvI0EK5tBUK2SiBWBQgSCdFXd%2BH0QHIhGqt4n1%2BZAYBr39dT8IHkkOLWXJhQmG23Qnw0qiazwqSXZ3mSejdxDQDP78YPNYI9XiHm9yd6oMzxf6gI7JEaEJlr%2F&X-Amz-Signature=716d602b6bc0d15fa4dd360e4ca75056163908023bf9ba077bec5a71b0b889b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
