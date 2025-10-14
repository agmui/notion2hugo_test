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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT3PJDNN%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9GWH%2B5Z8Ob1KE1nM5%2Bk5wO1VjkAyQcJ4tAX7qUvofxAiAZQFC5g7V%2Flvey5pMakjNPzso3mhbNyWa6NS4i%2Fm5kkCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMAPBzjx%2Bpq7gp2mTWKtwD%2FT3L%2Fioo0G2CQZAknYCqVVUn8OvCSCCUhshQy%2Fryyf0KC9Ab50MT3cYDnJK2OyP%2Bgg%2F99QEykMrZzhNb9rW7Q42YSPpBhY52KJkVVNjC8fJNJ1Q6%2FjSAY3FOlIsm3CWg3ifw88XNlnqJmCXNqP0L%2BVUzz%2FWvPd%2BM48B3t1nNoxaygMvkdWsWtSCuY1Q4UXpeid8cE12lnfMJ%2BtRPse4Qz2nsd3WCr4mo%2BGXFSp2QLlix6vHm7IYwmfUACMOmvfSzeK88Y%2B4%2BokrAPaDoHjf4FMqRq2LY1N3XLuIuBXinvUN1w1F2xdJW4ir2xzqh22jh1QPJyltvN%2FPWcLlGYKaeEfYbQ4J7J%2FcW89dLT%2Bp1VTgdQnoCIeNUS9Mnh1YsRZbenW2rb9W2tbxCit726NNU%2F3McZ6tSggWDpMbRB8tax7zbZa2h9XXHZwYwotEX8HerUjGCwJPnBWAp0oao5bgUcCoAhGl1gFvIvD2c4MOML%2FByjyw%2BAYwvOBizwYpspwoSXoR5wNtHZhYJfmuv1hXIcfW8sTgPNPIpi33rOVmzLf47z4VdOTSAHvHW5dbLNxn1lY%2F%2F0r9N2Z04pigUU4ULq0sWEqyprglKuGlpgs2jpJqStAEywWDjfnAVZCQwnqu2xwY6pgECa4erX5%2BBRBRLkLc1L9hJSnuyMgwDmur%2BWIcsGrTX8vzEZmpHx%2FnW749Cd9hKKDdaSmQNKnU8N9%2B1CgcjQyp%2BRa45dtOOEuONP9i7HcMx5vAnOspUE9HMOnX1IxO2zIIs0gcwCI3EONUq0%2F0tPJ%2BpwUMbkYCAMmoMBRpMU2kMS3Zxo27pefNwEfGoZOzyLG25pWJlpvODWK%2F9AJUcq0DK67y84c2n&X-Amz-Signature=9e7c28a27467c30aefa3fe40f61bd074d6af593adab237eb7ec1a6b4c218d927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT3PJDNN%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9GWH%2B5Z8Ob1KE1nM5%2Bk5wO1VjkAyQcJ4tAX7qUvofxAiAZQFC5g7V%2Flvey5pMakjNPzso3mhbNyWa6NS4i%2Fm5kkCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMAPBzjx%2Bpq7gp2mTWKtwD%2FT3L%2Fioo0G2CQZAknYCqVVUn8OvCSCCUhshQy%2Fryyf0KC9Ab50MT3cYDnJK2OyP%2Bgg%2F99QEykMrZzhNb9rW7Q42YSPpBhY52KJkVVNjC8fJNJ1Q6%2FjSAY3FOlIsm3CWg3ifw88XNlnqJmCXNqP0L%2BVUzz%2FWvPd%2BM48B3t1nNoxaygMvkdWsWtSCuY1Q4UXpeid8cE12lnfMJ%2BtRPse4Qz2nsd3WCr4mo%2BGXFSp2QLlix6vHm7IYwmfUACMOmvfSzeK88Y%2B4%2BokrAPaDoHjf4FMqRq2LY1N3XLuIuBXinvUN1w1F2xdJW4ir2xzqh22jh1QPJyltvN%2FPWcLlGYKaeEfYbQ4J7J%2FcW89dLT%2Bp1VTgdQnoCIeNUS9Mnh1YsRZbenW2rb9W2tbxCit726NNU%2F3McZ6tSggWDpMbRB8tax7zbZa2h9XXHZwYwotEX8HerUjGCwJPnBWAp0oao5bgUcCoAhGl1gFvIvD2c4MOML%2FByjyw%2BAYwvOBizwYpspwoSXoR5wNtHZhYJfmuv1hXIcfW8sTgPNPIpi33rOVmzLf47z4VdOTSAHvHW5dbLNxn1lY%2F%2F0r9N2Z04pigUU4ULq0sWEqyprglKuGlpgs2jpJqStAEywWDjfnAVZCQwnqu2xwY6pgECa4erX5%2BBRBRLkLc1L9hJSnuyMgwDmur%2BWIcsGrTX8vzEZmpHx%2FnW749Cd9hKKDdaSmQNKnU8N9%2B1CgcjQyp%2BRa45dtOOEuONP9i7HcMx5vAnOspUE9HMOnX1IxO2zIIs0gcwCI3EONUq0%2F0tPJ%2BpwUMbkYCAMmoMBRpMU2kMS3Zxo27pefNwEfGoZOzyLG25pWJlpvODWK%2F9AJUcq0DK67y84c2n&X-Amz-Signature=a58e259ad44caee38128aba48d613aa405086fd79d0be14eb2f8bb434de23c92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
