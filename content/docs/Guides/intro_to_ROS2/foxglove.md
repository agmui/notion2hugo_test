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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS6TGPNG%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFVDuO4N1LrHzma6uqg9bSOIfM%2BmAPHTVeZ6hCxwgzOHAiBX1cBB%2FxqUlDMiBlcn0WX4o5KdGkEvOgnhx1BBVvwrDSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqchJI5BGOTkX2mgqKtwDyoVVdy%2BD3tXDiRdXaAMRWGw8dHNTiK0Q82A%2Fv3UptI%2F1dCAB3d50%2BXb2nv296As8J7xRmE3vgxK6axdd8HkLaukGxodvLEIocC2GvK13NWxzOJfwcp8T1u3WkYC4bgfG17Q0QrXbn7p%2Fb9kXwKV5k3MTi3KWLV56MctYuuOoUmUokBkV%2FTsfG6ZiwLHsdFnlTN%2BelXKvqjSgEkNVlmzjv4CAGvDriyIl6g8lrx3tE9JZSycc%2F%2Fis%2Fg8XpR4gxWA%2FN7EcQHeV0DWByH6Z6V6C2ymbY55z6wYtLBL3vbf5a%2BfVxc4tveKUz4sY0yslVaw2VHYT02kUZkQQUDNRyLDE5byhgXKN0UycLf7W%2F5XdlzclQBNBWyZyBdo8ZWSxs5YS7wTdfcDraUwIdivmLgo6u4Kg2VWA%2FMzlTq31HY8K8ysAhGquBlap%2F5GdbbEJ70QCIpVRkeFjCPVQr0F3fOi8LaWxBGfePWRxu7WPkZkwaiOEXZEhDpOdSB%2Bwq3gK%2FGGwlOcrpKs0preNV9OhQ6zYDHSek18A25MJD5DEcsGteNqnejhFzDypW5Ab8stB4uQ2vwFwcg%2FX%2BVxRWfFnT4As5W9ODvINkAf%2F%2B%2Bd36LgIUlUE8lo16Yak0sufsegwtaXAzwY6pgHUG8%2FTBf7gczaBscuYz%2FrnB69oO9BWUO6FhiM%2FpvZHo%2BCr0g0zS0ej3VUL2eigUpS2VWKoWHzfTqmxiWoYYTdi5CoY9440FP%2BSI68s1TR%2FiKu%2FqB5qo2b20d191LsBg4tsWJz2Fw264KvuSG9U6VEE%2BF%2F3O%2FiGOeNSrQBt%2FmrTAREjuDVbctych2XunM5C4AUnu4pPKdvrmxDEtWV4vtUljxfkTtZi&X-Amz-Signature=6c2b8ddcb527084c4aa5c23d1b87f1b5173f6ecb40d0550eafb4af440aa085dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS6TGPNG%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFVDuO4N1LrHzma6uqg9bSOIfM%2BmAPHTVeZ6hCxwgzOHAiBX1cBB%2FxqUlDMiBlcn0WX4o5KdGkEvOgnhx1BBVvwrDSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqchJI5BGOTkX2mgqKtwDyoVVdy%2BD3tXDiRdXaAMRWGw8dHNTiK0Q82A%2Fv3UptI%2F1dCAB3d50%2BXb2nv296As8J7xRmE3vgxK6axdd8HkLaukGxodvLEIocC2GvK13NWxzOJfwcp8T1u3WkYC4bgfG17Q0QrXbn7p%2Fb9kXwKV5k3MTi3KWLV56MctYuuOoUmUokBkV%2FTsfG6ZiwLHsdFnlTN%2BelXKvqjSgEkNVlmzjv4CAGvDriyIl6g8lrx3tE9JZSycc%2F%2Fis%2Fg8XpR4gxWA%2FN7EcQHeV0DWByH6Z6V6C2ymbY55z6wYtLBL3vbf5a%2BfVxc4tveKUz4sY0yslVaw2VHYT02kUZkQQUDNRyLDE5byhgXKN0UycLf7W%2F5XdlzclQBNBWyZyBdo8ZWSxs5YS7wTdfcDraUwIdivmLgo6u4Kg2VWA%2FMzlTq31HY8K8ysAhGquBlap%2F5GdbbEJ70QCIpVRkeFjCPVQr0F3fOi8LaWxBGfePWRxu7WPkZkwaiOEXZEhDpOdSB%2Bwq3gK%2FGGwlOcrpKs0preNV9OhQ6zYDHSek18A25MJD5DEcsGteNqnejhFzDypW5Ab8stB4uQ2vwFwcg%2FX%2BVxRWfFnT4As5W9ODvINkAf%2F%2B%2Bd36LgIUlUE8lo16Yak0sufsegwtaXAzwY6pgHUG8%2FTBf7gczaBscuYz%2FrnB69oO9BWUO6FhiM%2FpvZHo%2BCr0g0zS0ej3VUL2eigUpS2VWKoWHzfTqmxiWoYYTdi5CoY9440FP%2BSI68s1TR%2FiKu%2FqB5qo2b20d191LsBg4tsWJz2Fw264KvuSG9U6VEE%2BF%2F3O%2FiGOeNSrQBt%2FmrTAREjuDVbctych2XunM5C4AUnu4pPKdvrmxDEtWV4vtUljxfkTtZi&X-Amz-Signature=0c7e4120d30b93efec4718eafdeb00bb2cd102445fefa64ad2823b5081e90a5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
