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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KD64RXO%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIASJMOHOlgwoDes4LwJvn94%2B5HdszED6wuxUu3u4WRuQAiEAr6oTnEzOPBGnoa%2FGqMzRR3nYMYWZ7kbT%2B1k6eYKCV90q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKXfF79m%2B8kh9a%2FDwSrcAxyB9rIEKWn%2B4BBSt%2BbJ7csq1wKv2oSny2ZDs%2BQVNh4dE%2FYslRohgWH4MDkAvc%2BDOPpUyj917WXSLcrNKqfZVYDGyVNeMl4tEC%2FGPxbDcHRY3qUJvtTTm1TFZmwxEujhvnxnkhCrkJFBLA2GVpbxLQndxYggyfng2InI5js1bgqbMWV4Y4iWGN9V7V6Kk7WMmil%2BOhT%2FoK9Lm%2B%2Fye9zDtbVmIGVK8ged1xr1lcfprwhZ9tcSDVoXi8E9wqqg6juWh%2BFFhsBZuVTCerc4KowO%2FdRAK9Sc6K3EQzwrtDG3j22XpKuPQa1tdk986zdhkO7oo8ifUeU6Ie%2FkrW8dNt1bBrQhB1NWFetJmmpoX9URUJc18lhw7uKLdPBmKRmne2jYYbytEWLYtbacO3ra2Zz5ycbUF6IoCptIbikeNObQQ3DtfevzQzN%2FD40zqdPNRE9VYRYPbDip6VIW%2BQiufRCZ%2B1pMuygvNf1%2By08cJubvXf2WlrYMcJeeTLC7h%2Bo2rCUGziqponLONwupJ84raBkI9g%2BVM26aD4SocPh71L1YNHq5HwSAw3OUxYO9LkgRpWNmSxmyKKol4UeHMhrj3FWkri%2FLBBT1C2WulnCWUfwZmuGWFsfZfveTkHsQODcsMLXp%2BMQGOqUBHaNCenYdbtpAaT%2B9O2AmD8v%2FxEhWoolsPnVoR%2FSDW0vFWDo7kQmWN2BRKjcaup6ZVZJIGUO%2B2Qbfd59mgvKWo%2B%2F2LAX19tomq1i%2Bvov%2B2FsW3Xdl0HkvBSCzA5vd53H4Q%2Bo9o%2B1ZsE8LT9azSvfk6EFbCy%2FBF7vKayTPcrMPi1dWENZNnXyWcRA4k46DWflXvZAlfP9JY8KpZg1WS5sy1R09B4ib&X-Amz-Signature=5224d92472a92026c62d7367b79e92f7f4d2274bd1bb171b4a6588ae8a6269d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KD64RXO%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIASJMOHOlgwoDes4LwJvn94%2B5HdszED6wuxUu3u4WRuQAiEAr6oTnEzOPBGnoa%2FGqMzRR3nYMYWZ7kbT%2B1k6eYKCV90q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKXfF79m%2B8kh9a%2FDwSrcAxyB9rIEKWn%2B4BBSt%2BbJ7csq1wKv2oSny2ZDs%2BQVNh4dE%2FYslRohgWH4MDkAvc%2BDOPpUyj917WXSLcrNKqfZVYDGyVNeMl4tEC%2FGPxbDcHRY3qUJvtTTm1TFZmwxEujhvnxnkhCrkJFBLA2GVpbxLQndxYggyfng2InI5js1bgqbMWV4Y4iWGN9V7V6Kk7WMmil%2BOhT%2FoK9Lm%2B%2Fye9zDtbVmIGVK8ged1xr1lcfprwhZ9tcSDVoXi8E9wqqg6juWh%2BFFhsBZuVTCerc4KowO%2FdRAK9Sc6K3EQzwrtDG3j22XpKuPQa1tdk986zdhkO7oo8ifUeU6Ie%2FkrW8dNt1bBrQhB1NWFetJmmpoX9URUJc18lhw7uKLdPBmKRmne2jYYbytEWLYtbacO3ra2Zz5ycbUF6IoCptIbikeNObQQ3DtfevzQzN%2FD40zqdPNRE9VYRYPbDip6VIW%2BQiufRCZ%2B1pMuygvNf1%2By08cJubvXf2WlrYMcJeeTLC7h%2Bo2rCUGziqponLONwupJ84raBkI9g%2BVM26aD4SocPh71L1YNHq5HwSAw3OUxYO9LkgRpWNmSxmyKKol4UeHMhrj3FWkri%2FLBBT1C2WulnCWUfwZmuGWFsfZfveTkHsQODcsMLXp%2BMQGOqUBHaNCenYdbtpAaT%2B9O2AmD8v%2FxEhWoolsPnVoR%2FSDW0vFWDo7kQmWN2BRKjcaup6ZVZJIGUO%2B2Qbfd59mgvKWo%2B%2F2LAX19tomq1i%2Bvov%2B2FsW3Xdl0HkvBSCzA5vd53H4Q%2Bo9o%2B1ZsE8LT9azSvfk6EFbCy%2FBF7vKayTPcrMPi1dWENZNnXyWcRA4k46DWflXvZAlfP9JY8KpZg1WS5sy1R09B4ib&X-Amz-Signature=6ec9453c821822a784fcc3a11a2fb259dda0c885027457265decd1c2f4d575ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
