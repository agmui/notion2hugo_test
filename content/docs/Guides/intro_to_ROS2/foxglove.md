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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTGNO752%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFFf3NbRDM%2F%2BzTXG5AtXpDFegab0GsGBKrZY0pxDcv4iAiBiKTwzlc6SEfnkv3eEzhbUS46CUn6qGa91VZaRUiu73ir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMmmMKj6rdIgsw2xk5KtwDHUIgSE0q5uGrn%2BNfmkZK%2FaMt2YvhpesCXt6xDYUW4iJHhh7b8r%2BlQ5L3voQJYP5SByFulrWIxFo2eyZ%2FDq9BicRCNwQ0o2RBpKpwRf3AUcTUddshBQCkQ7j9GIRApIYMDtAfOYt77mXatKCgiN3UAJRvUZmKTEmNoHPISr3oxzjWJDIzbE17iY3gZ5G6nl8PfpiOTqu23WtfKPNjs%2FzTvbkLR1uiwtHO%2FeJQE8bC99AxTc80wOFE%2FkSIaeKKVyE%2Bl5%2B%2FkHMWHD5thcAOeb3AytawuxRi8SxYKUgpUBkuhU%2FT8QkoH%2BgTnslCPcaOVzvBCuCYWoagnY2oDv1uRzn0xL%2BrZCiIUwMG7cHSrB%2BB07XzvVjeazQfT0FGCW57yYcxVKWaIrBlURF%2B42Q5swjj64%2BlFTUZEDm7fapNn5kAJrJrJl0YHGbKd5fzA1Ny5VlthTJulJMu8goMmkVMEZcEfFLgosfghd%2FpYjk9neK5Jm5s9KoZT%2B%2FU3TH309gwPzBWZ0AT%2FHpTPTeYbHkbkmSjaG89rUADuHI2LdfKyVKtbyJx6z5lw9Jxsy2%2BHdobcEwdNUTkaYD8AUwFir7mrQdfJk1mxFROwOmzOctbuxN8w853jRB74vkO2lF%2F3okw3YOF0AY6pgHE4RMWfFi8Q3YSg65DOoe24MQNeyrxG%2FUEvezf9V8jGNJiiSOuXR%2FQlWT2ROfhyYa7%2BqO%2BYmvIfGx%2FPDz6oPxEuVrMxIspjfRaNiPSJ8kajilIjFowWOipA6LaJDQGOcv2d0YXw6XNHOpXhrncW2AlcCei4mco95lzf0QWxaOUpRIsOUSMNKKT5Ms%2F6nRXdnr73CbDiAbcn1JlbPddwJliknfVMbl1&X-Amz-Signature=ff8fc427e9a52d0a87a14f94330638a266a3a4929964472e157c29c9245e184f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTGNO752%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFFf3NbRDM%2F%2BzTXG5AtXpDFegab0GsGBKrZY0pxDcv4iAiBiKTwzlc6SEfnkv3eEzhbUS46CUn6qGa91VZaRUiu73ir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMmmMKj6rdIgsw2xk5KtwDHUIgSE0q5uGrn%2BNfmkZK%2FaMt2YvhpesCXt6xDYUW4iJHhh7b8r%2BlQ5L3voQJYP5SByFulrWIxFo2eyZ%2FDq9BicRCNwQ0o2RBpKpwRf3AUcTUddshBQCkQ7j9GIRApIYMDtAfOYt77mXatKCgiN3UAJRvUZmKTEmNoHPISr3oxzjWJDIzbE17iY3gZ5G6nl8PfpiOTqu23WtfKPNjs%2FzTvbkLR1uiwtHO%2FeJQE8bC99AxTc80wOFE%2FkSIaeKKVyE%2Bl5%2B%2FkHMWHD5thcAOeb3AytawuxRi8SxYKUgpUBkuhU%2FT8QkoH%2BgTnslCPcaOVzvBCuCYWoagnY2oDv1uRzn0xL%2BrZCiIUwMG7cHSrB%2BB07XzvVjeazQfT0FGCW57yYcxVKWaIrBlURF%2B42Q5swjj64%2BlFTUZEDm7fapNn5kAJrJrJl0YHGbKd5fzA1Ny5VlthTJulJMu8goMmkVMEZcEfFLgosfghd%2FpYjk9neK5Jm5s9KoZT%2B%2FU3TH309gwPzBWZ0AT%2FHpTPTeYbHkbkmSjaG89rUADuHI2LdfKyVKtbyJx6z5lw9Jxsy2%2BHdobcEwdNUTkaYD8AUwFir7mrQdfJk1mxFROwOmzOctbuxN8w853jRB74vkO2lF%2F3okw3YOF0AY6pgHE4RMWfFi8Q3YSg65DOoe24MQNeyrxG%2FUEvezf9V8jGNJiiSOuXR%2FQlWT2ROfhyYa7%2BqO%2BYmvIfGx%2FPDz6oPxEuVrMxIspjfRaNiPSJ8kajilIjFowWOipA6LaJDQGOcv2d0YXw6XNHOpXhrncW2AlcCei4mco95lzf0QWxaOUpRIsOUSMNKKT5Ms%2F6nRXdnr73CbDiAbcn1JlbPddwJliknfVMbl1&X-Amz-Signature=2c32ed8938e479367513d3fb7d1f79022fba47dd077122dccd16caf3b8d46156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
