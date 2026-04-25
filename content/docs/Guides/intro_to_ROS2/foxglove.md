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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UIWWO4V%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRg6mUsimVBmmYonZqrk8y5IoDoBS6fkPyqxR0gjrCnwIgZfsaipCZ2r1DLZU34HY9m4DbpvUVjqu4bfpCpQOjeQgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJInf9Z4efsw1Rx41yrcAwEFVG3Ebkd0DhWU4f4WRTGzvo9ddm6SeKrfwa4cUUf2wdEy3PEviKT4Jy0e1KYozxm8IMBV5JQFTjyHAoP697EJIImqgWWdMTlrF4z5xzL3YS1xVwl1xubPbhm3W7wM2KdIFe2CNZviwLAXLzboMbaxW1yeRPh5y121CMUxNDdnBowWryLckpej5YIQv8yXOhmh8JaDVBmowjkoeWVG48ZBvVFG0GevO7NkndZZmDO8AwiryjFone%2FYjjJ%2Fo24m2z7KzsqDtPLb39Odf8CA3rInOB2vuEg7yGIayxsVsMWdm5t2DAkmvvl73ysDzAD48aKwfb%2FhNs8KlYLRo8ldXMJYO%2BjEp2BMuw4QxfcBOn%2BHE%2BLTyHYvMvBUFknY6lICxWHV%2BiYqoUXsGN%2BI6PSNUMY9NH%2BuGEGS3HM5DwXn3FqgvX2AyYLnupfn%2B2LgiqLKPqdX6Rn1PIU%2FW%2Bm4ejj7gSI5lwhyU8JhdTg3Rr%2Fn%2F79UAUIiaIaZeSS5ugsfo3Vp59Uq04hgbU%2BEcmGywjF1v2kk8QAEtfcC1q01bJUKauMPkoY7%2FCgSERV8LLSwCEz7PKYJPBTC6klBJ8qGOz1Cn4wV1zJPg3QDuu1zsX1MbLXSRe4%2BECqnmCuyyMgmMKq6sM8GOqUBnspYX7ZeBVyhrf77MUedDa%2BN477RJNpXh1rmky9qwU1fu0pkX%2BVYaGLBxdwCwXZDN9spZts6D5kmtH5Qh9%2B%2Fu4i2Vdp2iy4RYRnmmMJg3BPFwO2UslCU5EhsLwXC66PGoBEfVJyWErrXnk3j%2Fs2KzdAS2jZCkJ3Mpa7LU%2Bcz9Z3R%2FD7iYFn1ow0APjciNwK0KfjF%2F08NJWGfJycwtJNlqFG0LPr%2F&X-Amz-Signature=09eff61071f09f835f264fc427e0ac2fd6a36bf76e2c4565481359d30d8b7038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UIWWO4V%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRg6mUsimVBmmYonZqrk8y5IoDoBS6fkPyqxR0gjrCnwIgZfsaipCZ2r1DLZU34HY9m4DbpvUVjqu4bfpCpQOjeQgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJInf9Z4efsw1Rx41yrcAwEFVG3Ebkd0DhWU4f4WRTGzvo9ddm6SeKrfwa4cUUf2wdEy3PEviKT4Jy0e1KYozxm8IMBV5JQFTjyHAoP697EJIImqgWWdMTlrF4z5xzL3YS1xVwl1xubPbhm3W7wM2KdIFe2CNZviwLAXLzboMbaxW1yeRPh5y121CMUxNDdnBowWryLckpej5YIQv8yXOhmh8JaDVBmowjkoeWVG48ZBvVFG0GevO7NkndZZmDO8AwiryjFone%2FYjjJ%2Fo24m2z7KzsqDtPLb39Odf8CA3rInOB2vuEg7yGIayxsVsMWdm5t2DAkmvvl73ysDzAD48aKwfb%2FhNs8KlYLRo8ldXMJYO%2BjEp2BMuw4QxfcBOn%2BHE%2BLTyHYvMvBUFknY6lICxWHV%2BiYqoUXsGN%2BI6PSNUMY9NH%2BuGEGS3HM5DwXn3FqgvX2AyYLnupfn%2B2LgiqLKPqdX6Rn1PIU%2FW%2Bm4ejj7gSI5lwhyU8JhdTg3Rr%2Fn%2F79UAUIiaIaZeSS5ugsfo3Vp59Uq04hgbU%2BEcmGywjF1v2kk8QAEtfcC1q01bJUKauMPkoY7%2FCgSERV8LLSwCEz7PKYJPBTC6klBJ8qGOz1Cn4wV1zJPg3QDuu1zsX1MbLXSRe4%2BECqnmCuyyMgmMKq6sM8GOqUBnspYX7ZeBVyhrf77MUedDa%2BN477RJNpXh1rmky9qwU1fu0pkX%2BVYaGLBxdwCwXZDN9spZts6D5kmtH5Qh9%2B%2Fu4i2Vdp2iy4RYRnmmMJg3BPFwO2UslCU5EhsLwXC66PGoBEfVJyWErrXnk3j%2Fs2KzdAS2jZCkJ3Mpa7LU%2Bcz9Z3R%2FD7iYFn1ow0APjciNwK0KfjF%2F08NJWGfJycwtJNlqFG0LPr%2F&X-Amz-Signature=bbb3f35dc35137f7d19250ca15387a0b50bcfb225f6e3bf3e087eef1c81d5c87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
