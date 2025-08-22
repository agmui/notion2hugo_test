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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ECX7MLN%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8qvnAl%2Fx2n1LZ1CF5JNOASkvW1v1B6W3o%2Bn1AZv19ZAiEAiQlf4XJhfnwVzWUSK1lo4T%2FSO5PkukJToHvFRP%2BLjkwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FxEhJ359jqO9ExyyrcA4MEZtL04gMZPpEjQ%2BTkbLKFrQ%2FgkaH00sMzlkdU04uCEpQj077I5prChFnhunf19G2aK8Il0SAevZpX35ozWWf%2FxEdDWOy6p48ArUbAxuN7X1weD%2FZzIIZD1AhW0ps6WbsETOt8SWjpzureRQUB25okaW2OjaCYc3JUxvZKQ2aIrbefjsvh702kR4gEpQ%2B3KqXb07M2ESB11LZEsDOEIrKRwbHlX1nO2k6X5D5M1XaxP56rGgOicz2T%2BVMhituXXsT1%2F7%2FFVIRVCsBkChMue0CsdBcqOq8qHu1GdCIH%2BH3Bw5HE%2BCZzr8Dj68kEux%2BC2Rv2N0WBylrI8F6NkQh1QqMoTB%2BSkeP0XRa3a0sa3cn9HGfJSqA1Ns%2FNN0Y1DIliX2B8AMX0ka1MB6WtWFGj5xIO8V9sftz0qbdHlQ6E8TSXty6A%2BDmxhtLpu%2FsiplpVApkk%2BgilK%2BEhhA1djaQlQFnOK0wAjJ3bpgFPJkgGukQMzuk3uTgclKpAIlHjVYpB0iezVZdPxRm%2B%2Ffl0NiqSijZ7g9vWRp0BvoGxAp9Psk7Pm0fG90hoSydrpgFRgeXFjZwp6MGtgnjKbNgD%2BIR7Ljq0AOiIu8aE9ZMGq8iIDze2BLUIh5j1rO%2FuCne1MIrznsUGOqUBSorcng7CrcunIpDL3sdOpahtjHyjTR5uK5l5K4%2FQEJjCghkuPSipllO6xELCgYQQqLbgmwI8EMYXaLNZ5V2LEDVnFwnIKQl9O0PscG6yuo%2BP81eX0MOguEoXHp2WudAUnOyU1SUr%2FoKbxTeX25uEkwum4U5Af8BvrFqtG69PZgnvPG1LNBGNcZsmpX8zan%2BFkVV9E%2Feqe82C1D85AV7lIqpxgGm%2B&X-Amz-Signature=dbad37649a84db2051a6e24e4d14990e8279aa084e6dd1899a81713cb1528e05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ECX7MLN%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8qvnAl%2Fx2n1LZ1CF5JNOASkvW1v1B6W3o%2Bn1AZv19ZAiEAiQlf4XJhfnwVzWUSK1lo4T%2FSO5PkukJToHvFRP%2BLjkwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FxEhJ359jqO9ExyyrcA4MEZtL04gMZPpEjQ%2BTkbLKFrQ%2FgkaH00sMzlkdU04uCEpQj077I5prChFnhunf19G2aK8Il0SAevZpX35ozWWf%2FxEdDWOy6p48ArUbAxuN7X1weD%2FZzIIZD1AhW0ps6WbsETOt8SWjpzureRQUB25okaW2OjaCYc3JUxvZKQ2aIrbefjsvh702kR4gEpQ%2B3KqXb07M2ESB11LZEsDOEIrKRwbHlX1nO2k6X5D5M1XaxP56rGgOicz2T%2BVMhituXXsT1%2F7%2FFVIRVCsBkChMue0CsdBcqOq8qHu1GdCIH%2BH3Bw5HE%2BCZzr8Dj68kEux%2BC2Rv2N0WBylrI8F6NkQh1QqMoTB%2BSkeP0XRa3a0sa3cn9HGfJSqA1Ns%2FNN0Y1DIliX2B8AMX0ka1MB6WtWFGj5xIO8V9sftz0qbdHlQ6E8TSXty6A%2BDmxhtLpu%2FsiplpVApkk%2BgilK%2BEhhA1djaQlQFnOK0wAjJ3bpgFPJkgGukQMzuk3uTgclKpAIlHjVYpB0iezVZdPxRm%2B%2Ffl0NiqSijZ7g9vWRp0BvoGxAp9Psk7Pm0fG90hoSydrpgFRgeXFjZwp6MGtgnjKbNgD%2BIR7Ljq0AOiIu8aE9ZMGq8iIDze2BLUIh5j1rO%2FuCne1MIrznsUGOqUBSorcng7CrcunIpDL3sdOpahtjHyjTR5uK5l5K4%2FQEJjCghkuPSipllO6xELCgYQQqLbgmwI8EMYXaLNZ5V2LEDVnFwnIKQl9O0PscG6yuo%2BP81eX0MOguEoXHp2WudAUnOyU1SUr%2FoKbxTeX25uEkwum4U5Af8BvrFqtG69PZgnvPG1LNBGNcZsmpX8zan%2BFkVV9E%2Feqe82C1D85AV7lIqpxgGm%2B&X-Amz-Signature=9891371f4d8c3e3b6b3b60f08c0ce4776a95d11e1269a9e71ef0c2e76eea609d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
