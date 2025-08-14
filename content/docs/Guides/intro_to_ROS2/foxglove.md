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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPN6WXUL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDJHh352oZA5T%2FoL%2FTMwd0ug4h5PZxzdmsEd4YgOuwMtwIhAPt77AlAAanJ970h9ywPZh9Ck8IWjFm5yNKIQ8NBBJ9GKv8DCEwQABoMNjM3NDIzMTgzODA1IgzOR8EhylT0zJnvqwQq3ANSH4RJFwIJ9d%2FrVRE163Yzgf3RCzZ7D2Vjk3pzJaKlBhHEr52SQQREonBji1uqtSo3Z07nhX7dcOCjYE3vt8D5DlXlvllkN4lX2SNSSOIe%2B2eq0%2FRj75D5nDt4VPvQ864EsyG0gNR0FwMnKii0TlwXJ8df4Dgm7nMqu%2BtTJf1KiqWpH5Z326sb84VrHggBem5Bw6%2BpINYAuIXfx0phgrrXLwOzNHZjzYQf4tYqy8FiRtyB3CaoMuHWt9AYl0D4%2BHkuj2BY%2B4Cj7KnNF9rzTZ4fdwSWbVDbNvuCIKbFqVECPlkwID7T9UMykcs0A6yAhsQiPBcrLIKeejA%2B6oUBgRLtxiWzXBFpP6oqBX80BABoE0KwxzeWIryjDZ9ByRSpvgaLpK1qFNi8zKNGOkH1dFSiFwvoh6FYNZyvIT2d16F%2FZv2y4Qp%2F6QklCEnKQs02zo6Bb4QSY3013k8MbnKtMIxohvC%2FiMKOsh9lDUfbp0i8HgsFODO%2BAqET5mojvh6ZOyPy7unIQJFMRSBcFs9HaxTObuEOBl1SbCoHyPl5JJ65ydrASUTgP1tzfzeGSSLjsSRtzVIXvyXSt0OyNMWaJM58UlCZEfpdnTwHKlnvusi8wJEXY9YHAzsJE00NwjCd6PjEBjqkAfbxZAnIElSjoYnPeVtOrc0XHWwNyphOxktqs5w72r3G4nmyMVJ%2FfHnmAJaMUE4R611eGBCSYiVF0E1I52wYm2lpsZww%2B5Er%2BxSS9FrlohUAmV7utUdEZmPbKoSFOeFr8urFHzVFHXQc7rPq8EuWJ8hLiSGOBowleoTA6Uk%2BW8hciU0PRKKdJaLIgmsuSxmXQe8U4P8%2B%2F0qTc44mNpV9h9Hypu4t&X-Amz-Signature=bf70f70a7011e1905fb616d99713422b6fd5c015b0bbe08093e7e3a6a42c6803&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPN6WXUL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDJHh352oZA5T%2FoL%2FTMwd0ug4h5PZxzdmsEd4YgOuwMtwIhAPt77AlAAanJ970h9ywPZh9Ck8IWjFm5yNKIQ8NBBJ9GKv8DCEwQABoMNjM3NDIzMTgzODA1IgzOR8EhylT0zJnvqwQq3ANSH4RJFwIJ9d%2FrVRE163Yzgf3RCzZ7D2Vjk3pzJaKlBhHEr52SQQREonBji1uqtSo3Z07nhX7dcOCjYE3vt8D5DlXlvllkN4lX2SNSSOIe%2B2eq0%2FRj75D5nDt4VPvQ864EsyG0gNR0FwMnKii0TlwXJ8df4Dgm7nMqu%2BtTJf1KiqWpH5Z326sb84VrHggBem5Bw6%2BpINYAuIXfx0phgrrXLwOzNHZjzYQf4tYqy8FiRtyB3CaoMuHWt9AYl0D4%2BHkuj2BY%2B4Cj7KnNF9rzTZ4fdwSWbVDbNvuCIKbFqVECPlkwID7T9UMykcs0A6yAhsQiPBcrLIKeejA%2B6oUBgRLtxiWzXBFpP6oqBX80BABoE0KwxzeWIryjDZ9ByRSpvgaLpK1qFNi8zKNGOkH1dFSiFwvoh6FYNZyvIT2d16F%2FZv2y4Qp%2F6QklCEnKQs02zo6Bb4QSY3013k8MbnKtMIxohvC%2FiMKOsh9lDUfbp0i8HgsFODO%2BAqET5mojvh6ZOyPy7unIQJFMRSBcFs9HaxTObuEOBl1SbCoHyPl5JJ65ydrASUTgP1tzfzeGSSLjsSRtzVIXvyXSt0OyNMWaJM58UlCZEfpdnTwHKlnvusi8wJEXY9YHAzsJE00NwjCd6PjEBjqkAfbxZAnIElSjoYnPeVtOrc0XHWwNyphOxktqs5w72r3G4nmyMVJ%2FfHnmAJaMUE4R611eGBCSYiVF0E1I52wYm2lpsZww%2B5Er%2BxSS9FrlohUAmV7utUdEZmPbKoSFOeFr8urFHzVFHXQc7rPq8EuWJ8hLiSGOBowleoTA6Uk%2BW8hciU0PRKKdJaLIgmsuSxmXQe8U4P8%2B%2F0qTc44mNpV9h9Hypu4t&X-Amz-Signature=f2821088fb03161430daa06abaf2718cbdcd9a44c813b753b044f07948f2e5cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
