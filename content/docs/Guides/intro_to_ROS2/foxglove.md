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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM77GA4B%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIGUDDd2KTDOeXnxBtLkwhbdOZrCJxtNeMDQQlZLMTZ2aAiEAsUA3%2BJSXvxB12ss4NrPLYhpwtby8hFXRSLmHUeTe2Ikq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDJdBi3wfcVtvPu6BqircA0wIpwz1%2BCvAkSESToqwbCMP%2F27iJD80zyScaRQ0nQwJWnDs%2F2WZBIeHapn4CQ%2BChb6axCpfjQK1%2FQI5wZjeQV4lfUjPwO7sbc%2FRwskPkWbFEidqUowiR8%2FzxbK23c0nvXdEKSiyKREvN2Lp5lHiDznYJWoN2IYrlOPGTCndjWFSoUGNwrtZpRss%2FYR%2Fqna4504ZwsJg0xJ%2BsDBP6pGmH54CeDqgjk9xZ%2BwnM4mQk6yF7a11gJ%2BMryqcxYoJmpYUMC2ebPy7NTBQzKoKJ423GSkSBiWuhX%2FG6ipb6aNk7imrWBSfpcCmbPYvEgfe1D7GzJLcrQYDDwCMaD7%2BSYLfQIUmC%2BRTM%2BOQ%2B42ShVPLn1ZAVug1uaqcIkQoVNl9zcr0LnA2XLIgyrlXTkaAava%2B%2BN%2BMeZ3C4dlBeZJZkqc4OFeDxG%2Bh8JS94OG9X95jctYoN%2BZyySQ2%2BSVBkipURi%2BEjJRd7zKszT8GbcHBT07zPMKGikGSGT4n1ALxVro4mygxvFxOSYZoIb0Pfln8gQb%2B5Q4enLOQ6i9kN74mHixfT%2BfKA1shFhthkKkMMkrKqCMLSJ96qIPA0oFfU%2FS5PwOKcr8hTaU5rbqZO0xZLHfvKC7GE0Mu23agle9PDf1JMILY%2FsQGOqUB3RbS7ZiPSEDDTNra9qr%2F5oqxnIr4eT28Ho%2FR4MntTPKA5%2BNui06V%2FEK2NndHGOqMnNcttq4BGkoFnc9lG3IV9j7S9bJBxLvLZTG3HraCUm0ABkFNNl5u640JyxbQSSKMf3dacmGWJTFvXTk9WOqNpCbaBGkrFt2gMXj41PLcuyicZz8lsxADhBlCMCUGHEAdYW7QjXXcuM9T5H8fO%2FcxHcJaFSTz&X-Amz-Signature=6e2888d60a6e5cec76ed5fdbe10b3a4b3400f1afdf7777772c3f7387b71b837a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM77GA4B%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIGUDDd2KTDOeXnxBtLkwhbdOZrCJxtNeMDQQlZLMTZ2aAiEAsUA3%2BJSXvxB12ss4NrPLYhpwtby8hFXRSLmHUeTe2Ikq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDJdBi3wfcVtvPu6BqircA0wIpwz1%2BCvAkSESToqwbCMP%2F27iJD80zyScaRQ0nQwJWnDs%2F2WZBIeHapn4CQ%2BChb6axCpfjQK1%2FQI5wZjeQV4lfUjPwO7sbc%2FRwskPkWbFEidqUowiR8%2FzxbK23c0nvXdEKSiyKREvN2Lp5lHiDznYJWoN2IYrlOPGTCndjWFSoUGNwrtZpRss%2FYR%2Fqna4504ZwsJg0xJ%2BsDBP6pGmH54CeDqgjk9xZ%2BwnM4mQk6yF7a11gJ%2BMryqcxYoJmpYUMC2ebPy7NTBQzKoKJ423GSkSBiWuhX%2FG6ipb6aNk7imrWBSfpcCmbPYvEgfe1D7GzJLcrQYDDwCMaD7%2BSYLfQIUmC%2BRTM%2BOQ%2B42ShVPLn1ZAVug1uaqcIkQoVNl9zcr0LnA2XLIgyrlXTkaAava%2B%2BN%2BMeZ3C4dlBeZJZkqc4OFeDxG%2Bh8JS94OG9X95jctYoN%2BZyySQ2%2BSVBkipURi%2BEjJRd7zKszT8GbcHBT07zPMKGikGSGT4n1ALxVro4mygxvFxOSYZoIb0Pfln8gQb%2B5Q4enLOQ6i9kN74mHixfT%2BfKA1shFhthkKkMMkrKqCMLSJ96qIPA0oFfU%2FS5PwOKcr8hTaU5rbqZO0xZLHfvKC7GE0Mu23agle9PDf1JMILY%2FsQGOqUB3RbS7ZiPSEDDTNra9qr%2F5oqxnIr4eT28Ho%2FR4MntTPKA5%2BNui06V%2FEK2NndHGOqMnNcttq4BGkoFnc9lG3IV9j7S9bJBxLvLZTG3HraCUm0ABkFNNl5u640JyxbQSSKMf3dacmGWJTFvXTk9WOqNpCbaBGkrFt2gMXj41PLcuyicZz8lsxADhBlCMCUGHEAdYW7QjXXcuM9T5H8fO%2FcxHcJaFSTz&X-Amz-Signature=72309121e161b8546c499210d40c095f88922b0899881b612a67ded11773a9c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
