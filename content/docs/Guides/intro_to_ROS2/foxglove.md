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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP2NJPMW%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs9yVEoDS8rnyQo0sql7rpUCrAxoMuXa4MGY0VybSWQwIhAMdKXb3AtTCXMsz6gnDu495KxdasQ8BO5ypAWMu%2Fxcu%2FKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvkrpZwJ7g58kBN48q3AMRrNzBnDlJSjnxkJmTEYC3oYdIjdrTzsrPLRlgfnmXTw%2FnLWy%2BEo4k5g0aKDgAQyuOONbGJpqRi3nt%2Fpi51IMN1IYM%2BCdomIJnc0y3dJO4IO9BrA2A75c6miPxBbcUnkrwNFV3ma%2F3nqivdtKNpEYYF12uhQY1q6PO0eHqnuIsPPRbnzFQL2Jnn8ICowaYT43%2FfC6RxkyHoHLhBVr1AiNZM7F91BO2Ao6zFgxSU7Byc4mi3MXiuTYGNnNg6JSMukcnbUuQJsTQ7nQRa8KiaO3OVgj%2B9qeM8Y9Odqdwi6SlDxQSoBBmgANi%2FfXDcK%2Bi3XmsIZwu6LyeFclgi7qyRf7vu%2BIgj0aULxlbR5Byzdw7Ej2AYvX9Ypqpcn5Tx1R8nAEVQaOSWaz1vhr2ELpQBIngUf0Nl2FAQ0qTG%2BJbXmE31%2BMoLAWIxwQGSlyHN29m2lONfaCHB2OO7sQo292yuRDDtp16C3nYo3%2FPF64Ww2wQXhayPFT3miPZMd01eZBXQdX2%2Fb3abIpOAVdESaIsETBAwmn26SNcUWiE08GoLM6%2F78kusqEVqpY8%2BX4hoen%2Bmythfh756af7xV9o57H0pBJxQnn1gY4siCml0E6CNBdMCMjdMFZF4jIZzyx9wzDYv5jRBjqkAV75w95LobBzLsyR%2B5E0vFAsHTPj6lnteca%2BXEvf0SFGNU32XyjDM887k2rUY2R1cDweM83Si9zVkV9eiXv7r3T%2FFgT4Bt0pMPOlPmeWETD%2FLdJH7CV2vj8LXQqvPbd04Y31q8CqAR7eWFcsU9rsEN04Ay9q%2BHGyturYuucfl6FyelnQVWiaGTko1wzaOQJKh1vd%2FdznGdgxzMBMqSzKWttiPQX8&X-Amz-Signature=3a8296ce09e65e81f66097e3cd1b1e4eda603ddea0bfbd5dbe5f1f8b7534ef0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP2NJPMW%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs9yVEoDS8rnyQo0sql7rpUCrAxoMuXa4MGY0VybSWQwIhAMdKXb3AtTCXMsz6gnDu495KxdasQ8BO5ypAWMu%2Fxcu%2FKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvkrpZwJ7g58kBN48q3AMRrNzBnDlJSjnxkJmTEYC3oYdIjdrTzsrPLRlgfnmXTw%2FnLWy%2BEo4k5g0aKDgAQyuOONbGJpqRi3nt%2Fpi51IMN1IYM%2BCdomIJnc0y3dJO4IO9BrA2A75c6miPxBbcUnkrwNFV3ma%2F3nqivdtKNpEYYF12uhQY1q6PO0eHqnuIsPPRbnzFQL2Jnn8ICowaYT43%2FfC6RxkyHoHLhBVr1AiNZM7F91BO2Ao6zFgxSU7Byc4mi3MXiuTYGNnNg6JSMukcnbUuQJsTQ7nQRa8KiaO3OVgj%2B9qeM8Y9Odqdwi6SlDxQSoBBmgANi%2FfXDcK%2Bi3XmsIZwu6LyeFclgi7qyRf7vu%2BIgj0aULxlbR5Byzdw7Ej2AYvX9Ypqpcn5Tx1R8nAEVQaOSWaz1vhr2ELpQBIngUf0Nl2FAQ0qTG%2BJbXmE31%2BMoLAWIxwQGSlyHN29m2lONfaCHB2OO7sQo292yuRDDtp16C3nYo3%2FPF64Ww2wQXhayPFT3miPZMd01eZBXQdX2%2Fb3abIpOAVdESaIsETBAwmn26SNcUWiE08GoLM6%2F78kusqEVqpY8%2BX4hoen%2Bmythfh756af7xV9o57H0pBJxQnn1gY4siCml0E6CNBdMCMjdMFZF4jIZzyx9wzDYv5jRBjqkAV75w95LobBzLsyR%2B5E0vFAsHTPj6lnteca%2BXEvf0SFGNU32XyjDM887k2rUY2R1cDweM83Si9zVkV9eiXv7r3T%2FFgT4Bt0pMPOlPmeWETD%2FLdJH7CV2vj8LXQqvPbd04Y31q8CqAR7eWFcsU9rsEN04Ay9q%2BHGyturYuucfl6FyelnQVWiaGTko1wzaOQJKh1vd%2FdznGdgxzMBMqSzKWttiPQX8&X-Amz-Signature=eabe37433ff41ee7006d97bbc0a0c6e6271da79d8ebf623d7c5239edf34ee2a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
