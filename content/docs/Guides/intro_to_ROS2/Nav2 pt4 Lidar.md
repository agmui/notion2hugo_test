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
  <summary>{{< markdownify >}}What is Lidar?{{< /markdownify >}}</summary>
  
Lidar (light detection and ranging) is using lases to determine how far objects are.

TODO

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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DTYHZE6%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIDlY6qIKCEutkjONNiRX6RHwYNdoGlDD0EsFbfTx2Y8DAiEA0gaXieaM4v%2FvftLoPuCiOPmVzQzjCvSPRPgCZIUatX8qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyrhWVtn37MPmS7HircAz9cjpU3Z1U3%2FMBBjN7VDIxZM3E%2BtqV%2FXxVKe2OvSx1aQDvWEJ5tg32mHENDnwNHGVO2l06d%2B%2FBIbvLHM3VbFQ7xtIXxGXAZZjVPCwmAF11N6bKZfWBrjBlICwNQSfQ37%2B2%2BEInQb9lKft8rrNnrOyNyqwcXOcAfTCWTBZ9b5ii8JxzCcV4PGjfXHbQ3%2B0GzQF3Vie72uPECcfOmzcZFQ6i2r2cmHtx5rAHl%2BEeEJHBalvt8AJjE7PrKdElupxRphWHZLc5FBl8m%2FLHhOpyF1yxW3iOhQiDo%2F0RubzRRWdLaL0KQB3JyfywjrY77DytjL4%2B%2Bj7LyugzmbYpQoiHVFvF4Umt2Qe4Qvq1ixuzvYjsbWx4Do00BPFqWa798TNfMHvTUofDd9sIhsf05028jgcv1nf6tw%2FN%2F2LPQatgpCha9UnoP%2FHWNvka4SucPLKTOj0VqJz1IXKZTDcXdy50KQ3R0SQTeW%2BVnENikMe8zolM47aJpO9EZ31Xp2imFVSF%2FVDBe09imMIV1H%2FjKJrRImrMDsEhYP206SvmzxcyotX1RimEsPWCQ68uSCYpYQQnUTAUiHgA9B7s%2BSvhcR%2B73O6sZXvKONeRRUzTXpYNvUmqfxKWKd%2FxGwRL9XWzvMN%2FNhMUGOqUByPPQvRW5O6Kzo9hyih6r8N6Ktet9UQ7qIOLXDITS5%2FqxTUAURnmIabwQXZDVqtdFwi8vlAIfnMZvgNaVQW%2FmrBJ3alpuSmHlikAwBvEPS7aMYhttN7Hf40RqpZoms18QC5wVvQ6RKKUOUle%2BvtkWhOFAvyWW8FD%2B9WEGr0KI42vkPg0G5V7mqWwgSyg%2FwommopyU%2Fis7qnN0BJchb3cZR5BqVI%2Be&X-Amz-Signature=48f09455c49f7a9d88ceccf3d0f1bc657ef7300b1a716faa54a89366ba109cd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ND7YBN%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCAP2tEojZ5SjeyfXvVGiT%2Fevshx1%2FMXzPOvVel12BjbwIgau1qFV3ajmoTzt0ERs2s01%2F3Uj1QrA5FGbdzVmgWX%2FYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMimOe9CJXa7Z%2FA%2BUSrcAz%2Fntthe10rtMmlH9TAl2Sf2BOg9D2yI8OxcPMWgeZaHWbwUI7S944VumizrSSjB3v%2Fd0x8KiFOdLOHq0zNJjkwwOBN1Um%2F0pA%2BTSncPfO%2BmVItO1ciD0Kt8gFtew8rFq4Obf8cjmZ7s%2BuOdj%2FOqG5s7VE2XSC5oghSLACHXKt2MBwS4%2Bb7l6xnfoqCgr3hUVJtqYAcsFAVLqv7m%2BUNTtp43liSbdHGUMRqAJrxaZMUCPOrApBzqOUA2JUf5vRDM9W6jhCHAafzNGEnJnrFGE4PTz00rN6GSx5iD0NuJIxHlwj4NzJ%2B%2FEMQPdr%2BqX6pH3UbgVhn2H%2FC%2FRKyfvFznIPl7tUlRpDhWJk0pSyvz%2F3YKrWkNB2TCky1vynITj6q%2FewKkWsQTdytonir%2F518g4y2suQvjAxJQt2Dg3kqzlmMRO%2BH02R3RR2%2B1IR6cMtGizT21pZlZWe2qP7Dtvkd%2B8CcvZ6tmN5HAZP1M0wlrTN2rqAj0w7QP5JHItbi6cf7lpj4zIYElX1553flNS%2FDw0blqU%2FrVgXK793hWE1x%2BH3PojcMHAYnrQZyKUZKS5Irzyte8qkzAUgOFLPzZOOlbL0sb8Shsb4%2Fhg%2FRubWoRMHg9hQ%2FCNDHfp82fqvQuMO7NhMUGOqUBm7XEqvrfP5obQVLmMrzuwX5JKQXuqnBMmPebgzGsCRbnH7NQT0Yi0EYUEzsMW1bY3zfAYUVycCX3xmIFx5CfEGXH%2Btx2FCABgv%2F%2FVrXJkowyW3iFN0NikXvHdg2HSTY90%2BgwR7cucu%2Fs52WQauIbZF5mTP6fFsG5LRspQflH24TJ84CHQSk80WwCqIlwgQ%2FCiWH36h50y3PLZmBaeK1ydzIMmv3q&X-Amz-Signature=374ad4d6620282ab93bcb585d945cddc632903d7c514e242fc7a693ea9666aab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ND7YBN%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCAP2tEojZ5SjeyfXvVGiT%2Fevshx1%2FMXzPOvVel12BjbwIgau1qFV3ajmoTzt0ERs2s01%2F3Uj1QrA5FGbdzVmgWX%2FYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMimOe9CJXa7Z%2FA%2BUSrcAz%2Fntthe10rtMmlH9TAl2Sf2BOg9D2yI8OxcPMWgeZaHWbwUI7S944VumizrSSjB3v%2Fd0x8KiFOdLOHq0zNJjkwwOBN1Um%2F0pA%2BTSncPfO%2BmVItO1ciD0Kt8gFtew8rFq4Obf8cjmZ7s%2BuOdj%2FOqG5s7VE2XSC5oghSLACHXKt2MBwS4%2Bb7l6xnfoqCgr3hUVJtqYAcsFAVLqv7m%2BUNTtp43liSbdHGUMRqAJrxaZMUCPOrApBzqOUA2JUf5vRDM9W6jhCHAafzNGEnJnrFGE4PTz00rN6GSx5iD0NuJIxHlwj4NzJ%2B%2FEMQPdr%2BqX6pH3UbgVhn2H%2FC%2FRKyfvFznIPl7tUlRpDhWJk0pSyvz%2F3YKrWkNB2TCky1vynITj6q%2FewKkWsQTdytonir%2F518g4y2suQvjAxJQt2Dg3kqzlmMRO%2BH02R3RR2%2B1IR6cMtGizT21pZlZWe2qP7Dtvkd%2B8CcvZ6tmN5HAZP1M0wlrTN2rqAj0w7QP5JHItbi6cf7lpj4zIYElX1553flNS%2FDw0blqU%2FrVgXK793hWE1x%2BH3PojcMHAYnrQZyKUZKS5Irzyte8qkzAUgOFLPzZOOlbL0sb8Shsb4%2Fhg%2FRubWoRMHg9hQ%2FCNDHfp82fqvQuMO7NhMUGOqUBm7XEqvrfP5obQVLmMrzuwX5JKQXuqnBMmPebgzGsCRbnH7NQT0Yi0EYUEzsMW1bY3zfAYUVycCX3xmIFx5CfEGXH%2Btx2FCABgv%2F%2FVrXJkowyW3iFN0NikXvHdg2HSTY90%2BgwR7cucu%2Fs52WQauIbZF5mTP6fFsG5LRspQflH24TJ84CHQSk80WwCqIlwgQ%2FCiWH36h50y3PLZmBaeK1ydzIMmv3q&X-Amz-Signature=3e618450f74be0aefa4991b7a9dde60250029808edad23fa3c1164c84bc8f58d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ND7YBN%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCAP2tEojZ5SjeyfXvVGiT%2Fevshx1%2FMXzPOvVel12BjbwIgau1qFV3ajmoTzt0ERs2s01%2F3Uj1QrA5FGbdzVmgWX%2FYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMimOe9CJXa7Z%2FA%2BUSrcAz%2Fntthe10rtMmlH9TAl2Sf2BOg9D2yI8OxcPMWgeZaHWbwUI7S944VumizrSSjB3v%2Fd0x8KiFOdLOHq0zNJjkwwOBN1Um%2F0pA%2BTSncPfO%2BmVItO1ciD0Kt8gFtew8rFq4Obf8cjmZ7s%2BuOdj%2FOqG5s7VE2XSC5oghSLACHXKt2MBwS4%2Bb7l6xnfoqCgr3hUVJtqYAcsFAVLqv7m%2BUNTtp43liSbdHGUMRqAJrxaZMUCPOrApBzqOUA2JUf5vRDM9W6jhCHAafzNGEnJnrFGE4PTz00rN6GSx5iD0NuJIxHlwj4NzJ%2B%2FEMQPdr%2BqX6pH3UbgVhn2H%2FC%2FRKyfvFznIPl7tUlRpDhWJk0pSyvz%2F3YKrWkNB2TCky1vynITj6q%2FewKkWsQTdytonir%2F518g4y2suQvjAxJQt2Dg3kqzlmMRO%2BH02R3RR2%2B1IR6cMtGizT21pZlZWe2qP7Dtvkd%2B8CcvZ6tmN5HAZP1M0wlrTN2rqAj0w7QP5JHItbi6cf7lpj4zIYElX1553flNS%2FDw0blqU%2FrVgXK793hWE1x%2BH3PojcMHAYnrQZyKUZKS5Irzyte8qkzAUgOFLPzZOOlbL0sb8Shsb4%2Fhg%2FRubWoRMHg9hQ%2FCNDHfp82fqvQuMO7NhMUGOqUBm7XEqvrfP5obQVLmMrzuwX5JKQXuqnBMmPebgzGsCRbnH7NQT0Yi0EYUEzsMW1bY3zfAYUVycCX3xmIFx5CfEGXH%2Btx2FCABgv%2F%2FVrXJkowyW3iFN0NikXvHdg2HSTY90%2BgwR7cucu%2Fs52WQauIbZF5mTP6fFsG5LRspQflH24TJ84CHQSk80WwCqIlwgQ%2FCiWH36h50y3PLZmBaeK1ydzIMmv3q&X-Amz-Signature=ee704367ddaf7c0ad10611b81ccdd75b65be9d9d923fbf530588336675b591cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ND7YBN%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCAP2tEojZ5SjeyfXvVGiT%2Fevshx1%2FMXzPOvVel12BjbwIgau1qFV3ajmoTzt0ERs2s01%2F3Uj1QrA5FGbdzVmgWX%2FYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMimOe9CJXa7Z%2FA%2BUSrcAz%2Fntthe10rtMmlH9TAl2Sf2BOg9D2yI8OxcPMWgeZaHWbwUI7S944VumizrSSjB3v%2Fd0x8KiFOdLOHq0zNJjkwwOBN1Um%2F0pA%2BTSncPfO%2BmVItO1ciD0Kt8gFtew8rFq4Obf8cjmZ7s%2BuOdj%2FOqG5s7VE2XSC5oghSLACHXKt2MBwS4%2Bb7l6xnfoqCgr3hUVJtqYAcsFAVLqv7m%2BUNTtp43liSbdHGUMRqAJrxaZMUCPOrApBzqOUA2JUf5vRDM9W6jhCHAafzNGEnJnrFGE4PTz00rN6GSx5iD0NuJIxHlwj4NzJ%2B%2FEMQPdr%2BqX6pH3UbgVhn2H%2FC%2FRKyfvFznIPl7tUlRpDhWJk0pSyvz%2F3YKrWkNB2TCky1vynITj6q%2FewKkWsQTdytonir%2F518g4y2suQvjAxJQt2Dg3kqzlmMRO%2BH02R3RR2%2B1IR6cMtGizT21pZlZWe2qP7Dtvkd%2B8CcvZ6tmN5HAZP1M0wlrTN2rqAj0w7QP5JHItbi6cf7lpj4zIYElX1553flNS%2FDw0blqU%2FrVgXK793hWE1x%2BH3PojcMHAYnrQZyKUZKS5Irzyte8qkzAUgOFLPzZOOlbL0sb8Shsb4%2Fhg%2FRubWoRMHg9hQ%2FCNDHfp82fqvQuMO7NhMUGOqUBm7XEqvrfP5obQVLmMrzuwX5JKQXuqnBMmPebgzGsCRbnH7NQT0Yi0EYUEzsMW1bY3zfAYUVycCX3xmIFx5CfEGXH%2Btx2FCABgv%2F%2FVrXJkowyW3iFN0NikXvHdg2HSTY90%2BgwR7cucu%2Fs52WQauIbZF5mTP6fFsG5LRspQflH24TJ84CHQSk80WwCqIlwgQ%2FCiWH36h50y3PLZmBaeK1ydzIMmv3q&X-Amz-Signature=9516afc7b3814d1b7d9734841df228d991f0a9b02611095b17002b1974d8a3a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ND7YBN%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCAP2tEojZ5SjeyfXvVGiT%2Fevshx1%2FMXzPOvVel12BjbwIgau1qFV3ajmoTzt0ERs2s01%2F3Uj1QrA5FGbdzVmgWX%2FYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMimOe9CJXa7Z%2FA%2BUSrcAz%2Fntthe10rtMmlH9TAl2Sf2BOg9D2yI8OxcPMWgeZaHWbwUI7S944VumizrSSjB3v%2Fd0x8KiFOdLOHq0zNJjkwwOBN1Um%2F0pA%2BTSncPfO%2BmVItO1ciD0Kt8gFtew8rFq4Obf8cjmZ7s%2BuOdj%2FOqG5s7VE2XSC5oghSLACHXKt2MBwS4%2Bb7l6xnfoqCgr3hUVJtqYAcsFAVLqv7m%2BUNTtp43liSbdHGUMRqAJrxaZMUCPOrApBzqOUA2JUf5vRDM9W6jhCHAafzNGEnJnrFGE4PTz00rN6GSx5iD0NuJIxHlwj4NzJ%2B%2FEMQPdr%2BqX6pH3UbgVhn2H%2FC%2FRKyfvFznIPl7tUlRpDhWJk0pSyvz%2F3YKrWkNB2TCky1vynITj6q%2FewKkWsQTdytonir%2F518g4y2suQvjAxJQt2Dg3kqzlmMRO%2BH02R3RR2%2B1IR6cMtGizT21pZlZWe2qP7Dtvkd%2B8CcvZ6tmN5HAZP1M0wlrTN2rqAj0w7QP5JHItbi6cf7lpj4zIYElX1553flNS%2FDw0blqU%2FrVgXK793hWE1x%2BH3PojcMHAYnrQZyKUZKS5Irzyte8qkzAUgOFLPzZOOlbL0sb8Shsb4%2Fhg%2FRubWoRMHg9hQ%2FCNDHfp82fqvQuMO7NhMUGOqUBm7XEqvrfP5obQVLmMrzuwX5JKQXuqnBMmPebgzGsCRbnH7NQT0Yi0EYUEzsMW1bY3zfAYUVycCX3xmIFx5CfEGXH%2Btx2FCABgv%2F%2FVrXJkowyW3iFN0NikXvHdg2HSTY90%2BgwR7cucu%2Fs52WQauIbZF5mTP6fFsG5LRspQflH24TJ84CHQSk80WwCqIlwgQ%2FCiWH36h50y3PLZmBaeK1ydzIMmv3q&X-Amz-Signature=2db28bc0d32368a72dbfbdb1adce573061b598f20253799f8124e9c3df6d54cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ND7YBN%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCAP2tEojZ5SjeyfXvVGiT%2Fevshx1%2FMXzPOvVel12BjbwIgau1qFV3ajmoTzt0ERs2s01%2F3Uj1QrA5FGbdzVmgWX%2FYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMimOe9CJXa7Z%2FA%2BUSrcAz%2Fntthe10rtMmlH9TAl2Sf2BOg9D2yI8OxcPMWgeZaHWbwUI7S944VumizrSSjB3v%2Fd0x8KiFOdLOHq0zNJjkwwOBN1Um%2F0pA%2BTSncPfO%2BmVItO1ciD0Kt8gFtew8rFq4Obf8cjmZ7s%2BuOdj%2FOqG5s7VE2XSC5oghSLACHXKt2MBwS4%2Bb7l6xnfoqCgr3hUVJtqYAcsFAVLqv7m%2BUNTtp43liSbdHGUMRqAJrxaZMUCPOrApBzqOUA2JUf5vRDM9W6jhCHAafzNGEnJnrFGE4PTz00rN6GSx5iD0NuJIxHlwj4NzJ%2B%2FEMQPdr%2BqX6pH3UbgVhn2H%2FC%2FRKyfvFznIPl7tUlRpDhWJk0pSyvz%2F3YKrWkNB2TCky1vynITj6q%2FewKkWsQTdytonir%2F518g4y2suQvjAxJQt2Dg3kqzlmMRO%2BH02R3RR2%2B1IR6cMtGizT21pZlZWe2qP7Dtvkd%2B8CcvZ6tmN5HAZP1M0wlrTN2rqAj0w7QP5JHItbi6cf7lpj4zIYElX1553flNS%2FDw0blqU%2FrVgXK793hWE1x%2BH3PojcMHAYnrQZyKUZKS5Irzyte8qkzAUgOFLPzZOOlbL0sb8Shsb4%2Fhg%2FRubWoRMHg9hQ%2FCNDHfp82fqvQuMO7NhMUGOqUBm7XEqvrfP5obQVLmMrzuwX5JKQXuqnBMmPebgzGsCRbnH7NQT0Yi0EYUEzsMW1bY3zfAYUVycCX3xmIFx5CfEGXH%2Btx2FCABgv%2F%2FVrXJkowyW3iFN0NikXvHdg2HSTY90%2BgwR7cucu%2Fs52WQauIbZF5mTP6fFsG5LRspQflH24TJ84CHQSk80WwCqIlwgQ%2FCiWH36h50y3PLZmBaeK1ydzIMmv3q&X-Amz-Signature=7c3db471be4d698944cc8ee1af52c6a22f684f75c7e29c645395142adb7a5c61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ND7YBN%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCAP2tEojZ5SjeyfXvVGiT%2Fevshx1%2FMXzPOvVel12BjbwIgau1qFV3ajmoTzt0ERs2s01%2F3Uj1QrA5FGbdzVmgWX%2FYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMimOe9CJXa7Z%2FA%2BUSrcAz%2Fntthe10rtMmlH9TAl2Sf2BOg9D2yI8OxcPMWgeZaHWbwUI7S944VumizrSSjB3v%2Fd0x8KiFOdLOHq0zNJjkwwOBN1Um%2F0pA%2BTSncPfO%2BmVItO1ciD0Kt8gFtew8rFq4Obf8cjmZ7s%2BuOdj%2FOqG5s7VE2XSC5oghSLACHXKt2MBwS4%2Bb7l6xnfoqCgr3hUVJtqYAcsFAVLqv7m%2BUNTtp43liSbdHGUMRqAJrxaZMUCPOrApBzqOUA2JUf5vRDM9W6jhCHAafzNGEnJnrFGE4PTz00rN6GSx5iD0NuJIxHlwj4NzJ%2B%2FEMQPdr%2BqX6pH3UbgVhn2H%2FC%2FRKyfvFznIPl7tUlRpDhWJk0pSyvz%2F3YKrWkNB2TCky1vynITj6q%2FewKkWsQTdytonir%2F518g4y2suQvjAxJQt2Dg3kqzlmMRO%2BH02R3RR2%2B1IR6cMtGizT21pZlZWe2qP7Dtvkd%2B8CcvZ6tmN5HAZP1M0wlrTN2rqAj0w7QP5JHItbi6cf7lpj4zIYElX1553flNS%2FDw0blqU%2FrVgXK793hWE1x%2BH3PojcMHAYnrQZyKUZKS5Irzyte8qkzAUgOFLPzZOOlbL0sb8Shsb4%2Fhg%2FRubWoRMHg9hQ%2FCNDHfp82fqvQuMO7NhMUGOqUBm7XEqvrfP5obQVLmMrzuwX5JKQXuqnBMmPebgzGsCRbnH7NQT0Yi0EYUEzsMW1bY3zfAYUVycCX3xmIFx5CfEGXH%2Btx2FCABgv%2F%2FVrXJkowyW3iFN0NikXvHdg2HSTY90%2BgwR7cucu%2Fs52WQauIbZF5mTP6fFsG5LRspQflH24TJ84CHQSk80WwCqIlwgQ%2FCiWH36h50y3PLZmBaeK1ydzIMmv3q&X-Amz-Signature=92a7df5a99bb7a9308bf3c88294262a223da898e82902001b4e503d163474ab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ND7YBN%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCAP2tEojZ5SjeyfXvVGiT%2Fevshx1%2FMXzPOvVel12BjbwIgau1qFV3ajmoTzt0ERs2s01%2F3Uj1QrA5FGbdzVmgWX%2FYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMimOe9CJXa7Z%2FA%2BUSrcAz%2Fntthe10rtMmlH9TAl2Sf2BOg9D2yI8OxcPMWgeZaHWbwUI7S944VumizrSSjB3v%2Fd0x8KiFOdLOHq0zNJjkwwOBN1Um%2F0pA%2BTSncPfO%2BmVItO1ciD0Kt8gFtew8rFq4Obf8cjmZ7s%2BuOdj%2FOqG5s7VE2XSC5oghSLACHXKt2MBwS4%2Bb7l6xnfoqCgr3hUVJtqYAcsFAVLqv7m%2BUNTtp43liSbdHGUMRqAJrxaZMUCPOrApBzqOUA2JUf5vRDM9W6jhCHAafzNGEnJnrFGE4PTz00rN6GSx5iD0NuJIxHlwj4NzJ%2B%2FEMQPdr%2BqX6pH3UbgVhn2H%2FC%2FRKyfvFznIPl7tUlRpDhWJk0pSyvz%2F3YKrWkNB2TCky1vynITj6q%2FewKkWsQTdytonir%2F518g4y2suQvjAxJQt2Dg3kqzlmMRO%2BH02R3RR2%2B1IR6cMtGizT21pZlZWe2qP7Dtvkd%2B8CcvZ6tmN5HAZP1M0wlrTN2rqAj0w7QP5JHItbi6cf7lpj4zIYElX1553flNS%2FDw0blqU%2FrVgXK793hWE1x%2BH3PojcMHAYnrQZyKUZKS5Irzyte8qkzAUgOFLPzZOOlbL0sb8Shsb4%2Fhg%2FRubWoRMHg9hQ%2FCNDHfp82fqvQuMO7NhMUGOqUBm7XEqvrfP5obQVLmMrzuwX5JKQXuqnBMmPebgzGsCRbnH7NQT0Yi0EYUEzsMW1bY3zfAYUVycCX3xmIFx5CfEGXH%2Btx2FCABgv%2F%2FVrXJkowyW3iFN0NikXvHdg2HSTY90%2BgwR7cucu%2Fs52WQauIbZF5mTP6fFsG5LRspQflH24TJ84CHQSk80WwCqIlwgQ%2FCiWH36h50y3PLZmBaeK1ydzIMmv3q&X-Amz-Signature=14478edcd780b7bd4d3572ffe5bda4786bade729f7c45e2fe2ae411dac4791ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Params:

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

#### description:

publishes the `/scan` topic for RPLIDAR products

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python "5-5","10-13"

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
  <summary>{{< markdownify >}}Finding Lidar USB port:{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ND7YBN%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCAP2tEojZ5SjeyfXvVGiT%2Fevshx1%2FMXzPOvVel12BjbwIgau1qFV3ajmoTzt0ERs2s01%2F3Uj1QrA5FGbdzVmgWX%2FYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMimOe9CJXa7Z%2FA%2BUSrcAz%2Fntthe10rtMmlH9TAl2Sf2BOg9D2yI8OxcPMWgeZaHWbwUI7S944VumizrSSjB3v%2Fd0x8KiFOdLOHq0zNJjkwwOBN1Um%2F0pA%2BTSncPfO%2BmVItO1ciD0Kt8gFtew8rFq4Obf8cjmZ7s%2BuOdj%2FOqG5s7VE2XSC5oghSLACHXKt2MBwS4%2Bb7l6xnfoqCgr3hUVJtqYAcsFAVLqv7m%2BUNTtp43liSbdHGUMRqAJrxaZMUCPOrApBzqOUA2JUf5vRDM9W6jhCHAafzNGEnJnrFGE4PTz00rN6GSx5iD0NuJIxHlwj4NzJ%2B%2FEMQPdr%2BqX6pH3UbgVhn2H%2FC%2FRKyfvFznIPl7tUlRpDhWJk0pSyvz%2F3YKrWkNB2TCky1vynITj6q%2FewKkWsQTdytonir%2F518g4y2suQvjAxJQt2Dg3kqzlmMRO%2BH02R3RR2%2B1IR6cMtGizT21pZlZWe2qP7Dtvkd%2B8CcvZ6tmN5HAZP1M0wlrTN2rqAj0w7QP5JHItbi6cf7lpj4zIYElX1553flNS%2FDw0blqU%2FrVgXK793hWE1x%2BH3PojcMHAYnrQZyKUZKS5Irzyte8qkzAUgOFLPzZOOlbL0sb8Shsb4%2Fhg%2FRubWoRMHg9hQ%2FCNDHfp82fqvQuMO7NhMUGOqUBm7XEqvrfP5obQVLmMrzuwX5JKQXuqnBMmPebgzGsCRbnH7NQT0Yi0EYUEzsMW1bY3zfAYUVycCX3xmIFx5CfEGXH%2Btx2FCABgv%2F%2FVrXJkowyW3iFN0NikXvHdg2HSTY90%2BgwR7cucu%2Fs52WQauIbZF5mTP6fFsG5LRspQflH24TJ84CHQSk80WwCqIlwgQ%2FCiWH36h50y3PLZmBaeK1ydzIMmv3q&X-Amz-Signature=107e343f0036e3dc917c6e3382cdb8491f0945600142e307ec3be31f4d6da979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ND7YBN%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCAP2tEojZ5SjeyfXvVGiT%2Fevshx1%2FMXzPOvVel12BjbwIgau1qFV3ajmoTzt0ERs2s01%2F3Uj1QrA5FGbdzVmgWX%2FYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMimOe9CJXa7Z%2FA%2BUSrcAz%2Fntthe10rtMmlH9TAl2Sf2BOg9D2yI8OxcPMWgeZaHWbwUI7S944VumizrSSjB3v%2Fd0x8KiFOdLOHq0zNJjkwwOBN1Um%2F0pA%2BTSncPfO%2BmVItO1ciD0Kt8gFtew8rFq4Obf8cjmZ7s%2BuOdj%2FOqG5s7VE2XSC5oghSLACHXKt2MBwS4%2Bb7l6xnfoqCgr3hUVJtqYAcsFAVLqv7m%2BUNTtp43liSbdHGUMRqAJrxaZMUCPOrApBzqOUA2JUf5vRDM9W6jhCHAafzNGEnJnrFGE4PTz00rN6GSx5iD0NuJIxHlwj4NzJ%2B%2FEMQPdr%2BqX6pH3UbgVhn2H%2FC%2FRKyfvFznIPl7tUlRpDhWJk0pSyvz%2F3YKrWkNB2TCky1vynITj6q%2FewKkWsQTdytonir%2F518g4y2suQvjAxJQt2Dg3kqzlmMRO%2BH02R3RR2%2B1IR6cMtGizT21pZlZWe2qP7Dtvkd%2B8CcvZ6tmN5HAZP1M0wlrTN2rqAj0w7QP5JHItbi6cf7lpj4zIYElX1553flNS%2FDw0blqU%2FrVgXK793hWE1x%2BH3PojcMHAYnrQZyKUZKS5Irzyte8qkzAUgOFLPzZOOlbL0sb8Shsb4%2Fhg%2FRubWoRMHg9hQ%2FCNDHfp82fqvQuMO7NhMUGOqUBm7XEqvrfP5obQVLmMrzuwX5JKQXuqnBMmPebgzGsCRbnH7NQT0Yi0EYUEzsMW1bY3zfAYUVycCX3xmIFx5CfEGXH%2Btx2FCABgv%2F%2FVrXJkowyW3iFN0NikXvHdg2HSTY90%2BgwR7cucu%2Fs52WQauIbZF5mTP6fFsG5LRspQflH24TJ84CHQSk80WwCqIlwgQ%2FCiWH36h50y3PLZmBaeK1ydzIMmv3q&X-Amz-Signature=9516afc7b3814d1b7d9734841df228d991f0a9b02611095b17002b1974d8a3a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python "5-14","30-30"

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
