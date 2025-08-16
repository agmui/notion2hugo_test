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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE6KV5LB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIEfDSK%2FgsOjZO3Kq2o1%2Bizb5Xq3Q7G2VFKsOPK%2Fhgv0zAiAOJKSt%2FxgrSwHigFO%2BGgUHioU%2B%2B4A8lqXmdq7uDbQDqSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMtfDoebohYcjduE%2BUKtwDjOl%2BJZYhu0MY%2Bn%2B2gyWUOyrm%2FLgEKP%2FzAdhJiuFwmmtAUYKCzCfGXIiYP%2FklW%2B7fkkIq35JCbtPfou6zffGNYFC7srxJ%2FpGLCPC4LqaJjZGdNcyO9CNnllG8MnSGRW4C55Mdxrl%2FLba55eOuu1sJ49NBT%2F1jvUpfFeZDybo2IwDD3K%2BVLorvlkUK8AeeTTQC9%2BQHRT67xGZQzefvSmMnlZ%2BFosbShqdM17j3D8EFjbz5dYzvAvtQVDeGZ3DG0plarElkyO73lB3l4081Fhv6%2FjpH8B4tAOB%2BRtMR7FEcul5sy3zMxGuLsN9r5lAvz3pAVRPwhKCOYc7v8AEDt0mi4wxQJKqZQaBDKZA0%2BO5X3r86ytWs5ceDTZppRQnh7v7vLz%2F3a47k5AaJh4CIsz8%2FR%2BhNQLw5rTHxQ92nsZ%2B8y%2F2mhikUhf5JbimmLwfTXmSFvvffKsxLbVoycONWrp7S6pX387TUNphovhJrP%2Bst9%2FCNCl9aw1bRMS9LYiQKZUb4nBVUY%2FNzUrQi5OzEaJkalWBmV3nv7t9abSn%2BJPOdF22%2BMMyv3f9x22erJvy4ESH%2BQJNcVDaeaHKbWZDzY3RSKWC1P4jGlUBUvkIE5Pid%2FAAzZ7i%2FDayZq1bKbC0wrNj%2BxAY6pgFIC9EgI5RWDk%2BdMJi4WRFGN1kK01msEy6zhEdIh7q903LSRC1oJBXpvJYT%2FxhCdZp5tTv3AaotHcZyza%2FgviKMSlFrqnWxbUZsomoPx%2FUHq%2BifrJ5QsOqvEzZ24pW7AVp9Ikw%2B29Tg7EBzjkUQLnixqJdOfVglNbn6w7wbPzg8pTCII%2BZLnGZYKDUzUxOH4pO44YO23v18GkWcvxPfYlQ6edk8ChDM&X-Amz-Signature=b68b1fa068f56953ae12a73011acd89b614860ac005005dd5c55558735c521f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE6KV5LB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIEfDSK%2FgsOjZO3Kq2o1%2Bizb5Xq3Q7G2VFKsOPK%2Fhgv0zAiAOJKSt%2FxgrSwHigFO%2BGgUHioU%2B%2B4A8lqXmdq7uDbQDqSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMtfDoebohYcjduE%2BUKtwDjOl%2BJZYhu0MY%2Bn%2B2gyWUOyrm%2FLgEKP%2FzAdhJiuFwmmtAUYKCzCfGXIiYP%2FklW%2B7fkkIq35JCbtPfou6zffGNYFC7srxJ%2FpGLCPC4LqaJjZGdNcyO9CNnllG8MnSGRW4C55Mdxrl%2FLba55eOuu1sJ49NBT%2F1jvUpfFeZDybo2IwDD3K%2BVLorvlkUK8AeeTTQC9%2BQHRT67xGZQzefvSmMnlZ%2BFosbShqdM17j3D8EFjbz5dYzvAvtQVDeGZ3DG0plarElkyO73lB3l4081Fhv6%2FjpH8B4tAOB%2BRtMR7FEcul5sy3zMxGuLsN9r5lAvz3pAVRPwhKCOYc7v8AEDt0mi4wxQJKqZQaBDKZA0%2BO5X3r86ytWs5ceDTZppRQnh7v7vLz%2F3a47k5AaJh4CIsz8%2FR%2BhNQLw5rTHxQ92nsZ%2B8y%2F2mhikUhf5JbimmLwfTXmSFvvffKsxLbVoycONWrp7S6pX387TUNphovhJrP%2Bst9%2FCNCl9aw1bRMS9LYiQKZUb4nBVUY%2FNzUrQi5OzEaJkalWBmV3nv7t9abSn%2BJPOdF22%2BMMyv3f9x22erJvy4ESH%2BQJNcVDaeaHKbWZDzY3RSKWC1P4jGlUBUvkIE5Pid%2FAAzZ7i%2FDayZq1bKbC0wrNj%2BxAY6pgFIC9EgI5RWDk%2BdMJi4WRFGN1kK01msEy6zhEdIh7q903LSRC1oJBXpvJYT%2FxhCdZp5tTv3AaotHcZyza%2FgviKMSlFrqnWxbUZsomoPx%2FUHq%2BifrJ5QsOqvEzZ24pW7AVp9Ikw%2B29Tg7EBzjkUQLnixqJdOfVglNbn6w7wbPzg8pTCII%2BZLnGZYKDUzUxOH4pO44YO23v18GkWcvxPfYlQ6edk8ChDM&X-Amz-Signature=00be761355ee4b3cb3d0f843c78b6506d32598fa02b9602e32582581cacd9aae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
