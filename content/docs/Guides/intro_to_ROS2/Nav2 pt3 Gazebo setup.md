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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJGLUMVL%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIC8iIWds%2FThR82QU3LO1zSyhYBi%2Bpud6AuwIZjPgRMOSAiEArYkvKdOC9NBFhNhm6cjE5kR7zAGyEu%2B2%2BrGsomkpVV4qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcdzKEAEvY0N4EGMSrcA5Ejw6IuRh%2BQKMF03qKjx6RmFC35LdohO%2BV2%2FROpXVgC2klkx6L6OZSi1Hvay4uQ6IgW%2FyhpobvhlpJ0K6Hb6eQeyCKk9avO0K1S7pc1Qc9B8lV9dTjmkb6%2F8OY5Q%2Bs1YDdI%2F1kk36QqZnk8TPXdvUtmi%2FM1A5qkJaQKZuWNNdoWmH9CItmZ5mPzL3sqOIJ9bsiW9wugWTtiGATzF1NHSJCB8jHvQ%2B9IbGkS%2FQr6esKr%2F83W%2BKWmhUjB3DjnURc55fuyV54BuVJen3rrEmDOOgoIek6477cAfret69kJ57WI2yFjbCWRVikL5T31Bn6VEaKu6X%2BG5UGhkiT8pgmHTCSFNfVxSyloi9Pvc7bNwZl5H%2B2ucyKw%2BMJywBQmvHHqwoioxpf89Bz1iDOIGW7cLHbIu4%2F5qp%2FoAAG3rn8cX26UHOdaJO7ehZ3qvmmNcymmzhtKPqgw55fUouayXwlzURHS6Sw03WUvDlfgkL8ugfpmJ6K3VxdXPeFzs8ROkVU7Vd2qptjrlabMsdmF4uX7Cx0uMmekt7XkWVBSRjZdGlowFpCRpuNbASSvsUc1fTITK51jYkPKrbkbVTKsO%2Bfd0pQCgTbn5Sbkq3ISFWz8m%2BIWCJDKdGmK7iQoIS32MMP6m8cGOqUBdJSN%2FfrFw7AZOyYdtLw3oIODa9ye5%2B6qmTTYLxiDpubIwphz4PXUaYKsKrd36367OID4NtvzwntWPqPVVaw9ICsz2TxpYBR4z54ka7EiCLG%2BI018vQWUTchF30Si1FfR3kALmL%2B4kkwy%2BurRLfAyezE64pL7gFCi8c7lLcIG%2FEQmwEr7elEYaPi8DCj2WDd%2B2QhDOYqRYNWklA%2FGRHUdAirDQxCp&X-Amz-Signature=d5918af2f79985d3dc0917bfd98e71b92176a1df7b9dc1ec89455c534523cedf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJGLUMVL%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIC8iIWds%2FThR82QU3LO1zSyhYBi%2Bpud6AuwIZjPgRMOSAiEArYkvKdOC9NBFhNhm6cjE5kR7zAGyEu%2B2%2BrGsomkpVV4qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcdzKEAEvY0N4EGMSrcA5Ejw6IuRh%2BQKMF03qKjx6RmFC35LdohO%2BV2%2FROpXVgC2klkx6L6OZSi1Hvay4uQ6IgW%2FyhpobvhlpJ0K6Hb6eQeyCKk9avO0K1S7pc1Qc9B8lV9dTjmkb6%2F8OY5Q%2Bs1YDdI%2F1kk36QqZnk8TPXdvUtmi%2FM1A5qkJaQKZuWNNdoWmH9CItmZ5mPzL3sqOIJ9bsiW9wugWTtiGATzF1NHSJCB8jHvQ%2B9IbGkS%2FQr6esKr%2F83W%2BKWmhUjB3DjnURc55fuyV54BuVJen3rrEmDOOgoIek6477cAfret69kJ57WI2yFjbCWRVikL5T31Bn6VEaKu6X%2BG5UGhkiT8pgmHTCSFNfVxSyloi9Pvc7bNwZl5H%2B2ucyKw%2BMJywBQmvHHqwoioxpf89Bz1iDOIGW7cLHbIu4%2F5qp%2FoAAG3rn8cX26UHOdaJO7ehZ3qvmmNcymmzhtKPqgw55fUouayXwlzURHS6Sw03WUvDlfgkL8ugfpmJ6K3VxdXPeFzs8ROkVU7Vd2qptjrlabMsdmF4uX7Cx0uMmekt7XkWVBSRjZdGlowFpCRpuNbASSvsUc1fTITK51jYkPKrbkbVTKsO%2Bfd0pQCgTbn5Sbkq3ISFWz8m%2BIWCJDKdGmK7iQoIS32MMP6m8cGOqUBdJSN%2FfrFw7AZOyYdtLw3oIODa9ye5%2B6qmTTYLxiDpubIwphz4PXUaYKsKrd36367OID4NtvzwntWPqPVVaw9ICsz2TxpYBR4z54ka7EiCLG%2BI018vQWUTchF30Si1FfR3kALmL%2B4kkwy%2BurRLfAyezE64pL7gFCi8c7lLcIG%2FEQmwEr7elEYaPi8DCj2WDd%2B2QhDOYqRYNWklA%2FGRHUdAirDQxCp&X-Amz-Signature=11bda280b8dca5cd6fcf353c0691564858d742446a3813808c36848dfc7838fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJGLUMVL%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIC8iIWds%2FThR82QU3LO1zSyhYBi%2Bpud6AuwIZjPgRMOSAiEArYkvKdOC9NBFhNhm6cjE5kR7zAGyEu%2B2%2BrGsomkpVV4qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcdzKEAEvY0N4EGMSrcA5Ejw6IuRh%2BQKMF03qKjx6RmFC35LdohO%2BV2%2FROpXVgC2klkx6L6OZSi1Hvay4uQ6IgW%2FyhpobvhlpJ0K6Hb6eQeyCKk9avO0K1S7pc1Qc9B8lV9dTjmkb6%2F8OY5Q%2Bs1YDdI%2F1kk36QqZnk8TPXdvUtmi%2FM1A5qkJaQKZuWNNdoWmH9CItmZ5mPzL3sqOIJ9bsiW9wugWTtiGATzF1NHSJCB8jHvQ%2B9IbGkS%2FQr6esKr%2F83W%2BKWmhUjB3DjnURc55fuyV54BuVJen3rrEmDOOgoIek6477cAfret69kJ57WI2yFjbCWRVikL5T31Bn6VEaKu6X%2BG5UGhkiT8pgmHTCSFNfVxSyloi9Pvc7bNwZl5H%2B2ucyKw%2BMJywBQmvHHqwoioxpf89Bz1iDOIGW7cLHbIu4%2F5qp%2FoAAG3rn8cX26UHOdaJO7ehZ3qvmmNcymmzhtKPqgw55fUouayXwlzURHS6Sw03WUvDlfgkL8ugfpmJ6K3VxdXPeFzs8ROkVU7Vd2qptjrlabMsdmF4uX7Cx0uMmekt7XkWVBSRjZdGlowFpCRpuNbASSvsUc1fTITK51jYkPKrbkbVTKsO%2Bfd0pQCgTbn5Sbkq3ISFWz8m%2BIWCJDKdGmK7iQoIS32MMP6m8cGOqUBdJSN%2FfrFw7AZOyYdtLw3oIODa9ye5%2B6qmTTYLxiDpubIwphz4PXUaYKsKrd36367OID4NtvzwntWPqPVVaw9ICsz2TxpYBR4z54ka7EiCLG%2BI018vQWUTchF30Si1FfR3kALmL%2B4kkwy%2BurRLfAyezE64pL7gFCi8c7lLcIG%2FEQmwEr7elEYaPi8DCj2WDd%2B2QhDOYqRYNWklA%2FGRHUdAirDQxCp&X-Amz-Signature=6c012c706aa912e1fefe78eeff27bfba824a079f38b70a0fc16ddbee85da221e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJGLUMVL%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIC8iIWds%2FThR82QU3LO1zSyhYBi%2Bpud6AuwIZjPgRMOSAiEArYkvKdOC9NBFhNhm6cjE5kR7zAGyEu%2B2%2BrGsomkpVV4qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcdzKEAEvY0N4EGMSrcA5Ejw6IuRh%2BQKMF03qKjx6RmFC35LdohO%2BV2%2FROpXVgC2klkx6L6OZSi1Hvay4uQ6IgW%2FyhpobvhlpJ0K6Hb6eQeyCKk9avO0K1S7pc1Qc9B8lV9dTjmkb6%2F8OY5Q%2Bs1YDdI%2F1kk36QqZnk8TPXdvUtmi%2FM1A5qkJaQKZuWNNdoWmH9CItmZ5mPzL3sqOIJ9bsiW9wugWTtiGATzF1NHSJCB8jHvQ%2B9IbGkS%2FQr6esKr%2F83W%2BKWmhUjB3DjnURc55fuyV54BuVJen3rrEmDOOgoIek6477cAfret69kJ57WI2yFjbCWRVikL5T31Bn6VEaKu6X%2BG5UGhkiT8pgmHTCSFNfVxSyloi9Pvc7bNwZl5H%2B2ucyKw%2BMJywBQmvHHqwoioxpf89Bz1iDOIGW7cLHbIu4%2F5qp%2FoAAG3rn8cX26UHOdaJO7ehZ3qvmmNcymmzhtKPqgw55fUouayXwlzURHS6Sw03WUvDlfgkL8ugfpmJ6K3VxdXPeFzs8ROkVU7Vd2qptjrlabMsdmF4uX7Cx0uMmekt7XkWVBSRjZdGlowFpCRpuNbASSvsUc1fTITK51jYkPKrbkbVTKsO%2Bfd0pQCgTbn5Sbkq3ISFWz8m%2BIWCJDKdGmK7iQoIS32MMP6m8cGOqUBdJSN%2FfrFw7AZOyYdtLw3oIODa9ye5%2B6qmTTYLxiDpubIwphz4PXUaYKsKrd36367OID4NtvzwntWPqPVVaw9ICsz2TxpYBR4z54ka7EiCLG%2BI018vQWUTchF30Si1FfR3kALmL%2B4kkwy%2BurRLfAyezE64pL7gFCi8c7lLcIG%2FEQmwEr7elEYaPi8DCj2WDd%2B2QhDOYqRYNWklA%2FGRHUdAirDQxCp&X-Amz-Signature=24d2ef4a22462c576b50eb5faaafa047e89f9f10c6538f7980b9e8fccbd0e6ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLZOPBYF%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCdknsYwwI4Cgo6zrMPAd7HDe7f9Fffai50nyJHxkn%2BJgIhAMrE1irkx95lfh%2BvQ3owDwU8ASkGXB72pabGEML5C1VgKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSwJ1fEoRdJABpx2wq3AMc3tvkYPeTxaEt6YbSVDHiFzYLOVvwsyj0BSxqCGRih6Z2O%2BRC%2BJE9taZY3kw%2F%2Fg4k%2BmGsiCMkq2Zidz3xrkKKfn0sHZctkEPRb9oEnOsdmBvoR%2FnyTUOLsF%2FfBtGhf%2Bv%2BBs6S4XYKDSvtUeuuSU33mUfwiCH4Dw8Dc6L0wFahfRwrJDpjwHwd6QwYk6NOrm40L7zdXoEGdYq22YN03%2FxkyVz6LwnzH3fOS%2FrqZsk%2F852EuJqY%2Bv%2BvO0o%2BGuBRFGKzPjEPRy962GUhpPp1kw4taeOeECh5F0lezZMFe2XwmFj%2Buus4vjJC4le2uUy%2FxWBSCve4dei%2BzqiygvntLs6PfDsW5JsGmkC4G667MZGAgzzFnbPhScnbYOnrKY4IhuJfeeAkadBdwBs0uPbX8AK4Gly94Pqv87B9oQBOObtaLmmV4SOL4Rkxvf5avLwWBSk%2BhAOKZeqLMOHX5w9Y70w%2BPXlMGHSbI0QZvHnH1dmcgP8XDcHxs3%2FsqNEsZ01bEtzJpAkYBbTRL05pnx4I0P8Gb%2FMcdfXhep4VviK61dkzlqZyIeS6NCXpgZcuRlc%2BtfV1r6UdiX%2F9O8oVqrvCB7bckCKvCPQCHN742XVyanM85PRJBCZuOIlX5BlqLTCM%2BpvHBjqkAWLvU2zE7UUdSPtYOAM75oNXC2nbHkOhh6SExO2KzF%2FVcVmsTgIAQi10hrg7gD0O%2FUYo%2FOBeFB8wR5BTq1WDawCMHXL%2FC6j79Ubeu2kKpzYyf%2FEN5hIg8lcg7odaCGRBJeRCMStSqDZyjj6CWal3meuz%2BaSmS9Rul9l7LjPgYVLGbuTpHuZEidmS7aWNqEtjPEDMEmoCTY0xj18DzeMl7V1PYnNM&X-Amz-Signature=43221c2260676f25ed47f2cc3b5c92be9734e3078f32e64879c8809ab5e414ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJGLUMVL%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIC8iIWds%2FThR82QU3LO1zSyhYBi%2Bpud6AuwIZjPgRMOSAiEArYkvKdOC9NBFhNhm6cjE5kR7zAGyEu%2B2%2BrGsomkpVV4qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcdzKEAEvY0N4EGMSrcA5Ejw6IuRh%2BQKMF03qKjx6RmFC35LdohO%2BV2%2FROpXVgC2klkx6L6OZSi1Hvay4uQ6IgW%2FyhpobvhlpJ0K6Hb6eQeyCKk9avO0K1S7pc1Qc9B8lV9dTjmkb6%2F8OY5Q%2Bs1YDdI%2F1kk36QqZnk8TPXdvUtmi%2FM1A5qkJaQKZuWNNdoWmH9CItmZ5mPzL3sqOIJ9bsiW9wugWTtiGATzF1NHSJCB8jHvQ%2B9IbGkS%2FQr6esKr%2F83W%2BKWmhUjB3DjnURc55fuyV54BuVJen3rrEmDOOgoIek6477cAfret69kJ57WI2yFjbCWRVikL5T31Bn6VEaKu6X%2BG5UGhkiT8pgmHTCSFNfVxSyloi9Pvc7bNwZl5H%2B2ucyKw%2BMJywBQmvHHqwoioxpf89Bz1iDOIGW7cLHbIu4%2F5qp%2FoAAG3rn8cX26UHOdaJO7ehZ3qvmmNcymmzhtKPqgw55fUouayXwlzURHS6Sw03WUvDlfgkL8ugfpmJ6K3VxdXPeFzs8ROkVU7Vd2qptjrlabMsdmF4uX7Cx0uMmekt7XkWVBSRjZdGlowFpCRpuNbASSvsUc1fTITK51jYkPKrbkbVTKsO%2Bfd0pQCgTbn5Sbkq3ISFWz8m%2BIWCJDKdGmK7iQoIS32MMP6m8cGOqUBdJSN%2FfrFw7AZOyYdtLw3oIODa9ye5%2B6qmTTYLxiDpubIwphz4PXUaYKsKrd36367OID4NtvzwntWPqPVVaw9ICsz2TxpYBR4z54ka7EiCLG%2BI018vQWUTchF30Si1FfR3kALmL%2B4kkwy%2BurRLfAyezE64pL7gFCi8c7lLcIG%2FEQmwEr7elEYaPi8DCj2WDd%2B2QhDOYqRYNWklA%2FGRHUdAirDQxCp&X-Amz-Signature=b0d862babe0f0ca5fd54052f7adbe67f56db9ccf6a14821f92f2a25eccfaebd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJGLUMVL%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIC8iIWds%2FThR82QU3LO1zSyhYBi%2Bpud6AuwIZjPgRMOSAiEArYkvKdOC9NBFhNhm6cjE5kR7zAGyEu%2B2%2BrGsomkpVV4qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcdzKEAEvY0N4EGMSrcA5Ejw6IuRh%2BQKMF03qKjx6RmFC35LdohO%2BV2%2FROpXVgC2klkx6L6OZSi1Hvay4uQ6IgW%2FyhpobvhlpJ0K6Hb6eQeyCKk9avO0K1S7pc1Qc9B8lV9dTjmkb6%2F8OY5Q%2Bs1YDdI%2F1kk36QqZnk8TPXdvUtmi%2FM1A5qkJaQKZuWNNdoWmH9CItmZ5mPzL3sqOIJ9bsiW9wugWTtiGATzF1NHSJCB8jHvQ%2B9IbGkS%2FQr6esKr%2F83W%2BKWmhUjB3DjnURc55fuyV54BuVJen3rrEmDOOgoIek6477cAfret69kJ57WI2yFjbCWRVikL5T31Bn6VEaKu6X%2BG5UGhkiT8pgmHTCSFNfVxSyloi9Pvc7bNwZl5H%2B2ucyKw%2BMJywBQmvHHqwoioxpf89Bz1iDOIGW7cLHbIu4%2F5qp%2FoAAG3rn8cX26UHOdaJO7ehZ3qvmmNcymmzhtKPqgw55fUouayXwlzURHS6Sw03WUvDlfgkL8ugfpmJ6K3VxdXPeFzs8ROkVU7Vd2qptjrlabMsdmF4uX7Cx0uMmekt7XkWVBSRjZdGlowFpCRpuNbASSvsUc1fTITK51jYkPKrbkbVTKsO%2Bfd0pQCgTbn5Sbkq3ISFWz8m%2BIWCJDKdGmK7iQoIS32MMP6m8cGOqUBdJSN%2FfrFw7AZOyYdtLw3oIODa9ye5%2B6qmTTYLxiDpubIwphz4PXUaYKsKrd36367OID4NtvzwntWPqPVVaw9ICsz2TxpYBR4z54ka7EiCLG%2BI018vQWUTchF30Si1FfR3kALmL%2B4kkwy%2BurRLfAyezE64pL7gFCi8c7lLcIG%2FEQmwEr7elEYaPi8DCj2WDd%2B2QhDOYqRYNWklA%2FGRHUdAirDQxCp&X-Amz-Signature=8238d559fd733d9d4d92fb2e5ca05a913958e6407d579a63db71a39c2cfd9191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJGLUMVL%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIC8iIWds%2FThR82QU3LO1zSyhYBi%2Bpud6AuwIZjPgRMOSAiEArYkvKdOC9NBFhNhm6cjE5kR7zAGyEu%2B2%2BrGsomkpVV4qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcdzKEAEvY0N4EGMSrcA5Ejw6IuRh%2BQKMF03qKjx6RmFC35LdohO%2BV2%2FROpXVgC2klkx6L6OZSi1Hvay4uQ6IgW%2FyhpobvhlpJ0K6Hb6eQeyCKk9avO0K1S7pc1Qc9B8lV9dTjmkb6%2F8OY5Q%2Bs1YDdI%2F1kk36QqZnk8TPXdvUtmi%2FM1A5qkJaQKZuWNNdoWmH9CItmZ5mPzL3sqOIJ9bsiW9wugWTtiGATzF1NHSJCB8jHvQ%2B9IbGkS%2FQr6esKr%2F83W%2BKWmhUjB3DjnURc55fuyV54BuVJen3rrEmDOOgoIek6477cAfret69kJ57WI2yFjbCWRVikL5T31Bn6VEaKu6X%2BG5UGhkiT8pgmHTCSFNfVxSyloi9Pvc7bNwZl5H%2B2ucyKw%2BMJywBQmvHHqwoioxpf89Bz1iDOIGW7cLHbIu4%2F5qp%2FoAAG3rn8cX26UHOdaJO7ehZ3qvmmNcymmzhtKPqgw55fUouayXwlzURHS6Sw03WUvDlfgkL8ugfpmJ6K3VxdXPeFzs8ROkVU7Vd2qptjrlabMsdmF4uX7Cx0uMmekt7XkWVBSRjZdGlowFpCRpuNbASSvsUc1fTITK51jYkPKrbkbVTKsO%2Bfd0pQCgTbn5Sbkq3ISFWz8m%2BIWCJDKdGmK7iQoIS32MMP6m8cGOqUBdJSN%2FfrFw7AZOyYdtLw3oIODa9ye5%2B6qmTTYLxiDpubIwphz4PXUaYKsKrd36367OID4NtvzwntWPqPVVaw9ICsz2TxpYBR4z54ka7EiCLG%2BI018vQWUTchF30Si1FfR3kALmL%2B4kkwy%2BurRLfAyezE64pL7gFCi8c7lLcIG%2FEQmwEr7elEYaPi8DCj2WDd%2B2QhDOYqRYNWklA%2FGRHUdAirDQxCp&X-Amz-Signature=dd0de743aa703ff48fffd98a6cd50199264f2f5779f2fbf4d25dc0f1c6179a8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJGLUMVL%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIC8iIWds%2FThR82QU3LO1zSyhYBi%2Bpud6AuwIZjPgRMOSAiEArYkvKdOC9NBFhNhm6cjE5kR7zAGyEu%2B2%2BrGsomkpVV4qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcdzKEAEvY0N4EGMSrcA5Ejw6IuRh%2BQKMF03qKjx6RmFC35LdohO%2BV2%2FROpXVgC2klkx6L6OZSi1Hvay4uQ6IgW%2FyhpobvhlpJ0K6Hb6eQeyCKk9avO0K1S7pc1Qc9B8lV9dTjmkb6%2F8OY5Q%2Bs1YDdI%2F1kk36QqZnk8TPXdvUtmi%2FM1A5qkJaQKZuWNNdoWmH9CItmZ5mPzL3sqOIJ9bsiW9wugWTtiGATzF1NHSJCB8jHvQ%2B9IbGkS%2FQr6esKr%2F83W%2BKWmhUjB3DjnURc55fuyV54BuVJen3rrEmDOOgoIek6477cAfret69kJ57WI2yFjbCWRVikL5T31Bn6VEaKu6X%2BG5UGhkiT8pgmHTCSFNfVxSyloi9Pvc7bNwZl5H%2B2ucyKw%2BMJywBQmvHHqwoioxpf89Bz1iDOIGW7cLHbIu4%2F5qp%2FoAAG3rn8cX26UHOdaJO7ehZ3qvmmNcymmzhtKPqgw55fUouayXwlzURHS6Sw03WUvDlfgkL8ugfpmJ6K3VxdXPeFzs8ROkVU7Vd2qptjrlabMsdmF4uX7Cx0uMmekt7XkWVBSRjZdGlowFpCRpuNbASSvsUc1fTITK51jYkPKrbkbVTKsO%2Bfd0pQCgTbn5Sbkq3ISFWz8m%2BIWCJDKdGmK7iQoIS32MMP6m8cGOqUBdJSN%2FfrFw7AZOyYdtLw3oIODa9ye5%2B6qmTTYLxiDpubIwphz4PXUaYKsKrd36367OID4NtvzwntWPqPVVaw9ICsz2TxpYBR4z54ka7EiCLG%2BI018vQWUTchF30Si1FfR3kALmL%2B4kkwy%2BurRLfAyezE64pL7gFCi8c7lLcIG%2FEQmwEr7elEYaPi8DCj2WDd%2B2QhDOYqRYNWklA%2FGRHUdAirDQxCp&X-Amz-Signature=c745ea3825da85c2a9c2e74b0d2afcc9eb26082bf762a322f2172dd6d200fda8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJGLUMVL%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIC8iIWds%2FThR82QU3LO1zSyhYBi%2Bpud6AuwIZjPgRMOSAiEArYkvKdOC9NBFhNhm6cjE5kR7zAGyEu%2B2%2BrGsomkpVV4qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcdzKEAEvY0N4EGMSrcA5Ejw6IuRh%2BQKMF03qKjx6RmFC35LdohO%2BV2%2FROpXVgC2klkx6L6OZSi1Hvay4uQ6IgW%2FyhpobvhlpJ0K6Hb6eQeyCKk9avO0K1S7pc1Qc9B8lV9dTjmkb6%2F8OY5Q%2Bs1YDdI%2F1kk36QqZnk8TPXdvUtmi%2FM1A5qkJaQKZuWNNdoWmH9CItmZ5mPzL3sqOIJ9bsiW9wugWTtiGATzF1NHSJCB8jHvQ%2B9IbGkS%2FQr6esKr%2F83W%2BKWmhUjB3DjnURc55fuyV54BuVJen3rrEmDOOgoIek6477cAfret69kJ57WI2yFjbCWRVikL5T31Bn6VEaKu6X%2BG5UGhkiT8pgmHTCSFNfVxSyloi9Pvc7bNwZl5H%2B2ucyKw%2BMJywBQmvHHqwoioxpf89Bz1iDOIGW7cLHbIu4%2F5qp%2FoAAG3rn8cX26UHOdaJO7ehZ3qvmmNcymmzhtKPqgw55fUouayXwlzURHS6Sw03WUvDlfgkL8ugfpmJ6K3VxdXPeFzs8ROkVU7Vd2qptjrlabMsdmF4uX7Cx0uMmekt7XkWVBSRjZdGlowFpCRpuNbASSvsUc1fTITK51jYkPKrbkbVTKsO%2Bfd0pQCgTbn5Sbkq3ISFWz8m%2BIWCJDKdGmK7iQoIS32MMP6m8cGOqUBdJSN%2FfrFw7AZOyYdtLw3oIODa9ye5%2B6qmTTYLxiDpubIwphz4PXUaYKsKrd36367OID4NtvzwntWPqPVVaw9ICsz2TxpYBR4z54ka7EiCLG%2BI018vQWUTchF30Si1FfR3kALmL%2B4kkwy%2BurRLfAyezE64pL7gFCi8c7lLcIG%2FEQmwEr7elEYaPi8DCj2WDd%2B2QhDOYqRYNWklA%2FGRHUdAirDQxCp&X-Amz-Signature=4a74d764708e2c1ac09fd5ce6cc6511fa58b1b7b27440218b745f57a22a1deb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJGLUMVL%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIC8iIWds%2FThR82QU3LO1zSyhYBi%2Bpud6AuwIZjPgRMOSAiEArYkvKdOC9NBFhNhm6cjE5kR7zAGyEu%2B2%2BrGsomkpVV4qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcdzKEAEvY0N4EGMSrcA5Ejw6IuRh%2BQKMF03qKjx6RmFC35LdohO%2BV2%2FROpXVgC2klkx6L6OZSi1Hvay4uQ6IgW%2FyhpobvhlpJ0K6Hb6eQeyCKk9avO0K1S7pc1Qc9B8lV9dTjmkb6%2F8OY5Q%2Bs1YDdI%2F1kk36QqZnk8TPXdvUtmi%2FM1A5qkJaQKZuWNNdoWmH9CItmZ5mPzL3sqOIJ9bsiW9wugWTtiGATzF1NHSJCB8jHvQ%2B9IbGkS%2FQr6esKr%2F83W%2BKWmhUjB3DjnURc55fuyV54BuVJen3rrEmDOOgoIek6477cAfret69kJ57WI2yFjbCWRVikL5T31Bn6VEaKu6X%2BG5UGhkiT8pgmHTCSFNfVxSyloi9Pvc7bNwZl5H%2B2ucyKw%2BMJywBQmvHHqwoioxpf89Bz1iDOIGW7cLHbIu4%2F5qp%2FoAAG3rn8cX26UHOdaJO7ehZ3qvmmNcymmzhtKPqgw55fUouayXwlzURHS6Sw03WUvDlfgkL8ugfpmJ6K3VxdXPeFzs8ROkVU7Vd2qptjrlabMsdmF4uX7Cx0uMmekt7XkWVBSRjZdGlowFpCRpuNbASSvsUc1fTITK51jYkPKrbkbVTKsO%2Bfd0pQCgTbn5Sbkq3ISFWz8m%2BIWCJDKdGmK7iQoIS32MMP6m8cGOqUBdJSN%2FfrFw7AZOyYdtLw3oIODa9ye5%2B6qmTTYLxiDpubIwphz4PXUaYKsKrd36367OID4NtvzwntWPqPVVaw9ICsz2TxpYBR4z54ka7EiCLG%2BI018vQWUTchF30Si1FfR3kALmL%2B4kkwy%2BurRLfAyezE64pL7gFCi8c7lLcIG%2FEQmwEr7elEYaPi8DCj2WDd%2B2QhDOYqRYNWklA%2FGRHUdAirDQxCp&X-Amz-Signature=bb950e699c050a0ac9452ddd5ddb2c47b3210379af250195f7813c42604d72c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


