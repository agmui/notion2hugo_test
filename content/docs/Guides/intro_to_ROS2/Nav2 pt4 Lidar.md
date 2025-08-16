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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOY6PYHV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDwkrd71YIspNlmlvNTAkT7sdkAIUhCSutpPp16UP9HJAiBztrl%2B9nVLK8D5hv9Q9ZGwgucsch9G1wtwGWPLz4kVOyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMC4eCz%2BwW456JZ7fgKtwDY3RrOD3QJ7D11QJE%2BmUJ8dNKAhsUotobVYOdqQcLpqXPpg1Y%2FJNwEjxi916rN%2BoB41vq5spnPxRSCQFRkPAcSP%2Biti8m75484GFrna%2FeJWHXGEIKbuxBMn7b%2FTg5a1VJx8PlvL67zpLIv3bqzF54dINRFNXkvnhiHPg5C1qBULNErBn%2BM8kAeW7u2XcdYoLSKhpn%2BZobbak6dIn6zeGjInub6ayShrgSEnZ3tR752Iveo2mhDmIEht%2Bh39dU9qyiWE9FgQVhqbz1KPi2iHfY3dk0JubP%2FkFuuVVtXNlb2w7Ikad8JDgimq46JwceaRfSoeiSuNM0XdhVhMX8AQ66HAk8rH%2BOIhaYmGKc8JiG5McUbNkKJWI9PiSHkNkDBkS9rE%2F%2FPF4LoN2OgOsBxzwRoP608aJhZVIHUgSGcD3IVp5bIF52HJ3%2Fep9S%2FrMW0qmGu%2FOrMN7KsUOJdnOn4jZx%2FW9%2F%2BOW5w75Qagk8nIdrt%2BBb8nVtpiObcUwzQTaEqdkeThvNdZPySvSYA98DTy%2F2f6WgiDfNuicrgpW8cn8EKzbXbi49AZa2CuqrwGKFtYMxQXjAEOlGM2QleTeblzUbwcEMZrjLc6AHSXD2En%2BSOXa1V8ldw343QOHVH38w45SCxQY6pgHNZXp2%2FguS%2FQMH8TPWN4u4fBV4vOFXmRyFTUJe3p%2F10AwsnLzi7ZVG13sJ%2F%2F0V9fjPI%2Fr2SHIjw2Bwnj1p5ipIYXKi1eXLpCUmEZQoHmA%2FpsZsmpqwGF90ZzC7%2BFjmu%2BhNQeAIzj6jtgbhg8Z9gJQrZ%2FiwLpAPkhrpNZyt0TgRBTEnaZ4B6RzVSzvO8ZRx4PMWJFzpK1tfo4JvTdySd7Xt%2BVB8iLfL&X-Amz-Signature=47147e86e8af7a7e1b14c30d287c5f5efab02eb90db0963d82d7c8fd29d05f93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDORZM3Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQChfjNRMAq5nfPSFCouxpD5UCP8U3S4WgwqRlj5GwGxnAIgK%2FQhHhkRDEg29Xu27v2Ay6aHFSW2wXhdBK%2FVGi87tDkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMLEcfBuUvZdbxOx6yrcA%2FkEz2zGdJg580Anj%2FK2iq5CgbYJFscV6v8Bnl%2BMjI6XIvzUdzNNOR8V7H2BzAvgmpWUl7%2BtUtCmkpX6sq5fKCBX%2B%2FNyaKqNSXPSzt8L1Bf%2FYN33TV%2FOwOYMC%2BLEXwnf5kfYYFZ%2F1V5qglnya5v5kBFHLIybxlelADQSElPfrQJNplXvdlMZ55tiBHS%2BNMqj8MqI7P1j5OopjKhFoRO%2FXSAJqHKqJL1VusZBVgbmfnzenJpqjOkNmCc%2Bzhir0Kvr2OvwhiS8MmpJPdRnaI3%2F7Fxd%2FiCdpSZtz01ZyIbEfEPaynKP2uWj8z24sda738sBR%2FERwwAKGH1Lf%2FFrjl1FdkuXYF2KHwze%2FALUksf1oLJ5wn%2BS%2BcQT5dNWADF94bd7rgcj2h%2F8BrmeP%2FQTvl09XtEbxc738q6xfx5orJu%2BEfXqaQr0QtkQGE%2B66JNUEHNE4FbeAE2kZoQjSRhCjtxhh92UyWsVi%2BUmGNONObBFV3LG7j4vNL09%2FX1jzM4Wyc2VAfDJvgr1gjcmoPn6uifi%2FYlveJHtMpkJtOhzybzcyWbyW91RmUqhpiQxKa%2BPRpdVkz%2Bp5n8pzgaiYzk4dVRl50WWkKNreTQEL5nTpuWslTYzM3iAfoV2CAKFp11PMNGdgsUGOqUBOTktLfdLVgNNsU1tmfWh4OjCHJFwDG3fJcn1PWpS%2F7qPEiPUJ2sW9DDplbXdwO0eD0H0hYVsTKTDRNvh6TyNmfw37YXzzbNrm6CVrGYQ3k%2BN20qFJ2ArqWlR0OhVdypxVGz8TAlXgQsDnOnbcvOjYuy1ct7J8fXCi%2FOH%2F882GlXZM6UWY6a1BCRD3rqWcErTEBbgQUNC9M2KwOXDjfZqrTddB7Fa&X-Amz-Signature=c96e04495df7667c0a1c416cf8576ee4e290532703d419526097e15754d8a5d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDORZM3Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQChfjNRMAq5nfPSFCouxpD5UCP8U3S4WgwqRlj5GwGxnAIgK%2FQhHhkRDEg29Xu27v2Ay6aHFSW2wXhdBK%2FVGi87tDkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMLEcfBuUvZdbxOx6yrcA%2FkEz2zGdJg580Anj%2FK2iq5CgbYJFscV6v8Bnl%2BMjI6XIvzUdzNNOR8V7H2BzAvgmpWUl7%2BtUtCmkpX6sq5fKCBX%2B%2FNyaKqNSXPSzt8L1Bf%2FYN33TV%2FOwOYMC%2BLEXwnf5kfYYFZ%2F1V5qglnya5v5kBFHLIybxlelADQSElPfrQJNplXvdlMZ55tiBHS%2BNMqj8MqI7P1j5OopjKhFoRO%2FXSAJqHKqJL1VusZBVgbmfnzenJpqjOkNmCc%2Bzhir0Kvr2OvwhiS8MmpJPdRnaI3%2F7Fxd%2FiCdpSZtz01ZyIbEfEPaynKP2uWj8z24sda738sBR%2FERwwAKGH1Lf%2FFrjl1FdkuXYF2KHwze%2FALUksf1oLJ5wn%2BS%2BcQT5dNWADF94bd7rgcj2h%2F8BrmeP%2FQTvl09XtEbxc738q6xfx5orJu%2BEfXqaQr0QtkQGE%2B66JNUEHNE4FbeAE2kZoQjSRhCjtxhh92UyWsVi%2BUmGNONObBFV3LG7j4vNL09%2FX1jzM4Wyc2VAfDJvgr1gjcmoPn6uifi%2FYlveJHtMpkJtOhzybzcyWbyW91RmUqhpiQxKa%2BPRpdVkz%2Bp5n8pzgaiYzk4dVRl50WWkKNreTQEL5nTpuWslTYzM3iAfoV2CAKFp11PMNGdgsUGOqUBOTktLfdLVgNNsU1tmfWh4OjCHJFwDG3fJcn1PWpS%2F7qPEiPUJ2sW9DDplbXdwO0eD0H0hYVsTKTDRNvh6TyNmfw37YXzzbNrm6CVrGYQ3k%2BN20qFJ2ArqWlR0OhVdypxVGz8TAlXgQsDnOnbcvOjYuy1ct7J8fXCi%2FOH%2F882GlXZM6UWY6a1BCRD3rqWcErTEBbgQUNC9M2KwOXDjfZqrTddB7Fa&X-Amz-Signature=fd0dde3270e254664d107eee08c8aef3a82cf4d3c806ae1f1014a0349bb0c8fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDORZM3Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQChfjNRMAq5nfPSFCouxpD5UCP8U3S4WgwqRlj5GwGxnAIgK%2FQhHhkRDEg29Xu27v2Ay6aHFSW2wXhdBK%2FVGi87tDkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMLEcfBuUvZdbxOx6yrcA%2FkEz2zGdJg580Anj%2FK2iq5CgbYJFscV6v8Bnl%2BMjI6XIvzUdzNNOR8V7H2BzAvgmpWUl7%2BtUtCmkpX6sq5fKCBX%2B%2FNyaKqNSXPSzt8L1Bf%2FYN33TV%2FOwOYMC%2BLEXwnf5kfYYFZ%2F1V5qglnya5v5kBFHLIybxlelADQSElPfrQJNplXvdlMZ55tiBHS%2BNMqj8MqI7P1j5OopjKhFoRO%2FXSAJqHKqJL1VusZBVgbmfnzenJpqjOkNmCc%2Bzhir0Kvr2OvwhiS8MmpJPdRnaI3%2F7Fxd%2FiCdpSZtz01ZyIbEfEPaynKP2uWj8z24sda738sBR%2FERwwAKGH1Lf%2FFrjl1FdkuXYF2KHwze%2FALUksf1oLJ5wn%2BS%2BcQT5dNWADF94bd7rgcj2h%2F8BrmeP%2FQTvl09XtEbxc738q6xfx5orJu%2BEfXqaQr0QtkQGE%2B66JNUEHNE4FbeAE2kZoQjSRhCjtxhh92UyWsVi%2BUmGNONObBFV3LG7j4vNL09%2FX1jzM4Wyc2VAfDJvgr1gjcmoPn6uifi%2FYlveJHtMpkJtOhzybzcyWbyW91RmUqhpiQxKa%2BPRpdVkz%2Bp5n8pzgaiYzk4dVRl50WWkKNreTQEL5nTpuWslTYzM3iAfoV2CAKFp11PMNGdgsUGOqUBOTktLfdLVgNNsU1tmfWh4OjCHJFwDG3fJcn1PWpS%2F7qPEiPUJ2sW9DDplbXdwO0eD0H0hYVsTKTDRNvh6TyNmfw37YXzzbNrm6CVrGYQ3k%2BN20qFJ2ArqWlR0OhVdypxVGz8TAlXgQsDnOnbcvOjYuy1ct7J8fXCi%2FOH%2F882GlXZM6UWY6a1BCRD3rqWcErTEBbgQUNC9M2KwOXDjfZqrTddB7Fa&X-Amz-Signature=aaa1831169b4b21ce46b14aed1784f2f03830977fbeb996481d9f539c5407ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDORZM3Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQChfjNRMAq5nfPSFCouxpD5UCP8U3S4WgwqRlj5GwGxnAIgK%2FQhHhkRDEg29Xu27v2Ay6aHFSW2wXhdBK%2FVGi87tDkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMLEcfBuUvZdbxOx6yrcA%2FkEz2zGdJg580Anj%2FK2iq5CgbYJFscV6v8Bnl%2BMjI6XIvzUdzNNOR8V7H2BzAvgmpWUl7%2BtUtCmkpX6sq5fKCBX%2B%2FNyaKqNSXPSzt8L1Bf%2FYN33TV%2FOwOYMC%2BLEXwnf5kfYYFZ%2F1V5qglnya5v5kBFHLIybxlelADQSElPfrQJNplXvdlMZ55tiBHS%2BNMqj8MqI7P1j5OopjKhFoRO%2FXSAJqHKqJL1VusZBVgbmfnzenJpqjOkNmCc%2Bzhir0Kvr2OvwhiS8MmpJPdRnaI3%2F7Fxd%2FiCdpSZtz01ZyIbEfEPaynKP2uWj8z24sda738sBR%2FERwwAKGH1Lf%2FFrjl1FdkuXYF2KHwze%2FALUksf1oLJ5wn%2BS%2BcQT5dNWADF94bd7rgcj2h%2F8BrmeP%2FQTvl09XtEbxc738q6xfx5orJu%2BEfXqaQr0QtkQGE%2B66JNUEHNE4FbeAE2kZoQjSRhCjtxhh92UyWsVi%2BUmGNONObBFV3LG7j4vNL09%2FX1jzM4Wyc2VAfDJvgr1gjcmoPn6uifi%2FYlveJHtMpkJtOhzybzcyWbyW91RmUqhpiQxKa%2BPRpdVkz%2Bp5n8pzgaiYzk4dVRl50WWkKNreTQEL5nTpuWslTYzM3iAfoV2CAKFp11PMNGdgsUGOqUBOTktLfdLVgNNsU1tmfWh4OjCHJFwDG3fJcn1PWpS%2F7qPEiPUJ2sW9DDplbXdwO0eD0H0hYVsTKTDRNvh6TyNmfw37YXzzbNrm6CVrGYQ3k%2BN20qFJ2ArqWlR0OhVdypxVGz8TAlXgQsDnOnbcvOjYuy1ct7J8fXCi%2FOH%2F882GlXZM6UWY6a1BCRD3rqWcErTEBbgQUNC9M2KwOXDjfZqrTddB7Fa&X-Amz-Signature=d8eb683953a2953643e6c7fdcedb9e95975e4d0c791ceefed33650baf1f38743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDORZM3Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQChfjNRMAq5nfPSFCouxpD5UCP8U3S4WgwqRlj5GwGxnAIgK%2FQhHhkRDEg29Xu27v2Ay6aHFSW2wXhdBK%2FVGi87tDkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMLEcfBuUvZdbxOx6yrcA%2FkEz2zGdJg580Anj%2FK2iq5CgbYJFscV6v8Bnl%2BMjI6XIvzUdzNNOR8V7H2BzAvgmpWUl7%2BtUtCmkpX6sq5fKCBX%2B%2FNyaKqNSXPSzt8L1Bf%2FYN33TV%2FOwOYMC%2BLEXwnf5kfYYFZ%2F1V5qglnya5v5kBFHLIybxlelADQSElPfrQJNplXvdlMZ55tiBHS%2BNMqj8MqI7P1j5OopjKhFoRO%2FXSAJqHKqJL1VusZBVgbmfnzenJpqjOkNmCc%2Bzhir0Kvr2OvwhiS8MmpJPdRnaI3%2F7Fxd%2FiCdpSZtz01ZyIbEfEPaynKP2uWj8z24sda738sBR%2FERwwAKGH1Lf%2FFrjl1FdkuXYF2KHwze%2FALUksf1oLJ5wn%2BS%2BcQT5dNWADF94bd7rgcj2h%2F8BrmeP%2FQTvl09XtEbxc738q6xfx5orJu%2BEfXqaQr0QtkQGE%2B66JNUEHNE4FbeAE2kZoQjSRhCjtxhh92UyWsVi%2BUmGNONObBFV3LG7j4vNL09%2FX1jzM4Wyc2VAfDJvgr1gjcmoPn6uifi%2FYlveJHtMpkJtOhzybzcyWbyW91RmUqhpiQxKa%2BPRpdVkz%2Bp5n8pzgaiYzk4dVRl50WWkKNreTQEL5nTpuWslTYzM3iAfoV2CAKFp11PMNGdgsUGOqUBOTktLfdLVgNNsU1tmfWh4OjCHJFwDG3fJcn1PWpS%2F7qPEiPUJ2sW9DDplbXdwO0eD0H0hYVsTKTDRNvh6TyNmfw37YXzzbNrm6CVrGYQ3k%2BN20qFJ2ArqWlR0OhVdypxVGz8TAlXgQsDnOnbcvOjYuy1ct7J8fXCi%2FOH%2F882GlXZM6UWY6a1BCRD3rqWcErTEBbgQUNC9M2KwOXDjfZqrTddB7Fa&X-Amz-Signature=33aae510603c0da6d7d805992b732226174e23f2268cf96f0e07b3c665c53c71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDORZM3Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQChfjNRMAq5nfPSFCouxpD5UCP8U3S4WgwqRlj5GwGxnAIgK%2FQhHhkRDEg29Xu27v2Ay6aHFSW2wXhdBK%2FVGi87tDkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMLEcfBuUvZdbxOx6yrcA%2FkEz2zGdJg580Anj%2FK2iq5CgbYJFscV6v8Bnl%2BMjI6XIvzUdzNNOR8V7H2BzAvgmpWUl7%2BtUtCmkpX6sq5fKCBX%2B%2FNyaKqNSXPSzt8L1Bf%2FYN33TV%2FOwOYMC%2BLEXwnf5kfYYFZ%2F1V5qglnya5v5kBFHLIybxlelADQSElPfrQJNplXvdlMZ55tiBHS%2BNMqj8MqI7P1j5OopjKhFoRO%2FXSAJqHKqJL1VusZBVgbmfnzenJpqjOkNmCc%2Bzhir0Kvr2OvwhiS8MmpJPdRnaI3%2F7Fxd%2FiCdpSZtz01ZyIbEfEPaynKP2uWj8z24sda738sBR%2FERwwAKGH1Lf%2FFrjl1FdkuXYF2KHwze%2FALUksf1oLJ5wn%2BS%2BcQT5dNWADF94bd7rgcj2h%2F8BrmeP%2FQTvl09XtEbxc738q6xfx5orJu%2BEfXqaQr0QtkQGE%2B66JNUEHNE4FbeAE2kZoQjSRhCjtxhh92UyWsVi%2BUmGNONObBFV3LG7j4vNL09%2FX1jzM4Wyc2VAfDJvgr1gjcmoPn6uifi%2FYlveJHtMpkJtOhzybzcyWbyW91RmUqhpiQxKa%2BPRpdVkz%2Bp5n8pzgaiYzk4dVRl50WWkKNreTQEL5nTpuWslTYzM3iAfoV2CAKFp11PMNGdgsUGOqUBOTktLfdLVgNNsU1tmfWh4OjCHJFwDG3fJcn1PWpS%2F7qPEiPUJ2sW9DDplbXdwO0eD0H0hYVsTKTDRNvh6TyNmfw37YXzzbNrm6CVrGYQ3k%2BN20qFJ2ArqWlR0OhVdypxVGz8TAlXgQsDnOnbcvOjYuy1ct7J8fXCi%2FOH%2F882GlXZM6UWY6a1BCRD3rqWcErTEBbgQUNC9M2KwOXDjfZqrTddB7Fa&X-Amz-Signature=69d24efe0d8a9e384e2bd029393752b682a95b7237d7ff3175375b71b902e0a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDORZM3Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQChfjNRMAq5nfPSFCouxpD5UCP8U3S4WgwqRlj5GwGxnAIgK%2FQhHhkRDEg29Xu27v2Ay6aHFSW2wXhdBK%2FVGi87tDkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMLEcfBuUvZdbxOx6yrcA%2FkEz2zGdJg580Anj%2FK2iq5CgbYJFscV6v8Bnl%2BMjI6XIvzUdzNNOR8V7H2BzAvgmpWUl7%2BtUtCmkpX6sq5fKCBX%2B%2FNyaKqNSXPSzt8L1Bf%2FYN33TV%2FOwOYMC%2BLEXwnf5kfYYFZ%2F1V5qglnya5v5kBFHLIybxlelADQSElPfrQJNplXvdlMZ55tiBHS%2BNMqj8MqI7P1j5OopjKhFoRO%2FXSAJqHKqJL1VusZBVgbmfnzenJpqjOkNmCc%2Bzhir0Kvr2OvwhiS8MmpJPdRnaI3%2F7Fxd%2FiCdpSZtz01ZyIbEfEPaynKP2uWj8z24sda738sBR%2FERwwAKGH1Lf%2FFrjl1FdkuXYF2KHwze%2FALUksf1oLJ5wn%2BS%2BcQT5dNWADF94bd7rgcj2h%2F8BrmeP%2FQTvl09XtEbxc738q6xfx5orJu%2BEfXqaQr0QtkQGE%2B66JNUEHNE4FbeAE2kZoQjSRhCjtxhh92UyWsVi%2BUmGNONObBFV3LG7j4vNL09%2FX1jzM4Wyc2VAfDJvgr1gjcmoPn6uifi%2FYlveJHtMpkJtOhzybzcyWbyW91RmUqhpiQxKa%2BPRpdVkz%2Bp5n8pzgaiYzk4dVRl50WWkKNreTQEL5nTpuWslTYzM3iAfoV2CAKFp11PMNGdgsUGOqUBOTktLfdLVgNNsU1tmfWh4OjCHJFwDG3fJcn1PWpS%2F7qPEiPUJ2sW9DDplbXdwO0eD0H0hYVsTKTDRNvh6TyNmfw37YXzzbNrm6CVrGYQ3k%2BN20qFJ2ArqWlR0OhVdypxVGz8TAlXgQsDnOnbcvOjYuy1ct7J8fXCi%2FOH%2F882GlXZM6UWY6a1BCRD3rqWcErTEBbgQUNC9M2KwOXDjfZqrTddB7Fa&X-Amz-Signature=acf9f65a92167d3d2adb2c351969ff6ca1178c1a6e8c1d1c2f32139ac816e741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDORZM3Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQChfjNRMAq5nfPSFCouxpD5UCP8U3S4WgwqRlj5GwGxnAIgK%2FQhHhkRDEg29Xu27v2Ay6aHFSW2wXhdBK%2FVGi87tDkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMLEcfBuUvZdbxOx6yrcA%2FkEz2zGdJg580Anj%2FK2iq5CgbYJFscV6v8Bnl%2BMjI6XIvzUdzNNOR8V7H2BzAvgmpWUl7%2BtUtCmkpX6sq5fKCBX%2B%2FNyaKqNSXPSzt8L1Bf%2FYN33TV%2FOwOYMC%2BLEXwnf5kfYYFZ%2F1V5qglnya5v5kBFHLIybxlelADQSElPfrQJNplXvdlMZ55tiBHS%2BNMqj8MqI7P1j5OopjKhFoRO%2FXSAJqHKqJL1VusZBVgbmfnzenJpqjOkNmCc%2Bzhir0Kvr2OvwhiS8MmpJPdRnaI3%2F7Fxd%2FiCdpSZtz01ZyIbEfEPaynKP2uWj8z24sda738sBR%2FERwwAKGH1Lf%2FFrjl1FdkuXYF2KHwze%2FALUksf1oLJ5wn%2BS%2BcQT5dNWADF94bd7rgcj2h%2F8BrmeP%2FQTvl09XtEbxc738q6xfx5orJu%2BEfXqaQr0QtkQGE%2B66JNUEHNE4FbeAE2kZoQjSRhCjtxhh92UyWsVi%2BUmGNONObBFV3LG7j4vNL09%2FX1jzM4Wyc2VAfDJvgr1gjcmoPn6uifi%2FYlveJHtMpkJtOhzybzcyWbyW91RmUqhpiQxKa%2BPRpdVkz%2Bp5n8pzgaiYzk4dVRl50WWkKNreTQEL5nTpuWslTYzM3iAfoV2CAKFp11PMNGdgsUGOqUBOTktLfdLVgNNsU1tmfWh4OjCHJFwDG3fJcn1PWpS%2F7qPEiPUJ2sW9DDplbXdwO0eD0H0hYVsTKTDRNvh6TyNmfw37YXzzbNrm6CVrGYQ3k%2BN20qFJ2ArqWlR0OhVdypxVGz8TAlXgQsDnOnbcvOjYuy1ct7J8fXCi%2FOH%2F882GlXZM6UWY6a1BCRD3rqWcErTEBbgQUNC9M2KwOXDjfZqrTddB7Fa&X-Amz-Signature=7416f366821eea8f75071bd5cf11068a0fc680639249eafc433ad22e154d8a04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDORZM3Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQChfjNRMAq5nfPSFCouxpD5UCP8U3S4WgwqRlj5GwGxnAIgK%2FQhHhkRDEg29Xu27v2Ay6aHFSW2wXhdBK%2FVGi87tDkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMLEcfBuUvZdbxOx6yrcA%2FkEz2zGdJg580Anj%2FK2iq5CgbYJFscV6v8Bnl%2BMjI6XIvzUdzNNOR8V7H2BzAvgmpWUl7%2BtUtCmkpX6sq5fKCBX%2B%2FNyaKqNSXPSzt8L1Bf%2FYN33TV%2FOwOYMC%2BLEXwnf5kfYYFZ%2F1V5qglnya5v5kBFHLIybxlelADQSElPfrQJNplXvdlMZ55tiBHS%2BNMqj8MqI7P1j5OopjKhFoRO%2FXSAJqHKqJL1VusZBVgbmfnzenJpqjOkNmCc%2Bzhir0Kvr2OvwhiS8MmpJPdRnaI3%2F7Fxd%2FiCdpSZtz01ZyIbEfEPaynKP2uWj8z24sda738sBR%2FERwwAKGH1Lf%2FFrjl1FdkuXYF2KHwze%2FALUksf1oLJ5wn%2BS%2BcQT5dNWADF94bd7rgcj2h%2F8BrmeP%2FQTvl09XtEbxc738q6xfx5orJu%2BEfXqaQr0QtkQGE%2B66JNUEHNE4FbeAE2kZoQjSRhCjtxhh92UyWsVi%2BUmGNONObBFV3LG7j4vNL09%2FX1jzM4Wyc2VAfDJvgr1gjcmoPn6uifi%2FYlveJHtMpkJtOhzybzcyWbyW91RmUqhpiQxKa%2BPRpdVkz%2Bp5n8pzgaiYzk4dVRl50WWkKNreTQEL5nTpuWslTYzM3iAfoV2CAKFp11PMNGdgsUGOqUBOTktLfdLVgNNsU1tmfWh4OjCHJFwDG3fJcn1PWpS%2F7qPEiPUJ2sW9DDplbXdwO0eD0H0hYVsTKTDRNvh6TyNmfw37YXzzbNrm6CVrGYQ3k%2BN20qFJ2ArqWlR0OhVdypxVGz8TAlXgQsDnOnbcvOjYuy1ct7J8fXCi%2FOH%2F882GlXZM6UWY6a1BCRD3rqWcErTEBbgQUNC9M2KwOXDjfZqrTddB7Fa&X-Amz-Signature=cf8976ef17ce0bd436b22c90bed396949f02e753be24e90711d9df138260f41a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDORZM3Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQChfjNRMAq5nfPSFCouxpD5UCP8U3S4WgwqRlj5GwGxnAIgK%2FQhHhkRDEg29Xu27v2Ay6aHFSW2wXhdBK%2FVGi87tDkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMLEcfBuUvZdbxOx6yrcA%2FkEz2zGdJg580Anj%2FK2iq5CgbYJFscV6v8Bnl%2BMjI6XIvzUdzNNOR8V7H2BzAvgmpWUl7%2BtUtCmkpX6sq5fKCBX%2B%2FNyaKqNSXPSzt8L1Bf%2FYN33TV%2FOwOYMC%2BLEXwnf5kfYYFZ%2F1V5qglnya5v5kBFHLIybxlelADQSElPfrQJNplXvdlMZ55tiBHS%2BNMqj8MqI7P1j5OopjKhFoRO%2FXSAJqHKqJL1VusZBVgbmfnzenJpqjOkNmCc%2Bzhir0Kvr2OvwhiS8MmpJPdRnaI3%2F7Fxd%2FiCdpSZtz01ZyIbEfEPaynKP2uWj8z24sda738sBR%2FERwwAKGH1Lf%2FFrjl1FdkuXYF2KHwze%2FALUksf1oLJ5wn%2BS%2BcQT5dNWADF94bd7rgcj2h%2F8BrmeP%2FQTvl09XtEbxc738q6xfx5orJu%2BEfXqaQr0QtkQGE%2B66JNUEHNE4FbeAE2kZoQjSRhCjtxhh92UyWsVi%2BUmGNONObBFV3LG7j4vNL09%2FX1jzM4Wyc2VAfDJvgr1gjcmoPn6uifi%2FYlveJHtMpkJtOhzybzcyWbyW91RmUqhpiQxKa%2BPRpdVkz%2Bp5n8pzgaiYzk4dVRl50WWkKNreTQEL5nTpuWslTYzM3iAfoV2CAKFp11PMNGdgsUGOqUBOTktLfdLVgNNsU1tmfWh4OjCHJFwDG3fJcn1PWpS%2F7qPEiPUJ2sW9DDplbXdwO0eD0H0hYVsTKTDRNvh6TyNmfw37YXzzbNrm6CVrGYQ3k%2BN20qFJ2ArqWlR0OhVdypxVGz8TAlXgQsDnOnbcvOjYuy1ct7J8fXCi%2FOH%2F882GlXZM6UWY6a1BCRD3rqWcErTEBbgQUNC9M2KwOXDjfZqrTddB7Fa&X-Amz-Signature=d8eb683953a2953643e6c7fdcedb9e95975e4d0c791ceefed33650baf1f38743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
