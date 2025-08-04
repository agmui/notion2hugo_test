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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHXKBEUS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAf6GJoIW3fBtjKoYHKy0EhBWC%2BaFtnmiyeb61Of0oUOAiBUgC6PdEK1n0%2Bt2kaHnZ%2FSZdTovkcc6p4S5fRkxomKpCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2BlrqVQ%2B%2BgxHO4SqhKtwD%2F61mrtTrEWMCvmi1sExMK3E4cgLb1oIC6edvB42NLUWcPeJL0sFvfV%2B9otFfIVwlnV4uKu2ny6hLZ3SE8oP5VoCxVaYgYQQdH1%2FXzR%2F8aOfljHYsnQmG4wVXU9iskPFW%2BY9L%2B6bflA50fFmf8MwHz8aYrQbAgMUMM9j6hB4TUgt2KfSC49Sqa6ADotjlVAzDpzGaIQOkP7rO2EkIcpl0tMF1sIE1xgCWCPZMoMGykNGvaPhQnFckgnCfZuW%2Bv3Aj%2F06yt5Zbbd9tYCd8%2Fz96UAfSkUg5%2Buo3BPFoYXRGV45bkiYp6Mv5F612MzIvwqxY5Q0p32HjWlwLV4BqyClqYKM1Sav%2BdoFdhjgUdYUKGoB6WGO4NiknewbrUOdfBGbzgytall79HgtzYx20By%2BPfgz%2Bcl5lYBzw0uPKL9MnI%2B%2Fhrg0ca%2B93jq81FROBaMC3KgUOsAfsAeSournT5fmedr9EtNCNqhabzygqvLVq%2FHkThUGGVGPG%2BzCV8lPUeTLFD85jKFAAmHQYINGxQ7PCYVMqc51IBY%2FTxeADlFEdBFKy8n4XhM9TLFhvqktspVnVcA20bA%2BCXCYn1pbHs2uTm7NbcCGTYZOd2wWBMMLtEDDXCPPNXI18XN6MgoQwhOrAxAY6pgEo%2BO9dHDsVqDx8diRVGffEhEXAE7T4VJD%2FvAlUUavk05ueKgmZ5gI%2BLKw0C9VoFIjygI9DlsEuV4uA3loUmDHW47deiBqaVxGcIRgAo0%2BZXjX90ygBvO1HAIbPU9Ftdh2ToyFVv8ShkHMLEE3iS9CLx1RSir12ciwEjLuL1S3HFXaenVyAJUGjWGa0jWqAjtwEWT70c7dee%2BtzeSoGrFzPO24VTk8N&X-Amz-Signature=6970dcfe050386125317053cb319ab9a55ed56d021d2a11f74daed0863f97034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHXKBEUS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAf6GJoIW3fBtjKoYHKy0EhBWC%2BaFtnmiyeb61Of0oUOAiBUgC6PdEK1n0%2Bt2kaHnZ%2FSZdTovkcc6p4S5fRkxomKpCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2BlrqVQ%2B%2BgxHO4SqhKtwD%2F61mrtTrEWMCvmi1sExMK3E4cgLb1oIC6edvB42NLUWcPeJL0sFvfV%2B9otFfIVwlnV4uKu2ny6hLZ3SE8oP5VoCxVaYgYQQdH1%2FXzR%2F8aOfljHYsnQmG4wVXU9iskPFW%2BY9L%2B6bflA50fFmf8MwHz8aYrQbAgMUMM9j6hB4TUgt2KfSC49Sqa6ADotjlVAzDpzGaIQOkP7rO2EkIcpl0tMF1sIE1xgCWCPZMoMGykNGvaPhQnFckgnCfZuW%2Bv3Aj%2F06yt5Zbbd9tYCd8%2Fz96UAfSkUg5%2Buo3BPFoYXRGV45bkiYp6Mv5F612MzIvwqxY5Q0p32HjWlwLV4BqyClqYKM1Sav%2BdoFdhjgUdYUKGoB6WGO4NiknewbrUOdfBGbzgytall79HgtzYx20By%2BPfgz%2Bcl5lYBzw0uPKL9MnI%2B%2Fhrg0ca%2B93jq81FROBaMC3KgUOsAfsAeSournT5fmedr9EtNCNqhabzygqvLVq%2FHkThUGGVGPG%2BzCV8lPUeTLFD85jKFAAmHQYINGxQ7PCYVMqc51IBY%2FTxeADlFEdBFKy8n4XhM9TLFhvqktspVnVcA20bA%2BCXCYn1pbHs2uTm7NbcCGTYZOd2wWBMMLtEDDXCPPNXI18XN6MgoQwhOrAxAY6pgEo%2BO9dHDsVqDx8diRVGffEhEXAE7T4VJD%2FvAlUUavk05ueKgmZ5gI%2BLKw0C9VoFIjygI9DlsEuV4uA3loUmDHW47deiBqaVxGcIRgAo0%2BZXjX90ygBvO1HAIbPU9Ftdh2ToyFVv8ShkHMLEE3iS9CLx1RSir12ciwEjLuL1S3HFXaenVyAJUGjWGa0jWqAjtwEWT70c7dee%2BtzeSoGrFzPO24VTk8N&X-Amz-Signature=93cc6c82019b6c124a798690bee7d89218565a670c357a8d3259673028a22c71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHXKBEUS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAf6GJoIW3fBtjKoYHKy0EhBWC%2BaFtnmiyeb61Of0oUOAiBUgC6PdEK1n0%2Bt2kaHnZ%2FSZdTovkcc6p4S5fRkxomKpCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2BlrqVQ%2B%2BgxHO4SqhKtwD%2F61mrtTrEWMCvmi1sExMK3E4cgLb1oIC6edvB42NLUWcPeJL0sFvfV%2B9otFfIVwlnV4uKu2ny6hLZ3SE8oP5VoCxVaYgYQQdH1%2FXzR%2F8aOfljHYsnQmG4wVXU9iskPFW%2BY9L%2B6bflA50fFmf8MwHz8aYrQbAgMUMM9j6hB4TUgt2KfSC49Sqa6ADotjlVAzDpzGaIQOkP7rO2EkIcpl0tMF1sIE1xgCWCPZMoMGykNGvaPhQnFckgnCfZuW%2Bv3Aj%2F06yt5Zbbd9tYCd8%2Fz96UAfSkUg5%2Buo3BPFoYXRGV45bkiYp6Mv5F612MzIvwqxY5Q0p32HjWlwLV4BqyClqYKM1Sav%2BdoFdhjgUdYUKGoB6WGO4NiknewbrUOdfBGbzgytall79HgtzYx20By%2BPfgz%2Bcl5lYBzw0uPKL9MnI%2B%2Fhrg0ca%2B93jq81FROBaMC3KgUOsAfsAeSournT5fmedr9EtNCNqhabzygqvLVq%2FHkThUGGVGPG%2BzCV8lPUeTLFD85jKFAAmHQYINGxQ7PCYVMqc51IBY%2FTxeADlFEdBFKy8n4XhM9TLFhvqktspVnVcA20bA%2BCXCYn1pbHs2uTm7NbcCGTYZOd2wWBMMLtEDDXCPPNXI18XN6MgoQwhOrAxAY6pgEo%2BO9dHDsVqDx8diRVGffEhEXAE7T4VJD%2FvAlUUavk05ueKgmZ5gI%2BLKw0C9VoFIjygI9DlsEuV4uA3loUmDHW47deiBqaVxGcIRgAo0%2BZXjX90ygBvO1HAIbPU9Ftdh2ToyFVv8ShkHMLEE3iS9CLx1RSir12ciwEjLuL1S3HFXaenVyAJUGjWGa0jWqAjtwEWT70c7dee%2BtzeSoGrFzPO24VTk8N&X-Amz-Signature=f16b095292009bc04e818a8ce0ca00fabae7eff34bb7091a23aff66b328116b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHXKBEUS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAf6GJoIW3fBtjKoYHKy0EhBWC%2BaFtnmiyeb61Of0oUOAiBUgC6PdEK1n0%2Bt2kaHnZ%2FSZdTovkcc6p4S5fRkxomKpCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2BlrqVQ%2B%2BgxHO4SqhKtwD%2F61mrtTrEWMCvmi1sExMK3E4cgLb1oIC6edvB42NLUWcPeJL0sFvfV%2B9otFfIVwlnV4uKu2ny6hLZ3SE8oP5VoCxVaYgYQQdH1%2FXzR%2F8aOfljHYsnQmG4wVXU9iskPFW%2BY9L%2B6bflA50fFmf8MwHz8aYrQbAgMUMM9j6hB4TUgt2KfSC49Sqa6ADotjlVAzDpzGaIQOkP7rO2EkIcpl0tMF1sIE1xgCWCPZMoMGykNGvaPhQnFckgnCfZuW%2Bv3Aj%2F06yt5Zbbd9tYCd8%2Fz96UAfSkUg5%2Buo3BPFoYXRGV45bkiYp6Mv5F612MzIvwqxY5Q0p32HjWlwLV4BqyClqYKM1Sav%2BdoFdhjgUdYUKGoB6WGO4NiknewbrUOdfBGbzgytall79HgtzYx20By%2BPfgz%2Bcl5lYBzw0uPKL9MnI%2B%2Fhrg0ca%2B93jq81FROBaMC3KgUOsAfsAeSournT5fmedr9EtNCNqhabzygqvLVq%2FHkThUGGVGPG%2BzCV8lPUeTLFD85jKFAAmHQYINGxQ7PCYVMqc51IBY%2FTxeADlFEdBFKy8n4XhM9TLFhvqktspVnVcA20bA%2BCXCYn1pbHs2uTm7NbcCGTYZOd2wWBMMLtEDDXCPPNXI18XN6MgoQwhOrAxAY6pgEo%2BO9dHDsVqDx8diRVGffEhEXAE7T4VJD%2FvAlUUavk05ueKgmZ5gI%2BLKw0C9VoFIjygI9DlsEuV4uA3loUmDHW47deiBqaVxGcIRgAo0%2BZXjX90ygBvO1HAIbPU9Ftdh2ToyFVv8ShkHMLEE3iS9CLx1RSir12ciwEjLuL1S3HFXaenVyAJUGjWGa0jWqAjtwEWT70c7dee%2BtzeSoGrFzPO24VTk8N&X-Amz-Signature=8dd19cde32bcab8efa628c6e8b22f51ebce83b04a6de44a9acc4dbd6b099dd2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C45M7LG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIDdi1%2FXmjGIVaWHWEMv1lMdS23skNlj4WkgzEt%2Fv3lRMAiB520CLSKj5FpoRMl9BCmxF6u7VQDpd1iubY%2FoXS2PC7ir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2BEo6FlOOHnX2RZr0KtwDAiRecy9vSf3nVM6f0d5KFyzOfep%2BvS7SXgHHW5ZKTogCLwJAULZjeT8Dr0IDIXdE3RutQdgqlryZ6C%2FFA2KDRi2HAewKMKKoRk0t5zYHbJlYgy2QuMpkFHzX3ol3KpQ0ETLFicr%2Fn1dmBDp4Xzy7gYHRiXUUS2QZrxFFO8bYpxfCQIs1NFEMNASJOGRcti%2BHSGiFBzamVGI1w%2BTNMvqehdZLl4dz6yV4kYmvIAxn2U61R82DG4Z8EKhTOSoPQFVj4cUbLAYnahzWJgibkPuCs0U1XTJZ3e0HDS75PW%2B%2F%2FZUmeUXwU82atC2qA1XPJmdct0waIrSz6wB%2BTnyAcP7eaiyQOLz9HltZBE1QZOFDtbkFHw0ATXQOWY4uckQViERVUgHm1DxpueDMcPGn9mwzu6ma65IjXP5458McAoWBzXZHkdomtgIAGgiR6RzcbAyXCLa9pOFDu3ce0n2%2BG77gkaDXuc7u6LrrzAY%2FdCcsZ2poT1Wjy%2BLQnRzJkm3xJuEtuhvTdfwk3OiSv83ENEMsa6EWKJb0t7HlPbuomAD5cg92oeyrSoEkFapuYDOXfSpCudsmbKfQbcxZsOM1aoiR8Y%2BrFiE6vGEj6%2FWR8cJtXX173HvB4k6NRl35PlUw0%2BnAxAY6pgFYY61VZt2efNURDYPnwrKKj%2BzAhNaB5XkbhfoWAy1UGpZ0cqu7H7BdXoZjuoHSqWerPsBMtDL5DwsW5ltr3otY5lW63VYkx4FAEFLrt2YBd%2B9jTwZ%2FiZ21VSsmb7DAHH1PrEqCLEW96jsJHsn8Lxxgy0cBMot%2BGOvrJUdutU0XzLhof51gM%2FEAOTgSU7afrWKfycoTm0R56sBTPgKsw%2F7CFJRI%2F5T8&X-Amz-Signature=84680e59fae7203f47795dba2d40be9a0c6eeacf239445e39d502025a2c56104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHXKBEUS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAf6GJoIW3fBtjKoYHKy0EhBWC%2BaFtnmiyeb61Of0oUOAiBUgC6PdEK1n0%2Bt2kaHnZ%2FSZdTovkcc6p4S5fRkxomKpCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2BlrqVQ%2B%2BgxHO4SqhKtwD%2F61mrtTrEWMCvmi1sExMK3E4cgLb1oIC6edvB42NLUWcPeJL0sFvfV%2B9otFfIVwlnV4uKu2ny6hLZ3SE8oP5VoCxVaYgYQQdH1%2FXzR%2F8aOfljHYsnQmG4wVXU9iskPFW%2BY9L%2B6bflA50fFmf8MwHz8aYrQbAgMUMM9j6hB4TUgt2KfSC49Sqa6ADotjlVAzDpzGaIQOkP7rO2EkIcpl0tMF1sIE1xgCWCPZMoMGykNGvaPhQnFckgnCfZuW%2Bv3Aj%2F06yt5Zbbd9tYCd8%2Fz96UAfSkUg5%2Buo3BPFoYXRGV45bkiYp6Mv5F612MzIvwqxY5Q0p32HjWlwLV4BqyClqYKM1Sav%2BdoFdhjgUdYUKGoB6WGO4NiknewbrUOdfBGbzgytall79HgtzYx20By%2BPfgz%2Bcl5lYBzw0uPKL9MnI%2B%2Fhrg0ca%2B93jq81FROBaMC3KgUOsAfsAeSournT5fmedr9EtNCNqhabzygqvLVq%2FHkThUGGVGPG%2BzCV8lPUeTLFD85jKFAAmHQYINGxQ7PCYVMqc51IBY%2FTxeADlFEdBFKy8n4XhM9TLFhvqktspVnVcA20bA%2BCXCYn1pbHs2uTm7NbcCGTYZOd2wWBMMLtEDDXCPPNXI18XN6MgoQwhOrAxAY6pgEo%2BO9dHDsVqDx8diRVGffEhEXAE7T4VJD%2FvAlUUavk05ueKgmZ5gI%2BLKw0C9VoFIjygI9DlsEuV4uA3loUmDHW47deiBqaVxGcIRgAo0%2BZXjX90ygBvO1HAIbPU9Ftdh2ToyFVv8ShkHMLEE3iS9CLx1RSir12ciwEjLuL1S3HFXaenVyAJUGjWGa0jWqAjtwEWT70c7dee%2BtzeSoGrFzPO24VTk8N&X-Amz-Signature=8bfa194906b2556c1de8b9acfe5ae2f1ab4c560a831dd1576137f352aef74b39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHXKBEUS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAf6GJoIW3fBtjKoYHKy0EhBWC%2BaFtnmiyeb61Of0oUOAiBUgC6PdEK1n0%2Bt2kaHnZ%2FSZdTovkcc6p4S5fRkxomKpCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2BlrqVQ%2B%2BgxHO4SqhKtwD%2F61mrtTrEWMCvmi1sExMK3E4cgLb1oIC6edvB42NLUWcPeJL0sFvfV%2B9otFfIVwlnV4uKu2ny6hLZ3SE8oP5VoCxVaYgYQQdH1%2FXzR%2F8aOfljHYsnQmG4wVXU9iskPFW%2BY9L%2B6bflA50fFmf8MwHz8aYrQbAgMUMM9j6hB4TUgt2KfSC49Sqa6ADotjlVAzDpzGaIQOkP7rO2EkIcpl0tMF1sIE1xgCWCPZMoMGykNGvaPhQnFckgnCfZuW%2Bv3Aj%2F06yt5Zbbd9tYCd8%2Fz96UAfSkUg5%2Buo3BPFoYXRGV45bkiYp6Mv5F612MzIvwqxY5Q0p32HjWlwLV4BqyClqYKM1Sav%2BdoFdhjgUdYUKGoB6WGO4NiknewbrUOdfBGbzgytall79HgtzYx20By%2BPfgz%2Bcl5lYBzw0uPKL9MnI%2B%2Fhrg0ca%2B93jq81FROBaMC3KgUOsAfsAeSournT5fmedr9EtNCNqhabzygqvLVq%2FHkThUGGVGPG%2BzCV8lPUeTLFD85jKFAAmHQYINGxQ7PCYVMqc51IBY%2FTxeADlFEdBFKy8n4XhM9TLFhvqktspVnVcA20bA%2BCXCYn1pbHs2uTm7NbcCGTYZOd2wWBMMLtEDDXCPPNXI18XN6MgoQwhOrAxAY6pgEo%2BO9dHDsVqDx8diRVGffEhEXAE7T4VJD%2FvAlUUavk05ueKgmZ5gI%2BLKw0C9VoFIjygI9DlsEuV4uA3loUmDHW47deiBqaVxGcIRgAo0%2BZXjX90ygBvO1HAIbPU9Ftdh2ToyFVv8ShkHMLEE3iS9CLx1RSir12ciwEjLuL1S3HFXaenVyAJUGjWGa0jWqAjtwEWT70c7dee%2BtzeSoGrFzPO24VTk8N&X-Amz-Signature=3db749070e66cb05ecdbfdf2b8b33675cd8bba03ba35bf6c29e16005b031eccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHXKBEUS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAf6GJoIW3fBtjKoYHKy0EhBWC%2BaFtnmiyeb61Of0oUOAiBUgC6PdEK1n0%2Bt2kaHnZ%2FSZdTovkcc6p4S5fRkxomKpCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2BlrqVQ%2B%2BgxHO4SqhKtwD%2F61mrtTrEWMCvmi1sExMK3E4cgLb1oIC6edvB42NLUWcPeJL0sFvfV%2B9otFfIVwlnV4uKu2ny6hLZ3SE8oP5VoCxVaYgYQQdH1%2FXzR%2F8aOfljHYsnQmG4wVXU9iskPFW%2BY9L%2B6bflA50fFmf8MwHz8aYrQbAgMUMM9j6hB4TUgt2KfSC49Sqa6ADotjlVAzDpzGaIQOkP7rO2EkIcpl0tMF1sIE1xgCWCPZMoMGykNGvaPhQnFckgnCfZuW%2Bv3Aj%2F06yt5Zbbd9tYCd8%2Fz96UAfSkUg5%2Buo3BPFoYXRGV45bkiYp6Mv5F612MzIvwqxY5Q0p32HjWlwLV4BqyClqYKM1Sav%2BdoFdhjgUdYUKGoB6WGO4NiknewbrUOdfBGbzgytall79HgtzYx20By%2BPfgz%2Bcl5lYBzw0uPKL9MnI%2B%2Fhrg0ca%2B93jq81FROBaMC3KgUOsAfsAeSournT5fmedr9EtNCNqhabzygqvLVq%2FHkThUGGVGPG%2BzCV8lPUeTLFD85jKFAAmHQYINGxQ7PCYVMqc51IBY%2FTxeADlFEdBFKy8n4XhM9TLFhvqktspVnVcA20bA%2BCXCYn1pbHs2uTm7NbcCGTYZOd2wWBMMLtEDDXCPPNXI18XN6MgoQwhOrAxAY6pgEo%2BO9dHDsVqDx8diRVGffEhEXAE7T4VJD%2FvAlUUavk05ueKgmZ5gI%2BLKw0C9VoFIjygI9DlsEuV4uA3loUmDHW47deiBqaVxGcIRgAo0%2BZXjX90ygBvO1HAIbPU9Ftdh2ToyFVv8ShkHMLEE3iS9CLx1RSir12ciwEjLuL1S3HFXaenVyAJUGjWGa0jWqAjtwEWT70c7dee%2BtzeSoGrFzPO24VTk8N&X-Amz-Signature=bd43a67193b683a392a9eea12555a42e0b2952ed3b4bebca954b6074c9fb6e5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHXKBEUS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAf6GJoIW3fBtjKoYHKy0EhBWC%2BaFtnmiyeb61Of0oUOAiBUgC6PdEK1n0%2Bt2kaHnZ%2FSZdTovkcc6p4S5fRkxomKpCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2BlrqVQ%2B%2BgxHO4SqhKtwD%2F61mrtTrEWMCvmi1sExMK3E4cgLb1oIC6edvB42NLUWcPeJL0sFvfV%2B9otFfIVwlnV4uKu2ny6hLZ3SE8oP5VoCxVaYgYQQdH1%2FXzR%2F8aOfljHYsnQmG4wVXU9iskPFW%2BY9L%2B6bflA50fFmf8MwHz8aYrQbAgMUMM9j6hB4TUgt2KfSC49Sqa6ADotjlVAzDpzGaIQOkP7rO2EkIcpl0tMF1sIE1xgCWCPZMoMGykNGvaPhQnFckgnCfZuW%2Bv3Aj%2F06yt5Zbbd9tYCd8%2Fz96UAfSkUg5%2Buo3BPFoYXRGV45bkiYp6Mv5F612MzIvwqxY5Q0p32HjWlwLV4BqyClqYKM1Sav%2BdoFdhjgUdYUKGoB6WGO4NiknewbrUOdfBGbzgytall79HgtzYx20By%2BPfgz%2Bcl5lYBzw0uPKL9MnI%2B%2Fhrg0ca%2B93jq81FROBaMC3KgUOsAfsAeSournT5fmedr9EtNCNqhabzygqvLVq%2FHkThUGGVGPG%2BzCV8lPUeTLFD85jKFAAmHQYINGxQ7PCYVMqc51IBY%2FTxeADlFEdBFKy8n4XhM9TLFhvqktspVnVcA20bA%2BCXCYn1pbHs2uTm7NbcCGTYZOd2wWBMMLtEDDXCPPNXI18XN6MgoQwhOrAxAY6pgEo%2BO9dHDsVqDx8diRVGffEhEXAE7T4VJD%2FvAlUUavk05ueKgmZ5gI%2BLKw0C9VoFIjygI9DlsEuV4uA3loUmDHW47deiBqaVxGcIRgAo0%2BZXjX90ygBvO1HAIbPU9Ftdh2ToyFVv8ShkHMLEE3iS9CLx1RSir12ciwEjLuL1S3HFXaenVyAJUGjWGa0jWqAjtwEWT70c7dee%2BtzeSoGrFzPO24VTk8N&X-Amz-Signature=7c3b5862592e8167f631eb01177d371db67b3e4a8a2107199a816463ec19d281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHXKBEUS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAf6GJoIW3fBtjKoYHKy0EhBWC%2BaFtnmiyeb61Of0oUOAiBUgC6PdEK1n0%2Bt2kaHnZ%2FSZdTovkcc6p4S5fRkxomKpCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2BlrqVQ%2B%2BgxHO4SqhKtwD%2F61mrtTrEWMCvmi1sExMK3E4cgLb1oIC6edvB42NLUWcPeJL0sFvfV%2B9otFfIVwlnV4uKu2ny6hLZ3SE8oP5VoCxVaYgYQQdH1%2FXzR%2F8aOfljHYsnQmG4wVXU9iskPFW%2BY9L%2B6bflA50fFmf8MwHz8aYrQbAgMUMM9j6hB4TUgt2KfSC49Sqa6ADotjlVAzDpzGaIQOkP7rO2EkIcpl0tMF1sIE1xgCWCPZMoMGykNGvaPhQnFckgnCfZuW%2Bv3Aj%2F06yt5Zbbd9tYCd8%2Fz96UAfSkUg5%2Buo3BPFoYXRGV45bkiYp6Mv5F612MzIvwqxY5Q0p32HjWlwLV4BqyClqYKM1Sav%2BdoFdhjgUdYUKGoB6WGO4NiknewbrUOdfBGbzgytall79HgtzYx20By%2BPfgz%2Bcl5lYBzw0uPKL9MnI%2B%2Fhrg0ca%2B93jq81FROBaMC3KgUOsAfsAeSournT5fmedr9EtNCNqhabzygqvLVq%2FHkThUGGVGPG%2BzCV8lPUeTLFD85jKFAAmHQYINGxQ7PCYVMqc51IBY%2FTxeADlFEdBFKy8n4XhM9TLFhvqktspVnVcA20bA%2BCXCYn1pbHs2uTm7NbcCGTYZOd2wWBMMLtEDDXCPPNXI18XN6MgoQwhOrAxAY6pgEo%2BO9dHDsVqDx8diRVGffEhEXAE7T4VJD%2FvAlUUavk05ueKgmZ5gI%2BLKw0C9VoFIjygI9DlsEuV4uA3loUmDHW47deiBqaVxGcIRgAo0%2BZXjX90ygBvO1HAIbPU9Ftdh2ToyFVv8ShkHMLEE3iS9CLx1RSir12ciwEjLuL1S3HFXaenVyAJUGjWGa0jWqAjtwEWT70c7dee%2BtzeSoGrFzPO24VTk8N&X-Amz-Signature=0136e676c91a340855ea27946a1b44400a5491a5eb4835a2276be77fa577f5a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHXKBEUS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAf6GJoIW3fBtjKoYHKy0EhBWC%2BaFtnmiyeb61Of0oUOAiBUgC6PdEK1n0%2Bt2kaHnZ%2FSZdTovkcc6p4S5fRkxomKpCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2BlrqVQ%2B%2BgxHO4SqhKtwD%2F61mrtTrEWMCvmi1sExMK3E4cgLb1oIC6edvB42NLUWcPeJL0sFvfV%2B9otFfIVwlnV4uKu2ny6hLZ3SE8oP5VoCxVaYgYQQdH1%2FXzR%2F8aOfljHYsnQmG4wVXU9iskPFW%2BY9L%2B6bflA50fFmf8MwHz8aYrQbAgMUMM9j6hB4TUgt2KfSC49Sqa6ADotjlVAzDpzGaIQOkP7rO2EkIcpl0tMF1sIE1xgCWCPZMoMGykNGvaPhQnFckgnCfZuW%2Bv3Aj%2F06yt5Zbbd9tYCd8%2Fz96UAfSkUg5%2Buo3BPFoYXRGV45bkiYp6Mv5F612MzIvwqxY5Q0p32HjWlwLV4BqyClqYKM1Sav%2BdoFdhjgUdYUKGoB6WGO4NiknewbrUOdfBGbzgytall79HgtzYx20By%2BPfgz%2Bcl5lYBzw0uPKL9MnI%2B%2Fhrg0ca%2B93jq81FROBaMC3KgUOsAfsAeSournT5fmedr9EtNCNqhabzygqvLVq%2FHkThUGGVGPG%2BzCV8lPUeTLFD85jKFAAmHQYINGxQ7PCYVMqc51IBY%2FTxeADlFEdBFKy8n4XhM9TLFhvqktspVnVcA20bA%2BCXCYn1pbHs2uTm7NbcCGTYZOd2wWBMMLtEDDXCPPNXI18XN6MgoQwhOrAxAY6pgEo%2BO9dHDsVqDx8diRVGffEhEXAE7T4VJD%2FvAlUUavk05ueKgmZ5gI%2BLKw0C9VoFIjygI9DlsEuV4uA3loUmDHW47deiBqaVxGcIRgAo0%2BZXjX90ygBvO1HAIbPU9Ftdh2ToyFVv8ShkHMLEE3iS9CLx1RSir12ciwEjLuL1S3HFXaenVyAJUGjWGa0jWqAjtwEWT70c7dee%2BtzeSoGrFzPO24VTk8N&X-Amz-Signature=e3e6f39d6eaac974d8372d84f654203aa2921f14fd5cac194a6322b8fcf0fe9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
