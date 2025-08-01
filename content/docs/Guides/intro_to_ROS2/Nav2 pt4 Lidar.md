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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5VNCOD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFNd26dlA3TbjW0FVz8as4RiWehm1KZcZ0iiJgmBQBPAIgaQbo2prZQUE%2BO0NCEcd4PbFQ5i%2BLVVsWkw8D3Se6GQsqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCa3fkms%2B%2BQf6QJRhyrcA0AhWQmO42Y7yUmQ6Qvig3vx7Jzm0USzzHW%2Bcgm3Hh5aXcaSuczZfTgisZ7qqqMgvBO2cSkAHP5aY8GH19C3rLhBNrIAstLubt0%2BXJkJAVSUj%2FG2DJ5%2BN7YyRpOyVTIraBDyhBVc3lchTKUo1hHzcZN3jeunnR%2BowWFz2h3TDoW91ko4RC%2BANr0WCxM0TI2vmt76%2F4TfdUJFm5NSzt1rrZwQ8fgI4FwbdzSDScjsdBZ7bHtMfpEYNoGJ%2Fv5DX0EfQvddPMn7YqcrUq1ZDWSVbh91bIIIWObZYvKcJjfEJkx57FECOiBIjpDWA%2F6180IXWS1p4UP2zeBytOMY1UYZwCiwXBSuTOq%2B5eDF8y37JsshjUetSTMKxqUlOsitZePM4CjljrIHmHrY5w1%2FLqqw7viykKL1A31Ohy2Qnd%2BCsqLUOYKJ72GbiiuoJzBHYuIeslU6RfPFYQZ00klnJl1XHR3PxZa1Y2XDge47tXHDje84tUqvWE7QF2aMwXW%2BMpnva8szfRS%2BBdXaMPi1zWkeyWeElIUNP2%2FmdE0zBpTFY99h2gL2X%2B1o6fSRlVNsbzsKkwR9gV4cnfDUL5iHHppsuV4XHDqx1k69FL9gWwibCmeSk%2Br0iBfJPPxKkNz0MND6s8QGOqUB%2FRwefUafYM30Yelm56AGEWdyufEApTy%2BAV1rAfP%2Bahw6YzhdenQgXiymj7C8hAx9%2BfbUQfxJN1zCX4I89irJ3nk7dlQv7muw3MSvEi%2BsQYRSHEKPJxueuOUm5Sas9ar6T1l9xwGIXCzKdJnzgtUpkZUQYNKeHc3wqg9jiXJzy9Z9q%2BbnYeItW6Xk2JhQnmYipYgwi1V8MQU4fmvZlmJ7Ree9QXmJ&X-Amz-Signature=ff0984f725ff419b345f8e5a1d5c8a4f69bd5184937126ce2c20fd4e7907029b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5VNCOD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFNd26dlA3TbjW0FVz8as4RiWehm1KZcZ0iiJgmBQBPAIgaQbo2prZQUE%2BO0NCEcd4PbFQ5i%2BLVVsWkw8D3Se6GQsqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCa3fkms%2B%2BQf6QJRhyrcA0AhWQmO42Y7yUmQ6Qvig3vx7Jzm0USzzHW%2Bcgm3Hh5aXcaSuczZfTgisZ7qqqMgvBO2cSkAHP5aY8GH19C3rLhBNrIAstLubt0%2BXJkJAVSUj%2FG2DJ5%2BN7YyRpOyVTIraBDyhBVc3lchTKUo1hHzcZN3jeunnR%2BowWFz2h3TDoW91ko4RC%2BANr0WCxM0TI2vmt76%2F4TfdUJFm5NSzt1rrZwQ8fgI4FwbdzSDScjsdBZ7bHtMfpEYNoGJ%2Fv5DX0EfQvddPMn7YqcrUq1ZDWSVbh91bIIIWObZYvKcJjfEJkx57FECOiBIjpDWA%2F6180IXWS1p4UP2zeBytOMY1UYZwCiwXBSuTOq%2B5eDF8y37JsshjUetSTMKxqUlOsitZePM4CjljrIHmHrY5w1%2FLqqw7viykKL1A31Ohy2Qnd%2BCsqLUOYKJ72GbiiuoJzBHYuIeslU6RfPFYQZ00klnJl1XHR3PxZa1Y2XDge47tXHDje84tUqvWE7QF2aMwXW%2BMpnva8szfRS%2BBdXaMPi1zWkeyWeElIUNP2%2FmdE0zBpTFY99h2gL2X%2B1o6fSRlVNsbzsKkwR9gV4cnfDUL5iHHppsuV4XHDqx1k69FL9gWwibCmeSk%2Br0iBfJPPxKkNz0MND6s8QGOqUB%2FRwefUafYM30Yelm56AGEWdyufEApTy%2BAV1rAfP%2Bahw6YzhdenQgXiymj7C8hAx9%2BfbUQfxJN1zCX4I89irJ3nk7dlQv7muw3MSvEi%2BsQYRSHEKPJxueuOUm5Sas9ar6T1l9xwGIXCzKdJnzgtUpkZUQYNKeHc3wqg9jiXJzy9Z9q%2BbnYeItW6Xk2JhQnmYipYgwi1V8MQU4fmvZlmJ7Ree9QXmJ&X-Amz-Signature=f551c1b75e2e198f60b65ab4178870f372292f98a3c4f4e0adccaee1c656e30a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5VNCOD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFNd26dlA3TbjW0FVz8as4RiWehm1KZcZ0iiJgmBQBPAIgaQbo2prZQUE%2BO0NCEcd4PbFQ5i%2BLVVsWkw8D3Se6GQsqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCa3fkms%2B%2BQf6QJRhyrcA0AhWQmO42Y7yUmQ6Qvig3vx7Jzm0USzzHW%2Bcgm3Hh5aXcaSuczZfTgisZ7qqqMgvBO2cSkAHP5aY8GH19C3rLhBNrIAstLubt0%2BXJkJAVSUj%2FG2DJ5%2BN7YyRpOyVTIraBDyhBVc3lchTKUo1hHzcZN3jeunnR%2BowWFz2h3TDoW91ko4RC%2BANr0WCxM0TI2vmt76%2F4TfdUJFm5NSzt1rrZwQ8fgI4FwbdzSDScjsdBZ7bHtMfpEYNoGJ%2Fv5DX0EfQvddPMn7YqcrUq1ZDWSVbh91bIIIWObZYvKcJjfEJkx57FECOiBIjpDWA%2F6180IXWS1p4UP2zeBytOMY1UYZwCiwXBSuTOq%2B5eDF8y37JsshjUetSTMKxqUlOsitZePM4CjljrIHmHrY5w1%2FLqqw7viykKL1A31Ohy2Qnd%2BCsqLUOYKJ72GbiiuoJzBHYuIeslU6RfPFYQZ00klnJl1XHR3PxZa1Y2XDge47tXHDje84tUqvWE7QF2aMwXW%2BMpnva8szfRS%2BBdXaMPi1zWkeyWeElIUNP2%2FmdE0zBpTFY99h2gL2X%2B1o6fSRlVNsbzsKkwR9gV4cnfDUL5iHHppsuV4XHDqx1k69FL9gWwibCmeSk%2Br0iBfJPPxKkNz0MND6s8QGOqUB%2FRwefUafYM30Yelm56AGEWdyufEApTy%2BAV1rAfP%2Bahw6YzhdenQgXiymj7C8hAx9%2BfbUQfxJN1zCX4I89irJ3nk7dlQv7muw3MSvEi%2BsQYRSHEKPJxueuOUm5Sas9ar6T1l9xwGIXCzKdJnzgtUpkZUQYNKeHc3wqg9jiXJzy9Z9q%2BbnYeItW6Xk2JhQnmYipYgwi1V8MQU4fmvZlmJ7Ree9QXmJ&X-Amz-Signature=1b29432568ccfa450ee4f39c1c42f1eaffa3fe50f469e76d13d044e849c3f401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5VNCOD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFNd26dlA3TbjW0FVz8as4RiWehm1KZcZ0iiJgmBQBPAIgaQbo2prZQUE%2BO0NCEcd4PbFQ5i%2BLVVsWkw8D3Se6GQsqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCa3fkms%2B%2BQf6QJRhyrcA0AhWQmO42Y7yUmQ6Qvig3vx7Jzm0USzzHW%2Bcgm3Hh5aXcaSuczZfTgisZ7qqqMgvBO2cSkAHP5aY8GH19C3rLhBNrIAstLubt0%2BXJkJAVSUj%2FG2DJ5%2BN7YyRpOyVTIraBDyhBVc3lchTKUo1hHzcZN3jeunnR%2BowWFz2h3TDoW91ko4RC%2BANr0WCxM0TI2vmt76%2F4TfdUJFm5NSzt1rrZwQ8fgI4FwbdzSDScjsdBZ7bHtMfpEYNoGJ%2Fv5DX0EfQvddPMn7YqcrUq1ZDWSVbh91bIIIWObZYvKcJjfEJkx57FECOiBIjpDWA%2F6180IXWS1p4UP2zeBytOMY1UYZwCiwXBSuTOq%2B5eDF8y37JsshjUetSTMKxqUlOsitZePM4CjljrIHmHrY5w1%2FLqqw7viykKL1A31Ohy2Qnd%2BCsqLUOYKJ72GbiiuoJzBHYuIeslU6RfPFYQZ00klnJl1XHR3PxZa1Y2XDge47tXHDje84tUqvWE7QF2aMwXW%2BMpnva8szfRS%2BBdXaMPi1zWkeyWeElIUNP2%2FmdE0zBpTFY99h2gL2X%2B1o6fSRlVNsbzsKkwR9gV4cnfDUL5iHHppsuV4XHDqx1k69FL9gWwibCmeSk%2Br0iBfJPPxKkNz0MND6s8QGOqUB%2FRwefUafYM30Yelm56AGEWdyufEApTy%2BAV1rAfP%2Bahw6YzhdenQgXiymj7C8hAx9%2BfbUQfxJN1zCX4I89irJ3nk7dlQv7muw3MSvEi%2BsQYRSHEKPJxueuOUm5Sas9ar6T1l9xwGIXCzKdJnzgtUpkZUQYNKeHc3wqg9jiXJzy9Z9q%2BbnYeItW6Xk2JhQnmYipYgwi1V8MQU4fmvZlmJ7Ree9QXmJ&X-Amz-Signature=7edc454151f1113c2cd85aed44e4595760c9ace758d3df4211f06fe174f4e2f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5VNCOD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFNd26dlA3TbjW0FVz8as4RiWehm1KZcZ0iiJgmBQBPAIgaQbo2prZQUE%2BO0NCEcd4PbFQ5i%2BLVVsWkw8D3Se6GQsqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCa3fkms%2B%2BQf6QJRhyrcA0AhWQmO42Y7yUmQ6Qvig3vx7Jzm0USzzHW%2Bcgm3Hh5aXcaSuczZfTgisZ7qqqMgvBO2cSkAHP5aY8GH19C3rLhBNrIAstLubt0%2BXJkJAVSUj%2FG2DJ5%2BN7YyRpOyVTIraBDyhBVc3lchTKUo1hHzcZN3jeunnR%2BowWFz2h3TDoW91ko4RC%2BANr0WCxM0TI2vmt76%2F4TfdUJFm5NSzt1rrZwQ8fgI4FwbdzSDScjsdBZ7bHtMfpEYNoGJ%2Fv5DX0EfQvddPMn7YqcrUq1ZDWSVbh91bIIIWObZYvKcJjfEJkx57FECOiBIjpDWA%2F6180IXWS1p4UP2zeBytOMY1UYZwCiwXBSuTOq%2B5eDF8y37JsshjUetSTMKxqUlOsitZePM4CjljrIHmHrY5w1%2FLqqw7viykKL1A31Ohy2Qnd%2BCsqLUOYKJ72GbiiuoJzBHYuIeslU6RfPFYQZ00klnJl1XHR3PxZa1Y2XDge47tXHDje84tUqvWE7QF2aMwXW%2BMpnva8szfRS%2BBdXaMPi1zWkeyWeElIUNP2%2FmdE0zBpTFY99h2gL2X%2B1o6fSRlVNsbzsKkwR9gV4cnfDUL5iHHppsuV4XHDqx1k69FL9gWwibCmeSk%2Br0iBfJPPxKkNz0MND6s8QGOqUB%2FRwefUafYM30Yelm56AGEWdyufEApTy%2BAV1rAfP%2Bahw6YzhdenQgXiymj7C8hAx9%2BfbUQfxJN1zCX4I89irJ3nk7dlQv7muw3MSvEi%2BsQYRSHEKPJxueuOUm5Sas9ar6T1l9xwGIXCzKdJnzgtUpkZUQYNKeHc3wqg9jiXJzy9Z9q%2BbnYeItW6Xk2JhQnmYipYgwi1V8MQU4fmvZlmJ7Ree9QXmJ&X-Amz-Signature=83dde9cadd486aa1805285d029b35e4402fd0552102dc8f36bf9322bac965700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5VNCOD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFNd26dlA3TbjW0FVz8as4RiWehm1KZcZ0iiJgmBQBPAIgaQbo2prZQUE%2BO0NCEcd4PbFQ5i%2BLVVsWkw8D3Se6GQsqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCa3fkms%2B%2BQf6QJRhyrcA0AhWQmO42Y7yUmQ6Qvig3vx7Jzm0USzzHW%2Bcgm3Hh5aXcaSuczZfTgisZ7qqqMgvBO2cSkAHP5aY8GH19C3rLhBNrIAstLubt0%2BXJkJAVSUj%2FG2DJ5%2BN7YyRpOyVTIraBDyhBVc3lchTKUo1hHzcZN3jeunnR%2BowWFz2h3TDoW91ko4RC%2BANr0WCxM0TI2vmt76%2F4TfdUJFm5NSzt1rrZwQ8fgI4FwbdzSDScjsdBZ7bHtMfpEYNoGJ%2Fv5DX0EfQvddPMn7YqcrUq1ZDWSVbh91bIIIWObZYvKcJjfEJkx57FECOiBIjpDWA%2F6180IXWS1p4UP2zeBytOMY1UYZwCiwXBSuTOq%2B5eDF8y37JsshjUetSTMKxqUlOsitZePM4CjljrIHmHrY5w1%2FLqqw7viykKL1A31Ohy2Qnd%2BCsqLUOYKJ72GbiiuoJzBHYuIeslU6RfPFYQZ00klnJl1XHR3PxZa1Y2XDge47tXHDje84tUqvWE7QF2aMwXW%2BMpnva8szfRS%2BBdXaMPi1zWkeyWeElIUNP2%2FmdE0zBpTFY99h2gL2X%2B1o6fSRlVNsbzsKkwR9gV4cnfDUL5iHHppsuV4XHDqx1k69FL9gWwibCmeSk%2Br0iBfJPPxKkNz0MND6s8QGOqUB%2FRwefUafYM30Yelm56AGEWdyufEApTy%2BAV1rAfP%2Bahw6YzhdenQgXiymj7C8hAx9%2BfbUQfxJN1zCX4I89irJ3nk7dlQv7muw3MSvEi%2BsQYRSHEKPJxueuOUm5Sas9ar6T1l9xwGIXCzKdJnzgtUpkZUQYNKeHc3wqg9jiXJzy9Z9q%2BbnYeItW6Xk2JhQnmYipYgwi1V8MQU4fmvZlmJ7Ree9QXmJ&X-Amz-Signature=0950508b609b66556b835e9bc24845513e4846f3bcf4aa6fced0f3eacbdd81d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5VNCOD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFNd26dlA3TbjW0FVz8as4RiWehm1KZcZ0iiJgmBQBPAIgaQbo2prZQUE%2BO0NCEcd4PbFQ5i%2BLVVsWkw8D3Se6GQsqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCa3fkms%2B%2BQf6QJRhyrcA0AhWQmO42Y7yUmQ6Qvig3vx7Jzm0USzzHW%2Bcgm3Hh5aXcaSuczZfTgisZ7qqqMgvBO2cSkAHP5aY8GH19C3rLhBNrIAstLubt0%2BXJkJAVSUj%2FG2DJ5%2BN7YyRpOyVTIraBDyhBVc3lchTKUo1hHzcZN3jeunnR%2BowWFz2h3TDoW91ko4RC%2BANr0WCxM0TI2vmt76%2F4TfdUJFm5NSzt1rrZwQ8fgI4FwbdzSDScjsdBZ7bHtMfpEYNoGJ%2Fv5DX0EfQvddPMn7YqcrUq1ZDWSVbh91bIIIWObZYvKcJjfEJkx57FECOiBIjpDWA%2F6180IXWS1p4UP2zeBytOMY1UYZwCiwXBSuTOq%2B5eDF8y37JsshjUetSTMKxqUlOsitZePM4CjljrIHmHrY5w1%2FLqqw7viykKL1A31Ohy2Qnd%2BCsqLUOYKJ72GbiiuoJzBHYuIeslU6RfPFYQZ00klnJl1XHR3PxZa1Y2XDge47tXHDje84tUqvWE7QF2aMwXW%2BMpnva8szfRS%2BBdXaMPi1zWkeyWeElIUNP2%2FmdE0zBpTFY99h2gL2X%2B1o6fSRlVNsbzsKkwR9gV4cnfDUL5iHHppsuV4XHDqx1k69FL9gWwibCmeSk%2Br0iBfJPPxKkNz0MND6s8QGOqUB%2FRwefUafYM30Yelm56AGEWdyufEApTy%2BAV1rAfP%2Bahw6YzhdenQgXiymj7C8hAx9%2BfbUQfxJN1zCX4I89irJ3nk7dlQv7muw3MSvEi%2BsQYRSHEKPJxueuOUm5Sas9ar6T1l9xwGIXCzKdJnzgtUpkZUQYNKeHc3wqg9jiXJzy9Z9q%2BbnYeItW6Xk2JhQnmYipYgwi1V8MQU4fmvZlmJ7Ree9QXmJ&X-Amz-Signature=80141f04fa01d6b67b8dac141468af31e38da4a6fa34b2a029ffb67d2f0c2478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5VNCOD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFNd26dlA3TbjW0FVz8as4RiWehm1KZcZ0iiJgmBQBPAIgaQbo2prZQUE%2BO0NCEcd4PbFQ5i%2BLVVsWkw8D3Se6GQsqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCa3fkms%2B%2BQf6QJRhyrcA0AhWQmO42Y7yUmQ6Qvig3vx7Jzm0USzzHW%2Bcgm3Hh5aXcaSuczZfTgisZ7qqqMgvBO2cSkAHP5aY8GH19C3rLhBNrIAstLubt0%2BXJkJAVSUj%2FG2DJ5%2BN7YyRpOyVTIraBDyhBVc3lchTKUo1hHzcZN3jeunnR%2BowWFz2h3TDoW91ko4RC%2BANr0WCxM0TI2vmt76%2F4TfdUJFm5NSzt1rrZwQ8fgI4FwbdzSDScjsdBZ7bHtMfpEYNoGJ%2Fv5DX0EfQvddPMn7YqcrUq1ZDWSVbh91bIIIWObZYvKcJjfEJkx57FECOiBIjpDWA%2F6180IXWS1p4UP2zeBytOMY1UYZwCiwXBSuTOq%2B5eDF8y37JsshjUetSTMKxqUlOsitZePM4CjljrIHmHrY5w1%2FLqqw7viykKL1A31Ohy2Qnd%2BCsqLUOYKJ72GbiiuoJzBHYuIeslU6RfPFYQZ00klnJl1XHR3PxZa1Y2XDge47tXHDje84tUqvWE7QF2aMwXW%2BMpnva8szfRS%2BBdXaMPi1zWkeyWeElIUNP2%2FmdE0zBpTFY99h2gL2X%2B1o6fSRlVNsbzsKkwR9gV4cnfDUL5iHHppsuV4XHDqx1k69FL9gWwibCmeSk%2Br0iBfJPPxKkNz0MND6s8QGOqUB%2FRwefUafYM30Yelm56AGEWdyufEApTy%2BAV1rAfP%2Bahw6YzhdenQgXiymj7C8hAx9%2BfbUQfxJN1zCX4I89irJ3nk7dlQv7muw3MSvEi%2BsQYRSHEKPJxueuOUm5Sas9ar6T1l9xwGIXCzKdJnzgtUpkZUQYNKeHc3wqg9jiXJzy9Z9q%2BbnYeItW6Xk2JhQnmYipYgwi1V8MQU4fmvZlmJ7Ree9QXmJ&X-Amz-Signature=87965c3d53d7f3c7c10156a7aa293006980062e00844b2623c35257138f94d98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5VNCOD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFNd26dlA3TbjW0FVz8as4RiWehm1KZcZ0iiJgmBQBPAIgaQbo2prZQUE%2BO0NCEcd4PbFQ5i%2BLVVsWkw8D3Se6GQsqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCa3fkms%2B%2BQf6QJRhyrcA0AhWQmO42Y7yUmQ6Qvig3vx7Jzm0USzzHW%2Bcgm3Hh5aXcaSuczZfTgisZ7qqqMgvBO2cSkAHP5aY8GH19C3rLhBNrIAstLubt0%2BXJkJAVSUj%2FG2DJ5%2BN7YyRpOyVTIraBDyhBVc3lchTKUo1hHzcZN3jeunnR%2BowWFz2h3TDoW91ko4RC%2BANr0WCxM0TI2vmt76%2F4TfdUJFm5NSzt1rrZwQ8fgI4FwbdzSDScjsdBZ7bHtMfpEYNoGJ%2Fv5DX0EfQvddPMn7YqcrUq1ZDWSVbh91bIIIWObZYvKcJjfEJkx57FECOiBIjpDWA%2F6180IXWS1p4UP2zeBytOMY1UYZwCiwXBSuTOq%2B5eDF8y37JsshjUetSTMKxqUlOsitZePM4CjljrIHmHrY5w1%2FLqqw7viykKL1A31Ohy2Qnd%2BCsqLUOYKJ72GbiiuoJzBHYuIeslU6RfPFYQZ00klnJl1XHR3PxZa1Y2XDge47tXHDje84tUqvWE7QF2aMwXW%2BMpnva8szfRS%2BBdXaMPi1zWkeyWeElIUNP2%2FmdE0zBpTFY99h2gL2X%2B1o6fSRlVNsbzsKkwR9gV4cnfDUL5iHHppsuV4XHDqx1k69FL9gWwibCmeSk%2Br0iBfJPPxKkNz0MND6s8QGOqUB%2FRwefUafYM30Yelm56AGEWdyufEApTy%2BAV1rAfP%2Bahw6YzhdenQgXiymj7C8hAx9%2BfbUQfxJN1zCX4I89irJ3nk7dlQv7muw3MSvEi%2BsQYRSHEKPJxueuOUm5Sas9ar6T1l9xwGIXCzKdJnzgtUpkZUQYNKeHc3wqg9jiXJzy9Z9q%2BbnYeItW6Xk2JhQnmYipYgwi1V8MQU4fmvZlmJ7Ree9QXmJ&X-Amz-Signature=7a259267b04ae47842405bee224c018294c352d4f6b37127faf389af542d47e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5VNCOD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFNd26dlA3TbjW0FVz8as4RiWehm1KZcZ0iiJgmBQBPAIgaQbo2prZQUE%2BO0NCEcd4PbFQ5i%2BLVVsWkw8D3Se6GQsqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCa3fkms%2B%2BQf6QJRhyrcA0AhWQmO42Y7yUmQ6Qvig3vx7Jzm0USzzHW%2Bcgm3Hh5aXcaSuczZfTgisZ7qqqMgvBO2cSkAHP5aY8GH19C3rLhBNrIAstLubt0%2BXJkJAVSUj%2FG2DJ5%2BN7YyRpOyVTIraBDyhBVc3lchTKUo1hHzcZN3jeunnR%2BowWFz2h3TDoW91ko4RC%2BANr0WCxM0TI2vmt76%2F4TfdUJFm5NSzt1rrZwQ8fgI4FwbdzSDScjsdBZ7bHtMfpEYNoGJ%2Fv5DX0EfQvddPMn7YqcrUq1ZDWSVbh91bIIIWObZYvKcJjfEJkx57FECOiBIjpDWA%2F6180IXWS1p4UP2zeBytOMY1UYZwCiwXBSuTOq%2B5eDF8y37JsshjUetSTMKxqUlOsitZePM4CjljrIHmHrY5w1%2FLqqw7viykKL1A31Ohy2Qnd%2BCsqLUOYKJ72GbiiuoJzBHYuIeslU6RfPFYQZ00klnJl1XHR3PxZa1Y2XDge47tXHDje84tUqvWE7QF2aMwXW%2BMpnva8szfRS%2BBdXaMPi1zWkeyWeElIUNP2%2FmdE0zBpTFY99h2gL2X%2B1o6fSRlVNsbzsKkwR9gV4cnfDUL5iHHppsuV4XHDqx1k69FL9gWwibCmeSk%2Br0iBfJPPxKkNz0MND6s8QGOqUB%2FRwefUafYM30Yelm56AGEWdyufEApTy%2BAV1rAfP%2Bahw6YzhdenQgXiymj7C8hAx9%2BfbUQfxJN1zCX4I89irJ3nk7dlQv7muw3MSvEi%2BsQYRSHEKPJxueuOUm5Sas9ar6T1l9xwGIXCzKdJnzgtUpkZUQYNKeHc3wqg9jiXJzy9Z9q%2BbnYeItW6Xk2JhQnmYipYgwi1V8MQU4fmvZlmJ7Ree9QXmJ&X-Amz-Signature=f1535d2251035c9daeb2de2d291a0be99e4eed69f2f76c77836ef0b66918b58f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
