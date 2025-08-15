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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PAHUROV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQD6ix3rCSjaqOwVdywlQmvqorW4Zf99OMBwKUm8t6FmOAIgFNP3Zq25h7shSbfBOJo3MzqExrtQSxUiD1iZKfk2VOAq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHR1fiyImBkw3KAIoyrcA7r9jSJy2VJshT0pTSN3q0IxsRtMAyoL5eM8bGwvtrudfhXtwQFKtGllxUoJUeHLj9zNef3AJJMLB%2BqfNywl3uQH3KMROmIxXeouJJRHezog8iPtv7y0lsWJQO9RG1knq94L%2FumQggnF2epV4b2pfcThrsbDc3fBQegXle8l2NKttmtkhw8QdTowIxDF394W4bpHzC84FM0bf64oq7brLw1sG%2BK1Y1r6Far4YoHrFQ8bD7La%2BslDBf9cRo3ztSzEoXVl9zSaLZIiLBBzj%2B6NN%2Fj68yM3zaPbRY%2FLHxjC6oGVyR1E0WzLPHFpvohy9KXwhfuhOVPS94cn6aj7OsKhBW9u6hUlSEyg2dHxXAoq2fPzAFMQeNaIv9gdF15rrW6I%2BIwVuR4UIBi52v91eDGUzNJKIBN5Oolz1qEdlflY64pjUchFNCbvhQH2ZcMjxaU9Iiv%2BFoM%2BiPHg3ZVQvOLDMu9%2BMD%2FHmkblETeoyq3SQ8U7FivdFU9OA81r5Irs%2FgJ1ridZbbC6jYqoyMo0prncZDOAHFEfR6o%2FXwiD5tb6%2B%2FnNrSjXY7d9NdicrkU%2FNEyVyXJk6VdAEvli5H1yaSmfLhiA8BsBYlZ9%2FAGRzbgkV%2BKhGClE2dOiU1gyVoT9MKS1%2FcQGOqUBbCyWppKteZ2WfU13jJeys0odTaxnNqiojwPi%2BpN7IF%2FY637L3GUfiiLk28h5qpoXztnri4fD11ci3Z2PnBpuqeMEzWLkh5gr%2F6ITYRP0eEXARTR3HqquLjHYSj%2FR49rFZqdZ8jcTDQC8%2FNCJC761JezZMv26BfgCP9muP4edu0rgSdWjNQ5L3fnhidlkDIbsDDmgNz5vEpvJNKGGYywDK0d2W6gZ&X-Amz-Signature=8c74e11cecb245c10e828234262d4cc72d93cc4025f39f51962f357bb1c3beee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PAHUROV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQD6ix3rCSjaqOwVdywlQmvqorW4Zf99OMBwKUm8t6FmOAIgFNP3Zq25h7shSbfBOJo3MzqExrtQSxUiD1iZKfk2VOAq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHR1fiyImBkw3KAIoyrcA7r9jSJy2VJshT0pTSN3q0IxsRtMAyoL5eM8bGwvtrudfhXtwQFKtGllxUoJUeHLj9zNef3AJJMLB%2BqfNywl3uQH3KMROmIxXeouJJRHezog8iPtv7y0lsWJQO9RG1knq94L%2FumQggnF2epV4b2pfcThrsbDc3fBQegXle8l2NKttmtkhw8QdTowIxDF394W4bpHzC84FM0bf64oq7brLw1sG%2BK1Y1r6Far4YoHrFQ8bD7La%2BslDBf9cRo3ztSzEoXVl9zSaLZIiLBBzj%2B6NN%2Fj68yM3zaPbRY%2FLHxjC6oGVyR1E0WzLPHFpvohy9KXwhfuhOVPS94cn6aj7OsKhBW9u6hUlSEyg2dHxXAoq2fPzAFMQeNaIv9gdF15rrW6I%2BIwVuR4UIBi52v91eDGUzNJKIBN5Oolz1qEdlflY64pjUchFNCbvhQH2ZcMjxaU9Iiv%2BFoM%2BiPHg3ZVQvOLDMu9%2BMD%2FHmkblETeoyq3SQ8U7FivdFU9OA81r5Irs%2FgJ1ridZbbC6jYqoyMo0prncZDOAHFEfR6o%2FXwiD5tb6%2B%2FnNrSjXY7d9NdicrkU%2FNEyVyXJk6VdAEvli5H1yaSmfLhiA8BsBYlZ9%2FAGRzbgkV%2BKhGClE2dOiU1gyVoT9MKS1%2FcQGOqUBbCyWppKteZ2WfU13jJeys0odTaxnNqiojwPi%2BpN7IF%2FY637L3GUfiiLk28h5qpoXztnri4fD11ci3Z2PnBpuqeMEzWLkh5gr%2F6ITYRP0eEXARTR3HqquLjHYSj%2FR49rFZqdZ8jcTDQC8%2FNCJC761JezZMv26BfgCP9muP4edu0rgSdWjNQ5L3fnhidlkDIbsDDmgNz5vEpvJNKGGYywDK0d2W6gZ&X-Amz-Signature=853e1e8d80f0217f4e206e91ebcdafd16885d62b0b982ad8d41084591ef67294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
