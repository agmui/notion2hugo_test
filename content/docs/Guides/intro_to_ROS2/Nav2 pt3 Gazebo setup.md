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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4WQ74F%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIElEIi7pwCB1cBkWCgVd35XumeYFC65Rr2umxnzTy6%2FtAiA7lDOe9%2BEznj%2BfH0KFOCPqsQsnUTIpTJ%2FLitKj%2B3eLFyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMJTEs9upZXYDKA8LrKtwDGpxbQuawbRV4llijHGs1FtADXbRZI%2FToicgpTdPpttWJDAQt7pDpo71iR6%2BQ8wpu3GoNleFEitBpp8awsqCEYWzyRqrDeeDuLFXAmJ99BMm0nb4150USKWxNIxc4PWrMS1kACog%2FtrahOXV9G7ttSpbRqOPFEQ%2B5CCaZGQIOxTlDlPOPxHF3coiqRe6sh3poZr9oQaZv5vhv5T7DmIh50MTJ69aoipydpntC%2BfvLL2x36khNsj%2BEdcFmNkr%2B6IkTsFk7UfA9jVbS7sZg4CS3JduU%2BOjNf%2Fb8SrhLRUqn2BWScEICijZ2jBFd94XHLZbN%2FpM1hxNqd2vKcsBbCfFs4uYQZwVdgGMECrN68iyWEpKt1pi0wBgnT69Q0zYElRUSIoMBj1Wn04V7zNznMNcvY5FGQgva63h2pC3fBeO4UFs3%2Ft9ZD5%2BGNsCeVDWIzhmIwQeidCAme8hTsUg0CaZNtDol4BxmMsDha7ur8Fbkh7Xv94tkAbNIPrbAaPKAT9C8p2J%2FEYLbyKwdTZWPDqOYyuGQ3JW0sLjKxXiltFH2vRyV5gzxVR6USvsmJ7rPCKNXgJXmT0wUi%2FI3i7cCtWveHeB44yL7RB4465XRaqhZFm9kQ6Ofl1Fe3drxh%2BQwr4z5xAY6pgHg3avxpvA2SuKhRMqZ6uar%2FG2RmH97KOwbcH8Yan03XuUxh9%2BYEEeGn0ixU72R4I6Hb7Qp3MPjScZkbbaFGGqIn%2FrxfV2%2BH5DizmPOx8jpCKRCQK6AmtnVgz%2F0%2BdmN72fRabbMqRq1zsJ4Fs9xwL0JkNqyhlBttXPJJYzCLGvqyRWMFnz8MaJPpE7pe%2F%2Byjmv2KVf2jBbicZHY17mxHwj690OvOA6F&X-Amz-Signature=6b733cc9af0bed7bfdf87111ad17f1fe20b6e1be62d540f116ba1df08a50e1a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4WQ74F%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIElEIi7pwCB1cBkWCgVd35XumeYFC65Rr2umxnzTy6%2FtAiA7lDOe9%2BEznj%2BfH0KFOCPqsQsnUTIpTJ%2FLitKj%2B3eLFyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMJTEs9upZXYDKA8LrKtwDGpxbQuawbRV4llijHGs1FtADXbRZI%2FToicgpTdPpttWJDAQt7pDpo71iR6%2BQ8wpu3GoNleFEitBpp8awsqCEYWzyRqrDeeDuLFXAmJ99BMm0nb4150USKWxNIxc4PWrMS1kACog%2FtrahOXV9G7ttSpbRqOPFEQ%2B5CCaZGQIOxTlDlPOPxHF3coiqRe6sh3poZr9oQaZv5vhv5T7DmIh50MTJ69aoipydpntC%2BfvLL2x36khNsj%2BEdcFmNkr%2B6IkTsFk7UfA9jVbS7sZg4CS3JduU%2BOjNf%2Fb8SrhLRUqn2BWScEICijZ2jBFd94XHLZbN%2FpM1hxNqd2vKcsBbCfFs4uYQZwVdgGMECrN68iyWEpKt1pi0wBgnT69Q0zYElRUSIoMBj1Wn04V7zNznMNcvY5FGQgva63h2pC3fBeO4UFs3%2Ft9ZD5%2BGNsCeVDWIzhmIwQeidCAme8hTsUg0CaZNtDol4BxmMsDha7ur8Fbkh7Xv94tkAbNIPrbAaPKAT9C8p2J%2FEYLbyKwdTZWPDqOYyuGQ3JW0sLjKxXiltFH2vRyV5gzxVR6USvsmJ7rPCKNXgJXmT0wUi%2FI3i7cCtWveHeB44yL7RB4465XRaqhZFm9kQ6Ofl1Fe3drxh%2BQwr4z5xAY6pgHg3avxpvA2SuKhRMqZ6uar%2FG2RmH97KOwbcH8Yan03XuUxh9%2BYEEeGn0ixU72R4I6Hb7Qp3MPjScZkbbaFGGqIn%2FrxfV2%2BH5DizmPOx8jpCKRCQK6AmtnVgz%2F0%2BdmN72fRabbMqRq1zsJ4Fs9xwL0JkNqyhlBttXPJJYzCLGvqyRWMFnz8MaJPpE7pe%2F%2Byjmv2KVf2jBbicZHY17mxHwj690OvOA6F&X-Amz-Signature=926b7ab2eb89694dcbd8c2cfbb80a8780df377bf5399e6e9573b305360e3f102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4WQ74F%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIElEIi7pwCB1cBkWCgVd35XumeYFC65Rr2umxnzTy6%2FtAiA7lDOe9%2BEznj%2BfH0KFOCPqsQsnUTIpTJ%2FLitKj%2B3eLFyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMJTEs9upZXYDKA8LrKtwDGpxbQuawbRV4llijHGs1FtADXbRZI%2FToicgpTdPpttWJDAQt7pDpo71iR6%2BQ8wpu3GoNleFEitBpp8awsqCEYWzyRqrDeeDuLFXAmJ99BMm0nb4150USKWxNIxc4PWrMS1kACog%2FtrahOXV9G7ttSpbRqOPFEQ%2B5CCaZGQIOxTlDlPOPxHF3coiqRe6sh3poZr9oQaZv5vhv5T7DmIh50MTJ69aoipydpntC%2BfvLL2x36khNsj%2BEdcFmNkr%2B6IkTsFk7UfA9jVbS7sZg4CS3JduU%2BOjNf%2Fb8SrhLRUqn2BWScEICijZ2jBFd94XHLZbN%2FpM1hxNqd2vKcsBbCfFs4uYQZwVdgGMECrN68iyWEpKt1pi0wBgnT69Q0zYElRUSIoMBj1Wn04V7zNznMNcvY5FGQgva63h2pC3fBeO4UFs3%2Ft9ZD5%2BGNsCeVDWIzhmIwQeidCAme8hTsUg0CaZNtDol4BxmMsDha7ur8Fbkh7Xv94tkAbNIPrbAaPKAT9C8p2J%2FEYLbyKwdTZWPDqOYyuGQ3JW0sLjKxXiltFH2vRyV5gzxVR6USvsmJ7rPCKNXgJXmT0wUi%2FI3i7cCtWveHeB44yL7RB4465XRaqhZFm9kQ6Ofl1Fe3drxh%2BQwr4z5xAY6pgHg3avxpvA2SuKhRMqZ6uar%2FG2RmH97KOwbcH8Yan03XuUxh9%2BYEEeGn0ixU72R4I6Hb7Qp3MPjScZkbbaFGGqIn%2FrxfV2%2BH5DizmPOx8jpCKRCQK6AmtnVgz%2F0%2BdmN72fRabbMqRq1zsJ4Fs9xwL0JkNqyhlBttXPJJYzCLGvqyRWMFnz8MaJPpE7pe%2F%2Byjmv2KVf2jBbicZHY17mxHwj690OvOA6F&X-Amz-Signature=dc77e7f2058349fede78de61811e84a532824bf2d41446d1569184bf00722d93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4WQ74F%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIElEIi7pwCB1cBkWCgVd35XumeYFC65Rr2umxnzTy6%2FtAiA7lDOe9%2BEznj%2BfH0KFOCPqsQsnUTIpTJ%2FLitKj%2B3eLFyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMJTEs9upZXYDKA8LrKtwDGpxbQuawbRV4llijHGs1FtADXbRZI%2FToicgpTdPpttWJDAQt7pDpo71iR6%2BQ8wpu3GoNleFEitBpp8awsqCEYWzyRqrDeeDuLFXAmJ99BMm0nb4150USKWxNIxc4PWrMS1kACog%2FtrahOXV9G7ttSpbRqOPFEQ%2B5CCaZGQIOxTlDlPOPxHF3coiqRe6sh3poZr9oQaZv5vhv5T7DmIh50MTJ69aoipydpntC%2BfvLL2x36khNsj%2BEdcFmNkr%2B6IkTsFk7UfA9jVbS7sZg4CS3JduU%2BOjNf%2Fb8SrhLRUqn2BWScEICijZ2jBFd94XHLZbN%2FpM1hxNqd2vKcsBbCfFs4uYQZwVdgGMECrN68iyWEpKt1pi0wBgnT69Q0zYElRUSIoMBj1Wn04V7zNznMNcvY5FGQgva63h2pC3fBeO4UFs3%2Ft9ZD5%2BGNsCeVDWIzhmIwQeidCAme8hTsUg0CaZNtDol4BxmMsDha7ur8Fbkh7Xv94tkAbNIPrbAaPKAT9C8p2J%2FEYLbyKwdTZWPDqOYyuGQ3JW0sLjKxXiltFH2vRyV5gzxVR6USvsmJ7rPCKNXgJXmT0wUi%2FI3i7cCtWveHeB44yL7RB4465XRaqhZFm9kQ6Ofl1Fe3drxh%2BQwr4z5xAY6pgHg3avxpvA2SuKhRMqZ6uar%2FG2RmH97KOwbcH8Yan03XuUxh9%2BYEEeGn0ixU72R4I6Hb7Qp3MPjScZkbbaFGGqIn%2FrxfV2%2BH5DizmPOx8jpCKRCQK6AmtnVgz%2F0%2BdmN72fRabbMqRq1zsJ4Fs9xwL0JkNqyhlBttXPJJYzCLGvqyRWMFnz8MaJPpE7pe%2F%2Byjmv2KVf2jBbicZHY17mxHwj690OvOA6F&X-Amz-Signature=f187896a03069b57bfd2d739643e573e11534d92f0d046f8a48e5919709586c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTH72PDR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDAlJrV1TZ3G%2FWsF8cOnsVfNkIDDLw4wQJLxgCT93be2QIhANUOVuyj6P6aDXYFJzPgs95lAxuj42cVM2kUYv69ga60Kv8DCE4QABoMNjM3NDIzMTgzODA1IgwKU6aBpVwy13ox4Lgq3AOaPbFwvU2e3kI%2BNzfMjlx6kaijPhlnXwWNhzH9qC2RsSnxdPSLQqKnvSm%2BNqg2SkcrCIdA0ijpIYW9%2FHRC6BGWSm5izTEkamdm80cIqiibWgDtssuvop0AI2E9tKSijEArem2wPsqtBU%2BejY2p2OyIOLQ3WrSZs7rEKczimq91O4NZN%2Fq8hLXbCDZV6zGB9mCh6c9LQ1nfHu5aAMuBYsuCuatCORrGUJN9v7Ip2X0VlNGbpgpxeEeA720RbpPw4FXMJxf3es%2B6%2B9Gwjks5U0yzZ3z3XTvAD%2FFHeVZG%2F%2BzBv2BwgvVFMq1ybrjhJ9vRzdwIfV2%2FI1h6FmundkLMAfwOjcqDQH95wAvKS9ZppRCvpceJhlfAMGRxKzm4TDGeMzbxk5VzQZ1UbaX5AYgevWo5l8j0qty5d9JWq%2F0wBsmfRaLYs7GsYkOQWySO0dbW7sT4LphgCyW6AUmcIOYmME22taLvVonWzGP%2BZudc7m7gm5qmR%2Fp3s1OX6ZWvrPFJjcexPKKS6zwyHo2A%2BJ4RBXg0x2EbbhnIL8vtOqS11IJZQ1bHuRPdt5FcXqqrsoTaXzzE%2F%2B9q30jNKK2dQGua9lpW%2FWiI7HDgf0ZQ%2FOB7W83MjNztRJoNj4ZSIrDGVjD7jPnEBjqkAfoLYsp84XxcwsYZL7Pvp6vbrzP%2FrYXSVB33x1rywROJbugCgEOoLKPHHUr%2Bcmi8Bb8%2BI1m9OdhhvSN0%2Bcv6nF2LDsjhXYqS%2FRmeGccB1WSfPa75FrkRHNqYnDPhTr2qbzpbOAF6Zfk%2F288y%2FWr3Vk9cpmFyN%2F5ZRTSpiomRTkHowTv8vgqc68nLPt33%2FkA5bUvyijntSCdNoKUSHzvuk9iDS397&X-Amz-Signature=e37837bf5deed8d919a8662cd48a7c6e624dda4433bc126a0baa85b099fa7f09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4WQ74F%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIElEIi7pwCB1cBkWCgVd35XumeYFC65Rr2umxnzTy6%2FtAiA7lDOe9%2BEznj%2BfH0KFOCPqsQsnUTIpTJ%2FLitKj%2B3eLFyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMJTEs9upZXYDKA8LrKtwDGpxbQuawbRV4llijHGs1FtADXbRZI%2FToicgpTdPpttWJDAQt7pDpo71iR6%2BQ8wpu3GoNleFEitBpp8awsqCEYWzyRqrDeeDuLFXAmJ99BMm0nb4150USKWxNIxc4PWrMS1kACog%2FtrahOXV9G7ttSpbRqOPFEQ%2B5CCaZGQIOxTlDlPOPxHF3coiqRe6sh3poZr9oQaZv5vhv5T7DmIh50MTJ69aoipydpntC%2BfvLL2x36khNsj%2BEdcFmNkr%2B6IkTsFk7UfA9jVbS7sZg4CS3JduU%2BOjNf%2Fb8SrhLRUqn2BWScEICijZ2jBFd94XHLZbN%2FpM1hxNqd2vKcsBbCfFs4uYQZwVdgGMECrN68iyWEpKt1pi0wBgnT69Q0zYElRUSIoMBj1Wn04V7zNznMNcvY5FGQgva63h2pC3fBeO4UFs3%2Ft9ZD5%2BGNsCeVDWIzhmIwQeidCAme8hTsUg0CaZNtDol4BxmMsDha7ur8Fbkh7Xv94tkAbNIPrbAaPKAT9C8p2J%2FEYLbyKwdTZWPDqOYyuGQ3JW0sLjKxXiltFH2vRyV5gzxVR6USvsmJ7rPCKNXgJXmT0wUi%2FI3i7cCtWveHeB44yL7RB4465XRaqhZFm9kQ6Ofl1Fe3drxh%2BQwr4z5xAY6pgHg3avxpvA2SuKhRMqZ6uar%2FG2RmH97KOwbcH8Yan03XuUxh9%2BYEEeGn0ixU72R4I6Hb7Qp3MPjScZkbbaFGGqIn%2FrxfV2%2BH5DizmPOx8jpCKRCQK6AmtnVgz%2F0%2BdmN72fRabbMqRq1zsJ4Fs9xwL0JkNqyhlBttXPJJYzCLGvqyRWMFnz8MaJPpE7pe%2F%2Byjmv2KVf2jBbicZHY17mxHwj690OvOA6F&X-Amz-Signature=3f1e57fcfce49e657dff915f33fa75b936f45143850e558fab5de3a579b0aeca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4WQ74F%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIElEIi7pwCB1cBkWCgVd35XumeYFC65Rr2umxnzTy6%2FtAiA7lDOe9%2BEznj%2BfH0KFOCPqsQsnUTIpTJ%2FLitKj%2B3eLFyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMJTEs9upZXYDKA8LrKtwDGpxbQuawbRV4llijHGs1FtADXbRZI%2FToicgpTdPpttWJDAQt7pDpo71iR6%2BQ8wpu3GoNleFEitBpp8awsqCEYWzyRqrDeeDuLFXAmJ99BMm0nb4150USKWxNIxc4PWrMS1kACog%2FtrahOXV9G7ttSpbRqOPFEQ%2B5CCaZGQIOxTlDlPOPxHF3coiqRe6sh3poZr9oQaZv5vhv5T7DmIh50MTJ69aoipydpntC%2BfvLL2x36khNsj%2BEdcFmNkr%2B6IkTsFk7UfA9jVbS7sZg4CS3JduU%2BOjNf%2Fb8SrhLRUqn2BWScEICijZ2jBFd94XHLZbN%2FpM1hxNqd2vKcsBbCfFs4uYQZwVdgGMECrN68iyWEpKt1pi0wBgnT69Q0zYElRUSIoMBj1Wn04V7zNznMNcvY5FGQgva63h2pC3fBeO4UFs3%2Ft9ZD5%2BGNsCeVDWIzhmIwQeidCAme8hTsUg0CaZNtDol4BxmMsDha7ur8Fbkh7Xv94tkAbNIPrbAaPKAT9C8p2J%2FEYLbyKwdTZWPDqOYyuGQ3JW0sLjKxXiltFH2vRyV5gzxVR6USvsmJ7rPCKNXgJXmT0wUi%2FI3i7cCtWveHeB44yL7RB4465XRaqhZFm9kQ6Ofl1Fe3drxh%2BQwr4z5xAY6pgHg3avxpvA2SuKhRMqZ6uar%2FG2RmH97KOwbcH8Yan03XuUxh9%2BYEEeGn0ixU72R4I6Hb7Qp3MPjScZkbbaFGGqIn%2FrxfV2%2BH5DizmPOx8jpCKRCQK6AmtnVgz%2F0%2BdmN72fRabbMqRq1zsJ4Fs9xwL0JkNqyhlBttXPJJYzCLGvqyRWMFnz8MaJPpE7pe%2F%2Byjmv2KVf2jBbicZHY17mxHwj690OvOA6F&X-Amz-Signature=7108d23d877bd777a61b6cc0d4b7ae8af064273d5653b215262f96b6c9ecde4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4WQ74F%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIElEIi7pwCB1cBkWCgVd35XumeYFC65Rr2umxnzTy6%2FtAiA7lDOe9%2BEznj%2BfH0KFOCPqsQsnUTIpTJ%2FLitKj%2B3eLFyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMJTEs9upZXYDKA8LrKtwDGpxbQuawbRV4llijHGs1FtADXbRZI%2FToicgpTdPpttWJDAQt7pDpo71iR6%2BQ8wpu3GoNleFEitBpp8awsqCEYWzyRqrDeeDuLFXAmJ99BMm0nb4150USKWxNIxc4PWrMS1kACog%2FtrahOXV9G7ttSpbRqOPFEQ%2B5CCaZGQIOxTlDlPOPxHF3coiqRe6sh3poZr9oQaZv5vhv5T7DmIh50MTJ69aoipydpntC%2BfvLL2x36khNsj%2BEdcFmNkr%2B6IkTsFk7UfA9jVbS7sZg4CS3JduU%2BOjNf%2Fb8SrhLRUqn2BWScEICijZ2jBFd94XHLZbN%2FpM1hxNqd2vKcsBbCfFs4uYQZwVdgGMECrN68iyWEpKt1pi0wBgnT69Q0zYElRUSIoMBj1Wn04V7zNznMNcvY5FGQgva63h2pC3fBeO4UFs3%2Ft9ZD5%2BGNsCeVDWIzhmIwQeidCAme8hTsUg0CaZNtDol4BxmMsDha7ur8Fbkh7Xv94tkAbNIPrbAaPKAT9C8p2J%2FEYLbyKwdTZWPDqOYyuGQ3JW0sLjKxXiltFH2vRyV5gzxVR6USvsmJ7rPCKNXgJXmT0wUi%2FI3i7cCtWveHeB44yL7RB4465XRaqhZFm9kQ6Ofl1Fe3drxh%2BQwr4z5xAY6pgHg3avxpvA2SuKhRMqZ6uar%2FG2RmH97KOwbcH8Yan03XuUxh9%2BYEEeGn0ixU72R4I6Hb7Qp3MPjScZkbbaFGGqIn%2FrxfV2%2BH5DizmPOx8jpCKRCQK6AmtnVgz%2F0%2BdmN72fRabbMqRq1zsJ4Fs9xwL0JkNqyhlBttXPJJYzCLGvqyRWMFnz8MaJPpE7pe%2F%2Byjmv2KVf2jBbicZHY17mxHwj690OvOA6F&X-Amz-Signature=fc211361420b4e50241bfd18fb505feaa890e158f32196c1aac51fee60aa1de5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4WQ74F%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIElEIi7pwCB1cBkWCgVd35XumeYFC65Rr2umxnzTy6%2FtAiA7lDOe9%2BEznj%2BfH0KFOCPqsQsnUTIpTJ%2FLitKj%2B3eLFyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMJTEs9upZXYDKA8LrKtwDGpxbQuawbRV4llijHGs1FtADXbRZI%2FToicgpTdPpttWJDAQt7pDpo71iR6%2BQ8wpu3GoNleFEitBpp8awsqCEYWzyRqrDeeDuLFXAmJ99BMm0nb4150USKWxNIxc4PWrMS1kACog%2FtrahOXV9G7ttSpbRqOPFEQ%2B5CCaZGQIOxTlDlPOPxHF3coiqRe6sh3poZr9oQaZv5vhv5T7DmIh50MTJ69aoipydpntC%2BfvLL2x36khNsj%2BEdcFmNkr%2B6IkTsFk7UfA9jVbS7sZg4CS3JduU%2BOjNf%2Fb8SrhLRUqn2BWScEICijZ2jBFd94XHLZbN%2FpM1hxNqd2vKcsBbCfFs4uYQZwVdgGMECrN68iyWEpKt1pi0wBgnT69Q0zYElRUSIoMBj1Wn04V7zNznMNcvY5FGQgva63h2pC3fBeO4UFs3%2Ft9ZD5%2BGNsCeVDWIzhmIwQeidCAme8hTsUg0CaZNtDol4BxmMsDha7ur8Fbkh7Xv94tkAbNIPrbAaPKAT9C8p2J%2FEYLbyKwdTZWPDqOYyuGQ3JW0sLjKxXiltFH2vRyV5gzxVR6USvsmJ7rPCKNXgJXmT0wUi%2FI3i7cCtWveHeB44yL7RB4465XRaqhZFm9kQ6Ofl1Fe3drxh%2BQwr4z5xAY6pgHg3avxpvA2SuKhRMqZ6uar%2FG2RmH97KOwbcH8Yan03XuUxh9%2BYEEeGn0ixU72R4I6Hb7Qp3MPjScZkbbaFGGqIn%2FrxfV2%2BH5DizmPOx8jpCKRCQK6AmtnVgz%2F0%2BdmN72fRabbMqRq1zsJ4Fs9xwL0JkNqyhlBttXPJJYzCLGvqyRWMFnz8MaJPpE7pe%2F%2Byjmv2KVf2jBbicZHY17mxHwj690OvOA6F&X-Amz-Signature=4500c326c2d639b2f1c42f058239f547415de77640aa75f41e0d9d70705b3589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4WQ74F%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIElEIi7pwCB1cBkWCgVd35XumeYFC65Rr2umxnzTy6%2FtAiA7lDOe9%2BEznj%2BfH0KFOCPqsQsnUTIpTJ%2FLitKj%2B3eLFyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMJTEs9upZXYDKA8LrKtwDGpxbQuawbRV4llijHGs1FtADXbRZI%2FToicgpTdPpttWJDAQt7pDpo71iR6%2BQ8wpu3GoNleFEitBpp8awsqCEYWzyRqrDeeDuLFXAmJ99BMm0nb4150USKWxNIxc4PWrMS1kACog%2FtrahOXV9G7ttSpbRqOPFEQ%2B5CCaZGQIOxTlDlPOPxHF3coiqRe6sh3poZr9oQaZv5vhv5T7DmIh50MTJ69aoipydpntC%2BfvLL2x36khNsj%2BEdcFmNkr%2B6IkTsFk7UfA9jVbS7sZg4CS3JduU%2BOjNf%2Fb8SrhLRUqn2BWScEICijZ2jBFd94XHLZbN%2FpM1hxNqd2vKcsBbCfFs4uYQZwVdgGMECrN68iyWEpKt1pi0wBgnT69Q0zYElRUSIoMBj1Wn04V7zNznMNcvY5FGQgva63h2pC3fBeO4UFs3%2Ft9ZD5%2BGNsCeVDWIzhmIwQeidCAme8hTsUg0CaZNtDol4BxmMsDha7ur8Fbkh7Xv94tkAbNIPrbAaPKAT9C8p2J%2FEYLbyKwdTZWPDqOYyuGQ3JW0sLjKxXiltFH2vRyV5gzxVR6USvsmJ7rPCKNXgJXmT0wUi%2FI3i7cCtWveHeB44yL7RB4465XRaqhZFm9kQ6Ofl1Fe3drxh%2BQwr4z5xAY6pgHg3avxpvA2SuKhRMqZ6uar%2FG2RmH97KOwbcH8Yan03XuUxh9%2BYEEeGn0ixU72R4I6Hb7Qp3MPjScZkbbaFGGqIn%2FrxfV2%2BH5DizmPOx8jpCKRCQK6AmtnVgz%2F0%2BdmN72fRabbMqRq1zsJ4Fs9xwL0JkNqyhlBttXPJJYzCLGvqyRWMFnz8MaJPpE7pe%2F%2Byjmv2KVf2jBbicZHY17mxHwj690OvOA6F&X-Amz-Signature=e1c84bf06f57cb86697a3f9ab94eaa9d4d5df8a47a184fcd22908f14e214e349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4WQ74F%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIElEIi7pwCB1cBkWCgVd35XumeYFC65Rr2umxnzTy6%2FtAiA7lDOe9%2BEznj%2BfH0KFOCPqsQsnUTIpTJ%2FLitKj%2B3eLFyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMJTEs9upZXYDKA8LrKtwDGpxbQuawbRV4llijHGs1FtADXbRZI%2FToicgpTdPpttWJDAQt7pDpo71iR6%2BQ8wpu3GoNleFEitBpp8awsqCEYWzyRqrDeeDuLFXAmJ99BMm0nb4150USKWxNIxc4PWrMS1kACog%2FtrahOXV9G7ttSpbRqOPFEQ%2B5CCaZGQIOxTlDlPOPxHF3coiqRe6sh3poZr9oQaZv5vhv5T7DmIh50MTJ69aoipydpntC%2BfvLL2x36khNsj%2BEdcFmNkr%2B6IkTsFk7UfA9jVbS7sZg4CS3JduU%2BOjNf%2Fb8SrhLRUqn2BWScEICijZ2jBFd94XHLZbN%2FpM1hxNqd2vKcsBbCfFs4uYQZwVdgGMECrN68iyWEpKt1pi0wBgnT69Q0zYElRUSIoMBj1Wn04V7zNznMNcvY5FGQgva63h2pC3fBeO4UFs3%2Ft9ZD5%2BGNsCeVDWIzhmIwQeidCAme8hTsUg0CaZNtDol4BxmMsDha7ur8Fbkh7Xv94tkAbNIPrbAaPKAT9C8p2J%2FEYLbyKwdTZWPDqOYyuGQ3JW0sLjKxXiltFH2vRyV5gzxVR6USvsmJ7rPCKNXgJXmT0wUi%2FI3i7cCtWveHeB44yL7RB4465XRaqhZFm9kQ6Ofl1Fe3drxh%2BQwr4z5xAY6pgHg3avxpvA2SuKhRMqZ6uar%2FG2RmH97KOwbcH8Yan03XuUxh9%2BYEEeGn0ixU72R4I6Hb7Qp3MPjScZkbbaFGGqIn%2FrxfV2%2BH5DizmPOx8jpCKRCQK6AmtnVgz%2F0%2BdmN72fRabbMqRq1zsJ4Fs9xwL0JkNqyhlBttXPJJYzCLGvqyRWMFnz8MaJPpE7pe%2F%2Byjmv2KVf2jBbicZHY17mxHwj690OvOA6F&X-Amz-Signature=bb4bd382e9a28513846ed1dfc4329bbb24957f127801969c304b0f207b4399bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
