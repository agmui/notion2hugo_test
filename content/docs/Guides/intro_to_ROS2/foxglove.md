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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CSPZFWY%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDgqraYhNdThaX7lMoipgDZgQ%2FTASC29srcJGuUkRqo4QIgFweT1q5gNAjfOrHq%2BfOgsXve4zV7HSymAvjAA1evaVkq%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDBE%2BOlKLWd4n7QwUrircAzOFW6zzF4tUWh032LpFYeuaB2epqr9vTIK7egrT5BEX8J9QjxPIIB3Q%2BugXYYGqcte%2FeNNYNBY6RT5%2FZMxC6i6y%2BmECd9nZVLlKfanPiGNVRMspnAfKWXlv6%2BO4raPZ6OTOU2wYx0BsYXUfwYGRqVN5tDSktMk2euzok5oK8agt%2BMD16HR7fu4aJsZlle%2BUzeLxfdAwJEQM7%2BM1EK2Nhg9vMi89h%2BxmxAJEiHCY1JsrpKGa9iDjTPqO3vd%2B3%2BP6TNVqiE%2FvIhxaLwtd3qXOmmP1YWJay6slZqGl%2Fe38tu0M044L6ChZ6lUixgldQU6Dl22vMtfBXZ8Wdjft9AwRVVc8K0IkaLPnEeChHmH%2Fuh74OmOanNK7jXTmxCPcPXCl%2FT8Qy8U6JIMpMnyn6mC45GMrTQk5Kede6BsWuJKrLu0kNRbp1kxQCFgYgQ%2FY2BtYRux8d%2Bfos3fibxgjKtC9AMKYm3ZgkCAw1VBzIN6UBDsrgKTAdm6VvRhTM%2BZ6lQFpBi00DkosNUYKDLEdqIkB8VVJYjzLWp4iGq1ayRBpL12G8UAY8KZYYGKK2nRWI3VKe5lD3nJ1a046zY9w82kN5Ka19t1aSorn3kKfgyB7JsA%2FD%2BN%2BZpkc%2FKEs22byMOWD%2BcwGOqUBRUEj3%2FM8fGcgP3E%2BtYlLK7ZgV5Gcsdpsz6dHe4jQpOdK5LPQ3TFV8ecGDdCf5fZkskhG9cuJtcYWnG1tK3B%2Fp28SYWqo3P88TnoG0ADL5fdgl5A58OgvsCF1PcBVtrWqocf3skR74NMb%2BjJEzItzs8t0ZXjwqL%2BHqx7ZN%2BbspHj%2FoSpeimLLdadlUbyVbOPuLwzk3NzSFyha3jRYra%2BfkmFGIdmn&X-Amz-Signature=28c0a4f2899efe934a83ef70e0b9e1244b710b665be042ac945b02bea602971a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CSPZFWY%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDgqraYhNdThaX7lMoipgDZgQ%2FTASC29srcJGuUkRqo4QIgFweT1q5gNAjfOrHq%2BfOgsXve4zV7HSymAvjAA1evaVkq%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDBE%2BOlKLWd4n7QwUrircAzOFW6zzF4tUWh032LpFYeuaB2epqr9vTIK7egrT5BEX8J9QjxPIIB3Q%2BugXYYGqcte%2FeNNYNBY6RT5%2FZMxC6i6y%2BmECd9nZVLlKfanPiGNVRMspnAfKWXlv6%2BO4raPZ6OTOU2wYx0BsYXUfwYGRqVN5tDSktMk2euzok5oK8agt%2BMD16HR7fu4aJsZlle%2BUzeLxfdAwJEQM7%2BM1EK2Nhg9vMi89h%2BxmxAJEiHCY1JsrpKGa9iDjTPqO3vd%2B3%2BP6TNVqiE%2FvIhxaLwtd3qXOmmP1YWJay6slZqGl%2Fe38tu0M044L6ChZ6lUixgldQU6Dl22vMtfBXZ8Wdjft9AwRVVc8K0IkaLPnEeChHmH%2Fuh74OmOanNK7jXTmxCPcPXCl%2FT8Qy8U6JIMpMnyn6mC45GMrTQk5Kede6BsWuJKrLu0kNRbp1kxQCFgYgQ%2FY2BtYRux8d%2Bfos3fibxgjKtC9AMKYm3ZgkCAw1VBzIN6UBDsrgKTAdm6VvRhTM%2BZ6lQFpBi00DkosNUYKDLEdqIkB8VVJYjzLWp4iGq1ayRBpL12G8UAY8KZYYGKK2nRWI3VKe5lD3nJ1a046zY9w82kN5Ka19t1aSorn3kKfgyB7JsA%2FD%2BN%2BZpkc%2FKEs22byMOWD%2BcwGOqUBRUEj3%2FM8fGcgP3E%2BtYlLK7ZgV5Gcsdpsz6dHe4jQpOdK5LPQ3TFV8ecGDdCf5fZkskhG9cuJtcYWnG1tK3B%2Fp28SYWqo3P88TnoG0ADL5fdgl5A58OgvsCF1PcBVtrWqocf3skR74NMb%2BjJEzItzs8t0ZXjwqL%2BHqx7ZN%2BbspHj%2FoSpeimLLdadlUbyVbOPuLwzk3NzSFyha3jRYra%2BfkmFGIdmn&X-Amz-Signature=262e69bb465bf29e117806e67622a46a35ed5f5a4119ecec2590f3ae2e43ecfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
