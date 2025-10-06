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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRSRV33B%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDldcN6gw28gtRN%2F%2FCdK0Z8l0XBAfCbc5Iz6MnBZ7kSaAiEA%2F3lOcKtTllT1pC1GMozH4Wh2JASEb9fWqNQRU4dRYXEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFALE9nNgSahVVtuhircA26HCyQsdHHSFZOtsbqG7UpRJt6nFtMgmUPWDEFSBQvsjc6%2BwPMXcEiknbjzyLAvN6ICwipxIO2c01p%2Fh%2F0bQyvma125jq%2B7a4e2axvtLmFYnQdE6p9mvbiFFkAyH%2FPkDOJ%2FUWWWFuPAWz1PDWVeYCXuSPUVCuc%2FnCGRl%2BkuCn6CU49bJ3yQ3Y2ZAk1tdpJAqIg2zP1WIJcChlLgjhH7ky%2FU3mF1OC5l2sFlUvdVOPC3i2KrUlrWCN%2FdfpmuWMNJYgNP4eiKCK12P7THxnTvsm%2FE7z4c3RxrlKC%2BygAjNjsjlxy%2BvG6WQkt4IaKKdg5uq4lJWCLZWMzuQ8TJ%2FfivVh61r2Yk1YTyplvAV7hifUwOO57dKugombxOhF7Hq6ytTSMqBySjPYl5Lyo7USPStoVHU%2BV7L9nkiqPaqqh1a7JXxxv0b%2FUolQPEf5NLUb6syq2CXop4JM2kq%2BEggmaPyXoqUOMoCwP%2FHtaEsdFUaiFqdltOdLprAa0c3q2o6qqyf0lcgZxF6nFS7m82ceCTgv%2BAuGH5BCbWLNyfcGhgpLka%2BIwD94iUMxujMRT69%2BpFLzVrpGHaGy5g6Emn6qsDV7oq1cRVVxDlKiyUqF0I0YicRUi%2B%2BX0WIbxeuSfTMLKWjMcGOqUB%2FRzVbppSyQXYfL%2BZb%2FpgcmWyP6hGEGfV0imbXt9ZQ0nRm8nUuOyY76MooXZFdwxuEKzFg55qUYzOmWfBHxwL1SJX0yaIeqFaplmBAlcpIBLLsVMHoOzyhw%2BqHdnEZtOBpoRBSFeQDmroB4EeyBZMSc6Yo8Ap5aPoDpxmU%2FM3Ev%2FyuwcIZggDCZAcXMgd%2FMS39WuA4yzb8hwDanriurA5TD7J3bsP&X-Amz-Signature=7a91a351dcd3425b4b73068ff0a13379ad717fdd25134e8b9feabbaf5e9f416b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRSRV33B%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDldcN6gw28gtRN%2F%2FCdK0Z8l0XBAfCbc5Iz6MnBZ7kSaAiEA%2F3lOcKtTllT1pC1GMozH4Wh2JASEb9fWqNQRU4dRYXEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFALE9nNgSahVVtuhircA26HCyQsdHHSFZOtsbqG7UpRJt6nFtMgmUPWDEFSBQvsjc6%2BwPMXcEiknbjzyLAvN6ICwipxIO2c01p%2Fh%2F0bQyvma125jq%2B7a4e2axvtLmFYnQdE6p9mvbiFFkAyH%2FPkDOJ%2FUWWWFuPAWz1PDWVeYCXuSPUVCuc%2FnCGRl%2BkuCn6CU49bJ3yQ3Y2ZAk1tdpJAqIg2zP1WIJcChlLgjhH7ky%2FU3mF1OC5l2sFlUvdVOPC3i2KrUlrWCN%2FdfpmuWMNJYgNP4eiKCK12P7THxnTvsm%2FE7z4c3RxrlKC%2BygAjNjsjlxy%2BvG6WQkt4IaKKdg5uq4lJWCLZWMzuQ8TJ%2FfivVh61r2Yk1YTyplvAV7hifUwOO57dKugombxOhF7Hq6ytTSMqBySjPYl5Lyo7USPStoVHU%2BV7L9nkiqPaqqh1a7JXxxv0b%2FUolQPEf5NLUb6syq2CXop4JM2kq%2BEggmaPyXoqUOMoCwP%2FHtaEsdFUaiFqdltOdLprAa0c3q2o6qqyf0lcgZxF6nFS7m82ceCTgv%2BAuGH5BCbWLNyfcGhgpLka%2BIwD94iUMxujMRT69%2BpFLzVrpGHaGy5g6Emn6qsDV7oq1cRVVxDlKiyUqF0I0YicRUi%2B%2BX0WIbxeuSfTMLKWjMcGOqUB%2FRzVbppSyQXYfL%2BZb%2FpgcmWyP6hGEGfV0imbXt9ZQ0nRm8nUuOyY76MooXZFdwxuEKzFg55qUYzOmWfBHxwL1SJX0yaIeqFaplmBAlcpIBLLsVMHoOzyhw%2BqHdnEZtOBpoRBSFeQDmroB4EeyBZMSc6Yo8Ap5aPoDpxmU%2FM3Ev%2FyuwcIZggDCZAcXMgd%2FMS39WuA4yzb8hwDanriurA5TD7J3bsP&X-Amz-Signature=1cbcf87d7e7814842e7b0f7c435f30888f32bc45c94941d720c89d7da65f5fa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
