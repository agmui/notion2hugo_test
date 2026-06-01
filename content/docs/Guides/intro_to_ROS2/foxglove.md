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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE42Q3QL%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQC2x4ni%2BYkdvH5pZSgah%2B3v3Fn8DvCTxKBf0%2BssgUv29wIgX7JKf3Vyu7m0BqGQG32AS%2F%2B3Orjrb0ZW%2FGnxfMbfkSoq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDI4zZXS6Gezt6niAsCrcA8i0heRRIfVcdNXNVvkjsFx7IRl%2Bz0te%2FI9f33zyl4gXmhJqFPDFFRZWb%2BN%2F7fkzcM%2BGQ8ZTaiitSrAIrvT%2FucJA0%2Fk82ntXwoJwSfFmkVnaiTdVku4a%2BzGzCU2O%2Fqs7P%2FOfdX8o%2BuCJ%2BNvGw9naVnnQd1HGhyqvtXnZW2rSRFQzjg2g6MYlDadvG9OwqV0Nha%2BTqTcenqiJqCB38duMS5VMAsoolQ2qGEg%2BrS7EyuGIXz8boUsmC1aSWuWQgQbksM7Jt3RdBOjJq2MnXFQhD135p%2FhBuwPNyBb9Oibye2zVh2oikHdPUBVRBhTlKZhrjx3XzcziSa0ZzZTM1mKqee0X2ckc15f1rmdzo705jKfHOaNy9AATLn1RwSHQ60AFijWu3TUj%2Be%2BUAyB9CpCKQSk9QV5DwqHGDxGbJVHUMhIggKUctP37gO8nwQTK13BPnjFlKJlMetgxPtGavdIE9826pcJeExHWBn3%2BAPR%2Fp8vUQ7qVFY68P9kHgpytRmQfGhpebZyVHjDngLYuioowP4fNADo3Zvmc2TEyoy%2FwMD4lKz5iy%2BF%2F87imPRpJ8g1u8lL%2F3Bn9gCYqMhYsJ%2BOGF%2FiAdX1ePqe3rnrxEBxPWoq%2B%2F%2B3hF3HUTB0MIeEHMKil89AGOqUB8olh0BE5NAXMkDhnKaqU%2FIc0PsFYtzWpuVzfKfLrLABBY2RiWqySAiwN3MWzYwyIU5A7%2F2p469YJbXr%2BbxsQ%2BItaLGHyoG0rHeNUf4Q1l%2FANnP%2FY7%2BhScTsLQI7lG8byliLPA4vIlGT0vISggfIIjzifMwe5RS94UMRV53kom0LFmN9t1hu%2B2S6u6HdsIG9amEGVJyq7sKgyM7F1L42dQOh4wYK1&X-Amz-Signature=fae9a512f56359f8392d1fc23610220da258e5cc1e6565f04263bbacc49fe1cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE42Q3QL%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQC2x4ni%2BYkdvH5pZSgah%2B3v3Fn8DvCTxKBf0%2BssgUv29wIgX7JKf3Vyu7m0BqGQG32AS%2F%2B3Orjrb0ZW%2FGnxfMbfkSoq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDI4zZXS6Gezt6niAsCrcA8i0heRRIfVcdNXNVvkjsFx7IRl%2Bz0te%2FI9f33zyl4gXmhJqFPDFFRZWb%2BN%2F7fkzcM%2BGQ8ZTaiitSrAIrvT%2FucJA0%2Fk82ntXwoJwSfFmkVnaiTdVku4a%2BzGzCU2O%2Fqs7P%2FOfdX8o%2BuCJ%2BNvGw9naVnnQd1HGhyqvtXnZW2rSRFQzjg2g6MYlDadvG9OwqV0Nha%2BTqTcenqiJqCB38duMS5VMAsoolQ2qGEg%2BrS7EyuGIXz8boUsmC1aSWuWQgQbksM7Jt3RdBOjJq2MnXFQhD135p%2FhBuwPNyBb9Oibye2zVh2oikHdPUBVRBhTlKZhrjx3XzcziSa0ZzZTM1mKqee0X2ckc15f1rmdzo705jKfHOaNy9AATLn1RwSHQ60AFijWu3TUj%2Be%2BUAyB9CpCKQSk9QV5DwqHGDxGbJVHUMhIggKUctP37gO8nwQTK13BPnjFlKJlMetgxPtGavdIE9826pcJeExHWBn3%2BAPR%2Fp8vUQ7qVFY68P9kHgpytRmQfGhpebZyVHjDngLYuioowP4fNADo3Zvmc2TEyoy%2FwMD4lKz5iy%2BF%2F87imPRpJ8g1u8lL%2F3Bn9gCYqMhYsJ%2BOGF%2FiAdX1ePqe3rnrxEBxPWoq%2B%2F%2B3hF3HUTB0MIeEHMKil89AGOqUB8olh0BE5NAXMkDhnKaqU%2FIc0PsFYtzWpuVzfKfLrLABBY2RiWqySAiwN3MWzYwyIU5A7%2F2p469YJbXr%2BbxsQ%2BItaLGHyoG0rHeNUf4Q1l%2FANnP%2FY7%2BhScTsLQI7lG8byliLPA4vIlGT0vISggfIIjzifMwe5RS94UMRV53kom0LFmN9t1hu%2B2S6u6HdsIG9amEGVJyq7sKgyM7F1L42dQOh4wYK1&X-Amz-Signature=ece46f20df108b42b15678cad2d2d0c89665db9738e348f4e6365f3a101650a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
