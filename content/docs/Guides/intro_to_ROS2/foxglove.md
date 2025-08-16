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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KAH3G2P%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD4PNkQtVY4MvrBxSpZJV4MCgnV5DbHVm4VRK%2BdlcqdxwIhAKM%2BmjOwTpqiq%2F3ydGz6Gu3dgNnRuanfnk5dd4Ypml32Kv8DCG0QABoMNjM3NDIzMTgzODA1Igz2KMaHVEeDqTDiSgAq3AMxMlhrJa7r6XkBupxK%2FON5IjNXUlsRoAD3HSjxtK1YFI3SrOabxhlJxsemflgAbdHZh0xl25I1wZ4p4LJ76ATKn1keT8FpCb0%2Bunvhr%2FkDf%2BQ%2FJLXMrQKdz0Dq5ZWojECeBqBOBantViQcUmpKbQfd04ObNz87BnRVf2z1TbTjyJ83yrIUD%2BHLRMrcRelIot0QIeq5A6%2B%2FycqeXLzm%2FHnafmLz568SbTq0ZTxLNf5%2BqIqeJ2AutcK6xrGQOZNew8ZBv5yJznzHJf75ZQAbYk5a76x2%2FSpsE84O3meUJgHcIwUL%2BmEfGpDML8%2FDCchoDgP%2FWfZI0My6fFob9B%2BqyBvqFT6rRTHQq3ttP3xsVJaWu7oM%2BiL7DhMPAtl4k4u29S8RKheQ%2BmZ0i7LZSQ0PrH9PXRVvpQTiUjOrrA0nkko6nOcAOghJpkSWkaLhP3E%2B5DeMpZ7ehHNmrk9P%2FA7VFKhNhWgqqkjr1rBgLatnIcMApocWN7ahmk8nsZlLk3q9LnwjP1Dv4yyTJQ1BVzKQv2RudtxlP5I7pwVoDBqnJBf3j0UQN8HmlzoTI9%2FM7KljYrxXFWtyo8pz9fEhIiY9Ztf12rWsvMNssjbo5oUphjAtTbbj6hF%2Fcu9jKhh8NjC3ioDFBjqkAXoP8kdZrE79nyvL5HDa%2BXB1zEO5tv1QdTCvIK0B8rA42K%2F%2BvniXPceQsPlbuq%2F8Pt21dMq8gFETOJM6yBVgAVjzTA7%2FVGUvwXctAIPSWQnV%2FSwKR0YGLIzsVj9I%2F5NRumMbcVjFAs10n96MbE0JTwELeA%2Fr6qu7wEgrzweVvHbaa44yPszgoXcMvZXS7NqpG7weu9xCVxKuu%2BqPVdpgbtGjPRp3&X-Amz-Signature=54bb6f400b88aebca690c2eab7d57aa485d9e326a474b5be4137184c775eabb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Foxglove is similar to rviz however one of its biggest feature is its ability to connect over the internet.

This is nice for wireless robotics setups but still need a rviz visualization.

You are also able to record and play back sensor data and visualize it in foxglove.

## Using foxglove

First make sure you know the ip of your robot.

<details>
      <summary>How to get robot ip:</summary>
      To find the robot’s ip run on the robot computer:
  </details>

For now I recommend using your phone’s hotspot to connect between the computer and robot.

<details>
      <summary>how to connect robot jetson/rasberry pi to hotspot</summary>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KAH3G2P%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD4PNkQtVY4MvrBxSpZJV4MCgnV5DbHVm4VRK%2BdlcqdxwIhAKM%2BmjOwTpqiq%2F3ydGz6Gu3dgNnRuanfnk5dd4Ypml32Kv8DCG0QABoMNjM3NDIzMTgzODA1Igz2KMaHVEeDqTDiSgAq3AMxMlhrJa7r6XkBupxK%2FON5IjNXUlsRoAD3HSjxtK1YFI3SrOabxhlJxsemflgAbdHZh0xl25I1wZ4p4LJ76ATKn1keT8FpCb0%2Bunvhr%2FkDf%2BQ%2FJLXMrQKdz0Dq5ZWojECeBqBOBantViQcUmpKbQfd04ObNz87BnRVf2z1TbTjyJ83yrIUD%2BHLRMrcRelIot0QIeq5A6%2B%2FycqeXLzm%2FHnafmLz568SbTq0ZTxLNf5%2BqIqeJ2AutcK6xrGQOZNew8ZBv5yJznzHJf75ZQAbYk5a76x2%2FSpsE84O3meUJgHcIwUL%2BmEfGpDML8%2FDCchoDgP%2FWfZI0My6fFob9B%2BqyBvqFT6rRTHQq3ttP3xsVJaWu7oM%2BiL7DhMPAtl4k4u29S8RKheQ%2BmZ0i7LZSQ0PrH9PXRVvpQTiUjOrrA0nkko6nOcAOghJpkSWkaLhP3E%2B5DeMpZ7ehHNmrk9P%2FA7VFKhNhWgqqkjr1rBgLatnIcMApocWN7ahmk8nsZlLk3q9LnwjP1Dv4yyTJQ1BVzKQv2RudtxlP5I7pwVoDBqnJBf3j0UQN8HmlzoTI9%2FM7KljYrxXFWtyo8pz9fEhIiY9Ztf12rWsvMNssjbo5oUphjAtTbbj6hF%2Fcu9jKhh8NjC3ioDFBjqkAXoP8kdZrE79nyvL5HDa%2BXB1zEO5tv1QdTCvIK0B8rA42K%2F%2BvniXPceQsPlbuq%2F8Pt21dMq8gFETOJM6yBVgAVjzTA7%2FVGUvwXctAIPSWQnV%2FSwKR0YGLIzsVj9I%2F5NRumMbcVjFAs10n96MbE0JTwELeA%2Fr6qu7wEgrzweVvHbaa44yPszgoXcMvZXS7NqpG7weu9xCVxKuu%2BqPVdpgbtGjPRp3&X-Amz-Signature=7a04fd25dfcc674a297889b8a6a0a73fe5ccc86808e2347f9dddf5352cb26279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
