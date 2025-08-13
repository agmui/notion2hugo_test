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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE2LUPTC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkCB88AHBhoQr5y2XIjJjhNjftHfA0hsAwXvk%2Bxi50vQIhAMBLRNKpWzRYY%2BY7tKqoJH4tMpCtb7FhHQKg8Nz619BYKv8DCCwQABoMNjM3NDIzMTgzODA1IgzgSiDGHTwgt6XlOLIq3AO%2BCzUpmNOE29zJYNIZheFmGR5QQrLVIwAJgLX8BUkp79N7X6N7JttVukhJ%2F%2BroNHRGqbQuAeyQusT0zfA%2B78XqZd7cUO4Gz1Qs%2BEe7m6wWTlHkPxzRAX%2BmnhaHQXad3v%2BwPQLo5XT%2FYQgg2Ojf8cLxrXuXtVvdS6QdII7E9H4NYZTBdCqhKnstxW%2B%2Bm4dFcT1kbEjZAHCCBrF93KRVhYC0myhQflLjMTKlz9tEtXZqlATbsblbJgoMmm8l95%2BnfMJic7LG8stvEFVlTnU4cI%2BqVZGQM1c0Soia6g1DWBBKCxA4Co30Ckp5Bgt0omWCPdsOHyLYng7svppjhHUefg1OVql4gpfhbNlAvJ%2FxZ48ki1B%2BVfgRiw7bgxJEajW6bxFm7oyapymGZsbQgCq97nNyQgpk4O%2FX1q9sf%2FP3bdRyQZ2ruePURa%2BZyFdgANXPcpoamFnS8XmZcnWm%2BrWEI3mQUJeTZL%2F%2BbzXH102mxU210PW8LHQ6IETs847BlD1Zz2L59OsYfJEockMLwhahNkrV181PvQLijwTOnErPKhE6i2hYqa0dQPGP0rVi3zgb8SESHQZGzotx4r%2FalOHxV13LtNgjAqhGEt3cqySQvb5F%2FpOP%2BnU4IbU6Fpf6%2FjDP6fHEBjqkATnyTXA%2BnBvikoxGg8J9N6B898DelWhAbNYFvJGse3T%2Few6zDkZG%2Brxl488Ty96rhkVMgzNKMdi%2Bun4n0R11HocFTw85NELm%2FT5cbpyCWbYQzSxUX4KdwLXYFo4MhRPB6bRmFvTuSW1dyPT1BOce%2B%2BJHlogMdHTy4S9cy7R8tBLWsF1SH9agqF6YWA0LY1rBqteRR2Ts%2BBwqtZryKzqKiE5sbHJ%2B&X-Amz-Signature=f03e31fc207fbdb460ea6a3b553b71ae865a5b1c868f090ae0f4ac6f9f5eec85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE2LUPTC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkCB88AHBhoQr5y2XIjJjhNjftHfA0hsAwXvk%2Bxi50vQIhAMBLRNKpWzRYY%2BY7tKqoJH4tMpCtb7FhHQKg8Nz619BYKv8DCCwQABoMNjM3NDIzMTgzODA1IgzgSiDGHTwgt6XlOLIq3AO%2BCzUpmNOE29zJYNIZheFmGR5QQrLVIwAJgLX8BUkp79N7X6N7JttVukhJ%2F%2BroNHRGqbQuAeyQusT0zfA%2B78XqZd7cUO4Gz1Qs%2BEe7m6wWTlHkPxzRAX%2BmnhaHQXad3v%2BwPQLo5XT%2FYQgg2Ojf8cLxrXuXtVvdS6QdII7E9H4NYZTBdCqhKnstxW%2B%2Bm4dFcT1kbEjZAHCCBrF93KRVhYC0myhQflLjMTKlz9tEtXZqlATbsblbJgoMmm8l95%2BnfMJic7LG8stvEFVlTnU4cI%2BqVZGQM1c0Soia6g1DWBBKCxA4Co30Ckp5Bgt0omWCPdsOHyLYng7svppjhHUefg1OVql4gpfhbNlAvJ%2FxZ48ki1B%2BVfgRiw7bgxJEajW6bxFm7oyapymGZsbQgCq97nNyQgpk4O%2FX1q9sf%2FP3bdRyQZ2ruePURa%2BZyFdgANXPcpoamFnS8XmZcnWm%2BrWEI3mQUJeTZL%2F%2BbzXH102mxU210PW8LHQ6IETs847BlD1Zz2L59OsYfJEockMLwhahNkrV181PvQLijwTOnErPKhE6i2hYqa0dQPGP0rVi3zgb8SESHQZGzotx4r%2FalOHxV13LtNgjAqhGEt3cqySQvb5F%2FpOP%2BnU4IbU6Fpf6%2FjDP6fHEBjqkATnyTXA%2BnBvikoxGg8J9N6B898DelWhAbNYFvJGse3T%2Few6zDkZG%2Brxl488Ty96rhkVMgzNKMdi%2Bun4n0R11HocFTw85NELm%2FT5cbpyCWbYQzSxUX4KdwLXYFo4MhRPB6bRmFvTuSW1dyPT1BOce%2B%2BJHlogMdHTy4S9cy7R8tBLWsF1SH9agqF6YWA0LY1rBqteRR2Ts%2BBwqtZryKzqKiE5sbHJ%2B&X-Amz-Signature=b507d485a04f96921d6e01f21d432a110f810e508d5f2c5673602882856b3fba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE2LUPTC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkCB88AHBhoQr5y2XIjJjhNjftHfA0hsAwXvk%2Bxi50vQIhAMBLRNKpWzRYY%2BY7tKqoJH4tMpCtb7FhHQKg8Nz619BYKv8DCCwQABoMNjM3NDIzMTgzODA1IgzgSiDGHTwgt6XlOLIq3AO%2BCzUpmNOE29zJYNIZheFmGR5QQrLVIwAJgLX8BUkp79N7X6N7JttVukhJ%2F%2BroNHRGqbQuAeyQusT0zfA%2B78XqZd7cUO4Gz1Qs%2BEe7m6wWTlHkPxzRAX%2BmnhaHQXad3v%2BwPQLo5XT%2FYQgg2Ojf8cLxrXuXtVvdS6QdII7E9H4NYZTBdCqhKnstxW%2B%2Bm4dFcT1kbEjZAHCCBrF93KRVhYC0myhQflLjMTKlz9tEtXZqlATbsblbJgoMmm8l95%2BnfMJic7LG8stvEFVlTnU4cI%2BqVZGQM1c0Soia6g1DWBBKCxA4Co30Ckp5Bgt0omWCPdsOHyLYng7svppjhHUefg1OVql4gpfhbNlAvJ%2FxZ48ki1B%2BVfgRiw7bgxJEajW6bxFm7oyapymGZsbQgCq97nNyQgpk4O%2FX1q9sf%2FP3bdRyQZ2ruePURa%2BZyFdgANXPcpoamFnS8XmZcnWm%2BrWEI3mQUJeTZL%2F%2BbzXH102mxU210PW8LHQ6IETs847BlD1Zz2L59OsYfJEockMLwhahNkrV181PvQLijwTOnErPKhE6i2hYqa0dQPGP0rVi3zgb8SESHQZGzotx4r%2FalOHxV13LtNgjAqhGEt3cqySQvb5F%2FpOP%2BnU4IbU6Fpf6%2FjDP6fHEBjqkATnyTXA%2BnBvikoxGg8J9N6B898DelWhAbNYFvJGse3T%2Few6zDkZG%2Brxl488Ty96rhkVMgzNKMdi%2Bun4n0R11HocFTw85NELm%2FT5cbpyCWbYQzSxUX4KdwLXYFo4MhRPB6bRmFvTuSW1dyPT1BOce%2B%2BJHlogMdHTy4S9cy7R8tBLWsF1SH9agqF6YWA0LY1rBqteRR2Ts%2BBwqtZryKzqKiE5sbHJ%2B&X-Amz-Signature=5609d82d551718ce2137f0df410b3f6828302154c01a280849473596a478aa9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE2LUPTC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkCB88AHBhoQr5y2XIjJjhNjftHfA0hsAwXvk%2Bxi50vQIhAMBLRNKpWzRYY%2BY7tKqoJH4tMpCtb7FhHQKg8Nz619BYKv8DCCwQABoMNjM3NDIzMTgzODA1IgzgSiDGHTwgt6XlOLIq3AO%2BCzUpmNOE29zJYNIZheFmGR5QQrLVIwAJgLX8BUkp79N7X6N7JttVukhJ%2F%2BroNHRGqbQuAeyQusT0zfA%2B78XqZd7cUO4Gz1Qs%2BEe7m6wWTlHkPxzRAX%2BmnhaHQXad3v%2BwPQLo5XT%2FYQgg2Ojf8cLxrXuXtVvdS6QdII7E9H4NYZTBdCqhKnstxW%2B%2Bm4dFcT1kbEjZAHCCBrF93KRVhYC0myhQflLjMTKlz9tEtXZqlATbsblbJgoMmm8l95%2BnfMJic7LG8stvEFVlTnU4cI%2BqVZGQM1c0Soia6g1DWBBKCxA4Co30Ckp5Bgt0omWCPdsOHyLYng7svppjhHUefg1OVql4gpfhbNlAvJ%2FxZ48ki1B%2BVfgRiw7bgxJEajW6bxFm7oyapymGZsbQgCq97nNyQgpk4O%2FX1q9sf%2FP3bdRyQZ2ruePURa%2BZyFdgANXPcpoamFnS8XmZcnWm%2BrWEI3mQUJeTZL%2F%2BbzXH102mxU210PW8LHQ6IETs847BlD1Zz2L59OsYfJEockMLwhahNkrV181PvQLijwTOnErPKhE6i2hYqa0dQPGP0rVi3zgb8SESHQZGzotx4r%2FalOHxV13LtNgjAqhGEt3cqySQvb5F%2FpOP%2BnU4IbU6Fpf6%2FjDP6fHEBjqkATnyTXA%2BnBvikoxGg8J9N6B898DelWhAbNYFvJGse3T%2Few6zDkZG%2Brxl488Ty96rhkVMgzNKMdi%2Bun4n0R11HocFTw85NELm%2FT5cbpyCWbYQzSxUX4KdwLXYFo4MhRPB6bRmFvTuSW1dyPT1BOce%2B%2BJHlogMdHTy4S9cy7R8tBLWsF1SH9agqF6YWA0LY1rBqteRR2Ts%2BBwqtZryKzqKiE5sbHJ%2B&X-Amz-Signature=950a8ef40d09e29fbcc8830d7168bb0e6d866f9f7be900ecb9493cb4ee225af1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JAFIUDR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0CNnun%2F%2BkVQ83eaTDxC8jFr03uvxOrga%2FViE8r%2B4pOAiB%2BcTlQkR5fMPnzamO07R9J1FHFTlol6fDR280y25Dwjyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMxlYJJibWG8TEPb7YKtwD7Aflw4ceItWpsgCedBnq92Q929zEEBcVkJZ3J9br%2Fyni%2Bn%2BheuSdlG%2F7FNjCKPmeXJxsMoGrOIc%2BEjdvnqbOTLT90fhQA51pIbs2na5hhFoUPlQjNM7O6eqINyb71lv2hjiyEeWg4Gq%2FnFeRagMcdUiNIt5w0sCbx6E%2Bvn5fzAbrL1U3ozBD99JrfcOA02Wh1mM4sFGxhrOSWZ5EOar9NqVC5i4EoYDp2mwN%2Bl5XyaWQ4l0h0vnWzFtEWEM0wprMSvUNKyT8gCY4TKmOBLWTaVmCS4ibmI3eqa8msrLkLAdfbn5kZGKGZC14vvU6qSvzAudFhiCYq5RldFq0E6m8qLqeJV8yb8aZMJ9%2BAcyMd2Cf6F%2FnKRsprIuRPNx3eE7h%2BGZIUfpbYLYkpSlyltT8k7aHZfB%2Fbuee2Lh4soYcCgfSsIix8VGMEhIS4VQIb8C5VA51y51rg230pkC5ZtBjNv2Htqf32bAE4woapIpALsIp3iMlox6mqpcCHziUit6pF9xXFCwRNC%2BmTcwFh900S0dkUiiAA%2B6jwY1Eia0cBEbeqLBMbHMgWUxJkuz6Pg%2Bkzv5%2Frw4Y%2FkBURpu630r%2FW7I7hXxGecNN%2FfwIIeSBbRN5rJTsnSXXXMDCzqEwvOrxxAY6pgGPJIl9OfcRuvz%2BfLP3MNjGSK2s82%2FeHPPN3DwRNH7cqn2VSwYsWxptzogt7QO4ryQ6CX2F0tN7BaD07BJ9jT1LoxLbO0jqDAYIQrsvMAVNA%2FJkBhorQQhTBdDUHHaRfCvQNFHi%2B5bSlpANQp3oGk7OrrB6eTeh9EgektWwuTfy54xX7dLFzZtWJLbaLnh9s%2BwZ1idgee2KUzDxpy5geZ5XDwGP2T0q&X-Amz-Signature=2e5b95e3bf1cec4ee193cd6f7d505bfe780f0751b4affc0d697703a42174512a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE2LUPTC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkCB88AHBhoQr5y2XIjJjhNjftHfA0hsAwXvk%2Bxi50vQIhAMBLRNKpWzRYY%2BY7tKqoJH4tMpCtb7FhHQKg8Nz619BYKv8DCCwQABoMNjM3NDIzMTgzODA1IgzgSiDGHTwgt6XlOLIq3AO%2BCzUpmNOE29zJYNIZheFmGR5QQrLVIwAJgLX8BUkp79N7X6N7JttVukhJ%2F%2BroNHRGqbQuAeyQusT0zfA%2B78XqZd7cUO4Gz1Qs%2BEe7m6wWTlHkPxzRAX%2BmnhaHQXad3v%2BwPQLo5XT%2FYQgg2Ojf8cLxrXuXtVvdS6QdII7E9H4NYZTBdCqhKnstxW%2B%2Bm4dFcT1kbEjZAHCCBrF93KRVhYC0myhQflLjMTKlz9tEtXZqlATbsblbJgoMmm8l95%2BnfMJic7LG8stvEFVlTnU4cI%2BqVZGQM1c0Soia6g1DWBBKCxA4Co30Ckp5Bgt0omWCPdsOHyLYng7svppjhHUefg1OVql4gpfhbNlAvJ%2FxZ48ki1B%2BVfgRiw7bgxJEajW6bxFm7oyapymGZsbQgCq97nNyQgpk4O%2FX1q9sf%2FP3bdRyQZ2ruePURa%2BZyFdgANXPcpoamFnS8XmZcnWm%2BrWEI3mQUJeTZL%2F%2BbzXH102mxU210PW8LHQ6IETs847BlD1Zz2L59OsYfJEockMLwhahNkrV181PvQLijwTOnErPKhE6i2hYqa0dQPGP0rVi3zgb8SESHQZGzotx4r%2FalOHxV13LtNgjAqhGEt3cqySQvb5F%2FpOP%2BnU4IbU6Fpf6%2FjDP6fHEBjqkATnyTXA%2BnBvikoxGg8J9N6B898DelWhAbNYFvJGse3T%2Few6zDkZG%2Brxl488Ty96rhkVMgzNKMdi%2Bun4n0R11HocFTw85NELm%2FT5cbpyCWbYQzSxUX4KdwLXYFo4MhRPB6bRmFvTuSW1dyPT1BOce%2B%2BJHlogMdHTy4S9cy7R8tBLWsF1SH9agqF6YWA0LY1rBqteRR2Ts%2BBwqtZryKzqKiE5sbHJ%2B&X-Amz-Signature=a7eaa994d6925705c7ffd95742e5abc52e987a808d8297667ffb573502bb4912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE2LUPTC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkCB88AHBhoQr5y2XIjJjhNjftHfA0hsAwXvk%2Bxi50vQIhAMBLRNKpWzRYY%2BY7tKqoJH4tMpCtb7FhHQKg8Nz619BYKv8DCCwQABoMNjM3NDIzMTgzODA1IgzgSiDGHTwgt6XlOLIq3AO%2BCzUpmNOE29zJYNIZheFmGR5QQrLVIwAJgLX8BUkp79N7X6N7JttVukhJ%2F%2BroNHRGqbQuAeyQusT0zfA%2B78XqZd7cUO4Gz1Qs%2BEe7m6wWTlHkPxzRAX%2BmnhaHQXad3v%2BwPQLo5XT%2FYQgg2Ojf8cLxrXuXtVvdS6QdII7E9H4NYZTBdCqhKnstxW%2B%2Bm4dFcT1kbEjZAHCCBrF93KRVhYC0myhQflLjMTKlz9tEtXZqlATbsblbJgoMmm8l95%2BnfMJic7LG8stvEFVlTnU4cI%2BqVZGQM1c0Soia6g1DWBBKCxA4Co30Ckp5Bgt0omWCPdsOHyLYng7svppjhHUefg1OVql4gpfhbNlAvJ%2FxZ48ki1B%2BVfgRiw7bgxJEajW6bxFm7oyapymGZsbQgCq97nNyQgpk4O%2FX1q9sf%2FP3bdRyQZ2ruePURa%2BZyFdgANXPcpoamFnS8XmZcnWm%2BrWEI3mQUJeTZL%2F%2BbzXH102mxU210PW8LHQ6IETs847BlD1Zz2L59OsYfJEockMLwhahNkrV181PvQLijwTOnErPKhE6i2hYqa0dQPGP0rVi3zgb8SESHQZGzotx4r%2FalOHxV13LtNgjAqhGEt3cqySQvb5F%2FpOP%2BnU4IbU6Fpf6%2FjDP6fHEBjqkATnyTXA%2BnBvikoxGg8J9N6B898DelWhAbNYFvJGse3T%2Few6zDkZG%2Brxl488Ty96rhkVMgzNKMdi%2Bun4n0R11HocFTw85NELm%2FT5cbpyCWbYQzSxUX4KdwLXYFo4MhRPB6bRmFvTuSW1dyPT1BOce%2B%2BJHlogMdHTy4S9cy7R8tBLWsF1SH9agqF6YWA0LY1rBqteRR2Ts%2BBwqtZryKzqKiE5sbHJ%2B&X-Amz-Signature=07b62b12150519e71335acf0e3dedda566e69ccfc146ba241b20de06d8603dd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE2LUPTC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkCB88AHBhoQr5y2XIjJjhNjftHfA0hsAwXvk%2Bxi50vQIhAMBLRNKpWzRYY%2BY7tKqoJH4tMpCtb7FhHQKg8Nz619BYKv8DCCwQABoMNjM3NDIzMTgzODA1IgzgSiDGHTwgt6XlOLIq3AO%2BCzUpmNOE29zJYNIZheFmGR5QQrLVIwAJgLX8BUkp79N7X6N7JttVukhJ%2F%2BroNHRGqbQuAeyQusT0zfA%2B78XqZd7cUO4Gz1Qs%2BEe7m6wWTlHkPxzRAX%2BmnhaHQXad3v%2BwPQLo5XT%2FYQgg2Ojf8cLxrXuXtVvdS6QdII7E9H4NYZTBdCqhKnstxW%2B%2Bm4dFcT1kbEjZAHCCBrF93KRVhYC0myhQflLjMTKlz9tEtXZqlATbsblbJgoMmm8l95%2BnfMJic7LG8stvEFVlTnU4cI%2BqVZGQM1c0Soia6g1DWBBKCxA4Co30Ckp5Bgt0omWCPdsOHyLYng7svppjhHUefg1OVql4gpfhbNlAvJ%2FxZ48ki1B%2BVfgRiw7bgxJEajW6bxFm7oyapymGZsbQgCq97nNyQgpk4O%2FX1q9sf%2FP3bdRyQZ2ruePURa%2BZyFdgANXPcpoamFnS8XmZcnWm%2BrWEI3mQUJeTZL%2F%2BbzXH102mxU210PW8LHQ6IETs847BlD1Zz2L59OsYfJEockMLwhahNkrV181PvQLijwTOnErPKhE6i2hYqa0dQPGP0rVi3zgb8SESHQZGzotx4r%2FalOHxV13LtNgjAqhGEt3cqySQvb5F%2FpOP%2BnU4IbU6Fpf6%2FjDP6fHEBjqkATnyTXA%2BnBvikoxGg8J9N6B898DelWhAbNYFvJGse3T%2Few6zDkZG%2Brxl488Ty96rhkVMgzNKMdi%2Bun4n0R11HocFTw85NELm%2FT5cbpyCWbYQzSxUX4KdwLXYFo4MhRPB6bRmFvTuSW1dyPT1BOce%2B%2BJHlogMdHTy4S9cy7R8tBLWsF1SH9agqF6YWA0LY1rBqteRR2Ts%2BBwqtZryKzqKiE5sbHJ%2B&X-Amz-Signature=329565b8675d27f083228f2ecc3efea9b60ef268334e915952fb5683049321c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE2LUPTC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkCB88AHBhoQr5y2XIjJjhNjftHfA0hsAwXvk%2Bxi50vQIhAMBLRNKpWzRYY%2BY7tKqoJH4tMpCtb7FhHQKg8Nz619BYKv8DCCwQABoMNjM3NDIzMTgzODA1IgzgSiDGHTwgt6XlOLIq3AO%2BCzUpmNOE29zJYNIZheFmGR5QQrLVIwAJgLX8BUkp79N7X6N7JttVukhJ%2F%2BroNHRGqbQuAeyQusT0zfA%2B78XqZd7cUO4Gz1Qs%2BEe7m6wWTlHkPxzRAX%2BmnhaHQXad3v%2BwPQLo5XT%2FYQgg2Ojf8cLxrXuXtVvdS6QdII7E9H4NYZTBdCqhKnstxW%2B%2Bm4dFcT1kbEjZAHCCBrF93KRVhYC0myhQflLjMTKlz9tEtXZqlATbsblbJgoMmm8l95%2BnfMJic7LG8stvEFVlTnU4cI%2BqVZGQM1c0Soia6g1DWBBKCxA4Co30Ckp5Bgt0omWCPdsOHyLYng7svppjhHUefg1OVql4gpfhbNlAvJ%2FxZ48ki1B%2BVfgRiw7bgxJEajW6bxFm7oyapymGZsbQgCq97nNyQgpk4O%2FX1q9sf%2FP3bdRyQZ2ruePURa%2BZyFdgANXPcpoamFnS8XmZcnWm%2BrWEI3mQUJeTZL%2F%2BbzXH102mxU210PW8LHQ6IETs847BlD1Zz2L59OsYfJEockMLwhahNkrV181PvQLijwTOnErPKhE6i2hYqa0dQPGP0rVi3zgb8SESHQZGzotx4r%2FalOHxV13LtNgjAqhGEt3cqySQvb5F%2FpOP%2BnU4IbU6Fpf6%2FjDP6fHEBjqkATnyTXA%2BnBvikoxGg8J9N6B898DelWhAbNYFvJGse3T%2Few6zDkZG%2Brxl488Ty96rhkVMgzNKMdi%2Bun4n0R11HocFTw85NELm%2FT5cbpyCWbYQzSxUX4KdwLXYFo4MhRPB6bRmFvTuSW1dyPT1BOce%2B%2BJHlogMdHTy4S9cy7R8tBLWsF1SH9agqF6YWA0LY1rBqteRR2Ts%2BBwqtZryKzqKiE5sbHJ%2B&X-Amz-Signature=c4897e5c9faf85b0ba8df6dcf7c184de34b511231f595570b5a57cf84dc7475c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE2LUPTC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkCB88AHBhoQr5y2XIjJjhNjftHfA0hsAwXvk%2Bxi50vQIhAMBLRNKpWzRYY%2BY7tKqoJH4tMpCtb7FhHQKg8Nz619BYKv8DCCwQABoMNjM3NDIzMTgzODA1IgzgSiDGHTwgt6XlOLIq3AO%2BCzUpmNOE29zJYNIZheFmGR5QQrLVIwAJgLX8BUkp79N7X6N7JttVukhJ%2F%2BroNHRGqbQuAeyQusT0zfA%2B78XqZd7cUO4Gz1Qs%2BEe7m6wWTlHkPxzRAX%2BmnhaHQXad3v%2BwPQLo5XT%2FYQgg2Ojf8cLxrXuXtVvdS6QdII7E9H4NYZTBdCqhKnstxW%2B%2Bm4dFcT1kbEjZAHCCBrF93KRVhYC0myhQflLjMTKlz9tEtXZqlATbsblbJgoMmm8l95%2BnfMJic7LG8stvEFVlTnU4cI%2BqVZGQM1c0Soia6g1DWBBKCxA4Co30Ckp5Bgt0omWCPdsOHyLYng7svppjhHUefg1OVql4gpfhbNlAvJ%2FxZ48ki1B%2BVfgRiw7bgxJEajW6bxFm7oyapymGZsbQgCq97nNyQgpk4O%2FX1q9sf%2FP3bdRyQZ2ruePURa%2BZyFdgANXPcpoamFnS8XmZcnWm%2BrWEI3mQUJeTZL%2F%2BbzXH102mxU210PW8LHQ6IETs847BlD1Zz2L59OsYfJEockMLwhahNkrV181PvQLijwTOnErPKhE6i2hYqa0dQPGP0rVi3zgb8SESHQZGzotx4r%2FalOHxV13LtNgjAqhGEt3cqySQvb5F%2FpOP%2BnU4IbU6Fpf6%2FjDP6fHEBjqkATnyTXA%2BnBvikoxGg8J9N6B898DelWhAbNYFvJGse3T%2Few6zDkZG%2Brxl488Ty96rhkVMgzNKMdi%2Bun4n0R11HocFTw85NELm%2FT5cbpyCWbYQzSxUX4KdwLXYFo4MhRPB6bRmFvTuSW1dyPT1BOce%2B%2BJHlogMdHTy4S9cy7R8tBLWsF1SH9agqF6YWA0LY1rBqteRR2Ts%2BBwqtZryKzqKiE5sbHJ%2B&X-Amz-Signature=6618da7e16680e97730077b62f6340040c99e2bf1303e50bb989e06a63b849c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE2LUPTC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkCB88AHBhoQr5y2XIjJjhNjftHfA0hsAwXvk%2Bxi50vQIhAMBLRNKpWzRYY%2BY7tKqoJH4tMpCtb7FhHQKg8Nz619BYKv8DCCwQABoMNjM3NDIzMTgzODA1IgzgSiDGHTwgt6XlOLIq3AO%2BCzUpmNOE29zJYNIZheFmGR5QQrLVIwAJgLX8BUkp79N7X6N7JttVukhJ%2F%2BroNHRGqbQuAeyQusT0zfA%2B78XqZd7cUO4Gz1Qs%2BEe7m6wWTlHkPxzRAX%2BmnhaHQXad3v%2BwPQLo5XT%2FYQgg2Ojf8cLxrXuXtVvdS6QdII7E9H4NYZTBdCqhKnstxW%2B%2Bm4dFcT1kbEjZAHCCBrF93KRVhYC0myhQflLjMTKlz9tEtXZqlATbsblbJgoMmm8l95%2BnfMJic7LG8stvEFVlTnU4cI%2BqVZGQM1c0Soia6g1DWBBKCxA4Co30Ckp5Bgt0omWCPdsOHyLYng7svppjhHUefg1OVql4gpfhbNlAvJ%2FxZ48ki1B%2BVfgRiw7bgxJEajW6bxFm7oyapymGZsbQgCq97nNyQgpk4O%2FX1q9sf%2FP3bdRyQZ2ruePURa%2BZyFdgANXPcpoamFnS8XmZcnWm%2BrWEI3mQUJeTZL%2F%2BbzXH102mxU210PW8LHQ6IETs847BlD1Zz2L59OsYfJEockMLwhahNkrV181PvQLijwTOnErPKhE6i2hYqa0dQPGP0rVi3zgb8SESHQZGzotx4r%2FalOHxV13LtNgjAqhGEt3cqySQvb5F%2FpOP%2BnU4IbU6Fpf6%2FjDP6fHEBjqkATnyTXA%2BnBvikoxGg8J9N6B898DelWhAbNYFvJGse3T%2Few6zDkZG%2Brxl488Ty96rhkVMgzNKMdi%2Bun4n0R11HocFTw85NELm%2FT5cbpyCWbYQzSxUX4KdwLXYFo4MhRPB6bRmFvTuSW1dyPT1BOce%2B%2BJHlogMdHTy4S9cy7R8tBLWsF1SH9agqF6YWA0LY1rBqteRR2Ts%2BBwqtZryKzqKiE5sbHJ%2B&X-Amz-Signature=96551023838e968c2b11dc5efa106c2f650f6d1dcc8d140569ea7a365f3f360b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
