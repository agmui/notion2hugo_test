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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VX5FGYC%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiZTeqELhq78Er9h9w22nvztyvgdAc46SkSLSfI9cqAQIhAPMB9doZ8ZRHjRM%2B7T3uYCHMWyfPC7G2JOD90WWlWcBDKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfcEglYssYMLIFiewq3AOHt2z3y1lq5zUtK869xtJ3BH60EccHz7nW3GAhVJEPLBjrUhEMtq%2FJiYkVkfcwHMXW0ATJKqkeuDP3hufBINPtXPFnKaOBj5SUB0sUiRm%2BY03fV%2B%2BOcoohNetyohUFgtBfxLCvvYBlGGbuYjG07vP3%2B7oOUr2oCtwf1VNXot5v3khtuV1iehZ1%2F1wKx3O5jpTe9KSHAuOBcRo7YtqvFRzfJtsKOOhtfttKpuaryuxCpCuYHYqX5F4OQQhuUFOX5L2LPo5iW4ZW%2FBEKLZdE%2BmdBplwwEYcxY8bPx%2BJzFO9pVnFgyEn38rbatKZjPr4KZWKsr6E2g8Rfkj60ccO980NddwRwkyGbruGfDbuSF46oz98F3ytT%2FDVr43R6NxzrIgU%2F6yz0iyDxzGWYUNSB7DpbahIh5JQMBavmRahiclRq0DCzbkGCMisJc%2BvxtFj9HnPcCHKpLuprmxuFhH%2BXI2Rqd2x4P7H9co%2BZIubh0hZMH64S7KN6EqbPYX076XNaehYNVWwq4LMvwYtwAMaCw7OUriHVFAjVDFTwmEYHn%2FCaCyO0pB1YxBcmdpy%2FOHcN9eTD2W7VdsBvFMt%2B5OIQelEsvSSGmYl7gpCCSqVMW6O1%2FhNyCgx79fwz8olv0DCN1dfGBjqkAaaVnnwT21olSgzUh9rEun%2Fj2wjOVOiS0PqS8gBVvu0ABrY50SzcXrVH%2FVq%2BebvDtBZ98B8B17YW6KJPL1kDTxiyY0HTWtCDqmlr6Vv0o%2FyZu4C%2B1u%2BHWcEBunidDkTW0IUlXPh8gflkWV0Af1dwiSjkmSScYocQq6j%2F%2FqkntEyIvTfcjJ5fwSq%2FsSzOgoz2G4pdR68cHk85m5L4WdHBfxevBB8H&X-Amz-Signature=f95b4ae9161bf8c734913298cf6944283c973db1ea9700c25dbae1bd66912494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VX5FGYC%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiZTeqELhq78Er9h9w22nvztyvgdAc46SkSLSfI9cqAQIhAPMB9doZ8ZRHjRM%2B7T3uYCHMWyfPC7G2JOD90WWlWcBDKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfcEglYssYMLIFiewq3AOHt2z3y1lq5zUtK869xtJ3BH60EccHz7nW3GAhVJEPLBjrUhEMtq%2FJiYkVkfcwHMXW0ATJKqkeuDP3hufBINPtXPFnKaOBj5SUB0sUiRm%2BY03fV%2B%2BOcoohNetyohUFgtBfxLCvvYBlGGbuYjG07vP3%2B7oOUr2oCtwf1VNXot5v3khtuV1iehZ1%2F1wKx3O5jpTe9KSHAuOBcRo7YtqvFRzfJtsKOOhtfttKpuaryuxCpCuYHYqX5F4OQQhuUFOX5L2LPo5iW4ZW%2FBEKLZdE%2BmdBplwwEYcxY8bPx%2BJzFO9pVnFgyEn38rbatKZjPr4KZWKsr6E2g8Rfkj60ccO980NddwRwkyGbruGfDbuSF46oz98F3ytT%2FDVr43R6NxzrIgU%2F6yz0iyDxzGWYUNSB7DpbahIh5JQMBavmRahiclRq0DCzbkGCMisJc%2BvxtFj9HnPcCHKpLuprmxuFhH%2BXI2Rqd2x4P7H9co%2BZIubh0hZMH64S7KN6EqbPYX076XNaehYNVWwq4LMvwYtwAMaCw7OUriHVFAjVDFTwmEYHn%2FCaCyO0pB1YxBcmdpy%2FOHcN9eTD2W7VdsBvFMt%2B5OIQelEsvSSGmYl7gpCCSqVMW6O1%2FhNyCgx79fwz8olv0DCN1dfGBjqkAaaVnnwT21olSgzUh9rEun%2Fj2wjOVOiS0PqS8gBVvu0ABrY50SzcXrVH%2FVq%2BebvDtBZ98B8B17YW6KJPL1kDTxiyY0HTWtCDqmlr6Vv0o%2FyZu4C%2B1u%2BHWcEBunidDkTW0IUlXPh8gflkWV0Af1dwiSjkmSScYocQq6j%2F%2FqkntEyIvTfcjJ5fwSq%2FsSzOgoz2G4pdR68cHk85m5L4WdHBfxevBB8H&X-Amz-Signature=58ee1f7fb67c7f2e0692ff709d53baf43fce0e4671750e4eaf31efb0dd7bd74b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
