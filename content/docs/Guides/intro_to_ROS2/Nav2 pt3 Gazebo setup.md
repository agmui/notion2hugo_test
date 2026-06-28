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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDXUJ5DB%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDIsjXv5S3CEMwrcqViSHHxEtUhHU5%2BqLaSR%2F%2BrgIkhAiAZw88Ekf71kqDcOW4gAloa3Zi%2FAkrLwLVH1eLQ%2FVAIgiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVSiqWStdc6xyg6PqKtwDSFcicDCom7zh713x3K5ZPZ3CxM6QmwHYh%2BviNTHGBy8u9NSc%2FZB060ziyqbVKAEnqCypAbyEZp3OsBsh2tadbE%2FL364t8pbkegvcdKZkryG1bCaoPNMrEzs%2Bwv96oI2g2GADAow10v4IFlGnnzeyAt8ndNhaQGEJ8rQzGilsy0XAw9LKtTpiuOSOnfLHA7u3NHBWDpYS%2BqIPozLJtHloGMGTo7asdi3D9ERW60NqCPH02nCecmAiX9X09wTnvFthHuMflbmKwgCGD9BTJy%2Fo0U43CjvN%2FlHKgVC5hAqdLJerRko7cH4tVlTfjr9ZwUHn1FfIg4LXSVE%2FQAZe7LljL5CHM6RErvN3%2Fj44KX05r%2B%2BTiAo4a6hXiBF2XT8oPjNPC6xZR2zx3nWHvcQxvoG3Qauf0x78ijuwdngdM7FId5BbEGrp1NXRoAxh7F%2F1G%2Bzr4Gp7xbDgZXwa7dmpeRtkFvKeOZJc4KEp9YBeCe1MLOcmsOLp01kONE3IdXYRGk0lmVATGuTGMeSk%2BrjnHsfEk1nlRSMv7MW2dsm8loj411Qpw5Evsx69rlcfCRT5n6HCISp3zLPUNg1FR7poLnIU%2BaGxQic7gWymveoXOcUDRCtcLScuXAV4fWxDmJsw1J%2BC0gY6pgFu%2BY8YJZ4U0pU6I8w%2Bc5fTEWNRMG5Us9kPUoA1tT4uhRJ%2FSz4PkPk1zb9LC%2F5vvkJuB1OKTr07Vm%2B7S%2Fe0b1DQv%2FfcNMSl3olAg%2FXwQ42ZQeQMiVA66Tn4To93c2dtyO3ggFBl9HMslijG0T1uhF91VLjOOvaL%2BpRBvtQ%2BhAOTbMCh8G5CWd4IQlUHAgGfICJbmN8QyVE6oorfNf4diAb5%2F0ljEnUK&X-Amz-Signature=c3de064462c4df9e1291fcc9b1ef4a97b81dfb0634c823b7350e4944941eec36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDXUJ5DB%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDIsjXv5S3CEMwrcqViSHHxEtUhHU5%2BqLaSR%2F%2BrgIkhAiAZw88Ekf71kqDcOW4gAloa3Zi%2FAkrLwLVH1eLQ%2FVAIgiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVSiqWStdc6xyg6PqKtwDSFcicDCom7zh713x3K5ZPZ3CxM6QmwHYh%2BviNTHGBy8u9NSc%2FZB060ziyqbVKAEnqCypAbyEZp3OsBsh2tadbE%2FL364t8pbkegvcdKZkryG1bCaoPNMrEzs%2Bwv96oI2g2GADAow10v4IFlGnnzeyAt8ndNhaQGEJ8rQzGilsy0XAw9LKtTpiuOSOnfLHA7u3NHBWDpYS%2BqIPozLJtHloGMGTo7asdi3D9ERW60NqCPH02nCecmAiX9X09wTnvFthHuMflbmKwgCGD9BTJy%2Fo0U43CjvN%2FlHKgVC5hAqdLJerRko7cH4tVlTfjr9ZwUHn1FfIg4LXSVE%2FQAZe7LljL5CHM6RErvN3%2Fj44KX05r%2B%2BTiAo4a6hXiBF2XT8oPjNPC6xZR2zx3nWHvcQxvoG3Qauf0x78ijuwdngdM7FId5BbEGrp1NXRoAxh7F%2F1G%2Bzr4Gp7xbDgZXwa7dmpeRtkFvKeOZJc4KEp9YBeCe1MLOcmsOLp01kONE3IdXYRGk0lmVATGuTGMeSk%2BrjnHsfEk1nlRSMv7MW2dsm8loj411Qpw5Evsx69rlcfCRT5n6HCISp3zLPUNg1FR7poLnIU%2BaGxQic7gWymveoXOcUDRCtcLScuXAV4fWxDmJsw1J%2BC0gY6pgFu%2BY8YJZ4U0pU6I8w%2Bc5fTEWNRMG5Us9kPUoA1tT4uhRJ%2FSz4PkPk1zb9LC%2F5vvkJuB1OKTr07Vm%2B7S%2Fe0b1DQv%2FfcNMSl3olAg%2FXwQ42ZQeQMiVA66Tn4To93c2dtyO3ggFBl9HMslijG0T1uhF91VLjOOvaL%2BpRBvtQ%2BhAOTbMCh8G5CWd4IQlUHAgGfICJbmN8QyVE6oorfNf4diAb5%2F0ljEnUK&X-Amz-Signature=f2978aa769704c904453492878bb83423398b0a25458b80f1a058bac6bbf8722&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDXUJ5DB%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDIsjXv5S3CEMwrcqViSHHxEtUhHU5%2BqLaSR%2F%2BrgIkhAiAZw88Ekf71kqDcOW4gAloa3Zi%2FAkrLwLVH1eLQ%2FVAIgiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVSiqWStdc6xyg6PqKtwDSFcicDCom7zh713x3K5ZPZ3CxM6QmwHYh%2BviNTHGBy8u9NSc%2FZB060ziyqbVKAEnqCypAbyEZp3OsBsh2tadbE%2FL364t8pbkegvcdKZkryG1bCaoPNMrEzs%2Bwv96oI2g2GADAow10v4IFlGnnzeyAt8ndNhaQGEJ8rQzGilsy0XAw9LKtTpiuOSOnfLHA7u3NHBWDpYS%2BqIPozLJtHloGMGTo7asdi3D9ERW60NqCPH02nCecmAiX9X09wTnvFthHuMflbmKwgCGD9BTJy%2Fo0U43CjvN%2FlHKgVC5hAqdLJerRko7cH4tVlTfjr9ZwUHn1FfIg4LXSVE%2FQAZe7LljL5CHM6RErvN3%2Fj44KX05r%2B%2BTiAo4a6hXiBF2XT8oPjNPC6xZR2zx3nWHvcQxvoG3Qauf0x78ijuwdngdM7FId5BbEGrp1NXRoAxh7F%2F1G%2Bzr4Gp7xbDgZXwa7dmpeRtkFvKeOZJc4KEp9YBeCe1MLOcmsOLp01kONE3IdXYRGk0lmVATGuTGMeSk%2BrjnHsfEk1nlRSMv7MW2dsm8loj411Qpw5Evsx69rlcfCRT5n6HCISp3zLPUNg1FR7poLnIU%2BaGxQic7gWymveoXOcUDRCtcLScuXAV4fWxDmJsw1J%2BC0gY6pgFu%2BY8YJZ4U0pU6I8w%2Bc5fTEWNRMG5Us9kPUoA1tT4uhRJ%2FSz4PkPk1zb9LC%2F5vvkJuB1OKTr07Vm%2B7S%2Fe0b1DQv%2FfcNMSl3olAg%2FXwQ42ZQeQMiVA66Tn4To93c2dtyO3ggFBl9HMslijG0T1uhF91VLjOOvaL%2BpRBvtQ%2BhAOTbMCh8G5CWd4IQlUHAgGfICJbmN8QyVE6oorfNf4diAb5%2F0ljEnUK&X-Amz-Signature=cbf9b22d44f5539b235ac536a72f2b1f7bc8f80ed341cc16e4294e5d43959002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDXUJ5DB%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDIsjXv5S3CEMwrcqViSHHxEtUhHU5%2BqLaSR%2F%2BrgIkhAiAZw88Ekf71kqDcOW4gAloa3Zi%2FAkrLwLVH1eLQ%2FVAIgiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVSiqWStdc6xyg6PqKtwDSFcicDCom7zh713x3K5ZPZ3CxM6QmwHYh%2BviNTHGBy8u9NSc%2FZB060ziyqbVKAEnqCypAbyEZp3OsBsh2tadbE%2FL364t8pbkegvcdKZkryG1bCaoPNMrEzs%2Bwv96oI2g2GADAow10v4IFlGnnzeyAt8ndNhaQGEJ8rQzGilsy0XAw9LKtTpiuOSOnfLHA7u3NHBWDpYS%2BqIPozLJtHloGMGTo7asdi3D9ERW60NqCPH02nCecmAiX9X09wTnvFthHuMflbmKwgCGD9BTJy%2Fo0U43CjvN%2FlHKgVC5hAqdLJerRko7cH4tVlTfjr9ZwUHn1FfIg4LXSVE%2FQAZe7LljL5CHM6RErvN3%2Fj44KX05r%2B%2BTiAo4a6hXiBF2XT8oPjNPC6xZR2zx3nWHvcQxvoG3Qauf0x78ijuwdngdM7FId5BbEGrp1NXRoAxh7F%2F1G%2Bzr4Gp7xbDgZXwa7dmpeRtkFvKeOZJc4KEp9YBeCe1MLOcmsOLp01kONE3IdXYRGk0lmVATGuTGMeSk%2BrjnHsfEk1nlRSMv7MW2dsm8loj411Qpw5Evsx69rlcfCRT5n6HCISp3zLPUNg1FR7poLnIU%2BaGxQic7gWymveoXOcUDRCtcLScuXAV4fWxDmJsw1J%2BC0gY6pgFu%2BY8YJZ4U0pU6I8w%2Bc5fTEWNRMG5Us9kPUoA1tT4uhRJ%2FSz4PkPk1zb9LC%2F5vvkJuB1OKTr07Vm%2B7S%2Fe0b1DQv%2FfcNMSl3olAg%2FXwQ42ZQeQMiVA66Tn4To93c2dtyO3ggFBl9HMslijG0T1uhF91VLjOOvaL%2BpRBvtQ%2BhAOTbMCh8G5CWd4IQlUHAgGfICJbmN8QyVE6oorfNf4diAb5%2F0ljEnUK&X-Amz-Signature=14d2b56db032705f8ef8405f1701a4a8bca3d59338c03d8d80fc1deac7beba03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXAQYQCB%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvdUSNxclSb9%2BJr39Ob5QuVFK1PlZWqoQp8YLtRwl6FgIhAI%2BdhNwgaeffzv477JUydqVAfSJ0h3UgoENXFJ9KFMZeKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxT5J0mH%2B8rYWvZv0q3AMrx6ONokSSBMEyVU2SlGaBUITO5Z2PC7VkRC6d6IaaYrYPlWWdssCPULjjwKIu7feQW5x3w35gAuETuoFB67n1nnWwBWhiIjRxsPh874g%2BDGV2REVcD0xSkMRX88N0pO7kwXbupa5YkVjEgVPABkIga3Pfgp2fe9pLzIX48XVvUUxvMIqKYy%2Bj%2FUoeZiaG44yzaRm7R4UKr23qvErWTqOk0SDUJgio25nnLGEG2W5ZG4Ne7PikW7gWnYkXvjNux3%2B2oL1PVZcdIyfxqyrPQuHDDOWjuHT%2BWSwRflyU3R83oNFdjvpkYHDTyVa35x44aKnqgKito4%2BJom2sNZG6PhguDP7wfQO7uHUYIZoq%2F97aFRguE8IyTgEblSFzGv4POvBfJFkkrBfTdWIq%2BMgbpI3tWbaCA877p9sdy1W1xw1%2FSU2yGk18%2BQp5tBR1PVBRGS1fPNnUw8iEaAEs%2FX15Es2ZLT2qq80Y4AYpEtJXtJD73aFhWhKNoxKKkhXkSg%2FF9bChvT42b4%2FS3WWH%2FGlmw%2FocIk1Omy22qkwLqdoLhay7NpXTi82aDm6%2Fc3aoOlWpN633lKSF1ILzXxOyKe5hIRTxOWrksdxSb6N8yOGDhMK8ocbl4tG3qqScuMkwkDCNnoLSBjqkAUZtl4DLJL9Vx1s6p5DnaTaoLwpRwIZmOp06jfQmAtr6q1o9dXUKn4VzzAMa%2BP5zSSFHL25M1OOj3wQzzx7rRDxlWruOJ7GAFIhzg7g5g1PS1Ud6Q4e1qIe%2B9Wmuu2v%2FQffrp0Gh8HW%2Fe0tbQjgqfLzNtS8utPeC0Rg1Q4My46XTorgX6rsZB%2BVHUZtX%2FWbWt1yP%2F7MTCf4stawzbEw97sFAjwYg&X-Amz-Signature=376f6809974caac83886c139a3c9d87231199d050cfc3c6176dca8e62cca21c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDXUJ5DB%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDIsjXv5S3CEMwrcqViSHHxEtUhHU5%2BqLaSR%2F%2BrgIkhAiAZw88Ekf71kqDcOW4gAloa3Zi%2FAkrLwLVH1eLQ%2FVAIgiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVSiqWStdc6xyg6PqKtwDSFcicDCom7zh713x3K5ZPZ3CxM6QmwHYh%2BviNTHGBy8u9NSc%2FZB060ziyqbVKAEnqCypAbyEZp3OsBsh2tadbE%2FL364t8pbkegvcdKZkryG1bCaoPNMrEzs%2Bwv96oI2g2GADAow10v4IFlGnnzeyAt8ndNhaQGEJ8rQzGilsy0XAw9LKtTpiuOSOnfLHA7u3NHBWDpYS%2BqIPozLJtHloGMGTo7asdi3D9ERW60NqCPH02nCecmAiX9X09wTnvFthHuMflbmKwgCGD9BTJy%2Fo0U43CjvN%2FlHKgVC5hAqdLJerRko7cH4tVlTfjr9ZwUHn1FfIg4LXSVE%2FQAZe7LljL5CHM6RErvN3%2Fj44KX05r%2B%2BTiAo4a6hXiBF2XT8oPjNPC6xZR2zx3nWHvcQxvoG3Qauf0x78ijuwdngdM7FId5BbEGrp1NXRoAxh7F%2F1G%2Bzr4Gp7xbDgZXwa7dmpeRtkFvKeOZJc4KEp9YBeCe1MLOcmsOLp01kONE3IdXYRGk0lmVATGuTGMeSk%2BrjnHsfEk1nlRSMv7MW2dsm8loj411Qpw5Evsx69rlcfCRT5n6HCISp3zLPUNg1FR7poLnIU%2BaGxQic7gWymveoXOcUDRCtcLScuXAV4fWxDmJsw1J%2BC0gY6pgFu%2BY8YJZ4U0pU6I8w%2Bc5fTEWNRMG5Us9kPUoA1tT4uhRJ%2FSz4PkPk1zb9LC%2F5vvkJuB1OKTr07Vm%2B7S%2Fe0b1DQv%2FfcNMSl3olAg%2FXwQ42ZQeQMiVA66Tn4To93c2dtyO3ggFBl9HMslijG0T1uhF91VLjOOvaL%2BpRBvtQ%2BhAOTbMCh8G5CWd4IQlUHAgGfICJbmN8QyVE6oorfNf4diAb5%2F0ljEnUK&X-Amz-Signature=139772e452d5d9e5b59243c9971e86fa9af44cf1fc75d29e8c04f574b454c38a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDXUJ5DB%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDIsjXv5S3CEMwrcqViSHHxEtUhHU5%2BqLaSR%2F%2BrgIkhAiAZw88Ekf71kqDcOW4gAloa3Zi%2FAkrLwLVH1eLQ%2FVAIgiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVSiqWStdc6xyg6PqKtwDSFcicDCom7zh713x3K5ZPZ3CxM6QmwHYh%2BviNTHGBy8u9NSc%2FZB060ziyqbVKAEnqCypAbyEZp3OsBsh2tadbE%2FL364t8pbkegvcdKZkryG1bCaoPNMrEzs%2Bwv96oI2g2GADAow10v4IFlGnnzeyAt8ndNhaQGEJ8rQzGilsy0XAw9LKtTpiuOSOnfLHA7u3NHBWDpYS%2BqIPozLJtHloGMGTo7asdi3D9ERW60NqCPH02nCecmAiX9X09wTnvFthHuMflbmKwgCGD9BTJy%2Fo0U43CjvN%2FlHKgVC5hAqdLJerRko7cH4tVlTfjr9ZwUHn1FfIg4LXSVE%2FQAZe7LljL5CHM6RErvN3%2Fj44KX05r%2B%2BTiAo4a6hXiBF2XT8oPjNPC6xZR2zx3nWHvcQxvoG3Qauf0x78ijuwdngdM7FId5BbEGrp1NXRoAxh7F%2F1G%2Bzr4Gp7xbDgZXwa7dmpeRtkFvKeOZJc4KEp9YBeCe1MLOcmsOLp01kONE3IdXYRGk0lmVATGuTGMeSk%2BrjnHsfEk1nlRSMv7MW2dsm8loj411Qpw5Evsx69rlcfCRT5n6HCISp3zLPUNg1FR7poLnIU%2BaGxQic7gWymveoXOcUDRCtcLScuXAV4fWxDmJsw1J%2BC0gY6pgFu%2BY8YJZ4U0pU6I8w%2Bc5fTEWNRMG5Us9kPUoA1tT4uhRJ%2FSz4PkPk1zb9LC%2F5vvkJuB1OKTr07Vm%2B7S%2Fe0b1DQv%2FfcNMSl3olAg%2FXwQ42ZQeQMiVA66Tn4To93c2dtyO3ggFBl9HMslijG0T1uhF91VLjOOvaL%2BpRBvtQ%2BhAOTbMCh8G5CWd4IQlUHAgGfICJbmN8QyVE6oorfNf4diAb5%2F0ljEnUK&X-Amz-Signature=38cde0f4c62b096164426e74b91c7951cb48d06867a6b6e519a03fc82ceba7d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDXUJ5DB%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDIsjXv5S3CEMwrcqViSHHxEtUhHU5%2BqLaSR%2F%2BrgIkhAiAZw88Ekf71kqDcOW4gAloa3Zi%2FAkrLwLVH1eLQ%2FVAIgiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVSiqWStdc6xyg6PqKtwDSFcicDCom7zh713x3K5ZPZ3CxM6QmwHYh%2BviNTHGBy8u9NSc%2FZB060ziyqbVKAEnqCypAbyEZp3OsBsh2tadbE%2FL364t8pbkegvcdKZkryG1bCaoPNMrEzs%2Bwv96oI2g2GADAow10v4IFlGnnzeyAt8ndNhaQGEJ8rQzGilsy0XAw9LKtTpiuOSOnfLHA7u3NHBWDpYS%2BqIPozLJtHloGMGTo7asdi3D9ERW60NqCPH02nCecmAiX9X09wTnvFthHuMflbmKwgCGD9BTJy%2Fo0U43CjvN%2FlHKgVC5hAqdLJerRko7cH4tVlTfjr9ZwUHn1FfIg4LXSVE%2FQAZe7LljL5CHM6RErvN3%2Fj44KX05r%2B%2BTiAo4a6hXiBF2XT8oPjNPC6xZR2zx3nWHvcQxvoG3Qauf0x78ijuwdngdM7FId5BbEGrp1NXRoAxh7F%2F1G%2Bzr4Gp7xbDgZXwa7dmpeRtkFvKeOZJc4KEp9YBeCe1MLOcmsOLp01kONE3IdXYRGk0lmVATGuTGMeSk%2BrjnHsfEk1nlRSMv7MW2dsm8loj411Qpw5Evsx69rlcfCRT5n6HCISp3zLPUNg1FR7poLnIU%2BaGxQic7gWymveoXOcUDRCtcLScuXAV4fWxDmJsw1J%2BC0gY6pgFu%2BY8YJZ4U0pU6I8w%2Bc5fTEWNRMG5Us9kPUoA1tT4uhRJ%2FSz4PkPk1zb9LC%2F5vvkJuB1OKTr07Vm%2B7S%2Fe0b1DQv%2FfcNMSl3olAg%2FXwQ42ZQeQMiVA66Tn4To93c2dtyO3ggFBl9HMslijG0T1uhF91VLjOOvaL%2BpRBvtQ%2BhAOTbMCh8G5CWd4IQlUHAgGfICJbmN8QyVE6oorfNf4diAb5%2F0ljEnUK&X-Amz-Signature=777df68f3574044c1c46147c01f03d1bec62735176b651bdd054f72bad92bd76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDXUJ5DB%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDIsjXv5S3CEMwrcqViSHHxEtUhHU5%2BqLaSR%2F%2BrgIkhAiAZw88Ekf71kqDcOW4gAloa3Zi%2FAkrLwLVH1eLQ%2FVAIgiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVSiqWStdc6xyg6PqKtwDSFcicDCom7zh713x3K5ZPZ3CxM6QmwHYh%2BviNTHGBy8u9NSc%2FZB060ziyqbVKAEnqCypAbyEZp3OsBsh2tadbE%2FL364t8pbkegvcdKZkryG1bCaoPNMrEzs%2Bwv96oI2g2GADAow10v4IFlGnnzeyAt8ndNhaQGEJ8rQzGilsy0XAw9LKtTpiuOSOnfLHA7u3NHBWDpYS%2BqIPozLJtHloGMGTo7asdi3D9ERW60NqCPH02nCecmAiX9X09wTnvFthHuMflbmKwgCGD9BTJy%2Fo0U43CjvN%2FlHKgVC5hAqdLJerRko7cH4tVlTfjr9ZwUHn1FfIg4LXSVE%2FQAZe7LljL5CHM6RErvN3%2Fj44KX05r%2B%2BTiAo4a6hXiBF2XT8oPjNPC6xZR2zx3nWHvcQxvoG3Qauf0x78ijuwdngdM7FId5BbEGrp1NXRoAxh7F%2F1G%2Bzr4Gp7xbDgZXwa7dmpeRtkFvKeOZJc4KEp9YBeCe1MLOcmsOLp01kONE3IdXYRGk0lmVATGuTGMeSk%2BrjnHsfEk1nlRSMv7MW2dsm8loj411Qpw5Evsx69rlcfCRT5n6HCISp3zLPUNg1FR7poLnIU%2BaGxQic7gWymveoXOcUDRCtcLScuXAV4fWxDmJsw1J%2BC0gY6pgFu%2BY8YJZ4U0pU6I8w%2Bc5fTEWNRMG5Us9kPUoA1tT4uhRJ%2FSz4PkPk1zb9LC%2F5vvkJuB1OKTr07Vm%2B7S%2Fe0b1DQv%2FfcNMSl3olAg%2FXwQ42ZQeQMiVA66Tn4To93c2dtyO3ggFBl9HMslijG0T1uhF91VLjOOvaL%2BpRBvtQ%2BhAOTbMCh8G5CWd4IQlUHAgGfICJbmN8QyVE6oorfNf4diAb5%2F0ljEnUK&X-Amz-Signature=f427d9a5b6ee95edf7491c0759fe8416536af6b88e8b841ca3344e4170f065dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDXUJ5DB%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDIsjXv5S3CEMwrcqViSHHxEtUhHU5%2BqLaSR%2F%2BrgIkhAiAZw88Ekf71kqDcOW4gAloa3Zi%2FAkrLwLVH1eLQ%2FVAIgiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVSiqWStdc6xyg6PqKtwDSFcicDCom7zh713x3K5ZPZ3CxM6QmwHYh%2BviNTHGBy8u9NSc%2FZB060ziyqbVKAEnqCypAbyEZp3OsBsh2tadbE%2FL364t8pbkegvcdKZkryG1bCaoPNMrEzs%2Bwv96oI2g2GADAow10v4IFlGnnzeyAt8ndNhaQGEJ8rQzGilsy0XAw9LKtTpiuOSOnfLHA7u3NHBWDpYS%2BqIPozLJtHloGMGTo7asdi3D9ERW60NqCPH02nCecmAiX9X09wTnvFthHuMflbmKwgCGD9BTJy%2Fo0U43CjvN%2FlHKgVC5hAqdLJerRko7cH4tVlTfjr9ZwUHn1FfIg4LXSVE%2FQAZe7LljL5CHM6RErvN3%2Fj44KX05r%2B%2BTiAo4a6hXiBF2XT8oPjNPC6xZR2zx3nWHvcQxvoG3Qauf0x78ijuwdngdM7FId5BbEGrp1NXRoAxh7F%2F1G%2Bzr4Gp7xbDgZXwa7dmpeRtkFvKeOZJc4KEp9YBeCe1MLOcmsOLp01kONE3IdXYRGk0lmVATGuTGMeSk%2BrjnHsfEk1nlRSMv7MW2dsm8loj411Qpw5Evsx69rlcfCRT5n6HCISp3zLPUNg1FR7poLnIU%2BaGxQic7gWymveoXOcUDRCtcLScuXAV4fWxDmJsw1J%2BC0gY6pgFu%2BY8YJZ4U0pU6I8w%2Bc5fTEWNRMG5Us9kPUoA1tT4uhRJ%2FSz4PkPk1zb9LC%2F5vvkJuB1OKTr07Vm%2B7S%2Fe0b1DQv%2FfcNMSl3olAg%2FXwQ42ZQeQMiVA66Tn4To93c2dtyO3ggFBl9HMslijG0T1uhF91VLjOOvaL%2BpRBvtQ%2BhAOTbMCh8G5CWd4IQlUHAgGfICJbmN8QyVE6oorfNf4diAb5%2F0ljEnUK&X-Amz-Signature=46dc9a45803a057fd957cab949f28f6a4036a6d5a5e69e83bd65c850a82a8c2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDXUJ5DB%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDIsjXv5S3CEMwrcqViSHHxEtUhHU5%2BqLaSR%2F%2BrgIkhAiAZw88Ekf71kqDcOW4gAloa3Zi%2FAkrLwLVH1eLQ%2FVAIgiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVSiqWStdc6xyg6PqKtwDSFcicDCom7zh713x3K5ZPZ3CxM6QmwHYh%2BviNTHGBy8u9NSc%2FZB060ziyqbVKAEnqCypAbyEZp3OsBsh2tadbE%2FL364t8pbkegvcdKZkryG1bCaoPNMrEzs%2Bwv96oI2g2GADAow10v4IFlGnnzeyAt8ndNhaQGEJ8rQzGilsy0XAw9LKtTpiuOSOnfLHA7u3NHBWDpYS%2BqIPozLJtHloGMGTo7asdi3D9ERW60NqCPH02nCecmAiX9X09wTnvFthHuMflbmKwgCGD9BTJy%2Fo0U43CjvN%2FlHKgVC5hAqdLJerRko7cH4tVlTfjr9ZwUHn1FfIg4LXSVE%2FQAZe7LljL5CHM6RErvN3%2Fj44KX05r%2B%2BTiAo4a6hXiBF2XT8oPjNPC6xZR2zx3nWHvcQxvoG3Qauf0x78ijuwdngdM7FId5BbEGrp1NXRoAxh7F%2F1G%2Bzr4Gp7xbDgZXwa7dmpeRtkFvKeOZJc4KEp9YBeCe1MLOcmsOLp01kONE3IdXYRGk0lmVATGuTGMeSk%2BrjnHsfEk1nlRSMv7MW2dsm8loj411Qpw5Evsx69rlcfCRT5n6HCISp3zLPUNg1FR7poLnIU%2BaGxQic7gWymveoXOcUDRCtcLScuXAV4fWxDmJsw1J%2BC0gY6pgFu%2BY8YJZ4U0pU6I8w%2Bc5fTEWNRMG5Us9kPUoA1tT4uhRJ%2FSz4PkPk1zb9LC%2F5vvkJuB1OKTr07Vm%2B7S%2Fe0b1DQv%2FfcNMSl3olAg%2FXwQ42ZQeQMiVA66Tn4To93c2dtyO3ggFBl9HMslijG0T1uhF91VLjOOvaL%2BpRBvtQ%2BhAOTbMCh8G5CWd4IQlUHAgGfICJbmN8QyVE6oorfNf4diAb5%2F0ljEnUK&X-Amz-Signature=b5c33a3eed9b27a0b7ce8c227018efe90226d36fbe5f6671ea1af396ae0ec99a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


