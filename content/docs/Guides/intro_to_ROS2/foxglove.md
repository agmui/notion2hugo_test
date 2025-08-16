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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY5IPTFT%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIFMu3tSZE1iSNJb9guLd74cflsOZnJEEUHjK%2FAfM%2BmPqAiBBzugQjajKxln92Gwspximx1HtxKQpmBYAj644dX7vcyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMFPDTLcHtg%2F4iqxX9KtwDdAiBABr6EMY53kBmX9jBAhzuGGVkPjEdQDjMXiv2yQ9atQHUaR6UNCrDbFpax4t7E5ZDs30Pm3kyn74f1exud%2FixVp%2BTQvuMrHcDR9GRl3LBArTUOe0%2FzyMLXPdLljn8HqiaeAhu%2Br28tRUNS4rEv8ahY7e7tGX0yaHQy%2FuFqksyezDt%2BiBzKUEpHDuBXBmHlz227mfIqchrTLKjG8JO0vK0Acwg934G%2Bcqn2vOkQ%2FV3Da2E8oaTkjCyMQpoEPpr%2F7sjC0q8qgwcnCbmdXzNI%2Bx0Cl2CW7d8mIWfmpsxl6A9khq5OL1zu1DestMEpT3J8Zv%2BNtTS1wnAjRUykRst8OzgAyTpfbyIEO4KZz%2Fnm59ySZg%2BUi2FEfIfqBi%2BtqzDKfN9vxx5iPCV6DoTfT8XZMecWrhwHTMZ5jPxYqok6CqJxkD7xz4baJ%2FS7giru6bFS68WfEolnBoHx%2BmX1v6%2Blc3BExD7TNT06vceYaQHX9zFEmxNLqyLH4CTYqq8uvghZzfe7sxsDqukSkeodRGupQTsvN3yTO08g63BXR5pfCd%2BTdCMsWwe0OS2PphsVGymbQxw2UX0Ch9oOQJXthgEPSPzz10o0KCetI%2BCg6TIQgxxvOOIkk5OHYpGX%2F4woZmCxQY6pgHRuRhhu7CIVvkUPI1kpsVe7V1qP7uNvFggnwNvtmPlcOB%2B7lMoij%2FqhedZ3frOGD1neKDGFW2ap14yOT7H6YxuqLwh3nRqbKaAE2H%2BUmY4WyQrUd2mYMCd2%2B4MfIxx1VPkExlE7nwqb9rjrGZIgxp62iHRtFrK1ba%2F5l3zX7Wk9dTNFci1mOJgyGYP70sVyTfo3L%2BW2wYdAzuVLda3%2FwAXR2gcuI%2FC&X-Amz-Signature=6628a604f09e5410216a727a2278dc18116ee983556da169d1c80ff20860c0e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY5IPTFT%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIFMu3tSZE1iSNJb9guLd74cflsOZnJEEUHjK%2FAfM%2BmPqAiBBzugQjajKxln92Gwspximx1HtxKQpmBYAj644dX7vcyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMFPDTLcHtg%2F4iqxX9KtwDdAiBABr6EMY53kBmX9jBAhzuGGVkPjEdQDjMXiv2yQ9atQHUaR6UNCrDbFpax4t7E5ZDs30Pm3kyn74f1exud%2FixVp%2BTQvuMrHcDR9GRl3LBArTUOe0%2FzyMLXPdLljn8HqiaeAhu%2Br28tRUNS4rEv8ahY7e7tGX0yaHQy%2FuFqksyezDt%2BiBzKUEpHDuBXBmHlz227mfIqchrTLKjG8JO0vK0Acwg934G%2Bcqn2vOkQ%2FV3Da2E8oaTkjCyMQpoEPpr%2F7sjC0q8qgwcnCbmdXzNI%2Bx0Cl2CW7d8mIWfmpsxl6A9khq5OL1zu1DestMEpT3J8Zv%2BNtTS1wnAjRUykRst8OzgAyTpfbyIEO4KZz%2Fnm59ySZg%2BUi2FEfIfqBi%2BtqzDKfN9vxx5iPCV6DoTfT8XZMecWrhwHTMZ5jPxYqok6CqJxkD7xz4baJ%2FS7giru6bFS68WfEolnBoHx%2BmX1v6%2Blc3BExD7TNT06vceYaQHX9zFEmxNLqyLH4CTYqq8uvghZzfe7sxsDqukSkeodRGupQTsvN3yTO08g63BXR5pfCd%2BTdCMsWwe0OS2PphsVGymbQxw2UX0Ch9oOQJXthgEPSPzz10o0KCetI%2BCg6TIQgxxvOOIkk5OHYpGX%2F4woZmCxQY6pgHRuRhhu7CIVvkUPI1kpsVe7V1qP7uNvFggnwNvtmPlcOB%2B7lMoij%2FqhedZ3frOGD1neKDGFW2ap14yOT7H6YxuqLwh3nRqbKaAE2H%2BUmY4WyQrUd2mYMCd2%2B4MfIxx1VPkExlE7nwqb9rjrGZIgxp62iHRtFrK1ba%2F5l3zX7Wk9dTNFci1mOJgyGYP70sVyTfo3L%2BW2wYdAzuVLda3%2FwAXR2gcuI%2FC&X-Amz-Signature=1f818b460b5a33a090148ad845beaa611a5fce721746fa8a5dd5e3f17cfdce22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
