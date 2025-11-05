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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LZTQ5EZ%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBWTERMWSUE%2FxmWRJnuKzYGXaA3q8P49dIRQWXL9T29AiBXj0ShSFZWQzp%2BnAH5aPEsMBWAIfBkh6CHEfKjfxi1bir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMVeoSFno3bI77UGV0KtwDrcQjQYRU%2FCYokxXKPjgwVehRX%2FZtk5pEzRDJuthpxSQwoVgyNMu2vGXEgutUESNtE97ALg%2FwKXU4CHj7lMeuexVtFxr19OKsjmDhQyDaOgBpurWxxBCYriwgMrxFEVarbPrYSlSPplRerX5UWY1QL%2F6N8o8LJyo203Ib%2Fnx1gXZEvJ26kRu9SKtdx0%2Fu4yI0tlAeUpSTVmEN72RLpVBKKOHP1jNXj2i7WWXhpU9CQNHadZu%2FTOYN4AiaKA3qaybS8S%2F4JN0CKPUNJxgWKyjrQssFplNrzdlrmzYE7nF8Zgm7O4yfrhVTkNFa5icmt20KU%2Fazs%2FSZzcomUJJry9RAVTkD5oGtJobR5rndcPaYDCjfvzSRMe%2Fo%2FUP054HLho1nc9HvcTJAXJodZEt9%2BNDoob1gffv1cdOTTFlqdg7F9Veda3KI9Vuc6O5qVRqwhp4tsZ5y7IqgCXdqrWNjci16P1Xoaup6CGvsVga7VFQXRTdNn2R%2Fjazhuu1pcCZ5Q49Rwms0gvB0VCXNhJ3cbEHaz%2FGxW5ulx%2FKpnFTaqPYToaONHgJkdNYApjIdKjxHwXGhoA0Q85h6lvr45mkZoFTRY7TnnKsPR3kRUAJwoy3%2FB6r6nWm%2BFEHAV0VW1kIw5N2pyAY6pgH4Y92H83s4W26Gdb2Wxj1FlcSMx3P4odGXpOFHQtw%2BmHqJdQQOqCb1EVkvtaAay6llFZmXl6N8hGyOKFBSSwcTxxXr5YV2WSu2iaigfOJl367xT2dcT%2F6CNLyd1lmaC3LSqwoByNaHpYA5r4jTy7FIgyexexihfsbT9ijTU5NCFnX5R7CVlec6xakeh4FbgQIE%2Fp0Z5RPCuQXVUA8wo92HbUizl3UM&X-Amz-Signature=20305e1dc9556992b7ab039c815ca4ce2c1ef68831167131770747da33c955c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LZTQ5EZ%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBWTERMWSUE%2FxmWRJnuKzYGXaA3q8P49dIRQWXL9T29AiBXj0ShSFZWQzp%2BnAH5aPEsMBWAIfBkh6CHEfKjfxi1bir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMVeoSFno3bI77UGV0KtwDrcQjQYRU%2FCYokxXKPjgwVehRX%2FZtk5pEzRDJuthpxSQwoVgyNMu2vGXEgutUESNtE97ALg%2FwKXU4CHj7lMeuexVtFxr19OKsjmDhQyDaOgBpurWxxBCYriwgMrxFEVarbPrYSlSPplRerX5UWY1QL%2F6N8o8LJyo203Ib%2Fnx1gXZEvJ26kRu9SKtdx0%2Fu4yI0tlAeUpSTVmEN72RLpVBKKOHP1jNXj2i7WWXhpU9CQNHadZu%2FTOYN4AiaKA3qaybS8S%2F4JN0CKPUNJxgWKyjrQssFplNrzdlrmzYE7nF8Zgm7O4yfrhVTkNFa5icmt20KU%2Fazs%2FSZzcomUJJry9RAVTkD5oGtJobR5rndcPaYDCjfvzSRMe%2Fo%2FUP054HLho1nc9HvcTJAXJodZEt9%2BNDoob1gffv1cdOTTFlqdg7F9Veda3KI9Vuc6O5qVRqwhp4tsZ5y7IqgCXdqrWNjci16P1Xoaup6CGvsVga7VFQXRTdNn2R%2Fjazhuu1pcCZ5Q49Rwms0gvB0VCXNhJ3cbEHaz%2FGxW5ulx%2FKpnFTaqPYToaONHgJkdNYApjIdKjxHwXGhoA0Q85h6lvr45mkZoFTRY7TnnKsPR3kRUAJwoy3%2FB6r6nWm%2BFEHAV0VW1kIw5N2pyAY6pgH4Y92H83s4W26Gdb2Wxj1FlcSMx3P4odGXpOFHQtw%2BmHqJdQQOqCb1EVkvtaAay6llFZmXl6N8hGyOKFBSSwcTxxXr5YV2WSu2iaigfOJl367xT2dcT%2F6CNLyd1lmaC3LSqwoByNaHpYA5r4jTy7FIgyexexihfsbT9ijTU5NCFnX5R7CVlec6xakeh4FbgQIE%2Fp0Z5RPCuQXVUA8wo92HbUizl3UM&X-Amz-Signature=adbe3677fe60e8a2e365ad762d6f40109a8319d951337495a0b0eec7bf1f6a49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
