---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-02T10:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-02T10:06:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XETNZSUJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAh%2BeDjGvY%2Fx88lg0%2BsNkt72LRdZAiRqJ%2FMOLERiBZ%2BZAiAqoEWDG%2FxThr4EDpSBeBDxOBTDHYlwJTcQqoQBOsXS9ir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMYrkRE0o0wxIaqVx%2FKtwDyNpxjwbYsbDhaLc%2FTxYpIZ%2F5B%2FSseTHrIg9PkA5Y9AetYtX2hyyE1V9Fnl5anRIgdLXdtKlHYlUQrNaTwl6%2F6kzmwieTa80VKJSGVS%2Fjfoo3q08hYrdi862zIKYJJIBk19DCUJmgJgx8hwl6FhfWoCptPukDCvGGZ5W42xSyX8Op36P3YfwIVvCU%2BYDbQ4yj2IdYNZYqm1V6aVCPULw9bhy%2FH7knn6Qc7wX3ELT5DxRD2qDMZXhY0is9Cgmae5oorVVsb0zDyDKhkx4oROQfjWgx%2FhxS2ZYijGeVra7S2jDOnHleI4IgisN5IRjuNnt74DdQifoWJLYog6BXSIg1IysXjCjaItWd%2BNYgN9thrp1yy3yKLuj85hpXjlduqtYzNwiBlKPCyNn5Q85JZFkonjp4uVsvQhzkvY9ZrODa%2BG%2FYVDXDi%2ByXAr6u1s4EouNsULyISMu%2F%2Baq2%2BbGZCwttbWXekrV98t62kAa8gFEwPZpUzB5Txs%2BnDOFEBt2F89kapMDVbTh3qDAmbLW%2BK70FI2j1y%2BSJm7Kl6tpy3F598Z%2BXk%2BS14OrryaM2NVJFJu5WgcUMnCzOPdTvoIPsFwo1KUlKHV4tEEMDf7vlM%2FNx1k2D%2FNLxOY9ON9HNpAswwoC6xAY6pgFf3cnLDMMIIOnlh%2F6MmOJi7XqJuNYbfKkr8syOtB9YTy%2BAQB6MPouTsGMv1xuI%2B7kB5EX1BU4026vuGhpTaFTH9Np%2F4IKAFnnUDc9eEsGDkGwzwo2SBLAga977u0TlhysHG%2BcK4%2BJAfn%2BIzwFMkevv0M6JdTrxn%2BmMUO0ofq2lAECUF3vaYXprCBDwlz%2FPd29D5%2FQQVFaKOVQiI8XLKlziCSNBU2Tx&X-Amz-Signature=25a697217877f72933e0075e866b02f07bae6dcc6a426e909d7f9ffa557d919f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK3G4LXT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrbIhxIOEIYythEflIJvaditosFSC2gglf0EmOZgPBmAIhAMsi5wI2G00sC2vW0gveVcaCBYju8jqCCrRsUcVkBgdsKv8DCB4QABoMNjM3NDIzMTgzODA1IgygsB2E62KhJGsG44Qq3AOR32GVVBYwJjIiJtnmJOUp8Zh8F5qzkLoK9fdtTCUYpPZBPCOsxDzCktTDxumU6tkHWI2fbnRzv656khUxRfFMwEpACqS9t%2FD48%2F06CBxgPRCv3gmbOdCM0H2jmi4Bp%2FwdK%2FcbneR24%2B9GygDX1quyKxUgYr%2FUpjFkY4BNgg2xNdYMpJonpzfM5r9PHiBX55YCAURNntzBI1KvYKGlOrr88Ce%2BNKhBxJxaf9FXM%2Fxgm%2FRPH3ICJAcFG6wVb0NsgU0ObkQ6WZXZARTe5DmmGnMLdEIXiuEQ1IUa9g1CB5G33uEPA%2FlPSstWzIxGr4D4xekU9cVPkQ2vtyVDf92rEXwt6hkGxboGcBmewwp0mhwJHtlOi72Utlh9SgyP9ktDfQulBTDy8Et9akczDCLsV3pxKaGN6J9L4Bbhf%2F87XOlgUbx02Yabbuw8QOSuGpoGDRV5QGXB66orOGbKZhHwNPboHJhekqh%2BgO81NJ2HaqnSIkg3hsm4uOamkPgUFOXlt0KyYAFos5MFRCE0w%2FLWA7MwRaXRd3mswnWnU3jESX4yR9Ppifn7HuwvL%2BZC3a%2BuqrJLS0KP3sQG88t7cULeEczOuodJG3Wcn3oBoDjJrPlSGRxp1MMJET3Jpd2HYzDNgLrEBjqkAb3MD601nwvKtxDTpdWUuByO1B8jQo8cbgVqv3i%2BPtY%2BODEUW4qm%2FphfW%2BZAt%2BfYfkP%2FwYHSpw7YHbrrvOSkGeXSPw5XkQcIqxS%2B8JgwfVoq3%2FrpVZEhofp72T5XXpIrCeSmszQwxcIwGO8Np4Xov1NsrpdwoU0%2FLq%2FdXpNkOhmMRlroppIIJR6DN7O5bZMJrb7a2k4UQcpzEuHBP1CbBQCK2QfH&X-Amz-Signature=46d01e267794acc7593bcb8cc12a656ebadd552b663a1ec014a16c57815ef21e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK3G4LXT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrbIhxIOEIYythEflIJvaditosFSC2gglf0EmOZgPBmAIhAMsi5wI2G00sC2vW0gveVcaCBYju8jqCCrRsUcVkBgdsKv8DCB4QABoMNjM3NDIzMTgzODA1IgygsB2E62KhJGsG44Qq3AOR32GVVBYwJjIiJtnmJOUp8Zh8F5qzkLoK9fdtTCUYpPZBPCOsxDzCktTDxumU6tkHWI2fbnRzv656khUxRfFMwEpACqS9t%2FD48%2F06CBxgPRCv3gmbOdCM0H2jmi4Bp%2FwdK%2FcbneR24%2B9GygDX1quyKxUgYr%2FUpjFkY4BNgg2xNdYMpJonpzfM5r9PHiBX55YCAURNntzBI1KvYKGlOrr88Ce%2BNKhBxJxaf9FXM%2Fxgm%2FRPH3ICJAcFG6wVb0NsgU0ObkQ6WZXZARTe5DmmGnMLdEIXiuEQ1IUa9g1CB5G33uEPA%2FlPSstWzIxGr4D4xekU9cVPkQ2vtyVDf92rEXwt6hkGxboGcBmewwp0mhwJHtlOi72Utlh9SgyP9ktDfQulBTDy8Et9akczDCLsV3pxKaGN6J9L4Bbhf%2F87XOlgUbx02Yabbuw8QOSuGpoGDRV5QGXB66orOGbKZhHwNPboHJhekqh%2BgO81NJ2HaqnSIkg3hsm4uOamkPgUFOXlt0KyYAFos5MFRCE0w%2FLWA7MwRaXRd3mswnWnU3jESX4yR9Ppifn7HuwvL%2BZC3a%2BuqrJLS0KP3sQG88t7cULeEczOuodJG3Wcn3oBoDjJrPlSGRxp1MMJET3Jpd2HYzDNgLrEBjqkAb3MD601nwvKtxDTpdWUuByO1B8jQo8cbgVqv3i%2BPtY%2BODEUW4qm%2FphfW%2BZAt%2BfYfkP%2FwYHSpw7YHbrrvOSkGeXSPw5XkQcIqxS%2B8JgwfVoq3%2FrpVZEhofp72T5XXpIrCeSmszQwxcIwGO8Np4Xov1NsrpdwoU0%2FLq%2FdXpNkOhmMRlroppIIJR6DN7O5bZMJrb7a2k4UQcpzEuHBP1CbBQCK2QfH&X-Amz-Signature=0b1c44a2e0d6d5832d0f244b827035cb3f61f5e3ccabd3fddf1b8b8526a4dc68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK3G4LXT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrbIhxIOEIYythEflIJvaditosFSC2gglf0EmOZgPBmAIhAMsi5wI2G00sC2vW0gveVcaCBYju8jqCCrRsUcVkBgdsKv8DCB4QABoMNjM3NDIzMTgzODA1IgygsB2E62KhJGsG44Qq3AOR32GVVBYwJjIiJtnmJOUp8Zh8F5qzkLoK9fdtTCUYpPZBPCOsxDzCktTDxumU6tkHWI2fbnRzv656khUxRfFMwEpACqS9t%2FD48%2F06CBxgPRCv3gmbOdCM0H2jmi4Bp%2FwdK%2FcbneR24%2B9GygDX1quyKxUgYr%2FUpjFkY4BNgg2xNdYMpJonpzfM5r9PHiBX55YCAURNntzBI1KvYKGlOrr88Ce%2BNKhBxJxaf9FXM%2Fxgm%2FRPH3ICJAcFG6wVb0NsgU0ObkQ6WZXZARTe5DmmGnMLdEIXiuEQ1IUa9g1CB5G33uEPA%2FlPSstWzIxGr4D4xekU9cVPkQ2vtyVDf92rEXwt6hkGxboGcBmewwp0mhwJHtlOi72Utlh9SgyP9ktDfQulBTDy8Et9akczDCLsV3pxKaGN6J9L4Bbhf%2F87XOlgUbx02Yabbuw8QOSuGpoGDRV5QGXB66orOGbKZhHwNPboHJhekqh%2BgO81NJ2HaqnSIkg3hsm4uOamkPgUFOXlt0KyYAFos5MFRCE0w%2FLWA7MwRaXRd3mswnWnU3jESX4yR9Ppifn7HuwvL%2BZC3a%2BuqrJLS0KP3sQG88t7cULeEczOuodJG3Wcn3oBoDjJrPlSGRxp1MMJET3Jpd2HYzDNgLrEBjqkAb3MD601nwvKtxDTpdWUuByO1B8jQo8cbgVqv3i%2BPtY%2BODEUW4qm%2FphfW%2BZAt%2BfYfkP%2FwYHSpw7YHbrrvOSkGeXSPw5XkQcIqxS%2B8JgwfVoq3%2FrpVZEhofp72T5XXpIrCeSmszQwxcIwGO8Np4Xov1NsrpdwoU0%2FLq%2FdXpNkOhmMRlroppIIJR6DN7O5bZMJrb7a2k4UQcpzEuHBP1CbBQCK2QfH&X-Amz-Signature=43c7e5b3692608ba9707584b377d65ed2d7677353bba6d9e35605706046c785a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK3G4LXT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrbIhxIOEIYythEflIJvaditosFSC2gglf0EmOZgPBmAIhAMsi5wI2G00sC2vW0gveVcaCBYju8jqCCrRsUcVkBgdsKv8DCB4QABoMNjM3NDIzMTgzODA1IgygsB2E62KhJGsG44Qq3AOR32GVVBYwJjIiJtnmJOUp8Zh8F5qzkLoK9fdtTCUYpPZBPCOsxDzCktTDxumU6tkHWI2fbnRzv656khUxRfFMwEpACqS9t%2FD48%2F06CBxgPRCv3gmbOdCM0H2jmi4Bp%2FwdK%2FcbneR24%2B9GygDX1quyKxUgYr%2FUpjFkY4BNgg2xNdYMpJonpzfM5r9PHiBX55YCAURNntzBI1KvYKGlOrr88Ce%2BNKhBxJxaf9FXM%2Fxgm%2FRPH3ICJAcFG6wVb0NsgU0ObkQ6WZXZARTe5DmmGnMLdEIXiuEQ1IUa9g1CB5G33uEPA%2FlPSstWzIxGr4D4xekU9cVPkQ2vtyVDf92rEXwt6hkGxboGcBmewwp0mhwJHtlOi72Utlh9SgyP9ktDfQulBTDy8Et9akczDCLsV3pxKaGN6J9L4Bbhf%2F87XOlgUbx02Yabbuw8QOSuGpoGDRV5QGXB66orOGbKZhHwNPboHJhekqh%2BgO81NJ2HaqnSIkg3hsm4uOamkPgUFOXlt0KyYAFos5MFRCE0w%2FLWA7MwRaXRd3mswnWnU3jESX4yR9Ppifn7HuwvL%2BZC3a%2BuqrJLS0KP3sQG88t7cULeEczOuodJG3Wcn3oBoDjJrPlSGRxp1MMJET3Jpd2HYzDNgLrEBjqkAb3MD601nwvKtxDTpdWUuByO1B8jQo8cbgVqv3i%2BPtY%2BODEUW4qm%2FphfW%2BZAt%2BfYfkP%2FwYHSpw7YHbrrvOSkGeXSPw5XkQcIqxS%2B8JgwfVoq3%2FrpVZEhofp72T5XXpIrCeSmszQwxcIwGO8Np4Xov1NsrpdwoU0%2FLq%2FdXpNkOhmMRlroppIIJR6DN7O5bZMJrb7a2k4UQcpzEuHBP1CbBQCK2QfH&X-Amz-Signature=b33fff147e93b1ad43edaff322b2e8cfb48ed8325f2d5cfcdcdcf472050f4f6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK3G4LXT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrbIhxIOEIYythEflIJvaditosFSC2gglf0EmOZgPBmAIhAMsi5wI2G00sC2vW0gveVcaCBYju8jqCCrRsUcVkBgdsKv8DCB4QABoMNjM3NDIzMTgzODA1IgygsB2E62KhJGsG44Qq3AOR32GVVBYwJjIiJtnmJOUp8Zh8F5qzkLoK9fdtTCUYpPZBPCOsxDzCktTDxumU6tkHWI2fbnRzv656khUxRfFMwEpACqS9t%2FD48%2F06CBxgPRCv3gmbOdCM0H2jmi4Bp%2FwdK%2FcbneR24%2B9GygDX1quyKxUgYr%2FUpjFkY4BNgg2xNdYMpJonpzfM5r9PHiBX55YCAURNntzBI1KvYKGlOrr88Ce%2BNKhBxJxaf9FXM%2Fxgm%2FRPH3ICJAcFG6wVb0NsgU0ObkQ6WZXZARTe5DmmGnMLdEIXiuEQ1IUa9g1CB5G33uEPA%2FlPSstWzIxGr4D4xekU9cVPkQ2vtyVDf92rEXwt6hkGxboGcBmewwp0mhwJHtlOi72Utlh9SgyP9ktDfQulBTDy8Et9akczDCLsV3pxKaGN6J9L4Bbhf%2F87XOlgUbx02Yabbuw8QOSuGpoGDRV5QGXB66orOGbKZhHwNPboHJhekqh%2BgO81NJ2HaqnSIkg3hsm4uOamkPgUFOXlt0KyYAFos5MFRCE0w%2FLWA7MwRaXRd3mswnWnU3jESX4yR9Ppifn7HuwvL%2BZC3a%2BuqrJLS0KP3sQG88t7cULeEczOuodJG3Wcn3oBoDjJrPlSGRxp1MMJET3Jpd2HYzDNgLrEBjqkAb3MD601nwvKtxDTpdWUuByO1B8jQo8cbgVqv3i%2BPtY%2BODEUW4qm%2FphfW%2BZAt%2BfYfkP%2FwYHSpw7YHbrrvOSkGeXSPw5XkQcIqxS%2B8JgwfVoq3%2FrpVZEhofp72T5XXpIrCeSmszQwxcIwGO8Np4Xov1NsrpdwoU0%2FLq%2FdXpNkOhmMRlroppIIJR6DN7O5bZMJrb7a2k4UQcpzEuHBP1CbBQCK2QfH&X-Amz-Signature=e6242279663da5e13f7b669aad153e8239c9ec806cbb724753772eb5269c972c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK3G4LXT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrbIhxIOEIYythEflIJvaditosFSC2gglf0EmOZgPBmAIhAMsi5wI2G00sC2vW0gveVcaCBYju8jqCCrRsUcVkBgdsKv8DCB4QABoMNjM3NDIzMTgzODA1IgygsB2E62KhJGsG44Qq3AOR32GVVBYwJjIiJtnmJOUp8Zh8F5qzkLoK9fdtTCUYpPZBPCOsxDzCktTDxumU6tkHWI2fbnRzv656khUxRfFMwEpACqS9t%2FD48%2F06CBxgPRCv3gmbOdCM0H2jmi4Bp%2FwdK%2FcbneR24%2B9GygDX1quyKxUgYr%2FUpjFkY4BNgg2xNdYMpJonpzfM5r9PHiBX55YCAURNntzBI1KvYKGlOrr88Ce%2BNKhBxJxaf9FXM%2Fxgm%2FRPH3ICJAcFG6wVb0NsgU0ObkQ6WZXZARTe5DmmGnMLdEIXiuEQ1IUa9g1CB5G33uEPA%2FlPSstWzIxGr4D4xekU9cVPkQ2vtyVDf92rEXwt6hkGxboGcBmewwp0mhwJHtlOi72Utlh9SgyP9ktDfQulBTDy8Et9akczDCLsV3pxKaGN6J9L4Bbhf%2F87XOlgUbx02Yabbuw8QOSuGpoGDRV5QGXB66orOGbKZhHwNPboHJhekqh%2BgO81NJ2HaqnSIkg3hsm4uOamkPgUFOXlt0KyYAFos5MFRCE0w%2FLWA7MwRaXRd3mswnWnU3jESX4yR9Ppifn7HuwvL%2BZC3a%2BuqrJLS0KP3sQG88t7cULeEczOuodJG3Wcn3oBoDjJrPlSGRxp1MMJET3Jpd2HYzDNgLrEBjqkAb3MD601nwvKtxDTpdWUuByO1B8jQo8cbgVqv3i%2BPtY%2BODEUW4qm%2FphfW%2BZAt%2BfYfkP%2FwYHSpw7YHbrrvOSkGeXSPw5XkQcIqxS%2B8JgwfVoq3%2FrpVZEhofp72T5XXpIrCeSmszQwxcIwGO8Np4Xov1NsrpdwoU0%2FLq%2FdXpNkOhmMRlroppIIJR6DN7O5bZMJrb7a2k4UQcpzEuHBP1CbBQCK2QfH&X-Amz-Signature=8027eda64eeab4a7f4007278ca53d7885ae374efcb8faa4877fcfe46a4d89e0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK3G4LXT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrbIhxIOEIYythEflIJvaditosFSC2gglf0EmOZgPBmAIhAMsi5wI2G00sC2vW0gveVcaCBYju8jqCCrRsUcVkBgdsKv8DCB4QABoMNjM3NDIzMTgzODA1IgygsB2E62KhJGsG44Qq3AOR32GVVBYwJjIiJtnmJOUp8Zh8F5qzkLoK9fdtTCUYpPZBPCOsxDzCktTDxumU6tkHWI2fbnRzv656khUxRfFMwEpACqS9t%2FD48%2F06CBxgPRCv3gmbOdCM0H2jmi4Bp%2FwdK%2FcbneR24%2B9GygDX1quyKxUgYr%2FUpjFkY4BNgg2xNdYMpJonpzfM5r9PHiBX55YCAURNntzBI1KvYKGlOrr88Ce%2BNKhBxJxaf9FXM%2Fxgm%2FRPH3ICJAcFG6wVb0NsgU0ObkQ6WZXZARTe5DmmGnMLdEIXiuEQ1IUa9g1CB5G33uEPA%2FlPSstWzIxGr4D4xekU9cVPkQ2vtyVDf92rEXwt6hkGxboGcBmewwp0mhwJHtlOi72Utlh9SgyP9ktDfQulBTDy8Et9akczDCLsV3pxKaGN6J9L4Bbhf%2F87XOlgUbx02Yabbuw8QOSuGpoGDRV5QGXB66orOGbKZhHwNPboHJhekqh%2BgO81NJ2HaqnSIkg3hsm4uOamkPgUFOXlt0KyYAFos5MFRCE0w%2FLWA7MwRaXRd3mswnWnU3jESX4yR9Ppifn7HuwvL%2BZC3a%2BuqrJLS0KP3sQG88t7cULeEczOuodJG3Wcn3oBoDjJrPlSGRxp1MMJET3Jpd2HYzDNgLrEBjqkAb3MD601nwvKtxDTpdWUuByO1B8jQo8cbgVqv3i%2BPtY%2BODEUW4qm%2FphfW%2BZAt%2BfYfkP%2FwYHSpw7YHbrrvOSkGeXSPw5XkQcIqxS%2B8JgwfVoq3%2FrpVZEhofp72T5XXpIrCeSmszQwxcIwGO8Np4Xov1NsrpdwoU0%2FLq%2FdXpNkOhmMRlroppIIJR6DN7O5bZMJrb7a2k4UQcpzEuHBP1CbBQCK2QfH&X-Amz-Signature=e37e05621ebfbbe00f9d3b8679183b3dd1c7ba4e3ab2dfa48a2f4ff1d8864bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK3G4LXT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrbIhxIOEIYythEflIJvaditosFSC2gglf0EmOZgPBmAIhAMsi5wI2G00sC2vW0gveVcaCBYju8jqCCrRsUcVkBgdsKv8DCB4QABoMNjM3NDIzMTgzODA1IgygsB2E62KhJGsG44Qq3AOR32GVVBYwJjIiJtnmJOUp8Zh8F5qzkLoK9fdtTCUYpPZBPCOsxDzCktTDxumU6tkHWI2fbnRzv656khUxRfFMwEpACqS9t%2FD48%2F06CBxgPRCv3gmbOdCM0H2jmi4Bp%2FwdK%2FcbneR24%2B9GygDX1quyKxUgYr%2FUpjFkY4BNgg2xNdYMpJonpzfM5r9PHiBX55YCAURNntzBI1KvYKGlOrr88Ce%2BNKhBxJxaf9FXM%2Fxgm%2FRPH3ICJAcFG6wVb0NsgU0ObkQ6WZXZARTe5DmmGnMLdEIXiuEQ1IUa9g1CB5G33uEPA%2FlPSstWzIxGr4D4xekU9cVPkQ2vtyVDf92rEXwt6hkGxboGcBmewwp0mhwJHtlOi72Utlh9SgyP9ktDfQulBTDy8Et9akczDCLsV3pxKaGN6J9L4Bbhf%2F87XOlgUbx02Yabbuw8QOSuGpoGDRV5QGXB66orOGbKZhHwNPboHJhekqh%2BgO81NJ2HaqnSIkg3hsm4uOamkPgUFOXlt0KyYAFos5MFRCE0w%2FLWA7MwRaXRd3mswnWnU3jESX4yR9Ppifn7HuwvL%2BZC3a%2BuqrJLS0KP3sQG88t7cULeEczOuodJG3Wcn3oBoDjJrPlSGRxp1MMJET3Jpd2HYzDNgLrEBjqkAb3MD601nwvKtxDTpdWUuByO1B8jQo8cbgVqv3i%2BPtY%2BODEUW4qm%2FphfW%2BZAt%2BfYfkP%2FwYHSpw7YHbrrvOSkGeXSPw5XkQcIqxS%2B8JgwfVoq3%2FrpVZEhofp72T5XXpIrCeSmszQwxcIwGO8Np4Xov1NsrpdwoU0%2FLq%2FdXpNkOhmMRlroppIIJR6DN7O5bZMJrb7a2k4UQcpzEuHBP1CbBQCK2QfH&X-Amz-Signature=9b4c4be7fddc9014089f0abfbee3c87eb877ee7e8c2676513d4df3f32d854181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK3G4LXT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrbIhxIOEIYythEflIJvaditosFSC2gglf0EmOZgPBmAIhAMsi5wI2G00sC2vW0gveVcaCBYju8jqCCrRsUcVkBgdsKv8DCB4QABoMNjM3NDIzMTgzODA1IgygsB2E62KhJGsG44Qq3AOR32GVVBYwJjIiJtnmJOUp8Zh8F5qzkLoK9fdtTCUYpPZBPCOsxDzCktTDxumU6tkHWI2fbnRzv656khUxRfFMwEpACqS9t%2FD48%2F06CBxgPRCv3gmbOdCM0H2jmi4Bp%2FwdK%2FcbneR24%2B9GygDX1quyKxUgYr%2FUpjFkY4BNgg2xNdYMpJonpzfM5r9PHiBX55YCAURNntzBI1KvYKGlOrr88Ce%2BNKhBxJxaf9FXM%2Fxgm%2FRPH3ICJAcFG6wVb0NsgU0ObkQ6WZXZARTe5DmmGnMLdEIXiuEQ1IUa9g1CB5G33uEPA%2FlPSstWzIxGr4D4xekU9cVPkQ2vtyVDf92rEXwt6hkGxboGcBmewwp0mhwJHtlOi72Utlh9SgyP9ktDfQulBTDy8Et9akczDCLsV3pxKaGN6J9L4Bbhf%2F87XOlgUbx02Yabbuw8QOSuGpoGDRV5QGXB66orOGbKZhHwNPboHJhekqh%2BgO81NJ2HaqnSIkg3hsm4uOamkPgUFOXlt0KyYAFos5MFRCE0w%2FLWA7MwRaXRd3mswnWnU3jESX4yR9Ppifn7HuwvL%2BZC3a%2BuqrJLS0KP3sQG88t7cULeEczOuodJG3Wcn3oBoDjJrPlSGRxp1MMJET3Jpd2HYzDNgLrEBjqkAb3MD601nwvKtxDTpdWUuByO1B8jQo8cbgVqv3i%2BPtY%2BODEUW4qm%2FphfW%2BZAt%2BfYfkP%2FwYHSpw7YHbrrvOSkGeXSPw5XkQcIqxS%2B8JgwfVoq3%2FrpVZEhofp72T5XXpIrCeSmszQwxcIwGO8Np4Xov1NsrpdwoU0%2FLq%2FdXpNkOhmMRlroppIIJR6DN7O5bZMJrb7a2k4UQcpzEuHBP1CbBQCK2QfH&X-Amz-Signature=48a2069feba11644743ef863d5ad51fd7258bc4966572de69a36ae2fcd294497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK3G4LXT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrbIhxIOEIYythEflIJvaditosFSC2gglf0EmOZgPBmAIhAMsi5wI2G00sC2vW0gveVcaCBYju8jqCCrRsUcVkBgdsKv8DCB4QABoMNjM3NDIzMTgzODA1IgygsB2E62KhJGsG44Qq3AOR32GVVBYwJjIiJtnmJOUp8Zh8F5qzkLoK9fdtTCUYpPZBPCOsxDzCktTDxumU6tkHWI2fbnRzv656khUxRfFMwEpACqS9t%2FD48%2F06CBxgPRCv3gmbOdCM0H2jmi4Bp%2FwdK%2FcbneR24%2B9GygDX1quyKxUgYr%2FUpjFkY4BNgg2xNdYMpJonpzfM5r9PHiBX55YCAURNntzBI1KvYKGlOrr88Ce%2BNKhBxJxaf9FXM%2Fxgm%2FRPH3ICJAcFG6wVb0NsgU0ObkQ6WZXZARTe5DmmGnMLdEIXiuEQ1IUa9g1CB5G33uEPA%2FlPSstWzIxGr4D4xekU9cVPkQ2vtyVDf92rEXwt6hkGxboGcBmewwp0mhwJHtlOi72Utlh9SgyP9ktDfQulBTDy8Et9akczDCLsV3pxKaGN6J9L4Bbhf%2F87XOlgUbx02Yabbuw8QOSuGpoGDRV5QGXB66orOGbKZhHwNPboHJhekqh%2BgO81NJ2HaqnSIkg3hsm4uOamkPgUFOXlt0KyYAFos5MFRCE0w%2FLWA7MwRaXRd3mswnWnU3jESX4yR9Ppifn7HuwvL%2BZC3a%2BuqrJLS0KP3sQG88t7cULeEczOuodJG3Wcn3oBoDjJrPlSGRxp1MMJET3Jpd2HYzDNgLrEBjqkAb3MD601nwvKtxDTpdWUuByO1B8jQo8cbgVqv3i%2BPtY%2BODEUW4qm%2FphfW%2BZAt%2BfYfkP%2FwYHSpw7YHbrrvOSkGeXSPw5XkQcIqxS%2B8JgwfVoq3%2FrpVZEhofp72T5XXpIrCeSmszQwxcIwGO8Np4Xov1NsrpdwoU0%2FLq%2FdXpNkOhmMRlroppIIJR6DN7O5bZMJrb7a2k4UQcpzEuHBP1CbBQCK2QfH&X-Amz-Signature=d396ba9ae84d180550b850fe1238b003e894b71a42599a4e6d26c5c42cd72adb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
