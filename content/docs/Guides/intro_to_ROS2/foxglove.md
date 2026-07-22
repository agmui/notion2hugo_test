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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE2VTNG4%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCMJ9SQkb7M2PQqZ4FK1Pzmwe4B2Wb6bUxkL8%2F6ku4znAIgBvHicaiglxColg%2Fu2uEMh2Ae2GXngSaQL41iPOgQly0qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtz8rR0cMHVZCLbeSrcA%2BiIgMUflKQBw0il3%2FeOjv7GMEbcVbheW5akSdm%2B4WSKMN20VHg6uCdOm8l3r4aJYMr2W4RZZZ7GCYsuU9BeBKmPpH7dBt5MVIl0rU5meVKmvORSzW7rn6w6nXzKVKOqWvUyEHddMVtugzLrJmqoGJlZ1yw49pZshJrTGQRks0MSBjmjHUewdKHPD6mpbEg0WF5tguEjRyj7luy0xLT8bWV9zoDJGbYSzGUlGB0JQzo1V2bZBhVUz3I6IoshtZIRttJhs5E0el0%2BpJpXuSR0VAufL7ixBQV2Pa2xppsckC2T%2FF%2FnGVpogHhFN5F57VoOLYDD73o3EcrJstVHhiPKBy%2B0HZl%2FSESSGgLVk8fuItlxkeUuzhrwO681ngd3QTm4m9yyWkUwGqeCzPZZu51a6erG77v9F6spPTljthsz2wVr09LBvPYbmgJjDVztIfIwUn%2FnQKAg9GFBB6b%2BpBHqsMRXDqPT9WMyyshdaC3zpjLZsGO8EwsVOWdA%2BeYC5%2FdR1wVsEEt%2FQNWw4K%2FMCKdbw7BDqvMAVPIx4Oo%2FeTeNX32latrPlQZWlkTWj7%2BWM7P1XXfazaT%2FNXrImlpV8Q59LM%2FuZTxX4YT2FI2ebZkNEXYarojEwlwTw%2BPL46TTMKXEgNMGOqUBLq539u3x5BWhh%2FP4DVlQCjVzDZG%2FJNa993oDgZrw7Igq8wprBW%2BK9jaHq3GnD9hy7Kw1ki2YIP%2B8jpUst2f8fRpFcdkdz6Y4bnQcEXc%2FoAujniymhc6AGamhA7EW%2BrT8%2BoY46leJYYtfce%2BwIEohej29qC2xL7Yk%2BSYpNefo6BbP3Ao5XMdM0Wc3lbIESdbsUZEPWXieldBj%2B2JL6fHux%2B1kDmdF&X-Amz-Signature=2d9d56ea5302f4010aa9614a926b679438c6926d245e0d0e4cf8e7253c45331e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE2VTNG4%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCMJ9SQkb7M2PQqZ4FK1Pzmwe4B2Wb6bUxkL8%2F6ku4znAIgBvHicaiglxColg%2Fu2uEMh2Ae2GXngSaQL41iPOgQly0qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtz8rR0cMHVZCLbeSrcA%2BiIgMUflKQBw0il3%2FeOjv7GMEbcVbheW5akSdm%2B4WSKMN20VHg6uCdOm8l3r4aJYMr2W4RZZZ7GCYsuU9BeBKmPpH7dBt5MVIl0rU5meVKmvORSzW7rn6w6nXzKVKOqWvUyEHddMVtugzLrJmqoGJlZ1yw49pZshJrTGQRks0MSBjmjHUewdKHPD6mpbEg0WF5tguEjRyj7luy0xLT8bWV9zoDJGbYSzGUlGB0JQzo1V2bZBhVUz3I6IoshtZIRttJhs5E0el0%2BpJpXuSR0VAufL7ixBQV2Pa2xppsckC2T%2FF%2FnGVpogHhFN5F57VoOLYDD73o3EcrJstVHhiPKBy%2B0HZl%2FSESSGgLVk8fuItlxkeUuzhrwO681ngd3QTm4m9yyWkUwGqeCzPZZu51a6erG77v9F6spPTljthsz2wVr09LBvPYbmgJjDVztIfIwUn%2FnQKAg9GFBB6b%2BpBHqsMRXDqPT9WMyyshdaC3zpjLZsGO8EwsVOWdA%2BeYC5%2FdR1wVsEEt%2FQNWw4K%2FMCKdbw7BDqvMAVPIx4Oo%2FeTeNX32latrPlQZWlkTWj7%2BWM7P1XXfazaT%2FNXrImlpV8Q59LM%2FuZTxX4YT2FI2ebZkNEXYarojEwlwTw%2BPL46TTMKXEgNMGOqUBLq539u3x5BWhh%2FP4DVlQCjVzDZG%2FJNa993oDgZrw7Igq8wprBW%2BK9jaHq3GnD9hy7Kw1ki2YIP%2B8jpUst2f8fRpFcdkdz6Y4bnQcEXc%2FoAujniymhc6AGamhA7EW%2BrT8%2BoY46leJYYtfce%2BwIEohej29qC2xL7Yk%2BSYpNefo6BbP3Ao5XMdM0Wc3lbIESdbsUZEPWXieldBj%2B2JL6fHux%2B1kDmdF&X-Amz-Signature=b0b5798799f493cad795d37a722397df3335c38accb93fa57a2a9f3cc349d24a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
