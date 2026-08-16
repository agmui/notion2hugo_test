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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMXCS5IE%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHypppbEGFingaHMRxqwgY8956SP1quhZvuN24gJIQVwAiAZ0a5p0e3ORXUXwiiji21Sk97X95FRMCP42hLcZsklRyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMslngOLZ3kNo9R%2FWwKtwDrKbG2Vrv8aqi9tec%2FofF59KxTJWfVhGKJjpI3R0FXuPSmAEeG5NQoCF%2B9Ebf4K3duiGakEShYCddW6vHToQ6SW8OF7CI0MdiWvghs%2BxKsDnt%2BdzSUHX4vaV%2BD6h4qJrktFraw1UXJthnyUNzo1d2CgZob49I3Ij3lJl28ExnLIGzg%2BPLbvnWO6VW5aLa%2FDs7Uvct6vD5C75oq9YmmpBeElmFvN7JY%2B3c5XTs54T3A3dcJlK6PHIwhoo1FJIiiE7OHHJlYpv%2B1edkghKfYCOx5qS%2BA1CRlQKvOywsndfeeUE%2BhbyYSKHLseUmMZ0P%2FTJeV8YIMH1eaHL9Uw9JAMCorj2Mt7DiCZoTEvzjl3kmdIjViMqmZoqN6NshoOwgzDbY1eoY2BRskA7LVP%2FS1NJOCWfnaECyA4ycdAnecnSeuop%2BdwxKIsCFCM8qIEhedZqmOyGxyON4DXbOCCjRhrrc9rC4cF%2FgaCq2G75tJEUKLFoT%2BKEuIkask%2F1OVb0UnIg%2FJjItYPQW%2B5foDnvhrWGlBdfLE3LhtdqV6U8SE0M8yIvFqtnnWLhCT674vgwSBhxcvPL1MdFltOVp8JqMdg58yRwKdKBVokmwqV9LdwSUTBx4zWi4Qe3JQW1P8yQwm%2ByD1AY6pgFc98f6d1LcGanW8EwR5Gmc20xCHREXgHdaC%2BfI3fHmLtW4G25vyOV6WBo%2Fv4AyUXf%2FnjdvUQqqKKLso6crwzPyWpthNk1wVYrwHGvh6IntL0XiooyS8o9u0CSPxV6qC1r4wF54nsC3nr7sLpdHK7h8w%2BVyr2zgh04pVm3CGZBCoF3BJ9tOJ685FKXi9NYmmlQuI9HooRLxC3NOlGf1WdSc8RATcQe2&X-Amz-Signature=b579e0357728a6bc94063fc36fa572aaf6cb9504257fa50d3fa052f1bd0cc9ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMXCS5IE%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHypppbEGFingaHMRxqwgY8956SP1quhZvuN24gJIQVwAiAZ0a5p0e3ORXUXwiiji21Sk97X95FRMCP42hLcZsklRyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMslngOLZ3kNo9R%2FWwKtwDrKbG2Vrv8aqi9tec%2FofF59KxTJWfVhGKJjpI3R0FXuPSmAEeG5NQoCF%2B9Ebf4K3duiGakEShYCddW6vHToQ6SW8OF7CI0MdiWvghs%2BxKsDnt%2BdzSUHX4vaV%2BD6h4qJrktFraw1UXJthnyUNzo1d2CgZob49I3Ij3lJl28ExnLIGzg%2BPLbvnWO6VW5aLa%2FDs7Uvct6vD5C75oq9YmmpBeElmFvN7JY%2B3c5XTs54T3A3dcJlK6PHIwhoo1FJIiiE7OHHJlYpv%2B1edkghKfYCOx5qS%2BA1CRlQKvOywsndfeeUE%2BhbyYSKHLseUmMZ0P%2FTJeV8YIMH1eaHL9Uw9JAMCorj2Mt7DiCZoTEvzjl3kmdIjViMqmZoqN6NshoOwgzDbY1eoY2BRskA7LVP%2FS1NJOCWfnaECyA4ycdAnecnSeuop%2BdwxKIsCFCM8qIEhedZqmOyGxyON4DXbOCCjRhrrc9rC4cF%2FgaCq2G75tJEUKLFoT%2BKEuIkask%2F1OVb0UnIg%2FJjItYPQW%2B5foDnvhrWGlBdfLE3LhtdqV6U8SE0M8yIvFqtnnWLhCT674vgwSBhxcvPL1MdFltOVp8JqMdg58yRwKdKBVokmwqV9LdwSUTBx4zWi4Qe3JQW1P8yQwm%2ByD1AY6pgFc98f6d1LcGanW8EwR5Gmc20xCHREXgHdaC%2BfI3fHmLtW4G25vyOV6WBo%2Fv4AyUXf%2FnjdvUQqqKKLso6crwzPyWpthNk1wVYrwHGvh6IntL0XiooyS8o9u0CSPxV6qC1r4wF54nsC3nr7sLpdHK7h8w%2BVyr2zgh04pVm3CGZBCoF3BJ9tOJ685FKXi9NYmmlQuI9HooRLxC3NOlGf1WdSc8RATcQe2&X-Amz-Signature=03d8d13d996d79805ed9bb799b437f4de62c921f8828f55c3c46a56497a2e164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMXCS5IE%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHypppbEGFingaHMRxqwgY8956SP1quhZvuN24gJIQVwAiAZ0a5p0e3ORXUXwiiji21Sk97X95FRMCP42hLcZsklRyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMslngOLZ3kNo9R%2FWwKtwDrKbG2Vrv8aqi9tec%2FofF59KxTJWfVhGKJjpI3R0FXuPSmAEeG5NQoCF%2B9Ebf4K3duiGakEShYCddW6vHToQ6SW8OF7CI0MdiWvghs%2BxKsDnt%2BdzSUHX4vaV%2BD6h4qJrktFraw1UXJthnyUNzo1d2CgZob49I3Ij3lJl28ExnLIGzg%2BPLbvnWO6VW5aLa%2FDs7Uvct6vD5C75oq9YmmpBeElmFvN7JY%2B3c5XTs54T3A3dcJlK6PHIwhoo1FJIiiE7OHHJlYpv%2B1edkghKfYCOx5qS%2BA1CRlQKvOywsndfeeUE%2BhbyYSKHLseUmMZ0P%2FTJeV8YIMH1eaHL9Uw9JAMCorj2Mt7DiCZoTEvzjl3kmdIjViMqmZoqN6NshoOwgzDbY1eoY2BRskA7LVP%2FS1NJOCWfnaECyA4ycdAnecnSeuop%2BdwxKIsCFCM8qIEhedZqmOyGxyON4DXbOCCjRhrrc9rC4cF%2FgaCq2G75tJEUKLFoT%2BKEuIkask%2F1OVb0UnIg%2FJjItYPQW%2B5foDnvhrWGlBdfLE3LhtdqV6U8SE0M8yIvFqtnnWLhCT674vgwSBhxcvPL1MdFltOVp8JqMdg58yRwKdKBVokmwqV9LdwSUTBx4zWi4Qe3JQW1P8yQwm%2ByD1AY6pgFc98f6d1LcGanW8EwR5Gmc20xCHREXgHdaC%2BfI3fHmLtW4G25vyOV6WBo%2Fv4AyUXf%2FnjdvUQqqKKLso6crwzPyWpthNk1wVYrwHGvh6IntL0XiooyS8o9u0CSPxV6qC1r4wF54nsC3nr7sLpdHK7h8w%2BVyr2zgh04pVm3CGZBCoF3BJ9tOJ685FKXi9NYmmlQuI9HooRLxC3NOlGf1WdSc8RATcQe2&X-Amz-Signature=885b8af4544fd5664add0483e9db6c1ab722b4ca8ff6df5bb4bcfff2b25ebdc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMXCS5IE%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHypppbEGFingaHMRxqwgY8956SP1quhZvuN24gJIQVwAiAZ0a5p0e3ORXUXwiiji21Sk97X95FRMCP42hLcZsklRyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMslngOLZ3kNo9R%2FWwKtwDrKbG2Vrv8aqi9tec%2FofF59KxTJWfVhGKJjpI3R0FXuPSmAEeG5NQoCF%2B9Ebf4K3duiGakEShYCddW6vHToQ6SW8OF7CI0MdiWvghs%2BxKsDnt%2BdzSUHX4vaV%2BD6h4qJrktFraw1UXJthnyUNzo1d2CgZob49I3Ij3lJl28ExnLIGzg%2BPLbvnWO6VW5aLa%2FDs7Uvct6vD5C75oq9YmmpBeElmFvN7JY%2B3c5XTs54T3A3dcJlK6PHIwhoo1FJIiiE7OHHJlYpv%2B1edkghKfYCOx5qS%2BA1CRlQKvOywsndfeeUE%2BhbyYSKHLseUmMZ0P%2FTJeV8YIMH1eaHL9Uw9JAMCorj2Mt7DiCZoTEvzjl3kmdIjViMqmZoqN6NshoOwgzDbY1eoY2BRskA7LVP%2FS1NJOCWfnaECyA4ycdAnecnSeuop%2BdwxKIsCFCM8qIEhedZqmOyGxyON4DXbOCCjRhrrc9rC4cF%2FgaCq2G75tJEUKLFoT%2BKEuIkask%2F1OVb0UnIg%2FJjItYPQW%2B5foDnvhrWGlBdfLE3LhtdqV6U8SE0M8yIvFqtnnWLhCT674vgwSBhxcvPL1MdFltOVp8JqMdg58yRwKdKBVokmwqV9LdwSUTBx4zWi4Qe3JQW1P8yQwm%2ByD1AY6pgFc98f6d1LcGanW8EwR5Gmc20xCHREXgHdaC%2BfI3fHmLtW4G25vyOV6WBo%2Fv4AyUXf%2FnjdvUQqqKKLso6crwzPyWpthNk1wVYrwHGvh6IntL0XiooyS8o9u0CSPxV6qC1r4wF54nsC3nr7sLpdHK7h8w%2BVyr2zgh04pVm3CGZBCoF3BJ9tOJ685FKXi9NYmmlQuI9HooRLxC3NOlGf1WdSc8RATcQe2&X-Amz-Signature=8354de718da8c0bdeae83783e75a3525c71e7cdbd32b33458bf59f3208a343c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7V2Z5YG%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC%2FrvuUGKG3jeCTYH%2FOwSt8zUn0v99NAwvx2iBjrSRWvQIhALdKCSyvb85%2FUJRwE%2BULsOyHjl7gdb4zz06%2FSbPzYP3YKv8DCCEQABoMNjM3NDIzMTgzODA1IgyXCc%2Fa88F7oU5ZnZkq3APUFDJG5snahOJ6vxVa6X%2F1xRMDT0N3RUKm5qz2M9tpsNQhSDMxv0Kie923K6ucSb5YfOoKw%2FBymdplLcWc%2F6tnRdGme4wY7%2Fomrov9%2FEV2Uqa7yao4s%2B97AP8R5yR6nRIuuU5S9wQ32DLsXaSvG7OaZN97V5jPNA719b3TCUVjYfAUPsXNXFB6DCkoS5L5iFZabKS9gJmy9avnmhg9JZKa02XojVPqyfO54lxIVeZFhh7u%2FrXMkcXbUDKS%2BwQhCCh%2F9XX44I5wvy4VMMkn5OMNaO8nJLacWssTceZOMUPo8IRW%2Bqw2Q%2F2BIMdL9pbhz4ddwZg8XkiQZrag8Nsxi%2FPazHehd7hX5ez9dJ45mVf3PwcH4Y2mu0OkOEhOLKVpjke1hPzhUAgfYONhu2OE8F2%2B09WDo1y2kAFCNui8ESjgh13k2zhh08SZG5YL5i7ZKArdWCC8HJfsXoTznudpxOO%2Bcky%2Fz8fseV50LARAG%2Bs%2FL6w44rcEAd3j7d%2FmnLiAYIFeL5Ms05mhju81GPht8ZaSRxMoqzrrKSSV66RG%2FlZnteGxE5IjliCZYfiMm1VvrhRDXy%2Fty%2FI3F4by5Fv7szj6NvBfYoj2oBeDdMUNM2FGbpONw54PAz6wE%2FG%2FLjD%2B64PUBjqkAdIGyyt%2FjXB%2B6eCwgnuJIUcuvmkMqM8Yt2ywt%2BjKp3wVKqiQ4ZZbsC3l%2F7N1OmI1QCYnS95ghNFWlnLcM%2Fp85DiWQa4%2Fm9ujN86VF0V1u2WbPL0RieLkuqNenb3kEvvhPQn4z9xgeDdwU1UbKVt%2B65DtKnLWs6a%2Fh%2B5Y%2B%2B4Fc%2F2bE%2FKgmN%2BDlB6u055lrVMOmtwnS7D2tRjupfUHw8qMJDDPEb8k&X-Amz-Signature=167d42ab862edabc237420480cbd41b94a00beae1b897b18ca11ab6a335d3a41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMXCS5IE%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHypppbEGFingaHMRxqwgY8956SP1quhZvuN24gJIQVwAiAZ0a5p0e3ORXUXwiiji21Sk97X95FRMCP42hLcZsklRyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMslngOLZ3kNo9R%2FWwKtwDrKbG2Vrv8aqi9tec%2FofF59KxTJWfVhGKJjpI3R0FXuPSmAEeG5NQoCF%2B9Ebf4K3duiGakEShYCddW6vHToQ6SW8OF7CI0MdiWvghs%2BxKsDnt%2BdzSUHX4vaV%2BD6h4qJrktFraw1UXJthnyUNzo1d2CgZob49I3Ij3lJl28ExnLIGzg%2BPLbvnWO6VW5aLa%2FDs7Uvct6vD5C75oq9YmmpBeElmFvN7JY%2B3c5XTs54T3A3dcJlK6PHIwhoo1FJIiiE7OHHJlYpv%2B1edkghKfYCOx5qS%2BA1CRlQKvOywsndfeeUE%2BhbyYSKHLseUmMZ0P%2FTJeV8YIMH1eaHL9Uw9JAMCorj2Mt7DiCZoTEvzjl3kmdIjViMqmZoqN6NshoOwgzDbY1eoY2BRskA7LVP%2FS1NJOCWfnaECyA4ycdAnecnSeuop%2BdwxKIsCFCM8qIEhedZqmOyGxyON4DXbOCCjRhrrc9rC4cF%2FgaCq2G75tJEUKLFoT%2BKEuIkask%2F1OVb0UnIg%2FJjItYPQW%2B5foDnvhrWGlBdfLE3LhtdqV6U8SE0M8yIvFqtnnWLhCT674vgwSBhxcvPL1MdFltOVp8JqMdg58yRwKdKBVokmwqV9LdwSUTBx4zWi4Qe3JQW1P8yQwm%2ByD1AY6pgFc98f6d1LcGanW8EwR5Gmc20xCHREXgHdaC%2BfI3fHmLtW4G25vyOV6WBo%2Fv4AyUXf%2FnjdvUQqqKKLso6crwzPyWpthNk1wVYrwHGvh6IntL0XiooyS8o9u0CSPxV6qC1r4wF54nsC3nr7sLpdHK7h8w%2BVyr2zgh04pVm3CGZBCoF3BJ9tOJ685FKXi9NYmmlQuI9HooRLxC3NOlGf1WdSc8RATcQe2&X-Amz-Signature=04e04c4096e62ee44e81bb7270cbf7352919fb2b39bd8279507b2f42fec1d19b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMXCS5IE%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHypppbEGFingaHMRxqwgY8956SP1quhZvuN24gJIQVwAiAZ0a5p0e3ORXUXwiiji21Sk97X95FRMCP42hLcZsklRyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMslngOLZ3kNo9R%2FWwKtwDrKbG2Vrv8aqi9tec%2FofF59KxTJWfVhGKJjpI3R0FXuPSmAEeG5NQoCF%2B9Ebf4K3duiGakEShYCddW6vHToQ6SW8OF7CI0MdiWvghs%2BxKsDnt%2BdzSUHX4vaV%2BD6h4qJrktFraw1UXJthnyUNzo1d2CgZob49I3Ij3lJl28ExnLIGzg%2BPLbvnWO6VW5aLa%2FDs7Uvct6vD5C75oq9YmmpBeElmFvN7JY%2B3c5XTs54T3A3dcJlK6PHIwhoo1FJIiiE7OHHJlYpv%2B1edkghKfYCOx5qS%2BA1CRlQKvOywsndfeeUE%2BhbyYSKHLseUmMZ0P%2FTJeV8YIMH1eaHL9Uw9JAMCorj2Mt7DiCZoTEvzjl3kmdIjViMqmZoqN6NshoOwgzDbY1eoY2BRskA7LVP%2FS1NJOCWfnaECyA4ycdAnecnSeuop%2BdwxKIsCFCM8qIEhedZqmOyGxyON4DXbOCCjRhrrc9rC4cF%2FgaCq2G75tJEUKLFoT%2BKEuIkask%2F1OVb0UnIg%2FJjItYPQW%2B5foDnvhrWGlBdfLE3LhtdqV6U8SE0M8yIvFqtnnWLhCT674vgwSBhxcvPL1MdFltOVp8JqMdg58yRwKdKBVokmwqV9LdwSUTBx4zWi4Qe3JQW1P8yQwm%2ByD1AY6pgFc98f6d1LcGanW8EwR5Gmc20xCHREXgHdaC%2BfI3fHmLtW4G25vyOV6WBo%2Fv4AyUXf%2FnjdvUQqqKKLso6crwzPyWpthNk1wVYrwHGvh6IntL0XiooyS8o9u0CSPxV6qC1r4wF54nsC3nr7sLpdHK7h8w%2BVyr2zgh04pVm3CGZBCoF3BJ9tOJ685FKXi9NYmmlQuI9HooRLxC3NOlGf1WdSc8RATcQe2&X-Amz-Signature=e7195c1af5f67a9ececce766581151a60a25c909b8fe48b815ded0326f0eb426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMXCS5IE%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHypppbEGFingaHMRxqwgY8956SP1quhZvuN24gJIQVwAiAZ0a5p0e3ORXUXwiiji21Sk97X95FRMCP42hLcZsklRyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMslngOLZ3kNo9R%2FWwKtwDrKbG2Vrv8aqi9tec%2FofF59KxTJWfVhGKJjpI3R0FXuPSmAEeG5NQoCF%2B9Ebf4K3duiGakEShYCddW6vHToQ6SW8OF7CI0MdiWvghs%2BxKsDnt%2BdzSUHX4vaV%2BD6h4qJrktFraw1UXJthnyUNzo1d2CgZob49I3Ij3lJl28ExnLIGzg%2BPLbvnWO6VW5aLa%2FDs7Uvct6vD5C75oq9YmmpBeElmFvN7JY%2B3c5XTs54T3A3dcJlK6PHIwhoo1FJIiiE7OHHJlYpv%2B1edkghKfYCOx5qS%2BA1CRlQKvOywsndfeeUE%2BhbyYSKHLseUmMZ0P%2FTJeV8YIMH1eaHL9Uw9JAMCorj2Mt7DiCZoTEvzjl3kmdIjViMqmZoqN6NshoOwgzDbY1eoY2BRskA7LVP%2FS1NJOCWfnaECyA4ycdAnecnSeuop%2BdwxKIsCFCM8qIEhedZqmOyGxyON4DXbOCCjRhrrc9rC4cF%2FgaCq2G75tJEUKLFoT%2BKEuIkask%2F1OVb0UnIg%2FJjItYPQW%2B5foDnvhrWGlBdfLE3LhtdqV6U8SE0M8yIvFqtnnWLhCT674vgwSBhxcvPL1MdFltOVp8JqMdg58yRwKdKBVokmwqV9LdwSUTBx4zWi4Qe3JQW1P8yQwm%2ByD1AY6pgFc98f6d1LcGanW8EwR5Gmc20xCHREXgHdaC%2BfI3fHmLtW4G25vyOV6WBo%2Fv4AyUXf%2FnjdvUQqqKKLso6crwzPyWpthNk1wVYrwHGvh6IntL0XiooyS8o9u0CSPxV6qC1r4wF54nsC3nr7sLpdHK7h8w%2BVyr2zgh04pVm3CGZBCoF3BJ9tOJ685FKXi9NYmmlQuI9HooRLxC3NOlGf1WdSc8RATcQe2&X-Amz-Signature=2dd1bf39effe3addc9aae30f8ab09bec381034f02f4d820bb240c87a5a722c64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMXCS5IE%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHypppbEGFingaHMRxqwgY8956SP1quhZvuN24gJIQVwAiAZ0a5p0e3ORXUXwiiji21Sk97X95FRMCP42hLcZsklRyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMslngOLZ3kNo9R%2FWwKtwDrKbG2Vrv8aqi9tec%2FofF59KxTJWfVhGKJjpI3R0FXuPSmAEeG5NQoCF%2B9Ebf4K3duiGakEShYCddW6vHToQ6SW8OF7CI0MdiWvghs%2BxKsDnt%2BdzSUHX4vaV%2BD6h4qJrktFraw1UXJthnyUNzo1d2CgZob49I3Ij3lJl28ExnLIGzg%2BPLbvnWO6VW5aLa%2FDs7Uvct6vD5C75oq9YmmpBeElmFvN7JY%2B3c5XTs54T3A3dcJlK6PHIwhoo1FJIiiE7OHHJlYpv%2B1edkghKfYCOx5qS%2BA1CRlQKvOywsndfeeUE%2BhbyYSKHLseUmMZ0P%2FTJeV8YIMH1eaHL9Uw9JAMCorj2Mt7DiCZoTEvzjl3kmdIjViMqmZoqN6NshoOwgzDbY1eoY2BRskA7LVP%2FS1NJOCWfnaECyA4ycdAnecnSeuop%2BdwxKIsCFCM8qIEhedZqmOyGxyON4DXbOCCjRhrrc9rC4cF%2FgaCq2G75tJEUKLFoT%2BKEuIkask%2F1OVb0UnIg%2FJjItYPQW%2B5foDnvhrWGlBdfLE3LhtdqV6U8SE0M8yIvFqtnnWLhCT674vgwSBhxcvPL1MdFltOVp8JqMdg58yRwKdKBVokmwqV9LdwSUTBx4zWi4Qe3JQW1P8yQwm%2ByD1AY6pgFc98f6d1LcGanW8EwR5Gmc20xCHREXgHdaC%2BfI3fHmLtW4G25vyOV6WBo%2Fv4AyUXf%2FnjdvUQqqKKLso6crwzPyWpthNk1wVYrwHGvh6IntL0XiooyS8o9u0CSPxV6qC1r4wF54nsC3nr7sLpdHK7h8w%2BVyr2zgh04pVm3CGZBCoF3BJ9tOJ685FKXi9NYmmlQuI9HooRLxC3NOlGf1WdSc8RATcQe2&X-Amz-Signature=a3a643943006568846e54e407aadf079354a9137891b9ea067990365f421b220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMXCS5IE%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHypppbEGFingaHMRxqwgY8956SP1quhZvuN24gJIQVwAiAZ0a5p0e3ORXUXwiiji21Sk97X95FRMCP42hLcZsklRyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMslngOLZ3kNo9R%2FWwKtwDrKbG2Vrv8aqi9tec%2FofF59KxTJWfVhGKJjpI3R0FXuPSmAEeG5NQoCF%2B9Ebf4K3duiGakEShYCddW6vHToQ6SW8OF7CI0MdiWvghs%2BxKsDnt%2BdzSUHX4vaV%2BD6h4qJrktFraw1UXJthnyUNzo1d2CgZob49I3Ij3lJl28ExnLIGzg%2BPLbvnWO6VW5aLa%2FDs7Uvct6vD5C75oq9YmmpBeElmFvN7JY%2B3c5XTs54T3A3dcJlK6PHIwhoo1FJIiiE7OHHJlYpv%2B1edkghKfYCOx5qS%2BA1CRlQKvOywsndfeeUE%2BhbyYSKHLseUmMZ0P%2FTJeV8YIMH1eaHL9Uw9JAMCorj2Mt7DiCZoTEvzjl3kmdIjViMqmZoqN6NshoOwgzDbY1eoY2BRskA7LVP%2FS1NJOCWfnaECyA4ycdAnecnSeuop%2BdwxKIsCFCM8qIEhedZqmOyGxyON4DXbOCCjRhrrc9rC4cF%2FgaCq2G75tJEUKLFoT%2BKEuIkask%2F1OVb0UnIg%2FJjItYPQW%2B5foDnvhrWGlBdfLE3LhtdqV6U8SE0M8yIvFqtnnWLhCT674vgwSBhxcvPL1MdFltOVp8JqMdg58yRwKdKBVokmwqV9LdwSUTBx4zWi4Qe3JQW1P8yQwm%2ByD1AY6pgFc98f6d1LcGanW8EwR5Gmc20xCHREXgHdaC%2BfI3fHmLtW4G25vyOV6WBo%2Fv4AyUXf%2FnjdvUQqqKKLso6crwzPyWpthNk1wVYrwHGvh6IntL0XiooyS8o9u0CSPxV6qC1r4wF54nsC3nr7sLpdHK7h8w%2BVyr2zgh04pVm3CGZBCoF3BJ9tOJ685FKXi9NYmmlQuI9HooRLxC3NOlGf1WdSc8RATcQe2&X-Amz-Signature=931a575732f92ccff41f1f1eab5b1ce0427217cdd114a75372c7660c80cbcda4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMXCS5IE%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHypppbEGFingaHMRxqwgY8956SP1quhZvuN24gJIQVwAiAZ0a5p0e3ORXUXwiiji21Sk97X95FRMCP42hLcZsklRyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMslngOLZ3kNo9R%2FWwKtwDrKbG2Vrv8aqi9tec%2FofF59KxTJWfVhGKJjpI3R0FXuPSmAEeG5NQoCF%2B9Ebf4K3duiGakEShYCddW6vHToQ6SW8OF7CI0MdiWvghs%2BxKsDnt%2BdzSUHX4vaV%2BD6h4qJrktFraw1UXJthnyUNzo1d2CgZob49I3Ij3lJl28ExnLIGzg%2BPLbvnWO6VW5aLa%2FDs7Uvct6vD5C75oq9YmmpBeElmFvN7JY%2B3c5XTs54T3A3dcJlK6PHIwhoo1FJIiiE7OHHJlYpv%2B1edkghKfYCOx5qS%2BA1CRlQKvOywsndfeeUE%2BhbyYSKHLseUmMZ0P%2FTJeV8YIMH1eaHL9Uw9JAMCorj2Mt7DiCZoTEvzjl3kmdIjViMqmZoqN6NshoOwgzDbY1eoY2BRskA7LVP%2FS1NJOCWfnaECyA4ycdAnecnSeuop%2BdwxKIsCFCM8qIEhedZqmOyGxyON4DXbOCCjRhrrc9rC4cF%2FgaCq2G75tJEUKLFoT%2BKEuIkask%2F1OVb0UnIg%2FJjItYPQW%2B5foDnvhrWGlBdfLE3LhtdqV6U8SE0M8yIvFqtnnWLhCT674vgwSBhxcvPL1MdFltOVp8JqMdg58yRwKdKBVokmwqV9LdwSUTBx4zWi4Qe3JQW1P8yQwm%2ByD1AY6pgFc98f6d1LcGanW8EwR5Gmc20xCHREXgHdaC%2BfI3fHmLtW4G25vyOV6WBo%2Fv4AyUXf%2FnjdvUQqqKKLso6crwzPyWpthNk1wVYrwHGvh6IntL0XiooyS8o9u0CSPxV6qC1r4wF54nsC3nr7sLpdHK7h8w%2BVyr2zgh04pVm3CGZBCoF3BJ9tOJ685FKXi9NYmmlQuI9HooRLxC3NOlGf1WdSc8RATcQe2&X-Amz-Signature=3a3b849f6220d132641c089f098b5c08e8f45eeb221187a2bf082b6c4cb4e3d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


