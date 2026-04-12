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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKJX3MIT%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCclaLdqg%2ByQOtquyvAdNJH6quT7XFlesyUGfE2Qb7RAiEAwxYQzE%2Bge8PAWalmL0ykz9GiHycJy5eID9wvh5%2F1X6Aq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDERwF5YUeKqfaWCk4yrcA1InHqjZmKCh9x6edaSQHgTEy6wZ3VvJ4z4zQ6MP0hGjLTWXXd%2BmSdkfPvkR3TlGYU8De5%2B97IyNo1uf4%2ForMTUrvkdAxunXCw4m6qYUKkMteb0PSBeM6ly0zdxajqJMTskp9RWqmvuoTo683z4Osv%2BqTtwgYqcEgB7AA5Wurg63K7uPzEob%2Fhrhyk9sDNJ5wxEdiKTB3D3Q6WcONmpUa65kzjQ10%2BmBNSBNRvRqamUwz3loVsDsNHvv9%2BI7K485wyTJ5nGXP%2FmFQ8gugMDyZrSF6gswV7yKoI7imwiBavxY2TFPc0Bzak1pKq5ZBAB3SsI5UCZbSOWqQY8gLqYv4RR8%2BGanwiSi2N8iP1IaxNTyfR%2Fnj69ADo2aVesq77df6UF8TMFuLbauc2BuLR%2FERK6tJJlWYQrUkgm4qEfnbaxAhGJkzal5gf42qpNESkSR5FET3jztLPqcEPkan5kUrWMYRw6aDMJ0uwsl%2BqkJlUtU9yN9TY76ZX8xsCPZfvVIRcAOtov6ZlEOTgU%2BAG51pVXVHT4YHf8XA6%2Fi15MAAVtZ6EVKxXFVrSKRozYf%2FRTv5%2BvMk06e65NZOQxIvyt79dcU3JXVgm8qNsLIctMIxtTY7KTiOMBRxyzrDZN1MI2H7M4GOqUBxmEWoh4CU9pyRLWIAgaeTIykpfI%2F3SaaAviWBEjmak24BCFgYlB2d9Ckr4LxK%2BOurKIssN%2FcYl%2B%2F7Mw%2Fo5ROIxy87g0AroEIJv1%2FJ6p0Tpio5%2FLzsAOObi6T2QD0o%2BPWS2pkyUEXrccS99lnNe1uXhs13vYn%2BEiQTIz5%2FL5b1Nf2EqdHBAJ5o%2FBXH%2B4pz3f%2Fnqfta5L5cuWktNbkTfxT3GgZFKDD&X-Amz-Signature=428ea8189f1dd21a92d9dd3e38403f033c2ffa7d2d7df2481e1c826f50be0a56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKJX3MIT%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCclaLdqg%2ByQOtquyvAdNJH6quT7XFlesyUGfE2Qb7RAiEAwxYQzE%2Bge8PAWalmL0ykz9GiHycJy5eID9wvh5%2F1X6Aq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDERwF5YUeKqfaWCk4yrcA1InHqjZmKCh9x6edaSQHgTEy6wZ3VvJ4z4zQ6MP0hGjLTWXXd%2BmSdkfPvkR3TlGYU8De5%2B97IyNo1uf4%2ForMTUrvkdAxunXCw4m6qYUKkMteb0PSBeM6ly0zdxajqJMTskp9RWqmvuoTo683z4Osv%2BqTtwgYqcEgB7AA5Wurg63K7uPzEob%2Fhrhyk9sDNJ5wxEdiKTB3D3Q6WcONmpUa65kzjQ10%2BmBNSBNRvRqamUwz3loVsDsNHvv9%2BI7K485wyTJ5nGXP%2FmFQ8gugMDyZrSF6gswV7yKoI7imwiBavxY2TFPc0Bzak1pKq5ZBAB3SsI5UCZbSOWqQY8gLqYv4RR8%2BGanwiSi2N8iP1IaxNTyfR%2Fnj69ADo2aVesq77df6UF8TMFuLbauc2BuLR%2FERK6tJJlWYQrUkgm4qEfnbaxAhGJkzal5gf42qpNESkSR5FET3jztLPqcEPkan5kUrWMYRw6aDMJ0uwsl%2BqkJlUtU9yN9TY76ZX8xsCPZfvVIRcAOtov6ZlEOTgU%2BAG51pVXVHT4YHf8XA6%2Fi15MAAVtZ6EVKxXFVrSKRozYf%2FRTv5%2BvMk06e65NZOQxIvyt79dcU3JXVgm8qNsLIctMIxtTY7KTiOMBRxyzrDZN1MI2H7M4GOqUBxmEWoh4CU9pyRLWIAgaeTIykpfI%2F3SaaAviWBEjmak24BCFgYlB2d9Ckr4LxK%2BOurKIssN%2FcYl%2B%2F7Mw%2Fo5ROIxy87g0AroEIJv1%2FJ6p0Tpio5%2FLzsAOObi6T2QD0o%2BPWS2pkyUEXrccS99lnNe1uXhs13vYn%2BEiQTIz5%2FL5b1Nf2EqdHBAJ5o%2FBXH%2B4pz3f%2Fnqfta5L5cuWktNbkTfxT3GgZFKDD&X-Amz-Signature=79ff6b4ed367701cd00809de6aa59ce596ffd881829fc84ae8c079a16c964316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
