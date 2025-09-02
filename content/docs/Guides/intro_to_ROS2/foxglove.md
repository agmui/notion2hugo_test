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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUF2CG6T%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyZxwKv%2BycjwCYR%2BW%2FAM6D7TERKzLGn%2BdwtVN0b7I%2BGQIgPsTSjDHEbIr4%2BYcCr1n9%2FZzdMxjl%2F1aeq8HgPpTMddsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDPFUS%2BhJava%2B%2BBp8myrcA3q1AoAbNJsoFA8gEsfcYyMlZuvL%2F%2FsQsswKWoop8pyXaG6OC%2BUpp8A9L7OC4qHov0K7%2F6Z7sKddXPtTNdehikUaoLXQEeQCFvIkz3UOQwYQLgJHF7%2BFkfLPXJvwLhIDkG9vzyjOchSZ8oighgGlfc8LABTItNFGyhdRP6gYJlXsOzeR4hzHX99qwZLohaIHsziSYWLW5SMfThyT5LG4gJ5vscrDzpliQ2xWUO2PLPSu6d4zTZM9csK%2FiFUeO2g0Df%2BcETXUGfyxv2lBYSSNq4mupmNHbF620SDYNl4iz8T8OOtPTeP0ZC3ot7u1a%2BETJsOcr8TBZ%2BafCNQyuzYWSqk%2Ba6bcpY7e0bpa2yLEmHja5NZQ2aEgeaIbO%2B7tYNcy2xtAbnwex5wd8cZjM0BN7MJMoXfyzE8%2FiQQCMmhCxzZ6xysrOuunXgfVk9TwV2HlB%2FqCzjDMp6R6Fo%2BtKLN1OrM2Zsc2CTVYBSaavTuM17%2FK%2FLiTTzG3RlfL3yjxGwbXFjAWU47tnZ8ELo%2FH88hpPjBo0fV9cEnjNuW%2FXzu2b2yjqfs7DSaEa%2BkGIw0wmteIuW9MlpqGWX%2FBD8PRGoDSvsiN2QVXdAMYeHHk58e0L7UPYd5OJqzZFZMcyoqyMLSL2cUGOqUBBykqk7ZQHKcL6LX9%2FEDyjUmdizjhVH0jxuF0HFFbBBnsyhshkWgY%2FwdQul3Q%2FwxYCJvcT9f5iPT%2FCFVMrdkbb9BuiJA%2FvdbWcyoxrE2cx59pSqfcNu8dXUTfgk9LEnQ3Vt2t2Aed%2FHvW9iEw%2BzrstjiBNnr%2Bw0svi2i%2BONrmR%2BrTh4cbB6mMWZtFV%2BC7COPxrQq7OxoKkZItVmogK%2BFWT163fMMj&X-Amz-Signature=dfeb4d15bd6fd2f0cfbde101e7bd58b51e9780cb5bb4168bc1dea00c40227164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUF2CG6T%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyZxwKv%2BycjwCYR%2BW%2FAM6D7TERKzLGn%2BdwtVN0b7I%2BGQIgPsTSjDHEbIr4%2BYcCr1n9%2FZzdMxjl%2F1aeq8HgPpTMddsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDPFUS%2BhJava%2B%2BBp8myrcA3q1AoAbNJsoFA8gEsfcYyMlZuvL%2F%2FsQsswKWoop8pyXaG6OC%2BUpp8A9L7OC4qHov0K7%2F6Z7sKddXPtTNdehikUaoLXQEeQCFvIkz3UOQwYQLgJHF7%2BFkfLPXJvwLhIDkG9vzyjOchSZ8oighgGlfc8LABTItNFGyhdRP6gYJlXsOzeR4hzHX99qwZLohaIHsziSYWLW5SMfThyT5LG4gJ5vscrDzpliQ2xWUO2PLPSu6d4zTZM9csK%2FiFUeO2g0Df%2BcETXUGfyxv2lBYSSNq4mupmNHbF620SDYNl4iz8T8OOtPTeP0ZC3ot7u1a%2BETJsOcr8TBZ%2BafCNQyuzYWSqk%2Ba6bcpY7e0bpa2yLEmHja5NZQ2aEgeaIbO%2B7tYNcy2xtAbnwex5wd8cZjM0BN7MJMoXfyzE8%2FiQQCMmhCxzZ6xysrOuunXgfVk9TwV2HlB%2FqCzjDMp6R6Fo%2BtKLN1OrM2Zsc2CTVYBSaavTuM17%2FK%2FLiTTzG3RlfL3yjxGwbXFjAWU47tnZ8ELo%2FH88hpPjBo0fV9cEnjNuW%2FXzu2b2yjqfs7DSaEa%2BkGIw0wmteIuW9MlpqGWX%2FBD8PRGoDSvsiN2QVXdAMYeHHk58e0L7UPYd5OJqzZFZMcyoqyMLSL2cUGOqUBBykqk7ZQHKcL6LX9%2FEDyjUmdizjhVH0jxuF0HFFbBBnsyhshkWgY%2FwdQul3Q%2FwxYCJvcT9f5iPT%2FCFVMrdkbb9BuiJA%2FvdbWcyoxrE2cx59pSqfcNu8dXUTfgk9LEnQ3Vt2t2Aed%2FHvW9iEw%2BzrstjiBNnr%2Bw0svi2i%2BONrmR%2BrTh4cbB6mMWZtFV%2BC7COPxrQq7OxoKkZItVmogK%2BFWT163fMMj&X-Amz-Signature=c716dc35342fc8694636ade83b4a825c959ebe2f00ba104deb9d14f7c2ac48fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
