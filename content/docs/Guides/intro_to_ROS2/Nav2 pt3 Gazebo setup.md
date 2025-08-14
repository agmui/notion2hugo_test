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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3WQ35RY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIF9kcarH%2Ba7hOpbnDWMzWvU60kCY2l%2BQkNG6QIaAfF3eAiEA4K36AKrkgC%2BPr4pB3qIXuCXOIbVGQHDPV8L8Cscf2kUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDNZ00t9rK0vgDoy8JCrcA9Dp%2FQt%2FIWQsXdFjvLERhnTaH4A%2F5sK9FOtN4%2BrudKzJ%2FHFh2ghgyJ%2FsGtQb9qBA9ZgV%2FlFq3kYYhcqO0DyDXxSzgeMpTF17j8lmTaD8B3mrK%2BO2dunNCPUmllkmMe6Ih7CRZZgOsxKqppP%2BYWOI%2FUkzrWQ2RgADKs8eSxfobNMNu4G7OtiTCwWEqjqDV9Q67B1j0JDouOJ6WC%2By2yi5JqA2V4QXy9bQF4pdSD9TR1E9f0OkjywhBVHHJBGMr42UbcPb%2BeEBtLPCvxdUW2UK%2FGEe1gyYU9XWvPs9SRp7L2EN%2BsKMiF442H7RH9ARky4zcGBVWv52cr%2FkFdMLy2UqpfKrgh7gxOmkAc%2BR%2BxTLv8pNyTytz7%2FOnn2mR7ioL1Xv3mFDPQzvL2uSGbiqzipCv%2FTf99EYCKRemmI57Zzxke6v32FIfJ9icC9N7iV131Zr9B1pD7vHZs0Qehy7x7pBmRN4I9x%2BdDYSBF%2BS0Laq3sVI%2B3GGDqqQwZJG1g%2FyE3W1uK7bLdtAbMJuqM0EQ9pc3Vi44Y21DHGyHs2q1AvH0ja%2FZ5mwhV5vDxdwa8h5RoQFRw0u59rDDohKZVcWIv%2BNRnb9IqhsAzdEtz7ok2pWw%2BGFclkCRfHTZYKzQOCJMPye%2BMQGOqUBgJTEZMlVCmi3dkWOSm%2FeClLLF9McorZLP%2FpksTMf5rn2ENnrMmQ0WCF6Vh7GsfVoQ%2BvtxKkKavNUOSwUW1hkTnOoQ8iyM1NPoIMCuMiTE7nTSAuQ7tjVQi9Ai5PLe9OSP7ZlQFCx6A%2BF7pCz3kzj91BuU4jJIant0SfP2mBQCiSrAAICWbYV%2B1AsREPvPp5kVV29L5G8wvt25qxV7ZFJ0D2hoj6I&X-Amz-Signature=ef4fcfa8aec5661d2b10d2906d29905bc761a257d27a515a2b351537cb88b930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3WQ35RY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIF9kcarH%2Ba7hOpbnDWMzWvU60kCY2l%2BQkNG6QIaAfF3eAiEA4K36AKrkgC%2BPr4pB3qIXuCXOIbVGQHDPV8L8Cscf2kUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDNZ00t9rK0vgDoy8JCrcA9Dp%2FQt%2FIWQsXdFjvLERhnTaH4A%2F5sK9FOtN4%2BrudKzJ%2FHFh2ghgyJ%2FsGtQb9qBA9ZgV%2FlFq3kYYhcqO0DyDXxSzgeMpTF17j8lmTaD8B3mrK%2BO2dunNCPUmllkmMe6Ih7CRZZgOsxKqppP%2BYWOI%2FUkzrWQ2RgADKs8eSxfobNMNu4G7OtiTCwWEqjqDV9Q67B1j0JDouOJ6WC%2By2yi5JqA2V4QXy9bQF4pdSD9TR1E9f0OkjywhBVHHJBGMr42UbcPb%2BeEBtLPCvxdUW2UK%2FGEe1gyYU9XWvPs9SRp7L2EN%2BsKMiF442H7RH9ARky4zcGBVWv52cr%2FkFdMLy2UqpfKrgh7gxOmkAc%2BR%2BxTLv8pNyTytz7%2FOnn2mR7ioL1Xv3mFDPQzvL2uSGbiqzipCv%2FTf99EYCKRemmI57Zzxke6v32FIfJ9icC9N7iV131Zr9B1pD7vHZs0Qehy7x7pBmRN4I9x%2BdDYSBF%2BS0Laq3sVI%2B3GGDqqQwZJG1g%2FyE3W1uK7bLdtAbMJuqM0EQ9pc3Vi44Y21DHGyHs2q1AvH0ja%2FZ5mwhV5vDxdwa8h5RoQFRw0u59rDDohKZVcWIv%2BNRnb9IqhsAzdEtz7ok2pWw%2BGFclkCRfHTZYKzQOCJMPye%2BMQGOqUBgJTEZMlVCmi3dkWOSm%2FeClLLF9McorZLP%2FpksTMf5rn2ENnrMmQ0WCF6Vh7GsfVoQ%2BvtxKkKavNUOSwUW1hkTnOoQ8iyM1NPoIMCuMiTE7nTSAuQ7tjVQi9Ai5PLe9OSP7ZlQFCx6A%2BF7pCz3kzj91BuU4jJIant0SfP2mBQCiSrAAICWbYV%2B1AsREPvPp5kVV29L5G8wvt25qxV7ZFJ0D2hoj6I&X-Amz-Signature=234828aeb49799b6e10d92754210526af9380aafa3a1ae87e452a8be009d794a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3WQ35RY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIF9kcarH%2Ba7hOpbnDWMzWvU60kCY2l%2BQkNG6QIaAfF3eAiEA4K36AKrkgC%2BPr4pB3qIXuCXOIbVGQHDPV8L8Cscf2kUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDNZ00t9rK0vgDoy8JCrcA9Dp%2FQt%2FIWQsXdFjvLERhnTaH4A%2F5sK9FOtN4%2BrudKzJ%2FHFh2ghgyJ%2FsGtQb9qBA9ZgV%2FlFq3kYYhcqO0DyDXxSzgeMpTF17j8lmTaD8B3mrK%2BO2dunNCPUmllkmMe6Ih7CRZZgOsxKqppP%2BYWOI%2FUkzrWQ2RgADKs8eSxfobNMNu4G7OtiTCwWEqjqDV9Q67B1j0JDouOJ6WC%2By2yi5JqA2V4QXy9bQF4pdSD9TR1E9f0OkjywhBVHHJBGMr42UbcPb%2BeEBtLPCvxdUW2UK%2FGEe1gyYU9XWvPs9SRp7L2EN%2BsKMiF442H7RH9ARky4zcGBVWv52cr%2FkFdMLy2UqpfKrgh7gxOmkAc%2BR%2BxTLv8pNyTytz7%2FOnn2mR7ioL1Xv3mFDPQzvL2uSGbiqzipCv%2FTf99EYCKRemmI57Zzxke6v32FIfJ9icC9N7iV131Zr9B1pD7vHZs0Qehy7x7pBmRN4I9x%2BdDYSBF%2BS0Laq3sVI%2B3GGDqqQwZJG1g%2FyE3W1uK7bLdtAbMJuqM0EQ9pc3Vi44Y21DHGyHs2q1AvH0ja%2FZ5mwhV5vDxdwa8h5RoQFRw0u59rDDohKZVcWIv%2BNRnb9IqhsAzdEtz7ok2pWw%2BGFclkCRfHTZYKzQOCJMPye%2BMQGOqUBgJTEZMlVCmi3dkWOSm%2FeClLLF9McorZLP%2FpksTMf5rn2ENnrMmQ0WCF6Vh7GsfVoQ%2BvtxKkKavNUOSwUW1hkTnOoQ8iyM1NPoIMCuMiTE7nTSAuQ7tjVQi9Ai5PLe9OSP7ZlQFCx6A%2BF7pCz3kzj91BuU4jJIant0SfP2mBQCiSrAAICWbYV%2B1AsREPvPp5kVV29L5G8wvt25qxV7ZFJ0D2hoj6I&X-Amz-Signature=418409cc16b5a9a514116cef1e212c17447b8b5d81cb4493221eafa6a4a3555c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3WQ35RY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIF9kcarH%2Ba7hOpbnDWMzWvU60kCY2l%2BQkNG6QIaAfF3eAiEA4K36AKrkgC%2BPr4pB3qIXuCXOIbVGQHDPV8L8Cscf2kUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDNZ00t9rK0vgDoy8JCrcA9Dp%2FQt%2FIWQsXdFjvLERhnTaH4A%2F5sK9FOtN4%2BrudKzJ%2FHFh2ghgyJ%2FsGtQb9qBA9ZgV%2FlFq3kYYhcqO0DyDXxSzgeMpTF17j8lmTaD8B3mrK%2BO2dunNCPUmllkmMe6Ih7CRZZgOsxKqppP%2BYWOI%2FUkzrWQ2RgADKs8eSxfobNMNu4G7OtiTCwWEqjqDV9Q67B1j0JDouOJ6WC%2By2yi5JqA2V4QXy9bQF4pdSD9TR1E9f0OkjywhBVHHJBGMr42UbcPb%2BeEBtLPCvxdUW2UK%2FGEe1gyYU9XWvPs9SRp7L2EN%2BsKMiF442H7RH9ARky4zcGBVWv52cr%2FkFdMLy2UqpfKrgh7gxOmkAc%2BR%2BxTLv8pNyTytz7%2FOnn2mR7ioL1Xv3mFDPQzvL2uSGbiqzipCv%2FTf99EYCKRemmI57Zzxke6v32FIfJ9icC9N7iV131Zr9B1pD7vHZs0Qehy7x7pBmRN4I9x%2BdDYSBF%2BS0Laq3sVI%2B3GGDqqQwZJG1g%2FyE3W1uK7bLdtAbMJuqM0EQ9pc3Vi44Y21DHGyHs2q1AvH0ja%2FZ5mwhV5vDxdwa8h5RoQFRw0u59rDDohKZVcWIv%2BNRnb9IqhsAzdEtz7ok2pWw%2BGFclkCRfHTZYKzQOCJMPye%2BMQGOqUBgJTEZMlVCmi3dkWOSm%2FeClLLF9McorZLP%2FpksTMf5rn2ENnrMmQ0WCF6Vh7GsfVoQ%2BvtxKkKavNUOSwUW1hkTnOoQ8iyM1NPoIMCuMiTE7nTSAuQ7tjVQi9Ai5PLe9OSP7ZlQFCx6A%2BF7pCz3kzj91BuU4jJIant0SfP2mBQCiSrAAICWbYV%2B1AsREPvPp5kVV29L5G8wvt25qxV7ZFJ0D2hoj6I&X-Amz-Signature=5f1fa710a07a85acdd1e74743dbc31bde97fe2277856493a18064bc183697176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCLLMRQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDaHFqEG6dkIYMPYgYeOOAWcfZOXHzvw0wezYt7T30oSQIhAMhFKp6W6g%2FDZjoYMsG9z4PpPTeFFoohozGUS1r8ukE3Kv8DCEoQABoMNjM3NDIzMTgzODA1Igx9DE72LsKRhH3QvX8q3AM5wxFUEVp5lJLrJxt3OHOYhD8fmEZELPmkZA4vOCBEid2VBtmdubEauiHBUC2ggnIIDWSIQ0n1QKO930PlVbqavCq7vZtYc%2F28Ks6d9hsFvaTCDiZ%2Fa2n2xugPQO6bYPbc13nI%2B6G6pBos8LvxsRdwJKbbbkilLllgA%2BIVrS%2FSZH5DNmrQ%2F9aVlUHzKuqrR84w1y2J2b%2BuwnFX83zo%2FL5m95F5gtZ2b26Mxcr5fEYxLwNL2WHrYFCIWo4pnvqZD5poJRHMC5uG%2BGYGn71KtzU73B79oPtTNBMmrFI13TV%2FzNp7189PVxh9lXpkDIXMf07P%2BihG%2BR6Uov8JTglCJBOi1Q0H61FCd47bwfqkrlYJznVOKM9ysvKkp7G8uVlqPj84DziKt1IjQOBqdmM6y%2Fz8KM57F9oJyPXvug7K9WzfROsM9c2knQw7gVinKrMB55RSr0VHGS4ohy%2FXvONnf4doLcr2l7KCJFPOJ0LumMII9g6BcksG3J1o2IZgIC%2FeQIJwX8qqp7Iub9RBRyKZLpFUP7fZhxb67MbCBpDM%2FTiaXn5z95hhemstoJ0ksE3HRJr1sx1Hh5FyYHTq6%2FLfcfjhZtouZ9%2F8HffAS%2BfHpYctO71eeR6czKUzWo8wYjDJn%2FjEBjqkAbru5DoHAtsi1OiXSQTqjDxoPEF4RkHH0NFiA0WlOooQPIcaAyCpJTk4ulkBauA3UNgrXQzzBdzRkKdBGELK5dEB5qFGbEwA7dALo%2BjUzCaG7ysn3N9dn5FNVXM5oNIuH6xsCc7yrcyLj8g%2FJJ%2BsmchsaPy30wXR9EC9OqUoAmXSBv%2FgUsn5p4eTu5SQVzFIHNjqwNMtiFrM7YqccEiZ6pPOqX3O&X-Amz-Signature=3fae0771b1b869db5cc4ef35f081d648d63afa0deb9781e7021a58e62c60ae5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3WQ35RY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIF9kcarH%2Ba7hOpbnDWMzWvU60kCY2l%2BQkNG6QIaAfF3eAiEA4K36AKrkgC%2BPr4pB3qIXuCXOIbVGQHDPV8L8Cscf2kUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDNZ00t9rK0vgDoy8JCrcA9Dp%2FQt%2FIWQsXdFjvLERhnTaH4A%2F5sK9FOtN4%2BrudKzJ%2FHFh2ghgyJ%2FsGtQb9qBA9ZgV%2FlFq3kYYhcqO0DyDXxSzgeMpTF17j8lmTaD8B3mrK%2BO2dunNCPUmllkmMe6Ih7CRZZgOsxKqppP%2BYWOI%2FUkzrWQ2RgADKs8eSxfobNMNu4G7OtiTCwWEqjqDV9Q67B1j0JDouOJ6WC%2By2yi5JqA2V4QXy9bQF4pdSD9TR1E9f0OkjywhBVHHJBGMr42UbcPb%2BeEBtLPCvxdUW2UK%2FGEe1gyYU9XWvPs9SRp7L2EN%2BsKMiF442H7RH9ARky4zcGBVWv52cr%2FkFdMLy2UqpfKrgh7gxOmkAc%2BR%2BxTLv8pNyTytz7%2FOnn2mR7ioL1Xv3mFDPQzvL2uSGbiqzipCv%2FTf99EYCKRemmI57Zzxke6v32FIfJ9icC9N7iV131Zr9B1pD7vHZs0Qehy7x7pBmRN4I9x%2BdDYSBF%2BS0Laq3sVI%2B3GGDqqQwZJG1g%2FyE3W1uK7bLdtAbMJuqM0EQ9pc3Vi44Y21DHGyHs2q1AvH0ja%2FZ5mwhV5vDxdwa8h5RoQFRw0u59rDDohKZVcWIv%2BNRnb9IqhsAzdEtz7ok2pWw%2BGFclkCRfHTZYKzQOCJMPye%2BMQGOqUBgJTEZMlVCmi3dkWOSm%2FeClLLF9McorZLP%2FpksTMf5rn2ENnrMmQ0WCF6Vh7GsfVoQ%2BvtxKkKavNUOSwUW1hkTnOoQ8iyM1NPoIMCuMiTE7nTSAuQ7tjVQi9Ai5PLe9OSP7ZlQFCx6A%2BF7pCz3kzj91BuU4jJIant0SfP2mBQCiSrAAICWbYV%2B1AsREPvPp5kVV29L5G8wvt25qxV7ZFJ0D2hoj6I&X-Amz-Signature=7324e992749aac72f9e00af753f814f153eea308dc0f8d96dcc62bc5e21a681c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3WQ35RY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIF9kcarH%2Ba7hOpbnDWMzWvU60kCY2l%2BQkNG6QIaAfF3eAiEA4K36AKrkgC%2BPr4pB3qIXuCXOIbVGQHDPV8L8Cscf2kUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDNZ00t9rK0vgDoy8JCrcA9Dp%2FQt%2FIWQsXdFjvLERhnTaH4A%2F5sK9FOtN4%2BrudKzJ%2FHFh2ghgyJ%2FsGtQb9qBA9ZgV%2FlFq3kYYhcqO0DyDXxSzgeMpTF17j8lmTaD8B3mrK%2BO2dunNCPUmllkmMe6Ih7CRZZgOsxKqppP%2BYWOI%2FUkzrWQ2RgADKs8eSxfobNMNu4G7OtiTCwWEqjqDV9Q67B1j0JDouOJ6WC%2By2yi5JqA2V4QXy9bQF4pdSD9TR1E9f0OkjywhBVHHJBGMr42UbcPb%2BeEBtLPCvxdUW2UK%2FGEe1gyYU9XWvPs9SRp7L2EN%2BsKMiF442H7RH9ARky4zcGBVWv52cr%2FkFdMLy2UqpfKrgh7gxOmkAc%2BR%2BxTLv8pNyTytz7%2FOnn2mR7ioL1Xv3mFDPQzvL2uSGbiqzipCv%2FTf99EYCKRemmI57Zzxke6v32FIfJ9icC9N7iV131Zr9B1pD7vHZs0Qehy7x7pBmRN4I9x%2BdDYSBF%2BS0Laq3sVI%2B3GGDqqQwZJG1g%2FyE3W1uK7bLdtAbMJuqM0EQ9pc3Vi44Y21DHGyHs2q1AvH0ja%2FZ5mwhV5vDxdwa8h5RoQFRw0u59rDDohKZVcWIv%2BNRnb9IqhsAzdEtz7ok2pWw%2BGFclkCRfHTZYKzQOCJMPye%2BMQGOqUBgJTEZMlVCmi3dkWOSm%2FeClLLF9McorZLP%2FpksTMf5rn2ENnrMmQ0WCF6Vh7GsfVoQ%2BvtxKkKavNUOSwUW1hkTnOoQ8iyM1NPoIMCuMiTE7nTSAuQ7tjVQi9Ai5PLe9OSP7ZlQFCx6A%2BF7pCz3kzj91BuU4jJIant0SfP2mBQCiSrAAICWbYV%2B1AsREPvPp5kVV29L5G8wvt25qxV7ZFJ0D2hoj6I&X-Amz-Signature=57c08494a11a37160ef3c1a76e4edac2bb6162a1676595637752cbaebc0ceaaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3WQ35RY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIF9kcarH%2Ba7hOpbnDWMzWvU60kCY2l%2BQkNG6QIaAfF3eAiEA4K36AKrkgC%2BPr4pB3qIXuCXOIbVGQHDPV8L8Cscf2kUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDNZ00t9rK0vgDoy8JCrcA9Dp%2FQt%2FIWQsXdFjvLERhnTaH4A%2F5sK9FOtN4%2BrudKzJ%2FHFh2ghgyJ%2FsGtQb9qBA9ZgV%2FlFq3kYYhcqO0DyDXxSzgeMpTF17j8lmTaD8B3mrK%2BO2dunNCPUmllkmMe6Ih7CRZZgOsxKqppP%2BYWOI%2FUkzrWQ2RgADKs8eSxfobNMNu4G7OtiTCwWEqjqDV9Q67B1j0JDouOJ6WC%2By2yi5JqA2V4QXy9bQF4pdSD9TR1E9f0OkjywhBVHHJBGMr42UbcPb%2BeEBtLPCvxdUW2UK%2FGEe1gyYU9XWvPs9SRp7L2EN%2BsKMiF442H7RH9ARky4zcGBVWv52cr%2FkFdMLy2UqpfKrgh7gxOmkAc%2BR%2BxTLv8pNyTytz7%2FOnn2mR7ioL1Xv3mFDPQzvL2uSGbiqzipCv%2FTf99EYCKRemmI57Zzxke6v32FIfJ9icC9N7iV131Zr9B1pD7vHZs0Qehy7x7pBmRN4I9x%2BdDYSBF%2BS0Laq3sVI%2B3GGDqqQwZJG1g%2FyE3W1uK7bLdtAbMJuqM0EQ9pc3Vi44Y21DHGyHs2q1AvH0ja%2FZ5mwhV5vDxdwa8h5RoQFRw0u59rDDohKZVcWIv%2BNRnb9IqhsAzdEtz7ok2pWw%2BGFclkCRfHTZYKzQOCJMPye%2BMQGOqUBgJTEZMlVCmi3dkWOSm%2FeClLLF9McorZLP%2FpksTMf5rn2ENnrMmQ0WCF6Vh7GsfVoQ%2BvtxKkKavNUOSwUW1hkTnOoQ8iyM1NPoIMCuMiTE7nTSAuQ7tjVQi9Ai5PLe9OSP7ZlQFCx6A%2BF7pCz3kzj91BuU4jJIant0SfP2mBQCiSrAAICWbYV%2B1AsREPvPp5kVV29L5G8wvt25qxV7ZFJ0D2hoj6I&X-Amz-Signature=3313eee85317be02dd927706a3e9308f2a6519c6e6c4c8a8c1c7e40b300c0431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3WQ35RY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIF9kcarH%2Ba7hOpbnDWMzWvU60kCY2l%2BQkNG6QIaAfF3eAiEA4K36AKrkgC%2BPr4pB3qIXuCXOIbVGQHDPV8L8Cscf2kUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDNZ00t9rK0vgDoy8JCrcA9Dp%2FQt%2FIWQsXdFjvLERhnTaH4A%2F5sK9FOtN4%2BrudKzJ%2FHFh2ghgyJ%2FsGtQb9qBA9ZgV%2FlFq3kYYhcqO0DyDXxSzgeMpTF17j8lmTaD8B3mrK%2BO2dunNCPUmllkmMe6Ih7CRZZgOsxKqppP%2BYWOI%2FUkzrWQ2RgADKs8eSxfobNMNu4G7OtiTCwWEqjqDV9Q67B1j0JDouOJ6WC%2By2yi5JqA2V4QXy9bQF4pdSD9TR1E9f0OkjywhBVHHJBGMr42UbcPb%2BeEBtLPCvxdUW2UK%2FGEe1gyYU9XWvPs9SRp7L2EN%2BsKMiF442H7RH9ARky4zcGBVWv52cr%2FkFdMLy2UqpfKrgh7gxOmkAc%2BR%2BxTLv8pNyTytz7%2FOnn2mR7ioL1Xv3mFDPQzvL2uSGbiqzipCv%2FTf99EYCKRemmI57Zzxke6v32FIfJ9icC9N7iV131Zr9B1pD7vHZs0Qehy7x7pBmRN4I9x%2BdDYSBF%2BS0Laq3sVI%2B3GGDqqQwZJG1g%2FyE3W1uK7bLdtAbMJuqM0EQ9pc3Vi44Y21DHGyHs2q1AvH0ja%2FZ5mwhV5vDxdwa8h5RoQFRw0u59rDDohKZVcWIv%2BNRnb9IqhsAzdEtz7ok2pWw%2BGFclkCRfHTZYKzQOCJMPye%2BMQGOqUBgJTEZMlVCmi3dkWOSm%2FeClLLF9McorZLP%2FpksTMf5rn2ENnrMmQ0WCF6Vh7GsfVoQ%2BvtxKkKavNUOSwUW1hkTnOoQ8iyM1NPoIMCuMiTE7nTSAuQ7tjVQi9Ai5PLe9OSP7ZlQFCx6A%2BF7pCz3kzj91BuU4jJIant0SfP2mBQCiSrAAICWbYV%2B1AsREPvPp5kVV29L5G8wvt25qxV7ZFJ0D2hoj6I&X-Amz-Signature=556e2eb5f0c9b9b2d1ad947bc4b27308e0a0369e976ea4aad7fedf5b221a5a07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3WQ35RY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIF9kcarH%2Ba7hOpbnDWMzWvU60kCY2l%2BQkNG6QIaAfF3eAiEA4K36AKrkgC%2BPr4pB3qIXuCXOIbVGQHDPV8L8Cscf2kUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDNZ00t9rK0vgDoy8JCrcA9Dp%2FQt%2FIWQsXdFjvLERhnTaH4A%2F5sK9FOtN4%2BrudKzJ%2FHFh2ghgyJ%2FsGtQb9qBA9ZgV%2FlFq3kYYhcqO0DyDXxSzgeMpTF17j8lmTaD8B3mrK%2BO2dunNCPUmllkmMe6Ih7CRZZgOsxKqppP%2BYWOI%2FUkzrWQ2RgADKs8eSxfobNMNu4G7OtiTCwWEqjqDV9Q67B1j0JDouOJ6WC%2By2yi5JqA2V4QXy9bQF4pdSD9TR1E9f0OkjywhBVHHJBGMr42UbcPb%2BeEBtLPCvxdUW2UK%2FGEe1gyYU9XWvPs9SRp7L2EN%2BsKMiF442H7RH9ARky4zcGBVWv52cr%2FkFdMLy2UqpfKrgh7gxOmkAc%2BR%2BxTLv8pNyTytz7%2FOnn2mR7ioL1Xv3mFDPQzvL2uSGbiqzipCv%2FTf99EYCKRemmI57Zzxke6v32FIfJ9icC9N7iV131Zr9B1pD7vHZs0Qehy7x7pBmRN4I9x%2BdDYSBF%2BS0Laq3sVI%2B3GGDqqQwZJG1g%2FyE3W1uK7bLdtAbMJuqM0EQ9pc3Vi44Y21DHGyHs2q1AvH0ja%2FZ5mwhV5vDxdwa8h5RoQFRw0u59rDDohKZVcWIv%2BNRnb9IqhsAzdEtz7ok2pWw%2BGFclkCRfHTZYKzQOCJMPye%2BMQGOqUBgJTEZMlVCmi3dkWOSm%2FeClLLF9McorZLP%2FpksTMf5rn2ENnrMmQ0WCF6Vh7GsfVoQ%2BvtxKkKavNUOSwUW1hkTnOoQ8iyM1NPoIMCuMiTE7nTSAuQ7tjVQi9Ai5PLe9OSP7ZlQFCx6A%2BF7pCz3kzj91BuU4jJIant0SfP2mBQCiSrAAICWbYV%2B1AsREPvPp5kVV29L5G8wvt25qxV7ZFJ0D2hoj6I&X-Amz-Signature=670bc20e48e102eed66b99d35599586633bbada298679c68c3114808058e82c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3WQ35RY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIF9kcarH%2Ba7hOpbnDWMzWvU60kCY2l%2BQkNG6QIaAfF3eAiEA4K36AKrkgC%2BPr4pB3qIXuCXOIbVGQHDPV8L8Cscf2kUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDNZ00t9rK0vgDoy8JCrcA9Dp%2FQt%2FIWQsXdFjvLERhnTaH4A%2F5sK9FOtN4%2BrudKzJ%2FHFh2ghgyJ%2FsGtQb9qBA9ZgV%2FlFq3kYYhcqO0DyDXxSzgeMpTF17j8lmTaD8B3mrK%2BO2dunNCPUmllkmMe6Ih7CRZZgOsxKqppP%2BYWOI%2FUkzrWQ2RgADKs8eSxfobNMNu4G7OtiTCwWEqjqDV9Q67B1j0JDouOJ6WC%2By2yi5JqA2V4QXy9bQF4pdSD9TR1E9f0OkjywhBVHHJBGMr42UbcPb%2BeEBtLPCvxdUW2UK%2FGEe1gyYU9XWvPs9SRp7L2EN%2BsKMiF442H7RH9ARky4zcGBVWv52cr%2FkFdMLy2UqpfKrgh7gxOmkAc%2BR%2BxTLv8pNyTytz7%2FOnn2mR7ioL1Xv3mFDPQzvL2uSGbiqzipCv%2FTf99EYCKRemmI57Zzxke6v32FIfJ9icC9N7iV131Zr9B1pD7vHZs0Qehy7x7pBmRN4I9x%2BdDYSBF%2BS0Laq3sVI%2B3GGDqqQwZJG1g%2FyE3W1uK7bLdtAbMJuqM0EQ9pc3Vi44Y21DHGyHs2q1AvH0ja%2FZ5mwhV5vDxdwa8h5RoQFRw0u59rDDohKZVcWIv%2BNRnb9IqhsAzdEtz7ok2pWw%2BGFclkCRfHTZYKzQOCJMPye%2BMQGOqUBgJTEZMlVCmi3dkWOSm%2FeClLLF9McorZLP%2FpksTMf5rn2ENnrMmQ0WCF6Vh7GsfVoQ%2BvtxKkKavNUOSwUW1hkTnOoQ8iyM1NPoIMCuMiTE7nTSAuQ7tjVQi9Ai5PLe9OSP7ZlQFCx6A%2BF7pCz3kzj91BuU4jJIant0SfP2mBQCiSrAAICWbYV%2B1AsREPvPp5kVV29L5G8wvt25qxV7ZFJ0D2hoj6I&X-Amz-Signature=c23a05fd65711a0fd04f7ee514dcc62cdf81a4a021978404e6eb32fc11ef00bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
