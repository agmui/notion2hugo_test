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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZATPTZVV%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnbTEBNakst6YOlMGmkHewn4z8t%2BwMvk9WvCm%2BpXkBIAiArCfxfdvqX%2BgdpEMEezzzSoMF6XdlZCNLJDwOfhDwJkiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7tYpqSnRnYgrhuS5KtwDR%2BMuLjWAYZWSX3nTKhWrs9czjL7zcw56xga70sjWreLpz3tNZNjJuoZEyHNQ2OKXpHSTODw269XtsvfRTPJipQriakUQJUoxjlKs7%2FQXiJtxmsj4%2BlAgqVleWYlhzFxnMgnnPNzV2JKdyKLylNP6UbqPmO33o3KnDHxXEsS%2BA02E07WXeaYsU1Cavu6xZI%2FLOqtX2w4ha32%2BiKInkMtwCzIhSbQAmBdzqHx6prQ%2FhP5eZX3AnlFRzLcmIQasgMtNiNoU%2BVXRIM3s8KGJbyyNmO2ZusZag82w%2F0v5DVCQBoxNXh25yUHrfNRGK37jciN9U3hsPtMstLQ6liqQ2C5o5yxj0Jaikmss%2BB0MGVCGewnQ1T6UC2LN1FxcXjGHigqIS4uh4Sv2EeZqt75wVqJLFkhPvRYIqOK5fsTKuHSUwQFeAx2FFyjh4yMZHsH1iLI%2BTkvYYpIItV8EQ4sMDFRrc1xEOFiusnIre%2B9tzQzNy6b%2BDWOKCldAyF9hg9Sr2VpMe1F7X3LVmdD4ZydFChDLP9vvQzFOG2no1hY%2FgYBO1fKWPjqniW2vZ%2Byadt3vY2QKSELjFBdsUMswf%2BAlXSE0Hmv6%2FDQ0TCLqAtl2aWaapfrpMo50BuCGP4wkVdQwvdiH0gY6pgFDjflF0DH%2BZkoq7HpmEBbpWVYUto4Hg0qLeCyNv%2Fc%2B3Trvphd%2Bd8aun%2FJCC4pcXqZOE%2BvPRTr3hC3e9X6F1hLj0A0C3cHpIk4mcXTiF2%2Fc2NPzb0QGgLoE2e6%2FlzKjB%2Fto7zbG5lwQOiQpZj8din%2FfoaMWSQcVBnC%2FacfdHXEBrhi1TNHhV29Gs4LeFQO%2BZA2TnSFDw%2FSwch8KuS7lFF1KnTZDASeR&X-Amz-Signature=3f8b58bef3a4268c24a0857947ac50d9ab07224d11b864aaad0ce649bfed7170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZATPTZVV%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnbTEBNakst6YOlMGmkHewn4z8t%2BwMvk9WvCm%2BpXkBIAiArCfxfdvqX%2BgdpEMEezzzSoMF6XdlZCNLJDwOfhDwJkiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7tYpqSnRnYgrhuS5KtwDR%2BMuLjWAYZWSX3nTKhWrs9czjL7zcw56xga70sjWreLpz3tNZNjJuoZEyHNQ2OKXpHSTODw269XtsvfRTPJipQriakUQJUoxjlKs7%2FQXiJtxmsj4%2BlAgqVleWYlhzFxnMgnnPNzV2JKdyKLylNP6UbqPmO33o3KnDHxXEsS%2BA02E07WXeaYsU1Cavu6xZI%2FLOqtX2w4ha32%2BiKInkMtwCzIhSbQAmBdzqHx6prQ%2FhP5eZX3AnlFRzLcmIQasgMtNiNoU%2BVXRIM3s8KGJbyyNmO2ZusZag82w%2F0v5DVCQBoxNXh25yUHrfNRGK37jciN9U3hsPtMstLQ6liqQ2C5o5yxj0Jaikmss%2BB0MGVCGewnQ1T6UC2LN1FxcXjGHigqIS4uh4Sv2EeZqt75wVqJLFkhPvRYIqOK5fsTKuHSUwQFeAx2FFyjh4yMZHsH1iLI%2BTkvYYpIItV8EQ4sMDFRrc1xEOFiusnIre%2B9tzQzNy6b%2BDWOKCldAyF9hg9Sr2VpMe1F7X3LVmdD4ZydFChDLP9vvQzFOG2no1hY%2FgYBO1fKWPjqniW2vZ%2Byadt3vY2QKSELjFBdsUMswf%2BAlXSE0Hmv6%2FDQ0TCLqAtl2aWaapfrpMo50BuCGP4wkVdQwvdiH0gY6pgFDjflF0DH%2BZkoq7HpmEBbpWVYUto4Hg0qLeCyNv%2Fc%2B3Trvphd%2Bd8aun%2FJCC4pcXqZOE%2BvPRTr3hC3e9X6F1hLj0A0C3cHpIk4mcXTiF2%2Fc2NPzb0QGgLoE2e6%2FlzKjB%2Fto7zbG5lwQOiQpZj8din%2FfoaMWSQcVBnC%2FacfdHXEBrhi1TNHhV29Gs4LeFQO%2BZA2TnSFDw%2FSwch8KuS7lFF1KnTZDASeR&X-Amz-Signature=d23dc761ed7e6ffef5eef081168c1958a85a88ab5a0712bff9a5c994f7c2afa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
