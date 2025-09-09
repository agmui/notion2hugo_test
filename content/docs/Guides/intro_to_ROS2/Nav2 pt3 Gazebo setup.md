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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLLKPXN%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAq7pxrqTzbECQoLbRA9GplB%2ByQmTjxVBPbsiJHKjd4cAiAW2%2FQcFWNiwPCw67s62ssSlIOz07s0sgpW9tl2jCWXSyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BXUgJiq0vRAmgfvKtwDy5nFXUND3%2F8QDRggvy6r1WdUv1cGSLP2T5lM6BkibHvteHI1QOjqk%2BStLKgUsygGlu%2BwsdSo9ttl4UR4OrCfQCclfKeMB75q6Nv6KU0B08m9vN4I2Qa7Vvg14VaSKzJxk1X3yWxXBOvaHcELV93IxhaKnWmK6f3P8ufzOTMVkRDrr6lnDOuSKY9CE0Y6AcWefJqZIm00t3kXiMa9x7guoW%2B4wSF2MR9%2BEKTxCmuT%2B%2Bw8pZxhSVIaZHuCxDemUOxjlfX4Urtz7CfD%2BXgJ9QVWWgrnK4hMT5ODj%2F%2FolY29H9SCOkGzxctzsEwEAsk%2FZFZN5V%2Bvj4B%2B9Z9lQI1%2F%2Bmke%2Fx0b4fwcN7zxiu4R1Qa63uLt7UNqTrt1%2Bsnz0YUL%2BIUhZNmqLb7JCbYZEFA9yRsJDX0PvoT936bxIJucbpzcYaP8YgQm%2F1pIjIUbSMJHHgNReyEDDTAkT3lXgKHW7xVP6BJC5OALNCQePuNhFZtfYqtTnM1aXPI7sDMRxdSlNuyPDbMYLuH96vn8O%2FUvo%2FEM8c89%2B7Irnq2CHe4YH1%2B01DpsqQlD%2FL7a%2FUg5ATqFZuWa2hvEtlbWO4N9lUe1ZamHn%2F6D6Qcpez%2BH5JLqwwIjozYHwdQU3GXa6hd4R3Aw8vL9xQY6pgHoUZlwFWWu22Zt5a0XuqFRcEWN1XxJdc31Wrfz3KAikf7E3NgGkge6xof7l4yqLBmcF7CA%2BEZdQ6UNZV%2BbJlbKtsv8kYgb9WT3zpci7Ur0mQPClU3DTcbntRD7xGsAEH%2BASe53%2BC1ufOGl5Vmz3sEnl0CkY2Q%2BW7DU6jvAa665SN79W6wITNF9Hgni1s93CKN%2B0NcuvoFz5tgbx9supLkd6UFH8%2BCP&X-Amz-Signature=c999dabade109caf3fbe3d7d3c55666933b232cd33204c06b5595780a44406be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLLKPXN%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAq7pxrqTzbECQoLbRA9GplB%2ByQmTjxVBPbsiJHKjd4cAiAW2%2FQcFWNiwPCw67s62ssSlIOz07s0sgpW9tl2jCWXSyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BXUgJiq0vRAmgfvKtwDy5nFXUND3%2F8QDRggvy6r1WdUv1cGSLP2T5lM6BkibHvteHI1QOjqk%2BStLKgUsygGlu%2BwsdSo9ttl4UR4OrCfQCclfKeMB75q6Nv6KU0B08m9vN4I2Qa7Vvg14VaSKzJxk1X3yWxXBOvaHcELV93IxhaKnWmK6f3P8ufzOTMVkRDrr6lnDOuSKY9CE0Y6AcWefJqZIm00t3kXiMa9x7guoW%2B4wSF2MR9%2BEKTxCmuT%2B%2Bw8pZxhSVIaZHuCxDemUOxjlfX4Urtz7CfD%2BXgJ9QVWWgrnK4hMT5ODj%2F%2FolY29H9SCOkGzxctzsEwEAsk%2FZFZN5V%2Bvj4B%2B9Z9lQI1%2F%2Bmke%2Fx0b4fwcN7zxiu4R1Qa63uLt7UNqTrt1%2Bsnz0YUL%2BIUhZNmqLb7JCbYZEFA9yRsJDX0PvoT936bxIJucbpzcYaP8YgQm%2F1pIjIUbSMJHHgNReyEDDTAkT3lXgKHW7xVP6BJC5OALNCQePuNhFZtfYqtTnM1aXPI7sDMRxdSlNuyPDbMYLuH96vn8O%2FUvo%2FEM8c89%2B7Irnq2CHe4YH1%2B01DpsqQlD%2FL7a%2FUg5ATqFZuWa2hvEtlbWO4N9lUe1ZamHn%2F6D6Qcpez%2BH5JLqwwIjozYHwdQU3GXa6hd4R3Aw8vL9xQY6pgHoUZlwFWWu22Zt5a0XuqFRcEWN1XxJdc31Wrfz3KAikf7E3NgGkge6xof7l4yqLBmcF7CA%2BEZdQ6UNZV%2BbJlbKtsv8kYgb9WT3zpci7Ur0mQPClU3DTcbntRD7xGsAEH%2BASe53%2BC1ufOGl5Vmz3sEnl0CkY2Q%2BW7DU6jvAa665SN79W6wITNF9Hgni1s93CKN%2B0NcuvoFz5tgbx9supLkd6UFH8%2BCP&X-Amz-Signature=2ee91cbb215eafea013545098d997006dd5fce8093ef73701d1f0b7a9603e98f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLLKPXN%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAq7pxrqTzbECQoLbRA9GplB%2ByQmTjxVBPbsiJHKjd4cAiAW2%2FQcFWNiwPCw67s62ssSlIOz07s0sgpW9tl2jCWXSyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BXUgJiq0vRAmgfvKtwDy5nFXUND3%2F8QDRggvy6r1WdUv1cGSLP2T5lM6BkibHvteHI1QOjqk%2BStLKgUsygGlu%2BwsdSo9ttl4UR4OrCfQCclfKeMB75q6Nv6KU0B08m9vN4I2Qa7Vvg14VaSKzJxk1X3yWxXBOvaHcELV93IxhaKnWmK6f3P8ufzOTMVkRDrr6lnDOuSKY9CE0Y6AcWefJqZIm00t3kXiMa9x7guoW%2B4wSF2MR9%2BEKTxCmuT%2B%2Bw8pZxhSVIaZHuCxDemUOxjlfX4Urtz7CfD%2BXgJ9QVWWgrnK4hMT5ODj%2F%2FolY29H9SCOkGzxctzsEwEAsk%2FZFZN5V%2Bvj4B%2B9Z9lQI1%2F%2Bmke%2Fx0b4fwcN7zxiu4R1Qa63uLt7UNqTrt1%2Bsnz0YUL%2BIUhZNmqLb7JCbYZEFA9yRsJDX0PvoT936bxIJucbpzcYaP8YgQm%2F1pIjIUbSMJHHgNReyEDDTAkT3lXgKHW7xVP6BJC5OALNCQePuNhFZtfYqtTnM1aXPI7sDMRxdSlNuyPDbMYLuH96vn8O%2FUvo%2FEM8c89%2B7Irnq2CHe4YH1%2B01DpsqQlD%2FL7a%2FUg5ATqFZuWa2hvEtlbWO4N9lUe1ZamHn%2F6D6Qcpez%2BH5JLqwwIjozYHwdQU3GXa6hd4R3Aw8vL9xQY6pgHoUZlwFWWu22Zt5a0XuqFRcEWN1XxJdc31Wrfz3KAikf7E3NgGkge6xof7l4yqLBmcF7CA%2BEZdQ6UNZV%2BbJlbKtsv8kYgb9WT3zpci7Ur0mQPClU3DTcbntRD7xGsAEH%2BASe53%2BC1ufOGl5Vmz3sEnl0CkY2Q%2BW7DU6jvAa665SN79W6wITNF9Hgni1s93CKN%2B0NcuvoFz5tgbx9supLkd6UFH8%2BCP&X-Amz-Signature=c96ab52a0004b5d7e7fc272825a10a0a918c2e70eff77208e98a54e360141aee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLLKPXN%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAq7pxrqTzbECQoLbRA9GplB%2ByQmTjxVBPbsiJHKjd4cAiAW2%2FQcFWNiwPCw67s62ssSlIOz07s0sgpW9tl2jCWXSyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BXUgJiq0vRAmgfvKtwDy5nFXUND3%2F8QDRggvy6r1WdUv1cGSLP2T5lM6BkibHvteHI1QOjqk%2BStLKgUsygGlu%2BwsdSo9ttl4UR4OrCfQCclfKeMB75q6Nv6KU0B08m9vN4I2Qa7Vvg14VaSKzJxk1X3yWxXBOvaHcELV93IxhaKnWmK6f3P8ufzOTMVkRDrr6lnDOuSKY9CE0Y6AcWefJqZIm00t3kXiMa9x7guoW%2B4wSF2MR9%2BEKTxCmuT%2B%2Bw8pZxhSVIaZHuCxDemUOxjlfX4Urtz7CfD%2BXgJ9QVWWgrnK4hMT5ODj%2F%2FolY29H9SCOkGzxctzsEwEAsk%2FZFZN5V%2Bvj4B%2B9Z9lQI1%2F%2Bmke%2Fx0b4fwcN7zxiu4R1Qa63uLt7UNqTrt1%2Bsnz0YUL%2BIUhZNmqLb7JCbYZEFA9yRsJDX0PvoT936bxIJucbpzcYaP8YgQm%2F1pIjIUbSMJHHgNReyEDDTAkT3lXgKHW7xVP6BJC5OALNCQePuNhFZtfYqtTnM1aXPI7sDMRxdSlNuyPDbMYLuH96vn8O%2FUvo%2FEM8c89%2B7Irnq2CHe4YH1%2B01DpsqQlD%2FL7a%2FUg5ATqFZuWa2hvEtlbWO4N9lUe1ZamHn%2F6D6Qcpez%2BH5JLqwwIjozYHwdQU3GXa6hd4R3Aw8vL9xQY6pgHoUZlwFWWu22Zt5a0XuqFRcEWN1XxJdc31Wrfz3KAikf7E3NgGkge6xof7l4yqLBmcF7CA%2BEZdQ6UNZV%2BbJlbKtsv8kYgb9WT3zpci7Ur0mQPClU3DTcbntRD7xGsAEH%2BASe53%2BC1ufOGl5Vmz3sEnl0CkY2Q%2BW7DU6jvAa665SN79W6wITNF9Hgni1s93CKN%2B0NcuvoFz5tgbx9supLkd6UFH8%2BCP&X-Amz-Signature=61410c0011bdcdd8a4e2dd3e9d44bdf0b415afb5008c6888bb2abec92e82edef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF2B4ADH%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIC0qNAZen8I9poSmLXBLpgrLrMq%2FFVnUbi8e3MtFbwBUAiAXEU5N5ULP9uqXe3kYV7aU0IUe5itttrBW2oqY5aaV5yqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fpik9yDCFuIuto2GKtwDB6xtotERQ6weg2adJXPSUoEcTZO6DBxyW994y3pG4Rd5EtmqH1jgG6Ns3N2DvKpA57JP0R4DMvB6%2FeF1SDXymggGPfsSrg3t8SmzG6d4%2FuOfWmNX5dJCZJC1y77yP4%2F1LO1fz6SWoGgdhbjYVFI4e%2BrJ4vqqdae3cPgK%2BdyKkmWzPUtYjXK1QWnRHPTXoLOxr%2BdrVYpvqjWGmbhHGkChYjrEy21hn8zf5cjr%2Be2boyls08n30k%2Bf6clOB%2B6PR6CCFznjRPUm5pnVhHKCcaCtDKhsS0rd6oWeSpB2TLHuiNsAx%2FXKkCOHSYbRtkJAZusFSpqM6E41yZuyfHh5hBjFkznY8PxGHM83mG1rv3WPqHyCzG0QkqwHKBM9QFpus%2B4R%2BV4ecHsmNs%2FtNsULwNTb6piW%2BFWXgffgNxoLtsH%2FzhCwvBBFTcq%2FMbsts2RnpOJOenby1a8nP66Tz8tbYCS3sv4V8WXekkIBWRlihJT8Aj1bobsm%2BDKXDVjs0RxEVI2Xye1VWP%2FbQEl%2BY9tZuGr8Qofr8KG4M%2Bqt07LZvoVMh3xnYbRTSxUEsoPEhWDDCYB%2FagsgcS8AYfuLwc0Nj%2BFBC8nlU3uRTcqUmTXWp1m3P8fnntDi1%2B6jbPPwuvwwoPL9xQY6pgGf8%2FG8PG68YlPZYnnXH0A17IT4gE3H0ZfqWo%2Buo4QP1FwX6MegCE9nJKgo3uni2GC3JQ2FFzAkBFPx4R7DIQctaFQjT9bLtoKTJIXgaYHLh5AzZeb7bWjIjgd703yulTIKpPcHHXAfdKksRJODzEmh6ntVETlB2UwGU9onV6EfmeI9aqenWGo0n2NVY8DnIBTdCXLpDfwENuT%2BV6QivGYfEc7Fs0yi&X-Amz-Signature=2bf0876542a2c451fe5d2cd8a6917ff3b7e4d45c74fa21218d28e7236a1ffd5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLLKPXN%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAq7pxrqTzbECQoLbRA9GplB%2ByQmTjxVBPbsiJHKjd4cAiAW2%2FQcFWNiwPCw67s62ssSlIOz07s0sgpW9tl2jCWXSyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BXUgJiq0vRAmgfvKtwDy5nFXUND3%2F8QDRggvy6r1WdUv1cGSLP2T5lM6BkibHvteHI1QOjqk%2BStLKgUsygGlu%2BwsdSo9ttl4UR4OrCfQCclfKeMB75q6Nv6KU0B08m9vN4I2Qa7Vvg14VaSKzJxk1X3yWxXBOvaHcELV93IxhaKnWmK6f3P8ufzOTMVkRDrr6lnDOuSKY9CE0Y6AcWefJqZIm00t3kXiMa9x7guoW%2B4wSF2MR9%2BEKTxCmuT%2B%2Bw8pZxhSVIaZHuCxDemUOxjlfX4Urtz7CfD%2BXgJ9QVWWgrnK4hMT5ODj%2F%2FolY29H9SCOkGzxctzsEwEAsk%2FZFZN5V%2Bvj4B%2B9Z9lQI1%2F%2Bmke%2Fx0b4fwcN7zxiu4R1Qa63uLt7UNqTrt1%2Bsnz0YUL%2BIUhZNmqLb7JCbYZEFA9yRsJDX0PvoT936bxIJucbpzcYaP8YgQm%2F1pIjIUbSMJHHgNReyEDDTAkT3lXgKHW7xVP6BJC5OALNCQePuNhFZtfYqtTnM1aXPI7sDMRxdSlNuyPDbMYLuH96vn8O%2FUvo%2FEM8c89%2B7Irnq2CHe4YH1%2B01DpsqQlD%2FL7a%2FUg5ATqFZuWa2hvEtlbWO4N9lUe1ZamHn%2F6D6Qcpez%2BH5JLqwwIjozYHwdQU3GXa6hd4R3Aw8vL9xQY6pgHoUZlwFWWu22Zt5a0XuqFRcEWN1XxJdc31Wrfz3KAikf7E3NgGkge6xof7l4yqLBmcF7CA%2BEZdQ6UNZV%2BbJlbKtsv8kYgb9WT3zpci7Ur0mQPClU3DTcbntRD7xGsAEH%2BASe53%2BC1ufOGl5Vmz3sEnl0CkY2Q%2BW7DU6jvAa665SN79W6wITNF9Hgni1s93CKN%2B0NcuvoFz5tgbx9supLkd6UFH8%2BCP&X-Amz-Signature=5853602e4daaf225a91673b42fc4919baf781db369b5dc5be415b6f1ce8c7196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLLKPXN%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAq7pxrqTzbECQoLbRA9GplB%2ByQmTjxVBPbsiJHKjd4cAiAW2%2FQcFWNiwPCw67s62ssSlIOz07s0sgpW9tl2jCWXSyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BXUgJiq0vRAmgfvKtwDy5nFXUND3%2F8QDRggvy6r1WdUv1cGSLP2T5lM6BkibHvteHI1QOjqk%2BStLKgUsygGlu%2BwsdSo9ttl4UR4OrCfQCclfKeMB75q6Nv6KU0B08m9vN4I2Qa7Vvg14VaSKzJxk1X3yWxXBOvaHcELV93IxhaKnWmK6f3P8ufzOTMVkRDrr6lnDOuSKY9CE0Y6AcWefJqZIm00t3kXiMa9x7guoW%2B4wSF2MR9%2BEKTxCmuT%2B%2Bw8pZxhSVIaZHuCxDemUOxjlfX4Urtz7CfD%2BXgJ9QVWWgrnK4hMT5ODj%2F%2FolY29H9SCOkGzxctzsEwEAsk%2FZFZN5V%2Bvj4B%2B9Z9lQI1%2F%2Bmke%2Fx0b4fwcN7zxiu4R1Qa63uLt7UNqTrt1%2Bsnz0YUL%2BIUhZNmqLb7JCbYZEFA9yRsJDX0PvoT936bxIJucbpzcYaP8YgQm%2F1pIjIUbSMJHHgNReyEDDTAkT3lXgKHW7xVP6BJC5OALNCQePuNhFZtfYqtTnM1aXPI7sDMRxdSlNuyPDbMYLuH96vn8O%2FUvo%2FEM8c89%2B7Irnq2CHe4YH1%2B01DpsqQlD%2FL7a%2FUg5ATqFZuWa2hvEtlbWO4N9lUe1ZamHn%2F6D6Qcpez%2BH5JLqwwIjozYHwdQU3GXa6hd4R3Aw8vL9xQY6pgHoUZlwFWWu22Zt5a0XuqFRcEWN1XxJdc31Wrfz3KAikf7E3NgGkge6xof7l4yqLBmcF7CA%2BEZdQ6UNZV%2BbJlbKtsv8kYgb9WT3zpci7Ur0mQPClU3DTcbntRD7xGsAEH%2BASe53%2BC1ufOGl5Vmz3sEnl0CkY2Q%2BW7DU6jvAa665SN79W6wITNF9Hgni1s93CKN%2B0NcuvoFz5tgbx9supLkd6UFH8%2BCP&X-Amz-Signature=b7881c71600efafc66d1bae2e71032a6e82438bd04df97c071ca3148c9248445&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLLKPXN%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAq7pxrqTzbECQoLbRA9GplB%2ByQmTjxVBPbsiJHKjd4cAiAW2%2FQcFWNiwPCw67s62ssSlIOz07s0sgpW9tl2jCWXSyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BXUgJiq0vRAmgfvKtwDy5nFXUND3%2F8QDRggvy6r1WdUv1cGSLP2T5lM6BkibHvteHI1QOjqk%2BStLKgUsygGlu%2BwsdSo9ttl4UR4OrCfQCclfKeMB75q6Nv6KU0B08m9vN4I2Qa7Vvg14VaSKzJxk1X3yWxXBOvaHcELV93IxhaKnWmK6f3P8ufzOTMVkRDrr6lnDOuSKY9CE0Y6AcWefJqZIm00t3kXiMa9x7guoW%2B4wSF2MR9%2BEKTxCmuT%2B%2Bw8pZxhSVIaZHuCxDemUOxjlfX4Urtz7CfD%2BXgJ9QVWWgrnK4hMT5ODj%2F%2FolY29H9SCOkGzxctzsEwEAsk%2FZFZN5V%2Bvj4B%2B9Z9lQI1%2F%2Bmke%2Fx0b4fwcN7zxiu4R1Qa63uLt7UNqTrt1%2Bsnz0YUL%2BIUhZNmqLb7JCbYZEFA9yRsJDX0PvoT936bxIJucbpzcYaP8YgQm%2F1pIjIUbSMJHHgNReyEDDTAkT3lXgKHW7xVP6BJC5OALNCQePuNhFZtfYqtTnM1aXPI7sDMRxdSlNuyPDbMYLuH96vn8O%2FUvo%2FEM8c89%2B7Irnq2CHe4YH1%2B01DpsqQlD%2FL7a%2FUg5ATqFZuWa2hvEtlbWO4N9lUe1ZamHn%2F6D6Qcpez%2BH5JLqwwIjozYHwdQU3GXa6hd4R3Aw8vL9xQY6pgHoUZlwFWWu22Zt5a0XuqFRcEWN1XxJdc31Wrfz3KAikf7E3NgGkge6xof7l4yqLBmcF7CA%2BEZdQ6UNZV%2BbJlbKtsv8kYgb9WT3zpci7Ur0mQPClU3DTcbntRD7xGsAEH%2BASe53%2BC1ufOGl5Vmz3sEnl0CkY2Q%2BW7DU6jvAa665SN79W6wITNF9Hgni1s93CKN%2B0NcuvoFz5tgbx9supLkd6UFH8%2BCP&X-Amz-Signature=52c98ea4dbf43a3b959928ad2e53a12debc50d51187f334c50baecb02a9322c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLLKPXN%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAq7pxrqTzbECQoLbRA9GplB%2ByQmTjxVBPbsiJHKjd4cAiAW2%2FQcFWNiwPCw67s62ssSlIOz07s0sgpW9tl2jCWXSyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BXUgJiq0vRAmgfvKtwDy5nFXUND3%2F8QDRggvy6r1WdUv1cGSLP2T5lM6BkibHvteHI1QOjqk%2BStLKgUsygGlu%2BwsdSo9ttl4UR4OrCfQCclfKeMB75q6Nv6KU0B08m9vN4I2Qa7Vvg14VaSKzJxk1X3yWxXBOvaHcELV93IxhaKnWmK6f3P8ufzOTMVkRDrr6lnDOuSKY9CE0Y6AcWefJqZIm00t3kXiMa9x7guoW%2B4wSF2MR9%2BEKTxCmuT%2B%2Bw8pZxhSVIaZHuCxDemUOxjlfX4Urtz7CfD%2BXgJ9QVWWgrnK4hMT5ODj%2F%2FolY29H9SCOkGzxctzsEwEAsk%2FZFZN5V%2Bvj4B%2B9Z9lQI1%2F%2Bmke%2Fx0b4fwcN7zxiu4R1Qa63uLt7UNqTrt1%2Bsnz0YUL%2BIUhZNmqLb7JCbYZEFA9yRsJDX0PvoT936bxIJucbpzcYaP8YgQm%2F1pIjIUbSMJHHgNReyEDDTAkT3lXgKHW7xVP6BJC5OALNCQePuNhFZtfYqtTnM1aXPI7sDMRxdSlNuyPDbMYLuH96vn8O%2FUvo%2FEM8c89%2B7Irnq2CHe4YH1%2B01DpsqQlD%2FL7a%2FUg5ATqFZuWa2hvEtlbWO4N9lUe1ZamHn%2F6D6Qcpez%2BH5JLqwwIjozYHwdQU3GXa6hd4R3Aw8vL9xQY6pgHoUZlwFWWu22Zt5a0XuqFRcEWN1XxJdc31Wrfz3KAikf7E3NgGkge6xof7l4yqLBmcF7CA%2BEZdQ6UNZV%2BbJlbKtsv8kYgb9WT3zpci7Ur0mQPClU3DTcbntRD7xGsAEH%2BASe53%2BC1ufOGl5Vmz3sEnl0CkY2Q%2BW7DU6jvAa665SN79W6wITNF9Hgni1s93CKN%2B0NcuvoFz5tgbx9supLkd6UFH8%2BCP&X-Amz-Signature=b9d96410b71d791bb58c15acf8d71f3c53956d7a13333b94ffee4836f5136340&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLLKPXN%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAq7pxrqTzbECQoLbRA9GplB%2ByQmTjxVBPbsiJHKjd4cAiAW2%2FQcFWNiwPCw67s62ssSlIOz07s0sgpW9tl2jCWXSyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BXUgJiq0vRAmgfvKtwDy5nFXUND3%2F8QDRggvy6r1WdUv1cGSLP2T5lM6BkibHvteHI1QOjqk%2BStLKgUsygGlu%2BwsdSo9ttl4UR4OrCfQCclfKeMB75q6Nv6KU0B08m9vN4I2Qa7Vvg14VaSKzJxk1X3yWxXBOvaHcELV93IxhaKnWmK6f3P8ufzOTMVkRDrr6lnDOuSKY9CE0Y6AcWefJqZIm00t3kXiMa9x7guoW%2B4wSF2MR9%2BEKTxCmuT%2B%2Bw8pZxhSVIaZHuCxDemUOxjlfX4Urtz7CfD%2BXgJ9QVWWgrnK4hMT5ODj%2F%2FolY29H9SCOkGzxctzsEwEAsk%2FZFZN5V%2Bvj4B%2B9Z9lQI1%2F%2Bmke%2Fx0b4fwcN7zxiu4R1Qa63uLt7UNqTrt1%2Bsnz0YUL%2BIUhZNmqLb7JCbYZEFA9yRsJDX0PvoT936bxIJucbpzcYaP8YgQm%2F1pIjIUbSMJHHgNReyEDDTAkT3lXgKHW7xVP6BJC5OALNCQePuNhFZtfYqtTnM1aXPI7sDMRxdSlNuyPDbMYLuH96vn8O%2FUvo%2FEM8c89%2B7Irnq2CHe4YH1%2B01DpsqQlD%2FL7a%2FUg5ATqFZuWa2hvEtlbWO4N9lUe1ZamHn%2F6D6Qcpez%2BH5JLqwwIjozYHwdQU3GXa6hd4R3Aw8vL9xQY6pgHoUZlwFWWu22Zt5a0XuqFRcEWN1XxJdc31Wrfz3KAikf7E3NgGkge6xof7l4yqLBmcF7CA%2BEZdQ6UNZV%2BbJlbKtsv8kYgb9WT3zpci7Ur0mQPClU3DTcbntRD7xGsAEH%2BASe53%2BC1ufOGl5Vmz3sEnl0CkY2Q%2BW7DU6jvAa665SN79W6wITNF9Hgni1s93CKN%2B0NcuvoFz5tgbx9supLkd6UFH8%2BCP&X-Amz-Signature=9f0b63725b5ab035513edb6ef1dfdd1e6c646f8ea6874869d724835af36b7424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLLKPXN%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAq7pxrqTzbECQoLbRA9GplB%2ByQmTjxVBPbsiJHKjd4cAiAW2%2FQcFWNiwPCw67s62ssSlIOz07s0sgpW9tl2jCWXSyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BXUgJiq0vRAmgfvKtwDy5nFXUND3%2F8QDRggvy6r1WdUv1cGSLP2T5lM6BkibHvteHI1QOjqk%2BStLKgUsygGlu%2BwsdSo9ttl4UR4OrCfQCclfKeMB75q6Nv6KU0B08m9vN4I2Qa7Vvg14VaSKzJxk1X3yWxXBOvaHcELV93IxhaKnWmK6f3P8ufzOTMVkRDrr6lnDOuSKY9CE0Y6AcWefJqZIm00t3kXiMa9x7guoW%2B4wSF2MR9%2BEKTxCmuT%2B%2Bw8pZxhSVIaZHuCxDemUOxjlfX4Urtz7CfD%2BXgJ9QVWWgrnK4hMT5ODj%2F%2FolY29H9SCOkGzxctzsEwEAsk%2FZFZN5V%2Bvj4B%2B9Z9lQI1%2F%2Bmke%2Fx0b4fwcN7zxiu4R1Qa63uLt7UNqTrt1%2Bsnz0YUL%2BIUhZNmqLb7JCbYZEFA9yRsJDX0PvoT936bxIJucbpzcYaP8YgQm%2F1pIjIUbSMJHHgNReyEDDTAkT3lXgKHW7xVP6BJC5OALNCQePuNhFZtfYqtTnM1aXPI7sDMRxdSlNuyPDbMYLuH96vn8O%2FUvo%2FEM8c89%2B7Irnq2CHe4YH1%2B01DpsqQlD%2FL7a%2FUg5ATqFZuWa2hvEtlbWO4N9lUe1ZamHn%2F6D6Qcpez%2BH5JLqwwIjozYHwdQU3GXa6hd4R3Aw8vL9xQY6pgHoUZlwFWWu22Zt5a0XuqFRcEWN1XxJdc31Wrfz3KAikf7E3NgGkge6xof7l4yqLBmcF7CA%2BEZdQ6UNZV%2BbJlbKtsv8kYgb9WT3zpci7Ur0mQPClU3DTcbntRD7xGsAEH%2BASe53%2BC1ufOGl5Vmz3sEnl0CkY2Q%2BW7DU6jvAa665SN79W6wITNF9Hgni1s93CKN%2B0NcuvoFz5tgbx9supLkd6UFH8%2BCP&X-Amz-Signature=c1af00a202a8172a905df5e9fd6ed41dc8178edfad1d1670bb15a67098f52bef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


