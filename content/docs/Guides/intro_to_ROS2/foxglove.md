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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2SHWG4P%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgbdFr7WeVhTUTOkdtjWQP3%2BWmbZKezYmVRTBo1uZfqAiEApRer%2FML%2B1UGOoFcO5OFGqUe6b1lKgz%2FPCbtDEuy4mJAq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDFA26IIK4l2avFmm7ircAyjaVKX4KobZsxAwirFF7jXoEiOBKtInvOAtGvohuI%2F3YUxQS7O4HbovQWdYuJDNhV%2FwlXZRSqv1ZTEb0o3GB4v%2Bo6Zh3RLDQIkAmkkd27um4iCO6RQDEPvrH%2Fb92GYiiU88jZQiIoSBk4y15i4mdvQYSv3laq7KnfNK7URC9DsdxWXBqElTOw74YEbIJIWm8Ut75xAM15ICaars3YMLASkTZ0uGHIRgHWH9EZ55DtWR104xbtb%2BSfcpY%2FuwMNoEqe51nLFIifl2Pnz%2BgRqK1FPjbHhEv2GuKAYqqz5logPvJMjRTH2ox1B%2FVvE9Vviq9h0zxVUk1EKNf6I41IA7kJPIoW887Pec47%2F0ZFmnDu9HXeAxhnl0YZ4RbPtEm%2BjHVUFOeViFwTfkO19C8fPSPNMwio2KC9gOhxYzgXtOzwOcPSSEsq3SK0VTNeF6qtxjjqcdd11xwPOZIXK0Gr%2FaozN%2BV%2F8kwWaWTaeVDqfJ6ehrK4xGUBTbj%2F0DqGv9eNm3cIfxFD1RO1uH66s6cB3b8Pq4QQtuly6RgDz71wzN6t46rdlNJu5Whggg8%2BdDZvt6ntDKjm2XUw3bFNTDyuiuSrVRQrcjyRotFqOloK211PSR%2Bj%2Bpo%2B%2BoYhGIAi%2BzMLTa78QGOqUBQTg4xlqPAK7R0O5lCRQ%2BPp4iTYSeKpHJytZ4tT%2B04Yz2Ve7OyrzoUJ7282Y5XBMP6WF82rWVHMlrPBc3tFaIjDK45c9BeCCQXo%2FCNRlZ0QXuneNySB4j6gVthjfHxhXKKIYF84omnu2k7X2fXQtbMT5J1Dw9XOOFegOaLETh0qFXS63aF6Eqs2K9KG2bLd2Kut4JztWH9PwhuGt%2FOaw7PYoiSBRU&X-Amz-Signature=dc85d29a1dcf98c0c77f8f2392bd76045be6dc623c9b9a2a8f51d2d760aeaee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2SHWG4P%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgbdFr7WeVhTUTOkdtjWQP3%2BWmbZKezYmVRTBo1uZfqAiEApRer%2FML%2B1UGOoFcO5OFGqUe6b1lKgz%2FPCbtDEuy4mJAq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDFA26IIK4l2avFmm7ircAyjaVKX4KobZsxAwirFF7jXoEiOBKtInvOAtGvohuI%2F3YUxQS7O4HbovQWdYuJDNhV%2FwlXZRSqv1ZTEb0o3GB4v%2Bo6Zh3RLDQIkAmkkd27um4iCO6RQDEPvrH%2Fb92GYiiU88jZQiIoSBk4y15i4mdvQYSv3laq7KnfNK7URC9DsdxWXBqElTOw74YEbIJIWm8Ut75xAM15ICaars3YMLASkTZ0uGHIRgHWH9EZ55DtWR104xbtb%2BSfcpY%2FuwMNoEqe51nLFIifl2Pnz%2BgRqK1FPjbHhEv2GuKAYqqz5logPvJMjRTH2ox1B%2FVvE9Vviq9h0zxVUk1EKNf6I41IA7kJPIoW887Pec47%2F0ZFmnDu9HXeAxhnl0YZ4RbPtEm%2BjHVUFOeViFwTfkO19C8fPSPNMwio2KC9gOhxYzgXtOzwOcPSSEsq3SK0VTNeF6qtxjjqcdd11xwPOZIXK0Gr%2FaozN%2BV%2F8kwWaWTaeVDqfJ6ehrK4xGUBTbj%2F0DqGv9eNm3cIfxFD1RO1uH66s6cB3b8Pq4QQtuly6RgDz71wzN6t46rdlNJu5Whggg8%2BdDZvt6ntDKjm2XUw3bFNTDyuiuSrVRQrcjyRotFqOloK211PSR%2Bj%2Bpo%2B%2BoYhGIAi%2BzMLTa78QGOqUBQTg4xlqPAK7R0O5lCRQ%2BPp4iTYSeKpHJytZ4tT%2B04Yz2Ve7OyrzoUJ7282Y5XBMP6WF82rWVHMlrPBc3tFaIjDK45c9BeCCQXo%2FCNRlZ0QXuneNySB4j6gVthjfHxhXKKIYF84omnu2k7X2fXQtbMT5J1Dw9XOOFegOaLETh0qFXS63aF6Eqs2K9KG2bLd2Kut4JztWH9PwhuGt%2FOaw7PYoiSBRU&X-Amz-Signature=597f2e92438c1270c5bccc40d6796e82d1981ff99f822bb7cee9963d8bf1e63d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
