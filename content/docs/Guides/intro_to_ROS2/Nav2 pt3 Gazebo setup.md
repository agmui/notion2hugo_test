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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DRB6OAX%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPy5veEWs1%2BiSoPYaWfKomPMGj5paA0ewOSbINqLK9xgIgEU78pbl3AwNGlhTUtUYEUqN1CeKImgvccpsNx1sGGGAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGAdk328RsudZqHEHSrcA2cJbRngmomJRt3hpKwiz5Ay4uO1MEXkZVAjGdo%2F6vKmlwE7ZXOA8Love%2FYF8BPNDrfCaxjAG6%2BSevWD%2FTmF%2B0bibdoWL65ziH%2BPithUH7b4skObytTB%2By3klta2e4oYHcls2QLkqswh%2Fa7vbjHS9FlTFpr1hu0vIuj5C%2F0cf6zVHnFbeoaclYHPGlmvsIxTn2vKS7%2FlIMknECo6xY9SXeqxSgXllpLXeb6mzH3VWfEh0XFf0o7fBhGG5YrA6CbXWiblxhbVgd3%2F9E015vmKzsWzZBteDHrYQpMCYuSqbuD0d%2FpzmfVD%2FqL4%2FV0bW%2B2TdWKGDhFTeCV6W7IB1o8U342ZNzFo4LAxu%2BxEjooAdxTGOgoOEaX0R508inJMMirKwob1i2o8Iutz476taSyd5sdBvj8esBpkkqjnteYWV9BYQxyRXU6dSOZMWxEDOojYp0Gp3KQdBstUHHQ77ibCoTh%2BGyWqPOPgrBAkjAk7CGobqsk9ZBOHsSyZnKiYU2na%2Fdsef1HnWo%2BT6kezqk4J5zMkegz3zKntlFDLNEZt2PUHSN9vIFrjZDBN6rK6pIMbOIhDTAWCz9HYqu8q0K429PLu0u3pPGKMlgIy9a42VpHHC3fTF%2BIbd1Ghe5MXMKSvjs0GOqUB%2FGXMo%2BbJkH3LzTAo%2BUWKTT2lGma%2B1RSO7kxz7vOWVjmmh2Mi470XsMpCbR0aRSj9sjh3r0WUpieKtpAUnkhgR4gTy6Btlhj%2F%2F%2BX7Z%2Bg3yaXcKCfF2A%2BSRqEGGeWeycGTsyKabqvmeXK4AN3FzRzQH%2B0qEQdK%2BrUdPtLi%2F6hMIyUfoX%2BDcRBQDt7PFd4YejoVRQat%2BvgcgDCWaMjSOAbwoFGjkeQL&X-Amz-Signature=d01416c5daa59f07dee40ca0c34f85d4b815c05fccd2640553d6b7b2251565ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DRB6OAX%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPy5veEWs1%2BiSoPYaWfKomPMGj5paA0ewOSbINqLK9xgIgEU78pbl3AwNGlhTUtUYEUqN1CeKImgvccpsNx1sGGGAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGAdk328RsudZqHEHSrcA2cJbRngmomJRt3hpKwiz5Ay4uO1MEXkZVAjGdo%2F6vKmlwE7ZXOA8Love%2FYF8BPNDrfCaxjAG6%2BSevWD%2FTmF%2B0bibdoWL65ziH%2BPithUH7b4skObytTB%2By3klta2e4oYHcls2QLkqswh%2Fa7vbjHS9FlTFpr1hu0vIuj5C%2F0cf6zVHnFbeoaclYHPGlmvsIxTn2vKS7%2FlIMknECo6xY9SXeqxSgXllpLXeb6mzH3VWfEh0XFf0o7fBhGG5YrA6CbXWiblxhbVgd3%2F9E015vmKzsWzZBteDHrYQpMCYuSqbuD0d%2FpzmfVD%2FqL4%2FV0bW%2B2TdWKGDhFTeCV6W7IB1o8U342ZNzFo4LAxu%2BxEjooAdxTGOgoOEaX0R508inJMMirKwob1i2o8Iutz476taSyd5sdBvj8esBpkkqjnteYWV9BYQxyRXU6dSOZMWxEDOojYp0Gp3KQdBstUHHQ77ibCoTh%2BGyWqPOPgrBAkjAk7CGobqsk9ZBOHsSyZnKiYU2na%2Fdsef1HnWo%2BT6kezqk4J5zMkegz3zKntlFDLNEZt2PUHSN9vIFrjZDBN6rK6pIMbOIhDTAWCz9HYqu8q0K429PLu0u3pPGKMlgIy9a42VpHHC3fTF%2BIbd1Ghe5MXMKSvjs0GOqUB%2FGXMo%2BbJkH3LzTAo%2BUWKTT2lGma%2B1RSO7kxz7vOWVjmmh2Mi470XsMpCbR0aRSj9sjh3r0WUpieKtpAUnkhgR4gTy6Btlhj%2F%2F%2BX7Z%2Bg3yaXcKCfF2A%2BSRqEGGeWeycGTsyKabqvmeXK4AN3FzRzQH%2B0qEQdK%2BrUdPtLi%2F6hMIyUfoX%2BDcRBQDt7PFd4YejoVRQat%2BvgcgDCWaMjSOAbwoFGjkeQL&X-Amz-Signature=56bab90856749ed6e739eb6f4c2c3a34a7e89f59e6530653f7507d80e5841417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DRB6OAX%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPy5veEWs1%2BiSoPYaWfKomPMGj5paA0ewOSbINqLK9xgIgEU78pbl3AwNGlhTUtUYEUqN1CeKImgvccpsNx1sGGGAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGAdk328RsudZqHEHSrcA2cJbRngmomJRt3hpKwiz5Ay4uO1MEXkZVAjGdo%2F6vKmlwE7ZXOA8Love%2FYF8BPNDrfCaxjAG6%2BSevWD%2FTmF%2B0bibdoWL65ziH%2BPithUH7b4skObytTB%2By3klta2e4oYHcls2QLkqswh%2Fa7vbjHS9FlTFpr1hu0vIuj5C%2F0cf6zVHnFbeoaclYHPGlmvsIxTn2vKS7%2FlIMknECo6xY9SXeqxSgXllpLXeb6mzH3VWfEh0XFf0o7fBhGG5YrA6CbXWiblxhbVgd3%2F9E015vmKzsWzZBteDHrYQpMCYuSqbuD0d%2FpzmfVD%2FqL4%2FV0bW%2B2TdWKGDhFTeCV6W7IB1o8U342ZNzFo4LAxu%2BxEjooAdxTGOgoOEaX0R508inJMMirKwob1i2o8Iutz476taSyd5sdBvj8esBpkkqjnteYWV9BYQxyRXU6dSOZMWxEDOojYp0Gp3KQdBstUHHQ77ibCoTh%2BGyWqPOPgrBAkjAk7CGobqsk9ZBOHsSyZnKiYU2na%2Fdsef1HnWo%2BT6kezqk4J5zMkegz3zKntlFDLNEZt2PUHSN9vIFrjZDBN6rK6pIMbOIhDTAWCz9HYqu8q0K429PLu0u3pPGKMlgIy9a42VpHHC3fTF%2BIbd1Ghe5MXMKSvjs0GOqUB%2FGXMo%2BbJkH3LzTAo%2BUWKTT2lGma%2B1RSO7kxz7vOWVjmmh2Mi470XsMpCbR0aRSj9sjh3r0WUpieKtpAUnkhgR4gTy6Btlhj%2F%2F%2BX7Z%2Bg3yaXcKCfF2A%2BSRqEGGeWeycGTsyKabqvmeXK4AN3FzRzQH%2B0qEQdK%2BrUdPtLi%2F6hMIyUfoX%2BDcRBQDt7PFd4YejoVRQat%2BvgcgDCWaMjSOAbwoFGjkeQL&X-Amz-Signature=a9bb66e0cb3f5c3a6476805e24feb0a0f9873d510a86901b2ea0c03053485920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DRB6OAX%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPy5veEWs1%2BiSoPYaWfKomPMGj5paA0ewOSbINqLK9xgIgEU78pbl3AwNGlhTUtUYEUqN1CeKImgvccpsNx1sGGGAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGAdk328RsudZqHEHSrcA2cJbRngmomJRt3hpKwiz5Ay4uO1MEXkZVAjGdo%2F6vKmlwE7ZXOA8Love%2FYF8BPNDrfCaxjAG6%2BSevWD%2FTmF%2B0bibdoWL65ziH%2BPithUH7b4skObytTB%2By3klta2e4oYHcls2QLkqswh%2Fa7vbjHS9FlTFpr1hu0vIuj5C%2F0cf6zVHnFbeoaclYHPGlmvsIxTn2vKS7%2FlIMknECo6xY9SXeqxSgXllpLXeb6mzH3VWfEh0XFf0o7fBhGG5YrA6CbXWiblxhbVgd3%2F9E015vmKzsWzZBteDHrYQpMCYuSqbuD0d%2FpzmfVD%2FqL4%2FV0bW%2B2TdWKGDhFTeCV6W7IB1o8U342ZNzFo4LAxu%2BxEjooAdxTGOgoOEaX0R508inJMMirKwob1i2o8Iutz476taSyd5sdBvj8esBpkkqjnteYWV9BYQxyRXU6dSOZMWxEDOojYp0Gp3KQdBstUHHQ77ibCoTh%2BGyWqPOPgrBAkjAk7CGobqsk9ZBOHsSyZnKiYU2na%2Fdsef1HnWo%2BT6kezqk4J5zMkegz3zKntlFDLNEZt2PUHSN9vIFrjZDBN6rK6pIMbOIhDTAWCz9HYqu8q0K429PLu0u3pPGKMlgIy9a42VpHHC3fTF%2BIbd1Ghe5MXMKSvjs0GOqUB%2FGXMo%2BbJkH3LzTAo%2BUWKTT2lGma%2B1RSO7kxz7vOWVjmmh2Mi470XsMpCbR0aRSj9sjh3r0WUpieKtpAUnkhgR4gTy6Btlhj%2F%2F%2BX7Z%2Bg3yaXcKCfF2A%2BSRqEGGeWeycGTsyKabqvmeXK4AN3FzRzQH%2B0qEQdK%2BrUdPtLi%2F6hMIyUfoX%2BDcRBQDt7PFd4YejoVRQat%2BvgcgDCWaMjSOAbwoFGjkeQL&X-Amz-Signature=455740b6a607576213611d6f35e16584ee43b149a354b8361b6283b1c9919cf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE6NRCFD%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFdUuNRQ3x0sGxuzgOUz%2FSggRBIEYl92FJLqjYbnF32AIgPWdLA6wkbshNA%2BN2RfInv7zK%2BmpOt2oJkIaquK2Ks18q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCLbYvOC1DCqnQ2DYSrcA9MZOjB9XB3woifXUBh3Y8%2F3Ac06js74kwVEDLRzuVsUdbdjJvhbAEPZLRe7vCDd3pf4Xw5omAuLCT2m1skIKnNw706rCcfbzul7Nraj%2F1L5gv3YQmr0xiLH9p1i0qYo%2FKYguTc8KvjgsSqkXTLv8F5lLxwoj1SsCwyvWXWICpskyrE0X%2FUW2lOg3fJ8P7USFTgr3JsIJtstZ%2B7VSvwxanOFp9RZMXABvqjMAEBhZx7D24QuYUoz42qR%2FmO6fbUOqfzHrtFcdE0mii6Drsd0AM2DQD7cxapTXINkVTv%2FUs8%2B5fkkf30zIbAFelR4yGk1PJ1WMyxia5%2B8jg%2Ba8OdvCB8uAuMxEEXR6XUxd%2BP0ZZQxQ8pIj4bvkikTyDtLq2coJhBh9deFODgEaE%2B%2BcgLmWN562OMrpEEa6IQ44Z%2FqTc3g2GyuzBdVOV%2Fckt%2FYbIYLwdBRccs2R7cuurtnrTTbjJY%2BGlyV0VqmiY%2B4l3OXmmIgBp%2FrBkum2%2FeGVPck14Rtw6VRgD97F41R%2BRhsCXtQXOOBeEP4cYUZJPGviW32fIhpgjUm7Bnvacog4eJgkOtpwrFsb3LjED4EJHmsHmUR1HD8mJ34lVxy%2BofdP1doHV74iALTge6dtNyCgwggMJ6ujs0GOqUBzhwcEK6HnHqRn4GjejfwWKlLD8drvjbt7AFxNoRbSSQHe%2BDWImtE4n90GEG3%2BH3f1cJ470uMs%2FX9JjE05WXaKnIomaVcxqYhUakEGFGvLXY00FzRohOlwr%2BT4j0rboDjwWQfmxuFKa7sKr%2B2ZB2K31KiIuPAiimtS%2FC0SA9j0iQ14mYRcaPY2WBZCSA0BHXHu49nC3lI0ufcnxEgLx5PfsJi0PIO&X-Amz-Signature=0cbcdab0c2b6067e3eff45bedb7d6f5456f02196e7616363beb69490dda5cec8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DRB6OAX%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPy5veEWs1%2BiSoPYaWfKomPMGj5paA0ewOSbINqLK9xgIgEU78pbl3AwNGlhTUtUYEUqN1CeKImgvccpsNx1sGGGAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGAdk328RsudZqHEHSrcA2cJbRngmomJRt3hpKwiz5Ay4uO1MEXkZVAjGdo%2F6vKmlwE7ZXOA8Love%2FYF8BPNDrfCaxjAG6%2BSevWD%2FTmF%2B0bibdoWL65ziH%2BPithUH7b4skObytTB%2By3klta2e4oYHcls2QLkqswh%2Fa7vbjHS9FlTFpr1hu0vIuj5C%2F0cf6zVHnFbeoaclYHPGlmvsIxTn2vKS7%2FlIMknECo6xY9SXeqxSgXllpLXeb6mzH3VWfEh0XFf0o7fBhGG5YrA6CbXWiblxhbVgd3%2F9E015vmKzsWzZBteDHrYQpMCYuSqbuD0d%2FpzmfVD%2FqL4%2FV0bW%2B2TdWKGDhFTeCV6W7IB1o8U342ZNzFo4LAxu%2BxEjooAdxTGOgoOEaX0R508inJMMirKwob1i2o8Iutz476taSyd5sdBvj8esBpkkqjnteYWV9BYQxyRXU6dSOZMWxEDOojYp0Gp3KQdBstUHHQ77ibCoTh%2BGyWqPOPgrBAkjAk7CGobqsk9ZBOHsSyZnKiYU2na%2Fdsef1HnWo%2BT6kezqk4J5zMkegz3zKntlFDLNEZt2PUHSN9vIFrjZDBN6rK6pIMbOIhDTAWCz9HYqu8q0K429PLu0u3pPGKMlgIy9a42VpHHC3fTF%2BIbd1Ghe5MXMKSvjs0GOqUB%2FGXMo%2BbJkH3LzTAo%2BUWKTT2lGma%2B1RSO7kxz7vOWVjmmh2Mi470XsMpCbR0aRSj9sjh3r0WUpieKtpAUnkhgR4gTy6Btlhj%2F%2F%2BX7Z%2Bg3yaXcKCfF2A%2BSRqEGGeWeycGTsyKabqvmeXK4AN3FzRzQH%2B0qEQdK%2BrUdPtLi%2F6hMIyUfoX%2BDcRBQDt7PFd4YejoVRQat%2BvgcgDCWaMjSOAbwoFGjkeQL&X-Amz-Signature=fe86cf9feb29ebd6084d0839ea0e72561511986731b37110eaff503815ce4df2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DRB6OAX%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPy5veEWs1%2BiSoPYaWfKomPMGj5paA0ewOSbINqLK9xgIgEU78pbl3AwNGlhTUtUYEUqN1CeKImgvccpsNx1sGGGAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGAdk328RsudZqHEHSrcA2cJbRngmomJRt3hpKwiz5Ay4uO1MEXkZVAjGdo%2F6vKmlwE7ZXOA8Love%2FYF8BPNDrfCaxjAG6%2BSevWD%2FTmF%2B0bibdoWL65ziH%2BPithUH7b4skObytTB%2By3klta2e4oYHcls2QLkqswh%2Fa7vbjHS9FlTFpr1hu0vIuj5C%2F0cf6zVHnFbeoaclYHPGlmvsIxTn2vKS7%2FlIMknECo6xY9SXeqxSgXllpLXeb6mzH3VWfEh0XFf0o7fBhGG5YrA6CbXWiblxhbVgd3%2F9E015vmKzsWzZBteDHrYQpMCYuSqbuD0d%2FpzmfVD%2FqL4%2FV0bW%2B2TdWKGDhFTeCV6W7IB1o8U342ZNzFo4LAxu%2BxEjooAdxTGOgoOEaX0R508inJMMirKwob1i2o8Iutz476taSyd5sdBvj8esBpkkqjnteYWV9BYQxyRXU6dSOZMWxEDOojYp0Gp3KQdBstUHHQ77ibCoTh%2BGyWqPOPgrBAkjAk7CGobqsk9ZBOHsSyZnKiYU2na%2Fdsef1HnWo%2BT6kezqk4J5zMkegz3zKntlFDLNEZt2PUHSN9vIFrjZDBN6rK6pIMbOIhDTAWCz9HYqu8q0K429PLu0u3pPGKMlgIy9a42VpHHC3fTF%2BIbd1Ghe5MXMKSvjs0GOqUB%2FGXMo%2BbJkH3LzTAo%2BUWKTT2lGma%2B1RSO7kxz7vOWVjmmh2Mi470XsMpCbR0aRSj9sjh3r0WUpieKtpAUnkhgR4gTy6Btlhj%2F%2F%2BX7Z%2Bg3yaXcKCfF2A%2BSRqEGGeWeycGTsyKabqvmeXK4AN3FzRzQH%2B0qEQdK%2BrUdPtLi%2F6hMIyUfoX%2BDcRBQDt7PFd4YejoVRQat%2BvgcgDCWaMjSOAbwoFGjkeQL&X-Amz-Signature=0888bf1db6a56d85ddfea8ee249f89fb36497387f27fbff871e865f16c0d5f49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DRB6OAX%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPy5veEWs1%2BiSoPYaWfKomPMGj5paA0ewOSbINqLK9xgIgEU78pbl3AwNGlhTUtUYEUqN1CeKImgvccpsNx1sGGGAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGAdk328RsudZqHEHSrcA2cJbRngmomJRt3hpKwiz5Ay4uO1MEXkZVAjGdo%2F6vKmlwE7ZXOA8Love%2FYF8BPNDrfCaxjAG6%2BSevWD%2FTmF%2B0bibdoWL65ziH%2BPithUH7b4skObytTB%2By3klta2e4oYHcls2QLkqswh%2Fa7vbjHS9FlTFpr1hu0vIuj5C%2F0cf6zVHnFbeoaclYHPGlmvsIxTn2vKS7%2FlIMknECo6xY9SXeqxSgXllpLXeb6mzH3VWfEh0XFf0o7fBhGG5YrA6CbXWiblxhbVgd3%2F9E015vmKzsWzZBteDHrYQpMCYuSqbuD0d%2FpzmfVD%2FqL4%2FV0bW%2B2TdWKGDhFTeCV6W7IB1o8U342ZNzFo4LAxu%2BxEjooAdxTGOgoOEaX0R508inJMMirKwob1i2o8Iutz476taSyd5sdBvj8esBpkkqjnteYWV9BYQxyRXU6dSOZMWxEDOojYp0Gp3KQdBstUHHQ77ibCoTh%2BGyWqPOPgrBAkjAk7CGobqsk9ZBOHsSyZnKiYU2na%2Fdsef1HnWo%2BT6kezqk4J5zMkegz3zKntlFDLNEZt2PUHSN9vIFrjZDBN6rK6pIMbOIhDTAWCz9HYqu8q0K429PLu0u3pPGKMlgIy9a42VpHHC3fTF%2BIbd1Ghe5MXMKSvjs0GOqUB%2FGXMo%2BbJkH3LzTAo%2BUWKTT2lGma%2B1RSO7kxz7vOWVjmmh2Mi470XsMpCbR0aRSj9sjh3r0WUpieKtpAUnkhgR4gTy6Btlhj%2F%2F%2BX7Z%2Bg3yaXcKCfF2A%2BSRqEGGeWeycGTsyKabqvmeXK4AN3FzRzQH%2B0qEQdK%2BrUdPtLi%2F6hMIyUfoX%2BDcRBQDt7PFd4YejoVRQat%2BvgcgDCWaMjSOAbwoFGjkeQL&X-Amz-Signature=ae6af21c0b6969c2e3e63d7d8c6a18e24dab517081ca1aa84f2bb612dd50319f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DRB6OAX%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPy5veEWs1%2BiSoPYaWfKomPMGj5paA0ewOSbINqLK9xgIgEU78pbl3AwNGlhTUtUYEUqN1CeKImgvccpsNx1sGGGAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGAdk328RsudZqHEHSrcA2cJbRngmomJRt3hpKwiz5Ay4uO1MEXkZVAjGdo%2F6vKmlwE7ZXOA8Love%2FYF8BPNDrfCaxjAG6%2BSevWD%2FTmF%2B0bibdoWL65ziH%2BPithUH7b4skObytTB%2By3klta2e4oYHcls2QLkqswh%2Fa7vbjHS9FlTFpr1hu0vIuj5C%2F0cf6zVHnFbeoaclYHPGlmvsIxTn2vKS7%2FlIMknECo6xY9SXeqxSgXllpLXeb6mzH3VWfEh0XFf0o7fBhGG5YrA6CbXWiblxhbVgd3%2F9E015vmKzsWzZBteDHrYQpMCYuSqbuD0d%2FpzmfVD%2FqL4%2FV0bW%2B2TdWKGDhFTeCV6W7IB1o8U342ZNzFo4LAxu%2BxEjooAdxTGOgoOEaX0R508inJMMirKwob1i2o8Iutz476taSyd5sdBvj8esBpkkqjnteYWV9BYQxyRXU6dSOZMWxEDOojYp0Gp3KQdBstUHHQ77ibCoTh%2BGyWqPOPgrBAkjAk7CGobqsk9ZBOHsSyZnKiYU2na%2Fdsef1HnWo%2BT6kezqk4J5zMkegz3zKntlFDLNEZt2PUHSN9vIFrjZDBN6rK6pIMbOIhDTAWCz9HYqu8q0K429PLu0u3pPGKMlgIy9a42VpHHC3fTF%2BIbd1Ghe5MXMKSvjs0GOqUB%2FGXMo%2BbJkH3LzTAo%2BUWKTT2lGma%2B1RSO7kxz7vOWVjmmh2Mi470XsMpCbR0aRSj9sjh3r0WUpieKtpAUnkhgR4gTy6Btlhj%2F%2F%2BX7Z%2Bg3yaXcKCfF2A%2BSRqEGGeWeycGTsyKabqvmeXK4AN3FzRzQH%2B0qEQdK%2BrUdPtLi%2F6hMIyUfoX%2BDcRBQDt7PFd4YejoVRQat%2BvgcgDCWaMjSOAbwoFGjkeQL&X-Amz-Signature=46b42ddedc55beeab130c57b39f1d9bedddcff378301e98ccf1b9274024071d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DRB6OAX%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPy5veEWs1%2BiSoPYaWfKomPMGj5paA0ewOSbINqLK9xgIgEU78pbl3AwNGlhTUtUYEUqN1CeKImgvccpsNx1sGGGAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGAdk328RsudZqHEHSrcA2cJbRngmomJRt3hpKwiz5Ay4uO1MEXkZVAjGdo%2F6vKmlwE7ZXOA8Love%2FYF8BPNDrfCaxjAG6%2BSevWD%2FTmF%2B0bibdoWL65ziH%2BPithUH7b4skObytTB%2By3klta2e4oYHcls2QLkqswh%2Fa7vbjHS9FlTFpr1hu0vIuj5C%2F0cf6zVHnFbeoaclYHPGlmvsIxTn2vKS7%2FlIMknECo6xY9SXeqxSgXllpLXeb6mzH3VWfEh0XFf0o7fBhGG5YrA6CbXWiblxhbVgd3%2F9E015vmKzsWzZBteDHrYQpMCYuSqbuD0d%2FpzmfVD%2FqL4%2FV0bW%2B2TdWKGDhFTeCV6W7IB1o8U342ZNzFo4LAxu%2BxEjooAdxTGOgoOEaX0R508inJMMirKwob1i2o8Iutz476taSyd5sdBvj8esBpkkqjnteYWV9BYQxyRXU6dSOZMWxEDOojYp0Gp3KQdBstUHHQ77ibCoTh%2BGyWqPOPgrBAkjAk7CGobqsk9ZBOHsSyZnKiYU2na%2Fdsef1HnWo%2BT6kezqk4J5zMkegz3zKntlFDLNEZt2PUHSN9vIFrjZDBN6rK6pIMbOIhDTAWCz9HYqu8q0K429PLu0u3pPGKMlgIy9a42VpHHC3fTF%2BIbd1Ghe5MXMKSvjs0GOqUB%2FGXMo%2BbJkH3LzTAo%2BUWKTT2lGma%2B1RSO7kxz7vOWVjmmh2Mi470XsMpCbR0aRSj9sjh3r0WUpieKtpAUnkhgR4gTy6Btlhj%2F%2F%2BX7Z%2Bg3yaXcKCfF2A%2BSRqEGGeWeycGTsyKabqvmeXK4AN3FzRzQH%2B0qEQdK%2BrUdPtLi%2F6hMIyUfoX%2BDcRBQDt7PFd4YejoVRQat%2BvgcgDCWaMjSOAbwoFGjkeQL&X-Amz-Signature=7fcb2214eb408f2e5f32b626ecdbee9f8aa7566e8fcb3419631f76e500a90c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DRB6OAX%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPy5veEWs1%2BiSoPYaWfKomPMGj5paA0ewOSbINqLK9xgIgEU78pbl3AwNGlhTUtUYEUqN1CeKImgvccpsNx1sGGGAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGAdk328RsudZqHEHSrcA2cJbRngmomJRt3hpKwiz5Ay4uO1MEXkZVAjGdo%2F6vKmlwE7ZXOA8Love%2FYF8BPNDrfCaxjAG6%2BSevWD%2FTmF%2B0bibdoWL65ziH%2BPithUH7b4skObytTB%2By3klta2e4oYHcls2QLkqswh%2Fa7vbjHS9FlTFpr1hu0vIuj5C%2F0cf6zVHnFbeoaclYHPGlmvsIxTn2vKS7%2FlIMknECo6xY9SXeqxSgXllpLXeb6mzH3VWfEh0XFf0o7fBhGG5YrA6CbXWiblxhbVgd3%2F9E015vmKzsWzZBteDHrYQpMCYuSqbuD0d%2FpzmfVD%2FqL4%2FV0bW%2B2TdWKGDhFTeCV6W7IB1o8U342ZNzFo4LAxu%2BxEjooAdxTGOgoOEaX0R508inJMMirKwob1i2o8Iutz476taSyd5sdBvj8esBpkkqjnteYWV9BYQxyRXU6dSOZMWxEDOojYp0Gp3KQdBstUHHQ77ibCoTh%2BGyWqPOPgrBAkjAk7CGobqsk9ZBOHsSyZnKiYU2na%2Fdsef1HnWo%2BT6kezqk4J5zMkegz3zKntlFDLNEZt2PUHSN9vIFrjZDBN6rK6pIMbOIhDTAWCz9HYqu8q0K429PLu0u3pPGKMlgIy9a42VpHHC3fTF%2BIbd1Ghe5MXMKSvjs0GOqUB%2FGXMo%2BbJkH3LzTAo%2BUWKTT2lGma%2B1RSO7kxz7vOWVjmmh2Mi470XsMpCbR0aRSj9sjh3r0WUpieKtpAUnkhgR4gTy6Btlhj%2F%2F%2BX7Z%2Bg3yaXcKCfF2A%2BSRqEGGeWeycGTsyKabqvmeXK4AN3FzRzQH%2B0qEQdK%2BrUdPtLi%2F6hMIyUfoX%2BDcRBQDt7PFd4YejoVRQat%2BvgcgDCWaMjSOAbwoFGjkeQL&X-Amz-Signature=c9ecf7e47ba55eb7f2e21bcb3daad01596a4aa0e85ce3f3ca11eae79fd6b69ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


