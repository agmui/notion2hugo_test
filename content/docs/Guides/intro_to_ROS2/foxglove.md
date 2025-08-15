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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVWYQ76M%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDKxkswc52Nu7WO482XYCx00I9KKvmOBElGFXRTQt0%2BSgIhAIo3IyavdsMWmFNpejIl7LMkA4q2ftibFHrigIuX3RKVKv8DCFoQABoMNjM3NDIzMTgzODA1IgyGeSKh1HIBkWjwKrcq3AMSA61AxWQ93tFQuiAWmkQtzYfDql6cDcuFvDM0O%2BH%2Fz%2BGKktg%2Bc8msBkiFfySI%2FfWQdcEUrIO1AfmMC56SzGanwFLKTQOUcVNbQ9ACfoS0aI9ETNhWjj12TAvp%2Bho1HKgAtj0CJYtPMTz9nzxVlIdIATFsUWumiMDFaO2SUxsirZgR1JBkhorSbbSFnQLSv4MoQvnCwjfjdfS1bc2hq0GyuQKPId8PldkWVRo1HV99lVU7i9OQBSZt0zNd4XUVI01HRmbo64sUH2m028za9qiYYdF1u4SceiSHnDwjEfJQac1wFPbKm81RgVuGQx%2F3AvKrNclC0OTEd8K8zr5gVNahsPjxA2NuoECKVz0vHUGkxvlwvU3xEIATw8502Iehd7JIByTAbC1Ju8Br9k%2BghZpHqkRD1FPSbCN%2Bk3xWYS3%2FPXOAb83WXN367zCPDFVY05Pcihpz4QNdlpPycwFMw14WqPbPrQjyyJyLM7EG2brbtK8uC2pNsGQpMdkKkDYPp2p3XvIPLkw4zsqIsVz84mJsfmZCxK4cu%2BOyTwzMfQippOr99W1yjHbUxrJX4f72S0qAPrL0SRXn7d8QS62N1h94zw8ZxbdOZ2%2BaCj0o%2BGHngui59vB76ShrW88WrjDf7vvEBjqkAW931LkO8gyRxFOpjXf7TbQujShOSM%2FTn029T6j0gT%2F%2FISGtODuT%2Bv5I9nTi1xp0s2NAYVhOKfZguO8tJcKlQaWqUDke4pLt5DK9O5X3%2Fck077zmRmRDCT1D7q8TcmeQjnzkSQiRqbh2y0kD8Kyv%2Bke6pnYuPJ5eEhaN3anaZ3Iad8XSxOm412msjhpIiA1uMRMCm5X26iDShDdusSTJfW1oYPkE&X-Amz-Signature=07fe06bc11f899eef49158e6d6fad7daecf180016bcf75ffe518553bf9366d6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVWYQ76M%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDKxkswc52Nu7WO482XYCx00I9KKvmOBElGFXRTQt0%2BSgIhAIo3IyavdsMWmFNpejIl7LMkA4q2ftibFHrigIuX3RKVKv8DCFoQABoMNjM3NDIzMTgzODA1IgyGeSKh1HIBkWjwKrcq3AMSA61AxWQ93tFQuiAWmkQtzYfDql6cDcuFvDM0O%2BH%2Fz%2BGKktg%2Bc8msBkiFfySI%2FfWQdcEUrIO1AfmMC56SzGanwFLKTQOUcVNbQ9ACfoS0aI9ETNhWjj12TAvp%2Bho1HKgAtj0CJYtPMTz9nzxVlIdIATFsUWumiMDFaO2SUxsirZgR1JBkhorSbbSFnQLSv4MoQvnCwjfjdfS1bc2hq0GyuQKPId8PldkWVRo1HV99lVU7i9OQBSZt0zNd4XUVI01HRmbo64sUH2m028za9qiYYdF1u4SceiSHnDwjEfJQac1wFPbKm81RgVuGQx%2F3AvKrNclC0OTEd8K8zr5gVNahsPjxA2NuoECKVz0vHUGkxvlwvU3xEIATw8502Iehd7JIByTAbC1Ju8Br9k%2BghZpHqkRD1FPSbCN%2Bk3xWYS3%2FPXOAb83WXN367zCPDFVY05Pcihpz4QNdlpPycwFMw14WqPbPrQjyyJyLM7EG2brbtK8uC2pNsGQpMdkKkDYPp2p3XvIPLkw4zsqIsVz84mJsfmZCxK4cu%2BOyTwzMfQippOr99W1yjHbUxrJX4f72S0qAPrL0SRXn7d8QS62N1h94zw8ZxbdOZ2%2BaCj0o%2BGHngui59vB76ShrW88WrjDf7vvEBjqkAW931LkO8gyRxFOpjXf7TbQujShOSM%2FTn029T6j0gT%2F%2FISGtODuT%2Bv5I9nTi1xp0s2NAYVhOKfZguO8tJcKlQaWqUDke4pLt5DK9O5X3%2Fck077zmRmRDCT1D7q8TcmeQjnzkSQiRqbh2y0kD8Kyv%2Bke6pnYuPJ5eEhaN3anaZ3Iad8XSxOm412msjhpIiA1uMRMCm5X26iDShDdusSTJfW1oYPkE&X-Amz-Signature=ddf397cfdce16fe2d3d9334ac3176bc7f00fda15db8fc1a58d0876654296c730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
