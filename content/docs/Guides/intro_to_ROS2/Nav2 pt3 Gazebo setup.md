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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEPLZTO%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCID%2B83B0f%2BJNPB3JQnGkOjc5VYXeLG%2FNEUSdwpryhfpApAiA8evpa0NOPQ14fWiGr3bnZbZYfepMLAK7j7J4hQofZeir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM8vWTJCbwpPMQ6sxDKtwDuzQHEZTSvxK20%2BnzUg0f%2F5EnhuQOM7n3amkowwPUa4cnyZkOJgiKJsBXBc46sqqgt1W4FOZ7kmdHacoJvjyk2kFfbW7uSZCmf%2BWLWW5hba1OFLnJKqQGI7TIBuMP3FDqixgQby%2FonF4dVtlGCrEbweQO0E3M3iTyxUF18XcO8Fcz7E%2BJZi%2FestuMTRbfyoaxbx8HejZjafSGd7TX7oMsxGoKCo5H0zaOoqK%2BZWMZcrj6le6NjJZd92mMOZiNMjp3u93gTK%2FmPIJlg%2FDpIg683kGAok40L2CTRpTEDxCBx%2BxtgliH8rUYakC5GWuxIFbI8bMZHDbIpmXuJecBHmAKlha5ERjQyyX4o9IWgBKJRJaRhmS%2BYo8FuTcBVUYfuUIS8etnsEDAPjGbXoFS79Q%2Fv%2F%2FtlPQHl0NjrykAZDpgbfVhb74xNBSc5zStJdTMTU3MWJmHSXJGY1zWiKJKeoQKvj78Slq0mYiKV4q8qw3TrlCQFT8CmTuC9m4YRHky8uWM9j5v5ypO14kva6sxo13I2vzapTnMNDwhk7mRPlmybeFyyKKLs0vpieU0KEAE1s%2BAnC09rE%2B6zsApXTXUyozP15FfVCeMKMQLNBRvr4f6q1HNCvmeH5KPek%2Fe2hAwstum0gY6pgFd23L5rLDAlKs4Fta9QySG3Vi8YBa7TuUoy1%2FBl8KVey6LocrSFpVApP4ge7k11RwBuUMwtHff12%2BVBPsfllVK4iP8V5VKe6aS6QY1VEGoFfgKReVVriZ1DKQCSGaFibxcSi0Y%2BfsJUP9axdCqQoP9%2BIln0wnn9lNumqzFSvXFYHyhNAZaew88XeQJwJHsl7yOjRPPCN9R0QrLloZCVad1Gcfn4nuO&X-Amz-Signature=c80773791f2053c1b04d3ce7d1cf8e5257e49ea4a831e2e9d8a718508a2edd94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEPLZTO%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCID%2B83B0f%2BJNPB3JQnGkOjc5VYXeLG%2FNEUSdwpryhfpApAiA8evpa0NOPQ14fWiGr3bnZbZYfepMLAK7j7J4hQofZeir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM8vWTJCbwpPMQ6sxDKtwDuzQHEZTSvxK20%2BnzUg0f%2F5EnhuQOM7n3amkowwPUa4cnyZkOJgiKJsBXBc46sqqgt1W4FOZ7kmdHacoJvjyk2kFfbW7uSZCmf%2BWLWW5hba1OFLnJKqQGI7TIBuMP3FDqixgQby%2FonF4dVtlGCrEbweQO0E3M3iTyxUF18XcO8Fcz7E%2BJZi%2FestuMTRbfyoaxbx8HejZjafSGd7TX7oMsxGoKCo5H0zaOoqK%2BZWMZcrj6le6NjJZd92mMOZiNMjp3u93gTK%2FmPIJlg%2FDpIg683kGAok40L2CTRpTEDxCBx%2BxtgliH8rUYakC5GWuxIFbI8bMZHDbIpmXuJecBHmAKlha5ERjQyyX4o9IWgBKJRJaRhmS%2BYo8FuTcBVUYfuUIS8etnsEDAPjGbXoFS79Q%2Fv%2F%2FtlPQHl0NjrykAZDpgbfVhb74xNBSc5zStJdTMTU3MWJmHSXJGY1zWiKJKeoQKvj78Slq0mYiKV4q8qw3TrlCQFT8CmTuC9m4YRHky8uWM9j5v5ypO14kva6sxo13I2vzapTnMNDwhk7mRPlmybeFyyKKLs0vpieU0KEAE1s%2BAnC09rE%2B6zsApXTXUyozP15FfVCeMKMQLNBRvr4f6q1HNCvmeH5KPek%2Fe2hAwstum0gY6pgFd23L5rLDAlKs4Fta9QySG3Vi8YBa7TuUoy1%2FBl8KVey6LocrSFpVApP4ge7k11RwBuUMwtHff12%2BVBPsfllVK4iP8V5VKe6aS6QY1VEGoFfgKReVVriZ1DKQCSGaFibxcSi0Y%2BfsJUP9axdCqQoP9%2BIln0wnn9lNumqzFSvXFYHyhNAZaew88XeQJwJHsl7yOjRPPCN9R0QrLloZCVad1Gcfn4nuO&X-Amz-Signature=73b5ffb38a3b06adee96563008a451643d4368de48e3f10ccf37b2eb7b38223b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEPLZTO%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCID%2B83B0f%2BJNPB3JQnGkOjc5VYXeLG%2FNEUSdwpryhfpApAiA8evpa0NOPQ14fWiGr3bnZbZYfepMLAK7j7J4hQofZeir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM8vWTJCbwpPMQ6sxDKtwDuzQHEZTSvxK20%2BnzUg0f%2F5EnhuQOM7n3amkowwPUa4cnyZkOJgiKJsBXBc46sqqgt1W4FOZ7kmdHacoJvjyk2kFfbW7uSZCmf%2BWLWW5hba1OFLnJKqQGI7TIBuMP3FDqixgQby%2FonF4dVtlGCrEbweQO0E3M3iTyxUF18XcO8Fcz7E%2BJZi%2FestuMTRbfyoaxbx8HejZjafSGd7TX7oMsxGoKCo5H0zaOoqK%2BZWMZcrj6le6NjJZd92mMOZiNMjp3u93gTK%2FmPIJlg%2FDpIg683kGAok40L2CTRpTEDxCBx%2BxtgliH8rUYakC5GWuxIFbI8bMZHDbIpmXuJecBHmAKlha5ERjQyyX4o9IWgBKJRJaRhmS%2BYo8FuTcBVUYfuUIS8etnsEDAPjGbXoFS79Q%2Fv%2F%2FtlPQHl0NjrykAZDpgbfVhb74xNBSc5zStJdTMTU3MWJmHSXJGY1zWiKJKeoQKvj78Slq0mYiKV4q8qw3TrlCQFT8CmTuC9m4YRHky8uWM9j5v5ypO14kva6sxo13I2vzapTnMNDwhk7mRPlmybeFyyKKLs0vpieU0KEAE1s%2BAnC09rE%2B6zsApXTXUyozP15FfVCeMKMQLNBRvr4f6q1HNCvmeH5KPek%2Fe2hAwstum0gY6pgFd23L5rLDAlKs4Fta9QySG3Vi8YBa7TuUoy1%2FBl8KVey6LocrSFpVApP4ge7k11RwBuUMwtHff12%2BVBPsfllVK4iP8V5VKe6aS6QY1VEGoFfgKReVVriZ1DKQCSGaFibxcSi0Y%2BfsJUP9axdCqQoP9%2BIln0wnn9lNumqzFSvXFYHyhNAZaew88XeQJwJHsl7yOjRPPCN9R0QrLloZCVad1Gcfn4nuO&X-Amz-Signature=320e158aa85067ba4181502b2e4a40ae9c596afa7a61f8fe058ddb9fd799d71a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEPLZTO%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCID%2B83B0f%2BJNPB3JQnGkOjc5VYXeLG%2FNEUSdwpryhfpApAiA8evpa0NOPQ14fWiGr3bnZbZYfepMLAK7j7J4hQofZeir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM8vWTJCbwpPMQ6sxDKtwDuzQHEZTSvxK20%2BnzUg0f%2F5EnhuQOM7n3amkowwPUa4cnyZkOJgiKJsBXBc46sqqgt1W4FOZ7kmdHacoJvjyk2kFfbW7uSZCmf%2BWLWW5hba1OFLnJKqQGI7TIBuMP3FDqixgQby%2FonF4dVtlGCrEbweQO0E3M3iTyxUF18XcO8Fcz7E%2BJZi%2FestuMTRbfyoaxbx8HejZjafSGd7TX7oMsxGoKCo5H0zaOoqK%2BZWMZcrj6le6NjJZd92mMOZiNMjp3u93gTK%2FmPIJlg%2FDpIg683kGAok40L2CTRpTEDxCBx%2BxtgliH8rUYakC5GWuxIFbI8bMZHDbIpmXuJecBHmAKlha5ERjQyyX4o9IWgBKJRJaRhmS%2BYo8FuTcBVUYfuUIS8etnsEDAPjGbXoFS79Q%2Fv%2F%2FtlPQHl0NjrykAZDpgbfVhb74xNBSc5zStJdTMTU3MWJmHSXJGY1zWiKJKeoQKvj78Slq0mYiKV4q8qw3TrlCQFT8CmTuC9m4YRHky8uWM9j5v5ypO14kva6sxo13I2vzapTnMNDwhk7mRPlmybeFyyKKLs0vpieU0KEAE1s%2BAnC09rE%2B6zsApXTXUyozP15FfVCeMKMQLNBRvr4f6q1HNCvmeH5KPek%2Fe2hAwstum0gY6pgFd23L5rLDAlKs4Fta9QySG3Vi8YBa7TuUoy1%2FBl8KVey6LocrSFpVApP4ge7k11RwBuUMwtHff12%2BVBPsfllVK4iP8V5VKe6aS6QY1VEGoFfgKReVVriZ1DKQCSGaFibxcSi0Y%2BfsJUP9axdCqQoP9%2BIln0wnn9lNumqzFSvXFYHyhNAZaew88XeQJwJHsl7yOjRPPCN9R0QrLloZCVad1Gcfn4nuO&X-Amz-Signature=387d1dd033c38b89d3bf0e57942b9539251d306ac3c6438461bc237b75566ae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVZ3SS7G%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCLqIjgbYbPxbeoiO9qEcH%2Bdzukiu96pZktjmGH9kNCdAIhAKeQpxn%2FGiO9y44hJ71tGXG3Q6CuPJdiymd%2B72TlKCAmKv8DCDIQABoMNjM3NDIzMTgzODA1IgzymnzyBOg0Ppr8sd0q3AP4hMZgy%2Ff%2BA3XnJJr9rp2Ll0jixzP4%2B47ChozTCH0WcKDAg0BSg3RzFoj7TMReS5pfmhZDjqL8HuQlD2xRfNFe9jimlDACPkZuTM3rZU%2FdlNkZRSaPX%2BQO3hLTP73TyPv9xRweYI%2FvdfU9VlvsFHg7mxeQHEXnco9CjUQlmgO8Smr%2FT0McHi0FlFy1kPvv06vhTHoCpP0Fq5MI%2FY%2F5CLFhVmD%2FdQdrKAXKZi22MkrUFGAu6bCvGyDpycgHbHWX7kNJlEKUHaRdvhvU9S4NzT4sN39k57WQesSw3rOUd8%2BoZ1uVOPejgcGp5COeh%2BvZOuCTL%2BajbNH82Zm7niRA4krAPu7DKp3P%2FiXmIvEcGqV%2FpSuPfeO%2BVgP7uw88LM6tV%2FVLQhZWT2EpvVqNbGZxykZlW4J%2B4Vp4SzavT7Ij%2B37KPPWIYZvyaGQ1GjV1hhplLQ3SkbvTwO%2BUvGbzjc5f1dxeSIJUGCRz%2FAY9EhrChjnrzMR3YdUZf92nxXEI6%2Bq%2BldbMt4nV3w7Ch79PbF0Y4BhVUXyRh0dAhM974x81fxW%2BlGOUi9VfD6RNed0ROK3sa%2F4WjBAL3Kla7WhsmoDpQg19ZaDPBfpSkUxQoDtyNtutd0ffeO2h6tPChoALFDC226bSBjqkAShY9eA%2Bt2Q%2BoJPXwkYwOQRp%2BZ%2FZmmezeVis4CXMOHLSJc%2B9rzxX1OkYY%2BLBU%2BND8ren399lBnLEB0u9pz9l5DDmX2A8PxAgYIDVoi2hSEMLJ63JmQ4L64wXKYaqEULMMYXeFCc37j4NqUr6a5OxMAd5OL48hQex2x35y8fqZsXKekwF1pFTxaSagVDtzuEuoXw4vFX3SdCdsgqRc9GUFAuhirQt&X-Amz-Signature=5291408506934cb741c0ecc8c3b9c1a32687b47e4dd1d1a74b6aab9dacec3a48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEPLZTO%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCID%2B83B0f%2BJNPB3JQnGkOjc5VYXeLG%2FNEUSdwpryhfpApAiA8evpa0NOPQ14fWiGr3bnZbZYfepMLAK7j7J4hQofZeir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM8vWTJCbwpPMQ6sxDKtwDuzQHEZTSvxK20%2BnzUg0f%2F5EnhuQOM7n3amkowwPUa4cnyZkOJgiKJsBXBc46sqqgt1W4FOZ7kmdHacoJvjyk2kFfbW7uSZCmf%2BWLWW5hba1OFLnJKqQGI7TIBuMP3FDqixgQby%2FonF4dVtlGCrEbweQO0E3M3iTyxUF18XcO8Fcz7E%2BJZi%2FestuMTRbfyoaxbx8HejZjafSGd7TX7oMsxGoKCo5H0zaOoqK%2BZWMZcrj6le6NjJZd92mMOZiNMjp3u93gTK%2FmPIJlg%2FDpIg683kGAok40L2CTRpTEDxCBx%2BxtgliH8rUYakC5GWuxIFbI8bMZHDbIpmXuJecBHmAKlha5ERjQyyX4o9IWgBKJRJaRhmS%2BYo8FuTcBVUYfuUIS8etnsEDAPjGbXoFS79Q%2Fv%2F%2FtlPQHl0NjrykAZDpgbfVhb74xNBSc5zStJdTMTU3MWJmHSXJGY1zWiKJKeoQKvj78Slq0mYiKV4q8qw3TrlCQFT8CmTuC9m4YRHky8uWM9j5v5ypO14kva6sxo13I2vzapTnMNDwhk7mRPlmybeFyyKKLs0vpieU0KEAE1s%2BAnC09rE%2B6zsApXTXUyozP15FfVCeMKMQLNBRvr4f6q1HNCvmeH5KPek%2Fe2hAwstum0gY6pgFd23L5rLDAlKs4Fta9QySG3Vi8YBa7TuUoy1%2FBl8KVey6LocrSFpVApP4ge7k11RwBuUMwtHff12%2BVBPsfllVK4iP8V5VKe6aS6QY1VEGoFfgKReVVriZ1DKQCSGaFibxcSi0Y%2BfsJUP9axdCqQoP9%2BIln0wnn9lNumqzFSvXFYHyhNAZaew88XeQJwJHsl7yOjRPPCN9R0QrLloZCVad1Gcfn4nuO&X-Amz-Signature=138570b953a0e8b9318d8ae1b07168963ce71e7a8a90568132c90e4f7255faf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEPLZTO%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCID%2B83B0f%2BJNPB3JQnGkOjc5VYXeLG%2FNEUSdwpryhfpApAiA8evpa0NOPQ14fWiGr3bnZbZYfepMLAK7j7J4hQofZeir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM8vWTJCbwpPMQ6sxDKtwDuzQHEZTSvxK20%2BnzUg0f%2F5EnhuQOM7n3amkowwPUa4cnyZkOJgiKJsBXBc46sqqgt1W4FOZ7kmdHacoJvjyk2kFfbW7uSZCmf%2BWLWW5hba1OFLnJKqQGI7TIBuMP3FDqixgQby%2FonF4dVtlGCrEbweQO0E3M3iTyxUF18XcO8Fcz7E%2BJZi%2FestuMTRbfyoaxbx8HejZjafSGd7TX7oMsxGoKCo5H0zaOoqK%2BZWMZcrj6le6NjJZd92mMOZiNMjp3u93gTK%2FmPIJlg%2FDpIg683kGAok40L2CTRpTEDxCBx%2BxtgliH8rUYakC5GWuxIFbI8bMZHDbIpmXuJecBHmAKlha5ERjQyyX4o9IWgBKJRJaRhmS%2BYo8FuTcBVUYfuUIS8etnsEDAPjGbXoFS79Q%2Fv%2F%2FtlPQHl0NjrykAZDpgbfVhb74xNBSc5zStJdTMTU3MWJmHSXJGY1zWiKJKeoQKvj78Slq0mYiKV4q8qw3TrlCQFT8CmTuC9m4YRHky8uWM9j5v5ypO14kva6sxo13I2vzapTnMNDwhk7mRPlmybeFyyKKLs0vpieU0KEAE1s%2BAnC09rE%2B6zsApXTXUyozP15FfVCeMKMQLNBRvr4f6q1HNCvmeH5KPek%2Fe2hAwstum0gY6pgFd23L5rLDAlKs4Fta9QySG3Vi8YBa7TuUoy1%2FBl8KVey6LocrSFpVApP4ge7k11RwBuUMwtHff12%2BVBPsfllVK4iP8V5VKe6aS6QY1VEGoFfgKReVVriZ1DKQCSGaFibxcSi0Y%2BfsJUP9axdCqQoP9%2BIln0wnn9lNumqzFSvXFYHyhNAZaew88XeQJwJHsl7yOjRPPCN9R0QrLloZCVad1Gcfn4nuO&X-Amz-Signature=075f60d73d09522aa6342034b738cfeb9779e78b50cce7bb56ec1724bbaa8ad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEPLZTO%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCID%2B83B0f%2BJNPB3JQnGkOjc5VYXeLG%2FNEUSdwpryhfpApAiA8evpa0NOPQ14fWiGr3bnZbZYfepMLAK7j7J4hQofZeir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM8vWTJCbwpPMQ6sxDKtwDuzQHEZTSvxK20%2BnzUg0f%2F5EnhuQOM7n3amkowwPUa4cnyZkOJgiKJsBXBc46sqqgt1W4FOZ7kmdHacoJvjyk2kFfbW7uSZCmf%2BWLWW5hba1OFLnJKqQGI7TIBuMP3FDqixgQby%2FonF4dVtlGCrEbweQO0E3M3iTyxUF18XcO8Fcz7E%2BJZi%2FestuMTRbfyoaxbx8HejZjafSGd7TX7oMsxGoKCo5H0zaOoqK%2BZWMZcrj6le6NjJZd92mMOZiNMjp3u93gTK%2FmPIJlg%2FDpIg683kGAok40L2CTRpTEDxCBx%2BxtgliH8rUYakC5GWuxIFbI8bMZHDbIpmXuJecBHmAKlha5ERjQyyX4o9IWgBKJRJaRhmS%2BYo8FuTcBVUYfuUIS8etnsEDAPjGbXoFS79Q%2Fv%2F%2FtlPQHl0NjrykAZDpgbfVhb74xNBSc5zStJdTMTU3MWJmHSXJGY1zWiKJKeoQKvj78Slq0mYiKV4q8qw3TrlCQFT8CmTuC9m4YRHky8uWM9j5v5ypO14kva6sxo13I2vzapTnMNDwhk7mRPlmybeFyyKKLs0vpieU0KEAE1s%2BAnC09rE%2B6zsApXTXUyozP15FfVCeMKMQLNBRvr4f6q1HNCvmeH5KPek%2Fe2hAwstum0gY6pgFd23L5rLDAlKs4Fta9QySG3Vi8YBa7TuUoy1%2FBl8KVey6LocrSFpVApP4ge7k11RwBuUMwtHff12%2BVBPsfllVK4iP8V5VKe6aS6QY1VEGoFfgKReVVriZ1DKQCSGaFibxcSi0Y%2BfsJUP9axdCqQoP9%2BIln0wnn9lNumqzFSvXFYHyhNAZaew88XeQJwJHsl7yOjRPPCN9R0QrLloZCVad1Gcfn4nuO&X-Amz-Signature=545be1e9672979bf9c2c99a1eeab7dcb78250c80b5e72434d8adafed6b39d46a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEPLZTO%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCID%2B83B0f%2BJNPB3JQnGkOjc5VYXeLG%2FNEUSdwpryhfpApAiA8evpa0NOPQ14fWiGr3bnZbZYfepMLAK7j7J4hQofZeir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM8vWTJCbwpPMQ6sxDKtwDuzQHEZTSvxK20%2BnzUg0f%2F5EnhuQOM7n3amkowwPUa4cnyZkOJgiKJsBXBc46sqqgt1W4FOZ7kmdHacoJvjyk2kFfbW7uSZCmf%2BWLWW5hba1OFLnJKqQGI7TIBuMP3FDqixgQby%2FonF4dVtlGCrEbweQO0E3M3iTyxUF18XcO8Fcz7E%2BJZi%2FestuMTRbfyoaxbx8HejZjafSGd7TX7oMsxGoKCo5H0zaOoqK%2BZWMZcrj6le6NjJZd92mMOZiNMjp3u93gTK%2FmPIJlg%2FDpIg683kGAok40L2CTRpTEDxCBx%2BxtgliH8rUYakC5GWuxIFbI8bMZHDbIpmXuJecBHmAKlha5ERjQyyX4o9IWgBKJRJaRhmS%2BYo8FuTcBVUYfuUIS8etnsEDAPjGbXoFS79Q%2Fv%2F%2FtlPQHl0NjrykAZDpgbfVhb74xNBSc5zStJdTMTU3MWJmHSXJGY1zWiKJKeoQKvj78Slq0mYiKV4q8qw3TrlCQFT8CmTuC9m4YRHky8uWM9j5v5ypO14kva6sxo13I2vzapTnMNDwhk7mRPlmybeFyyKKLs0vpieU0KEAE1s%2BAnC09rE%2B6zsApXTXUyozP15FfVCeMKMQLNBRvr4f6q1HNCvmeH5KPek%2Fe2hAwstum0gY6pgFd23L5rLDAlKs4Fta9QySG3Vi8YBa7TuUoy1%2FBl8KVey6LocrSFpVApP4ge7k11RwBuUMwtHff12%2BVBPsfllVK4iP8V5VKe6aS6QY1VEGoFfgKReVVriZ1DKQCSGaFibxcSi0Y%2BfsJUP9axdCqQoP9%2BIln0wnn9lNumqzFSvXFYHyhNAZaew88XeQJwJHsl7yOjRPPCN9R0QrLloZCVad1Gcfn4nuO&X-Amz-Signature=6d6146318f24e6e2b5bc99cea9417a6db23adb3f5d1d82191a2c5750bdc91dd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEPLZTO%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCID%2B83B0f%2BJNPB3JQnGkOjc5VYXeLG%2FNEUSdwpryhfpApAiA8evpa0NOPQ14fWiGr3bnZbZYfepMLAK7j7J4hQofZeir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM8vWTJCbwpPMQ6sxDKtwDuzQHEZTSvxK20%2BnzUg0f%2F5EnhuQOM7n3amkowwPUa4cnyZkOJgiKJsBXBc46sqqgt1W4FOZ7kmdHacoJvjyk2kFfbW7uSZCmf%2BWLWW5hba1OFLnJKqQGI7TIBuMP3FDqixgQby%2FonF4dVtlGCrEbweQO0E3M3iTyxUF18XcO8Fcz7E%2BJZi%2FestuMTRbfyoaxbx8HejZjafSGd7TX7oMsxGoKCo5H0zaOoqK%2BZWMZcrj6le6NjJZd92mMOZiNMjp3u93gTK%2FmPIJlg%2FDpIg683kGAok40L2CTRpTEDxCBx%2BxtgliH8rUYakC5GWuxIFbI8bMZHDbIpmXuJecBHmAKlha5ERjQyyX4o9IWgBKJRJaRhmS%2BYo8FuTcBVUYfuUIS8etnsEDAPjGbXoFS79Q%2Fv%2F%2FtlPQHl0NjrykAZDpgbfVhb74xNBSc5zStJdTMTU3MWJmHSXJGY1zWiKJKeoQKvj78Slq0mYiKV4q8qw3TrlCQFT8CmTuC9m4YRHky8uWM9j5v5ypO14kva6sxo13I2vzapTnMNDwhk7mRPlmybeFyyKKLs0vpieU0KEAE1s%2BAnC09rE%2B6zsApXTXUyozP15FfVCeMKMQLNBRvr4f6q1HNCvmeH5KPek%2Fe2hAwstum0gY6pgFd23L5rLDAlKs4Fta9QySG3Vi8YBa7TuUoy1%2FBl8KVey6LocrSFpVApP4ge7k11RwBuUMwtHff12%2BVBPsfllVK4iP8V5VKe6aS6QY1VEGoFfgKReVVriZ1DKQCSGaFibxcSi0Y%2BfsJUP9axdCqQoP9%2BIln0wnn9lNumqzFSvXFYHyhNAZaew88XeQJwJHsl7yOjRPPCN9R0QrLloZCVad1Gcfn4nuO&X-Amz-Signature=9d6d4ef12dcb54b587b8f5abb9ce3a6cb765d319ad0bc981667708b4a38768bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEPLZTO%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCID%2B83B0f%2BJNPB3JQnGkOjc5VYXeLG%2FNEUSdwpryhfpApAiA8evpa0NOPQ14fWiGr3bnZbZYfepMLAK7j7J4hQofZeir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM8vWTJCbwpPMQ6sxDKtwDuzQHEZTSvxK20%2BnzUg0f%2F5EnhuQOM7n3amkowwPUa4cnyZkOJgiKJsBXBc46sqqgt1W4FOZ7kmdHacoJvjyk2kFfbW7uSZCmf%2BWLWW5hba1OFLnJKqQGI7TIBuMP3FDqixgQby%2FonF4dVtlGCrEbweQO0E3M3iTyxUF18XcO8Fcz7E%2BJZi%2FestuMTRbfyoaxbx8HejZjafSGd7TX7oMsxGoKCo5H0zaOoqK%2BZWMZcrj6le6NjJZd92mMOZiNMjp3u93gTK%2FmPIJlg%2FDpIg683kGAok40L2CTRpTEDxCBx%2BxtgliH8rUYakC5GWuxIFbI8bMZHDbIpmXuJecBHmAKlha5ERjQyyX4o9IWgBKJRJaRhmS%2BYo8FuTcBVUYfuUIS8etnsEDAPjGbXoFS79Q%2Fv%2F%2FtlPQHl0NjrykAZDpgbfVhb74xNBSc5zStJdTMTU3MWJmHSXJGY1zWiKJKeoQKvj78Slq0mYiKV4q8qw3TrlCQFT8CmTuC9m4YRHky8uWM9j5v5ypO14kva6sxo13I2vzapTnMNDwhk7mRPlmybeFyyKKLs0vpieU0KEAE1s%2BAnC09rE%2B6zsApXTXUyozP15FfVCeMKMQLNBRvr4f6q1HNCvmeH5KPek%2Fe2hAwstum0gY6pgFd23L5rLDAlKs4Fta9QySG3Vi8YBa7TuUoy1%2FBl8KVey6LocrSFpVApP4ge7k11RwBuUMwtHff12%2BVBPsfllVK4iP8V5VKe6aS6QY1VEGoFfgKReVVriZ1DKQCSGaFibxcSi0Y%2BfsJUP9axdCqQoP9%2BIln0wnn9lNumqzFSvXFYHyhNAZaew88XeQJwJHsl7yOjRPPCN9R0QrLloZCVad1Gcfn4nuO&X-Amz-Signature=c80d29f984cb84dbbf7acfed9122b513c71ccde72b32a0cfe5d6e236f8ff4259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


