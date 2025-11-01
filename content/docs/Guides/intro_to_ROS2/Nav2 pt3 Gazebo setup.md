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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPA2G43X%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCID7MfxdEzPHE6OpdF5uwcM4E0O%2BzBzsIAS4nq9e8Qjd9AiEA%2FW9qmovUFeleGs9ii2%2Bncc7zTUZFOG%2BxIgMTqYJbd%2BYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDGTXt5Ypz2Asv1Ew3SrcA7SIe2c1SrHeIoDEvTbJfd6X%2FGYd98iiGSbinmaKUQZLRXTG5K3Du1mfxIqouZpQhjWbiMVhgSppDoIqaCWf4Xhy0eyhaAWppLwLni3qaZiNSKeDfO1P2vvtxj6vb8jqL5YeUC9gRHvPlyPfYFXFdKBtt2BRJ7YdDlRdnWjwg%2BMKk1CYsFpLya4IIayfKqcxngT2izyY9uAAo8km%2BbT7C55N1B9IT9XnPQqRc1oRNjt4ThTvm2xsoT%2BKouJMm4Sr0%2FixjvZm1QRMFrQmqqKQa3FwKDfD0i4Mnmu1V11UmMT78Pgm6%2BH%2FIgjsCdwNO6MH6zw94%2B1FRT7DTWrrFJJYQ5fcJSiXsFlLKj6QOUepHnKfTx9dRJuW7KEiUBQ%2BZU8mckrbZQ%2BkmpK2g%2BziAnRxFKCF8rcr7LBoyEP19Dst6kqV%2BUrHtAgW7uM6ePo1PXgLsoLtVgTvwsA8JeHl%2B3ui89yHvKKCnEGl0eglubPRYj%2B%2BSOVjiB8oEX5%2FgR3x1EqaPjI0dGgbJXQgN1zyfEqEYvQNESvY1Y9g44u8WuEP42K0wcGdG3Sj%2Bxrz5LJ1EmoZEUsX8xRTz1ukBHNrAk0a4LLMU85zrr2Qbab6fw0Gmca9HuAmlOqaQmjHl8%2B3MJH7lMgGOqUBTCn2MvDjpYWnHHvB%2Bvg29UKv4KEkP8zdMZWek4P223QjYrTk8lajQpS1SHeDMHMEN0k8feY6K7oYod3dy2FugBrL1K1QJvPU6ax0VMTm9Fp9277gGD6RLfGT0su2ahXTK9SYuastGelbAepVCmHIX8U4lGW9SQLZP3z2dHk1gMbDLtznCUlKPy2Pw%2BRT9HSbdg7LAIgwaxAOAkOPMxsL8XUbgGgs&X-Amz-Signature=48bd7042aad722bbb1c0650303eaf33b1f4f8bc6c851ac340e62484c90a6ba35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPA2G43X%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCID7MfxdEzPHE6OpdF5uwcM4E0O%2BzBzsIAS4nq9e8Qjd9AiEA%2FW9qmovUFeleGs9ii2%2Bncc7zTUZFOG%2BxIgMTqYJbd%2BYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDGTXt5Ypz2Asv1Ew3SrcA7SIe2c1SrHeIoDEvTbJfd6X%2FGYd98iiGSbinmaKUQZLRXTG5K3Du1mfxIqouZpQhjWbiMVhgSppDoIqaCWf4Xhy0eyhaAWppLwLni3qaZiNSKeDfO1P2vvtxj6vb8jqL5YeUC9gRHvPlyPfYFXFdKBtt2BRJ7YdDlRdnWjwg%2BMKk1CYsFpLya4IIayfKqcxngT2izyY9uAAo8km%2BbT7C55N1B9IT9XnPQqRc1oRNjt4ThTvm2xsoT%2BKouJMm4Sr0%2FixjvZm1QRMFrQmqqKQa3FwKDfD0i4Mnmu1V11UmMT78Pgm6%2BH%2FIgjsCdwNO6MH6zw94%2B1FRT7DTWrrFJJYQ5fcJSiXsFlLKj6QOUepHnKfTx9dRJuW7KEiUBQ%2BZU8mckrbZQ%2BkmpK2g%2BziAnRxFKCF8rcr7LBoyEP19Dst6kqV%2BUrHtAgW7uM6ePo1PXgLsoLtVgTvwsA8JeHl%2B3ui89yHvKKCnEGl0eglubPRYj%2B%2BSOVjiB8oEX5%2FgR3x1EqaPjI0dGgbJXQgN1zyfEqEYvQNESvY1Y9g44u8WuEP42K0wcGdG3Sj%2Bxrz5LJ1EmoZEUsX8xRTz1ukBHNrAk0a4LLMU85zrr2Qbab6fw0Gmca9HuAmlOqaQmjHl8%2B3MJH7lMgGOqUBTCn2MvDjpYWnHHvB%2Bvg29UKv4KEkP8zdMZWek4P223QjYrTk8lajQpS1SHeDMHMEN0k8feY6K7oYod3dy2FugBrL1K1QJvPU6ax0VMTm9Fp9277gGD6RLfGT0su2ahXTK9SYuastGelbAepVCmHIX8U4lGW9SQLZP3z2dHk1gMbDLtznCUlKPy2Pw%2BRT9HSbdg7LAIgwaxAOAkOPMxsL8XUbgGgs&X-Amz-Signature=e95f544147df69e21d44fc0c29cf7eef805150d9c459af430ddd146d29680ea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPA2G43X%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCID7MfxdEzPHE6OpdF5uwcM4E0O%2BzBzsIAS4nq9e8Qjd9AiEA%2FW9qmovUFeleGs9ii2%2Bncc7zTUZFOG%2BxIgMTqYJbd%2BYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDGTXt5Ypz2Asv1Ew3SrcA7SIe2c1SrHeIoDEvTbJfd6X%2FGYd98iiGSbinmaKUQZLRXTG5K3Du1mfxIqouZpQhjWbiMVhgSppDoIqaCWf4Xhy0eyhaAWppLwLni3qaZiNSKeDfO1P2vvtxj6vb8jqL5YeUC9gRHvPlyPfYFXFdKBtt2BRJ7YdDlRdnWjwg%2BMKk1CYsFpLya4IIayfKqcxngT2izyY9uAAo8km%2BbT7C55N1B9IT9XnPQqRc1oRNjt4ThTvm2xsoT%2BKouJMm4Sr0%2FixjvZm1QRMFrQmqqKQa3FwKDfD0i4Mnmu1V11UmMT78Pgm6%2BH%2FIgjsCdwNO6MH6zw94%2B1FRT7DTWrrFJJYQ5fcJSiXsFlLKj6QOUepHnKfTx9dRJuW7KEiUBQ%2BZU8mckrbZQ%2BkmpK2g%2BziAnRxFKCF8rcr7LBoyEP19Dst6kqV%2BUrHtAgW7uM6ePo1PXgLsoLtVgTvwsA8JeHl%2B3ui89yHvKKCnEGl0eglubPRYj%2B%2BSOVjiB8oEX5%2FgR3x1EqaPjI0dGgbJXQgN1zyfEqEYvQNESvY1Y9g44u8WuEP42K0wcGdG3Sj%2Bxrz5LJ1EmoZEUsX8xRTz1ukBHNrAk0a4LLMU85zrr2Qbab6fw0Gmca9HuAmlOqaQmjHl8%2B3MJH7lMgGOqUBTCn2MvDjpYWnHHvB%2Bvg29UKv4KEkP8zdMZWek4P223QjYrTk8lajQpS1SHeDMHMEN0k8feY6K7oYod3dy2FugBrL1K1QJvPU6ax0VMTm9Fp9277gGD6RLfGT0su2ahXTK9SYuastGelbAepVCmHIX8U4lGW9SQLZP3z2dHk1gMbDLtznCUlKPy2Pw%2BRT9HSbdg7LAIgwaxAOAkOPMxsL8XUbgGgs&X-Amz-Signature=246e14114b5929113c2063722c0ebf7f879fab8dffcb43608b27ec64c479cd91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPA2G43X%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCID7MfxdEzPHE6OpdF5uwcM4E0O%2BzBzsIAS4nq9e8Qjd9AiEA%2FW9qmovUFeleGs9ii2%2Bncc7zTUZFOG%2BxIgMTqYJbd%2BYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDGTXt5Ypz2Asv1Ew3SrcA7SIe2c1SrHeIoDEvTbJfd6X%2FGYd98iiGSbinmaKUQZLRXTG5K3Du1mfxIqouZpQhjWbiMVhgSppDoIqaCWf4Xhy0eyhaAWppLwLni3qaZiNSKeDfO1P2vvtxj6vb8jqL5YeUC9gRHvPlyPfYFXFdKBtt2BRJ7YdDlRdnWjwg%2BMKk1CYsFpLya4IIayfKqcxngT2izyY9uAAo8km%2BbT7C55N1B9IT9XnPQqRc1oRNjt4ThTvm2xsoT%2BKouJMm4Sr0%2FixjvZm1QRMFrQmqqKQa3FwKDfD0i4Mnmu1V11UmMT78Pgm6%2BH%2FIgjsCdwNO6MH6zw94%2B1FRT7DTWrrFJJYQ5fcJSiXsFlLKj6QOUepHnKfTx9dRJuW7KEiUBQ%2BZU8mckrbZQ%2BkmpK2g%2BziAnRxFKCF8rcr7LBoyEP19Dst6kqV%2BUrHtAgW7uM6ePo1PXgLsoLtVgTvwsA8JeHl%2B3ui89yHvKKCnEGl0eglubPRYj%2B%2BSOVjiB8oEX5%2FgR3x1EqaPjI0dGgbJXQgN1zyfEqEYvQNESvY1Y9g44u8WuEP42K0wcGdG3Sj%2Bxrz5LJ1EmoZEUsX8xRTz1ukBHNrAk0a4LLMU85zrr2Qbab6fw0Gmca9HuAmlOqaQmjHl8%2B3MJH7lMgGOqUBTCn2MvDjpYWnHHvB%2Bvg29UKv4KEkP8zdMZWek4P223QjYrTk8lajQpS1SHeDMHMEN0k8feY6K7oYod3dy2FugBrL1K1QJvPU6ax0VMTm9Fp9277gGD6RLfGT0su2ahXTK9SYuastGelbAepVCmHIX8U4lGW9SQLZP3z2dHk1gMbDLtznCUlKPy2Pw%2BRT9HSbdg7LAIgwaxAOAkOPMxsL8XUbgGgs&X-Amz-Signature=6586c87cdd2025fc87db8fd276fd46a7a022a17d28839fe897a40009f6971c96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMX4V4I2%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQC6gnwkuC6E9H7HvLIGeRv%2BgoMF3AEts21UtDLfPoQssAIhAJCh%2BwXko8B%2BQGoAyYQYXEQcGYPQ6OE%2FYXCNYtHghKiwKv8DCCAQABoMNjM3NDIzMTgzODA1IgzYX%2BCHmX0mNDNk%2B8Mq3AMGhy4ijRri%2BIQLwdXsSqsh3kV8BgTZiF%2BM119AnoJMruFKT7dVeILfCtjXDMFp8ngPuXiCc0kJFzOY3ExoIBCsWKQXhGjZt7LqXzp3HOAM5VjAZZsim2jewblZvIjdxiHZtjgGSqm1K%2BF9Itt%2ByOjVQXXgEOebxhCaqsCiLI03tHgCPOoeSJXjmp9BYleYpROa5rwh8ggzGZezAeg1z4iMLu6c0sV9kBmlzg%2B5KiMKH0Ua%2BJcmWp%2BqxlcQlMIY3uHO4wxLsEppH4R0OaOj1GaEAZOzGLrmS0VtEsPblRU4P3oAzuMYmhtaChah22Ucl6VL3VibI9%2FKtO6ltk3cDZU1uQNpPtL%2B8%2FGpzOYauhhhdeXVpgjl35YWoQd8BdEi83BdzKhLRhQRlp6JhR8T3EotERwMdyP%2BwUn2ndwSC0gp6lICJ%2BA0u8dwZKph26RoIL3p05hH4rEjT%2FTBwHes5SDm2IiAd5F8AxZey0dQi14vqM2VoaANir524CeUJzRvkcyokiNiibdt08%2FR8vI6ipSOmVcAwvAAGMo0U7zR4%2BTGTlLCTHxQIsCdL1LITWwE3%2FPcjBMiCTmlZ4v5P5IIpDCsDSYF%2BX8%2F%2BMYGZyy8AXzN9vs5tS%2BZGqw1c%2BS%2FjTDs%2BpTIBjqkAexzFjpe8c3w8CO%2FyarmBpsiFrUZXkEA7mHTdww8U5UKGcCQFRbBtSGNdOPeLAVWKuI0y2plR7914RbpgMYv0hv8datbO%2FXd1K1OgTW32sAiL2O6TyASWlfH%2FP%2BZp15DNQmo7otWKv4%2FzxZaAn0NWk9gJ0FJcD32vO0lD5j3IekZeHG5%2Bq9ygl8S5odVhDxzNk8CixvIAWviEyCnB%2BMA%2FByTkWFK&X-Amz-Signature=bc7c406bd4de26ee06d5f9ed8fa00531cff9b95ba8b366bc2901225f55894d50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPA2G43X%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCID7MfxdEzPHE6OpdF5uwcM4E0O%2BzBzsIAS4nq9e8Qjd9AiEA%2FW9qmovUFeleGs9ii2%2Bncc7zTUZFOG%2BxIgMTqYJbd%2BYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDGTXt5Ypz2Asv1Ew3SrcA7SIe2c1SrHeIoDEvTbJfd6X%2FGYd98iiGSbinmaKUQZLRXTG5K3Du1mfxIqouZpQhjWbiMVhgSppDoIqaCWf4Xhy0eyhaAWppLwLni3qaZiNSKeDfO1P2vvtxj6vb8jqL5YeUC9gRHvPlyPfYFXFdKBtt2BRJ7YdDlRdnWjwg%2BMKk1CYsFpLya4IIayfKqcxngT2izyY9uAAo8km%2BbT7C55N1B9IT9XnPQqRc1oRNjt4ThTvm2xsoT%2BKouJMm4Sr0%2FixjvZm1QRMFrQmqqKQa3FwKDfD0i4Mnmu1V11UmMT78Pgm6%2BH%2FIgjsCdwNO6MH6zw94%2B1FRT7DTWrrFJJYQ5fcJSiXsFlLKj6QOUepHnKfTx9dRJuW7KEiUBQ%2BZU8mckrbZQ%2BkmpK2g%2BziAnRxFKCF8rcr7LBoyEP19Dst6kqV%2BUrHtAgW7uM6ePo1PXgLsoLtVgTvwsA8JeHl%2B3ui89yHvKKCnEGl0eglubPRYj%2B%2BSOVjiB8oEX5%2FgR3x1EqaPjI0dGgbJXQgN1zyfEqEYvQNESvY1Y9g44u8WuEP42K0wcGdG3Sj%2Bxrz5LJ1EmoZEUsX8xRTz1ukBHNrAk0a4LLMU85zrr2Qbab6fw0Gmca9HuAmlOqaQmjHl8%2B3MJH7lMgGOqUBTCn2MvDjpYWnHHvB%2Bvg29UKv4KEkP8zdMZWek4P223QjYrTk8lajQpS1SHeDMHMEN0k8feY6K7oYod3dy2FugBrL1K1QJvPU6ax0VMTm9Fp9277gGD6RLfGT0su2ahXTK9SYuastGelbAepVCmHIX8U4lGW9SQLZP3z2dHk1gMbDLtznCUlKPy2Pw%2BRT9HSbdg7LAIgwaxAOAkOPMxsL8XUbgGgs&X-Amz-Signature=681439c5f268ac946760452b6e6cdb358abe838ea086f3b1e0a1ad4aba347b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPA2G43X%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCID7MfxdEzPHE6OpdF5uwcM4E0O%2BzBzsIAS4nq9e8Qjd9AiEA%2FW9qmovUFeleGs9ii2%2Bncc7zTUZFOG%2BxIgMTqYJbd%2BYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDGTXt5Ypz2Asv1Ew3SrcA7SIe2c1SrHeIoDEvTbJfd6X%2FGYd98iiGSbinmaKUQZLRXTG5K3Du1mfxIqouZpQhjWbiMVhgSppDoIqaCWf4Xhy0eyhaAWppLwLni3qaZiNSKeDfO1P2vvtxj6vb8jqL5YeUC9gRHvPlyPfYFXFdKBtt2BRJ7YdDlRdnWjwg%2BMKk1CYsFpLya4IIayfKqcxngT2izyY9uAAo8km%2BbT7C55N1B9IT9XnPQqRc1oRNjt4ThTvm2xsoT%2BKouJMm4Sr0%2FixjvZm1QRMFrQmqqKQa3FwKDfD0i4Mnmu1V11UmMT78Pgm6%2BH%2FIgjsCdwNO6MH6zw94%2B1FRT7DTWrrFJJYQ5fcJSiXsFlLKj6QOUepHnKfTx9dRJuW7KEiUBQ%2BZU8mckrbZQ%2BkmpK2g%2BziAnRxFKCF8rcr7LBoyEP19Dst6kqV%2BUrHtAgW7uM6ePo1PXgLsoLtVgTvwsA8JeHl%2B3ui89yHvKKCnEGl0eglubPRYj%2B%2BSOVjiB8oEX5%2FgR3x1EqaPjI0dGgbJXQgN1zyfEqEYvQNESvY1Y9g44u8WuEP42K0wcGdG3Sj%2Bxrz5LJ1EmoZEUsX8xRTz1ukBHNrAk0a4LLMU85zrr2Qbab6fw0Gmca9HuAmlOqaQmjHl8%2B3MJH7lMgGOqUBTCn2MvDjpYWnHHvB%2Bvg29UKv4KEkP8zdMZWek4P223QjYrTk8lajQpS1SHeDMHMEN0k8feY6K7oYod3dy2FugBrL1K1QJvPU6ax0VMTm9Fp9277gGD6RLfGT0su2ahXTK9SYuastGelbAepVCmHIX8U4lGW9SQLZP3z2dHk1gMbDLtznCUlKPy2Pw%2BRT9HSbdg7LAIgwaxAOAkOPMxsL8XUbgGgs&X-Amz-Signature=01d68f72e6f9c28e8ddb053358501c2d396e0c67be19450b07ac1ff575ec6be1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPA2G43X%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCID7MfxdEzPHE6OpdF5uwcM4E0O%2BzBzsIAS4nq9e8Qjd9AiEA%2FW9qmovUFeleGs9ii2%2Bncc7zTUZFOG%2BxIgMTqYJbd%2BYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDGTXt5Ypz2Asv1Ew3SrcA7SIe2c1SrHeIoDEvTbJfd6X%2FGYd98iiGSbinmaKUQZLRXTG5K3Du1mfxIqouZpQhjWbiMVhgSppDoIqaCWf4Xhy0eyhaAWppLwLni3qaZiNSKeDfO1P2vvtxj6vb8jqL5YeUC9gRHvPlyPfYFXFdKBtt2BRJ7YdDlRdnWjwg%2BMKk1CYsFpLya4IIayfKqcxngT2izyY9uAAo8km%2BbT7C55N1B9IT9XnPQqRc1oRNjt4ThTvm2xsoT%2BKouJMm4Sr0%2FixjvZm1QRMFrQmqqKQa3FwKDfD0i4Mnmu1V11UmMT78Pgm6%2BH%2FIgjsCdwNO6MH6zw94%2B1FRT7DTWrrFJJYQ5fcJSiXsFlLKj6QOUepHnKfTx9dRJuW7KEiUBQ%2BZU8mckrbZQ%2BkmpK2g%2BziAnRxFKCF8rcr7LBoyEP19Dst6kqV%2BUrHtAgW7uM6ePo1PXgLsoLtVgTvwsA8JeHl%2B3ui89yHvKKCnEGl0eglubPRYj%2B%2BSOVjiB8oEX5%2FgR3x1EqaPjI0dGgbJXQgN1zyfEqEYvQNESvY1Y9g44u8WuEP42K0wcGdG3Sj%2Bxrz5LJ1EmoZEUsX8xRTz1ukBHNrAk0a4LLMU85zrr2Qbab6fw0Gmca9HuAmlOqaQmjHl8%2B3MJH7lMgGOqUBTCn2MvDjpYWnHHvB%2Bvg29UKv4KEkP8zdMZWek4P223QjYrTk8lajQpS1SHeDMHMEN0k8feY6K7oYod3dy2FugBrL1K1QJvPU6ax0VMTm9Fp9277gGD6RLfGT0su2ahXTK9SYuastGelbAepVCmHIX8U4lGW9SQLZP3z2dHk1gMbDLtznCUlKPy2Pw%2BRT9HSbdg7LAIgwaxAOAkOPMxsL8XUbgGgs&X-Amz-Signature=b1e0e113b20077479326e7e606c8a82f7046894e30765342b9f01a163a5ce970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPA2G43X%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCID7MfxdEzPHE6OpdF5uwcM4E0O%2BzBzsIAS4nq9e8Qjd9AiEA%2FW9qmovUFeleGs9ii2%2Bncc7zTUZFOG%2BxIgMTqYJbd%2BYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDGTXt5Ypz2Asv1Ew3SrcA7SIe2c1SrHeIoDEvTbJfd6X%2FGYd98iiGSbinmaKUQZLRXTG5K3Du1mfxIqouZpQhjWbiMVhgSppDoIqaCWf4Xhy0eyhaAWppLwLni3qaZiNSKeDfO1P2vvtxj6vb8jqL5YeUC9gRHvPlyPfYFXFdKBtt2BRJ7YdDlRdnWjwg%2BMKk1CYsFpLya4IIayfKqcxngT2izyY9uAAo8km%2BbT7C55N1B9IT9XnPQqRc1oRNjt4ThTvm2xsoT%2BKouJMm4Sr0%2FixjvZm1QRMFrQmqqKQa3FwKDfD0i4Mnmu1V11UmMT78Pgm6%2BH%2FIgjsCdwNO6MH6zw94%2B1FRT7DTWrrFJJYQ5fcJSiXsFlLKj6QOUepHnKfTx9dRJuW7KEiUBQ%2BZU8mckrbZQ%2BkmpK2g%2BziAnRxFKCF8rcr7LBoyEP19Dst6kqV%2BUrHtAgW7uM6ePo1PXgLsoLtVgTvwsA8JeHl%2B3ui89yHvKKCnEGl0eglubPRYj%2B%2BSOVjiB8oEX5%2FgR3x1EqaPjI0dGgbJXQgN1zyfEqEYvQNESvY1Y9g44u8WuEP42K0wcGdG3Sj%2Bxrz5LJ1EmoZEUsX8xRTz1ukBHNrAk0a4LLMU85zrr2Qbab6fw0Gmca9HuAmlOqaQmjHl8%2B3MJH7lMgGOqUBTCn2MvDjpYWnHHvB%2Bvg29UKv4KEkP8zdMZWek4P223QjYrTk8lajQpS1SHeDMHMEN0k8feY6K7oYod3dy2FugBrL1K1QJvPU6ax0VMTm9Fp9277gGD6RLfGT0su2ahXTK9SYuastGelbAepVCmHIX8U4lGW9SQLZP3z2dHk1gMbDLtznCUlKPy2Pw%2BRT9HSbdg7LAIgwaxAOAkOPMxsL8XUbgGgs&X-Amz-Signature=6dbdb19f19369ae5a97a3086c209aebdc1e6cc0ce25e17da40d40bceadc02d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPA2G43X%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCID7MfxdEzPHE6OpdF5uwcM4E0O%2BzBzsIAS4nq9e8Qjd9AiEA%2FW9qmovUFeleGs9ii2%2Bncc7zTUZFOG%2BxIgMTqYJbd%2BYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDGTXt5Ypz2Asv1Ew3SrcA7SIe2c1SrHeIoDEvTbJfd6X%2FGYd98iiGSbinmaKUQZLRXTG5K3Du1mfxIqouZpQhjWbiMVhgSppDoIqaCWf4Xhy0eyhaAWppLwLni3qaZiNSKeDfO1P2vvtxj6vb8jqL5YeUC9gRHvPlyPfYFXFdKBtt2BRJ7YdDlRdnWjwg%2BMKk1CYsFpLya4IIayfKqcxngT2izyY9uAAo8km%2BbT7C55N1B9IT9XnPQqRc1oRNjt4ThTvm2xsoT%2BKouJMm4Sr0%2FixjvZm1QRMFrQmqqKQa3FwKDfD0i4Mnmu1V11UmMT78Pgm6%2BH%2FIgjsCdwNO6MH6zw94%2B1FRT7DTWrrFJJYQ5fcJSiXsFlLKj6QOUepHnKfTx9dRJuW7KEiUBQ%2BZU8mckrbZQ%2BkmpK2g%2BziAnRxFKCF8rcr7LBoyEP19Dst6kqV%2BUrHtAgW7uM6ePo1PXgLsoLtVgTvwsA8JeHl%2B3ui89yHvKKCnEGl0eglubPRYj%2B%2BSOVjiB8oEX5%2FgR3x1EqaPjI0dGgbJXQgN1zyfEqEYvQNESvY1Y9g44u8WuEP42K0wcGdG3Sj%2Bxrz5LJ1EmoZEUsX8xRTz1ukBHNrAk0a4LLMU85zrr2Qbab6fw0Gmca9HuAmlOqaQmjHl8%2B3MJH7lMgGOqUBTCn2MvDjpYWnHHvB%2Bvg29UKv4KEkP8zdMZWek4P223QjYrTk8lajQpS1SHeDMHMEN0k8feY6K7oYod3dy2FugBrL1K1QJvPU6ax0VMTm9Fp9277gGD6RLfGT0su2ahXTK9SYuastGelbAepVCmHIX8U4lGW9SQLZP3z2dHk1gMbDLtznCUlKPy2Pw%2BRT9HSbdg7LAIgwaxAOAkOPMxsL8XUbgGgs&X-Amz-Signature=9fe68a52b4ee9a4b55e701b457c3c913a2f1f4011dab9aa858f2cafac9aa9bcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPA2G43X%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCID7MfxdEzPHE6OpdF5uwcM4E0O%2BzBzsIAS4nq9e8Qjd9AiEA%2FW9qmovUFeleGs9ii2%2Bncc7zTUZFOG%2BxIgMTqYJbd%2BYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDGTXt5Ypz2Asv1Ew3SrcA7SIe2c1SrHeIoDEvTbJfd6X%2FGYd98iiGSbinmaKUQZLRXTG5K3Du1mfxIqouZpQhjWbiMVhgSppDoIqaCWf4Xhy0eyhaAWppLwLni3qaZiNSKeDfO1P2vvtxj6vb8jqL5YeUC9gRHvPlyPfYFXFdKBtt2BRJ7YdDlRdnWjwg%2BMKk1CYsFpLya4IIayfKqcxngT2izyY9uAAo8km%2BbT7C55N1B9IT9XnPQqRc1oRNjt4ThTvm2xsoT%2BKouJMm4Sr0%2FixjvZm1QRMFrQmqqKQa3FwKDfD0i4Mnmu1V11UmMT78Pgm6%2BH%2FIgjsCdwNO6MH6zw94%2B1FRT7DTWrrFJJYQ5fcJSiXsFlLKj6QOUepHnKfTx9dRJuW7KEiUBQ%2BZU8mckrbZQ%2BkmpK2g%2BziAnRxFKCF8rcr7LBoyEP19Dst6kqV%2BUrHtAgW7uM6ePo1PXgLsoLtVgTvwsA8JeHl%2B3ui89yHvKKCnEGl0eglubPRYj%2B%2BSOVjiB8oEX5%2FgR3x1EqaPjI0dGgbJXQgN1zyfEqEYvQNESvY1Y9g44u8WuEP42K0wcGdG3Sj%2Bxrz5LJ1EmoZEUsX8xRTz1ukBHNrAk0a4LLMU85zrr2Qbab6fw0Gmca9HuAmlOqaQmjHl8%2B3MJH7lMgGOqUBTCn2MvDjpYWnHHvB%2Bvg29UKv4KEkP8zdMZWek4P223QjYrTk8lajQpS1SHeDMHMEN0k8feY6K7oYod3dy2FugBrL1K1QJvPU6ax0VMTm9Fp9277gGD6RLfGT0su2ahXTK9SYuastGelbAepVCmHIX8U4lGW9SQLZP3z2dHk1gMbDLtznCUlKPy2Pw%2BRT9HSbdg7LAIgwaxAOAkOPMxsL8XUbgGgs&X-Amz-Signature=516f50fc5c46241d21398f38e5181f38037243f50c9551f39e37bd4410d11cbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


