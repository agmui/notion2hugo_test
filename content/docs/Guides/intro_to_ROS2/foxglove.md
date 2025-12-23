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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Q67MD5%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIDGS22c3m3IS1yUfS88J8QkldYAQm8RPBcccMqSSFcXsAiAuKFUGd7Zc%2BcnvpXVvRC6MWbXUSHN034FN8sQ6UUVQzir%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMZK7%2Fjb%2B8txEnPBvMKtwDkmiu%2BXbKxMOOiz2nDtuBqMvg%2B55RJ1D6AJlc3DXMBzp4tcx5T7v2VDovgXTMu3LBsK3DfyJCTbBGwsSLam5mUzcboq6QTX%2Fo4RVnguJPosTxyl8a3BlpiNpv4V54PUO5PXbIeVLkWfliWBBo1RqvTZAnVtXpq7kgkXvVADcf3b1eW7d9mukx3OPqB%2BjwsH%2BLoD%2F3VNJGJfoRycaYyo9cdfmos%2BKz4Es1e27z25A7KyrjPh76dz%2BAfj1%2BMZk1spyA1fPdKat3dQFcmwPp9XwB%2F%2Frw0f2qxtNHXc9%2BhAVRwBkugYCWmCUViuBkS6mKxKreAAu1P3cz9WaG2yDVrg32FoyEHS%2B6SxDwQW9hR%2Fxg3xnlyrtwcSQvIzTwYB6SvUmKLLrCu54RF7OtH0FjZlHEa0MBzpfPDUUclWSQnbeZwnsbczBZtEUtXkvl9DMZdRdwrHexS6DB%2B266UIuWhDsth77BttCHW%2BqKfMt2NKeQ0%2B58%2BjzSOfnKhyuOnkYCItPqKYqgtOyV96C7eRwoNoYknlTxHNLmiXL4B0SCyCttg4rPiEfIPsMroesJKmCIqY%2Bv9H2DpENZ%2BWa8wS2t%2B3VfdnnSZhFfppikJBVNN4LKid%2FUEhMXO9wgcNRHgukw6OCnygY6pgF2FabDS1F84OltERFdsPbMrZLl%2F%2BBJ4SlR0L4LOuqFSpV40UuCjynI%2BO%2B%2FwmWOP6rxEojm9VXSqoimSjT45yk2j7fV4feow%2FX1hge4bnK0A07UBoHERK5Cqok16sgS8MPhlEfkhO01rsP4qBmNKhB2jNTpDF%2By1GSctNYrRdlMsaVYwGI4XXpXdj4Tkcxhp45wOBr2YueGHBK9kSrqSsSc6LTGKSoA&X-Amz-Signature=accc9fa3e7c968c70b3b3487c667bc041fc2c9dd02d39b3758f3a46cdb49ab77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Q67MD5%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIDGS22c3m3IS1yUfS88J8QkldYAQm8RPBcccMqSSFcXsAiAuKFUGd7Zc%2BcnvpXVvRC6MWbXUSHN034FN8sQ6UUVQzir%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMZK7%2Fjb%2B8txEnPBvMKtwDkmiu%2BXbKxMOOiz2nDtuBqMvg%2B55RJ1D6AJlc3DXMBzp4tcx5T7v2VDovgXTMu3LBsK3DfyJCTbBGwsSLam5mUzcboq6QTX%2Fo4RVnguJPosTxyl8a3BlpiNpv4V54PUO5PXbIeVLkWfliWBBo1RqvTZAnVtXpq7kgkXvVADcf3b1eW7d9mukx3OPqB%2BjwsH%2BLoD%2F3VNJGJfoRycaYyo9cdfmos%2BKz4Es1e27z25A7KyrjPh76dz%2BAfj1%2BMZk1spyA1fPdKat3dQFcmwPp9XwB%2F%2Frw0f2qxtNHXc9%2BhAVRwBkugYCWmCUViuBkS6mKxKreAAu1P3cz9WaG2yDVrg32FoyEHS%2B6SxDwQW9hR%2Fxg3xnlyrtwcSQvIzTwYB6SvUmKLLrCu54RF7OtH0FjZlHEa0MBzpfPDUUclWSQnbeZwnsbczBZtEUtXkvl9DMZdRdwrHexS6DB%2B266UIuWhDsth77BttCHW%2BqKfMt2NKeQ0%2B58%2BjzSOfnKhyuOnkYCItPqKYqgtOyV96C7eRwoNoYknlTxHNLmiXL4B0SCyCttg4rPiEfIPsMroesJKmCIqY%2Bv9H2DpENZ%2BWa8wS2t%2B3VfdnnSZhFfppikJBVNN4LKid%2FUEhMXO9wgcNRHgukw6OCnygY6pgF2FabDS1F84OltERFdsPbMrZLl%2F%2BBJ4SlR0L4LOuqFSpV40UuCjynI%2BO%2B%2FwmWOP6rxEojm9VXSqoimSjT45yk2j7fV4feow%2FX1hge4bnK0A07UBoHERK5Cqok16sgS8MPhlEfkhO01rsP4qBmNKhB2jNTpDF%2By1GSctNYrRdlMsaVYwGI4XXpXdj4Tkcxhp45wOBr2YueGHBK9kSrqSsSc6LTGKSoA&X-Amz-Signature=19aecb5214c33335b8d49d4ec0e464978aa894e5f90b89b9d325f73a2eaf8fea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
