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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BNBIYUM%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDYh%2Fn6M3Uo1TDQIELR7m2YLM47v30gE8LlIRfJgqEO6QIhAJ%2BgJBHg6vh4ZxRL2lNs5dBuv5TSGAWX6s%2FKlGC0%2BmZ0Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzChQpWQVkjdgePNsEq3ANbjUxwQa5gGaj9tuWtTaQyMqBZ8oGzBtTRKRft%2Ftdaw9snA2GZ5jWuMvMaysQJzcNd26KA0qzHl%2Bq%2BbrCdK4sOpHWZlM9pYD9vBxlVV%2FVM1ix1iIZIF2fSeaYEsonqrFtyRsoZUwwkunlHU237GfQNlQB7l1oVZ%2Fbw0PnxjO781hI1EI39%2FU4m9ABnYxc6hoE9iealMFd0cO0HUPkq3%2BxWwvegh855CNi5ByMs%2FTLmXscspVKtUIbccrx7zVbli%2B2bPJPusWOEptdJf7%2F%2BkycrgAh73i1uQ4UenhkhR9%2FmIfL52JSYYxCz86oqNfV6AZmr7lhIPPaODQ5GzF2g7fX2ym%2B4BRzqOU4BnBaqOqvHjeLSns6WQNMRXAfDjgauzecccIwG7PKaKXqq4cm7wlByXGBXL8HhcW8xH9TwKfy%2Fpfl5L3FyLLIXoFfRnFsI%2FXOMgpVs9uPuz3mhAiD8mndY0HwSwx7UyTQz7OWsfVqS32qzzpBwlXgHAonYWU%2FFgFfMAlwWChcWQZdtAn79X8Tva9VIbgwdvf6C27JgqKIFPEqzswBsc4BpBJRdPJadC6GOxd%2FMS4DKp4Db17x6zg9C3ZIx4f2GsVwrfPCjZ3Xi4BW4WsjG4TaUyXW%2FFzDTsInJBjqkAWFDyIlV3TZTZkCSfiqQKR1MrVdGua75EMSl5uFvbnxoiLxB2EFbqkDN0EQV5tjlY9odvQvAhJalMKqKwQVTuNRu%2FLLszGZt2j7mBa3Ah%2FdXsMV%2Bje%2BA2urnpGAJ5Y4otl68wvrs0H6QhmqasHaYtf%2F0zPyxwQ6pg35ybjsfnVaSCiN3HN61zGvr9Xdd12tqxMZVNKjWYZG%2BXddiY6Rvs4woLA3W&X-Amz-Signature=ae90618677ed31b469dbaf937c2d4d4bcc26a4c92d8df2e9629373323eb68513&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BNBIYUM%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDYh%2Fn6M3Uo1TDQIELR7m2YLM47v30gE8LlIRfJgqEO6QIhAJ%2BgJBHg6vh4ZxRL2lNs5dBuv5TSGAWX6s%2FKlGC0%2BmZ0Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzChQpWQVkjdgePNsEq3ANbjUxwQa5gGaj9tuWtTaQyMqBZ8oGzBtTRKRft%2Ftdaw9snA2GZ5jWuMvMaysQJzcNd26KA0qzHl%2Bq%2BbrCdK4sOpHWZlM9pYD9vBxlVV%2FVM1ix1iIZIF2fSeaYEsonqrFtyRsoZUwwkunlHU237GfQNlQB7l1oVZ%2Fbw0PnxjO781hI1EI39%2FU4m9ABnYxc6hoE9iealMFd0cO0HUPkq3%2BxWwvegh855CNi5ByMs%2FTLmXscspVKtUIbccrx7zVbli%2B2bPJPusWOEptdJf7%2F%2BkycrgAh73i1uQ4UenhkhR9%2FmIfL52JSYYxCz86oqNfV6AZmr7lhIPPaODQ5GzF2g7fX2ym%2B4BRzqOU4BnBaqOqvHjeLSns6WQNMRXAfDjgauzecccIwG7PKaKXqq4cm7wlByXGBXL8HhcW8xH9TwKfy%2Fpfl5L3FyLLIXoFfRnFsI%2FXOMgpVs9uPuz3mhAiD8mndY0HwSwx7UyTQz7OWsfVqS32qzzpBwlXgHAonYWU%2FFgFfMAlwWChcWQZdtAn79X8Tva9VIbgwdvf6C27JgqKIFPEqzswBsc4BpBJRdPJadC6GOxd%2FMS4DKp4Db17x6zg9C3ZIx4f2GsVwrfPCjZ3Xi4BW4WsjG4TaUyXW%2FFzDTsInJBjqkAWFDyIlV3TZTZkCSfiqQKR1MrVdGua75EMSl5uFvbnxoiLxB2EFbqkDN0EQV5tjlY9odvQvAhJalMKqKwQVTuNRu%2FLLszGZt2j7mBa3Ah%2FdXsMV%2Bje%2BA2urnpGAJ5Y4otl68wvrs0H6QhmqasHaYtf%2F0zPyxwQ6pg35ybjsfnVaSCiN3HN61zGvr9Xdd12tqxMZVNKjWYZG%2BXddiY6Rvs4woLA3W&X-Amz-Signature=1ac8d4ffdf2bed160021ead159d80c5ec14e3f84cd0c317956fafa277f815421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
