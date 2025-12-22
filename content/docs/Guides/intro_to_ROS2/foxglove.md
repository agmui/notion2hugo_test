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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN3SCX4S%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQD9KU1PMvtn6f7bfuF4gAjkzcdfQ2qZmP4w3GvHKpESpgIhAIlgL%2F6vut9gOGUAciIE3kYUIiTC3XRCxEeLCxYfop1BKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1t2x2YGM6uo8daEkq3AN%2Bex27B9VHvnbJQ3noVHYerhL6s7DjnTgzpupzwfksbtCUlWPukedn7%2B%2BT0f4T6y2avNoFq9inTotTMQxOfQPZ8fpY1QC6oN9u1WBSieR9Zc8dKN3M5l6AHHIWBtCns5%2F7XC6LXC1XCmRW35GlIa3kkrauV9Ysi75TQx8NJ8W4iK5Ujd5sllxV9jWRMHCmktW%2BnLhq5cWbOn4w6n7u%2FnRkYtw4bJ3BTxUd%2B3bQE3B6S%2BA8Qc9%2BZDBJBaouy2foVk8hqSjUDxQuDOzmiBDYDruKv2FX5xqnGETtj%2BOmQx0co9qwkP3ycuwRkgpodzV3kmnC73fJcT8VHh1TcsLf8NNjDN7eTeAg27B2xXfvuBaG1mMPRz6LuMm8vU2ghfJMN%2B%2Fqa1bL4qrORJ4zSGQU9yBiMVLS5zrmg9pIJ4M5v3Zw0qhJe95ge5z%2FktEOeDHMnI9rKoc0coGEg0Cp1ggfzX%2F0GC9FZwrzKqStd67GwN4KXtTRo5NlZciQeK4BOQytBMjedyloYpOiAYoRoGP6sF6WGZT%2FKqLD8YepB5r2LwjM5KohLeaLvTdBhJCGGto9rVni2YnKYF%2FsmrM7KRhRRJxYpH86pKEW7K3CxtxUqj8SfbgqoR4%2FNSKV10iOIjCv%2BaHKBjqkAVvTnX8o42W1nvxJdix8Ydg0%2Bh5ttIUvFqM%2Foo29%2BXFhkMm19Dx%2FRoQuuqAkdgAH%2FiLmb92JbqlHhKER3bjovUVLMM%2B4etHLHoGj7pePhXrGCBJRhcHS8Tn0UbZTfAGaYsjmnJLLmlfTNYlRKxwFkxUtwc6odKwANCOsqBkLSs5k7xg7818qSEGhkmqNJRiG2Vl%2FulP8Kf5hueGoJVnr9eaGPSGx&X-Amz-Signature=508b6325effc6ea914a544705f45b3f49b14b80ab59c7bc0fd27bd9eaf873cfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN3SCX4S%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQD9KU1PMvtn6f7bfuF4gAjkzcdfQ2qZmP4w3GvHKpESpgIhAIlgL%2F6vut9gOGUAciIE3kYUIiTC3XRCxEeLCxYfop1BKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1t2x2YGM6uo8daEkq3AN%2Bex27B9VHvnbJQ3noVHYerhL6s7DjnTgzpupzwfksbtCUlWPukedn7%2B%2BT0f4T6y2avNoFq9inTotTMQxOfQPZ8fpY1QC6oN9u1WBSieR9Zc8dKN3M5l6AHHIWBtCns5%2F7XC6LXC1XCmRW35GlIa3kkrauV9Ysi75TQx8NJ8W4iK5Ujd5sllxV9jWRMHCmktW%2BnLhq5cWbOn4w6n7u%2FnRkYtw4bJ3BTxUd%2B3bQE3B6S%2BA8Qc9%2BZDBJBaouy2foVk8hqSjUDxQuDOzmiBDYDruKv2FX5xqnGETtj%2BOmQx0co9qwkP3ycuwRkgpodzV3kmnC73fJcT8VHh1TcsLf8NNjDN7eTeAg27B2xXfvuBaG1mMPRz6LuMm8vU2ghfJMN%2B%2Fqa1bL4qrORJ4zSGQU9yBiMVLS5zrmg9pIJ4M5v3Zw0qhJe95ge5z%2FktEOeDHMnI9rKoc0coGEg0Cp1ggfzX%2F0GC9FZwrzKqStd67GwN4KXtTRo5NlZciQeK4BOQytBMjedyloYpOiAYoRoGP6sF6WGZT%2FKqLD8YepB5r2LwjM5KohLeaLvTdBhJCGGto9rVni2YnKYF%2FsmrM7KRhRRJxYpH86pKEW7K3CxtxUqj8SfbgqoR4%2FNSKV10iOIjCv%2BaHKBjqkAVvTnX8o42W1nvxJdix8Ydg0%2Bh5ttIUvFqM%2Foo29%2BXFhkMm19Dx%2FRoQuuqAkdgAH%2FiLmb92JbqlHhKER3bjovUVLMM%2B4etHLHoGj7pePhXrGCBJRhcHS8Tn0UbZTfAGaYsjmnJLLmlfTNYlRKxwFkxUtwc6odKwANCOsqBkLSs5k7xg7818qSEGhkmqNJRiG2Vl%2FulP8Kf5hueGoJVnr9eaGPSGx&X-Amz-Signature=9cf783933d648d9db88beebd47f3a94a098d153a2358a7b1acce3de7572d35ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
