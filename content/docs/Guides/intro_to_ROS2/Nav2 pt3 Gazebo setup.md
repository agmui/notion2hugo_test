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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHFVVO6X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIC3lkp48y71vd8HZyZIcv2qpA66R97Cg2Mpxo9ypCxngAiAVL6gHHkpkg1OQp0ZIULtCQeiRJ5GY53BpNbs%2BBOghair%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMnHjw1oShKbd87RTWKtwDf0ke70Jad8KSllQiw85ik7HWj0DJ4l8lGrjyK9JzQ1Vh8%2FVHcm8N8js%2FeBkTeVP2Ih6ABfzX%2FCyuqNv9E7ZvsGL0HUYRQJ6nwugRKLpWBuwPQ9SCwS1xg%2FhETg8BLKC9y6d2qEqdB8yC%2ByZy80amJ8yPjqLAX%2FPsX2sQl5SPC%2FxRzLebEb%2B8sjCyU%2B8C4SbJpAEX4AlEO46%2BWCEZiGi3P0%2BbN6CWOkJIxO0dLkZMKSebM9sPVprJOc0ZalHXs5rD2wVtcSQUwTNnVpTyzEUaszvVKXW4Gq6HAyFclJNn7tsLlIXA4dbT7W%2BSwK8M%2BxJyTitiKf8IUvo%2BQYSh0rT1eCNs3LIdzVpjik8HbLm9WIITxk67tclH5cFXY%2F8VPbPmQr8Uz60PDevU65e2ujv7v5ft8Rko4c4VmZFmkDaucL%2FpgKa2nfEMufSz6x4ml5LndFqce%2B8KpLRvqE7kvW9ecdj5wn3BHNWRT36bfwoZ9CLx4A03wDYSmMR7V0bfj8pYTWkVgVC6OZyHekmYfF7dgYsVEOirTqNexXOC5AlVKh1xVoPc601NUtQSKwFA4NGmY2BIivb4GtsxpWe%2BfhlrM1zsKcqBUTEWFsPi%2Fe2hjNPhqgH4uQrbiV5hVZEwgrnBxAY6pgHR7LlxcYCVfCDADt3DfdGZhNtozBYTmOr9j3iRjz3QiAitXbU7PzbJK9XXciryMQAmtdH069fe6lTBKSGmsU6WQc7fVoj2MuytbtdgJcVHSUsq6i8uRa6%2FSke6pVUWEZbql2rbPULhC12Fa82NYVHrmzDGt1fU9eB2e%2B2Ni%2FV3HX%2FElo3Tg2dVG9Ilv%2FOaLj%2FIuidWixjN80gJcHWpgwwl6CY9T4gG&X-Amz-Signature=7fb52fa48b680cc94a9752a4a5b3230e0e646dca496241ae9da09e474da261f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHFVVO6X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIC3lkp48y71vd8HZyZIcv2qpA66R97Cg2Mpxo9ypCxngAiAVL6gHHkpkg1OQp0ZIULtCQeiRJ5GY53BpNbs%2BBOghair%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMnHjw1oShKbd87RTWKtwDf0ke70Jad8KSllQiw85ik7HWj0DJ4l8lGrjyK9JzQ1Vh8%2FVHcm8N8js%2FeBkTeVP2Ih6ABfzX%2FCyuqNv9E7ZvsGL0HUYRQJ6nwugRKLpWBuwPQ9SCwS1xg%2FhETg8BLKC9y6d2qEqdB8yC%2ByZy80amJ8yPjqLAX%2FPsX2sQl5SPC%2FxRzLebEb%2B8sjCyU%2B8C4SbJpAEX4AlEO46%2BWCEZiGi3P0%2BbN6CWOkJIxO0dLkZMKSebM9sPVprJOc0ZalHXs5rD2wVtcSQUwTNnVpTyzEUaszvVKXW4Gq6HAyFclJNn7tsLlIXA4dbT7W%2BSwK8M%2BxJyTitiKf8IUvo%2BQYSh0rT1eCNs3LIdzVpjik8HbLm9WIITxk67tclH5cFXY%2F8VPbPmQr8Uz60PDevU65e2ujv7v5ft8Rko4c4VmZFmkDaucL%2FpgKa2nfEMufSz6x4ml5LndFqce%2B8KpLRvqE7kvW9ecdj5wn3BHNWRT36bfwoZ9CLx4A03wDYSmMR7V0bfj8pYTWkVgVC6OZyHekmYfF7dgYsVEOirTqNexXOC5AlVKh1xVoPc601NUtQSKwFA4NGmY2BIivb4GtsxpWe%2BfhlrM1zsKcqBUTEWFsPi%2Fe2hjNPhqgH4uQrbiV5hVZEwgrnBxAY6pgHR7LlxcYCVfCDADt3DfdGZhNtozBYTmOr9j3iRjz3QiAitXbU7PzbJK9XXciryMQAmtdH069fe6lTBKSGmsU6WQc7fVoj2MuytbtdgJcVHSUsq6i8uRa6%2FSke6pVUWEZbql2rbPULhC12Fa82NYVHrmzDGt1fU9eB2e%2B2Ni%2FV3HX%2FElo3Tg2dVG9Ilv%2FOaLj%2FIuidWixjN80gJcHWpgwwl6CY9T4gG&X-Amz-Signature=ea41d93c8d0b3d42881de5ef2596cfa211596300d560115d1b67eb68c6d573dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHFVVO6X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIC3lkp48y71vd8HZyZIcv2qpA66R97Cg2Mpxo9ypCxngAiAVL6gHHkpkg1OQp0ZIULtCQeiRJ5GY53BpNbs%2BBOghair%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMnHjw1oShKbd87RTWKtwDf0ke70Jad8KSllQiw85ik7HWj0DJ4l8lGrjyK9JzQ1Vh8%2FVHcm8N8js%2FeBkTeVP2Ih6ABfzX%2FCyuqNv9E7ZvsGL0HUYRQJ6nwugRKLpWBuwPQ9SCwS1xg%2FhETg8BLKC9y6d2qEqdB8yC%2ByZy80amJ8yPjqLAX%2FPsX2sQl5SPC%2FxRzLebEb%2B8sjCyU%2B8C4SbJpAEX4AlEO46%2BWCEZiGi3P0%2BbN6CWOkJIxO0dLkZMKSebM9sPVprJOc0ZalHXs5rD2wVtcSQUwTNnVpTyzEUaszvVKXW4Gq6HAyFclJNn7tsLlIXA4dbT7W%2BSwK8M%2BxJyTitiKf8IUvo%2BQYSh0rT1eCNs3LIdzVpjik8HbLm9WIITxk67tclH5cFXY%2F8VPbPmQr8Uz60PDevU65e2ujv7v5ft8Rko4c4VmZFmkDaucL%2FpgKa2nfEMufSz6x4ml5LndFqce%2B8KpLRvqE7kvW9ecdj5wn3BHNWRT36bfwoZ9CLx4A03wDYSmMR7V0bfj8pYTWkVgVC6OZyHekmYfF7dgYsVEOirTqNexXOC5AlVKh1xVoPc601NUtQSKwFA4NGmY2BIivb4GtsxpWe%2BfhlrM1zsKcqBUTEWFsPi%2Fe2hjNPhqgH4uQrbiV5hVZEwgrnBxAY6pgHR7LlxcYCVfCDADt3DfdGZhNtozBYTmOr9j3iRjz3QiAitXbU7PzbJK9XXciryMQAmtdH069fe6lTBKSGmsU6WQc7fVoj2MuytbtdgJcVHSUsq6i8uRa6%2FSke6pVUWEZbql2rbPULhC12Fa82NYVHrmzDGt1fU9eB2e%2B2Ni%2FV3HX%2FElo3Tg2dVG9Ilv%2FOaLj%2FIuidWixjN80gJcHWpgwwl6CY9T4gG&X-Amz-Signature=a80911d785e5150ac724188149db3f8cea0eac001fcd69a7d35b16200cc61438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHFVVO6X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIC3lkp48y71vd8HZyZIcv2qpA66R97Cg2Mpxo9ypCxngAiAVL6gHHkpkg1OQp0ZIULtCQeiRJ5GY53BpNbs%2BBOghair%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMnHjw1oShKbd87RTWKtwDf0ke70Jad8KSllQiw85ik7HWj0DJ4l8lGrjyK9JzQ1Vh8%2FVHcm8N8js%2FeBkTeVP2Ih6ABfzX%2FCyuqNv9E7ZvsGL0HUYRQJ6nwugRKLpWBuwPQ9SCwS1xg%2FhETg8BLKC9y6d2qEqdB8yC%2ByZy80amJ8yPjqLAX%2FPsX2sQl5SPC%2FxRzLebEb%2B8sjCyU%2B8C4SbJpAEX4AlEO46%2BWCEZiGi3P0%2BbN6CWOkJIxO0dLkZMKSebM9sPVprJOc0ZalHXs5rD2wVtcSQUwTNnVpTyzEUaszvVKXW4Gq6HAyFclJNn7tsLlIXA4dbT7W%2BSwK8M%2BxJyTitiKf8IUvo%2BQYSh0rT1eCNs3LIdzVpjik8HbLm9WIITxk67tclH5cFXY%2F8VPbPmQr8Uz60PDevU65e2ujv7v5ft8Rko4c4VmZFmkDaucL%2FpgKa2nfEMufSz6x4ml5LndFqce%2B8KpLRvqE7kvW9ecdj5wn3BHNWRT36bfwoZ9CLx4A03wDYSmMR7V0bfj8pYTWkVgVC6OZyHekmYfF7dgYsVEOirTqNexXOC5AlVKh1xVoPc601NUtQSKwFA4NGmY2BIivb4GtsxpWe%2BfhlrM1zsKcqBUTEWFsPi%2Fe2hjNPhqgH4uQrbiV5hVZEwgrnBxAY6pgHR7LlxcYCVfCDADt3DfdGZhNtozBYTmOr9j3iRjz3QiAitXbU7PzbJK9XXciryMQAmtdH069fe6lTBKSGmsU6WQc7fVoj2MuytbtdgJcVHSUsq6i8uRa6%2FSke6pVUWEZbql2rbPULhC12Fa82NYVHrmzDGt1fU9eB2e%2B2Ni%2FV3HX%2FElo3Tg2dVG9Ilv%2FOaLj%2FIuidWixjN80gJcHWpgwwl6CY9T4gG&X-Amz-Signature=52525cb1d5f86f35861998bef9a7b82c4089f45bef468eda4cb6f57b80ef2747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634QHYSHC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDY90WTSuGJRnLa10yezUuiuubpXXfhVNvJxnJtD%2BglRQIgJOx05Qq8fw7uRTUKj4jWhkEixYvWkyGjh%2BU0U%2FSOlr8q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDM8%2FKmEftYA4zV%2FguyrcA%2B0EcoaQ4ih1EkRYwFBGvKmmBV2xOuRGdkGXR6UKzOnDUU%2FwgSpqNYIKrusRdqRo9CGJhnZoeVo1zDiiTwQRjKRJk%2BSGE2J7lT%2FXz2rYn%2FbhhhhINyHggkDstLQUdq8OX5qF0mnwBBxuEKkdASZN8sEWDm7EDf8s8RZ%2BGE4ByVri97SyHu4sRvF3yP%2B9KD1HwdGpY0j08KY0QxezWI9iIbuiFdXmxYi1WA%2BReAJuhPmpE%2BH9taM4W4JthluMbcCAlz5xtR2GnfkSMkVeahTUvDeaCCbzouPOX5bi8Oz%2BXlHsvRAhCEqkTasYXaCETb9UrYwi3yu5nO4xlzyKIqlLgzynzbQ3S3aKv8NVRc8L%2FyBOkt3ISGdeAYo0MqhFfOHKcVcfvCVAGCXshgqXur9L2xVz9tuogNvawW8c21U9%2FubbBY%2BVEKV3BS1PoqvaxO4vjJp4UufpHzRXPQltCdwrKmDfoJlKl8hhy17f%2Fkbxk%2Btatff3mgejpnAhopQuyPNRgs0DHViqDx03gK%2FTqEnMVKNnOdFI7fW2qaOFcH4OykSQ1MjGX3D4YgGQF2xBRi64ln2tShVxZEkJ2SVdMxd%2Fm17QnNASCKzQLLCJq5ExK6D2rN61Ci4g4uUOXL9hML%2B3wcQGOqUBeBQYQ%2BQqr5gnBWXtEmliAbz5XsmxSEiDLUfCh%2FQRZg6%2FdzC%2FHqz4hdzP3obO2sqznl1VFAgoD%2FbE2L9UPbmmcrg0QKWIjhmOWQbRpl%2BCaJhWPcqbJ4i5wbnF7omMPqPuiJgT3rRZC22v6W6OmE18%2B%2F3lwNaYDtM61k%2BFksw6DK21aS7i9dzn5blaLllf5i5Z0Hb%2Fm7jGYvg8zgbZaeqAIBI8caiB&X-Amz-Signature=254166e39e0730a00ba3c6d8e433c16d9bf629f448405f0c26b759cf2317f827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHFVVO6X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIC3lkp48y71vd8HZyZIcv2qpA66R97Cg2Mpxo9ypCxngAiAVL6gHHkpkg1OQp0ZIULtCQeiRJ5GY53BpNbs%2BBOghair%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMnHjw1oShKbd87RTWKtwDf0ke70Jad8KSllQiw85ik7HWj0DJ4l8lGrjyK9JzQ1Vh8%2FVHcm8N8js%2FeBkTeVP2Ih6ABfzX%2FCyuqNv9E7ZvsGL0HUYRQJ6nwugRKLpWBuwPQ9SCwS1xg%2FhETg8BLKC9y6d2qEqdB8yC%2ByZy80amJ8yPjqLAX%2FPsX2sQl5SPC%2FxRzLebEb%2B8sjCyU%2B8C4SbJpAEX4AlEO46%2BWCEZiGi3P0%2BbN6CWOkJIxO0dLkZMKSebM9sPVprJOc0ZalHXs5rD2wVtcSQUwTNnVpTyzEUaszvVKXW4Gq6HAyFclJNn7tsLlIXA4dbT7W%2BSwK8M%2BxJyTitiKf8IUvo%2BQYSh0rT1eCNs3LIdzVpjik8HbLm9WIITxk67tclH5cFXY%2F8VPbPmQr8Uz60PDevU65e2ujv7v5ft8Rko4c4VmZFmkDaucL%2FpgKa2nfEMufSz6x4ml5LndFqce%2B8KpLRvqE7kvW9ecdj5wn3BHNWRT36bfwoZ9CLx4A03wDYSmMR7V0bfj8pYTWkVgVC6OZyHekmYfF7dgYsVEOirTqNexXOC5AlVKh1xVoPc601NUtQSKwFA4NGmY2BIivb4GtsxpWe%2BfhlrM1zsKcqBUTEWFsPi%2Fe2hjNPhqgH4uQrbiV5hVZEwgrnBxAY6pgHR7LlxcYCVfCDADt3DfdGZhNtozBYTmOr9j3iRjz3QiAitXbU7PzbJK9XXciryMQAmtdH069fe6lTBKSGmsU6WQc7fVoj2MuytbtdgJcVHSUsq6i8uRa6%2FSke6pVUWEZbql2rbPULhC12Fa82NYVHrmzDGt1fU9eB2e%2B2Ni%2FV3HX%2FElo3Tg2dVG9Ilv%2FOaLj%2FIuidWixjN80gJcHWpgwwl6CY9T4gG&X-Amz-Signature=7af25d47844cace8c4af17c275b20b7abd0f77af2665529535d1a2bfd594e67a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHFVVO6X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIC3lkp48y71vd8HZyZIcv2qpA66R97Cg2Mpxo9ypCxngAiAVL6gHHkpkg1OQp0ZIULtCQeiRJ5GY53BpNbs%2BBOghair%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMnHjw1oShKbd87RTWKtwDf0ke70Jad8KSllQiw85ik7HWj0DJ4l8lGrjyK9JzQ1Vh8%2FVHcm8N8js%2FeBkTeVP2Ih6ABfzX%2FCyuqNv9E7ZvsGL0HUYRQJ6nwugRKLpWBuwPQ9SCwS1xg%2FhETg8BLKC9y6d2qEqdB8yC%2ByZy80amJ8yPjqLAX%2FPsX2sQl5SPC%2FxRzLebEb%2B8sjCyU%2B8C4SbJpAEX4AlEO46%2BWCEZiGi3P0%2BbN6CWOkJIxO0dLkZMKSebM9sPVprJOc0ZalHXs5rD2wVtcSQUwTNnVpTyzEUaszvVKXW4Gq6HAyFclJNn7tsLlIXA4dbT7W%2BSwK8M%2BxJyTitiKf8IUvo%2BQYSh0rT1eCNs3LIdzVpjik8HbLm9WIITxk67tclH5cFXY%2F8VPbPmQr8Uz60PDevU65e2ujv7v5ft8Rko4c4VmZFmkDaucL%2FpgKa2nfEMufSz6x4ml5LndFqce%2B8KpLRvqE7kvW9ecdj5wn3BHNWRT36bfwoZ9CLx4A03wDYSmMR7V0bfj8pYTWkVgVC6OZyHekmYfF7dgYsVEOirTqNexXOC5AlVKh1xVoPc601NUtQSKwFA4NGmY2BIivb4GtsxpWe%2BfhlrM1zsKcqBUTEWFsPi%2Fe2hjNPhqgH4uQrbiV5hVZEwgrnBxAY6pgHR7LlxcYCVfCDADt3DfdGZhNtozBYTmOr9j3iRjz3QiAitXbU7PzbJK9XXciryMQAmtdH069fe6lTBKSGmsU6WQc7fVoj2MuytbtdgJcVHSUsq6i8uRa6%2FSke6pVUWEZbql2rbPULhC12Fa82NYVHrmzDGt1fU9eB2e%2B2Ni%2FV3HX%2FElo3Tg2dVG9Ilv%2FOaLj%2FIuidWixjN80gJcHWpgwwl6CY9T4gG&X-Amz-Signature=f2d52fbaf0dbdbcb3415e9ec49fdd085aabe0facf135b7ad14a826c08cbff574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHFVVO6X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIC3lkp48y71vd8HZyZIcv2qpA66R97Cg2Mpxo9ypCxngAiAVL6gHHkpkg1OQp0ZIULtCQeiRJ5GY53BpNbs%2BBOghair%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMnHjw1oShKbd87RTWKtwDf0ke70Jad8KSllQiw85ik7HWj0DJ4l8lGrjyK9JzQ1Vh8%2FVHcm8N8js%2FeBkTeVP2Ih6ABfzX%2FCyuqNv9E7ZvsGL0HUYRQJ6nwugRKLpWBuwPQ9SCwS1xg%2FhETg8BLKC9y6d2qEqdB8yC%2ByZy80amJ8yPjqLAX%2FPsX2sQl5SPC%2FxRzLebEb%2B8sjCyU%2B8C4SbJpAEX4AlEO46%2BWCEZiGi3P0%2BbN6CWOkJIxO0dLkZMKSebM9sPVprJOc0ZalHXs5rD2wVtcSQUwTNnVpTyzEUaszvVKXW4Gq6HAyFclJNn7tsLlIXA4dbT7W%2BSwK8M%2BxJyTitiKf8IUvo%2BQYSh0rT1eCNs3LIdzVpjik8HbLm9WIITxk67tclH5cFXY%2F8VPbPmQr8Uz60PDevU65e2ujv7v5ft8Rko4c4VmZFmkDaucL%2FpgKa2nfEMufSz6x4ml5LndFqce%2B8KpLRvqE7kvW9ecdj5wn3BHNWRT36bfwoZ9CLx4A03wDYSmMR7V0bfj8pYTWkVgVC6OZyHekmYfF7dgYsVEOirTqNexXOC5AlVKh1xVoPc601NUtQSKwFA4NGmY2BIivb4GtsxpWe%2BfhlrM1zsKcqBUTEWFsPi%2Fe2hjNPhqgH4uQrbiV5hVZEwgrnBxAY6pgHR7LlxcYCVfCDADt3DfdGZhNtozBYTmOr9j3iRjz3QiAitXbU7PzbJK9XXciryMQAmtdH069fe6lTBKSGmsU6WQc7fVoj2MuytbtdgJcVHSUsq6i8uRa6%2FSke6pVUWEZbql2rbPULhC12Fa82NYVHrmzDGt1fU9eB2e%2B2Ni%2FV3HX%2FElo3Tg2dVG9Ilv%2FOaLj%2FIuidWixjN80gJcHWpgwwl6CY9T4gG&X-Amz-Signature=a0b822d51b988b13d7e1542cc541223ff61ab752527a274695bcd9ef1ae7db97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHFVVO6X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIC3lkp48y71vd8HZyZIcv2qpA66R97Cg2Mpxo9ypCxngAiAVL6gHHkpkg1OQp0ZIULtCQeiRJ5GY53BpNbs%2BBOghair%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMnHjw1oShKbd87RTWKtwDf0ke70Jad8KSllQiw85ik7HWj0DJ4l8lGrjyK9JzQ1Vh8%2FVHcm8N8js%2FeBkTeVP2Ih6ABfzX%2FCyuqNv9E7ZvsGL0HUYRQJ6nwugRKLpWBuwPQ9SCwS1xg%2FhETg8BLKC9y6d2qEqdB8yC%2ByZy80amJ8yPjqLAX%2FPsX2sQl5SPC%2FxRzLebEb%2B8sjCyU%2B8C4SbJpAEX4AlEO46%2BWCEZiGi3P0%2BbN6CWOkJIxO0dLkZMKSebM9sPVprJOc0ZalHXs5rD2wVtcSQUwTNnVpTyzEUaszvVKXW4Gq6HAyFclJNn7tsLlIXA4dbT7W%2BSwK8M%2BxJyTitiKf8IUvo%2BQYSh0rT1eCNs3LIdzVpjik8HbLm9WIITxk67tclH5cFXY%2F8VPbPmQr8Uz60PDevU65e2ujv7v5ft8Rko4c4VmZFmkDaucL%2FpgKa2nfEMufSz6x4ml5LndFqce%2B8KpLRvqE7kvW9ecdj5wn3BHNWRT36bfwoZ9CLx4A03wDYSmMR7V0bfj8pYTWkVgVC6OZyHekmYfF7dgYsVEOirTqNexXOC5AlVKh1xVoPc601NUtQSKwFA4NGmY2BIivb4GtsxpWe%2BfhlrM1zsKcqBUTEWFsPi%2Fe2hjNPhqgH4uQrbiV5hVZEwgrnBxAY6pgHR7LlxcYCVfCDADt3DfdGZhNtozBYTmOr9j3iRjz3QiAitXbU7PzbJK9XXciryMQAmtdH069fe6lTBKSGmsU6WQc7fVoj2MuytbtdgJcVHSUsq6i8uRa6%2FSke6pVUWEZbql2rbPULhC12Fa82NYVHrmzDGt1fU9eB2e%2B2Ni%2FV3HX%2FElo3Tg2dVG9Ilv%2FOaLj%2FIuidWixjN80gJcHWpgwwl6CY9T4gG&X-Amz-Signature=82d3f03016b5ee5d321fb1ae75b3ba93813d2dd962b8b532598bd811d9b9534e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHFVVO6X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIC3lkp48y71vd8HZyZIcv2qpA66R97Cg2Mpxo9ypCxngAiAVL6gHHkpkg1OQp0ZIULtCQeiRJ5GY53BpNbs%2BBOghair%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMnHjw1oShKbd87RTWKtwDf0ke70Jad8KSllQiw85ik7HWj0DJ4l8lGrjyK9JzQ1Vh8%2FVHcm8N8js%2FeBkTeVP2Ih6ABfzX%2FCyuqNv9E7ZvsGL0HUYRQJ6nwugRKLpWBuwPQ9SCwS1xg%2FhETg8BLKC9y6d2qEqdB8yC%2ByZy80amJ8yPjqLAX%2FPsX2sQl5SPC%2FxRzLebEb%2B8sjCyU%2B8C4SbJpAEX4AlEO46%2BWCEZiGi3P0%2BbN6CWOkJIxO0dLkZMKSebM9sPVprJOc0ZalHXs5rD2wVtcSQUwTNnVpTyzEUaszvVKXW4Gq6HAyFclJNn7tsLlIXA4dbT7W%2BSwK8M%2BxJyTitiKf8IUvo%2BQYSh0rT1eCNs3LIdzVpjik8HbLm9WIITxk67tclH5cFXY%2F8VPbPmQr8Uz60PDevU65e2ujv7v5ft8Rko4c4VmZFmkDaucL%2FpgKa2nfEMufSz6x4ml5LndFqce%2B8KpLRvqE7kvW9ecdj5wn3BHNWRT36bfwoZ9CLx4A03wDYSmMR7V0bfj8pYTWkVgVC6OZyHekmYfF7dgYsVEOirTqNexXOC5AlVKh1xVoPc601NUtQSKwFA4NGmY2BIivb4GtsxpWe%2BfhlrM1zsKcqBUTEWFsPi%2Fe2hjNPhqgH4uQrbiV5hVZEwgrnBxAY6pgHR7LlxcYCVfCDADt3DfdGZhNtozBYTmOr9j3iRjz3QiAitXbU7PzbJK9XXciryMQAmtdH069fe6lTBKSGmsU6WQc7fVoj2MuytbtdgJcVHSUsq6i8uRa6%2FSke6pVUWEZbql2rbPULhC12Fa82NYVHrmzDGt1fU9eB2e%2B2Ni%2FV3HX%2FElo3Tg2dVG9Ilv%2FOaLj%2FIuidWixjN80gJcHWpgwwl6CY9T4gG&X-Amz-Signature=f68c64bfa64029838e4fdd7a6333453f4454d607fd64914c69bd05d1616740fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHFVVO6X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIC3lkp48y71vd8HZyZIcv2qpA66R97Cg2Mpxo9ypCxngAiAVL6gHHkpkg1OQp0ZIULtCQeiRJ5GY53BpNbs%2BBOghair%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMnHjw1oShKbd87RTWKtwDf0ke70Jad8KSllQiw85ik7HWj0DJ4l8lGrjyK9JzQ1Vh8%2FVHcm8N8js%2FeBkTeVP2Ih6ABfzX%2FCyuqNv9E7ZvsGL0HUYRQJ6nwugRKLpWBuwPQ9SCwS1xg%2FhETg8BLKC9y6d2qEqdB8yC%2ByZy80amJ8yPjqLAX%2FPsX2sQl5SPC%2FxRzLebEb%2B8sjCyU%2B8C4SbJpAEX4AlEO46%2BWCEZiGi3P0%2BbN6CWOkJIxO0dLkZMKSebM9sPVprJOc0ZalHXs5rD2wVtcSQUwTNnVpTyzEUaszvVKXW4Gq6HAyFclJNn7tsLlIXA4dbT7W%2BSwK8M%2BxJyTitiKf8IUvo%2BQYSh0rT1eCNs3LIdzVpjik8HbLm9WIITxk67tclH5cFXY%2F8VPbPmQr8Uz60PDevU65e2ujv7v5ft8Rko4c4VmZFmkDaucL%2FpgKa2nfEMufSz6x4ml5LndFqce%2B8KpLRvqE7kvW9ecdj5wn3BHNWRT36bfwoZ9CLx4A03wDYSmMR7V0bfj8pYTWkVgVC6OZyHekmYfF7dgYsVEOirTqNexXOC5AlVKh1xVoPc601NUtQSKwFA4NGmY2BIivb4GtsxpWe%2BfhlrM1zsKcqBUTEWFsPi%2Fe2hjNPhqgH4uQrbiV5hVZEwgrnBxAY6pgHR7LlxcYCVfCDADt3DfdGZhNtozBYTmOr9j3iRjz3QiAitXbU7PzbJK9XXciryMQAmtdH069fe6lTBKSGmsU6WQc7fVoj2MuytbtdgJcVHSUsq6i8uRa6%2FSke6pVUWEZbql2rbPULhC12Fa82NYVHrmzDGt1fU9eB2e%2B2Ni%2FV3HX%2FElo3Tg2dVG9Ilv%2FOaLj%2FIuidWixjN80gJcHWpgwwl6CY9T4gG&X-Amz-Signature=8a1bde8293b739290cdd84a698d839950db680f95bc9a4c116ebc30bb0335b89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
