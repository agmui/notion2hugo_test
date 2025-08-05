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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMLIEOXP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFuAGRrgtOkyFUhipLxV24vlu2RqePZrrK4q1zVL9YMCAiEAvROzXcOuPmbnlvnduWghV4HXNtzV1X7Jq3D4uJvbNKYq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDnV01asEJI55MtFgyrcA2Al%2BGUO%2F%2Ft6iAN9ot4OKdbpLQkpwTy5McG8rtVJmel0Xu9zc26hVIQvfZLMxujY3oMN2WDQIlcLuED3jTCmPfnjoVZgcMc4aZzWEKanyj8yqTBYhpq%2BQJJficWpPnOx%2FXIxSiVkEkp0uAYUGnwCNOYdypXBbkEeHItk4F%2B8BZApkzOHjLczrCpYfZ0luo46BzMQJQ27%2FViUz9qVfn9tPIxoZds5wGT0X3mqaG%2FbkIDqL6pDXeDblv0q2wVQdU26G2HIly%2BmymbrDBQy8trdVUS2fmlmhnlEZPCcTMCG8z%2F9Lb%2Fus8PKh9yOpMdC9%2BNvbGN8JODL678858EVF7lmRfFdph2aq21XDgv1OVPy52EB9ahKFJU6ePcX2bbCM93FosFiZu%2FiodTtSKZ7udqWyW2QL8aWTbSWU30IC3Uk9BPNMUqyyq4IitcTlfelYgL%2FvxiLA7Yu3fB0bK08FlhvtA%2BdP4J5DiWOoP%2F3GypiHnvc7kZgyqsxODqjchYIvOXHllmsIzWyHSza%2FJGr%2BM6INnDTVTuqL4gAWX1X4Advad5Kx%2BNj6jn3aQ2vJLiguutJZ0GK02Ecb5%2Fm6YYrCgiXzU18yPmeb94MNXuxklvZ%2FP8YueEc9r8MnhgLV79%2BMK3MyMQGOqUBNEALXGi3R8wCkqt%2FoGZRsRw88scnEne5evqvTKwpzdjvC0jFMkyok5r2N9dmpKH4IK17qSqHqbxwuHsPIU0t5IXRJstiTjRCQY2uCnn5VU1AHyn0XYC10HEhimWaELOPW0jcLHEZLqhgYDS3WvCDKwGztJ15BYNirmp6x1SMCkkACMMSX6pidvk%2F%2Fks3RgEy5td4ufxNmRyZO0qMHYetna3wBAPK&X-Amz-Signature=93f741243dc7a36be38cc0526756bbeff61494aca82c3d10406bf64ae770f2dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMLIEOXP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFuAGRrgtOkyFUhipLxV24vlu2RqePZrrK4q1zVL9YMCAiEAvROzXcOuPmbnlvnduWghV4HXNtzV1X7Jq3D4uJvbNKYq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDnV01asEJI55MtFgyrcA2Al%2BGUO%2F%2Ft6iAN9ot4OKdbpLQkpwTy5McG8rtVJmel0Xu9zc26hVIQvfZLMxujY3oMN2WDQIlcLuED3jTCmPfnjoVZgcMc4aZzWEKanyj8yqTBYhpq%2BQJJficWpPnOx%2FXIxSiVkEkp0uAYUGnwCNOYdypXBbkEeHItk4F%2B8BZApkzOHjLczrCpYfZ0luo46BzMQJQ27%2FViUz9qVfn9tPIxoZds5wGT0X3mqaG%2FbkIDqL6pDXeDblv0q2wVQdU26G2HIly%2BmymbrDBQy8trdVUS2fmlmhnlEZPCcTMCG8z%2F9Lb%2Fus8PKh9yOpMdC9%2BNvbGN8JODL678858EVF7lmRfFdph2aq21XDgv1OVPy52EB9ahKFJU6ePcX2bbCM93FosFiZu%2FiodTtSKZ7udqWyW2QL8aWTbSWU30IC3Uk9BPNMUqyyq4IitcTlfelYgL%2FvxiLA7Yu3fB0bK08FlhvtA%2BdP4J5DiWOoP%2F3GypiHnvc7kZgyqsxODqjchYIvOXHllmsIzWyHSza%2FJGr%2BM6INnDTVTuqL4gAWX1X4Advad5Kx%2BNj6jn3aQ2vJLiguutJZ0GK02Ecb5%2Fm6YYrCgiXzU18yPmeb94MNXuxklvZ%2FP8YueEc9r8MnhgLV79%2BMK3MyMQGOqUBNEALXGi3R8wCkqt%2FoGZRsRw88scnEne5evqvTKwpzdjvC0jFMkyok5r2N9dmpKH4IK17qSqHqbxwuHsPIU0t5IXRJstiTjRCQY2uCnn5VU1AHyn0XYC10HEhimWaELOPW0jcLHEZLqhgYDS3WvCDKwGztJ15BYNirmp6x1SMCkkACMMSX6pidvk%2F%2Fks3RgEy5td4ufxNmRyZO0qMHYetna3wBAPK&X-Amz-Signature=1aa11aebc35f8c582dc6e50d7f696da598a1be46230edace0b57a2154955e2ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMLIEOXP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFuAGRrgtOkyFUhipLxV24vlu2RqePZrrK4q1zVL9YMCAiEAvROzXcOuPmbnlvnduWghV4HXNtzV1X7Jq3D4uJvbNKYq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDnV01asEJI55MtFgyrcA2Al%2BGUO%2F%2Ft6iAN9ot4OKdbpLQkpwTy5McG8rtVJmel0Xu9zc26hVIQvfZLMxujY3oMN2WDQIlcLuED3jTCmPfnjoVZgcMc4aZzWEKanyj8yqTBYhpq%2BQJJficWpPnOx%2FXIxSiVkEkp0uAYUGnwCNOYdypXBbkEeHItk4F%2B8BZApkzOHjLczrCpYfZ0luo46BzMQJQ27%2FViUz9qVfn9tPIxoZds5wGT0X3mqaG%2FbkIDqL6pDXeDblv0q2wVQdU26G2HIly%2BmymbrDBQy8trdVUS2fmlmhnlEZPCcTMCG8z%2F9Lb%2Fus8PKh9yOpMdC9%2BNvbGN8JODL678858EVF7lmRfFdph2aq21XDgv1OVPy52EB9ahKFJU6ePcX2bbCM93FosFiZu%2FiodTtSKZ7udqWyW2QL8aWTbSWU30IC3Uk9BPNMUqyyq4IitcTlfelYgL%2FvxiLA7Yu3fB0bK08FlhvtA%2BdP4J5DiWOoP%2F3GypiHnvc7kZgyqsxODqjchYIvOXHllmsIzWyHSza%2FJGr%2BM6INnDTVTuqL4gAWX1X4Advad5Kx%2BNj6jn3aQ2vJLiguutJZ0GK02Ecb5%2Fm6YYrCgiXzU18yPmeb94MNXuxklvZ%2FP8YueEc9r8MnhgLV79%2BMK3MyMQGOqUBNEALXGi3R8wCkqt%2FoGZRsRw88scnEne5evqvTKwpzdjvC0jFMkyok5r2N9dmpKH4IK17qSqHqbxwuHsPIU0t5IXRJstiTjRCQY2uCnn5VU1AHyn0XYC10HEhimWaELOPW0jcLHEZLqhgYDS3WvCDKwGztJ15BYNirmp6x1SMCkkACMMSX6pidvk%2F%2Fks3RgEy5td4ufxNmRyZO0qMHYetna3wBAPK&X-Amz-Signature=757c8e0ea24ed4eb6b2eedc993d2a1d423605f2c1d11a21b9078a3312c3aea2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMLIEOXP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFuAGRrgtOkyFUhipLxV24vlu2RqePZrrK4q1zVL9YMCAiEAvROzXcOuPmbnlvnduWghV4HXNtzV1X7Jq3D4uJvbNKYq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDnV01asEJI55MtFgyrcA2Al%2BGUO%2F%2Ft6iAN9ot4OKdbpLQkpwTy5McG8rtVJmel0Xu9zc26hVIQvfZLMxujY3oMN2WDQIlcLuED3jTCmPfnjoVZgcMc4aZzWEKanyj8yqTBYhpq%2BQJJficWpPnOx%2FXIxSiVkEkp0uAYUGnwCNOYdypXBbkEeHItk4F%2B8BZApkzOHjLczrCpYfZ0luo46BzMQJQ27%2FViUz9qVfn9tPIxoZds5wGT0X3mqaG%2FbkIDqL6pDXeDblv0q2wVQdU26G2HIly%2BmymbrDBQy8trdVUS2fmlmhnlEZPCcTMCG8z%2F9Lb%2Fus8PKh9yOpMdC9%2BNvbGN8JODL678858EVF7lmRfFdph2aq21XDgv1OVPy52EB9ahKFJU6ePcX2bbCM93FosFiZu%2FiodTtSKZ7udqWyW2QL8aWTbSWU30IC3Uk9BPNMUqyyq4IitcTlfelYgL%2FvxiLA7Yu3fB0bK08FlhvtA%2BdP4J5DiWOoP%2F3GypiHnvc7kZgyqsxODqjchYIvOXHllmsIzWyHSza%2FJGr%2BM6INnDTVTuqL4gAWX1X4Advad5Kx%2BNj6jn3aQ2vJLiguutJZ0GK02Ecb5%2Fm6YYrCgiXzU18yPmeb94MNXuxklvZ%2FP8YueEc9r8MnhgLV79%2BMK3MyMQGOqUBNEALXGi3R8wCkqt%2FoGZRsRw88scnEne5evqvTKwpzdjvC0jFMkyok5r2N9dmpKH4IK17qSqHqbxwuHsPIU0t5IXRJstiTjRCQY2uCnn5VU1AHyn0XYC10HEhimWaELOPW0jcLHEZLqhgYDS3WvCDKwGztJ15BYNirmp6x1SMCkkACMMSX6pidvk%2F%2Fks3RgEy5td4ufxNmRyZO0qMHYetna3wBAPK&X-Amz-Signature=3d6188681fde684fab8daba4df2f4f08c0cf1737490bdcf800b52c34a4292721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647USOBC2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIG6OWd15U1oXsLt2wGC8C99oj%2F34iMSYApRwJzIu%2BCkLAiATWk2LUQN7GfzvDc85sqGK%2Fov97L7GAXGFqjZH2dMi8Sr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMi3oPDeB5X8EjKTh1KtwDQkvtLh9fbH9C19pZkEjzfVGoiDGnkfz9K0%2FGAoDzUZwTWn2srtcDFmUxgWbkoxLSE1%2FCihkJq%2FXS3YN2M9RobNuN7P6zLSTwUyK0shTVnW%2FsV7chwYI32VuifAwPpSEwBWTiZ1eBWmDZxg%2B%2F%2FSBmLl0fZn%2Fq%2FyS3Y7QMddsuF2D3vix623P9RlrD2whFF98hFzCo5SpeFmo%2BpgcP7RKtg8cmwbkW3jlYRlp8cXTtTRv%2BriQt%2BGrcmLMPShR2EFAFFW7q%2BSt6C1rMbqWElsjMu85HbOZ5NKt%2F2AGUpWaXSbtiGsp3n9QL5Rqnl%2F2W5MjtkNJMzrkXhFfVtdEhzjR16o0%2FjWlK0vXZJstZeH8yh3SjkO8tfsNTSwYkE7v36FASESozmYwy%2FHzFN2Zu1yLcn8maWxKZrb7YopezpnDYEAWp2gOXjv5sTvEwTK0r6uJ2dn%2BhkHjekRVXdRGQfRH06jWJGhglMC815Lo6sYXMZ4kL0C1DcHByil3IjXiIB62fIUx4K256RHYc9pMMnCu4oT7MiudbQP7yAXLdZGrvZBH0NgJCkPkBZmfe5fIheRdBD%2FmkKW8nM3HzoDiRe1XwNQXDpz3nbpmzaRtRetU2ThFOEV4TkP3pnJ4Tmp8w2czIxAY6pgH3G%2BX7Brz6iO2wekkJnoykIQEiTGP%2BvD%2F%2FQrO36p9x9YfcD0GRKvfvAWyLjmH%2FAeEKp0U%2BD4KfRh%2BzAz7fnnvAYcv356rtXgquNciuMMjOymo%2F32pPkJkiBSBlVAll3KlPi9NLjKgPCJSTI11WgTUZBN9%2BKt7rn9alH3iLaIyx0R0LavPmhF4IxeT8Q6C63njLdFa74aVhnls1OTNHW7mwMy4NzUr4&X-Amz-Signature=2426b05c0d77a55c67049531d32351a141369f0a1c93dc0af015cb42808eb1b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMLIEOXP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFuAGRrgtOkyFUhipLxV24vlu2RqePZrrK4q1zVL9YMCAiEAvROzXcOuPmbnlvnduWghV4HXNtzV1X7Jq3D4uJvbNKYq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDnV01asEJI55MtFgyrcA2Al%2BGUO%2F%2Ft6iAN9ot4OKdbpLQkpwTy5McG8rtVJmel0Xu9zc26hVIQvfZLMxujY3oMN2WDQIlcLuED3jTCmPfnjoVZgcMc4aZzWEKanyj8yqTBYhpq%2BQJJficWpPnOx%2FXIxSiVkEkp0uAYUGnwCNOYdypXBbkEeHItk4F%2B8BZApkzOHjLczrCpYfZ0luo46BzMQJQ27%2FViUz9qVfn9tPIxoZds5wGT0X3mqaG%2FbkIDqL6pDXeDblv0q2wVQdU26G2HIly%2BmymbrDBQy8trdVUS2fmlmhnlEZPCcTMCG8z%2F9Lb%2Fus8PKh9yOpMdC9%2BNvbGN8JODL678858EVF7lmRfFdph2aq21XDgv1OVPy52EB9ahKFJU6ePcX2bbCM93FosFiZu%2FiodTtSKZ7udqWyW2QL8aWTbSWU30IC3Uk9BPNMUqyyq4IitcTlfelYgL%2FvxiLA7Yu3fB0bK08FlhvtA%2BdP4J5DiWOoP%2F3GypiHnvc7kZgyqsxODqjchYIvOXHllmsIzWyHSza%2FJGr%2BM6INnDTVTuqL4gAWX1X4Advad5Kx%2BNj6jn3aQ2vJLiguutJZ0GK02Ecb5%2Fm6YYrCgiXzU18yPmeb94MNXuxklvZ%2FP8YueEc9r8MnhgLV79%2BMK3MyMQGOqUBNEALXGi3R8wCkqt%2FoGZRsRw88scnEne5evqvTKwpzdjvC0jFMkyok5r2N9dmpKH4IK17qSqHqbxwuHsPIU0t5IXRJstiTjRCQY2uCnn5VU1AHyn0XYC10HEhimWaELOPW0jcLHEZLqhgYDS3WvCDKwGztJ15BYNirmp6x1SMCkkACMMSX6pidvk%2F%2Fks3RgEy5td4ufxNmRyZO0qMHYetna3wBAPK&X-Amz-Signature=1052678b2c0146bf272bf4faa433bcbf5dc32b1a4fdc857255ec533163a19d89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMLIEOXP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFuAGRrgtOkyFUhipLxV24vlu2RqePZrrK4q1zVL9YMCAiEAvROzXcOuPmbnlvnduWghV4HXNtzV1X7Jq3D4uJvbNKYq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDnV01asEJI55MtFgyrcA2Al%2BGUO%2F%2Ft6iAN9ot4OKdbpLQkpwTy5McG8rtVJmel0Xu9zc26hVIQvfZLMxujY3oMN2WDQIlcLuED3jTCmPfnjoVZgcMc4aZzWEKanyj8yqTBYhpq%2BQJJficWpPnOx%2FXIxSiVkEkp0uAYUGnwCNOYdypXBbkEeHItk4F%2B8BZApkzOHjLczrCpYfZ0luo46BzMQJQ27%2FViUz9qVfn9tPIxoZds5wGT0X3mqaG%2FbkIDqL6pDXeDblv0q2wVQdU26G2HIly%2BmymbrDBQy8trdVUS2fmlmhnlEZPCcTMCG8z%2F9Lb%2Fus8PKh9yOpMdC9%2BNvbGN8JODL678858EVF7lmRfFdph2aq21XDgv1OVPy52EB9ahKFJU6ePcX2bbCM93FosFiZu%2FiodTtSKZ7udqWyW2QL8aWTbSWU30IC3Uk9BPNMUqyyq4IitcTlfelYgL%2FvxiLA7Yu3fB0bK08FlhvtA%2BdP4J5DiWOoP%2F3GypiHnvc7kZgyqsxODqjchYIvOXHllmsIzWyHSza%2FJGr%2BM6INnDTVTuqL4gAWX1X4Advad5Kx%2BNj6jn3aQ2vJLiguutJZ0GK02Ecb5%2Fm6YYrCgiXzU18yPmeb94MNXuxklvZ%2FP8YueEc9r8MnhgLV79%2BMK3MyMQGOqUBNEALXGi3R8wCkqt%2FoGZRsRw88scnEne5evqvTKwpzdjvC0jFMkyok5r2N9dmpKH4IK17qSqHqbxwuHsPIU0t5IXRJstiTjRCQY2uCnn5VU1AHyn0XYC10HEhimWaELOPW0jcLHEZLqhgYDS3WvCDKwGztJ15BYNirmp6x1SMCkkACMMSX6pidvk%2F%2Fks3RgEy5td4ufxNmRyZO0qMHYetna3wBAPK&X-Amz-Signature=9cb3a601245c8d6ccd31cfaf1b09442f7d2bc3525ec78c6ca684299dc9c7eadc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMLIEOXP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFuAGRrgtOkyFUhipLxV24vlu2RqePZrrK4q1zVL9YMCAiEAvROzXcOuPmbnlvnduWghV4HXNtzV1X7Jq3D4uJvbNKYq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDnV01asEJI55MtFgyrcA2Al%2BGUO%2F%2Ft6iAN9ot4OKdbpLQkpwTy5McG8rtVJmel0Xu9zc26hVIQvfZLMxujY3oMN2WDQIlcLuED3jTCmPfnjoVZgcMc4aZzWEKanyj8yqTBYhpq%2BQJJficWpPnOx%2FXIxSiVkEkp0uAYUGnwCNOYdypXBbkEeHItk4F%2B8BZApkzOHjLczrCpYfZ0luo46BzMQJQ27%2FViUz9qVfn9tPIxoZds5wGT0X3mqaG%2FbkIDqL6pDXeDblv0q2wVQdU26G2HIly%2BmymbrDBQy8trdVUS2fmlmhnlEZPCcTMCG8z%2F9Lb%2Fus8PKh9yOpMdC9%2BNvbGN8JODL678858EVF7lmRfFdph2aq21XDgv1OVPy52EB9ahKFJU6ePcX2bbCM93FosFiZu%2FiodTtSKZ7udqWyW2QL8aWTbSWU30IC3Uk9BPNMUqyyq4IitcTlfelYgL%2FvxiLA7Yu3fB0bK08FlhvtA%2BdP4J5DiWOoP%2F3GypiHnvc7kZgyqsxODqjchYIvOXHllmsIzWyHSza%2FJGr%2BM6INnDTVTuqL4gAWX1X4Advad5Kx%2BNj6jn3aQ2vJLiguutJZ0GK02Ecb5%2Fm6YYrCgiXzU18yPmeb94MNXuxklvZ%2FP8YueEc9r8MnhgLV79%2BMK3MyMQGOqUBNEALXGi3R8wCkqt%2FoGZRsRw88scnEne5evqvTKwpzdjvC0jFMkyok5r2N9dmpKH4IK17qSqHqbxwuHsPIU0t5IXRJstiTjRCQY2uCnn5VU1AHyn0XYC10HEhimWaELOPW0jcLHEZLqhgYDS3WvCDKwGztJ15BYNirmp6x1SMCkkACMMSX6pidvk%2F%2Fks3RgEy5td4ufxNmRyZO0qMHYetna3wBAPK&X-Amz-Signature=cd3c639d53262ec9f3fbfefc1c27582432ec96e6927ccf8b0d68d4e5e6f39e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMLIEOXP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFuAGRrgtOkyFUhipLxV24vlu2RqePZrrK4q1zVL9YMCAiEAvROzXcOuPmbnlvnduWghV4HXNtzV1X7Jq3D4uJvbNKYq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDnV01asEJI55MtFgyrcA2Al%2BGUO%2F%2Ft6iAN9ot4OKdbpLQkpwTy5McG8rtVJmel0Xu9zc26hVIQvfZLMxujY3oMN2WDQIlcLuED3jTCmPfnjoVZgcMc4aZzWEKanyj8yqTBYhpq%2BQJJficWpPnOx%2FXIxSiVkEkp0uAYUGnwCNOYdypXBbkEeHItk4F%2B8BZApkzOHjLczrCpYfZ0luo46BzMQJQ27%2FViUz9qVfn9tPIxoZds5wGT0X3mqaG%2FbkIDqL6pDXeDblv0q2wVQdU26G2HIly%2BmymbrDBQy8trdVUS2fmlmhnlEZPCcTMCG8z%2F9Lb%2Fus8PKh9yOpMdC9%2BNvbGN8JODL678858EVF7lmRfFdph2aq21XDgv1OVPy52EB9ahKFJU6ePcX2bbCM93FosFiZu%2FiodTtSKZ7udqWyW2QL8aWTbSWU30IC3Uk9BPNMUqyyq4IitcTlfelYgL%2FvxiLA7Yu3fB0bK08FlhvtA%2BdP4J5DiWOoP%2F3GypiHnvc7kZgyqsxODqjchYIvOXHllmsIzWyHSza%2FJGr%2BM6INnDTVTuqL4gAWX1X4Advad5Kx%2BNj6jn3aQ2vJLiguutJZ0GK02Ecb5%2Fm6YYrCgiXzU18yPmeb94MNXuxklvZ%2FP8YueEc9r8MnhgLV79%2BMK3MyMQGOqUBNEALXGi3R8wCkqt%2FoGZRsRw88scnEne5evqvTKwpzdjvC0jFMkyok5r2N9dmpKH4IK17qSqHqbxwuHsPIU0t5IXRJstiTjRCQY2uCnn5VU1AHyn0XYC10HEhimWaELOPW0jcLHEZLqhgYDS3WvCDKwGztJ15BYNirmp6x1SMCkkACMMSX6pidvk%2F%2Fks3RgEy5td4ufxNmRyZO0qMHYetna3wBAPK&X-Amz-Signature=7e70483784daf5586a38b15af86e413c7ffd0433a306aef550f4671d42998a12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMLIEOXP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFuAGRrgtOkyFUhipLxV24vlu2RqePZrrK4q1zVL9YMCAiEAvROzXcOuPmbnlvnduWghV4HXNtzV1X7Jq3D4uJvbNKYq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDnV01asEJI55MtFgyrcA2Al%2BGUO%2F%2Ft6iAN9ot4OKdbpLQkpwTy5McG8rtVJmel0Xu9zc26hVIQvfZLMxujY3oMN2WDQIlcLuED3jTCmPfnjoVZgcMc4aZzWEKanyj8yqTBYhpq%2BQJJficWpPnOx%2FXIxSiVkEkp0uAYUGnwCNOYdypXBbkEeHItk4F%2B8BZApkzOHjLczrCpYfZ0luo46BzMQJQ27%2FViUz9qVfn9tPIxoZds5wGT0X3mqaG%2FbkIDqL6pDXeDblv0q2wVQdU26G2HIly%2BmymbrDBQy8trdVUS2fmlmhnlEZPCcTMCG8z%2F9Lb%2Fus8PKh9yOpMdC9%2BNvbGN8JODL678858EVF7lmRfFdph2aq21XDgv1OVPy52EB9ahKFJU6ePcX2bbCM93FosFiZu%2FiodTtSKZ7udqWyW2QL8aWTbSWU30IC3Uk9BPNMUqyyq4IitcTlfelYgL%2FvxiLA7Yu3fB0bK08FlhvtA%2BdP4J5DiWOoP%2F3GypiHnvc7kZgyqsxODqjchYIvOXHllmsIzWyHSza%2FJGr%2BM6INnDTVTuqL4gAWX1X4Advad5Kx%2BNj6jn3aQ2vJLiguutJZ0GK02Ecb5%2Fm6YYrCgiXzU18yPmeb94MNXuxklvZ%2FP8YueEc9r8MnhgLV79%2BMK3MyMQGOqUBNEALXGi3R8wCkqt%2FoGZRsRw88scnEne5evqvTKwpzdjvC0jFMkyok5r2N9dmpKH4IK17qSqHqbxwuHsPIU0t5IXRJstiTjRCQY2uCnn5VU1AHyn0XYC10HEhimWaELOPW0jcLHEZLqhgYDS3WvCDKwGztJ15BYNirmp6x1SMCkkACMMSX6pidvk%2F%2Fks3RgEy5td4ufxNmRyZO0qMHYetna3wBAPK&X-Amz-Signature=fd0af859e9f5852cb7df4dd3820d2aa59d3799bd195b60d91f3fdb8850fd2d9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMLIEOXP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFuAGRrgtOkyFUhipLxV24vlu2RqePZrrK4q1zVL9YMCAiEAvROzXcOuPmbnlvnduWghV4HXNtzV1X7Jq3D4uJvbNKYq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDnV01asEJI55MtFgyrcA2Al%2BGUO%2F%2Ft6iAN9ot4OKdbpLQkpwTy5McG8rtVJmel0Xu9zc26hVIQvfZLMxujY3oMN2WDQIlcLuED3jTCmPfnjoVZgcMc4aZzWEKanyj8yqTBYhpq%2BQJJficWpPnOx%2FXIxSiVkEkp0uAYUGnwCNOYdypXBbkEeHItk4F%2B8BZApkzOHjLczrCpYfZ0luo46BzMQJQ27%2FViUz9qVfn9tPIxoZds5wGT0X3mqaG%2FbkIDqL6pDXeDblv0q2wVQdU26G2HIly%2BmymbrDBQy8trdVUS2fmlmhnlEZPCcTMCG8z%2F9Lb%2Fus8PKh9yOpMdC9%2BNvbGN8JODL678858EVF7lmRfFdph2aq21XDgv1OVPy52EB9ahKFJU6ePcX2bbCM93FosFiZu%2FiodTtSKZ7udqWyW2QL8aWTbSWU30IC3Uk9BPNMUqyyq4IitcTlfelYgL%2FvxiLA7Yu3fB0bK08FlhvtA%2BdP4J5DiWOoP%2F3GypiHnvc7kZgyqsxODqjchYIvOXHllmsIzWyHSza%2FJGr%2BM6INnDTVTuqL4gAWX1X4Advad5Kx%2BNj6jn3aQ2vJLiguutJZ0GK02Ecb5%2Fm6YYrCgiXzU18yPmeb94MNXuxklvZ%2FP8YueEc9r8MnhgLV79%2BMK3MyMQGOqUBNEALXGi3R8wCkqt%2FoGZRsRw88scnEne5evqvTKwpzdjvC0jFMkyok5r2N9dmpKH4IK17qSqHqbxwuHsPIU0t5IXRJstiTjRCQY2uCnn5VU1AHyn0XYC10HEhimWaELOPW0jcLHEZLqhgYDS3WvCDKwGztJ15BYNirmp6x1SMCkkACMMSX6pidvk%2F%2Fks3RgEy5td4ufxNmRyZO0qMHYetna3wBAPK&X-Amz-Signature=88c9a724b363ec3906214a5a60f16adca283de26ec57e1bef1951c415bc64064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
