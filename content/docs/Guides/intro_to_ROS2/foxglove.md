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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662TMFCGO%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBe58kX6LdBEqwk1yVXjXmwLEsdK0MTRqko2AhotmrTSAiEA65cT7IthPqobpdlLkRwe2ZIJT%2Bg1q2xmxtOsDrwwns8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHW1mdEMzy8V6Z9NaircA719gb95QVJSg8aE812WMEmMFis4EkfHxhk6lW7m18eqzsuf4qD%2BsjkJAqroCKP7Rl6o7cHElLtei0I6AOSkDKIay0RwH5u6RyTxfMsuecDBlhGgzcVf432tykjSQmwsSNypQD4nFVk8luQJDsz6BaEDmLrheESsaBrmaO2gxTJ0o3TIUIkDoPZlRUTl96DgDoJZpl7Od29%2F02bkJS8G4NM6wqdItFhxK2UIznK4Q%2BJ%2FYPvcLJUG%2FoQFnnPoKOkezA3Teb7BmgInJHy7TIF1NLCPFXqc42v%2FjtdgUo4lf2UCtnzIEXCMBiT9AwjdlR%2FRQc2VIFHvfK28pTWxPjQWkqHb6%2BGj6Yt8Ea1z2aHY223RLib5cO1cQCyB6iybk%2FRe9qiKANQ2bODyQaB1GfSiP3MJqRa5YZ6QXNsOQJeixl6QMKfgk6SblbJCA9YoT1DX%2FrW9wT4XW5BJMWnMB8YXegJqYagdN%2F79S%2FNRCbrdkGPBL%2BrtlvcdTUIVlEkdEqJ1Woedfke1SD8%2BnYNTTfXyP4mIZB49voXnytULlUnHLKpG8YMWxSWO5lGJdCvfLYvt8mu8GOq05lmFkJiREqz%2F7gm%2BNq77V7BzZTGe3i5dLNkiEy06AXD3%2BlKRbl21MOW0xscGOqUBmYfkhb8ERyiG3Bdrt6Wrx51BgHCU4RsOef5n65rebs9Ot%2FnbOq7TGMhJY%2B%2FbiFZDT9x210NgPhQAe1K%2B%2FQULOme%2F6Pv7j9ntaXhQsM9FumbJkFNh3UicdG38A%2FY1eUCCsg5dr2jQSJfcGvWrNV8ZhrxxGl1R93CONpEvylVPStYueJN%2Bo0r4rMpUxLbceWv%2F119qoLyt4rgYKNOUH4KYT1kh8Jyl&X-Amz-Signature=a219ba3f345c73d1ea86d290e7f3fd8110756c52e0fb33abf2b7d7294cc5729e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662TMFCGO%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBe58kX6LdBEqwk1yVXjXmwLEsdK0MTRqko2AhotmrTSAiEA65cT7IthPqobpdlLkRwe2ZIJT%2Bg1q2xmxtOsDrwwns8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHW1mdEMzy8V6Z9NaircA719gb95QVJSg8aE812WMEmMFis4EkfHxhk6lW7m18eqzsuf4qD%2BsjkJAqroCKP7Rl6o7cHElLtei0I6AOSkDKIay0RwH5u6RyTxfMsuecDBlhGgzcVf432tykjSQmwsSNypQD4nFVk8luQJDsz6BaEDmLrheESsaBrmaO2gxTJ0o3TIUIkDoPZlRUTl96DgDoJZpl7Od29%2F02bkJS8G4NM6wqdItFhxK2UIznK4Q%2BJ%2FYPvcLJUG%2FoQFnnPoKOkezA3Teb7BmgInJHy7TIF1NLCPFXqc42v%2FjtdgUo4lf2UCtnzIEXCMBiT9AwjdlR%2FRQc2VIFHvfK28pTWxPjQWkqHb6%2BGj6Yt8Ea1z2aHY223RLib5cO1cQCyB6iybk%2FRe9qiKANQ2bODyQaB1GfSiP3MJqRa5YZ6QXNsOQJeixl6QMKfgk6SblbJCA9YoT1DX%2FrW9wT4XW5BJMWnMB8YXegJqYagdN%2F79S%2FNRCbrdkGPBL%2BrtlvcdTUIVlEkdEqJ1Woedfke1SD8%2BnYNTTfXyP4mIZB49voXnytULlUnHLKpG8YMWxSWO5lGJdCvfLYvt8mu8GOq05lmFkJiREqz%2F7gm%2BNq77V7BzZTGe3i5dLNkiEy06AXD3%2BlKRbl21MOW0xscGOqUBmYfkhb8ERyiG3Bdrt6Wrx51BgHCU4RsOef5n65rebs9Ot%2FnbOq7TGMhJY%2B%2FbiFZDT9x210NgPhQAe1K%2B%2FQULOme%2F6Pv7j9ntaXhQsM9FumbJkFNh3UicdG38A%2FY1eUCCsg5dr2jQSJfcGvWrNV8ZhrxxGl1R93CONpEvylVPStYueJN%2Bo0r4rMpUxLbceWv%2F119qoLyt4rgYKNOUH4KYT1kh8Jyl&X-Amz-Signature=a96efa399fa9296dd81dbf0bd9e7ae719a2334f725f681a98bdddcb26b8f11f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
