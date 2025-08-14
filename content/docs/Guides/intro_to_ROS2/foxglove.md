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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UTZ2RUS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FukjC79IWE4InYz7jMW5EdnKseJwohetUqsBdbl4LVAIgB50bM%2FEgPCq2AfGpVPcb0o%2FvOord9guTnFERYkwQsfAq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDOfKRvFYAmb8V7uthCrcAzcRRBkrCdDmpFUxZfbXKR%2Bpk9NOFu4ZRbv10EPn%2F2jgXYNDi8sFrwXFTlyuqJZtqyW1DSpjOOPk%2BeV1jnVrIHDGqTtfOjcXzLypCS7TCvd%2BMNIOuf%2FPUb2O8r5Oj3SLNyA38SBVS3ZUHrBD5wZupPpGCgx3yRodDZ3KU4yE2qMBw7wuIXsNqTwKvmokGbGJdkp%2FXgbwfGhq4fnqjUgIMIKQdL2qhrWBAam%2BkoaXdw9KHmSn30uyWTE8eEusg9%2FoV8sOXj9NlUNrZ2iofim6zjUlE0Q2ArdtVta4XQpU9sCSh0cGosKy0m0hYCgXi6xtovpZHIgfISvvwHIS5Un%2B6aGGNmwtlTS9qOXOOTDP6Yn8lwqr6grv4TI3MP4v6hZZ2wSkcaLzjpjZORya5DQ3lvhHjBhhmkrnnZ%2Fxh72KK7FCORc6AWVpoUjd5t%2Bl2VKyul3YDTRHZBM%2FAnnt01mXVSjy9wgp%2BQHO%2BKVaSDvAlsZOORHtn8kCEQDB1UgfYuKPDlNxdLLavciUSrxUYvC3oJ7%2B94Bq%2FNLbM%2FWaKwQkpgFCVy175CIFQ25aoaWiCyv9YFAw0OCDAd%2FuqQ5WvUsGlHtJc8baIR07viJoC%2BAK9%2BqyTWPBONf9ecloam48MLuL9cQGOqUBG0zToWRxRz8WI0ydVgIYTKR3DXwrqnSS9DxchShS73uM%2FaAs6OjqupL9CAZpqlpxWcIM2P6sO8jPT6YhrWUF0hJCzva2HPhUgUGjMFMmCjd1Qv%2F2WHTWGvDjK5lNZg65poHMU8PllgY%2Bg01Dv62H2pb%2B9jWkNU%2FEq0Lu%2FTqySh0B8vfASivL3IU21fJVvmbuhRNiukoCZfyEn2bh%2BOwWW%2BsDw%2FQ8&X-Amz-Signature=c45beb77d5dd0118f6db88f62991ae54914d22e686414afa27b62ed54eab124e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UTZ2RUS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FukjC79IWE4InYz7jMW5EdnKseJwohetUqsBdbl4LVAIgB50bM%2FEgPCq2AfGpVPcb0o%2FvOord9guTnFERYkwQsfAq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDOfKRvFYAmb8V7uthCrcAzcRRBkrCdDmpFUxZfbXKR%2Bpk9NOFu4ZRbv10EPn%2F2jgXYNDi8sFrwXFTlyuqJZtqyW1DSpjOOPk%2BeV1jnVrIHDGqTtfOjcXzLypCS7TCvd%2BMNIOuf%2FPUb2O8r5Oj3SLNyA38SBVS3ZUHrBD5wZupPpGCgx3yRodDZ3KU4yE2qMBw7wuIXsNqTwKvmokGbGJdkp%2FXgbwfGhq4fnqjUgIMIKQdL2qhrWBAam%2BkoaXdw9KHmSn30uyWTE8eEusg9%2FoV8sOXj9NlUNrZ2iofim6zjUlE0Q2ArdtVta4XQpU9sCSh0cGosKy0m0hYCgXi6xtovpZHIgfISvvwHIS5Un%2B6aGGNmwtlTS9qOXOOTDP6Yn8lwqr6grv4TI3MP4v6hZZ2wSkcaLzjpjZORya5DQ3lvhHjBhhmkrnnZ%2Fxh72KK7FCORc6AWVpoUjd5t%2Bl2VKyul3YDTRHZBM%2FAnnt01mXVSjy9wgp%2BQHO%2BKVaSDvAlsZOORHtn8kCEQDB1UgfYuKPDlNxdLLavciUSrxUYvC3oJ7%2B94Bq%2FNLbM%2FWaKwQkpgFCVy175CIFQ25aoaWiCyv9YFAw0OCDAd%2FuqQ5WvUsGlHtJc8baIR07viJoC%2BAK9%2BqyTWPBONf9ecloam48MLuL9cQGOqUBG0zToWRxRz8WI0ydVgIYTKR3DXwrqnSS9DxchShS73uM%2FaAs6OjqupL9CAZpqlpxWcIM2P6sO8jPT6YhrWUF0hJCzva2HPhUgUGjMFMmCjd1Qv%2F2WHTWGvDjK5lNZg65poHMU8PllgY%2Bg01Dv62H2pb%2B9jWkNU%2FEq0Lu%2FTqySh0B8vfASivL3IU21fJVvmbuhRNiukoCZfyEn2bh%2BOwWW%2BsDw%2FQ8&X-Amz-Signature=e2f64d11a88b0248af7b8f185e72b71269ca6547cceb788fed40212b9718a89f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
