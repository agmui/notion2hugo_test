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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHHLI3MH%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDNxO%2FBT9fChKi1%2BoEyU1TBntmDhdh5SurRph2gWF8uPQIhANtNbzn36KaePz05j8FKb2zfI2%2F4KjUg0bH4X%2FMQUj32Kv8DCEMQABoMNjM3NDIzMTgzODA1IgyOhN6x6i5kTFgDy4Eq3AMDQ%2BaFMWnHIszZPB%2BpXoc%2BCILr2vgb%2FiW2iw%2B2%2BsKKl0vsaOkdbf%2FImfh3f7K2gn4WOiO15V9gsXmVTpvDyH7eyEYkyVxY%2Btl5w6ZbD3Xn2h43LmD5fNl8dIVOgvNL3lt4zZrFxx2%2FUJni03d9sjXm7tsplcyQsu0bLsc3f7O7Q9L8GLxj7ZVayPRZXUHcfLYlrCrlx0b8hh2qs3rmO5UFQGrCKyr7Vxq%2FHGRX3gmRIBiNkfV7JqI2gBeutsXF%2BNKBMyS5bfj211L6dnYuQ64iv%2BfOpWmWih4GUzbSchiO%2Bn6Eia5%2BBddLJVZnpKZoRFalW8FrniyjjEFwsk36%2BvL7ye6swTB3xhl6zde0xBZTjwBu%2BwcQy2kQdhmlSLwxGhx8uGNNopn16LZSP4AaMXt%2B%2Boyi6%2FBH8We1Q3t3eP0JDkrWmFI%2FsWrHZkq6UAw0XcmLAKZD%2FqRA363KdPj9%2B0hQG%2BCf8hH1%2FnF5E3wuyKy4HSmyRpaPhL7t7kPRaiGLQL%2FK3ZD12%2FjhZtw4TlLWS5BPoGuxi7uT%2FYAPGckwBAeWVKS1LqXuy9ug38HwOUVEatxAG5D0np47WTuSTz4MrEaiZgMQKHtcU6EqATSUpyc4mQQ4DmjRhHhWdKoEhDDil8%2FMBjqkAbUyjvOQWS%2BXF9CbcCgg%2Fk805j%2BCgrpGH83t1B37Qs%2BY5KhGLt%2FjRkpI5unHLvC%2BbzPiC9Gn8MOpAOkRi4yLvGt5yYj7s3FXXczhLZKRwHJqT4VufcxmzXW%2Ff4FwvtjB8vnctH%2FS2kNRTUs6NSf%2B6UHg%2FSEBMu3YU%2FhNF0jmLzHZ0i11tqSan8VHlOJkvCNkB8EubyErO3HWnwbaByJJv2GgzgNS&X-Amz-Signature=61111e3d4ff4d280a47c1fc7925a02d9a102665b2252356355dec505ba2a72d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHHLI3MH%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDNxO%2FBT9fChKi1%2BoEyU1TBntmDhdh5SurRph2gWF8uPQIhANtNbzn36KaePz05j8FKb2zfI2%2F4KjUg0bH4X%2FMQUj32Kv8DCEMQABoMNjM3NDIzMTgzODA1IgyOhN6x6i5kTFgDy4Eq3AMDQ%2BaFMWnHIszZPB%2BpXoc%2BCILr2vgb%2FiW2iw%2B2%2BsKKl0vsaOkdbf%2FImfh3f7K2gn4WOiO15V9gsXmVTpvDyH7eyEYkyVxY%2Btl5w6ZbD3Xn2h43LmD5fNl8dIVOgvNL3lt4zZrFxx2%2FUJni03d9sjXm7tsplcyQsu0bLsc3f7O7Q9L8GLxj7ZVayPRZXUHcfLYlrCrlx0b8hh2qs3rmO5UFQGrCKyr7Vxq%2FHGRX3gmRIBiNkfV7JqI2gBeutsXF%2BNKBMyS5bfj211L6dnYuQ64iv%2BfOpWmWih4GUzbSchiO%2Bn6Eia5%2BBddLJVZnpKZoRFalW8FrniyjjEFwsk36%2BvL7ye6swTB3xhl6zde0xBZTjwBu%2BwcQy2kQdhmlSLwxGhx8uGNNopn16LZSP4AaMXt%2B%2Boyi6%2FBH8We1Q3t3eP0JDkrWmFI%2FsWrHZkq6UAw0XcmLAKZD%2FqRA363KdPj9%2B0hQG%2BCf8hH1%2FnF5E3wuyKy4HSmyRpaPhL7t7kPRaiGLQL%2FK3ZD12%2FjhZtw4TlLWS5BPoGuxi7uT%2FYAPGckwBAeWVKS1LqXuy9ug38HwOUVEatxAG5D0np47WTuSTz4MrEaiZgMQKHtcU6EqATSUpyc4mQQ4DmjRhHhWdKoEhDDil8%2FMBjqkAbUyjvOQWS%2BXF9CbcCgg%2Fk805j%2BCgrpGH83t1B37Qs%2BY5KhGLt%2FjRkpI5unHLvC%2BbzPiC9Gn8MOpAOkRi4yLvGt5yYj7s3FXXczhLZKRwHJqT4VufcxmzXW%2Ff4FwvtjB8vnctH%2FS2kNRTUs6NSf%2B6UHg%2FSEBMu3YU%2FhNF0jmLzHZ0i11tqSan8VHlOJkvCNkB8EubyErO3HWnwbaByJJv2GgzgNS&X-Amz-Signature=ad315aa9ad1c2f4fd5db12a2a55269ec3e94b8b35e94096b772a050097d41be6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
