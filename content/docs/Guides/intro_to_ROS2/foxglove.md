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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NCFG4HQ%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBci7rcbVLTF%2BDRxTHIxHcCHjXfYW28DmkvFqdFAwaoDAiEAi46xTANFBnwAdau9P5PCGQGipogyvTCWoYbTJCloOI4qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3E8hdUmyD8gOZMUSrcA3LxkC4InRbK0tr9EjOZKUrHDFxynP2pinmpTWbLdrwmaumY5h32U1kIbqgMDzFYT%2BOgtQupUBrHZIY11UvMZZBb7ThkN8h6trPf1FqS3%2FrpruLd1lNHdu6NqkU9E0Ttn3F0qwZsU%2B7%2BWhh1s8D3JDBCRQQpOvYytmW53a3O7Rym6b83OJ0ZJ9UNdQu61xT2qP4jlJi5%2FoQFbJnPQp7hIpALz0lCpJnCgS5B46Zb4c48Mv%2F4dbXQ0S%2FI97NQK%2FtEymeSTLHOi06%2B39utOjYvyEL2wAvfgMmaSYcut%2Bda1TLTeR3KgWKGjjLVnoyD0Urc6iylb8tPkUCcmPvMju8xasZ2wu7NUjfTG6GCzfskGch0%2FpdlKUIDF%2FR3eoWq6fepopWkBAawacw1GzdrCZPRt37312iJv7FS1NLEAXjHo93wvXJIg%2B3ukeSsK5WeWXPwoHgJueJ6iXM7Ynjm9c1h%2BdZ2SXi4iZpJ4zC63%2BkY7sNBJWMSy9gY3tUPjI%2F6zaBzn4IqtZR2ZR1cLzGVxQLcaDcsFHUtte2mGMpJ4p5zKRghNHkU%2Ba8P13IOYlXjRyu6oS6072G02wpAPSnn7KWfNp2hY%2F2M72wNbe0BuKBNpgv1raAAoMHkNgq%2FIeWoMKuvntQGOqUBMPzlr4jgd%2FSVuy8xw1oWwzRTHKmwfpbJELkcySYNnLVA8Sdvbakfca8kHRB3Pqy1BAWAhzkTmpJGmA62a%2B1DZUo%2BVlBQopJaMUY5YJqyo5Dg7%2Bx653S8EwfOaR4RYGv%2BX%2Byzbaf2Jguo3haxu4rykX01IHOB3H4sTzoD16VMoSUOZzEbR9Kj6RcuyyKwrgSQQTICE0NIdCsfuM5lT2L%2BMT48yhUE&X-Amz-Signature=5b280d3a6d337bc62fddcc70dee6ba376735148627a3ba6bc0fec391f1d340a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NCFG4HQ%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBci7rcbVLTF%2BDRxTHIxHcCHjXfYW28DmkvFqdFAwaoDAiEAi46xTANFBnwAdau9P5PCGQGipogyvTCWoYbTJCloOI4qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3E8hdUmyD8gOZMUSrcA3LxkC4InRbK0tr9EjOZKUrHDFxynP2pinmpTWbLdrwmaumY5h32U1kIbqgMDzFYT%2BOgtQupUBrHZIY11UvMZZBb7ThkN8h6trPf1FqS3%2FrpruLd1lNHdu6NqkU9E0Ttn3F0qwZsU%2B7%2BWhh1s8D3JDBCRQQpOvYytmW53a3O7Rym6b83OJ0ZJ9UNdQu61xT2qP4jlJi5%2FoQFbJnPQp7hIpALz0lCpJnCgS5B46Zb4c48Mv%2F4dbXQ0S%2FI97NQK%2FtEymeSTLHOi06%2B39utOjYvyEL2wAvfgMmaSYcut%2Bda1TLTeR3KgWKGjjLVnoyD0Urc6iylb8tPkUCcmPvMju8xasZ2wu7NUjfTG6GCzfskGch0%2FpdlKUIDF%2FR3eoWq6fepopWkBAawacw1GzdrCZPRt37312iJv7FS1NLEAXjHo93wvXJIg%2B3ukeSsK5WeWXPwoHgJueJ6iXM7Ynjm9c1h%2BdZ2SXi4iZpJ4zC63%2BkY7sNBJWMSy9gY3tUPjI%2F6zaBzn4IqtZR2ZR1cLzGVxQLcaDcsFHUtte2mGMpJ4p5zKRghNHkU%2Ba8P13IOYlXjRyu6oS6072G02wpAPSnn7KWfNp2hY%2F2M72wNbe0BuKBNpgv1raAAoMHkNgq%2FIeWoMKuvntQGOqUBMPzlr4jgd%2FSVuy8xw1oWwzRTHKmwfpbJELkcySYNnLVA8Sdvbakfca8kHRB3Pqy1BAWAhzkTmpJGmA62a%2B1DZUo%2BVlBQopJaMUY5YJqyo5Dg7%2Bx653S8EwfOaR4RYGv%2BX%2Byzbaf2Jguo3haxu4rykX01IHOB3H4sTzoD16VMoSUOZzEbR9Kj6RcuyyKwrgSQQTICE0NIdCsfuM5lT2L%2BMT48yhUE&X-Amz-Signature=e9b49aba01ae1286474f42a306930db89aafdb4f31ccc8ca9ef7c48f5272a824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
