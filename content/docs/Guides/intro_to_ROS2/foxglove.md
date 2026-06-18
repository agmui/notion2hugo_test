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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5SY6UNU%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDg9nelKIBOTy6HDaxmcK%2BqfaBk26P2x59rnwXJS7NnRAiBNw0tMPlfNEUiv2%2FH7JCDfguY4c4u%2FKDScPHQABF%2B62iqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQV5lKVH1LmMxOgBwKtwD8bEU%2Br%2BKYjXwbsiKG4yVlSa3NFVDgXTKxqqCxzP3li4z9vzvdj%2BWXy8zLXhc1kjVb3NAynF6p75hN5LtV3Nf95emThl9P3fAHL8nFNspcnWSCTnthhEgj4%2B%2B5FHM9TSPE3N3vfnTPXSe8Som%2Bsz3UTmLk3vuT1pRlFpBnTEV6RZQk9ToSNqETxOBRBruvBxO1D3SnX37WeL7TGRRWefqzw%2F2E6ep82qiPJ9oDDWZYumoBqd%2FMNtu9da%2FizCxu3%2BvlTIPRJo%2FmwHkdIs%2FkmcPy6VjtDxY0BbNuK0yWDWyxqteF0m1wINC5GmW8iz2FJZynPVmwWNycDeWzk5VbNP9itC4xYXaIf7OamUBksjtzKEiJ85EQljoDJAbMvbxMiUqufaFb%2FnAopYpqvEEJxjyNzSs8oOntcjG%2FwAVDMkSfjXRg49gDEeY5oMypAPuCxUBzHbpK1BEmWL6pJ2NabBicwgJu7sJX7Lo1uAdn8fP%2FIksE8CDQQ3YBF%2Bzv%2BZCT4B5wYPOMZHyJpYZrfrT3hEHSlRKW33JIooVOUaZZ75sjyMxtJMdCs88Av2No5GqUe%2BttA2b%2F2AdFe8zUYT3Jew2jMY5NzeKAMLi0N2oexqS5MbOLj%2FoB1tnuYjotG8w17HN0QY6pgFaCOPAFkbdi2R8luvcw%2BExDBQzqY06WMjzH%2BxX5zEb9hKd1a0pzgT5HzKVGVF5ng%2FUvhq%2F1W0%2BdfQs0dTnKAOnwcF5bDpIExy1KA5zbYxCG7R5o9dcMeQKsWgeoTepQDM%2BPtCM7hvE4AeOc6IdnF6nYhY7ebABp92DLEYxDIdpdLluhaC9fksBM0tJafpvmy1RImWs8IwMKXHeOw4zFz667jyYreov&X-Amz-Signature=fececa4c593146542290209bb8a38939f3aece1450202a7a44c34a52e7c56140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5SY6UNU%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDg9nelKIBOTy6HDaxmcK%2BqfaBk26P2x59rnwXJS7NnRAiBNw0tMPlfNEUiv2%2FH7JCDfguY4c4u%2FKDScPHQABF%2B62iqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQV5lKVH1LmMxOgBwKtwD8bEU%2Br%2BKYjXwbsiKG4yVlSa3NFVDgXTKxqqCxzP3li4z9vzvdj%2BWXy8zLXhc1kjVb3NAynF6p75hN5LtV3Nf95emThl9P3fAHL8nFNspcnWSCTnthhEgj4%2B%2B5FHM9TSPE3N3vfnTPXSe8Som%2Bsz3UTmLk3vuT1pRlFpBnTEV6RZQk9ToSNqETxOBRBruvBxO1D3SnX37WeL7TGRRWefqzw%2F2E6ep82qiPJ9oDDWZYumoBqd%2FMNtu9da%2FizCxu3%2BvlTIPRJo%2FmwHkdIs%2FkmcPy6VjtDxY0BbNuK0yWDWyxqteF0m1wINC5GmW8iz2FJZynPVmwWNycDeWzk5VbNP9itC4xYXaIf7OamUBksjtzKEiJ85EQljoDJAbMvbxMiUqufaFb%2FnAopYpqvEEJxjyNzSs8oOntcjG%2FwAVDMkSfjXRg49gDEeY5oMypAPuCxUBzHbpK1BEmWL6pJ2NabBicwgJu7sJX7Lo1uAdn8fP%2FIksE8CDQQ3YBF%2Bzv%2BZCT4B5wYPOMZHyJpYZrfrT3hEHSlRKW33JIooVOUaZZ75sjyMxtJMdCs88Av2No5GqUe%2BttA2b%2F2AdFe8zUYT3Jew2jMY5NzeKAMLi0N2oexqS5MbOLj%2FoB1tnuYjotG8w17HN0QY6pgFaCOPAFkbdi2R8luvcw%2BExDBQzqY06WMjzH%2BxX5zEb9hKd1a0pzgT5HzKVGVF5ng%2FUvhq%2F1W0%2BdfQs0dTnKAOnwcF5bDpIExy1KA5zbYxCG7R5o9dcMeQKsWgeoTepQDM%2BPtCM7hvE4AeOc6IdnF6nYhY7ebABp92DLEYxDIdpdLluhaC9fksBM0tJafpvmy1RImWs8IwMKXHeOw4zFz667jyYreov&X-Amz-Signature=f87fda655de935f8a373c94af06021919bf1de47349c092d91353c8950175cd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
