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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI4BY2CO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHEeWKz%2BCsP2ocx3s9if0qZadfUm2dg%2FHx1%2F4hgbxMdfAiA6vANTjLyxbZuBpXCoWwJYKPTLSUiHXLW%2FMqeV6rtp0yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMdMX7VYk%2FCIpxjQ9bKtwDO60gOYKKrjtlGIuNKhnl9OXOAIilZeOcBm7wzaHiE87nqHinDgJU3BR2Z6fzHkhFsJjORpwVf%2FE2vc9yXk3cmG3PQKRCAtOQphjKhKhVPl8MCndt0g3UyNshlBzI5LtuBuuIKQNCMNrg48uu0UXq0P6VpNl1LNlDgwnY2QqSIphEnMdqydvhZ8ZMzSa6TjVYEGhZzC27keutMXogOrH1I%2Bnyhm2kwpGLl6iPzRQoMuzqTfgn5v77UgDHWwr32%2Bui4BIUOna5jDbZiX%2FIe1h%2FZ7JvXoUR7pqzLODzq1TBvF1AmAiC8VmlHs3g11xWrcR5I1cmR8vdz6FvvnAvDAPNkJ1B2eObORjNUqUmPXbZHGnwF4YRRsehs9jsOQsSthrlCjN6FmR3L5qSr45bawJVoh4GwzuqwQB5ghSNLJJT286IOKoKg66HbjGpXSdwHm1hyTczddsX9IYWeAUMsiGFH1yGXWLO9shJB87UKKLxmFMx3ZIHtubm25I0eeReHd4QqnVHRa9quoRgq4i%2BrNVnQICXeQI4%2FRXRCPQINehxWKBcPzZcl766lS9dnkvtck9umrnZclpUBGGTSjDGcWeASDuQPiNcP1F4oMFSMW6nU5UJhJ8%2FO2eYd%2BZBu%2FowpZmCxQY6pgFVbmxS1mO%2F%2B5Q12i2fwRwGniNlJofiDMFDMUOf0RfvsKUh7oMt7OF%2BTyOWwMSELbkUHCFmF5AunrlfWWoRV6vNa0FLTWAUYf5IdRacczaXgRMhzbWZOA2i%2Fm%2Bh3PVmtNP%2B8WwqEiBQTwyGqG8x8D9SC6MNKJeAA33UIPlrx78T%2F3pKOeA4iDkI%2B1lVkSVopBqtkQz4ckbX%2FB15CayjORwoAjoawQ3B&X-Amz-Signature=069a04bc4b8b8ee4567318e0c136fe7d61333d8a1918577e50851c4f42bc7ffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI4BY2CO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHEeWKz%2BCsP2ocx3s9if0qZadfUm2dg%2FHx1%2F4hgbxMdfAiA6vANTjLyxbZuBpXCoWwJYKPTLSUiHXLW%2FMqeV6rtp0yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMdMX7VYk%2FCIpxjQ9bKtwDO60gOYKKrjtlGIuNKhnl9OXOAIilZeOcBm7wzaHiE87nqHinDgJU3BR2Z6fzHkhFsJjORpwVf%2FE2vc9yXk3cmG3PQKRCAtOQphjKhKhVPl8MCndt0g3UyNshlBzI5LtuBuuIKQNCMNrg48uu0UXq0P6VpNl1LNlDgwnY2QqSIphEnMdqydvhZ8ZMzSa6TjVYEGhZzC27keutMXogOrH1I%2Bnyhm2kwpGLl6iPzRQoMuzqTfgn5v77UgDHWwr32%2Bui4BIUOna5jDbZiX%2FIe1h%2FZ7JvXoUR7pqzLODzq1TBvF1AmAiC8VmlHs3g11xWrcR5I1cmR8vdz6FvvnAvDAPNkJ1B2eObORjNUqUmPXbZHGnwF4YRRsehs9jsOQsSthrlCjN6FmR3L5qSr45bawJVoh4GwzuqwQB5ghSNLJJT286IOKoKg66HbjGpXSdwHm1hyTczddsX9IYWeAUMsiGFH1yGXWLO9shJB87UKKLxmFMx3ZIHtubm25I0eeReHd4QqnVHRa9quoRgq4i%2BrNVnQICXeQI4%2FRXRCPQINehxWKBcPzZcl766lS9dnkvtck9umrnZclpUBGGTSjDGcWeASDuQPiNcP1F4oMFSMW6nU5UJhJ8%2FO2eYd%2BZBu%2FowpZmCxQY6pgFVbmxS1mO%2F%2B5Q12i2fwRwGniNlJofiDMFDMUOf0RfvsKUh7oMt7OF%2BTyOWwMSELbkUHCFmF5AunrlfWWoRV6vNa0FLTWAUYf5IdRacczaXgRMhzbWZOA2i%2Fm%2Bh3PVmtNP%2B8WwqEiBQTwyGqG8x8D9SC6MNKJeAA33UIPlrx78T%2F3pKOeA4iDkI%2B1lVkSVopBqtkQz4ckbX%2FB15CayjORwoAjoawQ3B&X-Amz-Signature=d85cd70658fe025825e4636ccf11eacc00224da3866df012dceeb6425c20e76b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
