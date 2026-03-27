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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GI45PXC%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCMXGMtPr7OXsd3YIrA%2FK6%2BMsm84%2B28%2B7V6GKcho1PS8gIhAMassGqHxwZi7%2FE85WK86AwrH4enYyzKbKNM0p37%2BPgdKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5CIlFIqxwR1AkA%2B0q3AOSwAfc%2Fh7Ba9tx%2B53e35QKjcVSTDT3qEXAvhwefQ79BqEOjGOrkxNtai0U5ZZDZTyaJ1hn2LxJ5yv%2BfBtpVyaX1A%2F4yQspzJ3HP5y4ViJRqXJrbmaqeOHAcMosGeoxf52aKnCIzhoc4TyZg4Szz5OIiorFlQFdOfIt3eG18hZ3eoA0%2BbIMKjaeuHoviHjNm6CGa37iYUW7i6h3uk46WUs%2BLgxzysohTh1OMh%2F5Y8Q1CD3SvpfEtZnxtzu9%2Fr6x5yWHUuUtkX5Vd2Hi2nNRY%2B4rsJ6DQwzcw8cJo4kbdQqvib2B2dMat6ZTss0WUgILDVroWXDWqmxGOcJxWHnWKfvroGnT0L2ySu4zcrnmNkOOjRl7U6zEcfxJRf7S%2FdEA2acW42Yts1CbbBi3wHoTtDpx2AXdzV4pvgM3VxzG7j2XseUfAnsRA2MDSbrZAKN3iWHyUEbapanPv6h864Tfdje13AOvbUczn1XhP%2B7T%2Fe48FpCDlkTlAjCVSiN3Hor4bOr5hxVCtt%2FfeoXcMvkFyRP8wKYudt7JggTsOJmrj5lb22ZYZxnVGCYTj8JFXKH9H7Yf3Tq8ZlfzLQDjrlKk88%2BgSPfWCM%2FkoBnmWgPiQyaDlN5SNXgnO9EgHgfpDjCO8pbOBjqkAVFE7aLzG7CyqJ0Dmy9saWiM%2BlFrTdlHMThaUNWa6rbTizyz%2FyBd1FaavFwfjmr78DMKhW8VBQ1TfNq2gejOUG%2FQSGJR59JytvJCp%2F5yAPkWoBckxDeMYPh0%2FvQIus1kzP3MGepxNL7FrdHHZ%2F7MedVA1HhatBQxM4CqLCw6MD3xCm6Z0Yj5dFKJZEeMDVTGqLH3mrFBnrE6VVRKk%2FZgCcb%2BxK2Q&X-Amz-Signature=27b54720691a861b22dd67a09d0758ea317be13678c0c8b46c33d9b978f4b102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GI45PXC%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCMXGMtPr7OXsd3YIrA%2FK6%2BMsm84%2B28%2B7V6GKcho1PS8gIhAMassGqHxwZi7%2FE85WK86AwrH4enYyzKbKNM0p37%2BPgdKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5CIlFIqxwR1AkA%2B0q3AOSwAfc%2Fh7Ba9tx%2B53e35QKjcVSTDT3qEXAvhwefQ79BqEOjGOrkxNtai0U5ZZDZTyaJ1hn2LxJ5yv%2BfBtpVyaX1A%2F4yQspzJ3HP5y4ViJRqXJrbmaqeOHAcMosGeoxf52aKnCIzhoc4TyZg4Szz5OIiorFlQFdOfIt3eG18hZ3eoA0%2BbIMKjaeuHoviHjNm6CGa37iYUW7i6h3uk46WUs%2BLgxzysohTh1OMh%2F5Y8Q1CD3SvpfEtZnxtzu9%2Fr6x5yWHUuUtkX5Vd2Hi2nNRY%2B4rsJ6DQwzcw8cJo4kbdQqvib2B2dMat6ZTss0WUgILDVroWXDWqmxGOcJxWHnWKfvroGnT0L2ySu4zcrnmNkOOjRl7U6zEcfxJRf7S%2FdEA2acW42Yts1CbbBi3wHoTtDpx2AXdzV4pvgM3VxzG7j2XseUfAnsRA2MDSbrZAKN3iWHyUEbapanPv6h864Tfdje13AOvbUczn1XhP%2B7T%2Fe48FpCDlkTlAjCVSiN3Hor4bOr5hxVCtt%2FfeoXcMvkFyRP8wKYudt7JggTsOJmrj5lb22ZYZxnVGCYTj8JFXKH9H7Yf3Tq8ZlfzLQDjrlKk88%2BgSPfWCM%2FkoBnmWgPiQyaDlN5SNXgnO9EgHgfpDjCO8pbOBjqkAVFE7aLzG7CyqJ0Dmy9saWiM%2BlFrTdlHMThaUNWa6rbTizyz%2FyBd1FaavFwfjmr78DMKhW8VBQ1TfNq2gejOUG%2FQSGJR59JytvJCp%2F5yAPkWoBckxDeMYPh0%2FvQIus1kzP3MGepxNL7FrdHHZ%2F7MedVA1HhatBQxM4CqLCw6MD3xCm6Z0Yj5dFKJZEeMDVTGqLH3mrFBnrE6VVRKk%2FZgCcb%2BxK2Q&X-Amz-Signature=762c95c0126b41526694fd80cbbd39a8fcf453074f62a60f3defa86729565383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
