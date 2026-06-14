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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHCLC2CX%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDYn996qSBUMOzkpFu0EPI%2FvIYfEM7brO%2Bczp3iXunTvAIhAIGAqU9166djoMVPt29OKiJ6lA%2FH3%2FlaoEuEGf%2F4jeQNKv8DCDsQABoMNjM3NDIzMTgzODA1IgxcWX7dDFbM0X5VBN8q3AMD%2FVlGjcCyaskQUYLg8EPMVpGQBvTdsdwL%2FvFfO%2FuCvyyDf8ndFF7hdH6eUhc7XfYjzvWQzeZQzoXpjHVUJ9If9WDpgCdxNjT%2B5J%2FitCbPobkwSoIZizG9JsrbBU1pSk6tdCotSg39xrVhhfmH%2FwkqDo5egdjNByszHRQeJZmn0uebrBGe3sepqujL9iQ4iliTT1jNnOoJtRKNXz%2FDxpB5qkeysdwz9j7fdNPhc64RzPiiTamCWLPN5UgsSezgMPEnyUGFRyx5iwM4s8M55xLbG4YflilMtek9ziBSCP65KD3F7CzJsC63U4ND3YfDLbvTvMZeZhSJyMZaYJVzlPfTUxA5UgJZegP7wQ3FhBYB0TyM2WQTc8cqKzLXAAUWsMZt1siwvtppi5%2FVVbe6QhkHZTsEDIBNAYDrURWt%2BCQTMUXT2ZjWfiY8GocGsMrvoQ%2Bj8em%2FXfcAwcjeFDAefZ5Fywo%2FSo5oOdsdr%2FU8ORLUswCvgfeFROedZYk9WYk%2B6f9SFa6t2SPvYT0ItcLu2t%2FcIQYD6dTw2eY3wiJsreFGX2BhNVhsQeMKYiICDHxXJieOlFgbG7%2BUQWDnAaNsJwML0RcnA5ozuEWLO3bgQF0WyqUD%2BkMiejdFAZWDWjDsm7jRBjqkAQTg0AbmPnPoFrXfkhjc3Iy781dr2bz5VdVHdl2BpvsY1IC%2FFI9GpV%2F1siiQFDwSpV0Z0xFLDEkcj4rxSYqooaJ32WNsgx%2B0LH3YxRzlZj0%2BZt74RwjHr6H7Hse9WLXAxDZzcxo2pfk4PBtmLb8KJSXiS1EgauIrv9rh7IWQjmaLAL5CqB06XMuX2cOaWFDDudBHBl3eOXphkOempa5p0l3Cr%2Fh4&X-Amz-Signature=b6feba3dff7f07410d0a65d895b736d92c58ce6413d240a447512696b1b9ccdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHCLC2CX%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDYn996qSBUMOzkpFu0EPI%2FvIYfEM7brO%2Bczp3iXunTvAIhAIGAqU9166djoMVPt29OKiJ6lA%2FH3%2FlaoEuEGf%2F4jeQNKv8DCDsQABoMNjM3NDIzMTgzODA1IgxcWX7dDFbM0X5VBN8q3AMD%2FVlGjcCyaskQUYLg8EPMVpGQBvTdsdwL%2FvFfO%2FuCvyyDf8ndFF7hdH6eUhc7XfYjzvWQzeZQzoXpjHVUJ9If9WDpgCdxNjT%2B5J%2FitCbPobkwSoIZizG9JsrbBU1pSk6tdCotSg39xrVhhfmH%2FwkqDo5egdjNByszHRQeJZmn0uebrBGe3sepqujL9iQ4iliTT1jNnOoJtRKNXz%2FDxpB5qkeysdwz9j7fdNPhc64RzPiiTamCWLPN5UgsSezgMPEnyUGFRyx5iwM4s8M55xLbG4YflilMtek9ziBSCP65KD3F7CzJsC63U4ND3YfDLbvTvMZeZhSJyMZaYJVzlPfTUxA5UgJZegP7wQ3FhBYB0TyM2WQTc8cqKzLXAAUWsMZt1siwvtppi5%2FVVbe6QhkHZTsEDIBNAYDrURWt%2BCQTMUXT2ZjWfiY8GocGsMrvoQ%2Bj8em%2FXfcAwcjeFDAefZ5Fywo%2FSo5oOdsdr%2FU8ORLUswCvgfeFROedZYk9WYk%2B6f9SFa6t2SPvYT0ItcLu2t%2FcIQYD6dTw2eY3wiJsreFGX2BhNVhsQeMKYiICDHxXJieOlFgbG7%2BUQWDnAaNsJwML0RcnA5ozuEWLO3bgQF0WyqUD%2BkMiejdFAZWDWjDsm7jRBjqkAQTg0AbmPnPoFrXfkhjc3Iy781dr2bz5VdVHdl2BpvsY1IC%2FFI9GpV%2F1siiQFDwSpV0Z0xFLDEkcj4rxSYqooaJ32WNsgx%2B0LH3YxRzlZj0%2BZt74RwjHr6H7Hse9WLXAxDZzcxo2pfk4PBtmLb8KJSXiS1EgauIrv9rh7IWQjmaLAL5CqB06XMuX2cOaWFDDudBHBl3eOXphkOempa5p0l3Cr%2Fh4&X-Amz-Signature=929f3d6bdbc53e799626718dd157508778d44acefdf629a6067438cc17f59aaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
