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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GFNPZDP%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFTI%2Fmd5CpTVAVMzQHqSb9jRgFZ4g1EL4ZUfBl57sTiAiEAhMLnAlTtmAADpQoJw6f5kJ5c77s%2F4TdoP7X1Ay4uPU0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrsmVWgCRjWOc8GySrcA9VsdUDRv4mhwxVLxbxiK0yVp1rB4HqB3kt71%2FNmn%2BsiZXW9%2B3LmN8dtBvFLBkD0e6DKJRh7G3uY%2BHwfjNG1Z5Bk7UVU8UtHNl2sXbb9g8LNTlcT9npN08T%2F99Wsexu8N7gYbfgzUuuS8LCcAhHfrhZFM5USY7Hxw7VqTMR4EJ8V5VbbwSDc0qUqBJWQ8njSKdXK1hm7sBNjl47eKj4W3EP0Yd8qBcaAD6oe8hUoRH%2BBTU5jee9lyKxPZoN3IlXH1DimQ5QpinMjvzaaQ4AcTbbhBzz4PGhKCelMsGz3JKPkDOd20U7dsHXij1GbBMJIiX5fP0MOLXV5ZlDLOUk0lWAcOqvSLq%2FP8h8IJjUcY3y65EpPbE24XdQTPurardHfufuLa9RRjsf46qLzyEfeI%2B8JOpSGLgVNEOqtm45Om3%2FxY6jqonZGPMYiOu5i3Ys92vGp3rd8RNowcRL7nYedDABVTex%2BZE5%2BdUv6UWv2icM9f6e0iSSRmMqdRwRY9c8yUtdHIiTIX%2FE%2FYevhm9mJKr1ELm4VxezfvVV3C2Su1UcHnxw4DLv6CLBzEDE4ONFZ8Fp8HzjF0MLnPl0RzHetW1lXm10%2FoSQMnAIyKNyfyXcSKXJ9hW7OEbWtvndyMJaR2M0GOqUBjyXpsAW%2BjfU4fCIlkcG5CUO1yi8%2FjOknoWoTtoKd3N%2Bl4YbCQr5ybsQk6cVSd%2FEtHTSno%2FFwyn5YkXJzqFyad0AXwSQqkxve5JfySiHa1YdKBSey4h2ivVpHXV7%2BpoyEgFmG7MS6%2BjevNG9JxhlEZKDflhH1eGfZ5gjkcBkA5PN9zo7BrwQXt2kbtBZ0nqVCnWIVeTVLZuWHqxlZStfEOOx%2B4rpy&X-Amz-Signature=21883da5b717400da65af67e5c31edb561b488981d335869109af9dc2d14bdac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GFNPZDP%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFTI%2Fmd5CpTVAVMzQHqSb9jRgFZ4g1EL4ZUfBl57sTiAiEAhMLnAlTtmAADpQoJw6f5kJ5c77s%2F4TdoP7X1Ay4uPU0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrsmVWgCRjWOc8GySrcA9VsdUDRv4mhwxVLxbxiK0yVp1rB4HqB3kt71%2FNmn%2BsiZXW9%2B3LmN8dtBvFLBkD0e6DKJRh7G3uY%2BHwfjNG1Z5Bk7UVU8UtHNl2sXbb9g8LNTlcT9npN08T%2F99Wsexu8N7gYbfgzUuuS8LCcAhHfrhZFM5USY7Hxw7VqTMR4EJ8V5VbbwSDc0qUqBJWQ8njSKdXK1hm7sBNjl47eKj4W3EP0Yd8qBcaAD6oe8hUoRH%2BBTU5jee9lyKxPZoN3IlXH1DimQ5QpinMjvzaaQ4AcTbbhBzz4PGhKCelMsGz3JKPkDOd20U7dsHXij1GbBMJIiX5fP0MOLXV5ZlDLOUk0lWAcOqvSLq%2FP8h8IJjUcY3y65EpPbE24XdQTPurardHfufuLa9RRjsf46qLzyEfeI%2B8JOpSGLgVNEOqtm45Om3%2FxY6jqonZGPMYiOu5i3Ys92vGp3rd8RNowcRL7nYedDABVTex%2BZE5%2BdUv6UWv2icM9f6e0iSSRmMqdRwRY9c8yUtdHIiTIX%2FE%2FYevhm9mJKr1ELm4VxezfvVV3C2Su1UcHnxw4DLv6CLBzEDE4ONFZ8Fp8HzjF0MLnPl0RzHetW1lXm10%2FoSQMnAIyKNyfyXcSKXJ9hW7OEbWtvndyMJaR2M0GOqUBjyXpsAW%2BjfU4fCIlkcG5CUO1yi8%2FjOknoWoTtoKd3N%2Bl4YbCQr5ybsQk6cVSd%2FEtHTSno%2FFwyn5YkXJzqFyad0AXwSQqkxve5JfySiHa1YdKBSey4h2ivVpHXV7%2BpoyEgFmG7MS6%2BjevNG9JxhlEZKDflhH1eGfZ5gjkcBkA5PN9zo7BrwQXt2kbtBZ0nqVCnWIVeTVLZuWHqxlZStfEOOx%2B4rpy&X-Amz-Signature=ab7d47a96cb9b275f750a7d1a66deef412e99058aba4092dafabbd2cef3c3c49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
