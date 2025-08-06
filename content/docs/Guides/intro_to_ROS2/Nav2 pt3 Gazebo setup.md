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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMKXSA25%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIATErkqR4050mNnP059CTzfhQMq%2BaXllpO%2Bxw3DZwhtsAiBRpTNONkXVMBN%2BrVCLfGupIHM8PcXQNl5ht4mSpJn%2BLCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMuZNUbnDLK4LjHiq9KtwD2Oe4XoPfGuFJvOko1OYZUaJH7keDPCZOOzFdlGhcdJNsH5FOOHwcgNOsjs5aCqDjDLGkPYkegHK2JjGl5ot%2FBtEwl%2BIXbFOll5G%2BgWPkK2mnAVvTeoZeNLGbnssp%2F6oHqzirMuaqMUBSdefdK5s1d6YEynUrMMIKQPWLISnBStSzd6%2FMSA%2FagzQ2%2BYgwBY4LOzxzxaIuvcLL6%2FUgJEpX9iwzCCfpaFvIT3qgcMJWaMlprQO0yTw0kFXFJQ4ruZKp%2Bup9bZ%2BymOOPQUGkJT2wq4YunJ5DCnoCD%2BlIfIdA0hQ7SNp%2F19%2FsJznt3JUsvIbAPitZisHIlmG%2FLTbiYkmQ1uHJQtrbMv4z3Eim3dzo5%2BqDvtmoFHEyvlYDSVpYyoSI92Wo0xecO%2FmjRUCYjspGNYF2kjEvUvRBp%2BGxna1ZvEmUH9c96y2aEWNcnRx2dMJrLCDb%2Brf3Upj4mHRTPPVrE0T4UD4tOikKE4HHqpd5CO8idMF5BIg7yhl9eJqqUP79v3xHDU25U%2Fqt1BGQvLnyuXVubMdMKxR45ODjoGXhvYfFu%2BnE189UvKJZAjo033ZdvKWz3M14KXLiePBGDdUtdfMug5agF04aA%2B3Jt4PHIG8VouQYKLvAEgs1B0owstDMxAY6pgEVnFMxQhPCVXsXz8GGv8858PWIy1m57VhX4LgvRzvZoZZgi3h5YxctVL8TO2y66Nl1UTHc38cZEHzhZmclN%2F7mOVkqlhnECy7pCw2%2BIvUeK4%2FT7%2BPx5%2FcrzynJxWlwN4R%2B1WY1emZQNpLmfuwPhmtOr68NfrMlzgsqVNd%2FHN85kOxloR4wpspuFBQZ3GEzJddpO5XzqWbcO%2FWsIRsYCA9vvofbQhfh&X-Amz-Signature=7175b361f67f0a41146452d1082734cafff8cdf31675f9adaa91b846763399bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMKXSA25%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIATErkqR4050mNnP059CTzfhQMq%2BaXllpO%2Bxw3DZwhtsAiBRpTNONkXVMBN%2BrVCLfGupIHM8PcXQNl5ht4mSpJn%2BLCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMuZNUbnDLK4LjHiq9KtwD2Oe4XoPfGuFJvOko1OYZUaJH7keDPCZOOzFdlGhcdJNsH5FOOHwcgNOsjs5aCqDjDLGkPYkegHK2JjGl5ot%2FBtEwl%2BIXbFOll5G%2BgWPkK2mnAVvTeoZeNLGbnssp%2F6oHqzirMuaqMUBSdefdK5s1d6YEynUrMMIKQPWLISnBStSzd6%2FMSA%2FagzQ2%2BYgwBY4LOzxzxaIuvcLL6%2FUgJEpX9iwzCCfpaFvIT3qgcMJWaMlprQO0yTw0kFXFJQ4ruZKp%2Bup9bZ%2BymOOPQUGkJT2wq4YunJ5DCnoCD%2BlIfIdA0hQ7SNp%2F19%2FsJznt3JUsvIbAPitZisHIlmG%2FLTbiYkmQ1uHJQtrbMv4z3Eim3dzo5%2BqDvtmoFHEyvlYDSVpYyoSI92Wo0xecO%2FmjRUCYjspGNYF2kjEvUvRBp%2BGxna1ZvEmUH9c96y2aEWNcnRx2dMJrLCDb%2Brf3Upj4mHRTPPVrE0T4UD4tOikKE4HHqpd5CO8idMF5BIg7yhl9eJqqUP79v3xHDU25U%2Fqt1BGQvLnyuXVubMdMKxR45ODjoGXhvYfFu%2BnE189UvKJZAjo033ZdvKWz3M14KXLiePBGDdUtdfMug5agF04aA%2B3Jt4PHIG8VouQYKLvAEgs1B0owstDMxAY6pgEVnFMxQhPCVXsXz8GGv8858PWIy1m57VhX4LgvRzvZoZZgi3h5YxctVL8TO2y66Nl1UTHc38cZEHzhZmclN%2F7mOVkqlhnECy7pCw2%2BIvUeK4%2FT7%2BPx5%2FcrzynJxWlwN4R%2B1WY1emZQNpLmfuwPhmtOr68NfrMlzgsqVNd%2FHN85kOxloR4wpspuFBQZ3GEzJddpO5XzqWbcO%2FWsIRsYCA9vvofbQhfh&X-Amz-Signature=5159807b53cde8e6b53eac9369441c0a4391725ad1357d021c7406bd0474e780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMKXSA25%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIATErkqR4050mNnP059CTzfhQMq%2BaXllpO%2Bxw3DZwhtsAiBRpTNONkXVMBN%2BrVCLfGupIHM8PcXQNl5ht4mSpJn%2BLCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMuZNUbnDLK4LjHiq9KtwD2Oe4XoPfGuFJvOko1OYZUaJH7keDPCZOOzFdlGhcdJNsH5FOOHwcgNOsjs5aCqDjDLGkPYkegHK2JjGl5ot%2FBtEwl%2BIXbFOll5G%2BgWPkK2mnAVvTeoZeNLGbnssp%2F6oHqzirMuaqMUBSdefdK5s1d6YEynUrMMIKQPWLISnBStSzd6%2FMSA%2FagzQ2%2BYgwBY4LOzxzxaIuvcLL6%2FUgJEpX9iwzCCfpaFvIT3qgcMJWaMlprQO0yTw0kFXFJQ4ruZKp%2Bup9bZ%2BymOOPQUGkJT2wq4YunJ5DCnoCD%2BlIfIdA0hQ7SNp%2F19%2FsJznt3JUsvIbAPitZisHIlmG%2FLTbiYkmQ1uHJQtrbMv4z3Eim3dzo5%2BqDvtmoFHEyvlYDSVpYyoSI92Wo0xecO%2FmjRUCYjspGNYF2kjEvUvRBp%2BGxna1ZvEmUH9c96y2aEWNcnRx2dMJrLCDb%2Brf3Upj4mHRTPPVrE0T4UD4tOikKE4HHqpd5CO8idMF5BIg7yhl9eJqqUP79v3xHDU25U%2Fqt1BGQvLnyuXVubMdMKxR45ODjoGXhvYfFu%2BnE189UvKJZAjo033ZdvKWz3M14KXLiePBGDdUtdfMug5agF04aA%2B3Jt4PHIG8VouQYKLvAEgs1B0owstDMxAY6pgEVnFMxQhPCVXsXz8GGv8858PWIy1m57VhX4LgvRzvZoZZgi3h5YxctVL8TO2y66Nl1UTHc38cZEHzhZmclN%2F7mOVkqlhnECy7pCw2%2BIvUeK4%2FT7%2BPx5%2FcrzynJxWlwN4R%2B1WY1emZQNpLmfuwPhmtOr68NfrMlzgsqVNd%2FHN85kOxloR4wpspuFBQZ3GEzJddpO5XzqWbcO%2FWsIRsYCA9vvofbQhfh&X-Amz-Signature=f59616d5201a6b345c39e3c7090852842b0de0a7235ffb1361ab9d1386f07702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMKXSA25%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIATErkqR4050mNnP059CTzfhQMq%2BaXllpO%2Bxw3DZwhtsAiBRpTNONkXVMBN%2BrVCLfGupIHM8PcXQNl5ht4mSpJn%2BLCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMuZNUbnDLK4LjHiq9KtwD2Oe4XoPfGuFJvOko1OYZUaJH7keDPCZOOzFdlGhcdJNsH5FOOHwcgNOsjs5aCqDjDLGkPYkegHK2JjGl5ot%2FBtEwl%2BIXbFOll5G%2BgWPkK2mnAVvTeoZeNLGbnssp%2F6oHqzirMuaqMUBSdefdK5s1d6YEynUrMMIKQPWLISnBStSzd6%2FMSA%2FagzQ2%2BYgwBY4LOzxzxaIuvcLL6%2FUgJEpX9iwzCCfpaFvIT3qgcMJWaMlprQO0yTw0kFXFJQ4ruZKp%2Bup9bZ%2BymOOPQUGkJT2wq4YunJ5DCnoCD%2BlIfIdA0hQ7SNp%2F19%2FsJznt3JUsvIbAPitZisHIlmG%2FLTbiYkmQ1uHJQtrbMv4z3Eim3dzo5%2BqDvtmoFHEyvlYDSVpYyoSI92Wo0xecO%2FmjRUCYjspGNYF2kjEvUvRBp%2BGxna1ZvEmUH9c96y2aEWNcnRx2dMJrLCDb%2Brf3Upj4mHRTPPVrE0T4UD4tOikKE4HHqpd5CO8idMF5BIg7yhl9eJqqUP79v3xHDU25U%2Fqt1BGQvLnyuXVubMdMKxR45ODjoGXhvYfFu%2BnE189UvKJZAjo033ZdvKWz3M14KXLiePBGDdUtdfMug5agF04aA%2B3Jt4PHIG8VouQYKLvAEgs1B0owstDMxAY6pgEVnFMxQhPCVXsXz8GGv8858PWIy1m57VhX4LgvRzvZoZZgi3h5YxctVL8TO2y66Nl1UTHc38cZEHzhZmclN%2F7mOVkqlhnECy7pCw2%2BIvUeK4%2FT7%2BPx5%2FcrzynJxWlwN4R%2B1WY1emZQNpLmfuwPhmtOr68NfrMlzgsqVNd%2FHN85kOxloR4wpspuFBQZ3GEzJddpO5XzqWbcO%2FWsIRsYCA9vvofbQhfh&X-Amz-Signature=937faedad50c443df448305a6690cbe08969d4d2a3fc77f3c57e40d684bb74aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F4X7SUN%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQClMXnAmY4DViKicB3mE%2FGTSbCmkjjptdz6fqLRWG%2BPDAIgP7HU5j932zni5hmm%2FSrMcTb5SDi%2FT0to%2BF9t5GExLEsq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNXgndTirSUy3xMYHyrcA336J5dDFu%2F5T96WwQ%2FoWluARZxiLD2UYd315BWDtaPiH0OEZDfShHnl%2FOjuHF9fqMzolHrIBcmcuR6%2FFPQGEzcTeUM4dlw4D2mIOf5FVcVxPjyZcFA7YRtjBDgAlmzRx%2FxQ2Ex1SLFzwWMlDNhr0BgBeWGeYyjW0ASl8mhqK0pWE6j7kebF31rLg9bXUEmitVp%2BLSIH7%2B8FLkYGowtSabrU5t873Wyf47kVlzAFhau27NsI23aOHffyMVIUR1KquN%2BxzrPWWq7oP0nfKUCrO%2BeYwMPBVeMNyqy2b8btyaL0KF2dLN0oSRyWTHTaVnCiFEZ71QvMNPsz39DbAOslomvSV4Ft%2F9x6NyhAiZVLYEEEBnVTJpmWD5KAWB%2BJNZSgqXEvS0FZ1ns9B0j7N9pOVqxUdNZVagUsDnCeGVgy0EGLTiLu60LMXIx1hv%2FML%2BpGZcICAx518AGEQ%2FMSrZku7zrJHkn23aeyA4tdccZhrfC1ZraVZaOrXOC4pIpbkBEswwej00%2FiRvgM8nFIO1uF5gkBx%2FsZseszzasQMym42Xvpd0BmwJtJxiPHhqSU1Xxiq1PTkIViMpApLpc46XpBF4WUgvhvaw4uYEn0iKLWUY33hJtsNy2bXj6LKbiUML7PzMQGOqUBiN5MxJKDrmxzuvhMBpWFwRR5bkyo8e2PYJxkS67xgf6zFsy9CzMgjT5UP9BDfrK%2Fs0dINk7czEL%2FUeOuWodLCwneQ5i9U9Nda2A%2BDUxYfytVRc3WggCpNVyGJK4AxXZ5Kn4i6FkIxclQqCKASqJiIp2UJN1%2FWfpRdwLWcFpw9odCEs71HlGovNK5DKwqHc2yA6O5krHkvRtpZvMR8NZyh9nKkSIw&X-Amz-Signature=cadeeb7315046a6967c58d80d6401a3c37d8fd2aba053b34e4ca8ef34cbad17e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMKXSA25%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIATErkqR4050mNnP059CTzfhQMq%2BaXllpO%2Bxw3DZwhtsAiBRpTNONkXVMBN%2BrVCLfGupIHM8PcXQNl5ht4mSpJn%2BLCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMuZNUbnDLK4LjHiq9KtwD2Oe4XoPfGuFJvOko1OYZUaJH7keDPCZOOzFdlGhcdJNsH5FOOHwcgNOsjs5aCqDjDLGkPYkegHK2JjGl5ot%2FBtEwl%2BIXbFOll5G%2BgWPkK2mnAVvTeoZeNLGbnssp%2F6oHqzirMuaqMUBSdefdK5s1d6YEynUrMMIKQPWLISnBStSzd6%2FMSA%2FagzQ2%2BYgwBY4LOzxzxaIuvcLL6%2FUgJEpX9iwzCCfpaFvIT3qgcMJWaMlprQO0yTw0kFXFJQ4ruZKp%2Bup9bZ%2BymOOPQUGkJT2wq4YunJ5DCnoCD%2BlIfIdA0hQ7SNp%2F19%2FsJznt3JUsvIbAPitZisHIlmG%2FLTbiYkmQ1uHJQtrbMv4z3Eim3dzo5%2BqDvtmoFHEyvlYDSVpYyoSI92Wo0xecO%2FmjRUCYjspGNYF2kjEvUvRBp%2BGxna1ZvEmUH9c96y2aEWNcnRx2dMJrLCDb%2Brf3Upj4mHRTPPVrE0T4UD4tOikKE4HHqpd5CO8idMF5BIg7yhl9eJqqUP79v3xHDU25U%2Fqt1BGQvLnyuXVubMdMKxR45ODjoGXhvYfFu%2BnE189UvKJZAjo033ZdvKWz3M14KXLiePBGDdUtdfMug5agF04aA%2B3Jt4PHIG8VouQYKLvAEgs1B0owstDMxAY6pgEVnFMxQhPCVXsXz8GGv8858PWIy1m57VhX4LgvRzvZoZZgi3h5YxctVL8TO2y66Nl1UTHc38cZEHzhZmclN%2F7mOVkqlhnECy7pCw2%2BIvUeK4%2FT7%2BPx5%2FcrzynJxWlwN4R%2B1WY1emZQNpLmfuwPhmtOr68NfrMlzgsqVNd%2FHN85kOxloR4wpspuFBQZ3GEzJddpO5XzqWbcO%2FWsIRsYCA9vvofbQhfh&X-Amz-Signature=ff0430db8e03a0e7fa98e0b089ef01b71065262569e61bc74d910064d0c70282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMKXSA25%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIATErkqR4050mNnP059CTzfhQMq%2BaXllpO%2Bxw3DZwhtsAiBRpTNONkXVMBN%2BrVCLfGupIHM8PcXQNl5ht4mSpJn%2BLCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMuZNUbnDLK4LjHiq9KtwD2Oe4XoPfGuFJvOko1OYZUaJH7keDPCZOOzFdlGhcdJNsH5FOOHwcgNOsjs5aCqDjDLGkPYkegHK2JjGl5ot%2FBtEwl%2BIXbFOll5G%2BgWPkK2mnAVvTeoZeNLGbnssp%2F6oHqzirMuaqMUBSdefdK5s1d6YEynUrMMIKQPWLISnBStSzd6%2FMSA%2FagzQ2%2BYgwBY4LOzxzxaIuvcLL6%2FUgJEpX9iwzCCfpaFvIT3qgcMJWaMlprQO0yTw0kFXFJQ4ruZKp%2Bup9bZ%2BymOOPQUGkJT2wq4YunJ5DCnoCD%2BlIfIdA0hQ7SNp%2F19%2FsJznt3JUsvIbAPitZisHIlmG%2FLTbiYkmQ1uHJQtrbMv4z3Eim3dzo5%2BqDvtmoFHEyvlYDSVpYyoSI92Wo0xecO%2FmjRUCYjspGNYF2kjEvUvRBp%2BGxna1ZvEmUH9c96y2aEWNcnRx2dMJrLCDb%2Brf3Upj4mHRTPPVrE0T4UD4tOikKE4HHqpd5CO8idMF5BIg7yhl9eJqqUP79v3xHDU25U%2Fqt1BGQvLnyuXVubMdMKxR45ODjoGXhvYfFu%2BnE189UvKJZAjo033ZdvKWz3M14KXLiePBGDdUtdfMug5agF04aA%2B3Jt4PHIG8VouQYKLvAEgs1B0owstDMxAY6pgEVnFMxQhPCVXsXz8GGv8858PWIy1m57VhX4LgvRzvZoZZgi3h5YxctVL8TO2y66Nl1UTHc38cZEHzhZmclN%2F7mOVkqlhnECy7pCw2%2BIvUeK4%2FT7%2BPx5%2FcrzynJxWlwN4R%2B1WY1emZQNpLmfuwPhmtOr68NfrMlzgsqVNd%2FHN85kOxloR4wpspuFBQZ3GEzJddpO5XzqWbcO%2FWsIRsYCA9vvofbQhfh&X-Amz-Signature=d31a50fa7241b0834aca3518556b25612af3bffa5a2b62d880932184601edcca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMKXSA25%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIATErkqR4050mNnP059CTzfhQMq%2BaXllpO%2Bxw3DZwhtsAiBRpTNONkXVMBN%2BrVCLfGupIHM8PcXQNl5ht4mSpJn%2BLCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMuZNUbnDLK4LjHiq9KtwD2Oe4XoPfGuFJvOko1OYZUaJH7keDPCZOOzFdlGhcdJNsH5FOOHwcgNOsjs5aCqDjDLGkPYkegHK2JjGl5ot%2FBtEwl%2BIXbFOll5G%2BgWPkK2mnAVvTeoZeNLGbnssp%2F6oHqzirMuaqMUBSdefdK5s1d6YEynUrMMIKQPWLISnBStSzd6%2FMSA%2FagzQ2%2BYgwBY4LOzxzxaIuvcLL6%2FUgJEpX9iwzCCfpaFvIT3qgcMJWaMlprQO0yTw0kFXFJQ4ruZKp%2Bup9bZ%2BymOOPQUGkJT2wq4YunJ5DCnoCD%2BlIfIdA0hQ7SNp%2F19%2FsJznt3JUsvIbAPitZisHIlmG%2FLTbiYkmQ1uHJQtrbMv4z3Eim3dzo5%2BqDvtmoFHEyvlYDSVpYyoSI92Wo0xecO%2FmjRUCYjspGNYF2kjEvUvRBp%2BGxna1ZvEmUH9c96y2aEWNcnRx2dMJrLCDb%2Brf3Upj4mHRTPPVrE0T4UD4tOikKE4HHqpd5CO8idMF5BIg7yhl9eJqqUP79v3xHDU25U%2Fqt1BGQvLnyuXVubMdMKxR45ODjoGXhvYfFu%2BnE189UvKJZAjo033ZdvKWz3M14KXLiePBGDdUtdfMug5agF04aA%2B3Jt4PHIG8VouQYKLvAEgs1B0owstDMxAY6pgEVnFMxQhPCVXsXz8GGv8858PWIy1m57VhX4LgvRzvZoZZgi3h5YxctVL8TO2y66Nl1UTHc38cZEHzhZmclN%2F7mOVkqlhnECy7pCw2%2BIvUeK4%2FT7%2BPx5%2FcrzynJxWlwN4R%2B1WY1emZQNpLmfuwPhmtOr68NfrMlzgsqVNd%2FHN85kOxloR4wpspuFBQZ3GEzJddpO5XzqWbcO%2FWsIRsYCA9vvofbQhfh&X-Amz-Signature=677e1ec228968dfb774df4c703942bca79cc9dcf90f395b87754256e2fac89cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMKXSA25%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIATErkqR4050mNnP059CTzfhQMq%2BaXllpO%2Bxw3DZwhtsAiBRpTNONkXVMBN%2BrVCLfGupIHM8PcXQNl5ht4mSpJn%2BLCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMuZNUbnDLK4LjHiq9KtwD2Oe4XoPfGuFJvOko1OYZUaJH7keDPCZOOzFdlGhcdJNsH5FOOHwcgNOsjs5aCqDjDLGkPYkegHK2JjGl5ot%2FBtEwl%2BIXbFOll5G%2BgWPkK2mnAVvTeoZeNLGbnssp%2F6oHqzirMuaqMUBSdefdK5s1d6YEynUrMMIKQPWLISnBStSzd6%2FMSA%2FagzQ2%2BYgwBY4LOzxzxaIuvcLL6%2FUgJEpX9iwzCCfpaFvIT3qgcMJWaMlprQO0yTw0kFXFJQ4ruZKp%2Bup9bZ%2BymOOPQUGkJT2wq4YunJ5DCnoCD%2BlIfIdA0hQ7SNp%2F19%2FsJznt3JUsvIbAPitZisHIlmG%2FLTbiYkmQ1uHJQtrbMv4z3Eim3dzo5%2BqDvtmoFHEyvlYDSVpYyoSI92Wo0xecO%2FmjRUCYjspGNYF2kjEvUvRBp%2BGxna1ZvEmUH9c96y2aEWNcnRx2dMJrLCDb%2Brf3Upj4mHRTPPVrE0T4UD4tOikKE4HHqpd5CO8idMF5BIg7yhl9eJqqUP79v3xHDU25U%2Fqt1BGQvLnyuXVubMdMKxR45ODjoGXhvYfFu%2BnE189UvKJZAjo033ZdvKWz3M14KXLiePBGDdUtdfMug5agF04aA%2B3Jt4PHIG8VouQYKLvAEgs1B0owstDMxAY6pgEVnFMxQhPCVXsXz8GGv8858PWIy1m57VhX4LgvRzvZoZZgi3h5YxctVL8TO2y66Nl1UTHc38cZEHzhZmclN%2F7mOVkqlhnECy7pCw2%2BIvUeK4%2FT7%2BPx5%2FcrzynJxWlwN4R%2B1WY1emZQNpLmfuwPhmtOr68NfrMlzgsqVNd%2FHN85kOxloR4wpspuFBQZ3GEzJddpO5XzqWbcO%2FWsIRsYCA9vvofbQhfh&X-Amz-Signature=778805288326f98b6551750b7bf84c3c460c2e69b4ceb42e11e1d893653ff05c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMKXSA25%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIATErkqR4050mNnP059CTzfhQMq%2BaXllpO%2Bxw3DZwhtsAiBRpTNONkXVMBN%2BrVCLfGupIHM8PcXQNl5ht4mSpJn%2BLCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMuZNUbnDLK4LjHiq9KtwD2Oe4XoPfGuFJvOko1OYZUaJH7keDPCZOOzFdlGhcdJNsH5FOOHwcgNOsjs5aCqDjDLGkPYkegHK2JjGl5ot%2FBtEwl%2BIXbFOll5G%2BgWPkK2mnAVvTeoZeNLGbnssp%2F6oHqzirMuaqMUBSdefdK5s1d6YEynUrMMIKQPWLISnBStSzd6%2FMSA%2FagzQ2%2BYgwBY4LOzxzxaIuvcLL6%2FUgJEpX9iwzCCfpaFvIT3qgcMJWaMlprQO0yTw0kFXFJQ4ruZKp%2Bup9bZ%2BymOOPQUGkJT2wq4YunJ5DCnoCD%2BlIfIdA0hQ7SNp%2F19%2FsJznt3JUsvIbAPitZisHIlmG%2FLTbiYkmQ1uHJQtrbMv4z3Eim3dzo5%2BqDvtmoFHEyvlYDSVpYyoSI92Wo0xecO%2FmjRUCYjspGNYF2kjEvUvRBp%2BGxna1ZvEmUH9c96y2aEWNcnRx2dMJrLCDb%2Brf3Upj4mHRTPPVrE0T4UD4tOikKE4HHqpd5CO8idMF5BIg7yhl9eJqqUP79v3xHDU25U%2Fqt1BGQvLnyuXVubMdMKxR45ODjoGXhvYfFu%2BnE189UvKJZAjo033ZdvKWz3M14KXLiePBGDdUtdfMug5agF04aA%2B3Jt4PHIG8VouQYKLvAEgs1B0owstDMxAY6pgEVnFMxQhPCVXsXz8GGv8858PWIy1m57VhX4LgvRzvZoZZgi3h5YxctVL8TO2y66Nl1UTHc38cZEHzhZmclN%2F7mOVkqlhnECy7pCw2%2BIvUeK4%2FT7%2BPx5%2FcrzynJxWlwN4R%2B1WY1emZQNpLmfuwPhmtOr68NfrMlzgsqVNd%2FHN85kOxloR4wpspuFBQZ3GEzJddpO5XzqWbcO%2FWsIRsYCA9vvofbQhfh&X-Amz-Signature=54bbe23ef613ae6dd59d07dab820f4f5658b44119c0dd595e6869b561076cce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMKXSA25%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIATErkqR4050mNnP059CTzfhQMq%2BaXllpO%2Bxw3DZwhtsAiBRpTNONkXVMBN%2BrVCLfGupIHM8PcXQNl5ht4mSpJn%2BLCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMuZNUbnDLK4LjHiq9KtwD2Oe4XoPfGuFJvOko1OYZUaJH7keDPCZOOzFdlGhcdJNsH5FOOHwcgNOsjs5aCqDjDLGkPYkegHK2JjGl5ot%2FBtEwl%2BIXbFOll5G%2BgWPkK2mnAVvTeoZeNLGbnssp%2F6oHqzirMuaqMUBSdefdK5s1d6YEynUrMMIKQPWLISnBStSzd6%2FMSA%2FagzQ2%2BYgwBY4LOzxzxaIuvcLL6%2FUgJEpX9iwzCCfpaFvIT3qgcMJWaMlprQO0yTw0kFXFJQ4ruZKp%2Bup9bZ%2BymOOPQUGkJT2wq4YunJ5DCnoCD%2BlIfIdA0hQ7SNp%2F19%2FsJznt3JUsvIbAPitZisHIlmG%2FLTbiYkmQ1uHJQtrbMv4z3Eim3dzo5%2BqDvtmoFHEyvlYDSVpYyoSI92Wo0xecO%2FmjRUCYjspGNYF2kjEvUvRBp%2BGxna1ZvEmUH9c96y2aEWNcnRx2dMJrLCDb%2Brf3Upj4mHRTPPVrE0T4UD4tOikKE4HHqpd5CO8idMF5BIg7yhl9eJqqUP79v3xHDU25U%2Fqt1BGQvLnyuXVubMdMKxR45ODjoGXhvYfFu%2BnE189UvKJZAjo033ZdvKWz3M14KXLiePBGDdUtdfMug5agF04aA%2B3Jt4PHIG8VouQYKLvAEgs1B0owstDMxAY6pgEVnFMxQhPCVXsXz8GGv8858PWIy1m57VhX4LgvRzvZoZZgi3h5YxctVL8TO2y66Nl1UTHc38cZEHzhZmclN%2F7mOVkqlhnECy7pCw2%2BIvUeK4%2FT7%2BPx5%2FcrzynJxWlwN4R%2B1WY1emZQNpLmfuwPhmtOr68NfrMlzgsqVNd%2FHN85kOxloR4wpspuFBQZ3GEzJddpO5XzqWbcO%2FWsIRsYCA9vvofbQhfh&X-Amz-Signature=0c75924a870bd1169ca73f22b89e278c4b5a149b95d9f190b45646bfadc43eed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
