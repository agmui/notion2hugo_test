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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZBTLHWB%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCxpz0o9EXal2EdU4kSeIkB98ma8NDv8B0smwWVbg7d0QIgTxkHXepQmi6x6RmLZQQyKLFApBmfhw7ga7ouHhwH%2B9gqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOmFEY9kc%2FxheU%2FqircA9epxgK1AOehinUJBx5PpWDRz5rSB1BJEF%2B5tsL9DJwhmwBNcyPpLLp3Yh2l8fqgutB8tX06yF3srgPNeoTiGeMnxQExQrFc8Eo0J%2BeHxHC%2Flyd1Ubu3%2F6n3OJxiQtgnTnQRzBwp7t6meRUVervE2sPvopYBy6dXwYbOK42rG3DxeJm8Xjw9Z7jD2%2F7QmjWj10SjUL8rlAmW%2BdPiGApoMdf3v2bPTW37FVB32KjAxyI3yjqmUd89mHMgP6dHOJQswqNkTIRPWecO6uVohcX5%2FhhLoXLCPNbBPpY1fGVzhQupfxkrsdvHuWCJKg8cGT86tYrrij7g6nYAlU6vFwABc5Zpafnklzuhur%2B45UTo01KqUrnz9xDa7zs8URYx3KfaBSJkocLw6OGa2WnkEjmxtveO8dgFoVCo8r8NkEFlhn5aK6IdEiIXriKgrUTAyp8EnA8yLrWB0zPDysCOw2uT9jDd2T%2BM02j9GHdavNsRNGZiR6D0yIbKIvtQbAfH%2FxQzIORJ6je7tWCsgrq5qmrg3bxU9l4lk43nbTr7y5StcHhy6E6bCu068kOsJgvDCl3rloKvEJ%2FjbQ%2FeDwoJNZ2W2nX9wvUMhX%2B%2B9cuPbW1DuHPqE9SBdP%2F8qK4GkzLOMObo4s0GOqUBPFaLz2fOX7WrLKxb2qUDVN3bh1AQJFHuBVsg4WP6hJtV%2FQw6UNggETZcoKJI17ZcfNCEtqsp1akDu6kobT89Ir6xgjD0zh8LSC07Bx3qI1SbACI%2FKXaZTzLsJjmpsJFF3MhfVpkLTJp458sSTp7sfMaIAv0MRHAmjAljPE86U5BzuG0JsBMDlUhu%2BWoCmFjSUQeGr3xWu7B3rOhdquN%2BuDBwGEpw&X-Amz-Signature=a5acfb554c559b3519734914eb3e72da3cbfdb4cf88f513df73bac08bb9ed30d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZBTLHWB%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCxpz0o9EXal2EdU4kSeIkB98ma8NDv8B0smwWVbg7d0QIgTxkHXepQmi6x6RmLZQQyKLFApBmfhw7ga7ouHhwH%2B9gqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOmFEY9kc%2FxheU%2FqircA9epxgK1AOehinUJBx5PpWDRz5rSB1BJEF%2B5tsL9DJwhmwBNcyPpLLp3Yh2l8fqgutB8tX06yF3srgPNeoTiGeMnxQExQrFc8Eo0J%2BeHxHC%2Flyd1Ubu3%2F6n3OJxiQtgnTnQRzBwp7t6meRUVervE2sPvopYBy6dXwYbOK42rG3DxeJm8Xjw9Z7jD2%2F7QmjWj10SjUL8rlAmW%2BdPiGApoMdf3v2bPTW37FVB32KjAxyI3yjqmUd89mHMgP6dHOJQswqNkTIRPWecO6uVohcX5%2FhhLoXLCPNbBPpY1fGVzhQupfxkrsdvHuWCJKg8cGT86tYrrij7g6nYAlU6vFwABc5Zpafnklzuhur%2B45UTo01KqUrnz9xDa7zs8URYx3KfaBSJkocLw6OGa2WnkEjmxtveO8dgFoVCo8r8NkEFlhn5aK6IdEiIXriKgrUTAyp8EnA8yLrWB0zPDysCOw2uT9jDd2T%2BM02j9GHdavNsRNGZiR6D0yIbKIvtQbAfH%2FxQzIORJ6je7tWCsgrq5qmrg3bxU9l4lk43nbTr7y5StcHhy6E6bCu068kOsJgvDCl3rloKvEJ%2FjbQ%2FeDwoJNZ2W2nX9wvUMhX%2B%2B9cuPbW1DuHPqE9SBdP%2F8qK4GkzLOMObo4s0GOqUBPFaLz2fOX7WrLKxb2qUDVN3bh1AQJFHuBVsg4WP6hJtV%2FQw6UNggETZcoKJI17ZcfNCEtqsp1akDu6kobT89Ir6xgjD0zh8LSC07Bx3qI1SbACI%2FKXaZTzLsJjmpsJFF3MhfVpkLTJp458sSTp7sfMaIAv0MRHAmjAljPE86U5BzuG0JsBMDlUhu%2BWoCmFjSUQeGr3xWu7B3rOhdquN%2BuDBwGEpw&X-Amz-Signature=0c4e62a16984331e1d0c0c746d90cbfbefcaf4ea63749c358bc76cf0321e5c4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZBTLHWB%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCxpz0o9EXal2EdU4kSeIkB98ma8NDv8B0smwWVbg7d0QIgTxkHXepQmi6x6RmLZQQyKLFApBmfhw7ga7ouHhwH%2B9gqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOmFEY9kc%2FxheU%2FqircA9epxgK1AOehinUJBx5PpWDRz5rSB1BJEF%2B5tsL9DJwhmwBNcyPpLLp3Yh2l8fqgutB8tX06yF3srgPNeoTiGeMnxQExQrFc8Eo0J%2BeHxHC%2Flyd1Ubu3%2F6n3OJxiQtgnTnQRzBwp7t6meRUVervE2sPvopYBy6dXwYbOK42rG3DxeJm8Xjw9Z7jD2%2F7QmjWj10SjUL8rlAmW%2BdPiGApoMdf3v2bPTW37FVB32KjAxyI3yjqmUd89mHMgP6dHOJQswqNkTIRPWecO6uVohcX5%2FhhLoXLCPNbBPpY1fGVzhQupfxkrsdvHuWCJKg8cGT86tYrrij7g6nYAlU6vFwABc5Zpafnklzuhur%2B45UTo01KqUrnz9xDa7zs8URYx3KfaBSJkocLw6OGa2WnkEjmxtveO8dgFoVCo8r8NkEFlhn5aK6IdEiIXriKgrUTAyp8EnA8yLrWB0zPDysCOw2uT9jDd2T%2BM02j9GHdavNsRNGZiR6D0yIbKIvtQbAfH%2FxQzIORJ6je7tWCsgrq5qmrg3bxU9l4lk43nbTr7y5StcHhy6E6bCu068kOsJgvDCl3rloKvEJ%2FjbQ%2FeDwoJNZ2W2nX9wvUMhX%2B%2B9cuPbW1DuHPqE9SBdP%2F8qK4GkzLOMObo4s0GOqUBPFaLz2fOX7WrLKxb2qUDVN3bh1AQJFHuBVsg4WP6hJtV%2FQw6UNggETZcoKJI17ZcfNCEtqsp1akDu6kobT89Ir6xgjD0zh8LSC07Bx3qI1SbACI%2FKXaZTzLsJjmpsJFF3MhfVpkLTJp458sSTp7sfMaIAv0MRHAmjAljPE86U5BzuG0JsBMDlUhu%2BWoCmFjSUQeGr3xWu7B3rOhdquN%2BuDBwGEpw&X-Amz-Signature=8d03434f5011dd55923fe78a1458f5ccb4be3574c67f28621a2cee9c373b54be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZBTLHWB%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCxpz0o9EXal2EdU4kSeIkB98ma8NDv8B0smwWVbg7d0QIgTxkHXepQmi6x6RmLZQQyKLFApBmfhw7ga7ouHhwH%2B9gqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOmFEY9kc%2FxheU%2FqircA9epxgK1AOehinUJBx5PpWDRz5rSB1BJEF%2B5tsL9DJwhmwBNcyPpLLp3Yh2l8fqgutB8tX06yF3srgPNeoTiGeMnxQExQrFc8Eo0J%2BeHxHC%2Flyd1Ubu3%2F6n3OJxiQtgnTnQRzBwp7t6meRUVervE2sPvopYBy6dXwYbOK42rG3DxeJm8Xjw9Z7jD2%2F7QmjWj10SjUL8rlAmW%2BdPiGApoMdf3v2bPTW37FVB32KjAxyI3yjqmUd89mHMgP6dHOJQswqNkTIRPWecO6uVohcX5%2FhhLoXLCPNbBPpY1fGVzhQupfxkrsdvHuWCJKg8cGT86tYrrij7g6nYAlU6vFwABc5Zpafnklzuhur%2B45UTo01KqUrnz9xDa7zs8URYx3KfaBSJkocLw6OGa2WnkEjmxtveO8dgFoVCo8r8NkEFlhn5aK6IdEiIXriKgrUTAyp8EnA8yLrWB0zPDysCOw2uT9jDd2T%2BM02j9GHdavNsRNGZiR6D0yIbKIvtQbAfH%2FxQzIORJ6je7tWCsgrq5qmrg3bxU9l4lk43nbTr7y5StcHhy6E6bCu068kOsJgvDCl3rloKvEJ%2FjbQ%2FeDwoJNZ2W2nX9wvUMhX%2B%2B9cuPbW1DuHPqE9SBdP%2F8qK4GkzLOMObo4s0GOqUBPFaLz2fOX7WrLKxb2qUDVN3bh1AQJFHuBVsg4WP6hJtV%2FQw6UNggETZcoKJI17ZcfNCEtqsp1akDu6kobT89Ir6xgjD0zh8LSC07Bx3qI1SbACI%2FKXaZTzLsJjmpsJFF3MhfVpkLTJp458sSTp7sfMaIAv0MRHAmjAljPE86U5BzuG0JsBMDlUhu%2BWoCmFjSUQeGr3xWu7B3rOhdquN%2BuDBwGEpw&X-Amz-Signature=fe273d83860867316b2b9c6d277615b7b3fa0a5689a1efb8ea271368c9b25881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2W6EXSG%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFvndhLy3xw1mt1WmurjeDuaqC0KXEwbYXB9vBrcKcTsAiEAwwA2SFSaPqnQhk92C7fFVk066%2BUeaqBHLseM0WApNhUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9eJrf8Lz3BnDVzyyrcA0nPaNo9BOCJJ31xplVJibPmQMmVQ4%2F%2BopwIsNExvKasq1SUXGvyw08OOKfzj%2FQh3FUFTqZ%2F0Whql%2FBzOMVAwaxhoeWuYM9FhQvn2fVbx7v1x5ih5CcvtlrPJKoC%2BiC04gbb3MN4A9c3VjmRjt7ejjlGEKJ9EI75xpsNY%2FIJ9OhSYdlw%2Bj%2FvSU52XVyB%2FmwkQqHAiR2OCKAroCPgMEgD6Km9gpkooPlBn8IgYKgAUl62RXFN%2BD3haEH4VE1e%2F8tlT%2BsZ%2FGGANhazio4%2B%2FHD031xQo6LhlgBdHY7vwiu4PKVs9TUHI99G2SG7JhlF%2F8c%2FfNcjV%2BTTcjQG0j0idASVMxX6%2BjH1iHrw7ZVWVKevvTXQka3Wdsdo6ZeRhQlSP8gYAyd4y64%2FvAb%2FB1skFitiICsxyzLzhb86K%2BSWGkFH1iYujaOkl5XNz0yPQ%2F0eB1ewV4C0Ca6cEzD%2FOY4VyRBf%2FalWco8etXx0Z0IHmt%2FgvRe6XAzRulhW4f7W71pd61YVcT7BJ2I64ohd%2FYs%2FTr8A7oa%2FTFTrQ4sEF6oENoV%2FGT76gifEjHDgcIw%2F2%2B%2BoybpdFWdIurKpSUTY%2B%2BrmeDOcJfLGaUQ6JFf3VkXdXA5L79%2FunOrq4euxCGkiUVhNMOTn4s0GOqUBU3qu%2FNR%2Fdn7xJOqdoBQBtX8POZ1Y%2FCQ1dzI0OhQzM4%2F8xrZO2nh6QcWph6JewChbCkWW4RQmBk8JMlgmEd90Hy01WF81Cj%2FATO5Fba%2Btv6xOuB%2FG4%2Fli8FOKd1h8hUoi%2BkjKivK%2BTXPMlo8y%2FPFces8uYs237uFg0EUStZTMOBAzcQR4zeBd3M6rBD1lWi8kHIBL8j7hJKY8n2QFVHJSMC8qlqbW&X-Amz-Signature=b28b76de53ccb1e87d064b778312afa5fa1afe5576e085e1f4973a39b1666ee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZBTLHWB%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCxpz0o9EXal2EdU4kSeIkB98ma8NDv8B0smwWVbg7d0QIgTxkHXepQmi6x6RmLZQQyKLFApBmfhw7ga7ouHhwH%2B9gqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOmFEY9kc%2FxheU%2FqircA9epxgK1AOehinUJBx5PpWDRz5rSB1BJEF%2B5tsL9DJwhmwBNcyPpLLp3Yh2l8fqgutB8tX06yF3srgPNeoTiGeMnxQExQrFc8Eo0J%2BeHxHC%2Flyd1Ubu3%2F6n3OJxiQtgnTnQRzBwp7t6meRUVervE2sPvopYBy6dXwYbOK42rG3DxeJm8Xjw9Z7jD2%2F7QmjWj10SjUL8rlAmW%2BdPiGApoMdf3v2bPTW37FVB32KjAxyI3yjqmUd89mHMgP6dHOJQswqNkTIRPWecO6uVohcX5%2FhhLoXLCPNbBPpY1fGVzhQupfxkrsdvHuWCJKg8cGT86tYrrij7g6nYAlU6vFwABc5Zpafnklzuhur%2B45UTo01KqUrnz9xDa7zs8URYx3KfaBSJkocLw6OGa2WnkEjmxtveO8dgFoVCo8r8NkEFlhn5aK6IdEiIXriKgrUTAyp8EnA8yLrWB0zPDysCOw2uT9jDd2T%2BM02j9GHdavNsRNGZiR6D0yIbKIvtQbAfH%2FxQzIORJ6je7tWCsgrq5qmrg3bxU9l4lk43nbTr7y5StcHhy6E6bCu068kOsJgvDCl3rloKvEJ%2FjbQ%2FeDwoJNZ2W2nX9wvUMhX%2B%2B9cuPbW1DuHPqE9SBdP%2F8qK4GkzLOMObo4s0GOqUBPFaLz2fOX7WrLKxb2qUDVN3bh1AQJFHuBVsg4WP6hJtV%2FQw6UNggETZcoKJI17ZcfNCEtqsp1akDu6kobT89Ir6xgjD0zh8LSC07Bx3qI1SbACI%2FKXaZTzLsJjmpsJFF3MhfVpkLTJp458sSTp7sfMaIAv0MRHAmjAljPE86U5BzuG0JsBMDlUhu%2BWoCmFjSUQeGr3xWu7B3rOhdquN%2BuDBwGEpw&X-Amz-Signature=6888a02f8c041e41aea79d528814dc4b0db9ed32c53829ee5fc1d8d62e008dcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZBTLHWB%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCxpz0o9EXal2EdU4kSeIkB98ma8NDv8B0smwWVbg7d0QIgTxkHXepQmi6x6RmLZQQyKLFApBmfhw7ga7ouHhwH%2B9gqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOmFEY9kc%2FxheU%2FqircA9epxgK1AOehinUJBx5PpWDRz5rSB1BJEF%2B5tsL9DJwhmwBNcyPpLLp3Yh2l8fqgutB8tX06yF3srgPNeoTiGeMnxQExQrFc8Eo0J%2BeHxHC%2Flyd1Ubu3%2F6n3OJxiQtgnTnQRzBwp7t6meRUVervE2sPvopYBy6dXwYbOK42rG3DxeJm8Xjw9Z7jD2%2F7QmjWj10SjUL8rlAmW%2BdPiGApoMdf3v2bPTW37FVB32KjAxyI3yjqmUd89mHMgP6dHOJQswqNkTIRPWecO6uVohcX5%2FhhLoXLCPNbBPpY1fGVzhQupfxkrsdvHuWCJKg8cGT86tYrrij7g6nYAlU6vFwABc5Zpafnklzuhur%2B45UTo01KqUrnz9xDa7zs8URYx3KfaBSJkocLw6OGa2WnkEjmxtveO8dgFoVCo8r8NkEFlhn5aK6IdEiIXriKgrUTAyp8EnA8yLrWB0zPDysCOw2uT9jDd2T%2BM02j9GHdavNsRNGZiR6D0yIbKIvtQbAfH%2FxQzIORJ6je7tWCsgrq5qmrg3bxU9l4lk43nbTr7y5StcHhy6E6bCu068kOsJgvDCl3rloKvEJ%2FjbQ%2FeDwoJNZ2W2nX9wvUMhX%2B%2B9cuPbW1DuHPqE9SBdP%2F8qK4GkzLOMObo4s0GOqUBPFaLz2fOX7WrLKxb2qUDVN3bh1AQJFHuBVsg4WP6hJtV%2FQw6UNggETZcoKJI17ZcfNCEtqsp1akDu6kobT89Ir6xgjD0zh8LSC07Bx3qI1SbACI%2FKXaZTzLsJjmpsJFF3MhfVpkLTJp458sSTp7sfMaIAv0MRHAmjAljPE86U5BzuG0JsBMDlUhu%2BWoCmFjSUQeGr3xWu7B3rOhdquN%2BuDBwGEpw&X-Amz-Signature=dad76333aa3f10187a0140ac76e70f6da020ff5f011aee7511042f6d0bd0b8aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZBTLHWB%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCxpz0o9EXal2EdU4kSeIkB98ma8NDv8B0smwWVbg7d0QIgTxkHXepQmi6x6RmLZQQyKLFApBmfhw7ga7ouHhwH%2B9gqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOmFEY9kc%2FxheU%2FqircA9epxgK1AOehinUJBx5PpWDRz5rSB1BJEF%2B5tsL9DJwhmwBNcyPpLLp3Yh2l8fqgutB8tX06yF3srgPNeoTiGeMnxQExQrFc8Eo0J%2BeHxHC%2Flyd1Ubu3%2F6n3OJxiQtgnTnQRzBwp7t6meRUVervE2sPvopYBy6dXwYbOK42rG3DxeJm8Xjw9Z7jD2%2F7QmjWj10SjUL8rlAmW%2BdPiGApoMdf3v2bPTW37FVB32KjAxyI3yjqmUd89mHMgP6dHOJQswqNkTIRPWecO6uVohcX5%2FhhLoXLCPNbBPpY1fGVzhQupfxkrsdvHuWCJKg8cGT86tYrrij7g6nYAlU6vFwABc5Zpafnklzuhur%2B45UTo01KqUrnz9xDa7zs8URYx3KfaBSJkocLw6OGa2WnkEjmxtveO8dgFoVCo8r8NkEFlhn5aK6IdEiIXriKgrUTAyp8EnA8yLrWB0zPDysCOw2uT9jDd2T%2BM02j9GHdavNsRNGZiR6D0yIbKIvtQbAfH%2FxQzIORJ6je7tWCsgrq5qmrg3bxU9l4lk43nbTr7y5StcHhy6E6bCu068kOsJgvDCl3rloKvEJ%2FjbQ%2FeDwoJNZ2W2nX9wvUMhX%2B%2B9cuPbW1DuHPqE9SBdP%2F8qK4GkzLOMObo4s0GOqUBPFaLz2fOX7WrLKxb2qUDVN3bh1AQJFHuBVsg4WP6hJtV%2FQw6UNggETZcoKJI17ZcfNCEtqsp1akDu6kobT89Ir6xgjD0zh8LSC07Bx3qI1SbACI%2FKXaZTzLsJjmpsJFF3MhfVpkLTJp458sSTp7sfMaIAv0MRHAmjAljPE86U5BzuG0JsBMDlUhu%2BWoCmFjSUQeGr3xWu7B3rOhdquN%2BuDBwGEpw&X-Amz-Signature=f7c3e39c85278d9890ab43d45a9b40dd2f2d668673ec9caa4ac58585c563590c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZBTLHWB%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCxpz0o9EXal2EdU4kSeIkB98ma8NDv8B0smwWVbg7d0QIgTxkHXepQmi6x6RmLZQQyKLFApBmfhw7ga7ouHhwH%2B9gqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOmFEY9kc%2FxheU%2FqircA9epxgK1AOehinUJBx5PpWDRz5rSB1BJEF%2B5tsL9DJwhmwBNcyPpLLp3Yh2l8fqgutB8tX06yF3srgPNeoTiGeMnxQExQrFc8Eo0J%2BeHxHC%2Flyd1Ubu3%2F6n3OJxiQtgnTnQRzBwp7t6meRUVervE2sPvopYBy6dXwYbOK42rG3DxeJm8Xjw9Z7jD2%2F7QmjWj10SjUL8rlAmW%2BdPiGApoMdf3v2bPTW37FVB32KjAxyI3yjqmUd89mHMgP6dHOJQswqNkTIRPWecO6uVohcX5%2FhhLoXLCPNbBPpY1fGVzhQupfxkrsdvHuWCJKg8cGT86tYrrij7g6nYAlU6vFwABc5Zpafnklzuhur%2B45UTo01KqUrnz9xDa7zs8URYx3KfaBSJkocLw6OGa2WnkEjmxtveO8dgFoVCo8r8NkEFlhn5aK6IdEiIXriKgrUTAyp8EnA8yLrWB0zPDysCOw2uT9jDd2T%2BM02j9GHdavNsRNGZiR6D0yIbKIvtQbAfH%2FxQzIORJ6je7tWCsgrq5qmrg3bxU9l4lk43nbTr7y5StcHhy6E6bCu068kOsJgvDCl3rloKvEJ%2FjbQ%2FeDwoJNZ2W2nX9wvUMhX%2B%2B9cuPbW1DuHPqE9SBdP%2F8qK4GkzLOMObo4s0GOqUBPFaLz2fOX7WrLKxb2qUDVN3bh1AQJFHuBVsg4WP6hJtV%2FQw6UNggETZcoKJI17ZcfNCEtqsp1akDu6kobT89Ir6xgjD0zh8LSC07Bx3qI1SbACI%2FKXaZTzLsJjmpsJFF3MhfVpkLTJp458sSTp7sfMaIAv0MRHAmjAljPE86U5BzuG0JsBMDlUhu%2BWoCmFjSUQeGr3xWu7B3rOhdquN%2BuDBwGEpw&X-Amz-Signature=dfa9ae6bc89091cf7494fffea966f26a01b1996849853679859157d2fc26742f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZBTLHWB%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCxpz0o9EXal2EdU4kSeIkB98ma8NDv8B0smwWVbg7d0QIgTxkHXepQmi6x6RmLZQQyKLFApBmfhw7ga7ouHhwH%2B9gqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOmFEY9kc%2FxheU%2FqircA9epxgK1AOehinUJBx5PpWDRz5rSB1BJEF%2B5tsL9DJwhmwBNcyPpLLp3Yh2l8fqgutB8tX06yF3srgPNeoTiGeMnxQExQrFc8Eo0J%2BeHxHC%2Flyd1Ubu3%2F6n3OJxiQtgnTnQRzBwp7t6meRUVervE2sPvopYBy6dXwYbOK42rG3DxeJm8Xjw9Z7jD2%2F7QmjWj10SjUL8rlAmW%2BdPiGApoMdf3v2bPTW37FVB32KjAxyI3yjqmUd89mHMgP6dHOJQswqNkTIRPWecO6uVohcX5%2FhhLoXLCPNbBPpY1fGVzhQupfxkrsdvHuWCJKg8cGT86tYrrij7g6nYAlU6vFwABc5Zpafnklzuhur%2B45UTo01KqUrnz9xDa7zs8URYx3KfaBSJkocLw6OGa2WnkEjmxtveO8dgFoVCo8r8NkEFlhn5aK6IdEiIXriKgrUTAyp8EnA8yLrWB0zPDysCOw2uT9jDd2T%2BM02j9GHdavNsRNGZiR6D0yIbKIvtQbAfH%2FxQzIORJ6je7tWCsgrq5qmrg3bxU9l4lk43nbTr7y5StcHhy6E6bCu068kOsJgvDCl3rloKvEJ%2FjbQ%2FeDwoJNZ2W2nX9wvUMhX%2B%2B9cuPbW1DuHPqE9SBdP%2F8qK4GkzLOMObo4s0GOqUBPFaLz2fOX7WrLKxb2qUDVN3bh1AQJFHuBVsg4WP6hJtV%2FQw6UNggETZcoKJI17ZcfNCEtqsp1akDu6kobT89Ir6xgjD0zh8LSC07Bx3qI1SbACI%2FKXaZTzLsJjmpsJFF3MhfVpkLTJp458sSTp7sfMaIAv0MRHAmjAljPE86U5BzuG0JsBMDlUhu%2BWoCmFjSUQeGr3xWu7B3rOhdquN%2BuDBwGEpw&X-Amz-Signature=f33192d43f32c157bce1aa161c502ab6cdc2d0e03e684e4768fb9454eddc5c9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZBTLHWB%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCxpz0o9EXal2EdU4kSeIkB98ma8NDv8B0smwWVbg7d0QIgTxkHXepQmi6x6RmLZQQyKLFApBmfhw7ga7ouHhwH%2B9gqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOmFEY9kc%2FxheU%2FqircA9epxgK1AOehinUJBx5PpWDRz5rSB1BJEF%2B5tsL9DJwhmwBNcyPpLLp3Yh2l8fqgutB8tX06yF3srgPNeoTiGeMnxQExQrFc8Eo0J%2BeHxHC%2Flyd1Ubu3%2F6n3OJxiQtgnTnQRzBwp7t6meRUVervE2sPvopYBy6dXwYbOK42rG3DxeJm8Xjw9Z7jD2%2F7QmjWj10SjUL8rlAmW%2BdPiGApoMdf3v2bPTW37FVB32KjAxyI3yjqmUd89mHMgP6dHOJQswqNkTIRPWecO6uVohcX5%2FhhLoXLCPNbBPpY1fGVzhQupfxkrsdvHuWCJKg8cGT86tYrrij7g6nYAlU6vFwABc5Zpafnklzuhur%2B45UTo01KqUrnz9xDa7zs8URYx3KfaBSJkocLw6OGa2WnkEjmxtveO8dgFoVCo8r8NkEFlhn5aK6IdEiIXriKgrUTAyp8EnA8yLrWB0zPDysCOw2uT9jDd2T%2BM02j9GHdavNsRNGZiR6D0yIbKIvtQbAfH%2FxQzIORJ6je7tWCsgrq5qmrg3bxU9l4lk43nbTr7y5StcHhy6E6bCu068kOsJgvDCl3rloKvEJ%2FjbQ%2FeDwoJNZ2W2nX9wvUMhX%2B%2B9cuPbW1DuHPqE9SBdP%2F8qK4GkzLOMObo4s0GOqUBPFaLz2fOX7WrLKxb2qUDVN3bh1AQJFHuBVsg4WP6hJtV%2FQw6UNggETZcoKJI17ZcfNCEtqsp1akDu6kobT89Ir6xgjD0zh8LSC07Bx3qI1SbACI%2FKXaZTzLsJjmpsJFF3MhfVpkLTJp458sSTp7sfMaIAv0MRHAmjAljPE86U5BzuG0JsBMDlUhu%2BWoCmFjSUQeGr3xWu7B3rOhdquN%2BuDBwGEpw&X-Amz-Signature=029af4d39e601af6ab3f96d56daf698bd1a9dc7c708ff36d11f416b0f36a56dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


