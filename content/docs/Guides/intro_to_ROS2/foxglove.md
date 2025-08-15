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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7GTIKK5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDkjUBzqNZAuC%2FyRjpn6LO62oqCO7xV42seK%2FDx%2BzgD4AiBrPrMdL7wzhAOCz3rLKx5LPnerFkgD%2BdMh4acwTl4NgSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMjICK%2FhEvV3%2B9CtakKtwDuxixnzXRnF0D5NyQOGIi7YlJOdjZW7iPMXQ5bFhvH%2B6Ry1H3r4cPug3z64Xzghc3iZljy3n8%2FKhoVEByYqbwZAawKbcoc%2FylhOpNgtPvHh7JOlw8bx2flezEs5443kZH3i6DSFx%2FjVBWbJFM%2F054PQ5hkHBwY9KaijkLo53mKmpy0nqGinKZejXKINs81SGdxV6xTzOUCIHGPoKALLZGJTuojvo4daQErQQoFsQ27OzFk6oyhiADClbClKWoW3%2BUmk48aP8xDHfK9HGo0fA66WDeJpjPQq9ZOGvzXwstGz1Qtr8VCEGikqJegAiewDh0l6CPlmlUipvFjOQuBdNVjPD1L%2FtCftZxNixVUe1WvTIHKNXs8wfSEDRZ3bUesNWE1h2FVFdQ53i82THD4UI20xOYhh20l%2Bh9UVStg4cLz2gJjekJSsjMVQK3fxNh2qb3CxOmMybGEiSntxiNeGimsBPqrFpgLGp%2FCZIgLvS97XkkztbQyQesGi%2B6%2Br6HMj8hDMkXcuLOhnELeMmPzyBaZr4u2CQCHtiwAgm9Mk904xXyeOxPzJ14zjKaU9%2F2zFsKNipMCauZJGpU5CZLlsM6zlHu7JMVgpp2fJSytkUfkxMGVhkszddEQ7EJBSgwu6P6xAY6pgFPIclq8IO7lWsR3hMM8%2BEhEwXijxE5KNi%2B9OT8zSRR0zqSL8FMiS1boh6xumd1jp%2FJ6nCVvq28qF3HJsYYUNMPLl87TInhZw9eRoyqXSsgp%2Bd80DCvKD1eiO2EtXj00q79l4qK%2F%2BUDbce8LzPS7uoCll4h7CKK1YRpJLUDzYv5eX3NC6TPKB%2Bhq2M0eV6jK0LC3YXO1%2FAG%2BgXbeBB6UJ771DFY3gYJ&X-Amz-Signature=ee6dc1a93a786cc83be0106c5a58e13c2a36634ddd9f51691ba8f81b4bdfb4fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7GTIKK5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDkjUBzqNZAuC%2FyRjpn6LO62oqCO7xV42seK%2FDx%2BzgD4AiBrPrMdL7wzhAOCz3rLKx5LPnerFkgD%2BdMh4acwTl4NgSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMjICK%2FhEvV3%2B9CtakKtwDuxixnzXRnF0D5NyQOGIi7YlJOdjZW7iPMXQ5bFhvH%2B6Ry1H3r4cPug3z64Xzghc3iZljy3n8%2FKhoVEByYqbwZAawKbcoc%2FylhOpNgtPvHh7JOlw8bx2flezEs5443kZH3i6DSFx%2FjVBWbJFM%2F054PQ5hkHBwY9KaijkLo53mKmpy0nqGinKZejXKINs81SGdxV6xTzOUCIHGPoKALLZGJTuojvo4daQErQQoFsQ27OzFk6oyhiADClbClKWoW3%2BUmk48aP8xDHfK9HGo0fA66WDeJpjPQq9ZOGvzXwstGz1Qtr8VCEGikqJegAiewDh0l6CPlmlUipvFjOQuBdNVjPD1L%2FtCftZxNixVUe1WvTIHKNXs8wfSEDRZ3bUesNWE1h2FVFdQ53i82THD4UI20xOYhh20l%2Bh9UVStg4cLz2gJjekJSsjMVQK3fxNh2qb3CxOmMybGEiSntxiNeGimsBPqrFpgLGp%2FCZIgLvS97XkkztbQyQesGi%2B6%2Br6HMj8hDMkXcuLOhnELeMmPzyBaZr4u2CQCHtiwAgm9Mk904xXyeOxPzJ14zjKaU9%2F2zFsKNipMCauZJGpU5CZLlsM6zlHu7JMVgpp2fJSytkUfkxMGVhkszddEQ7EJBSgwu6P6xAY6pgFPIclq8IO7lWsR3hMM8%2BEhEwXijxE5KNi%2B9OT8zSRR0zqSL8FMiS1boh6xumd1jp%2FJ6nCVvq28qF3HJsYYUNMPLl87TInhZw9eRoyqXSsgp%2Bd80DCvKD1eiO2EtXj00q79l4qK%2F%2BUDbce8LzPS7uoCll4h7CKK1YRpJLUDzYv5eX3NC6TPKB%2Bhq2M0eV6jK0LC3YXO1%2FAG%2BgXbeBB6UJ771DFY3gYJ&X-Amz-Signature=18a91459a3e498e4f9ad67df856d63577909a6bb4c25f12df04c5bc2a3587bf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
