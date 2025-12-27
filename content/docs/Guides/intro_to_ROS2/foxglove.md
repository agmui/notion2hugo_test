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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWPCIOBE%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd7riRGlbRBEBw9Q8pQAonEUGQSSnBxHOdDVz3kJKgmQIgAg7Q16atzQ2A3%2Bcgab0iUbIYdUI3sLSbhvOcetOxbz4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDEhcbLbhObzUJn7vircA4J3fsfLwxyTttse1mx63wWCfNndDJqtzyK4pqr5uuuIvTjXgfodQ%2BFc6gHHubMSwQDHXiDc6InEDKaz6PNEwcY67P1ItEDNEBgG%2F0Ua%2BEownImA%2FMxh2dOvUQT8fRYmiVIpcIff7jvf%2BL9pVB8bHORRR0tQeUAxDGtXQzq7L3p%2B4TTQfP%2BXuQbG%2B%2BbOTJFwOAf9gmwOHKQ9iqZkSxGapUqaEgid%2BctrsASRvrNCi%2F3TSJ%2BOItWMyaDjB%2FBShm0KygG1r%2Bp7WF%2Bu7KJetlFW05W7ZF3ypKifb9l6sj5NcGTanRg9Anh2ssxCNdZ0sSTJeZkSUitDfUF9R%2FMagYw9hkRTd3DJ0NW9rt7epcrdfJgZKNKLMBDwDTXuP9K62DWidLzze4R%2FwyIW0MjI4RZ26u7T1lTb97W99K%2Fy%2BPIiM9axMG6Aej9vz2NYXB3YUMruW5VZkR0qUyVA5MAtVD81P6tu0XJBNGqf8WcdIyJyHRsuMy0V5qVO%2FJPpTP%2F76m9k3xS7hxPEzzBwqDnD7TuSniIT2oiYvUOTk8k2pIzJ3Ff1wYusrqBPb6Sbodl%2FEepuEGmoag49fRjpqstaZ6PiRh31sMsd3acS%2FXJYdqSdJpUWjilZeBvY1JJpD4yCMLvpvMoGOqUB4MoQLgX49asNsrOqh7QY7jQC%2B3tX%2FVVTo0vZYMJCPYFtfjU%2BTVeHIrrfvfHqlTKcNeu9gdwnQyjeh%2BSki%2B8VQFqaNH8PvY0RSxx%2Fy42qNFTvtWdOJTLkYniqErp4GQirLlae1YyYQgp46D4bRmmJ8mXQ7TXN%2FvrC9RTc6yott9%2BRZchPL%2Fe6n6Rv0nfDA8pAbZYghSrTTs1jHoQPvge6io0HXCNg&X-Amz-Signature=deced569e7a3944eb267af1ecb933ce0785bd77459a8944d55df138131df3b16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWPCIOBE%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd7riRGlbRBEBw9Q8pQAonEUGQSSnBxHOdDVz3kJKgmQIgAg7Q16atzQ2A3%2Bcgab0iUbIYdUI3sLSbhvOcetOxbz4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDEhcbLbhObzUJn7vircA4J3fsfLwxyTttse1mx63wWCfNndDJqtzyK4pqr5uuuIvTjXgfodQ%2BFc6gHHubMSwQDHXiDc6InEDKaz6PNEwcY67P1ItEDNEBgG%2F0Ua%2BEownImA%2FMxh2dOvUQT8fRYmiVIpcIff7jvf%2BL9pVB8bHORRR0tQeUAxDGtXQzq7L3p%2B4TTQfP%2BXuQbG%2B%2BbOTJFwOAf9gmwOHKQ9iqZkSxGapUqaEgid%2BctrsASRvrNCi%2F3TSJ%2BOItWMyaDjB%2FBShm0KygG1r%2Bp7WF%2Bu7KJetlFW05W7ZF3ypKifb9l6sj5NcGTanRg9Anh2ssxCNdZ0sSTJeZkSUitDfUF9R%2FMagYw9hkRTd3DJ0NW9rt7epcrdfJgZKNKLMBDwDTXuP9K62DWidLzze4R%2FwyIW0MjI4RZ26u7T1lTb97W99K%2Fy%2BPIiM9axMG6Aej9vz2NYXB3YUMruW5VZkR0qUyVA5MAtVD81P6tu0XJBNGqf8WcdIyJyHRsuMy0V5qVO%2FJPpTP%2F76m9k3xS7hxPEzzBwqDnD7TuSniIT2oiYvUOTk8k2pIzJ3Ff1wYusrqBPb6Sbodl%2FEepuEGmoag49fRjpqstaZ6PiRh31sMsd3acS%2FXJYdqSdJpUWjilZeBvY1JJpD4yCMLvpvMoGOqUB4MoQLgX49asNsrOqh7QY7jQC%2B3tX%2FVVTo0vZYMJCPYFtfjU%2BTVeHIrrfvfHqlTKcNeu9gdwnQyjeh%2BSki%2B8VQFqaNH8PvY0RSxx%2Fy42qNFTvtWdOJTLkYniqErp4GQirLlae1YyYQgp46D4bRmmJ8mXQ7TXN%2FvrC9RTc6yott9%2BRZchPL%2Fe6n6Rv0nfDA8pAbZYghSrTTs1jHoQPvge6io0HXCNg&X-Amz-Signature=e439c10a8a589e432dc773ecbc660c9b467e111421126b0eaabffafac3ca8674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
