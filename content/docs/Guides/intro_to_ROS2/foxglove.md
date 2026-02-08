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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLNRJTCS%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqciSaa4L5eBooRSvTsmEZTndBPOKUomMWM1JKerI4dAiAwf63fidFklYvQW4YKS1Pvi5rHbVHKl485oYtZ5jpndyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMRr9EvVj4VfTByb4mKtwDIark%2BKl6O7IP7smqlXnao51HN9f4lygiRsUB%2B5WIfM7KalJJA6mWKw0UD7FvuoxvOpCtaAwvDk%2BCWDJ8%2B6VqIEEIi%2F6z2OZknFvdSC94awGy0ePsc9HxuEja3Q8wH2%2Fsp0yU9TWD3jF0QTlMEMG7xZtfA%2BzJ27U4MJF8mdgErQ3e3mCjJa3wXxtOPmD5epBKM2GQzqHDjbKYC7SRg7q8wnySa2usuQVlXjBacioMAKqOViisFAKQGUafv2%2BUDaxI0qHrg1Cp8O5A8mLcmRMyvw%2Fq1uPDV82XE%2FAb9RvwVLhUCQeI2adD%2BnecVKTjgsRUEFq4U3GJQlKMKWkXhi7kpAmOnVsl%2BwrNj9ohAL0WzsEWDCgo%2FY13rsH3nYbWv4HrcNIUBBdoIT8PvOJxf2GWkYPFiMrM9DCYyHokrSWYWOBcRxWGYzVcOhOE0j26T0whqRwxri7KxkDF5Ud6i5W8W6zj%2B1XaE7v4LBL%2F%2Fu4d8X8CI1F2SS9vbyPCl%2Bmea%2FW42b980LXsWoKxDninBuShBABSVb5vRP0tXLm7ksKeYDpTvPUcHxkYt0mrjasFr1ZK0RYSni7K2BIiHBWDiQusVwrgJaRL0EPTFZm1FeySlDtKJqqW4v6RO9RiowcwgOqfzAY6pgGhTLhkN3r%2B8CW6CVSPAy9sbvrQlgiKfitZ5gja3X5lUl9kZ7PXOgwKfKQiDNn8wIcWPtf2RpAlT0Xhw0HSCCt6rGDakrOLLWq4OC4uT2Lx1lK%2FGLkD9OunhV4Faes0NlCZ4VUYf4s%2F1FdFnfdoNd4O%2BBXyR6SwAyZjiYVB0e79OT9eCUXqq6Rze%2BnUPzhmr118LT%2B5%2FXKFmeudCe1yGiJOWyAKtLDu&X-Amz-Signature=60a15e34bcfd7685d5216a1ab31b8a43be3b9f0cbb6fc8c2cf99da88aaeb5f4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLNRJTCS%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqciSaa4L5eBooRSvTsmEZTndBPOKUomMWM1JKerI4dAiAwf63fidFklYvQW4YKS1Pvi5rHbVHKl485oYtZ5jpndyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMRr9EvVj4VfTByb4mKtwDIark%2BKl6O7IP7smqlXnao51HN9f4lygiRsUB%2B5WIfM7KalJJA6mWKw0UD7FvuoxvOpCtaAwvDk%2BCWDJ8%2B6VqIEEIi%2F6z2OZknFvdSC94awGy0ePsc9HxuEja3Q8wH2%2Fsp0yU9TWD3jF0QTlMEMG7xZtfA%2BzJ27U4MJF8mdgErQ3e3mCjJa3wXxtOPmD5epBKM2GQzqHDjbKYC7SRg7q8wnySa2usuQVlXjBacioMAKqOViisFAKQGUafv2%2BUDaxI0qHrg1Cp8O5A8mLcmRMyvw%2Fq1uPDV82XE%2FAb9RvwVLhUCQeI2adD%2BnecVKTjgsRUEFq4U3GJQlKMKWkXhi7kpAmOnVsl%2BwrNj9ohAL0WzsEWDCgo%2FY13rsH3nYbWv4HrcNIUBBdoIT8PvOJxf2GWkYPFiMrM9DCYyHokrSWYWOBcRxWGYzVcOhOE0j26T0whqRwxri7KxkDF5Ud6i5W8W6zj%2B1XaE7v4LBL%2F%2Fu4d8X8CI1F2SS9vbyPCl%2Bmea%2FW42b980LXsWoKxDninBuShBABSVb5vRP0tXLm7ksKeYDpTvPUcHxkYt0mrjasFr1ZK0RYSni7K2BIiHBWDiQusVwrgJaRL0EPTFZm1FeySlDtKJqqW4v6RO9RiowcwgOqfzAY6pgGhTLhkN3r%2B8CW6CVSPAy9sbvrQlgiKfitZ5gja3X5lUl9kZ7PXOgwKfKQiDNn8wIcWPtf2RpAlT0Xhw0HSCCt6rGDakrOLLWq4OC4uT2Lx1lK%2FGLkD9OunhV4Faes0NlCZ4VUYf4s%2F1FdFnfdoNd4O%2BBXyR6SwAyZjiYVB0e79OT9eCUXqq6Rze%2BnUPzhmr118LT%2B5%2FXKFmeudCe1yGiJOWyAKtLDu&X-Amz-Signature=c5e060e0e967bc0553b263dceeec44503ad66f49ba2dd05c556a2edcf952618d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
