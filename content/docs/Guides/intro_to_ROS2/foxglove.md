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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN7SU3SG%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeK21akRqQZ4BIJVRLoeKPR928FcjaQfaF1M%2F5HotkXgIhAPIgRcuNpTvaHdFXuhhcJ6Ad33FxCuBECCYeodHtXlULKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynqQplJ%2BWVCa3L%2Bd4q3AMnjm2%2Bjp%2BFmH1BGcgvEFqh4LY5c74Bqf0ivRfWFl6H0OemOJTW254cuZuxS9RjupVvkpiuNtloUw3QbbqSTaAMfQ0BBMUkTz10KVpMOuAJL9uaRjWucDsvbvtXNHoQmvtNP9hUjDlASsU2RyZQUvf0ObLD6OrC7epAiaVFJTGu%2FIEnhGtMdAuxqIZto02GHjyKrTzuCBgCcBxdLpA6whQ%2BJC4soOCKb0UJ86HmpgCSHmStDcnSuz7Eyu1IceRzXoyL6baGeMe5eTG0Zle5en0dzrnvu3Kl04cNPyzSsPU5DYp0E%2Ft1WHD%2B%2BeYW4Zb8oYCw%2BjmuhIX5i4Nq6flMVqxKkqJScQJilNckOOmcRloll%2F8WjTR9EUcclP1G6UiTxJBYrupMQSt0Up5kcvikONLUiluP%2FS%2FAhGZ8gNd%2BzSGzbkIbpsMqkRrPaKyEyx%2FY0v38DRc%2BPlJMau27cDTzoHduVjxBoNnUSpCNT5vLKFMpjNqQ%2FAsHyEG7c%2FK%2BbB%2BRrbgk6e%2FzEBWE3DsqjXrkaCF4O3OKa%2F7tOnKfuBcepECQt2mgCbS2pDo1WWDdp1WdmIE%2BwYqt44WqEglOiBOveMNGn426XcOO4rdFfbSGvKWkHau%2FsD3M9OaeEOVdFjC58vnLBjqkAaZ%2Bk%2BApZ6vcIBH5ntW%2FcGpni2GwrwCU67hET57dtjfAg%2FWu2IWv4WXctS3hGDtkxxtGhX9kzhDfrrzYI%2BLXT0kQnB0GIXhXdyeAbNlp%2FdIe2wJtUbVyONqEV4wp76G1wvlJVTduyIkBU1msKyyIl74rbos63jtxtdGoIr5XdqqOR0WGZwpgydGEVi0iUoOpSn%2FGerhtSYri2fV8ZN83McEHlKgg&X-Amz-Signature=9ffc7c0548f3cc5002b84200e5231ad5aa09e848321ee09206ada772885ad4c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN7SU3SG%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeK21akRqQZ4BIJVRLoeKPR928FcjaQfaF1M%2F5HotkXgIhAPIgRcuNpTvaHdFXuhhcJ6Ad33FxCuBECCYeodHtXlULKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynqQplJ%2BWVCa3L%2Bd4q3AMnjm2%2Bjp%2BFmH1BGcgvEFqh4LY5c74Bqf0ivRfWFl6H0OemOJTW254cuZuxS9RjupVvkpiuNtloUw3QbbqSTaAMfQ0BBMUkTz10KVpMOuAJL9uaRjWucDsvbvtXNHoQmvtNP9hUjDlASsU2RyZQUvf0ObLD6OrC7epAiaVFJTGu%2FIEnhGtMdAuxqIZto02GHjyKrTzuCBgCcBxdLpA6whQ%2BJC4soOCKb0UJ86HmpgCSHmStDcnSuz7Eyu1IceRzXoyL6baGeMe5eTG0Zle5en0dzrnvu3Kl04cNPyzSsPU5DYp0E%2Ft1WHD%2B%2BeYW4Zb8oYCw%2BjmuhIX5i4Nq6flMVqxKkqJScQJilNckOOmcRloll%2F8WjTR9EUcclP1G6UiTxJBYrupMQSt0Up5kcvikONLUiluP%2FS%2FAhGZ8gNd%2BzSGzbkIbpsMqkRrPaKyEyx%2FY0v38DRc%2BPlJMau27cDTzoHduVjxBoNnUSpCNT5vLKFMpjNqQ%2FAsHyEG7c%2FK%2BbB%2BRrbgk6e%2FzEBWE3DsqjXrkaCF4O3OKa%2F7tOnKfuBcepECQt2mgCbS2pDo1WWDdp1WdmIE%2BwYqt44WqEglOiBOveMNGn426XcOO4rdFfbSGvKWkHau%2FsD3M9OaeEOVdFjC58vnLBjqkAaZ%2Bk%2BApZ6vcIBH5ntW%2FcGpni2GwrwCU67hET57dtjfAg%2FWu2IWv4WXctS3hGDtkxxtGhX9kzhDfrrzYI%2BLXT0kQnB0GIXhXdyeAbNlp%2FdIe2wJtUbVyONqEV4wp76G1wvlJVTduyIkBU1msKyyIl74rbos63jtxtdGoIr5XdqqOR0WGZwpgydGEVi0iUoOpSn%2FGerhtSYri2fV8ZN83McEHlKgg&X-Amz-Signature=cb796a56e68da45bade54e2e71523cff346f443a174c78fbe972aeb542e17976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
