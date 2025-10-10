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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD3MENTR%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDrVhRH6%2Fgj14PPdTJJjQfAOqoXqplJuw308kZ5IgpKMAiEA9BtA%2BSZ9pSOOX21VaHOp0BZRP%2B6%2FLFqjMPBpJ%2F4BXL4qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1s2MO6eUv%2F8opLGCrcAyFP1FRDpGizTifz5G7zaaU1o8NB5i40g3hADFRpfcVyMFU0oHjCN6BJoyjR1hEEkDXM%2F0WElIj5uklnnn1VVAIPXSOet1oQqBGBcY%2FYTUKWQYjnIR24fWJONCIi3Ssr5uMAcwqkd9jcTk7OayemGaMbnVgKGy4t%2BRUETpVDMz%2F171dsjjTK0Vim%2BBua%2Bw6KIp%2Fa140zN%2F689fmP1dAXWIwaqRkluoAouyFH7Id7J70KXPB4smx%2Fm0tFNdjFGMBBvtEj4QskEIMbsUm8mU6UdQPAuaCUhP92PnTzdTxpzkSaFNAXV6bp5Q6%2BDOa2IrkRtxneHmqlBhw58Ds6UBKn4hBuFov2o8r6LOIeMooH1wSFXrpcHtRMVPwGjMB9JgRwvIxNsFmBbEU0FPkbiTZQqwKqBqtuu4uhYHrlBE%2FgUGmZcfD8XN3GnpWscVQvvfmvCQEtbL5Sk4b5fkMIO8BZ1Qb1sG2qnzuPLkvng8PkOGY4Bzt5nEHyephLPlAGNSvR48wp%2BWQhLFZOvlg%2B8jHk0Kin040UxOu4h1bOvgErZA5Dm25JSA%2FkM%2BFqX6w%2BJMc3130SX9z6MCeY5KYf%2BqBVZi0LXTc2i2BsAmmoi4YXyxOihLJ32boZnQVMev14MPSooccGOqUBSeRwdaUQGtUzutGTwXaPngOyozFlxgAlOxTr4oUChc8wuxevdtn%2B5wegMQ61iIC1SghlW5fiFPjTzpydOeYzTccjme9lcYvDDZk5V7GrvTUjaPf8q5NdFtG4ZJQpUzceGcqHFPL8RiQtajsLnE5XkyIBr8aMzHGEridwp2lMb822MSdvDOJiCLKfo0mbD1ywpKPXXtZRpq3QaMgRJpuu5jx29eNA&X-Amz-Signature=732c598a6478906ad0661735db1cae1f1b97b1ec7aa36379d092e0a271415295&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD3MENTR%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDrVhRH6%2Fgj14PPdTJJjQfAOqoXqplJuw308kZ5IgpKMAiEA9BtA%2BSZ9pSOOX21VaHOp0BZRP%2B6%2FLFqjMPBpJ%2F4BXL4qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1s2MO6eUv%2F8opLGCrcAyFP1FRDpGizTifz5G7zaaU1o8NB5i40g3hADFRpfcVyMFU0oHjCN6BJoyjR1hEEkDXM%2F0WElIj5uklnnn1VVAIPXSOet1oQqBGBcY%2FYTUKWQYjnIR24fWJONCIi3Ssr5uMAcwqkd9jcTk7OayemGaMbnVgKGy4t%2BRUETpVDMz%2F171dsjjTK0Vim%2BBua%2Bw6KIp%2Fa140zN%2F689fmP1dAXWIwaqRkluoAouyFH7Id7J70KXPB4smx%2Fm0tFNdjFGMBBvtEj4QskEIMbsUm8mU6UdQPAuaCUhP92PnTzdTxpzkSaFNAXV6bp5Q6%2BDOa2IrkRtxneHmqlBhw58Ds6UBKn4hBuFov2o8r6LOIeMooH1wSFXrpcHtRMVPwGjMB9JgRwvIxNsFmBbEU0FPkbiTZQqwKqBqtuu4uhYHrlBE%2FgUGmZcfD8XN3GnpWscVQvvfmvCQEtbL5Sk4b5fkMIO8BZ1Qb1sG2qnzuPLkvng8PkOGY4Bzt5nEHyephLPlAGNSvR48wp%2BWQhLFZOvlg%2B8jHk0Kin040UxOu4h1bOvgErZA5Dm25JSA%2FkM%2BFqX6w%2BJMc3130SX9z6MCeY5KYf%2BqBVZi0LXTc2i2BsAmmoi4YXyxOihLJ32boZnQVMev14MPSooccGOqUBSeRwdaUQGtUzutGTwXaPngOyozFlxgAlOxTr4oUChc8wuxevdtn%2B5wegMQ61iIC1SghlW5fiFPjTzpydOeYzTccjme9lcYvDDZk5V7GrvTUjaPf8q5NdFtG4ZJQpUzceGcqHFPL8RiQtajsLnE5XkyIBr8aMzHGEridwp2lMb822MSdvDOJiCLKfo0mbD1ywpKPXXtZRpq3QaMgRJpuu5jx29eNA&X-Amz-Signature=480bce556504231dc218eccee39fa1f174da5bb9403d26cd66cb9c45f8557f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
