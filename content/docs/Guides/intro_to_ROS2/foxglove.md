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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFO56HGN%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJZLeHtR4xXDblxXzgoFk7siqWv3agwGcn9FfWLvg3sAiEAranbQk2k8C1SKjLHnLVKD%2F4AmjMIdegPJmZyr8TJ09oqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKElH9qhJzdvu%2BsBpSrcAyIQs%2FSoURLhckdMgcgHjCE8%2FQvzlQEtyHxAMcfOMQJneYrmyrfE3%2BjXdyGDSkSrSlO5v6ZdwZgGuSoCtSLB8ZUaLRUMw7wCPMfkKIXnwdjNDjW56eYShEsYEPviVb3AJgXHrB%2Br0cijs7KF9y5AwxCFDOWs8GjNgd7ykdCBpMB5G1JD3EU06l%2BituMnMZ7o%2BCMN6FuxbD0ex4UKTKUXo2dTMn2h4csDoG8Fzyde8fyamukQyEPMB30BpedXesK6sjObYujbJkpSelet6BpwHJGsOYgUnuTXFUsDGxLQO4hcRkwpmdl%2F%2BiOPJP4XdEjuhnrBZa0bZy4hWygTW3BHrEql%2BpZrubiswqfDl94htdbPezoShetnSI0LCuUEFr8oHR%2BkOZP7OUpE3Z5Dje1CvpI%2FIjY5kTYAQEJfiFj2dPIKfswfev6nq66TVd%2FsqYlPy6i1K8EAJXqnXf0rE7SW868jJnHDcJHpz9U2dl8OhDHvMVLLaWT5GWyxpixKNgaehzA5qF1fMyUlt4l%2F8b4f504b3Qjba%2BWXvca1LMnDCiLqRBFa55j%2FAaXdf79A18dRb8iYMvxfg52YaaXhDrbZlW3mCgs5FiPwJq%2BCNol%2FxJcbl%2FRBOpiNun9A3niDMNW2tdMGOqUBWVDcG75Mpl8BTVSX29wDMrDkzsDWsrNyNQJTHLGQkwZmzZ5hVVFFJgtcWFw%2F1uER%2BDTekj0%2FEZ%2FMpWr8Pd5ku9k8I7apz%2FNNf9ZFVU19YLO8LGyvAZD7cpZcXUcWwEcQOIh7%2BhuRWq9k4uVdXBPoVPbX0pnDd5Dp6mDquzeGPN5o6DqT9Meo4rMDsufcuqP4NxBB67GXME46joNtEMnLPY0qr80k&X-Amz-Signature=17bf8fb6e593cb466731c39396a7ffd5459249ecaff1a8fac90e6923a0dc962c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFO56HGN%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJZLeHtR4xXDblxXzgoFk7siqWv3agwGcn9FfWLvg3sAiEAranbQk2k8C1SKjLHnLVKD%2F4AmjMIdegPJmZyr8TJ09oqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKElH9qhJzdvu%2BsBpSrcAyIQs%2FSoURLhckdMgcgHjCE8%2FQvzlQEtyHxAMcfOMQJneYrmyrfE3%2BjXdyGDSkSrSlO5v6ZdwZgGuSoCtSLB8ZUaLRUMw7wCPMfkKIXnwdjNDjW56eYShEsYEPviVb3AJgXHrB%2Br0cijs7KF9y5AwxCFDOWs8GjNgd7ykdCBpMB5G1JD3EU06l%2BituMnMZ7o%2BCMN6FuxbD0ex4UKTKUXo2dTMn2h4csDoG8Fzyde8fyamukQyEPMB30BpedXesK6sjObYujbJkpSelet6BpwHJGsOYgUnuTXFUsDGxLQO4hcRkwpmdl%2F%2BiOPJP4XdEjuhnrBZa0bZy4hWygTW3BHrEql%2BpZrubiswqfDl94htdbPezoShetnSI0LCuUEFr8oHR%2BkOZP7OUpE3Z5Dje1CvpI%2FIjY5kTYAQEJfiFj2dPIKfswfev6nq66TVd%2FsqYlPy6i1K8EAJXqnXf0rE7SW868jJnHDcJHpz9U2dl8OhDHvMVLLaWT5GWyxpixKNgaehzA5qF1fMyUlt4l%2F8b4f504b3Qjba%2BWXvca1LMnDCiLqRBFa55j%2FAaXdf79A18dRb8iYMvxfg52YaaXhDrbZlW3mCgs5FiPwJq%2BCNol%2FxJcbl%2FRBOpiNun9A3niDMNW2tdMGOqUBWVDcG75Mpl8BTVSX29wDMrDkzsDWsrNyNQJTHLGQkwZmzZ5hVVFFJgtcWFw%2F1uER%2BDTekj0%2FEZ%2FMpWr8Pd5ku9k8I7apz%2FNNf9ZFVU19YLO8LGyvAZD7cpZcXUcWwEcQOIh7%2BhuRWq9k4uVdXBPoVPbX0pnDd5Dp6mDquzeGPN5o6DqT9Meo4rMDsufcuqP4NxBB67GXME46joNtEMnLPY0qr80k&X-Amz-Signature=220364b9aaad41e0faf93e8f450eba313b7a97294075d1c597e8f5f2a8516712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
