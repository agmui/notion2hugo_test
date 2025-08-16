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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ7QJV6D%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDxTouysgw4FR393hgeB2g7VTS%2FJLIPAPuu2mXy724PHgIhAMqOyv1%2Bojp3MaV0a7Fbz8g5dt8asM6pMhedPhaxUog5Kv8DCHcQABoMNjM3NDIzMTgzODA1Igyi5nMhoU0N1zLfhZUq3AMmZ0E%2FM14hrxUozCqT38MZ9iN%2BfoaGzLZgyVZBu%2FFPVUexL1yQyyTmvcChj79gqBTCDvVGG4BXAZWyZ%2FiQL%2BF1BSA74omxtquDsV3ZljPZs2tdJ1cKDWcnRZ903Y%2FtWw%2FRqRNjih8K38ql123tR4jNrVXez1xEOQUsL2l0gP4mWV3yxYUeAol3w0PiFgib%2FfNNfH79%2BUGCwGsQi2OKCV4hgfQlhXpsnN0pZ1xEm4tkPmlkXt7olTPc%2F8c%2BVCqGNA%2B63wqg0HidM8yguMwgZogykG%2Bli%2F5tzmsFTykiUhukc81KhSjYFrwbTZrJjfKgOlTkDMGTz2YoOi424DCWI%2BZx4B4chYYMuWqtPzrz4Y7i0Oryj7RcX6vs%2B0u2INEFRD4cicJ1g4DYcWdMByccjpiJmH8GjUTzWBQT4QXpsLAiDP%2FmYDasJFwQxK7unSn4qO1RQye86mv4C4MENVmFC6yuciMReJer3i5HmzV%2F4ZPQdb%2B1DTYIkSCJ66AK7QIM2h8T3e3FIaXxZ%2BkB7KAsqkRJZ5JGpI2NQ7%2FlXWwZtysyuvmVxUPW4OyUHTbDbu8QY9vhpoVAv0Y0dipCCrjM8Bgdlv45CbtHLiX7DmJDEN%2FM2fng%2FlIhmh67h442MjDcmILFBjqkAcqqmdK0HhFMCvAK1rQATJxG7oRTJ0eR7cavYbDWoUU%2B4yyBJm7hb1RRigP6QtVKbrghmUMdYHW8kOost0mfVuz5vWvvgqFAq0LgitjyjhbG41sIrDCN4k8BaY7zo36SFW7g9CjuOZsLPPdRmBNZ0ti4JfIJAX3WRB%2BfYGgXvBsGuCRgF1ToCKNV4QPng5Q11EpIL3Medx7E%2F4b8wqehO75ne0%2Bm&X-Amz-Signature=07d99de37a6aae84e394e05a9145777b91bd6000284a088bd99879f9bdabf74c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ7QJV6D%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDxTouysgw4FR393hgeB2g7VTS%2FJLIPAPuu2mXy724PHgIhAMqOyv1%2Bojp3MaV0a7Fbz8g5dt8asM6pMhedPhaxUog5Kv8DCHcQABoMNjM3NDIzMTgzODA1Igyi5nMhoU0N1zLfhZUq3AMmZ0E%2FM14hrxUozCqT38MZ9iN%2BfoaGzLZgyVZBu%2FFPVUexL1yQyyTmvcChj79gqBTCDvVGG4BXAZWyZ%2FiQL%2BF1BSA74omxtquDsV3ZljPZs2tdJ1cKDWcnRZ903Y%2FtWw%2FRqRNjih8K38ql123tR4jNrVXez1xEOQUsL2l0gP4mWV3yxYUeAol3w0PiFgib%2FfNNfH79%2BUGCwGsQi2OKCV4hgfQlhXpsnN0pZ1xEm4tkPmlkXt7olTPc%2F8c%2BVCqGNA%2B63wqg0HidM8yguMwgZogykG%2Bli%2F5tzmsFTykiUhukc81KhSjYFrwbTZrJjfKgOlTkDMGTz2YoOi424DCWI%2BZx4B4chYYMuWqtPzrz4Y7i0Oryj7RcX6vs%2B0u2INEFRD4cicJ1g4DYcWdMByccjpiJmH8GjUTzWBQT4QXpsLAiDP%2FmYDasJFwQxK7unSn4qO1RQye86mv4C4MENVmFC6yuciMReJer3i5HmzV%2F4ZPQdb%2B1DTYIkSCJ66AK7QIM2h8T3e3FIaXxZ%2BkB7KAsqkRJZ5JGpI2NQ7%2FlXWwZtysyuvmVxUPW4OyUHTbDbu8QY9vhpoVAv0Y0dipCCrjM8Bgdlv45CbtHLiX7DmJDEN%2FM2fng%2FlIhmh67h442MjDcmILFBjqkAcqqmdK0HhFMCvAK1rQATJxG7oRTJ0eR7cavYbDWoUU%2B4yyBJm7hb1RRigP6QtVKbrghmUMdYHW8kOost0mfVuz5vWvvgqFAq0LgitjyjhbG41sIrDCN4k8BaY7zo36SFW7g9CjuOZsLPPdRmBNZ0ti4JfIJAX3WRB%2BfYGgXvBsGuCRgF1ToCKNV4QPng5Q11EpIL3Medx7E%2F4b8wqehO75ne0%2Bm&X-Amz-Signature=c18904f9b0d110d482b611631522ed5aa0a11e59f5d3cb5ee99a71d4a458d5e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ7QJV6D%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDxTouysgw4FR393hgeB2g7VTS%2FJLIPAPuu2mXy724PHgIhAMqOyv1%2Bojp3MaV0a7Fbz8g5dt8asM6pMhedPhaxUog5Kv8DCHcQABoMNjM3NDIzMTgzODA1Igyi5nMhoU0N1zLfhZUq3AMmZ0E%2FM14hrxUozCqT38MZ9iN%2BfoaGzLZgyVZBu%2FFPVUexL1yQyyTmvcChj79gqBTCDvVGG4BXAZWyZ%2FiQL%2BF1BSA74omxtquDsV3ZljPZs2tdJ1cKDWcnRZ903Y%2FtWw%2FRqRNjih8K38ql123tR4jNrVXez1xEOQUsL2l0gP4mWV3yxYUeAol3w0PiFgib%2FfNNfH79%2BUGCwGsQi2OKCV4hgfQlhXpsnN0pZ1xEm4tkPmlkXt7olTPc%2F8c%2BVCqGNA%2B63wqg0HidM8yguMwgZogykG%2Bli%2F5tzmsFTykiUhukc81KhSjYFrwbTZrJjfKgOlTkDMGTz2YoOi424DCWI%2BZx4B4chYYMuWqtPzrz4Y7i0Oryj7RcX6vs%2B0u2INEFRD4cicJ1g4DYcWdMByccjpiJmH8GjUTzWBQT4QXpsLAiDP%2FmYDasJFwQxK7unSn4qO1RQye86mv4C4MENVmFC6yuciMReJer3i5HmzV%2F4ZPQdb%2B1DTYIkSCJ66AK7QIM2h8T3e3FIaXxZ%2BkB7KAsqkRJZ5JGpI2NQ7%2FlXWwZtysyuvmVxUPW4OyUHTbDbu8QY9vhpoVAv0Y0dipCCrjM8Bgdlv45CbtHLiX7DmJDEN%2FM2fng%2FlIhmh67h442MjDcmILFBjqkAcqqmdK0HhFMCvAK1rQATJxG7oRTJ0eR7cavYbDWoUU%2B4yyBJm7hb1RRigP6QtVKbrghmUMdYHW8kOost0mfVuz5vWvvgqFAq0LgitjyjhbG41sIrDCN4k8BaY7zo36SFW7g9CjuOZsLPPdRmBNZ0ti4JfIJAX3WRB%2BfYGgXvBsGuCRgF1ToCKNV4QPng5Q11EpIL3Medx7E%2F4b8wqehO75ne0%2Bm&X-Amz-Signature=79e5e06498363b96b89944fbb1f3e5491877b8023625b29f960fabb8265031d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ7QJV6D%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDxTouysgw4FR393hgeB2g7VTS%2FJLIPAPuu2mXy724PHgIhAMqOyv1%2Bojp3MaV0a7Fbz8g5dt8asM6pMhedPhaxUog5Kv8DCHcQABoMNjM3NDIzMTgzODA1Igyi5nMhoU0N1zLfhZUq3AMmZ0E%2FM14hrxUozCqT38MZ9iN%2BfoaGzLZgyVZBu%2FFPVUexL1yQyyTmvcChj79gqBTCDvVGG4BXAZWyZ%2FiQL%2BF1BSA74omxtquDsV3ZljPZs2tdJ1cKDWcnRZ903Y%2FtWw%2FRqRNjih8K38ql123tR4jNrVXez1xEOQUsL2l0gP4mWV3yxYUeAol3w0PiFgib%2FfNNfH79%2BUGCwGsQi2OKCV4hgfQlhXpsnN0pZ1xEm4tkPmlkXt7olTPc%2F8c%2BVCqGNA%2B63wqg0HidM8yguMwgZogykG%2Bli%2F5tzmsFTykiUhukc81KhSjYFrwbTZrJjfKgOlTkDMGTz2YoOi424DCWI%2BZx4B4chYYMuWqtPzrz4Y7i0Oryj7RcX6vs%2B0u2INEFRD4cicJ1g4DYcWdMByccjpiJmH8GjUTzWBQT4QXpsLAiDP%2FmYDasJFwQxK7unSn4qO1RQye86mv4C4MENVmFC6yuciMReJer3i5HmzV%2F4ZPQdb%2B1DTYIkSCJ66AK7QIM2h8T3e3FIaXxZ%2BkB7KAsqkRJZ5JGpI2NQ7%2FlXWwZtysyuvmVxUPW4OyUHTbDbu8QY9vhpoVAv0Y0dipCCrjM8Bgdlv45CbtHLiX7DmJDEN%2FM2fng%2FlIhmh67h442MjDcmILFBjqkAcqqmdK0HhFMCvAK1rQATJxG7oRTJ0eR7cavYbDWoUU%2B4yyBJm7hb1RRigP6QtVKbrghmUMdYHW8kOost0mfVuz5vWvvgqFAq0LgitjyjhbG41sIrDCN4k8BaY7zo36SFW7g9CjuOZsLPPdRmBNZ0ti4JfIJAX3WRB%2BfYGgXvBsGuCRgF1ToCKNV4QPng5Q11EpIL3Medx7E%2F4b8wqehO75ne0%2Bm&X-Amz-Signature=0344e92c934cbbe997a8d92e804ee6b64708485e45d848f082debedfb3b67615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6YEKT7U%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDhQ7if%2BlCffV%2FehLtm7kB7mbtsNmAoaop533jJHRmHyAiEAugx0A5QfXTOm7EdvuGDfFpK5Iawe%2FecANZ6MDrtPPtcq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDECXwIivObzZX%2Ftf0ircA9kUhhdcdwD%2B2slHPwbEB%2BnEPHTtZu1f8zDVdZTfU2fH5SboYjoXeHeiXVdPyKfSeDLeie8bBCHPhMlQUfkyMzy4TaouqGvykZoAXSuHT3Xe5VglRlvFXCxZJk2EIaAh2QEClCFKPfBualDOHwO5Iq4%2F%2B1R0q42ghQGO9F9rshFeXOtFoH29cEPaoJi8f%2BQnyhHlyxk5SkqEqpVZQewFRfLd6DZHCeN4sQ7DULWrnK10ZxkWs2EmtSyIrcoPzT3VrthrbjX5RxbFTOz2TxtJa3BWlrXuOuyp67hnAUkraRzPyXvCBsgjLFPP4yDcPQXPrD0TO3EU8J3Ux3MJpoT6lU1gp7jnPu38cu7r0ZaAumJUvKQqvMPFemMxYvQQtLDVD5i%2FgzhfHmCJJY%2FeyV9d0oLmo%2FSUnbF%2FJEEyNFK8u1410jYEU%2B%2FUxmv%2FLtOzCZBQ%2Bf8j8h4ILJm1B0%2B%2BQEeV%2FwCEM0p59PdG%2BJlh3W7wsj4kllqnTEztTpaEfzA2Kzqg%2BGNWa6q8qZ38FuGvzXtdw7QsrlI%2FZiGtbH2Wl0t1qzGwGa2t%2B6dUHQpXjno4iSspE2yPQXYBcQ9k3UBFmM6nrP75XT08SiAjGxiKljILeREhxVHBTc8rDGn7EhRcMOOZgsUGOqUBJoeUOecLjWFuazTVVnXiD0mI7gsB0ZY0PJaMXnaio9JeOeCPiEoHD%2BLedgzrLZob%2F72Lzp4gqDm4DLlGpZ4ZKTcYC%2FNFLfhO4ynuEa%2BJfMZ5cd13xl6Hrr46NolyS9aV0k%2F%2Fb8yl5vvPYKjsVQk8qPPNK0OuI4q59Z4tQ42czJogCZKJo1TZk537eHWWoqNbotaUQrdNq4rH9vjGpy23181SSguA&X-Amz-Signature=4972ffe4341d82cce68d7029f273db2c94ffb5980b0c432d24581954c330ae4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ7QJV6D%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDxTouysgw4FR393hgeB2g7VTS%2FJLIPAPuu2mXy724PHgIhAMqOyv1%2Bojp3MaV0a7Fbz8g5dt8asM6pMhedPhaxUog5Kv8DCHcQABoMNjM3NDIzMTgzODA1Igyi5nMhoU0N1zLfhZUq3AMmZ0E%2FM14hrxUozCqT38MZ9iN%2BfoaGzLZgyVZBu%2FFPVUexL1yQyyTmvcChj79gqBTCDvVGG4BXAZWyZ%2FiQL%2BF1BSA74omxtquDsV3ZljPZs2tdJ1cKDWcnRZ903Y%2FtWw%2FRqRNjih8K38ql123tR4jNrVXez1xEOQUsL2l0gP4mWV3yxYUeAol3w0PiFgib%2FfNNfH79%2BUGCwGsQi2OKCV4hgfQlhXpsnN0pZ1xEm4tkPmlkXt7olTPc%2F8c%2BVCqGNA%2B63wqg0HidM8yguMwgZogykG%2Bli%2F5tzmsFTykiUhukc81KhSjYFrwbTZrJjfKgOlTkDMGTz2YoOi424DCWI%2BZx4B4chYYMuWqtPzrz4Y7i0Oryj7RcX6vs%2B0u2INEFRD4cicJ1g4DYcWdMByccjpiJmH8GjUTzWBQT4QXpsLAiDP%2FmYDasJFwQxK7unSn4qO1RQye86mv4C4MENVmFC6yuciMReJer3i5HmzV%2F4ZPQdb%2B1DTYIkSCJ66AK7QIM2h8T3e3FIaXxZ%2BkB7KAsqkRJZ5JGpI2NQ7%2FlXWwZtysyuvmVxUPW4OyUHTbDbu8QY9vhpoVAv0Y0dipCCrjM8Bgdlv45CbtHLiX7DmJDEN%2FM2fng%2FlIhmh67h442MjDcmILFBjqkAcqqmdK0HhFMCvAK1rQATJxG7oRTJ0eR7cavYbDWoUU%2B4yyBJm7hb1RRigP6QtVKbrghmUMdYHW8kOost0mfVuz5vWvvgqFAq0LgitjyjhbG41sIrDCN4k8BaY7zo36SFW7g9CjuOZsLPPdRmBNZ0ti4JfIJAX3WRB%2BfYGgXvBsGuCRgF1ToCKNV4QPng5Q11EpIL3Medx7E%2F4b8wqehO75ne0%2Bm&X-Amz-Signature=30921c86f6c6c171a50760240756fca27a3b1cda6c9fb857774c0458ab4b6bdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ7QJV6D%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDxTouysgw4FR393hgeB2g7VTS%2FJLIPAPuu2mXy724PHgIhAMqOyv1%2Bojp3MaV0a7Fbz8g5dt8asM6pMhedPhaxUog5Kv8DCHcQABoMNjM3NDIzMTgzODA1Igyi5nMhoU0N1zLfhZUq3AMmZ0E%2FM14hrxUozCqT38MZ9iN%2BfoaGzLZgyVZBu%2FFPVUexL1yQyyTmvcChj79gqBTCDvVGG4BXAZWyZ%2FiQL%2BF1BSA74omxtquDsV3ZljPZs2tdJ1cKDWcnRZ903Y%2FtWw%2FRqRNjih8K38ql123tR4jNrVXez1xEOQUsL2l0gP4mWV3yxYUeAol3w0PiFgib%2FfNNfH79%2BUGCwGsQi2OKCV4hgfQlhXpsnN0pZ1xEm4tkPmlkXt7olTPc%2F8c%2BVCqGNA%2B63wqg0HidM8yguMwgZogykG%2Bli%2F5tzmsFTykiUhukc81KhSjYFrwbTZrJjfKgOlTkDMGTz2YoOi424DCWI%2BZx4B4chYYMuWqtPzrz4Y7i0Oryj7RcX6vs%2B0u2INEFRD4cicJ1g4DYcWdMByccjpiJmH8GjUTzWBQT4QXpsLAiDP%2FmYDasJFwQxK7unSn4qO1RQye86mv4C4MENVmFC6yuciMReJer3i5HmzV%2F4ZPQdb%2B1DTYIkSCJ66AK7QIM2h8T3e3FIaXxZ%2BkB7KAsqkRJZ5JGpI2NQ7%2FlXWwZtysyuvmVxUPW4OyUHTbDbu8QY9vhpoVAv0Y0dipCCrjM8Bgdlv45CbtHLiX7DmJDEN%2FM2fng%2FlIhmh67h442MjDcmILFBjqkAcqqmdK0HhFMCvAK1rQATJxG7oRTJ0eR7cavYbDWoUU%2B4yyBJm7hb1RRigP6QtVKbrghmUMdYHW8kOost0mfVuz5vWvvgqFAq0LgitjyjhbG41sIrDCN4k8BaY7zo36SFW7g9CjuOZsLPPdRmBNZ0ti4JfIJAX3WRB%2BfYGgXvBsGuCRgF1ToCKNV4QPng5Q11EpIL3Medx7E%2F4b8wqehO75ne0%2Bm&X-Amz-Signature=3385739c004ea60907a93891418b9b17db6a31367cea79fefd1e852a3668b01d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ7QJV6D%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDxTouysgw4FR393hgeB2g7VTS%2FJLIPAPuu2mXy724PHgIhAMqOyv1%2Bojp3MaV0a7Fbz8g5dt8asM6pMhedPhaxUog5Kv8DCHcQABoMNjM3NDIzMTgzODA1Igyi5nMhoU0N1zLfhZUq3AMmZ0E%2FM14hrxUozCqT38MZ9iN%2BfoaGzLZgyVZBu%2FFPVUexL1yQyyTmvcChj79gqBTCDvVGG4BXAZWyZ%2FiQL%2BF1BSA74omxtquDsV3ZljPZs2tdJ1cKDWcnRZ903Y%2FtWw%2FRqRNjih8K38ql123tR4jNrVXez1xEOQUsL2l0gP4mWV3yxYUeAol3w0PiFgib%2FfNNfH79%2BUGCwGsQi2OKCV4hgfQlhXpsnN0pZ1xEm4tkPmlkXt7olTPc%2F8c%2BVCqGNA%2B63wqg0HidM8yguMwgZogykG%2Bli%2F5tzmsFTykiUhukc81KhSjYFrwbTZrJjfKgOlTkDMGTz2YoOi424DCWI%2BZx4B4chYYMuWqtPzrz4Y7i0Oryj7RcX6vs%2B0u2INEFRD4cicJ1g4DYcWdMByccjpiJmH8GjUTzWBQT4QXpsLAiDP%2FmYDasJFwQxK7unSn4qO1RQye86mv4C4MENVmFC6yuciMReJer3i5HmzV%2F4ZPQdb%2B1DTYIkSCJ66AK7QIM2h8T3e3FIaXxZ%2BkB7KAsqkRJZ5JGpI2NQ7%2FlXWwZtysyuvmVxUPW4OyUHTbDbu8QY9vhpoVAv0Y0dipCCrjM8Bgdlv45CbtHLiX7DmJDEN%2FM2fng%2FlIhmh67h442MjDcmILFBjqkAcqqmdK0HhFMCvAK1rQATJxG7oRTJ0eR7cavYbDWoUU%2B4yyBJm7hb1RRigP6QtVKbrghmUMdYHW8kOost0mfVuz5vWvvgqFAq0LgitjyjhbG41sIrDCN4k8BaY7zo36SFW7g9CjuOZsLPPdRmBNZ0ti4JfIJAX3WRB%2BfYGgXvBsGuCRgF1ToCKNV4QPng5Q11EpIL3Medx7E%2F4b8wqehO75ne0%2Bm&X-Amz-Signature=2d4c69cd3b9bd041bf4c2aa046fba09ff48cbfd0d89cf932acf07c222d1b14c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ7QJV6D%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDxTouysgw4FR393hgeB2g7VTS%2FJLIPAPuu2mXy724PHgIhAMqOyv1%2Bojp3MaV0a7Fbz8g5dt8asM6pMhedPhaxUog5Kv8DCHcQABoMNjM3NDIzMTgzODA1Igyi5nMhoU0N1zLfhZUq3AMmZ0E%2FM14hrxUozCqT38MZ9iN%2BfoaGzLZgyVZBu%2FFPVUexL1yQyyTmvcChj79gqBTCDvVGG4BXAZWyZ%2FiQL%2BF1BSA74omxtquDsV3ZljPZs2tdJ1cKDWcnRZ903Y%2FtWw%2FRqRNjih8K38ql123tR4jNrVXez1xEOQUsL2l0gP4mWV3yxYUeAol3w0PiFgib%2FfNNfH79%2BUGCwGsQi2OKCV4hgfQlhXpsnN0pZ1xEm4tkPmlkXt7olTPc%2F8c%2BVCqGNA%2B63wqg0HidM8yguMwgZogykG%2Bli%2F5tzmsFTykiUhukc81KhSjYFrwbTZrJjfKgOlTkDMGTz2YoOi424DCWI%2BZx4B4chYYMuWqtPzrz4Y7i0Oryj7RcX6vs%2B0u2INEFRD4cicJ1g4DYcWdMByccjpiJmH8GjUTzWBQT4QXpsLAiDP%2FmYDasJFwQxK7unSn4qO1RQye86mv4C4MENVmFC6yuciMReJer3i5HmzV%2F4ZPQdb%2B1DTYIkSCJ66AK7QIM2h8T3e3FIaXxZ%2BkB7KAsqkRJZ5JGpI2NQ7%2FlXWwZtysyuvmVxUPW4OyUHTbDbu8QY9vhpoVAv0Y0dipCCrjM8Bgdlv45CbtHLiX7DmJDEN%2FM2fng%2FlIhmh67h442MjDcmILFBjqkAcqqmdK0HhFMCvAK1rQATJxG7oRTJ0eR7cavYbDWoUU%2B4yyBJm7hb1RRigP6QtVKbrghmUMdYHW8kOost0mfVuz5vWvvgqFAq0LgitjyjhbG41sIrDCN4k8BaY7zo36SFW7g9CjuOZsLPPdRmBNZ0ti4JfIJAX3WRB%2BfYGgXvBsGuCRgF1ToCKNV4QPng5Q11EpIL3Medx7E%2F4b8wqehO75ne0%2Bm&X-Amz-Signature=49621687b90b8287a9191b05f3bf4ce181b99b4540ab9de62e9bba2546217a97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ7QJV6D%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDxTouysgw4FR393hgeB2g7VTS%2FJLIPAPuu2mXy724PHgIhAMqOyv1%2Bojp3MaV0a7Fbz8g5dt8asM6pMhedPhaxUog5Kv8DCHcQABoMNjM3NDIzMTgzODA1Igyi5nMhoU0N1zLfhZUq3AMmZ0E%2FM14hrxUozCqT38MZ9iN%2BfoaGzLZgyVZBu%2FFPVUexL1yQyyTmvcChj79gqBTCDvVGG4BXAZWyZ%2FiQL%2BF1BSA74omxtquDsV3ZljPZs2tdJ1cKDWcnRZ903Y%2FtWw%2FRqRNjih8K38ql123tR4jNrVXez1xEOQUsL2l0gP4mWV3yxYUeAol3w0PiFgib%2FfNNfH79%2BUGCwGsQi2OKCV4hgfQlhXpsnN0pZ1xEm4tkPmlkXt7olTPc%2F8c%2BVCqGNA%2B63wqg0HidM8yguMwgZogykG%2Bli%2F5tzmsFTykiUhukc81KhSjYFrwbTZrJjfKgOlTkDMGTz2YoOi424DCWI%2BZx4B4chYYMuWqtPzrz4Y7i0Oryj7RcX6vs%2B0u2INEFRD4cicJ1g4DYcWdMByccjpiJmH8GjUTzWBQT4QXpsLAiDP%2FmYDasJFwQxK7unSn4qO1RQye86mv4C4MENVmFC6yuciMReJer3i5HmzV%2F4ZPQdb%2B1DTYIkSCJ66AK7QIM2h8T3e3FIaXxZ%2BkB7KAsqkRJZ5JGpI2NQ7%2FlXWwZtysyuvmVxUPW4OyUHTbDbu8QY9vhpoVAv0Y0dipCCrjM8Bgdlv45CbtHLiX7DmJDEN%2FM2fng%2FlIhmh67h442MjDcmILFBjqkAcqqmdK0HhFMCvAK1rQATJxG7oRTJ0eR7cavYbDWoUU%2B4yyBJm7hb1RRigP6QtVKbrghmUMdYHW8kOost0mfVuz5vWvvgqFAq0LgitjyjhbG41sIrDCN4k8BaY7zo36SFW7g9CjuOZsLPPdRmBNZ0ti4JfIJAX3WRB%2BfYGgXvBsGuCRgF1ToCKNV4QPng5Q11EpIL3Medx7E%2F4b8wqehO75ne0%2Bm&X-Amz-Signature=ac793d35618a2c7e0fce8375ba949c458d4ba3ce504d33095dcca39458ee5b44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ7QJV6D%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDxTouysgw4FR393hgeB2g7VTS%2FJLIPAPuu2mXy724PHgIhAMqOyv1%2Bojp3MaV0a7Fbz8g5dt8asM6pMhedPhaxUog5Kv8DCHcQABoMNjM3NDIzMTgzODA1Igyi5nMhoU0N1zLfhZUq3AMmZ0E%2FM14hrxUozCqT38MZ9iN%2BfoaGzLZgyVZBu%2FFPVUexL1yQyyTmvcChj79gqBTCDvVGG4BXAZWyZ%2FiQL%2BF1BSA74omxtquDsV3ZljPZs2tdJ1cKDWcnRZ903Y%2FtWw%2FRqRNjih8K38ql123tR4jNrVXez1xEOQUsL2l0gP4mWV3yxYUeAol3w0PiFgib%2FfNNfH79%2BUGCwGsQi2OKCV4hgfQlhXpsnN0pZ1xEm4tkPmlkXt7olTPc%2F8c%2BVCqGNA%2B63wqg0HidM8yguMwgZogykG%2Bli%2F5tzmsFTykiUhukc81KhSjYFrwbTZrJjfKgOlTkDMGTz2YoOi424DCWI%2BZx4B4chYYMuWqtPzrz4Y7i0Oryj7RcX6vs%2B0u2INEFRD4cicJ1g4DYcWdMByccjpiJmH8GjUTzWBQT4QXpsLAiDP%2FmYDasJFwQxK7unSn4qO1RQye86mv4C4MENVmFC6yuciMReJer3i5HmzV%2F4ZPQdb%2B1DTYIkSCJ66AK7QIM2h8T3e3FIaXxZ%2BkB7KAsqkRJZ5JGpI2NQ7%2FlXWwZtysyuvmVxUPW4OyUHTbDbu8QY9vhpoVAv0Y0dipCCrjM8Bgdlv45CbtHLiX7DmJDEN%2FM2fng%2FlIhmh67h442MjDcmILFBjqkAcqqmdK0HhFMCvAK1rQATJxG7oRTJ0eR7cavYbDWoUU%2B4yyBJm7hb1RRigP6QtVKbrghmUMdYHW8kOost0mfVuz5vWvvgqFAq0LgitjyjhbG41sIrDCN4k8BaY7zo36SFW7g9CjuOZsLPPdRmBNZ0ti4JfIJAX3WRB%2BfYGgXvBsGuCRgF1ToCKNV4QPng5Q11EpIL3Medx7E%2F4b8wqehO75ne0%2Bm&X-Amz-Signature=c367e9882cd569d422e80bd0a5d62fa0b60d0f0bb340582b44dfb436102f891b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


