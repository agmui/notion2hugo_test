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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UZAIATC%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIETcm3VchhMorFjJ7AYZ9qkTapaDvxVKLvIQlcqZSo2xAiA4mgkd7FNcQ%2BuFZTpiGmQvbhPaheXo5CRBxhqT4AvTEiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMslJIzv2O1giVStvlKtwD%2FkaDazEBo04%2FnIRf8ptONnaZLsq4YfZstmPxUwa2DEommmoz0qvRxfxNO1IDDUPD6Rswiyg%2BCJad5%2FClflIMlu3yuI3JU7NOEcvX9g1%2FiYtOrZQsxQAgJF1CM96R%2BQdPbB%2B3UgrnsjyklRwJe6gbpefbR2ESyDqFBVIKX9zLMcofno67nGX07RH7ZnWqWCW%2BWPSLzGt2sQJG8sZfBoqjkWKsskIH9EglZWDaPaAsgF8HWtW91F1B2xkfv7QEQ%2FlOOp6kIvK8mkRcTuXbn9gWa%2FgvTHXeuETadIkC9qEYHTzPOCsWFzvj7W%2FFLlAUxQTSyi3sjI6ZZL8gZFkfg%2BZukUMDYBE6c0DkJ96QLumXI%2Bl8lD9mwFJFXVMjKszKKB3Bvzk0ChzDT0IZNP1L0M5zRuFk1mmTdb7WZ8YChB%2BcLdb%2B7vk8jb31OtH0wfTpiE8AcphojOTEIZBWmFKG4AIibQXNpC7bsSgdctfnp1n%2BwdY15gXwBLKnIwBceBheTH04rz7BXPJ3DGMA%2F2aTveiFv1QDa2GLlaHF3pfuN9HjMtgjrseaZKguGD4v%2FXpL4Jpr%2FWhO%2BLltJ9ivL0QnALC%2Bs1tcPVrgfwPG%2BcBW8zcAzpxfrxnADTfFGzKH%2BqQw%2FeuJxQY6pgG7Duz%2BdcMkUGb53ALePTYKfJzWt2Mjqigv8DX34TyuPe5zYPX9H4NyT7EP7E7oB1uj7tYpQdLL%2B7JKZ%2BkkRBt0CTKQEnEYfLjzr4RzIIUsIYSp9iom7uJCBJcCupj7d38OocygmYrSQwV8Jk7S2sHxcpjwkVYkt%2B81gvj00q5qZcRUHcflg7jxVKmI2BFfjfVRM%2FEpd6kSlW0Er%2FHwyVPE7Z3uayUR&X-Amz-Signature=40134253dc3787a3f289c58789c8cfd237bbd171f8717f849690258fea4708be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UZAIATC%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIETcm3VchhMorFjJ7AYZ9qkTapaDvxVKLvIQlcqZSo2xAiA4mgkd7FNcQ%2BuFZTpiGmQvbhPaheXo5CRBxhqT4AvTEiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMslJIzv2O1giVStvlKtwD%2FkaDazEBo04%2FnIRf8ptONnaZLsq4YfZstmPxUwa2DEommmoz0qvRxfxNO1IDDUPD6Rswiyg%2BCJad5%2FClflIMlu3yuI3JU7NOEcvX9g1%2FiYtOrZQsxQAgJF1CM96R%2BQdPbB%2B3UgrnsjyklRwJe6gbpefbR2ESyDqFBVIKX9zLMcofno67nGX07RH7ZnWqWCW%2BWPSLzGt2sQJG8sZfBoqjkWKsskIH9EglZWDaPaAsgF8HWtW91F1B2xkfv7QEQ%2FlOOp6kIvK8mkRcTuXbn9gWa%2FgvTHXeuETadIkC9qEYHTzPOCsWFzvj7W%2FFLlAUxQTSyi3sjI6ZZL8gZFkfg%2BZukUMDYBE6c0DkJ96QLumXI%2Bl8lD9mwFJFXVMjKszKKB3Bvzk0ChzDT0IZNP1L0M5zRuFk1mmTdb7WZ8YChB%2BcLdb%2B7vk8jb31OtH0wfTpiE8AcphojOTEIZBWmFKG4AIibQXNpC7bsSgdctfnp1n%2BwdY15gXwBLKnIwBceBheTH04rz7BXPJ3DGMA%2F2aTveiFv1QDa2GLlaHF3pfuN9HjMtgjrseaZKguGD4v%2FXpL4Jpr%2FWhO%2BLltJ9ivL0QnALC%2Bs1tcPVrgfwPG%2BcBW8zcAzpxfrxnADTfFGzKH%2BqQw%2FeuJxQY6pgG7Duz%2BdcMkUGb53ALePTYKfJzWt2Mjqigv8DX34TyuPe5zYPX9H4NyT7EP7E7oB1uj7tYpQdLL%2B7JKZ%2BkkRBt0CTKQEnEYfLjzr4RzIIUsIYSp9iom7uJCBJcCupj7d38OocygmYrSQwV8Jk7S2sHxcpjwkVYkt%2B81gvj00q5qZcRUHcflg7jxVKmI2BFfjfVRM%2FEpd6kSlW0Er%2FHwyVPE7Z3uayUR&X-Amz-Signature=d95010586bb79132fcd2bda5aa7909d0af2496dff6eed05e4222ae2772269045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
