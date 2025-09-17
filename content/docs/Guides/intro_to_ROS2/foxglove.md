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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVX42DP2%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIGkiEl1i2SDSYtPFL%2FWaApHf6Bwb42dBvKmfWk0fzxlcAiACOEPT%2F8m0F6eYTQc6%2Fjqqrpvd2SlHsKbbbUSjEGUniiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFu1R2vmo5lk9ZLmWKtwDxDKpgaxfl4bYnsCgu%2BISdaDI3gzfYjwcP9J5BM3EYBYeQ4vlKlbfq17yNMkneJKKay48nSegZ44uSwwKkLSt%2BiZxuQ4rmvjatD%2FivNMDDZsKyInLsXkbKxNSV%2FJsq77imjBNy8JvcColbjyC3moo9POhle6ZGAUyw3rO%2BNuGSOgfpUmlxdKZjsgGkBdjrAhNcRJdJGFf7%2ByAodtrOVgp%2B4gBVqZ8O4yvR1h0YMkjG7aOtbwFrA2X71vG%2Fe6tPgmjk75bJLhDH5fC1JSdgf%2FmOpPA95KZ7pest1Uvl%2FOgOSUQFpC9ryl%2BigCBmU2UGujQMuHiDzXrhoItdHP3cjAPmhL9yxd%2BsKDbpCPOnfdH1s5NmoJLjKYhLPAvNuyv%2BU3QDDJYNwzTjqvJQPwbQH8cuKsYeZpmFXIwzwPwwvgAyIlVqGbVlOfvQFpjA0V8N36V2mVrZeJR6i2L702pvYDSs1ldIddECa%2BnjU1iJc96484m43xTCLTNBQSDjt%2F649x5tLTzN1HP6inR8Pr5zoq8zaMB859PrtUTYD%2BCe%2FfFxq0o%2Bb8MbtYS5M3b3PblWV6FhFB8%2BcrR%2BrkvYZC0%2FFNQN8U2x7Z19rQ0RBXGAXXXr2jr4nutplpIZT41u9cw7PCnxgY6pgFcpkpW1aihHSPriX5LG2sDaMETnbpmLiht9z1WtgVgz7LXx73cQOq4T0eLfjo13UDv6lLiyDJncyL5vO8VldFAgwFnTaxF4lrzOEjbT6TTDvi9c3y64jpt0Z8gHaAg8%2FaGGqq6yD%2FFvYWXMv%2FXcGQaWlpRVZzvKeZf1aQTX3u64k%2FD9rDaPfeG0Y7jpaqfErsibEX4aH7by0I3Atpb8bUZ44UEeZQz&X-Amz-Signature=03194ce9d8e5a2f3e421a79bf1ea832f57a46d41a79518aa6765735bb98a73ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVX42DP2%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIGkiEl1i2SDSYtPFL%2FWaApHf6Bwb42dBvKmfWk0fzxlcAiACOEPT%2F8m0F6eYTQc6%2Fjqqrpvd2SlHsKbbbUSjEGUniiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFu1R2vmo5lk9ZLmWKtwDxDKpgaxfl4bYnsCgu%2BISdaDI3gzfYjwcP9J5BM3EYBYeQ4vlKlbfq17yNMkneJKKay48nSegZ44uSwwKkLSt%2BiZxuQ4rmvjatD%2FivNMDDZsKyInLsXkbKxNSV%2FJsq77imjBNy8JvcColbjyC3moo9POhle6ZGAUyw3rO%2BNuGSOgfpUmlxdKZjsgGkBdjrAhNcRJdJGFf7%2ByAodtrOVgp%2B4gBVqZ8O4yvR1h0YMkjG7aOtbwFrA2X71vG%2Fe6tPgmjk75bJLhDH5fC1JSdgf%2FmOpPA95KZ7pest1Uvl%2FOgOSUQFpC9ryl%2BigCBmU2UGujQMuHiDzXrhoItdHP3cjAPmhL9yxd%2BsKDbpCPOnfdH1s5NmoJLjKYhLPAvNuyv%2BU3QDDJYNwzTjqvJQPwbQH8cuKsYeZpmFXIwzwPwwvgAyIlVqGbVlOfvQFpjA0V8N36V2mVrZeJR6i2L702pvYDSs1ldIddECa%2BnjU1iJc96484m43xTCLTNBQSDjt%2F649x5tLTzN1HP6inR8Pr5zoq8zaMB859PrtUTYD%2BCe%2FfFxq0o%2Bb8MbtYS5M3b3PblWV6FhFB8%2BcrR%2BrkvYZC0%2FFNQN8U2x7Z19rQ0RBXGAXXXr2jr4nutplpIZT41u9cw7PCnxgY6pgFcpkpW1aihHSPriX5LG2sDaMETnbpmLiht9z1WtgVgz7LXx73cQOq4T0eLfjo13UDv6lLiyDJncyL5vO8VldFAgwFnTaxF4lrzOEjbT6TTDvi9c3y64jpt0Z8gHaAg8%2FaGGqq6yD%2FFvYWXMv%2FXcGQaWlpRVZzvKeZf1aQTX3u64k%2FD9rDaPfeG0Y7jpaqfErsibEX4aH7by0I3Atpb8bUZ44UEeZQz&X-Amz-Signature=fcdada9240dc900ffd5b5941cdfb4578113a53e074c28a468830d392d7d33258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
