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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E2GLMFO%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCstHgkd4zaNeZ%2BOw5O1upSYetdcQKMlxaf962aiiOQcwIgMHReod2oKiC2BOSjdgTwA5Y4AigFqnzvnMucyEvaW7oq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDCjwqloq2oy5s4kh9yrcA2z2FCyZb4fla9KWrw9D5XKEkYj9nWnbgjQtTwSnyWRsgDflBHk732mNePO7MS1ZlFW02x%2BZ2FzcLT7TYlrV5JrJiRMJRR110IN4x6WzHiUzPVs4SbKVmpZihf7mMjR1%2Bd8BYleVSC2BZTibS6GlcIEmzo7mJMyvDLDTgTY2yK4QW3TzaimmzxWAIFsEdCoQXoNlRN1BQUG8qKo6MRpDkdfdQhxr4KfqfA4E%2BZsyHANgm5TUNPyIbYqTE3RK7I4vjb7TvlNN70gnH%2F3EK2%2BMZeQFjZuwzQcKjqNbQpbD1K7zkK1qqDxOTSvBDS8ARpiG3MkxJHf98l1P4xhSwgrWIoERUXoh0Q7ouOy19Hh1a1mC4zfmWA4jRn0Qc4aATMOLqLT1K7bSvs6CZSjXTnnmphAVVaX4KYJeNZ2PgUA3gT8SIEN1jwUK0NZIBzQ0ULOCNTVCSVAGasU%2F1G0Kkrr2%2B3KhaDEe8gbIZnJq8bstDMwJ9Du59cKzCgTB6WaacSVGD8jflYS%2FUu1jwnG22I%2FBdBGmdoeK%2BjPYSWbRr56VPZSIEyvbZD%2FNzC0H8PW%2B6VJIRP2dysOfglPBMrJwTxEXgxTjIlu6cdYGsC0%2BmOwF6uvNLgqR6Cq%2B1LlsmOd9MJef68cGOqUB6LONnLKs%2BV7E3mlICgv1WeioyaKKjlvsFGuFEkoBpTuIOFGS6qP6kzP8wnSpvf0Sj0ISj%2BQLyoDpxH4TUSBfwddk6MNj6pjLkCZI45%2FBYBI3u4m3IZJjm%2BaUFrymjJZAcphLaRXuvJSEePRluKH%2FKoRW1bhDGCk%2BX%2BpkIlw%2BbT8SSeHJ3I0EqfMZWsxZtFX3N3Xnu3SZyJm2klC3jqgILHDFsf7B&X-Amz-Signature=7f4101535fdde943db610bcf71c3eb52b51d58d181807b4c50d41a63b1c99143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E2GLMFO%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCstHgkd4zaNeZ%2BOw5O1upSYetdcQKMlxaf962aiiOQcwIgMHReod2oKiC2BOSjdgTwA5Y4AigFqnzvnMucyEvaW7oq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDCjwqloq2oy5s4kh9yrcA2z2FCyZb4fla9KWrw9D5XKEkYj9nWnbgjQtTwSnyWRsgDflBHk732mNePO7MS1ZlFW02x%2BZ2FzcLT7TYlrV5JrJiRMJRR110IN4x6WzHiUzPVs4SbKVmpZihf7mMjR1%2Bd8BYleVSC2BZTibS6GlcIEmzo7mJMyvDLDTgTY2yK4QW3TzaimmzxWAIFsEdCoQXoNlRN1BQUG8qKo6MRpDkdfdQhxr4KfqfA4E%2BZsyHANgm5TUNPyIbYqTE3RK7I4vjb7TvlNN70gnH%2F3EK2%2BMZeQFjZuwzQcKjqNbQpbD1K7zkK1qqDxOTSvBDS8ARpiG3MkxJHf98l1P4xhSwgrWIoERUXoh0Q7ouOy19Hh1a1mC4zfmWA4jRn0Qc4aATMOLqLT1K7bSvs6CZSjXTnnmphAVVaX4KYJeNZ2PgUA3gT8SIEN1jwUK0NZIBzQ0ULOCNTVCSVAGasU%2F1G0Kkrr2%2B3KhaDEe8gbIZnJq8bstDMwJ9Du59cKzCgTB6WaacSVGD8jflYS%2FUu1jwnG22I%2FBdBGmdoeK%2BjPYSWbRr56VPZSIEyvbZD%2FNzC0H8PW%2B6VJIRP2dysOfglPBMrJwTxEXgxTjIlu6cdYGsC0%2BmOwF6uvNLgqR6Cq%2B1LlsmOd9MJef68cGOqUB6LONnLKs%2BV7E3mlICgv1WeioyaKKjlvsFGuFEkoBpTuIOFGS6qP6kzP8wnSpvf0Sj0ISj%2BQLyoDpxH4TUSBfwddk6MNj6pjLkCZI45%2FBYBI3u4m3IZJjm%2BaUFrymjJZAcphLaRXuvJSEePRluKH%2FKoRW1bhDGCk%2BX%2BpkIlw%2BbT8SSeHJ3I0EqfMZWsxZtFX3N3Xnu3SZyJm2klC3jqgILHDFsf7B&X-Amz-Signature=a187ccd42e9ac0d98298fa438b281d2c4a682d89dafe9a0dfb32f73cbaf49046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
