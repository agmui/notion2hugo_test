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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657ZMFZEM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIAX1jFuYInv5OKRLlYdQErZyFZuhwF0LAVyM1HlrwsfYAiEA4ZqtrPOpfHYtcHmDbbrdG4ESqs3bSQ3h5IAZbqKagaEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDHBAzLzywMQRfw0V%2FCrcA0MYF%2BHOmZn8GT14rOE%2FPVdZrnSNZ1A%2BH1elvC81XzeLSTMp%2BhVfiCJhU5Te3%2FE8Rt6fGEioJJyQ%2Bs%2F5U3GUk9IVJKZgSe5WhadkoI4pkaW%2BzXrpjj%2FfhLigJ8fbJRliDv0awFDr0uhTbWI9jS%2Bl1APMXkaQi4Nw4lSTGhnTIZESfpZ5WFqlj%2F2OfuaJwjXrDbwgNkefooNHzOKIRUPFybvF1AUCHpzhd5Zd2nUugsXmUxLSa%2BfKw%2BnGA6NCDRZzf%2BQo7hZ0rv%2BhzaVuhptd%2FzRFgfSrkZumWZJQWbe93gs0TVIpz6aqWd2dK6gYnnoLdYmasaYtfFu%2FM42xRE4WfUvL7qcjg6upQEYESEmgXmBAxDvq4Z04tZo5CdTsiWrqNFfS6T27TnLEzf2jfgLCHwqILe%2Fki8Es%2B6qFUbHOI1RMsTg6mivRzcRYc%2FJd1H9WNUO4HnCYP%2FOV2wPRoy2Ch%2FU1dcRgKZTvFRPN6vX0f%2F%2B1NZPAR9GkAfjTLhy3WFR6dD4r0u4Glc%2FFhTQ3CYvop7agSn%2FJaAn8Ggn79kHTHcqXIYZPMvHv2uwZKRMCklfAABXi%2B%2B2A3le4u49KqX%2FLbpuNyxsdYTnfybBqNDAqdk9vev0OFj2tLE%2BSatakMMnj%2F8QGOqUB83D0nV4c3bUXxCW3N5XAJtl6azBslzL0KycFXJrg6vhH9Vuy%2BeQ4c9oowhPsy5ZBB1PMLowwYT9iznu6pygC5x9H5gc1FkogYs%2BP24qX92%2FWio%2BgO4pdEsnJ%2FZ5icCjPI91GpKAHOJrKbKsMDIei6Py2VCdlwpeTAl%2BaHsWY2U%2BEIlecHOeVGSizkvWYVpgnujF13%2FI5m7X1NzJCm9efSld%2Fhx90&X-Amz-Signature=808e6f8719a128b09d8f5de7f6f6cfd8bbfc47b345c53f709cf5867688ad0521&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657ZMFZEM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIAX1jFuYInv5OKRLlYdQErZyFZuhwF0LAVyM1HlrwsfYAiEA4ZqtrPOpfHYtcHmDbbrdG4ESqs3bSQ3h5IAZbqKagaEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDHBAzLzywMQRfw0V%2FCrcA0MYF%2BHOmZn8GT14rOE%2FPVdZrnSNZ1A%2BH1elvC81XzeLSTMp%2BhVfiCJhU5Te3%2FE8Rt6fGEioJJyQ%2Bs%2F5U3GUk9IVJKZgSe5WhadkoI4pkaW%2BzXrpjj%2FfhLigJ8fbJRliDv0awFDr0uhTbWI9jS%2Bl1APMXkaQi4Nw4lSTGhnTIZESfpZ5WFqlj%2F2OfuaJwjXrDbwgNkefooNHzOKIRUPFybvF1AUCHpzhd5Zd2nUugsXmUxLSa%2BfKw%2BnGA6NCDRZzf%2BQo7hZ0rv%2BhzaVuhptd%2FzRFgfSrkZumWZJQWbe93gs0TVIpz6aqWd2dK6gYnnoLdYmasaYtfFu%2FM42xRE4WfUvL7qcjg6upQEYESEmgXmBAxDvq4Z04tZo5CdTsiWrqNFfS6T27TnLEzf2jfgLCHwqILe%2Fki8Es%2B6qFUbHOI1RMsTg6mivRzcRYc%2FJd1H9WNUO4HnCYP%2FOV2wPRoy2Ch%2FU1dcRgKZTvFRPN6vX0f%2F%2B1NZPAR9GkAfjTLhy3WFR6dD4r0u4Glc%2FFhTQ3CYvop7agSn%2FJaAn8Ggn79kHTHcqXIYZPMvHv2uwZKRMCklfAABXi%2B%2B2A3le4u49KqX%2FLbpuNyxsdYTnfybBqNDAqdk9vev0OFj2tLE%2BSatakMMnj%2F8QGOqUB83D0nV4c3bUXxCW3N5XAJtl6azBslzL0KycFXJrg6vhH9Vuy%2BeQ4c9oowhPsy5ZBB1PMLowwYT9iznu6pygC5x9H5gc1FkogYs%2BP24qX92%2FWio%2BgO4pdEsnJ%2FZ5icCjPI91GpKAHOJrKbKsMDIei6Py2VCdlwpeTAl%2BaHsWY2U%2BEIlecHOeVGSizkvWYVpgnujF13%2FI5m7X1NzJCm9efSld%2Fhx90&X-Amz-Signature=02f2cce8c3eb90a8aa0f612fb7ecb3338b32d04091aad55b9d0beabead7aadb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
