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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLTDJCHP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T171007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCeac%2BHgSH1yKmi3D%2Fic90zLvr0EHvCk8GjeveXXPzJMgIgYQE8TgPJIp5zqtZMBqVqaXl3QKM%2Fn6cnewlYLFMybRwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDKi6BwxeHEc%2B90WRkyrcA3LdPMXEOgQZoxiFBck06mxIncI6mvfaE11EoSKzOL5EFwLyzegkpMSinWS7u96LZVInoHfmCGxm4HO5%2Fubpl2m30epDcnEVHl1Z50hlPe9uQxEUPcRn0EU%2BJeX3jKS5cyPXvMurU6C%2FoxueMYckSPnpzxMPxHN%2ByY9GRbq49o27q4u%2BPAI0PwTAQ4gDFtF%2BpNxQzt1jNHyXUrvXdoRovGTg6KETLgS3DD%2FLrGNSyRPpMIjV61I99%2FQgYpw8Vst3xQIfumDnOrgjT1RI%2BSFI6QS%2F8ChC20RLRxhviMMoZhlQVtF2tnYv8wcm4B0Ynmgo4M%2BJo0Zj522Yk62T4eGf2Bjn9wCGL6aNod8OzOfxtz1Ww%2FFWnYSXWCCX%2BYNHFoUuDiT7NLJbG37kdjpMKSP50xFc%2BugTRc%2BY7qB41u%2FLHO%2FjOlgulK0ZDvTDapQ0VMxzMdj8pguE3Ks3VkGCAbFvsY%2BFH8xi6VcdBXs%2F%2F6YSVeQWvwNmqcWCqOoNeWhvL3gd5QfSCAgwPPxaUD4bLqoAngVtN7Fbj90qn6vps3QBVIpfVkz6DwTiFTJecrAV2LlQtNPlddSF1q%2BKkuTgql9niNZnwo7V%2BHpfzkbHpnrMIU%2F2UhRjqd%2Fh7qcHpYabMIef%2BMQGOqUBIZizeKWSfoPWikk7YVp5ipRc%2Fy2NMiqFo6DDgDYrL3EyEzOWAqS16GWIdSJAnQcCi6D0Mq%2FWwTeBs3A4cbyHMRClcphKQLkyuG5TYqwuCNA8v49PolZzBaHkNxvp%2BNOuh%2FTyBd3GSs5od6uPO3LyFsAFYwXiu9iBXjqrngbyl3fv4xlW8J4m7bO9gLaHr14UUQrxWmvPTAiIxrkQLqQjoXBODuMm&X-Amz-Signature=0a21acabe4030da13f4e778ef3958f470b3444174118c8195d715345cb7f0336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Foxglove is similar to rviz however one of its biggest feature is its ability to connect over the internet.

This is nice for wireless robotics setups but still need a rviz visualization.

You are also able to record and play back sensor data and visualize it in foxglove.

## Using foxglove

First make sure you know the ip of your robot.

<details>
      <summary>How to get robot ip:</summary>
      To find the robot’s ip run on the robot computer:
  </details>

For now I recommend using your phone’s hotspot to connect between the computer and robot.

<details>
      <summary>how to connect robot jetson/rasberry pi to hotspot</summary>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLTDJCHP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T171007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCeac%2BHgSH1yKmi3D%2Fic90zLvr0EHvCk8GjeveXXPzJMgIgYQE8TgPJIp5zqtZMBqVqaXl3QKM%2Fn6cnewlYLFMybRwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDKi6BwxeHEc%2B90WRkyrcA3LdPMXEOgQZoxiFBck06mxIncI6mvfaE11EoSKzOL5EFwLyzegkpMSinWS7u96LZVInoHfmCGxm4HO5%2Fubpl2m30epDcnEVHl1Z50hlPe9uQxEUPcRn0EU%2BJeX3jKS5cyPXvMurU6C%2FoxueMYckSPnpzxMPxHN%2ByY9GRbq49o27q4u%2BPAI0PwTAQ4gDFtF%2BpNxQzt1jNHyXUrvXdoRovGTg6KETLgS3DD%2FLrGNSyRPpMIjV61I99%2FQgYpw8Vst3xQIfumDnOrgjT1RI%2BSFI6QS%2F8ChC20RLRxhviMMoZhlQVtF2tnYv8wcm4B0Ynmgo4M%2BJo0Zj522Yk62T4eGf2Bjn9wCGL6aNod8OzOfxtz1Ww%2FFWnYSXWCCX%2BYNHFoUuDiT7NLJbG37kdjpMKSP50xFc%2BugTRc%2BY7qB41u%2FLHO%2FjOlgulK0ZDvTDapQ0VMxzMdj8pguE3Ks3VkGCAbFvsY%2BFH8xi6VcdBXs%2F%2F6YSVeQWvwNmqcWCqOoNeWhvL3gd5QfSCAgwPPxaUD4bLqoAngVtN7Fbj90qn6vps3QBVIpfVkz6DwTiFTJecrAV2LlQtNPlddSF1q%2BKkuTgql9niNZnwo7V%2BHpfzkbHpnrMIU%2F2UhRjqd%2Fh7qcHpYabMIef%2BMQGOqUBIZizeKWSfoPWikk7YVp5ipRc%2Fy2NMiqFo6DDgDYrL3EyEzOWAqS16GWIdSJAnQcCi6D0Mq%2FWwTeBs3A4cbyHMRClcphKQLkyuG5TYqwuCNA8v49PolZzBaHkNxvp%2BNOuh%2FTyBd3GSs5od6uPO3LyFsAFYwXiu9iBXjqrngbyl3fv4xlW8J4m7bO9gLaHr14UUQrxWmvPTAiIxrkQLqQjoXBODuMm&X-Amz-Signature=64fe96162d1d35404eaf31b7552a353a23d8dc31d31f2d42681c5e47baf69fff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
