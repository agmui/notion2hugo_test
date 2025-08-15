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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JMKTDIE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIA9OfFxnMR6QutpJL3KdnvQsQnPzIKlsTG6%2Bv9fX1NuoAiAd9kFS8lG60Yn0ZHXNHTnhbhW5XrYNjq4cQ7UuRsSPESr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIM7SsR7LChpR6mWWGwKtwDj%2BgBSFIDKJ3lGYeykrgMfqqxgAB8f0aBNuEXil0rePgdppRlpTAxXR11Xgyxow0ZFDh%2F9Dx%2F8G%2BRkmr%2F8DaPYUFhLh3iAz33etmhV9S1VT06uaVGAn5FTsoIY37w0VxX64bFLyIlQrDHd8vCuloWC%2F5I6bn3hSvrxHuMqFGnueW8zO8%2F%2FtUElmbyS0Ylzq2kSm3UUEBgz%2BqFteJ4ZJ8knhpHa5EY2lwyFt13a%2FJSLg%2Bcd3%2FRA7nGBv400esO5tigAoh1%2Bw39CIfsI0i7iD%2BdZ3WJgbnGfl5ITek1F1qXefOxt6x4gMU5Sqau48QFeCP9iSgZmd%2F88IrhA6eEgFwooBQMy09u0BRA6wAtnA7oG71ehMcsbM5IMFYv4bvRVaqbqELVVS%2FUvNa0SMTqKc00XAONO7vcU%2BHptbiy215xb%2FWfDYvRT%2Fx4Y1zwNfsZtimBFgZq1lVeiZTs7s%2Fitld4RN56%2Bbd%2B%2Bo%2BQQX0ifAPxZqQnyHL9zvGZn0BcZfFtB0e5%2Bzi3iQwJp8BpAFEy6nieLc%2BIyN0BwvpebaeiVGl07GxfcExxzc3phdbY0ycJIgyrqYYjJ19K8umla0Uxa%2FhrqaCZXonz24%2BlulNarAhvj46hG79Y62%2BHrfpYklgwsvz5xAY6pgGv0oV6PvDYLsKgapgKjaU5L6NuQ3Xqm6yB4jI7N4BoYXwy55GL3biwYlvrW6EcF%2F91YM04sXmHBQwvksSyO6vCRnZ%2BcS9npxotwNVEBVS9IlcdT%2FZedEu7Moht40qsgonxXXrobVxpuogF9pLniu%2F%2B8ElQMku%2F44QqihMYa7UbX%2B30gWwJnOAlA4B0RD5qG8TGQWRjOhp6bVpIPerqUygUbMqSKao8&X-Amz-Signature=69266892b5e47659e9e43a7a7e15bdd6980dbaa4d87ce079dddffd6601db31a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JMKTDIE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIA9OfFxnMR6QutpJL3KdnvQsQnPzIKlsTG6%2Bv9fX1NuoAiAd9kFS8lG60Yn0ZHXNHTnhbhW5XrYNjq4cQ7UuRsSPESr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIM7SsR7LChpR6mWWGwKtwDj%2BgBSFIDKJ3lGYeykrgMfqqxgAB8f0aBNuEXil0rePgdppRlpTAxXR11Xgyxow0ZFDh%2F9Dx%2F8G%2BRkmr%2F8DaPYUFhLh3iAz33etmhV9S1VT06uaVGAn5FTsoIY37w0VxX64bFLyIlQrDHd8vCuloWC%2F5I6bn3hSvrxHuMqFGnueW8zO8%2F%2FtUElmbyS0Ylzq2kSm3UUEBgz%2BqFteJ4ZJ8knhpHa5EY2lwyFt13a%2FJSLg%2Bcd3%2FRA7nGBv400esO5tigAoh1%2Bw39CIfsI0i7iD%2BdZ3WJgbnGfl5ITek1F1qXefOxt6x4gMU5Sqau48QFeCP9iSgZmd%2F88IrhA6eEgFwooBQMy09u0BRA6wAtnA7oG71ehMcsbM5IMFYv4bvRVaqbqELVVS%2FUvNa0SMTqKc00XAONO7vcU%2BHptbiy215xb%2FWfDYvRT%2Fx4Y1zwNfsZtimBFgZq1lVeiZTs7s%2Fitld4RN56%2Bbd%2B%2Bo%2BQQX0ifAPxZqQnyHL9zvGZn0BcZfFtB0e5%2Bzi3iQwJp8BpAFEy6nieLc%2BIyN0BwvpebaeiVGl07GxfcExxzc3phdbY0ycJIgyrqYYjJ19K8umla0Uxa%2FhrqaCZXonz24%2BlulNarAhvj46hG79Y62%2BHrfpYklgwsvz5xAY6pgGv0oV6PvDYLsKgapgKjaU5L6NuQ3Xqm6yB4jI7N4BoYXwy55GL3biwYlvrW6EcF%2F91YM04sXmHBQwvksSyO6vCRnZ%2BcS9npxotwNVEBVS9IlcdT%2FZedEu7Moht40qsgonxXXrobVxpuogF9pLniu%2F%2B8ElQMku%2F44QqihMYa7UbX%2B30gWwJnOAlA4B0RD5qG8TGQWRjOhp6bVpIPerqUygUbMqSKao8&X-Amz-Signature=3b06f5c5011b7acc4831c469bb69118f7a4fef0a9881728468f7e93098d11a88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
