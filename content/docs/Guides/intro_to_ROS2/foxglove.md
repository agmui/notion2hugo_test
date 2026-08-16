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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LIR2RPT%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFEBQ%2FV2V8P%2FBLbtYTgB2sgi8bc%2FHjN6WOX1GqI9UwIeAiEAraanFPw6DzIRjGccydf4dJD4kFzO3RjkYcJiTd6wFVwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGyZbcdmylvM7wxR3SrcAwZ1UfWL%2FPMtRb9FFhG9Mppkg6vGIOFU3wEEmOam5sov3mK%2BuJGTuq%2FoexAurrflP5DbuuMBlZeXuP6m4WOFMTv3MJIqjLnWqA5gXtzxnKay9hwK4mkVBQ756vWOcYEquIAf52etCaq%2F5X36i%2Bl0p2wGN2gUqeMlP0H6gtdXnfx6q39acnMCVxC0SGDu3Q5GAN%2Fa3tfWSCr7Qpggx7hJTJo6%2F1nJqRxDMx%2F4f3crNV1ny5BSFGg3rmNpe0YxSQ7VKxq%2FX5bEczOnD4PhWJRO4FNrlvAFZ9o14%2BhzikhJ9qJbkMslT3pnvOBJlIE9kPzJlLt3uIVYcX87LNgYntmR1%2FR20Ow2v9Edi82%2BghNQev%2Blpt3xD27Dj5rQSipScZ4aLXMfb2k7jMkI%2FAV64rjeSAszVycKVgzmk6kn4FdmxZ8FrCeh78oeBUEiltTvN%2FI0Vc%2FbubbuTCzPv5001GiUTc85R5fEsdayPxmqX7n33vkXnIIoKsY7wxTxWbZZPQ%2B4dMErbYUUG9%2Fx4vON9IyOXuf8pOVWa4OW%2FUJaTlyZR6YIdxKGSxg9f9WfhaPI9gloRWkOtZeIje%2FURi%2BdDtliq7SaiCKDFlt4cuq4euoYSnZrn3xKBhTM4i6h%2BlK5MJPug9QGOqUBYkeAQ22yGyXfbtSuaIOopmrJnktHGM0v8bKfrZ6O5bxrlT4yGd60%2BScC33L%2FbdarBwVghSJ5mRxbod5YETBlECcgAZ4BNCs6JUYTMDjBmTle%2Bks16MPfA1ukGR2rNUT6jR0Db2lqR28yH1xRdRvp092ITK9IIYdhUroawbEpVQaK12QG%2F6SHxn77DmVqFmrQU9n1r9PN6GISCkCweQ7PoPxIlr2A&X-Amz-Signature=03ab6d9b6d72002835df8e49d21b50cc15a086cb11251a4fd7aa84194edb521b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LIR2RPT%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFEBQ%2FV2V8P%2FBLbtYTgB2sgi8bc%2FHjN6WOX1GqI9UwIeAiEAraanFPw6DzIRjGccydf4dJD4kFzO3RjkYcJiTd6wFVwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGyZbcdmylvM7wxR3SrcAwZ1UfWL%2FPMtRb9FFhG9Mppkg6vGIOFU3wEEmOam5sov3mK%2BuJGTuq%2FoexAurrflP5DbuuMBlZeXuP6m4WOFMTv3MJIqjLnWqA5gXtzxnKay9hwK4mkVBQ756vWOcYEquIAf52etCaq%2F5X36i%2Bl0p2wGN2gUqeMlP0H6gtdXnfx6q39acnMCVxC0SGDu3Q5GAN%2Fa3tfWSCr7Qpggx7hJTJo6%2F1nJqRxDMx%2F4f3crNV1ny5BSFGg3rmNpe0YxSQ7VKxq%2FX5bEczOnD4PhWJRO4FNrlvAFZ9o14%2BhzikhJ9qJbkMslT3pnvOBJlIE9kPzJlLt3uIVYcX87LNgYntmR1%2FR20Ow2v9Edi82%2BghNQev%2Blpt3xD27Dj5rQSipScZ4aLXMfb2k7jMkI%2FAV64rjeSAszVycKVgzmk6kn4FdmxZ8FrCeh78oeBUEiltTvN%2FI0Vc%2FbubbuTCzPv5001GiUTc85R5fEsdayPxmqX7n33vkXnIIoKsY7wxTxWbZZPQ%2B4dMErbYUUG9%2Fx4vON9IyOXuf8pOVWa4OW%2FUJaTlyZR6YIdxKGSxg9f9WfhaPI9gloRWkOtZeIje%2FURi%2BdDtliq7SaiCKDFlt4cuq4euoYSnZrn3xKBhTM4i6h%2BlK5MJPug9QGOqUBYkeAQ22yGyXfbtSuaIOopmrJnktHGM0v8bKfrZ6O5bxrlT4yGd60%2BScC33L%2FbdarBwVghSJ5mRxbod5YETBlECcgAZ4BNCs6JUYTMDjBmTle%2Bks16MPfA1ukGR2rNUT6jR0Db2lqR28yH1xRdRvp092ITK9IIYdhUroawbEpVQaK12QG%2F6SHxn77DmVqFmrQU9n1r9PN6GISCkCweQ7PoPxIlr2A&X-Amz-Signature=60522d1a7ea621c4a106afaafe454350f57dce1808a05de6689cee04acdf4f5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
