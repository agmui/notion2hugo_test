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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WFIQOGJ%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGut7oOD33Jsfb3lDz4oObuZmZxAIEQdBapg0%2FfGZXFjAiAZQJiYETGPBomGBVvGGZSldZlr94FQymuQjjUfz195xiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZsQ1ppAxZW26JtrfKtwD%2F60kbb%2BqYSnuY6qnMyo3p5jPBfPWmcm%2Bpzsc5BIfycs8yoAu9JgMOMCujSWZKKWOb%2BL9IhtcpX7MgKwsIGvaaSNy3GqzE8%2BtdHqcsQJMdgnbUNyhiUF3ED5V4zE83%2FeIevS3GQmSqYmgqerY1zrhNNjxYljapgX%2BO%2BdDJQBqkg0oKm%2FsnUg0gRoNSdb6og9dclA9LjIZlGG2L%2Bg5ZCaf2k4cDMwFhWbrmlKmWp1kcuhD1XIrnj%2BIaCo7OvPxIs%2B0rlDzvjYEt4lpnJ1UG%2FczaRrbmpUsb77424JlMIBRsKA797%2FA7nhIW6cjjlculHFPg2oXi756HvGh7G1nhdJlotAe7UWojbjnBgo1UaKfA6U8iPWLWAhPxX106b1w%2FfnwKBxSab6vLpCRcNZQPHxFBjPOAIHCpaqoEip8lNAFxte%2FNUkOxULNOQxtDe93YmfnVQBFNWIrBDPrOowkXbPT95zswSlEqT0vkn%2B%2FuZPfVvOhBYVbTOfJBmvuJdZCH0Ulb59TU2UmhHWyJjqIvB21tkg%2FbA7KAI47Nvqea7iyDAjqdtgIvhBGC%2BX8oq%2BOX83EXvvP00E6GEO8yL54R%2F0EdsnmDnUJeeP2n6ZTJk%2FE23Ic4b%2B5itzR6tpcZ9Aw%2FMK60wY6pgFSlq%2F%2FjVUgYqjCxCWC5AreBgvLxmtLgH7z8W22CF%2BK7bIrEEpN6ZAq8cQGW2vyu%2FCb9Akzt9KUsd1MBWI53U4XxfFuw%2BHuuDgM5NFgCRKFqb7eQoaV2whj%2BSDwYkoJBxFb6O%2F3s6%2FJGvrKCDeZK6D7PgO3iit1S3pILwy%2BTApd%2FptV18j4L%2BhRqOJp2BQ%2FhvYnyibS2O8oSFbEUxcCxu6cTFFYIdRB&X-Amz-Signature=8d37d59d3c58c1810910a46eb4cafe9d9f5e4d6c187b343fc57a5ef1bdfa0c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WFIQOGJ%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGut7oOD33Jsfb3lDz4oObuZmZxAIEQdBapg0%2FfGZXFjAiAZQJiYETGPBomGBVvGGZSldZlr94FQymuQjjUfz195xiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZsQ1ppAxZW26JtrfKtwD%2F60kbb%2BqYSnuY6qnMyo3p5jPBfPWmcm%2Bpzsc5BIfycs8yoAu9JgMOMCujSWZKKWOb%2BL9IhtcpX7MgKwsIGvaaSNy3GqzE8%2BtdHqcsQJMdgnbUNyhiUF3ED5V4zE83%2FeIevS3GQmSqYmgqerY1zrhNNjxYljapgX%2BO%2BdDJQBqkg0oKm%2FsnUg0gRoNSdb6og9dclA9LjIZlGG2L%2Bg5ZCaf2k4cDMwFhWbrmlKmWp1kcuhD1XIrnj%2BIaCo7OvPxIs%2B0rlDzvjYEt4lpnJ1UG%2FczaRrbmpUsb77424JlMIBRsKA797%2FA7nhIW6cjjlculHFPg2oXi756HvGh7G1nhdJlotAe7UWojbjnBgo1UaKfA6U8iPWLWAhPxX106b1w%2FfnwKBxSab6vLpCRcNZQPHxFBjPOAIHCpaqoEip8lNAFxte%2FNUkOxULNOQxtDe93YmfnVQBFNWIrBDPrOowkXbPT95zswSlEqT0vkn%2B%2FuZPfVvOhBYVbTOfJBmvuJdZCH0Ulb59TU2UmhHWyJjqIvB21tkg%2FbA7KAI47Nvqea7iyDAjqdtgIvhBGC%2BX8oq%2BOX83EXvvP00E6GEO8yL54R%2F0EdsnmDnUJeeP2n6ZTJk%2FE23Ic4b%2B5itzR6tpcZ9Aw%2FMK60wY6pgFSlq%2F%2FjVUgYqjCxCWC5AreBgvLxmtLgH7z8W22CF%2BK7bIrEEpN6ZAq8cQGW2vyu%2FCb9Akzt9KUsd1MBWI53U4XxfFuw%2BHuuDgM5NFgCRKFqb7eQoaV2whj%2BSDwYkoJBxFb6O%2F3s6%2FJGvrKCDeZK6D7PgO3iit1S3pILwy%2BTApd%2FptV18j4L%2BhRqOJp2BQ%2FhvYnyibS2O8oSFbEUxcCxu6cTFFYIdRB&X-Amz-Signature=31f24d3568332f214f0bcbb66fe32667db91b472cf9cacfbd8485a45f1ff4713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
