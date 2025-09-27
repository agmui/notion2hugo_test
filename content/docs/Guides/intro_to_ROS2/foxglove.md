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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQPMPJP%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIHo8TrDJhgt4kSQioUhf%2FmvY7tRzBZKYc0FVHiQ%2BEPfnAiBYP0MwSzrVDzlfZO5AvMtsnHFXBZ2XSW4uRn5mv3hXeSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMstoAMZlDcomdR7VSKtwDYMmjW%2B5NZRnwj21d4zzBWna3EnpBND78u7Fs37AbDLoKgOLZeeNE3DmldJTCXWyJwL8KFyE8bQiCIhtjzwbD7a7JMporX%2BzVpexRpDc1OAtUHPONoiBuKFZoza3GZL6qgcG5PqWBHO1VuxTBkKb7QFu5upCxHOW436UNfVk0nBcClmKdOiJqgCBVDkNNVKAIPXNDfNBVExhY%2BWMrRujBIlq8qY%2FkLHnr9FwlfCRIXgSNc5EV7R6sacOhbr1ruDGua%2BMzBtb4Ot4lFmZWTWKxVltxh1t6ZWsEdnO2Pj8BSkRbEV9slq9bjdNnF6xvzBEkFUeSQJIEq3tUJ3MfKXnxaQ5P5U2GovBlaSXSN2khE5kCacTcqK0AnXZJ8AxW8BGHJCpkGphHKN%2FnNvEEPI9rX%2F%2F1%2BHPOy9evPNIpX3hPCSiYWL2NQ3cAKHVkzgzp825SekIBf8uoZnTTXQrpOUZ8CKCEIBHIIsdCxgKD48EWzUNr9vggs4mHLqIseQ3CwBNI1bmUebx87raJEFb8R1%2FM2zFGcUNwMwElEtdHqVmlEPCoums863xXNczI3bb0EzdXlA8e1TLUI9VlOk7FlM%2BbNQRPR%2BNUFdovqK79bn2ZpDgPW50nkSDiWD%2FJBrMw3ufcxgY6pgGogRlkR4p4ANJaS%2BNFBechmSOBu3H%2BaNY06ajvpK4D0n9aVsnU5d8%2BIEYGVOICU9kuUPniCYHwTSzHjF%2Btcqh9S7HqKXBjCS2clApMfGbBAbhveiHN%2BxohFXMnUrQvEPrOSaw9YT6nxAU%2FHXnrnLPnuIMHT%2FnyiHl3hFud%2B03418XvAa74z7yZmwbKHW1w6W%2BkeOF%2FjpwhcOzTdELHci2pZ3t8aFMe&X-Amz-Signature=8d7939318a718640f2dd728d57fc7d42377a3e5759bbb87234788fc5da0c959c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQPMPJP%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIHo8TrDJhgt4kSQioUhf%2FmvY7tRzBZKYc0FVHiQ%2BEPfnAiBYP0MwSzrVDzlfZO5AvMtsnHFXBZ2XSW4uRn5mv3hXeSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMstoAMZlDcomdR7VSKtwDYMmjW%2B5NZRnwj21d4zzBWna3EnpBND78u7Fs37AbDLoKgOLZeeNE3DmldJTCXWyJwL8KFyE8bQiCIhtjzwbD7a7JMporX%2BzVpexRpDc1OAtUHPONoiBuKFZoza3GZL6qgcG5PqWBHO1VuxTBkKb7QFu5upCxHOW436UNfVk0nBcClmKdOiJqgCBVDkNNVKAIPXNDfNBVExhY%2BWMrRujBIlq8qY%2FkLHnr9FwlfCRIXgSNc5EV7R6sacOhbr1ruDGua%2BMzBtb4Ot4lFmZWTWKxVltxh1t6ZWsEdnO2Pj8BSkRbEV9slq9bjdNnF6xvzBEkFUeSQJIEq3tUJ3MfKXnxaQ5P5U2GovBlaSXSN2khE5kCacTcqK0AnXZJ8AxW8BGHJCpkGphHKN%2FnNvEEPI9rX%2F%2F1%2BHPOy9evPNIpX3hPCSiYWL2NQ3cAKHVkzgzp825SekIBf8uoZnTTXQrpOUZ8CKCEIBHIIsdCxgKD48EWzUNr9vggs4mHLqIseQ3CwBNI1bmUebx87raJEFb8R1%2FM2zFGcUNwMwElEtdHqVmlEPCoums863xXNczI3bb0EzdXlA8e1TLUI9VlOk7FlM%2BbNQRPR%2BNUFdovqK79bn2ZpDgPW50nkSDiWD%2FJBrMw3ufcxgY6pgGogRlkR4p4ANJaS%2BNFBechmSOBu3H%2BaNY06ajvpK4D0n9aVsnU5d8%2BIEYGVOICU9kuUPniCYHwTSzHjF%2Btcqh9S7HqKXBjCS2clApMfGbBAbhveiHN%2BxohFXMnUrQvEPrOSaw9YT6nxAU%2FHXnrnLPnuIMHT%2FnyiHl3hFud%2B03418XvAa74z7yZmwbKHW1w6W%2BkeOF%2FjpwhcOzTdELHci2pZ3t8aFMe&X-Amz-Signature=a268508074dd9b6ccc54e393b84d436482f6093f1eb68cb03c4b272894aafa6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
