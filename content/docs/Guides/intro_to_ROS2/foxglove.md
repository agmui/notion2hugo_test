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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIMZVMR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtA6zsToUhpdYkbN7k3awHzyWjjwAieiJnVjkuu5OAbQIhAOD65%2FnGQ%2BEbbLuPgx%2ByTtfs8qT1AKm0JsCrF3PYAvPvKv8DCEgQABoMNjM3NDIzMTgzODA1Igx8Uuak9vIA4cOliQQq3AMUhQkdQA8hfqgoRWIFX7aJlegEqlboKScHRk4HNaMtdfP0beABRUaw7bBoiesSG2u5%2FEAVb2YLQrl8G1oid4aBZo2ziuhxHpPR%2Bx5EW8pIHMilYTbGq6iG9YJD68IzFThsXA0cE%2FZrj4jrhEgi%2BYGHmxbLNNpRKL7kt0pRGAzKaS8aRRQYUFA3QpSaQnIt64E0vgmkzkg%2FdfXt3W7SeBe8f6NG2ezxjh%2BCw%2FAB5W9nygJJkkTap%2BldqjBJR5PZsXT%2B3NDin7KzL%2Fw4O4uK0k8j1mmKxfiyA4hXRHEvDDZ1XEVShR7pFWYLx7ssKW7u5XZaEQsaooojWOnqB%2FgyaCOJ0mBHO1FGNrnF3qSq1CkLDsBIw0kw2%2F5pHBESc2sMbus4l0PUcT3h4ux5dj04LZuSoaLMaT43dFsUcbyz5l7NKKTQhbM0Wm6sH2pIrm3QaQ%2FlX31yRj%2FFL9INaIqnuocoTLpZnnKY%2B5Pd7SChDvWdS0mWkNJXnUOfvk6M2eI2QooY91Yqm6rivr32mriOpIYORzNn6t5hqUv18mUjVTAWHCO%2B7z0i0GQwhdUXMwOH6%2FyiCPi%2FNnusemlpCRzlFTD%2Fu2ImeFrNryELmIYTu5R5Ai479zca%2BT7Eqa%2FsYDDY%2BvfEBjqkAT%2Fjpx%2B8XGPAwW08l10u6ux9S3cahFOSDlTdWWNLBIxTPX%2B78oURxNl32qxmwQ3NRV6Mexgkw66K7OZWa6eUi2pDMRlrtxQ2Jops9V8CUtqRuRg9%2B7HRFGlQRn1B%2B7SL5tGqjdByd3m4hoPR%2BAcDQe%2BrrJy69lna%2FlGPeGsP4flJFjFUmra5GdvJgvo5zmcKzSeJpWCshuF8b%2FWTdNpAcZSssqIx&X-Amz-Signature=6a458d51fed41abeae520cef027facbe4fc3364bde0f1d96eb8f0c1ab78d3c71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIMZVMR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtA6zsToUhpdYkbN7k3awHzyWjjwAieiJnVjkuu5OAbQIhAOD65%2FnGQ%2BEbbLuPgx%2ByTtfs8qT1AKm0JsCrF3PYAvPvKv8DCEgQABoMNjM3NDIzMTgzODA1Igx8Uuak9vIA4cOliQQq3AMUhQkdQA8hfqgoRWIFX7aJlegEqlboKScHRk4HNaMtdfP0beABRUaw7bBoiesSG2u5%2FEAVb2YLQrl8G1oid4aBZo2ziuhxHpPR%2Bx5EW8pIHMilYTbGq6iG9YJD68IzFThsXA0cE%2FZrj4jrhEgi%2BYGHmxbLNNpRKL7kt0pRGAzKaS8aRRQYUFA3QpSaQnIt64E0vgmkzkg%2FdfXt3W7SeBe8f6NG2ezxjh%2BCw%2FAB5W9nygJJkkTap%2BldqjBJR5PZsXT%2B3NDin7KzL%2Fw4O4uK0k8j1mmKxfiyA4hXRHEvDDZ1XEVShR7pFWYLx7ssKW7u5XZaEQsaooojWOnqB%2FgyaCOJ0mBHO1FGNrnF3qSq1CkLDsBIw0kw2%2F5pHBESc2sMbus4l0PUcT3h4ux5dj04LZuSoaLMaT43dFsUcbyz5l7NKKTQhbM0Wm6sH2pIrm3QaQ%2FlX31yRj%2FFL9INaIqnuocoTLpZnnKY%2B5Pd7SChDvWdS0mWkNJXnUOfvk6M2eI2QooY91Yqm6rivr32mriOpIYORzNn6t5hqUv18mUjVTAWHCO%2B7z0i0GQwhdUXMwOH6%2FyiCPi%2FNnusemlpCRzlFTD%2Fu2ImeFrNryELmIYTu5R5Ai479zca%2BT7Eqa%2FsYDDY%2BvfEBjqkAT%2Fjpx%2B8XGPAwW08l10u6ux9S3cahFOSDlTdWWNLBIxTPX%2B78oURxNl32qxmwQ3NRV6Mexgkw66K7OZWa6eUi2pDMRlrtxQ2Jops9V8CUtqRuRg9%2B7HRFGlQRn1B%2B7SL5tGqjdByd3m4hoPR%2BAcDQe%2BrrJy69lna%2FlGPeGsP4flJFjFUmra5GdvJgvo5zmcKzSeJpWCshuF8b%2FWTdNpAcZSssqIx&X-Amz-Signature=44f13a8664a4b08b38c6fc0c13c7da212d9ecc1cfcc31635e07cb16484fc3d31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
