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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYACZ7VX%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbDtgZJx1%2BSuPx7yF%2BJawZHEpMrFVyxpgRBpE4O9MmmAiEAuctnYu6yK4cFF%2FDx1JS2R1Ainbfg2ER%2FvUZknLRbnBUqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFxjidgT4UO2dWm5CrcA5ZyzFN2aG0NvYC79fVHR%2BdPjvlaUyM9p3cbvC3KyaEcmvJTI1iwiOk48wEoGwucVB0HqfTrvDgXCB6rqgNC9B0mXjTsq7H3piI5TbGKJ1vnAcp5z2XRbirlInEUzHapQtzws6%2B5htYf0IpXIlnZ8SoiqqBzYLP3oAsmm%2BxPrFSJHEjztkdlcekeqJFhhWLwQgHvJnasMazUC%2FsG77gq7ZkAh1jiQIn4PKynQaPgute2jjuQ979q8hFeSnN3sUO0%2FSPbnSGlLXg35bjIzCX2Ine8LcTcZE2%2BK3tKDmudWbvAQ%2FfbT%2BNcFmNiD2JNvnAmvFSzUCbNPjxw1p%2BXNWNWs5wV4LxfvMDFvkfcrwKNh9My3pLYVU98bzIZU%2FAGRRO5Lcp%2BjV5SRSiVKLnRAOu5R692KWbRqlpBLj%2FIkkMbyS4HAdt4ZsDuzBMjClgDbe5edjrIDcX%2B2BsPLp5eY8VG%2B%2Fu%2F%2FvNjRJeCqT0LSNJKIwJkMK3RDeQBG1ZfHpYBQXtslog2h4bfKGZAw381jBjvqdqq%2BPetb6OV%2B9KchpiU55bPtptlDoJxcTFDlLUy0JqaqH7PR32zODvhwIuFUJqM1xixS6AvKPbYAFHYMNvp06ZUEabbEDulLTQtq0MVMP%2Fwr8gGOqUBss7SWD9PrlfXHgCHULaltOFpBEwA6R%2FyF%2F70eW%2BxLLyBz1tWj8Ka0KAfCzTkKk%2FGAFdqbMmasfH9AhVDHE2RYJd4IIJud%2BSdYju1kWqwVQwOmS%2FDerqdX2nkONe22%2FtujpDYjwGOg8hlgPKs3KXcJ1VLzBxnXezejjpEGyWWAiZGF4O7rCahHM4stgZBQJm8gwvffLhdvDKeIcLXGInJ8jSi0BWG&X-Amz-Signature=a7a5342c00f2774c9a099f1baa71983e3da5a570cdec084a454a93e764520062&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYACZ7VX%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbDtgZJx1%2BSuPx7yF%2BJawZHEpMrFVyxpgRBpE4O9MmmAiEAuctnYu6yK4cFF%2FDx1JS2R1Ainbfg2ER%2FvUZknLRbnBUqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFxjidgT4UO2dWm5CrcA5ZyzFN2aG0NvYC79fVHR%2BdPjvlaUyM9p3cbvC3KyaEcmvJTI1iwiOk48wEoGwucVB0HqfTrvDgXCB6rqgNC9B0mXjTsq7H3piI5TbGKJ1vnAcp5z2XRbirlInEUzHapQtzws6%2B5htYf0IpXIlnZ8SoiqqBzYLP3oAsmm%2BxPrFSJHEjztkdlcekeqJFhhWLwQgHvJnasMazUC%2FsG77gq7ZkAh1jiQIn4PKynQaPgute2jjuQ979q8hFeSnN3sUO0%2FSPbnSGlLXg35bjIzCX2Ine8LcTcZE2%2BK3tKDmudWbvAQ%2FfbT%2BNcFmNiD2JNvnAmvFSzUCbNPjxw1p%2BXNWNWs5wV4LxfvMDFvkfcrwKNh9My3pLYVU98bzIZU%2FAGRRO5Lcp%2BjV5SRSiVKLnRAOu5R692KWbRqlpBLj%2FIkkMbyS4HAdt4ZsDuzBMjClgDbe5edjrIDcX%2B2BsPLp5eY8VG%2B%2Fu%2F%2FvNjRJeCqT0LSNJKIwJkMK3RDeQBG1ZfHpYBQXtslog2h4bfKGZAw381jBjvqdqq%2BPetb6OV%2B9KchpiU55bPtptlDoJxcTFDlLUy0JqaqH7PR32zODvhwIuFUJqM1xixS6AvKPbYAFHYMNvp06ZUEabbEDulLTQtq0MVMP%2Fwr8gGOqUBss7SWD9PrlfXHgCHULaltOFpBEwA6R%2FyF%2F70eW%2BxLLyBz1tWj8Ka0KAfCzTkKk%2FGAFdqbMmasfH9AhVDHE2RYJd4IIJud%2BSdYju1kWqwVQwOmS%2FDerqdX2nkONe22%2FtujpDYjwGOg8hlgPKs3KXcJ1VLzBxnXezejjpEGyWWAiZGF4O7rCahHM4stgZBQJm8gwvffLhdvDKeIcLXGInJ8jSi0BWG&X-Amz-Signature=edd27e10a452dcd2db87111c188e21452b60ec16dae4ef2d078464b38acf29c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
