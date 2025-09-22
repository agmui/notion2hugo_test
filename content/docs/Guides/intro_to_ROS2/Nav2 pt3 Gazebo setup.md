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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2YOAYXK%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGA8GDvEvAIZmgg8Z0Q8WC1DUpo5YAUdY0j7vHNnw4e1AiAXLDEg6VGS3m8cH7uHPCMnOaaU7i0%2FVx6x2cXOHfdX8Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMP%2FfSWeG%2FYBxkCAOtKtwDb0yRM42y05g7O3WuQw7XUPzrS8w0tY5808J95YPDNYVd%2FJf4WkAj4nfpyBebCG22dhebkhpAiR0RcPF6tADtuiUtIQ%2FDnydPHugHAsorVEYAm6NKsryLowCUtNtfzYqJ20YGkChX8swADdhHNLUFVYNMtWJKcx59pkWE%2B%2BEUtIIKDVMO%2Fp17HttAJCkGxq73Y5QwM2Yv7Md7idpNElMR6UEOA7hO731pBUtkOWnVn1haLMDHiFi4iGotAZKGrV%2BsmpHt85MFGiDPr9SRFuF3KqdJZm6eUaXAffz4IVIRoKc6OmbRBkw2Y3wTm5ud0%2FwxS%2F2We17wHzgKfhT2CxvgxfkXK2JnDiYxVkhweSdvlFCvkKdZFIUJJkUwQgCJ51KJQNcdiOUdGG0RVOij0StRjGQ1QuXql%2FpsT2nhnQtfWuzi8gcuwMJ%2BNpdnxufO3pR9BKyW6tML2g1aUcy3%2FYhPVUdf41CArA1irZo7qerBHcwQd%2F0a23ufmziE0LVFHmx3ro7l3ZWKC2HSuPJtvOYMg6dIwOzC90qS1GprZRCxhLkgIEIMuCQN16N8yEqrb%2B%2F5C4Oht03HP%2BGTkW1dUVEqWzvlK1YE%2F1C58ShoFUBEQ94Odr9mEuf8QVRfQWAwtsbCxgY6pgGGP6vTKT5GLieLNMucKdYem22Ma6Q0Ob4wRJ99sMqVCqjNwLaShr%2BT8QQsIaIOQptFn68Tq67az7puw4aGFFt6Tj6FL1FBauyPnDQ5GkpNGuWZhBSOrn9uUFNN6uD1lfCJoRw%2BkXgB0viwVta3gMIEdmQ9RN57dtgJPr5d6%2FkdraA54lFGJRUI5r1yFb4fQHyIK%2F9SHx9tmaqS2xvZNgmKZD6Qach4&X-Amz-Signature=7175bfe2ec63aa9d611555f840d830b5fdc43a84da45cb4f5dec193ad544ab1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2YOAYXK%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGA8GDvEvAIZmgg8Z0Q8WC1DUpo5YAUdY0j7vHNnw4e1AiAXLDEg6VGS3m8cH7uHPCMnOaaU7i0%2FVx6x2cXOHfdX8Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMP%2FfSWeG%2FYBxkCAOtKtwDb0yRM42y05g7O3WuQw7XUPzrS8w0tY5808J95YPDNYVd%2FJf4WkAj4nfpyBebCG22dhebkhpAiR0RcPF6tADtuiUtIQ%2FDnydPHugHAsorVEYAm6NKsryLowCUtNtfzYqJ20YGkChX8swADdhHNLUFVYNMtWJKcx59pkWE%2B%2BEUtIIKDVMO%2Fp17HttAJCkGxq73Y5QwM2Yv7Md7idpNElMR6UEOA7hO731pBUtkOWnVn1haLMDHiFi4iGotAZKGrV%2BsmpHt85MFGiDPr9SRFuF3KqdJZm6eUaXAffz4IVIRoKc6OmbRBkw2Y3wTm5ud0%2FwxS%2F2We17wHzgKfhT2CxvgxfkXK2JnDiYxVkhweSdvlFCvkKdZFIUJJkUwQgCJ51KJQNcdiOUdGG0RVOij0StRjGQ1QuXql%2FpsT2nhnQtfWuzi8gcuwMJ%2BNpdnxufO3pR9BKyW6tML2g1aUcy3%2FYhPVUdf41CArA1irZo7qerBHcwQd%2F0a23ufmziE0LVFHmx3ro7l3ZWKC2HSuPJtvOYMg6dIwOzC90qS1GprZRCxhLkgIEIMuCQN16N8yEqrb%2B%2F5C4Oht03HP%2BGTkW1dUVEqWzvlK1YE%2F1C58ShoFUBEQ94Odr9mEuf8QVRfQWAwtsbCxgY6pgGGP6vTKT5GLieLNMucKdYem22Ma6Q0Ob4wRJ99sMqVCqjNwLaShr%2BT8QQsIaIOQptFn68Tq67az7puw4aGFFt6Tj6FL1FBauyPnDQ5GkpNGuWZhBSOrn9uUFNN6uD1lfCJoRw%2BkXgB0viwVta3gMIEdmQ9RN57dtgJPr5d6%2FkdraA54lFGJRUI5r1yFb4fQHyIK%2F9SHx9tmaqS2xvZNgmKZD6Qach4&X-Amz-Signature=bf28a92847333a56987d9ce3dd907ac13ae7acc67313afaf565d20cb702db64d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2YOAYXK%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGA8GDvEvAIZmgg8Z0Q8WC1DUpo5YAUdY0j7vHNnw4e1AiAXLDEg6VGS3m8cH7uHPCMnOaaU7i0%2FVx6x2cXOHfdX8Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMP%2FfSWeG%2FYBxkCAOtKtwDb0yRM42y05g7O3WuQw7XUPzrS8w0tY5808J95YPDNYVd%2FJf4WkAj4nfpyBebCG22dhebkhpAiR0RcPF6tADtuiUtIQ%2FDnydPHugHAsorVEYAm6NKsryLowCUtNtfzYqJ20YGkChX8swADdhHNLUFVYNMtWJKcx59pkWE%2B%2BEUtIIKDVMO%2Fp17HttAJCkGxq73Y5QwM2Yv7Md7idpNElMR6UEOA7hO731pBUtkOWnVn1haLMDHiFi4iGotAZKGrV%2BsmpHt85MFGiDPr9SRFuF3KqdJZm6eUaXAffz4IVIRoKc6OmbRBkw2Y3wTm5ud0%2FwxS%2F2We17wHzgKfhT2CxvgxfkXK2JnDiYxVkhweSdvlFCvkKdZFIUJJkUwQgCJ51KJQNcdiOUdGG0RVOij0StRjGQ1QuXql%2FpsT2nhnQtfWuzi8gcuwMJ%2BNpdnxufO3pR9BKyW6tML2g1aUcy3%2FYhPVUdf41CArA1irZo7qerBHcwQd%2F0a23ufmziE0LVFHmx3ro7l3ZWKC2HSuPJtvOYMg6dIwOzC90qS1GprZRCxhLkgIEIMuCQN16N8yEqrb%2B%2F5C4Oht03HP%2BGTkW1dUVEqWzvlK1YE%2F1C58ShoFUBEQ94Odr9mEuf8QVRfQWAwtsbCxgY6pgGGP6vTKT5GLieLNMucKdYem22Ma6Q0Ob4wRJ99sMqVCqjNwLaShr%2BT8QQsIaIOQptFn68Tq67az7puw4aGFFt6Tj6FL1FBauyPnDQ5GkpNGuWZhBSOrn9uUFNN6uD1lfCJoRw%2BkXgB0viwVta3gMIEdmQ9RN57dtgJPr5d6%2FkdraA54lFGJRUI5r1yFb4fQHyIK%2F9SHx9tmaqS2xvZNgmKZD6Qach4&X-Amz-Signature=20c3143ab7efcd4d4c0ece082a08a15f519ee8e953b4b70e57268f8fc94816a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2YOAYXK%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGA8GDvEvAIZmgg8Z0Q8WC1DUpo5YAUdY0j7vHNnw4e1AiAXLDEg6VGS3m8cH7uHPCMnOaaU7i0%2FVx6x2cXOHfdX8Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMP%2FfSWeG%2FYBxkCAOtKtwDb0yRM42y05g7O3WuQw7XUPzrS8w0tY5808J95YPDNYVd%2FJf4WkAj4nfpyBebCG22dhebkhpAiR0RcPF6tADtuiUtIQ%2FDnydPHugHAsorVEYAm6NKsryLowCUtNtfzYqJ20YGkChX8swADdhHNLUFVYNMtWJKcx59pkWE%2B%2BEUtIIKDVMO%2Fp17HttAJCkGxq73Y5QwM2Yv7Md7idpNElMR6UEOA7hO731pBUtkOWnVn1haLMDHiFi4iGotAZKGrV%2BsmpHt85MFGiDPr9SRFuF3KqdJZm6eUaXAffz4IVIRoKc6OmbRBkw2Y3wTm5ud0%2FwxS%2F2We17wHzgKfhT2CxvgxfkXK2JnDiYxVkhweSdvlFCvkKdZFIUJJkUwQgCJ51KJQNcdiOUdGG0RVOij0StRjGQ1QuXql%2FpsT2nhnQtfWuzi8gcuwMJ%2BNpdnxufO3pR9BKyW6tML2g1aUcy3%2FYhPVUdf41CArA1irZo7qerBHcwQd%2F0a23ufmziE0LVFHmx3ro7l3ZWKC2HSuPJtvOYMg6dIwOzC90qS1GprZRCxhLkgIEIMuCQN16N8yEqrb%2B%2F5C4Oht03HP%2BGTkW1dUVEqWzvlK1YE%2F1C58ShoFUBEQ94Odr9mEuf8QVRfQWAwtsbCxgY6pgGGP6vTKT5GLieLNMucKdYem22Ma6Q0Ob4wRJ99sMqVCqjNwLaShr%2BT8QQsIaIOQptFn68Tq67az7puw4aGFFt6Tj6FL1FBauyPnDQ5GkpNGuWZhBSOrn9uUFNN6uD1lfCJoRw%2BkXgB0viwVta3gMIEdmQ9RN57dtgJPr5d6%2FkdraA54lFGJRUI5r1yFb4fQHyIK%2F9SHx9tmaqS2xvZNgmKZD6Qach4&X-Amz-Signature=f51115fff5e7a16fb7e6f0c6e856e6ec56189e12047c0c7e64f07489d77dc145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SKHY6NU%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCW6H86Uc%2BuCi9pU%2FJDkdUdjbBDVcEgfxYW6yU1H1FV6gIhAPhky2jstbNlxtimeoJ5IftUZpKKX1apPKxWTMUN%2FfTmKv8DCCIQABoMNjM3NDIzMTgzODA1IgyEO3KeoDuLxDNtjswq3ANUmIlLofc5hLi5xN0%2BVGjKKp8Dh9ZAZkKsOpAj7vyIuyki%2BAUPCQB3TJtfjgPZ7PDywPbLRDr5egjO8rw9i1eaDTFugtnLWT5QsGNOYY%2BsIG1UEsPatHUAq8b%2FpCnu80IxwIMhbmqWV4cw8E35yLDcS0pWwimerHBMSahRSyRhTQ8bqTbDkySATMm8M0RH7g7kqN1Z%2FT7nX8IO2%2BF1MBn7OJzZX%2BQlnfhjHyhTmt4il%2B%2F0kw%2BTmTmsuQkxwmsFKcfZljIL%2FAjFpnQjFJ1EcEbuDrlChfpL%2BKHr7hAbw65311Kg1rHGrWmOpIZqkVEMdsFtwlqqFlKmkstcZWCQTKmo6R31YJ5nIsm0KVZkabFTRucSRSFWVuyAo4pR34yvudz6BuR%2BMontdEDrwh1%2BdoGIkfP34B7TE%2B5NgdJDsudslSK64XRA4e%2BCiiuQNLeGxO78BWBDcTROx0%2BMCrl0iBE5zJjJUG89vKNb3hjz1vKjhwBarA8Ht1NS6tGCJ42rgnzqWXZQOvJEvQHZ7nonmd%2BGY9%2F5VD1SKJ1AqEwqd8Nj4k6YwmZl1f4sOlQRGNebfh6u%2B588Y5k8sSZR6aYKMefjQaS5SP1ApVRd6aajr1kwf%2FINgPp1W%2F6%2FsqR4iTD3xcLGBjqkAT%2FD0aOZ8JPIHsv69J86wodDUAro2%2BPF0K3mkzCxVFbKCfA8%2B1uBbB%2Fh3ZY4Y6JNPCARNdFSPC1kFnqRfsi%2FWcPaXKl40UWA6U%2BZkPs6aXWd9of5ka0HxpIV8cm66KnsrnlFcw%2BZ4Xg1ZjfAVzmYisRX43RyaVDpsRzLtBY286V74zQX5yB2MMAfGlb9dRHjlomKvOOleaeOwKNykS58WCNGV3wl&X-Amz-Signature=670fce9253a06fe906b87220b03ea1ffd0d6f9676cef52e1d540ae4fdda66591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2YOAYXK%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGA8GDvEvAIZmgg8Z0Q8WC1DUpo5YAUdY0j7vHNnw4e1AiAXLDEg6VGS3m8cH7uHPCMnOaaU7i0%2FVx6x2cXOHfdX8Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMP%2FfSWeG%2FYBxkCAOtKtwDb0yRM42y05g7O3WuQw7XUPzrS8w0tY5808J95YPDNYVd%2FJf4WkAj4nfpyBebCG22dhebkhpAiR0RcPF6tADtuiUtIQ%2FDnydPHugHAsorVEYAm6NKsryLowCUtNtfzYqJ20YGkChX8swADdhHNLUFVYNMtWJKcx59pkWE%2B%2BEUtIIKDVMO%2Fp17HttAJCkGxq73Y5QwM2Yv7Md7idpNElMR6UEOA7hO731pBUtkOWnVn1haLMDHiFi4iGotAZKGrV%2BsmpHt85MFGiDPr9SRFuF3KqdJZm6eUaXAffz4IVIRoKc6OmbRBkw2Y3wTm5ud0%2FwxS%2F2We17wHzgKfhT2CxvgxfkXK2JnDiYxVkhweSdvlFCvkKdZFIUJJkUwQgCJ51KJQNcdiOUdGG0RVOij0StRjGQ1QuXql%2FpsT2nhnQtfWuzi8gcuwMJ%2BNpdnxufO3pR9BKyW6tML2g1aUcy3%2FYhPVUdf41CArA1irZo7qerBHcwQd%2F0a23ufmziE0LVFHmx3ro7l3ZWKC2HSuPJtvOYMg6dIwOzC90qS1GprZRCxhLkgIEIMuCQN16N8yEqrb%2B%2F5C4Oht03HP%2BGTkW1dUVEqWzvlK1YE%2F1C58ShoFUBEQ94Odr9mEuf8QVRfQWAwtsbCxgY6pgGGP6vTKT5GLieLNMucKdYem22Ma6Q0Ob4wRJ99sMqVCqjNwLaShr%2BT8QQsIaIOQptFn68Tq67az7puw4aGFFt6Tj6FL1FBauyPnDQ5GkpNGuWZhBSOrn9uUFNN6uD1lfCJoRw%2BkXgB0viwVta3gMIEdmQ9RN57dtgJPr5d6%2FkdraA54lFGJRUI5r1yFb4fQHyIK%2F9SHx9tmaqS2xvZNgmKZD6Qach4&X-Amz-Signature=75242f091fa43a3b2a947259373ba81d0a43c356e15f53e384c7e07ef1147d4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2YOAYXK%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGA8GDvEvAIZmgg8Z0Q8WC1DUpo5YAUdY0j7vHNnw4e1AiAXLDEg6VGS3m8cH7uHPCMnOaaU7i0%2FVx6x2cXOHfdX8Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMP%2FfSWeG%2FYBxkCAOtKtwDb0yRM42y05g7O3WuQw7XUPzrS8w0tY5808J95YPDNYVd%2FJf4WkAj4nfpyBebCG22dhebkhpAiR0RcPF6tADtuiUtIQ%2FDnydPHugHAsorVEYAm6NKsryLowCUtNtfzYqJ20YGkChX8swADdhHNLUFVYNMtWJKcx59pkWE%2B%2BEUtIIKDVMO%2Fp17HttAJCkGxq73Y5QwM2Yv7Md7idpNElMR6UEOA7hO731pBUtkOWnVn1haLMDHiFi4iGotAZKGrV%2BsmpHt85MFGiDPr9SRFuF3KqdJZm6eUaXAffz4IVIRoKc6OmbRBkw2Y3wTm5ud0%2FwxS%2F2We17wHzgKfhT2CxvgxfkXK2JnDiYxVkhweSdvlFCvkKdZFIUJJkUwQgCJ51KJQNcdiOUdGG0RVOij0StRjGQ1QuXql%2FpsT2nhnQtfWuzi8gcuwMJ%2BNpdnxufO3pR9BKyW6tML2g1aUcy3%2FYhPVUdf41CArA1irZo7qerBHcwQd%2F0a23ufmziE0LVFHmx3ro7l3ZWKC2HSuPJtvOYMg6dIwOzC90qS1GprZRCxhLkgIEIMuCQN16N8yEqrb%2B%2F5C4Oht03HP%2BGTkW1dUVEqWzvlK1YE%2F1C58ShoFUBEQ94Odr9mEuf8QVRfQWAwtsbCxgY6pgGGP6vTKT5GLieLNMucKdYem22Ma6Q0Ob4wRJ99sMqVCqjNwLaShr%2BT8QQsIaIOQptFn68Tq67az7puw4aGFFt6Tj6FL1FBauyPnDQ5GkpNGuWZhBSOrn9uUFNN6uD1lfCJoRw%2BkXgB0viwVta3gMIEdmQ9RN57dtgJPr5d6%2FkdraA54lFGJRUI5r1yFb4fQHyIK%2F9SHx9tmaqS2xvZNgmKZD6Qach4&X-Amz-Signature=c5e1bdc696f4a579f354331363dea952cc070fee3fc3acf02f2908a4185b2f2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2YOAYXK%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGA8GDvEvAIZmgg8Z0Q8WC1DUpo5YAUdY0j7vHNnw4e1AiAXLDEg6VGS3m8cH7uHPCMnOaaU7i0%2FVx6x2cXOHfdX8Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMP%2FfSWeG%2FYBxkCAOtKtwDb0yRM42y05g7O3WuQw7XUPzrS8w0tY5808J95YPDNYVd%2FJf4WkAj4nfpyBebCG22dhebkhpAiR0RcPF6tADtuiUtIQ%2FDnydPHugHAsorVEYAm6NKsryLowCUtNtfzYqJ20YGkChX8swADdhHNLUFVYNMtWJKcx59pkWE%2B%2BEUtIIKDVMO%2Fp17HttAJCkGxq73Y5QwM2Yv7Md7idpNElMR6UEOA7hO731pBUtkOWnVn1haLMDHiFi4iGotAZKGrV%2BsmpHt85MFGiDPr9SRFuF3KqdJZm6eUaXAffz4IVIRoKc6OmbRBkw2Y3wTm5ud0%2FwxS%2F2We17wHzgKfhT2CxvgxfkXK2JnDiYxVkhweSdvlFCvkKdZFIUJJkUwQgCJ51KJQNcdiOUdGG0RVOij0StRjGQ1QuXql%2FpsT2nhnQtfWuzi8gcuwMJ%2BNpdnxufO3pR9BKyW6tML2g1aUcy3%2FYhPVUdf41CArA1irZo7qerBHcwQd%2F0a23ufmziE0LVFHmx3ro7l3ZWKC2HSuPJtvOYMg6dIwOzC90qS1GprZRCxhLkgIEIMuCQN16N8yEqrb%2B%2F5C4Oht03HP%2BGTkW1dUVEqWzvlK1YE%2F1C58ShoFUBEQ94Odr9mEuf8QVRfQWAwtsbCxgY6pgGGP6vTKT5GLieLNMucKdYem22Ma6Q0Ob4wRJ99sMqVCqjNwLaShr%2BT8QQsIaIOQptFn68Tq67az7puw4aGFFt6Tj6FL1FBauyPnDQ5GkpNGuWZhBSOrn9uUFNN6uD1lfCJoRw%2BkXgB0viwVta3gMIEdmQ9RN57dtgJPr5d6%2FkdraA54lFGJRUI5r1yFb4fQHyIK%2F9SHx9tmaqS2xvZNgmKZD6Qach4&X-Amz-Signature=426169b45dc7895b700c60edf06f76eff84c63216527d67c76a673123775baa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2YOAYXK%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGA8GDvEvAIZmgg8Z0Q8WC1DUpo5YAUdY0j7vHNnw4e1AiAXLDEg6VGS3m8cH7uHPCMnOaaU7i0%2FVx6x2cXOHfdX8Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMP%2FfSWeG%2FYBxkCAOtKtwDb0yRM42y05g7O3WuQw7XUPzrS8w0tY5808J95YPDNYVd%2FJf4WkAj4nfpyBebCG22dhebkhpAiR0RcPF6tADtuiUtIQ%2FDnydPHugHAsorVEYAm6NKsryLowCUtNtfzYqJ20YGkChX8swADdhHNLUFVYNMtWJKcx59pkWE%2B%2BEUtIIKDVMO%2Fp17HttAJCkGxq73Y5QwM2Yv7Md7idpNElMR6UEOA7hO731pBUtkOWnVn1haLMDHiFi4iGotAZKGrV%2BsmpHt85MFGiDPr9SRFuF3KqdJZm6eUaXAffz4IVIRoKc6OmbRBkw2Y3wTm5ud0%2FwxS%2F2We17wHzgKfhT2CxvgxfkXK2JnDiYxVkhweSdvlFCvkKdZFIUJJkUwQgCJ51KJQNcdiOUdGG0RVOij0StRjGQ1QuXql%2FpsT2nhnQtfWuzi8gcuwMJ%2BNpdnxufO3pR9BKyW6tML2g1aUcy3%2FYhPVUdf41CArA1irZo7qerBHcwQd%2F0a23ufmziE0LVFHmx3ro7l3ZWKC2HSuPJtvOYMg6dIwOzC90qS1GprZRCxhLkgIEIMuCQN16N8yEqrb%2B%2F5C4Oht03HP%2BGTkW1dUVEqWzvlK1YE%2F1C58ShoFUBEQ94Odr9mEuf8QVRfQWAwtsbCxgY6pgGGP6vTKT5GLieLNMucKdYem22Ma6Q0Ob4wRJ99sMqVCqjNwLaShr%2BT8QQsIaIOQptFn68Tq67az7puw4aGFFt6Tj6FL1FBauyPnDQ5GkpNGuWZhBSOrn9uUFNN6uD1lfCJoRw%2BkXgB0viwVta3gMIEdmQ9RN57dtgJPr5d6%2FkdraA54lFGJRUI5r1yFb4fQHyIK%2F9SHx9tmaqS2xvZNgmKZD6Qach4&X-Amz-Signature=f1cbcfa7a9f1412a78e3e2036104300c4e779d9ff4a09e20b2aaf9d672461933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2YOAYXK%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGA8GDvEvAIZmgg8Z0Q8WC1DUpo5YAUdY0j7vHNnw4e1AiAXLDEg6VGS3m8cH7uHPCMnOaaU7i0%2FVx6x2cXOHfdX8Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMP%2FfSWeG%2FYBxkCAOtKtwDb0yRM42y05g7O3WuQw7XUPzrS8w0tY5808J95YPDNYVd%2FJf4WkAj4nfpyBebCG22dhebkhpAiR0RcPF6tADtuiUtIQ%2FDnydPHugHAsorVEYAm6NKsryLowCUtNtfzYqJ20YGkChX8swADdhHNLUFVYNMtWJKcx59pkWE%2B%2BEUtIIKDVMO%2Fp17HttAJCkGxq73Y5QwM2Yv7Md7idpNElMR6UEOA7hO731pBUtkOWnVn1haLMDHiFi4iGotAZKGrV%2BsmpHt85MFGiDPr9SRFuF3KqdJZm6eUaXAffz4IVIRoKc6OmbRBkw2Y3wTm5ud0%2FwxS%2F2We17wHzgKfhT2CxvgxfkXK2JnDiYxVkhweSdvlFCvkKdZFIUJJkUwQgCJ51KJQNcdiOUdGG0RVOij0StRjGQ1QuXql%2FpsT2nhnQtfWuzi8gcuwMJ%2BNpdnxufO3pR9BKyW6tML2g1aUcy3%2FYhPVUdf41CArA1irZo7qerBHcwQd%2F0a23ufmziE0LVFHmx3ro7l3ZWKC2HSuPJtvOYMg6dIwOzC90qS1GprZRCxhLkgIEIMuCQN16N8yEqrb%2B%2F5C4Oht03HP%2BGTkW1dUVEqWzvlK1YE%2F1C58ShoFUBEQ94Odr9mEuf8QVRfQWAwtsbCxgY6pgGGP6vTKT5GLieLNMucKdYem22Ma6Q0Ob4wRJ99sMqVCqjNwLaShr%2BT8QQsIaIOQptFn68Tq67az7puw4aGFFt6Tj6FL1FBauyPnDQ5GkpNGuWZhBSOrn9uUFNN6uD1lfCJoRw%2BkXgB0viwVta3gMIEdmQ9RN57dtgJPr5d6%2FkdraA54lFGJRUI5r1yFb4fQHyIK%2F9SHx9tmaqS2xvZNgmKZD6Qach4&X-Amz-Signature=2d5476772261c0cd305cdec74bf23efb30be59923f26d108916f6bac1c4b3982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2YOAYXK%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGA8GDvEvAIZmgg8Z0Q8WC1DUpo5YAUdY0j7vHNnw4e1AiAXLDEg6VGS3m8cH7uHPCMnOaaU7i0%2FVx6x2cXOHfdX8Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMP%2FfSWeG%2FYBxkCAOtKtwDb0yRM42y05g7O3WuQw7XUPzrS8w0tY5808J95YPDNYVd%2FJf4WkAj4nfpyBebCG22dhebkhpAiR0RcPF6tADtuiUtIQ%2FDnydPHugHAsorVEYAm6NKsryLowCUtNtfzYqJ20YGkChX8swADdhHNLUFVYNMtWJKcx59pkWE%2B%2BEUtIIKDVMO%2Fp17HttAJCkGxq73Y5QwM2Yv7Md7idpNElMR6UEOA7hO731pBUtkOWnVn1haLMDHiFi4iGotAZKGrV%2BsmpHt85MFGiDPr9SRFuF3KqdJZm6eUaXAffz4IVIRoKc6OmbRBkw2Y3wTm5ud0%2FwxS%2F2We17wHzgKfhT2CxvgxfkXK2JnDiYxVkhweSdvlFCvkKdZFIUJJkUwQgCJ51KJQNcdiOUdGG0RVOij0StRjGQ1QuXql%2FpsT2nhnQtfWuzi8gcuwMJ%2BNpdnxufO3pR9BKyW6tML2g1aUcy3%2FYhPVUdf41CArA1irZo7qerBHcwQd%2F0a23ufmziE0LVFHmx3ro7l3ZWKC2HSuPJtvOYMg6dIwOzC90qS1GprZRCxhLkgIEIMuCQN16N8yEqrb%2B%2F5C4Oht03HP%2BGTkW1dUVEqWzvlK1YE%2F1C58ShoFUBEQ94Odr9mEuf8QVRfQWAwtsbCxgY6pgGGP6vTKT5GLieLNMucKdYem22Ma6Q0Ob4wRJ99sMqVCqjNwLaShr%2BT8QQsIaIOQptFn68Tq67az7puw4aGFFt6Tj6FL1FBauyPnDQ5GkpNGuWZhBSOrn9uUFNN6uD1lfCJoRw%2BkXgB0viwVta3gMIEdmQ9RN57dtgJPr5d6%2FkdraA54lFGJRUI5r1yFb4fQHyIK%2F9SHx9tmaqS2xvZNgmKZD6Qach4&X-Amz-Signature=a1dad3eca5ecdbd925adaded524a0378bb3a024226a02978cd5bdfab1d0f5c54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


