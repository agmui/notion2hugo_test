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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFPBWUDT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHhWP2bGeCfC%2F%2Fapiv24rSuMxoYG894AFuoG71IOrFNsAiEAs977YgmRlRKMpIMx80iNEaTauC5QJI4NoLS85oA%2FihYq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDHin2zyLQOdk4yruACrcAzjIDQCXpD%2FamURh%2BpSPZoFlte%2F%2B8JNLoUynt81%2F2Pv2URt1eJb3hif5T%2B2EILe5viAIsF9rgSTPFQ6hfgrnYpNUMbo04b6kCfpuDqEE4xrHbby30SayrhNqoT2U0ZEGATrM0kB3lp2Ab6a7QKSCBI%2Ffyu0pfjmnabP2G9VqModPkrpfaI10mlU8w7podOyZe72cVqLytUrB1kzgb6yIu%2BmGbf5HUGQlShFx91AdyjOTUWX2TXeP0APniSHScBJxhAi8BNRiVrT7J%2BryGaTda7w1iQuFbKsBtHV8Ia5%2FfrDSZeBYXhUmr4QskcQpTUVHs3oOAwNqCpU%2FoL4U0c%2BuNbgorQ6pmc%2FDmz8mqzxgOdoUD85HlnqzEXT%2BgV6KRdlFe7yX5y7jqx6WXTqhVgAKVYIJGa2c%2FnYvEYQB%2F1eaTiO%2BW3SDQpiKIus7lEEfzdKooNrYC4qOxvXNiiNciIS%2Fpdor6aku7NHuVmTgvR5Kn001QpCxGgsEe46%2F4MaD1NONwmxZGyqv5JOtK7rDBTWZAT1Kxpc8rpAus6fyc%2FsuoWZggwjLeLscDbGM%2Fi4MEVCYbFYslB0BNgcj0GOiZT6ZX73NymqH3shVuz95WLivs%2FgoD9K37t39PXnxCoIJMNvK%2B8QGOqUBSftoWCJigFTiOlIVzgeGehkIqp9XblEeLvYw8fIBObHPZWdeYpaEnTAQsY8Hw0xLIExLRyqJ4GfEgc0jBVapY9vEKOQHMUEQ2AGIj42MrKLunYYDgklUz5FjJeAhU7%2FXCokiC9umBSitJhoS4GE8hwaTxOpZVcBq9p%2B3NJedRiMmY7WiZVjDAIoZrNLItpjVAQ7RZm40bDQyKDqVnd5So%2BgEA00l&X-Amz-Signature=d4c1527a2cee7fd96b5c0a360bc150d1e49acc74356b56d33378edf660b6bcf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFPBWUDT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHhWP2bGeCfC%2F%2Fapiv24rSuMxoYG894AFuoG71IOrFNsAiEAs977YgmRlRKMpIMx80iNEaTauC5QJI4NoLS85oA%2FihYq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDHin2zyLQOdk4yruACrcAzjIDQCXpD%2FamURh%2BpSPZoFlte%2F%2B8JNLoUynt81%2F2Pv2URt1eJb3hif5T%2B2EILe5viAIsF9rgSTPFQ6hfgrnYpNUMbo04b6kCfpuDqEE4xrHbby30SayrhNqoT2U0ZEGATrM0kB3lp2Ab6a7QKSCBI%2Ffyu0pfjmnabP2G9VqModPkrpfaI10mlU8w7podOyZe72cVqLytUrB1kzgb6yIu%2BmGbf5HUGQlShFx91AdyjOTUWX2TXeP0APniSHScBJxhAi8BNRiVrT7J%2BryGaTda7w1iQuFbKsBtHV8Ia5%2FfrDSZeBYXhUmr4QskcQpTUVHs3oOAwNqCpU%2FoL4U0c%2BuNbgorQ6pmc%2FDmz8mqzxgOdoUD85HlnqzEXT%2BgV6KRdlFe7yX5y7jqx6WXTqhVgAKVYIJGa2c%2FnYvEYQB%2F1eaTiO%2BW3SDQpiKIus7lEEfzdKooNrYC4qOxvXNiiNciIS%2Fpdor6aku7NHuVmTgvR5Kn001QpCxGgsEe46%2F4MaD1NONwmxZGyqv5JOtK7rDBTWZAT1Kxpc8rpAus6fyc%2FsuoWZggwjLeLscDbGM%2Fi4MEVCYbFYslB0BNgcj0GOiZT6ZX73NymqH3shVuz95WLivs%2FgoD9K37t39PXnxCoIJMNvK%2B8QGOqUBSftoWCJigFTiOlIVzgeGehkIqp9XblEeLvYw8fIBObHPZWdeYpaEnTAQsY8Hw0xLIExLRyqJ4GfEgc0jBVapY9vEKOQHMUEQ2AGIj42MrKLunYYDgklUz5FjJeAhU7%2FXCokiC9umBSitJhoS4GE8hwaTxOpZVcBq9p%2B3NJedRiMmY7WiZVjDAIoZrNLItpjVAQ7RZm40bDQyKDqVnd5So%2BgEA00l&X-Amz-Signature=c573aacba2eb73fe1961a172912ade8792e32725dba5351de9aa01832031f665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
