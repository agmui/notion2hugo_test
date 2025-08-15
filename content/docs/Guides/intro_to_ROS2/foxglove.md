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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VGQQGAM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQD%2FxyF%2FdEIuzFVRIrxezwKh0K2BrQMQycbNh8UPOlT65QIgFrBRAqs5fTr9SqynZlKrzFRemarxj1sgNHsdpoQRp8sq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDMCB0ArVSxRm60br0yrcA3sFw6XEWB2MGFEQQgy3ZmnDmmu1R%2Fcv1aVS0jgRyJ%2BqLYfERqpmIEuCjWcUSe6syFCMNfHebIeTHZ5ZKVI876EDP%2BTJJrt%2FhDxKG35pc4X9FgjnP2yYQM3quQCn561xc8%2FqyrikneMnzB0NA7bak60loAU%2FtZXkYf%2BDs6RK5G3L2zibuJIYF09ybZOflvwD10IuRemQU1dPFafYsInHeIjkGA4TMD3jNp8KiGc14DijfAUIcioxXbfJ786UTRxFyqbfOcg4f3oQwnjoEjSTDhpPS4cSuXz3Yyeg8%2BIQmkMKm%2FxzhS5pCGmXp%2FPEj8STPbwH%2FPuuoX%2BE5npZHXmQcPxpnegXMQtKlTZ26d8scDu9foY5%2BbNU6aSjWFkJQeF0vFXUzEwvS0GmfbPFWey4ZKp0nz02Mk3Z3s5EpHKKwQDZPhRXwn%2F8k%2B78SL9bCv12QhVjWRp6VOvgDBV68xPkh2VnA6ptDwyMQkEtR8cNlrZdlLFjcAd8EUewh2lYNzqZNDrkEAdILzwAtKwoRiGB2WBgpMBut4BrV3CAZIxhDlbRfQjYTjkfSq8RsxYzCX12XMPLzdQCOjMbZdd90%2FSXnTJKeNwQnj%2B1osVoSF6uUtVLwpe4aS3ddHlAaYuMMIXb%2FcQGOqUBeqP0jCre4C3rYUW25i%2BSAZt0i5mQ2dALoF6w9Q0AeVN16yqVopVyBEX%2BO95U86%2F5oZWBj1%2FzLfKmDQ55OaYUx8kEKhVK7%2BWlnR98zUGTu7rr1wKkwiOr%2Frs2LTiprp7aAfnKbmxcXAu7UE7hk6UTk9uJiAxQBgdteYSIxbRDcYkU%2FbZp9sXKXYwWENBWP1NTKJ6%2B4EBdUHHpkLzwNMS5RC9krSlK&X-Amz-Signature=0613e153613f77e2b30d90aeebef8f361662d7823b87b2031539901a3d7567c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VGQQGAM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQD%2FxyF%2FdEIuzFVRIrxezwKh0K2BrQMQycbNh8UPOlT65QIgFrBRAqs5fTr9SqynZlKrzFRemarxj1sgNHsdpoQRp8sq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDMCB0ArVSxRm60br0yrcA3sFw6XEWB2MGFEQQgy3ZmnDmmu1R%2Fcv1aVS0jgRyJ%2BqLYfERqpmIEuCjWcUSe6syFCMNfHebIeTHZ5ZKVI876EDP%2BTJJrt%2FhDxKG35pc4X9FgjnP2yYQM3quQCn561xc8%2FqyrikneMnzB0NA7bak60loAU%2FtZXkYf%2BDs6RK5G3L2zibuJIYF09ybZOflvwD10IuRemQU1dPFafYsInHeIjkGA4TMD3jNp8KiGc14DijfAUIcioxXbfJ786UTRxFyqbfOcg4f3oQwnjoEjSTDhpPS4cSuXz3Yyeg8%2BIQmkMKm%2FxzhS5pCGmXp%2FPEj8STPbwH%2FPuuoX%2BE5npZHXmQcPxpnegXMQtKlTZ26d8scDu9foY5%2BbNU6aSjWFkJQeF0vFXUzEwvS0GmfbPFWey4ZKp0nz02Mk3Z3s5EpHKKwQDZPhRXwn%2F8k%2B78SL9bCv12QhVjWRp6VOvgDBV68xPkh2VnA6ptDwyMQkEtR8cNlrZdlLFjcAd8EUewh2lYNzqZNDrkEAdILzwAtKwoRiGB2WBgpMBut4BrV3CAZIxhDlbRfQjYTjkfSq8RsxYzCX12XMPLzdQCOjMbZdd90%2FSXnTJKeNwQnj%2B1osVoSF6uUtVLwpe4aS3ddHlAaYuMMIXb%2FcQGOqUBeqP0jCre4C3rYUW25i%2BSAZt0i5mQ2dALoF6w9Q0AeVN16yqVopVyBEX%2BO95U86%2F5oZWBj1%2FzLfKmDQ55OaYUx8kEKhVK7%2BWlnR98zUGTu7rr1wKkwiOr%2Frs2LTiprp7aAfnKbmxcXAu7UE7hk6UTk9uJiAxQBgdteYSIxbRDcYkU%2FbZp9sXKXYwWENBWP1NTKJ6%2B4EBdUHHpkLzwNMS5RC9krSlK&X-Amz-Signature=775fed993f6b52e8275f0b648c615ae45707a04be9b6f5e8a7ea0336e204480d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
