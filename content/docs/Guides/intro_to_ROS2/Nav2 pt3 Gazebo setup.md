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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWDFGKRI%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIADWY%2BD9ouLqQFuFTNJ5Mv%2Btu%2BwlA1OHDBdUQt%2FMj%2F74AiAXsO0uI49d%2B31O%2FfWx7du5gZS7NvGI%2F1iOCPdxiwGd3Sr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMhCxZFaIwnGASbnnmKtwDZQi3fQgxAZ3Ss%2B6wjT3wlP%2BktRxDfb6IqarE6GO99u%2BaSGSg9fTMfUdkKUy%2BZdlevhR5P23uRO%2BGv%2BC%2BnEqKMyU9tHuiSHKbWefe0fPKYUdkOROm47az7oMdlMUwkhjSwZ8Ykrg5PDpnRitHbZFyaeHZuj8d%2BdXnNIi3nef%2BlefISN1rqKdtdrO79aWfaKN%2Bl%2B067flMd1qz8SOXD2FsEoK8Mi3QThMt8KjqjWFQvdUpTQkAlO2Jf7lnu5G%2BkonyT6QSBo%2BFr0sAvv0hwfdQmm%2FZGStY%2FShE2SfpJhPUWOtxlC0db%2FsSU2J3ueILV%2Bptc6NocKeLq8ZXhyEPVtZkQmsiCnEEnpRLTiRsbCC2PxutKEsUxhHMWaOJot2Exp78WGymHtmmRzyB46yMV48igaStq4rXJzHPjAqPLL6ku3LzQUCWjQgdmtVrTJxSgUch9zEPSpZb3rw3IdBMT4ZBT%2FWEDoxE0G4XEMRyuovm24lKsXZtV6Z30QalKws0NC8MpeAhR7cuMj6mJ1h%2FNalAXx3QTTOHoIT7AENoryiGX1CEN04qkOpBMB5CC7dwbLMJCnuSmvtrk94KO0%2B2fF6KnY%2Fot4f4WivxnPZeGeCIy5Lx5soPrk4I3OtDLsIwlKbz0AY6pgFPjmbdDlGanwe%2FxO1ZUEYz1CjNGxDj6Wz5KfE1A7j7z6idsRdQsgAniJH9YA2z1kzC29HgY2j4X4roY0G93eYcZOi6Amw5GuIqwL4P2SQuGBihoL6I9r6Hn4tjNqTrCAjnrmAxDRDyeNTXGzj5Xgo8lAGS2qZypFJNOfhAxgfCYB3CpmZ0ZLMAf%2BCitc6iOW2POp4web9WOFfNEqXRaAZcF1rSpy0r&X-Amz-Signature=0b9bef5d52502860431c5e07fb433787e8e4c9b730beff5bfe137cbc9274ad08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWDFGKRI%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIADWY%2BD9ouLqQFuFTNJ5Mv%2Btu%2BwlA1OHDBdUQt%2FMj%2F74AiAXsO0uI49d%2B31O%2FfWx7du5gZS7NvGI%2F1iOCPdxiwGd3Sr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMhCxZFaIwnGASbnnmKtwDZQi3fQgxAZ3Ss%2B6wjT3wlP%2BktRxDfb6IqarE6GO99u%2BaSGSg9fTMfUdkKUy%2BZdlevhR5P23uRO%2BGv%2BC%2BnEqKMyU9tHuiSHKbWefe0fPKYUdkOROm47az7oMdlMUwkhjSwZ8Ykrg5PDpnRitHbZFyaeHZuj8d%2BdXnNIi3nef%2BlefISN1rqKdtdrO79aWfaKN%2Bl%2B067flMd1qz8SOXD2FsEoK8Mi3QThMt8KjqjWFQvdUpTQkAlO2Jf7lnu5G%2BkonyT6QSBo%2BFr0sAvv0hwfdQmm%2FZGStY%2FShE2SfpJhPUWOtxlC0db%2FsSU2J3ueILV%2Bptc6NocKeLq8ZXhyEPVtZkQmsiCnEEnpRLTiRsbCC2PxutKEsUxhHMWaOJot2Exp78WGymHtmmRzyB46yMV48igaStq4rXJzHPjAqPLL6ku3LzQUCWjQgdmtVrTJxSgUch9zEPSpZb3rw3IdBMT4ZBT%2FWEDoxE0G4XEMRyuovm24lKsXZtV6Z30QalKws0NC8MpeAhR7cuMj6mJ1h%2FNalAXx3QTTOHoIT7AENoryiGX1CEN04qkOpBMB5CC7dwbLMJCnuSmvtrk94KO0%2B2fF6KnY%2Fot4f4WivxnPZeGeCIy5Lx5soPrk4I3OtDLsIwlKbz0AY6pgFPjmbdDlGanwe%2FxO1ZUEYz1CjNGxDj6Wz5KfE1A7j7z6idsRdQsgAniJH9YA2z1kzC29HgY2j4X4roY0G93eYcZOi6Amw5GuIqwL4P2SQuGBihoL6I9r6Hn4tjNqTrCAjnrmAxDRDyeNTXGzj5Xgo8lAGS2qZypFJNOfhAxgfCYB3CpmZ0ZLMAf%2BCitc6iOW2POp4web9WOFfNEqXRaAZcF1rSpy0r&X-Amz-Signature=7cd40153073a22469c3d65f2f83246ee227a0297b1d5bc9879e83dece5f2d50e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWDFGKRI%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIADWY%2BD9ouLqQFuFTNJ5Mv%2Btu%2BwlA1OHDBdUQt%2FMj%2F74AiAXsO0uI49d%2B31O%2FfWx7du5gZS7NvGI%2F1iOCPdxiwGd3Sr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMhCxZFaIwnGASbnnmKtwDZQi3fQgxAZ3Ss%2B6wjT3wlP%2BktRxDfb6IqarE6GO99u%2BaSGSg9fTMfUdkKUy%2BZdlevhR5P23uRO%2BGv%2BC%2BnEqKMyU9tHuiSHKbWefe0fPKYUdkOROm47az7oMdlMUwkhjSwZ8Ykrg5PDpnRitHbZFyaeHZuj8d%2BdXnNIi3nef%2BlefISN1rqKdtdrO79aWfaKN%2Bl%2B067flMd1qz8SOXD2FsEoK8Mi3QThMt8KjqjWFQvdUpTQkAlO2Jf7lnu5G%2BkonyT6QSBo%2BFr0sAvv0hwfdQmm%2FZGStY%2FShE2SfpJhPUWOtxlC0db%2FsSU2J3ueILV%2Bptc6NocKeLq8ZXhyEPVtZkQmsiCnEEnpRLTiRsbCC2PxutKEsUxhHMWaOJot2Exp78WGymHtmmRzyB46yMV48igaStq4rXJzHPjAqPLL6ku3LzQUCWjQgdmtVrTJxSgUch9zEPSpZb3rw3IdBMT4ZBT%2FWEDoxE0G4XEMRyuovm24lKsXZtV6Z30QalKws0NC8MpeAhR7cuMj6mJ1h%2FNalAXx3QTTOHoIT7AENoryiGX1CEN04qkOpBMB5CC7dwbLMJCnuSmvtrk94KO0%2B2fF6KnY%2Fot4f4WivxnPZeGeCIy5Lx5soPrk4I3OtDLsIwlKbz0AY6pgFPjmbdDlGanwe%2FxO1ZUEYz1CjNGxDj6Wz5KfE1A7j7z6idsRdQsgAniJH9YA2z1kzC29HgY2j4X4roY0G93eYcZOi6Amw5GuIqwL4P2SQuGBihoL6I9r6Hn4tjNqTrCAjnrmAxDRDyeNTXGzj5Xgo8lAGS2qZypFJNOfhAxgfCYB3CpmZ0ZLMAf%2BCitc6iOW2POp4web9WOFfNEqXRaAZcF1rSpy0r&X-Amz-Signature=5b0589aa6bf71edb1f31d5c0f3916f32aadd2007cd87045ebc8b247aa3cacba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWDFGKRI%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIADWY%2BD9ouLqQFuFTNJ5Mv%2Btu%2BwlA1OHDBdUQt%2FMj%2F74AiAXsO0uI49d%2B31O%2FfWx7du5gZS7NvGI%2F1iOCPdxiwGd3Sr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMhCxZFaIwnGASbnnmKtwDZQi3fQgxAZ3Ss%2B6wjT3wlP%2BktRxDfb6IqarE6GO99u%2BaSGSg9fTMfUdkKUy%2BZdlevhR5P23uRO%2BGv%2BC%2BnEqKMyU9tHuiSHKbWefe0fPKYUdkOROm47az7oMdlMUwkhjSwZ8Ykrg5PDpnRitHbZFyaeHZuj8d%2BdXnNIi3nef%2BlefISN1rqKdtdrO79aWfaKN%2Bl%2B067flMd1qz8SOXD2FsEoK8Mi3QThMt8KjqjWFQvdUpTQkAlO2Jf7lnu5G%2BkonyT6QSBo%2BFr0sAvv0hwfdQmm%2FZGStY%2FShE2SfpJhPUWOtxlC0db%2FsSU2J3ueILV%2Bptc6NocKeLq8ZXhyEPVtZkQmsiCnEEnpRLTiRsbCC2PxutKEsUxhHMWaOJot2Exp78WGymHtmmRzyB46yMV48igaStq4rXJzHPjAqPLL6ku3LzQUCWjQgdmtVrTJxSgUch9zEPSpZb3rw3IdBMT4ZBT%2FWEDoxE0G4XEMRyuovm24lKsXZtV6Z30QalKws0NC8MpeAhR7cuMj6mJ1h%2FNalAXx3QTTOHoIT7AENoryiGX1CEN04qkOpBMB5CC7dwbLMJCnuSmvtrk94KO0%2B2fF6KnY%2Fot4f4WivxnPZeGeCIy5Lx5soPrk4I3OtDLsIwlKbz0AY6pgFPjmbdDlGanwe%2FxO1ZUEYz1CjNGxDj6Wz5KfE1A7j7z6idsRdQsgAniJH9YA2z1kzC29HgY2j4X4roY0G93eYcZOi6Amw5GuIqwL4P2SQuGBihoL6I9r6Hn4tjNqTrCAjnrmAxDRDyeNTXGzj5Xgo8lAGS2qZypFJNOfhAxgfCYB3CpmZ0ZLMAf%2BCitc6iOW2POp4web9WOFfNEqXRaAZcF1rSpy0r&X-Amz-Signature=b8d2dac4ef2da7543de8a3b2e419a31882e33e2ee43219d1e97ba43706a8a068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO7FFY7X%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCICQXTVM0kaaUinKdq3EVs05GHgH8tCvunp1efedM69NPAiB6167syWasumPW2XtQcNMDCHeEgbe0PDLXFrWReaD%2BKir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMbwsMbNnur33zkI9fKtwDJlciEvVI1MMpUiOWuX7inu4Cck9wbeLqJ9xOrm1UIDDQJPD2QAVihH5GQCcpB6UgWAvA9WQH6ApI53xRbsh84aVtLddtKGJox%2FkywFkB2WxNHuFzxzm8dBUj2O%2BwyWKqTanV8jULjEo9HwXiCXtsxxb%2BLrjdssKVgPhqI%2Bv%2FxKox0BInZJTrDaqAcnNBz35hpiQF0Hs54e%2B4AFamqpvQgmAu18VZZlhkn%2F2Fr%2B3mA2yfV8Ta6S7GBN4tCi7Ep3Qda1dDIWFiuWC2Oa4HoNeWaXpvHILDE2n8n7LRZipqqeg7YEtOTBakpM4dDDtwyTy49xmBoNMSNLUzP7gUOYKc3lPDhcdpxkz3SHMOGehH63HiTQdE%2FH3ln7JWXKOL%2F01m4bekOzyoEUB65OJAr9F6icKgukdN92d0JjtpffXvbqJx%2FBA%2B1ErHQ8%2B5u%2Bov1frLSoMOnTjV59kx5iayt9CGe4RCpbJhPs0T%2BGjM5ziSEkRyyRqrw9U%2B83KQLzf8p9lhcJtoxODiDojRc0JMAUGSTKHn6N4LEZMqfzqJmawWNuVvZV1QGMgIelCc2BpVXppjjUMjoq%2FpusbCBpkaGFiTPkIvoriVHNAOGevKg5ueWCUhXxRLEB8qFzmYRqkwxqTz0AY6pgGtK4YJJobpZeq9896SduqYa6KkLF2VtsdR0zIrxwjjeCFVKkLkOPrzyupl254f0hY6OKK7M3v3ypCOAqjACBTfzD62EUSP6nNdQTOPEETw5lKeGdkQvfa%2Fuc2k6HbFxgkaL6NFzqL9cOZGMCuD9ah%2Fc%2Fi5%2BtYJiER2W0LLO25EASYCiKf0Pb2rwKwLXAXI5wnumv1CrMtYNrivLTExfmoc7SA8dcsX&X-Amz-Signature=36e7846b351e645ad82c28338e09411607bf7c1bea93b5e799c6ca04e4031619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWDFGKRI%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIADWY%2BD9ouLqQFuFTNJ5Mv%2Btu%2BwlA1OHDBdUQt%2FMj%2F74AiAXsO0uI49d%2B31O%2FfWx7du5gZS7NvGI%2F1iOCPdxiwGd3Sr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMhCxZFaIwnGASbnnmKtwDZQi3fQgxAZ3Ss%2B6wjT3wlP%2BktRxDfb6IqarE6GO99u%2BaSGSg9fTMfUdkKUy%2BZdlevhR5P23uRO%2BGv%2BC%2BnEqKMyU9tHuiSHKbWefe0fPKYUdkOROm47az7oMdlMUwkhjSwZ8Ykrg5PDpnRitHbZFyaeHZuj8d%2BdXnNIi3nef%2BlefISN1rqKdtdrO79aWfaKN%2Bl%2B067flMd1qz8SOXD2FsEoK8Mi3QThMt8KjqjWFQvdUpTQkAlO2Jf7lnu5G%2BkonyT6QSBo%2BFr0sAvv0hwfdQmm%2FZGStY%2FShE2SfpJhPUWOtxlC0db%2FsSU2J3ueILV%2Bptc6NocKeLq8ZXhyEPVtZkQmsiCnEEnpRLTiRsbCC2PxutKEsUxhHMWaOJot2Exp78WGymHtmmRzyB46yMV48igaStq4rXJzHPjAqPLL6ku3LzQUCWjQgdmtVrTJxSgUch9zEPSpZb3rw3IdBMT4ZBT%2FWEDoxE0G4XEMRyuovm24lKsXZtV6Z30QalKws0NC8MpeAhR7cuMj6mJ1h%2FNalAXx3QTTOHoIT7AENoryiGX1CEN04qkOpBMB5CC7dwbLMJCnuSmvtrk94KO0%2B2fF6KnY%2Fot4f4WivxnPZeGeCIy5Lx5soPrk4I3OtDLsIwlKbz0AY6pgFPjmbdDlGanwe%2FxO1ZUEYz1CjNGxDj6Wz5KfE1A7j7z6idsRdQsgAniJH9YA2z1kzC29HgY2j4X4roY0G93eYcZOi6Amw5GuIqwL4P2SQuGBihoL6I9r6Hn4tjNqTrCAjnrmAxDRDyeNTXGzj5Xgo8lAGS2qZypFJNOfhAxgfCYB3CpmZ0ZLMAf%2BCitc6iOW2POp4web9WOFfNEqXRaAZcF1rSpy0r&X-Amz-Signature=a97e350331a98da10197c3e3fcdef9815681334e2803973c9876d90a71aeb4b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWDFGKRI%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIADWY%2BD9ouLqQFuFTNJ5Mv%2Btu%2BwlA1OHDBdUQt%2FMj%2F74AiAXsO0uI49d%2B31O%2FfWx7du5gZS7NvGI%2F1iOCPdxiwGd3Sr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMhCxZFaIwnGASbnnmKtwDZQi3fQgxAZ3Ss%2B6wjT3wlP%2BktRxDfb6IqarE6GO99u%2BaSGSg9fTMfUdkKUy%2BZdlevhR5P23uRO%2BGv%2BC%2BnEqKMyU9tHuiSHKbWefe0fPKYUdkOROm47az7oMdlMUwkhjSwZ8Ykrg5PDpnRitHbZFyaeHZuj8d%2BdXnNIi3nef%2BlefISN1rqKdtdrO79aWfaKN%2Bl%2B067flMd1qz8SOXD2FsEoK8Mi3QThMt8KjqjWFQvdUpTQkAlO2Jf7lnu5G%2BkonyT6QSBo%2BFr0sAvv0hwfdQmm%2FZGStY%2FShE2SfpJhPUWOtxlC0db%2FsSU2J3ueILV%2Bptc6NocKeLq8ZXhyEPVtZkQmsiCnEEnpRLTiRsbCC2PxutKEsUxhHMWaOJot2Exp78WGymHtmmRzyB46yMV48igaStq4rXJzHPjAqPLL6ku3LzQUCWjQgdmtVrTJxSgUch9zEPSpZb3rw3IdBMT4ZBT%2FWEDoxE0G4XEMRyuovm24lKsXZtV6Z30QalKws0NC8MpeAhR7cuMj6mJ1h%2FNalAXx3QTTOHoIT7AENoryiGX1CEN04qkOpBMB5CC7dwbLMJCnuSmvtrk94KO0%2B2fF6KnY%2Fot4f4WivxnPZeGeCIy5Lx5soPrk4I3OtDLsIwlKbz0AY6pgFPjmbdDlGanwe%2FxO1ZUEYz1CjNGxDj6Wz5KfE1A7j7z6idsRdQsgAniJH9YA2z1kzC29HgY2j4X4roY0G93eYcZOi6Amw5GuIqwL4P2SQuGBihoL6I9r6Hn4tjNqTrCAjnrmAxDRDyeNTXGzj5Xgo8lAGS2qZypFJNOfhAxgfCYB3CpmZ0ZLMAf%2BCitc6iOW2POp4web9WOFfNEqXRaAZcF1rSpy0r&X-Amz-Signature=acfbf5c8ceea9caeb8f6afb5d851b62c8bc343d5c9ad05d6e0d7638b3b0f64c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWDFGKRI%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIADWY%2BD9ouLqQFuFTNJ5Mv%2Btu%2BwlA1OHDBdUQt%2FMj%2F74AiAXsO0uI49d%2B31O%2FfWx7du5gZS7NvGI%2F1iOCPdxiwGd3Sr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMhCxZFaIwnGASbnnmKtwDZQi3fQgxAZ3Ss%2B6wjT3wlP%2BktRxDfb6IqarE6GO99u%2BaSGSg9fTMfUdkKUy%2BZdlevhR5P23uRO%2BGv%2BC%2BnEqKMyU9tHuiSHKbWefe0fPKYUdkOROm47az7oMdlMUwkhjSwZ8Ykrg5PDpnRitHbZFyaeHZuj8d%2BdXnNIi3nef%2BlefISN1rqKdtdrO79aWfaKN%2Bl%2B067flMd1qz8SOXD2FsEoK8Mi3QThMt8KjqjWFQvdUpTQkAlO2Jf7lnu5G%2BkonyT6QSBo%2BFr0sAvv0hwfdQmm%2FZGStY%2FShE2SfpJhPUWOtxlC0db%2FsSU2J3ueILV%2Bptc6NocKeLq8ZXhyEPVtZkQmsiCnEEnpRLTiRsbCC2PxutKEsUxhHMWaOJot2Exp78WGymHtmmRzyB46yMV48igaStq4rXJzHPjAqPLL6ku3LzQUCWjQgdmtVrTJxSgUch9zEPSpZb3rw3IdBMT4ZBT%2FWEDoxE0G4XEMRyuovm24lKsXZtV6Z30QalKws0NC8MpeAhR7cuMj6mJ1h%2FNalAXx3QTTOHoIT7AENoryiGX1CEN04qkOpBMB5CC7dwbLMJCnuSmvtrk94KO0%2B2fF6KnY%2Fot4f4WivxnPZeGeCIy5Lx5soPrk4I3OtDLsIwlKbz0AY6pgFPjmbdDlGanwe%2FxO1ZUEYz1CjNGxDj6Wz5KfE1A7j7z6idsRdQsgAniJH9YA2z1kzC29HgY2j4X4roY0G93eYcZOi6Amw5GuIqwL4P2SQuGBihoL6I9r6Hn4tjNqTrCAjnrmAxDRDyeNTXGzj5Xgo8lAGS2qZypFJNOfhAxgfCYB3CpmZ0ZLMAf%2BCitc6iOW2POp4web9WOFfNEqXRaAZcF1rSpy0r&X-Amz-Signature=493f64e5f85503cc9d13988df086769aee50d18d3522c62713023e82d1df3bfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWDFGKRI%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIADWY%2BD9ouLqQFuFTNJ5Mv%2Btu%2BwlA1OHDBdUQt%2FMj%2F74AiAXsO0uI49d%2B31O%2FfWx7du5gZS7NvGI%2F1iOCPdxiwGd3Sr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMhCxZFaIwnGASbnnmKtwDZQi3fQgxAZ3Ss%2B6wjT3wlP%2BktRxDfb6IqarE6GO99u%2BaSGSg9fTMfUdkKUy%2BZdlevhR5P23uRO%2BGv%2BC%2BnEqKMyU9tHuiSHKbWefe0fPKYUdkOROm47az7oMdlMUwkhjSwZ8Ykrg5PDpnRitHbZFyaeHZuj8d%2BdXnNIi3nef%2BlefISN1rqKdtdrO79aWfaKN%2Bl%2B067flMd1qz8SOXD2FsEoK8Mi3QThMt8KjqjWFQvdUpTQkAlO2Jf7lnu5G%2BkonyT6QSBo%2BFr0sAvv0hwfdQmm%2FZGStY%2FShE2SfpJhPUWOtxlC0db%2FsSU2J3ueILV%2Bptc6NocKeLq8ZXhyEPVtZkQmsiCnEEnpRLTiRsbCC2PxutKEsUxhHMWaOJot2Exp78WGymHtmmRzyB46yMV48igaStq4rXJzHPjAqPLL6ku3LzQUCWjQgdmtVrTJxSgUch9zEPSpZb3rw3IdBMT4ZBT%2FWEDoxE0G4XEMRyuovm24lKsXZtV6Z30QalKws0NC8MpeAhR7cuMj6mJ1h%2FNalAXx3QTTOHoIT7AENoryiGX1CEN04qkOpBMB5CC7dwbLMJCnuSmvtrk94KO0%2B2fF6KnY%2Fot4f4WivxnPZeGeCIy5Lx5soPrk4I3OtDLsIwlKbz0AY6pgFPjmbdDlGanwe%2FxO1ZUEYz1CjNGxDj6Wz5KfE1A7j7z6idsRdQsgAniJH9YA2z1kzC29HgY2j4X4roY0G93eYcZOi6Amw5GuIqwL4P2SQuGBihoL6I9r6Hn4tjNqTrCAjnrmAxDRDyeNTXGzj5Xgo8lAGS2qZypFJNOfhAxgfCYB3CpmZ0ZLMAf%2BCitc6iOW2POp4web9WOFfNEqXRaAZcF1rSpy0r&X-Amz-Signature=facb7a33abea5cc686c50537f7e8e013081c75f718ec89637b05d951906e02af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWDFGKRI%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIADWY%2BD9ouLqQFuFTNJ5Mv%2Btu%2BwlA1OHDBdUQt%2FMj%2F74AiAXsO0uI49d%2B31O%2FfWx7du5gZS7NvGI%2F1iOCPdxiwGd3Sr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMhCxZFaIwnGASbnnmKtwDZQi3fQgxAZ3Ss%2B6wjT3wlP%2BktRxDfb6IqarE6GO99u%2BaSGSg9fTMfUdkKUy%2BZdlevhR5P23uRO%2BGv%2BC%2BnEqKMyU9tHuiSHKbWefe0fPKYUdkOROm47az7oMdlMUwkhjSwZ8Ykrg5PDpnRitHbZFyaeHZuj8d%2BdXnNIi3nef%2BlefISN1rqKdtdrO79aWfaKN%2Bl%2B067flMd1qz8SOXD2FsEoK8Mi3QThMt8KjqjWFQvdUpTQkAlO2Jf7lnu5G%2BkonyT6QSBo%2BFr0sAvv0hwfdQmm%2FZGStY%2FShE2SfpJhPUWOtxlC0db%2FsSU2J3ueILV%2Bptc6NocKeLq8ZXhyEPVtZkQmsiCnEEnpRLTiRsbCC2PxutKEsUxhHMWaOJot2Exp78WGymHtmmRzyB46yMV48igaStq4rXJzHPjAqPLL6ku3LzQUCWjQgdmtVrTJxSgUch9zEPSpZb3rw3IdBMT4ZBT%2FWEDoxE0G4XEMRyuovm24lKsXZtV6Z30QalKws0NC8MpeAhR7cuMj6mJ1h%2FNalAXx3QTTOHoIT7AENoryiGX1CEN04qkOpBMB5CC7dwbLMJCnuSmvtrk94KO0%2B2fF6KnY%2Fot4f4WivxnPZeGeCIy5Lx5soPrk4I3OtDLsIwlKbz0AY6pgFPjmbdDlGanwe%2FxO1ZUEYz1CjNGxDj6Wz5KfE1A7j7z6idsRdQsgAniJH9YA2z1kzC29HgY2j4X4roY0G93eYcZOi6Amw5GuIqwL4P2SQuGBihoL6I9r6Hn4tjNqTrCAjnrmAxDRDyeNTXGzj5Xgo8lAGS2qZypFJNOfhAxgfCYB3CpmZ0ZLMAf%2BCitc6iOW2POp4web9WOFfNEqXRaAZcF1rSpy0r&X-Amz-Signature=24159f3dbcd6860978d5f6c104764fe0ab80dfcb0306f4c2d18075bb7d043be2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWDFGKRI%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIADWY%2BD9ouLqQFuFTNJ5Mv%2Btu%2BwlA1OHDBdUQt%2FMj%2F74AiAXsO0uI49d%2B31O%2FfWx7du5gZS7NvGI%2F1iOCPdxiwGd3Sr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMhCxZFaIwnGASbnnmKtwDZQi3fQgxAZ3Ss%2B6wjT3wlP%2BktRxDfb6IqarE6GO99u%2BaSGSg9fTMfUdkKUy%2BZdlevhR5P23uRO%2BGv%2BC%2BnEqKMyU9tHuiSHKbWefe0fPKYUdkOROm47az7oMdlMUwkhjSwZ8Ykrg5PDpnRitHbZFyaeHZuj8d%2BdXnNIi3nef%2BlefISN1rqKdtdrO79aWfaKN%2Bl%2B067flMd1qz8SOXD2FsEoK8Mi3QThMt8KjqjWFQvdUpTQkAlO2Jf7lnu5G%2BkonyT6QSBo%2BFr0sAvv0hwfdQmm%2FZGStY%2FShE2SfpJhPUWOtxlC0db%2FsSU2J3ueILV%2Bptc6NocKeLq8ZXhyEPVtZkQmsiCnEEnpRLTiRsbCC2PxutKEsUxhHMWaOJot2Exp78WGymHtmmRzyB46yMV48igaStq4rXJzHPjAqPLL6ku3LzQUCWjQgdmtVrTJxSgUch9zEPSpZb3rw3IdBMT4ZBT%2FWEDoxE0G4XEMRyuovm24lKsXZtV6Z30QalKws0NC8MpeAhR7cuMj6mJ1h%2FNalAXx3QTTOHoIT7AENoryiGX1CEN04qkOpBMB5CC7dwbLMJCnuSmvtrk94KO0%2B2fF6KnY%2Fot4f4WivxnPZeGeCIy5Lx5soPrk4I3OtDLsIwlKbz0AY6pgFPjmbdDlGanwe%2FxO1ZUEYz1CjNGxDj6Wz5KfE1A7j7z6idsRdQsgAniJH9YA2z1kzC29HgY2j4X4roY0G93eYcZOi6Amw5GuIqwL4P2SQuGBihoL6I9r6Hn4tjNqTrCAjnrmAxDRDyeNTXGzj5Xgo8lAGS2qZypFJNOfhAxgfCYB3CpmZ0ZLMAf%2BCitc6iOW2POp4web9WOFfNEqXRaAZcF1rSpy0r&X-Amz-Signature=b31589dd1a69dbbae55db72b90273615c39282bce66857f7f6407ccada6910be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


