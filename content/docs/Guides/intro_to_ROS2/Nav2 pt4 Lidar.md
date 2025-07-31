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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6Z5QPVV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCS%2B5GHSt6mgvfbrhFqfwfkxA2e2fn7kHvcD8RMsefe3wIgROHrio1mMM0%2FUbP%2BdVMqyBQzWTvOYArIseaxEt%2Bc2FYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbwLWTgjamG%2B4efPyrcA46tvmWuYYIT8bBFnY67xioaCRBaKLpl6ypnzx4onzXCU%2BWtEft7zxCGgRQt7FjqWi6dSRc1bIKQN2Fjdxj0%2BHWMHEH1rhp5Um7BTAKODQ5lXw54y7lH5K1Z0g2VV%2Bnim16XwqT3mZRgJ6iYs%2FTMQH1mk0hKI%2BVwQUfAwwHSMfwZQXOsCSmYUHRaYmb%2FI4%2B4MLaMhcOjV3ytRPtTyS4WwuZvWmxvZm2t7nuZf7E4O%2FvStH7zjove9HqgUsQB2VOW3GIy2l9dKj9BCKQ%2BSDVsPcjXldDXLpeC4InbH9GOc5lpD98%2F8uXCSBeamS1JMWGIB7tUqFFErxFlY4xVnYay8FV%2BHSyETyGxq9F9cfvirKAWxaFsxA%2FrxTLfejU%2F%2FEhX82LrMT%2B2xDxuDytcyIeNzTkwYa1uFY4sXZr4sh1mErVEBb%2F24EUXKrOQ8LNoTPhjgASLk2fWtkcGPUKLz%2B3q4smG7xRgDfSX45TYIbeFZMCBE1FFiirHF3UFzZzgGbN94qz7JZpq%2FQj1cTeRSnF0VB16A9OdohetgDQvCciCGsPJjz0Lr%2B4YMAgZPIn6zsK0sFfMDFltInyEjQmnc8MB5hCyT6NA%2FZ9mByKJS%2FvqNXE1EKatLoJX3tESgbCyMLvcrsQGOqUBAY8KrTj7OrN8No0rGT%2BjD%2FN%2B99wAk%2FyhHFnDaOwVVblGvbbm5EcLheOpNk39fFfMhLyOWAK3CIAVoBFmNeFm4IJA6uSI2VdgmMo3GM0evWI4aeBcDR6m9jdd7x2iNbf7arsgLvsxbUSGLKP5dUOmHwXA%2B%2FtoivWByyLSMZh0R710%2FacmZhtH%2BLJ5suuYiNp%2Fp%2FQl7bmfIuYeunIDjc0tSOQYQcPU&X-Amz-Signature=b51b0e0da6936edbd15e0301d837b52d0e2f8836d809f81d5159ce858913f7bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6Z5QPVV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCS%2B5GHSt6mgvfbrhFqfwfkxA2e2fn7kHvcD8RMsefe3wIgROHrio1mMM0%2FUbP%2BdVMqyBQzWTvOYArIseaxEt%2Bc2FYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbwLWTgjamG%2B4efPyrcA46tvmWuYYIT8bBFnY67xioaCRBaKLpl6ypnzx4onzXCU%2BWtEft7zxCGgRQt7FjqWi6dSRc1bIKQN2Fjdxj0%2BHWMHEH1rhp5Um7BTAKODQ5lXw54y7lH5K1Z0g2VV%2Bnim16XwqT3mZRgJ6iYs%2FTMQH1mk0hKI%2BVwQUfAwwHSMfwZQXOsCSmYUHRaYmb%2FI4%2B4MLaMhcOjV3ytRPtTyS4WwuZvWmxvZm2t7nuZf7E4O%2FvStH7zjove9HqgUsQB2VOW3GIy2l9dKj9BCKQ%2BSDVsPcjXldDXLpeC4InbH9GOc5lpD98%2F8uXCSBeamS1JMWGIB7tUqFFErxFlY4xVnYay8FV%2BHSyETyGxq9F9cfvirKAWxaFsxA%2FrxTLfejU%2F%2FEhX82LrMT%2B2xDxuDytcyIeNzTkwYa1uFY4sXZr4sh1mErVEBb%2F24EUXKrOQ8LNoTPhjgASLk2fWtkcGPUKLz%2B3q4smG7xRgDfSX45TYIbeFZMCBE1FFiirHF3UFzZzgGbN94qz7JZpq%2FQj1cTeRSnF0VB16A9OdohetgDQvCciCGsPJjz0Lr%2B4YMAgZPIn6zsK0sFfMDFltInyEjQmnc8MB5hCyT6NA%2FZ9mByKJS%2FvqNXE1EKatLoJX3tESgbCyMLvcrsQGOqUBAY8KrTj7OrN8No0rGT%2BjD%2FN%2B99wAk%2FyhHFnDaOwVVblGvbbm5EcLheOpNk39fFfMhLyOWAK3CIAVoBFmNeFm4IJA6uSI2VdgmMo3GM0evWI4aeBcDR6m9jdd7x2iNbf7arsgLvsxbUSGLKP5dUOmHwXA%2B%2FtoivWByyLSMZh0R710%2FacmZhtH%2BLJ5suuYiNp%2Fp%2FQl7bmfIuYeunIDjc0tSOQYQcPU&X-Amz-Signature=f73a5efcb5e3ee565950272ad0622fb14ff896173fbb688e6f8215b5c68541e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6Z5QPVV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCS%2B5GHSt6mgvfbrhFqfwfkxA2e2fn7kHvcD8RMsefe3wIgROHrio1mMM0%2FUbP%2BdVMqyBQzWTvOYArIseaxEt%2Bc2FYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbwLWTgjamG%2B4efPyrcA46tvmWuYYIT8bBFnY67xioaCRBaKLpl6ypnzx4onzXCU%2BWtEft7zxCGgRQt7FjqWi6dSRc1bIKQN2Fjdxj0%2BHWMHEH1rhp5Um7BTAKODQ5lXw54y7lH5K1Z0g2VV%2Bnim16XwqT3mZRgJ6iYs%2FTMQH1mk0hKI%2BVwQUfAwwHSMfwZQXOsCSmYUHRaYmb%2FI4%2B4MLaMhcOjV3ytRPtTyS4WwuZvWmxvZm2t7nuZf7E4O%2FvStH7zjove9HqgUsQB2VOW3GIy2l9dKj9BCKQ%2BSDVsPcjXldDXLpeC4InbH9GOc5lpD98%2F8uXCSBeamS1JMWGIB7tUqFFErxFlY4xVnYay8FV%2BHSyETyGxq9F9cfvirKAWxaFsxA%2FrxTLfejU%2F%2FEhX82LrMT%2B2xDxuDytcyIeNzTkwYa1uFY4sXZr4sh1mErVEBb%2F24EUXKrOQ8LNoTPhjgASLk2fWtkcGPUKLz%2B3q4smG7xRgDfSX45TYIbeFZMCBE1FFiirHF3UFzZzgGbN94qz7JZpq%2FQj1cTeRSnF0VB16A9OdohetgDQvCciCGsPJjz0Lr%2B4YMAgZPIn6zsK0sFfMDFltInyEjQmnc8MB5hCyT6NA%2FZ9mByKJS%2FvqNXE1EKatLoJX3tESgbCyMLvcrsQGOqUBAY8KrTj7OrN8No0rGT%2BjD%2FN%2B99wAk%2FyhHFnDaOwVVblGvbbm5EcLheOpNk39fFfMhLyOWAK3CIAVoBFmNeFm4IJA6uSI2VdgmMo3GM0evWI4aeBcDR6m9jdd7x2iNbf7arsgLvsxbUSGLKP5dUOmHwXA%2B%2FtoivWByyLSMZh0R710%2FacmZhtH%2BLJ5suuYiNp%2Fp%2FQl7bmfIuYeunIDjc0tSOQYQcPU&X-Amz-Signature=015a33c4fcff2c576741195e2844c230a928cdb79105c857647e10c68168aabd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6Z5QPVV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCS%2B5GHSt6mgvfbrhFqfwfkxA2e2fn7kHvcD8RMsefe3wIgROHrio1mMM0%2FUbP%2BdVMqyBQzWTvOYArIseaxEt%2Bc2FYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbwLWTgjamG%2B4efPyrcA46tvmWuYYIT8bBFnY67xioaCRBaKLpl6ypnzx4onzXCU%2BWtEft7zxCGgRQt7FjqWi6dSRc1bIKQN2Fjdxj0%2BHWMHEH1rhp5Um7BTAKODQ5lXw54y7lH5K1Z0g2VV%2Bnim16XwqT3mZRgJ6iYs%2FTMQH1mk0hKI%2BVwQUfAwwHSMfwZQXOsCSmYUHRaYmb%2FI4%2B4MLaMhcOjV3ytRPtTyS4WwuZvWmxvZm2t7nuZf7E4O%2FvStH7zjove9HqgUsQB2VOW3GIy2l9dKj9BCKQ%2BSDVsPcjXldDXLpeC4InbH9GOc5lpD98%2F8uXCSBeamS1JMWGIB7tUqFFErxFlY4xVnYay8FV%2BHSyETyGxq9F9cfvirKAWxaFsxA%2FrxTLfejU%2F%2FEhX82LrMT%2B2xDxuDytcyIeNzTkwYa1uFY4sXZr4sh1mErVEBb%2F24EUXKrOQ8LNoTPhjgASLk2fWtkcGPUKLz%2B3q4smG7xRgDfSX45TYIbeFZMCBE1FFiirHF3UFzZzgGbN94qz7JZpq%2FQj1cTeRSnF0VB16A9OdohetgDQvCciCGsPJjz0Lr%2B4YMAgZPIn6zsK0sFfMDFltInyEjQmnc8MB5hCyT6NA%2FZ9mByKJS%2FvqNXE1EKatLoJX3tESgbCyMLvcrsQGOqUBAY8KrTj7OrN8No0rGT%2BjD%2FN%2B99wAk%2FyhHFnDaOwVVblGvbbm5EcLheOpNk39fFfMhLyOWAK3CIAVoBFmNeFm4IJA6uSI2VdgmMo3GM0evWI4aeBcDR6m9jdd7x2iNbf7arsgLvsxbUSGLKP5dUOmHwXA%2B%2FtoivWByyLSMZh0R710%2FacmZhtH%2BLJ5suuYiNp%2Fp%2FQl7bmfIuYeunIDjc0tSOQYQcPU&X-Amz-Signature=3982b53befa561999b22607ddd096f5fbc8363d456f5076c2bc228a551110b89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6Z5QPVV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCS%2B5GHSt6mgvfbrhFqfwfkxA2e2fn7kHvcD8RMsefe3wIgROHrio1mMM0%2FUbP%2BdVMqyBQzWTvOYArIseaxEt%2Bc2FYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbwLWTgjamG%2B4efPyrcA46tvmWuYYIT8bBFnY67xioaCRBaKLpl6ypnzx4onzXCU%2BWtEft7zxCGgRQt7FjqWi6dSRc1bIKQN2Fjdxj0%2BHWMHEH1rhp5Um7BTAKODQ5lXw54y7lH5K1Z0g2VV%2Bnim16XwqT3mZRgJ6iYs%2FTMQH1mk0hKI%2BVwQUfAwwHSMfwZQXOsCSmYUHRaYmb%2FI4%2B4MLaMhcOjV3ytRPtTyS4WwuZvWmxvZm2t7nuZf7E4O%2FvStH7zjove9HqgUsQB2VOW3GIy2l9dKj9BCKQ%2BSDVsPcjXldDXLpeC4InbH9GOc5lpD98%2F8uXCSBeamS1JMWGIB7tUqFFErxFlY4xVnYay8FV%2BHSyETyGxq9F9cfvirKAWxaFsxA%2FrxTLfejU%2F%2FEhX82LrMT%2B2xDxuDytcyIeNzTkwYa1uFY4sXZr4sh1mErVEBb%2F24EUXKrOQ8LNoTPhjgASLk2fWtkcGPUKLz%2B3q4smG7xRgDfSX45TYIbeFZMCBE1FFiirHF3UFzZzgGbN94qz7JZpq%2FQj1cTeRSnF0VB16A9OdohetgDQvCciCGsPJjz0Lr%2B4YMAgZPIn6zsK0sFfMDFltInyEjQmnc8MB5hCyT6NA%2FZ9mByKJS%2FvqNXE1EKatLoJX3tESgbCyMLvcrsQGOqUBAY8KrTj7OrN8No0rGT%2BjD%2FN%2B99wAk%2FyhHFnDaOwVVblGvbbm5EcLheOpNk39fFfMhLyOWAK3CIAVoBFmNeFm4IJA6uSI2VdgmMo3GM0evWI4aeBcDR6m9jdd7x2iNbf7arsgLvsxbUSGLKP5dUOmHwXA%2B%2FtoivWByyLSMZh0R710%2FacmZhtH%2BLJ5suuYiNp%2Fp%2FQl7bmfIuYeunIDjc0tSOQYQcPU&X-Amz-Signature=6e6ce5d8ae850eaf381c6f401de4a7d8d6c94a0984119309fba844ceed9eaf04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6Z5QPVV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCS%2B5GHSt6mgvfbrhFqfwfkxA2e2fn7kHvcD8RMsefe3wIgROHrio1mMM0%2FUbP%2BdVMqyBQzWTvOYArIseaxEt%2Bc2FYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbwLWTgjamG%2B4efPyrcA46tvmWuYYIT8bBFnY67xioaCRBaKLpl6ypnzx4onzXCU%2BWtEft7zxCGgRQt7FjqWi6dSRc1bIKQN2Fjdxj0%2BHWMHEH1rhp5Um7BTAKODQ5lXw54y7lH5K1Z0g2VV%2Bnim16XwqT3mZRgJ6iYs%2FTMQH1mk0hKI%2BVwQUfAwwHSMfwZQXOsCSmYUHRaYmb%2FI4%2B4MLaMhcOjV3ytRPtTyS4WwuZvWmxvZm2t7nuZf7E4O%2FvStH7zjove9HqgUsQB2VOW3GIy2l9dKj9BCKQ%2BSDVsPcjXldDXLpeC4InbH9GOc5lpD98%2F8uXCSBeamS1JMWGIB7tUqFFErxFlY4xVnYay8FV%2BHSyETyGxq9F9cfvirKAWxaFsxA%2FrxTLfejU%2F%2FEhX82LrMT%2B2xDxuDytcyIeNzTkwYa1uFY4sXZr4sh1mErVEBb%2F24EUXKrOQ8LNoTPhjgASLk2fWtkcGPUKLz%2B3q4smG7xRgDfSX45TYIbeFZMCBE1FFiirHF3UFzZzgGbN94qz7JZpq%2FQj1cTeRSnF0VB16A9OdohetgDQvCciCGsPJjz0Lr%2B4YMAgZPIn6zsK0sFfMDFltInyEjQmnc8MB5hCyT6NA%2FZ9mByKJS%2FvqNXE1EKatLoJX3tESgbCyMLvcrsQGOqUBAY8KrTj7OrN8No0rGT%2BjD%2FN%2B99wAk%2FyhHFnDaOwVVblGvbbm5EcLheOpNk39fFfMhLyOWAK3CIAVoBFmNeFm4IJA6uSI2VdgmMo3GM0evWI4aeBcDR6m9jdd7x2iNbf7arsgLvsxbUSGLKP5dUOmHwXA%2B%2FtoivWByyLSMZh0R710%2FacmZhtH%2BLJ5suuYiNp%2Fp%2FQl7bmfIuYeunIDjc0tSOQYQcPU&X-Amz-Signature=30b3e243297cf0175e8d4deb1da3bff2270c357f055c960fbb2c53e46311dfb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6Z5QPVV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCS%2B5GHSt6mgvfbrhFqfwfkxA2e2fn7kHvcD8RMsefe3wIgROHrio1mMM0%2FUbP%2BdVMqyBQzWTvOYArIseaxEt%2Bc2FYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbwLWTgjamG%2B4efPyrcA46tvmWuYYIT8bBFnY67xioaCRBaKLpl6ypnzx4onzXCU%2BWtEft7zxCGgRQt7FjqWi6dSRc1bIKQN2Fjdxj0%2BHWMHEH1rhp5Um7BTAKODQ5lXw54y7lH5K1Z0g2VV%2Bnim16XwqT3mZRgJ6iYs%2FTMQH1mk0hKI%2BVwQUfAwwHSMfwZQXOsCSmYUHRaYmb%2FI4%2B4MLaMhcOjV3ytRPtTyS4WwuZvWmxvZm2t7nuZf7E4O%2FvStH7zjove9HqgUsQB2VOW3GIy2l9dKj9BCKQ%2BSDVsPcjXldDXLpeC4InbH9GOc5lpD98%2F8uXCSBeamS1JMWGIB7tUqFFErxFlY4xVnYay8FV%2BHSyETyGxq9F9cfvirKAWxaFsxA%2FrxTLfejU%2F%2FEhX82LrMT%2B2xDxuDytcyIeNzTkwYa1uFY4sXZr4sh1mErVEBb%2F24EUXKrOQ8LNoTPhjgASLk2fWtkcGPUKLz%2B3q4smG7xRgDfSX45TYIbeFZMCBE1FFiirHF3UFzZzgGbN94qz7JZpq%2FQj1cTeRSnF0VB16A9OdohetgDQvCciCGsPJjz0Lr%2B4YMAgZPIn6zsK0sFfMDFltInyEjQmnc8MB5hCyT6NA%2FZ9mByKJS%2FvqNXE1EKatLoJX3tESgbCyMLvcrsQGOqUBAY8KrTj7OrN8No0rGT%2BjD%2FN%2B99wAk%2FyhHFnDaOwVVblGvbbm5EcLheOpNk39fFfMhLyOWAK3CIAVoBFmNeFm4IJA6uSI2VdgmMo3GM0evWI4aeBcDR6m9jdd7x2iNbf7arsgLvsxbUSGLKP5dUOmHwXA%2B%2FtoivWByyLSMZh0R710%2FacmZhtH%2BLJ5suuYiNp%2Fp%2FQl7bmfIuYeunIDjc0tSOQYQcPU&X-Amz-Signature=8b1af26775f4579acf8ecad67b15dcf35b2807d3692c4d58822dee84c86065f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6Z5QPVV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCS%2B5GHSt6mgvfbrhFqfwfkxA2e2fn7kHvcD8RMsefe3wIgROHrio1mMM0%2FUbP%2BdVMqyBQzWTvOYArIseaxEt%2Bc2FYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbwLWTgjamG%2B4efPyrcA46tvmWuYYIT8bBFnY67xioaCRBaKLpl6ypnzx4onzXCU%2BWtEft7zxCGgRQt7FjqWi6dSRc1bIKQN2Fjdxj0%2BHWMHEH1rhp5Um7BTAKODQ5lXw54y7lH5K1Z0g2VV%2Bnim16XwqT3mZRgJ6iYs%2FTMQH1mk0hKI%2BVwQUfAwwHSMfwZQXOsCSmYUHRaYmb%2FI4%2B4MLaMhcOjV3ytRPtTyS4WwuZvWmxvZm2t7nuZf7E4O%2FvStH7zjove9HqgUsQB2VOW3GIy2l9dKj9BCKQ%2BSDVsPcjXldDXLpeC4InbH9GOc5lpD98%2F8uXCSBeamS1JMWGIB7tUqFFErxFlY4xVnYay8FV%2BHSyETyGxq9F9cfvirKAWxaFsxA%2FrxTLfejU%2F%2FEhX82LrMT%2B2xDxuDytcyIeNzTkwYa1uFY4sXZr4sh1mErVEBb%2F24EUXKrOQ8LNoTPhjgASLk2fWtkcGPUKLz%2B3q4smG7xRgDfSX45TYIbeFZMCBE1FFiirHF3UFzZzgGbN94qz7JZpq%2FQj1cTeRSnF0VB16A9OdohetgDQvCciCGsPJjz0Lr%2B4YMAgZPIn6zsK0sFfMDFltInyEjQmnc8MB5hCyT6NA%2FZ9mByKJS%2FvqNXE1EKatLoJX3tESgbCyMLvcrsQGOqUBAY8KrTj7OrN8No0rGT%2BjD%2FN%2B99wAk%2FyhHFnDaOwVVblGvbbm5EcLheOpNk39fFfMhLyOWAK3CIAVoBFmNeFm4IJA6uSI2VdgmMo3GM0evWI4aeBcDR6m9jdd7x2iNbf7arsgLvsxbUSGLKP5dUOmHwXA%2B%2FtoivWByyLSMZh0R710%2FacmZhtH%2BLJ5suuYiNp%2Fp%2FQl7bmfIuYeunIDjc0tSOQYQcPU&X-Amz-Signature=49840e4e3785a056f3787dd24b3c5dcefc7e66226ce7f33fda31548c831fea78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6Z5QPVV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCS%2B5GHSt6mgvfbrhFqfwfkxA2e2fn7kHvcD8RMsefe3wIgROHrio1mMM0%2FUbP%2BdVMqyBQzWTvOYArIseaxEt%2Bc2FYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbwLWTgjamG%2B4efPyrcA46tvmWuYYIT8bBFnY67xioaCRBaKLpl6ypnzx4onzXCU%2BWtEft7zxCGgRQt7FjqWi6dSRc1bIKQN2Fjdxj0%2BHWMHEH1rhp5Um7BTAKODQ5lXw54y7lH5K1Z0g2VV%2Bnim16XwqT3mZRgJ6iYs%2FTMQH1mk0hKI%2BVwQUfAwwHSMfwZQXOsCSmYUHRaYmb%2FI4%2B4MLaMhcOjV3ytRPtTyS4WwuZvWmxvZm2t7nuZf7E4O%2FvStH7zjove9HqgUsQB2VOW3GIy2l9dKj9BCKQ%2BSDVsPcjXldDXLpeC4InbH9GOc5lpD98%2F8uXCSBeamS1JMWGIB7tUqFFErxFlY4xVnYay8FV%2BHSyETyGxq9F9cfvirKAWxaFsxA%2FrxTLfejU%2F%2FEhX82LrMT%2B2xDxuDytcyIeNzTkwYa1uFY4sXZr4sh1mErVEBb%2F24EUXKrOQ8LNoTPhjgASLk2fWtkcGPUKLz%2B3q4smG7xRgDfSX45TYIbeFZMCBE1FFiirHF3UFzZzgGbN94qz7JZpq%2FQj1cTeRSnF0VB16A9OdohetgDQvCciCGsPJjz0Lr%2B4YMAgZPIn6zsK0sFfMDFltInyEjQmnc8MB5hCyT6NA%2FZ9mByKJS%2FvqNXE1EKatLoJX3tESgbCyMLvcrsQGOqUBAY8KrTj7OrN8No0rGT%2BjD%2FN%2B99wAk%2FyhHFnDaOwVVblGvbbm5EcLheOpNk39fFfMhLyOWAK3CIAVoBFmNeFm4IJA6uSI2VdgmMo3GM0evWI4aeBcDR6m9jdd7x2iNbf7arsgLvsxbUSGLKP5dUOmHwXA%2B%2FtoivWByyLSMZh0R710%2FacmZhtH%2BLJ5suuYiNp%2Fp%2FQl7bmfIuYeunIDjc0tSOQYQcPU&X-Amz-Signature=9200c7ec915eff3a8a3389bc42dabb08e6e45194570a7080b0b17c3894236b05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6Z5QPVV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCS%2B5GHSt6mgvfbrhFqfwfkxA2e2fn7kHvcD8RMsefe3wIgROHrio1mMM0%2FUbP%2BdVMqyBQzWTvOYArIseaxEt%2Bc2FYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbwLWTgjamG%2B4efPyrcA46tvmWuYYIT8bBFnY67xioaCRBaKLpl6ypnzx4onzXCU%2BWtEft7zxCGgRQt7FjqWi6dSRc1bIKQN2Fjdxj0%2BHWMHEH1rhp5Um7BTAKODQ5lXw54y7lH5K1Z0g2VV%2Bnim16XwqT3mZRgJ6iYs%2FTMQH1mk0hKI%2BVwQUfAwwHSMfwZQXOsCSmYUHRaYmb%2FI4%2B4MLaMhcOjV3ytRPtTyS4WwuZvWmxvZm2t7nuZf7E4O%2FvStH7zjove9HqgUsQB2VOW3GIy2l9dKj9BCKQ%2BSDVsPcjXldDXLpeC4InbH9GOc5lpD98%2F8uXCSBeamS1JMWGIB7tUqFFErxFlY4xVnYay8FV%2BHSyETyGxq9F9cfvirKAWxaFsxA%2FrxTLfejU%2F%2FEhX82LrMT%2B2xDxuDytcyIeNzTkwYa1uFY4sXZr4sh1mErVEBb%2F24EUXKrOQ8LNoTPhjgASLk2fWtkcGPUKLz%2B3q4smG7xRgDfSX45TYIbeFZMCBE1FFiirHF3UFzZzgGbN94qz7JZpq%2FQj1cTeRSnF0VB16A9OdohetgDQvCciCGsPJjz0Lr%2B4YMAgZPIn6zsK0sFfMDFltInyEjQmnc8MB5hCyT6NA%2FZ9mByKJS%2FvqNXE1EKatLoJX3tESgbCyMLvcrsQGOqUBAY8KrTj7OrN8No0rGT%2BjD%2FN%2B99wAk%2FyhHFnDaOwVVblGvbbm5EcLheOpNk39fFfMhLyOWAK3CIAVoBFmNeFm4IJA6uSI2VdgmMo3GM0evWI4aeBcDR6m9jdd7x2iNbf7arsgLvsxbUSGLKP5dUOmHwXA%2B%2FtoivWByyLSMZh0R710%2FacmZhtH%2BLJ5suuYiNp%2Fp%2FQl7bmfIuYeunIDjc0tSOQYQcPU&X-Amz-Signature=59608f52d0c9c64de30c0a380656a97fc21393387d9092c9b6542d3135d76075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
