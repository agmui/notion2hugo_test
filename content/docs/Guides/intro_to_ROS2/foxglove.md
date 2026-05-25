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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNB5PNZZ%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3znjeXz%2BVzrIfeVhFqe%2BGRhUVH6c%2F2VEkYSnNBVjjZAiEAhD%2FbdWJlA05QCkIaZ5sAd2begbV9LSF%2FlRY6ebUWzm0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMZp83QaTkBlbboiSircA%2BuzJ6lVjDjNIHzaEAApb2rLrNyr6ghhNzf%2B6d5wuvbFrbejCHSSFyDn310N4JKU%2BDcJ7CfzTnRi5%2B1jAfKRuwQXs%2FbqVttHv80I9SbEonPmeN8mVKMcgxJZHl%2Bd4AorOIiQu11oI2YgkjnaMQeYbTXivWgaJdfLkcs231KoyjQn2YLVx0lvRNinAJGsWrTcMXr%2Bj1nk7ylL3cho6OSF3y%2F0sNz7K6SgOQhasScPV4k24CirA%2Bz1CX18H6IllMV6t0%2FVB%2FduFudO%2FtqXZkwdnpLZZQF9BLJagt2pgJYUbOGDneZ7AE4hpSAGdjQUMBGrKMIx6%2FJqexpwN0fb4Qdk79gOZP9KB8vBlOZAjhfaY6y4vsUjUgO%2F8RXCgvk6XMW82HQe0FBNxP5MpNi6n6pZmDmEgKg%2F0YVo9Pb%2BJE8sQgWP3coHY%2BxtrCxtY6GVrbhGL5%2FAGTuyTDfqsVlUDUygGDbFhwjhUE7CrytRgUNWKXwHwlHNx04yHBp0GG95YP09omEUbH37ZBo3kCovb26spnSlTT53y%2FAHqxX2Lg3ojMLxWAzYDvI4j7YtwncLR4ZXhLPIW8uBz6NBr3gBM29Tr3UGG9zsbVP5yZsNeNTwE3pO5Mxzk6GHFS8LuVFzMOSyztAGOqUBGCvUVf3IUOT9dICFnDa59xbBhhzk5tMY%2BTwzxzSWGhDq2R181YqwG3zDY5NZ%2BUhw3jIsJlRit9h0%2Fx3smFMmf1HcnsZNLFpBXt%2FAuTxaJIuSee1Z8jZTGdBJxJYLx0V037JeHnS%2Fj%2FkzXzTXjn5hbVV24XBOTtObI9l1gwhSq9bkkbiexxCD4Bhh%2FSBX486EWdZ9H1xfA5pyW2Fwgsq%2FGZ762w86&X-Amz-Signature=68cd2d08c3f06c66caf423bad9db04e3e34fa306d797d9634ee9eed1f32b79a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNB5PNZZ%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3znjeXz%2BVzrIfeVhFqe%2BGRhUVH6c%2F2VEkYSnNBVjjZAiEAhD%2FbdWJlA05QCkIaZ5sAd2begbV9LSF%2FlRY6ebUWzm0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMZp83QaTkBlbboiSircA%2BuzJ6lVjDjNIHzaEAApb2rLrNyr6ghhNzf%2B6d5wuvbFrbejCHSSFyDn310N4JKU%2BDcJ7CfzTnRi5%2B1jAfKRuwQXs%2FbqVttHv80I9SbEonPmeN8mVKMcgxJZHl%2Bd4AorOIiQu11oI2YgkjnaMQeYbTXivWgaJdfLkcs231KoyjQn2YLVx0lvRNinAJGsWrTcMXr%2Bj1nk7ylL3cho6OSF3y%2F0sNz7K6SgOQhasScPV4k24CirA%2Bz1CX18H6IllMV6t0%2FVB%2FduFudO%2FtqXZkwdnpLZZQF9BLJagt2pgJYUbOGDneZ7AE4hpSAGdjQUMBGrKMIx6%2FJqexpwN0fb4Qdk79gOZP9KB8vBlOZAjhfaY6y4vsUjUgO%2F8RXCgvk6XMW82HQe0FBNxP5MpNi6n6pZmDmEgKg%2F0YVo9Pb%2BJE8sQgWP3coHY%2BxtrCxtY6GVrbhGL5%2FAGTuyTDfqsVlUDUygGDbFhwjhUE7CrytRgUNWKXwHwlHNx04yHBp0GG95YP09omEUbH37ZBo3kCovb26spnSlTT53y%2FAHqxX2Lg3ojMLxWAzYDvI4j7YtwncLR4ZXhLPIW8uBz6NBr3gBM29Tr3UGG9zsbVP5yZsNeNTwE3pO5Mxzk6GHFS8LuVFzMOSyztAGOqUBGCvUVf3IUOT9dICFnDa59xbBhhzk5tMY%2BTwzxzSWGhDq2R181YqwG3zDY5NZ%2BUhw3jIsJlRit9h0%2Fx3smFMmf1HcnsZNLFpBXt%2FAuTxaJIuSee1Z8jZTGdBJxJYLx0V037JeHnS%2Fj%2FkzXzTXjn5hbVV24XBOTtObI9l1gwhSq9bkkbiexxCD4Bhh%2FSBX486EWdZ9H1xfA5pyW2Fwgsq%2FGZ762w86&X-Amz-Signature=3e2603df7ed091f1a4312bfc818039035c78ed849eefaec76691e6344d3f35d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
