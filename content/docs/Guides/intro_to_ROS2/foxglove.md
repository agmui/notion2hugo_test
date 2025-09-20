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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB3F7OLQ%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDyHLpDiCm1C7h3CuIlP6670dW3vvL%2Fs7DvD4cy0sqrywIgKVHb3qj6VQb50ryfPDOO0W5FTEKWVGTliHOSreyzOx4qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0JOPXl1DT2oxLojCrcA0WJ5GRm3lWOcB9GbjrRnW44Sgi8BvzEC9RT68RpleyFq34oS5ra%2BdU6b0KLVYXBDKt3dwioX1zb3ocEwM24rODtlHaeofF%2FoNwFzqxU6rRZ3RgtQHgLEjkhyDziM9rX4zYQTted3u7scsDl26dh7ARKR479Fm%2ByKM28MUFrogrimF7rL9YpttfatoxqeEHyKb2HtFuwyWeR8AMH%2B%2FWbYQUER7WtqeiPI9NSp9fpHLIN%2FRY5%2FjRn2aU4mTl7k0AnLsqOTiF7o7nsJycDLOgF4gf64PuXbZIl1yi%2F%2B2a1K3Wd%2FN0UmzC%2FVJqU0%2FyfmhRSuFthzFrY%2BX94jX9R8shoSwGs%2BmbLyt7zR8lxjTt9IHuzcM%2B5FCmSCv381zoyaFDyKga4rZw94uK85C%2BwY9lrbMK0Vgfs9IBk9J0%2Bm6QobyGNWCFmXPxBwcxjGXRPDi9FiLfGGbFlI7qQqxU9k0Ntlbac%2Fg4nl44erAhZKvL1Q6f%2B0mKlhkvl6NzzXm8syQ0gEUdOiEXDxHWwheuW%2BC4%2FHvvfzvW6QRBZMeQpha8g0qzGE7XEfqPAmUpq%2Bxh64vqFsZJSvX0Jzc5rlt7am9WdNv0aL1VJ5Qz7d%2FbgrWtYSqZebbadNNWp2VzT6BZbMNn%2Ft8YGOqUBiBU6ROe%2FkNhQlzPrBAig9SDJE3nTaZ9huh%2BB5F5AekJ1jy3QiPa7L%2FR6tedOrZ4vI5Iq%2BnDEZxf%2B37fSUBUzSs7%2Fw%2F08ccxUtoqF9bOJ4eD4ERk4qJzyIJ4ePB1CxEvqMgJR45%2FaPHSZfog8tXcwdCFoNDlOI2Xy2OCFMptXZSvEobrkJNnyo2rkuF1OXRg%2BiwpxaYXj%2FYAL2ZYGei5JfmOo9Uu7&X-Amz-Signature=703196eaa3e4e569bbc5f0ae6b7c211217b9937caf788eab5a0ad1ce7dbc3d6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB3F7OLQ%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDyHLpDiCm1C7h3CuIlP6670dW3vvL%2Fs7DvD4cy0sqrywIgKVHb3qj6VQb50ryfPDOO0W5FTEKWVGTliHOSreyzOx4qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0JOPXl1DT2oxLojCrcA0WJ5GRm3lWOcB9GbjrRnW44Sgi8BvzEC9RT68RpleyFq34oS5ra%2BdU6b0KLVYXBDKt3dwioX1zb3ocEwM24rODtlHaeofF%2FoNwFzqxU6rRZ3RgtQHgLEjkhyDziM9rX4zYQTted3u7scsDl26dh7ARKR479Fm%2ByKM28MUFrogrimF7rL9YpttfatoxqeEHyKb2HtFuwyWeR8AMH%2B%2FWbYQUER7WtqeiPI9NSp9fpHLIN%2FRY5%2FjRn2aU4mTl7k0AnLsqOTiF7o7nsJycDLOgF4gf64PuXbZIl1yi%2F%2B2a1K3Wd%2FN0UmzC%2FVJqU0%2FyfmhRSuFthzFrY%2BX94jX9R8shoSwGs%2BmbLyt7zR8lxjTt9IHuzcM%2B5FCmSCv381zoyaFDyKga4rZw94uK85C%2BwY9lrbMK0Vgfs9IBk9J0%2Bm6QobyGNWCFmXPxBwcxjGXRPDi9FiLfGGbFlI7qQqxU9k0Ntlbac%2Fg4nl44erAhZKvL1Q6f%2B0mKlhkvl6NzzXm8syQ0gEUdOiEXDxHWwheuW%2BC4%2FHvvfzvW6QRBZMeQpha8g0qzGE7XEfqPAmUpq%2Bxh64vqFsZJSvX0Jzc5rlt7am9WdNv0aL1VJ5Qz7d%2FbgrWtYSqZebbadNNWp2VzT6BZbMNn%2Ft8YGOqUBiBU6ROe%2FkNhQlzPrBAig9SDJE3nTaZ9huh%2BB5F5AekJ1jy3QiPa7L%2FR6tedOrZ4vI5Iq%2BnDEZxf%2B37fSUBUzSs7%2Fw%2F08ccxUtoqF9bOJ4eD4ERk4qJzyIJ4ePB1CxEvqMgJR45%2FaPHSZfog8tXcwdCFoNDlOI2Xy2OCFMptXZSvEobrkJNnyo2rkuF1OXRg%2BiwpxaYXj%2FYAL2ZYGei5JfmOo9Uu7&X-Amz-Signature=445a763dd7f1bcd4b2c6da041d73821964c4411b1b5a2d7e83ba713dfa77a8a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
