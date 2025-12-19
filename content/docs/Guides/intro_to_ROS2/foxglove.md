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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BIIZWCB%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BO190wkEf%2Fk9pqL%2FpFecYnGwem%2F0bSvooJJ%2F5dFvkUAiEAiTZxRqA2ITBya4NUx7dkl6bZ2jnBu8xHV1SZh62s6FcqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIT%2BV3tN1b%2FZCu9uRCrcA6LI92dKGyI6GIIWk5cwBMnScPogxF3D3yPMJw9ThzAmTc%2B5bBJT%2FoEY0xHkgf1xsrdTxVJaZEksrqO0CKKW7cLsoXx5cUhfzh4%2Bcsm7fG%2F7g1d%2FZZ2ccKxCD79LRB3Vw%2F6BKKmBl6zelWLCbN04GLI%2FvY9A9XmiDb0QbhrcCAH52DYHDBKpVEScCXzXJ3rylBvbT0v3SJXp0sXpiEVb9CcGM3aJ6LelmRyN6bEgk6ZfkHlF0QYJ5D3y7afJiu2OOASy0nPN6xpt5jlsdSLtB5gC81DBbkMZE2HOXnX4F4oiZvLRT4%2B4L7al%2BJ5TPC4aC3We624plcqsPqGVOfoBX45ZNC1FS%2FoWe8NSw%2FnRYckz%2F1HJEO%2FpOsI1CY%2B%2F%2F2ShEcATxYrGGPKXIOipy8xxkJ9wRF11Cj%2FWMNRp%2BVE0sI2zo%2BbKaoHvQ6FGJi6nrDIPfQeak4rrWSv70VotUJ%2FyhRXMdZp7wOHSHt2UnsbvxeIkwaUa99t0hXvXJCUjmhj7Mw4iL5wxTpNjw3WmR4FXKTOrfm4bBWC3FzYfVxIZDbfhwIvq%2BWvDggjmSuAXI5HX4iqWdD1fQnRzyJLpCMcvsMwHiJMdbZHIB0Iiq%2FWjDlIv0p%2Fh%2BO1ZhjbHOhHWMK7HksoGOqUBlqZF%2FxFcsfNYPCWCSU5Tkf6%2BEF1Cn7sU75bsizQpkdOsihmxBeN0qcltcAw9uTPUja2%2FUhUE1BSUHePtvWyZpFZbp3%2FQ2Q6iAEe0yx8MiGojurdHpsavz3GLE7Mhr9E9RuR77WKw3l69pfmlGJ%2BRAKU7bwbiZH0jlcIhD840nxsUDiX7DYEM04RpnfXjax%2FE0aRv7cdnoFKPo2%2FU1P4yaf0l4A61&X-Amz-Signature=3f65c97f9b45c5c744b049d8fb053c0ec37a0df48ce798600fca5cb76d3eccd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BIIZWCB%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BO190wkEf%2Fk9pqL%2FpFecYnGwem%2F0bSvooJJ%2F5dFvkUAiEAiTZxRqA2ITBya4NUx7dkl6bZ2jnBu8xHV1SZh62s6FcqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIT%2BV3tN1b%2FZCu9uRCrcA6LI92dKGyI6GIIWk5cwBMnScPogxF3D3yPMJw9ThzAmTc%2B5bBJT%2FoEY0xHkgf1xsrdTxVJaZEksrqO0CKKW7cLsoXx5cUhfzh4%2Bcsm7fG%2F7g1d%2FZZ2ccKxCD79LRB3Vw%2F6BKKmBl6zelWLCbN04GLI%2FvY9A9XmiDb0QbhrcCAH52DYHDBKpVEScCXzXJ3rylBvbT0v3SJXp0sXpiEVb9CcGM3aJ6LelmRyN6bEgk6ZfkHlF0QYJ5D3y7afJiu2OOASy0nPN6xpt5jlsdSLtB5gC81DBbkMZE2HOXnX4F4oiZvLRT4%2B4L7al%2BJ5TPC4aC3We624plcqsPqGVOfoBX45ZNC1FS%2FoWe8NSw%2FnRYckz%2F1HJEO%2FpOsI1CY%2B%2F%2F2ShEcATxYrGGPKXIOipy8xxkJ9wRF11Cj%2FWMNRp%2BVE0sI2zo%2BbKaoHvQ6FGJi6nrDIPfQeak4rrWSv70VotUJ%2FyhRXMdZp7wOHSHt2UnsbvxeIkwaUa99t0hXvXJCUjmhj7Mw4iL5wxTpNjw3WmR4FXKTOrfm4bBWC3FzYfVxIZDbfhwIvq%2BWvDggjmSuAXI5HX4iqWdD1fQnRzyJLpCMcvsMwHiJMdbZHIB0Iiq%2FWjDlIv0p%2Fh%2BO1ZhjbHOhHWMK7HksoGOqUBlqZF%2FxFcsfNYPCWCSU5Tkf6%2BEF1Cn7sU75bsizQpkdOsihmxBeN0qcltcAw9uTPUja2%2FUhUE1BSUHePtvWyZpFZbp3%2FQ2Q6iAEe0yx8MiGojurdHpsavz3GLE7Mhr9E9RuR77WKw3l69pfmlGJ%2BRAKU7bwbiZH0jlcIhD840nxsUDiX7DYEM04RpnfXjax%2FE0aRv7cdnoFKPo2%2FU1P4yaf0l4A61&X-Amz-Signature=9ef53de4d44169d72d5ae5ff8a073a264d1412a834272a0b30239ff72220472e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
