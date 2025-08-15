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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2E4WIIB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCsRVqaftgwv%2Fn%2FvHBNaoA2aAZ8etiNxws0pE9oWHDYhgIgGJdEXtqP1t0icbYn9vQqkNu7avFJRNa4sjH7fSl0Ci0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDGhddoHAw1YSeTDyhyrcA8799jU%2Fi97e%2FS2EHcNXzaIjCFHlPIaRepY6i1Wu2n8rPCJz%2B0bMQQ%2FGOiQcZ45k8FxNajKGPmYyZ2KSjeQESUouaZR1xW%2B06uluwfZVZqJfesFzcrHsMdb4qlR5EUGyNnemrCOGFyDP1cYb1BzISPJ1Hq4P%2Fh7HzqFDX%2FihzAfh1WTNa0zIg%2BlWajCCxBhTmVAmxEui%2B4U%2BD2PsiHR8NwN%2Fq8uvHe8NGuvUtW4hwj8B2u3piU1qTaBqyT5YJrRCeMTn%2BDGbqm9Tn5mexEg9vv6qY%2FRNAhi9iBK6K5O972Wyic8XSazQsUPUM6ODoIN0I6W3pLQP3jvByvy7lOF3lF%2F1BqVm11Ruwmi5BCL5c%2BmX%2FXFRKXXXGsE4V5BX9cM8rreDwh7%2FX2YXpnrAC8844kKdonGR%2F19pSBEGDp2%2F%2FnWFOd0jkbSpOrua2fnwmLSYf81z4zNMPwOSMEI%2Fya%2FE4LHkvFYCjmplxlpIh7BmwUKD1rFb1QkAlF3MKwEn5rKOr1HqESuBl9biX8QThrcbmKheA6CkseoNHyofTrG04EkJJJYgYdvVJoU%2FV5NG6ZhJo79YKhsf2pwcLSXVXv9wKz855IbqE4FhWsIjLZHBm0mZA%2Byhuj5LWm%2BVDudoMKXv%2B8QGOqUBditDCuv7ABMIeokEVhhFdjo2kjAs56q6%2BlZeTvegCyefKafa59vtasIPRWUNbQ6sm%2BXyg%2FXHLV2alAMnFyi4vkEJteebrFxvYhM1QifMm0meYC29LbGfXLh%2Bx7BWzPKoudC5abzB02%2FWZhPnWD4jFs%2Brhp7jMBiOJ5dh5bc32JHOXC9tL%2FmPbvnHLzl%2FhQrL36mvl9r3qCf%2FIe%2FWdCCwxj3IWUx%2F&X-Amz-Signature=5ea70120558f6dfea74b76d8e826b30feecb61b7e3e027b1f87543ca357244e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2E4WIIB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCsRVqaftgwv%2Fn%2FvHBNaoA2aAZ8etiNxws0pE9oWHDYhgIgGJdEXtqP1t0icbYn9vQqkNu7avFJRNa4sjH7fSl0Ci0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDGhddoHAw1YSeTDyhyrcA8799jU%2Fi97e%2FS2EHcNXzaIjCFHlPIaRepY6i1Wu2n8rPCJz%2B0bMQQ%2FGOiQcZ45k8FxNajKGPmYyZ2KSjeQESUouaZR1xW%2B06uluwfZVZqJfesFzcrHsMdb4qlR5EUGyNnemrCOGFyDP1cYb1BzISPJ1Hq4P%2Fh7HzqFDX%2FihzAfh1WTNa0zIg%2BlWajCCxBhTmVAmxEui%2B4U%2BD2PsiHR8NwN%2Fq8uvHe8NGuvUtW4hwj8B2u3piU1qTaBqyT5YJrRCeMTn%2BDGbqm9Tn5mexEg9vv6qY%2FRNAhi9iBK6K5O972Wyic8XSazQsUPUM6ODoIN0I6W3pLQP3jvByvy7lOF3lF%2F1BqVm11Ruwmi5BCL5c%2BmX%2FXFRKXXXGsE4V5BX9cM8rreDwh7%2FX2YXpnrAC8844kKdonGR%2F19pSBEGDp2%2F%2FnWFOd0jkbSpOrua2fnwmLSYf81z4zNMPwOSMEI%2Fya%2FE4LHkvFYCjmplxlpIh7BmwUKD1rFb1QkAlF3MKwEn5rKOr1HqESuBl9biX8QThrcbmKheA6CkseoNHyofTrG04EkJJJYgYdvVJoU%2FV5NG6ZhJo79YKhsf2pwcLSXVXv9wKz855IbqE4FhWsIjLZHBm0mZA%2Byhuj5LWm%2BVDudoMKXv%2B8QGOqUBditDCuv7ABMIeokEVhhFdjo2kjAs56q6%2BlZeTvegCyefKafa59vtasIPRWUNbQ6sm%2BXyg%2FXHLV2alAMnFyi4vkEJteebrFxvYhM1QifMm0meYC29LbGfXLh%2Bx7BWzPKoudC5abzB02%2FWZhPnWD4jFs%2Brhp7jMBiOJ5dh5bc32JHOXC9tL%2FmPbvnHLzl%2FhQrL36mvl9r3qCf%2FIe%2FWdCCwxj3IWUx%2F&X-Amz-Signature=5f120d57343bf01f02e877f7467d25445f94a2a3ab42153115b502c1a7e28414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
