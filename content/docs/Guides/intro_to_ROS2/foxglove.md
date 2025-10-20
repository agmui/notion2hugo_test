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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VX3CJXQ%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIFcTRhosgMblvu1P6ESsC%2FzizpwT%2FYHoA8fHvxKItIl%2FAiAJKx0J4mdw7xbbFwWGl%2FGHz1deVLS4b2U6NSlFaoiMASqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKVRirH%2F0pR7xcRWeKtwDNmbSg%2FEwQ3GDaavVxjiJbORNBT5Z60Ktq5PdDE8Wh6mE94x91OQyOrHGFCce0lXP3UceTAfyeUH1eagnYsfycqgraX7HBKHYsEndrBNl4dY%2Bc2G1PSIekruTDiJlqnHtiBxXD3KD%2BdxTMXoXp5Gk8v2Ds7taUOVgUmc7SgN1doHzeuiq%2BhRYwEuxQVXcHqEzjsVtkV%2B7gGNp3aXj4EZuHaZ8vFPF3sIajWFUO8wMadRFvAz54jQGwGtIFTofCP%2FgN4ou0Sq%2BZRgg3Uv4cgIP49QtO1HaWAXeaZ6KekSt5j0ES194XWUwiW1aj49zlR27hl32k2Ysvor%2B%2BVCtcQtG6xb0V3wh1A4qIulheSIB8swzQ7kMjfojxp%2Bv6XnGAzhVUXKoI47ex79DAUEsQuhcyP16mjY%2FKLWF7z8R8eRgNSQm9lsOW0pRqOoqhahXscPqtdo8Ct335TRY%2Ft5SCGjblo5NjdH0NyM3CvzUC7ij3Z19cmH1SCtyKskKl6EZDJ09bo8ca5qRMIp7AEr5lTQvV8eNkjq5tAU1rgNFJ%2BeMcwBKDmFaX9EYfTSq3%2FBdzlTWjI9lCCa9hPdEOusxTQBGLLUSaNoyhbib9kUKw500RoxO3gmyQlOID2AnUjwwjYnWxwY6pgFyCW6AynFf9oiYmq6XHUkYo40i7bGRQCKzNMRaeWpLVuPKiH2SzyEdgjkS%2F9nJmcSjs2AxB1DSWMk%2BvosQN4ev67xS18hkYKRtizz5KP8lPygrT%2FJ%2F7P6y8%2BEbBaS4dTBaZVwrA7q8gTlnJognOiMvxY2m0glORaHktn%2FYrxvJwT2KxcEc7ozPrAXZ49E7zaQ1gxqSqVGMccLD6WcOepS5Zlza3flY&X-Amz-Signature=420dd06b00712d959a6ae9d3b62e3deb144b2c3527783d89b5d6b285c3856512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VX3CJXQ%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIFcTRhosgMblvu1P6ESsC%2FzizpwT%2FYHoA8fHvxKItIl%2FAiAJKx0J4mdw7xbbFwWGl%2FGHz1deVLS4b2U6NSlFaoiMASqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKVRirH%2F0pR7xcRWeKtwDNmbSg%2FEwQ3GDaavVxjiJbORNBT5Z60Ktq5PdDE8Wh6mE94x91OQyOrHGFCce0lXP3UceTAfyeUH1eagnYsfycqgraX7HBKHYsEndrBNl4dY%2Bc2G1PSIekruTDiJlqnHtiBxXD3KD%2BdxTMXoXp5Gk8v2Ds7taUOVgUmc7SgN1doHzeuiq%2BhRYwEuxQVXcHqEzjsVtkV%2B7gGNp3aXj4EZuHaZ8vFPF3sIajWFUO8wMadRFvAz54jQGwGtIFTofCP%2FgN4ou0Sq%2BZRgg3Uv4cgIP49QtO1HaWAXeaZ6KekSt5j0ES194XWUwiW1aj49zlR27hl32k2Ysvor%2B%2BVCtcQtG6xb0V3wh1A4qIulheSIB8swzQ7kMjfojxp%2Bv6XnGAzhVUXKoI47ex79DAUEsQuhcyP16mjY%2FKLWF7z8R8eRgNSQm9lsOW0pRqOoqhahXscPqtdo8Ct335TRY%2Ft5SCGjblo5NjdH0NyM3CvzUC7ij3Z19cmH1SCtyKskKl6EZDJ09bo8ca5qRMIp7AEr5lTQvV8eNkjq5tAU1rgNFJ%2BeMcwBKDmFaX9EYfTSq3%2FBdzlTWjI9lCCa9hPdEOusxTQBGLLUSaNoyhbib9kUKw500RoxO3gmyQlOID2AnUjwwjYnWxwY6pgFyCW6AynFf9oiYmq6XHUkYo40i7bGRQCKzNMRaeWpLVuPKiH2SzyEdgjkS%2F9nJmcSjs2AxB1DSWMk%2BvosQN4ev67xS18hkYKRtizz5KP8lPygrT%2FJ%2F7P6y8%2BEbBaS4dTBaZVwrA7q8gTlnJognOiMvxY2m0glORaHktn%2FYrxvJwT2KxcEc7ozPrAXZ49E7zaQ1gxqSqVGMccLD6WcOepS5Zlza3flY&X-Amz-Signature=b69c6a5141a290359438ad4d6768d0e036d40d1a543b025f2dd312ce8c1f5bad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
