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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WXKMNQD%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICV4RG6C%2BdD5Rn%2FLHh%2BXyyIVn97GA%2FNwt2u5hr17PtPwAiEAqq0lHVJ%2BV8CBo754X6z6fjKGIPmMMGjjxw6I9DbDV2Aq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBZ1WA0X24ONmaKb4SrcA6YL3ov1QBCxuSbW4oC%2Bt6WfDLTTNKX3VJ5VWf2hTeVodB%2F2FYLefLTs59mPdmGem4YexlEGDF8CGBssY0ZNP%2BkIA7VLmwLGHzPAsgWwzmOR706k1UMSrVkTqL%2Fc6ug2LasKgjBlAxAW%2FctNxjsBSozdCey4XMsDJiNJkZrY5KlpIAJkKRHxkrD1ojlQ%2BEEsqsn4FuVyCYCzmcvCiyyUZUpZCA5zmAdIna04ZCrDVmGkYki1fldUWtj0pLoNYlWnMafk5eTEPPGS2gfo8oHBCsWQZ%2FREA%2BgcH9ePDzAUjZOHlhTG8BHhlnRTmvnH%2BlWHAb8h7ABuWyeyPIjnRAVR9aW%2Fc5uzxrmmkMR5Q6wVwG%2F6ydEVnf7KKs2zFWWsZwqBos%2BhCwP02olBe%2F4TTCV2GLm6NUVEhAF6x7HAqwS2%2FekyhCGHXikCUsXE5MNRmR3Wjkpuy4wXiBEcA4kNvVfWp73nnFffcLkmzkqZ7jTZnZ8OPvnzn%2BmVJcbRryxzWztYnvXZyteHdko%2FPfL27TXr5xpd5gKem80v5CGnf5Kh99cJVETfcAt3PByv49tKjVLOGnB%2BLhr1lyhesAxxRdEX8mnp6cu%2FJ3e%2FBdrdurghDJJvDY%2FSIBqW%2Bg%2FcrtDLMKHLk8kGOqUB4KnPKAmR88UHbWKVTOtKK9eoBCCPS9YE17ix3JrIT55aWjweDhr70qv8jSOgcDnRn%2B8mYF%2BijN1wNNNLmAZhQIkni9KS2bNQZj9qAyBFXc%2FYCBMkj%2FpFF69LB7e0%2F%2BL5%2FxzQahXQeomFpzcWr5JT4K1HFPsYSHv%2FTpqBYe0MPbLBrb9%2FV7cZkUCnqOR0qwxM0yId8XLr47Old79YTAQ4xcCL2018&X-Amz-Signature=16787caab63a6a8d4dc3dba3b4dcd2bd383b9e903b4c3b6f6e969487a6462aca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WXKMNQD%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICV4RG6C%2BdD5Rn%2FLHh%2BXyyIVn97GA%2FNwt2u5hr17PtPwAiEAqq0lHVJ%2BV8CBo754X6z6fjKGIPmMMGjjxw6I9DbDV2Aq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBZ1WA0X24ONmaKb4SrcA6YL3ov1QBCxuSbW4oC%2Bt6WfDLTTNKX3VJ5VWf2hTeVodB%2F2FYLefLTs59mPdmGem4YexlEGDF8CGBssY0ZNP%2BkIA7VLmwLGHzPAsgWwzmOR706k1UMSrVkTqL%2Fc6ug2LasKgjBlAxAW%2FctNxjsBSozdCey4XMsDJiNJkZrY5KlpIAJkKRHxkrD1ojlQ%2BEEsqsn4FuVyCYCzmcvCiyyUZUpZCA5zmAdIna04ZCrDVmGkYki1fldUWtj0pLoNYlWnMafk5eTEPPGS2gfo8oHBCsWQZ%2FREA%2BgcH9ePDzAUjZOHlhTG8BHhlnRTmvnH%2BlWHAb8h7ABuWyeyPIjnRAVR9aW%2Fc5uzxrmmkMR5Q6wVwG%2F6ydEVnf7KKs2zFWWsZwqBos%2BhCwP02olBe%2F4TTCV2GLm6NUVEhAF6x7HAqwS2%2FekyhCGHXikCUsXE5MNRmR3Wjkpuy4wXiBEcA4kNvVfWp73nnFffcLkmzkqZ7jTZnZ8OPvnzn%2BmVJcbRryxzWztYnvXZyteHdko%2FPfL27TXr5xpd5gKem80v5CGnf5Kh99cJVETfcAt3PByv49tKjVLOGnB%2BLhr1lyhesAxxRdEX8mnp6cu%2FJ3e%2FBdrdurghDJJvDY%2FSIBqW%2Bg%2FcrtDLMKHLk8kGOqUB4KnPKAmR88UHbWKVTOtKK9eoBCCPS9YE17ix3JrIT55aWjweDhr70qv8jSOgcDnRn%2B8mYF%2BijN1wNNNLmAZhQIkni9KS2bNQZj9qAyBFXc%2FYCBMkj%2FpFF69LB7e0%2F%2BL5%2FxzQahXQeomFpzcWr5JT4K1HFPsYSHv%2FTpqBYe0MPbLBrb9%2FV7cZkUCnqOR0qwxM0yId8XLr47Old79YTAQ4xcCL2018&X-Amz-Signature=f9fd2c1b455bdda2a6374a69abaf8f3470ab569bff161f517b95a53643ada4b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
