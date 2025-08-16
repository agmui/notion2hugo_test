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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEEADQO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCikG5sWduXrk5yl9j2fwMobIZ6y8DfIf1PuZyoqJ1l0gIgZnRe6xHicpMnb01o%2FwY5y5T8ZpelaLEm25e5GPCw6lIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIUtG0L3KuH3S%2Bu4circA5IQkVvBqaxhLIQiRKgS5wjqFgmHl02z8yWbLakSxMV3RlS31ybLCBdVa0cqnJVXACb1QgmZsJpCGN19ZEEtJA50tJaOO0WHk87UnqHQOHJ02KbDIw9%2FOQQJ6BHZ91RzXppzWmn0Ji35aSzdGFd5jQdJj%2Frnm9d2yJSZvAu7sfGl8NK29LO8rszdRZ0DlTkjazL1xkA7wTmONFUNC2ezW52Qqg2z4asWsi2UTykbRDku34Lko9EAjq%2BntTI27k8HsKiCe0uGJl0T6K1LEgmvRbLzcVztTO0vOHGRKOFRmZFOg9u6TzfZ%2FFq3b%2Bde5bdT3RuOq%2Fbjlj1iS91uqIiaooCenBjw%2BO5g5hQjAy6Ak%2BpMDkky1y7DNDZIhY%2BvNzP6Uv0CUsHr9CPO1bayjKsQ8oB3dUHcOji8bObI%2BDGcsxX3bhNgYMtPc6EYYHyoNRdVADO3sOJgcW3Sb8NsDTz7PXpdYH18HdwBpY%2F0140SqrAGLbua7hGFYblpoeRXuXJFfEDddYCxYwxb%2BPaI1NWo0UcNzV4Vy9JMH5t0Qtiu%2B%2FlnL1CzEI7RCQ2wNNYPfIPKFbVEobpWXR8kpRxvijkHDOPPkweAnrgCfpF66PWCmKJHGdID3qRwkF%2BwKNpDMNz5gMUGOqUBvxEAR30I9%2FARbZAvJZVP%2Fx7%2FfVfGPxjN0AfKtOBhOY1W%2FEVMcWbA0NbO%2BpUvVAedsXJ8pSEmXfR%2Fh4DtotU26E6Y5Z%2BdGS93Gy32nH2bGrKZaK1u7fzZ%2FivTnMdXLzTE7kSO3UIMOEEqrPMnTqwxACA4X2LhlSipck8vZelS1jot2LSYYqtzOdM2aIQYLc3HWGwruLrFZ%2B%2FAfRCfIge98Ext8UFH&X-Amz-Signature=67388c95951eeddd2b3ca4c1e4af7b84502ed20bfd6df2788b68c0608909d236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEEADQO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCikG5sWduXrk5yl9j2fwMobIZ6y8DfIf1PuZyoqJ1l0gIgZnRe6xHicpMnb01o%2FwY5y5T8ZpelaLEm25e5GPCw6lIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIUtG0L3KuH3S%2Bu4circA5IQkVvBqaxhLIQiRKgS5wjqFgmHl02z8yWbLakSxMV3RlS31ybLCBdVa0cqnJVXACb1QgmZsJpCGN19ZEEtJA50tJaOO0WHk87UnqHQOHJ02KbDIw9%2FOQQJ6BHZ91RzXppzWmn0Ji35aSzdGFd5jQdJj%2Frnm9d2yJSZvAu7sfGl8NK29LO8rszdRZ0DlTkjazL1xkA7wTmONFUNC2ezW52Qqg2z4asWsi2UTykbRDku34Lko9EAjq%2BntTI27k8HsKiCe0uGJl0T6K1LEgmvRbLzcVztTO0vOHGRKOFRmZFOg9u6TzfZ%2FFq3b%2Bde5bdT3RuOq%2Fbjlj1iS91uqIiaooCenBjw%2BO5g5hQjAy6Ak%2BpMDkky1y7DNDZIhY%2BvNzP6Uv0CUsHr9CPO1bayjKsQ8oB3dUHcOji8bObI%2BDGcsxX3bhNgYMtPc6EYYHyoNRdVADO3sOJgcW3Sb8NsDTz7PXpdYH18HdwBpY%2F0140SqrAGLbua7hGFYblpoeRXuXJFfEDddYCxYwxb%2BPaI1NWo0UcNzV4Vy9JMH5t0Qtiu%2B%2FlnL1CzEI7RCQ2wNNYPfIPKFbVEobpWXR8kpRxvijkHDOPPkweAnrgCfpF66PWCmKJHGdID3qRwkF%2BwKNpDMNz5gMUGOqUBvxEAR30I9%2FARbZAvJZVP%2Fx7%2FfVfGPxjN0AfKtOBhOY1W%2FEVMcWbA0NbO%2BpUvVAedsXJ8pSEmXfR%2Fh4DtotU26E6Y5Z%2BdGS93Gy32nH2bGrKZaK1u7fzZ%2FivTnMdXLzTE7kSO3UIMOEEqrPMnTqwxACA4X2LhlSipck8vZelS1jot2LSYYqtzOdM2aIQYLc3HWGwruLrFZ%2B%2FAfRCfIge98Ext8UFH&X-Amz-Signature=65fab426ec747443bb70c16be720c56b2b767e79d44b6825443b6218394105c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEEADQO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCikG5sWduXrk5yl9j2fwMobIZ6y8DfIf1PuZyoqJ1l0gIgZnRe6xHicpMnb01o%2FwY5y5T8ZpelaLEm25e5GPCw6lIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIUtG0L3KuH3S%2Bu4circA5IQkVvBqaxhLIQiRKgS5wjqFgmHl02z8yWbLakSxMV3RlS31ybLCBdVa0cqnJVXACb1QgmZsJpCGN19ZEEtJA50tJaOO0WHk87UnqHQOHJ02KbDIw9%2FOQQJ6BHZ91RzXppzWmn0Ji35aSzdGFd5jQdJj%2Frnm9d2yJSZvAu7sfGl8NK29LO8rszdRZ0DlTkjazL1xkA7wTmONFUNC2ezW52Qqg2z4asWsi2UTykbRDku34Lko9EAjq%2BntTI27k8HsKiCe0uGJl0T6K1LEgmvRbLzcVztTO0vOHGRKOFRmZFOg9u6TzfZ%2FFq3b%2Bde5bdT3RuOq%2Fbjlj1iS91uqIiaooCenBjw%2BO5g5hQjAy6Ak%2BpMDkky1y7DNDZIhY%2BvNzP6Uv0CUsHr9CPO1bayjKsQ8oB3dUHcOji8bObI%2BDGcsxX3bhNgYMtPc6EYYHyoNRdVADO3sOJgcW3Sb8NsDTz7PXpdYH18HdwBpY%2F0140SqrAGLbua7hGFYblpoeRXuXJFfEDddYCxYwxb%2BPaI1NWo0UcNzV4Vy9JMH5t0Qtiu%2B%2FlnL1CzEI7RCQ2wNNYPfIPKFbVEobpWXR8kpRxvijkHDOPPkweAnrgCfpF66PWCmKJHGdID3qRwkF%2BwKNpDMNz5gMUGOqUBvxEAR30I9%2FARbZAvJZVP%2Fx7%2FfVfGPxjN0AfKtOBhOY1W%2FEVMcWbA0NbO%2BpUvVAedsXJ8pSEmXfR%2Fh4DtotU26E6Y5Z%2BdGS93Gy32nH2bGrKZaK1u7fzZ%2FivTnMdXLzTE7kSO3UIMOEEqrPMnTqwxACA4X2LhlSipck8vZelS1jot2LSYYqtzOdM2aIQYLc3HWGwruLrFZ%2B%2FAfRCfIge98Ext8UFH&X-Amz-Signature=76d233849b939ca70bf39ca3999a224cbb35deddcf74cfda028415542852371b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEEADQO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCikG5sWduXrk5yl9j2fwMobIZ6y8DfIf1PuZyoqJ1l0gIgZnRe6xHicpMnb01o%2FwY5y5T8ZpelaLEm25e5GPCw6lIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIUtG0L3KuH3S%2Bu4circA5IQkVvBqaxhLIQiRKgS5wjqFgmHl02z8yWbLakSxMV3RlS31ybLCBdVa0cqnJVXACb1QgmZsJpCGN19ZEEtJA50tJaOO0WHk87UnqHQOHJ02KbDIw9%2FOQQJ6BHZ91RzXppzWmn0Ji35aSzdGFd5jQdJj%2Frnm9d2yJSZvAu7sfGl8NK29LO8rszdRZ0DlTkjazL1xkA7wTmONFUNC2ezW52Qqg2z4asWsi2UTykbRDku34Lko9EAjq%2BntTI27k8HsKiCe0uGJl0T6K1LEgmvRbLzcVztTO0vOHGRKOFRmZFOg9u6TzfZ%2FFq3b%2Bde5bdT3RuOq%2Fbjlj1iS91uqIiaooCenBjw%2BO5g5hQjAy6Ak%2BpMDkky1y7DNDZIhY%2BvNzP6Uv0CUsHr9CPO1bayjKsQ8oB3dUHcOji8bObI%2BDGcsxX3bhNgYMtPc6EYYHyoNRdVADO3sOJgcW3Sb8NsDTz7PXpdYH18HdwBpY%2F0140SqrAGLbua7hGFYblpoeRXuXJFfEDddYCxYwxb%2BPaI1NWo0UcNzV4Vy9JMH5t0Qtiu%2B%2FlnL1CzEI7RCQ2wNNYPfIPKFbVEobpWXR8kpRxvijkHDOPPkweAnrgCfpF66PWCmKJHGdID3qRwkF%2BwKNpDMNz5gMUGOqUBvxEAR30I9%2FARbZAvJZVP%2Fx7%2FfVfGPxjN0AfKtOBhOY1W%2FEVMcWbA0NbO%2BpUvVAedsXJ8pSEmXfR%2Fh4DtotU26E6Y5Z%2BdGS93Gy32nH2bGrKZaK1u7fzZ%2FivTnMdXLzTE7kSO3UIMOEEqrPMnTqwxACA4X2LhlSipck8vZelS1jot2LSYYqtzOdM2aIQYLc3HWGwruLrFZ%2B%2FAfRCfIge98Ext8UFH&X-Amz-Signature=d2b7bdc1744e45a28b80b61a707ed08dedc2e5499f1b050fbfb67850ae7f917b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2XXMJ4H%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDi1pRNotoxMT1EFidOt9%2FyWQp%2BbSRcloEeAVqELpYBrgIgT6dgGZKHhtTP%2BH6FvHpsxGXrtx4JQNvGPeJoeJ1G%2Fogq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJiPLEUqx7A4iUnj3SrcA42GXBWVsJ75OzLlkU98PZD8yrLHqpQU3cSp2QVI0pdDRjIX6MvOSJaF0dbedmUDuROowPqVdeh5BUqFHPY9CAErusmzzkkAUepMZUUmCl47soAz6S4NzLWgBC93sUDV%2FebLraTk99JqFbQgd%2BLaO9WEbODJ%2BfvA52omwnaRUlfjGdPlhH2CY%2FBl9Tl26Ulidp2s3%2BUGVF4NBG47UCIxfZDBmZBZAtNnm%2Ba426fgFkJ6v83X91VZJxz772LOmJ4gLEcmhUVvBa67RIfVAoA5M09X4lW9mUV%2Ff7Olh3Ym3o022lgmYQoNA%2FwXUpgazf2xRym8YigmsoihDxtGBQEowFCtEZGsNLVxbvqXg%2BwtM4AJXKvN0UmrkkThTdM95RspUZqaipv8Tj6J7EkGQXH7CpQq%2BjyHz04wgUcn8WZKEIqGWDzCl7BJRQg3KdzjKZi1GNhKVWshxOwnX3Vo%2BNpwTlardJV3PemsM8P9nshdsmFmQ2OiSOR6bYJ%2BmeL13eS%2BfS%2BI88xceuGVvfdXNfm5xXh1KjwHw5FVdP94uT%2FI9ydFzx40jlfBqgnUy8ty9CAVEdlGjXffetA1cM%2Fo%2BEPQKlcobKUMBPGG3oZEeq97ctXZJGf0STckXBDcs8jVMOD3gMUGOqUBqpERR5rRE67k43K1qFdJm92wMg7fnL4lIb3tA9R2s4r7IR866Vp6M%2FebgLpwNeCU%2FG6fvSEaQ8%2FWQwIJ99mMfqFqc4VlSDGKWVAHRtvQFi5pkzjVoolWbCOc%2BsWZ2hI97g2u9wPTtD%2F3DNXgdMqanVH3arRhldZn12p%2BuMEiCPq7l1oiAiVcprd9Gcanx8HdeTb1xnhFheShTPaTW4VynCRVLwTr&X-Amz-Signature=56355ab5d24485a12ae6ba6c66dded4e433443bf4029b1145381aaed40cca76c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEEADQO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCikG5sWduXrk5yl9j2fwMobIZ6y8DfIf1PuZyoqJ1l0gIgZnRe6xHicpMnb01o%2FwY5y5T8ZpelaLEm25e5GPCw6lIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIUtG0L3KuH3S%2Bu4circA5IQkVvBqaxhLIQiRKgS5wjqFgmHl02z8yWbLakSxMV3RlS31ybLCBdVa0cqnJVXACb1QgmZsJpCGN19ZEEtJA50tJaOO0WHk87UnqHQOHJ02KbDIw9%2FOQQJ6BHZ91RzXppzWmn0Ji35aSzdGFd5jQdJj%2Frnm9d2yJSZvAu7sfGl8NK29LO8rszdRZ0DlTkjazL1xkA7wTmONFUNC2ezW52Qqg2z4asWsi2UTykbRDku34Lko9EAjq%2BntTI27k8HsKiCe0uGJl0T6K1LEgmvRbLzcVztTO0vOHGRKOFRmZFOg9u6TzfZ%2FFq3b%2Bde5bdT3RuOq%2Fbjlj1iS91uqIiaooCenBjw%2BO5g5hQjAy6Ak%2BpMDkky1y7DNDZIhY%2BvNzP6Uv0CUsHr9CPO1bayjKsQ8oB3dUHcOji8bObI%2BDGcsxX3bhNgYMtPc6EYYHyoNRdVADO3sOJgcW3Sb8NsDTz7PXpdYH18HdwBpY%2F0140SqrAGLbua7hGFYblpoeRXuXJFfEDddYCxYwxb%2BPaI1NWo0UcNzV4Vy9JMH5t0Qtiu%2B%2FlnL1CzEI7RCQ2wNNYPfIPKFbVEobpWXR8kpRxvijkHDOPPkweAnrgCfpF66PWCmKJHGdID3qRwkF%2BwKNpDMNz5gMUGOqUBvxEAR30I9%2FARbZAvJZVP%2Fx7%2FfVfGPxjN0AfKtOBhOY1W%2FEVMcWbA0NbO%2BpUvVAedsXJ8pSEmXfR%2Fh4DtotU26E6Y5Z%2BdGS93Gy32nH2bGrKZaK1u7fzZ%2FivTnMdXLzTE7kSO3UIMOEEqrPMnTqwxACA4X2LhlSipck8vZelS1jot2LSYYqtzOdM2aIQYLc3HWGwruLrFZ%2B%2FAfRCfIge98Ext8UFH&X-Amz-Signature=b723d00e43f773482a0fc76bd09bb4f5ac75a3c5144beb8264dbce6a813170f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEEADQO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCikG5sWduXrk5yl9j2fwMobIZ6y8DfIf1PuZyoqJ1l0gIgZnRe6xHicpMnb01o%2FwY5y5T8ZpelaLEm25e5GPCw6lIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIUtG0L3KuH3S%2Bu4circA5IQkVvBqaxhLIQiRKgS5wjqFgmHl02z8yWbLakSxMV3RlS31ybLCBdVa0cqnJVXACb1QgmZsJpCGN19ZEEtJA50tJaOO0WHk87UnqHQOHJ02KbDIw9%2FOQQJ6BHZ91RzXppzWmn0Ji35aSzdGFd5jQdJj%2Frnm9d2yJSZvAu7sfGl8NK29LO8rszdRZ0DlTkjazL1xkA7wTmONFUNC2ezW52Qqg2z4asWsi2UTykbRDku34Lko9EAjq%2BntTI27k8HsKiCe0uGJl0T6K1LEgmvRbLzcVztTO0vOHGRKOFRmZFOg9u6TzfZ%2FFq3b%2Bde5bdT3RuOq%2Fbjlj1iS91uqIiaooCenBjw%2BO5g5hQjAy6Ak%2BpMDkky1y7DNDZIhY%2BvNzP6Uv0CUsHr9CPO1bayjKsQ8oB3dUHcOji8bObI%2BDGcsxX3bhNgYMtPc6EYYHyoNRdVADO3sOJgcW3Sb8NsDTz7PXpdYH18HdwBpY%2F0140SqrAGLbua7hGFYblpoeRXuXJFfEDddYCxYwxb%2BPaI1NWo0UcNzV4Vy9JMH5t0Qtiu%2B%2FlnL1CzEI7RCQ2wNNYPfIPKFbVEobpWXR8kpRxvijkHDOPPkweAnrgCfpF66PWCmKJHGdID3qRwkF%2BwKNpDMNz5gMUGOqUBvxEAR30I9%2FARbZAvJZVP%2Fx7%2FfVfGPxjN0AfKtOBhOY1W%2FEVMcWbA0NbO%2BpUvVAedsXJ8pSEmXfR%2Fh4DtotU26E6Y5Z%2BdGS93Gy32nH2bGrKZaK1u7fzZ%2FivTnMdXLzTE7kSO3UIMOEEqrPMnTqwxACA4X2LhlSipck8vZelS1jot2LSYYqtzOdM2aIQYLc3HWGwruLrFZ%2B%2FAfRCfIge98Ext8UFH&X-Amz-Signature=5ffd21b3143fc29d211874b1c0379501e7e17fc106ba2c570c7e8c41c27fd44a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEEADQO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCikG5sWduXrk5yl9j2fwMobIZ6y8DfIf1PuZyoqJ1l0gIgZnRe6xHicpMnb01o%2FwY5y5T8ZpelaLEm25e5GPCw6lIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIUtG0L3KuH3S%2Bu4circA5IQkVvBqaxhLIQiRKgS5wjqFgmHl02z8yWbLakSxMV3RlS31ybLCBdVa0cqnJVXACb1QgmZsJpCGN19ZEEtJA50tJaOO0WHk87UnqHQOHJ02KbDIw9%2FOQQJ6BHZ91RzXppzWmn0Ji35aSzdGFd5jQdJj%2Frnm9d2yJSZvAu7sfGl8NK29LO8rszdRZ0DlTkjazL1xkA7wTmONFUNC2ezW52Qqg2z4asWsi2UTykbRDku34Lko9EAjq%2BntTI27k8HsKiCe0uGJl0T6K1LEgmvRbLzcVztTO0vOHGRKOFRmZFOg9u6TzfZ%2FFq3b%2Bde5bdT3RuOq%2Fbjlj1iS91uqIiaooCenBjw%2BO5g5hQjAy6Ak%2BpMDkky1y7DNDZIhY%2BvNzP6Uv0CUsHr9CPO1bayjKsQ8oB3dUHcOji8bObI%2BDGcsxX3bhNgYMtPc6EYYHyoNRdVADO3sOJgcW3Sb8NsDTz7PXpdYH18HdwBpY%2F0140SqrAGLbua7hGFYblpoeRXuXJFfEDddYCxYwxb%2BPaI1NWo0UcNzV4Vy9JMH5t0Qtiu%2B%2FlnL1CzEI7RCQ2wNNYPfIPKFbVEobpWXR8kpRxvijkHDOPPkweAnrgCfpF66PWCmKJHGdID3qRwkF%2BwKNpDMNz5gMUGOqUBvxEAR30I9%2FARbZAvJZVP%2Fx7%2FfVfGPxjN0AfKtOBhOY1W%2FEVMcWbA0NbO%2BpUvVAedsXJ8pSEmXfR%2Fh4DtotU26E6Y5Z%2BdGS93Gy32nH2bGrKZaK1u7fzZ%2FivTnMdXLzTE7kSO3UIMOEEqrPMnTqwxACA4X2LhlSipck8vZelS1jot2LSYYqtzOdM2aIQYLc3HWGwruLrFZ%2B%2FAfRCfIge98Ext8UFH&X-Amz-Signature=cb315ed16e154fa3fea0b0dfc21b0b0c6c50fd52babde9a8ffa2ab2590811b3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEEADQO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCikG5sWduXrk5yl9j2fwMobIZ6y8DfIf1PuZyoqJ1l0gIgZnRe6xHicpMnb01o%2FwY5y5T8ZpelaLEm25e5GPCw6lIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIUtG0L3KuH3S%2Bu4circA5IQkVvBqaxhLIQiRKgS5wjqFgmHl02z8yWbLakSxMV3RlS31ybLCBdVa0cqnJVXACb1QgmZsJpCGN19ZEEtJA50tJaOO0WHk87UnqHQOHJ02KbDIw9%2FOQQJ6BHZ91RzXppzWmn0Ji35aSzdGFd5jQdJj%2Frnm9d2yJSZvAu7sfGl8NK29LO8rszdRZ0DlTkjazL1xkA7wTmONFUNC2ezW52Qqg2z4asWsi2UTykbRDku34Lko9EAjq%2BntTI27k8HsKiCe0uGJl0T6K1LEgmvRbLzcVztTO0vOHGRKOFRmZFOg9u6TzfZ%2FFq3b%2Bde5bdT3RuOq%2Fbjlj1iS91uqIiaooCenBjw%2BO5g5hQjAy6Ak%2BpMDkky1y7DNDZIhY%2BvNzP6Uv0CUsHr9CPO1bayjKsQ8oB3dUHcOji8bObI%2BDGcsxX3bhNgYMtPc6EYYHyoNRdVADO3sOJgcW3Sb8NsDTz7PXpdYH18HdwBpY%2F0140SqrAGLbua7hGFYblpoeRXuXJFfEDddYCxYwxb%2BPaI1NWo0UcNzV4Vy9JMH5t0Qtiu%2B%2FlnL1CzEI7RCQ2wNNYPfIPKFbVEobpWXR8kpRxvijkHDOPPkweAnrgCfpF66PWCmKJHGdID3qRwkF%2BwKNpDMNz5gMUGOqUBvxEAR30I9%2FARbZAvJZVP%2Fx7%2FfVfGPxjN0AfKtOBhOY1W%2FEVMcWbA0NbO%2BpUvVAedsXJ8pSEmXfR%2Fh4DtotU26E6Y5Z%2BdGS93Gy32nH2bGrKZaK1u7fzZ%2FivTnMdXLzTE7kSO3UIMOEEqrPMnTqwxACA4X2LhlSipck8vZelS1jot2LSYYqtzOdM2aIQYLc3HWGwruLrFZ%2B%2FAfRCfIge98Ext8UFH&X-Amz-Signature=2569ee0e6f78b5220253910b28c4e325e84eda54d375894e688c1b73f13974d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEEADQO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCikG5sWduXrk5yl9j2fwMobIZ6y8DfIf1PuZyoqJ1l0gIgZnRe6xHicpMnb01o%2FwY5y5T8ZpelaLEm25e5GPCw6lIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIUtG0L3KuH3S%2Bu4circA5IQkVvBqaxhLIQiRKgS5wjqFgmHl02z8yWbLakSxMV3RlS31ybLCBdVa0cqnJVXACb1QgmZsJpCGN19ZEEtJA50tJaOO0WHk87UnqHQOHJ02KbDIw9%2FOQQJ6BHZ91RzXppzWmn0Ji35aSzdGFd5jQdJj%2Frnm9d2yJSZvAu7sfGl8NK29LO8rszdRZ0DlTkjazL1xkA7wTmONFUNC2ezW52Qqg2z4asWsi2UTykbRDku34Lko9EAjq%2BntTI27k8HsKiCe0uGJl0T6K1LEgmvRbLzcVztTO0vOHGRKOFRmZFOg9u6TzfZ%2FFq3b%2Bde5bdT3RuOq%2Fbjlj1iS91uqIiaooCenBjw%2BO5g5hQjAy6Ak%2BpMDkky1y7DNDZIhY%2BvNzP6Uv0CUsHr9CPO1bayjKsQ8oB3dUHcOji8bObI%2BDGcsxX3bhNgYMtPc6EYYHyoNRdVADO3sOJgcW3Sb8NsDTz7PXpdYH18HdwBpY%2F0140SqrAGLbua7hGFYblpoeRXuXJFfEDddYCxYwxb%2BPaI1NWo0UcNzV4Vy9JMH5t0Qtiu%2B%2FlnL1CzEI7RCQ2wNNYPfIPKFbVEobpWXR8kpRxvijkHDOPPkweAnrgCfpF66PWCmKJHGdID3qRwkF%2BwKNpDMNz5gMUGOqUBvxEAR30I9%2FARbZAvJZVP%2Fx7%2FfVfGPxjN0AfKtOBhOY1W%2FEVMcWbA0NbO%2BpUvVAedsXJ8pSEmXfR%2Fh4DtotU26E6Y5Z%2BdGS93Gy32nH2bGrKZaK1u7fzZ%2FivTnMdXLzTE7kSO3UIMOEEqrPMnTqwxACA4X2LhlSipck8vZelS1jot2LSYYqtzOdM2aIQYLc3HWGwruLrFZ%2B%2FAfRCfIge98Ext8UFH&X-Amz-Signature=f0900c83c5232dc4e7a05deaeb7f7c5af8cf78180b2675b5c4d03cce3c26b816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEEADQO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCikG5sWduXrk5yl9j2fwMobIZ6y8DfIf1PuZyoqJ1l0gIgZnRe6xHicpMnb01o%2FwY5y5T8ZpelaLEm25e5GPCw6lIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIUtG0L3KuH3S%2Bu4circA5IQkVvBqaxhLIQiRKgS5wjqFgmHl02z8yWbLakSxMV3RlS31ybLCBdVa0cqnJVXACb1QgmZsJpCGN19ZEEtJA50tJaOO0WHk87UnqHQOHJ02KbDIw9%2FOQQJ6BHZ91RzXppzWmn0Ji35aSzdGFd5jQdJj%2Frnm9d2yJSZvAu7sfGl8NK29LO8rszdRZ0DlTkjazL1xkA7wTmONFUNC2ezW52Qqg2z4asWsi2UTykbRDku34Lko9EAjq%2BntTI27k8HsKiCe0uGJl0T6K1LEgmvRbLzcVztTO0vOHGRKOFRmZFOg9u6TzfZ%2FFq3b%2Bde5bdT3RuOq%2Fbjlj1iS91uqIiaooCenBjw%2BO5g5hQjAy6Ak%2BpMDkky1y7DNDZIhY%2BvNzP6Uv0CUsHr9CPO1bayjKsQ8oB3dUHcOji8bObI%2BDGcsxX3bhNgYMtPc6EYYHyoNRdVADO3sOJgcW3Sb8NsDTz7PXpdYH18HdwBpY%2F0140SqrAGLbua7hGFYblpoeRXuXJFfEDddYCxYwxb%2BPaI1NWo0UcNzV4Vy9JMH5t0Qtiu%2B%2FlnL1CzEI7RCQ2wNNYPfIPKFbVEobpWXR8kpRxvijkHDOPPkweAnrgCfpF66PWCmKJHGdID3qRwkF%2BwKNpDMNz5gMUGOqUBvxEAR30I9%2FARbZAvJZVP%2Fx7%2FfVfGPxjN0AfKtOBhOY1W%2FEVMcWbA0NbO%2BpUvVAedsXJ8pSEmXfR%2Fh4DtotU26E6Y5Z%2BdGS93Gy32nH2bGrKZaK1u7fzZ%2FivTnMdXLzTE7kSO3UIMOEEqrPMnTqwxACA4X2LhlSipck8vZelS1jot2LSYYqtzOdM2aIQYLc3HWGwruLrFZ%2B%2FAfRCfIge98Ext8UFH&X-Amz-Signature=aa6efe04d2edb0ac63a0fd5d85c727d1ad12d4d7336ca5795cada0cb393c1055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
