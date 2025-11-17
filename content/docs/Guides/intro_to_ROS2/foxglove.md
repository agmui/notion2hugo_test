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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E3XRTMA%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FTgUP8ESB4nw%2FfQoqXxALa5kMuMnE7aR9Qcz91jkMigIhAM3t3Y%2BVebTIQ8PZoIHrC2eviFvanw6gF2azfdn%2BsLeRKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7l16jT%2Bb4PA7Q8sUq3AMxzDsZ8ouB5JOWnOAM1yGHYT%2B41rW%2F69M7DCXcmYeaf8EeTJwPJVik5r5Vvt7ZqopAPcnRADjxnQUUT58H%2Bml6RDUHL1%2BzoJJ2sEf8RCb%2BYrLgtHxr1Cs%2BsiUu2z0iAVg7YvzT1kJf8Lmk7gYA%2FGNZBQZeeH7X0PhCHDpmfsIeN1FTYPDJsQGsfPQhWWtdgK0QEbr5s%2F0tgTzZinCPyBFb7hg3ZZc5tcd8g9gph%2BNcWjurNWyCPnekdkgIbw1hF6Xvqc3C%2FYIg%2FrVBJOf58Rl9J9ygj4St5TPlm0bxIUNW%2Fju%2Ft8h3BCOUsTi%2FlR1Ls2qG98NxK349YUpydZhmDZGj5QtCYSYPaNaNhZcmtjmgsH3ZNLWJSzTWGTloEH3eSzphcXLcILGscaaP2mIGnhAhr4zNHWgNBlSekfA6Kt5ISEUr6G%2B%2Bv%2FupPhmPfN8%2Bx4a%2FP7NpRdD5KnGIXh5tWwqLXqvhRlB9Tji%2BD4yJ%2F1d26DjOgSasoBzgDqbwNzAqDwQx%2Bot%2BaDUjxnOUo3MHn8o1iy3WREJpwcR4%2Ftobr5Y5aqP2zo9IlbR87X9blW26F%2FLDNNrAPUE2EgjRp%2FWk%2FRNjwYAcE8CxtPBkp4l9OMLoxCsAaTUvlQ9kyDXW%2FDDb4OnIBjqkAeIWAIZlHdJPFylKBAnN4JF4vX6pzESloYQP6B0JGBuN%2FONThdfTEW5LGRA08U9jsRZgXuz7KKD4Dl4Wueo%2FZC0n1LE1mJHbHtnKFIVSpLvPKYfrUeQNP5DjAGMT0MCFRouPTX9GtZLWmoxPUgqXiw5VVBjCAvutJE6cvZgcQcFpWjD%2Fk0PKqWZdDOjp%2Bffj4MKB4GrzNMbokqOPTneV2LjtzS9Q&X-Amz-Signature=27c63aa1085a6fc20d48dcfcaef13b47376f2e60624ededb670c972c70879106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E3XRTMA%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FTgUP8ESB4nw%2FfQoqXxALa5kMuMnE7aR9Qcz91jkMigIhAM3t3Y%2BVebTIQ8PZoIHrC2eviFvanw6gF2azfdn%2BsLeRKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7l16jT%2Bb4PA7Q8sUq3AMxzDsZ8ouB5JOWnOAM1yGHYT%2B41rW%2F69M7DCXcmYeaf8EeTJwPJVik5r5Vvt7ZqopAPcnRADjxnQUUT58H%2Bml6RDUHL1%2BzoJJ2sEf8RCb%2BYrLgtHxr1Cs%2BsiUu2z0iAVg7YvzT1kJf8Lmk7gYA%2FGNZBQZeeH7X0PhCHDpmfsIeN1FTYPDJsQGsfPQhWWtdgK0QEbr5s%2F0tgTzZinCPyBFb7hg3ZZc5tcd8g9gph%2BNcWjurNWyCPnekdkgIbw1hF6Xvqc3C%2FYIg%2FrVBJOf58Rl9J9ygj4St5TPlm0bxIUNW%2Fju%2Ft8h3BCOUsTi%2FlR1Ls2qG98NxK349YUpydZhmDZGj5QtCYSYPaNaNhZcmtjmgsH3ZNLWJSzTWGTloEH3eSzphcXLcILGscaaP2mIGnhAhr4zNHWgNBlSekfA6Kt5ISEUr6G%2B%2Bv%2FupPhmPfN8%2Bx4a%2FP7NpRdD5KnGIXh5tWwqLXqvhRlB9Tji%2BD4yJ%2F1d26DjOgSasoBzgDqbwNzAqDwQx%2Bot%2BaDUjxnOUo3MHn8o1iy3WREJpwcR4%2Ftobr5Y5aqP2zo9IlbR87X9blW26F%2FLDNNrAPUE2EgjRp%2FWk%2FRNjwYAcE8CxtPBkp4l9OMLoxCsAaTUvlQ9kyDXW%2FDDb4OnIBjqkAeIWAIZlHdJPFylKBAnN4JF4vX6pzESloYQP6B0JGBuN%2FONThdfTEW5LGRA08U9jsRZgXuz7KKD4Dl4Wueo%2FZC0n1LE1mJHbHtnKFIVSpLvPKYfrUeQNP5DjAGMT0MCFRouPTX9GtZLWmoxPUgqXiw5VVBjCAvutJE6cvZgcQcFpWjD%2Fk0PKqWZdDOjp%2Bffj4MKB4GrzNMbokqOPTneV2LjtzS9Q&X-Amz-Signature=8c99ab8c7f7a56b832a5ee74ff457c54f7e9bc209e07c0a29db300079c76734a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
