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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUIW6I22%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCAW6OCCVGp917Tmd2drk6A4t0S%2BekL63n3jjVSNknxAIhAOGRkpcGy9aJ1HHs0B0j1C3rWUn8CO9qlnLqEhh40swuKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy31qhzZvYxEkM5giQq3APAuKkkA0HeXfTZdJJDXken2OPOn7bqL3F3S5KayqSsF5f1VX1BHHJanyb91frbX5mZYA1M%2F8fwpGgQ1ntefJizQdovDbnpxCCctCv0TxSJ1SanbqwiSDQjCv2kBLYiz9qAoo1AadHrfbcJ9TkE45GUTgiZ1Pv0VkzaVw7PZIyFc0hlSKCJZ4tl0PoSRR8BDkUzH0Ocs5RFsTcPqIpMLRtIlqLi%2FuNCunmaCtMFKefVkTyN85gqoLSsrxyoivH9d1wBWaYvW%2BQjQBQMulcdX9k3f0dmauxzgcCMufRVMfiHv%2B%2FW1TLO53jIGxuSQ2eKGjkQlgjcVxh0PAAOiog%2Bzgnn7akwQ9F8u%2FJLNjHmZwzxKUWhmfRXvucQmSpe14250P8DYCNLp3Tg1JAueIoQ%2F7CeDgGThl8dHq7ufmic6lBPe7Mmidi8hdaP9YPaWLyUy%2FecuqqIQBAXPkhmeWzLNIeG6S2fLT1tqNJLOZ1qIaCMyIi9obCE%2FYc38RUhM%2BCYjqgw9w4DtNYaiZR6us1AExfDSaTmsA18GdBrVCS05Y%2BNV7BrQdyqI0SYEZdsiwPfOnTaE%2BWp%2FF%2FZQn2bLwmnP%2Fk0iQ2cOy0AexYcwuC%2BljxMgzzW%2B8BxUdC2fd8oNjC%2B36rTBjqkAdLpqxweWzcwE2aYCi9dxs7zeorGwNxg2raf2vQ1Xmqc9uEgb9dxgRNZqYwNqB%2F7KHacy%2B59iYec1oE938Z%2FXD0UBrqjPahnu56DWHBVGdd0fnainiAjSUa3Hcv2%2F4tiy1SieRUBZdgIg8Ydq2Kaza6%2B7JhSRzNltGaBYDgxCu95pf6wgngSlRHZXdWAvWm0o%2Bg3ggdwG231tCcDiSPenrzN3YSn&X-Amz-Signature=3574eeebadb82ba669313a4ea2fb6c7939a80b4dd65c8d137e589a2189bdc3d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUIW6I22%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCAW6OCCVGp917Tmd2drk6A4t0S%2BekL63n3jjVSNknxAIhAOGRkpcGy9aJ1HHs0B0j1C3rWUn8CO9qlnLqEhh40swuKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy31qhzZvYxEkM5giQq3APAuKkkA0HeXfTZdJJDXken2OPOn7bqL3F3S5KayqSsF5f1VX1BHHJanyb91frbX5mZYA1M%2F8fwpGgQ1ntefJizQdovDbnpxCCctCv0TxSJ1SanbqwiSDQjCv2kBLYiz9qAoo1AadHrfbcJ9TkE45GUTgiZ1Pv0VkzaVw7PZIyFc0hlSKCJZ4tl0PoSRR8BDkUzH0Ocs5RFsTcPqIpMLRtIlqLi%2FuNCunmaCtMFKefVkTyN85gqoLSsrxyoivH9d1wBWaYvW%2BQjQBQMulcdX9k3f0dmauxzgcCMufRVMfiHv%2B%2FW1TLO53jIGxuSQ2eKGjkQlgjcVxh0PAAOiog%2Bzgnn7akwQ9F8u%2FJLNjHmZwzxKUWhmfRXvucQmSpe14250P8DYCNLp3Tg1JAueIoQ%2F7CeDgGThl8dHq7ufmic6lBPe7Mmidi8hdaP9YPaWLyUy%2FecuqqIQBAXPkhmeWzLNIeG6S2fLT1tqNJLOZ1qIaCMyIi9obCE%2FYc38RUhM%2BCYjqgw9w4DtNYaiZR6us1AExfDSaTmsA18GdBrVCS05Y%2BNV7BrQdyqI0SYEZdsiwPfOnTaE%2BWp%2FF%2FZQn2bLwmnP%2Fk0iQ2cOy0AexYcwuC%2BljxMgzzW%2B8BxUdC2fd8oNjC%2B36rTBjqkAdLpqxweWzcwE2aYCi9dxs7zeorGwNxg2raf2vQ1Xmqc9uEgb9dxgRNZqYwNqB%2F7KHacy%2B59iYec1oE938Z%2FXD0UBrqjPahnu56DWHBVGdd0fnainiAjSUa3Hcv2%2F4tiy1SieRUBZdgIg8Ydq2Kaza6%2B7JhSRzNltGaBYDgxCu95pf6wgngSlRHZXdWAvWm0o%2Bg3ggdwG231tCcDiSPenrzN3YSn&X-Amz-Signature=b6f69395ec94caaabbe24ac6a52691b269700d05c9f420e2414b0d0c8fca68fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
