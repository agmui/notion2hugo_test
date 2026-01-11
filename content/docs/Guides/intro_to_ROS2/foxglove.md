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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W5G3HR6%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIErzQ3Hr97HG%2FoCCl%2FjtWm9ywZZ0SWKzdFqQ3O8EJWRqAiBifrJbCVrFrO3Xm2d6WlBxxC%2BDa2tdbjzNwa9sXT%2BTWCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW2K32Ep6gMJnhZWxKtwDXPf8nzv8mNrwenpyqe%2FsnS6gOIMWeeq8rg07i7zsN88%2BqfQIYJYWPjw9J%2FOTULMVpTIRdDJqCqv83oKsne%2FGxYD6B2cQ7cVb50tpWgsE3nShH3y5IIz07hPnvQXUXwKd37tNTeGrXYzvo4JJAXc4IGA2dlaRpQ1bYu%2B0ifG6BUk1hIIvVnSSjQ7Uo3pSpF%2B4azRKl83to7g0RuyG7GheThCNI%2BDG8%2FmIrttdo%2FSFZrA4%2BNJvyNpzyi1iNUhGB5gp%2FrBKx3KySKC4orRoZDqYz4yqeuO0bRBtNZYaCc7DMvS3b%2BwpLzV6t9CYsm5R1gxyRVDX7b%2FIMkV0f%2BEyGRLbJUQ3nygq5uQrmNbEt9qQN4OIQVgHtpFBRaH1pwILt8wOiB9Fs1BrrhoyTYE6uoi4fdl9OyVoKG%2FCkhjcuL9NztCzz8dDOy2wm36Z%2BRQzv34n1SrwCrQR1%2FPrlf7q5eCx%2BgQybJG2LNtxAEhDIGGw8edSibR5rtqqL8YiFdICa%2FhIdfNLWqM2m3hp3ODXBD9rAlMSpjL3mzCqdZ%2Bj4XZVOut0bJrauu%2FvIcJncdcA%2FlJCu6vtnz0Jj03M%2Fo050OAU8yv5zRIlAaTY3BHmriG5bnQ2BQhPJX7Z52BPXvww6YOMywY6pgEbRfLz31Ope0zWcUGY9mnxpdXbVSz0fYWuA%2FVf8Be5nD0dH7bGfkq7PCZpQTzWEM2001vTcMmWVUhK2O4KHbKC9oUdriC3HySE4bMgKTgvQ3ChqKn%2B%2F3Q6%2FkMjIIjOM69%2FnoUzhS6f3nff6O%2FAvs%2BQfNNgC0IaiI6SKZwvvX3rVGgcKya8p%2FCH%2FCNDxn0%2BOPRJwdVJreGer4H8etlxWVtnE43vEb9T&X-Amz-Signature=a93839fb21615449b2972e5db589e2e1cc2262ad0dc22c1a56dc5f989aba7ac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W5G3HR6%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIErzQ3Hr97HG%2FoCCl%2FjtWm9ywZZ0SWKzdFqQ3O8EJWRqAiBifrJbCVrFrO3Xm2d6WlBxxC%2BDa2tdbjzNwa9sXT%2BTWCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW2K32Ep6gMJnhZWxKtwDXPf8nzv8mNrwenpyqe%2FsnS6gOIMWeeq8rg07i7zsN88%2BqfQIYJYWPjw9J%2FOTULMVpTIRdDJqCqv83oKsne%2FGxYD6B2cQ7cVb50tpWgsE3nShH3y5IIz07hPnvQXUXwKd37tNTeGrXYzvo4JJAXc4IGA2dlaRpQ1bYu%2B0ifG6BUk1hIIvVnSSjQ7Uo3pSpF%2B4azRKl83to7g0RuyG7GheThCNI%2BDG8%2FmIrttdo%2FSFZrA4%2BNJvyNpzyi1iNUhGB5gp%2FrBKx3KySKC4orRoZDqYz4yqeuO0bRBtNZYaCc7DMvS3b%2BwpLzV6t9CYsm5R1gxyRVDX7b%2FIMkV0f%2BEyGRLbJUQ3nygq5uQrmNbEt9qQN4OIQVgHtpFBRaH1pwILt8wOiB9Fs1BrrhoyTYE6uoi4fdl9OyVoKG%2FCkhjcuL9NztCzz8dDOy2wm36Z%2BRQzv34n1SrwCrQR1%2FPrlf7q5eCx%2BgQybJG2LNtxAEhDIGGw8edSibR5rtqqL8YiFdICa%2FhIdfNLWqM2m3hp3ODXBD9rAlMSpjL3mzCqdZ%2Bj4XZVOut0bJrauu%2FvIcJncdcA%2FlJCu6vtnz0Jj03M%2Fo050OAU8yv5zRIlAaTY3BHmriG5bnQ2BQhPJX7Z52BPXvww6YOMywY6pgEbRfLz31Ope0zWcUGY9mnxpdXbVSz0fYWuA%2FVf8Be5nD0dH7bGfkq7PCZpQTzWEM2001vTcMmWVUhK2O4KHbKC9oUdriC3HySE4bMgKTgvQ3ChqKn%2B%2F3Q6%2FkMjIIjOM69%2FnoUzhS6f3nff6O%2FAvs%2BQfNNgC0IaiI6SKZwvvX3rVGgcKya8p%2FCH%2FCNDxn0%2BOPRJwdVJreGer4H8etlxWVtnE43vEb9T&X-Amz-Signature=1c103b9603ab35af4b8b04280c00eec130beeacb50173d4abb6669103d67ca6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
