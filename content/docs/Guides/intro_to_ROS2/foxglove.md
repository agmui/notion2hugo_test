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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3ATODTQ%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDWpGs8FeKnNQUzw0PhFNGeaNXs7254wZTZ8Wu7AyU7qAIhAIY9NirbhY6K1YVLnGK5poZiwxxxUZx7zBoZ6iaZ8ytOKv8DCAkQABoMNjM3NDIzMTgzODA1IgwTA1nD%2BAq7gEfMBVAq3AN95ud3cfBECoUHfxZ%2F2hNqZxDAC5Fv%2FlXID63E3fCWiNWH8EBGY8FDvLXz0BPzrxM6PumwcxctvbE5HrVXmPJM5gVEmZSG0n0rEfcX9jwzrDalUW2RCWfl12QL%2FbyuKsUcqgGAvZEW2Ah%2BIERzXJvJ5ohH7InXJqsUW85B4n%2BtsTVZA64clS0DBI8%2FsvCMW1rYwIASqkv4s1N%2BSKfYonNKobcNCgGMLXnTDqAym5XQQl69YHWfKSnW5%2F6hiq9Q8DZfSChvzcjNtB1xw1HqluEwKrp4ImC4SzGg5dr%2FqQhDQowmfg8itMJOo083TIgNxIxbRPKdImPH2FZKlARqefEsAbCDIxAkVWH7471fWple7ssQhhREnIMo23IBS7NI%2FtDSZTOKXWH91NCroIw8v9SLbYo0ra67a%2FSyXGGDOnhGqESWldslmJQn91jGch5T1DxhGm%2FQlkbgLhYcQWq1ehoU1IbauK4W189CfoKr0dxanCYkDMCE45ghhuru74SN124tCuxBuILyuw6t22lzjaa1hHmdeKi3aT3JzObFqItXtuSn2zTFGTBwofsv%2F0g5QcDlo9x%2Bcb8HrzslahJgqvcjAFcH6LN6cA8QiiXdC9vhgcnyYVkgDTpsPpgbfzCi3rjJBjqkAQCgr2v2ZVXKV%2F7VjGUeGZyNMhCu2cFWNtj99wEd1JbwjKCHZ%2BPMtQ2Jb5KxZx5n3ej3i%2Fq8i3pgb0Ks6hez1x%2FL9B9w6pHBYTYSCfETDH1MEJ5ikalcY%2Brk64wopyfC8z7QK16cRaDtloCegD%2FftMFF5iicTPMJ32iiti5mo1N9xi%2FL0a%2F4BNHUuZY1YGv5caWgsuXUvT6T%2BxG6zA0Sw3FGNvhu&X-Amz-Signature=4993ab671ee93d950d397c2cd8f532d965f618fd29dbfda2066c3c1c6cd8b5d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3ATODTQ%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDWpGs8FeKnNQUzw0PhFNGeaNXs7254wZTZ8Wu7AyU7qAIhAIY9NirbhY6K1YVLnGK5poZiwxxxUZx7zBoZ6iaZ8ytOKv8DCAkQABoMNjM3NDIzMTgzODA1IgwTA1nD%2BAq7gEfMBVAq3AN95ud3cfBECoUHfxZ%2F2hNqZxDAC5Fv%2FlXID63E3fCWiNWH8EBGY8FDvLXz0BPzrxM6PumwcxctvbE5HrVXmPJM5gVEmZSG0n0rEfcX9jwzrDalUW2RCWfl12QL%2FbyuKsUcqgGAvZEW2Ah%2BIERzXJvJ5ohH7InXJqsUW85B4n%2BtsTVZA64clS0DBI8%2FsvCMW1rYwIASqkv4s1N%2BSKfYonNKobcNCgGMLXnTDqAym5XQQl69YHWfKSnW5%2F6hiq9Q8DZfSChvzcjNtB1xw1HqluEwKrp4ImC4SzGg5dr%2FqQhDQowmfg8itMJOo083TIgNxIxbRPKdImPH2FZKlARqefEsAbCDIxAkVWH7471fWple7ssQhhREnIMo23IBS7NI%2FtDSZTOKXWH91NCroIw8v9SLbYo0ra67a%2FSyXGGDOnhGqESWldslmJQn91jGch5T1DxhGm%2FQlkbgLhYcQWq1ehoU1IbauK4W189CfoKr0dxanCYkDMCE45ghhuru74SN124tCuxBuILyuw6t22lzjaa1hHmdeKi3aT3JzObFqItXtuSn2zTFGTBwofsv%2F0g5QcDlo9x%2Bcb8HrzslahJgqvcjAFcH6LN6cA8QiiXdC9vhgcnyYVkgDTpsPpgbfzCi3rjJBjqkAQCgr2v2ZVXKV%2F7VjGUeGZyNMhCu2cFWNtj99wEd1JbwjKCHZ%2BPMtQ2Jb5KxZx5n3ej3i%2Fq8i3pgb0Ks6hez1x%2FL9B9w6pHBYTYSCfETDH1MEJ5ikalcY%2Brk64wopyfC8z7QK16cRaDtloCegD%2FftMFF5iicTPMJ32iiti5mo1N9xi%2FL0a%2F4BNHUuZY1YGv5caWgsuXUvT6T%2BxG6zA0Sw3FGNvhu&X-Amz-Signature=9da9dedecdcbdadcb3765e9107efa3189c47a6b4adc100a93cec277495b673b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
