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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7IFAK7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGgI3Uw5UTr0yyI12pJWwcEn9Nal9a6RI1Nq8WX0RMzAiB9oHF9%2FcbxwzDLY76BEVWuD4md08w%2FgAfzqdaE6lJ0Yyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM4nbQ5CXYekIMkN%2BdKtwDKzOLMJT7Fvd9ZBhXSgs4sh%2BASU8OFj52EjarogEGiC3%2BhLBCiOhxfPgnSRy9o1FnOhpl8OQ%2FHJTF4Ep3XaN7BgxTRoD0FOHeUEmm%2BYXE%2F8rzkmTei5ZE2ZhgJPtMZ3JCHK1m24X74f%2F17lFDmwsqIqZ3lOSDlD8XeHvWbpgoV8cNsaBelqSZLfvu53bk6ZKET40V4BZqOoz4nhZdOwlf2U2ddVsr8PHbgPLLMKoAQQAfiUUDo1NyBaOlosp1xCX7f3c%2FG%2BrWFWfeKn2pU4Jk8FI2urFqP0hdzYlI5b%2B9Y288REvqc2xX1aONvSYv4FAsBtbrshDKh%2FLESCdbbG4t0CpIHfcQOTdJacbv4Jv9rkAy0u%2Fuweq%2BtsoTMwPW9ctTnz%2BEA5SM7OmWLk8yjmcV6FDDLZN1icb%2BrDIevuX4l50SiFlleEE48iENYGpNvdtBybCBCdWSKYYdL9ecSDulmPPEYQZgJdwstmYLQ6r90yNSKLlH2rSAsz7mHvigJsCVaRDHkWQhD1%2FyeilwoLnuA%2FR5uthr1KpWlp6SX2yrvJI2CXVP1pS1CMMY1XGF0gmcUatLt5NntDXDjXv1k%2FDxaiMSfn6dmu20VIgCTnVAUCXQ9E7mp3KNJ7Fkm6UwkqDzxAY6pgG8KFrkPGt6VIURo0cAEOnbxf%2F%2BtNXaC%2FzufZhGniGyHDRgK6Hu29kW10JTpw8fvYXl3fK%2BIZQ3M%2FsCcdA4DRocFacZAxkQhsXdyCD8MXgTm4VtANTFQhNOJeSUdCv3ZWBAQnmCgu%2FoAWFqtgj0spwJNey3q3%2F%2BabqxrNcTb0R9E%2BP34X%2BTjF28t2v7ifEgG53LVbLAwPmE28Iy%2FllnMqW0zvMxcG5V&X-Amz-Signature=99855f16f563e32fefacad547864cf9d37d5f75ae4a9387e70be7ce900e48730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7IFAK7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGgI3Uw5UTr0yyI12pJWwcEn9Nal9a6RI1Nq8WX0RMzAiB9oHF9%2FcbxwzDLY76BEVWuD4md08w%2FgAfzqdaE6lJ0Yyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM4nbQ5CXYekIMkN%2BdKtwDKzOLMJT7Fvd9ZBhXSgs4sh%2BASU8OFj52EjarogEGiC3%2BhLBCiOhxfPgnSRy9o1FnOhpl8OQ%2FHJTF4Ep3XaN7BgxTRoD0FOHeUEmm%2BYXE%2F8rzkmTei5ZE2ZhgJPtMZ3JCHK1m24X74f%2F17lFDmwsqIqZ3lOSDlD8XeHvWbpgoV8cNsaBelqSZLfvu53bk6ZKET40V4BZqOoz4nhZdOwlf2U2ddVsr8PHbgPLLMKoAQQAfiUUDo1NyBaOlosp1xCX7f3c%2FG%2BrWFWfeKn2pU4Jk8FI2urFqP0hdzYlI5b%2B9Y288REvqc2xX1aONvSYv4FAsBtbrshDKh%2FLESCdbbG4t0CpIHfcQOTdJacbv4Jv9rkAy0u%2Fuweq%2BtsoTMwPW9ctTnz%2BEA5SM7OmWLk8yjmcV6FDDLZN1icb%2BrDIevuX4l50SiFlleEE48iENYGpNvdtBybCBCdWSKYYdL9ecSDulmPPEYQZgJdwstmYLQ6r90yNSKLlH2rSAsz7mHvigJsCVaRDHkWQhD1%2FyeilwoLnuA%2FR5uthr1KpWlp6SX2yrvJI2CXVP1pS1CMMY1XGF0gmcUatLt5NntDXDjXv1k%2FDxaiMSfn6dmu20VIgCTnVAUCXQ9E7mp3KNJ7Fkm6UwkqDzxAY6pgG8KFrkPGt6VIURo0cAEOnbxf%2F%2BtNXaC%2FzufZhGniGyHDRgK6Hu29kW10JTpw8fvYXl3fK%2BIZQ3M%2FsCcdA4DRocFacZAxkQhsXdyCD8MXgTm4VtANTFQhNOJeSUdCv3ZWBAQnmCgu%2FoAWFqtgj0spwJNey3q3%2F%2BabqxrNcTb0R9E%2BP34X%2BTjF28t2v7ifEgG53LVbLAwPmE28Iy%2FllnMqW0zvMxcG5V&X-Amz-Signature=7254d9393e38b12f93c5f5ba4e0ff05c0c5cb5f8b7119e476d156f3a163e402f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
