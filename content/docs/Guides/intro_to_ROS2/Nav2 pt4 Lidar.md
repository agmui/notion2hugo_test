---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-29T01:28:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-29T01:28:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X62KBDN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQC4ZZ76N508cIozPv%2B5pBPap7%2BXp6yuFL9n4TT5UlbaQQIhAMtf7vyjHvsNkBkNN6o3FU94GTEPjz%2B3k91NdhGfd3PfKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiLg1wuw8bXemID%2FEq3ANetPZlrx103tSqLH7D4%2FAw8%2FjI2Myx2VSYYLU4zvHoBos%2BLIifXec9WP29rWm7IkUh48HLGA4yuKRDIe%2BDjCQzaqsYRPtIp%2BIH8kM%2Fp82ovEPO9S9Ih3AarEm2MaYO3i%2FECf16ImLgnXFI5GgOmTCsSdGccGGB3vpqXU1WoiFi%2B%2BnowgPBulm6WUdFWzz5%2Fu1VYLVEZZluEFRXw3jTaq8ESnS2AzcBMNvgNxf9abysfPzbhFpHKebz5rwdgnf1cAfObhnRfWakMFa2klUdCZyVOAIlfEfNviywkbaTKsVUVKPY02DtZIb2d6pK9hjhy3RsIpx3ZUyYPTwofxxli8vjgCmBgQLWO9XP8C0%2FK9YAhXec3nvrYGTPsV32o8OvdWluSKgGCO%2FYAP3NS%2BlgZJlsKPW31EaTIw%2B6MqDEMSmMTJTgWGk%2FM%2Fc9fBegyBbzde7%2FBIJdVQozMEL9%2BTMEx1a6n94l1jx0x%2F6iyauLJTv6hqnbFJgiQbwYL7JBCXBQzqTI6ym339yuf0OgFwbbRAePA9g%2FAsARChuITqMM73t62aWU7dnb5xbvh6Slbq063kNr7T1kg0oR3wf5q0hOSB%2Fnnb0ZvqC4mpid9PxgCBaSVzh3IdW40p902c7%2BuTCNmaPEBjqkAeMy2Fuuc0wtWbBUYLHR2ZiGR4ZISvCzmfrNHd130CJyr8mIaN%2BnpYHsguHO2H38mbXj8gwcOfiB1rgLExujShE%2FSie8aS0lWlK%2FUVyP5FpFtc8yLyvHC7D9WcrHOS6BULQo2LgHVrmWMF5aaekKZWDwqQ5FOMZyeaHbC%2FTUVxjRLLjWZ0i0Y%2BLhdaDIV3sI4Nh%2B5jtepus74jwND8r2MFSosISS&X-Amz-Signature=4bd05794d9421a1bbb68419e999d1c080c026c4ee5200751fe07f5c66a848eb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X62KBDN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQC4ZZ76N508cIozPv%2B5pBPap7%2BXp6yuFL9n4TT5UlbaQQIhAMtf7vyjHvsNkBkNN6o3FU94GTEPjz%2B3k91NdhGfd3PfKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiLg1wuw8bXemID%2FEq3ANetPZlrx103tSqLH7D4%2FAw8%2FjI2Myx2VSYYLU4zvHoBos%2BLIifXec9WP29rWm7IkUh48HLGA4yuKRDIe%2BDjCQzaqsYRPtIp%2BIH8kM%2Fp82ovEPO9S9Ih3AarEm2MaYO3i%2FECf16ImLgnXFI5GgOmTCsSdGccGGB3vpqXU1WoiFi%2B%2BnowgPBulm6WUdFWzz5%2Fu1VYLVEZZluEFRXw3jTaq8ESnS2AzcBMNvgNxf9abysfPzbhFpHKebz5rwdgnf1cAfObhnRfWakMFa2klUdCZyVOAIlfEfNviywkbaTKsVUVKPY02DtZIb2d6pK9hjhy3RsIpx3ZUyYPTwofxxli8vjgCmBgQLWO9XP8C0%2FK9YAhXec3nvrYGTPsV32o8OvdWluSKgGCO%2FYAP3NS%2BlgZJlsKPW31EaTIw%2B6MqDEMSmMTJTgWGk%2FM%2Fc9fBegyBbzde7%2FBIJdVQozMEL9%2BTMEx1a6n94l1jx0x%2F6iyauLJTv6hqnbFJgiQbwYL7JBCXBQzqTI6ym339yuf0OgFwbbRAePA9g%2FAsARChuITqMM73t62aWU7dnb5xbvh6Slbq063kNr7T1kg0oR3wf5q0hOSB%2Fnnb0ZvqC4mpid9PxgCBaSVzh3IdW40p902c7%2BuTCNmaPEBjqkAeMy2Fuuc0wtWbBUYLHR2ZiGR4ZISvCzmfrNHd130CJyr8mIaN%2BnpYHsguHO2H38mbXj8gwcOfiB1rgLExujShE%2FSie8aS0lWlK%2FUVyP5FpFtc8yLyvHC7D9WcrHOS6BULQo2LgHVrmWMF5aaekKZWDwqQ5FOMZyeaHbC%2FTUVxjRLLjWZ0i0Y%2BLhdaDIV3sI4Nh%2B5jtepus74jwND8r2MFSosISS&X-Amz-Signature=f8f5e8952b0cece3fa8b5640a23f749d93ed34de7ce344a36212f88b85fe97f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X62KBDN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQC4ZZ76N508cIozPv%2B5pBPap7%2BXp6yuFL9n4TT5UlbaQQIhAMtf7vyjHvsNkBkNN6o3FU94GTEPjz%2B3k91NdhGfd3PfKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiLg1wuw8bXemID%2FEq3ANetPZlrx103tSqLH7D4%2FAw8%2FjI2Myx2VSYYLU4zvHoBos%2BLIifXec9WP29rWm7IkUh48HLGA4yuKRDIe%2BDjCQzaqsYRPtIp%2BIH8kM%2Fp82ovEPO9S9Ih3AarEm2MaYO3i%2FECf16ImLgnXFI5GgOmTCsSdGccGGB3vpqXU1WoiFi%2B%2BnowgPBulm6WUdFWzz5%2Fu1VYLVEZZluEFRXw3jTaq8ESnS2AzcBMNvgNxf9abysfPzbhFpHKebz5rwdgnf1cAfObhnRfWakMFa2klUdCZyVOAIlfEfNviywkbaTKsVUVKPY02DtZIb2d6pK9hjhy3RsIpx3ZUyYPTwofxxli8vjgCmBgQLWO9XP8C0%2FK9YAhXec3nvrYGTPsV32o8OvdWluSKgGCO%2FYAP3NS%2BlgZJlsKPW31EaTIw%2B6MqDEMSmMTJTgWGk%2FM%2Fc9fBegyBbzde7%2FBIJdVQozMEL9%2BTMEx1a6n94l1jx0x%2F6iyauLJTv6hqnbFJgiQbwYL7JBCXBQzqTI6ym339yuf0OgFwbbRAePA9g%2FAsARChuITqMM73t62aWU7dnb5xbvh6Slbq063kNr7T1kg0oR3wf5q0hOSB%2Fnnb0ZvqC4mpid9PxgCBaSVzh3IdW40p902c7%2BuTCNmaPEBjqkAeMy2Fuuc0wtWbBUYLHR2ZiGR4ZISvCzmfrNHd130CJyr8mIaN%2BnpYHsguHO2H38mbXj8gwcOfiB1rgLExujShE%2FSie8aS0lWlK%2FUVyP5FpFtc8yLyvHC7D9WcrHOS6BULQo2LgHVrmWMF5aaekKZWDwqQ5FOMZyeaHbC%2FTUVxjRLLjWZ0i0Y%2BLhdaDIV3sI4Nh%2B5jtepus74jwND8r2MFSosISS&X-Amz-Signature=9d82fece4b147eaf11aaf48c026c2104cf7b1b9770943f0f98124a9f5085192c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X62KBDN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQC4ZZ76N508cIozPv%2B5pBPap7%2BXp6yuFL9n4TT5UlbaQQIhAMtf7vyjHvsNkBkNN6o3FU94GTEPjz%2B3k91NdhGfd3PfKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiLg1wuw8bXemID%2FEq3ANetPZlrx103tSqLH7D4%2FAw8%2FjI2Myx2VSYYLU4zvHoBos%2BLIifXec9WP29rWm7IkUh48HLGA4yuKRDIe%2BDjCQzaqsYRPtIp%2BIH8kM%2Fp82ovEPO9S9Ih3AarEm2MaYO3i%2FECf16ImLgnXFI5GgOmTCsSdGccGGB3vpqXU1WoiFi%2B%2BnowgPBulm6WUdFWzz5%2Fu1VYLVEZZluEFRXw3jTaq8ESnS2AzcBMNvgNxf9abysfPzbhFpHKebz5rwdgnf1cAfObhnRfWakMFa2klUdCZyVOAIlfEfNviywkbaTKsVUVKPY02DtZIb2d6pK9hjhy3RsIpx3ZUyYPTwofxxli8vjgCmBgQLWO9XP8C0%2FK9YAhXec3nvrYGTPsV32o8OvdWluSKgGCO%2FYAP3NS%2BlgZJlsKPW31EaTIw%2B6MqDEMSmMTJTgWGk%2FM%2Fc9fBegyBbzde7%2FBIJdVQozMEL9%2BTMEx1a6n94l1jx0x%2F6iyauLJTv6hqnbFJgiQbwYL7JBCXBQzqTI6ym339yuf0OgFwbbRAePA9g%2FAsARChuITqMM73t62aWU7dnb5xbvh6Slbq063kNr7T1kg0oR3wf5q0hOSB%2Fnnb0ZvqC4mpid9PxgCBaSVzh3IdW40p902c7%2BuTCNmaPEBjqkAeMy2Fuuc0wtWbBUYLHR2ZiGR4ZISvCzmfrNHd130CJyr8mIaN%2BnpYHsguHO2H38mbXj8gwcOfiB1rgLExujShE%2FSie8aS0lWlK%2FUVyP5FpFtc8yLyvHC7D9WcrHOS6BULQo2LgHVrmWMF5aaekKZWDwqQ5FOMZyeaHbC%2FTUVxjRLLjWZ0i0Y%2BLhdaDIV3sI4Nh%2B5jtepus74jwND8r2MFSosISS&X-Amz-Signature=ce28c782cdfe69018eacb1c7a12ec129dc6a16cdee479d15918857ffa931b452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X62KBDN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQC4ZZ76N508cIozPv%2B5pBPap7%2BXp6yuFL9n4TT5UlbaQQIhAMtf7vyjHvsNkBkNN6o3FU94GTEPjz%2B3k91NdhGfd3PfKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiLg1wuw8bXemID%2FEq3ANetPZlrx103tSqLH7D4%2FAw8%2FjI2Myx2VSYYLU4zvHoBos%2BLIifXec9WP29rWm7IkUh48HLGA4yuKRDIe%2BDjCQzaqsYRPtIp%2BIH8kM%2Fp82ovEPO9S9Ih3AarEm2MaYO3i%2FECf16ImLgnXFI5GgOmTCsSdGccGGB3vpqXU1WoiFi%2B%2BnowgPBulm6WUdFWzz5%2Fu1VYLVEZZluEFRXw3jTaq8ESnS2AzcBMNvgNxf9abysfPzbhFpHKebz5rwdgnf1cAfObhnRfWakMFa2klUdCZyVOAIlfEfNviywkbaTKsVUVKPY02DtZIb2d6pK9hjhy3RsIpx3ZUyYPTwofxxli8vjgCmBgQLWO9XP8C0%2FK9YAhXec3nvrYGTPsV32o8OvdWluSKgGCO%2FYAP3NS%2BlgZJlsKPW31EaTIw%2B6MqDEMSmMTJTgWGk%2FM%2Fc9fBegyBbzde7%2FBIJdVQozMEL9%2BTMEx1a6n94l1jx0x%2F6iyauLJTv6hqnbFJgiQbwYL7JBCXBQzqTI6ym339yuf0OgFwbbRAePA9g%2FAsARChuITqMM73t62aWU7dnb5xbvh6Slbq063kNr7T1kg0oR3wf5q0hOSB%2Fnnb0ZvqC4mpid9PxgCBaSVzh3IdW40p902c7%2BuTCNmaPEBjqkAeMy2Fuuc0wtWbBUYLHR2ZiGR4ZISvCzmfrNHd130CJyr8mIaN%2BnpYHsguHO2H38mbXj8gwcOfiB1rgLExujShE%2FSie8aS0lWlK%2FUVyP5FpFtc8yLyvHC7D9WcrHOS6BULQo2LgHVrmWMF5aaekKZWDwqQ5FOMZyeaHbC%2FTUVxjRLLjWZ0i0Y%2BLhdaDIV3sI4Nh%2B5jtepus74jwND8r2MFSosISS&X-Amz-Signature=8ff2b857989fefcf857983644aeb5c460bcea5ee06b18d25a45b115b7f9a69da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X62KBDN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQC4ZZ76N508cIozPv%2B5pBPap7%2BXp6yuFL9n4TT5UlbaQQIhAMtf7vyjHvsNkBkNN6o3FU94GTEPjz%2B3k91NdhGfd3PfKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiLg1wuw8bXemID%2FEq3ANetPZlrx103tSqLH7D4%2FAw8%2FjI2Myx2VSYYLU4zvHoBos%2BLIifXec9WP29rWm7IkUh48HLGA4yuKRDIe%2BDjCQzaqsYRPtIp%2BIH8kM%2Fp82ovEPO9S9Ih3AarEm2MaYO3i%2FECf16ImLgnXFI5GgOmTCsSdGccGGB3vpqXU1WoiFi%2B%2BnowgPBulm6WUdFWzz5%2Fu1VYLVEZZluEFRXw3jTaq8ESnS2AzcBMNvgNxf9abysfPzbhFpHKebz5rwdgnf1cAfObhnRfWakMFa2klUdCZyVOAIlfEfNviywkbaTKsVUVKPY02DtZIb2d6pK9hjhy3RsIpx3ZUyYPTwofxxli8vjgCmBgQLWO9XP8C0%2FK9YAhXec3nvrYGTPsV32o8OvdWluSKgGCO%2FYAP3NS%2BlgZJlsKPW31EaTIw%2B6MqDEMSmMTJTgWGk%2FM%2Fc9fBegyBbzde7%2FBIJdVQozMEL9%2BTMEx1a6n94l1jx0x%2F6iyauLJTv6hqnbFJgiQbwYL7JBCXBQzqTI6ym339yuf0OgFwbbRAePA9g%2FAsARChuITqMM73t62aWU7dnb5xbvh6Slbq063kNr7T1kg0oR3wf5q0hOSB%2Fnnb0ZvqC4mpid9PxgCBaSVzh3IdW40p902c7%2BuTCNmaPEBjqkAeMy2Fuuc0wtWbBUYLHR2ZiGR4ZISvCzmfrNHd130CJyr8mIaN%2BnpYHsguHO2H38mbXj8gwcOfiB1rgLExujShE%2FSie8aS0lWlK%2FUVyP5FpFtc8yLyvHC7D9WcrHOS6BULQo2LgHVrmWMF5aaekKZWDwqQ5FOMZyeaHbC%2FTUVxjRLLjWZ0i0Y%2BLhdaDIV3sI4Nh%2B5jtepus74jwND8r2MFSosISS&X-Amz-Signature=9c2d8c123bbd0004493185c1f6f1f80eea84bda725da9af1b4a26751c4fad0ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X62KBDN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQC4ZZ76N508cIozPv%2B5pBPap7%2BXp6yuFL9n4TT5UlbaQQIhAMtf7vyjHvsNkBkNN6o3FU94GTEPjz%2B3k91NdhGfd3PfKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiLg1wuw8bXemID%2FEq3ANetPZlrx103tSqLH7D4%2FAw8%2FjI2Myx2VSYYLU4zvHoBos%2BLIifXec9WP29rWm7IkUh48HLGA4yuKRDIe%2BDjCQzaqsYRPtIp%2BIH8kM%2Fp82ovEPO9S9Ih3AarEm2MaYO3i%2FECf16ImLgnXFI5GgOmTCsSdGccGGB3vpqXU1WoiFi%2B%2BnowgPBulm6WUdFWzz5%2Fu1VYLVEZZluEFRXw3jTaq8ESnS2AzcBMNvgNxf9abysfPzbhFpHKebz5rwdgnf1cAfObhnRfWakMFa2klUdCZyVOAIlfEfNviywkbaTKsVUVKPY02DtZIb2d6pK9hjhy3RsIpx3ZUyYPTwofxxli8vjgCmBgQLWO9XP8C0%2FK9YAhXec3nvrYGTPsV32o8OvdWluSKgGCO%2FYAP3NS%2BlgZJlsKPW31EaTIw%2B6MqDEMSmMTJTgWGk%2FM%2Fc9fBegyBbzde7%2FBIJdVQozMEL9%2BTMEx1a6n94l1jx0x%2F6iyauLJTv6hqnbFJgiQbwYL7JBCXBQzqTI6ym339yuf0OgFwbbRAePA9g%2FAsARChuITqMM73t62aWU7dnb5xbvh6Slbq063kNr7T1kg0oR3wf5q0hOSB%2Fnnb0ZvqC4mpid9PxgCBaSVzh3IdW40p902c7%2BuTCNmaPEBjqkAeMy2Fuuc0wtWbBUYLHR2ZiGR4ZISvCzmfrNHd130CJyr8mIaN%2BnpYHsguHO2H38mbXj8gwcOfiB1rgLExujShE%2FSie8aS0lWlK%2FUVyP5FpFtc8yLyvHC7D9WcrHOS6BULQo2LgHVrmWMF5aaekKZWDwqQ5FOMZyeaHbC%2FTUVxjRLLjWZ0i0Y%2BLhdaDIV3sI4Nh%2B5jtepus74jwND8r2MFSosISS&X-Amz-Signature=62a7c47527763bce332bc091cf689ad0ceb1e7099cdd8317e45919f0a822f819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X62KBDN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQC4ZZ76N508cIozPv%2B5pBPap7%2BXp6yuFL9n4TT5UlbaQQIhAMtf7vyjHvsNkBkNN6o3FU94GTEPjz%2B3k91NdhGfd3PfKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiLg1wuw8bXemID%2FEq3ANetPZlrx103tSqLH7D4%2FAw8%2FjI2Myx2VSYYLU4zvHoBos%2BLIifXec9WP29rWm7IkUh48HLGA4yuKRDIe%2BDjCQzaqsYRPtIp%2BIH8kM%2Fp82ovEPO9S9Ih3AarEm2MaYO3i%2FECf16ImLgnXFI5GgOmTCsSdGccGGB3vpqXU1WoiFi%2B%2BnowgPBulm6WUdFWzz5%2Fu1VYLVEZZluEFRXw3jTaq8ESnS2AzcBMNvgNxf9abysfPzbhFpHKebz5rwdgnf1cAfObhnRfWakMFa2klUdCZyVOAIlfEfNviywkbaTKsVUVKPY02DtZIb2d6pK9hjhy3RsIpx3ZUyYPTwofxxli8vjgCmBgQLWO9XP8C0%2FK9YAhXec3nvrYGTPsV32o8OvdWluSKgGCO%2FYAP3NS%2BlgZJlsKPW31EaTIw%2B6MqDEMSmMTJTgWGk%2FM%2Fc9fBegyBbzde7%2FBIJdVQozMEL9%2BTMEx1a6n94l1jx0x%2F6iyauLJTv6hqnbFJgiQbwYL7JBCXBQzqTI6ym339yuf0OgFwbbRAePA9g%2FAsARChuITqMM73t62aWU7dnb5xbvh6Slbq063kNr7T1kg0oR3wf5q0hOSB%2Fnnb0ZvqC4mpid9PxgCBaSVzh3IdW40p902c7%2BuTCNmaPEBjqkAeMy2Fuuc0wtWbBUYLHR2ZiGR4ZISvCzmfrNHd130CJyr8mIaN%2BnpYHsguHO2H38mbXj8gwcOfiB1rgLExujShE%2FSie8aS0lWlK%2FUVyP5FpFtc8yLyvHC7D9WcrHOS6BULQo2LgHVrmWMF5aaekKZWDwqQ5FOMZyeaHbC%2FTUVxjRLLjWZ0i0Y%2BLhdaDIV3sI4Nh%2B5jtepus74jwND8r2MFSosISS&X-Amz-Signature=0826814b193ff3f7deffdf8fd823c1be0436c4fd7f1c6205224ff528a5b6f892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X62KBDN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQC4ZZ76N508cIozPv%2B5pBPap7%2BXp6yuFL9n4TT5UlbaQQIhAMtf7vyjHvsNkBkNN6o3FU94GTEPjz%2B3k91NdhGfd3PfKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiLg1wuw8bXemID%2FEq3ANetPZlrx103tSqLH7D4%2FAw8%2FjI2Myx2VSYYLU4zvHoBos%2BLIifXec9WP29rWm7IkUh48HLGA4yuKRDIe%2BDjCQzaqsYRPtIp%2BIH8kM%2Fp82ovEPO9S9Ih3AarEm2MaYO3i%2FECf16ImLgnXFI5GgOmTCsSdGccGGB3vpqXU1WoiFi%2B%2BnowgPBulm6WUdFWzz5%2Fu1VYLVEZZluEFRXw3jTaq8ESnS2AzcBMNvgNxf9abysfPzbhFpHKebz5rwdgnf1cAfObhnRfWakMFa2klUdCZyVOAIlfEfNviywkbaTKsVUVKPY02DtZIb2d6pK9hjhy3RsIpx3ZUyYPTwofxxli8vjgCmBgQLWO9XP8C0%2FK9YAhXec3nvrYGTPsV32o8OvdWluSKgGCO%2FYAP3NS%2BlgZJlsKPW31EaTIw%2B6MqDEMSmMTJTgWGk%2FM%2Fc9fBegyBbzde7%2FBIJdVQozMEL9%2BTMEx1a6n94l1jx0x%2F6iyauLJTv6hqnbFJgiQbwYL7JBCXBQzqTI6ym339yuf0OgFwbbRAePA9g%2FAsARChuITqMM73t62aWU7dnb5xbvh6Slbq063kNr7T1kg0oR3wf5q0hOSB%2Fnnb0ZvqC4mpid9PxgCBaSVzh3IdW40p902c7%2BuTCNmaPEBjqkAeMy2Fuuc0wtWbBUYLHR2ZiGR4ZISvCzmfrNHd130CJyr8mIaN%2BnpYHsguHO2H38mbXj8gwcOfiB1rgLExujShE%2FSie8aS0lWlK%2FUVyP5FpFtc8yLyvHC7D9WcrHOS6BULQo2LgHVrmWMF5aaekKZWDwqQ5FOMZyeaHbC%2FTUVxjRLLjWZ0i0Y%2BLhdaDIV3sI4Nh%2B5jtepus74jwND8r2MFSosISS&X-Amz-Signature=64b6c4922584464dad891fc7e0d01ce9749ad0280df5d34d4e1b5e03c7476f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

## adding to launch

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X62KBDN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQC4ZZ76N508cIozPv%2B5pBPap7%2BXp6yuFL9n4TT5UlbaQQIhAMtf7vyjHvsNkBkNN6o3FU94GTEPjz%2B3k91NdhGfd3PfKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiLg1wuw8bXemID%2FEq3ANetPZlrx103tSqLH7D4%2FAw8%2FjI2Myx2VSYYLU4zvHoBos%2BLIifXec9WP29rWm7IkUh48HLGA4yuKRDIe%2BDjCQzaqsYRPtIp%2BIH8kM%2Fp82ovEPO9S9Ih3AarEm2MaYO3i%2FECf16ImLgnXFI5GgOmTCsSdGccGGB3vpqXU1WoiFi%2B%2BnowgPBulm6WUdFWzz5%2Fu1VYLVEZZluEFRXw3jTaq8ESnS2AzcBMNvgNxf9abysfPzbhFpHKebz5rwdgnf1cAfObhnRfWakMFa2klUdCZyVOAIlfEfNviywkbaTKsVUVKPY02DtZIb2d6pK9hjhy3RsIpx3ZUyYPTwofxxli8vjgCmBgQLWO9XP8C0%2FK9YAhXec3nvrYGTPsV32o8OvdWluSKgGCO%2FYAP3NS%2BlgZJlsKPW31EaTIw%2B6MqDEMSmMTJTgWGk%2FM%2Fc9fBegyBbzde7%2FBIJdVQozMEL9%2BTMEx1a6n94l1jx0x%2F6iyauLJTv6hqnbFJgiQbwYL7JBCXBQzqTI6ym339yuf0OgFwbbRAePA9g%2FAsARChuITqMM73t62aWU7dnb5xbvh6Slbq063kNr7T1kg0oR3wf5q0hOSB%2Fnnb0ZvqC4mpid9PxgCBaSVzh3IdW40p902c7%2BuTCNmaPEBjqkAeMy2Fuuc0wtWbBUYLHR2ZiGR4ZISvCzmfrNHd130CJyr8mIaN%2BnpYHsguHO2H38mbXj8gwcOfiB1rgLExujShE%2FSie8aS0lWlK%2FUVyP5FpFtc8yLyvHC7D9WcrHOS6BULQo2LgHVrmWMF5aaekKZWDwqQ5FOMZyeaHbC%2FTUVxjRLLjWZ0i0Y%2BLhdaDIV3sI4Nh%2B5jtepus74jwND8r2MFSosISS&X-Amz-Signature=8702635682d21ea75c07f28b0667b17fb61cf9ec131227942b8608a4fbcecd91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
