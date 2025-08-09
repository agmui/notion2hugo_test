---
sys:
  pageId: "1d0da3bc-6297-80fb-8efb-e233f8606981"
  createdTime: "2025-04-09T14:40:00.000Z"
  lastEditedTime: "2025-08-02T10:08:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt3 Gazebo setup.md"
title: "Nav2 pt3 Gazebo setup"
date: "2025-08-02T10:08:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 153
toc: false
icon: ""
---

Gazebo is a simulation software suite. It can simulate many kinds of sensors such as Lidar, Depth sense cameras, IMU, and more.

Here is the official [link to their website](https://gazebosim.org/home) if you want to learn more

We are going to set up Gazebo simulation for our project

## Install

```bash
sudo apt install ros-$ROS2_DISTRO-ros-gz
```

### New nodes

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665LUZOGG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg3yVYMAUdd4WFlEnEmY%2Bo2GJB5QtPsACzhPGw4wAF4AIhAL1sj%2BS0On8rbhyMUkrj%2FcGQPAJ26cswuKJbapqnhsccKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiQlpb4h8affdXGlsq3AOufQDf54%2BLvIjLRWS2kQ68VxjZD29ORbipExM5abV0dJDCsC2CYhe4wKGcRD44uvoQxbDNErltA%2FWkTDhiS3b1vN%2FALosnrydf%2BOXJp2Qg7Gz4CWkmgJIIf%2F1oEP8RnSulKNXJsmmM7tApEqqNd%2F3LfOKJrEGRSa65ZC2ygduRciNVtdY9mFBrwEk0Coe9Jv%2B8ncMgQNasLUjsE7oOtZn3R7csesyIQBWeh7NpgNoGLyxU6gl1gHPXEOrL8tT9vELdIS3vq3rNTURcp%2FJ8ZyQoxUzciq%2BQztVcQ7GyuE6KtaieXbhZ6%2B5%2FbUSnJjttsb0GPkMPO0w1u18Ef85B3gdrjw8al1CPC3u2ocT3hq0Fe7ylMXZjQEHp0y%2F2darsl9LUxOjiagUIb1PM6tHyvR4dbUWtUKAjw%2BzcxhogcNqSExJrKEZzGCCb34GYfqcsZQGI9ilugl0xB0HCW66vFGUOTWq%2BYfvspQaaWVwo%2BEXLOuiyLWfEGMRz3Q4bKc0t6D3%2F0Vf2UbG%2B00EMpkGzf%2FBHXNEcFcPc5ZTqOCBMfg7p8IX9Xxent3zZo5S%2BX5r7Y8mb%2FJ7pdtnMhNY2Zhr%2BCKcvou9Zt6avp9yHrHqCQpsmHI70%2BmfpOC6PULMZ6jCj4NzEBjqkAb4cR%2BeMKxyDT0cq15FfmLzoT9%2BOzwnZB5D6ybWyYxFo8%2FEh8jfOqRqqq3sqsHQnhnup4m0QCv%2FT9%2B5gCbT5Etm35RzYjlgu2LxZxpEq4ZfN2NRrughIo%2B0nRGenDJ%2BMKkO5%2FX4MPcBvdCCzVwXnwmWiFL6%2BtyHfakUWEOUu5EMPG6zBCFt6JFY1xhQwfnNNig1WX4MofNQken9vgH0UgIxy8i8w&X-Amz-Signature=d973580fb36525495a998c2ec571088bb5f9d7c201b93ec1316f6fb649933995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**               |
| --------------- | ---------------------- |
| `/joint_states` | sensor_msg/JointState  |
| `/odom`         | nav_msgs/Odometry      |
| `/tf`           | simulated robot joints |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**         | **Type** |
| ---------------- | -------- |
| `config_file`    | file     |
| `world_sdf_file` | file     |

{{< /table >}}

#### description:

Simulates a whole robot and world to debug and test quickly

{{% /alert %}}

In the last guide  was what our nodes looked like

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665LUZOGG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg3yVYMAUdd4WFlEnEmY%2Bo2GJB5QtPsACzhPGw4wAF4AIhAL1sj%2BS0On8rbhyMUkrj%2FcGQPAJ26cswuKJbapqnhsccKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiQlpb4h8affdXGlsq3AOufQDf54%2BLvIjLRWS2kQ68VxjZD29ORbipExM5abV0dJDCsC2CYhe4wKGcRD44uvoQxbDNErltA%2FWkTDhiS3b1vN%2FALosnrydf%2BOXJp2Qg7Gz4CWkmgJIIf%2F1oEP8RnSulKNXJsmmM7tApEqqNd%2F3LfOKJrEGRSa65ZC2ygduRciNVtdY9mFBrwEk0Coe9Jv%2B8ncMgQNasLUjsE7oOtZn3R7csesyIQBWeh7NpgNoGLyxU6gl1gHPXEOrL8tT9vELdIS3vq3rNTURcp%2FJ8ZyQoxUzciq%2BQztVcQ7GyuE6KtaieXbhZ6%2B5%2FbUSnJjttsb0GPkMPO0w1u18Ef85B3gdrjw8al1CPC3u2ocT3hq0Fe7ylMXZjQEHp0y%2F2darsl9LUxOjiagUIb1PM6tHyvR4dbUWtUKAjw%2BzcxhogcNqSExJrKEZzGCCb34GYfqcsZQGI9ilugl0xB0HCW66vFGUOTWq%2BYfvspQaaWVwo%2BEXLOuiyLWfEGMRz3Q4bKc0t6D3%2F0Vf2UbG%2B00EMpkGzf%2FBHXNEcFcPc5ZTqOCBMfg7p8IX9Xxent3zZo5S%2BX5r7Y8mb%2FJ7pdtnMhNY2Zhr%2BCKcvou9Zt6avp9yHrHqCQpsmHI70%2BmfpOC6PULMZ6jCj4NzEBjqkAb4cR%2BeMKxyDT0cq15FfmLzoT9%2BOzwnZB5D6ybWyYxFo8%2FEh8jfOqRqqq3sqsHQnhnup4m0QCv%2FT9%2B5gCbT5Etm35RzYjlgu2LxZxpEq4ZfN2NRrughIo%2B0nRGenDJ%2BMKkO5%2FX4MPcBvdCCzVwXnwmWiFL6%2BtyHfakUWEOUu5EMPG6zBCFt6JFY1xhQwfnNNig1WX4MofNQken9vgH0UgIxy8i8w&X-Amz-Signature=c3119d2569fbc7f3b60f24515894dbf5b854ec5043e8cb2877fd3d4639c28969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665LUZOGG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg3yVYMAUdd4WFlEnEmY%2Bo2GJB5QtPsACzhPGw4wAF4AIhAL1sj%2BS0On8rbhyMUkrj%2FcGQPAJ26cswuKJbapqnhsccKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiQlpb4h8affdXGlsq3AOufQDf54%2BLvIjLRWS2kQ68VxjZD29ORbipExM5abV0dJDCsC2CYhe4wKGcRD44uvoQxbDNErltA%2FWkTDhiS3b1vN%2FALosnrydf%2BOXJp2Qg7Gz4CWkmgJIIf%2F1oEP8RnSulKNXJsmmM7tApEqqNd%2F3LfOKJrEGRSa65ZC2ygduRciNVtdY9mFBrwEk0Coe9Jv%2B8ncMgQNasLUjsE7oOtZn3R7csesyIQBWeh7NpgNoGLyxU6gl1gHPXEOrL8tT9vELdIS3vq3rNTURcp%2FJ8ZyQoxUzciq%2BQztVcQ7GyuE6KtaieXbhZ6%2B5%2FbUSnJjttsb0GPkMPO0w1u18Ef85B3gdrjw8al1CPC3u2ocT3hq0Fe7ylMXZjQEHp0y%2F2darsl9LUxOjiagUIb1PM6tHyvR4dbUWtUKAjw%2BzcxhogcNqSExJrKEZzGCCb34GYfqcsZQGI9ilugl0xB0HCW66vFGUOTWq%2BYfvspQaaWVwo%2BEXLOuiyLWfEGMRz3Q4bKc0t6D3%2F0Vf2UbG%2B00EMpkGzf%2FBHXNEcFcPc5ZTqOCBMfg7p8IX9Xxent3zZo5S%2BX5r7Y8mb%2FJ7pdtnMhNY2Zhr%2BCKcvou9Zt6avp9yHrHqCQpsmHI70%2BmfpOC6PULMZ6jCj4NzEBjqkAb4cR%2BeMKxyDT0cq15FfmLzoT9%2BOzwnZB5D6ybWyYxFo8%2FEh8jfOqRqqq3sqsHQnhnup4m0QCv%2FT9%2B5gCbT5Etm35RzYjlgu2LxZxpEq4ZfN2NRrughIo%2B0nRGenDJ%2BMKkO5%2FX4MPcBvdCCzVwXnwmWiFL6%2BtyHfakUWEOUu5EMPG6zBCFt6JFY1xhQwfnNNig1WX4MofNQken9vgH0UgIxy8i8w&X-Amz-Signature=6c12fd19589468cec9024d8eab2e076b59326edcffb24fb3491e14f1b2fd58d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665LUZOGG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg3yVYMAUdd4WFlEnEmY%2Bo2GJB5QtPsACzhPGw4wAF4AIhAL1sj%2BS0On8rbhyMUkrj%2FcGQPAJ26cswuKJbapqnhsccKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiQlpb4h8affdXGlsq3AOufQDf54%2BLvIjLRWS2kQ68VxjZD29ORbipExM5abV0dJDCsC2CYhe4wKGcRD44uvoQxbDNErltA%2FWkTDhiS3b1vN%2FALosnrydf%2BOXJp2Qg7Gz4CWkmgJIIf%2F1oEP8RnSulKNXJsmmM7tApEqqNd%2F3LfOKJrEGRSa65ZC2ygduRciNVtdY9mFBrwEk0Coe9Jv%2B8ncMgQNasLUjsE7oOtZn3R7csesyIQBWeh7NpgNoGLyxU6gl1gHPXEOrL8tT9vELdIS3vq3rNTURcp%2FJ8ZyQoxUzciq%2BQztVcQ7GyuE6KtaieXbhZ6%2B5%2FbUSnJjttsb0GPkMPO0w1u18Ef85B3gdrjw8al1CPC3u2ocT3hq0Fe7ylMXZjQEHp0y%2F2darsl9LUxOjiagUIb1PM6tHyvR4dbUWtUKAjw%2BzcxhogcNqSExJrKEZzGCCb34GYfqcsZQGI9ilugl0xB0HCW66vFGUOTWq%2BYfvspQaaWVwo%2BEXLOuiyLWfEGMRz3Q4bKc0t6D3%2F0Vf2UbG%2B00EMpkGzf%2FBHXNEcFcPc5ZTqOCBMfg7p8IX9Xxent3zZo5S%2BX5r7Y8mb%2FJ7pdtnMhNY2Zhr%2BCKcvou9Zt6avp9yHrHqCQpsmHI70%2BmfpOC6PULMZ6jCj4NzEBjqkAb4cR%2BeMKxyDT0cq15FfmLzoT9%2BOzwnZB5D6ybWyYxFo8%2FEh8jfOqRqqq3sqsHQnhnup4m0QCv%2FT9%2B5gCbT5Etm35RzYjlgu2LxZxpEq4ZfN2NRrughIo%2B0nRGenDJ%2BMKkO5%2FX4MPcBvdCCzVwXnwmWiFL6%2BtyHfakUWEOUu5EMPG6zBCFt6JFY1xhQwfnNNig1WX4MofNQken9vgH0UgIxy8i8w&X-Amz-Signature=0000e528b545593a53d47ba56acc7586cea72a935e5b60732836d5d8b33a0b12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

paste this inside `bridge_config.yaml`. 

This file just describes what topics to _bridge_ between ROS and Gazebo

```yaml
---
- ros_topic_name: "/clock"
  gz_topic_name: "/clock"
  ros_type_name: "rosgraph_msgs/msg/Clock"
  gz_type_name: "gz.msgs.Clock"
  direction: GZ_TO_ROS

# Topic published by DiffDrive plugin
- ros_topic_name: "/odom"
  gz_topic_name: "/odom"
  ros_type_name: "nav_msgs/msg/Odometry"
  gz_type_name: "gz.msgs.Odometry"
  direction: GZ_TO_ROS

# Topic published by JointStatePublisher plugin
- ros_topic_name: "/joint_states"
  gz_topic_name: "/joint_states"
  ros_type_name: "sensor_msgs/msg/JointState"
  gz_type_name: "gz.msgs.Model"
  direction: GZ_TO_ROS

# Topic subscribed to by DiffDrive plugin
- ros_topic_name: "/cmd_vel"
  gz_topic_name: "/cmd_vel"
  ros_type_name: "geometry_msgs/msg/TwistStamped"
  gz_type_name: "gz.msgs.Twist"
  direction: ROS_TO_GZ

- ros_topic_name: "/tf"
  gz_topic_name: "/tf"
  ros_type_name: "tf2_msgs/msg/TFMessage"
  gz_type_name: "gz.msgs.Pose_V"
  direction: GZ_TO_ROS
```

## Updating `urdf`

To be able to drive the robot in Gazebo we need to add this plugin at the bottom of our `mbot_description.urdf` **right before the** **`</robot>`** **tag**.

This plugin does emulates most of what `my_node` did.

```xml

  <gazebo>
    <plugin filename="gz-sim-diff-drive-system" name="gz::sim::systems::DiffDrive">
      <!-- wheels -->
      <left_joint>drivewhl_l_joint</left_joint>
      <right_joint>drivewhl_r_joint</right_joint>

      <!-- kinematics -->
      <wheel_separation>0.4</wheel_separation>
      <wheel_radius>${wheel_radius}</wheel_radius>

      <!-- limits -->
      <max_linear_acceleration>1.0</max_linear_acceleration>

      <!-- input -->
      <topic>/cmd_vel</topic>

      <!-- output -->
      <odom_topic>/odom</odom_topic>
      <tf_topic>/tf</tf_topic>

      <frame_id>odom</frame_id>
      <child_frame_id>base_link</child_frame_id>
    </plugin>

    <plugin
      filename="gz-sim-joint-state-publisher-system"
      name="gz::sim::systems::JointStatePublisher">
      <topic>joint_states</topic>
    </plugin>
  </gazebo>
```

We also need to simulate friction on the wheels or else the robot will not be able to move in the sim.

Add the friction tag in the wheel macro we made: 

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
    <link name="${prefix}_link">
      <visual>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
            <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
        <material name="Gray">
          <color rgba="0.5 0.5 0.5 1.0"/>
        </material>
      </visual>

      <collision>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>

        <surface><friction><ode>
          <mu>1.0</mu>
          <mu2>1.0</mu2>
        </ode></friction></surface>
      </collision>

      <xacro:cylinder_inertia m="0.5" r="${wheel_radius}" h="${wheel_width}"/>
    </link>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUY6VWWI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTnUGXZopmJqfxqHG6WcFNR3A5z7vYpRHVopK5%2FDEPwIhAJsvZbMqPZ4LJBNcZRz5ESPyPnn2QXJUmPUK7ghQeleMKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzYZGjl9gS6MYeVGwq3ANBdmN1uc%2F3nedRgoRUnyMOxNOKU4q1WLNtdz4e2AWwUkROcxZm%2FeNWzYnr%2BpbpIwzRshz6Rcz9t%2BN%2F9PykmZ6GjBzwy01baZn2DdFBaEli%2FJU2iLNTmAtevC9j5dj7ai1kMdbxoF8lLa1cjDPF9X5jQlY%2B%2BzHUn8%2Ffj0Wlhw8DY8qE2QafQnVmG8b5TRkKm2BNP5VlWE9p0OpeDy%2BgbL5yWNZXtqpYWrQj41189iT%2BNkexeOQLTnFfEAtyUU28nCMh8E9nVarX1O%2F4nJ5hcK0QDXA1L9legiifqSTkK7r8Ezv4URi%2FVL2uQA2gJC%2FDWR8%2BoWgrE%2BhEm87hZ%2F9YPc%2BcgFW2OEm5bQcPMm83pFuw0rAwaEffbRiASrRXj4V7WBhDLoN39ZJfamSmmfQ1GNKr4P%2BEtVkxj%2BZ%2FYLvjmOze2BleXarkZ6Wgn097F9zV6KvnJuBl7aqJnIc38GRw064dYZcNIMhCXxoaxPu8V%2BT18Rs18%2FfoozZ4YcM0VqG7rDPrGsNybRPyRaJ1jqL0GqUURiaxMyKIO3t2BwIWK1BwhmJUZba9nZDJUU5oazKPJ1iWg3yu3tZuP6xiw7ym%2Fd%2F8QMw6Cc2G4xg7jwdhMkI4Lwx6HQLBs1cdYbDPRDDm5NzEBjqkAZQ4MxL0YjdsxTMv4MmwNt%2FfWl%2FnZ3sFPchWoip3T9zgYSW%2FwEqzb30GRYCGoKN80b9CsdGlElAb0lLYkATuhQwqlliD0uD73vzVzxXRaoueIVDWsFXCZcqJnq9IDW7DOj2%2FfTL0XQTxFvO61HORBcmdaccUpQPCyz8eWSA7HbwKqTS1KStlhO3UQKV%2BuFBBK8%2BUVqND%2FReVyuVVPEfngvqwdgDn&X-Amz-Signature=74657a3732c6aae09ec5e8ddfbd8b031a072052ff8cbb4434c5ed4beaad94d21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665LUZOGG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg3yVYMAUdd4WFlEnEmY%2Bo2GJB5QtPsACzhPGw4wAF4AIhAL1sj%2BS0On8rbhyMUkrj%2FcGQPAJ26cswuKJbapqnhsccKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiQlpb4h8affdXGlsq3AOufQDf54%2BLvIjLRWS2kQ68VxjZD29ORbipExM5abV0dJDCsC2CYhe4wKGcRD44uvoQxbDNErltA%2FWkTDhiS3b1vN%2FALosnrydf%2BOXJp2Qg7Gz4CWkmgJIIf%2F1oEP8RnSulKNXJsmmM7tApEqqNd%2F3LfOKJrEGRSa65ZC2ygduRciNVtdY9mFBrwEk0Coe9Jv%2B8ncMgQNasLUjsE7oOtZn3R7csesyIQBWeh7NpgNoGLyxU6gl1gHPXEOrL8tT9vELdIS3vq3rNTURcp%2FJ8ZyQoxUzciq%2BQztVcQ7GyuE6KtaieXbhZ6%2B5%2FbUSnJjttsb0GPkMPO0w1u18Ef85B3gdrjw8al1CPC3u2ocT3hq0Fe7ylMXZjQEHp0y%2F2darsl9LUxOjiagUIb1PM6tHyvR4dbUWtUKAjw%2BzcxhogcNqSExJrKEZzGCCb34GYfqcsZQGI9ilugl0xB0HCW66vFGUOTWq%2BYfvspQaaWVwo%2BEXLOuiyLWfEGMRz3Q4bKc0t6D3%2F0Vf2UbG%2B00EMpkGzf%2FBHXNEcFcPc5ZTqOCBMfg7p8IX9Xxent3zZo5S%2BX5r7Y8mb%2FJ7pdtnMhNY2Zhr%2BCKcvou9Zt6avp9yHrHqCQpsmHI70%2BmfpOC6PULMZ6jCj4NzEBjqkAb4cR%2BeMKxyDT0cq15FfmLzoT9%2BOzwnZB5D6ybWyYxFo8%2FEh8jfOqRqqq3sqsHQnhnup4m0QCv%2FT9%2B5gCbT5Etm35RzYjlgu2LxZxpEq4ZfN2NRrughIo%2B0nRGenDJ%2BMKkO5%2FX4MPcBvdCCzVwXnwmWiFL6%2BtyHfakUWEOUu5EMPG6zBCFt6JFY1xhQwfnNNig1WX4MofNQken9vgH0UgIxy8i8w&X-Amz-Signature=0221fb400bc81a05fcbd8f0db82432be3a3eee7cd047cd2f2f3a6449b3b60917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665LUZOGG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg3yVYMAUdd4WFlEnEmY%2Bo2GJB5QtPsACzhPGw4wAF4AIhAL1sj%2BS0On8rbhyMUkrj%2FcGQPAJ26cswuKJbapqnhsccKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiQlpb4h8affdXGlsq3AOufQDf54%2BLvIjLRWS2kQ68VxjZD29ORbipExM5abV0dJDCsC2CYhe4wKGcRD44uvoQxbDNErltA%2FWkTDhiS3b1vN%2FALosnrydf%2BOXJp2Qg7Gz4CWkmgJIIf%2F1oEP8RnSulKNXJsmmM7tApEqqNd%2F3LfOKJrEGRSa65ZC2ygduRciNVtdY9mFBrwEk0Coe9Jv%2B8ncMgQNasLUjsE7oOtZn3R7csesyIQBWeh7NpgNoGLyxU6gl1gHPXEOrL8tT9vELdIS3vq3rNTURcp%2FJ8ZyQoxUzciq%2BQztVcQ7GyuE6KtaieXbhZ6%2B5%2FbUSnJjttsb0GPkMPO0w1u18Ef85B3gdrjw8al1CPC3u2ocT3hq0Fe7ylMXZjQEHp0y%2F2darsl9LUxOjiagUIb1PM6tHyvR4dbUWtUKAjw%2BzcxhogcNqSExJrKEZzGCCb34GYfqcsZQGI9ilugl0xB0HCW66vFGUOTWq%2BYfvspQaaWVwo%2BEXLOuiyLWfEGMRz3Q4bKc0t6D3%2F0Vf2UbG%2B00EMpkGzf%2FBHXNEcFcPc5ZTqOCBMfg7p8IX9Xxent3zZo5S%2BX5r7Y8mb%2FJ7pdtnMhNY2Zhr%2BCKcvou9Zt6avp9yHrHqCQpsmHI70%2BmfpOC6PULMZ6jCj4NzEBjqkAb4cR%2BeMKxyDT0cq15FfmLzoT9%2BOzwnZB5D6ybWyYxFo8%2FEh8jfOqRqqq3sqsHQnhnup4m0QCv%2FT9%2B5gCbT5Etm35RzYjlgu2LxZxpEq4ZfN2NRrughIo%2B0nRGenDJ%2BMKkO5%2FX4MPcBvdCCzVwXnwmWiFL6%2BtyHfakUWEOUu5EMPG6zBCFt6JFY1xhQwfnNNig1WX4MofNQken9vgH0UgIxy8i8w&X-Amz-Signature=a80f9cf678828767149adc48d26670cf3ca9421ce2aa66326ab1f0a7dabc668f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665LUZOGG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg3yVYMAUdd4WFlEnEmY%2Bo2GJB5QtPsACzhPGw4wAF4AIhAL1sj%2BS0On8rbhyMUkrj%2FcGQPAJ26cswuKJbapqnhsccKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiQlpb4h8affdXGlsq3AOufQDf54%2BLvIjLRWS2kQ68VxjZD29ORbipExM5abV0dJDCsC2CYhe4wKGcRD44uvoQxbDNErltA%2FWkTDhiS3b1vN%2FALosnrydf%2BOXJp2Qg7Gz4CWkmgJIIf%2F1oEP8RnSulKNXJsmmM7tApEqqNd%2F3LfOKJrEGRSa65ZC2ygduRciNVtdY9mFBrwEk0Coe9Jv%2B8ncMgQNasLUjsE7oOtZn3R7csesyIQBWeh7NpgNoGLyxU6gl1gHPXEOrL8tT9vELdIS3vq3rNTURcp%2FJ8ZyQoxUzciq%2BQztVcQ7GyuE6KtaieXbhZ6%2B5%2FbUSnJjttsb0GPkMPO0w1u18Ef85B3gdrjw8al1CPC3u2ocT3hq0Fe7ylMXZjQEHp0y%2F2darsl9LUxOjiagUIb1PM6tHyvR4dbUWtUKAjw%2BzcxhogcNqSExJrKEZzGCCb34GYfqcsZQGI9ilugl0xB0HCW66vFGUOTWq%2BYfvspQaaWVwo%2BEXLOuiyLWfEGMRz3Q4bKc0t6D3%2F0Vf2UbG%2B00EMpkGzf%2FBHXNEcFcPc5ZTqOCBMfg7p8IX9Xxent3zZo5S%2BX5r7Y8mb%2FJ7pdtnMhNY2Zhr%2BCKcvou9Zt6avp9yHrHqCQpsmHI70%2BmfpOC6PULMZ6jCj4NzEBjqkAb4cR%2BeMKxyDT0cq15FfmLzoT9%2BOzwnZB5D6ybWyYxFo8%2FEh8jfOqRqqq3sqsHQnhnup4m0QCv%2FT9%2B5gCbT5Etm35RzYjlgu2LxZxpEq4ZfN2NRrughIo%2B0nRGenDJ%2BMKkO5%2FX4MPcBvdCCzVwXnwmWiFL6%2BtyHfakUWEOUu5EMPG6zBCFt6JFY1xhQwfnNNig1WX4MofNQken9vgH0UgIxy8i8w&X-Amz-Signature=06206b5b4db20e8425100a969aed12c2f6103a54bf0dc9eb53b79401aea959cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665LUZOGG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg3yVYMAUdd4WFlEnEmY%2Bo2GJB5QtPsACzhPGw4wAF4AIhAL1sj%2BS0On8rbhyMUkrj%2FcGQPAJ26cswuKJbapqnhsccKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiQlpb4h8affdXGlsq3AOufQDf54%2BLvIjLRWS2kQ68VxjZD29ORbipExM5abV0dJDCsC2CYhe4wKGcRD44uvoQxbDNErltA%2FWkTDhiS3b1vN%2FALosnrydf%2BOXJp2Qg7Gz4CWkmgJIIf%2F1oEP8RnSulKNXJsmmM7tApEqqNd%2F3LfOKJrEGRSa65ZC2ygduRciNVtdY9mFBrwEk0Coe9Jv%2B8ncMgQNasLUjsE7oOtZn3R7csesyIQBWeh7NpgNoGLyxU6gl1gHPXEOrL8tT9vELdIS3vq3rNTURcp%2FJ8ZyQoxUzciq%2BQztVcQ7GyuE6KtaieXbhZ6%2B5%2FbUSnJjttsb0GPkMPO0w1u18Ef85B3gdrjw8al1CPC3u2ocT3hq0Fe7ylMXZjQEHp0y%2F2darsl9LUxOjiagUIb1PM6tHyvR4dbUWtUKAjw%2BzcxhogcNqSExJrKEZzGCCb34GYfqcsZQGI9ilugl0xB0HCW66vFGUOTWq%2BYfvspQaaWVwo%2BEXLOuiyLWfEGMRz3Q4bKc0t6D3%2F0Vf2UbG%2B00EMpkGzf%2FBHXNEcFcPc5ZTqOCBMfg7p8IX9Xxent3zZo5S%2BX5r7Y8mb%2FJ7pdtnMhNY2Zhr%2BCKcvou9Zt6avp9yHrHqCQpsmHI70%2BmfpOC6PULMZ6jCj4NzEBjqkAb4cR%2BeMKxyDT0cq15FfmLzoT9%2BOzwnZB5D6ybWyYxFo8%2FEh8jfOqRqqq3sqsHQnhnup4m0QCv%2FT9%2B5gCbT5Etm35RzYjlgu2LxZxpEq4ZfN2NRrughIo%2B0nRGenDJ%2BMKkO5%2FX4MPcBvdCCzVwXnwmWiFL6%2BtyHfakUWEOUu5EMPG6zBCFt6JFY1xhQwfnNNig1WX4MofNQken9vgH0UgIxy8i8w&X-Amz-Signature=52d92d51d78e6b105b32c6459823eaa7f76eff7ff81d5f81ac2707c515d30b02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If you want to make a custom world here is a [guide from Articulated Robotics](https://www.youtube.com/watch?v=K4rHglJW7Hg) on how to do so

{{% /alert %}}

## Adding Gazebo to launch file

Finally to update the launch file we have to get the `bridge_config.yaml` and `my_world.sdf`

```python
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    
    robot_state_publisher_node = Node(
    ...
```

We also must add the `use_sim_time` parameter to `robot_state_publisher` because we are using a simulator 

```python
    robot_state_publisher_node = Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', default_model_path])},
        {'use_sim_time': LaunchConfiguration('use_sim_time')}]
    )
```

Here are the nodes required to start Gazebo

```python
    gz_server = GzServer(
        world_sdf_file=world_path,
        container_name='ros_gz_container',
        create_own_container='True',
        use_composition='True',
    )
    ros_gz_bridge = RosGzBridge(
        bridge_name='ros_gz_bridge',
        config_file=bridge_config_path,
        container_name='ros_gz_container',
        create_own_container='False',
        use_composition='True',
    )
    ros_gz_sim_share = get_package_share_directory('ros_gz_sim')
    gz_spawn_model_launch_source = os.path.join(ros_gz_sim_share, "launch", "gz_spawn_model.launch.py")
    spawn_entity = IncludeLaunchDescription(
        PythonLaunchDescriptionSource(gz_spawn_model_launch_source),
        launch_arguments={
            'world': 'my_world',
            'topic': '/robot_description',
            'entity_name': 'mbot',
            'z': '0.65',
        }.items(),
    )
```

At the bottem remember to comment out `my_node` and swap it out for the Gazebo nodes

```python

    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        # my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz
        
        # stuff to start gazebo
        ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        gz_server,
        ros_gz_bridge,
        spawn_entity,
    ])
```

Remember to build because we added `bridge_config.yaml` and `my_world.sdf` to the package

```bash
colcon build --symlink-install
```

To run add the new argument `use_sim_time:=True` to correctly use Gazebo

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

{{% alert context="warning" %}}

# Always use `use_sim_time:=True` flag when using Gazebo

{{% /alert %}}

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665LUZOGG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg3yVYMAUdd4WFlEnEmY%2Bo2GJB5QtPsACzhPGw4wAF4AIhAL1sj%2BS0On8rbhyMUkrj%2FcGQPAJ26cswuKJbapqnhsccKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiQlpb4h8affdXGlsq3AOufQDf54%2BLvIjLRWS2kQ68VxjZD29ORbipExM5abV0dJDCsC2CYhe4wKGcRD44uvoQxbDNErltA%2FWkTDhiS3b1vN%2FALosnrydf%2BOXJp2Qg7Gz4CWkmgJIIf%2F1oEP8RnSulKNXJsmmM7tApEqqNd%2F3LfOKJrEGRSa65ZC2ygduRciNVtdY9mFBrwEk0Coe9Jv%2B8ncMgQNasLUjsE7oOtZn3R7csesyIQBWeh7NpgNoGLyxU6gl1gHPXEOrL8tT9vELdIS3vq3rNTURcp%2FJ8ZyQoxUzciq%2BQztVcQ7GyuE6KtaieXbhZ6%2B5%2FbUSnJjttsb0GPkMPO0w1u18Ef85B3gdrjw8al1CPC3u2ocT3hq0Fe7ylMXZjQEHp0y%2F2darsl9LUxOjiagUIb1PM6tHyvR4dbUWtUKAjw%2BzcxhogcNqSExJrKEZzGCCb34GYfqcsZQGI9ilugl0xB0HCW66vFGUOTWq%2BYfvspQaaWVwo%2BEXLOuiyLWfEGMRz3Q4bKc0t6D3%2F0Vf2UbG%2B00EMpkGzf%2FBHXNEcFcPc5ZTqOCBMfg7p8IX9Xxent3zZo5S%2BX5r7Y8mb%2FJ7pdtnMhNY2Zhr%2BCKcvou9Zt6avp9yHrHqCQpsmHI70%2BmfpOC6PULMZ6jCj4NzEBjqkAb4cR%2BeMKxyDT0cq15FfmLzoT9%2BOzwnZB5D6ybWyYxFo8%2FEh8jfOqRqqq3sqsHQnhnup4m0QCv%2FT9%2B5gCbT5Etm35RzYjlgu2LxZxpEq4ZfN2NRrughIo%2B0nRGenDJ%2BMKkO5%2FX4MPcBvdCCzVwXnwmWiFL6%2BtyHfakUWEOUu5EMPG6zBCFt6JFY1xhQwfnNNig1WX4MofNQken9vgH0UgIxy8i8w&X-Amz-Signature=cbddb4941a2c131bf608f063ecc77cadd6955c7134f48fc9374828ea2c2fa8eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665LUZOGG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg3yVYMAUdd4WFlEnEmY%2Bo2GJB5QtPsACzhPGw4wAF4AIhAL1sj%2BS0On8rbhyMUkrj%2FcGQPAJ26cswuKJbapqnhsccKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiQlpb4h8affdXGlsq3AOufQDf54%2BLvIjLRWS2kQ68VxjZD29ORbipExM5abV0dJDCsC2CYhe4wKGcRD44uvoQxbDNErltA%2FWkTDhiS3b1vN%2FALosnrydf%2BOXJp2Qg7Gz4CWkmgJIIf%2F1oEP8RnSulKNXJsmmM7tApEqqNd%2F3LfOKJrEGRSa65ZC2ygduRciNVtdY9mFBrwEk0Coe9Jv%2B8ncMgQNasLUjsE7oOtZn3R7csesyIQBWeh7NpgNoGLyxU6gl1gHPXEOrL8tT9vELdIS3vq3rNTURcp%2FJ8ZyQoxUzciq%2BQztVcQ7GyuE6KtaieXbhZ6%2B5%2FbUSnJjttsb0GPkMPO0w1u18Ef85B3gdrjw8al1CPC3u2ocT3hq0Fe7ylMXZjQEHp0y%2F2darsl9LUxOjiagUIb1PM6tHyvR4dbUWtUKAjw%2BzcxhogcNqSExJrKEZzGCCb34GYfqcsZQGI9ilugl0xB0HCW66vFGUOTWq%2BYfvspQaaWVwo%2BEXLOuiyLWfEGMRz3Q4bKc0t6D3%2F0Vf2UbG%2B00EMpkGzf%2FBHXNEcFcPc5ZTqOCBMfg7p8IX9Xxent3zZo5S%2BX5r7Y8mb%2FJ7pdtnMhNY2Zhr%2BCKcvou9Zt6avp9yHrHqCQpsmHI70%2BmfpOC6PULMZ6jCj4NzEBjqkAb4cR%2BeMKxyDT0cq15FfmLzoT9%2BOzwnZB5D6ybWyYxFo8%2FEh8jfOqRqqq3sqsHQnhnup4m0QCv%2FT9%2B5gCbT5Etm35RzYjlgu2LxZxpEq4ZfN2NRrughIo%2B0nRGenDJ%2BMKkO5%2FX4MPcBvdCCzVwXnwmWiFL6%2BtyHfakUWEOUu5EMPG6zBCFt6JFY1xhQwfnNNig1WX4MofNQken9vgH0UgIxy8i8w&X-Amz-Signature=828931cc6f328bb84d87ac8589300a4175a4dceff3e1c5752443ca4736c609e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
