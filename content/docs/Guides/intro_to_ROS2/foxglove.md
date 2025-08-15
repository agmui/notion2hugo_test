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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IXVCI4E%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBsC1IdmGNK31JjLpXYYitq3mST0LTJ%2F%2BnS6gyKytfMpAiEA%2Bsvd5XR5k28lrpdvErfSErn2KrMmcCt%2B%2Fga75kYqCY0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOrJI7jkXFrenXMW1CrcA4mKqoB7fAzSwZUDVQt7BVqHHJKHi7Q5WKWj1Z3QISKu6j53dYllCU5D1bwHBWhHEEhbfZZG6l3ZCwd8AIGQf4Zy0ZoScLOVipD3bED6dHWAtMPQgr3VzISLk4cw7%2FXhAs5uIv6fumMjsV8FmyAE8jvaL68hlT2%2B1FleI6ZgWXWOAVMVIh8BB2U8OIIhWIaxMUcw9yumfl%2FM6EeKQMjx0Tw11ADaEkv9Van9fWQgzCh5xWJeNr3vp8WFA5PIUrs7kOqNKFv7ruruS%2BGrDUoQV1KSSxYcRHkn%2FMUmtJqM8QdvmL3um0Ydy1R5fQbWuu6JX4JeSt2%2FHaJX0mqAKfq1nZQS6TLPu2posfmfcECDru%2FKsllKAZc08OKcLwNl2lmmeKfLuDh7ahjz0JkOrEGGN2awomyTiZkonETXEWsTE3MJkj%2BPG62Fp0Tg7n%2BN9Db8iG2E1cW1YjnhjJbmssP2h5tehpkPOtxWA4dpyyQwVZWXpCwkAi3e9kbhyRIecGLC04ciQ2NRFS87UtKB%2B7cZVtNH6C4MTbavOeZGbe%2B%2FyNBZSS%2FLZHyyQVP%2FHiV%2F9l%2BSsJlgX6vMZR42jBGoJtEDmnrbI%2B1QAky8T91Z63mRLd7DgIbdaLnkHyONNtqkMKCj%2BsQGOqUB%2BaaDMvrkGGTpz2pooDlJrjcwweNJsNk9zILG%2Fkr%2FYP0BGTuVeWqzZF6D6Iv%2F1sLhDkqF6AKzGkquUZRj6c72LGAU6Z56Uxi91nc%2FWh55KFCBmaigyW%2BtaNpW84LZXyRkD5yKEYRJQ7qsmpe75m3c2nFKnEpiV7sXD2puoN%2BJoAr6JHa1dCh%2FsKhdXLB83bsYCdmMI7mn1IAUbsAJx9eFmTFAeJwv&X-Amz-Signature=76d9f53772489ed4c73728bfc7462a84e6ab1fb1357c72749847c6827d057ff5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IXVCI4E%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBsC1IdmGNK31JjLpXYYitq3mST0LTJ%2F%2BnS6gyKytfMpAiEA%2Bsvd5XR5k28lrpdvErfSErn2KrMmcCt%2B%2Fga75kYqCY0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOrJI7jkXFrenXMW1CrcA4mKqoB7fAzSwZUDVQt7BVqHHJKHi7Q5WKWj1Z3QISKu6j53dYllCU5D1bwHBWhHEEhbfZZG6l3ZCwd8AIGQf4Zy0ZoScLOVipD3bED6dHWAtMPQgr3VzISLk4cw7%2FXhAs5uIv6fumMjsV8FmyAE8jvaL68hlT2%2B1FleI6ZgWXWOAVMVIh8BB2U8OIIhWIaxMUcw9yumfl%2FM6EeKQMjx0Tw11ADaEkv9Van9fWQgzCh5xWJeNr3vp8WFA5PIUrs7kOqNKFv7ruruS%2BGrDUoQV1KSSxYcRHkn%2FMUmtJqM8QdvmL3um0Ydy1R5fQbWuu6JX4JeSt2%2FHaJX0mqAKfq1nZQS6TLPu2posfmfcECDru%2FKsllKAZc08OKcLwNl2lmmeKfLuDh7ahjz0JkOrEGGN2awomyTiZkonETXEWsTE3MJkj%2BPG62Fp0Tg7n%2BN9Db8iG2E1cW1YjnhjJbmssP2h5tehpkPOtxWA4dpyyQwVZWXpCwkAi3e9kbhyRIecGLC04ciQ2NRFS87UtKB%2B7cZVtNH6C4MTbavOeZGbe%2B%2FyNBZSS%2FLZHyyQVP%2FHiV%2F9l%2BSsJlgX6vMZR42jBGoJtEDmnrbI%2B1QAky8T91Z63mRLd7DgIbdaLnkHyONNtqkMKCj%2BsQGOqUB%2BaaDMvrkGGTpz2pooDlJrjcwweNJsNk9zILG%2Fkr%2FYP0BGTuVeWqzZF6D6Iv%2F1sLhDkqF6AKzGkquUZRj6c72LGAU6Z56Uxi91nc%2FWh55KFCBmaigyW%2BtaNpW84LZXyRkD5yKEYRJQ7qsmpe75m3c2nFKnEpiV7sXD2puoN%2BJoAr6JHa1dCh%2FsKhdXLB83bsYCdmMI7mn1IAUbsAJx9eFmTFAeJwv&X-Amz-Signature=de95e1420dbf1365319cb5c35f6805d44d5110f3cf969de0073d70020ec0dba2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
