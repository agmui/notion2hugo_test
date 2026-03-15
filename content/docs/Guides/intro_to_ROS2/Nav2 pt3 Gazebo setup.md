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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QRSRLCO%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyxuSF6QCQaREfmoBKnKEbRAcyhmM2tlocKQRtzn5MoAiEAr8UyjCSOS4Pg%2Bc0jbl0vhVO5JzeBXJr4sO5HykipwZgqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1ZaSoC4HxmxrvPPircA68mkZCDSHU4YkPnwbRvEyD5R37OND%2B5%2FZaYTgvy1f%2FH3SEhRaqBcTZrf56%2BHVno7PQJJadhQo3%2Bak8EBOuOh51Rh1bxCD7WiO%2FyV1SMQNZ%2BEaY8uPWnPahkF2ZHCNFwcXtBCBE6gWQTSAG%2FR24recxQKxUed5N5UrtNfq0RxCRSt%2BKi8%2B%2FhL3qon1zfhQCeCz2fmckrwWV5ECX3npEqykXH718Joy3Jga2yzhH1IRfJRS2NAeJdjrBnHv5tT%2FOF14t15zLSWZbuI%2Fpt0teymSR3rlPRIO%2F1QTKsvOPlHqEZEoF85Yd8ulgnk0lrr5mwN8JqDQQutx7euAl5XgA5bTuuxPc9moP0QtaQYCHNphrtS7yzpVbKOt71jLOxLEkW6YFcfCqM3Yk%2Bb%2FuLjn652oNjYXV%2Bg0blWsxiThDDGfi9CnLqfOl78tsaiWk0UW7m5qPhAuIPpx%2BBPWsntbud6l7K6QZ7efk1uL%2FnTATzTm9SCuiAp3iGmrEyctGuQs6tiyrx4ub4kdgC7J7355pL2Ntdj3i4f1uZnWtitPvGyBOEFwg7aiIDjUKVy9u5VU0%2BffR%2FPy5GF1N0ZYv2WNmfMJyBjYFDMd%2B73AQLXp9C%2FksNIFSRwQT0HrIchRGfMJmR2M0GOqUBsK7pgz%2FETcMA1SdAVor9LGcNp3RCe3m0CzKQ2O80qrBCVCINEDQ6Frpt5uXv%2Ff2xfk32VcJR6zt%2FSJ0kW8aNWko8orEuHqXO3rdL2b7KOf6DVcbhO2EtS8eH31VxGsjzg0tOwM2bbXWEMziTEQogsG0qc8NdD%2Fw1M09YnKauFosBslp8JWZo2%2FEr3a0%2B%2FIJgWLh9Iq2xsMCSeX4kqRi8WQvScaAD&X-Amz-Signature=27794899f4603ff04c56eecbdcdead8838c4d77710a374fcc316b02e1a8d669b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QRSRLCO%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyxuSF6QCQaREfmoBKnKEbRAcyhmM2tlocKQRtzn5MoAiEAr8UyjCSOS4Pg%2Bc0jbl0vhVO5JzeBXJr4sO5HykipwZgqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1ZaSoC4HxmxrvPPircA68mkZCDSHU4YkPnwbRvEyD5R37OND%2B5%2FZaYTgvy1f%2FH3SEhRaqBcTZrf56%2BHVno7PQJJadhQo3%2Bak8EBOuOh51Rh1bxCD7WiO%2FyV1SMQNZ%2BEaY8uPWnPahkF2ZHCNFwcXtBCBE6gWQTSAG%2FR24recxQKxUed5N5UrtNfq0RxCRSt%2BKi8%2B%2FhL3qon1zfhQCeCz2fmckrwWV5ECX3npEqykXH718Joy3Jga2yzhH1IRfJRS2NAeJdjrBnHv5tT%2FOF14t15zLSWZbuI%2Fpt0teymSR3rlPRIO%2F1QTKsvOPlHqEZEoF85Yd8ulgnk0lrr5mwN8JqDQQutx7euAl5XgA5bTuuxPc9moP0QtaQYCHNphrtS7yzpVbKOt71jLOxLEkW6YFcfCqM3Yk%2Bb%2FuLjn652oNjYXV%2Bg0blWsxiThDDGfi9CnLqfOl78tsaiWk0UW7m5qPhAuIPpx%2BBPWsntbud6l7K6QZ7efk1uL%2FnTATzTm9SCuiAp3iGmrEyctGuQs6tiyrx4ub4kdgC7J7355pL2Ntdj3i4f1uZnWtitPvGyBOEFwg7aiIDjUKVy9u5VU0%2BffR%2FPy5GF1N0ZYv2WNmfMJyBjYFDMd%2B73AQLXp9C%2FksNIFSRwQT0HrIchRGfMJmR2M0GOqUBsK7pgz%2FETcMA1SdAVor9LGcNp3RCe3m0CzKQ2O80qrBCVCINEDQ6Frpt5uXv%2Ff2xfk32VcJR6zt%2FSJ0kW8aNWko8orEuHqXO3rdL2b7KOf6DVcbhO2EtS8eH31VxGsjzg0tOwM2bbXWEMziTEQogsG0qc8NdD%2Fw1M09YnKauFosBslp8JWZo2%2FEr3a0%2B%2FIJgWLh9Iq2xsMCSeX4kqRi8WQvScaAD&X-Amz-Signature=0528bb53c362f0735824065f14da42a0da90a60f67119ded56593ab2d7484207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QRSRLCO%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyxuSF6QCQaREfmoBKnKEbRAcyhmM2tlocKQRtzn5MoAiEAr8UyjCSOS4Pg%2Bc0jbl0vhVO5JzeBXJr4sO5HykipwZgqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1ZaSoC4HxmxrvPPircA68mkZCDSHU4YkPnwbRvEyD5R37OND%2B5%2FZaYTgvy1f%2FH3SEhRaqBcTZrf56%2BHVno7PQJJadhQo3%2Bak8EBOuOh51Rh1bxCD7WiO%2FyV1SMQNZ%2BEaY8uPWnPahkF2ZHCNFwcXtBCBE6gWQTSAG%2FR24recxQKxUed5N5UrtNfq0RxCRSt%2BKi8%2B%2FhL3qon1zfhQCeCz2fmckrwWV5ECX3npEqykXH718Joy3Jga2yzhH1IRfJRS2NAeJdjrBnHv5tT%2FOF14t15zLSWZbuI%2Fpt0teymSR3rlPRIO%2F1QTKsvOPlHqEZEoF85Yd8ulgnk0lrr5mwN8JqDQQutx7euAl5XgA5bTuuxPc9moP0QtaQYCHNphrtS7yzpVbKOt71jLOxLEkW6YFcfCqM3Yk%2Bb%2FuLjn652oNjYXV%2Bg0blWsxiThDDGfi9CnLqfOl78tsaiWk0UW7m5qPhAuIPpx%2BBPWsntbud6l7K6QZ7efk1uL%2FnTATzTm9SCuiAp3iGmrEyctGuQs6tiyrx4ub4kdgC7J7355pL2Ntdj3i4f1uZnWtitPvGyBOEFwg7aiIDjUKVy9u5VU0%2BffR%2FPy5GF1N0ZYv2WNmfMJyBjYFDMd%2B73AQLXp9C%2FksNIFSRwQT0HrIchRGfMJmR2M0GOqUBsK7pgz%2FETcMA1SdAVor9LGcNp3RCe3m0CzKQ2O80qrBCVCINEDQ6Frpt5uXv%2Ff2xfk32VcJR6zt%2FSJ0kW8aNWko8orEuHqXO3rdL2b7KOf6DVcbhO2EtS8eH31VxGsjzg0tOwM2bbXWEMziTEQogsG0qc8NdD%2Fw1M09YnKauFosBslp8JWZo2%2FEr3a0%2B%2FIJgWLh9Iq2xsMCSeX4kqRi8WQvScaAD&X-Amz-Signature=7647d2e46aa7802962f86792418cdc61583b16eb127b39944636cc87788bae62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QRSRLCO%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyxuSF6QCQaREfmoBKnKEbRAcyhmM2tlocKQRtzn5MoAiEAr8UyjCSOS4Pg%2Bc0jbl0vhVO5JzeBXJr4sO5HykipwZgqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1ZaSoC4HxmxrvPPircA68mkZCDSHU4YkPnwbRvEyD5R37OND%2B5%2FZaYTgvy1f%2FH3SEhRaqBcTZrf56%2BHVno7PQJJadhQo3%2Bak8EBOuOh51Rh1bxCD7WiO%2FyV1SMQNZ%2BEaY8uPWnPahkF2ZHCNFwcXtBCBE6gWQTSAG%2FR24recxQKxUed5N5UrtNfq0RxCRSt%2BKi8%2B%2FhL3qon1zfhQCeCz2fmckrwWV5ECX3npEqykXH718Joy3Jga2yzhH1IRfJRS2NAeJdjrBnHv5tT%2FOF14t15zLSWZbuI%2Fpt0teymSR3rlPRIO%2F1QTKsvOPlHqEZEoF85Yd8ulgnk0lrr5mwN8JqDQQutx7euAl5XgA5bTuuxPc9moP0QtaQYCHNphrtS7yzpVbKOt71jLOxLEkW6YFcfCqM3Yk%2Bb%2FuLjn652oNjYXV%2Bg0blWsxiThDDGfi9CnLqfOl78tsaiWk0UW7m5qPhAuIPpx%2BBPWsntbud6l7K6QZ7efk1uL%2FnTATzTm9SCuiAp3iGmrEyctGuQs6tiyrx4ub4kdgC7J7355pL2Ntdj3i4f1uZnWtitPvGyBOEFwg7aiIDjUKVy9u5VU0%2BffR%2FPy5GF1N0ZYv2WNmfMJyBjYFDMd%2B73AQLXp9C%2FksNIFSRwQT0HrIchRGfMJmR2M0GOqUBsK7pgz%2FETcMA1SdAVor9LGcNp3RCe3m0CzKQ2O80qrBCVCINEDQ6Frpt5uXv%2Ff2xfk32VcJR6zt%2FSJ0kW8aNWko8orEuHqXO3rdL2b7KOf6DVcbhO2EtS8eH31VxGsjzg0tOwM2bbXWEMziTEQogsG0qc8NdD%2Fw1M09YnKauFosBslp8JWZo2%2FEr3a0%2B%2FIJgWLh9Iq2xsMCSeX4kqRi8WQvScaAD&X-Amz-Signature=bc3c46f2eb2d99941342a0e8a158b03146a60ed21f60f7232c631b1626da2125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEACKWEZ%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwHToQXC3W%2BibuTAQAJScpjYSYiQUwzb26pXitYnjnbAiApVDPu4xR5ykBzPDH7cfSQL18UppRRcUOmkCP4SJl8xSqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGmNbIOsLhnCdRAGYKtwDWEcyScm3%2F2%2FRBC2WCiTlAoiUEBWVifnVi5rYVIIjBqNA27seyBqt%2BF0SENiHqqFSVTvCRaaWsIM9lCXDVUVr473XODvLQgfriRwr2flLOfr%2B5G6pbLCwQLqK5tnrKeOwMiDTpR8p2KJNzke3%2FoQKEczxwzo8%2BhRIR8TySgtiH%2Fx7CDjl75EqPYSutUDe5Ysl4zm77PB%2BPI%2FnvEOz%2FsEIaf7Eti1U6kXokhgIWe%2B2892UkvDhq4ZaPWacLBbzl9qzDWSlwrbNvAtazxFSIUmsWMCbmVETHwboHsEJHCcUUXBEBGxrbUfL7ttt40ShUiMMu6vyg%2BkFm0IoWOaOLvr7UQ0Tz4zqr7SY7z9M5nPln73X8DjAMntH8dqMPf6uj3urTFYWgPqCNs6kERAdGPJ76qgZhN3h8dzH2xsi6uO%2BFt7%2FrYiQnkTkK%2BIq4UNeQmYmTJ4dKDKMrIiFPoI%2BZd8Bu%2FAvNOwGr60ZmDkhdih2F9PrKD7EIpAhCGGAyGMAAmGIBH77koQBqO6hWYCNAKLEcGDd2XebcxwkmzuLN2HXSWbltGOMBsAAF47epDn6Sy2%2Bkm5ps%2FieFip%2FY%2FQyZ5owVorTUtZ5sS1XUh2L5Oz9e2MhHpPhjFnA7Oc4ZCQwlZHYzQY6pgFkdpxC2Ao5UftsIpdjTSmj3c8%2FFRlWh8gPXkxUfabS5qSg74lyeuVLrhYHfX8lTEVMLU5n47w4Knwuf9tmDzgVXjr%2Bt1UexFzHPtwg5qL0JDCDkEyAnxEvGnn26xxVR%2BNZSnDDDI6cXV%2BGwFFZwUnqpHHBndQkgeln4hlMABlzzlcnSw4v40Ua3InAfMd8q%2FfrqbxCObHLXLi36uUNV1dB3WpC71Yo&X-Amz-Signature=df1db6c406b71cbf3b6692c2a98ebeb3a683bba24519bcb87ddfb0e8fa3e3bfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QRSRLCO%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyxuSF6QCQaREfmoBKnKEbRAcyhmM2tlocKQRtzn5MoAiEAr8UyjCSOS4Pg%2Bc0jbl0vhVO5JzeBXJr4sO5HykipwZgqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1ZaSoC4HxmxrvPPircA68mkZCDSHU4YkPnwbRvEyD5R37OND%2B5%2FZaYTgvy1f%2FH3SEhRaqBcTZrf56%2BHVno7PQJJadhQo3%2Bak8EBOuOh51Rh1bxCD7WiO%2FyV1SMQNZ%2BEaY8uPWnPahkF2ZHCNFwcXtBCBE6gWQTSAG%2FR24recxQKxUed5N5UrtNfq0RxCRSt%2BKi8%2B%2FhL3qon1zfhQCeCz2fmckrwWV5ECX3npEqykXH718Joy3Jga2yzhH1IRfJRS2NAeJdjrBnHv5tT%2FOF14t15zLSWZbuI%2Fpt0teymSR3rlPRIO%2F1QTKsvOPlHqEZEoF85Yd8ulgnk0lrr5mwN8JqDQQutx7euAl5XgA5bTuuxPc9moP0QtaQYCHNphrtS7yzpVbKOt71jLOxLEkW6YFcfCqM3Yk%2Bb%2FuLjn652oNjYXV%2Bg0blWsxiThDDGfi9CnLqfOl78tsaiWk0UW7m5qPhAuIPpx%2BBPWsntbud6l7K6QZ7efk1uL%2FnTATzTm9SCuiAp3iGmrEyctGuQs6tiyrx4ub4kdgC7J7355pL2Ntdj3i4f1uZnWtitPvGyBOEFwg7aiIDjUKVy9u5VU0%2BffR%2FPy5GF1N0ZYv2WNmfMJyBjYFDMd%2B73AQLXp9C%2FksNIFSRwQT0HrIchRGfMJmR2M0GOqUBsK7pgz%2FETcMA1SdAVor9LGcNp3RCe3m0CzKQ2O80qrBCVCINEDQ6Frpt5uXv%2Ff2xfk32VcJR6zt%2FSJ0kW8aNWko8orEuHqXO3rdL2b7KOf6DVcbhO2EtS8eH31VxGsjzg0tOwM2bbXWEMziTEQogsG0qc8NdD%2Fw1M09YnKauFosBslp8JWZo2%2FEr3a0%2B%2FIJgWLh9Iq2xsMCSeX4kqRi8WQvScaAD&X-Amz-Signature=f986670f5d4ec3df75829dfeeb508377c6a74fa4d835fa15ea6abf8502d045e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QRSRLCO%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyxuSF6QCQaREfmoBKnKEbRAcyhmM2tlocKQRtzn5MoAiEAr8UyjCSOS4Pg%2Bc0jbl0vhVO5JzeBXJr4sO5HykipwZgqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1ZaSoC4HxmxrvPPircA68mkZCDSHU4YkPnwbRvEyD5R37OND%2B5%2FZaYTgvy1f%2FH3SEhRaqBcTZrf56%2BHVno7PQJJadhQo3%2Bak8EBOuOh51Rh1bxCD7WiO%2FyV1SMQNZ%2BEaY8uPWnPahkF2ZHCNFwcXtBCBE6gWQTSAG%2FR24recxQKxUed5N5UrtNfq0RxCRSt%2BKi8%2B%2FhL3qon1zfhQCeCz2fmckrwWV5ECX3npEqykXH718Joy3Jga2yzhH1IRfJRS2NAeJdjrBnHv5tT%2FOF14t15zLSWZbuI%2Fpt0teymSR3rlPRIO%2F1QTKsvOPlHqEZEoF85Yd8ulgnk0lrr5mwN8JqDQQutx7euAl5XgA5bTuuxPc9moP0QtaQYCHNphrtS7yzpVbKOt71jLOxLEkW6YFcfCqM3Yk%2Bb%2FuLjn652oNjYXV%2Bg0blWsxiThDDGfi9CnLqfOl78tsaiWk0UW7m5qPhAuIPpx%2BBPWsntbud6l7K6QZ7efk1uL%2FnTATzTm9SCuiAp3iGmrEyctGuQs6tiyrx4ub4kdgC7J7355pL2Ntdj3i4f1uZnWtitPvGyBOEFwg7aiIDjUKVy9u5VU0%2BffR%2FPy5GF1N0ZYv2WNmfMJyBjYFDMd%2B73AQLXp9C%2FksNIFSRwQT0HrIchRGfMJmR2M0GOqUBsK7pgz%2FETcMA1SdAVor9LGcNp3RCe3m0CzKQ2O80qrBCVCINEDQ6Frpt5uXv%2Ff2xfk32VcJR6zt%2FSJ0kW8aNWko8orEuHqXO3rdL2b7KOf6DVcbhO2EtS8eH31VxGsjzg0tOwM2bbXWEMziTEQogsG0qc8NdD%2Fw1M09YnKauFosBslp8JWZo2%2FEr3a0%2B%2FIJgWLh9Iq2xsMCSeX4kqRi8WQvScaAD&X-Amz-Signature=ade08810d3c8ce43589f1e9f0cfbe853e236717bba9864d48b6f4fe8c3ad6763&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QRSRLCO%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyxuSF6QCQaREfmoBKnKEbRAcyhmM2tlocKQRtzn5MoAiEAr8UyjCSOS4Pg%2Bc0jbl0vhVO5JzeBXJr4sO5HykipwZgqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1ZaSoC4HxmxrvPPircA68mkZCDSHU4YkPnwbRvEyD5R37OND%2B5%2FZaYTgvy1f%2FH3SEhRaqBcTZrf56%2BHVno7PQJJadhQo3%2Bak8EBOuOh51Rh1bxCD7WiO%2FyV1SMQNZ%2BEaY8uPWnPahkF2ZHCNFwcXtBCBE6gWQTSAG%2FR24recxQKxUed5N5UrtNfq0RxCRSt%2BKi8%2B%2FhL3qon1zfhQCeCz2fmckrwWV5ECX3npEqykXH718Joy3Jga2yzhH1IRfJRS2NAeJdjrBnHv5tT%2FOF14t15zLSWZbuI%2Fpt0teymSR3rlPRIO%2F1QTKsvOPlHqEZEoF85Yd8ulgnk0lrr5mwN8JqDQQutx7euAl5XgA5bTuuxPc9moP0QtaQYCHNphrtS7yzpVbKOt71jLOxLEkW6YFcfCqM3Yk%2Bb%2FuLjn652oNjYXV%2Bg0blWsxiThDDGfi9CnLqfOl78tsaiWk0UW7m5qPhAuIPpx%2BBPWsntbud6l7K6QZ7efk1uL%2FnTATzTm9SCuiAp3iGmrEyctGuQs6tiyrx4ub4kdgC7J7355pL2Ntdj3i4f1uZnWtitPvGyBOEFwg7aiIDjUKVy9u5VU0%2BffR%2FPy5GF1N0ZYv2WNmfMJyBjYFDMd%2B73AQLXp9C%2FksNIFSRwQT0HrIchRGfMJmR2M0GOqUBsK7pgz%2FETcMA1SdAVor9LGcNp3RCe3m0CzKQ2O80qrBCVCINEDQ6Frpt5uXv%2Ff2xfk32VcJR6zt%2FSJ0kW8aNWko8orEuHqXO3rdL2b7KOf6DVcbhO2EtS8eH31VxGsjzg0tOwM2bbXWEMziTEQogsG0qc8NdD%2Fw1M09YnKauFosBslp8JWZo2%2FEr3a0%2B%2FIJgWLh9Iq2xsMCSeX4kqRi8WQvScaAD&X-Amz-Signature=579ac0efa6f3a2c766c2075cea0e32c752776529b6e1c3e581a5e96fa34d16b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QRSRLCO%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyxuSF6QCQaREfmoBKnKEbRAcyhmM2tlocKQRtzn5MoAiEAr8UyjCSOS4Pg%2Bc0jbl0vhVO5JzeBXJr4sO5HykipwZgqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1ZaSoC4HxmxrvPPircA68mkZCDSHU4YkPnwbRvEyD5R37OND%2B5%2FZaYTgvy1f%2FH3SEhRaqBcTZrf56%2BHVno7PQJJadhQo3%2Bak8EBOuOh51Rh1bxCD7WiO%2FyV1SMQNZ%2BEaY8uPWnPahkF2ZHCNFwcXtBCBE6gWQTSAG%2FR24recxQKxUed5N5UrtNfq0RxCRSt%2BKi8%2B%2FhL3qon1zfhQCeCz2fmckrwWV5ECX3npEqykXH718Joy3Jga2yzhH1IRfJRS2NAeJdjrBnHv5tT%2FOF14t15zLSWZbuI%2Fpt0teymSR3rlPRIO%2F1QTKsvOPlHqEZEoF85Yd8ulgnk0lrr5mwN8JqDQQutx7euAl5XgA5bTuuxPc9moP0QtaQYCHNphrtS7yzpVbKOt71jLOxLEkW6YFcfCqM3Yk%2Bb%2FuLjn652oNjYXV%2Bg0blWsxiThDDGfi9CnLqfOl78tsaiWk0UW7m5qPhAuIPpx%2BBPWsntbud6l7K6QZ7efk1uL%2FnTATzTm9SCuiAp3iGmrEyctGuQs6tiyrx4ub4kdgC7J7355pL2Ntdj3i4f1uZnWtitPvGyBOEFwg7aiIDjUKVy9u5VU0%2BffR%2FPy5GF1N0ZYv2WNmfMJyBjYFDMd%2B73AQLXp9C%2FksNIFSRwQT0HrIchRGfMJmR2M0GOqUBsK7pgz%2FETcMA1SdAVor9LGcNp3RCe3m0CzKQ2O80qrBCVCINEDQ6Frpt5uXv%2Ff2xfk32VcJR6zt%2FSJ0kW8aNWko8orEuHqXO3rdL2b7KOf6DVcbhO2EtS8eH31VxGsjzg0tOwM2bbXWEMziTEQogsG0qc8NdD%2Fw1M09YnKauFosBslp8JWZo2%2FEr3a0%2B%2FIJgWLh9Iq2xsMCSeX4kqRi8WQvScaAD&X-Amz-Signature=714a8f3b0888980216554a35a66a42b1afa272075e5f5977a4d974f3b5bfad97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QRSRLCO%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyxuSF6QCQaREfmoBKnKEbRAcyhmM2tlocKQRtzn5MoAiEAr8UyjCSOS4Pg%2Bc0jbl0vhVO5JzeBXJr4sO5HykipwZgqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1ZaSoC4HxmxrvPPircA68mkZCDSHU4YkPnwbRvEyD5R37OND%2B5%2FZaYTgvy1f%2FH3SEhRaqBcTZrf56%2BHVno7PQJJadhQo3%2Bak8EBOuOh51Rh1bxCD7WiO%2FyV1SMQNZ%2BEaY8uPWnPahkF2ZHCNFwcXtBCBE6gWQTSAG%2FR24recxQKxUed5N5UrtNfq0RxCRSt%2BKi8%2B%2FhL3qon1zfhQCeCz2fmckrwWV5ECX3npEqykXH718Joy3Jga2yzhH1IRfJRS2NAeJdjrBnHv5tT%2FOF14t15zLSWZbuI%2Fpt0teymSR3rlPRIO%2F1QTKsvOPlHqEZEoF85Yd8ulgnk0lrr5mwN8JqDQQutx7euAl5XgA5bTuuxPc9moP0QtaQYCHNphrtS7yzpVbKOt71jLOxLEkW6YFcfCqM3Yk%2Bb%2FuLjn652oNjYXV%2Bg0blWsxiThDDGfi9CnLqfOl78tsaiWk0UW7m5qPhAuIPpx%2BBPWsntbud6l7K6QZ7efk1uL%2FnTATzTm9SCuiAp3iGmrEyctGuQs6tiyrx4ub4kdgC7J7355pL2Ntdj3i4f1uZnWtitPvGyBOEFwg7aiIDjUKVy9u5VU0%2BffR%2FPy5GF1N0ZYv2WNmfMJyBjYFDMd%2B73AQLXp9C%2FksNIFSRwQT0HrIchRGfMJmR2M0GOqUBsK7pgz%2FETcMA1SdAVor9LGcNp3RCe3m0CzKQ2O80qrBCVCINEDQ6Frpt5uXv%2Ff2xfk32VcJR6zt%2FSJ0kW8aNWko8orEuHqXO3rdL2b7KOf6DVcbhO2EtS8eH31VxGsjzg0tOwM2bbXWEMziTEQogsG0qc8NdD%2Fw1M09YnKauFosBslp8JWZo2%2FEr3a0%2B%2FIJgWLh9Iq2xsMCSeX4kqRi8WQvScaAD&X-Amz-Signature=6052c4bad04bd149324b8043c2a294e38897c96e55b534dad07caa466ed8ed96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QRSRLCO%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyxuSF6QCQaREfmoBKnKEbRAcyhmM2tlocKQRtzn5MoAiEAr8UyjCSOS4Pg%2Bc0jbl0vhVO5JzeBXJr4sO5HykipwZgqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1ZaSoC4HxmxrvPPircA68mkZCDSHU4YkPnwbRvEyD5R37OND%2B5%2FZaYTgvy1f%2FH3SEhRaqBcTZrf56%2BHVno7PQJJadhQo3%2Bak8EBOuOh51Rh1bxCD7WiO%2FyV1SMQNZ%2BEaY8uPWnPahkF2ZHCNFwcXtBCBE6gWQTSAG%2FR24recxQKxUed5N5UrtNfq0RxCRSt%2BKi8%2B%2FhL3qon1zfhQCeCz2fmckrwWV5ECX3npEqykXH718Joy3Jga2yzhH1IRfJRS2NAeJdjrBnHv5tT%2FOF14t15zLSWZbuI%2Fpt0teymSR3rlPRIO%2F1QTKsvOPlHqEZEoF85Yd8ulgnk0lrr5mwN8JqDQQutx7euAl5XgA5bTuuxPc9moP0QtaQYCHNphrtS7yzpVbKOt71jLOxLEkW6YFcfCqM3Yk%2Bb%2FuLjn652oNjYXV%2Bg0blWsxiThDDGfi9CnLqfOl78tsaiWk0UW7m5qPhAuIPpx%2BBPWsntbud6l7K6QZ7efk1uL%2FnTATzTm9SCuiAp3iGmrEyctGuQs6tiyrx4ub4kdgC7J7355pL2Ntdj3i4f1uZnWtitPvGyBOEFwg7aiIDjUKVy9u5VU0%2BffR%2FPy5GF1N0ZYv2WNmfMJyBjYFDMd%2B73AQLXp9C%2FksNIFSRwQT0HrIchRGfMJmR2M0GOqUBsK7pgz%2FETcMA1SdAVor9LGcNp3RCe3m0CzKQ2O80qrBCVCINEDQ6Frpt5uXv%2Ff2xfk32VcJR6zt%2FSJ0kW8aNWko8orEuHqXO3rdL2b7KOf6DVcbhO2EtS8eH31VxGsjzg0tOwM2bbXWEMziTEQogsG0qc8NdD%2Fw1M09YnKauFosBslp8JWZo2%2FEr3a0%2B%2FIJgWLh9Iq2xsMCSeX4kqRi8WQvScaAD&X-Amz-Signature=66936d1a87c67c1a25584ffa8d36c525f17a4dab4f83f78ad76f807a1dfa7b94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


