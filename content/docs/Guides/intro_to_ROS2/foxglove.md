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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5W7JG6B%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKb0deyCcn0qjyKPoXRPdQnlEo43%2FkuydZo85hMcpkFAiBR6ejW7YK04267C9pnfw2%2Fwt46eeXB%2B9XRTZvw96q1MSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMk9m4STyIfj17dDmhKtwDxWs2xxHfpJjmNJ7hk9pxT6Yzhn1yo%2F6b9NTYU%2B5S%2BOdaqMiloFcqYG5SufZhnjL9NCE%2F69XzWNRV4uT4zU4FCBbR1%2Bgqgt%2B4%2BUUZwzRSv4w9KzMOHjuJBe6gOIQtsf%2FBkMT3mtTe7RCapeIi%2F1V8rm3QyK8ZWVLz8HO6%2FkTFUGvXNqpdHnpcfQvL1H%2BUCywDj329gtmUKNOoT8xByVXBl57qKovVhFWg%2FZbW%2FIdgkhs34DC6EPkJN%2BbI5%2FypYXF5sFa%2F%2BnUWzhx5u2kHOMpqp4rBFq5wTKaJa3e%2Bp1V8tpqQ%2FhADZrocVS9KbbGM45V791HkZhPNBpLSf6MrAYULjHJ%2Fa3IX8d7BPtz8JyofmzVKh5Y0NvX137gzAQ7cIInTbI1Xl6%2FxtEmKxlFwm6b%2F2zPCPyHKdqOwkIQsRP1JYW47VK5UNDiYd1z%2B8b6uWR4ffYWe23vz2%2BYAarjDEvhVzeCcDsq%2F3KXgrcZHZZXKyQr5GmAz3SNICM0EgFNo75MVdXUeCKwQRjTq2bhESqt2GcR7WNfSq%2FE%2FYimVxZYz%2F%2By%2F3zbucp2EhxLifCWaSPxXamDpdDKjboVJxwYI5NCZx2YYywm5XbwLUv7G6ic86z2TUHBVahDrUfauTmkwtdGNxgY6pgFWnoMhXvMEtc988ex%2FbG1hIpTIocwOEEkxOxOVcdGpnFcO6wn3vXwyuA%2BJZnxakNviEOxPo4r%2BLKUmNPgw3ZsKYRb7xVPEFtHwQauRZKPXtSoLkGzG3eGbFUZyK1Q0RmBtsfiPZKnAocgKb9hsiJKvcO21OSSPOB%2BpuBtjgZuQAEyUM1Q8yP26ZKbvml5Y4AEX60ACt6HLhQHsTkperESXe7uuWjVq&X-Amz-Signature=c732154a1c6f94513bcaf035054f56e85ff4bc6d149c6daaa4062be39e3378f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5W7JG6B%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKb0deyCcn0qjyKPoXRPdQnlEo43%2FkuydZo85hMcpkFAiBR6ejW7YK04267C9pnfw2%2Fwt46eeXB%2B9XRTZvw96q1MSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMk9m4STyIfj17dDmhKtwDxWs2xxHfpJjmNJ7hk9pxT6Yzhn1yo%2F6b9NTYU%2B5S%2BOdaqMiloFcqYG5SufZhnjL9NCE%2F69XzWNRV4uT4zU4FCBbR1%2Bgqgt%2B4%2BUUZwzRSv4w9KzMOHjuJBe6gOIQtsf%2FBkMT3mtTe7RCapeIi%2F1V8rm3QyK8ZWVLz8HO6%2FkTFUGvXNqpdHnpcfQvL1H%2BUCywDj329gtmUKNOoT8xByVXBl57qKovVhFWg%2FZbW%2FIdgkhs34DC6EPkJN%2BbI5%2FypYXF5sFa%2F%2BnUWzhx5u2kHOMpqp4rBFq5wTKaJa3e%2Bp1V8tpqQ%2FhADZrocVS9KbbGM45V791HkZhPNBpLSf6MrAYULjHJ%2Fa3IX8d7BPtz8JyofmzVKh5Y0NvX137gzAQ7cIInTbI1Xl6%2FxtEmKxlFwm6b%2F2zPCPyHKdqOwkIQsRP1JYW47VK5UNDiYd1z%2B8b6uWR4ffYWe23vz2%2BYAarjDEvhVzeCcDsq%2F3KXgrcZHZZXKyQr5GmAz3SNICM0EgFNo75MVdXUeCKwQRjTq2bhESqt2GcR7WNfSq%2FE%2FYimVxZYz%2F%2By%2F3zbucp2EhxLifCWaSPxXamDpdDKjboVJxwYI5NCZx2YYywm5XbwLUv7G6ic86z2TUHBVahDrUfauTmkwtdGNxgY6pgFWnoMhXvMEtc988ex%2FbG1hIpTIocwOEEkxOxOVcdGpnFcO6wn3vXwyuA%2BJZnxakNviEOxPo4r%2BLKUmNPgw3ZsKYRb7xVPEFtHwQauRZKPXtSoLkGzG3eGbFUZyK1Q0RmBtsfiPZKnAocgKb9hsiJKvcO21OSSPOB%2BpuBtjgZuQAEyUM1Q8yP26ZKbvml5Y4AEX60ACt6HLhQHsTkperESXe7uuWjVq&X-Amz-Signature=7e31eaf47aadbf51d880be9cd4fb064d567197b7098d1cceab653e994e8542cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
