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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5NHE7JB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVHsGRi7YgpM%2FprmhpeAlrW6GNPXDVjBrReppirPUcDAIhANqMJxiZVafxxbhxzDWE83iRf1d9kuUWbWRwzuZBmuX8Kv8DCCcQABoMNjM3NDIzMTgzODA1IgxnO%2B42hk6utSs6818q3AM9TOg4FcffFqN3iPFO%2BgEbPUwnIJv0Tcwo%2B6nkeFaWSj8cwoiPDui3KAMYbY%2BwpMA5NW4UbYjAhLndNAytsWw6CrVUP6n8sFXRILEPoLnpoqRmcO71xlO%2BiELuYWemhRc3mZdUSj%2Bidgb1rGx29nPkwQJCFVt8TNh1YiSkNgvb%2BoKhjReencPHMK487YhHsQ8CNRbelXpimiaprQihcBXLpCaVtqx0O6s%2B8XMKWTjzBUOhsmxfDY2OuX5sW5%2FQGvHsdYGIBn48wN%2FElYWmEQs5SZ%2FxQ2AkJwndJuSI%2FaFUohwm1maCcveESrSaHU05iUxTL1HV79K4kVW4hcz%2BFPIMLNU6rt4WtG5ad1nqdsy4FYUBDyXZU%2F0Ua0H20o0dgz2SIcK3%2FVyhMSJhSot4G%2Fp%2Bj%2BxTnoqdhdjsNU6CfS9xkPqoDosRxFn0xLqHmRqC%2BA7s3AaYJgwTc%2FM7LJIHO1UzhvwXxVievROJQ0k3sQkWMNL0up3ohlNb5yo8BuO4hpwNq7uIrtGx%2F140MyF1%2Ble6hHJwyh6oDQt8nTzsrQiZwwNNpqjSZmUGXdj60sVk0A%2Br9P1ymdzHVSay1uhIzI0JQ8fLq3EuG%2FU3LldXx3%2BBv56S4nMAB%2FDfIuaWADDc0fDEBjqkARLzpZQbzewlgRXvuJt9CU1bL7NDMyfM6oIauhgGm%2Fz2dOQ0SbzVuKqBzDxSZXLz1b1%2FJ4I8d8zbZAhbIpH3Q%2F882N8x%2Fuf0%2FirA%2FLlRaQn5LAbAx757x%2FW8T1ZEq0%2FVh3VGf2T3UQ3KeVuFykpqXTZ7ILO65UoMNfoKycfr2oA4wuoz72XBMJBGn3SXI92iBbsxUlbzfJds96%2F%2BnCYlPQZfL9Fj&X-Amz-Signature=9825e1a05672d6bb6f6d6b8ee94b992501737cad20a5bf8ad698973c38283bf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5NHE7JB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVHsGRi7YgpM%2FprmhpeAlrW6GNPXDVjBrReppirPUcDAIhANqMJxiZVafxxbhxzDWE83iRf1d9kuUWbWRwzuZBmuX8Kv8DCCcQABoMNjM3NDIzMTgzODA1IgxnO%2B42hk6utSs6818q3AM9TOg4FcffFqN3iPFO%2BgEbPUwnIJv0Tcwo%2B6nkeFaWSj8cwoiPDui3KAMYbY%2BwpMA5NW4UbYjAhLndNAytsWw6CrVUP6n8sFXRILEPoLnpoqRmcO71xlO%2BiELuYWemhRc3mZdUSj%2Bidgb1rGx29nPkwQJCFVt8TNh1YiSkNgvb%2BoKhjReencPHMK487YhHsQ8CNRbelXpimiaprQihcBXLpCaVtqx0O6s%2B8XMKWTjzBUOhsmxfDY2OuX5sW5%2FQGvHsdYGIBn48wN%2FElYWmEQs5SZ%2FxQ2AkJwndJuSI%2FaFUohwm1maCcveESrSaHU05iUxTL1HV79K4kVW4hcz%2BFPIMLNU6rt4WtG5ad1nqdsy4FYUBDyXZU%2F0Ua0H20o0dgz2SIcK3%2FVyhMSJhSot4G%2Fp%2Bj%2BxTnoqdhdjsNU6CfS9xkPqoDosRxFn0xLqHmRqC%2BA7s3AaYJgwTc%2FM7LJIHO1UzhvwXxVievROJQ0k3sQkWMNL0up3ohlNb5yo8BuO4hpwNq7uIrtGx%2F140MyF1%2Ble6hHJwyh6oDQt8nTzsrQiZwwNNpqjSZmUGXdj60sVk0A%2Br9P1ymdzHVSay1uhIzI0JQ8fLq3EuG%2FU3LldXx3%2BBv56S4nMAB%2FDfIuaWADDc0fDEBjqkARLzpZQbzewlgRXvuJt9CU1bL7NDMyfM6oIauhgGm%2Fz2dOQ0SbzVuKqBzDxSZXLz1b1%2FJ4I8d8zbZAhbIpH3Q%2F882N8x%2Fuf0%2FirA%2FLlRaQn5LAbAx757x%2FW8T1ZEq0%2FVh3VGf2T3UQ3KeVuFykpqXTZ7ILO65UoMNfoKycfr2oA4wuoz72XBMJBGn3SXI92iBbsxUlbzfJds96%2F%2BnCYlPQZfL9Fj&X-Amz-Signature=64b19e0bde71e22d7fb3d5c2121c9a0d9e4e76198ee68d79d061d601a70aa3ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
