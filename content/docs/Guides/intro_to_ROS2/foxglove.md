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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KC226PZ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIFYbUNpqfrXZvM4nJXyiLlIsUj8ggUszEJ4baa6fLSquAiAHoXUlzWs4Ix7p4WcExm%2FuHVUVaB59BkcoHAciFa1tnyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMHLm00bZshPpgNYNwKtwDhUEfMTChX9fGW9r1y%2FN4aFV%2F9Ah%2BA69Ru0yC9WjNLQk0HCobtfcGcAxt3oA2McNGJ7peR0DLqoiFni179bfgcBTDq53GT9gv1%2BCbGzCcpAyWGGEXeb%2F36C%2FL1d5EzD7OtVa1xv0rS5zQo4wFTt3R6oPsY9oJWA%2BoRw98kyG3t%2FzPRdNoY5eHRi%2BxKB4Ibnk%2FAqlkXxeQ0XQSHfH7jRPXDmD4tmpJed91y%2BSgRuhl4XbCapbl1kS4kR7OKPizWZYCcyWsuj2AYKAh4GSQvWELLoK%2FxaHnXj5obpauDs976Xh6M0SWVC4g5omK2k3VljLh4fu6iP3uyBgy3gIClEprr8nj17pOPDY8adqFVCDLlA8BWmv8H%2Bn2Ne53N5VM0ygqFfTR8kTpbWgWGYAbDNl8mJWCpsWYggJU0XAfW8YdYFAOq2hD7AzwWyRUpRnXCnNRlNPEziFtz5GWakwjHljJWXrRzy%2BeymRw20bOtYNvYGqlnUgPELATV6ddNFk5g8c%2FVmRMb8p99skNpYfHs7xovUA6z0dohM2mVjAhpp6tEM53vWUDC5CdaCTuiEwczMxnzK8%2B8RqLzyD0MY0LuOXk2Ojph5Y7yXBHNKtABWNTyXS9JFwR1HvdNlPzku4w8ZmCxQY6pgEAuXkJXlS1E%2BkxoOwYgq2h94t32cVDR7dfz%2Bt78dUCU4IeALTFt2TSTfBz1SpuN59XY3EWd8XrjTx5zHCKqzv9yirEFijoGDv%2F84qfrUgOyGFyls67ACda9TEGV%2Bm5kUe4TCpOyaVKxjYXHXgPdxErOgk51%2Fg0gSBI1V3tmUYFHDiHWkZr9p1Kf%2FE4PK0XeXQxO3QO%2BdqpvPdAJqma3yDJNUvlfLgc&X-Amz-Signature=d72a54b59bd5a5b0b1b890ffdb16b8c95c89d89710cd9c92d04bde7e1cc758c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KC226PZ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIFYbUNpqfrXZvM4nJXyiLlIsUj8ggUszEJ4baa6fLSquAiAHoXUlzWs4Ix7p4WcExm%2FuHVUVaB59BkcoHAciFa1tnyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMHLm00bZshPpgNYNwKtwDhUEfMTChX9fGW9r1y%2FN4aFV%2F9Ah%2BA69Ru0yC9WjNLQk0HCobtfcGcAxt3oA2McNGJ7peR0DLqoiFni179bfgcBTDq53GT9gv1%2BCbGzCcpAyWGGEXeb%2F36C%2FL1d5EzD7OtVa1xv0rS5zQo4wFTt3R6oPsY9oJWA%2BoRw98kyG3t%2FzPRdNoY5eHRi%2BxKB4Ibnk%2FAqlkXxeQ0XQSHfH7jRPXDmD4tmpJed91y%2BSgRuhl4XbCapbl1kS4kR7OKPizWZYCcyWsuj2AYKAh4GSQvWELLoK%2FxaHnXj5obpauDs976Xh6M0SWVC4g5omK2k3VljLh4fu6iP3uyBgy3gIClEprr8nj17pOPDY8adqFVCDLlA8BWmv8H%2Bn2Ne53N5VM0ygqFfTR8kTpbWgWGYAbDNl8mJWCpsWYggJU0XAfW8YdYFAOq2hD7AzwWyRUpRnXCnNRlNPEziFtz5GWakwjHljJWXrRzy%2BeymRw20bOtYNvYGqlnUgPELATV6ddNFk5g8c%2FVmRMb8p99skNpYfHs7xovUA6z0dohM2mVjAhpp6tEM53vWUDC5CdaCTuiEwczMxnzK8%2B8RqLzyD0MY0LuOXk2Ojph5Y7yXBHNKtABWNTyXS9JFwR1HvdNlPzku4w8ZmCxQY6pgEAuXkJXlS1E%2BkxoOwYgq2h94t32cVDR7dfz%2Bt78dUCU4IeALTFt2TSTfBz1SpuN59XY3EWd8XrjTx5zHCKqzv9yirEFijoGDv%2F84qfrUgOyGFyls67ACda9TEGV%2Bm5kUe4TCpOyaVKxjYXHXgPdxErOgk51%2Fg0gSBI1V3tmUYFHDiHWkZr9p1Kf%2FE4PK0XeXQxO3QO%2BdqpvPdAJqma3yDJNUvlfLgc&X-Amz-Signature=33765fb00b50a53c528658281ef593a8e30f37a72e0352b75e2b3eef4c8461dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
