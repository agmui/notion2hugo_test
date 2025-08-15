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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMREBB4I%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICtlrctFDqwNyDWVOS5B8StlgkWdKhLzUDzXfxKPNV73AiAEg8OTz9npeFIMl8hoJGLgl9mm9KN0irGRwdYt%2FV%2FVnSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM0osIyg3F1ppMyfyYKtwDpAk3SIPdxSLM9et%2Foybi3yIFPUMRzLVr2xf8%2BHC6YNOrnOHWw31wCvH6y0oPPlGsJNV42FhscbyL5Pm5M4wQMhvh1oDE4lF7%2FmXcQUPg7FGTznckBSK3sneOFxDD7CWSbPLty7tAuu4TD8z9hdXNXgjB5IalT01kO25pYO9%2F7TxFnFc6NtnbcvEkXPyn%2Beu2MKomu0yRVUDvjh5R9HG%2B2LLgYxFiuxXpYssfRE2z%2F78jhld8PA2iQwaEM%2FySb%2BYcBukA%2FWnb4GuSYRXdwz%2Bg%2FRE%2BghWUfmZIJ6nxm9OCnX5zwgDORp00uFo5iyMogx8%2BMoaaeLsPx%2BtJeO2wi0ta1utLTh3TkAe4bRhPzuGdbe%2Ftd75Gcsf%2BVNcOXxG7nLRU5Tm3wFHNMbOu8KLM8wkMTb5PaNkBo14dCj8fWVuH%2Fb0Q%2BDOLhnXbWKZPCGCaO1ErcPso1cqwnM0oDT20kHmW7dWdO47zwIpdbBpcMRe0wSIZ6Xh1oA3wCTVludiqp0JbxIOLk8cMuTNkwr7J%2BcqmyvrK5hHzSO7dc15aiYNdwpUpYfSUzPpEC3H3JeKJKfOSz96cf6oeAJgju71RbVOgiHJBfN%2BtrwsRe5vzqogsNmSRWJn7wYm1DFEdFCAw5qL6xAY6pgE%2Fo%2FruC16YkGSsGlF4F3VacOU31lbgDIi3%2BwD1CS%2FSctOmztIKH6uRXAKgEhoCUCnNeVYdtoZB1mIV4r5iOFXaf7yvb5TnVxrIlEHQOmCGYxwqXZ5cXZM24lRHjHnliDzDt1yyPPinOmmjXJIyFZbUl2OKFb1juYEzQNyjR7QBwhXLCGWym4IRX6xoPvtvUeavgIVCv4wNa6f6dDOqwW5VmAoXt5qg&X-Amz-Signature=53b252593a47e83e88fa878c767111ba05f8916dc78af7e66a7d449ece48d02f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ECY7JG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAajEjwRQSRT7RhNAg%2B74Ne3QUeGiyeRx23FYVvN6ZjvAiEA6lefX9xYysZ2jMOWisOM9qt9E9ari85ZsoUh1wKJ4SUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOwyHAniL2ft1G4rqyrcA9Oy%2BW2pGB%2BnEpNAi7JM8PIlSfSze%2BOIvxcuazvGg%2B62LgkTRk3e2AkyYrF5PCa%2BFVcdjsVUcB90mcwEe14lpM%2FQOjtaVDg2OuPZ3Bf%2BQhWJ0t9bji5gtpaAu4vpp1U40prLWIkJkNRZZpnMBrIIGM4j0pKVP%2F2FRYfy1Dks3ZYQphLv3Sd8EwqtInoXM8p2qj9Sd2ltamzUJDQIevqS0zkbWGNiTOlJZe%2BboLTgLKdLDWo1JvL2hMag%2Fffy%2FITrYg9nvCgyad6985ASJElHIXaFpoUje9B8eyPg95VIMJf%2BlYEugdHIS9jlewKHaKnJPZOJAMPM3oUE5JrgIJHICIoYNrgSnR9AwKk7ETopHGHj8TszoF99Zl6QKGOUDXDu62tBHYd2AFwDruUjmP5qnjWoFuGIyezzE19fp7dnWJ7pm1qYSWv2PtfC%2BP2rw6L7YsOlgWvR5dRCFLANpdcxYooSA0I9NH1DiO8d%2FNX%2FzEZWYfcjiJsOrpoeTa%2BfARm7Yx8VhfN95cwzZwKhrd5g9QFEmhGly2i9HApUIQmuENiXLQUr28Aafdpp0P3XScnuARJm6ZhJRyAAhvBP%2FaHsVhATVw4abYzARrI%2BfiMmr7pVjaQ%2B4z9VKBwg4kRjMJaj%2BsQGOqUBzeaIiN9nGsQshJBiyDLG4UvpW4gbCVwXfTsbwjGauo%2FcKqvD0X5dEqMTV4t%2FJ7ZCJhfKwoETK%2Fw0didmuTOLBog4umUkdBULml%2BiQHctG%2Blyh6Rtsfm3ueXekpNGVup3FuhK4A1sKuKV8sWPTN9857bTwhbpS%2B4dsLN2ziEhXVLr8hGB%2F7a2Yc5%2BAzT3rOMKRxN%2Fa2yCkaTjC4MBOUG6x7oLKYXb&X-Amz-Signature=31b384ed71e5812ec37aac8cae5c45034f269f95dbe65d131dffe8869c3d9373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ECY7JG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAajEjwRQSRT7RhNAg%2B74Ne3QUeGiyeRx23FYVvN6ZjvAiEA6lefX9xYysZ2jMOWisOM9qt9E9ari85ZsoUh1wKJ4SUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOwyHAniL2ft1G4rqyrcA9Oy%2BW2pGB%2BnEpNAi7JM8PIlSfSze%2BOIvxcuazvGg%2B62LgkTRk3e2AkyYrF5PCa%2BFVcdjsVUcB90mcwEe14lpM%2FQOjtaVDg2OuPZ3Bf%2BQhWJ0t9bji5gtpaAu4vpp1U40prLWIkJkNRZZpnMBrIIGM4j0pKVP%2F2FRYfy1Dks3ZYQphLv3Sd8EwqtInoXM8p2qj9Sd2ltamzUJDQIevqS0zkbWGNiTOlJZe%2BboLTgLKdLDWo1JvL2hMag%2Fffy%2FITrYg9nvCgyad6985ASJElHIXaFpoUje9B8eyPg95VIMJf%2BlYEugdHIS9jlewKHaKnJPZOJAMPM3oUE5JrgIJHICIoYNrgSnR9AwKk7ETopHGHj8TszoF99Zl6QKGOUDXDu62tBHYd2AFwDruUjmP5qnjWoFuGIyezzE19fp7dnWJ7pm1qYSWv2PtfC%2BP2rw6L7YsOlgWvR5dRCFLANpdcxYooSA0I9NH1DiO8d%2FNX%2FzEZWYfcjiJsOrpoeTa%2BfARm7Yx8VhfN95cwzZwKhrd5g9QFEmhGly2i9HApUIQmuENiXLQUr28Aafdpp0P3XScnuARJm6ZhJRyAAhvBP%2FaHsVhATVw4abYzARrI%2BfiMmr7pVjaQ%2B4z9VKBwg4kRjMJaj%2BsQGOqUBzeaIiN9nGsQshJBiyDLG4UvpW4gbCVwXfTsbwjGauo%2FcKqvD0X5dEqMTV4t%2FJ7ZCJhfKwoETK%2Fw0didmuTOLBog4umUkdBULml%2BiQHctG%2Blyh6Rtsfm3ueXekpNGVup3FuhK4A1sKuKV8sWPTN9857bTwhbpS%2B4dsLN2ziEhXVLr8hGB%2F7a2Yc5%2BAzT3rOMKRxN%2Fa2yCkaTjC4MBOUG6x7oLKYXb&X-Amz-Signature=0a0dc23a9eb7b1839135237e74973b816177be8d5b2a394c91bf57e783eb9ba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ECY7JG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAajEjwRQSRT7RhNAg%2B74Ne3QUeGiyeRx23FYVvN6ZjvAiEA6lefX9xYysZ2jMOWisOM9qt9E9ari85ZsoUh1wKJ4SUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOwyHAniL2ft1G4rqyrcA9Oy%2BW2pGB%2BnEpNAi7JM8PIlSfSze%2BOIvxcuazvGg%2B62LgkTRk3e2AkyYrF5PCa%2BFVcdjsVUcB90mcwEe14lpM%2FQOjtaVDg2OuPZ3Bf%2BQhWJ0t9bji5gtpaAu4vpp1U40prLWIkJkNRZZpnMBrIIGM4j0pKVP%2F2FRYfy1Dks3ZYQphLv3Sd8EwqtInoXM8p2qj9Sd2ltamzUJDQIevqS0zkbWGNiTOlJZe%2BboLTgLKdLDWo1JvL2hMag%2Fffy%2FITrYg9nvCgyad6985ASJElHIXaFpoUje9B8eyPg95VIMJf%2BlYEugdHIS9jlewKHaKnJPZOJAMPM3oUE5JrgIJHICIoYNrgSnR9AwKk7ETopHGHj8TszoF99Zl6QKGOUDXDu62tBHYd2AFwDruUjmP5qnjWoFuGIyezzE19fp7dnWJ7pm1qYSWv2PtfC%2BP2rw6L7YsOlgWvR5dRCFLANpdcxYooSA0I9NH1DiO8d%2FNX%2FzEZWYfcjiJsOrpoeTa%2BfARm7Yx8VhfN95cwzZwKhrd5g9QFEmhGly2i9HApUIQmuENiXLQUr28Aafdpp0P3XScnuARJm6ZhJRyAAhvBP%2FaHsVhATVw4abYzARrI%2BfiMmr7pVjaQ%2B4z9VKBwg4kRjMJaj%2BsQGOqUBzeaIiN9nGsQshJBiyDLG4UvpW4gbCVwXfTsbwjGauo%2FcKqvD0X5dEqMTV4t%2FJ7ZCJhfKwoETK%2Fw0didmuTOLBog4umUkdBULml%2BiQHctG%2Blyh6Rtsfm3ueXekpNGVup3FuhK4A1sKuKV8sWPTN9857bTwhbpS%2B4dsLN2ziEhXVLr8hGB%2F7a2Yc5%2BAzT3rOMKRxN%2Fa2yCkaTjC4MBOUG6x7oLKYXb&X-Amz-Signature=80ea7bb3385e9a0667a46b5aab7a767ece9a331e8e5aca9d6b036239d3e9e7fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ECY7JG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAajEjwRQSRT7RhNAg%2B74Ne3QUeGiyeRx23FYVvN6ZjvAiEA6lefX9xYysZ2jMOWisOM9qt9E9ari85ZsoUh1wKJ4SUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOwyHAniL2ft1G4rqyrcA9Oy%2BW2pGB%2BnEpNAi7JM8PIlSfSze%2BOIvxcuazvGg%2B62LgkTRk3e2AkyYrF5PCa%2BFVcdjsVUcB90mcwEe14lpM%2FQOjtaVDg2OuPZ3Bf%2BQhWJ0t9bji5gtpaAu4vpp1U40prLWIkJkNRZZpnMBrIIGM4j0pKVP%2F2FRYfy1Dks3ZYQphLv3Sd8EwqtInoXM8p2qj9Sd2ltamzUJDQIevqS0zkbWGNiTOlJZe%2BboLTgLKdLDWo1JvL2hMag%2Fffy%2FITrYg9nvCgyad6985ASJElHIXaFpoUje9B8eyPg95VIMJf%2BlYEugdHIS9jlewKHaKnJPZOJAMPM3oUE5JrgIJHICIoYNrgSnR9AwKk7ETopHGHj8TszoF99Zl6QKGOUDXDu62tBHYd2AFwDruUjmP5qnjWoFuGIyezzE19fp7dnWJ7pm1qYSWv2PtfC%2BP2rw6L7YsOlgWvR5dRCFLANpdcxYooSA0I9NH1DiO8d%2FNX%2FzEZWYfcjiJsOrpoeTa%2BfARm7Yx8VhfN95cwzZwKhrd5g9QFEmhGly2i9HApUIQmuENiXLQUr28Aafdpp0P3XScnuARJm6ZhJRyAAhvBP%2FaHsVhATVw4abYzARrI%2BfiMmr7pVjaQ%2B4z9VKBwg4kRjMJaj%2BsQGOqUBzeaIiN9nGsQshJBiyDLG4UvpW4gbCVwXfTsbwjGauo%2FcKqvD0X5dEqMTV4t%2FJ7ZCJhfKwoETK%2Fw0didmuTOLBog4umUkdBULml%2BiQHctG%2Blyh6Rtsfm3ueXekpNGVup3FuhK4A1sKuKV8sWPTN9857bTwhbpS%2B4dsLN2ziEhXVLr8hGB%2F7a2Yc5%2BAzT3rOMKRxN%2Fa2yCkaTjC4MBOUG6x7oLKYXb&X-Amz-Signature=038567b107fbd0aa15b32fe61321822a17f29ac5495c2e0b3c87d231e8fe7cec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ECY7JG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAajEjwRQSRT7RhNAg%2B74Ne3QUeGiyeRx23FYVvN6ZjvAiEA6lefX9xYysZ2jMOWisOM9qt9E9ari85ZsoUh1wKJ4SUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOwyHAniL2ft1G4rqyrcA9Oy%2BW2pGB%2BnEpNAi7JM8PIlSfSze%2BOIvxcuazvGg%2B62LgkTRk3e2AkyYrF5PCa%2BFVcdjsVUcB90mcwEe14lpM%2FQOjtaVDg2OuPZ3Bf%2BQhWJ0t9bji5gtpaAu4vpp1U40prLWIkJkNRZZpnMBrIIGM4j0pKVP%2F2FRYfy1Dks3ZYQphLv3Sd8EwqtInoXM8p2qj9Sd2ltamzUJDQIevqS0zkbWGNiTOlJZe%2BboLTgLKdLDWo1JvL2hMag%2Fffy%2FITrYg9nvCgyad6985ASJElHIXaFpoUje9B8eyPg95VIMJf%2BlYEugdHIS9jlewKHaKnJPZOJAMPM3oUE5JrgIJHICIoYNrgSnR9AwKk7ETopHGHj8TszoF99Zl6QKGOUDXDu62tBHYd2AFwDruUjmP5qnjWoFuGIyezzE19fp7dnWJ7pm1qYSWv2PtfC%2BP2rw6L7YsOlgWvR5dRCFLANpdcxYooSA0I9NH1DiO8d%2FNX%2FzEZWYfcjiJsOrpoeTa%2BfARm7Yx8VhfN95cwzZwKhrd5g9QFEmhGly2i9HApUIQmuENiXLQUr28Aafdpp0P3XScnuARJm6ZhJRyAAhvBP%2FaHsVhATVw4abYzARrI%2BfiMmr7pVjaQ%2B4z9VKBwg4kRjMJaj%2BsQGOqUBzeaIiN9nGsQshJBiyDLG4UvpW4gbCVwXfTsbwjGauo%2FcKqvD0X5dEqMTV4t%2FJ7ZCJhfKwoETK%2Fw0didmuTOLBog4umUkdBULml%2BiQHctG%2Blyh6Rtsfm3ueXekpNGVup3FuhK4A1sKuKV8sWPTN9857bTwhbpS%2B4dsLN2ziEhXVLr8hGB%2F7a2Yc5%2BAzT3rOMKRxN%2Fa2yCkaTjC4MBOUG6x7oLKYXb&X-Amz-Signature=87e771ad62f5a1081761d1b453e6ef47224a6bb2039b2dc2a2dffabf0436d307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ECY7JG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAajEjwRQSRT7RhNAg%2B74Ne3QUeGiyeRx23FYVvN6ZjvAiEA6lefX9xYysZ2jMOWisOM9qt9E9ari85ZsoUh1wKJ4SUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOwyHAniL2ft1G4rqyrcA9Oy%2BW2pGB%2BnEpNAi7JM8PIlSfSze%2BOIvxcuazvGg%2B62LgkTRk3e2AkyYrF5PCa%2BFVcdjsVUcB90mcwEe14lpM%2FQOjtaVDg2OuPZ3Bf%2BQhWJ0t9bji5gtpaAu4vpp1U40prLWIkJkNRZZpnMBrIIGM4j0pKVP%2F2FRYfy1Dks3ZYQphLv3Sd8EwqtInoXM8p2qj9Sd2ltamzUJDQIevqS0zkbWGNiTOlJZe%2BboLTgLKdLDWo1JvL2hMag%2Fffy%2FITrYg9nvCgyad6985ASJElHIXaFpoUje9B8eyPg95VIMJf%2BlYEugdHIS9jlewKHaKnJPZOJAMPM3oUE5JrgIJHICIoYNrgSnR9AwKk7ETopHGHj8TszoF99Zl6QKGOUDXDu62tBHYd2AFwDruUjmP5qnjWoFuGIyezzE19fp7dnWJ7pm1qYSWv2PtfC%2BP2rw6L7YsOlgWvR5dRCFLANpdcxYooSA0I9NH1DiO8d%2FNX%2FzEZWYfcjiJsOrpoeTa%2BfARm7Yx8VhfN95cwzZwKhrd5g9QFEmhGly2i9HApUIQmuENiXLQUr28Aafdpp0P3XScnuARJm6ZhJRyAAhvBP%2FaHsVhATVw4abYzARrI%2BfiMmr7pVjaQ%2B4z9VKBwg4kRjMJaj%2BsQGOqUBzeaIiN9nGsQshJBiyDLG4UvpW4gbCVwXfTsbwjGauo%2FcKqvD0X5dEqMTV4t%2FJ7ZCJhfKwoETK%2Fw0didmuTOLBog4umUkdBULml%2BiQHctG%2Blyh6Rtsfm3ueXekpNGVup3FuhK4A1sKuKV8sWPTN9857bTwhbpS%2B4dsLN2ziEhXVLr8hGB%2F7a2Yc5%2BAzT3rOMKRxN%2Fa2yCkaTjC4MBOUG6x7oLKYXb&X-Amz-Signature=b608ccff5085ed95a7fa73626fe531a5fa8af3ffd9563c0e1d786a7c602ebf28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ECY7JG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAajEjwRQSRT7RhNAg%2B74Ne3QUeGiyeRx23FYVvN6ZjvAiEA6lefX9xYysZ2jMOWisOM9qt9E9ari85ZsoUh1wKJ4SUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOwyHAniL2ft1G4rqyrcA9Oy%2BW2pGB%2BnEpNAi7JM8PIlSfSze%2BOIvxcuazvGg%2B62LgkTRk3e2AkyYrF5PCa%2BFVcdjsVUcB90mcwEe14lpM%2FQOjtaVDg2OuPZ3Bf%2BQhWJ0t9bji5gtpaAu4vpp1U40prLWIkJkNRZZpnMBrIIGM4j0pKVP%2F2FRYfy1Dks3ZYQphLv3Sd8EwqtInoXM8p2qj9Sd2ltamzUJDQIevqS0zkbWGNiTOlJZe%2BboLTgLKdLDWo1JvL2hMag%2Fffy%2FITrYg9nvCgyad6985ASJElHIXaFpoUje9B8eyPg95VIMJf%2BlYEugdHIS9jlewKHaKnJPZOJAMPM3oUE5JrgIJHICIoYNrgSnR9AwKk7ETopHGHj8TszoF99Zl6QKGOUDXDu62tBHYd2AFwDruUjmP5qnjWoFuGIyezzE19fp7dnWJ7pm1qYSWv2PtfC%2BP2rw6L7YsOlgWvR5dRCFLANpdcxYooSA0I9NH1DiO8d%2FNX%2FzEZWYfcjiJsOrpoeTa%2BfARm7Yx8VhfN95cwzZwKhrd5g9QFEmhGly2i9HApUIQmuENiXLQUr28Aafdpp0P3XScnuARJm6ZhJRyAAhvBP%2FaHsVhATVw4abYzARrI%2BfiMmr7pVjaQ%2B4z9VKBwg4kRjMJaj%2BsQGOqUBzeaIiN9nGsQshJBiyDLG4UvpW4gbCVwXfTsbwjGauo%2FcKqvD0X5dEqMTV4t%2FJ7ZCJhfKwoETK%2Fw0didmuTOLBog4umUkdBULml%2BiQHctG%2Blyh6Rtsfm3ueXekpNGVup3FuhK4A1sKuKV8sWPTN9857bTwhbpS%2B4dsLN2ziEhXVLr8hGB%2F7a2Yc5%2BAzT3rOMKRxN%2Fa2yCkaTjC4MBOUG6x7oLKYXb&X-Amz-Signature=f153c671204d7dc799dfd19e637a10360b3d81564bffcdbd7068c99c79b1f527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ECY7JG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAajEjwRQSRT7RhNAg%2B74Ne3QUeGiyeRx23FYVvN6ZjvAiEA6lefX9xYysZ2jMOWisOM9qt9E9ari85ZsoUh1wKJ4SUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOwyHAniL2ft1G4rqyrcA9Oy%2BW2pGB%2BnEpNAi7JM8PIlSfSze%2BOIvxcuazvGg%2B62LgkTRk3e2AkyYrF5PCa%2BFVcdjsVUcB90mcwEe14lpM%2FQOjtaVDg2OuPZ3Bf%2BQhWJ0t9bji5gtpaAu4vpp1U40prLWIkJkNRZZpnMBrIIGM4j0pKVP%2F2FRYfy1Dks3ZYQphLv3Sd8EwqtInoXM8p2qj9Sd2ltamzUJDQIevqS0zkbWGNiTOlJZe%2BboLTgLKdLDWo1JvL2hMag%2Fffy%2FITrYg9nvCgyad6985ASJElHIXaFpoUje9B8eyPg95VIMJf%2BlYEugdHIS9jlewKHaKnJPZOJAMPM3oUE5JrgIJHICIoYNrgSnR9AwKk7ETopHGHj8TszoF99Zl6QKGOUDXDu62tBHYd2AFwDruUjmP5qnjWoFuGIyezzE19fp7dnWJ7pm1qYSWv2PtfC%2BP2rw6L7YsOlgWvR5dRCFLANpdcxYooSA0I9NH1DiO8d%2FNX%2FzEZWYfcjiJsOrpoeTa%2BfARm7Yx8VhfN95cwzZwKhrd5g9QFEmhGly2i9HApUIQmuENiXLQUr28Aafdpp0P3XScnuARJm6ZhJRyAAhvBP%2FaHsVhATVw4abYzARrI%2BfiMmr7pVjaQ%2B4z9VKBwg4kRjMJaj%2BsQGOqUBzeaIiN9nGsQshJBiyDLG4UvpW4gbCVwXfTsbwjGauo%2FcKqvD0X5dEqMTV4t%2FJ7ZCJhfKwoETK%2Fw0didmuTOLBog4umUkdBULml%2BiQHctG%2Blyh6Rtsfm3ueXekpNGVup3FuhK4A1sKuKV8sWPTN9857bTwhbpS%2B4dsLN2ziEhXVLr8hGB%2F7a2Yc5%2BAzT3rOMKRxN%2Fa2yCkaTjC4MBOUG6x7oLKYXb&X-Amz-Signature=2857b7fd2d998b039cf424ee9357b2513a18738323acdb7c675a269166e0e9c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ECY7JG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAajEjwRQSRT7RhNAg%2B74Ne3QUeGiyeRx23FYVvN6ZjvAiEA6lefX9xYysZ2jMOWisOM9qt9E9ari85ZsoUh1wKJ4SUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOwyHAniL2ft1G4rqyrcA9Oy%2BW2pGB%2BnEpNAi7JM8PIlSfSze%2BOIvxcuazvGg%2B62LgkTRk3e2AkyYrF5PCa%2BFVcdjsVUcB90mcwEe14lpM%2FQOjtaVDg2OuPZ3Bf%2BQhWJ0t9bji5gtpaAu4vpp1U40prLWIkJkNRZZpnMBrIIGM4j0pKVP%2F2FRYfy1Dks3ZYQphLv3Sd8EwqtInoXM8p2qj9Sd2ltamzUJDQIevqS0zkbWGNiTOlJZe%2BboLTgLKdLDWo1JvL2hMag%2Fffy%2FITrYg9nvCgyad6985ASJElHIXaFpoUje9B8eyPg95VIMJf%2BlYEugdHIS9jlewKHaKnJPZOJAMPM3oUE5JrgIJHICIoYNrgSnR9AwKk7ETopHGHj8TszoF99Zl6QKGOUDXDu62tBHYd2AFwDruUjmP5qnjWoFuGIyezzE19fp7dnWJ7pm1qYSWv2PtfC%2BP2rw6L7YsOlgWvR5dRCFLANpdcxYooSA0I9NH1DiO8d%2FNX%2FzEZWYfcjiJsOrpoeTa%2BfARm7Yx8VhfN95cwzZwKhrd5g9QFEmhGly2i9HApUIQmuENiXLQUr28Aafdpp0P3XScnuARJm6ZhJRyAAhvBP%2FaHsVhATVw4abYzARrI%2BfiMmr7pVjaQ%2B4z9VKBwg4kRjMJaj%2BsQGOqUBzeaIiN9nGsQshJBiyDLG4UvpW4gbCVwXfTsbwjGauo%2FcKqvD0X5dEqMTV4t%2FJ7ZCJhfKwoETK%2Fw0didmuTOLBog4umUkdBULml%2BiQHctG%2Blyh6Rtsfm3ueXekpNGVup3FuhK4A1sKuKV8sWPTN9857bTwhbpS%2B4dsLN2ziEhXVLr8hGB%2F7a2Yc5%2BAzT3rOMKRxN%2Fa2yCkaTjC4MBOUG6x7oLKYXb&X-Amz-Signature=d9587f4e6639781da8e3bdc36e1d614134b033435e991813b21aef7bb9e2a9f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ECY7JG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAajEjwRQSRT7RhNAg%2B74Ne3QUeGiyeRx23FYVvN6ZjvAiEA6lefX9xYysZ2jMOWisOM9qt9E9ari85ZsoUh1wKJ4SUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOwyHAniL2ft1G4rqyrcA9Oy%2BW2pGB%2BnEpNAi7JM8PIlSfSze%2BOIvxcuazvGg%2B62LgkTRk3e2AkyYrF5PCa%2BFVcdjsVUcB90mcwEe14lpM%2FQOjtaVDg2OuPZ3Bf%2BQhWJ0t9bji5gtpaAu4vpp1U40prLWIkJkNRZZpnMBrIIGM4j0pKVP%2F2FRYfy1Dks3ZYQphLv3Sd8EwqtInoXM8p2qj9Sd2ltamzUJDQIevqS0zkbWGNiTOlJZe%2BboLTgLKdLDWo1JvL2hMag%2Fffy%2FITrYg9nvCgyad6985ASJElHIXaFpoUje9B8eyPg95VIMJf%2BlYEugdHIS9jlewKHaKnJPZOJAMPM3oUE5JrgIJHICIoYNrgSnR9AwKk7ETopHGHj8TszoF99Zl6QKGOUDXDu62tBHYd2AFwDruUjmP5qnjWoFuGIyezzE19fp7dnWJ7pm1qYSWv2PtfC%2BP2rw6L7YsOlgWvR5dRCFLANpdcxYooSA0I9NH1DiO8d%2FNX%2FzEZWYfcjiJsOrpoeTa%2BfARm7Yx8VhfN95cwzZwKhrd5g9QFEmhGly2i9HApUIQmuENiXLQUr28Aafdpp0P3XScnuARJm6ZhJRyAAhvBP%2FaHsVhATVw4abYzARrI%2BfiMmr7pVjaQ%2B4z9VKBwg4kRjMJaj%2BsQGOqUBzeaIiN9nGsQshJBiyDLG4UvpW4gbCVwXfTsbwjGauo%2FcKqvD0X5dEqMTV4t%2FJ7ZCJhfKwoETK%2Fw0didmuTOLBog4umUkdBULml%2BiQHctG%2Blyh6Rtsfm3ueXekpNGVup3FuhK4A1sKuKV8sWPTN9857bTwhbpS%2B4dsLN2ziEhXVLr8hGB%2F7a2Yc5%2BAzT3rOMKRxN%2Fa2yCkaTjC4MBOUG6x7oLKYXb&X-Amz-Signature=038567b107fbd0aa15b32fe61321822a17f29ac5495c2e0b3c87d231e8fe7cec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
