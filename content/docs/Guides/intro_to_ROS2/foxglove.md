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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX5LNQS2%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIW9oQY8u%2FECt%2BJ31FGJuyrBfWcBvVmhuaXdzuKy0kKAiBYNH6AUPe%2B3uq2n5z6ln7i9rAU9KHw4C5z47CPGIz1%2ByqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY2cFvETcwpntf0JNKtwDuE6RZethe9tCwXFzO1lwk244ap%2BKEhrRKCJz8mtalRmHYNsffaIy%2B9PG7cLutv%2B1HcveEx1qE4a0gKoGzyXT6CpCv%2F1Nkg3CNR95yHR2un8uK1q8A2Tei9O%2BivNNPwjnr7USE3zvcUeSg3q%2Btez0rgV28CrkMCoVHM6Mbh98MtySH7O7UNyM86vO09tFT%2FXU1KLuoK6zhbt%2FzZTNkU%2BK8AzUzeULkRs691XMkjwVGDzGQYmVsX20j86GsYjVoYQXQMf6Erxb19qreUsZDJ1ym9SPNi4XJo0k7kqpj%2F284tNDwsdTom1uq8uUwvaZLKOvj77VEmeYQjWR9BYxeDUpHSravr%2BNaOh%2Bib%2BuqQDFXZ7xVs3nRyWVvG0z%2FhGx4I3EF%2FBxTp5LqXRXf6Yccbgz08Wrsxs5wAJYeb3ncpXnWhqn8uwyKkt57%2FkyVeyNG8AkQVL0U8JlOaOsJX2bhJJ8hITZLxq4Fss2P8nU6o0oHPXslxcU0%2BrWMCCUsWXuNEwooTD68CpSKIhp3s5ND8f6oqhCnCXRpiiV%2BGQZolbXg4MLBnmzPTrm1VCzxmbhrkminxl18LR6rcG%2FGP91sQRqAgCW4UFooHO7snVHBHLs6kV2Iac%2FP%2FIWvnq2rRgw6tGT0QY6pgFSs1TpjR5RRSa55raqEySXxyJBdfkugt9Emkss2l6pPC3pSiXJZmrFuSJDm0ErMgTjBmgdhoNbWfNiRSnYZ0%2BcBNXXbG6GtPQZ0Igty7iNhVuyRkzCdgLXrnQV9HbLdchT6fTK%2B2PTJPBiNc9kKOvWMAYHGClWNhB7mYLipJTM4HdToFd3PKZgLc2rMg2stPVO42YV0rTP9H5URFEHdhs4IAN5%2FOVW&X-Amz-Signature=e4d67aaee595949cbdf776cfc7f4d33ca4bcc927f36f151646d8b057b258b797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX5LNQS2%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIW9oQY8u%2FECt%2BJ31FGJuyrBfWcBvVmhuaXdzuKy0kKAiBYNH6AUPe%2B3uq2n5z6ln7i9rAU9KHw4C5z47CPGIz1%2ByqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY2cFvETcwpntf0JNKtwDuE6RZethe9tCwXFzO1lwk244ap%2BKEhrRKCJz8mtalRmHYNsffaIy%2B9PG7cLutv%2B1HcveEx1qE4a0gKoGzyXT6CpCv%2F1Nkg3CNR95yHR2un8uK1q8A2Tei9O%2BivNNPwjnr7USE3zvcUeSg3q%2Btez0rgV28CrkMCoVHM6Mbh98MtySH7O7UNyM86vO09tFT%2FXU1KLuoK6zhbt%2FzZTNkU%2BK8AzUzeULkRs691XMkjwVGDzGQYmVsX20j86GsYjVoYQXQMf6Erxb19qreUsZDJ1ym9SPNi4XJo0k7kqpj%2F284tNDwsdTom1uq8uUwvaZLKOvj77VEmeYQjWR9BYxeDUpHSravr%2BNaOh%2Bib%2BuqQDFXZ7xVs3nRyWVvG0z%2FhGx4I3EF%2FBxTp5LqXRXf6Yccbgz08Wrsxs5wAJYeb3ncpXnWhqn8uwyKkt57%2FkyVeyNG8AkQVL0U8JlOaOsJX2bhJJ8hITZLxq4Fss2P8nU6o0oHPXslxcU0%2BrWMCCUsWXuNEwooTD68CpSKIhp3s5ND8f6oqhCnCXRpiiV%2BGQZolbXg4MLBnmzPTrm1VCzxmbhrkminxl18LR6rcG%2FGP91sQRqAgCW4UFooHO7snVHBHLs6kV2Iac%2FP%2FIWvnq2rRgw6tGT0QY6pgFSs1TpjR5RRSa55raqEySXxyJBdfkugt9Emkss2l6pPC3pSiXJZmrFuSJDm0ErMgTjBmgdhoNbWfNiRSnYZ0%2BcBNXXbG6GtPQZ0Igty7iNhVuyRkzCdgLXrnQV9HbLdchT6fTK%2B2PTJPBiNc9kKOvWMAYHGClWNhB7mYLipJTM4HdToFd3PKZgLc2rMg2stPVO42YV0rTP9H5URFEHdhs4IAN5%2FOVW&X-Amz-Signature=5f93bdaa8c94ae3c0a6ebbd712f6150e62695fb8c25a758dba77fc29528617c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
