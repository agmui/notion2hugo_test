---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-29T16:07:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-29T16:07:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMFJ4QY2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPLpazWB5eb40zY%2BLpCij%2FYBJbM8FutAffgGnw%2FQEJWwIhAKGxdP1aRgwHBBKdBUM9p2ojR50xdIqWFG1FD%2FCMshBGKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5dKJsj4rN3M1r%2Fpgq3APqkXlJANt20BwmaYJTAhFtNIuCUup%2FWga%2FLsDX9wJDiOi2b7yNphOAGTeire%2Bpd3frEV06q8%2B5kmgp3DkdI1Ykfgg7NEKA31muY125oglObfP%2B5e3XaigBf3QXx18bs6W7lvBrS4hGMQwQwFAbYe2rcLfxfjamM%2B3qjKfdJB9xFklsr3aNZ8XM4HfBwdd4s9d%2FrHpSgisjrZL4u53mgQGurCzdJjSk6lXrPCYjSOt22Qfmu5YKR5%2Bz%2BCQ66l1QOy93IfTRmrUuB3t7ejVkhHdnNFLhSH7w7x2DXAv%2FlgSgzM%2F1x2xT4Gm%2Bqs5UVP4RF6rqVgGRwqSiaQM6kDKX2a%2BodM8ITCHrq6xEt3ktCScoSb%2F4Y%2FkzcTVzn%2FAcJp9o%2B4hXhJo4aD1UUYk9yEQ7IWyPp16LdtMF5ki4Gbbzsck%2BnPe4%2FuO4KlpTKCcD02q4aNLbuett%2B6WvE%2F%2BI9LSAQck1Q9ZOtbrjR2Ll99CxkXVasSEjnSGn0MlS0PpkATqFyVtKgvi09us9lQBvcny1Q8ujJbPN0rcWq9F%2BbgHFTNjOQEqPb5H3MrFPvQ2cMKjfYOvVucKbHgcszjz4RHg9kSgcrZj1ljZwTodCdtYMCUCzbZGc50IqFAqpOiwqQDDG86XEBjqkATvpwkEsJoPxpo75cR5o4ewuPAF06kznAZaz8CPiWqtKpAKEs9K%2Bw0yE0QBLu3dT7H5rENNGsfYzFa7c9jR7E7osqedPh%2Bhw8tJIOlBr%2FjfF2LCTSMinc8Z0ISQ1KLziC6AFFju8IFgzFqoOZlEXkGYMjdonIK8oY9nnJkCOQWXPn3yuATTmLePyvMuONuRssl5cm62NgJiHUr3k7A%2BxXOfHyCBu&X-Amz-Signature=a8389d719dd59b6f3809ba0ab10392e4d2c5901327bcaa319235214087116522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMFJ4QY2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPLpazWB5eb40zY%2BLpCij%2FYBJbM8FutAffgGnw%2FQEJWwIhAKGxdP1aRgwHBBKdBUM9p2ojR50xdIqWFG1FD%2FCMshBGKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5dKJsj4rN3M1r%2Fpgq3APqkXlJANt20BwmaYJTAhFtNIuCUup%2FWga%2FLsDX9wJDiOi2b7yNphOAGTeire%2Bpd3frEV06q8%2B5kmgp3DkdI1Ykfgg7NEKA31muY125oglObfP%2B5e3XaigBf3QXx18bs6W7lvBrS4hGMQwQwFAbYe2rcLfxfjamM%2B3qjKfdJB9xFklsr3aNZ8XM4HfBwdd4s9d%2FrHpSgisjrZL4u53mgQGurCzdJjSk6lXrPCYjSOt22Qfmu5YKR5%2Bz%2BCQ66l1QOy93IfTRmrUuB3t7ejVkhHdnNFLhSH7w7x2DXAv%2FlgSgzM%2F1x2xT4Gm%2Bqs5UVP4RF6rqVgGRwqSiaQM6kDKX2a%2BodM8ITCHrq6xEt3ktCScoSb%2F4Y%2FkzcTVzn%2FAcJp9o%2B4hXhJo4aD1UUYk9yEQ7IWyPp16LdtMF5ki4Gbbzsck%2BnPe4%2FuO4KlpTKCcD02q4aNLbuett%2B6WvE%2F%2BI9LSAQck1Q9ZOtbrjR2Ll99CxkXVasSEjnSGn0MlS0PpkATqFyVtKgvi09us9lQBvcny1Q8ujJbPN0rcWq9F%2BbgHFTNjOQEqPb5H3MrFPvQ2cMKjfYOvVucKbHgcszjz4RHg9kSgcrZj1ljZwTodCdtYMCUCzbZGc50IqFAqpOiwqQDDG86XEBjqkATvpwkEsJoPxpo75cR5o4ewuPAF06kznAZaz8CPiWqtKpAKEs9K%2Bw0yE0QBLu3dT7H5rENNGsfYzFa7c9jR7E7osqedPh%2Bhw8tJIOlBr%2FjfF2LCTSMinc8Z0ISQ1KLziC6AFFju8IFgzFqoOZlEXkGYMjdonIK8oY9nnJkCOQWXPn3yuATTmLePyvMuONuRssl5cm62NgJiHUr3k7A%2BxXOfHyCBu&X-Amz-Signature=69348081853cd1a32d99aae78c67a0e3292cb060e8a465b68e7affbd7979f331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMFJ4QY2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPLpazWB5eb40zY%2BLpCij%2FYBJbM8FutAffgGnw%2FQEJWwIhAKGxdP1aRgwHBBKdBUM9p2ojR50xdIqWFG1FD%2FCMshBGKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5dKJsj4rN3M1r%2Fpgq3APqkXlJANt20BwmaYJTAhFtNIuCUup%2FWga%2FLsDX9wJDiOi2b7yNphOAGTeire%2Bpd3frEV06q8%2B5kmgp3DkdI1Ykfgg7NEKA31muY125oglObfP%2B5e3XaigBf3QXx18bs6W7lvBrS4hGMQwQwFAbYe2rcLfxfjamM%2B3qjKfdJB9xFklsr3aNZ8XM4HfBwdd4s9d%2FrHpSgisjrZL4u53mgQGurCzdJjSk6lXrPCYjSOt22Qfmu5YKR5%2Bz%2BCQ66l1QOy93IfTRmrUuB3t7ejVkhHdnNFLhSH7w7x2DXAv%2FlgSgzM%2F1x2xT4Gm%2Bqs5UVP4RF6rqVgGRwqSiaQM6kDKX2a%2BodM8ITCHrq6xEt3ktCScoSb%2F4Y%2FkzcTVzn%2FAcJp9o%2B4hXhJo4aD1UUYk9yEQ7IWyPp16LdtMF5ki4Gbbzsck%2BnPe4%2FuO4KlpTKCcD02q4aNLbuett%2B6WvE%2F%2BI9LSAQck1Q9ZOtbrjR2Ll99CxkXVasSEjnSGn0MlS0PpkATqFyVtKgvi09us9lQBvcny1Q8ujJbPN0rcWq9F%2BbgHFTNjOQEqPb5H3MrFPvQ2cMKjfYOvVucKbHgcszjz4RHg9kSgcrZj1ljZwTodCdtYMCUCzbZGc50IqFAqpOiwqQDDG86XEBjqkATvpwkEsJoPxpo75cR5o4ewuPAF06kznAZaz8CPiWqtKpAKEs9K%2Bw0yE0QBLu3dT7H5rENNGsfYzFa7c9jR7E7osqedPh%2Bhw8tJIOlBr%2FjfF2LCTSMinc8Z0ISQ1KLziC6AFFju8IFgzFqoOZlEXkGYMjdonIK8oY9nnJkCOQWXPn3yuATTmLePyvMuONuRssl5cm62NgJiHUr3k7A%2BxXOfHyCBu&X-Amz-Signature=b016591a304e448bca7baaed42e0ed076846a7bce2b905b7d290e828fe784579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMFJ4QY2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPLpazWB5eb40zY%2BLpCij%2FYBJbM8FutAffgGnw%2FQEJWwIhAKGxdP1aRgwHBBKdBUM9p2ojR50xdIqWFG1FD%2FCMshBGKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5dKJsj4rN3M1r%2Fpgq3APqkXlJANt20BwmaYJTAhFtNIuCUup%2FWga%2FLsDX9wJDiOi2b7yNphOAGTeire%2Bpd3frEV06q8%2B5kmgp3DkdI1Ykfgg7NEKA31muY125oglObfP%2B5e3XaigBf3QXx18bs6W7lvBrS4hGMQwQwFAbYe2rcLfxfjamM%2B3qjKfdJB9xFklsr3aNZ8XM4HfBwdd4s9d%2FrHpSgisjrZL4u53mgQGurCzdJjSk6lXrPCYjSOt22Qfmu5YKR5%2Bz%2BCQ66l1QOy93IfTRmrUuB3t7ejVkhHdnNFLhSH7w7x2DXAv%2FlgSgzM%2F1x2xT4Gm%2Bqs5UVP4RF6rqVgGRwqSiaQM6kDKX2a%2BodM8ITCHrq6xEt3ktCScoSb%2F4Y%2FkzcTVzn%2FAcJp9o%2B4hXhJo4aD1UUYk9yEQ7IWyPp16LdtMF5ki4Gbbzsck%2BnPe4%2FuO4KlpTKCcD02q4aNLbuett%2B6WvE%2F%2BI9LSAQck1Q9ZOtbrjR2Ll99CxkXVasSEjnSGn0MlS0PpkATqFyVtKgvi09us9lQBvcny1Q8ujJbPN0rcWq9F%2BbgHFTNjOQEqPb5H3MrFPvQ2cMKjfYOvVucKbHgcszjz4RHg9kSgcrZj1ljZwTodCdtYMCUCzbZGc50IqFAqpOiwqQDDG86XEBjqkATvpwkEsJoPxpo75cR5o4ewuPAF06kznAZaz8CPiWqtKpAKEs9K%2Bw0yE0QBLu3dT7H5rENNGsfYzFa7c9jR7E7osqedPh%2Bhw8tJIOlBr%2FjfF2LCTSMinc8Z0ISQ1KLziC6AFFju8IFgzFqoOZlEXkGYMjdonIK8oY9nnJkCOQWXPn3yuATTmLePyvMuONuRssl5cm62NgJiHUr3k7A%2BxXOfHyCBu&X-Amz-Signature=3b24f444e9f69a250dbb01c9548d8f17a111995dddeb6f2c2fb0a4b1671f2d56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMFJ4QY2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPLpazWB5eb40zY%2BLpCij%2FYBJbM8FutAffgGnw%2FQEJWwIhAKGxdP1aRgwHBBKdBUM9p2ojR50xdIqWFG1FD%2FCMshBGKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5dKJsj4rN3M1r%2Fpgq3APqkXlJANt20BwmaYJTAhFtNIuCUup%2FWga%2FLsDX9wJDiOi2b7yNphOAGTeire%2Bpd3frEV06q8%2B5kmgp3DkdI1Ykfgg7NEKA31muY125oglObfP%2B5e3XaigBf3QXx18bs6W7lvBrS4hGMQwQwFAbYe2rcLfxfjamM%2B3qjKfdJB9xFklsr3aNZ8XM4HfBwdd4s9d%2FrHpSgisjrZL4u53mgQGurCzdJjSk6lXrPCYjSOt22Qfmu5YKR5%2Bz%2BCQ66l1QOy93IfTRmrUuB3t7ejVkhHdnNFLhSH7w7x2DXAv%2FlgSgzM%2F1x2xT4Gm%2Bqs5UVP4RF6rqVgGRwqSiaQM6kDKX2a%2BodM8ITCHrq6xEt3ktCScoSb%2F4Y%2FkzcTVzn%2FAcJp9o%2B4hXhJo4aD1UUYk9yEQ7IWyPp16LdtMF5ki4Gbbzsck%2BnPe4%2FuO4KlpTKCcD02q4aNLbuett%2B6WvE%2F%2BI9LSAQck1Q9ZOtbrjR2Ll99CxkXVasSEjnSGn0MlS0PpkATqFyVtKgvi09us9lQBvcny1Q8ujJbPN0rcWq9F%2BbgHFTNjOQEqPb5H3MrFPvQ2cMKjfYOvVucKbHgcszjz4RHg9kSgcrZj1ljZwTodCdtYMCUCzbZGc50IqFAqpOiwqQDDG86XEBjqkATvpwkEsJoPxpo75cR5o4ewuPAF06kznAZaz8CPiWqtKpAKEs9K%2Bw0yE0QBLu3dT7H5rENNGsfYzFa7c9jR7E7osqedPh%2Bhw8tJIOlBr%2FjfF2LCTSMinc8Z0ISQ1KLziC6AFFju8IFgzFqoOZlEXkGYMjdonIK8oY9nnJkCOQWXPn3yuATTmLePyvMuONuRssl5cm62NgJiHUr3k7A%2BxXOfHyCBu&X-Amz-Signature=7d3a25ffdb16fadd7815c85d5e335347e82b4080b6ffa1b7a3e407939b1cc668&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMFJ4QY2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPLpazWB5eb40zY%2BLpCij%2FYBJbM8FutAffgGnw%2FQEJWwIhAKGxdP1aRgwHBBKdBUM9p2ojR50xdIqWFG1FD%2FCMshBGKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5dKJsj4rN3M1r%2Fpgq3APqkXlJANt20BwmaYJTAhFtNIuCUup%2FWga%2FLsDX9wJDiOi2b7yNphOAGTeire%2Bpd3frEV06q8%2B5kmgp3DkdI1Ykfgg7NEKA31muY125oglObfP%2B5e3XaigBf3QXx18bs6W7lvBrS4hGMQwQwFAbYe2rcLfxfjamM%2B3qjKfdJB9xFklsr3aNZ8XM4HfBwdd4s9d%2FrHpSgisjrZL4u53mgQGurCzdJjSk6lXrPCYjSOt22Qfmu5YKR5%2Bz%2BCQ66l1QOy93IfTRmrUuB3t7ejVkhHdnNFLhSH7w7x2DXAv%2FlgSgzM%2F1x2xT4Gm%2Bqs5UVP4RF6rqVgGRwqSiaQM6kDKX2a%2BodM8ITCHrq6xEt3ktCScoSb%2F4Y%2FkzcTVzn%2FAcJp9o%2B4hXhJo4aD1UUYk9yEQ7IWyPp16LdtMF5ki4Gbbzsck%2BnPe4%2FuO4KlpTKCcD02q4aNLbuett%2B6WvE%2F%2BI9LSAQck1Q9ZOtbrjR2Ll99CxkXVasSEjnSGn0MlS0PpkATqFyVtKgvi09us9lQBvcny1Q8ujJbPN0rcWq9F%2BbgHFTNjOQEqPb5H3MrFPvQ2cMKjfYOvVucKbHgcszjz4RHg9kSgcrZj1ljZwTodCdtYMCUCzbZGc50IqFAqpOiwqQDDG86XEBjqkATvpwkEsJoPxpo75cR5o4ewuPAF06kznAZaz8CPiWqtKpAKEs9K%2Bw0yE0QBLu3dT7H5rENNGsfYzFa7c9jR7E7osqedPh%2Bhw8tJIOlBr%2FjfF2LCTSMinc8Z0ISQ1KLziC6AFFju8IFgzFqoOZlEXkGYMjdonIK8oY9nnJkCOQWXPn3yuATTmLePyvMuONuRssl5cm62NgJiHUr3k7A%2BxXOfHyCBu&X-Amz-Signature=ae754786b8dff3b9d2d748cfd105dddede216fec7b2373bd58ba720bdf812e4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMFJ4QY2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPLpazWB5eb40zY%2BLpCij%2FYBJbM8FutAffgGnw%2FQEJWwIhAKGxdP1aRgwHBBKdBUM9p2ojR50xdIqWFG1FD%2FCMshBGKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5dKJsj4rN3M1r%2Fpgq3APqkXlJANt20BwmaYJTAhFtNIuCUup%2FWga%2FLsDX9wJDiOi2b7yNphOAGTeire%2Bpd3frEV06q8%2B5kmgp3DkdI1Ykfgg7NEKA31muY125oglObfP%2B5e3XaigBf3QXx18bs6W7lvBrS4hGMQwQwFAbYe2rcLfxfjamM%2B3qjKfdJB9xFklsr3aNZ8XM4HfBwdd4s9d%2FrHpSgisjrZL4u53mgQGurCzdJjSk6lXrPCYjSOt22Qfmu5YKR5%2Bz%2BCQ66l1QOy93IfTRmrUuB3t7ejVkhHdnNFLhSH7w7x2DXAv%2FlgSgzM%2F1x2xT4Gm%2Bqs5UVP4RF6rqVgGRwqSiaQM6kDKX2a%2BodM8ITCHrq6xEt3ktCScoSb%2F4Y%2FkzcTVzn%2FAcJp9o%2B4hXhJo4aD1UUYk9yEQ7IWyPp16LdtMF5ki4Gbbzsck%2BnPe4%2FuO4KlpTKCcD02q4aNLbuett%2B6WvE%2F%2BI9LSAQck1Q9ZOtbrjR2Ll99CxkXVasSEjnSGn0MlS0PpkATqFyVtKgvi09us9lQBvcny1Q8ujJbPN0rcWq9F%2BbgHFTNjOQEqPb5H3MrFPvQ2cMKjfYOvVucKbHgcszjz4RHg9kSgcrZj1ljZwTodCdtYMCUCzbZGc50IqFAqpOiwqQDDG86XEBjqkATvpwkEsJoPxpo75cR5o4ewuPAF06kznAZaz8CPiWqtKpAKEs9K%2Bw0yE0QBLu3dT7H5rENNGsfYzFa7c9jR7E7osqedPh%2Bhw8tJIOlBr%2FjfF2LCTSMinc8Z0ISQ1KLziC6AFFju8IFgzFqoOZlEXkGYMjdonIK8oY9nnJkCOQWXPn3yuATTmLePyvMuONuRssl5cm62NgJiHUr3k7A%2BxXOfHyCBu&X-Amz-Signature=5d5d68466d35507b91c0e5ceefbfcfa3536859ada005bc3edc1dd07963ca547e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMFJ4QY2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPLpazWB5eb40zY%2BLpCij%2FYBJbM8FutAffgGnw%2FQEJWwIhAKGxdP1aRgwHBBKdBUM9p2ojR50xdIqWFG1FD%2FCMshBGKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5dKJsj4rN3M1r%2Fpgq3APqkXlJANt20BwmaYJTAhFtNIuCUup%2FWga%2FLsDX9wJDiOi2b7yNphOAGTeire%2Bpd3frEV06q8%2B5kmgp3DkdI1Ykfgg7NEKA31muY125oglObfP%2B5e3XaigBf3QXx18bs6W7lvBrS4hGMQwQwFAbYe2rcLfxfjamM%2B3qjKfdJB9xFklsr3aNZ8XM4HfBwdd4s9d%2FrHpSgisjrZL4u53mgQGurCzdJjSk6lXrPCYjSOt22Qfmu5YKR5%2Bz%2BCQ66l1QOy93IfTRmrUuB3t7ejVkhHdnNFLhSH7w7x2DXAv%2FlgSgzM%2F1x2xT4Gm%2Bqs5UVP4RF6rqVgGRwqSiaQM6kDKX2a%2BodM8ITCHrq6xEt3ktCScoSb%2F4Y%2FkzcTVzn%2FAcJp9o%2B4hXhJo4aD1UUYk9yEQ7IWyPp16LdtMF5ki4Gbbzsck%2BnPe4%2FuO4KlpTKCcD02q4aNLbuett%2B6WvE%2F%2BI9LSAQck1Q9ZOtbrjR2Ll99CxkXVasSEjnSGn0MlS0PpkATqFyVtKgvi09us9lQBvcny1Q8ujJbPN0rcWq9F%2BbgHFTNjOQEqPb5H3MrFPvQ2cMKjfYOvVucKbHgcszjz4RHg9kSgcrZj1ljZwTodCdtYMCUCzbZGc50IqFAqpOiwqQDDG86XEBjqkATvpwkEsJoPxpo75cR5o4ewuPAF06kznAZaz8CPiWqtKpAKEs9K%2Bw0yE0QBLu3dT7H5rENNGsfYzFa7c9jR7E7osqedPh%2Bhw8tJIOlBr%2FjfF2LCTSMinc8Z0ISQ1KLziC6AFFju8IFgzFqoOZlEXkGYMjdonIK8oY9nnJkCOQWXPn3yuATTmLePyvMuONuRssl5cm62NgJiHUr3k7A%2BxXOfHyCBu&X-Amz-Signature=09e0e981faf4475965dafca31a05dc12cf6d3b1e4c39992b59b5b3299cfcf609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMFJ4QY2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPLpazWB5eb40zY%2BLpCij%2FYBJbM8FutAffgGnw%2FQEJWwIhAKGxdP1aRgwHBBKdBUM9p2ojR50xdIqWFG1FD%2FCMshBGKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5dKJsj4rN3M1r%2Fpgq3APqkXlJANt20BwmaYJTAhFtNIuCUup%2FWga%2FLsDX9wJDiOi2b7yNphOAGTeire%2Bpd3frEV06q8%2B5kmgp3DkdI1Ykfgg7NEKA31muY125oglObfP%2B5e3XaigBf3QXx18bs6W7lvBrS4hGMQwQwFAbYe2rcLfxfjamM%2B3qjKfdJB9xFklsr3aNZ8XM4HfBwdd4s9d%2FrHpSgisjrZL4u53mgQGurCzdJjSk6lXrPCYjSOt22Qfmu5YKR5%2Bz%2BCQ66l1QOy93IfTRmrUuB3t7ejVkhHdnNFLhSH7w7x2DXAv%2FlgSgzM%2F1x2xT4Gm%2Bqs5UVP4RF6rqVgGRwqSiaQM6kDKX2a%2BodM8ITCHrq6xEt3ktCScoSb%2F4Y%2FkzcTVzn%2FAcJp9o%2B4hXhJo4aD1UUYk9yEQ7IWyPp16LdtMF5ki4Gbbzsck%2BnPe4%2FuO4KlpTKCcD02q4aNLbuett%2B6WvE%2F%2BI9LSAQck1Q9ZOtbrjR2Ll99CxkXVasSEjnSGn0MlS0PpkATqFyVtKgvi09us9lQBvcny1Q8ujJbPN0rcWq9F%2BbgHFTNjOQEqPb5H3MrFPvQ2cMKjfYOvVucKbHgcszjz4RHg9kSgcrZj1ljZwTodCdtYMCUCzbZGc50IqFAqpOiwqQDDG86XEBjqkATvpwkEsJoPxpo75cR5o4ewuPAF06kznAZaz8CPiWqtKpAKEs9K%2Bw0yE0QBLu3dT7H5rENNGsfYzFa7c9jR7E7osqedPh%2Bhw8tJIOlBr%2FjfF2LCTSMinc8Z0ISQ1KLziC6AFFju8IFgzFqoOZlEXkGYMjdonIK8oY9nnJkCOQWXPn3yuATTmLePyvMuONuRssl5cm62NgJiHUr3k7A%2BxXOfHyCBu&X-Amz-Signature=4374f783fd576f5a0655b652b4c7f902f1f65ae620ed93032779c2fe7f886d88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMFJ4QY2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPLpazWB5eb40zY%2BLpCij%2FYBJbM8FutAffgGnw%2FQEJWwIhAKGxdP1aRgwHBBKdBUM9p2ojR50xdIqWFG1FD%2FCMshBGKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5dKJsj4rN3M1r%2Fpgq3APqkXlJANt20BwmaYJTAhFtNIuCUup%2FWga%2FLsDX9wJDiOi2b7yNphOAGTeire%2Bpd3frEV06q8%2B5kmgp3DkdI1Ykfgg7NEKA31muY125oglObfP%2B5e3XaigBf3QXx18bs6W7lvBrS4hGMQwQwFAbYe2rcLfxfjamM%2B3qjKfdJB9xFklsr3aNZ8XM4HfBwdd4s9d%2FrHpSgisjrZL4u53mgQGurCzdJjSk6lXrPCYjSOt22Qfmu5YKR5%2Bz%2BCQ66l1QOy93IfTRmrUuB3t7ejVkhHdnNFLhSH7w7x2DXAv%2FlgSgzM%2F1x2xT4Gm%2Bqs5UVP4RF6rqVgGRwqSiaQM6kDKX2a%2BodM8ITCHrq6xEt3ktCScoSb%2F4Y%2FkzcTVzn%2FAcJp9o%2B4hXhJo4aD1UUYk9yEQ7IWyPp16LdtMF5ki4Gbbzsck%2BnPe4%2FuO4KlpTKCcD02q4aNLbuett%2B6WvE%2F%2BI9LSAQck1Q9ZOtbrjR2Ll99CxkXVasSEjnSGn0MlS0PpkATqFyVtKgvi09us9lQBvcny1Q8ujJbPN0rcWq9F%2BbgHFTNjOQEqPb5H3MrFPvQ2cMKjfYOvVucKbHgcszjz4RHg9kSgcrZj1ljZwTodCdtYMCUCzbZGc50IqFAqpOiwqQDDG86XEBjqkATvpwkEsJoPxpo75cR5o4ewuPAF06kznAZaz8CPiWqtKpAKEs9K%2Bw0yE0QBLu3dT7H5rENNGsfYzFa7c9jR7E7osqedPh%2Bhw8tJIOlBr%2FjfF2LCTSMinc8Z0ISQ1KLziC6AFFju8IFgzFqoOZlEXkGYMjdonIK8oY9nnJkCOQWXPn3yuATTmLePyvMuONuRssl5cm62NgJiHUr3k7A%2BxXOfHyCBu&X-Amz-Signature=cacfd7080774018184bda5143786b8094e8bcd93b5754827371afc6b90bc6c30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
