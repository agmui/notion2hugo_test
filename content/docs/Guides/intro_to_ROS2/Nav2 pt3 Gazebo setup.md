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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I5FGVXH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIE59Tg9WNxeFVUMTpGSe2w6wU7ZDS5gyDcxfDCIhpj%2BNAiAfYDCJVoVSoWp2ZrKOxTFGpgIb3EqVtp%2BedMvOXAp1FCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMiRiNYNNwUr1IGUblKtwDOB7JMGU2qDjd%2B1SgApgMn8h8uknfJuz0w86mCOsVOXA%2FXAUKqpXdUzcIh5ildc8CrMa3Z7BKA2z2uq50Eve%2FjQVMiFGmRxSYvTHg1IFFJacxPw0xctWmW3BXg8yGPS%2FsRk1AdCnE8s2kzSlUZaoQyRsfazuUviAr%2FKRliBoPR4wpmwy3YZqvhXeL7yc%2FXca31bMllU3XuSyybTWdZvXU25eHILwW%2BGgKt%2FjrEIg9mAxSJnGvuKT5%2Bmj%2BkBBszrccDWUEXMkO96JinU8CGemkxSZl6dhrPLYIqp68YThhXODSBmRW0Yl4OW3EAYBhrwKf20zSzO8XqIAix1T5ikVX1s2%2FUbmdZGMNg4QWANth%2FTrJ2PZQH8Ahc%2BbWJb6gwjOdwqreSfLoHePeWfvafrSEMyyRMf0metHr9pwoRSXR%2BGEYToMJlrXKnKqhMLnq8nSsva8aMHM2ySn9AcebxG0jj%2FhYsh7KVQm4tlcRrTy0pm516ut8WVN%2Fe9pLKoiD6KpdUDXLHezvrrdNpgQWbMnxcJp7URry4U%2BwjVX8WyDC3RTu51gSZ5YP4D%2BU%2Bp4UCUEqSlU7GNKLebBtk90fG3E%2FRWFWY%2F%2FTjoZt0UU9XvVzHqnX57kLVuY4z%2F3Okm0wg4LCxAY6pgEf84qPsSTlT3RpdPe25qRYQsYxE42HVhHQRHctkL5MYw4Y46OBqUaiAss22eoYyeSSdKuJfRVf2qqT7ysJzzjzJbcvwJLJmVMXfAl4Ptz25inkWnL%2FRH%2BgKTOpAlnqtkG8P8aVL7VCLCu2ypmhaYED5jHN0WNowOnfCCe0TymxgVZGojEgb5fy3gmFuzIC2lU%2BCD7GrHf0pLtjz6K7GahMMLmRHZ5o&X-Amz-Signature=01c4a2281d0a4d94168fc01a299e3f2fd0e8575e390ebd200960bb5c286910ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I5FGVXH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIE59Tg9WNxeFVUMTpGSe2w6wU7ZDS5gyDcxfDCIhpj%2BNAiAfYDCJVoVSoWp2ZrKOxTFGpgIb3EqVtp%2BedMvOXAp1FCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMiRiNYNNwUr1IGUblKtwDOB7JMGU2qDjd%2B1SgApgMn8h8uknfJuz0w86mCOsVOXA%2FXAUKqpXdUzcIh5ildc8CrMa3Z7BKA2z2uq50Eve%2FjQVMiFGmRxSYvTHg1IFFJacxPw0xctWmW3BXg8yGPS%2FsRk1AdCnE8s2kzSlUZaoQyRsfazuUviAr%2FKRliBoPR4wpmwy3YZqvhXeL7yc%2FXca31bMllU3XuSyybTWdZvXU25eHILwW%2BGgKt%2FjrEIg9mAxSJnGvuKT5%2Bmj%2BkBBszrccDWUEXMkO96JinU8CGemkxSZl6dhrPLYIqp68YThhXODSBmRW0Yl4OW3EAYBhrwKf20zSzO8XqIAix1T5ikVX1s2%2FUbmdZGMNg4QWANth%2FTrJ2PZQH8Ahc%2BbWJb6gwjOdwqreSfLoHePeWfvafrSEMyyRMf0metHr9pwoRSXR%2BGEYToMJlrXKnKqhMLnq8nSsva8aMHM2ySn9AcebxG0jj%2FhYsh7KVQm4tlcRrTy0pm516ut8WVN%2Fe9pLKoiD6KpdUDXLHezvrrdNpgQWbMnxcJp7URry4U%2BwjVX8WyDC3RTu51gSZ5YP4D%2BU%2Bp4UCUEqSlU7GNKLebBtk90fG3E%2FRWFWY%2F%2FTjoZt0UU9XvVzHqnX57kLVuY4z%2F3Okm0wg4LCxAY6pgEf84qPsSTlT3RpdPe25qRYQsYxE42HVhHQRHctkL5MYw4Y46OBqUaiAss22eoYyeSSdKuJfRVf2qqT7ysJzzjzJbcvwJLJmVMXfAl4Ptz25inkWnL%2FRH%2BgKTOpAlnqtkG8P8aVL7VCLCu2ypmhaYED5jHN0WNowOnfCCe0TymxgVZGojEgb5fy3gmFuzIC2lU%2BCD7GrHf0pLtjz6K7GahMMLmRHZ5o&X-Amz-Signature=b5bb5ce22e98862d0c5c873bea35f4623e83f28f1970a0624efc953814959867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I5FGVXH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIE59Tg9WNxeFVUMTpGSe2w6wU7ZDS5gyDcxfDCIhpj%2BNAiAfYDCJVoVSoWp2ZrKOxTFGpgIb3EqVtp%2BedMvOXAp1FCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMiRiNYNNwUr1IGUblKtwDOB7JMGU2qDjd%2B1SgApgMn8h8uknfJuz0w86mCOsVOXA%2FXAUKqpXdUzcIh5ildc8CrMa3Z7BKA2z2uq50Eve%2FjQVMiFGmRxSYvTHg1IFFJacxPw0xctWmW3BXg8yGPS%2FsRk1AdCnE8s2kzSlUZaoQyRsfazuUviAr%2FKRliBoPR4wpmwy3YZqvhXeL7yc%2FXca31bMllU3XuSyybTWdZvXU25eHILwW%2BGgKt%2FjrEIg9mAxSJnGvuKT5%2Bmj%2BkBBszrccDWUEXMkO96JinU8CGemkxSZl6dhrPLYIqp68YThhXODSBmRW0Yl4OW3EAYBhrwKf20zSzO8XqIAix1T5ikVX1s2%2FUbmdZGMNg4QWANth%2FTrJ2PZQH8Ahc%2BbWJb6gwjOdwqreSfLoHePeWfvafrSEMyyRMf0metHr9pwoRSXR%2BGEYToMJlrXKnKqhMLnq8nSsva8aMHM2ySn9AcebxG0jj%2FhYsh7KVQm4tlcRrTy0pm516ut8WVN%2Fe9pLKoiD6KpdUDXLHezvrrdNpgQWbMnxcJp7URry4U%2BwjVX8WyDC3RTu51gSZ5YP4D%2BU%2Bp4UCUEqSlU7GNKLebBtk90fG3E%2FRWFWY%2F%2FTjoZt0UU9XvVzHqnX57kLVuY4z%2F3Okm0wg4LCxAY6pgEf84qPsSTlT3RpdPe25qRYQsYxE42HVhHQRHctkL5MYw4Y46OBqUaiAss22eoYyeSSdKuJfRVf2qqT7ysJzzjzJbcvwJLJmVMXfAl4Ptz25inkWnL%2FRH%2BgKTOpAlnqtkG8P8aVL7VCLCu2ypmhaYED5jHN0WNowOnfCCe0TymxgVZGojEgb5fy3gmFuzIC2lU%2BCD7GrHf0pLtjz6K7GahMMLmRHZ5o&X-Amz-Signature=df99aceb974d03dc6858a9dc2442136fa30d62ad273358f187bfa600d5bf80c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I5FGVXH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIE59Tg9WNxeFVUMTpGSe2w6wU7ZDS5gyDcxfDCIhpj%2BNAiAfYDCJVoVSoWp2ZrKOxTFGpgIb3EqVtp%2BedMvOXAp1FCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMiRiNYNNwUr1IGUblKtwDOB7JMGU2qDjd%2B1SgApgMn8h8uknfJuz0w86mCOsVOXA%2FXAUKqpXdUzcIh5ildc8CrMa3Z7BKA2z2uq50Eve%2FjQVMiFGmRxSYvTHg1IFFJacxPw0xctWmW3BXg8yGPS%2FsRk1AdCnE8s2kzSlUZaoQyRsfazuUviAr%2FKRliBoPR4wpmwy3YZqvhXeL7yc%2FXca31bMllU3XuSyybTWdZvXU25eHILwW%2BGgKt%2FjrEIg9mAxSJnGvuKT5%2Bmj%2BkBBszrccDWUEXMkO96JinU8CGemkxSZl6dhrPLYIqp68YThhXODSBmRW0Yl4OW3EAYBhrwKf20zSzO8XqIAix1T5ikVX1s2%2FUbmdZGMNg4QWANth%2FTrJ2PZQH8Ahc%2BbWJb6gwjOdwqreSfLoHePeWfvafrSEMyyRMf0metHr9pwoRSXR%2BGEYToMJlrXKnKqhMLnq8nSsva8aMHM2ySn9AcebxG0jj%2FhYsh7KVQm4tlcRrTy0pm516ut8WVN%2Fe9pLKoiD6KpdUDXLHezvrrdNpgQWbMnxcJp7URry4U%2BwjVX8WyDC3RTu51gSZ5YP4D%2BU%2Bp4UCUEqSlU7GNKLebBtk90fG3E%2FRWFWY%2F%2FTjoZt0UU9XvVzHqnX57kLVuY4z%2F3Okm0wg4LCxAY6pgEf84qPsSTlT3RpdPe25qRYQsYxE42HVhHQRHctkL5MYw4Y46OBqUaiAss22eoYyeSSdKuJfRVf2qqT7ysJzzjzJbcvwJLJmVMXfAl4Ptz25inkWnL%2FRH%2BgKTOpAlnqtkG8P8aVL7VCLCu2ypmhaYED5jHN0WNowOnfCCe0TymxgVZGojEgb5fy3gmFuzIC2lU%2BCD7GrHf0pLtjz6K7GahMMLmRHZ5o&X-Amz-Signature=8172021e399662a176fb8345eff6e7a04ad1f2f26960344675cc710f853d8cd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US5LBTY7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICByNuG4xj0b%2FLCsIZYC5cZEbxp6JnW7I3z%2B2xF89CmzAiAEiyTBNaoMmjKSu1TRNanTFfQVRQo0aQQ6sGFw%2FdJmDyr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMDqRnZ%2BdzDxdSMSSWKtwDqbMrEc%2BQlzuwjlnHH07gJoD2TukivLWFpYc4RQP3flHjkuHGTMxEmL4UdZd%2Fro0eISQOH0iwzBQy4bixyRNK%2F2RGGrQVi7JdDs%2FpZ0oBY7C3A9gj%2F3VJkhEnq%2BG1u9xBUtkr1JM%2FbrWcYysDwNmdZL%2B%2FMA4yDJtnmSs9VSOlmDlvDU%2BmqsD2uuq1gmDzwKJTR5rdisVto7qF0ekEN15r81d8rnE%2Bk8g0IXxLE%2Be1PYpHEhSCvgj4%2FSu%2B4qn9HOH3hZVWknZMCx6djZzJP9kPorffAGyFLorUWpzL8goiPNEe9Fw9lRdvDrtIin8PkDAo4vfAEFmeFXd2z8M8JUwuFuDR4GoubUe98Gv6Za8V9I38xTvdx7qn23TZUgyQyQ3Nj78FVTtlLByK6L1PQOEY8EBAV2%2BlM1RPWY2DzPG3djg1VRzhTXHAmrZVNX%2BJdQvTZDXPgXwilMiUSsHI28aaaM%2Bj3odG1WZqv5H%2BEQinoneuArSKWcii7zJWyK727kiCGmVDssR0v61l2W%2B6Ya5gGxiVrv0oa38hrFxTCyfITB5uzO2zCX8P15ResIYkPKPkakVxqHcawOo9YQJ7FaVVJl3KbbVRAvoNLNrN8NqOgyUR2G3DRnhrvn9ruC0w%2FIDCxAY6pgFtj5QFD1hvpPn5bshmose8b8zy93F%2FSdnMaHZJ8AofBWw6ZYovdiWsYOEVl9njEZpK5TZYVjd2RLOMI4hxkQvhQdP%2FF0uPDaPmzx7DDbtyTWOMub08SuvzUbbDhhDSL7z5hJPIEHNR7RL5Xyf3CGmFCg%2BV8vCbKJvSaPQWs%2BdoslA%2BeU3BBSPNatWWHTND6Z3v4quIUWOTyjEM1cEhPEaGi281nfoC&X-Amz-Signature=0e32c2b7508f19772a94f130399c6d0211b411dee682001bcf0136077c5038b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I5FGVXH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIE59Tg9WNxeFVUMTpGSe2w6wU7ZDS5gyDcxfDCIhpj%2BNAiAfYDCJVoVSoWp2ZrKOxTFGpgIb3EqVtp%2BedMvOXAp1FCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMiRiNYNNwUr1IGUblKtwDOB7JMGU2qDjd%2B1SgApgMn8h8uknfJuz0w86mCOsVOXA%2FXAUKqpXdUzcIh5ildc8CrMa3Z7BKA2z2uq50Eve%2FjQVMiFGmRxSYvTHg1IFFJacxPw0xctWmW3BXg8yGPS%2FsRk1AdCnE8s2kzSlUZaoQyRsfazuUviAr%2FKRliBoPR4wpmwy3YZqvhXeL7yc%2FXca31bMllU3XuSyybTWdZvXU25eHILwW%2BGgKt%2FjrEIg9mAxSJnGvuKT5%2Bmj%2BkBBszrccDWUEXMkO96JinU8CGemkxSZl6dhrPLYIqp68YThhXODSBmRW0Yl4OW3EAYBhrwKf20zSzO8XqIAix1T5ikVX1s2%2FUbmdZGMNg4QWANth%2FTrJ2PZQH8Ahc%2BbWJb6gwjOdwqreSfLoHePeWfvafrSEMyyRMf0metHr9pwoRSXR%2BGEYToMJlrXKnKqhMLnq8nSsva8aMHM2ySn9AcebxG0jj%2FhYsh7KVQm4tlcRrTy0pm516ut8WVN%2Fe9pLKoiD6KpdUDXLHezvrrdNpgQWbMnxcJp7URry4U%2BwjVX8WyDC3RTu51gSZ5YP4D%2BU%2Bp4UCUEqSlU7GNKLebBtk90fG3E%2FRWFWY%2F%2FTjoZt0UU9XvVzHqnX57kLVuY4z%2F3Okm0wg4LCxAY6pgEf84qPsSTlT3RpdPe25qRYQsYxE42HVhHQRHctkL5MYw4Y46OBqUaiAss22eoYyeSSdKuJfRVf2qqT7ysJzzjzJbcvwJLJmVMXfAl4Ptz25inkWnL%2FRH%2BgKTOpAlnqtkG8P8aVL7VCLCu2ypmhaYED5jHN0WNowOnfCCe0TymxgVZGojEgb5fy3gmFuzIC2lU%2BCD7GrHf0pLtjz6K7GahMMLmRHZ5o&X-Amz-Signature=eeaee247084e2e34ef1f1aaedbbc433007dea1e9fd1ce9338d6d4b45eacc9a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I5FGVXH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIE59Tg9WNxeFVUMTpGSe2w6wU7ZDS5gyDcxfDCIhpj%2BNAiAfYDCJVoVSoWp2ZrKOxTFGpgIb3EqVtp%2BedMvOXAp1FCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMiRiNYNNwUr1IGUblKtwDOB7JMGU2qDjd%2B1SgApgMn8h8uknfJuz0w86mCOsVOXA%2FXAUKqpXdUzcIh5ildc8CrMa3Z7BKA2z2uq50Eve%2FjQVMiFGmRxSYvTHg1IFFJacxPw0xctWmW3BXg8yGPS%2FsRk1AdCnE8s2kzSlUZaoQyRsfazuUviAr%2FKRliBoPR4wpmwy3YZqvhXeL7yc%2FXca31bMllU3XuSyybTWdZvXU25eHILwW%2BGgKt%2FjrEIg9mAxSJnGvuKT5%2Bmj%2BkBBszrccDWUEXMkO96JinU8CGemkxSZl6dhrPLYIqp68YThhXODSBmRW0Yl4OW3EAYBhrwKf20zSzO8XqIAix1T5ikVX1s2%2FUbmdZGMNg4QWANth%2FTrJ2PZQH8Ahc%2BbWJb6gwjOdwqreSfLoHePeWfvafrSEMyyRMf0metHr9pwoRSXR%2BGEYToMJlrXKnKqhMLnq8nSsva8aMHM2ySn9AcebxG0jj%2FhYsh7KVQm4tlcRrTy0pm516ut8WVN%2Fe9pLKoiD6KpdUDXLHezvrrdNpgQWbMnxcJp7URry4U%2BwjVX8WyDC3RTu51gSZ5YP4D%2BU%2Bp4UCUEqSlU7GNKLebBtk90fG3E%2FRWFWY%2F%2FTjoZt0UU9XvVzHqnX57kLVuY4z%2F3Okm0wg4LCxAY6pgEf84qPsSTlT3RpdPe25qRYQsYxE42HVhHQRHctkL5MYw4Y46OBqUaiAss22eoYyeSSdKuJfRVf2qqT7ysJzzjzJbcvwJLJmVMXfAl4Ptz25inkWnL%2FRH%2BgKTOpAlnqtkG8P8aVL7VCLCu2ypmhaYED5jHN0WNowOnfCCe0TymxgVZGojEgb5fy3gmFuzIC2lU%2BCD7GrHf0pLtjz6K7GahMMLmRHZ5o&X-Amz-Signature=68d42eb5882b92516aebb2e1a87297b92a27d098f922006d30a069f627f614f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I5FGVXH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIE59Tg9WNxeFVUMTpGSe2w6wU7ZDS5gyDcxfDCIhpj%2BNAiAfYDCJVoVSoWp2ZrKOxTFGpgIb3EqVtp%2BedMvOXAp1FCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMiRiNYNNwUr1IGUblKtwDOB7JMGU2qDjd%2B1SgApgMn8h8uknfJuz0w86mCOsVOXA%2FXAUKqpXdUzcIh5ildc8CrMa3Z7BKA2z2uq50Eve%2FjQVMiFGmRxSYvTHg1IFFJacxPw0xctWmW3BXg8yGPS%2FsRk1AdCnE8s2kzSlUZaoQyRsfazuUviAr%2FKRliBoPR4wpmwy3YZqvhXeL7yc%2FXca31bMllU3XuSyybTWdZvXU25eHILwW%2BGgKt%2FjrEIg9mAxSJnGvuKT5%2Bmj%2BkBBszrccDWUEXMkO96JinU8CGemkxSZl6dhrPLYIqp68YThhXODSBmRW0Yl4OW3EAYBhrwKf20zSzO8XqIAix1T5ikVX1s2%2FUbmdZGMNg4QWANth%2FTrJ2PZQH8Ahc%2BbWJb6gwjOdwqreSfLoHePeWfvafrSEMyyRMf0metHr9pwoRSXR%2BGEYToMJlrXKnKqhMLnq8nSsva8aMHM2ySn9AcebxG0jj%2FhYsh7KVQm4tlcRrTy0pm516ut8WVN%2Fe9pLKoiD6KpdUDXLHezvrrdNpgQWbMnxcJp7URry4U%2BwjVX8WyDC3RTu51gSZ5YP4D%2BU%2Bp4UCUEqSlU7GNKLebBtk90fG3E%2FRWFWY%2F%2FTjoZt0UU9XvVzHqnX57kLVuY4z%2F3Okm0wg4LCxAY6pgEf84qPsSTlT3RpdPe25qRYQsYxE42HVhHQRHctkL5MYw4Y46OBqUaiAss22eoYyeSSdKuJfRVf2qqT7ysJzzjzJbcvwJLJmVMXfAl4Ptz25inkWnL%2FRH%2BgKTOpAlnqtkG8P8aVL7VCLCu2ypmhaYED5jHN0WNowOnfCCe0TymxgVZGojEgb5fy3gmFuzIC2lU%2BCD7GrHf0pLtjz6K7GahMMLmRHZ5o&X-Amz-Signature=f21001dfd0ce8071637f39eadb2aa391fd039ab251ed84e60428c321bdce0072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I5FGVXH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIE59Tg9WNxeFVUMTpGSe2w6wU7ZDS5gyDcxfDCIhpj%2BNAiAfYDCJVoVSoWp2ZrKOxTFGpgIb3EqVtp%2BedMvOXAp1FCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMiRiNYNNwUr1IGUblKtwDOB7JMGU2qDjd%2B1SgApgMn8h8uknfJuz0w86mCOsVOXA%2FXAUKqpXdUzcIh5ildc8CrMa3Z7BKA2z2uq50Eve%2FjQVMiFGmRxSYvTHg1IFFJacxPw0xctWmW3BXg8yGPS%2FsRk1AdCnE8s2kzSlUZaoQyRsfazuUviAr%2FKRliBoPR4wpmwy3YZqvhXeL7yc%2FXca31bMllU3XuSyybTWdZvXU25eHILwW%2BGgKt%2FjrEIg9mAxSJnGvuKT5%2Bmj%2BkBBszrccDWUEXMkO96JinU8CGemkxSZl6dhrPLYIqp68YThhXODSBmRW0Yl4OW3EAYBhrwKf20zSzO8XqIAix1T5ikVX1s2%2FUbmdZGMNg4QWANth%2FTrJ2PZQH8Ahc%2BbWJb6gwjOdwqreSfLoHePeWfvafrSEMyyRMf0metHr9pwoRSXR%2BGEYToMJlrXKnKqhMLnq8nSsva8aMHM2ySn9AcebxG0jj%2FhYsh7KVQm4tlcRrTy0pm516ut8WVN%2Fe9pLKoiD6KpdUDXLHezvrrdNpgQWbMnxcJp7URry4U%2BwjVX8WyDC3RTu51gSZ5YP4D%2BU%2Bp4UCUEqSlU7GNKLebBtk90fG3E%2FRWFWY%2F%2FTjoZt0UU9XvVzHqnX57kLVuY4z%2F3Okm0wg4LCxAY6pgEf84qPsSTlT3RpdPe25qRYQsYxE42HVhHQRHctkL5MYw4Y46OBqUaiAss22eoYyeSSdKuJfRVf2qqT7ysJzzjzJbcvwJLJmVMXfAl4Ptz25inkWnL%2FRH%2BgKTOpAlnqtkG8P8aVL7VCLCu2ypmhaYED5jHN0WNowOnfCCe0TymxgVZGojEgb5fy3gmFuzIC2lU%2BCD7GrHf0pLtjz6K7GahMMLmRHZ5o&X-Amz-Signature=ff4da51cbfd56e3912d9d59c88305eb5309233095cf1d72927216f1708547e3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I5FGVXH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIE59Tg9WNxeFVUMTpGSe2w6wU7ZDS5gyDcxfDCIhpj%2BNAiAfYDCJVoVSoWp2ZrKOxTFGpgIb3EqVtp%2BedMvOXAp1FCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMiRiNYNNwUr1IGUblKtwDOB7JMGU2qDjd%2B1SgApgMn8h8uknfJuz0w86mCOsVOXA%2FXAUKqpXdUzcIh5ildc8CrMa3Z7BKA2z2uq50Eve%2FjQVMiFGmRxSYvTHg1IFFJacxPw0xctWmW3BXg8yGPS%2FsRk1AdCnE8s2kzSlUZaoQyRsfazuUviAr%2FKRliBoPR4wpmwy3YZqvhXeL7yc%2FXca31bMllU3XuSyybTWdZvXU25eHILwW%2BGgKt%2FjrEIg9mAxSJnGvuKT5%2Bmj%2BkBBszrccDWUEXMkO96JinU8CGemkxSZl6dhrPLYIqp68YThhXODSBmRW0Yl4OW3EAYBhrwKf20zSzO8XqIAix1T5ikVX1s2%2FUbmdZGMNg4QWANth%2FTrJ2PZQH8Ahc%2BbWJb6gwjOdwqreSfLoHePeWfvafrSEMyyRMf0metHr9pwoRSXR%2BGEYToMJlrXKnKqhMLnq8nSsva8aMHM2ySn9AcebxG0jj%2FhYsh7KVQm4tlcRrTy0pm516ut8WVN%2Fe9pLKoiD6KpdUDXLHezvrrdNpgQWbMnxcJp7URry4U%2BwjVX8WyDC3RTu51gSZ5YP4D%2BU%2Bp4UCUEqSlU7GNKLebBtk90fG3E%2FRWFWY%2F%2FTjoZt0UU9XvVzHqnX57kLVuY4z%2F3Okm0wg4LCxAY6pgEf84qPsSTlT3RpdPe25qRYQsYxE42HVhHQRHctkL5MYw4Y46OBqUaiAss22eoYyeSSdKuJfRVf2qqT7ysJzzjzJbcvwJLJmVMXfAl4Ptz25inkWnL%2FRH%2BgKTOpAlnqtkG8P8aVL7VCLCu2ypmhaYED5jHN0WNowOnfCCe0TymxgVZGojEgb5fy3gmFuzIC2lU%2BCD7GrHf0pLtjz6K7GahMMLmRHZ5o&X-Amz-Signature=3f9ef2fc338cbd64ad812b64c383e281d9d1717ffd238bfff233c58e44ea8da0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I5FGVXH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIE59Tg9WNxeFVUMTpGSe2w6wU7ZDS5gyDcxfDCIhpj%2BNAiAfYDCJVoVSoWp2ZrKOxTFGpgIb3EqVtp%2BedMvOXAp1FCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMiRiNYNNwUr1IGUblKtwDOB7JMGU2qDjd%2B1SgApgMn8h8uknfJuz0w86mCOsVOXA%2FXAUKqpXdUzcIh5ildc8CrMa3Z7BKA2z2uq50Eve%2FjQVMiFGmRxSYvTHg1IFFJacxPw0xctWmW3BXg8yGPS%2FsRk1AdCnE8s2kzSlUZaoQyRsfazuUviAr%2FKRliBoPR4wpmwy3YZqvhXeL7yc%2FXca31bMllU3XuSyybTWdZvXU25eHILwW%2BGgKt%2FjrEIg9mAxSJnGvuKT5%2Bmj%2BkBBszrccDWUEXMkO96JinU8CGemkxSZl6dhrPLYIqp68YThhXODSBmRW0Yl4OW3EAYBhrwKf20zSzO8XqIAix1T5ikVX1s2%2FUbmdZGMNg4QWANth%2FTrJ2PZQH8Ahc%2BbWJb6gwjOdwqreSfLoHePeWfvafrSEMyyRMf0metHr9pwoRSXR%2BGEYToMJlrXKnKqhMLnq8nSsva8aMHM2ySn9AcebxG0jj%2FhYsh7KVQm4tlcRrTy0pm516ut8WVN%2Fe9pLKoiD6KpdUDXLHezvrrdNpgQWbMnxcJp7URry4U%2BwjVX8WyDC3RTu51gSZ5YP4D%2BU%2Bp4UCUEqSlU7GNKLebBtk90fG3E%2FRWFWY%2F%2FTjoZt0UU9XvVzHqnX57kLVuY4z%2F3Okm0wg4LCxAY6pgEf84qPsSTlT3RpdPe25qRYQsYxE42HVhHQRHctkL5MYw4Y46OBqUaiAss22eoYyeSSdKuJfRVf2qqT7ysJzzjzJbcvwJLJmVMXfAl4Ptz25inkWnL%2FRH%2BgKTOpAlnqtkG8P8aVL7VCLCu2ypmhaYED5jHN0WNowOnfCCe0TymxgVZGojEgb5fy3gmFuzIC2lU%2BCD7GrHf0pLtjz6K7GahMMLmRHZ5o&X-Amz-Signature=183ece0ec3106489a355e29cb1e6f179113e4dff9e0202cb168e6722d168b892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
