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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DV7GI2T%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDTi6Lcweoe7N7MGquUvPI848DOoKsyuexBBK6Vc69L5gIgZowTYG%2FwPLlXfEWSkl5dYtgv6C%2FAxU93hEn%2Fzb3G3t0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFPqs8Ov6vqNRcjKkCrcA%2BBB2ih%2FAaG7oZnSzy8KEskVnNpPZYgUEurmkXSx0kn%2Bi0B%2FJ9KGrdJH73pQzv%2BFR2zzBr74%2Bnv0QEFvSGPiAV2zdooALKh%2BZSUJAsPbwX%2BisdAZJHwwqC1wnT2iZqbm%2BU8dJyDNM7xtrhsW3vZG85oNH2lUn8eoUp6pWW503MRnaIGW5M3PDS7Njx94c48ruNalFkn5Hb9lWeO%2Bw%2BxxbnurT%2B%2BontpE%2FkOrcvLPb8ZWKGc4dnPU4abm65%2B3S%2F72%2BMlJVz6ORwVxCgeYeoq1RuwCtkqmYMaE8i9ZUpEV%2FfbBT4%2BkRqa%2B4TbIqrzxAetec4xH25uRf7ehP74GSfJtjXaRTb6O%2F%2BjgHbxBGxEdsGvcmiuCX4719VSCKtB%2F%2FL%2BjLM5qiiA4um%2FyjabRHfO%2BfRujlznsdDlouXOpQuucURyiuJZvtqdiXXnSsvW75twdPLLCtzgaqZr57kAOaVNiguhlR0Sz%2B%2FgEbZQLD5UbeDhHvwensUu%2FXjxf5a%2Bs7D9qkD9B1EZCdqRWEFxWe7xb0hocjMZvZXAF7iE9KiqgGbvAiFxlT28NEbzl8sKCN%2BJCgmjeBTP9Fk1rgOI4qC0g1wJRawwyFhaL7HXMvp4Y%2BmmJNiwlt2aXBmiW%2BfyjMML3gMUGOqUB7IhFHQkdx3Tn2Nkn4EZCh3dNybQbgYZ3djeD%2B5uoEcJKf6gpwdU9guZ2Qdzg87TIjWkUoH5IgVsrV7OPkHpx3BN5oPgGVeXAAeWWnYAMb5A9WaVX%2Bfs%2BQ1TWHk2whQlDxHUgMRDI8kWcuMCZ3Pj6fpztAEXbTjocNoIsFh9AsyqQmFSYWw7kfF%2FJAvfShEX1n%2FhtVXwp5qiba8ZXF%2BwGsEyKv9qz&X-Amz-Signature=e0b6008176cdeb18a40f6a522861e8997574f72f72fe3de72a0b7680f850da82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DV7GI2T%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDTi6Lcweoe7N7MGquUvPI848DOoKsyuexBBK6Vc69L5gIgZowTYG%2FwPLlXfEWSkl5dYtgv6C%2FAxU93hEn%2Fzb3G3t0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFPqs8Ov6vqNRcjKkCrcA%2BBB2ih%2FAaG7oZnSzy8KEskVnNpPZYgUEurmkXSx0kn%2Bi0B%2FJ9KGrdJH73pQzv%2BFR2zzBr74%2Bnv0QEFvSGPiAV2zdooALKh%2BZSUJAsPbwX%2BisdAZJHwwqC1wnT2iZqbm%2BU8dJyDNM7xtrhsW3vZG85oNH2lUn8eoUp6pWW503MRnaIGW5M3PDS7Njx94c48ruNalFkn5Hb9lWeO%2Bw%2BxxbnurT%2B%2BontpE%2FkOrcvLPb8ZWKGc4dnPU4abm65%2B3S%2F72%2BMlJVz6ORwVxCgeYeoq1RuwCtkqmYMaE8i9ZUpEV%2FfbBT4%2BkRqa%2B4TbIqrzxAetec4xH25uRf7ehP74GSfJtjXaRTb6O%2F%2BjgHbxBGxEdsGvcmiuCX4719VSCKtB%2F%2FL%2BjLM5qiiA4um%2FyjabRHfO%2BfRujlznsdDlouXOpQuucURyiuJZvtqdiXXnSsvW75twdPLLCtzgaqZr57kAOaVNiguhlR0Sz%2B%2FgEbZQLD5UbeDhHvwensUu%2FXjxf5a%2Bs7D9qkD9B1EZCdqRWEFxWe7xb0hocjMZvZXAF7iE9KiqgGbvAiFxlT28NEbzl8sKCN%2BJCgmjeBTP9Fk1rgOI4qC0g1wJRawwyFhaL7HXMvp4Y%2BmmJNiwlt2aXBmiW%2BfyjMML3gMUGOqUB7IhFHQkdx3Tn2Nkn4EZCh3dNybQbgYZ3djeD%2B5uoEcJKf6gpwdU9guZ2Qdzg87TIjWkUoH5IgVsrV7OPkHpx3BN5oPgGVeXAAeWWnYAMb5A9WaVX%2Bfs%2BQ1TWHk2whQlDxHUgMRDI8kWcuMCZ3Pj6fpztAEXbTjocNoIsFh9AsyqQmFSYWw7kfF%2FJAvfShEX1n%2FhtVXwp5qiba8ZXF%2BwGsEyKv9qz&X-Amz-Signature=9c64758f35c166e59ba0ae6f349dc23db69cd4d224bb0743c3555aaff520a1f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
