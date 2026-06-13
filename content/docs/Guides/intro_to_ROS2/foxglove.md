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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAMQK5J3%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCEhW4dm9fbn9PHmzpVH4Nb%2Fc8ICZRIg%2B3hHeSpOOwuzgIgDrYgmN%2FSTobkEPcbb2Y4s4ThhVF6668GAJAb64eXDWoq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDOehvUTa2BKojDsH3CrcAyj39NsB8RZ2rzzwQVjQMVYNMI13rc3sEajwtl1wXvRHDBL6BytBGBlTyZRIcgmUCFbKfTe7%2BKpDEpffV1tXvTFH2NEWd4x9pO5Cpqmua5ka%2FOIWLvJqrub0XGSOgXOtfoNIuJgjXhSFURoYyn7kCww99KEQdHPKEVRuG22pgkk%2FhS2YkFR0fvVPkJuLSFbHaj1P94WhfL5wBOZeOqwg%2BZjQolk8lRSAJvLKDE3ATJ6mm6FbtNdBesDX23Ig0UeApYUMp%2Fj8PUu%2FFypxPXNkfspcweqnQK4EKAW4w%2FO7MEINGfnKFDfBLpdzg%2F8fmUxG9X9Z69owN073Sz2PL7Q9TSwgejo33HF%2FKIK%2BHG4Knjl4pIf7eW%2BGKFqPVYeuhSdCuCQd%2B4d4jPrRA4FmwxDL23NKM29vPjCGSwkQyUtyjTJlX59fD3f54bCyC8lU8bbWg1vpOuK%2B2mPaOC90cVEKEL43c3MVuLVR8t4tEVplMz387AzWE%2FAmKczK3ko2HKlTpPZzHBdHW2Tv9a1ByiwOlqrfmB%2FAtOAvSbXJrRwDbkb3lPLk3Jp5QJgTkkCtqLpdM2SYLZ0M4UwKZXPDQ52dmFwnP%2BPNJzXBs1EqaUY%2FVux9DMSoJs5DvJ%2BEI3J6MPz7stEGOqUBdvBNo2ejLHY8E1ZxiUk7aCl1krDjfEiWGU2OQxGnDuor2QSVp8UffpabaOuK4qxCm9S%2BVo5U6noWv1OxfhGVh83zGAYVM9Ra2WU4sqNE7zjPAAW8jQXEur4dTz%2FzbhzNmiZnqXnHgqh86mp0vpJ04NeXhohg%2FuG3klsUqr1Scv1sBUB7xRabmvMBFMxdm5p8ktCyyff0tgulrPHjyHaHaQp5djaI&X-Amz-Signature=41ecb70f55b7e01a1fb6d0a9fb290f18965a6fd595485413b10fc2ef04773914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAMQK5J3%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCEhW4dm9fbn9PHmzpVH4Nb%2Fc8ICZRIg%2B3hHeSpOOwuzgIgDrYgmN%2FSTobkEPcbb2Y4s4ThhVF6668GAJAb64eXDWoq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDOehvUTa2BKojDsH3CrcAyj39NsB8RZ2rzzwQVjQMVYNMI13rc3sEajwtl1wXvRHDBL6BytBGBlTyZRIcgmUCFbKfTe7%2BKpDEpffV1tXvTFH2NEWd4x9pO5Cpqmua5ka%2FOIWLvJqrub0XGSOgXOtfoNIuJgjXhSFURoYyn7kCww99KEQdHPKEVRuG22pgkk%2FhS2YkFR0fvVPkJuLSFbHaj1P94WhfL5wBOZeOqwg%2BZjQolk8lRSAJvLKDE3ATJ6mm6FbtNdBesDX23Ig0UeApYUMp%2Fj8PUu%2FFypxPXNkfspcweqnQK4EKAW4w%2FO7MEINGfnKFDfBLpdzg%2F8fmUxG9X9Z69owN073Sz2PL7Q9TSwgejo33HF%2FKIK%2BHG4Knjl4pIf7eW%2BGKFqPVYeuhSdCuCQd%2B4d4jPrRA4FmwxDL23NKM29vPjCGSwkQyUtyjTJlX59fD3f54bCyC8lU8bbWg1vpOuK%2B2mPaOC90cVEKEL43c3MVuLVR8t4tEVplMz387AzWE%2FAmKczK3ko2HKlTpPZzHBdHW2Tv9a1ByiwOlqrfmB%2FAtOAvSbXJrRwDbkb3lPLk3Jp5QJgTkkCtqLpdM2SYLZ0M4UwKZXPDQ52dmFwnP%2BPNJzXBs1EqaUY%2FVux9DMSoJs5DvJ%2BEI3J6MPz7stEGOqUBdvBNo2ejLHY8E1ZxiUk7aCl1krDjfEiWGU2OQxGnDuor2QSVp8UffpabaOuK4qxCm9S%2BVo5U6noWv1OxfhGVh83zGAYVM9Ra2WU4sqNE7zjPAAW8jQXEur4dTz%2FzbhzNmiZnqXnHgqh86mp0vpJ04NeXhohg%2FuG3klsUqr1Scv1sBUB7xRabmvMBFMxdm5p8ktCyyff0tgulrPHjyHaHaQp5djaI&X-Amz-Signature=7f8c95f9a45aa2204aa3d198bce40b71d74f0e60a39ff0c5fa4134aa629edcad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
