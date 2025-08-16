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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F25QKGR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDow2XrJiuty5s14YbCDdsHYxc4%2BRSoKkaO0soLqKp0NwIgKz6h5VOj1Bys%2BbkGjM8tkI32x%2FEvHe4IOPcRGCBUYqoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNdArzaRpjFJkPwHKCrcA5JrwF09kJdaESoDOTijsSLHDBoIJXW2LrvGe%2FemfR9r60cuenLtTYCaTk5VJDxicMgYhsgr%2BSHsnOm%2FDQalttJuuuM7LPg8Q%2FUxdVmIEo0qm5C84g03%2BiuMjSn5NSTpdoLb0ggyxJRfnbPw%2Bw%2BVubTntduTqneywCvtjbKuICra9Cz3n28x4FjJuoAYOuoqQ6TDMXvvn%2FBy1bC4p1E3bSh%2F%2FnOut52sCHpLumWT9mfK%2Bv3IyyL23PkEpBbFuT3Ss63eFzPcwwIpeULUbmkkPif75obhMCWQwETQj4zAnWIY9g6lmwACm7ISI00NoXFZcilksMUx%2Bn71G3Qg9i%2F%2FVjoUJCblr7LzrBXMEGE3lLB4cfqipuIpbXgNVT04IUs58x5LBPv%2Fz5kYVDpCutZXqT0YdACYczo%2BqqyGvrxw4lIau2nHMlO%2FS%2FXJY3NlbMAXEbdtEVsiWN9f41ZFA1yoe%2BlE85Rir0AgwwVPgmLvqjONYaIozIIlGUKLpa1GkF2Hl2g7H4AY3f9SfP%2FAHtMop%2FSLLrMtGkl7gnWL81UByRKlKciyfaap7Va50HLToi%2BzIlagI8pDYQFiHnySPO%2FUhHeAJSKL0DI8qx269kXNNHOmth00DRqVHaRC8KMLMI%2F4gMUGOqUBUwYNUBurhJSDme6TdwNH0FBPI5fm4oCD0BBkq5bxnWkOskBMEsNyQmGqi6ZM2umOnCv84hGw5gxfMyVFn417jOdgg0wa%2B0v57arvO6e%2BB1WtYY4Rf97dOgFZQU4jFLwC05tE%2F3ZIctfuSS2VJR8mgmVlVcfdDGDzanDrg5f3gQeffSEnbTrTqJAg18b1Tbk0bkAOaYYWF5okmj6YTFcU3EifakTV&X-Amz-Signature=8447f9d8a709c56e7e43770228ebac7813fe72900c51b57d9c05c93fc18374f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F25QKGR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDow2XrJiuty5s14YbCDdsHYxc4%2BRSoKkaO0soLqKp0NwIgKz6h5VOj1Bys%2BbkGjM8tkI32x%2FEvHe4IOPcRGCBUYqoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNdArzaRpjFJkPwHKCrcA5JrwF09kJdaESoDOTijsSLHDBoIJXW2LrvGe%2FemfR9r60cuenLtTYCaTk5VJDxicMgYhsgr%2BSHsnOm%2FDQalttJuuuM7LPg8Q%2FUxdVmIEo0qm5C84g03%2BiuMjSn5NSTpdoLb0ggyxJRfnbPw%2Bw%2BVubTntduTqneywCvtjbKuICra9Cz3n28x4FjJuoAYOuoqQ6TDMXvvn%2FBy1bC4p1E3bSh%2F%2FnOut52sCHpLumWT9mfK%2Bv3IyyL23PkEpBbFuT3Ss63eFzPcwwIpeULUbmkkPif75obhMCWQwETQj4zAnWIY9g6lmwACm7ISI00NoXFZcilksMUx%2Bn71G3Qg9i%2F%2FVjoUJCblr7LzrBXMEGE3lLB4cfqipuIpbXgNVT04IUs58x5LBPv%2Fz5kYVDpCutZXqT0YdACYczo%2BqqyGvrxw4lIau2nHMlO%2FS%2FXJY3NlbMAXEbdtEVsiWN9f41ZFA1yoe%2BlE85Rir0AgwwVPgmLvqjONYaIozIIlGUKLpa1GkF2Hl2g7H4AY3f9SfP%2FAHtMop%2FSLLrMtGkl7gnWL81UByRKlKciyfaap7Va50HLToi%2BzIlagI8pDYQFiHnySPO%2FUhHeAJSKL0DI8qx269kXNNHOmth00DRqVHaRC8KMLMI%2F4gMUGOqUBUwYNUBurhJSDme6TdwNH0FBPI5fm4oCD0BBkq5bxnWkOskBMEsNyQmGqi6ZM2umOnCv84hGw5gxfMyVFn417jOdgg0wa%2B0v57arvO6e%2BB1WtYY4Rf97dOgFZQU4jFLwC05tE%2F3ZIctfuSS2VJR8mgmVlVcfdDGDzanDrg5f3gQeffSEnbTrTqJAg18b1Tbk0bkAOaYYWF5okmj6YTFcU3EifakTV&X-Amz-Signature=5d162ac416921e4468e394824d68e4cda4fa5cbd4018717b4e78c9223853d88a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
