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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL45QSEJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICE5h6sYPzvzIYRQXnKpui9clv58YklZ%2B1BYIMwDzseVAiEAq1Xz3JpzVCNQowII%2B1YBJBJVjFq%2FPwSkt2N3pvLlE9MqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO82bzYRsOnYmPEVkyrcA9cgrqoiVcSOoNyvqARtpEZtrEvtWv15MsDUaMrd9DKK1KMBIQJGOBoOHBxXECAqst6VnU4kFFbIrJYfEOVfmm1fC2W3pr420HHa0RPTVr8guP1TogA%2BFGWvdO2IKBfn%2Be6j0KZxs9onnJ2eCkYmPDbdqgUKgXQHI7a%2FS5ALtn%2FypXvrAoNnN4vaPmG7RH9nSFRi%2FRRWZz2GNdxMV80FJrROeuo5yQebLvQkU9tE6l4xMMYJjnP31pN%2BtG5P9Tl6LcR%2FGpXua9PnyAhGgVIZ98HW5AiO%2FIVHK8zCNGiRtEnvwrlawQ%2BDqseMLPVREQbarJoiTA4YR99rwMOhn4rMdBFu8EQt5aS4TUiKtCp8n4qAzyxiH3qFwvwfOgg7SRKDOEkwVOuTZKiVpjSsg%2BYqrvX1LIBv6S0BYBvSILegq%2B%2BN9MzZqKHUtBHmKKxfnZBNO5ej%2B0S6oLbcfP2w%2FT1ThKcjohyQFmMoF89MrxJhHKrzGgua7TEi9%2FVaOM83gU%2Bllp89uyOB1SPQFsgRneX88mz%2FQ6puFAu1i%2FyKQKTfI6vfv0ioncF9EOs%2BgKHNW45lI4BQZzGxAAbOKUpdWY%2BanOa3aV4XUWZK1u4sIX2SHpZFeejfR93HVRoJC19EMPqd5cQGOqUBNCscNELFF2DvBuKJ98Ov5Wj8YQcAXlROvd1%2FtmmqYTQQVSGA7MmsCYxKbCewizD0AzvlDI1ht4GS4V%2FN6XGJZgTPoBmbQPKzc05iS6EmoeYxVWJCZPUB2KslGE75MHIAkGX9ruKAueAxa9kmQMFN4qRFIo%2BJ2a6hRgAin4E8bUKj7AE%2BV2KZdQI7mBu9%2BbLyZwT0Y5prSwJvgLvl6Q5ckRq4Xx%2B0&X-Amz-Signature=898b76620b6cab90986ee0643f59bfdf41c3545ffeb9e8eefe9463e0384cf46e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5OQJJNW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgB0ID7IaYGHaRU8%2BXvd15sM%2BwLpDKvmxjOq5jwYHjsAIgSAud7Ya5dyFiC%2Fp5KZ%2F0KWhFJgtpWYM4Qe25yjHejDUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsrjgummNhoTQPFqircA2QaGNAnP1xpgx%2F%2FgiuzKxgM8NXnA9UNHYM0hk5WQod2OcWwbFRK5BnII4GuQh8NbcyHzMqse5bI3i4vwkZBdbwiMiNZc79jHR%2FwcZFjB4kXgyAkdl0rPM5U%2B7BePl5ZwqkC3qEIKsZpgKRO4KsSkQIB8vdrUGJZ1y575eIwRp5pxMbIs2daKzVNME5HS5S83Jn%2BrA0pXdAFXDc2mmNC7RpX5EZG7qZvb5YkWW15cR%2BuchKrx2c%2B0CHvcAvmITYmR9MsEdLdOACztT%2Bl4dI2AlSZbYeRBKqfUmquGpGpVTKMncaG4aeLz8%2Fy6resff%2BdR%2Bp31cnWK0m4GPFGahHCPJCOQeFUQjfpn9cSn6SiYNWmOAgp90wG40REJ0x%2Bn6SuHwFXA6bY4PYlkXsWt2QmBKSgiHBAs9r34XISy%2FRh16pA3qGDxFLi74GDcD9y0kAOI5gVPrhfj9%2F68yPgEOJdzA5IMVrcHYS%2FPBfFnQyF5Jpk6XTMt09MnBp7AITUHBoTgDEqPcXQ9xS7Insn2pl8MxpF58h4S5WCp5MN2Cd7QCuJLprQK6SCUxe2Isb%2F8f%2FgW%2FiWM7AMZt%2FrIiwVMCVEoKns11tI9B53%2FMMVcNgb2rBC1rUR8oBl7bo0jRfwMIWd5cQGOqUBPGuB7MW9HzkUUoQHR%2BpoBGrFtewEhotpvPcHH1HFrDzMPexOUZdy%2FS9l2%2BEOpuxFpAlwSyhnVuuE563yiyXHBFt6BTwzcw7As1dSdb0s2AJWEufzbY0KsIwpg8pUStveWEJw9HfZvr6p9urzafAdOpUuzaiWwKooEmlOIUycSrGU2b3p6I7ulM2ryIacJoWakNA87PARN3aeX%2BFDW6RYGm7F9sCi&X-Amz-Signature=78b46d8adf40167292c033962fc1b24d845e589714e58719928ba04d06de5f67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5OQJJNW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgB0ID7IaYGHaRU8%2BXvd15sM%2BwLpDKvmxjOq5jwYHjsAIgSAud7Ya5dyFiC%2Fp5KZ%2F0KWhFJgtpWYM4Qe25yjHejDUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsrjgummNhoTQPFqircA2QaGNAnP1xpgx%2F%2FgiuzKxgM8NXnA9UNHYM0hk5WQod2OcWwbFRK5BnII4GuQh8NbcyHzMqse5bI3i4vwkZBdbwiMiNZc79jHR%2FwcZFjB4kXgyAkdl0rPM5U%2B7BePl5ZwqkC3qEIKsZpgKRO4KsSkQIB8vdrUGJZ1y575eIwRp5pxMbIs2daKzVNME5HS5S83Jn%2BrA0pXdAFXDc2mmNC7RpX5EZG7qZvb5YkWW15cR%2BuchKrx2c%2B0CHvcAvmITYmR9MsEdLdOACztT%2Bl4dI2AlSZbYeRBKqfUmquGpGpVTKMncaG4aeLz8%2Fy6resff%2BdR%2Bp31cnWK0m4GPFGahHCPJCOQeFUQjfpn9cSn6SiYNWmOAgp90wG40REJ0x%2Bn6SuHwFXA6bY4PYlkXsWt2QmBKSgiHBAs9r34XISy%2FRh16pA3qGDxFLi74GDcD9y0kAOI5gVPrhfj9%2F68yPgEOJdzA5IMVrcHYS%2FPBfFnQyF5Jpk6XTMt09MnBp7AITUHBoTgDEqPcXQ9xS7Insn2pl8MxpF58h4S5WCp5MN2Cd7QCuJLprQK6SCUxe2Isb%2F8f%2FgW%2FiWM7AMZt%2FrIiwVMCVEoKns11tI9B53%2FMMVcNgb2rBC1rUR8oBl7bo0jRfwMIWd5cQGOqUBPGuB7MW9HzkUUoQHR%2BpoBGrFtewEhotpvPcHH1HFrDzMPexOUZdy%2FS9l2%2BEOpuxFpAlwSyhnVuuE563yiyXHBFt6BTwzcw7As1dSdb0s2AJWEufzbY0KsIwpg8pUStveWEJw9HfZvr6p9urzafAdOpUuzaiWwKooEmlOIUycSrGU2b3p6I7ulM2ryIacJoWakNA87PARN3aeX%2BFDW6RYGm7F9sCi&X-Amz-Signature=9644b41a7e4449af19529e615a2960459dea8dc6e6bd6f7336461acc8ecca3cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5OQJJNW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgB0ID7IaYGHaRU8%2BXvd15sM%2BwLpDKvmxjOq5jwYHjsAIgSAud7Ya5dyFiC%2Fp5KZ%2F0KWhFJgtpWYM4Qe25yjHejDUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsrjgummNhoTQPFqircA2QaGNAnP1xpgx%2F%2FgiuzKxgM8NXnA9UNHYM0hk5WQod2OcWwbFRK5BnII4GuQh8NbcyHzMqse5bI3i4vwkZBdbwiMiNZc79jHR%2FwcZFjB4kXgyAkdl0rPM5U%2B7BePl5ZwqkC3qEIKsZpgKRO4KsSkQIB8vdrUGJZ1y575eIwRp5pxMbIs2daKzVNME5HS5S83Jn%2BrA0pXdAFXDc2mmNC7RpX5EZG7qZvb5YkWW15cR%2BuchKrx2c%2B0CHvcAvmITYmR9MsEdLdOACztT%2Bl4dI2AlSZbYeRBKqfUmquGpGpVTKMncaG4aeLz8%2Fy6resff%2BdR%2Bp31cnWK0m4GPFGahHCPJCOQeFUQjfpn9cSn6SiYNWmOAgp90wG40REJ0x%2Bn6SuHwFXA6bY4PYlkXsWt2QmBKSgiHBAs9r34XISy%2FRh16pA3qGDxFLi74GDcD9y0kAOI5gVPrhfj9%2F68yPgEOJdzA5IMVrcHYS%2FPBfFnQyF5Jpk6XTMt09MnBp7AITUHBoTgDEqPcXQ9xS7Insn2pl8MxpF58h4S5WCp5MN2Cd7QCuJLprQK6SCUxe2Isb%2F8f%2FgW%2FiWM7AMZt%2FrIiwVMCVEoKns11tI9B53%2FMMVcNgb2rBC1rUR8oBl7bo0jRfwMIWd5cQGOqUBPGuB7MW9HzkUUoQHR%2BpoBGrFtewEhotpvPcHH1HFrDzMPexOUZdy%2FS9l2%2BEOpuxFpAlwSyhnVuuE563yiyXHBFt6BTwzcw7As1dSdb0s2AJWEufzbY0KsIwpg8pUStveWEJw9HfZvr6p9urzafAdOpUuzaiWwKooEmlOIUycSrGU2b3p6I7ulM2ryIacJoWakNA87PARN3aeX%2BFDW6RYGm7F9sCi&X-Amz-Signature=30b6f23d9387451c25066dc6ab7d2e9b7e69835ae03ac23157f23a4d202cf412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5OQJJNW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgB0ID7IaYGHaRU8%2BXvd15sM%2BwLpDKvmxjOq5jwYHjsAIgSAud7Ya5dyFiC%2Fp5KZ%2F0KWhFJgtpWYM4Qe25yjHejDUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsrjgummNhoTQPFqircA2QaGNAnP1xpgx%2F%2FgiuzKxgM8NXnA9UNHYM0hk5WQod2OcWwbFRK5BnII4GuQh8NbcyHzMqse5bI3i4vwkZBdbwiMiNZc79jHR%2FwcZFjB4kXgyAkdl0rPM5U%2B7BePl5ZwqkC3qEIKsZpgKRO4KsSkQIB8vdrUGJZ1y575eIwRp5pxMbIs2daKzVNME5HS5S83Jn%2BrA0pXdAFXDc2mmNC7RpX5EZG7qZvb5YkWW15cR%2BuchKrx2c%2B0CHvcAvmITYmR9MsEdLdOACztT%2Bl4dI2AlSZbYeRBKqfUmquGpGpVTKMncaG4aeLz8%2Fy6resff%2BdR%2Bp31cnWK0m4GPFGahHCPJCOQeFUQjfpn9cSn6SiYNWmOAgp90wG40REJ0x%2Bn6SuHwFXA6bY4PYlkXsWt2QmBKSgiHBAs9r34XISy%2FRh16pA3qGDxFLi74GDcD9y0kAOI5gVPrhfj9%2F68yPgEOJdzA5IMVrcHYS%2FPBfFnQyF5Jpk6XTMt09MnBp7AITUHBoTgDEqPcXQ9xS7Insn2pl8MxpF58h4S5WCp5MN2Cd7QCuJLprQK6SCUxe2Isb%2F8f%2FgW%2FiWM7AMZt%2FrIiwVMCVEoKns11tI9B53%2FMMVcNgb2rBC1rUR8oBl7bo0jRfwMIWd5cQGOqUBPGuB7MW9HzkUUoQHR%2BpoBGrFtewEhotpvPcHH1HFrDzMPexOUZdy%2FS9l2%2BEOpuxFpAlwSyhnVuuE563yiyXHBFt6BTwzcw7As1dSdb0s2AJWEufzbY0KsIwpg8pUStveWEJw9HfZvr6p9urzafAdOpUuzaiWwKooEmlOIUycSrGU2b3p6I7ulM2ryIacJoWakNA87PARN3aeX%2BFDW6RYGm7F9sCi&X-Amz-Signature=517605616cd6985e14fb549a006485d6a5ca09ffe27333fb4eb5677af2e6e978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5OQJJNW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgB0ID7IaYGHaRU8%2BXvd15sM%2BwLpDKvmxjOq5jwYHjsAIgSAud7Ya5dyFiC%2Fp5KZ%2F0KWhFJgtpWYM4Qe25yjHejDUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsrjgummNhoTQPFqircA2QaGNAnP1xpgx%2F%2FgiuzKxgM8NXnA9UNHYM0hk5WQod2OcWwbFRK5BnII4GuQh8NbcyHzMqse5bI3i4vwkZBdbwiMiNZc79jHR%2FwcZFjB4kXgyAkdl0rPM5U%2B7BePl5ZwqkC3qEIKsZpgKRO4KsSkQIB8vdrUGJZ1y575eIwRp5pxMbIs2daKzVNME5HS5S83Jn%2BrA0pXdAFXDc2mmNC7RpX5EZG7qZvb5YkWW15cR%2BuchKrx2c%2B0CHvcAvmITYmR9MsEdLdOACztT%2Bl4dI2AlSZbYeRBKqfUmquGpGpVTKMncaG4aeLz8%2Fy6resff%2BdR%2Bp31cnWK0m4GPFGahHCPJCOQeFUQjfpn9cSn6SiYNWmOAgp90wG40REJ0x%2Bn6SuHwFXA6bY4PYlkXsWt2QmBKSgiHBAs9r34XISy%2FRh16pA3qGDxFLi74GDcD9y0kAOI5gVPrhfj9%2F68yPgEOJdzA5IMVrcHYS%2FPBfFnQyF5Jpk6XTMt09MnBp7AITUHBoTgDEqPcXQ9xS7Insn2pl8MxpF58h4S5WCp5MN2Cd7QCuJLprQK6SCUxe2Isb%2F8f%2FgW%2FiWM7AMZt%2FrIiwVMCVEoKns11tI9B53%2FMMVcNgb2rBC1rUR8oBl7bo0jRfwMIWd5cQGOqUBPGuB7MW9HzkUUoQHR%2BpoBGrFtewEhotpvPcHH1HFrDzMPexOUZdy%2FS9l2%2BEOpuxFpAlwSyhnVuuE563yiyXHBFt6BTwzcw7As1dSdb0s2AJWEufzbY0KsIwpg8pUStveWEJw9HfZvr6p9urzafAdOpUuzaiWwKooEmlOIUycSrGU2b3p6I7ulM2ryIacJoWakNA87PARN3aeX%2BFDW6RYGm7F9sCi&X-Amz-Signature=be840639a508d482482bac536a30a029e205388b420072a7ba3a356d2cca8831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5OQJJNW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgB0ID7IaYGHaRU8%2BXvd15sM%2BwLpDKvmxjOq5jwYHjsAIgSAud7Ya5dyFiC%2Fp5KZ%2F0KWhFJgtpWYM4Qe25yjHejDUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsrjgummNhoTQPFqircA2QaGNAnP1xpgx%2F%2FgiuzKxgM8NXnA9UNHYM0hk5WQod2OcWwbFRK5BnII4GuQh8NbcyHzMqse5bI3i4vwkZBdbwiMiNZc79jHR%2FwcZFjB4kXgyAkdl0rPM5U%2B7BePl5ZwqkC3qEIKsZpgKRO4KsSkQIB8vdrUGJZ1y575eIwRp5pxMbIs2daKzVNME5HS5S83Jn%2BrA0pXdAFXDc2mmNC7RpX5EZG7qZvb5YkWW15cR%2BuchKrx2c%2B0CHvcAvmITYmR9MsEdLdOACztT%2Bl4dI2AlSZbYeRBKqfUmquGpGpVTKMncaG4aeLz8%2Fy6resff%2BdR%2Bp31cnWK0m4GPFGahHCPJCOQeFUQjfpn9cSn6SiYNWmOAgp90wG40REJ0x%2Bn6SuHwFXA6bY4PYlkXsWt2QmBKSgiHBAs9r34XISy%2FRh16pA3qGDxFLi74GDcD9y0kAOI5gVPrhfj9%2F68yPgEOJdzA5IMVrcHYS%2FPBfFnQyF5Jpk6XTMt09MnBp7AITUHBoTgDEqPcXQ9xS7Insn2pl8MxpF58h4S5WCp5MN2Cd7QCuJLprQK6SCUxe2Isb%2F8f%2FgW%2FiWM7AMZt%2FrIiwVMCVEoKns11tI9B53%2FMMVcNgb2rBC1rUR8oBl7bo0jRfwMIWd5cQGOqUBPGuB7MW9HzkUUoQHR%2BpoBGrFtewEhotpvPcHH1HFrDzMPexOUZdy%2FS9l2%2BEOpuxFpAlwSyhnVuuE563yiyXHBFt6BTwzcw7As1dSdb0s2AJWEufzbY0KsIwpg8pUStveWEJw9HfZvr6p9urzafAdOpUuzaiWwKooEmlOIUycSrGU2b3p6I7ulM2ryIacJoWakNA87PARN3aeX%2BFDW6RYGm7F9sCi&X-Amz-Signature=3dcbca139d9a955b0a7274090cbfdf40e22f4997564d8ef5a28ab6a1293b6187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5OQJJNW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgB0ID7IaYGHaRU8%2BXvd15sM%2BwLpDKvmxjOq5jwYHjsAIgSAud7Ya5dyFiC%2Fp5KZ%2F0KWhFJgtpWYM4Qe25yjHejDUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsrjgummNhoTQPFqircA2QaGNAnP1xpgx%2F%2FgiuzKxgM8NXnA9UNHYM0hk5WQod2OcWwbFRK5BnII4GuQh8NbcyHzMqse5bI3i4vwkZBdbwiMiNZc79jHR%2FwcZFjB4kXgyAkdl0rPM5U%2B7BePl5ZwqkC3qEIKsZpgKRO4KsSkQIB8vdrUGJZ1y575eIwRp5pxMbIs2daKzVNME5HS5S83Jn%2BrA0pXdAFXDc2mmNC7RpX5EZG7qZvb5YkWW15cR%2BuchKrx2c%2B0CHvcAvmITYmR9MsEdLdOACztT%2Bl4dI2AlSZbYeRBKqfUmquGpGpVTKMncaG4aeLz8%2Fy6resff%2BdR%2Bp31cnWK0m4GPFGahHCPJCOQeFUQjfpn9cSn6SiYNWmOAgp90wG40REJ0x%2Bn6SuHwFXA6bY4PYlkXsWt2QmBKSgiHBAs9r34XISy%2FRh16pA3qGDxFLi74GDcD9y0kAOI5gVPrhfj9%2F68yPgEOJdzA5IMVrcHYS%2FPBfFnQyF5Jpk6XTMt09MnBp7AITUHBoTgDEqPcXQ9xS7Insn2pl8MxpF58h4S5WCp5MN2Cd7QCuJLprQK6SCUxe2Isb%2F8f%2FgW%2FiWM7AMZt%2FrIiwVMCVEoKns11tI9B53%2FMMVcNgb2rBC1rUR8oBl7bo0jRfwMIWd5cQGOqUBPGuB7MW9HzkUUoQHR%2BpoBGrFtewEhotpvPcHH1HFrDzMPexOUZdy%2FS9l2%2BEOpuxFpAlwSyhnVuuE563yiyXHBFt6BTwzcw7As1dSdb0s2AJWEufzbY0KsIwpg8pUStveWEJw9HfZvr6p9urzafAdOpUuzaiWwKooEmlOIUycSrGU2b3p6I7ulM2ryIacJoWakNA87PARN3aeX%2BFDW6RYGm7F9sCi&X-Amz-Signature=cbbb5aec9c3bcdf181ba5af4d8253be7d140f8181f99767ecd051d32a6742a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5OQJJNW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgB0ID7IaYGHaRU8%2BXvd15sM%2BwLpDKvmxjOq5jwYHjsAIgSAud7Ya5dyFiC%2Fp5KZ%2F0KWhFJgtpWYM4Qe25yjHejDUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsrjgummNhoTQPFqircA2QaGNAnP1xpgx%2F%2FgiuzKxgM8NXnA9UNHYM0hk5WQod2OcWwbFRK5BnII4GuQh8NbcyHzMqse5bI3i4vwkZBdbwiMiNZc79jHR%2FwcZFjB4kXgyAkdl0rPM5U%2B7BePl5ZwqkC3qEIKsZpgKRO4KsSkQIB8vdrUGJZ1y575eIwRp5pxMbIs2daKzVNME5HS5S83Jn%2BrA0pXdAFXDc2mmNC7RpX5EZG7qZvb5YkWW15cR%2BuchKrx2c%2B0CHvcAvmITYmR9MsEdLdOACztT%2Bl4dI2AlSZbYeRBKqfUmquGpGpVTKMncaG4aeLz8%2Fy6resff%2BdR%2Bp31cnWK0m4GPFGahHCPJCOQeFUQjfpn9cSn6SiYNWmOAgp90wG40REJ0x%2Bn6SuHwFXA6bY4PYlkXsWt2QmBKSgiHBAs9r34XISy%2FRh16pA3qGDxFLi74GDcD9y0kAOI5gVPrhfj9%2F68yPgEOJdzA5IMVrcHYS%2FPBfFnQyF5Jpk6XTMt09MnBp7AITUHBoTgDEqPcXQ9xS7Insn2pl8MxpF58h4S5WCp5MN2Cd7QCuJLprQK6SCUxe2Isb%2F8f%2FgW%2FiWM7AMZt%2FrIiwVMCVEoKns11tI9B53%2FMMVcNgb2rBC1rUR8oBl7bo0jRfwMIWd5cQGOqUBPGuB7MW9HzkUUoQHR%2BpoBGrFtewEhotpvPcHH1HFrDzMPexOUZdy%2FS9l2%2BEOpuxFpAlwSyhnVuuE563yiyXHBFt6BTwzcw7As1dSdb0s2AJWEufzbY0KsIwpg8pUStveWEJw9HfZvr6p9urzafAdOpUuzaiWwKooEmlOIUycSrGU2b3p6I7ulM2ryIacJoWakNA87PARN3aeX%2BFDW6RYGm7F9sCi&X-Amz-Signature=53cdc92d1460e1ae91b6f3c746b5ccfb6a922b17ffcc11d71c32ba8fb498223b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5OQJJNW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgB0ID7IaYGHaRU8%2BXvd15sM%2BwLpDKvmxjOq5jwYHjsAIgSAud7Ya5dyFiC%2Fp5KZ%2F0KWhFJgtpWYM4Qe25yjHejDUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsrjgummNhoTQPFqircA2QaGNAnP1xpgx%2F%2FgiuzKxgM8NXnA9UNHYM0hk5WQod2OcWwbFRK5BnII4GuQh8NbcyHzMqse5bI3i4vwkZBdbwiMiNZc79jHR%2FwcZFjB4kXgyAkdl0rPM5U%2B7BePl5ZwqkC3qEIKsZpgKRO4KsSkQIB8vdrUGJZ1y575eIwRp5pxMbIs2daKzVNME5HS5S83Jn%2BrA0pXdAFXDc2mmNC7RpX5EZG7qZvb5YkWW15cR%2BuchKrx2c%2B0CHvcAvmITYmR9MsEdLdOACztT%2Bl4dI2AlSZbYeRBKqfUmquGpGpVTKMncaG4aeLz8%2Fy6resff%2BdR%2Bp31cnWK0m4GPFGahHCPJCOQeFUQjfpn9cSn6SiYNWmOAgp90wG40REJ0x%2Bn6SuHwFXA6bY4PYlkXsWt2QmBKSgiHBAs9r34XISy%2FRh16pA3qGDxFLi74GDcD9y0kAOI5gVPrhfj9%2F68yPgEOJdzA5IMVrcHYS%2FPBfFnQyF5Jpk6XTMt09MnBp7AITUHBoTgDEqPcXQ9xS7Insn2pl8MxpF58h4S5WCp5MN2Cd7QCuJLprQK6SCUxe2Isb%2F8f%2FgW%2FiWM7AMZt%2FrIiwVMCVEoKns11tI9B53%2FMMVcNgb2rBC1rUR8oBl7bo0jRfwMIWd5cQGOqUBPGuB7MW9HzkUUoQHR%2BpoBGrFtewEhotpvPcHH1HFrDzMPexOUZdy%2FS9l2%2BEOpuxFpAlwSyhnVuuE563yiyXHBFt6BTwzcw7As1dSdb0s2AJWEufzbY0KsIwpg8pUStveWEJw9HfZvr6p9urzafAdOpUuzaiWwKooEmlOIUycSrGU2b3p6I7ulM2ryIacJoWakNA87PARN3aeX%2BFDW6RYGm7F9sCi&X-Amz-Signature=1cb699cb45a26afc5a700fad07d10f9c2894ea9dc64ae63d1f073b42969d94af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5OQJJNW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgB0ID7IaYGHaRU8%2BXvd15sM%2BwLpDKvmxjOq5jwYHjsAIgSAud7Ya5dyFiC%2Fp5KZ%2F0KWhFJgtpWYM4Qe25yjHejDUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsrjgummNhoTQPFqircA2QaGNAnP1xpgx%2F%2FgiuzKxgM8NXnA9UNHYM0hk5WQod2OcWwbFRK5BnII4GuQh8NbcyHzMqse5bI3i4vwkZBdbwiMiNZc79jHR%2FwcZFjB4kXgyAkdl0rPM5U%2B7BePl5ZwqkC3qEIKsZpgKRO4KsSkQIB8vdrUGJZ1y575eIwRp5pxMbIs2daKzVNME5HS5S83Jn%2BrA0pXdAFXDc2mmNC7RpX5EZG7qZvb5YkWW15cR%2BuchKrx2c%2B0CHvcAvmITYmR9MsEdLdOACztT%2Bl4dI2AlSZbYeRBKqfUmquGpGpVTKMncaG4aeLz8%2Fy6resff%2BdR%2Bp31cnWK0m4GPFGahHCPJCOQeFUQjfpn9cSn6SiYNWmOAgp90wG40REJ0x%2Bn6SuHwFXA6bY4PYlkXsWt2QmBKSgiHBAs9r34XISy%2FRh16pA3qGDxFLi74GDcD9y0kAOI5gVPrhfj9%2F68yPgEOJdzA5IMVrcHYS%2FPBfFnQyF5Jpk6XTMt09MnBp7AITUHBoTgDEqPcXQ9xS7Insn2pl8MxpF58h4S5WCp5MN2Cd7QCuJLprQK6SCUxe2Isb%2F8f%2FgW%2FiWM7AMZt%2FrIiwVMCVEoKns11tI9B53%2FMMVcNgb2rBC1rUR8oBl7bo0jRfwMIWd5cQGOqUBPGuB7MW9HzkUUoQHR%2BpoBGrFtewEhotpvPcHH1HFrDzMPexOUZdy%2FS9l2%2BEOpuxFpAlwSyhnVuuE563yiyXHBFt6BTwzcw7As1dSdb0s2AJWEufzbY0KsIwpg8pUStveWEJw9HfZvr6p9urzafAdOpUuzaiWwKooEmlOIUycSrGU2b3p6I7ulM2ryIacJoWakNA87PARN3aeX%2BFDW6RYGm7F9sCi&X-Amz-Signature=517605616cd6985e14fb549a006485d6a5ca09ffe27333fb4eb5677af2e6e978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
