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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466537XGHWY%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtV%2FPQ1H%2BkVdFPZML83XJqDkXyiRfOtRGm8yrNbb8pJAiEA2KVEDs1h2pjd172I%2FL1t7A15LUkpsKH0MRyTNfgPgXEqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOYY6zDthSR82lR%2FcCrcA7fEmdvlsFbIE2%2BFJ%2FYUFPSkiam6Iv9ax217ABkKg%2F2B7J3ap4WGPT53Vl1Vevn6zD%2BvmXews2o6T2tPH3GMt6fYMsJU6v9ShAf8ENQFsXORb2bYs8JHRfzfQjRV56lkk%2FEtQ0a8IWi1R47EWlT%2FjD7NrAZYeCZCMcIv3ZYxPMmvmvZ7laAav6sS%2FzZzn%2BuiZZClblxiPN4QJzPJLCiDT54m%2Fb%2FBekTxkipsQgXmWDa%2BGDQ7rqm7nj%2FnzBqfgPb1qRWBpN%2FgJRxczNSDj58R2OeBP6i07xjeNhXVjMNR9n%2BPh2W2z3afl6qBRhB%2FOGohjqlbb8ztxMAGOAz1HeusxntccVNC0AWZwmRusHTHqfJSPlgTiinpO3MVqT%2F8Ow1jOFBLVTds5vXMiJl4qeHsQYG6nVEMwIChIsgjKBw%2F6TWP3zPgvA8e6SGCcb9U7aHgw8zybAN4IKDWL%2BeZkfdohcnwWOuZdOVcDGs9vF10eXadosbwzC%2FkL1XBWQUaLaJd8WXl0SVlLL%2BfwPuuLetD%2FvzfKyL2XPIJR%2FhcBWL8mcsomf9P3hgLRS6e866w7Tdb4bLhWR4xmF7e3VlOVJ7kK5ovIk%2FE0QOpNY8hi0qxnPdn%2BywFxTz9J%2BTgefoSMMuUsNMGOqUBeKv85Jg63AiKkkxXX2PYlKFRsXUgRMovYvmgAg8fhn0srP%2F8KZpzgsviaCRI3rAe08GxJ6Dc8jj5uisCP%2BUt0ilZKjGTQlFxzJUkpiLKUSYFHXLMjWXebWhCMOKClqd%2FJl60OZpiAjo3VWcH%2FsEWG6ERV%2BcOYmlwWZTO4%2FyLwLZDPaIvpMZGJkSfvZLa3qsetyMSNAenxLFkATuyYCH3%2Fl2nRNi3&X-Amz-Signature=79a8fcdd843dabbaada6316665be3c19e5da5c59a57b1fda44e64bd2be18f53f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466537XGHWY%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtV%2FPQ1H%2BkVdFPZML83XJqDkXyiRfOtRGm8yrNbb8pJAiEA2KVEDs1h2pjd172I%2FL1t7A15LUkpsKH0MRyTNfgPgXEqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOYY6zDthSR82lR%2FcCrcA7fEmdvlsFbIE2%2BFJ%2FYUFPSkiam6Iv9ax217ABkKg%2F2B7J3ap4WGPT53Vl1Vevn6zD%2BvmXews2o6T2tPH3GMt6fYMsJU6v9ShAf8ENQFsXORb2bYs8JHRfzfQjRV56lkk%2FEtQ0a8IWi1R47EWlT%2FjD7NrAZYeCZCMcIv3ZYxPMmvmvZ7laAav6sS%2FzZzn%2BuiZZClblxiPN4QJzPJLCiDT54m%2Fb%2FBekTxkipsQgXmWDa%2BGDQ7rqm7nj%2FnzBqfgPb1qRWBpN%2FgJRxczNSDj58R2OeBP6i07xjeNhXVjMNR9n%2BPh2W2z3afl6qBRhB%2FOGohjqlbb8ztxMAGOAz1HeusxntccVNC0AWZwmRusHTHqfJSPlgTiinpO3MVqT%2F8Ow1jOFBLVTds5vXMiJl4qeHsQYG6nVEMwIChIsgjKBw%2F6TWP3zPgvA8e6SGCcb9U7aHgw8zybAN4IKDWL%2BeZkfdohcnwWOuZdOVcDGs9vF10eXadosbwzC%2FkL1XBWQUaLaJd8WXl0SVlLL%2BfwPuuLetD%2FvzfKyL2XPIJR%2FhcBWL8mcsomf9P3hgLRS6e866w7Tdb4bLhWR4xmF7e3VlOVJ7kK5ovIk%2FE0QOpNY8hi0qxnPdn%2BywFxTz9J%2BTgefoSMMuUsNMGOqUBeKv85Jg63AiKkkxXX2PYlKFRsXUgRMovYvmgAg8fhn0srP%2F8KZpzgsviaCRI3rAe08GxJ6Dc8jj5uisCP%2BUt0ilZKjGTQlFxzJUkpiLKUSYFHXLMjWXebWhCMOKClqd%2FJl60OZpiAjo3VWcH%2FsEWG6ERV%2BcOYmlwWZTO4%2FyLwLZDPaIvpMZGJkSfvZLa3qsetyMSNAenxLFkATuyYCH3%2Fl2nRNi3&X-Amz-Signature=c0bef784398b078e0495dda1d83ea7383b5f846d705fd0c5e2447aad8c3de531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
