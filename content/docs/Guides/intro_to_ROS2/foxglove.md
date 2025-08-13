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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNLEMOC2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F318eRTSVx1BThJt49mT3Ik0s%2FPyJIOowNJQJzZI4cwIhAJ4KuK9rcN8cR9t10xRZLFqPMUKQ6Z%2B%2BV2HymFnXMoW2Kv8DCC8QABoMNjM3NDIzMTgzODA1IgwH6meo2G9ksP8uqPkq3AOeJ8%2FeofkRznRlHYYfaCvqtFkaOmj2r8yRi2q1uVgBdqVKjUTez7u6GRV4oQPQ3tOCX2aQ%2FqWnRFO5XQIW3NuKHm1Rx%2FBTHKuh1xrEYEZEfH928MTswP5dDibeTlHBYjUxtAS%2B7321S5Hk7Jc%2FYk3UalmNi4jDLX6vU3BE6UNWsihqa%2FOVGhnlexiBkkWHUO%2Fv6DIKmJjjFqIgUdGhv%2F8etYdsZUAsw7K%2FzWYEZieukVwXPCYzbv%2BKaKbpBcIK87Aq1I3M0aKiQAN5Y%2Bj4K4GH9u3vYQS5gXIwIcPlb121OKfFWedFYh69%2Bmu9BGm6FSTfs3LGsAQm%2FUYWmKfMBj8f0FdhIuVgG3%2FKKauQvduuj1S8%2FADa%2BVApdrLgq4u%2F1L5cBZTU14YOSFLVSXh98ppvqwv8ED3aXM%2F4BEjPkW6C9OvTBpfDnO1WdTPSNf80%2Bcz2SewJhWPuWl7wqQi%2FtKeJedSZe3ajrP1WXXPy3WXiKTBVItWCYeBjZa7boXE%2FbG4fnj0x3vgy%2FEbvxRTxUlJOvqwUALpR4PJjzlSlLEU6%2BB5B2WmwJG73Hk3Mh3ZMCHEg%2BgYlvatk%2Bvh6EsdfDkSs8n5qjI8tbJU659ngssk%2FPbUHj7asKTnNJWlG%2FDCKs%2FLEBjqkAZvf74DXzC%2FK6vcg7tDJtaUMZCxhfqKIV2%2B1%2BW4Lt1Co6au2hrsY2NHUWdAZlNKayniHfO7mbn4tGmPyW9Zu19QFd727qCGDHjbbgWhh1nZG8pZE2NaPMuOYzxm3prpSUFIBNcpvJSmlQzD3iESj7JG6sAv5ZYyqOWURieARl9MphDioa55SM48keOcKwuR%2BYYAvWn7ZKlF%2BSkDtniKv8qYb0EAn&X-Amz-Signature=b01f83f914c8f23421667fa3397cb00404821086014e5bfde9b664687be1c4b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNLEMOC2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F318eRTSVx1BThJt49mT3Ik0s%2FPyJIOowNJQJzZI4cwIhAJ4KuK9rcN8cR9t10xRZLFqPMUKQ6Z%2B%2BV2HymFnXMoW2Kv8DCC8QABoMNjM3NDIzMTgzODA1IgwH6meo2G9ksP8uqPkq3AOeJ8%2FeofkRznRlHYYfaCvqtFkaOmj2r8yRi2q1uVgBdqVKjUTez7u6GRV4oQPQ3tOCX2aQ%2FqWnRFO5XQIW3NuKHm1Rx%2FBTHKuh1xrEYEZEfH928MTswP5dDibeTlHBYjUxtAS%2B7321S5Hk7Jc%2FYk3UalmNi4jDLX6vU3BE6UNWsihqa%2FOVGhnlexiBkkWHUO%2Fv6DIKmJjjFqIgUdGhv%2F8etYdsZUAsw7K%2FzWYEZieukVwXPCYzbv%2BKaKbpBcIK87Aq1I3M0aKiQAN5Y%2Bj4K4GH9u3vYQS5gXIwIcPlb121OKfFWedFYh69%2Bmu9BGm6FSTfs3LGsAQm%2FUYWmKfMBj8f0FdhIuVgG3%2FKKauQvduuj1S8%2FADa%2BVApdrLgq4u%2F1L5cBZTU14YOSFLVSXh98ppvqwv8ED3aXM%2F4BEjPkW6C9OvTBpfDnO1WdTPSNf80%2Bcz2SewJhWPuWl7wqQi%2FtKeJedSZe3ajrP1WXXPy3WXiKTBVItWCYeBjZa7boXE%2FbG4fnj0x3vgy%2FEbvxRTxUlJOvqwUALpR4PJjzlSlLEU6%2BB5B2WmwJG73Hk3Mh3ZMCHEg%2BgYlvatk%2Bvh6EsdfDkSs8n5qjI8tbJU659ngssk%2FPbUHj7asKTnNJWlG%2FDCKs%2FLEBjqkAZvf74DXzC%2FK6vcg7tDJtaUMZCxhfqKIV2%2B1%2BW4Lt1Co6au2hrsY2NHUWdAZlNKayniHfO7mbn4tGmPyW9Zu19QFd727qCGDHjbbgWhh1nZG8pZE2NaPMuOYzxm3prpSUFIBNcpvJSmlQzD3iESj7JG6sAv5ZYyqOWURieARl9MphDioa55SM48keOcKwuR%2BYYAvWn7ZKlF%2BSkDtniKv8qYb0EAn&X-Amz-Signature=ccb631e68f4d872bb7d674b8bde9fa74b81c41240cb6de769bd8e6e485bb869b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
