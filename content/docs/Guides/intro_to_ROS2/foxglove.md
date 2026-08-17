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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBPC6J5A%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDfNEjKf6Ip9LYe9%2FkJI31tkLFpWejCJVa1QyTclWNNDAiAYhlcmDG3sW37WEExImRoKvFNVpAYZ5oJBNQrt%2BNJDOyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIM22mSG53DnjGlSTnWKtwD1ym4si%2FEpmgjJBH%2BD9aaStCM3MN18Uw4W1tXpsG17fd2Q3lC1v8C9L9CPyRxlo%2BwjZtVSLYGXY1Q2q1%2B4ExsBJyetyf3h7NZFkxEum2s%2F7YGIl%2FYyzx8K0eaSsnEovJ%2BZ0c5XyUAsgn46wm9bCHMKkpY7YTKTrm%2FAwMxTH5E6rjBRNMJDOQM5IXJShI60HtplNNN1hsk07d2YepfWkumGOzWDYZtF%2B7eW3T8dv%2FJH70rtm3Pci0mIKRjfqiRGXqLCGHKIAugfjZVO5b8zzRs%2FITBMVn8Om7RrRSfNLIPwZIGFGEjIhcgLFw399IrUV1J2%2BM%2F2r%2BQrr632uaq0985gRpiQGd0SK4LHfcHg103N8zDcPKMTA1peebftgQM2AXrQ2uWlXcb4NqmmEO1HLl8Q0IR7NQ7shW5ajlAm%2FkvFJdrUbMvpOTZs3LN8xmqbjC85TnJsa0f0Wo2vHHQdWdtv3iW4JFLytYOyOTbAPZayFzGOiAEwLsk%2BdH1ROlVLZsh%2FYR1hGdDmkCPKMa%2FDjKDeaiRe3jF66Cs%2BVOkWKoL4k%2Fs1FKN92cCLmsoNruIzeixDHdeUDkuud%2BQXcBTXXHI0xzYI46ZKfLVPcx9qPtn62RkTmaprjcQTH2xh4Qw8auJ1AY6pgHm4WY2N41sGnR%2Fb2xgUqoIztHe%2FALEPfgNbJSoFWVhh%2F2I81vjN0U53Z8%2F5IUla2ws4zM1Gb44tBy167A1eCHeqoQnJFovJHUM1x%2BgELexizjykAU8sFt7Fg1rJ2oNU4LFuCPlFQcdFTXmAoR80VRA5JLiZml7SBjBKGGciBdjSE%2FrhevyQrMK%2F9yH0ptdCE%2F3%2BPvY%2BaZyPZP1yngtx9cZp3N4Esae&X-Amz-Signature=49a13efe1ced3b5deb94eb0130a53515dfdce575e33dcdc4ee4952a136fce0bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBPC6J5A%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDfNEjKf6Ip9LYe9%2FkJI31tkLFpWejCJVa1QyTclWNNDAiAYhlcmDG3sW37WEExImRoKvFNVpAYZ5oJBNQrt%2BNJDOyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIM22mSG53DnjGlSTnWKtwD1ym4si%2FEpmgjJBH%2BD9aaStCM3MN18Uw4W1tXpsG17fd2Q3lC1v8C9L9CPyRxlo%2BwjZtVSLYGXY1Q2q1%2B4ExsBJyetyf3h7NZFkxEum2s%2F7YGIl%2FYyzx8K0eaSsnEovJ%2BZ0c5XyUAsgn46wm9bCHMKkpY7YTKTrm%2FAwMxTH5E6rjBRNMJDOQM5IXJShI60HtplNNN1hsk07d2YepfWkumGOzWDYZtF%2B7eW3T8dv%2FJH70rtm3Pci0mIKRjfqiRGXqLCGHKIAugfjZVO5b8zzRs%2FITBMVn8Om7RrRSfNLIPwZIGFGEjIhcgLFw399IrUV1J2%2BM%2F2r%2BQrr632uaq0985gRpiQGd0SK4LHfcHg103N8zDcPKMTA1peebftgQM2AXrQ2uWlXcb4NqmmEO1HLl8Q0IR7NQ7shW5ajlAm%2FkvFJdrUbMvpOTZs3LN8xmqbjC85TnJsa0f0Wo2vHHQdWdtv3iW4JFLytYOyOTbAPZayFzGOiAEwLsk%2BdH1ROlVLZsh%2FYR1hGdDmkCPKMa%2FDjKDeaiRe3jF66Cs%2BVOkWKoL4k%2Fs1FKN92cCLmsoNruIzeixDHdeUDkuud%2BQXcBTXXHI0xzYI46ZKfLVPcx9qPtn62RkTmaprjcQTH2xh4Qw8auJ1AY6pgHm4WY2N41sGnR%2Fb2xgUqoIztHe%2FALEPfgNbJSoFWVhh%2F2I81vjN0U53Z8%2F5IUla2ws4zM1Gb44tBy167A1eCHeqoQnJFovJHUM1x%2BgELexizjykAU8sFt7Fg1rJ2oNU4LFuCPlFQcdFTXmAoR80VRA5JLiZml7SBjBKGGciBdjSE%2FrhevyQrMK%2F9yH0ptdCE%2F3%2BPvY%2BaZyPZP1yngtx9cZp3N4Esae&X-Amz-Signature=cbe9dad2b2139a37f330d275682e85caf40f84339d4130d6b807fe0cc7029232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
