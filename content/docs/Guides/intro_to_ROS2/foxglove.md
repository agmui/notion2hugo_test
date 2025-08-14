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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZDXEGHS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6MmpEpBVSix%2FMMUx7Z0YmOOi5hrc7BK%2FOzjE2ImRjdAIhAIwrk92RlwqOPdfK01AyNmEaG3iXyrOOdXPtAlgcG1MfKv8DCEEQABoMNjM3NDIzMTgzODA1IgxabA3NwjqroN6Ki7Aq3ANFF85mt2Ty18iKJDOCYUV7TDBVLdt9RrFYcydbnLKJmglYXJr%2Fw4LPBNHQkqr4ZXOfff7waDLZEG%2BKQbu8sU8NID4ausognZgKbxsAAbDc1IEiZ7a5bKmabE8Dc41rwEtc9GHCN%2F59xJQaloyR38zgzOJA2kMhcbw6WCyOgs3zMGmDapeLPXGTn0huJTz9tMJMShfRdlqCY%2FvGdbqTNA8O9lGK%2BteSen02ipkdolGlHvquFwPkpdjM8t0OIcJ2yfHuCCHKZ2O0qFIkIRtLGo8J4PWbK5Sqde4PLtuS2tgy2922GM0AtZ0KFVkn1ozWqk04S9jgK8Myjo1QiWhLE6kDHlrTxpxhhLAUk3hmBYkYAyiW4vfnfnpDSFr89F5ltQBsMsLFLVCkegzxfW2tokfpdMG%2Fz%2BSyN%2Fqlx5%2FJAUTCaJ3mpIX7ExhSIuBg87uw42IeYJRzw5c4e2oRCH52JK0Abc7LhkaKGgFlXOjcUMRwLovbgg0%2BkiW5tIJVjmTWFBcpqFLGI58MgbOFR2G%2FjZbgg4O%2Bs9O8eJhXvb5TH8by3xuzlRNpnN0hB%2BqydgAW8G3OyrEeSQAb%2BOCHHvTb4R8t9ggmjTqLKXGUTkK5XyaEzDFWPTfrogj2inFX2TCtr%2FbEBjqkAWkxqv5kLHOXJxU1RIB0iPGr6lSBylphwEyrgDzEiX%2BiR3a6dHuM7onIQFGgMgGDpZchIBzjfCWaaMerDeTD6LKuawOpFOzRYsHJeQPmsJAYIp0a6xOaGdCAKWte9zzOdJHcPCmV6anGjDnarSDSNNYu8JtOhkrJ9hm4c4rjF%2BFH4aLWsquoEM%2BHT3YvJALj3%2Fo%2FksKuQpss6bhdGsilxqNikHvL&X-Amz-Signature=cbc8345a5fb13180fdba191375eeddc70b2c24711145dfc8defe9e00a2fc5cd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZDXEGHS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6MmpEpBVSix%2FMMUx7Z0YmOOi5hrc7BK%2FOzjE2ImRjdAIhAIwrk92RlwqOPdfK01AyNmEaG3iXyrOOdXPtAlgcG1MfKv8DCEEQABoMNjM3NDIzMTgzODA1IgxabA3NwjqroN6Ki7Aq3ANFF85mt2Ty18iKJDOCYUV7TDBVLdt9RrFYcydbnLKJmglYXJr%2Fw4LPBNHQkqr4ZXOfff7waDLZEG%2BKQbu8sU8NID4ausognZgKbxsAAbDc1IEiZ7a5bKmabE8Dc41rwEtc9GHCN%2F59xJQaloyR38zgzOJA2kMhcbw6WCyOgs3zMGmDapeLPXGTn0huJTz9tMJMShfRdlqCY%2FvGdbqTNA8O9lGK%2BteSen02ipkdolGlHvquFwPkpdjM8t0OIcJ2yfHuCCHKZ2O0qFIkIRtLGo8J4PWbK5Sqde4PLtuS2tgy2922GM0AtZ0KFVkn1ozWqk04S9jgK8Myjo1QiWhLE6kDHlrTxpxhhLAUk3hmBYkYAyiW4vfnfnpDSFr89F5ltQBsMsLFLVCkegzxfW2tokfpdMG%2Fz%2BSyN%2Fqlx5%2FJAUTCaJ3mpIX7ExhSIuBg87uw42IeYJRzw5c4e2oRCH52JK0Abc7LhkaKGgFlXOjcUMRwLovbgg0%2BkiW5tIJVjmTWFBcpqFLGI58MgbOFR2G%2FjZbgg4O%2Bs9O8eJhXvb5TH8by3xuzlRNpnN0hB%2BqydgAW8G3OyrEeSQAb%2BOCHHvTb4R8t9ggmjTqLKXGUTkK5XyaEzDFWPTfrogj2inFX2TCtr%2FbEBjqkAWkxqv5kLHOXJxU1RIB0iPGr6lSBylphwEyrgDzEiX%2BiR3a6dHuM7onIQFGgMgGDpZchIBzjfCWaaMerDeTD6LKuawOpFOzRYsHJeQPmsJAYIp0a6xOaGdCAKWte9zzOdJHcPCmV6anGjDnarSDSNNYu8JtOhkrJ9hm4c4rjF%2BFH4aLWsquoEM%2BHT3YvJALj3%2Fo%2FksKuQpss6bhdGsilxqNikHvL&X-Amz-Signature=4e1ea8b50b671dcef2f6343f3928732fd44236d7bbf0316d99482e3440cdc094&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
