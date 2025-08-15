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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFKWJY34%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDV1S7hzI6hqDtQXdLqwEi48miIPx%2BLus47MgoWlwbrtgIhAI7N7ENhKAQrWkQngnUAERZSm6%2B3pN2TQZHOxKtbiElpKv8DCGIQABoMNjM3NDIzMTgzODA1IgxPO7STSuhKBbVkI6kq3AO6RJc5RMohk0B1Xyg4S%2BVXo7WC%2BUzzlIyFufb5CXo7712oIQhahtwixN6DVTTXeg4bjwGk3LWs4opnbHpordJvGt4s9AUAi%2FlANwV%2B6GgUNWsKX%2FATq48RwHHwHgQyNg5Ak33sgAyjzIZd%2BHfbIjNJMN2cDVDgPlmqbs%2FMYFWe5R8hHVYbRvHCKf16hCuE%2FFZk52Hdmvs%2Bn1ucx4yJJDMEyxnU0cZJmiPu09SrPq2BgQIdwf3saLiegthLtb4FlYi62mr5X8XposJF2OqD5st3xKwOZNbmuHC0lM68%2Bfztv0SuOHiGm5oNgb0QvA%2FDELZ4mKDUk8HtK1%2F%2ByODu64zBC1UkJaNhnzIIrzIz3QLifZdA4vrW9P5I79L%2F1kUfFSMiNd4LloQxaixum2YIF9xjqnR82ZFT7SeXSdaksKHjD4Tlu%2BbgmnxayvBC2vDB3YbACIorWIbsgXhSZeR%2FhsFPwMX1KfKNrKGpLUb5P2EEgLopTBW7zgcmyKO4sx%2BEO7KtZZnuTLGsCvNvXMWq2GAcKucMSobVE8AadTcHcSw6IDgSCqOjdchFi%2FZjS6vnTD5qhi766%2FLzEloCTdfDg02jPqNdFIFlhwNVrPn8d%2FCt6SKYMrm8nED3Y0RCgTDp2v3EBjqkAWD4ttZYGGGR6dhntMkB3DxhaDSk36LL%2F1V05pXEpg7LwKNbX9e5Nn0diLQ1godACCOUCoXpErZhQmjX2a4W6vl53z11FmtN76gYQPgTbJXJkl3tFms8leDw3zP4BuhCVlFWcWDZsi6bdYYEa%2BP9NCzCc%2FQU%2FDg3bSaNFHj1Lo6kcZSRPq5B%2FgLQ4WeNK8ZjfheAHDQ1MCYkhyjXgg3juAvgUS6f&X-Amz-Signature=7e844b923cd132eeb94243d802a9b0a20a33bf52894ebc447f954d656d1f573b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFKWJY34%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDV1S7hzI6hqDtQXdLqwEi48miIPx%2BLus47MgoWlwbrtgIhAI7N7ENhKAQrWkQngnUAERZSm6%2B3pN2TQZHOxKtbiElpKv8DCGIQABoMNjM3NDIzMTgzODA1IgxPO7STSuhKBbVkI6kq3AO6RJc5RMohk0B1Xyg4S%2BVXo7WC%2BUzzlIyFufb5CXo7712oIQhahtwixN6DVTTXeg4bjwGk3LWs4opnbHpordJvGt4s9AUAi%2FlANwV%2B6GgUNWsKX%2FATq48RwHHwHgQyNg5Ak33sgAyjzIZd%2BHfbIjNJMN2cDVDgPlmqbs%2FMYFWe5R8hHVYbRvHCKf16hCuE%2FFZk52Hdmvs%2Bn1ucx4yJJDMEyxnU0cZJmiPu09SrPq2BgQIdwf3saLiegthLtb4FlYi62mr5X8XposJF2OqD5st3xKwOZNbmuHC0lM68%2Bfztv0SuOHiGm5oNgb0QvA%2FDELZ4mKDUk8HtK1%2F%2ByODu64zBC1UkJaNhnzIIrzIz3QLifZdA4vrW9P5I79L%2F1kUfFSMiNd4LloQxaixum2YIF9xjqnR82ZFT7SeXSdaksKHjD4Tlu%2BbgmnxayvBC2vDB3YbACIorWIbsgXhSZeR%2FhsFPwMX1KfKNrKGpLUb5P2EEgLopTBW7zgcmyKO4sx%2BEO7KtZZnuTLGsCvNvXMWq2GAcKucMSobVE8AadTcHcSw6IDgSCqOjdchFi%2FZjS6vnTD5qhi766%2FLzEloCTdfDg02jPqNdFIFlhwNVrPn8d%2FCt6SKYMrm8nED3Y0RCgTDp2v3EBjqkAWD4ttZYGGGR6dhntMkB3DxhaDSk36LL%2F1V05pXEpg7LwKNbX9e5Nn0diLQ1godACCOUCoXpErZhQmjX2a4W6vl53z11FmtN76gYQPgTbJXJkl3tFms8leDw3zP4BuhCVlFWcWDZsi6bdYYEa%2BP9NCzCc%2FQU%2FDg3bSaNFHj1Lo6kcZSRPq5B%2FgLQ4WeNK8ZjfheAHDQ1MCYkhyjXgg3juAvgUS6f&X-Amz-Signature=eb57832709548a88cbba319a65deb3d5ec5e8a27761504a713e6b9f3215d1707&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
