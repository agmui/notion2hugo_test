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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGMARXLH%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkz05rqhevsNX52i890rDC%2B56DsX2RLhQCpLx4mhzfQAiBn5yeYtaLP%2FYOZBoAphg5Pq13rhd133FnRtK17IWMZ9Sr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMnmLwVEla4zGBJB3DKtwDluwIkh6rST%2FpjS57gXLPc0S%2BQQsU3xZ45RUr68J9uCr0acUvcKpJw1TI8rR1V5Wl5qpfjnNxcsSAWSOKfMRjT6BB%2B%2B%2BYLhz8XfklzMXeewgI3eur8W%2FtIDh5L8t7NV05Llpwi9eDYvYiZExP2seA9YR2rNb%2BGEFWh%2Bic9o5Jr25wgSKg%2FPrvQDWhWwe2g35zAFysJ%2FWhcPOH0LlLpD%2F91vIQXjYPqE9bP7b4jpaFqGRKpTAUQ2ouoDQLGptIj9irGicMbmE%2B3OjtwypsBXBDzRAl8s%2B%2BXDeRWnBobAMv%2F0WFssWcZtDhKYC4TUp7FB9K1kjdqpk9c1XCVb%2FkLMI1wwFeD0KG2oUDKHa0a9Cd1FGW60gjHNcv%2BbrzFFHMJAOpLnwhTYDBzmg25Gc6vlhGJhX0MqCQnNsIH6gQJkgrX4LQPB6Iqf%2BMQDv%2F6PM6GEx2%2BNd5cU2otVDrVWzGK6flRjRdD4Zv%2BwwHZ8ZBnjaReGOrBZWe3AMazPtdXsokf8oDG9i1Tbm%2BufX5kIh4fueVdYGh8ZKk0M4JT3%2B2jf8AdtVOuYmm6wxHeDf1L8rJZdwyPhLSh1vnboUPV7PbNupPwm8BFZSI35J8%2BdWQ1JQatZ%2BBISnnMPejan3MtL4w47r1xAY6pgFkPMIG1BQru%2F98sF%2FkuVwkGBzXd8K%2FDmn%2FL75aroOOcPcmqNPMhi%2FFzh48c1Py3ChSKDbSx7UD5vZy6v08PxB1hoPm55vMAhJxMRgyhMXx%2BJZxfeskOuKB9F5I7SNmmZIcw3fEGHfYc8I%2BehNzHLG80hgTAxvlRYvsPIwdjJyPvg66bRkKUdxR0ZYTSyJtUgdiAIVDEIUheOy%2BX0ULsAaS295foFi2&X-Amz-Signature=c77ea49d9b28712e68643ece5ce52399a96e800caee59f9c1669ea49bea54b46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGMARXLH%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkz05rqhevsNX52i890rDC%2B56DsX2RLhQCpLx4mhzfQAiBn5yeYtaLP%2FYOZBoAphg5Pq13rhd133FnRtK17IWMZ9Sr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMnmLwVEla4zGBJB3DKtwDluwIkh6rST%2FpjS57gXLPc0S%2BQQsU3xZ45RUr68J9uCr0acUvcKpJw1TI8rR1V5Wl5qpfjnNxcsSAWSOKfMRjT6BB%2B%2B%2BYLhz8XfklzMXeewgI3eur8W%2FtIDh5L8t7NV05Llpwi9eDYvYiZExP2seA9YR2rNb%2BGEFWh%2Bic9o5Jr25wgSKg%2FPrvQDWhWwe2g35zAFysJ%2FWhcPOH0LlLpD%2F91vIQXjYPqE9bP7b4jpaFqGRKpTAUQ2ouoDQLGptIj9irGicMbmE%2B3OjtwypsBXBDzRAl8s%2B%2BXDeRWnBobAMv%2F0WFssWcZtDhKYC4TUp7FB9K1kjdqpk9c1XCVb%2FkLMI1wwFeD0KG2oUDKHa0a9Cd1FGW60gjHNcv%2BbrzFFHMJAOpLnwhTYDBzmg25Gc6vlhGJhX0MqCQnNsIH6gQJkgrX4LQPB6Iqf%2BMQDv%2F6PM6GEx2%2BNd5cU2otVDrVWzGK6flRjRdD4Zv%2BwwHZ8ZBnjaReGOrBZWe3AMazPtdXsokf8oDG9i1Tbm%2BufX5kIh4fueVdYGh8ZKk0M4JT3%2B2jf8AdtVOuYmm6wxHeDf1L8rJZdwyPhLSh1vnboUPV7PbNupPwm8BFZSI35J8%2BdWQ1JQatZ%2BBISnnMPejan3MtL4w47r1xAY6pgFkPMIG1BQru%2F98sF%2FkuVwkGBzXd8K%2FDmn%2FL75aroOOcPcmqNPMhi%2FFzh48c1Py3ChSKDbSx7UD5vZy6v08PxB1hoPm55vMAhJxMRgyhMXx%2BJZxfeskOuKB9F5I7SNmmZIcw3fEGHfYc8I%2BehNzHLG80hgTAxvlRYvsPIwdjJyPvg66bRkKUdxR0ZYTSyJtUgdiAIVDEIUheOy%2BX0ULsAaS295foFi2&X-Amz-Signature=ea049bb485d11684e3dce8a528e18ef3af13540c9efa7a1ef9269e01bc372e1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
