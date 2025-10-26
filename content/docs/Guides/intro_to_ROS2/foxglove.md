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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAA6NCOI%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgmZvEEpBIzUeaNX4FgoWWmKeAvog%2FE66W6R3kNhy6hQIhAJg99IJtYkNRkc%2BTeMTX5n0C4in9oumBiPooOPZXwz0OKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyloJLzwPPRq1rqfmsq3ANj3eki53CaUVWhftEYAaiXi3nLXifokPVq9RkAUybmznfOtTsKmi4yUsmgrjuKyZ%2FFQJsYD%2BmskZ3M1CFRfSy9EvW81z%2FG39rpLQGXZ7dV9MFOWkU4SqZ6cJD6fnehKqlmql8LsXDyioqHlicTo0JYfazB%2BKUuRuLpvoupXAkerH4lasx1rf5SGK9UIgKX69S8SZvjNax51posFSEkHb%2FC5bsTxMtk01Fqe%2FYWvd5St8v48OWOztbqWH7IvzRwNUSv3BT9uHP28AtaLPmYkg5tB4hPsKRiy3xgObuWXhWK1RtFE0egYHe7RUB8LuVYzW4pad%2FCog09LmFneLEluceeNDFVr%2Bb1GUdevfD5mCbNTJvTqVWGKPnyIQ0TJ11%2B8w883bZDKF5A8voJD%2BEyoDgejQ1a4uWPsKhTq9bJiVJHvTavY16kxrZTkTZY5laYmnnXeN5oZ9ndK%2BdmKLa0UbbfqLCkkyDb%2Bl2W3973FBgEHc1MGGNzoMBM3x%2B3ctMGgFyq6KOg54kIK%2FmuvXrDrKRjy4RX6GeoaJeV4PGB5p%2FTCdeMGDpPOzJqjalM0ScY0lDTL1%2BFOTbCAFaRzGBJ7%2Bs2pF4Q10w%2FLlC14%2FonQEwI9y7TDLUCX%2B4%2F9Js6SzDtrPXHBjqkARX2tok2sTInXY0IzNoicHcrYfoJNhrqQLt0U7HeDWaQYdT4F%2B2snzczCufmNuMfkFAVlKxyupN997ihWKNV54TAj8VbOxP6GuhnxPVKhhB2sx1ovnbQ%2FXhyI6b97OuWMdrWf4HLf5m8dtcXmle0XwoZ13s0faCI4Vs0Br7sVUrYA8csgO3Vu%2BgddU77D7SSZ4fWiizaHAKigCkIYrS%2Bdmck92zJ&X-Amz-Signature=e0274b15981ed6058af6d352ab47b638383f2894e9ad2171ec1213f10c55ef0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAA6NCOI%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgmZvEEpBIzUeaNX4FgoWWmKeAvog%2FE66W6R3kNhy6hQIhAJg99IJtYkNRkc%2BTeMTX5n0C4in9oumBiPooOPZXwz0OKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyloJLzwPPRq1rqfmsq3ANj3eki53CaUVWhftEYAaiXi3nLXifokPVq9RkAUybmznfOtTsKmi4yUsmgrjuKyZ%2FFQJsYD%2BmskZ3M1CFRfSy9EvW81z%2FG39rpLQGXZ7dV9MFOWkU4SqZ6cJD6fnehKqlmql8LsXDyioqHlicTo0JYfazB%2BKUuRuLpvoupXAkerH4lasx1rf5SGK9UIgKX69S8SZvjNax51posFSEkHb%2FC5bsTxMtk01Fqe%2FYWvd5St8v48OWOztbqWH7IvzRwNUSv3BT9uHP28AtaLPmYkg5tB4hPsKRiy3xgObuWXhWK1RtFE0egYHe7RUB8LuVYzW4pad%2FCog09LmFneLEluceeNDFVr%2Bb1GUdevfD5mCbNTJvTqVWGKPnyIQ0TJ11%2B8w883bZDKF5A8voJD%2BEyoDgejQ1a4uWPsKhTq9bJiVJHvTavY16kxrZTkTZY5laYmnnXeN5oZ9ndK%2BdmKLa0UbbfqLCkkyDb%2Bl2W3973FBgEHc1MGGNzoMBM3x%2B3ctMGgFyq6KOg54kIK%2FmuvXrDrKRjy4RX6GeoaJeV4PGB5p%2FTCdeMGDpPOzJqjalM0ScY0lDTL1%2BFOTbCAFaRzGBJ7%2Bs2pF4Q10w%2FLlC14%2FonQEwI9y7TDLUCX%2B4%2F9Js6SzDtrPXHBjqkARX2tok2sTInXY0IzNoicHcrYfoJNhrqQLt0U7HeDWaQYdT4F%2B2snzczCufmNuMfkFAVlKxyupN997ihWKNV54TAj8VbOxP6GuhnxPVKhhB2sx1ovnbQ%2FXhyI6b97OuWMdrWf4HLf5m8dtcXmle0XwoZ13s0faCI4Vs0Br7sVUrYA8csgO3Vu%2BgddU77D7SSZ4fWiizaHAKigCkIYrS%2Bdmck92zJ&X-Amz-Signature=26d56cc1de91c2b856e0e7dd842b35313416c91ecda3ba5b30852fb5cd0e2b7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
