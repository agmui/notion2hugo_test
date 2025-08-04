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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYU3KDF%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIG3q9j6RQoYX7EcDKA4nLrQJuBvo0s00Ne02zJ0GgdqCAiEA6IobmWb1sNxDdMKTI%2F4azdlHF6qfiKyq9SByrVvbDcgq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDHNBuNi2EBtI6QWwoSrcAw7nSlTPFYsCSQ17XVD8N%2FxKB3kEiWMQje%2FZJKOfVCqvtKBkf8Z%2FBBSaI1hMyVTMOQMyMKEMNW3%2BlLsRMagA%2FxDMnwiKIWBxOq9SxqRuV%2BrW1%2FPLfaXPP%2BNexnnO0uYw7sVxQr1AP188T4FdLFPjjqkUyrH52%2B0byn%2FZb63npCktojvSUJjyzYxMdlslNYydXPB%2BjNQ82MVvQjPEjMghoNftnCbrKtrgKksElhZTdPbnYRYDebhkZhboGPNGXqXkSl6HvGuVRZ11c2mJyllhWq5Up17BO0KF4py3zua8a4299zNZCrva3oIeA6Ck4gW62XoIMTV6ina3uhqIazlg2E4NOFLu12jYbBF4SJzePjX9DOkOc8%2Fz8oRrMkbheph265z35g%2F9MPZP69%2BOh%2F1iik9IQYbg8sv82qKJeGtlwW759IOSkO6cXvn2z2tMClLmHTrUyQMilxv682n%2FdWt64LBibXyB1vkLPW4bGEOdGgrd57EjrEN67jkFW0zuzPL%2B3cMEWNCryWZ4DS9jtbFoulrVL4IDM6YvI%2BeWqz5xYkwEIcOmcVloUrL%2BHWUx9A%2Bn97mZD7eD70P%2FhmLwQzexd20kPZZTWVYGzZ7WNZIUuaHN8TSIcBmJqQ1MI1mjMI30xMQGOqUBdLxgT7EAjEvxOIMCPptaV1ZHsaac6lbQqSDf30r5tMRUcrMTIlioSfGU2esiONYmgaDinlSuyCXxo%2F%2ByGN0sEzVFM8zY0Tk3Bd%2B1wsVI10b2vqJct%2FC6RaGEbKM2ZAuLbNzmc6gmY26NnY5X%2B5FsZfXtP6KfmzCYTxu6GlXQwH1%2F6ZlBjOjzvBX6fM5EAuSLsFwNDpphIHUEdRZ0%2BigH0oS6jDki&X-Amz-Signature=0deccaa8cf0cf6f7f69f55cc1b955fc8cdd734f0d00ef4139dd4791042d0843f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYU3KDF%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIG3q9j6RQoYX7EcDKA4nLrQJuBvo0s00Ne02zJ0GgdqCAiEA6IobmWb1sNxDdMKTI%2F4azdlHF6qfiKyq9SByrVvbDcgq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDHNBuNi2EBtI6QWwoSrcAw7nSlTPFYsCSQ17XVD8N%2FxKB3kEiWMQje%2FZJKOfVCqvtKBkf8Z%2FBBSaI1hMyVTMOQMyMKEMNW3%2BlLsRMagA%2FxDMnwiKIWBxOq9SxqRuV%2BrW1%2FPLfaXPP%2BNexnnO0uYw7sVxQr1AP188T4FdLFPjjqkUyrH52%2B0byn%2FZb63npCktojvSUJjyzYxMdlslNYydXPB%2BjNQ82MVvQjPEjMghoNftnCbrKtrgKksElhZTdPbnYRYDebhkZhboGPNGXqXkSl6HvGuVRZ11c2mJyllhWq5Up17BO0KF4py3zua8a4299zNZCrva3oIeA6Ck4gW62XoIMTV6ina3uhqIazlg2E4NOFLu12jYbBF4SJzePjX9DOkOc8%2Fz8oRrMkbheph265z35g%2F9MPZP69%2BOh%2F1iik9IQYbg8sv82qKJeGtlwW759IOSkO6cXvn2z2tMClLmHTrUyQMilxv682n%2FdWt64LBibXyB1vkLPW4bGEOdGgrd57EjrEN67jkFW0zuzPL%2B3cMEWNCryWZ4DS9jtbFoulrVL4IDM6YvI%2BeWqz5xYkwEIcOmcVloUrL%2BHWUx9A%2Bn97mZD7eD70P%2FhmLwQzexd20kPZZTWVYGzZ7WNZIUuaHN8TSIcBmJqQ1MI1mjMI30xMQGOqUBdLxgT7EAjEvxOIMCPptaV1ZHsaac6lbQqSDf30r5tMRUcrMTIlioSfGU2esiONYmgaDinlSuyCXxo%2F%2ByGN0sEzVFM8zY0Tk3Bd%2B1wsVI10b2vqJct%2FC6RaGEbKM2ZAuLbNzmc6gmY26NnY5X%2B5FsZfXtP6KfmzCYTxu6GlXQwH1%2F6ZlBjOjzvBX6fM5EAuSLsFwNDpphIHUEdRZ0%2BigH0oS6jDki&X-Amz-Signature=98237964c36107c740c508450518664d16a0120415211d1ed11cd8468e42dee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYU3KDF%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIG3q9j6RQoYX7EcDKA4nLrQJuBvo0s00Ne02zJ0GgdqCAiEA6IobmWb1sNxDdMKTI%2F4azdlHF6qfiKyq9SByrVvbDcgq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDHNBuNi2EBtI6QWwoSrcAw7nSlTPFYsCSQ17XVD8N%2FxKB3kEiWMQje%2FZJKOfVCqvtKBkf8Z%2FBBSaI1hMyVTMOQMyMKEMNW3%2BlLsRMagA%2FxDMnwiKIWBxOq9SxqRuV%2BrW1%2FPLfaXPP%2BNexnnO0uYw7sVxQr1AP188T4FdLFPjjqkUyrH52%2B0byn%2FZb63npCktojvSUJjyzYxMdlslNYydXPB%2BjNQ82MVvQjPEjMghoNftnCbrKtrgKksElhZTdPbnYRYDebhkZhboGPNGXqXkSl6HvGuVRZ11c2mJyllhWq5Up17BO0KF4py3zua8a4299zNZCrva3oIeA6Ck4gW62XoIMTV6ina3uhqIazlg2E4NOFLu12jYbBF4SJzePjX9DOkOc8%2Fz8oRrMkbheph265z35g%2F9MPZP69%2BOh%2F1iik9IQYbg8sv82qKJeGtlwW759IOSkO6cXvn2z2tMClLmHTrUyQMilxv682n%2FdWt64LBibXyB1vkLPW4bGEOdGgrd57EjrEN67jkFW0zuzPL%2B3cMEWNCryWZ4DS9jtbFoulrVL4IDM6YvI%2BeWqz5xYkwEIcOmcVloUrL%2BHWUx9A%2Bn97mZD7eD70P%2FhmLwQzexd20kPZZTWVYGzZ7WNZIUuaHN8TSIcBmJqQ1MI1mjMI30xMQGOqUBdLxgT7EAjEvxOIMCPptaV1ZHsaac6lbQqSDf30r5tMRUcrMTIlioSfGU2esiONYmgaDinlSuyCXxo%2F%2ByGN0sEzVFM8zY0Tk3Bd%2B1wsVI10b2vqJct%2FC6RaGEbKM2ZAuLbNzmc6gmY26NnY5X%2B5FsZfXtP6KfmzCYTxu6GlXQwH1%2F6ZlBjOjzvBX6fM5EAuSLsFwNDpphIHUEdRZ0%2BigH0oS6jDki&X-Amz-Signature=9d02f65f9022680f186e6e6b57d9593a38fa05bd366167f8e3005bdd30451ac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYU3KDF%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIG3q9j6RQoYX7EcDKA4nLrQJuBvo0s00Ne02zJ0GgdqCAiEA6IobmWb1sNxDdMKTI%2F4azdlHF6qfiKyq9SByrVvbDcgq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDHNBuNi2EBtI6QWwoSrcAw7nSlTPFYsCSQ17XVD8N%2FxKB3kEiWMQje%2FZJKOfVCqvtKBkf8Z%2FBBSaI1hMyVTMOQMyMKEMNW3%2BlLsRMagA%2FxDMnwiKIWBxOq9SxqRuV%2BrW1%2FPLfaXPP%2BNexnnO0uYw7sVxQr1AP188T4FdLFPjjqkUyrH52%2B0byn%2FZb63npCktojvSUJjyzYxMdlslNYydXPB%2BjNQ82MVvQjPEjMghoNftnCbrKtrgKksElhZTdPbnYRYDebhkZhboGPNGXqXkSl6HvGuVRZ11c2mJyllhWq5Up17BO0KF4py3zua8a4299zNZCrva3oIeA6Ck4gW62XoIMTV6ina3uhqIazlg2E4NOFLu12jYbBF4SJzePjX9DOkOc8%2Fz8oRrMkbheph265z35g%2F9MPZP69%2BOh%2F1iik9IQYbg8sv82qKJeGtlwW759IOSkO6cXvn2z2tMClLmHTrUyQMilxv682n%2FdWt64LBibXyB1vkLPW4bGEOdGgrd57EjrEN67jkFW0zuzPL%2B3cMEWNCryWZ4DS9jtbFoulrVL4IDM6YvI%2BeWqz5xYkwEIcOmcVloUrL%2BHWUx9A%2Bn97mZD7eD70P%2FhmLwQzexd20kPZZTWVYGzZ7WNZIUuaHN8TSIcBmJqQ1MI1mjMI30xMQGOqUBdLxgT7EAjEvxOIMCPptaV1ZHsaac6lbQqSDf30r5tMRUcrMTIlioSfGU2esiONYmgaDinlSuyCXxo%2F%2ByGN0sEzVFM8zY0Tk3Bd%2B1wsVI10b2vqJct%2FC6RaGEbKM2ZAuLbNzmc6gmY26NnY5X%2B5FsZfXtP6KfmzCYTxu6GlXQwH1%2F6ZlBjOjzvBX6fM5EAuSLsFwNDpphIHUEdRZ0%2BigH0oS6jDki&X-Amz-Signature=013db4d0dfe3f6dd0d022d832dbbc2706f3242cbbd19bb2d5bb57e1ac96c0e33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTK7KS4E%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIAN7TDcjYNl9jOCwW8so3PNPhZZhg1IZf4HqwUw4erZoAiEA1e2fvZBmHN%2FeyIqSmChbZJXqTdmeS%2BaFIwNzJtvei2gq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDPjGfZT97C167471tSrcAxTif07nffYTe37AjWJLybMM4vlfqXGGAnGytvvWyJmnj%2FdrjvTfRRg%2BVbPIVyv3uBxnmMsGtzio%2Fq6vLO7KyyuAby0C2pUeSlnpTbaXLoXRdLUlIGCBycP175gdTegVXHUKbYuslPKBkUu2mKwT6FC0y6yIvMPrPgrBpYhzePhrKCK4lhLriLd9NxiPvfbHle%2FE8ZQy6yxzIBsKp2cgMb83W4Z%2FGDtgU7AOQRNreaHetK6MhPoso8PaGJ9kOqnroHPMWxujnKQHZZg9ZAkk%2B5e7KV10Sy6ceNmLIhWFfJAoFqm9J5jPPd3xk9paKStx%2Bz2ShLOGS%2FP2UBDBZ9mFnjCFDwIdBhbK%2FSYSRrLmJrB4EvAbHJCTmC2pUdCS1bteReRUqYwyZ%2FM8Pu98tK8bOQ4oJSbfho9%2B3TZBYHEv9Ic%2BSta0xXu4abtWZjcpLoNEzJu8ThzPDhBaznb0C0skOiEwNzFcj3xyGIMYnRNtzjNz1FOjh6e0649HdNHSfV%2F0bvSEKCn4wVxMULrJpg9aHD00teutGhQrz7xq7rvjLKLGMY74u0HzCcrbWZ%2BimCNzaElqkYzKWOizyuVC5ypBd6yMf3xYRWBw2s%2FRv%2FBw34GuocTt%2BGRGfkaNXxwiMJ70xMQGOqUBym57EZsN5URL5hWMGdGE53vgM1al1AcBPzodd2XLSzGhK6R1pJS5QGAhdHjboQtPB%2Fzav7r8GTnX%2BiG6XoWMQii13PK5j5VSdnL15aPdA2HICrYUwnPX0JxZ38Ns2DGwy%2BLQcSpGfad6w6vxLoQ59ufm3uJWoCqDhnojI1hpkz307rgYdJDrcA1uCzVEGUQTb5jvO%2BlHfMOS%2BFL9jkXii%2BXrd6g7&X-Amz-Signature=a1c391ee7d5cd18995724b28e04658fe9d6c30f3c97c006b4807f0f1c40c93f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYU3KDF%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIG3q9j6RQoYX7EcDKA4nLrQJuBvo0s00Ne02zJ0GgdqCAiEA6IobmWb1sNxDdMKTI%2F4azdlHF6qfiKyq9SByrVvbDcgq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDHNBuNi2EBtI6QWwoSrcAw7nSlTPFYsCSQ17XVD8N%2FxKB3kEiWMQje%2FZJKOfVCqvtKBkf8Z%2FBBSaI1hMyVTMOQMyMKEMNW3%2BlLsRMagA%2FxDMnwiKIWBxOq9SxqRuV%2BrW1%2FPLfaXPP%2BNexnnO0uYw7sVxQr1AP188T4FdLFPjjqkUyrH52%2B0byn%2FZb63npCktojvSUJjyzYxMdlslNYydXPB%2BjNQ82MVvQjPEjMghoNftnCbrKtrgKksElhZTdPbnYRYDebhkZhboGPNGXqXkSl6HvGuVRZ11c2mJyllhWq5Up17BO0KF4py3zua8a4299zNZCrva3oIeA6Ck4gW62XoIMTV6ina3uhqIazlg2E4NOFLu12jYbBF4SJzePjX9DOkOc8%2Fz8oRrMkbheph265z35g%2F9MPZP69%2BOh%2F1iik9IQYbg8sv82qKJeGtlwW759IOSkO6cXvn2z2tMClLmHTrUyQMilxv682n%2FdWt64LBibXyB1vkLPW4bGEOdGgrd57EjrEN67jkFW0zuzPL%2B3cMEWNCryWZ4DS9jtbFoulrVL4IDM6YvI%2BeWqz5xYkwEIcOmcVloUrL%2BHWUx9A%2Bn97mZD7eD70P%2FhmLwQzexd20kPZZTWVYGzZ7WNZIUuaHN8TSIcBmJqQ1MI1mjMI30xMQGOqUBdLxgT7EAjEvxOIMCPptaV1ZHsaac6lbQqSDf30r5tMRUcrMTIlioSfGU2esiONYmgaDinlSuyCXxo%2F%2ByGN0sEzVFM8zY0Tk3Bd%2B1wsVI10b2vqJct%2FC6RaGEbKM2ZAuLbNzmc6gmY26NnY5X%2B5FsZfXtP6KfmzCYTxu6GlXQwH1%2F6ZlBjOjzvBX6fM5EAuSLsFwNDpphIHUEdRZ0%2BigH0oS6jDki&X-Amz-Signature=430cd42e0c71dabbb799bab932ed8ef53aaefa783a011243a08f19a8cdc65275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYU3KDF%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIG3q9j6RQoYX7EcDKA4nLrQJuBvo0s00Ne02zJ0GgdqCAiEA6IobmWb1sNxDdMKTI%2F4azdlHF6qfiKyq9SByrVvbDcgq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDHNBuNi2EBtI6QWwoSrcAw7nSlTPFYsCSQ17XVD8N%2FxKB3kEiWMQje%2FZJKOfVCqvtKBkf8Z%2FBBSaI1hMyVTMOQMyMKEMNW3%2BlLsRMagA%2FxDMnwiKIWBxOq9SxqRuV%2BrW1%2FPLfaXPP%2BNexnnO0uYw7sVxQr1AP188T4FdLFPjjqkUyrH52%2B0byn%2FZb63npCktojvSUJjyzYxMdlslNYydXPB%2BjNQ82MVvQjPEjMghoNftnCbrKtrgKksElhZTdPbnYRYDebhkZhboGPNGXqXkSl6HvGuVRZ11c2mJyllhWq5Up17BO0KF4py3zua8a4299zNZCrva3oIeA6Ck4gW62XoIMTV6ina3uhqIazlg2E4NOFLu12jYbBF4SJzePjX9DOkOc8%2Fz8oRrMkbheph265z35g%2F9MPZP69%2BOh%2F1iik9IQYbg8sv82qKJeGtlwW759IOSkO6cXvn2z2tMClLmHTrUyQMilxv682n%2FdWt64LBibXyB1vkLPW4bGEOdGgrd57EjrEN67jkFW0zuzPL%2B3cMEWNCryWZ4DS9jtbFoulrVL4IDM6YvI%2BeWqz5xYkwEIcOmcVloUrL%2BHWUx9A%2Bn97mZD7eD70P%2FhmLwQzexd20kPZZTWVYGzZ7WNZIUuaHN8TSIcBmJqQ1MI1mjMI30xMQGOqUBdLxgT7EAjEvxOIMCPptaV1ZHsaac6lbQqSDf30r5tMRUcrMTIlioSfGU2esiONYmgaDinlSuyCXxo%2F%2ByGN0sEzVFM8zY0Tk3Bd%2B1wsVI10b2vqJct%2FC6RaGEbKM2ZAuLbNzmc6gmY26NnY5X%2B5FsZfXtP6KfmzCYTxu6GlXQwH1%2F6ZlBjOjzvBX6fM5EAuSLsFwNDpphIHUEdRZ0%2BigH0oS6jDki&X-Amz-Signature=4666008dba7f29c0079a8df2eb829edb1d66e18712b142bab1a00d4f154dd0e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYU3KDF%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIG3q9j6RQoYX7EcDKA4nLrQJuBvo0s00Ne02zJ0GgdqCAiEA6IobmWb1sNxDdMKTI%2F4azdlHF6qfiKyq9SByrVvbDcgq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDHNBuNi2EBtI6QWwoSrcAw7nSlTPFYsCSQ17XVD8N%2FxKB3kEiWMQje%2FZJKOfVCqvtKBkf8Z%2FBBSaI1hMyVTMOQMyMKEMNW3%2BlLsRMagA%2FxDMnwiKIWBxOq9SxqRuV%2BrW1%2FPLfaXPP%2BNexnnO0uYw7sVxQr1AP188T4FdLFPjjqkUyrH52%2B0byn%2FZb63npCktojvSUJjyzYxMdlslNYydXPB%2BjNQ82MVvQjPEjMghoNftnCbrKtrgKksElhZTdPbnYRYDebhkZhboGPNGXqXkSl6HvGuVRZ11c2mJyllhWq5Up17BO0KF4py3zua8a4299zNZCrva3oIeA6Ck4gW62XoIMTV6ina3uhqIazlg2E4NOFLu12jYbBF4SJzePjX9DOkOc8%2Fz8oRrMkbheph265z35g%2F9MPZP69%2BOh%2F1iik9IQYbg8sv82qKJeGtlwW759IOSkO6cXvn2z2tMClLmHTrUyQMilxv682n%2FdWt64LBibXyB1vkLPW4bGEOdGgrd57EjrEN67jkFW0zuzPL%2B3cMEWNCryWZ4DS9jtbFoulrVL4IDM6YvI%2BeWqz5xYkwEIcOmcVloUrL%2BHWUx9A%2Bn97mZD7eD70P%2FhmLwQzexd20kPZZTWVYGzZ7WNZIUuaHN8TSIcBmJqQ1MI1mjMI30xMQGOqUBdLxgT7EAjEvxOIMCPptaV1ZHsaac6lbQqSDf30r5tMRUcrMTIlioSfGU2esiONYmgaDinlSuyCXxo%2F%2ByGN0sEzVFM8zY0Tk3Bd%2B1wsVI10b2vqJct%2FC6RaGEbKM2ZAuLbNzmc6gmY26NnY5X%2B5FsZfXtP6KfmzCYTxu6GlXQwH1%2F6ZlBjOjzvBX6fM5EAuSLsFwNDpphIHUEdRZ0%2BigH0oS6jDki&X-Amz-Signature=e7f0cb0a69d80deee79c83e40777047860b3f4f07ad9e3f27e9b94bc4b7bde49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYU3KDF%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIG3q9j6RQoYX7EcDKA4nLrQJuBvo0s00Ne02zJ0GgdqCAiEA6IobmWb1sNxDdMKTI%2F4azdlHF6qfiKyq9SByrVvbDcgq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDHNBuNi2EBtI6QWwoSrcAw7nSlTPFYsCSQ17XVD8N%2FxKB3kEiWMQje%2FZJKOfVCqvtKBkf8Z%2FBBSaI1hMyVTMOQMyMKEMNW3%2BlLsRMagA%2FxDMnwiKIWBxOq9SxqRuV%2BrW1%2FPLfaXPP%2BNexnnO0uYw7sVxQr1AP188T4FdLFPjjqkUyrH52%2B0byn%2FZb63npCktojvSUJjyzYxMdlslNYydXPB%2BjNQ82MVvQjPEjMghoNftnCbrKtrgKksElhZTdPbnYRYDebhkZhboGPNGXqXkSl6HvGuVRZ11c2mJyllhWq5Up17BO0KF4py3zua8a4299zNZCrva3oIeA6Ck4gW62XoIMTV6ina3uhqIazlg2E4NOFLu12jYbBF4SJzePjX9DOkOc8%2Fz8oRrMkbheph265z35g%2F9MPZP69%2BOh%2F1iik9IQYbg8sv82qKJeGtlwW759IOSkO6cXvn2z2tMClLmHTrUyQMilxv682n%2FdWt64LBibXyB1vkLPW4bGEOdGgrd57EjrEN67jkFW0zuzPL%2B3cMEWNCryWZ4DS9jtbFoulrVL4IDM6YvI%2BeWqz5xYkwEIcOmcVloUrL%2BHWUx9A%2Bn97mZD7eD70P%2FhmLwQzexd20kPZZTWVYGzZ7WNZIUuaHN8TSIcBmJqQ1MI1mjMI30xMQGOqUBdLxgT7EAjEvxOIMCPptaV1ZHsaac6lbQqSDf30r5tMRUcrMTIlioSfGU2esiONYmgaDinlSuyCXxo%2F%2ByGN0sEzVFM8zY0Tk3Bd%2B1wsVI10b2vqJct%2FC6RaGEbKM2ZAuLbNzmc6gmY26NnY5X%2B5FsZfXtP6KfmzCYTxu6GlXQwH1%2F6ZlBjOjzvBX6fM5EAuSLsFwNDpphIHUEdRZ0%2BigH0oS6jDki&X-Amz-Signature=6716801f22709459a9738f9f529025f6098d31b5f992a9995d4fb7f6fb9da8ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYU3KDF%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIG3q9j6RQoYX7EcDKA4nLrQJuBvo0s00Ne02zJ0GgdqCAiEA6IobmWb1sNxDdMKTI%2F4azdlHF6qfiKyq9SByrVvbDcgq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDHNBuNi2EBtI6QWwoSrcAw7nSlTPFYsCSQ17XVD8N%2FxKB3kEiWMQje%2FZJKOfVCqvtKBkf8Z%2FBBSaI1hMyVTMOQMyMKEMNW3%2BlLsRMagA%2FxDMnwiKIWBxOq9SxqRuV%2BrW1%2FPLfaXPP%2BNexnnO0uYw7sVxQr1AP188T4FdLFPjjqkUyrH52%2B0byn%2FZb63npCktojvSUJjyzYxMdlslNYydXPB%2BjNQ82MVvQjPEjMghoNftnCbrKtrgKksElhZTdPbnYRYDebhkZhboGPNGXqXkSl6HvGuVRZ11c2mJyllhWq5Up17BO0KF4py3zua8a4299zNZCrva3oIeA6Ck4gW62XoIMTV6ina3uhqIazlg2E4NOFLu12jYbBF4SJzePjX9DOkOc8%2Fz8oRrMkbheph265z35g%2F9MPZP69%2BOh%2F1iik9IQYbg8sv82qKJeGtlwW759IOSkO6cXvn2z2tMClLmHTrUyQMilxv682n%2FdWt64LBibXyB1vkLPW4bGEOdGgrd57EjrEN67jkFW0zuzPL%2B3cMEWNCryWZ4DS9jtbFoulrVL4IDM6YvI%2BeWqz5xYkwEIcOmcVloUrL%2BHWUx9A%2Bn97mZD7eD70P%2FhmLwQzexd20kPZZTWVYGzZ7WNZIUuaHN8TSIcBmJqQ1MI1mjMI30xMQGOqUBdLxgT7EAjEvxOIMCPptaV1ZHsaac6lbQqSDf30r5tMRUcrMTIlioSfGU2esiONYmgaDinlSuyCXxo%2F%2ByGN0sEzVFM8zY0Tk3Bd%2B1wsVI10b2vqJct%2FC6RaGEbKM2ZAuLbNzmc6gmY26NnY5X%2B5FsZfXtP6KfmzCYTxu6GlXQwH1%2F6ZlBjOjzvBX6fM5EAuSLsFwNDpphIHUEdRZ0%2BigH0oS6jDki&X-Amz-Signature=7edd6b3bac841a3c2a51087671683d4c581f918b4dba5a45f234083f38c7882d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYU3KDF%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIG3q9j6RQoYX7EcDKA4nLrQJuBvo0s00Ne02zJ0GgdqCAiEA6IobmWb1sNxDdMKTI%2F4azdlHF6qfiKyq9SByrVvbDcgq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDHNBuNi2EBtI6QWwoSrcAw7nSlTPFYsCSQ17XVD8N%2FxKB3kEiWMQje%2FZJKOfVCqvtKBkf8Z%2FBBSaI1hMyVTMOQMyMKEMNW3%2BlLsRMagA%2FxDMnwiKIWBxOq9SxqRuV%2BrW1%2FPLfaXPP%2BNexnnO0uYw7sVxQr1AP188T4FdLFPjjqkUyrH52%2B0byn%2FZb63npCktojvSUJjyzYxMdlslNYydXPB%2BjNQ82MVvQjPEjMghoNftnCbrKtrgKksElhZTdPbnYRYDebhkZhboGPNGXqXkSl6HvGuVRZ11c2mJyllhWq5Up17BO0KF4py3zua8a4299zNZCrva3oIeA6Ck4gW62XoIMTV6ina3uhqIazlg2E4NOFLu12jYbBF4SJzePjX9DOkOc8%2Fz8oRrMkbheph265z35g%2F9MPZP69%2BOh%2F1iik9IQYbg8sv82qKJeGtlwW759IOSkO6cXvn2z2tMClLmHTrUyQMilxv682n%2FdWt64LBibXyB1vkLPW4bGEOdGgrd57EjrEN67jkFW0zuzPL%2B3cMEWNCryWZ4DS9jtbFoulrVL4IDM6YvI%2BeWqz5xYkwEIcOmcVloUrL%2BHWUx9A%2Bn97mZD7eD70P%2FhmLwQzexd20kPZZTWVYGzZ7WNZIUuaHN8TSIcBmJqQ1MI1mjMI30xMQGOqUBdLxgT7EAjEvxOIMCPptaV1ZHsaac6lbQqSDf30r5tMRUcrMTIlioSfGU2esiONYmgaDinlSuyCXxo%2F%2ByGN0sEzVFM8zY0Tk3Bd%2B1wsVI10b2vqJct%2FC6RaGEbKM2ZAuLbNzmc6gmY26NnY5X%2B5FsZfXtP6KfmzCYTxu6GlXQwH1%2F6ZlBjOjzvBX6fM5EAuSLsFwNDpphIHUEdRZ0%2BigH0oS6jDki&X-Amz-Signature=c7cc96fbb8ce37ed60d0107335c30775a7f6ea7f615a44cd6e2a3a2e32664f95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
