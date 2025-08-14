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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSV57J4O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsZYHyh3r%2FVDcb28cJ0x7Oydo613wmC8S4d1qJ5ejD9gIhAIps9RtTeF7xDEGu8PfHToagxHVvKod%2BglMxTKXCHToBKv8DCEMQABoMNjM3NDIzMTgzODA1Igzxq%2BboeeHPtVk6ziUq3AMUFWjl0zVPSq4tgfHW5BdgMvlgpwa2RsNy%2B4gvEVSWq7nNqsPf%2FaA6qkYVFG452GBNPCl7MKh7YeNi7cBVAbL0W47smMLrMd5QDltKolsQ%2B0pW%2B0woNQy08O%2Ftz8bwri8MfBVFxA%2BvBawBnMhI7IK%2Fas0VEwlrEi%2Bud%2Fivx5Fe72H%2BDRgrZ9%2Ba5KM8S%2FjNuNQyPcr13UH99yY8%2B4oG80egJLT%2BzRb52u%2Bjk%2F3saWkwqJNR%2BiHZOHkpha%2Bc0MygBTY0ujBGH3RM7%2Fzav7QDPNMzX6ekrlxssmw%2BGAZbH6kGcWP%2BVkxNI8YhEqf60ozwllMmC6fjb6s7K18ZCC4vJP1o0Efy8Nvv9QC370jZWNela5o4tUY61LWh%2BZ5gzYrSzkBX0kGfl2cjGzZifXdJkhPuoorwm1zD6KYlMv1tNAW85%2B0TttQYa7ZfXNPVi5UDCY7K8TgU7NvYPB1AdnFUfGUvbML0AHO2cQg8JlHKnP%2FkEQQXlvk9GMb4Mq8JdhTFEvHqeXiC8js8Hn%2FkLQEF%2FSVFGkdKhYvl3zZdsj%2F0sbjZrRSqM0UMr7%2BXrkm7kArEfGH%2F%2BJZ600UAfCToklC3AtL3XIQxSpDsaKWk8peFlj6u2aVfmqamXHw7TqGUDTDn3%2FbEBjqkAdu4saHU7FOms9G2qkKp5RVlBxGtqNanhHjUKqK9WiSMUpgywT368oxlbh0LuSPfyRd93ppPwlq29eLg2eCAAeDssEyKjQJyFxXlr0V%2BviA3LrWdHL4sSZ0pbsmOAYufnKGkjpHwpBLEhbsery3eZzI00QX65V3BDX5Yhe%2B1KHNL6dKZCbfpei%2FOI2UXcSOEFqjkzW9iUPuYBWLBMElzgfYfZq8y&X-Amz-Signature=0e77ad3993488dee8a996eb3c8ccd299bb578512c2bfd8768dbb0e96bb28250d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSV57J4O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsZYHyh3r%2FVDcb28cJ0x7Oydo613wmC8S4d1qJ5ejD9gIhAIps9RtTeF7xDEGu8PfHToagxHVvKod%2BglMxTKXCHToBKv8DCEMQABoMNjM3NDIzMTgzODA1Igzxq%2BboeeHPtVk6ziUq3AMUFWjl0zVPSq4tgfHW5BdgMvlgpwa2RsNy%2B4gvEVSWq7nNqsPf%2FaA6qkYVFG452GBNPCl7MKh7YeNi7cBVAbL0W47smMLrMd5QDltKolsQ%2B0pW%2B0woNQy08O%2Ftz8bwri8MfBVFxA%2BvBawBnMhI7IK%2Fas0VEwlrEi%2Bud%2Fivx5Fe72H%2BDRgrZ9%2Ba5KM8S%2FjNuNQyPcr13UH99yY8%2B4oG80egJLT%2BzRb52u%2Bjk%2F3saWkwqJNR%2BiHZOHkpha%2Bc0MygBTY0ujBGH3RM7%2Fzav7QDPNMzX6ekrlxssmw%2BGAZbH6kGcWP%2BVkxNI8YhEqf60ozwllMmC6fjb6s7K18ZCC4vJP1o0Efy8Nvv9QC370jZWNela5o4tUY61LWh%2BZ5gzYrSzkBX0kGfl2cjGzZifXdJkhPuoorwm1zD6KYlMv1tNAW85%2B0TttQYa7ZfXNPVi5UDCY7K8TgU7NvYPB1AdnFUfGUvbML0AHO2cQg8JlHKnP%2FkEQQXlvk9GMb4Mq8JdhTFEvHqeXiC8js8Hn%2FkLQEF%2FSVFGkdKhYvl3zZdsj%2F0sbjZrRSqM0UMr7%2BXrkm7kArEfGH%2F%2BJZ600UAfCToklC3AtL3XIQxSpDsaKWk8peFlj6u2aVfmqamXHw7TqGUDTDn3%2FbEBjqkAdu4saHU7FOms9G2qkKp5RVlBxGtqNanhHjUKqK9WiSMUpgywT368oxlbh0LuSPfyRd93ppPwlq29eLg2eCAAeDssEyKjQJyFxXlr0V%2BviA3LrWdHL4sSZ0pbsmOAYufnKGkjpHwpBLEhbsery3eZzI00QX65V3BDX5Yhe%2B1KHNL6dKZCbfpei%2FOI2UXcSOEFqjkzW9iUPuYBWLBMElzgfYfZq8y&X-Amz-Signature=902eeab93e0d1bf4c8a5eec0a95ad061ef42835b35ce32c6125473cacbbbf91d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
