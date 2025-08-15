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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623SCMFPR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD%2BCZxr4BPs6vRnKXFmZXZUeZ5p4%2FZQhq0OfcpEZXxwlgIhANB1aSHCWHfLdzHxii3euV3IQLsjFKwRl8nH95WA%2BOHCKv8DCFMQABoMNjM3NDIzMTgzODA1Igwmn%2FJDu%2FMCBfMSlSUq3AO%2BYXKLappnyppcwMz6NFUgbkB8JBdu769OMBABSEnqaIgwYcDbc21qf8mPHZAhXFYiZJ7AnuIZNF3z31EtabeH9efBVrt1SUFI0xP9ZTIc7N3xOzq0JSKK1h7t%2BafVU4enTgS0NROVhzHpH%2FkcOzGEl2JB1NLArgP%2BwOk8fmRYyOFg0ppMCvxh0L1f8dUo2w29nsUDsAwfGT7eoL8AaWtUxZEQGM3DvpZ0fGTMAnce5ulOQj0bD7ZRh2qD%2B2NCtmeZirrWa0PYVtmpGWom8froq%2Fl47Uy%2BVPfnAFENJrO%2BxUQQWPv%2FtI7sHCPZ%2B1ncbtJ4KQ09AS0fnv%2BjgVC6q55ADp5bjBu4XlODxzPK%2BL%2BmToRtf13jpN8k68L0SnfjHXuWcQ%2F0C9SJP3KzWH38PX0UuX7%2BFyBS6Abfit8RGozijHlUxGrvvP8xRwyMaWWa0GV46c1G0o4scprnj47Yqp4QhuvCUwv3l6gZ1N%2FfXmA5QSVLQ13oIqkNSHIjBqfeq0whLeZ11Xx9p5WKc9KMzb7hE%2BsBcZOD8hV9nvWy5iOtoUWW2N0WA5yp9zuM0rrv1lCd3Sz%2F%2FwYHbDBoKYXmo%2B92q6smB2f94VNK8N2FfLJUooWuDpEqkUdVl%2FhUzjCLo%2FrEBjqkAd4B%2FyBT%2BBByFWlXOZkNgHCWfHrHiCuWJmPaLONpNK6%2BnX5RXVtVnuzqa%2BdkNLltxQfU4qdpU7xB6d18DirY8sqsvzkMmKv8gmp1KKzKxKt%2FTUods8fVFqyCx2yGRZGAfIaT2kIseBRO3TdEgV5J6FnNg7ZFSFRcFBh0omnHU%2FpIdkJuHII0vTBw5dcbSn3dfNWiYI6os0jGCer%2FhcrNIhUbphGq&X-Amz-Signature=0740dadde4b8fd44f971ee0c94cd31ef1f65af2c96d69d1d5f8ce19dc34a94f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623SCMFPR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD%2BCZxr4BPs6vRnKXFmZXZUeZ5p4%2FZQhq0OfcpEZXxwlgIhANB1aSHCWHfLdzHxii3euV3IQLsjFKwRl8nH95WA%2BOHCKv8DCFMQABoMNjM3NDIzMTgzODA1Igwmn%2FJDu%2FMCBfMSlSUq3AO%2BYXKLappnyppcwMz6NFUgbkB8JBdu769OMBABSEnqaIgwYcDbc21qf8mPHZAhXFYiZJ7AnuIZNF3z31EtabeH9efBVrt1SUFI0xP9ZTIc7N3xOzq0JSKK1h7t%2BafVU4enTgS0NROVhzHpH%2FkcOzGEl2JB1NLArgP%2BwOk8fmRYyOFg0ppMCvxh0L1f8dUo2w29nsUDsAwfGT7eoL8AaWtUxZEQGM3DvpZ0fGTMAnce5ulOQj0bD7ZRh2qD%2B2NCtmeZirrWa0PYVtmpGWom8froq%2Fl47Uy%2BVPfnAFENJrO%2BxUQQWPv%2FtI7sHCPZ%2B1ncbtJ4KQ09AS0fnv%2BjgVC6q55ADp5bjBu4XlODxzPK%2BL%2BmToRtf13jpN8k68L0SnfjHXuWcQ%2F0C9SJP3KzWH38PX0UuX7%2BFyBS6Abfit8RGozijHlUxGrvvP8xRwyMaWWa0GV46c1G0o4scprnj47Yqp4QhuvCUwv3l6gZ1N%2FfXmA5QSVLQ13oIqkNSHIjBqfeq0whLeZ11Xx9p5WKc9KMzb7hE%2BsBcZOD8hV9nvWy5iOtoUWW2N0WA5yp9zuM0rrv1lCd3Sz%2F%2FwYHbDBoKYXmo%2B92q6smB2f94VNK8N2FfLJUooWuDpEqkUdVl%2FhUzjCLo%2FrEBjqkAd4B%2FyBT%2BBByFWlXOZkNgHCWfHrHiCuWJmPaLONpNK6%2BnX5RXVtVnuzqa%2BdkNLltxQfU4qdpU7xB6d18DirY8sqsvzkMmKv8gmp1KKzKxKt%2FTUods8fVFqyCx2yGRZGAfIaT2kIseBRO3TdEgV5J6FnNg7ZFSFRcFBh0omnHU%2FpIdkJuHII0vTBw5dcbSn3dfNWiYI6os0jGCer%2FhcrNIhUbphGq&X-Amz-Signature=fa84c059d4db0e855a7c09f41ea5fdc668a932ecb1697738803fcfaac9e6b199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
