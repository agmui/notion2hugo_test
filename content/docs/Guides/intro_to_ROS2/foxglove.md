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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDG3YTYR%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIEE5IOo%2B0ZPiJQkn4Av%2BCH3Zig80j8g5FRIsV%2BSVJvLhAiBzi2mFDFDDxaFxIaepoXyKoRlzSISzCwDKC2bM%2F3CEVyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZAKMzFBN2zs3bZ5uKtwDdcfKJnBsLgmnBqiVBSOXkQVNzNdgGlL2zfrP9mVHdMXcwQSnuWhlOIMWAJN4cepNclVzxZ6GmJBF9PLDVfiR1LnfB%2B7wJzaY5UrHoLMfF%2BXaFpF7L0AkAx2iE%2FgyOwnMEbEf7DlIKQ3mn%2FFjV9ydKde6JsedyJ2QHglWx4CxfssinY2KEq5YmsZ%2Bz0HG6wK%2BLjj6DkFJ5%2BqF%2BwU5GoiDM5C4w%2B08jI5lMF8tVofBzebXjHhDfq1Q1AqzJSFqRZlD%2BXr89sKEl62VyLc3n%2Bh10cNpgM2NiJydy1YNvAYXwf2xExNAdWjQXvvBsu%2FcZdMRhtfsCzMTtmBM6E%2FBZy%2FLFQkAUCZQ5jQXe3U2b59uoUkXCKo9Uw6EJv4hYZjhItbwAJus04Nwy8SyxGJ6z%2FQV3Gmk9K3Tz0RVWiO4rzDf%2FOGr%2FQYMzdrXXJRrWziozI55hBcGtwCzpKoSbjLO0aWC8mR4ccjUB%2FI4toOpQdveMm3pcUMQ35PWnjq%2Fx8fTBJT7qya6ZDXCVi5WPlKrO2JJRC0fG9Tp%2B6rLAyaq6buFwDPt8tNG8ymoRtoIKPpSQ9SbEtRrUKJFqlkMkzfXLrq37JJks3h8Zqo8yOS603s88ES%2BuEl5ULSBTW%2FBeIcwtdjFywY6pgHsdAFVLZp%2BTxsW3EIbuKrFU342j8OUglc1AY3J3EsBv%2BkTI2hU8dVwFIGQZM%2BCftlkeSzVx5IFCx3kZ9DHEn5aSNzltC%2BZGC90zSf3bSnraNbkpCwzo8wHeZFsHJ9ifeMaMjLh9T0P27U2qU7cxelfCGB4ootvOhxeupnpnJY4Izakg5WhNWT0WZkwGJGZ72WsY3J2PWAk57XK5DodK%2FdGA9QHDfs%2F&X-Amz-Signature=78a184ef6df2a76b3df3b31b994f6a074a88b41a2d43d7aa4d7c1b66bc8af272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDG3YTYR%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIEE5IOo%2B0ZPiJQkn4Av%2BCH3Zig80j8g5FRIsV%2BSVJvLhAiBzi2mFDFDDxaFxIaepoXyKoRlzSISzCwDKC2bM%2F3CEVyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZAKMzFBN2zs3bZ5uKtwDdcfKJnBsLgmnBqiVBSOXkQVNzNdgGlL2zfrP9mVHdMXcwQSnuWhlOIMWAJN4cepNclVzxZ6GmJBF9PLDVfiR1LnfB%2B7wJzaY5UrHoLMfF%2BXaFpF7L0AkAx2iE%2FgyOwnMEbEf7DlIKQ3mn%2FFjV9ydKde6JsedyJ2QHglWx4CxfssinY2KEq5YmsZ%2Bz0HG6wK%2BLjj6DkFJ5%2BqF%2BwU5GoiDM5C4w%2B08jI5lMF8tVofBzebXjHhDfq1Q1AqzJSFqRZlD%2BXr89sKEl62VyLc3n%2Bh10cNpgM2NiJydy1YNvAYXwf2xExNAdWjQXvvBsu%2FcZdMRhtfsCzMTtmBM6E%2FBZy%2FLFQkAUCZQ5jQXe3U2b59uoUkXCKo9Uw6EJv4hYZjhItbwAJus04Nwy8SyxGJ6z%2FQV3Gmk9K3Tz0RVWiO4rzDf%2FOGr%2FQYMzdrXXJRrWziozI55hBcGtwCzpKoSbjLO0aWC8mR4ccjUB%2FI4toOpQdveMm3pcUMQ35PWnjq%2Fx8fTBJT7qya6ZDXCVi5WPlKrO2JJRC0fG9Tp%2B6rLAyaq6buFwDPt8tNG8ymoRtoIKPpSQ9SbEtRrUKJFqlkMkzfXLrq37JJks3h8Zqo8yOS603s88ES%2BuEl5ULSBTW%2FBeIcwtdjFywY6pgHsdAFVLZp%2BTxsW3EIbuKrFU342j8OUglc1AY3J3EsBv%2BkTI2hU8dVwFIGQZM%2BCftlkeSzVx5IFCx3kZ9DHEn5aSNzltC%2BZGC90zSf3bSnraNbkpCwzo8wHeZFsHJ9ifeMaMjLh9T0P27U2qU7cxelfCGB4ootvOhxeupnpnJY4Izakg5WhNWT0WZkwGJGZ72WsY3J2PWAk57XK5DodK%2FdGA9QHDfs%2F&X-Amz-Signature=3c3f1f692b307fb5960773ed653d367ffd04df6af15c4c75d42353dd97077022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
