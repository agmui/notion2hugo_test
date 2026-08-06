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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4C2OWDB%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEQ7Ivfrg2yBXgUs0Ea7r5tGL34t15u7oIzAr%2FGBHyQYAiAqEezsG3EaOfuvQEwkQ%2FFnqkwt1uh7kc7LTPYypkQEXSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMLCHHJ8bYmy5A9QG2KtwD5Ow%2Bibweb6Wgs11gu0Z5mS2Nwyl5g3LbgsVcRASGz9gukBxq%2FO73VGmOfMuiC%2F%2FZbb0KDuRrWZn9tAzwso%2F%2BV6qvuJ41zzanxrJapEoy%2BVfA0Ge1pFOLk1Se%2BZqQCqo%2BvAsZjGXtkf7nrA0D2AjyCWuO6uoPJEQ%2BxzYswG9qf5vwYgU3YldsRFVjRFPqFUIahUcs00NazDBTDYpr2twfPENlyn2WfEA0ZtTg05kuYcs9NJzntjuym46spLb90Gxc8t9RhKoxTPM3Pi%2BG15J6vPAqwhJlQDvrjEOX8jzpG0gy9Be6KJu86cLtCgdIzDQ8Li%2FfkqnbNvNC3FgzhCcU7wYvS6UOMwIG58nQR%2B1NhhAXGe9EKSopdDHJvcIxrxLngnKElPl056p5By6k6hqRkNU6mtz42pwm0NkMFPpToOLV7CWpIgxli%2FpLHigiK%2BSFXBpLafXTxNzjkYet6ERDk9EbnDeGNFU484XB8ci26W10f7ronBGBc2vrYCF5JpTLvv3mlRmVYCZJjAqwQ%2BwpwBc40e8oLQKeelW5D7cfj6ki2zCjRyW0EDqZR7d3TyGXbAFq9RihI261ceTvoBp7VI76D5hvVuVmPJbwzUDLoN%2FOmt4ch%2BDIV7GAqPYw%2BtPP0wY6pgFZjHj8iosQ09d49vWIltXEcWEp6l%2Baibm%2Fd01SzQB4rduVekG1ivzMk8m4O%2FrLTfq9Pf9mah8uBezvS5nASJSLINpnttkhN57d70ILfht9SqUcM3mAOYckQNUAFEIKsYW9FjbuHj3LgY2pb2htfoxaZ4CFk7aAvZc5QxcYqhvBMKswaUvQh6mifeOiHWO%2B%2BJQuWi2Q6GWlKha0OPOmtNnw0Ta3acet&X-Amz-Signature=8d05bd231b62b6c2d85b79c3156e7e4cc6b9950081e58057a9225e9ba5d241f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4C2OWDB%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEQ7Ivfrg2yBXgUs0Ea7r5tGL34t15u7oIzAr%2FGBHyQYAiAqEezsG3EaOfuvQEwkQ%2FFnqkwt1uh7kc7LTPYypkQEXSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMLCHHJ8bYmy5A9QG2KtwD5Ow%2Bibweb6Wgs11gu0Z5mS2Nwyl5g3LbgsVcRASGz9gukBxq%2FO73VGmOfMuiC%2F%2FZbb0KDuRrWZn9tAzwso%2F%2BV6qvuJ41zzanxrJapEoy%2BVfA0Ge1pFOLk1Se%2BZqQCqo%2BvAsZjGXtkf7nrA0D2AjyCWuO6uoPJEQ%2BxzYswG9qf5vwYgU3YldsRFVjRFPqFUIahUcs00NazDBTDYpr2twfPENlyn2WfEA0ZtTg05kuYcs9NJzntjuym46spLb90Gxc8t9RhKoxTPM3Pi%2BG15J6vPAqwhJlQDvrjEOX8jzpG0gy9Be6KJu86cLtCgdIzDQ8Li%2FfkqnbNvNC3FgzhCcU7wYvS6UOMwIG58nQR%2B1NhhAXGe9EKSopdDHJvcIxrxLngnKElPl056p5By6k6hqRkNU6mtz42pwm0NkMFPpToOLV7CWpIgxli%2FpLHigiK%2BSFXBpLafXTxNzjkYet6ERDk9EbnDeGNFU484XB8ci26W10f7ronBGBc2vrYCF5JpTLvv3mlRmVYCZJjAqwQ%2BwpwBc40e8oLQKeelW5D7cfj6ki2zCjRyW0EDqZR7d3TyGXbAFq9RihI261ceTvoBp7VI76D5hvVuVmPJbwzUDLoN%2FOmt4ch%2BDIV7GAqPYw%2BtPP0wY6pgFZjHj8iosQ09d49vWIltXEcWEp6l%2Baibm%2Fd01SzQB4rduVekG1ivzMk8m4O%2FrLTfq9Pf9mah8uBezvS5nASJSLINpnttkhN57d70ILfht9SqUcM3mAOYckQNUAFEIKsYW9FjbuHj3LgY2pb2htfoxaZ4CFk7aAvZc5QxcYqhvBMKswaUvQh6mifeOiHWO%2B%2BJQuWi2Q6GWlKha0OPOmtNnw0Ta3acet&X-Amz-Signature=98773f0fb47a44ca6707cecd58181d5b7e3724bfa0770282600fc6a285dc4399&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
