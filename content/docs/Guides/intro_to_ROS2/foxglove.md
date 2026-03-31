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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLETXGF7%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCsgQzeV0BkfbTgYb5RUR%2FJd4w32hwXqV3A4YqWK7YUlgIgP45HcCT1PpDdQfZJJMxA4klfvaDLMAXGhUVTAFFx81oq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDO1HTyEDiVL%2FeAl7uyrcA33FB6gWJIBRtJxVbrtMVZS8e5Fd8O%2F%2BxLoy4rCZO62kbKvNNNvibJ2n0axPZMN3uVxLgR59moGGdLidZQidLHKgsNLd2iNDgYVYxR2Zt3%2F%2BmGHMHN%2FFfmWj4jGZ%2FbK6HJcDFJBaYVBlzMAA2okPzXVgsv9y9v1L51GvcezyrtuqsJkZmN5QrEjJC0BN6DCK098gzVgEHJuCHkxP6ZHwx0%2Be7TFH7L4flhp5ekm87SBoupNDd5DzRJ0xrPTlTXJdmqMQY3BO1IhTEUo1PpH39GJ44mECUJRK2fwPH8x0vPvhiJOoSYhgAzKJwXnV6FKtdPOvrJqH29Adx5dfdY0K%2F4SlKGjc3LWdJDKjRmog0IlVGXy%2BenXdfMzpbG%2B8o0h4pzl3cg8OOViWI9odgDnWLnRVTxox0o%2B89x9hYehoaZVwF35oPlHriquFdTl4iiDA0Ad6StX1I09HE2tvunLc456Ef1gFGJTagYljG1YIh5Kn2LbeAsC9jySIZiAXS5M7uEimvsFxaF5uHe8Sz5gWC2D3HnW%2FpoJkllP%2FwTuuxAgmh458VHMn3GZsdJt1kOtxqt6DcOGL5oSoC7UmkkFubHSPtIttoIg3jSAOife1Gko2gZyErbnGyTvK%2FlyrMLK8rM4GOqUBWfrdq81TG4QyHc41iFymsy0kcBswk6AcJqz3ezuOL1PxT61ccreuF%2FrbaV%2FL%2F7m%2BTuLvYu2wZnPjJGt8g6QBVAA3LnzvRLqCk7RTcD%2F3vtJRkJpZN7mPB%2FLwmnAbayYlGNxlC8Y8c9ahdciNxFfDbHzwIP4Pu3iM7bW%2FxEpfU7C7lejF5hIhJ8JuqFi8oqXXG4koKyne84L77ZEwGHGq4PyFLDnE&X-Amz-Signature=c6ea7336e25fdb42cf7c09c60fbb87d79c307a25e3d4a4ccf4151084c01e76c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLETXGF7%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCsgQzeV0BkfbTgYb5RUR%2FJd4w32hwXqV3A4YqWK7YUlgIgP45HcCT1PpDdQfZJJMxA4klfvaDLMAXGhUVTAFFx81oq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDO1HTyEDiVL%2FeAl7uyrcA33FB6gWJIBRtJxVbrtMVZS8e5Fd8O%2F%2BxLoy4rCZO62kbKvNNNvibJ2n0axPZMN3uVxLgR59moGGdLidZQidLHKgsNLd2iNDgYVYxR2Zt3%2F%2BmGHMHN%2FFfmWj4jGZ%2FbK6HJcDFJBaYVBlzMAA2okPzXVgsv9y9v1L51GvcezyrtuqsJkZmN5QrEjJC0BN6DCK098gzVgEHJuCHkxP6ZHwx0%2Be7TFH7L4flhp5ekm87SBoupNDd5DzRJ0xrPTlTXJdmqMQY3BO1IhTEUo1PpH39GJ44mECUJRK2fwPH8x0vPvhiJOoSYhgAzKJwXnV6FKtdPOvrJqH29Adx5dfdY0K%2F4SlKGjc3LWdJDKjRmog0IlVGXy%2BenXdfMzpbG%2B8o0h4pzl3cg8OOViWI9odgDnWLnRVTxox0o%2B89x9hYehoaZVwF35oPlHriquFdTl4iiDA0Ad6StX1I09HE2tvunLc456Ef1gFGJTagYljG1YIh5Kn2LbeAsC9jySIZiAXS5M7uEimvsFxaF5uHe8Sz5gWC2D3HnW%2FpoJkllP%2FwTuuxAgmh458VHMn3GZsdJt1kOtxqt6DcOGL5oSoC7UmkkFubHSPtIttoIg3jSAOife1Gko2gZyErbnGyTvK%2FlyrMLK8rM4GOqUBWfrdq81TG4QyHc41iFymsy0kcBswk6AcJqz3ezuOL1PxT61ccreuF%2FrbaV%2FL%2F7m%2BTuLvYu2wZnPjJGt8g6QBVAA3LnzvRLqCk7RTcD%2F3vtJRkJpZN7mPB%2FLwmnAbayYlGNxlC8Y8c9ahdciNxFfDbHzwIP4Pu3iM7bW%2FxEpfU7C7lejF5hIhJ8JuqFi8oqXXG4koKyne84L77ZEwGHGq4PyFLDnE&X-Amz-Signature=e114a541eb91670dd80644efb59719d6c1699fb3d2462256c0ebd1bb650dc0c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
