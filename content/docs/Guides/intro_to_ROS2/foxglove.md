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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7BS3Y4G%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIDUumkCBew3Wf2qkvpjj%2FGNbYET3ly0DyAYJWKZCxFVzAiBidVBEBAX5o6M%2FjbgvpB6ENDPouyplfv4UU1Z5u9YrRiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqw%2BAF6ncvdZNRMJ8KtwD9%2BMIu3WZTdUK5os4APlgr62bLCBdq5pOQCnYE9qCpEbWsNCJDcyI6%2BFxYLCvMilyS1LzPAkUluTHb5DJ3dt8%2F2vMl%2BAiSRucXDBucHTdgB4yg37X8xXMqJxvomoBUgMzUbk4Gc%2Fh0S37SIzgCW3npo%2BkMFoh0exAJxvji92w%2FN%2FHbJGn6D10c09PVBbrINvrZWpGLvCTdfgbe1D0W6RTvgpqAl70ch7EHQhFK6HraO33BnI5Csfst%2BGzoWxOKFRObsddx3LRgOOuYC5wqUynZWGWm1qpdfEO9NfaOpDlU83bmYJuIx54qT4r9PNp2mGMhq3diQ%2BpvmuGTMsKHD3UY4rsG3GJoA0Pvr7l%2FsNxl18jYzvq0%2F5hCMo%2FhKvzhykBdQStXN3PMhqEMHCY6dDj6SSEzwG2UphtHlP81FjA0%2FwUoW4Tlnr%2FQrN3I5kwIdvJBH6q0%2FpOYqjf6XSYWD2BeoA%2FzoIgLtl8aYzVUXFHymnckJvmasHKVIymRCIWlrK3sHbhbazVuNg20eVuT74TW%2Bt%2B1Ys77KW1TZDg%2BFL38VOrBbynnC07XDSqOyOa%2FtQNWD%2BVWDlOdQ1kbLTLcrba3dnvCfYk1%2F6zsLLz8diBY5SIIqf7S7GwpFykFQ8w3Nji0QY6pgHFm6Yoclrl2Xzg1c4xGt8KSVY0KsyeVvt8zg2ey9wJG6kYhUSOdVksUCuORHXc6BuaN%2B%2BY6kE1E05qqYuUTP2G1rG%2Bp1Hx1%2FvLdH%2FSm7YNJTxReio9kR83Qj%2B8OhNRc4SQtLmvTjqJgBVKej3aYza8rRoeJq378XZbFA9sG2NUwQ1W9fIeNDFxMjmGt2lYl%2Bh0WjxyNxd9tduFbUtPtr32WWMAHfjL&X-Amz-Signature=8f57482c00953e20eaf477a53c5ae69831e03323eb72d55622fd81e33cf683f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7BS3Y4G%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIDUumkCBew3Wf2qkvpjj%2FGNbYET3ly0DyAYJWKZCxFVzAiBidVBEBAX5o6M%2FjbgvpB6ENDPouyplfv4UU1Z5u9YrRiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqw%2BAF6ncvdZNRMJ8KtwD9%2BMIu3WZTdUK5os4APlgr62bLCBdq5pOQCnYE9qCpEbWsNCJDcyI6%2BFxYLCvMilyS1LzPAkUluTHb5DJ3dt8%2F2vMl%2BAiSRucXDBucHTdgB4yg37X8xXMqJxvomoBUgMzUbk4Gc%2Fh0S37SIzgCW3npo%2BkMFoh0exAJxvji92w%2FN%2FHbJGn6D10c09PVBbrINvrZWpGLvCTdfgbe1D0W6RTvgpqAl70ch7EHQhFK6HraO33BnI5Csfst%2BGzoWxOKFRObsddx3LRgOOuYC5wqUynZWGWm1qpdfEO9NfaOpDlU83bmYJuIx54qT4r9PNp2mGMhq3diQ%2BpvmuGTMsKHD3UY4rsG3GJoA0Pvr7l%2FsNxl18jYzvq0%2F5hCMo%2FhKvzhykBdQStXN3PMhqEMHCY6dDj6SSEzwG2UphtHlP81FjA0%2FwUoW4Tlnr%2FQrN3I5kwIdvJBH6q0%2FpOYqjf6XSYWD2BeoA%2FzoIgLtl8aYzVUXFHymnckJvmasHKVIymRCIWlrK3sHbhbazVuNg20eVuT74TW%2Bt%2B1Ys77KW1TZDg%2BFL38VOrBbynnC07XDSqOyOa%2FtQNWD%2BVWDlOdQ1kbLTLcrba3dnvCfYk1%2F6zsLLz8diBY5SIIqf7S7GwpFykFQ8w3Nji0QY6pgHFm6Yoclrl2Xzg1c4xGt8KSVY0KsyeVvt8zg2ey9wJG6kYhUSOdVksUCuORHXc6BuaN%2B%2BY6kE1E05qqYuUTP2G1rG%2Bp1Hx1%2FvLdH%2FSm7YNJTxReio9kR83Qj%2B8OhNRc4SQtLmvTjqJgBVKej3aYza8rRoeJq378XZbFA9sG2NUwQ1W9fIeNDFxMjmGt2lYl%2Bh0WjxyNxd9tduFbUtPtr32WWMAHfjL&X-Amz-Signature=dd3acb441fe830913e1cfb89136dde2c3eabb11de6453580af6161feef43be11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
