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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRY7ZIDG%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCaDNMqi%2FqxE9ieAQ91eGNdGIHj9pXJi8HdlXZGlUOV4QIgdmnX3rZA2XvW8Y0Fd2uSZ6PaKRszcXnche3SPed76sQqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1W7eKxcKN6WVB6syrcA2sXu2CkFNkFHi9NUPXgwxYbt%2Byt9pEJmk03OcKfMrK%2FSVaTuLUxZsor2wiMDOZCUfFdxa4SfvP7OS7g2pEgRrOBV6l%2FTdCCCeGcyI3fEEWdLF0b2uzoMSamF8q5C0Ti3CSAP04SEyNOXhDCQy6x88LCAxVbxsymtwMLpXqvqI7UXy2sITcyHiNlQWrNj3dwHlwZz04qUkMMISi2UPXAeq0re5L4fBsFzugAxdLspbQrm7hOduygmVzpO6067f6SjP0d8xFVel0PJHGS6HpMPi0s5I%2B42m8EJlXIngTnBBbwXvdHgMJ3pQjhgYezXQMiZbTZqdKSQOY7iIhz8d49NYmCVrBK0jfft5JWqnmvmrIi%2Bi0nmHkITf3zeilp2q%2FmgsyematyXlUW4u4cch0eCT4%2FwtAqxwFXDXQBcOI9CnkHoXV98142PLVbxQ90Eb0s3C7rTND6UO8aETybpOU7JIM8xy7e1piqaKaY7uaanqojYbLjonlofqsf0VTd97GxQh7dITiV2WPs6he%2BEQ%2Fh2tblIbyajEgwhr13CBH6THkQvaXYvhZrIWBlHrj%2FDMwGY1MLHAt%2BcE0nBfn%2B9KIoPK%2BoidVBIc1FrgEUlT3Z3H3Vw5%2BJMdC10gB5kyosMJ2kl9IGOqUB8%2BsWyw53pkjBfdR3PZApzcE2flKha%2FSKxvScX1i7UFopENvyHhy%2BXvOfkdrszVWOIhY2dTDqxZWAV3FjDzsJn6l6DutkfDsjpDb8RYd2VvcHt72Cy6wmIo%2FTOhof%2FjQjuDrpWLP4BHJx0MRcW%2FOKKmcrSXDYmygRS93fUfZRz7K75JHGCVgfYX%2FRi3yajiF8Ay6j6Z%2BBF4oEDEm%2BOlkCxA8L%2B9eT&X-Amz-Signature=bcfd6aed58a0b8ce4797a7900a87bae84e059f99b2a3f3251629a8b72f366dc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRY7ZIDG%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCaDNMqi%2FqxE9ieAQ91eGNdGIHj9pXJi8HdlXZGlUOV4QIgdmnX3rZA2XvW8Y0Fd2uSZ6PaKRszcXnche3SPed76sQqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1W7eKxcKN6WVB6syrcA2sXu2CkFNkFHi9NUPXgwxYbt%2Byt9pEJmk03OcKfMrK%2FSVaTuLUxZsor2wiMDOZCUfFdxa4SfvP7OS7g2pEgRrOBV6l%2FTdCCCeGcyI3fEEWdLF0b2uzoMSamF8q5C0Ti3CSAP04SEyNOXhDCQy6x88LCAxVbxsymtwMLpXqvqI7UXy2sITcyHiNlQWrNj3dwHlwZz04qUkMMISi2UPXAeq0re5L4fBsFzugAxdLspbQrm7hOduygmVzpO6067f6SjP0d8xFVel0PJHGS6HpMPi0s5I%2B42m8EJlXIngTnBBbwXvdHgMJ3pQjhgYezXQMiZbTZqdKSQOY7iIhz8d49NYmCVrBK0jfft5JWqnmvmrIi%2Bi0nmHkITf3zeilp2q%2FmgsyematyXlUW4u4cch0eCT4%2FwtAqxwFXDXQBcOI9CnkHoXV98142PLVbxQ90Eb0s3C7rTND6UO8aETybpOU7JIM8xy7e1piqaKaY7uaanqojYbLjonlofqsf0VTd97GxQh7dITiV2WPs6he%2BEQ%2Fh2tblIbyajEgwhr13CBH6THkQvaXYvhZrIWBlHrj%2FDMwGY1MLHAt%2BcE0nBfn%2B9KIoPK%2BoidVBIc1FrgEUlT3Z3H3Vw5%2BJMdC10gB5kyosMJ2kl9IGOqUB8%2BsWyw53pkjBfdR3PZApzcE2flKha%2FSKxvScX1i7UFopENvyHhy%2BXvOfkdrszVWOIhY2dTDqxZWAV3FjDzsJn6l6DutkfDsjpDb8RYd2VvcHt72Cy6wmIo%2FTOhof%2FjQjuDrpWLP4BHJx0MRcW%2FOKKmcrSXDYmygRS93fUfZRz7K75JHGCVgfYX%2FRi3yajiF8Ay6j6Z%2BBF4oEDEm%2BOlkCxA8L%2B9eT&X-Amz-Signature=601db7d13d038c10fe4ba75cb2bc57aad021bdd45944d1786d9023465dceac8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
