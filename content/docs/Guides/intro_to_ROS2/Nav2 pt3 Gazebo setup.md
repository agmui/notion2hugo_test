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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDN4PSCL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUovB%2BTmd8mZuvoI9SOh71T7GBlw8TC36h%2FmmmgSz%2FaQIhAKw5qzwueXcv%2BcLeJ4Q%2BaWv5ktLbHP9ZnhpH633jqii%2FKv8DCCYQABoMNjM3NDIzMTgzODA1IgwROu%2FimmhVDYRcfoAq3AOQjNuOZqG9WY8R7CLjeJgRg0X9mCwKxF%2BTQlIhuDuX5uybGVdu6AWTGMpQV2OeCm7YBIfT9qsNkx1ANlBWARECn8Zb7UoCw6GPiJUXxcROGo%2FVEfXeQ%2F2tAkv%2F87P%2Fw2Y3EHu1Oqjw2B3WR8IOYC8n%2F2D8fygIZBZK8XgBzNmVKigGkYIwd%2BAMVIT%2BhLw0pUPCATeA3nX2ZGjvXx2q6dZZGmdSNmJjzZ6Hnbq8rLl4KTH9ttQ5wP%2F3XZzfUnsJ1bs%2FajDSxBdhS0zUm96PgPbwNE4oOqwHS2bnDEdJmEaZSrTSKR84Vlfzth1%2FhvpLQOH35whe7%2FZwCwUx13c4q1Es2mogxKGYPMATzzI2RQ78EV0WjVBBxK2D%2Fm5lu%2BEx1rdby%2Bxe%2BTPbWkb2UDHhWhfeBIrpLuWxfPz4WHvWCijRWKCRTkqRV06l0VWJjKHAO%2FyqkgSE%2FpNvnlu1spxKKvdO4Hz3nBTYJoPDcWjpzOTBV2h%2F612BJNLulxDqfZyENrL7LXjpQACLo9zxWakv%2B%2FpKxs61kKzj93neGNI54fZNoAOOVl15YvRbrjoGqOvVfrMf7rvoF6uPtapbvBVZHVyx1EXgXAepw8SaJ5GfnIeKHonbh0%2FWXPfZ4HY%2BiTCWq%2FDEBjqkAaHXRi8EpdkrPHCp1dQXOloBsRaSMw0Op%2BFx0TTKBEkGK44XiFwpfLq7qteHD3H6v1a2FmlJisxuPWYc6BDGRsGEjEVp5J5QqVhB%2BGIrzJG1rB4XOKdUPG81eMWeVhKWejdqV31xd8YVgNFr3u8h%2Fr7WClzUPcXzbaYig4liH9rTtlbF423psXZygM1u3huD63DPURiTE%2F1L63zGLUcU5y9lByo8&X-Amz-Signature=4131f9d8a3d1bd49606b98df9fba92db085457c4dbe92e7cf81bcb6cebba4691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDN4PSCL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUovB%2BTmd8mZuvoI9SOh71T7GBlw8TC36h%2FmmmgSz%2FaQIhAKw5qzwueXcv%2BcLeJ4Q%2BaWv5ktLbHP9ZnhpH633jqii%2FKv8DCCYQABoMNjM3NDIzMTgzODA1IgwROu%2FimmhVDYRcfoAq3AOQjNuOZqG9WY8R7CLjeJgRg0X9mCwKxF%2BTQlIhuDuX5uybGVdu6AWTGMpQV2OeCm7YBIfT9qsNkx1ANlBWARECn8Zb7UoCw6GPiJUXxcROGo%2FVEfXeQ%2F2tAkv%2F87P%2Fw2Y3EHu1Oqjw2B3WR8IOYC8n%2F2D8fygIZBZK8XgBzNmVKigGkYIwd%2BAMVIT%2BhLw0pUPCATeA3nX2ZGjvXx2q6dZZGmdSNmJjzZ6Hnbq8rLl4KTH9ttQ5wP%2F3XZzfUnsJ1bs%2FajDSxBdhS0zUm96PgPbwNE4oOqwHS2bnDEdJmEaZSrTSKR84Vlfzth1%2FhvpLQOH35whe7%2FZwCwUx13c4q1Es2mogxKGYPMATzzI2RQ78EV0WjVBBxK2D%2Fm5lu%2BEx1rdby%2Bxe%2BTPbWkb2UDHhWhfeBIrpLuWxfPz4WHvWCijRWKCRTkqRV06l0VWJjKHAO%2FyqkgSE%2FpNvnlu1spxKKvdO4Hz3nBTYJoPDcWjpzOTBV2h%2F612BJNLulxDqfZyENrL7LXjpQACLo9zxWakv%2B%2FpKxs61kKzj93neGNI54fZNoAOOVl15YvRbrjoGqOvVfrMf7rvoF6uPtapbvBVZHVyx1EXgXAepw8SaJ5GfnIeKHonbh0%2FWXPfZ4HY%2BiTCWq%2FDEBjqkAaHXRi8EpdkrPHCp1dQXOloBsRaSMw0Op%2BFx0TTKBEkGK44XiFwpfLq7qteHD3H6v1a2FmlJisxuPWYc6BDGRsGEjEVp5J5QqVhB%2BGIrzJG1rB4XOKdUPG81eMWeVhKWejdqV31xd8YVgNFr3u8h%2Fr7WClzUPcXzbaYig4liH9rTtlbF423psXZygM1u3huD63DPURiTE%2F1L63zGLUcU5y9lByo8&X-Amz-Signature=7355f93beb8ac2b787f15463c06dc0ecf98a518eb983493b46d0b3c0065105ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDN4PSCL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUovB%2BTmd8mZuvoI9SOh71T7GBlw8TC36h%2FmmmgSz%2FaQIhAKw5qzwueXcv%2BcLeJ4Q%2BaWv5ktLbHP9ZnhpH633jqii%2FKv8DCCYQABoMNjM3NDIzMTgzODA1IgwROu%2FimmhVDYRcfoAq3AOQjNuOZqG9WY8R7CLjeJgRg0X9mCwKxF%2BTQlIhuDuX5uybGVdu6AWTGMpQV2OeCm7YBIfT9qsNkx1ANlBWARECn8Zb7UoCw6GPiJUXxcROGo%2FVEfXeQ%2F2tAkv%2F87P%2Fw2Y3EHu1Oqjw2B3WR8IOYC8n%2F2D8fygIZBZK8XgBzNmVKigGkYIwd%2BAMVIT%2BhLw0pUPCATeA3nX2ZGjvXx2q6dZZGmdSNmJjzZ6Hnbq8rLl4KTH9ttQ5wP%2F3XZzfUnsJ1bs%2FajDSxBdhS0zUm96PgPbwNE4oOqwHS2bnDEdJmEaZSrTSKR84Vlfzth1%2FhvpLQOH35whe7%2FZwCwUx13c4q1Es2mogxKGYPMATzzI2RQ78EV0WjVBBxK2D%2Fm5lu%2BEx1rdby%2Bxe%2BTPbWkb2UDHhWhfeBIrpLuWxfPz4WHvWCijRWKCRTkqRV06l0VWJjKHAO%2FyqkgSE%2FpNvnlu1spxKKvdO4Hz3nBTYJoPDcWjpzOTBV2h%2F612BJNLulxDqfZyENrL7LXjpQACLo9zxWakv%2B%2FpKxs61kKzj93neGNI54fZNoAOOVl15YvRbrjoGqOvVfrMf7rvoF6uPtapbvBVZHVyx1EXgXAepw8SaJ5GfnIeKHonbh0%2FWXPfZ4HY%2BiTCWq%2FDEBjqkAaHXRi8EpdkrPHCp1dQXOloBsRaSMw0Op%2BFx0TTKBEkGK44XiFwpfLq7qteHD3H6v1a2FmlJisxuPWYc6BDGRsGEjEVp5J5QqVhB%2BGIrzJG1rB4XOKdUPG81eMWeVhKWejdqV31xd8YVgNFr3u8h%2Fr7WClzUPcXzbaYig4liH9rTtlbF423psXZygM1u3huD63DPURiTE%2F1L63zGLUcU5y9lByo8&X-Amz-Signature=d49f690075b0fe9fbe92faac4a2edc6ea79441e01328bb972b344e1bbb1336b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDN4PSCL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUovB%2BTmd8mZuvoI9SOh71T7GBlw8TC36h%2FmmmgSz%2FaQIhAKw5qzwueXcv%2BcLeJ4Q%2BaWv5ktLbHP9ZnhpH633jqii%2FKv8DCCYQABoMNjM3NDIzMTgzODA1IgwROu%2FimmhVDYRcfoAq3AOQjNuOZqG9WY8R7CLjeJgRg0X9mCwKxF%2BTQlIhuDuX5uybGVdu6AWTGMpQV2OeCm7YBIfT9qsNkx1ANlBWARECn8Zb7UoCw6GPiJUXxcROGo%2FVEfXeQ%2F2tAkv%2F87P%2Fw2Y3EHu1Oqjw2B3WR8IOYC8n%2F2D8fygIZBZK8XgBzNmVKigGkYIwd%2BAMVIT%2BhLw0pUPCATeA3nX2ZGjvXx2q6dZZGmdSNmJjzZ6Hnbq8rLl4KTH9ttQ5wP%2F3XZzfUnsJ1bs%2FajDSxBdhS0zUm96PgPbwNE4oOqwHS2bnDEdJmEaZSrTSKR84Vlfzth1%2FhvpLQOH35whe7%2FZwCwUx13c4q1Es2mogxKGYPMATzzI2RQ78EV0WjVBBxK2D%2Fm5lu%2BEx1rdby%2Bxe%2BTPbWkb2UDHhWhfeBIrpLuWxfPz4WHvWCijRWKCRTkqRV06l0VWJjKHAO%2FyqkgSE%2FpNvnlu1spxKKvdO4Hz3nBTYJoPDcWjpzOTBV2h%2F612BJNLulxDqfZyENrL7LXjpQACLo9zxWakv%2B%2FpKxs61kKzj93neGNI54fZNoAOOVl15YvRbrjoGqOvVfrMf7rvoF6uPtapbvBVZHVyx1EXgXAepw8SaJ5GfnIeKHonbh0%2FWXPfZ4HY%2BiTCWq%2FDEBjqkAaHXRi8EpdkrPHCp1dQXOloBsRaSMw0Op%2BFx0TTKBEkGK44XiFwpfLq7qteHD3H6v1a2FmlJisxuPWYc6BDGRsGEjEVp5J5QqVhB%2BGIrzJG1rB4XOKdUPG81eMWeVhKWejdqV31xd8YVgNFr3u8h%2Fr7WClzUPcXzbaYig4liH9rTtlbF423psXZygM1u3huD63DPURiTE%2F1L63zGLUcU5y9lByo8&X-Amz-Signature=e2c94414e85aee9cd6a5e395990446c270c152c3839d849d9f5693df9d0f50e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP7JF7EQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD41BRgR8ag1E%2BqjQAOirgI7R4fK4cveKL0vYP23UD%2FAIgV4V4gKgxOTU6h%2BwAgHG1ERfcD5y19TRSFgClZIb2dM0q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDNxXqXgRWSTgOBnPFircA%2BixaLHKhRD%2FHzOV4LB5EajWiapK9jGavIfuOpmGpb0m9zxaOMRyN8b4x%2B9fQO6oKHwFT%2Fw%2Fd1VOBvpKfJWvlxw%2FWFmASvIUYsTxyRu8VfGFiXHng%2BVW2H6x6l8EXSkxuYXsCK6J5dekZwzLNAVJ2oFrv9g47QjRjwnYJVLkgt23H9KbT9NNXxC7aC4rS%2BFeVex2B%2Fy%2B4s0eQNfkf14sKWlXQFOw1epMCyAXlW%2Fh1Y2x44SMY8ewkJV3mp9Ayjdk0So8SRCb5XgGPBtql3FdLRphRWWt1YphpDBN25xkJI55%2FMLOuwZcCeLkuIK%2BnmexP7ATnkZuVApGArsb50wxOAU0ThMnzzz5uhCRvZ8M1u5247aK8AxBfnL9fTbTe99X9q9OfDPdyYPvYwmjz8oKDTW7g9ha9SUOOBhDcyLYQnYJ9jEuTJdjxp4Ypbmeclgu%2BR8DbrhNIZtQg4CnzPSu%2BU563COJIsWmDemGZEsM4jkc%2BocYVSaaqFCN8v%2BaEuNzsgxW9iBg4Xs4US1bXKBTtZcVJtY3NrXccCxB4D%2BayILT1kR55x1hfPwEw%2FvwhyqHD7eVskocFdvWjrBsLxG8iH%2BAxjZWBxnRxyEKCVIzOVmoe5a%2FOH%2Bqe1xlxbpTMMyr8MQGOqUBJp%2FJ0InEm2S3nY0cZ5SvNhqAh3Sf11%2BRzp4xqpaAN6NXX6%2BgiTrCajjO1IS1YjyWZTaZZXlfC07t8iKGaYePSdrCkg6DECbWVv9w9mlZMZgOs%2BlBoJR8jxOO4u5146xwq%2FmffZ2rQnpqp47ey%2FVfiqpDavYcbvqJl2zZxZcPC6sFSMQkF26LMuBDs4xvoxuptEn87AkRcUKqUsrUuFtds2CYRmYY&X-Amz-Signature=89c3ceec02b64b65e1cd244d7d422b9bfd258ad35bffb6bb7357343ee240f3fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDN4PSCL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUovB%2BTmd8mZuvoI9SOh71T7GBlw8TC36h%2FmmmgSz%2FaQIhAKw5qzwueXcv%2BcLeJ4Q%2BaWv5ktLbHP9ZnhpH633jqii%2FKv8DCCYQABoMNjM3NDIzMTgzODA1IgwROu%2FimmhVDYRcfoAq3AOQjNuOZqG9WY8R7CLjeJgRg0X9mCwKxF%2BTQlIhuDuX5uybGVdu6AWTGMpQV2OeCm7YBIfT9qsNkx1ANlBWARECn8Zb7UoCw6GPiJUXxcROGo%2FVEfXeQ%2F2tAkv%2F87P%2Fw2Y3EHu1Oqjw2B3WR8IOYC8n%2F2D8fygIZBZK8XgBzNmVKigGkYIwd%2BAMVIT%2BhLw0pUPCATeA3nX2ZGjvXx2q6dZZGmdSNmJjzZ6Hnbq8rLl4KTH9ttQ5wP%2F3XZzfUnsJ1bs%2FajDSxBdhS0zUm96PgPbwNE4oOqwHS2bnDEdJmEaZSrTSKR84Vlfzth1%2FhvpLQOH35whe7%2FZwCwUx13c4q1Es2mogxKGYPMATzzI2RQ78EV0WjVBBxK2D%2Fm5lu%2BEx1rdby%2Bxe%2BTPbWkb2UDHhWhfeBIrpLuWxfPz4WHvWCijRWKCRTkqRV06l0VWJjKHAO%2FyqkgSE%2FpNvnlu1spxKKvdO4Hz3nBTYJoPDcWjpzOTBV2h%2F612BJNLulxDqfZyENrL7LXjpQACLo9zxWakv%2B%2FpKxs61kKzj93neGNI54fZNoAOOVl15YvRbrjoGqOvVfrMf7rvoF6uPtapbvBVZHVyx1EXgXAepw8SaJ5GfnIeKHonbh0%2FWXPfZ4HY%2BiTCWq%2FDEBjqkAaHXRi8EpdkrPHCp1dQXOloBsRaSMw0Op%2BFx0TTKBEkGK44XiFwpfLq7qteHD3H6v1a2FmlJisxuPWYc6BDGRsGEjEVp5J5QqVhB%2BGIrzJG1rB4XOKdUPG81eMWeVhKWejdqV31xd8YVgNFr3u8h%2Fr7WClzUPcXzbaYig4liH9rTtlbF423psXZygM1u3huD63DPURiTE%2F1L63zGLUcU5y9lByo8&X-Amz-Signature=053832b8d43c7bfb14c21488b78164826397ef75cab667a14498322034c8e316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDN4PSCL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUovB%2BTmd8mZuvoI9SOh71T7GBlw8TC36h%2FmmmgSz%2FaQIhAKw5qzwueXcv%2BcLeJ4Q%2BaWv5ktLbHP9ZnhpH633jqii%2FKv8DCCYQABoMNjM3NDIzMTgzODA1IgwROu%2FimmhVDYRcfoAq3AOQjNuOZqG9WY8R7CLjeJgRg0X9mCwKxF%2BTQlIhuDuX5uybGVdu6AWTGMpQV2OeCm7YBIfT9qsNkx1ANlBWARECn8Zb7UoCw6GPiJUXxcROGo%2FVEfXeQ%2F2tAkv%2F87P%2Fw2Y3EHu1Oqjw2B3WR8IOYC8n%2F2D8fygIZBZK8XgBzNmVKigGkYIwd%2BAMVIT%2BhLw0pUPCATeA3nX2ZGjvXx2q6dZZGmdSNmJjzZ6Hnbq8rLl4KTH9ttQ5wP%2F3XZzfUnsJ1bs%2FajDSxBdhS0zUm96PgPbwNE4oOqwHS2bnDEdJmEaZSrTSKR84Vlfzth1%2FhvpLQOH35whe7%2FZwCwUx13c4q1Es2mogxKGYPMATzzI2RQ78EV0WjVBBxK2D%2Fm5lu%2BEx1rdby%2Bxe%2BTPbWkb2UDHhWhfeBIrpLuWxfPz4WHvWCijRWKCRTkqRV06l0VWJjKHAO%2FyqkgSE%2FpNvnlu1spxKKvdO4Hz3nBTYJoPDcWjpzOTBV2h%2F612BJNLulxDqfZyENrL7LXjpQACLo9zxWakv%2B%2FpKxs61kKzj93neGNI54fZNoAOOVl15YvRbrjoGqOvVfrMf7rvoF6uPtapbvBVZHVyx1EXgXAepw8SaJ5GfnIeKHonbh0%2FWXPfZ4HY%2BiTCWq%2FDEBjqkAaHXRi8EpdkrPHCp1dQXOloBsRaSMw0Op%2BFx0TTKBEkGK44XiFwpfLq7qteHD3H6v1a2FmlJisxuPWYc6BDGRsGEjEVp5J5QqVhB%2BGIrzJG1rB4XOKdUPG81eMWeVhKWejdqV31xd8YVgNFr3u8h%2Fr7WClzUPcXzbaYig4liH9rTtlbF423psXZygM1u3huD63DPURiTE%2F1L63zGLUcU5y9lByo8&X-Amz-Signature=deac2ba5ae4800e0b3710daae33e18cf0521bafebd2c833dd83ae871b908a84f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDN4PSCL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUovB%2BTmd8mZuvoI9SOh71T7GBlw8TC36h%2FmmmgSz%2FaQIhAKw5qzwueXcv%2BcLeJ4Q%2BaWv5ktLbHP9ZnhpH633jqii%2FKv8DCCYQABoMNjM3NDIzMTgzODA1IgwROu%2FimmhVDYRcfoAq3AOQjNuOZqG9WY8R7CLjeJgRg0X9mCwKxF%2BTQlIhuDuX5uybGVdu6AWTGMpQV2OeCm7YBIfT9qsNkx1ANlBWARECn8Zb7UoCw6GPiJUXxcROGo%2FVEfXeQ%2F2tAkv%2F87P%2Fw2Y3EHu1Oqjw2B3WR8IOYC8n%2F2D8fygIZBZK8XgBzNmVKigGkYIwd%2BAMVIT%2BhLw0pUPCATeA3nX2ZGjvXx2q6dZZGmdSNmJjzZ6Hnbq8rLl4KTH9ttQ5wP%2F3XZzfUnsJ1bs%2FajDSxBdhS0zUm96PgPbwNE4oOqwHS2bnDEdJmEaZSrTSKR84Vlfzth1%2FhvpLQOH35whe7%2FZwCwUx13c4q1Es2mogxKGYPMATzzI2RQ78EV0WjVBBxK2D%2Fm5lu%2BEx1rdby%2Bxe%2BTPbWkb2UDHhWhfeBIrpLuWxfPz4WHvWCijRWKCRTkqRV06l0VWJjKHAO%2FyqkgSE%2FpNvnlu1spxKKvdO4Hz3nBTYJoPDcWjpzOTBV2h%2F612BJNLulxDqfZyENrL7LXjpQACLo9zxWakv%2B%2FpKxs61kKzj93neGNI54fZNoAOOVl15YvRbrjoGqOvVfrMf7rvoF6uPtapbvBVZHVyx1EXgXAepw8SaJ5GfnIeKHonbh0%2FWXPfZ4HY%2BiTCWq%2FDEBjqkAaHXRi8EpdkrPHCp1dQXOloBsRaSMw0Op%2BFx0TTKBEkGK44XiFwpfLq7qteHD3H6v1a2FmlJisxuPWYc6BDGRsGEjEVp5J5QqVhB%2BGIrzJG1rB4XOKdUPG81eMWeVhKWejdqV31xd8YVgNFr3u8h%2Fr7WClzUPcXzbaYig4liH9rTtlbF423psXZygM1u3huD63DPURiTE%2F1L63zGLUcU5y9lByo8&X-Amz-Signature=6c511e2502664a02874a95b5109146bcbcb9029bcc6819321f4aaba31414b3ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDN4PSCL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUovB%2BTmd8mZuvoI9SOh71T7GBlw8TC36h%2FmmmgSz%2FaQIhAKw5qzwueXcv%2BcLeJ4Q%2BaWv5ktLbHP9ZnhpH633jqii%2FKv8DCCYQABoMNjM3NDIzMTgzODA1IgwROu%2FimmhVDYRcfoAq3AOQjNuOZqG9WY8R7CLjeJgRg0X9mCwKxF%2BTQlIhuDuX5uybGVdu6AWTGMpQV2OeCm7YBIfT9qsNkx1ANlBWARECn8Zb7UoCw6GPiJUXxcROGo%2FVEfXeQ%2F2tAkv%2F87P%2Fw2Y3EHu1Oqjw2B3WR8IOYC8n%2F2D8fygIZBZK8XgBzNmVKigGkYIwd%2BAMVIT%2BhLw0pUPCATeA3nX2ZGjvXx2q6dZZGmdSNmJjzZ6Hnbq8rLl4KTH9ttQ5wP%2F3XZzfUnsJ1bs%2FajDSxBdhS0zUm96PgPbwNE4oOqwHS2bnDEdJmEaZSrTSKR84Vlfzth1%2FhvpLQOH35whe7%2FZwCwUx13c4q1Es2mogxKGYPMATzzI2RQ78EV0WjVBBxK2D%2Fm5lu%2BEx1rdby%2Bxe%2BTPbWkb2UDHhWhfeBIrpLuWxfPz4WHvWCijRWKCRTkqRV06l0VWJjKHAO%2FyqkgSE%2FpNvnlu1spxKKvdO4Hz3nBTYJoPDcWjpzOTBV2h%2F612BJNLulxDqfZyENrL7LXjpQACLo9zxWakv%2B%2FpKxs61kKzj93neGNI54fZNoAOOVl15YvRbrjoGqOvVfrMf7rvoF6uPtapbvBVZHVyx1EXgXAepw8SaJ5GfnIeKHonbh0%2FWXPfZ4HY%2BiTCWq%2FDEBjqkAaHXRi8EpdkrPHCp1dQXOloBsRaSMw0Op%2BFx0TTKBEkGK44XiFwpfLq7qteHD3H6v1a2FmlJisxuPWYc6BDGRsGEjEVp5J5QqVhB%2BGIrzJG1rB4XOKdUPG81eMWeVhKWejdqV31xd8YVgNFr3u8h%2Fr7WClzUPcXzbaYig4liH9rTtlbF423psXZygM1u3huD63DPURiTE%2F1L63zGLUcU5y9lByo8&X-Amz-Signature=b0203074b17cf67ce2f7e648611d0ee25b888c520ba56551197977cbf5e2ac68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDN4PSCL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUovB%2BTmd8mZuvoI9SOh71T7GBlw8TC36h%2FmmmgSz%2FaQIhAKw5qzwueXcv%2BcLeJ4Q%2BaWv5ktLbHP9ZnhpH633jqii%2FKv8DCCYQABoMNjM3NDIzMTgzODA1IgwROu%2FimmhVDYRcfoAq3AOQjNuOZqG9WY8R7CLjeJgRg0X9mCwKxF%2BTQlIhuDuX5uybGVdu6AWTGMpQV2OeCm7YBIfT9qsNkx1ANlBWARECn8Zb7UoCw6GPiJUXxcROGo%2FVEfXeQ%2F2tAkv%2F87P%2Fw2Y3EHu1Oqjw2B3WR8IOYC8n%2F2D8fygIZBZK8XgBzNmVKigGkYIwd%2BAMVIT%2BhLw0pUPCATeA3nX2ZGjvXx2q6dZZGmdSNmJjzZ6Hnbq8rLl4KTH9ttQ5wP%2F3XZzfUnsJ1bs%2FajDSxBdhS0zUm96PgPbwNE4oOqwHS2bnDEdJmEaZSrTSKR84Vlfzth1%2FhvpLQOH35whe7%2FZwCwUx13c4q1Es2mogxKGYPMATzzI2RQ78EV0WjVBBxK2D%2Fm5lu%2BEx1rdby%2Bxe%2BTPbWkb2UDHhWhfeBIrpLuWxfPz4WHvWCijRWKCRTkqRV06l0VWJjKHAO%2FyqkgSE%2FpNvnlu1spxKKvdO4Hz3nBTYJoPDcWjpzOTBV2h%2F612BJNLulxDqfZyENrL7LXjpQACLo9zxWakv%2B%2FpKxs61kKzj93neGNI54fZNoAOOVl15YvRbrjoGqOvVfrMf7rvoF6uPtapbvBVZHVyx1EXgXAepw8SaJ5GfnIeKHonbh0%2FWXPfZ4HY%2BiTCWq%2FDEBjqkAaHXRi8EpdkrPHCp1dQXOloBsRaSMw0Op%2BFx0TTKBEkGK44XiFwpfLq7qteHD3H6v1a2FmlJisxuPWYc6BDGRsGEjEVp5J5QqVhB%2BGIrzJG1rB4XOKdUPG81eMWeVhKWejdqV31xd8YVgNFr3u8h%2Fr7WClzUPcXzbaYig4liH9rTtlbF423psXZygM1u3huD63DPURiTE%2F1L63zGLUcU5y9lByo8&X-Amz-Signature=f692d07244c8c65481b6d7095c2a653e7b3204f86a12b5ee96f62ec05e26d478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDN4PSCL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUovB%2BTmd8mZuvoI9SOh71T7GBlw8TC36h%2FmmmgSz%2FaQIhAKw5qzwueXcv%2BcLeJ4Q%2BaWv5ktLbHP9ZnhpH633jqii%2FKv8DCCYQABoMNjM3NDIzMTgzODA1IgwROu%2FimmhVDYRcfoAq3AOQjNuOZqG9WY8R7CLjeJgRg0X9mCwKxF%2BTQlIhuDuX5uybGVdu6AWTGMpQV2OeCm7YBIfT9qsNkx1ANlBWARECn8Zb7UoCw6GPiJUXxcROGo%2FVEfXeQ%2F2tAkv%2F87P%2Fw2Y3EHu1Oqjw2B3WR8IOYC8n%2F2D8fygIZBZK8XgBzNmVKigGkYIwd%2BAMVIT%2BhLw0pUPCATeA3nX2ZGjvXx2q6dZZGmdSNmJjzZ6Hnbq8rLl4KTH9ttQ5wP%2F3XZzfUnsJ1bs%2FajDSxBdhS0zUm96PgPbwNE4oOqwHS2bnDEdJmEaZSrTSKR84Vlfzth1%2FhvpLQOH35whe7%2FZwCwUx13c4q1Es2mogxKGYPMATzzI2RQ78EV0WjVBBxK2D%2Fm5lu%2BEx1rdby%2Bxe%2BTPbWkb2UDHhWhfeBIrpLuWxfPz4WHvWCijRWKCRTkqRV06l0VWJjKHAO%2FyqkgSE%2FpNvnlu1spxKKvdO4Hz3nBTYJoPDcWjpzOTBV2h%2F612BJNLulxDqfZyENrL7LXjpQACLo9zxWakv%2B%2FpKxs61kKzj93neGNI54fZNoAOOVl15YvRbrjoGqOvVfrMf7rvoF6uPtapbvBVZHVyx1EXgXAepw8SaJ5GfnIeKHonbh0%2FWXPfZ4HY%2BiTCWq%2FDEBjqkAaHXRi8EpdkrPHCp1dQXOloBsRaSMw0Op%2BFx0TTKBEkGK44XiFwpfLq7qteHD3H6v1a2FmlJisxuPWYc6BDGRsGEjEVp5J5QqVhB%2BGIrzJG1rB4XOKdUPG81eMWeVhKWejdqV31xd8YVgNFr3u8h%2Fr7WClzUPcXzbaYig4liH9rTtlbF423psXZygM1u3huD63DPURiTE%2F1L63zGLUcU5y9lByo8&X-Amz-Signature=35a106cd0a087bb2f0fe93f7b33960523e1601813d27ca6adfac1432108e3106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
