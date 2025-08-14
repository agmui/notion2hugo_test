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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3E3ID4U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsCPTNg06iOEXtHYXLdr5pQZrcGgQ80kdoj03qfiSAUAiABinho8ZnfCzVt6OcJYqeROFmqQRSy%2FoBMC3qRwOqqUSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMcgRXLRm4MTVYFmbOKtwDnsZeFVmPWWjuZloMu5LWH8Wpc57wgpGpHl6xqLdNSNamJGWffawEms5ZrsikaQ0NtgTYcfn8VsNAxNz2RfH5cGMPZl%2Bs8VOhuQz85pjNgCM5CF7OaScjjUrV8ajitpF9IXvnyQ5jGePf%2FZS5jri9dKFBHAtVBBgSRh5wbCTw7rFh19Oor%2FQezOn69IQv1NfLws%2BuDQEA5jZPGKTAlDu9vUPeAl298qPJLbsnLhZvUYKivglO0%2BSrkwTr%2FVmFLxrXrHeSA8qzoMbJCrL20YqGfo%2BIxDk1GA2p8vTrib8gwEqLXA4C1QK93s6BwlhFqXzqSJ1FMiYiP4CPK%2BEcMkdqpM1dezDl8jlPmhFyljYX47wtb8AEtugjkXIQJry2ybFE1fJYgIJlN%2FAW1I4RdQlAJCsLB0%2FNJz9rVHs7SrudlN%2BEQ6PNzMCqZyvHEKNH3lJ3EM%2B%2BGcFmIFzdAPXJChwcOf%2FCOtJ7yMBS1I9QU0n%2F%2Fy92EVh5YJJxTTz%2FpP2y6FpzfSelnabJyYdec6jM5Z59ftIlCb28X2rWiEnXEc9vCJhQk2ut41Oqu6eMUI7b4X7MXJjS20ibcyx74jFJyzk%2Bca96Vfd9jkmg%2B8fF0ND6B55%2FsJ9pMY0buHg70SMwwoT3xAY6pgHznGzCn76bQ5YUHJtliTVw7P3NET4fdntZMhzEYeIvZc25Y3bWIJjAgb%2BfUZYe81uJr%2FVR2gLet%2FeBfUiHDaG76F5tpgzNDJq%2FYRH90OvwCK2snvDmLqWq2zESv7b4qUdOSuI23ZVbdgYMDnkQslHDBc8h%2FN2tfRmMtXyxy2QZYTlk8az9DbXMu7zUhH%2B%2FQxdPIK59g%2Ff%2BRb4m5ZbX39hVextyYW4P&X-Amz-Signature=98e9387d22a91c8f871525aaa50b3307d2e5f24a76752a43ff614d3efef9b129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3E3ID4U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsCPTNg06iOEXtHYXLdr5pQZrcGgQ80kdoj03qfiSAUAiABinho8ZnfCzVt6OcJYqeROFmqQRSy%2FoBMC3qRwOqqUSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMcgRXLRm4MTVYFmbOKtwDnsZeFVmPWWjuZloMu5LWH8Wpc57wgpGpHl6xqLdNSNamJGWffawEms5ZrsikaQ0NtgTYcfn8VsNAxNz2RfH5cGMPZl%2Bs8VOhuQz85pjNgCM5CF7OaScjjUrV8ajitpF9IXvnyQ5jGePf%2FZS5jri9dKFBHAtVBBgSRh5wbCTw7rFh19Oor%2FQezOn69IQv1NfLws%2BuDQEA5jZPGKTAlDu9vUPeAl298qPJLbsnLhZvUYKivglO0%2BSrkwTr%2FVmFLxrXrHeSA8qzoMbJCrL20YqGfo%2BIxDk1GA2p8vTrib8gwEqLXA4C1QK93s6BwlhFqXzqSJ1FMiYiP4CPK%2BEcMkdqpM1dezDl8jlPmhFyljYX47wtb8AEtugjkXIQJry2ybFE1fJYgIJlN%2FAW1I4RdQlAJCsLB0%2FNJz9rVHs7SrudlN%2BEQ6PNzMCqZyvHEKNH3lJ3EM%2B%2BGcFmIFzdAPXJChwcOf%2FCOtJ7yMBS1I9QU0n%2F%2Fy92EVh5YJJxTTz%2FpP2y6FpzfSelnabJyYdec6jM5Z59ftIlCb28X2rWiEnXEc9vCJhQk2ut41Oqu6eMUI7b4X7MXJjS20ibcyx74jFJyzk%2Bca96Vfd9jkmg%2B8fF0ND6B55%2FsJ9pMY0buHg70SMwwoT3xAY6pgHznGzCn76bQ5YUHJtliTVw7P3NET4fdntZMhzEYeIvZc25Y3bWIJjAgb%2BfUZYe81uJr%2FVR2gLet%2FeBfUiHDaG76F5tpgzNDJq%2FYRH90OvwCK2snvDmLqWq2zESv7b4qUdOSuI23ZVbdgYMDnkQslHDBc8h%2FN2tfRmMtXyxy2QZYTlk8az9DbXMu7zUhH%2B%2FQxdPIK59g%2Ff%2BRb4m5ZbX39hVextyYW4P&X-Amz-Signature=34874824fc5dc655bed8014f541801b6c388e25e69b9544e61cd90a4f27e1234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
