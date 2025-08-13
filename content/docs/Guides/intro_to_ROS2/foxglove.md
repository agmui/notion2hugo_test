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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEXFCNPZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQCdFo4yC01Oq%2FCz9lEwYiC3vw2BBOiOREUB3XpAVreAIhAOfbNM09YF7lTv%2B7tWV7mGfcpVhOhAviAirJLPjAurriKv8DCDIQABoMNjM3NDIzMTgzODA1Igw9jdBJcCuX%2BNbwncYq3AN6iv1k4Ngy85Vp1N1lvppKtRGyybSoBp78GEIQG2%2BNK5U0Kr%2Fzq1sFvlYHeDZuDz7uGIrMSZy1uQfBCECF6%2Fx5UWrJcpythYP0HpXAZux4IylA7rIgEYyCvAtSEJBE7ORKJFVwezf7Vb5gJQvkRJqVa8z23%2B%2Fmv1UHIuUiV0jzV%2FFuQzeQ30x1wGxPvqrHedsmCREeJIW6EdYN%2BTnJ1j2zatIfQPSfQ6MI%2FsG0A1jq5CbjiwIcbn%2BptrDWN8tzypy0mnaUSNDJwd2u25MLJqdB24cgXS3IMY7auohvMxjrTM8l9amO8GqoFi6wmCm8jBRHEZ3bXbLPEaK2t764%2F9bkBicld05OaYZj5Y%2BOq2TkOnGsSgWwI4%2Fh1mFM3TFBLLFNof1LNlo4txr4%2BCEGecfTCZPqVW3w7GDVSDwqSUtvyQ5axTFpgn6ZA%2BhQc6ov6ttf%2B0kqyt2ftlZDV7OgD9OwidAbwdU6%2BU3bo3Hvw7JeR5Z9d3hPO5fQ7hIeQqiWdB5E29%2BDgD36FnJf%2BxzahtbffqjSVR6Hy3C88fd2k5U0mEZBu6CIzGA1Wv299hzXQUOvU7TTDM5hyeTEedXB9fqPYaZeejzGA1eP%2BKfAsixGdui1e72ciCxVPBg4cDC7%2B%2FLEBjqkATAVezEDFFSBdaH%2Bbk%2BLoTef9kKelrmo%2Bf8mRGJ7WLozPGjGv2HyAp1WjwG5b8vGkq673QIHjVee66afDAquoB0nnEag2fx0Vrsi%2Fqi4yjr9jQUl163w6VgFGAadX1KMG1303XOJdcNNNStfI7ee9RgMZcLrRcLUAmvMtEzXPdI9u%2FkifuWr9%2BcEB41z926MfI8aFzrhVSLYBDJgJ3khb0319G6V&X-Amz-Signature=96edd7351bbe9155dcd59899ca425c8f252380ed7797d817bd0ef2e7be978559&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEXFCNPZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQCdFo4yC01Oq%2FCz9lEwYiC3vw2BBOiOREUB3XpAVreAIhAOfbNM09YF7lTv%2B7tWV7mGfcpVhOhAviAirJLPjAurriKv8DCDIQABoMNjM3NDIzMTgzODA1Igw9jdBJcCuX%2BNbwncYq3AN6iv1k4Ngy85Vp1N1lvppKtRGyybSoBp78GEIQG2%2BNK5U0Kr%2Fzq1sFvlYHeDZuDz7uGIrMSZy1uQfBCECF6%2Fx5UWrJcpythYP0HpXAZux4IylA7rIgEYyCvAtSEJBE7ORKJFVwezf7Vb5gJQvkRJqVa8z23%2B%2Fmv1UHIuUiV0jzV%2FFuQzeQ30x1wGxPvqrHedsmCREeJIW6EdYN%2BTnJ1j2zatIfQPSfQ6MI%2FsG0A1jq5CbjiwIcbn%2BptrDWN8tzypy0mnaUSNDJwd2u25MLJqdB24cgXS3IMY7auohvMxjrTM8l9amO8GqoFi6wmCm8jBRHEZ3bXbLPEaK2t764%2F9bkBicld05OaYZj5Y%2BOq2TkOnGsSgWwI4%2Fh1mFM3TFBLLFNof1LNlo4txr4%2BCEGecfTCZPqVW3w7GDVSDwqSUtvyQ5axTFpgn6ZA%2BhQc6ov6ttf%2B0kqyt2ftlZDV7OgD9OwidAbwdU6%2BU3bo3Hvw7JeR5Z9d3hPO5fQ7hIeQqiWdB5E29%2BDgD36FnJf%2BxzahtbffqjSVR6Hy3C88fd2k5U0mEZBu6CIzGA1Wv299hzXQUOvU7TTDM5hyeTEedXB9fqPYaZeejzGA1eP%2BKfAsixGdui1e72ciCxVPBg4cDC7%2B%2FLEBjqkATAVezEDFFSBdaH%2Bbk%2BLoTef9kKelrmo%2Bf8mRGJ7WLozPGjGv2HyAp1WjwG5b8vGkq673QIHjVee66afDAquoB0nnEag2fx0Vrsi%2Fqi4yjr9jQUl163w6VgFGAadX1KMG1303XOJdcNNNStfI7ee9RgMZcLrRcLUAmvMtEzXPdI9u%2FkifuWr9%2BcEB41z926MfI8aFzrhVSLYBDJgJ3khb0319G6V&X-Amz-Signature=374a071e6a18cda857ab5a66d4ac00fb9a7c2a8df26e81fe46f0b5319992d658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
