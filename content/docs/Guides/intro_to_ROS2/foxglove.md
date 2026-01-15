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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLYUKVOX%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIFlwCHXaumMqFHF9XTR6Ako33cG%2FckYnyWSmKN2bu63DAiEAnZtWGmd3DhbOedG8M4H0QYYmXOCNba%2BMCCJn%2FqoQsUwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNZeB48CBMP9dbr%2BrircA90740iZz7%2Bnemhe8QagYy4MK9A8f%2B6%2B8W63bxaPuNsmzwB0nGx1kzBlFiGrA48AqN3L9VKex%2BoSXgCVkf2IJ55SzNe7PYJbYC8pYHrXaGbqB8uX4sSru2VxOTNt%2BuxzADzlryAK9fdqqS8BW2RohN3WCZ%2FLm3jXxsTWD%2FutM%2BDqgDkLgDdtnEgsEJjIm672NZ6UgfHbyhuB%2FtF7%2F6g8C6WzFDkB0w%2B5InIQk%2FfDnFbTiIXNZijb7%2Fh8b0tIyJzGvplSZJyQXWEgp%2B%2F7cGe%2B0Rbm%2BdJvh3TqQC7qQKY8Zoqae%2Boh8ANYwcipla9elz0B8qORz91uREHXOEgIRBD%2B8y9ZA%2BggwAlChx049JYK95wSTYMGl3gw6y0vhaHMs9Jj78JrA6qwySEk6wajwgXIiPN%2BoiF2%2FCbsqQYr%2FXtIjVF%2BaJ6UYszaxw4sveZsKqupRiF2qnJY195GLN6JeS68noBuy1pIIElOCl4hdScsN4yYmKyZoSVCrDzNicRfhZq7VIO1b6i%2FaCAYYl4rMECJdvNM%2BL9G7d%2BEhq5DNdLT8eE8kq5CzOMfeNuA7uMx3b1xU5JojL2NkD3JdM1lY7ZFQfmwxWuijG77H8Ndj6x9ZLU0gZ1W9Co028tDd213MMH%2FoMsGOqUBcrw3W7%2BULUT1YSFdTxwX3UIAlL8W67m7Mjx4CY2JSVnSHyF73AFCkNiXQfu0teK%2BpRcsVtL7gf1Mq9Gn0WLZZdWVJ1LxGvU9kCkkZhJo54Rcre1p%2FbTEF%2F3Dj3ZVE2EEkSR4P47KoynqpTnmi5smUx8YVJKJ9gUYALQplldSuFGrjD%2F8DMcjZxfqgx48c3pfQlU0NPapPLU%2Bt%2FVBlXv7SfuIFypv&X-Amz-Signature=e1feb9dd431ec9fceb601dae88483c6ae293c9330bd2900489a501556e5cf2a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLYUKVOX%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIFlwCHXaumMqFHF9XTR6Ako33cG%2FckYnyWSmKN2bu63DAiEAnZtWGmd3DhbOedG8M4H0QYYmXOCNba%2BMCCJn%2FqoQsUwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNZeB48CBMP9dbr%2BrircA90740iZz7%2Bnemhe8QagYy4MK9A8f%2B6%2B8W63bxaPuNsmzwB0nGx1kzBlFiGrA48AqN3L9VKex%2BoSXgCVkf2IJ55SzNe7PYJbYC8pYHrXaGbqB8uX4sSru2VxOTNt%2BuxzADzlryAK9fdqqS8BW2RohN3WCZ%2FLm3jXxsTWD%2FutM%2BDqgDkLgDdtnEgsEJjIm672NZ6UgfHbyhuB%2FtF7%2F6g8C6WzFDkB0w%2B5InIQk%2FfDnFbTiIXNZijb7%2Fh8b0tIyJzGvplSZJyQXWEgp%2B%2F7cGe%2B0Rbm%2BdJvh3TqQC7qQKY8Zoqae%2Boh8ANYwcipla9elz0B8qORz91uREHXOEgIRBD%2B8y9ZA%2BggwAlChx049JYK95wSTYMGl3gw6y0vhaHMs9Jj78JrA6qwySEk6wajwgXIiPN%2BoiF2%2FCbsqQYr%2FXtIjVF%2BaJ6UYszaxw4sveZsKqupRiF2qnJY195GLN6JeS68noBuy1pIIElOCl4hdScsN4yYmKyZoSVCrDzNicRfhZq7VIO1b6i%2FaCAYYl4rMECJdvNM%2BL9G7d%2BEhq5DNdLT8eE8kq5CzOMfeNuA7uMx3b1xU5JojL2NkD3JdM1lY7ZFQfmwxWuijG77H8Ndj6x9ZLU0gZ1W9Co028tDd213MMH%2FoMsGOqUBcrw3W7%2BULUT1YSFdTxwX3UIAlL8W67m7Mjx4CY2JSVnSHyF73AFCkNiXQfu0teK%2BpRcsVtL7gf1Mq9Gn0WLZZdWVJ1LxGvU9kCkkZhJo54Rcre1p%2FbTEF%2F3Dj3ZVE2EEkSR4P47KoynqpTnmi5smUx8YVJKJ9gUYALQplldSuFGrjD%2F8DMcjZxfqgx48c3pfQlU0NPapPLU%2Bt%2FVBlXv7SfuIFypv&X-Amz-Signature=2c404f3e5aad7f5a6840ebc388df2cc0652563daaf492eac348d417dcd63b5bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
