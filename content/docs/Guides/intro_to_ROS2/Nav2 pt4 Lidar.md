---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-02T01:09:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-02T01:09:00.000Z"
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

TODO: check inertial block

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

    ~~<inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.125"/>
      <inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.001" />
    </inertial>~~

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655CVQPIX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMyHImgyQ8Bop1nBKUnBNpjAxiUKAq5v2njN7OMo%2BpGAiEApzkeGmQc%2FYogjNlWyIae1YLNeVnCd4ZDxaR9IB26wawqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG5NNRpUbneZv%2F1wRyrcA8DetlJ0wdRlICbRfuqULZIShlqEiZ4PGmIax8OKoEHQdAI6KgYuH6oPbPlbzl6gnVCNpF7V0nh0R4UOrm4M7zycoeUCMM7ZHw61HX2ZLmMDOHZspQrWEDWTjB6pUB9556qFbtSYS0uBtugV4vlWLcuG%2BNCqImGK9NeO9hkNrjJBgAgiTUuBJkJ0NeDI4XTkPOPmLJ9GTn0CkAey7eFLXTitQRvk4A3xjtml8dOt%2Fu2BJe%2BBCX5aSIRZ6w0Q4cPh0ChLVPMDrZmv4pbfwiDBcguYkR%2BunPOidiT2dIi1KtvFz%2BI0n203MaluqoFzdgbZj6ylZRGCVDJhPstBIE6G0z8LSqpRY73XAGN7iZLHC7BDUMex4t%2BCw57GSNZh%2Bgm9gc9MIsNnSkpOpB9LDrqsVBQtGJZp9qYaLxWYCDT7YocBQaGu891QvCeylrUjBDhD3v6ILIDvJl3T3RqExMEJhOEQ5%2BsTQnFK%2BUBZNHt6hy4jfXKulCYJLnNlseCWeR%2B7mkHyvUFQIsB6fgTIkMDnDn2ZYv2TjxLP%2BlmRiU834YuF6CRCmaxoCzF%2FpevxaXd%2BJhrzHrYSfj23LqPomqwW5m%2F0oX%2BoQ%2F5GtmV2mnUvDRNCUb7Jn%2Flf91Uh3CNLMLDStcQGOqUBU%2B7UQFY6lt%2BaahJRf8TtSF9yrH%2F8AZOSPW0ySJmM6A4xg8GZsyLrVNU9k1X4SAj%2BWZzu9QWXAeO5Pmi56SRIuZi6rTeR1AI5sNzSnmLsbfPU9YQlAKEP7WemP3BfhMQ58i7%2B4MDy7WSrcuQ6YI6oT0Y6%2F%2B6FvcYFl4Xx2gp4%2Bt5%2BOSqY1uX092powRETLlBBk2djgY4EEVPFIBfOVQys9gfneWJq&X-Amz-Signature=ad6f4d65729bcb55fcf1629f4fcd024ecb46fa0cc631006d484b0baadfcc8a06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAWAUYTN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHSBoNRl%2BicEwq%2BP8A58O99fTriiO4ksBWlSPKaSXc7AiEA2Yp4PxPliVc12lVqxKA1Jz4VBgRB3dEybEV1c%2Fll2QQqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9ZK1zky5kzR33P9SrcA%2F1pK%2Fx7fxRxHNauiqBhy%2FA0tqYIKYAtk%2FdBvmSc9fyxgMbbquO0fIv6eZqmqVExi%2FI1gRJMXU%2BJToNbitehIi667HaQ6Y8A1HfUaAxJmtINlVSoGhe8xfD4DRz0ko1A%2BBQ98e42utr%2B4W2%2FFg4tApb06MJjnywhQ11Tz%2BuWtA%2FteL%2BZa2K2UUqtT0vkSvQzeGu6gi1mXbxw5cVZGdFgTrOGBBr0aQnErHwHbZBoiLBRkhHS6beLU4FKANR9YiM%2BRdxszfEIdViPwrR1gsINAH0WN2t8i7JR5qMeMVG2wVPRcvDkgL5UBLMHCWVp0Bbq0h495kGuRIc3GDiDdveVuZlwfhP3%2BVCl6s7E9KffwN1FN4V43lmEtrrGE4qT0RBoPQAWly4V7S5fJKcXIfKJYcKfgsnvBNv1Jt5k1%2Bw2DEh789Iu8nELMihWhwEiF5dCKnpy6z7QPf%2FUTpifCLbgGhH%2FpQNoJ40lfI58wuYuWdrwvdtrsf1ay8FgFp4oaL%2FvD75%2FmpDgr%2BgtDyK6I2S%2Fg5o5eZ2UXmzAYFx4S458OybFtF2WTCl%2FzqwDKKtd0COmC4T5iN6NLUzvKZFPRXkAFKCg91tSd%2F9Q4BSMYCXZCKB2ER52x8se4fWAq95qMOjStcQGOqUBjCELJ8GCSl66J4vPkB9081XXgzP%2FjtdcAhmx10RjgXq6JKL720BSTEwHs2lP7rT6UX49Gb2NpDCsSfpj0gw8zxXVhP3NIg2SKRi7TeIrEDNo%2BfGLTloztXqJsxe1mIM4MGdaSLyhorHZCLwJee3xxDjEwabacZlBeST7EPuvZl3kwwkRaiqheueHMEBRGe6Y%2FnR8y4y5ajQ%2BriSVsdA4hcCl47uo&X-Amz-Signature=099a828ba43c7f4ee064f146eda9a07624d5a5f450aebc2446ba8ef1ad03acb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAWAUYTN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHSBoNRl%2BicEwq%2BP8A58O99fTriiO4ksBWlSPKaSXc7AiEA2Yp4PxPliVc12lVqxKA1Jz4VBgRB3dEybEV1c%2Fll2QQqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9ZK1zky5kzR33P9SrcA%2F1pK%2Fx7fxRxHNauiqBhy%2FA0tqYIKYAtk%2FdBvmSc9fyxgMbbquO0fIv6eZqmqVExi%2FI1gRJMXU%2BJToNbitehIi667HaQ6Y8A1HfUaAxJmtINlVSoGhe8xfD4DRz0ko1A%2BBQ98e42utr%2B4W2%2FFg4tApb06MJjnywhQ11Tz%2BuWtA%2FteL%2BZa2K2UUqtT0vkSvQzeGu6gi1mXbxw5cVZGdFgTrOGBBr0aQnErHwHbZBoiLBRkhHS6beLU4FKANR9YiM%2BRdxszfEIdViPwrR1gsINAH0WN2t8i7JR5qMeMVG2wVPRcvDkgL5UBLMHCWVp0Bbq0h495kGuRIc3GDiDdveVuZlwfhP3%2BVCl6s7E9KffwN1FN4V43lmEtrrGE4qT0RBoPQAWly4V7S5fJKcXIfKJYcKfgsnvBNv1Jt5k1%2Bw2DEh789Iu8nELMihWhwEiF5dCKnpy6z7QPf%2FUTpifCLbgGhH%2FpQNoJ40lfI58wuYuWdrwvdtrsf1ay8FgFp4oaL%2FvD75%2FmpDgr%2BgtDyK6I2S%2Fg5o5eZ2UXmzAYFx4S458OybFtF2WTCl%2FzqwDKKtd0COmC4T5iN6NLUzvKZFPRXkAFKCg91tSd%2F9Q4BSMYCXZCKB2ER52x8se4fWAq95qMOjStcQGOqUBjCELJ8GCSl66J4vPkB9081XXgzP%2FjtdcAhmx10RjgXq6JKL720BSTEwHs2lP7rT6UX49Gb2NpDCsSfpj0gw8zxXVhP3NIg2SKRi7TeIrEDNo%2BfGLTloztXqJsxe1mIM4MGdaSLyhorHZCLwJee3xxDjEwabacZlBeST7EPuvZl3kwwkRaiqheueHMEBRGe6Y%2FnR8y4y5ajQ%2BriSVsdA4hcCl47uo&X-Amz-Signature=94025865ab4fd7f6a9cd60b4016addc251d3c7b2137f2535ffb556aeafc44b64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAWAUYTN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHSBoNRl%2BicEwq%2BP8A58O99fTriiO4ksBWlSPKaSXc7AiEA2Yp4PxPliVc12lVqxKA1Jz4VBgRB3dEybEV1c%2Fll2QQqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9ZK1zky5kzR33P9SrcA%2F1pK%2Fx7fxRxHNauiqBhy%2FA0tqYIKYAtk%2FdBvmSc9fyxgMbbquO0fIv6eZqmqVExi%2FI1gRJMXU%2BJToNbitehIi667HaQ6Y8A1HfUaAxJmtINlVSoGhe8xfD4DRz0ko1A%2BBQ98e42utr%2B4W2%2FFg4tApb06MJjnywhQ11Tz%2BuWtA%2FteL%2BZa2K2UUqtT0vkSvQzeGu6gi1mXbxw5cVZGdFgTrOGBBr0aQnErHwHbZBoiLBRkhHS6beLU4FKANR9YiM%2BRdxszfEIdViPwrR1gsINAH0WN2t8i7JR5qMeMVG2wVPRcvDkgL5UBLMHCWVp0Bbq0h495kGuRIc3GDiDdveVuZlwfhP3%2BVCl6s7E9KffwN1FN4V43lmEtrrGE4qT0RBoPQAWly4V7S5fJKcXIfKJYcKfgsnvBNv1Jt5k1%2Bw2DEh789Iu8nELMihWhwEiF5dCKnpy6z7QPf%2FUTpifCLbgGhH%2FpQNoJ40lfI58wuYuWdrwvdtrsf1ay8FgFp4oaL%2FvD75%2FmpDgr%2BgtDyK6I2S%2Fg5o5eZ2UXmzAYFx4S458OybFtF2WTCl%2FzqwDKKtd0COmC4T5iN6NLUzvKZFPRXkAFKCg91tSd%2F9Q4BSMYCXZCKB2ER52x8se4fWAq95qMOjStcQGOqUBjCELJ8GCSl66J4vPkB9081XXgzP%2FjtdcAhmx10RjgXq6JKL720BSTEwHs2lP7rT6UX49Gb2NpDCsSfpj0gw8zxXVhP3NIg2SKRi7TeIrEDNo%2BfGLTloztXqJsxe1mIM4MGdaSLyhorHZCLwJee3xxDjEwabacZlBeST7EPuvZl3kwwkRaiqheueHMEBRGe6Y%2FnR8y4y5ajQ%2BriSVsdA4hcCl47uo&X-Amz-Signature=e440f75c048e661ea1418010c870aa9aa3f63ee9f78d09fdc3cdd86bde2e7cbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAWAUYTN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHSBoNRl%2BicEwq%2BP8A58O99fTriiO4ksBWlSPKaSXc7AiEA2Yp4PxPliVc12lVqxKA1Jz4VBgRB3dEybEV1c%2Fll2QQqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9ZK1zky5kzR33P9SrcA%2F1pK%2Fx7fxRxHNauiqBhy%2FA0tqYIKYAtk%2FdBvmSc9fyxgMbbquO0fIv6eZqmqVExi%2FI1gRJMXU%2BJToNbitehIi667HaQ6Y8A1HfUaAxJmtINlVSoGhe8xfD4DRz0ko1A%2BBQ98e42utr%2B4W2%2FFg4tApb06MJjnywhQ11Tz%2BuWtA%2FteL%2BZa2K2UUqtT0vkSvQzeGu6gi1mXbxw5cVZGdFgTrOGBBr0aQnErHwHbZBoiLBRkhHS6beLU4FKANR9YiM%2BRdxszfEIdViPwrR1gsINAH0WN2t8i7JR5qMeMVG2wVPRcvDkgL5UBLMHCWVp0Bbq0h495kGuRIc3GDiDdveVuZlwfhP3%2BVCl6s7E9KffwN1FN4V43lmEtrrGE4qT0RBoPQAWly4V7S5fJKcXIfKJYcKfgsnvBNv1Jt5k1%2Bw2DEh789Iu8nELMihWhwEiF5dCKnpy6z7QPf%2FUTpifCLbgGhH%2FpQNoJ40lfI58wuYuWdrwvdtrsf1ay8FgFp4oaL%2FvD75%2FmpDgr%2BgtDyK6I2S%2Fg5o5eZ2UXmzAYFx4S458OybFtF2WTCl%2FzqwDKKtd0COmC4T5iN6NLUzvKZFPRXkAFKCg91tSd%2F9Q4BSMYCXZCKB2ER52x8se4fWAq95qMOjStcQGOqUBjCELJ8GCSl66J4vPkB9081XXgzP%2FjtdcAhmx10RjgXq6JKL720BSTEwHs2lP7rT6UX49Gb2NpDCsSfpj0gw8zxXVhP3NIg2SKRi7TeIrEDNo%2BfGLTloztXqJsxe1mIM4MGdaSLyhorHZCLwJee3xxDjEwabacZlBeST7EPuvZl3kwwkRaiqheueHMEBRGe6Y%2FnR8y4y5ajQ%2BriSVsdA4hcCl47uo&X-Amz-Signature=cb181c017e85c012d08256f1b2b57f365aa193d7f5388172397320b68842cc43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAWAUYTN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHSBoNRl%2BicEwq%2BP8A58O99fTriiO4ksBWlSPKaSXc7AiEA2Yp4PxPliVc12lVqxKA1Jz4VBgRB3dEybEV1c%2Fll2QQqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9ZK1zky5kzR33P9SrcA%2F1pK%2Fx7fxRxHNauiqBhy%2FA0tqYIKYAtk%2FdBvmSc9fyxgMbbquO0fIv6eZqmqVExi%2FI1gRJMXU%2BJToNbitehIi667HaQ6Y8A1HfUaAxJmtINlVSoGhe8xfD4DRz0ko1A%2BBQ98e42utr%2B4W2%2FFg4tApb06MJjnywhQ11Tz%2BuWtA%2FteL%2BZa2K2UUqtT0vkSvQzeGu6gi1mXbxw5cVZGdFgTrOGBBr0aQnErHwHbZBoiLBRkhHS6beLU4FKANR9YiM%2BRdxszfEIdViPwrR1gsINAH0WN2t8i7JR5qMeMVG2wVPRcvDkgL5UBLMHCWVp0Bbq0h495kGuRIc3GDiDdveVuZlwfhP3%2BVCl6s7E9KffwN1FN4V43lmEtrrGE4qT0RBoPQAWly4V7S5fJKcXIfKJYcKfgsnvBNv1Jt5k1%2Bw2DEh789Iu8nELMihWhwEiF5dCKnpy6z7QPf%2FUTpifCLbgGhH%2FpQNoJ40lfI58wuYuWdrwvdtrsf1ay8FgFp4oaL%2FvD75%2FmpDgr%2BgtDyK6I2S%2Fg5o5eZ2UXmzAYFx4S458OybFtF2WTCl%2FzqwDKKtd0COmC4T5iN6NLUzvKZFPRXkAFKCg91tSd%2F9Q4BSMYCXZCKB2ER52x8se4fWAq95qMOjStcQGOqUBjCELJ8GCSl66J4vPkB9081XXgzP%2FjtdcAhmx10RjgXq6JKL720BSTEwHs2lP7rT6UX49Gb2NpDCsSfpj0gw8zxXVhP3NIg2SKRi7TeIrEDNo%2BfGLTloztXqJsxe1mIM4MGdaSLyhorHZCLwJee3xxDjEwabacZlBeST7EPuvZl3kwwkRaiqheueHMEBRGe6Y%2FnR8y4y5ajQ%2BriSVsdA4hcCl47uo&X-Amz-Signature=33f3d724a3fb037bd27a2d8c3f3e1d782c8ca53b49eb7decce272c7f46315d8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAWAUYTN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHSBoNRl%2BicEwq%2BP8A58O99fTriiO4ksBWlSPKaSXc7AiEA2Yp4PxPliVc12lVqxKA1Jz4VBgRB3dEybEV1c%2Fll2QQqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9ZK1zky5kzR33P9SrcA%2F1pK%2Fx7fxRxHNauiqBhy%2FA0tqYIKYAtk%2FdBvmSc9fyxgMbbquO0fIv6eZqmqVExi%2FI1gRJMXU%2BJToNbitehIi667HaQ6Y8A1HfUaAxJmtINlVSoGhe8xfD4DRz0ko1A%2BBQ98e42utr%2B4W2%2FFg4tApb06MJjnywhQ11Tz%2BuWtA%2FteL%2BZa2K2UUqtT0vkSvQzeGu6gi1mXbxw5cVZGdFgTrOGBBr0aQnErHwHbZBoiLBRkhHS6beLU4FKANR9YiM%2BRdxszfEIdViPwrR1gsINAH0WN2t8i7JR5qMeMVG2wVPRcvDkgL5UBLMHCWVp0Bbq0h495kGuRIc3GDiDdveVuZlwfhP3%2BVCl6s7E9KffwN1FN4V43lmEtrrGE4qT0RBoPQAWly4V7S5fJKcXIfKJYcKfgsnvBNv1Jt5k1%2Bw2DEh789Iu8nELMihWhwEiF5dCKnpy6z7QPf%2FUTpifCLbgGhH%2FpQNoJ40lfI58wuYuWdrwvdtrsf1ay8FgFp4oaL%2FvD75%2FmpDgr%2BgtDyK6I2S%2Fg5o5eZ2UXmzAYFx4S458OybFtF2WTCl%2FzqwDKKtd0COmC4T5iN6NLUzvKZFPRXkAFKCg91tSd%2F9Q4BSMYCXZCKB2ER52x8se4fWAq95qMOjStcQGOqUBjCELJ8GCSl66J4vPkB9081XXgzP%2FjtdcAhmx10RjgXq6JKL720BSTEwHs2lP7rT6UX49Gb2NpDCsSfpj0gw8zxXVhP3NIg2SKRi7TeIrEDNo%2BfGLTloztXqJsxe1mIM4MGdaSLyhorHZCLwJee3xxDjEwabacZlBeST7EPuvZl3kwwkRaiqheueHMEBRGe6Y%2FnR8y4y5ajQ%2BriSVsdA4hcCl47uo&X-Amz-Signature=5baf0bb238e37507e7b12e2f5d5b8b5f0516bc24d0475130a048f0a53869cf76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAWAUYTN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHSBoNRl%2BicEwq%2BP8A58O99fTriiO4ksBWlSPKaSXc7AiEA2Yp4PxPliVc12lVqxKA1Jz4VBgRB3dEybEV1c%2Fll2QQqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9ZK1zky5kzR33P9SrcA%2F1pK%2Fx7fxRxHNauiqBhy%2FA0tqYIKYAtk%2FdBvmSc9fyxgMbbquO0fIv6eZqmqVExi%2FI1gRJMXU%2BJToNbitehIi667HaQ6Y8A1HfUaAxJmtINlVSoGhe8xfD4DRz0ko1A%2BBQ98e42utr%2B4W2%2FFg4tApb06MJjnywhQ11Tz%2BuWtA%2FteL%2BZa2K2UUqtT0vkSvQzeGu6gi1mXbxw5cVZGdFgTrOGBBr0aQnErHwHbZBoiLBRkhHS6beLU4FKANR9YiM%2BRdxszfEIdViPwrR1gsINAH0WN2t8i7JR5qMeMVG2wVPRcvDkgL5UBLMHCWVp0Bbq0h495kGuRIc3GDiDdveVuZlwfhP3%2BVCl6s7E9KffwN1FN4V43lmEtrrGE4qT0RBoPQAWly4V7S5fJKcXIfKJYcKfgsnvBNv1Jt5k1%2Bw2DEh789Iu8nELMihWhwEiF5dCKnpy6z7QPf%2FUTpifCLbgGhH%2FpQNoJ40lfI58wuYuWdrwvdtrsf1ay8FgFp4oaL%2FvD75%2FmpDgr%2BgtDyK6I2S%2Fg5o5eZ2UXmzAYFx4S458OybFtF2WTCl%2FzqwDKKtd0COmC4T5iN6NLUzvKZFPRXkAFKCg91tSd%2F9Q4BSMYCXZCKB2ER52x8se4fWAq95qMOjStcQGOqUBjCELJ8GCSl66J4vPkB9081XXgzP%2FjtdcAhmx10RjgXq6JKL720BSTEwHs2lP7rT6UX49Gb2NpDCsSfpj0gw8zxXVhP3NIg2SKRi7TeIrEDNo%2BfGLTloztXqJsxe1mIM4MGdaSLyhorHZCLwJee3xxDjEwabacZlBeST7EPuvZl3kwwkRaiqheueHMEBRGe6Y%2FnR8y4y5ajQ%2BriSVsdA4hcCl47uo&X-Amz-Signature=9ddcafd149c25d6fec7a9f32cf5ecb79f0d774f02d9772dc401bd96e4db6226e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAWAUYTN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHSBoNRl%2BicEwq%2BP8A58O99fTriiO4ksBWlSPKaSXc7AiEA2Yp4PxPliVc12lVqxKA1Jz4VBgRB3dEybEV1c%2Fll2QQqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9ZK1zky5kzR33P9SrcA%2F1pK%2Fx7fxRxHNauiqBhy%2FA0tqYIKYAtk%2FdBvmSc9fyxgMbbquO0fIv6eZqmqVExi%2FI1gRJMXU%2BJToNbitehIi667HaQ6Y8A1HfUaAxJmtINlVSoGhe8xfD4DRz0ko1A%2BBQ98e42utr%2B4W2%2FFg4tApb06MJjnywhQ11Tz%2BuWtA%2FteL%2BZa2K2UUqtT0vkSvQzeGu6gi1mXbxw5cVZGdFgTrOGBBr0aQnErHwHbZBoiLBRkhHS6beLU4FKANR9YiM%2BRdxszfEIdViPwrR1gsINAH0WN2t8i7JR5qMeMVG2wVPRcvDkgL5UBLMHCWVp0Bbq0h495kGuRIc3GDiDdveVuZlwfhP3%2BVCl6s7E9KffwN1FN4V43lmEtrrGE4qT0RBoPQAWly4V7S5fJKcXIfKJYcKfgsnvBNv1Jt5k1%2Bw2DEh789Iu8nELMihWhwEiF5dCKnpy6z7QPf%2FUTpifCLbgGhH%2FpQNoJ40lfI58wuYuWdrwvdtrsf1ay8FgFp4oaL%2FvD75%2FmpDgr%2BgtDyK6I2S%2Fg5o5eZ2UXmzAYFx4S458OybFtF2WTCl%2FzqwDKKtd0COmC4T5iN6NLUzvKZFPRXkAFKCg91tSd%2F9Q4BSMYCXZCKB2ER52x8se4fWAq95qMOjStcQGOqUBjCELJ8GCSl66J4vPkB9081XXgzP%2FjtdcAhmx10RjgXq6JKL720BSTEwHs2lP7rT6UX49Gb2NpDCsSfpj0gw8zxXVhP3NIg2SKRi7TeIrEDNo%2BfGLTloztXqJsxe1mIM4MGdaSLyhorHZCLwJee3xxDjEwabacZlBeST7EPuvZl3kwwkRaiqheueHMEBRGe6Y%2FnR8y4y5ajQ%2BriSVsdA4hcCl47uo&X-Amz-Signature=93d62710f727fd8b5595b83892c86170ce8751aac2d7e01436af8cf02073fe5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: get official docs link

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAWAUYTN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHSBoNRl%2BicEwq%2BP8A58O99fTriiO4ksBWlSPKaSXc7AiEA2Yp4PxPliVc12lVqxKA1Jz4VBgRB3dEybEV1c%2Fll2QQqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9ZK1zky5kzR33P9SrcA%2F1pK%2Fx7fxRxHNauiqBhy%2FA0tqYIKYAtk%2FdBvmSc9fyxgMbbquO0fIv6eZqmqVExi%2FI1gRJMXU%2BJToNbitehIi667HaQ6Y8A1HfUaAxJmtINlVSoGhe8xfD4DRz0ko1A%2BBQ98e42utr%2B4W2%2FFg4tApb06MJjnywhQ11Tz%2BuWtA%2FteL%2BZa2K2UUqtT0vkSvQzeGu6gi1mXbxw5cVZGdFgTrOGBBr0aQnErHwHbZBoiLBRkhHS6beLU4FKANR9YiM%2BRdxszfEIdViPwrR1gsINAH0WN2t8i7JR5qMeMVG2wVPRcvDkgL5UBLMHCWVp0Bbq0h495kGuRIc3GDiDdveVuZlwfhP3%2BVCl6s7E9KffwN1FN4V43lmEtrrGE4qT0RBoPQAWly4V7S5fJKcXIfKJYcKfgsnvBNv1Jt5k1%2Bw2DEh789Iu8nELMihWhwEiF5dCKnpy6z7QPf%2FUTpifCLbgGhH%2FpQNoJ40lfI58wuYuWdrwvdtrsf1ay8FgFp4oaL%2FvD75%2FmpDgr%2BgtDyK6I2S%2Fg5o5eZ2UXmzAYFx4S458OybFtF2WTCl%2FzqwDKKtd0COmC4T5iN6NLUzvKZFPRXkAFKCg91tSd%2F9Q4BSMYCXZCKB2ER52x8se4fWAq95qMOjStcQGOqUBjCELJ8GCSl66J4vPkB9081XXgzP%2FjtdcAhmx10RjgXq6JKL720BSTEwHs2lP7rT6UX49Gb2NpDCsSfpj0gw8zxXVhP3NIg2SKRi7TeIrEDNo%2BfGLTloztXqJsxe1mIM4MGdaSLyhorHZCLwJee3xxDjEwabacZlBeST7EPuvZl3kwwkRaiqheueHMEBRGe6Y%2FnR8y4y5ajQ%2BriSVsdA4hcCl47uo&X-Amz-Signature=fd50ad3acc6553673ae0acc013f409bbaed4eeb9e62021a8c0dfa811622985e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

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

TODO: add rviz section

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAWAUYTN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHSBoNRl%2BicEwq%2BP8A58O99fTriiO4ksBWlSPKaSXc7AiEA2Yp4PxPliVc12lVqxKA1Jz4VBgRB3dEybEV1c%2Fll2QQqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9ZK1zky5kzR33P9SrcA%2F1pK%2Fx7fxRxHNauiqBhy%2FA0tqYIKYAtk%2FdBvmSc9fyxgMbbquO0fIv6eZqmqVExi%2FI1gRJMXU%2BJToNbitehIi667HaQ6Y8A1HfUaAxJmtINlVSoGhe8xfD4DRz0ko1A%2BBQ98e42utr%2B4W2%2FFg4tApb06MJjnywhQ11Tz%2BuWtA%2FteL%2BZa2K2UUqtT0vkSvQzeGu6gi1mXbxw5cVZGdFgTrOGBBr0aQnErHwHbZBoiLBRkhHS6beLU4FKANR9YiM%2BRdxszfEIdViPwrR1gsINAH0WN2t8i7JR5qMeMVG2wVPRcvDkgL5UBLMHCWVp0Bbq0h495kGuRIc3GDiDdveVuZlwfhP3%2BVCl6s7E9KffwN1FN4V43lmEtrrGE4qT0RBoPQAWly4V7S5fJKcXIfKJYcKfgsnvBNv1Jt5k1%2Bw2DEh789Iu8nELMihWhwEiF5dCKnpy6z7QPf%2FUTpifCLbgGhH%2FpQNoJ40lfI58wuYuWdrwvdtrsf1ay8FgFp4oaL%2FvD75%2FmpDgr%2BgtDyK6I2S%2Fg5o5eZ2UXmzAYFx4S458OybFtF2WTCl%2FzqwDKKtd0COmC4T5iN6NLUzvKZFPRXkAFKCg91tSd%2F9Q4BSMYCXZCKB2ER52x8se4fWAq95qMOjStcQGOqUBjCELJ8GCSl66J4vPkB9081XXgzP%2FjtdcAhmx10RjgXq6JKL720BSTEwHs2lP7rT6UX49Gb2NpDCsSfpj0gw8zxXVhP3NIg2SKRi7TeIrEDNo%2BfGLTloztXqJsxe1mIM4MGdaSLyhorHZCLwJee3xxDjEwabacZlBeST7EPuvZl3kwwkRaiqheueHMEBRGe6Y%2FnR8y4y5ajQ%2BriSVsdA4hcCl47uo&X-Amz-Signature=ccd46fef590852b1b35502161f37358d0475cadb5b5d1687a5862c1a0667002c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
