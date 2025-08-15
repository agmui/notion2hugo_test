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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCNHFVKW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIG3gL5VVXpiU7oaT6Km2TtDPtmLCSlZYuXRBOUH4RdEvAiBuXJCnzhd%2B6RizplcGxOIDtSGhHitqnHTGu%2F%2BVnzPFeyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMoG9OPV10khj39xj5KtwDFeo0a0JgDvOHHJ3ZLFnCt%2Bo%2B2feREVjOLJaLM8Xk1FA14lHwiT20kwp5pLdUBdIAWF3X0C12anCcABYV91ZZeEhuSDQUgNm8t6vBVRYC23hTe2Opzq93fbExGrW3VYzsXGgFobEPiYiTND1keEgmsNx6eLC2ztMhV4S%2FiudDfN5YZeRYky5QDQKzQiKOADj7EWngYyCqAzX7pXZOWVxUlmGdPdTCPX9ceio89eSdMTET6XMzkdvXMP1MZZdDkrTTFx2WmYm%2FjDLzsIWsMwBUnZcUZvBGTIkmQRtO91Q7MaKoqfXIQXx1Hvdx85c2Y%2B20UKXKWx%2FIkkkGnUMt35aiy8IMcpQqmP6HVQjOrgNJu2Pmi8XkkLXiEFs1w7taCf3eNE0Cp9c2o%2FXbJj7JuwjVywTWCuYuh00JaPdN4n4j0gMQohPVBWnY17c5pPkXZfne9ee3aM%2BH%2Bn6LUNNrXuk1vazxtgP2mL7xE6tuA0XirGDdaihkaYSzVI4gAwGFEMCPzG8TWy%2BXMig8OZc5rh6jRGTe2QmPvG4K0zn1I8J9e%2Bvbl9q8Y6UAcVHprGulOw%2B9RwgW1kI63LUJJk%2Fzi%2BxFKcvJdq%2BYc4KjcvRpmAm31fmsu%2F0mGPRvlei4H9Ewgdv9xAY6pgHG9d254iOjk2cpkzcNzrRFo852E5I620cB7RqXgzF8JQusErkN2P6nahjm%2FpTcNY%2BpI7U63cjmubc3q%2Bs4mzUcZHQiFjXSER7LUpRuzRNKb7O%2F29wekBKkJnUI2Fu5Tr6CzOXtVX2rikFTS7Lc9ef77nATh8sIbl6z5g9dkCSzGvxRIwDQueTI%2FUEgGpRbDNbUPZ1KBuJUNipA55Mu2bA8MQG3Jx9c&X-Amz-Signature=3cee9ace1bd977c6ec4467547ccf57d365b9da9da93baa0bff4832182f3ce6be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCNHFVKW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIG3gL5VVXpiU7oaT6Km2TtDPtmLCSlZYuXRBOUH4RdEvAiBuXJCnzhd%2B6RizplcGxOIDtSGhHitqnHTGu%2F%2BVnzPFeyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMoG9OPV10khj39xj5KtwDFeo0a0JgDvOHHJ3ZLFnCt%2Bo%2B2feREVjOLJaLM8Xk1FA14lHwiT20kwp5pLdUBdIAWF3X0C12anCcABYV91ZZeEhuSDQUgNm8t6vBVRYC23hTe2Opzq93fbExGrW3VYzsXGgFobEPiYiTND1keEgmsNx6eLC2ztMhV4S%2FiudDfN5YZeRYky5QDQKzQiKOADj7EWngYyCqAzX7pXZOWVxUlmGdPdTCPX9ceio89eSdMTET6XMzkdvXMP1MZZdDkrTTFx2WmYm%2FjDLzsIWsMwBUnZcUZvBGTIkmQRtO91Q7MaKoqfXIQXx1Hvdx85c2Y%2B20UKXKWx%2FIkkkGnUMt35aiy8IMcpQqmP6HVQjOrgNJu2Pmi8XkkLXiEFs1w7taCf3eNE0Cp9c2o%2FXbJj7JuwjVywTWCuYuh00JaPdN4n4j0gMQohPVBWnY17c5pPkXZfne9ee3aM%2BH%2Bn6LUNNrXuk1vazxtgP2mL7xE6tuA0XirGDdaihkaYSzVI4gAwGFEMCPzG8TWy%2BXMig8OZc5rh6jRGTe2QmPvG4K0zn1I8J9e%2Bvbl9q8Y6UAcVHprGulOw%2B9RwgW1kI63LUJJk%2Fzi%2BxFKcvJdq%2BYc4KjcvRpmAm31fmsu%2F0mGPRvlei4H9Ewgdv9xAY6pgHG9d254iOjk2cpkzcNzrRFo852E5I620cB7RqXgzF8JQusErkN2P6nahjm%2FpTcNY%2BpI7U63cjmubc3q%2Bs4mzUcZHQiFjXSER7LUpRuzRNKb7O%2F29wekBKkJnUI2Fu5Tr6CzOXtVX2rikFTS7Lc9ef77nATh8sIbl6z5g9dkCSzGvxRIwDQueTI%2FUEgGpRbDNbUPZ1KBuJUNipA55Mu2bA8MQG3Jx9c&X-Amz-Signature=70508bd052da6892eca47449b45c4f4d8ce1bf72197cd56fdc98b4b165aae300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
