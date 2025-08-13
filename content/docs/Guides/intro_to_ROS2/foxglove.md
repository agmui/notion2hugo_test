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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466667B6QQ7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4WwpyMJEIN%2Fs9vxrATSq%2BOUsoXI4Ws0d0xI%2Bpq%2BCBTAiEA1hKFJ6Hs2%2F8B8V68nlXOsIecdfUVqHvfo3VpJv82yrwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDANK9j9r3HJWa39IUyrcA30AsKjj34dbNnAdtEP1pokZcWDBzKpMf0ijPTCRGbU94ayJiCyAuu4KMLhpzx0Db7Zd2j50BVAWn%2FB%2BWDpP5RxJuwc%2FfFKP0dbU4X%2B6AX9teB%2BOU55yKTv3vokx8%2FGRDu07DuehvZ3hYZxFq1nmlB85Ch9a0s7dIVm7Q%2FFR5b%2FI4NmA8KXWakGbZ6OWc3C%2FDxeWOE4jNM4oNOO%2FF56Shzx7xBYmSkwpTVas%2BUfAA2BXe%2Fi3qM%2BWgo6meXGuURxX5eUyjQexqH%2Bt4x8plegbzFMTDLbIt3A74eWaOq%2Bn1SGIIjet07MqD5ux6iJ6jMolKtLeBPRQ2Hhw222CexaP4tF%2BQlGxPFeyQsPjdchqP3NB2n%2BvOsSjpGssxdtZzPBs%2BAtvxbPkn3qw97bC7fY3W0Q31QTazgILn6q%2BtBbbznwNspHi4NWNzwqEwIYJZkkL6JiPPSQGiskbpWZweq%2BiFhN%2BORPucfZPByRPpuZtFvILFf3B74m0eTX4ugBvBvP7fy9HEpN76aRTQcewge5C39cvGD%2BVoIVi37C%2B%2B3C1L7SPw8glu1K5lquJv6KLzjRDCxcHt7t35n6mFUYAIA4z%2BdPqJAaVYPrtvD0ahDjTM4hbP95ajaXx7IzKtjFiMMmG8MQGOqUBJhFsO7yk1ojceso%2F8rj5SVDp5Q8yd6JjPKZYif%2FUSIHGn4X8jQBGYV%2Bqa7mEDAbzPoKaUPEXQ%2FaU3DjPacP1fnqjqb6SKL4KFU3CbHJig7BGcH3Bm%2FGYb5ONv5TUOUdAjPMDqXJmBO6tuWpXiAX1rojJkJhbqFtwC1U8VcfkZfKEaEj1wj%2F18vnW%2BuQnfvbamO9JOfoBUbNBTNMJCidiKziYPxR8&X-Amz-Signature=71135a16ca943bfabd0b225b4cde00f79bd405ff3deb8e456d2738e1e908a72f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466667B6QQ7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4WwpyMJEIN%2Fs9vxrATSq%2BOUsoXI4Ws0d0xI%2Bpq%2BCBTAiEA1hKFJ6Hs2%2F8B8V68nlXOsIecdfUVqHvfo3VpJv82yrwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDANK9j9r3HJWa39IUyrcA30AsKjj34dbNnAdtEP1pokZcWDBzKpMf0ijPTCRGbU94ayJiCyAuu4KMLhpzx0Db7Zd2j50BVAWn%2FB%2BWDpP5RxJuwc%2FfFKP0dbU4X%2B6AX9teB%2BOU55yKTv3vokx8%2FGRDu07DuehvZ3hYZxFq1nmlB85Ch9a0s7dIVm7Q%2FFR5b%2FI4NmA8KXWakGbZ6OWc3C%2FDxeWOE4jNM4oNOO%2FF56Shzx7xBYmSkwpTVas%2BUfAA2BXe%2Fi3qM%2BWgo6meXGuURxX5eUyjQexqH%2Bt4x8plegbzFMTDLbIt3A74eWaOq%2Bn1SGIIjet07MqD5ux6iJ6jMolKtLeBPRQ2Hhw222CexaP4tF%2BQlGxPFeyQsPjdchqP3NB2n%2BvOsSjpGssxdtZzPBs%2BAtvxbPkn3qw97bC7fY3W0Q31QTazgILn6q%2BtBbbznwNspHi4NWNzwqEwIYJZkkL6JiPPSQGiskbpWZweq%2BiFhN%2BORPucfZPByRPpuZtFvILFf3B74m0eTX4ugBvBvP7fy9HEpN76aRTQcewge5C39cvGD%2BVoIVi37C%2B%2B3C1L7SPw8glu1K5lquJv6KLzjRDCxcHt7t35n6mFUYAIA4z%2BdPqJAaVYPrtvD0ahDjTM4hbP95ajaXx7IzKtjFiMMmG8MQGOqUBJhFsO7yk1ojceso%2F8rj5SVDp5Q8yd6JjPKZYif%2FUSIHGn4X8jQBGYV%2Bqa7mEDAbzPoKaUPEXQ%2FaU3DjPacP1fnqjqb6SKL4KFU3CbHJig7BGcH3Bm%2FGYb5ONv5TUOUdAjPMDqXJmBO6tuWpXiAX1rojJkJhbqFtwC1U8VcfkZfKEaEj1wj%2F18vnW%2BuQnfvbamO9JOfoBUbNBTNMJCidiKziYPxR8&X-Amz-Signature=6a90abcb69677c4ab5df0d7f5bb51110543cff77baf32c8dc27bbcc65ff2f028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
