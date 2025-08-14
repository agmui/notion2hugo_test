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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPLCSTHI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQD5jGu%2Bow6j1vOz6Gp2%2FcUZcm4wRWt87jrwBnvKp1CfWQIgeDrFePFwODs75bhLLfq7owfTvHnCo4fIMznjK1y5RNQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDXWvlobxWqgIzLcaircA5lBdzzD%2FDib5fkrNzgZ8O4slY%2FT%2BXhh0JaFjPR47hZ4NX7yDN8e29f3aM%2By5rZw2a4P6JWQNgfmgJEiFv1hyDAhV1Xsy1ryrnVbfMFVTRtWmFekhOLpwrxZ6%2Fp6cnsKtlSpzajuRL1LWDd7pSF0KicQN41c0pBY885QL5WJ1jUXWKNVDcVtfFIvYuHa%2BDzi1OrHC2Z%2FGqNoPr1T3HjCwmdg4A6oFYOq%2By3%2BvoU4%2BjLkQWzXKCXOpvG6DZWASFjKsl9FhxO071of%2F8zzADEuMa115BDJbZoMnwmEVMvhM9p%2BzuJTNqWH0gYjwce5KmYRpBFhhvM7JcpM%2FNwjYg5KzXYjW1qY4Xg0RVR09CoXbMWPyQYVSEHTZqPkpClNf18YXwRmeMxaiftxKydCIaDCcMVQljdqt3hyWBxBKxwjb1WbdKPtcYVGfnLL8wHtaULH2Jn4Mw0z1nC9TIA%2B8CkIeWyYOz7F2S%2FfpPDexV%2FuB8eSGRtb7G19cA3%2FaPVuZpFCe5%2BKhREMYVNLmmITQskrdAvSbX1bbK%2FOv6wkrUzqZZ24h2O%2Fk91kMWhlNElj1yDafr6N%2F3S0ipZ3GmkE2K0bfmujS6eGD3ULynxdSxzoP7oLM9OF%2FraxhdjZPkLWML7C%2BMQGOqUBqINWfKi0MDDzYk9GVULdYPxFDHeuxmuiHUCKAicda6ykrzlEETECrwONW5AcAKbQzsgo8O05%2By55GRUstkLcuotiOytdKud4HQzFQ7RUCbz5SSp5tPyeuTxWpTISZWwrQXLTlzlL5W%2FEuA4p6mISsT8fb72ET2AmeeD7EOp3vtW1n1tsPfdS2p6g5JRlsBMtFPzwOZu6t5KjobpCtmxsqa5GjMyB&X-Amz-Signature=c99cbd007d7d1cadd365aa1f9b0b8c4b1ca6881e4aed79df79d0ee32ccc97582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPLCSTHI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQD5jGu%2Bow6j1vOz6Gp2%2FcUZcm4wRWt87jrwBnvKp1CfWQIgeDrFePFwODs75bhLLfq7owfTvHnCo4fIMznjK1y5RNQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDXWvlobxWqgIzLcaircA5lBdzzD%2FDib5fkrNzgZ8O4slY%2FT%2BXhh0JaFjPR47hZ4NX7yDN8e29f3aM%2By5rZw2a4P6JWQNgfmgJEiFv1hyDAhV1Xsy1ryrnVbfMFVTRtWmFekhOLpwrxZ6%2Fp6cnsKtlSpzajuRL1LWDd7pSF0KicQN41c0pBY885QL5WJ1jUXWKNVDcVtfFIvYuHa%2BDzi1OrHC2Z%2FGqNoPr1T3HjCwmdg4A6oFYOq%2By3%2BvoU4%2BjLkQWzXKCXOpvG6DZWASFjKsl9FhxO071of%2F8zzADEuMa115BDJbZoMnwmEVMvhM9p%2BzuJTNqWH0gYjwce5KmYRpBFhhvM7JcpM%2FNwjYg5KzXYjW1qY4Xg0RVR09CoXbMWPyQYVSEHTZqPkpClNf18YXwRmeMxaiftxKydCIaDCcMVQljdqt3hyWBxBKxwjb1WbdKPtcYVGfnLL8wHtaULH2Jn4Mw0z1nC9TIA%2B8CkIeWyYOz7F2S%2FfpPDexV%2FuB8eSGRtb7G19cA3%2FaPVuZpFCe5%2BKhREMYVNLmmITQskrdAvSbX1bbK%2FOv6wkrUzqZZ24h2O%2Fk91kMWhlNElj1yDafr6N%2F3S0ipZ3GmkE2K0bfmujS6eGD3ULynxdSxzoP7oLM9OF%2FraxhdjZPkLWML7C%2BMQGOqUBqINWfKi0MDDzYk9GVULdYPxFDHeuxmuiHUCKAicda6ykrzlEETECrwONW5AcAKbQzsgo8O05%2By55GRUstkLcuotiOytdKud4HQzFQ7RUCbz5SSp5tPyeuTxWpTISZWwrQXLTlzlL5W%2FEuA4p6mISsT8fb72ET2AmeeD7EOp3vtW1n1tsPfdS2p6g5JRlsBMtFPzwOZu6t5KjobpCtmxsqa5GjMyB&X-Amz-Signature=3de1eabc8ccd7c94d4d7e1ca2a0bb759f385ff1d1f2f5c294b9c60bc6dadbc01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
