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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP2AGGIE%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FeUVj02z9qYDSkK411%2FxcFT9FraYPBqokDCyFca3VdAiApG9FjLLbYuIQisikwI2MmKhRnneHH5Aln%2BbrNbDVu6SqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6HdaGNSRQeG7eEguKtwDZBjw4yj2QhxIx%2F0RxTabfvlDhneI7Ma1fxkHrnZtllv4naXHC%2FJ3RKO6orGCNWgSu7NCnPJKuAV6o3wCQZ9SMSZg%2F9B11p1wSSIexM3WvqoCKmwM2VekStm47sTc4%2B6bLiXTL6qwQuGAZKX597LlfYWFwpBmDpK4ouY5TuJ7Chm76Bh9E5NJiQ%2BPOdyU2ifGL5YgHQdon%2BmMrR8TcUI3i%2F4Y9XWpIJ7QfYMz6nTP%2FKbLL3XeNyzvdT2iyLKfMIRV5aBQ8nmGGORdfNYt0kaBqQ0axS9ZtSQm2j8RkkQUGtAyjp%2Byy45auDGVvXqsXgv0ezmpx6c1Rb21JFIcw7w9X5IajE1C2%2Fg4qrJsZC9mAPX4dHKmOsWNj40glf1nIROdqUdhD%2BIB96irATg5bCWCj3JoTVH1W90iy6XcrhppbrMsbKVFfxEkkfWb7fw4mzePaQ6jk1jvdE%2FjFf6SPNxO0jj5lbpzL%2BQRKKdxxNBF1pm5XohOBsz5Ow8VSOJ%2BZuDrhTVDH4Uxg7zmO4gBbIwAby9Tac3qiEgD3LhZ%2BvIhzIKelNL8aXyWT0ObpR0fxZ1VfYDBDIl1llKszbDADdToaM%2FVdBvo731R5tOlPfaDAPqAiwysIVs3kMNckE0w2p7OxQY6pgG7WD2art7V0xVpyw%2B%2BeQXj9V8LFNV9KEg6EDP7SpN1zDQp1pxGyMyBpykCt4tbSPMo%2FwGEpAGx1wjweSbtFFjxWi%2FwmMeLdPjak7u8IV6SeDhE%2BT38dtCswS4bpjjMt5qADRHdMwfnMsW19iFZEa1MBUhlTjZRBuYzI34cCwr5BefEzVQGiSaDaIMGohJLcDairVecKMnqQzPwYZ58sXDwaRfXqxqI&X-Amz-Signature=265cf75b282c5de68953f6d39adf4c74a95427dfae73c6b309d1866fd8650b2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP2AGGIE%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FeUVj02z9qYDSkK411%2FxcFT9FraYPBqokDCyFca3VdAiApG9FjLLbYuIQisikwI2MmKhRnneHH5Aln%2BbrNbDVu6SqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6HdaGNSRQeG7eEguKtwDZBjw4yj2QhxIx%2F0RxTabfvlDhneI7Ma1fxkHrnZtllv4naXHC%2FJ3RKO6orGCNWgSu7NCnPJKuAV6o3wCQZ9SMSZg%2F9B11p1wSSIexM3WvqoCKmwM2VekStm47sTc4%2B6bLiXTL6qwQuGAZKX597LlfYWFwpBmDpK4ouY5TuJ7Chm76Bh9E5NJiQ%2BPOdyU2ifGL5YgHQdon%2BmMrR8TcUI3i%2F4Y9XWpIJ7QfYMz6nTP%2FKbLL3XeNyzvdT2iyLKfMIRV5aBQ8nmGGORdfNYt0kaBqQ0axS9ZtSQm2j8RkkQUGtAyjp%2Byy45auDGVvXqsXgv0ezmpx6c1Rb21JFIcw7w9X5IajE1C2%2Fg4qrJsZC9mAPX4dHKmOsWNj40glf1nIROdqUdhD%2BIB96irATg5bCWCj3JoTVH1W90iy6XcrhppbrMsbKVFfxEkkfWb7fw4mzePaQ6jk1jvdE%2FjFf6SPNxO0jj5lbpzL%2BQRKKdxxNBF1pm5XohOBsz5Ow8VSOJ%2BZuDrhTVDH4Uxg7zmO4gBbIwAby9Tac3qiEgD3LhZ%2BvIhzIKelNL8aXyWT0ObpR0fxZ1VfYDBDIl1llKszbDADdToaM%2FVdBvo731R5tOlPfaDAPqAiwysIVs3kMNckE0w2p7OxQY6pgG7WD2art7V0xVpyw%2B%2BeQXj9V8LFNV9KEg6EDP7SpN1zDQp1pxGyMyBpykCt4tbSPMo%2FwGEpAGx1wjweSbtFFjxWi%2FwmMeLdPjak7u8IV6SeDhE%2BT38dtCswS4bpjjMt5qADRHdMwfnMsW19iFZEa1MBUhlTjZRBuYzI34cCwr5BefEzVQGiSaDaIMGohJLcDairVecKMnqQzPwYZ58sXDwaRfXqxqI&X-Amz-Signature=a0479981635c91ae57e26802b3e9ac7df30559645c1c2f7583454ef743ec9884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
