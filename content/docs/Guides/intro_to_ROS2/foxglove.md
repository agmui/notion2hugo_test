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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYXLTQAX%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpfnehMc8kc91y55bFUSVIuKiyDjut3vfTJJCiLP0QjAiEAjhUhaGVl3XwD0LGV576HsciCQ2rROBgbaZimrQusWkkqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPKgCqqTUMVlTgdD7CrcAzi3m0aQYDOOfYXnyot6X6WZv2%2B3oIkPRCXz6gn1tR8IddJbCndsl2PhnfszQ6BxnmrCcuVU7nLOw0SdINa68EmxL77fnU3w%2B8wKmeQWGx%2F9j4iqeSg5OtTpExXLKyyZBQQxlL7ahQxvc4A%2FgbWtv5%2BdahtjnYVeR7%2FnKmyocd5eaEbJ2EDrI%2FJpSdhjrSFi6XuA7WhCWAws8c%2Bjzj9TxON0P%2FUk0a1FMXGKEslaYEEvmJ8KgdXgZVFD0SK7tzt9zqQ6FDjcOK%2B3Kb6u6zTJeySbMM%2BxBaP79zJ%2Fa10o%2F%2BNKINoLa5KiVKRH%2BT599RO6au8X0uUCh6H4UQdyy5y%2B7zT%2Bo%2FSP0bNS%2FuqnX8gUBIxQhBhMVYpUcsVMxuKCCostJeGGwr%2F7T4ZFUetG1e0OnLzunGKv6qL01xKMzCjZXtqdS9oOjTuG5mnuyrQGPBZqW9Fv4a1Jemi3dlT1Fp%2FUDbOmr1VygqQKx79k1tnbAb1KlnzLNC7qnQWDYN3TPQsrRUbl0KGjxVPqlzGuigtB7cHuy2CIQMmHgB3ZGS7boF4WhMIOaZ44l%2BWpBsfyGoieWGRX9rMuyBRRVnV7eZnb%2Btotq%2FdEugddi95XEM3SXj%2Bxse4xlKw5KkFD%2F0c2MM6Y78gGOqUBNAWjcymP%2BbkZ8ykD7y8PtGmQTPzCKVBAaU%2B0Ks%2B%2FMVKBNCy3pONjYZnoTUDVZiOqbY3UqDOfV4721JiWsWsnQLwAWnStWDqUHXl4k1UaK6NHadwc8Tj%2BjnS%2FPm3SNHOKtnpmNaXzWZ4HE77BBQoHVEefqstraZMF4Mp8whm%2BjgMYTCXWqZvPSOYWRmveCTRl8OonI1zqSa9rUjufeWNh8%2B6uWbuj&X-Amz-Signature=8c5dc10451db319f69c623192e71be85c4fa9f394140abd548c1c1e316989016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYXLTQAX%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpfnehMc8kc91y55bFUSVIuKiyDjut3vfTJJCiLP0QjAiEAjhUhaGVl3XwD0LGV576HsciCQ2rROBgbaZimrQusWkkqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPKgCqqTUMVlTgdD7CrcAzi3m0aQYDOOfYXnyot6X6WZv2%2B3oIkPRCXz6gn1tR8IddJbCndsl2PhnfszQ6BxnmrCcuVU7nLOw0SdINa68EmxL77fnU3w%2B8wKmeQWGx%2F9j4iqeSg5OtTpExXLKyyZBQQxlL7ahQxvc4A%2FgbWtv5%2BdahtjnYVeR7%2FnKmyocd5eaEbJ2EDrI%2FJpSdhjrSFi6XuA7WhCWAws8c%2Bjzj9TxON0P%2FUk0a1FMXGKEslaYEEvmJ8KgdXgZVFD0SK7tzt9zqQ6FDjcOK%2B3Kb6u6zTJeySbMM%2BxBaP79zJ%2Fa10o%2F%2BNKINoLa5KiVKRH%2BT599RO6au8X0uUCh6H4UQdyy5y%2B7zT%2Bo%2FSP0bNS%2FuqnX8gUBIxQhBhMVYpUcsVMxuKCCostJeGGwr%2F7T4ZFUetG1e0OnLzunGKv6qL01xKMzCjZXtqdS9oOjTuG5mnuyrQGPBZqW9Fv4a1Jemi3dlT1Fp%2FUDbOmr1VygqQKx79k1tnbAb1KlnzLNC7qnQWDYN3TPQsrRUbl0KGjxVPqlzGuigtB7cHuy2CIQMmHgB3ZGS7boF4WhMIOaZ44l%2BWpBsfyGoieWGRX9rMuyBRRVnV7eZnb%2Btotq%2FdEugddi95XEM3SXj%2Bxse4xlKw5KkFD%2F0c2MM6Y78gGOqUBNAWjcymP%2BbkZ8ykD7y8PtGmQTPzCKVBAaU%2B0Ks%2B%2FMVKBNCy3pONjYZnoTUDVZiOqbY3UqDOfV4721JiWsWsnQLwAWnStWDqUHXl4k1UaK6NHadwc8Tj%2BjnS%2FPm3SNHOKtnpmNaXzWZ4HE77BBQoHVEefqstraZMF4Mp8whm%2BjgMYTCXWqZvPSOYWRmveCTRl8OonI1zqSa9rUjufeWNh8%2B6uWbuj&X-Amz-Signature=5da075590d62634f05564b91662c71782eaeee9279c5e1b697b0f0e44bf038a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
