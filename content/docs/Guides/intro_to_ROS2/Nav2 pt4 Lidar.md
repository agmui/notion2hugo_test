---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-03T21:37:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 154
toc: false
icon: ""
---

[Articulated Robotics guide](https://youtu.be/eJZXRncGaGM?si=p88bRTyt1R9TyuiY)

---

<details>
      <summary>What is Lidar?</summary>
      Lidar (light detection and ranging) is using lases to determine how far objects are.
  </details>

TODO:

[link to add other sensors (realsense)](https://docs.nav2.org/setup_guides/sensors/setup_sensors_gz.html)

Often in robotics Odometry is updates very quickly but is prone to drift.

On the other hand Lidar is effectively _“ground truth”_ because it can see the world around it however updates very slowly.

By using these two sensors together we can cover each others weaknesses.

In between the long update periods of Lidar we can use Odometry to get an accurate measurement of where we are. Then when the Lidar measurement eventually comes we correct the Odometry’s drift.

Just for this guide we will be sticking to a 2D Lidar but these instructions can be adapted to any kind of Lidar.

Nav2 expects Lidar data to be published on the `/scan` topic with type `sensor_msgs/LaserScan`

## Simulating Lidar in Gazebo

We must first add a Lidar link into our `urdf` to know where it is on the robot.

Also we have to add a Gazebo plugin to tell Gazebo simulate the Lidar

past this at the bottom of the file before the `</robot>` tag

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml

  <link name="lidar_link">
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <xacro:cylinder_inertia m="0.125" r="0.0508" h="0.055"/>
  </link>

  <joint name="lidar_joint" type="fixed">
    <parent link="base_link"/>
    <child link="lidar_link"/>
    <origin xyz="0 0 0.12" rpy="0 0 0"/>
  </joint>



  <!-- 2D Lidar New Gazebo Sensor Plugin  -->
  <gazebo reference="lidar_link">
    <sensor name="lidar" type="gpu_lidar">
      <always_on>true</always_on>
      <visualize>true</visualize>
      <update_rate>5</update_rate>
      <topic>scan</topic>
      <gz_frame_id>lidar_link</gz_frame_id>
      <lidar>
        <scan>
          <horizontal>
            <samples>360</samples>
            <resolution>1.000000</resolution>
            <min_angle>0.000000</min_angle>
            <max_angle>6.280000</max_angle>
          </horizontal>
        </scan>
        <range>
          <min>0.120000</min>
          <max>12.0</max>
          <resolution>0.015000</resolution>
        </range>
        <noise>
          <type>gaussian</type>
          <mean>0.0</mean>
          <stddev>0.02</stddev>
        </noise>
      </lidar>
    </sensor>
  </gazebo>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQPCPBX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDj%2BC8DTSaaLSlEGcU2PSUzbtk3QAYOHh4S6NCZ14lAXwIgZ%2B%2Bw%2Bpb%2BM%2Fd1zuvvBOahb3HTh%2FUs433a1LT0oITZQhkq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDGE9iQNok2A7ZD0AMCrcA0AZd2RGTfBV8R4qPj%2BdVVLLovchR%2BIw3zRAOBDMT8p81j%2BJonKTjx8M4ElYzIGkM7Kub16k%2Fx1oOg0r9efOzbnh80c67qWxE6%2BKqMR9t1S9MjKi03b2va5SWyH9Q44NLRcN1hJ6hB9iBGBpDm%2FS%2FqspiMeVsS0vK%2FChYB8y9BDJQSBpoetBn8xo%2BEGbuu4QbRP6eRVr3c3KCYaMz3ADxXAEZ3DDdGjjI2ggcHRzE4vcMbsvwv9ij7mJtNazbBH3B68bXGNCHUDSodHOu0Grz%2FSqQu6KAQSP8%2Bv7jOqomBf%2F5LRcZx28orHioM6xoNPEK9v3r5UjYeH%2B%2Bb%2FPVkR8Uhu2Ygwnx9X9clpuD%2BIJ8%2BUIde1Kt%2BeGFbCI3wETPAeaOaMnb0bmXjcjNpwCyKJyZM9XEu3syjI0AUKgJYO4m1Y8YCee4elP7oj53fSJDeOm3GCw3BfGJUMcZu092vSB%2FsKb25J1AZmYG8KtNsnbC2KOmH1Ckae16p7vpq6XNXdiUWIwNRTtS0hQ404qH0nQe9gtYcJOM5qp6knEDSRx0bXoCB9YRr4IqKLyJ%2BJm9vrxDACWbf59%2BAEdf6PU3WZguMoHPUQUCdDqC%2Brly0gHn2Q1eiSLn%2BWMjs7piHanMPDt%2B8QGOqUBCfHEPZj54C8PvDRgeZaz0gK6mh3yBCfo%2B6c6bU2re3J3i95mYMnP49wrmI%2BZqehc1mJfcYjUDSnDpBQoyH3GP%2FvLu0Inh8x2EMw0fNMs%2FhpidLhL7WGYHQrwxvMfuTvFz8Z73isQLiL2x9yrB4bHEjsKQZNS8waOgcCwK%2FJX6h2KQHzlL5xf7XKV%2BOhXHPuMEoZ8Z36mw8FBOAHSEwixz%2FoHC8U7&X-Amz-Signature=d4f9b1efdb721a7e47773496aa37af50c3059a9163d2b1a67dfcc7aed3897733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Adding `/scan` topic in `bridge_config.yaml`

We have to bridge over the `/scan` topic from Gazebo

```yaml
- ros_topic_name: "/scan"
	gz_topic_name: "/scan"
	ros_type_name: "sensor_msgs/msg/LaserScan"
	gz_type_name: "gz.msgs.LaserScan"
	direction: GZ_TO_ROS
```

**Run:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

### Lidar Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW3267WC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFGCTosgWeUVQ23aQln9pV2CkQMGbpC3xsOr7EWwrwlxAiEAndIGh91rquydq%2Fi%2BThIZBgXDIFzl5FzDTgKHTwTmxegq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMS1%2BtfvgZxtjb3m4ircA8FKChHo8Iemi5O63kSOz0MkBJvsmZ1P5GGF3M4khsa5JeXMQbWu1weBL8wcfAJjg3sd7xn9fbEuboRicTVG%2BxSkNPCJUFmm7pC6XRkrVQL2vu7xibY6Xlo5c5MBmdlP%2BLO1zQe7IfGRTsLGQXACbJuaLvFM5EPU5oBaQT%2FVXhPA0txgyWL%2BppmqHOfahammHNraeUgFntfHiOcJ2MkmmqAPpCYjDSgMjOdQuPFSzyKHdhErV7TRH976GmrIUn%2F%2B5y3s1NkJmOaVX%2Bulw%2BTxsuKI1ADxlqINxPo7ggljCqBCC7z8rRKCg8%2BqR%2FSTOoHvUA%2FGYdl16PxdKD2Ob7WNlEJLG15bwVS1HqzLnnMDJeqBV5qJ%2FbNwA%2Bp5nzKr7uwPgIbb4zlwEmJNMXi0G18uWOTkDsZXW5zQFi%2BnEB%2B6nygpkWsze94ImLQRRsFyfCHLa8s%2F4ifNyY0WKolyBrAoKjmoQIM3Z0FuTkJ%2B27EQPPKa7ZX9bmy%2FqBn%2BONBC8XxVh8RBUL3Ud4zOIgr2UwDk1wBRmlGuzDFxzbsNIefLxIRMe%2FWYF6KPA7MhQzUjDI%2FnU1h1enDa0%2Fz%2FKtlD%2FPa3ZG0bZ4LBBudhdIjbEj0rXkajviRSWyc3QlEfaFYNMPrt%2B8QGOqUBjerSoGL8A3eBvh4BDZYIVedMnwkXcGNTbm0mV9BQlWEGB3jNTIf43eif9fiYfZyItIkaFTh5tefriODOT6I%2FQUEH7PrgJkWsuEH5wviq1rbP99%2Bvab8pLbBgnXpQF9KPTaZaDfhgByIxoNgmdL4ntmwWs2zJK5Hte4w7UsLNL0mEbhp%2F1dtKb6Y8nl4TFbbKOoklYpdrPBQGoqeHBGjrdUdOcszc&X-Amz-Signature=8de38695ef06e5721af8e9e2b445881e696331a877eb611298421d8e5ef4ed73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW3267WC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFGCTosgWeUVQ23aQln9pV2CkQMGbpC3xsOr7EWwrwlxAiEAndIGh91rquydq%2Fi%2BThIZBgXDIFzl5FzDTgKHTwTmxegq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMS1%2BtfvgZxtjb3m4ircA8FKChHo8Iemi5O63kSOz0MkBJvsmZ1P5GGF3M4khsa5JeXMQbWu1weBL8wcfAJjg3sd7xn9fbEuboRicTVG%2BxSkNPCJUFmm7pC6XRkrVQL2vu7xibY6Xlo5c5MBmdlP%2BLO1zQe7IfGRTsLGQXACbJuaLvFM5EPU5oBaQT%2FVXhPA0txgyWL%2BppmqHOfahammHNraeUgFntfHiOcJ2MkmmqAPpCYjDSgMjOdQuPFSzyKHdhErV7TRH976GmrIUn%2F%2B5y3s1NkJmOaVX%2Bulw%2BTxsuKI1ADxlqINxPo7ggljCqBCC7z8rRKCg8%2BqR%2FSTOoHvUA%2FGYdl16PxdKD2Ob7WNlEJLG15bwVS1HqzLnnMDJeqBV5qJ%2FbNwA%2Bp5nzKr7uwPgIbb4zlwEmJNMXi0G18uWOTkDsZXW5zQFi%2BnEB%2B6nygpkWsze94ImLQRRsFyfCHLa8s%2F4ifNyY0WKolyBrAoKjmoQIM3Z0FuTkJ%2B27EQPPKa7ZX9bmy%2FqBn%2BONBC8XxVh8RBUL3Ud4zOIgr2UwDk1wBRmlGuzDFxzbsNIefLxIRMe%2FWYF6KPA7MhQzUjDI%2FnU1h1enDa0%2Fz%2FKtlD%2FPa3ZG0bZ4LBBudhdIjbEj0rXkajviRSWyc3QlEfaFYNMPrt%2B8QGOqUBjerSoGL8A3eBvh4BDZYIVedMnwkXcGNTbm0mV9BQlWEGB3jNTIf43eif9fiYfZyItIkaFTh5tefriODOT6I%2FQUEH7PrgJkWsuEH5wviq1rbP99%2Bvab8pLbBgnXpQF9KPTaZaDfhgByIxoNgmdL4ntmwWs2zJK5Hte4w7UsLNL0mEbhp%2F1dtKb6Y8nl4TFbbKOoklYpdrPBQGoqeHBGjrdUdOcszc&X-Amz-Signature=315d81f87d918bef6a29c304d082bc4b85e15e7566027e1a14777acdf71ac288&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW3267WC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFGCTosgWeUVQ23aQln9pV2CkQMGbpC3xsOr7EWwrwlxAiEAndIGh91rquydq%2Fi%2BThIZBgXDIFzl5FzDTgKHTwTmxegq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMS1%2BtfvgZxtjb3m4ircA8FKChHo8Iemi5O63kSOz0MkBJvsmZ1P5GGF3M4khsa5JeXMQbWu1weBL8wcfAJjg3sd7xn9fbEuboRicTVG%2BxSkNPCJUFmm7pC6XRkrVQL2vu7xibY6Xlo5c5MBmdlP%2BLO1zQe7IfGRTsLGQXACbJuaLvFM5EPU5oBaQT%2FVXhPA0txgyWL%2BppmqHOfahammHNraeUgFntfHiOcJ2MkmmqAPpCYjDSgMjOdQuPFSzyKHdhErV7TRH976GmrIUn%2F%2B5y3s1NkJmOaVX%2Bulw%2BTxsuKI1ADxlqINxPo7ggljCqBCC7z8rRKCg8%2BqR%2FSTOoHvUA%2FGYdl16PxdKD2Ob7WNlEJLG15bwVS1HqzLnnMDJeqBV5qJ%2FbNwA%2Bp5nzKr7uwPgIbb4zlwEmJNMXi0G18uWOTkDsZXW5zQFi%2BnEB%2B6nygpkWsze94ImLQRRsFyfCHLa8s%2F4ifNyY0WKolyBrAoKjmoQIM3Z0FuTkJ%2B27EQPPKa7ZX9bmy%2FqBn%2BONBC8XxVh8RBUL3Ud4zOIgr2UwDk1wBRmlGuzDFxzbsNIefLxIRMe%2FWYF6KPA7MhQzUjDI%2FnU1h1enDa0%2Fz%2FKtlD%2FPa3ZG0bZ4LBBudhdIjbEj0rXkajviRSWyc3QlEfaFYNMPrt%2B8QGOqUBjerSoGL8A3eBvh4BDZYIVedMnwkXcGNTbm0mV9BQlWEGB3jNTIf43eif9fiYfZyItIkaFTh5tefriODOT6I%2FQUEH7PrgJkWsuEH5wviq1rbP99%2Bvab8pLbBgnXpQF9KPTaZaDfhgByIxoNgmdL4ntmwWs2zJK5Hte4w7UsLNL0mEbhp%2F1dtKb6Y8nl4TFbbKOoklYpdrPBQGoqeHBGjrdUdOcszc&X-Amz-Signature=cc6347aa51ecd6707907363a07a7ff8d4fde225b2030085a963e8989fd7fbdb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW3267WC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFGCTosgWeUVQ23aQln9pV2CkQMGbpC3xsOr7EWwrwlxAiEAndIGh91rquydq%2Fi%2BThIZBgXDIFzl5FzDTgKHTwTmxegq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMS1%2BtfvgZxtjb3m4ircA8FKChHo8Iemi5O63kSOz0MkBJvsmZ1P5GGF3M4khsa5JeXMQbWu1weBL8wcfAJjg3sd7xn9fbEuboRicTVG%2BxSkNPCJUFmm7pC6XRkrVQL2vu7xibY6Xlo5c5MBmdlP%2BLO1zQe7IfGRTsLGQXACbJuaLvFM5EPU5oBaQT%2FVXhPA0txgyWL%2BppmqHOfahammHNraeUgFntfHiOcJ2MkmmqAPpCYjDSgMjOdQuPFSzyKHdhErV7TRH976GmrIUn%2F%2B5y3s1NkJmOaVX%2Bulw%2BTxsuKI1ADxlqINxPo7ggljCqBCC7z8rRKCg8%2BqR%2FSTOoHvUA%2FGYdl16PxdKD2Ob7WNlEJLG15bwVS1HqzLnnMDJeqBV5qJ%2FbNwA%2Bp5nzKr7uwPgIbb4zlwEmJNMXi0G18uWOTkDsZXW5zQFi%2BnEB%2B6nygpkWsze94ImLQRRsFyfCHLa8s%2F4ifNyY0WKolyBrAoKjmoQIM3Z0FuTkJ%2B27EQPPKa7ZX9bmy%2FqBn%2BONBC8XxVh8RBUL3Ud4zOIgr2UwDk1wBRmlGuzDFxzbsNIefLxIRMe%2FWYF6KPA7MhQzUjDI%2FnU1h1enDa0%2Fz%2FKtlD%2FPa3ZG0bZ4LBBudhdIjbEj0rXkajviRSWyc3QlEfaFYNMPrt%2B8QGOqUBjerSoGL8A3eBvh4BDZYIVedMnwkXcGNTbm0mV9BQlWEGB3jNTIf43eif9fiYfZyItIkaFTh5tefriODOT6I%2FQUEH7PrgJkWsuEH5wviq1rbP99%2Bvab8pLbBgnXpQF9KPTaZaDfhgByIxoNgmdL4ntmwWs2zJK5Hte4w7UsLNL0mEbhp%2F1dtKb6Y8nl4TFbbKOoklYpdrPBQGoqeHBGjrdUdOcszc&X-Amz-Signature=d6c708489453323ea41503abb850c87211b9abf9fd515a179dc11430da52c75b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW3267WC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFGCTosgWeUVQ23aQln9pV2CkQMGbpC3xsOr7EWwrwlxAiEAndIGh91rquydq%2Fi%2BThIZBgXDIFzl5FzDTgKHTwTmxegq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMS1%2BtfvgZxtjb3m4ircA8FKChHo8Iemi5O63kSOz0MkBJvsmZ1P5GGF3M4khsa5JeXMQbWu1weBL8wcfAJjg3sd7xn9fbEuboRicTVG%2BxSkNPCJUFmm7pC6XRkrVQL2vu7xibY6Xlo5c5MBmdlP%2BLO1zQe7IfGRTsLGQXACbJuaLvFM5EPU5oBaQT%2FVXhPA0txgyWL%2BppmqHOfahammHNraeUgFntfHiOcJ2MkmmqAPpCYjDSgMjOdQuPFSzyKHdhErV7TRH976GmrIUn%2F%2B5y3s1NkJmOaVX%2Bulw%2BTxsuKI1ADxlqINxPo7ggljCqBCC7z8rRKCg8%2BqR%2FSTOoHvUA%2FGYdl16PxdKD2Ob7WNlEJLG15bwVS1HqzLnnMDJeqBV5qJ%2FbNwA%2Bp5nzKr7uwPgIbb4zlwEmJNMXi0G18uWOTkDsZXW5zQFi%2BnEB%2B6nygpkWsze94ImLQRRsFyfCHLa8s%2F4ifNyY0WKolyBrAoKjmoQIM3Z0FuTkJ%2B27EQPPKa7ZX9bmy%2FqBn%2BONBC8XxVh8RBUL3Ud4zOIgr2UwDk1wBRmlGuzDFxzbsNIefLxIRMe%2FWYF6KPA7MhQzUjDI%2FnU1h1enDa0%2Fz%2FKtlD%2FPa3ZG0bZ4LBBudhdIjbEj0rXkajviRSWyc3QlEfaFYNMPrt%2B8QGOqUBjerSoGL8A3eBvh4BDZYIVedMnwkXcGNTbm0mV9BQlWEGB3jNTIf43eif9fiYfZyItIkaFTh5tefriODOT6I%2FQUEH7PrgJkWsuEH5wviq1rbP99%2Bvab8pLbBgnXpQF9KPTaZaDfhgByIxoNgmdL4ntmwWs2zJK5Hte4w7UsLNL0mEbhp%2F1dtKb6Y8nl4TFbbKOoklYpdrPBQGoqeHBGjrdUdOcszc&X-Amz-Signature=d2a67ab1b3d902a5d84b2196d6e3eb29384cae4c873248f368274525b77cd614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW3267WC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFGCTosgWeUVQ23aQln9pV2CkQMGbpC3xsOr7EWwrwlxAiEAndIGh91rquydq%2Fi%2BThIZBgXDIFzl5FzDTgKHTwTmxegq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMS1%2BtfvgZxtjb3m4ircA8FKChHo8Iemi5O63kSOz0MkBJvsmZ1P5GGF3M4khsa5JeXMQbWu1weBL8wcfAJjg3sd7xn9fbEuboRicTVG%2BxSkNPCJUFmm7pC6XRkrVQL2vu7xibY6Xlo5c5MBmdlP%2BLO1zQe7IfGRTsLGQXACbJuaLvFM5EPU5oBaQT%2FVXhPA0txgyWL%2BppmqHOfahammHNraeUgFntfHiOcJ2MkmmqAPpCYjDSgMjOdQuPFSzyKHdhErV7TRH976GmrIUn%2F%2B5y3s1NkJmOaVX%2Bulw%2BTxsuKI1ADxlqINxPo7ggljCqBCC7z8rRKCg8%2BqR%2FSTOoHvUA%2FGYdl16PxdKD2Ob7WNlEJLG15bwVS1HqzLnnMDJeqBV5qJ%2FbNwA%2Bp5nzKr7uwPgIbb4zlwEmJNMXi0G18uWOTkDsZXW5zQFi%2BnEB%2B6nygpkWsze94ImLQRRsFyfCHLa8s%2F4ifNyY0WKolyBrAoKjmoQIM3Z0FuTkJ%2B27EQPPKa7ZX9bmy%2FqBn%2BONBC8XxVh8RBUL3Ud4zOIgr2UwDk1wBRmlGuzDFxzbsNIefLxIRMe%2FWYF6KPA7MhQzUjDI%2FnU1h1enDa0%2Fz%2FKtlD%2FPa3ZG0bZ4LBBudhdIjbEj0rXkajviRSWyc3QlEfaFYNMPrt%2B8QGOqUBjerSoGL8A3eBvh4BDZYIVedMnwkXcGNTbm0mV9BQlWEGB3jNTIf43eif9fiYfZyItIkaFTh5tefriODOT6I%2FQUEH7PrgJkWsuEH5wviq1rbP99%2Bvab8pLbBgnXpQF9KPTaZaDfhgByIxoNgmdL4ntmwWs2zJK5Hte4w7UsLNL0mEbhp%2F1dtKb6Y8nl4TFbbKOoklYpdrPBQGoqeHBGjrdUdOcszc&X-Amz-Signature=20d172efc6b6a9e9d72cb03eb258ffbaf74b5a393c328fa506873ba7d35b0932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW3267WC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFGCTosgWeUVQ23aQln9pV2CkQMGbpC3xsOr7EWwrwlxAiEAndIGh91rquydq%2Fi%2BThIZBgXDIFzl5FzDTgKHTwTmxegq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMS1%2BtfvgZxtjb3m4ircA8FKChHo8Iemi5O63kSOz0MkBJvsmZ1P5GGF3M4khsa5JeXMQbWu1weBL8wcfAJjg3sd7xn9fbEuboRicTVG%2BxSkNPCJUFmm7pC6XRkrVQL2vu7xibY6Xlo5c5MBmdlP%2BLO1zQe7IfGRTsLGQXACbJuaLvFM5EPU5oBaQT%2FVXhPA0txgyWL%2BppmqHOfahammHNraeUgFntfHiOcJ2MkmmqAPpCYjDSgMjOdQuPFSzyKHdhErV7TRH976GmrIUn%2F%2B5y3s1NkJmOaVX%2Bulw%2BTxsuKI1ADxlqINxPo7ggljCqBCC7z8rRKCg8%2BqR%2FSTOoHvUA%2FGYdl16PxdKD2Ob7WNlEJLG15bwVS1HqzLnnMDJeqBV5qJ%2FbNwA%2Bp5nzKr7uwPgIbb4zlwEmJNMXi0G18uWOTkDsZXW5zQFi%2BnEB%2B6nygpkWsze94ImLQRRsFyfCHLa8s%2F4ifNyY0WKolyBrAoKjmoQIM3Z0FuTkJ%2B27EQPPKa7ZX9bmy%2FqBn%2BONBC8XxVh8RBUL3Ud4zOIgr2UwDk1wBRmlGuzDFxzbsNIefLxIRMe%2FWYF6KPA7MhQzUjDI%2FnU1h1enDa0%2Fz%2FKtlD%2FPa3ZG0bZ4LBBudhdIjbEj0rXkajviRSWyc3QlEfaFYNMPrt%2B8QGOqUBjerSoGL8A3eBvh4BDZYIVedMnwkXcGNTbm0mV9BQlWEGB3jNTIf43eif9fiYfZyItIkaFTh5tefriODOT6I%2FQUEH7PrgJkWsuEH5wviq1rbP99%2Bvab8pLbBgnXpQF9KPTaZaDfhgByIxoNgmdL4ntmwWs2zJK5Hte4w7UsLNL0mEbhp%2F1dtKb6Y8nl4TFbbKOoklYpdrPBQGoqeHBGjrdUdOcszc&X-Amz-Signature=3390110ed43df3a4db950036435f2a434f5bdcfb0e0269dc74bb65969be3f50b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW3267WC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFGCTosgWeUVQ23aQln9pV2CkQMGbpC3xsOr7EWwrwlxAiEAndIGh91rquydq%2Fi%2BThIZBgXDIFzl5FzDTgKHTwTmxegq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMS1%2BtfvgZxtjb3m4ircA8FKChHo8Iemi5O63kSOz0MkBJvsmZ1P5GGF3M4khsa5JeXMQbWu1weBL8wcfAJjg3sd7xn9fbEuboRicTVG%2BxSkNPCJUFmm7pC6XRkrVQL2vu7xibY6Xlo5c5MBmdlP%2BLO1zQe7IfGRTsLGQXACbJuaLvFM5EPU5oBaQT%2FVXhPA0txgyWL%2BppmqHOfahammHNraeUgFntfHiOcJ2MkmmqAPpCYjDSgMjOdQuPFSzyKHdhErV7TRH976GmrIUn%2F%2B5y3s1NkJmOaVX%2Bulw%2BTxsuKI1ADxlqINxPo7ggljCqBCC7z8rRKCg8%2BqR%2FSTOoHvUA%2FGYdl16PxdKD2Ob7WNlEJLG15bwVS1HqzLnnMDJeqBV5qJ%2FbNwA%2Bp5nzKr7uwPgIbb4zlwEmJNMXi0G18uWOTkDsZXW5zQFi%2BnEB%2B6nygpkWsze94ImLQRRsFyfCHLa8s%2F4ifNyY0WKolyBrAoKjmoQIM3Z0FuTkJ%2B27EQPPKa7ZX9bmy%2FqBn%2BONBC8XxVh8RBUL3Ud4zOIgr2UwDk1wBRmlGuzDFxzbsNIefLxIRMe%2FWYF6KPA7MhQzUjDI%2FnU1h1enDa0%2Fz%2FKtlD%2FPa3ZG0bZ4LBBudhdIjbEj0rXkajviRSWyc3QlEfaFYNMPrt%2B8QGOqUBjerSoGL8A3eBvh4BDZYIVedMnwkXcGNTbm0mV9BQlWEGB3jNTIf43eif9fiYfZyItIkaFTh5tefriODOT6I%2FQUEH7PrgJkWsuEH5wviq1rbP99%2Bvab8pLbBgnXpQF9KPTaZaDfhgByIxoNgmdL4ntmwWs2zJK5Hte4w7UsLNL0mEbhp%2F1dtKb6Y8nl4TFbbKOoklYpdrPBQGoqeHBGjrdUdOcszc&X-Amz-Signature=8970520efa08293d6446e1f44cd7c676c844f6f6af73cc8280f588b82610e8d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

{{< /table >}}

#### description:

publishes the `/scan` topic for RPLIDAR products

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python

    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
    ])
```

<details>
      <summary>Finding Lidar USB port:</summary>
      ```bash
ls /dev/ttyUSB*
```
  </details>

{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

To launch the Lidar node use this command below.

 

{{% alert context="warning" %}}

# NOTE: YOUR RPLIDAR MODEL MIGHT BE DIFFERENT

I am using the a2m8 model so I run the launch file below.

However, your model may be different so please look at this guide to find which launch file to run.

[https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz](https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz)

{{% /alert %}}

```bash
ros2 launch rplidar_ros view_rplidar_a2m8_launch.py scan_mode:=Boost serial_port:=/dev/ttyUSB0
```

```xml
ros2 launch mbot_pkg display.launch.py
```

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW3267WC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFGCTosgWeUVQ23aQln9pV2CkQMGbpC3xsOr7EWwrwlxAiEAndIGh91rquydq%2Fi%2BThIZBgXDIFzl5FzDTgKHTwTmxegq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMS1%2BtfvgZxtjb3m4ircA8FKChHo8Iemi5O63kSOz0MkBJvsmZ1P5GGF3M4khsa5JeXMQbWu1weBL8wcfAJjg3sd7xn9fbEuboRicTVG%2BxSkNPCJUFmm7pC6XRkrVQL2vu7xibY6Xlo5c5MBmdlP%2BLO1zQe7IfGRTsLGQXACbJuaLvFM5EPU5oBaQT%2FVXhPA0txgyWL%2BppmqHOfahammHNraeUgFntfHiOcJ2MkmmqAPpCYjDSgMjOdQuPFSzyKHdhErV7TRH976GmrIUn%2F%2B5y3s1NkJmOaVX%2Bulw%2BTxsuKI1ADxlqINxPo7ggljCqBCC7z8rRKCg8%2BqR%2FSTOoHvUA%2FGYdl16PxdKD2Ob7WNlEJLG15bwVS1HqzLnnMDJeqBV5qJ%2FbNwA%2Bp5nzKr7uwPgIbb4zlwEmJNMXi0G18uWOTkDsZXW5zQFi%2BnEB%2B6nygpkWsze94ImLQRRsFyfCHLa8s%2F4ifNyY0WKolyBrAoKjmoQIM3Z0FuTkJ%2B27EQPPKa7ZX9bmy%2FqBn%2BONBC8XxVh8RBUL3Ud4zOIgr2UwDk1wBRmlGuzDFxzbsNIefLxIRMe%2FWYF6KPA7MhQzUjDI%2FnU1h1enDa0%2Fz%2FKtlD%2FPa3ZG0bZ4LBBudhdIjbEj0rXkajviRSWyc3QlEfaFYNMPrt%2B8QGOqUBjerSoGL8A3eBvh4BDZYIVedMnwkXcGNTbm0mV9BQlWEGB3jNTIf43eif9fiYfZyItIkaFTh5tefriODOT6I%2FQUEH7PrgJkWsuEH5wviq1rbP99%2Bvab8pLbBgnXpQF9KPTaZaDfhgByIxoNgmdL4ntmwWs2zJK5Hte4w7UsLNL0mEbhp%2F1dtKb6Y8nl4TFbbKOoklYpdrPBQGoqeHBGjrdUdOcszc&X-Amz-Signature=86433c470a9b0942d3c3c5fa9767d7a3859f49672d1e307c754c8d0cd6fd6e91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW3267WC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFGCTosgWeUVQ23aQln9pV2CkQMGbpC3xsOr7EWwrwlxAiEAndIGh91rquydq%2Fi%2BThIZBgXDIFzl5FzDTgKHTwTmxegq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMS1%2BtfvgZxtjb3m4ircA8FKChHo8Iemi5O63kSOz0MkBJvsmZ1P5GGF3M4khsa5JeXMQbWu1weBL8wcfAJjg3sd7xn9fbEuboRicTVG%2BxSkNPCJUFmm7pC6XRkrVQL2vu7xibY6Xlo5c5MBmdlP%2BLO1zQe7IfGRTsLGQXACbJuaLvFM5EPU5oBaQT%2FVXhPA0txgyWL%2BppmqHOfahammHNraeUgFntfHiOcJ2MkmmqAPpCYjDSgMjOdQuPFSzyKHdhErV7TRH976GmrIUn%2F%2B5y3s1NkJmOaVX%2Bulw%2BTxsuKI1ADxlqINxPo7ggljCqBCC7z8rRKCg8%2BqR%2FSTOoHvUA%2FGYdl16PxdKD2Ob7WNlEJLG15bwVS1HqzLnnMDJeqBV5qJ%2FbNwA%2Bp5nzKr7uwPgIbb4zlwEmJNMXi0G18uWOTkDsZXW5zQFi%2BnEB%2B6nygpkWsze94ImLQRRsFyfCHLa8s%2F4ifNyY0WKolyBrAoKjmoQIM3Z0FuTkJ%2B27EQPPKa7ZX9bmy%2FqBn%2BONBC8XxVh8RBUL3Ud4zOIgr2UwDk1wBRmlGuzDFxzbsNIefLxIRMe%2FWYF6KPA7MhQzUjDI%2FnU1h1enDa0%2Fz%2FKtlD%2FPa3ZG0bZ4LBBudhdIjbEj0rXkajviRSWyc3QlEfaFYNMPrt%2B8QGOqUBjerSoGL8A3eBvh4BDZYIVedMnwkXcGNTbm0mV9BQlWEGB3jNTIf43eif9fiYfZyItIkaFTh5tefriODOT6I%2FQUEH7PrgJkWsuEH5wviq1rbP99%2Bvab8pLbBgnXpQF9KPTaZaDfhgByIxoNgmdL4ntmwWs2zJK5Hte4w7UsLNL0mEbhp%2F1dtKb6Y8nl4TFbbKOoklYpdrPBQGoqeHBGjrdUdOcszc&X-Amz-Signature=d6c708489453323ea41503abb850c87211b9abf9fd515a179dc11430da52c75b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python

 def generate_launch_description():
		 ...
		 
     lidar_node = Node(
        package='rplidar_ros',
        executable='rplidar_node',
        name='rplidar_node',
        parameters=[{'channel_type': 'serial',
                     'serial_port': '/dev/ttyUSB0', #recomended to do /dev/serial/by-path/...
                     'serial_baudrate': 115200,
                     'frame_id': 'lidar_link',
                     'scan_mode': 'Boost'}],
        output='screen')

 
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
    ])
```

**Result:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```
