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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GVPWDDV%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCID2gnef7K5mloRKDvxCaI%2BwxNykXqT%2Fz%2B%2Baead8gXKk9AiEA9BaiCZ%2FaWLzJ7HBqzDGRJMkWYpPAZ0oJaKZJGIHHqvUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrH2Yiqx9dhQBUwgCrcA0id3%2BSFj2QmvChsVhi%2B3q7SwH9NjOIw6RXvqx0T5PRTN%2FjWFtY0mVVkEhSO2%2BLgAbhIv9ImDaJVHclR4TwXbHEaJdzfwtGVi0N4oMHZKe%2FBJFkhyohDhVYFbRetESyXtNJZgAHZg4ArVvj2DqBDtA2oYzS5bNkLcjkjoSAJ3HoAAlB%2BEqq9G%2FZ%2B52N9tOc6Nh%2B4JNne50ZL%2FsKovSL1cXPQdMw5cOZdvraJxm9t8bdH86Cnku0CCoDAr%2F9reMd6hKPxY%2F2UU2xfXhsefeHbreMfq6wsaIqOuZCfC1GCV4cx8Q8BkRYpvn%2FUcSAImFxSFw%2FpNFxqJlHtNXGYhcnJQGDuImXCl%2BMHy6E%2FYEV2mqkpDZ8Xjwcsu5Ypze1VAUxv%2FpMByCXKcj%2Bkg%2BD3F5PTrgcQ1ihjT21KiboC6IgAEDSNrtpKzU8UW55JmlaXjrdl5EOnNZeaJvUcLuEEr%2BN7TQ%2F3qDBXFTyOv0ccb5WbmHdW66a4lrTkNvj7l3qSIkK4a4WVEPL0TGsWXQpu0ofZvURdY%2BV8k%2FjYZompKueRaAFMdDuVuODiU2lTkNzR8iBbiX%2FojG5iUH1zgsxCug%2Fs6I3GYnDfg0XnK3qI20J2x26jqAbBeVcmLGzZLJgBMK%2B26MkGOqUB%2BrX6UrcTwOedlDiKdRLoiyFl01%2F9ZTwPIS4Msq19%2FFe777FVFSCLrvDduGu%2BPWWjQAwYstHPK1P6zfVtXUaupp7aXsR%2Bqx%2BSp0jnoFL6kuV%2BnUTqL6Xa6icvj6iS9IM4c33lPKVbK2eNHMbB0u5ajgawGyWvdwZ7%2FEMewSxKD5RUS8KbnDf8Hi%2Fm9RNu2Gw82%2FMajBNlp1fqeuyqT6vF5QziDA1i&X-Amz-Signature=6c27d27501050fd85e2f3ab8677bbd6b31dbd239e7138ac06c1370d368c67c9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GVPWDDV%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCID2gnef7K5mloRKDvxCaI%2BwxNykXqT%2Fz%2B%2Baead8gXKk9AiEA9BaiCZ%2FaWLzJ7HBqzDGRJMkWYpPAZ0oJaKZJGIHHqvUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrH2Yiqx9dhQBUwgCrcA0id3%2BSFj2QmvChsVhi%2B3q7SwH9NjOIw6RXvqx0T5PRTN%2FjWFtY0mVVkEhSO2%2BLgAbhIv9ImDaJVHclR4TwXbHEaJdzfwtGVi0N4oMHZKe%2FBJFkhyohDhVYFbRetESyXtNJZgAHZg4ArVvj2DqBDtA2oYzS5bNkLcjkjoSAJ3HoAAlB%2BEqq9G%2FZ%2B52N9tOc6Nh%2B4JNne50ZL%2FsKovSL1cXPQdMw5cOZdvraJxm9t8bdH86Cnku0CCoDAr%2F9reMd6hKPxY%2F2UU2xfXhsefeHbreMfq6wsaIqOuZCfC1GCV4cx8Q8BkRYpvn%2FUcSAImFxSFw%2FpNFxqJlHtNXGYhcnJQGDuImXCl%2BMHy6E%2FYEV2mqkpDZ8Xjwcsu5Ypze1VAUxv%2FpMByCXKcj%2Bkg%2BD3F5PTrgcQ1ihjT21KiboC6IgAEDSNrtpKzU8UW55JmlaXjrdl5EOnNZeaJvUcLuEEr%2BN7TQ%2F3qDBXFTyOv0ccb5WbmHdW66a4lrTkNvj7l3qSIkK4a4WVEPL0TGsWXQpu0ofZvURdY%2BV8k%2FjYZompKueRaAFMdDuVuODiU2lTkNzR8iBbiX%2FojG5iUH1zgsxCug%2Fs6I3GYnDfg0XnK3qI20J2x26jqAbBeVcmLGzZLJgBMK%2B26MkGOqUB%2BrX6UrcTwOedlDiKdRLoiyFl01%2F9ZTwPIS4Msq19%2FFe777FVFSCLrvDduGu%2BPWWjQAwYstHPK1P6zfVtXUaupp7aXsR%2Bqx%2BSp0jnoFL6kuV%2BnUTqL6Xa6icvj6iS9IM4c33lPKVbK2eNHMbB0u5ajgawGyWvdwZ7%2FEMewSxKD5RUS8KbnDf8Hi%2Fm9RNu2Gw82%2FMajBNlp1fqeuyqT6vF5QziDA1i&X-Amz-Signature=f722265a985abbe32ca157d5d4f3f30995ccea82561880794ead2512e1f21f05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GVPWDDV%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCID2gnef7K5mloRKDvxCaI%2BwxNykXqT%2Fz%2B%2Baead8gXKk9AiEA9BaiCZ%2FaWLzJ7HBqzDGRJMkWYpPAZ0oJaKZJGIHHqvUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrH2Yiqx9dhQBUwgCrcA0id3%2BSFj2QmvChsVhi%2B3q7SwH9NjOIw6RXvqx0T5PRTN%2FjWFtY0mVVkEhSO2%2BLgAbhIv9ImDaJVHclR4TwXbHEaJdzfwtGVi0N4oMHZKe%2FBJFkhyohDhVYFbRetESyXtNJZgAHZg4ArVvj2DqBDtA2oYzS5bNkLcjkjoSAJ3HoAAlB%2BEqq9G%2FZ%2B52N9tOc6Nh%2B4JNne50ZL%2FsKovSL1cXPQdMw5cOZdvraJxm9t8bdH86Cnku0CCoDAr%2F9reMd6hKPxY%2F2UU2xfXhsefeHbreMfq6wsaIqOuZCfC1GCV4cx8Q8BkRYpvn%2FUcSAImFxSFw%2FpNFxqJlHtNXGYhcnJQGDuImXCl%2BMHy6E%2FYEV2mqkpDZ8Xjwcsu5Ypze1VAUxv%2FpMByCXKcj%2Bkg%2BD3F5PTrgcQ1ihjT21KiboC6IgAEDSNrtpKzU8UW55JmlaXjrdl5EOnNZeaJvUcLuEEr%2BN7TQ%2F3qDBXFTyOv0ccb5WbmHdW66a4lrTkNvj7l3qSIkK4a4WVEPL0TGsWXQpu0ofZvURdY%2BV8k%2FjYZompKueRaAFMdDuVuODiU2lTkNzR8iBbiX%2FojG5iUH1zgsxCug%2Fs6I3GYnDfg0XnK3qI20J2x26jqAbBeVcmLGzZLJgBMK%2B26MkGOqUB%2BrX6UrcTwOedlDiKdRLoiyFl01%2F9ZTwPIS4Msq19%2FFe777FVFSCLrvDduGu%2BPWWjQAwYstHPK1P6zfVtXUaupp7aXsR%2Bqx%2BSp0jnoFL6kuV%2BnUTqL6Xa6icvj6iS9IM4c33lPKVbK2eNHMbB0u5ajgawGyWvdwZ7%2FEMewSxKD5RUS8KbnDf8Hi%2Fm9RNu2Gw82%2FMajBNlp1fqeuyqT6vF5QziDA1i&X-Amz-Signature=e1e939565c33392cd56c770ae107322faf02bd8980df96baff9775e63e9e2719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GVPWDDV%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCID2gnef7K5mloRKDvxCaI%2BwxNykXqT%2Fz%2B%2Baead8gXKk9AiEA9BaiCZ%2FaWLzJ7HBqzDGRJMkWYpPAZ0oJaKZJGIHHqvUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrH2Yiqx9dhQBUwgCrcA0id3%2BSFj2QmvChsVhi%2B3q7SwH9NjOIw6RXvqx0T5PRTN%2FjWFtY0mVVkEhSO2%2BLgAbhIv9ImDaJVHclR4TwXbHEaJdzfwtGVi0N4oMHZKe%2FBJFkhyohDhVYFbRetESyXtNJZgAHZg4ArVvj2DqBDtA2oYzS5bNkLcjkjoSAJ3HoAAlB%2BEqq9G%2FZ%2B52N9tOc6Nh%2B4JNne50ZL%2FsKovSL1cXPQdMw5cOZdvraJxm9t8bdH86Cnku0CCoDAr%2F9reMd6hKPxY%2F2UU2xfXhsefeHbreMfq6wsaIqOuZCfC1GCV4cx8Q8BkRYpvn%2FUcSAImFxSFw%2FpNFxqJlHtNXGYhcnJQGDuImXCl%2BMHy6E%2FYEV2mqkpDZ8Xjwcsu5Ypze1VAUxv%2FpMByCXKcj%2Bkg%2BD3F5PTrgcQ1ihjT21KiboC6IgAEDSNrtpKzU8UW55JmlaXjrdl5EOnNZeaJvUcLuEEr%2BN7TQ%2F3qDBXFTyOv0ccb5WbmHdW66a4lrTkNvj7l3qSIkK4a4WVEPL0TGsWXQpu0ofZvURdY%2BV8k%2FjYZompKueRaAFMdDuVuODiU2lTkNzR8iBbiX%2FojG5iUH1zgsxCug%2Fs6I3GYnDfg0XnK3qI20J2x26jqAbBeVcmLGzZLJgBMK%2B26MkGOqUB%2BrX6UrcTwOedlDiKdRLoiyFl01%2F9ZTwPIS4Msq19%2FFe777FVFSCLrvDduGu%2BPWWjQAwYstHPK1P6zfVtXUaupp7aXsR%2Bqx%2BSp0jnoFL6kuV%2BnUTqL6Xa6icvj6iS9IM4c33lPKVbK2eNHMbB0u5ajgawGyWvdwZ7%2FEMewSxKD5RUS8KbnDf8Hi%2Fm9RNu2Gw82%2FMajBNlp1fqeuyqT6vF5QziDA1i&X-Amz-Signature=7530f2d1747943a18cee7345c94c93d58040e3b3b4c95f1ae68fe340b5f2e3f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2LLDB2W%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDlXXIfVScSDtvbi8ZGcphpJC3BUXy7sNnHl9ggLto2owIhANe0cX1gkkXEgClLOak9wjX1Qt7WArOrFfz8eQL0bAMwKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmdvAeppmw8GI303Aq3AN1yx2GLDBugxhn8J21w0F%2BESDfQepHasDdZRBPmuByj3gxFyym36Y6lJi%2FiC94X6GkF9JYz6LT6f0puFbjrFV9cSsrdhZG5gQ70zgyUeDjxPVEksMAS5ozhZyjFZAy0Ysa422OVdyG7JPPbudqPS4UcSZ8tTGA7Q%2Fms%2F3V96gZP3bI0xoQiQmR13I%2F01%2Fc4nr%2B64rS3vx5N03oXi7qiHXmBt%2BE0XHJ96QfRVVye5jgjCQIOQ9vXXokF60A9iJOWn3enkOtUxT4%2Fga1yMgZdQrSgYaC0iwutnP9lxBMml2o4SFVgd9R7byq5wZLZnnMD%2FfonCRCfyTnOWQAx2oygftW62O8xTHTz0T9hGdAJbOXdLKvDXazhJaDF7vlaGmrnQTwtQYIOW%2B84a%2FVGNYbrDEeeMNvhEFxVVQuocD9jWQzwaW76vHwN%2FDYtsUIZe0VVRwIE5GVhSiV%2Fw5htQ2PyzLiCJ%2BkqTFWHdX7rPs6Vzb0mXlI3Kzs1AzLFVTnRRN578MV9z5oqLmVG%2FSB%2FVVDDdGICRnw3SxfzP%2FnmMd%2FBiAqitguaFd7yR2migfUP%2BVScq8lcPVEYHPrTgV22JRjPwWh4RZzOBc%2FUGOwELg5dLbi1sNpEsAe%2BKcFW1OEYTDstOjJBjqkAVZ4Hn2aB7UImnvr1n1vx6tKIfuPg%2BG9Pj9IcPkkDAi1lR9TGQ08BiN0TRx1sEWfyaq1JRpfIqkD97u%2FyecJ3tpZycAJ%2BlZidwyIW%2FSDKtTlnVHkwUbepnZmPeLJPL%2FxWQk6Z%2FDSxCWS%2FQGP3v7hjrMSss6WH6%2Frc9mO2Amxch7e5qfRQEoQwGWrIU54cSwTXGNUaGhAXvOwQi9Syzro3TrUKNA4&X-Amz-Signature=c98ef700a07fc66c48ef93b39ad9b0905d8af94737547c1f556518c7796e07ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GVPWDDV%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCID2gnef7K5mloRKDvxCaI%2BwxNykXqT%2Fz%2B%2Baead8gXKk9AiEA9BaiCZ%2FaWLzJ7HBqzDGRJMkWYpPAZ0oJaKZJGIHHqvUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrH2Yiqx9dhQBUwgCrcA0id3%2BSFj2QmvChsVhi%2B3q7SwH9NjOIw6RXvqx0T5PRTN%2FjWFtY0mVVkEhSO2%2BLgAbhIv9ImDaJVHclR4TwXbHEaJdzfwtGVi0N4oMHZKe%2FBJFkhyohDhVYFbRetESyXtNJZgAHZg4ArVvj2DqBDtA2oYzS5bNkLcjkjoSAJ3HoAAlB%2BEqq9G%2FZ%2B52N9tOc6Nh%2B4JNne50ZL%2FsKovSL1cXPQdMw5cOZdvraJxm9t8bdH86Cnku0CCoDAr%2F9reMd6hKPxY%2F2UU2xfXhsefeHbreMfq6wsaIqOuZCfC1GCV4cx8Q8BkRYpvn%2FUcSAImFxSFw%2FpNFxqJlHtNXGYhcnJQGDuImXCl%2BMHy6E%2FYEV2mqkpDZ8Xjwcsu5Ypze1VAUxv%2FpMByCXKcj%2Bkg%2BD3F5PTrgcQ1ihjT21KiboC6IgAEDSNrtpKzU8UW55JmlaXjrdl5EOnNZeaJvUcLuEEr%2BN7TQ%2F3qDBXFTyOv0ccb5WbmHdW66a4lrTkNvj7l3qSIkK4a4WVEPL0TGsWXQpu0ofZvURdY%2BV8k%2FjYZompKueRaAFMdDuVuODiU2lTkNzR8iBbiX%2FojG5iUH1zgsxCug%2Fs6I3GYnDfg0XnK3qI20J2x26jqAbBeVcmLGzZLJgBMK%2B26MkGOqUB%2BrX6UrcTwOedlDiKdRLoiyFl01%2F9ZTwPIS4Msq19%2FFe777FVFSCLrvDduGu%2BPWWjQAwYstHPK1P6zfVtXUaupp7aXsR%2Bqx%2BSp0jnoFL6kuV%2BnUTqL6Xa6icvj6iS9IM4c33lPKVbK2eNHMbB0u5ajgawGyWvdwZ7%2FEMewSxKD5RUS8KbnDf8Hi%2Fm9RNu2Gw82%2FMajBNlp1fqeuyqT6vF5QziDA1i&X-Amz-Signature=c84d7012d54d3322ae3f7dda64e51c02d9f9cad7b2ec30b6ed71467e24f814ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GVPWDDV%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCID2gnef7K5mloRKDvxCaI%2BwxNykXqT%2Fz%2B%2Baead8gXKk9AiEA9BaiCZ%2FaWLzJ7HBqzDGRJMkWYpPAZ0oJaKZJGIHHqvUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrH2Yiqx9dhQBUwgCrcA0id3%2BSFj2QmvChsVhi%2B3q7SwH9NjOIw6RXvqx0T5PRTN%2FjWFtY0mVVkEhSO2%2BLgAbhIv9ImDaJVHclR4TwXbHEaJdzfwtGVi0N4oMHZKe%2FBJFkhyohDhVYFbRetESyXtNJZgAHZg4ArVvj2DqBDtA2oYzS5bNkLcjkjoSAJ3HoAAlB%2BEqq9G%2FZ%2B52N9tOc6Nh%2B4JNne50ZL%2FsKovSL1cXPQdMw5cOZdvraJxm9t8bdH86Cnku0CCoDAr%2F9reMd6hKPxY%2F2UU2xfXhsefeHbreMfq6wsaIqOuZCfC1GCV4cx8Q8BkRYpvn%2FUcSAImFxSFw%2FpNFxqJlHtNXGYhcnJQGDuImXCl%2BMHy6E%2FYEV2mqkpDZ8Xjwcsu5Ypze1VAUxv%2FpMByCXKcj%2Bkg%2BD3F5PTrgcQ1ihjT21KiboC6IgAEDSNrtpKzU8UW55JmlaXjrdl5EOnNZeaJvUcLuEEr%2BN7TQ%2F3qDBXFTyOv0ccb5WbmHdW66a4lrTkNvj7l3qSIkK4a4WVEPL0TGsWXQpu0ofZvURdY%2BV8k%2FjYZompKueRaAFMdDuVuODiU2lTkNzR8iBbiX%2FojG5iUH1zgsxCug%2Fs6I3GYnDfg0XnK3qI20J2x26jqAbBeVcmLGzZLJgBMK%2B26MkGOqUB%2BrX6UrcTwOedlDiKdRLoiyFl01%2F9ZTwPIS4Msq19%2FFe777FVFSCLrvDduGu%2BPWWjQAwYstHPK1P6zfVtXUaupp7aXsR%2Bqx%2BSp0jnoFL6kuV%2BnUTqL6Xa6icvj6iS9IM4c33lPKVbK2eNHMbB0u5ajgawGyWvdwZ7%2FEMewSxKD5RUS8KbnDf8Hi%2Fm9RNu2Gw82%2FMajBNlp1fqeuyqT6vF5QziDA1i&X-Amz-Signature=d5c344f3d62234490206ef5c340ef1de2036435610c374b3aa3353e76433a865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GVPWDDV%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCID2gnef7K5mloRKDvxCaI%2BwxNykXqT%2Fz%2B%2Baead8gXKk9AiEA9BaiCZ%2FaWLzJ7HBqzDGRJMkWYpPAZ0oJaKZJGIHHqvUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrH2Yiqx9dhQBUwgCrcA0id3%2BSFj2QmvChsVhi%2B3q7SwH9NjOIw6RXvqx0T5PRTN%2FjWFtY0mVVkEhSO2%2BLgAbhIv9ImDaJVHclR4TwXbHEaJdzfwtGVi0N4oMHZKe%2FBJFkhyohDhVYFbRetESyXtNJZgAHZg4ArVvj2DqBDtA2oYzS5bNkLcjkjoSAJ3HoAAlB%2BEqq9G%2FZ%2B52N9tOc6Nh%2B4JNne50ZL%2FsKovSL1cXPQdMw5cOZdvraJxm9t8bdH86Cnku0CCoDAr%2F9reMd6hKPxY%2F2UU2xfXhsefeHbreMfq6wsaIqOuZCfC1GCV4cx8Q8BkRYpvn%2FUcSAImFxSFw%2FpNFxqJlHtNXGYhcnJQGDuImXCl%2BMHy6E%2FYEV2mqkpDZ8Xjwcsu5Ypze1VAUxv%2FpMByCXKcj%2Bkg%2BD3F5PTrgcQ1ihjT21KiboC6IgAEDSNrtpKzU8UW55JmlaXjrdl5EOnNZeaJvUcLuEEr%2BN7TQ%2F3qDBXFTyOv0ccb5WbmHdW66a4lrTkNvj7l3qSIkK4a4WVEPL0TGsWXQpu0ofZvURdY%2BV8k%2FjYZompKueRaAFMdDuVuODiU2lTkNzR8iBbiX%2FojG5iUH1zgsxCug%2Fs6I3GYnDfg0XnK3qI20J2x26jqAbBeVcmLGzZLJgBMK%2B26MkGOqUB%2BrX6UrcTwOedlDiKdRLoiyFl01%2F9ZTwPIS4Msq19%2FFe777FVFSCLrvDduGu%2BPWWjQAwYstHPK1P6zfVtXUaupp7aXsR%2Bqx%2BSp0jnoFL6kuV%2BnUTqL6Xa6icvj6iS9IM4c33lPKVbK2eNHMbB0u5ajgawGyWvdwZ7%2FEMewSxKD5RUS8KbnDf8Hi%2Fm9RNu2Gw82%2FMajBNlp1fqeuyqT6vF5QziDA1i&X-Amz-Signature=10c5b8b917862f8824753665259eb91a9d599987fbb0a6f3c63c7de2cdc51c65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GVPWDDV%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCID2gnef7K5mloRKDvxCaI%2BwxNykXqT%2Fz%2B%2Baead8gXKk9AiEA9BaiCZ%2FaWLzJ7HBqzDGRJMkWYpPAZ0oJaKZJGIHHqvUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrH2Yiqx9dhQBUwgCrcA0id3%2BSFj2QmvChsVhi%2B3q7SwH9NjOIw6RXvqx0T5PRTN%2FjWFtY0mVVkEhSO2%2BLgAbhIv9ImDaJVHclR4TwXbHEaJdzfwtGVi0N4oMHZKe%2FBJFkhyohDhVYFbRetESyXtNJZgAHZg4ArVvj2DqBDtA2oYzS5bNkLcjkjoSAJ3HoAAlB%2BEqq9G%2FZ%2B52N9tOc6Nh%2B4JNne50ZL%2FsKovSL1cXPQdMw5cOZdvraJxm9t8bdH86Cnku0CCoDAr%2F9reMd6hKPxY%2F2UU2xfXhsefeHbreMfq6wsaIqOuZCfC1GCV4cx8Q8BkRYpvn%2FUcSAImFxSFw%2FpNFxqJlHtNXGYhcnJQGDuImXCl%2BMHy6E%2FYEV2mqkpDZ8Xjwcsu5Ypze1VAUxv%2FpMByCXKcj%2Bkg%2BD3F5PTrgcQ1ihjT21KiboC6IgAEDSNrtpKzU8UW55JmlaXjrdl5EOnNZeaJvUcLuEEr%2BN7TQ%2F3qDBXFTyOv0ccb5WbmHdW66a4lrTkNvj7l3qSIkK4a4WVEPL0TGsWXQpu0ofZvURdY%2BV8k%2FjYZompKueRaAFMdDuVuODiU2lTkNzR8iBbiX%2FojG5iUH1zgsxCug%2Fs6I3GYnDfg0XnK3qI20J2x26jqAbBeVcmLGzZLJgBMK%2B26MkGOqUB%2BrX6UrcTwOedlDiKdRLoiyFl01%2F9ZTwPIS4Msq19%2FFe777FVFSCLrvDduGu%2BPWWjQAwYstHPK1P6zfVtXUaupp7aXsR%2Bqx%2BSp0jnoFL6kuV%2BnUTqL6Xa6icvj6iS9IM4c33lPKVbK2eNHMbB0u5ajgawGyWvdwZ7%2FEMewSxKD5RUS8KbnDf8Hi%2Fm9RNu2Gw82%2FMajBNlp1fqeuyqT6vF5QziDA1i&X-Amz-Signature=dc15f2e2b76f72cf71f01bcc1878b3869bfbdddf66149f30e35f58299191f5ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GVPWDDV%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCID2gnef7K5mloRKDvxCaI%2BwxNykXqT%2Fz%2B%2Baead8gXKk9AiEA9BaiCZ%2FaWLzJ7HBqzDGRJMkWYpPAZ0oJaKZJGIHHqvUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrH2Yiqx9dhQBUwgCrcA0id3%2BSFj2QmvChsVhi%2B3q7SwH9NjOIw6RXvqx0T5PRTN%2FjWFtY0mVVkEhSO2%2BLgAbhIv9ImDaJVHclR4TwXbHEaJdzfwtGVi0N4oMHZKe%2FBJFkhyohDhVYFbRetESyXtNJZgAHZg4ArVvj2DqBDtA2oYzS5bNkLcjkjoSAJ3HoAAlB%2BEqq9G%2FZ%2B52N9tOc6Nh%2B4JNne50ZL%2FsKovSL1cXPQdMw5cOZdvraJxm9t8bdH86Cnku0CCoDAr%2F9reMd6hKPxY%2F2UU2xfXhsefeHbreMfq6wsaIqOuZCfC1GCV4cx8Q8BkRYpvn%2FUcSAImFxSFw%2FpNFxqJlHtNXGYhcnJQGDuImXCl%2BMHy6E%2FYEV2mqkpDZ8Xjwcsu5Ypze1VAUxv%2FpMByCXKcj%2Bkg%2BD3F5PTrgcQ1ihjT21KiboC6IgAEDSNrtpKzU8UW55JmlaXjrdl5EOnNZeaJvUcLuEEr%2BN7TQ%2F3qDBXFTyOv0ccb5WbmHdW66a4lrTkNvj7l3qSIkK4a4WVEPL0TGsWXQpu0ofZvURdY%2BV8k%2FjYZompKueRaAFMdDuVuODiU2lTkNzR8iBbiX%2FojG5iUH1zgsxCug%2Fs6I3GYnDfg0XnK3qI20J2x26jqAbBeVcmLGzZLJgBMK%2B26MkGOqUB%2BrX6UrcTwOedlDiKdRLoiyFl01%2F9ZTwPIS4Msq19%2FFe777FVFSCLrvDduGu%2BPWWjQAwYstHPK1P6zfVtXUaupp7aXsR%2Bqx%2BSp0jnoFL6kuV%2BnUTqL6Xa6icvj6iS9IM4c33lPKVbK2eNHMbB0u5ajgawGyWvdwZ7%2FEMewSxKD5RUS8KbnDf8Hi%2Fm9RNu2Gw82%2FMajBNlp1fqeuyqT6vF5QziDA1i&X-Amz-Signature=c3fd647c19cc20677da73e7ac6b6f2054e8affbd27f32c839b82a696a86d4a86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GVPWDDV%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCID2gnef7K5mloRKDvxCaI%2BwxNykXqT%2Fz%2B%2Baead8gXKk9AiEA9BaiCZ%2FaWLzJ7HBqzDGRJMkWYpPAZ0oJaKZJGIHHqvUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrH2Yiqx9dhQBUwgCrcA0id3%2BSFj2QmvChsVhi%2B3q7SwH9NjOIw6RXvqx0T5PRTN%2FjWFtY0mVVkEhSO2%2BLgAbhIv9ImDaJVHclR4TwXbHEaJdzfwtGVi0N4oMHZKe%2FBJFkhyohDhVYFbRetESyXtNJZgAHZg4ArVvj2DqBDtA2oYzS5bNkLcjkjoSAJ3HoAAlB%2BEqq9G%2FZ%2B52N9tOc6Nh%2B4JNne50ZL%2FsKovSL1cXPQdMw5cOZdvraJxm9t8bdH86Cnku0CCoDAr%2F9reMd6hKPxY%2F2UU2xfXhsefeHbreMfq6wsaIqOuZCfC1GCV4cx8Q8BkRYpvn%2FUcSAImFxSFw%2FpNFxqJlHtNXGYhcnJQGDuImXCl%2BMHy6E%2FYEV2mqkpDZ8Xjwcsu5Ypze1VAUxv%2FpMByCXKcj%2Bkg%2BD3F5PTrgcQ1ihjT21KiboC6IgAEDSNrtpKzU8UW55JmlaXjrdl5EOnNZeaJvUcLuEEr%2BN7TQ%2F3qDBXFTyOv0ccb5WbmHdW66a4lrTkNvj7l3qSIkK4a4WVEPL0TGsWXQpu0ofZvURdY%2BV8k%2FjYZompKueRaAFMdDuVuODiU2lTkNzR8iBbiX%2FojG5iUH1zgsxCug%2Fs6I3GYnDfg0XnK3qI20J2x26jqAbBeVcmLGzZLJgBMK%2B26MkGOqUB%2BrX6UrcTwOedlDiKdRLoiyFl01%2F9ZTwPIS4Msq19%2FFe777FVFSCLrvDduGu%2BPWWjQAwYstHPK1P6zfVtXUaupp7aXsR%2Bqx%2BSp0jnoFL6kuV%2BnUTqL6Xa6icvj6iS9IM4c33lPKVbK2eNHMbB0u5ajgawGyWvdwZ7%2FEMewSxKD5RUS8KbnDf8Hi%2Fm9RNu2Gw82%2FMajBNlp1fqeuyqT6vF5QziDA1i&X-Amz-Signature=3472a6f658a1ce3e82ada0899ae4e1d009c5fe2b02113aa44022afb9a3f2d2b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


