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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX6J7AE4%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDoWFyitUem0V2GI%2BWgOsrAAKyfGUK7eDMzYwgV7AsDgIhAOgDwaKefsmHAVpYdjRQ3ELXDc0sR4KsTiref3J7t114KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWf22gf7ts5CIEv1oq3AOiGs7oFudjCKzYzj7PC8fQcHc6YZRrcR7B8PMUQ4YbGSc%2FoLa8oZRzsde5lCT75Dh%2Bob2jk7xNqA7rXCfPR2kqwTbj7q7Hb1Hy%2F8yzMElkb00p90unU2NVgnjamv%2BjYk28K7PiJPhdrxLOufes774zCBhqcMG0vPeuYL%2BTK6OG4xgcEdSs3Q8C5Fg59d2aSZfHRvSHTAPXlLHAdFAvJIlVK09%2BkIhqHUHCAbvIv8Cb6ZBVyU6oR8O7yabmFy%2BwFEUyXsfW1oiNKep66wnzaJNv6shGO2vIep4DbU3u%2B4JKqdh4d292rT8GnYadM7ArkddGP1fuLnyDBcE5r%2B6JKtDpQYVlB%2B2DF64ucTuKgFCxNXr5%2BlkVs7XsX00IuIJfGLEGgJVStvHE4ZnDlt4%2FWWlrK2Q6RJnrXXuTnUDolVzMixoSo%2F7J7ekg5d42Q9l1RXQWMycahN%2F4GEs1isQkyuvq1a8CP8ikEHqehOChQhuPz1XWLFCm9utmgpkmxeifL9qTbPVzm5yNcezOWf9nqU1KfXPLYbQlZGNDVDp%2FvzWZ3QD%2BziNC8krft%2BrfunjJWCwYp1IZKPPrQT5MdVKxjXzKp0Q5yo3zxVM%2FIo6c8pLMv8mRV%2BJA5aZ5tNJ7iDCrusvKBjqkAWyxPAJ0MfqB6SMFyOMK8k%2BA93JWjCSh3B0rjCpikL%2BhBYZPv5VllSfW8GMGgSawTMr4zY3wHJQjYTXIe84udP5SfHJDeQpIiNJc9Xmt5sJeIn48azqINt34x4Jjwpojyqj1C6eThHuQIXYdgJDnXpkZyVIKFRDg4x26jPSTIBOJyLhbT2YaaBhjTa9LizS4jGqhBvR5aV16q1c0iHZK4lsHemFr&X-Amz-Signature=093f792ef1cf21dc791c0d9def557cabf3a9888b39a7010b88b8a7771c6dd1ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX6J7AE4%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDoWFyitUem0V2GI%2BWgOsrAAKyfGUK7eDMzYwgV7AsDgIhAOgDwaKefsmHAVpYdjRQ3ELXDc0sR4KsTiref3J7t114KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWf22gf7ts5CIEv1oq3AOiGs7oFudjCKzYzj7PC8fQcHc6YZRrcR7B8PMUQ4YbGSc%2FoLa8oZRzsde5lCT75Dh%2Bob2jk7xNqA7rXCfPR2kqwTbj7q7Hb1Hy%2F8yzMElkb00p90unU2NVgnjamv%2BjYk28K7PiJPhdrxLOufes774zCBhqcMG0vPeuYL%2BTK6OG4xgcEdSs3Q8C5Fg59d2aSZfHRvSHTAPXlLHAdFAvJIlVK09%2BkIhqHUHCAbvIv8Cb6ZBVyU6oR8O7yabmFy%2BwFEUyXsfW1oiNKep66wnzaJNv6shGO2vIep4DbU3u%2B4JKqdh4d292rT8GnYadM7ArkddGP1fuLnyDBcE5r%2B6JKtDpQYVlB%2B2DF64ucTuKgFCxNXr5%2BlkVs7XsX00IuIJfGLEGgJVStvHE4ZnDlt4%2FWWlrK2Q6RJnrXXuTnUDolVzMixoSo%2F7J7ekg5d42Q9l1RXQWMycahN%2F4GEs1isQkyuvq1a8CP8ikEHqehOChQhuPz1XWLFCm9utmgpkmxeifL9qTbPVzm5yNcezOWf9nqU1KfXPLYbQlZGNDVDp%2FvzWZ3QD%2BziNC8krft%2BrfunjJWCwYp1IZKPPrQT5MdVKxjXzKp0Q5yo3zxVM%2FIo6c8pLMv8mRV%2BJA5aZ5tNJ7iDCrusvKBjqkAWyxPAJ0MfqB6SMFyOMK8k%2BA93JWjCSh3B0rjCpikL%2BhBYZPv5VllSfW8GMGgSawTMr4zY3wHJQjYTXIe84udP5SfHJDeQpIiNJc9Xmt5sJeIn48azqINt34x4Jjwpojyqj1C6eThHuQIXYdgJDnXpkZyVIKFRDg4x26jPSTIBOJyLhbT2YaaBhjTa9LizS4jGqhBvR5aV16q1c0iHZK4lsHemFr&X-Amz-Signature=f78ccce985446549709c68ddded400a300044b1f53e808a37d26e8d7e05be408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
