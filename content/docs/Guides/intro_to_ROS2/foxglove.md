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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCUKU7IZ%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8K7OwdcAN2ItRp0vkjgDisAvMfbdMdo3Q5MnU3c0gHAiADWq7tc9KMzXLB%2FOjH0diW4RVgELGiIYoSHA1uRmbjQir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMUjOCXgj2r01vU0JOKtwD%2BAbA10gTy8PqTBd45KEvg9DVLrA1Hbw9trb1RwHrd8LqcxPczVmDmwNXuOT0g%2FpD2GWPs6f2%2B8AjhJIEOZ2ryzv%2BOxy1gzybYpBtGMxBSfPcnDuqy0bZHkwUmQEEtB4gyN9hQt%2Fi4l0mmmL1l2N32km48QwPURg%2Fv6B6%2FNwBn4bb0UuaO5JzgRq53a1%2BLSl9v3vfdff%2BAoA6syh6ayJkl1LOojejsfsMoOPbN4YFGlAdbvfitnRC8eSUZxmA36mUeV0y2eDGQOMsLl%2BlM8%2Fy3ugH024CTG7SUpm8kF0oqZGhkyo36OX5XJ6jFcoBK4Q3KZJN27YvGXxUzfv4t5oPLCNjOPdRUH8iV3pGSK8vbr6VwRliWCdHFiEYAGfWJztRu0n6AjVBKIgTiFyXzaKH%2BqgE0W%2BtB1R0kz0ilo59TqFewqAnj8R0dlEtlmCcIjX6wLNTRLSlJ44YCDBsqyeAZf2c2obFGy699%2BH4JN9zpLlM0kKAIa3lykkCkjOG7wNmDau0WuCWvkaaJBVhm%2BdSugxryMRr%2Bb%2Blne3wzN9ymLMVC1A90pzjnWWdqj9Y9K7USDq%2FzXG5W1iBkFv6WzSZn%2FdcCIpMI3JlOsIoo0jIhKiQm1BEG6gkV1jS8UEwndPe0wY6pgESME048DM%2BauR%2BAkWgIySQgx2%2FTlkXY%2FLoGMnjmq5fs2bogagx8m2ucVzLNnKhQIeZqD30ybNW3G8uPjb6iOyzmJ%2BSO7FlKVFS%2BDeR6NPuE7t6U9180RlAbzT0lDrf3%2BYLNQoHHWx7vGLb8UhEDgtz6kZy4oxng6gZM84ttVySi%2FVYkCelZEOskasV5hOGyPa2D2xN%2FoBo04tLET%2FHtujnDF9fLjiZ&X-Amz-Signature=0b1b638be92f1e187c49cd01e98003802e1fac8c0d7b9c912fa356f0309584ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCUKU7IZ%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8K7OwdcAN2ItRp0vkjgDisAvMfbdMdo3Q5MnU3c0gHAiADWq7tc9KMzXLB%2FOjH0diW4RVgELGiIYoSHA1uRmbjQir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMUjOCXgj2r01vU0JOKtwD%2BAbA10gTy8PqTBd45KEvg9DVLrA1Hbw9trb1RwHrd8LqcxPczVmDmwNXuOT0g%2FpD2GWPs6f2%2B8AjhJIEOZ2ryzv%2BOxy1gzybYpBtGMxBSfPcnDuqy0bZHkwUmQEEtB4gyN9hQt%2Fi4l0mmmL1l2N32km48QwPURg%2Fv6B6%2FNwBn4bb0UuaO5JzgRq53a1%2BLSl9v3vfdff%2BAoA6syh6ayJkl1LOojejsfsMoOPbN4YFGlAdbvfitnRC8eSUZxmA36mUeV0y2eDGQOMsLl%2BlM8%2Fy3ugH024CTG7SUpm8kF0oqZGhkyo36OX5XJ6jFcoBK4Q3KZJN27YvGXxUzfv4t5oPLCNjOPdRUH8iV3pGSK8vbr6VwRliWCdHFiEYAGfWJztRu0n6AjVBKIgTiFyXzaKH%2BqgE0W%2BtB1R0kz0ilo59TqFewqAnj8R0dlEtlmCcIjX6wLNTRLSlJ44YCDBsqyeAZf2c2obFGy699%2BH4JN9zpLlM0kKAIa3lykkCkjOG7wNmDau0WuCWvkaaJBVhm%2BdSugxryMRr%2Bb%2Blne3wzN9ymLMVC1A90pzjnWWdqj9Y9K7USDq%2FzXG5W1iBkFv6WzSZn%2FdcCIpMI3JlOsIoo0jIhKiQm1BEG6gkV1jS8UEwndPe0wY6pgESME048DM%2BauR%2BAkWgIySQgx2%2FTlkXY%2FLoGMnjmq5fs2bogagx8m2ucVzLNnKhQIeZqD30ybNW3G8uPjb6iOyzmJ%2BSO7FlKVFS%2BDeR6NPuE7t6U9180RlAbzT0lDrf3%2BYLNQoHHWx7vGLb8UhEDgtz6kZy4oxng6gZM84ttVySi%2FVYkCelZEOskasV5hOGyPa2D2xN%2FoBo04tLET%2FHtujnDF9fLjiZ&X-Amz-Signature=fc425afab2c19bd12874b789ce1af13cc51a692d53832f2627ba3bcac1531ddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
