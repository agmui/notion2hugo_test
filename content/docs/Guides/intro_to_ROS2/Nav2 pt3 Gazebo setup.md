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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SZOGUI3%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8RZAwh66qKUq1JiVXTAceb0w8k9ebd5xnwV3gAlufaAiEAknKwSFdliybcr0u0OTDmVKouG2Ilx911ivkdDjdqISYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClfR%2Bt9JW0n%2FbeiaSrcA%2Fp%2B%2FGpGpPfoUWORmUWYcg6AoimOpVzeK%2FMq5n4QK0f68V8WdMFIu4x2boiQ01AwaUZo%2FxxghGEcczOdyssCj9KVMmsyvzJ%2F53DAOuP6U7X70rmCRoETCpNaBQ4n0NYy3WOdZ8jto%2FdXjfq0vVDkSyaAyJqr32WekuiM0TMR18eb8DfHN%2BToLhpNZ6SH8O9nmwzmdGao%2F5faHlsW0TuQX5uoUNYMkP9C1m6fwKLJrO0vGt1MLxhKMo8ph7yyXjkvU68sIx5wvm23Xfe4sFNpwyXbpUh5NJm8OKtgQDqJpM2iZHEKFRcKmPDCqFgVQGK%2BcScwx1BC2R2IIqp1nr31p4mWAk0DP5vBEI0sL94RO%2BdyiV%2FZmI%2B7m5jFjkdQ4AQqBpsJxBaMm4BWGFrQEVTvC%2BuwR2xrYJatk5QlDEltoL%2Fg8Xb1fPx33DuRFJpy2vtCk9T%2BkY6FNmwbKVH4FSv7cPNnCwBaIdQT7sqGufrZxj%2B%2FYnkWHUvGcvmMkKfo6%2FgqnAqCnpCFVM9nh83HbASP3ZLfz1YgrIj1s3fdrLfcyoI9uLw%2BI0mkzKjp72%2FPKdmxZIasHPI23IWVLYfuSsZ1cMftauhiotLjP4vnUaKTE4OsmjSjdmoVsZg1pc1YMMbXh9IGOqUB3IOly7HpciF9eJs7ZpFZWiuL7R1DZDUVB%2BuzG4PX%2FKSc%2BkUA0MQMPmGaeJMZYJraYCWGYFFfhZN0ThTDi%2B1W15z5LdBwjXW7cdr30XFBjqoHdvc5DOhWdge%2BOWkqaDXq9xEYnh7%2FDdwELjgAkDYYkw9J%2FkM%2B018L28EaofLI7YF%2BpSQ2CU%2FKlDqtiMafLHQmBdwauIawpgoJ0h0vZjXWQEzJvFBy&X-Amz-Signature=9165d7b3b5ad53f79f6f4ab5d2df1f61a04468e2daa919f1b427253e6ac5c9b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SZOGUI3%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8RZAwh66qKUq1JiVXTAceb0w8k9ebd5xnwV3gAlufaAiEAknKwSFdliybcr0u0OTDmVKouG2Ilx911ivkdDjdqISYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClfR%2Bt9JW0n%2FbeiaSrcA%2Fp%2B%2FGpGpPfoUWORmUWYcg6AoimOpVzeK%2FMq5n4QK0f68V8WdMFIu4x2boiQ01AwaUZo%2FxxghGEcczOdyssCj9KVMmsyvzJ%2F53DAOuP6U7X70rmCRoETCpNaBQ4n0NYy3WOdZ8jto%2FdXjfq0vVDkSyaAyJqr32WekuiM0TMR18eb8DfHN%2BToLhpNZ6SH8O9nmwzmdGao%2F5faHlsW0TuQX5uoUNYMkP9C1m6fwKLJrO0vGt1MLxhKMo8ph7yyXjkvU68sIx5wvm23Xfe4sFNpwyXbpUh5NJm8OKtgQDqJpM2iZHEKFRcKmPDCqFgVQGK%2BcScwx1BC2R2IIqp1nr31p4mWAk0DP5vBEI0sL94RO%2BdyiV%2FZmI%2B7m5jFjkdQ4AQqBpsJxBaMm4BWGFrQEVTvC%2BuwR2xrYJatk5QlDEltoL%2Fg8Xb1fPx33DuRFJpy2vtCk9T%2BkY6FNmwbKVH4FSv7cPNnCwBaIdQT7sqGufrZxj%2B%2FYnkWHUvGcvmMkKfo6%2FgqnAqCnpCFVM9nh83HbASP3ZLfz1YgrIj1s3fdrLfcyoI9uLw%2BI0mkzKjp72%2FPKdmxZIasHPI23IWVLYfuSsZ1cMftauhiotLjP4vnUaKTE4OsmjSjdmoVsZg1pc1YMMbXh9IGOqUB3IOly7HpciF9eJs7ZpFZWiuL7R1DZDUVB%2BuzG4PX%2FKSc%2BkUA0MQMPmGaeJMZYJraYCWGYFFfhZN0ThTDi%2B1W15z5LdBwjXW7cdr30XFBjqoHdvc5DOhWdge%2BOWkqaDXq9xEYnh7%2FDdwELjgAkDYYkw9J%2FkM%2B018L28EaofLI7YF%2BpSQ2CU%2FKlDqtiMafLHQmBdwauIawpgoJ0h0vZjXWQEzJvFBy&X-Amz-Signature=19a5917c50e133b10e7600e0a8a95b1e5e199c7f6bbb8970ab6f86f146a2c806&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SZOGUI3%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8RZAwh66qKUq1JiVXTAceb0w8k9ebd5xnwV3gAlufaAiEAknKwSFdliybcr0u0OTDmVKouG2Ilx911ivkdDjdqISYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClfR%2Bt9JW0n%2FbeiaSrcA%2Fp%2B%2FGpGpPfoUWORmUWYcg6AoimOpVzeK%2FMq5n4QK0f68V8WdMFIu4x2boiQ01AwaUZo%2FxxghGEcczOdyssCj9KVMmsyvzJ%2F53DAOuP6U7X70rmCRoETCpNaBQ4n0NYy3WOdZ8jto%2FdXjfq0vVDkSyaAyJqr32WekuiM0TMR18eb8DfHN%2BToLhpNZ6SH8O9nmwzmdGao%2F5faHlsW0TuQX5uoUNYMkP9C1m6fwKLJrO0vGt1MLxhKMo8ph7yyXjkvU68sIx5wvm23Xfe4sFNpwyXbpUh5NJm8OKtgQDqJpM2iZHEKFRcKmPDCqFgVQGK%2BcScwx1BC2R2IIqp1nr31p4mWAk0DP5vBEI0sL94RO%2BdyiV%2FZmI%2B7m5jFjkdQ4AQqBpsJxBaMm4BWGFrQEVTvC%2BuwR2xrYJatk5QlDEltoL%2Fg8Xb1fPx33DuRFJpy2vtCk9T%2BkY6FNmwbKVH4FSv7cPNnCwBaIdQT7sqGufrZxj%2B%2FYnkWHUvGcvmMkKfo6%2FgqnAqCnpCFVM9nh83HbASP3ZLfz1YgrIj1s3fdrLfcyoI9uLw%2BI0mkzKjp72%2FPKdmxZIasHPI23IWVLYfuSsZ1cMftauhiotLjP4vnUaKTE4OsmjSjdmoVsZg1pc1YMMbXh9IGOqUB3IOly7HpciF9eJs7ZpFZWiuL7R1DZDUVB%2BuzG4PX%2FKSc%2BkUA0MQMPmGaeJMZYJraYCWGYFFfhZN0ThTDi%2B1W15z5LdBwjXW7cdr30XFBjqoHdvc5DOhWdge%2BOWkqaDXq9xEYnh7%2FDdwELjgAkDYYkw9J%2FkM%2B018L28EaofLI7YF%2BpSQ2CU%2FKlDqtiMafLHQmBdwauIawpgoJ0h0vZjXWQEzJvFBy&X-Amz-Signature=4e9d0fd249227e5a8ee375459981576df8d5199754482f6dc52e82532fd1c472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SZOGUI3%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8RZAwh66qKUq1JiVXTAceb0w8k9ebd5xnwV3gAlufaAiEAknKwSFdliybcr0u0OTDmVKouG2Ilx911ivkdDjdqISYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClfR%2Bt9JW0n%2FbeiaSrcA%2Fp%2B%2FGpGpPfoUWORmUWYcg6AoimOpVzeK%2FMq5n4QK0f68V8WdMFIu4x2boiQ01AwaUZo%2FxxghGEcczOdyssCj9KVMmsyvzJ%2F53DAOuP6U7X70rmCRoETCpNaBQ4n0NYy3WOdZ8jto%2FdXjfq0vVDkSyaAyJqr32WekuiM0TMR18eb8DfHN%2BToLhpNZ6SH8O9nmwzmdGao%2F5faHlsW0TuQX5uoUNYMkP9C1m6fwKLJrO0vGt1MLxhKMo8ph7yyXjkvU68sIx5wvm23Xfe4sFNpwyXbpUh5NJm8OKtgQDqJpM2iZHEKFRcKmPDCqFgVQGK%2BcScwx1BC2R2IIqp1nr31p4mWAk0DP5vBEI0sL94RO%2BdyiV%2FZmI%2B7m5jFjkdQ4AQqBpsJxBaMm4BWGFrQEVTvC%2BuwR2xrYJatk5QlDEltoL%2Fg8Xb1fPx33DuRFJpy2vtCk9T%2BkY6FNmwbKVH4FSv7cPNnCwBaIdQT7sqGufrZxj%2B%2FYnkWHUvGcvmMkKfo6%2FgqnAqCnpCFVM9nh83HbASP3ZLfz1YgrIj1s3fdrLfcyoI9uLw%2BI0mkzKjp72%2FPKdmxZIasHPI23IWVLYfuSsZ1cMftauhiotLjP4vnUaKTE4OsmjSjdmoVsZg1pc1YMMbXh9IGOqUB3IOly7HpciF9eJs7ZpFZWiuL7R1DZDUVB%2BuzG4PX%2FKSc%2BkUA0MQMPmGaeJMZYJraYCWGYFFfhZN0ThTDi%2B1W15z5LdBwjXW7cdr30XFBjqoHdvc5DOhWdge%2BOWkqaDXq9xEYnh7%2FDdwELjgAkDYYkw9J%2FkM%2B018L28EaofLI7YF%2BpSQ2CU%2FKlDqtiMafLHQmBdwauIawpgoJ0h0vZjXWQEzJvFBy&X-Amz-Signature=50687960b6bee7600d8ed76ec5aa2fdce6ee1e2daa3fb04114bd792b04aba243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SJOR7T5%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzgmp79fthkny6dzGb%2Bp7vLr2sr%2BBuohMWSE7wxdJ%2FYgIhANfkR0aq4uY73DCCG8PGbu%2FNhXRNqcY8ZEmRP8HQuTrwKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFKzyQYPcrdV0HwhUq3ANK15rx7MYReD%2FonVhXBlvpYHMD14IaF2z9KzYBdsXI7jN1ul3Gx2gDYMzHTVu3gd8dMhpMif8dZ4NasYU4qIIgiZnTvGmCKHrv%2B3UlngsrMTjClktL1IQfkRy18UcxICDXD7vrkq328z5qF3A8IS4y20Wb04HBgMUrrqosXRDbJvh6BEtiRoeniqgH%2BXIsW1zhehmy9aO8DSNIFsaROiEOvc2B0L2MpPzB7bb8FswKTcsjDz3kzzPE%2F5tkxHN5gjHgAyp%2BDGjtuEiWZY6uWKakGGiQagq2FL1X6I3LgAFLGRjV6ciKX3DwjxgS%2FVoi0Igy8yRq0lLuWWOef5Z6oUfRu4pSP7S8bBNXIrh4069QuPE%2FGOzsc266S9fxqsbD500bL90j940%2FL9TX2KeJhjaXlejGItHfysbT9eN%2FL6jXjJwVV35G9019KMb3zHGAr8AhlURgq25l%2FpxiGnMFsNkxkh4kv%2BNDxZejRhrXNaq68cVY66Qn%2BZnXG%2FoLjMUYG9TyF4CZPjhUaoPqWomCIIqLJ2GWQEsiV0UVsyqptDD%2BJjj6pfRvEKDlCXJPe36zJiakq2Ue8Np0AIv1NOXpXgMozr9wXy22tymH%2B3zm%2FaRFRfjBlTsOHINdyxbNiDDj1YfSBjqkAS5XPqv9axPRO%2B6MrBKLItrGHlD9Q2Mrlc61bgQtl6u%2FR%2Fc4bwqlP3u4w4sOM4yZIyZw8%2FtLw1ZP8GTRn1HO%2FwB92pbZYde6xvi1nobnJ1ngvm8U8BlmU2fP%2F07ZrDY%2B8kBtOPRJjtUtGfedZW2wF6QDCTWH4bJICsptzowZinvEtvaLIdwKJa6dIsoC5AxTE7hgijG5QS9cT9tQ6QEdKlexXCmp&X-Amz-Signature=4b9955ac77209779c3ae6c5d41fbf8e40052231fccc13171d1135c67a40f9f4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SZOGUI3%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8RZAwh66qKUq1JiVXTAceb0w8k9ebd5xnwV3gAlufaAiEAknKwSFdliybcr0u0OTDmVKouG2Ilx911ivkdDjdqISYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClfR%2Bt9JW0n%2FbeiaSrcA%2Fp%2B%2FGpGpPfoUWORmUWYcg6AoimOpVzeK%2FMq5n4QK0f68V8WdMFIu4x2boiQ01AwaUZo%2FxxghGEcczOdyssCj9KVMmsyvzJ%2F53DAOuP6U7X70rmCRoETCpNaBQ4n0NYy3WOdZ8jto%2FdXjfq0vVDkSyaAyJqr32WekuiM0TMR18eb8DfHN%2BToLhpNZ6SH8O9nmwzmdGao%2F5faHlsW0TuQX5uoUNYMkP9C1m6fwKLJrO0vGt1MLxhKMo8ph7yyXjkvU68sIx5wvm23Xfe4sFNpwyXbpUh5NJm8OKtgQDqJpM2iZHEKFRcKmPDCqFgVQGK%2BcScwx1BC2R2IIqp1nr31p4mWAk0DP5vBEI0sL94RO%2BdyiV%2FZmI%2B7m5jFjkdQ4AQqBpsJxBaMm4BWGFrQEVTvC%2BuwR2xrYJatk5QlDEltoL%2Fg8Xb1fPx33DuRFJpy2vtCk9T%2BkY6FNmwbKVH4FSv7cPNnCwBaIdQT7sqGufrZxj%2B%2FYnkWHUvGcvmMkKfo6%2FgqnAqCnpCFVM9nh83HbASP3ZLfz1YgrIj1s3fdrLfcyoI9uLw%2BI0mkzKjp72%2FPKdmxZIasHPI23IWVLYfuSsZ1cMftauhiotLjP4vnUaKTE4OsmjSjdmoVsZg1pc1YMMbXh9IGOqUB3IOly7HpciF9eJs7ZpFZWiuL7R1DZDUVB%2BuzG4PX%2FKSc%2BkUA0MQMPmGaeJMZYJraYCWGYFFfhZN0ThTDi%2B1W15z5LdBwjXW7cdr30XFBjqoHdvc5DOhWdge%2BOWkqaDXq9xEYnh7%2FDdwELjgAkDYYkw9J%2FkM%2B018L28EaofLI7YF%2BpSQ2CU%2FKlDqtiMafLHQmBdwauIawpgoJ0h0vZjXWQEzJvFBy&X-Amz-Signature=c7106662e7b68cc4dc43b026786d0831e549a4b847c892368509bb4f2be96dd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SZOGUI3%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8RZAwh66qKUq1JiVXTAceb0w8k9ebd5xnwV3gAlufaAiEAknKwSFdliybcr0u0OTDmVKouG2Ilx911ivkdDjdqISYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClfR%2Bt9JW0n%2FbeiaSrcA%2Fp%2B%2FGpGpPfoUWORmUWYcg6AoimOpVzeK%2FMq5n4QK0f68V8WdMFIu4x2boiQ01AwaUZo%2FxxghGEcczOdyssCj9KVMmsyvzJ%2F53DAOuP6U7X70rmCRoETCpNaBQ4n0NYy3WOdZ8jto%2FdXjfq0vVDkSyaAyJqr32WekuiM0TMR18eb8DfHN%2BToLhpNZ6SH8O9nmwzmdGao%2F5faHlsW0TuQX5uoUNYMkP9C1m6fwKLJrO0vGt1MLxhKMo8ph7yyXjkvU68sIx5wvm23Xfe4sFNpwyXbpUh5NJm8OKtgQDqJpM2iZHEKFRcKmPDCqFgVQGK%2BcScwx1BC2R2IIqp1nr31p4mWAk0DP5vBEI0sL94RO%2BdyiV%2FZmI%2B7m5jFjkdQ4AQqBpsJxBaMm4BWGFrQEVTvC%2BuwR2xrYJatk5QlDEltoL%2Fg8Xb1fPx33DuRFJpy2vtCk9T%2BkY6FNmwbKVH4FSv7cPNnCwBaIdQT7sqGufrZxj%2B%2FYnkWHUvGcvmMkKfo6%2FgqnAqCnpCFVM9nh83HbASP3ZLfz1YgrIj1s3fdrLfcyoI9uLw%2BI0mkzKjp72%2FPKdmxZIasHPI23IWVLYfuSsZ1cMftauhiotLjP4vnUaKTE4OsmjSjdmoVsZg1pc1YMMbXh9IGOqUB3IOly7HpciF9eJs7ZpFZWiuL7R1DZDUVB%2BuzG4PX%2FKSc%2BkUA0MQMPmGaeJMZYJraYCWGYFFfhZN0ThTDi%2B1W15z5LdBwjXW7cdr30XFBjqoHdvc5DOhWdge%2BOWkqaDXq9xEYnh7%2FDdwELjgAkDYYkw9J%2FkM%2B018L28EaofLI7YF%2BpSQ2CU%2FKlDqtiMafLHQmBdwauIawpgoJ0h0vZjXWQEzJvFBy&X-Amz-Signature=4a897f1797f2f76bb02c9ffc8f26d679a4c3907763afe60a8c329632566150f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SZOGUI3%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8RZAwh66qKUq1JiVXTAceb0w8k9ebd5xnwV3gAlufaAiEAknKwSFdliybcr0u0OTDmVKouG2Ilx911ivkdDjdqISYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClfR%2Bt9JW0n%2FbeiaSrcA%2Fp%2B%2FGpGpPfoUWORmUWYcg6AoimOpVzeK%2FMq5n4QK0f68V8WdMFIu4x2boiQ01AwaUZo%2FxxghGEcczOdyssCj9KVMmsyvzJ%2F53DAOuP6U7X70rmCRoETCpNaBQ4n0NYy3WOdZ8jto%2FdXjfq0vVDkSyaAyJqr32WekuiM0TMR18eb8DfHN%2BToLhpNZ6SH8O9nmwzmdGao%2F5faHlsW0TuQX5uoUNYMkP9C1m6fwKLJrO0vGt1MLxhKMo8ph7yyXjkvU68sIx5wvm23Xfe4sFNpwyXbpUh5NJm8OKtgQDqJpM2iZHEKFRcKmPDCqFgVQGK%2BcScwx1BC2R2IIqp1nr31p4mWAk0DP5vBEI0sL94RO%2BdyiV%2FZmI%2B7m5jFjkdQ4AQqBpsJxBaMm4BWGFrQEVTvC%2BuwR2xrYJatk5QlDEltoL%2Fg8Xb1fPx33DuRFJpy2vtCk9T%2BkY6FNmwbKVH4FSv7cPNnCwBaIdQT7sqGufrZxj%2B%2FYnkWHUvGcvmMkKfo6%2FgqnAqCnpCFVM9nh83HbASP3ZLfz1YgrIj1s3fdrLfcyoI9uLw%2BI0mkzKjp72%2FPKdmxZIasHPI23IWVLYfuSsZ1cMftauhiotLjP4vnUaKTE4OsmjSjdmoVsZg1pc1YMMbXh9IGOqUB3IOly7HpciF9eJs7ZpFZWiuL7R1DZDUVB%2BuzG4PX%2FKSc%2BkUA0MQMPmGaeJMZYJraYCWGYFFfhZN0ThTDi%2B1W15z5LdBwjXW7cdr30XFBjqoHdvc5DOhWdge%2BOWkqaDXq9xEYnh7%2FDdwELjgAkDYYkw9J%2FkM%2B018L28EaofLI7YF%2BpSQ2CU%2FKlDqtiMafLHQmBdwauIawpgoJ0h0vZjXWQEzJvFBy&X-Amz-Signature=3bfed669e40ccdb86749bab2994eae1b382610f623abb5b654aaf58c5bdccb9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SZOGUI3%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8RZAwh66qKUq1JiVXTAceb0w8k9ebd5xnwV3gAlufaAiEAknKwSFdliybcr0u0OTDmVKouG2Ilx911ivkdDjdqISYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClfR%2Bt9JW0n%2FbeiaSrcA%2Fp%2B%2FGpGpPfoUWORmUWYcg6AoimOpVzeK%2FMq5n4QK0f68V8WdMFIu4x2boiQ01AwaUZo%2FxxghGEcczOdyssCj9KVMmsyvzJ%2F53DAOuP6U7X70rmCRoETCpNaBQ4n0NYy3WOdZ8jto%2FdXjfq0vVDkSyaAyJqr32WekuiM0TMR18eb8DfHN%2BToLhpNZ6SH8O9nmwzmdGao%2F5faHlsW0TuQX5uoUNYMkP9C1m6fwKLJrO0vGt1MLxhKMo8ph7yyXjkvU68sIx5wvm23Xfe4sFNpwyXbpUh5NJm8OKtgQDqJpM2iZHEKFRcKmPDCqFgVQGK%2BcScwx1BC2R2IIqp1nr31p4mWAk0DP5vBEI0sL94RO%2BdyiV%2FZmI%2B7m5jFjkdQ4AQqBpsJxBaMm4BWGFrQEVTvC%2BuwR2xrYJatk5QlDEltoL%2Fg8Xb1fPx33DuRFJpy2vtCk9T%2BkY6FNmwbKVH4FSv7cPNnCwBaIdQT7sqGufrZxj%2B%2FYnkWHUvGcvmMkKfo6%2FgqnAqCnpCFVM9nh83HbASP3ZLfz1YgrIj1s3fdrLfcyoI9uLw%2BI0mkzKjp72%2FPKdmxZIasHPI23IWVLYfuSsZ1cMftauhiotLjP4vnUaKTE4OsmjSjdmoVsZg1pc1YMMbXh9IGOqUB3IOly7HpciF9eJs7ZpFZWiuL7R1DZDUVB%2BuzG4PX%2FKSc%2BkUA0MQMPmGaeJMZYJraYCWGYFFfhZN0ThTDi%2B1W15z5LdBwjXW7cdr30XFBjqoHdvc5DOhWdge%2BOWkqaDXq9xEYnh7%2FDdwELjgAkDYYkw9J%2FkM%2B018L28EaofLI7YF%2BpSQ2CU%2FKlDqtiMafLHQmBdwauIawpgoJ0h0vZjXWQEzJvFBy&X-Amz-Signature=ba3a61c7e2fd0f461ccc2a685cd91472166673a5ffd04f47b17079be6c183277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SZOGUI3%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8RZAwh66qKUq1JiVXTAceb0w8k9ebd5xnwV3gAlufaAiEAknKwSFdliybcr0u0OTDmVKouG2Ilx911ivkdDjdqISYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClfR%2Bt9JW0n%2FbeiaSrcA%2Fp%2B%2FGpGpPfoUWORmUWYcg6AoimOpVzeK%2FMq5n4QK0f68V8WdMFIu4x2boiQ01AwaUZo%2FxxghGEcczOdyssCj9KVMmsyvzJ%2F53DAOuP6U7X70rmCRoETCpNaBQ4n0NYy3WOdZ8jto%2FdXjfq0vVDkSyaAyJqr32WekuiM0TMR18eb8DfHN%2BToLhpNZ6SH8O9nmwzmdGao%2F5faHlsW0TuQX5uoUNYMkP9C1m6fwKLJrO0vGt1MLxhKMo8ph7yyXjkvU68sIx5wvm23Xfe4sFNpwyXbpUh5NJm8OKtgQDqJpM2iZHEKFRcKmPDCqFgVQGK%2BcScwx1BC2R2IIqp1nr31p4mWAk0DP5vBEI0sL94RO%2BdyiV%2FZmI%2B7m5jFjkdQ4AQqBpsJxBaMm4BWGFrQEVTvC%2BuwR2xrYJatk5QlDEltoL%2Fg8Xb1fPx33DuRFJpy2vtCk9T%2BkY6FNmwbKVH4FSv7cPNnCwBaIdQT7sqGufrZxj%2B%2FYnkWHUvGcvmMkKfo6%2FgqnAqCnpCFVM9nh83HbASP3ZLfz1YgrIj1s3fdrLfcyoI9uLw%2BI0mkzKjp72%2FPKdmxZIasHPI23IWVLYfuSsZ1cMftauhiotLjP4vnUaKTE4OsmjSjdmoVsZg1pc1YMMbXh9IGOqUB3IOly7HpciF9eJs7ZpFZWiuL7R1DZDUVB%2BuzG4PX%2FKSc%2BkUA0MQMPmGaeJMZYJraYCWGYFFfhZN0ThTDi%2B1W15z5LdBwjXW7cdr30XFBjqoHdvc5DOhWdge%2BOWkqaDXq9xEYnh7%2FDdwELjgAkDYYkw9J%2FkM%2B018L28EaofLI7YF%2BpSQ2CU%2FKlDqtiMafLHQmBdwauIawpgoJ0h0vZjXWQEzJvFBy&X-Amz-Signature=03a35cb94b5e43d0ba07f1e6de6415ebc0c51db25d742b90165edb4d6a7a5c6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SZOGUI3%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8RZAwh66qKUq1JiVXTAceb0w8k9ebd5xnwV3gAlufaAiEAknKwSFdliybcr0u0OTDmVKouG2Ilx911ivkdDjdqISYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClfR%2Bt9JW0n%2FbeiaSrcA%2Fp%2B%2FGpGpPfoUWORmUWYcg6AoimOpVzeK%2FMq5n4QK0f68V8WdMFIu4x2boiQ01AwaUZo%2FxxghGEcczOdyssCj9KVMmsyvzJ%2F53DAOuP6U7X70rmCRoETCpNaBQ4n0NYy3WOdZ8jto%2FdXjfq0vVDkSyaAyJqr32WekuiM0TMR18eb8DfHN%2BToLhpNZ6SH8O9nmwzmdGao%2F5faHlsW0TuQX5uoUNYMkP9C1m6fwKLJrO0vGt1MLxhKMo8ph7yyXjkvU68sIx5wvm23Xfe4sFNpwyXbpUh5NJm8OKtgQDqJpM2iZHEKFRcKmPDCqFgVQGK%2BcScwx1BC2R2IIqp1nr31p4mWAk0DP5vBEI0sL94RO%2BdyiV%2FZmI%2B7m5jFjkdQ4AQqBpsJxBaMm4BWGFrQEVTvC%2BuwR2xrYJatk5QlDEltoL%2Fg8Xb1fPx33DuRFJpy2vtCk9T%2BkY6FNmwbKVH4FSv7cPNnCwBaIdQT7sqGufrZxj%2B%2FYnkWHUvGcvmMkKfo6%2FgqnAqCnpCFVM9nh83HbASP3ZLfz1YgrIj1s3fdrLfcyoI9uLw%2BI0mkzKjp72%2FPKdmxZIasHPI23IWVLYfuSsZ1cMftauhiotLjP4vnUaKTE4OsmjSjdmoVsZg1pc1YMMbXh9IGOqUB3IOly7HpciF9eJs7ZpFZWiuL7R1DZDUVB%2BuzG4PX%2FKSc%2BkUA0MQMPmGaeJMZYJraYCWGYFFfhZN0ThTDi%2B1W15z5LdBwjXW7cdr30XFBjqoHdvc5DOhWdge%2BOWkqaDXq9xEYnh7%2FDdwELjgAkDYYkw9J%2FkM%2B018L28EaofLI7YF%2BpSQ2CU%2FKlDqtiMafLHQmBdwauIawpgoJ0h0vZjXWQEzJvFBy&X-Amz-Signature=d736f07f24f6b83c64d4dcb6c34e06b20dd486791e64da497e0ea7ef57b5edce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


