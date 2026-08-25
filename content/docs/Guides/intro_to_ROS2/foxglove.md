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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYAXQEP7%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIDFOBfTrUqWqhy8Wf2HbNPax0OgClWd7GzNO%2Fw34dyiVAiATJXh3axkw%2BKXxo0XMdskRzc5XXkUBNvOv1NgbT6xykiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD1F%2F0UAP5XADsHZ8KtwDGxzQBWI8ze8YdjvSPAJOuI2iNZG7fWxP1NTQh1ijZhjLW%2B57IKxqN6%2BOn5w7hHDEWmreB7Ry4VlqEXyl%2FCF9NIWYxv5M9yUY%2BPL7kVSY5cxZlivvAHoVWqd%2F1Oe%2BuLvTGwcfUODvGL1IR1oWJm4gaFhg3an5YvPrpFjQdaioT%2FCTMBv%2Fd9xvGsM4ErZ4l2F06wE0xokobEMHjRiLxq95O9Ozd5%2Ff1PrGIyamzrlMf1yaVk6Opv3b9SukfGLoX1qTeA%2F1jCjRn1TN%2F1z9np9hOHcP5glLv4hMYOiiNIkaa%2FuBMO8OuX4ANHdVnwjwb5ARNltEw98k1sB10V01MgOiiVjrkGnAeCGYKn1BkGaAWxJ5OtdA%2BZCSM0N5ffqyGsvkJ%2FwOYLcopj2sNd5YnbpaesrU0tkWETmQD9a7w2%2F25YJwVJHZBOzcokMQUyAuYYkoGZraewenX5Ekd3R1LyfxdhSBYnpO%2Bk6Qr%2FSk1CiKE6LzRYIckDQhwLPHsW1wJhgFC9E4oaiISgIUiPlbixHRMzIGmFoBi92ISfveAKEBnFJ%2BLdPo%2F8w8fGEWK%2FhWtnAC%2FjOw%2Bur88XI29rWZkppqQt%2FzSlWC3ndWEC8uaDKpxidrY1pg9UzQ%2FpdfU58ws9Sz1AY6pgHunvGBl2tonjBubZraa73ZLlJli36GLIGSlfNzzAp741SL8eAikWUYOoCas3Mj0NBDKsKRR7QQfd38GxKqfKFDpdTNZewN4aySNCKP1D8BUvB3OrKrpPCaOUyIhnOHJVqAywAh%2BnjRdDO76EjVhsiUrkm1%2BWg6bNLXTQmABMhV%2FFrcM%2FOnYsZjta1CctrqvJsTkGhGEzQJxYH9G8d%2BFbnOEhweVKLW&X-Amz-Signature=02e7bf3fb20f8083fddfdc6f3f1aa11969a1b6c46b89a1714b9bfb19670b2086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYAXQEP7%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIDFOBfTrUqWqhy8Wf2HbNPax0OgClWd7GzNO%2Fw34dyiVAiATJXh3axkw%2BKXxo0XMdskRzc5XXkUBNvOv1NgbT6xykiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD1F%2F0UAP5XADsHZ8KtwDGxzQBWI8ze8YdjvSPAJOuI2iNZG7fWxP1NTQh1ijZhjLW%2B57IKxqN6%2BOn5w7hHDEWmreB7Ry4VlqEXyl%2FCF9NIWYxv5M9yUY%2BPL7kVSY5cxZlivvAHoVWqd%2F1Oe%2BuLvTGwcfUODvGL1IR1oWJm4gaFhg3an5YvPrpFjQdaioT%2FCTMBv%2Fd9xvGsM4ErZ4l2F06wE0xokobEMHjRiLxq95O9Ozd5%2Ff1PrGIyamzrlMf1yaVk6Opv3b9SukfGLoX1qTeA%2F1jCjRn1TN%2F1z9np9hOHcP5glLv4hMYOiiNIkaa%2FuBMO8OuX4ANHdVnwjwb5ARNltEw98k1sB10V01MgOiiVjrkGnAeCGYKn1BkGaAWxJ5OtdA%2BZCSM0N5ffqyGsvkJ%2FwOYLcopj2sNd5YnbpaesrU0tkWETmQD9a7w2%2F25YJwVJHZBOzcokMQUyAuYYkoGZraewenX5Ekd3R1LyfxdhSBYnpO%2Bk6Qr%2FSk1CiKE6LzRYIckDQhwLPHsW1wJhgFC9E4oaiISgIUiPlbixHRMzIGmFoBi92ISfveAKEBnFJ%2BLdPo%2F8w8fGEWK%2FhWtnAC%2FjOw%2Bur88XI29rWZkppqQt%2FzSlWC3ndWEC8uaDKpxidrY1pg9UzQ%2FpdfU58ws9Sz1AY6pgHunvGBl2tonjBubZraa73ZLlJli36GLIGSlfNzzAp741SL8eAikWUYOoCas3Mj0NBDKsKRR7QQfd38GxKqfKFDpdTNZewN4aySNCKP1D8BUvB3OrKrpPCaOUyIhnOHJVqAywAh%2BnjRdDO76EjVhsiUrkm1%2BWg6bNLXTQmABMhV%2FFrcM%2FOnYsZjta1CctrqvJsTkGhGEzQJxYH9G8d%2BFbnOEhweVKLW&X-Amz-Signature=79da7b0012f4a56cb61cdbdd804d90ba64ec5181781514a454e08dd7e6b17699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
