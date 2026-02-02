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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CCIJ5D4%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIFfdGq3LvggSF581YH1NDzQYnRJ7ugxpjqhsizMGp8jqAiBECIQkiqeyoZ1mwLF0HNqRV21xmPYihKEzV%2ByVYHI1eSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzzFn1rxwi9m%2BqrWUKtwDRJEEtqXkM1h0Ri13NIt71xXImkt%2BilmfSC7UGX6vMraqTfDxA%2BkSRRN8XzbpKyoPPFzb4ELgXEeGuhHUVhmaR8niY69ozAoSViklrwjIooICJ0VjETyGEk6MPa4yry2RZOP25UhKNqlOIxobngq6QSkG3pvK28kZEimtA%2BFuRDAn%2BYnkh7fIxNpjjPsZRzOGIHsvm0OkO71KXsl3j2Zt01%2BLj%2BdMHxf3vUARBiRAzDTP%2BbHHeMWT8uUb%2BT5aI3MsiWfnQhs0ebS%2BakeCMzBZvToX61HEoV7fhqzJNhwa3rnq4fn7esuBYi3dsgmMLLyOsWYZxXnwL0HO5K1wGLYD6NrClNJ9SClQzFNmr3cjGlItVLlhvzYX2mdwZemX5YiWCGpMReQ60KqsNx4TYDjT4wmpB4pGi%2BYywla7VjxvsXO%2FFGbYAqZOpIrq4mRpWDzjeMzqslZUezZ%2B2PnmGArg%2BXv3K3kQuIkJx%2B5B0VY0W%2FA1oh0%2FkdA9gUCScDndFOWIzcUm%2BCA9OG8o0gpvYeYp1XLtSq9ZoJB3lqdjS8bYVj60%2Bv2J%2FOApGNisNBhM0h3I%2BMZ%2FjISDsv6nQ%2FBLY76U4kuIKxikwF428eBk87ZDvhcb9DzxFeFmLlz9GPYwhIeAzAY6pgHP1trhTkdrohiMKAgOLMPBwO99iJ0nvViZSIe1VZkZQhJDAY6UcFRBGmMpK8%2BJy5iyVM6TvQN%2BzhbCWtnEVztiSZrQKHLRr%2B6uXFdcuQZFGTwtlOwUWAwcpKEKjYQKS0djx712%2FZsPz8bv3feM3HPtnxChuqRo0Hy8wXt7WJ74btGX4IPP%2Fav2VjZ7jvWyXJzG8o4ndQOuIcqbUFiPhahLtfqp3pWp&X-Amz-Signature=7891df67ec4cb1b5aecb58f199133c0ef61dca2d08a9275040193da98487e83d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CCIJ5D4%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIFfdGq3LvggSF581YH1NDzQYnRJ7ugxpjqhsizMGp8jqAiBECIQkiqeyoZ1mwLF0HNqRV21xmPYihKEzV%2ByVYHI1eSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzzFn1rxwi9m%2BqrWUKtwDRJEEtqXkM1h0Ri13NIt71xXImkt%2BilmfSC7UGX6vMraqTfDxA%2BkSRRN8XzbpKyoPPFzb4ELgXEeGuhHUVhmaR8niY69ozAoSViklrwjIooICJ0VjETyGEk6MPa4yry2RZOP25UhKNqlOIxobngq6QSkG3pvK28kZEimtA%2BFuRDAn%2BYnkh7fIxNpjjPsZRzOGIHsvm0OkO71KXsl3j2Zt01%2BLj%2BdMHxf3vUARBiRAzDTP%2BbHHeMWT8uUb%2BT5aI3MsiWfnQhs0ebS%2BakeCMzBZvToX61HEoV7fhqzJNhwa3rnq4fn7esuBYi3dsgmMLLyOsWYZxXnwL0HO5K1wGLYD6NrClNJ9SClQzFNmr3cjGlItVLlhvzYX2mdwZemX5YiWCGpMReQ60KqsNx4TYDjT4wmpB4pGi%2BYywla7VjxvsXO%2FFGbYAqZOpIrq4mRpWDzjeMzqslZUezZ%2B2PnmGArg%2BXv3K3kQuIkJx%2B5B0VY0W%2FA1oh0%2FkdA9gUCScDndFOWIzcUm%2BCA9OG8o0gpvYeYp1XLtSq9ZoJB3lqdjS8bYVj60%2Bv2J%2FOApGNisNBhM0h3I%2BMZ%2FjISDsv6nQ%2FBLY76U4kuIKxikwF428eBk87ZDvhcb9DzxFeFmLlz9GPYwhIeAzAY6pgHP1trhTkdrohiMKAgOLMPBwO99iJ0nvViZSIe1VZkZQhJDAY6UcFRBGmMpK8%2BJy5iyVM6TvQN%2BzhbCWtnEVztiSZrQKHLRr%2B6uXFdcuQZFGTwtlOwUWAwcpKEKjYQKS0djx712%2FZsPz8bv3feM3HPtnxChuqRo0Hy8wXt7WJ74btGX4IPP%2Fav2VjZ7jvWyXJzG8o4ndQOuIcqbUFiPhahLtfqp3pWp&X-Amz-Signature=c052338897746ecb9e6e47c1595099a026f4a6cd9c4f2c9dc02b2abfa78e7420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
