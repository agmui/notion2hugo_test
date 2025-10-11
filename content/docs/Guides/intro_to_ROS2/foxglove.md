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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JYL73P3%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIHfy%2FINKpn%2B46RRohAhJK5Cw%2FMP7EvyqRcDwnRXHjLraAiARfkTj413S77E9OGNDX83IRbKXb961eteCvv0%2FNy4fSyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeqwLa6nwYV0IYRlYKtwD3yWjz1WW5O0BfodUCtUwc%2BJW5ofCiczPCroGtRoedKXcrsvNAzw6oem6Pn6gqG%2FdR3WfeiVWhRE%2B2AQiuRXPP6R0sRp0bvNNEQUszlo1DUId%2FQE4Tw9gZe5nIDtbygb0LndbPHt4%2Fw77Xaho6C4psOIjB5JeThP8mbP%2FhxuvC26DQOrIkg%2BqAnU4zIBgCQQK8VLvUzKDHvfNzd878D52wB4SM3IoI3AQh25korAX%2FG%2FAF9dc17cMww%2FsSUv5Di9I2JhY%2FqUZnq5OA9qX0DsQ05OFpgbPpUeb2eGjKawaficFg36GESqEvjhuyJEh2uyu57Cd1EscMFu8XHUmpaMt8P2Hn9S5ZuM94eeTW2p0lY7DKkwrFn%2BvPccuR3WbM7M%2BTUTS0QIBb1YcVvaVSbkDX7ONb7LUlwEU5YTkR496bwmpa85GrWIExpPelZtVn7dfn52GmnJE6780LhLU2KOz1wcbw7lf2tEmqjC9%2BAtTnLVNBi6VC%2FZfEz0MNv5Xq%2BohDkWfenOxa2gqizB5MiBPsyJk%2BSimpaJSgsCszKqnqhyG%2BKkrOAXSBgzTsas1w7c9Pw%2BlevVvXljx2J1Cuytr2eMSf0cgSroHV2iladviivSema0a%2By1itt4zfucw%2FtemxwY6pgGlGk4JGGmv1maGkl%2FZzbkU8F7YP4ZH%2BwwpdGqy9n3vsEL%2Fq5BaqpXxTca%2Br9qHD79wQew3ABcyofTtCAUPx9mrX%2BkXvPszjln%2FrYw23BmLcbnHiTBnXbSmEgQy8xg%2Fn4L84F3YddW4oapoJBQwxH%2Ft2Xg4eFH9ZPHTJGYFo%2FeE0ZkbQ4ljFq7x2M14NGVF5N4ASyM34JzXZGcX9I193DvHwn7x25lL&X-Amz-Signature=3fedbb826407fb802c7158a28deccd147d876fb3fec4b962c160975f6c340874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JYL73P3%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIHfy%2FINKpn%2B46RRohAhJK5Cw%2FMP7EvyqRcDwnRXHjLraAiARfkTj413S77E9OGNDX83IRbKXb961eteCvv0%2FNy4fSyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeqwLa6nwYV0IYRlYKtwD3yWjz1WW5O0BfodUCtUwc%2BJW5ofCiczPCroGtRoedKXcrsvNAzw6oem6Pn6gqG%2FdR3WfeiVWhRE%2B2AQiuRXPP6R0sRp0bvNNEQUszlo1DUId%2FQE4Tw9gZe5nIDtbygb0LndbPHt4%2Fw77Xaho6C4psOIjB5JeThP8mbP%2FhxuvC26DQOrIkg%2BqAnU4zIBgCQQK8VLvUzKDHvfNzd878D52wB4SM3IoI3AQh25korAX%2FG%2FAF9dc17cMww%2FsSUv5Di9I2JhY%2FqUZnq5OA9qX0DsQ05OFpgbPpUeb2eGjKawaficFg36GESqEvjhuyJEh2uyu57Cd1EscMFu8XHUmpaMt8P2Hn9S5ZuM94eeTW2p0lY7DKkwrFn%2BvPccuR3WbM7M%2BTUTS0QIBb1YcVvaVSbkDX7ONb7LUlwEU5YTkR496bwmpa85GrWIExpPelZtVn7dfn52GmnJE6780LhLU2KOz1wcbw7lf2tEmqjC9%2BAtTnLVNBi6VC%2FZfEz0MNv5Xq%2BohDkWfenOxa2gqizB5MiBPsyJk%2BSimpaJSgsCszKqnqhyG%2BKkrOAXSBgzTsas1w7c9Pw%2BlevVvXljx2J1Cuytr2eMSf0cgSroHV2iladviivSema0a%2By1itt4zfucw%2FtemxwY6pgGlGk4JGGmv1maGkl%2FZzbkU8F7YP4ZH%2BwwpdGqy9n3vsEL%2Fq5BaqpXxTca%2Br9qHD79wQew3ABcyofTtCAUPx9mrX%2BkXvPszjln%2FrYw23BmLcbnHiTBnXbSmEgQy8xg%2Fn4L84F3YddW4oapoJBQwxH%2Ft2Xg4eFH9ZPHTJGYFo%2FeE0ZkbQ4ljFq7x2M14NGVF5N4ASyM34JzXZGcX9I193DvHwn7x25lL&X-Amz-Signature=8dd2baf4f7df7c743e5f64e82ad6502b431aeffc090e715b097db2a5d66a1a60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
