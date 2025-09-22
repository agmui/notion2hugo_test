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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMA5N7JS%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrrbwpPhlP2SbyZM6KmGeDAVjrnAem7MipExuKqNetKQIgf6xWc6GlYvOpUTUssC%2B2h8lask1h2BKDAd6CocMvGs4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJ70FZ8flFkR3BhTOyrcAwUIEUvr5WLITQpDduetq03m0oZP0JW50EYbN0FjffFsn4E0deSKbZmnlT9piL1Q2kGaESlXrIRNYl7cTyc9uVFvvOvNXgx%2Fe5nQXPYPKh3KvSWhvjjZdrFmDNHk6oq7I0m2CTG3O5JOyBlIzWaveKFr3sL8%2F3cYJK%2B4Lcb66TwqkEx8bjxFkj3u768BAlAfpHZXwAgXbeflLVMcmgtbJVJ%2FvK%2BvIkPnb8i%2FVj1I53b7XkTkDhm0w6Ec%2BGt5MZzl1IfvDqWOx%2Bc3XjexMYIppWfZl8MJz4gB9pt%2Ben3DEHE%2FsD3HslWHSWo%2BgElcTWOzdgPmvVGjG9zMtjQp0vZ2fVo2VkF1CYuKTvKZvpfNslWPOSC%2F401%2Fwr2AtPSWRYWVu7PsrPIkw%2BEOa1f4ddSesc0IpHHmojp1pRbTVGwwFHC4onK8ZuyPSBi5T%2FoE2bvoPu7bHRfDf5mL0yUeyY6MIDLhjm7Y70bHNbiRsg7YOt3O%2B2oHleNHlqgj9K5gV1DBa7fi32VdL0qsV7op5NmQYIlX7FbGyOO4%2BOSQ3MVOX7WrBwmuDRBc2yrEInz57VpXE06IxgFfXI2V7iZG1UthIJcRisLQw3Elm7efUPVXrTPnD%2BNaAgwz%2B8hqZ4%2FKMLnEwsYGOqUBizs3abBYYGGhE8%2BzUE9c%2FUjvfFTu43EPG8IQXQpL2u0t927yVYZpnnYA0De7NhZgi3FIM%2FL2ESt94mfzVeMzcuxrj3fu8I%2B6s6LWGc89hNXpP49S1DrmflNRmh2hReQmqMhcgWMG7ZIxWlpttEIc7unKbnPB8v%2Faiyb9pvEteGGpRBSMoaxYu806XGgDZ8QKJCqKbHcVOLpmgKQ%2Bg9OBzoNU4Zr%2F&X-Amz-Signature=6c88187b0cffef5c2f3b5b5e9a4516c35ed5967fd6195079fd018d153fda8bdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMA5N7JS%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrrbwpPhlP2SbyZM6KmGeDAVjrnAem7MipExuKqNetKQIgf6xWc6GlYvOpUTUssC%2B2h8lask1h2BKDAd6CocMvGs4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJ70FZ8flFkR3BhTOyrcAwUIEUvr5WLITQpDduetq03m0oZP0JW50EYbN0FjffFsn4E0deSKbZmnlT9piL1Q2kGaESlXrIRNYl7cTyc9uVFvvOvNXgx%2Fe5nQXPYPKh3KvSWhvjjZdrFmDNHk6oq7I0m2CTG3O5JOyBlIzWaveKFr3sL8%2F3cYJK%2B4Lcb66TwqkEx8bjxFkj3u768BAlAfpHZXwAgXbeflLVMcmgtbJVJ%2FvK%2BvIkPnb8i%2FVj1I53b7XkTkDhm0w6Ec%2BGt5MZzl1IfvDqWOx%2Bc3XjexMYIppWfZl8MJz4gB9pt%2Ben3DEHE%2FsD3HslWHSWo%2BgElcTWOzdgPmvVGjG9zMtjQp0vZ2fVo2VkF1CYuKTvKZvpfNslWPOSC%2F401%2Fwr2AtPSWRYWVu7PsrPIkw%2BEOa1f4ddSesc0IpHHmojp1pRbTVGwwFHC4onK8ZuyPSBi5T%2FoE2bvoPu7bHRfDf5mL0yUeyY6MIDLhjm7Y70bHNbiRsg7YOt3O%2B2oHleNHlqgj9K5gV1DBa7fi32VdL0qsV7op5NmQYIlX7FbGyOO4%2BOSQ3MVOX7WrBwmuDRBc2yrEInz57VpXE06IxgFfXI2V7iZG1UthIJcRisLQw3Elm7efUPVXrTPnD%2BNaAgwz%2B8hqZ4%2FKMLnEwsYGOqUBizs3abBYYGGhE8%2BzUE9c%2FUjvfFTu43EPG8IQXQpL2u0t927yVYZpnnYA0De7NhZgi3FIM%2FL2ESt94mfzVeMzcuxrj3fu8I%2B6s6LWGc89hNXpP49S1DrmflNRmh2hReQmqMhcgWMG7ZIxWlpttEIc7unKbnPB8v%2Faiyb9pvEteGGpRBSMoaxYu806XGgDZ8QKJCqKbHcVOLpmgKQ%2Bg9OBzoNU4Zr%2F&X-Amz-Signature=27ff26e0aff6f4874dc02660c8092310731bbe1552852762bc0d284d3b5e8aa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
