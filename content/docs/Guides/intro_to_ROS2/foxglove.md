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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6DFF7MU%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOBseAaFTt0Ede21y9wYl3EukceM7P3N15%2Bs3HKl7aawIgb%2BjaT8jLo0X6rn3Hqzip%2Fwy%2F5BUBnoeQ7rQRtE5Zdz4qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1TQmPTT%2Bbo%2BvKS2CrcAy%2Bcp1wd11s4NksEehRDG8uvIgSCZ4uN0d2E8iP9famMi24oMZ8QTg1QJHYa785KMnUGFwL2HpIV3SbhDTRRk9OgTgEzfmKWknN0uw8alLrd2h%2BYYUGnOYwA%2BU5JBhrJEJifqbfRPGeeOKLl1jN9%2Fh8GFpR4Fv86m%2BRLXBauIepUl2YTEeZQyXqliJzdY%2FMUHq1sqQThP1a5DoPShGsdNOGaVB8ST0IxyANUj3T7Gdd%2FfK2TWf%2Fx2fqnzBcGlg7nqmMA4oV%2BFNzda0Y48mHFHlxJZ4VE2egZjUAMua4cbO1DqSWUAt%2FdQuw7PY63YAPkyB50stF8zc0LZbfbuYXiWjfn%2FYo%2Bfo%2Fvl89SF7JggI7ZrpGZ%2FsI9thUpHJzIAqPhMkIz0EXlpLc2s6D1ZCY5lAT7nqBg3KW%2BGfvhnpEDBSGal%2FrLFH6AhVQds%2B%2Fryi%2BecXs25hKFpQnZ11rWKEsZOaA07gDUFgQ7Dfcf1OAYveCwh7G3nNtRXIkSj3J69EuQ6dEu8E1tY4BIwyOmTk7GuWQxpEy%2BLz4f3BR4yn%2B9%2F3U62D2gwG7olIdE9CHIZ22XF2n6ahFEO%2FpW84I0CA5LKj0Nqst16FXk0vPoQqZvwH3nLG1NAj32ijojjhniMKKnlsUGOqUBm%2BXkT906Zn0D0V%2F4NpwoIdzEFoB47sMG2VmS3r2U8SP3GXhw0ruQKouxxgDsZSo%2BDxDAwHsJJD1pcCMKMo6Dhp0P9gJWPs%2BfsYH9CUXZ0kB6Pq5V0idjvGBC0QXuTs5Z5Tp5JZaip8BaDlAZRg5mjQ6T1hJ9CbJ9mmMKj1hSMqcoNWINn3AadCBzdKZQxkFcVHDaTZpTZ1V9L4sBWIfLvcQQFxPd&X-Amz-Signature=ca1b4576a95b2ee9b5b1a16334f76aa19ce845a65821d2dd0391362def6c411b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6DFF7MU%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOBseAaFTt0Ede21y9wYl3EukceM7P3N15%2Bs3HKl7aawIgb%2BjaT8jLo0X6rn3Hqzip%2Fwy%2F5BUBnoeQ7rQRtE5Zdz4qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1TQmPTT%2Bbo%2BvKS2CrcAy%2Bcp1wd11s4NksEehRDG8uvIgSCZ4uN0d2E8iP9famMi24oMZ8QTg1QJHYa785KMnUGFwL2HpIV3SbhDTRRk9OgTgEzfmKWknN0uw8alLrd2h%2BYYUGnOYwA%2BU5JBhrJEJifqbfRPGeeOKLl1jN9%2Fh8GFpR4Fv86m%2BRLXBauIepUl2YTEeZQyXqliJzdY%2FMUHq1sqQThP1a5DoPShGsdNOGaVB8ST0IxyANUj3T7Gdd%2FfK2TWf%2Fx2fqnzBcGlg7nqmMA4oV%2BFNzda0Y48mHFHlxJZ4VE2egZjUAMua4cbO1DqSWUAt%2FdQuw7PY63YAPkyB50stF8zc0LZbfbuYXiWjfn%2FYo%2Bfo%2Fvl89SF7JggI7ZrpGZ%2FsI9thUpHJzIAqPhMkIz0EXlpLc2s6D1ZCY5lAT7nqBg3KW%2BGfvhnpEDBSGal%2FrLFH6AhVQds%2B%2Fryi%2BecXs25hKFpQnZ11rWKEsZOaA07gDUFgQ7Dfcf1OAYveCwh7G3nNtRXIkSj3J69EuQ6dEu8E1tY4BIwyOmTk7GuWQxpEy%2BLz4f3BR4yn%2B9%2F3U62D2gwG7olIdE9CHIZ22XF2n6ahFEO%2FpW84I0CA5LKj0Nqst16FXk0vPoQqZvwH3nLG1NAj32ijojjhniMKKnlsUGOqUBm%2BXkT906Zn0D0V%2F4NpwoIdzEFoB47sMG2VmS3r2U8SP3GXhw0ruQKouxxgDsZSo%2BDxDAwHsJJD1pcCMKMo6Dhp0P9gJWPs%2BfsYH9CUXZ0kB6Pq5V0idjvGBC0QXuTs5Z5Tp5JZaip8BaDlAZRg5mjQ6T1hJ9CbJ9mmMKj1hSMqcoNWINn3AadCBzdKZQxkFcVHDaTZpTZ1V9L4sBWIfLvcQQFxPd&X-Amz-Signature=9aab0dbdb398d3470f05b10b5af4dd5717fbb91e78a8e2b6802a81df41e038b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
