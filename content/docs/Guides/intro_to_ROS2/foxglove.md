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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466463U65BC%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXwSqcaaF0SRvqlvLiftnjKbUhtVBe%2BzRrIZ42RsDMOAiA5HDl85n4aZsUQOhGYUzGd3NVnMBGqsLdoPjeophsxWSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9xj9p%2Fxf%2FXAEK9XyKtwDTW7D4yHFo5Na5WO%2BX0EKQFDNY9siyzdYkFrUUGLLkMcGJOelF2eA4wxWte7%2BcoQFCJnFQ5HWIhPZfkWGDwYZVkUR04LX3qBNV2jZzqCrUKeOQYE9F%2FPIchYFP3NplBo3zliqhVZJIB1eY8hRe0oSaoq104zrx1W3tQf9wxJBpe08KCFd8Vj%2FxRiZZ%2BVDRTPq0lLG78Wr6D7WaPZZT5VMxKK4GBv03GW56CmW4tYi%2B483v8c%2F4Ga0PMrU9%2B2oE%2BgFML4FbqHNNhceuQsGFFMO4LtebHoWBtWdBJzoUHYFkQvluDwXX1U8yEIKyffOgJVwsK2Ei756cbgLF1YR2YEdbb%2BePmyNgrk5xSvGGXspEYZbv8E%2Fw1c1qviufZCP9GPBMz2gAerNYIkpLJK6C58Rk9%2B3ypAYiR2sidgGi%2FSkvvgK6C9SGv3Lq1JlB0Rm9PKI4ge1PZEUbnZb5747zrZJHfnD%2BG%2BNRHptTlYl1bfD%2FlhV4QI0D1hyUGF9Sihd1ARzzcjj8g2pQPzFWeenogeDuPee%2F84e2ueK3F%2BY9xz2P7F8fa%2F%2FtGlMs79f1bOL0T8yTWbe20bSUiChTHO7Ds2A50uiKlydSbMFfp3nKWFSCvNc%2B5rlHh5uuA5%2Fb2Ywh9bw0gY6pgH%2FYwicV7GOn2%2BEUpePUd89okjYMYSEYErUzvPq8OFib9SXsOo9678QkP5PA22bzRYE08Zq%2FcdO%2FD3n2mDy4LAPBPyuaPjfalGSqS8tXcGNjuT%2B8RFYAQO7g4Ul6U1PqA0%2FuZC%2F%2FK3FFi%2FRSfbgCw2VzlS4lsMkxhx0%2B9%2FoVwzssAPX9Mq5kKBWwNUCGFQtg7tpwolMXTLMuzp%2BKAeshgoIByseT%2Fmx&X-Amz-Signature=fb5d8c7c652c4d34c4c0c938dede0c4ca77d1520933bdd7d7be200ea12fa657a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466463U65BC%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXwSqcaaF0SRvqlvLiftnjKbUhtVBe%2BzRrIZ42RsDMOAiA5HDl85n4aZsUQOhGYUzGd3NVnMBGqsLdoPjeophsxWSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9xj9p%2Fxf%2FXAEK9XyKtwDTW7D4yHFo5Na5WO%2BX0EKQFDNY9siyzdYkFrUUGLLkMcGJOelF2eA4wxWte7%2BcoQFCJnFQ5HWIhPZfkWGDwYZVkUR04LX3qBNV2jZzqCrUKeOQYE9F%2FPIchYFP3NplBo3zliqhVZJIB1eY8hRe0oSaoq104zrx1W3tQf9wxJBpe08KCFd8Vj%2FxRiZZ%2BVDRTPq0lLG78Wr6D7WaPZZT5VMxKK4GBv03GW56CmW4tYi%2B483v8c%2F4Ga0PMrU9%2B2oE%2BgFML4FbqHNNhceuQsGFFMO4LtebHoWBtWdBJzoUHYFkQvluDwXX1U8yEIKyffOgJVwsK2Ei756cbgLF1YR2YEdbb%2BePmyNgrk5xSvGGXspEYZbv8E%2Fw1c1qviufZCP9GPBMz2gAerNYIkpLJK6C58Rk9%2B3ypAYiR2sidgGi%2FSkvvgK6C9SGv3Lq1JlB0Rm9PKI4ge1PZEUbnZb5747zrZJHfnD%2BG%2BNRHptTlYl1bfD%2FlhV4QI0D1hyUGF9Sihd1ARzzcjj8g2pQPzFWeenogeDuPee%2F84e2ueK3F%2BY9xz2P7F8fa%2F%2FtGlMs79f1bOL0T8yTWbe20bSUiChTHO7Ds2A50uiKlydSbMFfp3nKWFSCvNc%2B5rlHh5uuA5%2Fb2Ywh9bw0gY6pgH%2FYwicV7GOn2%2BEUpePUd89okjYMYSEYErUzvPq8OFib9SXsOo9678QkP5PA22bzRYE08Zq%2FcdO%2FD3n2mDy4LAPBPyuaPjfalGSqS8tXcGNjuT%2B8RFYAQO7g4Ul6U1PqA0%2FuZC%2F%2FK3FFi%2FRSfbgCw2VzlS4lsMkxhx0%2B9%2FoVwzssAPX9Mq5kKBWwNUCGFQtg7tpwolMXTLMuzp%2BKAeshgoIByseT%2Fmx&X-Amz-Signature=6e76dd5bb2b9661bdc4341ce6ef4e16fdd855861ce464d5151f9018af18219b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
