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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7QTXXT2%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdPskZS7vGtAFmXyfBlX%2FXgP6Oo8anryT9O%2F7ickn6SgIgUZsT5fbLl4BZI2gqixmvb%2B%2B1n3y%2Fd3aw183aIZTtz7cq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDF7lFjlhIygPONMp9CrcA%2FQKct50IJ%2B1vO12zadF5FaDt8N5MXR8FlntcRMvPmjn%2B95CPwm%2BdKuFCpFOqzjd7X9kQMa%2FCHlWA1LUejPUtrlIHwwdxlTj3lupnYmaGBk2mes86c9PAqzaSe5Lu%2BwSz1WHaTORLvRshmyFKnoWSxYxxGRUTmnYDZify8t6DEHPfLiluZ2qOKLlVkuWBAOHdxkKrJL%2BDFDiGTu3YncqnCi1wru40yCo9azTwbqfFE%2BHxgBAiVRAC4LL%2FiL0zwDueum7kL2YwnR0XOIaDESI5s7oB%2BeNSMxxPOsKcXAqGqUW9Hn35UNoM%2BRWCtkH9qZPtKhiqfCqmrWrH6O5SHpQDTUchmhPdJQjH6hxm91GttXcgludwORNIDwkG%2Bbyci1MGYsTAO4zoc29ptm%2FSslL9A91NtkHchUG64WNDF9KL1LRuKPhjP91FGKUYGdcPdq5XONYFVNoawkhmFzNW7NDdPjNZyFd%2F7UCS0rumh01UKVaVxlfvBD5WEZK2wYyzD20%2BVWI0y9MKE3hwqY1KCSFKfL2poO7gfFOpbbWWvSFpFiYPETVP0l8L9V%2F34TS9lrX%2B%2BE1Z5K5D1k1wI18dEgTcWHd0G%2BJvGvb46H2yLTZfPdJY71GCFRbDrEUmgdwMIHX2s8GOqUBUvWxHvEOPWuclK5%2BAQsNQwZpjyT03JqyWXSJNDGWzzVxwY1hiG6v5x%2FaVgYlt9u7PvzgSqfE%2Bpj7NYk1TliZOktsLBjsA8uvxFBv0zgZDkGirvUtl9%2FWvo8kIFPYqGrNHjTlmVyb85f6o2rcqgQWPRITrV0dW4y71SH7q%2FqVpH9hn%2F3x88aD12%2FdU1kZh9Mgfp8s7aFdRJh9N5g8PEyGmqJuR5kl&X-Amz-Signature=13cbb8321cbada4a77972a5af58c421ed2a6ebe59e133c70efa543f0addc47c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7QTXXT2%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdPskZS7vGtAFmXyfBlX%2FXgP6Oo8anryT9O%2F7ickn6SgIgUZsT5fbLl4BZI2gqixmvb%2B%2B1n3y%2Fd3aw183aIZTtz7cq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDF7lFjlhIygPONMp9CrcA%2FQKct50IJ%2B1vO12zadF5FaDt8N5MXR8FlntcRMvPmjn%2B95CPwm%2BdKuFCpFOqzjd7X9kQMa%2FCHlWA1LUejPUtrlIHwwdxlTj3lupnYmaGBk2mes86c9PAqzaSe5Lu%2BwSz1WHaTORLvRshmyFKnoWSxYxxGRUTmnYDZify8t6DEHPfLiluZ2qOKLlVkuWBAOHdxkKrJL%2BDFDiGTu3YncqnCi1wru40yCo9azTwbqfFE%2BHxgBAiVRAC4LL%2FiL0zwDueum7kL2YwnR0XOIaDESI5s7oB%2BeNSMxxPOsKcXAqGqUW9Hn35UNoM%2BRWCtkH9qZPtKhiqfCqmrWrH6O5SHpQDTUchmhPdJQjH6hxm91GttXcgludwORNIDwkG%2Bbyci1MGYsTAO4zoc29ptm%2FSslL9A91NtkHchUG64WNDF9KL1LRuKPhjP91FGKUYGdcPdq5XONYFVNoawkhmFzNW7NDdPjNZyFd%2F7UCS0rumh01UKVaVxlfvBD5WEZK2wYyzD20%2BVWI0y9MKE3hwqY1KCSFKfL2poO7gfFOpbbWWvSFpFiYPETVP0l8L9V%2F34TS9lrX%2B%2BE1Z5K5D1k1wI18dEgTcWHd0G%2BJvGvb46H2yLTZfPdJY71GCFRbDrEUmgdwMIHX2s8GOqUBUvWxHvEOPWuclK5%2BAQsNQwZpjyT03JqyWXSJNDGWzzVxwY1hiG6v5x%2FaVgYlt9u7PvzgSqfE%2Bpj7NYk1TliZOktsLBjsA8uvxFBv0zgZDkGirvUtl9%2FWvo8kIFPYqGrNHjTlmVyb85f6o2rcqgQWPRITrV0dW4y71SH7q%2FqVpH9hn%2F3x88aD12%2FdU1kZh9Mgfp8s7aFdRJh9N5g8PEyGmqJuR5kl&X-Amz-Signature=c5a726f0f06aa45269d43858479a6f8dd0d964ac20e48a77e69651f1fabd8870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
