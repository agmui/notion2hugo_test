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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFJAVEAK%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAUQw0UHPSIRQo3btcfKTWdenStjT2JPdx%2B%2FrDf5yexMAiAPSb86EP4ybxixXBiN9QizMghZ8YgMVbYY990cyJ%2B0zSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMve3KxN5PSei%2B6xSNKtwDeWPV3%2B4G2VJkWOMHPdHBeS902VqWrBAKpZFFyuHE0P6ja58%2Fl2eFDzGx0GEaMVL%2F0RknF8r7Y7LCUDRYvHo7IhD1wkcBdUdK91ntBrVhQ65LwWh8AkbE9%2Fhv8vA7NxNTmWxfhTZtW%2BQS4lGQuhYHobfkpyLefTtSIRsKLOprvU8ay%2BmO7Q%2FAlo0kvFb9GlcX5FbWUkqoRn7S8jzDx7%2Bd8AR%2FuxjrE6BMv7jvbAh%2FFBQ%2FV7VrOv2WvKNdOyXrNlxHtcRGdSXH3dp4zNq4Xi3Rvp%2F%2BNQhuwdX1t7WbwYy27Ik2i8xBeArfAtPD9q8UZjyXNJgE2flYB4wg%2Fgm7hEWf8zdBnd9kh532iyR0k15wHNZsOKjsW7RP%2BrOSF9obAZH7uv%2Fn80zsPUbUtnIVEej%2BxN00LqV0cRXBZH58B5U0w72dpR%2BNUNaFDUBvyOSmdvqsTvDq3nYWyRIhwIQIJKZGysII99GqjFiUHGXh%2BKm6E7gRwC4eM0OY0nCb1C7xtCYjZemrdkYHKn%2BPBO6uqZCAolmwRfiygaa%2FQel%2FcGNJMQQOYWITF7f%2FCvxqlg%2B3nx5SDHITRgqe9%2FImgzgSz%2BZth1FrXx06zGG68%2FuqzBQ6zJ8QkzZFU%2Bk4q7HaTxEw3OeV0wY6pgHj0OVpFH5M05aHEQE5jhpUcMd6FMYh%2FG0%2F%2BY2KP7N%2BZnUnDICz0umdIOeKgFV2OHUVWN%2BABjJ28g6ulW1SafFeLbEHDQV7dPpb%2BKb47GsSz5lzOGejdxC2NECqLRP3OIfFuQQKJiYkqkXb3axA2I7Tmioa0zBK%2BxfUA6U5zktCSDz2llqsH0BZv91Z2%2Fn%2BN%2FyhsvMG6lcCIfXW7k9TpbI1EfMw6k6U&X-Amz-Signature=8c120f5cd80b1a8b023888c026a559aa9e4aad3f076b480ec57f27a5c605a523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFJAVEAK%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAUQw0UHPSIRQo3btcfKTWdenStjT2JPdx%2B%2FrDf5yexMAiAPSb86EP4ybxixXBiN9QizMghZ8YgMVbYY990cyJ%2B0zSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMve3KxN5PSei%2B6xSNKtwDeWPV3%2B4G2VJkWOMHPdHBeS902VqWrBAKpZFFyuHE0P6ja58%2Fl2eFDzGx0GEaMVL%2F0RknF8r7Y7LCUDRYvHo7IhD1wkcBdUdK91ntBrVhQ65LwWh8AkbE9%2Fhv8vA7NxNTmWxfhTZtW%2BQS4lGQuhYHobfkpyLefTtSIRsKLOprvU8ay%2BmO7Q%2FAlo0kvFb9GlcX5FbWUkqoRn7S8jzDx7%2Bd8AR%2FuxjrE6BMv7jvbAh%2FFBQ%2FV7VrOv2WvKNdOyXrNlxHtcRGdSXH3dp4zNq4Xi3Rvp%2F%2BNQhuwdX1t7WbwYy27Ik2i8xBeArfAtPD9q8UZjyXNJgE2flYB4wg%2Fgm7hEWf8zdBnd9kh532iyR0k15wHNZsOKjsW7RP%2BrOSF9obAZH7uv%2Fn80zsPUbUtnIVEej%2BxN00LqV0cRXBZH58B5U0w72dpR%2BNUNaFDUBvyOSmdvqsTvDq3nYWyRIhwIQIJKZGysII99GqjFiUHGXh%2BKm6E7gRwC4eM0OY0nCb1C7xtCYjZemrdkYHKn%2BPBO6uqZCAolmwRfiygaa%2FQel%2FcGNJMQQOYWITF7f%2FCvxqlg%2B3nx5SDHITRgqe9%2FImgzgSz%2BZth1FrXx06zGG68%2FuqzBQ6zJ8QkzZFU%2Bk4q7HaTxEw3OeV0wY6pgHj0OVpFH5M05aHEQE5jhpUcMd6FMYh%2FG0%2F%2BY2KP7N%2BZnUnDICz0umdIOeKgFV2OHUVWN%2BABjJ28g6ulW1SafFeLbEHDQV7dPpb%2BKb47GsSz5lzOGejdxC2NECqLRP3OIfFuQQKJiYkqkXb3axA2I7Tmioa0zBK%2BxfUA6U5zktCSDz2llqsH0BZv91Z2%2Fn%2BN%2FyhsvMG6lcCIfXW7k9TpbI1EfMw6k6U&X-Amz-Signature=d80fd30a5f32294f2365359d1e30b676f48cbe625c63217b4e0349c31a7bf077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
