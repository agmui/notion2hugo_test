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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMPEFW4T%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC9jIL32I4xyDFXZSPPe66P8gEo1ubB3j9Oz719PnBQUwIgYURcGIpC7uRnB2IDwbsQkgtcHVK6tpgmaDpjAkyiuoUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDEZ5Q1A06cGwIbN9HCrcAzo2f5EJBxGqdx1QC%2BvDVbKUHAPxWYPt0avgdy9iYs7UV1y4ZT26tFhI7ulkZnztoBa1TmlVAHTy2qYo4F6huowsu17isFzewzx4Mz7U4MmlUr0OVEzeCBwSm7C91hA0YkOAClazV5CCqwxYMz5Plo%2BgO3COUPKL7NcEain5XCNsZ9lYgtaR6beGgr1zg9vpopWgQt4D8ZGPgiLGFbyfTNo04Vlf3%2F74e%2F0RiYjK2Pkn6WGJ9fwTEEGrvPfSxHauOlRb9qGDhdE74y8SFlu1Dvgyeq50XbcVzP8LNINxd1pB%2FmJRV3n4c0PppKHYG00FWr0WKJy4%2Bt0noEaewAg5KnVBxdznwXvfHMFBuLDGr%2FrePCOja5DTsgAaOU80ZkVPw82yKGTfHPaVyxmgxhGw9OPiBMUktMbIoYKhphJYUvjsiHeZ8KPLkCFc9ANMiIbh%2FULlTrIh%2FHKs9zlVD7TY13Xe3lC%2FI7OWKwS7mv39fUs9ibm5wF5EuwcbWd8ScrsavJ%2BRwwgmLyXmgPJA1o%2BDru2mvkvWwyg3Q4yTCQHObORcCzGTmhAgxH44QdHqu2Bs8BXPvSsxYcbbpS5xCrPcbFV8AbNy8C%2BuMW%2FCzEXa7FYCaLzay%2FQr0JGCeCZ5MNXZg80GOqUBmV9SAekLT5VoHl1GRbsQ1B%2BEXt2VadzahrqEwZlZd8fuNQu6syEBprqk%2Bfb0qHuSIAAyoqmgNPP1qepxS8KDFXitzsVD%2FRHby1nmBRMDgoUYqrKqo4qFQ9pg1KDCtNhQd2b%2FDvgPuS5Nav%2FmMpw040fbYO%2BCBVcmHezXQA4mYMhFll3GlVOkhxo1yQTmjAg13sh5YqcCm8QXrR6IgYk9WPqTnLB1&X-Amz-Signature=f09244101b87115e1b467aa2557238990db3f8703d434867a875ffdd56772696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMPEFW4T%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC9jIL32I4xyDFXZSPPe66P8gEo1ubB3j9Oz719PnBQUwIgYURcGIpC7uRnB2IDwbsQkgtcHVK6tpgmaDpjAkyiuoUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDEZ5Q1A06cGwIbN9HCrcAzo2f5EJBxGqdx1QC%2BvDVbKUHAPxWYPt0avgdy9iYs7UV1y4ZT26tFhI7ulkZnztoBa1TmlVAHTy2qYo4F6huowsu17isFzewzx4Mz7U4MmlUr0OVEzeCBwSm7C91hA0YkOAClazV5CCqwxYMz5Plo%2BgO3COUPKL7NcEain5XCNsZ9lYgtaR6beGgr1zg9vpopWgQt4D8ZGPgiLGFbyfTNo04Vlf3%2F74e%2F0RiYjK2Pkn6WGJ9fwTEEGrvPfSxHauOlRb9qGDhdE74y8SFlu1Dvgyeq50XbcVzP8LNINxd1pB%2FmJRV3n4c0PppKHYG00FWr0WKJy4%2Bt0noEaewAg5KnVBxdznwXvfHMFBuLDGr%2FrePCOja5DTsgAaOU80ZkVPw82yKGTfHPaVyxmgxhGw9OPiBMUktMbIoYKhphJYUvjsiHeZ8KPLkCFc9ANMiIbh%2FULlTrIh%2FHKs9zlVD7TY13Xe3lC%2FI7OWKwS7mv39fUs9ibm5wF5EuwcbWd8ScrsavJ%2BRwwgmLyXmgPJA1o%2BDru2mvkvWwyg3Q4yTCQHObORcCzGTmhAgxH44QdHqu2Bs8BXPvSsxYcbbpS5xCrPcbFV8AbNy8C%2BuMW%2FCzEXa7FYCaLzay%2FQr0JGCeCZ5MNXZg80GOqUBmV9SAekLT5VoHl1GRbsQ1B%2BEXt2VadzahrqEwZlZd8fuNQu6syEBprqk%2Bfb0qHuSIAAyoqmgNPP1qepxS8KDFXitzsVD%2FRHby1nmBRMDgoUYqrKqo4qFQ9pg1KDCtNhQd2b%2FDvgPuS5Nav%2FmMpw040fbYO%2BCBVcmHezXQA4mYMhFll3GlVOkhxo1yQTmjAg13sh5YqcCm8QXrR6IgYk9WPqTnLB1&X-Amz-Signature=01f2973b55b62c5816af00af610d2fa5bba2e725b00e793b1cd04959d3a51f7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
