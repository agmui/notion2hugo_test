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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUW7SPG%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCyQZAv2GdMeFZZYooasMlXIIPxUTFTHr0b54TlTYLxDQIgM2yZNTUVLYTUxrdaIK4rSloSfN7vE1vGJoU7jLYyPqoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAym1jADyklpQCaj%2BCrcAyTqh14AuVwxmjaeeq%2B1hyTvvppQnocqh0u7oMy6hDxS0j8G02sKSTmC%2FV%2F3P1X3GsQQdazNZdu29WNVEW6Hw4R2NqFGnmcTokKzl9OtYIZwxjW54fZcloTwTUZa%2FH5rIrUBFjRn7OUKOqaiS7S%2BWlLwkK8IQpZIt7besFIWx2LNI4qMbpLFoQ9Qg5ZNtpBns09zN12u%2Bqi91fKrtbxExvKvPWE8e7fTxBbQVwf4bD8I%2F%2FatW7dT%2B%2FEbUPJ0GkJPfMiHEzDL3f5n8VwqlFkhG6s5hVnz93CxMhg5TkseXfrWS4FiF0krX6uKXgk%2BmwkKVxMVC1tFyfi1LQQEU28tea2djav8MOXRNQfqmZJHBGkR3DebSOBNd9cEpOcTJNvyF6q8Hg4eYuHqX80%2Bulh0NEYAyEdir%2BlrLvBV0K%2B6tsKhEJKC%2FSuwCPGcE%2B4%2B79uBVJT8jRxSr%2Fjr024KiE4VujE8yx%2BLiw32wSHFRleJJvLFyhSk90O%2FdKfaiEf8cgg68gJYPiqdS4UNJAOhpg%2BWdfgyobEZ%2BVaE47zx%2F6wJYQ7LAqT0ho4sI6zaWflJmrMmaeeDBFmtKZIy7Lbx9kConoB3wuSvsnzLtgJplaq4GuM%2BZ%2BmbjijIdcuVxIj5MKbNhMUGOqUBDqH70fv9I%2FCy8OejJ6kbED3kmUBLz99DzDSo0kLirskZ4Z3n4bVJP9araz7loRKVdbciR2nqFXjSwkCQRo5snh59Wd6QKAZkbG6LPhLuc6icFZMHYPE0C90uer5OnRCX6LsNz6cKsSPUT9WTs8ia4j7JwZh%2BdfmmzqtyvI0X%2BEqThlOLAHocwQmcyCUqT3PNT2v7EUG9SAGqnlQhAGd7%2BEnTdUs%2B&X-Amz-Signature=91a0de8d8b7ec0859ca48b1c0eae474788791cca6e651061bad1decbaf7c1379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUW7SPG%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCyQZAv2GdMeFZZYooasMlXIIPxUTFTHr0b54TlTYLxDQIgM2yZNTUVLYTUxrdaIK4rSloSfN7vE1vGJoU7jLYyPqoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAym1jADyklpQCaj%2BCrcAyTqh14AuVwxmjaeeq%2B1hyTvvppQnocqh0u7oMy6hDxS0j8G02sKSTmC%2FV%2F3P1X3GsQQdazNZdu29WNVEW6Hw4R2NqFGnmcTokKzl9OtYIZwxjW54fZcloTwTUZa%2FH5rIrUBFjRn7OUKOqaiS7S%2BWlLwkK8IQpZIt7besFIWx2LNI4qMbpLFoQ9Qg5ZNtpBns09zN12u%2Bqi91fKrtbxExvKvPWE8e7fTxBbQVwf4bD8I%2F%2FatW7dT%2B%2FEbUPJ0GkJPfMiHEzDL3f5n8VwqlFkhG6s5hVnz93CxMhg5TkseXfrWS4FiF0krX6uKXgk%2BmwkKVxMVC1tFyfi1LQQEU28tea2djav8MOXRNQfqmZJHBGkR3DebSOBNd9cEpOcTJNvyF6q8Hg4eYuHqX80%2Bulh0NEYAyEdir%2BlrLvBV0K%2B6tsKhEJKC%2FSuwCPGcE%2B4%2B79uBVJT8jRxSr%2Fjr024KiE4VujE8yx%2BLiw32wSHFRleJJvLFyhSk90O%2FdKfaiEf8cgg68gJYPiqdS4UNJAOhpg%2BWdfgyobEZ%2BVaE47zx%2F6wJYQ7LAqT0ho4sI6zaWflJmrMmaeeDBFmtKZIy7Lbx9kConoB3wuSvsnzLtgJplaq4GuM%2BZ%2BmbjijIdcuVxIj5MKbNhMUGOqUBDqH70fv9I%2FCy8OejJ6kbED3kmUBLz99DzDSo0kLirskZ4Z3n4bVJP9araz7loRKVdbciR2nqFXjSwkCQRo5snh59Wd6QKAZkbG6LPhLuc6icFZMHYPE0C90uer5OnRCX6LsNz6cKsSPUT9WTs8ia4j7JwZh%2BdfmmzqtyvI0X%2BEqThlOLAHocwQmcyCUqT3PNT2v7EUG9SAGqnlQhAGd7%2BEnTdUs%2B&X-Amz-Signature=d0fefc7f0424a4d57940de03d41739db0d7f70ccda73f30fabdc04479b204bca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
