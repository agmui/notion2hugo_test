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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z7S2KC3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCcyKqHgkCFCXS7WjB5GFamhDc6VxUVbu5N8MK%2B%2FeojnwIhAIyAt2LlglcHA4DtEQyYY4x4mKhPNS9GKb0qboa3A60PKv8DCD8QABoMNjM3NDIzMTgzODA1Igwsn79JwyXwYBz4ydUq3AP%2F1LKXQzS7hPcLZCprc4%2BwijUD8koOhsRfO89MVSpnhB610%2FqrOYoLBr%2BJvCgynAwE2Q0uEd%2BDgfExhcBQk398DBAXLszxo8lMSd4Alc%2BIBW7IU8ikxFexe1PCTZpHLQeqb%2BWRDCj87GEdMucyEdiNcsUktrxcyduGioDQ2rpudhtlnE60JtpETYJM0vqnuOF8Ejq0UuQTFX4P5MkMlpmXPciD8AwSDh0ZkZ3%2Bvag484RB2WGviVb698jWuanHXuwROuh5XRrW8moSHWL8ZapwSkQWKOVHsIaR7ygWuml9udC9d90CufkM3YuflGxnOHmIyiGVBqosKh6mg23i35yrPWRhP7Yuzr%2F7C4scmaOYfplu2YRoNh%2FjE5%2BJo%2F1uOpsAamRMlYDommBAzkSPmzRg5GornR3go3JSs6eRohKkob9Aqx5V%2FWi%2F7UnH8r%2B008PCLMLYTkKQFHIZk3riWnD4eee7tzKvNTdTeTLT%2BHwMCIgcn2csmrHjKJawOdYpv9aghwPv6DtqWND%2F8oqOkkrOuE0EfBf9T%2Fjr0M%2FSjp3oMD6JZPG%2Bg9Gnue2T997Lmbc9%2BfBufR2WIWNJZdScgnpemKKhdGuULpEtcm5WvNfJlJE94Lutqfc%2FyyI7rzD3jPfNBjqkAaKkNJyaKyKXlu%2BCEinqODs6kemig7SsJX1H7pmNslwhQ2twbl0MR7omC3vHrh90cs8UzJbPHhDEEWAVU4b6JA97m7GIq6NOjbFSsk87yHCmvTsaNqfJARtidwAGtwWkvefRlwjgDLSvtiT6m%2BM25pRUgOAIiVs5pdalXQwNnU4IXaVMsIkrHO055NZMxF2Di4oe7kgZL7npmhU0kDlFDy%2FljO%2FB&X-Amz-Signature=1f67c93b3f4df13b51cb3b42b3c80233877becc49e207de5c5c4a8fc7002aab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z7S2KC3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCcyKqHgkCFCXS7WjB5GFamhDc6VxUVbu5N8MK%2B%2FeojnwIhAIyAt2LlglcHA4DtEQyYY4x4mKhPNS9GKb0qboa3A60PKv8DCD8QABoMNjM3NDIzMTgzODA1Igwsn79JwyXwYBz4ydUq3AP%2F1LKXQzS7hPcLZCprc4%2BwijUD8koOhsRfO89MVSpnhB610%2FqrOYoLBr%2BJvCgynAwE2Q0uEd%2BDgfExhcBQk398DBAXLszxo8lMSd4Alc%2BIBW7IU8ikxFexe1PCTZpHLQeqb%2BWRDCj87GEdMucyEdiNcsUktrxcyduGioDQ2rpudhtlnE60JtpETYJM0vqnuOF8Ejq0UuQTFX4P5MkMlpmXPciD8AwSDh0ZkZ3%2Bvag484RB2WGviVb698jWuanHXuwROuh5XRrW8moSHWL8ZapwSkQWKOVHsIaR7ygWuml9udC9d90CufkM3YuflGxnOHmIyiGVBqosKh6mg23i35yrPWRhP7Yuzr%2F7C4scmaOYfplu2YRoNh%2FjE5%2BJo%2F1uOpsAamRMlYDommBAzkSPmzRg5GornR3go3JSs6eRohKkob9Aqx5V%2FWi%2F7UnH8r%2B008PCLMLYTkKQFHIZk3riWnD4eee7tzKvNTdTeTLT%2BHwMCIgcn2csmrHjKJawOdYpv9aghwPv6DtqWND%2F8oqOkkrOuE0EfBf9T%2Fjr0M%2FSjp3oMD6JZPG%2Bg9Gnue2T997Lmbc9%2BfBufR2WIWNJZdScgnpemKKhdGuULpEtcm5WvNfJlJE94Lutqfc%2FyyI7rzD3jPfNBjqkAaKkNJyaKyKXlu%2BCEinqODs6kemig7SsJX1H7pmNslwhQ2twbl0MR7omC3vHrh90cs8UzJbPHhDEEWAVU4b6JA97m7GIq6NOjbFSsk87yHCmvTsaNqfJARtidwAGtwWkvefRlwjgDLSvtiT6m%2BM25pRUgOAIiVs5pdalXQwNnU4IXaVMsIkrHO055NZMxF2Di4oe7kgZL7npmhU0kDlFDy%2FljO%2FB&X-Amz-Signature=756e8a06eb654e983feee9903962033b2382077e852f710923319c0f5027d274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z7S2KC3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCcyKqHgkCFCXS7WjB5GFamhDc6VxUVbu5N8MK%2B%2FeojnwIhAIyAt2LlglcHA4DtEQyYY4x4mKhPNS9GKb0qboa3A60PKv8DCD8QABoMNjM3NDIzMTgzODA1Igwsn79JwyXwYBz4ydUq3AP%2F1LKXQzS7hPcLZCprc4%2BwijUD8koOhsRfO89MVSpnhB610%2FqrOYoLBr%2BJvCgynAwE2Q0uEd%2BDgfExhcBQk398DBAXLszxo8lMSd4Alc%2BIBW7IU8ikxFexe1PCTZpHLQeqb%2BWRDCj87GEdMucyEdiNcsUktrxcyduGioDQ2rpudhtlnE60JtpETYJM0vqnuOF8Ejq0UuQTFX4P5MkMlpmXPciD8AwSDh0ZkZ3%2Bvag484RB2WGviVb698jWuanHXuwROuh5XRrW8moSHWL8ZapwSkQWKOVHsIaR7ygWuml9udC9d90CufkM3YuflGxnOHmIyiGVBqosKh6mg23i35yrPWRhP7Yuzr%2F7C4scmaOYfplu2YRoNh%2FjE5%2BJo%2F1uOpsAamRMlYDommBAzkSPmzRg5GornR3go3JSs6eRohKkob9Aqx5V%2FWi%2F7UnH8r%2B008PCLMLYTkKQFHIZk3riWnD4eee7tzKvNTdTeTLT%2BHwMCIgcn2csmrHjKJawOdYpv9aghwPv6DtqWND%2F8oqOkkrOuE0EfBf9T%2Fjr0M%2FSjp3oMD6JZPG%2Bg9Gnue2T997Lmbc9%2BfBufR2WIWNJZdScgnpemKKhdGuULpEtcm5WvNfJlJE94Lutqfc%2FyyI7rzD3jPfNBjqkAaKkNJyaKyKXlu%2BCEinqODs6kemig7SsJX1H7pmNslwhQ2twbl0MR7omC3vHrh90cs8UzJbPHhDEEWAVU4b6JA97m7GIq6NOjbFSsk87yHCmvTsaNqfJARtidwAGtwWkvefRlwjgDLSvtiT6m%2BM25pRUgOAIiVs5pdalXQwNnU4IXaVMsIkrHO055NZMxF2Di4oe7kgZL7npmhU0kDlFDy%2FljO%2FB&X-Amz-Signature=08f27ffb4692ad068b0180579c546988101443d524359bcffb7e3d45a4341acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z7S2KC3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCcyKqHgkCFCXS7WjB5GFamhDc6VxUVbu5N8MK%2B%2FeojnwIhAIyAt2LlglcHA4DtEQyYY4x4mKhPNS9GKb0qboa3A60PKv8DCD8QABoMNjM3NDIzMTgzODA1Igwsn79JwyXwYBz4ydUq3AP%2F1LKXQzS7hPcLZCprc4%2BwijUD8koOhsRfO89MVSpnhB610%2FqrOYoLBr%2BJvCgynAwE2Q0uEd%2BDgfExhcBQk398DBAXLszxo8lMSd4Alc%2BIBW7IU8ikxFexe1PCTZpHLQeqb%2BWRDCj87GEdMucyEdiNcsUktrxcyduGioDQ2rpudhtlnE60JtpETYJM0vqnuOF8Ejq0UuQTFX4P5MkMlpmXPciD8AwSDh0ZkZ3%2Bvag484RB2WGviVb698jWuanHXuwROuh5XRrW8moSHWL8ZapwSkQWKOVHsIaR7ygWuml9udC9d90CufkM3YuflGxnOHmIyiGVBqosKh6mg23i35yrPWRhP7Yuzr%2F7C4scmaOYfplu2YRoNh%2FjE5%2BJo%2F1uOpsAamRMlYDommBAzkSPmzRg5GornR3go3JSs6eRohKkob9Aqx5V%2FWi%2F7UnH8r%2B008PCLMLYTkKQFHIZk3riWnD4eee7tzKvNTdTeTLT%2BHwMCIgcn2csmrHjKJawOdYpv9aghwPv6DtqWND%2F8oqOkkrOuE0EfBf9T%2Fjr0M%2FSjp3oMD6JZPG%2Bg9Gnue2T997Lmbc9%2BfBufR2WIWNJZdScgnpemKKhdGuULpEtcm5WvNfJlJE94Lutqfc%2FyyI7rzD3jPfNBjqkAaKkNJyaKyKXlu%2BCEinqODs6kemig7SsJX1H7pmNslwhQ2twbl0MR7omC3vHrh90cs8UzJbPHhDEEWAVU4b6JA97m7GIq6NOjbFSsk87yHCmvTsaNqfJARtidwAGtwWkvefRlwjgDLSvtiT6m%2BM25pRUgOAIiVs5pdalXQwNnU4IXaVMsIkrHO055NZMxF2Di4oe7kgZL7npmhU0kDlFDy%2FljO%2FB&X-Amz-Signature=f62cee6411880054df01de8c69f0b09afa53ae7187adc94f4dcb0586ac7e50f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU7ASIW7%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIHnD4v13bRiQVfW1VCD0TxNipT%2F%2FA59bieGO4zipnDQoAiEA%2F1QbIr0jqrZGKS%2F5VvwLLb2vLgBmfJUPCuzVjXRtT1kq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDOXcgZfi8NLKHBuejCrcA3TdBA4Y8854fzti4PYa3DBefthp8ISl3tBYwDT8TIP3iqSFWkPVN1khkv5VQceGLNrgRyzrm%2FNVAi%2FAGaLWX42TmerqzabNbZNCiV6nNSdlJHUjC1%2BD4xbCY0zwcHVagKn1ByT%2BxcncNxxP0JqPpgTeORw1zGkZIytNJ45%2F2wucVqusgI0%2F3fspESKbVzoOIHDEUCz9J2vFc4LHYHQKwAkuBc4rx91nLb1t9MAksyO1H4slAYchWuN4HS%2BXjqXTI87kiCV7WRbwyu77y4GZhQjoK8xDuZ8oRtmQ3kqEX9HnUQSJAEtjA2H89rHklCKQ%2FNP0GoTYAa9ODqZfs6vIFhw1StkbVSAbQM%2FeizmlAYNilatpmXx3c0fTVUWoGd7h6kHK1WmbhI9mUS0XNBNZBHjeFDdbs3160ac7ZCbT57ccXzBRTtZ6hxC6XP8l90m66kYRtqlUr%2FdXBMAvpHCYMayvSMsfk5hO5%2FHwPQNACkRmHU0ljEKzbBp%2B3i17G%2FIE2x8EJRmemXuWb8LP5kGwal3DQBJOu7oLUqt8D5SEk2JAPhazKsLRsuP7osxRr7vESMT1qMq447AHnzs5PTh4yLiGcY5XFLPkSTxxcvEcyK3xltW4InAyQzdU1vXRMJXe9s0GOqUBXZaghHu7TtKzrkA4ayRyodb0mVcvMEhHbEa6GHhpKSpHLsqKqiRP8Blca0NEyduGUUBwg5MyuLMKuTdPfteQGRZ3lJ4iuy5k4%2FQgnyMqv1Q8hrLnHCjtqkEK%2BDrzqhkSiJxQ07tAO7Uri%2F5LHrh9QZEIDfKAPEgowwWz3Gd8673WL4gGGPErrQawWMiHxn34j2EUJF4uSwMI0d1NNXRkQLrkFufR&X-Amz-Signature=35d3e29889ad1b2ee7c483c83a06fdd859dc7720e38d460f26ce5310c72a9e84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z7S2KC3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCcyKqHgkCFCXS7WjB5GFamhDc6VxUVbu5N8MK%2B%2FeojnwIhAIyAt2LlglcHA4DtEQyYY4x4mKhPNS9GKb0qboa3A60PKv8DCD8QABoMNjM3NDIzMTgzODA1Igwsn79JwyXwYBz4ydUq3AP%2F1LKXQzS7hPcLZCprc4%2BwijUD8koOhsRfO89MVSpnhB610%2FqrOYoLBr%2BJvCgynAwE2Q0uEd%2BDgfExhcBQk398DBAXLszxo8lMSd4Alc%2BIBW7IU8ikxFexe1PCTZpHLQeqb%2BWRDCj87GEdMucyEdiNcsUktrxcyduGioDQ2rpudhtlnE60JtpETYJM0vqnuOF8Ejq0UuQTFX4P5MkMlpmXPciD8AwSDh0ZkZ3%2Bvag484RB2WGviVb698jWuanHXuwROuh5XRrW8moSHWL8ZapwSkQWKOVHsIaR7ygWuml9udC9d90CufkM3YuflGxnOHmIyiGVBqosKh6mg23i35yrPWRhP7Yuzr%2F7C4scmaOYfplu2YRoNh%2FjE5%2BJo%2F1uOpsAamRMlYDommBAzkSPmzRg5GornR3go3JSs6eRohKkob9Aqx5V%2FWi%2F7UnH8r%2B008PCLMLYTkKQFHIZk3riWnD4eee7tzKvNTdTeTLT%2BHwMCIgcn2csmrHjKJawOdYpv9aghwPv6DtqWND%2F8oqOkkrOuE0EfBf9T%2Fjr0M%2FSjp3oMD6JZPG%2Bg9Gnue2T997Lmbc9%2BfBufR2WIWNJZdScgnpemKKhdGuULpEtcm5WvNfJlJE94Lutqfc%2FyyI7rzD3jPfNBjqkAaKkNJyaKyKXlu%2BCEinqODs6kemig7SsJX1H7pmNslwhQ2twbl0MR7omC3vHrh90cs8UzJbPHhDEEWAVU4b6JA97m7GIq6NOjbFSsk87yHCmvTsaNqfJARtidwAGtwWkvefRlwjgDLSvtiT6m%2BM25pRUgOAIiVs5pdalXQwNnU4IXaVMsIkrHO055NZMxF2Di4oe7kgZL7npmhU0kDlFDy%2FljO%2FB&X-Amz-Signature=9a9b3bad34fc0d1683fe4946f22d079734a238a80b0783955f9ae5f40d0320e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z7S2KC3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCcyKqHgkCFCXS7WjB5GFamhDc6VxUVbu5N8MK%2B%2FeojnwIhAIyAt2LlglcHA4DtEQyYY4x4mKhPNS9GKb0qboa3A60PKv8DCD8QABoMNjM3NDIzMTgzODA1Igwsn79JwyXwYBz4ydUq3AP%2F1LKXQzS7hPcLZCprc4%2BwijUD8koOhsRfO89MVSpnhB610%2FqrOYoLBr%2BJvCgynAwE2Q0uEd%2BDgfExhcBQk398DBAXLszxo8lMSd4Alc%2BIBW7IU8ikxFexe1PCTZpHLQeqb%2BWRDCj87GEdMucyEdiNcsUktrxcyduGioDQ2rpudhtlnE60JtpETYJM0vqnuOF8Ejq0UuQTFX4P5MkMlpmXPciD8AwSDh0ZkZ3%2Bvag484RB2WGviVb698jWuanHXuwROuh5XRrW8moSHWL8ZapwSkQWKOVHsIaR7ygWuml9udC9d90CufkM3YuflGxnOHmIyiGVBqosKh6mg23i35yrPWRhP7Yuzr%2F7C4scmaOYfplu2YRoNh%2FjE5%2BJo%2F1uOpsAamRMlYDommBAzkSPmzRg5GornR3go3JSs6eRohKkob9Aqx5V%2FWi%2F7UnH8r%2B008PCLMLYTkKQFHIZk3riWnD4eee7tzKvNTdTeTLT%2BHwMCIgcn2csmrHjKJawOdYpv9aghwPv6DtqWND%2F8oqOkkrOuE0EfBf9T%2Fjr0M%2FSjp3oMD6JZPG%2Bg9Gnue2T997Lmbc9%2BfBufR2WIWNJZdScgnpemKKhdGuULpEtcm5WvNfJlJE94Lutqfc%2FyyI7rzD3jPfNBjqkAaKkNJyaKyKXlu%2BCEinqODs6kemig7SsJX1H7pmNslwhQ2twbl0MR7omC3vHrh90cs8UzJbPHhDEEWAVU4b6JA97m7GIq6NOjbFSsk87yHCmvTsaNqfJARtidwAGtwWkvefRlwjgDLSvtiT6m%2BM25pRUgOAIiVs5pdalXQwNnU4IXaVMsIkrHO055NZMxF2Di4oe7kgZL7npmhU0kDlFDy%2FljO%2FB&X-Amz-Signature=bd3c1c7910179043c125392bb6111ac7cdb6dd728f6cb0cf37b21eebd034d5fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z7S2KC3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCcyKqHgkCFCXS7WjB5GFamhDc6VxUVbu5N8MK%2B%2FeojnwIhAIyAt2LlglcHA4DtEQyYY4x4mKhPNS9GKb0qboa3A60PKv8DCD8QABoMNjM3NDIzMTgzODA1Igwsn79JwyXwYBz4ydUq3AP%2F1LKXQzS7hPcLZCprc4%2BwijUD8koOhsRfO89MVSpnhB610%2FqrOYoLBr%2BJvCgynAwE2Q0uEd%2BDgfExhcBQk398DBAXLszxo8lMSd4Alc%2BIBW7IU8ikxFexe1PCTZpHLQeqb%2BWRDCj87GEdMucyEdiNcsUktrxcyduGioDQ2rpudhtlnE60JtpETYJM0vqnuOF8Ejq0UuQTFX4P5MkMlpmXPciD8AwSDh0ZkZ3%2Bvag484RB2WGviVb698jWuanHXuwROuh5XRrW8moSHWL8ZapwSkQWKOVHsIaR7ygWuml9udC9d90CufkM3YuflGxnOHmIyiGVBqosKh6mg23i35yrPWRhP7Yuzr%2F7C4scmaOYfplu2YRoNh%2FjE5%2BJo%2F1uOpsAamRMlYDommBAzkSPmzRg5GornR3go3JSs6eRohKkob9Aqx5V%2FWi%2F7UnH8r%2B008PCLMLYTkKQFHIZk3riWnD4eee7tzKvNTdTeTLT%2BHwMCIgcn2csmrHjKJawOdYpv9aghwPv6DtqWND%2F8oqOkkrOuE0EfBf9T%2Fjr0M%2FSjp3oMD6JZPG%2Bg9Gnue2T997Lmbc9%2BfBufR2WIWNJZdScgnpemKKhdGuULpEtcm5WvNfJlJE94Lutqfc%2FyyI7rzD3jPfNBjqkAaKkNJyaKyKXlu%2BCEinqODs6kemig7SsJX1H7pmNslwhQ2twbl0MR7omC3vHrh90cs8UzJbPHhDEEWAVU4b6JA97m7GIq6NOjbFSsk87yHCmvTsaNqfJARtidwAGtwWkvefRlwjgDLSvtiT6m%2BM25pRUgOAIiVs5pdalXQwNnU4IXaVMsIkrHO055NZMxF2Di4oe7kgZL7npmhU0kDlFDy%2FljO%2FB&X-Amz-Signature=0c42e20910629eed422342b7023ce852e55c49f4b4dc0950a470effddf575bda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z7S2KC3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCcyKqHgkCFCXS7WjB5GFamhDc6VxUVbu5N8MK%2B%2FeojnwIhAIyAt2LlglcHA4DtEQyYY4x4mKhPNS9GKb0qboa3A60PKv8DCD8QABoMNjM3NDIzMTgzODA1Igwsn79JwyXwYBz4ydUq3AP%2F1LKXQzS7hPcLZCprc4%2BwijUD8koOhsRfO89MVSpnhB610%2FqrOYoLBr%2BJvCgynAwE2Q0uEd%2BDgfExhcBQk398DBAXLszxo8lMSd4Alc%2BIBW7IU8ikxFexe1PCTZpHLQeqb%2BWRDCj87GEdMucyEdiNcsUktrxcyduGioDQ2rpudhtlnE60JtpETYJM0vqnuOF8Ejq0UuQTFX4P5MkMlpmXPciD8AwSDh0ZkZ3%2Bvag484RB2WGviVb698jWuanHXuwROuh5XRrW8moSHWL8ZapwSkQWKOVHsIaR7ygWuml9udC9d90CufkM3YuflGxnOHmIyiGVBqosKh6mg23i35yrPWRhP7Yuzr%2F7C4scmaOYfplu2YRoNh%2FjE5%2BJo%2F1uOpsAamRMlYDommBAzkSPmzRg5GornR3go3JSs6eRohKkob9Aqx5V%2FWi%2F7UnH8r%2B008PCLMLYTkKQFHIZk3riWnD4eee7tzKvNTdTeTLT%2BHwMCIgcn2csmrHjKJawOdYpv9aghwPv6DtqWND%2F8oqOkkrOuE0EfBf9T%2Fjr0M%2FSjp3oMD6JZPG%2Bg9Gnue2T997Lmbc9%2BfBufR2WIWNJZdScgnpemKKhdGuULpEtcm5WvNfJlJE94Lutqfc%2FyyI7rzD3jPfNBjqkAaKkNJyaKyKXlu%2BCEinqODs6kemig7SsJX1H7pmNslwhQ2twbl0MR7omC3vHrh90cs8UzJbPHhDEEWAVU4b6JA97m7GIq6NOjbFSsk87yHCmvTsaNqfJARtidwAGtwWkvefRlwjgDLSvtiT6m%2BM25pRUgOAIiVs5pdalXQwNnU4IXaVMsIkrHO055NZMxF2Di4oe7kgZL7npmhU0kDlFDy%2FljO%2FB&X-Amz-Signature=05aa3742b2e87689e0dc6799b4492bc0eb809686e62c8a7561a646b74fc25d9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z7S2KC3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCcyKqHgkCFCXS7WjB5GFamhDc6VxUVbu5N8MK%2B%2FeojnwIhAIyAt2LlglcHA4DtEQyYY4x4mKhPNS9GKb0qboa3A60PKv8DCD8QABoMNjM3NDIzMTgzODA1Igwsn79JwyXwYBz4ydUq3AP%2F1LKXQzS7hPcLZCprc4%2BwijUD8koOhsRfO89MVSpnhB610%2FqrOYoLBr%2BJvCgynAwE2Q0uEd%2BDgfExhcBQk398DBAXLszxo8lMSd4Alc%2BIBW7IU8ikxFexe1PCTZpHLQeqb%2BWRDCj87GEdMucyEdiNcsUktrxcyduGioDQ2rpudhtlnE60JtpETYJM0vqnuOF8Ejq0UuQTFX4P5MkMlpmXPciD8AwSDh0ZkZ3%2Bvag484RB2WGviVb698jWuanHXuwROuh5XRrW8moSHWL8ZapwSkQWKOVHsIaR7ygWuml9udC9d90CufkM3YuflGxnOHmIyiGVBqosKh6mg23i35yrPWRhP7Yuzr%2F7C4scmaOYfplu2YRoNh%2FjE5%2BJo%2F1uOpsAamRMlYDommBAzkSPmzRg5GornR3go3JSs6eRohKkob9Aqx5V%2FWi%2F7UnH8r%2B008PCLMLYTkKQFHIZk3riWnD4eee7tzKvNTdTeTLT%2BHwMCIgcn2csmrHjKJawOdYpv9aghwPv6DtqWND%2F8oqOkkrOuE0EfBf9T%2Fjr0M%2FSjp3oMD6JZPG%2Bg9Gnue2T997Lmbc9%2BfBufR2WIWNJZdScgnpemKKhdGuULpEtcm5WvNfJlJE94Lutqfc%2FyyI7rzD3jPfNBjqkAaKkNJyaKyKXlu%2BCEinqODs6kemig7SsJX1H7pmNslwhQ2twbl0MR7omC3vHrh90cs8UzJbPHhDEEWAVU4b6JA97m7GIq6NOjbFSsk87yHCmvTsaNqfJARtidwAGtwWkvefRlwjgDLSvtiT6m%2BM25pRUgOAIiVs5pdalXQwNnU4IXaVMsIkrHO055NZMxF2Di4oe7kgZL7npmhU0kDlFDy%2FljO%2FB&X-Amz-Signature=462bf2a93e0dbc9005694756f1b179bbf141f7385591a0b59ea513eb4211c0c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z7S2KC3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCcyKqHgkCFCXS7WjB5GFamhDc6VxUVbu5N8MK%2B%2FeojnwIhAIyAt2LlglcHA4DtEQyYY4x4mKhPNS9GKb0qboa3A60PKv8DCD8QABoMNjM3NDIzMTgzODA1Igwsn79JwyXwYBz4ydUq3AP%2F1LKXQzS7hPcLZCprc4%2BwijUD8koOhsRfO89MVSpnhB610%2FqrOYoLBr%2BJvCgynAwE2Q0uEd%2BDgfExhcBQk398DBAXLszxo8lMSd4Alc%2BIBW7IU8ikxFexe1PCTZpHLQeqb%2BWRDCj87GEdMucyEdiNcsUktrxcyduGioDQ2rpudhtlnE60JtpETYJM0vqnuOF8Ejq0UuQTFX4P5MkMlpmXPciD8AwSDh0ZkZ3%2Bvag484RB2WGviVb698jWuanHXuwROuh5XRrW8moSHWL8ZapwSkQWKOVHsIaR7ygWuml9udC9d90CufkM3YuflGxnOHmIyiGVBqosKh6mg23i35yrPWRhP7Yuzr%2F7C4scmaOYfplu2YRoNh%2FjE5%2BJo%2F1uOpsAamRMlYDommBAzkSPmzRg5GornR3go3JSs6eRohKkob9Aqx5V%2FWi%2F7UnH8r%2B008PCLMLYTkKQFHIZk3riWnD4eee7tzKvNTdTeTLT%2BHwMCIgcn2csmrHjKJawOdYpv9aghwPv6DtqWND%2F8oqOkkrOuE0EfBf9T%2Fjr0M%2FSjp3oMD6JZPG%2Bg9Gnue2T997Lmbc9%2BfBufR2WIWNJZdScgnpemKKhdGuULpEtcm5WvNfJlJE94Lutqfc%2FyyI7rzD3jPfNBjqkAaKkNJyaKyKXlu%2BCEinqODs6kemig7SsJX1H7pmNslwhQ2twbl0MR7omC3vHrh90cs8UzJbPHhDEEWAVU4b6JA97m7GIq6NOjbFSsk87yHCmvTsaNqfJARtidwAGtwWkvefRlwjgDLSvtiT6m%2BM25pRUgOAIiVs5pdalXQwNnU4IXaVMsIkrHO055NZMxF2Di4oe7kgZL7npmhU0kDlFDy%2FljO%2FB&X-Amz-Signature=890d59c901e97ec2e605f72cc464ea1eb7e07e81f026a6507d1e8d9c8b11c51d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


