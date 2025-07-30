---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-30T06:25:00.000Z"
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

```xml

  <link name="lidar_link">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.125"/>
      <inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.001" />
    </inertial>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD74K2MQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBm5gKmpi7eukhu5jwYLvu7%2FNikBRmNC7D5%2B4cBqijbAiEAs60VU98RySfvHk4ZI7DAWByyOUhZM%2Ft8fo0SCLoTIrAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqqDa%2FfN39F17TsLircA35pedpMBaP1MbHSbRMMyNdSiP99Ss%2Bt3E0WSsKrMjS1hnuKXyKf%2FszQPB5r1Uj4%2F3s5gxp7mqGxnv%2B3qCt%2FF7NqfRVstcxj3w5decNiiXnrYVBukSL0sUoqom%2FbltZTh0i%2BvIgwL4TB0gJGKFESuT7gRjiEWjIAn8IiRCUki%2FQ%2BAr97gijMRW5jnXdL21efD%2B4z%2BZV6rN0EUr7JiPPZZaiyUYG2e4IvBk7oTmKib8Jnv4Myo5pKukwwt2qZN5cukeIW3T4eTOLOJIYqe%2FFUme2m6p%2BbMUZLSKMhLTND11ywuAYCrAG4aTh63Q5FyM7yDV5r5iQJaPFUoPLbHUfX0c79NWWw5MpbEGgEEV3ciphmgq%2BsCcclTEIsiLy4nt8mtV2RqCXlfLrN5%2FLkN0G5IxCTOl2fuOdTY9YJyXW9gUkWNmn9WQCc%2Fny3CoRys9HQFJgP%2FST6TOqLLYhLgVRTswnwgRRS%2FdP2jgtehIf%2BIrQyO4K96T%2BKVs%2BFsnryWdasWast9h61QolFrZBTR3t1gfuOW2qlzq8jqdKR6NrWy3i13yeAFev1gC90QADzG%2FG0rBF0AtqmfM0%2F5ALQ0NB7fzmavRgjdTMRyP%2FLW0pqwos4LD7ILyWS%2FZraFvL4MKCiqMQGOqUB8vZzQobzjCRqoGSIpolgrFd51D4u%2FpY1IK4Rfzq8RCTpnOjHh4bcjbbiCVwl77C5LaOWtE4C2pE9KzGzDx0zxk472%2F2CY3kdlXUKU7jJgQC%2FyI4Yx9sylnt4gPcLYc34UjBLRDCshCN6UmxY65G2Jofy7ZDDH2GgKiYPP1gLjgzwfM0d3mqXbrxXA44IvW1vWUc0boZX8fbZQceXDVaIfWWWS%2Bvf&X-Amz-Signature=34b5bea50ba5b6a8b326e54231b903ab0b9b3c88ce0b0f45ae384c859f7a5b62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD74K2MQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBm5gKmpi7eukhu5jwYLvu7%2FNikBRmNC7D5%2B4cBqijbAiEAs60VU98RySfvHk4ZI7DAWByyOUhZM%2Ft8fo0SCLoTIrAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqqDa%2FfN39F17TsLircA35pedpMBaP1MbHSbRMMyNdSiP99Ss%2Bt3E0WSsKrMjS1hnuKXyKf%2FszQPB5r1Uj4%2F3s5gxp7mqGxnv%2B3qCt%2FF7NqfRVstcxj3w5decNiiXnrYVBukSL0sUoqom%2FbltZTh0i%2BvIgwL4TB0gJGKFESuT7gRjiEWjIAn8IiRCUki%2FQ%2BAr97gijMRW5jnXdL21efD%2B4z%2BZV6rN0EUr7JiPPZZaiyUYG2e4IvBk7oTmKib8Jnv4Myo5pKukwwt2qZN5cukeIW3T4eTOLOJIYqe%2FFUme2m6p%2BbMUZLSKMhLTND11ywuAYCrAG4aTh63Q5FyM7yDV5r5iQJaPFUoPLbHUfX0c79NWWw5MpbEGgEEV3ciphmgq%2BsCcclTEIsiLy4nt8mtV2RqCXlfLrN5%2FLkN0G5IxCTOl2fuOdTY9YJyXW9gUkWNmn9WQCc%2Fny3CoRys9HQFJgP%2FST6TOqLLYhLgVRTswnwgRRS%2FdP2jgtehIf%2BIrQyO4K96T%2BKVs%2BFsnryWdasWast9h61QolFrZBTR3t1gfuOW2qlzq8jqdKR6NrWy3i13yeAFev1gC90QADzG%2FG0rBF0AtqmfM0%2F5ALQ0NB7fzmavRgjdTMRyP%2FLW0pqwos4LD7ILyWS%2FZraFvL4MKCiqMQGOqUB8vZzQobzjCRqoGSIpolgrFd51D4u%2FpY1IK4Rfzq8RCTpnOjHh4bcjbbiCVwl77C5LaOWtE4C2pE9KzGzDx0zxk472%2F2CY3kdlXUKU7jJgQC%2FyI4Yx9sylnt4gPcLYc34UjBLRDCshCN6UmxY65G2Jofy7ZDDH2GgKiYPP1gLjgzwfM0d3mqXbrxXA44IvW1vWUc0boZX8fbZQceXDVaIfWWWS%2Bvf&X-Amz-Signature=61cc6cf040bfedeb28de20148cf6f6d74e28a6961f9e6052a0e432533e5ae28c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD74K2MQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBm5gKmpi7eukhu5jwYLvu7%2FNikBRmNC7D5%2B4cBqijbAiEAs60VU98RySfvHk4ZI7DAWByyOUhZM%2Ft8fo0SCLoTIrAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqqDa%2FfN39F17TsLircA35pedpMBaP1MbHSbRMMyNdSiP99Ss%2Bt3E0WSsKrMjS1hnuKXyKf%2FszQPB5r1Uj4%2F3s5gxp7mqGxnv%2B3qCt%2FF7NqfRVstcxj3w5decNiiXnrYVBukSL0sUoqom%2FbltZTh0i%2BvIgwL4TB0gJGKFESuT7gRjiEWjIAn8IiRCUki%2FQ%2BAr97gijMRW5jnXdL21efD%2B4z%2BZV6rN0EUr7JiPPZZaiyUYG2e4IvBk7oTmKib8Jnv4Myo5pKukwwt2qZN5cukeIW3T4eTOLOJIYqe%2FFUme2m6p%2BbMUZLSKMhLTND11ywuAYCrAG4aTh63Q5FyM7yDV5r5iQJaPFUoPLbHUfX0c79NWWw5MpbEGgEEV3ciphmgq%2BsCcclTEIsiLy4nt8mtV2RqCXlfLrN5%2FLkN0G5IxCTOl2fuOdTY9YJyXW9gUkWNmn9WQCc%2Fny3CoRys9HQFJgP%2FST6TOqLLYhLgVRTswnwgRRS%2FdP2jgtehIf%2BIrQyO4K96T%2BKVs%2BFsnryWdasWast9h61QolFrZBTR3t1gfuOW2qlzq8jqdKR6NrWy3i13yeAFev1gC90QADzG%2FG0rBF0AtqmfM0%2F5ALQ0NB7fzmavRgjdTMRyP%2FLW0pqwos4LD7ILyWS%2FZraFvL4MKCiqMQGOqUB8vZzQobzjCRqoGSIpolgrFd51D4u%2FpY1IK4Rfzq8RCTpnOjHh4bcjbbiCVwl77C5LaOWtE4C2pE9KzGzDx0zxk472%2F2CY3kdlXUKU7jJgQC%2FyI4Yx9sylnt4gPcLYc34UjBLRDCshCN6UmxY65G2Jofy7ZDDH2GgKiYPP1gLjgzwfM0d3mqXbrxXA44IvW1vWUc0boZX8fbZQceXDVaIfWWWS%2Bvf&X-Amz-Signature=3f9074c93490e349e2b8acebb8426f5aa079fc518efcdf6c77d2ea441bc7d367&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD74K2MQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBm5gKmpi7eukhu5jwYLvu7%2FNikBRmNC7D5%2B4cBqijbAiEAs60VU98RySfvHk4ZI7DAWByyOUhZM%2Ft8fo0SCLoTIrAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqqDa%2FfN39F17TsLircA35pedpMBaP1MbHSbRMMyNdSiP99Ss%2Bt3E0WSsKrMjS1hnuKXyKf%2FszQPB5r1Uj4%2F3s5gxp7mqGxnv%2B3qCt%2FF7NqfRVstcxj3w5decNiiXnrYVBukSL0sUoqom%2FbltZTh0i%2BvIgwL4TB0gJGKFESuT7gRjiEWjIAn8IiRCUki%2FQ%2BAr97gijMRW5jnXdL21efD%2B4z%2BZV6rN0EUr7JiPPZZaiyUYG2e4IvBk7oTmKib8Jnv4Myo5pKukwwt2qZN5cukeIW3T4eTOLOJIYqe%2FFUme2m6p%2BbMUZLSKMhLTND11ywuAYCrAG4aTh63Q5FyM7yDV5r5iQJaPFUoPLbHUfX0c79NWWw5MpbEGgEEV3ciphmgq%2BsCcclTEIsiLy4nt8mtV2RqCXlfLrN5%2FLkN0G5IxCTOl2fuOdTY9YJyXW9gUkWNmn9WQCc%2Fny3CoRys9HQFJgP%2FST6TOqLLYhLgVRTswnwgRRS%2FdP2jgtehIf%2BIrQyO4K96T%2BKVs%2BFsnryWdasWast9h61QolFrZBTR3t1gfuOW2qlzq8jqdKR6NrWy3i13yeAFev1gC90QADzG%2FG0rBF0AtqmfM0%2F5ALQ0NB7fzmavRgjdTMRyP%2FLW0pqwos4LD7ILyWS%2FZraFvL4MKCiqMQGOqUB8vZzQobzjCRqoGSIpolgrFd51D4u%2FpY1IK4Rfzq8RCTpnOjHh4bcjbbiCVwl77C5LaOWtE4C2pE9KzGzDx0zxk472%2F2CY3kdlXUKU7jJgQC%2FyI4Yx9sylnt4gPcLYc34UjBLRDCshCN6UmxY65G2Jofy7ZDDH2GgKiYPP1gLjgzwfM0d3mqXbrxXA44IvW1vWUc0boZX8fbZQceXDVaIfWWWS%2Bvf&X-Amz-Signature=cd165dedac92a551c5db0fc06d602a7e323af0a01f8f0dd76a3deefe6c5776ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD74K2MQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBm5gKmpi7eukhu5jwYLvu7%2FNikBRmNC7D5%2B4cBqijbAiEAs60VU98RySfvHk4ZI7DAWByyOUhZM%2Ft8fo0SCLoTIrAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqqDa%2FfN39F17TsLircA35pedpMBaP1MbHSbRMMyNdSiP99Ss%2Bt3E0WSsKrMjS1hnuKXyKf%2FszQPB5r1Uj4%2F3s5gxp7mqGxnv%2B3qCt%2FF7NqfRVstcxj3w5decNiiXnrYVBukSL0sUoqom%2FbltZTh0i%2BvIgwL4TB0gJGKFESuT7gRjiEWjIAn8IiRCUki%2FQ%2BAr97gijMRW5jnXdL21efD%2B4z%2BZV6rN0EUr7JiPPZZaiyUYG2e4IvBk7oTmKib8Jnv4Myo5pKukwwt2qZN5cukeIW3T4eTOLOJIYqe%2FFUme2m6p%2BbMUZLSKMhLTND11ywuAYCrAG4aTh63Q5FyM7yDV5r5iQJaPFUoPLbHUfX0c79NWWw5MpbEGgEEV3ciphmgq%2BsCcclTEIsiLy4nt8mtV2RqCXlfLrN5%2FLkN0G5IxCTOl2fuOdTY9YJyXW9gUkWNmn9WQCc%2Fny3CoRys9HQFJgP%2FST6TOqLLYhLgVRTswnwgRRS%2FdP2jgtehIf%2BIrQyO4K96T%2BKVs%2BFsnryWdasWast9h61QolFrZBTR3t1gfuOW2qlzq8jqdKR6NrWy3i13yeAFev1gC90QADzG%2FG0rBF0AtqmfM0%2F5ALQ0NB7fzmavRgjdTMRyP%2FLW0pqwos4LD7ILyWS%2FZraFvL4MKCiqMQGOqUB8vZzQobzjCRqoGSIpolgrFd51D4u%2FpY1IK4Rfzq8RCTpnOjHh4bcjbbiCVwl77C5LaOWtE4C2pE9KzGzDx0zxk472%2F2CY3kdlXUKU7jJgQC%2FyI4Yx9sylnt4gPcLYc34UjBLRDCshCN6UmxY65G2Jofy7ZDDH2GgKiYPP1gLjgzwfM0d3mqXbrxXA44IvW1vWUc0boZX8fbZQceXDVaIfWWWS%2Bvf&X-Amz-Signature=346be3f39da2bbc504b4b82de643200228782e8298ac7ceb47aee1df2020917a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD74K2MQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBm5gKmpi7eukhu5jwYLvu7%2FNikBRmNC7D5%2B4cBqijbAiEAs60VU98RySfvHk4ZI7DAWByyOUhZM%2Ft8fo0SCLoTIrAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqqDa%2FfN39F17TsLircA35pedpMBaP1MbHSbRMMyNdSiP99Ss%2Bt3E0WSsKrMjS1hnuKXyKf%2FszQPB5r1Uj4%2F3s5gxp7mqGxnv%2B3qCt%2FF7NqfRVstcxj3w5decNiiXnrYVBukSL0sUoqom%2FbltZTh0i%2BvIgwL4TB0gJGKFESuT7gRjiEWjIAn8IiRCUki%2FQ%2BAr97gijMRW5jnXdL21efD%2B4z%2BZV6rN0EUr7JiPPZZaiyUYG2e4IvBk7oTmKib8Jnv4Myo5pKukwwt2qZN5cukeIW3T4eTOLOJIYqe%2FFUme2m6p%2BbMUZLSKMhLTND11ywuAYCrAG4aTh63Q5FyM7yDV5r5iQJaPFUoPLbHUfX0c79NWWw5MpbEGgEEV3ciphmgq%2BsCcclTEIsiLy4nt8mtV2RqCXlfLrN5%2FLkN0G5IxCTOl2fuOdTY9YJyXW9gUkWNmn9WQCc%2Fny3CoRys9HQFJgP%2FST6TOqLLYhLgVRTswnwgRRS%2FdP2jgtehIf%2BIrQyO4K96T%2BKVs%2BFsnryWdasWast9h61QolFrZBTR3t1gfuOW2qlzq8jqdKR6NrWy3i13yeAFev1gC90QADzG%2FG0rBF0AtqmfM0%2F5ALQ0NB7fzmavRgjdTMRyP%2FLW0pqwos4LD7ILyWS%2FZraFvL4MKCiqMQGOqUB8vZzQobzjCRqoGSIpolgrFd51D4u%2FpY1IK4Rfzq8RCTpnOjHh4bcjbbiCVwl77C5LaOWtE4C2pE9KzGzDx0zxk472%2F2CY3kdlXUKU7jJgQC%2FyI4Yx9sylnt4gPcLYc34UjBLRDCshCN6UmxY65G2Jofy7ZDDH2GgKiYPP1gLjgzwfM0d3mqXbrxXA44IvW1vWUc0boZX8fbZQceXDVaIfWWWS%2Bvf&X-Amz-Signature=2ff80dfe2c5012c04490baeb06a882eeab2daafc64578df3d8a8524d8cdf3a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD74K2MQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBm5gKmpi7eukhu5jwYLvu7%2FNikBRmNC7D5%2B4cBqijbAiEAs60VU98RySfvHk4ZI7DAWByyOUhZM%2Ft8fo0SCLoTIrAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqqDa%2FfN39F17TsLircA35pedpMBaP1MbHSbRMMyNdSiP99Ss%2Bt3E0WSsKrMjS1hnuKXyKf%2FszQPB5r1Uj4%2F3s5gxp7mqGxnv%2B3qCt%2FF7NqfRVstcxj3w5decNiiXnrYVBukSL0sUoqom%2FbltZTh0i%2BvIgwL4TB0gJGKFESuT7gRjiEWjIAn8IiRCUki%2FQ%2BAr97gijMRW5jnXdL21efD%2B4z%2BZV6rN0EUr7JiPPZZaiyUYG2e4IvBk7oTmKib8Jnv4Myo5pKukwwt2qZN5cukeIW3T4eTOLOJIYqe%2FFUme2m6p%2BbMUZLSKMhLTND11ywuAYCrAG4aTh63Q5FyM7yDV5r5iQJaPFUoPLbHUfX0c79NWWw5MpbEGgEEV3ciphmgq%2BsCcclTEIsiLy4nt8mtV2RqCXlfLrN5%2FLkN0G5IxCTOl2fuOdTY9YJyXW9gUkWNmn9WQCc%2Fny3CoRys9HQFJgP%2FST6TOqLLYhLgVRTswnwgRRS%2FdP2jgtehIf%2BIrQyO4K96T%2BKVs%2BFsnryWdasWast9h61QolFrZBTR3t1gfuOW2qlzq8jqdKR6NrWy3i13yeAFev1gC90QADzG%2FG0rBF0AtqmfM0%2F5ALQ0NB7fzmavRgjdTMRyP%2FLW0pqwos4LD7ILyWS%2FZraFvL4MKCiqMQGOqUB8vZzQobzjCRqoGSIpolgrFd51D4u%2FpY1IK4Rfzq8RCTpnOjHh4bcjbbiCVwl77C5LaOWtE4C2pE9KzGzDx0zxk472%2F2CY3kdlXUKU7jJgQC%2FyI4Yx9sylnt4gPcLYc34UjBLRDCshCN6UmxY65G2Jofy7ZDDH2GgKiYPP1gLjgzwfM0d3mqXbrxXA44IvW1vWUc0boZX8fbZQceXDVaIfWWWS%2Bvf&X-Amz-Signature=8f0caef96237faafdc822a42c6cc359106a2ff785b4618c081abc6536ffd8b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD74K2MQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBm5gKmpi7eukhu5jwYLvu7%2FNikBRmNC7D5%2B4cBqijbAiEAs60VU98RySfvHk4ZI7DAWByyOUhZM%2Ft8fo0SCLoTIrAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqqDa%2FfN39F17TsLircA35pedpMBaP1MbHSbRMMyNdSiP99Ss%2Bt3E0WSsKrMjS1hnuKXyKf%2FszQPB5r1Uj4%2F3s5gxp7mqGxnv%2B3qCt%2FF7NqfRVstcxj3w5decNiiXnrYVBukSL0sUoqom%2FbltZTh0i%2BvIgwL4TB0gJGKFESuT7gRjiEWjIAn8IiRCUki%2FQ%2BAr97gijMRW5jnXdL21efD%2B4z%2BZV6rN0EUr7JiPPZZaiyUYG2e4IvBk7oTmKib8Jnv4Myo5pKukwwt2qZN5cukeIW3T4eTOLOJIYqe%2FFUme2m6p%2BbMUZLSKMhLTND11ywuAYCrAG4aTh63Q5FyM7yDV5r5iQJaPFUoPLbHUfX0c79NWWw5MpbEGgEEV3ciphmgq%2BsCcclTEIsiLy4nt8mtV2RqCXlfLrN5%2FLkN0G5IxCTOl2fuOdTY9YJyXW9gUkWNmn9WQCc%2Fny3CoRys9HQFJgP%2FST6TOqLLYhLgVRTswnwgRRS%2FdP2jgtehIf%2BIrQyO4K96T%2BKVs%2BFsnryWdasWast9h61QolFrZBTR3t1gfuOW2qlzq8jqdKR6NrWy3i13yeAFev1gC90QADzG%2FG0rBF0AtqmfM0%2F5ALQ0NB7fzmavRgjdTMRyP%2FLW0pqwos4LD7ILyWS%2FZraFvL4MKCiqMQGOqUB8vZzQobzjCRqoGSIpolgrFd51D4u%2FpY1IK4Rfzq8RCTpnOjHh4bcjbbiCVwl77C5LaOWtE4C2pE9KzGzDx0zxk472%2F2CY3kdlXUKU7jJgQC%2FyI4Yx9sylnt4gPcLYc34UjBLRDCshCN6UmxY65G2Jofy7ZDDH2GgKiYPP1gLjgzwfM0d3mqXbrxXA44IvW1vWUc0boZX8fbZQceXDVaIfWWWS%2Bvf&X-Amz-Signature=dae95d06312d73a9cda7de5d808221e3757bab131ab303ac3d14be0bcb34c937&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD74K2MQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBm5gKmpi7eukhu5jwYLvu7%2FNikBRmNC7D5%2B4cBqijbAiEAs60VU98RySfvHk4ZI7DAWByyOUhZM%2Ft8fo0SCLoTIrAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqqDa%2FfN39F17TsLircA35pedpMBaP1MbHSbRMMyNdSiP99Ss%2Bt3E0WSsKrMjS1hnuKXyKf%2FszQPB5r1Uj4%2F3s5gxp7mqGxnv%2B3qCt%2FF7NqfRVstcxj3w5decNiiXnrYVBukSL0sUoqom%2FbltZTh0i%2BvIgwL4TB0gJGKFESuT7gRjiEWjIAn8IiRCUki%2FQ%2BAr97gijMRW5jnXdL21efD%2B4z%2BZV6rN0EUr7JiPPZZaiyUYG2e4IvBk7oTmKib8Jnv4Myo5pKukwwt2qZN5cukeIW3T4eTOLOJIYqe%2FFUme2m6p%2BbMUZLSKMhLTND11ywuAYCrAG4aTh63Q5FyM7yDV5r5iQJaPFUoPLbHUfX0c79NWWw5MpbEGgEEV3ciphmgq%2BsCcclTEIsiLy4nt8mtV2RqCXlfLrN5%2FLkN0G5IxCTOl2fuOdTY9YJyXW9gUkWNmn9WQCc%2Fny3CoRys9HQFJgP%2FST6TOqLLYhLgVRTswnwgRRS%2FdP2jgtehIf%2BIrQyO4K96T%2BKVs%2BFsnryWdasWast9h61QolFrZBTR3t1gfuOW2qlzq8jqdKR6NrWy3i13yeAFev1gC90QADzG%2FG0rBF0AtqmfM0%2F5ALQ0NB7fzmavRgjdTMRyP%2FLW0pqwos4LD7ILyWS%2FZraFvL4MKCiqMQGOqUB8vZzQobzjCRqoGSIpolgrFd51D4u%2FpY1IK4Rfzq8RCTpnOjHh4bcjbbiCVwl77C5LaOWtE4C2pE9KzGzDx0zxk472%2F2CY3kdlXUKU7jJgQC%2FyI4Yx9sylnt4gPcLYc34UjBLRDCshCN6UmxY65G2Jofy7ZDDH2GgKiYPP1gLjgzwfM0d3mqXbrxXA44IvW1vWUc0boZX8fbZQceXDVaIfWWWS%2Bvf&X-Amz-Signature=e98c789707be890ae6478827310aea769dd05e8a05fbcfbe09223195ed254c1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD74K2MQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBm5gKmpi7eukhu5jwYLvu7%2FNikBRmNC7D5%2B4cBqijbAiEAs60VU98RySfvHk4ZI7DAWByyOUhZM%2Ft8fo0SCLoTIrAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqqDa%2FfN39F17TsLircA35pedpMBaP1MbHSbRMMyNdSiP99Ss%2Bt3E0WSsKrMjS1hnuKXyKf%2FszQPB5r1Uj4%2F3s5gxp7mqGxnv%2B3qCt%2FF7NqfRVstcxj3w5decNiiXnrYVBukSL0sUoqom%2FbltZTh0i%2BvIgwL4TB0gJGKFESuT7gRjiEWjIAn8IiRCUki%2FQ%2BAr97gijMRW5jnXdL21efD%2B4z%2BZV6rN0EUr7JiPPZZaiyUYG2e4IvBk7oTmKib8Jnv4Myo5pKukwwt2qZN5cukeIW3T4eTOLOJIYqe%2FFUme2m6p%2BbMUZLSKMhLTND11ywuAYCrAG4aTh63Q5FyM7yDV5r5iQJaPFUoPLbHUfX0c79NWWw5MpbEGgEEV3ciphmgq%2BsCcclTEIsiLy4nt8mtV2RqCXlfLrN5%2FLkN0G5IxCTOl2fuOdTY9YJyXW9gUkWNmn9WQCc%2Fny3CoRys9HQFJgP%2FST6TOqLLYhLgVRTswnwgRRS%2FdP2jgtehIf%2BIrQyO4K96T%2BKVs%2BFsnryWdasWast9h61QolFrZBTR3t1gfuOW2qlzq8jqdKR6NrWy3i13yeAFev1gC90QADzG%2FG0rBF0AtqmfM0%2F5ALQ0NB7fzmavRgjdTMRyP%2FLW0pqwos4LD7ILyWS%2FZraFvL4MKCiqMQGOqUB8vZzQobzjCRqoGSIpolgrFd51D4u%2FpY1IK4Rfzq8RCTpnOjHh4bcjbbiCVwl77C5LaOWtE4C2pE9KzGzDx0zxk472%2F2CY3kdlXUKU7jJgQC%2FyI4Yx9sylnt4gPcLYc34UjBLRDCshCN6UmxY65G2Jofy7ZDDH2GgKiYPP1gLjgzwfM0d3mqXbrxXA44IvW1vWUc0boZX8fbZQceXDVaIfWWWS%2Bvf&X-Amz-Signature=52da53cf9576710931213bd2a5ed4e73388c0a19bce0178bda1ce6a56e3db728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
