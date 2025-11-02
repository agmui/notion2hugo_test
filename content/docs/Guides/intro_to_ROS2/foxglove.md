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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TYNPXJA%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCsoyNPd1Civu2a051ZvWD3ECTLtp2FBy5zvMEBWPQUEQIhAIjMmWYK2A0DkIEoEhCuHF8WF8g1d%2BPcPc%2B%2BhISyRqXxKv8DCDsQABoMNjM3NDIzMTgzODA1IgxdwnYDNWJPZ3AIrVEq3ANiSttDnTk0p1Dx7HJzEk3Vr%2F4YfaKUXA6xDkYKScnH0ABQjy5BeKs8XpVzuyGKAA%2B1MQi3rV%2BGtLGk%2FzCS%2Fru%2BVxfTGpjsTukomqrypy5pCpEpU5gn%2BYApTF7zPiIWPst1cp3qvSyLIqnDKFxqhaykQ7H7YDNcbZvDDeMLhWgPGHI74qAsxrXd9N8ZkL1GYJ1TlpR%2FqHGu8%2FgeFvVXA5ou8cojopstkEyoI6YwPl5XV0en8K8rMX9CQGC6OG0oc05XWH73OYtoSghnhHLBsHk3U7GFaWou4OfSOEKqHlizBaCMJDLXI075FOnnpH2GsxEnEAsUawN%2Bb4GsS%2BuxBHvI2LVXoIZQxRAxfb3k9sJHJhnL2M75JSKNlOaD%2B5Urmuf6ORZJuV8zP9bP2ZZEVfvpT1US4U1NAVvH61VXnVEALU0WyF3vTzGXRFucujmOHyV1NTXNq0iAIJz1WO55VoogximlDbsUV%2BESbw43R7a4BZ6UBYF71O4ik62HcCcY3QynrSxb4pTrW8HH4FmNtbxDuCzVvyX0J06xgEKbqFoshmd08lWugdkMOaJ%2BCvFud%2FbOXJ%2BZUqO82NDGOsKpwRaPWzQ7n8sS3fsMkcQ5eiabRAeOO%2BIXHqjmR0Y55TDJ55rIBjqkAYUjdAppJHLy6ye%2BtQnHyHkV7JpxqgcBrrGZ%2FZPCmVIYC1ioq23OHg%2BligE4cIyjzwGa%2BBqTUZLLR3m9%2Fyc%2FkidFrVMD3C7jB%2B1OTowjAxdMyO1NSZvCtK5PSJivOxkYjwvvM2IqvWgvgUfp44IihWGNqlB%2BtpIjyhzl4MJgOg%2BVqkkNNO0JHWzUOtu%2BOStr6Z02nbrnT%2FNRPRXRP0%2FY%2BWRP8HCP&X-Amz-Signature=ce5a596db6e42d04327e341be07f502bcdb0cabc154aa1bab81d6dfb7ce177a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TYNPXJA%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCsoyNPd1Civu2a051ZvWD3ECTLtp2FBy5zvMEBWPQUEQIhAIjMmWYK2A0DkIEoEhCuHF8WF8g1d%2BPcPc%2B%2BhISyRqXxKv8DCDsQABoMNjM3NDIzMTgzODA1IgxdwnYDNWJPZ3AIrVEq3ANiSttDnTk0p1Dx7HJzEk3Vr%2F4YfaKUXA6xDkYKScnH0ABQjy5BeKs8XpVzuyGKAA%2B1MQi3rV%2BGtLGk%2FzCS%2Fru%2BVxfTGpjsTukomqrypy5pCpEpU5gn%2BYApTF7zPiIWPst1cp3qvSyLIqnDKFxqhaykQ7H7YDNcbZvDDeMLhWgPGHI74qAsxrXd9N8ZkL1GYJ1TlpR%2FqHGu8%2FgeFvVXA5ou8cojopstkEyoI6YwPl5XV0en8K8rMX9CQGC6OG0oc05XWH73OYtoSghnhHLBsHk3U7GFaWou4OfSOEKqHlizBaCMJDLXI075FOnnpH2GsxEnEAsUawN%2Bb4GsS%2BuxBHvI2LVXoIZQxRAxfb3k9sJHJhnL2M75JSKNlOaD%2B5Urmuf6ORZJuV8zP9bP2ZZEVfvpT1US4U1NAVvH61VXnVEALU0WyF3vTzGXRFucujmOHyV1NTXNq0iAIJz1WO55VoogximlDbsUV%2BESbw43R7a4BZ6UBYF71O4ik62HcCcY3QynrSxb4pTrW8HH4FmNtbxDuCzVvyX0J06xgEKbqFoshmd08lWugdkMOaJ%2BCvFud%2FbOXJ%2BZUqO82NDGOsKpwRaPWzQ7n8sS3fsMkcQ5eiabRAeOO%2BIXHqjmR0Y55TDJ55rIBjqkAYUjdAppJHLy6ye%2BtQnHyHkV7JpxqgcBrrGZ%2FZPCmVIYC1ioq23OHg%2BligE4cIyjzwGa%2BBqTUZLLR3m9%2Fyc%2FkidFrVMD3C7jB%2B1OTowjAxdMyO1NSZvCtK5PSJivOxkYjwvvM2IqvWgvgUfp44IihWGNqlB%2BtpIjyhzl4MJgOg%2BVqkkNNO0JHWzUOtu%2BOStr6Z02nbrnT%2FNRPRXRP0%2FY%2BWRP8HCP&X-Amz-Signature=b29c35628ffaf63b9df4a42ce55aa94b38b8383a0b6b09340c8a526822cc59b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
