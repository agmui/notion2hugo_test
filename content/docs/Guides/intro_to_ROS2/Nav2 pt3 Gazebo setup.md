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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZM3ECX2%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIG4UxftynwiYqjC%2FscZipYMR5aQbQruCRbo3iCoBHdjBAiEA2sWoZOzUSwofjqeMLyi6XX498W6m2PvoF7ku%2B%2F6pQ%2Bcq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDPJWuec7%2BvigIZE1XyrcA%2FmwWBnBPNFd2IT5c39MHn0NiQ%2Brxm%2B0V2rx%2BEFW7tMrsy7ATCiL2y5VFICVe%2BijmuTcDirSP5PxwhX%2FJo5ZcShVczBB9gKidjF0yBCW833V9Ly8pvLSo05iiW6rtgTpDGIuyw%2BHpFu5VYXJWVD97dF5MVnM%2F0dIlxLaJvE2e%2F4sjdDuzTiGLRMAUUOP3OhacJEwpb%2Bit4iVja%2FQcaQha%2FiOOaPEatUlRHz%2BSMTGs0z3i1IoWEHpF7rCE8X%2BuA5gY2I2MZ4BC%2FOVbdZWv4Erb5m8lLRy8axKoyWtAYdvltbuxextlDCWY5cWjz8KiWK1N1WxxALXoOCF6nwyBaPD6TuX6WBNsXZFi2PXLOb30lN5XzhdK%2FFe9veZJytarBGbjTMylw5jBSl8CbcthKJpf8x8U1WbNTWFwRRvOLP1ltBylPRkO4ZgdJWUelSeYbwB6j8B99i%2BM76qRhzW%2FjUVGGvBeG%2FKUUu4uxr%2Bl%2B6p75d7hoDEaHM8BoMJ8cUFDV0YHq7tPga6MqOjUaPWcYqp%2Fsch6rWlS1xYYH7DmC1%2BL0mn7bhrLjRcyFokzYVLq%2FELcyMdiIL12cAE3JjNqe3ZVYz69V%2FAOwY1pa8WHm1Isf%2FclGoIzifRwHNYmvuDMLvOm8sGOqUBLxgbtlvYbAR2SzdwdJowQXlw3JMnQHDwC%2BdvGpsdq1g2%2FrtceurYB5bTJJvqiNzohjYtELlsMd5Gf965%2B8QtTcrGOuJI%2Fg%2BEK2tYL3KXbuHed4yvXPTFVKXcFhEpy3Vysjt3SzvQK8zrJIiJWYB%2Fc9cNNkv6gdO%2FqwTPJS0eH6k5qFaiUIqkG6YdtPShpD5EDqp9GlPZ8ymznymocTKUogNJvovb&X-Amz-Signature=3385158cc85b1df444bb59637e0969a48565547a42c91ac5d1f2e155977de907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}


#### Outputs:

| **Name**        | **Type**               |
| --------------- | ---------------------- |
| `/joint_states` | sensor_msg/JointState  |
| `/odom`         | nav_msgs/Odometry      |
| `/tf`           | simulated robot joints |

#### Params:

| **Name**         | **Type** |
| ---------------- | -------- |
| `config_file`    | file     |
| `world_sdf_file` | file     |

#### description:

Simulates a whole robot and world to debug and test quickly

{{% /alert %}}

In the last guide  was what our nodes looked like

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZM3ECX2%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIG4UxftynwiYqjC%2FscZipYMR5aQbQruCRbo3iCoBHdjBAiEA2sWoZOzUSwofjqeMLyi6XX498W6m2PvoF7ku%2B%2F6pQ%2Bcq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDPJWuec7%2BvigIZE1XyrcA%2FmwWBnBPNFd2IT5c39MHn0NiQ%2Brxm%2B0V2rx%2BEFW7tMrsy7ATCiL2y5VFICVe%2BijmuTcDirSP5PxwhX%2FJo5ZcShVczBB9gKidjF0yBCW833V9Ly8pvLSo05iiW6rtgTpDGIuyw%2BHpFu5VYXJWVD97dF5MVnM%2F0dIlxLaJvE2e%2F4sjdDuzTiGLRMAUUOP3OhacJEwpb%2Bit4iVja%2FQcaQha%2FiOOaPEatUlRHz%2BSMTGs0z3i1IoWEHpF7rCE8X%2BuA5gY2I2MZ4BC%2FOVbdZWv4Erb5m8lLRy8axKoyWtAYdvltbuxextlDCWY5cWjz8KiWK1N1WxxALXoOCF6nwyBaPD6TuX6WBNsXZFi2PXLOb30lN5XzhdK%2FFe9veZJytarBGbjTMylw5jBSl8CbcthKJpf8x8U1WbNTWFwRRvOLP1ltBylPRkO4ZgdJWUelSeYbwB6j8B99i%2BM76qRhzW%2FjUVGGvBeG%2FKUUu4uxr%2Bl%2B6p75d7hoDEaHM8BoMJ8cUFDV0YHq7tPga6MqOjUaPWcYqp%2Fsch6rWlS1xYYH7DmC1%2BL0mn7bhrLjRcyFokzYVLq%2FELcyMdiIL12cAE3JjNqe3ZVYz69V%2FAOwY1pa8WHm1Isf%2FclGoIzifRwHNYmvuDMLvOm8sGOqUBLxgbtlvYbAR2SzdwdJowQXlw3JMnQHDwC%2BdvGpsdq1g2%2FrtceurYB5bTJJvqiNzohjYtELlsMd5Gf965%2B8QtTcrGOuJI%2Fg%2BEK2tYL3KXbuHed4yvXPTFVKXcFhEpy3Vysjt3SzvQK8zrJIiJWYB%2Fc9cNNkv6gdO%2FqwTPJS0eH6k5qFaiUIqkG6YdtPShpD5EDqp9GlPZ8ymznymocTKUogNJvovb&X-Amz-Signature=8e5c59cda7d5fa7bf3d092397d6dcf6df9a315f2e8187f563e6d0bc15ef8ff44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZM3ECX2%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIG4UxftynwiYqjC%2FscZipYMR5aQbQruCRbo3iCoBHdjBAiEA2sWoZOzUSwofjqeMLyi6XX498W6m2PvoF7ku%2B%2F6pQ%2Bcq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDPJWuec7%2BvigIZE1XyrcA%2FmwWBnBPNFd2IT5c39MHn0NiQ%2Brxm%2B0V2rx%2BEFW7tMrsy7ATCiL2y5VFICVe%2BijmuTcDirSP5PxwhX%2FJo5ZcShVczBB9gKidjF0yBCW833V9Ly8pvLSo05iiW6rtgTpDGIuyw%2BHpFu5VYXJWVD97dF5MVnM%2F0dIlxLaJvE2e%2F4sjdDuzTiGLRMAUUOP3OhacJEwpb%2Bit4iVja%2FQcaQha%2FiOOaPEatUlRHz%2BSMTGs0z3i1IoWEHpF7rCE8X%2BuA5gY2I2MZ4BC%2FOVbdZWv4Erb5m8lLRy8axKoyWtAYdvltbuxextlDCWY5cWjz8KiWK1N1WxxALXoOCF6nwyBaPD6TuX6WBNsXZFi2PXLOb30lN5XzhdK%2FFe9veZJytarBGbjTMylw5jBSl8CbcthKJpf8x8U1WbNTWFwRRvOLP1ltBylPRkO4ZgdJWUelSeYbwB6j8B99i%2BM76qRhzW%2FjUVGGvBeG%2FKUUu4uxr%2Bl%2B6p75d7hoDEaHM8BoMJ8cUFDV0YHq7tPga6MqOjUaPWcYqp%2Fsch6rWlS1xYYH7DmC1%2BL0mn7bhrLjRcyFokzYVLq%2FELcyMdiIL12cAE3JjNqe3ZVYz69V%2FAOwY1pa8WHm1Isf%2FclGoIzifRwHNYmvuDMLvOm8sGOqUBLxgbtlvYbAR2SzdwdJowQXlw3JMnQHDwC%2BdvGpsdq1g2%2FrtceurYB5bTJJvqiNzohjYtELlsMd5Gf965%2B8QtTcrGOuJI%2Fg%2BEK2tYL3KXbuHed4yvXPTFVKXcFhEpy3Vysjt3SzvQK8zrJIiJWYB%2Fc9cNNkv6gdO%2FqwTPJS0eH6k5qFaiUIqkG6YdtPShpD5EDqp9GlPZ8ymznymocTKUogNJvovb&X-Amz-Signature=bd63c5ed6228da588096200ba68bda95518c78086e9ca1dabb1d03c8031e495b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZM3ECX2%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIG4UxftynwiYqjC%2FscZipYMR5aQbQruCRbo3iCoBHdjBAiEA2sWoZOzUSwofjqeMLyi6XX498W6m2PvoF7ku%2B%2F6pQ%2Bcq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDPJWuec7%2BvigIZE1XyrcA%2FmwWBnBPNFd2IT5c39MHn0NiQ%2Brxm%2B0V2rx%2BEFW7tMrsy7ATCiL2y5VFICVe%2BijmuTcDirSP5PxwhX%2FJo5ZcShVczBB9gKidjF0yBCW833V9Ly8pvLSo05iiW6rtgTpDGIuyw%2BHpFu5VYXJWVD97dF5MVnM%2F0dIlxLaJvE2e%2F4sjdDuzTiGLRMAUUOP3OhacJEwpb%2Bit4iVja%2FQcaQha%2FiOOaPEatUlRHz%2BSMTGs0z3i1IoWEHpF7rCE8X%2BuA5gY2I2MZ4BC%2FOVbdZWv4Erb5m8lLRy8axKoyWtAYdvltbuxextlDCWY5cWjz8KiWK1N1WxxALXoOCF6nwyBaPD6TuX6WBNsXZFi2PXLOb30lN5XzhdK%2FFe9veZJytarBGbjTMylw5jBSl8CbcthKJpf8x8U1WbNTWFwRRvOLP1ltBylPRkO4ZgdJWUelSeYbwB6j8B99i%2BM76qRhzW%2FjUVGGvBeG%2FKUUu4uxr%2Bl%2B6p75d7hoDEaHM8BoMJ8cUFDV0YHq7tPga6MqOjUaPWcYqp%2Fsch6rWlS1xYYH7DmC1%2BL0mn7bhrLjRcyFokzYVLq%2FELcyMdiIL12cAE3JjNqe3ZVYz69V%2FAOwY1pa8WHm1Isf%2FclGoIzifRwHNYmvuDMLvOm8sGOqUBLxgbtlvYbAR2SzdwdJowQXlw3JMnQHDwC%2BdvGpsdq1g2%2FrtceurYB5bTJJvqiNzohjYtELlsMd5Gf965%2B8QtTcrGOuJI%2Fg%2BEK2tYL3KXbuHed4yvXPTFVKXcFhEpy3Vysjt3SzvQK8zrJIiJWYB%2Fc9cNNkv6gdO%2FqwTPJS0eH6k5qFaiUIqkG6YdtPShpD5EDqp9GlPZ8ymznymocTKUogNJvovb&X-Amz-Signature=93e36fac52d61111fc57b5a9b8efb32404196dbd7200553ed059f850d4cc7932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "17-21"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBJX3LN2%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD4w5BlxyDp%2FqMHkAmqHaMPQwZFzMI6V6rI7WSQUrvL4AIgBx9GdX%2FIRVaBjwwoOKe2Gsg%2Byrdef1wekAQd3ya5ONoq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMOns5JBg3ttZ3mBuircAyQTjqQ6pC8Si33FzYktu81IJhxsyKrrX6YQ9fqGxWwKyBUjaKCxPqyJehkVhvQOtO%2FukEO9xOe%2B2gI8%2BzQ0E5%2BW8%2BYJC2j0Pm8189VEjOGw4XB%2BFu%2F3Ew5tnlAfeJ6wEBkDb4Gs8YpFJymF7g%2FM6O0JzUDwYeR4j%2BeLCQdeFvBGyMUswH1Tr3D5%2Fv%2BcINh2q2NO6vfS9xgeA%2FOReh2KqWZ4ZY4yntNA3CcZYOiJMvFjCSzi0HhjyCHPuXsIgHTen4BM%2FJgtT1SEGnvTykOEWThOqj808Dru2sSu0iykZn3GNEtl%2BYuZF39veDr4PvUc7y2ILxDYLYmsH2QPIXXH9tuCokIlk16B7cpboXNpgk6gjOadbW3dOvGHzzyhXXnZCRmnAH5%2Bt63QVUKtDRy8b8RlqapbGPlnTkapQnNXhEPx5Z4EJT8MBStWxRTTgCfUb0OzjeoLUY8M5AVNRVDVFqyoibUHtoGEnRIPcWD4aPIg10UcO2mS4yeiUWOqbcXpErv5wuhXhgVa58kUrcX9U0%2FzhXTxC983sNsOBsDOvg36ECytRX%2Bv3In6r8ec7NYG0bNm1uLw9s0aM58fDxwpbSdSVM93Wdv0DSdEpQriDjrXrXxwOsMRecw1MNclMN3Om8sGOqUBuhYXDONYFxAmLONCf6xPSPn86MNCPdNt0C0Ba99oNDR5NUqEibztlyz8KThJir2qHONSd6fuOvRFVjIuqrkWJNgZQ8AQk89KCr052nCA8bnSJSTCo5UhMUymJBgsn%2FQglxt%2FFiG7YdK9u6obpyaOccP0N4SCJcknJULV7t62bt0fw79LcdCZy0L1RNEab0weDOx4dY1%2BA68%2F8SuYreYnHTqqI%2BUZ&X-Amz-Signature=d8d89b119650974e21d33ce820e91d1e44a3d401e2984bf6704490b9238ab618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZM3ECX2%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIG4UxftynwiYqjC%2FscZipYMR5aQbQruCRbo3iCoBHdjBAiEA2sWoZOzUSwofjqeMLyi6XX498W6m2PvoF7ku%2B%2F6pQ%2Bcq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDPJWuec7%2BvigIZE1XyrcA%2FmwWBnBPNFd2IT5c39MHn0NiQ%2Brxm%2B0V2rx%2BEFW7tMrsy7ATCiL2y5VFICVe%2BijmuTcDirSP5PxwhX%2FJo5ZcShVczBB9gKidjF0yBCW833V9Ly8pvLSo05iiW6rtgTpDGIuyw%2BHpFu5VYXJWVD97dF5MVnM%2F0dIlxLaJvE2e%2F4sjdDuzTiGLRMAUUOP3OhacJEwpb%2Bit4iVja%2FQcaQha%2FiOOaPEatUlRHz%2BSMTGs0z3i1IoWEHpF7rCE8X%2BuA5gY2I2MZ4BC%2FOVbdZWv4Erb5m8lLRy8axKoyWtAYdvltbuxextlDCWY5cWjz8KiWK1N1WxxALXoOCF6nwyBaPD6TuX6WBNsXZFi2PXLOb30lN5XzhdK%2FFe9veZJytarBGbjTMylw5jBSl8CbcthKJpf8x8U1WbNTWFwRRvOLP1ltBylPRkO4ZgdJWUelSeYbwB6j8B99i%2BM76qRhzW%2FjUVGGvBeG%2FKUUu4uxr%2Bl%2B6p75d7hoDEaHM8BoMJ8cUFDV0YHq7tPga6MqOjUaPWcYqp%2Fsch6rWlS1xYYH7DmC1%2BL0mn7bhrLjRcyFokzYVLq%2FELcyMdiIL12cAE3JjNqe3ZVYz69V%2FAOwY1pa8WHm1Isf%2FclGoIzifRwHNYmvuDMLvOm8sGOqUBLxgbtlvYbAR2SzdwdJowQXlw3JMnQHDwC%2BdvGpsdq1g2%2FrtceurYB5bTJJvqiNzohjYtELlsMd5Gf965%2B8QtTcrGOuJI%2Fg%2BEK2tYL3KXbuHed4yvXPTFVKXcFhEpy3Vysjt3SzvQK8zrJIiJWYB%2Fc9cNNkv6gdO%2FqwTPJS0eH6k5qFaiUIqkG6YdtPShpD5EDqp9GlPZ8ymznymocTKUogNJvovb&X-Amz-Signature=9e827d66295afb023594a3f44bb92273eacfd210b2903437ea1af427437d720c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZM3ECX2%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIG4UxftynwiYqjC%2FscZipYMR5aQbQruCRbo3iCoBHdjBAiEA2sWoZOzUSwofjqeMLyi6XX498W6m2PvoF7ku%2B%2F6pQ%2Bcq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDPJWuec7%2BvigIZE1XyrcA%2FmwWBnBPNFd2IT5c39MHn0NiQ%2Brxm%2B0V2rx%2BEFW7tMrsy7ATCiL2y5VFICVe%2BijmuTcDirSP5PxwhX%2FJo5ZcShVczBB9gKidjF0yBCW833V9Ly8pvLSo05iiW6rtgTpDGIuyw%2BHpFu5VYXJWVD97dF5MVnM%2F0dIlxLaJvE2e%2F4sjdDuzTiGLRMAUUOP3OhacJEwpb%2Bit4iVja%2FQcaQha%2FiOOaPEatUlRHz%2BSMTGs0z3i1IoWEHpF7rCE8X%2BuA5gY2I2MZ4BC%2FOVbdZWv4Erb5m8lLRy8axKoyWtAYdvltbuxextlDCWY5cWjz8KiWK1N1WxxALXoOCF6nwyBaPD6TuX6WBNsXZFi2PXLOb30lN5XzhdK%2FFe9veZJytarBGbjTMylw5jBSl8CbcthKJpf8x8U1WbNTWFwRRvOLP1ltBylPRkO4ZgdJWUelSeYbwB6j8B99i%2BM76qRhzW%2FjUVGGvBeG%2FKUUu4uxr%2Bl%2B6p75d7hoDEaHM8BoMJ8cUFDV0YHq7tPga6MqOjUaPWcYqp%2Fsch6rWlS1xYYH7DmC1%2BL0mn7bhrLjRcyFokzYVLq%2FELcyMdiIL12cAE3JjNqe3ZVYz69V%2FAOwY1pa8WHm1Isf%2FclGoIzifRwHNYmvuDMLvOm8sGOqUBLxgbtlvYbAR2SzdwdJowQXlw3JMnQHDwC%2BdvGpsdq1g2%2FrtceurYB5bTJJvqiNzohjYtELlsMd5Gf965%2B8QtTcrGOuJI%2Fg%2BEK2tYL3KXbuHed4yvXPTFVKXcFhEpy3Vysjt3SzvQK8zrJIiJWYB%2Fc9cNNkv6gdO%2FqwTPJS0eH6k5qFaiUIqkG6YdtPShpD5EDqp9GlPZ8ymznymocTKUogNJvovb&X-Amz-Signature=e794536e8d8bcfab394c2b3a0a864dfc7e7c024b3c8f58abca5477e8b1ef3f99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZM3ECX2%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIG4UxftynwiYqjC%2FscZipYMR5aQbQruCRbo3iCoBHdjBAiEA2sWoZOzUSwofjqeMLyi6XX498W6m2PvoF7ku%2B%2F6pQ%2Bcq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDPJWuec7%2BvigIZE1XyrcA%2FmwWBnBPNFd2IT5c39MHn0NiQ%2Brxm%2B0V2rx%2BEFW7tMrsy7ATCiL2y5VFICVe%2BijmuTcDirSP5PxwhX%2FJo5ZcShVczBB9gKidjF0yBCW833V9Ly8pvLSo05iiW6rtgTpDGIuyw%2BHpFu5VYXJWVD97dF5MVnM%2F0dIlxLaJvE2e%2F4sjdDuzTiGLRMAUUOP3OhacJEwpb%2Bit4iVja%2FQcaQha%2FiOOaPEatUlRHz%2BSMTGs0z3i1IoWEHpF7rCE8X%2BuA5gY2I2MZ4BC%2FOVbdZWv4Erb5m8lLRy8axKoyWtAYdvltbuxextlDCWY5cWjz8KiWK1N1WxxALXoOCF6nwyBaPD6TuX6WBNsXZFi2PXLOb30lN5XzhdK%2FFe9veZJytarBGbjTMylw5jBSl8CbcthKJpf8x8U1WbNTWFwRRvOLP1ltBylPRkO4ZgdJWUelSeYbwB6j8B99i%2BM76qRhzW%2FjUVGGvBeG%2FKUUu4uxr%2Bl%2B6p75d7hoDEaHM8BoMJ8cUFDV0YHq7tPga6MqOjUaPWcYqp%2Fsch6rWlS1xYYH7DmC1%2BL0mn7bhrLjRcyFokzYVLq%2FELcyMdiIL12cAE3JjNqe3ZVYz69V%2FAOwY1pa8WHm1Isf%2FclGoIzifRwHNYmvuDMLvOm8sGOqUBLxgbtlvYbAR2SzdwdJowQXlw3JMnQHDwC%2BdvGpsdq1g2%2FrtceurYB5bTJJvqiNzohjYtELlsMd5Gf965%2B8QtTcrGOuJI%2Fg%2BEK2tYL3KXbuHed4yvXPTFVKXcFhEpy3Vysjt3SzvQK8zrJIiJWYB%2Fc9cNNkv6gdO%2FqwTPJS0eH6k5qFaiUIqkG6YdtPShpD5EDqp9GlPZ8ymznymocTKUogNJvovb&X-Amz-Signature=629d8c1ccb8bcd238bd7fdfa77e5e8606331523210f24151fddf3e0f0ff1f270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZM3ECX2%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIG4UxftynwiYqjC%2FscZipYMR5aQbQruCRbo3iCoBHdjBAiEA2sWoZOzUSwofjqeMLyi6XX498W6m2PvoF7ku%2B%2F6pQ%2Bcq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDPJWuec7%2BvigIZE1XyrcA%2FmwWBnBPNFd2IT5c39MHn0NiQ%2Brxm%2B0V2rx%2BEFW7tMrsy7ATCiL2y5VFICVe%2BijmuTcDirSP5PxwhX%2FJo5ZcShVczBB9gKidjF0yBCW833V9Ly8pvLSo05iiW6rtgTpDGIuyw%2BHpFu5VYXJWVD97dF5MVnM%2F0dIlxLaJvE2e%2F4sjdDuzTiGLRMAUUOP3OhacJEwpb%2Bit4iVja%2FQcaQha%2FiOOaPEatUlRHz%2BSMTGs0z3i1IoWEHpF7rCE8X%2BuA5gY2I2MZ4BC%2FOVbdZWv4Erb5m8lLRy8axKoyWtAYdvltbuxextlDCWY5cWjz8KiWK1N1WxxALXoOCF6nwyBaPD6TuX6WBNsXZFi2PXLOb30lN5XzhdK%2FFe9veZJytarBGbjTMylw5jBSl8CbcthKJpf8x8U1WbNTWFwRRvOLP1ltBylPRkO4ZgdJWUelSeYbwB6j8B99i%2BM76qRhzW%2FjUVGGvBeG%2FKUUu4uxr%2Bl%2B6p75d7hoDEaHM8BoMJ8cUFDV0YHq7tPga6MqOjUaPWcYqp%2Fsch6rWlS1xYYH7DmC1%2BL0mn7bhrLjRcyFokzYVLq%2FELcyMdiIL12cAE3JjNqe3ZVYz69V%2FAOwY1pa8WHm1Isf%2FclGoIzifRwHNYmvuDMLvOm8sGOqUBLxgbtlvYbAR2SzdwdJowQXlw3JMnQHDwC%2BdvGpsdq1g2%2FrtceurYB5bTJJvqiNzohjYtELlsMd5Gf965%2B8QtTcrGOuJI%2Fg%2BEK2tYL3KXbuHed4yvXPTFVKXcFhEpy3Vysjt3SzvQK8zrJIiJWYB%2Fc9cNNkv6gdO%2FqwTPJS0eH6k5qFaiUIqkG6YdtPShpD5EDqp9GlPZ8ymznymocTKUogNJvovb&X-Amz-Signature=d6a8f0b0df92c1c0a7b5de61c8448c04e33b8468d60df2d7b7e37ce995944b0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If you want to make a custom world here is a [guide from Articulated Robotics](https://www.youtube.com/watch?v=K4rHglJW7Hg) on how to do so

{{% /alert %}}

## Adding Gazebo to launch file

Finally to update the launch file we have to get the `bridge_config.yaml` and `my_world.sdf`

```python "5-5","6-6"
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

```python "5-5"
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

```python "3-3","5-5","10-13"

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZM3ECX2%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIG4UxftynwiYqjC%2FscZipYMR5aQbQruCRbo3iCoBHdjBAiEA2sWoZOzUSwofjqeMLyi6XX498W6m2PvoF7ku%2B%2F6pQ%2Bcq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDPJWuec7%2BvigIZE1XyrcA%2FmwWBnBPNFd2IT5c39MHn0NiQ%2Brxm%2B0V2rx%2BEFW7tMrsy7ATCiL2y5VFICVe%2BijmuTcDirSP5PxwhX%2FJo5ZcShVczBB9gKidjF0yBCW833V9Ly8pvLSo05iiW6rtgTpDGIuyw%2BHpFu5VYXJWVD97dF5MVnM%2F0dIlxLaJvE2e%2F4sjdDuzTiGLRMAUUOP3OhacJEwpb%2Bit4iVja%2FQcaQha%2FiOOaPEatUlRHz%2BSMTGs0z3i1IoWEHpF7rCE8X%2BuA5gY2I2MZ4BC%2FOVbdZWv4Erb5m8lLRy8axKoyWtAYdvltbuxextlDCWY5cWjz8KiWK1N1WxxALXoOCF6nwyBaPD6TuX6WBNsXZFi2PXLOb30lN5XzhdK%2FFe9veZJytarBGbjTMylw5jBSl8CbcthKJpf8x8U1WbNTWFwRRvOLP1ltBylPRkO4ZgdJWUelSeYbwB6j8B99i%2BM76qRhzW%2FjUVGGvBeG%2FKUUu4uxr%2Bl%2B6p75d7hoDEaHM8BoMJ8cUFDV0YHq7tPga6MqOjUaPWcYqp%2Fsch6rWlS1xYYH7DmC1%2BL0mn7bhrLjRcyFokzYVLq%2FELcyMdiIL12cAE3JjNqe3ZVYz69V%2FAOwY1pa8WHm1Isf%2FclGoIzifRwHNYmvuDMLvOm8sGOqUBLxgbtlvYbAR2SzdwdJowQXlw3JMnQHDwC%2BdvGpsdq1g2%2FrtceurYB5bTJJvqiNzohjYtELlsMd5Gf965%2B8QtTcrGOuJI%2Fg%2BEK2tYL3KXbuHed4yvXPTFVKXcFhEpy3Vysjt3SzvQK8zrJIiJWYB%2Fc9cNNkv6gdO%2FqwTPJS0eH6k5qFaiUIqkG6YdtPShpD5EDqp9GlPZ8ymznymocTKUogNJvovb&X-Amz-Signature=38ca86de517a826ac8f30a1f72c7979d91fd9a7528addf90b3538e6ff8d4968e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZM3ECX2%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIG4UxftynwiYqjC%2FscZipYMR5aQbQruCRbo3iCoBHdjBAiEA2sWoZOzUSwofjqeMLyi6XX498W6m2PvoF7ku%2B%2F6pQ%2Bcq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDPJWuec7%2BvigIZE1XyrcA%2FmwWBnBPNFd2IT5c39MHn0NiQ%2Brxm%2B0V2rx%2BEFW7tMrsy7ATCiL2y5VFICVe%2BijmuTcDirSP5PxwhX%2FJo5ZcShVczBB9gKidjF0yBCW833V9Ly8pvLSo05iiW6rtgTpDGIuyw%2BHpFu5VYXJWVD97dF5MVnM%2F0dIlxLaJvE2e%2F4sjdDuzTiGLRMAUUOP3OhacJEwpb%2Bit4iVja%2FQcaQha%2FiOOaPEatUlRHz%2BSMTGs0z3i1IoWEHpF7rCE8X%2BuA5gY2I2MZ4BC%2FOVbdZWv4Erb5m8lLRy8axKoyWtAYdvltbuxextlDCWY5cWjz8KiWK1N1WxxALXoOCF6nwyBaPD6TuX6WBNsXZFi2PXLOb30lN5XzhdK%2FFe9veZJytarBGbjTMylw5jBSl8CbcthKJpf8x8U1WbNTWFwRRvOLP1ltBylPRkO4ZgdJWUelSeYbwB6j8B99i%2BM76qRhzW%2FjUVGGvBeG%2FKUUu4uxr%2Bl%2B6p75d7hoDEaHM8BoMJ8cUFDV0YHq7tPga6MqOjUaPWcYqp%2Fsch6rWlS1xYYH7DmC1%2BL0mn7bhrLjRcyFokzYVLq%2FELcyMdiIL12cAE3JjNqe3ZVYz69V%2FAOwY1pa8WHm1Isf%2FclGoIzifRwHNYmvuDMLvOm8sGOqUBLxgbtlvYbAR2SzdwdJowQXlw3JMnQHDwC%2BdvGpsdq1g2%2FrtceurYB5bTJJvqiNzohjYtELlsMd5Gf965%2B8QtTcrGOuJI%2Fg%2BEK2tYL3KXbuHed4yvXPTFVKXcFhEpy3Vysjt3SzvQK8zrJIiJWYB%2Fc9cNNkv6gdO%2FqwTPJS0eH6k5qFaiUIqkG6YdtPShpD5EDqp9GlPZ8ymznymocTKUogNJvovb&X-Amz-Signature=49d5c24bd11bb5bd416aa4948e5ca4a675d69b574d0eed6a031d3ff5d5f0b82d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


