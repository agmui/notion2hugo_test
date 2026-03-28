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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CZRLEEI%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIBweZQuu8OEIczN79kS9aQ4WIhMr6BAfBdhoNP9UWQvWAiEAsV67oGwawEM2WoSsfnaSbHmP3VOpJpNbnsqKRz%2F19BwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIB0NeLPUpOY6zOdSrcA05ihMJVJ2VOEdqwT7BY6gqr0NE6aFcy8Cv6XeVI4Ze39j%2BZ7xwgWq3FpEJPA7ZF4KBGx5N0si3%2BPDqs1oFDujygjaKzHTGkTVKxb2zP4VLakP37NjDGgLGgAHM6%2BLXjl9mmLy8KbWvHX5zhbKotwSs2X3na4uejL9ooKOUKJmoHeyEJ1EG75scnq0mKkjYTdINsqccJOAN8MRYFCrUyKx8eDjjkpsMVA28zAxh4bmx8kr3SPFk0VZOSemGM56VMFca2z%2BTyUio5QF5yFxVSGjfgiLxWKflJgPVt2Jo7n82ExsMcuWABMn4YVVIjXcO2h9migW2dephlCESjkCAIDkIwzcWxS39v0RW0Djfm3EFp2ii4kDBMXB20QL4XOAikHNBYQxXP8WiqJbHaNKksuJPPUgesZ7H7t2%2Fge%2F8zP9G1VIJPpUtZac34oPT%2FW2vujy89wa%2FB9SMiWqqr2B3eyPY8ANnW%2FlZw5nlNyqSW0%2B8lZn8q0dtkY0ZpxtGYt%2BcLAKeQtEyFSA0wSSXfsYfaERA%2BxijtSMdarRqVkEeacApPPJaUO3NaggkFNyRWoNFCoOJ7aqpT7qOTYx1WORHHgECBV9AmtCi5qATJYSdO2%2FsGOA4boHdztnp3ojYvMJDtnM4GOqUBGtF5i%2BruoWp709FtMBAUBY1F2eXJGCmm5DmUOnYi3U0N%2F8YK26aLT%2FgiCI9bMA9OvFWc9x153nmF8ByDScVTepuw8U8wAZ5h1aGrtw%2FX8lLbVYte6DWjNlOJ0FmCAE2aURFIzih%2BnH68rwgGLY9R34Jsv9Cdtfvzx%2FzrwlWOpzqIdkypd7ZeULttRagcqBQ3w7bgBmxEe1wX5r9LkvYd6RhYe05N&X-Amz-Signature=df0597850f74962afbcc1f02a090f3cdb2ea105783525ed2fa6079c3b039cd27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CZRLEEI%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIBweZQuu8OEIczN79kS9aQ4WIhMr6BAfBdhoNP9UWQvWAiEAsV67oGwawEM2WoSsfnaSbHmP3VOpJpNbnsqKRz%2F19BwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIB0NeLPUpOY6zOdSrcA05ihMJVJ2VOEdqwT7BY6gqr0NE6aFcy8Cv6XeVI4Ze39j%2BZ7xwgWq3FpEJPA7ZF4KBGx5N0si3%2BPDqs1oFDujygjaKzHTGkTVKxb2zP4VLakP37NjDGgLGgAHM6%2BLXjl9mmLy8KbWvHX5zhbKotwSs2X3na4uejL9ooKOUKJmoHeyEJ1EG75scnq0mKkjYTdINsqccJOAN8MRYFCrUyKx8eDjjkpsMVA28zAxh4bmx8kr3SPFk0VZOSemGM56VMFca2z%2BTyUio5QF5yFxVSGjfgiLxWKflJgPVt2Jo7n82ExsMcuWABMn4YVVIjXcO2h9migW2dephlCESjkCAIDkIwzcWxS39v0RW0Djfm3EFp2ii4kDBMXB20QL4XOAikHNBYQxXP8WiqJbHaNKksuJPPUgesZ7H7t2%2Fge%2F8zP9G1VIJPpUtZac34oPT%2FW2vujy89wa%2FB9SMiWqqr2B3eyPY8ANnW%2FlZw5nlNyqSW0%2B8lZn8q0dtkY0ZpxtGYt%2BcLAKeQtEyFSA0wSSXfsYfaERA%2BxijtSMdarRqVkEeacApPPJaUO3NaggkFNyRWoNFCoOJ7aqpT7qOTYx1WORHHgECBV9AmtCi5qATJYSdO2%2FsGOA4boHdztnp3ojYvMJDtnM4GOqUBGtF5i%2BruoWp709FtMBAUBY1F2eXJGCmm5DmUOnYi3U0N%2F8YK26aLT%2FgiCI9bMA9OvFWc9x153nmF8ByDScVTepuw8U8wAZ5h1aGrtw%2FX8lLbVYte6DWjNlOJ0FmCAE2aURFIzih%2BnH68rwgGLY9R34Jsv9Cdtfvzx%2FzrwlWOpzqIdkypd7ZeULttRagcqBQ3w7bgBmxEe1wX5r9LkvYd6RhYe05N&X-Amz-Signature=2210a7958e1c29c353f49ffa82461c8d34a3e23392c763b8fe7e3d6560bd7c9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CZRLEEI%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIBweZQuu8OEIczN79kS9aQ4WIhMr6BAfBdhoNP9UWQvWAiEAsV67oGwawEM2WoSsfnaSbHmP3VOpJpNbnsqKRz%2F19BwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIB0NeLPUpOY6zOdSrcA05ihMJVJ2VOEdqwT7BY6gqr0NE6aFcy8Cv6XeVI4Ze39j%2BZ7xwgWq3FpEJPA7ZF4KBGx5N0si3%2BPDqs1oFDujygjaKzHTGkTVKxb2zP4VLakP37NjDGgLGgAHM6%2BLXjl9mmLy8KbWvHX5zhbKotwSs2X3na4uejL9ooKOUKJmoHeyEJ1EG75scnq0mKkjYTdINsqccJOAN8MRYFCrUyKx8eDjjkpsMVA28zAxh4bmx8kr3SPFk0VZOSemGM56VMFca2z%2BTyUio5QF5yFxVSGjfgiLxWKflJgPVt2Jo7n82ExsMcuWABMn4YVVIjXcO2h9migW2dephlCESjkCAIDkIwzcWxS39v0RW0Djfm3EFp2ii4kDBMXB20QL4XOAikHNBYQxXP8WiqJbHaNKksuJPPUgesZ7H7t2%2Fge%2F8zP9G1VIJPpUtZac34oPT%2FW2vujy89wa%2FB9SMiWqqr2B3eyPY8ANnW%2FlZw5nlNyqSW0%2B8lZn8q0dtkY0ZpxtGYt%2BcLAKeQtEyFSA0wSSXfsYfaERA%2BxijtSMdarRqVkEeacApPPJaUO3NaggkFNyRWoNFCoOJ7aqpT7qOTYx1WORHHgECBV9AmtCi5qATJYSdO2%2FsGOA4boHdztnp3ojYvMJDtnM4GOqUBGtF5i%2BruoWp709FtMBAUBY1F2eXJGCmm5DmUOnYi3U0N%2F8YK26aLT%2FgiCI9bMA9OvFWc9x153nmF8ByDScVTepuw8U8wAZ5h1aGrtw%2FX8lLbVYte6DWjNlOJ0FmCAE2aURFIzih%2BnH68rwgGLY9R34Jsv9Cdtfvzx%2FzrwlWOpzqIdkypd7ZeULttRagcqBQ3w7bgBmxEe1wX5r9LkvYd6RhYe05N&X-Amz-Signature=a47b240f8e0ff0c6067f8fbb14565a27cc750bfa51c54c08c53856a25fdcbb24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CZRLEEI%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIBweZQuu8OEIczN79kS9aQ4WIhMr6BAfBdhoNP9UWQvWAiEAsV67oGwawEM2WoSsfnaSbHmP3VOpJpNbnsqKRz%2F19BwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIB0NeLPUpOY6zOdSrcA05ihMJVJ2VOEdqwT7BY6gqr0NE6aFcy8Cv6XeVI4Ze39j%2BZ7xwgWq3FpEJPA7ZF4KBGx5N0si3%2BPDqs1oFDujygjaKzHTGkTVKxb2zP4VLakP37NjDGgLGgAHM6%2BLXjl9mmLy8KbWvHX5zhbKotwSs2X3na4uejL9ooKOUKJmoHeyEJ1EG75scnq0mKkjYTdINsqccJOAN8MRYFCrUyKx8eDjjkpsMVA28zAxh4bmx8kr3SPFk0VZOSemGM56VMFca2z%2BTyUio5QF5yFxVSGjfgiLxWKflJgPVt2Jo7n82ExsMcuWABMn4YVVIjXcO2h9migW2dephlCESjkCAIDkIwzcWxS39v0RW0Djfm3EFp2ii4kDBMXB20QL4XOAikHNBYQxXP8WiqJbHaNKksuJPPUgesZ7H7t2%2Fge%2F8zP9G1VIJPpUtZac34oPT%2FW2vujy89wa%2FB9SMiWqqr2B3eyPY8ANnW%2FlZw5nlNyqSW0%2B8lZn8q0dtkY0ZpxtGYt%2BcLAKeQtEyFSA0wSSXfsYfaERA%2BxijtSMdarRqVkEeacApPPJaUO3NaggkFNyRWoNFCoOJ7aqpT7qOTYx1WORHHgECBV9AmtCi5qATJYSdO2%2FsGOA4boHdztnp3ojYvMJDtnM4GOqUBGtF5i%2BruoWp709FtMBAUBY1F2eXJGCmm5DmUOnYi3U0N%2F8YK26aLT%2FgiCI9bMA9OvFWc9x153nmF8ByDScVTepuw8U8wAZ5h1aGrtw%2FX8lLbVYte6DWjNlOJ0FmCAE2aURFIzih%2BnH68rwgGLY9R34Jsv9Cdtfvzx%2FzrwlWOpzqIdkypd7ZeULttRagcqBQ3w7bgBmxEe1wX5r9LkvYd6RhYe05N&X-Amz-Signature=411e2953c27f1abfc22864698a7f344889fc4a2382178b5bc8cf495f72444000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNIFVDTE%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIC6ngIb2aM4C1Z2s0zNIvRMaxr4KIwxV%2FtoPDS3D9KsZAiEA1sxS0V4agJL9xdI1usq1WUma8oAIrU4S2CoUcFIAU1wqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM15AYOKOdN49%2Ft%2BXircA4UqOaXO1hyPgWagMVvUh0RlvmziIxahFgnTh8%2BcdjukhndvGfRTFHNRIOrxGQUm%2B6o1T%2FLJVWCUL0UNcaNZMCmugBLzKqDe%2FJ0Rziq21J4grmk55y4nuKk6U%2FqQWqYUO8f0Dl8iqBNqkyK1r4JLaCVrAfHz%2FTnM3L1sSbyLTvzd80LB1EjXsLez3JLCjFYG0uXTFe8GjqhJ%2BBWRWMP2uFd1PAs2ABDPct60Ih8cJ4UNc5y20ZTvmv1q7J8MAewbon2v8r7do6i9NaZjX1byf1NSND6ndGKsdAjFMG1e1HxCr6rtCUz9GVf3c3HsINuDqSaQa6u81OXMHLKI%2FlJOG8QlKeQ9TIUNWXU6RKuAHjc2SbTLLGRdGr8YAIGI7nxvlbmrmYEDUKhciKA0%2BNcpPgIPkiruOimUp8tdgZOpoJnp%2FyB29hjjYrDYaqimFbZKccLWEkvryt6EdEhs%2FqaOZvl7oblo6kOD4qEFhIm%2BtttqroL8GGsFKxQUdDlIGKmMIpjCKBc9aC1lvWwPo%2B3OQStmfjf7cCwOy%2FdwQRo1f0EDq3wgxKdiC41q6JTxrw3b%2B7ju3T%2FQUavOGrNnVnVZmvUi%2FsOATwrEVhG%2Fc3TG%2Fnkt7Mcqffaf1dOZq99AMIXtnM4GOqUBrWUYpqNAgEgKYfZyZXAJlYHPcbfuNg7kPVWclvSgh%2BLnm7iPWIOUfeSlQM2NAJmyjTUxf3sMUqOUbCTHZUVKC9GLO0oZuJ2TQnadCSXmyByfhlkONbziUi50ODaTJcqZNxQrjJdZtBLApekKlqtYQXBQezdoijQdAp%2BkSJVqyc%2FnzKLs0I0YaA%2FuTdlG9Nwu%2BguBHHVM0prv1n0Jk5%2F4YzEZSk7R&X-Amz-Signature=7bcb9d22e650c437733c5519f0d627b04241d808869f9044270e27adfd696562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CZRLEEI%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIBweZQuu8OEIczN79kS9aQ4WIhMr6BAfBdhoNP9UWQvWAiEAsV67oGwawEM2WoSsfnaSbHmP3VOpJpNbnsqKRz%2F19BwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIB0NeLPUpOY6zOdSrcA05ihMJVJ2VOEdqwT7BY6gqr0NE6aFcy8Cv6XeVI4Ze39j%2BZ7xwgWq3FpEJPA7ZF4KBGx5N0si3%2BPDqs1oFDujygjaKzHTGkTVKxb2zP4VLakP37NjDGgLGgAHM6%2BLXjl9mmLy8KbWvHX5zhbKotwSs2X3na4uejL9ooKOUKJmoHeyEJ1EG75scnq0mKkjYTdINsqccJOAN8MRYFCrUyKx8eDjjkpsMVA28zAxh4bmx8kr3SPFk0VZOSemGM56VMFca2z%2BTyUio5QF5yFxVSGjfgiLxWKflJgPVt2Jo7n82ExsMcuWABMn4YVVIjXcO2h9migW2dephlCESjkCAIDkIwzcWxS39v0RW0Djfm3EFp2ii4kDBMXB20QL4XOAikHNBYQxXP8WiqJbHaNKksuJPPUgesZ7H7t2%2Fge%2F8zP9G1VIJPpUtZac34oPT%2FW2vujy89wa%2FB9SMiWqqr2B3eyPY8ANnW%2FlZw5nlNyqSW0%2B8lZn8q0dtkY0ZpxtGYt%2BcLAKeQtEyFSA0wSSXfsYfaERA%2BxijtSMdarRqVkEeacApPPJaUO3NaggkFNyRWoNFCoOJ7aqpT7qOTYx1WORHHgECBV9AmtCi5qATJYSdO2%2FsGOA4boHdztnp3ojYvMJDtnM4GOqUBGtF5i%2BruoWp709FtMBAUBY1F2eXJGCmm5DmUOnYi3U0N%2F8YK26aLT%2FgiCI9bMA9OvFWc9x153nmF8ByDScVTepuw8U8wAZ5h1aGrtw%2FX8lLbVYte6DWjNlOJ0FmCAE2aURFIzih%2BnH68rwgGLY9R34Jsv9Cdtfvzx%2FzrwlWOpzqIdkypd7ZeULttRagcqBQ3w7bgBmxEe1wX5r9LkvYd6RhYe05N&X-Amz-Signature=bbb6ea80206405350583e71ad4947385ff4241c1232d8d1898443f033bed64ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CZRLEEI%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIBweZQuu8OEIczN79kS9aQ4WIhMr6BAfBdhoNP9UWQvWAiEAsV67oGwawEM2WoSsfnaSbHmP3VOpJpNbnsqKRz%2F19BwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIB0NeLPUpOY6zOdSrcA05ihMJVJ2VOEdqwT7BY6gqr0NE6aFcy8Cv6XeVI4Ze39j%2BZ7xwgWq3FpEJPA7ZF4KBGx5N0si3%2BPDqs1oFDujygjaKzHTGkTVKxb2zP4VLakP37NjDGgLGgAHM6%2BLXjl9mmLy8KbWvHX5zhbKotwSs2X3na4uejL9ooKOUKJmoHeyEJ1EG75scnq0mKkjYTdINsqccJOAN8MRYFCrUyKx8eDjjkpsMVA28zAxh4bmx8kr3SPFk0VZOSemGM56VMFca2z%2BTyUio5QF5yFxVSGjfgiLxWKflJgPVt2Jo7n82ExsMcuWABMn4YVVIjXcO2h9migW2dephlCESjkCAIDkIwzcWxS39v0RW0Djfm3EFp2ii4kDBMXB20QL4XOAikHNBYQxXP8WiqJbHaNKksuJPPUgesZ7H7t2%2Fge%2F8zP9G1VIJPpUtZac34oPT%2FW2vujy89wa%2FB9SMiWqqr2B3eyPY8ANnW%2FlZw5nlNyqSW0%2B8lZn8q0dtkY0ZpxtGYt%2BcLAKeQtEyFSA0wSSXfsYfaERA%2BxijtSMdarRqVkEeacApPPJaUO3NaggkFNyRWoNFCoOJ7aqpT7qOTYx1WORHHgECBV9AmtCi5qATJYSdO2%2FsGOA4boHdztnp3ojYvMJDtnM4GOqUBGtF5i%2BruoWp709FtMBAUBY1F2eXJGCmm5DmUOnYi3U0N%2F8YK26aLT%2FgiCI9bMA9OvFWc9x153nmF8ByDScVTepuw8U8wAZ5h1aGrtw%2FX8lLbVYte6DWjNlOJ0FmCAE2aURFIzih%2BnH68rwgGLY9R34Jsv9Cdtfvzx%2FzrwlWOpzqIdkypd7ZeULttRagcqBQ3w7bgBmxEe1wX5r9LkvYd6RhYe05N&X-Amz-Signature=3e82ac2c401412c157bd85c4c4360798c26c2a46995f5bb54df535c2818f1df2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CZRLEEI%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIBweZQuu8OEIczN79kS9aQ4WIhMr6BAfBdhoNP9UWQvWAiEAsV67oGwawEM2WoSsfnaSbHmP3VOpJpNbnsqKRz%2F19BwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIB0NeLPUpOY6zOdSrcA05ihMJVJ2VOEdqwT7BY6gqr0NE6aFcy8Cv6XeVI4Ze39j%2BZ7xwgWq3FpEJPA7ZF4KBGx5N0si3%2BPDqs1oFDujygjaKzHTGkTVKxb2zP4VLakP37NjDGgLGgAHM6%2BLXjl9mmLy8KbWvHX5zhbKotwSs2X3na4uejL9ooKOUKJmoHeyEJ1EG75scnq0mKkjYTdINsqccJOAN8MRYFCrUyKx8eDjjkpsMVA28zAxh4bmx8kr3SPFk0VZOSemGM56VMFca2z%2BTyUio5QF5yFxVSGjfgiLxWKflJgPVt2Jo7n82ExsMcuWABMn4YVVIjXcO2h9migW2dephlCESjkCAIDkIwzcWxS39v0RW0Djfm3EFp2ii4kDBMXB20QL4XOAikHNBYQxXP8WiqJbHaNKksuJPPUgesZ7H7t2%2Fge%2F8zP9G1VIJPpUtZac34oPT%2FW2vujy89wa%2FB9SMiWqqr2B3eyPY8ANnW%2FlZw5nlNyqSW0%2B8lZn8q0dtkY0ZpxtGYt%2BcLAKeQtEyFSA0wSSXfsYfaERA%2BxijtSMdarRqVkEeacApPPJaUO3NaggkFNyRWoNFCoOJ7aqpT7qOTYx1WORHHgECBV9AmtCi5qATJYSdO2%2FsGOA4boHdztnp3ojYvMJDtnM4GOqUBGtF5i%2BruoWp709FtMBAUBY1F2eXJGCmm5DmUOnYi3U0N%2F8YK26aLT%2FgiCI9bMA9OvFWc9x153nmF8ByDScVTepuw8U8wAZ5h1aGrtw%2FX8lLbVYte6DWjNlOJ0FmCAE2aURFIzih%2BnH68rwgGLY9R34Jsv9Cdtfvzx%2FzrwlWOpzqIdkypd7ZeULttRagcqBQ3w7bgBmxEe1wX5r9LkvYd6RhYe05N&X-Amz-Signature=2dc85fcd86c75dcfdce17b9e756b9d7464e95847640a2dafdd1a311c1e143cfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CZRLEEI%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIBweZQuu8OEIczN79kS9aQ4WIhMr6BAfBdhoNP9UWQvWAiEAsV67oGwawEM2WoSsfnaSbHmP3VOpJpNbnsqKRz%2F19BwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIB0NeLPUpOY6zOdSrcA05ihMJVJ2VOEdqwT7BY6gqr0NE6aFcy8Cv6XeVI4Ze39j%2BZ7xwgWq3FpEJPA7ZF4KBGx5N0si3%2BPDqs1oFDujygjaKzHTGkTVKxb2zP4VLakP37NjDGgLGgAHM6%2BLXjl9mmLy8KbWvHX5zhbKotwSs2X3na4uejL9ooKOUKJmoHeyEJ1EG75scnq0mKkjYTdINsqccJOAN8MRYFCrUyKx8eDjjkpsMVA28zAxh4bmx8kr3SPFk0VZOSemGM56VMFca2z%2BTyUio5QF5yFxVSGjfgiLxWKflJgPVt2Jo7n82ExsMcuWABMn4YVVIjXcO2h9migW2dephlCESjkCAIDkIwzcWxS39v0RW0Djfm3EFp2ii4kDBMXB20QL4XOAikHNBYQxXP8WiqJbHaNKksuJPPUgesZ7H7t2%2Fge%2F8zP9G1VIJPpUtZac34oPT%2FW2vujy89wa%2FB9SMiWqqr2B3eyPY8ANnW%2FlZw5nlNyqSW0%2B8lZn8q0dtkY0ZpxtGYt%2BcLAKeQtEyFSA0wSSXfsYfaERA%2BxijtSMdarRqVkEeacApPPJaUO3NaggkFNyRWoNFCoOJ7aqpT7qOTYx1WORHHgECBV9AmtCi5qATJYSdO2%2FsGOA4boHdztnp3ojYvMJDtnM4GOqUBGtF5i%2BruoWp709FtMBAUBY1F2eXJGCmm5DmUOnYi3U0N%2F8YK26aLT%2FgiCI9bMA9OvFWc9x153nmF8ByDScVTepuw8U8wAZ5h1aGrtw%2FX8lLbVYte6DWjNlOJ0FmCAE2aURFIzih%2BnH68rwgGLY9R34Jsv9Cdtfvzx%2FzrwlWOpzqIdkypd7ZeULttRagcqBQ3w7bgBmxEe1wX5r9LkvYd6RhYe05N&X-Amz-Signature=a05a38cbaee6f79d0b27c1355027f1302726315e8d18812a50448a17f2c6e16c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CZRLEEI%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIBweZQuu8OEIczN79kS9aQ4WIhMr6BAfBdhoNP9UWQvWAiEAsV67oGwawEM2WoSsfnaSbHmP3VOpJpNbnsqKRz%2F19BwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIB0NeLPUpOY6zOdSrcA05ihMJVJ2VOEdqwT7BY6gqr0NE6aFcy8Cv6XeVI4Ze39j%2BZ7xwgWq3FpEJPA7ZF4KBGx5N0si3%2BPDqs1oFDujygjaKzHTGkTVKxb2zP4VLakP37NjDGgLGgAHM6%2BLXjl9mmLy8KbWvHX5zhbKotwSs2X3na4uejL9ooKOUKJmoHeyEJ1EG75scnq0mKkjYTdINsqccJOAN8MRYFCrUyKx8eDjjkpsMVA28zAxh4bmx8kr3SPFk0VZOSemGM56VMFca2z%2BTyUio5QF5yFxVSGjfgiLxWKflJgPVt2Jo7n82ExsMcuWABMn4YVVIjXcO2h9migW2dephlCESjkCAIDkIwzcWxS39v0RW0Djfm3EFp2ii4kDBMXB20QL4XOAikHNBYQxXP8WiqJbHaNKksuJPPUgesZ7H7t2%2Fge%2F8zP9G1VIJPpUtZac34oPT%2FW2vujy89wa%2FB9SMiWqqr2B3eyPY8ANnW%2FlZw5nlNyqSW0%2B8lZn8q0dtkY0ZpxtGYt%2BcLAKeQtEyFSA0wSSXfsYfaERA%2BxijtSMdarRqVkEeacApPPJaUO3NaggkFNyRWoNFCoOJ7aqpT7qOTYx1WORHHgECBV9AmtCi5qATJYSdO2%2FsGOA4boHdztnp3ojYvMJDtnM4GOqUBGtF5i%2BruoWp709FtMBAUBY1F2eXJGCmm5DmUOnYi3U0N%2F8YK26aLT%2FgiCI9bMA9OvFWc9x153nmF8ByDScVTepuw8U8wAZ5h1aGrtw%2FX8lLbVYte6DWjNlOJ0FmCAE2aURFIzih%2BnH68rwgGLY9R34Jsv9Cdtfvzx%2FzrwlWOpzqIdkypd7ZeULttRagcqBQ3w7bgBmxEe1wX5r9LkvYd6RhYe05N&X-Amz-Signature=e43055613e6855a08200b2ecf84711a3f058a171326c547e4bcfd994bcfd5c15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CZRLEEI%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIBweZQuu8OEIczN79kS9aQ4WIhMr6BAfBdhoNP9UWQvWAiEAsV67oGwawEM2WoSsfnaSbHmP3VOpJpNbnsqKRz%2F19BwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIB0NeLPUpOY6zOdSrcA05ihMJVJ2VOEdqwT7BY6gqr0NE6aFcy8Cv6XeVI4Ze39j%2BZ7xwgWq3FpEJPA7ZF4KBGx5N0si3%2BPDqs1oFDujygjaKzHTGkTVKxb2zP4VLakP37NjDGgLGgAHM6%2BLXjl9mmLy8KbWvHX5zhbKotwSs2X3na4uejL9ooKOUKJmoHeyEJ1EG75scnq0mKkjYTdINsqccJOAN8MRYFCrUyKx8eDjjkpsMVA28zAxh4bmx8kr3SPFk0VZOSemGM56VMFca2z%2BTyUio5QF5yFxVSGjfgiLxWKflJgPVt2Jo7n82ExsMcuWABMn4YVVIjXcO2h9migW2dephlCESjkCAIDkIwzcWxS39v0RW0Djfm3EFp2ii4kDBMXB20QL4XOAikHNBYQxXP8WiqJbHaNKksuJPPUgesZ7H7t2%2Fge%2F8zP9G1VIJPpUtZac34oPT%2FW2vujy89wa%2FB9SMiWqqr2B3eyPY8ANnW%2FlZw5nlNyqSW0%2B8lZn8q0dtkY0ZpxtGYt%2BcLAKeQtEyFSA0wSSXfsYfaERA%2BxijtSMdarRqVkEeacApPPJaUO3NaggkFNyRWoNFCoOJ7aqpT7qOTYx1WORHHgECBV9AmtCi5qATJYSdO2%2FsGOA4boHdztnp3ojYvMJDtnM4GOqUBGtF5i%2BruoWp709FtMBAUBY1F2eXJGCmm5DmUOnYi3U0N%2F8YK26aLT%2FgiCI9bMA9OvFWc9x153nmF8ByDScVTepuw8U8wAZ5h1aGrtw%2FX8lLbVYte6DWjNlOJ0FmCAE2aURFIzih%2BnH68rwgGLY9R34Jsv9Cdtfvzx%2FzrwlWOpzqIdkypd7ZeULttRagcqBQ3w7bgBmxEe1wX5r9LkvYd6RhYe05N&X-Amz-Signature=394f36a5497ea834d79b95808a7588a10a497d24a53252e1431875a251ad44b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


