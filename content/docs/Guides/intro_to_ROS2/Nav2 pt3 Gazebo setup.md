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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V73BCMGB%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh79qXwGEH3QJlrcIkSQN3KChlxN9js9zYHc7z6hrDOAIhAMFMIXwwqcMI7OBnJdcO%2FlJA63cOoEMswGY2rLSuSSC4KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRAOnyNS9eGhby4aAq3AOK7NfuM3oVbjFHwNuyI7MtkmI16xcQ4nLjhb5bXkVQvnHzbCIuYPe%2Fpwwghhljyom6lyNSjgql2s%2FIz8CuhHlCnmkg2u4isBJSQxEah7t06a%2FcOBzWCalVUCOVRPfWMqCAvIjoHVxqVVmIcJi%2BqTc1q26%2BZfzqAEdATpV%2FlgwRRBVePQrT6k9TCi82xYkK0Ch3dFMlAYu4xxUWb9CNwn8EDJfHvmU%2FmxRQ6aeKBNjhCCFHufq%2F17NR58rR2bioVWKfU%2Br8NNGCyCLRdNOb1yKKWYKva5hb8Jyz9QllYkTcL1Nz1qxWDyaG%2B%2FMqw1RWSt6HY2Dfr%2BJ%2FDzVxT5MkO31g9fTJcj7L88P0K1BtBHz0E235FisoiM8x7voLRFH%2FQzfkmqf9L6TBQ6T44AjnQviCwTpvypn%2BDHgtl83HLvjKpWzzAjWp5tl0r9CDRpT6VGfwigdr5T6%2BNUPwjCS6TOym8toejDA1d0d4x8cHG2X%2B1EbPbQeWIIpq%2BIzkwvXnCulOhiZEbSTY%2BrpHHLRe6aCsTgYmFVq2pXpecKUZZg%2FzK7LUAdlwXD0yF3UPRXixt1WvBJQiSf1p0bt0fKwTO0pvEJxNDaxOwGad7DLVPRNncixN7a%2BG3HP66dGTqDCmp9fGBjqkAX7Cz%2B2eFsP5gzezktdlnRorQ%2FTQ5KZN3x4387BNqQBZINaAAXYCJ6WTrwAERHb1kGcT96rEhk0AnvYLSRgXPBKBqKF4t5WJX17nb1EOu0BqibPM200yYqqrWv94w8EpNDkzplM0SKL8SArVNE6Kr%2FntrnZQiGDWhxNtwp7IQZscb4tZl%2FD1M4gwvwXiN71ITkUNVweOBcDRZMGfP0ju2GDUOjsL&X-Amz-Signature=bb2a7c28becbb848c38ad73fde8314191c5ae16f4f1d07473b7905b5c0f1aada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V73BCMGB%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh79qXwGEH3QJlrcIkSQN3KChlxN9js9zYHc7z6hrDOAIhAMFMIXwwqcMI7OBnJdcO%2FlJA63cOoEMswGY2rLSuSSC4KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRAOnyNS9eGhby4aAq3AOK7NfuM3oVbjFHwNuyI7MtkmI16xcQ4nLjhb5bXkVQvnHzbCIuYPe%2Fpwwghhljyom6lyNSjgql2s%2FIz8CuhHlCnmkg2u4isBJSQxEah7t06a%2FcOBzWCalVUCOVRPfWMqCAvIjoHVxqVVmIcJi%2BqTc1q26%2BZfzqAEdATpV%2FlgwRRBVePQrT6k9TCi82xYkK0Ch3dFMlAYu4xxUWb9CNwn8EDJfHvmU%2FmxRQ6aeKBNjhCCFHufq%2F17NR58rR2bioVWKfU%2Br8NNGCyCLRdNOb1yKKWYKva5hb8Jyz9QllYkTcL1Nz1qxWDyaG%2B%2FMqw1RWSt6HY2Dfr%2BJ%2FDzVxT5MkO31g9fTJcj7L88P0K1BtBHz0E235FisoiM8x7voLRFH%2FQzfkmqf9L6TBQ6T44AjnQviCwTpvypn%2BDHgtl83HLvjKpWzzAjWp5tl0r9CDRpT6VGfwigdr5T6%2BNUPwjCS6TOym8toejDA1d0d4x8cHG2X%2B1EbPbQeWIIpq%2BIzkwvXnCulOhiZEbSTY%2BrpHHLRe6aCsTgYmFVq2pXpecKUZZg%2FzK7LUAdlwXD0yF3UPRXixt1WvBJQiSf1p0bt0fKwTO0pvEJxNDaxOwGad7DLVPRNncixN7a%2BG3HP66dGTqDCmp9fGBjqkAX7Cz%2B2eFsP5gzezktdlnRorQ%2FTQ5KZN3x4387BNqQBZINaAAXYCJ6WTrwAERHb1kGcT96rEhk0AnvYLSRgXPBKBqKF4t5WJX17nb1EOu0BqibPM200yYqqrWv94w8EpNDkzplM0SKL8SArVNE6Kr%2FntrnZQiGDWhxNtwp7IQZscb4tZl%2FD1M4gwvwXiN71ITkUNVweOBcDRZMGfP0ju2GDUOjsL&X-Amz-Signature=f6dc9f87e20e4635948f3d5dab1da54bde1021614b4139daee0b0a9e4fa5b3ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V73BCMGB%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh79qXwGEH3QJlrcIkSQN3KChlxN9js9zYHc7z6hrDOAIhAMFMIXwwqcMI7OBnJdcO%2FlJA63cOoEMswGY2rLSuSSC4KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRAOnyNS9eGhby4aAq3AOK7NfuM3oVbjFHwNuyI7MtkmI16xcQ4nLjhb5bXkVQvnHzbCIuYPe%2Fpwwghhljyom6lyNSjgql2s%2FIz8CuhHlCnmkg2u4isBJSQxEah7t06a%2FcOBzWCalVUCOVRPfWMqCAvIjoHVxqVVmIcJi%2BqTc1q26%2BZfzqAEdATpV%2FlgwRRBVePQrT6k9TCi82xYkK0Ch3dFMlAYu4xxUWb9CNwn8EDJfHvmU%2FmxRQ6aeKBNjhCCFHufq%2F17NR58rR2bioVWKfU%2Br8NNGCyCLRdNOb1yKKWYKva5hb8Jyz9QllYkTcL1Nz1qxWDyaG%2B%2FMqw1RWSt6HY2Dfr%2BJ%2FDzVxT5MkO31g9fTJcj7L88P0K1BtBHz0E235FisoiM8x7voLRFH%2FQzfkmqf9L6TBQ6T44AjnQviCwTpvypn%2BDHgtl83HLvjKpWzzAjWp5tl0r9CDRpT6VGfwigdr5T6%2BNUPwjCS6TOym8toejDA1d0d4x8cHG2X%2B1EbPbQeWIIpq%2BIzkwvXnCulOhiZEbSTY%2BrpHHLRe6aCsTgYmFVq2pXpecKUZZg%2FzK7LUAdlwXD0yF3UPRXixt1WvBJQiSf1p0bt0fKwTO0pvEJxNDaxOwGad7DLVPRNncixN7a%2BG3HP66dGTqDCmp9fGBjqkAX7Cz%2B2eFsP5gzezktdlnRorQ%2FTQ5KZN3x4387BNqQBZINaAAXYCJ6WTrwAERHb1kGcT96rEhk0AnvYLSRgXPBKBqKF4t5WJX17nb1EOu0BqibPM200yYqqrWv94w8EpNDkzplM0SKL8SArVNE6Kr%2FntrnZQiGDWhxNtwp7IQZscb4tZl%2FD1M4gwvwXiN71ITkUNVweOBcDRZMGfP0ju2GDUOjsL&X-Amz-Signature=f07b60ee2d1de0fe609ead7d92eccead9c25cba6d7330a8e0e6cfc741d55018c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V73BCMGB%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh79qXwGEH3QJlrcIkSQN3KChlxN9js9zYHc7z6hrDOAIhAMFMIXwwqcMI7OBnJdcO%2FlJA63cOoEMswGY2rLSuSSC4KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRAOnyNS9eGhby4aAq3AOK7NfuM3oVbjFHwNuyI7MtkmI16xcQ4nLjhb5bXkVQvnHzbCIuYPe%2Fpwwghhljyom6lyNSjgql2s%2FIz8CuhHlCnmkg2u4isBJSQxEah7t06a%2FcOBzWCalVUCOVRPfWMqCAvIjoHVxqVVmIcJi%2BqTc1q26%2BZfzqAEdATpV%2FlgwRRBVePQrT6k9TCi82xYkK0Ch3dFMlAYu4xxUWb9CNwn8EDJfHvmU%2FmxRQ6aeKBNjhCCFHufq%2F17NR58rR2bioVWKfU%2Br8NNGCyCLRdNOb1yKKWYKva5hb8Jyz9QllYkTcL1Nz1qxWDyaG%2B%2FMqw1RWSt6HY2Dfr%2BJ%2FDzVxT5MkO31g9fTJcj7L88P0K1BtBHz0E235FisoiM8x7voLRFH%2FQzfkmqf9L6TBQ6T44AjnQviCwTpvypn%2BDHgtl83HLvjKpWzzAjWp5tl0r9CDRpT6VGfwigdr5T6%2BNUPwjCS6TOym8toejDA1d0d4x8cHG2X%2B1EbPbQeWIIpq%2BIzkwvXnCulOhiZEbSTY%2BrpHHLRe6aCsTgYmFVq2pXpecKUZZg%2FzK7LUAdlwXD0yF3UPRXixt1WvBJQiSf1p0bt0fKwTO0pvEJxNDaxOwGad7DLVPRNncixN7a%2BG3HP66dGTqDCmp9fGBjqkAX7Cz%2B2eFsP5gzezktdlnRorQ%2FTQ5KZN3x4387BNqQBZINaAAXYCJ6WTrwAERHb1kGcT96rEhk0AnvYLSRgXPBKBqKF4t5WJX17nb1EOu0BqibPM200yYqqrWv94w8EpNDkzplM0SKL8SArVNE6Kr%2FntrnZQiGDWhxNtwp7IQZscb4tZl%2FD1M4gwvwXiN71ITkUNVweOBcDRZMGfP0ju2GDUOjsL&X-Amz-Signature=800c4d6c40d9707eb39448f8c977f781bdc9660cad513dc5307253da43476a04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RRKJAOY%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEa8ZHZ%2FASLNZKG59r%2Bt735FQhaF3UFKlV9Kr5UQBuYdAiAfMpYjxgqUscAwbiqs0aTXDbM4cPWnwIwpxyD42OLaZSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO8UHU9N4FofoYwzMKtwDua6jBf3LoJThL3hjbeCwdt3PYZW65qYK5BreSUz77jKa30fRj7r3zHicBsu9dou%2BZOOqxQOfe%2FyZnOkOr4tSDOsbUJDiFdZSiT%2FIGcmXQWQXFnefTuI9P4KfTBQOOdKDg2AATumyA04UHOSo1m5bIfH%2Bq52LEbBpA%2FyxsZWJ9%2FeMzWjFCisdCoSrzcb9M4F7OEMFB7X5gBVLFEBvbORPKbdyLyi%2BOwGc6w%2BiN1i2tEo5FKqGqPDs1ntwJLlOt1tFX7yFGB%2FxYDF%2FK4Mnu%2BE6ZI%2FEH7H0q4fVVSH53L78bkI6Xy1h1fWHKdllqcbigRydXIsD63Nc7aHz5XRSVgg2EWCvH4lPb35DDZ%2BoYXWV3GWb6atx3Vlwmsi1SDZeeUjrTax6ziUgv8hi1Z4Qkhkkr8NeiKh02Iy5gAE2Y00OFqGjQjycEuE3E%2BHnemg0bPpvYVsEhBlMPDUusxpNEhOzuyqHRXJtVFwVGksAvdNYTQCpBhey5XQLdmUCYi34UGK8Pv%2BiBZ3O2bVuZo35cJdSLBMaiXs4FmygPHkParz6WLmTHKzZcL9WYf0bKLcexKGO%2BUIwdezf6m3b0jXQk1NGzV8IgkyfpEia3ylfhe6nIUsJO86sHHnur88ivdYw%2B6fXxgY6pgE6%2FEr8QrsllS9A1WWzYqllRMKVmMoVUa%2FyWFk6WX%2F3cZcveUf%2B%2FrJdPbZAzCxLfIM2Vd1s8MFW4yCysP14FLPF0Hfw4hANz%2Btbf%2FZgrAbEifgjd7CZ%2F1pnLDVoHsvGDQQcd41lADUzPpPov3g5mCPZEPwQVqIW91kIpBWj5qOSWU1KnokGfU4r2bqgQQ%2B0rnyPR8qcmljKr%2F611RTnGsSP5qqnCXoU&X-Amz-Signature=55d4eeab1f6069d7af5b5fdfd9c026f76eea655662a008b2b5dbb21594a47748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V73BCMGB%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh79qXwGEH3QJlrcIkSQN3KChlxN9js9zYHc7z6hrDOAIhAMFMIXwwqcMI7OBnJdcO%2FlJA63cOoEMswGY2rLSuSSC4KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRAOnyNS9eGhby4aAq3AOK7NfuM3oVbjFHwNuyI7MtkmI16xcQ4nLjhb5bXkVQvnHzbCIuYPe%2Fpwwghhljyom6lyNSjgql2s%2FIz8CuhHlCnmkg2u4isBJSQxEah7t06a%2FcOBzWCalVUCOVRPfWMqCAvIjoHVxqVVmIcJi%2BqTc1q26%2BZfzqAEdATpV%2FlgwRRBVePQrT6k9TCi82xYkK0Ch3dFMlAYu4xxUWb9CNwn8EDJfHvmU%2FmxRQ6aeKBNjhCCFHufq%2F17NR58rR2bioVWKfU%2Br8NNGCyCLRdNOb1yKKWYKva5hb8Jyz9QllYkTcL1Nz1qxWDyaG%2B%2FMqw1RWSt6HY2Dfr%2BJ%2FDzVxT5MkO31g9fTJcj7L88P0K1BtBHz0E235FisoiM8x7voLRFH%2FQzfkmqf9L6TBQ6T44AjnQviCwTpvypn%2BDHgtl83HLvjKpWzzAjWp5tl0r9CDRpT6VGfwigdr5T6%2BNUPwjCS6TOym8toejDA1d0d4x8cHG2X%2B1EbPbQeWIIpq%2BIzkwvXnCulOhiZEbSTY%2BrpHHLRe6aCsTgYmFVq2pXpecKUZZg%2FzK7LUAdlwXD0yF3UPRXixt1WvBJQiSf1p0bt0fKwTO0pvEJxNDaxOwGad7DLVPRNncixN7a%2BG3HP66dGTqDCmp9fGBjqkAX7Cz%2B2eFsP5gzezktdlnRorQ%2FTQ5KZN3x4387BNqQBZINaAAXYCJ6WTrwAERHb1kGcT96rEhk0AnvYLSRgXPBKBqKF4t5WJX17nb1EOu0BqibPM200yYqqrWv94w8EpNDkzplM0SKL8SArVNE6Kr%2FntrnZQiGDWhxNtwp7IQZscb4tZl%2FD1M4gwvwXiN71ITkUNVweOBcDRZMGfP0ju2GDUOjsL&X-Amz-Signature=e25870d298021d73e590ac4e2a9004ece41ddde83464e748cbb1cddd0ca04fbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V73BCMGB%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh79qXwGEH3QJlrcIkSQN3KChlxN9js9zYHc7z6hrDOAIhAMFMIXwwqcMI7OBnJdcO%2FlJA63cOoEMswGY2rLSuSSC4KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRAOnyNS9eGhby4aAq3AOK7NfuM3oVbjFHwNuyI7MtkmI16xcQ4nLjhb5bXkVQvnHzbCIuYPe%2Fpwwghhljyom6lyNSjgql2s%2FIz8CuhHlCnmkg2u4isBJSQxEah7t06a%2FcOBzWCalVUCOVRPfWMqCAvIjoHVxqVVmIcJi%2BqTc1q26%2BZfzqAEdATpV%2FlgwRRBVePQrT6k9TCi82xYkK0Ch3dFMlAYu4xxUWb9CNwn8EDJfHvmU%2FmxRQ6aeKBNjhCCFHufq%2F17NR58rR2bioVWKfU%2Br8NNGCyCLRdNOb1yKKWYKva5hb8Jyz9QllYkTcL1Nz1qxWDyaG%2B%2FMqw1RWSt6HY2Dfr%2BJ%2FDzVxT5MkO31g9fTJcj7L88P0K1BtBHz0E235FisoiM8x7voLRFH%2FQzfkmqf9L6TBQ6T44AjnQviCwTpvypn%2BDHgtl83HLvjKpWzzAjWp5tl0r9CDRpT6VGfwigdr5T6%2BNUPwjCS6TOym8toejDA1d0d4x8cHG2X%2B1EbPbQeWIIpq%2BIzkwvXnCulOhiZEbSTY%2BrpHHLRe6aCsTgYmFVq2pXpecKUZZg%2FzK7LUAdlwXD0yF3UPRXixt1WvBJQiSf1p0bt0fKwTO0pvEJxNDaxOwGad7DLVPRNncixN7a%2BG3HP66dGTqDCmp9fGBjqkAX7Cz%2B2eFsP5gzezktdlnRorQ%2FTQ5KZN3x4387BNqQBZINaAAXYCJ6WTrwAERHb1kGcT96rEhk0AnvYLSRgXPBKBqKF4t5WJX17nb1EOu0BqibPM200yYqqrWv94w8EpNDkzplM0SKL8SArVNE6Kr%2FntrnZQiGDWhxNtwp7IQZscb4tZl%2FD1M4gwvwXiN71ITkUNVweOBcDRZMGfP0ju2GDUOjsL&X-Amz-Signature=661127f39b81f45ba2bbce6ff7a758423349487d6a6a3c506608012bf8419880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V73BCMGB%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh79qXwGEH3QJlrcIkSQN3KChlxN9js9zYHc7z6hrDOAIhAMFMIXwwqcMI7OBnJdcO%2FlJA63cOoEMswGY2rLSuSSC4KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRAOnyNS9eGhby4aAq3AOK7NfuM3oVbjFHwNuyI7MtkmI16xcQ4nLjhb5bXkVQvnHzbCIuYPe%2Fpwwghhljyom6lyNSjgql2s%2FIz8CuhHlCnmkg2u4isBJSQxEah7t06a%2FcOBzWCalVUCOVRPfWMqCAvIjoHVxqVVmIcJi%2BqTc1q26%2BZfzqAEdATpV%2FlgwRRBVePQrT6k9TCi82xYkK0Ch3dFMlAYu4xxUWb9CNwn8EDJfHvmU%2FmxRQ6aeKBNjhCCFHufq%2F17NR58rR2bioVWKfU%2Br8NNGCyCLRdNOb1yKKWYKva5hb8Jyz9QllYkTcL1Nz1qxWDyaG%2B%2FMqw1RWSt6HY2Dfr%2BJ%2FDzVxT5MkO31g9fTJcj7L88P0K1BtBHz0E235FisoiM8x7voLRFH%2FQzfkmqf9L6TBQ6T44AjnQviCwTpvypn%2BDHgtl83HLvjKpWzzAjWp5tl0r9CDRpT6VGfwigdr5T6%2BNUPwjCS6TOym8toejDA1d0d4x8cHG2X%2B1EbPbQeWIIpq%2BIzkwvXnCulOhiZEbSTY%2BrpHHLRe6aCsTgYmFVq2pXpecKUZZg%2FzK7LUAdlwXD0yF3UPRXixt1WvBJQiSf1p0bt0fKwTO0pvEJxNDaxOwGad7DLVPRNncixN7a%2BG3HP66dGTqDCmp9fGBjqkAX7Cz%2B2eFsP5gzezktdlnRorQ%2FTQ5KZN3x4387BNqQBZINaAAXYCJ6WTrwAERHb1kGcT96rEhk0AnvYLSRgXPBKBqKF4t5WJX17nb1EOu0BqibPM200yYqqrWv94w8EpNDkzplM0SKL8SArVNE6Kr%2FntrnZQiGDWhxNtwp7IQZscb4tZl%2FD1M4gwvwXiN71ITkUNVweOBcDRZMGfP0ju2GDUOjsL&X-Amz-Signature=4bb0510265e21bf18158b2b9a9f7efe06455bca8cbcc5b97b1c37f19c6750462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V73BCMGB%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh79qXwGEH3QJlrcIkSQN3KChlxN9js9zYHc7z6hrDOAIhAMFMIXwwqcMI7OBnJdcO%2FlJA63cOoEMswGY2rLSuSSC4KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRAOnyNS9eGhby4aAq3AOK7NfuM3oVbjFHwNuyI7MtkmI16xcQ4nLjhb5bXkVQvnHzbCIuYPe%2Fpwwghhljyom6lyNSjgql2s%2FIz8CuhHlCnmkg2u4isBJSQxEah7t06a%2FcOBzWCalVUCOVRPfWMqCAvIjoHVxqVVmIcJi%2BqTc1q26%2BZfzqAEdATpV%2FlgwRRBVePQrT6k9TCi82xYkK0Ch3dFMlAYu4xxUWb9CNwn8EDJfHvmU%2FmxRQ6aeKBNjhCCFHufq%2F17NR58rR2bioVWKfU%2Br8NNGCyCLRdNOb1yKKWYKva5hb8Jyz9QllYkTcL1Nz1qxWDyaG%2B%2FMqw1RWSt6HY2Dfr%2BJ%2FDzVxT5MkO31g9fTJcj7L88P0K1BtBHz0E235FisoiM8x7voLRFH%2FQzfkmqf9L6TBQ6T44AjnQviCwTpvypn%2BDHgtl83HLvjKpWzzAjWp5tl0r9CDRpT6VGfwigdr5T6%2BNUPwjCS6TOym8toejDA1d0d4x8cHG2X%2B1EbPbQeWIIpq%2BIzkwvXnCulOhiZEbSTY%2BrpHHLRe6aCsTgYmFVq2pXpecKUZZg%2FzK7LUAdlwXD0yF3UPRXixt1WvBJQiSf1p0bt0fKwTO0pvEJxNDaxOwGad7DLVPRNncixN7a%2BG3HP66dGTqDCmp9fGBjqkAX7Cz%2B2eFsP5gzezktdlnRorQ%2FTQ5KZN3x4387BNqQBZINaAAXYCJ6WTrwAERHb1kGcT96rEhk0AnvYLSRgXPBKBqKF4t5WJX17nb1EOu0BqibPM200yYqqrWv94w8EpNDkzplM0SKL8SArVNE6Kr%2FntrnZQiGDWhxNtwp7IQZscb4tZl%2FD1M4gwvwXiN71ITkUNVweOBcDRZMGfP0ju2GDUOjsL&X-Amz-Signature=cf72c9790bbd8f6ad5c5330f4248256e3a001cc595881a2262fb827fd8becc63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V73BCMGB%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh79qXwGEH3QJlrcIkSQN3KChlxN9js9zYHc7z6hrDOAIhAMFMIXwwqcMI7OBnJdcO%2FlJA63cOoEMswGY2rLSuSSC4KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRAOnyNS9eGhby4aAq3AOK7NfuM3oVbjFHwNuyI7MtkmI16xcQ4nLjhb5bXkVQvnHzbCIuYPe%2Fpwwghhljyom6lyNSjgql2s%2FIz8CuhHlCnmkg2u4isBJSQxEah7t06a%2FcOBzWCalVUCOVRPfWMqCAvIjoHVxqVVmIcJi%2BqTc1q26%2BZfzqAEdATpV%2FlgwRRBVePQrT6k9TCi82xYkK0Ch3dFMlAYu4xxUWb9CNwn8EDJfHvmU%2FmxRQ6aeKBNjhCCFHufq%2F17NR58rR2bioVWKfU%2Br8NNGCyCLRdNOb1yKKWYKva5hb8Jyz9QllYkTcL1Nz1qxWDyaG%2B%2FMqw1RWSt6HY2Dfr%2BJ%2FDzVxT5MkO31g9fTJcj7L88P0K1BtBHz0E235FisoiM8x7voLRFH%2FQzfkmqf9L6TBQ6T44AjnQviCwTpvypn%2BDHgtl83HLvjKpWzzAjWp5tl0r9CDRpT6VGfwigdr5T6%2BNUPwjCS6TOym8toejDA1d0d4x8cHG2X%2B1EbPbQeWIIpq%2BIzkwvXnCulOhiZEbSTY%2BrpHHLRe6aCsTgYmFVq2pXpecKUZZg%2FzK7LUAdlwXD0yF3UPRXixt1WvBJQiSf1p0bt0fKwTO0pvEJxNDaxOwGad7DLVPRNncixN7a%2BG3HP66dGTqDCmp9fGBjqkAX7Cz%2B2eFsP5gzezktdlnRorQ%2FTQ5KZN3x4387BNqQBZINaAAXYCJ6WTrwAERHb1kGcT96rEhk0AnvYLSRgXPBKBqKF4t5WJX17nb1EOu0BqibPM200yYqqrWv94w8EpNDkzplM0SKL8SArVNE6Kr%2FntrnZQiGDWhxNtwp7IQZscb4tZl%2FD1M4gwvwXiN71ITkUNVweOBcDRZMGfP0ju2GDUOjsL&X-Amz-Signature=4f8abed4f2402924826a115fb883437527eb8635e06f70be9780059e1cef084e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V73BCMGB%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh79qXwGEH3QJlrcIkSQN3KChlxN9js9zYHc7z6hrDOAIhAMFMIXwwqcMI7OBnJdcO%2FlJA63cOoEMswGY2rLSuSSC4KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRAOnyNS9eGhby4aAq3AOK7NfuM3oVbjFHwNuyI7MtkmI16xcQ4nLjhb5bXkVQvnHzbCIuYPe%2Fpwwghhljyom6lyNSjgql2s%2FIz8CuhHlCnmkg2u4isBJSQxEah7t06a%2FcOBzWCalVUCOVRPfWMqCAvIjoHVxqVVmIcJi%2BqTc1q26%2BZfzqAEdATpV%2FlgwRRBVePQrT6k9TCi82xYkK0Ch3dFMlAYu4xxUWb9CNwn8EDJfHvmU%2FmxRQ6aeKBNjhCCFHufq%2F17NR58rR2bioVWKfU%2Br8NNGCyCLRdNOb1yKKWYKva5hb8Jyz9QllYkTcL1Nz1qxWDyaG%2B%2FMqw1RWSt6HY2Dfr%2BJ%2FDzVxT5MkO31g9fTJcj7L88P0K1BtBHz0E235FisoiM8x7voLRFH%2FQzfkmqf9L6TBQ6T44AjnQviCwTpvypn%2BDHgtl83HLvjKpWzzAjWp5tl0r9CDRpT6VGfwigdr5T6%2BNUPwjCS6TOym8toejDA1d0d4x8cHG2X%2B1EbPbQeWIIpq%2BIzkwvXnCulOhiZEbSTY%2BrpHHLRe6aCsTgYmFVq2pXpecKUZZg%2FzK7LUAdlwXD0yF3UPRXixt1WvBJQiSf1p0bt0fKwTO0pvEJxNDaxOwGad7DLVPRNncixN7a%2BG3HP66dGTqDCmp9fGBjqkAX7Cz%2B2eFsP5gzezktdlnRorQ%2FTQ5KZN3x4387BNqQBZINaAAXYCJ6WTrwAERHb1kGcT96rEhk0AnvYLSRgXPBKBqKF4t5WJX17nb1EOu0BqibPM200yYqqrWv94w8EpNDkzplM0SKL8SArVNE6Kr%2FntrnZQiGDWhxNtwp7IQZscb4tZl%2FD1M4gwvwXiN71ITkUNVweOBcDRZMGfP0ju2GDUOjsL&X-Amz-Signature=7b504bb334ee92c945e039512cfa9e867049c67f90a5140564952d22f468ddbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


