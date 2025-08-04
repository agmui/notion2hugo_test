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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QV4OZFH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFS9t%2Fr0%2FRgGsOpQ%2BAWoHsAH3%2BRCRlRy2J8uzd%2FgUWF7AiEA4SJ083LJ%2FvcGeUsLdDzjWI8cZRfus14Lf%2BCHKVMTZ1Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGKKF2W7mTNosysCrSrcAyvvXdZ2A3vk6s0UkdC9nHew%2F1iVujgIAAw3mFPbs3JRyglfGDpEXndaPCVVPIiMfCdT3daiuy128xjM%2BnwFpr2wji60bd5MB5ZoxUYeo%2BeT%2BMOTIWj7BVY6vEhcHqcEXYEWZJ6abfR4RFCwxgoPaSv%2BazY7hcBBrZs4%2F2jwqyTxjTpdRHJ5UlGQFMdNb%2BrK5IyUK42ro6uJYhOZG8xqEav5yhjTQGp%2BCtcQFJZ1NmVlBVXTge%2Bzk0i5QKwg5sqpHuyToYYjycjG8BesdXFFMT1Kv%2BUoUKF8t11T8ww10uSZtlC02JHgsYI%2FMsFRgPMARf0YE37NEhsJxa%2FvV5jM4g%2BbW8%2Bk14VKa9PchTobiOf6YSSjpPKXJFjApJ1roRLnCbxpMjrZVSlYACv2cofVmVsucMNDXb7%2FD%2F%2FgxEI5qtNJiTQjUc7q6pViz4ezRLp0YPDxJBajli4DD53bKD%2FFFH9fN2LdJjNIXVd94fKPVZUELunNdQg%2F%2F%2FpuNWHe9RMK5U9%2BQT84V1TWoHVS4k8n5nR%2FwP2kbi8%2BLPw1Ur%2BKVTPaBj9d%2FusXiQlWzlqOBl81MkahE1LSMdqS1IU1YCNLJLWFHAwQZtAeQYAm0OEVjoF9OEl2xuqLqFyWqMdrMP%2FbwcQGOqUBwpHh3ToQDe3tlLVAReJZmPyco9spPygez4UkT3KNfPtvGRpQ6UoQdp32JhybG65jyA0gxIldnHiVsI67cWgqS8pmC38vfTCaGHG8GeqVMGSu99MlPL1HGzuJX8prAeXxIjPcYorSLLZcJ8FzIH7lG%2F5clODW3kVbOuc2%2BvotjgcbSFhV%2FincU2r%2FM7BSFCCeSeCPywAO%2B6VVqFBjKGMUG4F0RUmW&X-Amz-Signature=3a50dfde23042830d273cb9d14872242ec3d7c279ed3eb2af2a8b61bc4d10b9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QV4OZFH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFS9t%2Fr0%2FRgGsOpQ%2BAWoHsAH3%2BRCRlRy2J8uzd%2FgUWF7AiEA4SJ083LJ%2FvcGeUsLdDzjWI8cZRfus14Lf%2BCHKVMTZ1Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGKKF2W7mTNosysCrSrcAyvvXdZ2A3vk6s0UkdC9nHew%2F1iVujgIAAw3mFPbs3JRyglfGDpEXndaPCVVPIiMfCdT3daiuy128xjM%2BnwFpr2wji60bd5MB5ZoxUYeo%2BeT%2BMOTIWj7BVY6vEhcHqcEXYEWZJ6abfR4RFCwxgoPaSv%2BazY7hcBBrZs4%2F2jwqyTxjTpdRHJ5UlGQFMdNb%2BrK5IyUK42ro6uJYhOZG8xqEav5yhjTQGp%2BCtcQFJZ1NmVlBVXTge%2Bzk0i5QKwg5sqpHuyToYYjycjG8BesdXFFMT1Kv%2BUoUKF8t11T8ww10uSZtlC02JHgsYI%2FMsFRgPMARf0YE37NEhsJxa%2FvV5jM4g%2BbW8%2Bk14VKa9PchTobiOf6YSSjpPKXJFjApJ1roRLnCbxpMjrZVSlYACv2cofVmVsucMNDXb7%2FD%2F%2FgxEI5qtNJiTQjUc7q6pViz4ezRLp0YPDxJBajli4DD53bKD%2FFFH9fN2LdJjNIXVd94fKPVZUELunNdQg%2F%2F%2FpuNWHe9RMK5U9%2BQT84V1TWoHVS4k8n5nR%2FwP2kbi8%2BLPw1Ur%2BKVTPaBj9d%2FusXiQlWzlqOBl81MkahE1LSMdqS1IU1YCNLJLWFHAwQZtAeQYAm0OEVjoF9OEl2xuqLqFyWqMdrMP%2FbwcQGOqUBwpHh3ToQDe3tlLVAReJZmPyco9spPygez4UkT3KNfPtvGRpQ6UoQdp32JhybG65jyA0gxIldnHiVsI67cWgqS8pmC38vfTCaGHG8GeqVMGSu99MlPL1HGzuJX8prAeXxIjPcYorSLLZcJ8FzIH7lG%2F5clODW3kVbOuc2%2BvotjgcbSFhV%2FincU2r%2FM7BSFCCeSeCPywAO%2B6VVqFBjKGMUG4F0RUmW&X-Amz-Signature=8a7d52588b5ad338563dd706ca78aade54950531519d5230b722d854e332d0fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QV4OZFH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFS9t%2Fr0%2FRgGsOpQ%2BAWoHsAH3%2BRCRlRy2J8uzd%2FgUWF7AiEA4SJ083LJ%2FvcGeUsLdDzjWI8cZRfus14Lf%2BCHKVMTZ1Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGKKF2W7mTNosysCrSrcAyvvXdZ2A3vk6s0UkdC9nHew%2F1iVujgIAAw3mFPbs3JRyglfGDpEXndaPCVVPIiMfCdT3daiuy128xjM%2BnwFpr2wji60bd5MB5ZoxUYeo%2BeT%2BMOTIWj7BVY6vEhcHqcEXYEWZJ6abfR4RFCwxgoPaSv%2BazY7hcBBrZs4%2F2jwqyTxjTpdRHJ5UlGQFMdNb%2BrK5IyUK42ro6uJYhOZG8xqEav5yhjTQGp%2BCtcQFJZ1NmVlBVXTge%2Bzk0i5QKwg5sqpHuyToYYjycjG8BesdXFFMT1Kv%2BUoUKF8t11T8ww10uSZtlC02JHgsYI%2FMsFRgPMARf0YE37NEhsJxa%2FvV5jM4g%2BbW8%2Bk14VKa9PchTobiOf6YSSjpPKXJFjApJ1roRLnCbxpMjrZVSlYACv2cofVmVsucMNDXb7%2FD%2F%2FgxEI5qtNJiTQjUc7q6pViz4ezRLp0YPDxJBajli4DD53bKD%2FFFH9fN2LdJjNIXVd94fKPVZUELunNdQg%2F%2F%2FpuNWHe9RMK5U9%2BQT84V1TWoHVS4k8n5nR%2FwP2kbi8%2BLPw1Ur%2BKVTPaBj9d%2FusXiQlWzlqOBl81MkahE1LSMdqS1IU1YCNLJLWFHAwQZtAeQYAm0OEVjoF9OEl2xuqLqFyWqMdrMP%2FbwcQGOqUBwpHh3ToQDe3tlLVAReJZmPyco9spPygez4UkT3KNfPtvGRpQ6UoQdp32JhybG65jyA0gxIldnHiVsI67cWgqS8pmC38vfTCaGHG8GeqVMGSu99MlPL1HGzuJX8prAeXxIjPcYorSLLZcJ8FzIH7lG%2F5clODW3kVbOuc2%2BvotjgcbSFhV%2FincU2r%2FM7BSFCCeSeCPywAO%2B6VVqFBjKGMUG4F0RUmW&X-Amz-Signature=f082716c5c487ea5df18be45c6ad5c5d29b0fd2454bdefc4ecea36c23394d764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QV4OZFH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFS9t%2Fr0%2FRgGsOpQ%2BAWoHsAH3%2BRCRlRy2J8uzd%2FgUWF7AiEA4SJ083LJ%2FvcGeUsLdDzjWI8cZRfus14Lf%2BCHKVMTZ1Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGKKF2W7mTNosysCrSrcAyvvXdZ2A3vk6s0UkdC9nHew%2F1iVujgIAAw3mFPbs3JRyglfGDpEXndaPCVVPIiMfCdT3daiuy128xjM%2BnwFpr2wji60bd5MB5ZoxUYeo%2BeT%2BMOTIWj7BVY6vEhcHqcEXYEWZJ6abfR4RFCwxgoPaSv%2BazY7hcBBrZs4%2F2jwqyTxjTpdRHJ5UlGQFMdNb%2BrK5IyUK42ro6uJYhOZG8xqEav5yhjTQGp%2BCtcQFJZ1NmVlBVXTge%2Bzk0i5QKwg5sqpHuyToYYjycjG8BesdXFFMT1Kv%2BUoUKF8t11T8ww10uSZtlC02JHgsYI%2FMsFRgPMARf0YE37NEhsJxa%2FvV5jM4g%2BbW8%2Bk14VKa9PchTobiOf6YSSjpPKXJFjApJ1roRLnCbxpMjrZVSlYACv2cofVmVsucMNDXb7%2FD%2F%2FgxEI5qtNJiTQjUc7q6pViz4ezRLp0YPDxJBajli4DD53bKD%2FFFH9fN2LdJjNIXVd94fKPVZUELunNdQg%2F%2F%2FpuNWHe9RMK5U9%2BQT84V1TWoHVS4k8n5nR%2FwP2kbi8%2BLPw1Ur%2BKVTPaBj9d%2FusXiQlWzlqOBl81MkahE1LSMdqS1IU1YCNLJLWFHAwQZtAeQYAm0OEVjoF9OEl2xuqLqFyWqMdrMP%2FbwcQGOqUBwpHh3ToQDe3tlLVAReJZmPyco9spPygez4UkT3KNfPtvGRpQ6UoQdp32JhybG65jyA0gxIldnHiVsI67cWgqS8pmC38vfTCaGHG8GeqVMGSu99MlPL1HGzuJX8prAeXxIjPcYorSLLZcJ8FzIH7lG%2F5clODW3kVbOuc2%2BvotjgcbSFhV%2FincU2r%2FM7BSFCCeSeCPywAO%2B6VVqFBjKGMUG4F0RUmW&X-Amz-Signature=f34c1859b379e115bdf3dd442aef19cfe3664697ee011e3919bff5718d46a8cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6DFFSDG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBZsPM7VvmhXKU19npXt2oLTjCzP5tQV2Eu2JWsfnGz9AiEA6Nkj87JvD4YDSGIn3vzjxXAZonlbQ%2FIA%2BrsWAMdDUY0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDUXbhLW5vLqGRDzrCrcAwuI4bezJZKYgPhdXoX0AZsH3yWgtAiCvxnWBU6SbhXewCn6fp08RKyFeXiQEdxRif%2BvL%2FX0yal%2BHVPLczNqVTLFxo7Cc0MbIGP1aRlGHfp81DfjID2DE7fyJX14BbM%2FPXwPuGBc9T4PmLBh9v7lgaBULMFfIalSrDTO4mXw3Eh0pMRDleAhxIyZNUpaUBufFKHhQrYNiIvxvbgWQXJ0w6M1mEY6A0qtKQ8uHVW416gG03CI2hL%2BXP2Flp5KoXRELkuIdYCj5qPp2%2BX14kZXuqjvOIPALKtms08HRjeVoHB1HXW%2FkJ4ee4job%2FeW5q13NrrQp6snj15WoS7I6DHH%2Bs8tK8QT9JMlLstrtE6rjJUW%2FCraLjlPPIJk1r5774Y8KiPgwv%2FIZwBmNf3wLoyIXjApcNCStexFnQ06RBl6e6HkabzIPUJK0%2BSuxRvHEanVgN%2BsHgcTCXn8sIaItIZOUdraM2PVuEo4rprEJdOfZ7SIFCvRDnoKULCcM6rqrXix6TswxaLM8xt%2FrQA1pAmXXiOrkF%2BCar20oUPqL%2BlIKi7O3oR8XuLD46KTJYzWZtQV8tX%2FlYcIrqOIBCiG%2BeReZpdz0KS3CL%2FWVVuYvbPjfMqQV64fSw8dLLtU107aMIrdwcQGOqUBq25ZRix6iWL2aZEkPwjhlveAGHnrA4bb%2Fo16bcqW8znDqUMEVfbmm4k%2BP7dBlaAgrIdDtcLAP%2B4idLK%2FNOo4uDGorsj68VMSSFZlbJRIkO77dqIcDH%2BY2ymr61Xgi8OBdsW0oU%2FpT3hjwNmFrYeL1e5DtHx15NtAsFn7L0l9wwFhUR75sC3YkrlwFbJrHl2%2FJl8Gm5hoOF0mk7S2sOYpYME34wPK&X-Amz-Signature=85d10ebc3ff0c871d26acfe2fd50f3258000ea0289bf1c8396feaaea85318195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QV4OZFH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFS9t%2Fr0%2FRgGsOpQ%2BAWoHsAH3%2BRCRlRy2J8uzd%2FgUWF7AiEA4SJ083LJ%2FvcGeUsLdDzjWI8cZRfus14Lf%2BCHKVMTZ1Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGKKF2W7mTNosysCrSrcAyvvXdZ2A3vk6s0UkdC9nHew%2F1iVujgIAAw3mFPbs3JRyglfGDpEXndaPCVVPIiMfCdT3daiuy128xjM%2BnwFpr2wji60bd5MB5ZoxUYeo%2BeT%2BMOTIWj7BVY6vEhcHqcEXYEWZJ6abfR4RFCwxgoPaSv%2BazY7hcBBrZs4%2F2jwqyTxjTpdRHJ5UlGQFMdNb%2BrK5IyUK42ro6uJYhOZG8xqEav5yhjTQGp%2BCtcQFJZ1NmVlBVXTge%2Bzk0i5QKwg5sqpHuyToYYjycjG8BesdXFFMT1Kv%2BUoUKF8t11T8ww10uSZtlC02JHgsYI%2FMsFRgPMARf0YE37NEhsJxa%2FvV5jM4g%2BbW8%2Bk14VKa9PchTobiOf6YSSjpPKXJFjApJ1roRLnCbxpMjrZVSlYACv2cofVmVsucMNDXb7%2FD%2F%2FgxEI5qtNJiTQjUc7q6pViz4ezRLp0YPDxJBajli4DD53bKD%2FFFH9fN2LdJjNIXVd94fKPVZUELunNdQg%2F%2F%2FpuNWHe9RMK5U9%2BQT84V1TWoHVS4k8n5nR%2FwP2kbi8%2BLPw1Ur%2BKVTPaBj9d%2FusXiQlWzlqOBl81MkahE1LSMdqS1IU1YCNLJLWFHAwQZtAeQYAm0OEVjoF9OEl2xuqLqFyWqMdrMP%2FbwcQGOqUBwpHh3ToQDe3tlLVAReJZmPyco9spPygez4UkT3KNfPtvGRpQ6UoQdp32JhybG65jyA0gxIldnHiVsI67cWgqS8pmC38vfTCaGHG8GeqVMGSu99MlPL1HGzuJX8prAeXxIjPcYorSLLZcJ8FzIH7lG%2F5clODW3kVbOuc2%2BvotjgcbSFhV%2FincU2r%2FM7BSFCCeSeCPywAO%2B6VVqFBjKGMUG4F0RUmW&X-Amz-Signature=0cd8d21709de9f84245870c7625427e50608a6bc0850a1a4213e2631fce25312&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QV4OZFH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFS9t%2Fr0%2FRgGsOpQ%2BAWoHsAH3%2BRCRlRy2J8uzd%2FgUWF7AiEA4SJ083LJ%2FvcGeUsLdDzjWI8cZRfus14Lf%2BCHKVMTZ1Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGKKF2W7mTNosysCrSrcAyvvXdZ2A3vk6s0UkdC9nHew%2F1iVujgIAAw3mFPbs3JRyglfGDpEXndaPCVVPIiMfCdT3daiuy128xjM%2BnwFpr2wji60bd5MB5ZoxUYeo%2BeT%2BMOTIWj7BVY6vEhcHqcEXYEWZJ6abfR4RFCwxgoPaSv%2BazY7hcBBrZs4%2F2jwqyTxjTpdRHJ5UlGQFMdNb%2BrK5IyUK42ro6uJYhOZG8xqEav5yhjTQGp%2BCtcQFJZ1NmVlBVXTge%2Bzk0i5QKwg5sqpHuyToYYjycjG8BesdXFFMT1Kv%2BUoUKF8t11T8ww10uSZtlC02JHgsYI%2FMsFRgPMARf0YE37NEhsJxa%2FvV5jM4g%2BbW8%2Bk14VKa9PchTobiOf6YSSjpPKXJFjApJ1roRLnCbxpMjrZVSlYACv2cofVmVsucMNDXb7%2FD%2F%2FgxEI5qtNJiTQjUc7q6pViz4ezRLp0YPDxJBajli4DD53bKD%2FFFH9fN2LdJjNIXVd94fKPVZUELunNdQg%2F%2F%2FpuNWHe9RMK5U9%2BQT84V1TWoHVS4k8n5nR%2FwP2kbi8%2BLPw1Ur%2BKVTPaBj9d%2FusXiQlWzlqOBl81MkahE1LSMdqS1IU1YCNLJLWFHAwQZtAeQYAm0OEVjoF9OEl2xuqLqFyWqMdrMP%2FbwcQGOqUBwpHh3ToQDe3tlLVAReJZmPyco9spPygez4UkT3KNfPtvGRpQ6UoQdp32JhybG65jyA0gxIldnHiVsI67cWgqS8pmC38vfTCaGHG8GeqVMGSu99MlPL1HGzuJX8prAeXxIjPcYorSLLZcJ8FzIH7lG%2F5clODW3kVbOuc2%2BvotjgcbSFhV%2FincU2r%2FM7BSFCCeSeCPywAO%2B6VVqFBjKGMUG4F0RUmW&X-Amz-Signature=70d7da6f1597068b2642f84ebfabcea0cf640fe334f8956d231a62bbfb4a5ff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QV4OZFH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFS9t%2Fr0%2FRgGsOpQ%2BAWoHsAH3%2BRCRlRy2J8uzd%2FgUWF7AiEA4SJ083LJ%2FvcGeUsLdDzjWI8cZRfus14Lf%2BCHKVMTZ1Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGKKF2W7mTNosysCrSrcAyvvXdZ2A3vk6s0UkdC9nHew%2F1iVujgIAAw3mFPbs3JRyglfGDpEXndaPCVVPIiMfCdT3daiuy128xjM%2BnwFpr2wji60bd5MB5ZoxUYeo%2BeT%2BMOTIWj7BVY6vEhcHqcEXYEWZJ6abfR4RFCwxgoPaSv%2BazY7hcBBrZs4%2F2jwqyTxjTpdRHJ5UlGQFMdNb%2BrK5IyUK42ro6uJYhOZG8xqEav5yhjTQGp%2BCtcQFJZ1NmVlBVXTge%2Bzk0i5QKwg5sqpHuyToYYjycjG8BesdXFFMT1Kv%2BUoUKF8t11T8ww10uSZtlC02JHgsYI%2FMsFRgPMARf0YE37NEhsJxa%2FvV5jM4g%2BbW8%2Bk14VKa9PchTobiOf6YSSjpPKXJFjApJ1roRLnCbxpMjrZVSlYACv2cofVmVsucMNDXb7%2FD%2F%2FgxEI5qtNJiTQjUc7q6pViz4ezRLp0YPDxJBajli4DD53bKD%2FFFH9fN2LdJjNIXVd94fKPVZUELunNdQg%2F%2F%2FpuNWHe9RMK5U9%2BQT84V1TWoHVS4k8n5nR%2FwP2kbi8%2BLPw1Ur%2BKVTPaBj9d%2FusXiQlWzlqOBl81MkahE1LSMdqS1IU1YCNLJLWFHAwQZtAeQYAm0OEVjoF9OEl2xuqLqFyWqMdrMP%2FbwcQGOqUBwpHh3ToQDe3tlLVAReJZmPyco9spPygez4UkT3KNfPtvGRpQ6UoQdp32JhybG65jyA0gxIldnHiVsI67cWgqS8pmC38vfTCaGHG8GeqVMGSu99MlPL1HGzuJX8prAeXxIjPcYorSLLZcJ8FzIH7lG%2F5clODW3kVbOuc2%2BvotjgcbSFhV%2FincU2r%2FM7BSFCCeSeCPywAO%2B6VVqFBjKGMUG4F0RUmW&X-Amz-Signature=26ed83a9eb75ad7d3e1ecd57c513682e9e97cce1ed3c16dc3cf29b486dab009f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QV4OZFH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFS9t%2Fr0%2FRgGsOpQ%2BAWoHsAH3%2BRCRlRy2J8uzd%2FgUWF7AiEA4SJ083LJ%2FvcGeUsLdDzjWI8cZRfus14Lf%2BCHKVMTZ1Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGKKF2W7mTNosysCrSrcAyvvXdZ2A3vk6s0UkdC9nHew%2F1iVujgIAAw3mFPbs3JRyglfGDpEXndaPCVVPIiMfCdT3daiuy128xjM%2BnwFpr2wji60bd5MB5ZoxUYeo%2BeT%2BMOTIWj7BVY6vEhcHqcEXYEWZJ6abfR4RFCwxgoPaSv%2BazY7hcBBrZs4%2F2jwqyTxjTpdRHJ5UlGQFMdNb%2BrK5IyUK42ro6uJYhOZG8xqEav5yhjTQGp%2BCtcQFJZ1NmVlBVXTge%2Bzk0i5QKwg5sqpHuyToYYjycjG8BesdXFFMT1Kv%2BUoUKF8t11T8ww10uSZtlC02JHgsYI%2FMsFRgPMARf0YE37NEhsJxa%2FvV5jM4g%2BbW8%2Bk14VKa9PchTobiOf6YSSjpPKXJFjApJ1roRLnCbxpMjrZVSlYACv2cofVmVsucMNDXb7%2FD%2F%2FgxEI5qtNJiTQjUc7q6pViz4ezRLp0YPDxJBajli4DD53bKD%2FFFH9fN2LdJjNIXVd94fKPVZUELunNdQg%2F%2F%2FpuNWHe9RMK5U9%2BQT84V1TWoHVS4k8n5nR%2FwP2kbi8%2BLPw1Ur%2BKVTPaBj9d%2FusXiQlWzlqOBl81MkahE1LSMdqS1IU1YCNLJLWFHAwQZtAeQYAm0OEVjoF9OEl2xuqLqFyWqMdrMP%2FbwcQGOqUBwpHh3ToQDe3tlLVAReJZmPyco9spPygez4UkT3KNfPtvGRpQ6UoQdp32JhybG65jyA0gxIldnHiVsI67cWgqS8pmC38vfTCaGHG8GeqVMGSu99MlPL1HGzuJX8prAeXxIjPcYorSLLZcJ8FzIH7lG%2F5clODW3kVbOuc2%2BvotjgcbSFhV%2FincU2r%2FM7BSFCCeSeCPywAO%2B6VVqFBjKGMUG4F0RUmW&X-Amz-Signature=cd78098e28b979c14e5ecbb20986397d754b356d1b9f6ccd405f9ebe15e3a6f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QV4OZFH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFS9t%2Fr0%2FRgGsOpQ%2BAWoHsAH3%2BRCRlRy2J8uzd%2FgUWF7AiEA4SJ083LJ%2FvcGeUsLdDzjWI8cZRfus14Lf%2BCHKVMTZ1Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGKKF2W7mTNosysCrSrcAyvvXdZ2A3vk6s0UkdC9nHew%2F1iVujgIAAw3mFPbs3JRyglfGDpEXndaPCVVPIiMfCdT3daiuy128xjM%2BnwFpr2wji60bd5MB5ZoxUYeo%2BeT%2BMOTIWj7BVY6vEhcHqcEXYEWZJ6abfR4RFCwxgoPaSv%2BazY7hcBBrZs4%2F2jwqyTxjTpdRHJ5UlGQFMdNb%2BrK5IyUK42ro6uJYhOZG8xqEav5yhjTQGp%2BCtcQFJZ1NmVlBVXTge%2Bzk0i5QKwg5sqpHuyToYYjycjG8BesdXFFMT1Kv%2BUoUKF8t11T8ww10uSZtlC02JHgsYI%2FMsFRgPMARf0YE37NEhsJxa%2FvV5jM4g%2BbW8%2Bk14VKa9PchTobiOf6YSSjpPKXJFjApJ1roRLnCbxpMjrZVSlYACv2cofVmVsucMNDXb7%2FD%2F%2FgxEI5qtNJiTQjUc7q6pViz4ezRLp0YPDxJBajli4DD53bKD%2FFFH9fN2LdJjNIXVd94fKPVZUELunNdQg%2F%2F%2FpuNWHe9RMK5U9%2BQT84V1TWoHVS4k8n5nR%2FwP2kbi8%2BLPw1Ur%2BKVTPaBj9d%2FusXiQlWzlqOBl81MkahE1LSMdqS1IU1YCNLJLWFHAwQZtAeQYAm0OEVjoF9OEl2xuqLqFyWqMdrMP%2FbwcQGOqUBwpHh3ToQDe3tlLVAReJZmPyco9spPygez4UkT3KNfPtvGRpQ6UoQdp32JhybG65jyA0gxIldnHiVsI67cWgqS8pmC38vfTCaGHG8GeqVMGSu99MlPL1HGzuJX8prAeXxIjPcYorSLLZcJ8FzIH7lG%2F5clODW3kVbOuc2%2BvotjgcbSFhV%2FincU2r%2FM7BSFCCeSeCPywAO%2B6VVqFBjKGMUG4F0RUmW&X-Amz-Signature=3654a2f087f06160eeb806c8ee20f34bb8eb31c9a7b95eb78a57dee915d629ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QV4OZFH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFS9t%2Fr0%2FRgGsOpQ%2BAWoHsAH3%2BRCRlRy2J8uzd%2FgUWF7AiEA4SJ083LJ%2FvcGeUsLdDzjWI8cZRfus14Lf%2BCHKVMTZ1Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGKKF2W7mTNosysCrSrcAyvvXdZ2A3vk6s0UkdC9nHew%2F1iVujgIAAw3mFPbs3JRyglfGDpEXndaPCVVPIiMfCdT3daiuy128xjM%2BnwFpr2wji60bd5MB5ZoxUYeo%2BeT%2BMOTIWj7BVY6vEhcHqcEXYEWZJ6abfR4RFCwxgoPaSv%2BazY7hcBBrZs4%2F2jwqyTxjTpdRHJ5UlGQFMdNb%2BrK5IyUK42ro6uJYhOZG8xqEav5yhjTQGp%2BCtcQFJZ1NmVlBVXTge%2Bzk0i5QKwg5sqpHuyToYYjycjG8BesdXFFMT1Kv%2BUoUKF8t11T8ww10uSZtlC02JHgsYI%2FMsFRgPMARf0YE37NEhsJxa%2FvV5jM4g%2BbW8%2Bk14VKa9PchTobiOf6YSSjpPKXJFjApJ1roRLnCbxpMjrZVSlYACv2cofVmVsucMNDXb7%2FD%2F%2FgxEI5qtNJiTQjUc7q6pViz4ezRLp0YPDxJBajli4DD53bKD%2FFFH9fN2LdJjNIXVd94fKPVZUELunNdQg%2F%2F%2FpuNWHe9RMK5U9%2BQT84V1TWoHVS4k8n5nR%2FwP2kbi8%2BLPw1Ur%2BKVTPaBj9d%2FusXiQlWzlqOBl81MkahE1LSMdqS1IU1YCNLJLWFHAwQZtAeQYAm0OEVjoF9OEl2xuqLqFyWqMdrMP%2FbwcQGOqUBwpHh3ToQDe3tlLVAReJZmPyco9spPygez4UkT3KNfPtvGRpQ6UoQdp32JhybG65jyA0gxIldnHiVsI67cWgqS8pmC38vfTCaGHG8GeqVMGSu99MlPL1HGzuJX8prAeXxIjPcYorSLLZcJ8FzIH7lG%2F5clODW3kVbOuc2%2BvotjgcbSFhV%2FincU2r%2FM7BSFCCeSeCPywAO%2B6VVqFBjKGMUG4F0RUmW&X-Amz-Signature=42eadad63c4ffc2f5b3767f91011b4fa8f7a0d2a73e055cdf36577746c49cb65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
