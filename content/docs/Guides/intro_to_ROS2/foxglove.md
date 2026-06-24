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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WR62BRL%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIF4FFsKgMmwhvw3waS90SLX7rBOhjOxh3PonCU1qHz4wAiEA35%2FgYByzzsz6LGefO8tkdetxHikO6rxhpeFNq1E2h3Yq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDA33v4st0nhb%2BIzEFyrcA4%2FX%2Fm1yUP5SGADMrhC%2FnUJyrEQdKVBW0OTnqBD2OeK26PE4tRgn9hGGkDlTdvUWne0Vvs%2BXGPmA4MyjjW1K532FwlGOtzn1cCpVaT2aEH2iOxEZlwsvj6oOrMTLkSk%2F8a0Sdu1XeCeNPxxfVM7oiWWKQyGC1CXBs7c69oyIQWZaBMALDfM0GQMH7%2FXK8ctPlieDn%2FXEeHGDmbXj0Wp00Di5h9bzhrauvb2s8C3DILc3ljKWBcKiKY1Upup50rx1JK9cM0eTstCaLElkxkgAHmnlpcgIXJwK%2FbWWuGbOBiyvpus0A%2BaWhBCuBH0NUoe8pYbGopjNwkiiAuGgnIPXKJ1u27hKULy8bq6JvHIHUhVyhzwR4eNFyASm3Fmc62ysW25r51wMzfsBuPM6TR3TBqJE7z3339Z5SDPTaRrOkP0FCf5xzOvk0h8NLyyJO70Fz0Dmd5%2Bz9OZE%2FIWfcG8ysEVqvYqzzi0Z3b8M0LKp%2F%2BrFjLf9EDTHYwkS6BOqWtL8e8ntH2%2FmXLAfmsRyNPSqzA1xk6icq13x5W1Nt3sfqELQx7DUUZKzfnZHR3Z59Kt%2Fdpp9Os7rHQYfHVXZboxHvoeYgqoK8YewP5YSLKiZv1YrVyiPZUAaE5q7m%2FUXMPbx7NEGOqUBNcBqgZ2TAI1ckPB1TDWW7AF8vknh%2BBEGhNy64WB8RIBYfv3abEqLlW6YuQzh9azWvQ1CK2gNIXkuA9%2BlAAMR7G19NMomO9ofbNvhDln3lyParvlsA03iFyPZ%2BF1q01yG601AwXLWvikJ67haAYTT%2BnzSrDejof3oYBnyguoKDZdQugYDpHFpuuoUDdTGwMvsdS2ilYSP1FcLZSU8U5cHqwtrzGDV&X-Amz-Signature=01ba7223e34bf8ed597a6c4caffe78acd3b46ab88ecc692bcc577b5cfb283660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WR62BRL%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIF4FFsKgMmwhvw3waS90SLX7rBOhjOxh3PonCU1qHz4wAiEA35%2FgYByzzsz6LGefO8tkdetxHikO6rxhpeFNq1E2h3Yq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDA33v4st0nhb%2BIzEFyrcA4%2FX%2Fm1yUP5SGADMrhC%2FnUJyrEQdKVBW0OTnqBD2OeK26PE4tRgn9hGGkDlTdvUWne0Vvs%2BXGPmA4MyjjW1K532FwlGOtzn1cCpVaT2aEH2iOxEZlwsvj6oOrMTLkSk%2F8a0Sdu1XeCeNPxxfVM7oiWWKQyGC1CXBs7c69oyIQWZaBMALDfM0GQMH7%2FXK8ctPlieDn%2FXEeHGDmbXj0Wp00Di5h9bzhrauvb2s8C3DILc3ljKWBcKiKY1Upup50rx1JK9cM0eTstCaLElkxkgAHmnlpcgIXJwK%2FbWWuGbOBiyvpus0A%2BaWhBCuBH0NUoe8pYbGopjNwkiiAuGgnIPXKJ1u27hKULy8bq6JvHIHUhVyhzwR4eNFyASm3Fmc62ysW25r51wMzfsBuPM6TR3TBqJE7z3339Z5SDPTaRrOkP0FCf5xzOvk0h8NLyyJO70Fz0Dmd5%2Bz9OZE%2FIWfcG8ysEVqvYqzzi0Z3b8M0LKp%2F%2BrFjLf9EDTHYwkS6BOqWtL8e8ntH2%2FmXLAfmsRyNPSqzA1xk6icq13x5W1Nt3sfqELQx7DUUZKzfnZHR3Z59Kt%2Fdpp9Os7rHQYfHVXZboxHvoeYgqoK8YewP5YSLKiZv1YrVyiPZUAaE5q7m%2FUXMPbx7NEGOqUBNcBqgZ2TAI1ckPB1TDWW7AF8vknh%2BBEGhNy64WB8RIBYfv3abEqLlW6YuQzh9azWvQ1CK2gNIXkuA9%2BlAAMR7G19NMomO9ofbNvhDln3lyParvlsA03iFyPZ%2BF1q01yG601AwXLWvikJ67haAYTT%2BnzSrDejof3oYBnyguoKDZdQugYDpHFpuuoUDdTGwMvsdS2ilYSP1FcLZSU8U5cHqwtrzGDV&X-Amz-Signature=1238ef9274b58a99eea2e435ca511a353cd0c77fbfec4b68837c6da78b243da1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
