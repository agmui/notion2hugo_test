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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQMGLEDS%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDynKJnWE%2B6KsUEX9pWoOFEh%2BBBWcw%2FrQKpRyknhjVj4gIgFkxrctIJq7FfKSc0EdyDKUqDDk4k%2FKoXM1Xcm3f8joAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMNJr1epTtvVsDTdyrcA%2FPxx6bpMG09S52LPxNGjbsoJ%2BSzz7jRqimCeXpHnCGEnUEaV%2FEBj%2B%2FNH7YLfhH2kP6%2FgZnWSxXnu%2BuDbxByUNtT1LJicEA%2BkhTyefp1rZFbrpm70LWXz1XWIz27VK08QW8YvpP8XXrLcJXYwCK0q4mN0S4damoLfAT97glTPuC3%2FXhJd69dMRZ7Jbyhd%2Bf5vqs6%2BHuPKId7aGq%2FLJb9Th%2BMuNvm12qoyU9HHiLr0uVodQJrtzdC38zY79VbwUz9cYwVMWdTO9ssOfPd%2B%2BwEZmibd4%2F9kUNzdZEKm12PbBersUhc8mnE9nqhdokannw2pwJHXWBSxJvGeYyZ%2FzGjglf7fhfPfABgElVItUtDbngXyLm1WvOpxYIvl7p%2BF3Kyl693jWCDEawav2NYs0T%2FbyhHLPknyP21TxD9oY0zOKZAgZiLHezpkCfaYw%2B6mVAma9chrG5KzeHyfilPgD4ClWhqJtjbI1Z5WK4Dubv8%2BnYDDnSXr4RTtdfMkCmMtXmJKXj5MnbX%2FGe%2FzmGCmkLyxh0jEw%2FCq29PVQ%2FwJQL1QyFHIaLoreDpgtGS%2FftH4HtqTiSMsvbyH9YLB2NgaacNTzWENeS010qWzTrXFND3sDSAh6i%2FECvmF1Oqzvl9MI72isgGOqUBpZZGM4L5%2BliGzf22jd0b0JFJTYJVHTPpfEAq9lEsI16rdsfrO4qRLuuYTEpegHeGao6CRpXbkqeW2ptUEpcVClMO8dHPoIvpa%2F8qby%2FR3RZGAmXtUC8v1E3fzackLZGDkRp8Dq9W0dzQ%2BUCqe3kdq7OFubQz8NvMe4Det5PhwwAb6kIKzfUmX5MOVKVaDqk4b5zhIaxnhmnQTFIFE5K5%2FRpdAS93&X-Amz-Signature=a7683346721478d9a6c489f6060ec2e5fcaa55f15c4d5f9c5a5c99a458bd97fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQMGLEDS%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDynKJnWE%2B6KsUEX9pWoOFEh%2BBBWcw%2FrQKpRyknhjVj4gIgFkxrctIJq7FfKSc0EdyDKUqDDk4k%2FKoXM1Xcm3f8joAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMNJr1epTtvVsDTdyrcA%2FPxx6bpMG09S52LPxNGjbsoJ%2BSzz7jRqimCeXpHnCGEnUEaV%2FEBj%2B%2FNH7YLfhH2kP6%2FgZnWSxXnu%2BuDbxByUNtT1LJicEA%2BkhTyefp1rZFbrpm70LWXz1XWIz27VK08QW8YvpP8XXrLcJXYwCK0q4mN0S4damoLfAT97glTPuC3%2FXhJd69dMRZ7Jbyhd%2Bf5vqs6%2BHuPKId7aGq%2FLJb9Th%2BMuNvm12qoyU9HHiLr0uVodQJrtzdC38zY79VbwUz9cYwVMWdTO9ssOfPd%2B%2BwEZmibd4%2F9kUNzdZEKm12PbBersUhc8mnE9nqhdokannw2pwJHXWBSxJvGeYyZ%2FzGjglf7fhfPfABgElVItUtDbngXyLm1WvOpxYIvl7p%2BF3Kyl693jWCDEawav2NYs0T%2FbyhHLPknyP21TxD9oY0zOKZAgZiLHezpkCfaYw%2B6mVAma9chrG5KzeHyfilPgD4ClWhqJtjbI1Z5WK4Dubv8%2BnYDDnSXr4RTtdfMkCmMtXmJKXj5MnbX%2FGe%2FzmGCmkLyxh0jEw%2FCq29PVQ%2FwJQL1QyFHIaLoreDpgtGS%2FftH4HtqTiSMsvbyH9YLB2NgaacNTzWENeS010qWzTrXFND3sDSAh6i%2FECvmF1Oqzvl9MI72isgGOqUBpZZGM4L5%2BliGzf22jd0b0JFJTYJVHTPpfEAq9lEsI16rdsfrO4qRLuuYTEpegHeGao6CRpXbkqeW2ptUEpcVClMO8dHPoIvpa%2F8qby%2FR3RZGAmXtUC8v1E3fzackLZGDkRp8Dq9W0dzQ%2BUCqe3kdq7OFubQz8NvMe4Det5PhwwAb6kIKzfUmX5MOVKVaDqk4b5zhIaxnhmnQTFIFE5K5%2FRpdAS93&X-Amz-Signature=223df749484bcbd0667bb119602a37284a92208f2f729ab9c708aa099affd678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
