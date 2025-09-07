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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMDAUNK3%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDO12k6FRzfWRKm9zIhGgz7CG9Q7lhug9N1jqfwFIquegIhAOfB5%2FBvsQb9caSKGLRa1yMYVEQtqpBKrxAqFEWXqv2YKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylaxW8OQsmAJPN2awq3AM%2FFIfINvkAb4WkRZG%2F6CfsH0KJJFkBruI9HSFluP8ugcz%2BgH3JgyWyoYlHWu%2Bey45eTgPdyeRg32u88Zav%2FkjnOBZXSG4YqSP%2B%2BTd0N85aaVhYcE9Lk5mOeG93z5Xr4TeeecE5XAnZkwde97%2F1naPDKKROHAXGcpMHzsP26bgCxsN1y94iKMPlXGXh6XceFEkWggY3ROPGLA3Sujca69pAYS45p7YGJT2%2FnAQkunx2ISznk5COSXZkBETdktVcrCOevS9a7G5Tjc1j4%2BOkrduMwSBBXjEmFK76k8TCOdo6LSaOkRNM%2BPFTvJKY9D0LoVH2M5hRsDbYYye5EHWF8vKzFZLupTdkNQShAKvxrMmEJ4Yk1Cx9oIux1qinbkrca53gPve2thQnHhdVis6fWvZceWHIJ9PjSvPFwLNgeUoI%2F1FhjO2ADWbhC7fYAVrs9GNLFbJAxC8GEGRAD9WE6xlfwXsouvV1PeaEjgJnpvGFKBHSUZXjasINq6kzdANMXdiB37aTSNFsMUBR4X68dnJ3wb0zoQ%2FWcfihvjJRR8UeBGHIEYa3yZAcX6nlY3LyH1j7c%2FhupNhhmdvHToGM73%2BCSc%2FE0vZ6kAaOwVl61gkCAHu0FnI5OTXHE0qU8DDzw%2FLFBjqkAcdvyYCo6kj7uEEIpymcKIWWUlQjeQQUc%2BUMvvckLe%2BJIMhkwLuE5KLAMCsBOFpV%2BOhTC1R2u7VzJW%2Bmwobg1biQZB0BeATNdu%2F6IJV2oE4NnKgABN7jqh5b1VG%2FdNLj%2BcEc5%2FqZD1%2BxgfiEU6mz1mL9K5J306DFvfmgEL0RqViUGEbXdbhOQZyFl6WoYSU5DpMWZSje8pf20NNWRwYFYvnBsBzu&X-Amz-Signature=369c3e5b846db77e92741a92f046d3b823acfa6e882187a9afd66ecef493078f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMDAUNK3%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDO12k6FRzfWRKm9zIhGgz7CG9Q7lhug9N1jqfwFIquegIhAOfB5%2FBvsQb9caSKGLRa1yMYVEQtqpBKrxAqFEWXqv2YKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylaxW8OQsmAJPN2awq3AM%2FFIfINvkAb4WkRZG%2F6CfsH0KJJFkBruI9HSFluP8ugcz%2BgH3JgyWyoYlHWu%2Bey45eTgPdyeRg32u88Zav%2FkjnOBZXSG4YqSP%2B%2BTd0N85aaVhYcE9Lk5mOeG93z5Xr4TeeecE5XAnZkwde97%2F1naPDKKROHAXGcpMHzsP26bgCxsN1y94iKMPlXGXh6XceFEkWggY3ROPGLA3Sujca69pAYS45p7YGJT2%2FnAQkunx2ISznk5COSXZkBETdktVcrCOevS9a7G5Tjc1j4%2BOkrduMwSBBXjEmFK76k8TCOdo6LSaOkRNM%2BPFTvJKY9D0LoVH2M5hRsDbYYye5EHWF8vKzFZLupTdkNQShAKvxrMmEJ4Yk1Cx9oIux1qinbkrca53gPve2thQnHhdVis6fWvZceWHIJ9PjSvPFwLNgeUoI%2F1FhjO2ADWbhC7fYAVrs9GNLFbJAxC8GEGRAD9WE6xlfwXsouvV1PeaEjgJnpvGFKBHSUZXjasINq6kzdANMXdiB37aTSNFsMUBR4X68dnJ3wb0zoQ%2FWcfihvjJRR8UeBGHIEYa3yZAcX6nlY3LyH1j7c%2FhupNhhmdvHToGM73%2BCSc%2FE0vZ6kAaOwVl61gkCAHu0FnI5OTXHE0qU8DDzw%2FLFBjqkAcdvyYCo6kj7uEEIpymcKIWWUlQjeQQUc%2BUMvvckLe%2BJIMhkwLuE5KLAMCsBOFpV%2BOhTC1R2u7VzJW%2Bmwobg1biQZB0BeATNdu%2F6IJV2oE4NnKgABN7jqh5b1VG%2FdNLj%2BcEc5%2FqZD1%2BxgfiEU6mz1mL9K5J306DFvfmgEL0RqViUGEbXdbhOQZyFl6WoYSU5DpMWZSje8pf20NNWRwYFYvnBsBzu&X-Amz-Signature=c2e6d3a1786de3eda9338c9bc2aded8655ed364411b43f2898a5bfb2e45707c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
