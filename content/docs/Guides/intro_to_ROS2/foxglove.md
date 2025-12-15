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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IRCSZ3R%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCux0J3ZD0bBwAl76tfdwn53x9C1rtNgid15pscZG2KDwIhANyuIXexd3HCd8i98qs26HrrkfHwOjK2CcTHcWvJF1%2FGKv8DCD8QABoMNjM3NDIzMTgzODA1Igy5wGBsR1HCctrxUd0q3APhdQuuEmxrvYDT9njSGpPQBFVbimyDKNkazRtqa30FBoLI6pMZowsJ2HOICD6d%2F8CV3sxOqRwU32cNL4rhrCIAo9i3cdN7ajZoSkj5%2BUYN4VP7Ppv6FNVKT12KUa8gS1W8gS9J3%2F9igy7ONMfR8d05P5JDBn20N4QLBWjD9nd3SghZLwjYxpKeNY7gO7ih1PyYDKPsuUDWd9DQpJxir%2BjwxH7oIqlvCRNiLCU93kQBsaEDWpVq2wpX8FYpzzeLLpYLPN2P8Eu6%2B8KN7%2BntPhAbVOb3ejI64rHQxP3wDf9ur9pFMslf3furSudB10J5cG7uYl%2Bdd308%2Bv5dhIi%2FGrkSyuKzAPQdVNAJIkZcaEDYr2ZaUe107x9ScN3cow0xPoEbnapyyxAyos%2Bg6VonxPwRKnOothmEHV68KxMkiE5iSB9Zxb%2BKkq%2BeNuQd3jks4iEtNAutSyh8WK7bcsZ6Gu40bAMg7BKdE%2BP4ND7XfMnG9MCxTnGT2yERymPlWFxuzpdnipZ7lIEGAKrEk3xxskhjSn7gJW0PRdBR693U3Ob%2BAn%2BrGy9AvKru9uJtZt1TgwQeP10AFRWaALO7pZo7eXsV1qEi%2BnKzq8rlLdzUdiunfLKDwtUMfX28U2oZzDC02vzJBjqkATkbZaGvqT9zW9PiJ8uShCrQ8t6lwXGpjX6gFWNKEoFf6jSTCClHJhwad3w2HKz%2F2%2Fdy64SldUKxpYf069qswbmIxfl1VnmCUP9vAQ3H8ecxRtvIwj0FVVMAaxDpM0PWaut2Tlx6AYhWIimSTC%2FRrB6p3%2Bp9ycYCESGbKG79iAjxtVDWYtU9GL%2FslDk01LkcJ6Zx7s8B2jN21BJ4%2FQNjvNr%2BUrsr&X-Amz-Signature=35ee0bb563478236a2dd2df078f6280ef3a103949f5e6071f86bf456608edb05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IRCSZ3R%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCux0J3ZD0bBwAl76tfdwn53x9C1rtNgid15pscZG2KDwIhANyuIXexd3HCd8i98qs26HrrkfHwOjK2CcTHcWvJF1%2FGKv8DCD8QABoMNjM3NDIzMTgzODA1Igy5wGBsR1HCctrxUd0q3APhdQuuEmxrvYDT9njSGpPQBFVbimyDKNkazRtqa30FBoLI6pMZowsJ2HOICD6d%2F8CV3sxOqRwU32cNL4rhrCIAo9i3cdN7ajZoSkj5%2BUYN4VP7Ppv6FNVKT12KUa8gS1W8gS9J3%2F9igy7ONMfR8d05P5JDBn20N4QLBWjD9nd3SghZLwjYxpKeNY7gO7ih1PyYDKPsuUDWd9DQpJxir%2BjwxH7oIqlvCRNiLCU93kQBsaEDWpVq2wpX8FYpzzeLLpYLPN2P8Eu6%2B8KN7%2BntPhAbVOb3ejI64rHQxP3wDf9ur9pFMslf3furSudB10J5cG7uYl%2Bdd308%2Bv5dhIi%2FGrkSyuKzAPQdVNAJIkZcaEDYr2ZaUe107x9ScN3cow0xPoEbnapyyxAyos%2Bg6VonxPwRKnOothmEHV68KxMkiE5iSB9Zxb%2BKkq%2BeNuQd3jks4iEtNAutSyh8WK7bcsZ6Gu40bAMg7BKdE%2BP4ND7XfMnG9MCxTnGT2yERymPlWFxuzpdnipZ7lIEGAKrEk3xxskhjSn7gJW0PRdBR693U3Ob%2BAn%2BrGy9AvKru9uJtZt1TgwQeP10AFRWaALO7pZo7eXsV1qEi%2BnKzq8rlLdzUdiunfLKDwtUMfX28U2oZzDC02vzJBjqkATkbZaGvqT9zW9PiJ8uShCrQ8t6lwXGpjX6gFWNKEoFf6jSTCClHJhwad3w2HKz%2F2%2Fdy64SldUKxpYf069qswbmIxfl1VnmCUP9vAQ3H8ecxRtvIwj0FVVMAaxDpM0PWaut2Tlx6AYhWIimSTC%2FRrB6p3%2Bp9ycYCESGbKG79iAjxtVDWYtU9GL%2FslDk01LkcJ6Zx7s8B2jN21BJ4%2FQNjvNr%2BUrsr&X-Amz-Signature=a7b6ff70fe666d1b830397feb1c70b3a88cdfa7cffb0c6a2078bb84953e076a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
