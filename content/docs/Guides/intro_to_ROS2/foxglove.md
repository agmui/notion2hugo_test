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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QNSOE7V%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCMWuinSZ8v5cBxp2%2FD6gTSnOHlf2xjIM16YtT2DgHW0wIhAKyXjCtUI4enozmHO1I7cR2MKAA1ZjEyzE9ylz4X0lDCKv8DCAMQABoMNjM3NDIzMTgzODA1IgzSb0W8%2Frz6psyWd3Iq3ANKI4657PlXbCgmd%2B1BLLEPXdAsD8IlxsEIwKOH1LuI7Yhxzih5QEUsi3HBV3ZpLlR8dSAYKsVsLvdp4MB602t3w22XQnpCIc77Ffxip67X3r4Aha%2B5ij9XVZ1xiXWdfeULD1KO0qT5kyxbog%2Fhux75jQoUEs7Wd0Cdod6z40HtbHNz%2BR6rrh1Zc54AfJs7hXSMUEQMrZVLoK5xiwv%2FbNrx%2BOAR4aQdpHBxEGJdpORZQ0fh9ZvR5l65bioWLADiFlhDc7uLNDJFJ4D5GpdUFduYqdVxSxjt71mito2JpjbWYWGJ1YxP5RX9rEAceFfO4X6oK0EGbchHJtTrom%2BorHnO1%2BOwI5bUzLaERwt8h7G2MsFK%2FYjg7tuCI3cj%2BAWlyGQ5L7tDN9f%2Fgs5wlvxjwBtkFaAbBJn9zUI90p5I9Ce80ZiqokXAJI2UlNPuBUE2TDwtYcQucyfs3XXOBhwt2O1nc1J%2BYosLWQ%2BFKBn8hzY2ZPHUfrf7gAE31uQ8ScGqP6pDsnTZrycIH0Qx4MrBRvzSAuIc4M%2F1k%2FRKP8Z6RAtQCU1o%2FvcdIB1JxWaMMeZ7OOMu%2FigeW5DrA1h9bkf9YpiCrhdFOEEjLtkyblAN1R1YZnJh2kBQLI2NzqyCRTC%2Bgf%2FIBjqkAWK8BXt%2BXTMfOA%2F0RqX3ZATZK7h13OFvM0t3Af6m%2BBgvQYNRP269p8IxPq7voynlp2sUXoakTc9A24WLkpYvMBdaliO2Y7Rx1s%2FRwvMj35WR0qyl6Td5axV6xCmljQWEaZPOMxnSxm%2Fke37OOD%2Fkt6JWLKFNG%2BYMbCax514sHBxWiUJfKK8%2FZYfl9JgrWB7%2B5pp8SXdoYDg5O0blwlEIetBd7iiJ&X-Amz-Signature=823e9dd6dd77c6285f3bfc33e297721857185d662835f45fd5a82e5adee76d80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QNSOE7V%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCMWuinSZ8v5cBxp2%2FD6gTSnOHlf2xjIM16YtT2DgHW0wIhAKyXjCtUI4enozmHO1I7cR2MKAA1ZjEyzE9ylz4X0lDCKv8DCAMQABoMNjM3NDIzMTgzODA1IgzSb0W8%2Frz6psyWd3Iq3ANKI4657PlXbCgmd%2B1BLLEPXdAsD8IlxsEIwKOH1LuI7Yhxzih5QEUsi3HBV3ZpLlR8dSAYKsVsLvdp4MB602t3w22XQnpCIc77Ffxip67X3r4Aha%2B5ij9XVZ1xiXWdfeULD1KO0qT5kyxbog%2Fhux75jQoUEs7Wd0Cdod6z40HtbHNz%2BR6rrh1Zc54AfJs7hXSMUEQMrZVLoK5xiwv%2FbNrx%2BOAR4aQdpHBxEGJdpORZQ0fh9ZvR5l65bioWLADiFlhDc7uLNDJFJ4D5GpdUFduYqdVxSxjt71mito2JpjbWYWGJ1YxP5RX9rEAceFfO4X6oK0EGbchHJtTrom%2BorHnO1%2BOwI5bUzLaERwt8h7G2MsFK%2FYjg7tuCI3cj%2BAWlyGQ5L7tDN9f%2Fgs5wlvxjwBtkFaAbBJn9zUI90p5I9Ce80ZiqokXAJI2UlNPuBUE2TDwtYcQucyfs3XXOBhwt2O1nc1J%2BYosLWQ%2BFKBn8hzY2ZPHUfrf7gAE31uQ8ScGqP6pDsnTZrycIH0Qx4MrBRvzSAuIc4M%2F1k%2FRKP8Z6RAtQCU1o%2FvcdIB1JxWaMMeZ7OOMu%2FigeW5DrA1h9bkf9YpiCrhdFOEEjLtkyblAN1R1YZnJh2kBQLI2NzqyCRTC%2Bgf%2FIBjqkAWK8BXt%2BXTMfOA%2F0RqX3ZATZK7h13OFvM0t3Af6m%2BBgvQYNRP269p8IxPq7voynlp2sUXoakTc9A24WLkpYvMBdaliO2Y7Rx1s%2FRwvMj35WR0qyl6Td5axV6xCmljQWEaZPOMxnSxm%2Fke37OOD%2Fkt6JWLKFNG%2BYMbCax514sHBxWiUJfKK8%2FZYfl9JgrWB7%2B5pp8SXdoYDg5O0blwlEIetBd7iiJ&X-Amz-Signature=128b76b1e241d41d8900a0e82248a556ab2b691bdfe3ec63ef55fc00e45ccaa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
