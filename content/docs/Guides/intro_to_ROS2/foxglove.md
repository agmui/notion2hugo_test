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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OHDE3IT%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvnfCNYUJ7u6e7FbcoHitzYikYMTc1r0KBAvesQPWZOAiAoM9lZLrAnuMPEM7XF9p5rtmlXFBDucOXebq0FejjLjyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMpKq9PaSat2KTsdhEKtwDAc9Gmfup20MVEqkIoEvZ4wy8upnMn%2FTA0te1HKowXNHshBNZlt2Q34yMbDht1YvZG23YNtcGAB5Gr56aTb2CNZ3GotbDbtbrBVTMJSJuyuBjeYKomkM11hC8KaEkE5JuUD0B%2BmEfLM3H%2FGJl4Kvd7mbzhyjazPGaTR%2BkMOEAKk31nmLKYFQGv5S1Vqws9bXkjqQhJUaKuHUXkeUbCTc0IT0P41KMl%2FH07AWa8CROIqimk%2FgsWq8sT3WDeagAy%2F6d088nzDjyJK%2F8RBOoQA26dKKReN%2FLgT3hhC5rb2DTPyBySJelIUZ4zxww7W%2BHJ9wFlXTNVedHwXsS2c3D%2BeIU9xV8QsAlU9XLHB9a44v6t22Uv7nAyEHhRYFCCNcM7cNMEegQsmUnXw4c3QbtrN%2BIre9%2FxvH5eHO5P6KM3ZLIda0VnIK3tHHdNQ3J3lkEvOK%2BVqOUU47AbQwVAlhlAwedOmJVoyBmDN6VSgDpn2Ow1GDWRRnJv%2FGuInv1aGpkVD2wr5k6kuwkNkmp4IkXMN5bAxrIGZHV%2BtMZt88F%2FfRY4D0WnHKysmtfzAxu8f%2Fkj%2BL36hGWXMFX6ifsFEgROwXmZbPv%2FC%2Bjh9G0PFJfYQbZlxcfMOn8D8q21%2FeAodgw77LgywY6pgEPLIY40RIqkQEIglxgDrsvIY80ec02XQWfHrU4DJfMNVPX5b98auC93o6Qs69tQTg%2FDTNVJKg6U%2FO%2B0pWHlu3xl6tA26pxuvm2pC8sygQ0cJ9%2FbXPGMBlE6B5xFmqRgpXqSRAQY0CEYbgWOb9I4lRJxs6mBnsUa8dF0nq41B1w5IYQcLio2zIRus%2B%2BWkFRB896L4wLfCfkikbhfAof4ziJOWbfDzrH&X-Amz-Signature=165f230be01512da380c489c41771b88576ae88b1a237f776cfeb2af09bb4570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OHDE3IT%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvnfCNYUJ7u6e7FbcoHitzYikYMTc1r0KBAvesQPWZOAiAoM9lZLrAnuMPEM7XF9p5rtmlXFBDucOXebq0FejjLjyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMpKq9PaSat2KTsdhEKtwDAc9Gmfup20MVEqkIoEvZ4wy8upnMn%2FTA0te1HKowXNHshBNZlt2Q34yMbDht1YvZG23YNtcGAB5Gr56aTb2CNZ3GotbDbtbrBVTMJSJuyuBjeYKomkM11hC8KaEkE5JuUD0B%2BmEfLM3H%2FGJl4Kvd7mbzhyjazPGaTR%2BkMOEAKk31nmLKYFQGv5S1Vqws9bXkjqQhJUaKuHUXkeUbCTc0IT0P41KMl%2FH07AWa8CROIqimk%2FgsWq8sT3WDeagAy%2F6d088nzDjyJK%2F8RBOoQA26dKKReN%2FLgT3hhC5rb2DTPyBySJelIUZ4zxww7W%2BHJ9wFlXTNVedHwXsS2c3D%2BeIU9xV8QsAlU9XLHB9a44v6t22Uv7nAyEHhRYFCCNcM7cNMEegQsmUnXw4c3QbtrN%2BIre9%2FxvH5eHO5P6KM3ZLIda0VnIK3tHHdNQ3J3lkEvOK%2BVqOUU47AbQwVAlhlAwedOmJVoyBmDN6VSgDpn2Ow1GDWRRnJv%2FGuInv1aGpkVD2wr5k6kuwkNkmp4IkXMN5bAxrIGZHV%2BtMZt88F%2FfRY4D0WnHKysmtfzAxu8f%2Fkj%2BL36hGWXMFX6ifsFEgROwXmZbPv%2FC%2Bjh9G0PFJfYQbZlxcfMOn8D8q21%2FeAodgw77LgywY6pgEPLIY40RIqkQEIglxgDrsvIY80ec02XQWfHrU4DJfMNVPX5b98auC93o6Qs69tQTg%2FDTNVJKg6U%2FO%2B0pWHlu3xl6tA26pxuvm2pC8sygQ0cJ9%2FbXPGMBlE6B5xFmqRgpXqSRAQY0CEYbgWOb9I4lRJxs6mBnsUa8dF0nq41B1w5IYQcLio2zIRus%2B%2BWkFRB896L4wLfCfkikbhfAof4ziJOWbfDzrH&X-Amz-Signature=2c0006ee27e197f76b878e040766c77f060a02993089f5dc9a9b750fab8b6c4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
