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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OL473FA%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz7j8lujf1DdBbIY2%2Farjmm0B0%2BMmTLCSH%2FrvtCbTZ5QIgd99I5MSMAgHYurIUzwZ%2FMf0MGAbGjdnID27yNCmpXTwq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDMW92%2BSxTV8%2FNYSHRircA3PZPYAnoONd%2B4ORF2WqNY4P6VXQ70hv0ENbEDnb7PjbeavUhfSwH8od5wm%2BrHVycP1njwFCtBZA3%2FV10WatckF%2FBgIltfM4gb8RJXrUdI6dZrHRGUVFHYQVx8qgHd%2FNrhrsgSFRVsDqTyM52VWXqwKGfuR9DEUH6I91pCL0pz3ELAwD0CUA0baraypNjxOC3z%2FLC1w88z20qIHN3McUM1Bwl6lY82t49cmY4guTeyBeK2T56gLblKFCJzH4MCsTDqxzzCqH21tBDcECW94gfVdoOzQMq0GO32WyG8t4k689jVbTmaSvCJuvxYyPn4Sr0dkbxnspTvLn8jeF3rCm7bt%2FxqDnVhOGH3iPpIq5brIerWhZSq7bya0P3usBFIEGQ6MZkHK2iJSq8Y2x4UimJM9BcOhbN27XETfO%2BQLuYxnq%2FxE9WYdFeVjzQNXVgH1LaA9Br88VR37LsrsFfKMpFygW7s%2BWoJG9dsJilaiNrXwBrb90dte%2FRM51ywl5BC3MyHoBoAiOZEnXF%2F%2Fx8HgwB%2B0C%2BCuZgv89dUJU3YDaKxfrdLrlt7ZaPtg9fgpmfiwq%2FHG0kNVCVYHCA%2Bj%2Fhr0Q1QHiulSIwkW8G0qREPLguDtT%2FMRU1am5rkhnMOHVMIr1hscGOqUBdOoD6iS%2FGn5m6QHDd0qXKK0wvLZD%2FGOyz%2B9XluSr26jrT3rwjqhNYXRz%2BZOy0KbMFCmefQC545LhasUCvfmvMaVMeNr0jGWJeAVO9VxMKKndrZXmZ3KxKKlm0VzIYSmt4ouxc7TRjOpC1f2ONQ1vrSTjm5F%2BCaVp1tu11HZjFl9doE7Etr6LXiZXdqpTQ%2BBAlgOVx2E3uC7DDwN%2FMw9f%2BCLHvpqi&X-Amz-Signature=d179ed72b5c8dc787751a68512fa8156b5c947e8b0c189d8754b9440a6904bd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OL473FA%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz7j8lujf1DdBbIY2%2Farjmm0B0%2BMmTLCSH%2FrvtCbTZ5QIgd99I5MSMAgHYurIUzwZ%2FMf0MGAbGjdnID27yNCmpXTwq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDMW92%2BSxTV8%2FNYSHRircA3PZPYAnoONd%2B4ORF2WqNY4P6VXQ70hv0ENbEDnb7PjbeavUhfSwH8od5wm%2BrHVycP1njwFCtBZA3%2FV10WatckF%2FBgIltfM4gb8RJXrUdI6dZrHRGUVFHYQVx8qgHd%2FNrhrsgSFRVsDqTyM52VWXqwKGfuR9DEUH6I91pCL0pz3ELAwD0CUA0baraypNjxOC3z%2FLC1w88z20qIHN3McUM1Bwl6lY82t49cmY4guTeyBeK2T56gLblKFCJzH4MCsTDqxzzCqH21tBDcECW94gfVdoOzQMq0GO32WyG8t4k689jVbTmaSvCJuvxYyPn4Sr0dkbxnspTvLn8jeF3rCm7bt%2FxqDnVhOGH3iPpIq5brIerWhZSq7bya0P3usBFIEGQ6MZkHK2iJSq8Y2x4UimJM9BcOhbN27XETfO%2BQLuYxnq%2FxE9WYdFeVjzQNXVgH1LaA9Br88VR37LsrsFfKMpFygW7s%2BWoJG9dsJilaiNrXwBrb90dte%2FRM51ywl5BC3MyHoBoAiOZEnXF%2F%2Fx8HgwB%2B0C%2BCuZgv89dUJU3YDaKxfrdLrlt7ZaPtg9fgpmfiwq%2FHG0kNVCVYHCA%2Bj%2Fhr0Q1QHiulSIwkW8G0qREPLguDtT%2FMRU1am5rkhnMOHVMIr1hscGOqUBdOoD6iS%2FGn5m6QHDd0qXKK0wvLZD%2FGOyz%2B9XluSr26jrT3rwjqhNYXRz%2BZOy0KbMFCmefQC545LhasUCvfmvMaVMeNr0jGWJeAVO9VxMKKndrZXmZ3KxKKlm0VzIYSmt4ouxc7TRjOpC1f2ONQ1vrSTjm5F%2BCaVp1tu11HZjFl9doE7Etr6LXiZXdqpTQ%2BBAlgOVx2E3uC7DDwN%2FMw9f%2BCLHvpqi&X-Amz-Signature=d0e1493eb99469a4a83a7fc199b3c1aac1bd3ce94599206a54a700d4500a20a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
