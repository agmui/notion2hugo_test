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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3SNA2T7%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQC%2F0iyq7nGleF%2FjiDfcMFeJgReKP6g%2BfhGATyIyNRTFowIhAKW%2Fh%2F5IGDaQZz2sxvdNmGufhfmqfjsn7N4%2F1jE5KI93KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8m1JjF%2B%2Fb2s1CcDIq3AODpvhCXYWa8XI0RnPfW%2FByW1vMBDhRN8uD5aCRuhvj9SrwkiriaqjJ0MKjNm1S9TIyWvPUFVylp8bY5%2FiFhx391ZeKqjDiZTvmKGFBAN%2FKDG0FXW%2BC6cEXmh5eaFXeTLBSGUiJ1vrX7DlkrtvfKmnI3cLqIx6iSQ8LADs04YthcFu3wi3g0tuYzVxdUiCU2%2B934T2AquEeh7RHKtpXK60szdnzQ7cGvT0F9%2BVB6H3ETm9B8yoQfMhdFOZg2c24LXjM90G4QvlxIRsdhdOC%2FQnsq3bsjF2031Ao2A%2B%2BnBUoR7hfSW6g7EJ8zstNPl7jVnrpxGHeK5eDwimsbivjrKdM6VyVesl8fPpp6YaIOC7YjozYgQf1n9hvdN%2BUnN4Uoi9dWWFSPbdjhevIdBrPpsDQpV8vaJnFrJ1DmXu%2B8upw4UxEj2AM4jnDYOTRIvEzr6CjKFw4m8nmaMnhS13jenpg%2FvdiJoeiwn%2B4VLk27a9Kdwat2AE48PqcXekjGLRePzUPM1%2FFHz4BFwvI8OGPc1vRUPGUHGGcxeqJi5q6Y%2F4ONu3GCHmxmT0KVb7DSLJiCHqP8F79nHwkcH%2FOy1jomtIL%2FATRA0z%2F%2FUUCrcqtO1EM3YQsZHsHB9g8I70EDjDrisvLBjqkAdSH%2FZYLedbW5f6P6QT6QK4jaIkPlplS6xqm%2FnXzi0w3btIL9WV33rQlVLXa3KKKMiXm92Qej%2BzwHhuc7EDZ7QSBpWAgEUrqX7FbSXWtx5r3dmm9zz%2FAAXRG1DF36lx12G2a%2FSbio3HMAgxMLRIHVI7XINZyyj0NqiwIjyUoxfFIPAFvbTSfk2DMUUszVTcHJiW%2FB52FGpVk0xKidsu9fTHgHZyU&X-Amz-Signature=ca738af4fc44d1d0629c0d4d4e80daee3bc6d7dd78d254e037d28587a06e1746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3SNA2T7%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQC%2F0iyq7nGleF%2FjiDfcMFeJgReKP6g%2BfhGATyIyNRTFowIhAKW%2Fh%2F5IGDaQZz2sxvdNmGufhfmqfjsn7N4%2F1jE5KI93KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8m1JjF%2B%2Fb2s1CcDIq3AODpvhCXYWa8XI0RnPfW%2FByW1vMBDhRN8uD5aCRuhvj9SrwkiriaqjJ0MKjNm1S9TIyWvPUFVylp8bY5%2FiFhx391ZeKqjDiZTvmKGFBAN%2FKDG0FXW%2BC6cEXmh5eaFXeTLBSGUiJ1vrX7DlkrtvfKmnI3cLqIx6iSQ8LADs04YthcFu3wi3g0tuYzVxdUiCU2%2B934T2AquEeh7RHKtpXK60szdnzQ7cGvT0F9%2BVB6H3ETm9B8yoQfMhdFOZg2c24LXjM90G4QvlxIRsdhdOC%2FQnsq3bsjF2031Ao2A%2B%2BnBUoR7hfSW6g7EJ8zstNPl7jVnrpxGHeK5eDwimsbivjrKdM6VyVesl8fPpp6YaIOC7YjozYgQf1n9hvdN%2BUnN4Uoi9dWWFSPbdjhevIdBrPpsDQpV8vaJnFrJ1DmXu%2B8upw4UxEj2AM4jnDYOTRIvEzr6CjKFw4m8nmaMnhS13jenpg%2FvdiJoeiwn%2B4VLk27a9Kdwat2AE48PqcXekjGLRePzUPM1%2FFHz4BFwvI8OGPc1vRUPGUHGGcxeqJi5q6Y%2F4ONu3GCHmxmT0KVb7DSLJiCHqP8F79nHwkcH%2FOy1jomtIL%2FATRA0z%2F%2FUUCrcqtO1EM3YQsZHsHB9g8I70EDjDrisvLBjqkAdSH%2FZYLedbW5f6P6QT6QK4jaIkPlplS6xqm%2FnXzi0w3btIL9WV33rQlVLXa3KKKMiXm92Qej%2BzwHhuc7EDZ7QSBpWAgEUrqX7FbSXWtx5r3dmm9zz%2FAAXRG1DF36lx12G2a%2FSbio3HMAgxMLRIHVI7XINZyyj0NqiwIjyUoxfFIPAFvbTSfk2DMUUszVTcHJiW%2FB52FGpVk0xKidsu9fTHgHZyU&X-Amz-Signature=6e75390983a4d438bbe8e8ce7c50d39d9f2bbe9f90d46344685dab071ec4a074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
