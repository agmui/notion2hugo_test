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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E6BW4ID%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCBR2As2sut0pjNnMGSzBrdTX9Bgx6iVbkX%2BQz2cz73MgIhALwqFN7tQDAJGkJXoVBLcaRIJCffWcZDVrAPWdSdk9MzKv8DCDYQABoMNjM3NDIzMTgzODA1Igzlss%2BTsMG0Hu7ulHoq3AO0qwQOnNGi3vM1I11HMCK0%2FtkYO1tZyYrOgJdzPr7K6HEgjPejL9zXCrUzkk3UungcIWVoUdB5z0WKCby8AML%2BQ3HQLfJgIm13NSvTYgAHSMmJacSK%2B%2FVu46rsyzNqbDMRlo%2BtHkuKufC8KY%2BIHXH38AENRhCj4dOdacPxo7n4O5NLd0OX9gZo0pjDxb3dtVyIX4jfn%2FfcCZRf55rJwQgI6FY2JJPiCjWDL0UuAhrs9BjM1f7xtBfSTgAL2TdmC%2BwDIp5ZKpihtGidTfo6YFYX7EI9U1YN9ysHiqsqSq5uHPSdfJwbIoNdSfDArPg%2BOX8i14tB%2Fin6TsdTi%2BZhvIY8504EqJ%2Bujx3aX30oP1PTK1m0XbgYpq297AnmNh3%2FiFlBigze4IrsExiZLlRVA%2BS4WCuO1OMWT1opoJi%2FkBSh%2BNWYHa5iD9A%2BH9HGC5D%2FxucV5iTDNU8L%2Bplshq%2BYC2cvTIVbSpn06dx%2BnqR9zmlx1lr4F6w4nVvIIslkp%2BQYIDsLGfQLKwekQsQPD3hJp6ed9Rh8ERWNwKDYrnoEmBnqOg8yZPX6hCW8p4NK3E30FicA%2BAp4Kyg9N5Ha5pTSPJ%2BgJWXxxOfzqpK49G3cn8sZivGLwMwvS2kyP0wMwzDZtOvKBjqkAREipmmIRiQ3oyC1SW6NXzUNFX9rncPd3nOfnDghSvptXCq0Iym477ap6ou2uv98ZdJn2swZIy1%2Bpu6gitm76XARpSoymlJPg2qU4rS3xUUrNFnC8WgMshw52g4G1VER00U84FfbyWYfwC%2F7SEcq%2BaGrLNWou8vxkYWymmzFCHmpgMta%2B4JhX6VYUYWppipPj9FcIO8Ei3REpmW6ijGCvaWWsvNM&X-Amz-Signature=73b0df74cf80d764e1693df89a0953ffc4318c575deeb7dc98aeb2d9a26e2805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E6BW4ID%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCBR2As2sut0pjNnMGSzBrdTX9Bgx6iVbkX%2BQz2cz73MgIhALwqFN7tQDAJGkJXoVBLcaRIJCffWcZDVrAPWdSdk9MzKv8DCDYQABoMNjM3NDIzMTgzODA1Igzlss%2BTsMG0Hu7ulHoq3AO0qwQOnNGi3vM1I11HMCK0%2FtkYO1tZyYrOgJdzPr7K6HEgjPejL9zXCrUzkk3UungcIWVoUdB5z0WKCby8AML%2BQ3HQLfJgIm13NSvTYgAHSMmJacSK%2B%2FVu46rsyzNqbDMRlo%2BtHkuKufC8KY%2BIHXH38AENRhCj4dOdacPxo7n4O5NLd0OX9gZo0pjDxb3dtVyIX4jfn%2FfcCZRf55rJwQgI6FY2JJPiCjWDL0UuAhrs9BjM1f7xtBfSTgAL2TdmC%2BwDIp5ZKpihtGidTfo6YFYX7EI9U1YN9ysHiqsqSq5uHPSdfJwbIoNdSfDArPg%2BOX8i14tB%2Fin6TsdTi%2BZhvIY8504EqJ%2Bujx3aX30oP1PTK1m0XbgYpq297AnmNh3%2FiFlBigze4IrsExiZLlRVA%2BS4WCuO1OMWT1opoJi%2FkBSh%2BNWYHa5iD9A%2BH9HGC5D%2FxucV5iTDNU8L%2Bplshq%2BYC2cvTIVbSpn06dx%2BnqR9zmlx1lr4F6w4nVvIIslkp%2BQYIDsLGfQLKwekQsQPD3hJp6ed9Rh8ERWNwKDYrnoEmBnqOg8yZPX6hCW8p4NK3E30FicA%2BAp4Kyg9N5Ha5pTSPJ%2BgJWXxxOfzqpK49G3cn8sZivGLwMwvS2kyP0wMwzDZtOvKBjqkAREipmmIRiQ3oyC1SW6NXzUNFX9rncPd3nOfnDghSvptXCq0Iym477ap6ou2uv98ZdJn2swZIy1%2Bpu6gitm76XARpSoymlJPg2qU4rS3xUUrNFnC8WgMshw52g4G1VER00U84FfbyWYfwC%2F7SEcq%2BaGrLNWou8vxkYWymmzFCHmpgMta%2B4JhX6VYUYWppipPj9FcIO8Ei3REpmW6ijGCvaWWsvNM&X-Amz-Signature=abc62980bc5fec719f49d75c92555f6fd950e8c0bd20914c2e259080c8e7bc46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
