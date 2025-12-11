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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKFXM2OO%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCoeHKWA6rL1vxu2Ll9L1GHgreJNpZAj58B4Fgh8v6AnAIhAJpLGa61mBc9F%2Bc44BHXaeF2rgqBfypFwBoZghWPA%2Fk2KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxW1WhwivD%2F08mhWEoq3APDXOcTajA%2BQYyPPj0eyTy1dtmQpb%2BlW1lVKFkK5fHSaSAgEMeseFa3cOuRzwsMFhTNZvO%2BCq1mgX%2F4x5MH8K77o%2BI%2FtUROnVH99hLM3J8cNYtej9YdZKARynZEZSr0PNlXNl%2BycJTplkkfDyNr%2FGWrKt4twyo4Upm%2Fj7x%2FXFQkS0GfJ7S3A25KzsFoBTEJbiqpEpvUlBLuJRoQuF8RXLocQE3jd3P0ku7E%2BPVlA7eAGfoVIpmN9TNHDCq0CDr9XmZ049Yds5TmyyRNzcs038hw4mDUs04eXNNibQKeVU3rO57xixW2wFfobjFV%2Bete7jQDIk0c%2BUFFJqpusJGQMU3cXERRBxatCmuKb89EnEYKVUAHIU4wu1E%2FjTC4QNd5xxMyCw%2B%2F5T5YLcv5nRVKqxhzDcKu6u9RhTsvlXgq8n4aZ5VEFvPneIVfUWPqphJLeYhkQ4VbxKCaOUqvQiCuvievpK1DeX9pVyTDe5ZDlgv2J6vxJTbT%2BCj0PErDMk8aJ1ZEGOp7VIlSoLn7bh7XourO2xysjBHB1Af6IdXoQDulJXdidBH8FUVDMMvLSYqs0ibJcHoveUFq8OEgUTh1CgSGr9PsMYkUOCkEq%2FJA1NM%2B%2F94g%2FNRWmCo0l5KG4jCVtejJBjqkAR4WCgsLFLiPIdev8ME2rMAwgY1t4N3TARPra6mwW7MbRR0e%2Ftn5KweQqEgOLrKGVT8Q1TyF12s%2Fz31Peu%2FatmrtcFqyBFFSldi9meB%2FSiq02ir37C6osR86IGx%2BD5Fq5qd9yRuh5lZTk%2BgK1FkIUD%2FUyN7Ruv3NdldGYYmbRmQK9yK340tv4LFQnq4ejob%2FhmxMg8tr7MVOGXY1g2MJyG1EecUK&X-Amz-Signature=85c4520e8ec9b090e06240f32712e6e538cbb658fe0739ecbdf29d5b9cd438b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKFXM2OO%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCoeHKWA6rL1vxu2Ll9L1GHgreJNpZAj58B4Fgh8v6AnAIhAJpLGa61mBc9F%2Bc44BHXaeF2rgqBfypFwBoZghWPA%2Fk2KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxW1WhwivD%2F08mhWEoq3APDXOcTajA%2BQYyPPj0eyTy1dtmQpb%2BlW1lVKFkK5fHSaSAgEMeseFa3cOuRzwsMFhTNZvO%2BCq1mgX%2F4x5MH8K77o%2BI%2FtUROnVH99hLM3J8cNYtej9YdZKARynZEZSr0PNlXNl%2BycJTplkkfDyNr%2FGWrKt4twyo4Upm%2Fj7x%2FXFQkS0GfJ7S3A25KzsFoBTEJbiqpEpvUlBLuJRoQuF8RXLocQE3jd3P0ku7E%2BPVlA7eAGfoVIpmN9TNHDCq0CDr9XmZ049Yds5TmyyRNzcs038hw4mDUs04eXNNibQKeVU3rO57xixW2wFfobjFV%2Bete7jQDIk0c%2BUFFJqpusJGQMU3cXERRBxatCmuKb89EnEYKVUAHIU4wu1E%2FjTC4QNd5xxMyCw%2B%2F5T5YLcv5nRVKqxhzDcKu6u9RhTsvlXgq8n4aZ5VEFvPneIVfUWPqphJLeYhkQ4VbxKCaOUqvQiCuvievpK1DeX9pVyTDe5ZDlgv2J6vxJTbT%2BCj0PErDMk8aJ1ZEGOp7VIlSoLn7bh7XourO2xysjBHB1Af6IdXoQDulJXdidBH8FUVDMMvLSYqs0ibJcHoveUFq8OEgUTh1CgSGr9PsMYkUOCkEq%2FJA1NM%2B%2F94g%2FNRWmCo0l5KG4jCVtejJBjqkAR4WCgsLFLiPIdev8ME2rMAwgY1t4N3TARPra6mwW7MbRR0e%2Ftn5KweQqEgOLrKGVT8Q1TyF12s%2Fz31Peu%2FatmrtcFqyBFFSldi9meB%2FSiq02ir37C6osR86IGx%2BD5Fq5qd9yRuh5lZTk%2BgK1FkIUD%2FUyN7Ruv3NdldGYYmbRmQK9yK340tv4LFQnq4ejob%2FhmxMg8tr7MVOGXY1g2MJyG1EecUK&X-Amz-Signature=a2dcebf734a2359f6d9c42eeffc324098e5e8031a55d106d2e3534b7cf70e422&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
