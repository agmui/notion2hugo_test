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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJAN4JAI%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxoLjfGtoV9G8oFkaDEjkxteHRxwVOCA6rvZFkx0ESQAiAQvn0UMwZ98890%2BvtBDT7uARB%2BiDAjD97C%2BuqvK%2B10nCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwaYbe4AL2vg8QSRbKtwDUyU63qSpL7zfTKuqCEaRT38KEZuNJ2B1nbm%2BMwTqPQVTC9HXMsX94%2FKEuMkcn9qTa2%2BqRwh255runnriCLMEYH0nKfZDCZZUVKQ3%2FvShYfJiU6y8Pqj61lBqNxP6RqV%2F5qRohQhhH4Z5FfE34BpUFuJxeRS%2BbzqldAoPYRRL2FV%2FXCpQ%2BdFrI6tRk6qHhk4HHt%2BbPutw7QHoTgFx4QKbVVqsaGi7gCvOjTh5JLvpCI%2BLCAI%2FIibyUP8BvMiNELhEV2jS8k2xfRdoVKfrFXRMyMw7kHc%2Fzr%2FKuSF9gXi6kFaLitFvEeygzYc2OyU%2FWQva1cGvANkXMhMLCTt4S0b1PZGCC9inBO5JqDYmjWDj4L2ucbM5MuGreA%2BOjfjqpCqWGWyQ3vmgfB%2FsdT%2FhdBr1DrGuCcorXIqJFoYPXhiHNjZlXIz3mg2G69o2xmfz%2BBn2c9CgovHvhPpRf%2FLr9OWDNT37LNPNWEVjIfDyyCqx4%2B%2B%2FWDzDLcCXbWpFtjkcmv7Tbc2tizPm0gbY6jv80tVdNebQjsyhuzE%2FXLtI1Yg4cLMGtZaJpDXuX%2Ba075vQtRj68lWoNV7GjsDqvpP9ZahFzB60jjewQKAF%2Bs04bRLNh%2BjoCxVlsunmrDYGWmYw18qHzgY6pgFRX2BXWWm%2BqfBBJjRKxR0dpNVjEfsoR1OrCj2SnK16o40mFRPzgAED0Fvt%2BIocEXfyfc5LuQSQpRTCj1o5Azl03dzruMG64OiQvYAvRDem08wdGaM5u2%2FmRqO6s97MNxmvqrZT%2BpEKsUyV49OZfIWHP5IIyKxuV7ogtKwdFESJZY4kgBL6Znp8CaUJjHTdaTY0BneIzwoNEbvFxlYTTz6b%2BOPcUAkg&X-Amz-Signature=5506ac7dd89e4e73004dfdce722244f711aba84e432e56994eb5106dc35f178a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJAN4JAI%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxoLjfGtoV9G8oFkaDEjkxteHRxwVOCA6rvZFkx0ESQAiAQvn0UMwZ98890%2BvtBDT7uARB%2BiDAjD97C%2BuqvK%2B10nCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwaYbe4AL2vg8QSRbKtwDUyU63qSpL7zfTKuqCEaRT38KEZuNJ2B1nbm%2BMwTqPQVTC9HXMsX94%2FKEuMkcn9qTa2%2BqRwh255runnriCLMEYH0nKfZDCZZUVKQ3%2FvShYfJiU6y8Pqj61lBqNxP6RqV%2F5qRohQhhH4Z5FfE34BpUFuJxeRS%2BbzqldAoPYRRL2FV%2FXCpQ%2BdFrI6tRk6qHhk4HHt%2BbPutw7QHoTgFx4QKbVVqsaGi7gCvOjTh5JLvpCI%2BLCAI%2FIibyUP8BvMiNELhEV2jS8k2xfRdoVKfrFXRMyMw7kHc%2Fzr%2FKuSF9gXi6kFaLitFvEeygzYc2OyU%2FWQva1cGvANkXMhMLCTt4S0b1PZGCC9inBO5JqDYmjWDj4L2ucbM5MuGreA%2BOjfjqpCqWGWyQ3vmgfB%2FsdT%2FhdBr1DrGuCcorXIqJFoYPXhiHNjZlXIz3mg2G69o2xmfz%2BBn2c9CgovHvhPpRf%2FLr9OWDNT37LNPNWEVjIfDyyCqx4%2B%2B%2FWDzDLcCXbWpFtjkcmv7Tbc2tizPm0gbY6jv80tVdNebQjsyhuzE%2FXLtI1Yg4cLMGtZaJpDXuX%2Ba075vQtRj68lWoNV7GjsDqvpP9ZahFzB60jjewQKAF%2Bs04bRLNh%2BjoCxVlsunmrDYGWmYw18qHzgY6pgFRX2BXWWm%2BqfBBJjRKxR0dpNVjEfsoR1OrCj2SnK16o40mFRPzgAED0Fvt%2BIocEXfyfc5LuQSQpRTCj1o5Azl03dzruMG64OiQvYAvRDem08wdGaM5u2%2FmRqO6s97MNxmvqrZT%2BpEKsUyV49OZfIWHP5IIyKxuV7ogtKwdFESJZY4kgBL6Znp8CaUJjHTdaTY0BneIzwoNEbvFxlYTTz6b%2BOPcUAkg&X-Amz-Signature=75b0e44f5743eb60ddb9510c87b21c60ee5b6f785bc774f59ba8cd38a268cc0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
