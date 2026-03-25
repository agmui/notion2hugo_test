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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5MIZJUY%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ1aseIyMSdQDiXMHMHPcHPkaNjYCj2cz0NotWoJZgigIhAKGX%2BCxVMyNiXGhZdDb5CeAVpzV3YJ2CYPzNiUZkgAeFKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznBs%2FUOJYjF4BeJekq3AP7f227yb96g%2BJczTWYmGCRDijLe821WEPb%2FT8sJ7C6AzcwkAaKJrXWxnPTeofO8ejv%2BbjPt9ddBgIogCbLAC13cjMcsCJj3VUPqWr61Qr28tgDZHXPdCHxPhKmYvWkQoLC2XbjLrk2g%2BVwsir8hH05rvTgU11yTX203C0YMQLcw453jFGc5DcaSN7u2uST9SPUlhNGdMqHybE8aRrsX1fzglWY9bqngTWu5QqcDQutZHCLmG4M%2FKz2R5v8z1%2BzgMuB8F%2F3kozMG6EZpUWtD%2Bf84nyvyxEpFN1437GvXJvziZpri34QcVTA0HSEJFhvARy6x%2Bpdg3jUIz5SDMwh3KvgoOqlgmuDPdSBbsD3U1b%2BRXh6sSBVSru8Nij3FIZyPrxtaF2kKn%2FBfbbcGmJTmUOxbFhmuo%2FmDDHYSw6ElGL3J0Ml6m7LuLOoNY6pnrg3FLuyFlStjOiJPwWq3L3WraQOw6JWQ8AIB44JnIO3GTkLgmbPOq07HAmCiHpW7QQBxnB7cu64Sb4MnktDW%2FpEE68VZw3znsJhz6Gxylun3qvUD%2FRCi8c09tjyTlOlVd8thwJumjIjH9MS%2FrZym1cMAtRb6GtCWw45BXj9K9bbldtM4PMPll7p%2FWuenRuVNjC19IzOBjqkAbpLDSTBqgXmqdkJaytiObXFq5P78SqVe5z2ZJaRJpmp%2B7s6bG8P4A08fZrQ6ZIqTUMhpG5PwMZLKr3SiDNUSwiiC1xJw0SyAUEKgP%2BPoS4%2F4pABgUgtWUIjm8MWJkAZov4N%2B6%2FMVflJQQdzl9AMLgAQuHYCbtbvUsolEcSU73Hy7CRNvD4XCMv%2FTl9WNZs6V8qwY5BCXlf8RoBOZTzKFHVU1um4&X-Amz-Signature=8256c699b86b2661583da6530c05d268cacdef44767f56d4689389cfa25fa7f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5MIZJUY%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ1aseIyMSdQDiXMHMHPcHPkaNjYCj2cz0NotWoJZgigIhAKGX%2BCxVMyNiXGhZdDb5CeAVpzV3YJ2CYPzNiUZkgAeFKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznBs%2FUOJYjF4BeJekq3AP7f227yb96g%2BJczTWYmGCRDijLe821WEPb%2FT8sJ7C6AzcwkAaKJrXWxnPTeofO8ejv%2BbjPt9ddBgIogCbLAC13cjMcsCJj3VUPqWr61Qr28tgDZHXPdCHxPhKmYvWkQoLC2XbjLrk2g%2BVwsir8hH05rvTgU11yTX203C0YMQLcw453jFGc5DcaSN7u2uST9SPUlhNGdMqHybE8aRrsX1fzglWY9bqngTWu5QqcDQutZHCLmG4M%2FKz2R5v8z1%2BzgMuB8F%2F3kozMG6EZpUWtD%2Bf84nyvyxEpFN1437GvXJvziZpri34QcVTA0HSEJFhvARy6x%2Bpdg3jUIz5SDMwh3KvgoOqlgmuDPdSBbsD3U1b%2BRXh6sSBVSru8Nij3FIZyPrxtaF2kKn%2FBfbbcGmJTmUOxbFhmuo%2FmDDHYSw6ElGL3J0Ml6m7LuLOoNY6pnrg3FLuyFlStjOiJPwWq3L3WraQOw6JWQ8AIB44JnIO3GTkLgmbPOq07HAmCiHpW7QQBxnB7cu64Sb4MnktDW%2FpEE68VZw3znsJhz6Gxylun3qvUD%2FRCi8c09tjyTlOlVd8thwJumjIjH9MS%2FrZym1cMAtRb6GtCWw45BXj9K9bbldtM4PMPll7p%2FWuenRuVNjC19IzOBjqkAbpLDSTBqgXmqdkJaytiObXFq5P78SqVe5z2ZJaRJpmp%2B7s6bG8P4A08fZrQ6ZIqTUMhpG5PwMZLKr3SiDNUSwiiC1xJw0SyAUEKgP%2BPoS4%2F4pABgUgtWUIjm8MWJkAZov4N%2B6%2FMVflJQQdzl9AMLgAQuHYCbtbvUsolEcSU73Hy7CRNvD4XCMv%2FTl9WNZs6V8qwY5BCXlf8RoBOZTzKFHVU1um4&X-Amz-Signature=4040eae6afc12b68a0be7165306d49fbf0ae63215cf7b6a381689675c1f8e2d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
