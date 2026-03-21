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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A3USQAK%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDbE6vCJVFxXGIC4rUWazY5UY1PofuadHgpvp3qaY2vjgIhAPP3EXjeSpcFkmP1mOcfThRb2OcgtUAofKU4hI%2BVcMsvKv8DCEMQABoMNjM3NDIzMTgzODA1IgyBg8ord%2FyThADydq8q3AMf9yZkFDpfyfM9QnStHT9ycLZmIj8iAfQ7sm0X578UhvlY6hzTAngnzg8AsOniz3WGGLuHosFevIFF%2FovQXuAl31xOphWTv3YbtFze3SfqCUhZHhNNqPG%2B%2FABGjfBBp%2BmCOAu%2B8sC0HzcqmM8%2F966zEvpp0iKKNMO8zqiRK4%2BAgvjbQzJoCAtwdo0LF75eMKOSRRPdnnoJtDbNH4sNUh%2FK4AhiWxZg6HX3deOKTMhxhVM9HJe%2FR3O8lqahnx1D%2BdieB6AFNLO8dNQfz1JfMqY%2BMI6lHReN1C1jnKVgZttRZkJGtRNayoGGzjyG7mnTMl%2FCu%2BA19Pew6aElFLgDqU0NmggzJSxu%2B0BUiif98l8L4uedy1wPglGFth0GAh%2Fi8wH5uNrrD9p3WwlZjjb6yTkntbUjPaTcXy8Mr8agJEkktpADptngOSWoxvV4%2Feri8Cn7eAEvEsEG4Dki0dxoArHazSNZUFR9pUMk2uCaaHlXD2sik3sV%2FpgxLTSijwNnbgfKBk%2BLHfYr7n8Qk63lvPV%2Fx5m60wO1kSnsr5mxlzvsV2s4VwvRuhT6ICcChlhrOlAhkzuS%2BuXKLACEY4evGferq8V1vGbNHYa8ieFRPKGOb%2BexfDm40NLJFuBndzCE9ffNBjqkAWbr9LBfL0AQdgA%2Foq7zpeqHo6LL0FWPJElibY6uge0fWKqxf6iNlF7kLtXHRnmVgk%2FejVUMQ3WGmscVqDx0F5MGORZzltkgkHVYCpHTTRl8uCn7dgMiOddzS58EpdvQBteivBv0x5jGT57%2FNuGB4XZLY8aw%2FhgvHRhrwf8jghnRnUe7j4S7rpHcacWcnYASKdomQDDxuRyuq5qXur%2FfznnhG811&X-Amz-Signature=0a842bfcce7665be03f9bf5f31bd2996b3047ab899a4403e56505f2c6162e652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A3USQAK%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDbE6vCJVFxXGIC4rUWazY5UY1PofuadHgpvp3qaY2vjgIhAPP3EXjeSpcFkmP1mOcfThRb2OcgtUAofKU4hI%2BVcMsvKv8DCEMQABoMNjM3NDIzMTgzODA1IgyBg8ord%2FyThADydq8q3AMf9yZkFDpfyfM9QnStHT9ycLZmIj8iAfQ7sm0X578UhvlY6hzTAngnzg8AsOniz3WGGLuHosFevIFF%2FovQXuAl31xOphWTv3YbtFze3SfqCUhZHhNNqPG%2B%2FABGjfBBp%2BmCOAu%2B8sC0HzcqmM8%2F966zEvpp0iKKNMO8zqiRK4%2BAgvjbQzJoCAtwdo0LF75eMKOSRRPdnnoJtDbNH4sNUh%2FK4AhiWxZg6HX3deOKTMhxhVM9HJe%2FR3O8lqahnx1D%2BdieB6AFNLO8dNQfz1JfMqY%2BMI6lHReN1C1jnKVgZttRZkJGtRNayoGGzjyG7mnTMl%2FCu%2BA19Pew6aElFLgDqU0NmggzJSxu%2B0BUiif98l8L4uedy1wPglGFth0GAh%2Fi8wH5uNrrD9p3WwlZjjb6yTkntbUjPaTcXy8Mr8agJEkktpADptngOSWoxvV4%2Feri8Cn7eAEvEsEG4Dki0dxoArHazSNZUFR9pUMk2uCaaHlXD2sik3sV%2FpgxLTSijwNnbgfKBk%2BLHfYr7n8Qk63lvPV%2Fx5m60wO1kSnsr5mxlzvsV2s4VwvRuhT6ICcChlhrOlAhkzuS%2BuXKLACEY4evGferq8V1vGbNHYa8ieFRPKGOb%2BexfDm40NLJFuBndzCE9ffNBjqkAWbr9LBfL0AQdgA%2Foq7zpeqHo6LL0FWPJElibY6uge0fWKqxf6iNlF7kLtXHRnmVgk%2FejVUMQ3WGmscVqDx0F5MGORZzltkgkHVYCpHTTRl8uCn7dgMiOddzS58EpdvQBteivBv0x5jGT57%2FNuGB4XZLY8aw%2FhgvHRhrwf8jghnRnUe7j4S7rpHcacWcnYASKdomQDDxuRyuq5qXur%2FfznnhG811&X-Amz-Signature=0b6fe986d357a5488ecc913382e6533106bfbb057c934c911fcfcfbfb0387331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
