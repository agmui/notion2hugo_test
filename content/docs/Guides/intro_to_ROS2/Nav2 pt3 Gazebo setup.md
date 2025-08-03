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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663URDWYT5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUVzet%2Bh7SBunNeCeHyA%2B41vStOiWD0vylNewfm0C2nwIhAJHPf8wLpy6dya5zhslrGwceaS%2BFIXokc7SVpqjZvLkyKv8DCCQQABoMNjM3NDIzMTgzODA1IgyYZIbaW3dJTydOWI0q3AMVW8aG8W9Aae24Q%2F6WMJXMg4ie2cp0IZI1z0Gmc672KcnDH2e2Uo3MMj3gZhR8oEE6LqaEW1d1ervHA8nKZL1pzAAC7FmuShK8dNFhbgUrsg3A8ZR3qvDGMgbLnjgIu%2FB36m9QuPdfWwDmjkbric455sp33oKXi3tg5Ncp1laY5M41eP63ljH05fXe1vVJ4O0hMT0WSKtCzTOX8Rk9ZJvv5h3CNlhwl0MjYmuswvrjIE435MeS3rjX2vU34xzvdaQFC%2FOHKDDg0XFzyWlZRnw8ZewReAtjfNKMNIiXO9wlMqHLcnq6MhbH2snDQegFncc6MTwSdGlY2pZInTr286aol6Ur2RGTrwRBzBTPfmzUkzi11dwlD%2FnF8KGMQj%2F2VzDaSNI6FDOrr3vfGeHamDisMgkZgj0AW2ioQFmNWId0%2FcovKbb5YYJRdxXfOyittaKf1QYyiDTYgTsac9zQTeFA0Hn84%2B2tI8IM9YgxC9tYdmM1AS4kcldPyRqDYoaCfgDiX%2BIEqGjZXUZzYAhk37dmRvwsSU1XT84%2FA%2BEWjJaYJp2L%2BycYPma%2FktzHs%2FjPwXGVjgJnvoi3suwRhfw6qoFC2dLaXuVCv%2B7mpeVZTmcTKLLH0OLk6zx0GIgAlzDVorvEBjqkARb9IT8hHnTI%2BDeQb%2Bu68%2BFKvAfj4m04gSOhtFD3nouwF8VZx7xXoWm%2FC05PFDBmLOAlGMytdTGRk8kkpUC7KIlYxBw5lkBJJdg00az7Lz9DKAQTUmdxnqoN0BikIeb64B2PzN24sIU3gGCvOo%2BhiotQ%2BG%2F%2B0N1k23Im7MKlJ7mP%2FDItJ%2BCEwtGJJ91XL0y8Wo1nx7p5atJCDWsPSNJpN%2FkNoa0C&X-Amz-Signature=79f8e8f14f4821242af17fa3cfaee646826c976cc48fc7408ae0d3f2b01d5859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663URDWYT5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUVzet%2Bh7SBunNeCeHyA%2B41vStOiWD0vylNewfm0C2nwIhAJHPf8wLpy6dya5zhslrGwceaS%2BFIXokc7SVpqjZvLkyKv8DCCQQABoMNjM3NDIzMTgzODA1IgyYZIbaW3dJTydOWI0q3AMVW8aG8W9Aae24Q%2F6WMJXMg4ie2cp0IZI1z0Gmc672KcnDH2e2Uo3MMj3gZhR8oEE6LqaEW1d1ervHA8nKZL1pzAAC7FmuShK8dNFhbgUrsg3A8ZR3qvDGMgbLnjgIu%2FB36m9QuPdfWwDmjkbric455sp33oKXi3tg5Ncp1laY5M41eP63ljH05fXe1vVJ4O0hMT0WSKtCzTOX8Rk9ZJvv5h3CNlhwl0MjYmuswvrjIE435MeS3rjX2vU34xzvdaQFC%2FOHKDDg0XFzyWlZRnw8ZewReAtjfNKMNIiXO9wlMqHLcnq6MhbH2snDQegFncc6MTwSdGlY2pZInTr286aol6Ur2RGTrwRBzBTPfmzUkzi11dwlD%2FnF8KGMQj%2F2VzDaSNI6FDOrr3vfGeHamDisMgkZgj0AW2ioQFmNWId0%2FcovKbb5YYJRdxXfOyittaKf1QYyiDTYgTsac9zQTeFA0Hn84%2B2tI8IM9YgxC9tYdmM1AS4kcldPyRqDYoaCfgDiX%2BIEqGjZXUZzYAhk37dmRvwsSU1XT84%2FA%2BEWjJaYJp2L%2BycYPma%2FktzHs%2FjPwXGVjgJnvoi3suwRhfw6qoFC2dLaXuVCv%2B7mpeVZTmcTKLLH0OLk6zx0GIgAlzDVorvEBjqkARb9IT8hHnTI%2BDeQb%2Bu68%2BFKvAfj4m04gSOhtFD3nouwF8VZx7xXoWm%2FC05PFDBmLOAlGMytdTGRk8kkpUC7KIlYxBw5lkBJJdg00az7Lz9DKAQTUmdxnqoN0BikIeb64B2PzN24sIU3gGCvOo%2BhiotQ%2BG%2F%2B0N1k23Im7MKlJ7mP%2FDItJ%2BCEwtGJJ91XL0y8Wo1nx7p5atJCDWsPSNJpN%2FkNoa0C&X-Amz-Signature=e5126571d5f7f0a9b8a94eb0ccd2da2df8617d5c04027b572d44058fd10070ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663URDWYT5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUVzet%2Bh7SBunNeCeHyA%2B41vStOiWD0vylNewfm0C2nwIhAJHPf8wLpy6dya5zhslrGwceaS%2BFIXokc7SVpqjZvLkyKv8DCCQQABoMNjM3NDIzMTgzODA1IgyYZIbaW3dJTydOWI0q3AMVW8aG8W9Aae24Q%2F6WMJXMg4ie2cp0IZI1z0Gmc672KcnDH2e2Uo3MMj3gZhR8oEE6LqaEW1d1ervHA8nKZL1pzAAC7FmuShK8dNFhbgUrsg3A8ZR3qvDGMgbLnjgIu%2FB36m9QuPdfWwDmjkbric455sp33oKXi3tg5Ncp1laY5M41eP63ljH05fXe1vVJ4O0hMT0WSKtCzTOX8Rk9ZJvv5h3CNlhwl0MjYmuswvrjIE435MeS3rjX2vU34xzvdaQFC%2FOHKDDg0XFzyWlZRnw8ZewReAtjfNKMNIiXO9wlMqHLcnq6MhbH2snDQegFncc6MTwSdGlY2pZInTr286aol6Ur2RGTrwRBzBTPfmzUkzi11dwlD%2FnF8KGMQj%2F2VzDaSNI6FDOrr3vfGeHamDisMgkZgj0AW2ioQFmNWId0%2FcovKbb5YYJRdxXfOyittaKf1QYyiDTYgTsac9zQTeFA0Hn84%2B2tI8IM9YgxC9tYdmM1AS4kcldPyRqDYoaCfgDiX%2BIEqGjZXUZzYAhk37dmRvwsSU1XT84%2FA%2BEWjJaYJp2L%2BycYPma%2FktzHs%2FjPwXGVjgJnvoi3suwRhfw6qoFC2dLaXuVCv%2B7mpeVZTmcTKLLH0OLk6zx0GIgAlzDVorvEBjqkARb9IT8hHnTI%2BDeQb%2Bu68%2BFKvAfj4m04gSOhtFD3nouwF8VZx7xXoWm%2FC05PFDBmLOAlGMytdTGRk8kkpUC7KIlYxBw5lkBJJdg00az7Lz9DKAQTUmdxnqoN0BikIeb64B2PzN24sIU3gGCvOo%2BhiotQ%2BG%2F%2B0N1k23Im7MKlJ7mP%2FDItJ%2BCEwtGJJ91XL0y8Wo1nx7p5atJCDWsPSNJpN%2FkNoa0C&X-Amz-Signature=a3238ff64b4b9a85b47527e05d63909b4ace1d338495daffd62ba1a5e569b66b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663URDWYT5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUVzet%2Bh7SBunNeCeHyA%2B41vStOiWD0vylNewfm0C2nwIhAJHPf8wLpy6dya5zhslrGwceaS%2BFIXokc7SVpqjZvLkyKv8DCCQQABoMNjM3NDIzMTgzODA1IgyYZIbaW3dJTydOWI0q3AMVW8aG8W9Aae24Q%2F6WMJXMg4ie2cp0IZI1z0Gmc672KcnDH2e2Uo3MMj3gZhR8oEE6LqaEW1d1ervHA8nKZL1pzAAC7FmuShK8dNFhbgUrsg3A8ZR3qvDGMgbLnjgIu%2FB36m9QuPdfWwDmjkbric455sp33oKXi3tg5Ncp1laY5M41eP63ljH05fXe1vVJ4O0hMT0WSKtCzTOX8Rk9ZJvv5h3CNlhwl0MjYmuswvrjIE435MeS3rjX2vU34xzvdaQFC%2FOHKDDg0XFzyWlZRnw8ZewReAtjfNKMNIiXO9wlMqHLcnq6MhbH2snDQegFncc6MTwSdGlY2pZInTr286aol6Ur2RGTrwRBzBTPfmzUkzi11dwlD%2FnF8KGMQj%2F2VzDaSNI6FDOrr3vfGeHamDisMgkZgj0AW2ioQFmNWId0%2FcovKbb5YYJRdxXfOyittaKf1QYyiDTYgTsac9zQTeFA0Hn84%2B2tI8IM9YgxC9tYdmM1AS4kcldPyRqDYoaCfgDiX%2BIEqGjZXUZzYAhk37dmRvwsSU1XT84%2FA%2BEWjJaYJp2L%2BycYPma%2FktzHs%2FjPwXGVjgJnvoi3suwRhfw6qoFC2dLaXuVCv%2B7mpeVZTmcTKLLH0OLk6zx0GIgAlzDVorvEBjqkARb9IT8hHnTI%2BDeQb%2Bu68%2BFKvAfj4m04gSOhtFD3nouwF8VZx7xXoWm%2FC05PFDBmLOAlGMytdTGRk8kkpUC7KIlYxBw5lkBJJdg00az7Lz9DKAQTUmdxnqoN0BikIeb64B2PzN24sIU3gGCvOo%2BhiotQ%2BG%2F%2B0N1k23Im7MKlJ7mP%2FDItJ%2BCEwtGJJ91XL0y8Wo1nx7p5atJCDWsPSNJpN%2FkNoa0C&X-Amz-Signature=4cf54c25e40b88511a208ad08ec01653d435e4fc5177fdc50453fb74c1396ccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQA5CCUG%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRDasIq%2FXJ1e%2FCYsiPJIozcTH6arZXyBHrVetK9GHtYgIhAJQY32Ijp9hnQ4sLt26IwLprNpThkC4vOTIMtkSUVdIJKv8DCCQQABoMNjM3NDIzMTgzODA1IgzUgLzz5yzyWWeGamsq3AO2G43qWRm2wJnKGjhVa0zvZ931tBrRzQVo3gVfop1QGfgEciPUnQICFswa2uUsaFvCGjXFGXdUJT4eNHLZisGkKAXBYishkDXfQjkoWk1Q2gAidcYxJvxJ6UfSmxgjDC7BAa7Rio5qRYkVk%2FVOX67E%2BpYvMrvfUWK8j%2FdkmvLP22QTLIVfRfO%2FxZZh5pxEhStIurWzvjFSEGT6%2BqV7SsJAGfKrNETpV8ZM8wZIwvzMc4ffFQs5kgrK5PLKkzotCGcPMhnIdWcVJ3rGycKHgQxIZcYs76y6zqsZNcQSw7kqrjj%2FQb5yOC482GAnRfxSrVtCYuEfq20hGjSFtbA2u2DJQIR48hYeCguDoylcDe%2BjjgH1y5Jw9Lq%2FLY3Pt09gbCXHcbIJ4DH4F75%2BRV6lpk8jwpJwL8UD0EWfCz%2FznqyPQ159d5yQppLUnBkYAk4MvFMBLzqaNwnf%2FBN0RCki9Jx3PrYuOTpP4MX6wxFAUdw9AzgXCOQuZ7Hv%2FGW2M6AmVKD1S9DHLC3JCaknMDoDA%2BeuXeLdMgHJXf3wZM%2FBFuQobIKWwZ%2F%2BJIJocOLx6MySywnglevlLLRyUk6%2BVd2Z1JeVRStN%2FFNQiXAZ9ZtkzuhcdeocsBNXaOG5TVujazDZprvEBjqkAQj3PJZ4kvK%2BvCg6KcBUsbfTiAbtvU2Tq44YuLDNwQ9yfx8WoncVnz5oW85pvPMVkSLpR%2Fr4ZW8WkLwTv0Xslhzc2X76aVxJHoJ6aMS4Z0719%2BAIqhKyDPICCIYMNZNXnxZgcANNKLGCTL1PO%2FapmYlmWu2fHL9jfcn3qcguKGSn5NQKqSR6xn2g27ysegOU7N538h0HGUo4zeT8bYno1cegXa%2FM&X-Amz-Signature=a7c32bbb7c7e035d91aee9c5cd1e8582a5e5af75d842089831eddddce9789c6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663URDWYT5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUVzet%2Bh7SBunNeCeHyA%2B41vStOiWD0vylNewfm0C2nwIhAJHPf8wLpy6dya5zhslrGwceaS%2BFIXokc7SVpqjZvLkyKv8DCCQQABoMNjM3NDIzMTgzODA1IgyYZIbaW3dJTydOWI0q3AMVW8aG8W9Aae24Q%2F6WMJXMg4ie2cp0IZI1z0Gmc672KcnDH2e2Uo3MMj3gZhR8oEE6LqaEW1d1ervHA8nKZL1pzAAC7FmuShK8dNFhbgUrsg3A8ZR3qvDGMgbLnjgIu%2FB36m9QuPdfWwDmjkbric455sp33oKXi3tg5Ncp1laY5M41eP63ljH05fXe1vVJ4O0hMT0WSKtCzTOX8Rk9ZJvv5h3CNlhwl0MjYmuswvrjIE435MeS3rjX2vU34xzvdaQFC%2FOHKDDg0XFzyWlZRnw8ZewReAtjfNKMNIiXO9wlMqHLcnq6MhbH2snDQegFncc6MTwSdGlY2pZInTr286aol6Ur2RGTrwRBzBTPfmzUkzi11dwlD%2FnF8KGMQj%2F2VzDaSNI6FDOrr3vfGeHamDisMgkZgj0AW2ioQFmNWId0%2FcovKbb5YYJRdxXfOyittaKf1QYyiDTYgTsac9zQTeFA0Hn84%2B2tI8IM9YgxC9tYdmM1AS4kcldPyRqDYoaCfgDiX%2BIEqGjZXUZzYAhk37dmRvwsSU1XT84%2FA%2BEWjJaYJp2L%2BycYPma%2FktzHs%2FjPwXGVjgJnvoi3suwRhfw6qoFC2dLaXuVCv%2B7mpeVZTmcTKLLH0OLk6zx0GIgAlzDVorvEBjqkARb9IT8hHnTI%2BDeQb%2Bu68%2BFKvAfj4m04gSOhtFD3nouwF8VZx7xXoWm%2FC05PFDBmLOAlGMytdTGRk8kkpUC7KIlYxBw5lkBJJdg00az7Lz9DKAQTUmdxnqoN0BikIeb64B2PzN24sIU3gGCvOo%2BhiotQ%2BG%2F%2B0N1k23Im7MKlJ7mP%2FDItJ%2BCEwtGJJ91XL0y8Wo1nx7p5atJCDWsPSNJpN%2FkNoa0C&X-Amz-Signature=b7d4c36b48a26689661f4f394ee92d0f4514f827cae61efe48c558a50ccd785d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663URDWYT5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUVzet%2Bh7SBunNeCeHyA%2B41vStOiWD0vylNewfm0C2nwIhAJHPf8wLpy6dya5zhslrGwceaS%2BFIXokc7SVpqjZvLkyKv8DCCQQABoMNjM3NDIzMTgzODA1IgyYZIbaW3dJTydOWI0q3AMVW8aG8W9Aae24Q%2F6WMJXMg4ie2cp0IZI1z0Gmc672KcnDH2e2Uo3MMj3gZhR8oEE6LqaEW1d1ervHA8nKZL1pzAAC7FmuShK8dNFhbgUrsg3A8ZR3qvDGMgbLnjgIu%2FB36m9QuPdfWwDmjkbric455sp33oKXi3tg5Ncp1laY5M41eP63ljH05fXe1vVJ4O0hMT0WSKtCzTOX8Rk9ZJvv5h3CNlhwl0MjYmuswvrjIE435MeS3rjX2vU34xzvdaQFC%2FOHKDDg0XFzyWlZRnw8ZewReAtjfNKMNIiXO9wlMqHLcnq6MhbH2snDQegFncc6MTwSdGlY2pZInTr286aol6Ur2RGTrwRBzBTPfmzUkzi11dwlD%2FnF8KGMQj%2F2VzDaSNI6FDOrr3vfGeHamDisMgkZgj0AW2ioQFmNWId0%2FcovKbb5YYJRdxXfOyittaKf1QYyiDTYgTsac9zQTeFA0Hn84%2B2tI8IM9YgxC9tYdmM1AS4kcldPyRqDYoaCfgDiX%2BIEqGjZXUZzYAhk37dmRvwsSU1XT84%2FA%2BEWjJaYJp2L%2BycYPma%2FktzHs%2FjPwXGVjgJnvoi3suwRhfw6qoFC2dLaXuVCv%2B7mpeVZTmcTKLLH0OLk6zx0GIgAlzDVorvEBjqkARb9IT8hHnTI%2BDeQb%2Bu68%2BFKvAfj4m04gSOhtFD3nouwF8VZx7xXoWm%2FC05PFDBmLOAlGMytdTGRk8kkpUC7KIlYxBw5lkBJJdg00az7Lz9DKAQTUmdxnqoN0BikIeb64B2PzN24sIU3gGCvOo%2BhiotQ%2BG%2F%2B0N1k23Im7MKlJ7mP%2FDItJ%2BCEwtGJJ91XL0y8Wo1nx7p5atJCDWsPSNJpN%2FkNoa0C&X-Amz-Signature=e10b5017d94623c1fe96735a86d08c2fcb3046f3fb699db54b0c3fab1c58be3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663URDWYT5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUVzet%2Bh7SBunNeCeHyA%2B41vStOiWD0vylNewfm0C2nwIhAJHPf8wLpy6dya5zhslrGwceaS%2BFIXokc7SVpqjZvLkyKv8DCCQQABoMNjM3NDIzMTgzODA1IgyYZIbaW3dJTydOWI0q3AMVW8aG8W9Aae24Q%2F6WMJXMg4ie2cp0IZI1z0Gmc672KcnDH2e2Uo3MMj3gZhR8oEE6LqaEW1d1ervHA8nKZL1pzAAC7FmuShK8dNFhbgUrsg3A8ZR3qvDGMgbLnjgIu%2FB36m9QuPdfWwDmjkbric455sp33oKXi3tg5Ncp1laY5M41eP63ljH05fXe1vVJ4O0hMT0WSKtCzTOX8Rk9ZJvv5h3CNlhwl0MjYmuswvrjIE435MeS3rjX2vU34xzvdaQFC%2FOHKDDg0XFzyWlZRnw8ZewReAtjfNKMNIiXO9wlMqHLcnq6MhbH2snDQegFncc6MTwSdGlY2pZInTr286aol6Ur2RGTrwRBzBTPfmzUkzi11dwlD%2FnF8KGMQj%2F2VzDaSNI6FDOrr3vfGeHamDisMgkZgj0AW2ioQFmNWId0%2FcovKbb5YYJRdxXfOyittaKf1QYyiDTYgTsac9zQTeFA0Hn84%2B2tI8IM9YgxC9tYdmM1AS4kcldPyRqDYoaCfgDiX%2BIEqGjZXUZzYAhk37dmRvwsSU1XT84%2FA%2BEWjJaYJp2L%2BycYPma%2FktzHs%2FjPwXGVjgJnvoi3suwRhfw6qoFC2dLaXuVCv%2B7mpeVZTmcTKLLH0OLk6zx0GIgAlzDVorvEBjqkARb9IT8hHnTI%2BDeQb%2Bu68%2BFKvAfj4m04gSOhtFD3nouwF8VZx7xXoWm%2FC05PFDBmLOAlGMytdTGRk8kkpUC7KIlYxBw5lkBJJdg00az7Lz9DKAQTUmdxnqoN0BikIeb64B2PzN24sIU3gGCvOo%2BhiotQ%2BG%2F%2B0N1k23Im7MKlJ7mP%2FDItJ%2BCEwtGJJ91XL0y8Wo1nx7p5atJCDWsPSNJpN%2FkNoa0C&X-Amz-Signature=b0970baf1b6c5a0822fb947e40a97bf6bff5cd8e62bb3edf8b6f8bd60a719c17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663URDWYT5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUVzet%2Bh7SBunNeCeHyA%2B41vStOiWD0vylNewfm0C2nwIhAJHPf8wLpy6dya5zhslrGwceaS%2BFIXokc7SVpqjZvLkyKv8DCCQQABoMNjM3NDIzMTgzODA1IgyYZIbaW3dJTydOWI0q3AMVW8aG8W9Aae24Q%2F6WMJXMg4ie2cp0IZI1z0Gmc672KcnDH2e2Uo3MMj3gZhR8oEE6LqaEW1d1ervHA8nKZL1pzAAC7FmuShK8dNFhbgUrsg3A8ZR3qvDGMgbLnjgIu%2FB36m9QuPdfWwDmjkbric455sp33oKXi3tg5Ncp1laY5M41eP63ljH05fXe1vVJ4O0hMT0WSKtCzTOX8Rk9ZJvv5h3CNlhwl0MjYmuswvrjIE435MeS3rjX2vU34xzvdaQFC%2FOHKDDg0XFzyWlZRnw8ZewReAtjfNKMNIiXO9wlMqHLcnq6MhbH2snDQegFncc6MTwSdGlY2pZInTr286aol6Ur2RGTrwRBzBTPfmzUkzi11dwlD%2FnF8KGMQj%2F2VzDaSNI6FDOrr3vfGeHamDisMgkZgj0AW2ioQFmNWId0%2FcovKbb5YYJRdxXfOyittaKf1QYyiDTYgTsac9zQTeFA0Hn84%2B2tI8IM9YgxC9tYdmM1AS4kcldPyRqDYoaCfgDiX%2BIEqGjZXUZzYAhk37dmRvwsSU1XT84%2FA%2BEWjJaYJp2L%2BycYPma%2FktzHs%2FjPwXGVjgJnvoi3suwRhfw6qoFC2dLaXuVCv%2B7mpeVZTmcTKLLH0OLk6zx0GIgAlzDVorvEBjqkARb9IT8hHnTI%2BDeQb%2Bu68%2BFKvAfj4m04gSOhtFD3nouwF8VZx7xXoWm%2FC05PFDBmLOAlGMytdTGRk8kkpUC7KIlYxBw5lkBJJdg00az7Lz9DKAQTUmdxnqoN0BikIeb64B2PzN24sIU3gGCvOo%2BhiotQ%2BG%2F%2B0N1k23Im7MKlJ7mP%2FDItJ%2BCEwtGJJ91XL0y8Wo1nx7p5atJCDWsPSNJpN%2FkNoa0C&X-Amz-Signature=6730638c9931c7acf3807c4ac42491a9ca2b41d320a041896dd27ef60d4893c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663URDWYT5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUVzet%2Bh7SBunNeCeHyA%2B41vStOiWD0vylNewfm0C2nwIhAJHPf8wLpy6dya5zhslrGwceaS%2BFIXokc7SVpqjZvLkyKv8DCCQQABoMNjM3NDIzMTgzODA1IgyYZIbaW3dJTydOWI0q3AMVW8aG8W9Aae24Q%2F6WMJXMg4ie2cp0IZI1z0Gmc672KcnDH2e2Uo3MMj3gZhR8oEE6LqaEW1d1ervHA8nKZL1pzAAC7FmuShK8dNFhbgUrsg3A8ZR3qvDGMgbLnjgIu%2FB36m9QuPdfWwDmjkbric455sp33oKXi3tg5Ncp1laY5M41eP63ljH05fXe1vVJ4O0hMT0WSKtCzTOX8Rk9ZJvv5h3CNlhwl0MjYmuswvrjIE435MeS3rjX2vU34xzvdaQFC%2FOHKDDg0XFzyWlZRnw8ZewReAtjfNKMNIiXO9wlMqHLcnq6MhbH2snDQegFncc6MTwSdGlY2pZInTr286aol6Ur2RGTrwRBzBTPfmzUkzi11dwlD%2FnF8KGMQj%2F2VzDaSNI6FDOrr3vfGeHamDisMgkZgj0AW2ioQFmNWId0%2FcovKbb5YYJRdxXfOyittaKf1QYyiDTYgTsac9zQTeFA0Hn84%2B2tI8IM9YgxC9tYdmM1AS4kcldPyRqDYoaCfgDiX%2BIEqGjZXUZzYAhk37dmRvwsSU1XT84%2FA%2BEWjJaYJp2L%2BycYPma%2FktzHs%2FjPwXGVjgJnvoi3suwRhfw6qoFC2dLaXuVCv%2B7mpeVZTmcTKLLH0OLk6zx0GIgAlzDVorvEBjqkARb9IT8hHnTI%2BDeQb%2Bu68%2BFKvAfj4m04gSOhtFD3nouwF8VZx7xXoWm%2FC05PFDBmLOAlGMytdTGRk8kkpUC7KIlYxBw5lkBJJdg00az7Lz9DKAQTUmdxnqoN0BikIeb64B2PzN24sIU3gGCvOo%2BhiotQ%2BG%2F%2B0N1k23Im7MKlJ7mP%2FDItJ%2BCEwtGJJ91XL0y8Wo1nx7p5atJCDWsPSNJpN%2FkNoa0C&X-Amz-Signature=d9c321c64a3a3f19110fcfe18da7eab68d1241072735a6e6d8c1276f87e18699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663URDWYT5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUVzet%2Bh7SBunNeCeHyA%2B41vStOiWD0vylNewfm0C2nwIhAJHPf8wLpy6dya5zhslrGwceaS%2BFIXokc7SVpqjZvLkyKv8DCCQQABoMNjM3NDIzMTgzODA1IgyYZIbaW3dJTydOWI0q3AMVW8aG8W9Aae24Q%2F6WMJXMg4ie2cp0IZI1z0Gmc672KcnDH2e2Uo3MMj3gZhR8oEE6LqaEW1d1ervHA8nKZL1pzAAC7FmuShK8dNFhbgUrsg3A8ZR3qvDGMgbLnjgIu%2FB36m9QuPdfWwDmjkbric455sp33oKXi3tg5Ncp1laY5M41eP63ljH05fXe1vVJ4O0hMT0WSKtCzTOX8Rk9ZJvv5h3CNlhwl0MjYmuswvrjIE435MeS3rjX2vU34xzvdaQFC%2FOHKDDg0XFzyWlZRnw8ZewReAtjfNKMNIiXO9wlMqHLcnq6MhbH2snDQegFncc6MTwSdGlY2pZInTr286aol6Ur2RGTrwRBzBTPfmzUkzi11dwlD%2FnF8KGMQj%2F2VzDaSNI6FDOrr3vfGeHamDisMgkZgj0AW2ioQFmNWId0%2FcovKbb5YYJRdxXfOyittaKf1QYyiDTYgTsac9zQTeFA0Hn84%2B2tI8IM9YgxC9tYdmM1AS4kcldPyRqDYoaCfgDiX%2BIEqGjZXUZzYAhk37dmRvwsSU1XT84%2FA%2BEWjJaYJp2L%2BycYPma%2FktzHs%2FjPwXGVjgJnvoi3suwRhfw6qoFC2dLaXuVCv%2B7mpeVZTmcTKLLH0OLk6zx0GIgAlzDVorvEBjqkARb9IT8hHnTI%2BDeQb%2Bu68%2BFKvAfj4m04gSOhtFD3nouwF8VZx7xXoWm%2FC05PFDBmLOAlGMytdTGRk8kkpUC7KIlYxBw5lkBJJdg00az7Lz9DKAQTUmdxnqoN0BikIeb64B2PzN24sIU3gGCvOo%2BhiotQ%2BG%2F%2B0N1k23Im7MKlJ7mP%2FDItJ%2BCEwtGJJ91XL0y8Wo1nx7p5atJCDWsPSNJpN%2FkNoa0C&X-Amz-Signature=f0cb7be87793d6898bf88c40531d1895e5c9de8bb397614c61453d76aa202e4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
