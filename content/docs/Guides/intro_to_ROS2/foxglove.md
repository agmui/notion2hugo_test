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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUR3UKAT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICW0Wl4aPhnjfcZ005wqkMYzJJEef5%2FqsfBS9FsgSZzGAiEAvcfcMvJDYQmNmL3sAMKbq6e0wlvWgcunTzFHUlgsbV8q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDPQNDtCh5pOdaGnlhyrcAxXyWlu6xUQOD9tzcujS20sPukiI%2FZx0cdZx6y9YQT58qsORQarCUPQTc44rSQQthihjfqZBejYBtSG1fhaemfvWLIy%2FQAPFNnFNgmrLkN3PjxIRffDkMCjKlkN2IYwXF1eYRAOJLR5sQ4w7niDclbuJbHlqZHFBP%2F3MxOJAzokE0harg1viGWumnrDWbZmNJbc1Egwj3ODPLDnBGo50dqY7MsVPCda0eciWmcg%2F2vFrrAPgUn%2F3eEhaI9B13tnBmvEam7xABQPYDBmMvr7UoBKZwy7oJsP82CxVY9IPpsHpUWpLyJPbiDK0Xu01sZuoO9FmgFdR8Ek%2BKUvZTz7G3xgZiIACRem6MOa%2FqLQ3Cgt3mCxk%2Fy9FUGbJMVIvreIMkywMKEuN%2FjE%2B%2B0ffgY12JCDjb2gdRiE9RS8GF6FcvMIwBPYlrplJKCdAegr2W2LtmTGMc7HCDeWaB5ibamjQoCCkVuG3IdjaXQ2qFhfC%2FEDA0zge%2BaqcN37IN4Ex5gddTAhkAm05pkUiOR3jsEfl7n8njIAbaqwkE0akNx3A0zfwxXvfdEEvwtyD26A2KnHu0B03P%2FoQ4fd7MeI%2BSg9D%2BO1dm7O%2FSkE3rMNcFLI%2FweBSO%2FG2nS0gvUPLyY4lMODG8cQGOqUBzJzO77757An6VWVzEjQMqlGwp6pplj%2Bdfc3dJYJm6Ah7xnSs%2FuTlk1jOtbn5NYDslKfp6SudfXImSeevL%2FR18P%2FRE9OF1Yz9JLZQNR1IixeSHhJCMtF5ouw0iB1MV3ebgHk08S8wY9cUu4J1SIBeFLfPkO7E9%2B3xjKjYCDjgkKB17Ovf15JtUNyJzLVx6UEq2C4YC4eJIMGI9RsHITj7od9%2FW7kH&X-Amz-Signature=df8f29ca60606552d25fb06b62b846b76e4465995f2fe89a1f6730773a5deb34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUR3UKAT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICW0Wl4aPhnjfcZ005wqkMYzJJEef5%2FqsfBS9FsgSZzGAiEAvcfcMvJDYQmNmL3sAMKbq6e0wlvWgcunTzFHUlgsbV8q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDPQNDtCh5pOdaGnlhyrcAxXyWlu6xUQOD9tzcujS20sPukiI%2FZx0cdZx6y9YQT58qsORQarCUPQTc44rSQQthihjfqZBejYBtSG1fhaemfvWLIy%2FQAPFNnFNgmrLkN3PjxIRffDkMCjKlkN2IYwXF1eYRAOJLR5sQ4w7niDclbuJbHlqZHFBP%2F3MxOJAzokE0harg1viGWumnrDWbZmNJbc1Egwj3ODPLDnBGo50dqY7MsVPCda0eciWmcg%2F2vFrrAPgUn%2F3eEhaI9B13tnBmvEam7xABQPYDBmMvr7UoBKZwy7oJsP82CxVY9IPpsHpUWpLyJPbiDK0Xu01sZuoO9FmgFdR8Ek%2BKUvZTz7G3xgZiIACRem6MOa%2FqLQ3Cgt3mCxk%2Fy9FUGbJMVIvreIMkywMKEuN%2FjE%2B%2B0ffgY12JCDjb2gdRiE9RS8GF6FcvMIwBPYlrplJKCdAegr2W2LtmTGMc7HCDeWaB5ibamjQoCCkVuG3IdjaXQ2qFhfC%2FEDA0zge%2BaqcN37IN4Ex5gddTAhkAm05pkUiOR3jsEfl7n8njIAbaqwkE0akNx3A0zfwxXvfdEEvwtyD26A2KnHu0B03P%2FoQ4fd7MeI%2BSg9D%2BO1dm7O%2FSkE3rMNcFLI%2FweBSO%2FG2nS0gvUPLyY4lMODG8cQGOqUBzJzO77757An6VWVzEjQMqlGwp6pplj%2Bdfc3dJYJm6Ah7xnSs%2FuTlk1jOtbn5NYDslKfp6SudfXImSeevL%2FR18P%2FRE9OF1Yz9JLZQNR1IixeSHhJCMtF5ouw0iB1MV3ebgHk08S8wY9cUu4J1SIBeFLfPkO7E9%2B3xjKjYCDjgkKB17Ovf15JtUNyJzLVx6UEq2C4YC4eJIMGI9RsHITj7od9%2FW7kH&X-Amz-Signature=bfccdbbd2e24eee19df6a4a8ab9022b34bd9a9d3e2823f360824cf15b0171287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
