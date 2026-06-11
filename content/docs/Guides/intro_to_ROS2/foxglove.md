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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PPNFOIX%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDURaDEAtnV5vRSHTYHBzIP45girMJJEQrjOQi9DC8u8gIhAJR7RhEyhEBsCaJKbnD2OQ4z9wCtt%2FbEZcniWkzs3uv8KogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzD3ZL2BsM88X9Q11oq3AM3u4%2B3L4xzDAup3bJOdQ7aYdHs%2BdyYcreOCRMAkCqp7qb79RWJbxRcArq99DX%2FTIJoeA9CB4Nr5p3w2oZYXAJE2SEUd1CQspyY33BkS3qK8XYqismhqK3fk668EGzaWOfwDuRvYh2jTMuzjTY7iflXVGQpDcu4PI7eA5kvcUPV9R%2FhiXdwyyyu1n7x9uLShEgcCX0%2BPhe6jAARzPRlyE%2FDWuD5rOYeo1oMzDGpvGzNkESCuG5zCDVOPlXj5%2FZxWM6JBb7vd4YjgRjWZlS3%2FPG3CmWeKwrw4Vc6ElMttLE3C%2B33UL4kMvPGOIusH8m01rDJ4AYtM2Fx7a%2B%2B1t5UkUjId%2BuEN2kfHi%2BjeNuBqiijBrM0VsuYW1w3MZ0xTHdVr7UeGAvhUbcqqD9rWqKmKt5Wq8g3wXDo0YIWsR3piHa54zjDnsBytHGn4Ct6mrWXyK6I9Fbl5VNiQDshfXNzjAEPi0IVsZ93VgwLi9A0UCQ3nbtnJA20B1S%2FY2pMTEgYQsPrZyY64e3vDsG55hYpmc5qsjQf%2BDvTwodIhyKzp9IkjsQMcn5xwSDMt785Yi7%2FwOUoHCp7CEJSdIO4Ts6wGZMV7Veew3FGs6RvAjjKRONP3X4F9IbQm1Ls3%2FrniTCsqKjRBjqkASS41f4a1J2IBDMWjMW0IRBih%2FWbxk60CHz%2B2djllZ%2BwKYvM7jmjQx1pZIc%2Bo2GHmM42MS6IkLA7opyBsuZQinuA0E3M%2FKCj3J6W%2BM0wvF6EbwC8VADqA4xDc5yvu8WGtGtDcr1rShl6x8ZJ9GPTT6u7m6%2BbQYcRvONJccV8fyRAErsKS5sFG0N60zWOtt%2BAH3BbjsoRDmZvqU%2FIhXAkT0cUOl71&X-Amz-Signature=9c2af5972efd93a0991abec4399971fd251dd282389e8102517a545be01d9805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PPNFOIX%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDURaDEAtnV5vRSHTYHBzIP45girMJJEQrjOQi9DC8u8gIhAJR7RhEyhEBsCaJKbnD2OQ4z9wCtt%2FbEZcniWkzs3uv8KogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzD3ZL2BsM88X9Q11oq3AM3u4%2B3L4xzDAup3bJOdQ7aYdHs%2BdyYcreOCRMAkCqp7qb79RWJbxRcArq99DX%2FTIJoeA9CB4Nr5p3w2oZYXAJE2SEUd1CQspyY33BkS3qK8XYqismhqK3fk668EGzaWOfwDuRvYh2jTMuzjTY7iflXVGQpDcu4PI7eA5kvcUPV9R%2FhiXdwyyyu1n7x9uLShEgcCX0%2BPhe6jAARzPRlyE%2FDWuD5rOYeo1oMzDGpvGzNkESCuG5zCDVOPlXj5%2FZxWM6JBb7vd4YjgRjWZlS3%2FPG3CmWeKwrw4Vc6ElMttLE3C%2B33UL4kMvPGOIusH8m01rDJ4AYtM2Fx7a%2B%2B1t5UkUjId%2BuEN2kfHi%2BjeNuBqiijBrM0VsuYW1w3MZ0xTHdVr7UeGAvhUbcqqD9rWqKmKt5Wq8g3wXDo0YIWsR3piHa54zjDnsBytHGn4Ct6mrWXyK6I9Fbl5VNiQDshfXNzjAEPi0IVsZ93VgwLi9A0UCQ3nbtnJA20B1S%2FY2pMTEgYQsPrZyY64e3vDsG55hYpmc5qsjQf%2BDvTwodIhyKzp9IkjsQMcn5xwSDMt785Yi7%2FwOUoHCp7CEJSdIO4Ts6wGZMV7Veew3FGs6RvAjjKRONP3X4F9IbQm1Ls3%2FrniTCsqKjRBjqkASS41f4a1J2IBDMWjMW0IRBih%2FWbxk60CHz%2B2djllZ%2BwKYvM7jmjQx1pZIc%2Bo2GHmM42MS6IkLA7opyBsuZQinuA0E3M%2FKCj3J6W%2BM0wvF6EbwC8VADqA4xDc5yvu8WGtGtDcr1rShl6x8ZJ9GPTT6u7m6%2BbQYcRvONJccV8fyRAErsKS5sFG0N60zWOtt%2BAH3BbjsoRDmZvqU%2FIhXAkT0cUOl71&X-Amz-Signature=9604a573f48adebb321db291c34bbdc9abfaf907c90f54971da53781bd4da9fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
