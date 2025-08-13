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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULIN4DLN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKEOIW7nmlqnMTojE4gF32UAwESldDgOhVkESPlT4LwAiBOr0eyytgJEsAfyoiKxIiqcIX9ePVAjw6OwV0EL8%2FT0Cr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMSc%2B49b533YlipiwPKtwDv4JVVIamQg0oEQaS7LCqXIoC6yHs947XD1yY8iF%2BSAxh6Q9VYav%2B%2B34ATaygr3ooywR1%2BDo1yfxHE%2FA9hE%2BhT5rwalIsb4mmOzbQsz3V3BaR3g%2FhkPckI5g9RLvRjPFdPVMA2t7W7j07JrEb49TrCuiWRi6AsI%2BFxz9qMGBwehlmUKKBdis2Pa6QYgRdRDRjUEG%2B8NhAMLYbpXK5nKJNLLZfneKFl5O60o0QYxMQ4PBG4VAOcFT1%2BgiCRhbR%2F3WLYHo7Zp9qItXIG%2Fk4tbUQIVcN2veYz9mlAEleVkkQ%2BVwFydELBxCfPsTaC11OkmZ3hkT3CdQ882JSfBH%2F7dqItgBXvO0XznYnwNo19yGw4sGbqwqFvsL7XnV%2F089JpOdb3Tf6TX0QR5QwZWCBPJ1JXzDnpStDikKKhxjAablWvSPL%2B1but%2F3Tzst0f1KMXIXDyAL6XKNqXzoFJDcnasHjzecYLltL5mkIX%2Bqhqrr8aNR9TxeWbdLXPYpTqFEI3NgTDCqlVSwusPoQ1lG1cEQgI6nNJhWxgJcRD0WLjvXPhxJUzgbmMCVDz90Ygkd7xckwo4PBGzsY%2Bw0mh4GeMIxVsFgrOo31j%2Fv0dgL8Fi7EbsJ1SFMFFyVg0kB9SDIw%2BLLyxAY6pgFgphPuzX2pND5YVX3yDAOecsYnO1R%2F%2FGy4QoP%2FSScwiM4hPVBtT%2BG4Nltp4EZ72iGSUKo0I46hA%2Fhg81i%2B2cYHpjJrnGqbZ919otgZOsSBi2pe83KzY9lHKfDElTIeedwhybG32%2BTo9FHKDSqvmoZ01kbHi9kguixr14bpKHSYFo80p4q3FzIVNGuGIS9rmmbdMAeQMzqmaSBM%2FiP3a20zujESu1VI&X-Amz-Signature=351e19c84ce7b625e19686b9b1d5ca158d8a78bd365accc0b7c09c01df7575b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULIN4DLN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKEOIW7nmlqnMTojE4gF32UAwESldDgOhVkESPlT4LwAiBOr0eyytgJEsAfyoiKxIiqcIX9ePVAjw6OwV0EL8%2FT0Cr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMSc%2B49b533YlipiwPKtwDv4JVVIamQg0oEQaS7LCqXIoC6yHs947XD1yY8iF%2BSAxh6Q9VYav%2B%2B34ATaygr3ooywR1%2BDo1yfxHE%2FA9hE%2BhT5rwalIsb4mmOzbQsz3V3BaR3g%2FhkPckI5g9RLvRjPFdPVMA2t7W7j07JrEb49TrCuiWRi6AsI%2BFxz9qMGBwehlmUKKBdis2Pa6QYgRdRDRjUEG%2B8NhAMLYbpXK5nKJNLLZfneKFl5O60o0QYxMQ4PBG4VAOcFT1%2BgiCRhbR%2F3WLYHo7Zp9qItXIG%2Fk4tbUQIVcN2veYz9mlAEleVkkQ%2BVwFydELBxCfPsTaC11OkmZ3hkT3CdQ882JSfBH%2F7dqItgBXvO0XznYnwNo19yGw4sGbqwqFvsL7XnV%2F089JpOdb3Tf6TX0QR5QwZWCBPJ1JXzDnpStDikKKhxjAablWvSPL%2B1but%2F3Tzst0f1KMXIXDyAL6XKNqXzoFJDcnasHjzecYLltL5mkIX%2Bqhqrr8aNR9TxeWbdLXPYpTqFEI3NgTDCqlVSwusPoQ1lG1cEQgI6nNJhWxgJcRD0WLjvXPhxJUzgbmMCVDz90Ygkd7xckwo4PBGzsY%2Bw0mh4GeMIxVsFgrOo31j%2Fv0dgL8Fi7EbsJ1SFMFFyVg0kB9SDIw%2BLLyxAY6pgFgphPuzX2pND5YVX3yDAOecsYnO1R%2F%2FGy4QoP%2FSScwiM4hPVBtT%2BG4Nltp4EZ72iGSUKo0I46hA%2Fhg81i%2B2cYHpjJrnGqbZ919otgZOsSBi2pe83KzY9lHKfDElTIeedwhybG32%2BTo9FHKDSqvmoZ01kbHi9kguixr14bpKHSYFo80p4q3FzIVNGuGIS9rmmbdMAeQMzqmaSBM%2FiP3a20zujESu1VI&X-Amz-Signature=a88f9b20a54847b723c09af454faf2efd121deab6bc4ad422e4cff323e84603f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULIN4DLN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKEOIW7nmlqnMTojE4gF32UAwESldDgOhVkESPlT4LwAiBOr0eyytgJEsAfyoiKxIiqcIX9ePVAjw6OwV0EL8%2FT0Cr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMSc%2B49b533YlipiwPKtwDv4JVVIamQg0oEQaS7LCqXIoC6yHs947XD1yY8iF%2BSAxh6Q9VYav%2B%2B34ATaygr3ooywR1%2BDo1yfxHE%2FA9hE%2BhT5rwalIsb4mmOzbQsz3V3BaR3g%2FhkPckI5g9RLvRjPFdPVMA2t7W7j07JrEb49TrCuiWRi6AsI%2BFxz9qMGBwehlmUKKBdis2Pa6QYgRdRDRjUEG%2B8NhAMLYbpXK5nKJNLLZfneKFl5O60o0QYxMQ4PBG4VAOcFT1%2BgiCRhbR%2F3WLYHo7Zp9qItXIG%2Fk4tbUQIVcN2veYz9mlAEleVkkQ%2BVwFydELBxCfPsTaC11OkmZ3hkT3CdQ882JSfBH%2F7dqItgBXvO0XznYnwNo19yGw4sGbqwqFvsL7XnV%2F089JpOdb3Tf6TX0QR5QwZWCBPJ1JXzDnpStDikKKhxjAablWvSPL%2B1but%2F3Tzst0f1KMXIXDyAL6XKNqXzoFJDcnasHjzecYLltL5mkIX%2Bqhqrr8aNR9TxeWbdLXPYpTqFEI3NgTDCqlVSwusPoQ1lG1cEQgI6nNJhWxgJcRD0WLjvXPhxJUzgbmMCVDz90Ygkd7xckwo4PBGzsY%2Bw0mh4GeMIxVsFgrOo31j%2Fv0dgL8Fi7EbsJ1SFMFFyVg0kB9SDIw%2BLLyxAY6pgFgphPuzX2pND5YVX3yDAOecsYnO1R%2F%2FGy4QoP%2FSScwiM4hPVBtT%2BG4Nltp4EZ72iGSUKo0I46hA%2Fhg81i%2B2cYHpjJrnGqbZ919otgZOsSBi2pe83KzY9lHKfDElTIeedwhybG32%2BTo9FHKDSqvmoZ01kbHi9kguixr14bpKHSYFo80p4q3FzIVNGuGIS9rmmbdMAeQMzqmaSBM%2FiP3a20zujESu1VI&X-Amz-Signature=af9662e7cbd9648a81ad5adcce248be5a3c4afe25824ed87ff2254e32cb6ef06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULIN4DLN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKEOIW7nmlqnMTojE4gF32UAwESldDgOhVkESPlT4LwAiBOr0eyytgJEsAfyoiKxIiqcIX9ePVAjw6OwV0EL8%2FT0Cr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMSc%2B49b533YlipiwPKtwDv4JVVIamQg0oEQaS7LCqXIoC6yHs947XD1yY8iF%2BSAxh6Q9VYav%2B%2B34ATaygr3ooywR1%2BDo1yfxHE%2FA9hE%2BhT5rwalIsb4mmOzbQsz3V3BaR3g%2FhkPckI5g9RLvRjPFdPVMA2t7W7j07JrEb49TrCuiWRi6AsI%2BFxz9qMGBwehlmUKKBdis2Pa6QYgRdRDRjUEG%2B8NhAMLYbpXK5nKJNLLZfneKFl5O60o0QYxMQ4PBG4VAOcFT1%2BgiCRhbR%2F3WLYHo7Zp9qItXIG%2Fk4tbUQIVcN2veYz9mlAEleVkkQ%2BVwFydELBxCfPsTaC11OkmZ3hkT3CdQ882JSfBH%2F7dqItgBXvO0XznYnwNo19yGw4sGbqwqFvsL7XnV%2F089JpOdb3Tf6TX0QR5QwZWCBPJ1JXzDnpStDikKKhxjAablWvSPL%2B1but%2F3Tzst0f1KMXIXDyAL6XKNqXzoFJDcnasHjzecYLltL5mkIX%2Bqhqrr8aNR9TxeWbdLXPYpTqFEI3NgTDCqlVSwusPoQ1lG1cEQgI6nNJhWxgJcRD0WLjvXPhxJUzgbmMCVDz90Ygkd7xckwo4PBGzsY%2Bw0mh4GeMIxVsFgrOo31j%2Fv0dgL8Fi7EbsJ1SFMFFyVg0kB9SDIw%2BLLyxAY6pgFgphPuzX2pND5YVX3yDAOecsYnO1R%2F%2FGy4QoP%2FSScwiM4hPVBtT%2BG4Nltp4EZ72iGSUKo0I46hA%2Fhg81i%2B2cYHpjJrnGqbZ919otgZOsSBi2pe83KzY9lHKfDElTIeedwhybG32%2BTo9FHKDSqvmoZ01kbHi9kguixr14bpKHSYFo80p4q3FzIVNGuGIS9rmmbdMAeQMzqmaSBM%2FiP3a20zujESu1VI&X-Amz-Signature=538e04befc578aa896b61ca078c39ec2cadcef554271eb176cd838cd8b79d439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GR5HEB4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBo%2FqR3lspXfCNNDjM7RDQ0zSL36iaw6b%2BS98p06IaP2AiEAq%2BG3QlV0YCnv9sL5R1prGnVlh4uIqqEekTRA6PH9DXQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDPtDAkQDSN1P79JAmCrcA5KADgUum8P8R69mKCs6DgD3DtKkrcScVA7iRZ7nujUsLdvBVkQf5sEF3iSh8RdwW%2BlK5pxcJW92zaUZMy6XrNI9TYgaPgMiUnIp9o2M6n%2BVB1yWjVRtMTEBB5uuoGPsNlHrK8epgz0UNlT5h8y1cZmDRhE%2FwK8KycBhzjBPQM%2BKFkupoj2DdNmOWgiIZM06i%2FykiX%2Fb7pOfqXIAJ4aQyY2pZUMJc4BRrpu4sJCC8vXc%2B33N%2FU0S2AHS%2Fa4xx%2B1CA8VzLOiMUzO6Bs%2FRRhUOswOyzTZWl27cEiG4tJHRglTp64tJrQGgB4ME6L41ZHub5i3VGyfLBEnkb4vMzhnnQaKKpr9TMwdtsDHaguFyHwWwHynxDw3wHEW2v47nleyxhuasonN8ep1Paoz28quKAV3YFTMf290Z5OPoUMZc7sXP4%2BTiWQxq84W6CXFwvvtRbNWG8IG5a6Mf%2BTGcS77IvehCqsjQoqFExqsQ9fhNftOd7TCUMbULoenNWeK37hDoqMpa4CBnzb2bPIjavETBfJNPYjDNb75sfFqdsW4WWpLUTAOsDW%2BoY9JyYe9%2B%2FgBWsM4GTAnvDP2o0yn9XNkAxVzKxzzdRfBRrVuEn%2F09xQlINOpueQkYNFR3XlztMPix8sQGOqUBIXZFrywiYJjUfkB%2BAuo8%2FOp81%2FfXjcpuUICCvtYi%2BRkYe0hFMdHFLHCI8VAr0uRzTgWnLnzrNJary2npwhCHy2zCK6b5%2ByVObK2K8%2F9%2B6YdL%2FfwYziLX65Teyzk2%2FnuU5GwJMy9D%2FMqcw%2BneWPyXRnmCH7EYZOK7QAUzYJdmXTYi8Or146TxpV%2BmnreDjxAbuESWynnvPB9E40%2Buz%2F%2Fj2y7ggGvC&X-Amz-Signature=2484a0818b15d5e0940c37e6fbff05ad51543372f560576718536f5e187d0621&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULIN4DLN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKEOIW7nmlqnMTojE4gF32UAwESldDgOhVkESPlT4LwAiBOr0eyytgJEsAfyoiKxIiqcIX9ePVAjw6OwV0EL8%2FT0Cr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMSc%2B49b533YlipiwPKtwDv4JVVIamQg0oEQaS7LCqXIoC6yHs947XD1yY8iF%2BSAxh6Q9VYav%2B%2B34ATaygr3ooywR1%2BDo1yfxHE%2FA9hE%2BhT5rwalIsb4mmOzbQsz3V3BaR3g%2FhkPckI5g9RLvRjPFdPVMA2t7W7j07JrEb49TrCuiWRi6AsI%2BFxz9qMGBwehlmUKKBdis2Pa6QYgRdRDRjUEG%2B8NhAMLYbpXK5nKJNLLZfneKFl5O60o0QYxMQ4PBG4VAOcFT1%2BgiCRhbR%2F3WLYHo7Zp9qItXIG%2Fk4tbUQIVcN2veYz9mlAEleVkkQ%2BVwFydELBxCfPsTaC11OkmZ3hkT3CdQ882JSfBH%2F7dqItgBXvO0XznYnwNo19yGw4sGbqwqFvsL7XnV%2F089JpOdb3Tf6TX0QR5QwZWCBPJ1JXzDnpStDikKKhxjAablWvSPL%2B1but%2F3Tzst0f1KMXIXDyAL6XKNqXzoFJDcnasHjzecYLltL5mkIX%2Bqhqrr8aNR9TxeWbdLXPYpTqFEI3NgTDCqlVSwusPoQ1lG1cEQgI6nNJhWxgJcRD0WLjvXPhxJUzgbmMCVDz90Ygkd7xckwo4PBGzsY%2Bw0mh4GeMIxVsFgrOo31j%2Fv0dgL8Fi7EbsJ1SFMFFyVg0kB9SDIw%2BLLyxAY6pgFgphPuzX2pND5YVX3yDAOecsYnO1R%2F%2FGy4QoP%2FSScwiM4hPVBtT%2BG4Nltp4EZ72iGSUKo0I46hA%2Fhg81i%2B2cYHpjJrnGqbZ919otgZOsSBi2pe83KzY9lHKfDElTIeedwhybG32%2BTo9FHKDSqvmoZ01kbHi9kguixr14bpKHSYFo80p4q3FzIVNGuGIS9rmmbdMAeQMzqmaSBM%2FiP3a20zujESu1VI&X-Amz-Signature=5258ddede8709640821bd5cb9bdf0b2ab1aca4e106f9b565296f6e2d66b23472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULIN4DLN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKEOIW7nmlqnMTojE4gF32UAwESldDgOhVkESPlT4LwAiBOr0eyytgJEsAfyoiKxIiqcIX9ePVAjw6OwV0EL8%2FT0Cr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMSc%2B49b533YlipiwPKtwDv4JVVIamQg0oEQaS7LCqXIoC6yHs947XD1yY8iF%2BSAxh6Q9VYav%2B%2B34ATaygr3ooywR1%2BDo1yfxHE%2FA9hE%2BhT5rwalIsb4mmOzbQsz3V3BaR3g%2FhkPckI5g9RLvRjPFdPVMA2t7W7j07JrEb49TrCuiWRi6AsI%2BFxz9qMGBwehlmUKKBdis2Pa6QYgRdRDRjUEG%2B8NhAMLYbpXK5nKJNLLZfneKFl5O60o0QYxMQ4PBG4VAOcFT1%2BgiCRhbR%2F3WLYHo7Zp9qItXIG%2Fk4tbUQIVcN2veYz9mlAEleVkkQ%2BVwFydELBxCfPsTaC11OkmZ3hkT3CdQ882JSfBH%2F7dqItgBXvO0XznYnwNo19yGw4sGbqwqFvsL7XnV%2F089JpOdb3Tf6TX0QR5QwZWCBPJ1JXzDnpStDikKKhxjAablWvSPL%2B1but%2F3Tzst0f1KMXIXDyAL6XKNqXzoFJDcnasHjzecYLltL5mkIX%2Bqhqrr8aNR9TxeWbdLXPYpTqFEI3NgTDCqlVSwusPoQ1lG1cEQgI6nNJhWxgJcRD0WLjvXPhxJUzgbmMCVDz90Ygkd7xckwo4PBGzsY%2Bw0mh4GeMIxVsFgrOo31j%2Fv0dgL8Fi7EbsJ1SFMFFyVg0kB9SDIw%2BLLyxAY6pgFgphPuzX2pND5YVX3yDAOecsYnO1R%2F%2FGy4QoP%2FSScwiM4hPVBtT%2BG4Nltp4EZ72iGSUKo0I46hA%2Fhg81i%2B2cYHpjJrnGqbZ919otgZOsSBi2pe83KzY9lHKfDElTIeedwhybG32%2BTo9FHKDSqvmoZ01kbHi9kguixr14bpKHSYFo80p4q3FzIVNGuGIS9rmmbdMAeQMzqmaSBM%2FiP3a20zujESu1VI&X-Amz-Signature=7ecc57a10b1d7e3faeadefcb1a93fb5535b33408f04d516514f7af15de7203e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULIN4DLN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKEOIW7nmlqnMTojE4gF32UAwESldDgOhVkESPlT4LwAiBOr0eyytgJEsAfyoiKxIiqcIX9ePVAjw6OwV0EL8%2FT0Cr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMSc%2B49b533YlipiwPKtwDv4JVVIamQg0oEQaS7LCqXIoC6yHs947XD1yY8iF%2BSAxh6Q9VYav%2B%2B34ATaygr3ooywR1%2BDo1yfxHE%2FA9hE%2BhT5rwalIsb4mmOzbQsz3V3BaR3g%2FhkPckI5g9RLvRjPFdPVMA2t7W7j07JrEb49TrCuiWRi6AsI%2BFxz9qMGBwehlmUKKBdis2Pa6QYgRdRDRjUEG%2B8NhAMLYbpXK5nKJNLLZfneKFl5O60o0QYxMQ4PBG4VAOcFT1%2BgiCRhbR%2F3WLYHo7Zp9qItXIG%2Fk4tbUQIVcN2veYz9mlAEleVkkQ%2BVwFydELBxCfPsTaC11OkmZ3hkT3CdQ882JSfBH%2F7dqItgBXvO0XznYnwNo19yGw4sGbqwqFvsL7XnV%2F089JpOdb3Tf6TX0QR5QwZWCBPJ1JXzDnpStDikKKhxjAablWvSPL%2B1but%2F3Tzst0f1KMXIXDyAL6XKNqXzoFJDcnasHjzecYLltL5mkIX%2Bqhqrr8aNR9TxeWbdLXPYpTqFEI3NgTDCqlVSwusPoQ1lG1cEQgI6nNJhWxgJcRD0WLjvXPhxJUzgbmMCVDz90Ygkd7xckwo4PBGzsY%2Bw0mh4GeMIxVsFgrOo31j%2Fv0dgL8Fi7EbsJ1SFMFFyVg0kB9SDIw%2BLLyxAY6pgFgphPuzX2pND5YVX3yDAOecsYnO1R%2F%2FGy4QoP%2FSScwiM4hPVBtT%2BG4Nltp4EZ72iGSUKo0I46hA%2Fhg81i%2B2cYHpjJrnGqbZ919otgZOsSBi2pe83KzY9lHKfDElTIeedwhybG32%2BTo9FHKDSqvmoZ01kbHi9kguixr14bpKHSYFo80p4q3FzIVNGuGIS9rmmbdMAeQMzqmaSBM%2FiP3a20zujESu1VI&X-Amz-Signature=5924912243d4d1fd1dbcdd216d41153de92dab5ea9e398ad57ac23ecb0567cac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULIN4DLN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKEOIW7nmlqnMTojE4gF32UAwESldDgOhVkESPlT4LwAiBOr0eyytgJEsAfyoiKxIiqcIX9ePVAjw6OwV0EL8%2FT0Cr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMSc%2B49b533YlipiwPKtwDv4JVVIamQg0oEQaS7LCqXIoC6yHs947XD1yY8iF%2BSAxh6Q9VYav%2B%2B34ATaygr3ooywR1%2BDo1yfxHE%2FA9hE%2BhT5rwalIsb4mmOzbQsz3V3BaR3g%2FhkPckI5g9RLvRjPFdPVMA2t7W7j07JrEb49TrCuiWRi6AsI%2BFxz9qMGBwehlmUKKBdis2Pa6QYgRdRDRjUEG%2B8NhAMLYbpXK5nKJNLLZfneKFl5O60o0QYxMQ4PBG4VAOcFT1%2BgiCRhbR%2F3WLYHo7Zp9qItXIG%2Fk4tbUQIVcN2veYz9mlAEleVkkQ%2BVwFydELBxCfPsTaC11OkmZ3hkT3CdQ882JSfBH%2F7dqItgBXvO0XznYnwNo19yGw4sGbqwqFvsL7XnV%2F089JpOdb3Tf6TX0QR5QwZWCBPJ1JXzDnpStDikKKhxjAablWvSPL%2B1but%2F3Tzst0f1KMXIXDyAL6XKNqXzoFJDcnasHjzecYLltL5mkIX%2Bqhqrr8aNR9TxeWbdLXPYpTqFEI3NgTDCqlVSwusPoQ1lG1cEQgI6nNJhWxgJcRD0WLjvXPhxJUzgbmMCVDz90Ygkd7xckwo4PBGzsY%2Bw0mh4GeMIxVsFgrOo31j%2Fv0dgL8Fi7EbsJ1SFMFFyVg0kB9SDIw%2BLLyxAY6pgFgphPuzX2pND5YVX3yDAOecsYnO1R%2F%2FGy4QoP%2FSScwiM4hPVBtT%2BG4Nltp4EZ72iGSUKo0I46hA%2Fhg81i%2B2cYHpjJrnGqbZ919otgZOsSBi2pe83KzY9lHKfDElTIeedwhybG32%2BTo9FHKDSqvmoZ01kbHi9kguixr14bpKHSYFo80p4q3FzIVNGuGIS9rmmbdMAeQMzqmaSBM%2FiP3a20zujESu1VI&X-Amz-Signature=4ff20b37a2bd1955ac63b007e27d49bcc1125505d156f145b835776a4300594d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULIN4DLN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKEOIW7nmlqnMTojE4gF32UAwESldDgOhVkESPlT4LwAiBOr0eyytgJEsAfyoiKxIiqcIX9ePVAjw6OwV0EL8%2FT0Cr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMSc%2B49b533YlipiwPKtwDv4JVVIamQg0oEQaS7LCqXIoC6yHs947XD1yY8iF%2BSAxh6Q9VYav%2B%2B34ATaygr3ooywR1%2BDo1yfxHE%2FA9hE%2BhT5rwalIsb4mmOzbQsz3V3BaR3g%2FhkPckI5g9RLvRjPFdPVMA2t7W7j07JrEb49TrCuiWRi6AsI%2BFxz9qMGBwehlmUKKBdis2Pa6QYgRdRDRjUEG%2B8NhAMLYbpXK5nKJNLLZfneKFl5O60o0QYxMQ4PBG4VAOcFT1%2BgiCRhbR%2F3WLYHo7Zp9qItXIG%2Fk4tbUQIVcN2veYz9mlAEleVkkQ%2BVwFydELBxCfPsTaC11OkmZ3hkT3CdQ882JSfBH%2F7dqItgBXvO0XznYnwNo19yGw4sGbqwqFvsL7XnV%2F089JpOdb3Tf6TX0QR5QwZWCBPJ1JXzDnpStDikKKhxjAablWvSPL%2B1but%2F3Tzst0f1KMXIXDyAL6XKNqXzoFJDcnasHjzecYLltL5mkIX%2Bqhqrr8aNR9TxeWbdLXPYpTqFEI3NgTDCqlVSwusPoQ1lG1cEQgI6nNJhWxgJcRD0WLjvXPhxJUzgbmMCVDz90Ygkd7xckwo4PBGzsY%2Bw0mh4GeMIxVsFgrOo31j%2Fv0dgL8Fi7EbsJ1SFMFFyVg0kB9SDIw%2BLLyxAY6pgFgphPuzX2pND5YVX3yDAOecsYnO1R%2F%2FGy4QoP%2FSScwiM4hPVBtT%2BG4Nltp4EZ72iGSUKo0I46hA%2Fhg81i%2B2cYHpjJrnGqbZ919otgZOsSBi2pe83KzY9lHKfDElTIeedwhybG32%2BTo9FHKDSqvmoZ01kbHi9kguixr14bpKHSYFo80p4q3FzIVNGuGIS9rmmbdMAeQMzqmaSBM%2FiP3a20zujESu1VI&X-Amz-Signature=e8cdd6eec1250df71b58740c1cf2b7cdb10b4556884cb0364d83795cf5b6e7c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULIN4DLN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKEOIW7nmlqnMTojE4gF32UAwESldDgOhVkESPlT4LwAiBOr0eyytgJEsAfyoiKxIiqcIX9ePVAjw6OwV0EL8%2FT0Cr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMSc%2B49b533YlipiwPKtwDv4JVVIamQg0oEQaS7LCqXIoC6yHs947XD1yY8iF%2BSAxh6Q9VYav%2B%2B34ATaygr3ooywR1%2BDo1yfxHE%2FA9hE%2BhT5rwalIsb4mmOzbQsz3V3BaR3g%2FhkPckI5g9RLvRjPFdPVMA2t7W7j07JrEb49TrCuiWRi6AsI%2BFxz9qMGBwehlmUKKBdis2Pa6QYgRdRDRjUEG%2B8NhAMLYbpXK5nKJNLLZfneKFl5O60o0QYxMQ4PBG4VAOcFT1%2BgiCRhbR%2F3WLYHo7Zp9qItXIG%2Fk4tbUQIVcN2veYz9mlAEleVkkQ%2BVwFydELBxCfPsTaC11OkmZ3hkT3CdQ882JSfBH%2F7dqItgBXvO0XznYnwNo19yGw4sGbqwqFvsL7XnV%2F089JpOdb3Tf6TX0QR5QwZWCBPJ1JXzDnpStDikKKhxjAablWvSPL%2B1but%2F3Tzst0f1KMXIXDyAL6XKNqXzoFJDcnasHjzecYLltL5mkIX%2Bqhqrr8aNR9TxeWbdLXPYpTqFEI3NgTDCqlVSwusPoQ1lG1cEQgI6nNJhWxgJcRD0WLjvXPhxJUzgbmMCVDz90Ygkd7xckwo4PBGzsY%2Bw0mh4GeMIxVsFgrOo31j%2Fv0dgL8Fi7EbsJ1SFMFFyVg0kB9SDIw%2BLLyxAY6pgFgphPuzX2pND5YVX3yDAOecsYnO1R%2F%2FGy4QoP%2FSScwiM4hPVBtT%2BG4Nltp4EZ72iGSUKo0I46hA%2Fhg81i%2B2cYHpjJrnGqbZ919otgZOsSBi2pe83KzY9lHKfDElTIeedwhybG32%2BTo9FHKDSqvmoZ01kbHi9kguixr14bpKHSYFo80p4q3FzIVNGuGIS9rmmbdMAeQMzqmaSBM%2FiP3a20zujESu1VI&X-Amz-Signature=7c2376711c5964d28a6de984900f75366fe90569695af45049e1c5fe2dafb4a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
