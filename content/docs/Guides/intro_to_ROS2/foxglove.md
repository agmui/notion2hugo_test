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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWFKUW4Y%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlN4X0MGvMkb%2BY4rSBbJnYheFHz%2BUQyw2lXzwfrq%2FKNQIhAJ1oO4rmSASIis%2FNZ7vbdmhLQbnVSLS1%2B9wfn8f6DXV5KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXftvQFV0xDzmedmIq3AOddb4oZ3iCGesAvy6IEWn4MELuvVJyJPhrknxTGnj9SBZ7IixbBxuiw72nFvyT2lQL%2B5ec%2FHb160xHYjnATqZnX6kwnXDGXG%2FbvZzZNevA6yC%2FFaOiKXVc7xrSKVgmMz22LaRHGj5UcfZs4eFQ8qZyYLYZgXQoB6xQk%2B05uAbNrkmWh9jT06n4O8SVDrmohb8bNSmPzzJ2dd3CPLtvfY0DeLBbuFSZ9992fYzldMAJBM2gTWpgMbG0iys4vaQusOhWHMjhHCt28%2BqZkZbus7OedxNYKdFQCqu%2BAOtxSqsfVM%2Fz4UNbN23nB67i10sJNXdjc%2FOYYcXVVh7MXWKCHexHUWmCpC17azhMeGqzik24uP0x43F%2BsTsOkeazTyu74oobU7Ie7GnV9zVDhW5DM74xTGZdxBKy4q0yhJ0hK1tRbm4aoZ4uOty9CKjyw7p%2FMIKDh2ZxL7ZOsar2hs%2B%2FFg3ulFSaFCJBK%2BrIBKBS7An2gwbxYw1%2BD2ZB8BwVRZgSM9UtE3LVpkRyw0491v%2B1wDzvX3mjTIwdDlXG81xgWbXoi2byOcpx4Odow0qjbR4lyArFIdSo8iosAQ1%2BEcMCaQ9Kl3aNYYAQH0a7h9XkL%2FuVzl%2FwVtNvTUedRsowXDDE95XFBjqkAWLcRu5kWiz%2BM0bCdj2xmABgUAWrrfHGER7rtG5oZ1BqQTFMKGjMFWYxDWgOgQH%2FS6s%2Bk5KzSHXt1iSR8z1KtiAKdPwxrnthJ2NepAOxIXi0wmxWY%2BR%2FplNVqu0HcThHY4iAXKdmDJfKa0enm%2Fbe0iFdf%2BwPPCvUtKY62IwE39CZ24BcCEXymSsTVe0N8UTUAlHfp3hqqKzFF7m8hDeV8cCjgOrw&X-Amz-Signature=941e8d760f749b0dd566fec05c6936d44fc920a3717f30a93827496c6764934f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWFKUW4Y%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlN4X0MGvMkb%2BY4rSBbJnYheFHz%2BUQyw2lXzwfrq%2FKNQIhAJ1oO4rmSASIis%2FNZ7vbdmhLQbnVSLS1%2B9wfn8f6DXV5KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXftvQFV0xDzmedmIq3AOddb4oZ3iCGesAvy6IEWn4MELuvVJyJPhrknxTGnj9SBZ7IixbBxuiw72nFvyT2lQL%2B5ec%2FHb160xHYjnATqZnX6kwnXDGXG%2FbvZzZNevA6yC%2FFaOiKXVc7xrSKVgmMz22LaRHGj5UcfZs4eFQ8qZyYLYZgXQoB6xQk%2B05uAbNrkmWh9jT06n4O8SVDrmohb8bNSmPzzJ2dd3CPLtvfY0DeLBbuFSZ9992fYzldMAJBM2gTWpgMbG0iys4vaQusOhWHMjhHCt28%2BqZkZbus7OedxNYKdFQCqu%2BAOtxSqsfVM%2Fz4UNbN23nB67i10sJNXdjc%2FOYYcXVVh7MXWKCHexHUWmCpC17azhMeGqzik24uP0x43F%2BsTsOkeazTyu74oobU7Ie7GnV9zVDhW5DM74xTGZdxBKy4q0yhJ0hK1tRbm4aoZ4uOty9CKjyw7p%2FMIKDh2ZxL7ZOsar2hs%2B%2FFg3ulFSaFCJBK%2BrIBKBS7An2gwbxYw1%2BD2ZB8BwVRZgSM9UtE3LVpkRyw0491v%2B1wDzvX3mjTIwdDlXG81xgWbXoi2byOcpx4Odow0qjbR4lyArFIdSo8iosAQ1%2BEcMCaQ9Kl3aNYYAQH0a7h9XkL%2FuVzl%2FwVtNvTUedRsowXDDE95XFBjqkAWLcRu5kWiz%2BM0bCdj2xmABgUAWrrfHGER7rtG5oZ1BqQTFMKGjMFWYxDWgOgQH%2FS6s%2Bk5KzSHXt1iSR8z1KtiAKdPwxrnthJ2NepAOxIXi0wmxWY%2BR%2FplNVqu0HcThHY4iAXKdmDJfKa0enm%2Fbe0iFdf%2BwPPCvUtKY62IwE39CZ24BcCEXymSsTVe0N8UTUAlHfp3hqqKzFF7m8hDeV8cCjgOrw&X-Amz-Signature=2e0ea9afe0c66d376cc9ed111877f9a3cfb94ea90c7d45706858588b365e22cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
