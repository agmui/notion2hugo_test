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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXVAA7N6%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFlOVh919eh6HhwN3oy8p0%2FXYwPnIEq3PLmOb6ho6TDAiB0%2FYY7F5HfqJKyrTSaOG0s59lRG7HEs1z7G%2FC%2FfTv%2FCir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIModLOaqGUJSz02lHdKtwDfWspnN9cXJHSbYxEvpCMRmtzORGgydWPdsknVaDRD5XUg9cE7%2BLmQE7I0qsJblaxmScgN%2BHzUAY9jcVS0MnUe3v9YYm5YuKvhNiuvl8rZhF0HQmfG5qsTkGwjY2BeZlYFlH%2BizySWr9K0YiBGJW15qPi7YNlB2NO1bfDIjX8Qh00P%2Fx%2BOaV25W650SON%2FeiMREimw%2BkRBj7ThcrGpRMd%2FMkdmnm1inOTRVawzZytSIR377TD5qrc83HfJZ3tR7%2FH%2Bmf0Hw1yba8xeBjSZiJQUfCMTxOBde04DG0Xh5fGZobew%2BQCappkRgp2Xk2NFvp8eH7g%2BI%2Be5daGillV60V%2FMou5DNd4nSUAVFyOY%2BHJfgvcqyB3lMpEGel4jbZKQgk46r%2BuvIm1VOIgQRNfSBYLgMGn7oEwO5oaE3jLwBnD9K3mpQkzWYHf3M%2BiU71EzhHGCAAY6S0ZACdlhaCyyjsKUr4kG72WVaheqOsYvpuvNAstuXiCRKGTG2YE6fNbj4mRU4o%2FmQdUQNvxCa24Pl8%2FqkvxyPIVbmnRZLcZhhFgxxeNQ8N1rjOV6Y145BmktzGsAKud60%2Bc7qQ3UyBDR%2FRVeN48bmy9xUfkJwi15XCxtVsES7jw54UcfwZF%2FaEw%2B%2BzBygY6pgGX2%2B8Q5OnAVfaHcxqa4ErM%2B9eFddENzEQDuNgNygh73OItUnzHNHEZgFSyDYOce4lTn1q%2BrGItBAt2UdsjP9dlEh0mXgDoSXDpCqszMfFexhTiFNAycNRRdna8oB5TbXr9m57Sp9B3%2F9h2%2Bom8lbzRONVRpOCHbbHQ%2FG00WuNJfspued4XoUkiFg8%2BwNXhbAufJWWs9IyN8ZokDv%2BD5%2BHPuYKl%2BxUN&X-Amz-Signature=8978e3bc194d15c8eae8a49b16ae22a3567bf4c49149287c3f5dcace70ad15e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXVAA7N6%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFlOVh919eh6HhwN3oy8p0%2FXYwPnIEq3PLmOb6ho6TDAiB0%2FYY7F5HfqJKyrTSaOG0s59lRG7HEs1z7G%2FC%2FfTv%2FCir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIModLOaqGUJSz02lHdKtwDfWspnN9cXJHSbYxEvpCMRmtzORGgydWPdsknVaDRD5XUg9cE7%2BLmQE7I0qsJblaxmScgN%2BHzUAY9jcVS0MnUe3v9YYm5YuKvhNiuvl8rZhF0HQmfG5qsTkGwjY2BeZlYFlH%2BizySWr9K0YiBGJW15qPi7YNlB2NO1bfDIjX8Qh00P%2Fx%2BOaV25W650SON%2FeiMREimw%2BkRBj7ThcrGpRMd%2FMkdmnm1inOTRVawzZytSIR377TD5qrc83HfJZ3tR7%2FH%2Bmf0Hw1yba8xeBjSZiJQUfCMTxOBde04DG0Xh5fGZobew%2BQCappkRgp2Xk2NFvp8eH7g%2BI%2Be5daGillV60V%2FMou5DNd4nSUAVFyOY%2BHJfgvcqyB3lMpEGel4jbZKQgk46r%2BuvIm1VOIgQRNfSBYLgMGn7oEwO5oaE3jLwBnD9K3mpQkzWYHf3M%2BiU71EzhHGCAAY6S0ZACdlhaCyyjsKUr4kG72WVaheqOsYvpuvNAstuXiCRKGTG2YE6fNbj4mRU4o%2FmQdUQNvxCa24Pl8%2FqkvxyPIVbmnRZLcZhhFgxxeNQ8N1rjOV6Y145BmktzGsAKud60%2Bc7qQ3UyBDR%2FRVeN48bmy9xUfkJwi15XCxtVsES7jw54UcfwZF%2FaEw%2B%2BzBygY6pgGX2%2B8Q5OnAVfaHcxqa4ErM%2B9eFddENzEQDuNgNygh73OItUnzHNHEZgFSyDYOce4lTn1q%2BrGItBAt2UdsjP9dlEh0mXgDoSXDpCqszMfFexhTiFNAycNRRdna8oB5TbXr9m57Sp9B3%2F9h2%2Bom8lbzRONVRpOCHbbHQ%2FG00WuNJfspued4XoUkiFg8%2BwNXhbAufJWWs9IyN8ZokDv%2BD5%2BHPuYKl%2BxUN&X-Amz-Signature=3ba09187862ac38324e988645d93b79c954251c3c46928a5c1a71516562ec5c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
