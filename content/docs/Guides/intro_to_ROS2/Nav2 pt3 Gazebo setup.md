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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DBSDFOR%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQC66uW6bJDJu%2BvRzxcM9YYjFuFGtBCGrjyEUvE5WbKRswIhAOAlLHFwtaiwZxPHM69AVMNvRLNvNWpT6qObPPPg8JKFKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJeg4pCUGFAopHiKIq3AP98DfE4ATUfeOgBBryZHLwZ8JMlOoOJeGuXA5bQ6FU2Qi7ihkSMOE8x%2BQAP7o8xNbM7D2e0wz95Zyl5tZT2zjtRCrpVWAR9QuKWfDzu8K0Z39MMoyhzDEEizhOOcid7am9eourr7GsOg0XxtUPOqZQYeqgSBhQghTpSw30MLO0RhBP0M0ATzhOVN0JyIrlAw5U4ovqVFegcORqHjm4Jd3EKUT3RKmL3hRkSa8QjEboFzTjYbB9t3xge5k7rfsAyROVwoEc5I%2FH7Zwlifon0DAJXKpRU358JPM0tYJ1wC5Vvh6WD3OtOetF5JRMu4xHmM8zPvDGIUh8dJqD2EdfAl6lRTSjKrIOZPyAnnboawlyZos%2BwPSHJuU2KJK%2F5ue4QK57PpDDRwutDmkb6IZmzlAX%2BVrv7yvUFjSvLtD0lujd0xwybuu40Z9k8CNtYmbGYP2M13VrYSXRxGRf10qHC2wLb8XLzLvR%2Fp0k4V%2Blx5J1xghwLHFslzMdS60PcioM37m1BdG5Sum8EXpvGgCfz3fhYUvSsaMRZ3IJuliuRluq5lBnZH%2BUhIqkPwrkU0uDoZ6IGXc7%2FtkegO7LFT8AhZl%2F16PsK4ipyriVxBeb%2BKc%2FqNs2XEh%2FnI%2F8S%2BxPJzDR2ZbOBjqkAWmjNIcoe8Iwb%2BguhCF%2FqVPrwzDiRZw8u9aG6iomXYIMDYu2OP%2BeCxoUxNv9ej%2BNU2obJ8K6MkS3Y3Z7XiAolqPj3ExdBbwahM3mfGO%2F%2BqZPu5kC%2FtAQG87tQ%2BL1eCKGOt7DlY60IYqEFBykGYDjv4czdedEjOYmcC%2BMC4M3k6NoPqMpgYBo%2BsO2hQr0O46GM%2BXOv%2Bk8zZCxxeHDHsV5AmMq00GZ&X-Amz-Signature=80f244385e2b66afe273fc392abd4eb879e5dc158387aeee2267f6493a0a2025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DBSDFOR%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQC66uW6bJDJu%2BvRzxcM9YYjFuFGtBCGrjyEUvE5WbKRswIhAOAlLHFwtaiwZxPHM69AVMNvRLNvNWpT6qObPPPg8JKFKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJeg4pCUGFAopHiKIq3AP98DfE4ATUfeOgBBryZHLwZ8JMlOoOJeGuXA5bQ6FU2Qi7ihkSMOE8x%2BQAP7o8xNbM7D2e0wz95Zyl5tZT2zjtRCrpVWAR9QuKWfDzu8K0Z39MMoyhzDEEizhOOcid7am9eourr7GsOg0XxtUPOqZQYeqgSBhQghTpSw30MLO0RhBP0M0ATzhOVN0JyIrlAw5U4ovqVFegcORqHjm4Jd3EKUT3RKmL3hRkSa8QjEboFzTjYbB9t3xge5k7rfsAyROVwoEc5I%2FH7Zwlifon0DAJXKpRU358JPM0tYJ1wC5Vvh6WD3OtOetF5JRMu4xHmM8zPvDGIUh8dJqD2EdfAl6lRTSjKrIOZPyAnnboawlyZos%2BwPSHJuU2KJK%2F5ue4QK57PpDDRwutDmkb6IZmzlAX%2BVrv7yvUFjSvLtD0lujd0xwybuu40Z9k8CNtYmbGYP2M13VrYSXRxGRf10qHC2wLb8XLzLvR%2Fp0k4V%2Blx5J1xghwLHFslzMdS60PcioM37m1BdG5Sum8EXpvGgCfz3fhYUvSsaMRZ3IJuliuRluq5lBnZH%2BUhIqkPwrkU0uDoZ6IGXc7%2FtkegO7LFT8AhZl%2F16PsK4ipyriVxBeb%2BKc%2FqNs2XEh%2FnI%2F8S%2BxPJzDR2ZbOBjqkAWmjNIcoe8Iwb%2BguhCF%2FqVPrwzDiRZw8u9aG6iomXYIMDYu2OP%2BeCxoUxNv9ej%2BNU2obJ8K6MkS3Y3Z7XiAolqPj3ExdBbwahM3mfGO%2F%2BqZPu5kC%2FtAQG87tQ%2BL1eCKGOt7DlY60IYqEFBykGYDjv4czdedEjOYmcC%2BMC4M3k6NoPqMpgYBo%2BsO2hQr0O46GM%2BXOv%2Bk8zZCxxeHDHsV5AmMq00GZ&X-Amz-Signature=5ea65528ace9a1e2fbd76378f5c76a9fb0eaf9200c4b8186f66af0534afc646a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DBSDFOR%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQC66uW6bJDJu%2BvRzxcM9YYjFuFGtBCGrjyEUvE5WbKRswIhAOAlLHFwtaiwZxPHM69AVMNvRLNvNWpT6qObPPPg8JKFKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJeg4pCUGFAopHiKIq3AP98DfE4ATUfeOgBBryZHLwZ8JMlOoOJeGuXA5bQ6FU2Qi7ihkSMOE8x%2BQAP7o8xNbM7D2e0wz95Zyl5tZT2zjtRCrpVWAR9QuKWfDzu8K0Z39MMoyhzDEEizhOOcid7am9eourr7GsOg0XxtUPOqZQYeqgSBhQghTpSw30MLO0RhBP0M0ATzhOVN0JyIrlAw5U4ovqVFegcORqHjm4Jd3EKUT3RKmL3hRkSa8QjEboFzTjYbB9t3xge5k7rfsAyROVwoEc5I%2FH7Zwlifon0DAJXKpRU358JPM0tYJ1wC5Vvh6WD3OtOetF5JRMu4xHmM8zPvDGIUh8dJqD2EdfAl6lRTSjKrIOZPyAnnboawlyZos%2BwPSHJuU2KJK%2F5ue4QK57PpDDRwutDmkb6IZmzlAX%2BVrv7yvUFjSvLtD0lujd0xwybuu40Z9k8CNtYmbGYP2M13VrYSXRxGRf10qHC2wLb8XLzLvR%2Fp0k4V%2Blx5J1xghwLHFslzMdS60PcioM37m1BdG5Sum8EXpvGgCfz3fhYUvSsaMRZ3IJuliuRluq5lBnZH%2BUhIqkPwrkU0uDoZ6IGXc7%2FtkegO7LFT8AhZl%2F16PsK4ipyriVxBeb%2BKc%2FqNs2XEh%2FnI%2F8S%2BxPJzDR2ZbOBjqkAWmjNIcoe8Iwb%2BguhCF%2FqVPrwzDiRZw8u9aG6iomXYIMDYu2OP%2BeCxoUxNv9ej%2BNU2obJ8K6MkS3Y3Z7XiAolqPj3ExdBbwahM3mfGO%2F%2BqZPu5kC%2FtAQG87tQ%2BL1eCKGOt7DlY60IYqEFBykGYDjv4czdedEjOYmcC%2BMC4M3k6NoPqMpgYBo%2BsO2hQr0O46GM%2BXOv%2Bk8zZCxxeHDHsV5AmMq00GZ&X-Amz-Signature=33367f957b4fc9fdf99bebe8fd67e9fd6f2cd4eb29146bcee66cef1143c2eeef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DBSDFOR%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQC66uW6bJDJu%2BvRzxcM9YYjFuFGtBCGrjyEUvE5WbKRswIhAOAlLHFwtaiwZxPHM69AVMNvRLNvNWpT6qObPPPg8JKFKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJeg4pCUGFAopHiKIq3AP98DfE4ATUfeOgBBryZHLwZ8JMlOoOJeGuXA5bQ6FU2Qi7ihkSMOE8x%2BQAP7o8xNbM7D2e0wz95Zyl5tZT2zjtRCrpVWAR9QuKWfDzu8K0Z39MMoyhzDEEizhOOcid7am9eourr7GsOg0XxtUPOqZQYeqgSBhQghTpSw30MLO0RhBP0M0ATzhOVN0JyIrlAw5U4ovqVFegcORqHjm4Jd3EKUT3RKmL3hRkSa8QjEboFzTjYbB9t3xge5k7rfsAyROVwoEc5I%2FH7Zwlifon0DAJXKpRU358JPM0tYJ1wC5Vvh6WD3OtOetF5JRMu4xHmM8zPvDGIUh8dJqD2EdfAl6lRTSjKrIOZPyAnnboawlyZos%2BwPSHJuU2KJK%2F5ue4QK57PpDDRwutDmkb6IZmzlAX%2BVrv7yvUFjSvLtD0lujd0xwybuu40Z9k8CNtYmbGYP2M13VrYSXRxGRf10qHC2wLb8XLzLvR%2Fp0k4V%2Blx5J1xghwLHFslzMdS60PcioM37m1BdG5Sum8EXpvGgCfz3fhYUvSsaMRZ3IJuliuRluq5lBnZH%2BUhIqkPwrkU0uDoZ6IGXc7%2FtkegO7LFT8AhZl%2F16PsK4ipyriVxBeb%2BKc%2FqNs2XEh%2FnI%2F8S%2BxPJzDR2ZbOBjqkAWmjNIcoe8Iwb%2BguhCF%2FqVPrwzDiRZw8u9aG6iomXYIMDYu2OP%2BeCxoUxNv9ej%2BNU2obJ8K6MkS3Y3Z7XiAolqPj3ExdBbwahM3mfGO%2F%2BqZPu5kC%2FtAQG87tQ%2BL1eCKGOt7DlY60IYqEFBykGYDjv4czdedEjOYmcC%2BMC4M3k6NoPqMpgYBo%2BsO2hQr0O46GM%2BXOv%2Bk8zZCxxeHDHsV5AmMq00GZ&X-Amz-Signature=16f19e68a3f33b69310dd3ca952a90885d32a64a05b3c21ec5924113c52d31e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633YXH673%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBOXS4j6Fge%2B%2FVrleKBbM87051BnEx8rqEWcysqVXRgFAiBU9lOK935hjJwpnF3P4jXqB8ZG3YWxs1ahJ%2F0IkFo9iCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXFgRO%2BWA%2BJehYB3eKtwDFLPrmaxAg1rrgdD%2FJUARFbJjrwyVdC10tBlAMiuAWlpiUfe2BNX2LAzC1Z2csJpnTbS%2BLCE0TlJ2H2lCsN2TjWT1%2FyuEp3XJMBOandVB%2F60EX5krSBrKwKRQrcHaRv1lEorRjwBTkaVtL4e16ejA%2BW%2F484B9w7KXy9UVUs%2B5tq4MsM156RjvlsppTxuksIdyCtK3SGWlCUbyROiOEvsTujgtYSBVY8AZSvjkIiiZMPd%2FSkjyAtJwx6VfiVBjLpOuDsWU6pRMg3LfqCh1yJGNDISLCczBqlt4D9%2BcwxZQM1CwNwHzmtMnhCxaDBYNMp4OjdPqOQPFQk2oo2%2Fc5gzfhITYZMiaDwyazh79HBaIsj9wzowMsprK0V34XfeuRw8OkF20u%2FyaI3sEwCQBeophPdXJg3iNUX3j4LNfj65dhg87%2F7eU2%2Fu5BJJmeNgz%2F5Nu3W8DZZ7%2FAWAbDrn5e60HzfMz3W1YFqmR1iKyuSE5Xe2Qon%2FR0B3yAb4gT0lQg%2FT5okYRAu0HCIudz0Ot2u%2Fkl76UPSPuQzXhDV2AOEfOnzPpo7IwXIPF02HfK5Nw4qQwlRqlGRZOMZoox737SJnW4wiq8r7hw5PWywqrDTYEyC98CCItiSmG%2BnH2%2F80wgvGWzgY6pgEohqJNUVc16Fo3LNbvqaODsgoZevo6gzJaFZCE7L7LHP9GBNU0JwstCV2rTzRga62cX79FjbAWrli5X9u0IV%2BizkAPB08Lw1hUVgbFRt6JjUtvHCDm1pFNAsY7sicooy17wUu6sAIOWdvvIMUSES6QgNBJBI5ERwSzEERXiqsuAL1m1JzojgcoJJvYkFeiyralWyJmsnaYFEzNB0WteDZq73BScBf9&X-Amz-Signature=41b804ed53cead9a6587bc279018b338961666aa9e2dc354ca3e68c2525a8d41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DBSDFOR%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQC66uW6bJDJu%2BvRzxcM9YYjFuFGtBCGrjyEUvE5WbKRswIhAOAlLHFwtaiwZxPHM69AVMNvRLNvNWpT6qObPPPg8JKFKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJeg4pCUGFAopHiKIq3AP98DfE4ATUfeOgBBryZHLwZ8JMlOoOJeGuXA5bQ6FU2Qi7ihkSMOE8x%2BQAP7o8xNbM7D2e0wz95Zyl5tZT2zjtRCrpVWAR9QuKWfDzu8K0Z39MMoyhzDEEizhOOcid7am9eourr7GsOg0XxtUPOqZQYeqgSBhQghTpSw30MLO0RhBP0M0ATzhOVN0JyIrlAw5U4ovqVFegcORqHjm4Jd3EKUT3RKmL3hRkSa8QjEboFzTjYbB9t3xge5k7rfsAyROVwoEc5I%2FH7Zwlifon0DAJXKpRU358JPM0tYJ1wC5Vvh6WD3OtOetF5JRMu4xHmM8zPvDGIUh8dJqD2EdfAl6lRTSjKrIOZPyAnnboawlyZos%2BwPSHJuU2KJK%2F5ue4QK57PpDDRwutDmkb6IZmzlAX%2BVrv7yvUFjSvLtD0lujd0xwybuu40Z9k8CNtYmbGYP2M13VrYSXRxGRf10qHC2wLb8XLzLvR%2Fp0k4V%2Blx5J1xghwLHFslzMdS60PcioM37m1BdG5Sum8EXpvGgCfz3fhYUvSsaMRZ3IJuliuRluq5lBnZH%2BUhIqkPwrkU0uDoZ6IGXc7%2FtkegO7LFT8AhZl%2F16PsK4ipyriVxBeb%2BKc%2FqNs2XEh%2FnI%2F8S%2BxPJzDR2ZbOBjqkAWmjNIcoe8Iwb%2BguhCF%2FqVPrwzDiRZw8u9aG6iomXYIMDYu2OP%2BeCxoUxNv9ej%2BNU2obJ8K6MkS3Y3Z7XiAolqPj3ExdBbwahM3mfGO%2F%2BqZPu5kC%2FtAQG87tQ%2BL1eCKGOt7DlY60IYqEFBykGYDjv4czdedEjOYmcC%2BMC4M3k6NoPqMpgYBo%2BsO2hQr0O46GM%2BXOv%2Bk8zZCxxeHDHsV5AmMq00GZ&X-Amz-Signature=d2ed409209f661b5e4ca07fbd372e9b4db47a62a8340699c18ee170e87933a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DBSDFOR%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQC66uW6bJDJu%2BvRzxcM9YYjFuFGtBCGrjyEUvE5WbKRswIhAOAlLHFwtaiwZxPHM69AVMNvRLNvNWpT6qObPPPg8JKFKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJeg4pCUGFAopHiKIq3AP98DfE4ATUfeOgBBryZHLwZ8JMlOoOJeGuXA5bQ6FU2Qi7ihkSMOE8x%2BQAP7o8xNbM7D2e0wz95Zyl5tZT2zjtRCrpVWAR9QuKWfDzu8K0Z39MMoyhzDEEizhOOcid7am9eourr7GsOg0XxtUPOqZQYeqgSBhQghTpSw30MLO0RhBP0M0ATzhOVN0JyIrlAw5U4ovqVFegcORqHjm4Jd3EKUT3RKmL3hRkSa8QjEboFzTjYbB9t3xge5k7rfsAyROVwoEc5I%2FH7Zwlifon0DAJXKpRU358JPM0tYJ1wC5Vvh6WD3OtOetF5JRMu4xHmM8zPvDGIUh8dJqD2EdfAl6lRTSjKrIOZPyAnnboawlyZos%2BwPSHJuU2KJK%2F5ue4QK57PpDDRwutDmkb6IZmzlAX%2BVrv7yvUFjSvLtD0lujd0xwybuu40Z9k8CNtYmbGYP2M13VrYSXRxGRf10qHC2wLb8XLzLvR%2Fp0k4V%2Blx5J1xghwLHFslzMdS60PcioM37m1BdG5Sum8EXpvGgCfz3fhYUvSsaMRZ3IJuliuRluq5lBnZH%2BUhIqkPwrkU0uDoZ6IGXc7%2FtkegO7LFT8AhZl%2F16PsK4ipyriVxBeb%2BKc%2FqNs2XEh%2FnI%2F8S%2BxPJzDR2ZbOBjqkAWmjNIcoe8Iwb%2BguhCF%2FqVPrwzDiRZw8u9aG6iomXYIMDYu2OP%2BeCxoUxNv9ej%2BNU2obJ8K6MkS3Y3Z7XiAolqPj3ExdBbwahM3mfGO%2F%2BqZPu5kC%2FtAQG87tQ%2BL1eCKGOt7DlY60IYqEFBykGYDjv4czdedEjOYmcC%2BMC4M3k6NoPqMpgYBo%2BsO2hQr0O46GM%2BXOv%2Bk8zZCxxeHDHsV5AmMq00GZ&X-Amz-Signature=5464e1a18789a0409c2496db5c7d8f146b2fbc8ce8e79732298b51f2606e6576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DBSDFOR%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQC66uW6bJDJu%2BvRzxcM9YYjFuFGtBCGrjyEUvE5WbKRswIhAOAlLHFwtaiwZxPHM69AVMNvRLNvNWpT6qObPPPg8JKFKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJeg4pCUGFAopHiKIq3AP98DfE4ATUfeOgBBryZHLwZ8JMlOoOJeGuXA5bQ6FU2Qi7ihkSMOE8x%2BQAP7o8xNbM7D2e0wz95Zyl5tZT2zjtRCrpVWAR9QuKWfDzu8K0Z39MMoyhzDEEizhOOcid7am9eourr7GsOg0XxtUPOqZQYeqgSBhQghTpSw30MLO0RhBP0M0ATzhOVN0JyIrlAw5U4ovqVFegcORqHjm4Jd3EKUT3RKmL3hRkSa8QjEboFzTjYbB9t3xge5k7rfsAyROVwoEc5I%2FH7Zwlifon0DAJXKpRU358JPM0tYJ1wC5Vvh6WD3OtOetF5JRMu4xHmM8zPvDGIUh8dJqD2EdfAl6lRTSjKrIOZPyAnnboawlyZos%2BwPSHJuU2KJK%2F5ue4QK57PpDDRwutDmkb6IZmzlAX%2BVrv7yvUFjSvLtD0lujd0xwybuu40Z9k8CNtYmbGYP2M13VrYSXRxGRf10qHC2wLb8XLzLvR%2Fp0k4V%2Blx5J1xghwLHFslzMdS60PcioM37m1BdG5Sum8EXpvGgCfz3fhYUvSsaMRZ3IJuliuRluq5lBnZH%2BUhIqkPwrkU0uDoZ6IGXc7%2FtkegO7LFT8AhZl%2F16PsK4ipyriVxBeb%2BKc%2FqNs2XEh%2FnI%2F8S%2BxPJzDR2ZbOBjqkAWmjNIcoe8Iwb%2BguhCF%2FqVPrwzDiRZw8u9aG6iomXYIMDYu2OP%2BeCxoUxNv9ej%2BNU2obJ8K6MkS3Y3Z7XiAolqPj3ExdBbwahM3mfGO%2F%2BqZPu5kC%2FtAQG87tQ%2BL1eCKGOt7DlY60IYqEFBykGYDjv4czdedEjOYmcC%2BMC4M3k6NoPqMpgYBo%2BsO2hQr0O46GM%2BXOv%2Bk8zZCxxeHDHsV5AmMq00GZ&X-Amz-Signature=84d85c1b028325d72c3f85460706586669ddeeadfed102775116fea6ce7c0cd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DBSDFOR%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQC66uW6bJDJu%2BvRzxcM9YYjFuFGtBCGrjyEUvE5WbKRswIhAOAlLHFwtaiwZxPHM69AVMNvRLNvNWpT6qObPPPg8JKFKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJeg4pCUGFAopHiKIq3AP98DfE4ATUfeOgBBryZHLwZ8JMlOoOJeGuXA5bQ6FU2Qi7ihkSMOE8x%2BQAP7o8xNbM7D2e0wz95Zyl5tZT2zjtRCrpVWAR9QuKWfDzu8K0Z39MMoyhzDEEizhOOcid7am9eourr7GsOg0XxtUPOqZQYeqgSBhQghTpSw30MLO0RhBP0M0ATzhOVN0JyIrlAw5U4ovqVFegcORqHjm4Jd3EKUT3RKmL3hRkSa8QjEboFzTjYbB9t3xge5k7rfsAyROVwoEc5I%2FH7Zwlifon0DAJXKpRU358JPM0tYJ1wC5Vvh6WD3OtOetF5JRMu4xHmM8zPvDGIUh8dJqD2EdfAl6lRTSjKrIOZPyAnnboawlyZos%2BwPSHJuU2KJK%2F5ue4QK57PpDDRwutDmkb6IZmzlAX%2BVrv7yvUFjSvLtD0lujd0xwybuu40Z9k8CNtYmbGYP2M13VrYSXRxGRf10qHC2wLb8XLzLvR%2Fp0k4V%2Blx5J1xghwLHFslzMdS60PcioM37m1BdG5Sum8EXpvGgCfz3fhYUvSsaMRZ3IJuliuRluq5lBnZH%2BUhIqkPwrkU0uDoZ6IGXc7%2FtkegO7LFT8AhZl%2F16PsK4ipyriVxBeb%2BKc%2FqNs2XEh%2FnI%2F8S%2BxPJzDR2ZbOBjqkAWmjNIcoe8Iwb%2BguhCF%2FqVPrwzDiRZw8u9aG6iomXYIMDYu2OP%2BeCxoUxNv9ej%2BNU2obJ8K6MkS3Y3Z7XiAolqPj3ExdBbwahM3mfGO%2F%2BqZPu5kC%2FtAQG87tQ%2BL1eCKGOt7DlY60IYqEFBykGYDjv4czdedEjOYmcC%2BMC4M3k6NoPqMpgYBo%2BsO2hQr0O46GM%2BXOv%2Bk8zZCxxeHDHsV5AmMq00GZ&X-Amz-Signature=530c01fe32e9d59ba05aa84a06b1c30d7d9b0cffb30ed88ba693f102c353e6fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DBSDFOR%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQC66uW6bJDJu%2BvRzxcM9YYjFuFGtBCGrjyEUvE5WbKRswIhAOAlLHFwtaiwZxPHM69AVMNvRLNvNWpT6qObPPPg8JKFKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJeg4pCUGFAopHiKIq3AP98DfE4ATUfeOgBBryZHLwZ8JMlOoOJeGuXA5bQ6FU2Qi7ihkSMOE8x%2BQAP7o8xNbM7D2e0wz95Zyl5tZT2zjtRCrpVWAR9QuKWfDzu8K0Z39MMoyhzDEEizhOOcid7am9eourr7GsOg0XxtUPOqZQYeqgSBhQghTpSw30MLO0RhBP0M0ATzhOVN0JyIrlAw5U4ovqVFegcORqHjm4Jd3EKUT3RKmL3hRkSa8QjEboFzTjYbB9t3xge5k7rfsAyROVwoEc5I%2FH7Zwlifon0DAJXKpRU358JPM0tYJ1wC5Vvh6WD3OtOetF5JRMu4xHmM8zPvDGIUh8dJqD2EdfAl6lRTSjKrIOZPyAnnboawlyZos%2BwPSHJuU2KJK%2F5ue4QK57PpDDRwutDmkb6IZmzlAX%2BVrv7yvUFjSvLtD0lujd0xwybuu40Z9k8CNtYmbGYP2M13VrYSXRxGRf10qHC2wLb8XLzLvR%2Fp0k4V%2Blx5J1xghwLHFslzMdS60PcioM37m1BdG5Sum8EXpvGgCfz3fhYUvSsaMRZ3IJuliuRluq5lBnZH%2BUhIqkPwrkU0uDoZ6IGXc7%2FtkegO7LFT8AhZl%2F16PsK4ipyriVxBeb%2BKc%2FqNs2XEh%2FnI%2F8S%2BxPJzDR2ZbOBjqkAWmjNIcoe8Iwb%2BguhCF%2FqVPrwzDiRZw8u9aG6iomXYIMDYu2OP%2BeCxoUxNv9ej%2BNU2obJ8K6MkS3Y3Z7XiAolqPj3ExdBbwahM3mfGO%2F%2BqZPu5kC%2FtAQG87tQ%2BL1eCKGOt7DlY60IYqEFBykGYDjv4czdedEjOYmcC%2BMC4M3k6NoPqMpgYBo%2BsO2hQr0O46GM%2BXOv%2Bk8zZCxxeHDHsV5AmMq00GZ&X-Amz-Signature=f08a9e43d5ff6e79c08fc778544844bdff2b6b49a5c007f5781a43729f104355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DBSDFOR%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQC66uW6bJDJu%2BvRzxcM9YYjFuFGtBCGrjyEUvE5WbKRswIhAOAlLHFwtaiwZxPHM69AVMNvRLNvNWpT6qObPPPg8JKFKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJeg4pCUGFAopHiKIq3AP98DfE4ATUfeOgBBryZHLwZ8JMlOoOJeGuXA5bQ6FU2Qi7ihkSMOE8x%2BQAP7o8xNbM7D2e0wz95Zyl5tZT2zjtRCrpVWAR9QuKWfDzu8K0Z39MMoyhzDEEizhOOcid7am9eourr7GsOg0XxtUPOqZQYeqgSBhQghTpSw30MLO0RhBP0M0ATzhOVN0JyIrlAw5U4ovqVFegcORqHjm4Jd3EKUT3RKmL3hRkSa8QjEboFzTjYbB9t3xge5k7rfsAyROVwoEc5I%2FH7Zwlifon0DAJXKpRU358JPM0tYJ1wC5Vvh6WD3OtOetF5JRMu4xHmM8zPvDGIUh8dJqD2EdfAl6lRTSjKrIOZPyAnnboawlyZos%2BwPSHJuU2KJK%2F5ue4QK57PpDDRwutDmkb6IZmzlAX%2BVrv7yvUFjSvLtD0lujd0xwybuu40Z9k8CNtYmbGYP2M13VrYSXRxGRf10qHC2wLb8XLzLvR%2Fp0k4V%2Blx5J1xghwLHFslzMdS60PcioM37m1BdG5Sum8EXpvGgCfz3fhYUvSsaMRZ3IJuliuRluq5lBnZH%2BUhIqkPwrkU0uDoZ6IGXc7%2FtkegO7LFT8AhZl%2F16PsK4ipyriVxBeb%2BKc%2FqNs2XEh%2FnI%2F8S%2BxPJzDR2ZbOBjqkAWmjNIcoe8Iwb%2BguhCF%2FqVPrwzDiRZw8u9aG6iomXYIMDYu2OP%2BeCxoUxNv9ej%2BNU2obJ8K6MkS3Y3Z7XiAolqPj3ExdBbwahM3mfGO%2F%2BqZPu5kC%2FtAQG87tQ%2BL1eCKGOt7DlY60IYqEFBykGYDjv4czdedEjOYmcC%2BMC4M3k6NoPqMpgYBo%2BsO2hQr0O46GM%2BXOv%2Bk8zZCxxeHDHsV5AmMq00GZ&X-Amz-Signature=709a31e84f416ac7daada3fc1eccfff421ee27e38939c6c96acb6123af8156be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


