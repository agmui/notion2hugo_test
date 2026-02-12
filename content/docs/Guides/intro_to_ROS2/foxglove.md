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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJY2NXR6%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFAcDF2X2Md2Yk%2BSZbswaS1Lda9mTj8G4NFeM88nVlI1AiBW4cABXy7zye6byUz6mDypBUkZ75pyjZqO1mn%2F7sKDjSqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD0U7siw8ZLd9Aef8KtwDAaRbJ63nGEKDHV33Xx1j5IDowAM%2BOwRIHGa2t30%2Bt8wXMvMHZt5tPW%2FJkcR8UleVsvfirgA50vhTgl5hqoUtr4g8D2KLSg1b2d7ooTEX1fOT%2FYcno8%2Bqg%2FSuHihWVlJyU70NhKvbX2w%2BOYgcUNIR65ey6wqr5%2FCIi0J6huZdPWHjG6VrXvMGr6wg%2BG1rMU%2FkCIOsFmDmJX5ctJDhHTvnYwGWk5LLyfxdjgcsnT97MPLfXJ867UX0YikWMLnmIV3gwdmzxSIroytZneRNkuXeqNC6fpRcKt2y6zR4ySHv3InMOas1xayAXh1HzhVa7VCpdHRFrOHNogDBQFaPtpZwCufCQd1mooiz%2FkoQE4pd6GETPFg1jndCdm07ylw3orussI5MYBYEGa1MUO4x5MPBSLnw1%2FHWWD%2FgajCW75Q%2BqeKEgjG2I%2BN41LAxkxdKXvv%2B7ln3%2B75SOAnIzPbvVjSUePX9dH24yk%2FtG%2FaYzSntae%2BoXfrEk%2Bokb3pQO5hINE5ZJqUzcv2NbrPxFrjgti4PbdeTEcxdvyOKshQoW%2FsPzHc%2F6r6Qx8DquSUpodLPcr4XC5RkxYZ0KIaVOE%2BD0T2GxG85qF2rgDztz5AK%2FWwYQFJ5r9n9ettSEF6phi0w9Mq0zAY6pgHhIr3Pq2TQcJW3I5DMZl9bijImsuZv6ip0K95DJuOaQlLK1rsdSfj8k6fYIOtd8IkiWSKfp%2BwUA71Sf77z%2FmzVGwcODggbDf7HZhkTOPNiKUQUuzBUNRFJsPX6SUnw%2FM74NJbH%2B14MCc0uUjRzpcHbTs41Gc4iGprPy1zi0zf9M0S1IK1fx0NOCGQzMnxRJ%2FQIBmyl%2BfmCYXXFSSwXlCdEBs5ymZMO&X-Amz-Signature=63d0311bc2d4781bc036ce5db9ff728c6295ec544b4eca60c72f961c9225dc7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJY2NXR6%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFAcDF2X2Md2Yk%2BSZbswaS1Lda9mTj8G4NFeM88nVlI1AiBW4cABXy7zye6byUz6mDypBUkZ75pyjZqO1mn%2F7sKDjSqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD0U7siw8ZLd9Aef8KtwDAaRbJ63nGEKDHV33Xx1j5IDowAM%2BOwRIHGa2t30%2Bt8wXMvMHZt5tPW%2FJkcR8UleVsvfirgA50vhTgl5hqoUtr4g8D2KLSg1b2d7ooTEX1fOT%2FYcno8%2Bqg%2FSuHihWVlJyU70NhKvbX2w%2BOYgcUNIR65ey6wqr5%2FCIi0J6huZdPWHjG6VrXvMGr6wg%2BG1rMU%2FkCIOsFmDmJX5ctJDhHTvnYwGWk5LLyfxdjgcsnT97MPLfXJ867UX0YikWMLnmIV3gwdmzxSIroytZneRNkuXeqNC6fpRcKt2y6zR4ySHv3InMOas1xayAXh1HzhVa7VCpdHRFrOHNogDBQFaPtpZwCufCQd1mooiz%2FkoQE4pd6GETPFg1jndCdm07ylw3orussI5MYBYEGa1MUO4x5MPBSLnw1%2FHWWD%2FgajCW75Q%2BqeKEgjG2I%2BN41LAxkxdKXvv%2B7ln3%2B75SOAnIzPbvVjSUePX9dH24yk%2FtG%2FaYzSntae%2BoXfrEk%2Bokb3pQO5hINE5ZJqUzcv2NbrPxFrjgti4PbdeTEcxdvyOKshQoW%2FsPzHc%2F6r6Qx8DquSUpodLPcr4XC5RkxYZ0KIaVOE%2BD0T2GxG85qF2rgDztz5AK%2FWwYQFJ5r9n9ettSEF6phi0w9Mq0zAY6pgHhIr3Pq2TQcJW3I5DMZl9bijImsuZv6ip0K95DJuOaQlLK1rsdSfj8k6fYIOtd8IkiWSKfp%2BwUA71Sf77z%2FmzVGwcODggbDf7HZhkTOPNiKUQUuzBUNRFJsPX6SUnw%2FM74NJbH%2B14MCc0uUjRzpcHbTs41Gc4iGprPy1zi0zf9M0S1IK1fx0NOCGQzMnxRJ%2FQIBmyl%2BfmCYXXFSSwXlCdEBs5ymZMO&X-Amz-Signature=e6710b2c07ae1ba253b95dc1d597d8ecb9f0d32b9c9e43e9c26931ed410ee0b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
